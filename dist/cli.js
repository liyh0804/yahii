const path = require('path');
const program = require('commander');
const _ = require('lodash');
const packageJson = require('../package.json');

program.version(`yahii v${packageJson.version}`)
    .usage('[file], default file: Yahiifile.js')
    .parse(process.argv);

let configFile = null
if (!_.isEmpty(program.args)) {
    configFile = path.resolve(process.cwd(), program.args[0]);
} else {
    configFile = path.resolve(process.cwd(), 'Yahiifile.js');
}

require('./')(configFile)()