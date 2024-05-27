import { useEffect, useContext, useState, useRef } from "react";
import { AppContext } from "../../App";
import ProductItem from "../ProductItem/ProductItem";
import "./Search.css";
import SearchIc from "@mui/icons-material/Search";


export default function Search() {
  const style = "text-[14px] cursor-pointer ease-in duration-600";
  const { products } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setSearchResults([]);
      document.body.style.overflow = "auto";
    } else {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filteredProducts.slice(0, 5));
      document.body.style.overflow = "hidden";
    }
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchTerm("");
      setSearchResults([]);
      document.body.style.overflow = "auto";
    }
  };

  const handleLinkClick = () => {
    setSearchTerm("");
    setSearchResults([]);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="Search">
      <div className="left flex flex-1 items-center">
        <div
          className="searchInput flex border-[2px] border-solid border-[#f92e9e] rounded-[5px] items-center ml-[10px] p-[5px] transition-all"
          ref={searchRef}
        >
          <input
            type="text"
            className="input outline-none text-center w-[430px]"
            placeholder="What do you want?"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button type="button">
            <SearchIc className="text-[#f92e9e]" style={{ fontSize: "22px" }} />
          </button>
        </div>
      </div>
      {searchTerm && <div className="searchOverlay"></div>}
      {searchTerm && searchResults.length === 0 && (
        <div className="NoResults">No results found</div>
      )}
      {searchTerm && searchResults.length > 0 && (
        <div className="SearchResults flex flex-col">
          {searchResults.map((product) => (
            <ProductItem 
              key={product.id}
              product={product}
              onLinkClick={handleLinkClick}
              
            />
           
          ))}
        </div>
      )}
    </div>
  );
}

