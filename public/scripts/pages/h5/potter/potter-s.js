var PIXI = require('pixi.js');
let s1Container, s2Container;
class Potter{
   constructor(){
      this.dvalue = 0;
      this.lastY = 0;
      this.viewWidth = window.innerWidth;
      this.viewHeight = window.innerHeight;
      this.container = new PIXI.Container();//stage
      this.loader = PIXI.loader;
      this.srcPerfix = '/images/potter/';
      this.init();

   }
   init(){
      this.initView();
      this.initScroller();
   }
   initView(){
      this.canvasRender1 = new PIXI.CanvasRenderer(this.viewWidth, this.viewHeight);
      this.canvasRender2 = new PIXI.CanvasRenderer(this.viewWidth, this.viewHeight, {
         transparent: true
      });
      
      this.loader.add(this.srcPerfix+'1/bg.png')
            .add(this.srcPerfix+'1/inner.jpg')
            .add(this.srcPerfix+'1/text1.png')
            .add(this.srcPerfix+'1/text2.png')
            .add(this.srcPerfix+'1/logo.png')
            .add(this.srcPerfix+'mask/0.png')
            .add(this.srcPerfix+'mask/1.png')
            .add(this.srcPerfix+'mask/2.png')
            .add(this.srcPerfix+'mask/3.png')
            .add(this.srcPerfix+'text/0.png')
            .add(this.srcPerfix+'text/1.png')
            .add(this.srcPerfix+'text/2.png')
            .add(this.srcPerfix+'text/3.png')
            .add(this.srcPerfix+'text/4.png')
            .add(this.srcPerfix+'text/5.png')
            .add(this.srcPerfix+'text/6.png')
            .add(this.srcPerfix+'text/7.png')
            .add(this.srcPerfix+'text/8.png')
            .add(this.srcPerfix+'text/9.png')
            .add(this.srcPerfix+'text/10.png')
            .add(this.srcPerfix+'text/11.png')
            .add(this.srcPerfix+'text/12.png')
            .add(this.srcPerfix+'text/13.png')
            .add(this.srcPerfix+'text/14.png')
            .add(this.srcPerfix+'text/15.png')
            .add(this.srcPerfix+'text/16.png')
            .add(this.srcPerfix+'text/17.png')
            .add(this.srcPerfix+'text/18.png')
            .add(this.srcPerfix+'text/19.png')
            .add(this.srcPerfix+'text/20.png')
            .add(this.srcPerfix+'text/bottom.png')
            .add(this.srcPerfix+'text/bg.png')
            .add(this.srcPerfix+'2/rect.png')
            .add(this.srcPerfix+'3/0.png')
            .add(this.srcPerfix+'3/1.png')
            .add(this.srcPerfix+'3/2.png')
            .add(this.srcPerfix+'3/3.png')
            .add(this.srcPerfix+'3/4.png')
            .add(this.srcPerfix+'4/first_text.png')
            .add(this.srcPerfix+'4/sky.jpg')
            .add(this.srcPerfix+'4/school.png')
            .add(this.srcPerfix+'4/cloud.png')
            .add(this.srcPerfix+'4/cloud1.png')
            .add(this.srcPerfix+'4/cover.png')
            .add(this.srcPerfix+'4/text_cover.png')
            .add(this.srcPerfix+'4/text.png')
            .add(this.srcPerfix+'4/arrow.png')
            .add(this.srcPerfix+'4/slide_right.png')
            .add(this.srcPerfix+'4/hand.png')
            .add(this.srcPerfix+'4/line.png')
            .add(this.srcPerfix+'5/first_text.png')
            .add(this.srcPerfix+'5/title.png')
            .add(this.srcPerfix+'5/bg.jpg')
            .add(this.srcPerfix+'5/cover.png')
            .add(this.srcPerfix+'5/candle1.png')
            .add(this.srcPerfix+'5/candle2.png')
            .add(this.srcPerfix+'5/candle3.png')
            .add(this.srcPerfix+'5/choose_line.png')
            .add(this.srcPerfix+'5/line1.png')
            .add(this.srcPerfix+'5/line2.png')
            .add(this.srcPerfix+'5/line3.png')
            .add(this.srcPerfix+'5/line4.png')
            .add(this.srcPerfix+'5/super_line.png')
            .add(this.srcPerfix+'5/arrow.png')
            .add(this.srcPerfix+'5/arrow_down.png')
            .add(this.srcPerfix+'5/left_foot.png')
            .add(this.srcPerfix+'5/right_foot.png')
            .add(this.srcPerfix+'5/text1.png')
            .add(this.srcPerfix+'5/text2.png')
            .add(this.srcPerfix+'5/text3.png')
            .add(this.srcPerfix+'5/text4.png')
            .add(this.srcPerfix+'5/school1.png')
            .add(this.srcPerfix+'5/school2.png')
            .add(this.srcPerfix+'5/school3.png')
            .add(this.srcPerfix+'5/school4.png')
            .add(this.srcPerfix+'paint1/bg.png')
            .add(this.srcPerfix+'paint2/bg.png')
            .add(this.srcPerfix+'paint3/bg.png')
            .add(this.srcPerfix+'paint2/line.png')
            .add(this.srcPerfix+'paint2/text.png')
            .add(this.srcPerfix+'paint2/digest.png')
            .add(this.srcPerfix + "6/feather.png")
            .add(this.srcPerfix + "6/feather_fail.png")
            .add(this.srcPerfix + "6/top_cover.png")
            .add(this.srcPerfix + "6/top_bg.png")
            .add(this.srcPerfix + "6/man.png")
            .add(this.srcPerfix + "6/tower.png")
            .add(this.srcPerfix + "6/mountain.png")
            .add(this.srcPerfix + "6/0.png")
            .add(this.srcPerfix + "fly/circle.png")
            .add(this.srcPerfix + "fly/left_wings.png")
            .add(this.srcPerfix + "fly/right_wings.png")
            .add(this.srcPerfix + "6/line.png")
            .add(this.srcPerfix + "6/goto_class.png")
            .add(this.srcPerfix + "6/arrow.png")
            .add(this.srcPerfix + "6/top_text.png")
            .add(this.srcPerfix + "6/outside.png")
            .add(this.srcPerfix + "6/inside.png")
            .add(this.srcPerfix + "6/text1.png")
            .add(this.srcPerfix + "6/text2.png")
            .add(this.srcPerfix + "6/short_line.png")
            .add(this.srcPerfix + "6/bg.jpg")
            .add(this.srcPerfix + "6/fly_dtext.png")
            .add(this.srcPerfix + "6/digest.png")
            .add(this.srcPerfix + "6/mouse.png")
            .add(this.srcPerfix + "6/mouse_fail.png")
            .add(this.srcPerfix + "6/black.png")
            .add(this.srcPerfix + "6/change_digest.png")
            .add(this.srcPerfix + "6/change_dtext.png")
            .add(this.srcPerfix + "6/dog.png")
            .add(this.srcPerfix + "6/cat.png")
            .add(this.srcPerfix + "6/leave_btn.png")
            .add(this.srcPerfix + "6/leave_black.png")
            .add(this.srcPerfix + "6/leave_text.png")
            .add(this.srcPerfix + "6/bottom_text.png")
            .add(this.srcPerfix + "6/ball.png")
            .add(this.srcPerfix + "6/door.png")
            .add(this.srcPerfix + "6/top_tower.png")
            .add(this.srcPerfix + "6/grass.png")
            .add(this.srcPerfix + "6/top_mountain.png")
            .add(this.srcPerfix + "6/cover.png")
            .add(this.srcPerfix + "6/slowly.png")
            .add(this.srcPerfix + "book/bg.png")
            .add(this.srcPerfix + "book/next.png")
            .add(this.srcPerfix + "book/text1.png")
            .add(this.srcPerfix + "book/text2.png")
            .add(this.srcPerfix + "book/text3.png")
            .add(this.srcPerfix + "book/text4.png")
            .add(this.srcPerfix + "book/text5.png")
            .add(this.srcPerfix + "book/light.png")
            .add(this.srcPerfix + "book/Ltext1.png")
            .add(this.srcPerfix + "book/Ltext2.png")
            .add(this.srcPerfix + "book/Ltext3.png")
            .add(this.srcPerfix + "man/0.png")
            .add(this.srcPerfix + "man/1.png")
            .add(this.srcPerfix + "man/2.png")
            .add(this.srcPerfix + "man/3.png")
            .add(this.srcPerfix + "man/4.png")
            .add(this.srcPerfix + "man/5.png")
            .add(this.srcPerfix + "school/0.jpg")
            .add(this.srcPerfix + "school/1.jpg")
            .add(this.srcPerfix + "school/2.jpg")
            .add(this.srcPerfix + "school/3.jpg")
            .add(this.srcPerfix + "school/4.jpg")
            .add(this.srcPerfix + "school/5.jpg")
            .add(this.srcPerfix + "school/6.jpg")
            .add(this.srcPerfix + "school/7.jpg")
            .add(this.srcPerfix + "school/8.jpg")
            .add(this.srcPerfix + "school/9.jpg")
            .add(this.srcPerfix + "school/10.jpg")
            .add(this.srcPerfix + "school/11.jpg")
            .add(this.srcPerfix + "school/12.jpg")
            .add(this.srcPerfix + "school/13.jpg")
            .add(this.srcPerfix + "school/14.jpg")
            .add(this.srcPerfix + "school/15.jpg")
            .add(this.srcPerfix + "school/16.jpg")
            .add(this.srcPerfix + "school/17.jpg")
            .add(this.srcPerfix + "school/18.jpg")
            .add(this.srcPerfix + "school/19.jpg")
            .add(this.srcPerfix + "school/20.jpg")
            .add(this.srcPerfix + "school/21.jpg")
            .add(this.srcPerfix + "school/22.jpg")
            .add(this.srcPerfix + "school/23.jpg")
            .add(this.srcPerfix + "school/24.jpg")
            .add(this.srcPerfix + "school/25.jpg")
            .add(this.srcPerfix + "school/26.jpg")
            .add(this.srcPerfix + "school/27.jpg")
            .add(this.srcPerfix + "school/28.jpg")
            .add(this.srcPerfix + "school/29.jpg")
            .add(this.srcPerfix + "school/30.jpg")
            .add(this.srcPerfix + "school/31.jpg")
            .add(this.srcPerfix + "school/32.jpg")
            .add(this.srcPerfix + "school/33.jpg")
            .add(this.srcPerfix + "school/34.jpg")
            .add(this.srcPerfix + "school/35.jpg")
            .add(this.srcPerfix + "school/36.jpg")
            .add(this.srcPerfix + "school/37.jpg")
            .add(this.srcPerfix + "school/38.jpg")
            .add(this.srcPerfix + "school/39.jpg")
            .add(this.srcPerfix + "school/40.jpg")
            .add(this.srcPerfix + "school/41.jpg")
            .add(this.srcPerfix + "school/42.jpg")
            .add(this.srcPerfix + "school/43.jpg")
            .add(this.srcPerfix + "school/44.jpg")
            .add(this.srcPerfix + "school/45.jpg")
            .add(this.srcPerfix + "school/46.jpg")
            .add(this.srcPerfix + "school/47.jpg")
            .add(this.srcPerfix + "school/48.jpg")
            .add(this.srcPerfix + "school/49.jpg")
            .load(()=>{
               this.loadFirstPage();
            });
      document.querySelector('.potter_content').appendChild(this.canvasRender1.view);
      //document.querySelector('.potter_content').appendChild(this.canvasRender2.view);
      this.canvasRender2.rootContext.lineJoin = "round";
      this.canvasRender2.rootContext.lineCap = "round";
      this.canvasRender1.rootContext.lineJoin = "round";
      this.canvasRender1.rootContext.lineCap = "round";
      this.canvasRender2.rootContext.shadowBlur = 20;
      this.canvasRender2.rootContext.shadowColor = "#ea494d";
   }
   loadFirstPage(){
      this.container.width = this.viewWidth * 20;
      this.container.height = 12000;
      this.mainScene = new PIXI.Container();
      //s1
      s1Container = new PIXI.Container();
      s1Container.position.set(-1,0);
      let logo = new PIXI.Sprite(this.loader.resources[this.srcPerfix+'1/logo.png'].texture);
      logo.position.set(25, 20);
      let rectLogo = new PIXI.Graphics();
      rectLogo.lineStyle(0, 16724736, 1);
      rectLogo.beginFill(16776174);
      rectLogo.drawRect(0, 0, 20 * this.viewWidth, 12e3);
      rectLogo.endFill();
      this.container.addChild(rectLogo);
      s1Container.addChild(rectLogo);
      //s1图片
      let containerInner = new PIXI.Container();
      this.s1Inner = new PIXI.Sprite(this.loader.resources[this.srcPerfix+'1/inner.jpg'].texture);
      this.s1Inner.position.set(136.5, 0);
      s1Container.addChild(containerInner);
      let rectInner = new PIXI.Graphics();
      rectInner.beginFill(10053375);
      rectInner.drawRect(213, 280, 328, 326);
      rectInner.endFill();
      containerInner.mask = rectInner;
      containerInner.addChild(rectInner);
      containerInner.addChild(this.s1Inner);
      //mask
      this.showMask(containerInner, 50, 50);
      //s1背景
      let s1bg = new PIXI.Sprite(this.loader.resources[this.srcPerfix+'1/bg.png'].texture);
      s1bg.position.set(87, 0);
      s1Container.addChild(s1bg, logo);
      //s2
      this.fillText();

      
   }
   showMask(containerInner, x, y){
      var maskContainer = new PIXI.Container();
      x = x ? x : 0;
      y = y ? y : 0;
      maskContainer.position.set(x, y);
      let mask0 = new PIXI.Sprite(this.loader.resources[this.srcPerfix+'mask/0.png'].texture);
      let mask1 = new PIXI.Sprite(this.loader.resources[this.srcPerfix+'mask/2.png'].texture);
      let mask2 = new PIXI.Sprite(this.loader.resources[this.srcPerfix+'mask/3.png'].texture);
      mask0.visible = true;
      mask1.visible = false;
      mask2.visible = false;
      let num = 0;
      setInterval(()=>{
         num ++;
         num % 30 == 8 ? mask1.visible = true : mask1.visible = false;
         num % 24 == 16 ? mask2.visible = true : mask2.visible = false;
         num % 32 <= 4 ? mask0.alpha = .8 : num % 32 >= 6 && num % 32 <= 10 ? mask0.alpha = .8 : mask0.alpha = .2;
      }, 60);
      maskContainer.addChild(mask1, mask2, mask0);
      containerInner.addChild(maskContainer);
   }
   fillText(){
      s2Container = new PIXI.Container();
      let textArray = [{
            texture: this.loader.resources[this.srcPerfix + "text/0.png"].texture,
            speed: 0
         }, {
            texture: this.loader.resources[this.srcPerfix + "text/1.png"].texture,
            speed: .5,
            repeat: !0
         }, {
            texture: this.loader.resources[this.srcPerfix + "text/2.png"].texture,
            speed: 4
         }, {
            texture: this.loader.resources[this.srcPerfix + "text/3.png"].texture,
            speed: 1.8
         }, {
            texture: this.loader.resources[this.srcPerfix + "text/4.png"].texture,
            speed: .8
         }, {
            texture: this.loader.resources[this.srcPerfix + "text/5.png"].texture,
            speed: .8,
            repeat: !0
         }, {
            texture: this.loader.resources[this.srcPerfix + "text/6.png"].texture,
            speed: 1.5
         }, {
            texture: this.loader.resources[this.srcPerfix + "text/7.png"].texture,
            speed: 1
         }, {
            texture: this.loader.resources[this.srcPerfix + "text/8.png"].texture,
            speed: .5,
            repeat: !0
         }, {
            texture: this.loader.resources[this.srcPerfix + "text/9.png"].texture,
            speed: 1
         }, {
            texture: this.loader.resources[this.srcPerfix + "text/10.png"].texture,
            speed: .6
         }, {
            texture: this.loader.resources[this.srcPerfix + "text/11.png"].texture,
            speed: .7
         }, {
            texture: this.loader.resources[this.srcPerfix + "text/12.png"].texture,
            speed: .9,
            repeat: !0
         }, {
            texture: this.loader.resources[this.srcPerfix + "text/13.png"].texture,
            speed: .7
         }, {
            texture: this.loader.resources[this.srcPerfix + "text/14.png"].texture,
            speed: 3
         }, {
            texture: this.loader.resources[this.srcPerfix + "text/15.png"].texture,
            speed: .8
         }, {
            texture: this.loader.resources[this.srcPerfix + "text/16.png"].texture,
            speed: .6,
            repeat: !0
         }, {
            texture: this.loader.resources[this.srcPerfix + "text/17.png"].texture,
            speed: 0
         }, {
            texture: this.loader.resources[this.srcPerfix + "text/18.png"].texture,
            speed: 2
         }, {
            texture: this.loader.resources[this.srcPerfix + "text/20.png"].texture,
            speed: .8
         }];
      //this.textContainer = new PIXI.Container();//q
      let rectCanvas = new PIXI.Graphics();
      rectCanvas.beginFill(16776174);
      rectCanvas.drawRect(-this.viewWidth, 0, 4 * this.viewWidth, 20*160);
      rectCanvas.endFill();
      s2Container.addChild(rectCanvas);
      for(var i = 0; i < textArray.length; i++){
         let itemContainer = new PIXI.Container();
         let bg = new PIXI.Sprite(this.loader.resources[this.srcPerfix+'text/bg.png'].texture);
         bg.position.set(-1625, 157);
         itemContainer.addChild(bg);
         if(textArray[i].repeat){
            let repeatContainer = new PIXI.Container();
            let repeat1 = new PIXI.Sprite(textArray[i].texture);
            let repeat2 = new PIXI.Sprite(textArray[i].texture);
            repeat2.position.x = repeat2.width;
            repeatContainer.position.y = (160 - repeat1.height) / 2;
            repeatContainer.addChild(repeat1, repeat2);
            let width=repeat2.width;
            new TWEEN.Tween(repeatContainer.position)
               .to({x:-width},80*width*textArray[i].speed)
               .repeat(Infinity)
               .start();
            itemContainer.addChild(repeatContainer);
         }else{
            let repeatContainer = new PIXI.Sprite(textArray[i].texture);
            repeatContainer.position.set(50, (160 - repeatContainer.height) / 2);
            itemContainer.speed = textArray[i].speed ? textArray[i].speed : 0;
            itemContainer.addChild(repeatContainer);
            if(i == textArray.length - 1){
               let sprite = new PIXI.Sprite(this.loader.resources[this.srcPerfix+'text/bottom.png'].texture);
               sprite.position.set(-752, 160);
               itemContainer.addChild(sprite);
            }
         }
         itemContainer.position.set(0, 160 * i);
         s2Container.addChild(itemContainer);
      }
      this.rectContainer = new PIXI.Container();
      for (var i = 0; i < 120; i++) {
         var rect = new PIXI.Sprite(this.loader.resources[this.srcPerfix+'2/rect.png'].texture);
         rect.position.set(7 * (i - 5), 0);
         this.rectContainer.addChild(rect);
      }
      this.rectContainer.position.set(0, 2720);
      s2Container.addChild(this.rectContainer);
      s2Container.pivot.set(375, 1680);
      s2Container.position.set(375, 2480);

      this.mainScene.addChild(s1Container, s2Container);
      this.container.addChild(this.mainScene);
      this.bindEvent();
      //必须设置此属性，滚动式才好使，否则滚动不起作用
      this.scroller.setDimensions(this.viewWidth,this.viewHeight,12000,12000);
      this.scroller.scrollTo(0,0,false);
      this.canvasRender1.render(this.container);
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
   initScroller(){
      var scrollFun = (left, top, zoom) => {
         let nowHeight = 4500;
         let nowLeft = 5950;
         if(top<nowHeight-200){
            left=0;
         }
         if(left>0&&left<nowLeft-200){
            top=nowHeight;
         }

         this.mainScene.position.x=-left;
         this.mainScene.position.y=-top;
         if(top<697){
            this.s1Inner.position.y=top/1.5;
            this.mainScene.position.x=0;
            this.forbidLeft(0,left)
         }
         if(top>=0&&top<5000){
            for(var i=0;i<s2Container.children.length;i++){
               var item=s2Container.children[i];
               if(top+(this.viewHeight-900)-i*160>=0){
                  var speed=item.speed;
                  if(speed){
                     var _x=50-(top+(this.viewHeight-900)-(i)*160)*speed;
                     if(item.children[1].width+_x>=700){
                        item.children[1].position.x=_x;
                     }
                  }
               }
            }
            if(top>=800){
               this.dvalue=(top-800)-this.lastY;
               var _rotate=s2Container.rotation;
               new TWEEN.Tween({rotate:_rotate})
                  .to({rotate:(this.dvalue/200)},100)
                  .onUpdate(function(){
                     s2Container.rotation=this.rotate;
                     if(Math.abs(this.rotate)>0.1){
                        s2Container.scale.set(1+1.8*(Math.abs(this.rotate)-0.1),1+1.8*(Math.abs(this.rotate)-0.1));
                     }else{
                        s2Container.scale.set(1,1);
                     }
                  })
               .start();
               this.lastY=(top-800);
            }else if(top<800){
               var _rotate=s2Container.rotation;
               new TWEEN.Tween({rotate:_rotate})
                  .to({rotate:0},300)
                  .onUpdate(function(){
                     s2Container.rotation=this.rotate;
                     s2Container.scale.set(1+5*(Math.abs(this.rotate)),1+5*(Math.abs(this.rotate)));
                  })
                  .start();
            }
            if(top>=17*160-(this.viewHeight-800)){
               var index=parseInt((top-(17*160-(this.viewHeight-800)))/(this.viewHeight/110));
               for(var i=0;i<120;i++){
                  this.rectContainer.children[i].visible=false;
                  if(i<=index){
                     this.rectContainer.children[i].visible=true
                  }
               }
            }
         }
      }
      this.scroller = new Scroller(scrollFun, {
         zooming: false,
         animating : true,
         bouncing : false,
         animationDuration:1000,
         speedMultiplier:0.5
      })
   
   }
   updateLoop(){
      TWEEN.update();
      requestAnimationFrame(()=>{this.updateLoop()});
      this.canvasRender1.render(this.container);
   }
   forbidLeft(target,left,force){
      this.scroller.__enableScrollX=false;
      this.mainScene.position.x=-target;
      if(Math.abs(left-target)>=50&&!force){
         new TWEEN.Tween(this.scroller)
            .to({__scrollLeft:target},100)
            .start();
      }else{
         this.scroller.__scrollLeft=target;
      }
   }
}

new Potter();