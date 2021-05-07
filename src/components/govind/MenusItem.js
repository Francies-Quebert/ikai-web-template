import React from "react"
import MENU1 from "../../images/blog1.jpg"
import MENU2 from "../../images/blog2.jpg"
import MENU3 from "../../images/blog3.jpg"
import IMG1 from "../../images/pizza.jpg"
import IMG2 from "../../images/drinks.jpg"
import IMG3 from "../../images/burger.jpg"
import IMG4 from "../../images/chick.jpg"
import IMG5 from "../../images/sandwich.jpg"
import MenuItemComponent from "./MenuItemComponent"
import CategoryComponent from "./CategoryComponent"

const MenusItem = () => {
  const Hdata = {
    title: "TASTY AND CRUNCHY",
    header: "OUR MENU ITEMS",
    content:
      "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition ulla mco laboris nisi aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.",
  }
  const MICardData = [
    { img: MENU1, title: "Piza", price: "$16.00" },
    { img: MENU2, title: "Piza", price: "$6.00" },
    { img: MENU3, title: "Piza", price: "$26.00" },
    { img: MENU1, title: "Piza", price: "$20.00" },
    { img: MENU1, title: "Piza", price: "$10.00" },
    { img: MENU2, title: "Piza", price: "$25.00" },
    { img: MENU3, title: "Piza", price: "$43.00" },
    { img: MENU1, title: "Piza", price: "$34.00" },
  ]

  const CateData = [
    { img: IMG1, title: "Pizza" },
    { img: IMG2, title: "Drinks" },
    { img: IMG3, title: "Burger" },
    { img: IMG4, title: "Chicken" },
    { img: IMG5, title: "SandWich" },
  ]
  return (
    <>
      {/* Menuitem */}
      <div className="text-center px-20 mt-20">
        <p className=" font-mono text-sm">{Hdata.title}</p>
        <h1 className="content-header">{Hdata.header}</h1>
        <p className="font-sans px-10 mt-10">{Hdata.content}</p>
      </div>

      <div className="menuitem-body">
        {MICardData.map((currEle, key) => {
          return <MenuItemComponent currEle={currEle} key={key} />
        })}
      </div>

      {/* Category */}
      <div>
        <h1 className="category-header ">categories</h1>
      </div>
      <div className="category-body">
        {CateData.map((currE, key) => {
          return <CategoryComponent currE={currE} key={key} />
        })}
      </div>
    </>
  )
}

export default MenusItem
