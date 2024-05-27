import React from "react";
import "./ContactForm.css";

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ваша логика обработки отправки формы
  };

  return (
    <form className="flex flex-col w-[50%] h-[510px] border-[2px] border-[#f92e9e] rounded-[10px] p-5 mb-10" onSubmit={handleSubmit}>
            <h2 className=" text-3xl  mb-4 flex  text-[#f92e9e]">Contact Us</h2>
      <input type="text" name="name" className="mb-5 mt-10 p-3  outline-[#f92e9e]" placeholder="Your Name" />
      <input className="- mb-5 p-3  outline-[#f92e9e]" type="email" name="email" placeholder="Your Email" />
      <textarea  className="mb-7  p-5  outline-[#f92e9e]" name="message" placeholder="Your Message"></textarea>
      <button className="btn w-[200px]" type="submit">Send Message</button>
    </form>
  );
}

export default ContactForm;
