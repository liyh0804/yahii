const path = require('path');
const _ = require('lodash');

if (process.env.NODE_ENV == null || process.env.NODE_ENV === '') {
    process.env.NODE_ENV = 'development';
}

console.log(process.env.NODE_ENV);

module.exports = configFile => {
    return () => {
        console.log(configFile);
    };
}

