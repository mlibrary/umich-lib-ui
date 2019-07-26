module.exports = {
  setupFiles: [
    '<rootDir>/.jest/context-hook.js'
  ],
  roots: [
    "src/",
    ".storybook/"
  ],
  setupFilesAfterEnv: [
    '<rootDir>/.jest/emotion.js'
  ]
}