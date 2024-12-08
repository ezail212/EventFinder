import './App.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { LandingPage } from './Pages/LandingPage'

function App() {
  return (
    <BrowserRouter>
      <div>
        <LandingPage />
      </div>
    </BrowserRouter>
  )
}

export default App
