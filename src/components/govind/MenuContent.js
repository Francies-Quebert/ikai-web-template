import React from "react"
import STORY1 from "../../images/story1.jpg"
import STORY2 from "../../images/story2.jpg"

const MenuContent = () => {
  const data = [{ img: STORY1 }, { img: STORY2 }]
  return (
    <>
      <div className="text-center  px-20 mt-20">
        <p className=" font-mono text-sm">TASTY AND CRUNCHY</p>
        <h1 className="text-4xl font-bold tracking-widest mt-5">OUR STORY</h1>
        <p className="font-sans px-10 mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm
          reminusto doeiusmod tempor incidition ulla mco laboris nisi ut aliquip
          ex ea commo condorico consectetur adipiscing elitut aliquip.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 md:gap-8 px-10 mt-10">
          {data.map((curEle, key) => {
            return (
              <div key={key}>
                <img src={curEle.img} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default MenuContent
