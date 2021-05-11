import React from "react"
import About1 from "../../images/about03.jpg"
import Lines from "../../images/lines.png"

const AboutUs = () => {
  return (
    <div class="container mx-auto pt-14">
      <div className="">
        <h2 className="text-center text-3xl  text-gray-900 uppercase mb-10 font-bold ">
          About Us
        </h2>
      </div>
      <div class="flex  mt-5 ...">
        <div className="flex-1">
          <h2 className="text-center mb-8 text-5xl font-bold">The History</h2>
          <p className="text-base mb-10 leading-7 font-normal text-gray-500">
            The <strong className="text-red-600">History of Kitchens</strong>{" "}
            and Cooks gives further intimation on Mr Boulanger usual menu,
            stating confidently that "Boulanger served salted poultry and fresh
            eggs, all presented without a tablecloth on small marble tables".
            Numerous commentators have also referred to the supposed restaurant
            owner's eccentric habit of touting for custom outside his
            establishment, dressed in aristocratic fashion and brandishing a
            sword
          </p>
          <p className="text-base mb-10 leading-7 font-normal text-gray-500">
            According to Miss Spang, there is not a shred of evidence for any of
            it. She said: These legends just get passed on by hearsay and then
            spiral out of control. Her interest in Boulanger dates back to a
            history of food seminar in Paris in the mid-1990s
          </p>
        </div>

        <div className="flex-1">
          <img src={About1} />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
