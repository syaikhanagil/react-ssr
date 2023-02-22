/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const app = {
  name: 'index',
  target: 'web',
  devtool: 'source-map',
  mode: 'development',
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
          'style-loader',
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
  plugins: [new CleanWebpackPlugin(), new WebpackManifestPlugin()]
};

const server = {
  name: 'server',
  target: 'node',
  devtool: 'source-map',
  mode: 'development',
  entry: {
    server: path.resolve(__dirname, 'server/server.tsx')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx']
  },
  externals: [nodeExternals()],
  node: {
    __dirname: false
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ context: 'server', from: 'views', to: 'views' }]
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.server.json'
        }
      }
    ]
  }
};

module.exports = [app, server];
