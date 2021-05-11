import React from "react"
import BG from "../../../images/H_bg.jpg"
import HBG from "../../../images/logo_intro_red.png"
import HBG1 from "../../../images/slide-separator.png"
import "tailwindcss/tailwind.css"

const Header = () => {
  const Hdata = {
    title: "FRESH & TASTY ",
    header: "WELCOME TO RESTURANTS",
    content: "  The Chef creates divine combinations",
  }
  return (
    <main>
      <div className="hdr-body ">
        <img className="hdr-img" src={BG} />
        <div className="hdr-img-overlay"> </div>
        <img src={HBG} className=" mx-auto relative " />
        <div className=" relative">
          {/* <p className="hdr-title">{Hdata.title}</p> */}
          <h1 className="hdr-header">{Hdata.header}</h1>
          <img src={HBG1} className=" hdr-img-separator " />
          <p className="hdr-content">{Hdata.content}</p>
        </div>
      </div>
    </main>
  )
}

export default Header
