import React from 'react'
import './services.css'
import { GiVineLeaf } from "react-icons/gi";

const Services = () => {
  return (
    <section id="services">
      <h5>What do we offer?</h5>
      <h2>Benefits for Farmers</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Benefits</h3>
          </div>
          <ul className="service__list">
            <li>
            <GiVineLeaf className='service__list-icon'/>
            <p>Improved Customer Relationships</p>
            </li>
            <li>
            <GiVineLeaf className='service__list-icon'/>
            <p>Increased Flexibility</p>
            </li>
            <li>
            <GiVineLeaf className='service__list-icon'/>
            <p>Reduced Risk</p>
            </li>
            <li>
            <GiVineLeaf className='service__list-icon'/>
            <p>Access to Financing</p>
            </li>
            <li>
            <GiVineLeaf className='service__list-icon'/>
            <p>Collaborative Opportunities</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Benefits</h3>
          </div>
          <ul className="service__list">
            <li>
            <GiVineLeaf className='service__list-icon'/>
            <p>Improved Market Access</p>
            </li>
            <li>
            <GiVineLeaf className='service__list-icon'/>
            <p>Reduced Marketing Costs</p>
            </li>
            <li>
            <GiVineLeaf className='service__list-icon'/>
            <p>Enhanced Product Traceability</p>
            </li>
            <li>
            <GiVineLeaf className='service__list-icon'/>
            <p>Access to Expert Advice</p>
            </li>
            <li>
            <GiVineLeaf className='service__list-icon'/>
            <p>Efficient Supply Chain Management</p>
            </li>
            <li>
            <GiVineLeaf className='service__list-icon'/>
            <p>Continuous Learning Opportunities</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Benefits</h3>
          </div>
          <ul className="service__list">
            <li>
            <GiVineLeaf className='service__list-icon'/>
            <p>Increased Profitability</p>
            </li>
            <li>
            <GiVineLeaf className='service__list-icon'/>
            <p>Improved Sustainability</p>
            </li>
            <li>
            <GiVineLeaf className='service__list-icon'/>
            <p>Access to Market Insights</p>
            </li>
            <li>
            <GiVineLeaf className='service__list-icon'/>
            <p>Increased Brand Visibility</p>
            </li>
            <li>
            <GiVineLeaf className='service__list-icon'/>
            <p>Streamlined Communication</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services