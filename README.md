> [اقرأني باللغة العربية](README-AR.md)

# LTR-RTL SASS Starter Template
> It's time to move on from css, give your self a head start with this template.

Many front end developers would make the UI for LTR and then manually change the direction to RTL or use a css LTR to RTL converter and the final results would still need some tweaking.
This template would help you move on past that, you would just write the sass/scss code once and it will automatically compile the LTR/RTL css files for you.
Along with that it'll Autoprefix, Beautify and/or Minify the final css files.

## Installing / Getting started
If you already have `NodeJS`,`SASS` and `Git` installed you can skip the prerequisites.

### Prerequisites
This package depends on the following softwares and it should be installed on your machine before continue any further.
>[Node.js](https://nodejs.org/en/)

>[Sass](http://sass-lang.com/install)

>[Git](https://www.atlassian.com/git/tutorials/install-git)



## Installation
Download the repository to your machine as zip file or clone it to your dekstop by running the following command in the terminal / command line, then installing NPM packages.

```bash
git clone https://github.com/ameensom/ltr-rtl-sass-starter-template.git
cd ltr-rtl-sass-starter-template/
npm install
```
- First command will copy the repository to your local machine.
- Second command will go inside the folder.
- Third command will install the required packages to run the tool from npm.

### Building
After installing the npm packages needed just enter the following command :
```bash
gulp
```
that will open up the browser at `http://localhost:3000` from there you can click on the language interface you need, and you'll see the default **index.html** file that i've included with the project.

## How to use
While writing your sass/scss code, use the following variables `$direction` `$reverse-direction` instead of `Right` and `Left`.

### Example
**As a value**
```scss
.selector {
text-align: $direction;
float: $reverse-direction;
}
```
The css output would be as following :

*LTR*
```css
.selector {
	text-align: left;
	float: right;
}
```
*RTL*
```css
.selector {
	text-align: right;
	float: left;
}
```
**As a key**
```scss
.selector-#{$direction} {
	padding-#{$direction}: 10px;
	#{$direction}: 10px
	padding-#{$reverse-direction}: 40px;
	#{$reverse-direction}: initial;
}
```
The css output would be as following :

*LTR*
```css
.selector-left {
	padding-left: 10px;
	left: 10px;
	padding-right: 40px;
	right: initial;
}
```
*RTL*
```css
.selector-right {
	padding-right: 10px;
	right: 10px;
	padding-left: 40px;
	left: initial;
}
```
**Additional Use**

You can use `$language` variable with `@if` `@else`  conditions to specify styles for each interface.
```scss
body {
	@if($language == 'ar') {
	    direction: rtl;
	}
  height: 100%;
 }
```
The css output would be as following :

*LTR*
```css
body {
	height: 100%;
}
```
*RTL*
```css
body {
	direction:rtl;
	height: 100%;
}
```
Note :
There are other variables you can use, look at `source\abstract\variables.scss` for more.
### File Structure
The file structure of this template is very simple and self explanatory.
```
+-- build
|   +-- ltr
|       +-- css
|       +-- fonts
|       +-- images
|       	+-- backgrounds
|       	+-- fav
|       	+-- png
|       	+-- svg
|       +-- js
|       --- index.html
|   +-- rtl
|       +-- css
|       +-- fonts
|       +-- images
|       	+-- backgrounds
|       	+-- fav
|       	+-- png
|       	+-- svg
|       +-- js
|       --- index.html
|   --- index.html
+-- source
|   +-- scss
|		+-- abstracts
|		+-- base
|		+-- components
|		--- main.scss
|   --- index.handlebars
--- .csscomb.json
--- .csslintrc.json
--- .editorconfig
--- .eslintrc.json
--- .gitignore
--- .jsbeautifyrc
--- config.js
--- gulpfile.js
--- package.json
```
### HTML Files
You should manually add your HTML files inside of **`build\ltr`** and **`build\rtl`**.

### SCSS Files
Start creating your custom UI by editing the scss files as your need, like any other scss project, however there are some lines that shouldn't be edited and/or not removed , I've added comments next to it.

## Features

* Compile your sass/scss files as css to two different folders or more, and adjust the directions as per the interface language direction.
* [BrowserSync.io](https://browsersync.io/) integration, which will provide you with auto reload of the browser upon saving html,js and scss files.
* [AutoPreFixer](https://github.com/postcss/autoprefixer),[BeautifyCSS](https://github.com/koistya/gulp-csscomb) based on [CSSComb](http://csscomb.com/) options,[MinifyCSS](https://www.npmjs.com/package/gulp-minify-css) are also integrated and you can choose to enable or disable it from the configuration.
* Easy to read file structure.
* Cool mixins included.

## Configuration

There is not much of configuration to do, still you can edit `config.js` to enable/disable some features and\or add new languages.

#### languages
Type: `Array of Objects`  
Required:`true`

Default:
```js
[{
  taskName: 'sass_ar',
   languageCode: 'ar',
   outputfolder: 'rtl',
   languageName: 'Arabic'
 },
 {
   taskName: 'sass_en',
   languageCode: 'en',
   outputfolder: 'ltr',
   languageName: 'English'
 }]
```

This is the list of languages used in this template, default is Arabic and English, you can more by adding another JSON Object as an item to the array.

#### languages[index].taskName
Type: `string`

Default: `sass_ar`,`sass_en`

Unique: `true`

Required:`true`

Specify the gulp task name here.

#### languages[index].languageCode
Type: `string`  

Default: `ar`,`en`

Unique: `true`

Required:`true`

The language code to be used while compiling sass/scss files.

#### languages[index].outputfolder
Type: `string`  

Default: `rtl`,`ltr`

Unique: `true`

Required:`true`

Language folder where the html and css files will be.
#### languages[index].languageName
Type: `string`  

Default: `Arabic`,`English`

Unique: `true`

Required:`true`

Language name to identify the object.


#### autoPrefixerOptions
Type: `Object`

Default:
```js
{
  browsers: ['last 7 versions'],
  cascade: false
}
```
Autoprefixer options, you can find more about it in [Autoprefixer Documentation](https://github.com/postcss/autoprefixer#options) and [BrowsersList Queries](https://github.com/ai/browserslist#queries)
#### autoPrefixer
Type: `Boolean`

Default: `true`

To Autoprefix the compiled css to support old browsers, see [Autoprefixer](https://github.com/postcss/autoprefixer).
#### beautifyCSS
Type: `Boolean`

Default: `true`

To beautify the final css file.
#### minifyCSS
Type: `Boolean`

Default: `false`

To compress the final css file,prefer to enable it in production.

## Contributing

If you'd like to contribute, please fork the repository and use a feature
branch. Pull requests are warmly welcome.

## Licensing
The code in this project is licensed under MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
