
var PIXI = require('pixi.js');
class SeasonTest{
   constructor(){
      this.imgSrc = '/images/season/';
      this.viewWidth = window.innerWidth;
      this.viewHeight = window.innerHeight;
      this.container = new PIXI.Container();//舞台
      this.loader = PIXI.loader;
      this.waterScale = 1.2;
      this.init();
   }
   init(){
      this.initView();
      this.initScroller();
   }
   initView(){
      this.container.width = this.viewWidth;
      this.container.height = this.viewHeight;
      this.canvasView = new PIXI.CanvasRenderer(this.viewWidth, this.viewHeight);
      document.getElementById('seasonTest').append(this.canvasView.view);
      this.loader.add(this.imgSrc+'map_full.jpg')
                 .add(this.imgSrc+'waterfall.png')
                 .add(this.imgSrc+'river.png')
                 .add(this.imgSrc+'rainbow.png')
                 .add(this.imgSrc+'ocean.png')
                 .add(this.imgSrc+'game.png')
                 .add(this.imgSrc+'chairlift.png')
                 .add('waterfall', '/scripts/assets/season/waterfall.json')
                 .load(this.loadComplete);
   }
   loadComplete = () => {
      this.mainScene = new PIXI.Container();
      //背景
      this.bgSprite = new PIXI.Sprite(this.loader.resources[this.imgSrc+'map_full.jpg'].texture);
      /*this.bgSprite.position.x = -400;
      this.bgSprite.position.y = -400;*/
      //this.bgSprite.anchor.set(0.5);
      this.mainScene.addChild(this.bgSprite);
      this.renderWater();
      this.container.addChild(this.mainScene);
      this.bindEvent();
      //必须设置此属性，滚动式才好使，否则滚动不起作用
      //后2位参数分别表示滑动的最大宽度和最大高度
      this.scroller.setDimensions(this.viewWidth, this.viewHeight, 2048, 2048);
      //this.scroller.scrollTo(0,0,false);
      this.updateLoop();
      //this.canvasView.render(this.container);
   }
   bindEvent(){
      this.mainScene.interactive = true;
      this.mainScene.buttonMode = true;
      this.mainScene.on('touchstart', (e)=>{
         var t = e.data.originalEvent;
         this.eventFlag = false;
         this.scroller.doTouchStart(t.touches, t.timeStamp)
      });
      this.mainScene.on('touchmove', (e)=>{
         if (!this.eventFlag) {
            var t = e.data.originalEvent;
            this.scroller.doTouchMove(t.touches, t.timeStamp, t.scale)
         }
      });
      this.mainScene.on('touchend', (e)=>{
         var t = e.data.originalEvent;
         this.scroller.doTouchEnd(t.timeStamp);
         this.eventFlag = true;
      });
   }
   updateLoop(){
      TWEEN.update();
      requestAnimationFrame(()=>{this.updateLoop()});
      //舞台添加到画布中
      this.canvasView.render(this.container);
   }
   initScroller(){
      //console.log(Scroller)
      this.scroller = new Scroller(this.scrollFun, {
         zooming: false,
         animating : true,
         bouncing : false,
         animationDuration:1000
      })
   }
   scrollFun = (left, top, zoom) => {
      //console.log(left)
      this.mainScene.position.x = -left;
      this.mainScene.position.y = -top;
   }
   renderWater(){
      let waterScene = new PIXI.Container();
      //rippleScene
      waterScene.position.set(200, 1250);
      this.rippleScene = new PIXI.Container();
      this.rippleScene.position.set(368, 128);
      this.rippleScene.rotation = -0.2;
      this.renderRipple();
      waterScene.addChild(this.rippleScene);
      //mist
      let mistScene = new PIXI.Container();
      mistScene.position.set(455, 400);
      let mistSprite = new PIXI.Sprite(new PIXI.Texture.from('waterfall_mist.png'));
      mistSprite.anchor.set(.5);
      mistSprite.scale.set(.5);
      mistSprite.position.set(0,0);
      mistScene.addChild(mistSprite);
      waterScene.addChild(mistScene);
      this.cloudScene = new PIXI.Container();
      this.cloudScene.position.set(mistScene.position.x + 10, mistScene.position.y+20);
      for(var i=0; i<8; i++){
         var itemSprite = new PIXI.Sprite(new PIXI.Texture.from('waterfall_cloud.png'));
         itemSprite.anchor.set(.5);
         itemSprite.scale.set(.5);
         itemSprite.position.set(-30,-60);
         i > 3 ? (itemSprite.alpha = .5, itemSprite.position.x = -460 + 180 * (i - 3), itemSprite.position.y = 30) : 
                  i > 0 && (itemSprite.alpha = .75, itemSprite.position.x = -200 + 180 * (i - 1), itemSprite.position.y = -20);
         this.cloudScene.addChild(itemSprite);
      }
      waterScene.addChild(this.cloudScene);
      this.mainScene.addChild(waterScene);
      this.cloudAnimation();
   }
   cloudAnimation(){
      for (var i = 0; i < 8; i++) {
         let counter = Math.random(0,3);
         let incr = Math.random(3,8)/10;
         let itemObj = this.cloudScene.children[i];
         new TWEEN.Tween(itemObj.scale).to({
            y: 1 + Math.sin(counter) * 0.1,
            x: 1 + Math.cos(counter) * 0.1 / 2
         }, 1000).repeat(Infinity).onUpdate(function(){
            counter += incr;
            itemObj.scale.y = 1 + Math.sin(counter) * 0.1;
            itemObj.scale.x = 1 + Math.cos(counter) * 0.1 / 2;
         }).easing(TWEEN.Easing.Quadratic.Out).start()
      }
   }
   renderRipple(){
      let rippleSprite1 = new PIXI.Sprite(new PIXI.Texture.from('waterfall_ripple_1.png'));
      rippleSprite1.position.set(5,40);
      let rippleSprite2 = new PIXI.Sprite(new PIXI.Texture.from('waterfall_ripple_2.png'));
      rippleSprite2.position.set(30,0);
      let rippleSprite3 = new PIXI.Sprite(new PIXI.Texture.from('waterfall_ripple_3.png'));
      rippleSprite3.position.set(55,40);
      let rippleNum1 = 0;
      let rippleNum2 = 1.5;
      let rippleNum3 = 3;
      new TWEEN.Tween(rippleSprite1.scale).to({
         x: .9 + .1 * Math.sin(rippleNum1),
      }, 1000).repeat(Infinity).onUpdate(function(){
         rippleSprite1.rotation = .01 * Math.cos(rippleNum1);
         rippleNum1 += 0.15;
         rippleSprite1.scale.x = .9 + .1 * Math.sin(rippleNum1);
         rippleSprite1.rotation = .01 * Math.cos(rippleNum1);
      }).easing(TWEEN.Easing.Quadratic.Out).start();
      new TWEEN.Tween(rippleSprite2.scale).to({
         x: .9 + .1 * Math.cos(rippleNum2),
      }, 1000).repeat(Infinity).onUpdate(function(){
         rippleSprite2.rotation = .01 * Math.sin(rippleNum2);
         rippleNum2 += 0.15;
         rippleSprite2.scale.x = .9 + .1 * Math.cos(rippleNum2);
         rippleSprite2.rotation = .01 * Math.sin(rippleNum2);
      }).easing(TWEEN.Easing.Quadratic.Out).start();
      new TWEEN.Tween(rippleSprite3.scale).to({
         x: .9 + .1 * Math.sin(rippleNum3),
      }, 1000).repeat(Infinity).onUpdate(function(){
         rippleSprite3.rotation = .01 * Math.cos(rippleNum3);
         rippleNum3 += 0.15;
         rippleSprite3.scale.x = .9 + .1 * Math.sin(rippleNum3);
         rippleSprite3.rotation = .01 * Math.cos(rippleNum3);
      }).easing(TWEEN.Easing.Quadratic.Out).start();
      this.rippleScene.addChild(rippleSprite1);
      this.rippleScene.addChild(rippleSprite2);
      this.rippleScene.addChild(rippleSprite3);
   }
}

new SeasonTest();