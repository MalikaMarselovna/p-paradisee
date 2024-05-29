import React from "react";
import {
  LocalMallOutlined,
  FavoriteBorderOutlined,
  HowToRegOutlined,
} from "@mui/icons-material";
import Logo from "../img/logo.svg";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search"; // Переименовали импорт
import { Link } from "react-router-dom";
import Auth from "./Auth/Auth";
import CartLink from "./CartLink/CartLink";
import Search from "./Search/Search"; // Оставили этот импорт без изменений

function Navbar() {
  const style = "text-[14px] cursor-pointer ml-[25px] ease-in duration-600";

  return (
    <div className="navbar shadow-md relative z-10">
      <div className="wrapper  pb-5 pt-5 flex justify-between items-center container">
        {/* logo */}
        <div className="center flex-1 text-center">
          <div className="logo font-bold text-lg">
            <Link to="/">
              <img src={Logo} alt="logo" className="w-[200px] cursor-pointer" />
            </Link>
          </div>
        </div>

   
        <Search />

        {/* right div */}
        <div className="right flex flex-1 items-center justify-end">
          <Auth className={style} />
          
          <CartLink className={style} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
