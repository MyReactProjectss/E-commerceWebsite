import React, { useContext } from "react";
import { ShopContext } from "../../../src/context/shop-context";

// the props are coming from shop  <Product data={product}

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemsAmount = cartItems[id];

  return (
    <div className="product">
      <img
        src={productImage}
        alt={"Jackets"}
        style={{ border: "3px solid black" }}
      />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>

      <button className="addToCartButton" onClick={() => addToCart(id)}>
        Add To Cart {cartItemsAmount > 0 && <> ({cartItemsAmount}) </>}
      </button>
    </div>
  );
};
// Add To Cart {cartItemsAmount > 0 && <> ({cartItemsAmount}) </>}  this is placed in the button letting me see the increment in items within the button
