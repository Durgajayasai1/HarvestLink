import React from 'react'
import './about.css'
import VEGE from './../../assets/vegetables.jpg'
import { FaTasks } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { RiRecycleFill } from "react-icons/ri";

const About = () => {
  return (
    <section className='about' id="about">
      <h5>Get to Know</h5>
      <h2>About Us</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-Image">
            <img src={VEGE} />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaTasks className='about__icon' />
              <h5>Our Mission</h5>
              <small>Connecting farmers, consumers sustainably.</small>
            </article>
            <article className="about__card">
              <FaChartLine className='about__icon' />
              <h5>Our Values</h5>
              <small>Committed to honest, transparent relationships.</small>
            </article>
            <article className="about__card">
              <RiRecycleFill className='about__icon' />
              <h5>Sustainability</h5>
              <small>Prioritize environmentally friendly operational practices.</small>
            </article>
          </div>
          <p>
            Welcome to Harvest Link! A trio driven by passion, dedicated to providing fresh,
            sustainable food. Our journey started with bridging farmer-consumer gaps, aiming for a
            positive impact on the food system. Join our quest for a healthier, sustainable future.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About