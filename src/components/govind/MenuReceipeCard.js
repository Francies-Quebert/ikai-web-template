import React from "react"
import { Link } from "gatsby"

const MenuReceipeCard = props => {
  return (
    <div key={props.key} className=" rounded-lg shadow-2xl bg-white  ">
      <img className="w-full rounded-t-lg " src={props.curElem.img} />

      <p className="  text-mono text-sm text-gray-600 ">{props.curElem.day}</p>

      <h1 className=" text-xl font-semibold text-gray-900 mt-3 px-8 ">
        {props.curElem.title}
      </h1>
      <p className="text-gray-500 mt-4 px-8">{props.curElem.content}</p>
      <Link className="text-sm hover:text-gray-500 mt-4 px-8 py-5" to="#">
        {props.curElem.comment}
      </Link>
    </div>
  )
}

export default MenuReceipeCard
