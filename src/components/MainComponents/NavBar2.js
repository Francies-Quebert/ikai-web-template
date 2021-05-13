import React, { useState } from "react"
import { Link } from "gatsby"
import { MenuIcon } from "@heroicons/react/solid"
import LOGO from "../../images/logo.png"

const NavBar2 = () => {
  const [isExpanded, toggleExpansion] = useState(false)
  return (
    <nav
      className={`${
        !isExpanded ? "sticky top-0 z-50 " : ""
      } flex flex-wrap items-center justify-between p-4 bg-gray-50 text-black shadow-2xl`}
    >
      <div className="flex items-center flex-shrink-0 mr-6 text-red-600">
        <span className="text-4xl font-semibold tracking-tight font-Parisienne">
          <Link to="/" className="">
            Elixier
          </Link>
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 text-black border border-white rounded hover:text-white hover:border-white font-Parisienne"
        >
          <MenuIcon className="h-5 cursor-pointer  md:hidden" />
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:pl-20 lg:text-right  `}
      >
        <div className="text-sm lg:flex-grow">
          <Link
            to={`/`}
            href="#Home"
            className="block mt-4 mr-4 p-2 hover:border hover:border-red-500 rounded text-black font-medium lg:inline-block lg:mt-0  hover:text-red-500 "
          >
            Home
          </Link>
          <Link
            to={`/Abouts1`}
            href="#Abouts1"
            className="block mt-4 mr-4 text-black font-medium  lg:inline-block lg:mt-0 hover:text-red-500"
          >
            About
          </Link>{" "}
          <Link
            to={`/MenuPage`}
            href="#MenuPage"
            className="block mt-4 mr-4 text-black font-medium  lg:inline-block lg:mt-0 hover:text-red-500"
          >
            Menus
          </Link>{" "}
          <Link
            to={`/ContactUs`}
            href="#ContactUs"
            className="block mt-4 mr-4 text-black font-medium  lg:inline-block lg:mt-0 hover:text-red-500"
          >
            Contact Us
          </Link>
        </div>
        <div>
          <a
            href="#Login"
            className="inline-block px-4 py-2 mt-4 text-sm leading-none text-red-500 border border-red-500 rounded hover:bg-red-600 hover:text-white  lg:mt-0"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar2
