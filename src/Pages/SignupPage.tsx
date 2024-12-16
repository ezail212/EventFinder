import { Spacer } from '../Elements/Spacer'
import { EMAIL_DIV_ID, PASSWORD_DIV_ID, USERNAME_DIV_ID } from '../Common/ElementIds'
import { HOME_PATH, LOGIN_PATH } from '../Common/PathConstants'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogoButton } from '../Elements/LogoButton'

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

  const onSignUpClick = () => {}

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
          <form className='border-solid-1px border-radius-5px'>
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
              ></input>
            </div>
          </form>
          <Spacer direction={'vertical'} size={50} />
          <button
            type='button'
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
