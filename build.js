'use strict'

var Metalsmith = require('metalsmith');
var sass = require('metalsmith-sass');
var watch = require('metalsmith-watch');
var autoprefixer = require('metalsmith-autoprefixer');

Metalsmith(__dirname)
  .source('sass')
  .destination('build')
  .use(sass({
    outputStyle: 'expanded' 
  }))
  .use(watch('**/*.scss'))
  .use(autoprefixer())
  .build(function(err){
    if (err) throw err;
  });

Metalsmith(__dirname)
  .build(function(err){
    if (err) throw err;
  });
