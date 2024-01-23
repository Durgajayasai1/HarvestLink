import React from 'react'
import './buyers.css'
import BUYER1 from './../../assets/buyer1.jpg'
import BUYER2 from './../../assets/buyer2.jpg'
import BUYER3 from './../../assets/buyer3.jpg'

const data = [
  {
    id: 1,
    image: BUYER1,
    title: 'Fresh, Locally Sourced Produce',
    paragraph: 'Discover diverse, locally sourced products directly from farmers for premium quality.'
  },

  {
    id: 2,
    image: BUYER2,
    title: 'Support Local Agriculture',
    paragraph: 'Harvest Link purchases support local farms for growth and sustainability.'
  },

  {
    id: 3,
    image: BUYER3,
    title: 'Efficient Delivery',
    paragraph: 'Harvest Link ensures smooth, timely delivery for hassle-free order fulfillment.'
  }
]

const Portfolio = () => {
  return (
    <section id="buyers">
      <h5>Perks</h5>
      <h2>Benefits for Buyers</h2>

      <div className="container buyers__container">
        {
          data.map(({ id, image, title, paragraph }) => {
            return (
              <article id={id} className='buyer__item'>
                <div className="buyer__item-Image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <p>{paragraph}</p>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio