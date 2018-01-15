const path = require("path")
const nodeExternals = require("webpack-node-externals")
const config = require("./webpack.config")

const configServer = Object.assign({}, config, {
  entry: "./src/server/index.js",
  output: {
    path: path.resolve(__dirname, "..", "build"),
    filename: "server.js"
  },
  target: "node",
  externals: nodeExternals()
})

configServer.module.rules.push({
  test: /\.css$/,
  loader: "file-loader"
})

module.exports = configServer
