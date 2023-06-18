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
        <div className="about__me">
          <div className="about__me-image">
            <img src={me3} alt='' />
          </div>
        </div>

        <div className="about__contnet">
          <div className="about__cards">
            <article className='about__card'>
              < AiFillBook className='about-icon' />
              <h5>NITH</h5>
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odio molestiae harum quos, modi quod corporis corrupti exercitationem illum rerum repudiandae necessitatibus sequi odit repellat quidem sint quis eius impedit fuga, qui ipsam. Eum, optio voluptates veritatis a sapiente possimus ipsum maxime, vitae error iste soluta cumque ullam? Porro, qui!</p>
        </div>
      </div>
    </section>
  )
}

export default About
