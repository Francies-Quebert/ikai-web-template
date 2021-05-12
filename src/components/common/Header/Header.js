import React, { useLayoutEffect, useState } from "react"

const Header = () => {
  const [scrollPosition, setPosition] = useState(false)
  useLayoutEffect(() => {
    function updatePosition() {
      //   console.log(window.pageYOffset)
      if (window.pageYOffset > 100) {
        setPosition("show-overflow")
      } else if (window.pageYOffset > 75) {
        setPosition("overflow")
      } else {
        setPosition()
      }
    }
    window.addEventListener("scroll", updatePosition)
    updatePosition()
    return () => window.removeEventListener("scroll", updatePosition)
  }, [])
  return (
    <header
      role="banner"
      className={` header-initial transition-header ${
        scrollPosition
          ? "header-overflow-extra overflow-header"
          : "bg-custom-black"
      }  ${
        scrollPosition === "show-overflow" &&
        "overflow-header overflow-header-fixed "
      }  `}
    >
      <div className={`px-2`}>
        {/* <div className="navbar-header page-scroll">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-main-collapse"
          >
            <i className="fa fa-bars"></i>
          </button>
          <a className="navbar-brand normal logo" href="#home">
            <div className="logo_elixir"></div>
          </a>
          <a className="navbar-brand mini" href="#home">
            <div className="logo_elixir dark"></div>
          </a>
          <a className="navbar-brand mini darker" href="#home">
            <div className="logo_elixir dark"></div>
          </a>
        </div> */}

        {/* <!-- BEGIN NAVIGATION MENU--> */}
        {/* <nav
          className="collapse navbar-collapse navbar-right navbar-main-collapse"
          role="navigation"
        >
          <ul id="nav" className="nav navbar-nav navigation">
            <li className="page-scroll menu-item current">
              <a href="#home-slider">Home</a>
            </li>
            <li className="page-scroll menu-item">
              <a href="about.html">About</a>
            </li>
            <li className="page-scroll menu-item">
              <a href="menu.html">Menu</a>
            </li>
            <li className="page-scroll menu-item">
              <a href="gallery.html">Gallery</a>
            </li>
            <li className="page-scroll menu-item">
              <a href="reservations.html">Reservations</a>
            </li>
            <li className="page-scroll menu-item">
              <a href="contact.html">Location</a>
            </li>
          </ul>
        </nav> */}
        {/* <!-- EN NAVIGATION MENU --> */}
      </div>
    </header>
  )
}

export default Header
