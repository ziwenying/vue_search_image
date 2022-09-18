module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue_search_image/'
    : '/',
  css: { extract: false },
}