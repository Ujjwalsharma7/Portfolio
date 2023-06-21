import React from 'react'
import './por.css'
import logo from '../../assets/favicon.ico'
import logo2 from '../../assets/dps.webp'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';



const data = [
  {
    img: logo,
    name: 'Team Vibhav',
    position: 'Executive Member',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nisi placeat molestias. Voluptates iste eos sed explicabo est consequuntur! '
  },
  {
    img: logo,
    name: 'Team Vibhav',
    position: 'Volunteer',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nisi placeat molestias. Voluptates iste eos sed explicabo est consequuntur! '
  },
  {
    img: logo2,
    name: 'DPS Ranipur',
    position: 'Secretary Student Council',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nisi placeat molestias. Voluptates iste eos sed explicabo est consequuntur! '
  }
]

function Por() {
  return (
    <section id='por'>
      <h5>Watch My</h5>
      <h2>Positions of Responsibilty</h2>

      <div className="container por__container">
     {
      data.map(({img, name, position, description}, index) => {
        return(
        <article className='por'>
        <div className="logo">
          <img src={img} alt="" />
        </div>
          <h2 className='org__name'>{name}</h2>
          <h4 className='position'>{position}</h4>
          <small className='description'>{description}</small>
        </article> 
        )
      })
     }
       
      </div>
    </section>
  )
}

export default Por
