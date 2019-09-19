import Navbar from "../components/navbar/navbar";
import React, { useState, useEffect } from "react";
import { getItemsFromStorage } from "../components/cart/manageCart";
import parseItemsFromCart from "../components/cart/parseItemsFromCart";
import CartFooter from "../components/cart/cartFooter";

const Cart = () => {
  const [cartChange, setcartChange] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (cartChange)
      setTimeout(() => {
        setcartChange(false);
      }, 500);

    setCartItems([...getItemsFromStorage()]);
  }, [cartChange]);

  useEffect(() => {
    setCartItems(getItemsFromStorage());
  }, []);
  return (
    <div className="cart">
      <Navbar addCartTrigger={cartChange} />
      <div className="grid">
        <header>
          <h1>העגלה שלך</h1>
        </header>
        <section>
          {cartItems.length ? (
            <>
              {parseItemsFromCart(cartItems, setcartChange)}
              <CartFooter setcartChange={setcartChange} />
            </>
          ) : (
            <CartIsEmpty />
          )}
        </section>
      </div>
    </div>
  );
};
export default Cart;

const CartIsEmpty = () => {
  return <div className="cart-is-empty">העגלה שלך ריקה!</div>;
};
