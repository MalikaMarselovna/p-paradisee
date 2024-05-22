import "./Home.css";
import Slider from "../../Components/Slider";
import Products from "../../Components/Products";
import Categories from "../../Components/Categories";

function Home() {
  return (
    <>
      <Slider />

      <Categories />

      <h1 className=" mt-10 mb-10 text-4xl font-bold mb-4 flex justify-center text-[#f92e9e]">
        Our Cute Toys
      </h1>
      <Products />
    </>
  );
}

export default Home;
