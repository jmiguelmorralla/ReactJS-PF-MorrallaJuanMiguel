![](http://i.imgur.com/y8g506n.png?1)


# Hello! This is my React JS Final Project 

I´m Juan Miguel Morralla, a CODERHOUSE student. This is my first experience using REACT JS. I enjoyed it so much and I expect keep in learning.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)























![](http://i.imgur.com/y8g506n.png?1)

# joe

A `.gitignore` magician in your command line. Joe generates `.gitignore` files from the command line for you.

![](http://i.imgur.com/2tAksHG.gif)

## Features

- Written in uncomplicated Go (Golang)
- No installation necessary - just use the [binary](https://github.com/karan/joe#installation).
- Stupidly [easy to use](https://github.com/karan/joe#usage)
- Supports all Github-supported [`.gitignore` files](https://github.com/karan/joe#list-all-available-files)
- Works on Mac, Linux and (maybe) Windows
- Supports other version control systems (`.hgignore`)

## Installation

After install, make sure to run `joe u`. This will download all `.gitignore` files in `~/joe-data/` folder.

### Option 1: Binary

`joe` is available for OSX (macOS), Linux and Windows.

Download the latest binary from the [Releases page](https://github.com/karan/joe/releases). It's the easiest way to get started with `joe`.

Make sure to add the location of the binary to your `$PATH`.

### Option 2: From source

```bash
$ git clone git@github.com:karan/joe.git
$ cd joe/
$ chmod +x tool.sh
$ ./tool.sh build
```

## Usage

### Commands:

```
ls | list       list all available files
u | update      update all available gitignore files
g | generate    generate gitignore files
```

### Basic usage

```bash
$ joe g java    # outputs .gitignore file for java to stdout
```

To update your `.gitignore` files at any time, simply run:

```bash
$ joe u
```

### Overwrite existing `.gitignore` file

```bash
$ joe g java > .gitignore    # saves a new .gitignore file for java
```

### Append to existing `.gitignore` file

```bash
$ joe g java >> .gitignore    # appends to an existing .gitignore file
```

### Multiple languages

```bash
$ joe g java,node,osx > .gitignore    # saves a new .gitignore file for multiple languages
```

### Create and append to a global .gitignore file

You can also use joe to append to a global .gitignore. These can be helpful when you want to ignore files generated by an IDE, OS, or otherwise.

```bash
$ git config --global core.excludesfile ~/.gitignore # Optional if you have not yet created a global .gitignore
$ joe g OSX,SublimeText >> ~/.gitignore
```

### List all available files

```bash
$ joe ls    # OR `joe list`
```

Output:

> actionscript, ada, agda, android, anjuta, appceleratortitanium, archives, archlinuxpackages, autotools, bricxcc, c, c++, cakephp, cfwheels, chefcookbook, clojure, cloud9, cmake, codeigniter, codekit, commonlisp, composer, concrete5, coq, craftcms, cvs, dart, darteditor, delphi, dm, dreamweaver, drupal, eagle, eclipse, eiffelstudio, elisp, elixir, emacs, ensime, episerver, erlang, espresso, expressionengine, extjs, fancy, finale, flexbuilder, forcedotcom, fortran, fuelphp, gcov, gitbook, go, gradle, grails, gwt, haskell, idris, igorpro, ipythonnotebook, java, jboss, jdeveloper, jekyll, jetbrains, joomla, jython, kate, kdevelop4, kohana, labview, laravel, lazarus, leiningen, lemonstand, libreoffice, lilypond, linux, lithium, lua, lyx, magento, matlab, maven, mercurial, mercury, metaprogrammingsystem, meteor, microsoftoffice, modelsim, momentics, monodevelop, nanoc, netbeans, nim, ninja, node, notepadpp, objective-c, ocaml, opa, opencart, oracleforms, osx, packer, perl, phalcon, playframework, plone, prestashop, processing, python, qooxdoo, qt, r, rails, redcar, redis, rhodesrhomobile, ros, ruby, rust, sass, sbt, scala, scons, scrivener, sdcc, seamgen, sketchup, slickedit, stella, sublimetext, sugarcrm, svn, swift, symfony, symphonycms, tags, tex, textmate, textpattern, tortoisegit, turbogears2, typo3, umbraco, unity, vagrant, vim, virtualenv, visualstudio, vvvv, waf, webmethods, windows, wordpress, xcode, xilinxise, xojo, yeoman, yii, zendframework, zephir

### BONUS ROUND: Alternate version control software

Joe isn't **just** a generator for `.gitignore` files. You can use it and its output wherever a SCM is used.

```bash
$ joe g java > .hgignore
```

## Contributing

#### Bug Reports & Feature Requests

Please use the [issue tracker](https://github.com/karan/joe/issues) to report any bugs or file feature requests.

#### Developing

PRs are welcome. To begin developing, do this:

```bash
$ git clone git@github.com:karan/joe.git
$ cd joe/
$ go run *.go
```

#### `tool.sh`

This is a handy script that automates a lot of developing steps.


```bash
USAGE:
    $ $tool [-h|--help] COMMAND

  EXAMPLES:
    $ $tool deps      Install dependencies for joe
    $ $tool build     Build a binary
    $ $tool run       Build and run the binary
```
