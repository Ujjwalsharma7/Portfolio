import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/cart.webp'
import IMG2 from '../../assets/glove.webp'
import IMG3 from '../../assets/liFi.webp'
import IMG4 from '../../assets/pcb_fault.webp'
import IMG5 from '../../assets/smart_blind.webp'
import IMG6 from '../../assets/swarm bot.webp'


function portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image"></div>
          <h3>Title</h3>
          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://dribbble.com/shots/popular" className='btn btn-primary' target='_blank '></a>
        </article>
      </div>
    </section>
  )
}

export default portfolio
