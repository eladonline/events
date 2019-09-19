import App, { Container } from "next/app";
import React from "react";
import Layout from "components/Layout";
import "style/core.scss";
import "style/theme.less";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Layout>
    );
  }
}
