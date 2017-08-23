'use strict';
var gsap = require('./pages/gsap');
var svg = require('./pages/svg');
var canvas = require('./pages/canvas');
var createjsTest = require('./pages/createjs');
var pixiGift = require('./pages/pixiGift');
var pixiChaopao = require('./pages/pixiChaopao');

//活动

var base = require('./pages/h5/base');//threejs基础
var potter = require('./pages/h5/potter');//哈利波特 pixi
var point = require('./pages/h5/point');//pixi
var collada = require('./pages/h5/collada');//灌篮高手 threejs
var twentyth = require('./pages/h5/20th');//20周年 gsap
var whs = require('./pages/h5/whs');//新版threejs
var simple = require('./pages/h5/simple');
var miss = require('./pages/h5/miss');

module.exports = function(app) {
    app.use('/', gsap);
    app.use('/svg', svg);
    app.use('/canvas', canvas);
    app.use('/createjs',  createjsTest);
    app.use('/pixiGift', pixiGift);
    app.use('/pixiChaopao', pixiChaopao);
    app.use('/point', point);

   //活动router
   app.use('/base', base);
   app.use('/collada', collada);
   app.use('/simple', simple);
   app.use('/20th', twentyth);
   app.use('/whs', whs);
   app.use('/potter', potter);
   app.use('/miss', miss);

};