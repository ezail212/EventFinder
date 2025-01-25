import { LoginData } from '../Models/LoginData'
import { LOGIN_ENDPOINT } from './EndpointConstants'
import { USER_NOT_FOUND } from './StringConstants'

export const getLoginToken = () => {
  return document.cookie.match('access_token=')?.input?.replaceAll('"', '').split('=')[1] ?? ''
}

export const fetchLoginApi = async (loginData: LoginData) => {
  return await fetch(LOGIN_ENDPOINT, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
  })
    .then((response) => {
      if (response.status === 404) throw new Error(USER_NOT_FOUND)
      else {
        return response
      }
    })
    .catch((err) => {
      alert(err)
      return null
    })
}

// export const getLoggedInUser = async () => {
//   try {
//     const user = await fetchLoggedInUser()
//   } catch (error) {
//     throw new error
//   }
// }

export const createAsideElement = (asideId: string, text?: string) => {
  const asideElement = document.createElement('aside')
  asideElement.setAttribute('id', asideId)
  const textElement = document.createElement('p')
  textElement.classList.add('color-red')
  textElement.classList.add('font-14px')
  textElement.textContent = text!
  asideElement.appendChild(textElement)
  return asideElement
}
