import React from "react"
import "tailwindcss/tailwind.css"
import AboutCard from "../components/Oldone-govind/Aboutpage/AboutCard"
import AboutInfo from "../components/Oldone-govind/Aboutpage/AboutInfo"
import AboutMenu from "../components/Oldone-govind/Aboutpage/AboutMenu"
import AboutOrder from "../components/Oldone-govind/Aboutpage/AboutOrder"
import AboutTestimonial from "../components/Oldone-govind/Aboutpage/AboutTestimonial"
import Footer from "../components/Oldone-govind/FooterPage/Footer"

const about = () => {
  return (
    <>
      <AboutMenu />
      <AboutInfo />
      <AboutTestimonial />
      <AboutCard />
      <AboutOrder />
    <Footer />
    </>
  )
}

export default about
