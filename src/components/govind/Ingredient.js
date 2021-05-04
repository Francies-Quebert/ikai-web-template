import React from "react"
import Ingred from "../../images/ingred.jpg"
import PLX from "../../images/paralleex.jpg"

const Ingredient = () => {
  return (
    <>
      <div className="bg-gray-200 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8 px-10 mt-10 py-10">
        <div>
          <p className=" font-mono text-sm">TASTY AND CRUNCHY</p>
          <h1 className="text-4xl font-bold tracking-widest mt-5">INGREDIENTS</h1>
          <p className="font-sans  mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incidition ullamco laboris nisi ut aliquip ex ea
            commodo condor consectetur adipiscing elit, sed do eiusmod tempor
            incidition ullam.
          </p>
          <button className="bg-white  uppercase font-mono text-sm hover:bg-gray-800 hover:text-white font-semibold outline-none p-3 mt-7">
            View Our Menu
          </button>
        </div>
        <div>
          <img src={Ingred} alt="" />
        </div>
      </div>

      <div className="w-full h-96 shadow-2xl overflow-hidden relative">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={PLX}
          alt=""
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-30"> </div>
        <div className="flex w-full items-center justify-center relative">
          <h1 className="text-xl text-white  tracking-wider px-10  text-center mt-36">
            Desire is the key to motivation, but it's determination and
            commitment to an unrelenting pursuit of your goal a commitment to
            excellence that will enable you to attain the success you seek.
          </h1>
          
        </div>
      </div>
    </>
  )
}

export default Ingredient
