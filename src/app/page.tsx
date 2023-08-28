import React from 'react'
import Hero from './component/Hero'
import Promotion from './component/PromotionSection'
import Promo from './component/PromoChild'
import Newsletter from './component/Newsletter'
import Footer from './component/Footer'
import Jewellery from './component/JwellerySection'
import PromoChild from './component/PromoChild'

export default function page() {
  return (
    <div className=''>
      <Hero/>
      <Promotion/>
      <PromoChild/>
      <Jewellery/>
      <Newsletter/>
    </div>
  )
}
