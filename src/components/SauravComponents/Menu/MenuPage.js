import React from "react";
import MenuItem from "./MenuItem";
import MenuItemCard from "./MenuItemCard";
import Footer from "../Footer/footer";

const MenuPage = () => {
  return (
    <div>
      <section className="bg-gray-300">
        {/* <div className="relative">
          <span
            style={{ borderBottom: "1px solid #e4e4e4" }}
            className="bg-gray-400 text-center w-full justify-center flex"
          >
            <div
              className="p-4 relative items-center justify-center flex w-full"
              style={{ zIndex: 98 }}
            >
              <div className="justify-center items-center text-3xl flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="items-center flex justify-center">
                  Menus for May 02 - May 03
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </span>
        </div> */}
        <MenuItem/>
      </section>
      {/* <Footer/> */}
    </div>
  )
}

export default MenuPage
