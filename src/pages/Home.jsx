import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import Projects from '../components/Projects'
import ContactSection from '../components/ContactSection'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        {/* theme toggle */}
        <ThemeToggle />
        {/* background effects */}
        <StarBackground />

        {/* navbar */}
        <Navbar />
        {/* main content */}
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <Projects />
          <ContactSection />
        </main>
        {/* footer */}
    </div>
  )
}

export default Home