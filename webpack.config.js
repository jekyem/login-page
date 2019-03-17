const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputDirectory = "build/client";
 
module.exports = {
  entry: {
    loginPage:path.resolve(__dirname, "./src/client/loginPage/index.js")
  },
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: '[name]/bundle.js',
    // publicPath: "/"
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
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"]
      // }
    ]
  },
  devServer: {
    port: 3000,
    openPage:'loginPage',
    open: true,
    hot:true,
    inline:true,
    proxy: {
      "/api": "http://localhost:8080"
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "loginPage/index.html",
      chunks:['loginPage'],
      template: path.resolve(__dirname, "src/client/index.html")
    }),
    new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
    })
]
};
