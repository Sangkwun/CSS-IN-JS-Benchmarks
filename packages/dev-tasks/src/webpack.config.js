const webpack = require('webpack');
const path = require('path');
const chalk = require('chalk');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const EmotionBabelPlugin = require('@emotion/babel-plugin');

const { argv } = require('yargs');
const packageName = argv.package;

const sourcePath = path.join(
  __dirname,
  '..',
  '..',
  'benchmarks',
  packageName,
  './client'
);
const staticsPath = path.join(
  __dirname,
  '..',
  '..',
  'benchmarks',
  packageName,
  './static'
);

const isProd = process.NODE_ENV === 'production';
console.log(
  `webpack build with env ${isProd ? chalk.green('production') : chalk.green('development')}`
);

const plugins = [
  new webpack.optimize.SplitChunksPlugin({
    name: 'vendor',
    minChunks: Infinity,
    filename: 'vendor.bundle.js',
  }),
  new webpack.EnvironmentPlugin({
    NODE_ENV: process.NODE_ENV,
  }),
];

if (isProd) {
  plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new MiniCssExtractPlugin()
    // new webpack.optimize.minimize()
  );
} else {
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = {
  devtool: isProd ? 'source-map' : 'eval',
  context: sourcePath,
  entry: {
    js: './index.js',
    vendor: ['react'],
  },
  output: {
    path: staticsPath,
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      },
      {
        test: /\.(js|jsx)$/,
        include: sourcePath,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              [
                '@babel/preset-react',
                { runtime: 'automatic', importSource: '@emotion/react' },
              ],
            ],
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
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: isProd
          ? [MiniCssExtractPlugin.loader, 'css-loader']
          : [
              'style-loader',
              {
                loader: 'css-loader',
                options: { sourceMap: true },
              },
            ],
      },
    ],
  },
  resolve: {
    extensions: [
      '.webpack-loader.js',
      '.web-loader.js',
      '.loader.js',
      '.js',
      '.jsx',
    ],
    modules: [
      // path.join(__dirname, '..', '..', packageName, 'node_modules')
      // 'node_modules',
      path.join(
        __dirname,
        '..',
        '..',
        'benchmarks',
        packageName,
        'node_modules'
      ),
      path.join(__dirname, '..', '..', '..', 'node_modules'),
    ],
  },

  plugins,

  performance: isProd && {
    maxAssetSize: 100,
    maxEntrypointSize: 300,
    hints: 'warning',
  },

  stats: {
    colors: {
      green: '\u001b[32m',
    },
  },

  devServer: {
    contentBase: './client',
    historyApiFallback: true,
    port: 3000,
    compress: isProd,
    inline: !isProd,
    hot: !isProd,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m',
      },
    },
  },
};
