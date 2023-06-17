import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsFillBookFill} from 'react-icons/bs'
import {FaToolbox} from 'react-icons/fa'
import {AiFillContacts} from 'react-icons/ai'
import {AiFillProject} from 'react-icons/ai'

function Nav() {
  return (
    <div className='nav'>
     <a href="#header"><AiFillHome/></a>
     <a href="#about"><AiOutlineUser/></a>
     <a href="#education"><BsFillBookFill/></a>
     <a href="#experience"><FaToolbox/></a>
     <a href="#portfolio"><AiFillProject/></a>
     <a href="#contact"><AiFillContacts/></a>
    </div>
  )
}

export default Nav
