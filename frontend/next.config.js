const withImages = require('next-images');
const withFonts = require('next-fonts');
const withPWA = require('next-pwa')

module.exports = withFonts(withImages(withPWA({
  webpack(config, options) {
    return config;
  },
  pwa: {
    dest: 'public'
  },
})));



