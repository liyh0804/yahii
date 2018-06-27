#! /usr/bin/env node

var program = require('commander');
var packageJson = require('../package.json');

function range(val) {
    return val.split('..').map(Number);
}
    
function list(val) {
    return val.split(',');
}


program
    .version(packageJson.version)
    .usage('test')
    .option('-C, --chdir [value]', '设置服务器节点', '/home/conan/server')
    .option('-c, --config [value]', '设置配置文件', './deploy.conf')
    .option('-m, --max <n>', '最大连接数', parseInt)
    .option('-s, --seed <n>', '初始种子', parseFloat)
    .option('-r, --range <a>..<b>', '阀值区间', range)
    .option('-l, --list <items>', 'IP列表', list);

program
    .command('deploy <name>')
    .description('部署一个服务节点')
    .action((name) => {
        console.log('Deploying "%s"', name)
    });

program.parse(process.argv);

console.log(' chdir - %s ', program.chdir);
console.log(' config - %s ', program.config);
console.log(' max: %j', program.max);
console.log(' seed: %j', program.seed);
program.range = program.range || [];
console.log(' range: %j..%j', program.range[0], program.range[1]);
console.log(' list: %j', program.list);
