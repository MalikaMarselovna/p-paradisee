import { useContext, useEffect } from "react";
import { AppContext } from "../App";
import ProductList from "./ProductList/ProductList"; // Ensure correct import

export default function CategoryAll() {
  const { products } = useContext(AppContext);

  useEffect(() => {
    console.log('Products:', products); // Log products to check the data
  }, [products]);

  if (!products) {
    return <div>Loading...</div>; // Handle the loading state
  }

  return (
    <div className="CategoryAll container">
      <h2 className="text-3xl font-bold mb-5">All Products</h2>
      <ProductList products={products} />
    </div>
  );
}


