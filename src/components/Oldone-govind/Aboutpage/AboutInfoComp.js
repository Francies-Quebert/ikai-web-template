import React from "react"
import { CheckCircleIcon } from "@heroicons/react/solid"

const AboutInfoComp = props => {
  return (
    <>
      <div className="info-div">
        <h1 className="info-title ">{props.Infodata.title}</h1>
        <p className="mt-10">{props.Infodata.text1}</p>
        <p className="mt-5">{props.Infodata.text2}</p>

        <p className="info-icon ">
          <CheckCircleIcon className="info-icons " />
          {props.Infodata.info1}
        </p>
        <p className="info-icon ">
          <CheckCircleIcon className="info-icons " />
          {props.Infodata.info2}
        </p>
        <p className="info-icon ">
          <CheckCircleIcon className="info-icons" />
          {props.Infodata.info3}
        </p>
        <p className="info-icon ">
          <CheckCircleIcon className="info-icons" />
          {props.Infodata.info4}
        </p>
      </div>
      <div>
        <img src={props.Infodata.img} alt="" className="h-full w-full" />
      </div>
    </>
  )
}

export default AboutInfoComp
