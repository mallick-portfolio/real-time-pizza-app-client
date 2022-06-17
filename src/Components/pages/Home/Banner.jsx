import React from 'react'
import pizza from '../../../assets/img/hero-pizza.png'
const Banner = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className='w-1/2'>
        <h4 className='text-xl sm:text-2xl italic sm:mb-4'>Are you hungry?</h4>
        <h4 className='text-4xl sm:text-6xl'>Don't Wait</h4>
      </div>
      <div className='w-1/2'>
        <img src={pizza} alt="" />
      </div>
    </div>
  )
}

export default Banner
