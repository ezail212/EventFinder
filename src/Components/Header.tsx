import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { MdLocationPin } from 'react-icons/md'
import { IoSearchCircle } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { Spacer } from '../Elements/Spacer'
import { HOME_PATH, LOGIN_PATH, SIGNUP_PATH } from '../Common/PathConstants'
import { LogoButton } from '../Elements/LogoButton'
import { BsFillFilterCircleFill, BsPersonCircle } from 'react-icons/bs'
import { IoLogOutSharp } from 'react-icons/io5'
import { LoggedInButtonWithDropdownMenu } from './LoggedInButtonWithDropdownMenu'
import { AccountDropdownMenuItem } from '../Models/AccountDropdownMenuItem'
import { LOG_OUT_ENDPOINT } from '../Common/EndpointConstants'
import { FilterButtonWithDropdownMenu } from './FilterButtonWithDropdownMenu'

interface HeaderProps {
  loggedInUser?: string
}

const getDropdownMenuItems = (loggedInUser: string): AccountDropdownMenuItem[] => {
  return [
    { reactIcon: BsPersonCircle, text: loggedInUser, navigateTo: HOME_PATH },
    {
      reactIcon: IoLogOutSharp,
      text: 'Log out',
      navigateTo: HOME_PATH,
      endpoint: LOG_OUT_ENDPOINT,
    },
  ]
}

export const Header = (props: HeaderProps) => {
  const navigate = useNavigate()
  const handleLoginClick = () => {
    navigate(LOGIN_PATH)
  }
  const handleSearchClick = () => {
    window.open('https://www.google.com')
  }

  return (
    <div className='flexbox align-center border-bottom-solid-light-gray-1px'>
      <div className='align-center'>
        <LogoButton buttonClassName='top-left-header-text margin-25px' />
      </div>
      <div
        className='flexbox-row padding-10px border-radius-30px align-center search-container'
        onMouseOver={() => {}}
      >
        <FaMagnifyingGlass size={20} color='black' />
        <input
          className='search-input margin-right-25px margin-left-10px'
          type='text'
          placeholder='Events'
        />
        <MdLocationPin size={20} color='black' />
        <input
          className='search-input margin-right-25px margin-left-10px'
          type='text'
          placeholder='Luxembourg'
        />
        <div className='flexbox align-center'>
          <button
            className='border-none background-color-transparent search-button'
            type='button'
            onClick={handleSearchClick}
          >
            <IoSearchCircle size={40} />
          </button>
        </div>
      </div>
      <Spacer direction='horizontal' size={20} />
      <div className='flexbox align-center'>
        <FilterButtonWithDropdownMenu displayIcon={BsFillFilterCircleFill} data={[]} />
      </div>
      {props.loggedInUser ? (
        <>
          <Spacer direction='horizontal' size={600} />
          <div className='position-relative align-center flexbox justify-content-flex-end'>
            <LoggedInButtonWithDropdownMenu
              displayIcon={BsPersonCircle}
              data={getDropdownMenuItems(props.loggedInUser)}
            />
          </div>
        </>
      ) : (
        <>
          <Spacer direction='horizontal' size={500} />
          <div className='flexbox align-center flexbox justify-content-flex-end'>
            <a
              className='login-button background-color-transparent border-none padding-10px border-radius-30px'
              onClick={handleLoginClick}
            >
              Log In
            </a>
            <Spacer direction='horizon' size={10} />
            <a
              className='login-button background-color-transparent border-none padding-10px border-radius-30px'
              href={SIGNUP_PATH}
            >
              Sign Up
            </a>
          </div>
        </>
      )}
    </div>
  )
}
