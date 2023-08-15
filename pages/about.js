import React from 'react'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import director from './Components/Images/director.jpg'
import TeacherCard from './Components/TeacherCard'

const About = () => {
  return (
    <div>
      <Navbar />
      <div className='my-12' >
      <h1 className='sm:text-5xl text-4xl font-semibold text-center '>Know About Us</h1>
        <div className="director flex-col-reverse flex sm:flex-row items-center px-4 sm:px-28 py-12">
          <div className='flex-1 py-4 '>
            <h1 className='text-4xl font-bold text-center sm:text-left'>Sarfraz Sir</h1>
            <p className='text-xl font-semibold text-center sm:text-left'>Director <span className='text-sm text-gray-500'>MSC(Maths)</span> </p>
            <div className='w-3/4 mx-auto sm:mx-0 mt-2 text-center sm:text-left'> 
            Bringing a Master of Science degree in Mathematics, Sarfraz Sir leads Alpha International pSchool with visionary expertise. Their passion for mathematics fuels engaging teaching, while their student-centered approach and collaborative spirit create an inclusive educational community. With Sarfraz Sir at the helm, students are inspired to excel academically, develop critical thinking skills, and embrace a future full of possibilities.
            </div>
          </div>
          <div className='flex-1  border-yellow-300  '>
            <div className='rounded-full overflow-hidden w-72 h-72 mx-auto'>
              <img src={director.src} alt="" className='w-full h-full' style={{'boxShadow':'box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'}} />
            </div>
          </div>
        </div>

        <h1 className='sm:text-5xl font-semibold text-center text-3xl '>Meet Our Teacher</h1>

        <div className='sm:grid sm:grid-cols-2 sm:px-28 place-content-center'>
          <TeacherCard name={'Sofiya Ansari Mam '} qualification={'M.Sc Chemistry'} img={director} />
          <TeacherCard name={'Sofiya Ansari Mam '} qualification={'M.Sc Chemistry'} img={director} />
          <TeacherCard name={'Sofiya Ansari Mam '} qualification={'M.Sc Chemistry'} img={director} />
          <TeacherCard name={'Sofiya Ansari Mam '} qualification={'M.Sc Chemistry'} img={director} />
        </div>
      </div>
      <ContactUs />
      <Footer />
    </div>
  )
}

export default About