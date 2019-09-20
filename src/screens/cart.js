import Navbar from "../components/navbar/navbar";
import React, { useState, useEffect } from "react";
import { getItemsFromStorage } from "../components/cart/manageCart";
import CartFooter from "../components/cart/cartFooter";
import ParseItemsFromCart from "../components/cart/parseItemsFromCart";
import { priceFormatter } from "../components/helpers";
import Payment from "../components/cart/payment/payment";

const Cart = () => {
  const [cartChange, setcartChange] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalSum, setTotalSum] = useState(0);
  const [isPaymentState, setIsPaymentState] = useState(true);

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
              <ParseItemsFromCart
                items={cartItems}
                setcartChange={setcartChange}
                setTotalSum={setTotalSum}
              />
              <div className="cart__total-pay">
                סה''כ לתשלום: {priceFormatter(totalSum)}
              </div>
              <CartFooter
                paymentState={isPaymentState}
                setIsPaymentState={setIsPaymentState}
                setcartChange={setcartChange}
              />
            </>
          ) : (
            <CartIsEmpty />
          )}
        </section>
        {isPaymentState && cartItems.length ? <Payment /> : null}
      </div>
    </div>
  );
};
export default Cart;

const CartIsEmpty = () => {
  return <div className="cart-is-empty">העגלה שלך ריקה!</div>;
};
