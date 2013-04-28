# Backbone Meetup: grunt

grunt, the JavaScript task runner

## Outline (WIP)

NPM crash course

   * npm install -g
   * npm view

   * npm list -g --depth=0
   * npm init

Getting Started http://gruntjs.com/getting-started

   * Install the CLI
   * 2 Files
      * package.json
      * [ Gruntfile.js | Gruntfile.coffee ]
   * Init the project
      * npm init
      * npm install grunt --save-dev
      * create an empty Gruntfile.js
   * Existing tasks
      * Install
         * npm intall grunt-contrib-uglify --save-dev
         * load the task
      * Configure a task
         * Options
         * Tasks
      * Run a taks
         * grunt
   * Custom tasks
      * Inlined
      * External
   * Grunt help
      * Usage and options
      * Installed tasks

Project scaffolding http://gruntjs.com/project-scaffolding

   * Install grunt-init
      * npm install -g grunt-init
      * grunt-init --help
   * Using templates
      * Existing: grunt-init TEMPLATE
      * Arbitrary: grunt-init path/to/TEMPLATE
   * Installing templates
      * git clone git@github.com:TEMPLATE ~/.grunt-init/TEMPLATE
         * *nix: ~/.grunt-init/
         * Windows %USERPROFILE%\.grunt-init\
      * Tip: grunt will follow symlinks from ~/.grunt-init/
         * cd ~/.grunt-init
         * ln -s ~/path/to/TEMPLATE TEMPLATE
         * then you can grunt-init TEMPLATE as if it was an available template (because it is now!)
   * jQuery plugin template
      * git clone git@github.com:gruntjs/grunt-init-jquery.git ~/.grunt-init/jquery
      * grunt-init jquery
      * npm install
      * grunt
      * happy times? almost always: update grunt-contrib-quint to ~0.2.1, this one has phantom js embedded
      * npm install
      * grunt
      * happy times :)

Configuring tasks http://gruntjs.com/configuring-tasks

   * JSON and JavaScript
   * tasks: match the name of the grunt task
   * targets: multi-tasks can have multiple configurations: targets

Workflows

   * Search for a grunt plugin that does what you need http://gruntjs.com/plugins
   * Build, development server and deploy:
      * grunt-contrib-clean (version 0.4.1)
      * grunt-contrib-connect (version 0.3.0)
      * grunt-contrib-copy (version 0.4.1)
      * grunt-contrib-jshint (version 0.4.3)
      * grunt-contrib-less (version 0.5.1)
      * grunt-contrib-livereload (version 0.1.2)
      * grunt-contrib-qunit (version 0.2.1)
      * grunt-contrib-requirejs (version 0.4.0)
      * grunt-contrib-watch (version 0.3.1)
      * grunt-regarde (version 0.1.1)

Controversy

   * https://github.com/yeoman/yeoman/issues/297
   * https://github.com/gruntjs/grunt/issues/432
   * https://github.com/yeoman/yeoman/issues/484
   * Why grunt http://benalman.com/news/2012/08/why-grunt/
   * Why not http://blog.millermedeiros.com/node-js-ant-grunt-and-other-build-tools/

Reference

    * http://gruntjs.com
