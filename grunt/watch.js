var config = require('./config');

module.exports = {
  livereload: {
    options: {
      livereload: '<%= connect.options.livereload %>'
    },
    files: [config.src.sass, config.src.js, './public/scripts/**/*.jsx']
  },
  sass: {
    files: config.src.sass,
    tasks: ['sass:dev']
  }
};
