import React from 'react'
import Hero from './component/Hero'
import Promotion from './component/PromotionSection'
import Client from './component/Client'
import Newsletter from './component/Newsletter'
import Footer from './component/Footer'
import Jewellery from './component/JwellerySection'

export default function page() {
  return (
    <div className=''>
      <Hero/>
      <Promotion/>
      <Client/>
      <Jewellery/>
      <Newsletter/>
    </div>
  )
}
