// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Header.css';
import logo from '../../assets/2.jpeg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='relative header h-full'>
      <div className='h-screen w-full'>
        <img src={logo} alt="" className='h-full w-full object-cover' />
      </div>
      <div className="header-contents absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-[20px]">Order your favourite food here</h2>
      <Link to={"/menu"}> <button className="menu_button mt-10 bg-white text-black px-4 py-2 rounded-lg "><a>View Menu</a></button></Link> 
      </div>
      <marquee className="absolute top-0 text-white text-xl bg-red-600">
        {/* 🚀 Experience the ultimate food journey with our revolutionary web app! Don't miss out on the excitement! 🎉 #FoodieRevolution 🍽️ Order your favorite dishes now and savor the flavors like never before! */}
        🎉 Welcome to the grand launch of Do Eat - Your go-to app for fast and reliable food delivery! Enjoy exclusive discounts and promotions today! 🍔🍕🌮 Order now and satisfy your cravings with Do Eat! 🚀🎉
      </marquee>

    </div>
  );
}

export default Header;