import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from './../../assets/fgirl.svg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 style={{ color: "var(--color-primary)"}}>"Cultivating Prosperity, Linking Growers"</h5>
        <h1>Harvest Link</h1>
        <h5 className="text-light">Connecting Farmers and Buyers</h5>
        <CTA />
        <div className="me">
          <div className="me__container">
            <div className="me__left">
              <p className="text-light">
                Harvest Link is a revolutionary webapp
                that brings farmers and buyers together in a seamless and efficient
                marketplace. With our platform, farmers can easily market their crops
                and find all the necessary items for farming. Experience the power of
                Harvest Link today!
              </p>
            </div>
            <div className="me__right">
              <img src={ME} alt='logo'/>
            </div>
          </div>
        </div>
        <a href="#contact" className='scroll__down'>Scroll down</a>
        <HeaderSocials/>
      </div>
    </header>
  )
}

export default Header