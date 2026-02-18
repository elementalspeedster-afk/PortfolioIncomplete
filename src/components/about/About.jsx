import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {LuFolderSearch} from "react-icons/lu";


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt ="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>No professional Experience</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>None</small>
            </article>
            <article className='about__card'>
              <LuFolderSearch className='about__icon'/>
              <h5>Project</h5>
              <small>3+ Completed</small>
            </article>
          </div>
          <p>
            I am a motivated to become a game developer in unity and unreal, Blender sculptor/assets maker, 
            Web developer and software Developer. I am deeply committed to learning and strongly believe that 
            knowledge is power. I enjoy building interactive digital experiences and continuously improving 
            my technical and creative skills. I am an eager and passionate individual with a relentless drive for 
            personal and professional growth. I continuously expanding my skills and knowledge, and actively seeking 
            opportunities to contribute to creative projects and organizational success. I aim to leverage my 
            creativity and technical expertise to achieve goals, exceed expectations, and bring engaging ideas to life
            through technology and design.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About