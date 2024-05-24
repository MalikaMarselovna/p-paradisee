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
    <div className="CartSidebar h-[100%] p-10 bg-gray-100 border-[2px] border-[#f92e9e] rounded-md">
      <div className="sidebar-content ">
        <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
        <p>Total Items: {totalItems}</p>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
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
