


## NPM crash course


### List all installed packages

    npm list -g --depth=0

This is really useful to get an overview of what is installed in your machine at
any given moment in time.


### View information about a package

    npm view <name>[@<version>] [<field>[.<subfield>]...]

Sometimes you want to know if there's a new version for one of your packages, or
if the version npm installed for you is the version you actually want.


### Install a package globally in your computer

    npm install -g [package]

You will need to install `grunt-cli` and `grunt-init` globally.


### Initialise a new npm project using the init wizard

    npm init

This one creates a `package.json` file for you. Also, once you've added a
package.json file to a directory, you can start installing npm modules locally
for your project.


### Install packages and save them to your package.json file

    npm install --save

    npm install ---save-dev


### About `sudo`

If you are using a *nix system, sometimes you'll need to prepend `sudo` before
running a command:

    sudo npm install -g [package]



### Getting Started

<http://gruntjs.com/getting-started>


## Install the CLI

    sudo npm install -g grunt-cli

`grunt-cli` will take care of finding and running grunt. This is a
nice explanation of [how it works](http://gruntjs.com/getting-started#how-the-cli-works).


## Creating projects

- `package.json`: metadata relevant to your project. Stores versioning information,
dependencies, authors, etc.

- `Gruntfile.js|Gruntfile.coffee`: a valid JavaScript or CoffeeScript file. This is
where your project and tasks configuration takes place.




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



##Project Scaffolding
<http://gruntjs.com/project-scaffolding>


### Install `grunt-init`

    sudo npm install -g grunt-init
    grunt-init --help


### Installing templates

Any template installed in the following directories will be available to use
with `grunt-init`:

- `~/.grunt-init/` (*nix)
- `%USERPROFILE%\.grunt-init\` (Windows)
- Installing a template just means copying the template into one of those
directories
- grunt-contrib templates are available on GitHub, which means installing
them requires cloning the repos into one of those directories.


## Tip

grunt will follow symlinks from `~/.grunt-init/`, that means you can:

    cd ~/.grunt-init
    ln -s ~/path/to/TEMPLATE TEMPLATE

... and then you can:

    grunt-init TEMPLATE

... as if TEMPLATE was an available template.

This is particularly useful when you are developing your own templates, or if
you don't want to clone stuff into `~/.grunt-init`


## The jQuery init template

    cd ~/.grunt-init
    git clone git@github.com:gruntjs/grunt-init-jquery.git ~/.grunt-init/jquery
    grunt-init jquery
    npm install
    grunt


Happy times? Maybe, because you might be missing [PhantomJS](http://phantomjs.org/).

At the time of this writing the jQuery init template used `grunt-contrib-qunit@0.1.1`,
you'll need to update:

    npm uninstall grunt-contrib-qunit --save-dev
    npm install grunt-contrib-qunit --save-dev
    grunt

Happy times :)


## The `grunt-contrib` tasks

A collection of task officially maintained by the grunt team:

<blockquote>
This collection contains all 26 grunt-contrib plugins. We have made it available
as a convenience for first-time users who would like to explore what Grunt has
to offer. After review, it is recommended that you uninstall this collection and
specify the plugins you wish to use individually.
</blockquote>

<https://github.com/gruntjs/grunt-contrib>



## The barebones-www init template (WIP)

A web application development template for RequireJS, Less and QUnit. With code
linting and live reload, all made from available grunt plugins.

<small>
grunt-contrib-clean (version 0.4.1)
grunt-contrib-connect (version 0.3.0)
grunt-contrib-copy (version 0.4.1)
grunt-contrib-jshint (version 0.4.3)
grunt-contrib-less (version 0.5.1)
grunt-contrib-livereload (version 0.1.2)
grunt-contrib-qunit (version 0.2.1)
grunt-contrib-requirejs (version 0.4.0)
grunt-contrib-watch (version 0.3.1)
grunt-regarde (version 0.1.1)
</small>

<https://github.com/grancalavera/barebones-templates>



## Controversy


### Why grunt?

[Miller Medeiros](https://twitter.com/millermedeiros) wrote
[Node.js, Ant, Grunt and other build tools](http://blog.millermedeiros.com/node-js-ant-grunt-and-other-build-tools/)
and [Ben Alman](https://twitter.com/cowboy) replied with [Why grunt?](http://benalman.com/news/2012/08/why-grunt/)


### And what about Yeoman?

Yeoman is build on top of grunt. At some point they started having [compatibility issues](https://github.com/yeoman/yeoman/issues/484),
to which Ben Alman replied with ["Voiding the warranty"](https://github.com/gruntjs/grunt/issues/432).

There's a long discussion thread on a GitHub issue about the nature of Yeoman,
questioning if it would be better to have [Yeoman as a grunt task](https://github.com/yeoman/yeoman/issues/297).

You can read [The Road to 1.0](https://github.com/yeoman/yeoman/wiki/The-Road-to-1.0)
if you want to know more about the future of Yeoman.




# Thanks!

@wasabilion
