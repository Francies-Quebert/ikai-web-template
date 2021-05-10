import React from "react"
import BG from "../../../images/H_bg.jpg"
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
        <div className=" relative">
          <p className="hdr-title">{Hdata.title}</p>
          <h1 className="hdr-title">{Hdata.header}</h1>
          <p className="hdr-content">{Hdata.content}</p>
        </div>
      </div>
    </main>
  )
}

export default Header
