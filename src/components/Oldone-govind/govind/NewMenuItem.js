import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/solid"
import React from "react"
import SIGN from "../../../images/veg.png"
import MT1 from "../../../images/mt1.png"
import MT2 from "../../../images/mt2.png"
import MT3 from "../../../images/mt3.png"
import MT4 from "../../../images/mt4.png"
import NewMenuItemComp from "./NewMenuItemComp"

const NewMenuItem = () => {
  const Hdata = {
    title: "TASTY AND CRUNCHY",
    header: "OUR NEW-MENU ITEMS",
    content:
      "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition ulla mco laboris nisi aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.",
  }
  const MItemData = [
    {
      img: MT1,
      png: SIGN,
      title: "Burger Kingo",
      info: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives ",
      price: "$12",
    },
    {
      img: MT2,
      png: SIGN,
      title: "Chicken Sandwich",
      info: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives ",
      price: "$10",
    },
    {
      img: MT3,
      png: SIGN,
      title: "Pizza",
      info: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives ",
      price: "$44",
    },
    {
      img: MT4,
      png: SIGN,
      title: "French Fries",
      info: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives ",
      price: "$23",
    },
  ]
  return (
    <>
      <div className="text-center px-20 mt-20">
        <p className=" font-mono text-sm">{Hdata.title}</p>
        <h1 className="content-header">{Hdata.header}</h1>
        <p className="font-sans px-10 mt-10">{Hdata.content}</p>
      </div>

      <div className="new-menu-body">
        {MItemData.map(curE => {
          return <NewMenuItemComp curE={curE} />
        })}
      </div>
    </>
  )
}

export default NewMenuItem
