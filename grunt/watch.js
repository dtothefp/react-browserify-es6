module.exports = {
  sass: {
    files: '<%= config.src.sass %>',
    tasks: ['sass:dev']
  },
  jshint: {
    files: ['./public/scripts/**/*.{jsx,js}'],
    task: ['jshint']
  }
};
