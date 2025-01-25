import { AccountDropdownMenuItem } from '../Models/AccountDropdownMenuItem'
import { Spacer } from './Spacer'
import { useNavigate } from 'react-router-dom'

interface LoggedInDropdownMenuProps {
  data: AccountDropdownMenuItem[]
}

export const LoggedInDropdownMenu = (props: LoggedInDropdownMenuProps) => {
  const navigate = useNavigate()
  const onDropdownItemClick = async (item: AccountDropdownMenuItem) => {
    if (!item.endpoint) {
      navigate(item.navigateTo)
    } else {
      await fetch(item.endpoint, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Username: 'superuser' }),
      }).catch((err) => console.log(err))
      window.location.reload()
    }
  }

  return (
    <div>
      <ul className='dropdown-content'>
        {props.data.map((item, index) => (
          <li className='font-18px padding-5px list-style-none' key={index}>
            <div
              className='flexbox-row align-center justify-content-center dropdown-item-container'
              onClick={() => onDropdownItemClick(item)}
            >
              <item.reactIcon />
              <Spacer direction='horizontal' size={5} />
              <p>{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
