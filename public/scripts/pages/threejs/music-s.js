
var THREE = require('libs/three.min.js');
require('libs/hilo/hilo-standalone.js');
var $ = require('libs/jquery.js');
import {TimelineLite} from 'gsap';
//console.log(Hilo)
class Music{
   constructor(){
      this.imgSrc = '/images/music/';
      this.innerwidth = window.innerWidth;
      this.innerheight = window.innerHeight;
      this.dpr = 2;
      this.waterWidth = window.innerWidth;
      this.waterHeight = window.innerHeight - window.innerWidth * 175/375;
      this.initGame();//创建game
      this.createAsset();//添加loading
      this.createGuide();
      this.createMan();//创建你
      this.createThreejs();
      this.createScene1();//创建场景1：寻找
      
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
         init: function(){
            this.asset = new Game.Assets();
            this.asset.on('complete', ()=>{
               //console.log('0000000000000000000')
               //移除监听
               this.asset.off("complete");
               this.initStage();
            }, true);
            this.asset.load();
         },
         initStage: function(){
            this.width = 750;
            this.height = 1334;
            //let scaleX = this.innerwidth/this.width, scaleY = this.innerwidth/this.height;
            this.stage = new Hilo.Stage({
               renderType: "canvas",
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
            //this.stage.onUpdate = this.onUpdate.bind(this);
            this.initGuide();
            bgDecration.canvasBg();
            bgDecration.transCamera();
            
            $('#musicView').append(this.stage.canvas);
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
               id: "me",
               startX: 110,
               startY: 390
            });
            //addTo(x, y):x表示父容器，y表示要添加到索引的位置
            this.man.addTo(this.stage, 1);
            this.man.getReady();
            //this.MIDDLE_SCENE = this.width >> 1
         },
         gameReady: function() {
            this.firstTime = 0;
            this.isReady = true;
         },
         initScene: function(x, y){
            this.scene1 = new Game.Scene1();
            this.scene1.addTo(this.stage);
            //Game.Scene1.init();
         }
      }
   }
   createScene1(){
      Game.Scene1 = Hilo.Class.create({
         Extends: Hilo.Container,
         constructor: function(){
            Game.Scene1.superclass.constructor.call(this);
            this.xunzhao = new Hilo.Bitmap(Object.assign({}, {x:60, y: 440}, {
               image: Game.asset.xunzhao
            }));
            this.init();
         },
         init: function(){
            console.log(this.xunzhao)
            this.addChild(this.xunzhao);
         }
      })
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
            $('#musicViewBack').append(this.renderer.domElement);
         },
         initScene: function(){
            this.scene = new THREE.Scene;
            this.scene.background = new THREE.Color(2499121);
            var gameBg = (new THREE.TextureLoader).load(this.imgSrc+'game-bg.jpg');
            THREE.ImageUtils.crossOrigin = "";
            gameBg.wrapS = THREE.RepeatWrapping;
            gameBg.wrapT = THREE.MirroredRepeatWrapping;
            this.scene.background = gameBg;
            this.initParticles();
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
               }/*else{
                  if(this.isMoveDown){
                     this.points[0].position.y -= 1;
                     this.points[1].position.y -= 1;
                     this.points[2].position.y -= 1;
                     this.points[0].position.y < -height && (this.points[0].position.y = height);
                     this.points[1].position.y < -height && (this.points[1].position.y = height);
                     this.points[2].position.y < -height && (this.points[2].position.y = height);
                  }
               }*/
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
            this.intro = this.queue.get('intro').content;
            this.man = this.queue.get('man').content;
            this.xunzhao = this.queue.get('xunzhao').content;
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
      //使用一下方式，new出来的对象为正确的，如果方法内使用箭头函数，new出来的对象有问题，不能添加到stage中
      window.Guide = Hilo.Class.create({
         Extends: Hilo.Container,
         constructor: function(){
            Guide.superclass.constructor.call(this);
            this.intro = new Hilo.Bitmap({
               image: Game.asset.intro
            });
            this.intro.x = Game.width - this.intro.width >> 1;
            this.intro.y = Game.height - this.intro.height - 300 >> 1;
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
         }
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
         },
         startX: 0,
         startY: 0,
         jumpHeight: 0,
         init: function(config){
            var width = Game.COVER_WIDTH;
            this.man = new Hilo.Bitmap({
               id: 'man',
               x: width,
               y: width,
               image: Game.asset.man
            });
            this.startX = config.startX;
            this.startY = config.startY;
            this.width = this.man.width + 2 * width;
            this.height = this.man.height + 2 * width;
            //console.log(this.man)
            this.addChild(this.man);
         },
         updateJumpPoint: function(t){
            if(t >= 0){
               this.stepLength = 5;
               var baseNum = 200;
               baseNum = t > 250 ? 200 : 0 | Math.sqrt(90 * t + 4e4);
               if(baseNum != this.jumpHeight){
                  this.jumpHeight = baseNum;
                  this.initVelocity = Math.sqrt(2 * this.jumpHeight * this.gravity);
                  this.riseTime = Math.sqrt(2 * this.jumpHeight / this.gravity)
               }
            }
         },
         getReady: function(){
            this.x = this.startX;
            this.y = this.startY;
         }
      });
   }
}

new Music();