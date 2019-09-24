import App from "next/app";
import React from "react";
import Layout from "components/Layout";
import { NextSeo } from "next-seo";
import { ParallaxProvider } from "react-scroll-parallax";
import { DEFAULT_SEO } from "../src/components/seo/seoDesc";
import "style/core.scss";
import "style/theme.less";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ParallaxProvider>
        <Layout>
          <NextSeo {...DEFAULT_SEO} />
          <Component {...pageProps} />
        </Layout>
      </ParallaxProvider>
    );
  }
}
