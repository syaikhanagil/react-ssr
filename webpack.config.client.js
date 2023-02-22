/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  name: 'index',
  target: 'web',
  entry: {
    app: path.resolve(__dirname, 'src/index.tsx')
  },
  output: {
    path: path.resolve(__dirname, 'build/static'),
    filename: '[name].[contenthash].js',
    publicPath: ''
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.sass', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(ts)x?$/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.json'
        }
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // eslint-disable-next-line global-require
              implementation: require('sass')
            }
          }
        ]
      }
    ]
  },
  plugins: [new CleanWebpackPlugin(), new WebpackManifestPlugin(), new MiniCssExtractPlugin()]
};
