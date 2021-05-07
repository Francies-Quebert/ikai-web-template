import React from "react"
import { Link } from "gatsby"

const MainBanner = props => {
  return (
    <div
      class="bg-hero-pattern bg-center bg-cover bg-no-repeat relative h-auto"
      style={{ minHeight: 650, width: "100%" }}
    >
      <div class="relative block" style={{ minHeight: 650, width: "100%" }}>
        <div
          class="top-2/4 left-2/4 absolute text-black flex-col flex items-center -translate-y-2/4 -translate-x-2/4"
          style={{
            transform: "translate(-50%, -50%)",
            width: 750,
            textAlign: "center",
          }}
        >
          <h1 class="text-6xl mb-5 " style={{ color: "#343434" }}>
            {props.heading}
          </h1>
          <p
            class="text-sm text-center text-gray-600"
            style={{ maxWidth: 475 }}
          >
            {props.description}
          </p>
        </div>
        <div
          class="absolute animate-spin"
          style={{
            left: "calc(50% - 25px)",
            bottom: 30,
            cursor: "pointer",
            height: 50,
            width: 50,
            border: "1px solid #067A46",
            borderRadius: "50%",
            backgroundColor: "white",
            fontSize: 35,
            textAlignLast: "center",
          }}
        ></div>
      </div>
    </div>
  )
}

export default MainBanner
