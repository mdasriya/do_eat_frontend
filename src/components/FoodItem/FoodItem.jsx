
import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const FoodItem = ({ id, title, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

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

  const handleCartData = async () => {
   const token = localStorage.getItem("token")
   console.log({ id, title, price, description, image })
   
    if (!token) {
      alert("Login first")
      return
    }
 
    
    let finalData = {
      _id:id,
      image,
      price,
      title,
    };
    try {
      const response = await axios.post(
        'http://localhost:4000/cart/create',
        finalData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      if (response.data.state) {
       alert("product is added in cart")
        // onClose();
        // toggleTheme()
      } else {
      alert("product is Already in your cart")
      }
    } catch (error) {
     console.log("error",error)
    }
  };


  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
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
        <div className="text-center"><button className="border-2 border-black bg-black text-white p-1 border-r-10" onClick={handleCartData}>Add To Cart</button></div>
      </div>
    </div>
  );
};

export default FoodItem;
