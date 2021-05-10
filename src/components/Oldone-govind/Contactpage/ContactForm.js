import React, { useState } from "react"

const Contactform = () => {
  //usestate
  const [login, setLogin] = useState({
    Name: "",
    Email: "",
    Phone: " ",
    SelectReason: "",
    Message: "",
  })

  const submitHandler = event => {
    if (
      login.Name !== "" &&
      login.Email !== "" &&
      login.Phone !== "" &&
      login.SelectReason !== "" &&
      login.Message !== ""
    ) {
      alert(`Hello ${login.Name} Welcome to Administrator Page`)
    }
  }

  const Cdata = {
    header: "Contact Us",
    text: "Any questions of remarks? Just wirte us a message!",
  }
  return (
    <>
      <div className=" contact-body">
        <h1 className="contact-header ">{Cdata.header}</h1>
        <p className="contact-title ">{Cdata.text}</p>
      </div>

      <section className=" rounded-2xl shadow-xl m-10 py-1">
        <form className="px-4 my-32 max-w-3xl mx-auto space-y-6">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="name">Name </label>
              <input
                className=" border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-blue-500 "
                type="text"
                placeholder="Your Name"
                value={login.Name}
                required
                autoComplete="off"
                onChange={e => setLogin({ ...login, Name: e.target.value })}
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="user">Email </label>
              <input
                className=" border border-gray-400 block py-2 px-4 w-full rounded  focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Your Email"
                value={login.Email}
                required
                autoComplete="off"
                onChange={e => setLogin({ ...login, Email: e.target.value })}
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="user">Phone </label>
              <input
                className=" border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-blue-500"
                type="number"
                placeholder="Enter Your Phone No."
                value={login.Phone}
                required
                autoComplete="off"
                onChange={e => setLogin({ ...login, Phone: e.target.value })}
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="user">Select Reason </label>
              <input
                className=" border border-gray-400 block py-2 px-4 w-full rounded  focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Select Reason"
                value={login.SelectReason}
                required
                autoComplete="off"
                onChange={e =>
                  setLogin({ ...login, SelectReason: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <label htmlFor="user">Message </label>
            <textarea
              className=" border border-gray-400 block py-2 px-4 w-full rounded  focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Your Review"
              value={login.Message}
              required
              autoComplete="off"
              onChange={e => setLogin({ ...login, Message: e.target.value })}
            />
          </div>

          <div className="space-x-4">
            <input type="checkbox" id="agree" />

            <label htmlFor="agree">
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </div>
          <button
            className="bg-red-500 text-white font-bold rounded-full focus:outline-none hover:bg-red-400 p-3 "
            onClick={submitHandler}
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  )
}

export default Contactform
