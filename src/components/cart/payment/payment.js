import DeliverForm from "./deliverForm";
import getQuantity from "../quantityCount";

const Payment = ({ items, sum }) => {
  const dataWithQuantity = getQuantity(items);
  return (
    <div id="payment" className="payment">
      <header>
        <h2>מערכת הזנת פרטים לפני רכישה</h2>
      </header>
      <section>
        <DeliverForm sum={sum} items={dataWithQuantity} />
      </section>
    </div>
  );
};

export default Payment;
