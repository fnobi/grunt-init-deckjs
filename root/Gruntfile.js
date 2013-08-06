module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            html: {
                files: ['src/ejs/*.ejs', 'src/ejs/**/*.ejs', 'src/*.yaml'],
                tasks: ['ejs']
            },
            css: {
                files: ['src/sass/style/*.scss', 'src/sass/transition/*.scss'],
                tasks: ['compass']
            }
        },
        compass: {
            style: {
                options: {
                    sassDir: 'src/sass/style',
                    cssDir: 'themes/style',
                    environment: 'development'
                }
            },
            transition: {
                options: {
                    sassDir: 'src/sass/transition',
                    cssDir: 'themes/transition',
                    environment: 'development'
                }
            }
        },
        ejs: {
            dev: {
                template: ['src/ejs/*.ejs'],
                dest: './',
                options: 'src/options.dev.yaml'
            }
        },
        koko: {
            dev: {
                openPath: '/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-simple-ejs');
    grunt.loadNpmTasks('grunt-koko');

    grunt.registerTask('server', ['koko']);
    grunt.registerTask('dev', ['ejs:dev', 'compass:dev']);
    grunt.registerTask('default', ['dev']);
};