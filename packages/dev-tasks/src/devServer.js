#!/usr/bin/env node
// process.env.NODE_ENV = 'development';
const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const webpackConfig = require('./webpack.config.js');
const compiler = webpack(webpackConfig);

const server = new webpackDevServer(
  {
    hot: false,
    client: {
      logging: 'error',
    },
  },
  compiler
);

server.listen(3000);
