
'use strict';

var C3D = require('libs/c3d/c3d.js');


class ZWJTest{
   constructor(){
      this.init();
   }
   init(){
      this.lastMouseX = 0;
      this.lastMouseY = 0;
      this.curMouseX = 0;
      this.curMouseY = 0;
      this.lastAngleX = 0;
      this.lastAngleY = 0;
      this.angleX = 0;
      this.angleY = 0;
      this.move = 200;
      this.touchstart = false;
      //创建场景
      this.stage = new C3D.Stage();
      //console.log(stage)
      this.stage.size(window.innerWidth, window.innerHeight).material({
         color: '#ddd'
      }).update();
      this.stage.camera.position(0,0,-200).updateT();
      //添加stage到dom元素内，即可渲染背景颜色#ddd
      this.mainDom = document.getElementById('main');
      this.mainDom.append(this.stage.el);
      var panoRect = {w:2586, h:1170};
      var bgData = [
         {url:'images/zwj/p1.png'},
         {url:'images/zwj/p2.png'},
         {url:'images/zwj/p3.png'},
         {url:'images/zwj/p4.png'},
         {url:'images/zwj/p5.png'},
         {url:'images/zwj/p6.png'},
         {url:'images/zwj/p7.png'},
         {url:'images/zwj/p8.png'},
         {url:'images/zwj/p9.png'},
         {url:'images/zwj/p10.png'},
         {url:'images/zwj/p11.png'},
         {url:'images/zwj/p12.png'},
         {url:'images/zwj/p13.png'},
         {url:'images/zwj/p14.png'},
         {url:'images/zwj/p15.png'},
         {url:'images/zwj/p16.png'},
         {url:'images/zwj/p17.png'},
         {url:'images/zwj/p18.png'},
         {url:'images/zwj/p19.png'},
         {url:'images/zwj/p20.png'}

      ];
      this.pano = this.createPano(bgData, panoRect);
      //console.log(pano)
      this.pano.sp.position(0,0,-400).updateT();
      //1个stage中放有多个sprite，每个sprite中有自己的box，或plane
      this.stage.addChild(this.pano.sp);
      this.bindEvent();
      this.animate();
   }
   bindEvent(){
      this.mainDom.addEventListener('touchstart', (e)=>{
         console.log(e)
         var touch = e.touches[0];
         this.lastMouseX = touch.pageX;
         this.lastMouseY = touch.pageY;
         this.lastAngleX = this.angleX;
         this.lastAngleY = this.angleY;
         this.curMouseY = touch.pageY;
         this.curMouseX = touch.pageX;
      });
      this.mainDom.addEventListener('touchmove', (e)=>{
         console.log(e);
         this.touchstart = true;
         var touch = e.touches[0];
         this.curMouseX = touch.pageX;
         this.curMouseY = touch.pageY;

         this.angleX += Math.floor((this.curMouseX - this.lastMouseX + this.lastAngleX - this.angleX) * 0.03);
         this.angleY += Math.floor((this.curMouseY - this.lastMouseY + this.lastAngleY - this.angleY) * 0.03);
         this.angleY = Math.max(-10, Math.min(10, this.angleY));

         this.move = this.move - Math.abs(this.angleX * 0.1) ;

         if(this.move < 50 ){ 
            this.move = 50
         }

      });
      this.mainDom.addEventListener('touchend', (e)=>{
         this.touchstart = false;
      })
   }
   createPano(imgs, rect){
      var _len = imgs.length;
      var _step = rect.w/_len;
      var _radius = Math.floor(_step/2/Math.tan(Math.PI/_len));
      var _sp = new C3D.Sprite();
      for(var i = 0; i< _len; i++){
         var _p = new C3D.Plane();
         var _r = 360 /_len*i;
         var _a = Math.PI * 2/_len * i;
         _p.size(_step, rect.h).position(Math.sin(_a)*_radius, 0, -Math.cos(_a) * _radius).rotation(0, -_r, 0).material({
            image: imgs[i].url,
            repeat: 'no-repeat',
            bothsides: false
         }).update();
         _sp.addChild(_p);
      }
      return {sp: _sp}
   }
   animate(){
      this.pano.sp.rotation(this.angleY, -this.angleX, 0).updateT();

      if(this.touchstart && this.move != 200){
         this.stage.camera.position(0,0,-this.move).updateT();
      } else if(!this.touchstart && this.move !=200){
         this.stage.camera.move(0,0,-5).updateT();
         this.move += 5;
         if(this.move >= 200){
            this.move = 200;
         }
      }

      requestAnimationFrame(()=>{this.animate()});
   }
}

new ZWJTest();


//"use strict"  
/*function showValue(value) {  
    value = "Foo"  
    console.log(value)        // Foo  
    console.log('===========',arguments) // 严格模式 hi  
                        // 非严格模式 Foo  
}  
  
showValue("hi") */