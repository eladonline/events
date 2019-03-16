import ServicePage from 'src/components/ServicePage/ServicePage';
import data from 'src/data/services/attractions/data.json';

const Decorator = () => {
  return (
    <div className="static-container">
      <ServicePage {...data} />
    </div>
  );
};

export default Decorator;
