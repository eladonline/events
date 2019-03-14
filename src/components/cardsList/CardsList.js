import Router from 'next/router';

const CardsList = ({ list }) => {
  const parseList = () => {
    return list.map((obj, i) => {
      return <Card key={`card-${obj.title}_${i}`} {...obj} />;
    });
  };

  return <div className="cards-list">{parseList()}</div>;
};

export default CardsList;

export const Card = ({ title, src, summary }) => {
  return (
    <div onClick={() => Router.push(Router.pathname + '#footer')} className="service-card">
      <img src={src} alt="background" />
      <div className="service-card__overlay">
        <header>
          <h5>{title}</h5>
        </header>
        <p>{summary}</p>
      </div>
    </div>
  );
};
