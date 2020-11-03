import React from 'react'
import Navbar from './components/molecules/NavBar'
import SocialMedia from './components/molecules/SocialMedia'
import LandingPage from './components/organisms/LandingPage'
import { GlobalStyle } from './style/GlobalStyle'

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <GlobalStyle />
    </>
  )
}

export default App
