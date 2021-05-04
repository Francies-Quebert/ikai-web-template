import React from "react"
import MENU1 from "../../images/blog1.jpg"
import MENU2 from "../../images/blog2.jpg"
import MENU3 from "../../images/blog3.jpg"
import MenuReceipeCard from "./MenuReceipeCard"

const MenuReceipe = () => {
  const data = [
    {
      img: MENU1,
      day: " APRIL 11, 2016 / HEALTHY",
      title: " ITALIAN FAMOUS PASTA WITH MEAT AND CHEESE",
      content:
        "Sed ut perspiciatis unde omnis iste natus error lauatium, totam rem aperiam perspiciatis unde omnis....",
      comment: "3 COMMENT",
    },
    {
      img: MENU2,
      day: " APRIL 11, 2016 / HEALTHY",
      title: "CHOCOLATE TRUFFLE CAKE WITH HONEY FLAVOR",
      content:
        "Sed ut perspiciatis unde omnis iste natus error lauatium, totam rem aperiam perspiciatis unde omnis....",
      comment: "1 COMMENT",
    },
    {
      img: MENU3,
      day: "APRIL 11, 2016 / HEALTHY",
      title: "CHICKEN SOUP WITH  VEGGIES AND PASTA",
      content:
        "Sed ut perspiciatis unde omnis iste natus error lauatium, totam rem aperiam perspiciatis unde omnis....",
      comment: "5 COMMENT",
    },
  ]
  return (
    <>
      <section className=" text-center px-10 py-10 mt-10">
        <div>
          <p className=" font-mono text-sm">TASTY AND CRUNCHY</p>
          <h1 className="text-4xl font-bold tracking-widest mt-5">SPECIAL RECIPES</h1>
          <p className="font-sans px-10 mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm
            reminusto doeiusmod tempor incidition ulla mco laboris nisi ut
            aliquip ex ea commo condorico consectetur
          </p>
        </div>

        <main className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 md:gap-8 text-center mt-10">
          {data.map((curElem, key) => {
            return <MenuReceipeCard curElem={curElem} key={key} />
          })}
        </main>
      </section>
    </>
  )
}

export default MenuReceipe
