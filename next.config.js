const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { ANALYZE } = process.env;
const withCSS = require("@zeit/next-css");
const withLess = require("@zeit/next-less");
const withSass = require("@zeit/next-sass");
const compose = require("./util/compose");
// const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const extractVendorCSSPlugin = new ExtractTextPlugin('static/vendor.css')
const extractAppCSSPlugin = new ExtractTextPlugin("static/app.css");

module.exports = compose([
  [
    withLess,
    {
      cssLoaderOptions: { modules: false },
      lessLoaderOptions: {
        javascriptEnabled: true
      }
      // extractCSSPlugin: extractVendorCSSPlugin
    }
  ],
  [
    withSass,
    {
      cssLoaderOptions: {
        modules: false
      },
      sassLoaderOptions: {
        /** sass loader options */
      },
      extractCSSPlugin: extractAppCSSPlugin
    }
  ],
  [withCSS],
  {
    lessLoaderOptions: {
      javascriptEnabled: true
    },
    // publicRuntimeConfig: _envConfig,
    // serverRuntimeConfig: _envConfig,
    exportPathMap: function() {
      return {
        "/": { page: "/" },
        "/about": { page: "/about" },
        "/pimax": { page: "/pimax" },
        "/valve-index": { page: "/valve-index" },
        "/oculus": { page: "/oculus" },
        "/htc-vive": { page: "/htc-vive" },
        "/cart": { page: "/cart" },
        "/vr-glasss": { page: "/vr-glasss" },
        "/vr-accessories": { page: "/vr-accessories" },
        "/accessories/stands": { page: "/accessories/stands" },
        "/accessories/controllers": { page: "/accessories/controllers" },
        "/accessories/general-accessories": {
          page: "/accessories/general-accessories"
        }
      };
    },
    webpack(config, options) {
      if (ANALYZE) {
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: "server",
            analyzerPort: 8888,
            openAnalyzer: true
          })
        );
      }
      config.module.rules.push({
        test: /\.(ttf|eot|png|gif|woff|svg)$/,
        loader: "file-loader"
      });
      return config;
    }
  }
]);
