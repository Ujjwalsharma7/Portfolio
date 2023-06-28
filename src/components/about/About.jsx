import React from 'react'
import './about.css'
import me3 from '../../assets/me3.JPG'
import { FaAward } from 'react-icons/fa'
import { AiFillBook } from 'react-icons/ai'
import { AiOutlineFileDone } from 'react-icons/ai'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about-me">
          <div className="about__me-image">
            <img src={me3} alt='' />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              < AiFillBook className='about-icon' />
              <h5>NIT Hamirpur</h5>
              <small>3rd Year</small>
            </article>
            <article className='about__card'>
              <FaAward className='about-icon' />
              <h5>Experience</h5>
              <small>1+ Year </small>
            </article>
            <article className='about__card'>
              <AiOutlineFileDone className='about-icon' />
              <h5>Projects</h5>
              <small> 20+ Completed</small>
            </article>
          </div>
          <p> I am a full stack developer currently pursuing my Bachlor's in Electronics and communication branch at NIT Hamirpur. I completed my schooling from DPS, Ranipur. With a passion for both hardware and software, I enjoy exploring the intersection of electronics and programming. I am constantly seeking opportunities to expand my knowledge and skills in web development, database management and machine learning. </p>
        </div>
      </div>
    </section>
  )
}

export default About
