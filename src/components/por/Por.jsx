import React from 'react'
import './por.css'
import logo from '../../assets/favicon.ico'
import logo2 from '../../assets/dps.webp'


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
        
      })
     }
       
      </div>
    </section>
  )
}

export default Por
