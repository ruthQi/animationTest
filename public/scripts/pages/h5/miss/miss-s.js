
var PIXI = require('pixi.js');
import {TweenLite} from 'gsap';

class MissAnimation {
   constructor(){
      this.imgSrc = '/images/miss/';
      this.viewWidth = 750;
      this.viewHeight = window.innerHeight;
      this.container = new PIXI.Container();//舞台
      this.loader = PIXI.loader;
      this.birdArr = [];
      this.distance = 0;
      this.leaveFlag = false;
      this.posFlag = true;//G
      this.birdRotation = 0;//Y
      this.curPos = 0;//Q
      this.loaderArray();
      this.init();
   }
   loaderArray(){
      this.scene1 = [{
         url: this.imgSrc + "1/0.png",
         position: {
            x: 0,
            y: 130
         },
         speed: {
            x: 0,
            y: .1
         }
      }, {
         url: this.imgSrc + "1/1.png",
         position: {
            x: 121,
            y: 1618
         },
         speed: {
            x: 0,
            y: .03
         }
      }, {
         url: this.imgSrc + "1/2.png",
         position: {
            x: 334,
            y: 1743
         },
         speed: {
            x: 0,
            y: -.08
         }
      }, {
         url: this.imgSrc + "1/3.png",
         position: {
            x: 249,
            y: 2898
         },
         speed: 0
      }, {
         url: this.imgSrc + "1/5.png",
         position: {
            x: 62,
            y: 2564
         },
         speed: {
            x: 0,
            y: -.06
         }
      }, {
         url: this.imgSrc + "1/4.png",
         position: {
            x: 344,
            y: 3544
         },
         animate: !0,
         animateData: [this.imgSrc + "1/4.png", this.imgSrc + "1/4-1.png"],
         animationSpeed: .1,
         playTime: 3e3,
         initLine: 2500,
         startLine: 2700,
         speed: 0
      }, {
         url: this.imgSrc + "logo.png",
         position: {
            x: 220,
            y: 16
         },
         speed: {
            x: 0,
            y: 0
         }
      }];
      this.scene2 = [{
            url: this.imgSrc + "2/0.png",
            position: {
               x: 0,
               y: 4696
            }
         }, {
            url: this.imgSrc + "2/1.png",
            position: {
               x: 114,
               y: 6281
            },
            speed: {
               x: 0,
               y: -.06
            }
         }, {
            url: this.imgSrc + "2/2.png",
            position: {
               x: 335,
               y: 6319
            },
            speed: {
               x: 0,
               y: .06
            }
         }, {
            url: this.imgSrc + "2/3.png",
            position: {
               x: 495,
               y: 6364
            },
            speed: {
               x: 0,
               y: .06
            }
         }, {
            url: this.imgSrc + "2/4.png",
            position: {
               x: 302,
               y: 6593
            },
            speed: {
               x: 0,
               y: -.06
            }
         }, {
            url: this.imgSrc + "2/5.png",
            position: {
               x: 409,
               y: 6651
            },
            speed: {
               x: 0,
               y: -.06
            }
         }, {
            url: this.imgSrc + "2/6.png",
            position: {
               x: 74,
               y: 6770
            },
            speed: {
               x: 0,
               y: -.06
            }
         }, {
            url: this.imgSrc + "2/7.png",
            position: {
               x: 0,
               y: 7007
            },
            animate: !0,
            animateData: [this.imgSrc + "2/7.png", this.imgSrc + "2/7-1.png"],
            speed: {
               x: -1,
               y: 0
            }
         }, {
            url: this.imgSrc + "2/8.png",
            position: {
               x: 0,
               y: 7462
            },
            speed: 0
         }, {
            url: this.imgSrc + "2/9.png",
            animate: !0,
            animateData: [this.imgSrc + "2/9.png", this.imgSrc + "2/9-1.png", this.imgSrc + "2/9-2.png", this.imgSrc + "2/9-3.png", this.imgSrc + "2/9-4.png", this.imgSrc + "2/9-5.png", this.imgSrc + "2/9-6.png", this.imgSrc + "2/9-7.png", this.imgSrc + "2/9-8.png", this.imgSrc + "2/9-9.png"],
            position: {
               x: 165,
               y: 8128
            },
            translate: {
               x: 0,
               y: 450
            },
            speed: {
               x: .6665,
               y: .5
            }
         }]
   }
   init(){
      this.initView();
      this.initScroll();
   }
   initView(){
      this.container.width = this.viewWidth;
      this.container.height = this.viewHeight;
      this.canvasView = new PIXI.CanvasRenderer(this.viewWidth, this.viewHeight);
      document.querySelector('.zhang_miss_content').append(this.canvasView.view);
      let birdPosition = [0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      for(var i=0;i<birdPosition.length;i++){
         this.birdArr.push(this.imgSrc + 'bird/' + birdPosition[i]+ '.png');
      }
      this.loader.add(this.imgSrc + 'bg.png')
                 .add(this.imgSrc + 'tree_cover.png')
                 .add(this.imgSrc + 'plane1.png')
                 .add(this.imgSrc + 'plane2.png')
                 .add(this.imgSrc + 'logo.png')
                 .add(this.imgSrc + '1/0.png')
                 .add(this.imgSrc + '1/1.png')
                 .add(this.imgSrc + '1/2.png')
                 .add(this.imgSrc + '1/3.png')
                 .add(this.imgSrc + '1/4.png')
                 .add(this.imgSrc + '1/4-1.png')
                 .add(this.imgSrc + '1/5.png')
                 .add(this.imgSrc + 'leaves/l0.png')
                 .add(this.imgSrc + 'leaves/l1.png')
                 .add(this.imgSrc + 'leaves/l2.png')
                 .add(this.imgSrc + 'leaves/l3.png')
                 .add(this.imgSrc + '2/0.png')
                 .add(this.imgSrc + '2/1.png')
                 .add(this.imgSrc + '2/2.png')
                 .add(this.imgSrc + '2/3.png')
                 .add(this.imgSrc + '2/4.png')
                 .add(this.imgSrc + '2/5.png')
                 .add(this.imgSrc + '2/6.png')
                 .add(this.imgSrc + '2/7.png')
                 .add(this.imgSrc + '2/7-1.png')
                 .add(this.imgSrc + '2/8.png')
                 .add(this.imgSrc + '2/9.png')
                 .add(this.imgSrc + '2/9-1.png')
                 .add(this.imgSrc + '2/9-2.png')
                 .add(this.imgSrc + '2/9-3.png')
                 .add(this.imgSrc + '2/9-4.png')
                 .add(this.imgSrc + '2/9-5.png')
                 .add(this.imgSrc + '2/9-6.png')
                 .add(this.imgSrc + '2/9-7.png')
                 .add(this.imgSrc + '2/9-8.png')
                 .add(this.imgSrc + '2/9-9.png')
                 .add(this.imgSrc + 'clock/h.png')
                 .add(this.imgSrc + 'clock/m.png')
                 .add(this.imgSrc + 'clock/s.png')
                 .add(this.imgSrc + '3/0.png')
                 .add(this.imgSrc + '3/1.png')
                 .add(this.imgSrc + '3/2.png')
                 .add(this.imgSrc + '3/3.png')
                 .add(this.imgSrc + '3/3-1.png')
                 .add(this.imgSrc + '3/4.png')
                 .add(this.imgSrc + '3/5.png')
                 .add(this.imgSrc + '3/6.png')
                 .add(this.imgSrc + '3/7.png')
                 .add(this.imgSrc + '3/7-1.png')
                 .add(this.imgSrc + '3/8.png')
                 .add(this.imgSrc + '3/9.png')
                 .add(this.imgSrc + '3/10.png')
                 .add(this.imgSrc + '4/0.png')
                 .add(this.imgSrc + '4/1.png')
                 .add(this.imgSrc + '4/2.png')
                 .add(this.imgSrc + '4/3.png')
                 .add(this.imgSrc + '4/4.png')
                 .add(this.imgSrc + '4/4-1.png')
                 .add(this.imgSrc + '4/5.png')
                 .add(this.imgSrc + '4/6.png')
                 .add(this.imgSrc + '5/0.png')
                 .add(this.imgSrc + '5/1.png')
                 .add(this.imgSrc + '5/2.png')
                 .add(this.imgSrc + '5/3.png')
                 .add(this.imgSrc + '5/4.png')
                 .add(this.imgSrc + '5/5.png')
                 .add(this.imgSrc + '5/5-1.png')
                 .add(this.imgSrc + '5/6.png')
                 .add(this.imgSrc + '5/7.png')
                 .add(this.imgSrc + '5/8.png')
                 .add(this.imgSrc + '5/9.png')
                 .add(this.imgSrc + '5/10.png')
                 .add(this.imgSrc + '5/10-1.png')
                 .add(this.imgSrc + '5/11.png')
                 .add(this.imgSrc + '5/12.png')
                 .add(this.imgSrc + '6/0.png')
                 .add(this.imgSrc + '6/1.png')
                 .add(this.imgSrc + '6/2.png')
                 .add(this.imgSrc + '6/3.png')
                 .add(this.imgSrc + '6/4.png')
                 .add(this.imgSrc + '6/5.png')
                 .add(this.imgSrc + '6/6.png')
                 .add(this.imgSrc + '6/7.png')
                 .add(this.imgSrc + '6/8.png')
                 .add(this.imgSrc + '6/9.png')
                 .add(this.imgSrc + '6/10.png')
                 .add(this.imgSrc + '6/11.png')
                 .add(this.imgSrc + '6/12.png')
                 .add(this.imgSrc + '6/13.png')
                 .add(this.imgSrc + '6/14.png')
                 .add(this.imgSrc + '6/15.png')
                 .add(this.imgSrc + '6/16.png')
                 .add(this.imgSrc + '6/17.png')
                 .add(this.imgSrc + '6/18.png')
                 .add(this.imgSrc + '6/19.png')
                 .add(this.imgSrc + '6/20.png')
                 .add(this.imgSrc + '6/20-1.png')
                 .add(this.imgSrc + '6/21.png')
                 .add(this.imgSrc + '6/21-1.png')
                 .add(this.imgSrc + '6/22.png')
                 .add(this.imgSrc + '7/0.png')
                 .add(this.imgSrc + '7/1.png')
                 .add(this.imgSrc + '7/2.png')
                 .add(this.imgSrc + '7/3.png')
                 .add(this.imgSrc + '7/4.png')
                 .add(this.imgSrc + '7/4-1.png')
                 .add(this.imgSrc + '7/5.png')
                 .add(this.imgSrc + '7/6.png')
                 .add(this.imgSrc + '7/7.png')
                 .add(this.imgSrc + '7/7-1.png')
                 .add(this.imgSrc + '7/8.png')
                 .add(this.imgSrc + '7/9.jpg')
                 .add(this.imgSrc + '7/10.png')
                 .add(this.imgSrc + '7/11.png')
                 .add(this.imgSrc + 'bike/wheel1.png')
                 .add(this.imgSrc + 'bike/wheel2.png')
                 .add(this.imgSrc + 'bike/leg1.png')
                 .add(this.imgSrc + 'bike/leg2.png')
                 .add(this.imgSrc + 'bike/inner.png')
                 .add(this.imgSrc + 'bike/outer.png')
                 .add(this.imgSrc + 'bike/bg.png')
                 .add(this.imgSrc + 'bike/text.png')
                 .on('progress', this.progress)
                 .load(this.loadComplete);
   }
   //加载过程
   progress = (obj) => {
      let t = parseInt(obj.progress);
      document.querySelector('.loading_text').innerHTML = t + '%';
   }
   //加载完成
   loadComplete = () => {
      TweenLite.to(document.querySelector('.loading'), 0.3, {
         display: 'none'
      });
      this.mainScene = new PIXI.Container();
      //背景
      this.bgSprite = new PIXI.Sprite(this.loader.resources[this.imgSrc+'bg.png'].texture);
      this.mainScene.addChild(this.bgSprite);
      //场景1
      this.renderScene1();
      this.renderBird();
      this.renderLeave();
      this.renderTreeCover();
      //场景2
      this.renderScene2();
      this.renderClock();
      this.container.addChild(this.mainScene);
      this.bindEvent();
      //必须设置此属性，滚动式才好使，否则滚动不起作用
      this.scroller.setDimensions(this.viewWidth, this.viewHeight, this.viewWidth, 29360);
      //this.scroller.scrollTo(0,0,false);
      this.updateLoop();
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
   initScroll(){
      this.scroller = new Scroller(this.scrollFun, {
         zooming: false,
         animating : true,
         bouncing : false,
         animationDuration:1000
      })
   }
   scrollFun = (left, top, zoom) => {

      this.mainScene.position.x = -left;
      this.mainScene.position.y = -top;
      if(top > this.curPos){
         this.posFlag = true
      }else if(top < this.curPos){
         this.posFlag = false;
      }
      this.birdRotation = this.posFlag ? 0 : Math.PI;
      if(top < 3900){
         for(var i=0;i<this.sContainer1.children.length;i++){
            let item = this.sContainer1.children[i];
            if(item.data.speed){
               let pos = top - item.data.position.y;
               item.data.speed.x && (item.position.x = item.data.position.x + item.data.speed.x * pos);
            }
            if(item.data.animate && top > item.data.startLine){
               item.play();
               item.data.playTime && setTimeout(()=>{
                  item.gotoAndStop(0);
               }, item.data.playTime)
            }
         }
         if(top < 2600){
            if(top < 1280){
               let x = Math.sqrt(256e4 - top * top) / 2, angle = Math.asin(top / 1600) + 0;
               this.birdImg.position.set(x + 65, 200 + 1.2 * top);
               //rotation表示绕中心点旋转多少
               this.birdImg.rotation = angle;
            }else{
               this.birdImg.position.set(1280 - top + 480 + 65, 200 + 1.2 * top);
               this.birdImg.rotation = Math.asin(.8) + this.birdRotation;
            }
            if(this.leaveFlag){
               this.stopLeave();
            }
         }else if(top > 2600){
            if(top < 2800){
               this.birdImg.position.set(top - 2600, top + 600);
               this.birdImg.rotation = -Math.PI / 4 + this.birdRotation;
            }else if(top < 3160){
               var height = 1600 - (top - 2800),
                  heightS = Math.sqrt(256e4 - height * height) / 9,
                  heightC = Math.acos(height / 1600) + this.birdRotation;
                  this.birdImg.position.set(200 + heightS, top + top - 2800 + 600);
                  this.birdImg.rotation = -Math.PI / 4 + heightC;
            }else{
               this.birdImg.position.set(306, 4120);
               if(!this.leaveFlag){
                  this.startLeave();
               }
            }
         }
      }
      this.curPos = top;
      if(top >= 3900 && top < 9e3){
         for(var i=0;i<this.s2Container.children.length; i++){
            let item = this.s2Container.children[i];
            //console.log(item)
            if(item.data.speed){
               let dValue = top - item.data.position.y;
               if(item.data.speed.x){
                  let translateX = 0;
                  if(item.data.translate){
                     translateX = item.data.translate.x;
                  }
                  item.position.x = item.data.position.x + item.data.speed.x * dValue + translateX;
               }
               if(item.data.speed.y){
                  let translateY = 0;
                  if(item.data.translate){
                     translateY = item.data.translate.y;
                  }
                  item.position.y = item.data.position.y + item.data.speed.y * dValue + translateY;
               }
               if(i == 0){
                  this.clock.position.set(326, 5273 + item.data.speed.y * dValue);
               }
            }
            if(item.data.animate){
               if(i == 9){
                  if(top > 6650 && top <= 6750){
                     item.gotoAndStop(1);
                     this.plane1.position.set(360, 7260);
                     this.plane2.position.set(360, 7260);
                  }else if(top > 6750 && top < 7200){
                     item.gotoAndStop(0);
                     this.plane1.visible = true;
                     this.plane2.visible = false;
                     this.plane1.position.set(item.position.x + 105, 7120);
                  }else if(top <= 6650){
                     item.gotoAndStop(0);
                     this.plane1.position.set(360, 7260);
                     this.plane2.position.set(360, 7260);
                     this.plane1.visible = false;
                     this.plane2.visible = true;
                  }
               }
               if(i == 11){
                  let dValue = top - item.data.position.y;
                  item.gotoAndStop(parseInt(dValue / 15));
               }
            }
         }
         if(top > 5200 && top < 6100){
            let dV = top - 5200;
            this.plane1.position.set(802-dV, 5600+1.2*dV);
            this.plane2.position.set(802-dV, 5600+1.2*dV);
            this.plane1.visible = this.posFlag;
            this.plane2.visible = !this.posFlag;
         }else if (top >= 6100 && top < 6500) {
            let dV = top - 6200;
            this.plane1.position.set(1.2*dV, 6900 + 1.2*dV);
            this.plane2.position.set(1.2*dV, 6900 + 1.2*dV);
            this.plane1.visible = !this.posFlag;
            this.plane2.visible = this.posFlag;
         }
      }
   }
   stopLeave(){
      this.leaveFlag = false;
      for (var i = 0; i < 8; i++){
         this.leaveContainer.children[i].position.set(0, 0);
      }
   }
   startLeave(){
      this.leaveFlag = true;
      for (var i = 0; i < 8; i++) {
         var pos1 = 20 * Math.random(),
            pos2 = 20 * Math.random(),
            pos3 = 50 * Math.random() + 70,
            pos4 = 100 * Math.random() + 50,
            time = 400 * Math.random() + 800,
            delayTime = parseInt(1e3 * Math.random());
         new TWEEN.Tween(this.leaveContainer.children[i].position).to({
               x: -pos3 - pos1,
               y: pos4 + pos2
         }, time).easing(TWEEN.Easing.Quadratic.Out).delay(delayTime).start()
      }
   }
   //X
   renderScene1(){
      this.sContainer1 = new PIXI.Container();
      let sImage;
      for(var i=0; i<this.scene1.length; i++){
         if(this.scene1[i].animate){
            sImage = new PIXI.extras.AnimatedSprite.fromImages(this.scene1[i].animateData);
            sImage.animationSpeed = this.scene1[i].animationSpeed;
         }else{
            sImage = new PIXI.Sprite(this.loader.resources[this.scene1[i].url].texture);
         }
         sImage.data = this.scene1[i];
         sImage.position.set(this.scene1[i].position.x, this.scene1[i].position.y);
         this.sContainer1.addChild(sImage);
      }
      this.mainScene.addChild(this.sContainer1);
   }
   renderBird(){
      this.birdImg = new PIXI.extras.AnimatedSprite.fromImages(this.birdArr);
      this.birdImg.animationSpeed = 0.15;
      //表示设置this.birdImg的中心点为115,145；
      this.birdImg.pivot.set(115, 145);
      this.birdImg.play();
      this.mainScene.addChild(this.birdImg);
   }
   renderLeave(){
      this.leaveContainer = new PIXI.Container();
      this.leaveContainer.position.set(275, 4250);
      for(var i = 0; i < 8; i++){
         var leave = new PIXI.Sprite(this.loader.resources[this.imgSrc+'leaves/l' + i % 4 + '.png'].texture);
         this.leaveContainer.addChild(leave);
      }
      this.mainScene.addChild(this.leaveContainer);
   }
   renderTreeCover(){
      let treeCover = new PIXI.Sprite(this.loader.resources[this.imgSrc+'tree_cover.png'].texture);
      treeCover.position.set(92, 3945);
      this.mainScene.addChild(treeCover);
   }
   //L
   renderScene2(){
      this.s2Container = new PIXI.Container();
      let sImage;
      for(var i=0; i<this.scene2.length; i++){
         if(this.scene2[i].animate){
            sImage = new PIXI.extras.AnimatedSprite.fromImages(this.scene2[i].animateData);
            sImage.animationSpeed = this.scene2[i].animationSpeed;
         }else{
            sImage = new PIXI.Sprite(this.loader.resources[this.scene2[i].url].texture);
         }
         sImage.data = this.scene2[i];
         sImage.position.set(this.scene2[i].position.x, this.scene2[i].position.y);
         if(i == 7){
            this.renderPlane();
         }
         this.s2Container.addChild(sImage);
      }
      this.mainScene.addChild(this.s2Container);
   }
   renderPlane(){
      this.plane1 = new PIXI.Sprite(this.loader.resources[this.imgSrc+'plane1.png'].texture);
      this.plane1.position.set(802, 5998);
      this.plane2 = new PIXI.Sprite(this.loader.resources[this.imgSrc+'plane2.png'].texture);
      this.plane2.position.set(802, 5998);
      this.plane1.data = {speed: 0};
      this.plane2.data = {speed: 0};
      this.s2Container.addChild(this.plane1, this.plane2);
   }
   renderClock(){
      this.clock = new PIXI.Container();
      this.clock.position.set(326, 5273);
      let hClock = new PIXI.Sprite(this.loader.resources[this.imgSrc+'clock/h.png'].texture);
      hClock.pivot.set(9, 35);
      hClock.position.set(50, 51);
      let mClock = new PIXI.Sprite(this.loader.resources[this.imgSrc+'clock/m.png'].texture);
      mClock.pivot.set(8, 42);
      mClock.position.set(50, 51);
      let sClock = new PIXI.Sprite(this.loader.resources[this.imgSrc+'clock/s.png'].texture);
      sClock.pivot.set(4, 42);
      sClock.position.set(50, 51);
      setInterval(()=>{
         let hour = new Date().getHours();
         let minute = new Date().getMinutes();
         let second = new Date().getSeconds();
         hClock.rotation = hour >= 12 ? (hour - 12 + minute/60)/12 * (2* Math.PI) : (hour + minute/60)/12*(2*Math.PI);
         mClock.rotation = (minute + second/60)/60 * (2*Math.PI);
         sClock.rotation = second/60 * 2* Math.PI;
      },1e3)
      this.clock.addChild(hClock, mClock, sClock);
      this.mainScene.addChild(this.clock);
   }
}

new MissAnimation();