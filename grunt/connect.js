module.exports = {
  options: {
    port: 8080,
    livereload: 35729,
  },
  livereload: {
    options: {
      base: 'dist/',
      open: {
        target: 'http://localhost:8080'
      }
    }
  }
};
