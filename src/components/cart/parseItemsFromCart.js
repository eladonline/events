import React, { useEffect } from "react";
import CartItemCard from "./cartItemCard";
import getQuantity from "./quantityCount";

const ParseItemsFromCart = ({ items, setcartChange, setTotalSum }) => {
  // parse data to item, quantity object
  const withQuantity = getQuantity(items);

  // calculate the sum of all cart items
  useEffect(() => {
    let totalSum = 0;
    withQuantity.forEach(
      item => (totalSum += item.item.description.detailes.price * item.quantity)
    );
    setTotalSum(totalSum);
  }, [items.length]);

  return withQuantity.map((item, i) => {
    return (
      <CartItemCard
        key={item.item.id}
        data={item.item}
        quantity={item.quantity}
        setCartChange={setcartChange}
      />
    );
  });
};

export default ParseItemsFromCart;
