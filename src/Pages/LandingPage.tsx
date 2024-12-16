import { Header } from '../Components/Header'
import { TopEvents } from '../Components/TopEvents'
import { useEffect, useState } from 'react'
import { GET_LOGGEDIN_USER_ENDPOINT } from '../Common/EndpointConstants'

export const LandingPage = () => {
  const [loggedInUser, setLoggedInUser] = useState('')

  const handleLoggedInUserResponse = async (loggedInUser: string) => {
    await setLoggedInUser(loggedInUser)
  }

  const checkLoggedInUser = async () => {
    await fetch(GET_LOGGEDIN_USER_ENDPOINT, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        handleLoggedInUserResponse(data)
      })
  }

  useEffect(() => {
    checkLoggedInUser()
  })

  return (
    <>
      <Header loggedInUser={loggedInUser} />
      <TopEvents />
    </>
  )
}
