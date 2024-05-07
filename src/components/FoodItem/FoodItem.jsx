
import React, { useContext, useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const FoodItem = ({ id, title, price, description, image,category }) => {
  // const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

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
//         'https://light-foal-loafers.cyclic.app/cart/create',
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
const handleCartData = async () => {
  const token = localStorage.getItem("token");
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
    quantity:1
  };

  let found = JSON.parse(localStorage.getItem("cart"));

  console.log("found", found);
  if (found === null) {
    localStorage.setItem("cart", JSON.stringify([finalData]));
    alert("product added to cart");
  } else {
    // Check if the product already exists in the cart
    const productExists = found.some(item => item._id === id);
    if (productExists) {
      alert("Product already in cart");
      return;
    }
   
    found.push(finalData); // Push the new data to the existing array
    localStorage.setItem("cart", JSON.stringify(found));
    alert("product added to cart");
  }

  // try {
  //   const response = await axios.post(
  //     "https://light-foal-loafers.cyclic.app/cart/create",
  //     finalData,
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     }
  //   );

  //   if (response.data.state) {
  //     toast.success("product is added in cart");
  //     // onClose();
  //     // toggleTheme()
  //   } else {
  //     toast.error("product is Already in your cart");
  //   }
  // } catch (error) {
  //   console.log("error", error);
  // }
};



  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image"  src={image} alt="" />
        {/* {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )} */}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{title}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">₹{price}</p>
        <p className="food-item-price">{category}</p>
        <div className="text-center"><button className="border-2 border-black bg-black text-white p-1 border-r-10" onClick={handleCartData}>Add To Cart</button></div>
      </div>
    </div>
  );
};

export default FoodItem;
