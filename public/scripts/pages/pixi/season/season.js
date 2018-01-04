
var PIXI = require('pixi.js');
require('pixi-particles');
import {TweenLite, TimelineLite} from 'gsap';
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
      //*注：*CanvasRenderer不支持PIXI.Sprite()作为mask，所以在CanvasRenderer下，使用sprite作为mask是失效的，只能使用PIXI.Graphics 
      //For the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.
      //this.canvasView = new PIXI.CanvasRenderer(this.viewWidth, this.viewHeight);
      this.appView = new PIXI.Application(this.viewWidth, this.viewHeight);
      //document.getElementById('seasonTest').append(this.canvasView.view);
      document.getElementById('seasonTest').append(this.appView.view);
      this.loader.add(this.imgSrc+'map_full.jpg')
                 .add(this.imgSrc+'waterfall.png')
                 .add(this.imgSrc+'river.png')
                 .add(this.imgSrc+'rainbow.png')
                 .add(this.imgSrc+'ocean.png')
                 .add(this.imgSrc+'game.png')
                 .add(this.imgSrc+'game_sm.png')
                 .add(this.imgSrc+'river_mask.png')
                 .add(this.imgSrc+'ocean_mask.png')
                 .add(this.imgSrc+'cloud_mask.png')
                 .add(this.imgSrc+'chairlift.png')
                 .add('waterfall', '/scripts/assets/season/waterfall.json')
                 .add('river', '/scripts/assets/season/river.json')
                 .add('ocean', '/scripts/assets/season/ocean.json')
                 .add('game', '/scripts/assets/season/game.json')
                 .add('chairlift', '/scripts/assets/season/chairlift.json')
                 //.add('game_sm', '/scripts/assets/season/game_sm.json')
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
      this.renderCloud();//渲染底部雾气
      this.renderRiver();//渲染底部云
      this.renderWater();//渲染流水
      this.renderOcean();//渲染海洋
      this.renderFish();//渲染鱼
      this.renderWhale();//渲染鲸鱼尾巴
      this.renderBoat();//渲染小船
      this.renderDuck();//渲染鸭子
      this.renderComfire();//渲染火光
      this.renderLight();//渲染灯光
      this.renderSeagull();//渲染海鸥
      this.renderSeagullTop();//渲染海鸥上方
      this.renderPinWheel();//渲染风车
      //=================todo==================
      this.renderBalloon();//渲染热气球
      this.renderChairlift();//渲染过山车
      this.renderMountainCloud();//上头上的云彩
      this.renderFox();//渲染狐狸
      this.renderLeaves();//渲染枫叶
      this.renderPumpkin();//渲染南瓜
      this.renderRainbow();//渲染彩虹
      this.renderLineBird();//渲染小鸟
      this.renderRocket();//渲染火箭
      this.renderSnow();//渲染雪花
      this.renderTarctor();//渲染拖拉机蒸汽
      this.renderWindmill();//渲染大风车
      //==============================================
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
      //this.canvasView.render(this.container);
      this.appView.stage.addChild(this.container);
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
      let riverMask = new PIXI.Sprite(new PIXI.Texture.from(this.imgSrc+'river_mask.png'));
      riverMask.scale.set(0.666);
      riverMask.position.set(563,546);
      //riverScence.mask = riverMask;
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
   //=====================================================================================================
   renderOcean(){
      let offsetScale = 0.333/0.5;
      let oceanScene = new PIXI.Container();
      oceanScene.scale.set(offsetScale);
      oceanScene.position.set(1025, 914);
      let maskSprite = new PIXI.Sprite(new PIXI.Texture.from(this.imgSrc+'ocean_mask.png'));
      oceanScene.addChild(maskSprite);

      let oceanMaskContainer = new PIXI.Container();
      oceanMaskContainer.mask = maskSprite;
      let ocean1Sprite = new PIXI.Sprite(new PIXI.Texture.from('ocean_1.png'));
      oceanMaskContainer.addChild(ocean1Sprite);
      let ocean2Sprite = new PIXI.Sprite(new PIXI.Texture.from('ocean_2.png'));
      oceanMaskContainer.addChild(ocean2Sprite);
      

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

      oceanScene.addChild(oceanMaskContainer);
      
      this.mainScene.addChild(oceanScene);

      let num = 0
      let ticker = new PIXI.ticker.Ticker();
      ticker.stop();
      ticker.add(() => {
         ocean1Sprite.position.x = 32 * Math.sin(8 * num);
         ocean1Sprite.position.y = 24 * Math.sin(8 * num);
         ocean2Sprite.alpha = .5 + Math.sin(20 * num) / 2;
         ocean2Sprite.position.x = 32 * Math.cos(8 * num);
         ocean2Sprite.position.y = 24 * Math.cos(8 * num);
         ripple1.rotation = -.3 + .02 * Math.cos(20 * num);
         ripple1.scale.y = .5 + .06 * Math.sin(20 * num);
         ripple2.rotation = 0 + .02 * Math.cos(20 * num);
         ripple2.scale.y = .5 + .06 * Math.sin(20 * num);
         ripple3.rotation = 0 + .02 * Math.cos(20 * num);
         ripple3.scale.y = .5 + .06 * Math.sin(20 * num);
         ripple4.rotation = -1.35 + .02 * Math.cos(20 * num);
         ripple4.scale.y = .4 + .06 * Math.sin(20 * num);
         num += 0.0015;
      });
      ticker.start();
   }
   //=======================================================================
   renderCloud(){
      //let cloudScene = new PIXI.Container();
      let particleContainer = new PIXI.particles.ParticleContainer(200, {
         scale: true,
         position: true,
         /*rotation: true,
         uvs: true,*/
         alpha: true
      });
      particleContainer.position.set(320, 1620);
      let cloudTexure = new PIXI.Texture.fromFrame('cloud.png');
      //let cloudSprite = new PIXI.Sprite(cloudTexure);
      let config = {
         alpha: {
            start: .41,
            end: 0
         },
         scale: {
            start: .1,
            end: 1,
            minimumScaleMultiplier: 1
         },
         color: {
            start: "#ffffff",
            end: "#ffffff"
         },
         speed: {
            start: 50,
            end: 150
         },
         acceleration: {
            x: 0,
            y: 0
         },
         startRotation: {
            min: 250,
            max: 290
         },
         noRotation: !1,
         rotationSpeed: {
            min: 0,
            max: 0
         },
         lifetime: {
            min: .5,
            max: 1
         },
         blendMode: "normal",
         frequency: .001,
         emitterLifetime: -1,
         maxParticles: 200,
         pos: {
            x: 0,
            y: 0
         },
         addAtBack: !0,
         spawnType: "rect",
         spawnRect: {
            x: 150,
            y: 0,
            w: 300,
            h: 10
         }
      }
      //pixi-particles:https://github.com/pixijs/pixi-particles
      let emitter = new PIXI.particles.Emitter(particleContainer, cloudTexure, config);
      emitter.emit = true;
      this.mainScene.addChild(particleContainer);

      //let num = 0
      let elapsed = Date.now();
      let ticker = new PIXI.ticker.Ticker();
      ticker.stop();
      ticker.add(() => {
         var now = Date.now();
         emitter.update((now - elapsed) * 0.001);
         elapsed = now;
      });
      ticker.start();
   }
   //======================================================
   renderFish(){
      let fishScene = new PIXI.Container();
      fishScene.scale.set(0.333/0.5);
      fishScene.position.set(1005, 1320);
      //若隐若现鱼
      let orFish1 = new PIXI.Sprite(new PIXI.Texture.from('orange_fish.png'));
      orFish1.anchor.set(0.5);
      orFish1.position.set(800, 40);
      orFish1.originalPosition = new PIXI.Point(orFish1.position.x, orFish1.position.y);
      fishScene.addChild(orFish1);
      //若隐若现鱼
      let orFish2 = new PIXI.Sprite(new PIXI.Texture.from('orange_fish.png'));
      orFish2.anchor.set(0.5);
      orFish2.position.set(840, 30);
      orFish2.originalPosition = new PIXI.Point(orFish2.position.x, orFish2.position.y);
      fishScene.addChild(orFish2);
      //silver-fish
      let silverFishSprite = new PIXI.Sprite(new PIXI.Texture.from('silver_fish.png'));
      silverFishSprite.anchor.set(0.5);
      silverFishSprite.position.set(230, 60);
      silverFishSprite.originalPosition = new PIXI.Point(silverFishSprite.position.x, silverFishSprite.position.y);
      fishScene.addChild(silverFishSprite);
      //orange-fish
      let orangeFishSprite = new PIXI.Sprite(new PIXI.Texture.from('orange_fish.png'));
      orangeFishSprite.anchor.set(0.5);
      orangeFishSprite.position.set(170, 60);
      orangeFishSprite.originalPosition = new PIXI.Point(orangeFishSprite.position.x, orangeFishSprite.position.y);
      fishScene.addChild(orangeFishSprite);
      //goldfish
      let goldFishSprite = new PIXI.Sprite(new PIXI.Texture.from('gold_fish.png'));
      goldFishSprite.anchor.set(0.5);
      goldFishSprite.position.set(440, 50);
      goldFishSprite.originalPosition = new PIXI.Point(goldFishSprite.position.x, goldFishSprite.position.y);
      fishScene.addChild(goldFishSprite);
      //jelly_fish章鱼
      let jellyFishSprite = new PIXI.Sprite(new PIXI.Texture.from('jelly_fish.png'));
      jellyFishSprite.anchor.set(0.5);
      jellyFishSprite.position.set(600, 50);
      jellyFishSprite.originalPosition = new PIXI.Point(jellyFishSprite.position.x, jellyFishSprite.position.y);
      fishScene.addChild(jellyFishSprite);
      //水花
      let coralSprite = new PIXI.Sprite(new PIXI.Texture.from('coral.png'));
      coralSprite.anchor.set(0.5, 1);
      coralSprite.position.set(790, 105);
      //console.log(coralSprite.width, coralSprite.height);
      coralSprite.originalPosition = new PIXI.Point(coralSprite.position.x, coralSprite.position.y);
      fishScene.addChild(coralSprite);
      //海星star_fish
      let starSprite = new PIXI.Sprite(new PIXI.Texture.from('star_fish.png'));
      starSprite.anchor.set(0.5);
      starSprite.position.set(750, 90);
      starSprite.originalPosition = new PIXI.Point(starSprite.position.x, starSprite.position.y);
      fishScene.addChild(starSprite);
      //水草左
      let weedLeftSprite = new PIXI.Sprite(new PIXI.Texture.from('weed_1.png'));
      weedLeftSprite.anchor.set(0.5, 1);
      weedLeftSprite.position.set(60, 110);
      weedLeftSprite.originalPosition = new PIXI.Point(weedLeftSprite.position.x, weedLeftSprite.position.y);
      fishScene.addChild(weedLeftSprite);
      //水草右
      let weedRightSprite = new PIXI.Sprite(new PIXI.Texture.from('weed_2.png'));
      weedRightSprite.anchor.set(0.5, 1);
      weedRightSprite.position.set(1150, 110);
      weedRightSprite.originalPosition = new PIXI.Point(weedRightSprite.position.x, weedRightSprite.position.y);
      fishScene.addChild(weedRightSprite);
      //渲染鱼群
      let positionX = 0, positionY = 0, num = 1.2, scale = num, fishArray = [];
      for(var i = 0; i < 8; i++){
         positionX += 28;
         positionY += 16;
         scale -= 0.2;
         let fishSprite = new PIXI.Sprite(new PIXI.Texture.from('fish.png'));
         fishSprite.position.set(900 + positionX, 30 + positionY);
         /*fishSprite.velocity.x = fishSprite.position.x;
         fishSprite.velocity.y = fishSprite.position.y;*/
         fishSprite.originalPosition = new PIXI.Point(fishSprite.position.x, fishSprite.position.y);
         fishSprite.scale.set(scale);
         fishScene.addChild(fishSprite);
         if(i == 2){
            positionX = 28;
            positionY = -16;
            scale = num;
         }
         if(i == 5){
            positionX = 56;
            positionY = -32;
            scale = num;
         }
         fishArray.push(fishSprite);
      }
      this.mainScene.addChild(fishScene);
      //动画
      let ticker = new PIXI.ticker.Ticker();
      ticker.stop();
      let num1 = 0, num2 = 0;
      ticker.add(() => {
         let maxSilverPosition = silverFishSprite.originalPosition.x + 70 * Math.cos(3 * num1);
         silverFishSprite.scale.x = orangeFishSprite.scale.x = silverFishSprite.position.x > maxSilverPosition ? -1 : 1;
         silverFishSprite.position.x = maxSilverPosition;
         silverFishSprite.position.y = silverFishSprite.originalPosition.y + 6 * Math.sin(num1);

         orangeFishSprite.position.x = orangeFishSprite.originalPosition.x + 60 * Math.cos(3 * num1);
         orangeFishSprite.position.y = orangeFishSprite.originalPosition.y + 10 * Math.sin(num1);

         goldFishSprite.position.x = goldFishSprite.originalPosition.x + 25 * Math.cos(num1);
         goldFishSprite.position.y = goldFishSprite.originalPosition.y + 10 * Math.sin(num2);
         goldFishSprite.rotation = 0.1 * Math.abs(Math.sin(num1));

         jellyFishSprite.position.x = jellyFishSprite.originalPosition.x + 6 * Math.sin(num2);
         jellyFishSprite.position.y = jellyFishSprite.originalPosition.y + 10 * Math.sin(num1);
         jellyFishSprite.scale.y = 1 + .05 * Math.sin(2 * num2);
         jellyFishSprite.scale.x = 1 + .05 * Math.cos(2 * num2);

         weedLeftSprite.rotation = -Math.sin(num2)/20;
         weedLeftSprite.scale.y = 0.8 + Math.sin(num2)/60;

         weedRightSprite.rotation = Math.sin(num2) / 20;
         weedRightSprite.scale.y = .8 + Math.sin(num2) / 40;

         starSprite.position.x = starSprite.originalPosition.x + 4 * Math.sin(num1);
         starSprite.rotation = Math.sin(num2)/10;

         coralSprite.scale.y = 0.8 + Math.sin(num2)/40;

         orFish1.position.x = orFish1.originalPosition.x + 50 * Math.cos(num1/4);
         orFish1.position.y = orFish1.originalPosition.y + 18 * Math.sin(num1/4);
         orFish1.scale.x = orFish1.scale.y = .8 * -Math.cos(num1 / 4);
         orFish1.alpha = .7 * Math.abs(orFish1.scale.x);

         orFish2.position.x = orFish2.originalPosition.x + 40 * Math.cos(num1/5);
         orFish2.position.y = orFish2.originalPosition.y + 12 * Math.sin(num1/4);
         orFish2.scale.x = orFish2.scale.y = .7 * -Math.cos(num1 / 4);
         orFish2.alpha = .7 * Math.abs(orFish2.scale.x);
         for(var i = 0; i < fishArray.length; i++){
            let fishSprite = fishArray[i];
            let maxPosition = fishSprite.originalPosition.x + 160 * Math.sin(num1);
            fishSprite.scale.x = fishSprite.position.x > maxPosition ? 1 : -1;
            fishSprite.position.x = maxPosition;
            let value = Math.cos(num2);
            if(i > 3){
               value = Math.sin(num2);
            }
            fishSprite.position.y = fishSprite.originalPosition.y + (i+2) * value;
         }
         num1 += 0.01;
         num2 += 0.04;

      });
      ticker.start();
   }
   renderWhale(){
      let whaleScenen = new PIXI.Container();
      whaleScenen.position.set(1700, 1125);
      let whaleSprite = new PIXI.Sprite(new PIXI.Texture.from('whale_tail.png'));
      whaleSprite.scale.set(0.666);
      whaleScenen.addChild(whaleSprite);
      this.mainScene.addChild(whaleScenen);
      //动画
      let ticker = new PIXI.ticker.Ticker();
      ticker.stop();
      let num1 = 0;
      ticker.add(() => {
         whaleSprite.position.x = 5 * Math.cos(num1);
         whaleSprite.position.y = 10 * Math.sin(num1);
         num1 += 0.02;
      });
      ticker.start();
   }
   renderBoat(){
      let boatScene = new PIXI.Container();
      boatScene.position.set(1235, 1125);
      let boatSprite = new PIXI.Sprite(new PIXI.Texture.from('boat.png'));
      boatSprite.scale.set(0.666);
      boatScene.addChild(boatSprite);
      this.mainScene.addChild(boatScene);
      //动画
      let ticker = new PIXI.ticker.Ticker();
      ticker.stop();
      let num1 = 0;
      ticker.add(() => {
         boatSprite.position.x = 40 * Math.sin(num1);
         boatSprite.rotation = 0.015 * Math.cos(10 * num1);
         num1 += 0.005;
      });
      ticker.start();
   }
   renderDuck(){
      let duckScene = new PIXI.Container();
      duckScene.position.set(1450, 1125);
      let rect1 = new PIXI.Rectangle(30, 80, 0, 0);
      let rect2 = new PIXI.Rectangle(180, 80, 180, 0);
      let duckSprite1 = new PIXI.Sprite(new PIXI.Texture.from('duck_1.png'));
      let duckSprite1X = rect1.x + rect1.width/2 * Math.random();
      let duckSprite1Y = rect1.y + rect1.height/2 * Math.random();
      duckScene.addChild(duckSprite1);
      let duckSprite2 = new PIXI.Sprite(new PIXI.Texture.from('duck_2.png'));
      let duckSprite2X = rect2.x + rect2.width/2 * Math.random();
      let duckSprite2Y = rect2.y + rect2.height/2 * Math.random();
      duckScene.addChild(duckSprite2);
      this.mainScene.addChild(duckScene);
      //动画
      let ticker = new PIXI.ticker.Ticker();
      ticker.stop();
      let num1 = 0, num2 = 0;
      ticker.add(() => {
         duckSprite1.rotation = 0.01 * Math.cos(num1);
         duckSprite1.position.x = duckSprite1X - 50 * Math.cos(num2);
         duckSprite1.position.y = duckSprite1Y + 10 * Math.sin(num2);
         duckSprite2.rotation = 0.1 * Math.cos(num1);
         duckSprite2.position.x = duckSprite2X + 10 * Math.cos(num2);
         duckSprite2.position.y = duckSprite2Y - 30 * Math.sin(num2);
         num1 += 0.01;
         num2 += 0.005;
      });
      ticker.start();
   }
   renderComfire(){
      let comfireScene = new PIXI.Container();
      comfireScene.position.set(275, 1085);
      let comfireGlowSprite = new PIXI.Sprite(new PIXI.Texture.from('campfire_glow.png'));
      comfireGlowSprite.scale.set(0.5);
      comfireGlowSprite.position.set(20, 14);
      comfireGlowSprite.alpha = 0.6;//透明度
      comfireGlowSprite.blendMode = 1;
      comfireScene.addChild(comfireGlowSprite);
      let array = [];
      for(var i = 1; i < 4; i++){
         let comfireSprite = new PIXI.Sprite(new PIXI.Texture.from('campfire_'+ i +'.png'));
         comfireSprite.position.set(6, 14);
         comfireSprite.scale.set(0.666);
         comfireSprite.visible = false;
         comfireScene.addChild(comfireSprite);
         array.push(comfireSprite);
      }
      this.mainScene.addChild(comfireScene);
      //动画
      let ticker = new PIXI.ticker.Ticker();
      ticker.stop();
      let num1 = 0, num2 = 0, iValue = 0, value = 1;
      ticker.add(() => {
         num1 += 0.02;
         if(num1 > 0.2){
            array[iValue].visible = false;
            if(iValue + value < 0){
               value = 1;
            }else if(iValue + value > array.length - 1){
               value = -1;
            }
            iValue += value;
            array[iValue].visible = true;
            num1 = 0;
         }
         comfireGlowSprite.alpha = 0.4 + Math.abs(Math.sin(Math.tan(1.2 * Math.cos(num2)))) * 0.2;
         num2 += 0.05;
      });
      ticker.start();
   }
   renderLight(){
      let array = [];
      let lightScene = new PIXI.Container();
      lightScene.position.set(1638, 975);
      lightScene.scale.set(0.5);
      let lightSprite1 = new PIXI.Sprite(new PIXI.Texture.from('light_1.png'));
      lightScene.addChild(lightSprite1);
      let lightSprite2 = new PIXI.Sprite(new PIXI.Texture.from('light_2.png'));
      lightSprite2.position.set(32, 6);
      lightSprite2.alpha = 0;
      lightScene.addChild(lightSprite2);
      let lightSprite3 = new PIXI.Sprite(new PIXI.Texture.from('light_3.png'));
      lightSprite3.position.set(74, 14);
      lightSprite3.alpha = 0;
      lightScene.addChild(lightSprite3);
      array.push(lightSprite1, lightSprite2, lightSprite3);
      //动画
      let ticker = new PIXI.ticker.Ticker();
      ticker.stop();
      let num1 = 0, iValue = 0, value = 1;
      ticker.add(() => {
         num1 += 0.02;
         if(num1 > 0.8){
            TweenLite.to(array[iValue], 0.4, {
               alpha: 0,
               ease: Power3.easeOut
            });
            if(iValue + value < 0){
               value = 1;
            }else if(iValue + value > array.length - 1){
               value = -1;
            }
            iValue += value;
            TweenLite.to(array[iValue], 0.4, {
               alpha: 1,
               delay: 0,
               ease: Power3.easeOut
            })
            num1 = 0;
         }

      });
      ticker.start();
      this.mainScene.addChild(lightScene);
   }
   renderSeagullTop(){
      let seagullSmScene = new PIXI.Container();
      seagullSmScene.position.set(830, 350);
      seagullSmScene.scale.set(0.666);
      let seagullSmArray = [];
      for(var i=1;i<5;i++){
         let texture = new PIXI.Texture.fromFrame('seagull_small_'+i+'.png');
         seagullSmArray.push(texture);
      }
      var animationSM = new PIXI.extras.AnimatedSprite(seagullSmArray);
      animationSM.animationSpeed = 0.08;
      let numsm = Math.floor(animationSM.totalFrames * Math.random());
      animationSM.gotoAndPlay(numsm);
      seagullSmScene.addChild(animationSM);
      this.mainScene.addChild(seagullSmScene);
      //动画
      let ticker = new PIXI.ticker.Ticker();
      ticker.stop();
      let num1 = 0;
      ticker.add(() => {
         animationSM.position.x = 20 * Math.cos(num1);
         animationSM.position.y = 10 * Math.sin(num1);
         num1 += 0.008;
         
      });
      ticker.start();
   }
   //海鸥
   renderSeagull(){
      let seagullScene = new PIXI.Container();
      seagullScene.position.set(1800, 950);
      seagullScene.scale.set(0.666);
      let seagullArray = [];
      for(var i=1;i<6;i++){
         let texture = new PIXI.Texture.fromFrame('seagull_'+i+'.png');
         seagullArray.push(texture);
      }
      var animation = new PIXI.extras.AnimatedSprite(seagullArray);
      //animation.position.x = 20 * 
      animation.animationSpeed = 0.08;
      let num = Math.floor(animation.totalFrames * Math.random());
      animation.gotoAndPlay(num);
      seagullScene.addChild(animation);

      let seagullSmArray = [];
      for(var i=1;i<5;i++){
         let texture = new PIXI.Texture.fromFrame('seagull_small_'+i+'.png');
         seagullSmArray.push(texture);
      }
      var animationSM = new PIXI.extras.AnimatedSprite(seagullSmArray);
      animationSM.animationSpeed = 0.08;
      let numsm = Math.floor(animationSM.totalFrames * Math.random());
      animationSM.gotoAndPlay(numsm);
      seagullScene.addChild(animationSM);
      this.mainScene.addChild(seagullScene);
      //动画
      let ticker = new PIXI.ticker.Ticker();
      ticker.stop();
      let num1 = 0;
      ticker.add(() => {
         animation.position.x = 30 * Math.cos(num1);
         animation.position.y = 20 * Math.sin(num1);
         animationSM.position.x = 100 + 20 * Math.cos(num1);
         animationSM.position.y = 100 + 10 * Math.sin(num1);
         num1 += 0.008;
         
      });
      ticker.start();
   }
   //风车
   renderPinWheel(){
      let pinWheelScene = new PIXI.Container();
      pinWheelScene.position.set(945, 1140);
      pinWheelScene.scale.set(0.666);
      let pinWheelSprite1 = new PIXI.Sprite(new PIXI.Texture.from('pinwheel_1.png'));
      pinWheelSprite1.buttonMode = true;
      pinWheelSprite1.interactive = true;
      //需要设置anchor，否则在rotate时有问题
      pinWheelSprite1.anchor.set(0.5);
      let pin1Obj = {
         sprite: pinWheelSprite1,
         rotateSpeed: 0.03,
         rotateSpeedTarget: 0.03,
         counter: 0
      }

      pinWheelSprite1.on('touchstart', ()=>{
         pin1Obj.counter = 0;
         pin1Obj.rotateSpeedTarget = 0.5;
      });
      pinWheelScene.addChild(pinWheelSprite1);

      let pinWheelSprite2 = new PIXI.Sprite(new PIXI.Texture.from('pinwheel_2.png'));
      pinWheelSprite2.anchor.set(0.5);
      pinWheelSprite2.position.set(691, -430);
      //添加事件需要设置这两个属性
      pinWheelSprite2.buttonMode = true;
      pinWheelSprite2.interactive = true;
      let pin2Obj = {
         sprite: pinWheelSprite2,
         rotateSpeed: 0.03,
         rotateSpeedTarget: 0.03,
         counter: 0
      }
      pinWheelSprite2.on('touchstart', ()=>{
         pin2Obj.counter = 0;
         pin2Obj.rotateSpeedTarget = 0.5;
      });
      pinWheelScene.addChild(pinWheelSprite2);
      this.mainScene.addChild(pinWheelScene);
      let ticker = new PIXI.ticker.Ticker();
      ticker.stop();
      let num1 = 0;
      ticker.add(() => {
         this.pinWheelRotation(pin1Obj);
         this.pinWheelRotation(pin2Obj);
      });
      ticker.start();
   }
   pinWheelRotation(pinObj){
      let angle = (1 - Math.cos(0.1 * Math.PI)) / 2;
      pinObj.rotateSpeed = pinObj.rotateSpeed * (1 - angle) + pinObj.rotateSpeedTarget * angle;
      pinObj.sprite.rotation += pinObj.rotateSpeed;
      pinObj.counter ++;
      if(pinObj.counter > 100 && pinObj.rotateSpeedTarget !== 0.03){
         pinObj.counter = 0;
         pinObj.rotateSpeedTarget = 0.03;
      }
   }
   renderBalloon(){
      let ballonMainScene = new PIXI.Container();
      ballonMainScene.position.set(1380, 360);
      let ballonScene = new PIXI.Container();
      ballonScene.scale.set(0.666);
      let lightScene = new PIXI.Container();
      ballonScene.addChild(lightScene);
      let ballonSprite = new PIXI.Sprite(new PIXI.Texture.from('balloon.png'));
      ballonSprite.anchor.set(0.523, 0.128);
      lightScene.addChild(ballonSprite);

      let lightSprite = new PIXI.Sprite(new PIXI.Texture.from('balloon_flicker.png'));
      lightSprite.scale.set(0.8);
      lightSprite.position.set( -111, -17);
      lightSprite.blendMode = 1;
      lightSprite.alpha = 0;
      lightScene.addChild(lightSprite);

      let particleContainer = new PIXI.Container();
      particleContainer.position.set( - 9, 182);
      let config = {
         alpha: {
            start: .4,
            end: 0
         },
         scale: {
            start: .2,
            end: .02,
            minimumScaleMultiplier: 1
         },
         color: {
            start: "#ffdd33",
            end: "#dddddd"
         },
         speed: {
            start: 30,
            end: 100
         },
         acceleration: {
            x: 40,
            y: 0
         },
         startRotation: {
            min: 250,
            max: 290
         },
         noRotation: false,
         rotationSpeed: {
            min: 0,
            max: 0
         },
         lifetime: {
            min: .5,
            max: 1
         },
         blendMode: "normal",
         frequency: .001,
         emitterLifetime: .6,
         maxParticles: 100,
         pos: {
            x: 0,
            y: 0
         },
         addAtBack: true,
         spawnType: "rect",
         spawnRect: {
            x: 0,
            y: 0,
            w: 0,
            h: 0
         }
      }
      let cloudTexture = new PIXI.Texture.fromFrame("cloud.png");
      let particleTexture = new PIXI.Texture.fromFrame("particle.png");
      let emitter = new PIXI.particles.Emitter(particleContainer, [particleTexture, cloudTexture], config);
      lightScene.addChild(particleContainer);
      

      let lineRect = new PIXI.Graphics();
      lineRect.beginFill(16777215, .5);
      lineRect.drawRect(0, 0, 1.75, 1e3);
      lineRect.endFill();
      lineRect.position.set(-1, -lineRect.height);
      ballonScene.addChild(lineRect);
      ballonMainScene.addChild(ballonScene);
      this.mainScene.addChild(ballonMainScene);

      let elapsed = Date.now(), num1 = 0, value1 = 0, value2 = 0, flag = false;
      let ticker = new PIXI.ticker.Ticker();
      ticker.stop();
      ticker.add(() => {
         value2 += 0.02;
         ballonScene.position.x = 160 * Math.cos(num1);
         ballonScene.rotation = this.getRotation(ballonScene.position.x, -160, 160, -0.4 / 8, 0.4);
         ballonScene.position.y = 100 * Math.sin(2 * num1);
         ballonScene.scale.x = ballonScene.scale.y = .6 + .05 * Math.sin(2 * num1);
         lightScene.rotation = .05 * Math.cos(20 * num1);
         lineRect.width = 1 + 1 / 0.5;
         //设置emit=true,表示触发
         if(value2 > 3 && !flag){
            emitter.emit = true;
            flag = true;
         }
         if(flag){
            value1 += 0.02;
            if(value1 > 0.1){
               lightSprite.alpha = .3 === lightSprite.alpha ? .15 : .3;
               value1 = 0;
            }
         }
         if(value2 > 4){
            lightSprite.alpha = 0;
            value2 = 0;
            flag = false;
         }
         var now = Date.now();
         emitter.update((now - elapsed) * 0.001);
         elapsed = now;
         num1 += 0.002;
      });
      ticker.start();
   }
   getRotation(positionx, minValue, maxValue, radio, scale){
      return positionx === minValue ? radio: (positionx - minValue) * (scale - radio) / (maxValue - minValue) + radio;
   }
   renderChairlift(){
      let leftArr = [], rightArr = [],
      rightMin = new PIXI.Point(20, 27),
      rightMax = new PIXI.Point(532, 151),
      leftMax = new PIXI.Point(531, 172),
      leftMin = new PIXI.Point(11, 47);
      let chairScene = new PIXI.Container();
      chairScene.scale.set(0.666);
      chairScene.position.set(530, 370);
      let backCableSprite = new PIXI.Sprite(new PIXI.Texture.from('chairlift_cable_back.png'));
      backCableSprite.scale.set(0.5);
      chairScene.addChild(backCableSprite);
      //向右：x越来越大，y越来越大
      for(var i = 0; i < 4; i++){
         let spriteRight = new PIXI.Sprite(new PIXI.Texture.from('chairlift_chair_right.png'));
         spriteRight.scale.set(0.5);
         spriteRight.position.x = rightMin.x + (rightMax.x - rightMin.x) * 0.25 * i;
         spriteRight.position.y = rightMin.y + (rightMax.y - rightMin.y) * 0.25 * i;
         //console.log(spriteRight.position)
         rightArr.push(spriteRight);
         chairScene.addChild(spriteRight);
      }

      let backSprite = new PIXI.Sprite(new PIXI.Texture.from('chairlift_back.png'));
      backSprite.scale.set(0.5);
      chairScene.addChild(backSprite);
      this.mainScene.addChild(chairScene);

      let cableSprite = new PIXI.Sprite(new PIXI.Texture.from('chairlift_cable.png'));
      cableSprite.scale.set(0.5);
      chairScene.addChild(cableSprite);
      //向左：x越来越小，y越来越小
      for(var i = 0; i < 4; i++){

         let spriteLeft = new PIXI.Sprite(new PIXI.Texture.from('chairlift_chair_left.png'));
         spriteLeft.scale.set(0.5);
         spriteLeft.position.x = leftMax.x + (leftMin.x - leftMax.x) * 0.25 * i;
         spriteLeft.position.y = leftMax.y + (leftMin.y - leftMax.y) * 0.25 * i;
         leftArr.push(spriteLeft);
         chairScene.addChild(spriteLeft);
      }
      
      //动画
      let ticker = new PIXI.ticker.Ticker(), num1 = 0;
      ticker.stop();
      ticker.add(() => {
         for(var i = 0; i < 4; i++){
            let spriteRight = rightArr[i];
            spriteRight.position.x += (rightMax.x - rightMin.x) / 1200;
            spriteRight.position.y += (rightMax.y - rightMin.y) / 1200;
            spriteRight.rotation = 0.01 * Math.sin(num1);
            //向右时，每当比最大值还大时，就把此元素放到最小的位置
            if(spriteRight.position.x > rightMax.x){
               spriteRight.position.copy(rightMin);
            }
            let spriteLeft = leftArr[i];
            spriteLeft.position.x += (leftMin.x - leftMax.x) / 1200;
            spriteLeft.position.y += (leftMin.y - leftMax.y) / 1200;
            spriteLeft.rotation = 0.01 * Math.cos(num1);
            //向左时，每当比最小值还小时，就把此元素放到最大的位置
            if(spriteLeft.position.x < leftMin.x){
               spriteLeft.position.copy(leftMax);
            }
         }
         num1 += 0.1;
      });
      ticker.start();
   }
   renderMountainCloud(){
      let mountainScene = new PIXI.Container();
      mountainScene.scale.set(0.666);
      mountainScene.position.set(550, 390);
      let cloudMask = new PIXI.Sprite(new PIXI.Texture.from(this.imgSrc+'cloud_mask.png'));
      mountainScene.addChild(cloudMask);
      mountainScene.mask = cloudMask;

      let cloudTexture = new PIXI.Texture.from('cloud_puff.png');
      let spriteWhite = new PIXI.Sprite(cloudTexture);
      spriteWhite.position.set(-30, 0);
      spriteWhite.scale.set(3);
      spriteWhite.alpha = 0.4;
      mountainScene.addChild(spriteWhite);

      let spriteColor = new PIXI.Sprite(cloudTexture);
      spriteColor.position.set(180,108);
      spriteColor.scale.set(2);
      spriteColor.tint = 16724479;
      spriteColor.alpha = 0.25;
      spriteColor.rotation = 0.05;
      mountainScene.addChild(spriteColor);

      let spriteCloud = new PIXI.Sprite(cloudTexture);
      spriteCloud.position.set(400, 340);
      spriteCloud.alpha = 0.8;
      spriteCloud.rotation = 0.1;
      mountainScene.addChild(spriteCloud);

      let spriteCloud1 = new PIXI.Sprite(cloudTexture);
      spriteCloud1.position.set(140, 120);
      spriteCloud1.rotation = 0.1;
      mountainScene.addChild(spriteCloud1);

      this.mainScene.addChild(mountainScene);
      //动画
      let ticker = new PIXI.ticker.Ticker(), num1 = 0;
      ticker.stop();
      ticker.add(() => {
         spriteWhite.position.x = -30 + 10 * Math.cos(num1);
         spriteWhite.position.y = 10 * Math.sin(num1);
         spriteWhite.scale.x = 2.9 + 0.05 * Math.cos(2 * num1);
         spriteWhite.scale.y = 2.9 + 0.05 * Math.sin(2 * num1);
         spriteWhite.rotation = 0.02 * Math.sin(num1);

         spriteColor.position.x = 180 + 20 * Math.sin(num1);
         spriteColor.position.y = 108 + 20 * Math.cos(num1);
         spriteColor.scale.x = 2 + 0.05 * Math.cos(2 * num1);
         spriteColor.scale.y = 2 + 0.1 * Math.sin(2 * num1);
         spriteColor.rotation = 0.05 + 0.05 * Math.sin(num1);

         spriteCloud.position.x = 400 + 10 * Math.cos(2 * num1);
         spriteCloud.position.y = 340 + 10 * Math.sin(2 * num1);
         spriteCloud.scale.x = 1 + 0.05 * Math.sin(2 * num1);
         spriteCloud.scale.y = 1 + 0.1 * Math.cos(2 * num1);
         spriteCloud.rotation = Math.PI + 0.1 + 0.02 * Math.cos(num1);

         spriteCloud1.position.x = 140 + 10 * Math.sin(num1);
         spriteCloud1.position.y = 120 + 10 * Math.cos(num1);
         spriteCloud1.scale.x = 1 + 0.02 * Math.cos(num1);
         spriteCloud1.scale.y = 1 + 0.02 * Math.sin(num1);
         spriteCloud1.rotation = 0.1 + 0.02 * Math.sin(num1);
         num1 += 0.005;
      });
      ticker.start();
   }
   renderFox(){
      let foxScene = new PIXI.Container();
      foxScene.scale.set(0.666);
      foxScene.rotation = -0.4;
      foxScene.position.set(260, 995);
      let foxTailSprite = new PIXI.Sprite(new PIXI.Texture.from('fox_tail.png'));
      //pivot:it rotates around Assignment by value
      foxTailSprite.pivot.set(49, 119);
      foxTailSprite.position.set(foxTailSprite.pivot.x, foxTailSprite.pivot.y);
      foxScene.addChild(foxTailSprite);

      let foxBodySprite = new PIXI.Sprite(new PIXI.Texture.from('fox_body.png'));
      foxScene.addChild(foxBodySprite);

      let foxHeaderSprite = new PIXI.Sprite(new PIXI.Texture.from('fox_head.png'));
      foxHeaderSprite.pivot.set(44, 56);
      foxHeaderSprite.position.set(foxHeaderSprite.pivot.x, foxHeaderSprite.pivot.y);
      foxScene.addChild(foxHeaderSprite);

      this.mainScene.addChild(foxScene);
      //动画
      let ticker = new PIXI.ticker.Ticker(), num1 = 0;
      ticker.stop();
      ticker.add(() => {
         foxTailSprite.rotation = 0.6 * Math.cos(5 * num1);
         foxHeaderSprite.rotation = 0.4 * Math.sin(2 * num1);
         num1 += 0.01;
      });
      ticker.start();
   }
   renderLeaves(){

   }
   renderPumpkin(){
      let pumpkinScene = new PIXI.Container();
      pumpkinScene.position.set(695, 860);
      pumpkinScene.scale.set(0.666);

      let bodySprite = new PIXI.Sprite(new PIXI.Texture.from('pumpkin.png'));
      pumpkinScene.addChild(bodySprite);

      let litSprite = new PIXI.Sprite(new PIXI.Texture.from('pumpkin_lit.png'));
      pumpkinScene.addChild(litSprite);

      let lightSprite = new PIXI.Sprite(new PIXI.Texture.from('pumpkin_glow.png'));
      lightSprite.scale.set(0.666);
      lightSprite.position.set(35, 30);
      lightSprite.alpha = 0.6;
      lightSprite.blendMode = 1;
      pumpkinScene.addChild(lightSprite);

      this.mainScene.addChild(pumpkinScene);
      //动画
      let ticker = new PIXI.ticker.Ticker(), num1 = 0;
      ticker.stop();
      ticker.add(() => {
         lightSprite.alpha = 0.4 + Math.abs(Math.sin(Math.pow(8, Math.sin(num1)))) * 0.2;
         num1 += 0.05;
      });
      ticker.start();
   }
   renderRainbow(){

   }
   renderLineBird(){
      let birdScene = new PIXI.Container();
      birdScene.scale.set(0.666);
      birdScene.position.set(520, 745);

      let birdSprite1 = new PIXI.Sprite(new PIXI.Texture.from('robin_1.png'));
      birdScene.addChild(birdSprite1);

      let birdSprite2 = new PIXI.Sprite(new PIXI.Texture.from('robin_2.png'));
      birdSprite2.visible = false;
      birdScene.addChild(birdSprite2);

      this.mainScene.addChild(birdScene);
      //动画
      let ticker = new PIXI.ticker.Ticker(), value1 = 0, value2 = 0, flag = false;
      ticker.stop();
      ticker.add(() => {
         value2 += 0.02;
         if(value2 > 5){
            flag = true;
         }
         if(flag){
            value1 += 0.02;
            if(value1 > 0.1){
               birdSprite1.visible = !birdSprite1.visible;
               birdSprite2.visible = !birdSprite2.visible;
               value1 = 0;
            }
         }
         if(value2 > 6){
            flag = false;
            value2 = 0;
            birdSprite1.visible = true;
            birdSprite2.visible = false;
         }
      });
      ticker.start();
   }
   renderRocket(){
      let rocketScene = new PIXI.Container(), flag = true, finishFlag = false, timelineLite;
      rocketScene.scale.set(0.8);
      rocketScene.position.set(407, 1070);
      rocketScene.buttonMode = true;
      rocketScene.interactive = true;

      let rocketSprite = new PIXI.Sprite.from('rocket.png');//(new PIXI.Texture.from(''));
      rocketSprite.anchor.set(0.5, 1);
      rocketSprite.rotation = -0.111685;
      rocketScene.addChild(rocketSprite);

      let particleContainer = new PIXI.Container();
      rocketSprite.addChild(particleContainer);
      particleContainer.position.set(2, -50);
      particleContainer.rotation = 3;
      let cloudTexture = new PIXI.Texture.from('cloud.png');
      let particleTexture = new PIXI.Texture.from('particle.png');
      let config = {
         alpha: {
            start: .4,
            end: 0
         },
         scale: {
            start: .2,
            end: .05,
            minimumScaleMultiplier: 1
         },
         color: {
            start: "#ffdd33",
            end: "#dddddd"
         },
         speed: {
            start: 30,
            end: 200
         },
         acceleration: {
            x: 0,
            y: 0
         },
         startRotation: {
            min: 250,
            max: 290
         },
         noRotation: !1,
         rotationSpeed: {
            min: 0,
            max: 0
         },
         lifetime: {
            min: .5,
            max: 1.5
         },
         blendMode: "normal",
         frequency: .001,
         emitterLifetime: -1,
         maxParticles: 20,
         pos: {
            x: 0,
            y: 0
         },
         addAtBack: !0,
         spawnType: "rect",
         spawnRect: {
            x: 0,
            y: 0,
            w: 0,
            h: 0
         }
      }
      let emitter = new PIXI.particles.Emitter(particleContainer, [particleTexture, cloudTexture], config);
      emitter.emit = true;
      emitter.particleBlendMode = 1;
      var starAnimation = new PIXI.extras.AnimatedSprite.fromFrames(["rocket_spark_1.png", "rocket_spark_2.png", "rocket_spark_3.png", "rocket_spark_4.png"]);
      starAnimation.anchor.set(.5);
      starAnimation.position.set(3, -50);
      rocketSprite.addChild(starAnimation);
      starAnimation.animationSpeed = .2;
      starAnimation.play();

      let colorArray = [12989195, 16645875, 34266, 15777047];
      let grapArr = [], paramsArr = [];
      colorArray.map((item)=>{
         let sprite = new PIXI.Graphics();
         sprite.beginFill(item);
         sprite.drawRect(-16, -8, 16, 8);
         sprite.endFill();
         grapArr.push(sprite.generateTexture());
      });
      let rectContainer = new PIXI.Container();
      rocketScene.addChild(rectContainer);
      grapArr.forEach((item, index)=>{
         let partiCon = new PIXI.Container();
         partiCon.position.set(100 * index, 0);
         for(var i = 0; i < 80; i++){
            let itemSprite = new PIXI.Sprite(item);
            partiCon.addChild(itemSprite);
            paramsArr.push({
               sprite: itemSprite,
               gravity: this.getRandomData(6, 12),
               startVelocity: {
                  x: Math.cos(2 * Math.PI / 80 * i) * this.getRandomData(15, 30),
                  y: Math.sin(2 * Math.PI / 80 * i) * this.getRandomData(15, 30)
               },
               velocity: {
                  x: 0,
                  y: 0
               },
               rotationVelocity: this.getRandomData( - .2, .2),
               alpha: 1
            })
         }
         rectContainer.addChild(partiCon);
         rectContainer.visible = false;
      })
      this.mainScene.addChild(rocketScene);
      rocketScene.on('touchstart', ()=>{
         if(flag){
            if(timelineLite){
               timelineLite.kill();
            }
            finishFlag = false;
            rectContainer.visible = false;
            //初始化参数，必须，否则第二次点击不出现碎片，因为位置不对，透明度不对
            setParticlesValue();
            setVisible();
            flag = false;
            emitter.maxParticles = 500;
            timelineLite = new TimelineLite();
            timelineLite.to(rocketSprite, 1.6, {
               bezier: {
                  values: [{x: 0, y: -120}, {x: 150, y: -360}, {x: 360, y: -480}, {x: 540, y: -540}],
                  autoRotate: ['x', 'y', 'rotation', Math.PI / 2, true]
               },
               ease: window.Power1.easeIn,
               onComplete: () => {
                  rocketSprite.visible = false;
                  rectContainer.position.set(rocketSprite.position.x, rocketSprite.position.y);
                  rectContainer.visible = true;
                  finishFlag = true;
                  setTimeout(()=>{
                     setVisible();
                  }, 200)
               }
            })
         }
      })
      //动画
      let elapsed = Date.now(), num1 = 0;
      let ticker = new PIXI.ticker.Ticker();
      ticker.stop();
      ticker.add(() => {
         var now = Date.now();
         emitter.update((now - elapsed) * 0.001);
         elapsed = now;
         if(flag){
            rocketSprite.rotation = -0.111685 + .008 * Math.sin(10 * num1);
         }
         if(finishFlag){
            for(var i = 0; i < paramsArr.length; i++){
               let obj = paramsArr[i],
                  sprite = obj.sprite,
                  velocity = obj.velocity,
                  gravity = obj.gravity,
                  rotation = obj.rotationVelocity;
               sprite.position.x = sprite.position.x + velocity.x;
               sprite.position.y = sprite.position.y + velocity.y + gravity;
               velocity.x *= 0.98;
               velocity.y *= 0.98;
               //console.log(velocity)
               obj.alpha *= 0.99;
               sprite.alpha = 0.2 + obj.alpha;
               sprite.rotation += rotation;
               sprite.scale.x -= 0.005;
               sprite.scale.y -= 0.005;
               if(sprite.scale.x < 0.2){
                  finishFlag = false;
                  rectContainer.visible = false;
               }
            }
         }
         
         num1 += 0.1;
      });
      ticker.start();
      function setVisible(){
         flag = true;
         rocketSprite.visible = true;
         rocketSprite.position.set(0, 0);
         rocketSprite.rotation = -0.111685;
         emitter.maxParticles = 50;
      }
      function setParticlesValue(){
         paramsArr.forEach((item)=>{
            let itemSprite = item.sprite;
            itemSprite.position.set(0,0);
            itemSprite.scale.set(1.2);
            itemSprite.alpha = 1;
            itemSprite.rotation = 0;
            item.velocity.x = item.startVelocity.x;
            item.velocity.y = item.startVelocity.y;
            item.alpha = 1;
         })
      }
   }
   renderSnow(){
      let snowScene = new PIXI.Container();
      snowScene.position.set(450, 280);
      let circle = new PIXI.Graphics();
      circle.beginFill(16777215);
      circle.drawCircle(2, 2, 2);
      circle.endFill();
      let circleTexture = circle.generateTexture();
      let particleContainer = new PIXI.Container();/*new PIXI.particles.ParticleContainer(100, {
         scale: true,
         position: true,
         alpha: true
      });*/
      for(var i=0; i<40; i++){
         var itemSprite = new PIXI.Sprite(circleTexture);
         itemSprite.position.set(this.getRandomData(-120, 120), this.getRandomData(-60, 60));
         itemSprite.scale.set(this.getRandomData(0.6, 1.2));
         itemSprite.data = {
            x: itemSprite.position.x,
            velocity: 0.5/itemSprite.scale.x + this.getRandomData(0, 0.1),
            alpha: Math.min(1, .8 / itemSprite.scale.x + this.getRandomData(0, .1)),
            sway: 3 + Math.floor(this.getRandomData( - 3, 3)),
            maxY: 120 / itemSprite.scale.x
         }
         particleContainer.addChild(itemSprite);
      }
      let parChid = particleContainer.children;
      
      snowScene.addChild(particleContainer);
      this.mainScene.addChild(snowScene);
      //动画
      let ticker = new PIXI.ticker.Ticker(), num1 = 0;
      ticker.stop();
      ticker.add(() => {
         for(var i = 0; i < parChid.length; i++){
            let item = parChid[i];
            let data = item.data;
            item.position.x = data.x + Math.cos(num1) * data.sway;
            item.position.y += data.velocity;
            if(item.position.y < data.maxY && item.alpha < data.alpha){
               item.alpha += 0.01;
            }
            if(item.position.y > data.maxY){
               item.alpha -= 0.01;
            }
            if(item.position.y > data.maxY && item.alpha <= 0){
               item.alpha = 0;
               item.position.y = this.getRandomData(-60, 60);
            }
         }
         num1 += 0.02;
      });
      ticker.start();
   }
   getRandomData(x, y){
      return x + Math.random() * (y - x);
   }
   renderTarctor(){
      let particleContainer = new PIXI.particles.ParticleContainer(200, {
         scale: true,
         position: true,
         /*rotation: true,
         uvs: true,*/
         alpha: true
      });
      particleContainer.position.set(1480, 560);
      let cloudTexure = new PIXI.Texture.fromFrame('cloud.png');
      let particlesTexure = new PIXI.Texture.fromFrame('particle.png');
      let config = {
         alpha: {
            start: .41,
            end: 0
         },
         scale: {
            start: .005,
            end: .2,
            minimumScaleMultiplier: 1
         },
         color: {
            start: "#ffffff",
            end: "#ffffff"
         },
         speed: {
            start: 30,
            end: 100
         },
         acceleration: {
            x: 0,
            y: 0
         },
         startRotation: {
            min: 250,
            max: 290
         },
         noRotation: false,
         rotationSpeed: {
            min: 0,
            max: 0
         },
         lifetime: {
            min: .5,
            max: 1
         },
         blendMode: "normal",
         frequency: .001,
         emitterLifetime: -1,
         maxParticles: 20,
         pos: {
            x: 0,
            y: 0
         },
         addAtBack: true,
         spawnType: "rect",
         spawnRect: {
            x: 0,
            y: 0,
            w: 0,
            h: 0
         }
      }
      //pixi-particles:https://github.com/pixijs/pixi-particles
      let emitter = new PIXI.particles.Emitter(particleContainer, [particlesTexure, cloudTexure], config);
      emitter.emit = true;
      this.mainScene.addChild(particleContainer);

      let elapsed = Date.now();
      let ticker = new PIXI.ticker.Ticker();
      ticker.stop();
      ticker.add(() => {
         var now = Date.now();
         emitter.update((now - elapsed) * 0.001);
         elapsed = now;
      });
      ticker.start();
   }
   renderWindmill(){
      let windmillScene = new PIXI.Container();
      let windmillSprite = new PIXI.Sprite(new PIXI.Texture.from('windmill.png'));
      windmillSprite.anchor.set(0.5);
      windmillSprite.scale.set(0.666);
      windmillSprite.position.set(1140, 440);
      windmillScene.addChild(windmillSprite);
      this.mainScene.addChild(windmillScene);
      let ticker = new PIXI.ticker.Ticker();
      ticker.stop();
      ticker.add(() => {
         windmillSprite.rotation += 0.005;
      });
      ticker.start();
   }
}

new SeasonTest();