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