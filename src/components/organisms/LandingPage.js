import React from 'react'
import { StyledLandingPage } from '../../style/StyledLandingPage'
import SocialMedia from '../molecules/SocialMedia'

const LandingPage = () => {
  return (
    <StyledLandingPage>
      <SocialMedia />
      <div className="hero">
        <h1>
          Surrealist Mind is <br /> a philosophical blog...
        </h1>
        <p>...that reflects the most complex</p>
        <p>and the darkest ideas</p>
        <p>which are...</p>
        <p>beyond our precious reality...</p>
      </div>
    </StyledLandingPage>
  )
}

export default LandingPage
