const path = require('path');

function resolve(absPath) {
  return path.resolve(__dirname, absPath);
}

module.exports = {
  root: resolve('../'),
  config: resolve('./'),
  source: resolve('../source/'),
  build: resolve('../build/')
};
