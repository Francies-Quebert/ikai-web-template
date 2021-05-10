import React, { useState } from "react"
import IMG1 from "../../images/menu-items/img-1.jpg"
import IMG2 from "../../images/menu-items/img-2.jpg"
import IMG3 from "../../images/menu-items/img-3.jpg"
import IMG4 from "../../images/menu-items/img-4.jpg"
import IMG5 from "../../images/menu-items/img-5.jpg"
import IMG6 from "../../images/menu-items/img-6.jpg"
import MenuItemCard from "./MenuItemCard"
import NewMenu from "../NewMenu/NewMenu"

const MenuItem = () => {
  const [modal, setModal] = useState(false)
  const data = [
    {
      id: 1,
      img: IMG1,
      name: "Fragrant Chicken Curry",
      desc: "with Zesty Rice",
      time: "30min",
      detail: "High protien",
    },
    {
      id: 2,
      img: IMG2,
      name: "Sausages and Mash",
      desc: "with Spring Onion",
      time: "30min",
      detail: "High protien",
    },
    {
      id: 3,
      img: IMG3,
      name: "Penne Ragu Alforno",
      desc: "with Sweet Potato Mash ",
      time: "30min",
      detail: "High protien",
    },
    {
      id: 4,
      img: IMG4,
      name: "Bacon & Butternut",
      desc: "with Peppers, Green Beans ",
      time: "30min",
      detail: "High protien",
    },
    {
      id: 5,
      img: IMG5,
      name: "Hot Smoked Salmon",
      desc: "with Garlicky Green Beans",
      time: "30min",
      detail: "High protien",
    },
    {
      id: 6,
      img: IMG6,
      name: "Speedy Creamy Pasta",
      desc: "with Spinach",
      time: "45 min",
      detail: "High protien",
    },
  ]
  return (
    <>
      <div className="mx-20 py-12 ">
        <div className="grid gap-3 sm:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3l">
          {data.map(xx => (
            <>
              <div className="flex-wrap flex-row flex flex-1">
                <div className="px-4 flex-1 ">
                  <div className="mb-6">
                    <div className="cursor-pointer">
                      <div
                        className="bg-white"
                        style={{ boxShadow: "0 1px 3px 0 rgb(0,0,0/10%)" }}
                      >
                        <div
                          className="bg-white block relative overflow-hidden h-0"
                          style={{ paddingBottom: "56.25%" }}
                        >
                          <img src={xx.img} className="w-full" />
                        </div>
                        <div className="p-2 items-start justify-start relative flex-col flex">
                          <div className="flex w-full sm:text-sm">
                            <a id="mybtn">
                              <h4 className="my-1 text-base overflow-hidden font-normal whitespace-nowrap overflow-ellipsis">
                                {xx.name}
                              </h4>
                            </a>
                          </div>
                          <div className="text-xs overflow-hidden font-normal whitespace-nowrap overflow-ellipsis w-full">
                            {xx.desc}
                          </div>
                          <div className="mt-8 min-h-0.5 items-center w-full flex ">
                            <span
                              className="pr-2.5 text-xs font-semibold"
                              style={{ borderRight: "1px solid #e4e4e4" }}
                            >
                              {xx.time}
                            </span>
                            <span className="px-2 flex-auto overflow-hidden font-normal whitespace-nowrap overflow-ellipsis text-xs">
                              {xx.detail}
                            </span>
                          </div>
                          <button
                            onClick={() => {
                              setModal(true)
                            }}
                          >
                            Open
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div id="card">
        <MenuItemCard
          showModal={modal}
          onClose={() => {
            setModal(false)
          }}
        />
      </div>
      <NewMenu/>
    </>
  )
}

export default MenuItem
