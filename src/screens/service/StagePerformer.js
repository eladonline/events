import ServicePage from 'src/components/ServicePage/ServicePage';
import data from 'src/data/services/stagePerfomer/data.json';

const StagePerformer = () => {
  return (
    <div className="static-container">
      <ServicePage {...data} />
    </div>
  );
};

export default StagePerformer;
