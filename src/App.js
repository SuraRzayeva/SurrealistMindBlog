import React, { useCallback, useEffect, useState } from 'react'
import Navbar from './components/molecules/NavBar'
import SocialMedia from './components/molecules/SocialMedia'
import BlogSection from './components/organisms/BlogSection'
import Footer from './components/organisms/Footer'
import LandingPage from './components/organisms/LandingPage'
import { GlobalStyle } from './style/GlobalStyle'
import Context from './context/Context'
import DispatchContext from './context/DispatchContext'
import AllBlogPosts from './components/organisms/AllBlogPosts'
import AboutMe from './components/organisms/AboutMe'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Contact from './components/organisms/Contact'

function App() {
  const [blogActive, setBlogActive] = useState(false)

  const [aboutActive, setAboutActive] = useState(false)
  const [homeActive, setHomeActive] = useState(false)
  const [contactActive, setContactActive] = useState(false)
  const [singleBlogActive, setSingleBlogActive] = useState(false)

  return (
    <Context.Provider value={{ blogActive, homeActive, aboutActive, contactActive }}>
      <DispatchContext.Provider value={{ setBlogActive, setAboutActive, setHomeActive, setContactActive }}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <LandingPage />
              <BlogSection />
            </Route>
            <Route path="/BlogPosts" exact>
              <AllBlogPosts />
            </Route>
            <Route path="/AboutMe" exact>
              <AboutMe />
            </Route>
            <Route path="/Contact" exact>
              <Contact />
            </Route>
          </Switch>
          <Footer />
        </Router>

        <GlobalStyle />
      </DispatchContext.Provider>
    </Context.Provider>
  )
}

export default App
