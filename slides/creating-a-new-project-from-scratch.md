## Creating a new project from scratch

<http://gruntjs.com/getting-started#preparing-a-new-grunt-project>


CD to your project's directoy and run this:

    npm init
    npm install grunt --save-dev


## A very basic Gruntfile

    module.exports = function(grunt) {
        // Project configuration.
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json')
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
        // Set as default
        grunt.registerTask('default', ['log-project']);
    };

See [grunt the grunt.log API](http://gruntjs.com/api/grunt.log)
