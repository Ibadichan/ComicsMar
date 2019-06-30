const path = require("path");
const webpack = require("webpack");

const config = {
  mode: "development",

  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "public/assets"),
    publicPath: "/assets/"
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        use: "babel-loader"
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "sass-loader"
        ]
      }
    ]
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],

  resolve: {
    modules: [
      path.resolve(__dirname, "src"),
      path.resolve(__dirname, "node_modules")
    ],
    extensions: [".js"]
  },

  devServer: {
    hot: true,
    overlay: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "public")
  }
};

module.exports = config;
