import lib from 'pages/imageSrc'
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
      this.stage.autoClear = false;
      var container = new createjs.Container();
      this.stage.addChild(container);
      createjs.Touch.enable(this.stage);

//    testTxt = new createjs.Text();
//    stage.addChild(testTxt);
//    testTxt.x = 600;
//    testTxt.y = 10;
//    testTxt.scaleX = 3;
//    testTxt.scaleY = 3;

      this.loader = new createjs.LoadQueue(true);
      //loader.addEventListener("fileload", handleFileLoad);
      this.loader.addEventListener("complete", ()=>{
         this.loadLoadingComplete();
      });
      this.loader.loadManifest(lib.manifest);
      createjs.Ticker.setFPS(60);
      createjs.Ticker.addEventListener('tick',()=>{
         this.stage.update();
      });
   }
   loadLoadingComplete(){
      for(var i=0;i<lib.manifest.length;i++){
         var id = lib.manifest[i].id;
         var image1=this.loader.getResult(id);
         var bitmap1=new createjs.Bitmap(image1);
         this.stage.addChild(bitmap1);
         this.stage.update();
      }
   }
    
}

new CreateTest();