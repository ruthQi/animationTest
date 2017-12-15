
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
                 .add(this.imgSrc+'river_mask.png')
                 .add(this.imgSrc+'ocean_mask.png')
                 .add(this.imgSrc+'chairlift.png')
                 .add('waterfall', '/scripts/assets/season/waterfall.json')
                 .add('river', '/scripts/assets/season/river.json')
                 .add('ocean', '/scripts/assets/season/ocean.json')
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
      this.renderRiver();
      this.renderOcean();
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
//================================================================================
   renderRiver(){
      let riverScence = new PIXI.Container();
      //let riverMask = new PIXI.Sprite(this.loader.resources[this.imgSrc+'river_mask.png'].texture);
      let riverMask = new PIXI.Sprite(PIXI.Texture.from(this.imgSrc+'river_mask.png'));
      riverMask.scale.set(0.666);
      riverMask.position.set(561,540);
      riverScence.addChild(riverMask);
      //tile
      let riverTileTexure = new PIXI.Texture.from('river_tile.png');
      //console.log(riverMask.width, riverMask.height)
      let tileSprite = new PIXI.extras.TilingSprite(riverTileTexure, riverMask.width, riverMask.height);
      tileSprite.position.copy(riverMask.position);
      tileSprite.mask = riverMask;
      tileSprite.tileScale.set(0.666);
      tileSprite.blendMode = 1;
      riverScence.addChildAt(tileSprite, 0);
      //half
      let halfSprite = new PIXI.Sprite(new PIXI.Texture.from('highlight_addmode_halfsize.png'));
      halfSprite.scale.set(0.666);
      halfSprite.position.set(557, 875);
      halfSprite.blendMode = 1;
      riverScence.addChild(halfSprite);
      //shadow
      let shadowSprite = new PIXI.Sprite(new PIXI.Texture.from('shadow_nomode_halfsize.png'));
      shadowSprite.scale.set(0.666);
      shadowSprite.position.set(896, 536);
      riverScence.addChild(shadowSprite);
      //brick_bridge
      let bridgeSprite = new PIXI.Sprite(new PIXI.Texture.from('brick_bridge.png'));
      bridgeSprite.scale.set(0.333),
      bridgeSprite.position.set(897, 899);
      riverScence.addChild(bridgeSprite);
      //lolly_bridge
      let lollySprite = new PIXI.Sprite(new PIXI.Texture.from('lolly_bridge.png'));
      lollySprite.scale.set(0.333),
      lollySprite.position.set(1208, 610);
      riverScence.addChild(lollySprite);
      //waterfall-tile
      let tileTex = new PIXI.Texture.from("waterfall_tile.png");
      let wftileSprite = new PIXI.extras.TilingSprite(tileTex, 80, 280);
      wftileSprite.position.set(560, 1327);
      wftileSprite.tileScale.set(0.333);
      wftileSprite.skew.set(0.236, 0);
      wftileSprite.alpha = 0.3;
      riverScence.addChildAt(wftileSprite, 0);
      //lips
      let lipSprite = new PIXI.extras.AnimatedSprite.fromFrames(["waterfall_lip_1.png", "waterfall_lip_2.png", "waterfall_lip_3.png", "waterfall_lip_4.png"]);
      lipSprite.position.set(565, 1310);
      lipSprite.scale.set(0.333);
      lipSprite.blendMode = 1;
      lipSprite.animationSpeed = .2;
      lipSprite.play();
      riverScence.addChild(lipSprite);
      this.mainScene.addChild(riverScence);
      let num = 0
      let ticker = new PIXI.ticker.Ticker();
      ticker.stop();
      ticker.add(() => {
         tileSprite.tilePosition.x = 6 * Math.sin(num);
         tileSprite.tilePosition.y += .2;
         wftileSprite.tilePosition.y += 2.25;
         num += .02;
      });
      ticker.start();
   }
   renderOcean(){
      let offsetScale = 0.333/0.5;
      let oceanScene = new PIXI.Container();
      oceanScene.scale.set(offsetScale);
      oceanScene.position.set(1025, 915);
      let maskSprite = new PIXI.Sprite(new PIXI.Texture.from(this.imgSrc+'ocean_mask.png'));
      oceanScene.addChild(maskSprite);

      let oceanMaskContainer = new PIXI.Container();
      oceanMaskContainer.mask = maskSprite;
      let ocean1Sprite = new PIXI.Sprite(new PIXI.Texture.from('ocean_1.png'));
      oceanMaskContainer.addChild(ocean1Sprite);
      let ocean2Sprite = new PIXI.Sprite(new PIXI.Texture.from('ocean_2.png'));
      oceanMaskContainer.addChild(ocean2Sprite);
      oceanScene.addChild(oceanMaskContainer);

      let ripple1 = new PIXI.Sprite(new PIXI.Texture.from('ripple_1.png'));
      ripple1.anchor.set(0.5);
      ripple1.scale.set(0.5);
      ripple1.position.set(263, 413);
      oceanScene.addChild(ripple1);
      let ripple2 = new PIXI.Sprite(new PIXI.Texture.from('ripple_2.png'));
      ripple2.anchor.set(0.5);
      ripple2.scale.set(0.5);
      ripple2.position.set(554, 342);
      oceanScene.addChild(ripple2);
      let ripple3 = new PIXI.Sprite(new PIXI.Texture.from('ripple_3.png'));
      ripple3.anchor.set(0.5);
      ripple3.scale.set(0.5);
      ripple3.position.set(750, 341);
      oceanScene.addChild(ripple3);
      let ripple4 = new PIXI.Sprite(new PIXI.Texture.from('ripple_1.png'));
      ripple4.anchor.set(0.5);
      ripple4.scale.set(0.24, 0.4);
      ripple4.position.set(843, 90);
      oceanScene.addChild(ripple4);

      this.mainScene.addChild(oceanScene);
   }
}

new SeasonTest();