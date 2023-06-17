import React from 'react'
import './header.css'
import CTA from './CTA'
import me2 from '../../assets/me2.JPG'
import HeaderSocials from './HeaderSocials'
function Header() {
  return (
   <header id='header' >
    <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Ujjwal Sharma</h1>
      <h5 className='text-light'>Fullstack Developer and AI/ML Enthusiast </h5>
      <CTA />
       <HeaderSocials />
      <div className='me'>
        <img src={me2} alt="me" />
      </div>
       <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>
   </header>
  )
}

export default Header
