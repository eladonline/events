import Contact from "./contactForm";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <section className="grid">
        <Link href="/">
          <a>
            <div className="logo" />
          </a>
        </Link>
        <header>
          <h4>צור איתנו קשר!</h4>
        </header>
        <Contact />
        <div className="footer__contact-detailes">
          <div className="tel">
            <div>טל: 050-6666666</div>
            <div> אימייל: eladonline@walla.com </div>
          </div>
        </div>
      </section>

      <div className="footer__rights">
        all right reserved to virtualRealityEra ©{" "}
      </div>
    </footer>
  );
};

export default Footer;
