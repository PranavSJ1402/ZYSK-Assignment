import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import SocialProof from './Components/SocialProof'
import Features from './Components/Features'
import Testimonials from './Components/Testimonials'
import CTA from './Components/CTA'
import Footer from './Components/Footer'
import FAQ from './Components/FAQ'
import Blog from './Components/Blog'
const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <SocialProof/>
      <Features/>
      <Testimonials/>
      <FAQ/>
      <Blog/>
      <CTA/>
      <Footer/>
    </>
  )
}

export default App