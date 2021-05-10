import React from "react"
import Img1 from "../../images/pd1.png"
import Image from "../../images/mt1.png"
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/solid"

const MenuCard = props => {
  return (
    <>
      <section className="p-5">
        <div className="w-56 border p-5 rounded-lg  text-center relative bg-white  hover:shadow-2xl transition duration-300">
          <div className="flex justify-center">
            <img src={Img1} className=" " />
          </div>
          <div className="">
            <h5
              className="py-3 text-2xl font-bold"
              style={{ color: "#2a435d " }}
            >
              Vegetable Pizza
            </h5>
            <p className="text-sm " style={{ color: "#2a435d" }}>
              It is a long established fact that a reader BBQ food Chicken.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default MenuCard
