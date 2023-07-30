import React from 'react'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

const Admission = () => {
  return (
    <div>
      <Navbar />
      <div>
        <p>2023</p>
        <p>School <br/>Admission</p>
        <p>Now Open For <span>Registration!</span></p>
        
      </div>
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Admission