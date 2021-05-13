import React from "react"

import MENU1 from "../../images/p1.jpg"

const BestSeller = () => {
  const data = [
    { name: "BESTSELLERS" },
    { name: "PASTA PIZZA PARTY" },
    { name: "VEG PIZZA " },
  ]

  const cardData = [
    {
      img: MENU1,
      title: "The Unthinkable Pizza",

      desc:
        "Loaded with Plant Based Protein topping along with Black Olives & Red Paprika enjoy this unique 100% Vegetarian pizza with a",

      m_mrp: 100,
      l_mrp: 230,
      r_mrp: 198,
      m_size: "Medium",
      l_size: "Large",
      r_size: "Regular",
      crust_new: " New Hand Tossed",
      crust_wt: " Wheat Thin Crust",
      crust_chs: " Cheese Burn",
      crust_pz: "Fresh pan Pizza",
    },
    {
      img: MENU1,
      title: "Margherita",
      desc: "A classic delight with 100% Real mozzarella cheese",
      m_mrp: 120,
      l_mrp: 230,
      r_mrp: 198,
      m_size: "Medium",
      l_size: "Large",
      r_size: "Regular",
      crust_new: " New Hand Tossed",
      crust_wt: " Wheat Thin Crust",
      crust_chs: " Cheese Burn",
      crust_pz: "Fresh pan Pizza",
    },
    {
      img: MENU1,
      title: "Farmhouse",
      desc:
        "Delightful combination of onion, capsicum, tomato & grilled mushroom",
      m_mrp: 150,
      l_mrp: 230,
      r_mrp: 198,
      m_size: "Medium",
      l_size: "Large",
      r_size: "Regular",
      crust_new: " New Hand Tossed",
      crust_wt: " Wheat Thin Crust",
      crust_chs: " Cheese Burn",
      crust_pz: "Fresh pan Pizza",
    },
  ]

  return (
    <>
      <div className="flex m-auto overflow-auto pt-24 pr-24 pb-12 pl-12 bg-gray-300">
        <div className="flex flex-col ml-2 -mr-12" style={{ width: "80%" }}>
          {data.map(aa => {
            return (
              <>
                <div>
                  <div className="bg-white rounded-full inline-flex items-center py-4 px-8 mb-4 ml-6">
                    <div className="w-full">{aa.name}</div>
                  </div>
                </div>
                <div className="grid gap-3 grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3l">
                  {cardData.map(xx => {
                    return (
                      <div>
                        <div
                          className="relative mt-0 flex h-4/5 flex-wrap "
                          style={{
                            width: "1000px",
                            position: "relative",
                          }}
                        >
                          <div className="w-1/4 mr-12 mb-12">
                            <div>
                              <div
                                className=" shadow-xl flex flex-row flex-wrap right-0 left-0 max-w-full rounded justify-center m-0"
                                style={{
                                  boxShadow:
                                    "(0 0 0 / 12%) 0px 2px 2px 0px,rgb(0 0 0 / 12%) 0px 2px 4px 0px;",
                                  flexBasis: "auto",
                                  backgroundColor: "white",
                                }}
                              >
                                <div className="w-full">
                                  <div className="min-w-0 relative overflow-hidden">
                                    <div className="h-34 w-full">
                                      <img
                                        className="w-full h-full max-w-full"
                                        style={{
                                          borderRadius: "3px 3px 0px 0px;",
                                        }}
                                        src={xx.img}
                                      />
                                    </div>
                                    <div
                                      className="bg-no-repeat w-24 h-16 absolute bottom-0"
                                      style={{
                                        backgroundSize: "100% 100%",
                                        minWidth: "0.3em",
                                        minHeight: "0.3em",
                                        // backgroundImage: { Shadow },
                                      }}
                                    ></div>

                                    <div className="text-7xl absolute top-2 right-2.5">
                                      <div
                                        className="bg-no-repeat w-6 h-4 absolute right-0 top-0 opacity-20 rounded-2xl "
                                        style={{
                                          backgroundSize: "100% 100%",
                                          minWidth: "0.3em",
                                          minHeight: "0.3em",
                                          transform: "rotate(180deg)",
                                          //   backgroundImage: { Shadow },
                                        }}
                                      ></div>
                                      <div
                                        className="bg-no-repeat absolute right-0 "
                                        style={{
                                          backgroundSize: "100% 100%",
                                          minWidth: "0.3em",
                                          minHeight: "0.3em",
                                          //   backgroundImage: { Fav },
                                        }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="flex-wrap w-full m-3"
                                  style={{ flexBasis: "auto" }}
                                >
                                  <div className="border-b-2 border-gray-300 h-20 mb-4 -mt-8 flex flex-col">
                                    <span
                                      className="justify-start text-sm font-semibold px-2"
                                      style={{ flexBasis: "auto" }}
                                    >
                                      {xx.title}
                                    </span>
                                    <span
                                      style={{ flexBasis: "auto" }}
                                      className="leading-4 text-xs mt-2 w-11/12 overflow-hidden px-2"
                                    >
                                      {xx.desc}
                                    </span>
                                  </div>

                                  <div
                                    className="flex-nowrap flex-row flex -mt-3 mb-4 w-full"
                                    style={{ flexBasis: "auto" }}
                                  >
                                    <div>
                                      <div className=" h-4 text-xs  text-gray-400 px-2">
                                        Size
                                      </div>

                                      <div className="relative pb-0.5">
                                        <div className="flex cursor-pointer justify-between">
                                          <select
                                            className=" outline-none text-gray-900 font-bold"
                                            style={{
                                              fontSize: "11px",
                                              color: "black",
                                            }}
                                          >
                                            <option
                                              value="large"
                                              className="text-green-600 font-bold"
                                            >
                                              {xx.l_size} ₹ {xx.l_mrp}
                                            </option>
                                            <option value="medium">
                                              {xx.m_size} ₹ {xx.m_mrp}
                                            </option>
                                            <option value="regular">
                                              {xx.r_size} ₹ {xx.r_mrp}
                                            </option>
                                          </select>
                                        </div>
                                      </div>

                                      <div
                                        style={{
                                          borderBottom:
                                            "1px solid rgb(233,233,233)",
                                        }}
                                      ></div>
                                    </div>
                                    <div className="flex-nowrap flex-col ml-2 w-3/5">
                                      <div className="h-4 text-gray-400 px-2 text-xs ">
                                        Crust
                                      </div>
                                      <div>
                                        <div className="relative pb-0.5">
                                          <div className="flex cursor-pointer justify-between">
                                            <select
                                              className=" outline-none text-gray-900 font-bold"
                                              style={{
                                                fontSize: "11px",
                                                color: "black",
                                              }}
                                            >
                                              <option>
                                                {xx.crust_new} ₹ {xx.l_mrp}
                                              </option>
                                              <option>
                                                {xx.crust_wt} ₹ {xx.m_mrp}
                                              </option>
                                              <option>
                                                {xx.crust_chs} ₹ {xx.r_mrp}
                                              </option>
                                              <option>
                                                {xx.crust_pz} ₹ {xx.r_mrp}
                                              </option>
                                            </select>
                                          </div>
                                        </div>
                                        <div
                                          style={{
                                            borderBottom:
                                              "1px solid rgb(233,233,233)",
                                          }}
                                        ></div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* button */}
                                  <div className="flex justify-between relative flex-row-reverse mt-2 mr-3">
                                    <div className="text-lg  font-semibold absolute  left-2">
                                      ₹<span className="text-green-600">
                                        {xx.l_mrp}
                                      </span>
                                    </div>

                                    <div className="self-center">
                                      <button className="  text-green-600 border border-green-600 hover:bg-green-600 hover:text-white transition duration-500 p-1 outline-none">
                                        <span className="text-xs font-semibold">
                                          ADD TO CART
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default BestSeller
