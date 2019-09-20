import App from "next/app";
import React from "react";
import Layout from "components/Layout";
import "style/core.scss";
import "style/theme.less";
import { ParallaxProvider } from "react-scroll-parallax";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ParallaxProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ParallaxProvider>
    );
  }
}
