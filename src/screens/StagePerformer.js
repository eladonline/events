import StaticPage from 'src/components/staticPage/StaticPage';
const heroPic = '/static/image/staticPages/stage_show.jpg';

// gallery
const company_prom = '/static/image/gallery/company_prom.jpg';
const decoration = '/static/image/gallery/decoration.jpg';
const hero = '/static/image/gallery/hero2.jpg';
const khaled = '/static/image/gallery/khaled.jpg';
const teva = '/static/image/gallery/teva.jpg';

const StagePerformer = () => {
  const page = {
    hero: {
      src: heroPic,
      head: 'אמני במה'
    },
    head: 'מופעי במה מרהיבים',
    subHead: 'מופעי במה תמיד היו מאוד פופלארים ואהודים בקרב הקהל',
    list: [company_prom, decoration, hero, khaled, teva]
  };
  return (
    <div className="stage-performer">
      <StaticPage {...page}>
        <div>asd</div>
      </StaticPage>
    </div>
  );
};

export default StagePerformer;
