import React from "react"
import { Link } from "gatsby"
import LOGO from "../../images/menu_logo.png"

const Menu1Component = () => {
  const MenuCategory = [
    {
      Code: "PASTA",
      Desc: "Pasta",
    },
    {
      Code: "DESSERT",
      Desc: "Dessert",
    },
    {
      Code: "PIZZA",
      Desc: "Pizza",
    },
  ]

  const Menus = [
    {
      CatCode: "PASTA",
      ItemName: "Mecronni Pasta",
      Desc: "7 oz. Center Cut10 oz. Double cut",
      Price: "$14.49",
    },
  ]

  const MenuDta = [
    {
      categories: "GREAT PASTA",
      title1: "FILET",
      text1: "7 oz. Center Cut10 oz. Double cut",
      price1: "$14.49",
      title2: "SPECIAL FILET",
      text2: "10 oz Greg Norman Ranch",
      price2: "$9.49",
      title3: "NEW YORK STRIP",
      text3: "9 oz. Center Cut12 oz. Double cut oz",
      price3: "$5.49",
      title4: "PORTERHOUSE",
      text4: "7 oz. Center Cut10 oz.",
      price4: "$10.49",
      title5: "DELMONICO",
      text5: "10 oz Greg Norman Ranch",
      price5: "$12.49",
    },
    {
      categories: "OUR PIZZAS",
      title1: "FILET",
      text1: "7 oz. Center Cut10 oz. Double cut",
      price1: "$14.49",
      title2: "SPECIAL FILET",
      text2: "10 oz Greg Norman Ranch",
      price2: "$9.49",
      title3: "NEW YORK STRIP",
      text3: "9 oz. Center Cut12 oz. Double cut oz",
      price3: "$5.49",
      title4: "PORTERHOUSE",
      text4: "7 oz. Center Cut10 oz.",
      price4: "$10.49",
      title5: "DELMONICO",
      text5: "10 oz Greg Norman Ranch",
      price5: "$12.49",
    },
    {
      categories: "DESSERTS",
      title1: "FILET",
      text1: "7 oz. Center Cut10 oz. Double cut",
      price1: "$14.49",
      title2: "SPECIAL FILET",
      text2: "10 oz Greg Norman Ranch",
      price2: "$9.49",
      title3: "NEW YORK STRIP",
      text3: "9 oz. Center Cut12 oz. Double cut oz",
      price3: "$5.49",
      title4: "PORTERHOUSE",
      text4: "7 oz. Center Cut10 oz.",
      price4: "$10.49",
      title5: "DELMONICO",
      text5: "10 oz Greg Norman Ranch",
      price5: "$12.49",
    },
  ]

  const MenuComponent = ({ data }) => {
    return (
      <>
        <div className=" px-5 ">
          <h1 className="menu-categories">{data.categories}</h1>
          <p className="text-lg font-bold">{data.title1}</p>
          <p className=" menu-prices">
            {data.text1}
            <p className="text-red-600">{data.price1}</p>
          </p>

          <p className="menu-titles">{data.title2}</p>
          <p className=" menu-prices">
            {data.text2}
            <p className="text-red-600">{data.price2}</p>
          </p>
          <p className="menu-titles">{data.title3}</p>
          <p className=" menu-prices">
            {data.text3}
            <p className="text-red-600">{data.price3}</p>
          </p>
          <p className="menu-titles">{data.title4}</p>
          <p className=" menu-prices">
            {data.text4}
            <p className="text-red-600">{data.price4}</p>
          </p>
          <p className="menu-titles">{data.title5}</p>
          <p className=" menu-prices">
            {data.text5}
            <p className="text-red-600">{data.price5}</p>
          </p>
        </div>{" "}
      </>
    )
  }

  return (
    <div className="py-5">
      <img src={LOGO} className="mx-auto mt-5" />
      <div className="menu-divs">
        {MenuDta.map(curr => {
          return <MenuComponent data={curr} />
        })}
      </div>

      {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-3 px-10 py-5">
        {MenuCategory.length > 0 &&
          MenuCategory.map(ii => (
            <>
              <h1
                key={ii.Code}
                className="text-center text-2xl text-green-600 font-bold mb-5"
              >
                {ii.Desc}
              </h1>
            </>
          ))}
      </div> */}

      <div className="flex justify-center ">
        <Link to="/MenuPage" className=" menu-links ">
          View Complete Menu
        </Link>
      </div>
    </div>
  )
}

export default Menu1Component
