module.exports = {
  setupFilesAfterEnv: [
    '<rootDir>/tests/setup-tests.js'
  ],
  transform: {
    '^.+\\.js?$': '<rootDir>/tests/transform.js'
  },
  collectCoverageFrom: [
    "packages/*/src/**/*.js"
  ]
}