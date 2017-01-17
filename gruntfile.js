module.exports = function(grunt) {
  grunt.initConfig ({
    sass: {
      entry_point1: {
        options: {
          style: 'expanded'
        },
        files: {
          'style1.css': 'style1.scss'
        }
      },
      entry_point2: {
        files: {
          'style2.css': 'style2.scss'
        }
      }
    },
    watch: {
      styles: {
        files: ['**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass', 'watch']);
};
