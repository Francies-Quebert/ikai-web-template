import React from "react"

import MENU1 from "../../images/blog1.jpg"
import MENU2 from "../../images/blog2.jpg"
import MENU3 from "../../images/blog3.jpg"

import BestSellerCom from "./BestSellerCom"

const BestSeller = () => {
  const MICardData = [
    { img: MENU1, title: "Piza", price: "$16.00" },
    { img: MENU2, title: "Piza", price: "$6.00" },
    { img: MENU3, title: "Piza", price: "$26.00" },
    { img: MENU1, title: "Piza", price: "$20.00" },
    // { img: MENU1, title: "Piza", price: "$10.00" },
    // { img: MENU2, title: "Piza", price: "$25.00" },
    // { img: MENU3, title: "Piza", price: "$43.00" },
    // { img: MENU1, title: "Piza", price: "$34.00" },
    // { img: MENU1, title: "Piza", price: "$34.00" },
  ]

  return (
    <>
      {/* <!-- content goes here --> */}
      <div className="flex ">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3 md:gap-8 lg:grid-cols-3 text-center  mt-10 py-5 px-10">
          {MICardData.map((currEle, key) => {
            return <BestSellerCom currEle={currEle} key={key} />
          })}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 md:grid-cols-2 mt-16 ml-auto  px-10">
          <h1>
            {MICardData.map((currEle, key) => {
              return <BestSellerCom currEle={currEle} key={key} />
            })}
          </h1>
        </div>
      </div>
    </>
  )
}

export default BestSeller
