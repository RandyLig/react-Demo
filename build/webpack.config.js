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
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.jsx?$/, // test 去判断是否为.js或.jsx,是的话就是进行es6和jsx的编译
        loader: 'babel-loader',
        exclude: /node_modules/, //不进行转换的文件，可以提高打包速度
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015'],
          plugins: [

            ["import", { libraryName: "antd", style: "css" }] //按需加载

          ]

        }
      },
      {
        test: /\.jsx?/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
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
      template: path.join(__dirname, '../src/index.html'),
      inject: true,
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
}

module.exports = (env) => {
  process.env.BABEL_ENV = env
  if (env === 'development') {
    return merge(commonConfig, devWebpackConfig)
  }
  return merge(commonConfig, proWebpackConfig)
}






