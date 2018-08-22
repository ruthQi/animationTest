var $ = require('libs/jquery.js');
require('pixi.js');
(function($){
    function checkMobile(){
       if(/iphone|nokia|sony|ericsson|mot|samsung|sgh|lg|philips|panasonic|alcatel|lenovo|cldc|midp|wap|mobile/i.test(navigator.userAgent.toLowerCase())&&!/pc=1/.test(location.search)){   
           return true; 
       }else{
           return false;
       }
   }
   var isMobile=checkMobile();
   if(!isMobile){
      var WIDTH=640;
      var HEIGHT=window.innerHeight;
      $(".potter_wrap").height(HEIGHT);
      $(".potter_wrap").html('');
      $(".potter_wrap").css({"background-color":"#fff","background-image":"url(http://img2.cache.netease.com/cnews/2017/7/5/20170705172935bbec8.jpg)","background-repeat":"no-repeat","background-position":"center 100px"})
      return;
   }
   var HEIGHT=window.innerHeight;
   var WIDTH=window.innerWidth;
   function weiXin(){
       var ua = window.navigator.userAgent.toLowerCase();
       if(ua.match(/MicroMessenger/i) == 'micromessenger'){
           return true;
       }else{
           return false;
       }
   }
   /*var isWeiXin=weiXin();
   if(!isWeiXin){
      h5Share.init({
              title: '开 打 法 魔 用 能 只 章 文 篇 这',
              desc: '纪念哈利波特的魔法世界20周年',
              url: window.location.href,
              img: 'http://img2.cache.netease.com/cnews/2017/7/5/2017070517065992079.jpg'
          });
   }*/
   function audioAutoPlay(id){
    var audio = document.getElementById(id);
    var play = function() {
        document.removeEventListener("WeixinJSBridgeReady", play);
        document.removeEventListener("YixinJSBridgeReady", play);
        audio.play();
    };
    //weixin
    document.addEventListener("WeixinJSBridgeReady", play, false);
    //yixin
    document.addEventListener('YixinJSBridgeReady', play, false);
   }
   audioAutoPlay('audio4');
   function PreLoadAudio(id){
       var audio = document.getElementById(id);
       var play = function() {
           document.removeEventListener("WeixinJSBridgeReady", play);
           document.removeEventListener("YixinJSBridgeReady", play);
           audio.play();
           audio.pause();
       };
       //weixin
       document.addEventListener("WeixinJSBridgeReady", play, false);
       //yixin
       document.addEventListener('YixinJSBridgeReady', play, false);
   }
   /*PreLoadAudio("audio2");
   PreLoadAudio("audio3");
   PreLoadAudio("school1");
   PreLoadAudio("school2");
   PreLoadAudio("school3");
   PreLoadAudio("school4");
   PreLoadAudio("change_fail");
   PreLoadAudio("change_success");
   PreLoadAudio("fly_fail");
   PreLoadAudio("fly_success");
   PreLoadAudio("paint1");
   PreLoadAudio("paint2");
   PreLoadAudio("word1");
   PreLoadAudio("word2");
   PreLoadAudio("word3");
   PreLoadAudio("word4");
   PreLoadAudio("word5");
   PreLoadAudio("fly");*/
    $(function(){
      HEIGHT=window.innerHeight;
      WIDTH=window.innerWidth;
      $(".end").bind("touchmove",function(e){
         e.preventDefault();
      })
      //Aliases
      var Container=PIXI.Container,
      autoDetectRenderer=PIXI.autoDetectRenderer,
      loader=PIXI.loader,
      resources=PIXI.loader.resources,
      TextureCache=PIXI.utils.TextureCache,
      Texture=PIXI.Texture,
      Text=PIXI.Text,
      globalTicker = new PIXI.ticker.Ticker(),
      Sprite=PIXI.Sprite,
      Rectangle=PIXI.Rectangle,
      Graphics=PIXI.Graphics;
      var u = navigator.userAgent;
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
       var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
   // function hengshuping(){ 
   //    if(window.orientation==180||window.orientation==0){ 
   //       HEIGHT=window.innerHeight;
   //       WIDTH=window.innerWidth;
   //       alert(HEIGHT)
   //        $(".potter_content").height(HEIGHT);
   //       $(".potter_content").width(WIDTH); 
       
   //       } 
   //    if(window.orientation==90||window.orientation==-90){ 
   //            HEIGHT=window.innerHeight;
   //          WIDTH=window.innerWidth;
   //           $(".potter_content").height(HEIGHT);
   //          $(".potter_content").width(WIDTH);  

   //        } 
   //     } 
   // window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false); 

      var stage=new Container();
      stage.width=WIDTH;
      stage.height=HEIGHT;
      var renderer=new PIXI.CanvasRenderer(WIDTH,HEIGHT);
      var renderer2=new PIXI.CanvasRenderer(WIDTH,HEIGHT,{transparent: true});
      $(".potter_content")[0].appendChild(renderer.view);
      $(".potter_content")[0].appendChild(renderer2.view);
      var imgInfo="http://img2.cache.netease.com/f2e/news/potter/images/";
      // var imgInfo="images/";
      loader
      .add(imgInfo+"1/bg.png")
      .add(imgInfo+"1/inner.jpg")
      .add(imgInfo+"1/text1.png")
      .add(imgInfo+"1/text2.png")
      .add(imgInfo+"1/logo.png")

      .add(imgInfo+"text/0.png")
      .add(imgInfo+"text/1.png")
      .add(imgInfo+"text/2.png")
      .add(imgInfo+"text/3.png")
      .add(imgInfo+"text/4.png")
      .add(imgInfo+"text/5.png")
      .add(imgInfo+"text/6.png")
      .add(imgInfo+"text/7.png")
      .add(imgInfo+"text/8.png")
      .add(imgInfo+"text/9.png")
      .add(imgInfo+"text/10.png")
      .add(imgInfo+"text/11.png")
      .add(imgInfo+"text/12.png")
      .add(imgInfo+"text/13.png")
      .add(imgInfo+"text/14.png")
      .add(imgInfo+"text/15.png")
      .add(imgInfo+"text/16.png")
      .add(imgInfo+"text/17.png")
      .add(imgInfo+"text/18.png")
      .add(imgInfo+"text/19.png")
      .add(imgInfo+"text/20.png")
      .add(imgInfo+"text/bottom.png")
      .add(imgInfo+"text/bg.png")

      .add(imgInfo+"2/rect.png")

      .add(imgInfo+"3/0.png")
      .add(imgInfo+"3/1.png")
      .add(imgInfo+"3/2.png")
      .add(imgInfo+"3/3.png")
      .add(imgInfo+"3/4.png")

      .add(imgInfo+"4/first_text.png")
      .add(imgInfo+"4/sky.jpg")
      .add(imgInfo+"4/school.png")
      .add(imgInfo+"4/cloud.png")
      .add(imgInfo+"4/cloud1.png")
      .add(imgInfo+"4/cover.png")
      .add(imgInfo+"4/text_cover.png")
      .add(imgInfo+"4/text.png")
      .add(imgInfo+"4/arrow.png")
      .add(imgInfo+"4/slide_right.png")
      .add(imgInfo+"4/hand.png")
      .add(imgInfo+"4/line.png")

      .add(imgInfo+"5/first_text.png")
      .add(imgInfo+"5/title.png")
      .add(imgInfo+"5/bg.jpg")
      .add(imgInfo+"5/cover.png")
      .add(imgInfo+"5/candle1.png")
      .add(imgInfo+"5/candle2.png")
      .add(imgInfo+"5/candle3.png")
      .add(imgInfo+"5/choose_line.png")
      .add(imgInfo+"5/line1.png")
      .add(imgInfo+"5/line2.png")
      .add(imgInfo+"5/line3.png")
      .add(imgInfo+"5/line4.png")
      .add(imgInfo+"5/super_line.png")
      .add(imgInfo+"5/arrow.png")
      .add(imgInfo+"5/arrow_down.png")
      .add(imgInfo+"5/left_foot.png")
      .add(imgInfo+"5/right_foot.png")
      .add(imgInfo+"5/text1.png")
      .add(imgInfo+"5/text2.png")
      .add(imgInfo+"5/text3.png")
      .add(imgInfo+"5/text4.png")
      .add(imgInfo+"5/school1.png")
      .add(imgInfo+"5/school2.png")
      .add(imgInfo+"5/school3.png")
      .add(imgInfo+"5/school4.png")

      .add(imgInfo+"paint1/bg.png")
      .add(imgInfo+"paint2/bg.png")
      .add(imgInfo+"paint3/bg.png")
      .add(imgInfo+"paint2/line.png")
      .add(imgInfo+"paint2/text.png")
      .add(imgInfo+"paint2/digest.png")

      .add(imgInfo+"mask/0.png")
      .add(imgInfo+"mask/1.png")
      .add(imgInfo+"mask/2.png")
      .add(imgInfo+"mask/3.png")

      .add(imgInfo+"6/feather.png")
      .add(imgInfo+"6/feather_fail.png")
      .add(imgInfo+"6/top_cover.png")
      .add(imgInfo+"6/top_bg.png")
      .add(imgInfo+"6/man.png")
      .add(imgInfo+"6/tower.png")
      .add(imgInfo+"6/mountain.png")
      .add(imgInfo+"6/0.png")
      .add(imgInfo+"fly/circle.png")
      .add(imgInfo+"fly/left_wings.png")
      .add(imgInfo+"fly/right_wings.png")
      .add(imgInfo+"6/line.png")
      .add(imgInfo+"6/goto_class.png")
      .add(imgInfo+"6/arrow.png")
      .add(imgInfo+"6/top_text.png")
      .add(imgInfo+"6/outside.png")
      .add(imgInfo+"6/inside.png")
      .add(imgInfo+"6/text1.png")
      .add(imgInfo+"6/text2.png")
      .add(imgInfo+"6/short_line.png")
      .add(imgInfo+"6/bg.jpg")
      .add(imgInfo+"6/fly_dtext.png")
      .add(imgInfo+"6/digest.png")
      .add(imgInfo+"6/mouse.png")
      .add(imgInfo+"6/mouse_fail.png")
      .add(imgInfo+"6/black.png")
      .add(imgInfo+"6/change_digest.png")
      .add(imgInfo+"6/change_dtext.png")
      .add(imgInfo+"6/dog.png")
      .add(imgInfo+"6/cat.png")
      .add(imgInfo+"6/leave_btn.png")
      .add(imgInfo+"6/leave_black.png")
      .add(imgInfo+"6/leave_text.png")
      .add(imgInfo+"6/bottom_text.png")
      .add(imgInfo+"6/ball.png")
      .add(imgInfo+"6/door.png")
      .add(imgInfo+"6/top_tower.png")
      .add(imgInfo+"6/grass.png")
      .add(imgInfo+"6/top_mountain.png")
      .add(imgInfo+"6/cover.png")
      .add(imgInfo+"6/slowly.png")

      .add(imgInfo+"book/bg.png")
      .add(imgInfo+"book/next.png")
      .add(imgInfo+"book/text1.png")
      .add(imgInfo+"book/text2.png")
      .add(imgInfo+"book/text3.png")
      .add(imgInfo+"book/text4.png")
      .add(imgInfo+"book/text5.png")
      .add(imgInfo+"book/light.png")
      .add(imgInfo+"book/Ltext1.png")
      .add(imgInfo+"book/Ltext2.png")
      .add(imgInfo+"book/Ltext3.png")
      .add(imgInfo+"man/0.png")
      .add(imgInfo+"man/1.png")
      .add(imgInfo+"man/2.png")
      .add(imgInfo+"man/3.png")
      .add(imgInfo+"man/4.png")
      .add(imgInfo+"man/5.png")

      .add(imgInfo+"school/0.jpg")
      .add(imgInfo+"school/1.jpg")
      .add(imgInfo+"school/2.jpg")
      .add(imgInfo+"school/3.jpg")
      .add(imgInfo+"school/4.jpg")
      .add(imgInfo+"school/5.jpg")
      .add(imgInfo+"school/6.jpg")
      .add(imgInfo+"school/7.jpg")
      .add(imgInfo+"school/8.jpg")
      .add(imgInfo+"school/9.jpg")
      .add(imgInfo+"school/10.jpg")
      .add(imgInfo+"school/11.jpg")
      .add(imgInfo+"school/12.jpg")
      .add(imgInfo+"school/13.jpg")
      .add(imgInfo+"school/14.jpg")
      .add(imgInfo+"school/15.jpg")
      .add(imgInfo+"school/16.jpg")
      .add(imgInfo+"school/17.jpg")
      .add(imgInfo+"school/18.jpg")
      .add(imgInfo+"school/19.jpg")
      .add(imgInfo+"school/20.jpg")
      .add(imgInfo+"school/21.jpg")
      .add(imgInfo+"school/22.jpg")
      .add(imgInfo+"school/23.jpg")
      .add(imgInfo+"school/24.jpg")
      .add(imgInfo+"school/25.jpg")
      .add(imgInfo+"school/26.jpg")
      .add(imgInfo+"school/27.jpg")
      .add(imgInfo+"school/28.jpg")
      .add(imgInfo+"school/29.jpg")
      .add(imgInfo+"school/30.jpg")
      .add(imgInfo+"school/31.jpg")
      .add(imgInfo+"school/32.jpg")
      .add(imgInfo+"school/33.jpg")
      .add(imgInfo+"school/34.jpg")
      .add(imgInfo+"school/35.jpg")
      .add(imgInfo+"school/36.jpg")
      .add(imgInfo+"school/37.jpg")
      .add(imgInfo+"school/38.jpg")
      .add(imgInfo+"school/39.jpg")
      .add(imgInfo+"school/40.jpg")
      .add(imgInfo+"school/41.jpg")
      .add(imgInfo+"school/42.jpg")
      .add(imgInfo+"school/43.jpg")
      .add(imgInfo+"school/44.jpg")
      .add(imgInfo+"school/45.jpg")
      .add(imgInfo+"school/46.jpg")
      .add(imgInfo+"school/47.jpg")
      .add(imgInfo+"school/48.jpg")
      .add(imgInfo+"school/49.jpg")
      .on("progress", loadProgressHandler)
      .load(setup);

      var mainScene,rightScene;
      var s1Inner;
      var s2,s2RectBox,s3,s3FirstText,s3SchoolBox,s3TextCover,s3Text,s3HandBox,p3Ani;
      var s4Main,schoolAni,s4Box,s4Circle,s4FirstText,s3Sky,s3TextCoverBox;
      var chooseIndex=0;
      var s5TableBg,s5Arrow1,s5Arrow2,s5HatAni,p1Ani,p2Ani,p2Circle,s5Paint2,s5P2Line,s5P2LineMask,s5P2Text,s5ArrowText;
      var manBox,flyManData,ballData,s6TopMountain,s6TopTower,s6Ball,s6F1,s6FlyAni,s6Mountain,s6Tower,fly,s6,mainMask,footBox,s6Arrow,flyTextAni,feather,flyExample,changeExample,s6FlyDText,featherFail,smoke,mouse,mouseFail,s6RectBox,changeText,s6ChangeDText,s6Dog,s6Cat,s6Text,s6Next,s6Light,s6LightTextBox,s6Text1,s6Text2,s6Text3,s6Main,s6Book;
      var drawScene,flyBtn,changeBtn,leaveBtn,leaveBtnImg,leaveText;
      var lineContainer,circleContainer,testLineContainer,mainLineContainer;
      var audioBox=[$("#audio4")[0],$("#audio4")[0],$("#audio3")[0],$("#audio2")[0]]
      var schoolAudioBox=[$("#school1")[0],$("#school2")[0],$("#school3")[0],$("#school4")[0]]
      var manAudioBox=[$("#word1")[0],$("#word2")[0],$("#word3")[0],$("#word4")[0],$("#word5")[0]]
      var s6FlyData=[];
      for(var i=0;i<51;i++){
         s6FlyData.push(imgInfo+"flynext/"+i+".png")
      }
      var flyTextData=[];
      for(var i=0;i<75;i++){
         flyTextData.push(imgInfo+"flytext/xuanfu_000"+i+".png")
      }
      var bookData=[];
      for(var i=0;i<70;i++){
         bookData.push(imgInfo+"book/"+i+".png")
      }
      var arrowData=[
         {x:-367,y:-177},
         {x:-261,y:-83},
         {x:-257,y:45},
         {x:-375,y:163},
      ]
      var nowHeight=4500;
      var nowLeft=5950;
      function loadProgressHandler(loader, resource) {
         $(".splash-percentage").html(parseInt(loader.progress))
      }
      var isPlayFail=false;
      function setup(){
         $("#loading").fadeOut(300)
         HEIGHT=window.innerHeight;
            WIDTH=window.innerWidth;
         stage.width=WIDTH*20;
         stage.height=12000;

         mainScene=new Container();
         //s1
         var s1=new Container();
         s1.position.set(-1,0)
         var logo=new Sprite(loader.resources[imgInfo+"1/logo.png"].texture);
         logo.position.set(25,20)
         var rectangle3 = new Graphics();
         rectangle3.lineStyle(0, 0xFF3300, 1);
         rectangle3.beginFill(0xfffbee);
         rectangle3.drawRect(0, 0, WIDTH*20, 12000);
         rectangle3.endFill();
         stage.addChild(rectangle3);
         s1.addChild(rectangle3)
         //s1图片
         var s1Box=new Container();
         s1Inner=new Sprite(loader.resources[imgInfo+"1/inner.jpg"].texture)
         s1Inner.position.set(136.5,0)
         s1.addChild(s1Box)
         var s1b1Mask = new Graphics();
         s1b1Mask.beginFill(0x9966FF);
         s1b1Mask.drawRect(213, 280, 328, 326);
         s1b1Mask.endFill();
         s1Box.mask=s1b1Mask;
         s1Box.addChild(s1b1Mask);
            //mask
         function MASK(target,x,y){
            var maskBox=new Container();
            x=x?x:0;
            y=y?y:0;
            maskBox.position.set(x,y)
            var mask0=new Sprite(loader.resources[imgInfo+"mask/0.png"].texture);
            var mask2=new Sprite(loader.resources[imgInfo+"mask/2.png"].texture);
            var mask3=new Sprite(loader.resources[imgInfo+"mask/3.png"].texture);
            mask0.visible=true;
            mask2.visible=false;
            mask3.visible=false;
            var maskStep=0;
            setInterval(function(){
               maskStep++;
               maskStep%30==8?mask2.visible=true:mask2.visible=false;
               maskStep%24==16?mask3.visible=true:mask3.visible=false;
               maskStep%32<=4?mask0.alpha=0.8:
               maskStep%32>=6&&maskStep%32<=10?mask0.alpha=0.8:
                     mask0.alpha=0.2;
            },60)
            maskBox.addChild(mask2,mask3,mask0)
            // var s1b1Mask = new Graphics();
            // s1b1Mask.beginFill(0x9966FF);
            // s1b1Mask.drawRect(0, 0, 671, 711);
            // s1b1Mask.endFill();
            // maskBox.addChild(s1b1Mask)
            target.addChild(maskBox)
         }
         s1Box.addChild(s1Inner)
         new MASK(s1Box,50,50)
         var s1Cover=new Sprite(loader.resources[imgInfo+"1/bg.png"].texture)
         s1Cover.position.set(87,0);
         s1.addChild(s1Cover,logo)
         //s2
         s2=new Container();
         var s2Data=[
            {
               texture:loader.resources[imgInfo+"text/0.png"].texture,
               speed:0,
            },
            {
               texture:loader.resources[imgInfo+"text/1.png"].texture,
               speed:0.5,
               repeat:true,
            },
            {
               texture:loader.resources[imgInfo+"text/2.png"].texture,
               speed:4,
            },
            {
               texture:loader.resources[imgInfo+"text/3.png"].texture,
               speed:1.8,
            },
            {
               texture:loader.resources[imgInfo+"text/4.png"].texture,
               speed:0.8,
            },
            {
               texture:loader.resources[imgInfo+"text/5.png"].texture,
               speed:0.8,
               repeat:true,
            },
            {
               texture:loader.resources[imgInfo+"text/6.png"].texture,
               speed:1.5,
            },
            {
               texture:loader.resources[imgInfo+"text/7.png"].texture,
               speed:1,
            },
            {
               texture:loader.resources[imgInfo+"text/8.png"].texture,
               speed:0.5,
               repeat:true,
            },
            {
               texture:loader.resources[imgInfo+"text/9.png"].texture,
               speed:1,
            },
            {
               texture:loader.resources[imgInfo+"text/10.png"].texture,
               speed:0.6,
            },
            {
               texture:loader.resources[imgInfo+"text/11.png"].texture,
               speed:0.7,
            },
            {
               texture:loader.resources[imgInfo+"text/12.png"].texture,
               speed:0.9,
               repeat:true,
            },
            {
               texture:loader.resources[imgInfo+"text/13.png"].texture,
               speed:0.7,
            },
            {
               texture:loader.resources[imgInfo+"text/14.png"].texture,
               speed:3,
            },
            {
               texture:loader.resources[imgInfo+"text/15.png"].texture,
               speed:0.8,
            },
            {
               texture:loader.resources[imgInfo+"text/16.png"].texture,
               speed:0.6,
               repeat:true,
            },
            {
               texture:loader.resources[imgInfo+"text/17.png"].texture,
               speed:0,
            },
            {
               texture:loader.resources[imgInfo+"text/18.png"].texture,
               speed:2,
            },
            {
               texture:loader.resources[imgInfo+"text/20.png"].texture,
               speed:0.8,
            },
         ]
         var s2Bg=new Graphics();
         s2Bg.beginFill(0xfffbee);
         s2Bg.drawRect(-WIDTH, 0, WIDTH*4, 20*160);
         s2Bg.endFill();
         s2.addChild(s2Bg)
         for(var i=0;i<s2Data.length;i++){
            var s2Box=new Container();
            var s2BoxBg=new Sprite(loader.resources[imgInfo+"text/bg.png"].texture)
            s2BoxBg.position.set(-1625,157)
            s2Box.addChild(s2BoxBg)
            if(s2Data[i].repeat){
               var s2BoxMain=new Container()
               var s2BoxMain1=new Sprite(s2Data[i].texture)
               var s2BoxMain2=new Sprite(s2Data[i].texture)
               s2BoxMain2.position.x=s2BoxMain2.width;
               s2BoxMain.position.y=(160-s2BoxMain1.height)/2;
               s2BoxMain.addChild(s2BoxMain1,s2BoxMain2)
               var width=s2BoxMain2.width
               new TWEEN.Tween(s2BoxMain.position)
               .to({x:-width},80*width*s2Data[i].speed)
               .repeat(Infinity)
               .start();
               s2Box.addChild(s2BoxMain)     
            }
            else{
               var s2BoxMain=new Sprite(s2Data[i].texture)
               s2BoxMain.position.set(50,(160-s2BoxMain.height)/2)
               s2Box.speed=s2Data[i].speed?s2Data[i].speed:0;
               s2Box.addChild(s2BoxMain)
               if(i==s2Data.length-1){
                  var s2Bottom=new Sprite(loader.resources[imgInfo+"text/bottom.png"].texture)
                  s2Bottom.position.set(-752,160)
                  s2Box.addChild(s2Bottom)
               }
            }
            s2Box.position.set(0,160*i);
            s2.addChild(s2Box)
         }
         s2RectBox=new Container();
         for(var i=0;i<120;i++){
            var rect=new Sprite(loader.resources[imgInfo+"2/rect.png"].texture)
            rect.position.set((i-5)*7,0)
            s2RectBox.addChild(rect)
         }
         s2RectBox.position.set(0,160*17);
         s2.addChild(s2RectBox)
         s2.pivot.set(375,3360/2)
         s2.position.set(375,800+3360/2);
         //s3
         s3=new Container();
         s3.position.set(0,4000)
         var schoolData=[]
         for(var i=0;i<50;i++){
            schoolData.push(imgInfo+"school/"+i+".jpg")
         }
         schoolAni=new PIXI.extras.AnimatedSprite.fromImages(schoolData);

         s3SchoolBox=new Container();
         var s3School=new Container();
         s3School.position.set(87,196);
         s3Sky=new Sprite(loader.resources[imgInfo+"4/sky.jpg"].texture);
         s3Sky.pivot.set(288,151)
         s3Sky.position.set(288,151)
         var s3SchoolMain=new Sprite(loader.resources[imgInfo+"4/school.png"].texture);
         var s3SchoolRect=new Graphics();
         s3SchoolRect.drawRect(0,0, 558,406);
         s3SchoolRect.endFill();
         s3School.mask=s3SchoolRect;
         var s3Boats=new Container();
         var boatPosition=[{x:114,y:295,flag:1,flagValue:9},{x:236,y:301,flag:-1,flagValue:10},{x:301,y:304,flag:1,flagValue:7},{x:367,y:303,flag:-1,flagValue:8},{x:462,y:301,flag:1,flagValue:6}]
         for(var i=0;i<5;i++){
            var boatSprite=PIXI.Sprite.fromImage(imgInfo+"4/boat"+i+".png")
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
         var s3SchoolCloud=new Sprite(loader.resources[imgInfo+"4/cloud1.png"].texture);
         s3SchoolCloud.position.set(87-55,196+91)
         s3Text=new Sprite(loader.resources[imgInfo+"4/text.png"].texture);
         s3Text.position.set(48,120)
         s3School.addChild(s3Sky,s3SchoolMain,s3Boats,s3SchoolRect)
         new MASK(s3School,0,0)
         s3Sky.mask=s3SchoolRect;
         var s3Cover=new Sprite(loader.resources[imgInfo+"4/cover.png"].texture);
         s3Cover.position.set(41,195)
         s3TextCoverBox=new Container();
         s3TextCover=new Sprite(loader.resources[imgInfo+"4/text_cover.png"].texture);
         s3TextCover.height=HEIGHT+100;

         s3TextCoverBox.position.set(40,0);
         s3TextCoverBox.addChild(s3TextCover)
         s3SchoolBox.addChild(s3School,s3SchoolCloud,s3Cover,s3TextCoverBox)
         s3FirstText=new Container();
         var s3TextData=[60,230,280,280,180]
         for(var i=0;i<5;i++){
            var s3TextBox=new Container();
            var s3BoxBg=new Sprite(loader.resources[imgInfo+"text/bg.png"].texture)
            s3BoxBg.position.set(-1625,157)
            var s3FT=new Sprite(loader.resources[imgInfo+"3/"+i+".png"].texture)
            s3FT.position.set(122+s3TextData[i],0)
            s3TextBox.addChild(s3BoxBg,s3FT)
            s3TextBox.position.set(0,HEIGHT-160*(i+2))
            s3FirstText.addChild(s3TextBox)
         }
         s3HandBox=new Container();
         var s3Hand=new Sprite(loader.resources[imgInfo+"4/hand.png"].texture);
         var s3HandLine=new Sprite(loader.resources[imgInfo+"4/line.png"].texture);
         s3Hand.position.set(400,8)
         new TWEEN.Tween(s3Hand.position)
         .to({x:2},1500)
         .easing(TWEEN.Easing.Quadratic.Out)
         .delay(200)
         .repeat(Infinity)
         .start();
         var s3ArrowText=new Sprite(loader.resources[imgInfo+"4/slide_right.png"].texture);
         s3ArrowText.position.set(166,80)
         s3HandBox.addChild(s3HandLine,s3Hand,s3ArrowText)
         s3HandBox.position.set(204,620)
         s3.addChild(s3SchoolBox,s3Text,schoolAni,s3FirstText,s3HandBox)
         //s4
         var s4=new Container();
         //进度条
         //s5 分院帽
         var s5=new Container();
         s5.position.set(WIDTH+441,nowHeight)
         var s5FirstText=new Sprite(loader.resources[imgInfo+"5/first_text.png"].texture);
         s5FirstText.position.set(0,74+80)
         var s5ChooseBox=new Container();
         s5ChooseBox.position.set(545,113)
         var hatData=[];
         for(var i=0;i<12;i++){
            hatData.push(imgInfo+"hat/"+i+".png")
         }
         s5HatAni=new PIXI.extras.AnimatedSprite.fromImages(hatData);
         s5HatAni.position.set(8,53)
         new TWEEN.Tween(s5HatAni.position)
         .to({y:63},1000)
         .repeat(Infinity)
         .yoyo(true)
         .start();
         s5HatAni.animationSpeed=0.16;
         var s5ChooseTitle=new Sprite(loader.resources[imgInfo+"5/title.png"].texture);
         var s5ChooseMain=new Container();
         s5ChooseMain.position.set(225,74)
         var s5Table=new Container();
         s5TableBg=new Sprite(loader.resources[imgInfo+"5/bg.jpg"].texture);
         s5TableBg.position.set(0,-40)
         var s5TableMask= new Graphics();
         s5TableMask.beginFill(0x9966FF);
         s5TableMask.drawRect(0, 0, 340, 358);
         s5TableMask.endFill();
         s5Table.addChild(s5TableBg)
         s5Table.mask=s5TableMask;

         var s5Candle1=new Sprite(loader.resources[imgInfo+"5/candle1.png"].texture);
         var s5Candle2=new Sprite(loader.resources[imgInfo+"5/candle2.png"].texture);
         var s5Candle3=new Sprite(loader.resources[imgInfo+"5/candle3.png"].texture);
         s5Candle1.position.set(33,133)
         s5Candle2.position.set(55,70)
         s5Candle3.position.set(80,103)
         new TWEEN.Tween(s5Candle1.position)
         .to({y:113},2000)
         .repeat(Infinity)
         .yoyo(true)
         .start();
         new TWEEN.Tween(s5Candle2.position)
         .to({y:110},2500)
         .repeat(Infinity)
         .yoyo(true)
         .start();
         new TWEEN.Tween(s5Candle3.position)
         .to({y:83},2300)
         .repeat(Infinity)
         .yoyo(true)
         .start();
         var s5LineBox=new Container()
         var s5chooseLine=new Sprite(loader.resources[imgInfo+"5/choose_line.png"].texture);
         var s5chooseLine1=new Sprite(loader.resources[imgInfo+"5/line1.png"].texture);
         var s5chooseLine2=new Sprite(loader.resources[imgInfo+"5/line2.png"].texture);
         var s5chooseLine3=new Sprite(loader.resources[imgInfo+"5/line3.png"].texture);
         var s5chooseLine4=new Sprite(loader.resources[imgInfo+"5/line4.png"].texture);
         s5chooseLine1.position.set(156,0)
         s5chooseLine2.position.set(262,94)
         s5chooseLine3.position.set(266,221-38)
         s5chooseLine4.position.set(148,339-156)
         s5chooseLine1.visible=false;
         s5chooseLine2.visible=false;
         s5chooseLine3.visible=false;
         s5chooseLine4.visible=false;
         var s5ChooseData=[s5chooseLine1,s5chooseLine2,s5chooseLine3,s5chooseLine4]
         s5LineBox.addChild(s5chooseLine,s5chooseLine1,s5chooseLine2,s5chooseLine3,s5chooseLine4)
         s5LineBox.position.set(310,-5)
         var circleSuperBox=new Container();
         function addCircle(x,y,index){
            var circleBox=new Container();
            var center=new Graphics();
            center.beginFill(0xb30200);
            center.drawCircle(0, 0, 6);
            center.endFill();
            center.position.set(73/2,73/2)
            circleBox.addChild(center)
            circleBox.pivot.set(73/2,73/2)
            circleBox.index=index;
            circleBox.position.set(x+73/2,y+73/2);
            var circle1=new Container();
            var circle11=PIXI.Sprite.fromImage(imgInfo+"5/circle1.png")
            var circle12=PIXI.Sprite.fromImage(imgInfo+"5/gray.png")
            circle12.visible=false;
            circle1.addChild(circle11,circle12)
            var circle2=new Container();
            var circle21=PIXI.Sprite.fromImage(imgInfo+"5/circle2.png")
            var circle22=PIXI.Sprite.fromImage(imgInfo+"5/gray.png")
            circle22.visible=false;
            circle2.addChild(circle21,circle22)
            circleBox.Theta=Math.random()*2*Math.PI;
            circleBox.interval=function(){
                     circleBox.Theta+=0.15;
                     var x=3*Math.cos(circleBox.Theta);
                     var y=3*Math.sin(circleBox.Theta);
                     circle1.position.set(x,y)
                     circle2.position.set(-x,-y)
                  }
            circleBox.start=function(){
               if(this.timer) return;
               circleBox.timer=setInterval(circleBox.interval,60)
               circle11.visible=true;
               circle21.visible=true;
               circle12.visible=false;
               circle22.visible=false;
               new TWEEN.Tween(circleBox.scale)
               .to({x:1,y:1},200)
               .start();
            }
            circleBox.stop=function(){
               if(!this.timer) return;
               clearInterval(this.timer);
               this.timer=null;
               new TWEEN.Tween(circleBox.scale)
               .to({x:0.685,y:0.685},200)
               .onComplete(function(){
                  circle11.visible=false;
                  circle21.visible=false;
                  circle12.visible=true;
                  circle22.visible=true;
                  circle1.position.set(0,0)
                  circle2.position.set(0,0)
               })
               .start();
            }
            circleBox.timer=setInterval(circleBox.interval,60)
            circleBox.addChild(circle2,circle1)
            circleBox.interactive = true;
            circleBox
            .on("touchend",function(){
               s5ArrowText.visible=true;
               if(isChooseSchool==false){
                  isChooseSchool=true;
               }
               for(var i=0;i<WhichSchoolData.length;i++){
                  WhichSchoolData[i].visible=false;   
               }
               for(var i=0;i<4;i++){
                  s5ChooseData[i].visible=false;
                  s5TextData[i].visible=false;
                  if(i!=this.index){
                     circleSuperBox.children[i].stop();
                  }
                  else {
                     s5TextData[i].visible=true;
                     s5Arrow1.position.set(arrowData[i].x+80,arrowData[i].y+348)
                     chooseIndex=i+1;
                     WhichSchoolData[i].visible=true;
                     schoolAudioBox[i].play();
                  }
               }
               s5ChooseData[this.index].visible=true;
               this.start()
               s5HatAni.play();
               s5HatAni.onFrameChange=function(){
               if(this.currentFrame==0){
                  s5HatAni.stop();
                  s5HatAni.onFrameChange=function(){}
               }
            }
            })
            circleSuperBox.addChild(circleBox)
         }
         new addCircle(150-73/2,-73/2,0);
         new addCircle(270-73/2,95-73/2,1);
         new addCircle(270-73/2,221-73/2,2);
         new addCircle(148-73/2,339-73/2,3);
         s5LineBox.addChild(circleSuperBox)

         var superLineBox=new Container();
         superLineBox.position.set(1602,0)
         var superLine=new Sprite(loader.resources[imgInfo+"5/super_line.png"].texture);
         superLine.position.set(0,80)
         s5Arrow1=new Sprite(loader.resources[imgInfo+"5/arrow.png"].texture);
         s5Arrow1.position.set(0,348)
         s5Arrow2=new Sprite(loader.resources[imgInfo+"5/arrow_down.png"].texture);
         s5Arrow2.visible=false;
         s5Arrow2.position.set(3325+10.5,184+29-4)

         var s5Paint1=new Container();
         var p1Bg=new Sprite(loader.resources[imgInfo+"paint1/bg.png"].texture);
         var p1Data=[];
         for(var i=1;i<17;i++){
            p1Data.push(imgInfo+"paint1/"+i+".jpg")
         }
         p1Ani=new PIXI.extras.AnimatedSprite.fromImages(p1Data);
         p1Ani.position.set(96,96)
         s5Paint1.addChild(p1Ani,p1Bg)
         s5Paint1.position.set(1030,375+30)

         s5Paint2=new Container();
         s5P2Line=new Sprite(loader.resources[imgInfo+"paint2/line.png"].texture);
         s5P2Line.position.set(-130,-195);
         s5P2LineMask=new Graphics();
         s5P2LineMask.beginFill(0x000000);
         s5P2LineMask.drawCircle(0, 0, 2);
         s5P2LineMask.endFill()
         s5P2LineMask.position.set(28,6)
         s5P2Line.mask=s5P2LineMask;
         s5P2Text=new Sprite(loader.resources[imgInfo+"paint2/text.png"].texture);
         s5P2Text.position.set(-50,-230)
         var s5P2Digest=new Sprite(loader.resources[imgInfo+"paint2/digest.png"].texture);
         s5P2Digest.position.set(-100,460)
         s5P2Digest.visible=false;
         function Circle(parent,x,y,fn,plus){
            var circleBox=new Container();
            if(plus==1){
               var center=PIXI.Sprite.fromImage(imgInfo+"week/plus.png")
               center.position.set((73-29)/2,(73-29)/2)
            }
            else if(plus==2){
               var center=PIXI.Sprite.fromImage(imgInfo+"week/minus.png")
               center.position.set((73-24)/2,(73-4)/2)
            }
            else{ 
               var center=new Graphics();
               center.beginFill(0xb30200);
               center.drawCircle(0, 0, 6);
               center.endFill();
               center.position.set(73/2,73/2)
            }
            circleBox.addChild(center)
            circleBox.pivot.set(73/2,73/2)
            circleBox.position.set(x+73/2,y+73/2);
            var circle1=new Container();
            var circle11=PIXI.Sprite.fromImage(imgInfo+"5/circle1.png")
            var circle12=PIXI.Sprite.fromImage(imgInfo+"5/gray.png")
            circle12.visible=false;
            circle1.addChild(circle11,circle12)
            var circle2=new Container();
            var circle21=PIXI.Sprite.fromImage(imgInfo+"5/circle2.png")
            var circle22=PIXI.Sprite.fromImage(imgInfo+"5/gray.png")
            circle22.visible=false;
            circle2.addChild(circle21,circle22)
            circleBox.Theta=Math.random()*2*Math.PI;
            circleBox.interval=function(){
                     circleBox.Theta+=0.15;
                     var x=3*Math.cos(circleBox.Theta);
                     var y=3*Math.sin(circleBox.Theta);
                     circle1.position.set(x,y)
                     circle2.position.set(-x,-y)
                  }
            circleBox.timer=setInterval(circleBox.interval,60)
            circleBox.addChild(circle2,circle1)
            circleBox.interactive = true;
            circleBox
            .on("touchend",fn)
            parent.addChild(circleBox)
            return circleBox;
         }
         p2Circle=new Circle(s5Paint2,-130-73/2,-195-73/2,function(){
            s5P2Digest.visible=true;
         });
         p2Circle.visible=false;
         var p2Bg=new Sprite(loader.resources[imgInfo+"paint2/bg.png"].texture);
         var p2Data=[];
         for(var i=1;i<12;i++){
            p2Data.push(imgInfo+"paint2/"+i+".jpg")
         }
         p2Ani=new PIXI.extras.AnimatedSprite.fromImages(p2Data);
         p2Ani.position.set(58,43)
         s5Paint2.interactive = true;

         s5Paint2.addChild(s5P2Line,s5P2LineMask,p2Ani,p2Bg,s5P2Text,s5P2Digest)
         s5Paint2.position.set(1630,375+30)
         s5Paint2.on("touchend",function(){
            s5P2Digest.visible=true;
         })
         var s5Paint3=new Container();
         var p3Bg=new Sprite(loader.resources[imgInfo+"paint3/bg.png"].texture);
         var p3Data=[];
         for(var i=1;i<15;i++){
            p3Data.push(imgInfo+"paint3/"+i+".jpg")
         }
         p3Ani=new PIXI.extras.AnimatedSprite.fromImages(p3Data);
         p3Ani.position.set(44,139)
         s5Paint3.addChild(p3Ani,p3Bg)
         s5Paint3.position.set(2090,100+30)

         //mask
         // var maskBox=new Container();
         // maskBox.position.set(-(671-398)/2,-(711-377)/2)
         // var mask0=new Sprite(loader.resources[imgInfo+"mask/0.png"].texture);
         // var mask1=new Sprite(loader.resources[imgInfo+"mask/1.png"].texture);
         // var mask2=new Sprite(loader.resources[imgInfo+"mask/2.png"].texture);
         // var mask3=new Sprite(loader.resources[imgInfo+"mask/3.png"].texture);
         // mask0.visible=true;
         // mask1.visible=false;
         // mask2.visible=false;
         // mask3.visible=false;
         // var maskStep=0;
         // setInterval(function(){
         //    maskStep++;
         //    // maskStep%40==0?mask1.visible=true:mask1.visible=false;
         //    maskStep%30==8?mask2.visible=true:mask2.visible=false;
         //    maskStep%24==16?mask3.visible=true:mask3.visible=false;
         //    maskStep%32<=4?mask0.alpha=0.66:
         //    maskStep%32>=6&&maskStep%32<=10?mask0.alpha=0.66:
         //          mask0.alpha=0.33;
         // },60)
         // maskBox.addChild(mask1,mask2,mask3,mask0)

         var s5School1=new Sprite(loader.resources[imgInfo+"5/school1.png"].texture);
         var s5School2=new Sprite(loader.resources[imgInfo+"5/school2.png"].texture); 
         var s5School3=new Sprite(loader.resources[imgInfo+"5/school3.png"].texture); 
         var s5School4=new Sprite(loader.resources[imgInfo+"5/school4.png"].texture); 
         s5School1.position.set(465,342)
         s5School2.position.set(465,342)
         s5School3.position.set(465,342)
         s5School4.position.set(465,342)
         s5School1.visible=false;
         s5School2.visible=false;
         s5School3.visible=false;
         s5School4.visible=false;
         var WhichSchoolData=[s5School1,s5School2,s5School3,s5School4]
         superLineBox.addChild(superLine,s5School1,s5School2,s5School3,s5School4,s5Arrow1,s5Arrow2,s5Paint1,s5Paint2,s5Paint3)

         var s5Text1=new Sprite(loader.resources[imgInfo+"5/text1.png"].texture);
         s5Text1.position.set(0,450)
         var s5Text2=new Sprite(loader.resources[imgInfo+"5/text2.png"].texture);
         s5Text2.position.set(0,450)
         var s5Text3=new Sprite(loader.resources[imgInfo+"5/text3.png"].texture);
         s5Text3.position.set(0,450)
         var s5Text4=new Sprite(loader.resources[imgInfo+"5/text4.png"].texture);
         s5Text4.position.set(0,450)
         s5Text1.visible=false;
         s5Text2.visible=false;
         s5Text3.visible=false;
         s5Text4.visible=false;
         var s5Cover=new Sprite(loader.resources[imgInfo+"5/cover.png"].texture);
         var s5TextData=[s5Text1,s5Text2,s5Text3,s5Text4]
         s5ArrowText=new Sprite(loader.resources[imgInfo+"4/slide_right.png"].texture);
         s5ArrowText.visible=false;
         new TWEEN.Tween({alpha:1})
         .to({alpha:0},500)
         .onUpdate(function(){
            s5ArrowText.alpha=this.alpha;
         })
         .repeat(Infinity)
         .yoyo(true)
         .start();
         s5ArrowText.position.set(114,850)
         s5ChooseMain.addChild(s5TableMask,s5Table,s5HatAni,s5Candle1,s5Candle2,s5Candle3,s5Cover,s5LineBox,s5Text1,s5Text2,s5Text3,s5Text4,s5ArrowText)
         new MASK(s5Table,-136,-167)
         s5ChooseBox.addChild(s5ChooseTitle,s5ChooseMain)

         s5.addChild(s5FirstText,s5ChooseBox,superLineBox)

         //右侧球场
         s6=new Container()
         s6.position.set(nowLeft,nowHeight+98)
         //fly
         fly=new Container();
         var flyMain=new Sprite(loader.resources[imgInfo+"fly/circle.png"].texture);
         flyMain.position.set(40,6)
         var flyLeft=new Sprite(loader.resources[imgInfo+"fly/left_wings.png"].texture);
         flyLeft.pivot.set(46,5)
         flyLeft.position.set(46,9+5)
         var flyRight=new Sprite(loader.resources[imgInfo+"fly/right_wings.png"].texture);
         flyRight.pivot.set(3,15)
         flyRight.position.set(56+3,15)
         var FLCount=0;
         setInterval(function(){
            FLCount%4==0?(flyLeft.rotation=-16*(2*Math.PI)/360,flyRight.rotation=33*(2*Math.PI)/360):
            FLCount%4==1?(flyLeft.rotation=34*(2*Math.PI)/360,flyRight.rotation=-25*(2*Math.PI)/360):
            FLCount%4==2?(flyLeft.rotation=-31*(2*Math.PI)/360,flyRight.rotation=47*(2*Math.PI)/360):
            (flyLeft.rotation=24*(2*Math.PI)/360,flyRight.rotation=-15*(2*Math.PI)/360)
            FLCount++;
         },60)
         fly.addChild(flyMain,flyLeft,flyRight)
         fly.position.set(152,157)
         fly.scale.set(0,0)
         //1
         var s6Top=new Container();
         var s6TopCover=new Sprite(loader.resources[imgInfo+"6/top_cover.png"].texture);
         var s6TopBgBox=new Container();
         manBox=new Container();
         flyManData=[
            {
               from:{x:44,y:112},
               to:{x:620,y:141}
            },
            {
               from:{x:67,y:71},
               to:{x:367,y:-20}
            },
            {
               from:{x:113,y:179},
               to:{x:313,y:190}
            },
            {
               from:{x:284,y:141},
               to:{x:394,y:152}
            },
            {
               from:{x:391,y:79},
               to:{x:-100,y:78}
            },
            {
               from:{x:429,y:44},
               to:{x:150,y:16}
            },
         ]
         for(var i=0;i<6;i++){
            var man=new Sprite(loader.resources[imgInfo+"man/"+i+".png"].texture);
            man.position.set(flyManData[i].from.x,flyManData[i].from.y)
            manBox.addChild(man)
         }
         ballData=[
            {x:222,y:60},
            {x:0,y:125},
            {x:450,y:180},
         ]
         s6Ball =new Sprite(loader.resources[imgInfo+"6/ball.png"].texture);
         s6Ball.position.set(222,60)
         var s6TopDoor=new Sprite(loader.resources[imgInfo+"6/door.png"].texture);
         s6TopDoor.position.set(201,104)
         s6TopTower=new Sprite(loader.resources[imgInfo+"6/top_tower.png"].texture);
         s6TopTower.position.set(0,52)
         var s6TopGrass=new Sprite(loader.resources[imgInfo+"6/grass.png"].texture);
         s6TopGrass.position.set(0,241)
         s6TopMountain=new Sprite(loader.resources[imgInfo+"6/top_mountain.png"].texture);
         s6TopMountain.position.set(-30,0)
         var s6TopBgCover=new Sprite(loader.resources[imgInfo+"6/cover.png"].texture)
         s6TopBgBox.addChild(s6TopMountain,s6TopGrass,s6TopTower,s6TopDoor,manBox,s6Ball,s6TopBgCover)
         s6TopBgBox.position.set(30,60)
         s6Top.position.set(0,250)
         s6Top.addChild(s6TopBgBox,s6TopCover,fly);
         new MASK(s6TopBgBox,-20,0)
         
         var s6Man=new Sprite(loader.resources[imgInfo+"6/man.png"].texture);
         s6Man.position.set(152,1151+250)
         s6Mountain=new Sprite(loader.resources[imgInfo+"6/mountain.png"].texture);
         s6Mountain.position.set(0,745+250)
         s6Tower=new Sprite(loader.resources[imgInfo+"6/tower.png"].texture);
         s6Tower.position.set(0,760+250)
         new TWEEN.Tween(s6Man.position)
         .to({y:1171+250},800)
         .easing(TWEEN.Easing.Quadratic.Out)
         .repeat(Infinity)
         .yoyo(true)
         .start()

         // s6FlyAni=new PIXI.extras.AnimatedSprite.fromImages(s6FlyData);
         // s6FlyAni.position.set(0,1070+250-23)
         // s6FlyAni.animationSpeed=0.4;
         s6.addChild(s6Mountain,s6Tower,s6Man,s6Top)
         // s6.addChild(s6FlyAni);
         var s6BottomText=new Sprite(loader.resources[imgInfo+"6/bottom_text.png"].texture);
         s6BottomText.position.set(90,1070+250+1206+100)
         s6.addChild(s6BottomText)
         s6F1=new TWEEN.Tween({x:152,y:157})
         .to({x:419,y:187},320)
         .onUpdate(function(){
            fly.scale.set((this.x-152)/(419-152),(this.x-152)/(419-152))
            fly.position.set(this.x,this.y)
         })
         .onComplete(function(){
            fly.scale.set(1,1);
            this.x=152,this.y=157;
         })
         .onStart(function() {
            F2.stop();
            F3.stop();
            F4.stop();
            F5.stop();
            fly.scale.set(0,0)
         });
         var F2=new TWEEN.Tween(fly.position)
         .to({x:110,y:263},320)
         .delay(320)
         var F3=new TWEEN.Tween(fly.position)
         .to({x:624,y:473},320)
         .delay(280)
         var F4=new TWEEN.Tween(fly.position)
         .to({x:589,y:614},200)
         .delay(280)
         var F5=new TWEEN.Tween(fly.position)
         .to({x:950,y:968},280)
         .delay(200)
         s6F1.chain(F2),F2.chain(F3),F3.chain(F4),F4.chain(F5)
         //s6line
         var s6LineBox=new Container()
         var s6Line=new Sprite(loader.resources[imgInfo+"6/line.png"].texture);
         s6Line.position.set(348,0)
         var s6GoToClass=new Sprite(loader.resources[imgInfo+"6/goto_class.png"].texture);
         s6GoToClass.position.set(320,165)
         s6Arrow=new Sprite(loader.resources[imgInfo+"6/arrow.png"].texture)
         s6Arrow.position.set(339,0)
         s6LineBox.position.set(0,2400+250+200)
         s6LineBox.addChild(s6Line,s6GoToClass,s6Arrow)
         s6.addChild(s6LineBox)
         //s6Main
         s6Main=new Container();
         s6Main.position.set(0,2400+250+1000+200)
         var s6Toptext=new Sprite(loader.resources[imgInfo+"6/top_text.png"].texture)
         s6Toptext.position.set(347,0)
         s6Main.addChild(s6Toptext)
         function s6Rect(parent,x,y,fn,index){
            var rectBox=new Container();
            var center;
            if(index==0){
               var center=new Sprite(loader.resources[imgInfo+"6/text1.png"].texture)
            }
            else if(index==1){
               var center=new Sprite(loader.resources[imgInfo+"6/text2.png"].texture)
            }
            var line=new Sprite(loader.resources[imgInfo+"6/short_line.png"].texture)
            line.position.set(80,50)
            center.position.set(32,10)
            rectBox.position.set(x,y)
            var rect1=PIXI.Sprite.fromImage(imgInfo+"6/outside.png")
            var rect2=PIXI.Sprite.fromImage(imgInfo+"6/inside.png")
            rectBox.addChild(line,center,rect2,rect1)
            rectBox.n=0;
            var flag=0.15;
            rectBox.interval=function(){
               rectBox.n+=flag;
               if(rectBox.n>=2||rectBox.n<=0){
                  flag*=-1;
               }
               var _x=rectBox.n*2;
               var _y=rectBox.n;
               rect1.position.set(_x,-_y)
               rect2.position.set(-_x,_y)
            }
            if(index==0) rectBox.timer=setInterval(rectBox.interval,60)
            rectBox.start=function(){
               if(!this.timer)this.timer=setInterval(this.interval,60)
            }
            rectBox.stop=function(){
               if(this.timer){
                  clearInterval(this.timer)
                  this.timer=null;
                  rect1.position.set(0,0)
                  rect2.position.set(0,0)
               }
            }
            rectBox.interactive = true;
            // rectBox
            // .on("touchend",function(){
            //    if(!this.timer){
            //       s6RectBox.children[0].stop()
            //       s6RectBox.children[1].stop()
            //       this.start();
            //    }
            //    fn();
            // })
            parent.addChild(rectBox)
            return rectBox;
         }
         s6RectBox=new Container();
         new s6Rect(s6RectBox,358,76,StartFly,0)
         new s6Rect(s6RectBox,541,76,StartChange,1)
         function StartFly(){
            // console.log("fly")
         }
         function StartChange(){
            // console.log("change")
         }
         var s6BgBox=new Container();
         s6BgBox.position.set(358,190)
         var s6Bg=new Container()
         var s6BgImg=new Sprite(loader.resources[imgInfo+"6/bg.jpg"].texture)
         var s6BgMask=new Graphics();
         s6BgMask.drawRect(0, 0, 335,581);
         s6Bg.mask=s6BgMask;
         s6Bg.addChild(s6BgImg,s6BgMask)
         new MASK(s6Bg,0,0)
         feather=new Sprite(loader.resources[imgInfo+"6/feather.png"].texture);
         feather.position.set(123+64,440+28)
         feather.pivot.set(64,28)

         featherFail=new Sprite(loader.resources[imgInfo+"6/feather_fail.png"].texture);
         featherFail.pivot.set(57,45)
         featherFail.alpha=0;
         featherFail.position.set(130+57,430+45)

         mouse=new Sprite(loader.resources[imgInfo+"6/mouse.png"].texture);
         mouse.position.set(115,430)
         mouse.alpha=0;
         mouseFail=new Sprite(loader.resources[imgInfo+"6/mouse_fail.png"].texture);
         mouseFail.position.set(125+52,416+64)
         mouseFail.pivot.set(52,64)
         mouseFail.alpha=0;

         var smokeData=[];
         for(var i=0;i<25;i++){
            smokeData.push(imgInfo+"smoke/"+i+".png")
         }
         smoke=new PIXI.extras.AnimatedSprite.fromImages(smokeData);
         smoke.position.set(110,260)
         smoke.animationSpeed=0.5;
         smoke.gotoAndStop(24)

         s6BgBox.addChild(s6Bg,feather,featherFail,mouse,mouseFail,smoke)
         s6FlyDText=new Sprite(loader.resources[imgInfo+"6/fly_dtext.png"].texture)
         s6FlyDText.position.set(354,784)
         s6FlyDText.visible=true;
         s6ChangeDText=new Sprite(loader.resources[imgInfo+"6/change_dtext.png"].texture)
         s6ChangeDText.position.set(354+145,796)
         s6ChangeDText.visible=false;
         s6Dog=new Sprite(loader.resources[imgInfo+"6/dog.png"].texture)
         s6Dog.position.set(354,796)
         s6Cat=new Sprite(loader.resources[imgInfo+"6/cat.png"].texture)
         s6Cat.position.set(354,796)
         s6Dog.visible=false;
         s6Cat.visible=false;
         
         // flyTextAni.play();
         changeText=new Sprite(loader.resources[imgInfo+"6/change_digest.png"].texture)
         changeText.position.set(40,HEIGHT-112-100)
         changeText.visible=false;
         flyExample=new Container();
         var flyPointData=[
            {x:37,y:8},
            {x:29.75,y:38.5},
            {x:22.5,y:69},
            {x:15.25,y:99.5},
            {x:8,y:130},
            {x:38.5,y:101.25},
            {x:69,y:72.5},
            {x:99.5,y:43.75},
            {x:130,y:15},
            {x:123.75,y:45.75},
            {x:117.5,y:76.5},
            {x:111.25,y:107.25},
            {x:105,y:138},
            {x:137.25,y:107.25},
            {x:169.5,y:76.5},
            {x:201.75,y:45.75},
            {x:234,y:15},
         ]
         var flyStep=0;
         var s6Digest1=new Sprite(loader.resources[imgInfo+"6/digest.png"].texture);
         s6Digest1.position.set(-40,200)
         var s6Digest1Slowly=new Sprite(loader.resources[imgInfo+"6/slowly.png"].texture);
         s6Digest1Slowly.position.set(40,240)
         flyExample.addChild(s6Digest1,s6Digest1Slowly)
         var line=new PIXI.Graphics();
         line.lineStyle(12,0xffffff,1);
         line.moveTo(flyPointData[0].x,flyPointData[0].y);
         flyExample.addChild(line);
         setInterval(function(){
            flyStep++;
            if(flyStep<=flyPointData.length-1){
               line.lineTo(flyPointData[flyStep].x,flyPointData[flyStep].y)
            }
            else if(flyStep==flyPointData.length+5){
               flyStep=0;
               flyExample.removeChildren();
               line=new PIXI.Graphics();
               line.lineStyle(12,0xffffff,1);
               line.moveTo(flyPointData[0].x,flyPointData[0].y);
               if(isAndroid&&isPlayFail){
                  flyExample.addChild(s6Digest1,s6Digest1Slowly);
               }
               else{
                  flyExample.addChild(s6Digest1);
               }
               flyExample.addChild(line);
            }
         },60)
         flyExample.position.set(417,300);

         changeExample=new Container();
         var changePointData=[
            {x:132,y:75},
            {x:132,y:108},
            {x:104.5,y:108},
            {x:77,y:108},
            {x:77,y:75.5},
            {x:77,y:43},
            {x:105.7,y:43},
            {x:105.7,y:43},
            {x:134.3,y:43},
            {x:163,y:43},
            {x:163,y:77.7},
            {x:163,y:112.3},
            {x:163,y:147},
            {x:133,y:147},
            {x:103,y:147},
            {x:73,y:147},
            {x:43,y:147},
            {x:43,y:112},
            {x:43,y:77},
            {x:43,y:42},
            {x:43,y:7},
            {x:82,y:7},
            {x:121,y:7},
            {x:160,y:7},
            {x:199,y:7},
            {x:199,y:53},
            {x:199,y:99},
            {x:199,y:145},
            {x:199,y:191},
         ]
         var s6Digest2=new Sprite(loader.resources[imgInfo+"6/digest.png"].texture);
         s6Digest2.position.set(-40,200)
         var s6Digest1Slowly2=new Sprite(loader.resources[imgInfo+"6/slowly.png"].texture);
         s6Digest1Slowly2.position.set(40,240)
         var changeStep=0;
         changeExample.addChild(s6Digest2,s6Digest1Slowly2)
         var changeLine=new PIXI.Graphics();
         changeLine.lineStyle(12,0xffffff,1);
         changeLine.moveTo(changePointData[0].x,changePointData[0].y);
         changeExample.addChild(changeLine);
         setInterval(function(){
            changeStep++;
            if(changeStep<=changePointData.length-1){
               changeLine.lineTo(changePointData[changeStep].x,changePointData[changeStep].y)
            }
            else if(changeStep==changePointData.length+5){
               changeStep=0;
               changeExample.removeChildren();
               changeLine=new PIXI.Graphics();
               changeLine.lineStyle(12,0xffffff,1);
               changeLine.moveTo(changePointData[0].x,changePointData[0].y);
               if(isAndroid&&isPlayFail){
                  changeExample.addChild(s6Digest2,s6Digest1Slowly2)
               }
               else{
                  changeExample.addChild(s6Digest2)
               }
               changeExample.addChild(changeLine);
            }
         },60)
         changeExample.position.set(417,300);
         changeExample.visible=false;
         leaveBtnImg=new Sprite(loader.resources[imgInfo+"6/leave_btn.png"].texture);
         leaveBtnImg.pivot.set(81.5,27)
         new TWEEN.Tween(leaveBtnImg.scale)
         .to({x:1.15,y:1.15},600)
         .easing(TWEEN.Easing.Quadratic.Out)
         .repeat(Infinity)
         .yoyo(true)
         .start();
         leaveBtnImg.position.set(10+81.5,70+12+27)
         leaveText=new Sprite(loader.resources[imgInfo+"6/leave_text.png"].texture);
         leaveText.position.set(33+10,70+54+12)
         leaveBtnImg.visible=false;
         leaveText.visible=false;
         s6Main.addChild(s6RectBox,s6BgBox,s6FlyDText,s6ChangeDText,s6Dog,s6Cat,flyExample,changeExample,changeText,leaveBtnImg,leaveText)
         var s6Bottom=new Container()
         s6Bottom.position.set(0,5762+162);
         s6Book=new Container();
         var bookBg=new Sprite(loader.resources[imgInfo+"book/bg.png"].texture);
         
         // bookAni.gotoAndStop(66)
         s6Next=new Sprite(loader.resources[imgInfo+"book/next.png"].texture);
         s6Next.position.set(560,453)
         s6Next.interactive = true;
         s6Next
         .on("touchend",changeFinal)
         s6Book.addChild(bookBg,s6Next)
         s6Book.position.set(10,0)
         s6Text=new Container()
         for(var i=1;i<6;i++){
            var text=new Sprite(loader.resources[imgInfo+"book/text"+i+".png"].texture);
            if(i!=1){
               text.alpha=0;
            }
            s6Text.addChild(text)
         }
         s6Text.position.set(152,HEIGHT-150-477)
         var s6LightBox=new Container();
         s6LightBox.position.set(310+13,270)
         s6Light=new Sprite(loader.resources[imgInfo+"book/light.png"].texture);
         s6Light.scale.set(0.1,0.1)
         s6Light.pivot.set(480,480)
         s6Light.visible=false;
         s6LightTextBox=new Container()
         s6Text1=new Sprite(loader.resources[imgInfo+"book/Ltext1.png"].texture);
         s6Text2=new Sprite(loader.resources[imgInfo+"book/Ltext2.png"].texture);
         s6Text3=new Sprite(loader.resources[imgInfo+"book/Ltext3.png"].texture);
         s6LightTextBox.addChild(s6Text1,s6Text2,s6Text3)
         s6LightTextBox.position.set(-125+154.5,-50+40)
         s6LightTextBox.pivot.set(154.5,40)
         s6LightTextBox.scale.set(0.3,0.3)
         s6LightTextBox.visible=false;
         s6LightBox.addChild(s6Light,s6LightTextBox)
         s6Bottom.addChild(s6Text,s6Book,s6LightBox)
         s6.addChild(s6Main,s6Bottom)


         mainScene.addChild(s1,s3,s2,s4,s5,s6)
         mainMask=new Container();
         var mask00=new Sprite(loader.resources[imgInfo+"6/0.png"].texture);
         mainMask.addChild(mask00)
         mainMask.interactive = true;
         mainMask.buttonMode = true;
         mainMask.visible=false;
         stage.addChild(mainScene,mainMask)

         drawScene=new Container();
         drawScene.width=WIDTH;
         drawScene.height=HEIGHT;
         drawScene.addChild(mask00)
         drawScene.interactive = true;
         drawScene.buttonMode = true;
         drawScene
         .on("touchstart", drawStart)
         .on("touchmove", drawMove)
         .on("touchend",drawEnd)
         lineContainer=new Container();
         circleContainer=new Container();
         testLineContainer=new Container();
         mainLineContainer=new Container();
         var black1=new Sprite(loader.resources[imgInfo+"6/black.png"].texture);
         flyBtn=new Container();
         flyBtn.position.set(348,66+40)
         flyBtn.interactive = true;
         flyBtn.on("touchend",StartToFly)
         flyBtn.addChild(black1)
         changeBtn=new Container();
         var black2=new Sprite(loader.resources[imgInfo+"6/black.png"].texture);
         changeBtn.position.set(531,66+40)
         changeBtn.interactive = true;
         changeBtn.on("touchend",StartToChange)
         changeBtn.addChild(black2)
         drawScene.addChild(lineContainer,circleContainer,testLineContainer,mainLineContainer,flyBtn,changeBtn)
         leaveBtn=new Sprite(loader.resources[imgInfo+"6/leave_black.png"].texture);
         leaveBtn.position.set(0,70+60+12)
         leaveBtn.interactive = true;
         leaveBtn.on("touchend",Leave)
         leaveBtn.visible=false;
         drawScene.addChild(leaveBtn)
         $("canvas").eq(1).hide();

         mainScene.interactive = true;
         mainScene.buttonMode = true;
         mainScene
         .on("touchstart", dragStart)
         .on("touchmove", dragMove)
         .on("touchend",dragEnd)

         scroller.setDimensions(WIDTH,HEIGHT,12000,12000);
         // scroller.scrollTo(0,4500,false)
         scroller.scrollTo(0,0,false)
         renderer.render(stage);
         renderer2.render(drawScene);
         gameLoop()
      }
      renderer2.rootContext.lineJoin="round";
      renderer2.rootContext.lineCap="round";
      renderer.rootContext.lineJoin="round";
      renderer.rootContext.lineCap="round";
      renderer2.rootContext.shadowBlur = 20;
      renderer2.rootContext.shadowColor = '#ea494d';
      var startPosition={},lastPosition={},newPosition={};
      var points=[];
      var keyPoints=[];
      var lastIndex=0;//线段开始点
      var linePointBox=[];//储存已经画好的线段点
      var lineBox=[];//储存已有线段
      var isChooseSchool=false;
      var baseVector=[{x:0,y:0},{x:1,y:0}];
      var drawRect=new PIXI.Graphics();
         drawRect.lineStyle(20,0xea494d,1);
      var figureData=[
         {
            figure:1,
            figureName:'W形',
            rule:[
               {
                  style:[2,6,7],
                  min:1,
                  max:3,
               },
               {
                  style:[1],
                  min:0,
                  max:1,
               },
               {
                  style:[3,4,5],
                  min:1,
                  max:3,
               },
               {
                  style:[1],
                  min:0,
                  max:1,
               },
               {
                  style:[2,6,7],
                  min:1,
                  max:3,
               },
               {
                  style:[1],
                  min:0,
                  max:1,
               },
               {
                  style:[3,4,5],
                  min:1,
                  max:3,
               },
            ]
         },
         {
            figure:2,
            figureName:'方形',
            rule:[
               {
                  style:[2,6,7],
                  min:1,
                  max:3,
               },
               {
                  style:[0],
                  min:1,
                  max:3,
               },
               {
                  style:[3,4,5],
                  min:1,
                  max:3,
               },
               {
                  style:[1],
                  min:1,
                  max:3,
               },
               {
                  style:[2,6,7],
                  min:1,
                  max:3,
               },
               {
                  style:[0],
                  min:1,
                  max:3,
               },
               {
                  style:[3,4,5],
                  min:1,
                  max:3,
               },
               {
                  style:[1],
                  min:1,
                  max:3,
               },
               {
                  style:[2,6,7],
                  min:1,
                  max:3,
               },
            ]
         }
      ]
      var isChooseRightWeekTime=0;
      var isTryToRight=false;
      var isFlyFly=false;
      var isFlyAniPlay=false;
      var isloadedFly=false;
      var isShowFoot=false;
      var resultIndex=0;
      var lastY=0;
      var dvalue=0;
      var isShowS3Arrow=false, isScrollBottom=false, isShowS3Cover=false;
      var isPlayPaintAudio=false,isPlayWelAudio=false;
      var finalIndex=0;
      var isCanSlideTop=true;
      var render = function(left, top, zoom) {
         console.log(left, top, zoom)
         if(top<nowHeight-200){
            left=0;
         }
         if(left>0&&left<nowLeft-200){
            top=nowHeight;
         }
         mainScene.position.x=-left;
         mainScene.position.y=-top;
         if(top<697){
            s1Inner.position.y=top/1.5;
            mainScene.position.x=0;
            forbidLeft(0,left)
         }
         if(top>=0&&top<5000){
            for(var i=0;i<s2.children.length;i++){
               var _this=s2.children[i];
               if(top+(HEIGHT-900)-i*160>=0){
                  var speed=_this.speed;
                  if(speed){
                     var _x=50-(top+(HEIGHT-900)-(i)*160)*speed;
                     if(_this.children[1].width+_x>=700){
                        _this.children[1].position.x=_x;
                     }
                  }
               }
            }
            if(top>=800){
               dvalue=(top-800)-lastY;
               var _rotate=s2.rotation;
               new TWEEN.Tween({rotate:_rotate})
               .to({rotate:(dvalue/200)},100)
               .onUpdate(function(){
                  s2.rotation=this.rotate;
                  if(Math.abs(this.rotate)>0.1){
                     s2.scale.set(1+1.8*(Math.abs(this.rotate)-0.1),1+1.8*(Math.abs(this.rotate)-0.1));
                  }
                  else{
                     s2.scale.set(1,1);
                  }
               })
               .start();
               lastY=(top-800);
            }
            else if(top<800){
               var _rotate=s2.rotation;
               new TWEEN.Tween({rotate:_rotate})
               .to({rotate:0},300)
               .onUpdate(function(){
                  s2.rotation=this.rotate;
                  // if(Math.abs(this.rotate)>0.1){
                     s2.scale.set(1+5*(Math.abs(this.rotate)),1+5*(Math.abs(this.rotate)));
                  // }
                  // else{
                  //    s2.scale.set(1,1);
                  // }
               })
               .start();
            }
            if(top>=17*160-(HEIGHT-800)){
               var index=parseInt((top-(17*160-(HEIGHT-800)))/(HEIGHT/110));
               for(var i=0;i<120;i++){
                  s2RectBox.children[i].visible=false;
                  if(i<=index){
                     s2RectBox.children[i].visible=true
                  }
               }
            }
         }
         if(top>=4000-HEIGHT&&left<=300){
            for(var i=0;i<s3FirstText.children.length;i++){
               s3FirstText.children[i].alpha=(600-(top-(4000-HEIGHT)-i*160))/600
            }
            if(top>4000){
               s3FirstText.visible=false;
            }
            else{
               s3FirstText.visible=true;
            }
            s3.position.y=top;
            var step=10;
            var index=parseInt((top-4000)/step);
            if(index<=49&&index>=0){
               //music
               /*if(audioBox[1].paused){
                  for(var i=0;i<4;i++){
                     audioBox[i].pause();
                  }
                  audioBox[1].play();
               }*/
               schoolAni.visible=true;
               schoolAni.gotoAndStop(index)
            }
            if(top>4000+50*step){
               schoolAni.visible=false;
               forbidTop(4000+50*step,top)
               s3.position.y=4000+50*step;
               mainScene.position.y=-(4000+50*step);
            }
         }
         else if(top<4000-HEIGHT) {
            schoolAni.visible=true;
            schoolAni.gotoAndStop(0)
            s3.position.y=4000;
            //music
            /*if(audioBox[0].paused){
               for(var i=0;i<4;i++){
                  audioBox[i].pause();
               }
               audioBox[0].play();
            }*/
         }
         if(top<nowHeight&&left<100){
            forbidLeft(0,left)
            s3HandBox.visible=false;
            if(!isCanSlideTop){
               top=nowHeight;
               scroller.__scrollTop=nowHeight;
               mainScene.position.y=-nowHeight;
            }
         }
         else if(top>=nowHeight){
            isCanSlideTop=false;
         }
         if(left>20&&left<=nowLeft-300){
            //滑到右边
            scroller.__enableScrollX=true;
            forbidTop(nowHeight,top);
            if(!isloadedFly){
               isloadedFly=true;
               s6FlyAni=new PIXI.extras.AnimatedSprite.fromImages(s6FlyData);
               s6FlyAni.position.set(0,1070+250-23)
               s6FlyAni.animationSpeed=0.4;
               s6.addChild(s6FlyAni);
               flyTextAni=new PIXI.extras.AnimatedSprite.fromImages(flyTextData);
               flyTextAni.position.set(0,HEIGHT-450-40)
               flyTextAni.animationSpeed=0.4;
               s6Main.addChild(flyTextAni)
               bookAni=new PIXI.extras.AnimatedSprite.fromImages(bookData);
               bookAni.position.set(69,-1)
               bookAni.animationSpeed=0.2;
               s6Book.addChild(bookAni)
            }
         }
         if(left>=nowLeft-300){
            if(top<(nowHeight)){
               mainScene.position.y=-(nowHeight);
               scroller.__scrollTop=(nowHeight)
            }
            if(left>nowLeft){
               mainScene.position.x=-nowLeft;
               scroller.__scrollLeft=nowLeft
            }
            if(top>=nowHeight+50){
               //滑到右下
               forbidLeft(nowLeft,left);
            }
            // if(top>=nowHeight+200+500){
            //    mainScene.position.x=-nowLeft;
            // }
         }
         if(left>=0&&left<2000&&top>=nowHeight){
            //动画播放完毕
            if(left<441){
               schoolAni.visible=false;
               schoolAni.gotoAndStop(49)
               s3.position.y=nowHeight;
               s3SchoolBox.position.x=left;
               s3HandBox.position.x=204+left;
               s3Text.position.x=48+left;
               s3Sky.scale.set(1+(left)/5000)
            }
            else if(left>=441){
               s3SchoolBox.position.x=441;
               s3Text.position.x=48+441;
            }
            if(left<=1092){
               s3TextCoverBox.position.x=left+40;
            }
            else if(left>1092){
               s3TextCoverBox.position.x=1092+40;
            }
            if(left>=50&&left<=1092||left>=1880){
               s3HandBox.visible=false;
               isShowS3Arrow=false;
            }
            else if(left<50||left>1092){
               s3HandBox.visible=true;
               if(!isShowS3Arrow){
                  isShowS3Arrow=true;
               }
               if(!isShowS3Cover){
                  isShowS3Cover=true;
                  new TWEEN.Tween({x:-100})
                  .to({x:40},300)
                  .onUpdate(function(){
                     s3TextCoverBox.position.x=this.x;
                  })
                  .start()
               }
            }
         }
         // 没选学院 锁定
         if(left>1890&&!isChooseSchool){
            scroller.__scrollLeft=1890;
            mainScene.position.x=-1890;
         }
         else if(left<1890&&left>=1500){
            if(!isChooseSchool){ 
               if(Math.abs(left-1890)<10){
                  scroller.__enableScrollX=false;
                  scroller.__scrollLeft=1890;
                  mainScene.position.x=-1890;
               }
               else{
                  new TWEEN.Tween(scroller)
                  .to({__scrollLeft:1890},300)
                  .onUpdate(function(){
                     mainScene.position.x=-this.__scrollLeft;
                  })
                  .start();
               }
            }
         }
         //bg
         if(left<=1200){
            s5TableBg.position.x=0;
         }
         else if(left>1200&&left<=1950&&top==nowHeight){
            s5TableBg.position.x=-(left-1200)/750*58;
         }
         else{
            s5TableBg.position.x=-58;
         }
         //箭头
         if(left<=2172){
            if(chooseIndex!=0){  
               if(arrowData[chooseIndex-1].x<=left-2190-80){
                  // console.log((left-1890))
                  s5Arrow1.position.set((left-1890)-300,arrowData[chooseIndex-1].y+348);
               }
            }
         }
         else if(left>2172&&left<=2980){
            s5Arrow1.position.set((left-2172)/2,348);
         }
         else if(left>2980&&left<=3380){
            s5Arrow1.position.x=850+(left-2980)/2;
            s5Arrow1.position.y=330+29-13;
         }
         else if(left>3380&&left<=3730){
            s5Arrow1.position.x=1390+(left-3380)/3;
            s5Arrow1.position.y=330+29-13;
         }
         else if(left>3730&&left<=4670){
            s5Arrow1.position.x=1530+(left-3730)/2;
            s5Arrow1.position.y=816+29-13;
         }
         else if(left>4670&&left<=4900){
            s5Arrow1.position.x=2022+(left-4670)*2;
            s5Arrow1.position.y=54+29-13;
         }
         else if(left>4900&&left<=5050){
            s5Arrow1.position.x=2042+460+(left-4900)/2;
            s5Arrow1.position.y=184+29-13;
         }
         else if(left>5050&&left<=5800){
            s5Arrow1.position.x=2965+(left-5050)/2;
            s5Arrow1.position.y=184+28-13;
         }
         else if(left>5800){
            s5Arrow2.position.set(3330+10.5,184+29-4+Math.min(175,left-5770))
         }
         if(left<=5800){
            s5Arrow1.visible=true;
            s5Arrow2.visible=false;
         }
         else if(left>5800){
            s5Arrow1.visible=false;
            s5Arrow2.visible=true;
         }           
         //动画
         if(left<3420){
            p1Ani.gotoAndStop(0)
            isPlayPaintAudio=false;
         }
         else if(left>=3420&&left<4170){
            if(!isPlayPaintAudio){
               isPlayPaintAudio=true;
               $("#paint1")[0].play()
            }
            p1Ani.gotoAndStop(Math.min(15,parseInt((left-3420)/30)))
         }
         if(left<3980){
            p2Ani.gotoAndStop(0)
            p2Circle.visible=false;
            s5P2Text.visible=false;
            s5Paint2.removeChild(s5P2LineMask)
            s5P2LineMask=new Graphics();
            s5P2LineMask.drawCircle(0, 0, 0);
            s5P2LineMask.position.set(28,6)
            s5P2Line.mask=s5P2LineMask;
            s5Paint2.addChild(s5P2LineMask)
            isPlayWelAudio=false;
         }
         else if(left>=3980&&left<4740){
            if(!isPlayWelAudio){
               isPlayWelAudio=true;
               $("#paint2")[0].play()
            }
            showP2Circle((left-3980)*10)
            p2Ani.gotoAndStop(Math.min(10,parseInt((left-3980)/35)))
         }
         if(left<4100){
            p3Ani.gotoAndStop(0)
         }
         else if(left>=4100&&left<5400){
            p3Ani.gotoAndStop(parseInt((left-4100)/30))
         }
         

         //飞人
         if(top>=nowHeight&&left>=nowLeft&&top<=nowHeight+700){
            var Dvalue=top-nowHeight;
            for(var i=0;i<6;i++){
               var _thisX=flyManData[i].from.x+(Dvalue)/700*(flyManData[i].to.x-flyManData[i].from.x);
               var _thisY=flyManData[i].from.y+(Dvalue)/700*(flyManData[i].to.y-flyManData[i].from.y);
               manBox.children[i].position.set(_thisX,_thisY)  
            }
            var _thisBallX;
            var _thisBallY;
            if(Dvalue<=150){
               _thisX=ballData[0].x+(Dvalue)/150*(ballData[1].x-ballData[0].x)
               _thisY=ballData[0].y+(Dvalue)/150*(ballData[1].y-ballData[0].y)
            }
            else{
               _thisX=ballData[1].x+(Dvalue-150)/350*(ballData[2].x-ballData[1].x)
               _thisY=ballData[1].y+(Dvalue-150)/350*(ballData[2].y-ballData[1].y)
            }
            s6Ball.position.set(_thisX,_thisY);
            s6TopMountain.x=-30+Dvalue/700*30;
            s6TopTower.position.x=-Dvalue/700*40;
         }
         //金色飞贼
         if(top>=nowHeight+20&&left>=nowLeft){
            //滑到右下
            if(!isFlyFly){
               isFlyFly=true;
               s6F1.start();
            }
            s6Mountain.position.y=745+250+(top-(nowHeight+250))/10
            s6Tower.position.y=760+250+(top-(nowHeight+250))/5
         }
         else if(top<=nowHeight+10&&left<=nowLeft){
            if(isFlyFly){
               isFlyFly=false;
            }
            if(isFlyAniPlay){
               isFlyAniPlay=false;
               s6FlyAni&&s6FlyAni.gotoAndStop(0);
            }
         }
         if(top>=nowHeight+1000+250&&left>=nowLeft){
            if(s6FlyAni.currentFrame==0){
               mainMask.visible=true;
            }
            if(!isFlyAniPlay){
               new TWEEN.Tween(scroller)
               .to({__scrollTop:nowHeight+200+1200+250},1500)
               .onUpdate(function(){
                  mainScene.position.y=-scroller.__scrollTop;
               })
               .start()
               isFlyAniPlay=true;
               s6FlyAni.play();
               $("#fly")[0].play();
               s6FlyAni.onFrameChange=function(){
                  if(this.currentFrame==50){
                     mainMask.visible=false;
                     s6FlyAni.stop();
                     s6FlyAni.onFrameChange=function(){}
                  }
               };
            }
         }
         //s6line
         if(top>nowHeight+2500+200&&top<=nowHeight+2500+890+200){
            s6Arrow.position.y=(top - nowHeight-2500-200)/2;
            if(top>nowHeight+2500+330+200){
               s6Arrow.position.y=532+165+(top - nowHeight-2500-330-200)/2;
            }
         }
         else if(top<=nowHeight+2500+200){
            s6Arrow.position.y=0;
         }
         //锁定屏幕开始画
         // if(top>=2400+250+1200+nowHeight+40-200&&top<=2400+250+1200+nowHeight+40+200){
            if(top>=nowHeight+2500+400&&top<=2400+250+1200+nowHeight+40+200){
            if(!isLeaving){
               //music
               /*if(audioBox[2].paused){
                  for(var i=0;i<4;i++){
                     audioBox[i].pause();
                  }
                  audioBox[2].play();
               }*/
               $("canvas").eq(1).show();
               if(Math.abs(top-(2400+250+1200+nowHeight+40))<10){
                  scroller.__enableScrollY=false;
                  scroller.__scrollTop=(2400+250+1200+nowHeight+40);
                  mainScene.position.y=-(2400+250+1200+nowHeight+40)
               }
               else{
                  new TWEEN.Tween(scroller)
                  .to({__scrollTop:2400+250+1200+nowHeight+40},300)
                  .onUpdate(function(){
                     mainScene.position.y=-this.__scrollTop;
                  })
                  .start();
                  flyTextAni.visible=true;
                  leaveBtnImg.visible=false;
                  leaveBtn.visible=false;
                  leaveText.visible=false;
                  flyExample.visible=true;
               }
            }
         }
         else if(top>=2400+250+1200+nowHeight+40+200){
            isLeaving=false;
            $("canvas").eq(1).hide();
            //music
            /*if(audioBox[3].paused){
               for(var i=0;i<4;i++){
                  audioBox[i].pause();
               }
               audioBox[3].play();
            }*/
         }
         else if(top<=2400+250+1200+nowHeight+40-200){
            isLeaving=false;
            $("canvas").eq(1).hide();
            leaveBtnImg.visible=false;
            leaveBtn.visible=false;
            leaveText.visible=false;
         }
         if(top>=10000){
            if(!isScrollBottom){
               isScrollBottom=true;
               new TWEEN.Tween(scroller)
               .to({__scrollTop:nowHeight+5762+162},300)
               .onUpdate(function(){
                  mainScene.position.y=-scroller.__scrollTop;
                  //music
                  if(finalIndex==0){
                     //manAudioBox[0].play();
                  }
               })
               .start()
            }
         }
         else if(top<9500){
            isScrollBottom=false;
         }
         if(top>=nowHeight+5762+162){
            scroller.__scrollTop=nowHeight+5762+162;
            top=nowHeight+5762+162;
            mainScene.position.y=-(nowHeight+5762+162);
         }

      };
      function WSuccess(){
         vote(1);
         isPlayFail=false;
         $("#fly_success")[0].play()
         flyFeather()
         if(flyTextAni.currentFrame==0){
            flyTextAni.gotoAndPlay(0);
            flyTextAni.onFrameChange=function(){
               if(flyTextAni.currentFrame==74){
                  flyTextAni.gotoAndStop(0);
                  leaveBtn.visible=true;leaveBtnImg.visible=true;
                  s6FlyDText.visible=true;
               }
            }
         }
         else if(flyTextAni.currentFrame>=50){
            flyTextAni.onFrameChange=function(){
               if(flyTextAni.currentFrame==74){
                  flyTextAni.gotoAndPlay(0);
                  flyTextAni.onFrameChange=function(){
                     if(flyTextAni.currentFrame==74){
                        flyTextAni.gotoAndStop(0);
                        leaveBtn.visible=true;leaveBtnImg.visible=true;
                        s6FlyDText.visible=true;
                     }
                  }
               }
            }
         }
      }
      function rotateFeather(target){
         setTimeout(function(){
            target.rotation=6*(2*Math.PI)/360;
            setTimeout(function(){
               target.rotation=-4*(2*Math.PI)/360;
               setTimeout(function(){
                  target.rotation=4*(2*Math.PI)/360;
                  setTimeout(function(){
                     target.rotation=-3*(2*Math.PI)/360;
                     setTimeout(function(){
                        target.rotation=0;
                     },80)
                  },80)
               },80)
            },80)
         },80)
      }
      function jumpMouse(target){
         var tween1=new TWEEN.Tween(target.position)
         .to({y:416+64-7},130)
         .start();
         var tween2=new TWEEN.Tween(target.position)
         .to({y:416+64},130)
         .start();
         tween1.chain(tween2)
      }
      var successTime=0;
      var successRotate=null;
      var successFly=null
      function flyFeather(){
         if(falling){
            falling.stop();
            falling=null;
         }
         if(successTime<6){
            successTime++;
            feather.pivot.set(60,-50)
            feather.position.set(123+60,440-50-(successTime-1)*50)
            successFly=new TWEEN.Tween(feather.position)
            .to({y:440-50-successTime*50},1000)
            .easing(TWEEN.Easing.Quadratic.Out)
            .start();
         }
         if(!successRotate){
            successRotate=new TWEEN.Tween({rotate:-0.1})
            .to({rotate:0.1},1000)
            .onUpdate(function(){
               feather.rotation=this.rotate;
            })
            .easing(TWEEN.Easing.Quadratic.Out)
            .repeat(Infinity)
            .yoyo(true)
            .start();
         }
      }
      var falling=null;
      function WFail(){
         vote(3);
         isPlayFail=true;
         $("#fly_fail")[0].play();
         flyExample.visible=true;
         s6FlyDText.visible=true;
         if(successTime){
            successFly.stop();successFly=null;
            setTimeout(function(){
               if(successTime==0&&successRotate){
                  successRotate.stop();
                  successRotate=null;
               }
            },successTime*200)
            falling=new TWEEN.Tween(feather.position)
            .to({y:440-50},successTime*200)
            .easing(TWEEN.Easing.Quadratic.Out)
            .onComplete(function(){
               feather.pivot.set(64,28)
               feather.position.set(123+64,440+28)
            })
            .start();
            successTime=0;
         }
         else{
            rotateFeather(feather)
         }
         flyTextAni.onFrameChange=function(){}
         if(flyTextAni.currentFrame==0){
            var n=3;
            flyTextAni.gotoAndPlay(0);
            flyTextAni.onFrameChange=function(){
               if(flyTextAni.currentFrame==n){
                  flyTextAni.gotoAndStop(n);
                  flyTextAni.onFrameChange=function(){}
                  var timer=setInterval(function(){
                     flyTextAni.gotoAndStop(--n);
                     if(flyTextAni.currentFrame==0){
                        clearInterval(timer)
                        timer=null;
                        leaveBtn.visible=true;leaveBtnImg.visible=true;
                     }
                  },40)
               }
            }
         }
         else if(flyTextAni.currentFrame<=37){
            var n=flyTextAni.currentFrame;
            flyTextAni.gotoAndStop(n);
            var timer=setInterval(function(){
               flyTextAni.gotoAndStop(--n);
               if(flyTextAni.currentFrame==0){
                  clearInterval(timer)
                  timer=null;
                  leaveBtn.visible=true;leaveBtnImg.visible=true;
               }
            },20)
         }
         else if(flyTextAni.currentFrame>37){
            var n=flyTextAni.currentFrame;
            flyTextAni.gotoAndStop(n);
            var timer=setInterval(function(){
               flyTextAni.gotoAndStop(++n);
               if(flyTextAni.currentFrame==74){
                  flyTextAni.gotoAndStop(0);
                  clearInterval(timer)
                  timer=null;
                  leaveBtn.visible=true;leaveBtnImg.visible=true;
               }
            },20)
         }
      }
      var currentChangeTarget=0;
      var isCanInitSmoke=false;
      function ChangeSuccess(){
         vote(2);
         isPlayFail=false;
         $("#change_success")[0].play()
         if(s6Dog.visible==true){
            s6Cat.visible=true;
            s6Dog.visible=false;
         }
         else{
            s6Cat.visible=false;
            s6Dog.visible=true;
         }
         
         smoke.gotoAndPlay(24)
         smoke.onFrameChange=function(){
            // console.log(this.currentFrame)
            mouseFail.alpha=0;
            featherFail.alpha=0;
            if(this.currentFrame==23){
               leaveBtn.visible=true;leaveBtnImg.visible=true;
               smoke.gotoAndStop(24)
               if(currentChangeTarget==0){
                  currentChangeTarget=1
               }else if(currentChangeTarget==1){
                  currentChangeTarget=0;
               }
            }
            if(currentChangeTarget==0&&this.currentFrame<24){
               feather.alpha=(10-this.currentFrame)/10;
               mouse.alpha=(10-(14-this.currentFrame))/10;
            }
            else if(currentChangeTarget==1&&this.currentFrame<24){
               mouse.alpha=(10-this.currentFrame)/10;
               feather.alpha=(10-(14-this.currentFrame))/10;
            }
         }
      }
      function ChangeFail(){
         vote(4);
         isPlayFail=true;
         $("#change_fail")[0].play()
         smoke.gotoAndPlay(24)
         changeExample.visible=true;
         smoke.onFrameChange=function(){
            if(this.currentFrame==23){
               leaveBtn.visible=true;leaveBtnImg.visible=true;
               isCanInitSmoke=true;
               smoke.gotoAndStop(24)
            }
            if(currentChangeTarget==0&&this.currentFrame<24){
               feather.alpha=(10-this.currentFrame)/10;
               featherFail.alpha=(10-(14-this.currentFrame))/10;
               mouse.alpha=0;
               mouseFail.alpha=0;
               if(this.currentFrame==10){
                     rotateFeather(featherFail)
                     setTimeout(function(){
                        if(isCanInitSmoke&&gameState==2){
                           feather.alpha=1;
                           featherFail.alpha=0;
                        }
                        if(gameState==1){
                           //切换到1状态
                           feather.alpha=1;
                           featherFail.alpha=0;
                           mouse.alpha=0;
                           mouseFail.alpha=0;
                        }
                     },900)
               }
            }
            else if(currentChangeTarget==1&&this.currentFrame<24){
               feather.alpha=0;
               featherFail.alpha=0;
               mouse.alpha=(10-this.currentFrame)/10;
               mouseFail.alpha=(10-(14-this.currentFrame))/10;
               if(smoke.currentFrame==5){
                  jumpMouse(mouseFail)
               }
               setTimeout(function(){
                  if(isCanInitSmoke&&gameState==2){
                     mouse.alpha=1;
                     mouseFail.alpha=0;
                  }
                  if(gameState==1){
                     //切换到1状态
                     feather.alpha=1;
                     featherFail.alpha=0;
                     mouse.alpha=0;
                     mouseFail.alpha=0;
                  }
               },1400)
            }
         }
      }
      var gameState=1;//当前游戏状态 1为悬浮咒 2为变形咒
      var isClickBtn=false;
      function StartToFly(){
         isClickBtn=true;
         s6RectBox.children[1].stop()
         s6RectBox.children[0].start();
         gameState=1;
         flyExample.visible=true;
         s6FlyDText.visible=true;
         changeExample.visible=false;
         if(falling){
            falling.stop();
            falling=null;
         }
         smoke.gotoAndStop(24)
         feather.alpha=1;
         featherFail.alpha=0;
         mouse.alpha=0;
         mouseFail.alpha=0;
         if(successFly){
            successFly.stop();successFly=null;
         }
         successTime=0;
         // console.log(feather.pivot)
         feather.pivot.set(64,28)
         feather.position.set(123+64,440+28)
         changeText.visible=false;
         flyTextAni.visible=true;
         s6FlyDText.visible=true;
         s6ChangeDText.visible=false;
         s6Dog.visible=false;
         s6Cat.visible=false;
         init()
      }
      function StartToChange(){
         isClickBtn=true;
         s6RectBox.children[0].stop()
         s6RectBox.children[1].start();
         gameState=2;
         currentChangeTarget=0;
         flyExample.visible=false;
         s6FlyDText.visible=false;
         changeExample.visible=true;
         if(successRotate){
            successRotate.stop();
            successRotate=null;
         }
         changeText.visible=true;
         flyTextAni.visible=false;
         flyTextAni.gotoAndStop(0);
         if(successFly){
            successFly.stop();successFly=null;
         }
         feather.pivot.set(64,28)
         feather.position.set(123+64,440+28)
         s6FlyDText.visible=false;
         s6ChangeDText.visible=true;
         s6Dog.visible=true;
         s6Cat.visible=false;
         init()
      }
      var isLeaving=false;
      function Leave(){
         isLeaving=true;
         $("canvas").eq(1).hide();
         init()
         StartToFly();
         flyTextAni.visible=false;
         leaveText.visible=true;
         flyExample.visible=false;
      }
      var bookAniData=[16,31,48,66,69]
      function changeFinal(){ 
         if(finalIndex<4){
            bookAni.animationSpeed=0.2;
            bookAni.play();
            s6Next.visible=false;
            bookAni.onFrameChange=function(){
               if(bookAni.currentFrame==bookAniData[finalIndex]){
                  bookAni.stop();
                  finalIndex++;
                  manAudioBox[finalIndex-1].pause();
                  manAudioBox[finalIndex].play();
                  s6Next.visible=true;
                  if(finalIndex>=4){
                     s6Next.visible=false;
                     bookAni.animationSpeed=0.08;
                     setTimeout(function(){
                        bookAni.play();
                        bookAni.onFrameChange=function(){
                           if(bookAni.currentFrame==69){
                              bookAni.stop();
                              addEndAni();
                           }
                        }
                     },1500)
                  }
               }
            }
            new TWEEN.Tween({alpha:1})
            .to({alpha:0},300)
            .onUpdate(function(){
                  s6Text.children[finalIndex].alpha=this.alpha;
            })
            .easing(TWEEN.Easing.Quadratic.Out)
            .start();
            new TWEEN.Tween({alpha:0})
            .to({alpha:1},800)
            .onUpdate(function(){
                  s6Text.children[finalIndex+1].alpha=this.alpha;
            })
            .delay(300)
            .easing(TWEEN.Easing.Quadratic.Out)
            .start();
         }
      }
      function addEndAni(){
         s6Light.visible=true;
         new TWEEN.Tween(s6Light.scale)
         .to({x:20,y:20},2000)
         .easing(TWEEN.Easing.Quadratic.InOut)
         .onComplete(function(){
            
         })
         .start();
         s6LightTextBox.visible=true;
         s6LightTextBox.alpha=0;
         var tween1=new TWEEN.Tween(s6LightTextBox.scale)
         .to({x:1,y:1},300)
         .onUpdate(function(){
            s6LightTextBox.alpha=this.x;
         })
         .easing(TWEEN.Easing.Quadratic.InOut)
         .delay(300)
         .start();
         new TWEEN.Tween({alpha:1})
         .to({alpha:0},2000)
         .onUpdate(function(){
            s6Text1.alpha=this.alpha;
         })
         .onComplete(function(){
            $(".end").show();
            setTimeout(function(){
               $(".end").addClass("show")
            },300)
         })
         .delay(900)
         .start()
         new TWEEN.Tween({alpha:1})
         .to({alpha:0},1000)
         .onUpdate(function(){
            s6Text2.alpha=this.alpha;
         })
         .delay(900)
         .start()
         new TWEEN.Tween({alpha:1})
         .to({alpha:0},1500)
         .onUpdate(function(){
            s6Text3.alpha=this.alpha;
         })
         .delay(900)
         .start()
      }
      function showP2Circle(value){
         // console.log(value)
         s5Paint2.removeChild(s5P2LineMask)
         s5P2LineMask=new Graphics();
         s5P2LineMask.drawCircle(0, 0, value);
         s5P2LineMask.position.set(28,6)
         s5P2Line.mask=s5P2LineMask;
         s5Paint2.addChild(s5P2LineMask)
         if(value>270){
            p2Circle.visible=true;
            s5P2Text.visible=true;
         }
         if(value<=270){
            p2Circle.visible=false;
            s5P2Text.visible=false;
         }
      }
      function forbidLeft(target,left,force){
         scroller.__enableScrollX=false;
         mainScene.position.x=-target;
         if(Math.abs(left-target)>=50&&!force){
            new TWEEN.Tween(scroller)
            .to({__scrollLeft:target},100)
            .start();
         }
         else{
            scroller.__scrollLeft=target;
         }
      }
      function forbidTop(target,top,force){
         //force 是否强制不动，滑过后不动
         scroller.__enableScrollY=false;
         if(Math.abs(top-target)>=50&&!force){
            new TWEEN.Tween(scroller)
            .to({__scrollTop:target},100)
            .start();
         }
         else{
            scroller.__scrollTop=target;
         }
         mainScene.position.y=-target;
      }
      var scroller = new Scroller(render, {
         zooming: false,
         animating : true,
         bouncing : false,
         animationDuration:1000,
         speedMultiplier:0.5
      });
      var isDragEnd=true;
      function dragStart(event){
         var e=event.data.originalEvent;
         isDragEnd=false;
         scroller.doTouchStart(e.touches, e.timeStamp);
      }
      function dragMove(event){
         if(isDragEnd) return;
         var e=event.data.originalEvent;
         scroller.doTouchMove(e.touches, e.timeStamp, e.scale);
      }
      function dragEnd(event){
         var e=event.data.originalEvent;
         scroller.doTouchEnd(e.timeStamp);
         isDragEnd=true;
      }
      //draw
      var isDrawEnd=true;
      function init(){
         isDrawEnd=false;
         startPosition={},lastPosition={},newPosition={};
         points=[];
         keyPoints=[];
         lastIndex=0;
         linePointBox=[];
         lineBox=[];
         drawRect=new PIXI.Graphics();
         drawRect.lineStyle(20,0xea494d,1);
         lineContainer.removeChildren();
         circleContainer.removeChildren();
         // testLineContainer.removeChildren();
         // mainLineContainer.removeChildren();
         resultIndex=0;
         isCanInitSmoke=false;
      }
      function drawStart(event){
         if(event.target==flyBtn||event.target==changeBtn||event.target==leaveBtn){
            isClickBtn=true;
            return
         }
         flyExample.visible=false;
         changeExample.visible=false;
         s6FlyDText.visible=false;
         // leaveBtnImg.visible=false;
         // leaveBtn.visible=false;
         leaveText.visible=false;
         init();
         lastPosition=event.data.getLocalPosition(this);
         drawRect.moveTo(lastPosition.x,lastPosition.y);
         points.push(lastPosition);
         keyPoints.push(lastPosition);
         linePointBox.push(lastPosition);
         var circle = new Graphics();
         circle.beginFill(0xffffff);
         circle.drawCircle(lastPosition.x,lastPosition.y,3);
         circle.endFill();
         circleContainer.addChild(circle);
      }
      function drawMove(event){
         if(isClickBtn) return;
         var newPosition=event.data.getLocalPosition(this);
         var distance= DISTANCE(keyPoints[keyPoints.length-1],newPosition);
         var angle=ANGLE(lastPosition,newPosition);

         // if(newPosition.x>170&&newPosition.x<=470){
         //    drawRect.lineStyle(20,0x0060ff,1);
         //    renderer.rootContext.shadowColor = '#0090ff';
         // }
         // else{
         //    drawRect.lineStyle(20,0xea494d,1);
         //    renderer.rootContext.shadowColor = '#ea494d';
         // }
         drawRect.moveTo(lastPosition.x,lastPosition.y);
         drawRect.lineTo(newPosition.x,newPosition.y)
         // renderer.rootContext.restore();
         lineContainer.addChild(drawRect);

         if(distance>10){  //增加新点 并判断是否增加新线
            keyPoints.push(newPosition);
            var circle = new Graphics();
            circle.beginFill(0xffffff);
            circle.drawCircle(newPosition.x,newPosition.y,3);
            circle.endFill();
            circleContainer.addChild(circle);

            if(keyPoints.length>=3&&keyPoints.length-lastIndex>=5){ //新增线段以后2个点才能再增加
               
               var startPoint=keyPoints[lastIndex];
               var nextPoint=keyPoints[lastIndex+1];
               var endPoint=keyPoints[keyPoints.length-1];
               var firstPoint=keyPoints[keyPoints.length-3];
               var secondPoint=keyPoints[keyPoints.length-2];
               var ThisAngle=getAngleBetween(firstPoint,secondPoint,secondPoint,endPoint)
               var StartAngle=getAngleBetween(startPoint,nextPoint,nextPoint,endPoint)
               // console.log("ThisAngle:"+ThisAngle+"      StartAngle:"+StartAngle)

               // testLineContainer.removeChild(testLineContainer.children[testLineContainer.children.length-1])
               var line=new Graphics();
               line.lineStyle(2,0x00ffff,1);
               line.moveTo(linePointBox[linePointBox.length-1].x,linePointBox[linePointBox.length-1].y);
               line.lineTo(keyPoints[keyPoints.length-1].x,keyPoints[keyPoints.length-1].y);
               // console.log(getAngleBetween(linePointBox[linePointBox.length-1],keyPoints[keyPoints.length-1],baseVector[0],baseVector[1]))
               // testLineContainer.addChild(line);

               if(ThisAngle<40&&StartAngle<20){

               }
               else
               {
                  // console.log("增加新线段")
                  lastIndex=keyPoints.length-1;
                  linePointBox.push(keyPoints[lastIndex-1])
                  linePointBox.push(keyPoints[lastIndex])
                  if(linePointBox.length>1){
                     lineBox.push({firstPoint:linePointBox[linePointBox.length-3],endPoint:linePointBox[linePointBox.length-2]})
                  }
                  // testLineContainer.removeChild(testLineContainer.children[testLineContainer.children.length-1])
                  var mainline=new Graphics();
                  mainline.lineStyle(4,0xff00ff,1);
                  mainline.moveTo(linePointBox[linePointBox.length-3].x,linePointBox[linePointBox.length-3].y);
                  mainline.lineTo(linePointBox[linePointBox.length-2].x,linePointBox[linePointBox.length-2].y);
                  // mainLineContainer.addChild(mainline);
                  calcuteLines();
               }
            }
         }
         points.push(newPosition);
         

         lastPosition=newPosition;

      }
      var lineAngleConfig=20;
      function calcuteLines(){   //计算每一条线的角度
         var len=lineBox.length;
         for(var i=0;i<len;i++){
            var angle=getAngleBetween(lineBox[i].firstPoint,lineBox[i].endPoint,baseVector[0],baseVector[1])
            var x1=lineBox[i].firstPoint.x;
            var y1=lineBox[i].firstPoint.y;
            var x2=lineBox[i].endPoint.x;
            var y2=lineBox[i].endPoint.y;
            var a=lineAngleConfig;
            if(angle<a){
               lineBox[i].style=1;
               lineBox[i].styleName="right";
            }
            else if(angle>180-a){
               lineBox[i].style=0;
               lineBox[i].styleName="left";
            }
            else if(angle>90-a&&angle<90+a){
               if(y2>=y1){
                  lineBox[i].style=2;
                  lineBox[i].styleName="down";
               }
               else{
                  lineBox[i].style=3;
                  lineBox[i].styleName="up";
               }
            }
            else{
               if(x2>=x1&&y2<=y1){
                  lineBox[i].style=4;
                  lineBox[i].styleName="up-right";
               }
               else if(x2<x1&&y2<y1){
                  lineBox[i].style=5;
                  lineBox[i].styleName="up-left";
               }
               else if(x2>=x1&&y2>=y1){
                  lineBox[i].style=6;
                  lineBox[i].styleName="down-right";
               }
               else if(x2<x1&&y2>y1){
                  lineBox[i].style=7;
                  lineBox[i].styleName="down-left";
               }
            }
            // console.log(lineBox[i].styleName);
         }
      }
      function drawEnd(event){
         if(isClickBtn){
            isClickBtn=false;
            return;
         };
         isDrawEnd=true;
         if(keyPoints.length-lastIndex==1){  //最后拐弯一个点 忽略

         }
         else  //拐弯后多个点
         {
            lastIndex=keyPoints.length-1;
            linePointBox.push(keyPoints[lastIndex-1])
            linePointBox.push(keyPoints[lastIndex])
            if(linePointBox.length>1){
               lineBox.push({firstPoint:linePointBox[linePointBox.length-2],endPoint:linePointBox[linePointBox.length-1]})
            }
            if(linePointBox.length<=2) return; //关键点太少
            // testLineContainer.removeChild(testLineContainer.children[testLineContainer.children.length-1])
            var mainline=new Graphics();
            mainline.lineStyle(4,0xff00ff,1);
            mainline.moveTo(linePointBox[linePointBox.length-3].x,linePointBox[linePointBox.length-3].y);
            mainline.lineTo(linePointBox[linePointBox.length-1].x,linePointBox[linePointBox.length-1].y);   //最后到达最后一个点
            // mainLineContainer.addChild(mainline);
         }
         calcuteLines();

         var len=lineBox.length;
         var string="";
         for(var i=0;i<len;i++){
            string+=" "+lineBox[i].styleName
         }

         var resultString="";
         for(var i=0;i<figureData.length;i++){
            var result=figureShape(lineBox,figureData[i].rule);
            if(result===true){
               resultString=figureData[i].figureName;
               resultIndex=figureData[i].figure;
            }
         }
         if(gameState==1){
            if(resultIndex==1){
               //W型画成功
               WSuccess();
            }
            else{
               //W型失败
               WFail();
            }  
         }
         else if(gameState==2){  
            if(resultIndex==2){
               //方型画成功
               ChangeSuccess();
            }
            else{
               //方型失败
               ChangeFail();
            }
         }
         setTimeout(function(){
            if(isDragEnd){
               init();
            }
         },300)
      }
      function figureShape(line,rule){
         var len=line.length;
         // console.log(line)
         var currentIndex=len-1;
         for(var i=(rule.length-1);i>=0;i--){
            var figureTime=0;
            for(;currentIndex>=0;currentIndex--){
               var isEndCheck=false;
               for(var n=0;n<rule[i].style.length;n++){
                  if(line[currentIndex].style==rule[i].style[n]){
                     figureTime++;
                     isEndCheck=true;
                     break;
                  }
               }
               if(!isEndCheck){
                  break;
               }
            }
            if(figureTime>=rule[i].min&&figureTime<=rule[i].max){
               continue;
            }
            else {
               return false;
            }
         }
         if(currentIndex>-1){
            return false
         }
         return true;
      }
      function gameLoop(){
         TWEEN.update();
         requestAnimationFrame(gameLoop);
         renderer.render(stage);
         renderer2.render(drawScene);
      }
      function DISTANCE(a,b){
         var distance=Math.sqrt(Math.pow(b.x-a.x,2)+Math.pow(b.y-a.y,2));
         return distance;
      }
      function ANGLE(a,b){
         var angle=Math.atan((b.y-a.y)/(b.x-a.x))*100;
         return angle;
      }
      function calLine(){

      }
      //from Google
      function getAngleBetween(A, B, C, D) {
           var AB = { x: B.x - A.x, y: B.y - A.y };
           var CD = { x: D.x - C.x, y: D.y - C.y };
           var dividend = AB.x * CD.x + AB.y * CD.y;
           var divisor = Math.sqrt(Math.pow(AB.x, 2) + Math.pow(AB.y, 2)) * Math.sqrt(Math.pow(CD.x, 2) + Math.pow(CD.y, 2));//[注]这里可能出现dividend=549，divisor=548.99999999的情况，其实此时他们应该是相等才对，所以导致出现divide>1的情况，从而导致acos()返回NaN
           var divide = dividend / divisor;
           if (divide > 1) {
               divide = 1;
           } //修正由于求根divisor导致失精度的情况
           var radian = Math.acos(divide);
           var angle = radian * 180 / Math.PI;
           // console.log(`[getAngleBetween]dividend=${dividend}, divisor=${divisor}, radian=${radian}`);
           return angle;
      }     
    })
})(jQuery);
function vote(n){
   jQuery.ajax({
      type:"GET",
      url: "http://active.163.com/service/vote/v1/1514/digg.jsonp",
      dataType:"jsonp",
      jsonp: "callback",
      data:{id:n},
   });
}
