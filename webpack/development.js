const loaders = require('./loaders');
const plugins = require('./plugins');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  watch: false,
  devtool: 'inline-source-map',
  context: path.resolve(__dirname, '../source'),

  entry: './index.js',

  output: {
    filename: 'js/app.bundle.js',
    path: path.resolve(__dirname, '../build')
  },

  module: {
    loaders: [loaders.style, loaders.babel]
  },

  resolve: {
    modules: [path.resolve(__dirname, '../node_modules')],
    extensions: ['.js', '.json', '.styl', '.css'],
    alias: {
      '@comps': path.resolve(__dirname, '../source/comps'),
			'@styles': path.resolve(__dirname, '../source/styles'),
			'@utils': path.resolve(__dirname, '../source/utils'),
			'@packages': path.resolve(__dirname, '../source/packages'),
			'@scenes': path.resolve(__dirname, '../source/scenes'),
    }
  },

  plugins: [
		...plugins,
		new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    hot: true,
    overlay: true,
		lazy: false,
    contentBase: path.resolve(__dirname, '../build')
  },

  watchOptions: {
    watch: true
  }
};
