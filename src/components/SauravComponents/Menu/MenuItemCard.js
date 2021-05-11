import React from "react"
// import { XIcon } from "@heroicons/react/outline"
import IMG from "../../../images/menu-items/img-1.jpg"

const MenuItemCard = props => {
  const ingredients = [
    { id: 1, name: "No Cheese", price: "0.20" },
    { id: 1, name: "No Egg", price: "0.40" },
    { id: 1, name: "No Sausage", price: "0.40" },
    { id: 1, name: "No Butter", price: "0.40" },
    { id: 1, name: "No Muffin", price: "0.60" },
  ]
  return (
    <div>
      <div
        className={`${
          props.showModal ? "fixed" : "hidden"
        } left-0 top-0  justify-center items-center bottom-0 right-0 flex`}
        style={{ zIndex: 9000, backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div
          className="bg-white text-center rounded-sm right-1/2 top-1/2 w-9/12 max-w-md"
          style={{
            boxShadow: "0px 3px 4px 0px rgb(0,0,0/12%)",
            maxHeight: "90vh",
          }}
        >
          <div
            className="h-full overflow-x-hidden overflow-y-scroll"
            style={{
              // boxShadow: "0px 3px 4px 0px rgb(0,0,0/12%)",
              maxHeight: "90vh",
            }}
          >
            <div className="flex flex-row-reverse shadow-md" style={{boxShadow: "0px 3px 4px 0px rgb(0,0,0/12%)"}}>
              <div className="fixed">
                <h3 className=" text-2xl max-w-md">
                  <span
                    className="bg-white h-14 left-0 top-0 flex items-center justify-center rounded-t-sm transition duration-1000 ease-out delay-75 relative"
                    style={{
                      borderBottom: "1px solid #c5ccd3",
                      boxShadow: "opx 3px 4px 0px rgb(0,0,0/12%)",
                      zIndex: 8999,
                    }}
                  >
                    <span className="block text-xl my-0 mx-1 py-4 px-14 text-center whitespace-nowrap overflow-hidden overflow-ellipsis">
                      Double Sausage and Egg McMuffin
                    </span>
                  </span>
                </h3>
              </div>
              <div className="fixed top-14 -mt-1">
                <button
                  className="w-8 h-8 p-0 right-4 top-3 opacity-90 flex items-center justify-center"
                  style={{
                    backgroundColor: "#e7f1fe",
                    color: "#125fca",
                    borderRadius: "50%",
                    zIndex: 9000,
                  }}
                  onClick={() => {
                    props.onClose()
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-14 static">
              <img src={IMG} />
            </div>

            <p className="font-semibold mb-4 text-base">₹ 3.19</p>
            <p className="my-2 mx-10">
              For nutritional and allergen information for our food please visit
              http://mcdonalds.co.uk/nutrition.
            </p>
            <section className="mt-8 block">
              <div>
                <fieldset className="text-left m-0 p-0 border-none">
                  <legend className="text-xl bg-gray-100 pt-4 pr-4 pb-4 sticky top-14 w-full table max-w-full">
                    <span className="flex items-center justify-between">
                      <span className="items-center whitespace-nowrap mr-2"></span>
                      <span className="w-full">Remove</span>
                      <span className="items-center whitespace-nowrap mr-2"></span>
                    </span>
                  </legend>
                  {ingredients.map(aa => (
                    <div>
                      <div
                        className="bg-white block m-0"
                        style={{ borderBottom: "1px solid #c5ccd3" }}
                      >
                        <div className="flex justify-between w-full ">
                          <button className="items-center bg-transparent border-none flex flex-grow font-normal text-left p-4">
                            <span className="text-sm">{aa.name}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </fieldset>
                <fieldset className="text-left m-0 p-0 border-none">
                  <legend className="text-xl bg-gray-100 pt-4 pr-4 pb-4 sticky top-14 w-full table max-w-full">
                    <span className="flex items-center justify-between">
                      <span className="items-center whitespace-nowrap mr-2"></span>
                      <span className="w-full">Add Extra</span>
                      <span className="items-center whitespace-nowrap mr-2"></span>
                    </span>
                  </legend>
                  {ingredients.map(aa => (
                    <div>
                      <div
                        className="bg-white block m-0"
                        style={{ borderBottom: "1px solid #c5ccd3" }}
                      >
                        <div className="flex justify-between w-full ">
                          <button className="items-center bg-transparent border-none flex flex-grow font-normal text-left p-4">
                            <span className="text-sm">{aa.name}</span>
                            <span className="self-center flex flex-shrink-0 ml-auto px-2">
                              ₹ {aa.price}
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </fieldset>
              </div>
            </section>
            <div className="items-center flex justify-center my-8">
              <button className="font-normal m-2 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{color: "red"}}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 12H4"
                  />
                </svg>
              </button>
              <p className="text-5xl m-0 text-center w-1/4">1</p>
              <button className="font-normal m-2 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{color: "green"}}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </div>
            <div
              className="bg-white bottom-0 p-6 sticky w-full shadow-md"
              style={{ boxShadow: "0px -2px 4px 0px rgb(0,0,0/12%)", borderTop: "1px solid #c5ccd3" }}
            >
              <button className="flex justify-between w-full p-4 my-0 mx-auto max-w-md rounded-sm bg-yellow-600 text-xl cursor-pointer text-center font-semibold ">
                <span>Add to order</span>
                <span>₹ 3.19</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuItemCard
