import React, { useLayoutEffect, useState } from "react"
import Header from "../components/common/Header/Header"

const Francies = () => {
  const [scrollPosition, setPosition] = useState(false)

  return (
    <div
      style={{ height: "calc(100vh + 500px)" }}
      className="min-h-screen bg-gray-600"
    >
      <Header />
    </div>
  )
  return (
    <div
      style={{ height: "calc(100vh + 500px)" }}
      className="min-h-screen bg-gray-600"
    >
      <header
        className={`${
          scrollPosition
            ? "fixed  top-0 w-full shadow-bottom"
            : "relative top-2"
        } transition lg:px-16 px-6 bg-white block items-center lg:py-0 py-2 `}
      >
        <div className="flex flex-wrap relative">
          <div className="flex-1 flex justify-between items-center">
            <a href="#">
              <img
                className="m-auto"
                src="https://ikaitechnologies.com/images/white-logo.png"
              />
            </a>
          </div>

          <label for="menu-toggle" className="pointer-cursor lg:hidden block">
            <svg
              className="fill-current text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />

          <div
            className="hidden lg:flex lg:items-center lg:w-auto w-full"
            id="menu"
          >
            <nav>
              <ul className="text-gray-50 lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                <li className="m-0">
                  <a
                    className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                    href="#"
                  >
                    Features
                  </a>
                </li>
                <li className="m-0">
                  <a
                    className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                    href="#"
                  >
                    Pricing
                  </a>
                </li>
                <li className="m-0">
                  <a
                    className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                    href="#"
                  >
                    Documentation
                  </a>
                </li>
                <li className="m-0">
                  <a
                    className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2"
                    href="#"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
  return (
    <>
      <div classNameName="min-h-screen bg-gray-600">
        <div classNameName="bg-white fixed py-3 w-full transition-all top-0 right-0">
          {/* <div>logo</div>
        <div>menu</div>
        <div>mobile menu</div> */}
        </div>
        <div classNameName="" style={{ height: "calc(100vh + 500px)" }}></div>
      </div>
    </>
  )
}

export default Francies
