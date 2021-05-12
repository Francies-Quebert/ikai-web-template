import React from "react"
import {
  ChevronDoubleRightIcon,
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/solid"
import IMG from "../../../images/menu-items/img-1.jpg"

const footer = () => {
  return (
    <footer className="bg-gray-500 relative overflow-hidden text-xl py-14">
      <div className="container px-3 mx-auto">
        <div className="flex flex-wrap">
          <div className=" grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            <div className="mb-7">
              <a href="/" className="text-xl mb-6 font-bold">
                <img src="" alt="Img" />
              </a>

              <p
                className="grid text-base mb-5 mr-5"
                style={{ color: "white" }}
              >
                ikai Technologies is a software development company based in
                Mumbai India.
                {/* We offer wide range of IT Services designed to
                  reimagine your business and transform your Enterprise. */}
              </p>

              {/* <ul className="social-icon">
                  <li>
                    <a target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank">
                      <i className="bx bxl-pinterest-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank">
                      <i className="bx bxl-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>

            <div className="grid grid-cols-1 px-3">
              <div className="mb-7">
                <h3
                  className="mb-6 text-base relative border-b-2 border-white pb-2.5"
                  style={{ color: "white" }}
                >
                  Services
                </h3>
                <ul>
                  <li
                    className="mb-2.5 relative  pl-5"
                    style={{ color: "white" }}
                  >
                    <ChevronDoubleRightIcon className=" text-sm h-4 w-4 absolute top-2 left-0" />
                    <span>
                      <a className="text-sm">Food & Restaurant</a>
                    </span>
                  </li>
                  <li
                    className="mb-2.5 relative pl-5"
                    style={{ color: "white" }}
                  >
                    <ChevronDoubleRightIcon className=" text-sm h-4 w-4 absolute top-2 left-0" />
                    <span>
                      <a className="text-sm">Food & Restaurant</a>
                    </span>
                  </li>
                  <li
                    className="mb-2.5 relative pl-5"
                    style={{ color: "white" }}
                  >
                    <ChevronDoubleRightIcon className=" text-sm h-4 w-4 absolute top-2 left-0" />
                    <span>
                      <a className="text-sm">Food & Restaurant</a>
                    </span>
                  </li>
                  <li
                    className="mb-2.5 relative pl-5"
                    style={{ color: "white" }}
                  >
                    <ChevronDoubleRightIcon className=" text-sm h-4 w-4 absolute top-2 left-0" />
                    <span>
                      <a className="text-sm">Food & Restaurant</a>
                    </span>
                  </li>
                  <li
                    className="mb-2.5 relative pl-5"
                    style={{ color: "white" }}
                  >
                    <ChevronDoubleRightIcon className=" text-sm h-4 w-4 absolute top-2 left-0" />
                    <span>
                      <a className="text-sm">Food & Restaurant</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 px-3">
              <div className="mb-7">
                <h3
                  className="mb-6 text-base relative border-b-2 border-white pb-2.5"
                  style={{ color: "white" }}
                >
                  Our Products
                </h3>
                <ul>
                  <li
                    className="mb-2.5 relative pl-5"
                    style={{ color: "white" }}
                  >
                    <ChevronDoubleRightIcon className=" text-sm h-4 w-4 absolute top-2 left-0" />
                    <span>
                      <a className="text-sm">Burfee (POS & RMS)</a>
                    </span>
                  </li>
                  <li
                    className="mb-2.5 relative pl-5"
                    style={{ color: "white" }}
                  >
                    <ChevronDoubleRightIcon className=" text-sm h-4 w-4 absolute top-2 left-0" />
                    <span>
                      <a className="text-sm">ikai (E-Commerce)</a>
                    </span>
                  </li>
                  <li
                    className="mb-2.5 relative pl-5"
                    style={{ color: "white" }}
                  >
                    <ChevronDoubleRightIcon className=" text-sm h-4 w-4 absolute top-2 left-0" />
                    <span>
                      <a className="text-sm">ikai (POS & RMS)</a>
                    </span>
                  </li>
                  <li
                    className="mb-2.5 relative pl-5"
                    style={{ color: "white" }}
                  >
                    <ChevronDoubleRightIcon className=" text-sm h-4 w-4 absolute top-2 left-0" />
                    <span>
                      <a className="text-sm">Service Industries</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-col-1 px-3">
              <div className="mb-7">
                <h3
                  className="mb-6 text-base relative border-b-2  border-white pb-2.5"
                  style={{ color: "white" }}
                >
                  Information
                </h3>

                <ul>
                  <li
                    className="mb-2.5 relative pl-8"
                    style={{ color: "white" }}
                  >
                    <PhoneIcon className="w-6 h-4 absolute top-2 left-1.5" />
                    <span className="text-sm" style={{ color: "white" }}>
                      Phone
                    </span>
                    <br></br>
                    <a
                      href="tel:+(91) 92205-68922"
                      className="text-sm"
                      style={{ color: "white" }}
                    >
                      {" "}
                      +(91) 92205-68922
                    </a>
                  </li>

                  <li
                    className="mb-2.5 relative pl-8"
                    style={{ color: "white" }}
                  >
                    <MailIcon className="w-6 h-4 absolute top-2 left-1.5" />
                    <span className="text-sm" style={{ color: "white" }}>
                      Email
                    </span>
                    <br></br>
                    <a
                      href="mailto:hari@ikaitechnologies.com"
                      className="text-sm"
                      style={{ color: "white" }}
                    >
                      hari@ikaitechnologies.com
                    </a>
                  </li>

                  <li
                    className="mb-2.5 relative pl-8 text-sm"
                    style={{ color: "white" }}
                  >
                    <LocationMarkerIcon className="w-6 h-4 absolute top-1 left-1.5" />
                    <span className="text-sm" style={{ color: "white" }}>
                      Address
                    </span>
                    <br></br>
                    <span className="text-sm" style={{ color: "white" }}>
                      102, Shanti Parvati Bldg, Bazar Gully, Near Versova Jetty,
                      Versova, Andheri (West), Mumbai - 400061.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

    /* Footer Bottom Area   */
    // <footer className="footer-bottom-area">
    //   <div className="container">
    //     <div className="row align-items-center">
    //       <div className="col-lg-8">
    //         <div className="copy-right">
    //           <p>
    //             Copyright &copy; 2021 ikai Technologies. All Rights
    //             Reserved
    //           </p>
    //         </div>
    //       </div>

    //       <div className="col-lg-4">
    //         <div className="designed">
    //           <p>
    //             Designed By <i className="bx bx-heart"></i>{" "}
    //             <a href="/" target="_blank">
    //               ikai Technologies
    //             </a>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  )
}

export default footer
