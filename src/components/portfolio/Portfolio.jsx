import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/cart.webp'
import IMG2 from '../../assets/glove.webp'
import IMG3 from '../../assets/liFi.webp'
import IMG4 from '../../assets/pcb_fault.webp'
import IMG5 from '../../assets/smart_blind.webp'
import IMG6 from '../../assets/swarm bot.webp'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Wise Hand',
    github: 'https://github.com/Ujjwalsharma7'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Wise Hand',
    github: 'https://github.com/Ujjwalsharma7'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Wise Hand',
    github: 'https://github.com/Ujjwalsharma7'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Wise Hand',
    github: 'https://github.com/Ujjwalsharma7'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Wise Hand',
    github: 'https://github.com/Ujjwalsharma7'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Wise Hand',
    github: 'https://github.com/Ujjwalsharma7'
  },
]

function portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github}) => {
            return(
              <article  key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt="" />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn'>Github</a>
          <a href="https://dribbble.com/shots/popular" className='btn btn-primary' target='_blank '>Description</a>
          </div>
        </article>
            )
          })
        }
       </div>
    </section>
  )
}

export default portfolio
