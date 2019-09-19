import DeliverForm from './deliverForm'

const Payment = props => {
  return (
    <div id="payment" className="payment">
      <header>
        <h2>מערכת תשלום והזמנת מוצר</h2>
      </header>
      <section>
          <DeliverForm />
      </section>
    </div>
  );
};

export default Payment;
