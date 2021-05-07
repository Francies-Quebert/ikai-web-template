import React from "react"
import Ingredient from "../components/govind/Ingredient"
import MenuContent from "../components/govind/MenuContent"
import MenuHeader from "../components/govind/MenuHeader"
import MenuReceipe from "../components/govind/MenuReceipe"
import "tailwindcss/tailwind.css"
import MenusItem from "../components/govind/MenusItem"
import NewMenuItem from "../components/govind/NewMenuItem"

const govind = () => {
  return (
    <>
      <MenuHeader />
      <MenuContent />
      <Ingredient />
      <NewMenuItem />
      <MenusItem />
      <MenuReceipe />
    </>
  )
}

export default govind
