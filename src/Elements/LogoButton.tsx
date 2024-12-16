import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HOME_PATH } from '../Common/PathConstants'

interface LogoButtonProps {
  buttonClassName?: string
}

export function LogoButton(props: LogoButtonProps) {
  const navigateToHome = useNavigate()

  const handleLogoClick = () => {
    navigateToHome(HOME_PATH)
  }

  return (
    <div className='align-center'>
      <text
        className={`${props.buttonClassName} logo-button background-color-transparent border-none`}
        onClick={handleLogoClick}
      >
        EventFinder
      </text>
    </div>
  )
}
