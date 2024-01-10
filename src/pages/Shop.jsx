import React from 'react'
import Hero from '../component/hero/Hero'
import Popular from '../component/popular/Popular'
import Offer from '../component/offers/Offer'
import NewCollection from '../component/newcollection/NewCollection'
import NewLetter from '../component/newsletter/NewLetter'

const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offer/>
        <NewCollection/>
        <NewLetter/>
    </div>
  )
}

export default Shop