import Link from 'next/link'

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <section>
        <div className="grid">
          <Link href="/terms">
            <div>תנאי שימוש</div>
          </Link>
        </div>
      </section>
      <div className="footer__rights">
        all rights reserved to virtualRealityEra ©{" "}
      </div>
    </footer>
  );
};

export default Footer;
