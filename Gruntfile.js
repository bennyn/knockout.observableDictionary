module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  
  directoryConfiguration = {
    target: 'dist'
  };  
  
  grunt.initConfig({
    dir: directoryConfiguration,
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      dist: '<%= dir.target %>',
    },
    concat: {
      options: {
        separator: ';'
      },
      js: {
        src: ['<%= pkg.name %>.js'],
        dest: '<%= dir.target %>/<%= pkg.name %>.js'
      }
    },
    uglify: {
      dist: {
        options: {
          sourceMap: true       
        },
        files: {
          '<%= dir.target %>/<%= pkg.name %>.min.js': ['<%= concat.js.dest %>']
        }
      }
    }    
  });
  
  grunt.registerTask('build', ['clean', 'concat:js']);
  grunt.registerTask('minify', ['build', 'uglify']);
  grunt.registerTask('default', ['minify']);
};
