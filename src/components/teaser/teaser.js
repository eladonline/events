
const Teaser = () => {
  return (
    <div className="teaser">
      <section className="grid">
        <header>
          <h4>המציאות המדומה כבר כאן!</h4>
        </header>
        <p>
          המציאות המדומה היא השלב הבא בחיינו היא בשלה לכדי מוכנות מלאה אל תהסס וקנה כבר היום.
        </p>
        <iframe frameBorder="0" width="100%" height="545" src={`https://www.youtube.com/embed/fnCmUWqKo6g?autoplay=1&mute=1`}>
        </iframe>
      </section>
    </div>
  );
};

export default Teaser;
