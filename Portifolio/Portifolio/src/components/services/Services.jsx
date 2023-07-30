import React from 'react';
import './services.css';
import {BsCheck2Circle} from 'react-icons/bs';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='services'>
          <div className="services__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="services__list">
             <li>
             <BsCheck2Circle className='services__list-icon'/>
             <p>Lorem ipsum dolor sit amet adipisicing.</p>
             </li>

             <li>
             <BsCheck2Circle className='services__list-icon'/>
             <p>Lorem ipsum dolor sit amet adipisicing.</p>
             </li>

             <li>
             <BsCheck2Circle className='services__list-icon'/>
             <p>Lorem ipsum dolor sit amet adipisicing.</p>
             </li>

             <li>
             <BsCheck2Circle className='services__list-icon'/>
             <p>Lorem ipsum dolor sit amet adipisicing.</p>
             </li>

             <li>
             <BsCheck2Circle className='services__list-icon'/>
             <p>Lorem ipsum dolor sit amet adipisicing.</p>
             </li>

             <li>
             <BsCheck2Circle className='services__list-icon'/>
             <p>Lorem ipsum dolor sit amet adipisicing.</p>
             </li>
          </ul>
        </article>
        {/* END OF UI?UX DESIGN */}

        <article  className='services'>
          <div className="services__head">
            <h3>Web Development</h3>
          </div>
          <ul className="services__list">
             <li>
             <BsCheck2Circle className='services__list-icon'/>
             <p>Lorem ipsum dolor sit amet adipisicing.</p>
             </li>

             <li>
             <BsCheck2Circle className='services__list-icon'/>
             <p>Lorem ipsum dolor sit amet adipisicing.</p>
             </li>

             <li>
             <BsCheck2Circle className='services__list-icon'/>
             <p>Lorem ipsum dolor sit amet adipisicing.</p>
             </li>

             <li>
             <BsCheck2Circle className='services__list-icon'/>
             <p>Lorem ipsum dolor sit amet adipisicing.</p>
             </li>

             <li>
             <BsCheck2Circle className='services__list-icon'/>
             <p>Lorem ipsum dolor sit amet adipisicing.</p>
             </li>

             <li>
             <BsCheck2Circle className='services__list-icon'/>
             <p>Lorem ipsum dolor sit amet adipisicing.</p>
             </li>
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT */}


        <article  className='services'>
          <div className="services__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="services__list">
             <li>
             <BsCheck2Circle className='services__list-icon'/>
             <p>Lorem ipsum dolor sit amet adipisicing.</p>
             </li>

             <li>
             <BsCheck2Circle className='services__list-icon'/>
             <p>Lorem ipsum dolor sit amet adipisicing.</p>
             </li>

             <li>
             <BsCheck2Circle className='services__list-icon'/>
             <p>Lorem ipsum dolor sit amet adipisicing.</p>
             </li>

             <li>
             <BsCheck2Circle className='services__list-icon'/>
             <p>Lorem ipsum dolor sit amet adipisicing.</p>
             </li>

             <li>
             <BsCheck2Circle className='services__list-icon'/>
             <p>Lorem ipsum dolor sit amet adipisicing.</p>
             </li>

             <li>
             <BsCheck2Circle className='services__list-icon'/>
             <p>Lorem ipsum dolor sit amet adipisicing.</p>
             </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
