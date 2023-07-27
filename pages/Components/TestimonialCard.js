import React from 'react'
import student1 from './Images/student1.jpg'
import arrow from './Images/arrow.png'
const TestimonialCard = () => {
  return (
    <div className=' p-4 sm:p-8 w-full '>
    <div className=' flex relative  testimonial flex-col  border-2 border-black rounded-lg p-5 '>
        
        <p className='w-full px-2 sm:px-10 pt-8 sm:w-90 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
        <div className='flex mt-4 flex-row-reverse  ' >
            <div className=' w-16 h-16 rounded-full  overflow-hidden '>
                <img src={student1.src} className="w-full h-full aspect-auto  " />
            </div>
            <div className='flex flex-col justify-center mx-4'>
                <p className='text-right text-xl font-bold m-0 p-0'>Sam Viston</p>
                <p className='text-right text-sm font-semibold m-0 p-0  relative -top-2 text-red-500'>Science Student</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default TestimonialCard