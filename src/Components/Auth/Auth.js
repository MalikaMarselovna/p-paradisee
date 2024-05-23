import "./Auth.css";
import { useContext } from "react";
import { LogIn, LogOut } from "../../firebase";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

export default function Auth() {
  const { user } = useContext(AppContext);

  return (
    <div className="Auth flex">
      {!user ? <button className="Sign-in_ic" onClick={LogIn}></button> : null}
      {user ? <span className="text-[#f92e9e] text-[14px] flex items-center"><Link to="/orders">{user.displayName}</Link></span> : null}
      {user ? <button className="icon"><Link to="/orders"><i class="fa-solid fa-user" /></Link></button> : null}
      {user ? <button className="Sign-out_ic" onClick={LogOut}></button> : null}
    </div>
  );
}