import React from 'react'
import './por.css'
import logo from '../../assets/favicon.ico'

function Por() {
  return (
    <section id='por'>
      <h5>Watch My</h5>
      <h2>Positions of Responsibilty</h2>

      <div className="container por__container">
        <article className='por'>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
          <h3 className='org__name'>Team Vibhav</h3>
          <h5 className='position'>Executive Member</h5>
          <small className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nisi placeat molestias. Voluptates iste eos sed explicabo est consequuntur! Beatae!</small>
        </article>  
        <article className='por'>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
          <h2 className='org__name'>Team Vibhav</h2>
          <h4 className='position'>Executive Member</h4>
          <small className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nisi placeat molestias. Voluptates iste eos sed explicabo est consequuntur! Beatae!</small>
        </article> 
        <article className='por'>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
          <h3 className='org__name'>Team Vibhav</h3>
          <h5 className='position'>Executive Member</h5>
          <small className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nisi placeat molestias. Voluptates iste eos sed explicabo est consequuntur! Beatae!</small>
        </article> 
      </div>
    </section>
  )
}

export default Por
