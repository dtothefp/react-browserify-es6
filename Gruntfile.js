module.exports = function(grunt) {
	require('load-grunt-config')(grunt, {
    jitGrunt: {
      staticMappings: {
        jshint: 'grunt-jsxhint'
      }
    },
    init: true,
    data: {nodeModuleDir: 'node_modules/'},
    postProcess: function(config) {
    }
  });

	// The development server (the recommended option for development)
	grunt.registerTask('default', ['sass', 'jshint', 'browserify:lib', 'browserify:app', 'copy:dev', 'connect', 'browserSync', 'watch']);

};
