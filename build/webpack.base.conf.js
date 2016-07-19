const path = require('path');
const config = require('../config');
const utils = require('./utils');
const projectRoot = path.resolve(__dirname, '../');
const autoprefixer = require('autoprefixer');

const entry = {};

Object.keys(config.pages).forEach(function (name) {
  entry[name] = config.pages[name].entry;
});

module.exports = {
  entry,
  output: {
    path: config.build.assetsRoot,
    publicPath: config.build.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      src: path.resolve(__dirname, '../src'),
      assets: path.resolve(__dirname, '../src/assets'),
      components: path.resolve(__dirname, '../src/components')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    // preLoaders: [
    //   {
    //     test: /\.vue$/,
    //     loader: 'eslint',
    //     include: projectRoot,
    //     exclude: /node_modules/
    //   },
    //   {
    //     test: /\.js$/,
    //     loader: 'eslint',
    //     include: projectRoot,
    //     exclude: /node_modules/
    //   }
    // ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 2048,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  postcss: function () {
    return [autoprefixer];
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    loaders: utils.cssLoaders()
  }
};
