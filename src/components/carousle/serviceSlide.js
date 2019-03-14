import Router from 'next/router';

const Slide = ({ head, text, src, link }) => {
  return (
    <div
      onClickCapture={() => link && Router.push(link)}
      className="carousle__item"
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className="carousle__item__overlay">
        <header>
          <h4>{head}</h4>
        </header>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Slide;
