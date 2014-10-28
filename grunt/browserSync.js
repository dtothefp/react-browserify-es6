module.exports = {
  dev: {
      bsFiles: {
        src : ['dist/css/*.css', 'dist/js/*.js']
      },
      options: {
        watchTask: true,
        proxy: "localhost:8080"
      }
  }
};
