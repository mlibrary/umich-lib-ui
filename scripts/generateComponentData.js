var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var parse = require('react-docgen').parse;
var chokidar = require('chokidar');

var paths = {
  components: path.join(__dirname, '../src', 'components'),
  output: path.join(__dirname, '../config', 'componentData.js')
};

const enableWatchMode = process.argv.slice(2) == '--watch';
if (enableWatchMode) {
  // Regenerate component metadata when components or examples change.
  chokidar.watch([paths.components]).on('change', function(event, path) {
    generate(paths);
  });
} else {
  // Generate component metadata
  generate(paths);
}

function generate(paths) {
  var errors = [];
  var componentData = getDirectories(paths.components).reduce(function(dataAccumulator, componentName) {
    try {
      const d = getComponentData(paths, componentName)

      if (d) {
        dataAccumulator = dataAccumulator.concat(d);
      }
    } catch(error) {
      errors.push('An error occurred while attempting to generate metadata for ' + componentName + '. ' + error);
    }

    return dataAccumulator
  }, []);
  writeFile(paths.output, "module.exports = /* eslint-disable */ " + JSON.stringify(errors.length ? errors : componentData));
}

function getComponentData(paths, componentName) {
  var content = readFile(path.join(paths.components, componentName, componentName + '.js'));

  if (content) {
    var info = parse(content);
    return {
      name: componentName,
      description: info.description,
      props: info.props,
      code: content,
      examples: getExampleData(paths.components, componentName),
      docs: getDocData(paths.components, componentName)
    }
  }
}

function getExampleData(examplesPath, componentName) {
  var examples = getExampleFiles(path.join(examplesPath, componentName), componentName);

  return examples.map(function(file) {
    var filePath = path.join(examplesPath, componentName, file);
    var content = readFile(filePath);

    return {
      // By convention, component name should match the filename.
      // So remove the .js extension to get the component name.
      // Also remove '-example'
      name: file.slice(0, -11),
      code: content
    }
  });
}

function getDocData(componentPath, componentName) {
  var componentDocFile = `${componentName}.md`
  var docPath = path.join(componentPath, componentName, componentDocFile)

  if (fs.existsSync(docPath)) {
    return readFile(docPath)
  }

  return undefined
}

function getExampleFiles(examplesPath, componentName) {
  return fs.readdirSync(examplesPath).filter(function(file) {
    return RegExp('\-example\.js$').test(file)
  });
}

function getDirectories(filepath) {
  return fs.readdirSync(filepath).filter(function(file) {
    return fs.statSync(path.join(filepath, file)).isDirectory();
  });
}

function getFiles(filepath) {
  return fs.readdirSync(filepath).filter(function(file) {
    return fs.statSync(path.join(filepath, file)).isFile();
  });
}

function writeFile(filepath, content) {
  fs.writeFile(filepath, content, function (err) {
    err ? console.log(chalk.red(err)) : console.log(chalk.green("Component data saved."));
  });
}

function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}
