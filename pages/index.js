import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Section from './Components/Section'
import Hero from './Components/Hero'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'
import ContactUs from './Components/ContactUs'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      {/* <Section /> */}
      <Hero />
      <Testimonials />
      <ContactUs />
      <Footer />
    </main>
  )
}
