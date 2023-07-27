import React from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  return (
    <div className='my-16 sm:my-24 px-12  sm:px-28  '>
        <h1 className='text-4xl font-bold quickSand  text-center '>Review's From Students</h1>
        <p className='text-center m-3  my-2 tracking-wider text-md'>Read the reviews by the student of the<br/>Alpha Internationals to know more about us.</p>
        <div className='flex flex-col sm:flex-row justify-center items-center '>
            <TestimonialCard />
            <TestimonialCard />
        </div>
    </div>
  )
}

export default Testimonials