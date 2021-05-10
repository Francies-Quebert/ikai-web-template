import React from "react"
import MENUBG from "../../../images/opening_hours.jpg"

const OpeningHour = () => {
  const opHData = {
    header: " OPENING HOURS",
    text: " Call For Reservations",
    day1: " Sunday to Tuesday",
    day2: "Friday and Saturday",
    time1: "09:00 24:00",
    time2: "08:00 03:00",
    content: " RESERVATION NUMBER: 0842-5484214",
  }
  return (
    <>
      <div className="oph-body ">
        <img src={MENUBG} className="oph-img" />
        <h1 className="oph-header">{opHData.header}</h1>
        <p className="oph-text ">{opHData.text}</p>

        <div className="oph-div">
          <div>
            <h1 className="oph-day1 ">{opHData.day1}</h1>
            <p className="oph-day2">{opHData.time1}</p>
          </div>
          <div>
            <h1 className="oph-day1">{opHData.day2}</h1>
            <p className="oph-day2">{opHData.time2}</p>
          </div>
        </div>
        <p className="oph-content ">{opHData.content}</p>
      </div>
    </>
  )
}

export default OpeningHour
