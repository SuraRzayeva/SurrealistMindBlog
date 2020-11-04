import React, { useContext, useEffect } from 'react'
import { StyledLandingPage } from '../../style/StyledLandingPage'
import SocialMedia from '../molecules/SocialMedia'
import Beach from '../../assets/images/beach.jpg'
import Wave from '../../assets/images/waves.jpg'
import Falling from '../../assets/images/falling.jpg'
import ScrollDown from '../atoms/ScrollDown'
import Parallax from 'react-rellax'
import Context from '../../context/Context'
import { Helmet } from 'react-helmet'
import DispatchContext from '../../context/DispatchContext'

const LandingPage = () => {
  const { blogActive, transition } = useContext(Context)
  const { setAboutActive, setHomeActive, setBlogActive, setContactActive } = useContext(DispatchContext)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    setHomeActive(true)
    setBlogActive(false)
    setAboutActive(false)
    setContactActive(false)
  }, [])

  return (
    <StyledLandingPage blogActive={blogActive} transition={transition}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Surrealist Mind Blog</title>
        <link rel="canonical" href="http://surrealistmind.com" />
      </Helmet>
      <SocialMedia />
      <div className="hero">
        <Parallax speed={8}>
          <h1>
            Surrealist Mind is <br /> a philosophical blog...
          </h1>
        </Parallax>
        <Parallax speed={6}>
          <p>...that reflects the most complex</p>
        </Parallax>
        <Parallax speed={5}>
          <p>and the darkest ideas</p>
        </Parallax>
        <Parallax speed={4}>
          <p>which are...</p>
        </Parallax>
        <Parallax speed={3}>
          <p>beyond our precious reality...</p>
        </Parallax>
      </div>
      <ScrollDown />
      <Parallax className="image-1" speed={3}></Parallax>
      <Parallax className="image-2" speed={2}></Parallax>
    </StyledLandingPage>
  )
}

export default LandingPage
