/*
TweenLite:是GSAP的主题核心，它用于创建基本动画，是其他各类模块的基础。一版搜会搭配plugins/cssPlugin以实现DOM元素的动画
TimelineLite:是一个叫做时间轴的动画容器，它用于对多个动画进行有序的组织和控制
TimeLineMax是TimelineLite的升级版，在TimelineLite的基础上，可以有更高级的组织与控制
TweenMax:是GSAP集合包，除前面3个之外，还包括plugins里的常用插件以及easing里的缓动函数补充
*/
import {TweenLite, TimelineLite, TimelineMax} from 'gsap';
var $ = require('libs/jquery.js');

class initFun{
   constructor(){
      this.t1 = new TimelineLite({
         onComplete: ()=>{
            console.log('iiiiii')
         }
         
      });
      this.max = new TimelineMax({
         onComplete:()=>{
            console.log('max')
         }, 
         repeat:2, 
         repeatDelay:1, 
         yoyo:true//repeat时，前后相连
      });
      this.init();
      this.init2();
      this.bindEvent();
   }
   init(){
      let $elem = $('.box');
      let $max = $('.max');
      $elem.css('position', 'absolute');
      $max.css('position', 'absolute');
      /*方式1：
      this.t1.add(TweenLite.to($elem, 1, {left: 100}));
      this.t1.add(TweenLite.to($elem, 1, {top: 50}));
      this.t1.add(TweenLite.to($elem, 1, {opacity: 0}));*/
      //方式2：
      this.t1.to($elem, 2, {left: 100}).to($elem, 1, {top: 50}).to($elem, 1, {opacity: 0});
      //TimelineMax
      //this.max.from($max, 1, {left: 100}).to($max, 1, {left: 250}).to($max, 1, {top: 50}).to($max, 1, {opacity: 0});
      this.max.to($max, 1, {left: 200, top: 100}).to($max, 0.5, {opacity: 0.5}).to($max, 1, {rotation: 30}, '+=0.5');
      /*this.max.addLabel('spin', 3);
      this.max.add( new TweenLite($max, 2, {rotation:"+=360"}), "spin");
      this.max.play("spin");*/
   }
   bindEvent(){
      $('.js-play').on('click', ()=>{
         this.t1.play();//播放
      });
      $('.js-pause').on('click', ()=>{
         this.t1.pause();//暂停
      });
      $('.js-resume').on('click', ()=>{
         this.t1.resume();//继续播放
      });
      $('.js-reverse').on('click', ()=>{
         this.t1.reverse();//反转播放
      });
      $('.js-seek').on('click', ()=>{
         this.t1.seek(1.5);//跳转到1.5s继续播放
      });
      $('.js-timeScale').on('click', ()=>{
         this.max.timeScale(3);//动画变为3倍速
      });
   }
   //Power2.easeIn：慢-快
   //Power2.easeOut：快-慢
   //Power2.easeInOut：慢-快-慢
   //Back.easeIn: 回-下
   //Back.easeOut 下-回
   //Back.easeInOut 回-下-回
   init2(){
      //x表示translateX
      TweenLite.to('#ball1', 2, {
         x:200,
         y: '+=300px',
         delay: 2,
         ease: Back.easeInOut //Linear.easeNone

      });
      //clearProps清除样式
      TweenLite.to("#ball1", 2, {
         x: 200,
         clearProps: "all",
         autoAlpha: 0
      });
      TweenLite.from('#ball2', 2, {
         x: '+=200px',
         backgroundColor: '#2196f3'
      });
      TweenLite.fromTo('#ball3', 2, {
         x: 500,
         y: 500
      }, {
         x: 300,
         y: 300
      });
      //this.setStyle();
      this.setNoStyle();
      var t1 = new TimelineLite();
      t1.staggerFrom(['#ball4', '#ball5', '#ball6', '#ball7'], 1, {
         scale: '-=0.5',
         autoAlpha: 0
      })
   }
   setNoStyle(){
      var t1 = new TimelineLite();
      //未设置样式
      t1.from('#ball4', 1, {
         y: '-=60',
         autoAlpha: 0
      }).fromTo('#ball5', 1, {
         x: '+=60px',
         autoAlpha: 0
      }, {
         x: '-=30px',
         autoAlpha: 1
      }, '-=0.7').from('#ball6', 1, {
         y: '+=60px',
         autoAlpha: 0
      }, '-=0.7').fromTo('#ball7', 1, {
         x: '-=60px',
         autoAlpha: 0
      }, {
         x: '+=30px',
         y: '-55px',
         autoAlpha: 1
      }, '-=0.7');
   }
   setStyle(){
      var t1 = new TimelineLite();
      //已设置样式
      t1.from('#ball4', 1, {
         y: '-=60',
         autoAlpha: 0
      }).from('#ball5', 1, {
         x: '+=60px',
         autoAlpha: 0
      }, '-=0.7').from('#ball6', 1, {
         y: '+=60px',
         autoAlpha: 0
      }, '-=0.7').from('#ball7', 1, {
         x: '-=60px',
         autoAlpha: 0
      }, '-=0.7');
   }
}

new initFun();