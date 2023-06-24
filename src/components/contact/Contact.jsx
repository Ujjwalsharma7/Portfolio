import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7tumkbs', 'template_ja6apyy', form.current, 'Dla5reMoXyNScW5HO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
   <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>


      <div className='container contact__container'>
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4> Email</h4>
            <h6 className='email'>ujjwalsharma1772003@gmail.com</h6>
            <a href="mailto:ujjwalsharma1772003@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp  className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>7302949712</h5>
            <a href="https://api.whatsapp.com/send?phone=+917302949712">Send a message</a>
          </article>
      
        </div>
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id="" cols="30" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
   </section>
      
    
  )
}

export default Contact
