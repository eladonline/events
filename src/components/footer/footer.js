import Contact from './contactForm';
const Footer = () => {
  return (
    <footer id='footer' className="footer">
      <section className='grid'>
        <div className='logo' />
        <header>
          <h4>!צור איתנו קשר</h4>
        </header>
        <Contact />
        <div className="footer__contact-detailes">
          <div className="tel">
            <div>טל: 050-6666666</div>
            <div> eladonline@walla.com :אימייל</div>
          </div>
        </div>
      </section>

      <div className="footer__rights">© all right reserved to "Events"</div>
    </footer>
  );
};

export default Footer;
