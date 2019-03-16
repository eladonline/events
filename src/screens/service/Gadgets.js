import ServicePage from 'src/components/ServicePage/ServicePage';
import data from 'src/data/services/gadgets/data.json';

const FoodStand = () => {
  return (
    <div className="static-container">
      <ServicePage {...data} />
    </div>
  );
};

export default FoodStand;
