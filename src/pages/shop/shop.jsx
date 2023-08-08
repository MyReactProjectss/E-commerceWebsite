import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

// Notes: What will exisit in Product are the cards that the data will show up on

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Jackets</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} /> // I am going to pass this argument to Product
        ))}
      </div>
    </div>
  );
};

export default Shop;
