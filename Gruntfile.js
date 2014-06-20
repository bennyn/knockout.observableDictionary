module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  
  directoryConfiguration = {
    target: 'dist'
  };  
  
  grunt.initConfig({
    dir: directoryConfiguration,
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*\n' +
            ' * Knockout Observable Dictionary\n' +            
            ' * (c) James Foster\n' +
            ' * License: MIT (http://www.opensource.org/licenses/mit-license.php)\n' +
            ' * <%= grunt.template.today("yyyy-mm-dd") %>\n' +
            ' */',    
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
          banner: '<%= banner %>',
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
