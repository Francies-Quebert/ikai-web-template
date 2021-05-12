import React from "react"
import MENUBG from "../../images/trac_bg.jpg"
import { ClockIcon, NewspaperIcon, TruckIcon } from "@heroicons/react/outline"

const Features = () => {
  const FeaturesData = [
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

  const FeaturesComp = ({ data }) => {
    return (
      <>
        <div className=" bg-gray-50 text-center px-5 py-5 border-dashed border-4 hover:border-red-500 border-opacity-100 transition duration-500 ">
          <div>{data.icon}</div>
          <div>
            <h1 className="text-lg text-black font-extrabold ">{data.title}</h1>
            <p className=" text-sm text-gray-900">{data.text}</p>
          </div>
        </div>{" "}
      </>
    )
  }

  return (
    <>
      <div className="oph-body mt-10 ">
        <img
          src={MENUBG}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <h1 className="relative text-center text-4xl font-extrabold text-white">
          Track Order
        </h1>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>

        <div className=" h-full grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-3  px-10 hover:shadow-2xl transition duration-500  mt-10 overflow-hidden relative">
          {FeaturesData.map(data => {
            return <FeaturesComp data={data} />
          })}
        </div>
      </div>
    </>
  )
}

export default Features
