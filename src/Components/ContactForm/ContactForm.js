import React from "react";
import "./ContactForm.css";

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ваша логика обработки отправки формы
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your Name" />
      <input type="email" name="email" placeholder="Your Email" />
      <textarea name="message" placeholder="Your Message"></textarea>
      <button type="submit">Send Message</button>
    </form>
  );
}

export default ContactForm;
