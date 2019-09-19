import { quickeSaveToStorage } from "./manageCart";

const CartFooter = ({setcartChange}) => {
  const handelCleanCart = () => {
    setcartChange(true);
    quickeSaveToStorage([]);
  };
  return (
    <footer className="cart-footer">
      <div onClick={() => handelCleanCart()}>רוקן עגלה</div>
      <div>המשך לקנייה</div>
    </footer>
  );
};

export default CartFooter;
