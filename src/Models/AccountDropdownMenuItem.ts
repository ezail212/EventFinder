import { IconType } from 'react-icons'

export interface AccountDropdownMenuItem {
  reactIcon: IconType
  text: string
  navigateTo: string
  endpoint?: string
}
