'use strict';
const { dirname } = require('path');
const path = require ('path');

module.exports = {
    diff: true,
    extension: ['js'],
    package: path.resolve('package.json'),
    reporter: 'mocha-multi-reporters', 
    'reporter-options':[`configFile=${path.resolve(__dirname,'multi-reporter.config.json')}`] , 
    slow: 75,
    timeout: 60000,
    ui: 'bdd',
    spec:path.resolve('src/api/test/*.test.js') ,    
};