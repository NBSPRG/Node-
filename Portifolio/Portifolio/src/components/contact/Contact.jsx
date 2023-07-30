import React from 'react';
import './contact.css'
import {AiTwotoneMail} from 'react-icons/ai';
import {FaFacebookMessenger} from 'react-icons/fa';
import {IoLogoWhatsapp} from 'react-icons/io';

const Contact = () => {
  return (
    <section id='contact'>
    <h5>Touch in Contact</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <AiTwotoneMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>chandanues@gmail.com</h5>
          <a href="mailto:chandanues@gmail.com" target='_blank'>Send a Messge</a>
        </article>

        <article className="contact__option">
          <FaFacebookMessenger/>
          <h4>Messenger</h4>
          <h5>ChandanTutorial</h5>
          <a href="https://m.me/profile.php?id=100077256040940" target='_blank'>Send a Messge</a>
        </article>

        <article className="contact__option">
          <IoLogoWhatsapp/>
          <h4>Whatsapp</h4>
          <h5>+911234567890</h5>
          <a href="https://api.whatsapp.com/send?phone+918789629375" target='_blank'>Send a Messge</a>
        </article>


      </div>

      <form action="">
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea name="message" id="" cols="30" rows="10" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
    
    
    </section>
  )
}

export default Contact
