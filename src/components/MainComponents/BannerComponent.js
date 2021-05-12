import React from "react"
import BG from "../../images/H_bg.jpg"
import HBG from "../../images/logo_intro_red.png"
import HBG1 from "../../images/slide-separator.png"

const BannerComponent = () => {
  const BannerData = {
    header: "WELCOME TO RESTURANTS",
    content: "  The Chef creates divine combinations",
  }
  return (
    <main>
      <div className="hdr-body">
        <img className="hdr-img" src={BG} />
        <div className="hdr-img-overlay"> </div>
        <img src={HBG} className=" mx-auto relative " />
        <div className=" relative">
          <h1 className="hdr-header">{BannerData.header}</h1>
          <img src={HBG1} className=" hdr-img-separator " />
          <p className="hdr-content">{BannerData.content}</p>
        </div>
      </div>
    </main>
  )
}

export default BannerComponent
