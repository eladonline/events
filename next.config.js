const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { ANALYZE } = process.env;
const withCSS = require('@zeit/next-css');
const withLess = require('@zeit/next-less');
const withSass = require('@zeit/next-sass');
const compose = require('./util/compose');
// const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const extractVendorCSSPlugin = new ExtractTextPlugin('static/vendor.css')
const extractAppCSSPlugin = new ExtractTextPlugin('static/app.css');

const _env = process.env.CONFIG_ENV || process.env.NODE_ENV || 'development';
const _envConfig = require('./src/logic/envConfig/web')(_env);

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
    publicRuntimeConfig: _envConfig,
    serverRuntimeConfig: _envConfig,
    target: 'serverless',
    webpack(config, options) {
      // config.plugins.push(extractVendorCSSPlugin)
      // config.plugins.push(extractAppCSSPlugin)
      config.module.rules.push({ test: /\.(ttf|eot|png|gif|woff|svg)$/, loader: 'file-loader' });
      // if (!options.isServer) {
      //   config = commonsChunkConfig(config, /\.(less|scss|sass)$/)
      // }
      if (ANALYZE) {
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerPort: 8888,
            openAnalyzer: true
          })
        );
      }
      return config;
    }
  }
]);
