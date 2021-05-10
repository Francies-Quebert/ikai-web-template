import React from "react"
import "tailwindcss/tailwind.css"
import ContactForm from "../components/Oldone-govind/Contactpage/ContactForm"
import Subscribe from "../components/Oldone-govind/Contactpage/Subscribe"
import TrackOrder from "../components/Oldone-govind/Contactpage/TrackOrder"
import Footer from "../components/Oldone-govind/FooterPage/Footer"

const contact = () => {
  return (
    <>
      <ContactForm />
      <TrackOrder />
      <Subscribe />
      <Footer />
    </>
  )
}

export default contact
