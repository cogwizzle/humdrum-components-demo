## Welcome to humdrum components!

This repo is intended to be a toolbox of commonly created components.

## Prerequisites 

Bower package manager, [installation instructions can be found here.](https://bower.io/#install-bower)

## Setup

From the root directory (same location as 'bower.json') run the following:

`bower install`

## Demo running

Considering the components are utilizing riot's in browser compliation, we require the components to be hosted. One of the easiest ways to so is by running a local php web server using the following command in the root directory:

`php -S localhost:8080`

Then each demo can be accessed in a browser like "localhost:8080/[path to demo file]", ex:

`localhost:8080/demo/header_nav/index.html`