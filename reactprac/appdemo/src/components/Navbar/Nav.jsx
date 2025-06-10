import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="nav">
      <div className="leftPanel flexContainer">
        <h2>React routing</h2>
      </div>
      <div className="rightPanel flexContainer">
        <Link to="/">Home </Link>
        <Link to="/allproducts">AllProducts</Link>
        <Link to="/products">Products </Link>
        <Link to="/counter">Counter</Link>
        <Link to="/data">Data</Link>
        {/* <Link to="/image">ImageComp </Link> */}
        <Link  to="/userNames">UserNames</Link>
      </div>
    </div>
  );
}

export default Nav;