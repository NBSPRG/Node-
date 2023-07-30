import React from 'react'
import './experience.css';
 import {BsFillPatchCheckFill} from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
           

            <article className="experience__details">
            <BsFillPatchCheckFill className='experienced__details_icons'/>
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </div>
            
            </article>

            <article className="experience__details">
            <BsFillPatchCheckFill className='experienced__details_icons'/>
            <div>
              <h4>CSS</h4>
              <small className='text-light'>intermediate</small>
            </div>
            
            </article>

            <article className="experience__details">
            <BsFillPatchCheckFill className='experienced__details_icons'/>
            <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className="experience__details">
            <BsFillPatchCheckFill className='experienced__details_icons'/>
            <div>
              <h4>BootStrap</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className="experience__details">
            <BsFillPatchCheckFill className='experienced__details_icons'/>
            <div>
              <h4>React Js</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
          </div>
        </div>
      {/* End of FrontEnd */}

      <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
           

            <article className="experience__details">
            <BsFillPatchCheckFill className='experienced__details_icons'/>
            <div>
              <h4>Nodejs</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className="experience__details">
            <BsFillPatchCheckFill className='experienced__details_icons'/>
            <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className="experience__details">
            <BsFillPatchCheckFill className='experienced__details_icons'/>
            <div>
              <h4>SQL</h4>
              <small className='text-light'>Intermiedate</small>
            </div>
            </article>

            <article className="experience__details">
            <BsFillPatchCheckFill className='experienced__details_icons'/>
            <div>
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className="experience__details">
            <BsFillPatchCheckFill className='experienced__details_icons'/>
            <div>
              <h4>React Js</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
          </div>
        </div>

        <div className="core__fundamentals">
          <h3>Core Fundamentals</h3>
          <div className="experience__content">
           

            <article className="experience__details">
            <BsFillPatchCheckFill className='experienced__details_icons'/>
            <div>
              <h4>C</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className="experience__details">
            <BsFillPatchCheckFill className='experienced__details_icons'/>
            <div>
              <h4>C++</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className="experience__details">
            <BsFillPatchCheckFill className='experienced__details_icons'/>
            <div>
            <h4>DBMS</h4>
            <small className='text-light'>Intermiedate</small>
            </div>
            
            </article>

            <article className="experience__details">
            <BsFillPatchCheckFill className='experienced__details_icons'/>
            <div>
              <h4>OOPS</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className="experience__details">
            <BsFillPatchCheckFill className='experienced__details_icons'/>
            <div>
              <h4>Networking</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className="experience__details">
            <BsFillPatchCheckFill className='experienced__details_icons'/>
            <div>
              <h4>SVM</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className="experience__details">
            <BsFillPatchCheckFill className='experienced__details_icons'/>
            <div>
              <h4>Data Enginering</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
