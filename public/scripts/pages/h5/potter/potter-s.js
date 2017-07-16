var PIXI = require('pixi.js');

class Potter{
   constructor(){
      this.viewWidth = window.innerWidth;
      this.viewHeight = window.innerHeight;
      this.container = new PIXI.Container();//N
      this.loader = PIXI.loader;
      //this.loadResource = new PIXI.Sprite();
      this.srcPerfix = '/images/potter/';
      this.init();
   }
   init(){

      this.initView();
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
            /*.add(this.srcPerfix+'text/0.png')
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
            .add(this.srcPerfix+'5/bg.png')
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
            .add(this.srcPerfix + "school/49.jpg")*/
            .load(()=>{
               console.log('11111')
               this.loadFirstPage();
            });
      document.querySelector('.potter_content').appendChild(this.canvasRender1.view);
      document.querySelector('.potter_content').appendChild(this.canvasRender2.view);
      this.canvasRender2.rootContext.lineJoin = "round";
      this.canvasRender2.rootContext.lineCap = "round";
      this.canvasRender1.rootContext.lineJoin = "round";
      this.canvasRender1.rootContext.lineCap = "round";
      this.canvasRender2.rootContext.shadowBlur = 20;
      this.canvasRender2.rootContext.shadowColor = "#ea494d";
   }
   loadFirstPage(){
      let containerLogo = new PIXI.Container();
      containerLogo.position.set(-1,0);
      let logo = new PIXI.Sprite(this.loader.resources[this.srcPerfix+'1/logo.png'].texture);
      logo.position.set(25, 20);
      let rectLogo = new PIXI.Graphics();
      rectLogo.lineStyle(0, 16724736, 1);
      rectLogo.beginFill(16776174);
      rectLogo.drawRect(0, 0, 20 * this.viewWidth, 12e3);
      rectLogo.endFill();
      containerLogo.addChild(rectLogo);

      let containerInner = new PIXI.Container();
      let inner = new PIXI.Sprite(this.loader.resources[this.srcPerfix+'1/inner.jpg'].texture);
      inner.position.set(136.5, 0);
      containerLogo.addChild(containerInner);
      let rectInner = new PIXI.Graphics();
      rectInner.beginFill(10053375);
      rectInner.drawRect(213, 280, 328, 326);
      rectInner.endFill();
      containerInner.mask = rectInner;
      containerInner.addChild(rectInner);
      containerInner.addChild(inner);
      let bgSprite = new PIXI.Sprite(this.loader.resources[this.srcPerfix+'1/bg.png'].texture);
      bgSprite.position.set(87, 0);
      containerLogo.addChild(bgSprite, logo);
      this.showMask(containerInner, 50, 50);
      this.canvasRender1.render(containerLogo);
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
}

new Potter();