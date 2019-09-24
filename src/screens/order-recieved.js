import Navbar from "../components/navbar/navbar";
import React, { useEffect } from "react";
import {quickeSaveToStorage} from '../components/cart/manageCart';

const OrderRecived = () => {
  useEffect(()=>{
    quickeSaveToStorage([])
  })
  return (
    <div className="order-recieved">
      <Navbar />
      <div className="grid">
        <header>
          <h2>אני מודים לך שבחרת לרכוש את המוצר דרכנו.</h2>
          <h4>אנחנו נטפל בהזמנה ונודיע ל ברגע שתישלח אליך.</h4>
          <h5>ברגעים אלו נשלחת אליך קבלה על הרכישה.</h5>
        </header>
      </div>
    </div>
  );
};

export default OrderRecived;
