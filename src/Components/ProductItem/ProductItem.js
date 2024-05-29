import React from "react";
import { NavLink } from "react-router-dom";
import "./ProductItem.css";

export default function ProductItem({ product }) {
  if (!product || !product.slug) {
    console.error('Invalid product data:', product); // Log error for invalid product data
    return null;
  }

  return (
    <div className="ProductItem bg-grey-300">
      <NavLink to={"/products/" + product.slug}>
        <div className="Product cartItem flex justify-between items-center text-center">
          <div className="block_img">
            <img src={product.picture} alt={product.name} />
          </div>
          <div className="content">
            {product.name}
            <span className="ml-5 text-[#f92e9e]">{product.price} $</span>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
