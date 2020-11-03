import React from 'react'
import { StyledScrollDown } from '../../style/StyledScrollDown'
import Parallax from 'react-rellax'

const ScrollDown = () => {
  return (
    <StyledScrollDown>
      <Parallax speed={8}>
        <div className="wrapper">
          <div className="circle"></div>
          <p>Scroll</p>
          <div className="line"></div>
        </div>
      </Parallax>
    </StyledScrollDown>
  )
}

export default ScrollDown
