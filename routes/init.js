'use strict';
var gsap = require('./pages/gsap');
var svg = require('./pages/svg');
var canvas = require('./pages/canvas');
var createjsTest = require('./pages/createjs');
var potter = require('./pages/potter');
var pixiGift = require('./pages/pixiGift');
var pixiChaopao = require('./pages/pixiChaopao');

module.exports = function(app) {
    app.use('/', gsap);
    app.use('/svg', svg);
    app.use('/canvas', canvas);
    app.use('/createjs',  createjsTest);
    app.use('/potter', potter);
    app.use('/pixiGift', pixiGift);
    app.use('/pixiChaopao', pixiChaopao);

};