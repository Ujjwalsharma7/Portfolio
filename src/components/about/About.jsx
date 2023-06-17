import React from 'react'
import './about.css'
import me3 from '../../assets/me3.JPG'
import {FaAward} from 'react-icons/fa'
import {AiFillBook} from 'react-icons/ai'
import {GrCompliance} from 'react-icons/gr'

function About() {
  return (
  <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className='container about__container'>
      <div className='about__me'>
        <div className="about__me-image">
          <img src={me3}  alt=''/>
        </div>
      </div>  
    </div>

    <div className="about__contnet">
      <div className="about__cards">
        <article className='about__card'>
        < AiFillBook className='about-icon'/>
          <h5>NIT Hamirpur</h5>
          <small>3rd Year Student </small>
        </article>
        <article className='about__card'>
        <FaAward className='about-icon'/>
          <h5>Experience</h5>
          <small>1+ Year of Web Development  </small>
        </article>
        <article className='about__card'>
        <GrCompliance className='about-icon'/>
          <h5>Projects</h5>
          <small> Completed 20+ projects  </small>
        </article>
      </div>
    </div>
     </section>
  )
}

export default About
