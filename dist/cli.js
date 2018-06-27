var program = require('commander');
var packageJson = require('../package.json');

program.version(`yahii ${packageJson.version}`)
    .option('-p, --peppers', 'Add peppers')
    .option('-P, --pineapple', 'Add pineapple')
    .option('-b, --bbq', 'Add bbq')
    .option('-c, --cheese [type]', 'Add the special type of cheese [marble]', 'marble')
    .parse(process.argv)

console.log('you ordered a pizza with:');
if (program.peppers) { console.log(' - peppers') }
if (program.pineapple) console.log('  - pineapple');
if (program.bbq) console.log('  - bbq');
console.log('  - %s cheese', program.cheese);
// const Koa = require('koa');
// const router = require('koa-route');

// const app = new Koa();

// const main = ctx => {
//     ctx.response.body = 'Hello World';
// };

// const welcome = (ctx, name) => {
//     ctx.response.body = 'Hello ' + name;
// };

// app.use(router.get('/', main));
// app.use(router.get('/:name', welcome));

// app.listen(3000);

// console.log('listening on port 3000');

