import App from "next/app";
import React from "react";
import Layout from "components/Layout";
import { DefaultSeo } from "next-seo";
import { ParallaxProvider } from "react-scroll-parallax";
import { DEFAULT_SEO } from "../src/components/seo/seoDesc";
import "style/core.scss";
import "style/theme.less";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ParallaxProvider>
        <MicroData />
        <Layout>
          <DefaultSeo {...DEFAULT_SEO} />
          <Component {...pageProps} />
        </Layout>
      </ParallaxProvider>
    );
  }
}

const MicroData = () => (
  <div
    style={{ position: "fixed", zIndex: "-1" }}
    itemScope
    itemType="http://schema.org/Organization"
  >
    <span itemProp="name">חנות מציאות מדומה</span>
    <span itemProp="company">VR ERA</span>
    <a itemProp="url" href="vr-era.netlify.com">
      vr-era.netlify.com
    </a>
  </div>
);
