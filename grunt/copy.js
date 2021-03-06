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
      }
    ]
  },
  prod: {
    src: 'src/*.html',
    dest: 'build/',
  }
}
