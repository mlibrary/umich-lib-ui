const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.resolve.alias = Object.assign({
    'umich-lib-components-react': path.resolve(__dirname, '../src/components/')
  }, defaultConfig.resolve.alias)

  return defaultConfig
}
