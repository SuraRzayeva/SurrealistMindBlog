import React from 'react'
import { StyledLandingPage } from '../../style/StyledLandingPage'
import SocialMedia from '../molecules/SocialMedia'
import Beach from '../../assets/images/beach.jpg'
import Wave from '../../assets/images/waves.jpg'
import Falling from '../../assets/images/falling.jpg'
import ScrollDown from '../atoms/ScrollDown'
import Parallax from 'react-rellax'

const LandingPage = () => {
  return (
    <StyledLandingPage>
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
