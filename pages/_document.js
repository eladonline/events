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
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="author" content="VR-Era" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="google-site-verification"
            content="E_rWZqzkQ2qq5dpP1gcuSgNSSbXqb-WacDj0I1CN11w"
          />
          <Meta />
          <Title />
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

const Title = () => (
  <title>חנות למשקפי מציאות מדומה, משקפי vr, חנות מציאות וירטואלית במרכז</title>
);

const Meta = () => (
  <meta
    name="description"
    content=" חנות למכירת משקפי מציאות מדומה נקראים גם משקפי vr המחסן נמצא באיזור תל אביב, בחנות ניתן למצוא משקפי מציאות מדומה במחיר זול משקפי מציאות כגון אוקולוס ריפט אס, htc vive , pimax , valve index יש אביזרי מציאות מדומה יש אחריות של יצרן "
  />
);
