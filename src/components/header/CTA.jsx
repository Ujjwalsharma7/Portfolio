import React from 'react'
import Resume from '../../assets/Ujjwalresume.pdf'

function CTA() {
  return (
  
      <div className="cta">
        <a href={Resume} download>Download CV</a>
        <a href="#contact">Let's Connect</a>
      </div>
   
  )
}

export default CTA
