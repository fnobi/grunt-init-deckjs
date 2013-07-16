module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            html: {
                files: ['src/ejs/*.ejs', 'src/ejs/**/*.ejs', 'src/*.yaml'],
                tasks: ['ejs:dev']
            }
        },
        ejs: {
            dev: {
                template: ['src/ejs/*.ejs'],
                dest: './',
                options: 'src/options.dev.yaml'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-simple-ejs');

    grunt.registerTask('build', ['ejs']);
    grunt.registerTask('default', ['build']);
};