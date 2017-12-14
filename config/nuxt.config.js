const path = require('path');

module.exports = {
  dev: process.env.NODE_ENV !== 'production',
  rootDir: path.resolve(__dirname, '../'),
  srcDir: path.resolve(__dirname, '../')
}
