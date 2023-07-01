import React from 'react'
import './por.css'
import logo from '../../assets/favicon.ico'
import logo2 from '../../assets/dps.webp'
import { Pagination } from 'swiper'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    img: logo,
    name: 'Team Vibhav',
    position: 'Executive Member',
    description: ''
  },
  {
    img: logo,
    name: 'Team Vibhav',
    position: 'Volunteer',
    description: 'We organize several events that include some electronic games and a day of exciting games for everyone in honor of the establishment of our club. '
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

      <Swiper  className="container por__container"
      modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
      pagination={{clickable:true}} >
     {
      data.map(({img, name, position, description}, index) => {
        return(
        <SwiperSlide key={index} className='por'>
        <div className="logo">
          <img src={img} alt="" />
        </div>
          <h2 className='org__name'>{name}</h2>
          <h4 className='position'>{position}</h4>
          <small className='description'>{description}</small>
        </SwiperSlide> 
        )
      })
     }
       
      </Swiper>
    </section>
  )
}

export default Por
