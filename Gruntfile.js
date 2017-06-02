'use strict'
module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt)

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: ['covervid.min.js'],

    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015']
      },
      dist: {
        files: {
          'covervid.min.js': 'covervid.js'
        }
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      dist: {
        files: {
          'covervid.min.js': ['covervid.min.js']
        }
      }
    },

    watch: {
      dist: {
        files: 'covervid.js',
        tasks: ['clean', 'uglify', 'watch']
      }
    }

  })

  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask('default', ['clean', 'babel', 'uglify', 'watch'])
  grunt.registerTask('publish', ['clean', 'babel', 'uglify'])
}