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


### Tip

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
