import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/Me.JPG'
function Header() {
  return (
   <header>
    <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Ujjwal Sharma</h1>
      <h5 className='text-light'>Fullstack Developer and AI/ML Enthusiast </h5>
      <CTA />
      <div className='me'>
        <img src={Me} alt="me" />
      </div>
      
    </div>
   </header>
  )
}

export default Header
