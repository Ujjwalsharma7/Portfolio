import React from 'react'
import  {AiFillGithub} from 'react-icons/ai'
import  {AiFillLinkedin} from 'react-icons/ai'
import  {AiFillInstagram} from 'react-icons/ai'
function HeaderSocials() {
  return (
    <div className='header__socials'>
      <a href="https://github.com/Ujjwalsharma7" ><AiFillGithub/></a>
      <a href="https://www.linkedin.com/in/ujjwal-sharma-71b760222/" ><AiFillLinkedin/></a>
      <a href="https://www.instagram.com/ujjwal.sharma_/"><AiFillInstagram/></a>
    </div>
  )
}

export default HeaderSocials
