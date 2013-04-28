## Working with tasks


Install the `grunt-contrig-uglify` task:

    npm install grunt-contrib-uglify --save-dev

Load the task in your `Gruntfile`:

    grunt.loadNpmTasks('grunt-contrib-uglify');

Configure the task in the wrapper function:

    uglify: {
        options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
            src: '<%= pkg.name %>.js',
            dest: '<%= pkg.name %>.min.js'
        }
    }


- You can user JSON and JavaScript to configure tasks
- Tasks: will match the name of the grunt task
- Targets: multi-tasks can have multiple confiturations (targets)
- You can run specific targets:

        grunt uglify:build


### Complete snippet

    module.exports = function(grunt) {
        // Project configuration.
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            // Uglify task configuration
            uglify: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },
                build: {
                    src: '<%= pkg.name %>.js',
                    dest: '<%= pkg.name %>.min.js'
                }
            }
        });
        // A very basic task.
        grunt.registerTask('log-project', 'Log project info.', function() {
            var pkg = grunt.config.get('pkg');
            grunt.log.subhead(pkg.title)
                .writeln(pkg.description)
                .writeln(pkg.name)
                .writeln(pkg.version)
                .ok();
        });
        // Load an existing task
        grunt.loadNpmTasks('grunt-contrib-uglify');
        // Set the default task
        grunt.registerTask('default', ['log-project', 'uglify']);
    };

Also [here](https://gist.github.com/grancalavera/5478468)


### Feeling lost?

    grunt --help

You'll get usage information and the list of all the tasks available to your
project.
