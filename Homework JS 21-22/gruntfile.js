module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        babel: {
            options: {
                sourceMap: false,
                presets: ['es2015']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/js',
                    src: ['script_es6.js'],
                    dest: 'dist/js',
                    ext: '.js',
                    extDot: 'first'
                }]
            }
        },
        watch: {
            babel: {
                files: 'src/js/script_es6.js',
                tasks: ['babel']
            },
        },
        jasmine: {
            test: {
                options: {
                    // добавляем ссылку на стороннюю библиотеку
                    vendor: [
                        'node_modules/jquery/dist/jquery.js',
                        'node_modules/jasmine-jquery/lib/jasmine-jquery.js'
                    ],
                    // конец изменений
                    specs: 'spec/*[sS]pec.js'
                }
            }
        },

});