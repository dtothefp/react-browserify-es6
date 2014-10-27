var config = require('./config');

module.exports = {
  dev: {
    files: [
      {
        src: [ 'public/*.html' ],
        dest: 'dist/',
        flatten: true,
        expand: true
      },
      {
        src: ['public/img/**'],
        dest: 'dist/img/',
        flatten: true,
        expand: true,
        filter: 'isFile'
      },
      {
        src: ['public/css/lego.{css, css.map}'],
        dest: 'dist/css/',
        flatten: true,
        expand: true
      }
    ]
  },
  prod: {
    src: 'src/*.html',
    dest: 'build/',
  }
}
