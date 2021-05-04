import React from "react"
import PLX from "../../images/4.jpg"
import "tailwindcss/tailwind.css"

const MenuHeader = () => {
  return (
    <main>
      <div className=" bg-fixed text-center overflow-hidden relative py-72 px-10">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={PLX}
          alt=""
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-30 "> </div>
        <div className=" w-full items-center justify-center relative">
          <p className="text-white font-mono text-sm  ">TASTY AND CRUNCHY</p>
          <h1 className="text-7xl space-x-0 font-extrabold tracking-widest text-white mt-5">
            RESTURANTS
          </h1>
          <p className="text-white mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm
            reminusto doeiusmod tempor incidition ulla mco laboris nisi ut
            aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.
          </p>
          <button className="bg-white text-sm uppercase font-sans hover:bg-gray-800 hover:text-white font-semibold outline-none p-3 mt-7">
            View Our Menu
          </button>
        </div>
      </div>
    </main>
  )
}

export default MenuHeader
