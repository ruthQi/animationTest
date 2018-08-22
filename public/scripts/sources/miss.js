//http://news.163.com/special/fdh5_zhangyy/?45732845=&spssid=215e217675e5702aed710b4d1e8f51e3&spsw=8&from=timeline&isappinstalled=0
!
function() {
   !
   function(e) {
      function a() {
         return !(!/iphone|nokia|sony|ericsson|mot|samsung|sgh|lg|philips|panasonic|alcatel|lenovo|cldc|midp|wap|mobile/i.test(navigator.userAgent.toLowerCase()) || /pc=1/.test(location.search))
      }
      function n(e) {
         var a = document.getElementById(e),
            n = function() {
               document.removeEventListener("WeixinJSBridgeReady", n), document.removeEventListener("YixinJSBridgeReady", n), a.play(), a.pause()
            };
         document.addEventListener("WeixinJSBridgeReady", n, !1), document.addEventListener("YixinJSBridgeReady", n, !1)
      }
      function t(a, n) {
         var t = parseInt(a.progress);
         e(".loading_text").html(t + "%")
      }
      function i() {
         e(".loading").fadeOut(300), x = window.innerHeight, y = 750, E = new c, U = new m(h.resources[u + "bg.png"].texture), E.addChild(U), X = new c, E.addChild(X), L = new c, E.addChild(L), H = new c, E.addChild(H), J = new c, E.addChild(J), q = new c, E.addChild(q), q.position.set(0, 13530), N = new c, E.addChild(N), N.position.set(0, 20400), O = new c, E.addChild(O), O.position.set(0, 24900);
         for (var a = [X, L, H, J, q, N, O], n = [C, P, D, M, A, _, T], t = 0; t < a.length; t++) for (var i = 0; i < n[t].length; i++) {
            var s;
            if (n[t][i].animate ? (s = new PIXI.extras.AnimatedSprite.fromImages(n[t][i].animateData), s.animationSpeed = n[t][i].animationSpeed) : s = new m(h.resources[n[t][i].url].texture), s.data = n[t][i], s.position.set(n[t][i].position.x, n[t][i].position.y), 1 == t && 7 == i && (R = new m(h.resources[u + "plane1.png"].texture), R.position.set(802, 5998), F = new m(h.resources[u + "plane2.png"].texture), F.position.set(802, 5998), R.data = {
               speed: 0
            }, F.data = {
               speed: 0
            }, a[t].addChild(R, F)), 4 == t && 2 == i) {
               var r = new f;
               r.lineStyle(4, 16724736, 1), r.drawRect(0, 0, 500, 500), r.endFill(), r.data = {
                  speed: {
                     x: -.133,
                     y: .1
                  },
                  position: {
                     x: 490,
                     y: -100
                  }
               }, a[t].children[1].mask = r, a[t].addChild(r), s.pivot.set(17.5, 18.5)
            }
            if (6 == t && 10 == i) {
               var g = +new Date,
                  k = new Date(2017, 5, 9).getTime(),
                  I = parseInt((g - k) / 864e5),
                  Q = new c,
                  Y = new v("章莹颖失踪的第" + I + "天", {
                     fontSize: "26px",
                     fill: "#181b32",
                     fontFamily: "微软雅黑"
                  });
               Y.position.x = (750 - Y.width) / 2;
               var G = new v("我们还没找到她", {
                  fontSize: "26px",
                  fill: "#181b32",
                  fontFamily: "微软雅黑"
               });
               G.position.x = (750 - G.width) / 2, G.position.y = 36;
               var K = new v("神探李昌钰说她仍可能活着", {
                  fontSize: "26px",
                  fill: "#181b32",
                  fontFamily: "微软雅黑"
               });
               K.position.x = (750 - K.width) / 2, K.position.y = 72, Q.addChild(Y, G, K), Q.position.y = 4200, Q.data = {
                  position: {
                     x: 210,
                     y: 4200
                  },
                  speed: {
                     x: 0,
                     y: 0
                  }
               }, a[t].addChild(Q)
            }
            if (a[t].addChild(s), 6 == t && 1 == i) {
               j = new c, j.data = {
                  speed: {
                     x: .3,
                     y: -.1
                  },
                  position: {
                     x: 448,
                     y: 839
                  }
               }, j.position.set(j.data.position.x, j.data.position.y);
               var U = new m(h.resources[u + "bike/bg.png"].texture);
               U.position.set(12, 194);
               var V = new m(h.resources[u + "bike/leg1.png"].texture);
               V.position.set(47, 113);
               var $ = new m(h.resources[u + "bike/leg2.png"].texture);
               $.position.set(38, 117);
               var ee = new m(h.resources[u + "bike/inner.png"].texture);
               ee.position.set(25, 135);
               var ae = new m(h.resources[u + "bike/wheel1.png"].texture);
               ae.pivot.set(38.5, 39.5), ae.position.set(38.5, 214.5);
               var ne = new m(h.resources[u + "bike/wheel2.png"].texture);
               ne.pivot.set(38.5, 39.5), ne.position.set(157.5, 171.5);
               var te = new m(h.resources[u + "bike/outer.png"].texture);
               te.position.set(8, 0);
               var ie = new m(h.resources[u + "bike/text.png"].texture);
               ie.position.set(-21, -143), j.addChild(U, V, $, ee, ae, ne, te, ie), a[t].addChild(j)
            }
         }
         B = new c, E.addChild(B), B.position.set(275, 4250);
         for (var i = 0; i < 8; i++) {
            var de = new m(h.resources[u + "leaves/l" + i % 4 + ".png"].texture);
            B.addChild(de)
         }
         clock = new c, clock.position.set(326, 5273);
         var pe = new m(h.resources[u + "clock/h.png"].texture);
         pe.pivot.set(9, 35), pe.position.set(50, 51);
         var oe = new m(h.resources[u + "clock/m.png"].texture);
         oe.pivot.set(8, 42), oe.position.set(50, 51);
         var se = new m(h.resources[u + "clock/s.png"].texture);
         se.pivot.set(4, 42), se.position.set(50, 51), setInterval(function() {
            var e = (new Date).getHours(),
               a = (new Date).getMinutes(),
               n = (new Date).getSeconds();
            pe.rotation = e >= 12 ? (e - 12 + a / 60) / 12 * (2 * Math.PI) : (e + a / 60) / 12 * (2 * Math.PI), oe.rotation = (a + n / 60) / 60 * (2 * Math.PI), se.rotation = n / 60 * (2 * Math.PI)
         }, 1e3), clock.addChild(pe, oe, se), E.addChild(clock), W = new PIXI.extras.AnimatedSprite.fromImages(b), W.animationSpeed = .15, W.pivot.set(115, 145), W.play(), E.addChild(W);
         var re = new m(h.resources[u + "tree_cover.png"].texture);
         re.position.set(92, 3945), E.addChild(re), z = new f, z.lineStyle(4, 65280, 1), z.moveTo(500, 0), E.interactive = !0, E.buttonMode = !0, E.on("touchstart", d).on("touchmove", p).on("touchend", o), w.addChild(E), Z.setDimensions(y, x, y, 29360), S.render(w), l()
      }
      function d(e) {
         var a = e.data.originalEvent;
         $ = !0, Z.doTouchStart(a.touches, a.timeStamp)
      }
      function p(e) {
         if ($) {
            var a = e.data.originalEvent;
            Z.doTouchMove(a.touches, a.timeStamp, a.scale)
         }
      }
      function o(e) {
         var a = e.data.originalEvent;
         Z.doTouchEnd(a.timeStamp), $ = !1
      }
      function s() {
         ee = !0;
         for (var e = 0; e < 8; e++) {
            var a = 20 * Math.random(),
               n = 20 * Math.random(),
               t = 50 * Math.random() + 70,
               i = 100 * Math.random() + 50,
               d = 400 * Math.random() + 800,
               p = parseInt(1e3 * Math.random());
            new TWEEN.Tween(B.children[e].position).to({
               x: -t - a,
               y: i + n
            }, d).easing(TWEEN.Easing.Quadratic.Out).delay(p).start()
         }
      }
      function r() {
         ee = !1;
         for (var e = 0; e < 8; e++) B.children[e].position.set(0, 0)
      }
      function l() {
         TWEEN.update(), requestAnimationFrame(l), S.render(w)
      }
      var g = a();
      if (!g) {
         var y = 640,
            x = window.innerHeight;
         return e(".zhang_miss_content").height(x), e(".zhang_miss_content").html(""), void e(".zhang_miss_content").css({
            "background-color": "#eee",
            "background-image": "url(http://cms-bucket.nosdn.127.net/87847c5dd80349379b5e0d655994c2a620170814104508.jpeg)",
            "background-repeat": "no-repeat",
            "background-position": "center 100px"
         })
      }
      var u = "http://img2.cache.netease.com/f2e/news/zhang_miss/images/",
         x = window.innerHeight,
         y = 750;
      n("dog"), n("wings"), n("crow_sound"), n("fly_into_tree"), n("clock"), n("skateboard"), n("wind"), n("step"), n("shoot"), n("door"), n("car"), n("cry"), n("bus"), n("cat"), n("whistle"), n("police_dog"), n("stick"), n("people"), n("phone"), n("go"), e(".loading").bind("touchmove", function(e) {
         e.preventDefault()
      });
      var c = PIXI.Container,
         h = (PIXI.autoDetectRenderer, PIXI.loader),
         v = (PIXI.loader.resources, PIXI.utils.TextureCache, PIXI.Texture, PIXI.Text),
         m = (new PIXI.ticker.Ticker, PIXI.Sprite),
         f = (PIXI.Rectangle, PIXI.Graphics);
      e(".zhang_miss_content").width(y).height(x);
      var w = new c;
      w.width = y, w.height = x;
      var S = new PIXI.CanvasRenderer(y, x);
      e(".zhang_miss_content").append(S.view);
      for (var b = [], k = [0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], I = 0; I < k.length; I++) b.push(u + "bird/" + k[I] + ".png");
      var C = [{
         url: u + "1/0.png",
         position: {
            x: 0,
            y: 130
         },
         speed: {
            x: 0,
            y: .1
         }
      }, {
         url: u + "1/1.png",
         position: {
            x: 121,
            y: 1618
         },
         speed: {
            x: 0,
            y: .03
         }
      }, {
         url: u + "1/2.png",
         position: {
            x: 334,
            y: 1743
         },
         speed: {
            x: 0,
            y: -.08
         }
      }, {
         url: u + "1/3.png",
         position: {
            x: 249,
            y: 2898
         },
         speed: 0
      }, {
         url: u + "1/5.png",
         position: {
            x: 62,
            y: 2564
         },
         speed: {
            x: 0,
            y: -.06
         }
      }, {
         url: u + "1/4.png",
         position: {
            x: 344,
            y: 3544
         },
         animate: !0,
         animateData: [u + "1/4.png", u + "1/4-1.png"],
         animationSpeed: .1,
         playTime: 3e3,
         initLine: 2500,
         startLine: 2700,
         speed: 0,
         audio: e("#dog")[0],
         isPlayedMusic: !1
      }, {
         url: u + "logo.png",
         position: {
            x: 220,
            y: 16
         },
         speed: {
            x: 0,
            y: 0
         }
      }],
         P = [{
            url: u + "2/0.png",
            position: {
               x: 0,
               y: 4696
            }
         }, {
            url: u + "2/1.png",
            position: {
               x: 114,
               y: 6281
            },
            speed: {
               x: 0,
               y: -.06
            }
         }, {
            url: u + "2/2.png",
            position: {
               x: 335,
               y: 6319
            },
            speed: {
               x: 0,
               y: .06
            }
         }, {
            url: u + "2/3.png",
            position: {
               x: 495,
               y: 6364
            },
            speed: {
               x: 0,
               y: .06
            }
         }, {
            url: u + "2/4.png",
            position: {
               x: 302,
               y: 6593
            },
            speed: {
               x: 0,
               y: -.06
            }
         }, {
            url: u + "2/5.png",
            position: {
               x: 409,
               y: 6651
            },
            speed: {
               x: 0,
               y: -.06
            }
         }, {
            url: u + "2/6.png",
            position: {
               x: 74,
               y: 6770
            },
            speed: {
               x: 0,
               y: -.06
            }
         }, {
            url: u + "2/7.png",
            position: {
               x: 0,
               y: 7007
            },
            animate: !0,
            animateData: [u + "2/7.png", u + "2/7-1.png"],
            speed: {
               x: -1,
               y: 0
            }
         }, {
            url: u + "2/8.png",
            position: {
               x: 0,
               y: 7462
            },
            speed: 0
         }, {
            url: u + "2/9.png",
            animate: !0,
            animateData: [u + "2/9.png", u + "2/9-1.png", u + "2/9-2.png", u + "2/9-3.png", u + "2/9-4.png", u + "2/9-5.png", u + "2/9-6.png", u + "2/9-7.png", u + "2/9-8.png", u + "2/9-9.png"],
            position: {
               x: 165,
               y: 8128
            },
            translate: {
               x: 0,
               y: 450
            },
            speed: {
               x: .6665,
               y: .5
            }
         }],
         D = [{
            url: u + "3/0.png",
            position: {
               x: 56,
               y: 10011
            },
            translate: {
               x: 0,
               y: -450
            },
            speed: {
               x: 0,
               y: -.3
            }
         }, {
            url: u + "3/1.png",
            position: {
               x: 201,
               y: 9266
            },
            translate: {
               x: 0,
               y: -450
            },
            speed: {
               x: 0,
               y: -.3
            }
         }, {
            url: u + "3/2.png",
            position: {
               x: 71,
               y: 10475
            },
            translate: {
               x: 0,
               y: -450
            },
            speed: {
               x: 0,
               y: -.3
            }
         }, {
            url: u + "3/3.png",
            position: {
               x: 437,
               y: 9980
            },
            translate: {
               x: 0,
               y: -450
            },
            speed: {
               x: 0,
               y: -.3
            },
            animate: !0,
            animateData: [u + "3/3.png", u + "3/3-1.png"]
         }, {
            url: u + "3/4.png",
            position: {
               x: 417,
               y: 9986
            },
            translate: {
               x: 0,
               y: -450
            },
            speed: {
               x: 0,
               y: -.3
            }
         }, {
            url: u + "3/5.png",
            position: {
               x: 180,
               y: 9909
            },
            translate: {
               x: 0,
               y: -400
            },
            speed: {
               x: 0,
               y: -.25
            }
         }, {
            url: u + "3/6.png",
            position: {
               x: 521,
               y: 10088
            },
            translate: {
               x: 0,
               y: -450
            },
            speed: {
               x: 0,
               y: -.3
            }
         }, {
            url: u + "3/9.png",
            position: {
               x: 268,
               y: 11187
            },
            translate: {
               x: 0,
               y: -900
            },
            speed: {
               x: 0,
               y: -.3
            }
         }, {
            url: u + "3/8.png",
            position: {
               x: 395,
               y: 10836
            },
            translate: {
               x: 0,
               y: -580
            },
            speed: {
               x: -.12,
               y: -.18
            }
         }, {
            url: u + "3/7.png",
            position: {
               x: 513,
               y: 10485
            },
            translate: {
               x: 0,
               y: -450
            },
            speed: {
               x: 0,
               y: -.3
            },
            animate: !0,
            animateData: [u + "3/7.png", u + "3/7-1.png"]
         }, {
            url: u + "3/10.png",
            position: {
               x: 772,
               y: 11426
            },
            translate: {
               x: 200,
               y: -900
            },
            speed: {
               x: .2,
               y: -.1
            }
         }],
         M = [{
            url: u + "4/0.png",
            position: {
               x: 398,
               y: 12047
            },
            translate: {
               x: -360,
               y: -1250
            },
            speed: {
               x: -.2,
               y: -.466
            }
         }, {
            url: u + "4/1.png",
            position: {
               x: 0,
               y: 11006
            },
            translate: {
               x: 0,
               y: -800
            },
            speed: {
               x: 0,
               y: -.4
            }
         }, {
            url: u + "4/2.png",
            position: {
               x: 216,
               y: 11914
            },
            translate: {
               x: 0,
               y: -1e3
            },
            speed: {
               x: 0,
               y: -.3
            }
         }, {
            url: u + "4/3.png",
            position: {
               x: 525,
               y: 12521
            },
            translate: {
               x: 0,
               y: -1400
            },
            speed: {
               x: 0,
               y: -.4
            }
         }, {
            url: u + "4/4.png",
            position: {
               x: 200,
               y: 13343
            },
            translate: {
               x: 0,
               y: -1700
            },
            speed: {
               x: .1,
               y: -.3667
            },
            animate: !0,
            animateData: [u + "4/4.png", u + "4/4-1.png"],
            animationSpeed: .05
         }, {
            url: u + "4/5.png",
            position: {
               x: 90,
               y: 13100
            },
            translate: {
               x: 0,
               y: -1500
            },
            speed: {
               x: -.1,
               y: -.2
            }
         }, {
            url: u + "4/6.png",
            position: {
               x: 91,
               y: 13779
            },
            translate: {
               x: 0,
               y: -1900
            },
            speed: {
               x: 0,
               y: -.4
            }
         }],
         A = [{
            url: u + "5/0.png",
            position: {
               x: 427,
               y: 202
            },
            speed: {
               x: 0,
               y: 0
            }
         }, {
            url: u + "5/1.png",
            position: {
               x: 431,
               y: 219
            },
            speed: {
               x: 0,
               y: 0
            }
         }, {
            url: u + "5/2.png",
            position: {
               x: 418.5,
               y: 435.5
            },
            speed: {
               x: -.133,
               y: .1
            }
         }, {
            url: u + "5/3.png",
            position: {
               x: 487,
               y: 244
            },
            speed: {
               x: -.0887,
               y: .0667
            }
         }, {
            url: u + "5/4.png",
            position: {
               x: 0,
               y: 272
            },
            speed: {
               x: 0,
               y: 0
            }
         }, {
            url: u + "5/6.png",
            position: {
               x: 63,
               y: 588
            },
            speed: {
               x: 0,
               y: 0
            }
         }, {
            url: u + "5/5.png",
            position: {
               x: 6,
               y: 553
            },
            speed: {
               x: 0,
               y: 0
            },
            animate: !0,
            animateData: [u + "5/5.png", u + "5/5-1.png"],
            animationSpeed: .05
         }, {
            url: u + "5/7.png",
            position: {
               x: 176,
               y: 2480
            },
            translate: {
               x: -50,
               y: 50
            },
            speed: {
               x: -.18,
               y: -.1
            }
         }, {
            url: u + "5/8.png",
            position: {
               x: 103,
               y: 2615
            },
            speed: 0
         }, {
            url: u + "5/9.png",
            position: {
               x: 0,
               y: 2876
            },
            speed: 0
         }, {
            url: u + "5/10.png",
            position: {
               x: 330,
               y: 4324
            },
            speed: {
               x: 0,
               y: 0
            },
            animate: !0,
            animateData: [u + "5/10.png", u + "5/10-1.png"],
            animationSpeed: .05
         }, {
            url: u + "5/11.png",
            position: {
               x: 210,
               y: 4521
            },
            speed: {
               x: 0,
               y: -.05
            }
         }, {
            url: u + "5/12.png",
            position: {
               x: 0,
               y: 5956
            },
            speed: {
               x: 0,
               y: -.1
            }
         }],
         _ = [{
            url: u + "6/0.png",
            position: {
               x: 498,
               y: 0
            },
            speed: {
               x: 0,
               y: .1
            }
         }, {
            url: u + "6/1.png",
            position: {
               x: 519,
               y: 480
            },
            speed: {
               x: 0,
               y: .04
            }
         }, {
            url: u + "6/2.png",
            position: {
               x: 639,
               y: 602
            },
            speed: {
               x: 0,
               y: .06
            }
         }, {
            url: u + "6/3.png",
            position: {
               x: 477,
               y: 747
            },
            speed: {
               x: 0,
               y: .04
            }
         }, {
            url: u + "6/4.png",
            position: {
               x: 335,
               y: 799
            },
            speed: {
               x: 0,
               y: .02
            }
         }, {
            url: u + "6/5.png",
            position: {
               x: 500,
               y: 951
            },
            translate: {
               x: 0,
               y: 20
            },
            speed: {
               x: 0,
               y: .1
            }
         }, {
            url: u + "6/6.png",
            position: {
               x: 165,
               y: 1031
            },
            speed: {
               x: 0,
               y: .05
            }
         }, {
            url: u + "6/7.png",
            position: {
               x: 613,
               y: 1106
            },
            speed: {
               x: 0,
               y: .12
            }
         }, {
            url: u + "6/8.png",
            position: {
               x: 364,
               y: 1196
            },
            speed: {
               x: 0,
               y: .08
            }
         }, {
            url: u + "6/9.png",
            position: {
               x: 203,
               y: 1314
            },
            speed: {
               x: 0,
               y: .15
            }
         }, {
            url: u + "6/10.png",
            position: {
               x: 523,
               y: 1348
            },
            speed: {
               x: 0,
               y: .09
            }
         }, {
            url: u + "6/11.png",
            position: {
               x: 428,
               y: 1496
            },
            speed: {
               x: 0,
               y: .03
            }
         }, {
            url: u + "6/12.png",
            position: {
               x: 252,
               y: 1597
            },
            speed: {
               x: 0,
               y: .05
            }
         }, {
            url: u + "6/13.png",
            position: {
               x: 67,
               y: 1587
            },
            speed: {
               x: 0,
               y: .12
            }
         }, {
            url: u + "6/14.png",
            position: {
               x: 189,
               y: 1823
            },
            speed: {
               x: 0,
               y: .09
            }
         }, {
            url: u + "6/15.png",
            position: {
               x: 497,
               y: 1752
            },
            speed: {
               x: 0,
               y: .02
            }
         }, {
            url: u + "6/16.png",
            position: {
               x: 121,
               y: 1989
            },
            speed: {
               x: 0,
               y: 0
            }
         }, {
            url: u + "6/17.png",
            position: {
               x: 150,
               y: 2501
            },
            speed: {
               x: 0,
               y: .06
            }
         }, {
            url: u + "6/18.png",
            position: {
               x: 140,
               y: 2192
            },
            speed: {
               x: 0,
               y: 0
            }
         }, {
            url: u + "6/19.png",
            position: {
               x: 322,
               y: 2730
            },
            speed: {
               x: 0,
               y: .05
            }
         }, {
            url: u + "6/20.png",
            position: {
               x: 241,
               y: 3717
            },
            speed: {
               x: 0,
               y: 0
            },
            animate: !0,
            animateData: [u + "6/20.png", u + "6/20-1.png"],
            animationSpeed: .05
         }, {
            url: u + "6/21.png",
            position: {
               x: 0,
               y: 3873
            },
            speed: {
               x: .06,
               y: .03
            },
            translate: {
               x: -30,
               y: 0
            },
            animate: !0,
            animateData: [u + "6/21.png", u + "6/21-1.png"],
            animationSpeed: .05
         }],
         T = [{
            url: u + "7/0.png",
            position: {
               x: 335,
               y: 0
            },
            speed: {
               x: -.07,
               y: .1
            }
         }, {
            url: u + "7/1.png",
            position: {
               x: 24,
               y: 236
            },
            speed: {
               x: 0,
               y: -.05
            }
         }, {
            url: u + "7/2.png",
            position: {
               x: 0,
               y: 625
            },
            translate: {
               x: 0,
               y: -50
            },
            speed: {
               x: 0,
               y: -.06
            }
         }, {
            url: u + "7/3.png",
            position: {
               x: 523,
               y: 1601
            },
            speed: {
               x: 0,
               y: .08
            }
         }, {
            url: u + "7/4.png",
            position: {
               x: 235,
               y: 2024
            },
            speed: {
               x: 0,
               y: .03
            },
            animate: !0,
            animateData: [u + "7/4.png", u + "7/4-1.png"],
            animationSpeed: .05
         }, {
            url: u + "7/5.png",
            position: {
               x: 169,
               y: 2400
            },
            speed: {
               x: 0,
               y: 0
            }
         }, {
            url: u + "7/6.png",
            position: {
               x: 646,
               y: 2546
            },
            speed: {
               x: 0,
               y: -.07
            }
         }, {
            url: u + "7/7.png",
            position: {
               x: 398,
               y: 2711
            },
            speed: {
               x: 0,
               y: -.1
            },
            animate: !0,
            animateData: [u + "7/7.png", u + "7/7-1.png"],
            animationSpeed: .05
         }, {
            url: u + "7/9.jpg",
            position: {
               x: 0,
               y: 3484
            },
            speed: {
               x: 0,
               y: 0
            }
         }, {
            url: u + "7/8.png",
            position: {
               x: 291,
               y: 3259
            },
            speed: {
               x: 0,
               y: -.12
            }
         }, {
            url: u + "7/10.png",
            position: {
               x: 222.5,
               y: 4250
            },
            speed: {
               x: 0,
               y: 0
            }
         }, {
            url: u + "7/11.png",
            position: {
               x: 332,
               y: 1325
            },
            translate: {
               x: 0,
               y: -50
            },
            speed: {
               x: 0,
               y: 0
            }
         }];
      h.add(u + "bg.png").add(u + "tree_cover.png").add(u + "plane1.png").add(u + "plane2.png").add(u + "logo.png").add(u + "1/0.png").add(u + "1/1.png").add(u + "1/2.png").add(u + "1/3.png").add(u + "1/4.png").add(u + "1/4-1.png").add(u + "1/5.png").add(u + "leaves/l0.png").add(u + "leaves/l1.png").add(u + "leaves/l2.png").add(u + "leaves/l3.png").add(u + "2/0.png").add(u + "2/1.png").add(u + "2/2.png").add(u + "2/3.png").add(u + "2/4.png").add(u + "2/5.png").add(u + "2/6.png").add(u + "2/7.png").add(u + "2/7-1.png").add(u + "2/8.png").add(u + "2/9.png").add(u + "2/9-1.png").add(u + "2/9-2.png").add(u + "2/9-3.png").add(u + "2/9-4.png").add(u + "2/9-5.png").add(u + "2/9-6.png").add(u + "2/9-7.png").add(u + "2/9-8.png").add(u + "2/9-9.png").add(u + "clock/h.png").add(u + "clock/m.png").add(u + "clock/s.png").add(u + "3/0.png").add(u + "3/1.png").add(u + "3/2.png").add(u + "3/3.png").add(u + "3/3-1.png").add(u + "3/4.png").add(u + "3/5.png").add(u + "3/6.png").add(u + "3/7.png").add(u + "3/7-1.png").add(u + "3/8.png").add(u + "3/9.png").add(u + "3/10.png").add(u + "4/0.png").add(u + "4/1.png").add(u + "4/2.png").add(u + "4/3.png").add(u + "4/4.png").add(u + "4/4-1.png").add(u + "4/5.png").add(u + "4/6.png").add(u + "5/0.png").add(u + "5/1.png").add(u + "5/2.png").add(u + "5/3.png").add(u + "5/4.png").add(u + "5/5.png").add(u + "5/5-1.png").add(u + "5/6.png").add(u + "5/7.png").add(u + "5/8.png").add(u + "5/9.png").add(u + "5/10.png").add(u + "5/10-1.png").add(u + "5/11.png").add(u + "5/12.png").add(u + "6/0.png").add(u + "6/1.png").add(u + "6/2.png").add(u + "6/3.png").add(u + "6/4.png").add(u + "6/5.png").add(u + "6/6.png").add(u + "6/7.png").add(u + "6/8.png").add(u + "6/9.png").add(u + "6/10.png").add(u + "6/11.png").add(u + "6/12.png").add(u + "6/13.png").add(u + "6/14.png").add(u + "6/15.png").add(u + "6/16.png").add(u + "6/17.png").add(u + "6/18.png").add(u + "6/19.png").add(u + "6/20.png").add(u + "6/20-1.png").add(u + "6/21.png").add(u + "6/21-1.png").add(u + "6/22.png").add(u + "7/0.png").add(u + "7/1.png").add(u + "7/2.png").add(u + "7/3.png").add(u + "7/4.png").add(u + "7/4-1.png").add(u + "7/5.png").add(u + "7/6.png").add(u + "7/7.png").add(u + "7/7-1.png").add(u + "7/8.png").add(u + "7/9.jpg").add(u + "7/10.png").add(u + "7/11.png").add(u + "bike/wheel1.png").add(u + "bike/wheel2.png").add(u + "bike/leg1.png").add(u + "bike/leg2.png").add(u + "bike/inner.png").add(u + "bike/outer.png").add(u + "bike/bg.png").add(u + "bike/text.png").on("progress", t).load(i);
      var E, X, W, z, B, L, R, F, j, H, J, q, N, O, Q = 0,
         Y = 0,
         G = !0,
         K = !1,
         U = isplayedSkateboard = isplayedWind = isplayedShoot = isplayedDoor = isplayedCar = isplayedBus = isplayedCat = isplayedWhistle = isplayedPoliceDog = isplayedStick = isplayedPeople = isplayedPhone = !1,
         V = function(a, n, t) {
            if (E.position.x = -a, E.position.y = -n, n > Q ? G = !0 : n < Q && (G = !1), n == Q && (G = G), Y = G ? 0 : Math.PI, n < 3900) {
               for (var i = 0; i < X.children.length; i++) {
                  var d = X.children[i];
                  if (d.data.speed) {
                     var p = n - d.data.position.y;
                     d.data.speed.x && (d.position.x = d.data.position.x + d.data.speed.x * p), d.data.speed.y && (d.position.y = d.data.position.y + d.data.speed.y * p)
                  }
                  d.data.animate && n > d.data.startLine && !d.playing && !d.data.isPlayedMusic ? (d.data.isPlayedMusic = !0, d.play(), d.data.audio && d.data.audio.play(), d.data.playTime && !
                  function(e) {
                     setTimeout(function() {
                        e.gotoAndStop(0)
                     }, e.data.playTime)
                  }(d)) : d.data.animate && n < d.data.initLine && (d.data.isPlayedMusic = !1)
               }
               if (n < 2600) {
                  if (n < 1280) {
                     var o = Math.sqrt(256e4 - n * n) / 2,
                        l = Math.asin(n / 1600) + Y;
                     W.position.set(o + 65, 200 + 1.2 * n), W.rotation = l
                  } else W.position.set(1280 - n + 480 + 65, 200 + 1.2 * n), W.rotation = Math.asin(.8) + Y;
                  n > 1e3 && n < 1280 ? K || (K = !0, e("#wings")[0].play()) : K = !1, ee && r(), U = !1
               } else if (n > 2600) if (n < 2800) W.position.set(n - 2600, n + 600), W.rotation = -Math.PI / 4 + Y, U || (U = !0, e("#crow_sound")[0].play());
               else if (n < 3160) {
                  U = !1;
                  var g = 1600 - (n - 2800),
                     o = Math.sqrt(256e4 - g * g) / 9,
                     l = Math.acos(g / 1600) + Y;
                  W.position.set(200 + o, n + n - 2800 + 600), W.rotation = -Math.PI / 4 + l
               } else U = !1, W.position.set(306, 4120), ee || (e("#fly_into_tree")[0].play(), s())
            }
            if (Q = n, n >= 3900 && n < 9e3) {
               for (var i = 0; i < L.children.length; i++) {
                  var d = L.children[i];
                  if (d.data.speed) {
                     var p = n - d.data.position.y;
                     if (d.data.speed.x) {
                        var y = 0;
                        d.data.translate && (y = d.data.translate.x), d.position.x = d.data.position.x + d.data.speed.x * p + y
                     }
                     if (d.data.speed.y) {
                        var u = 0;
                        d.data.translate && (u = d.data.translate.y), d.position.y = d.data.position.y + d.data.speed.y * p + u
                     }
                     0 == i && clock.position.set(326, 5273 + d.data.speed.y * p)
                  }
                  if (d.data.animate && 9 == i && (n > 6650 && n <= 6750 ? (d.gotoAndStop(1), R.position.set(360, 7260), F.position.set(360, 7260)) : n > 6750 && n < 7200 ? (d.gotoAndStop(0), R.visible = !0, F.visible = !1, R.position.set(d.position.x + 105, 7120)) : n <= 6650 && (d.gotoAndStop(0), R.position.set(360, 7260), F.position.set(360, 7260), R.visible = !1, F.visible = !0)), d.data.animate && 11 == i) {
                     var p = n - d.data.position.y;
                     d.gotoAndStop(parseInt(p / 15))
                  }
               }
               if (n > 3939 && n < 5370 ? e("#clock")[0].play() : e("#clock")[0].pause(), n > 5300 && n < 5600 ? isplayedWind || (isplayedWind = !0, e("#wind")[0].play()) : isplayedWind = !1, n > 6300 && n < 7200 ? isplayedSkateboard || (isplayedSkateboard = !0, e("#skateboard")[0].play()) : isplayedSkateboard = !1, n > 7700 && n < 8800 ? e("#step")[0].paused && e("#step")[0].play() : e("#step")[0].pause(), n > 5200 && n < 6100) {
                  var g = n - 5200;
                  R.position.set(802 - g, 5600 + 1.2 * g), F.position.set(802 - g, 5600 + 1.2 * g), R.visible = G, F.visible = !G
               } else if (n >= 6100 && n < 6500) {
                  var g = n - 6200;
                  R.position.set(1.2 * g, 6900 + 1.2 * g), F.position.set(1.2 * g, 6900 + 1.2 * g), R.visible = !G, F.visible = G
               }
            }
            if (n >= 7800 && n < 10900) for (var i = 0; i < H.children.length; i++) {
               var d = H.children[i];
               if (d.data.speed) {
                  var p = n - d.data.position.y;
                  if (d.data.speed.x) {
                     var y = 0;
                     d.data.translate && (y = d.data.translate.x), d.position.x = d.data.position.x + d.data.speed.x * p + y
                  }
                  if (d.data.speed.y) {
                     var u = 0;
                     d.data.translate && (u = d.data.translate.y), d.position.y = d.data.position.y + d.data.speed.y * p + u
                  }
                  3 == i && (n > 9200 && n < 9800 ? (d.visible = !0, d.gotoAndStop(1), d.position.x = d.data.position.x + (n - 9200) / 15) : n < 9200 ? (d.visible = !0, d.gotoAndStop(0)) : n > 9800 && (d.visible = !1)), 8 == i && (n <= 9800 && (d.visible = !1), n > 9800 && (d.visible = !0)), 9 == i && (n <= 9800 && d.gotoAndStop(0), n > 9800 && d.gotoAndStop(1))
               }
               n > 9e3 && n < 9200 ? isplayedShoot || (isplayedShoot = !0, e("#shoot")[0].play()) : isplayedShoot = !1, n > 9800 && n < 1e4 ? isplayedDoor || (isplayedDoor = !0, e("#door")[0].play()) : isplayedDoor = !1, n > 10600 && n < 11400 ? isplayedCar || (isplayedCar = !0, e("#car")[0].play()) : isplayedCar = !1
            }
            if (n >= 9300 && n <= 13300) for (var i = 0; i < J.children.length; i++) {
               var d = J.children[i];
               if (d.data.speed) {
                  var p = n - d.data.position.y;
                  if (d.data.speed.x) {
                     var y = 0;
                     d.data.translate && (y = d.data.translate.x), d.position.x = d.data.position.x + d.data.speed.x * p + y
                  }
                  if (d.data.speed.y) {
                     var u = 0;
                     d.data.translate && (u = d.data.translate.y), d.position.y = d.data.position.y + d.data.speed.y * p + u
                  }
                  4 == i && (n > 11600 && n < 12e3 ? d.play() : d.gotoAndStop(0))
               }
               n > 11600 && n < 12e3 ? isplayedCry || (isplayedCry = !0, e("#cry")[0].play()) : isplayedCry = !1, n > 12e3 && n < 13e3 ? isplayedBus || (isplayedBus = !0, e("#bus")[0].play()) : isplayedBus = !1
            }
            if (n >= 12300 && n <= 21330) for (var i = 0; i < q.children.length; i++) {
               var d = q.children[i];
               if (d.data.speed) {
                  var p = n - q.position.y - d.data.position.y;
                  if (d.data.speed.x) {
                     var y = 0;
                     d.data.translate && (y = d.data.translate.x), d.position.x = d.data.position.x + d.data.speed.x * p + y
                  }
                  if (d.data.speed.y) {
                     var u = 0;
                     d.data.translate && (u = d.data.translate.y), d.position.y = d.data.position.y + d.data.speed.y * p + u
                  }
                  3 == i && (d.rotation = -p / 50), 7 == i && (n > 13700 && n <= 13800 ? d.gotoAndStop(1) : d.gotoAndStop(0)), 6 == i && (n > 13700 && n <= 13840 ? (d.position.y = 2 * (n - 13700) + 588, d.alpha = 1) : n > 13840 ? (d.position.y = 2 * (n - 13700) + 588, d.alpha = (100 - (n - 13840)) / 100) : n < 13700 && (d.position.y = 588, d.alpha = 1)), 8 == i && n >= 15550 && d.position.set(208.66, 2576), 11 == i && (n > 17350 ? d.gotoAndStop(1) : d.gotoAndStop(0))
               }
               n > 13e3 && n < 14e3 ? isplayedCat || (isplayedCat = !0, e("#cat")[0].play()) : isplayedCat = !1, n > 15275 && n < 16300 ? isplayedWhistle || (isplayedWhistle = !0, e("#whistle")[0].play()) : (e("#whistle")[0].pause(), isplayedWhistle = !1), n > 17e3 && n < 18e3 ? isplayedPhone || (isplayedPhone = !0, e("#phone")[0].play()) : isplayedPhone = !1
            }
            if (n >= 19e3 && n <= 24900) for (var i = 0; i < N.children.length; i++) {
               var d = N.children[i];
               if (d.data.speed) {
                  var p = n - N.position.y - d.data.position.y;
                  if (d.data.speed.x) {
                     var y = 0;
                     d.data.translate && (y = d.data.translate.x), d.position.x = d.data.position.x + d.data.speed.x * p + y
                  }
                  if (d.data.speed.y) {
                     var u = 0;
                     d.data.translate && (u = d.data.translate.y), d.position.y = d.data.position.y + d.data.speed.y * p + u
                  }
               }
               20 == i && (n > 23400 ? d.play() : d.gotoAndStop(0)), 21 == i && (n > 23800 ? d.play() : d.gotoAndStop(0)), n > 23400 && n < 24e3 ? isplayedPoliceDog || (isplayedPoliceDog = !0, e("#police_dog")[0].play(), e("#go")[0].play()) : isplayedPoliceDog = !1
            }
            if (n >= 23400 && n < 29060 - x) for (var i = 0; i < O.children.length; i++) {
               var d = O.children[i];
               if (d.data.speed) {
                  var p = n - O.position.y - d.data.position.y;
                  if (d.data.speed.x) {
                     var y = 0;
                     d.data.translate && (y = d.data.translate.x), d.position.x = d.data.position.x + d.data.speed.x * p + y
                  }
                  if (d.data.speed.y) {
                     var u = 0;
                     d.data.translate && (u = d.data.translate.y), d.position.y = d.data.position.y + d.data.speed.y * p + u
                  }
                  2 == i && (n >= 25400 ? (d.children[2].visible = !0, d.children[1].visible = !1, d.position.set(d.data.position.x + d.data.speed.x * -339 + y, d.data.position.y + d.data.speed.y * -339 + u)) : (d.children[1].visible = !0, d.children[2].visible = !1, d.children[4].rotation = p / 50, d.children[5].rotation = p / 50)), 5 == i && (n >= 26500 ? d.gotoAndStop(1) : d.gotoAndStop(0)), 8 == i && (n >= 26300 ? d.play() : d.gotoAndStop(0))
               }
               n > 26500 && n < 27500 ? isplayedStick || (isplayedStick = !0, e("#stick")[0].play()) : isplayedStick = !1
            }
            if (n > 26700 && n < 29060 - x + 100 ? isplayedPeople || (isplayedPeople = !0, e("#people")[0].play()) : (isplayedPeople = !1, e("#people")[0].pause()), n > 29060 - x) {
               var p = n - (29060 - x);
               E.position.y = -n + p, O.children[11].position.y = 4200 - p, O.children[12].position.y = 4324 - p
            }
         },
         Z = new Scroller(V, {
            zooming: !1,
            animating: !0,
            bouncing: !1,
            animationDuration: 1e3
         }),
         $ = !1,
         ee = !1
   }(jQuery)
}();