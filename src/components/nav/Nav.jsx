import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsFillBookFill} from 'react-icons/bs'
import {FaToolbox} from 'react-icons/fa'
import {AiFillContacts} from 'react-icons/ai'
function Nav() {
  return (
    <div>
     <a href=""><AiFillHome/></a>
     <a href=""><AiOutlineUser/></a>
     <a href=""><BsFillBookFill/></a>
     <a href=""><FaToolbox/></a>
     <a href=""><AiFillContacts/></a>
    </div>
  )
}

export default Nav
