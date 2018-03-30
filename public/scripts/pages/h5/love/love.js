function removeByValue(e, t) {
   for (var i = 0; i < e.length; i++) if (e[i] == t) return e.splice(i, 1), i
}
function DISTANCE(e, t) {
   var i = Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
   return i
}
function ANGLE(e, t) {
   var i = 100 * Math.atan((t.y - e.y) / (t.x - e.x));
   return i
}
function calLine() {}
function getAngleBetween(e, t, i, n) {
   var o = {
      x: t.x - e.x,
      y: t.y - e.y
   },
      s = {
         x: n.x - i.x,
         y: n.y - i.y
      },
      a = o.x * s.x + o.y * s.y,
      r = Math.sqrt(Math.pow(o.x, 2) + Math.pow(o.y, 2)) * Math.sqrt(Math.pow(s.x, 2) + Math.pow(s.y, 2)),
      p = a / r;
   p > 1 && (p = 1);
   var l = Math.acos(p),
      d = 180 * l / Math.PI;
   return d
}
function figureShape(e, t) {
   for (var i = e.length, n = i - 1, o = t.length - 1; o >= 0; o--) {
      for (var s = 0; n >= 0; n--) {
         for (var a = !1, r = 0; r < t[o].style.length; r++) if (e[n].style == t[o].style[r]) {
            s++, a = !0;
            break
         }
         if (!a) break
      }
      if (!(s >= t[o].min && s <= t[o].max)) return !1
   }
   return !(n > -1)
}!
function(e) {
   e(function() {
      function t(e) {
         var t = document.getElementById(e),
            i = function() {
               document.removeEventListener("WeixinJSBridgeReady", i), document.removeEventListener("YixinJSBridgeReady", i), t.play()
            };
         document.addEventListener("WeixinJSBridgeReady", i, !1), document.addEventListener("YixinJSBridgeReady", i, !1)
      }
      function i(e) {
         var t = document.getElementById(e),
            i = function() {
               document.removeEventListener("WeixinJSBridgeReady", i), document.removeEventListener("YixinJSBridgeReady", i), t.play(), t.pause()
            };
         document.addEventListener("WeixinJSBridgeReady", i, !1), document.addEventListener("YixinJSBridgeReady", i, !1)
      }
      function n() {
         se = window.innerWidth, ae = window.innerHeight, se < ae ? (SCALE = se / 750, ce = ae / SCALE, ge = 90, ue.resize(ae / SCALE, 750), xe.resize(ae / SCALE, 750), e("#loading,canvas,.share,.end").css({
            "-webkit-transform": "rotate(90deg) scale(" + SCALE + ") translate3d(0,-750px,0)",
            width: ae / SCALE,
            height: "750px"
         }), jn && jn.setDimensions(se, ae, se, 2e4)) : (SCALE = ae / 750, ce = se / SCALE, ge = 0, ue.resize(se / SCALE, 750), xe.resize(se / SCALE, 750), e("#loading,canvas,.share,.end").css({
            "-webkit-transform": "rotate(0deg) scale(" + SCALE + ") translate3d(0,0,0)",
            width: se / SCALE,
            height: "750px"
         }), jn && jn.setDimensions(se, ae, 2e4, ae))
      }
      function o() {
         switch (window.orientation) {
         case 0:
            setTimeout(function() {
               n(), ge = 90, nowLeft = jn.__scrollLeft, e("#loading,canvas,.share,.end").css({
                  "-webkit-transform": "rotate(90deg) scale(" + SCALE + ") translate3d(0,-750px,0)",
                  width: ae / SCALE,
                  height: "750px"
               }), e(".share").removeClass("share_rotate"), setTimeout(function() {
                  jn.setDimensions(se, ae, se, 2e4), jn.scrollTo(0, nowLeft, !1), ce = ae / SCALE, ee()
               }, 200)
            }, 800);
            break;
         case -90:
            setTimeout(function() {
               n(), ge = 0, nowTop = jn.__scrollTop, e("#loading,canvas,.share,.end").css({
                  "-webkit-transform": "rotate(0deg) scale(" + SCALE + ") translate3d(0,0,0)",
                  width: se / SCALE,
                  height: "750px"
               }), e(".share").addClass("share_rotate"), setTimeout(function() {
                  jn.setDimensions(se, ae, 2e4, ae), jn.scrollTo(nowTop, 0, !1), ce = se / SCALE, ee()
               }, 200)
            }, 800);
            break;
         case 90:
            setTimeout(function() {
               n(), ge = 0, nowTop = jn.__scrollTop, e("#loading,canvas,.share,.end").css({
                  "-webkit-transform": "rotate(0deg) scale(" + SCALE + ") translate3d(0,0,0)",
                  width: se / SCALE,
                  height: "750px"
               }), e(".share").addClass("share_rotate"), setTimeout(function() {
                  jn.scrollTo(nowTop, 0, !1), ce = se / SCALE, ee()
               }, 200)
            }, 800);
            break;
         case 180:
         }
         ce = se < ae ? ae / SCALE : se / SCALE
      }
      function s(t, i) {
         var n = parseInt(t.progress);
         e(".loading_main").width(7.2 * n), e(".loading_text").css({
            left: 7.2 * n - 60 + "px"
         }), e(".loading_text").html(n + "%")
      }
      function a() {
         for (var e = 0; e < 3; e++) ei.push(re + "rect/" + e + ".jpg");
         for (var e = 0; e < 4; e++) ti.push(re + "dialog/outline1_" + e + ".png");
         for (var e = 0; e < 4; e++) ii.push(re + "dialog/outline2_" + e + ".png");
         for (var e = 0; e < 4; e++) ni.push(re + "dialog/outline3_" + e + ".png");
         for (var e = 0; e < 4; e++) oi.push(re + "dialog/outline4_" + e + ".png");
         for (var e = 0; e < 5; e++) si.push(re + "dialog/text1_" + e + ".png");
         for (var e = 0; e < 5; e++) ai.push(re + "dialog/text2_" + e + ".png");
         for (var e = 0; e < 5; e++) ri.push(re + "dialog/text3_" + e + ".png");
         for (var e = 0; e < 5; e++) pi.push(re + "dialog/text4_" + e + ".png");
         for (var e = 0; e < 4; e++) hi.push(re + "dialog2/outline1_" + e + ".png");
         for (var e = 0; e < 4; e++) ci.push(re + "dialog2/outline2_" + e + ".png");
         for (var e = 0; e < 4; e++) gi.push(re + "dialog2/outline3_" + e + ".png");
         for (var e = 0; e < 5; e++) fi.push(re + "dialog2/text1_" + e + ".png");
         for (var e = 0; e < 5; e++) ui.push(re + "dialog2/text2_" + e + ".png");
         for (var e = 0; e < 5; e++) xi.push(re + "dialog2/text3_" + e + ".png");
         for (var e = 0; e < 5; e++) wi.push(re + "line/" + e + ".png");
         for (var e = 0; e < 5; e++) _i.push(re + "line/b_s_" + e + ".png");
         for (var e = 0; e < 5; e++) yi.push(re + "line/r_" + e + ".png");
         for (var e = 0; e < 5; e++) Ii.push(re + "line/r_s_" + e + ".png");
         for (var e = 0; e < 5; e++) Si.push(re + "line/w_" + e + ".png");
         for (var e = 0; e < 6; e++) bi.push(re + "dialog/heart_" + e + ".png");
         for (var e = 0; e < 3; e++) Ei.push(re + "diamond/1_" + e + ".png");
         for (var e = 0; e < 15; e++) Ti.push(re + "diamond/l_t_" + e + ".png");
         for (var e = 0; e < 15; e++) Ai.push(re + "diamond/l_b_" + e + ".png");
         for (var e = 0; e < 14; e++) Pi.push(re + "diamond/r_b_" + e + ".png");
         for (var e = 0; e < 15; e++) Ci.push(re + "diamond/r_t_" + e + ".png");
         for (var e = 0; e < 19; e++) Mi.push(re + "blood/jxxg_" + e + ".png");
         for (var e = 0; e < 19; e++) Ni.push(re + "blood2/jxxg_" + e + ".png");
         for (var e = 0; e < 27; e++) e < 11 ? zi.push(re + "text1/A1-T1exoprt_" + e + ".png") : zi.push(re + "text1/A1-T1exoprt_" + (e + 7) + ".png");
         for (var e = 0; e < 25; e++) e < 11 ? Wi.push(re + "text2/A1-T2exoprt _" + e + ".png") : Wi.push(re + "text2/A1-T2exoprt _" + (e + 9) + ".png");
         for (var e = 0; e < 27; e++) e < 11 ? Xi.push(re + "text3/A1-T3exoprt_" + e + ".png") : Xi.push(re + "text3/A1-T3exoprt_" + (e + 18) + ".png");
         for (var e = 0; e < 25; e++) 0 == e ? Li.push(re + "text4/zsxlexport_00.png") : Li.push(re + "text4/zsxlexport_" + (e - 1) + ".png");
         for (var e = 0; e < 23; e++) Fi.push(re + "diamond_fall/zsdzxl_" + e + ".png");
         for (var e = 0; e < 3; e++) Di.push(re + "triangle/triangle_" + e + ".png");
         for (var e = 0; e < 25; e++) e < 3 ? ki.push(re + "triangle/triangle_top_" + e + ".png") : e >= 3 && e <= 13 ? ki.push(re + "triangle/txdl_" + (e - 3) + ".png") : e >= 14 && e <= 24 && ki.push(re + "triangle/txdr_" + (e - 14) + ".png");
         for (var e = 0; e < 11; e++) Ui.push(re + "stairs/nianexport_" + e + ".png");
         for (var e = 0; e < 14; e++) Bi.push(re + "stairs/wangexport_" + e + ".png");
         for (var e = 0; e < 9; e++) Ri.push(re + "stairs/byexport_" + e + ".png");
         for (var e = 0; e < 11; e++) qi.push(re + "stairs/hxexport_" + e + ".png");
         for (var e = 0; e < 29; e++) ji.push(re + "stairs/A2lzexport_" + e + ".png");
         for (var e = 0; e < 9; e++) Oi.push(re + "dialog3/tri_" + e + ".png");
         for (var e = 28; e < 104; e++) Ji.push(re + "dialog3/bx2export_" + e + ".png");
         for (var e = 0; e < 4; e++) Yi.push(re + "dialog3/outline1_" + e + ".png");
         for (var e = 0; e < 4; e++) Qi.push(re + "dialog3/outline2_" + e + ".png");
         for (var e = 0; e < 4; e++) Gi.push(re + "dialog3/outline3_" + e + ".png");
         for (var e = 0; e < 4; e++) Hi.push(re + "dialog3/outline4_" + e + ".png");
         for (var e = 0; e < 4; e++) Vi.push(re + "dialog3/text1_" + e + ".png");
         for (var e = 0; e < 4; e++) Ki.push(re + "dialog3/text2_" + e + ".png");
         for (var e = 0; e < 4; e++) Zi.push(re + "dialog3/text3_" + e + ".png");
         for (var e = 0; e < 4; e++) $i.push(re + "dialog3/text4_" + e + ".png");
         for (var e = 0; e < 32; e++) e < 3 ? nn.push(re + "crash_heart/psx_0" + e + ".png") : nn.push(re + "crash_heart/psx_" + (e - 2) + ".png");
         for (var e = 0; e < 4; e++) on.push(re + "dialog4/outline1_" + e + ".png");
         for (var e = 0; e < 4; e++) sn.push(re + "dialog4/outline2_" + e + ".png");
         for (var e = 0; e < 4; e++) an.push(re + "dialog4/text1_" + e + ".png");
         for (var e = 0; e < 4; e++) rn.push(re + "dialog4/text2_" + e + ".png");
         for (var e = 0; e < 13; e++) dn.push(re + "fire_heart/zhdx_" + e + ".png");
         for (var e = 0; e < 9; e++) hn.push(re + "water_heart/sx1_" + (e + 100) + ".png");
         for (var e = 0; e < 157; e++) e <= 34 ? cn.push(re + "great/A3-3bf_" + (e + 195) + ".png") : cn.push(re + "great/A3-11_" + (e + 195) + ".png");
         for (var e = 0; e < 4; e++) gn.push(re + "dialog5/outline0_" + e + ".png");
         for (var e = 0; e < 4; e++) fn.push(re + "dialog5/outline1_" + e + ".png");
         for (var e = 0; e < 4; e++) un.push(re + "dialog5/outline2_" + e + ".png");
         for (var e = 0; e < 4; e++) xn.push(re + "dialog5/outline3_" + e + ".png");
         for (var e = 0; e < 4; e++) vn.push(re + "dialog5/outline4_" + e + ".png");
         for (var e = 0; e < 4; e++) mn.push(re + "dialog5/text0_" + e + ".png");
         for (var e = 0; e < 4; e++) wn.push(re + "dialog5/text1_" + e + ".png");
         for (var e = 0; e < 4; e++) _n.push(re + "dialog5/text2_" + e + ".png");
         for (var e = 0; e < 4; e++) yn.push(re + "dialog5/text3_" + e + ".png");
         for (var e = 0; e < 4; e++) In.push(re + "dialog5/text4_" + e + ".png");
         for (var e = 0; e < 153; e++) e < 121 ? En.push(re + "end/A4-2_" + e + ".png") : En.push(re + "end/ily_" + e + ".png")
      }
      function r() {
         n();
         var t = 100;
         e(".loading_main").width(7.2 * t), e(".loading_text").css({
            left: 7.2 * t - 60 + "px"
         }), e(".loading_text").html(t + "%"), e("#loading").fadeOut(300), ye = new pe, ye.visible = !1, Ee = new de(le.resources[re + "first/bg.png"].texture), Ee.position.set(265, 97), Ae = new PIXI.extras.AnimatedSprite.fromImages(Pn), Ae.animationSpeed = .25, Pe = new de(le.resources[re + "first/time.png"].texture), Pe.position.set(336, 607), Ae.loop = !1, we = new pe;
         for (var i = 0; i < 10; i++) {
            if (9 == i) {
               var o = new de(le.resources[re + "first/rect.png"].texture);
               o.position.x = 368, o.position.y = -69
            } else {
               var o = new de(le.resources[re + "first/t1_" + i + ".png"].texture);
               o.position.x = 38 * i
            }
            we.addChild(o)
         }
         we.position.set(ce - 539, 514), _e = new pe;
         for (var i = 0; i < 8; i++) {
            var o = new de(le.resources[re + "first/t2_" + i + ".png"].texture);
            o.position.x = 38 * i, _e.addChild(o)
         }
         _e.position.set(ce - 422, 572), Te = new pe;
         var s = new de(le.resources[re + "first/circle2.png"].texture);
         Se = new de(le.resources[re + "first/circle1.png"].texture), Se.pivot.set(27, 27), Se.scale.set(.57, .57), Se.position.set(250, 27), Ie = new TWEEN.Tween(Se.position).to({
            x: 100
         }, 2e3).delay(100).easing(TWEEN.Easing.Quadratic.Out).repeat(1 / 0).start();
         var a = new de(le.resources[re + "first/text.png"].texture);
         a.position.set(205, 48), Te.addChild(s, Se, a), Te.position.set(ce - 396, 140), be = new pe, be.position.set(335, 607), ve = new de(le.resources[re + "logo.png"].texture), ve.position.set(ce - 78 - 259, 47), ye.addChild(Ee, Pe, be, Ae, Te, ve), X(), it = new he, it.beginFill(14935004), it.drawRect(0, 0, ce, 750), it.endFill(), me = new pe;
         var r = new de(le.resources[re + "circle1.png"].texture);
         r.pivot.set(22, 22), me.addChild(r);
         for (var i = 10; i > 0; i--) {
            var p = new de(le.resources[re + "circle2.png"].texture);
            p.pivot.set(22, 22), p.alpha = i / 10, me.addChild(p)
         }
         me.position.set(-22, -22), me.visible = !1;
         var c = new de(le.resources[re + "foot_step.png"].texture);
         c.pivot.set(21.5, 6), c.position.set(407, 543), c.scale.set(0, 0);
         var u = new de(le.resources[re + "foot_step.png"].texture);
         u.pivot.set(21.5, 6), u.position.set(407, 543), u.scale.set(0, 0), Ce = new PIXI.extras.AnimatedSprite.fromImages(ei), Ce.animationSpeed = .1, Ce.play(), Ce.left = (ce - 460 - 255) / 2, Ce.footStep = [c, u], Ce.position.set(Ce.left + 255, 543), Ce.pivot.set(255, 255);
         var v = new de(le.resources[re + "foot_step.png"].texture);
         v.pivot.set(21.5, 6), v.position.set(867, 543), v.scale.set(0, 0), v.name = "footStep3";
         var m = new de(le.resources[re + "foot_step.png"].texture);
         m.pivot.set(21.5, 6), m.position.set(867, 543), m.scale.set(0, 0), Me = new PIXI.extras.AnimatedSprite.fromImages(ei), Me.animationSpeed = .1, Me.gotoAndPlay(2), Me.left = (ce - 460 - 255) / 2 + 460, Me.footStep = [v, m], Me.position.set(942.478 + Me.left + 255, 543), Me.pivot.set(255, 255), tt = new pe, Ne = new pe, Ve = new de(le.resources[re + "dialog/heart.png"].texture), Ve.pivot.set(78, 78), Ve.scale.set(0, 0), Ve.position.set(Ce.left + 240 + 78 - 120, 362), He = new PIXI.extras.AnimatedSprite.fromImages(bi), He.animationSpeed = .2, He.loop = !1, He.visible = !1, He.position.set(Ce.left + 240, 234), Ze = new pe, Ze.position.set(Ce.left + 255 - 226, 244);
         var w = new de(le.resources[re + "diamond/text.png"].texture);
         w.position.set((700 - w.width) / 2, 345), Ke = new de(le.resources[re + "diamond/scissors.png"].texture), Ke.visible = !1, Ke.position.set(274, 0), diamondScissorsTween = new TWEEN.Tween(Ke.position).to({
            x: 189,
            y: 68
         }, 1e3).easing(TWEEN.Easing.Quadratic.InOut).delay(500).repeat(1 / 0), Ze.addChild(w), Ze.visible = !1, $e = new pe, $e.position.set(ce + Ce.left, 0), tt.addChild(c, u, v, m, Ce, Me, Ne, He, Ve, $e, Ze), nt = new pe, ot = new he, ot.beginFill(2301728), ot.position.set(-2e3, -2e3), ot.drawRect(0, 0, 1e4, 1e4), ot.endFill(), st = new PIXI.extras.AnimatedSprite.fromImages(Fi), st.position.set(74, -438), st.animationSpeed = .2, st.loop = !1, at = new pe, at.visible = !1, at.position.set(250, 305), pt = new pe;
         var _ = new de(le.resources[re + "foot_step2.png"].texture);
         _.pivot.set(21.5, 6), _.position.set(867, 560), _.scale.set(0, 0);
         var y = new de(le.resources[re + "foot_step2.png"].texture);
         y.pivot.set(21.5, 6), y.position.set(867, 560), y.scale.set(0, 0), rectAni3 = new PIXI.extras.AnimatedSprite.fromImages(ei), rectAni3.animationSpeed = .1, rectAni3.gotoAndPlay(2), rectAni3.left = ce - 250 - 255, rectAni3.footStep = [_, y], rectAni3.position.set(rectAni3.left + 255, 560), rectAni3.pivot.set(255, 255), xt = new pe, xt.visible = !1, xt.position.set(1876, -200), vt = new pe, mt = new pe;
         var I = new de(le.resources[re + "stairs/bg1.png"].texture);
         I.position.set(69, 180);
         var S = new de(le.resources[re + "stairs/bg_left1.png"].texture),
            b = new de(le.resources[re + "stairs/bg_left2.png"].texture);
         b.position.set(193, 0);
         var E = new de(le.resources[re + "stairs/bg_right1.png"].texture);
         E.position.set(958, 266);
         var T = new de(le.resources[re + "stairs/bg_right2.png"].texture);
         T.position.set(964, 70), mt.addChild(I, S, b, E, T), mt.position.set(1400, -612), mt.visible = !1, St = new de(le.resources[re + "stairs/hole_bg.png"].texture), St.position.set(2561, -647), bt = new de(le.resources[re + "stairs/hole_cover.png"].texture), bt.position.set(2561, -794), holeBg1 = new de(le.resources[re + "stairs/hole_bg.png"].texture), holeBg1.position.set(50, -193), holeCover1 = new de(le.resources[re + "stairs/hole_cover1.png"].texture), holeCover1.position.set(50, -340), nt.addChild(ot, holeBg1, st, mt, xt, St, at, bt, holeCover1, pt, _, y, rectAni3, vt), nt.visible = !1, nt.position.set(0, 250), Et = new pe, Et.visible = !1, Kt = new pe;
         var A = new de(le.resources[re + "hand2.png"].texture),
            P = new de(le.resources[re + "line4.png"].texture);
         P.position.set(3, 0), P.pivot.set(0, 0), new TWEEN.Tween({
            percent: 0
         }).to({
            percent: 100
         }, 2e3).onUpdate(function() {
            this.percent < 45 ? A.alpha = 1 : this.percent < 80 ? A.alpha = (35 - (this.percent - 45)) / 35 : A.alpha = 0, this.percent < 50 && (Kt.position.x = 740 - 140 * this.percent / 50), this.percent < 22 ? P.scale.x = this.percent / 22 : P.scale.x = Math.max(0, (44 - this.percent) / 22)
         }).repeat(1 / 0).easing(TWEEN.Easing.Quadratic.InOut).start(), Kt.position.set(600, 600), Kt.addChild(A, P), Kt.visible = !1, Zt = new pe;
         var C = new de(le.resources[re + "hand.png"].texture),
            M = new de(le.resources[re + "line3.png"].texture);
         M.position.set(3, 0), M.pivot.set(0, 0), new TWEEN.Tween({
            percent: 0
         }).to({
            percent: 100
         }, 2e3).onUpdate(function() {
            this.percent < 45 ? C.alpha = 1 : this.percent < 80 ? C.alpha = (35 - (this.percent - 45)) / 35 : C.alpha = 0, this.percent < 50 && (Zt.position.x = 740 - 140 * this.percent / 50), this.percent < 22 ? M.scale.x = this.percent / 22 : M.scale.x = Math.max(0, (44 - this.percent) / 22)
         }).repeat(1 / 0).easing(TWEEN.Easing.Quadratic.InOut).start(), Zt.position.set(600, 600), Zt.addChild(C, M), Zt.visible = !1, fe.addChild(it, tt, nt, Et, ye, we, _e, Kt, Zt), fe.addChild(me), fe.interactive = !0, fe.buttonMode = !0, fe.on("touchstart", l).on("touchmove", d).on("touchend", h), ue.render(fe), et = new pe;
         var N = new de(le.resources[re + "mask.png"].texture);
         N.width = 1e4, N.height = 1e4, et.addChild(N), et.interactive = !0, et.buttonMode = !0, et.on("touchstart", g).on("touchmove", f).on("touchend", x), $t = new pe, et.addChild($t), ye.visible = !0, tt.visible = !1, Tn = "firstPage", e("#writing")[0].play(), xe.render(et), $()
      }
      function p() {
         if (!Rn) {
            Rn = !0;
            for (var e = 0; e < 4; e++) {
               var t = new pe,
                  i = new PIXI.extras.AnimatedSprite.fromImages(li[e]);
               i.animationSpeed = .1, i.loop = !1, t.position.y = 120;
               var o = new PIXI.extras.AnimatedSprite.fromImages(di[e]);
               o.animationSpeed = .1, o.play(), o.position.x = -40, i.position.x = -15, 0 == e ? (t.position.x = Ce.left + 127.5, i.position.y = 20, i.position.x = -15) : 3 == e ? (t.position.x = Ce.left + 127.5, i.position.y = 20, i.position.x = -10) : 1 == e ? (t.position.x = (ce - 460 - 255) / 2 + 460 + 127.5 - 251 + 60, i.position.y = 13, i.position.x = -16) : 2 == e && (t.position.x = (ce - 460 - 255) / 2 + 460 + 127.5 - 402 + 60, i.position.y = 10, i.position.x = -23), t.addChild(o, i), Ne.addChild(t), t.visible = !1
            }
            Re = new PIXI.extras.AnimatedSprite.fromImages(wi), Re.animationSpeed = .4, Re.position.set(291, 197), Re.rotation = Math.PI / 180 * 57.2, Re.pivot.set(142, 0), Re.play(), qe = new PIXI.extras.AnimatedSprite.fromImages(wi), qe.animationSpeed = .4, qe.position.set(419, 196), qe.rotation = -Math.PI / 180 * 58.5, qe.pivot.set(142, 0), qe.play(), Je = new PIXI.extras.AnimatedSprite.fromImages(_i), Je.animationSpeed = .4, Je.position.set(256, 69), Je.rotation = -Math.PI / 180 * 40, Je.pivot.set(64, 0), Je.play(), Ye = new PIXI.extras.AnimatedSprite.fromImages(_i), Ye.animationSpeed = .4, Ye.position.set(451, 69), Ye.rotation = Math.PI / 180 * 40, Ye.pivot.set(64, 0), Ye.play(), je = new PIXI.extras.AnimatedSprite.fromImages(yi), je.animationSpeed = .4, je.position.set(291, 197), je.rotation = Math.PI / 180 * 57.2, je.pivot.set(142, 0), je.play(), Oe = new PIXI.extras.AnimatedSprite.fromImages(yi), Oe.animationSpeed = .4, Oe.position.set(419, 196), Oe.rotation = -Math.PI / 180 * 58.5, Oe.pivot.set(142, 0), Oe.play(), Qe = new PIXI.extras.AnimatedSprite.fromImages(Ii), Qe.animationSpeed = .4, Qe.position.set(256, 69), Qe.rotation = -Math.PI / 180 * 40, Qe.pivot.set(64, 0), Qe.play(), Ge = new PIXI.extras.AnimatedSprite.fromImages(Ii), Ge.animationSpeed = .4, Ge.position.set(451, 69), Ge.rotation = Math.PI / 180 * 40, Ge.pivot.set(64, 0), Ge.play(), je.visible = !1, Oe.visible = !1, Qe.visible = !1, Ge.visible = !1, ze = new PIXI.extras.AnimatedSprite.fromImages(Ei), ze.animationSpeed = .1, ze.onFrameChange = function() {
               We.hasDropped || We.gotoAndStop(ze.currentFrame), Xe.hasDropped || Xe.gotoAndStop(ze.currentFrame), Le.hasDropped || Le.gotoAndStop(ze.currentFrame), Fe.hasDropped || Fe.gotoAndStop(ze.currentFrame)
            };
            var s = new de(le.resources[re + "foot_step.png"].texture);
            s.pivot.set(21.5, 6), s.position.set(357, 298), ze.footStep = s, s.visible = !1, ze.play(), ze.pivot.set(357, 298), ze.position.set(357, 298), We = new PIXI.extras.AnimatedSprite.fromImages(Ti), We.hasDropped = !1, We.loop = !1, We.animationSpeed = .2, Xe = new PIXI.extras.AnimatedSprite.fromImages(Ai), Xe.hasDropped = !1, Xe.loop = !1, Xe.animationSpeed = .2, Le = new PIXI.extras.AnimatedSprite.fromImages(Ci), Le.hasDropped = !1, Le.loop = !1, Le.animationSpeed = .2, Fe = new PIXI.extras.AnimatedSprite.fromImages(Pi), Fe.hasDropped = !1, Fe.loop = !1, Fe.animationSpeed = .2, Be = new PIXI.extras.AnimatedSprite.fromImages(Mi), Be.animationSpeed = .2, Be.pivot.set(125, 125), Be.position.set(445, 195), ke = new PIXI.extras.AnimatedSprite.fromImages(Mi), ke.animationSpeed = .2, ke.pivot.set(125, 125), ke.scale.set(.5, .5), ke.position.set(445, 55), ke.rotation = -Math.PI / 180 * 90, Ue = new PIXI.extras.AnimatedSprite.fromImages(Ni), Ue.animationSpeed = .2, Ue.pivot.set(375, 125), Ue.position.set(250, 195), De = new PIXI.extras.AnimatedSprite.fromImages(Ni), De.animationSpeed = .2, De.pivot.set(375, 125), De.scale.set(.5, .5), De.position.set(250, 55), De.rotation = Math.PI / 180 * 90, De.loop = !1, ke.loop = !1, Ue.loop = !1, Be.loop = !1, Ze.addChild(s, ze, Xe, We, Le, Fe, De, ke, Ue, Be, Ke, Re, qe, Je, Ye, je, Oe, Qe, Ge);
            var a = new PIXI.extras.AnimatedSprite.fromImages(zi);
            a.animationSpeed = .2, a.play(), a.onFrameChange = function() {
               10 == this.currentFrame && this.gotoAndPlay(0)
            }, a.loop = !1, a.hasCrashed = !1, a.timer = null, $e.addChild(a);
            var r = new PIXI.extras.AnimatedSprite.fromImages(Wi);
            r.animationSpeed = .2, r.play(), r.onFrameChange = function() {
               10 == this.currentFrame && this.gotoAndPlay(0)
            }, r.loop = !1, r.hasCrashed = !1, r.timer = null, r.position.set(630, 0), $e.addChild(r);
            var p = new PIXI.extras.AnimatedSprite.fromImages(Xi);
            p.animationSpeed = .2, p.play(), p.onFrameChange = function() {
               10 == this.currentFrame && this.gotoAndPlay(0)
            }, p.loop = !1, p.hasCrashed = !1, p.timer = null, p.position.set(1260, 0), $e.addChild(p);
            var l = new PIXI.extras.AnimatedSprite.fromImages(Li);
            l.animationSpeed = .2, l.gotoAndStop(0), l.loop = !1, l.hasCrashed = !1, l.timer = null, l.position.set(1995, 0), $e.addChild(l);
            var d = new de(le.resources[re + "text4/line0.png"].texture),
               h = new de(le.resources[re + "text4/line1.png"].texture),
               c = new de(le.resources[re + "text4/line2.png"].texture),
               g = new de(le.resources[re + "text4/line3.png"].texture);
            d.position.set(200, 635), h.position.set(610, 680), c.position.set(726, 652), g.position.set(1745, 85), $e.addChild(d, h, c, g), rt = new PIXI.extras.AnimatedSprite.fromImages(Di), rt.animationSpeed = .1, rt.onFrameChange = function() {
               triangleTop.hasDropped || triangleTop.gotoAndStop(rt.currentFrame)
            }, rt.play(), triangleTop = new PIXI.extras.AnimatedSprite.fromImages(ki), triangleTop.position.set(-172.5, -201), triangleTop.animationSpeed = .2, triangleTop.loop = !1, triangleTop.hasDropped = !1, lt = new PIXI.extras.AnimatedSprite.fromImages(Si), lt.animationSpeed = .4, lt.position.set(-14.5, 50), lt.play(), lt.visible = !1, dt = new PIXI.extras.AnimatedSprite.fromImages(yi), dt.animationSpeed = .4, dt.position.set(-14.5, 50), dt.play(), dt.visible = !1, ht = new PIXI.extras.AnimatedSprite.fromImages(Ni), ht.animationSpeed = .2, ht.pivot.set(375, 125), ht.scale.set(.8, .8), ht.position.set(130, 50), ht.rotation = Math.PI / 180 * 135, ct = new PIXI.extras.AnimatedSprite.fromImages(Mi), ct.animationSpeed = .2, ct.pivot.set(125, 125), ct.scale.set(.8, .8), ct.position.set(130, 50), ct.rotation = -Math.PI / 180 * 135, ht.loop = !1, ct.loop = !1, ft = new de(le.resources[re + "triangle/text.png"].texture), ft.position.set(500, 50), ft.visible = !1, gt = new de(le.resources[re + "triangle/scissors.png"].texture), gt.visible = !1, gt.position.set(274, 32), triangleScissorsTween = new TWEEN.Tween(gt.position).to({
               x: -50
            }, 2e3).easing(TWEEN.Easing.Quadratic.InOut).delay(500).repeat(1 / 0), ut = new de(le.resources[re + "foot_step2.png"].texture), ut.pivot.set(21.5, 6), ut.position.set(131.5, 255), ut.scale.set(0, 0), at.addChild(ut, rt, triangleTop, lt, dt, ht, ct, ft, gt);
            for (var e = 0; e < 3; e++) {
               var t = new pe,
                  i = new PIXI.extras.AnimatedSprite.fromImages(vi[e]);
               i.animationSpeed = .1, i.loop = !1, t.position.y = 120;
               var o = new PIXI.extras.AnimatedSprite.fromImages(mi[e]);
               o.animationSpeed = .1, o.play(), o.position.x = -40, i.position.x = -15, 0 == e ? (t.position.x = 377.5, i.position.y = 10) : 1 == e ? (t.position.x = 377.5, i.position.y = 13, i.position.x = -20) : 2 == e && (t.position.x = ce - 250 - 500 - 127.5, i.position.y = 15, i.position.x = -20), t.addChild(o, i), pt.addChild(t), t.visible = !1
            }
            var f = new pe;
            f.position.set(0, 586);
            var u = new de(le.resources[re + "stairs/floor.png"].texture);
            u.alpha = .25;
            var x = new de(le.resources[re + "stairs/stair1_line.png"].texture);
            x.position.set(94, 128), wt = new PIXI.extras.AnimatedSprite.fromImages(Ui), wt.position.set(-95, 100), f.addChild(u, x, wt);
            var v = new pe;
            v.position.set(255, 393);
            var m = new de(le.resources[re + "stairs/floor2.png"].texture);
            m.alpha = .25, m.position.set(52, 0);
            var w = new de(le.resources[re + "stairs/stair2_main.png"].texture);
            w.position.set(0, 56), _t = new PIXI.extras.AnimatedSprite.fromImages(Bi), _t.position.set(80, -45), v.addChild(m, w, _t);
            var _ = new pe;
            _.position.set(447, 166);
            var y = new de(le.resources[re + "stairs/floor3.png"].texture);
            y.alpha = .25, y.position.set(0, 21);
            var I = new de(le.resources[re + "stairs/stair3_main.png"].texture);
            yt = new PIXI.extras.AnimatedSprite.fromImages(Ri), yt.position.set(130, 20), _.addChild(y, I, yt);
            var S = new pe;
            S.position.set(714, 0);
            var b = new de(le.resources[re + "stairs/floor4.png"].texture);
            b.alpha = .25, b.position.set(13, 0);
            var E = new de(le.resources[re + "stairs/stair4_main.png"].texture);
            E.position.set(0, 12), It = new PIXI.extras.AnimatedSprite.fromImages(qi), It.position.set(150, 10), S.addChild(b, E, It), xt.addChild(f, v, _, S), Tt = new he, Tt.beginFill(14935004), Tt.drawRect(-2e3, -2e3, 2e4, 2e4), Tt.endFill(), Pt = new de(le.resources[re + "dialog3/hole.png"].texture), Pt.position.set(127, 428), At = new PIXI.extras.AnimatedSprite.fromImages(Oi), At.position.set(270, 274), At.animationSpeed = .2, At.loop = !1, Nt = new he, Nt.beginFill(6737151), Nt.drawRect(0, 0, 2e3, 566), Nt.endFill(), Nt.position.set(518, 135), Ct = new PIXI.extras.AnimatedSprite.fromImages(Ji), Ct.animationSpeed = .1, Ct.onFrameChange = function() {
               3 == this.currentFrame && ("state1" == this.state ? this.gotoAndPlay(0) : this.animationSpeed = .2), 18 == this.currentFrame && "state2" == this.state && (this.animationSpeed = .1), 21 == this.currentFrame && ("state2" == this.state ? (this.animationSpeed = .1, this.gotoAndPlay(18)) : this.animationSpeed = .2), 36 == this.currentFrame && "state3" == this.state && (this.animationSpeed = .1), 39 == this.currentFrame && ("state3" == this.state ? (this.animationSpeed = .1, this.gotoAndPlay(36)) : this.animationSpeed = .2), 55 == this.currentFrame && "state4" == this.state && (this.animationSpeed = .1), 58 == this.currentFrame && ("state4" == this.state ? (this.animationSpeed = .1, this.gotoAndPlay(55)) : this.animationSpeed = .2), 72 == this.currentFrame && "state5" == this.state && (this.animationSpeed = .1), 75 == this.currentFrame && ("state5" == this.state ? (this.animationSpeed = .1, this.gotoAndPlay(72)) : this.animationSpeed = .2)
            }, Ct.state = "state1", Ct.visible = !1, Ct.position.set(518, 135), Mt = new de(le.resources[re + "foot_step.png"].texture), Mt.pivot.set(21.5, 6), Mt.position.set(867, 566), Mt.scale.set(0, 0);
            var T = new de(le.resources[re + "foot_step.png"].texture);
            T.pivot.set(21.5, 6), T.position.set(867, 566), T.scale.set(0, 0);
            var A = new de(le.resources[re + "foot_step.png"].texture);
            A.pivot.set(21.5, 6), A.position.set(867, 566), A.scale.set(0, 0), zt = new PIXI.extras.AnimatedSprite.fromImages(ei), zt.animationSpeed = .1, zt.gotoAndPlay(2), zt.left = ce - 250 - 255, zt.footStep = [T, A], zt.position.set(zt.left + 255 + 800, 566), zt.pivot.set(255, 255), Wt = new PIXI.extras.AnimatedSprite.fromImages(ei), Wt.animationSpeed = .1, Wt.gotoAndPlay(0), Wt.left = ce - 250 - 255, Wt.footStep = [T, A], Wt.position.set(-510, 566), Wt.pivot.set(255, 255), Xt = new pe;
            for (var e = 0; e < 4; e++) {
               var t = new pe,
                  i = new PIXI.extras.AnimatedSprite.fromImages(en[e]);
               i.animationSpeed = .1, i.loop = !1, t.position.y = 120;
               var o = new PIXI.extras.AnimatedSprite.fromImages(tn[e]);
               o.animationSpeed = .1, o.play(), o.position.x = -40, i.position.x = -15, i.position.y = 20, 0 == e ? t.position.x = ce - 250 - 345 - 70 : t.position.x = ce - 250 - 250 - 70, t.addChild(o, i), Xt.addChild(t), t.visible = !1
            }
            Lt = new de(le.resources[re + "dialog/heart.png"].texture), Lt.pivot.set(78, 78), Lt.scale.set(0, 0), Lt.position.set(370, 400), Ft = new PIXI.extras.AnimatedSprite.fromImages(bi), Ft.animationSpeed = .2, Ft.loop = !1, Ft.visible = !1, Ft.position.set(412, 272), Dt = new de(le.resources[re + "dialog/heart.png"].texture), Dt.pivot.set(78, 78), Dt.scale.set(0, 0), Dt.position.set(ce - 250 - 255 + 50, 400), kt = new PIXI.extras.AnimatedSprite.fromImages(bi), kt.animationSpeed = .2, kt.loop = !1, kt.visible = !1, kt.position.set(ce - 250 - 255 + 50 - 78 - 120, 272), Ut = new PIXI.extras.AnimatedSprite.fromImages(nn), Ut.position.set(2e3, 324), Ut.onFrameChange = function() {
               this.currentFrame >= 3 && "loop" == this.state ? (this.gotoAndPlay(0), this.animationSpeed = .1) : 4 == this.currentFrame && (this.animationSpeed = .2)
            }, Ut.state = "loop", Ut.loop = !1, Ut.play(), Rt = new PIXI.extras.AnimatedSprite.fromImages(dn), Rt.position.set(250, 394), Rt.animationSpeed = .2, Rt.play(), Rt.visible = !1, jt = new PIXI.extras.AnimatedSprite.fromImages(hn), jt.position.set(730 + (ce - 1334) / 2, 329), jt.animationSpeed = .2, jt.play(), jt.visible = !1, greatFire = new PIXI.extras.AnimatedSprite.fromImages(cn), greatFire.position.set((ce - 1334) / 2, 0), greatFire.visible = !1, Bt = new pe;
            for (var e = 0; e < 2; e++) {
               var t = new pe,
                  i = new PIXI.extras.AnimatedSprite.fromImages(pn[e]);
               i.animationSpeed = .1, i.loop = !1, t.position.y = 240;
               var o = new PIXI.extras.AnimatedSprite.fromImages(ln[e]);
               o.animationSpeed = .1, o.play(), o.position.x = -40, i.position.x = -15, i.position.y = 20, 0 == e ? t.position.x = 337 : (i.position.x = -8, t.position.x = 455), t.addChild(o, i), Bt.addChild(t), t.visible = !1
            }
            qt = new pe;
            for (var e = 0; e < 5; e++) {
               var t = new pe,
                  i = new PIXI.extras.AnimatedSprite.fromImages(Sn[e]);
               i.animationSpeed = .1, i.loop = !1, t.position.y = 220;
               var o = new PIXI.extras.AnimatedSprite.fromImages(bn[e]);
               o.animationSpeed = .1, o.play(), o.position.x = -40, i.position.x = -15, i.position.y = 20, 0 == e ? t.position.x = 710 + (ce - 1334) / 2 : 1 == e ? t.position.x = 537 + (ce - 1334) / 2 : 2 == e ? t.position.x = 630 + (ce - 1334) / 2 : 3 == e ? t.position.x = 680 + (ce - 1334) / 2 : 4 == e && (t.position.x = 480 + (ce - 1334) / 2), t.addChild(o, i), qt.addChild(t), t.visible = !1
            }
            Ht = new de(le.resources[re + "dialog/heart.png"].texture), Ht.pivot.set(78, 78), Ht.scale.set(0, 0), Ht.position.set(728 + (ce - 1334) / 2, 350), Vt = new PIXI.extras.AnimatedSprite.fromImages(bi), Vt.animationSpeed = .2, Vt.loop = !1, Vt.visible = !1, Vt.position.set(650 + (ce - 1334) / 2, 272), Ot = new PIXI.extras.AnimatedSprite.fromImages(En), Ot.animationSpeed = .2, Ot.position.set((ce - 1334) / 2, 0), Ot.visible = !1, Ot.onFrameChange = function() {
               152 == this.currentFrame && this.gotoAndPlay(121)
            }, Yt = new pe;
            for (var e = 0; e < 9; e++) {
               var P = new de(le.resources[re + "end_text/t1_" + e + ".png"].texture);
               P.position.x = 38 * e, P.alpha = 0, Yt.addChild(P)
            }
            Yt.position.set(151, 583), Qt = new pe;
            for (var e = 0; e < 11; e++) {
               var P = new de(le.resources[re + "end_text/t2_" + e + ".png"].texture);
               P.position.x = 38 * e, P.alpha = 0, Qt.addChild(P)
            }
            Qt.position.set(151, 633), Jt = new de(le.resources[re + "end_text/text_line2.png"].texture), Jt.position.set(48, 589), Gt = new pe;
            var C = new de(le.resources[re + "end_text/plus.png"].texture);
            C.position.set(179, 630);
            var M = new de(le.resources[re + "end_text/right_line.png"].texture);
            M.position.set(416, 530);
            var N = new de(le.resources[re + "logo.png"].texture);
            N.position.set(172, 47), Gt.addChild(M, C, N), Gt.position.set(ce - 509, 0), Yt.visible = !1, Qt.visible = !1, Jt.visible = !1, Gt.visible = !1, Et.addChild(Tt, Pt, At, Mt, Ct, T, A, zt, Wt, Xt, Bt, Lt, Ft, Dt, kt, Rt, Ut, greatFire, jt, Ht, Vt, qt, Ot, Jt, Yt, Qt, Gt);
            var z = new de(le.resources[re + "stairs/light.png"].texture);
            new TWEEN.Tween({
               step: 0
            }).to({
               step: 100
            }, 500).onUpdate(function() {
               this.step < 25 ? z.alpha = (25 - this.step) / 25 : this.step < 50 ? z.alpha = (25 - (50 - this.step)) / 25 : this.step < 75 ? z.alpha = (75 - this.step) / 25 : this.step <= 100 && (z.alpha = (100 - (75 - this.step)) / 25)
            }).repeat(1 / 0).delay(3e3).start();
            var W = new PIXI.extras.AnimatedSprite.fromImages(ji);
            W.animationSpeed = .3, W.play(), vt.position.set(300, 0), vt.visible = !1, vt.addChild(W, z), n()
         }
      }
      function l(e) {
         var t = e.data.originalEvent,
            i = t.touches[0].pageX / SCALE,
            n = t.touches[0].pageY / SCALE;
         if ("firstPage" == Tn) 90 == ge ? On = {
            x: n,
            y: 750 - i
         } : 0 == ge && (On = {
            x: i,
            y: n
         }), Jn = 0, Ie.stop(), Se.position.x = 250;
         else if ("main" == Tn) {
            jn.doTouchStart(t.touches, t.timeStamp), me.visible = !0, me.children[0].position.set(n, 750 - i);
            for (var o = 0; o < me.children.length; o++) {
               var s = me.children[o];
               90 == ge ? s.position.set(n, 750 - i) : 0 == ge && s.position.set(i, n)
            }
         }
      }
      function d(e) {
         var t = e.data.originalEvent,
            i = t.touches[0].pageX / SCALE,
            n = t.touches[0].pageY / SCALE;
         if ("firstPage" == Tn) 90 == ge ? Jn = n - On.x : 0 == ge && (Jn = i - On.x), Jn > 0 ? Jn = 0 : Jn < -224 && (Jn = -224), we.children.forEach(function(e, t) {
            9 == t ? e.position.x = Jn / 30 * (9 - t) + 304 + 64 : e.position.x = Jn / 30 * (9 - t) + 38 * t
         }), _e.children.forEach(function(e, t) {
            e.position.x = Jn / 20 * (8 - t) + 38 * t
         }), Se.position.x = 250 + Jn, Jn == -224 && .57 == Se.scale.x ? (new TWEEN.Tween(Se.scale).to({
            x: 1,
            y: 1
         }, 300).start(), setTimeout(function() {
            Jn == -224 && new TWEEN.Tween({
               alpha: 1
            }).to({
               alpha: 0
            }, 300).onUpdate(function() {
               ye.alpha = this.alpha
            }).onComplete(function() {
               ye.visible = !1, tt.visible = !0, Tn = "main", Kt.visible = !0, p()
            }).start(), jn.doTouchStart(t.touches, t.timeStamp)
         }, 300)) : Jn > -224 && 1 == Se.scale.x && new TWEEN.Tween(Se.scale).to({
            x: .57,
            y: .57
         }, 300).start();
         else if ("main" == Tn) {
            jn.doTouchMove(t.touches, t.timeStamp, t.scale), 90 == ge ? me.children[0].position.set(n, 750 - i) : 0 == ge && me.children[0].position.set(i, n);
            for (var o = 1; o < me.children.length; o++) {
               var s = me.children[o];
               Yn[o] && Yn[o].stop(), 90 == ge ? Yn[o] = new TWEEN.Tween(s.position).to({
                  x: n,
                  y: 750 - i
               }, 8 * o).onUpdate(function() {
                  s.position.set(this.x, this.y)
               }).start() : 0 == ge && (Yn[o] = new TWEEN.Tween(s.position).to({
                  x: i,
                  y: n
               }, 8 * o).onUpdate(function() {
                  s.position.set(this.x, this.y)
               }).start())
            }
         }
      }
      function h(e) {
         var t = e.data.originalEvent;
         "firstPage" == Tn ? Jn > -224 && (new TWEEN.Tween(Se.scale).to({
            x: .57,
            y: .57
         }, 300).start(), new TWEEN.Tween(Se.position).to({
            x: 250
         }, 300).start().onComplete(function() {
            Ie.start()
         }), we.children.forEach(function(e, t) {
            9 == t ? new TWEEN.Tween(e.position).to({
               x: 368
            }, 300).start() : new TWEEN.Tween(e.position).to({
               x: 38 * t
            }, 300).start()
         }), _e.children.forEach(function(e, t) {
            new TWEEN.Tween(e.position).to({
               x: 38 * t
            }, 300).start()
         })) : "main" == Tn && (jn.doTouchEnd(t.timeStamp), me.visible = !1)
      }
      function c() {
         Vn = {}, Kn = {}, Zn = {}, $n = [], eo = [], to = 0, io = [], no = [], ao = [], ro = [], oo = 0, lo = !0
      }
      function g(t) {
         var i = t.data.originalEvent,
            n = i.touches[0].pageX / SCALE,
            o = i.touches[0].pageY / SCALE;
         if (Hn = +new Date, 90 == ge ? (Qn.x = o, Qn.y = 750 - n, Gn = {
            x: o,
            y: 750 - n
         }) : 0 == ge && (Qn.x = n, Qn.y = o, Gn = {
            x: n,
            y: o
         }), "cut1" != An) {
            me.visible = !0, me.children[0].position.set(o, 750 - n);
            for (var s = 0; s < me.children.length; s++) {
               var a = me.children[s];
               90 == ge ? a.position.set(o, 750 - n) : 0 == ge && a.position.set(n, o)
            }
         }
         "cut1" != An && "cut2" != An && "dialog3_start" != An || (e("#cut")[0].play(), me.visible = !1, E(Qn, Hn), c(), Kn.x = Qn.x, Kn.y = Qn.y, $n.push(Kn), eo.push(Kn), io.push(Kn), no.push(Kn))
      }
      function f(e) {
         var t = e.data.originalEvent,
            i = t.touches[0].pageX / SCALE,
            n = t.touches[0].pageY / SCALE;
         if (90 == ge ? Gn = {
            x: n,
            y: 750 - i
         } : 0 == ge && (Gn = {
            x: i,
            y: n
         }), "cut1" != An) {
            90 == ge ? me.children[0].position.set(n, 750 - i) : 0 == ge && me.children[0].position.set(i, n);
            for (var o = 1; o < me.children.length; o++) {
               var s = me.children[o];
               Yn[o] && Yn[o].stop(), 90 == ge ? Yn[o] = new TWEEN.Tween(s.position).to({
                  x: n,
                  y: 750 - i
               }, 8 * o).onUpdate(function() {
                  s.position.set(this.x, this.y)
               }).start() : 0 == ge && (Yn[o] = new TWEEN.Tween(s.position).to({
                  x: i,
                  y: n
               }, 8 * o).onUpdate(function() {
                  s.position.set(this.x, this.y)
               }).start())
            }
         }
         if ("cut1" == An || "cut2" == An || "dialog3_start" == An) {
            if (me.visible = !1, !lo) return;
            E(Gn, Hn);
            var a = {
               x: Gn.x,
               y: Gn.y
            },
               r = DISTANCE(eo[eo.length - 1], a);
            ANGLE(Kn, a);
            if (r > 10 && (eo.push(a), eo.length >= 3 && eo.length - to >= 5)) {
               var p = eo[to],
                  l = eo[to + 1],
                  d = eo[eo.length - 1],
                  h = eo[eo.length - 3],
                  c = eo[eo.length - 2],
                  g = getAngleBetween(h, c, c, d),
                  f = getAngleBetween(p, l, l, d);
               to = eo.length - 1, no.push(eo[to - 1]), no.push(eo[to]), no.length > 1 && ro.push({
                  firstPoint: no[no.length - 3],
                  endPoint: no[no.length - 2]
               }), g < 40 && f < 20 || (to = eo.length - 1, io.push(eo[to - 1]), io.push(eo[to]), io.length > 1 && ao.push({
                  firstPoint: io[io.length - 3],
                  endPoint: io[io.length - 2]
               }))
            }
            $n.push(a), Kn = a, u(ro);
            for (var x = "", o = 0; o < po.length; o++) {
               var w = figureShape(ro, po[o].rule);
               w === !0 && (x = po[o].figureName, oo = po[o].figure)
            }
            "cut1" == An ? v(oo) : "cut2" == An && m(oo)
         }
      }
      function u(e) {
         for (var t = e.length, i = 0; i < t; i++) {
            var n = getAngleBetween(e[i].firstPoint, e[i].endPoint, so[0], so[1]),
               o = e[i].firstPoint.x,
               s = e[i].firstPoint.y,
               a = e[i].endPoint.x,
               r = e[i].endPoint.y,
               p = ho;
            n < p ? (e[i].style = 1, e[i].styleName = "right") : n > 180 - p ? (e[i].style = 0, e[i].styleName = "left") : n > 90 - p && n < 90 + p ? r >= s ? (e[i].style = 2, e[i].styleName = "down") : (e[i].style = 3, e[i].styleName = "up") : a >= o && r <= s ? (e[i].style = 4, e[i].styleName = "up-right") : a < o && r < s ? (e[i].style = 5, e[i].styleName = "up-left") : a >= o && r >= s ? (e[i].style = 6, e[i].styleName = "down-right") : a < o && r > s && (e[i].style = 7, e[i].styleName = "down-left")
         }
      }
      function x(t) {
         var i = (t.data.originalEvent, !0);
         if (Gn.x && Gn.x - Qn.x > 0 && (i = !1), "cut1" != An && (me.visible = !1), "dialog1_start" == An) {
            if (4 == mo) return;
            if (1 == i ? (mo++, Kt.visible = !1) : mo > 0 && mo--, 4 == mo) {
               for (var n = 0; n < 4; n++) Ne.children[n].visible = !1;
               return k({
                  moveItem: Me,
                  targetLeft: 500,
                  forwards: !0
               }), k({
                  moveItem: Ce,
                  targetLeft: 157.08,
                  forwards: !0,
                  time: 300
               }, function() {
                  Ce.footStep[0].scale.set(0, 0), Ce.footStep[1].scale.set(0, 0), D("cut1")
               }), void e("canvas").eq(1).show()
            }
            for (var n = 0; n < 4; n++) Ne.children[n].visible = !1;
            Ne.children[mo].visible = !0, Ne.children[mo].children[1].gotoAndPlay(0)
         }
         if ("dialog2_start" == An) {
            if (3 == wo) return;
            if (1 == i ? (wo++, Zt.visible = !1) : wo > 0 && wo--, 3 == wo) {
               for (var n = 0; n < 3; n++) pt.children[n].visible = !1;
               return void k({
                  moveItem: rectAni3,
                  targetLeft: 500,
                  forwards: !0
               }, function() {
                  rectAni3.visible = !1, rectAni3.footStep[0].scale.set(0, 0), rectAni3.footStep[1].scale.set(0, 0), D("cut2")
               })
            }
            for (var n = 0; n < 3; n++) pt.children[n].visible = !1;
            pt.children[wo].visible = !0, pt.children[wo].children[1].play()
         }
         if ("dialog3_start" == An) {
            if (4 == yo) return;
            if ("state1" == Ct.state) return Ct.state = "state2", void Ct.gotoAndPlay(3);
            if (yo++, 4 == yo) return void M();
            for (var n = 0; n < yo; n++) Xt.children[n].visible = !1;
            Xt.children[yo].visible = !0, Xt.children[yo].children[1].play(), Ct.state = "state" + (yo + 2), Ct.gotoAndPlay(1 == yo ? 21 : 2 == yo ? 39 : 3 == yo ? 58 : 72)
         }
         if ("dialog4_start" == An) {
            if (2 == Io) return;
            if (1 == i ? (Io++, Kt.visible = !1) : Io > 0 && Io--, 2 == Io) return void N();
            for (var n = 0; n < 2; n++) Bt.children[n].visible = !1;
            Bt.children[Io].visible = !0, Bt.children[Io].children[1].gotoAndPlay(0)
         }
         if ("dialog5_start" == An) {
            if (5 == So) return;
            if (1 == i ? (So++, Kt.visible = !1) : So > 0 && So--, 5 == So) return void z();
            for (var n = 0; n < 5; n++) qt.children[n].visible = !1;
            qt.children[So].visible = !0, qt.children[So].children[1].gotoAndPlay(0)
         }
         if ("cut1" == An || "cut2" == An || "dialog3_start" == An) {
            if (!lo) return;
            if (lo = !1, eo.length - to == 1);
            else if (to = eo.length - 1, io.push(eo[to - 1]), io.push(eo[to]), io.length > 1 && ao.push({
               firstPoint: io[io.length - 2],
               endPoint: io[io.length - 1]
            }), io.length <= 2) return;
            u(ao);
            for (var o = "", n = 0; n < po.length; n++) {
               var s = figureShape(ao, po[n].rule);
               s === !0 && (o = po[n].figureName, oo = po[n].figure)
            }
            "cut1" == An ? v(oo) : "cut2" == An && m(oo)
         }
      }
      function v(e) {
         var t = {
            x: (Kn.x + Qn.x) / 2,
            y: (Kn.y + Qn.y) / 2
         };
         3 == e ? t.x <= 540 + Ce.left - 152 && t.y <= 400 ? w(0) : t.x > 540 + Ce.left - 152 && t.y > 400 && w(3) : 4 == e && (t.x > 540 + Ce.left - 152 && t.y <= 400 ? w(1) : t.x <= 540 + Ce.left - 152 && t.y > 400 && w(2))
      }
      function m(t) {
         5 != t && 3 != t || triangleTop.hasDropped ? 1 != t && 4 != t || triangleTop.hasDropped || (triangleScissorsTween.stop(), gt.visible = !1, ft.visible = !1, dt.visible = !0, lt.visible = !1, ct.gotoAndPlay(0), triangleTop.hasDropped = !0, triangleTop.gotoAndPlay(14), triangleTop.onFrameChange = function() {
            console.log(this.currentFrame), 24 == triangleTop.currentFrame && (triangleTop.stop(), y())
         }, e(".debug").html("\u53f3")) : (triangleScissorsTween.stop(), gt.visible = !1, ft.visible = !1, dt.visible = !0, lt.visible = !1, ht.gotoAndPlay(0), triangleTop.hasDropped = !0, triangleTop.onFrameChange = function() {
            13 == triangleTop.currentFrame && (triangleTop.stop(), y())
         }, triangleTop.gotoAndPlay(3), e(".debug").html("\u5de6"))
      }
      function w(e) {
         (Ke.visible = !0) && (diamondScissorsTween.stop(), Ke.visible = !1), 0 != e || We.hasDropped ? 1 != e || Le.hasDropped ? 2 != e || Xe.hasDropped ? 3 != e || Fe.hasDropped || (Fe.hasDropped = !0, Fe.gotoAndPlay(3), Be.play(), qe.visible = !1, Oe.visible = !0, co++) : (Xe.hasDropped = !0, Xe.gotoAndPlay(3), Ue.play(), Re.visible = !1, je.visible = !0, co++) : (Le.hasDropped = !0, Le.gotoAndPlay(3), ke.play(), Ye.visible = !1, Ge.visible = !0, co++) : (We.hasDropped = !0, We.gotoAndPlay(3), De.play(), Je.visible = !1, Qe.visible = !0, co++), 4 == co && (An = "slide2", setTimeout(function() {
            _()
         }, 1200))
      }
      function _() {
         go || (Kt.visible = !0, ze.footStep.visible = !0, ge > 0 ? jn.__scrollTop = 0 : jn.__scrollLeft = 0, go = !0, new TWEEN.Tween({
            alpha: 1
         }).to({
            alpha: 0
         }, 300).onUpdate(function() {
            var e = this.alpha;
            Ze.children.forEach(function(t, i) {
               1 != i && 2 != i && (t.alpha = e)
            })
         }).onComplete(function() {
            e("canvas").eq(1).hide()
         }).start())
      }
      function y() {
         dt.visible = !1, An = "slide3", Zt.visible = !0, ge > 0 ? jn.__scrollTop = 0 : jn.__scrollLeft = 0, e("canvas").eq(1).hide()
      }
      function I() {
         _o = !1, Kt.visible = !0, An = "slide4", ge > 0 ? jn.__scrollTop = 0 : jn.__scrollLeft = 0, e("canvas").eq(1).hide()
      }
      function S() {
         _o = !1, Kt.visible = !0, An = "slide5", ge > 0 ? jn.__scrollTop = 0 : jn.__scrollLeft = 0, e("canvas").eq(1).hide()
      }
      function b() {
         if (0 != vo.length) {
            $t.removeChildren(), Hn = +new Date;
            var e = new he;
            e.moveTo(vo[0].x, vo[0].y), vo.forEach(function(t, i) {
               if (Hn - t.time > fo) removeByValue(vo, t);
               else {
                  var n = t.lineWidth * (1 - (Hn - t.time) / fo);
                  e.lineStyle(n, xo, 1), e.lineTo(t.position.x, t.position.y)
               }
            }), $t.addChild(e)
         }
      }
      function E(e, t) {
         vo.push({
            position: e,
            lineWidth: uo,
            time: t
         })
      }
      function T(t) {
         An = t, _o = !0, e("canvas").eq(1).show(), "dialog1" == t ? (Ce.position.x = Ce.left, Ce.rotation = Math.PI / 2 * 2, Ce.footStep[0].scale.set(0, 0), Ce.footStep[1].scale.set(0, 0), ge > 0 ? jn.__scrollTop = 0 : jn.__scrollLeft = 0, setTimeout(function() {
            setTimeout(function() {
               Ne.children[0].visible = !0, Ne.children[0].children[1].gotoAndPlay(0), An = "dialog1_start", Kt.visible = !0
            }, 1e3), H()
         }, 200)) : "dialog2" == t ? (rectAni3.left = ce - 250 - 255, rectAni3.position.set(rectAni3.left + 255, 560), setTimeout(function() {
            pt.children[0].visible = !0, pt.children[0].children[1].play(), An = "dialog2_start", Zt.visible = !0
         }, 200)) : "dialog3" == t ? (Et.visible = !0, At.play(), At.onFrameChange = function() {
            8 == this.currentFrame && (this.stop(), this.visible = !1, Ct.visible = !0, Ct.play(), new TWEEN.Tween(Pt.position).to({
               x: -600
            }, 1090.5).delay(100).start(), new TWEEN.Tween(Ct.position).to({
               x: 69
            }, 673.5).delay(100).start(), new TWEEN.Tween(zt.position).to({
               x: rectAni3.left + 255
            }, 800).onComplete(function() {
               A()
            }).delay(100).start())
         }) : "dialog4" == t ? P() : "dialog5" == t && Z()
      }
      function A() {
         setTimeout(function() {
            Xt.children[0].visible = !0, Xt.children[0].children[1].play(), An = "dialog3_start", Kt.visible = !0
         }, 200)
      }
      function P() {
         setTimeout(function() {
            Bt.children[0].visible = !0, Bt.children[0].children[1].play(), An = "dialog4_start", Kt.visible = !0
         }, 200)
      }
      function C() {
         Rt.position.set(435 + (ce - 1334) / 2, 296), greatFire.visible = !1, Rt.visible = !0, jt.visible = !0, setTimeout(function() {
            qt.children[0].visible = !0, qt.children[0].children[1].play(), An = "dialog5_start", Kt.visible = !0
         }, 200)
      }
      function M() {
         An = "dialog3_end", Kt.visible = !1;
         for (var e = 0; e < yo; e++) Xt.children[e].visible = !1;
         V(), setTimeout(function() {
            new TWEEN.Tween(Ct.position).to({
               y: 258
            }, 500).onComplete(function() {
               k({
                  moveItem: zt,
                  targetLeft: 3.999 * -157.08,
                  forwards: !0,
                  time: 2e3
               }, function() {
                  zt.footStep[0].scale.set(0, 0), zt.footStep[1].scale.set(0, 0), new TWEEN.Tween(zt.position).to({
                     x: 710
                  }, 500).start(), new TWEEN.Tween(Wt.position).to({
                     x: 335
                  }, 500).start(), new TWEEN.Tween(Ct.position).to({
                     x: 649
                  }, 500).onComplete(function() {
                     K()
                  }).start()
               })
            }).start()
         }, 2e3)
      }
      function N() {
         for (var e = 0; e < Io; e++) Bt.children[e].visible = !1;
         Ct.visible = !1, Ct.stop(), Rt.visible = !0, S()
      }
      function z() {
         Rt.visible = !1, jt.visible = !1, qt.visible = !1, Ot.visible = !0, Ot.play(), setTimeout(function() {
            F()
         }, 8e3)
      }
      function W() {
         bo = !0, Ct.mask = Nt;
         var e = new TWEEN.Tween(Ct.position).to({
            y: 338
         }, 100).start(),
            t = new TWEEN.Tween(Ct.position).to({
               y: 308
            }, 200).delay(300);
         e.chain(t)
      }
      function X() {
         Ee.alpha = 0, Pe.alpha = 0, new TWEEN.Tween({
            alpha: 0
         }).to({
            alpha: 1
         }, 500).onUpdate(function() {
            Ee.alpha = this.alpha
         }).delay(500).onComplete(function() {
            Ae.play()
         }).start(), new TWEEN.Tween({
            alpha: 0
         }).to({
            alpha: 1
         }, 500).onUpdate(function() {
            Pe.alpha = this.alpha
         }).delay(1e3).start(), we.children.forEach(function(e, t) {
            t < 9 && (e.alpha = 0, new TWEEN.Tween({
               _this: e,
               alpha: 0
            }).to({
               alpha: 1
            }, 300).onUpdate(function() {
               this._this.alpha = this.alpha
            }).delay(1200 * Math.random() + 300).start())
         }), _e.children.forEach(function(e, t) {
            e.alpha = 0, new TWEEN.Tween({
               _this: e,
               alpha: 0
            }).to({
               alpha: 1
            }, 300).onUpdate(function() {
               this._this.alpha = this.alpha
            }).delay(1200 * Math.random() + 300).start()
         }), Te.alpha = 0, new TWEEN.Tween({
            alpha: 0
         }).to({
            alpha: 1
         }, 500).onUpdate(function() {
            Te.alpha = this.alpha
         }).delay(1800).start()
      }
      function L() {
         Eo || (Eo = !0, we.children.forEach(function(e, t) {
            new TWEEN.Tween({
               _this: e,
               alpha: 1
            }).to({
               alpha: 0
            }, 300).onUpdate(function() {
               this._this.alpha = this.alpha
            }).delay(1200 * Math.random() + 300).start()
         }), _e.children.forEach(function(e, t) {
            new TWEEN.Tween({
               _this: e,
               alpha: 1
            }).to({
               alpha: 0
            }, 300).onUpdate(function() {
               this._this.alpha = this.alpha
            }).delay(1200 * Math.random() + 300).start()
         }))
      }
      function F() {
         Jt.visible = !0, Yt.visible = !0, Qt.visible = !0, Yt.children.forEach(function(e, t) {
            t < 9 && (e.alpha = 0, new TWEEN.Tween({
               _this: e,
               alpha: 0
            }).to({
               alpha: 1
            }, 300).onUpdate(function() {
               this._this.alpha = this.alpha
            }).delay(1200 * Math.random() + 300).start())
         }), Qt.children.forEach(function(e, t) {
            e.alpha = 0, new TWEEN.Tween({
               _this: e,
               alpha: 0
            }).to({
               alpha: 1
            }, 300).onUpdate(function() {
               this._this.alpha = this.alpha
            }).delay(1200 * Math.random() + 300).start()
         }), setTimeout(function() {
            e(".end").addClass("animate_start").show(), Gt.visible = !0
         }, 2e3)
      }
      function D(e) {
         An = e, "cut1" == e ? (diamondScissorsTween.start(), Ke.visible = !0, Ze.visible = !0, Ce.visible = !1) : "cut2" == e && (lt.visible = !0, gt.visible = !0, triangleScissorsTween.start(), ft.visible = !0, _o = !1)
      }
      function k(e, t) {
         var i = e.time ? e.time : 1e3;
         e.targetLeft < 0 ? new TWEEN.Tween({
            left: 0
         }).to({
            left: e.targetLeft
         }, i).onUpdate(function() {
            B(e.moveItem, this.left, e.forwards)
         }).onComplete(function() {
            t && t()
         }).delay(500).start() : new TWEEN.Tween({
            left: 0
         }).to({
            left: e.targetLeft
         }, i).onUpdate(function() {
            U(e.moveItem, this.left, e.forwards)
         }).onComplete(function() {
            t && t()
         }).delay(500).start()
      }
      function U(e, t, i) {
         var n = t % (Math.PI / 2 * 400),
            o = parseInt(t / (Math.PI / 2 * 100)),
            s = t % (Math.PI / 2 * 100),
            a = -n / (Math.PI / 2 * 100) * 255,
            r = -s / (Math.PI / 2 * 100) * 255;
         i && (a = 0, r = 0), n < Math.PI / 2 * 100 ? (e.pivot.set(255, 255), e.position.x = e.left + 255 + a, i && (r = 0)) : n > Math.PI / 2 * 100 && n <= Math.PI / 2 * 100 * 2 ? (e.pivot.set(255, 0), e.position.x = e.left + 255 + 255 + a, i && (r = 255)) : n > Math.PI / 2 * 100 * 2 && n <= Math.PI / 2 * 100 * 3 ? (e.pivot.set(0, 0), e.position.x = e.left + 255 + 255 + 255 + a, i && (r = 510)) : n > Math.PI / 2 * 100 * 3 && n <= Math.PI / 2 * 100 * 4 && (e.pivot.set(0, 255), e.position.x = e.left + 255 + 255 + 255 + 255 + a, i && (r = 765)), e.rotation = n / 100, o % 2 == 0 ? (e.footStep[0].position.x = e.left + 255 + r, e.footStep[1].position.x = e.left + 255 + r - 255, e.footStep[1].scale.set((255 - s) / 255, (255 - s) / 255), s < 50 ? e.footStep[0].scale.set(s / 50, s / 50) : e.footStep[0].scale.set(1, 1), 0 == o && e.footStep[1].scale.set(0, 0)) : (e.footStep[1].position.x = e.left + 255 + r, e.footStep[0].position.x = e.left + 255 + r - 255, e.footStep[0].scale.set((255 - s) / 255, (255 - s) / 255), s < 50 ? e.footStep[1].scale.set(s / 50, s / 50) : e.footStep[1].scale.set(1, 1))
      }
      function B(e, t, i) {
         var n = t % (Math.PI / 2 * 400),
            o = parseInt(t / (Math.PI / 2 * 100)),
            s = t % (Math.PI / 2 * 100),
            a = -n / (Math.PI / 2 * 100) * 255,
            r = -s / (Math.PI / 2 * 100) * 255;
         i && (a = 0, r = 0), n > -Math.PI / 2 * 100 ? (e.pivot.set(0, 255), e.position.x = e.left + a, i && (r = 0)) : n < -Math.PI / 2 * 100 && n >= -Math.PI / 2 * 100 * 2 ? (e.pivot.set(0, 0), e.position.x = e.left - 255 + a, i && (r = -255)) : n < -Math.PI / 2 * 100 * 2 && n >= -Math.PI / 2 * 100 * 3 ? (e.pivot.set(255, 0), e.position.x = e.left - 510 + a, i && (r = -510)) : n < Math.PI / 2 * 100 * 3 && n >= -Math.PI / 2 * 100 * 4 && (e.pivot.set(255, 255), e.position.x = e.left - 765 + a, i && (r = -765)), e.rotation = n / 100, o % 2 == 0 ? (e.footStep[0].position.x = e.left + r, e.footStep[1].position.x = e.left + r + 255, e.footStep[1].scale.set((255 + s) / 255, (255 + s) / 255), s > -50 ? e.footStep[0].scale.set(-s / 50, -s / 50) : e.footStep[0].scale.set(1, 1), 0 == o && e.footStep[1].scale.set(0, 0)) : (e.footStep[1].position.x = e.left + r, e.footStep[0].position.x = e.left + r + 255, e.footStep[0].scale.set((255 + s) / 255, (255 + s) / 255), s > -50 ? e.footStep[1].scale.set(-s / 50, -s / 50) : e.footStep[1].scale.set(1, 1)), "dialog3_end" == An && t + ce < 1060 && !bo && W()
      }
      function R(e) {
         e > 10 ? Kt.visible = !1 : Kt.visible = !0;
         var t = ce + Ce.left;
         $e.position.x = t - e, e > 845 && 0 == $e.children[0].hasCrashed && ($e.children[0].hasCrashed = !0, $e.children[0].gotoAndPlay(11)), e > 1460 && 0 == $e.children[1].hasCrashed && ($e.children[1].hasCrashed = !0, $e.children[1].gotoAndPlay(11)), e > 2070 && 0 == $e.children[2].hasCrashed && ($e.children[2].hasCrashed = !0, $e.children[2].gotoAndPlay(11)), e > 3e3 && 0 == $e.children[3].hasCrashed && (ze.visible = !1, ze.footStep.visible = !1, $e.children[3].hasCrashed = !0, $e.children[3].gotoAndPlay(1), G()), e < 845 && 1 == $e.children[0].hasCrashed && Q($e.children[0]), e < 1460 && 1 == $e.children[1].hasCrashed && Q($e.children[1]), e < 2070 && 1 == $e.children[2].hasCrashed && Q($e.children[2]);
         var i = 307,
            n = e % 600,
            o = 200,
            s = 300,
            a = 400;
         n < o ? (ze.rotation = n / 1e3 / 2, ze.position.x = i - .8 * n, ze.position.y = 298, ze.footStep.position.x = i - .8 * n, ze.footStep.scale.set((1e3 - n) / 1e3)) : n > o && n <= s ? (ze.rotation = (o / 1e3 - (n - o) / 1e3 * 2) / 2, ze.position.x = i - .8 * o + 1.6 * (n - o), ze.position.y = 298 - (n - o), ze.footStep.position.x = i - .8 * o + 1.6 * (n - o), ze.footStep.scale.set((1e3 - o) / 1e3 - (n - o) / 100 * .8)) : n > s && n <= a ? (ze.rotation = -(n - s) / 1e3, ze.position.x = i - .8 * o + 1.6 * (n - o), ze.position.y = 298 - (s - o) + (n - s), ze.footStep.position.x = i - .8 * o + 1.6 * (n - o), ze.footStep.scale.set((n - s) / 100 * .8)) : n > a && (ze.rotation = -(a - s) / 1e3 + (n - a) / 1e3 / 2, ze.position.x = i - .8 * o + 1.6 * (a - o) - .8 * (n - a), ze.position.y = 298, ze.footStep.position.x = i - .8 * o + 1.6 * (a - o) - .8 * (n - a), ze.footStep.scale.set(.8 + (n - a) / 200 * .2))
      }
      function q(e) {
         e > 10 ? Zt.visible = !1 : Zt.visible = !0, mt.visible = !0, xt.visible = !0;
         var t = 300,
            i = 100,
            n = 131.5,
            o = e % (2 * t);
         e < 1200 ? (t = 200, i = 120, n = 131.5, o = e % (2 * t), o < t ? (rt.position.x = o, rt.position.y = -i * Math.sin(o / t * Math.PI), ut.position.x = n + o, ut.scale.set((i + rt.position.y) / i, (i + rt.position.y) / i)) : (rt.position.x = 2 * t - o, rt.position.y = 0, ut.position.x = n + 2 * t - o, ut.scale.set(1, 1)), mt.position.x = To - e, mt.children[1].position.x = -240 + e / 5, mt.children[2].position.x = 73 + e / 10, xt.position.x = To + Ao - e, St.position.x = To + 476 + 785 - e, bt.position.x = To + 476 + 785 - e, vt.visible = !1) : e >= 1200 && e < 4800 ? (e < 2800 ? (o = (e - 1200) / 4, mt.position.x = To - 1200 - o, mt.position.y = -612 + o / 2, mt.children[1].position.x = o / 10, mt.children[2].position.x = 193 + o / 40, mt.children[1].position.y = -o / 5, mt.children[2].position.y = -o / 10, mt.children[3].position.y = 266 - o / 40, mt.children[4].position.y = 70 - o / 30, mt.children[3].position.x = 958 + o / 5, mt.children[4].position.x = 964 + o / 10, xt.position.x = To + Ao - 1200 - o, xt.position.y = o / 2 - 200, St.position.x = To + 476 + 735 - o - 1200, bt.position.x = To + 476 + 735 - o - 1200, St.position.y = o / 2 - 647, bt.position.y = o / 2 - 794) : (o = (e - 2800) / 4 + 400, mt.position.x = To - 1200 - o, mt.position.y = -612 + o - 200, mt.children[1].position.x = o / 10, mt.children[2].position.x = 193 + o / 40, mt.children[1].position.y = -o / 5, mt.children[2].position.y = -o / 10, mt.children[3].position.y = 266 - o / 40, mt.children[4].position.y = 70 - o / 30, mt.children[3].position.x = 958 + o / 5, mt.children[4].position.x = 964 + o / 10, xt.position.x = To + Ao - 1200 - o, xt.position.y = o - 200 - 200, St.position.x = To + 476 + 735 - 1200 - o, bt.position.x = To + 476 + 735 - 1200 - o, St.position.y = o - 647 - 200, bt.position.y = o - 794 - 200), e > 1400 && (vt.visible = !0), e >= 1200 && e < 1800 && (t = 170, i = 100, o = (e - 1200) / 4, rt.position.x = o, rt.position.y = -i * Math.sin(o / t * Math.PI), wt.gotoAndStop(Math.min(10, parseInt((e - 1200) / 600 * 11))), ut.scale.set(0, 0), Y()), e >= 1800 && e < 2e3 && (o = (e - 1800) / 4, rt.position.x = 150 - o, rt.position.y = -36 + o / 2, J(0)), e >= 2e3 && e < 2600 && (t = 190, i = 120, o = (e - 2e3) / 4, rt.position.x = 100 + o, rt.position.y = -11 - i * Math.sin(o / t * Math.PI), _t.gotoAndStop(Math.min(13, parseInt((e - 2e3) / 600 * 14))), Y()), e >= 2600 && e < 2800 && (o = (e - 2600) / 4, rt.position.x = 250 - o, rt.position.y = -85 + o / 2, J(1)), e >= 2800 && e < 3200 && (t = 150, i = 240, o = (e - 2800) / 4, rt.position.x = 200 + o / 2, rt.position.y = -60 - i * Math.sin(o / t * Math.PI) / 2, yt.gotoAndStop(Math.min(8, parseInt((e - 2800) / 400 * 9))), Y()), e >= 3200 && e < 3600 && (o = (e - 3200) / 4, rt.position.x = 250 - o, rt.position.y = -164 + o, J(2)), e >= 3600 && e < 4400 && (t = 220, i = 360, o = (e - 3600) / 4, rt.position.x = 150 + o, rt.position.y = -64 - i * Math.sin(o / t * Math.PI) / 2, Y()), e >= 4400 && (o = (e - 4400) / 4, rt.position.x = 350 - o, rt.position.y = -115 + o, It.gotoAndStop(Math.min(10, parseInt((e - 4400) / 200 * 11))), J(3))) : e > 4800 && (o = e - 4800, rt.position.y = -15 - o), e > 5300 && T("dialog3")
      }
      function j(t) {
         t > 10 ? Kt.visible = !1 : Kt.visible = !0, zt.position.x = 710 - t, Wt.position.x = 335 - t;
         var i = 649,
            n = 258,
            o = 150,
            s = 50,
            a = t % o;
         t < 600 ? (o = 656, s = 200, a = t % o, n = 228, Rt.position.x = i + 199 - t, Rt.position.y = n + 136 + 80 - s * Math.sin(a / o * Math.PI), Ct.position.x = i - t, Ct.position.y = n + 80 - s * Math.sin(a / o * Math.PI), Mt.position.x = i + 302 - t, t > 56 ? (t < 100 && e("#fire")[0].play(), Rt.visible = !0, Ct.visible = !1, Mt.scale.set((s + Ct.position.y - n - 30) / s)) : (Rt.visible = !1, Ct.visible = !0, Mt.scale.set(0, 0)), Ut.position.x = 1300 - t / 1.5 + 600) : t < 1350 ? (o = 75, a = (t - 600) % (2 * o), a < o ? (Ct.position.x = i - 600 + a, Ct.position.y = n - s * Math.sin(a / o * Math.PI), Rt.position.x = i + 199 - 600 + a, Rt.position.y = n + 136 - s * Math.sin(a / o * Math.PI), Mt.position.x = i + 302 - 600 + a, Mt.scale.set((s + Ct.position.y - n) / s)) : (Mt.position.x = i + 302 - 600 + 2 * o - a, Mt.scale.set(1, 1), Ct.position.y = n, Ct.position.x = i - 600 + 2 * o - a, Rt.position.y = n + 136, Rt.position.x = i + 199 - 600 + 2 * o - a), Ut.position.x = 1350 - t + 600) : (Ct.position.x = 50, Ct.position.y = n, Rt.position.x = 249, Rt.position.y = n + 136, Ut.position.x = 600, Mt.scale.set(0, 0), _o || T("dialog4"))
      }
      function O(t) {
         t > 10 ? Kt.visible = !1 : Kt.visible = !0, t > 1600 && t < 4500 && (Kt.visible = !0);
         var i = 250,
            n = 394,
            o = 380,
            s = 100,
            a = t % o;
         t < 380 ? (Rt.position.x = i + t, Rt.position.y = n - s * Math.sin(a / o * Math.PI), Mt.position.x = i + 102 + t, Mt.scale.set((s + Rt.position.y - n) / s), Rt.visible = !0, greatFire.visible = !1, t > 350 && (Ut.state = "go", e("#fire")[0].play())) : t >= 380 && t < 5090 ? (t > 1600 && t < 1800 && e("#burn")[0].play(), Ut.state = "go", Rt.visible = !1, greatFire.visible = !0, Mt.scale.set(0, 0), a = t - 380, greatFire.gotoAndStop(parseInt(a / 30))) : t >= 5090 && (_o || T("dialog5"))
      }
      function J(e) {
         for (var t = 0; t < 4; t++) xt.children[t].children[0].alpha = .25;
         xt.children[e].children[0].alpha = 1
      }
      function Y() {
         for (var e = 0; e < 4; e++) xt.children[e].children[0].alpha = .25
      }
      function Q(e) {
         e.timer || (e.hasCrashed = !1, e.timer = setInterval(function() {
            var t = e.currentFrame;
            11 != t && 0 != t || (clearInterval(e.timer), e.timer = null), e.gotoAndStop(t - 1)
         }, 50))
      }
      function G() {
         An = "fall1", new TWEEN.Tween($e.position).to({
            x: ce + Ce.left - 3450
         }, 700).start(), new TWEEN.Tween($e.position).to({
            y: -800
         }, 1300).delay(800).onComplete(function() {
            new TWEEN.Tween(nt.position).to({
               y: 0
            }, 500).start(), nt.visible = !0, st.play(), st.onFrameChange = function() {
               7 == this.currentFrame && e("#drop")[0].play(), 22 == this.currentFrame && (this.stop(), this.visible = !1, at.visible = !0, T("dialog2"))
            }
         }).start()
      }
      function H() {
         e("#heart")[0].play(), new TWEEN.Tween(Ve.position).to({
            x: Ce.left + 240 + 78,
            y: 312
         }, 500).onComplete(function() {
            He.visible = !0, He.play()
         }).start();
         var t = new TWEEN.Tween(Ve.scale).to({
            x: .8,
            y: .8
         }, 500).start(),
            i = new TWEEN.Tween(Ve.scale).to({
               x: 1,
               y: 1
            }, 130),
            n = new TWEEN.Tween(Ve.scale).to({
               x: .8,
               y: .8
            }, 130),
            o = new TWEEN.Tween(Ve.scale).to({
               x: 1,
               y: 1
            }, 130),
            s = new TWEEN.Tween(Ve.scale).to({
               x: .8,
               y: .8
            }, 130).onComplete(function() {
               He.visible = !1, He.stop(), Ve.visible = !1
            });
         t.chain(i), i.chain(n), n.chain(o), o.chain(s)
      }
      function V() {
         e("#heart")[0].play(), new TWEEN.Tween(Lt.position).to({
            x: 490,
            y: 350
         }, 500).onComplete(function() {
            Ft.visible = !0, Ft.play()
         }).start();
         var t = new TWEEN.Tween(Lt.scale).to({
            x: .8,
            y: .8
         }, 500).start(),
            i = new TWEEN.Tween(Lt.scale).to({
               x: 1,
               y: 1
            }, 130),
            n = new TWEEN.Tween(Lt.scale).to({
               x: .8,
               y: .8
            }, 130),
            o = new TWEEN.Tween(Lt.scale).to({
               x: 1,
               y: 1
            }, 130),
            s = new TWEEN.Tween(Lt.scale).to({
               x: .8,
               y: .8
            }, 130).onComplete(function() {
               Ft.visible = !1, Ft.stop(), Lt.visible = !1
            });
         t.chain(i), i.chain(n), n.chain(o), o.chain(s)
      }
      function K() {
         e("#heart")[0].play(), Lt.visible = !0, Lt.scale.set(0, 0), Dt.visible = !0, Dt.scale.set(0, 0), Lt.position.set(255, 400), Ft.position.set(297, 272), Dt.position.set(455, 400), kt.position.set(257, 272), new TWEEN.Tween(Lt.position).to({
            x: 375,
            y: 350
         }, 500).onComplete(function() {
            Ft.visible = !0, Ft.gotoAndPlay(0)
         }).start();
         var t = new TWEEN.Tween(Lt.scale).to({
            x: .8,
            y: .8
         }, 500).start(),
            i = new TWEEN.Tween(Lt.scale).to({
               x: 1,
               y: 1
            }, 130),
            n = new TWEEN.Tween(Lt.scale).to({
               x: .8,
               y: .8
            }, 130),
            o = new TWEEN.Tween(Lt.scale).to({
               x: 1,
               y: 1
            }, 130),
            s = new TWEEN.Tween(Lt.scale).to({
               x: .8,
               y: .8
            }, 130).onComplete(function() {
               Ft.visible = !1, Ft.stop(), Lt.visible = !1, I()
            });
         t.chain(i), i.chain(n), n.chain(o), o.chain(s), new TWEEN.Tween(Dt.position).to({
            x: 337,
            y: 350
         }, 500).onComplete(function() {
            kt.visible = !0, kt.play()
         }).start();
         var a = new TWEEN.Tween(Dt.scale).to({
            x: .8,
            y: .8
         }, 500).start(),
            r = new TWEEN.Tween(Dt.scale).to({
               x: 1,
               y: 1
            }, 130),
            p = new TWEEN.Tween(Dt.scale).to({
               x: .8,
               y: .8
            }, 130),
            l = new TWEEN.Tween(Dt.scale).to({
               x: 1,
               y: 1
            }, 130),
            d = new TWEEN.Tween(Dt.scale).to({
               x: .8,
               y: .8
            }, 130).onComplete(function() {
               kt.visible = !1, kt.stop(), Dt.visible = !1
            });
         a.chain(r), r.chain(p), p.chain(l), l.chain(d)
      }
      function Z() {
         e("#heart")[0].play(), Ht.visible = !0, Ht.scale.set(0, 0), Ht.position.set(820 + (ce - 1334) / 2, 420), Vt.position.set(650 + (ce - 1334) / 2, 272), new TWEEN.Tween(Ht.position).to({
            x: 728 + (ce - 1334) / 2,
            y: 350
         }, 500).onComplete(function() {
            Vt.visible = !0, Vt.gotoAndPlay(0)
         }).start();
         var t = new TWEEN.Tween(Ht.scale).to({
            x: .8,
            y: .8
         }, 500).start(),
            i = new TWEEN.Tween(Ht.scale).to({
               x: 1,
               y: 1
            }, 130),
            n = new TWEEN.Tween(Ht.scale).to({
               x: .8,
               y: .8
            }, 130),
            o = new TWEEN.Tween(Ht.scale).to({
               x: 1,
               y: 1
            }, 130),
            s = new TWEEN.Tween(Ht.scale).to({
               x: .8,
               y: .8
            }, 130).onComplete(function() {
               Vt.visible = !1, Vt.stop(), Ht.visible = !1, C()
            });
         t.chain(i), i.chain(n), n.chain(o), o.chain(s)
      }
      function $() {
         TWEEN.update(), requestAnimationFrame($), ue.render(fe), xe.render(et), b()
      }
      function ee() {
         ve.position.set(ce - 78 - 259, 47), it.width = ce, Te.position.set(ce - 396, 93), we.position.set(ce - 539, 494), _e.position.set(ce - 422, 552), Ce.left = (ce - 460 - 255) / 2, Me.left = (ce - 460 - 255) / 2 + 460, Ce.position.set(Ce.left + 255, 543), Me.position.set(942.478 + Me.left + 255, 543), Ze.position.set(Ce.left + 255 - 226, 244), $e.position.set(ce + Ce.left, 0), He.position.set(Ce.left + 240, 234), Ve.position.set(Ce.left + 240 + 78 - 120, 362), Ne.children.forEach(function(e, t) {
            0 == t ? (Ne.children[t].position.x = Ce.left + 127.5, Ne.children[t].children[1].position.y = 20, Ne.children[t].children[1].position.x = -15) : 3 == t ? (Ne.children[t].position.x = Ce.left + 127.5, Ne.children[t].children[1].position.y = 20, Ne.children[t].children[1].position.x = -10) : 1 == t ? (Ne.children[t].position.x = (ce - 460 - 255) / 2 + 460 + 127.5 - 251 + 60, Ne.children[t].children[1].position.y = 13, Ne.children[t].children[1].position.x = -16) : 2 == t && (Ne.children[t].position.x = (ce - 460 - 255) / 2 + 460 + 127.5 - 402 + 60, Ne.children[t].children[1].position.y = 10, Ne.children[t].children[1].position.x = -23)
         }), pt.children[2].position.x = ce - 250 - 500 - 127.5, rectAni3.left = ce - 250 - 255, rectAni3.position.set(rectAni3.left + 255, 560), "dialog3_end" == An || "dialog3_start" == An || (Tt.drawRect(0, 0, ce, 750), zt.left = ce - 250 - 255, zt.position.set(zt.left + 255 + 800, 566), Wt.left = ce - 250 - 255, Xt.children[0].position.x = ce - 250 - 345 - 70, Xt.children[1].position.x = ce - 250 - 250 - 70, Xt.children[2].position.x = ce - 250 - 250 - 70, Xt.children[3].position.x = ce - 250 - 250 - 70, Dt.position.set(ce - 250 - 255 + 50, 400), kt.position.set(ce - 250 - 255 + 50 - 78 - 120, 272)), Gt.position.set(ce - 509, 0), jt.position.set(730 + (ce - 1334) / 2, 329), greatFire.position.set((ce - 1334) / 2, 0), Ot.position.set((ce - 1334) / 2, 0), qt.children.forEach(function(e, t) {
            0 == t ? qt.children[t].position.x = 710 + (ce - 1334) / 2 : 1 == t ? qt.children[t].position.x = 537 + (ce - 1334) / 2 : 2 == t ? qt.children[t].position.x = 630 + (ce - 1334) / 2 : 3 == t ? qt.children[t].position.x = 680 + (ce - 1334) / 2 : 4 == t && (qt.children[t].position.x = 480 + (ce - 1334) / 2)
         })
      }
      var te = window.navigator.userAgent.toLowerCase(),
         ie = navigator.userAgent,
         ne = /iphone|nokia|sony|ericsson|mot|samsung|sgh|lg|philips|panasonic|alcatel|lenovo|cldc|midp|wap|mobile/i.test(te) && !/pc=1/.test(location.search),
         oe = "micromessenger" == te.match(/MicroMessenger/i);
      "newsapp" == te.match(/newsapp/i), ie.indexOf("Android") > -1 || ie.indexOf("Adr") > -1, !! ie.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      if (!ne) {
         var se = 640,
            ae = window.innerHeight;
         return e(".dada_valentines2018_wrap").height(ae), e(".dada_valentines2018_wrap").html(""), void e(".dada_valentines2018_wrap").css({
            "background-color": "#eee",
            "background-image": "url(http://cms-bucket.nosdn.127.net/a8b4f2f3c5e04550a16304c16ceebcf520180212211901.jpeg)",
            "background-repeat": "no-repeat",
            "background-position": "center 100px"
         })
      }
      oe || h5Share.init({
         title: "\u300c\u25a0\u25b2" + e("#shareText").html() + "\u300d\u7684\u542b\u4e49\uff0c\u7231\u8fc7\u7684\u4eba\u624d\u4f1a\u77e5\u9053\uff01",
         desc: "\u8fd9\u4e2a\u65b9\u5f62\u7684\u7231\u60c5\u6545\u4e8b\u91cc\uff0c\u6709\u4f60\u7684\u5f71\u5b50\u5417\uff1f",
         url: window.location.href,
         img: "http://cms-bucket.nosdn.127.net/14a5dbe2edb74c0799c0894cdf62ba9920180212211944.jpeg"
      }), t("bgm"), i("cut"), i("drop"), i("fire"), i("heart"), i("burn"), i("writing");
      var re = "http://static.ws.126.net/f2e/news/dada_valentines2018/images/",
         ae = window.innerHeight,
         se = window.innerWidth,
         pe = PIXI.Container,
         le = (PIXI.autoDetectRenderer, PIXI.loader),
         de = (PIXI.loader.resources, PIXI.utils.TextureCache, PIXI.Texture, PIXI.Text, new PIXI.ticker.Ticker, PIXI.Sprite),
         he = (PIXI.Rectangle, PIXI.Graphics),
         ce = (Matter.Engine, Matter.Render, Matter.World, Matter.Bodies, Matter.Composites, Matter.Body, Matter.Constraint, Matter.MouseConstraint, Matter.Common, Matter.Events, se),
         ge = 90;
      window.onorientationchange = o;
      var fe = new pe,
         ue = new PIXI.CanvasRenderer(se, ae);
      e(".main")[0].appendChild(ue.view);
      var xe = new PIXI.CanvasRenderer(se, ae, {
         transparent: !0
      });
      e(".main")[0].appendChild(xe.view), e("canvas").eq(1).hide();
      var ve, me, we, _e, ye, Ie, Se, be, Ee, Te, Ae, Pe, Ce, Me, Ne, ze, We, Xe, Le, Fe, De, ke, Ue, Be, Re, qe, je, Oe, Je, Ye, Qe, Ge, He, Ve, Ke, Ze, $e, et, tt, it, nt, ot, st, at, rt, pt, lt, dt, ht, ct, gt, ft, ut, xt, vt, mt, wt, _t, yt, It, St, bt, Et, Tt, At, Pt, Ct, Mt, Nt, zt, Wt, Xt, Lt, Ft, Dt, kt, Ut, Bt, Rt, qt, jt, Ot, Jt, Yt, Qt, Gt, Ht, Vt, Kt, Zt, $t, ei = [],
         ti = [],
         ii = [],
         ni = [],
         oi = [],
         si = [],
         ai = [],
         ri = [],
         pi = [],
         li = [si, ai, ri, pi],
         di = [ti, ii, ni, oi],
         hi = [],
         ci = [],
         gi = [],
         fi = [],
         ui = [],
         xi = [],
         vi = [fi, ui, xi],
         mi = [hi, ci, gi],
         wi = [],
         _i = [],
         yi = [],
         Ii = [],
         Si = [],
         bi = [],
         Ei = [],
         Ti = [],
         Ai = [],
         Pi = [],
         Ci = [],
         Mi = [],
         Ni = [],
         zi = [],
         Wi = [],
         Xi = [],
         Li = [],
         Fi = [],
         Di = [],
         ki = [],
         Ui = [],
         Bi = [],
         Ri = [],
         qi = [],
         ji = [],
         Oi = [],
         Ji = [],
         Yi = [],
         Qi = [],
         Gi = [],
         Hi = [],
         Vi = [],
         Ki = [],
         Zi = [],
         $i = [],
         en = [Vi, Ki, Zi, $i],
         tn = [Yi, Qi, Gi, Hi],
         nn = [],
         on = [],
         sn = [],
         an = [],
         rn = [],
         pn = [an, rn],
         ln = [on, sn],
         dn = [],
         hn = [],
         cn = [],
         gn = [],
         fn = [],
         un = [],
         xn = [],
         vn = [],
         mn = [],
         wn = [],
         _n = [],
         yn = [],
         In = [],
         Sn = [mn, wn, _n, yn, In],
         bn = [gn, fn, un, xn, vn],
         En = [],
         Tn = "main",
         An = "slide1";
      le.add(re + "first/bg.png").add(re + "first/bg1.png").add(re + "first/bg2.png").add(re + "first/bg3.png").add(re + "first/bg4.png").add(re + "first/time.png").add(re + "first/t1_0.png").add(re + "first/t1_1.png").add(re + "first/t1_2.png").add(re + "first/t1_3.png").add(re + "first/t1_4.png").add(re + "first/t1_5.png").add(re + "first/t1_6.png").add(re + "first/t1_7.png").add(re + "first/t1_8.png").add(re + "first/t2_0.png").add(re + "first/t2_1.png").add(re + "first/t2_2.png").add(re + "first/t2_3.png").add(re + "first/t2_4.png").add(re + "first/t2_5.png").add(re + "first/t2_6.png").add(re + "first/t2_7.png").add(re + "first/rect.png").add(re + "first/text.png").add(re + "first/circle1.png").add(re + "first/circle2.png").add(re + "dialog/heart.png").add(re + "diamond/text.png").add(re + "diamond/scissors.png").add(re + "triangle/text.png").add(re + "triangle/scissors.png").add(re + "text4/line0.png").add(re + "text4/line1.png").add(re + "text4/line2.png").add(re + "text4/line3.png").add(re + "circle1.png").add(re + "circle2.png").add(re + "mask.png").add(re + "foot_step.png").add(re + "foot_step2.png").add(re + "stairs/floor.png").add(re + "stairs/floor2.png").add(re + "stairs/floor3.png").add(re + "stairs/floor4.png").add(re + "stairs/stair1_line.png").add(re + "stairs/stair2_main.png").add(re + "stairs/stair3_main.png").add(re + "stairs/stair4_main.png").add(re + "stairs/light.png").add(re + "stairs/bg1.png").add(re + "stairs/bg_left1.png").add(re + "stairs/bg_left2.png").add(re + "stairs/bg_right1.png").add(re + "stairs/bg_right2.png").add(re + "stairs/hole_bg.png").add(re + "stairs/hole_cover.png").add(re + "stairs/hole_cover1.png").add(re + "dialog3/hole.png").add(re + "end_text/t1_0.png").add(re + "end_text/t1_1.png").add(re + "end_text/t1_2.png").add(re + "end_text/t1_3.png").add(re + "end_text/t1_4.png").add(re + "end_text/t1_5.png").add(re + "end_text/t1_6.png").add(re + "end_text/t1_7.png").add(re + "end_text/t1_8.png").add(re + "end_text/t2_0.png").add(re + "end_text/t2_1.png").add(re + "end_text/t2_2.png").add(re + "end_text/t2_3.png").add(re + "end_text/t2_4.png").add(re + "end_text/t2_5.png").add(re + "end_text/t2_6.png").add(re + "end_text/t2_7.png").add(re + "end_text/t2_8.png").add(re + "end_text/t2_9.png").add(re + "end_text/t2_10.png").add(re + "end_text/text_line2.png").add(re + "end_text/plus.png").add(re + "end_text/right_line.png").add(re + "sxz/sxz_0.png").add(re + "sxz/sxz_1.png").add(re + "sxz/sxz_2.png").add(re + "sxz/sxz_3.png").add(re + "sxz/sxz_4.png").add(re + "sxz/sxz_5.png").add(re + "sxz/sxz_6.png").add(re + "sxz/sxz_7.png").add(re + "sxz/sxz_8.png").add(re + "sxz/sxz_9.png").add(re + "sxz/sxz_10.png").add(re + "sxz/sxz_11.png").add(re + "sxz/sxz_12.png").add(re + "sxz/sxz_13.png").add(re + "sxz/sxz_14.png").add(re + "sxz/sxz_15.png").add(re + "sxz/sxz_16.png").add(re + "sxz/sxz_17.png").add(re + "sxz/sxz_18.png").add(re + "sxz/sxz_19.png").add(re + "sxz/sxz_20.png").add(re + "sxz/sxz_21.png").add(re + "sxz/sxz_22.png").add(re + "sxz/sxz_23.png").add(re + "sxz/sxz_24.png").add(re + "sxz/sxz_25.png").add(re + "sxz/sxz_26.png").add(re + "sxz/sxz_27.png").add(re + "sxz/sxz_28.png").add(re + "sxz/sxz_29.png").add(re + "sxz/sxz_30.png").add(re + "sxz/sxz_31.png").add(re + "sxz/sxz_32.png").add(re + "sxz/sxz_33.png").add(re + "sxz/sxz_34.png").add(re + "sxz/sxz_35.png").add(re + "sxz/sxz_36.png").add(re + "sxz/sxz_37.png").add(re + "logo.png").add(re + "hand.png").add(re + "hand2.png").add(re + "line3.png").add(re + "line4.png").add(re + "rect/0.jpg").add(re + "rect/1.jpg").add(re + "rect/2.jpg").add(re + "dialog/heart_0.png").add(re + "dialog/heart_1.png").add(re + "dialog/heart_2.png").add(re + "dialog/heart_3.png").add(re + "dialog/heart_4.png").add(re + "dialog/heart_5.png").on("progress", s).load(r), n();
      for (var Pn = [], Cn = 0; Cn < 38; Cn++) Pn.push(re + "sxz/sxz_" + Cn + ".png");
      a();
      var Mn, Nn, zn, Wn, Xn, Ln, Fn, Dn, kn, Un, Bn, Rn = !1,
         qn = function(t, i, n) {
            var o, s;
            ge > 0 ? (s = i / SCALE, o = t / SCALE) : (s = t / SCALE, o = i / SCALE), ye && (e(".debug").html("top" + o + "</br>left" + s), "slide1" == An && (s < 942.478 ? (s > 10 ? (Kt.visible = !1, L()) : Kt.visible = !0, Me.position.x = 942.478 + Me.left + 255 - s, U(Ce, s, !1)) : s >= 942.478 && (_o ? ge > 0 ? jn.__scrollTop = 942.478 * SCALE : jn.__scrollLeft = 942.478 * SCALE : T("dialog1"))), "slide2" == An && R(s), "dialog2" == An && (ge > 0 ? jn.__scrollTop = 0 : jn.__scrollLeft = 0), "slide3" == An && q(s), "slide4" == An && j(s), "slide5" == An && O(s))
         },
         jn = new Scroller(qn, {
            zooming: !1,
            animating: !0,
            bouncing: !1,
            animationDuration: 1e3
         }),
         On = {
            x: 0,
            y: 0
         },
         Jn = 0,
         Yn = [Mn, Nn, zn, Wn, Xn, Ln, Fn, Dn, kn, Un, Bn],
         Qn = {
            x: 0,
            y: 0
         },
         Gn = {
            x: 0,
            y: 0
         },
         Hn = +new Date,
         Vn = {},
         Kn = {},
         Zn = {},
         $n = [],
         eo = [],
         to = 0,
         io = [],
         no = [],
         oo = 0,
         so = [{
            x: 0,
            y: 0
         }, {
            x: 1,
            y: 0
         }],
         ao = [],
         ro = [],
         po = [{
            figure: 5,
            figureName: "\u5de6\u6a2a",
            rule: [{
               style: [0],
               min: 1,
               max: 3
            }]
         }, {
            figure: 1,
            figureName: "\u53f3\u6a2a",
            rule: [{
               style: [1],
               min: 1,
               max: 3
            }]
         }, {
            figure: 2,
            figureName: "\u7ad6",
            rule: [{
               style: [2, 3],
               min: 1,
               max: 3
            }]
         }, {
            figure: 3,
            figureName: "\u5de6\u659c",
            rule: [{
               style: [4, 7],
               min: 1,
               max: 3
            }]
         }, {
            figure: 4,
            figureName: "\u53f3\u659c",
            rule: [{
               style: [5, 6],
               min: 1,
               max: 3
            }]
         }],
         lo = !1,
         ho = 15,
         co = 0,
         go = !1,
         fo = 200,
         uo = 10,
         xo = "0xce2b1f",
         vo = [],
         mo = 0,
         wo = 0,
         _o = !1,
         yo = 0,
         Io = 0,
         So = 0,
         bo = !1,
         Eo = !1,
         To = 1300,
         Ao = 476;
      e(".share").bind("click", function() {
         e(this).hide()
      }), e(".restart").bind("click", function() {
         window.location.href = "http://news.163.com/special/fdh5_shape/"
      }), e(".share_icon").bind("click", function() {
         oe ? e(".share").show() : h5Share.share()
      })
   })
}(jQuery);