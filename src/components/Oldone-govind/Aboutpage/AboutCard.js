import React from "react"
import { Link } from "gatsby"
import AIMG1 from "../../../images/about_img_4.jpg"
import AIMG2 from "../../../images/about_img_5.jpg"
import AIMG3 from "../../../images/about_img_6.jpg"

const AboutCard = () => {
  const abouCardsDta = [
    {
      img: AIMG1,
      name: "WILLIAM SMITH",
      info: "Everything We Pizza, We Pizza With Love. Designer Fastfood.",
      header: "CHEF",
    },
    {
      img: AIMG2,
      name: "JOHN DOE",
      info: "Everything We Pizza, We Pizza With Love. Designer Fastfood.",
      header: "MANAGER",
    },
    {
      img: AIMG3,
      name: "BRADD L.",
      info: "Everything We Pizza, We Pizza With Love. Designer Fastfood.",
      header: "CHEF",
    },
  ]
  return (
    <>
      <h1 className="about-card-header">OUR TALENTED CHEFS</h1>
      <div className="about-card-body ">
        {abouCardsDta.map(currE => {
          return (
            <div className=" about-card-div ">
              <img src={currE.img} className="rounded-t-lg" />
              <h1 className="font-bold">{currE.name}</h1>
              <p className="about-card-content">{currE.info}</p>
              <Link href="#" className="about-card-link">
                {currE.header}
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default AboutCard
