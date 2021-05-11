import React from "react"

const MenuComponent = props => {
  return (
    <>
      <div className=" px-5 ">
        <h1 className="menu-categories">{props.curr.categories}</h1>
        <p className="text-lg font-bold">{props.curr.title1}</p>
        <p className=" menu-prices">
          {props.curr.text1}
          <p className="text-red-600">{props.curr.price1}</p>
        </p>

        <p className="menu-titles">{props.curr.title2}</p>
        <p className=" menu-prices">
          {props.curr.text2}
          <p className="text-red-600">{props.curr.price2}</p>
        </p>
        <p className="menu-titles">{props.curr.title3}</p>
        <p className=" menu-prices">
          {props.curr.text3}
          <p className="text-red-600">{props.curr.price3}</p>
        </p>
        <p className="menu-titles">{props.curr.title4}</p>
        <p className=" menu-prices">
          {props.curr.text4}
          <p className="text-red-600">{props.curr.price4}</p>
        </p>
        <p className="menu-titles">{props.curr.title5}</p>
        <p className=" menu-prices">
          {props.curr.text5}
          <p className="text-red-600">{props.curr.price5}</p>
        </p>
      </div>
    </>
  )
}

export default MenuComponent
