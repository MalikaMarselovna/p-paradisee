import React from "react";
import { LocationOnOutlined, EmailOutlined, LocalPhoneOutlined } from "@mui/icons-material";
import ContactForm from "../../Components/ContactForm/ContactForm";
import "./Contacts.css";

function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="contact-item">
        <LocationOnOutlined className="icon" />
        <span className="info-text">State of Karakol</span>
      </div>
      <div className="contact-item">
        <EmailOutlined className="icon" />
        <a href="mailto:mmukashova1@gmail.com" className="info-link">plushp@gmail.com</a>
      </div>
      <div className="contact-item">
        <LocalPhoneOutlined className="icon" />
        <a href="tel:+996704884698" className="info-link">+996-704-884-698</a>
      </div>
    </div>
  );
}

function Contacts() {
  return (
    <div className="contacts-container">
      <h1 className="main-title">It Is Very Easy To Contact Us</h1>

      <div className="info-section">
        <div className="info-text">
          <p className="info-description">Just call, write, or come to our office</p>
          <p className="info-description">Available daily from 9:00 to 18:00</p>
        </div>

        <ContactInfo />
      </div>

      <div className="contact-form-section">
        <h2 className="contact-title">Contact Us</h2>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contacts;
