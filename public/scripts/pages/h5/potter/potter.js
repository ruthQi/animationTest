//http://news.163.com/special/fdh5_harrypotter20_1/?587439=&spsw=4&spssid=215e217675e5702aed710b4d1e8f51e3&from=timeline&isappinstalled=0
function vote(e) {
   jQuery.ajax({
      type: "GET",
      url: "http://active.163.com/service/vote/v1/1514/digg.jsonp",
      dataType: "jsonp",
      jsonp: "callback",
      data: {
         id: e
      }
   })
}!
function(e) {
   function t() {
      return !(!/iphone|nokia|sony|ericsson|mot|samsung|sgh|lg|philips|panasonic|alcatel|lenovo|cldc|midp|wap|mobile/i.test(navigator.userAgent.toLowerCase()) || /pc=1/.test(location.search))
   }

   function n() {
      var e = window.navigator.userAgent.toLowerCase();
      return "micromessenger" == e.match(/MicroMessenger/i)
   }

   function o(e) {
      var t = document.getElementById(e),
         n = function() {
            document.removeEventListener("WeixinJSBridgeReady", n), document.removeEventListener("YixinJSBridgeReady", n), t.play()
         };
      document.addEventListener("WeixinJSBridgeReady", n, !1), document.addEventListener("YixinJSBridgeReady", n, !1)
   }

   function i(e) {
      var t = document.getElementById(e),
         n = function() {
            document.removeEventListener("WeixinJSBridgeReady", n), document.removeEventListener("YixinJSBridgeReady", n), t.play(), t.pause()
         };
      document.addEventListener("WeixinJSBridgeReady", n, !1), document.addEventListener("YixinJSBridgeReady", n, !1)
   }
   var s = t();
   if (!s) {
      var a = 640,
         r = window.innerHeight;
      return e(".potter_wrap").height(r), e(".potter_wrap").html(""), void e(".potter_wrap").css({
         "background-color": "#fff",
         "background-image": "url(http://img2.cache.netease.com/cnews/2017/7/5/20170705172935bbec8.jpg)",
         "background-repeat": "no-repeat",
         "background-position": "center 100px"
      })
   }
   var r = window.innerHeight,
      a = window.innerWidth,
      d = n();
   d || h5Share.init({
      title: "开 打 法 魔 用 能 只 章 文 篇 这",
      desc: "纪念哈利波特的魔法世界20周年",
      url: window.location.href,
      img: "http://img2.cache.netease.com/cnews/2017/7/5/2017070517065992079.jpg"
   }), o("audio4"), i("audio2"), i("audio3"), i("school1"), i("school2"), i("school3"), i("school4"), i("change_fail"), i("change_success"), i("fly_fail"), i("fly_success"), i("paint1"), i("paint2"), i("word1"), i("word2"), i("word3"), i("word4"), i("word5"), i("fly"), e(function() {
      function t(t, n) {
         e(".splash-percentage").html(parseInt(t.progress))
      }

      function n() {
         function t(e, t, n) {
            var o = new N;
            t = t ? t : 0, n = n ? n : 0, o.position.set(t, n);
            var i = new M(W.resources[H + "mask/0.png"].texture),
               s = new M(W.resources[H + "mask/2.png"].texture),
               a = new M(W.resources[H + "mask/3.png"].texture);
            i.visible = !0, s.visible = !1, a.visible = !1;
            var r = 0;
            setInterval(function() {
               r++, r % 30 == 8 ? s.visible = !0 : s.visible = !1, r % 24 == 16 ? a.visible = !0 : a.visible = !1, r % 32 <= 4 ? i.alpha = .8 : r % 32 >= 6 && r % 32 <= 10 ? i.alpha = .8 : i.alpha = .2
            }, 60), o.addChild(s, a, i), e.addChild(o)
         }

         function n(e, t, n) {
            var o = new N,
               i = new X;
            i.beginFill(11731456), i.drawCircle(0, 0, 6), i.endFill(), i.position.set(36.5, 36.5), o.addChild(i), o.pivot.set(36.5, 36.5), o.index = n, o.position.set(e + 36.5, t + 36.5);
            var s = new N,
               a = PIXI.Sprite.fromImage(H + "5/circle1.png"),
               r = PIXI.Sprite.fromImage(H + "5/gray.png");
            r.visible = !1, s.addChild(a, r);
            var d = new N,
               p = PIXI.Sprite.fromImage(H + "5/circle2.png"),
               l = PIXI.Sprite.fromImage(H + "5/gray.png");
            l.visible = !1, d.addChild(p, l), o.Theta = 2 * Math.random() * Math.PI, o.interval = function() {
               o.Theta += .15;
               var e = 3 * Math.cos(o.Theta),
                  t = 3 * Math.sin(o.Theta);
               s.position.set(e, t), d.position.set(-e, -t)
            }, o.start = function() {
               this.timer || (o.timer = setInterval(o.interval, 60), a.visible = !0, p.visible = !0, r.visible = !1, l.visible = !1, new TWEEN.Tween(o.scale).to({
                  x: 1,
                  y: 1
               }, 200).start())
            }, o.stop = function() {
               this.timer && (clearInterval(this.timer), this.timer = null, new TWEEN.Tween(o.scale).to({
                  x: .685,
                  y: .685
               }, 200).onComplete(function() {
                  a.visible = !1, p.visible = !1, r.visible = !0, l.visible = !0, s.position.set(0, 0), d.position.set(0, 0)
               }).start())
            }, o.timer = setInterval(o.interval, 60), o.addChild(d, s), o.interactive = !0, o.on("touchend", function() {
               ge.visible = !0, 0 == _t && (_t = !0);
               for (var e = 0; e < cn.length; e++) cn[e].visible = !1;
               for (var e = 0; e < 4; e++) Yt[e].visible = !1, yn[e].visible = !1, e != this.index ? Dt.children[e].stop() : (yn[e].visible = !0, oe.position.set(ht[e].x + 80, ht[e].y + 348), at = e + 1, cn[e].visible = !0, dt[e].play());
               Yt[this.index].visible = !0, this.start(), s5HatAni.play(), s5HatAni.onFrameChange = function() {
                  0 == this.currentFrame && (s5HatAni.stop(), s5HatAni.onFrameChange = function() {})
               }
            }), Dt.addChild(o)
         }

         function o(e, t, n, o, i) {
            var s = new N;
            if (1 == i) {
               var a = PIXI.Sprite.fromImage(H + "week/plus.png");
               a.position.set(22, 22)
            } else if (2 == i) {
               var a = PIXI.Sprite.fromImage(H + "week/minus.png");
               a.position.set(24.5, 34.5)
            } else {
               var a = new X;
               a.beginFill(11731456), a.drawCircle(0, 0, 6), a.endFill(), a.position.set(36.5, 36.5)
            }
            s.addChild(a), s.pivot.set(36.5, 36.5), s.position.set(t + 36.5, n + 36.5);
            var r = new N,
               d = PIXI.Sprite.fromImage(H + "5/circle1.png"),
               p = PIXI.Sprite.fromImage(H + "5/gray.png");
            p.visible = !1, r.addChild(d, p);
            var l = new N,
               u = PIXI.Sprite.fromImage(H + "5/circle2.png"),
               g = PIXI.Sprite.fromImage(H + "5/gray.png");
            return g.visible = !1, l.addChild(u, g), s.Theta = 2 * Math.random() * Math.PI, s.interval = function() {
               s.Theta += .15;
               var e = 3 * Math.cos(s.Theta),
                  t = 3 * Math.sin(s.Theta);
               r.position.set(e, t), l.position.set(-e, -t)
            }, s.timer = setInterval(s.interval, 60), s.addChild(l, r), s.interactive = !0, s.on("touchend", o), e.addChild(s), s
         }

         function i(e, t, n, o, i) {
            var s, a = new N;
            if (0 == i) var s = new M(W.resources[H + "6/text1.png"].texture);
            else if (1 == i) var s = new M(W.resources[H + "6/text2.png"].texture);
            var r = new M(W.resources[H + "6/short_line.png"].texture);
            r.position.set(80, 50), s.position.set(32, 10), a.position.set(t, n);
            var d = PIXI.Sprite.fromImage(H + "6/outside.png"),
               p = PIXI.Sprite.fromImage(H + "6/inside.png");
            a.addChild(r, s, p, d), a.n = 0;
            var l = .15;
            return a.interval = function() {
               a.n += l, (a.n >= 2 || a.n <= 0) && (l *= -1);
               var e = 2 * a.n,
                  t = a.n;
               d.position.set(e, -t), p.position.set(-e, t)
            }, 0 == i && (a.timer = setInterval(a.interval, 60)), a.start = function() {
               this.timer || (this.timer = setInterval(this.interval, 60))
            }, a.stop = function() {
               this.timer && (clearInterval(this.timer), this.timer = null, d.position.set(0, 0), p.position.set(0, 0))
            }, a.interactive = !0, e.addChild(a), a
         }

         function s() {}

         function d() {}
         e("#loading").fadeOut(300), r = window.innerHeight, a = window.innerWidth, U.width = 20 * a, U.height = 12e3, Q = new N;
         var p = new N;
         p.position.set(-1, 0);
         var l = new M(W.resources[H + "1/logo.png"].texture);
         l.position.set(25, 20);
         var u = new X;
         u.lineStyle(0, 16724736, 1), u.beginFill(16776174), u.drawRect(0, 0, 20 * a, 12e3), u.endFill(), U.addChild(u), p.addChild(u);
         var v = new N;
         J = new M(W.resources[H + "1/inner.jpg"].texture), J.position.set(136.5, 0), p.addChild(v);
         var w = new X;
         w.beginFill(10053375), w.drawRect(213, 280, 328, 326), w.endFill(), v.mask = w, v.addChild(w), v.addChild(J), new t(v, 50, 50);
         var m = new M(W.resources[H + "1/bg.png"].texture);
         m.position.set(87, 0), p.addChild(m, l), q = new N;
         var y = [{
            texture: W.resources[H + "text/0.png"].texture,
            speed: 0
         }, {
            texture: W.resources[H + "text/1.png"].texture,
            speed: .5,
            repeat: !0
         }, {
            texture: W.resources[H + "text/2.png"].texture,
            speed: 4
         }, {
            texture: W.resources[H + "text/3.png"].texture,
            speed: 1.8
         }, {
            texture: W.resources[H + "text/4.png"].texture,
            speed: .8
         }, {
            texture: W.resources[H + "text/5.png"].texture,
            speed: .8,
            repeat: !0
         }, {
            texture: W.resources[H + "text/6.png"].texture,
            speed: 1.5
         }, {
            texture: W.resources[H + "text/7.png"].texture,
            speed: 1
         }, {
            texture: W.resources[H + "text/8.png"].texture,
            speed: .5,
            repeat: !0
         }, {
            texture: W.resources[H + "text/9.png"].texture,
            speed: 1
         }, {
            texture: W.resources[H + "text/10.png"].texture,
            speed: .6
         }, {
            texture: W.resources[H + "text/11.png"].texture,
            speed: .7
         }, {
            texture: W.resources[H + "text/12.png"].texture,
            speed: .9,
            repeat: !0
         }, {
            texture: W.resources[H + "text/13.png"].texture,
            speed: .7
         }, {
            texture: W.resources[H + "text/14.png"].texture,
            speed: 3
         }, {
            texture: W.resources[H + "text/15.png"].texture,
            speed: .8
         }, {
            texture: W.resources[H + "text/16.png"].texture,
            speed: .6,
            repeat: !0
         }, {
            texture: W.resources[H + "text/17.png"].texture,
            speed: 0
         }, {
            texture: W.resources[H + "text/18.png"].texture,
            speed: 2
         }, {
            texture: W.resources[H + "text/20.png"].texture,
            speed: .8
         }],
            C = new X;
         C.beginFill(16776174), C.drawRect(-a, 0, 4 * a, 3200), C.endFill(), q.addChild(C);
         for (var _ = 0; _ < y.length; _++) {
            var P = new N,
               j = new M(W.resources[H + "text/bg.png"].texture);
            if (j.position.set(-1625, 157), P.addChild(j), y[_].repeat) {
               var F = new N,
                  k = new M(y[_].texture),
                  L = new M(y[_].texture);
               L.position.x = L.width, F.position.y = (160 - k.height) / 2, F.addChild(k, L);
               var fe = L.width;
               new TWEEN.Tween(F.position).to({
                  x: -fe
               }, 80 * fe * y[_].speed).repeat(1 / 0).start(), P.addChild(F)
            } else {
               var F = new M(y[_].texture);
               if (F.position.set(50, (160 - F.height) / 2), P.speed = y[_].speed ? y[_].speed : 0, P.addChild(F), _ == y.length - 1) {
                  var Se = new M(W.resources[H + "text/bottom.png"].texture);
                  Se.position.set(-752, 160), P.addChild(Se)
               }
            }
            P.position.set(0, 160 * _), q.addChild(P)
         }
         G = new N;
         for (var _ = 0; _ < 120; _++) {
            var rt = new M(W.resources[H + "2/rect.png"].texture);
            rt.position.set(7 * (_ - 5), 0), G.addChild(rt)
         }
         G.position.set(0, 2720), q.addChild(G), q.pivot.set(375, 1680), q.position.set(375, 2480), V = new N, V.position.set(0, 4e3);
         for (var pt = [], _ = 0; _ < 50; _++) pt.push(H + "school/" + _ + ".jpg");
         $ = new PIXI.extras.AnimatedSprite.fromImages(pt), D = new N;
         var lt = new N;
         lt.position.set(87, 196), ee = new M(W.resources[H + "4/sky.jpg"].texture), ee.pivot.set(288, 151), ee.position.set(288, 151);
         var ut = new M(W.resources[H + "4/school.png"].texture),
            gt = new X;
         gt.drawRect(0, 0, 558, 406), gt.endFill(), lt.mask = gt;
         for (var ct = new N, mt = [{
            x: 114,
            y: 295,
            flag: 1,
            flagValue: 9
         }, {
            x: 236,
            y: 301,
            flag: -1,
            flagValue: 10
         }, {
            x: 301,
            y: 304,
            flag: 1,
            flagValue: 7
         }, {
            x: 367,
            y: 303,
            flag: -1,
            flagValue: 8
         }, {
            x: 462,
            y: 301,
            flag: 1,
            flagValue: 6
         }], _ = 0; _ < 5; _++) {
            var yt = PIXI.Sprite.fromImage(H + "4/boat" + _ + ".png");
            yt.position.set(mt[_].x, mt[_].y), ct.addChild(yt)
         }
         setInterval(function() {
            for (var e = 0; e < 5; e++) ct.children[e].position.x += mt[e].flag / 12, (ct.children[e].position.x >= mt[e].x + mt[e].flagValue || ct.children[e].position.x <= mt[e].x - mt[e].flagValue) && (mt[e].flag *= -1)
         }, 60);
         var ft = new M(W.resources[H + "4/cloud1.png"].texture);
         ft.position.set(32, 287), K = new M(W.resources[H + "4/text.png"].texture), K.position.set(48, 120), lt.addChild(ee, ut, ct, gt), new t(lt, 0, 0), ee.mask = gt;
         var bt = new M(W.resources[H + "4/cover.png"].texture);
         bt.position.set(41, 195), te = new N, z = new M(W.resources[H + "4/text_cover.png"].texture), z.height = r + 100, te.position.set(40, 0), te.addChild(z), D.addChild(lt, ft, bt, te), Y = new N;
         for (var It = [60, 230, 280, 280, 180], _ = 0; _ < 5; _++) {
            var Ct = new N,
               Tt = new M(W.resources[H + "text/bg.png"].texture);
            Tt.position.set(-1625, 157);
            var Et = new M(W.resources[H + "3/" + _ + ".png"].texture);
            Et.position.set(122 + It[_], 0), Ct.addChild(Tt, Et), Ct.position.set(0, r - 160 * (_ + 2)), Y.addChild(Ct)
         }
         Z = new N;
         var St = new M(W.resources[H + "4/hand.png"].texture),
            Pt = new M(W.resources[H + "4/line.png"].texture);
         St.position.set(400, 8), new TWEEN.Tween(St.position).to({
            x: 2
         }, 1500).easing(TWEEN.Easing.Quadratic.Out).delay(200).repeat(1 / 0).start();
         var At = new M(W.resources[H + "4/slide_right.png"].texture);
         At.position.set(166, 80), Z.addChild(Pt, St, At), Z.position.set(204, 620), V.addChild(D, K, $, Y, Z);
         var jt = new N,
            Ft = new N;
         Ft.position.set(a + 441, xt);
         var kt = new M(W.resources[H + "5/first_text.png"].texture);
         kt.position.set(0, 154);
         var Nt = new N;
         Nt.position.set(545, 113);
         for (var Wt = [], _ = 0; _ < 12; _++) Wt.push(H + "hat/" + _ + ".png");
         s5HatAni = new PIXI.extras.AnimatedSprite.fromImages(Wt), s5HatAni.position.set(8, 53), new TWEEN.Tween(s5HatAni.position).to({
            y: 63
         }, 1e3).repeat(1 / 0).yoyo(!0).start(), s5HatAni.animationSpeed = .16;
         var Mt = new M(W.resources[H + "5/title.png"].texture),
            Xt = new N;
         Xt.position.set(225, 74);
         var Lt = new N;
         ne = new M(W.resources[H + "5/bg.jpg"].texture), ne.position.set(0, -40);
         var Rt = new X;
         Rt.beginFill(10053375), Rt.drawRect(0, 0, 340, 358), Rt.endFill(), Lt.addChild(ne), Lt.mask = Rt;
         var Ut = new M(W.resources[H + "5/candle1.png"].texture),
            Bt = new M(W.resources[H + "5/candle2.png"].texture),
            Ot = new M(W.resources[H + "5/candle3.png"].texture);
         Ut.position.set(33, 133), Bt.position.set(55, 70), Ot.position.set(80, 103), new TWEEN.Tween(Ut.position).to({
            y: 113
         }, 2e3).repeat(1 / 0).yoyo(!0).start(), new TWEEN.Tween(Bt.position).to({
            y: 110
         }, 2500).repeat(1 / 0).yoyo(!0).start(), new TWEEN.Tween(Ot.position).to({
            y: 83
         }, 2300).repeat(1 / 0).yoyo(!0).start();
         var Ht = new N,
            Qt = new M(W.resources[H + "5/choose_line.png"].texture),
            Jt = new M(W.resources[H + "5/line1.png"].texture),
            qt = new M(W.resources[H + "5/line2.png"].texture),
            Gt = new M(W.resources[H + "5/line3.png"].texture),
            Vt = new M(W.resources[H + "5/line4.png"].texture);
         Jt.position.set(156, 0), qt.position.set(262, 94), Gt.position.set(266, 183), Vt.position.set(148, 183), Jt.visible = !1, qt.visible = !1, Gt.visible = !1, Vt.visible = !1;
         var Yt = [Jt, qt, Gt, Vt];
         Ht.addChild(Qt, Jt, qt, Gt, Vt), Ht.position.set(310, -5);
         var Dt = new N;
         new n(113.5, (-36.5), 0), new n(233.5, 58.5, 1), new n(233.5, 184.5, 2), new n(111.5, 302.5, 3), Ht.addChild(Dt);
         var zt = new N;
         zt.position.set(1602, 0);
         var Zt = new M(W.resources[H + "5/super_line.png"].texture);
         Zt.position.set(0, 80), oe = new M(W.resources[H + "5/arrow.png"].texture), oe.position.set(0, 348), ie = new M(W.resources[H + "5/arrow_down.png"].texture), ie.visible = !1, ie.position.set(3335.5, 209);
         for (var $t = new N, en = new M(W.resources[H + "paint1/bg.png"].texture), tn = [], _ = 1; _ < 17; _++) tn.push(H + "paint1/" + _ + ".jpg");
         se = new PIXI.extras.AnimatedSprite.fromImages(tn), se.position.set(96, 96), $t.addChild(se, en), $t.position.set(1030, 405), de = new N, pe = new M(W.resources[H + "paint2/line.png"].texture), pe.position.set(-130, -195), le = new X, le.beginFill(0), le.drawCircle(0, 0, 2), le.endFill(), le.position.set(28, 6), pe.mask = le, ue = new M(W.resources[H + "paint2/text.png"].texture), ue.position.set(-50, -230);
         var nn = new M(W.resources[H + "paint2/digest.png"].texture);
         nn.position.set(-100, 460), nn.visible = !1, re = new o(de, (-166.5), (-231.5), function() {
            nn.visible = !0
         }), re.visible = !1;
         for (var on = new M(W.resources[H + "paint2/bg.png"].texture), sn = [], _ = 1; _ < 12; _++) sn.push(H + "paint2/" + _ + ".jpg");
         ae = new PIXI.extras.AnimatedSprite.fromImages(sn), ae.position.set(58, 43), de.interactive = !0, de.addChild(pe, le, ae, on, ue, nn), de.position.set(1630, 405), de.on("touchend", function() {
            nn.visible = !0
         });
         for (var an = new N, rn = new M(W.resources[H + "paint3/bg.png"].texture), dn = [], _ = 1; _ < 15; _++) dn.push(H + "paint3/" + _ + ".jpg");
         p3Ani = new PIXI.extras.AnimatedSprite.fromImages(dn), p3Ani.position.set(44, 139), an.addChild(p3Ani, rn), an.position.set(2090, 130);
         var pn = new M(W.resources[H + "5/school1.png"].texture),
            ln = new M(W.resources[H + "5/school2.png"].texture),
            un = new M(W.resources[H + "5/school3.png"].texture),
            gn = new M(W.resources[H + "5/school4.png"].texture);
         pn.position.set(465, 342), ln.position.set(465, 342), un.position.set(465, 342), gn.position.set(465, 342), pn.visible = !1, ln.visible = !1, un.visible = !1, gn.visible = !1;
         var cn = [pn, ln, un, gn];
         zt.addChild(Zt, pn, ln, un, gn, oe, ie, $t, de, an);
         var hn = new M(W.resources[H + "5/text1.png"].texture);
         hn.position.set(0, 450);
         var xn = new M(W.resources[H + "5/text2.png"].texture);
         xn.position.set(0, 450);
         var vn = new M(W.resources[H + "5/text3.png"].texture);
         vn.position.set(0, 450);
         var wn = new M(W.resources[H + "5/text4.png"].texture);
         wn.position.set(0, 450), hn.visible = !1, xn.visible = !1, vn.visible = !1, wn.visible = !1;
         var mn = new M(W.resources[H + "5/cover.png"].texture),
            yn = [hn, xn, vn, wn];
         ge = new M(W.resources[H + "4/slide_right.png"].texture), ge.visible = !1, new TWEEN.Tween({
            alpha: 1
         }).to({
            alpha: 0
         }, 500).onUpdate(function() {
            ge.alpha = this.alpha
         }).repeat(1 / 0).yoyo(!0).start(), ge.position.set(114, 850), Xt.addChild(Rt, Lt, s5HatAni, Ut, Bt, Ot, mn, Ht, hn, xn, vn, wn, ge), new t(Lt, (-136), (-167)), Nt.addChild(Mt, Xt), Ft.addChild(kt, Nt, zt), Te = new N, Te.position.set(vt, xt + 98), Ce = new N;
         var fn = new M(W.resources[H + "fly/circle.png"].texture);
         fn.position.set(40, 6);
         var bn = new M(W.resources[H + "fly/left_wings.png"].texture);
         bn.pivot.set(46, 5), bn.position.set(46, 14);
         var In = new M(W.resources[H + "fly/right_wings.png"].texture);
         In.pivot.set(3, 15), In.position.set(59, 15);
         var Cn = 0;
         setInterval(function() {
            Cn % 4 == 0 ? (bn.rotation = -16 * (2 * Math.PI) / 360, In.rotation = 33 * (2 * Math.PI) / 360) : Cn % 4 == 1 ? (bn.rotation = 34 * (2 * Math.PI) / 360, In.rotation = -25 * (2 * Math.PI) / 360) : Cn % 4 == 2 ? (bn.rotation = -31 * (2 * Math.PI) / 360, In.rotation = 47 * (2 * Math.PI) / 360) : (bn.rotation = 24 * (2 * Math.PI) / 360, In.rotation = -15 * (2 * Math.PI) / 360), Cn++
         }, 60), Ce.addChild(fn, bn, In), Ce.position.set(152, 157), Ce.scale.set(0, 0);
         var Tn = new N,
            En = new M(W.resources[H + "6/top_cover.png"].texture),
            _n = new N;
         ce = new N, he = [{
            from: {
               x: 44,
               y: 112
            },
            to: {
               x: 620,
               y: 141
            }
         }, {
            from: {
               x: 67,
               y: 71
            },
            to: {
               x: 367,
               y: -20
            }
         }, {
            from: {
               x: 113,
               y: 179
            },
            to: {
               x: 313,
               y: 190
            }
         }, {
            from: {
               x: 284,
               y: 141
            },
            to: {
               x: 394,
               y: 152
            }
         }, {
            from: {
               x: 391,
               y: 79
            },
            to: {
               x: -100,
               y: 78
            }
         }, {
            from: {
               x: 429,
               y: 44
            },
            to: {
               x: 150,
               y: 16
            }
         }];
         for (var _ = 0; _ < 6; _++) {
            var Sn = new M(W.resources[H + "man/" + _ + ".png"].texture);
            Sn.position.set(he[_].from.x, he[_].from.y), ce.addChild(Sn)
         }
         xe = [{
            x: 222,
            y: 60
         }, {
            x: 0,
            y: 125
         }, {
            x: 450,
            y: 180
         }], me = new M(W.resources[H + "6/ball.png"].texture), me.position.set(222, 60);
         var Pn = new M(W.resources[H + "6/door.png"].texture);
         Pn.position.set(201, 104), we = new M(W.resources[H + "6/top_tower.png"].texture), we.position.set(0, 52);
         var An = new M(W.resources[H + "6/grass.png"].texture);
         An.position.set(0, 241), ve = new M(W.resources[H + "6/top_mountain.png"].texture), ve.position.set(-30, 0);
         var jn = new M(W.resources[H + "6/cover.png"].texture);
         _n.addChild(ve, An, we, Pn, ce, me, jn), _n.position.set(30, 60), Tn.position.set(0, 250), Tn.addChild(_n, En, Ce), new t(_n, (-20), 0);
         var Fn = new M(W.resources[H + "6/man.png"].texture);
         Fn.position.set(152, 1401), be = new M(W.resources[H + "6/mountain.png"].texture), be.position.set(0, 995), Ie = new M(W.resources[H + "6/tower.png"].texture), Ie.position.set(0, 1010), new TWEEN.Tween(Fn.position).to({
            y: 1421
         }, 800).easing(TWEEN.Easing.Quadratic.Out).repeat(1 / 0).yoyo(!0).start(), Te.addChild(be, Ie, Fn, Tn);
         var kn = new M(W.resources[H + "6/bottom_text.png"].texture);
         kn.position.set(90, 2626), Te.addChild(kn), ye = new TWEEN.Tween({
            x: 152,
            y: 157
         }).to({
            x: 419,
            y: 187
         }, 320).onUpdate(function() {
            Ce.scale.set((this.x - 152) / 267, (this.x - 152) / 267), Ce.position.set(this.x, this.y)
         }).onComplete(function() {
            Ce.scale.set(1, 1), this.x = 152, this.y = 157
         }).onStart(function() {
            Nn.stop(), Wn.stop(), Mn.stop(), Xn.stop(), Ce.scale.set(0, 0)
         });
         var Nn = new TWEEN.Tween(Ce.position).to({
            x: 110,
            y: 263
         }, 320).delay(320),
            Wn = new TWEEN.Tween(Ce.position).to({
               x: 624,
               y: 473
            }, 320).delay(280),
            Mn = new TWEEN.Tween(Ce.position).to({
               x: 589,
               y: 614
            }, 200).delay(280),
            Xn = new TWEEN.Tween(Ce.position).to({
               x: 950,
               y: 968
            }, 280).delay(200);
         ye.chain(Nn), Nn.chain(Wn), Wn.chain(Mn), Mn.chain(Xn);
         var Ln = new N,
            Rn = new M(W.resources[H + "6/line.png"].texture);
         Rn.position.set(348, 0);
         var Un = new M(W.resources[H + "6/goto_class.png"].texture);
         Un.position.set(320, 165), _e = new M(W.resources[H + "6/arrow.png"].texture), _e.position.set(339, 0), Ln.position.set(0, 2850), Ln.addChild(Rn, Un, _e), Te.addChild(Ln), Ye = new N, Ye.position.set(0, 3850);
         var Bn = new M(W.resources[H + "6/top_text.png"].texture);
         Bn.position.set(347, 0), Ye.addChild(Bn), Xe = new N, new i(Xe, 358, 76, s, 0), new i(Xe, 541, 76, d, 1);
         var On = new N;
         On.position.set(358, 190);
         var Hn = new N,
            Qn = new M(W.resources[H + "6/bg.jpg"].texture),
            Jn = new X;
         Jn.drawRect(0, 0, 335, 581), Hn.mask = Jn, Hn.addChild(Qn, Jn), new t(Hn, 0, 0), Pe = new M(W.resources[H + "6/feather.png"].texture), Pe.position.set(187, 468), Pe.pivot.set(64, 28), ke = new M(W.resources[H + "6/feather_fail.png"].texture), ke.pivot.set(57, 45), ke.alpha = 0, ke.position.set(187, 475), We = new M(W.resources[H + "6/mouse.png"].texture), We.position.set(115, 430), We.alpha = 0, Me = new M(W.resources[H + "6/mouse_fail.png"].texture), Me.position.set(177, 480), Me.pivot.set(52, 64), Me.alpha = 0;
         for (var qn = [], _ = 0; _ < 25; _++) qn.push(H + "smoke/" + _ + ".png");
         Ne = new PIXI.extras.AnimatedSprite.fromImages(qn), Ne.position.set(110, 260), Ne.animationSpeed = .5, Ne.gotoAndStop(24), On.addChild(Hn, Pe, ke, We, Me, Ne), Fe = new M(W.resources[H + "6/fly_dtext.png"].texture), Fe.position.set(354, 784), Fe.visible = !0, Re = new M(W.resources[H + "6/change_dtext.png"].texture), Re.position.set(499, 796), Re.visible = !1, Ue = new M(W.resources[H + "6/dog.png"].texture), Ue.position.set(354, 796), Be = new M(W.resources[H + "6/cat.png"].texture), Be.position.set(354, 796), Ue.visible = !1, Be.visible = !1, Le = new M(W.resources[H + "6/change_digest.png"].texture), Le.position.set(40, r - 112 - 100), Le.visible = !1, Ae = new N;
         var Gn = [{
            x: 37,
            y: 8
         }, {
            x: 29.75,
            y: 38.5
         }, {
            x: 22.5,
            y: 69
         }, {
            x: 15.25,
            y: 99.5
         }, {
            x: 8,
            y: 130
         }, {
            x: 38.5,
            y: 101.25
         }, {
            x: 69,
            y: 72.5
         }, {
            x: 99.5,
            y: 43.75
         }, {
            x: 130,
            y: 15
         }, {
            x: 123.75,
            y: 45.75
         }, {
            x: 117.5,
            y: 76.5
         }, {
            x: 111.25,
            y: 107.25
         }, {
            x: 105,
            y: 138
         }, {
            x: 137.25,
            y: 107.25
         }, {
            x: 169.5,
            y: 76.5
         }, {
            x: 201.75,
            y: 45.75
         }, {
            x: 234,
            y: 15
         }],
            Vn = 0,
            Yn = new M(W.resources[H + "6/digest.png"].texture);
         Yn.position.set(-40, 200);
         var Dn = new M(W.resources[H + "6/slowly.png"].texture);
         Dn.position.set(40, 240), Ae.addChild(Yn, Dn);
         var zn = new PIXI.Graphics;
         zn.lineStyle(12, 16777215, 1), zn.moveTo(Gn[0].x, Gn[0].y), Ae.addChild(zn), setInterval(function() {
            Vn++, Vn <= Gn.length - 1 ? zn.lineTo(Gn[Vn].x, Gn[Vn].y) : Vn == Gn.length + 5 && (Vn = 0, Ae.removeChildren(), zn = new PIXI.Graphics, zn.lineStyle(12, 16777215, 1), zn.moveTo(Gn[0].x, Gn[0].y), R && wt ? Ae.addChild(Yn, Dn) : Ae.addChild(Yn), Ae.addChild(zn))
         }, 60), Ae.position.set(417, 300), je = new N;
         var Kn = [{
            x: 132,
            y: 75
         }, {
            x: 132,
            y: 108
         }, {
            x: 104.5,
            y: 108
         }, {
            x: 77,
            y: 108
         }, {
            x: 77,
            y: 75.5
         }, {
            x: 77,
            y: 43
         }, {
            x: 105.7,
            y: 43
         }, {
            x: 105.7,
            y: 43
         }, {
            x: 134.3,
            y: 43
         }, {
            x: 163,
            y: 43
         }, {
            x: 163,
            y: 77.7
         }, {
            x: 163,
            y: 112.3
         }, {
            x: 163,
            y: 147
         }, {
            x: 133,
            y: 147
         }, {
            x: 103,
            y: 147
         }, {
            x: 73,
            y: 147
         }, {
            x: 43,
            y: 147
         }, {
            x: 43,
            y: 112
         }, {
            x: 43,
            y: 77
         }, {
            x: 43,
            y: 42
         }, {
            x: 43,
            y: 7
         }, {
            x: 82,
            y: 7
         }, {
            x: 121,
            y: 7
         }, {
            x: 160,
            y: 7
         }, {
            x: 199,
            y: 7
         }, {
            x: 199,
            y: 53
         }, {
            x: 199,
            y: 99
         }, {
            x: 199,
            y: 145
         }, {
            x: 199,
            y: 191
         }],
            Zn = new M(W.resources[H + "6/digest.png"].texture);
         Zn.position.set(-40, 200);
         var $n = new M(W.resources[H + "6/slowly.png"].texture);
         $n.position.set(40, 240);
         var eo = 0;
         je.addChild(Zn, $n);
         var to = new PIXI.Graphics;
         to.lineStyle(12, 16777215, 1), to.moveTo(Kn[0].x, Kn[0].y), je.addChild(to), setInterval(function() {
            eo++, eo <= Kn.length - 1 ? to.lineTo(Kn[eo].x, Kn[eo].y) : eo == Kn.length + 5 && (eo = 0, je.removeChildren(), to = new PIXI.Graphics, to.lineStyle(12, 16777215, 1), to.moveTo(Kn[0].x, Kn[0].y), R && wt ? je.addChild(Zn, $n) : je.addChild(Zn), je.addChild(to))
         }, 60), je.position.set(417, 300), je.visible = !1, et = new M(W.resources[H + "6/leave_btn.png"].texture), et.pivot.set(81.5, 27), new TWEEN.Tween(et.scale).to({
            x: 1.15,
            y: 1.15
         }, 600).easing(TWEEN.Easing.Quadratic.Out).repeat(1 / 0).yoyo(!0).start(), et.position.set(91.5, 109), tt = new M(W.resources[H + "6/leave_text.png"].texture), tt.position.set(43, 136), et.visible = !1, tt.visible = !1, Ye.addChild(Xe, On, Fe, Re, Ue, Be, Ae, je, Le, et, tt);
         var no = new N;
         no.position.set(0, 5924), De = new N;
         var oo = new M(W.resources[H + "book/bg.png"].texture);
         He = new M(W.resources[H + "book/next.png"].texture), He.position.set(560, 453), He.interactive = !0, He.on("touchend", x), De.addChild(oo, He), De.position.set(10, 0), Oe = new N;
         for (var _ = 1; _ < 6; _++) {
            var io = new M(W.resources[H + "book/text" + _ + ".png"].texture);
            1 != _ && (io.alpha = 0), Oe.addChild(io)
         }
         Oe.position.set(152, r - 150 - 477);
         var so = new N;
         so.position.set(323, 270), Qe = new M(W.resources[H + "book/light.png"].texture), Qe.scale.set(.1, .1), Qe.pivot.set(480, 480), Qe.visible = !1, Je = new N, qe = new M(W.resources[H + "book/Ltext1.png"].texture), Ge = new M(W.resources[H + "book/Ltext2.png"].texture), Ve = new M(W.resources[H + "book/Ltext3.png"].texture), Je.addChild(qe, Ge, Ve), Je.position.set(29.5, -10), Je.pivot.set(154.5, 40), Je.scale.set(.3, .3), Je.visible = !1, so.addChild(Qe, Je), no.addChild(Oe, De, so), Te.addChild(Ye, no), Q.addChild(p, V, q, jt, Ft, Te), Ee = new N;
         var ao = new M(W.resources[H + "6/0.png"].texture);
         Ee.addChild(ao), Ee.interactive = !0, Ee.buttonMode = !0, Ee.visible = !1, U.addChild(Q, Ee), ze = new N, ze.width = a, ze.height = r, ze.addChild(ao), ze.interactive = !0, ze.buttonMode = !0, ze.on("touchstart", T).on("touchmove", E).on("touchend", S), nt = new N, ot = new N, it = new N, st = new N;
         var ro = new M(W.resources[H + "6/black.png"].texture);
         Ke = new N, Ke.position.set(348, 106), Ke.interactive = !0, Ke.on("touchend", g), Ke.addChild(ro), Ze = new N;
         var po = new M(W.resources[H + "6/black.png"].texture);
         Ze.position.set(531, 106), Ze.interactive = !0, Ze.on("touchend", c), Ze.addChild(po), ze.addChild(nt, ot, it, st, Ke, Ze), $e = new M(W.resources[H + "6/leave_black.png"].texture), $e.position.set(0, 142), $e.interactive = !0, $e.on("touchend", h), $e.visible = !1, ze.addChild($e), e("canvas").eq(1).hide(), Q.interactive = !0, Q.buttonMode = !0, Q.on("touchstart", f).on("touchmove", b).on("touchend", I), Kt.setDimensions(a, r, 12e3, 12e3), Kt.scrollTo(0, 0, !1), B.render(U), O.render(ze), A()
      }

      function o() {
         vote(1), wt = !1, e("#fly_success")[0].play(), d(), 0 == Se.currentFrame ? (Se.gotoAndPlay(0), Se.onFrameChange = function() {
            74 == Se.currentFrame && (Se.gotoAndStop(0), $e.visible = !0, et.visible = !0, Fe.visible = !0)
         }) : Se.currentFrame >= 50 && (Se.onFrameChange = function() {
            74 == Se.currentFrame && (Se.gotoAndPlay(0), Se.onFrameChange = function() {
               74 == Se.currentFrame && (Se.gotoAndStop(0), $e.visible = !0, et.visible = !0, Fe.visible = !0)
            })
         })
      }

      function i(e) {
         setTimeout(function() {
            e.rotation = 6 * (2 * Math.PI) / 360, setTimeout(function() {
               e.rotation = -4 * (2 * Math.PI) / 360, setTimeout(function() {
                  e.rotation = 4 * (2 * Math.PI) / 360, setTimeout(function() {
                     e.rotation = -3 * (2 * Math.PI) / 360, setTimeout(function() {
                        e.rotation = 0
                     }, 80)
                  }, 80)
               }, 80)
            }, 80)
         }, 80)
      }

      function s(e) {
         var t = new TWEEN.Tween(e.position).to({
            y: 473
         }, 130).start(),
            n = new TWEEN.Tween(e.position).to({
               y: 480
            }, 130).start();
         t.chain(n)
      }

      function d() {
         Jt && (Jt.stop(), Jt = null), Ot < 6 && (Ot++, Pe.pivot.set(60, -50), Pe.position.set(183, 390 - 50 * (Ot - 1)), Qt = new TWEEN.Tween(Pe.position).to({
            y: 390 - 50 * Ot
         }, 1e3).easing(TWEEN.Easing.Quadratic.Out).start()), Ht || (Ht = new TWEEN.Tween({
            rotate: -.1
         }).to({
            rotate: .1
         }, 1e3).onUpdate(function() {
            Pe.rotation = this.rotate
         }).easing(TWEEN.Easing.Quadratic.Out).repeat(1 / 0).yoyo(!0).start())
      }

      function p() {
         if (vote(3), wt = !0, e("#fly_fail")[0].play(), Ae.visible = !0, Fe.visible = !0, Ot ? (Qt.stop(), Qt = null, setTimeout(function() {
            0 == Ot && Ht && (Ht.stop(), Ht = null)
         }, 200 * Ot), Jt = new TWEEN.Tween(Pe.position).to({
            y: 390
         }, 200 * Ot).easing(TWEEN.Easing.Quadratic.Out).onComplete(function() {
            Pe.pivot.set(64, 28), Pe.position.set(187, 468)
         }).start(), Ot = 0) : i(Pe), Se.onFrameChange = function() {}, 0 == Se.currentFrame) {
            var t = 3;
            Se.gotoAndPlay(0), Se.onFrameChange = function() {
               if (Se.currentFrame == t) {
                  Se.gotoAndStop(t), Se.onFrameChange = function() {};
                  var e = setInterval(function() {
                     Se.gotoAndStop(--t), 0 == Se.currentFrame && (clearInterval(e), e = null, $e.visible = !0, et.visible = !0)
                  }, 40)
               }
            }
         } else if (Se.currentFrame <= 37) {
            var t = Se.currentFrame;
            Se.gotoAndStop(t);
            var n = setInterval(function() {
               Se.gotoAndStop(--t), 0 == Se.currentFrame && (clearInterval(n), n = null, $e.visible = !0, et.visible = !0)
            }, 20)
         } else if (Se.currentFrame > 37) {
            var t = Se.currentFrame;
            Se.gotoAndStop(t);
            var n = setInterval(function() {
               Se.gotoAndStop(++t), 74 == Se.currentFrame && (Se.gotoAndStop(0), clearInterval(n), n = null, $e.visible = !0, et.visible = !0)
            }, 20)
         }
      }

      function l() {
         vote(2), wt = !1, e("#change_success")[0].play(), 1 == Ue.visible ? (Be.visible = !0, Ue.visible = !1) : (Be.visible = !1, Ue.visible = !0), Ne.gotoAndPlay(24), Ne.onFrameChange = function() {
            Me.alpha = 0, ke.alpha = 0, 23 == this.currentFrame && ($e.visible = !0, et.visible = !0, Ne.gotoAndStop(24), 0 == qt ? qt = 1 : 1 == qt && (qt = 0)), 0 == qt && this.currentFrame < 24 ? (Pe.alpha = (10 - this.currentFrame) / 10, We.alpha = (10 - (14 - this.currentFrame)) / 10) : 1 == qt && this.currentFrame < 24 && (We.alpha = (10 - this.currentFrame) / 10, Pe.alpha = (10 - (14 - this.currentFrame)) / 10)
         }
      }

      function u() {
         vote(4), wt = !0, e("#change_fail")[0].play(), Ne.gotoAndPlay(24), je.visible = !0, Ne.onFrameChange = function() {
            23 == this.currentFrame && ($e.visible = !0, et.visible = !0, Gt = !0, Ne.gotoAndStop(24)), 0 == qt && this.currentFrame < 24 ? (Pe.alpha = (10 - this.currentFrame) / 10, ke.alpha = (10 - (14 - this.currentFrame)) / 10, We.alpha = 0, Me.alpha = 0, 10 == this.currentFrame && (i(ke), setTimeout(function() {
               Gt && 2 == Vt && (Pe.alpha = 1, ke.alpha = 0), 1 == Vt && (Pe.alpha = 1, ke.alpha = 0, We.alpha = 0, Me.alpha = 0)
            }, 900))) : 1 == qt && this.currentFrame < 24 && (Pe.alpha = 0, ke.alpha = 0, We.alpha = (10 - this.currentFrame) / 10, Me.alpha = (10 - (14 - this.currentFrame)) / 10, 5 == Ne.currentFrame && s(Me), setTimeout(function() {
               Gt && 2 == Vt && (We.alpha = 1, Me.alpha = 0), 1 == Vt && (Pe.alpha = 1, ke.alpha = 0, We.alpha = 0, Me.alpha = 0)
            }, 1400))
         }
      }

      function g() {
         Yt = !0, Xe.children[1].stop(), Xe.children[0].start(), Vt = 1, Ae.visible = !0, Fe.visible = !0, je.visible = !1, Jt && (Jt.stop(), Jt = null), Ne.gotoAndStop(24), Pe.alpha = 1, ke.alpha = 0, We.alpha = 0, Me.alpha = 0, Qt && (Qt.stop(), Qt = null), Ot = 0, Pe.pivot.set(64, 28), Pe.position.set(187, 468), Le.visible = !1, Se.visible = !0, Fe.visible = !0, Re.visible = !1, Ue.visible = !1, Be.visible = !1, C()
      }

      function c() {
         Yt = !0, Xe.children[0].stop(), Xe.children[1].start(), Vt = 2, qt = 0, Ae.visible = !1, Fe.visible = !1, je.visible = !0, Ht && (Ht.stop(), Ht = null), Le.visible = !0, Se.visible = !1, Se.gotoAndStop(0), Qt && (Qt.stop(), Qt = null), Pe.pivot.set(64, 28), Pe.position.set(187, 468), Fe.visible = !1, Re.visible = !0, Ue.visible = !0, Be.visible = !1, C()
      }

      function h() {
         Dt = !0, e("canvas").eq(1).hide(), C(), g(), Se.visible = !1, tt.visible = !0, Ae.visible = !1
      }

      function x() {
         Rt < 4 && (bookAni.animationSpeed = .2, bookAni.play(), He.visible = !1, bookAni.onFrameChange = function() {
            bookAni.currentFrame == zt[Rt] && (bookAni.stop(), Rt++, pt[Rt - 1].pause(), pt[Rt].play(), He.visible = !0, Rt >= 4 && (He.visible = !1, bookAni.animationSpeed = .08, setTimeout(function() {
               bookAni.play(), bookAni.onFrameChange = function() {
                  69 == bookAni.currentFrame && (bookAni.stop(), v())
               }
            }, 1500)))
         }, new TWEEN.Tween({
            alpha: 1
         }).to({
            alpha: 0
         }, 300).onUpdate(function() {
            Oe.children[Rt].alpha = this.alpha
         }).easing(TWEEN.Easing.Quadratic.Out).start(), new TWEEN.Tween({
            alpha: 0
         }).to({
            alpha: 1
         }, 800).onUpdate(function() {
            Oe.children[Rt + 1].alpha = this.alpha
         }).delay(300).easing(TWEEN.Easing.Quadratic.Out).start())
      }

      function v() {
         Qe.visible = !0, new TWEEN.Tween(Qe.scale).to({
            x: 20,
            y: 20
         }, 2e3).easing(TWEEN.Easing.Quadratic.InOut).onComplete(function() {}).start(), Je.visible = !0, Je.alpha = 0;
         new TWEEN.Tween(Je.scale).to({
            x: 1,
            y: 1
         }, 300).onUpdate(function() {
            Je.alpha = this.x
         }).easing(TWEEN.Easing.Quadratic.InOut).delay(300).start();
         new TWEEN.Tween({
            alpha: 1
         }).to({
            alpha: 0
         }, 2e3).onUpdate(function() {
            qe.alpha = this.alpha
         }).onComplete(function() {
            e(".end").show(), setTimeout(function() {
               e(".end").addClass("show")
            }, 300)
         }).delay(900).start(), new TWEEN.Tween({
            alpha: 1
         }).to({
            alpha: 0
         }, 1e3).onUpdate(function() {
            Ge.alpha = this.alpha
         }).delay(900).start(), new TWEEN.Tween({
            alpha: 1
         }).to({
            alpha: 0
         }, 1500).onUpdate(function() {
            Ve.alpha = this.alpha
         }).delay(900).start()
      }

      function w(e) {
         de.removeChild(le), le = new X, le.drawCircle(0, 0, e), le.position.set(28, 6), pe.mask = le, de.addChild(le), e > 270 && (re.visible = !0, ue.visible = !0), e <= 270 && (re.visible = !1, ue.visible = !1)
      }

      function m(e, t, n) {
         Kt.__enableScrollX = !1, Q.position.x = -e, Math.abs(t - e) >= 50 && !n ? new TWEEN.Tween(Kt).to({
            __scrollLeft: e
         }, 100).start() : Kt.__scrollLeft = e
      }

      function y(e, t, n) {
         Kt.__enableScrollY = !1, Math.abs(t - e) >= 50 && !n ? new TWEEN.Tween(Kt).to({
            __scrollTop: e
         }, 100).start() : Kt.__scrollTop = e, Q.position.y = -e
      }

      function f(e) {
         var t = e.data.originalEvent;
         Zt = !1, Kt.doTouchStart(t.touches, t.timeStamp)
      }

      function b(e) {
         if (!Zt) {
            var t = e.data.originalEvent;
            Kt.doTouchMove(t.touches, t.timeStamp, t.scale)
         }
      }

      function I(e) {
         var t = e.data.originalEvent;
         Kt.doTouchEnd(t.timeStamp), Zt = !0
      }

      function C() {
         $t = !1, mt = {}, yt = {}, ft = {}, bt = [], It = [], Ct = 0, Tt = [], Et = [], Pt = new PIXI.Graphics, Pt.lineStyle(20, 15354189, 1), nt.removeChildren(), ot.removeChildren(), Nt = 0, Gt = !1
      }

      function T(e) {
         if (e.target == Ke || e.target == Ze || e.target == $e) return void(Yt = !0);
         Ae.visible = !1, je.visible = !1, Fe.visible = !1, tt.visible = !1, C(), yt = e.data.getLocalPosition(this), Pt.moveTo(yt.x, yt.y), bt.push(yt), It.push(yt), Tt.push(yt);
         var t = new X;
         t.beginFill(16777215), t.drawCircle(yt.x, yt.y, 3), t.endFill(), ot.addChild(t)
      }

      function E(e) {
         if (!Yt) {
            var t = e.data.getLocalPosition(this),
               n = j(It[It.length - 1], t);
            F(yt, t);
            if (Pt.moveTo(yt.x, yt.y), Pt.lineTo(t.x, t.y), nt.addChild(Pt), n > 10) {
               It.push(t);
               var o = new X;
               if (o.beginFill(16777215), o.drawCircle(t.x, t.y, 3), o.endFill(), ot.addChild(o), It.length >= 3 && It.length - Ct >= 5) {
                  var i = It[Ct],
                     s = It[Ct + 1],
                     a = It[It.length - 1],
                     r = It[It.length - 3],
                     d = It[It.length - 2],
                     p = k(r, d, d, a),
                     l = k(i, s, s, a),
                     u = new X;
                  if (u.lineStyle(2, 65535, 1), u.moveTo(Tt[Tt.length - 1].x, Tt[Tt.length - 1].y), u.lineTo(It[It.length - 1].x, It[It.length - 1].y), p < 40 && l < 20);
                  else {
                     Ct = It.length - 1, Tt.push(It[Ct - 1]), Tt.push(It[Ct]), Tt.length > 1 && Et.push({
                        firstPoint: Tt[Tt.length - 3],
                        endPoint: Tt[Tt.length - 2]
                     });
                     var g = new X;
                     g.lineStyle(4, 16711935, 1), g.moveTo(Tt[Tt.length - 3].x, Tt[Tt.length - 3].y), g.lineTo(Tt[Tt.length - 2].x, Tt[Tt.length - 2].y), _()
                  }
               }
            }
            bt.push(t), yt = t
         }
      }

      function _() {
         for (var e = Et.length, t = 0; t < e; t++) {
            var n = k(Et[t].firstPoint, Et[t].endPoint, St[0], St[1]),
               o = Et[t].firstPoint.x,
               i = Et[t].firstPoint.y,
               s = Et[t].endPoint.x,
               a = Et[t].endPoint.y,
               r = en;
            n < r ? (Et[t].style = 1, Et[t].styleName = "right") : n > 180 - r ? (Et[t].style = 0, Et[t].styleName = "left") : n > 90 - r && n < 90 + r ? a >= i ? (Et[t].style = 2, Et[t].styleName = "down") : (Et[t].style = 3, Et[t].styleName = "up") : s >= o && a <= i ? (Et[t].style = 4, Et[t].styleName = "up-right") : s < o && a < i ? (Et[t].style = 5, Et[t].styleName = "up-left") : s >= o && a >= i ? (Et[t].style = 6, Et[t].styleName = "down-right") : s < o && a > i && (Et[t].style = 7, Et[t].styleName = "down-left")
         }
      }

      function S(e) {
         if (Yt) return void(Yt = !1);
         if ($t = !0, It.length - Ct == 1);
         else {
            if (Ct = It.length - 1, Tt.push(It[Ct - 1]), Tt.push(It[Ct]), Tt.length > 1 && Et.push({
               firstPoint: Tt[Tt.length - 2],
               endPoint: Tt[Tt.length - 1]
            }), Tt.length <= 2) return;
            var t = new X;
            t.lineStyle(4, 16711935, 1), t.moveTo(Tt[Tt.length - 3].x, Tt[Tt.length - 3].y), t.lineTo(Tt[Tt.length - 1].x, Tt[Tt.length - 1].y)
         }
         _();
         for (var n = Et.length, i = "", s = 0; s < n; s++) i += " " + Et[s].styleName;
         for (var a = "", s = 0; s < At.length; s++) {
            var r = P(Et, At[s].rule);
            r === !0 && (a = At[s].figureName, Nt = At[s].figure)
         }
         1 == Vt ? 1 == Nt ? o() : p() : 2 == Vt && (2 == Nt ? l() : u()), setTimeout(function() {
            Zt && C()
         }, 300)
      }

      function P(e, t) {
         for (var n = e.length, o = n - 1, i = t.length - 1; i >= 0; i--) {
            for (var s = 0; o >= 0; o--) {
               for (var a = !1, r = 0; r < t[i].style.length; r++) if (e[o].style == t[i].style[r]) {
                  s++, a = !0;
                  break
               }
               if (!a) break
            }
            if (!(s >= t[i].min && s <= t[i].max)) return !1
         }
         return !(o > -1)
      }

      function A() {
         TWEEN.update(), requestAnimationFrame(A), B.render(U), O.render(ze)
      }

      function j(e, t) {
         var n = Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
         return n
      }

      function F(e, t) {
         var n = 100 * Math.atan((t.y - e.y) / (t.x - e.x));
         return n
      }

      function k(e, t, n, o) {
         var i = {
            x: t.x - e.x,
            y: t.y - e.y
         },
            s = {
               x: o.x - n.x,
               y: o.y - n.y
            },
            a = i.x * s.x + i.y * s.y,
            r = Math.sqrt(Math.pow(i.x, 2) + Math.pow(i.y, 2)) * Math.sqrt(Math.pow(s.x, 2) + Math.pow(s.y, 2)),
            d = a / r;
         d > 1 && (d = 1);
         var p = Math.acos(d),
            l = 180 * p / Math.PI;
         return l
      }
      r = window.innerHeight, a = window.innerWidth, e(".end").bind("touchmove", function(e) {
         e.preventDefault()
      });
      var N = PIXI.Container,
         W = (PIXI.autoDetectRenderer, PIXI.loader),
         M = (PIXI.loader.resources, PIXI.utils.TextureCache, PIXI.Texture, PIXI.Text, new PIXI.ticker.Ticker, PIXI.Sprite),
         X = (PIXI.Rectangle, PIXI.Graphics),
         L = navigator.userAgent,
         R = L.indexOf("Android") > -1 || L.indexOf("Adr") > -1,
         U = ( !! L.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), new N);
      U.width = a, U.height = r;
      var B = new PIXI.CanvasRenderer(a, r),
         O = new PIXI.CanvasRenderer(a, r, {
            transparent: !0
         });
      e(".potter_content")[0].appendChild(B.view), e(".potter_content")[0].appendChild(O.view);
      var H = "http://img2.cache.netease.com/f2e/news/potter/images/";
      W.add(H + "1/bg.png").add(H + "1/inner.jpg").add(H + "1/text1.png").add(H + "1/text2.png").add(H + "1/logo.png").add(H + "text/0.png").add(H + "text/1.png").add(H + "text/2.png").add(H + "text/3.png").add(H + "text/4.png").add(H + "text/5.png").add(H + "text/6.png").add(H + "text/7.png").add(H + "text/8.png").add(H + "text/9.png").add(H + "text/10.png").add(H + "text/11.png").add(H + "text/12.png").add(H + "text/13.png").add(H + "text/14.png").add(H + "text/15.png").add(H + "text/16.png").add(H + "text/17.png").add(H + "text/18.png").add(H + "text/19.png").add(H + "text/20.png").add(H + "text/bottom.png").add(H + "text/bg.png").add(H + "2/rect.png").add(H + "3/0.png").add(H + "3/1.png").add(H + "3/2.png").add(H + "3/3.png").add(H + "3/4.png").add(H + "4/first_text.png").add(H + "4/sky.jpg").add(H + "4/school.png").add(H + "4/cloud.png").add(H + "4/cloud1.png").add(H + "4/cover.png").add(H + "4/text_cover.png").add(H + "4/text.png").add(H + "4/arrow.png").add(H + "4/slide_right.png").add(H + "4/hand.png").add(H + "4/line.png").add(H + "5/first_text.png").add(H + "5/title.png").add(H + "5/bg.jpg").add(H + "5/cover.png").add(H + "5/candle1.png").add(H + "5/candle2.png").add(H + "5/candle3.png").add(H + "5/choose_line.png").add(H + "5/line1.png").add(H + "5/line2.png").add(H + "5/line3.png").add(H + "5/line4.png").add(H + "5/super_line.png").add(H + "5/arrow.png").add(H + "5/arrow_down.png").add(H + "5/left_foot.png").add(H + "5/right_foot.png").add(H + "5/text1.png").add(H + "5/text2.png").add(H + "5/text3.png").add(H + "5/text4.png").add(H + "5/school1.png").add(H + "5/school2.png").add(H + "5/school3.png").add(H + "5/school4.png").add(H + "paint1/bg.png").add(H + "paint2/bg.png").add(H + "paint3/bg.png").add(H + "paint2/line.png").add(H + "paint2/text.png").add(H + "paint2/digest.png").add(H + "mask/0.png").add(H + "mask/1.png").add(H + "mask/2.png").add(H + "mask/3.png").add(H + "6/feather.png").add(H + "6/feather_fail.png").add(H + "6/top_cover.png").add(H + "6/top_bg.png").add(H + "6/man.png").add(H + "6/tower.png").add(H + "6/mountain.png").add(H + "6/0.png").add(H + "fly/circle.png").add(H + "fly/left_wings.png").add(H + "fly/right_wings.png").add(H + "6/line.png").add(H + "6/goto_class.png").add(H + "6/arrow.png").add(H + "6/top_text.png").add(H + "6/outside.png").add(H + "6/inside.png").add(H + "6/text1.png").add(H + "6/text2.png").add(H + "6/short_line.png").add(H + "6/bg.jpg").add(H + "6/fly_dtext.png").add(H + "6/digest.png").add(H + "6/mouse.png").add(H + "6/mouse_fail.png").add(H + "6/black.png").add(H + "6/change_digest.png").add(H + "6/change_dtext.png").add(H + "6/dog.png").add(H + "6/cat.png").add(H + "6/leave_btn.png").add(H + "6/leave_black.png").add(H + "6/leave_text.png").add(H + "6/bottom_text.png").add(H + "6/ball.png").add(H + "6/door.png").add(H + "6/top_tower.png").add(H + "6/grass.png").add(H + "6/top_mountain.png").add(H + "6/cover.png").add(H + "6/slowly.png").add(H + "book/bg.png").add(H + "book/next.png").add(H + "book/text1.png").add(H + "book/text2.png").add(H + "book/text3.png").add(H + "book/text4.png").add(H + "book/text5.png").add(H + "book/light.png").add(H + "book/Ltext1.png").add(H + "book/Ltext2.png").add(H + "book/Ltext3.png").add(H + "man/0.png").add(H + "man/1.png").add(H + "man/2.png").add(H + "man/3.png").add(H + "man/4.png").add(H + "man/5.png").add(H + "school/0.jpg").add(H + "school/1.jpg").add(H + "school/2.jpg").add(H + "school/3.jpg").add(H + "school/4.jpg").add(H + "school/5.jpg").add(H + "school/6.jpg").add(H + "school/7.jpg").add(H + "school/8.jpg").add(H + "school/9.jpg").add(H + "school/10.jpg").add(H + "school/11.jpg").add(H + "school/12.jpg").add(H + "school/13.jpg").add(H + "school/14.jpg").add(H + "school/15.jpg").add(H + "school/16.jpg").add(H + "school/17.jpg").add(H + "school/18.jpg").add(H + "school/19.jpg").add(H + "school/20.jpg").add(H + "school/21.jpg").add(H + "school/22.jpg").add(H + "school/23.jpg").add(H + "school/24.jpg").add(H + "school/25.jpg").add(H + "school/26.jpg").add(H + "school/27.jpg").add(H + "school/28.jpg").add(H + "school/29.jpg").add(H + "school/30.jpg").add(H + "school/31.jpg").add(H + "school/32.jpg").add(H + "school/33.jpg").add(H + "school/34.jpg").add(H + "school/35.jpg").add(H + "school/36.jpg").add(H + "school/37.jpg").add(H + "school/38.jpg").add(H + "school/39.jpg").add(H + "school/40.jpg").add(H + "school/41.jpg").add(H + "school/42.jpg").add(H + "school/43.jpg").add(H + "school/44.jpg").add(H + "school/45.jpg").add(H + "school/46.jpg").add(H + "school/47.jpg").add(H + "school/48.jpg").add(H + "school/49.jpg").on("progress", t).load(n);
      for (var Q, J, q, G, V, Y, D, z, K, Z, $, ee, te, ne, oe, ie, se, ae, re, de, pe, le, ue, ge, ce, he, xe, ve, we, me, ye, fe, be, Ie, Ce, Te, Ee, _e, Se, Pe, Ae, je, Fe, ke, Ne, We, Me, Xe, Le, Re, Ue, Be, Oe, He, Qe, Je, qe, Ge, Ve, Ye, De, ze, Ke, Ze, $e, et, tt, nt, ot, it, st, at = 0, rt = [e("#audio4")[0], e("#audio4")[0], e("#audio3")[0], e("#audio2")[0]], dt = [e("#school1")[0], e("#school2")[0], e("#school3")[0], e("#school4")[0]], pt = [e("#word1")[0], e("#word2")[0], e("#word3")[0], e("#word4")[0], e("#word5")[0]], lt = [], ut = 0; ut < 51; ut++) lt.push(H + "flynext/" + ut + ".png");
      for (var gt = [], ut = 0; ut < 75; ut++) gt.push(H + "flytext/xuanfu_000" + ut + ".png");
      for (var ct = [], ut = 0; ut < 70; ut++) ct.push(H + "book/" + ut + ".png");
      var ht = [{
         x: -367,
         y: -177
      }, {
         x: -261,
         y: -83
      }, {
         x: -257,
         y: 45
      }, {
         x: -375,
         y: 163
      }],
         xt = 4500,
         vt = 5950,
         wt = !1;
      O.rootContext.lineJoin = "round", O.rootContext.lineCap = "round", B.rootContext.lineJoin = "round", B.rootContext.lineCap = "round", O.rootContext.shadowBlur = 20, O.rootContext.shadowColor = "#ea494d";
      var mt = {},
         yt = {},
         ft = {},
         bt = [],
         It = [],
         Ct = 0,
         Tt = [],
         Et = [],
         _t = !1,
         St = [{
            x: 0,
            y: 0
         }, {
            x: 1,
            y: 0
         }],
         Pt = new PIXI.Graphics;
      Pt.lineStyle(20, 15354189, 1);
      var At = [{
         figure: 1,
         figureName: "W形",
         rule: [{
            style: [2, 6, 7],
            min: 1,
            max: 3
         }, {
            style: [1],
            min: 0,
            max: 1
         }, {
            style: [3, 4, 5],
            min: 1,
            max: 3
         }, {
            style: [1],
            min: 0,
            max: 1
         }, {
            style: [2, 6, 7],
            min: 1,
            max: 3
         }, {
            style: [1],
            min: 0,
            max: 1
         }, {
            style: [3, 4, 5],
            min: 1,
            max: 3
         }]
      }, {
         figure: 2,
         figureName: "方形",
         rule: [{
            style: [2, 6, 7],
            min: 1,
            max: 3
         }, {
            style: [0],
            min: 1,
            max: 3
         }, {
            style: [3, 4, 5],
            min: 1,
            max: 3
         }, {
            style: [1],
            min: 1,
            max: 3
         }, {
            style: [2, 6, 7],
            min: 1,
            max: 3
         }, {
            style: [0],
            min: 1,
            max: 3
         }, {
            style: [3, 4, 5],
            min: 1,
            max: 3
         }, {
            style: [1],
            min: 1,
            max: 3
         }, {
            style: [2, 6, 7],
            min: 1,
            max: 3
         }]
      }],
         jt = !1,
         Ft = !1,
         kt = !1,
         Nt = 0,
         Wt = 0,
         Mt = 0,
         Xt = isScrollBottom = isShowS3Cover = !1,
         Lt = isPlayWelAudio = !1,
         Rt = 0,
         Ut = !0,
         Bt = function(t, n, o) {
            if (n < xt - 200 && (t = 0), t > 0 && t < vt - 200 && (n = xt), Q.position.x = -t, Q.position.y = -n, n < 697 && (J.position.y = n / 1.5, Q.position.x = 0, m(0, t)), n >= 0 && n < 5e3) {
               for (var i = 0; i < q.children.length; i++) {
                  var s = q.children[i];
                  if (n + (r - 900) - 160 * i >= 0) {
                     var a = s.speed;
                     if (a) {
                        var d = 50 - (n + (r - 900) - 160 * i) * a;
                        s.children[1].width + d >= 700 && (s.children[1].position.x = d)
                     }
                  }
               }
               if (n >= 800) {
                  Mt = n - 800 - Wt;
                  var p = q.rotation;
                  new TWEEN.Tween({
                     rotate: p
                  }).to({
                     rotate: Mt / 200
                  }, 100).onUpdate(function() {
                     q.rotation = this.rotate, Math.abs(this.rotate) > .1 ? q.scale.set(1 + 1.8 * (Math.abs(this.rotate) - .1), 1 + 1.8 * (Math.abs(this.rotate) - .1)) : q.scale.set(1, 1)
                  }).start(), Wt = n - 800
               } else if (n < 800) {
                  var p = q.rotation;
                  new TWEEN.Tween({
                     rotate: p
                  }).to({
                     rotate: 0
                  }, 300).onUpdate(function() {
                     q.rotation = this.rotate, q.scale.set(1 + 5 * Math.abs(this.rotate), 1 + 5 * Math.abs(this.rotate))
                  }).start()
               }
               if (n >= 2720 - (r - 800)) for (var l = parseInt((n - (2720 - (r - 800))) / (r / 110)), i = 0; i < 120; i++) G.children[i].visible = !1, i <= l && (G.children[i].visible = !0)
            }
            if (n >= 4e3 - r && t <= 300) {
               for (var i = 0; i < Y.children.length; i++) Y.children[i].alpha = (600 - (n - (4e3 - r) - 160 * i)) / 600;
               n > 4e3 ? Y.visible = !1 : Y.visible = !0, V.position.y = n;
               var u = 10,
                  l = parseInt((n - 4e3) / u);
               if (l <= 49 && l >= 0) {
                  if (rt[1].paused) {
                     for (var i = 0; i < 4; i++) rt[i].pause();
                     rt[1].play()
                  }
                  $.visible = !0, $.gotoAndStop(l)
               }
               n > 4e3 + 50 * u && ($.visible = !1, y(4e3 + 50 * u, n), V.position.y = 4e3 + 50 * u, Q.position.y = -(4e3 + 50 * u))
            } else if (n < 4e3 - r && ($.visible = !0, $.gotoAndStop(0), V.position.y = 4e3, rt[0].paused)) {
               for (var i = 0; i < 4; i++) rt[i].pause();
               rt[0].play()
            }
            if (n < xt && t < 100 ? (m(0, t), Z.visible = !1, Ut || (n = xt, Kt.__scrollTop = xt, Q.position.y = -xt)) : n >= xt && (Ut = !1), t > 20 && t <= vt - 300 && (Kt.__enableScrollX = !0, y(xt, n), kt || (kt = !0, fe = new PIXI.extras.AnimatedSprite.fromImages(lt), fe.position.set(0, 1297), fe.animationSpeed = .4, Te.addChild(fe), Se = new PIXI.extras.AnimatedSprite.fromImages(gt), Se.position.set(0, r - 450 - 40), Se.animationSpeed = .4, Ye.addChild(Se), bookAni = new PIXI.extras.AnimatedSprite.fromImages(ct), bookAni.position.set(69, -1), bookAni.animationSpeed = .2, De.addChild(bookAni))), t >= vt - 300 && (n < xt && (Q.position.y = -xt, Kt.__scrollTop = xt), t > vt && (Q.position.x = -vt, Kt.__scrollLeft = vt), n >= xt + 50 && m(vt, t)), t >= 0 && t < 2e3 && n >= xt && (t < 441 ? ($.visible = !1, $.gotoAndStop(49), V.position.y = xt, D.position.x = t, Z.position.x = 204 + t, K.position.x = 48 + t, ee.scale.set(1 + t / 5e3)) : t >= 441 && (D.position.x = 441, K.position.x = 489), t <= 1092 ? te.position.x = t + 40 : t > 1092 && (te.position.x = 1132), t >= 50 && t <= 1092 || t >= 1880 ? (Z.visible = !1, Xt = !1) : (t < 50 || t > 1092) && (Z.visible = !0, Xt || (Xt = !0), isShowS3Cover || (isShowS3Cover = !0, new TWEEN.Tween({
               x: -100
            }).to({
               x: 40
            }, 300).onUpdate(function() {
               te.position.x = this.x
            }).start()))), t > 1890 && !_t ? (Kt.__scrollLeft = 1890, Q.position.x = -1890) : t < 1890 && t >= 1500 && (_t || (Math.abs(t - 1890) < 10 ? (Kt.__enableScrollX = !1, Kt.__scrollLeft = 1890, Q.position.x = -1890) : new TWEEN.Tween(Kt).to({
               __scrollLeft: 1890
            }, 300).onUpdate(function() {
               Q.position.x = -this.__scrollLeft
            }).start())), t <= 1200 ? ne.position.x = 0 : t > 1200 && t <= 1950 && n == xt ? ne.position.x = -(t - 1200) / 750 * 58 : ne.position.x = -58, t <= 2172 ? 0 != at && ht[at - 1].x <= t - 2190 - 80 && oe.position.set(t - 1890 - 300, ht[at - 1].y + 348) : t > 2172 && t <= 2980 ? oe.position.set((t - 2172) / 2, 348) : t > 2980 && t <= 3380 ? (oe.position.x = 850 + (t - 2980) / 2, oe.position.y = 346) : t > 3380 && t <= 3730 ? (oe.position.x = 1390 + (t - 3380) / 3, oe.position.y = 346) : t > 3730 && t <= 4670 ? (oe.position.x = 1530 + (t - 3730) / 2, oe.position.y = 832) : t > 4670 && t <= 4900 ? (oe.position.x = 2022 + 2 * (t - 4670), oe.position.y = 70) : t > 4900 && t <= 5050 ? (oe.position.x = 2502 + (t - 4900) / 2, oe.position.y = 200) : t > 5050 && t <= 5800 ? (oe.position.x = 2965 + (t - 5050) / 2, oe.position.y = 199) : t > 5800 && ie.position.set(3340.5, 209 + Math.min(175, t - 5770)), t <= 5800 ? (oe.visible = !0, ie.visible = !1) : t > 5800 && (oe.visible = !1, ie.visible = !0), t < 3420 ? (se.gotoAndStop(0), Lt = !1) : t >= 3420 && t < 4170 && (Lt || (Lt = !0, e("#paint1")[0].play()), se.gotoAndStop(Math.min(15, parseInt((t - 3420) / 30)))), t < 3980 ? (ae.gotoAndStop(0), re.visible = !1, ue.visible = !1, de.removeChild(le), le = new X, le.drawCircle(0, 0, 0), le.position.set(28, 6), pe.mask = le, de.addChild(le), isPlayWelAudio = !1) : t >= 3980 && t < 4740 && (isPlayWelAudio || (isPlayWelAudio = !0, e("#paint2")[0].play()), w(10 * (t - 3980)), ae.gotoAndStop(Math.min(10, parseInt((t - 3980) / 35)))), t < 4100 ? p3Ani.gotoAndStop(0) : t >= 4100 && t < 5400 && p3Ani.gotoAndStop(parseInt((t - 4100) / 30)), n >= xt && t >= vt && n <= xt + 700) {
               for (var g = n - xt, i = 0; i < 6; i++) {
                  var c = he[i].from.x + g / 700 * (he[i].to.x - he[i].from.x),
                     h = he[i].from.y + g / 700 * (he[i].to.y - he[i].from.y);
                  ce.children[i].position.set(c, h)
               }
               g <= 150 ? (c = xe[0].x + g / 150 * (xe[1].x - xe[0].x), h = xe[0].y + g / 150 * (xe[1].y - xe[0].y)) : (c = xe[1].x + (g - 150) / 350 * (xe[2].x - xe[1].x), h = xe[1].y + (g - 150) / 350 * (xe[2].y - xe[1].y)), me.position.set(c, h), ve.x = -30 + g / 700 * 30, we.position.x = -g / 700 * 40
            }
            if (n >= xt + 20 && t >= vt ? (jt || (jt = !0, ye.start()), be.position.y = 995 + (n - (xt + 250)) / 10, Ie.position.y = 1010 + (n - (xt + 250)) / 5) : n <= xt + 10 && t <= vt && (jt && (jt = !1), Ft && (Ft = !1, fe && fe.gotoAndStop(0))), n >= xt + 1e3 + 250 && t >= vt && (0 == fe.currentFrame && (Ee.visible = !0), Ft || (new TWEEN.Tween(Kt).to({
               __scrollTop: xt + 200 + 1200 + 250
            }, 1500).onUpdate(function() {
               Q.position.y = -Kt.__scrollTop
            }).start(), Ft = !0, fe.play(), e("#fly")[0].play(), fe.onFrameChange = function() {
               50 == this.currentFrame && (Ee.visible = !1, fe.stop(), fe.onFrameChange = function() {})
            })), n > xt + 2500 + 200 && n <= xt + 2500 + 890 + 200 ? (_e.position.y = (n - xt - 2500 - 200) / 2, n > xt + 2500 + 330 + 200 && (_e.position.y = 697 + (n - xt - 2500 - 330 - 200) / 2)) : n <= xt + 2500 + 200 && (_e.position.y = 0), n >= xt + 2500 + 400 && n <= 3850 + xt + 40 + 200) {
               if (!Dt) {
                  if (rt[2].paused) {
                     for (var i = 0; i < 4; i++) rt[i].pause();
                     rt[2].play()
                  }
                  e("canvas").eq(1).show(), Math.abs(n - (3850 + xt + 40)) < 10 ? (Kt.__enableScrollY = !1, Kt.__scrollTop = 3850 + xt + 40, Q.position.y = -(3850 + xt + 40)) : (new TWEEN.Tween(Kt).to({
                     __scrollTop: 3850 + xt + 40
                  }, 300).onUpdate(function() {
                     Q.position.y = -this.__scrollTop
                  }).start(), Se.visible = !0, et.visible = !1, $e.visible = !1, tt.visible = !1, Ae.visible = !0)
               }
            } else if (n >= 3850 + xt + 40 + 200) {
               if (Dt = !1, e("canvas").eq(1).hide(), rt[3].paused) {
                  for (var i = 0; i < 4; i++) rt[i].pause();
                  rt[3].play()
               }
            } else n <= 3850 + xt + 40 - 200 && (Dt = !1, e("canvas").eq(1).hide(), et.visible = !1, $e.visible = !1, tt.visible = !1);
            n >= 1e4 ? isScrollBottom || (isScrollBottom = !0, new TWEEN.Tween(Kt).to({
               __scrollTop: xt + 5762 + 162
            }, 300).onUpdate(function() {
               Q.position.y = -Kt.__scrollTop, 0 == Rt && pt[0].play()
            }).start()) : n < 9500 && (isScrollBottom = !1), n >= xt + 5762 + 162 && (Kt.__scrollTop = xt + 5762 + 162, n = xt + 5762 + 162, Q.position.y = -(xt + 5762 + 162))
         },
         Ot = 0,
         Ht = null,
         Qt = null,
         Jt = null,
         qt = 0,
         Gt = !1,
         Vt = 1,
         Yt = !1,
         Dt = !1,
         zt = [16, 31, 48, 66, 69],
         Kt = new Scroller(Bt, {
            zooming: !1,
            animating: !0,
            bouncing: !1,
            animationDuration: 1e3,
            speedMultiplier: .5
         }),
         Zt = !0,
         $t = !0,
         en = 20
   })
}(jQuery);