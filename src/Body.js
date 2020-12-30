import React from "react";
import Image1 from "./image1.jpg";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Hotels from "./Hotels";
import Flights from "./Flights";
import Restaurants from "./Restaurants";
import ContactUs from "./ContactUs";

const Body = () => {
  return (
    <div className="body-container">
      <img width="100%" height="100%" src={Image1}></img>
      <div className="content-container">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/hotels" component={Hotels}></Route>
          <Route path="/flights" component={Flights}></Route>
          <Route path="/restaurants" component={Restaurants}></Route>
          <Route path="/contactus" component={ContactUs}></Route>
        </Switch>
      </div>
    </div>
  );
};

export default Body;
