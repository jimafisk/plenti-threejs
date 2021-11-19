const path = require('path');

module.exports = {
  //entry: './node_modules/three/src/Three.js',
  entry: ['three'],
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'bundle.js',
    chunkFormat: 'module',
  },
  /*
  optimization: {
    minimize: false
  },
  */
};