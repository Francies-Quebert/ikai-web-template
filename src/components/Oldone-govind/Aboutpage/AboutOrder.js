import React from "react"
import MENUORDER from "../../../images/about_order.png"

const AboutOrder = () => {
  const Ordata = {
    text: "WE GUARANTEE",
    title: "  30 MINUTES DELIVERY!",
    content:
      " you’re having a meeting, working late at night and need an extra push. Let us know and we will be there",
    button: " Order Now",
    img: MENUORDER,
  }

  const countData = [
    { count: 138, text: "Menu Items" },
    { count: "300 +", text: "Visitors Everyday" },
    { count: "15 +", text: "Year Of Experience" },
    { count: "100 %", text: "Taste & Fun" },
  ]
  return (
    <>
      <main className=" main-body">
        <div className=" mt-12 py-5">
          <p className="main-text">{Ordata.text}</p>
          <h1 className="main-title">{Ordata.title}</h1>
          <p classNames="main-content">{Ordata.content}</p>
          <button className="main-button">{Ordata.button}</button>
        </div>
        <div>
          <img src={Ordata.img} className=" h-full w-full" />
        </div>
      </main>

      <div className="counter-div">
        <div className=" counter-body">
          {countData.map((currE, indx) => {
            return (
              <div indx={indx}>
                <h1 className="counter-title">{currE.count}</h1>
                <p className="text-red-200">{currE.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default AboutOrder
