import { saveInStorage } from "../cart/manageCart";
import router from 'next/router'

const handleAddToCart = (data, trigger) => {
  saveInStorage(data);
  trigger(true);
  alert("נוסף לעגלה");
};

const handleBuyNow = (data, trigger) => {
  saveInStorage(data);
  trigger(true);
  router.push('/cart')
};


const BuySellFooter = ({ data, triggerAddCart }) => {
  return (
    <div className="buy-sell-footer">
      <div onClick={() => handleAddToCart(data, triggerAddCart)}>
        הוסף לעגלה
      </div>
      <div onClick={() => handleBuyNow(data, triggerAddCart)} className="hover-green">קנה עכשיו</div>
    </div>
  );
};

export default BuySellFooter;
