const webpack = require("webpack")
const clientConfig = require("./webpack.client")

const clientDevConfig = Object.assign(clientConfig, {
  devServer: {
    host: "localhost",
    port: 8080,
    hot: true,
    proxy: {
      "**": "http://localhost:3000",
      proxyTimeout: 1000 * 60 * 5
    }
  },
  devtool: "eval-source-map"
})

clientDevConfig.entry = [
  "react-hot-loader/patch",
  "webpack-dev-server/client?http://localhost:8080",
  "webpack/hot/only-dev-server",
  clientConfig.entry
]

clientDevConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development'),
      BROWSER: JSON.stringify(true)
    }
  })
)

module.exports = clientDevConfig
