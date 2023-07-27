import React from 'react'
import header from './Images/header.jpg'
const Header = () => {
  return (
    <div className='relative -z-10 overflow-hidden sm:h-screen h-[260px]  '>
        <img style={{filter:'brightness(0.3)'}}  src={header.src} className=" absolute top-0 left-0 -z-50"    />
    <div className='ml-12 sm:ml-24 mt-16 sm:mt-40'>
        <h1 className=' text-2xl text-white sm:text-7xl font-bold'>Alpha Internationl<br/>School </h1>
        <p className=' text-lg sm:text-3xl text-white sm:my-4'>"Educating Champions of a Just and Sustainable World"</p>
    </div>
        
    </div>
  )
}

export default Header