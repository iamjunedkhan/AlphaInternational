import React from 'react'
import logo from './Images/logo.png'
import { FiYoutube, FiMail } from "react-icons/fi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { CiFacebook } from "react-icons/ci";
const Footer = () => {
  return (
    <div className='bg-yellow-300/80 border-2 space-y-4 flex-col  sm:flex-row  px-12 sm:px-40  flex justify-between py-12'>
      {/* first col*/}
      <div className=' flex flex-col sm:flex-row  items-center sm:items-start  sm:justify-start '>
        <div className='w-16'>
          <img src={logo.src} alt="" />
        </div>
        <div className='flex items-center sm:items-start flex-col  '>
          <h1 className='text-3xl signika mt-2 pt-2'>Alpha International</h1>
          <div className='my-2  w-64 text-center sm:text-left'>
            Alpha International, the best school in the khajrana for you children's <b>Bright Future</b>.
          </div>
          <div className='flex space-x-4 text-2xl my-2' >
            <FiYoutube />
            <AiFillTwitterCircle />
            <BsInstagram />
            <CiFacebook />
          </div>
        </div>
      </div>
      {/* second col */}
      <div className='signika flex flex-col items-center sm:items-end space-y-1 text-center'>
        <h1 className='text-2xl'>Keep In Touch</h1>
        <div className='flex items-center text-xl space-x-2'>
          <MdOutlinePermPhoneMsg /> <p>+91 91234 45345</p>
        </div>
        <div className='flex items-center text-xl space-x-2'>
          <FiMail /><p>AlphaInternational@gmail.com</p>
        </div>
        <div className='flex items-start text-xl space-x-2'>
          <ImLocation2 className='mt-1' /> <p>Heen Palace, Near Ayesha<br /> Majsid, Khajrana Indore </p>
        </div>
        <div className='flex items-center text-xl space-x-2' >
          <p>452001</p>

        </div>
      </div>
    </div>
  )
}

export default Footer