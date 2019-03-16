import Router from 'next/router';

const Slide = ({ head, text, src, link, flexCenter = false }) => {
  return (
    <div
      onClickCapture={() => link && Router.replace(link)}
      className="carousle__item"
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className={`carousle__item__overlay ${flexCenter && 'flex-center'}`}>
        <header>
          <h4>{head}</h4>
        </header>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Slide;
