const video = '/static/video/cocktails.mp4';

const About = () => {
  return (
    <div className="about">
      <section className="grid">
        <header>
          <h4>עלינו</h4>
        </header>
        <p>
          כמה מילים לשינוי כמה מילים לשינוי כמה מילים לשינוי כמה מילים לשינוי כמה מילים לשינוי כמה
          מילים לשינוי כמה מילים לשינוי
        </p>
        <div className="about-video-container">
          <video autoPlay muted src={video} loop />
        </div>
      </section>
    </div>
  );
};

export default About;
