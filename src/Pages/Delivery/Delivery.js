import "./Delivery.css";
import video from "../../img/deliver.mp4";

function Delivery() {
  return (
    <section className="Delivery p-10">
      <h1 className="text-5xl font-bold mb-20 flex justify-center text-[#f92e9e]  mmm:text-3xl text-center">
        {" "}
        Worldwide Shipping
      </h1>
      <div className="Delivery  justify-between flex">
        <div className="Delivery_video mt-15 flex justify-center items-center col:flex-wrap">
          <video
            width="50%"
            height="auto"
            controls
            autoPlay
            muted
            className=" shadow-2xl rounded-lg border-[#c0c0c0] border-none col:w-[100%]"
          >
            <source src={video} type="video/mp4" />
          </video>
          <div className=" p-5  flex-col justify-start text-center">
            <p className="text-gray mb-4 text-[33px]">
              We offer several delivery options:
            </p>
            <p className="text-gray-800 mb-4  text-[20px]">
              courier delivery,
            </p>
            <p className="text-gray-800  mb-4  text-[20px]">
              postal delivery,
            </p>
            <p className="text-gray-800 mb-4   text-[20px]">
              pickup from our store
            </p>
            <p className="text-gray mb-4  text-[20px]">
              When placing an order, you can choose the method most convenient
              for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Delivery;
