import React from 'react'
import LogoImage from './svgs/logo.svg'
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer">
        <img src={LogoImage} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, eius temporibus ex expedita cupiditate animi 
            necessitatibus, quasi sunt perferendis consequatur, deleniti asperiores. Amet laudantium labore
             asperiores unde aperiam reprehenderit modi sit ab totam placeat, dolorum optio fugit alias minima aspernatur
              sunt doloremque vel voluptate atque, enim quos, recusandae ullam? Consectetur!</p>
    </div>
  )
}

export default Footer