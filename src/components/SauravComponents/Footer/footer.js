import React from "react";
import IMG from "../../images/menu-items/img-1.jpg";


const footer = () => {
  return (
      <footer className="bg-gray-700 relative overflow-hidden text-xl py-14">
        <div className="container px-3 mx-auto">
          <div className="flex flex-wrap">
            <div className=" grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
              <div className="mb-7">
                <a href="/" className="text-xl mb-6 font-bold">
                  <img src="" alt="Img" />
                </a>

                <p className="grid text-base mb-5 mr-5" style={{color: "white"}}>
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

            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
              <div className="mb-7">
                <h3 className="mb-6 text-xl relative border-b-2 border-red-300 pb-2.5" style={{color: "white"}}>Services</h3>
                <ul>
                  <li className="mb-2.5">
                    <a>
                      <i className="top-1 absolute left-0 text-xl"></i>
                      Food & Restaurant
                    </a>
                  </li>
                  <li className="mb-2.5">
                    <a>
                      <i className="top-1 absolute left-0 text-xl"></i>
                      Food & Restaurant
                    </a>
                  </li>
                  <li className="mb-2.5">
                    <a>
                      <i className="top-1 absolute left-0 text-xl"></i>
                      Food & Restaurant
                    </a>
                  </li><li className="mb-2.5">
                    <a>
                      <i className="top-1 absolute left-0 text-xl"></i>
                      Food & Restaurant
                    </a>
                  </li>
                  <li className="mb-2.5">
                    <a>
                      <i className="top-1 absolute left-0 text-xl"></i>
                      Food & Restaurant
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
              <div className="mb-7">
                <h3 className="mb-6 text-xl relative border-b-2 border-red-300 pb-2.5" style={{color: "white"}} >Our Products</h3>
                <ul>
                  <li className="mb-2.5">
                    <a>
                      <i className="top-1 absolute left-0 text-xl"></i>
                      Burfee (POS & RMS)
                    </a>
                  </li>
                  <li className="mb-2.5">
                    <a>
                      <i className="top-1 absolute left-0 text-xl"></i>
                      ikai (E-Commerce)
                    </a>
                  </li>
                  <li className="mb-2.5">
                    <a>
                      <i className="top-1 absolute left-0 text-xl"></i>
                      ikai (POS & RMS)
                    </a>
                  </li>
                  <li className="mb-2.5">
                    <a>
                      <i className="top-1 absolute left-0 text-xl"></i>
                      Service Industries
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-widget">
                <h3>Information</h3>

                <ul className="information">
                  <li className="address">
                    <i className="flaticon-call"></i>
                    <span>Phone</span>
                    <a href="tel:+(91) 92205-68922"> +(91) 92205-68922</a>
                  </li>

                  <li className="address">
                    <i className="flaticon-envelope"></i>
                    <span>Email</span>
                    <a href="mailto:hari@ikaitechnologies.com">
                      hari@ikaitechnologies.com
                    </a>
                  </li>

                  <li className="address">
                    <i className="flaticon-maps-and-flags"></i>
                    <span>Address</span>
                    102, Shanti Parvati Bldg, Bazar Gully, Near Versova Jetty,
                    Versova, Andheri (West), Mumbai - 400061.
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
