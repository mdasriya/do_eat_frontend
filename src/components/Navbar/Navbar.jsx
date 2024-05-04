// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { FaCartShopping } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
const navigate = useNavigate()


useEffect(()=> {
  /* scroll to top function */
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
},[])

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          <a href="#">Home</a>
        </Link>
        {/* <Link
          href=""
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </Link> */}
        <Link
          to="/menu"
          onClick={() => setMenu("dishes")}
          className={menu === "menu" ? "active" : ""}
        >
          <a>Menu</a>
        </Link>

        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile-app
        </a>
        <a
          href=""
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>
      <div className="navbar-right">
        <Link to="/search" onClick={() => setMenu("search")}
          className={menu === "search" ? "active" : ""}>
          <img src={assets.search_icon} alt="" />
        </Link>
        <div className="navbar-search-icon">
          <Link to="/cart" onClick={() => setMenu("cart")}
          className={menu === "cart" ? "active" : ""}>
            <FaCartShopping className="w-[32px]" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={()=> navigate("/signin")}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;