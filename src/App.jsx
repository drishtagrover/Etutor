import React from 'react'
import Navbar from './components/Navbar'
import NavbarBanner from './components/NavbarBanner'
import Hero from './components/Hero/Hero'
import NumberCounter from './components/NumberCounter/NumberCounter'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div className='overflow-x-hidden h-screen'>
  <Navbar />
  <NavbarBanner />
  <Hero />
  <NumberCounter />
  <WhyChooseUs />
  <Testimonial />
  <Footer />
  </div>)
}

export default App
