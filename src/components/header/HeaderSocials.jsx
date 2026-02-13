import React from 'react'
import {FiYoutube} from "react-icons/fi";
import {FaGithubAlt} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
       <a href="https://youtube.com" target="blank"><FiYoutube /></a>
       <a href="https://github.com" target="blank"><FaGithubAlt/></a>
       <a href="https://facebook.com" target="blank"><FaFacebook/></a> 
    </div>
  )
}

export default HeaderSocials