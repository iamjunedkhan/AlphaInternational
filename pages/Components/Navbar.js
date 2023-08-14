import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from './Images/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import Hamburger from './Hamburger';
import Link from 'next/link';
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [currentPage, setcurrentPage] = useState('')


  useEffect(() => {
        let cpurl = window.location.href;
        let cp= cpurl.split('/')[3];
        console.log('useEffect :'+cp);
        setcurrentPage(cp);
        // console.log('current page :'+currentPage)
  }, [])
  
  return (
    <>
      <div className='border-b-2 bg-white p-4 sm:px-20 flex justify-between items-center relative'>
        <div>
          <img src={logo.src} className="w-28" />
        </div>
        <div className='hidden sm:block'>
          <span className={`px-3 mx-4 text-xl hover:scale-105  hover:font-semibold cursor-pointer transition-all duration-150 relative ${currentPage==''?'font-semibold bg-red-800 rounded-md text-white ':'hover:text-red-800 hover:underline underline-offset-4'}  `}><Link  href="/" >Home</Link></span>
          <span className={`px-3 mx-4 text-xl hover:scale-105  hover:font-semibold cursor-pointer transition-all duration-150 relative ${currentPage=='about'?'font-semibold bg-red-800 rounded-md text-white':'hover:text-red-800 hover:underline underline-offset-4'}  `}><Link  href="/about" >About</Link></span>
          <span className={`px-3 mx-4 text-xl hover:scale-105  hover:font-semibold cursor-pointer transition-all duration-150 relative ${currentPage=='admission'?'font-semibold bg-red-800 rounded-md text-white':'hover:text-red-800 hover:underline underline-offset-4'}  `}><Link  href='/admission' >Admission</Link></span>
          <span className={`px-3 mx-4 text-xl hover:scale-105  hover:font-semibold cursor-pointer transition-all duration-150 relative ${currentPage=='parents'?'font-semibold bg-red-800 rounded-md text-white':'hover:text-red-800 hover:underline underline-offset-4'}  `}><Link  href='/parents' >Parents</Link></span>
          <span className={`px-3 mx-4 text-xl hover:scale-105  hover:font-semibold cursor-pointer transition-all duration-150 relative ${currentPage=='more'?'font-semibold bg-red-800 rounded-md text-white':'hover:text-red-800 hover:underline underline-offset-4'}  `}><Link  href='/' >More</Link></span>
        </div>
        <div className='text-3xl sm:hidden block ' >
         {showNavbar?<GrFormClose onClick={()=>setShowNavbar(false)} className={`  transition-all duration-200  `}  />:<GiHamburgerMenu onClick={()=>setShowNavbar(true)} className={` transition-all duration-200 `} /> }

        </div>
      </div>
      <div className={`flex flex-col justify-center overflow-hidden transition-all duration-300  ${showNavbar?'h-[250px]':'h-0'}`}>
        <span className={`px-3 mx-4 text-xl hover:scale-105  hover:font-semibold cursor-pointer transition-all duration-150 relative ${currentPage==''?'font-semibold bg-red-800 rounded-md text-white ':'hover:text-red-800 hover:underline underline-offset-4'}  `}><Link href="/" >Home</Link></span>
        <span className={`px-3 mx-4 text-xl hover:scale-105  hover:font-semibold cursor-pointer transition-all duration-150 relative ${currentPage=='about'?'font-semibold bg-red-800 rounded-md text-white ':'hover:text-red-800 hover:underline underline-offset-4'}  `}><Link href="/about" >About</Link></span>
        <span className={`px-3 mx-4 text-xl hover:scale-105  hover:font-semibold cursor-pointer transition-all duration-150 relative ${currentPage=='admission'?'font-semibold bg-red-800 rounded-md text-white ':'hover:text-red-800 hover:underline underline-offset-4'}  `}><Link href="/admission" >Admission</Link></span>
        <span className={`px-3 mx-4 text-xl hover:scale-105  hover:font-semibold cursor-pointer transition-all duration-150 relative ${currentPage=='parents'?'font-semibold bg-red-800 rounded-md text-white ':'hover:text-red-800 hover:underline underline-offset-4'}  `}><Link href="/parents" >Parents</Link></span>
        <span className={`px-3 mx-4 text-xl hover:scale-105  hover:font-semibold cursor-pointer transition-all duration-150 relative ${currentPage=='more'?'font-semibold bg-red-800 rounded-md text-white ':'hover:text-red-800 hover:underline underline-offset-4'}  `}><Link href="/" >More</Link></span>
      </div>
    </>
  )
}

export default Navbar