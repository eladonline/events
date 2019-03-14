import StaticPage from 'src/components/staticPage/StaticPage';
import data from 'src/data/stagePerfomer/data.json';

const StagePerformer = () => {
  return (
    <div className="stage-performer">
      <StaticPage {...data} />
    </div>
  );
};

export default StagePerformer;
