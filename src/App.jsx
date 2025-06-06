import React from 'react'
import { Navbar } from './components/Navbar'
import { Intro } from './components/Intro'
import Marquees from './components/Marquees'
import Products from './components/Products'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { AllProjects } from './pages/AllProjects'
import { Education } from './components/Education'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  return (

    <div className='w-full font-["satoshi_variable"]  relative z-100 overflow-x-hidden'>
      <Navbar />
      <section id='home'>
        <Intro />
      </section>

      <section id='projects'>
        <Products />
      </section>
      <section id='skills'>
        <Skills />
      </section>

      <Marquees />
      <section id='education'>
        <Education />
      </section>
      <section id='contact'>
        <Contact />
      </section>
      <Footer />

    </div>


  )
}
const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/all-projects" element={<AllProjects />} />
      </Routes>
      <ToastContainer position="top-right" />
    </BrowserRouter>

  )

}

export default App
