import React from 'react'
import './portfolio.css'

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
