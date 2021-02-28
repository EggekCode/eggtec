const withImages = require('next-images');
const withFonts = require('next-fonts');

module.exports = withFonts(withImages({
  webpack(config, options) {
    return config;
  },
}));
