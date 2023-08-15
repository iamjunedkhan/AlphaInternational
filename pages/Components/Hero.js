import React from 'react'
import Link from 'next/link';
import heroright from "./Images/heroright.png";
import heroleft from "./Images/heroleft.png";
const Hero = () => {
    return (
        <div className='my-16 sm:my-24 flex px-12  flex-col-reverse sm:flex-row sm:px-28  items-center sm:space-x-20'>
            <div className='flex-1  flex-col'>
                <div className=' overflow-hidden rounded-3xl my-12  border-2  w-4/5 shadowFixed__c  '>
                    <img src={heroleft.src} />
                </div>
                <div>
                    {/* <button className='btn-grad'>Learn More</button> */}
                    <Link href="/about" className='btn-grad w-fit'  >Learn More</Link>
                </div>

            </div>
            <div className='flex-1 '>
                <h1 className=' text-4xl font-bold quickSand  text-center'>Why We Are Best In Providing Education.</h1>
                <p className=' my-2 tracking-wider text-center'>
                    The best educational institutions stand out due to their high academic standards, dedicated educators, and access to resources such as libraries and labs. They prioritize research, innovation, and collaborations, providing students with valuable networking opportunities and real-world experiences</p>
                <div className=' hidden sm:block overflow-hidden rounded-3xl my-12  border-2  w-4/5 shadowFixed__c  '>
                    <img src={heroright.src} />
                </div>
            </div>
        </div>
    )
}

export default Hero