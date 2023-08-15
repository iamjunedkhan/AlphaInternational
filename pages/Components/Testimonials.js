import React from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  return (
    <div className='my-16 sm:my-24 px-12  sm:px-28  '>
        <h1 className='text-4xl font-bold quickSand  text-center '>Review's From Students</h1>
        <p className='text-center m-3  my-2 tracking-wider text-md'>Read the reviews by the student of the<br/>Alpha Internationals to know more about us.</p>
        <div className='flex flex-col sm:flex-row justify-center items-center '>
            <TestimonialCard subject={'Science Maths'} review={"I've had an incredible journey at Alpha International. The dedicated teachers, diverse extracurriculars, and supportive community have shaped me into the person I am today. The teachers here go above and beyond to ensure our success, and I'm proud to be a part of this amazing school."} studentName={"Sam Viston"} />
            <TestimonialCard subject={'Commerce'}  review={"From the moment I stepped into the campus, I felt welcomed and valued. The teachers here don't just teach subjects; they inspire us to think critically and dream big. Alpha International has given me the confidence to pursue my passions and has prepared me for the challenges of the future. I'm grateful to be part of this nurturing and empowering community."} studentName="Sam vitson" />
        </div>
    </div>
  )
}

export default Testimonials