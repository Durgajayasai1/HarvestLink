import React from 'react'
import './footer.css'
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>HarvestLink</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#experience">Info</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#buyers">Benefits</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com" target='_blank'><FaFacebook /></a>
        <a href="https://twitter.com" target='_blank'><FaXTwitter/></a>
        <a href="https://linkedin.com" target='_blank'><FaLinkedinIn /></a>
      </div>

      <div className="footer__copyright">
        <small>Copyright &copy; 2024 HARVESTLINK, All rights reserved. Made with &#x1F5A4;</small>
      </div>
    </footer>
  )
}

export default Footer