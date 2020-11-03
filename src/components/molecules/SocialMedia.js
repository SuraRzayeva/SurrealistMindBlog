import React, { useEffect, useState } from 'react'
import { StyledSocialMedia } from '../../style/StyledSocialMedia'

const SocialMedia = () => {
  const [top, setTop] = useState()

  const setCoordinate = (e) => {
    console.log(window.innerHeight)

    if (window.innerHeight < 900) {
      console.log(e.clientY)
      if (e.clientY > 270) {
        setTop('77%')
      } else if (e.clientY > 233) {
        setTop('53%')
      } else if (e.clientY > 200) {
        setTop('27%')
      } else if (e.clientY > 166) {
        setTop('3%')
      }
    } else if (window.innerHeight === 900) {
      console.log(e.clientY)
      if (e.clientY > 306) {
        setTop('77%')
      } else if (e.clientY > 265) {
        setTop('53%')
      } else if (e.clientY > 230) {
        setTop('27%')
      } else if (e.clientY > 196) {
        setTop('3%')
      }
    } else if (window.innerHeight > 900) {
      if (e.clientY > 306) {
        setTop('77%')
      } else if (e.clientY > 265) {
        setTop('53%')
      } else if (e.clientY > 230) {
        setTop('27%')
      } else if (e.clientY > 196) {
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
