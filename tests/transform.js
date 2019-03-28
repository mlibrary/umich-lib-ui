const babelOptions = {
  presets: [
    '@babel/preset-react',
    '@babel/preset-env'],
  plugins: [
    'require-context-hook',
    'transform-class-properties',
    '@babel/plugin-proposal-object-rest-spread'
  ]
};

module.exports = require('babel-jest').createTransformer(babelOptions);