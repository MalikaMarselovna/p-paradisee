import "./Menu.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

function Menu() {
  const location = useLocation();
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.pageYOffset > headerRef.current.offsetTop) {
          headerRef.current.classList.add("sticky");
        } else {
          headerRef.current.classList.remove("sticky");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav ref={headerRef} id="myHeader" className="Menu bg-[#f92e9e]">
      <div className="container">
      <ul className="flex flex-1 items-center justify-around" role="none">
          <li>
            <Link to="/" aria-current={location.pathname === "/" ? "page" : undefined}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" aria-current={location.pathname === "/about" ? "page" : undefined}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/categorypages" aria-current={location.pathname === "/categorypages" ? "page" : undefined}>
              Our Products
            </Link>
          </li>
          <li>
            <Link to="/delivery" aria-current={location.pathname === "/delivery" ? "page" : undefined}>
              Delivery
            </Link>
          </li>
          <li>
            <Link to="/contacts" aria-current={location.pathname === "/contacts" ? "page" : undefined}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;



