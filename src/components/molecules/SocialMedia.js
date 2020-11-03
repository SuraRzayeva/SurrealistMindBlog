import React, { useEffect, useState } from 'react'
import { StyledSocialMedia } from '../../style/StyledSocialMedia'

const SocialMedia = () => {
  const [top, setTop] = useState()

  const setCoordinate = (e) => {
    if (window.innerHeight === 800) {
      if (e.clientY > 340) {
        setTop('77%')
      } else if (e.clientY > 300) {
        setTop('53%')
      } else if (e.clientY > 270) {
        setTop('27%')
      } else if (e.clientY > 230) {
        setTop('3%')
      }
    } else if (window.innerHeight < 900) {
      if (e.clientY > 372) {
        setTop('77%')
      } else if (e.clientY > 340) {
        setTop('53%')
      } else if (e.clientY > 300) {
        setTop('27%')
      } else if (e.clientY > 200) {
        setTop('3%')
      }
    } else if (window.innerHeight === 900) {
      if (e.clientY > 372) {
        setTop('77%')
      } else if (e.clientY > 340) {
        setTop('53%')
      } else if (e.clientY > 300) {
        setTop('27%')
      } else if (e.clientY > 200) {
        setTop('3%')
      }
    } else if (window.innerHeight > 900) {
      if (e.clientY > 372) {
        setTop('77%')
      } else if (e.clientY > 340) {
        setTop('53%')
      } else if (e.clientY > 300) {
        setTop('27%')
      } else if (e.clientY > 200) {
        setTop('3%')
      }
    }
  }

  return (
    <StyledSocialMedia top={top} onMouseMove={(e) => setCoordinate(e)}>
      <ul>
        <li>Tw</li>
        <li>Lk</li>
        <li>In</li>
        <li>Git</li>
        <div className="circle"></div>
      </ul>
    </StyledSocialMedia>
  )
}

export default SocialMedia
