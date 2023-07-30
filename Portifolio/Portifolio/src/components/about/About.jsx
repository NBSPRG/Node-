import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
    
    <h5>Get to know</h5>
    <h2>About me</h2>

    <div className="container about__container">

      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
            <article className="about__card">
              <FaAward classname='about__icons'></FaAward>
                <h5>Experience</h5>
                <small>Freshers </small>
            </article>

            <article className="about__card">
              <FiUsers classname='about__icons'></FiUsers>
                <h5>Clients</h5>
                <small>Seeking for Client</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary classname='about__icons'></VscFolderLibrary>
                <h5>Projects</h5>
                <small>4+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Tempore molestiae minima repudiandae voluptates repellendus dolore laudantium totam sit numquam. 
            Labore laboriosam magni culpa nulla animi necessitatibus veniam maxime quisquam. Omnis!
          </p>

          <a href="#" className='btn btn-primary'>Let's Talks</a>
        </div>
        
      </div>


    </section>
  )
}

export default About
