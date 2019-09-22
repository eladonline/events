import Navbar from "../components/navbar/navbar";
import React, { useState, useEffect } from "react";
import { getItemsFromStorage } from "../components/cart/manageCart";
import CartFooter from "../components/cart/cartFooter";
import ParseItemsFromCart from "../components/cart/parseItemsFromCart";
import { priceFormatter } from "../components/helpers";
import Payment from "../components/cart/payment/payment";
import Link from "next/link";

const Cart = () => {
  // trigger the change in the cart so it will update
  const [cartChange, setcartChange] = useState(false);
  // the items in the cart
  const [cartItems, setCartItems] = useState([]);
  // this is the total sum
  const [totalSum, setTotalSum] = useState(0);
  // this opens he payment section
  const [isPaymentState, setIsPaymentState] = useState(false);

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
              <div className='cart__order-terms'> 
                *בקנייה באתר אתה מסכים <Link href="/terms">לתנאי השימוש</Link>{" "}
                שלנו.
              </div>
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
