import { Header } from '../Components/Header'
import { TopEvents } from '../Components/TopEvents'
import { useGetLoggedInUser } from '../Hooks/useGetLoggedInUser'
import { ClipLoader } from 'react-spinners'

export const LandingPage = () => {
  const { loggedInUser, isLoading, error } = useGetLoggedInUser()

  return (
    <>
      <Header loggedInUser={loggedInUser} />
      <ClipLoader loading={isLoading} />
      <TopEvents />
    </>
  )
}
