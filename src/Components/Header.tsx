import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { MdLocationPin } from 'react-icons/md'
import { IoSearchCircle } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { Spacer } from '../Elements/Spacer'

export const Header = () => {
  const navigate = useNavigate()
  const handleLogoClick = () => {
    navigate('/')
  }
  const handleClick = () => {
    window.open('https://www.google.com')
  }

  return (
    <div className='flexbox align-center border-bottom-solid-light-gray-1px'>
      <div className='align-center'>
        <button
          className='logo-button background-color-transparent border-none'
          onClick={handleLogoClick}
        >
          <text className='top-left-header-text margin-25px'>EventFinder</text>
        </button>
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
            onClick={handleClick}
          >
            <IoSearchCircle size={40} />
          </button>
        </div>
      </div>
      <Spacer direction='horizontal' size={550} />
      <div className='align-center flexbox justify-content-flex-end'>
        <a
          className='login-button background-color-transparent border-none padding-10px border-radius-30px'
          href='https://www.google.com'
        >
          Log In
        </a>
        <a
          className='login-button background-color-transparent border-none padding-10px border-radius-30px'
          href='https://www.google.com'
        >
          Sign Up
        </a>
      </div>
    </div>
  )
}
