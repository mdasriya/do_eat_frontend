import React, {useEffect, useState } from "react";
import "./FoodDisplay.css";
import FoodItem from "../FoodItem/FoodItem";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const FoodDisplay = ({ category }) => {
  const [dishes, setDishes] = useState([])
 
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);
const navigate = useNavigate()


const fetchDishes = () =>  {
  axios.get("https://do-eats-backend.vercel.app/yantra")
  .then((res)=> {
    console.log(res.data)
    setDishes(res.data)
  })
  .catch((error)=> {
    console.log(error)
  })
 }
 useEffect(()=>{
fetchDishes()
 },[])



  // Logic for displaying products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = dishes.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {currentProducts.map((item, index) => {
          console.log("quan", item.quantity)
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                quantity1={item.quantity}
              />
            );
          }
          return null;
        })}
     <Link to={"/menu"}><span className="explore_more" onClick={()=>navigate("/menu")}>View More...</span></Link>   
      </div>
    
    </div>
  );
};

export default FoodDisplay;
