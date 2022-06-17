import React from 'react'
import pizza from '../../../assets/img/hero-pizza.png'
const Banner = () => {
  return (
    <div className='flex justify-between items-center mb-8 sm:mb-24'>
      <div className='w-1/2'>
        <h4 className='text-xl sm:text-2xl italic sm:mb-4'>Are you hungry?</h4>
        <h1 className='text-4xl sm:text-6xl font-bold'>Don't Wait</h1>
      </div>
      <div className='w-1/2'>
        <img src={pizza} alt="" />
      </div>
    </div>
  )
}

export default Banner
