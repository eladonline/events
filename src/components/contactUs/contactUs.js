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
          <div>טל: 050-6471048</div>
          <div>
            {" "}
            Email:{" "}
            <a href="mailto:vr.era.store@gmail.com">
              vr.era.store@gmail.com
            </a>{" "}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default ContactUs;
