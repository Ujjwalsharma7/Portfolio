import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/investment-calculator-logo.png'
import IMG2 from '../../assets/glove.webp'
import IMG3 from '../../assets/SpendingTrackerTrackingPrintableChart_1024x1024@2x.webp'
import IMG4 from '../../assets/a6a05057268281.59cec7db14cfb.jpg'
import IMG5 from '../../assets/e9XAJK5__400x400.png'
import IMG6 from '../../assets/cd-music-player-concept-vector-2M6DWN1.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title:'Investment Calculator',
    github: 'https://github.com/Ujjwalsharma7/Investment_Calculator'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Wise Hand',
    github: 'https://github.com/Ujjwalsharma7/Construire-Concetto'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Expense Tracker',
    github: 'https://github.com/Ujjwalsharma7/Expense_Tracker'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Blog Website',
    github: 'https://github.com/Ujjwalsharma7/Blog_Website'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Onepiece Game',
    github: 'https://github.com/Ujjwalsharma7/Onepiece_Game'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Music Player',
    github: 'https://github.com/Ujjwalsharma7/Music_player'
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
          {/* <a href="https://dribbble.com/shots/popular" className='btn btn-primary' target='_blank '>Description</a> */}
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
