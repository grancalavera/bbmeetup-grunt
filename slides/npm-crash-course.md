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
