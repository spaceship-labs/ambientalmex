// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-09-30 using
// generator-karma 1.0.0

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      "mocha",
      "chai"
    ],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/angular/angular.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-aria/angular-aria.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/angular-material/angular-material.js',
      'bower_components/lodash/lodash.js',
      'bower_components/restangular/dist/restangular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      "node_modules/chai/chai.js",
      "node_modules/chai-things/lib/chai-things.js",
      "app/scripts/**/*.js",
      "test/mock/**/*.js",
      "test/spec/**/*.js"
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      "PhantomJS"
    ],

    // Code coverage report
    reporters: ['progress', 'coverage'],
    preprocessors: {
      'app/scripts/**/*.js': ['coverage']
    },
    coverageReporter: {
      type: 'lcov',
      dir: 'coverage'
    },

    // Which plugins to enable
    plugins: [
      "karma-phantomjs-launcher",
      "karma-mocha",
      'karma-chai',
      'karma-coverage'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
