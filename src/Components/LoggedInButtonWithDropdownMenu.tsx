import React from 'react'
import { LoggedInDropdownMenu } from '../Elements/LoggedInDropdownMenu'
import { AccountDropdownMenuItem } from '../Models/AccountDropdownMenuItem'
import { IconType } from 'react-icons'

interface ButtonWithDropdownMenuProps {
  displayIcon: IconType
  data: AccountDropdownMenuItem[]
}

export const LoggedInButtonWithDropdownMenu = (props: ButtonWithDropdownMenuProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const onButtonClick = () => {
    setIsOpen(!isOpen)
  }

  const onLostFocus = () => {
    setIsOpen(false)
  }

  return (
    <div className='justify-content-flex-end' onBlur={onLostFocus}>
      <button
        className='dropdown-button background-color-white border-none'
        onClick={onButtonClick}
      >
        <props.displayIcon size={30} color='black' />
        {isOpen && <LoggedInDropdownMenu data={props.data} />}
      </button>
    </div>
  )
}
