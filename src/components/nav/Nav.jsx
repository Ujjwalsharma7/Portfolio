import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'

import {FaToolbox} from 'react-icons/fa'
import {AiFillContacts} from 'react-icons/ai'
import {AiFillProject} from 'react-icons/ai'
import { useState } from 'react'

function Nav() {
  const [activeNav, setActiveNav] = useState('#header');
  return(
  <nav>

     <a href="#header"  onClick={() => setActiveNav('#header')}  className={activeNav === '#header'? 'active' : ''}><AiFillHome/></a>
     <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about'? 'active' : '' }><AiOutlineUser/></a>
    
     <a href="#experience"  onClick={() => setActiveNav('#experience')} className={activeNav === '#experience'? 'active' : '' }><FaToolbox/></a>
     <a href="#portfolio"  onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio'? 'active' : '' }><AiFillProject/></a>
     <a href="#contact"  onClick={() => setActiveNav('#contact')} className={activeNav === '#contact'? 'active' : '' }><AiFillContacts/></a>
  </nav>
    
  )
}

export default Nav
