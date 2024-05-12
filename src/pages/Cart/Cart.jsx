import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
// import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const initialform = {
  firstName: "",
  lastName: "",
  email: "",
  street: "",
  city: "",
  state: "",
  zipcode: "",
  country: "",
  phone: "",
};

const Cart = () => {
  // const [isAuth, setIsAuth] = useState(false)
  const [update, setUpdate] = useState(false);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(initialform);
  const [data, setData] = useState([]);
  const [resStatus, setResStatus] = useState(null)
  const [orderLoading, setOrderLoading] = useState(false)
  // const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
  //   useContext(StoreContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  
  
  const totalPrice = data?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const func = () => {
    setUpdate((prev) => !prev);
  };

  const getCartProduct = () => {
    const cartFound = JSON.parse(localStorage.getItem("cart"));
    if (!cartFound || cartFound.length === 0) {
      setData([]);
    } else {
      setData(cartFound);
    }
  };

  // const getCartProduct = () => {
  //   return axios
  //     .get("http://localhost:4000/cart",
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     }
  //   )
  //     .then((res) => {
  //       const cartData = res.data.map((item) => ({ ...item, quantity: 1 }));
  //       setData(cartData);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const handleQuantityIncrement = (id) => {
    const updatedItems = data.map((item) => {
      if (item._id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setData(updatedItems);
  };
  const handleQuantityDecrement = (id) => {
    const updatedItems = data.map((item) => {
      if (item._id === id) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setData(updatedItems);
  };

  const handleDelete = (deleteId) => {
    let cartData = JSON.parse(localStorage.getItem("cart"));

    if (!cartData || cartData.length === 0) {
      alert("Cart is empty");
      return;
    }

    const updatedCartData = cartData.filter((item) => item._id !== deleteId);

    localStorage.setItem("cart", JSON.stringify(updatedCartData));
    alert("Product removed from cart");
    func();
  };

  // const handleDelete = async (id) => {
  //   try {
  //     const response = await axios.delete(
  //       `http://localhost:4000/cart/delete/${id}`,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       }
  //     );
  //     if (response) {
  //       setUpdate((prev) => !prev);
  //     }
  //   } catch (error) {
  //     func();
  //   }
  // };

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOrderProduct = async () => {
    setOrderLoading(true)
    let finalData = {
      ...formData,
      totalPrice,
      data,
    };
try {
  
  const res = await axios.post(
    "http://localhost:4000/order/create",
    finalData
  );

  if (res.data.state) {
  toast.success(res.data.msg);
  setOrderLoading(false)
    localStorage.clear();
    setFormData(initialform);
    handleOpen();
    func();
    navigate("/")
    //  await handledeleteCartData(data)
  }
} catch (error) {
  console.log(error.message)
}

   
  };

  // cart deleted function
  // const handledeleteCartData = async (data) => {
  //   return axios
  //     .post('http://localhost:4000/cart/order/delete', data, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${localStorage.getItem('token')}`,
  //       },
  //     })
  //     .then((res) => {
  //       if (res.data.state) {
  //         navigate("/")
  //       } else {
  //         alert("something went wrong while deleting cartdata")
  //       }

  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }


  const handleAlert = () => {
    toast.error("Resturant close unable to take order")
  }

  // useEffect(() => {
  //   const currentTime = new Date().getHours();
  //   setIsAuth(currentTime >= 11 && currentTime < 23);
  //   console.log(currentTime)
  // }, []);

  const fetchstatus = () => {
    axios.get("http://localhost:4000/resturant")
    .then((res)=> {
    // console.log(res.data)
    setResStatus(res.data[0].resturant)
   
    
    }).catch((error)=> {
      console.log(error.message)
    })
  }
  useEffect(()=>{
    fetchstatus()
  },[])

  useEffect(() => {
    getCartProduct();
  }, [update]);

// console.log("isAuth", isAuth)

  return (
    <>
      {/* modal for check out form start*/}
      {open && (
        <div className="modal_outer absolute lg:w-[500px] h-auto p-4 z-1  top-[25%] left-[35%] bg-gray-200">
          <div className="modal_outer_1">
            <div className="">
              <div className="flex justify-between">
                <p className="delivery text-xl">Delivery Information</p>
                <button
                  className="absolute left-[97%] top-0 "
                  onClick={() => setOpen(false)}
                >
                  x
                </button>
              </div>
              <div className="first_input flex gap-2">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  id="first-name"
                  autoComplete="first-name"
                  placeholder="first-name"
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-lg sm:leading-6"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  id="last-name"
                  autoComplete="last-name"
                  placeholder="last-name"
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-lg sm:leading-6"
                />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                placeholder="Enter Email"
                className="block w-full mt-2 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-lg sm:leading-6"
              />
              <input
                type="street"
                name="street"
                id="street"
                value={formData.street}
                onChange={handleChange}
                required
                autoComplete="street"
                placeholder="Enter street"
                className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-lg mt-2 sm:leading-6"
              />
              <div className="flex gap-2 mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={formData.city}
                  onChange={handleChange}
                  autoComplete="city"
                  placeholder="city"
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-lg sm:leading-6"
                />
                <input
                  type="text"
                  name="state"
                  id="state"
                  value={formData.state}
                  onChange={handleChange}
                  autoComplete="state"
                  placeholder="state"
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-lg sm:leading-6"
                />
              </div>
              <div className="flex gap-2 mt-2">
                <input
                  type="text"
                  name="zipcode"
                  id="zip-code"
                  value={formData.zipcode}
                  onChange={handleChange}
                  autoComplete="zip-code"
                  placeholder="zip-code"
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-lg sm:leading-6"
                />
                <input
                  type="text"
                  name="country"
                  id="country"
                  value={formData.country}
                  onChange={handleChange}
                  autoComplete="country"
                  placeholder="country"
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-lg sm:leading-6"
                />
              </div>
              <input
                type="phone"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                autoComplete="phone"
                placeholder="Enter phone"
                className="block w-full mt-2 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-lg sm:leading-6"
              />
            </div>
            <div className="place-order-right text-center mt-2 border-2 border-orange-400 bg-orange-400 p-2 font-bold text-white">
    {orderLoading ? <button>Please wait ...</button> : <button onClick={handleOrderProduct}>PROCEED TO PAYMENT</button>}     
            </div>
          </div>
        </div>
      )}
      {/* modal for check out form end*/}

      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {data &&
            data.map((item, index) => {
              return (
                <div key={item._id}>
                  <div className="cart-items-title cart-items-item">
                    <img src={item.image} alt="" />
                    <p>{item.title}</p>
                    <p>₹{item.price}</p>
                    <div className="flex gap-2">
                      <button
                        className="border-2 px-2"
                        onClick={() => handleQuantityDecrement(item._id)}
                        disabled={item.quantity === 1}
                      >
                        -
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        className="border-2 px-2 disabled:opacity-50"
                        onClick={() => handleQuantityIncrement(item._id)}
                      >
                        +
                      </button>
                    </div>
                    <p>₹{item.price * item.quantity}</p>
                    <p
                      onClick={() => handleDelete(item._id)}
                      className="cross text-red-500"
                    >
                      X
                    </p>
                  </div>
                  <hr />
                </div>
              );
            })}
        </div>
        <div className="text-right mt-3">
          <h2>Cart Totals: {totalPrice}</h2>
        </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>₹{totalPrice}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>₹{totalPrice === 0 ? 0 : 50}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                {totalPrice ? (
                  <b>₹{totalPrice === 0 ? 0 : totalPrice + 50}</b>
                ) : (
                  0
                )}
              </div>
            </div>
    {resStatus ?  <button onClick={handleOpen} >PROCEED TO CHECKOUT</button> : <button onClick={handleAlert} > Restaurant close</button>}       

          </div>
          <div className="cart-promocode">
            <div>
              <p>If you have a code, Enter it here</p>
              <div className="cart-promocode-input">
                <input type="text" placeholder="promo code" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
