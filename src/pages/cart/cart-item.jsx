import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

/*
Notes: the <b> is making the paragraph bold 

*/

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, removeFromCart, addToCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div className="cartItem">
      <img src={productImage} alt={"products in cart"} />
      <div className="description">
        <p>
          <b> {productName} </b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(e.target.value, id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
