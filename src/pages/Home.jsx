import React from 'react'
import Background from '../components/Background'
import  Navbar  from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Skill from '../components/Skill'
import Projects from '../components/Projects'
import { Contact } from 'lucide-react'
import ContactDetails from '../components/ContactDetails'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='md:min-h-screen md:min-w-screen w-[100%] h-[100%]'>
      {/* toggle menu */}
    
      {/*background effect */}
      <Background/>
      {/*navbar */}
      <Navbar/>
      {/*main*/}
      <main >
        <HeroSection/>
        <About/>
        <Skill/>
        <Projects/>
        <ContactDetails/>
        <Footer/>
      </main>
    </div>
  )
}

export default Home
