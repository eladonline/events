import App from "next/app";
import React from "react";
import Layout from "components/Layout";
import { ParallaxProvider } from 'react-scroll-parallax';
import "style/core.scss";
import "style/theme.less";

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
