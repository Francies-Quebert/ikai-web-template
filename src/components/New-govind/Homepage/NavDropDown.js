import React from "react"
import { Link } from "gatsby"

const NavDropDown = ({ isOpen, toggle }) => {
  return (
    <>
      <div
        className={
          isOpen
            ? "grid grid-rows-4 text-center items-center text-white  bg-gray-900"
            : "hidden"
        }
        onClick={toggle}
      >
        <Link to="/" className="p-4  ">
          Home
        </Link>
        <Link to="#" className="p-4">
          Menu
        </Link>
        <Link to="#" className="p-4">
          About
        </Link>
        <Link to="#" className="p-4">
          Track Now
        </Link>
      </div>
    </>
  )
}

export default NavDropDown
