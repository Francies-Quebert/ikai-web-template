import React from "react"

const CategoryComponent = props => {
  return (
    <>
      <div  className="category-div ">
        <img src={props.currE.img} className="category-img" />
        <div className=" category-div1 ">
          <h1 className=" category-title ">{props.currE.title}</h1>
        </div>
      </div>
    </>
  )
}

export default CategoryComponent
