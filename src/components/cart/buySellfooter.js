import { saveInStorage } from "./manageCart";

const handleAddToCart = (data, trigger) => {
  saveInStorage(data);
  trigger(true);
  alert("נוסף לעגלה")
};

const BuySellFooter = ({ data, triggerAddCart }) => {
  return (
    <div className="buy-sell-footer">
      <div onClick={() => handleAddToCart(data, triggerAddCart)}>
        הוסף לעגלה
      </div>
      <div>קנה עכשיו</div>
    </div>
  );
};

export default BuySellFooter;
