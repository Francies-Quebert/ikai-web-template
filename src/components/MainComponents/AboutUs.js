import React from "react"
import AB_IMG from "../../images/ab_1.jpg"
import AB_S1 from "../../images/ab_s1.jpg"

const AboutUs = () => {
  const AboutData = {
    title: "ABOUT US",
    content:
      "We love restaurants as much as you do. That’s why we’ve been helping them fill tables since 1999. Welcome to elixir restaurant",
    text: " The History",
    content1: ` The History of Kitchens and Cooks gives further intimation
          on Mr Boulanger usual menu, stating confidently that "Boulanger served 
          salted poultry and fresh
          eggs, all presented without a tablecloth on small marble tables".
          Numerous commentators have also referred to the supposed restaurant
          owner's eccentric habit of touting for custom outside his
          establishment, dressed in aristocratic fashion and brandishing a
          sword`,
    content2: ` According to Miss Spang, there is not a shred of evidence for any of
          it. She said: These legends just get passed on by hearsay and then
          spiral out of control. Her interest in Boulanger dates back 
          to a history of food seminar in Paris in the mid-1990s`,
  }

  return (
    <>
      <section className="mt-20 px-10">
        <div className="text-center ">
          <h1 className="ab-title  ">{AboutData.title}</h1>
          <p className=" ab-content ">{AboutData.content}</p>
        </div>

        <div className=" ab-div">
          <div>
            <h1 className="ab-text">{AboutData.text}</h1>
            <p className="ab-content1">{AboutData.content1}</p>
            <p className="ab-content1">{AboutData.content2}</p>
          </div>
          <div>
            <img src={AB_IMG} alt="" />
          </div>

          <div>
            <img src={AB_S1} alt="" />
          </div>
          <div>
            <p className="ab-content1">{AboutData.content1}</p>
            <p className="ab-content1 ">{AboutData.content2}</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
