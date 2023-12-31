import React, { useState } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
function Product({ id, title, price, rating, image }) {
  const [{basket},dispatch] = useStateValue();
  const addToBasket = ()=>{
    dispatch({
      type : 'ADD_TO_BASKET',
      item : {
        
      }
    })
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>

        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt=""></img>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
