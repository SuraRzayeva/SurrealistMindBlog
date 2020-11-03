import React from 'react'
import Navbar from './components/molecules/NavBar'
import SocialMedia from './components/molecules/SocialMedia'
import BlogSection from './components/organisms/BlogSection'
import Footer from './components/organisms/Footer'
import LandingPage from './components/organisms/LandingPage'
import { GlobalStyle } from './style/GlobalStyle'

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <BlogSection />
      <Footer />
      <GlobalStyle />
    </>
  )
}

export default App
