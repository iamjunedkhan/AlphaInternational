import React from 'react'
import skilledTeacher from './Images/skilledTeacher.png'
import money from './Images/money.png'
import modernLearning from './Images/modernLearning.png'

const WhyChooseUs = () => {
  return (
         
        <div className='my-24 px-4 md:px-28'>
            <h1 className=' text-4xl mt-8 md:text-5xl font-semibold text-center '>Why Choose Us?</h1>
            <div className='flex flex-col md:flex-row justify-center items-center md:py-12 my-8 md:my-20'>
                <div className='border-2 border-black rounded-md p-5 w-[330px]  h-[480px] m-4 md:m-12 testimonial ' style={{border:'2px dashed black'}}>
                    <div className='p-3 flex justify-center'>
                        <img src={skilledTeacher.src} alt="" className='w-3/5' />
                    </div>
                    <h1 className='text-3xl font-bold text-center mb-4'>Skilled Teacher</h1>
                    <p className='text-center text-xl font-semibold my-6'> We Have Skilled teachers possess in-depth knowledge and mastery of their subject matter, allowing them to provide accurate and comprehensive information.</p>
                </div>
                <div className='border-2 border-black rounded-md p-5 w-[330px] h-[480px] m-12 testimonial ' style={{border:'2px dashed black'}}>
                    <div className='p-3 flex justify-center'>
                        <img src={money.src} alt="" className='w-3/5' />
                    </div>
                    <h1 className='text-3xl font-bold text-center mb-4'>Affordable Fees</h1>
                    <p className='text-center text-xl font-semibold my-6'>We have Affordable fees that make education accessible to a wider range of individuals, regardless of their financial background.</p>
                </div>
                <div className='border-2 border-black rounded-md p-5 w-[330px] h-[480px] m-12 testimonial ' style={{border:'2px dashed black'}}>
                    <div className='p-3 flex justify-center'>
                        <img src={modernLearning.src} alt="" className='w-3/5' />
                    </div>
                    <h1 className='text-3xl font-bold text-center mb-4'>Modern Learning</h1>
                    <p className='text-center text-xl font-semibold my-6'> Modern learning embraces technology as a powerful tool for engagement, interactivity, and access to a wealth of information.</p>
                </div>
            </div>
        </div>
  )
}

export default WhyChooseUs