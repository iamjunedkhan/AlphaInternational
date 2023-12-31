import React from 'react'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import classroom from './Components/Images/classroom.jpg'
import classroom2 from './Components/Images/classroom2.jpg'
import c1 from './Components/Images/c1.png'
import c2 from './Components/Images/c2.png'
import c3 from './Components/Images/c3.png'
import Curriculum from './Components/Curriculum'
const Admission = () => {
  return (
    <div>
      <Navbar />
      <div className='relative'>

        <div className='px-5 sm:px-20 py-10 pt-20  text-white h-96 bg-blue-700/90 myclipath relative z-20'>
          <p className='text-4xl sm:text-5xl font-semibold  '>2023</p>
          <p className='text-4xl sm:text-5xl font-semibold  '>School <br />Admission</p>
          <p className='text-lg sm:text-xl my-4'>Now Open For <span className='text-black  border-2 border-black p-2 py-1 m-1'>Registration!</span></p>
          <p className='text-lg sm:text-xl font-semibold '>Call Now <span >+91 91234 XXXXX</span></p>
        </div>
        <div className='absolute block sm:hidden top-0 z-10 h-96 overflow-hidden'>
          <img src={classroom2.src} className=" object-top  h-full" alt="" />
        </div>
        <div className='absolute top-0 sm:block hidden z-10 h-96 overflow-hidden'>
          <img src={classroom.src} className=" object-top  " alt="" />
        </div>
        
      </div>

      {/* curicullum  */}
      <div>
        <h1 className='text-4xl text-center font-semibold my-16'>Our Standard Curriculum</h1>
        <div className='flex px-32 flex-col items-center md:flex-row justify-between   mx-auto ' >
          <Curriculum title={"Primary School"} desc={"Welcome to our Primary School Curriculum section! At this level, we focus on providing a strong foundation for your child's education. Our curriculum combines essential subjects with holistic development to nurture young minds"} img="c1"  />        
          <Curriculum title={"Secondary School"} desc={"Welcome to our Secondary School Curriculum section! As students progress to this level, we offer a more specialized and comprehensive approach to their education, preparing them for higher levels of learning."} img="c2" />        
          <Curriculum title={"High School"} desc={"Welcome to our High School Curriculum section! Here, we offer an advanced and diversified curriculum that prepares students for their future endeavors, whether in higher education or the workforce."} img="c3" />        
        </div>
      </div>
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Admission