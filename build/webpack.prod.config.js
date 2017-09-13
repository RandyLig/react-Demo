var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var plugin = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
})

const autoprefix = {
  loader: 'postcss-loader',
  options: {
    plugins: () => [
      require('autoprefixer')(),
    ],
  },
}


module.exports = {
  module: {
    // boost build performance when ignoring large libraries
    // noParse: function (content) {
    //   return /lodash/.test(content)
    // },
    rules: [
      {
        test: /\.less/,
        use: plugin.extract({
          use: ['css-loader', autoprefix, 'less-loader'],
          fallback: ['style-loader'],
        }),
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: {
          loader: 'url-loader',
          name: '[name].[ext]',
          limit: 15000,
        }
      },
    ],
  },
  plugins: [plugin]
}