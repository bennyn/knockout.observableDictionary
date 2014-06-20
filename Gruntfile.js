module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      dist: 'dist',
    },
    concat: {
      options: {
        separator: ';'
      },
      js: {
        src: ['<%= pkg.name %>.js'],
        dest: 'dist/js/<%= pkg.name %>.js'
      }
    },
    uglify: {
      dist: {
        options: {
          sourceMap: true       
        },
        files: {
          'dist/js/<%= pkg.name %>.min.js': ['<%= concat.js.dest %>']
        }
      }
    }    
  });
  
  grunt.registerTask('build', ['clean', 'concat:js']);
  grunt.registerTask('minify', ['build', 'uglify']);
  grunt.registerTask('default', ['minify']);
};