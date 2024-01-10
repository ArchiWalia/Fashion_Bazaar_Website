import React from 'react'
import './Offer.css'
import image from '../assets/exclusive_image.png'
const Offer = () => {
  return (
    <div className='offers'>
             <div className="offers-left">
             <h1>Exclusive</h1>
             <h1>Offers for you</h1>
             <p>Only one best sellers products</p>
             <button>Check Now</button>

             </div>
             <div className="offers-right">
                 <img src={image} alt="" />
            </div>
    </div>
  )
}

export default Offer