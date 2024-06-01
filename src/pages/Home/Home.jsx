import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import AppDownload from "../../components/AppDownload/AppDownload";
// import useWindowSize from 'react-use/lib/useWindowSize'
import { useWindowSize } from "react-use";

import Confetti from 'react-confetti'
const Home = () => {
  const [category, setCategory] = useState("All");
  const {  height } = useWindowSize()
  const today = new Date();
  const todayDate = today.toISOString().split('T')[0];
  
  const width = window.innerWidth;

  const confettiProps = {
    width: width ,
    height:2000,
    className: "enogration",
    style: { position: 'absolute', zIndex: '999' }
  };

  // Adjusting number of particles based on screen width
  if (width > 1024) {
    confettiProps.numberOfPieces = 400;
  } else {
    confettiProps.numberOfPieces = 200;
  }

  return (

    
    <div>
  {todayDate == "2024-06-01" && (<Confetti {...confettiProps} />)}      
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      {/* <FoodDisplay category={category} /> */}
      <AppDownload/>
    </div>
  );
};

export default Home;

