import React from "react"
import IMG from "../../../images/menu-items/pizza.jpg"
import IMG1 from "../../../images/menu-items/salads.png"
import IMG2 from "../../../images/menu-items/desserts.png"
import IMG3 from "../../../images/menu-items/ornament.png"
// import { url } from "../../../../data/config"

const NewMenu = () => {
  const itemtypes = [
    { id: 1, name: "pizzas", img: IMG },
    { id: 2, name: "salads", img: IMG1 },
    { id: 3, name: "deserts", img: IMG2 },
  ]
  const itemsdetails = [
    {
      id: 1,
      name: "ITALIAN PIZZA",
      deatils: " Mozorella, Pomodoro",
      mrp: "14.40",
    },
    {
      id: 2,
      name: "JABUGO HAM",
      deatils: "Jabugo ham, eggs, cheese & Red Pepper",
      mrp: "20.50",
    },
    {
      id: 3,
      name: "CESAR",
      deatils: "Cesar sauce, Toasts, cheese & Chicken",
      mrp: "9.99",
    },
    {
      id: 4,
      name: "PIZZA BBQ",
      deatils: "Onion, Bacon, BBQ sauce & Cheese",
      mrp: "7.99",
    },
    {
      id: 5,
      name: "PIZZA SWISS",
      deatils: "Different swiss cheeses and Secret sauce",
      mrp: "17.99",
    },
  ]
  return (
    <>
      {itemtypes.map(aa => {
        return (
          <div className="pb-24">
            <>
              <div className="grid px-10 relative">
                <div
                  className="md:mt-5 lg:mt-5 ml-5 text-6xl font-light text-center uppercase pt-5 block font-sans"
                  style={{ color: "#773f23" }}
                >
                  {aa.name}
                </div>
                <div
                  className="block mt-4 text-3xl text-center"
                  style={{ color: "#87A537" }}
                >
                  Exclusive and delicious {aa.name}
                </div>
                <img
                  className="block mt-0 mb-12 mx-auto max-w-full"
                  src={aa.img}
                />
              </div>
              <div className="grid grid-cols-1  md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-3">
                <div className="px-8 relative">
                  {itemsdetails.map(xx => {
                    return (
                      <>
                        <div className="mt-10"></div>
                        <ul>
                          <li className="uppercase mb-5 font-bold md:text-xl lg:text-base">
                            {xx.name}
                            <div
                              className="block md:text-sm lg:text-xs text-xs font-normal"
                              style={{ color: "#484745" }}
                            >
                              {xx.deatils}
                              <span
                                className="text-xs float-right font-medium text-left"
                                style={{ color: "#C02530" }}
                              >
                                ₹{xx.mrp}
                              </span>
                            </div>
                          </li>
                        </ul>
                      </>
                    )
                  })}
                </div>
                <div className="px-8 relative">
                  {itemsdetails.map(xx => {
                    return (
                      <>
                        <div className="mt-10"></div>
                        <ul>
                          <li className="uppercase mb-5 font-bold md:text-xl lg:text-base">
                            {xx.name}
                            <div
                              className="block md:text-sm lg:text-xs text-xs font-normal"
                              style={{ color: "#484745" }}
                            >
                              {xx.deatils}
                              <span
                                className="text-xs float-right font-medium text-left"
                                style={{ color: "#C02530" }}
                              >
                                ₹{xx.mrp}
                              </span>
                            </div>
                          </li>
                        </ul>
                      </>
                    )
                  })}
                </div>
                <div className="px-8 relative">
                  {itemsdetails.map(xx => {
                    return (
                      <>
                        <div className="mt-10"></div>
                        <ul>
                          <li className="uppercase mb-5 font-bold md:text-xl lg:text-base">
                            {xx.name}
                            <div
                              className="block md:text-sm lg:text-xs font-normal text-xs"
                              style={{ color: "#484745" }}
                            >
                              {xx.deatils}
                              <span
                                className="text-xs float-right font-medium text-left"
                                style={{ color: "#C02530" }}
                              >
                                ₹{xx.mrp}
                              </span>
                            </div>
                          </li>
                        </ul>
                      </>
                    )
                  })}
                </div>
              </div>
            </>
          </div>
        )
      })}
      <div className="px-8 relative">
        <div className="block w-32 h-10 bg-no-repeat mx-auto" style={{backgroundImage: IMG3, color: "white"}}></div>
      </div>
    </>
  )
}

export default NewMenu
