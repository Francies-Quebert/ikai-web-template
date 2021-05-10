import React from "react"
import { Splide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/themes/splide-default.min.css"
import ABIMG1 from "../../../images/abbgimg.jpg"
import AboutTestimonialComp from "./AboutTestimonialComp"

const AboutTestimonial = () => {
  const TestimData = {
    img: ABIMG1,
    title: " Testimonials",
    content: "   WHAT THE PRESS SAYS",
  }
  const sldData = [
    {
      text: `" Desire is the key to motivation, but it's determination and
        commitment to an unrelenting pursuit of your goal a commitment
        to excellence that will enable you to attain the success you
        seek."`,
      author: "Francies Qubert",
      founder: "Co-founder Amzon",
    },
    {
      text: `" Desire is the key to motivation, but it's determination and
        commitment to an unrelenting pursuit of your goal a commitment
        to excellence that will enable you to attain the success you
        seek."`,
      author: "Atul More",
      founder: "Co-founder Amzon",
    },
    {
      text: `" Desire is the key to motivation, but it's determination and
        commitment to an unrelenting pursuit of your goal a commitment
        to excellence that will enable you to attain the success you
        seek."`,
      author: "Saurav pawar",
      founder: "Co-founder Amzon",
    },
  ]
  return (
    <div className="carsoul-body ">
      <img className="carsoul-img" src={TestimData.img} />
      <p className="carsoul-title">{TestimData.title}</p>
      <h1 className="carsoul-content">{TestimData.content}</h1>
      <div className="carsoul-ovrlay-img"> </div>

      <Splide options={{ rewind: true }}>
        {sldData.map(dd => {
          return <AboutTestimonialComp dd={dd} />
        })}
      </Splide>
    </div>
  )
}

export default AboutTestimonial
