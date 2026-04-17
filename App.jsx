import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      
    </>
  )
}

export default App
