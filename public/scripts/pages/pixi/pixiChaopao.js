var PIXI = require('pixi.js');
/*var json = require('assets/chaopao.json');
console.log(json)*/

class PIXIChaopao{
   constructor(){
      //this.init();
      this.init2();
   }
   init(){
      this.app = new PIXI.Application(800, 600, {
         backgroundColor: 0x000000
      });
      document.body.appendChild(this.app.view); 
      //加载图片
      let loader = new PIXI.loaders.Loader();
      loader.add('images/chaopao.png', 'images/chaopao.png');
      loader.on('progress', (target, resource)=>{
         console.log('Progress', target.progress);//加载速度
      });
      loader.once('complete', ()=>{
         this.onComplete();
      });
      loader.load();
   }
   onComplete(){
      var texture = PIXI.Texture.fromImage('images/chaopao.png');
      var cutnum = 6;
      //将图片拆分为8帧  
      var width = 720, height = 600;
      var frameArray = [];
      //这种方式只适合所有图片在一直线的合成图
      for(var i = 0; i < cutnum; i++) {
         var rectangle = new PIXI.Rectangle(i * width, 0, width, height);
         var frame = new PIXI.Texture(texture, rectangle);
         frameArray.push(frame);
      }  
      //播放动画
      console.log(frameArray.length)  
      let movieClip = new PIXI.extras.AnimatedSprite(frameArray);  
      movieClip.position.x = 100;  
      movieClip.position.y = 100;  
      movieClip.animationSpeed = parseFloat((20 / 120).toFixed(2));  
      movieClip.play();  
      this.app.stage.addChild(movieClip); 
   }
   init2(){
      this.app = new PIXI.Application();
      document.body.appendChild(this.app.view);
      PIXI.loader.add('spritesheet', 'scripts/assets/chaopao.json').load((data)=>{
         console.log(data)
         this.handleAnimation();
      });
   }
   handleAnimation(){
      let array = [];
      for(var i=0;i<32;i++){
         let texture = PIXI.Texture.fromFrame('chaopao_'+i+'.png');
         array.push(texture);
      }
      var animation = new PIXI.extras.AnimatedSprite(array);
      animation.gotoAndPlay(32);
      this.app.stage.addChild(animation);
      this.app.start();
   }
}
new PIXIChaopao();