import { Link } from 'gatsby'
import React from 'react'

const Footer = () => {
    return (
        <>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-3 bg-gray-300 px-10 mt-5 py-10">
        <div>
          <h1 className="tracking-tighter">
            Copyright © 2021 <span className="text-red-500">Resturants.</span>{" "}
            All Rights Reserved
          </h1>
        </div>
        <div>
          <h1 className="tracking-tighter">
            570 8th Ave, New York, NY 10018 United States
          </h1>
        </div>
        <div className="flex hover:text-red-600 space-x-4">
          <Link to="/about">
            <p>About Us</p>
          </Link>
          <Link to="/contact">
            <p>Contact Us</p>
          </Link>
        </div>
      </div>  
        </>
    )
}

export default Footer
