import Carousle from 'src/components/carousle/carousle';
import Slide from 'src/components/carousle/serviceSlide';

const Recommendation = ({ data }) => {
  return (
    <div className='recommendations'>
      <header>
        <h4>מכתבי תודה</h4>
      </header>
      <Carousle slide={Slide} slides={data.recommends} flexCenter={true} />
    </div>
  );
};

export default Recommendation;
