/*
PIXI:2D渲染引擎
创建render渲染器
创建container
render添加到dom元素中
创建图片精灵
精灵添加到container
container添加到render中
渲染render
*/
var PIXI = require('pixi.js');
let s1Container, s2Container, s3Container, s3TextCoverBox;
class Potter{
   constructor(){
      this.dvalue = 0;
      this.lastY = 0;
      this.isCanSlideTop = true;
      this.isShowS3Arrow=false;
      this.isShowS3Cover = false;
      this.viewWidth = window.innerWidth;
      this.viewHeight = window.innerHeight;
      this.container = new PIXI.Container();//舞台
      this.loader = PIXI.loader;
      this.srcPerfix = '/images/potter/';
      this.init();

   }
   init(){
      this.initView();
      this.initScroller();
   }
   initView(){
      this.canvasRender1 = new PIXI.CanvasRenderer(this.viewWidth, this.viewHeight);//画布
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
      //画布追加到dom元素中
      document.querySelector('.potter_content').appendChild(this.canvasRender1.view);
      //document.querySelector('.potter_content').appendChild(this.canvasRender2.view);
      /*this.canvasRender2.rootContext.lineJoin = "round";
      this.canvasRender2.rootContext.lineCap = "round";
      this.canvasRender1.rootContext.lineJoin = "round";
      this.canvasRender1.rootContext.lineCap = "round";
      this.canvasRender2.rootContext.shadowBlur = 20;
      this.canvasRender2.rootContext.shadowColor = "#ea494d";*/
   }
   loadFirstPage(){
      this.container.width = this.viewWidth * 20;
      this.container.height = 12000;
      this.mainScene = new PIXI.Container();
      //s1
      this.renderLogo();
      //s2
      this.fillText();
      //s3
      this.fillSchool();

      this.mainScene.addChild(s1Container, s3Container, s2Container);//必须s3在s2前追加
      this.container.addChild(this.mainScene);
      this.bindEvent();
      //必须设置此属性，滚动式才好使，否则滚动不起作用
      this.scroller.setDimensions(this.viewWidth,this.viewHeight,12000,12000);
      this.scroller.scrollTo(0,0,false);
      //this.canvasRender1.render(this.container);
      this.updateLoop();
   }
   renderLogo(){
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
      //this.container.addChild(rectLogo);
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
         //精灵：通过材质创建，或者通过图片直接创建
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
   }
   fillSchool(){
      s3Container = new PIXI.Container();
      s3Container.position.set(0, 4000);
      let schoolData = [];
      for(var i=0;i<50;i++){
         schoolData.push(this.srcPerfix+'school/'+i+'.jpg');
      }
      this.schoolAni = new PIXI.extras.AnimatedSprite.fromImages(schoolData);
      this.s3SchoolBox = new PIXI.Container();
      var s3School=new PIXI.Container();
      s3School.position.set(87,196);
      //天空
      this.s3Sky=new PIXI.Sprite(this.loader.resources[this.srcPerfix+"4/sky.jpg"].texture);
      this.s3Sky.pivot.set(288,151)
      this.s3Sky.position.set(288,151);
      //school
      var s3SchoolMain=new PIXI.Sprite(this.loader.resources[this.srcPerfix+"4/school.png"].texture);
      var s3SchoolRect=new PIXI.Graphics();
      s3SchoolRect.drawRect(0,0, 558,406);
      s3SchoolRect.endFill();
      s3School.mask=s3SchoolRect;
      //船
      var s3Boats=new PIXI.Container();
      var boatPosition=[{x:114,y:295,flag:1,flagValue:9},{x:236,y:301,flag:-1,flagValue:10},{x:301,y:304,flag:1,flagValue:7},{x:367,y:303,flag:-1,flagValue:8},{x:462,y:301,flag:1,flagValue:6}]
      for(var i=0;i<5;i++){
         var boatSprite=PIXI.Sprite.fromImage(this.srcPerfix+"4/boat"+i+".png")
         boatSprite.position.set(boatPosition[i].x,boatPosition[i].y)
         s3Boats.addChild(boatSprite)
      }
      setInterval(function(){
         for(var i=0;i<5;i++){
            s3Boats.children[i].position.x+=boatPosition[i].flag/12;
            if(s3Boats.children[i].position.x>=boatPosition[i].x+boatPosition[i].flagValue||s3Boats.children[i].position.x<=boatPosition[i].x-boatPosition[i].flagValue){
               boatPosition[i].flag*=-1;
            }
         }
      },60)
      //云
      var s3SchoolCloud=new PIXI.Sprite(this.loader.resources[this.srcPerfix+"4/cloud1.png"].texture);
      s3SchoolCloud.position.set(87-55,196+91)
      this.s3Text=new PIXI.Sprite(this.loader.resources[this.srcPerfix+"4/text.png"].texture);
      this.s3Text.position.set(48,120)
      s3School.addChild(this.s3Sky,s3SchoolMain,s3Boats,s3SchoolRect)
      this.showMask(s3School,0,0)
      this.s3Sky.mask=s3SchoolRect;
      var s3Cover=new PIXI.Sprite(this.loader.resources[this.srcPerfix+"4/cover.png"].texture);
      s3Cover.position.set(41,195)
      s3TextCoverBox=new PIXI.Container();
      this.s3TextCover=new PIXI.Sprite(this.loader.resources[this.srcPerfix+"4/text_cover.png"].texture);
      this.s3TextCover.height=this.viewHeight+100;

      s3TextCoverBox.position.set(40,0);
      s3TextCoverBox.addChild(this.s3TextCover)
      this.s3SchoolBox.addChild(s3School,s3SchoolCloud,s3Cover,s3TextCoverBox)
      this.s3FirstText=new PIXI.Container();
      var s3TextData=[60,230,280,280,180]
      for(var i=0;i<5;i++){
         var s3TextBox=new PIXI.Container();
         var s3BoxBg=new PIXI.Sprite(this.loader.resources[this.srcPerfix+"text/bg.png"].texture)
         s3BoxBg.position.set(-1625,157)
         var s3FT=new PIXI.Sprite(this.loader.resources[this.srcPerfix+"3/"+i+".png"].texture)
         s3FT.position.set(122+s3TextData[i],0)
         s3TextBox.addChild(s3BoxBg,s3FT)
         s3TextBox.position.set(0,this.viewHeight-160*(i+2))
         this.s3FirstText.addChild(s3TextBox)
      }
      this.s3HandBox=new PIXI.Container();
      var s3Hand=new PIXI.Sprite(this.loader.resources[this.srcPerfix+"4/hand.png"].texture);
      var s3HandLine=new PIXI.Sprite(this.loader.resources[this.srcPerfix+"4/line.png"].texture);
      s3Hand.position.set(400,8)
      new TWEEN.Tween(s3Hand.position)
         .to({x:2},1500)
         .easing(TWEEN.Easing.Quadratic.Out)
         .delay(200)
         .repeat(Infinity)
         .start();
      var s3ArrowText=new PIXI.Sprite(this.loader.resources[this.srcPerfix+"4/slide_right.png"].texture);
      s3ArrowText.position.set(166,80)
      this.s3HandBox.addChild(s3HandLine,s3Hand,s3ArrowText)
      this.s3HandBox.position.set(204,620)
      s3Container.addChild(this.s3SchoolBox,this.s3Text, this.schoolAni, this.s3FirstText,this.s3HandBox)
      //s3Container.addChild(this.s3SchoolBox,this.s3FirstText);
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
         if(top >= 4000-this.viewHeight && left <= 300){
            console.log(top)
            for(var i=0;i<this.s3FirstText.children.length;i++){
               this.s3FirstText.children[i].alpha=(600-(top-(4000-this.viewHeight)-i*160))/600
            }
            if(top>4000){
               this.s3FirstText.visible=false;
            }else{
               this.s3FirstText.visible=true;
            }
            s3Container.position.y = top;
            var step = 10;
            var index = parseInt((top-4000)/step);
            if(index<=49&&index>=0){
               //console.log(index)
               this.schoolAni.visible = true;
               this.schoolAni.gotoAndStop(index);
            }
            if(top>4000+50*step){
               console.log('000000000000000000')
               this.schoolAni.visible=false;
               this.forbidTop(4000+50*step,top)
               s3Container.position.y=4000+50*step;
               this.mainScene.position.y=-(4000+50*step);
            }
         }else if(top<4000-this.viewHeight){
            console.log('11111111111111111111')
            this.schoolAni.visible=true;
            this.schoolAni.gotoAndStop(0)
            s3Container.position.y=4000;
         }
         if(top<nowHeight && left< 100){
            this.forbidLeft(0,left)
            this.s3HandBox.visible=false;
            if(!this.isCanSlideTop){
               top = nowHeight;
               this.scroller.__scrollTop=nowHeight;
               this.mainScene.position.y=-nowHeight;
            }
         }else if(top >= nowHeight){
            this.isCanSlideTop = false;
         }
         if(left>=0&&left<2000&&top>=nowHeight){
            //动画播放完毕
            if(left<441){
               this.schoolAni.visible=false;
               this.schoolAni.gotoAndStop(49)
               s3Container.position.y=nowHeight;
               this.s3SchoolBox.position.x=left;
               this.s3HandBox.position.x=204+left;
               this.s3Text.position.x=48+left;
               this.s3Sky.scale.set(1+(left)/5000)
            }else if(left>=441){
               this.s3SchoolBox.position.x=441;
               this.s3Text.position.x=48+441;
            }
            if(left<=1092){
               s3TextCoverBox.position.x=left+40;
            }
            else if(left>1092){
               s3TextCoverBox.position.x=1092+40;
            }
            if(left>=50&&left<=1092||left>=1880){
               this.s3HandBox.visible=false;
               this.isShowS3Arrow=false;
            }else if(left<50||left>1092){
               this.s3HandBox.visible=true;
               if(!this.isShowS3Arrow){
                  this.isShowS3Arrow=true;
               }
               if(!this.isShowS3Cover){
                  this.isShowS3Cover=true;
                  new TWEEN.Tween({x:-100})
                  .to({x:40},300)
                  .onUpdate(function(){
                     s3TextCoverBox.position.x=this.x;
                  })
                  .start()
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
      //舞台添加到画布中
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
   forbidTop(target,left,force){
      this.scroller.__enableScrollY=false;
      this.mainScene.position.x=-target;
      if(Math.abs(top-target)>=50&&!force){
         new TWEEN.Tween(this.scroller)
            .to({__scrollTop:target},100)
            .start();
      }else{
         this.scroller.__scrollTop=target;
      }
      this.mainScene.position.y = -target;
   }
}

new Potter();