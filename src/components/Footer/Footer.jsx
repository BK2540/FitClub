import React from 'react'
import Github from '../../assets/github.png';
import Instragram from '../../assets/instagram.png';
import Linkedin from '../../assets/linkedin.png';
import logo from '../../assets/logo.png';

import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-container">

        <div className="blur footer-blur1"></div>
        <div className="blur footer-blur2"></div>

        <hr/>
        <div className="footer">
            <div className="socials-link">
                <img src={Github} alt="Github" />
                <img src={Instragram} alt="Instragram" />
                <img src={Linkedin} alt="Linkedin" />  
            </div>
            <div className="logo-f">
                <img src={logo} alt="logo" />
            </div>
        </div>
        
    </div>
  )
}

export default Footer