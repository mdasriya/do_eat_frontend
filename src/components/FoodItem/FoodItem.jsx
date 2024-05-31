
import React, { useContext, useEffect, useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const FoodItem = ({ id, title, price, description, image,category,discount,cutprice }) => {
  const [visi, setVisi] = useState(false)
  const [render, setRender] = useState(false)
  const navigate = useNavigate()
  const val = useContext(StoreContext)
  const {countcart, cartValue} = val

  // const handleAddToCart = (e) => {
  //   e.preventDefault(); // Prevent default behavior
  //   addToCart(id);
  //   // alert("dish added in cart")
    
  // };

  // const handleRemoveFromCart = (e) => {
  //   e.preventDefault(); // Prevent default behavior
  //   removeFromCart(id);
  //   // alert("dish remove in cart")
  // };

//   const handleCartData = async () => {
//    const token = localStorage.getItem("token")
//    console.log({ id, title, price, description, image })
   
//     if (!token) {
//       alert("Login first")
//       return
//     }
 
    
//     let finalData = {
//       _id:id,
//       image,
//       price,
//       title,
//     };

//    const found = JSON.parse(localStorage.getItem("cart"))
 

// console.log("found", found)
// if(found === null){
//   localStorage.setItem("cart", JSON.stringify([finalData]))
//   alert("no cart product")
 
// }else{
// let finalData2 = found.push(finalData)
// localStorage.setItem("cart", JSON.stringify(finalData2))
// alert("have")
// }

//     // const fountCartData = JSON.parse(localStorage.getItem("cart"))
   

//     try {
//       const response = await axios.post(
//         'https://do-eat-backen.onrender.com/cart/create',
//         finalData,
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         }
//       );

//       if (response.data.state) {
//         toast.success("product is added in cart")
//         // onClose();
//         // toggleTheme()
//       } else {
//         toast.error("product is Already in your cart")
//       }
//     } catch (error) {
//      console.log("error",error)

//     }
//   };

const renderComponent = () => {
  setRender(prev => !prev)
}


const handleCartData = async () => {
  // const token = localStorage.getItem("token");
  
  renderComponent()
  console.log({ id, title, price, description, image });

  // if (!token) {
  //   alert("Login first");
  //   return;
  // }

  let finalData = {
    _id: id,
    image,
    price,
    title,
    quantity:1,
    discount
  };

  let found = JSON.parse(localStorage.getItem("cart"));

  // console.log("found", found);
  if (found === null) {
    localStorage.setItem("cart", JSON.stringify([finalData]));
    toast.success("product added to cart");
  } else {
    // Check if the product already exists in the cart
    const productExists = found.some(item => item._id === id);
    if (productExists) {
      toast.error("Product already in cart");
      return;
    }
   
    found.push(finalData); // Push the new data to the existing array
    localStorage.setItem("cart", JSON.stringify(found));
    toast.success("product added to cart");
  }
  cartValue()
 
};

useEffect(()=> {
  let found = JSON.parse(localStorage.getItem("cart"));
  if(found?.length>0){
    setVisi(true)
  }else{
    setVisi(false)
  }
},[render])

  return (
    <DIV>
   {visi &&  <div className="checkout_button absolute left-[90%] ">
    {/* <button className="fixed border-2 border-black bg-black text-white p-1 rounded-md">Checkout</button> */}
    <button onClick={()=>navigate("/cart")} type="button" className="checkout_button  fixed z-10 text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
CHECKOUT
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</button>
    </div>}
    <div className="food-item relative overflow-hidden">
      <div className="food-item-img-container cursor-pointer">
        <img className="food-item-image"  src={image} alt="" />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{title}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
      
        <div className="flex gap-3">
       <p className="text-gray-500 text-xl"> <del>₹{cutprice}</del></p>
       <p className=" text-green-600 text-xl">₹{price}</p>
        </div>

        <p className="food-item-price">{category}</p>
        <div className="text-center"><button className="border-2 rounded-md border-black bg-black text-white p-1 border-r-10" onClick={handleCartData}>Add To Cart</button></div>
      </div>
      <div className="absolute top-4 bg-green-600 items-center left-[82%]  w-[59px] h-[30px]  text-white rounded-md text-center">
<p className="mt-1">{discount}%{" "}off</p>
</div>
    </div>

    </DIV>
  );
};

export default FoodItem;

const DIV = styled.div`
  /* Basic Mobile View Media Query */
@media (max-width: 767px) {
    /* Your mobile-specific styles go here */
    .checkout_button{
      left: 65%;
      top: 83%;
      /* border: 2px solid red; */
    }
}


`
