module.exports = {
  pages: {
    index: {
      entry: './src/main.js',
      template: './public/index.html',
      filename: 'index.html',
      title: 'Superapoyo'
    },
    app: {
      entry: './src/main.js',
      template: './public/index.html',
      filename: 'app.html',
      title: 'app'
    }
  },
  pwa: {
    iconPaths: {
      favicon32: './favicon.ico',
      favicon16: './favicon.ico',
      appleTouchIcon: './favicon.ico',
      maskIcon: './favicon.ico',
      msTileImage: './favicon.ico'
    }
  }
}