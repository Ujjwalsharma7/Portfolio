import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
const Contact = () => {
  return (
   <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>


      <div className='container contact__container'>
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail/>
            <h4> Email</h4>
            <h5>ujjwalsharma1772003@gmail.com</h5>
            <a href="mailto:ujjwalsharma1772003@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp/>
            <h4>Whatsapp</h4>
            <h5>7302949712</h5>
            <a href="https://api.whatsapp.com/send?phone=+917302949712">Send a message</a>
          </article>
      
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id="" cols="30" rows="7" placeholder='Your Message' required></textarea>
        </form>
      </div>
   </section>
      
    
  )
}

export default Contact
