import React from "react";
import ReactDOM from "react-dom/client";
import company_logo from "/src/img/food_logo.png"; // ! path-->  root path ("/"src/img/food_logo.png)
// import res_image from "/src/img/biriyani.png";
import { resList } from "./Bodi_hotels";

// import { createElement } from "react";

// const App = () => {
//   return createElement("h1", null, "Hello World!");
// };
const root = ReactDOM.createRoot(document.getElementById("root"));

// * Header
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={company_logo} className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// * Body
const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res_container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

// Restaurant Card

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData?.info;
  return (
    <div className="res-card">
      {/* <img className="res-image" src={res_image} /> */}
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt=""
        className="res-image"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

// ! App Layout
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
root.render(<AppLayout />);
