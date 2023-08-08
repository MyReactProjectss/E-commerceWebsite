import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";

// Notes: createContext this means that we are going to create a store in out
// application where its going to keep track of states and needs functions to be
// accessed where in our project.
// this always me to use the same state for multple pages

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 1; index < PRODUCTS.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

// Notes: in the return this is where we are going to define our states
// and everything that is related to logic in out project now
export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }

    return totalAmount;
  };

  // this is all the functionality to adding to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 })); // this line says, I want to copy the state, then grab the item id and change it to whatever it was before plus one because we're adding
  };

  // this is the the functionality to removing to cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = {
    cartItems,
    removeFromCart,
    addToCart,
    updateCartItemCount,
    getTotalCartAmount,
  };

  console.log(cartItems);

  // this will define all of the states within the application
  // this will define all of the functions that will be used and then pass it to the provider
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
