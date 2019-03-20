const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputDirectory = "build/public";
 
module.exports = {
  entry: {
    login:path.resolve(__dirname, "./src/client/login/index.js")
  },
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'javascript/[name].js',
    publicPath: "../"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "../views/login.html",
      chunks:['login'],
      template: path.resolve(__dirname, "src/client/index.html")
    }),
    new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
    })
]
};
