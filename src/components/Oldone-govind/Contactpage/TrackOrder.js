import React from "react"
import { ClockIcon, NewspaperIcon, TruckIcon } from "@heroicons/react/outline"

const TrackOrder = () => {
  const trackData = [
    {
      title: "Free shipping",
      text: "Sign up for updates and get free shipping",
      icon: <TruckIcon className="text-red-600 h-10 mx-auto" />,
    },
    {
      title: "30 Minutes Delivery",
      text: "Everything you oder will be quickly delivered to your door",
      icon: <ClockIcon className="text-red-600 h-10 mx-auto" />,
    },
    {
      title: "Best Quality Guarantee ",
      text: "Piizalian is an international chain of family restaurants",
      icon: <NewspaperIcon className="text-red-600 h-10 mx-auto" />,
    },
  ]
  return (
    <>
      <div className="track-body">
        {trackData.map(currE => {
          return (
            <div className="  track-div">
              <div>{currE.icon}</div>
              <div>
                <h1 className="track-header"> {currE.title} </h1>
                <p className="track-title">{currE.text}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default TrackOrder
