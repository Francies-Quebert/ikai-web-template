import React from "react"
import MENUBG from "../../../images/opening_hours.jpg"
import AB_DDR1 from "../../../images/dec1.png"
import AB_DDR2 from "../../../images/dec2.png"

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
      <div className="w-full h-full  shadow-2xl overflow-hidden relative px-10 p-10 ">
        <img
          src={MENUBG}
          className="absolute inset-0  w-full h-full object-cover mt-5"
        />
        <h1 className="text-4xl font-extrabold text-white text-center relative">
          {opHData.header}
        </h1>
        <img
          src={AB_DDR1}
          className=" sm:invisible md:invisible lg:invisible 2xl:visible xl:visible   relative -mt-16  mx-40"
        />
        <img
          src={AB_DDR2}
          className="sm:invisible md:invisible lg:invisible 2xl:visible xl:visible ml-auto relative ml-800  -mt-32 mr-40 py-1  "
        />
        <p className="  italic text-white text-center -mt-14 relative ">
          {opHData.text}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 px-10 text-center relative mt-10 ">
          <div>
            <h1 className="xl:px-44 text-2xl text-red-600 relative font-extrabold ">
              {opHData.day1}
            </h1>
            <p className="xl:px-44 text-2xl text-white font-bold">
              {opHData.time1}
            </p>
          </div>
          <div>
            <h1 className=" xl:px-44  text-2xl text-red-600 relative font-extrabold">
              {opHData.day2}
            </h1>
            <p className=" xl:px-44  text-2xl text-white font-bold">
              {opHData.time2}
            </p>
          </div>
        </div>
        {/* <img src={AB_DDR3} alt="" /> */}
        <p className="text-center  text-white font-bold text-lg relative mt-10 ">
          {opHData.content}
        </p>
      </div>
    </>
  )
}

export default OpeningHour
