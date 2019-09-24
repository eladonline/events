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
          <link href="https://vr-era.netlify.com" rel="canonical"></link>
          <link
            rel="icon"
            href="/static/image/favicon.ico"
            type="image/x-icon"
          />
          <MicroData />

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
    <a itemprop="url" href="vr-era.netlify.com">
      vr-era.netlify.com
    </a>
  </div>
);
