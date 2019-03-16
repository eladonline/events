import ServicePage from 'src/components/ServicePage/ServicePage';
import data from 'src/data/services/stands/data.json';

const Stands = () => {
  return (
    <div className="static-container">
      <ServicePage {...data} />
    </div>
  );
};

export default Stands;
