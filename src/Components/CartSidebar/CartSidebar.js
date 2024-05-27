import { useContext } from "react";
import { AppContext } from "../../App";
import "./CartSidebar.css"; // Make sure to import your CSS file
import { Link } from "react-router-dom";

function CartSidebar({ onOrder }) {
  const { products, cart } = useContext(AppContext);

  const totalPrice = Object.keys(cart).reduce((total, productId) => {
    const product = products.find((product) => product.id === productId);
    if (!product) return total; // Ensure product exists
    return total + product.price * cart[productId];
  }, 0);

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <div className="CartSidebar h-[99%] pl-10 pr-5 border-[2px] border-none rounded-md ">
      <div className="sidebar-content ">
        <h2 className="text-4xl mb-4 text-[#f92e9e]">Cart Summary</h2>
        <p className="text-[25px]">Total Items: {totalItems}</p>
        <p className="text-[25px]"> Total Price: ${totalPrice.toFixed(2)}</p>
        <button className="btn mt-4 w-full text-center" onClick={onOrder}>
          Order and Checkout
        </button>
        <Link to="/">
          {" "}
          <button className="btn mt-4 p-2 w-full text-center">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CartSidebar;
