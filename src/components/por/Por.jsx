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
          <h3 className='org__name'>Team Vibhav</h3>
          <small>Executive Member</small>
        </div>
        </article>
      </div>
    </section>
  )
}

export default Por
