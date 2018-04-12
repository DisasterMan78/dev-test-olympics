# Draw Test

## Replication

Steps to replicate setup from scratch

* `$ npm init`
* `$ npm i webpack`
* `$ npm i --save-dev @babel/core @babel/loader`
* `$ npm i babel-preset-env --save-dev`
* `$ npm i --global gulp-cli` For semantic build
* `$ npm i semantic-ui --save` Runs semantic-ui setup script - see _`semantic.json`_ for configuration
* `$ npm i sass-loader node-sass extract-text-webpack-plugin@next --save-dev`
* `$ npm i style-loader css-loader --save-dev`
* `$ npm i country-list --save` ISO 3166-1-alpha-2 to English country names
* `$ cd src/semantic`
* `$ gulp build` Builds installed semantic components

## Install

Steps to install

* `$ git clone git@github.com:disasterman78/draw-dev-task-david-b.git`
* `$ cd draw-dev-task-david-b`
* `$ npm install`

To run

* Open _`index.html`_ in your browser

## Notes

This is pretty quick and dirty, it could likely benefit from refactoring

* Semantic-UI and CountryList node package have been used for rapid bootstrapping
* All core functionality is vanilla JS
* Should have unit tests
* JS and CSS could be minified and obfuscated to save further on size.
* Country search would benefit from fuzzy string matching
* Input validation messages would be beneficial
* Strong typing has not been implemented, but is pretty much always a good idea
* Countries can be updated by adding the country again - the existing data will be replaced, and the table resorted
* Data sorting is a multi-dimensional. If the number of medals is the same for two countries, then the secondary or tertiary column will be compared as neccessary. See MedalsTableManager.sortData() in utils.js
* Tested in Chome only - no browser specific features have been used, so consistent performance across modern browsers is expected
