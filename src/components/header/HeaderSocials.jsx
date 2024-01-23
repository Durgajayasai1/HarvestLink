import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" target='_blank'><FaLinkedinIn /></a>
        <a href="https://facebook.com" target='_blank'><FaFacebookF /></a>
        <a href="https://twitter.com" target='_blank'><FaXTwitter /></a>
    </div>
  )
}

export default HeaderSocials