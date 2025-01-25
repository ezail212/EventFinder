import { useEffect, useState } from 'react'
import { fetchLoggedInUser } from '../ApiCalls/FetchLoggedInUser'

export const useGetLoggedInUser = () => {
  const [error, setError] = useState<string>('')
  const [loggedInUser, setLoggedInUser] = useState<string>('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getLoggedInUser = async () => {
      setIsLoading(true)
      try {
        const user = await fetchLoggedInUser()
        setLoggedInUser(user)
      } catch (error) {
        console.error(error)
        setError(error instanceof Error ? error.message : 'An unknown error occurred.')
      } finally {
        setIsLoading(false)
      }
    }
    getLoggedInUser()
  }, [])
  return { loggedInUser, isLoading, error }
}
