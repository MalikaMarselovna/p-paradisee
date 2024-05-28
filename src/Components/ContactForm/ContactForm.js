import React, { useState, useEffect } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Add your form submission logic here
      console.log("Form Data Submitted:", formData);
      setFormStatus("Message sent successfully!");

      // Reset form fields
      setFormData({
        name: "",
        email: "",
        message: ""
      });

      // Remove success message after 5 seconds
      setTimeout(() => {
        setFormStatus("");
      }, 3000);
    } else {
      setFormStatus("Please fill out all fields.");
    }
  };

  return (
    <form
      className="flex flex-col w-[50%] h-[510px] border-[2px] border-[#f92e9e] rounded-[10px] p-5 mb-10"
      onSubmit={handleSubmit}
    >
      <h2 className="text-3xl mb-4 flex text-[#f92e9e]">Contact Us</h2>
      <input
        type="text"
        name="name"
        className="mb-5 mt-10 p-3 outline-[#f92e9e]"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        className="mb-5 p-3 outline-[#f92e9e]"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <textarea
        name="message"
        className="mb-7 p-5 outline-[#f92e9e]"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleInputChange}
      ></textarea>
      <button className="btn w-[200px]" type="submit">
        Send Message
      </button>
      {formStatus && <p className="mt-4 text-[#f92e9e]">{formStatus}</p>}
    </form>
  );
}

export default ContactForm;



