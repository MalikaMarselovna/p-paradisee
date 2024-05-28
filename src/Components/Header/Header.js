import "./Header.css";
import Logo from "../Logo/Logo";
import CartLink from "../CartLink/CartLink";
import Auth from "../Auth/Auth";
import Menu from "../Menu/Menu";
import Navbar from "../Navbar";
import Announce from "../Announce";

export default function HeaderSection() {
  return (
    <header className="Header">
    
        <div className=" ">
          <Announce />
          <Navbar />
          <Menu />
        </div>
    
    </header>
  );
}
