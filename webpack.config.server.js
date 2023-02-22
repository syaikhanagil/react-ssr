/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  name: 'server',
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
  target: 'node',
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
