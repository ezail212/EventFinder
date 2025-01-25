import { IconType } from 'react-icons'
import { AccountDropdownMenuItem } from '../Models/AccountDropdownMenuItem'
import React from 'react'
import { LoggedInDropdownMenu } from '../Elements/LoggedInDropdownMenu'

interface FilterButtonWithDropdownMenuProps {
  displayIcon: IconType
  data: AccountDropdownMenuItem[]
}

export const FilterButtonWithDropdownMenu = (props: FilterButtonWithDropdownMenuProps) => {
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
        <props.displayIcon size={30} color='black' />
        {isOpen && <LoggedInDropdownMenu data={props.data} />}
      </button>
    </div>
  )
}
