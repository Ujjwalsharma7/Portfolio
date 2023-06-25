import React from 'react'
import './footer.css'
import  {AiFillGithub} from 'react-icons/ai'
import  {AiFillLinkedin} from 'react-icons/ai'
import  {AiFillInstagram} from 'react-icons/ai'

function Footer() {
  return (
<footer>

      <a href="#home" className='footer__logo'>Ujjwalsharma7</a>

      <ul className='permalinks'>
      <li><a href="#home"> Home</a></li>
      <li><a href="#about"> About</a></li>
      <li><a href="#education"> Education</a></li>
      <li><a href="#experience">Experience </a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#por"> Positons of Responsibilty</a></li>
      <li><a href="#contact"> Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://github.com/Ujjwalsharma7"><AiFillGithub/></a>
        <a href="https://www.linkedin.com/in/ujjwal-sharma-71b760222"><AiFillLinkedin/></a>
        <a href="https://www.instagram.com/ujjwal.sharma_/"><AiFillInstagram/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Ujjwalsharma7. All rights reserved</small>
      </div>

</footer>

    
  )
}

export default Footer
