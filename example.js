/**
 * File path prompt example
 */

"use strict";
var inquirer = require("inquirer");
inquirer.registerPrompt('filePath', require('./index'));

inquirer.prompt([
  {
    type: "filePath",
    name: "path",
    message: "What file would you like to perform this action on?",
    basePath: "./node_modules"
  }
], function( answers ) {
  console.log( JSON.stringify(answers, null, "  ") );
});
