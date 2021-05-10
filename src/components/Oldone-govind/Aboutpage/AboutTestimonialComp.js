import React from "react"
import { SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/themes/splide-default.min.css"

const AboutTestimonialComp = props => {
  return (
    <>
      <SplideSlide>
        <div className="carsoul-div">
          <h1 className="text-lg">{props.dd.text}</h1>
          <p className="carsoul-author">{props.dd.author}</p>
          <p className="carsoul-founder ">{props.dd.founder}</p>
        </div>
      </SplideSlide>
    </>
  )
}

export default AboutTestimonialComp
