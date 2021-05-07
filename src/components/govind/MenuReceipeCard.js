import React from "react"

const MenuReceipeCard = props => {
  return (
    <div className="cards-div">
      <img className="w-full rounded-t-lg " src={props.curElem.img} />
      <p className="cards-content1">{props.curElem.day}</p>
      <h1 className="cards-header ">{props.curElem.title}</h1>
      <p className="cards-content2">{props.curElem.content}</p>
      <p className="cards-content3">
        {props.curElem.comment}
      </p>
    </div>
  )
}

export default MenuReceipeCard
