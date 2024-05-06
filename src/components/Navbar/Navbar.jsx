// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";


const MyNavbar = () => {
  const [menu, setMenu] = useState("home");
const isAuth = localStorage.getItem("token")
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

 const handleLogout = () => {
  const token = localStorage.getItem("token")
  if(token){
    localStorage.clear()
    alert("Log out Success!!!")

  }
 }

  useEffect(() => {
    /* scroll to top function */
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <header className="flex border-b border-orange-400 py-4 sm:px-8 px-6 font-[sans-serif] min-h-[80px] tracking-wide relative z-50 bg-orange-500">
        <div className="flex flex-wrap items-center lg:gap-y-2 gap-2 w-full">
          <Link to="/">
            <img
              src={assets.logo}
              alt=""
              className="logo max-w-[60px] flex flex-wrap hover:scale-110 transition-transform duration-500"
            />
          </Link>

          <div
            id="collapseMenu"
            style={{ display: isOpen ? "block" : "none" }}
            className="lg:ml-10 max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
          >
            <button
              id="toggleClose"
              onClick={toggleMenu}
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>

            <ul className="lg:flex lg:gap-x-3 max-lg:space-y-3 max-lg:fixed max-lg:bg-black max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li className="mb-6 hidden max-lg:block">
                <Link to={"/"}>
                  <img src={assets.logo} alt="logo" className="max-w-[60px]" />
                </Link>
              </li>

              <li className="max-lg:border-b max-lg:border-orange-300 max-lg:py-3 px-3">
                <Link
                  to={"/"}
                  onClick={() => setMenu("home")}
                  className={`flex items-center hover:text-orange-100 font-sans font_bebas-neue font-semibold uppercase cursor-pointer text-[15px] gap-[10px] text-${
                    menu === "home" ? "white" : "white"
                  } ${isOpen ? "text-orange-900" : ""}`}
                >
                  {isOpen && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24px"
                      className="cursor-pointer fill-white"
                    >
                      <path d="M12 2L0 9l1 1 1.52-.89L2.36 11l1.14.66v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5h4v5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-8l1.14-.66L22 10l1-1-12-7zm-2 15v-6h4v6z" />
                    </svg>
                  )}
                  Home
                </Link>
              </li>

              <li className="max-lg:border-b max-lg:border-orange-300 max-lg:py-3 px-3 ">
                <Link
                  to={"/menu"}
                  onClick={() => setMenu("menu")}
                  className={`flex items-center gap-[10px] hover:text-orange-100 uppercase font-sans font_bebas-neue font-semibold cursor-pointer text-[15px] text-${
                    menu === "menu" ? "white" : "white"
                  } ${isOpen ? "text-orange-900" : ""}`}
                >
                  {isOpen && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24px"
                      className="cursor-pointer fill-white"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
                    </svg>
                  )}
                  Menu
                </Link>
              </li>

              {/* <li className="max-lg:border-b max-lg:border-orange-300 max-lg:py-3 px-3">
                <Link
                  to={"/dishes"}
                  onClick={() => setMenu("dishes")}
                  className={`flex items-center gap-[10px] hover:text-orange-100 uppercase cursor-pointer text-[15px] font-sans font_bebas-neue font-semibold text-${
                    menu === "dishes" ? "white" : "white"
                  } ${isOpen ? "text-orange-900" : ""}`}
                >
                  {isOpen && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24px"
                      className="cursor-pointer fill-black"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M20 6H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 1.99 2H20c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h15v10z" />
                    </svg>
                  )}
                  Dishes
                </Link>
              </li> */}

              {/* <li className="max-lg:border-b max-lg:border-orange-300 max-lg:py-3 px-3 flex items-center gap-1">
                <Link
                  to={"/mobileApp"}
                  onClick={() => setMenu("mobile-app")}
                  className={`flex items-center gap-[10px]  hover:text-orange-100 uppercase cursor-pointer text-[15px] font-sans font_bebas-neue font-semibold text-${
                    menu === "mobile-app" ? "white" : "white"
                  } ${isOpen ? "text-orange-900 " : ""}`}
                >
                  {isOpen && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24px"
                      className="cursor-pointer fill-white"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM9 18H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8-4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8-4H7V8h2zm4 0h-2V8h2zm4 0h-2V8h2z" />
                    </svg>
                  )}
                  Mobile-app
                </Link>
              </li> */}

              <li className="max-lg:border-b max-lg:border-orange-300 max-lg:py-3 px-3">
                <Link
                  to={"/contact"}
                  onClick={() => setMenu("contact-us")}
                  className={`flex items-center gap-[10px] hover:text-orange-100 uppercase cursor-pointer text-[15px] block font-sans font_bebas-neue font-semibold text-${
                    menu === "contact-us" ? "white" : "white"
                  } ${isOpen ? "text-black" : ""}`}
                >
                  {isOpen && (
                  <div className="">
<svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24px"
                      className="cursor-pointer fill-white"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                    </svg>
                  </div>  
                  )}
              Contact us
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex gap-x-6 gap-y-4 ml-auto">
            <Link
              to="/search"
              onClick={() => setMenu("search")}
              className={menu === "search" ? "active" : ""}
            >
              <div
                title="Search Something..."
                className="flex border-2 border-transparent hover:border-orange-300 focus-within:border-gray-400 rounded-full px-3 py-3 overflow-hidden max-w-52 max-sm:hidden"
              >
                {/* <input type='text' className='w-full text-sm bg-transparent outline-none pr-2' /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 192.904 192.904"
                  width="16px"
                  style={{ fontWeight: "bold" }}
                  className="cursor-pointer fill-white hover:scale-125 transition-transform duration-300"
                >
                  <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                </svg>
              </div>
            </Link>

            <div className="flex items-center space-x-8">
              {/* <span className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="cursor-pointer fill-[#333] inline"
              viewBox="0 0 64 64">
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000" />
            </svg>
            <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
          </span> */}

              <Link
                to="/cart"
                onClick={() => setMenu("cart")}
                className={`hover:scale-110 transition-transform duration-300 ${
                  menu === "cart" ? "active" : ""
                }`}
              >
                <span className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    className="cursor-pointer fill-white inline hover:shadow-sm"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                      data-original="#000000"
                    ></path>
                  </svg>
                  {/* <span className="absolute left-auto -ml-1 top-0 rounded-full bg-gray-800 px-1 py-0 text-xs text-white">
                    0
                  </span> */}
                </span>
              </Link>
     {isAuth ?  <button onClick={handleLogout} className="px-3 py-2 text-sm rounded-full text-orange-600 uppercase font-bold font-mono border-2 border-white bg-white  hover:shadow-lg hover:scale-110 transition-transform duration-300">
                 Log Out
                </button> : <Link to="/signin">
                <button className="px-3 py-2 text-sm rounded-full text-orange-600 uppercase font-bold font-mono border-2 border-white bg-white  hover:shadow-lg hover:scale-110 transition-transform duration-300">
                  Sign In
                </button>
              </Link>}      
            
               
          

              <button
                id="toggleOpen"
                onClick={toggleMenu}
                className="lg:hidden"
              >
                <svg
                  className="w-7 h-7"
                  fill="white"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default MyNavbar;