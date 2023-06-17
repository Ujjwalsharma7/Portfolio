import React from 'react'
import './about.css'
import me3 from '../../assets/me3.JPG'

function About() {
  return (
  <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className='container about__container'>
      <div className='about__me'>
        <div className="about__me-image">
          <img src={me3} alt="About-image" />
        </div>
      </div>  
    </div>

    <div className="about__contnet">
      <div className="about__cards">
        
      </div>
    </div>
     </section>
  )
}

export default About
