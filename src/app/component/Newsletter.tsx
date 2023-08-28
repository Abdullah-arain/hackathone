import React from 'react'

export default function Newsletter() {
  return (
    <div className='my-36'>
      <h1 className='md:text-9xl text-7xl font-semibold text-gray-100 text-center -z-50'>Newsletter</h1>

      <section className='md:-mt-[134px] -mt-20 mb-20 text-center content-between justify-items-center'>
        <h1 className='md:text-3xl text-2xl font-bold'>Subscribe Our Newsletter</h1>
        <p className='md:mt-5 mt-3 text-lg text-gray-600'>Get the latest information and promo offers directly</p>

        <form className='md:mt-8 mt-6 flex justify-center'>
            <input type="email" placeholder='Input email address' className='border-gray-600 border py-1 pl-2 mr-1 md:px-24'/>
            <button className='bg-black py-1 text-white px-9'>Get started</button>
        </form>
      </section>
    </div>
  )
}
