import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <div className="navigation-bar">
        <div className="menu-item">
          <Link className="link" to="/">
            Home
          </Link>
        </div>
        <div className="menu-item">
          <Link className="link" to="/hotels">
            Hotels
          </Link>
          <div className="menu-item-list">
            <div className="menu-list-item-layout">
              <div className="menu-list-item-layout-child">
                <p className="menu-list-sub-heading">Best Rated</p>
                <div className="menu-list-sub-items">
                  <a className="sub-item-link" href="#">Hyatt Regency</a>
                  <a href="#">Taj Exotica</a>
                  <a href="#">The Leela</a>
                </div>
              </div>

              <div className="menu-list-item-layout-child">
                <p className="menu-list-sub-heading">Most Popular</p>
                <div className="menu-list-sub-items">
                  <a href="#">Sterlings</a>
                  <a href="#">Club Mahindra</a>
                  <a href="#">The Serai</a>
                  <a href="#">Destiny Farms</a>
                  <a href="#">The Novotel</a>
                </div>
              </div>

              <div className="menu-list-item-layout-child">
                <p className="menu-list-sub-heading">Easy booking</p>
                <div className="menu-list-sub-items">
                  <a href="#">Make My Trip</a>
                  <a href="#">Oyo Holidays</a>
                  <a href="#">Booking.com</a>
                  <a href="#">Skyscanner</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <Link className="link" to="/flights">
            Flights
          </Link>
        
        </div>
        <div className="menu-item">
          <Link className="link" to="/restaurants">
            Restaurants
          </Link>
         
        </div>
        <div className="menu-item">
          <Link className="link" to="/contactus">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
