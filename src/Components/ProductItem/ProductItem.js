import { NavLink } from "react-router-dom";
import "./ProductItem.css";

export default function ProductItem({ product, onLinkClick }) {
  return (
    <div className="ProductItem bg-grey-300">
      <NavLink to={"/products/" + product.slug} onClick={onLinkClick}>
        <div className="Product cartItem flex justify-between items-center text-center">
          <div className="block_img">
            <img src={product.picture} alt={product.name} />
          </div>
          <div className="content flex justify-center items-center ">
            {product.name}
            <span className="ml-7 text-[#f92e9e]">{product.price} $</span>
          </div>
        </div>
      </NavLink>
    </div>
  );
}