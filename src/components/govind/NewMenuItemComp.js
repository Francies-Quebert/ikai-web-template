import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/solid"
import React from "react"

const NewMenuItemComp = props => {
  return (
    <div className="new-menu-div">
      <div className="flex space-x-36 mt-5 px-5 ">
        <img src={props.curE.png} className="bg-white h-5 " />
        <HeartIcon className="h-5 text-red-500" />
      </div>
      <img src={props.curE.img} className="ml-7 mb-1 w-50 " />
      <h1 className="new-menu-title ">{props.curE.title}</h1>
      <p className="text-sm p-2">{props.curE.info}</p>
      <div className="icon-div">
        <p className="font-bold text-lg">{props.curE.price}</p>
        <ShoppingCartIcon className=" shopicon" />
      </div>
    </div>
  )
}

export default NewMenuItemComp
