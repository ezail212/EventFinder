import './App.css'
import './index.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { LandingPage } from './Pages/LandingPage'
import { LoginPage } from './Pages/LoginPage'
import { HOME_PATH, HOME_PATH_WITH_USER, LOGIN_PATH, SIGNUP_PATH } from './Common/PathConstants'
import { SignupPage } from './Pages/SignupPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_PATH} element={<LandingPage />} />
        <Route path={LOGIN_PATH} element={<LoginPage />} />
        <Route path={SIGNUP_PATH} element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
