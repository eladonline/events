// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="he">
        <Head>
          <meta charSet="utf-8" />
          <meta name="author" content="VR-Era" />

          <meta
            name="google-site-verification"
            content="E_rWZqzkQ2qq5dpP1gcuSgNSSbXqb-WacDj0I1CN11w"
          />
          <link
            rel="shortcut icon"
            href="/static/image/favicon.ico"
            type="image/x-icon"
          />
          <link
            rel="icon"
            href="/static/image/favicon.ico"
            type="image/x-icon"
          />
          <MicroData />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.6/css/swiper.min.css"
          />
          <style>{`body { margin: 0 }`}</style>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

const MicroData = () => (
  <div
    style={{ position: "fixed", zIndex: "-1" }}
    itemscope
    itemtype="http://schema.org/Organization"
  >
    <span itemprop="name">חנות מציאות מדומה</span>
    <span itemprop="company">VR ERA</span>
    <a itemprop="email" href="mailto:vr.era.store@gmail.com">
      vr.era.store@gmail.com
    </a>
  </div>
);
