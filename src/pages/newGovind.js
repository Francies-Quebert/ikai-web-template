import React, { useState, useEffect } from "react"
import Header from "../components/New-govind/Homepage/Header"
import About from "../components/New-govind/Homepage/About"
import Menu from "../components/New-govind/Homepage/Menu"
import OpeningHour from "../components/New-govind/Homepage/OpeningHour"
import TrackOrd from "../components/New-govind/Homepage/TrackOrd"
import Footer from "../components/New-govind/Homepage/Footer"
import Navbar from "../components/New-govind/Homepage/Navbar"
import NavDropDown from "../components/New-govind/Homepage/NavDropDown"

const NewGovind = () => {
  //USESTATE
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  //USEEFFECT
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
        console.log("i resizeddd")
      }
    }
    window.addEventListener("resize", hideMenu)
    return () => {
      window.removeEventListener("resize", hideMenu)
    }
  })
  
  return (
    <>
      <Navbar toggle={toggle} />
      <NavDropDown isOpen={isOpen} toggle={toggle} />
      <Header />
      <About />
      <OpeningHour />
      <TrackOrd />
      <Menu />
      <Footer />
    </>
  )
}

export default NewGovind
