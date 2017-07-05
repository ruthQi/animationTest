'use strict';
var gsap = require('./pages/gsap');
var svg = require('./pages/svg');
var canvas = require('./pages/canvas');
var createjsTest = require('./pages/createjs');

module.exports = function(app) {
    app.use('/', gsap);
    app.use('/svg', svg);
    app.use('/canvas', canvas);
    app.use('/createjs',  createjsTest);

};