import React from "react"
import { Link } from "gatsby"
import LOGO from "../../../images/logo.png"
import "tailwindcss/tailwind.css"
import { MenuIcon } from "@heroicons/react/solid"

const Navbar = ({ toggle }) => {
  return (
    <>
      <div className=" sticky top-0 ">
        <nav
          className="flex  justify-between items-center h-16 bg-gray-50 text-black shadow-2xl relative  md:justify-between"
          role="navigation"
        >
          <Link to="/" className="pl-8 mt-5">
            <img src={LOGO} />
          </Link>
          <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
            <MenuIcon className="h-5 cursor-pointer  md:hidden" />
          </div>
          <div className="pr-8 md:block hidden">
            <Link to="/" className="p-4 hover:text-red-500 ">
              Home
            </Link>
            <Link to="#" className="p-4 hover:text-red-500">
              About
            </Link>
            <Link to="#" className="p-4 hover:text-red-500">
              Menu
            </Link>

            <Link to="#" className="p-4 hover:text-red-500 ">
              Track Now
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
