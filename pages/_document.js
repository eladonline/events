// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from "next/document";
import ReactGA from "react-ga";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  componentDidMount() {
    ReactGA.initialize("UA-148411020-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
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
  <title>
    משקפי מציאות מדומה משקפי vr משקפי מציאות וירטואלית משקפי מציאות מדומה למכירה
    מציאות מדומה מציאות מדומה מחיר
  </title>
);

const Meta = () => (
  <meta
    name="description"
    content=" משקפי מציאות מדומה
  משקפי vr 
  משקפי מציאות וירטואלית
  משקפי מציאות מדומה למכירה
  מציאות מדומה
  מציאות מדומה מחיר
  משקפיים מציאות מדומה
  משקפיים מציאותיות
  משקפיים וירטואליות
  מציאות מדומה ישראל
  עידן מציאות מדומה
  "
  />
);
