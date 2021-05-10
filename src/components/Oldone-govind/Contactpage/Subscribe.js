import React from "react"

const Subscribe = () => {
  const SubDta = {
    header: "SUBSCRIBE TO NEWSLETTER",
    text: "Subscribe to receive our weekly Hot Promotion every Monday!",
    button: "Sign Up",
  }
  return (
    <>
      <div className="subr-div">
        <h1 className="subr-header">{SubDta.header}</h1>
        <p className="subr-text">{SubDta.text}</p>
        <form className="form-body">
          <div className="form-div ">
            <input
              type="text"
              className=" flex-grow focus:outline-none "
              placeholder="Your email address"
              required
            />
            <button className="form-btn">{SubDta.button}</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Subscribe
