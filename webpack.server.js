const path = require("path");
const webpack = require("webpack");

const config = {
  mode: "production",
  target: "node",

  entry: "./SSR/index.js",
  output: {
    filename: "SSR.js",
    path: path.resolve(__dirname, "public/assets"),
    libraryTarget: "commonjs2",
    publicPath: "/assets/"
  },

  externals: ["react-helmet"],

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: [path.resolve(__dirname, "node_modules/core-js")],
        use: "babel-loader"
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              emitFile: false,
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ["ignore-loader"]
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      "global.GENTLY": false
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
