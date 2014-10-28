module.exports = {
  options: {
    port: 8080
  },
  dev: {
    options: {
      base: 'dist/',
      open: {
        target: 'http://localhost:8080'
      }
    }
  }
};
