# Gulp Boilerplate

A boilerplate for gulp featuring all of your favourite NPM packages such as:

* [**Pug**](https://pugjs.org/api/getting-started.html) (*Formerly Jade*)
* [**Browsersync**](https://www.browsersync.io/)
* [**Stylus**](http://stylus-lang.com/)
* [**PostCSS**](http://postcss.org/)
* [**Lost**](http://lostgrid.org/)
    
On top of this, Gulp Boilerplate also comes preinstalled with fully integrated Stylus packages such as Rupture and Nib, and allows you to choose between using Bootstrap or utilising the best aspects of both [Skeleton CSS](http://getskeleton.com/) and [Boy](https://github.com/corysimmons/boy), all in one single package. This boilerplate is also made with GitHub Pages in mind, so if you're developing a splash page for your next big plugin, *Gulp Boilerplate is here to help*. 

**One upload to the 'gh-pages' branch of your repo, and Gulp Boilerplate will be automatically configured**.

## How do I use this?
Open up a terminal, navigate to the directory you downloaded / cloned this repo into and type in `npm install`. After everything is installed, type in `gulp`, and watch as all files are compressed and sent to their respective folders, while BrowserSync automatically opens up a new browser window, containing `index.html`. Simple, right?

## Checklist of things to do
1. Edit `packages.json` with your project's information
2. Edit `humans.txt` with your project's information
3. Edit `src/pug/head.pug` with your project's information

## Directory Structure
While easily customisable, Gulp Boilerplate comes preinstalled with a prebuilt directory structure in mind. Essentially, all 'final' files go into 'dist' under their correct subfolder, and all 'working' files go into 'src' under their correct subfolder. For clarification, take a look at the directory structure in this repo. 

## Why Stylus and not Sass?
[Because Stylus is the better preprocessor](http://webdesign.tutsplus.com/articles/why-i-choose-stylus-and-you-should-too--webdesign-18412). And because this entire boilerplate is designed with Stylus plugins in mind.

## Why Jade and not regular HTML?
There's one big reason for this; the ability to include external jade files into a singular jade file and then have that jade file compile into a regular html file, basically how CSS preprocessors do it, but with HTML. What this allows is for components of your pages (especially single page applications) to be split up into multiple different jade files, so that you don't have to endlessly scroll down one massive index.html page to make a change to a single element.

Additionally, Jade makes HTML a breeze. In fact, I've even included a basic HTML coditional mixin to make the HTML conditionals (For instance, <--[if lt IE8]>) more intuitive to write. I've included some examples of this in the `src/index.jade` file in case you wanted to learn more.

## List of all packages used
* Autoprefixer
* Gulp
	* Gulp-cssnano
	* Gulp-plumber
	* Gulp-postcss
	* Gulp-pug
	* Gulp-sourcemaps
	* Gulp-stylus
	* Gulp-uglify
	* Gulp-cssnano
* Lost
* Nib
* PostCSS
* Pug
* Rupture
* Bootstrap-styl

## What if I don't want to use the whole of bootstrap?
Instead of using `@import bootstrap`, it is instead recommended to first import both Bootstrap's variables and mixins via `@import 'bootstrap/variables'` and `@import 'bootstrap/mixins'` and to next choose specific Bootstrap packages to import, such as `@import 'bootstrap/grid'`, `@import 'bootstrap/code'`, and `@import 'bootstrap/type'`. 

[The full list of packages that can be imported are able to be found here, in Bootstrap-styl's Github repo.](https://github.com/maxmx/bootstrap-stylus)

## License
Gulp Boilerplate is licensed under The Unlicense. Basically, so long as you don't hold me liable for anything you do with this, do whatever you want with this.
