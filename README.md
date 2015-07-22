# gulp-boilerplate
A boilerplate for gulp featuring all of your favourite NPM packages:
* Uglify
* Browsersync
* Stylus
* Minify CSS
* Minify HTML
* File Include
* Gulp Plumber
* Sourcemaps
* PostCSS

On top of this, Gulp Boilerplate also comes preinstalled with fully integrated Stylus packages Lost, Rupture, and Nib, and features the best aspects of both Skeleton CSS and Boy, all in one single package. This boilerplate is also made with GitHub pages in mind, so if you're developing a splash page for your next big plugin, Gulp Boilerplate is here to help. One upload to the 'gh-pages' branch of your repo, and it will be automatically configured.

## Directory Structure
While easily customisable, Gulp Boilerplate comes preinstalled with a prebuilt directory structure in mind. Essentially, all 'final' files go into 'dist' under their correct subfolder, and all 'working' files go into 'src' under their correct subfolder as well. 

## How do I use this?
Open up a terminal, navigate to the directory you downloaded / cloned this repo to and type in 'npm install', and then 'gulp'. After this, all files will be compressed and sent to their respective folders, and BrowserSync will automatically open up a new window using 'index.html'. Simple, right?

## What the heck's File Include
Ever been working on a big HTML project, and the index.html is over 200 lines long? File Include allows you to easily import html files (just like Stylus / Sass) into specific places in your main file, and have it all be compiled and minified like it were any other regular html file. I've included an example in the src/index.html file, so you can see how it works.

## Why Stylus and not Sass?
It's a bit of a lengthy topic, and I'll give you my 100% non-bullshit take on it: because Stylus is easier to write CSS with. Oh, and also the fact that all CSS plugins in this Boilerplate are Stylus plugins. Sorry guys!

## License
There is no license. Do whatever the fuck you want with this.
