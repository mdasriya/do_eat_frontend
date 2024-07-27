// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <div className="footer-content-logo">
            <img src={assets.logo} alt="" />
          </div>
            <p>When you walk in to work every day, you will find that the energy on the floor is just amazing at Janosa. The passion, the hunger, the drive to excel is so infectious, it brings the best out in everyone.</p>
            <div className="footer-social-icons flex">
                <img src={assets.linkedin_icon } alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.facebook_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li><a href='#'>Home</a></li>
                <li>About</li>
                <li><a href="/cart">Delivery</a></li>
                <Link to="/privacy_policy"><li>Privacy Policy</li></Link>
                <Link to="/term&condition"><li>Term And Condition</li></Link>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-8080125075</li>
                {/* <li><a href="#">hotelJanosa.com</a></li> */}
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 © Royals WebTech - All Right Reserved.</p>
    </div>
  )
}

export default Footer