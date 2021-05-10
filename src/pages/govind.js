import React from "react"
import Ingredient from "../components/Oldone-govind/govind/Ingredient"
import MenuContent from "../components/Oldone-govind/govind/MenuContent"
import MenuHeader from "../components/Oldone-govind/govind/MenuHeader"
import MenuReceipe from "../components/Oldone-govind/govind/MenuReceipe"
import "tailwindcss/tailwind.css"
import MenusItem from "../components/Oldone-govind/govind/MenusItem"
import NewMenuItem from "../components/Oldone-govind/govind/NewMenuItem"
import Footer from "../components/Oldone-govind/FooterPage/Footer"

const govind = () => {
  return (
    <>
      <MenuHeader />
      <MenuContent />
      <Ingredient />
      <NewMenuItem />
      <MenusItem />
      <MenuReceipe />
      <Footer />
    </>
  )
}

export default govind
