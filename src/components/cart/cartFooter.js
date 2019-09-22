import { quickeSaveToStorage } from "./manageCart";

const CartFooter = ({ setcartChange, setIsPaymentState, paymentState }) => {
  const handelCleanCart = () => {
    setcartChange(true);
    quickeSaveToStorage([]);
  };
  return (
    <footer className="cart-footer">
      <div onClick={() => handelCleanCart()}>רוקן עגלה</div>
      <a href="#payment">
        <div onClick={() => setIsPaymentState(true)}>
          {" "}
          {"המשך לתשלום"}
        </div>
      </a>
    </footer>
  );
};

export default CartFooter;
