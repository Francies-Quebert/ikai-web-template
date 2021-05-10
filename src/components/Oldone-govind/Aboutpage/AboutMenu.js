import React from "react"
import AB1 from "../../../images/ab1.jpg"

const AboutMenu = () => {
  const AbHdata = {
    header:"Our About",
    title: "We're crazy about pizza.",
    content1: `"Piizalian, a division of Hot City Bakery, Inc., started in 1989 when a group of friends turned their 
      passion for pizza into a business we’re still crazy about. We’ve evolved quite a bit since those 
      first days when we focused solely on custom dough for a handful of customers. 
      Over the course of several years,we expanded our expertise to answer customer requests for self-rising
      and par-baked crusts, and frozen dough balls. "`,
    content2: `"Today, Piizalian is the supplier of choice for restaurants,
      food service and manufacturers across the country, offering a full line of remarkably good pizza doughs – so good,
      in fact, that customers confidently stake their reputations on them."`,
    img: AB1,
  }
  return (
    <>
    <h1></h1>
      <div className=" about-body">
      <h1 className=" about-headers">{AbHdata.header}</h1>
        <h1 className="about-title ">{AbHdata.title}</h1>
        <p className="about-content ">{AbHdata.content1}</p>
        <p className="about-content ">{AbHdata.content2}</p>
        <img src={AbHdata.img} alt="" className="mx-auto mt-10" />
      </div>
    </>
  )
}

export default AboutMenu
