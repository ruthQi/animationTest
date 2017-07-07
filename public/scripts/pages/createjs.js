import lib from 'pages/imageSrc';
import {TimelineLite} from 'gsap';
class CreateTest{
   constructor(){
      //this.init();
      this.init2();
   }
   init(){
      var stage = new createjs.Stage("demoCanvas");
      //创建一个形状的显示对象
      var circle = new createjs.Shape();
      circle.graphics.beginFill("red").drawCircle(0, 0, 40);
      //形状实例的设置位置
      circle.x = circle.y = 50;
      //添加形状实例到舞台显示列表
      stage.addChild(circle);
      //更新阶段将呈现下一帧
      stage.update();
   }
   init2(){
      this.stage = new createjs.Stage("demoCanvas");
      this.stage.autoClear = true;
      var container = new createjs.Container();
      this.stage.addChild(container);
      this.loader = new createjs.LoadQueue(true);
      this.loader.loadFile({
         src: 'images/chaopao.png', id: 'chaopao'
      })
      this.loader.addEventListener("complete", ()=>{
         this.loadLoadingComplete();
      });
   }
   loadLoadingComplete(){
      this.initAnimation();
   }
   initAnimation(){
      var image1 = this.loader.getResult('chaopao');
      var data = {
         framerate: 10,
         images: [image1],
         frames: {regX: -40, regY: -30,width:720, height:767},//width:165, height:292
         animations: {
            'run': [0, 102, 'run']
         }
      }
      var spriteSheet = new createjs.SpriteSheet(data);
      var animation = new createjs.Sprite(spriteSheet, 'run');
      this.stage.addChild(animation);
      createjs.Ticker.on('tick', this.handleTick);
   }
   handleTick = () => {
      this.stage.update();
   }
    
}

new CreateTest();