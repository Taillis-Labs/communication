const path = require("path")
const config = require("./webpack.config")
const ExtractText = require("extract-text-webpack-plugin")

const extractSass = new ExtractText({
  filename: process.env.NODE_ENV === "development" ? "styles.css" : "styles.[sha1:contenthash:20].css",
  disable: process.env.NODE_ENV === "development"
})

const configClient = Object.assign({}, config, {
  entry: "./src/browser/index.js",
  output: {
    path: path.resolve(__dirname, "..", "build", "public"),
    publicPath: "/assets/",
    filename: process.env.NODE_ENV === "development" ? "app.min.js" : "app.min.js"
  }
})

configClient.resolve.alias.joi = "joi-browser"

configClient.module.rules.push({
  test: /\.scss$/,
  use: extractSass.extract({
    use: [{
      loader: "css-loader",
      options: { minimize: true }
    }, {
      loader: "sass-loader"
    }],
    fallback: "style-loader"
  })
}, {
    test: /\.(woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: "file-loader"
  })

configClient.plugins.push(extractSass)

module.exports = configClient
