import React, { useContext } from 'react'
import { StyledNavbar } from '../../style/StyledNavbar'
import Context from '../../context/Context'
import DispatchContext from '../../context/DispatchContext'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { openBlogPosts, setBlogActive } = useContext(DispatchContext)
  const { blogActive, aboutActive, homeActive, contactActive } = useContext(Context)

  return (
    <StyledNavbar aboutActive={aboutActive}>
      <div className="logo">
        <Link to="/">
          <p>Surrealist Mind</p>
        </Link>
      </div>
      <ul>
        {!homeActive && (
          <Link to="/">
            <li>Homepage</li>
          </Link>
        )}
        {!aboutActive && (
          <Link to="/AboutMe">
            <li>Who am I?</li>
          </Link>
        )}
        {!blogActive && (
          <Link to="/BlogPosts">
            <li onClick={openBlogPosts}>Blog Posts</li>{' '}
          </Link>
        )}
        {!contactActive && (
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        )}
      </ul>
    </StyledNavbar>
  )
}

export default Navbar
