import "./About.css";
import Accordion from "../../Components/Accordion/Accordion";
import Croched from "../../img/croched.jpg";
import CrochedHeart from "../../img/knittingjpg.jpg";
import video from "../../img/crocheting-woman.mp4";

function About() {
  return (
    <>
    <section className="Delivery p-10">
      <h1 className="text-5xl font-bold mb-20 flex justify-center text-[#f92e9e]">
        {" "}
        Welcome to Plush Paradise!
      </h1>
      <div className="flex justify-between items-center mb-20">
        <div className="flex w-[50%]">
          {" "}
          <video
            width="100%"
            height="auto"
            controls
            autoPlay
            muted
            className=" shadow-2xl rounded-lg border-[#c0c0c0] border-none "
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className="w-[45%] flex items-center">
          <p className="text-gray-800 flex  justify-center mb-4 text-center text-[20px] ">
            In our store you will find the softest and cutest plush knitted toys
            for you and your loved ones.
            <br />
            <br></br>Each toy is carefully crafted by our experienced craftsmen
            with love and care for details.
            <br />
            <br></br>
            Immerse yourself in a world of tenderness and joy with Plush
            Paradise!
          </p>
        </div>
      </div>

ч
      <div className="justify-between items-center mt-20">
        <h4 className=" text-[#f92e9e] text-center text-3xl">
          You Ask, We Answer
        </h4>
        <h3 className="mb-8 text-center text-4xl text-[#16ffbd] ">
          Frequently Asked Questions
        </h3>
        <div className="w-[100%] flex">
          <Accordion className="w-[50%] " />
        </div>
     
      </div>
    </section>
       <div className="w-[100%] flex justify-between items-center mt-20">
        
       <div className="flex justify-center">
       <div className="w-[80%]">
         <p className="text-[#f92e9e] flex justify-center mb-4 text-center text-[27px] ">
           If you have any questions, don't hesitate to contact us! We are
           always happy to help and answer all your questions.
         </p>
         <p className="text-[#f92e9e] flex  justify-center mb-10 text-center text-[30px] ">
           {" "}
           With love Push Paradise 
         </p>
       </div>
       </div>
     </div>
     </>
  );
}

export default About;
