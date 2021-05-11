import React from "react"
import Lines from "../../images/lines.png"
import ResLogo from "../../images/reservations_logo.png"

const Reservation = () => {
  return (
    <>
      <div className="p-3.5">
        <div>
          <h2 className="text-center text-3xl mb-10 uppercase font-normal;">
            Reservations
          </h2>
        </div>
        <div className="flex justify-center">
          <p
            className="text-center text-base mb-12 font-normal max-w-xl"
            style={{ color: "#777777" }}
          >
            Booking a table has never been so easy with free & instant online
            restaurant reservations, booking now!!
          </p>
        </div>
        <div className="">
          <div className="block flex justify-center">
            <img src={ResLogo} />
          </div>{" "}
          <div
            style={{ color: "#4d4c4a" }}
            className="flex justify-center text-5xl uppercase font-bold"
          >
            Make a reservation
          </div>
        </div>
      </div>
    </>
  )
}

export default Reservation
