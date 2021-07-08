module.exports = function (eleventyConfig) {

  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget("./docs/_sass/");
  eleventyConfig.setBrowserSyncConfig({
    ui: false,
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "docs"
    },
  };
};
