import Contact from "./contactForm";
import Link from "next/link";

const ContactUs = () => (
  <div className="contact-us">
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
  </div>
);

export default ContactUs;
