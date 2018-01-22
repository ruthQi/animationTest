
var THREE = require('libs/three.min.js');
var EffectComposer = require('libs/EffectComposer.js');
var CustomShader = require('libs/CustomShader.js');
var CopyShader = require('libs/CopyShader.js');
var ShaderPass = require('libs/ShaderPass.js');
var RenderPass = require('libs/RenderPass.js');
require('libs/hilo/hilo-standalone.js');
var $ = require('libs/jquery.js');
import {TweenLite, TimelineLite} from 'gsap';
//console.log(Hilo)
class Music{
   constructor(){
      this.imgSrc = '/images/music/';
      this.innerwidth = window.innerWidth;
      this.innerheight = window.innerHeight;
      this.dpr = 2;
      this.waterWidth = window.innerWidth;
      this.waterHeight = window.innerHeight - window.innerWidth * 175/375;
      this.sceneCommon();
      this.initGame();//创建game
      this.createAsset();//添加loading
      this.createBlockHilo();
      this.createGuide();
      this.createMan();//创建你
      this.createThreejs();
      this.createJumpFunction();
      this.createBaseFunction();
      this.createScene1();//创建场景1：寻找
      this.createScene2();
      
      Game.init();
      
   }
   initGame(){
      window.Game = {
         width: 0,
         height: 0,
         asset: null,
         stage: null,
         ticker: null,
         man: null,
         COVER_WIDTH: 4,
         tagTimeout: 0,
         oldTime: null,
         newTime: null,
         countLongPress: 0,
         collisionSet: [],
         sceneOrder: 0,
         sceneSet: [],
         isCreativeEnable: false,
         isFreeWalk: false,
         isTouchTop: false,
         isDisabled: false,
         isNoShortClick: false,
         forceMovingX: false,
         NOTICE_Y: 100,
         init: function(){
            this.asset = new Game.Assets();
            this.asset.on('complete', ()=>{
               //console.log('0000000000000000000')
               //移除监听
               this.asset.off('complete');
               this.initStage();
            }, true);
            this.asset.load();
         },
         initStage: function(){
            this.width = 750;
            this.height = 1334;
            //let scaleX = this.innerwidth/this.width, scaleY = this.innerwidth/this.height;
            this.stage = new Hilo.Stage({
               renderType: 'canvas',
               width: this.width,
               height: this.height,
               scaleX: this.scaleX,
               scaleY: this.scaleY
            });

            this.scale();

            this.ticker = new Hilo.Ticker(60);
            this.ticker.addTick(Hilo.Tween);
            this.ticker.addTick(this.stage);
            this.ticker.start(true);
            this.stage.onUpdate = this.onUpdate.bind(this);
            this.initGuide();
            bgDecration.canvasBg();
            bgDecration.transCamera();
            $('#musicView').append(this.stage.canvas);
            $(window).on('touchstart', ()=>{
               this.onUserStart();
            });
            $(window).on('touchend', ()=>{
               this.onUserEnd();
            });
         },
         scale: function(){
            this.scaleX = window.innerWidth / this.width;
            this.scaleY = this.scaleX;
            this.stage.scaleX = this.scaleX;
            this.stage.scaleY = this.scaleY;
         },
         initGuide: function(){
            //this.createGuide();
            //console.log(Guide)
            this.guide = new Guide();
            console.log(this.guide)
            this.stage.addChild(this.guide);
            this.guide.showIntro();
         },
         initMan: function(){
            this.man = new Game.Man({
               id: 'me',
               startX: 110,
               startY: 270
            });
            //addTo(x, y):x表示父容器，y表示要添加到索引的位置
            this.man.addTo(this.stage, 1);
            this.man.getReady();
            this.MIDDLE_SCENE = this.width / 2;
         },
         gameReady: function() {
            this.firstTime = 0;
            this.isReady = true;
         },
         initScene: function(x, y){
            this.scene1 = new Game.Scene1({
               id: 'scene1'
            });
            this.scene1.addTo(this.stage);
            //Game.Scene1.init();
            //console.log('=========', this.scene1.width)
            this.scene2 = new Game.Scene2({
               id: 'scene2',
               startX: 590//this.scene1.width
            });
            //this.scene2.x = this.scene1.width;
            this.scene2.addTo(this.stage);
            this.sceneSet.push(this.scene1, this.scene2);
            this.sceneOrder = 2;
         },
         onUpdate: function(){
            if(this.isReady){
               this.man.isDead && this.recoverGameRecord();
               this.getCurrentScene();
               this.clearScene();
               this.updateScene();
            }
         },
         onUserStart: function(){
            this.oldTime = new Date();
            this.tagTimeout = setTimeout(()=>{
               ++this.countLongPress;
               this.man.longPress();
            }, 200);
         },
         onUserEnd: function(){
            clearTimeout(this.tagTimeout);
            this.man.isMovingX = false;
            this.man.isLongPress = false;
            this.newTime = new Date();
            if(this.newTime - this.oldTime < 200){
               this.man.shortTouch(this.oldTime);
            } 
            this.oldTime = this.newTime;
            return false;
         },
         recoverGameRecord: function(){
            //console.log('iiiiiiii5')
         },
         getCurrentScene: function(){
            //console.log('iiiiiiii6')
            if (this.sceneSet) {
               var scene1 = this.sceneSet[0],
                  scene2 = this.sceneSet[1],
                  manX = this.man.x;
               if(scene1 && scene2){
                  if(manX >= scene1.x && manX < scene1.x + scene1.width){
                     this.currentScene = scene1.id;
                  }else{
                     this.currentScene = scene2.id;
                  }
               }
               return this.currentScene;
            }
         },
         clearScene: function(){
            //console.log('iiiiiiii7')
            var sceneSet = this.sceneSet;
            if(sceneSet && sceneSet.length >=2 && (!sceneSet[1] || 'scene11' != sceneSet[1].id)){
               let sceneid;
               for(var i = 1; i <= 11; i++){
                  sceneid = 'scene' + i;
                  if(this[sceneid] && this[sceneid].x <= -this[sceneid].width){
                     this[sceneid].dispose();
                     this.stage.removeChildById(sceneid);
                     sceneSet.splice(0, 1);
                     this.sceneOrder++;
                     this[sceneid] = null
                  }
               }
            }
         },
         updateScene: function(){
            //console.log('iiiiiiii8')
            let sceneSet = this.sceneSet;
            if(sceneSet && sceneSet.length < 2){
               if(Game['Scene' + this.sceneOrder]){
                  this['scene'+this.sceneOrder] = new Game['Scene' + this.sceneOrder]({
                     id: 'scene'+this.sceneOrder,
                     startX: sceneSet[0].x +sceneSet[0].width
                  }).addTo(this.stage);
                  this.sceneSet.push(this['scene'+this.sceneOrder]);
               } 
            }
         }
      }
   }
   sceneCommon(){
      window.sceneCommon = Hilo.Class.create({
         Extends: Hilo.Container,
         constructor: function(t) {
            sceneCommon.superclass.constructor.apply(this);
            //console.log('=========',t)
            this.width = t.width || 750;
            this.height = t.height || 1334;
            this.initScenePos(t.startX, t.startY);//this.init(t)
            this.init(t);
            setTimeout(()=>{
               this.shortcut();
            }, 200)
         },
         shortcut: function() {},
         onRecoverCurrent: function(t, e) {},
         onRecoverNext: function(t, e) {
            this.x = t.x + t.width
         },
         init: function(t) {
            throw new Error('å­ç±»å®žçŽ°ï¼Œåˆ›å»ºä¸€äº›åœºæ™¯ä¸­éœ€è¦çš„å¯¹è±¡')
         },
         dispose: function() {
            this.clearCollisionSet()
         },
         initScenePos: function(t, e) {
            this.x = t || 0;
            this.y = e || 0;
            //console.log(this.x)
         },
         clearCollisionSet: function() {
            Game.collisionSet = Game.collisionSet.filter((e) => {
               return -1 === this.children.indexOf(e)
            })
         },
         onUpdate: function(t) {
            var man = Game.man;
            this.updateJumpPoint();
            if((Game.forceMovingX || man.isMovingX && !Game.isDisabled) && man.x >= man.MIDDLE_SCENE && !Game.isFreeWalk){
               console.log('----------------**********************', man.stepLength);
               this.x -= man.stepLength;
            }
         },
         updateJumpPoint: function() {},
         isOnBlock: function(t) {
            var man = Game.man, i = baseFunction.offset(t);
            return man.y + man.height - man.manBottom.height == i.y && man.x >= i.x - man.width && man.x <= i.x + t.width
         },
         calcBlockDistanceY: function(t) {
            //console.log('############', this.x + t.x + t.width - Game.man.x);
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            //console.log('##################', t, this)
            //console.log(this.x , t.x , t.width ,Game.man.x);
            return Game.man.updateJumpPoint(this.x + t.x + t.width - Game.man.x + e);
         },
      })
   }
   createScene1(){
      Game.Scene1 = Hilo.Class.create({
         Extends: sceneCommon,
         constructor: function(t){
            console.log('==================================')
            Game.width = 590;
            console.log(Game.width)
            Game.Scene1.superclass.constructor.call(this, t);
            //this.init();
         },
         init: function(){
            this.xunzhao = new Hilo.Bitmap(Object.assign({}, {x:60, y: 440}, {
               alpha: 0,
               image: Game.asset.xunzhao
            }));
            console.log(this.xunzhao)
            this.addChild(this.xunzhao);
            this.block1 = new blockHilo({
               id: 'xunzhao_block_1',
               x: this.xunzhao.x,
               y: this.xunzhao.y + 4,
               width: this.xunzhao.width
            });
            this.addChild(this.block1);
            this.block2 = new blockHilo({
               x: this.xunzhao.x + this.xunzhao.width - 100,
               y: this.xunzhao.y + 4,
               width: 100
            });
            this.addChild(this.block2);
            this.block3 = new blockHilo({
               x: this.xunzhao.x + this.xunzhao.width - 20,
               y: this.xunzhao.y + 3,
               width: 10,
               height: 10
            });
            this.addChild(this.block3);
            this.sign = new MovingSign({
               x: this.block1.x + 80,
               y: this.block1.y - 34
            });
            this.guide_jump = new Hilo.Bitmap({
               x: this.xunzhao.x + 500,
               y: this.xunzhao.y - 150,
               image: Game.asset.guide_jump_static
            });
            Game.collisionSet.push(this.block1, this.block2, this.block3)
            this.dropDown();
         },
         dropDown: function(){
            this.isDisabled = true;
            var obj = {
               y: Game.man.y,
               o: 0
            },
            man = Game.man;
            man.alpha = 0;
            let timeLite = new TimelineLite();
            timeLite.to(obj, 0.2, {
               delay: 1,
               o: 1,
               y: this.block1.y - man.height + man.manBottom.height,
               onUpdate: () => {
                  man.y = obj.y, man.alpha = obj.o, this.xunzhao.alpha = obj.o
               },
               onComplete: () => {
                  this.isDisabled = false;
                  this.isNoShortClick = true; //n.showTip1(), t.guide.zoom(0)
                  this.showTip1();
                  Game.guide.zoom(0);
               }
            })
         },
         /*updateJumpPoint: function() {
            if(this.isOnBlock(this.block1)){
               this.calcBlockDistanceY(this.block1, -30);
            }
         },*/
         showTip1: function(){
            if(!this.isShowTip1){
               this.isShowTip1 = true, this.addChild(this.sign)
            }
         },
         hideTip1: function() {
            Game.isNoShortClick = false;
            Game.man.clickCount = 0;
         },
         showTip2: function() {
            if(!this.isShowTip2){
               this.isShowTip2 = true;
               this.hideTip1();
               this.addChild(this.guide_jump);
            }
         },
         hideTip2: function() {
            if (!this.isHideTip2) {
               this.isHideTip2 = true;
               var obj = {
                  o: 1
               };
               let timeLite = new TimelineLite();
               timeLite.to(obj, 0.2, {
                  o: 0,
                  onUpdate: () => {
                     this.guide_jump.alpha = obj.o
                  },
                  onComplete: () => {
                     this.removeChild(this.guide_jump);
                     Game.guide.switchToBoth();
                     Game.guide.removeNewGuide();
                  },
                  ease: Power1.easeIn
               })
            }
         },
         onUpdate: function(){
            //console.log('wwwwwwwwwwwwwwwwwwwwwwww')
            Game.Scene1.superclass.onUpdate.apply(this)
            this.isShowTip1 && this.sign.updateWidth(this.x);
            console.log('------------+++++++++++', this.x);
            if(this.isOnBlock(this.block2)){
               this.showTip2();
               Game.guide.stopZoomPress();
               Game.guide.zoom(1);
            }
            if(Game.man.isMovingY){
               this.hideTip2(); 
               Game.guide.stopZoomClick();
            }
         }
      })
   }
   createScene2(){
      Game.Scene2 = Hilo.Class.create({
         Extends: sceneCommon,
         constructor: function(t){
            Game.width = 780;
            Game.Scene2.superclass.constructor.call(this, t);
         },
         init: function(){
            let changeObj = {
               x: 0,
               y: 365
            },
            obj = {
               width: 157,
               height: 95
            };
            this.mengxiang1 = new Hilo.Sprite(Object.assign({}, changeObj, {
               paused: true,
               loop: false,
               frames: Game.asset.mengxiang_text.getFrame(0)
            }));
            this.addChild(this.mengxiang1);
            this.mengxiang_fly_1 = new Hilo.Sprite({
               x: this.mengxiang1.x + 150,
               y: this.mengxiang1.y - 100,
               interval: 1.5,
               paused: true,
               loop: true,
               frames: Game.asset.mengxiang_fly_1.getSprite('xxx')
            });
            this.block1 = new blockHilo({
               id: 'mengxiang_block_1',
               x: this.mengxiang1.x + 145,
               y: this.mengxiang1.y + 80,
               width: 160
            });
            this.addChild(this.block1);
            changeObj.x += 170 + obj.width;

            this.mengxiang2 = new Hilo.Sprite(Object.assign({}, changeObj, {
               paused: true,
               loop: false,
               frames: Game.asset.mengxiang_text.getFrame(0)
            }));
            this.addChild(this.mengxiang2);
            this.mengxiang_fly_2 = new Hilo.Sprite({
               x: this.mengxiang2.x + 150,
               y: this.mengxiang2.y - 100,
               interval: 1.5,
               paused: true,
               loop: true,
               frames: Game.asset.mengxiang_fly_2.getSprite('xxx')
            });
            this.block2 = new blockHilo({
               x: this.mengxiang2.x + 145,
               y: this.mengxiang2.y + 80,
               width: 160
            });
            this.addChild(this.block2)
            changeObj.x += 170 + obj.width;
            this.mengxiang3 = new Hilo.Sprite(Object.assign({}, changeObj, {
               paused: true,
               loop: false,
               frames: Game.asset.mengxiang_text.getSprite('xxx')
            }));
            this.addChild(this.mengxiang3);
            this.mengxiang_fly_3 = new Hilo.Sprite({
               x: this.mengxiang3.x + 150,
               y: this.mengxiang3.y - 100,
               interval: 1.5,
               paused: true,
               loop: true,
               frames: Game.asset.mengxiang_fly_3.getSprite('xxx')
            });
            this.block3 = new blockHilo({
               x: this.mengxiang3.x + 145,
               y: this.mengxiang3.y + 80,
               width: 160
            });
            this.addChild(this.block3);
            this.xxx_2 = new Hilo.Bitmap({
               x: this.mengxiang2.x,
               y: Game.NOTICE_Y,
               alpha: 1,
               image: Game.asset.xxx_2
            });
            Game.collisionSet.push(this.block1, this.block2, this.block3);
         },
         onUpdate: function(){
            console.log('------------+++++++++++', this.x);
            let man = Game.man;
            if(!this.isFalling){
               if(!this.isShattered && man.x >= this.x + this.block3.x + 68){
                  Game.isDisabled = true;
               }
            }
            Game.Scene2.superclass.onUpdate.apply(this);
            if(!this.isShattered){
               if(man.isMovingY){
                  this.hideMengxiangFly1();
                  this.hideMengxiangFly2();
               }
               if(this.isOnBlock(this.block3)){
                  if(!this.isRaining){
                     this.isRaining = true;
                     setTimeout(()=>{
                        console.log('rain')
                     }, 150)
                  }
               }
               this.showMengxiangFly3();
               this.fall();
            }

         },
         updateJumpPoint: function(){
            if(this.isOnBlock(this.block1)){
               this.calcBlockDistanceY(this.block1);
               this.showMengxiangFly1();
               Game.guide.hideIntro();
            }
         },
         fall: function(){

         },
         showMengxiangFly1: function(){
            if(!this.isMengxiangFly1){
               this.isMengxiangFly1 = true;
               this.addChild(this.mengxiang_fly_1);
               this.mengxiang_fly_1.play();
            }
         },
         hideMengxiangFly1: function(){

         },
         showMengxiangFly2: function(){

         },
         hideMengxiangFly2: function(){

         },
         showMengxiangFly3: function(){

         },
         hideMengxiangFly3: function(){

         },
      })
   }
   createBaseFunction(){
      window.baseFunction = {
         offset: function(obj){
            //console.log('%%%%%%%%%%%%%%%%%%',obj)
            if (!obj.parent) return {
               x: 0,
               y: 0
            };
            var newObj = baseFunction.offset(obj.parent);
            return {
               x: obj.x + newObj.x,
               y: obj.y + newObj.y
            }
         }
      }
   }
   createBlockHilo(){
      window.blockHilo = Hilo.Class.create({
         Extends: Hilo.Bitmap,
         constructor: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t.width = t.width || 100;
            t.height = t.height || 150;
            t.image = Game.asset.block;
            blockHilo.superclass.constructor.call(this, t);
         }
      });
   }
   createThreejs(){
      window.bgDecration = {
         imgSrc: '/images/music/',
         canvasBg: function(){
            var width = window.innerWidth, height = window.innerHeight;
            this.camera = new THREE.PerspectiveCamera(90, width / height, .01, 1e3);
            this.renderer = new THREE.WebGLRenderer({
               alpha: true,
               antialias: true
            });
            this.renderer.setSize(width, height);
            this.renderer.setPixelRatio(2);
            this.initScene();
            //console.log()
            this.animate();
            this.addPostEffect();
            this.addEvent();
            $('#musicViewBack').append(this.renderer.domElement);
         },
         initScene: function(){
            this.scene = new THREE.Scene;
            this.scene.background = new THREE.Color(2499121);
            var gameBg = (new THREE.TextureLoader).load(this.imgSrc+'game-bg.jpg');
            THREE.ImageUtils.crossOrigin = '';
            gameBg.wrapS = THREE.RepeatWrapping;
            gameBg.wrapT = THREE.MirroredRepeatWrapping;
            this.scene.background = gameBg;
            this.initParticles();
         },
         addPostEffect: function(){
            var width = window.innerWidth,
                height = window.innerHeight;
                //console.log(this.renderer)
               this.composer = new THREE.EffectComposer(this.renderer);
               this.composer.addPass(new THREE.RenderPass(this.scene, this.camera));
               this.composer.setSize(width * 2, height * 2);
               this.copyPass = new THREE.ShaderPass(THREE.CopyShader);
               this.copyPass.renderToScreen  = true;
               this.distortPass = new THREE.ShaderPass( THREE.CustomShader );
               console.log(this.distortPass)
               this.distortPass.enabled = true;
               this.distortPass.amp = 0;
               this.distortPass.targetAmp = 0;
               this.distortPass.lerpUpWeight = .15;
               this.distortPass.lerpDownWeight = .3;
               this.distortPass.time = 0;
               this.distortPass.updateUniforms = function(){
                  //console.log(this.targetAmp, this.amp)
                  var t = this.targetAmp - this.amp;
                  this.amp += t * (t > 0 ? this.lerpUpWeight : this.lerpDownWeight);
                  this.uniforms.u_amp.value = this.amp;
               };
               this.distortPass.renderToScreen = true;
               this.distortPass.uniforms.u_aspect.value = height / width;
               this.composer.addPass(this.copyPass);
               this.composer.addPass(this.distortPass);
               this.distortInterval = setInterval(() => {
                  this.distortPass.updateUniforms()
               }, 1e3 / 24)
         },
         addEvent: function(){
            $(window).on('touchstart', ()=>{
               this.animateDistort();
            });
            $(window).on('touchmove', (e)=>{
               var width = window.innerWidth,
                  height = window.innerHeight;
               e.touches && e.touches.length > 0 ? this.distortPass.uniforms.u_mouse.value.set(e.touches[0].pageX / width, 1 - e.touches[0].pageY / height) : this.distortPass.uniforms.u_mouse.value.set(e.pageX / width, 1 - e.pageY / height);
            });
            $(window).on('touchend', ()=>{
               this.disdortTimer = cancelAnimationFrame(this.disdortTimer);
               this.distortPass.targetAmp = 0;
            })
         },
         animateDistort: function(){
            this.disdortTimer && cancelAnimationFrame(this.disdortTimer);
            this.disdortTimer = requestAnimationFrame(()=>{this.animateDistort()});
            this.distortPass.uniforms.u_time.value = ++this.distortPass.time / 100;
            this.distortPass.targetAmp += .2;
            this.distortPass.targetAmp = Math.min(.8, this.distortPass.targetAmp);
         },
         initParticles: function(){
            var width = window.innerWidth, height = window.innerHeight, material, geometry;
            this.points = [];
            for (var i = 0; i < 3; ++i) {
               material = new THREE.PointsMaterial({
                  color: 15856371,
                  size: 2,
                  transparent: true,
                  opacity: 1
               });
               geometry = new THREE.Geometry;
               for(var j = 0; j< 80; ++j){
                  let x = Math.random() * width * 2 - width,
                      y = Math.random() * height * 2 - height,
                      z = 400 * Math.random();
                  geometry.vertices.push(new THREE.Vector3(x, y, z));
               }
               let obj = new THREE.Points(geometry, material);
               this.scene.add(obj);
               this.points.push(obj);
               obj.position.x = width * i;
            }
            material = new THREE.PointsMaterial({
               color: 15856371,
               size: 2,
               transparent: true,
               opacity: 0.7
            });
            geometry = new THREE.Geometry;
            for(var i = 0; i < 150; i++){
               let x = Math.random() * width * 2 - width,
                   y = Math.random() * height * 2 - height,
                   z = 450;
               geometry.vertices.push(new THREE.Vector3(x, y, z));
            }
            let obj1 = new THREE.Points(geometry, material);
            this.scene.add(obj1);
            this.points.push(obj1);
            obj1.position.x = width;
            this.bigPoints = obj1;
         },
         transCamera: function(){
            let timeLite = new TimelineLite();
            let obj = {
               z: 400,
               o: 1
            }
            timeLite.to(obj, 5, {
               z: 700,
               o: .5,
               onUpdate: () => {
                  this.camera.position.z = obj.z;
                  this.points[0].material.opacity = obj.o;
                  this.points[1].material.opacity = obj.o;
                  this.points[2].material.opacity = obj.o;
               },
               onComplete: () => {
                  this.isMoveLeft = true;//i()
               },
               ease: Power2.easeInOut
            })
         },
         animate: function(){
            this.animateId = requestAnimationFrame(this.animate.bind(this));
            var width = 1.5 * window.innerWidth,
                height = 1.5 * window.innerHeight;
            if(this.points){
               if(this.isMoveLeft){
                  this.points[0].position.x -= 1;
                  this.points[1].position.x -= 1;
                  this.bigPoints.position.x -= .15;
                  this.points[0].position.x < -width && (this.points[0].position.x = width);
                  this.points[1].position.x < -width && (this.points[1].position.x = width);
                  this.bigPoints.position.x < -width && (this.bigPoints.position.x = width);
               }else{
                  if(this.isMoveDown){
                     this.points[0].position.y -= 1;
                     this.points[1].position.y -= 1;
                     this.points[2].position.y -= 1;
                     this.points[0].position.y < -height && (this.points[0].position.y = height);
                     this.points[1].position.y < -height && (this.points[1].position.y = height);
                     this.points[2].position.y < -height && (this.points[2].position.y = height);
                  }
               }
               this.renderer.render(this.scene, this.camera);
            }
         }
      }
   }
   createAsset(){
      Game.Assets = Hilo.Class.create({
         Mixes: Hilo.EventMixin,
         imgSrc: '/images/music/',
         load: function(){
            var array = [
               {'id':'block', src: this.imgSrc+'block-1.png'},
               {'id':'man', src: this.imgSrc+'man.png'},
               {'id':'xunzhao', src: this.imgSrc+'xunzhao.png'},
               {'id':'guide-move-static', src: this.imgSrc+'guide-move-static.png'},
               {'id':'guide-jump', src: this.imgSrc+'guide-jump.png'},
               {'id':'guide-jump-static', src: this.imgSrc+'guide-jump-static.png'},
               {'id':'guide-blink', src: this.imgSrc+'guide-blink.png'},
               {'id':'guide', src: this.imgSrc+'guide.png'},
               {'id':'guide-new', src: this.imgSrc+'guide-new.png'},
               {'id':'intro', src: this.imgSrc+'intro.png'},
               {'id':'xxx-1', src: this.imgSrc+'xxx-1.png'},
               {'id':'xxx-2', src: this.imgSrc+'xxx-2.png'},
               {'id':'xxx-3', src: this.imgSrc+'xxx-3.png'},
               {'id':'mengxiang-text', src: this.imgSrc+'mengxiang-text.png'},
               {'id':'mengxiang-fly-1', src: this.imgSrc+'mengxiang-fly-1.png'},
               {'id':'mengxiang-fly-2', src: this.imgSrc+'mengxiang-fly-2.png'},
               {'id':'mengxiang-fly-3', src: this.imgSrc+'mengxiang-fly-3.png'},
               {'id':'daji-static', src: this.imgSrc+'daji-static.png'},
               {'id':'daji-0', src: this.imgSrc+'daji-0.png'},
               {'id':'daji-1', src: this.imgSrc+'daji-1.png'},
               {'id':'tongku', src: this.imgSrc+'tongku.png'},
               {'id':'sikao-repeat', src: this.imgSrc+'sikao-repeat.png'},
               {'id':'sikao-trans', src: this.imgSrc+'sikao-trans.png'},
               {'id':'chengzhang-text-0', src: this.imgSrc+'chengzhang-text-0.png'},
               {'id':'chengzhang-text-1', src: this.imgSrc+'chengzhang-text-1.png'},
               {'id':'chengzhang-before-0', src: this.imgSrc+'chengzhang-before-0.png'},
               {'id':'chengzhang-before-1', src: this.imgSrc+'chengzhang-before-1.png'},
               {'id':'chengzhang-before-2', src: this.imgSrc+'chengzhang-before-2.png'},
               {'id':'chengzhang-before-3', src: this.imgSrc+'chengzhang-before-3.png'},
               {'id':'chengzhang-after-0', src: this.imgSrc+'chengzhang-after-0.png'},
               {'id':'chengzhang-after-1', src: this.imgSrc+'chengzhang-after-1.png'},
               {'id':'chengzhang-after-2', src: this.imgSrc+'chengzhang-after-2.png'},
               {'id':'chengzhang-after-3', src: this.imgSrc+'chengzhang-after-3.png'},
               {'id':'gudu-text-0', src: this.imgSrc+'gudu-text-0.png'},
               {'id':'gudu-text-1', src: this.imgSrc+'gudu-text-1.png'},
               {'id':'gudu-text-2', src: this.imgSrc+'gudu-text-2.png'},
               {'id':'gudu-repeat', src: this.imgSrc+'gudu-repeat.png'},
               {'id':'gudu-bihua', src: this.imgSrc+'gudu-bihua.png'},
               {'id':'gudu-static', src: this.imgSrc+'gudu-static.png'},
               {'id':'peiban-star', src: this.imgSrc+'peiban-star.png'},
               {'id':'peiban-text', src: this.imgSrc+'peiban-text.png'},
               {'id':'peiban-trans-0', src: this.imgSrc+'peiban-trans-0.png'},
               {'id':'peiban-trans-1', src: this.imgSrc+'peiban-trans-1.png'},
               {'id':'peiban-repeat-0', src: this.imgSrc+'peiban-repeat-0.png'},
               {'id':'peiban-repeat-1', src: this.imgSrc+'peiban-repeat-1.png'},
               {'id':'ai-static', src: this.imgSrc+'ai-static.png'},
               {'id':'ai-repeat-0', src: this.imgSrc+'ai-repeat-0.png'},
               {'id':'ai-repeat-1', src: this.imgSrc+'ai-repeat-1.png'},
               {'id':'xingfu-text', src: this.imgSrc+'xingfu-text.png'},
               {'id':'xing-repeat', src: this.imgSrc+'xing-repeat.png'},
               {'id':'fu-repeat', src: this.imgSrc+'fu-repeat.png'},
               {'id':'guide-s7', src: this.imgSrc+'guide-s7.png'},
               {'id':'chuangyi', src: this.imgSrc+'chuangyi.png'},
               {'id':'tuoyan', src: this.imgSrc+'tuoyan.png'},
               {'id':'nuli', src: this.imgSrc+'nuli.png'},
               {'id':'nuli-v2', src: this.imgSrc+'nuli-v2.png'},
               {'id':'ni-copy', src: this.imgSrc+'ni-rotation.png'},
               {'id':'guide-right', src: this.imgSrc+'guide-right.png'},
               {'id':'guide-top', src: this.imgSrc+'guide-top.png'},
               {'id':'guide-long', src: this.imgSrc+'guide-long.png'},
               {'id':'jianchi', src: this.imgSrc+'jianchi.png'},
               {'id':'mengxiang-end-trans', src: this.imgSrc+'mengxiang-end-trans.png'},
               {'id':'mengxiang-end-repeat', src: this.imgSrc+'mengxiang-end-repeat.png'},
               {'id':'man-colors', src: this.imgSrc+'man-colors.png'}
            ];
            this.queue = new Hilo.LoadQueue;
            this.queue.add(array);
            this.queue.on('complete', ()=>{
               Game.asset.onComplete();
            });
            this.queue.start();
            var progress = 0;
            //console.log(this)
            this.clock = setInterval(()=>{
               let num = this.queue.getLoaded() / this.queue.getTotal();
               progress = 100 * num.toFixed(2) >> 0;
               //console.log(progress)
               $('.splash-percentage').html(progress);
               progress == 100 && Game.asset.hideLoading();
            }, 20);
         },
         onComplete: function(){
            //alert('000000000')
            this.block = this.queue.get('block').content;
            this.intro = this.queue.get('intro').content;
            this.man = this.queue.get('man').content;
            this.xunzhao = this.queue.get('xunzhao').content;
            this.guide_jump_static = this.queue.get('guide-jump-static').content;
            this.guide_move_static = this.queue.get('guide-move-static').content;
            this.xxx_1 = this.queue.get('xxx-1').content;
            this.xxx_2 = this.queue.get('xxx-2').content;
            this.xxx_3 = this.queue.get('xxx-3').content;
            this.guide = new Hilo.TextureAtlas({
               image: this.queue.get('guide').content,
               frames: [
                  [2, 84, 395, 39],
                  [2, 43, 395, 39],
                  [2, 2, 395, 39]
               ]
            });
            this.guide_new = new Hilo.TextureAtlas({
               image: this.queue.get('guide-new').content,
               frames: [
                  [0, 0, 418, 81],
                  [0, 81, 418, 81],
                  [0, 162, 418, 81]
               ]
            });
            this.mengxiang_text = new Hilo.TextureAtlas({
               image: this.queue.get('mengxiang-text').content,
               frames: [
                  [1352, 1460, 448, 241],
                  [902, 1703, 448, 241],
                  [902, 1460, 448, 241],
                  [1352, 1217, 448, 241],
                  [902, 1217, 448, 241],
                  [1352, 974, 448, 241],
                  [902, 974, 448, 241],
                  [452, 1703, 448, 241],
                  [452, 1460, 448, 241],
                  [452, 1217, 448, 241],
                  [452, 974, 448, 241],
                  [1352, 731, 448, 241],
                  [902, 731, 448, 241],
                  [452, 731, 448, 241],
                  [1352, 488, 448, 241],
                  [902, 488, 448, 241],
                  [452, 488, 448, 241],
                  [2, 1703, 448, 241],
                  [2, 1460, 448, 241],
                  [2, 1217, 448, 241],
                  [2, 974, 448, 241],
                  [2, 731, 448, 241],
                  [2, 488, 448, 241],
                  [1352, 245, 448, 241],
                  [902, 245, 448, 241],
                  [452, 245, 448, 241],
                  [2, 245, 448, 241],
                  [1352, 2, 448, 241],
                  [902, 2, 448, 241],
                  [452, 2, 448, 241],
                  [2, 2, 448, 241]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
               }
            });
            this.mengxiang_fly_1 = new Hilo.TextureAtlas({
               image: this.queue.get('mengxiang-fly-1').content,
               frames: [
                  [461, 412, 151, 203],
                  [767, 207, 151, 203],
                  [614, 207, 151, 203],
                  [461, 207, 151, 203],
                  [308, 617, 151, 203],
                  [308, 412, 151, 203],
                  [308, 207, 151, 203],
                  [155, 617, 151, 203],
                  [155, 412, 151, 203],
                  [155, 207, 151, 203],
                  [767, 2, 151, 203],
                  [614, 2, 151, 203],
                  [461, 2, 151, 203],
                  [308, 2, 151, 203],
                  [155, 2, 151, 203],
                  [2, 617, 151, 203],
                  [2, 412, 151, 203],
                  [2, 207, 151, 203],
                  [2, 2, 151, 203]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
               }
            }), 
            this.mengxiang_fly_2 = new Hilo.TextureAtlas({
               image: this.queue.get('mengxiang-fly-2').content,
               frames: [
                  [461, 412, 151, 203],
                  [767, 207, 151, 203],
                  [614, 207, 151, 203],
                  [461, 207, 151, 203],
                  [308, 617, 151, 203],
                  [308, 412, 151, 203],
                  [308, 207, 151, 203],
                  [155, 617, 151, 203],
                  [155, 412, 151, 203],
                  [155, 207, 151, 203],
                  [767, 2, 151, 203],
                  [614, 2, 151, 203],
                  [461, 2, 151, 203],
                  [308, 2, 151, 203],
                  [155, 2, 151, 203],
                  [2, 617, 151, 203],
                  [2, 412, 151, 203],
                  [2, 207, 151, 203],
                  [2, 2, 151, 203]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
               }
            }), 
            this.mengxiang_fly_3 = new Hilo.TextureAtlas({
               image: this.queue.get('mengxiang-fly-3').content,
               frames: [
                  [461, 412, 151, 203],
                  [767, 207, 151, 203],
                  [614, 207, 151, 203],
                  [461, 207, 151, 203],
                  [308, 617, 151, 203],
                  [308, 412, 151, 203],
                  [308, 207, 151, 203],
                  [155, 617, 151, 203],
                  [155, 412, 151, 203],
                  [155, 207, 151, 203],
                  [767, 2, 151, 203],
                  [614, 2, 151, 203],
                  [461, 2, 151, 203],
                  [308, 2, 151, 203],
                  [155, 2, 151, 203],
                  [2, 617, 151, 203],
                  [2, 412, 151, 203],
                  [2, 207, 151, 203],
                  [2, 2, 151, 203]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
               }
            })
            this.queue.off('complete');
            Game.asset.fire('complete');
         },
         hideLoading: function(){
            clearInterval(this.clock);
            $('.splash-percentage').html(100);
            setTimeout(()=>{
               $('#loading').hide();
            }, 250)
         }
         
      })
   }
   createGuide(){
      var operation = {
         BOTH: 0,
         CLICK: 1,
         PRESS: 2
      };
      window.MovingSign = Hilo.Class.create({
         Extends: Hilo.Container,
         constructor: function(){
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            MovingSign.superclass.constructor.call(this, t);
            this.guide_move_static = new Hilo.Bitmap({
               x: 0,
               y: 0,
               image: Game.asset.guide_move_static
            });
            this.guide_move_mask = new Hilo.View({
               x: this.guide_move_static.x - 30,
               y: this.guide_move_static.y + 14,
               width: t.width || 0,
               height: 5,
               background: '#262231'
            });
            this.addChild(this.guide_move_static);
            this.addChild(this.guide_move_mask);
         },
         updateWidth: function(t){
            //console.log('===========',t)
            var width = Game.man.x + Game.man.manLeft.width - (t + this.x - 37);
            width >= this.guide_move_static.width - 70 ? this.visible = false : this.guide_move_mask.width = width;
         }
      })
      //使用一下方式，new出来的对象为正确的，如果方法内使用箭头函数，new出来的对象有问题，不能添加到stage中
      window.Guide = Hilo.Class.create({
         Extends: Hilo.Container,
         constructor: function(){
            Guide.superclass.constructor.call(this);
            var notLength = Game.NOTICE_Y = 100;
            this.guide_both = new Hilo.Sprite({
               y: notLength,
               frames: Game.asset.guide.getFrame(0),
               alpha: 0
            });
            this.guide_both.x = (Game.width - this.guide_both.width) / 2;
            //this.addChild(this.guide_both);

            this.guide_click = new Hilo.Sprite({
               y: notLength,
               frames: Game.asset.guide.getFrame(1),
               alpha: 0,
               paused: true,
               loop: false
            });
            this.guide_click.x = (Game.width - this.guide_click.width) / 2;
            //this.addChild(this.guide_click);

            this.guide_press = new Hilo.Sprite({
               y: notLength,
               frames: Game.asset.guide.getFrame(2),
               alpha: 0,
               paused: true,
               loop: false
            });
            this.guide_press.x = (Game.width - this.guide_press.width) / 2;
            //this.addChild(this.guide_press);

            this.guide_both_new = new Hilo.Sprite({
               y: notLength,
               frames: Game.asset.guide_new.getFrame(0),
               alpha: 0
            });
            this.guide_both_new.x = (Game.width - this.guide_both_new.width) / 2;
            //this.addChild(this.guide_both);

            this.guide_click_new = new Hilo.Sprite({
               y: notLength,
               frames: Game.asset.guide_new.getFrame(1),
               alpha: 0
            });
            this.guide_click_new.x = (Game.width - this.guide_click_new.width) / 2;
            //this.addChild(this.guide_click);

            this.guide_press_new = new Hilo.Sprite({
               y: notLength,
               frames: Game.asset.guide_new.getFrame(2),
               alpha: 0
            });
            this.guide_press_new.x = (Game.width - this.guide_press_new.width) / 2;
            this.addChild(this.guide_both_new, this.guide_click_new, this.guide_press_new);
            this.intro = new Hilo.Bitmap({
               image: Game.asset.intro
            });
            this.intro.x = (Game.width - this.intro.width) / 2;
            this.intro.y = (Game.height - this.intro.height - 300) / 2;
            this.fullOpacity = 1;
            this.addChild(this.guide_both, this.guide_click, this.guide_press);
         },
         showIntro: function(){
            this.addChild(this.intro);
            var t = {
               y: this.intro.y
            }
            let timeLite = new TimelineLite();
            timeLite.to(t, 1, {
               y: 450,
               delay: 4,
               onUpdate: () => {
                  this.intro.y = t.y
               },
               onComplete: () => {
                  Game.initMan();
                  Game.gameReady();
                  Game.initScene(1, 2);
               }
            })
         },
         hideIntro: function(){
            if(!this.isHideIntro){
               this.isHideIntro = true;
               this.removeChild(this.intro);
            }
         },
         zoom: function(num){
            if(!(this.isTag0 && num == 0 || this.isTag1 && num == 1)){
               let curObj = null;
               if(num == 0){
                  this.toggle2Press();
                  curObj = this.guide_press_new;
                  this.isTag0 = true;
               }else{
                  this.toggle2Click();
                  curObj = this.guide_click_new;
                  this.isTag1 = true;
               }
               this.zoomtl = new TimelineLite({
                  repeat: 1,
                  yoyo: true
               });
               this.zoomtl.to(curObj, .3, {
                  scaleX: 1.02,
                  scaleY: 1.02
               }).to(curObj, .3, {
                  scaleX: 1,
                  scaleY: 1
               });
            }
            
         },
         toggle2Press: function(){
            if(this.currentGuide != operation.PRESS){
               this.currentGuide = operation.PRESS;
               this.guide_both_new.alpha = 0;
               this.guide_click_new.alpha = 0;
               this.guide_press_new.alpha = this.fullOpacity;
            }
         },
         toggle2Click: function(){
            if(this.currentGuide != operation.CLICK){
               this.currentGuide = operation.CLICK;
               this.guide_both_new.alpha = 0;
               this.guide_click_new.alpha = this.fullOpacity;
               this.guide_press_new.alpha = 0;
            }
         },
         toggle2Both: function(t) {
            if(this.currentGuide != operation.BOTH || t){
               this.currentGuide = operation.BOTH;
               TweenLite.to([this.guide_press_new, this.guide_click_new], 0.2, {
                  alpha: 0
               });
               TweenLite.to(this.guide_both_new, .5, {
                  alpha: this.fullOpacity,
                  delay: 0
               })
            }
         },
         stopZoomPress: function(){
            if(!this.isStopZoomPress){
               this.isStopZoomPress = true;
               this.zoomtl && this.zoomtl.kill();
               this.guide_press_new.alpha = 0;
            }
         },
         stopZoomClick: function(){
            if(!this.isStopZoomClick){
               this.isStopZoomClick = true;
               this.zoomtl && this.zoomtl.kill();
               this.guide_click_new.alpha = 0;
            }
         },
         switchToClick: function() {
            if(this.currentGuide != operation.CLICK){
               this.currentGuide = operation.CLICK;
               this.guide_both.alpha = 0;
               this.guide_press.alpha = 0;
               this.guide_click.alpha = this.fullOpacity;
            }
         },
         switchToPress: function() {
            if(this.currentGuide != operation.PRESS){
               this.currentGuide = operation.PRESS;
               this.guide_both.alpha = 0;
               this.guide_click.alpha = 0;
               this.guide_press.alpha = this.fullOpacity;
            }
         },
         switchToBoth: function(t){
            if(this.currentGuide != operation.BOTH || t){
               this.currentGuide = operation.BOTH;
               TweenLite.to([this.guide_press, this.guide_click], 0.2, {
                  alpha: 0
               });
               TweenLite.to(this.guide_both, 0.5, {
                  alpha: this.fullOpacity,
                  delay: 0
               })
            }
         },
         removeNewGuide: function() {
            this.removeChild(this.guide_press_new);
            this.removeChild(this.guide_both_new);
            this.removeChild(this.guide_click_new);
         },
      })
   }
   createMan(){
      Game.Man = Hilo.Class.create({
         Extends: Hilo.Container,
         constructor: function(config){
            Game.Man.superclass.constructor.call(this, config);
            this.gravity = .003;
            this.updateJumpPoint(0);
            this.initStepLength = 5;
            this.init(config);
            this.MIDDLE_SCENE = (Game.width - this.man.width) / 2;
            console.log(Game.width, this.man.width);
         },
         startX: 0,
         startY: 0,
         jumpHeight: 0,
         manTop: null,
         manRight: null,
         manBottom: null,
         manLeft: null,
         man: null,
         init: function(config){
            var width = Game.COVER_WIDTH;
            this.man = new Hilo.Bitmap({
               id: 'man',
               x: width,
               y: width,
               image: Game.asset.man
            });
            this.manTop = new Hilo.View({
               id: 'manTop',
               x: width,
               y: 0,
               width: this.man.width,
               height: width,
               background: '#ccc',
               visible: false
            });
            this.manRight = new Hilo.View({
               id: 'manRight',
               x: this.man.width + width,
               y: width,
               width: width,
               height: this.man.height,
               background: '#ccc',
               visible: false
            });
            this.manBottom = new Hilo.View({
               id: 'manBottom',
               x: width,
               y: this.man.height + width,
               width: this.man.width,
               height: width,
               background: '#ccc',
               visible: false
            });
            this.manLeft = new Hilo.View({
               id: 'manLeft',
               x: 0,
               y: width,
               width: width,
               height: this.man.height,
               background: '#ccc',
               visible: false
            })
            this.width = this.man.width + 2 * width;
            this.height = this.man.height + 2 * width;
            //console.log(this.man)
            this.addChild(this.man, this.manTop, this.manRight, this.manBottom, this.manLeft);
         },
         updateJumpPoint: function(t){
            console.log('***************', t)
            if(t >= 0){
               this.stepLength = 5;
               var baseNum = 200;
               baseNum = t > 250 ? 200 : 0 | Math.sqrt(90 * t + 4e4);
               console.log(baseNum);
               if(baseNum != this.jumpHeight){
                  this.jumpHeight = baseNum;
                  this.initVelocity = Math.sqrt(2 * this.jumpHeight * this.gravity);
                  this.riseTime = Math.sqrt(2 * this.jumpHeight / this.gravity)
               }
            }
         },
         getReady: function(){
            //console.log(this.startX, this.startY)
            this.x = this.startX;
            this.y = this.startY;
         },
         longPress: function(){
            if(!Game.isDisabled && !this.isMovingY){
               this.isMovingX = true;
               this.isLongPress = true;
               this.resetStepLength();
            }
         },
         shortTouch: function(time){
            if(this.clickCount <= 0){
               ++this.clickCount;
               if(!Game.isDisabled && !Game.isNoShortClick){
                  console.log('------------------------', this.x, this.y)
                  this.isMovingY = true;
                  this.calcStepLength();
                  this.jumpStartX = this.x;
                  this.jumpStartY = this.y;
                  this.jumpStartTime = time;
                  jumpFunction.jump2Target();
               }
            }
         },
         resetStepLength: function(){
            this.stepLength = 5;
         },
         jumpSomewhere: function(x, y, z, o){
            console.log(x,y,z,o)
         },
         calcStepLength: function(){
            console.log('*****************%%%%%%%%%%%%%%%%')
            var maxNum = Math.max(Game.ticker.getMeasuredFPS(), 15),
               num = 6 * this.jumpHeight / 50 - 19 | 0;
            this.stepLength = num + (60 - maxNum) / 4 | 0;
            console.log(this.stepLength)
         },
         onUpdate: function(e){
            //this.x += this.stepLength
            if(!this.isDead){
               if(Game.isCreativeEnable){
                  jumpFunction.actionCreativeScene();
               }else{
                  //console.log('$$$$$$$$$$$$$$$$$$$$$$$', this.isMovingX)
                  if(this.isMovingX || this.isSlideFall){
                     this.moveX();
                  }
                  if(this.isMovingY){
                     this.moveY(e);
                  }
               }
               if(this.y >= Game.height || this.x >= Game.width || this.x <= 0 || isNaN(this.x) || isNaN(this.y) || this.y <= -30){
                  this.isDead = true;
               }
            }
         },
         moveX: function(){
            let manRight = this.checkCollision(this.manRight),
            manBottom = this.checkCollision(this.manBottom);
            //console.log(manRight, manBottom)
            if(manRight){
               //console.log('--------------------=====================')
               this.isMovingX = false;
               this.x -= this.stepLength;
            }
            //console.log('^^^^^^^^^^^^^^^^^^^^',manBottom)
            if(manBottom){
               this.lastStandTime = new Date();
               this.lastStandY = this.y;
               this.isSlideFall = false;
               if(this.vy < 0){
                  this.y = manBottom.y - this.man.height - this.manTop.height>>0;
               }
               this.vy = 0;
            }else{
               if(Game.firstTime == 0){
                  return ++Game.firstTime;
               }
               let time = this.lastStandTime ? new Date() - this.lastStandTime : 0,
                gravity = this.gravity * time * time / 2;
                this.vy = -this.gravity * time;
                this.y = this.lastStandY + gravity;
                this.isSlideFall = true;
            } 
            console.log(this.MIDDLE_SCENE)
            if(this.x < this.MIDDLE_SCENE){
               console.log(this.x)
               this.x += this.stepLength;

            }
         },
         moveY: function(y){
            //console.log('444444444444444444444444')
            //console.log('=============',y)
            this.isMovingX = true;
            let delta = new Date() - this.jumpStartTime,
                curY = delta + y,
                velocity = this.initVelocity * delta - (this.gravity * delta * delta >> 1),
                jumpY = this.jumpStartY - velocity | 0,
                manBottom = this.checkCollision(this.manBottom),
                num;
                this.vy = this.initVelocity - this.gravity * delta;
            if(!Game.isFreeWalk && this.vy < 0 && !manBottom){
               num = this.gravity * y * (delta + curY) / 2 - this.initVelocity * y | 0;
               let curSet, obj, delH, 
                   colLength = Game.collisionSet.length, 
                   maxX = this.x + this.manLeft.width - 10, 
                   maxH = jumpY + this.man.height - this.manBottom.height;

               for(var i = 0; i < colLength; i++){
                  curSet = Game.collisionSet[i];
                  obj = baseFunction.offset(curSet);
                  if(maxX >= obj.x && maxX <= obj.x + curSet.width){
                     delH = obj.y - maxH;
                     if(num - delH > 0){
                        console.log(this.x)
                        jumpY = obj.y - this.man.height - this.manBottom.height;
                        this.vy = 0;
                        this.isMovingY = false;
                        this.isMovingX = false;
                        this.clickCount = 0;
                        break;
                     }
                  }
               }
            }
            if(this.vy < 0){
               if(manBottom){
                  this.y = manBottom.y - this.man.height - this.manBottom.height;
                  this.vy = 0;
                  this.isMovingX = false;
                  this.isMovingY = false;
                  this.clickCount = 0;
               }else{
                  this.y = jumpY;
               }
            }
         },
         checkCollision: function(obj){
            obj = obj || this;
            var length = Game.collisionSet.length, item;
            if(length == 0){
               return null;
            }
            for (var i = 0; i < length; ++i) {
               item = Game.collisionSet[i];
               //console.log(item)
               //物体与障碍是否发生碰撞
               if(obj.hitTestObject(item, true)){
                  return{
                     target: item,
                     x: item.x,
                     y: item.y
                  }
               }
            }
         }
      });
   }
   createJumpFunction(){
      window.jumpFunction = {
         jump2Target: function(){
            let man = Game.man;
            console.log('wwwwwwwwwwwwwwwwwwwwwwwwwwww')
            if(Game.isFreeWalk && man.x > Game.MIDDLE_SCENE && man.x < 600 && 36 === man.y){
               console.log('======================')
               man.jumpSomewhere(man.jumpStartX, man.jumpStartY, Game.MIDDLE_SCENE, 36, -1);
               Game.isReady2Fall = true;
            }
            if(Game.isFreeWalk && Game.scene7 && man.x + man.width >= Game.scene7.block2.x + Game.scene7.x && man.x <= Game.scene7.block2.x + Game.scene7.block2.width + Game.scene7.x){
               if (Game.scene7.isShooted) return;
               Game.scene7.isShooted = true;
               this.jumpAnimate();
            }
         },
         jumpAnimate: function(){
            let man = Game.man,
            startObj = {
               x: man.jumpStartX,
               y: man.jumpStartY
            },
            obj = {
               x: 656,
               y: 344
            };
            man.isMovingY = false;
            let obj1 = {
               x: (startObj.x + obj.x)/2,
               y:190
            },
            obj2 = {
               x: (obj1.x + startObj.x ) / 2,
               y: (obj1.y + startObj.y) / 2 - 40
            },
            obj3 = {
               x: (obj1.x + obj.x ) / 2,
               y: (obj1.y + obj.y) / 2 - 40
            }
            let timeLite = new TimelineLite({
               onComplete: ()=>{
                  Game.isDisabled = false;
                  Game.scene8.manCopy.alpha = 1;
                  Game.man.alpha = 0;
               },
               onUpdate: ()=>{
                  Game.isDisabled = true;
               }
            });
            timeLite.to(man, 0.11, Object.assign({}, obj2,{
               ease: Power0.easeIn
            })).to(man, 0.12, Object.assign({}, obj1,{
               ease: Power0.easeIn
            })).to(man, 0.11, Object.assign({}, obj3,{
               ease: Power0.easeOut
            })).to(man, 0.12, Object.assign({}, obj,{
               ease: Power0.easeOut
            }))
         },
         actionCreativeScene: function(){
            let target, man = Game.man,
            manRight = man.checkCollision(man.manRight);
            if(man.hitTestObject(Game.scene8.wallTop)){
               target = {
                  target: Game.scene8.wallTop
               }
            }
            if(man.isMovingX){
               if(Game.isTouchTop){
                  if(this.manPosition()){
                     man.isMovingX = false;
                     this.setManPosition();
                  }else{
                     man.x -= man.stepLength;
                     man.isFall2Top = true;
                     //Game.scene8.manCopy && Game.scene8.manCopy.goto(1, true);
                  }
               }else{
                  if(target && 'wallTop' === target.target.id){
                     man.y = target.target.height - man.manTop.height;
                     Game.isTouchTop = true;
                  }else{
                     manRight && 'wallRight' === manRight.target.id && (man.x = manRight.x - man.man.width - man.manRight.width);
                     man.y -= man.stepLength;
                  }
               }
            }
            if(man.isMovingY){
               if(man.isFall2Top){
                  man.isMovingX = true;
                  let delta = new Date() - man.jumpStartTime,
                  velocity = man.initVelocity * delta - .5 * man.gravity * delta * delta,
                  manY = man.jumpStartY + velocity;
                  man.vy = man.initVelocity - man.gravity * delta;
                  target = man.checkCollision(man.manTop);
                  if(man.vy < 0 && target && 'wallTop' === target.target.id){
                     man.isMovingX = false;
                     man.isMovingY = false;
                     man.y = target.y + target.target.height - man.manTop.height;
                     man.clickCount = 0;
                     man.vy = 0;
                     man.stepLength = man.initStepLength;
                     if(this.manPosition()){
                        this.setManPosition();
                     }
                  }else{
                     man.y = manY ;
                     if(this.manPosition()){
                        this.setManPosition();
                     }
                  }
               }else{

               }
            }

         },
         manPosition: function(){
            let man = Game.man;
            return man.x <= Game.MIDDLE_SCENE + 4 && man.x >= Game.MIDDLE_SCENE - 4
         },
         setManPosition: function(){
            let man = Game.man;
            man.x = Game.MIDDLE_SCENE;
            Game.isDisabled = true;
            //Game.scene8 && Game.scene8.fall2Tuoyan()
         }
      }
   }
}

new Music();