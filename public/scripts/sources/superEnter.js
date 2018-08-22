/**
 * @author: bjqiru
 * @description：
 *
 */
'use strict';
/*
react每次render时动画从return  contentMax;处执行。
执行addAnimation时，会render页面
这两种都有可能导致页面抖动
*/
import {Component} from 'react';
import {TweenLite, TimelineLite, TimelineMax} from 'gsap';
import GSAP from 'react-gsap-enhancer';
import GuardLevel from 'components/icons/guardLevel';

class SuperEnter extends Component{

   componentDidMount(){
      this.addAnimation(this.showSuperEnter);
   }
   showSuperEnter = ({target}) => {
      let width = window.innerWidth;
      let contentWidth = target[0].clientWidth;
      let contentMax = new TimelineMax({
         onComplete: ()=>{
            let timeLite = new TimelineLite();
            timeLite.call(()=>{
               this.addAnimation(this.showSuperLeave)
            }, [], this, '+=0.1');
         }
      })
      contentMax.fromTo(target, 0.15, {
         opacity: 1,
         x: width
      }, {
         x: 30
      }).fromTo(target, 3.5, {
         x: 30
      }, {
         x: 0
      });
      let $light = target.find({type: 'light'});
      TweenLite.fromTo($light, 1, {
         opacity: 1
      },{
         delay: 0.15,
         x: contentWidth-30
      });
      TweenLite.to($light, 1.2, {
         opacity: 0
      });
      return  contentMax;
   }
   /*showSuperEnter = ({target}) => {
      let width = window.innerWidth;
      let contentWidth = target[0].clientWidth;
      let contentMax = new TimelineMax({
         onComplete: ()=>{
            let $light = target.find({type: 'light'});
            let lightMax = new TimelineMax({
               onComplete: ()=>{
                  let timeLite = new TimelineLite();
                  timeLite.call(()=>{
                     this.addAnimation(this.showSuperLeave)
                  }, [], this, '+=0.625');
               }
            });
            lightMax.fromTo($light, 1, {
               opacity: 1
            },{
               delay: 0.125,
               x: contentWidth
            });
            lightMax.to($light, 1.2, {
               opacity: 0
            });
         }
      })
      contentMax.fromTo(target, 0.25, {
         x: width
      }, {
         x: 0
      });
      return  contentMax;
   }*/
   showSuperLeave = ({target}) => {
      let width = window.innerWidth;
      let leaveMax = new TimelineMax({
         onComplete: ()=>{
            this.props.didLeave();
         }
      })
      leaveMax.to(target, 0.5, {
         x: -width
      });
      return leaveMax;
   }
   render(){
      let {user, message} = this.props;
      return (
         <div className="superenter-content" key={user.userId}>
            <em className="superenter-light" type="light"></em>
            <em className="superenter-leaf"></em>
            <p className="superenter-level"><span className="s-level">{user.wealthLevel}</span>级</p>
            <p className="superenter-message">
               <GuardLevel user={this.props.user}/>
               <span className="super-nick">{user.nick}</span>
               <span className="super-msg">{message}</span>
            </p>
         </div>
      )
   }
}

export default GSAP()(SuperEnter);