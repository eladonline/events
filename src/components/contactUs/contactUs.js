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
      <div className="contact-us__contact-detailes">
        <div className="tel">
          <div>טל: ניתן לבקש בצ'אט או במייל</div>
          <div>
            {" "}
            צ'אט פייסבוק:{" "}
            <a href="https://m.me/108400477228002">
              פתח צ'אט
            </a>{" "}
          </div>\
        </div>
      </div>
    </section>
  </div>
);

export default ContactUs;
