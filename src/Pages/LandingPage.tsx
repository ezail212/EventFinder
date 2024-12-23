import { Header } from '../Components/Header'
import { TopEvents } from '../Components/TopEvents'
import { useEffect, useState } from 'react'
import { GET_EVENT_TYPES_ENDPOINT, GET_LOGGEDIN_USER_ENDPOINT } from '../Common/EndpointConstants'

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

  const getEventKinds = async () => {
    await fetch(GET_EVENT_TYPES_ENDPOINT, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
  }

  useEffect(() => {
    checkLoggedInUser()
    getEventKinds()
  })

  return (
    <>
      <Header loggedInUser={loggedInUser} />
      <TopEvents />
    </>
  )
}
