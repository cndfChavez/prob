var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {

    var modAdminPath = 'vendor/modular-admin/';

    mix
        .styles(
            [
                'bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                modAdminPath + 'css/vendor.css',
                modAdminPath + 'css/app-custom.css',
                modAdminPath + 'css/app-seagreen.css',
                'bower_components/bootstrap-calendar/css/calendar.min.css'
            ],
            'public/css/app.css',
            'resources/assets/'
        )
        .scripts(
            [
                modAdminPath + 'js/vendor.js',
                modAdminPath + 'js/app.js',
                'bower_components/moment/min/moment.min.js',
                'bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
                'bower_components/underscore/underscore-min.js',
                'vendor/bootbox/bootbox.min.js',
                'vendor/bootbox/custom.js',
                'app/js/calendar.js',
                'app/js/app-calendar.js',
                'app/js/app-bootbox.js',
                'app/js/students-show.js'
            ],
            'public/js/app.js',
            'resources/assets/'
        )
        .copy(
            'resources/assets/' + modAdminPath + 'fonts', 'public/fonts'
        )
        .copy(
            'resources/assets/bower_components/bootstrap-calendar/tmpls', 'public/tmpls'
        );
});
