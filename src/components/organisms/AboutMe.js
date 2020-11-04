import React, { useContext, useEffect } from 'react'
import Context from '../../context/Context'
import DispatchContext from '../../context/DispatchContext'
import { StyledAboutMe } from '../../style/StyledAboutMe'

const AboutMe = () => {
  const {} = useContext(Context)
  const { setAboutActive, setHomeActive, setBlogActive, setContactActive } = useContext(DispatchContext)

  useEffect(() => {
    setAboutActive(true)
    setHomeActive(false)
    setBlogActive(false)
    setContactActive(false)
  }, [])

  return (
    <StyledAboutMe>
      <div>
        <h1>About Me</h1>
      </div>
    </StyledAboutMe>
  )
}

export default AboutMe
