import Navbar from "../components/navbar/navbar";

const OrderRecived = () => {
  return (
    <div className="order-recieved">
      <Navbar />
      <div className="grid">
        <header>
          <h2>אני מודים לך שבחרת לרכוש את המוצר דרכנו.</h2>
          <h4>אנחנו נטפל בהזמנה ונודיע ל ברגע שתשלח אליך.</h4>
          <h5>אנחנו מזמינים אותך להמשיך ולהתעניין במוצרים שאנו מציעים.</h5>
        </header>
        
      </div>
    </div>
  );
};

export default OrderRecived;
