import React from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/themes/splide-default.min.css"
import Ingred from "../../../images/ingred.jpg"
import PLX from "../../../images/paralleex.jpg"

const Ingredient = () => {
  const IntegData = {
    title: "TASTY AND CRUNCHY",
    header: "INGREDIENTS",
    content:
      "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition ulla mco laboris nisi aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.",
    button: "View Our Menu",
  }

  const sldData = [
    {
      text: `" Desire is the key to motivation, but it's determination and
    commitment to an unrelenting pursuit of your goal a commitment
    to excellence that will enable you to attain the success you
    seek."`,
      author: "adam nilson",
    },
    {
      text: `" Desire is the key to motivation, but it's determination and
    commitment to an unrelenting pursuit of your goal a commitment
    to excellence that will enable you to attain the success you
    seek."`,
      author: "adam nilson1",
    },
    {
      text: `" Desire is the key to motivation, but it's determination and
    commitment to an unrelenting pursuit of your goal a commitment
    to excellence that will enable you to attain the success you
    seek."`,
      author: "adam nilson2",
    },
  ]

  return (
    <>
      <div className="ingred-body">
        <div>
          <p className=" font-mono text-sm">{IntegData.title}</p>
          <h1 className="ingred-header">{IntegData.header}</h1>
          <p className="font-sans  mt-10">{IntegData.content}</p>
          <button className="ingred-btn">{IntegData.button}</button>
        </div>
        <div>
          <img src={Ingred} alt="" />
        </div>
      </div>

      <div className="Testi-body ">
        <img className="Testi-img" src={PLX} alt="" />
        <h1 className="Testi-header">Testimonials</h1>
        <div className="img-overlay"> </div>

        <Splide options={{ rewind: true }}>
          {sldData.map(dd => {
            return (
              <SplideSlide>
                <div className="slider-body">
                  <h1 className="text-lg">{dd.text}</h1>
                  <p className="slider-content">{dd.author}</p>
                </div>
              </SplideSlide>
            )
          })}
        </Splide>
      </div>
    </>
  )
}

export default Ingredient
