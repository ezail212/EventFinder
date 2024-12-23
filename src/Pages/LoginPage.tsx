import { Spacer } from '../Elements/Spacer'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  PASSWORD_ASIDE_ID,
  PASSWORD_DIV_ID,
  USER_ASIDE_ID,
  USER_DIV_ID,
} from '../Common/ElementIds'
import { PASSWORD_REQUIRED, USER_OR_EMAIL_REQUIRED } from '../Common/StringConstants'
import { HOME_PATH, SIGNUP_PATH } from '../Common/PathConstants'
import { LogoButton } from '../Elements/LogoButton'
import { createAsideElement, fetchLoginApi } from '../Common/Utility'
import { LoginData } from '../Models/LoginData'

export const LoginPage = () => {
  const navigateToHome = useNavigate()
  const userInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)

  let userAsideElement: HTMLElement | null

  const onLogInClick = async (event) => {
    event.preventDefault()
    if (user.trim().length === 0) {
      userAsideElement = document.getElementById(USER_ASIDE_ID)
      if (!userAsideElement) {
        const userAsideElement = createAsideElement(USER_ASIDE_ID, USER_OR_EMAIL_REQUIRED)
        const userDiv = document.getElementById(USER_DIV_ID)
        if (userDiv !== null) {
          userDiv.appendChild(userAsideElement)
        }
      } else {
        userAsideElement.hidden = false
      }
      return
    } else {
      userAsideElement = document.getElementById(USER_ASIDE_ID)
      if (userAsideElement) {
        userAsideElement.hidden = true
      }
    }

    let passwordAsideElement: HTMLElement | null
    if (password.trim().length === 0) {
      passwordAsideElement = document.getElementById(PASSWORD_ASIDE_ID)
      if (!passwordAsideElement) {
        const passwordAsideElement = createAsideElement(PASSWORD_ASIDE_ID, PASSWORD_REQUIRED)
        const passwordDiv = document.getElementById(PASSWORD_DIV_ID)
        if (passwordDiv !== null) {
          passwordDiv.appendChild(passwordAsideElement)
        }
      } else {
        passwordAsideElement.hidden = false
      }
      return
    } else {
      passwordAsideElement = document.getElementById(PASSWORD_ASIDE_ID)
      if (passwordAsideElement) {
        passwordAsideElement.hidden = true
      }
    }

    const loginData: LoginData = {
      Username: user,
      Email: user,
      Password: password,
    }

    const response = await fetchLoginApi(loginData)
    if (response) {
      navigateToHome(HOME_PATH)
    }
  }

  const onUserClick = () => {
    userInputRef?.current?.focus()
  }

  const onPasswordClick = () => {
    passwordInputRef.current?.focus()
  }

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const onChangeUser = (e) => {
    setUser(e.target.value)
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleLogoClick = () => {
    navigateToHome(HOME_PATH)
  }

  return (
    <>
      <div className='flexbox-column justify-content-center align-center padding-top-10-percent'>
        <div className='flex justify-content-center width-33-percent'>
          <div>
            <LogoButton buttonClassName='login-logo-button-text' />
            <button
              className='logo-button background-color-transparent border-none'
              onClick={handleLogoClick}
            />
          </div>
          <div className='flexbox-row justify-content-flex-start align-center'>
            <h1>Log In</h1>
            <Spacer direction={'horizontal'} size={300} />
            <a href={SIGNUP_PATH}>Sign Up</a>
          </div>
          <form className='border-solid-1px border-radius-5px' onSubmit={onLogInClick}>
            <div
              className='flexbox-column align-start padding-x-10px padding-y-5px login-input-container border-radius-5px'
              onClick={onUserClick}
              id={USER_DIV_ID}
            >
              <div>
                <label className='color-gray font-14px'>Username/Email address</label>
              </div>
              <input
                className='outline-none border-none min-height-20px min-width-90-percent'
                type='text'
                ref={userInputRef}
                onChange={onChangeUser}
                required={true}
              ></input>
            </div>
            <div
              className='flexbox-column align-start padding-x-10px padding-y-5px border-radius-5px'
              onClick={onPasswordClick}
              id={PASSWORD_DIV_ID}
            >
              <div>
                <label className='color-gray font-14px'>Password</label>
              </div>
              <input
                className='outline-none border-none min-height-20px min-width-90-percent'
                type='password'
                ref={passwordInputRef}
                onChange={onChangePassword}
                required={true}
              ></input>
            </div>
            <button hidden type='submit'></button>
          </form>
          <Spacer direction={'vertical'} size={50} />
          <button
            type='submit'
            className='login-button min-width-100-percent min-height-50px border-radius-5px'
            onClick={onLogInClick}
          >
            Log In
          </button>
        </div>
      </div>
    </>
  )
}
