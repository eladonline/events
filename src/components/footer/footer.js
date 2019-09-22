import FooterItems from "./footerItems";
import WorkingTime from "./workingTime";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <section>
        <div className="grid">
          <WorkingTime />
          <FooterItems />
        </div>
      </section>
      <div className="footer__rights">
        all rights reserved to virtualRealityEra ©{" "}
      </div>
    </footer>
  );
};

export default Footer;
