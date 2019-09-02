const config = {
  plugins: [
    require("autoprefixer")({
      grid: true
    }),
    require("cssnano")({
      preset: "default"
    })
  ]
};

module.exports = config;
