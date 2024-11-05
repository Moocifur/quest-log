//webpack.dev.js
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',  // For easier debugging
  devServer: {
    static: './dist',
    open: true,
    watchFiles: ['./src/**/*'],
  },
});