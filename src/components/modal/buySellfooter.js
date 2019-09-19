import { saveInStorage } from "../cart/manageCart";

const handleAddToCart = (data, trigger) => {
  saveInStorage(data);
  trigger(true);
  alert("נוסף לעגלה");
};

const BuySellFooter = ({ data, triggerAddCart }) => {
  return (
    <div className="buy-sell-footer">
      <div onClick={() => handleAddToCart(data, triggerAddCart)}>
        הוסף לעגלה
      </div>
      <div className="hover-green">קנה עכשיו</div>
    </div>
  );
};

export default BuySellFooter;