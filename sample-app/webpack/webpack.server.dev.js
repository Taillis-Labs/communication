const webpack = require("webpack")
const serverConfig = require("./webpack.server")

const serverDevConfig = Object.assign({}, serverConfig)

serverDevConfig.plugins.push(
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("development"),
      BROWSER: JSON.stringify(false)
    }
  })
)

module.exports = serverDevConfig
