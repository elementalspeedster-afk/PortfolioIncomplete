import React from 'react'
import './Nav.css'
import {AiOutlineHome} from "react-icons/ai";
import {FaRegUser} from "react-icons/fa6";
import {LuBookMinus} from "react-icons/lu";
import {RiServiceLine} from "react-icons/ri";
import {LuMessageSquareText} from "react-icons/lu";
import {useState} from 'react'


const nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaRegUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><LuBookMinus /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><LuMessageSquareText /></a>
    </nav>
  )
}

export default nav