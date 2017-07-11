'use strict';
var gsap = require('./pages/gsap');
var svg = require('./pages/svg');
var canvas = require('./pages/canvas');
var createjsTest = require('./pages/createjs');
var pixiGift = require('./pages/pixiGift');
var pixiChaopao = require('./pages/pixiChaopao');

//活动
var potter = require('./pages/h5/potter');//哈利波特
var collada = require('./pages/h5/collada');//灌篮高手
var twentyth = require('./pages/h5/20th');//20周年
var whs = require('./pages/h5/whs');//新版threejs

module.exports = function(app) {
    app.use('/', gsap);
    app.use('/svg', svg);
    app.use('/canvas', canvas);
    app.use('/createjs',  createjsTest);
    app.use('/pixiGift', pixiGift);
    app.use('/pixiChaopao', pixiChaopao);

   //活动router
   app.use('/collada', collada);
   app.use('/20th', twentyth);
   app.use('/whs', whs);
   app.use('/potter', potter);

};