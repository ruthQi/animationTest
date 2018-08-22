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