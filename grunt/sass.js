var config = require('./config');

module.exports = {
  options: {
    compass: true
  },
  dev: {
    files: [
      {
        src: config.src.sass,
        dest: config.dest.sass
      }
    ]
  },
  lego: {
    files: [
      {
        src: './node_modules/lego/src/scss/*.scss',
        dest: './dist/css/lego.css'
      }
    ]
  }
};
