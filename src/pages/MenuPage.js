import React from "react"
import Footer from "../components/MainComponents/Footer"
import Menu1Component from "../components/MainComponents/Menu1Component"
// import MenuMain from "../components/MainComponents/MenuMain"
import MenuMain from "../components/MainComponents/Menu2"
import NavBar from "../components/MainComponents/NavBar"

const MenuPage = () => {
  return (
    <>
      <NavBar />
      <MenuMain />
      <Footer />
    </>
  )
}

export default MenuPage
