module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/test-git-actions/'
    : '/'
  outputDir: 'dist'
}
