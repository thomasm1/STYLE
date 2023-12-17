##### PRECOMPILERS #######################
npm install node-sass --save-dev
npm install live-server -g

package.json ->>
"scripts": {
	"compile:sass": "node-sass sass/main.scss css/style.css
	
npm run compile:sass
 
sass source/stylesheets/index.scss build/stylesheets/index.css

mkdir app
cd app
mkdir css scss image js
touch cd index.html js/main.js scss/style.scss
#
# install ruby for compass for suzy & backbone
ruby -v ## use rubyinstaller
gem update --system
gem install compass
compass -v
gem list
# make -touch- config.rb file, writing:
touch config.rb
require 'susy'
require 'breakpoint'
# adding from Gem the gulp sass.
gem install sass --no-user-install
gem list
gem install breakpoint
touch config.rb

#SASS-COMPASS
sass --watch app/sass:public/stylesheets
sass input.scss output.css
gem install sass
sass -v
compass install compass // installs .sass-cache, sass, stylesheets, tmm, tmm.css
#
project_type = :stand_alone
http_path = "/"
sass_dir = "scss"
css_dir = "css"
images_dir = 'images'
fonts_dir = "fonts"
javascript_dir = "js"
line_comments = false
preferred_syntax = :scss
output_style = :compressed
relative_assets = true
=============================
#### FLOAT: 
<nav class="clearfix">  TOP-LEVEL Node
.clearfix::after {
	content: "";
	clear: both;
	display: table;   }
 
#### SASS FEATURES
# Variables
	$color-primary: #f9ed69
# Nesting ==> .navigation li:first-child
	.navigation {
			list-style: none;
	  li {
			display: inline-block;
		&:first-child {
			margin: 0;
			}
		a { 
# Operators
# Partials and imports
# Mixins
	<nav class="clearfix">  TOP-LEVEL Node
	.clearfix::after {
		content: "";
		clear: both;
		display: table;   }
		
	@mixin clearfix {
	   &::after {
		content: "";
		clear: both;
		display: table; } } 
	nav {
		@include clearfix } 
		
	@mixin style-link-text($col) {
		text-decoration: none;
		text-transform: uppercase;
		color: $col; }  // $color-text-light; 
	a:link {
		@include style-link-text($color-text-dark); }
	
# Functions
@function divide($a, $b) {
	@return $a/ $b; }
nav { 
	margin: divide(60, 2) * 1px; // 30px }
	
# Extends
%btn-placeholder {
	padding: 10px;
	display: inline-block;
	text-align: center;
	border-radius: 100px;
	width: $width-button;
	@include style-link-text($color-text-light);  } 
.btn-main {
	&:link {
	   @extend %btn-placeholder; 
	   background-color:  $color-secondary  } 
	&:hover {
	   background-color: darken($color-secondary, 15%);   } } 
	 
# Control Directives

## 7-1 Pattern
# 7 Different folders for partial Sass Files
	base/
	components/
	layout/
	pages/
	themes/
	abstracts/
	vendors/
# 1 main Sass file to import all other files


=============================================== LESS ===================


####  LESS ############################# 
npm install -g less
> lessc styles.less styles.css  
Or the browser: 
<link rel="stylesheet/less" type="text/css" href="styles.less" />
<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/3.9.0/less.min.js" ></script>

Watch mode, option env must be set to development. Then AFTER the less.js file is included, call less.watch(), like this:

<!-- set options before less.js script -->
<script>
  less = {
    env: "development",
    logLevel: 2,
    async: false,
    fileAsync: false,
    poll: 1000,
    functions: {},
    dumpLineNumbers: "comments",
    relativeUrls: false,
    globalVars: {
      var1: '"quoted value"',
      var2: 'regular value'
    },
    rootpath: ":/a.com/"
  };
</script>
<script src="less.js"></script>
<script>less.watch();</script>
Alternatively, you can enable Watch mode temporarily by appending #!watch to the URL.

Modify Variables
Enables run-time modification of Less variables. When called with new values, the Less file is recompiled without reloading. Simple basic usage:

less.modifyVars({
  '@buttonFace': '#5B83AD',
  '@buttonText': '#D9EEF2'
});
