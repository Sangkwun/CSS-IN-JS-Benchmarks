const webpack = require('webpack');
const path = require('path');

const sourcePath = path.join(__dirname, './src');
const libraryName = 'index';

let outputFile = libraryName + '.js';

const config = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            [
              '@emotion/babel-plugin',
              {
                sourceMap: true,
                autoLabel: 'always',
              },
            ],
          ],
        },
      },
    ],
  },
  resolve: {
    alias: {
      core: path.join(__dirname, 'core'),
    },
  },
};

module.exports = config;
