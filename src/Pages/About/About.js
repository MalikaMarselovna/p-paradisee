import "./About.css";

function About() {
  return (
    <div className=" ">
      <h1 className="text-5xl font-bold mb-4 flex justify-center text-[#f92e9e]">
        Welcome to Plush Paradise!
      </h1>
      <div className="p-5 flex flex-col items-center justify-center">
        <p className="text-gray-800 mb-4 text-[20px]">
          In our store you will find the softest and cutest plush knitted toys
          for you and your loved ones.
        </p>
        <p className="text-gray-800 mb-4 text-[20px]">
          Each toy is carefully crafted by our experienced craftsmen with love
          and care for details.
        </p>
        <p className="text-gray-800 mb-4 text-[20px]">
          Immerse yourself in a world of tenderness and joy with Plush Paradise!
        </p>
      </div>

      <div className="flex flex-1 items-center justify-center min-w-[280px] min-h-[350px] overflow=hidden rounded-md shadow-lg m-2 relative">
        <img
          src="https://i.pinimg.com/236x/71/59/7f/71597fa7d2a008f4a7820c5d31e36f5d.jpg"
          alt=""
          className="w-[100%] h-[100%] overflow-hidden rounded-md ml-2"
        />
        <img
          src="https://i.pinimg.com/236x/16/69/15/1669156e6f3c361327393e0c2fb2236f.jpg"
          alt=""
          className="w-[100%] h-[100%] overflow-hidden rounded-md ml-2"
        />
        <img
          src="https://i.pinimg.com/236x/6d/a4/04/6da404cc126a997fa6f9236f5f534b9f.jpg"
          alt=""
          className="w-[100%] h-[100%] overflow-hidden rounded-md ml-2"
        />
        <img
          src="https://i.pinimg.com/564x/5b/a4/8d/5ba48d3701d0294c18446fe321bfe329.jpg"
          alt=""
          className="w-[100%] h-[100%] overflow-hidden rounded-md ml-2"
        />
      </div>
    </div>
  );
}

export default About;
