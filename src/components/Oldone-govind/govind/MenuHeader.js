import React from "react"
import BG from "../../../images/4.jpg"
import "tailwindcss/tailwind.css"

const MenuHeader = () => {
  const Hdata = {
    title: "TASTY AND CRUNCHY",
    header: "RESTURANTS",
    content:
      "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition ulla mco laboris nisi aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.",
    button: "View Our Menu",
  }
  return (
    <main>
      <div className="div-body ">
        <img className="header-img" src={BG} />
        <div className="header-img-overlay"> </div>
        <div className=" relative">
          <p className="text-white text-sm ">{Hdata.title}</p>
          <h1 className="header-title">{Hdata.header}</h1>
          <p className="header-content">{Hdata.content}</p>
          <button className="menu-header-btn">{Hdata.button}</button>
        </div>
      </div>
    </main>
  )
}

export default MenuHeader
