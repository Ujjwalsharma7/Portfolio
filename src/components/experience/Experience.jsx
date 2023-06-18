import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
    <h5>What Skills I have</h5>
    <h2>My Expereience</h2>

    <div className="container experience__container">
      <div className="experience__webd">
        <h3>Web Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsFillPatchCheckFill />
            <h4>HTML</h4> 
            <small className="text-light">Experienced</small>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill />
            <h4>css</h4> 
            <small className="text-light">Experienced</small>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill />
            <h4>JavaScript</h4> 
            <small className="text-light">Experienced</small>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill />
            <h4>Bootstrap</h4> 
            <small className="text-light">Intermediate</small>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill />
            <h4>Tailwind</h4> 
            <small className="text-light">Experienced</small>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill />
            <h4>NodeJs</h4> 
            <small className="text-light">Intermediate</small>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill />
            <h4>MongoDB</h4> 
            <small className="text-light">Intermediate</small>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill />
            <h4>React</h4> 
            <small className="text-light">Experienced</small>
          </article>
        </div>
      </div>
      <div className="experience__others"></div>
    </div>
    </section>
  )
}

export default Experience
