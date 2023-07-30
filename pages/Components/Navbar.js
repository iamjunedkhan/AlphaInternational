import Image from 'next/image'
import React, { useState } from 'react'
import logo from './Images/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import Hamburger from './Hamburger';
import Link from 'next/link';
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  return (
    <>
      <div className='border-b-2 bg-white p-4 sm:px-20 flex justify-between items-center relative'>
        <div>
          <img src={logo.src} className="w-28" />
        </div>
        <div className='hidden sm:block'>
          <span className='px-8 text-xl hover:scale-105 hover:text-red-800 hover:font-semibold  cursor-pointer transition-all duration-150 relative   '><Link  href="/" className='hover:underline underline-offset-4'>Home</Link></span>
          <span className='px-8 text-xl hover:scale-105 hover:text-red-800 hover:font-semibold  cursor-pointer transition-all duration-150 relative   '><Link  href="/about" className='hover:underline underline-offset-4'>About</Link></span>
          <span className='px-8 text-xl hover:scale-105 hover:text-red-800 hover:font-semibold  cursor-pointer transition-all duration-150 relative   '><Link  href='/admission' className='hover:underline underline-offset-4'>Admission</Link></span>
          <span className='px-8 text-xl hover:scale-105 hover:text-red-800 hover:font-semibold  cursor-pointer transition-all duration-150 relative   '><Link  href='/' className='hover:underline underline-offset-4'>Parents</Link></span>
          <span className='px-8 text-xl hover:scale-105 hover:text-red-800 hover:font-semibold  cursor-pointer transition-all duration-150 relative   '><Link  href='/' className='hover:underline underline-offset-4'>More</Link></span>
        </div>
        <div className='text-3xl sm:hidden block ' >
         {showNavbar?<GrFormClose onClick={()=>setShowNavbar(false)} className={`  transition-all duration-200  `}  />:<GiHamburgerMenu onClick={()=>setShowNavbar(true)} className={` transition-all duration-200 `} /> }

        </div>
      </div>
      <div className={`flex flex-col justify-center overflow-hidden transition-all duration-300  ${showNavbar?'h-[250px]':'h-0'}`}>
        <span className='px-8 m-2 text-xl  hover:text-red-800 hover:font-semibold  cursor-pointer transition-all duration-150 '><Link href="/" className='hover:underline underline-offset-4'>Home</Link></span>
        <span className='px-8 m-2 text-xl  hover:text-red-800 hover:font-semibold  cursor-pointer transition-all duration-150 '><Link href="/about" className='hover:underline underline-offset-4'>About</Link></span>
        <span className='px-8 m-2 text-xl  hover:text-red-800 hover:font-semibold  cursor-pointer transition-all duration-150 '><Link href="/admission" className='hover:underline underline-offset-4'>Admission</Link></span>
        <span className='px-8 m-2 text-xl  hover:text-red-800 hover:font-semibold  cursor-pointer transition-all duration-150 '><Link href="/" className='hover:underline underline-offset-4'>Parents</Link></span>
        <span className='px-8 m-2 text-xl  hover:text-red-800 hover:font-semibold  cursor-pointer transition-all duration-150 '><Link href="/" className='hover:underline underline-offset-4'>More</Link></span>
      </div>
    </>
  )
}

export default Navbar