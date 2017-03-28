'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var sonar = require('gulp-sonar');
var util = require('gulp-util');

gulp.task('sonar', function () {
  var options = {
          sonar: {
              host: {
                  url: 'http://dev-coeci-01.cloudapp.net/sonar/'
              },
              jdbc: {
                  url: 'jdbc:mysql://localhost:3306/sonar?useUnicode=true&characterEncoding=utf8',
                  username: 'sonaruser',
                  password: 'sonar'
              },
              projectKey: 'olympusClientAPP',
              projectName: 'Olympus-Client-APP',
              projectVersion: '1.0.0',
              sources: 'src',
              language: 'js',
              exclusions : "/**/index.auth.js,/**/*.spec.js,/**/*.mock.js",
              sourceEncoding: 'UTF-8',
              javascript: {
                  lcov: {
                      reportPath: 'reports/coverage/lcov.info'
                  },
                  junit: {
                      reportPath: 'reports/junit/TESTS-junit.xml'
                  }
              }
          }
      };

      // gulp source doesn't matter, all files are referenced in options object above
      return gulp.src('thisFileDoesNotExist.js', { read: false })
          .pipe(sonar(options))
          .on('error', util.log);
});
