import React from "react"
import STORY1 from "../../images/story1.jpg"
import STORY2 from "../../images/story2.jpg"

const MenuContent = () => {
  const SData = {
    title: "TASTY AND CRUNCHY",
    header: "OUR STORY",
    content:
      "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition ulla mco laboris nisi aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.",
  }

  const data = [{ img: STORY1 }, { img: STORY2 }]
  return (
    <>
      <div className="text-center  px-20 mt-20">
        <p className=" font-mono text-sm">{SData.title}</p>
        <h1 className="content-header">{SData.header}</h1>
        <p className="font-sans px-10 mt-10">{SData.content}</p>

        <div className="content-img">
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
