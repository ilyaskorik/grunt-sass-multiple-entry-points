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
      watch_1: {
        files: ['style1.scss'],
        tasks: ['sass:entry_point1'],
        options: {
          spawn: false
        }
      },
      watch_2: {
        files: ['style2.scss'],
        tasks: ['sass:entry_point2'],
        options: {
          spawn: false
        }
      }
    },
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      watch: {
        tasks: ["watch:watch_1", "watch:watch_2"]
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass', 'concurrent:watch']);
};
