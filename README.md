# inquirer-file-path

Relative File Path prompt for [inquirer](https://github.com/SBoudrias/Inquirer.js)

[![Build Status](https://travis-ci.org/bmbarker90/inquirer-file-path.svg)](https://travis-ci.org/bmbarker90/inquirer-file-path)

## Installation

```
npm install --save inquirer-file-path
```

## Features
- Support for symlinked files
- Vim style navigation
- Search for file with `/` key

### Key Maps
- Press `/` key to enter search mode.
- Use either `up`/`down` arrow keys or `k`/`j` to navigate
- Use `enter` to select option

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

## Contributing
<a name="contributing"></a>

**Unit test**
Unit test are written in [Mocha](https://mochajs.org/). Please add a unit test for every new feature or bug fix. `npm test` to run the test suite.

**Documentation**
Add documentation for every API change. Feel free to send typo fixes and better docs!

## License

MIT

## Acknowledgements
A huge thank you to Nick Randall and the other contributors of https://github.com/nicksrandall/inquirer-directory.

## Future features
- [ ] Add ability to config to filter options shown
