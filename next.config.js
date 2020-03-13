const withPlugins = require("next-compose-plugins");
const fonts = require("next-fonts");
const images = require("next-images");

module.exports = withPlugins([fonts, images]);
