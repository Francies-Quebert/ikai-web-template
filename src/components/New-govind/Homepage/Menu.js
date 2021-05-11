import React from "react"
import LOGO from "../../../images/menu_logo.png"

import "tailwindcss/tailwind.css"
import { Link } from "gatsby"
import MenuComponent from "./MenuComponent"

const Header = () => {
  const MenuDta = [
    {
      categories: "GREAT PASTA",
      title1: "FILET",
      text1: "7 oz. Center Cut10 oz. Double cut",
      price1: "$14.49",
      title2: "SPECIAL FILET",
      text2: "10 oz Greg Norman Ranch",
      price2: "$9.49",
      title3: "NEW YORK STRIP",
      text3: "9 oz. Center Cut12 oz. Double cut oz",
      price3: "$5.49",
      title4: "PORTERHOUSE",
      text4: "7 oz. Center Cut10 oz.",
      price4: "$10.49",
      title5: "DELMONICO",
      text5: "10 oz Greg Norman Ranch",
      price5: "$12.49",
    },
    {
      categories: "OUR PIZZAS",
      title1: "FILET",
      text1: "7 oz. Center Cut10 oz. Double cut",
      price1: "$14.49",
      title2: "SPECIAL FILET",
      text2: "10 oz Greg Norman Ranch",
      price2: "$9.49",
      title3: "NEW YORK STRIP",
      text3: "9 oz. Center Cut12 oz. Double cut oz",
      price3: "$5.49",
      title4: "PORTERHOUSE",
      text4: "7 oz. Center Cut10 oz.",
      price4: "$10.49",
      title5: "DELMONICO",
      text5: "10 oz Greg Norman Ranch",
      price5: "$12.49",
    },
    {
      categories: "DESSERTS",
      title1: "FILET",
      text1: "7 oz. Center Cut10 oz. Double cut",
      price1: "$14.49",
      title2: "SPECIAL FILET",
      text2: "10 oz Greg Norman Ranch",
      price2: "$9.49",
      title3: "NEW YORK STRIP",
      text3: "9 oz. Center Cut12 oz. Double cut oz",
      price3: "$5.49",
      title4: "PORTERHOUSE",
      text4: "7 oz. Center Cut10 oz.",
      price4: "$10.49",
      title5: "DELMONICO",
      text5: "10 oz Greg Norman Ranch",
      price5: "$12.49",
    },
  ]
  return (
    <>
      <div className="py-5">
        <img src={LOGO} className="mx-auto mt-5" />
        <div className="menu-divs">
          {MenuDta.map(curr => {
            return <MenuComponent curr={curr} />
          })}
        </div>

        <div className="flex justify-center ">
          <Link to="#" className=" menu-links ">
            View Complete Menu
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header
