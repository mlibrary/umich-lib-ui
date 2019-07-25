module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@emotion/babel-preset-css-prop'
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    ["babel-plugin-module-resolver", {
      "root": ["./src"],
      "alias": {
        "@components": "/components",
        "@shared": "/shared",
        "@umich-lib/core": "./"
      }
    }]
  ]
};