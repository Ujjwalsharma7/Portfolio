import React from 'react'
import './header.css'
import CTA from './CTA'
import me2 from '../../assets/me2.JPG'
import HeaderSocials from './HeaderSocials'
import { TypeAnimation } from 'react-type-animation'
function Header() {
  return (
   <header id='header' >
    <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Ujjwal Sharma</h1>
      {/* <h5 className='text-light'>Fullstack Developer and AI/ML Enthusiast </h5> */}
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Full Stack Developer ',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'AI/ML Enthusiast ',
        2000,
        'Electronics student',
        2000,
        // 'We produce food for Chinchillas',
        // 1000
      ]}
      // wrapper="span"
      speed={40}
      style={{ fontSize: '1.5em', display: 'inline-block' }}
      repeat={Infinity}
    />
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
