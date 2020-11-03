import React from 'react'
import { StyledFooter } from '../../style/StyledFooter'

const Footer = () => {
  return (
    <StyledFooter>
      <div className="column column1">
        <div className="section phone">
          <p className="title">Phone:</p>
          <p className="info"> +49 178 403 6246</p>
        </div>
        <div className="section address">
          <p className="title">Address:</p>
          <p className="info"> Berlin, Germany</p>
        </div>
      </div>
      <div className="column column2">
        <div className="section email">
          <p className="title">Email:</p>
          <p className="info"> sura.rzayeva@gmail.com</p>
        </div>
        <div className="section follow">
          <p className="title">Follow me:</p>
          <ul>
            <li>Tw</li>
            <li>Lk</li>
            <li>In</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
      <div className="column column3">
        <div className="section credit">
          <p className="title">&copy; All rights reserved | 2020</p>
          <p className="info">
            Designed and built <br /> by Sura Rzayeva.
          </p>
          <p className="web">
            <a href="https://www.surarzayeva.com/">www.surarzayeva.com</a>
          </p>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer
