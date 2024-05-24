import { useContext, useState } from "react";
import CartList from "../../Components/CartList/CartList";
import OrderForm from "../../Components/OrderForm/OrderForm";
import CartSidebar from "../../Components/CartSidebar/CartSidebar";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

export function Cart() {
  const [modalActive, setModalActive] = useState(false);
  const { cart, user } = useContext(AppContext);

  if (Object.keys(cart).length === 0) {
    return (
      <div className="container mx-auto p-10">
        <h1 className="text-5xl font-bold mb-4 flex justify-center text-[#f92e9e]">
          Your Cart
        </h1>
        <div className="flex items-center justify-center">
          <p>Your cart is empty.</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container mx-auto p-10 relative">
        <h1 className="text-5xl font-bold mb-4 flex justify-center text-[#f92e9e]">
          Your Cart
        </h1>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <CartList />
          </div>
          <div className="col-span-1">
            <CartSidebar
              onOrder={() => setModalActive(true)}
              className="fixed top-0 right-0 bottom-0 w-[30%] overflow-y-auto"
            />
          </div>
        </div>
        <OrderForm active={modalActive} setActive={setModalActive} />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-10 relative">
      <h1 className="text-5xl font-bold mb-10 flex justify-center text-[#f92e9e]">
        Your Cart
      </h1>
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <CartList />
        </div>
        <div className="col-span-1">
          <CartSidebar
            onOrder={() => setModalActive(true)}
            className="fixed top-0 right-0 bottom-0 w-[30%] overflow-y-auto"
          />
        </div>
      </div>
      <OrderForm active={modalActive} setActive={setModalActive} />
    </div>
  );
}
