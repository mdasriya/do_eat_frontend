
import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import Search from "./pages/Search/Search";
// import Cart from "./pages/Cart/Cart";
// import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
// import Contact from "./pages/contact/Contact";
import Footer from "./components/Footer/Footer";
// import LoginPopup from "./components/LoginPopup/LoginPopup";
// import Dishes from "./components/dishes_new/Dishes";
// import SignIn from "./components/SignIn/SignIn";
// import SignUp from "./components/Signup/SignUp";
import { ToastContainer } from "react-toastify";
import MainRoutes from "./components/MainRoutes/MainRoutes";

const App = () => {

  return (
    <>
      <div className="app">
      <ToastContainer />
        <Navbar/>
        <MainRoutes />
      <Footer />
      </div>
    </>
  );
};

export default App;
