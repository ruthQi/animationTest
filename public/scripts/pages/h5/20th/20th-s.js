//https://3g.163.com/wap/special/the_20th_of_netease/?from=timeline

var THREE = require('libs/three.min.js');
import {TimelineLite} from 'gsap';
require('libs/OBJLoader.js');
/*
TweenLite：针对任何对象的处理动画的核心引擎。
TweenMax：它像是TweenLite的哥哥，它可以实现TweenLite的功能，以及一些非必要功能，如repeat、yoyo、updateTo()等。它会自动激活插件。
TimelineLite：一个非常强大轻量序列的动画工具，它扮演一个动画容器的角色，使用它能够更方便的管理时间和相关动画。
TimelineMax：TimelineLite的扩展，除了TimelineLite的功能外还包括一些非必要功能，如repeat、repeatDelay、yoyo、currentLabel()还有更多功能。
另外还有像缓动工具，运动路径，插件，块工具及其他更多。
*/
class create20th{
   constructor(){
      this.srcPerfix = "https://img4.cache.netease.com/f2e/wap/demo/xzh5test/src";
      this.bgGroup = ["/textures/stage_1_0.png", "/textures/stage_2_0.png", "/textures/stage_3_0.png", "/textures/stage_4_0.png", "/textures/title_0_0.png", "/textures/title_0_1.png", "/textures/title_0_2.png", "/textures/title_0_3.png", "/textures/title_0_4.png", "/textures/title_0_5.png", "/textures/stage_1_2.png", "/textures/stage_1_11.png", "/textures/stage_2_1.png", "/textures/stage_3_1.png", "/textures/stage_4_1.png", "/textures/line_fix_0.png", "/textures/line_fix_1.png", "/textures/line_fix_2.png", "/textures/dot.png", "/textures/stage_1_3.png", "/textures/stage_1_5.png", "/textures/stage_1_4.png", "/textures/stage_2_12.png", "/textures/stage_2_13.png", "/textures/stage_2_11.png", "/textures/stage_2_10.png", "/textures/stage_2_9.png", "/textures/stage_2_8.png", "/textures/stage_2_7.png", "/textures/stage_2_6.png", "/textures/stage_2_5.png", "/textures/stage_2_3.png", "/textures/stage_2_4.png", "/textures/stage_2_14.png", "/textures/stage_3_3.png", "/textures/stage_3_2.png", "/textures/stage_3_5.png", "/textures/stage_4_7.png", "/textures/stage_4_6.png", "/textures/stage_4_4.png", "/textures/stage_4_3.png", "/textures/stage_4_5.png", "/textures/stage_1_1.png", "/textures/stage_0_0.png", "/textures/nian_bg.png", "/textures/nian_text.png", "/textures/stage_5_0.png", "/textures/stage_5_1.png", "/textures/strokes_0.png", "/textures/strokes_1.png", "/textures/strokes_1_1.png", "/textures/strokes_2.png", "/textures/strokes_2_1.png", "/textures/strokes_3.png", "/textures/strokes_3_1.png", "/textures/stage6/logo_0.png", "/textures/stage6/board_2006.png", "/textures/stage6/logo_3.png", "/textures/stage6/board_2009.png", "/textures/stage6/board_2010.png", "/textures/stage6/logo_5.png", "/textures/stage6/board_2011.png", "/textures/stage6/logo_7.png", "/textures/stage6/logo_8.png", "/textures/stage6/logo_29.png", "/textures/stage6/logo_30.png", "/textures/stage6/board_2013.png", "/textures/stage6/logo_9.png", "/textures/stage6/logo_10.png", "/textures/stage6/board_2015_1.png", "/textures/stage6/logo_27.png", "/textures/stage6/logo_13.png", "/textures/stage6/logo_25.png", "/textures/stage6/logo_26.png", "/textures/stage6/board_2016_1.png", "/textures/stage6/logo_15.png", "/textures/stage6/logo_1.png", "/textures/stage6/logo_24.png", "/textures/stage6/logo_14.png", "/textures/stage6/board_2017.png", "/textures/stage6/logo_23.png", "/textures/stage6/logo_28.png", "/textures/stage6/board_2012.png", "/textures/stage6/logo_16.png", "/textures/stage6/logo_17.png", "/textures/stage6/board_2008.png", "/textures/stage6/logo_18.png", "/textures/stage6/board_2007.png", "/textures/stage6/logo_19.png", "/textures/stage6/logo_20.png", "/textures/stage6/board_2003.png", "/textures/stage6/logo_21.png", "/textures/stage6/board_2004.png", "/textures/stage6/logo_31.png", "/textures/stage6/board_2002_1.png", "/textures/stage6/logo_33.png", "/textures/stage6/logo_32.png", "/textures/stage6/board_2000_1.png", "/textures/stage6/pic_4.png", "/textures/stage6/board_1999.png", "/textures/stage6/board_2001_1.png", "/textures/stage6/logo_22.png", "/textures/stage6/board_1997.png", "/textures/stage6/board_1998_1.png", "/textures/stage6/pic_5.png", "/stage_3d.jpg"];
      this.fontWidth = 35;
      this.fontHeight = 36;
      this.fontTiming = 500;
      this.stageAniChangeTimes = 2.5;
      //开始阶段变量
      this.speed3d = false;
      this.stopNian = false;
      this.speed = 0;
      this.count = 0;
      this.lastValut = 250;
      this.$stage = document.querySelectorAll(".stage");
      //第一阶段变量
      this.$dot = this.$stage[1].querySelector('.dot');
      
      this.wordFlag = false;
      this.stopSnow = false;
      this.init();
   }
   init(){
      this.loadfingerPrint(4,2,1);
      this.playNian3D();
      this.bindEvent();
   }
   bindEvent(){
      let flag = false;
      //初始阶段事件
      this.$stage[0].querySelector('.fingerprint').addEventListener('touchstart', (e)=>{
         e.preventDefault();
         this.speed3d = true;
         clearTimeout(this.speedDelayTime);
         this.speedDelayTime = setTimeout(()=>{
            flag = true;
         }, 1000);
      });
      this.$stage[0].querySelector('.fingerprint').addEventListener('touchend', (e)=>{
         e.preventDefault();
         console.log(flag)
         if(flag){
            this.speed3d = false;
            clearTimeout(this.speedDelayTime);
         }
      });
      this.$stage[1].querySelector('.text-area-wrap').addEventListener('touchstart', (e)=>{
         this.$dot.className = this.$dot.className.split(' ')[0];
      });
   }
   
   loadfingerPrint(time1, time2, opacity){
      let timeLine = new TimelineLite();
      let $title = this.$stage[0].querySelector('.title-0');
      let $fingerprint = this.$stage[0].querySelector('.fingerprint');
      timeLine.to($title, time1, {
         opacity: opacity
      }).to($fingerprint, time2, {
         opacity: opacity
      })
   }
   playNian3D(){
      let container = this.$stage[0].querySelector('.nian-3d');
      this.scene = new THREE.Scene;//场景
      //相机
      this.camera = new THREE.PerspectiveCamera(45, 750 / window.innerHeight, 1, 2e3);
      this.camera.position.set(200, -200, 2e3);
      this.scene.add(this.camera);
      //灯光
      //环境光，添加到整个场景和所有对象的当前颜色上
      let light = new THREE.AmbientLight(13421772);
      this.scene.add(light);
      //方向光，发出的光线是平行的
      let directLight = new THREE.DirectionalLight(16777215);
      directLight.position.set(200, 50, 200);
      this.scene.add(directLight);
      //render
      this.webGLRender = new THREE.WebGLRenderer({
         alpha: !0
      })
      this.webGLRender.setPixelRatio(window.devicePixelRatio);
      this.webGLRender.setSize(750, window.innerHeight);
      container.appendChild(this.webGLRender.domElement);
      //加载器
      let loaderManager = new THREE.LoadingManager;
      let objLoader = new THREE.OBJLoader(loaderManager);
      objLoader.load('https://img2.cache.netease.com/f2e/wap/demo/xz/nian.js', (jsonObj)=>{
         let basicMaterial = new THREE.LineBasicMaterial({
            color: 12303291,
            linewidth: 1,
            linecap: "round",
            linejoin: "round"
         });
         let meshMaterial = new THREE.MeshLambertMaterial({
            color: 16777215
         });
         jsonObj.traverse((e)=>{
            if(e instanceof THREE.Mesh){
               e.material = meshMaterial;
            }else if(e instanceof THREE.LineSegments){
               e.material = basicMaterial;
            }
         })
         this.frameE = jsonObj;
         jsonObj.position.y = -25;
         jsonObj.scale.x = jsonObj.scale.y = jsonObj.scale.z = 0.5;
         this.scene.add(jsonObj);
         
      })
      this.updateScene();
   }
   updateScene(){
      this.animation = requestAnimationFrame(()=>{this.updateScene()});
      this.speed++;
      if(this.stopNian){
         this.webGLRender.clear();
      }else {
         if(this.speed3d){
            console.log('00000',this.speed3d)
            this.count++;
            if(this.lastValut > 0){
               this.lastValut = 250 * (1 - this.count * this.count / 1e4 / 3.5);
            }
            this.changeCameraPosition(this.speed, 1, 4e3);
         }else{
            console.log('111111',this.speed3d)
            this.count = 0;
            this.lastValut = 250;
            this.changeCameraPosition(this.speed, -1, -400);
         }
         if(this.frameE){
            this.frameE.rotation.y = this.speed * Math.PI / this.lastValut - Math.PI / 2;
         }
         this.camera.lookAt({
            x: 0,
            y: 0,
            z: 0
         })
         this.webGLRender.render(this.scene, this.camera);
      }
      

   }
   changeCameraPosition(value1, value2, z){
      let flag = false;
      if(z>0){
         flag = this.camera.position.z < z;
      }else{
         flag = this.camera.position.z > -z;
      }
      if(flag){
         this.camera.position.z = this.camera.position.z + 10 * (1 - 2 / value1) * value2;
      }
      if(z > 0 && this.camera.position.z > 2500){
         this.speed3d = false;
         this.stopNian = true;
         cancelAnimationFrame(this.animation);
         this.loadfingerPrint(2, 1, 0);
         this.stage1();
      }
   }
   stageShow(index){
      this.$stage[index].style.display = 'block';
      if(index > 1){
         this.$stage[index-1].style.display = 'none';
      }
   }
   destory(index){
      this.$stage[index].parentNode.removeChild(this.$stage[index]);
   }
   //第一阶段
   stage1(){
      this.destory(0);
      this.stageShow(1);
      this.bindStage1Event();
      this.$dot.className += " twinkle"
      let stage1Line = new TimelineLite;
      stage1Line.to(this.$stage[1].querySelector('.text-area-wrap'), 2, {
         opacity: 1
      }).to(this.$stage[1].querySelector('.info-1'), 2, {
         opacity: 1
      }).to(this.$stage[1].querySelector('.info-0'), 2, {
         opacity: 1,
         onComplete: function(){
            TweenMax.set(this.target, {
               className: "+=twinkle"
            })
         }
      })
   }
   bindStage1Event(){
      //第一阶段事件
      this.wordWidth = 0;
      this.$stage[1].querySelector('.text-area-wrap').addEventListener('touchmove', (e)=>{
         this.wordWidth++;
         if(!this.wordFlag){
            if(this.wordWidth < 67){
               this.$stage[1].querySelector('.line-0').style.width = 6 * this.wordWidth + 'px';
            }else{
               this.wordFlag = true;
               this.renderWord(this.srcPerfix+this.bgGroup[6], 12);
            }
         }
      });
   }
   renderWord(img, num){
      let $title = this.$stage[1].querySelector('.info-title');
      let $animateArea = this.$stage[1].querySelector('.animation-area');
      let $snow = this.$stage[1].querySelector('#snow');
      for(var timeLine = new TimelineLite, i=0;i<num;i++)
         $title.appendChild(document.createElement('span'));
      timeLine.set($title, {
         width: this.fontWidth * num,
         height: this.fontHeight
      }).set($title.querySelectorAll("span"), {
         backgroundImage: "url(" + img + ")",
         width: this.fontWidth,
         height: this.fontHeight
      }).staggerTo($title.querySelectorAll("span"), this.fontTiming / 1e3, {
         opacity: 1
      }, "0.25");//每个的间隔时间是0.25s
      let animateLine = new TimelineLite;
      animateLine.to($animateArea, 3, {
         opacity: 1,
         onComplete: () => {
            this.drawSnow();
         },
         ease: Power1.easeIn//ease:缓动：非匀速的线性运动
      }).to($snow, 2, {
         opacity: 1
      }).to($title, 1, {
         opacity: 0,
         delay: this.stageAniChangeTimes
      }).to($animateArea, 2, {
         opacity: 0,
         onComplete: () => {
            this.stage2(), this.stopSnow = true;
            let snowDom = document.getElementById("snow");
            snowDom.parentNode.removeChild(snowDom)
         }
      })
   }
   drawSnow(){
      let canvas = document.getElementById('snow');
      let ctx = this.ctx = canvas.getContext('2d');
      let width = this.snowWidth = canvas.width = 750;
      let height = this.snowHeight = canvas.height = 500;
      let draw = function(){
         this.draw = () => {
            this.g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.sz), 
            this.g.addColorStop(0, "hsla(255,255%,255%,1)"), 
            this.g.addColorStop(1, "hsla(255,255%,255%,0)"), 
            ctx.moveTo(this.x, this.y), 
            ctx.fillStyle = this.g, 
            ctx.beginPath(), 
            ctx.arc(this.x, this.y, this.sz, 0, 2 * Math.PI, !0), 
            ctx.fill();
         }
      }
      for (var Snow, array = [], maxNum = 100, i = 1, g = 1.3, c = 1, u = 0; u < maxNum; ++u){
         Snow = new draw(); 
         Snow.y = Math.random() * (height + 50); 
         Snow.x = Math.random() * width; 
         Snow.t = Math.random() * (2 * Math.PI); 
         Snow.sz = 50 / (10 + 50 * Math.random()) * g; 
         Snow.sp = .15 * Math.pow(.8 * Snow.sz, 2) * i; 
         Snow.sp = Snow.sp < c ? c : Snow.sp; 
      }
      array.push(Snow);
      this.snowArray = array;
      this.updateSnow();
   }
   updateSnow(){
      let item;
      if(!this.stopSnow){
         window.requestAnimationFrame(()=>{this.updateSnow()});
         this.ctx.clearRect(0,0,this.snowWidth, this.snowHeight);
         this.ctx.fillRect(0,0,this.snowWidth, this.snowHeight);;
         this.ctx.fill();
      }
      for(var i=0;i<this.snowArray.length;++i){
         item = this.snowArray[i];
         item.t +=0.05;
         item.t = item.t >= 2 * Math.PI ? 0 : item.t;
         item.y += item.sp;
         item.x += Math.sin(item.t * 1) * (.3 * item.sz);
         item.y > this.snowHeight + 50 && (item.y = -10 - Math.random() * 20);
         item.x > this.snowWidth + 20 && (item.x = -20);
         item.x < -20 && (item.x = this.snowWidth + 20);
         item.draw();
      }
   }
   bindStage2Event(){
      this.wordWidthStage2 = 0;
      this.wordFlagStage2 = false;
      this.$stage[1].querySelector('.text-area-wrap').addEventListener('touchmove', ()=>{
         this.wordWidthStage2++;
         if(!this.wordFlagStage2){
            if(this.wordWidthStage2 < 40){
               this.$stage[1].querySelector('.line-1').style.height = 6 * this.wordWidthStage2 + 'px';
            }else{
               this.wordFlagStage2 = true;
               this.renderWordStage2(this.srcPerfix+this.bgGroup[7], 12);
            }
         }
      })
   }
   stage2(){
      this.bindStage2Event();
      let $infoChildren1 = this.$stage[1].querySelector('.info-1').children[1]
      this.$dot.className += ' twinkle dot-1';
      TweenMax.to($infoChildren1, 1, {
         opacity: 1,
         onComplete: ()=>{
            $infoChildren1.className += 'on';
            TweenMax.to($infoChildren1, 1, {
               opacity: 1
            })
         }
      })
      let $info0 = this.$stage[1].querySelector('.info-0');
      let stage2Line = new TimelineLite;
      stage2Line.to(this.$stage[1].querySelector('.text-area-wrap'), 2, {
         opacity: 1
      }).to(this.$stage[1].querySelector('.info-1'), 2, {
         opacity: 1
      });
      let stage2Line1 = new TimelineLite;
      stage2Line1.to($info0, 2, {
         opacity: 1,
         onComplete: function(){
            TweenMax.set(this.target, {
               className: "+=twinkle"
            })
         }
      }, 1);
      let stage2Line2 = new TimelineLite;
      stage2Line2.to($info0, 2, {
         opacity: 0
      }).to($info0, 1, {
         background: "url(" + this.srcPerfix + this.bgGroup[1] + ")"
      }).to($info0, 2, {
         opacity: 1
      })
   }
   renderWordStage2(img, num){
      let $title = this.$stage[1].querySelector('.info-title');
      let $animateArea = this.$stage[1].querySelectorAll('.animation-area')[1];
      let $linefix0 = this.$stage[1].querySelector('.line-fix-0');
      for(var timeLine = new TimelineLite; $title.hasChildNodes();){
         $title.removeChild($title.firstChild);
      }
      for(var i=0;i<num;i++)
         $title.appendChild(document.createElement('span'));
      timeLine.set($title, {
         width: this.fontWidth * num,
         height: this.fontHeight,
         opacity: 1
      }).set($title.querySelectorAll("span"), {
         backgroundImage: "url(" + img + ")",
         width: this.fontWidth,
         height: this.fontHeight
      }).staggerTo($title.querySelectorAll("span"), this.fontTiming / 1e3, {
         opacity: 1
      }, "0.25");//每个的间隔时间是0.25s
      let animateLine = new TimelineLite;
      animateLine.to($linefix0, 1, {
         opacity: 1
      }).to($animateArea, 3, {
         opacity: 1,
         ease: Power1.easeIn
      }).to($title, 1, {
         opacity: 0,
         delay: this.stageAniChangeTimes
      }).to($animateArea, 2, {
         opacity: 0,
         onComplete: () => {
            this.stage3();
         }
      })
   }
   stage3(){
      console.log('stage3')
   }

}

new create20th();