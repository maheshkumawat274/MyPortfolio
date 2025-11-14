
import AboutSection from '../components/about/AboutSection'
import Contact from '../components/contact/Contact'
import ExperienceSection from '../components/experience/Exp'
import WhatWeDo from '../components/experience/Whatwedo'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import HeroSection from '../components/home/HeroSection'
import Portfolio from '../components/portfolio/Portfolio'
import AnimatedGalaxySection from '../components/ui/AnimatedGlaxy'

const MainUi = () => {
  return (
    <>
     <div>
      <Header/>
      <div className='mt-18 md:mt-24'>
        <HeroSection/>
        <AboutSection/>
        <AnimatedGalaxySection/>
        <ExperienceSection/>
        <WhatWeDo/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </div>
     </div>
    </>
  )
}

export default MainUi