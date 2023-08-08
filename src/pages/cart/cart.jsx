import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      {totalAmount > 0 ? (
        <div className="checkout">
          <div>
            <h1> Your Cart Items </h1>
          </div>
          <div className="cart">
            {PRODUCTS.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartItem key={product.id} data={product} />;
              } else {
                return null;
              }
            })}
          </div>
          <div>
            <p className="Subtotal"> Subtotal: ${totalAmount}</p>
          </div>
          <div className="checkOutButtuns">
            <button
              className="button1 leftButton"
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </button>

            <button className="button1"> Checkout </button>
          </div>
        </div>
      ) : (
        // this is important! uptop and bottom are different what if codes
        <div className="ButtonCode">
          <h1>Your Cart is Empty</h1>
          <div className="BTC"></div>
        </div>
      )}
    </div>
  );
};

export default Cart;
