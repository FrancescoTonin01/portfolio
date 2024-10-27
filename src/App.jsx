import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import WorkExperience from './sections/Experience'
import Footer from './sections/Footer'
const App = () => {
  return (
    <main className="max-w-7xl mx-auto w-full">
      <h1 className="text-2xl text-white underline"><Navbar/></h1>
      <Hero/>
      <About/>
      <Projects/>
      <WorkExperience/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App