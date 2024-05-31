
import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { Helmet } from 'react-helmet-async';
import MainRoutes from "./components/MainRoutes/MainRoutes";

const App = () => {

  return (
    <>
      <div className="app">
      <Helmet>
        <title>Do Eat - Food Delivery App</title>
        <meta name="description" content="Do Eat is your go-to app for fast and reliable food delivery." />
      </Helmet>
      <ToastContainer />
        <Navbar/>
        <MainRoutes />
      <Footer />
      </div>
    </>
  );
};

export default App;
