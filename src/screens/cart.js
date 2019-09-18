import Navbar from "../components/navbar/navbar";
import React, { useState, useEffect } from "react";
import { getItemsFromStorage } from "../components/cart/manageCart";
import parseItemsFromCart from "../components/cart/parseItemsFromCart";

const Cart = () => {
  const [cartChange, setcartChange] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (cartChange)
      setTimeout(() => {
        setcartChange(false);
      }, 500);
  }, [cartChange]);

  useEffect(() => {
    setCartItems(getItemsFromStorage());
  }, []);
  return (
    <div className="cart">
      <Navbar addCartTrigger={cartChange} />
      <div className="grid">
        <header>
          <h1>העגלה שלי</h1>
        </header>
        <section>{cartItems.length && parseItemsFromCart(cartItems)}</section>
      </div>
    </div>
  );
};
export default Cart;
