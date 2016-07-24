module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        requirejs: {
            desktopJS: {
                options: {
                    baseUrl: "source/js/",
                    wrap: true,
                    preserveLicenseComments: false,
                    optimize: "none",
                    mainConfigFile: "source/js/modules/config/config.js",
                    include: ["app.main.js"],
                    out: "dist/wellness.min.js"
                }
            }    
        },
        jshint: {
            files: ['Gruntfile.js', 'source/js/app/**/*.js', '!source/js/app/**/*min.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: false,
                    module: true,
                    document: true
                }
            }
        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/wellness.css': 'source/styles/*.scss'
                }
            }
        },
        copy: {
            html: {
                files: [
                {expand: true, flatten: true, src: ['source/**.html'], dest: 'dist/'}
                ]
            },
            js: {
                files: [
                {expand: true, flatten: true, src: ['source/js/libs/*.js'], dest: 'dist/libs'}
                ]
            },
            img: {
                files: [
                {expand: true, flatten: true, src: ['source/img/*.*'], dest: 'dist/img'}
                ]               
            }
        }       
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('watch', ['watch', 'jshint']);
    grunt.registerTask('build', ['requirejs:desktopJS', 'sass', 'copy:html', 'copy:js', 'copy:img']);
    grunt.registerTask('default', ['test', 'build']);
};
