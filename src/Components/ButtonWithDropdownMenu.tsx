import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { DropdownMenu } from '../Elements/DropdownMenu'
import { AccountDropdownMenuItem } from '../Models/AccountDropdownMenuItem'

interface ButtonWithDropdownMenuProps {
  data: AccountDropdownMenuItem[]
}

export const ButtonWithDropdownMenu = (props: ButtonWithDropdownMenuProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const onButtonClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='justify-content-flex-end'>
      <button
        className='dropdown-button background-color-white border-none'
        onClick={onButtonClick}
      >
        <BsPersonCircle size={30} color='black' />
        {isOpen && <DropdownMenu data={props.data} />}
      </button>
    </div>
  )
}
