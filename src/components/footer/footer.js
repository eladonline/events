import Contact from './contactForm';
const Footer = () => {
  return (
    <footer className="footer">
      <div>LOGO</div>
      <header>
        <h4>!צור איתנו קשר</h4>
      </header>
      <div className="footer__contact-detailes">
        <div className="tel">
          <div>טל: 050-6666666</div>
          <div> eladonline@walla.com :אימייל</div>
        </div>
      </div>
      <Contact />
    </footer>
  );
};

export default Footer;
