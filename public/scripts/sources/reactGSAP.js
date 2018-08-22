/**
 * @author: qiru
 * @description：礼物全站跑道（初级，高级）
 *
 */
 //测试多条同时触发时不用队列，如何实现最后一条动画的完整性
'use strict';


import {Component} from 'react';
import Num from 'components/icons/num';
import observer from 'utils/observer';
import {TweenLite, TimelineLite, TimelineMax} from 'gsap';
import channel from 'utils/channel';
import callApp from 'libs/callApp';
import LowerRunWay from 'components/commons/room/animation/lowerRunWay';
import GSAP from 'react-gsap-enhancer';

class LowerGiftRunWay extends Component{
   constructor(){
      super();
      this.state = {
         giftInfo: null
      };
      this.lowerRunWayArray = [];
      this.lowerRunWayEmpty = true;
      observer.on('msg_online_gift', this.showGiftRunWay);
   }
   shouldComponentUpdate(nextProps, nextState){
      if(this.state.giftInfo == nextState.giftInfo){
         return false;
      }
      return true;
   }
   showGiftRunWay = (data) => {
      let giftData = data.data;
      if(giftData.level == 1){
         //this.lowerRunWayArray.push(giftData);
         //this.showLowerNext();
         console.log('000000000', this.leaveAnimation)
         console.log('11111111111', this.enterAnimation)
         this.enterAnimation && this.enterAnimation.pause();
         
         this.enterAnimation && this.enterAnimation.eventCallback('onComplete', ()=>{});
         //console.log('00000000000', this.enterAnimation);
         console.log('2222222222', this.leaveAnimation)
         console.log('3333333333', this.enterAnimation)
         this.setState({
            giftInfo: null
         }, ()=>{
            this.setState({
               giftInfo: giftData
            }, ()=>{
               this.enterAnimation = this.addAnimation(this.showLowerEnterAnimation);
               console.log('444444444', this.leaveAnimation)
               this.leaveAnimation && this.leaveAnimation.pause();
               this.leaveAnimation && this.leaveAnimation.eventCallback('onComplete', ()=>{});
               this.enterAnimation.restart();
            })
         })
      }
   }
   showLowerNext(){
      if(this.lowerRunWayEmpty && this.lowerRunWayArray.length > 0){
         this.lowerRunWayEmpty = false;
         let giftData = this.lowerRunWayArray.shift();
         this.setState({
            giftInfo: giftData
         })
      }
      
   }
   animationDone = () => {
      this.lowerRunWayEmpty = true;
      this.setState({
         giftInfo: null
      }, ()=>{
         this.showLowerNext();
      });
   }
   //低级入场
   showLowerEnterAnimation = ({target}) => {
      //let target = document.querySelector('.js-low-runway');
      console.log(target)
      let height = target[0].clientHeight;
      let $messageContent = target.find({type: 'runway-message-wrapper'});
      let $messageDom = target.find({type: 'runway-message'});
      console.log($messageDom)
      let contentWidth = $messageContent[0].clientWidth;
      let width = 0;
      target.findAll({type: 'span'}).forEach((item)=>{
         width += item.clientWidth;
      });
      TweenLite.set($messageDom[0], {width: width})
      let lowMessageLite = new TimelineMax({
         onComplete: ()=>{
            let scrollWidth = (contentWidth - width);
            if(scrollWidth < 0){
               let lineLite = new TimelineMax({
                  onComplete: ()=>{
                     let scrollMax = new TimelineMax();
                     scrollMax.addCallback(()=>{
                        console.log('9999999999999999')
                        this.leaveAnimation = this.addAnimation(this.showLowerLeaveAnimation);
                        this.leaveAnimation.restart();
                     }, '+=0.75');
                  }
               });
               lineLite.to($messageDom, 3, {
                  delay:0.25,
                  x: scrollWidth,
                  ease: Linear.easeNone
               });
            }else{
               let timeLite = new TimelineLite();
               timeLite.call(()=>{
                  console.log('9999999999999999')
                  this.leaveAnimation = this.addAnimation(this.showLowerLeaveAnimation);
                  this.leaveAnimation.restart();
               }, [], this, '+=1.5');
            }
         }
      });
      lowMessageLite.fromTo(target, 0.5, {
         y: -height
      }, {
         y: 0
      })
      return lowMessageLite;
   }
   //低级离场
   showLowerLeaveAnimation = ({target}) => {
      //let target = document.querySelector('.js-low-runway');
      let height = target[0].clientHeight;
      let leaveLite = new TimelineLite({
         onComplete: ()=>{
            this.animationDone();
         }
      });
      leaveLite.fromTo(target, 0.5, {
         y: 0
      },{
         y: -height
      });
      return leaveLite;
   }
   render(){
      let giftInfo = this.state.giftInfo;
      //let key = giftInfo.user.userId + giftInfo.gift.giftId;
      console.log(giftInfo)
      if(!giftInfo){
         return (<div></div>);
      }
      return (
         <div className="low-runway js-low-runway" key='lower'>
            <div className="runway-content js-message-wrapper" type="runway-message-wrapper">
               <p className="s-message js-runway-message" type="runway-message">
                  <span className="user-nick" type="span">{giftInfo.user.nick}</span>
                  <span className="decription-info" type="span">{giftInfo.msg}</span>
                  <span className="anchor-nick" type="span">{giftInfo.anchor.nick}</span>
                  {giftInfo.num > 0 && <span className="decription-info" type="span">{giftInfo.num}个</span>}
                  <span className="decription-info" type="span">{giftInfo.gift.name}</span>
                  {/*<span className="user-nick" type="span">hahahahhaha</span>
                  <span className="decription-info" type="span">送给</span>
                  <span className="anchor-nick" type="span">啊呵呵呵呵啊呵呵呵呵啊呵呵呵呵啊呵呵呵呵啊呵呵呵呵</span>
                  <span className="decription-info" type="span">1个</span>
                  <span className="decription-info" type="span">棒棒糖</span>*/}
               </p>
            </div>
         </div>
      )
   }
}


export default GSAP()(LowerGiftRunWay);