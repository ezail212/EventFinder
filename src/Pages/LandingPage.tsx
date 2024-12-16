import { Header } from '../Components/Header'
import { TopEvents } from '../Components/TopEvents'
import { useEffect, useState } from 'react'
import { LOGGEDIN_ENDPOINT } from '../Common/EndpointConstants'

export const LandingPage = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  const checkLoggedIn = async () => {
    await fetch(LOGGEDIN_ENDPOINT, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Username: 'superuser' }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoggedIn(data)
      })
  }

  useEffect(() => {
    checkLoggedIn()
  })

  return (
    <>
      <Header isLoggedIn={loggedIn} />
      <TopEvents />
    </>
  )
}
