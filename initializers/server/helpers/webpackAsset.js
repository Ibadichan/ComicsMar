const manifest = require("../../../public/assets/manifest.json");

function webpackAsset(asset) {
  return manifest[asset];
}

module.exports = webpackAsset;
