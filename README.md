# inquirer-file-path

Relative File prompt for [inquirer](https://github.com/SBoudrias/Inquirer.js)

[![Build Status](https://travis-ci.org/nicksrandall/inquirer-directory.svg)](https://travis-ci.org/nicksrandall/inquirer-directory)

## Installation

```
npm install --save inquirer-file-path
```

## Features
- Support for symlinked files
- Vim style navigation
- Search for file with "/" key

### Key Maps
- Press "/" key to enter search mode.

## Usage


This prompt is anonymous, meaning you can register this prompt with the type name you please:

```javascript
inquirer.registerPrompt('filePath', require('inquirer-file-path'));
inquirer.prompt({
  type: 'filePath',
  ...
})
```

Change `filePath` to whatever you might prefer.

### Options

Takes `type`, `name`, `message`, `basePath` properties.

See [inquirer](https://github.com/SBoudrias/Inquirer.js) readme for meaning of all except **basePath**.

**basePath** is the relative path from your current working directory

#### Example

```javascript
inquirer.registerPrompt('filePath', require('inquirer-file-path'));
inquirer.prompt([{
  type: 'file',
  name: 'from',
  message: 'Where you like to put this component?',
  basePath: './src'
}]).then(function(answers) {
  // (answers.from is the path chosen)
});
```

See also [example.js](https://github.com/bmbarker/inquirer-file-path-path/blob/master/example.js) for a working example

## License

MIT

## Acknowledgements
A huge thank you to Nick Randall and the other contributors of https://github.com/nicksrandall/inquirer-directory.
