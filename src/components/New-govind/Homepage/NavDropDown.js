import React from "react"
import { Link } from "gatsby"

const NavDropDown = ({ isOpen, toggle }) => {
  return (
    <>
      <div
        className={
          isOpen
            ? "grid grid-rows-4 text-center items-center text-white bg-gray-900  "
            : "hidden"
        }
        onClick={toggle}
      >
        <Link to="/" className="p-4 hover:bg-red-600   ">
          Home
        </Link>
        <Link to="#" className="p-4 hover:bg-red-600 ">
          Menu
        </Link>
        <Link to="#" className="p-4 hover:bg-red-600 ">
          About
        </Link>
        <Link to="#" className="p-4 hover:bg-red-600 ">
          Track Now
        </Link>
      </div>
    </>
  )
}

export default NavDropDown
