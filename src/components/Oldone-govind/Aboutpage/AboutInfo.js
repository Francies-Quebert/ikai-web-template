import React from "react"
import ABIMAG1 from "../../../images/about1.png"
import AboutInfoComp from "./AboutInfoComp"

const AboutInfo = () => {
  const Infodata = {
    title: "OUR PROMISE",
    text1: `"  Consistent. Convenient. Cost-effective. You never have to wonder what
  to expect from Piizalian products because we work hard to make sure
  they perform to very high standards – and taste delicious – order
  after order after order." `,
    text2: `" We manufacture with precision, and that means you get consistent
  product size, weight and performance every time We operate in
  accordance with strict food safety guidelines to ensure a quality
  product."`,
    info1: " Our facilities a regularly audited against Global Food Safety",
    info2: " We employ the Hazard Analysis and Critical Control Points",
    info3: " We audit and test each shift on a daily basis",
    info4: "Ingredients are tested for purity before use",
    img: ABIMAG1,
  }
  return (
    <div className="info-body">
      <AboutInfoComp Infodata={Infodata}/>
    </div>
  )
}

export default AboutInfo
