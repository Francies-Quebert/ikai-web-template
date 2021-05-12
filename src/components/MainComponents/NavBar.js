import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import LOGO from "../../images/logo.png"
import "tailwindcss/tailwind.css"
import { MenuIcon } from "@heroicons/react/solid"

const NavBar = ({}) => {
  const [isOpen, setIsOpen] = useState(false)

  //   const toggle = () => {
  //     setIsOpen(!isOpen)
  //   }

  //   //USEEFFECT
  //   useEffect(() => {
  //     const hideMenu = () => {
  //       if (window.innerWidth > 768 && isOpen) {
  //         setIsOpen(false)
  //         // console.log("i resizeddd")
  //       }
  //     }
  //     window.addEventListener("resize", hideMenu)
  //     return () => {
  //       window.removeEventListener("resize", hideMenu)
  //     }
  //   })
  return (
    <>
      <div className="sticky top-0 z-50 ">
        <nav
          className={`${
            !isOpen
              ? "flex  justify-between items-center h-16  bg-gray-50 text-black shadow-2xl relative  md:justify-between"
              : ""
          }`}
          role="navigation"
        >
          <Link to="/" className="pl-8 mt-5">
            <img src={LOGO} />
          </Link>
          <div
            className="px-4 cursor-pointer md:hidden"
            onClick={() => {
              setIsOpen(!isOpen)
            }}
          >
            <MenuIcon className="h-5 cursor-pointer  md:hidden" />
          </div>
          <div
            className={` ${
              isOpen
                ? `grid grid-rows-4 text-center items-center text-white bg-gray-900 `
                : "pr-8  md:block hidden"
            } `}
          >
            <Link
              to="/"
              className="p-4 uppercase text-sm text- font-sans hover:text-red-500"
            >
              Home
            </Link>
            <Link
              to="/Abouts1"
              className="p-4 uppercase text-sm font-sans hover:text-red-500"
            >
              About
            </Link>
            <Link
              to="/MenuPage"
              className="p-4  uppercase  text-sm font-sans hover:text-red-500"
            >
              Menu
            </Link>

            <Link
              to="/ContactUs"
              className="p-4  uppercase  text-sm font-sans hover:text-red-500 "
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}

export default NavBar
