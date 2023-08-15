import React from 'react'
import studentThinking from './Images/studentThinking.jpg'
import { FaBrain,FaSchool } from "react-icons/fa";
import { ImBooks } from "react-icons/im";

const Section = () => {
    return (
        <div className='my-24 flex px-4 md:px-28 flex-col-reverse md:flex-row items-center '>
            <div className='md:w-1/2 w-full'>
                <h1 className=' text-3xl mt-8 md:text-5xl font-semibold text-center '>Why our Schools are best fit for your Child?</h1>
                <p className='mx-12 mt-4 text-center text-xl text-gray-500'>Our school is the best choice for your child because we 
                prioritize academic excellence, personalized attention, and a supportive environment for their overall growth and success.</p>
                <div className='flex  flex-col items-center my-6' >
                    <div className='border-2 border-black   rounded-full items-center space-x-2 text-lg bg-yellow-300 flex p-2 mx-4 my-3 w-4/5' >
                        <FaBrain className='w-7 ml-4 h-7' />
                        <p>Well Trained Professionals</p>
                    </div>
                    <div className='border-2 border-black  rounded-full items-center space-x-2 text-lg bg-pink-500 flex p-2 mx-4 my-3 w-4/5' >
                        <ImBooks className='w-7 ml-4 h-7' />
                        <p>Awesome Infra-Structure</p>
                    </div>
                    <div className='border-2 border-black    rounded-full items-center space-x-2 text-lg bg-cyan-300 flex p-2 mx-4 my-3 w-4/5' >
                        <FaSchool className='w-7 ml-4 h-7' />
                        <p>International Lesson Patterns</p>
                    </div>
                </div>
            </div>
            <div className=' w-full md:w-1/2  flex justify-center '>
                <div className='rounded-full overflow-hidden  border-2  w-80 shadow__c '>
                    <img src={studentThinking.src} />
                </div>
            </div>
        </div>
    )
}

export default Section