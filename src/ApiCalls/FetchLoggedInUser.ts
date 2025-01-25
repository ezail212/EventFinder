import { GET_LOGGEDIN_USER_ENDPOINT } from '../Common/EndpointConstants'

export const fetchLoggedInUser = async () => {
  const response = await fetch(GET_LOGGEDIN_USER_ENDPOINT, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (response.ok) {
    return response.json()
  } else {
    throw new Error('Unable to fetch logged in user, error code: ' + response.status)
  }
}
