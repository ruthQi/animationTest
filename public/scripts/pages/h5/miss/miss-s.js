
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
      this.scene3 = [{
         url: this.imgSrc + "3/0.png",
         position: {
            x: 56,
            y: 10011
         },
         translate: {
            x: 0,
            y: -450
         },
         speed: {
            x: 0,
            y: -.3
         }
      }, {
         url: this.imgSrc + "3/1.png",
         position: {
            x: 201,
            y: 9266
         },
         translate: {
            x: 0,
            y: -450
         },
         speed: {
            x: 0,
            y: -.3
         }
      }, {
         url: this.imgSrc + "3/2.png",
         position: {
            x: 71,
            y: 10475
         },
         translate: {
            x: 0,
            y: -450
         },
         speed: {
            x: 0,
            y: -.3
         }
      }, {
         url: this.imgSrc + "3/3.png",
         position: {
            x: 437,
            y: 9980
         },
         translate: {
            x: 0,
            y: -450
         },
         speed: {
            x: 0,
            y: -.3
         },
         animate: !0,
         animateData: [this.imgSrc + "3/3.png", this.imgSrc + "3/3-1.png"]
      }, {
         url: this.imgSrc + "3/4.png",
         position: {
            x: 417,
            y: 9986
         },
         translate: {
            x: 0,
            y: -450
         },
         speed: {
            x: 0,
            y: -.3
         }
      }, {
         url: this.imgSrc + "3/5.png",
         position: {
            x: 180,
            y: 9909
         },
         translate: {
            x: 0,
            y: -400
         },
         speed: {
            x: 0,
            y: -.25
         }
      }, {
         url: this.imgSrc + "3/6.png",
         position: {
            x: 521,
            y: 10088
         },
         translate: {
            x: 0,
            y: -450
         },
         speed: {
            x: 0,
            y: -.3
         }
      }, {
         url: this.imgSrc + "3/9.png",
         position: {
            x: 268,
            y: 11187
         },
         translate: {
            x: 0,
            y: -900
         },
         speed: {
            x: 0,
            y: -.3
         }
      }, {
         url: this.imgSrc + "3/8.png",
         position: {
            x: 395,
            y: 10836
         },
         translate: {
            x: 0,
            y: -580
         },
         speed: {
            x: -.12,
            y: -.18
         }
      }, {
         url: this.imgSrc + "3/7.png",
         position: {
            x: 513,
            y: 10485
         },
         translate: {
            x: 0,
            y: -450
         },
         speed: {
            x: 0,
            y: -.3
         },
         animate: !0,
         animateData: [this.imgSrc + "3/7.png", this.imgSrc + "3/7-1.png"]
      }, {
         url: this.imgSrc + "3/10.png",
         position: {
            x: 772,
            y: 11426
         },
         translate: {
            x: 200,
            y: -900
         },
         speed: {
            x: .2,
            y: -.1
         }
      }]
      this.scene4 = [{
         url: this.imgSrc + "4/0.png",
         position: {
            x: 398,
            y: 12047
         },
         translate: {
            x: -360,
            y: -1250
         },
         speed: {
            x: -.2,
            y: -.466
         }
      }, {
         url: this.imgSrc + "4/1.png",
         position: {
            x: 0,
            y: 11006
         },
         translate: {
            x: 0,
            y: -800
         },
         speed: {
            x: 0,
            y: -.4
         }
      }, {
         url: this.imgSrc + "4/2.png",
         position: {
            x: 216,
            y: 11914
         },
         translate: {
            x: 0,
            y: -1e3
         },
         speed: {
            x: 0,
            y: -.3
         }
      }, {
         url: this.imgSrc + "4/3.png",
         position: {
            x: 525,
            y: 12521
         },
         translate: {
            x: 0,
            y: -1400
         },
         speed: {
            x: 0,
            y: -.4
         }
      }, {
         url: this.imgSrc + "4/4.png",
         position: {
            x: 200,
            y: 13343
         },
         translate: {
            x: 0,
            y: -1700
         },
         speed: {
            x: .1,
            y: -.3667
         },
         animate: !0,
         animateData: [this.imgSrc + "4/4.png", this.imgSrc + "4/4-1.png"],
         animationSpeed: .05
      }, {
         url: this.imgSrc + "4/5.png",
         position: {
            x: 90,
            y: 13100
         },
         translate: {
            x: 0,
            y: -1500
         },
         speed: {
            x: -.1,
            y: -.2
         }
      }, {
         url: this.imgSrc + "4/6.png",
         position: {
            x: 91,
            y: 13779
         },
         translate: {
            x: 0,
            y: -1900
         },
         speed: {
            x: 0,
            y: -.4
         }
      }]
      this.scene5 = [{
         url: this.imgSrc + "5/0.png",
         position: {
            x: 427,
            y: 202
         },
         speed: {
            x: 0,
            y: 0
         }
      }, {
         url: this.imgSrc + "5/1.png",
         position: {
            x: 431,
            y: 219
         },
         speed: {
            x: 0,
            y: 0
         }
      }, {
         url: this.imgSrc + "5/2.png",
         position: {
            x: 418.5,
            y: 435.5
         },
         speed: {
            x: -.133,
            y: .1
         }
      }, {
         url: this.imgSrc + "5/3.png",
         position: {
            x: 487,
            y: 244
         },
         speed: {
            x: -.0887,
            y: .0667
         }
      }, {
         url: this.imgSrc + "5/4.png",
         position: {
            x: 0,
            y: 272
         },
         speed: {
            x: 0,
            y: 0
         }
      }, {
         url: this.imgSrc + "5/6.png",
         position: {
            x: 63,
            y: 588
         },
         speed: {
            x: 0,
            y: 0
         }
      }, {
         url: this.imgSrc + "5/5.png",
         position: {
            x: 6,
            y: 553
         },
         speed: {
            x: 0,
            y: 0
         },
         animate: !0,
         animateData: [this.imgSrc + "5/5.png", this.imgSrc + "5/5-1.png"],
         animationSpeed: .05
      }, {
         url: this.imgSrc + "5/7.png",
         position: {
            x: 176,
            y: 2480
         },
         translate: {
            x: -50,
            y: 50
         },
         speed: {
            x: -.18,
            y: -.1
         }
      }, {
         url: this.imgSrc + "5/8.png",
         position: {
            x: 103,
            y: 2615
         },
         speed: 0
      }, {
         url: this.imgSrc + "5/9.png",
         position: {
            x: 0,
            y: 2876
         },
         speed: 0
      }, {
         url: this.imgSrc + "5/10.png",
         position: {
            x: 330,
            y: 4324
         },
         speed: {
            x: 0,
            y: 0
         },
         animate: !0,
         animateData: [this.imgSrc + "5/10.png", this.imgSrc + "5/10-1.png"],
         animationSpeed: .05
      }, {
         url: this.imgSrc + "5/11.png",
         position: {
            x: 210,
            y: 4521
         },
         speed: {
            x: 0,
            y: -.05
         }
      }, {
         url: this.imgSrc + "5/12.png",
         position: {
            x: 0,
            y: 5956
         },
         speed: {
            x: 0,
            y: -.1
         }
      }]
      this.scene6 = [{
         url: this.imgSrc + "6/0.png",
         position: {
            x: 498,
            y: 0
         },
         speed: {
            x: 0,
            y: .1
         }
      }, {
         url: this.imgSrc + "6/1.png",
         position: {
            x: 519,
            y: 480
         },
         speed: {
            x: 0,
            y: .04
         }
      }, {
         url: this.imgSrc + "6/2.png",
         position: {
            x: 639,
            y: 602
         },
         speed: {
            x: 0,
            y: .06
         }
      }, {
         url: this.imgSrc + "6/3.png",
         position: {
            x: 477,
            y: 747
         },
         speed: {
            x: 0,
            y: .04
         }
      }, {
         url: this.imgSrc + "6/4.png",
         position: {
            x: 335,
            y: 799
         },
         speed: {
            x: 0,
            y: .02
         }
      }, {
         url: this.imgSrc + "6/5.png",
         position: {
            x: 500,
            y: 951
         },
         translate: {
            x: 0,
            y: 20
         },
         speed: {
            x: 0,
            y: .1
         }
      }, {
         url: this.imgSrc + "6/6.png",
         position: {
            x: 165,
            y: 1031
         },
         speed: {
            x: 0,
            y: .05
         }
      }, {
         url: this.imgSrc + "6/7.png",
         position: {
            x: 613,
            y: 1106
         },
         speed: {
            x: 0,
            y: .12
         }
      }, {
         url: this.imgSrc + "6/8.png",
         position: {
            x: 364,
            y: 1196
         },
         speed: {
            x: 0,
            y: .08
         }
      }, {
         url: this.imgSrc + "6/9.png",
         position: {
            x: 203,
            y: 1314
         },
         speed: {
            x: 0,
            y: .15
         }
      }, {
         url: this.imgSrc + "6/10.png",
         position: {
            x: 523,
            y: 1348
         },
         speed: {
            x: 0,
            y: .09
         }
      }, {
         url: this.imgSrc + "6/11.png",
         position: {
            x: 428,
            y: 1496
         },
         speed: {
            x: 0,
            y: .03
         }
      }, {
         url: this.imgSrc + "6/12.png",
         position: {
            x: 252,
            y: 1597
         },
         speed: {
            x: 0,
            y: .05
         }
      }, {
         url: this.imgSrc + "6/13.png",
         position: {
            x: 67,
            y: 1587
         },
         speed: {
            x: 0,
            y: .12
         }
      }, {
         url: this.imgSrc + "6/14.png",
         position: {
            x: 189,
            y: 1823
         },
         speed: {
            x: 0,
            y: .09
         }
      }, {
         url: this.imgSrc + "6/15.png",
         position: {
            x: 497,
            y: 1752
         },
         speed: {
            x: 0,
            y: .02
         }
      }, {
         url: this.imgSrc + "6/16.png",
         position: {
            x: 121,
            y: 1989
         },
         speed: {
            x: 0,
            y: 0
         }
      }, {
         url: this.imgSrc + "6/17.png",
         position: {
            x: 150,
            y: 2501
         },
         speed: {
            x: 0,
            y: .06
         }
      }, {
         url: this.imgSrc + "6/18.png",
         position: {
            x: 140,
            y: 2192
         },
         speed: {
            x: 0,
            y: 0
         }
      }, {
         url: this.imgSrc + "6/19.png",
         position: {
            x: 322,
            y: 2730
         },
         speed: {
            x: 0,
            y: .05
         }
      }, {
         url: this.imgSrc + "6/20.png",
         position: {
            x: 241,
            y: 3717
         },
         speed: {
            x: 0,
            y: 0
         },
         animate: !0,
         animateData: [this.imgSrc + "6/20.png", this.imgSrc + "6/20-1.png"],
         animationSpeed: .05
      }, {
         url: this.imgSrc + "6/21.png",
         position: {
            x: 0,
            y: 3873
         },
         speed: {
            x: .06,
            y: .03
         },
         translate: {
            x: -30,
            y: 0
         },
         animate: !0,
         animateData: [this.imgSrc + "6/21.png", this.imgSrc + "6/21-1.png"],
         animationSpeed: .05
      }]
      this.scene7 = [{
         url: this.imgSrc + "7/0.png",
         position: {
            x: 335,
            y: 0
         },
         speed: {
            x: -.07,
            y: .1
         }
      }, {
         url: this.imgSrc + "7/1.png",
         position: {
            x: 24,
            y: 236
         },
         speed: {
            x: 0,
            y: -.05
         }
      }, {
         url: this.imgSrc + "7/2.png",
         position: {
            x: 0,
            y: 625
         },
         translate: {
            x: 0,
            y: -50
         },
         speed: {
            x: 0,
            y: -.06
         }
      }, {
         url: this.imgSrc + "7/3.png",
         position: {
            x: 523,
            y: 1601
         },
         speed: {
            x: 0,
            y: .08
         }
      }, {
         url: this.imgSrc + "7/4.png",
         position: {
            x: 235,
            y: 2024
         },
         speed: {
            x: 0,
            y: .03
         },
         animate: !0,
         animateData: [this.imgSrc + "7/4.png", this.imgSrc + "7/4-1.png"],
         animationSpeed: .05
      }, {
         url: this.imgSrc + "7/5.png",
         position: {
            x: 169,
            y: 2400
         },
         speed: {
            x: 0,
            y: 0
         }
      }, {
         url: this.imgSrc + "7/6.png",
         position: {
            x: 646,
            y: 2546
         },
         speed: {
            x: 0,
            y: -.07
         }
      }, {
         url: this.imgSrc + "7/7.png",
         position: {
            x: 398,
            y: 2711
         },
         speed: {
            x: 0,
            y: -.1
         },
         animate: !0,
         animateData: [this.imgSrc + "7/7.png", this.imgSrc + "7/7-1.png"],
         animationSpeed: .05
      }, {
         url: this.imgSrc + "7/9.jpg",
         position: {
            x: 0,
            y: 3484
         },
         speed: {
            x: 0,
            y: 0
         }
      }, {
         url: this.imgSrc + "7/8.png",
         position: {
            x: 291,
            y: 3259
         },
         speed: {
            x: 0,
            y: -.12
         }
      }, {
         url: this.imgSrc + "7/10.png",
         position: {
            x: 222.5,
            y: 4250
         },
         speed: {
            x: 0,
            y: 0
         }
      }, {
         url: this.imgSrc + "7/11.png",
         position: {
            x: 332,
            y: 1325
         },
         translate: {
            x: 0,
            y: -50
         },
         speed: {
            x: 0,
            y: 0
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
      //场景3
      this.renderScene3();
      //场景4
      this.renderScene4();
      //场景5
      this.renderScene5();
      //场景6
      this.renderScene6();
      //场景7
      this.renderScene7();
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

      if(top >= 7800 && top < 10900){
         for(var i=0; i< this.s3Container.children.length; i++){
            let item = this.s3Container.children[i];
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
               if(i == 3){
                  if(top > 9200 && top < 9800){
                     item.visible = true;
                     item.gotoAndStop(1);
                     item.position.x = item.data.position.x + (top - 9200) / 15;
                  }else if(top < 9200){
                     item.visible = true;
                     item.gotoAndStop(0);
                  }else if(top > 9800){
                     item.visible = false;
                  }
               }
               if(i == 8){
                  if(top <= 9800){
                     item.visible = false;
                  }else{
                     item.visible = true;
                  }
               }
               if(i == 9){
                  if(top <= 9800){
                     item.gotoAndStop(0);
                  }else{
                     item.gotoAndStop(1);
                  }
               }
            }
         }
      }

      if(top >= 9300 && top <= 13300){
         for(var i=0; i< this.s4Container.children.length; i++){
            let item = this.s4Container.children[i];
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
               if(i == 4){
                  if(top > 11600 && top < 12e3){
                     item.play();
                  }else{
                     item.gotoAndStop(0);
                  }
               }
            }
         }
      }

      if(top >= 12300 && top <= 21330 ){
         for(var i=0;i<this.s5Container.children.length; i++){
            let item = this.s5Container.children[i];
            if(item.data.speed){
               let dValue = top - this.s5Container.position.y - item.data.position.y;
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
               if(i == 3){
                  item.rotation = -dValue/50;
               }
               if(i == 7){
                  if(top > 13700 && top <= 13800){
                     item.gotoAndStop(1);
                  }else{
                     item.gotoAndStop(0)
                  }
               }
               if(i == 6){
                  if(top > 13700 && top <= 13840){
                     item.position.y = 2 * (top - 13700) + 588;
                     item.alpha = 1;
                  }else if(top > 13840){
                     item.position.y = 2 * (top - 13700) + 588;
                     item.alpha = (100 - (top - 13840)) / 100;
                  }else if(top < 13700){
                     item.position.y = 588;
                     item.alpha = 1;
                  }
               }
               if(i == 8){
                  if(top >= 15550){
                     item.position.set(208.66, 2576)
                  }
               }
               if(i == 11){
                  if(top > 17350){
                     item.gotoAndStop(1);
                  }else{
                     item.gotoAndStop(0);
                  }
               }
            }
         }
      }
      if(top >= 19e3 && top <= 24900){
         for(var i = 0; i< this.s6Container.children.length; i++){
            let item = this.s6Container.children[i];
            if(item.data.speed){
               let dValue = top - this.s6Container.position.y - item.data.position.y;
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
               if(i == 20){
                  if(top > 23400){
                     item.play();
                     
                  }else{
                     item.gotoAndStop(0);
                  }
               }
               if(i == 21){
                  if(top > 23800){
                     item.play();
                  }else{
                     item.gotoAndStop(0);
                  }
               }
            }
         }
      }
      if(top >= 23400 && top < 29060 - this.viewHeight){
         for(var i=0; i< this.s7Container.children.length; i++){
            let item = this.s7Container.children[i];
            let translateX = 0;
            let translateY = 0;
            if(item.data.speed){
               let dValue = top - this.s7Container.position.y - item.data.position.y;
               if(item.data.speed.x){
                  
                  if(item.data.translate){
                     translateX = item.data.translate.x;
                  }
                  item.position.x = item.data.position.x + item.data.speed.x * dValue + translateX;
               }
               if(item.data.speed.y){
                  
                  if(item.data.translate){
                     translateY = item.data.translate.y;
                  }
                  item.position.y = item.data.position.y + item.data.speed.y * dValue + translateY;
               }
               if(i == 2){
                  if(top >= 25400){
                     item.children[2].visible = true;
                     item.children[1].visible = false;
                     item.position.set(item.data.position.x + item.data.speed.x * -339 + translateX, item.data.position.y + item.data.speed.y * -339 + translateY);
                  }else{
                     item.children[1].visible = true;
                     item.children[2].visible = false;
                     item.children[4].rotation = dValue / 50;
                     item.children[5].rotation = dValue / 50;
                  }
               }
               if(i == 5){
                  if(top >= 26500){
                     item.gotoAndStop(1);
                  }else{
                     item.gotoAndStop(0);
                  }
               }
               if(i == 8){
                  if(top >= 26300){
                     item.play();
                  }else{
                     item.gotoAndStop(0);
                  }
               }
            }
         }
      }
      if(top > 29060 - this.viewHeight){
         var dValue = top - (29060 - this.viewHeight);
         this.mainScene.position.y = -top + dValue;
         this.s7Container.children[11].position.y = 4200 - dValue;
         this.s7Container.children[12].position.y = 4324 - dValue;
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
   //H
   renderScene3(){
      this.s3Container = new PIXI.Container();
      let sImage;
      for(var i=0; i<this.scene3.length; i++){
         if(this.scene3[i].animate){
            sImage = new PIXI.extras.AnimatedSprite.fromImages(this.scene3[i].animateData);
            sImage.animationSpeed = this.scene3[i].animationSpeed;
         }else{
            sImage = new PIXI.Sprite(this.loader.resources[this.scene3[i].url].texture);
         }
         sImage.data = this.scene3[i];
         sImage.position.set(this.scene3[i].position.x, this.scene3[i].position.y);
         this.s3Container.addChild(sImage);
      }
      this.mainScene.addChild(this.s3Container);
   }
   //J
   renderScene4(){
      this.s4Container = new PIXI.Container();
      let sImage;
      for(var i=0; i<this.scene4.length; i++){
         if(this.scene4[i].animate){
            sImage = new PIXI.extras.AnimatedSprite.fromImages(this.scene4[i].animateData);
            sImage.animationSpeed = this.scene4[i].animationSpeed;
         }else{
            sImage = new PIXI.Sprite(this.loader.resources[this.scene4[i].url].texture);
         }
         sImage.data = this.scene4[i];
         sImage.position.set(this.scene4[i].position.x, this.scene4[i].position.y);
         this.s4Container.addChild(sImage);
      }
      this.mainScene.addChild(this.s4Container);
   }
   renderScene5(){
      this.s5Container = new PIXI.Container();
      let sImage;
      for(var i=0; i<this.scene5.length; i++){
         if(this.scene5[i].animate){
            sImage = new PIXI.extras.AnimatedSprite.fromImages(this.scene5[i].animateData);
            sImage.animationSpeed = this.scene5[i].animationSpeed;
         }else{
            sImage = new PIXI.Sprite(this.loader.resources[this.scene5[i].url].texture);
         }
         sImage.data = this.scene5[i];
         sImage.position.set(this.scene5[i].position.x, this.scene5[i].position.y);
         if(i == 2){
            let graphics5 = new PIXI.Graphics();
            graphics5.lineStyle(4, 16724736, 1);
            graphics5.drawRect(0, 0, 500, 500);
            graphics5.endFill();
            graphics5.data = {
               speed: {
                  x: -.133,
                  y: .1
               },
               position: {
                  x: 490,
                  y: -100
               }
            };
            this.s5Container.children[1].mask = graphics5;
            this.s5Container.addChild(graphics5);
            sImage.pivot.set(17.5, 18.5);
         }
         this.s5Container.addChild(sImage);
      }
      this.s5Container.position.set(0, 13530);
      this.mainScene.addChild(this.s5Container);
   }
   renderScene6(){
      this.s6Container = new PIXI.Container();
      let sImage;
      for(var i=0; i<this.scene6.length; i++){
         if(this.scene6[i].animate){
            sImage = new PIXI.extras.AnimatedSprite.fromImages(this.scene6[i].animateData);
            sImage.animationSpeed = this.scene6[i].animationSpeed;
         }else{
            sImage = new PIXI.Sprite(this.loader.resources[this.scene6[i].url].texture);
         }
         sImage.data = this.scene6[i];
         sImage.position.set(this.scene6[i].position.x, this.scene6[i].position.y);
         this.s6Container.addChild(sImage);
      }
      this.s6Container.position.set(0, 20400);
      this.mainScene.addChild(this.s6Container);
   }
   renderScene7(){
      this.s7Container = new PIXI.Container();
      let sImage;
      for(var i=0; i<this.scene7.length; i++){
         if(this.scene7[i].animate){
            sImage = new PIXI.extras.AnimatedSprite.fromImages(this.scene7[i].animateData);
            sImage.animationSpeed = this.scene7[i].animationSpeed;
         }else{
            sImage = new PIXI.Sprite(this.loader.resources[this.scene7[i].url].texture);
         }
         sImage.data = this.scene7[i];
         sImage.position.set(this.scene7[i].position.x, this.scene7[i].position.y);
         this.s7Container.addChild(sImage);
         if(i == 1){
            this.bikeContainer = new PIXI.Container();
            this.bikeContainer.data = {
               speed: {
                  x: .3,
                  y: -.1
               },
               position: {
                  x: 448,
                  y: 839
               }
            };
            this.bikeContainer.position.set(this.bikeContainer.data.position.x, this.bikeContainer.data.position.y);
            let bikeBg = new PIXI.Sprite(this.loader.resources[this.imgSrc + 'bike/bg.png'].texture);
            bikeBg.position.set(12, 194);
            let bikeL1 = new PIXI.Sprite(this.loader.resources[this.imgSrc+'bike/leg1.png'].texture);
            bikeL1.position.set(47, 113);
            let bikeL2 = new PIXI.Sprite(this.loader.resources[this.imgSrc+'bike/leg2.png'].texture);
            bikeL2.position.set(38, 117);
            let bikeInner = new PIXI.Sprite(this.loader.resources[this.imgSrc+'bike/inner.png'].texture);
            bikeInner.position.set(25, 135);
            let bikeW1 = new PIXI.Sprite(this.loader.resources[this.imgSrc+'bike/wheel1.png'].texture);
            bikeW1.position.set(38.5, 214.5);
            let bikeW2 = new PIXI.Sprite(this.loader.resources[this.imgSrc+'bike/wheel2.png'].texture);
            bikeW2.position.set(157.5, 171.5);
            let bikeOuter = new PIXI.Sprite(this.loader.resources[this.imgSrc+'bike/outer.png'].texture);
            bikeOuter.position.set(8, 0);
            let bikeText = new PIXI.Sprite(this.loader.resources[this.imgSrc+'bike/text.png'].texture);
            bikeText.position.set(-21, -143);
            this.bikeContainer.addChild(bikeBg, bikeL1, bikeL2, bikeInner, bikeW1, bikeW2, bikeOuter, bikeText);
            this.s7Container.addChild(this.bikeContainer);
         }
         if(i == 10){
            let curTime = new Date().getTime();
            let missTime = new Date(2017, 5, 9).getTime();
            let dDay = parseInt((curTime - missTime) / 864e5);
            this.missTimeContainer = new PIXI.Container();
            let missDayText = new PIXI.Text('章莹颖失踪的第' + dDay + '天', {
               fontSize: '26px',
               fill: '#181b32',
               fontFamily: '微软雅黑'
            });
            missDayText.position.x = (750 - missDayText.width) / 2;
            let noFoundText = new PIXI.Text('我们还没找到她', {
               fontSize: '26px',
               fill: '#181b32',
               fontFamily: '微软雅黑'
            });
            noFoundText.position.x = (750 - noFoundText.width) / 2;
            noFoundText.position.y = 36;
            let cyText = new PIXI.Text('神探李昌钰说她仍可能活着', {
               fontSize: '26px',
               fill: '#181b32',
               fontFamily: '微软雅黑'
            });
            cyText.position.x = (750 - cyText.width) / 2;
            cyText.position.y = 72;
            this.missTimeContainer.addChild(missDayText, noFoundText, cyText);
            this.missTimeContainer.position.y = 4200;
            this.missTimeContainer.data = {
               position: {
                  x: 210,
                  y: 4200
               },
               speed: {
                  x: 0,
                  y: 0
               }
            }
            this.s7Container.addChild(this.missTimeContainer);
         }
         this.s7Container.position.set(0, 24900);
         
      }
      this.mainScene.addChild(this.s7Container);
   }
}

new MissAnimation();