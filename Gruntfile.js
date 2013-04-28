'use strict';

//--------------------------------------------------------------------------
//
// grunt-contrib-livereload
//
//--------------------------------------------------------------------------
var path = require('path');
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var folderMount = function (connect, point) {
  return connect.static(path.resolve(point));
};

module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

    //--------------------------------------------------------------------------
    //
    // Build presentation
    //
    //--------------------------------------------------------------------------

    concat: {
      options: {
        separator: '\n\n\n'
      },
      readme: {
        src: [
          'slides/splash.md',
          'slides/npm-crash-course.md',
          'slides/getting-started.md',
          'slides/creating-a-new-project-from-scratch.md',
          'slides/working-with-tasks.md',
          'slides/project-scaffolding.md',
          'slides/workflow.md',
          'slides/controversy.md',
          'slides/thanks.md'
        ],
        dest: 'readme.md'
      }
    },
    copy: {
      preso: {
        files: [{src: 'readme.md', dest:'www/bbmeetup-grunt.md'}]
      }
    },
    regarde: {
      slides: {
        files: ['Gruntfile.js', 'slides/*.md'],
        tasks: ['clean', 'concat', 'copy']
      },
      livereload: {
        files: ['www/**.*'],
        tasks: ['livereload']
      }
    },
    watch: {
    },
    clean: {
      less: ['www/bbmeetup-grunt.md', 'readme.md']
    },

    //--------------------------------------------------------------------------
    //
    // Livereload
    //
    //--------------------------------------------------------------------------

    connect: {
      livereload: {
        options: {
          port: 8000,
          base: 'www',
          // http://www.senchalabs.org/connect/
          // http://stackoverflow.com/questions/7337572/can-someone-explain-what-middleware-is-and-what-app-use-actually-means
          // Middleware allows you define a stack of actions that you should
          // flow through. Express servers them self are a stack of middleware.
          middleware: function (connect, options) {
            return [lrSnippet, folderMount(connect, options.base)];
          }
        }
      }
    },
    livereload: {
      port: 35729
    }

  });

  //--------------------------------------------------------------------------
  //
  // npm tasks
  //
  //--------------------------------------------------------------------------

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-livereload');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['clean', 'concat', 'copy', 'livereload-start', 'connect', 'regarde']);

};
