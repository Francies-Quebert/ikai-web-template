import React from "react"
import MENU1 from "../../images/blog1.jpg"
import MENU2 from "../../images/blog2.jpg"
import MENU3 from "../../images/blog3.jpg"
import MenuReceipeCard from "./MenuReceipeCard"

const MenuReceipe = () => {
  const ReceipData = {
    title: "TASTY AND CRUNCHY",
    header: "SPECIAL RECIPES",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo condorico consectetur",
  }

  const Carddata = [
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
      title: "CHOCOLATE CAKE WITH HONEY FLAVOR",
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
      <section className=" section-body">
        <div>
          <p className=" font-mono text-sm">{ReceipData.title}</p>
          <h1 className="section-header">{ReceipData.header}</h1>
          <p className="font-sans px-10 mt-10">{ReceipData.content}</p>
        </div>

        <main className="cards-body">
          {Carddata.map((curElem, key) => {
            return <MenuReceipeCard curElem={curElem} key={key} />
          })}
        </main>
      </section>
    </>
  )
}

export default MenuReceipe
