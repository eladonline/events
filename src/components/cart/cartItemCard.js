import React from "react";
import Link from "next/link";
import { priceFormatter } from "../helpers";
import QuantityEL from "./quantityEl";

const CartItemCard = ({ data, quantity, setCartChange }) => {
  return (
    <div className="cart-item-card">
      <Link href={`/${data.page}`}>
        <a>
          <img src={data.background} alt="motzar" />
        </a>
      </Link>
      <li>
        שם מוצר:
        <br /> {data.service}
      </li>

      <QuantityEL
        setCartChange={setCartChange}
        oItemData={data}
        quantity={quantity}
      />

      <li>
        זמן אספקה: <br /> {data.description.detailes.supplyTime} ימי עסקים
      </li>

      <li>
        שנות אחריות: <br /> {data.description.detailes.warranty}
      </li>

      <li>
        מחיר כולל מע''מ: <br />{" "}
        {priceFormatter(data.description.detailes.price * quantity)}
      </li>
    </div>
  );
};

export default CartItemCard;
