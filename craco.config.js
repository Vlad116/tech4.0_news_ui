const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      // See docs in https://www.npmjs.com/package/craco-alias
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.paths.json",
      },
    },
  ],
};
