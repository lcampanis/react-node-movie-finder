# ReactJS + JEST + GULP + JSPM - Seed

Seed project for writing ReactJS components in TDD fashion. This seed uses Jest for unit testing, Gulp for building and JSPM as the browser package manager.

**Note:** We use System.js ( comes with JSPM ) for module loading.

## Install

Clone this repo and run npm install
```
git clone https://github.com/lcampanis/react-node-sky-bill.git

npm install
```

## Usage 

The sample code puts major focus on UX and quality of code.

## Specs
The app is built using:
* ReactJS
* Bootstrap
* jQuery (for AJAX loading only)
* Moment (for date comversion)

Tests are built using:
* Jest (Facebook's prefered method for ReactJS)

It is built as an node module using:
* Gulp
* JSPM
* Babel

## How to run the build & tests
* Install NodeJS https://nodejs.org/en/
* Unpack the archive
* In the terminal `cd sky-test/react-seed`
* Install Node & Bower modules `npm install && bower install`

### To run the build
Once your in the *react-seed* folder in the terminal, type `gulp develop`.
This will open a browser window using Gulp, where you can see the page containing a sky.

### To run the tests
Once your in the *react-seed* folder in the terminal, type: `gulp test`.
This will run the tests in the console using the jest test command from Gulp.