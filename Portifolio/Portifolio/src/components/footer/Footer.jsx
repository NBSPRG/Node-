import React from 'react';
import './footer.css';
import {FaTwitter} from 'react-icons/fa';
import {SiInstagram} from 'react-icons/si';
import {BsFacebook} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>EGATOR</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experiences</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portifolio">Portifolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><BsFacebook /></a>
        <a href="https://instagram.com"><SiInstagram /></a>
        <a href="https://twitter.com"><FaTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; EGATOR Tutorials. All right reserved</small>
      </div>
    </footer>
  )
}

export default Footer
