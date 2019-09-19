import { Icon } from "antd";
import { getItemsFromStorage, quickeSaveToStorage } from "./manageCart";

const QuantityEL = ({ oItemData, quantity, setCartChange }) => {
  const trigger = bool => handleQuantityChange(oItemData, bool, setCartChange);

  return (
    <div className="quantity-el">
      <li>כמות: {quantity}</li>
      <footer>
        <Icon onClick={() => trigger(true)} type="up" />
        <Icon onClick={() => trigger(false)} type="down" />
      </footer>
    </div>
  );
};
export default QuantityEL;

const handleQuantityChange = (oItemData, bAction, setChange) => {
  const itemsFromStorage = getItemsFromStorage();
  let indexToActionOn = 0;

  for (let i = 0; i < itemsFromStorage.length; i++) {
    if (itemsFromStorage[i].id === oItemData.id) {
      indexToActionOn = i;
      break;
    }
  }

  if (bAction) {
    itemsFromStorage.push(oItemData);
  } else if (!bAction) {
    itemsFromStorage.splice(indexToActionOn, 1);
  }
  itemsFromStorage.sort(sort);
  quickeSaveToStorage(itemsFromStorage);
  setChange(true);
};

const sort = (a, b) => {
  console.log(a, b, "a,b");
  const id1 = a.id;
  const id2 = b.id;
  if (id1 > id2) {
    return 1;
  }
  if (id1 < id2) {
    return -1;
  }
  return 0;
};
