import {TimelineLite, TimelineMax} from 'gsap';
var $ = require('libs/jquery.js');

class initFun{
   constructor(){
      this.t1 = new TimelineLite({
         onComplete: ()=>{
            alert('iiiiii')
         }
         
      });
      this.max = new TimelineMax({
         onComplete:()=>{
            alert('max')
         }, 
         repeat:2, 
         repeatDelay:1, 
         yoyo:true//repeat时，前后相连
      });
      this.init();
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
         this.t1.play();
      });
      $('.js-pause').on('click', ()=>{
         this.t1.pause();
      });
      $('.js-resume').on('click', ()=>{
         this.t1.resume();
      });
      $('.js-reverse').on('click', ()=>{
         this.t1.reverse();
      });
      $('.js-seek').on('click', ()=>{
         this.t1.seek(1.5);
      });
   }
}

new initFun();