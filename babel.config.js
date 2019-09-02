const config = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        corejs: 3
      }
    ],
    "@babel/preset-react"
  ],
  plugins: ["@babel/plugin-proposal-object-rest-spread"]
};

module.exports = config;
