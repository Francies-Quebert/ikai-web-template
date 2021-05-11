import React from "react"
import Header from "../components/New-govind/Homepage/Header"
import About from "../components/New-govind/Homepage/About"
import Menu from "../components/New-govind/Homepage/Menu"
import OpeningHour from "../components/New-govind/Homepage/OpeningHour"
import TrackOrd from "../components/New-govind/Homepage/TrackOrd"
import Footer from "../components/New-govind/Homepage/Footer"

const newGovind = () => {
  return (
    <>
      <Header />
      <About />
      <OpeningHour />
     <TrackOrd />
      <Menu /> 
      <Footer />
    </>
  )
}

export default newGovind
