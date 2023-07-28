import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://m.media-amazon.com/images/I/61vye+ube-L._SX3000_.jpg"
        alt="Banner 1"
      ></img>

      <div className="home__row">
        <Product
          id="111"
          title="Introduction to Embedded Systems 1st Edition"
          price={11.96}
          rating={5.0}
          image="https://m.media-amazon.com/images/I/51oM1kvuNDL._SX404_BO1,204,203,200_.jpg"
        />

        <Product
          id="112"
          title="FRIGIDAIRE ESTM020-RED Retro Electric Stand Mixer, 4.75 Quart / 4.5L, 8 Speeds with Whisk, Dough Hook, Flat Beater Attachments, Splash Guard (RED)"
          price={59.98}
          rating={4.0}
          image="https://m.media-amazon.com/images/I/71YULz+xZNL._AC_SX679_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="113"
          title="Fitness Tracker with Blood Pressure Heart Rate Sleep Monitor Temperature Monitor, Activity Tracker Smart Watch Pedometer Step Counter for iPhone & Android Phones for Kids Man Women (Black)"
          price={20.96}
          rating={3.0}
          image="https://m.media-amazon.com/images/I/61Z5x1M2b9L._AC_SX679_.jpg"
        />

        <Product
          id="114"
          title="Echo Dot (5th Gen, 2022 release) | With bigger vibrant sound, helpful routines and Alexa | Charcoal"
          price={49.99}
          rating={4.0}
          image="https://m.media-amazon.com/images/I/71yRY8YlAbL._AC_SX679_.jpg"
        />

        <Product
          id="115"
          title="Apple iPad Pro 12.9-inch (6th Generation): with M2 chip, Liquid Retina XDR Display, 128GB, Wi-Fi 6E, 12MP front/12MP and 10MP Back Cameras, Face ID, All-Day Battery Life – Space Gray"
          price={1049.00}
          rating={4.0}
          image="https://m.media-amazon.com/images/I/81c+9BOQNWL._AC_SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="116"
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          price={14.39}
          rating={2.0}
          image="https://m.media-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
