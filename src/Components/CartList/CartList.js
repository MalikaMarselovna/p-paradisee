import "./CartList.css";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import { useContext } from "react";

export default function CartList() {
  const { products, cart, setCart } = useContext(AppContext);

  const onQuantityChange = (product, qty) => {
    if (qty >= 1 && qty <= 100) {
      setCart({
        ...cart,
        [product.id]: qty,
      });
    }
  };

  const onItemRemove = (product) => {
    const newCart = { ...cart };
    delete newCart[product.id];
    setCart(newCart);
  };

  const productIds = Object.keys(cart);

  const output = products
    .filter((product) => productIds.includes(product.id))
    .map((product) => (
      <div className="cartItem flex justify-between items-center text-center" key={product.id}>
        <Link to={"/products/" + product.slug}>
          <img src={product.picture} alt={product.name} />
        </Link>
        <Link className="tit" to={"/products/" + product.slug}>{product.name}</Link>

        <div className="inputs ml-20 mr-10 w-[400px]">
          <div className="shadow-md mr-10 flex">
            <button
              onClick={() => onQuantityChange(product, cart[product.id] - 1)}
              className="bg-[#f92e9e] text-white w-8 flex items-center justify-center cursor-pointer rounded-l-md outline-none"
            >
              -
            </button>
            <input
              className="text-center flex items-center justify-center border-[1px] border-[#f92e9e] outline-none w-[60px]"
              name="num"
              type="text"
              value={cart[product.id]}
              min={1}
              onChange={(event) =>
                onQuantityChange(product, parseInt(event.target.value, 10))
              }
            />
            <button
              onClick={() => onQuantityChange(product, cart[product.id] + 1)}
              className="bg-[#f92e9e] text-white w-8 flex items-center justify-center cursor-pointer rounded-r-md outline-none"
            >
              +
            </button>
          </div>
          <span className="w-[150px]">${(cart[product.id] * product.price).toFixed(2)}</span>
          <button
            className="Delate_ic cursor-pointer "
            onClick={() => onItemRemove(product)}
          >
          </button>
        </div>
      </div>
    ));

  return <div className="CartList">{output}</div>;
}


