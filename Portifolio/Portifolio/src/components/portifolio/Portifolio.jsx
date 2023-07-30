import React from 'react';
import './portifolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title:'Cryptocurrency Dashboard and financial-data-visualization',
    github:'https://github.com'
  },

  {
    id: 2,
    image: IMG2,
    title:'Chart templates and inforgraphics in Figma',
    github:'https://github.com'
  },

  {
    id: 3,
    image: IMG3,
    title:'Figma Dashboard UI kit for data design web app',
    github:'https://github.com'
  },

  {
    id: 4,
    image: IMG4,
    title:'Maintaining task and tracking progress',
    github:'https://github.com'
  },

  {
    id: 5,
    image: IMG5,
    title:'Chart templates and inforgraphics in Figma',
    github:'https://github.com'
  },

  {
    id: 6,
    image: IMG6,
    title:'Chart templates and inforgraphics in Figma',
    github:'https://github.com'
  }

  

]

const Portifolio = () => {
  return (
    <section id='portifolio'>
      <h5>My Recent Works</h5>
      <h2>Portifolio</h2>

      <div className="container portifolio__container">
        {
          data.map(({id, image, title, github})=>{
            return (
              <article key={id} className="portifolio__item">
              <div className="portifolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='cta'>
                <a href={github} className='btn'>Github</a>
                <a href="https://dribble.com/Aliens_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portifolio
