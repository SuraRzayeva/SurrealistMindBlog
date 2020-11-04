import React, { useContext, useEffect } from 'react'
import { StyledContact } from '../../style/StyledContact'
import Context from '../../context/Context'
import { Colors } from '../../style/GlobalStyle'
import DispatchContext from '../../context/DispatchContext'

const Contact = () => {
  const { blogActive, homeActive, aboutActive, contactActive } = useContext(Context)
  const { setBlogActive, setAboutActive, setHomeActive, setContactActive } = useContext(DispatchContext)

  useEffect(() => {
    setContactActive(true)
    setBlogActive(false)
    setAboutActive(false)
    setBlogActive(false)
  }, [])

  return (
    <StyledContact>
      <h1>Contact</h1>
    </StyledContact>
  )
}

export default Contact
