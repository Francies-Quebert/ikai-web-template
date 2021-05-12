import React from "react"

const ContactUs = () => {
  return (
    <>
      <section
        className="pt-16 overflow-hidden block "
        // style={{ backgroundColor: "#2A220C" }}
      >
        <div className="pt-0 my-0 mx-auto max-w-7xl px-0 md:px-10 lg:px-10 2xl:px-10 ">
          <div className="pb-32 md:pb-24 block">
            <div className="grid px-10 relative">
              <h2
                className="text-center text-3xl uppercase mb-10 font-bold"
                // style={{ color: "#773f23" }}
              >
                Contact Us
              </h2>
            </div>
            <div className="relative px-4">
              <div
                className="text-center text-base mb-14"
                // style={{ color: "#773f23" }}
              >
                W325 State Road 123 Mondovi, WI (Wisconsin) 98746-54321
              </div>
            </div>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2">
                <div className="relative px-4">
                  <div>
                    <input
                      id="name"
                      className="pl-5 md:mb-11 mb-5 lg:mb-5 h-14 w-full bg-gray-300 rounded  placeholder-gray-500"
                      //   style={{ backgroundColor: "#382F15" }}
                      type="text"
                      name="name"
                      placeholder="Name"
                    ></input>
                  </div>
                  <div>
                    <input
                      id="email"
                      className="pl-5 md:mb-11 mb-5 lg:mb-5 h-14 w-full  bg-gray-300 rounded  placeholder-gray-500"
                      //   style={{ backgroundColor: "#382F15" }}
                      type="email"
                      name="email"
                      placeholder="Email"
                    ></input>
                  </div>

                  <input
                    id="subject"
                    className="pl-5 md:mb-11 mb-5 lg:mb-5 h-14 w-full  bg-gray-300 rounded  placeholder-gray-500"
                    // style={{ backgroundColor: "#382F15" }}
                    type="text"
                    name="subject"
                    placeholder="Subject"
                  ></input>
                </div>

                <div className="relative px-4">
                  <textarea
                    className="p-5 h-40 mb-11 w-full  bg-gray-300 rounded placeholder-gray-500"
                    // style={{ backgroundColor: "#382F15" }}
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows="10"
                  ></textarea>
                </div>
              </div>
              <div className="grid relative px-9">
                <button
                  className="block mx-auto font-semibold text-center text-2xl py-3 px-5 mt-8 w-52 bg-gray-600 rounded"
                  style={{ color: "white" }}
                  type="submit"
                  value="Submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs
