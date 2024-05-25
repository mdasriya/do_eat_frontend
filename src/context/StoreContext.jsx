import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StorecontextProvider = (props) => {
  const [countcart, setCount] = useState(0)
  const [cartItems,setCartItems] = useState({});

    const addToCart = (itemId) => {
      if(!cartItems[itemId]){
        setCartItems((prev) =>({...prev,[itemId]:1}))
      }
      else{
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
      }
    }
    
    const removeFromCart = (itemId) => {
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

  const getTotalCartAmount =()=>{
    let totalAmount = 0;
    for(const item in cartItems){
      if(cartItems[item] > 0 ){
        let itemInfo = food_list.find((product)=>product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  }


  function cartValue (){
  const localCart = JSON.parse(localStorage.getItem("cart"))
   setCount(localCart.length)

  }

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    cartValue,
    countcart
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StorecontextProvider;
