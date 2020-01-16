//const sass = require('./config/sass-process');

module.exports = function(eleventyConfig) {
    //sass('./style/index.scss', './_site/style/index.css');
    eleventyConfig.addPassthroughCopy("index.css");
    eleventyConfig.addPassthroughCopy("things.css");
    eleventyConfig.addPassthroughCopy("favicon.ico");
    eleventyConfig.addPassthroughCopy("sitemap.xml");
    eleventyConfig.addPassthroughCopy("icons");
    return {
        dir: {
          output: "_site"
        }
      };
  };