import React from "react";

const CartItemCard = ({data}) => {
    console.log(data)
  return (
    <div className="cart-item-card">
      <li>שם מוצר: {data.service}</li>
    </div>
  );
};

export default CartItemCard