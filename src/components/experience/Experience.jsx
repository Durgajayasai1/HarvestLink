import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What it is</h5>
      <h2>How it Works?</h2>

      <div className="container experience__container">
        <div className="experience__signup">
          <h3>Sign Up</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div>
                <h4>
                  Step 1: Create your Harvest Link account and set up your profile.
                  This allows you to showcase your crops and connect with potential buyers.
                </h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__crops">
          <h3>List Your Crops</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div>
                <h4>
                  Step 2: Add details and images of the crops you want to sell.
                  Provide accurate information to attract interested buyers.
                </h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__buyers">
          <h3>Connect with Buyers</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div>
                <h4>
                  Step 3: Buyers can browse through the listings and connect directly with you.
                  Negotiate prices, discuss quantities, and arrange delivery seamlessly.
                </h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience