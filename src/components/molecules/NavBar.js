import React from 'react'
import { StyledNavbar } from '../../style/StyledNavbar'

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="logo">
        <p>Surrealist Mind</p>
      </div>
      <ul>
        <li>Who am I?</li>
        <li>Blog Posts</li>
        <li>Contact</li>
      </ul>
    </StyledNavbar>
  )
}

export default Navbar
