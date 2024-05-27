import "./Contacts.css";
import video from "../../img/contact.mp4";
import ContactForm from "../../Components/ContactForm/ContactForm";
import {
  Facebook,
  Instagram,
  LocationOnOutlined,
  LocalPhoneOutlined,
  Pinterest,
  Twitter,
  YouTube,
  EmailOutlined,
  WhatsApp,
} from "@mui/icons-material";
function Contact() {
  return (
    <section className="Delivery p-10">
      <h1 className="text-5xl font-bold mb-20 flex justify-center text-[#f92e9e]">
        {" "}
        It Is Very Easy To Contact Us
      </h1>
      <div className="Delivery  flex justify-between mb-20">
        <div className="Delivery_video mt-15 flex justify-center items-center">
          <video
            width="50%"
            height="auto"
            controls
            autoPlay
            muted
            className=" shadow-2xl rounded-lg border-[#c0c0c0] border-none "
          >
            <source src={video} type="video/mp4" />
          </video>
          <div className="info-text  p-5 flex flex-col justify-center items-center text-center">
            <p className="text-[33px] mb-4">
              Just call, write, or come to our office.
            </p>
            <p className=" text-[27px]">
              Available daily from <u>9:00</u> to <u>18:00</u>
            </p>
            <div className=" p-5  ">
            <div className="flex m-3">
              <LocationOnOutlined className="text-[#f92e9e]" />
              <a
                href="https://maps.app.goo.gl/jEnMYyCj8hDEcnic8"
                className="pl-3 hover:text-[#16ffbd]"
              >
                State of Karakol
              </a>
            </div>
            <div className="flex m-3">
              <EmailOutlined className="text-[#f92e9e]" />
              <a
                href="mailto:mmukashova1@gmail.com"
                className="pl-3 hover:text-[#16ffbd]"
              >
                plushp@gmail.com
              </a>
            </div>
            <div className="flex m-3">
              <LocalPhoneOutlined className="text-[#f92e9e]" />
              <a href="tel:+996704884698" className="pl-3 hover:text-[#16ffbd]">
                +996-704-884-698
              </a>
            </div>
            <div className="flex m-3">
              <WhatsApp className="text-[#f92e9e]" />
              <a
                href="https://wa.me/+996704884698"
                className="pl-3 hover:text-[#16ffbd]"
              >
                +996-704-884-698
              </a>
            </div>
          </div>
          </div>
          
        </div>
      </div>
      <div className='w-[100%] flex justify-center items-center'>


       <ContactForm className="100%"/>

       
      </div>
      <h2 className=" text-3xl  mb-7 text-center text-[#f92e9e]">Our Location</h2>
      <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.396313828574!2d78.38404677593776!3d42.48312647118172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38865b5c92042535%3A0x78a9de24f2cc9c3b!2sIT-Academy%20Karakol!5e0!3m2!1sru!2skg!4v1715444746148!5m2!1sru!2skg"
          className="w-[100%] h-[500px] border-0 flex justify-center items-center border-2 border-[#fff] rounded-lg shadow-2xl"
        ></iframe>



    </section>
  );
}

export default Contact;
