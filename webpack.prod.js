const path = require("path");
const ManifestPlugin = require("webpack-manifest-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const config = {
  mode: "production",

  entry: "./src/index.js",
  output: {
    filename: "main.[hash].js",
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
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2
            }
          },
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },

  plugins: [
    new ManifestPlugin(),
    new MiniCssExtractPlugin({
      filename: "main.[hash].css"
    }),
    new CompressionPlugin({
      test: /\.(js|css)$/
    })
  ],

  resolve: {
    modules: [
      path.resolve(__dirname, "src"),
      path.resolve(__dirname, "node_modules")
    ],
    extensions: [".js"]
  }
};

module.exports = config;
