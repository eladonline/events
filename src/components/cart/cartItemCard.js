import React from "react";
import { priceFormatter } from "../helpers";

const CartItemCard = ({ data, quantity }) => {
  return (
    <div className="cart-item-card">
      <img src={data.background} alt="motzar" />
      <li>
        שם מוצר:
        <br /> {data.service}
      </li>
      <li>כמות: {quantity}</li>
      <li>
        מחיר כולל מע''מ: <br />{" "}
        {priceFormatter(data.description.detailes.price * quantity)} ש''ח
      </li>
      <li>
        זמן אספקה: <br /> {data.description.detailes.supplyTime}
      </li>
      <li>
        שנות אחריות: <br /> {data.description.detailes.warranty}
      </li>
    </div>
  );
};

export default CartItemCard;
