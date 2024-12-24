import { Spacer } from '../Elements/Spacer'
import {
  EMAIL_ASIDE_ID,
  EMAIL_DIV_ID,
  PASSWORD_ASIDE_ID,
  PASSWORD_DIV_ID,
  USER_ASIDE_ID,
  USERNAME_DIV_ID,
} from '../Common/ElementIds'
import { HOME_PATH, LOGIN_PATH } from '../Common/PathConstants'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogoButton } from '../Elements/LogoButton'
import { SIGN_UP_ENDPOINT } from '../Common/EndpointConstants'
import {
  EMAIL_NOT_VALID,
  EMAIL_REQUIRED,
  PASSWORD_REQUIRED,
  PASSWORD_REQUIREMENT,
  USER_EXISTS,
  USERNAME_REQUIRED,
} from '../Common/StringConstants'
import { createAsideElement, fetchLoginApi } from '../Common/Utility'
import { LoginData } from '../Models/LoginData'

export const SignupPage = () => {
  const navigateToHome = useNavigate()

  const usernameInputRef = useRef<HTMLInputElement>(null)
  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)

  const onUsernameClick = () => {
    usernameInputRef.current?.focus()
  }
  const onEmailClick = () => {
    emailInputRef.current?.focus()
  }
  const onPasswordClick = () => {
    passwordInputRef.current?.focus()
  }

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onChangeUsername = (e) => {
    setUsername(e.target.value)
  }
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const onSignUpClick = async (event) => {
    event.preventDefault()

    let userAsideElement: HTMLElement | null
    if (username.trim().length === 0) {
      userAsideElement = document.getElementById(USER_ASIDE_ID)
      if (!userAsideElement) {
        const userAsideElement = createAsideElement(USER_ASIDE_ID, USERNAME_REQUIRED)
        const userDiv = document.getElementById(USERNAME_DIV_ID)
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

    let emailAsideElement: HTMLElement | null
    if (email.trim().length === 0) {
      emailAsideElement = document.getElementById(EMAIL_ASIDE_ID)
      if (!emailAsideElement) {
        const emailAsideElement = createAsideElement(EMAIL_ASIDE_ID, EMAIL_REQUIRED)
        const emailDiv = document.getElementById(EMAIL_DIV_ID)
        if (emailDiv !== null) {
          emailDiv.appendChild(emailAsideElement)
        }
      } else {
        emailAsideElement.hidden = false
      }
      return
    } else {
      const validEmail = RegExp('^[\\w-.]+@([\\w-]+.)+[\\w-]{2,4}$')
      emailAsideElement = document.getElementById(EMAIL_ASIDE_ID)

      if (!validEmail.test(email) && emailAsideElement) {
        emailAsideElement.hidden = false
        const textElement = emailAsideElement.children[0]
        textElement.textContent = EMAIL_NOT_VALID
        return
      } else if (!validEmail.test(email) && !emailAsideElement) {
        emailAsideElement = createAsideElement(EMAIL_ASIDE_ID, EMAIL_NOT_VALID)
        const emailDiv = document.getElementById(EMAIL_DIV_ID)
        emailDiv?.appendChild(emailAsideElement)
        return
      } else if (validEmail.test(email) && emailAsideElement) {
        emailAsideElement.hidden = true
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
      const validPassword = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')
      passwordAsideElement = document.getElementById(PASSWORD_ASIDE_ID)

      if (!validPassword.test(password) && passwordAsideElement) {
        passwordAsideElement.hidden = false
        const textElement = passwordAsideElement.children[0]
        textElement.textContent = PASSWORD_REQUIREMENT
        return
      } else if (!validPassword.test(password) && !passwordAsideElement) {
        passwordAsideElement = createAsideElement(PASSWORD_ASIDE_ID, PASSWORD_REQUIREMENT)
        const passwordDiv = document.getElementById(PASSWORD_DIV_ID)
        passwordDiv?.appendChild(passwordAsideElement)
        return
      } else if (validPassword.test(password) && passwordAsideElement) {
        passwordAsideElement.hidden = true
      }
    }

    const loginData: LoginData = {
      Username: username.trim(),
      Email: email.trim(),
      Password: password,
    }

    return await fetch(SIGN_UP_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then(async (response) => {
        if (response.status >= 400) throw new Error(USER_EXISTS)
        else {
          const loginResponse = await fetchLoginApi({
            Username: 'superuser',
            Email: '',
            Password: 'string',
          })
          if (loginResponse) navigateToHome(HOME_PATH)
        }
      })
      .catch((error) => alert(error))
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
            <h1>Sign Up</h1>
            <Spacer direction={'horizontal'} size={300} />
            <a href={LOGIN_PATH}>Log In</a>
          </div>
          <form className='border-solid-1px border-radius-5px' onSubmit={onSignUpClick}>
            <div
              className='flexbox-column align-start padding-x-10px padding-y-5px login-input-container border-radius-5px'
              onClick={onUsernameClick}
              id={USERNAME_DIV_ID}
            >
              <div>
                <label className='color-gray font-14px'>Username</label>
              </div>
              <input
                className='outline-none border-none min-height-20px min-width-90-percent'
                type='text'
                ref={usernameInputRef}
                onChange={onChangeUsername}
                required={true}
              ></input>
            </div>
            <div
              className='flexbox-column align-start padding-x-10px padding-y-5px login-input-container border-radius-5px'
              onClick={onEmailClick}
              id={EMAIL_DIV_ID}
            >
              <div>
                <label className='color-gray font-14px'>Email address</label>
              </div>
              <input
                className='outline-none border-none min-height-20px min-width-90-percent'
                type='text'
                ref={emailInputRef}
                onChange={onChangeEmail}
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
            onClick={onSignUpClick}
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  )
}
