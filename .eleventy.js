//const sass = require('./config/sass-process');

module.exports = function(eleventyConfig) {
    //sass('./style/index.scss', './_site/style/index.css');
    eleventyConfig.addPassthroughCopy("index.css");
    
    return {
        dir: {
          output: "docs"
        }
      };
  };