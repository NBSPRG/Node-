import React from 'react';
import './nav.css';
import {ImHome} from 'react-icons/im';
import {FaUserTie} from 'react-icons/fa';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {TfiEmail} from 'react-icons/tfi';
import { useState } from 'react';
import {SiCodereview} from 'react-icons/si';
import {MdWork} from 'react-icons/md';

const Nav = () => {
  const [activeNav,  setactiveNav] = useState('#');
  return (

    <nav >
      <a href="#" className={activeNav==='#' ? 'active' : ''} onClick={()=>setactiveNav('#')} ><ImHome /></a>
      <a href="#about" onClick={()=>setactiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><FaUserTie /></a>
      <a href="#experience" onClick={()=>setactiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#services" onClick={()=>setactiveNav('#services')} className={activeNav==='#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#portifolio" onClick={()=>setactiveNav('#portifolio')} className={activeNav==='#portifolio'? 'active' : ''}><MdWork /></a>
      <a href="#testimonials" onClick={()=>setactiveNav('#testimonials')} className={activeNav==='#testimonials'? 'active' : ''}><SiCodereview /></a>
      <a href="#contact" onClick={()=>setactiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}><TfiEmail /></a>
    </nav>
  )
}

export default Nav
