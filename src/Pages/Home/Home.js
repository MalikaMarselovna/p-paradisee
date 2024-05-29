import "./Home.css";
import Slider from "../../Components/Slider";
import Products from "../../Components/Products";
import Categories from "../../Components/Categories";
import Review from "../../Components/Reviews/Review";
import CategoryPage from "../../Components/CategoryPage"

function Home() {
  return (
    <>
      <Slider />
      <h2 className="mt-20 mb-10 text-4xl font-bold mb-4 flex justify-center text-[#f92e9e]">What We Have For Sale?</h2>

      <CategoryPage/>

      <h2 className=" mt-20 mb-10 text-4xl font-bold mb-4 flex justify-center text-[#f92e9e]">
        Our Cute Toys
      </h2>
      <Products />
      <div className="cardabout border-[2px] border-[#f92e9e] mt-10 mb-10  bg-[#f92e9e] shadow-lg p-20 rounded-[10px] ">
          <p className="text-2xl text-center text-[#16ffbd] ">
            Our craftsmen put their soul into every detail, creating unique and
            inimitable products that not only delight the eye, but also give
            warmth and comfort. The hypoallergenic thread used for knitting does
            not contain harmful chemicals and dyes, which makes the toy
            absolutely safe for everyone 
          </p>
        </div>
        <Review></Review>
    </>
  );
}

export default Home;
