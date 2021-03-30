module.exports = {
    target: "webworker",
    entry: "./index.js",
    mode: "production",
    node: {
        __dirname: false,
        __filename: false,
    }
  }