import React from "react"
import {
  HeartIcon,
  ShareIcon,
  ShoppingCartIcon,
  StarIcon,
} from "@heroicons/react/solid"

const MenuItemComponent = props => {
  return (
    <>
      <div className=" shadow-2xl ">
        <div className="menuitem-div">
          <img src={props.currEle.img} className="rounded-t-lg" />
          <h1 className="menuitem-header">{props.currEle.title}</h1>
          <div className="flex ml-16 text-yellow-400 mt-3">
            <StarIcon className="h-5" />
            <StarIcon className="h-5" />
            <StarIcon className="h-5" />
            <StarIcon className="h-5" />
            <StarIcon className="h-5" />
          </div>
          <div class="divide-y divide-gary-400 mr-10 ">
            <div>
              <p className="menuitem-price ">{props.currEle.price}</p>
            </div>
            <div className="flex space-x-6 ml-16 py-5">
              <ShoppingCartIcon className="h-5" />
              <ShareIcon className="h-5" />
              <HeartIcon className="h-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MenuItemComponent
