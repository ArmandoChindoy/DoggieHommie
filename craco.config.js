const path = require('path')
module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@img': path.resolve(__dirname, 'src/assets/img/'),
      '@animations': path.resolve(__dirname, 'src/assets/animations/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@features': path.resolve(__dirname, 'src/features')
    }
  }
}
