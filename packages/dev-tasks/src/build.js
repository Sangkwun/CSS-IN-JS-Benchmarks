#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const { argv } = require('yargs');

process.NODE_ENV = 'production';
const packageName = argv.package;

const webpackConfig = require('./webpack.config.js');
const compiler = webpack(webpackConfig);

compiler.run((err, stats) => {
  if (err || stats.hasErrors()) {
    console.log(`Error at ${packageName}`);

    const info = stats.toJson();
    const space = '    ';

    info.errors.map(err => {
      if (!err) {
        return;
      }
      console.log(err);
      console.log('');

      process.exit(1);
    });
  }
});
