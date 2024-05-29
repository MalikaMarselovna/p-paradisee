import React, { useState } from "react";
import Modal from "react-modal";
import "./Review.css";
import girl from "../../img/girl.jpg";
import woman from "../../img/woman2.jpg";
import man1 from "../../img/rew1.gif";
import man2 from "../../img/rew4.webp";

const reviews = [
  {
    name: "JANE",
    role: "Cosmetologist",
    img: girl,
    bgColor: "#fff",
    textColor: "#16ffbd",
    text: `I ordered a knitted toy for my newborn son. The quality is simply amazing!
    The thread is soft, the toy is absolutely safe for the baby. My husband and I are
    very pleased, we will order more!`
  },
  {
    name: "MARK",
    role: "Restaurant Administrator",
    img: man1,
    bgColor: "fff",
    textColor: "#16ffbd",
    text: `I gave a knitted toy to my niece for her birthday. She immediately fell in love
    with her new bear! Thank you very much for the individual approach and fast delivery.
    I recommend it to everyone!`
  },
  {
    name: "KIARA",
    role: "Designer",
    img: woman,
    bgColor: "#fff",
    textColor: "#16ffbd",
    text: `We have several of your toys at home, and they are all just wonderful! I especially
    like that you can order toys with an individual design. It’s very nice to receive such
    high-quality and cute things.`
  },
  {
    name: "JOHN",
    role: "Architect",
    img: man2,
    bgColor: "#fff",
    textColor: "#16ffbd",
    text: `The toy exceeded all expectations! Ordered as a christening gift and it was a real hit
    with the guests. I really liked the quality and appearance. We will order more.`
  },
];

function Review() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  const openModal = (review) => {
    setSelectedReview(review);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedReview(null);
  };

  return (
    <div className="container">
      <h2 className="mt-20 mb-10 text-4xl font-bold flex justify-center text-[#f92e9e]">
        Reviews From Our Clients
      </h2>
      <div className="resensies_cards flex flex-wrap justify-around">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="resensie_card flex justify-between items-center w-[580px] p-5 mb-5 rounded-[10px] cursor-pointer xl:w-[500px] lg:w-[450px] smm:w-[400px] mobile:flex-col w-[300px] border-[1px] border-[#f92e9e]"
            style={{ backgroundColor: review.bgColor }}
            onClick={() => openModal(review)}
          >
            <div className="res_icons w-[] mobile:w-[100%]">
              <img
                src={review.img}
                className="rounded-[100%]  overflow-hidden smm:w-[150px] h-[150px]"
                alt={review.name}
              />
            </div>
            <div className="w-[60%] modile:w-[100%]">
              <h3 className="res_tit text-[#f92e9e] mb-2 text-2xl">
                {review.name}
              </h3>
              <p className="res_small-txt mb-1 text-xl" style={{ color: review.textColor }}>
                {review.role}
              </p>
              <p className="res_txt text-gray-900">
                {review.text}
              </p>
            </div>
          </div>
        ))}
      </div>

     
    </div>
  );
}

export default Review;

