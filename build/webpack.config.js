const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge')
const devWebpackConfig = require('./webpack.dev.config.js')
const proWebpackConfig = require('./webpack.prod.config.js')

const commonConfig = {
  entry: {
    app: path.join(__dirname, '../src'),
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test : /\.jsx?/,
        use : [
          {
            loader : 'babel-loader',
            options :{
              cacheDirectory : true,
            },
          },
          // add more loaders
        ]
      }
    ],
  },
  plugins: [
    // auto generated html for inject js file
    new HtmlWebpackPlugin({
      title: 'reactDemo',
    }),
  ],
  resolve: {
    extensions: ['.js','.jsx','.json'],
  },
}

module.exports = (env) => {
  if (env === 'development') {
    return merge(commonConfig, devWebpackConfig)
  }
  return merge(commonConfig, proWebpackConfig)
}






