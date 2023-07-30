import React from 'react';
import './testimonials.css';
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg';
import AVATAR3 from '../../assets/avatar3.jpg';
import AVATAR4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';



const data = [
  {
    id:1,
    avatar:AVATAR1,
    name:'Tina Snow',
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex odio atque eius accusantium porro blanditiis vel, ipsa aliquid dignissimos quos animi dicta consectetur doloremque asperiores molestias quam voluptatem at?"
  },

  {
    id:2,
    avatar:AVATAR2,
    name:'Shatta Wale',
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex odio atque eius accusantium porro blanditiis vel, ipsa aliquid dignissimos quos animi dicta consectetur doloremque asperiores molestias quam voluptatem at?"
  },

  {
    id:3,
    avatar:AVATAR3,
    name:'Kwame Despite',
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex odio atque eius accusantium porro blanditiis vel, ipsa aliquid dignissimos quos animi dicta consectetur doloremque asperiores molestias quam voluptatem at?"
  },

  {
    id:4,
    avatar:AVATAR4,
    name:'Ruchi Kumari',
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex odio atque eius accusantium porro blanditiis vel, ipsa aliquid dignissimos quos animi dicta consectetur doloremque asperiores molestias quam voluptatem at?"
  },

]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
        <Swiper className="container testimonials__container" 
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        
        pagination={{ clickable: true }}
        
        >
        {data.map(({id, avatar, name, review})=>{
          return (
            <SwiperSlide key={id} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="" />
          </div>
          
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
        </SwiperSlide> 
          )
      })}
        </Swiper>
    </section>
  )
}

export default Testimonials
