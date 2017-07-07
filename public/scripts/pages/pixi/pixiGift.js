var PIXI = require('pixi.js');

class PIXIGift{
   constructor(){
      this.init();
   }
   init(){
      //创建舞台
      this.app = new PIXI.Application();
      document.getElementById('pixiGift').appendChild(this.app.view);
      this.initPic();
   }
   initPic(){
      let pic = [];
      for(var i=0;i<120;i++){
         i = i<10?'00'+i:i<100?'0'+i: i;
         pic.push('http://img2.cache.netease.com/liveshow/test/youting/g_28_'+i+'.png');
      }
      let picSprite = new PIXI.extras.AnimatedSprite.fromImages(pic);
      picSprite.play();
      picSprite.onFrameChange = () => {
         if(picSprite.currentFrame == 119){
            picSprite.stop();//停止
            picSprite.visible = !1;//隐藏
         }
      }
      this.app.stage.addChild(picSprite);
   }
}

new PIXIGift();