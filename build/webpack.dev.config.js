var path = require('path')

const PORT = '4040'
const HOST = 'localhost'

module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: ['url-loader'],
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    stats: 'errors-only',
    port: PORT,
    host: HOST,
    overlay: {
      errors: true,
    },
  },
}