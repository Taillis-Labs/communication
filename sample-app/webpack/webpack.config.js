const path = require("path")
const webpack = require("webpack")

module.exports = {
  context: path.resolve(__dirname, ".."),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          {
            loader: "eslint-loader",
            options: {
              failOnError: true,
              emitError: true,
              emitWarning: true
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            query: {
              mozjpeg: {
                progressive: true
              },
              gifsicle: {
                interlaced: false
              },
              optipng: {
                optimizationLevel: 7
              },
              pngquant: {
                quality: '75-90',
                speed: 3
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      application: path.resolve(__dirname, "..", "src", "application"),
      browser: path.resolve(__dirname, "..", "src", "browser"),
      server: path.resolve(__dirname, "..", "src", "server"),
      config: path.resolve(__dirname, "..", "config")
    }
  },
  plugins: [
  ]
}
