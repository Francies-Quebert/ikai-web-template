import React from "react"

const ContactUs = () => {
  return (
    <>
      <section
        className="pt-16 overflow-hidden block"
        style={{ backgroundColor: "#2A220C" }}
      >
        <div className="pt-0 my-0 mx-auto max-w-7xl px-10">
          <div className="pb-32 md:pb-24 block">
            <div className="grid px-10 relative">
              <h2 className="text-center text-3xl uppercase mb-10 font-normal">
                Contact Us
              </h2>
              1725 2140
            </div>
            <div className="relative px-4">
              <div className="text-center text-base mb-14">
                W325 State Road 123 Mondovi, WI (Wisconsin) 98746-54321
              </div>
            </div>
            <form>
              <div className="grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
                <div className="relative px-4">
                  <input
                    id="name"
                    className="pl-5 mb-11 h-20"
                    style={{ backgroundColor: "#382F15" }}
                    type="text"
                    name="name"
                    placeholder="Name"
                  ></input>
                </div>
                <div className="relative px-4">
                  <input
                    id="email"
                    className="pl-5 mb-11 h-20"
                    style={{ backgroundColor: "#382F15" }}
                    type="email"
                    name="email"
                    placeholder="Email"
                  ></input>
                </div>
                <div className="relative px-4">
                  <input
                    id="subject"
                    className="pl-5 mb-11 h-20"
                    style={{ backgroundColor: "#382F15" }}
                    type="text"
                    name="subject"
                    placeholder="Subject"
                  ></input>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs
