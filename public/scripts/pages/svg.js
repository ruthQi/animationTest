import {TimelineLite, TimelineMax} from 'gsap';
var $ = require('libs/jquery.js');

class svgAnimation{
   constructor(){
      this.n = 200;
      this.bindEvent();
   }
   bindEvent(){
      $('#btn-in').on('click', ()=>{
         this.buildShield(-40);
      });
      $('#btn-de').on('click', ()=>{
         this.buildShield(20);
      })
   }
   buildShield(s){
      let timeline = new TimelineLite();
      this.n = this.n+s;
      var to = {
         y: this.n
      };
      var duration = 2;
      timeline.to("#curtain", duration, to, 1);
   }
}

new svgAnimation();
