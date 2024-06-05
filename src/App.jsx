import { useRef, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import CursorFollower from './Components/CursorFollower'
import Testonomicals from './Components/Testonomicals'
import Services from './Components/Services'
import Cleints from './Components/Cleints'
import Portfolio from './Components/Portfolio'
// import Test from './Components/Test'
// import Steps from './Components/Steps'
import ServicesList from './Components/ServicesList'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Test from './Components/Test'
import Grow from './Components/Grow'

function App() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    {/* <Header/> */}
    <Navbar onClick={scrollToContact}/>
    <HeroSection/>
    {/* <CursorFollower/> */}
    <Testonomicals/>
    
    <ServicesList/>
    <Cleints/>
    <Services/>
    <Portfolio/>
    <Grow/>

    <Contact contactRef={contactRef}/>
    {/* <Steps/> */}
    {/* <Test/> */}
    <Footer/>
    </>
  )
}

export default App
