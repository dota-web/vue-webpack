var path = require('path');
var SpritesmithPlugin = require('webpack-spritesmith');

module.exports = function () {
  return new SpritesmithPlugin({
    src: {
      cwd: path.resolve(__dirname, '../src/assets/icons'),
      glob: '*.png'
    },
    target: {
      image: path.resolve(__dirname, '../src/assets/sprites/sprite.png'),
      css: path.resolve(__dirname, '../src/assets/sprites/sprite.scss')
    },
    retina: '@2x',
    apiOptions: {
      cssImageRef: '../../assets/sprites/sprite.png'
    }
  });
};
