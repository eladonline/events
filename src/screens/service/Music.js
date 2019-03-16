import ServicePage from 'src/components/ServicePage/ServicePage';
import data from 'src/data/services/music/data.json';

const Music = () => {
  return (
    <div className="static-container">
      <ServicePage {...data} />
    </div>
  );
};

export default Music;
