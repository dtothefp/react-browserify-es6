var shims = require("./browserify-config/shim"),
  sharedModules = Object.keys(shims).concat([]);

module.exports = {
  options: {
    debug: true
  },
  app: {
    options: {
      watch: true,
      transform: [
        ['reactify', {'es6':true}]
      ],
      external: sharedModules,
      browserifyOptions: {
        extensions: ['.jsx']
      }
    },
    src: ['./public/scripts/init.jsx'],
    dest: '<%= config.dest.js %>'
  },
  lib: {
    options: {
      transform: [
        'browserify-shim',
      ],
      require: sharedModules
    },
    src: ['./public/scripts/vendor/*.js'],
    dest: './dist/js/libs.js'
  },
  production: {
    options: {
      debug: false
    },
    src: '<%= browserify.dev.src %>',
    dest: 'build/bundle.js'
  }
};
