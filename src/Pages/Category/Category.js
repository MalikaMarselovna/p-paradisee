import { useMatch } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import { useContext } from "react";
import { AppContext } from "../../App";
import ProductList from "../../Components/ProductList/ProductList";
import CategoryList from "../../Components/CategoryList/CategoryList";


export default function Category() {
  const { params } = useMatch("/categories/:slug");

  const { categories } = useContext(AppContext);

  const category = categories.find(
    (category) => category.slug === params.slug
  );

  if (!category) {
    return <NotFound />;
  }

  return (
    <div className="Category">
      <CategoryList ></CategoryList>
      <h2 className="title text-center font-bold text-[40px] text-[#f92e9e]  ">{category.name}</h2>
      <ProductList  category={category} className="flex flex-wrap"/>
    </div>
  )
}