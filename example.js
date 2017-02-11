/**
 * Directory prompt example
 */

"use strict";
var inquirer = require("inquirer");
inquirer.registerPrompt('file', require('./index'));

inquirer.prompt([
  {
    type: "file",
    name: "path",
    message: "In what file would you like to perform this action?",
    basePath: "./node_modules"
  }
], function( answers ) {
  console.log( JSON.stringify(answers, null, "  ") );
});
