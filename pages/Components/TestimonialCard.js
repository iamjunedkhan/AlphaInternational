import React from 'react'
import student1 from './Images/student1.jpg'
import arrow from './Images/arrow.png'
const TestimonialCard = ({review,studentName,subject}) => {
  return (
    <div className=' p-4 sm:p-8 w-full h-full '>
    <div className=' flex relative  testimonial flex-col  border-2 border-black rounded-lg p-5 '>
        
        <p className='w-full px-2 sm:px-10 pt-8 sm:w-90 text-center'>{review}</p>
        <div className='flex mt-4 flex-row-reverse  ' >
            <div className=' w-16 h-16 rounded-full  overflow-hidden '>
                <img src={student1.src} className="w-full h-full aspect-auto  " />
            </div>
            <div className='flex flex-col justify-center mx-4'>
                <p className='text-right text-xl font-bold m-0 p-0'>{studentName}</p>
                <p className='text-right text-sm font-semibold m-0 p-0  relative -top-2 text-red-500'>{subject}</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default TestimonialCard