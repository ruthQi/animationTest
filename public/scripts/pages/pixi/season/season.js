
var PIXI = require('pixi.js');
class SeasonTest{
   constructor(){
      this.imgSrc = '/images/season/';
      this.viewWidth = window.innerWidth;
      this.viewHeight = window.innerHeight;
      this.container = new PIXI.Container();//舞台
      this.loader = PIXI.loader;
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

}

new SeasonTest();