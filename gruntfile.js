module.exports = function(grunt) {
  grunt.initConfig({
    githooks: {
      all: {
        'pre-commit': 'test'
      }
    }
  });

  //Load NPM Taks
  grunt.loadNpmTasks('grunt-githooks');

  //Register tasks
  grunt.registerTask('default', []);
};
