webpackJsonp([0], [, , , , , , , , , , , , , , , , ,
function(e, t, i) {
   "use strict";
   function n(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   }
   Object.defineProperty(t, "__esModule", {
      value: !0
   }),
   i(72);
   var s = i(65),
   a = n(s),
   r = i(26),
   o = n(r),
   c = i(41),
   h = (n(c), i(73)),
   u = (n(h), {});
   u.delay = function(e) {
      return new Promise(function(t) {
         setTimeout(t, e)
      })
   },
   u.remove = function(e, t) {
      if (e && 0 != e.length) {
         var i = e.indexOf(t);
         i < 0 || e.splice(i, 1)
      }
   },
   u.offset = function(e) {
      if (!e.parent) return {
         x: 0,
         y: 0
      };
      var t = u.offset(e.parent);
      return {
         x: e.x + t.x,
         y: e.y + t.y
      }
   },
   u.offsetY = function(e) {
      return e.parent && e.y ? e.y + u.offsetY(e.parent) : 0
   },
   u.offsetX = function(e) {
      return e.parent && e.x ? e.x + u.offsetX(e.parent) : 0
   },
   u.adjustTime = function(e) {
      return 60 * e / Math.max(game.ticker.getMeasuredFPS(), 40)
   },
   u.getActionNode = function(e) {
      return e ? e.getAttribute && e.getAttribute("data-action") ? e: u.getActionNode(e.parentNode) : null
   },
   u.biLogPage = function(e) { (0, a.
   default)("page", {
         type: "webviewactivity",
         url: location.href,
         target: "m2_happiness",
         page: e,
         is_webview: o.
      default.isMobile() && o.
      default.isInNEMapp() ? 0 : 1,
         osver: o.
      default.getOSVersionStr()
      })
   },
   u.biLogClick = function(e, t) { (0, a.
   default)("click", {
         resource: "webviewactivity",
         url: location.href,
         activity: "m2_happiness",
         page: e,
         target: t,
         is_webview: o.
      default.isMobile() && o.
      default.isInNEMapp() ? 0 : 1,
         osver: o.
      default.getOSVersionStr()
      })
   },
   u.getAppShareType = function() {
      var e = {
         qqfriend: "qq",
         qqtimeline: "qzone",
         wxfriend: "wxsession",
         wxtimeline: "wxtimeline",
         yxfriend: "yxsession",
         yxtimeline: "yxtimeline",
         wb: "sina",
         db: "douban"
      };
      return function(t) {
         return e[t] || t
      }
   } (),
   u.stopAppMusic = function() {
      o.
   default.isInNEMapp() && (location.href = "orpheus://stopplay")
   },
   u.isWeChat = function() {
      return /micromessenger/i.test(navigator.userAgent)
   },
   u.getRandomShareLink = function() {
      return location.protocol + "//" + location.host + "/nact/happiness_" + Math.floor(50 * Math.random() + 1)
   },
   t.
default = u
},
function(e, t, i) {
   "use strict";
   Object.defineProperty(t, "__esModule", {
      value: !0
   });
   var n = Hilo.Class.create({
      Extends: Hilo.Bitmap,
      constructor: function() {
         var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
         e.width = e.width || 100,
         e.height = e.height || 150,
         e.image = game.asset.block,
         n.superclass.constructor.call(this, e)
      }
   });
   t.
default = n
},
, , ,
function(e, t, i) {
   "use strict";
   function n(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   }
   Object.defineProperty(t, "__esModule", {
      value: !0
   }),
   i(95);
   var s = i(17),
   a = n(s),
   r = i(54),
   o = n(r),
   c = Hilo.Class.create({
      Extends: Hilo.Container,
      constructor: function(e) {
         c.superclass.constructor.apply(this, arguments),
         this.width = e.width || 750,
         this.height = e.height || 1334,
         this.initScenePos(e.startX, e.startY),
         this.init(e),
         setTimeout(this.shortcut.bind(this), 200)
      },
      shortcut: function() {},
      onRecoverCurrent: function(e, t) {},
      onRecoverNext: function(e, t) {
         this.x = e.x + e.width
      },
      init: function(e) {
         throw new Error("瀛愮被瀹炵幇锛屽垱寤轰竴浜涘満鏅腑闇€瑕佺殑瀵硅薄")
      },
      dispose: function() {
         this.clearCollisionSet()
      },
      initScenePos: function(e, t) {
         this.x = e || 0,
         this.y = t || 0
      },
      clearCollisionSet: function() {
         var e = this.children;
         game.collisionSet = game.collisionSet.filter(function(t) {
            return - 1 === e.indexOf(t)
         })
      },
      onUpdate: function(e) {
         var t = game.man;
         if (this.loopBGM(), t.isDead) return ! 0;
         this.updateJumpPoint(),
         (game.forceMovingX || t.isMovingX && !game.isDisabled) && t.x >= t.MIDDLE_SCENE && !game.isFreeWalk && (this.x -= t.stepLength)
      },
      updateJumpPoint: function() {},
      isOnBlock: function(e) {
         var t = game.man,
         i = a.
      default.offset(e);
         return t.y + t.height - t.manBottom.height == i.y && t.x >= i.x - t.width && t.x <= i.x + e.width
      },
      calcBlockDistanceY: function(e) {
         var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
         return game.man.updateJumpPoint(this.x + e.x + e.width - game.man.x + t)
      },
      shift: function() {
         game.sceneSet[0] && game.sceneSet[0].id != this.id && game.shift()
      },
      checkAudio: function() {},
      loopBGM: function() {
         var e = o.
      default.bgm.isPlaying(),
         t = o.
      default.bgm.isPaused();
         e && !t || o.
      default.bgm.play()
      }
   });
   t.
default = c
},
, , ,
function(e, t, i) {
   "use strict";
   Object.defineProperty(t, "__esModule", {
      value: !0
   });
   var n = "",
   s = "";
   "undefined" != typeof window && (n = window.navigator.userAgent, s = window.document.cookie || "");
   var a = /ipad/gi,
   r = /iphone|ipod|ipad|ios/gi,
   o = /Android/gi,
   c = /windows\s+phone/gi,
   h = /IPadQQ/gi,
   u = /mobile|mobi|wap|simulator|iphone|android/gi,
   l = /SINA_ROBOT|SINA_WEIBO/gi,
   d = /Weibo|MicroMessenger|YDDict|youdao_dict|QQ(?!Browser)|RenRen|Douban|YiXin|TXMicroBlog|NewsApp/i,
   p = /QQBrowser/gi,
   f = /Android\s+([\d\.]+);/i,
   m = /Windows\s+Phone\s+([\d+\.]+);/i,
   g = /.*Windows\sNT\s(.*)\;/i,
   v = /OS\s+([\d+_]+)/i,
   y = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
      return "" == e ? 0 : R(e) ? 3 : S(e) ? 1 : M(e) ? 2 : 0
   },
   x = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
      switch (y(e)) {
      case 1:
         return "ios";
      case 2:
         return "android";
      case 3:
         return "wp";
      default:
         return "other"
      }
   },
   w = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n,
      t = O(e);
      return null != t ? t: null != (t = e.match(v)) ? t[1].replace(/_/g, ".") : (t = E(e), null != t ? t: "")
   },
   _ = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
      return "" == e ? 0 : R(e) ? P(e) ? 31 : 30 : S(e) ? C(e) ? 11 : 10 : M(e) ? 20 : 0
   },
   b = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
      switch (_(e)) {
      case 10:
         return "iphone";
      case 11:
         return "ipad";
      case 20:
         return "android";
      case 30:
         return "wp";
      case 31:
         return "uwp";
      default:
         return "other"
      }
   },
   k = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
      return C(e) ? "pad": "phone"
   },
   S = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
      if ("" == e) return ! 1;
      var t = e.match(r),
      i = e.match(c);
      return null != t && null == i
   },
   C = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
      return "" != e && null != e.match(a)
   },
   T = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n,
      t = e.match(v);
      return null != t ? parseInt(t[1].split("_")[0], 10) : -1
   },
   M = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
      if ("" == e) return ! 1;
      var t = e.match(o),
      i = e.match(c);
      return null != t && null == i
   },
   E = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n,
      t = e.match(f);
      return null != t ? t[1] : null
   },
   H = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
      return M(e) && /\bChrome\/\d/.test(e) && !/\bVersion\/\d/.test(e)
   },
   R = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
      return "" != e && null != e.match(c)
   },
   O = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n,
      t = e.match(m);
      return null != t ? t[1] : null
   },
   P = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
      if (R(e)) {
         var t = O(e);
         if (null != t) try {
            var i = parseFloat(t, 10);
            if (null != i && i >= 10) return ! 0
         } catch(e) {
            return ! 1
         }
      }
      return ! 1
   },
   A = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n,
      t = e.match(g);
      return null != t ? t[1] : null
   },
   F = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
      if ("" == e) return ! 1;
      var t = A(e);
      if (null != t) try {
         var i = parseFloat(t, 10);
         if (null != i && i >= 10) return ! 0
      } catch(e) {
         return ! 1
      }
      return ! 1
   },
   j = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
      return "" != e && null != e.match(u)
   },
   D = function() {
      return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n).indexOf("MSIE 6.0")
   },
   B = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
      return "" != e && null != e.matcher(l)
   },
   I = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
      if ("" == e) return ! 1;
      var t = z(e);
      return "QQ".toLowerCase() == t || "Weibo".toLowerCase() == t || "MicroMessenger".toLowerCase() == t
   },
   L = function(e) {
      return null != e.match(h)
   },
   z = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
      if ("" == e) return ! 1;
      var t = e.match(d),
      i = e.match(p);
      return null != t ? t[0].toLowerCase() : null != i ? i[0].toLowerCase() : ""
   },
   q = {
      Weibo: "sina",
      MicroMessenger: "wx",
      YDDict: "youdaodict",
      youdao_dict: "youdaodict",
      YiXin: "yx",
      TXMicroBlog: "tencent",
      NewsApp: "neteasenews",
      QQ: "qq",
      RenRen: "renren",
      Douban: "douban"
   },
   N = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      t = "";
      for (var i in q) if (i.toLowerCase() == e) {
         t = q[i];
         break
      }
      return t
   },
   W = /appver/i,
   U = /NeteaseMusic\/([\d\.]+)?/i,
   X = function() {
      return null != n.match(U) || null != s.match(W)
   },
   V = /appver=([\d\.]+)?/i,
   Y = function() {
      var e = n.match(U) || s.match(V);
      return null != e ? e[1] : ""
   },
   G = function(e) {
      var t = e.userAgent,
      i = e.Cookie;
      n = t || "",
      s = i || ""
   },
   K = {
      EnvInit: G,
      getPlatform: y,
      getPlatform2Str: x,
      getOSVersionStr: w,
      getDevicePro: _,
      getDevicePro2Str: b,
      getDevice: k,
      isIos: S,
      isPad: C,
      getIosLargeVersion: T,
      isAndroid: M,
      isAndroidChrome: H,
      getAndroidVersion: E,
      isWP: R,
      getWPVersion: O,
      isWP10: P,
      getWinVersion: A,
      isWin10: F,
      isMobile: j,
      isIe6: D,
      isSinaRobot: B,
      isUnsupportedClient: I,
      isIpadQQ: L,
      getClient: z,
      isInNEMapp: X,
      getAppVersion: Y,
      fetchLogByClient: N
   };
   t.
default = K,
   e.exports = t.
default
},
function(e, t, i) {
   "use strict";
   function n(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   }
   function s(e, t) {
      if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
   }
   Object.defineProperty(t, "__esModule", {
      value: !0
   }),
   t.CanvasFront = void 0;
   var a = function() {
      function e(e, t) {
         for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
         }
      }
      return function(t, i, n) {
         return i && e(t.prototype, i),
         n && e(t, n),
         t
      }
   } ();
   i(72);
   var r = i(263),
   o = n(r),
   c = i(28),
   h = n(c),
   u = i(260),
   l = n(u),
   d = i(261),
   p = n(d),
   f = i(262),
   m = n(f),
   g = i(258),
   v = n(g),
   y = h.
default.width,
   x = h.
default.height,
   w = h.
default.dpr,
   _ = t.CanvasFront = function() {
      function e() {
         if (s(this, e), e.instance) return e.instance;
         e.instance = this,
         this.renderer = new THREE.WebGLRenderer({
            alpha: !0
         }),
         this.renderer.setPixelRatio(w),
         this.renderer.setSize(y, x),
         this.initCameras(),
         this.loadTextures(),
         $("#j-view-front").append(this.renderer.domElement)
      }
      return a(e, [{
         key: "el",
         value: function() {
            return this.renderer.domElement
         }
      },
      {
         key: "initCameras",
         value: function() {
            var e = new THREE.OrthographicCamera(y / -2, y / 2, x / 2, x / -2, 1, 1e3);
            e.position.set(0, 0, 400);
            var t = new THREE.PerspectiveCamera(50, y / x, 1, 1e4);
            t.position.set(0, 0, 50),
            this.cameras = {
               rain: e,
               water: t
            }
         }
      },
      {
         key: "loadTextures",
         value: function() {
            var e = this,
            t = {}; (0, o.
         default)([{
               name:
               "xianshi-1",
               url: i(190)
            },
            {
               name: "xianshi-2",
               url: i(190)
            },
            {
               name: "water-bg",
               url: i(651)
            },
            {
               name: "water-text",
               url: i(652)
            }]).then(function(i) {
               i.forEach(function(e) {
                  t[e.name] = e.texture
               }),
               e.textures = t
            })
         }
      },
      {
         key: "startRain",
         value: function() {
            this.rainScene = new l.
         default({
               renderer:
               this.renderer,
               textures: this.textures
            }),
            this.rainScene.animate()
         }
      },
      {
         key: "stopRain",
         value: function() {
            this.rainScene && this.rainScene.dispose()
         }
      },
      {
         key: "showWater",
         value: function() {
            var e = this;
            return new Promise(function(t) {
               e.waterScene = new m.
            default({
                  textures:
                  e.textures
               }),
               e.waterScene.animate(),
               setTimeout(t, 500)
            })
         }
      },
      {
         key: "touchWater",
         value: function(e, t) {
            this.waterScene.touch(e, t - x + h.
         default.waterHeight)
         }
      },
      {
         key: "autoWave",
         value: function() {
            this.waterScene.useAutoWave = !0
         }
      },
      {
         key: "hideWater",
         value: function() {
            this.waterScene && this.waterScene.dispose()
         }
      },
      {
         key: "startCollision",
         value: function() {
            this.rainScene = new p.
         default({
               renderer:
               this.renderer,
               textures: this.textures
            }),
            this.rainScene.animate()
         }
      },
      {
         key: "stopCollision",
         value: function() {
            this.rainScene && this.rainScene.dispose()
         }
      },
      {
         key: "showEnding",
         value: function() {
            this.endScene = new v.
         default({
               popularity:
               .8,
               freezedRollupSpeed: .015,
               speedMin: .05,
               maxTrailLength: .2
            })
         }
      }]),
      e
   } ();
   _.instance = null,
   t.
default = new _
},
function(e, t, i) {
   "use strict";
   Object.defineProperty(t, "__esModule", {
      value: !0
   });
   var n = {};
   n.width = window.innerWidth,
   n.height = window.innerHeight,
   n.dpr = 2,
   n.waterWidth = window.innerWidth,
   n.waterHeight = window.innerHeight - 175 * window.innerWidth / 375,
   t.
default = n
},
, , , , , , , , ,
function(e, t) {
   var i = e.exports = "undefined" != typeof window && window.Math == Math ? window: "undefined" != typeof self && self.Math == Math ? self: Function("return this")();
   "number" == typeof __g && (__g = i)
},
, ,
function(module, exports, __webpack_require__) { !
   function(e, t) {
      module.exports = t()
   } (0,
   function() {
      return function(e) {
         function t(n) {
            if (i[n]) return i[n].exports;
            var s = i[n] = {
               i: n,
               l: !1,
               exports: {}
            };
            return e[n].call(s.exports, s, s.exports, t),
            s.l = !0,
            s.exports
         }
         var i = {};
         return t.m = e,
         t.c = i,
         t.i = function(e) {
            return e
         },
         t.d = function(e, i, n) {
            t.o(e, i) || Object.defineProperty(e, i, {
               configurable: !1,
               enumerable: !0,
               get: n
            })
         },
         t.n = function(e) {
            var i = e && e.__esModule ?
            function() {
               return e.
            default
            }:
            function() {
               return e
            };
            return t.d(i, "a", i),
            i
         },
         t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
         },
         t.p = "",
         t(t.s = 8)
      } ([function(e, t, i) {
         function n(e, t) {
            for (var i in t) t.hasOwnProperty(i) && null == e[i] && (e[i] = t[i]);
            return e
         }
         function s(e) {
            var t = {};
            return e.split("&").forEach(function(e) {
               var i = e.split("=");
               if (i.length) {
                  var n = i.shift();
                  n && (t[decodeURIComponent(n)] = decodeURIComponent(i.join("=")))
               }
            }),
            t
         }
         function a(e) {
            var t = "";
            for (var i in e) void 0 !== e[i] && (t += encodeURIComponent(i) + "=" + encodeURIComponent(e[i]) + "&");
            return t.slice(0, -1)
         }
         function r(e) {
            if ("undefined" != typeof document) {
               var t = document.cookie,
               i = "\\b" + e + "=",
               n = t.search(i);
               if (n < 0) return "";
               n += i.length - 2;
               var s = t.indexOf(";", n);
               return s < 0 && (s = t.length),
               t.substring(n, s) || ""
            }
         }
         var o = i(3),
         c = o.asrsea,
         h = o.ecnonasr,
         u = i(4),
         l = u.emj2code,
         d = u.BASE_CODE;
         e.exports = {
            extend: n,
            obj2query: a,
            query2obj: s,
            getCookie: r,
            asrsea: c,
            ecnonasr: h,
            emj2code: l,
            BASE_CODE: d
         }
      },
      function(e, t, i) {
         function n(e, t) {
            t = t || {};
            var i = r({
               url: e,
               type: t.type || "json",
               method: t.method || "get",
               data: t.body || t.data,
               crossOrigin: !t.noCrossOrigin,
               withCredentials: void 0 === t.withCredentials || t.withCredentials
            },
            t);
            return ! 1 === t.async ? s(i) : new Promise(function(e, t) {
               i.error = function(e) {
                  t(e)
               },
               i.success = function(t) {
                  e({
                     json: Promise.resolve.bind(Promise, t)
                  })
               },
               s(i)
            })
         }
         var s = i(6),
         a = i(0),
         r = a.extend;
         e.exports = n
      },
      function(e, t) {
         var i = function(e, t) {
            var i = {},
            n = i.lib = {},
            s = function() {},
            a = n.Base = {
               extend: function(e) {
                  s.prototype = this;
                  var t = new s;
                  return e && t.mixIn(e),
                  t.hasOwnProperty("init") || (t.init = function() {
                     t.$super.init.apply(this, arguments)
                  }),
                  t.init.prototype = t,
                  t.$super = this,
                  t
               },
               create: function() {
                  var e = this.extend();
                  return e.init.apply(e, arguments),
                  e
               },
               init: function() {},
               mixIn: function(e) {
                  for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                  e.hasOwnProperty("toString") && (this.toString = e.toString)
               },
               clone: function() {
                  return this.init.prototype.extend(this)
               }
            },
            r = n.WordArray = a.extend({
               init: function(e, t) {
                  e = this.words = e || [],
                  this.sigBytes = void 0 != t ? t: 4 * e.length
               },
               toString: function(e) {
                  return (e || c).stringify(this)
               },
               concat: function(e) {
                  var t = this.words,
                  i = e.words,
                  n = this.sigBytes;
                  if (e = e.sigBytes, this.clamp(), n % 4) for (var s = 0; s < e; s++) t[n + s >>> 2] |= (i[s >>> 2] >>> 24 - s % 4 * 8 & 255) << 24 - (n + s) % 4 * 8;
                  else if (65535 < i.length) for (s = 0; s < e; s += 4) t[n + s >>> 2] = i[s >>> 2];
                  else t.push.apply(t, i);
                  return this.sigBytes += e,
                  this
               },
               clamp: function() {
                  var t = this.words,
                  i = this.sigBytes;
                  t[i >>> 2] &= 4294967295 << 32 - i % 4 * 8,
                  t.length = e.ceil(i / 4)
               },
               clone: function() {
                  var e = a.clone.call(this);
                  return e.words = this.words.slice(0),
                  e
               },
               random: function(t) {
                  for (var i = [], n = 0; n < t; n += 4) i.push(4294967296 * e.random() | 0);
                  return new r.init(i, t)
               }
            }),
            o = i.enc = {},
            c = o.Hex = {
               stringify: function(e) {
                  var t = e.words;
                  e = e.sigBytes;
                  for (var i = [], n = 0; n < e; n++) {
                     var s = t[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                     i.push((s >>> 4).toString(16)),
                     i.push((15 & s).toString(16))
                  }
                  return i.join("")
               },
               parse: function(e) {
                  for (var t = e.length,
                  i = [], n = 0; n < t; n += 2) i[n >>> 3] |= parseInt(e.substr(n, 2), 16) << 24 - n % 8 * 4;
                  return new r.init(i, t / 2)
               }
            },
            h = o.Latin1 = {
               stringify: function(e) {
                  var t = e.words;
                  e = e.sigBytes;
                  for (var i = [], n = 0; n < e; n++) i.push(String.fromCharCode(t[n >>> 2] >>> 24 - n % 4 * 8 & 255));
                  return i.join("")
               },
               parse: function(e) {
                  for (var t = e.length,
                  i = [], n = 0; n < t; n++) i[n >>> 2] |= (255 & e.charCodeAt(n)) << 24 - n % 4 * 8;
                  return new r.init(i, t)
               }
            },
            u = o.Utf8 = {
               stringify: function(e) {
                  try {
                     return decodeURIComponent(escape(h.stringify(e)))
                  } catch(e) {
                     throw Error("Malformed UTF-8 data")
                  }
               },
               parse: function(e) {
                  return h.parse(unescape(encodeURIComponent(e)))
               }
            },
            l = n.BufferedBlockAlgorithm = a.extend({
               reset: function() {
                  this._data = new r.init,
                  this._nDataBytes = 0
               },
               _append: function(e) {
                  "string" == typeof e && (e = u.parse(e)),
                  this._data.concat(e),
                  this._nDataBytes += e.sigBytes
               },
               _process: function(t) {
                  var i = this._data,
                  n = i.words,
                  s = i.sigBytes,
                  a = this.blockSize,
                  o = s / (4 * a),
                  o = t ? e.ceil(o) : e.max((0 | o) - this._minBufferSize, 0);
                  if (t = o * a, s = e.min(4 * t, s), t) {
                     for (var c = 0; c < t; c += a) this._doProcessBlock(n, c);
                     c = n.splice(0, t),
                     i.sigBytes -= s
                  }
                  return new r.init(c, s)
               },
               clone: function() {
                  var e = a.clone.call(this);
                  return e._data = this._data.clone(),
                  e
               },
               _minBufferSize: 0
            });
            n.Hasher = l.extend({
               cfg: a.extend(),
               init: function(e) {
                  this.cfg = this.cfg.extend(e),
                  this.reset()
               },
               reset: function() {
                  l.reset.call(this),
                  this._doReset()
               },
               update: function(e) {
                  return this._append(e),
                  this._process(),
                  this
               },
               finalize: function(e) {
                  return e && this._append(e),
                  this._doFinalize()
               },
               blockSize: 16,
               _createHelper: function(e) {
                  return function(t, i) {
                     return new e.init(i).finalize(t)
                  }
               },
               _createHmacHelper: function(e) {
                  return function(t, i) {
                     return new d.HMAC.init(e, i).finalize(t)
                  }
               }
            });
            var d = i.algo = {};
            return i
         } (Math); !
         function() {
            var e = i,
            t = e.lib.WordArray;
            e.enc.Base64 = {
               stringify: function(e) {
                  var t = e.words,
                  i = e.sigBytes,
                  n = this._map;
                  e.clamp(),
                  e = [];
                  for (var s = 0; s < i; s += 3) for (var a = (t[s >>> 2] >>> 24 - s % 4 * 8 & 255) << 16 | (t[s + 1 >>> 2] >>> 24 - (s + 1) % 4 * 8 & 255) << 8 | t[s + 2 >>> 2] >>> 24 - (s + 2) % 4 * 8 & 255, r = 0; 4 > r && s + .75 * r < i; r++) e.push(n.charAt(a >>> 6 * (3 - r) & 63));
                  if (t = n.charAt(64)) for (; e.length % 4;) e.push(t);
                  return e.join("")
               },
               parse: function(e) {
                  var i = e.length,
                  n = this._map,
                  s = n.charAt(64);
                  s && -1 != (s = e.indexOf(s)) && (i = s);
                  for (var s = [], a = 0, r = 0; r < i; r++) if (r % 4) {
                     var o = n.indexOf(e.charAt(r - 1)) << r % 4 * 2,
                     c = n.indexOf(e.charAt(r)) >>> 6 - r % 4 * 2;
                     s[a >>> 2] |= (o | c) << 24 - a % 4 * 8,
                     a++
                  }
                  return t.create(s, a)
               },
               _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            }
         } (),
         function(e) {
            function t(e, t, i, n, s, a, r) {
               return ((e = e + (t & i | ~t & n) + s + r) << a | e >>> 32 - a) + t
            }
            function n(e, t, i, n, s, a, r) {
               return ((e = e + (t & n | i & ~n) + s + r) << a | e >>> 32 - a) + t
            }
            function s(e, t, i, n, s, a, r) {
               return ((e = e + (t ^ i ^ n) + s + r) << a | e >>> 32 - a) + t
            }
            function a(e, t, i, n, s, a, r) {
               return ((e = e + (i ^ (t | ~n)) + s + r) << a | e >>> 32 - a) + t
            }
            for (var r = i,
            o = r.lib,
            c = o.WordArray,
            h = o.Hasher,
            o = r.algo,
            u = [], l = 0; 64 > l; l++) u[l] = 4294967296 * e.abs(e.sin(l + 1)) | 0;
            o = o.MD5 = h.extend({
               _doReset: function() {
                  this._hash = new c.init([1732584193, 4023233417, 2562383102, 271733878])
               },
               _doProcessBlock: function(e, i) {
                  for (var r = 0; 16 > r; r++) {
                     var o = i + r,
                     c = e[o];
                     e[o] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8)
                  }
                  var r = this._hash.words,
                  o = e[i + 0],
                  c = e[i + 1],
                  h = e[i + 2],
                  l = e[i + 3],
                  d = e[i + 4],
                  p = e[i + 5],
                  f = e[i + 6],
                  m = e[i + 7],
                  g = e[i + 8],
                  v = e[i + 9],
                  y = e[i + 10],
                  x = e[i + 11],
                  w = e[i + 12],
                  _ = e[i + 13],
                  b = e[i + 14],
                  k = e[i + 15],
                  S = r[0],
                  C = r[1],
                  T = r[2],
                  M = r[3],
                  S = t(S, C, T, M, o, 7, u[0]),
                  M = t(M, S, C, T, c, 12, u[1]),
                  T = t(T, M, S, C, h, 17, u[2]),
                  C = t(C, T, M, S, l, 22, u[3]),
                  S = t(S, C, T, M, d, 7, u[4]),
                  M = t(M, S, C, T, p, 12, u[5]),
                  T = t(T, M, S, C, f, 17, u[6]),
                  C = t(C, T, M, S, m, 22, u[7]),
                  S = t(S, C, T, M, g, 7, u[8]),
                  M = t(M, S, C, T, v, 12, u[9]),
                  T = t(T, M, S, C, y, 17, u[10]),
                  C = t(C, T, M, S, x, 22, u[11]),
                  S = t(S, C, T, M, w, 7, u[12]),
                  M = t(M, S, C, T, _, 12, u[13]),
                  T = t(T, M, S, C, b, 17, u[14]),
                  C = t(C, T, M, S, k, 22, u[15]),
                  S = n(S, C, T, M, c, 5, u[16]),
                  M = n(M, S, C, T, f, 9, u[17]),
                  T = n(T, M, S, C, x, 14, u[18]),
                  C = n(C, T, M, S, o, 20, u[19]),
                  S = n(S, C, T, M, p, 5, u[20]),
                  M = n(M, S, C, T, y, 9, u[21]),
                  T = n(T, M, S, C, k, 14, u[22]),
                  C = n(C, T, M, S, d, 20, u[23]),
                  S = n(S, C, T, M, v, 5, u[24]),
                  M = n(M, S, C, T, b, 9, u[25]),
                  T = n(T, M, S, C, l, 14, u[26]),
                  C = n(C, T, M, S, g, 20, u[27]),
                  S = n(S, C, T, M, _, 5, u[28]),
                  M = n(M, S, C, T, h, 9, u[29]),
                  T = n(T, M, S, C, m, 14, u[30]),
                  C = n(C, T, M, S, w, 20, u[31]),
                  S = s(S, C, T, M, p, 4, u[32]),
                  M = s(M, S, C, T, g, 11, u[33]),
                  T = s(T, M, S, C, x, 16, u[34]),
                  C = s(C, T, M, S, b, 23, u[35]),
                  S = s(S, C, T, M, c, 4, u[36]),
                  M = s(M, S, C, T, d, 11, u[37]),
                  T = s(T, M, S, C, m, 16, u[38]),
                  C = s(C, T, M, S, y, 23, u[39]),
                  S = s(S, C, T, M, _, 4, u[40]),
                  M = s(M, S, C, T, o, 11, u[41]),
                  T = s(T, M, S, C, l, 16, u[42]),
                  C = s(C, T, M, S, f, 23, u[43]),
                  S = s(S, C, T, M, v, 4, u[44]),
                  M = s(M, S, C, T, w, 11, u[45]),
                  T = s(T, M, S, C, k, 16, u[46]),
                  C = s(C, T, M, S, h, 23, u[47]),
                  S = a(S, C, T, M, o, 6, u[48]),
                  M = a(M, S, C, T, m, 10, u[49]),
                  T = a(T, M, S, C, b, 15, u[50]),
                  C = a(C, T, M, S, p, 21, u[51]),
                  S = a(S, C, T, M, w, 6, u[52]),
                  M = a(M, S, C, T, l, 10, u[53]),
                  T = a(T, M, S, C, y, 15, u[54]),
                  C = a(C, T, M, S, c, 21, u[55]),
                  S = a(S, C, T, M, g, 6, u[56]),
                  M = a(M, S, C, T, k, 10, u[57]),
                  T = a(T, M, S, C, f, 15, u[58]),
                  C = a(C, T, M, S, _, 21, u[59]),
                  S = a(S, C, T, M, d, 6, u[60]),
                  M = a(M, S, C, T, x, 10, u[61]),
                  T = a(T, M, S, C, h, 15, u[62]),
                  C = a(C, T, M, S, v, 21, u[63]);
                  r[0] = r[0] + S | 0,
                  r[1] = r[1] + C | 0,
                  r[2] = r[2] + T | 0,
                  r[3] = r[3] + M | 0
               },
               _doFinalize: function() {
                  var t = this._data,
                  i = t.words,
                  n = 8 * this._nDataBytes,
                  s = 8 * t.sigBytes;
                  i[s >>> 5] |= 128 << 24 - s % 32;
                  var a = e.floor(n / 4294967296);
                  for (i[15 + (s + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), i[14 + (s + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), t.sigBytes = 4 * (i.length + 1), this._process(), t = this._hash, i = t.words, n = 0; 4 > n; n++) s = i[n],
                  i[n] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8);
                  return t
               },
               clone: function() {
                  var e = h.clone.call(this);
                  return e._hash = this._hash.clone(),
                  e
               }
            }),
            r.MD5 = h._createHelper(o),
            r.HmacMD5 = h._createHmacHelper(o)
         } (Math),
         function() {
            var e = i,
            t = e.lib,
            n = t.Base,
            s = t.WordArray,
            t = e.algo,
            a = t.EvpKDF = n.extend({
               cfg: n.extend({
                  keySize: 4,
                  hasher: t.MD5,
                  iterations: 1
               }),
               init: function(e) {
                  this.cfg = this.cfg.extend(e)
               },
               compute: function(e, t) {
                  for (var i = this.cfg,
                  n = i.hasher.create(), a = s.create(), r = a.words, o = i.keySize, i = i.iterations; r.length < o;) {
                     c && n.update(c);
                     var c = n.update(e).finalize(t);
                     n.reset();
                     for (var h = 1; h < i; h++) c = n.finalize(c),
                     n.reset();
                     a.concat(c)
                  }
                  return a.sigBytes = 4 * o,
                  a
               }
            });
            e.EvpKDF = function(e, t, i) {
               return a.create(i).compute(e, t)
            }
         } (),
         i.lib.Cipher ||
         function(e) {
            var t = i,
            n = t.lib,
            s = n.Base,
            a = n.WordArray,
            r = n.BufferedBlockAlgorithm,
            o = t.enc.Base64,
            c = t.algo.EvpKDF,
            h = n.Cipher = r.extend({
               cfg: s.extend(),
               createEncryptor: function(e, t) {
                  return this.create(this._ENC_XFORM_MODE, e, t)
               },
               createDecryptor: function(e, t) {
                  return this.create(this._DEC_XFORM_MODE, e, t)
               },
               init: function(e, t, i) {
                  this.cfg = this.cfg.extend(i),
                  this._xformMode = e,
                  this._key = t,
                  this.reset()
               },
               reset: function() {
                  r.reset.call(this),
                  this._doReset()
               },
               process: function(e) {
                  return this._append(e),
                  this._process()
               },
               finalize: function(e) {
                  return e && this._append(e),
                  this._doFinalize()
               },
               keySize: 4,
               ivSize: 4,
               _ENC_XFORM_MODE: 1,
               _DEC_XFORM_MODE: 2,
               _createHelper: function(e) {
                  return {
                     encrypt: function(t, i, n) {
                        return ("string" == typeof i ? m: f).encrypt(e, t, i, n)
                     },
                     decrypt: function(t, i, n) {
                        return ("string" == typeof i ? m: f).decrypt(e, t, i, n)
                     }
                  }
               }
            });
            n.StreamCipher = h.extend({
               _doFinalize: function() {
                  return this._process(!0)
               },
               blockSize: 1
            });
            var u = t.mode = {},
            l = function(e, t, i) {
               var n = this._iv;
               n ? this._iv = void 0 : n = this._prevBlock;
               for (var s = 0; s < i; s++) e[t + s] ^= n[s]
            },
            d = (n.BlockCipherMode = s.extend({
               createEncryptor: function(e, t) {
                  return this.Encryptor.create(e, t)
               },
               createDecryptor: function(e, t) {
                  return this.Decryptor.create(e, t)
               },
               init: function(e, t) {
                  this._cipher = e,
                  this._iv = t
               }
            })).extend();
            d.Encryptor = d.extend({
               processBlock: function(e, t) {
                  var i = this._cipher,
                  n = i.blockSize;
                  l.call(this, e, t, n),
                  i.encryptBlock(e, t),
                  this._prevBlock = e.slice(t, t + n)
               }
            }),
            d.Decryptor = d.extend({
               processBlock: function(e, t) {
                  var i = this._cipher,
                  n = i.blockSize,
                  s = e.slice(t, t + n);
                  i.decryptBlock(e, t),
                  l.call(this, e, t, n),
                  this._prevBlock = s
               }
            }),
            u = u.CBC = d,
            d = (t.pad = {}).Pkcs7 = {
               pad: function(e, t) {
                  for (var i = 4 * t,
                  i = i - e.sigBytes % i,
                  n = i << 24 | i << 16 | i << 8 | i,
                  s = [], r = 0; r < i; r += 4) s.push(n);
                  i = a.create(s, i),
                  e.concat(i)
               },
               unpad: function(e) {
                  e.sigBytes -= 255 & e.words[e.sigBytes - 1 >>> 2]
               }
            },
            n.BlockCipher = h.extend({
               cfg: h.cfg.extend({
                  mode: u,
                  padding: d
               }),
               reset: function() {
                  h.reset.call(this);
                  var e = this.cfg,
                  t = e.iv,
                  e = e.mode;
                  if (this._xformMode == this._ENC_XFORM_MODE) var i = e.createEncryptor;
                  else i = e.createDecryptor,
                  this._minBufferSize = 1;
                  this._mode = i.call(e, this, t && t.words)
               },
               _doProcessBlock: function(e, t) {
                  this._mode.processBlock(e, t)
               },
               _doFinalize: function() {
                  var e = this.cfg.padding;
                  if (this._xformMode == this._ENC_XFORM_MODE) {
                     e.pad(this._data, this.blockSize);
                     var t = this._process(!0)
                  } else t = this._process(!0),
                  e.unpad(t);
                  return t
               },
               blockSize: 4
            });
            var p = n.CipherParams = s.extend({
               init: function(e) {
                  this.mixIn(e)
               },
               toString: function(e) {
                  return (e || this.formatter).stringify(this)
               }
            }),
            u = (t.format = {}).OpenSSL = {
               stringify: function(e) {
                  var t = e.ciphertext;
                  return e = e.salt,
                  (e ? a.create([1398893684, 1701076831]).concat(e).concat(t) : t).toString(o)
               },
               parse: function(e) {
                  e = o.parse(e);
                  var t = e.words;
                  if (1398893684 == t[0] && 1701076831 == t[1]) {
                     var i = a.create(t.slice(2, 4));
                     t.splice(0, 4),
                     e.sigBytes -= 16
                  }
                  return p.create({
                     ciphertext: e,
                     salt: i
                  })
               }
            },
            f = n.SerializableCipher = s.extend({
               cfg: s.extend({
                  format: u
               }),
               encrypt: function(e, t, i, n) {
                  n = this.cfg.extend(n);
                  var s = e.createEncryptor(i, n);
                  return t = s.finalize(t),
                  s = s.cfg,
                  p.create({
                     ciphertext: t,
                     key: i,
                     iv: s.iv,
                     algorithm: e,
                     mode: s.mode,
                     padding: s.padding,
                     blockSize: e.blockSize,
                     formatter: n.format
                  })
               },
               decrypt: function(e, t, i, n) {
                  return n = this.cfg.extend(n),
                  t = this._parse(t, n.format),
                  e.createDecryptor(i, n).finalize(t.ciphertext)
               },
               _parse: function(e, t) {
                  return "string" == typeof e ? t.parse(e, this) : e
               }
            }),
            t = (t.kdf = {}).OpenSSL = {
               execute: function(e, t, i, n) {
                  return n || (n = a.random(8)),
                  e = c.create({
                     keySize: t + i
                  }).compute(e, n),
                  i = a.create(e.words.slice(t), 4 * i),
                  e.sigBytes = 4 * t,
                  p.create({
                     key: e,
                     iv: i,
                     salt: n
                  })
               }
            },
            m = n.PasswordBasedCipher = f.extend({
               cfg: f.cfg.extend({
                  kdf: t
               }),
               encrypt: function(e, t, i, n) {
                  return n = this.cfg.extend(n),
                  i = n.kdf.execute(i, e.keySize, e.ivSize),
                  n.iv = i.iv,
                  e = f.encrypt.call(this, e, t, i.key, n),
                  e.mixIn(i),
                  e
               },
               decrypt: function(e, t, i, n) {
                  return n = this.cfg.extend(n),
                  t = this._parse(t, n.format),
                  i = n.kdf.execute(i, e.keySize, e.ivSize, t.salt),
                  n.iv = i.iv,
                  f.decrypt.call(this, e, t, i.key, n)
               }
            })
         } (),
         function() {
            for (var e = i,
            t = e.lib.BlockCipher,
            n = e.algo,
            s = [], a = [], r = [], o = [], c = [], h = [], u = [], l = [], d = [], p = [], f = [], m = 0; 256 > m; m++) f[m] = 128 > m ? m << 1 : m << 1 ^ 283;
            for (var g = 0,
            v = 0,
            m = 0; 256 > m; m++) {
               var y = v ^ v << 1 ^ v << 2 ^ v << 3 ^ v << 4,
               y = y >>> 8 ^ 255 & y ^ 99;
               s[g] = y,
               a[y] = g;
               var x = f[g],
               w = f[x],
               _ = f[w],
               b = 257 * f[y] ^ 16843008 * y;
               r[g] = b << 24 | b >>> 8,
               o[g] = b << 16 | b >>> 16,
               c[g] = b << 8 | b >>> 24,
               h[g] = b,
               b = 16843009 * _ ^ 65537 * w ^ 257 * x ^ 16843008 * g,
               u[y] = b << 24 | b >>> 8,
               l[y] = b << 16 | b >>> 16,
               d[y] = b << 8 | b >>> 24,
               p[y] = b,
               g ? (g = x ^ f[f[f[_ ^ x]]], v ^= f[f[v]]) : g = v = 1
            }
            var k = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
            n = n.AES = t.extend({
               _doReset: function() {
                  for (var e = this._key,
                  t = e.words,
                  i = e.sigBytes / 4,
                  e = 4 * ((this._nRounds = i + 6) + 1), n = this._keySchedule = [], a = 0; a < e; a++) if (a < i) n[a] = t[a];
                  else {
                     var r = n[a - 1];
                     a % i ? 6 < i && 4 == a % i && (r = s[r >>> 24] << 24 | s[r >>> 16 & 255] << 16 | s[r >>> 8 & 255] << 8 | s[255 & r]) : (r = r << 8 | r >>> 24, r = s[r >>> 24] << 24 | s[r >>> 16 & 255] << 16 | s[r >>> 8 & 255] << 8 | s[255 & r], r ^= k[a / i | 0] << 24),
                     n[a] = n[a - i] ^ r
                  }
                  for (t = this._invKeySchedule = [], i = 0; i < e; i++) a = e - i,
                  r = i % 4 ? n[a] : n[a - 4],
                  t[i] = 4 > i || 4 >= a ? r: u[s[r >>> 24]] ^ l[s[r >>> 16 & 255]] ^ d[s[r >>> 8 & 255]] ^ p[s[255 & r]]
               },
               encryptBlock: function(e, t) {
                  this._doCryptBlock(e, t, this._keySchedule, r, o, c, h, s)
               },
               decryptBlock: function(e, t) {
                  var i = e[t + 1];
                  e[t + 1] = e[t + 3],
                  e[t + 3] = i,
                  this._doCryptBlock(e, t, this._invKeySchedule, u, l, d, p, a),
                  i = e[t + 1],
                  e[t + 1] = e[t + 3],
                  e[t + 3] = i
               },
               _doCryptBlock: function(e, t, i, n, s, a, r, o) {
                  for (var c = this._nRounds,
                  h = e[t] ^ i[0], u = e[t + 1] ^ i[1], l = e[t + 2] ^ i[2], d = e[t + 3] ^ i[3], p = 4, f = 1; f < c; f++) var m = n[h >>> 24] ^ s[u >>> 16 & 255] ^ a[l >>> 8 & 255] ^ r[255 & d] ^ i[p++],
                  g = n[u >>> 24] ^ s[l >>> 16 & 255] ^ a[d >>> 8 & 255] ^ r[255 & h] ^ i[p++],
                  v = n[l >>> 24] ^ s[d >>> 16 & 255] ^ a[h >>> 8 & 255] ^ r[255 & u] ^ i[p++],
                  d = n[d >>> 24] ^ s[h >>> 16 & 255] ^ a[u >>> 8 & 255] ^ r[255 & l] ^ i[p++],
                  h = m,
                  u = g,
                  l = v;
                  m = (o[h >>> 24] << 24 | o[u >>> 16 & 255] << 16 | o[l >>> 8 & 255] << 8 | o[255 & d]) ^ i[p++],
                  g = (o[u >>> 24] << 24 | o[l >>> 16 & 255] << 16 | o[d >>> 8 & 255] << 8 | o[255 & h]) ^ i[p++],
                  v = (o[l >>> 24] << 24 | o[d >>> 16 & 255] << 16 | o[h >>> 8 & 255] << 8 | o[255 & u]) ^ i[p++],
                  d = (o[d >>> 24] << 24 | o[h >>> 16 & 255] << 16 | o[u >>> 8 & 255] << 8 | o[255 & l]) ^ i[p++],
                  e[t] = m,
                  e[t + 1] = g,
                  e[t + 2] = v,
                  e[t + 3] = d
               },
               keySize: 8
            });
            e.AES = t._createHelper(n)
         } (),
         e.exports = i
      },
      function(e, t, i) {
         function n(e) {
            var t, i, n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            s = "";
            for (t = 0; e > t; t += 1) i = Math.random() * n.length,
            i = Math.floor(i),
            s += n.charAt(i);
            return s
         }
         function s(e, t) {
            var i = c.enc.Utf8.parse(t),
            n = c.enc.Utf8.parse("0102030405060708"),
            s = c.enc.Utf8.parse(e);
            return c.AES.encrypt(s, i, {
               iv: n,
               mode: c.mode.CBC
            }).toString()
         }
         function a(e, t, i) {
            var n;
            return h.setMaxDigits(131),
            n = new h.RSAKeyPair(t, "", i),
            h.encryptedString(n, e)
         }
         function r(e, t, i, r) {
            var o = {},
            c = n(16);
            return o.encText = s(e, r),
            o.encText = s(o.encText, c),
            o.encSecKey = a(c, t, i),
            o
         }
         function o(e, t, i, n) {
            var s = {};
            return s.encText = a(e + n, t, i),
            s
         }
         var c = i(2),
         h = i(5);
         e.exports = {
            asrsea: r,
            ecnonasr: o
         }
      },
      function(e, t) {
         function i(e) {
            return e.map(function(e) {
               return n[e]
            }).join("")
         }
         var n = {
            "鑹�": "00e0b",
            "娴佹劅": "509f6",
            "杩欒竟": "259df",
            "寮�": "8642d",
            "鍢村攪": "bc356",
            "浜�": "62901",
            "寮€蹇�": "477df",
            "鍛茬墮": "22677",
            "鎲ㄧ瑧": "ec152",
            "鐚�": "b5ff6",
            "鐨辩湁": "8ace6",
            "骞界伒": "15bb7",
            "铔嬬硶": "b7251",
            "鍙戞€�": "52b3a",
            "澶у摥": "b17a8",
            "鍏斿瓙": "76aea",
            "鏄熸槦": "8a5aa",
            "閽熸儏": "76d2e",
            "鐗垫墜": "41762",
            "鍏浮": "9ec4e",
            "鐖辨剰": "e341f",
            "绂佹": "56135",
            "鐙�": "fccf6",
            "浜蹭翰": "95280",
            "鍙�": "104e0",
            "绀肩墿": "312ec",
            "鏅�": "bda92",
            "鍛�": "557c9",
            "鐢熺梾": "38701",
            "閽荤煶": "14af6",
            "鎷�": "c9d05",
            "鎬�": "c4f7f",
            "绀虹埍": "0c368",
            "姹�": "5b7a4",
            "灏忛浮": "6bee2",
            "鐥涜嫤": "55932",
            "鎾囧槾": "575cc",
            "鎯舵亹": "e10b4",
            "鍙ｇ僵": "24d81",
            "鍚愯垖": "3cfe4",
            "蹇冪": "875d3",
            "鐢熸皵": "e8204",
            "鍙埍": "7b97d",
            "楝艰劯": "def52",
            "璺宠垶": "741d5",
            "鐢峰": "46b8e",
            "濂哥瑧": "289dc",
            "鐚�": "6935b",
            "鍦�": "3ece0",
            "渚夸究": "462db",
            "澶栨槦": "0a22b",
            "鍦ｈ癁": "8e7",
            "娴佹唱": "01000",
            "寮�": "1",
            "鐖卞績": "0CoJU",
            "濂冲": "m6Qyw",
            "鎯婃亹": "8W8ju",
            "澶х瑧": "d"
         },
         s = ["鑹�", "娴佹劅", "杩欒竟", "寮�", "鍢村攪", "浜�", "寮€蹇�", "鍛茬墮", "鎲ㄧ瑧", "鐚�", "鐨辩湁", "骞界伒", "铔嬬硶", "鍙戞€�", "澶у摥", "鍏斿瓙", "鏄熸槦", "閽熸儏", "鐗垫墜", "鍏浮", "鐖辨剰", "绂佹", "鐙�", "浜蹭翰", "鍙�", "绀肩墿", "鏅�", "鍛�", "鐢熺梾", "閽荤煶", "鎷�", "鎬�", "绀虹埍", "姹�", "灏忛浮", "鐥涜嫤", "鎾囧槾", "鎯舵亹", "鍙ｇ僵", "鍚愯垖", "蹇冪", "鐢熸皵", "鍙埍", "楝艰劯", "璺宠垶", "鐢峰", "濂哥瑧", "鐚�", "鍦�", "渚夸究", "澶栨槦", "鍦ｈ癁"],
         a = i(s);
         e.exports = {
            emj2code: i,
            BASE_CODE: a
         }
      },
      function(e, t) {
         function n(e, t, i) {
            this.e = m(e),
            this.d = m(t),
            this.m = m(i),
            this.chunkSize = 2 * y(this.m),
            this.radix = 16,
            this.barrett = new O(this.m)
         }
         function s(e, t) {
            for (var i, n, s, a, o, c, h, l = new Array,
            p = t.length,
            f = 0; p > f;) l[f] = t.charCodeAt(f),
            f++;
            for (; 0 != l.length % e.chunkSize;) l[f++] = 0;
            for (i = l.length, n = "", f = 0; i > f; f += e.chunkSize) {
               for (o = new r, s = 0, a = f; a < f + e.chunkSize; ++s) o.digits[s] = l[a++],
               o.digits[s] += l[a++] << 8;
               c = e.barrett.powMod(o, e.e),
               h = 16 == e.radix ? d(c) : u(c, e.radix),
               n += h + " "
            }
            return n.substring(0, n.length - 1)
         }
         function a(e) {
            D = e,
            B = new Array(D);
            for (var t = 0; t < B.length; t++) B[t] = 0;
            I = new r,
            L = new r,
            L.digits[0] = 1
         }
         function r(e) {
            this.digits = "boolean" == typeof e && 1 == e ? null: B.slice(0),
            this.isNeg = !1
         }
         function o(e) {
            var t = new r(!0);
            return t.digits = e.digits.slice(0),
            t.isNeg = e.isNeg,
            t
         }
         function c(e) {
            var t, i = new r;
            for (i.isNeg = 0 > e, e = Math.abs(e), t = 0; e > 0;) i.digits[t++] = e & K,
            e >>= U;
            return i
         }
         function h(e) {
            var t, i = "";
            for (t = e.length - 1; t > -1; --t) i += e.charAt(t);
            return i
         }
         function u(e, t) {
            var i, n, s = new r;
            for (s.digits[0] = t, i = H(e, s), n = z[i[1].digits[0]]; 1 == E(i[0], I);) i = H(i[0], s),
            digit = i[1].digits[0],
            n += z[i[1].digits[0]];
            return (e.isNeg ? "-": "") + h(n)
         }
         function l(e) {
            var t = "";
            for (i = 0; 4 > i; ++i) t += q[15 & e],
            e >>>= 4;
            return h(t)
         }
         function d(e) {
            var t, i = "";
            for (y(e), t = y(e); t > -1; --t) i += l(e.digits[t]);
            return i
         }
         function p(e) {
            return e >= 48 && 57 >= e ? e - 48 : e >= 65 && 90 >= e ? 10 + e - 65 : e >= 97 && 122 >= e ? 10 + e - 97 : 0
         }
         function f(e) {
            var t, i = 0,
            n = Math.min(e.length, 4);
            for (t = 0; n > t; ++t) i <<= 4,
            i |= p(e.charCodeAt(t));
            return i
         }
         function m(e) {
            var t, i, n = new r,
            s = e.length;
            for (t = s, i = 0; t > 0; t -= 4, ++i) n.digits[i] = f(e.substr(Math.max(t - 4, 0), Math.min(t, 4)));
            return n
         }
         function g(e, t) {
            var i, n, s, a;
            if (e.isNeg != t.isNeg) t.isNeg = !t.isNeg,
            i = v(e, t),
            t.isNeg = !t.isNeg;
            else {
               for (i = new r, n = 0, a = 0; a < e.digits.length; ++a) s = e.digits[a] + t.digits[a] + n,
               i.digits[a] = 65535 & s,
               n = Number(s >= V);
               i.isNeg = e.isNeg
            }
            return i
         }
         function v(e, t) {
            var i, n, s, a;
            if (e.isNeg != t.isNeg) t.isNeg = !t.isNeg,
            i = g(e, t),
            t.isNeg = !t.isNeg;
            else {
               for (i = new r, s = 0, a = 0; a < e.digits.length; ++a) n = e.digits[a] - t.digits[a] + s,
               i.digits[a] = 65535 & n,
               i.digits[a] < 0 && (i.digits[a] += V),
               s = 0 - Number(0 > n);
               if ( - 1 == s) {
                  for (s = 0, a = 0; a < e.digits.length; ++a) n = 0 - i.digits[a] + s,
                  i.digits[a] = 65535 & n,
                  i.digits[a] < 0 && (i.digits[a] += V),
                  s = 0 - Number(0 > n);
                  i.isNeg = !e.isNeg
               } else i.isNeg = e.isNeg
            }
            return i
         }
         function y(e) {
            for (var t = e.digits.length - 1; t > 0 && 0 == e.digits[t];)--t;
            return t
         }
         function x(e) {
            var t, i = y(e),
            n = e.digits[i],
            s = (i + 1) * X;
            for (t = s; t > s - X && 0 == (32768 & n); --t) n <<= 1;
            return t
         }
         function w(e, t) {
            var i, n, s, a, o = new r,
            c = y(e),
            h = y(t);
            for (a = 0; h >= a; ++a) {
               for (i = 0, s = a, j = 0; c >= j; ++j, ++s) n = o.digits[s] + e.digits[j] * t.digits[a] + i,
               o.digits[s] = n & K,
               i = n >>> U;
               o.digits[a + c + 1] = i
            }
            return o.isNeg = e.isNeg != t.isNeg,
            o
         }
         function _(e, t) {
            var i, n, s, a;
            for (result = new r, i = y(e), n = 0, a = 0; i >= a; ++a) s = result.digits[a] + e.digits[a] * t + n,
            result.digits[a] = s & K,
            n = s >>> U;
            return result.digits[1 + i] = n,
            result
         }
         function b(e, t, i, n, s) {
            var a, r, o = Math.min(t + s, e.length);
            for (a = t, r = n; o > a; ++a, ++r) i[r] = e[a]
         }
         function k(e, t) {
            var i, n, s, a, o = Math.floor(t / X),
            c = new r;
            for (b(e.digits, 0, c.digits, o, c.digits.length - o), i = t % X, n = X - i, s = c.digits.length - 1, a = s - 1; s > 0; --s, --a) c.digits[s] = c.digits[s] << i & K | (c.digits[a] & N[i]) >>> n;
            return c.digits[0] = c.digits[s] << i & K,
            c.isNeg = e.isNeg,
            c
         }
         function S(e, t) {
            var i, n, s, a, o = Math.floor(t / X),
            c = new r;
            for (b(e.digits, o, c.digits, 0, e.digits.length - o), i = t % X, n = X - i, s = 0, a = s + 1; s < c.digits.length - 1; ++s, ++a) c.digits[s] = c.digits[s] >>> i | (c.digits[a] & W[i]) << n;
            return c.digits[c.digits.length - 1] >>>= i,
            c.isNeg = e.isNeg,
            c
         }
         function C(e, t) {
            var i = new r;
            return b(e.digits, 0, i.digits, t, i.digits.length - t),
            i
         }
         function T(e, t) {
            var i = new r;
            return b(e.digits, t, i.digits, 0, i.digits.length - t),
            i
         }
         function M(e, t) {
            var i = new r;
            return b(e.digits, 0, i.digits, 0, t),
            i
         }
         function E(e, t) {
            if (e.isNeg != t.isNeg) return 1 - 2 * Number(e.isNeg);
            for (var i = e.digits.length - 1; i >= 0; --i) if (e.digits[i] != t.digits[i]) return e.isNeg ? 1 - 2 * Number(e.digits[i] > t.digits[i]) : 1 - 2 * Number(e.digits[i] < t.digits[i]);
            return 0
         }
         function H(e, t) {
            var i, n, s, a, c, h, u, l, d, p, f, m, w, b, T = x(e),
            M = x(t),
            H = t.isNeg;
            if (M > T) return e.isNeg ? (i = o(L), i.isNeg = !t.isNeg, e.isNeg = !1, t.isNeg = !1, n = v(t, e), e.isNeg = !0, t.isNeg = H) : (i = new r, n = o(e)),
            new Array(i, n);
            for (i = new r, n = e, s = Math.ceil(M / X) - 1, a = 0; t.digits[s] < Y;) t = k(t, 1),
            ++a,
            ++M,
            s = Math.ceil(M / X) - 1;
            for (n = k(n, a), T += a, c = Math.ceil(T / X) - 1, h = C(t, c - s); - 1 != E(n, h);)++i.digits[c - s],
            n = v(n, h);
            for (u = c; u > s; --u) {
               for (l = u >= n.digits.length ? 0 : n.digits[u], d = u - 1 >= n.digits.length ? 0 : n.digits[u - 1], p = u - 2 >= n.digits.length ? 0 : n.digits[u - 2], f = s >= t.digits.length ? 0 : t.digits[s], m = s - 1 >= t.digits.length ? 0 : t.digits[s - 1], i.digits[u - s - 1] = l == f ? K: Math.floor((l * V + d) / f), w = i.digits[u - s - 1] * (f * V + m), b = l * G + (d * V + p); w > b;)--i.digits[u - s - 1],
               w = i.digits[u - s - 1] * (f * V | m),
               b = l * V * V + (d * V + p);
               h = C(t, u - s - 1),
               n = v(n, _(h, i.digits[u - s - 1])),
               n.isNeg && (n = g(n, h), --i.digits[u - s - 1])
            }
            return n = S(n, a),
            i.isNeg = e.isNeg != H,
            e.isNeg && (i = H ? g(i, L) : v(i, L), t = S(t, a), n = v(t, n)),
            0 == n.digits[0] && 0 == y(n) && (n.isNeg = !1),
            new Array(i, n)
         }
         function R(e, t) {
            return H(e, t)[0]
         }
         function O(e) {
            this.modulus = o(e),
            this.k = y(this.modulus) + 1;
            var t = new r;
            t.digits[2 * this.k] = 1,
            this.mu = R(t, this.modulus),
            this.bkplus1 = new r,
            this.bkplus1.digits[this.k + 1] = 1,
            this.modulo = P,
            this.multiplyMod = A,
            this.powMod = F
         }
         function P(e) {
            var t, i = T(e, this.k - 1),
            n = w(i, this.mu),
            s = T(n, this.k + 1),
            a = M(e, this.k + 1),
            r = w(s, this.modulus),
            o = M(r, this.k + 1),
            c = v(a, o);
            for (c.isNeg && (c = g(c, this.bkplus1)), t = E(c, this.modulus) >= 0; t;) c = v(c, this.modulus),
            t = E(c, this.modulus) >= 0;
            return c
         }
         function A(e, t) {
            var i = w(e, t);
            return this.modulo(i)
         }
         function F(e, t) {
            var i, n, s = new r;
            for (s.digits[0] = 1, i = e, n = t; 0 != (1 & n.digits[0]) && (s = this.multiplyMod(s, i)), n = S(n, 1), 0 != n.digits[0] || 0 != y(n);) i = this.multiplyMod(i, i);
            return s
         }
         var D, B, I, L, z, q, N, W, U = 16,
         X = U,
         V = 65536,
         Y = V >>> 1,
         G = V * V,
         K = V - 1;
         a(20),
         15,
         c(1e15),
         z = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"),
         q = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"),
         N = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535),
         W = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535),
         e.exports = {
            RSAKeyPair: n,
            setMaxDigits: a,
            encryptedString: s
         }
      },
      function(module, exports, __webpack_require__) {
         var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
         /*!
  * Reqwest! A general purpose XHR connection manager
  * license MIT (c) Dustin Diaz 2015
  * https://github.com/ded/reqwest
  */
         !
         function(e, t, i) {
            void 0 !== module && module.exports ? module.exports = i() : (__WEBPACK_AMD_DEFINE_FACTORY__ = i, void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
         } (0, 0,
         function() {
            function succeed(e) {
               var t = protocolRe.exec(e.url);
               return t = t && t[1] || context.location.protocol,
               httpsRe.test(t) ? twoHundo.test(e.request.status) : !!e.request.response
            }
            function handleReadyState(e, t, i) {
               return function() {
                  return e._aborted ? i(e.request) : e._timedOut ? i(e.request, "Request is aborted: timeout") : void(e.request && 4 == e.request[readyState] && (e.request.onreadystatechange = noop, succeed(e) ? t(e.request) : i(e.request)))
               }
            }
            function setHeaders(e, t) {
               var i, n = t.headers || {};
               n.Accept = n.Accept || defaultHeaders.accept[t.type] || defaultHeaders.accept["*"];
               var s = "undefined" != typeof FormData && t.data instanceof FormData;
               t.crossOrigin || n[requestedWith] || (n[requestedWith] = defaultHeaders.requestedWith),
               n[contentType] || s || (n[contentType] = t.contentType || defaultHeaders.contentType);
               for (i in n) n.hasOwnProperty(i) && "setRequestHeader" in e && e.setRequestHeader(i, n[i])
            }
            function setCredentials(e, t) {
               void 0 !== t.withCredentials && void 0 !== e.withCredentials && (e.withCredentials = !!t.withCredentials)
            }
            function generalCallback(e) {
               lastValue = e
            }
            function urlappend(e, t) {
               return e + (/\?/.test(e) ? "&": "?") + t
            }
            function handleJsonp(e, t, i, n) {
               var s = uniqid++,
               a = e.jsonpCallback || "callback",
               r = e.jsonpCallbackName || reqwest.getcallbackPrefix(s),
               o = new RegExp("((^|\\?|&)" + a + ")=([^&]+)"),
               c = n.match(o),
               h = doc.createElement("script"),
               u = 0,
               l = -1 !== navigator.userAgent.indexOf("MSIE 10.0");
               return c ? "?" === c[3] ? n = n.replace(o, "$1=" + r) : r = c[3] : n = urlappend(n, a + "=" + r),
               context[r] = generalCallback,
               h.type = "text/javascript",
               h.src = n,
               h.async = !0,
               void 0 === h.onreadystatechange || l || (h.htmlFor = h.id = "_reqwest_" + s),
               h.onload = h.onreadystatechange = function() {
                  if (h[readyState] && "complete" !== h[readyState] && "loaded" !== h[readyState] || u) return ! 1;
                  h.onload = h.onreadystatechange = null,
                  h.onclick && h.onclick(),
                  t(lastValue),
                  lastValue = void 0,
                  head.removeChild(h),
                  u = 1
               },
               head.appendChild(h),
               {
                  abort: function() {
                     h.onload = h.onreadystatechange = null,
                     i({},
                     "Request is aborted: timeout", {}),
                     lastValue = void 0,
                     head.removeChild(h),
                     u = 1
                  }
               }
            }
            function getRequest(e, t) {
               var i, n = this.o,
               s = (n.method || "GET").toUpperCase(),
               a = "string" == typeof n ? n: n.url,
               r = !1 !== n.processData && n.data && "string" != typeof n.data ? reqwest.toQueryString(n.data) : n.data || null,
               o = !1;
               return "jsonp" != n.type && "GET" != s || !r || (a = urlappend(a, r), r = null),
               "jsonp" == n.type ? handleJsonp(n, e, t, a) : (i = n.xhr && n.xhr(n) || xhr(n), i.open(s, a, !1 !== n.async), setHeaders(i, n), setCredentials(i, n), context[xDomainRequest] && i instanceof context[xDomainRequest] ? (i.onload = e, i.onerror = t, i.onprogress = function() {},
               o = !0) : i.onreadystatechange = handleReadyState(this, e, t), n.before && n.before(i), o ? setTimeout(function() {
                  i.send(r)
               },
               200) : i.send(r), i)
            }
            function Reqwest(e, t) {
               this.o = e,
               this.fn = t,
               init.apply(this, arguments)
            }
            function setType(e) {
               if (null !== e) return e.match("json") ? "json": e.match("javascript") ? "js": e.match("text") ? "html": e.match("xml") ? "xml": void 0
            }
            function init(o, fn) {
               function complete(e) {
                  for (o.timeout && clearTimeout(self.timeout), self.timeout = null; self._completeHandlers.length > 0;) self._completeHandlers.shift()(e)
               }
               function success(resp) {
                  var type = o.type || resp && setType(resp.getResponseHeader("Content-Type"));
                  resp = "jsonp" !== type ? self.request: resp;
                  var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type),
                  r = filteredResponse;
                  try {
                     resp.responseText = r
                  } catch(e) {}
                  if (r) switch (type) {
                  case "json":
                     try {
                        resp = context.JSON ? context.JSON.parse(r) : eval("(" + r + ")")
                     } catch(e) {
                        return error(resp, "Could not parse JSON in response", e)
                     }
                     break;
                  case "js":
                     resp = eval(r);
                     break;
                  case "html":
                     resp = r;
                     break;
                  case "xml":
                     resp = resp.responseXML && resp.responseXML.parseError && resp.responseXML.parseError.errorCode && resp.responseXML.parseError.reason ? null: resp.responseXML
                  }
                  for (self._responseArgs.resp = resp, self._fulfilled = !0, fn(resp), self._successHandler(resp); self._fulfillmentHandlers.length > 0;) resp = self._fulfillmentHandlers.shift()(resp);
                  complete(resp)
               }
               function timedOut() {
                  self._timedOut = !0,
                  self.request.abort()
               }
               function error(e, t, i) {
                  for (e = self.request, self._responseArgs.resp = e, self._responseArgs.msg = t, self._responseArgs.t = i, self._erred = !0; self._errorHandlers.length > 0;) self._errorHandlers.shift()(e, t, i);
                  complete(e)
               }
               this.url = "string" == typeof o ? o: o.url,
               this.timeout = null,
               this._fulfilled = !1,
               this._successHandler = function() {},
               this._fulfillmentHandlers = [],
               this._errorHandlers = [],
               this._completeHandlers = [],
               this._erred = !1,
               this._responseArgs = {};
               var self = this;
               fn = fn ||
               function() {},
               o.timeout && (this.timeout = setTimeout(function() {
                  timedOut()
               },
               o.timeout)),
               o.success && (this._successHandler = function() {
                  o.success.apply(o, arguments)
               }),
               o.error && this._errorHandlers.push(function() {
                  o.error.apply(o, arguments)
               }),
               o.complete && this._completeHandlers.push(function() {
                  o.complete.apply(o, arguments)
               }),
               this.request = getRequest.call(this, success, error)
            }
            function reqwest(e, t) {
               return new Reqwest(e, t)
            }
            function normalize(e) {
               return e ? e.replace(/\r?\n/g, "\r\n") : ""
            }
            function serial(e, t) {
               var i, n, s, a, r = e.name,
               o = e.tagName.toLowerCase(),
               c = function(e) {
                  e && !e.disabled && t(r, normalize(e.attributes.value && e.attributes.value.specified ? e.value: e.text))
               };
               if (!e.disabled && r) switch (o) {
               case "input":
                  /reset|button|image|file/i.test(e.type) || (i = /checkbox/i.test(e.type), n = /radio/i.test(e.type), s = e.value, (!(i || n) || e.checked) && t(r, normalize(i && "" === s ? "on": s)));
                  break;
               case "textarea":
                  t(r, normalize(e.value));
                  break;
               case "select":
                  if ("select-one" === e.type.toLowerCase()) c(e.selectedIndex >= 0 ? e.options[e.selectedIndex] : null);
                  else for (a = 0; e.length && a < e.length; a++) e.options[a].selected && c(e.options[a])
               }
            }
            function eachFormElement() {
               var e, t, i = this;
               for (t = 0; t < arguments.length; t++) e = arguments[t],
               /input|select|textarea/i.test(e.tagName) && serial(e, i),
               function(e, t) {
                  var n, s, a;
                  for (n = 0; n < t.length; n++) for (a = e[byTag](t[n]), s = 0; s < a.length; s++) serial(a[s], i)
               } (e, ["input", "select", "textarea"])
            }
            function serializeQueryString() {
               return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments))
            }
            function serializeHash() {
               var e = {};
               return eachFormElement.apply(function(t, i) {
                  t in e ? (e[t] && !isArray(e[t]) && (e[t] = [e[t]]), e[t].push(i)) : e[t] = i
               },
               arguments),
               e
            }
            function buildParams(e, t, i, n) {
               var s, a, r, o = /\[\]$/;
               if (isArray(t)) for (a = 0; t && a < t.length; a++) r = t[a],
               i || o.test(e) ? n(e, r) : buildParams(e + "[" + ("object" == typeof r ? a: "") + "]", r, i, n);
               else if (t && "[object Object]" === t.toString()) for (s in t) buildParams(e + "[" + s + "]", t[s], i, n);
               else n(e, t)
            }
            var context = this;
            if ("window" in context) var doc = document,
            byTag = "getElementsByTagName",
            head = doc[byTag]("head")[0];
            else {
               var XHR2;
               try {
                  XHR2 = __webpack_require__(7)
               } catch(e) {
                  throw new Error("Peer dependency `xhr2` required! Please npm install xhr2")
               }
            }
            var httpsRe = /^http/,
            protocolRe = /(^\w+):\/\//,
            twoHundo = /^(20\d|1223)$/,
            readyState = "readyState",
            contentType = "Content-Type",
            requestedWith = "X-Requested-With",
            uniqid = 0,
            callbackPrefix = "reqwest_" + +new Date,
            lastValue, xmlHttpRequest = "XMLHttpRequest",
            xDomainRequest = "XDomainRequest",
            noop = function() {},
            isArray = "function" == typeof Array.isArray ? Array.isArray: function(e) {
               return e instanceof Array
            },
            defaultHeaders = {
               contentType: "application/x-www-form-urlencoded",
               requestedWith: xmlHttpRequest,
               accept: {
                  "*": "text/javascript, text/html, application/xml, text/xml, */*",
                  xml: "application/xml, text/xml",
                  html: "text/html",
                  text: "text/plain",
                  json: "application/json, text/javascript",
                  js: "application/javascript, text/javascript"
               }
            },
            xhr = function(e) {
               if (!0 === e.crossOrigin) {
                  var t = context[xmlHttpRequest] ? new XMLHttpRequest: null;
                  if (t && "withCredentials" in t) return t;
                  if (context[xDomainRequest]) return new XDomainRequest;
                  throw new Error("Browser does not support cross-origin requests")
               }
               return context[xmlHttpRequest] ? new XMLHttpRequest: XHR2 ? new XHR2: new ActiveXObject("Microsoft.XMLHTTP")
            },
            globalSetupOptions = {
               dataFilter: function(e) {
                  return e
               }
            };
            return Reqwest.prototype = {
               abort: function() {
                  this._aborted = !0,
                  this.request.abort()
               },
               retry: function() {
                  init.call(this, this.o, this.fn)
               },
               then: function(e, t) {
                  return e = e ||
                  function() {},
                  t = t ||
                  function() {},
                  this._fulfilled ? this._responseArgs.resp = e(this._responseArgs.resp) : this._erred ? t(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : (this._fulfillmentHandlers.push(e), this._errorHandlers.push(t)),
                  this
               },
               always: function(e) {
                  return this._fulfilled || this._erred ? e(this._responseArgs.resp) : this._completeHandlers.push(e),
                  this
               },
               fail: function(e) {
                  return this._erred ? e(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : this._errorHandlers.push(e),
                  this
               },
               catch: function(e) {
                  return this.fail(e)
               }
            },
            reqwest.serializeArray = function() {
               var e = [];
               return eachFormElement.apply(function(t, i) {
                  e.push({
                     name: t,
                     value: i
                  })
               },
               arguments),
               e
            },
            reqwest.serialize = function() {
               if (0 === arguments.length) return "";
               var e, t, i = Array.prototype.slice.call(arguments, 0);
               return e = i.pop(),
               e && e.nodeType && i.push(e) && (e = null),
               e && (e = e.type),
               t = "map" == e ? serializeHash: "array" == e ? reqwest.serializeArray: serializeQueryString,
               t.apply(null, i)
            },
            reqwest.toQueryString = function(e, t) {
               var i, n, s = t || !1,
               a = [],
               r = encodeURIComponent,
               o = function(e, t) {
                  t = "function" == typeof t ? t() : null == t ? "": t,
                  a[a.length] = r(e) + "=" + r(t)
               };
               if (isArray(e)) for (n = 0; e && n < e.length; n++) o(e[n].name, e[n].value);
               else for (i in e) e.hasOwnProperty(i) && buildParams(i, e[i], s, o);
               return a.join("&").replace(/%20/g, "+")
            },
            reqwest.getcallbackPrefix = function() {
               return callbackPrefix
            },
            reqwest.compat = function(e, t) {
               return e && (e.type && (e.method = e.type) && delete e.type, e.dataType && (e.type = e.dataType), e.jsonpCallback && (e.jsonpCallbackName = e.jsonpCallback) && delete e.jsonpCallback, e.jsonp && (e.jsonpCallback = e.jsonp)),
               new Reqwest(e, t)
            },
            reqwest.ajaxSetup = function(e) {
               e = e || {};
               for (var t in e) globalSetupOptions[t] = e[t]
            },
            reqwest
         })
      },
      function(e, t) {},
      function(e, t, i) {
         function n(e, t) {
            var i, n = {},
            t = a({},
            t),
            s = e.split("?"),
            g = t.headers || (t.headers = {});
            if (void 0 === t.credentials && (t.credentials = "include"), m.test(e) && g[p] !== f && !t.noEnc) {
               g[p] = "application/x-www-form-urlencoded",
               g.Accept,
               2 === s.length && (n = o(s[1])),
               e = s[0],
               ["query", "data"].forEach(function(e) {
                  t[e] && (n = a(n, "string" == typeof t[e] ? o(t[e]) : t[e]))
               });
               var v = c("__csrf");
               return v && (n.csrf_token = v),
               e = e.replace("api", "weapi") + (v ? "?" + r({
                  csrf_token: n.csrf_token
               }) : ""),
               t.method = "post",
               delete t.query,
               delete t.data,
               i = h(JSON.stringify(n), u(["娴佹唱", "寮�"]), l, u(["鐖卞績", "濂冲", "鎯婃亹", "澶х瑧"])),
               t.body = r({
                  params: i.encText,
                  encSecKey: i.encSecKey
               }),
               d(e, t)
            }
            return d(e, t)
         }
         var s = i(0),
         a = s.extend,
         r = s.obj2query,
         o = s.query2obj,
         c = s.getCookie,
         h = s.asrsea,
         u = (s.ecnonasr, s.emj2code),
         l = s.BASE_CODE,
         d = void 0;
         "undefined" != typeof window && (d = i(1));
         var p = "Content-Type",
         f = "multipart/form-data",
         m = /(^|\.com)\/api/;
         n.encode = function(e, t) {
            e || (e = {}),
            t && (e.csrf_token = t);
            var i = h(JSON.stringify(e), u(["娴佹唱", "寮�"]), l, u(["鐖卞績", "濂冲", "鎯婃亹", "澶х瑧"]));
            return t && (i.query = r({
               csrf_token: t
            })),
            i
         },
         n.util = a({
            fetch: d
         },
         s),
         e.exports = n
      }])
   })
},
function(e, t) {
   var i = {}.hasOwnProperty;
   e.exports = function(e, t) {
      return i.call(e, t)
   }
},
, , , , , , , , , , ,
function(e, t, i) {
   "use strict";
   Object.defineProperty(t, "__esModule", {
      value: !0
   });
   var n = i(284),
   s = function(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   } (n),
   a = {};
   a.init = function() {
      a.bgm = new s.
   default({
         src:
         i(519),
         loop: !0
      }),
      a.rain = new s.
   default({
         src:
         i(520),
         loop: !1
      }),
      a.gudu = new s.
   default({
         src:
         i(521),
         loop: !1
      }),
      a.xintiao = new s.
   default({
         src:
         i(522),
         loop: !1
      })
   },
   t.
default = a
},
function(e, t, i) {
   e.exports = !i(67)(function() {
      return 7 != Object.defineProperty({},
      "a", {
         get: function() {
            return 7
         }
      }).a
   })
},
function(e, t, i) {
   var n = i(57),
   s = i(77);
   e.exports = i(55) ?
   function(e, t, i) {
      return n.f(e, t, s(1, i))
   }: function(e, t, i) {
      return e[t] = i,
      e
   }
},
function(e, t, i) {
   var n = i(75),
   s = i(148),
   a = i(108),
   r = Object.defineProperty;
   t.f = i(55) ? Object.defineProperty: function(e, t, i) {
      if (n(e), t = a(t, !0), n(i), s) try {
         return r(e, t, i)
      } catch(e) {}
      if ("get" in i || "set" in i) throw TypeError("Accessors not supported!");
      return "value" in i && (e[t] = i.value),
      e
   }
},
function(e, t, i) {
   var n = i(298),
   s = i(98);
   e.exports = function(e) {
      return n(s(e))
   }
},
function(e, t, i) {
   var n = i(106)("wks"),
   s = i(78),
   a = i(38).Symbol,
   r = "function" == typeof a; (e.exports = function(e) {
      return n[e] || (n[e] = r && a[e] || (r ? a: s)("Symbol." + e))
   }).store = n
},
, , , , ,
function(e, t, i) {
   "use strict";
   Object.defineProperty(t, "__esModule", {
      value: !0
   });
   var n = i(94),
   s = function() {};
   "undefined" != typeof window && (s = i(41));
   var a = function(e, t) {
      var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {};
      arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      e && s(n.CurrentHost + "/api/feedback/weblog", {
         method: "post",
         data: {
            logs: JSON.stringify([{
               action: e,
               json: t || null
            }])
         }
      }).then(function(e) {
         return e.json()
      }).then(function(e) {
         i(e)
      }).
      catch(function(e) {
         i(e)
      })
   };
   t.
default = a,
   e.exports = t.
default
},
function(e, t) {
   var i = e.exports = {
      version: "2.5.3"
   };
   "number" == typeof __e && (__e = i)
},
function(e, t) {
   e.exports = function(e) {
      try {
         return !! e()
      } catch(e) {
         return ! 0
      }
   }
},
function(e, t) {
   e.exports = function(e) {
      return "object" == typeof e ? null !== e: "function" == typeof e
   }
},
, , ,
function(e, t, i) { (function(t) { !
      function(i) {
         function n() {}
         function s(e, t) {
            return function() {
               e.apply(t, arguments)
            }
         }
         function a(e) {
            if (! (this instanceof a)) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            this._state = 0,
            this._handled = !1,
            this._value = void 0,
            this._deferreds = [],
            l(e, this)
         }
         function r(e, t) {
            for (; 3 === e._state;) e = e._value;
            if (0 === e._state) return void e._deferreds.push(t);
            e._handled = !0,
            a._immediateFn(function() {
               var i = 1 === e._state ? t.onFulfilled: t.onRejected;
               if (null === i) return void(1 === e._state ? o: c)(t.promise, e._value);
               var n;
               try {
                  n = i(e._value)
               } catch(e) {
                  return void c(t.promise, e)
               }
               o(t.promise, n)
            })
         }
         function o(e, t) {
            try {
               if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
               if (t && ("object" == typeof t || "function" == typeof t)) {
                  var i = t.then;
                  if (t instanceof a) return e._state = 3,
                  e._value = t,
                  void h(e);
                  if ("function" == typeof i) return void l(s(i, t), e)
               }
               e._state = 1,
               e._value = t,
               h(e)
            } catch(t) {
               c(e, t)
            }
         }
         function c(e, t) {
            e._state = 2,
            e._value = t,
            h(e)
         }
         function h(e) {
            2 === e._state && 0 === e._deferreds.length && a._immediateFn(function() {
               e._handled || a._unhandledRejectionFn(e._value)
            });
            for (var t = 0,
            i = e._deferreds.length; t < i; t++) r(e, e._deferreds[t]);
            e._deferreds = null
         }
         function u(e, t, i) {
            this.onFulfilled = "function" == typeof e ? e: null,
            this.onRejected = "function" == typeof t ? t: null,
            this.promise = i
         }
         function l(e, t) {
            var i = !1;
            try {
               e(function(e) {
                  i || (i = !0, o(t, e))
               },
               function(e) {
                  i || (i = !0, c(t, e))
               })
            } catch(e) {
               if (i) return;
               i = !0,
               c(t, e)
            }
         }
         var d = setTimeout;
         a.prototype.
         catch = function(e) {
            return this.then(null, e)
         },
         a.prototype.then = function(e, t) {
            var i = new this.constructor(n);
            return r(this, new u(e, t, i)),
            i
         },
         a.all = function(e) {
            return new a(function(t, i) {
               function n(e, r) {
                  try {
                     if (r && ("object" == typeof r || "function" == typeof r)) {
                        var o = r.then;
                        if ("function" == typeof o) return void o.call(r,
                        function(t) {
                           n(e, t)
                        },
                        i)
                     }
                     s[e] = r,
                     0 == --a && t(s)
                  } catch(e) {
                     i(e)
                  }
               }
               if (!e || void 0 === e.length) throw new TypeError("Promise.all accepts an array");
               var s = Array.prototype.slice.call(e);
               if (0 === s.length) return t([]);
               for (var a = s.length,
               r = 0; r < s.length; r++) n(r, s[r])
            })
         },
         a.resolve = function(e) {
            return e && "object" == typeof e && e.constructor === a ? e: new a(function(t) {
               t(e)
            })
         },
         a.reject = function(e) {
            return new a(function(t, i) {
               i(e)
            })
         },
         a.race = function(e) {
            return new a(function(t, i) {
               for (var n = 0,
               s = e.length; n < s; n++) e[n].then(t, i)
            })
         },
         a._immediateFn = "function" == typeof t &&
         function(e) {
            t(e)
         } ||
         function(e) {
            d(e, 0)
         },
         a._unhandledRejectionFn = function(e) {
            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
         },
         a._setImmediateFn = function(e) {
            a._immediateFn = e
         },
         a._setUnhandledRejectionFn = function(e) {
            a._unhandledRejectionFn = e
         },
         void 0 !== e && e.exports ? e.exports = a: i.Promise || (i.Promise = a)
      } (this)
   }).call(t, i(93).setImmediate)
},
function(e, t, i) {
   "use strict";
   t.decode = t.parse = i(139),
   t.encode = t.stringify = i(140)
},
function(e, t, i) {
   "use strict";
   function n(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   }
   function s(e, t) {
      if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
   }
   Object.defineProperty(t, "__esModule", {
      value: !0
   }),
   t.CanvasBg = void 0;
   var a = function() {
      function e(e, t) {
         for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
         }
      }
      return function(t, i, n) {
         return i && e(t.prototype, i),
         n && e(t, n),
         t
      }
   } (),
   r = i(10),
   o = n(r),
   c = i(28),
   h = n(c),
   u = i(257),
   l = n(u),
   d = i(4),
   p = i(26),
   f = n(p),
   m = h.
default.dpr,
   g = t.CanvasBg = function() {
      function e() {
         if (s(this, e), e.instance) return e.instance;
         e.instance = this;
         var t = window.innerWidth,
         i = window.innerHeight;
         this.camera = new THREE.PerspectiveCamera(90, t / i, .01, 1e3),
         this.renderer = new THREE.WebGLRenderer({
            alpha: !0,
            antialias: !0
         }),
         this.renderer.setSize(t, i),
         this.renderer.setPixelRatio(m),
         this.initScene(),
         this.animate = this.animate.bind(this),
         this.animateDistort = this.animateDistort.bind(this),
         this.resize = this.resize.bind(this),
         this.onTouchStart = this.onTouchStart.bind(this),
         this.onTouchMove = this.onTouchMove.bind(this),
         this.onTouchEnd = this.onTouchEnd.bind(this),
         this.addPostEffect(),
         this.addEvent(),
         (0, o.
      default)("#j-view-back").append(this.renderer.domElement)
      }
      return a(e, [{
         key: "el",
         value: function() {
            return this.renderer.domElement
         }
      },
      {
         key: "initScene",
         value: function() {
            window.innerWidth,
            window.innerHeight;
            this.scene = new THREE.Scene,
            this.scene.background = new THREE.Color(2499121);
            var e = (new THREE.TextureLoader).load(i(611));
            e.wrapS = THREE.RepeatWrapping,
            e.wrapT = THREE.MirroredRepeatWrapping,
            this.scene.background = e,
            this.initParticles()
         }
      },
      {
         key: "initParticles",
         value: function() {
            var e = window.innerWidth,
            t = window.innerHeight;
            this.points = [];
            var i, n, s, a, r, o, c, h;
            for (i = 0; i < 3; ++i) {
               for (o = new THREE.PointsMaterial({
                  color: 15856371,
                  size: 2,
                  transparent: !0,
                  opacity: 1
               }), c = new THREE.Geometry, n = 0; n < 80; ++n) s = (Math.random() * e << 1) - e,
               a = (Math.random() * t << 1) - t,
               r = 400 * Math.random(),
               c.vertices.push(new THREE.Vector3(s, a, r));
               h = new THREE.Points(c, o),
               this.scene.add(h),
               this.points.push(h),
               h.position.x = e * i
            }
            for (o = new THREE.PointsMaterial({
               color: 15856371,
               size: 2,
               transparent: !0,
               opacity: .7
            }), c = new THREE.Geometry, n = 0; n < 150; ++n) s = (Math.random() * e << 1) - e,
            a = (Math.random() * t << 1) - t,
            r = 450,
            c.vertices.push(new THREE.Vector3(s, a, r));
            h = new THREE.Points(c, o),
            this.scene.add(h),
            this.points.push(h),
            h.position.x = e,
            this.bigPoints = h
         }
      },
      {
         key: "transCamera",
         value: function() {
            var e = {
               z: 400,
               o: 1
            },
            t = this;
            return new Promise(function(i) {
               d.TweenMax.to(e, 5, {
                  z: 700,
                  o: .5,
                  onUpdate: function() {
                     t.camera.position.z = e.z,
                     t.points[0].material.opacity = e.o,
                     t.points[1].material.opacity = e.o,
                     t.points[2].material.opacity = e.o
                  },
                  onComplete: function() {
                     t.isMoveLeft = !0,
                     i()
                  },
                  ease: d.Power2.easeInOut
               })
            })
         }
      },
      {
         key: "addEvent",
         value: function() { (0, o.
         default)(window).on("resize", this.resize),
            this.isDisablePostEffect() || ((0, o.
         default)(window).on("touchstart mousedown", this.onTouchStart), (0, o.
         default)(window).on("touchstart touchmove mousemove", this.onTouchMove), (0, o.
         default)(window).on("touchend mouseup", this.onTouchEnd))
         }
      },
      {
         key: "removeEvent",
         value: function() { (0, o.
         default)(window).off("resize", this.resize),
            this.isDisablePostEffect() || ((0, o.
         default)(window).off("touchstart mousedown", this.onTouchStart), (0, o.
         default)(window).off("touchstart touchmove mousemove", this.onTouchMove), (0, o.
         default)(window).off("touchend mouseup", this.onTouchEnd))
         }
      },
      {
         key: "animateDistort",
         value: function() {
            this.disdortTimer && cancelAnimationFrame(this.disdortTimer),
            this.disdortTimer = requestAnimationFrame(this.animateDistort),
            this.distortPass.uniforms.u_time.value = ++this.distortPass.time / 100,
            this.distortPass.targetAmp += .2,
            this.distortPass.targetAmp = Math.min(.8, this.distortPass.targetAmp)
         }
      },
      {
         key: "onTouchStart",
         value: function() {
            this.animateDistort()
         }
      },
      {
         key: "onTouchMove",
         value: function(e) {
            var t = window.innerWidth,
            i = window.innerHeight;
            e.touches && e.touches.length > 0 ? this.distortPass.uniforms.u_mouse.value.set(e.touches[0].pageX / t, 1 - e.touches[0].pageY / i) : this.distortPass.uniforms.u_mouse.value.set(e.pageX / t, 1 - e.pageY / i)
         }
      },
      {
         key: "onTouchEnd",
         value: function() {
            this.disdortTimer = cancelAnimationFrame(this.disdortTimer),
            this.distortPass.targetAmp = 0
         }
      },
      {
         key: "addPostEffect",
         value: function() {
            var e = this;
            if (!this.isDisablePostEffect()) {
               var t = window.innerWidth,
               i = window.innerHeight;
               this.composer = new THREE.EffectComposer(this.renderer),
               this.composer.addPass(new THREE.RenderPass(this.scene, this.camera)),
               this.composer.setSize(t * m, i * m),
               this.distortPass = new l.
            default,
               this.distortPass.renderToScreen = !0,
               this.distortPass.uniforms.u_aspect.value = i / t,
               this.composer.addPass(this.distortPass),
               this.distortInterval = setInterval(function() {
                  e.distortPass.updateUniforms()
               },
               1e3 / 24)
            }
         }
      },
      {
         key: "isDisablePostEffect",
         value: function() {
            return ! f.
         default.isIos() || 812 == screen.height
         }
      },
      {
         key: "animate",
         value: function() {
            this.animateId = requestAnimationFrame(this.animate);
            var e = 1.5 * window.innerWidth,
            t = 1.5 * window.innerHeight;
            this.points && (this.isMoveLeft ? (this.points[0].position.x -= 1, this.points[1].position.x -= 1, this.bigPoints.position.x -= .15, this.points[0].position.x < -e && (this.points[0].position.x = e), this.points[1].position.x < -e && (this.points[1].position.x = e), this.bigPoints.position.x < -e && (this.bigPoints.position.x = e)) : this.isMoveDown && (this.points[0].position.y -= 1, this.points[1].position.y -= 1, this.points[2].position.y -= 1, this.points[0].position.y < -t && (this.points[0].position.y = t), this.points[1].position.y < -t && (this.points[1].position.y = t), this.points[2].position.y < -t && (this.points[2].position.y = t))),
            this.composer ? this.composer.render() : this.renderer.render(this.scene, this.camera)
         }
      },
      {
         key: "moveDown",
         value: function() {
            this.isMoveLeft = !1,
            this.isMoveDown = !0,
            this.points[2].position.y = window.innerHeight,
            this.points[2].position.x = 0
         }
      },
      {
         key: "fadeOutBig",
         value: function() {
            var e = {
               o: .7
            },
            t = this.bigPoints;
            d.TweenMax.to(e, 1, {
               o: 0,
               onUpdate: function() {
                  t.material.opacity = e.o
               }
            })
         }
      },
      {
         key: "fadeInBig",
         value: function() {
            var e = {
               o: 0
            },
            t = this.bigPoints;
            d.TweenMax.to(e, 1, {
               o: .7,
               onUpdate: function() {
                  t.material.opacity = e.o
               }
            })
         }
      },
      {
         key: "transitionOut",
         value: function() {
            var e = this;
            this.points && (this.points.forEach(function(t) {
               t.geometry.dispose(),
               t.material.dispose(),
               e.scene.remove(t)
            }), this.points = null)
         }
      },
      {
         key: "dispose",
         value: function() {
            this.removeEvent(),
            this.animateId = cancelAnimationFrame(this.animateId),
            this.distortInterval = clearInterval(this.distortInterval),
            this.disdortTimer = cancelAnimationFrame(this.disdortTimer),
            this.renderer.dispose()
         }
      },
      {
         key: "resize",
         value: function() {
            var e = window.innerWidth,
            t = window.innerHeight;
            this.composer ? this.composer.setSize(e * m, t * m) : this.renderer.setSize(e * m, t * m)
         }
      }]),
      e
   } ();
   g.instance = null,
   t.
default = new g
},
function(e, t, i) {
   var n = i(68);
   e.exports = function(e) {
      if (!n(e)) throw TypeError(e + " is not an object!");
      return e
   }
},
function(e, t, i) {
   var n = i(153),
   s = i(99);
   e.exports = Object.keys ||
   function(e) {
      return n(e, s)
   }
},
function(e, t) {
   e.exports = function(e, t) {
      return {
         enumerable: !(1 & e),
         configurable: !(2 & e),
         writable: !(4 & e),
         value: t
      }
   }
},
function(e, t) {
   var i = 0,
   n = Math.random();
   e.exports = function(e) {
      return "Symbol(".concat(void 0 === e ? "": e, ")_", (++i + n).toString(36))
   }
},
, , , , , , , , , , , , , ,
function(e, t, i) {
   function n(e, t) {
      this._id = e,
      this._clearFn = t
   }
   var s = Function.prototype.apply;
   t.setTimeout = function() {
      return new n(s.call(setTimeout, window, arguments), clearTimeout)
   },
   t.setInterval = function() {
      return new n(s.call(setInterval, window, arguments), clearInterval)
   },
   t.clearTimeout = t.clearInterval = function(e) {
      e && e.close()
   },
   n.prototype.unref = n.prototype.ref = function() {},
   n.prototype.close = function() {
      this._clearFn.call(window, this._id)
   },
   t.enroll = function(e, t) {
      clearTimeout(e._idleTimeoutId),
      e._idleTimeout = t
   },
   t.unenroll = function(e) {
      clearTimeout(e._idleTimeoutId),
      e._idleTimeout = -1
   },
   t._unrefActive = t.active = function(e) {
      clearTimeout(e._idleTimeoutId);
      var t = e._idleTimeout;
      t >= 0 && (e._idleTimeoutId = setTimeout(function() {
         e._onTimeout && e._onTimeout()
      },
      t))
   },
   i(141),
   t.setImmediate = setImmediate,
   t.clearImmediate = clearImmediate
},
function(e, t, i) {
   "use strict";
   Object.defineProperty(t, "__esModule", {
      value: !0
   });
   var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
   function(e) {
      return typeof e
   }: function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
   },
   s = function(e) {
      var t = {};
      if (!e) return t;
      e = "?" == e.charAt(0) ? e.slice(1) : e;
      for (var i = e.split("&"), n = 0, s = i.length; n < s; n++) {
         var a = i[n].split("=");
         try {
            t[a[0]] = decodeURIComponent(a[1])
         } catch(e) {
            t[a[0]] = a[1]
         }
      }
      return t
   },
   a = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,
   r = function(e) {
      var t = {};
      if (e) if ("string" == typeof e) {
         var i = e.match(a),
         r = i[1] ? i[1] + ":": "",
         o = i[7] ? "#" + i[7] : "",
         c = i[3] || "",
         h = i[4] || "",
         u = i[5] ? "/" + i[5] : "",
         l = [c],
         d = i[6] ? "?" + i[6] : "";
         h && l.push(h),
         t = null != i ? {
            hash: o,
            host: l.join(":"),
            hostname: c,
            href: e,
            origin: r + "//" + l,
            pathname: u,
            port: h,
            protocol: r,
            search: d
         }: {}
      } else "object" === (void 0 === e ? "undefined": n(e)) && (t = e);
      return t.params = s(t.search),
      t
   },
   o = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      i = e.search || "",
      n = e.hostname || "",
      a = e.protocol || "";
      t.CurrentParams = h = s(i),
      t.CurrentHost = c = "localhost" == n ? "igame.163.com": n,
      a && (a = -1 != a.indexOf(":") ? a: a + ":"),
      t.CurrentHost = c = a + "//" + c,
      r.CurrentParams = h,
      r.CurrentHost = c
   },
   c = "music.163.com",
   h = "";
   "undefined" != typeof window && o(window.location),
   t.UrlInit = o,
   t.CurrentParams = h,
   t.CurrentHost = c,
   t.getParams = s,
   r.getParams = s,
   r.UrlInit = o,
   t.
default = r
},
function(e, t, i) {
   "use strict";
   function n(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   }
   var s = i(10),
   a = n(s),
   r = i(74),
   o = n(r),
   c = i(96),
   h = i(282);
   n(h); !
   function() {
      var e = window.game = {
         width: 0,
         height: 0,
         asset: null,
         stage: null,
         ticker: null,
         state: null,
         man: null,
         tagTimeout: 0,
         oldTime: null,
         newTime: null,
         collisionSet: [],
         sceneOrder: 0,
         sceneSet: [],
         countLongPress: 0,
         currentScene: null,
         COVER_WIDTH: 4,
         isCreativeEnable: !1,
         isFreeWalk: !1,
         isTouchTop: !1,
         isDisabled: !1,
         isNoShortClick: !1,
         forceMovingX: !1,
         NOTICE_Y: 100,
         init: function() {
            this.asset = new e.Asset,
            this.asset.on("complete",
            function(e) {
               this.asset.off("complete"),
               this.initStage()
            }.bind(this)),
            this.asset.load()
         },
         initStage: function() {
            this.width = 750,
            this.height = 1334,
            this.stage = new Hilo.Stage({
               renderType: "canvas",
               width: this.width,
               height: this.height,
               scaleX: this.scaleX,
               scaleY: this.scaleY
            }),
            this.scale(),
            this.ticker = new Hilo.Ticker(60),
            this.ticker.addTick(Hilo.Tween),
            this.ticker.addTick(this.stage),
            this.ticker.start(!0),
            this.stage.onUpdate = this.onUpdate.bind(this);
            var e = this;
            e.initGuide().then(function() {
               e.initMan(),
               e.gameReady(),
               e.initScene(1, 2)
            }),
            o.
         default.transCamera(),
            o.
         default.animate(),
            (0, a.
         default)("#j-view-game").append(this.stage.canvas),
            (0, a.
         default)(window).on("resize",
            function() {
               this.scale(),
               this.stage.resize(this.width, this.height, !0)
            }.bind(this)),
            (0, a.
         default)(window).on("touchstart", this.onUserStart.bind(this)),
            (0, a.
         default)(window).on("touchend", this.onUserEnd.bind(this))
         },
         scale: function() {
            this.scaleX = window.innerWidth / this.width,
            this.scaleY = this.scaleX,
            this.stage.scaleX = this.scaleX,
            this.stage.scaleY = this.scaleY
         },
         initGuide: function() {
            return this.guide = new c.Guide,
            this.stage.addChild(this.guide),
            this.guide.showIntro()
         },
         initScene: function(t, i) {
            var n = "s" + t,
            s = "s" + i;
            this[n] = new e["S" + t]({
               id: "s" + t
            }).addTo(this.stage),
            this[s] = new e["S" + i]({
               id: "s" + i,
               startX: this[n].width
            }).addTo(this.stage),
            this.sceneSet.push(this[n], this[s]),
            this.sceneOrder = i
         },
         initMan: function() {
            this.man = new e.Man({
               id: "me",
               startX: 110,
               startY: 270
            }).addTo(this.stage, 1),
            this.man.getReady(),
            this.MIDDLE_SCENE = this.width >> 1
         },
         gameReady: function() {
            this.firstTime = 0,
            this.isReady = !0
         },
         recoverGameRecord: function() {
            var e = this.sceneSet[0],
            t = this.sceneSet[1],
            i = !1;
            i = e.onRecoverCurrent(e, t),
            t.onRecoverNext(e, t),
            this.man.isDead = !i,
            this.man.isDead || this.man.blink()
         },
         onUserStart: function(e) {
            this.oldTime = +new Date,
            this.tagTimeout = setTimeout(function() {++this.countLongPress,
               this.man.longPress()
            }.bind(this), 200)
         },
         onUserEnd: function() {
            return clearTimeout(this.tagTimeout),
            this.man.isMovingX = !1,
            this.man.isLongPress = !1,
            this.newTime = +new Date,
            this.newTime - this.oldTime < 200 && (this.man.shortTouch(this.oldTime), this.sceneSet[0] && this.sceneSet[0].checkAudio(), this.sceneSet[1] && this.sceneSet[1].checkAudio()),
            this.oldTime = this.newTime,
            !1
         },
         getCurrentScene: function() {
            if (this.sceneSet) {
               var e = this.sceneSet[0],
               t = this.sceneSet[1],
               i = this.man.x;
               return e && t && (this.currentScene = i >= e.x && i < e.x + e.width ? e.id: t.id),
               this.currentScene
            }
         },
         shift: function() {
            var e = this.sceneSet;
            if (e && !(e.length < 2)) {
               var t = e[0];
               t.dispose(),
               this.stage.removeChildById(t.id),
               e.splice(0, 1),
               ++this.sceneOrder,
               this[t.id] = null
            }
         },
         clearScene: function() {
            var e = this.sceneSet;
            if (e && !(e.length < 2) && (!e[1] || "s11" != e[1].id)) for (var t, i = 1; i <= 11; i++) t = "s" + i,
            this[t] && this[t].x <= -this[t].width && (this[t].dispose(), this.stage.removeChildById(t), e.splice(0, 1), this.sceneOrder++, this[t] = null)
         },
         updateScene: function() {
            var t = this.sceneSet; ! t || t.length >= 2 || void 0 !== e["S" + this.sceneOrder] && (this["s" + this.sceneOrder] = new e["S" + this.sceneOrder]({
               id: "s" + this.sceneOrder,
               startX: t[0].x + t[0].width
            }).addTo(this.stage), this.sceneSet.push(this["s" + this.sceneOrder]))
         },
         onUpdate: function(e) {
            this.isReady && (this.man.isDead && this.recoverGameRecord(), this.getCurrentScene(), this.clearScene(), this.updateScene())
         }
      }
   } ()
},
function(e, t, i) {
   "use strict";
   function n(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   }
   Object.defineProperty(t, "__esModule", {
      value: !0
   }),
   t.Guide = t.MovingSign = void 0;
   var s = i(28),
   a = (n(s), i(18)),
   r = (n(a), i(4)),
   o = Hilo.Class.create({
      Extends: Hilo.Container,
      constructor: function() {
         var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
         o.superclass.constructor.call(this, e),
         this.guide_move_static = new Hilo.Bitmap({
            x: 0,
            y: 0,
            image: game.asset.guide_move_static
         }),
         this.guide_move_mask = new Hilo.View({
            x: this.guide_move_static.x - 30,
            y: this.guide_move_static.y + 14,
            width: e.width || 0,
            height: 5,
            background: "#262231"
         }),
         this.addChild(this.guide_move_static),
         this.addChild(this.guide_move_mask)
      },
      updateWidth: function(e) {
         var t = game.man.x + game.man.manLeft.width - (e + this.x - 37);
         t >= this.guide_move_static.width - 70 ? this.visible = !1 : this.guide_move_mask.width = t
      }
   }),
   c = {
      BOTH: 0,
      CLICK: 1,
      PRESS: 2
   },
   h = Hilo.Class.create({
      Extends: Hilo.Container,
      constructor: function() {
         h.superclass.constructor.call(this);
         var e = game.NOTICE_Y = 100;
         this.guide_blink = new Hilo.Sprite({
            y: e,
            frames: game.asset.guide_blink.getSprite("xxx"),
            paused: !0,
            loop: !1,
            interval: 2
         }),
         this.guide_blink.x = game.width - this.guide_blink.width >> 1,
         this.guide_both = new Hilo.Sprite({
            y: e,
            frames: game.asset.guide.getFrame(0),
            alpha: 0
         }),
         this.guide_both.x = game.width - this.guide_both.width >> 1,
         this.guide_click = new Hilo.Sprite({
            y: e,
            frames: game.asset.guide.getFrame(1),
            alpha: 0,
            paused: !0,
            loop: !1
         }),
         this.guide_click.x = game.width - this.guide_click.width >> 1,
         this.guide_press = new Hilo.Sprite({
            y: e,
            frames: game.asset.guide.getFrame(2),
            alpha: 0,
            paused: !0,
            loop: !1
         }),
         this.guide_press.x = game.width - this.guide_press.width >> 1,
         this.guide_both_new = new Hilo.Sprite({
            y: e,
            frames: game.asset.guide_new.getFrame(0),
            alpha: 0
         }),
         this.guide_both_new.x = game.width - this.guide_both_new.width >> 1,
         this.guide_click_new = new Hilo.Sprite({
            y: e,
            frames: game.asset.guide_new.getFrame(1),
            alpha: 0
         }),
         this.guide_click_new.x = game.width - this.guide_click_new.width >> 1,
         this.guide_press_new = new Hilo.Sprite({
            y: e,
            frames: game.asset.guide_new.getFrame(2),
            alpha: 0
         }),
         this.guide_press_new.x = game.width - this.guide_press_new.width >> 1,
         this.addChild(this.guide_both_new),
         this.addChild(this.guide_click_new),
         this.addChild(this.guide_press_new),
         this.intro = new Hilo.Bitmap({
            image: game.asset.intro
         }),
         this.intro.x = game.width - this.intro.width >> 1,
         this.intro.y = game.height - this.intro.height - 300 >> 1,
         this.fullOpacity = 1,
         this.addChild(this.guide_both),
         this.addChild(this.guide_click),
         this.addChild(this.guide_press)
      },
      setFullOpacity: function(e) {
         this.fullOpacity = e || 1
      },
      switchToClick: function() {
         this.currentGuide != c.CLICK && (this.currentGuide = c.CLICK, this.guide_both.alpha = 0, this.guide_press.alpha = 0, this.guide_click.alpha = this.fullOpacity)
      },
      switchToPress: function() {
         this.currentGuide != c.PRESS && (this.currentGuide = c.PRESS, this.guide_both.alpha = 0, this.guide_click.alpha = 0, this.guide_press.alpha = this.fullOpacity)
      },
      switchToBoth: function(e) { (this.currentGuide != c.BOTH || e) && (this.currentGuide = c.BOTH, r.TweenMax.to([this.guide_press, this.guide_click], .2, {
            alpha: 0
         }), r.TweenMax.to(this.guide_both, .5, {
            alpha: this.fullOpacity,
            delay: 0
         }))
      },
      fadeOut: function() {
         this.currentGuide = null,
         r.TweenMax.to([this.guide_both, this.guide_press, this.guide_click], .3, {
            alpha: 0
         })
      },
      dispose: function() {
         this.removeChild(this.guide_blink),
         this.removeChild(this.guide_both),
         this.removeChild(this.guide_click),
         this.removeChild(this.guide_press)
      },
      blink: function() {
         var e = this;
         this.addChild(this.guide_blink),
         this.guide_blink.play(),
         r.TweenMax.to(this.guide_blink, .3, {
            alpha: 0,
            delay: .2,
            onComplete: function() {
               e.switchToPress()
            }
         })
      },
      zoom: function(e) {
         if (! (this.isTag0 && 0 === e || this.isTag1 && 1 === e)) {
            var t = null;
            0 === e ? (this.toggle2Press(), t = this.guide_press_new, this.isTag0 = !0) : (this.toggle2Click(), t = this.guide_click_new, this.isTag1 = !0),
            this.zoomtl = new r.TimelineMax({
               repeat: 1,
               yoyo: !0
            }),
            this.zoomtl.to(t, .3, {
               scaleX: 1.02,
               scaleY: 1.02
            }).to(t, .3, {
               scaleX: 1,
               scaleY: 1
            })
         }
      },
      stopZoomPress: function() {
         this.isStopZoomPress || (this.isStopZoomPress = !0, this.zoomtl && this.zoomtl.kill(), this.guide_press_new.alpha = 0)
      },
      stopZoomClick: function() {
         this.isStopZoomClick || (this.isStopZoomClick = !0, this.zoomtl && this.zoomtl.kill(), this.guide_click_new.alpha = 0)
      },
      toggle2Click: function() {
         this.currentGuide != c.CLICK && (this.currentGuide = c.CLICK, this.guide_both_new.alpha = 0, this.guide_press_new.alpha = 0, this.guide_click_new.alpha = this.fullOpacity)
      },
      toggle2Press: function() {
         this.currentGuide != c.PRESS && (this.currentGuide = c.PRESS, this.guide_both_new.alpha = 0, this.guide_click_new.alpha = 0, this.guide_press_new.alpha = this.fullOpacity)
      },
      toggle2Both: function(e) { (this.currentGuide != c.BOTH || e) && (this.currentGuide = c.BOTH, r.TweenMax.to([this.guide_press_new, this.guide_click_new], .2, {
            alpha: 0
         }), r.TweenMax.to(this.guide_both_new, .5, {
            alpha: this.fullOpacity,
            delay: 0
         }))
      },
      removeNewGuide: function() {
         this.removeChild(this.guide_press_new),
         this.removeChild(this.guide_both_new),
         this.removeChild(this.guide_click_new)
      },
      showIntro: function() {
         this.addChild(this.intro);
         var e = {
            y: this.intro.y
         },
         t = this;
         return new Promise(function(i) {
            r.TweenMax.to(e, 1, {
               y: 450,
               delay: 4,
               onStart: i,
               onUpdate: function() {
                  t.intro.y = e.y
               },
               onComplete: function() {}
            })
         })
      },
      hideIntro: function() {
         this.isHideIntro || (this.isHideIntro = !0, this.removeChild(this.intro))
      }
   });
   t.MovingSign = o,
   t.Guide = h
},
function(e, t, i) {
   "use strict";
   function n(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   }
   t.__esModule = !0;
   var s = i(286),
   a = n(s),
   r = i(285),
   o = n(r),
   c = "function" == typeof o.
default && "symbol" == typeof a.
default ?
   function(e) {
      return typeof e
   }: function(e) {
      return e && "function" == typeof o.
   default && e.constructor === o.
   default && e !== o.
   default.prototype ? "symbol": typeof e
   };
   t.
default = "function" == typeof o.
default && "symbol" === c(a.
default) ?
   function(e) {
      return void 0 === e ? "undefined": c(e)
   }: function(e) {
      return e && "function" == typeof o.
   default && e.constructor === o.
   default && e !== o.
   default.prototype ? "symbol": void 0 === e ? "undefined": c(e)
   }
},
function(e, t) {
   e.exports = function(e) {
      if (void 0 == e) throw TypeError("Can't call method on  " + e);
      return e
   }
},
function(e, t) {
   e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
},
function(e, t, i) {
   var n = i(38),
   s = i(66),
   a = i(295),
   r = i(56),
   o = function(e, t, i) {
      var c, h, u, l = e & o.F,
      d = e & o.G,
      p = e & o.S,
      f = e & o.P,
      m = e & o.B,
      g = e & o.W,
      v = d ? s: s[t] || (s[t] = {}),
      y = v.prototype,
      x = d ? n: p ? n[t] : (n[t] || {}).prototype;
      d && (i = t);
      for (c in i)(h = !l && x && void 0 !== x[c]) && c in v || (u = h ? x[c] : i[c], v[c] = d && "function" != typeof x[c] ? i[c] : m && h ? a(u, n) : g && x[c] == u ?
      function(e) {
         var t = function(t, i, n) {
            if (this instanceof e) {
               switch (arguments.length) {
               case 0:
                  return new e;
               case 1:
                  return new e(t);
               case 2:
                  return new e(t, i)
               }
               return new e(t, i, n)
            }
            return e.apply(this, arguments)
         };
         return t.prototype = e.prototype,
         t
      } (u) : f && "function" == typeof u ? a(Function.call, u) : u, f && ((v.virtual || (v.virtual = {}))[c] = u, e & o.R && y && !y[c] && r(y, c, u)))
   };
   o.F = 1,
   o.G = 2,
   o.S = 4,
   o.P = 8,
   o.B = 16,
   o.W = 32,
   o.U = 64,
   o.R = 128,
   e.exports = o
},
function(e, t) {
   e.exports = {}
},
function(e, t) {
   e.exports = !0
},
function(e, t) {
   t.f = {}.propertyIsEnumerable
},
function(e, t, i) {
   var n = i(57).f,
   s = i(42),
   a = i(59)("toStringTag");
   e.exports = function(e, t, i) {
      e && !s(e = i ? e: e.prototype, a) && n(e, a, {
         configurable: !0,
         value: t
      })
   }
},
function(e, t, i) {
   var n = i(106)("keys"),
   s = i(78);
   e.exports = function(e) {
      return n[e] || (n[e] = s(e))
   }
},
function(e, t, i) {
   var n = i(38),
   s = n["__core-js_shared__"] || (n["__core-js_shared__"] = {});
   e.exports = function(e) {
      return s[e] || (s[e] = {})
   }
},
function(e, t) {
   var i = Math.ceil,
   n = Math.floor;
   e.exports = function(e) {
      return isNaN(e = +e) ? 0 : (e > 0 ? n: i)(e)
   }
},
function(e, t, i) {
   var n = i(68);
   e.exports = function(e, t) {
      if (!n(e)) return e;
      var i, s;
      if (t && "function" == typeof(i = e.toString) && !n(s = i.call(e))) return s;
      if ("function" == typeof(i = e.valueOf) && !n(s = i.call(e))) return s;
      if (!t && "function" == typeof(i = e.toString) && !n(s = i.call(e))) return s;
      throw TypeError("Can't convert object to primitive value")
   }
},
function(e, t, i) {
   var n = i(38),
   s = i(66),
   a = i(102),
   r = i(110),
   o = i(57).f;
   e.exports = function(e) {
      var t = s.Symbol || (s.Symbol = a ? {}: n.Symbol || {});
      "_" == e.charAt(0) || e in t || o(t, e, {
         value: r.f(e)
      })
   }
},
function(e, t, i) {
   t.f = i(59)
},
, , , , , , , , , , , , , , , , , , , , , , , , , , ,
function(e, t) {
   function i() {
      throw new Error("setTimeout has not been defined")
   }
   function n() {
      throw new Error("clearTimeout has not been defined")
   }
   function s(e) {
      if (u === setTimeout) return setTimeout(e, 0);
      if ((u === i || !u) && setTimeout) return u = setTimeout,
      setTimeout(e, 0);
      try {
         return u(e, 0)
      } catch(t) {
         try {
            return u.call(null, e, 0)
         } catch(t) {
            return u.call(this, e, 0)
         }
      }
   }
   function a(e) {
      if (l === clearTimeout) return clearTimeout(e);
      if ((l === n || !l) && clearTimeout) return l = clearTimeout,
      clearTimeout(e);
      try {
         return l(e)
      } catch(t) {
         try {
            return l.call(null, e)
         } catch(t) {
            return l.call(this, e)
         }
      }
   }
   function r() {
      m && p && (m = !1, p.length ? f = p.concat(f) : g = -1, f.length && o())
   }
   function o() {
      if (!m) {
         var e = s(r);
         m = !0;
         for (var t = f.length; t;) {
            for (p = f, f = []; ++g < t;) p && p[g].run();
            g = -1,
            t = f.length
         }
         p = null,
         m = !1,
         a(e)
      }
   }
   function c(e, t) {
      this.fun = e,
      this.array = t
   }
   function h() {}
   var u, l, d = e.exports = {}; !
   function() {
      try {
         u = "function" == typeof setTimeout ? setTimeout: i
      } catch(e) {
         u = i
      }
      try {
         l = "function" == typeof clearTimeout ? clearTimeout: n
      } catch(e) {
         l = n
      }
   } ();
   var p, f = [],
   m = !1,
   g = -1;
   d.nextTick = function(e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
      f.push(new c(e, t)),
      1 !== f.length || m || s(o)
   },
   c.prototype.run = function() {
      this.fun.apply(null, this.array)
   },
   d.title = "browser",
   d.browser = !0,
   d.env = {},
   d.argv = [],
   d.version = "",
   d.versions = {},
   d.on = h,
   d.addListener = h,
   d.once = h,
   d.off = h,
   d.removeListener = h,
   d.removeAllListeners = h,
   d.emit = h,
   d.prependListener = h,
   d.prependOnceListener = h,
   d.listeners = function(e) {
      return []
   },
   d.binding = function(e) {
      throw new Error("process.binding is not supported")
   },
   d.cwd = function() {
      return "/"
   },
   d.chdir = function(e) {
      throw new Error("process.chdir is not supported")
   },
   d.umask = function() {
      return 0
   }
},
function(e, t, i) {
   "use strict";
   function n(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
   }
   e.exports = function(e, t, i, a) {
      t = t || "&",
      i = i || "=";
      var r = {};
      if ("string" != typeof e || 0 === e.length) return r;
      var o = /\+/g;
      e = e.split(t);
      var c = 1e3;
      a && "number" == typeof a.maxKeys && (c = a.maxKeys);
      var h = e.length;
      c > 0 && h > c && (h = c);
      for (var u = 0; u < h; ++u) {
         var l, d, p, f, m = e[u].replace(o, "%20"),
         g = m.indexOf(i);
         g >= 0 ? (l = m.substr(0, g), d = m.substr(g + 1)) : (l = m, d = ""),
         p = decodeURIComponent(l),
         f = decodeURIComponent(d),
         n(r, p) ? s(r[p]) ? r[p].push(f) : r[p] = [r[p], f] : r[p] = f
      }
      return r
   };
   var s = Array.isArray ||
   function(e) {
      return "[object Array]" === Object.prototype.toString.call(e)
   }
},
function(e, t, i) {
   "use strict";
   function n(e, t) {
      if (e.map) return e.map(t);
      for (var i = [], n = 0; n < e.length; n++) i.push(t(e[n], n));
      return i
   }
   var s = function(e) {
      switch (typeof e) {
      case "string":
         return e;
      case "boolean":
         return e ? "true": "false";
      case "number":
         return isFinite(e) ? e: "";
      default:
         return ""
      }
   };
   e.exports = function(e, t, i, o) {
      return t = t || "&",
      i = i || "=",
      null === e && (e = void 0),
      "object" == typeof e ? n(r(e),
      function(r) {
         var o = encodeURIComponent(s(r)) + i;
         return a(e[r]) ? n(e[r],
         function(e) {
            return o + encodeURIComponent(s(e))
         }).join(t) : o + encodeURIComponent(s(e[r]))
      }).join(t) : o ? encodeURIComponent(s(o)) + i + encodeURIComponent(s(e)) : ""
   };
   var a = Array.isArray ||
   function(e) {
      return "[object Array]" === Object.prototype.toString.call(e)
   },
   r = Object.keys ||
   function(e) {
      var t = [];
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.push(i);
      return t
   }
},
function(e, t, i) { (function(e, t) { !
      function(e, i) {
         "use strict";
         function n(e) {
            "function" != typeof e && (e = new Function("" + e));
            for (var t = new Array(arguments.length - 1), i = 0; i < t.length; i++) t[i] = arguments[i + 1];
            var n = {
               callback: e,
               args: t
            };
            return h[c] = n,
            o(c),
            c++
         }
         function s(e) {
            delete h[e]
         }
         function a(e) {
            var t = e.callback,
            n = e.args;
            switch (n.length) {
            case 0:
               t();
               break;
            case 1:
               t(n[0]);
               break;
            case 2:
               t(n[0], n[1]);
               break;
            case 3:
               t(n[0], n[1], n[2]);
               break;
            default:
               t.apply(i, n)
            }
         }
         function r(e) {
            if (u) setTimeout(r, 0, e);
            else {
               var t = h[e];
               if (t) {
                  u = !0;
                  try {
                     a(t)
                  } finally {
                     s(e),
                     u = !1
                  }
               }
            }
         }
         if (!e.setImmediate) {
            var o, c = 1,
            h = {},
            u = !1,
            l = e.document,
            d = Object.getPrototypeOf && Object.getPrototypeOf(e);
            d = d && d.setTimeout ? d: e,
            "[object process]" === {}.toString.call(e.process) ?
            function() {
               o = function(e) {
                  t.nextTick(function() {
                     r(e)
                  })
               }
            } () : function() {
               if (e.postMessage && !e.importScripts) {
                  var t = !0,
                  i = e.onmessage;
                  return e.onmessage = function() {
                     t = !1
                  },
                  e.postMessage("", "*"),
                  e.onmessage = i,
                  t
               }
            } () ?
            function() {
               var t = "setImmediate$" + Math.random() + "$",
               i = function(i) {
                  i.source === e && "string" == typeof i.data && 0 === i.data.indexOf(t) && r( + i.data.slice(t.length))
               };
               e.addEventListener ? e.addEventListener("message", i, !1) : e.attachEvent("onmessage", i),
               o = function(i) {
                  e.postMessage(t + i, "*")
               }
            } () : e.MessageChannel ?
            function() {
               var e = new MessageChannel;
               e.port1.onmessage = function(e) {
                  r(e.data)
               },
               o = function(t) {
                  e.port2.postMessage(t)
               }
            } () : l && "onreadystatechange" in l.createElement("script") ?
            function() {
               var e = l.documentElement;
               o = function(t) {
                  var i = l.createElement("script");
                  i.onreadystatechange = function() {
                     r(t),
                     i.onreadystatechange = null,
                     e.removeChild(i),
                     i = null
                  },
                  e.appendChild(i)
               }
            } () : function() {
               o = function(e) {
                  setTimeout(r, 0, e)
               }
            } (),
            d.setImmediate = n,
            d.clearImmediate = s
         }
      } ("undefined" == typeof self ? void 0 === e ? this: e: self)
   }).call(t, i(64), i(138))
},
function(e, t) { !
   function(t, i) {
      e.exports = function(e, t) {
         function i(t, i, n) {
            e.WeixinJSBridge ? WeixinJSBridge.invoke(t, s(i),
            function(e) {
               o(t, e, n)
            }) : u(t, n)
         }
         function n(t, i, n) {
            e.WeixinJSBridge ? WeixinJSBridge.on(t,
            function(e) {
               n && n.trigger && n.trigger(e),
               o(t, e, i)
            }) : n ? u(t, n) : u(t, i)
         }
         function s(e) {
            return e = e || {},
            e.appId = H.appId,
            e.verifyAppId = H.appId,
            e.verifySignType = "sha1",
            e.verifyTimestamp = H.timestamp + "",
            e.verifyNonceStr = H.nonceStr,
            e.verifySignature = H.signature,
            e
         }
         function a(e) {
            return {
               timeStamp: e.timestamp + "",
               nonceStr: e.nonceStr,
               package: e.package,
               paySign: e.paySign,
               signType: e.signType || "SHA1"
            }
         }
         function r(e) {
            return e.postalCode = e.addressPostalCode,
            delete e.addressPostalCode,
            e.provinceName = e.proviceFirstStageName,
            delete e.proviceFirstStageName,
            e.cityName = e.addressCitySecondStageName,
            delete e.addressCitySecondStageName,
            e.countryName = e.addressCountiesThirdStageName,
            delete e.addressCountiesThirdStageName,
            e.detailInfo = e.addressDetailInfo,
            delete e.addressDetailInfo,
            e
         }
         function o(e, t, i) {
            "openEnterpriseChat" == e && (t.errCode = t.err_code),
            delete t.err_code,
            delete t.err_desc,
            delete t.err_detail;
            var n = t.errMsg;
            n || (n = t.err_msg, delete t.err_msg, n = c(e, n), t.errMsg = n),
            i = i || {},
            i._complete && (i._complete(t), delete i._complete),
            n = t.errMsg || "",
            H.debug && !i.isInnerInvoke && alert(JSON.stringify(t));
            var s = n.indexOf(":");
            switch (n.substring(s + 1)) {
            case "ok":
               i.success && i.success(t);
               break;
            case "cancel":
               i.cancel && i.cancel(t);
               break;
            default:
               i.fail && i.fail(t)
            }
            i.complete && i.complete(t)
         }
         function c(e, t) {
            var i = e,
            n = g[i];
            n && (i = n);
            var s = "ok";
            if (t) {
               var a = t.indexOf(":");
               s = t.substring(a + 1),
               "confirm" == s && (s = "ok"),
               "failed" == s && (s = "fail"),
               -1 != s.indexOf("failed_") && (s = s.substring(7)),
               -1 != s.indexOf("fail_") && (s = s.substring(5)),
               s = s.replace(/_/g, " "),
               s = s.toLowerCase(),
               ("access denied" == s || "no permission to execute" == s) && (s = "permission denied"),
               "config" == i && "function not exist" == s && (s = "ok"),
               "" == s && (s = "fail")
            }
            return t = i + ":" + s
         }
         function h(e) {
            if (e) {
               for (var t = 0,
               i = e.length; i > t; ++t) {
                  var n = e[t],
                  s = m[n];
                  s && (e[t] = s)
               }
               return e
            }
         }
         function u(e, t) {
            if (! (!H.debug || t && t.isInnerInvoke)) {
               var i = g[e];
               i && (e = i),
               t && t._complete && delete t._complete,
               console.log('"' + e + '",', t || "")
            }
         }
         function l(e) {
            if (! (_ || b || H.debug || "6.0.2" > T || E.systemType < 0)) {
               var t = new Image;
               E.appId = H.appId,
               E.initTime = M.initEndTime - M.initStartTime,
               E.preVerifyTime = M.preVerifyEndTime - M.preVerifyStartTime,
               F.getNetworkType({
                  isInnerInvoke: !0,
                  success: function(e) {
                     E.networkType = e.networkType;
                     var i = "https://open.weixin.qq.com/sdk/report?v=" + E.version + "&o=" + E.isPreVerifyOk + "&s=" + E.systemType + "&c=" + E.clientVersion + "&a=" + E.appId + "&n=" + E.networkType + "&i=" + E.initTime + "&p=" + E.preVerifyTime + "&u=" + E.url;
                     t.src = i
                  }
               })
            }
         }
         function d() {
            return (new Date).getTime()
         }
         function p(t) {
            k && (e.WeixinJSBridge ? t() : v.addEventListener && v.addEventListener("WeixinJSBridgeReady", t, !1))
         }
         function f() {
            F.invoke || (F.invoke = function(t, i, n) {
               e.WeixinJSBridge && WeixinJSBridge.invoke(t, s(i), n)
            },
            F.on = function(t, i) {
               e.WeixinJSBridge && WeixinJSBridge.on(t, i)
            })
         }
         if (!e.jWeixin) {
            var m = {
               config: "preVerifyJSAPI",
               onMenuShareTimeline: "menu:share:timeline",
               onMenuShareAppMessage: "menu:share:appmessage",
               onMenuShareQQ: "menu:share:qq",
               onMenuShareWeibo: "menu:share:weiboApp",
               onMenuShareQZone: "menu:share:QZone",
               previewImage: "imagePreview",
               getLocation: "geoLocation",
               openProductSpecificView: "openProductViewWithPid",
               addCard: "batchAddCard",
               openCard: "batchViewCard",
               chooseWXPay: "getBrandWCPayRequest",
               openEnterpriseRedPacket: "getRecevieBizHongBaoRequest",
               startSearchBeacons: "startMonitoringBeacons",
               stopSearchBeacons: "stopMonitoringBeacons",
               onSearchBeacons: "onBeaconsInRange",
               consumeAndShareCard: "consumedShareCard",
               openAddress: "editAddress"
            },
            g = function() {
               var e = {};
               for (var t in m) e[m[t]] = t;
               return e
            } (),
            v = e.document,
            y = v.title,
            x = navigator.userAgent.toLowerCase(),
            w = navigator.platform.toLowerCase(),
            _ = !(!w.match("mac") && !w.match("win")),
            b = -1 != x.indexOf("wxdebugger"),
            k = -1 != x.indexOf("micromessenger"),
            S = -1 != x.indexOf("android"),
            C = -1 != x.indexOf("iphone") || -1 != x.indexOf("ipad"),
            T = function() {
               var e = x.match(/micromessenger\/(\d+\.\d+\.\d+)/) || x.match(/micromessenger\/(\d+\.\d+)/);
               return e ? e[1] : ""
            } (),
            M = {
               initStartTime: d(),
               initEndTime: 0,
               preVerifyStartTime: 0,
               preVerifyEndTime: 0
            },
            E = {
               version: 1,
               appId: "",
               initTime: 0,
               preVerifyTime: 0,
               networkType: "",
               isPreVerifyOk: 1,
               systemType: C ? 1 : S ? 2 : -1,
               clientVersion: T,
               url: encodeURIComponent(location.href)
            },
            H = {},
            R = {
               _completes: []
            },
            O = {
               state: 0,
               data: {}
            };
            p(function() {
               M.initEndTime = d()
            });
            var P = !1,
            A = [],
            F = {
               config: function(e) {
                  H = e,
                  u("config", e);
                  var t = !1 !== H.check;
                  p(function() {
                     if (t) i(m.config, {
                        verifyJsApiList: h(H.jsApiList)
                     },
                     function() {
                        R._complete = function(e) {
                           M.preVerifyEndTime = d(),
                           O.state = 1,
                           O.data = e
                        },
                        R.success = function(e) {
                           E.isPreVerifyOk = 0
                        },
                        R.fail = function(e) {
                           R._fail ? R._fail(e) : O.state = -1
                        };
                        var e = R._completes;
                        return e.push(function() {
                           l()
                        }),
                        R.complete = function(t) {
                           for (var i = 0,
                           n = e.length; n > i; ++i) e[i]();
                           R._completes = []
                        },
                        R
                     } ()),
                     M.preVerifyStartTime = d();
                     else {
                        O.state = 1;
                        for (var e = R._completes,
                        n = 0,
                        s = e.length; s > n; ++n) e[n]();
                        R._completes = []
                     }
                  }),
                  H.beta && f()
               },
               ready: function(e) {
                  0 != O.state ? e() : (R._completes.push(e), !k && H.debug && e())
               },
               error: function(e) {
                  "6.0.2" > T || ( - 1 == O.state ? e(O.data) : R._fail = e)
               },
               checkJsApi: function(e) {
                  var t = function(e) {
                     var t = e.checkResult;
                     for (var i in t) {
                        var n = g[i];
                        n && (t[n] = t[i], delete t[i])
                     }
                     return e
                  };
                  i("checkJsApi", {
                     jsApiList: h(e.jsApiList)
                  },
                  function() {
                     return e._complete = function(e) {
                        if (S) {
                           var i = e.checkResult;
                           i && (e.checkResult = JSON.parse(i))
                        }
                        e = t(e)
                     },
                     e
                  } ())
               },
               onMenuShareTimeline: function(e) {
                  n(m.onMenuShareTimeline, {
                     complete: function() {
                        i("shareTimeline", {
                           title: e.title || y,
                           desc: e.title || y,
                           img_url: e.imgUrl || "",
                           link: e.link || location.href,
                           type: e.type || "link",
                           data_url: e.dataUrl || ""
                        },
                        e)
                     }
                  },
                  e)
               },
               onMenuShareAppMessage: function(e) {
                  n(m.onMenuShareAppMessage, {
                     complete: function() {
                        i("sendAppMessage", {
                           title: e.title || y,
                           desc: e.desc || "",
                           link: e.link || location.href,
                           img_url: e.imgUrl || "",
                           type: e.type || "link",
                           data_url: e.dataUrl || ""
                        },
                        e)
                     }
                  },
                  e)
               },
               onMenuShareQQ: function(e) {
                  n(m.onMenuShareQQ, {
                     complete: function() {
                        i("shareQQ", {
                           title: e.title || y,
                           desc: e.desc || "",
                           img_url: e.imgUrl || "",
                           link: e.link || location.href
                        },
                        e)
                     }
                  },
                  e)
               },
               onMenuShareWeibo: function(e) {
                  n(m.onMenuShareWeibo, {
                     complete: function() {
                        i("shareWeiboApp", {
                           title: e.title || y,
                           desc: e.desc || "",
                           img_url: e.imgUrl || "",
                           link: e.link || location.href
                        },
                        e)
                     }
                  },
                  e)
               },
               onMenuShareQZone: function(e) {
                  n(m.onMenuShareQZone, {
                     complete: function() {
                        i("shareQZone", {
                           title: e.title || y,
                           desc: e.desc || "",
                           img_url: e.imgUrl || "",
                           link: e.link || location.href
                        },
                        e)
                     }
                  },
                  e)
               },
               startRecord: function(e) {
                  i("startRecord", {},
                  e)
               },
               stopRecord: function(e) {
                  i("stopRecord", {},
                  e)
               },
               onVoiceRecordEnd: function(e) {
                  n("onVoiceRecordEnd", e)
               },
               playVoice: function(e) {
                  i("playVoice", {
                     localId: e.localId
                  },
                  e)
               },
               pauseVoice: function(e) {
                  i("pauseVoice", {
                     localId: e.localId
                  },
                  e)
               },
               stopVoice: function(e) {
                  i("stopVoice", {
                     localId: e.localId
                  },
                  e)
               },
               onVoicePlayEnd: function(e) {
                  n("onVoicePlayEnd", e)
               },
               uploadVoice: function(e) {
                  i("uploadVoice", {
                     localId: e.localId,
                     isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                  },
                  e)
               },
               downloadVoice: function(e) {
                  i("downloadVoice", {
                     serverId: e.serverId,
                     isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                  },
                  e)
               },
               translateVoice: function(e) {
                  i("translateVoice", {
                     localId: e.localId,
                     isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                  },
                  e)
               },
               chooseImage: function(e) {
                  i("chooseImage", {
                     scene: "1|2",
                     count: e.count || 9,
                     sizeType: e.sizeType || ["original", "compressed"],
                     sourceType: e.sourceType || ["album", "camera"]
                  },
                  function() {
                     return e._complete = function(e) {
                        if (S) {
                           var t = e.localIds;
                           t && (e.localIds = JSON.parse(t))
                        }
                     },
                     e
                  } ())
               },
               getLocation: function(e) {},
               previewImage: function(e) {
                  i(m.previewImage, {
                     current: e.current,
                     urls: e.urls
                  },
                  e)
               },
               uploadImage: function(e) {
                  i("uploadImage", {
                     localId: e.localId,
                     isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                  },
                  e)
               },
               downloadImage: function(e) {
                  i("downloadImage", {
                     serverId: e.serverId,
                     isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                  },
                  e)
               },
               getLocalImgData: function(e) { ! 1 === P ? (P = !0, i("getLocalImgData", {
                     localId: e.localId
                  },
                  function() {
                     return e._complete = function(e) {
                        if (P = !1, A.length > 0) {
                           var t = A.shift();
                           wx.getLocalImgData(t)
                        }
                     },
                     e
                  } ())) : A.push(e)
               },
               getNetworkType: function(e) {
                  var t = function(e) {
                     var t = e.errMsg;
                     e.errMsg = "getNetworkType:ok";
                     var i = e.subtype;
                     if (delete e.subtype, i) e.networkType = i;
                     else {
                        var n = t.indexOf(":"),
                        s = t.substring(n + 1);
                        switch (s) {
                        case "wifi":
                        case "edge":
                        case "wwan":
                           e.networkType = s;
                           break;
                        default:
                           e.errMsg = "getNetworkType:fail"
                        }
                     }
                     return e
                  };
                  i("getNetworkType", {},
                  function() {
                     return e._complete = function(e) {
                        e = t(e)
                     },
                     e
                  } ())
               },
               openLocation: function(e) {
                  i("openLocation", {
                     latitude: e.latitude,
                     longitude: e.longitude,
                     name: e.name || "",
                     address: e.address || "",
                     scale: e.scale || 28,
                     infoUrl: e.infoUrl || ""
                  },
                  e)
               },
               getLocation: function(e) {
                  e = e || {},
                  i(m.getLocation, {
                     type: e.type || "wgs84"
                  },
                  function() {
                     return e._complete = function(e) {
                        delete e.type
                     },
                     e
                  } ())
               },
               hideOptionMenu: function(e) {
                  i("hideOptionMenu", {},
                  e)
               },
               showOptionMenu: function(e) {
                  i("showOptionMenu", {},
                  e)
               },
               closeWindow: function(e) {
                  e = e || {},
                  i("closeWindow", {},
                  e)
               },
               hideMenuItems: function(e) {
                  i("hideMenuItems", {
                     menuList: e.menuList
                  },
                  e)
               },
               showMenuItems: function(e) {
                  i("showMenuItems", {
                     menuList: e.menuList
                  },
                  e)
               },
               hideAllNonBaseMenuItem: function(e) {
                  i("hideAllNonBaseMenuItem", {},
                  e)
               },
               showAllNonBaseMenuItem: function(e) {
                  i("showAllNonBaseMenuItem", {},
                  e)
               },
               scanQRCode: function(e) {
                  e = e || {},
                  i("scanQRCode", {
                     needResult: e.needResult || 0,
                     scanType: e.scanType || ["qrCode", "barCode"]
                  },
                  function() {
                     return e._complete = function(e) {
                        if (C) {
                           var t = e.resultStr;
                           if (t) {
                              var i = JSON.parse(t);
                              e.resultStr = i && i.scan_code && i.scan_code.scan_result
                           }
                        }
                     },
                     e
                  } ())
               },
               openAddress: function(e) {
                  i(m.openAddress, {},
                  function() {
                     return e._complete = function(e) {
                        e = r(e)
                     },
                     e
                  } ())
               },
               openProductSpecificView: function(e) {
                  i(m.openProductSpecificView, {
                     pid: e.productId,
                     view_type: e.viewType || 0,
                     ext_info: e.extInfo
                  },
                  e)
               },
               addCard: function(e) {
                  for (var t = e.cardList,
                  n = [], s = 0, a = t.length; a > s; ++s) {
                     var r = t[s],
                     o = {
                        card_id: r.cardId,
                        card_ext: r.cardExt
                     };
                     n.push(o)
                  }
                  i(m.addCard, {
                     card_list: n
                  },
                  function() {
                     return e._complete = function(e) {
                        var t = e.card_list;
                        if (t) {
                           t = JSON.parse(t);
                           for (var i = 0,
                           n = t.length; n > i; ++i) {
                              var s = t[i];
                              s.cardId = s.card_id,
                              s.cardExt = s.card_ext,
                              s.isSuccess = !!s.is_succ,
                              delete s.card_id,
                              delete s.card_ext,
                              delete s.is_succ
                           }
                           e.cardList = t,
                           delete e.card_list
                        }
                     },
                     e
                  } ())
               },
               chooseCard: function(e) {
                  i("chooseCard", {
                     app_id: H.appId,
                     location_id: e.shopId || "",
                     sign_type: e.signType || "SHA1",
                     card_id: e.cardId || "",
                     card_type: e.cardType || "",
                     card_sign: e.cardSign,
                     time_stamp: e.timestamp + "",
                     nonce_str: e.nonceStr
                  },
                  function() {
                     return e._complete = function(e) {
                        e.cardList = e.choose_card_info,
                        delete e.choose_card_info
                     },
                     e
                  } ())
               },
               openCard: function(e) {
                  for (var t = e.cardList,
                  n = [], s = 0, a = t.length; a > s; ++s) {
                     var r = t[s],
                     o = {
                        card_id: r.cardId,
                        code: r.code
                     };
                     n.push(o)
                  }
                  i(m.openCard, {
                     card_list: n
                  },
                  e)
               },
               consumeAndShareCard: function(e) {
                  i(m.consumeAndShareCard, {
                     consumedCardId: e.cardId,
                     consumedCode: e.code
                  },
                  e)
               },
               chooseWXPay: function(e) {
                  i(m.chooseWXPay, a(e), e)
               },
               openEnterpriseRedPacket: function(e) {
                  i(m.openEnterpriseRedPacket, a(e), e)
               },
               startSearchBeacons: function(e) {
                  i(m.startSearchBeacons, {
                     ticket: e.ticket
                  },
                  e)
               },
               stopSearchBeacons: function(e) {
                  i(m.stopSearchBeacons, {},
                  e)
               },
               onSearchBeacons: function(e) {
                  n(m.onSearchBeacons, e)
               },
               openEnterpriseChat: function(e) {
                  i("openEnterpriseChat", {
                     useridlist: e.userIds,
                     chatname: e.groupName
                  },
                  e)
               }
            },
            j = 1,
            D = {};
            return v.addEventListener("error",
            function(e) {
               if (!S) {
                  var t = e.target,
                  i = t.tagName,
                  n = t.src;
                  if ("IMG" == i || "VIDEO" == i || "AUDIO" == i || "SOURCE" == i) {
                     if ( - 1 != n.indexOf("wxlocalresource://")) {
                        e.preventDefault(),
                        e.stopPropagation();
                        var s = t["wx-id"];
                        if (s || (s = j++, t["wx-id"] = s), D[s]) return;
                        D[s] = !0,
                        wx.getLocalImgData({
                           localId: n,
                           success: function(e) {
                              t.src = e.localData
                           }
                        })
                     }
                  }
               }
            },
            !0),
            v.addEventListener("load",
            function(e) {
               if (!S) {
                  var t = e.target,
                  i = t.tagName;
                  if (t.src, "IMG" == i || "VIDEO" == i || "AUDIO" == i || "SOURCE" == i) {
                     var n = t["wx-id"];
                     n && (D[n] = !1)
                  }
               }
            },
            !0),
            t && (e.wx = e.jWeixin = F),
            F
         }
      } (t)
   } (window)
},
, ,
function(e, t, i) {
   e.exports = {
   default:
      i(289),
      __esModule: !0
   }
},
function(e, t) {
   var i = {}.toString;
   e.exports = function(e) {
      return i.call(e).slice(8, -1)
   }
},
function(e, t, i) {
   var n = i(68),
   s = i(38).document,
   a = n(s) && n(s.createElement);
   e.exports = function(e) {
      return a ? s.createElement(e) : {}
   }
},
function(e, t, i) {
   e.exports = !i(55) && !i(67)(function() {
      return 7 != Object.defineProperty(i(147)("div"), "a", {
         get: function() {
            return 7
         }
      }).a
   })
},
function(e, t, i) {
   "use strict";
   var n = i(102),
   s = i(100),
   a = i(154),
   r = i(56),
   o = i(42),
   c = i(101),
   h = i(300),
   u = i(104),
   l = i(306),
   d = i(59)("iterator"),
   p = !([].keys && "next" in [].keys()),
   f = function() {
      return this
   };
   e.exports = function(e, t, i, m, g, v, y) {
      h(i, t, m);
      var x, w, _, b = function(e) {
         if (!p && e in T) return T[e];
         switch (e) {
         case "keys":
         case "values":
            return function() {
               return new i(this, e)
            }
         }
         return function() {
            return new i(this, e)
         }
      },
      k = t + " Iterator",
      S = "values" == g,
      C = !1,
      T = e.prototype,
      M = T[d] || T["@@iterator"] || g && T[g],
      E = !p && M || b(g),
      H = g ? S ? b("entries") : E: void 0,
      R = "Array" == t ? T.entries || M: M;
      if (R && (_ = l(R.call(new e))) !== Object.prototype && _.next && (u(_, k, !0), n || o(_, d) || r(_, d, f)), S && M && "values" !== M.name && (C = !0, E = function() {
         return M.call(this)
      }), n && !y || !p && !C && T[d] || r(T, d, E), c[t] = E, c[k] = f, g) if (x = {
         values: S ? E: b("values"),
         keys: v ? E: b("keys"),
         entries: H
      },
      y) for (w in x) w in T || a(T, w, x[w]);
      else s(s.P + s.F * (p || C), t, x);
      return x
   }
},
function(e, t, i) {
   var n = i(75),
   s = i(303),
   a = i(99),
   r = i(105)("IE_PROTO"),
   o = function() {},
   c = function() {
      var e, t = i(147)("iframe"),
      n = a.length;
      for (t.style.display = "none", i(297).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write("<script>document.F=Object<\/script>"), e.close(), c = e.F; n--;) delete c.prototype[a[n]];
      return c()
   };
   e.exports = Object.create ||
   function(e, t) {
      var i;
      return null !== e ? (o.prototype = n(e), i = new o, o.prototype = null, i[r] = e) : i = c(),
      void 0 === t ? i: s(i, t)
   }
},
function(e, t, i) {
   var n = i(153),
   s = i(99).concat("length", "prototype");
   t.f = Object.getOwnPropertyNames ||
   function(e) {
      return n(e, s)
   }
},
function(e, t) {
   t.f = Object.getOwnPropertySymbols
},
function(e, t, i) {
   var n = i(42),
   s = i(58),
   a = i(294)(!1),
   r = i(105)("IE_PROTO");
   e.exports = function(e, t) {
      var i, o = s(e),
      c = 0,
      h = [];
      for (i in o) i != r && n(o, i) && h.push(i);
      for (; t.length > c;) n(o, i = t[c++]) && (~a(h, i) || h.push(i));
      return h
   }
},
function(e, t, i) {
   e.exports = i(56)
},
function(e, t, i) {
   var n = i(98);
   e.exports = function(e) {
      return Object(n(e))
   }
},
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/text-xianshi-2.png?942b1677d6c117225774de2127fd4e13"
},
, , , , , , , , , , , , , , , ,
function(e, t, i) {
   "use strict";
   function n(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   }
   Object.defineProperty(t, "__esModule", {
      value: !0
   });
   var s = i(97),
   a = n(s),
   r = i(245),
   o = n(r),
   c = i(246),
   h = n(c),
   u = i(244),
   l = n(u),
   d = "http://a.app.qq.com/o/simple.jsp?pkgname=com.netease.cloudmusic",
   p = "//music.163.com/api/android/download/latest2",
   f = function() {};
   "undefined" != typeof window && (f = i(679), h.
default.params.market && (p = p + "?market=" + h.
default.params.market));
   var m = ["micromessenger", "qq", "weibo", "douban", "renren"],
   g = {
      topic: "subject",
      activity: "topic"
   },
   v = /igame\.163\.com/,
   y = function(e) {
      return m.indexOf(e) > -1
   },
   x = function(e) {
      if ("string" != typeof e) return "";
      var t = e;
      return "orpheus://" !== t.substring(0, 10) && (t = "orpheus://" + t),
      t
   },
   w = function(e) {
      var t = void 0;
      return function() {
         return t || (t = e())
      }
   } (function() {
      var e = window.location,
      t = e.hostname;
      t = v.test(t) ? "igame.163.com": "music.163.com";
      var i = e.protocol + "//" + t + "/m/download",
      n = o.
   default.getPlatform2Str(),
      s = o.
   default.getClient(),
      a = o.
   default.isWP10(),
      r = o.
   default.getDevice();
      return "ios" === n ? i = "pad" === r ? "https://itunes.apple.com/cn/app/wang-yi-yun-yin-lehd/id871041757?l=ch": "micromessenger" === s || "qq" === s ? d: "https://itunes.apple.com/app/id590338362": "wp" === n ? i = a ? "https://www.microsoft.com/store/apps/9nblggh6g0jf": "http://www.windowsphone.com/s?appid=db9dbdaa-464e-4370-a078-800fc7983d39": "micromessenger" === s || "qq" === s ? i = "http://a.app.qq.com/o/simple.jsp?pkgname=com.netease.cloudmusic&co-channel=87999": "android" === n && (i = p),
      i
   }),
   _ = function(e) {
      if (!e) return "";
      if ("undefined" == typeof window) return e;
      var t = x(e),
      i = window.location,
      n = i.search,
      s = i.hash,
      a = (0, c.parse)(n),
      r = (0, c.parse)(s && s.split("?")[1]),
      h = [];
      if (a.userid && -1 === t.indexOf("shareuserid=") && h.push("shareuserid=" + a.userid), a.yyfrom && -1 === t.indexOf("yyfrom=") && h.push("yyfrom=" + a.yyfrom), -1 === t.indexOf("thirdfrom=")) {
         var u = o.
      default.getClient(),
         l = o.
      default.fetchLogByClient(u);
         l ? h.push("thirdfrom=" + l) : r.thirdfrom && h.push("thirdfrom=" + r.thirdfrom)
      }
      var d = t.indexOf("?") > 0 ? "&": "?";
      return h.length > 0 ? "" + t + d + h.join("&") : t
   },
   b = /^\d+$/,
   k = function(e, t) {
      var i = void 0;
      i = "openurl" === e ? o.
   default.isInNEMapp() ? "activity": "openurl": g[e] || e;
      var n = String(t),
      s = b.test(n) ? "/": "?";
      return n = "" !== n ? "" + s + t: "",
      "orpheus://" + i + n
   },
   S = /^orpheus:\/\//,
   C = ["blur", "pagehide", "beforeunload"],
   T = function() {
      var e = [],
      t = null,
      i = null;
      if ("undefined" != typeof window) {
         var n = function t() {
            e.forEach(function(e) {
               window.clearTimeout(e)
            }),
            e = [],
            C.forEach(function(e) {
               window.removeEventListener(e, t, !1)
            })
         };
         C.forEach(function(e) {
            window.addEventListener(e, n, !1)
         })
      }
      return function(n, s) {
         var a = n;
         if (a) if (a = _(a), o.
      default.isAndroidChrome()) {
            var r = a;
            S.test(r) && (r = r.substring(10));
            var c = "";
            "string" == typeof s && s.length > 0 && (c = ";S.browser_fallback_url=" + encodeURIComponent(s));
            var h = "intent://" + r + "/#Intent;scheme=orpheus;package=com.netease.cloudmusic" + c + ";end";
            location.href = h
         } else window.setTimeout(function() {
            "string" == typeof s && s.length > 0 && e.push(window.setTimeout(function() { + new Date - t < 3100 && (window.top.location.href = s)
            },
            3e3)),
            t = +new Date,
            o.
         default.getIosLargeVersion() >= 9 ? location.href = a: (i = document.createElement("iframe"), i.src = a, i.style.display = "none", document.body.appendChild(i), window.setTimeout(function() {
               i && (document.body.removeChild(i), i = null)
            },
            0))
         },
         0)
      }
   } (),
   M = function(e, t, i, n) {
      var s = _(e),
      a = window.location,
      r = v.test(a.host) ? "m.igame.163.com": "m.music.163.com",
      o = a.protocol + "//" + r + "/m/applink/?scheme=" + encodeURIComponent(s);
      n && (o = a.protocol + "//" + r + "/m/applink/emptydl/?scheme=" + encodeURIComponent(s)),
      "string" == typeof t && t && (o = o + "&dl=" + encodeURIComponent(t)),
      "boolean" == typeof i && i && (o += "&redirect=1"),
      a.href = o
   },
   E = function() {};
   E = function() {
      var e = [61323, 50123, 49387, 39783, 25023, 16384, 9489, 8732, 6467, 5390, 4678, 3557, 2878],
      t = function(e, t) {
         E(e, t + 1)
      };
      return function(i, n) {
         var s = n || 0;
         if (! (s >= e.length)) {
            var a = +new Date,
            r = (0, c.stringify)({
               k: a,
               s: (0, l.
            default)("-x1*0a<-" + a),
               r: i
            });
            f({
               url: "http://intent.music.163.com:" + e[s] + "/something2?" + r,
               crossOrigin: !0,
               method: "get",
               type: "html",
               contentType: "text/plain",
               success: function(e) {
                  var n = e;
                  if ("" !== n) {
                     n = n.replace(/\'/g, '"'),
                     n = JSON.parse(n);
                     n.data === (0, l.
                  default)("i am alive") || t(i, s)
                  } else t(i, s)
               },
               error: function(e) {
                  t(i, s)
               }
            })
         }
      }
   } ();
   var H = function(e) {
      var t = e.platform,
      i = e.client,
      n = e.deepLink,
      s = e.storeLink,
      a = e.autoRedirect,
      r = e.emptylink,
      c = e.guideCallback,
      h = window.location,
      u = t || o.
   default.getPlatform2Str(),
      l = i || o.
   default.getClient(),
      d = s;
      if (d && "android" === u) {
         d = h.protocol + "//" + h.hostname + "/m/download?dl=" + encodeURIComponent(d)
      }
      if (o.
   default.isInNEMapp()) T(n);
      else if (o.
   default.getIosLargeVersion() >= 9 && !o.
   default.isPad())"micromessenger" !== l && "qq" !== l || (d = ""),
      M(n, d, a, r);
      else if (l && y(l)) {
         if (c && c({
            platform: u,
            client: l
         }), "android" === u) {
            var p = _(n);
            E(p)
         }
      } else T(n, d)
   },
   R = /^https?:\/\//,
   O = function(e, t) {
      if (!e || !t) throw new Error("deepLink and resLink must be exist");
      var i = e;
      "object" === (void 0 === e ? "undefined": (0, a.
   default)(e)) && (i = k(e.resType, e.resQuery));
      var n = Date.now(),
      s = t;
      if (!R.test(s)) {
         var r = "/" === s.charAt(0) ? "": "/";
         s = location.protocol + "//" + location.host + r + s
      }
      if (o.
   default.isInNEMapp()) T(i);
      else if (o.
   default.getIosLargeVersion() >= 9) M(i, s, !0),
      setTimeout(function() {
         Date.now() - n < 200 && (location.href = s)
      },
      100);
      else if (o.
   default.isAndroidChrome()) T(i, s);
      else {
         var c = o.
      default.getPlatform2Str();
         "android" === c ? E(_(i)) : T(i),
         setTimeout(function() {
            location.href = s
         },
         0)
      }
   },
   P = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = e.platform,
      i = e.client,
      n = e.storeLink,
      s = e.guideCallback,
      a = t || o.
   default.getPlatform2Str(),
      r = i || o.
   default.getClient(),
      c = n || w();
      return "ios" === a && ("weibo" === r || "douban" === r) || o.
   default.isPad() && ("micromessenger" === r || "qq" === r) ? s ? s({
         platform: a,
         client: r
      }) : "": ("undefined" != typeof location && (location.href = c), c)
   },
   A = {
      wakeup: H,
      wakeupBeforeLink: O,
      downloadApp: P,
      getOrpheusLink: k,
      orpheus: T,
      appendBIQuery: _,
      uvl: M,
      getAppDownUrl: w,
      androidWakeup: E
   };
   t.
default = A,
   e.exports = t.
default
},
, , , , , , , , , ,
function(e, t, i) {
   "use strict";
   i(95),
   i(264),
   i(266),
   i(267),
   i(270),
   i(271),
   i(272),
   i(273),
   i(274),
   i(275),
   i(276),
   i(277),
   i(268),
   i(269)
},
function(e, t, i) {
   "use strict";
   function n(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   }
   function s(e, t) {
      if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
   }
   Object.defineProperty(t, "__esModule", {
      value: !0
   });
   var a = function() {
      function e(e, t) {
         for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
         }
      }
      return function(t, i, n) {
         return i && e(t.prototype, i),
         n && e(t, n),
         t
      }
   } (),
   r = i(41),
   o = n(r),
   c = i(65),
   h = n(c),
   u = i(26),
   l = n(u),
   d = i(142),
   p = n(d),
   f = i(73),
   m = n(f),
   g = i(17),
   v = n(g);
   window.api = window.api || {};
   var y = function() {
      function e(t) {
         s(this, e),
         t && (this.config = t, this.updateShareData = this.updateShareData.bind(this), l.
      default.isInNEMapp() && this.registMusicShare(), v.
      default.isWeChat() && this.registWeiXinShare())
      }
      return a(e, [{
         key: "registMusicShare",
         value: function() {
            setTimeout(function() {
               location.href = "orpheus://settopbutton?" + m.
            default.stringify({
                  title:
                  "鍒嗕韩",
                  icon: "share",
                  callback: "onClickTopButton()",
                  show: !0,
                  playshow: !0
               })
            },
            10),
            window.onClickTopButton = this.onClickTopButton.bind(this),
            window.api.shareCb = this.shareCb.bind(this)
         }
      },
      {
         key: "registWeiXinShare",
         value: function(e) {
            if (v.
         default.isWeChat()) {
               var t = !1,
               e = e || this.config,
               i = this,
               n = function(e) {
                  p.
               default.config({
                     debug:
                     !1,
                     appId: e.appId,
                     timestamp: e.timestamp,
                     nonceStr: e.noncestr,
                     signature: e.signature,
                     jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"]
                  }),
                  p.
               default.ready(i.updateShareData.bind(this)),
                  t = !0
               };
               if (t) return i.updateShareData(); (0, o.
            default)("/api/wechat/jssdk/info", {
                  method: "get",
                  data: {
                     url: location.href.split("#")[0]
                  }
               }).then(function(e) {
                  return e.json()
               }).then(function(e) {
                  200 == e.code && n(e)
               }).
               catch(function(e) {})
            }
         }
      },
      {
         key: "updateShareData",
         value: function(e) {
            if (e = e || this.config, this.config = e, v.
         default.isWeChat()) {
               var t = /from=timeline/.test(location.search) ? "wxtimeline": "wxsession",
               i = function(e) { (0, h.
               default)("indirectshare", {
                     type: "webviewactivity",
                     url: location.href,
                     from: t,
                     to: e,
                     target: "m2_happiness",
                     is_webview: 1
                  })
               },
               e = Object.assign({
                  title: document.title,
                  subTitle: location.href,
                  text: document.title,
                  link: v.
               default.getRandomShareLink()
               },
               e);
               p.
            default.onMenuShareAppMessage({
                  title:
                  e.title,
                  desc: e.subTitle,
                  link: e.link,
                  imgUrl: e.picUrl,
                  success: i.bind(null, "wxsession")
               }),
               p.
            default.onMenuShareTimeline({
                  title:
                  e.text,
                  link: e.link,
                  imgUrl: e.picUrl,
                  success: i.bind(null, "wxtimeline")
               })
            }
         }
      },
      {
         key: "onClickTopButton",
         value: function() {
            var e = [],
            t = this.config;
            e.push(encodeURIComponent(t.text)),
            e.push(encodeURIComponent(t.picUrl)),
            e.push(encodeURIComponent(t.link)),
            e.push(encodeURIComponent(t.title)),
            e.push(encodeURIComponent(t.subTitle)),
            location.href = "orpheus://share/" + e.join("/"),
            (0, h.
         default)("click", {
               target: "share",
               targetid: "button",
               resource: "webviewactivity",
               url: location.href,
               activity: "m2_happiness",
               is_webview: 0
            })
         }
      },
      {
         key: "shareCb",
         value: function(e, t) {
            t = t || "",
            e && (0, h.
         default)("click", {
               target: "share",
               targetid: v.
            default.getAppShareType(t),
               resource: "webviewactivity",
               url: location.href,
               activity: "m2_happiness",
               is_webview: 0
            })
         }
      }]),
      e
   } ();
   t.
default = y
},
,
function(e, t) {},
, , , , , , , , ,
function(e, t) {},
, , , , , , , , , , , ,
function(e, t, i) {
   "use strict";
   function n(e, t) {
      var i = (65535 & e) + (65535 & t);
      return (e >> 16) + (t >> 16) + (i >> 16) << 16 | 65535 & i
   }
   function s(e, t) {
      return e << t | e >>> 32 - t
   }
   function a(e, t, i, a, r, o) {
      return n(s(n(n(t, e), n(a, o)), r), i)
   }
   function r(e, t, i, n, s, r, o) {
      return a(t & i | ~t & n, e, t, s, r, o)
   }
   function o(e, t, i, n, s, r, o) {
      return a(t & n | i & ~n, e, t, s, r, o)
   }
   function c(e, t, i, n, s, r, o) {
      return a(t ^ i ^ n, e, t, s, r, o)
   }
   function h(e, t, i, n, s, r, o) {
      return a(i ^ (t | ~n), e, t, s, r, o)
   }
   function u(e, t) {
      var i = e,
      s = t;
      i[s >> 5] |= 128 << s % 32,
      i[14 + (s + 64 >>> 9 << 4)] = s;
      var a = void 0,
      u = void 0,
      l = void 0,
      d = void 0,
      p = void 0,
      f = 1732584193,
      m = -271733879,
      g = -1732584194,
      v = 271733878;
      for (a = 0; a < i.length; a += 16) u = f,
      l = m,
      d = g,
      p = v,
      f = r(f, m, g, v, i[a], 7, -680876936),
      v = r(v, f, m, g, i[a + 1], 12, -389564586),
      g = r(g, v, f, m, i[a + 2], 17, 606105819),
      m = r(m, g, v, f, i[a + 3], 22, -1044525330),
      f = r(f, m, g, v, i[a + 4], 7, -176418897),
      v = r(v, f, m, g, i[a + 5], 12, 1200080426),
      g = r(g, v, f, m, i[a + 6], 17, -1473231341),
      m = r(m, g, v, f, i[a + 7], 22, -45705983),
      f = r(f, m, g, v, i[a + 8], 7, 1770035416),
      v = r(v, f, m, g, i[a + 9], 12, -1958414417),
      g = r(g, v, f, m, i[a + 10], 17, -42063),
      m = r(m, g, v, f, i[a + 11], 22, -1990404162),
      f = r(f, m, g, v, i[a + 12], 7, 1804603682),
      v = r(v, f, m, g, i[a + 13], 12, -40341101),
      g = r(g, v, f, m, i[a + 14], 17, -1502002290),
      m = r(m, g, v, f, i[a + 15], 22, 1236535329),
      f = o(f, m, g, v, i[a + 1], 5, -165796510),
      v = o(v, f, m, g, i[a + 6], 9, -1069501632),
      g = o(g, v, f, m, i[a + 11], 14, 643717713),
      m = o(m, g, v, f, i[a], 20, -373897302),
      f = o(f, m, g, v, i[a + 5], 5, -701558691),
      v = o(v, f, m, g, i[a + 10], 9, 38016083),
      g = o(g, v, f, m, i[a + 15], 14, -660478335),
      m = o(m, g, v, f, i[a + 4], 20, -405537848),
      f = o(f, m, g, v, i[a + 9], 5, 568446438),
      v = o(v, f, m, g, i[a + 14], 9, -1019803690),
      g = o(g, v, f, m, i[a + 3], 14, -187363961),
      m = o(m, g, v, f, i[a + 8], 20, 1163531501),
      f = o(f, m, g, v, i[a + 13], 5, -1444681467),
      v = o(v, f, m, g, i[a + 2], 9, -51403784),
      g = o(g, v, f, m, i[a + 7], 14, 1735328473),
      m = o(m, g, v, f, i[a + 12], 20, -1926607734),
      f = c(f, m, g, v, i[a + 5], 4, -378558),
      v = c(v, f, m, g, i[a + 8], 11, -2022574463),
      g = c(g, v, f, m, i[a + 11], 16, 1839030562),
      m = c(m, g, v, f, i[a + 14], 23, -35309556),
      f = c(f, m, g, v, i[a + 1], 4, -1530992060),
      v = c(v, f, m, g, i[a + 4], 11, 1272893353),
      g = c(g, v, f, m, i[a + 7], 16, -155497632),
      m = c(m, g, v, f, i[a + 10], 23, -1094730640),
      f = c(f, m, g, v, i[a + 13], 4, 681279174),
      v = c(v, f, m, g, i[a], 11, -358537222),
      g = c(g, v, f, m, i[a + 3], 16, -722521979),
      m = c(m, g, v, f, i[a + 6], 23, 76029189),
      f = c(f, m, g, v, i[a + 9], 4, -640364487),
      v = c(v, f, m, g, i[a + 12], 11, -421815835),
      g = c(g, v, f, m, i[a + 15], 16, 530742520),
      m = c(m, g, v, f, i[a + 2], 23, -995338651),
      f = h(f, m, g, v, i[a], 6, -198630844),
      v = h(v, f, m, g, i[a + 7], 10, 1126891415),
      g = h(g, v, f, m, i[a + 14], 15, -1416354905),
      m = h(m, g, v, f, i[a + 5], 21, -57434055),
      f = h(f, m, g, v, i[a + 12], 6, 1700485571),
      v = h(v, f, m, g, i[a + 3], 10, -1894986606),
      g = h(g, v, f, m, i[a + 10], 15, -1051523),
      m = h(m, g, v, f, i[a + 1], 21, -2054922799),
      f = h(f, m, g, v, i[a + 8], 6, 1873313359),
      v = h(v, f, m, g, i[a + 15], 10, -30611744),
      g = h(g, v, f, m, i[a + 6], 15, -1560198380),
      m = h(m, g, v, f, i[a + 13], 21, 1309151649),
      f = h(f, m, g, v, i[a + 4], 6, -145523070),
      v = h(v, f, m, g, i[a + 11], 10, -1120210379),
      g = h(g, v, f, m, i[a + 2], 15, 718787259),
      m = h(m, g, v, f, i[a + 9], 21, -343485551),
      f = n(f, u),
      m = n(m, l),
      g = n(g, d),
      v = n(v, p);
      return [f, m, g, v]
   }
   function l(e) {
      var t = void 0,
      i = "",
      n = 32 * e.length;
      for (t = 0; t < n; t += 8) i += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
      return i
   }
   function d(e) {
      var t = void 0,
      i = [];
      for (i[(e.length >> 2) - 1] = void 0, t = 0; t < i.length; t += 1) i[t] = 0;
      var n = 8 * e.length;
      for (t = 0; t < n; t += 8) i[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
      return i
   }
   function p(e) {
      return l(u(d(e), 8 * e.length))
   }
   function f(e, t) {
      var i = void 0,
      n = d(e),
      s = [],
      a = [];
      for (s[15] = void 0, a[15] = void 0, n.length > 16 && (n = u(n, 8 * e.length)), i = 0; i < 16; i += 1) s[i] = 909522486 ^ n[i],
      a[i] = 1549556828 ^ n[i];
      var r = u(s.concat(d(t)), 512 + 8 * t.length);
      return l(u(a.concat(r), 640))
   }
   function m(e) {
      var t = "0123456789abcdef",
      i = "",
      n = void 0,
      s = void 0;
      for (s = 0; s < e.length; s += 1) n = e.charCodeAt(s),
      i += t.charAt(n >>> 4 & 15) + t.charAt(15 & n);
      return i
   }
   function g(e) {
      return unescape(encodeURIComponent(e))
   }
   function v(e) {
      return p(g(e))
   }
   function y(e) {
      return m(v(e))
   }
   function x(e, t) {
      return f(g(e), g(t))
   }
   function w(e, t) {
      return m(x(e, t))
   }
   function _(e, t, i) {
      return t ? i ? x(t, e) : w(t, e) : i ? v(e) : y(e)
   }
   Object.defineProperty(t, "__esModule", {
      value: !0
   }),
   t.
default = _,
   e.exports = t.
default
},
function(e, t, i) {
   "use strict";
   Object.defineProperty(t, "__esModule", {
      value: !0
   }),
   t.createEnv = void 0;
   var n = i(145),
   s = function(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   } (n),
   a = "",
   r = "";
   "undefined" != typeof window && (a = window.navigator.userAgent, r = window.document.cookie || "");
   var o = /ipad/gi,
   c = /iphone|ipod|ipad|ios/gi,
   h = /Android/gi,
   u = /windows\s+phone/gi,
   l = /IPadQQ/gi,
   d = /mobile|mobi|wap|simulator|iphone|android/gi,
   p = /SINA_ROBOT|SINA_WEIBO/gi,
   f = /Weibo|MicroMessenger|YDDict|youdao_dict|QQ(?!Browser)|RenRen|Douban|YiXin|TXMicroBlog|NewsApp/i,
   m = /QQBrowser/gi,
   g = /Android\s+([\d\.]+);/i,
   v = /Windows\s+Phone\s+([\d\.]+);/i,
   y = /OS\s+([\d+_]+)/i,
   x = /\bChrome\/\d/,
   w = /\bVersion\/\d/,
   _ = /appver/i,
   b = /NeteaseMusic\/([\d\.]+)?/i,
   k = /appver=([\d\.]+)?/i,
   S = {
      Weibo: "sina",
      MicroMessenger: "wx",
      YDDict: "youdaodict",
      youdao_dict: "youdaodict",
      YiXin: "yx",
      TXMicroBlog: "tencent",
      NewsApp: "neteasenews",
      QQ: "qq",
      RenRen: "renren",
      Douban: "douban"
   },
   C = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = e.userAgent || a,
      i = (e.Cookie,
      function() {
         return "" !== t && null !== t.match(u)
      }),
      n = function() {
         if ("" === t) return ! 1;
         var e = t.match(c),
         i = t.match(u);
         return null !== e && null === i
      },
      C = function() {
         return "" !== t && null !== t.match(o)
      },
      T = function() {
         return C() ? "pad": "phone"
      },
      M = function() {
         var e = t.match(y);
         if (null !== e) {
            return e[1].replace(/_/g, ".")
         }
         return ""
      },
      E = function() {
         var e = M();
         return e && "string" == typeof e ? parseInt(e.split(".")[0], 10) : -1
      },
      H = function() {
         if ("" === t) return ! 1;
         var e = t.match(h),
         i = t.match(u);
         return null !== e && null === i
      },
      R = function() {
         var e = t.match(g);
         return null !== e ? e[1] : ""
      },
      O = function() {
         var e = t.match(v);
         return null !== e ? e[1] : ""
      },
      P = function() {
         if (i()) {
            var e = O();
            if (null !== e) try {
               var t = parseFloat(e, 10);
               return !! (t && t >= 10)
            } catch(e) {
               return ! 1
            }
         }
         return ! 1
      },
      A = function() {
         return "" === t ? 0 : i() ? 3 : n() ? 1 : H() ? 2 : 0
      },
      F = function() {
         switch (A()) {
         case 1:
            return "ios";
         case 2:
            return "android";
         case 3:
            return "wp";
         default:
            return "other"
         }
      },
      j = function() {
         var e = O();
         return null !== e ? e: null !== (e = t.match(y)) ? e[1].replace(/_/g, ".") : (e = R(), null !== e ? e: "")
      },
      D = function() {
         return "" === t ? 0 : i() ? P() ? 31 : 30 : n() ? C() ? 11 : 10 : H() ? 20 : 0
      },
      B = function() {
         switch (D()) {
         case 10:
            return "iphone";
         case 11:
            return "ipad";
         case 20:
            return "android";
         case 30:
            return "wp";
         case 31:
            return "uwp";
         default:
            return "other"
         }
      },
      I = function() {
         var e = H(),
         i = x.test(t),
         n = !w.test(t);
         return e && i && n
      },
      L = function() {
         if ("" === t) return ! 1;
         var e = t.match(f),
         i = t.match(m);
         return null !== e ? e[0].toLowerCase() : null !== i ? i[0].toLowerCase() : ""
      },
      z = function() {
         return "" !== t && null !== t.match(d)
      },
      q = function() {
         return "" !== t && null !== t.match(p)
      },
      N = function() {
         if ("" === t) return ! 1;
         var e = L();
         return "QQ".toLowerCase() === e || "Weibo".toLowerCase() === e || "MicroMessenger".toLowerCase() === e
      },
      W = function() {
         return null !== t.match(l)
      },
      U = function() {
         var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
         t = "";
         return (0, s.
      default)(S).forEach(function(i) {
            i.toLowerCase() === e && (t = S[i])
         }),
         t
      },
      X = function() {
         var e = a.match(b),
         t = r.match(_);
         return null !== e || null !== t
      };
      return {
         getPlatform: A,
         getPlatform2Str: F,
         getOSVersionStr: j,
         getDevicePro: D,
         getDevicePro2Str: B,
         getDevice: T,
         getClient: L,
         getIosLargeVersion: E,
         getIosVersion: M,
         getAndroidVersion: R,
         getWPVersion: O,
         getAppVersion: function() {
            var e = a.match(b) || r.match(k);
            return null !== e ? e[1] : ""
         },
         isIos: n,
         isPad: C,
         isAndroid: H,
         isAndroidChrome: I,
         isWP: i,
         isWP10: P,
         isMobile: z,
         isSinaRobot: q,
         isUnsupportedClient: N,
         isIpadQQ: W,
         isInNEMapp: X,
         fetchLogByClient: U
      }
   };
   t.createEnv = C,
   t.
default = C()
},
function(e, t, i) {
   "use strict";
   Object.defineProperty(t, "__esModule", {
      value: !0
   }),
   t.createUrl = t.stringify = t.parse = void 0;
   var n = i(97),
   s = function(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   } (n),
   a = i(247),
   r = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
   },
   o = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,
   c = ["hash", "host", "hostname", "href", "origin", "pathname", "port", "protocol", "search"],
   h = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      i = "";
      e ? i = e: "undefined" != typeof window && (i = window.location);
      var n = {},
      h = t.localhost,
      u = t.onlinehost;
      if (h = h || "igame.163.com", u = u || "music.163.com", i) if ("string" == typeof i) {
         var l = i.match(o);
         if (null !== l) {
            var d = l[1] ? l[1] + ":": "",
            p = l[7] ? "#" + l[7] : "",
            f = l[3] || "",
            m = l[4] || "",
            g = l[5] ? "/" + l[5] : "",
            v = [f],
            y = l[6] ? "?" + l[6] : "";
            m && v.push(m),
            n = {
               hash: p,
               host: v.join(":"),
               hostname: f,
               href: e,
               origin: d + "//" + v,
               pathname: g,
               port: m,
               protocol: d,
               search: y
            }
         }
      } else "object" === (void 0 === i ? "undefined": (0, s.
   default)(i)) && c.forEach(function(e) {
         r(i, e) && "function" != typeof i[e] && (n[e] = i[e])
      });
      var x = n,
      w = x.search,
      _ = x.hostname,
      b = x.protocol;
      n.params = (0, a.parse)(w);
      var k = _ || u;
      "localhost" === _ && (k = h);
      var S = "http:";
      return b && (S = -1 !== b.indexOf(":") ? b: b + ":"),
      n.currentHost = S + "//" + k,
      n
   };
   t.parse = a.parse,
   t.stringify = a.stringify,
   t.createUrl = h,
   t.
default = h()
},
function(e, t, i) {
   "use strict";
   function n(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   }
   Object.defineProperty(t, "__esModule", {
      value: !0
   }),
   t.stringify = t.parse = void 0;
   var s = i(145),
   a = n(s),
   r = i(97),
   o = n(r),
   c = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
   },
   h = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      i = {};
      if ("string" != typeof e || 0 === e.length) return i;
      var n = t.gap,
      s = t.eva,
      a = t.cover;
      return n = n || "&",
      s = s || "=",
      a = void 0 !== a && a,
      ("?" === e.charAt(0) ? e.slice(1) : e).split(n).forEach(function(e) {
         var t = e.indexOf(s),
         n = t > -1 ? e.slice(0, t) : e,
         r = t > -1 ? e.slice(t + 1) : "";
         n = decodeURIComponent(n),
         r = decodeURIComponent(r),
         c(i, n) ? Array.isArray(i[n]) ? i[n].push(r) : i[n] = a ? r: [i[n], r] : i[n] = r
      }),
      i
   };
   t.parse = h;
   var u = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if ("object" !== (void 0 === e ? "undefined": (0, o.
   default)(e)) || null === e) return "";
      var i = t.gap,
      n = t.eva;
      return i = i || "&",
      n = n || "=",
      (0, a.
   default)(e).map(function(t) {
         var s = "" + encodeURIComponent(t) + n;
         return Array.isArray(e[t]) ? e[t].map(function(e) {
            return "" + s + encodeURIComponent(e)
         }).join(i) : "" + s + encodeURIComponent(e[t])
      }).join(i)
   };
   t.stringify = u
},
, , , , , , , , ,
function(e, t, i) {
   "use strict";
   function n(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   }
   function s(e, t) {
      if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
   }
   function a(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return ! t || "object" != typeof t && "function" != typeof t ? e: t
   }
   function r(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
         constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
         }
      }),
      t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
   }
   Object.defineProperty(t, "__esModule", {
      value: !0
   });
   var o = function() {
      function e(e, t) {
         for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
         }
      }
      return function(t, i, n) {
         return i && e(t.prototype, i),
         n && e(t, n),
         t
      }
   } (),
   c = i(664),
   h = n(c),
   u = i(663),
   l = n(u),
   d = function(e) {
      function t() {
         s(this, t);
         var e = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
            vertexShader: h.
         default,
            fragmentShader: l.
         default,
            uniforms: {
               tDiffuse: {
                  type: "t",
                  value: null
               },
               u_mouse: {
                  value: new THREE.Vector2
               },
               u_time: {
                  value: 0
               },
               u_aspect: {
                  value: 0
               },
               u_amp: {
                  value: 0
               }
            }
         }));
         return e.enabled = !0,
         e.amp = 0,
         e.targetAmp = 0,
         e.lerpUpWeight = .15,
         e.lerpDownWeight = .3,
         e.time = 0,
         e
      }
      return r(t, e),
      o(t, [{
         key: "updateUniforms",
         value: function() {
            var e = this.targetAmp - this.amp;
            this.amp += e * (e > 0 ? this.lerpUpWeight: this.lerpDownWeight),
            this.uniforms.u_amp.value = this.amp
         }
      }]),
      t
   } (THREE.ShaderPass);
   t.
default = d
},
function(e, t, i) {
   "use strict";
   function n(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   }
   function s(e, t) {
      if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
   }
   Object.defineProperty(t, "__esModule", {
      value: !0
   });
   var a = function() {
      function e(e, t) {
         for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
         }
      }
      return function(t, i, n) {
         return i && e(t.prototype, i),
         n && e(t, n),
         t
      }
   } (),
   r = i(28),
   o = n(r),
   c = i(4),
   h = i(74),
   u = n(h),
   l = i(27),
   d = n(l),
   p = i(17),
   f = n(p),
   m = o.
default.width,
   g = o.
default.height,
   v = (o.
default.dpr,
   function() {
      function e(t) {
         var i = t.popularity,
         n = t.maxTrailLength,
         a = t.freezedRollupSpeed,
         r = t.speedMin;
         if (s(this, e), this.popularity = i, this.maxTrailLength = n, this.freezedRollupSpeed = a, this.speedMin = r, this.paused = !1, this.animated = !1, this.freezed = !1, this.speedOffset = 0, this.canvas = $('<canvas width="' + m + '" height="' + g + '"></canvas>').appendTo("#j-view-front")[0], !this.canvas) return ! 1;
         this.ctx = this.canvas.getContext("2d"),
         this.stars = [],
         this.canvas.width = window.innerWidth,
         this.canvas.height = window.innerHeight,
         this.centerX = this.canvas.width / 2,
         this.centerY = this.canvas.height / 2,
         this.populateSky(),
         this.showTip = this.showTip.bind(this),
         this.onTransitionStart = this.onTransitionStart.bind(this),
         this.onTransitionFreeze = this.onTransitionFreeze.bind(this),
         this.onTransitionFullscreen = this.onTransitionFullscreen.bind(this),
         this.onTransitionEnd = this.onTransitionEnd.bind(this),
         this.addEvent()
      }
      return a(e, [{
         key: "addEvent",
         value: function() {
            $(window).on("touchstart", this.onTransitionStart),
            this.tipTimer = setTimeout(this.showTip, 4e3),
            this.freezeTimer = setTimeout(this.onTransitionStart, 2e4)
         }
      },
      {
         key: "showTip",
         value: function() {
            $("#j-view-front").append('<div class="u-press"></div>')
         }
      },
      {
         key: "hideTip",
         value: function() {
            this.tipTimer = clearTimeout(this.tipTimer),
            $("#j-view-front .u-press").remove()
         }
      },
      {
         key: "onTransitionStart",
         value: function() {
            $(window).off("touchstart", this.onTransitionStart),
            this.freezeTimer = clearTimeout(this.freezeTimer),
            this.hideTip(),
            u.
         default.transitionOut(),
            this.playAnimate(),
            setTimeout(this.onTransitionFreeze, 500),
            f.
         default.biLogPage("ending")
         }
      },
      {
         key: "onTransitionFreeze",
         value: function() {
            this.freezed = !0,
            this.speedOffset = .3,
            d.
         default.stopCollision(),
            setTimeout(this.onTransitionFullscreen, 2e3)
         }
      },
      {
         key: "onTransitionFullscreen",
         value: function() {
            this.fullscreen = !0,
            this.speedOffset = 1,
            this.maxTrailLength = 2,
            setTimeout(this.onTransitionEnd, 500)
         }
      },
      {
         key: "onTransitionEnd",
         value: function() {
            var e = {
               o: 0
            },
            t = $("#j-view-end"),
            i = this;
            c.TweenMax.to(e, .5, {
               o: 1,
               onStart: function() {
                  i.pauseAnimate(),
                  t.removeClass("z-game")
               },
               onUpdate: function() {
                  t.css("opacity", e.o)
               },
               onComplete: function() {
                  i.animateText()
               }
            }),
            u.
         default.dispose(),
            game.ticker.stop()
         }
      },
      {
         key: "random",
         value: function(e, t, i) {
            return parseFloat(Math.min(e + Math.random() * (t - e), t).toFixed(i || 4))
         }
      },
      {
         key: "randomInt",
         value: function(e, t) {
            var i = e + Math.random() * (t + 1 - e);
            return i = Math.floor(i)
         }
      },
      {
         key: "randomDistribution",
         value: function() {
            return arguments[Math.floor(Math.random() * arguments.length)]
         }
      },
      {
         key: "toRad",
         value: function(e) {
            return e * (Math.PI / 180)
         }
      },
      {
         key: "populateSky",
         value: function() {
            var e = Math.round(Math.sqrt(Math.pow(this.centerY, 2) + Math.pow(this.centerX, 2))),
            t = Math.floor(this.canvas.width * this.popularity);
            this.stars = [];
            for (var i = 0; i < t; i++) {
               var n = {};
               n.color = [244, 244, 244],
               n.angle = Math.ceil(360 * Math.random()),
               n.opacity = this.random(.15, .85),
               n.width = this.randomDistribution(3, 2, 2, 2, 2, 1),
               n.length = n.width / 2e3,
               n.trailLength = 0,
               n.radius = this.randomDistribution(this.randomInt(0, e), this.randomInt(25, e), this.randomInt(45, e), this.randomInt(50, e)),
               n.speed = Math.abs((20 / n.radius + Math.random()) / 10),
               this.stars.push(n)
            }
         }
      },
      {
         key: "clearCtx",
         value: function() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
         }
      },
      {
         key: "drawStars",
         value: function() {
            this.clearCtx();
            for (var e = this.canvas.width,
            t = 0; t < this.stars.length; t++) {
               var i = this.stars[t];
               i.angleRad = this.toRad(i.angle),
               i.angleRadEnd = i.angleRad + i.length,
               i.angleRadStart = i.angleRadStart ? i.angleRadStart: i.angleRad,
               this.freezed ? i.trailLength > this.maxTrailLength && (i.angleRadStart = i.angleRadEnd - i.trailLength) : (i.speed < .8 && (i.speed += .01), i.angleRadStart = Math.min(i.angleRadStart + (this.freezedRollupSpeed + i.trailLength / 30), i.angleRad)),
               i.trailLength = i.angleRadEnd - i.angleRadStart;
               var n = -Math.min(i.trailLength, .6);
               this.ctx.beginPath(),
               this.ctx.strokeStyle = "rgba(" + i.color[0] + "," + i.color[1] + "," + i.color[2] + "," + (this.fullscreen ? i.opacity += .02 : Math.max(i.opacity + n, .1)) + ")",
               this.ctx.lineCap = "round",
               this.ctx.lineWidth = this.fullscreen ? i.width += 2 : i.width,
               this.ctx.arc(this.centerX, this.centerY, i.radius, i.angleRadStart, i.angleRadEnd, !1),
               this.ctx.stroke(),
               i.angle += Math.max(i.speed + this.speedOffset, this.speedMin),
               360 == i.angle && (i.angle = 0),
               e > i.width && (e = i.width)
            }
         }
      },
      {
         key: "animateSky",
         value: function() {
            function e() {
               t = Date.now(),
               i = t - s,
               i > a && (s = t - i % a, n.drawStars()),
               n.paused ? n.animated = !1 : requestAnimationFrame(e)
            }
            var t, i, n = this,
            s = Date.now(),
            a = 1e3 / 351;
            e()
         }
      },
      {
         key: "playAnimate",
         value: function() {
            this.paused = !1,
            this.speedOffset = 0,
            this.freezed = !1,
            this.animated || (this.animateSky(), this.animated = !0)
         }
      },
      {
         key: "pauseAnimate",
         value: function() {
            this.paused = !0
         }
      },
      {
         key: "animateText",
         value: function() {
            $("#j-view-end .j-content").addClass("z-show")
         }
      }]),
      e
   } ());
   t.
default = v
},
function(e, t, i) {
   "use strict";
   function n(e, t) {
      if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
   }
   Object.defineProperty(t, "__esModule", {
      value: !0
   });
   var s = function() {
      function e(e, t) {
         for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
         }
      }
      return function(t, i, n) {
         return i && e(t.prototype, i),
         n && e(t, n),
         t
      }
   } (),
   a = (i(28), {
      iterations: 12,
      mouse_force: .2,
      resolution: .25,
      cursor_size: 60,
      step: .05,
      alphatransition: 1
   }),
   r = 512,
   o = 1 / window.innerWidth,
   c = 1 / window.innerHeight,
   h = new THREE.Vector2(o, c),
   u = new THREE.Vector2(1, window.innerWidth / window.innerHeight),
   l = new THREE.Vector2,
   d = new THREE.BufferGeometry;
   d.addAttribute("position", new THREE.Float32Attribute([ - 2, -2, 0, 2, -2, 0, 2, 2, 0, -2, 2, 0], 3));
   var p = {
      basic: i(667),
      finalQuad: i(672),
      kernel: i(674),
      advect: i(666),
      boundary: i(668),
      cursor: i(670),
      addFStrength: i(665),
      div: i(671),
      compute: i(669),
      subtractpreGradient: i(675)
   },
   f = {
      all: new THREE.PlaneBufferGeometry(2, 2),
      inside: new THREE.PlaneBufferGeometry(1.99, 1.99),
      boundary: d,
      cursor: new THREE.PlaneBufferGeometry(o * a.cursor_size * 2, c * a.cursor_size * 2)
   },
   m = {
      mouse: new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2)
   },
   g = m.mouse.x,
   v = m.mouse.y,
   y = function() {
      function e(t, i, s) {
         n(this, e);
         var r = this;
         this._onTouchStart = function(e) {
            m.mouse.x = Math.min(Math.max((e.touches[0].clientX / r.w * 2 - 1 + 1) / 2, .15), .85) * r.w,
            m.mouse.y = r.h - Math.min(Math.max(( - e.touches[0].clientY / r.h * 2 + 1 + 1) / 2, .15), .85) * r.h
         },
         this._onTouchMove = function(e) {
            l.x = e.touches[0].clientX / r.w * 2 - 1,
            l.y = -e.touches[0].clientY / r.h * 2 + 1,
            r.hasMove = !0
         },
         this._renderer = t,
         this.textures = i,
         this._scene = new THREE.Scene,
         this._fbo = s,
         this._offScene = new THREE.Scene,
         this._camera = new THREE.OrthographicCamera(1, 1, 1, 1, -100, 100),
         this._type = this._renderer.extensions.get("OES_texture_half_float_linear") ? THREE.HalfFloatType: THREE.FloatType,
         a.iterations = 2,
         this.hasMove = !1,
         this._initFBOS(),
         this.resize(window.innerWidth, window.innerHeight)
      }
      return s(e, [{
         key: "addEvent",
         value: function() {
            $(window).on("touchstart", this._onTouchStart),
            $(window).on("touchmove", this._onTouchMove)
         }
      },
      {
         key: "touchStart",
         value: function(e, t) {
            var i = this;
            m.mouse.x = Math.min(Math.max((e / i.w * 2 - 1 + 1) / 2, .15), .85) * i.w,
            m.mouse.y = i.h - Math.min(Math.max(( - t / i.h * 2 + 1 + 1) / 2, .15), .85) * i.h
         }
      },
      {
         key: "touchMove",
         value: function(e, t) {
            var i = this;
            l.x = e / i.w * 2 - 1,
            l.y = -t / i.h * 2 + 1,
            i.hasMove = !0
         }
      },
      {
         key: "_initFBOS",
         value: function() {
            var e = this.textures["water-bg"],
            t = this.textures["water-text"];
            t.minFilter = THREE.LinearFilter,
            t.magFilter = THREE.LinearFilter,
            e.minFilter = THREE.LinearFilter,
            e.magFilter = THREE.LinearFilter,
            t.wrapS = t.wrapT = THREE.RepeatWrapping,
            e.wrapS = e.wrapT = THREE.RepeatWrapping,
            this.velocityFBO0 = this._createFbos(r, r, THREE.RGBFormat, this._type),
            this.velocityFBO1 = this._createFbos(r, r, THREE.RGBFormat, this._type),
            this.divFBO = this._createFbos(r, r, THREE.RGBFormat, this._type),
            this.preFBO0 = this._createFbos(r, r, THREE.RGBFormat, this._type),
            this.preFBO1 = this._createFbos(r, r, THREE.RGBFormat, this._type),
            this.velocityK = {
               geom: f.inside,
               mat: new THREE.RawShaderMaterial({
                  uniforms: {
                     px: {
                        type: "v2",
                        value: h
                     },
                     px1: {
                        type: "v2",
                        value: u
                     },
                     scale: {
                        type: "float",
                        value: 1
                     },
                     velocity: {
                        type: "t",
                        value: this.velocityFBO0.texture
                     },
                     source: {
                        type: "t",
                        value: this.velocityFBO0.texture
                     },
                     dt: {
                        type: "f",
                        value: a.step
                     }
                  },
                  vertexShader: p.kernel,
                  fragmentShader: p.advect
               }),
               output: this.velocityFBO1
            },
            this.velocityK.mesh = new THREE.Mesh(this.velocityK.geom, this.velocityK.mat),
            this.velocityBoundaryKernel = {
               geom: f.boundary,
               mat: new THREE.RawShaderMaterial({
                  uniforms: {
                     px: {
                        type: "v2",
                        value: h
                     },
                     scale: {
                        type: "float",
                        value: -1
                     },
                     velocity: {
                        type: "t",
                        value: this.velocityFBO0.texture
                     },
                     source: {
                        type: "t",
                        value: this.velocityFBO0.texture
                     },
                     dt: {
                        type: "f",
                        value: 1 / 60
                     }
                  },
                  vertexShader: p.boundary,
                  fragmentShader: p.advect
               }),
               output: this.velocityFBO1
            },
            this.velocityBoundaryKernel.mesh = new THREE.Line(this.velocityBoundaryKernel.geom, this.velocityBoundaryKernel.mat);
            var i = new THREE.Vector2(a.cursor_size * (1 / 1024), a.cursor_size * (1 / 1024));
            this.addCursor = {
               geom: f.cursor,
               mat: new THREE.RawShaderMaterial({
                  uniforms: {
                     aspectRatio: {
                        type: "f",
                        value: 1
                     },
                     px: {
                        type: "v2",
                        value: h
                     },
                     force: {
                        type: "v2",
                        value: new THREE.Vector2(.5, .2)
                     },
                     center: {
                        type: "v2",
                        value: new THREE.Vector2(.1, .4)
                     },
                     scale: {
                        type: "v2",
                        value: i
                     }
                  },
                  vertexShader: p.cursor,
                  fragmentShader: p.addFStrength,
                  transparent: !0,
                  blending: THREE.AdditiveBlending
               }),
               output: this.velocityFBO1
            },
            this.addCursor.mesh = new THREE.Mesh(this.addCursor.geom, this.addCursor.mat),
            this.divKernel = {
               geom: f.all,
               mat: new THREE.RawShaderMaterial({
                  uniforms: {
                     px: {
                        type: "v2",
                        value: h
                     },
                     velocity: {
                        type: "t",
                        value: this.velocityFBO1.texture
                     }
                  },
                  vertexShader: p.kernel,
                  fragmentShader: p.div
               }),
               output: this.divFBO
            },
            this.divKernel.mesh = new THREE.Mesh(this.divKernel.geom, this.divKernel.mat),
            this.mainComputationKernel = {
               geom: f.all,
               mat: new THREE.RawShaderMaterial({
                  uniforms: {
                     px: {
                        type: "v2",
                        value: h
                     },
                     alpha: {
                        type: "f",
                        value: -1
                     },
                     beta: {
                        type: "f",
                        value: .25
                     },
                     pre: {
                        type: "t",
                        value: this.preFBO0.texture
                     },
                     div: {
                        type: "t",
                        value: this.divFBO.texture
                     }
                  },
                  vertexShader: p.kernel,
                  fragmentShader: p.compute
               }),
               output: this.preFBO1
            },
            this.mainComputationKernel.mesh = new THREE.Mesh(this.mainComputationKernel.geom, this.mainComputationKernel.mat),
            this.preBoundaryKernel = {
               geom: f.boundary,
               mat: new THREE.RawShaderMaterial({
                  uniforms: {
                     px: {
                        type: "v2",
                        value: h
                     },
                     alpha: {
                        type: "f",
                        value: -1
                     },
                     beta: {
                        type: "f",
                        value: .25
                     },
                     pre: {
                        type: "t",
                        value: this.preFBO0.texture
                     },
                     div: {
                        type: "t",
                        value: this.divFBO.texture
                     }
                  },
                  vertexShader: p.boundary,
                  fragmentShader: p.compute
               }),
               output: this.preFBO1
            },
            this.preBoundaryKernel.mesh = new THREE.Line(this.preBoundaryKernel.geom, this.preBoundaryKernel.mat),
            this.subtractpreGradientKernel = {
               geom: f.all,
               mat: new THREE.RawShaderMaterial({
                  uniforms: {
                     scale: {
                        type: "f",
                        value: 1
                     },
                     px: {
                        type: "v2",
                        value: h
                     },
                     pre: {
                        type: "t",
                        value: this.preFBO0.texture
                     },
                     velocity: {
                        type: "t",
                        value: this.velocityFBO1.texture
                     }
                  },
                  vertexShader: p.kernel,
                  fragmentShader: p.subtractpreGradient
               }),
               output: this.velocityFBO0
            },
            this.subtractpreGradientKernel.mesh = new THREE.Mesh(this.subtractpreGradientKernel.geom, this.subtractpreGradientKernel.mat),
            this.finalQuadKernel = {
               geom: new THREE.PlaneBufferGeometry(1, 1, 1, 1),
               mat: new THREE.RawShaderMaterial({
                  uniforms: {
                     alphatransition: {
                        type: "f",
                        value: a.alphatransition
                     },
                     pre: {
                        type: "t",
                        value: this.preFBO0.texture
                     },
                     velocity: {
                        type: "t",
                        value: this.velocityFBO0.texture
                     },
                     aspectRatio: {
                        type: "f",
                        value: 0
                     },
                     diffuse: {
                        type: "t",
                        value: e
                     },
                     logo: {
                        type: "t",
                        value: t
                     },
                     timer: {
                        type: "f",
                        value: 0
                     }
                  },
                  side: 0,
                  vertexShader: p.basic,
                  fragmentShader: p.finalQuad
               }),
               output: null
            },
            this._mesh = new THREE.Mesh(this.finalQuadKernel.geom, this.finalQuadKernel.mat),
            this.finalQuadKernel.mesh = this._mesh,
            this._mesh.position.set(1.7, 4, 0),
            this._scene.add(this._mesh),
            this.velocityK.mesh.scale.set(r, r, 1),
            this.velocityBoundaryKernel.mesh.scale.set(r, r, 1),
            this.addCursor.mesh.scale.set(r, r, 1),
            this.divKernel.mesh.scale.set(r, r, 1),
            this.mainComputationKernel.mesh.scale.set(r, r, 1),
            this.preBoundaryKernel.mesh.scale.set(r, r, 1),
            this.subtractpreGradientKernel.mesh.scale.set(r, r, 1)
         }
      },
      {
         key: "_createFbos",
         value: function(e, t, i, n) {
            return new THREE.WebGLRenderTarget(e, t, {
               minFilter: THREE.LinearFilter,
               magFilter: THREE.LinearFilter,
               format: i,
               type: n,
               wrapS: THREE.RepeatWrapping,
               wrapT: THREE.RepeatWrapping
            })
         }
      },
      {
         key: "resize",
         value: function(e, t) {
            this.w = e,
            this.h = t;
            var i = this.w / this.h;
            a.mouse_force = .2,
            o = 1 / this.w,
            c = 1 / this.h,
            h = new THREE.Vector2(o, c),
            u = new THREE.Vector2(1, this.w / this.h),
            this.addCursor.mesh.geometry.dispose(),
            this.addCursor.geom = new THREE.PlaneBufferGeometry(o * a.cursor_size * 2, c * a.cursor_size * 2),
            this.addCursor.mesh = new THREE.Mesh(this.addCursor.geom, this.addCursor.mat),
            this.addCursor.mesh.material.uniforms.aspectRatio.value = this.w / this.h,
            this.addCursor.mesh.material.uniforms.px.value = h,
            this.addCursor.mesh.material.uniforms.scale.value.x = a.cursor_size * o * Math.min(.0015 * this.w, 1),
            this.addCursor.mesh.material.uniforms.scale.value.y = a.cursor_size * c * Math.min(.0015 * this.w, 1),
            this.addCursor.mesh.geometry.needsUpdate = !0,
            this.addCursor.mesh.needsUpdate = !0,
            this.addCursor.mesh.material.needsUpdate = !0,
            this.divKernel.mesh.material.uniforms.px.value = h,
            this.velocityK.mat.uniforms.px.value = h,
            this.velocityK.mat.uniforms.px1.value = u,
            this.mainComputationKernel.mesh.material.uniforms.px.value = h,
            this.preBoundaryKernel.mesh.material.uniforms.px.value = h,
            this.subtractpreGradientKernel.mesh.material.uniforms.px.value = h,
            this._mesh.material.uniforms.aspectRatio.value = i,
            this._camera.projectionMatrix.makeOrthographic(this.w / -2, this.w / 2, this.h / 2, this.h / -2, this._camera.near, this._camera.far)
         }
      },
      {
         key: "render",
         value: function() {
            var e = m.mouse.x,
            t = m.mouse.y,
            i = e - g,
            n = t - v;
            g = e,
            v = t,
            0 === g && 0 === v && (i = n = 0);
            var s = this.preFBO0,
            r = this.preFBO1,
            h = s;
            this.hasMove && (TweenMax.to(m.mouse, .016, {
               x: Math.min(Math.max((l.x + 1) / 2, .15), .85) * this.w,
               y: this.h - Math.min(Math.max((l.y + 1) / 2, .15), .85) * this.h
            }), this.hasMove = !1),
            this.velocityK.mat.uniforms.dt.value = 1 * a.step,
            this._compute(this.velocityK, !1),
            this.addCursor.mesh.material.uniforms.force.value.x = i * o * a.cursor_size * a.mouse_force,
            this.addCursor.mesh.material.uniforms.force.value.y = -n * c * a.cursor_size * a.mouse_force,
            this.addCursor.mesh.material.uniforms.center.value.x = g * o * 2 - 1,
            this.addCursor.mesh.material.uniforms.center.value.y = -1 * (v * c * 2 - 1),
            this._compute(this.addCursor, !1),
            this._compute(this.velocityBoundaryKernel, !1),
            this._compute(this.divKernel, !1);
            for (var u = 0; u < a.iterations; u++) this.mainComputationKernel.mat.uniforms.pre.value = this.preBoundaryKernel.mat.uniforms.pre.value = s,
            this.mainComputationKernel.output = this.preBoundaryKernel.output = r,
            this._compute(this.mainComputationKernel, !1),
            this._compute(this.preBoundaryKernel, !1),
            h = s,
            s = r,
            r = h;
            this._compute(this.subtractpreGradientKernel, !1),
            this._mesh.material.uniforms.alphatransition.value = a.alphatransition,
            this._renderer.setScissorTest(!1),
            this._renderer.setRenderTarget(this._fbo),
            this.finalQuadKernel.mesh.material.uniforms.timer.value += .016,
            this._renderer.objects.update(this.finalQuadKernel.mesh),
            this._renderer.renderBufferDirect(this._camera, null, this.finalQuadKernel.mesh.geometry, this.finalQuadKernel.mesh.material, this.finalQuadKernel.mesh, null)
         }
      },
      {
         key: "_compute",
         value: function(e, t) {
            this._offScene.add(e.mesh),
            t ? this._renderer.render(this._offScene, this._camera) : (this._renderer.setRenderTarget(e.output), this._renderer.objects.update(e.mesh), this._renderer.renderBufferDirect(this._camera, null, e.mesh.geometry, e.mesh.material, e.mesh, null)),
            this._offScene.remove(e.mesh)
         }
      }]),
      e
   } ();
   t.
default = y
},
function(e, t, i) {
   "use strict";
   function n(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   }
   function s(e, t) {
      if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
   }
   Object.defineProperty(t, "__esModule", {
      value: !0
   });
   var a = function() {
      function e(e, t) {
         for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
         }
      }
      return function(t, i, n) {
         return i && e(t.prototype, i),
         n && e(t, n),
         t
      }
   } (),
   r = i(28),
   o = n(r),
   c = i(4),
   h = i(27),
   u = n(h),
   l = o.
default.width,
   d = o.
default.height,
   p = (o.
default.dpr, 128),
   f = 64,
   m = function() {
      function e(t, i, n, a, r) {
         s(this, e),
         this.sw = l,
         this.sh = d,
         this.friction = n,
         this.vyadd = a,
         this.gravity = .15,
         this.scale = i,
         this.w = p * i | 0,
         this.h = f * i | 0,
         this.radius = .5 * Math.max(this.w, this.h) | 0;
         var o = new THREE.PlaneGeometry(this.w, this.h),
         c = new THREE.MeshBasicMaterial({
            map: t,
            transparent: !0,
            side: THREE.DoubleSide,
            opacity: r
         });
         this.mesh = new THREE.Mesh(o, c),
         this.reset(),
         this.update()
      }
      return a(e, [{
         key: "dispose",
         value: function() {
            this.mesh.geometry.dispose(),
            this.mesh.material.dispose()
         }
      },
      {
         key: "reset",
         value: function() {
            Math.random() < .3 ? this.x = Math.random() * this.sw - this.sw / 2 : this.x = Math.random() * this.sw / 2 - this.sw / 4,
            this.y = this.sh / 2 + Math.random() * this.sh,
            this.vx = 6 * Math.random() - 3,
            this.vy = 6 * Math.random() - 3,
            this.sin = Math.random()
         }
      },
      {
         key: "hide",
         value: function() {
            this.vyadd *= 4
         }
      },
      {
         key: "move",
         value: function() {
            this.sin += .05,
            this.vx *= this.friction,
            this.vy *= this.friction,
            this.vy -= this.vyadd,
            this.x += this.vx,
            this.y += this.vy,
            (this.x - this.radius > this.sw / 2 || this.x + this.radius < -this.sw / 2 || this.y + this.radius < -this.sh / 2 || this.y - this.radius > this.sh / 2) && (this.disposeFlag ? this.dispose() : this.reset())
         }
      },
      {
         key: "update",
         value: function() {
            this.move(),
            this.mesh.position.set(this.x, this.y, 0)
         }
      }]),
      e
   } (),
   g = function() {
      function e(t) {
         var i = t.renderer,
         n = t.textures;
         s(this, e),
         this.renderer = i,
         this.texture = n["xianshi-1"],
         this.camera = new THREE.OrthographicCamera(l / -2, l / 2, d / 2, d / -2, 1, 1e3),
         this.camera.position.set(0, 0, 400),
         this.scene = new THREE.Scene,
         this.createLetters(),
         this.animate = this.animate.bind(this)
      }
      return a(e, [{
         key: "dispose",
         value: function() {
            var e = this;
            e.letters.forEach(function(e) {
               e.disposeFlag = !0
            });
            var t = {
               o: 1
            },
            i = $(u.
         default.el());
            c.TweenMax.to(t, 1.5, {
               o: 0,
               onUpdate: function() {
                  i.css("opacity", t.o)
               },
               onComplete: function() {
                  e.letters.forEach(function(t) {
                     t.dispose(),
                     e.scene.remove(t.mesh)
                  }),
                  setTimeout(function() {
                     e.animateId = cancelAnimationFrame(e.animateId),
                     i.css("opacity", 1)
                  },
                  1e3)
               }
            })
         }
      },
      {
         key: "createLetters",
         value: function() {
            this.letters = [];
            for (var e, t, i, n, s = 0; s < 30; ++s) {
               n = .4 * Math.random() + .4,
               s < 6 ? (e = .2, t = .9, i = .45) : s < 15 ? (e = .25, t = .91, i = .5) : s < 27 ? (e = .3, t = .92, i = .65, n = 1) : (e = .5, t = .96, i = .75, n = 1);
               var a = new m(this.texture, e, t, i, n);
               this.scene.add(a.mesh),
               this.letters.push(a)
            }
         }
      },
      {
         key: "animate",
         value: function() {
            this.animateId = requestAnimationFrame(this.animate),
            this.renderer.render(this.scene, this.camera),
            this.collision()
         }
      },
      {
         key: "collision",
         value: function() {
            var e, t, i, n, s, a, r, o, c, h, u, l, d;
            for (l = 0; l < 29; ++l) {
               for (e = this.letters[l], d = l + 1; d < 30; ++d) t = this.letters[d],
               i = t.x - e.x,
               n = t.y - e.y,
               s = Math.sqrt(i * i + n * n),
               a = e.radius + t.radius,
               s < a && (r = Math.atan2(n, i), o = e.x + Math.cos(r) * a, c = e.y + Math.sin(r) * a, h = .1 * (o - t.x), u = .1 * (c - t.y), e.vx -= h, e.vy -= u, t.vx += h, t.vy += u);
               e.update()
            }
         }
      }]),
      e
   } ();
   t.
default = g
},
function(e, t, i) {
   "use strict";
   function n(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   }
   function s(e, t) {
      if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
   }
   Object.defineProperty(t, "__esModule", {
      value: !0
   });
   var a = function() {
      function e(e, t) {
         for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
         }
      }
      return function(t, i, n) {
         return i && e(t.prototype, i),
         n && e(t, n),
         t
      }
   } (),
   r = i(28),
   o = n(r),
   c = i(27),
   h = n(c),
   u = o.
default.width,
   l = o.
default.height,
   d = (o.
default.dpr, 128),
   p = 64,
   f = function() {
      function e(t) {
         s(this, e);
         var i = {
            x: -12,
            y: 100
         };
         this.x = i.x,
         this.y = i.y,
         this.radius = t;
         var n = new THREE.RingGeometry(this.radius - 2, this.radius, 64),
         a = new THREE.MeshBasicMaterial({
            color: 16776960
         });
         this.mesh = new THREE.Mesh(n, a),
         this.mesh.position.x = i.x,
         this.mesh.position.y = i.y
      }
      return a(e, [{
         key: "dispose",
         value: function() {
            this.mesh.geometry.dispose(),
            this.mesh.material.dispose()
         }
      },
      {
         key: "draw",
         value: function(e, t) {
            this.x = e,
            this.y = t,
            this.mesh.position.set(e, t, 0)
         }
      }]),
      e
   } (),
   m = function() {
      function e(t, i, n, a, r) {
         s(this, e),
         this.sw = u,
         this.sh = l,
         this.friction = n,
         this.vyadd = a,
         this.gravity = .15,
         this.scale = i,
         this.w = d * i | 0,
         this.h = p * i | 0,
         this.radius = .5 * Math.max(this.w, this.h) | 0;
         var o = new THREE.PlaneGeometry(this.w, this.h),
         c = new THREE.MeshBasicMaterial({
            map: t,
            transparent: !0,
            side: THREE.DoubleSide,
            opacity: r
         });
         this.mesh = new THREE.Mesh(o, c),
         this.reset(),
         this.update()
      }
      return a(e, [{
         key: "dispose",
         value: function() {
            this.mesh.geometry.dispose(),
            this.mesh.material.dispose()
         }
      },
      {
         key: "reset",
         value: function() {
            Math.random() < .3 ? this.x = Math.random() * this.sw - this.sw / 2 : this.x = Math.random() * this.sw / 2 - this.sw / 4,
            this.y = this.sh / 2 + Math.random() * this.sh,
            this.vx = 6 * Math.random() - 3,
            this.vy = 6 * Math.random() - 3,
            this.sin = Math.random()
         }
      },
      {
         key: "hide",
         value: function() {
            this.vyadd *= 4
         }
      },
      {
         key: "move",
         value: function() {
            this.sin += .05,
            this.vx *= this.friction,
            this.vy *= this.friction,
            this.vy -= this.vyadd,
            this.x += this.vx,
            this.y += this.vy,
            (this.x - this.radius > this.sw / 2 || this.x + this.radius < -this.sw / 2 || this.y + this.radius < -this.sh / 2 || this.y - this.radius > this.sh / 2) && (this.disposeFlag ? this.dispose() : this.reset())
         }
      },
      {
         key: "update",
         value: function() {
            this.move(),
            this.mesh.position.set(this.x, this.y, 0)
         }
      }]),
      e
   } (),
   g = function() {
      function e(t) {
         var i = t.renderer,
         n = t.textures;
         s(this, e),
         this.renderer = i,
         this.texture = n["xianshi-2"],
         this.camera = new THREE.OrthographicCamera(u / -2, u / 2, l / 2, l / -2, 1, 1e3),
         this.camera.position.set(0, 0, 400),
         this.scene = new THREE.Scene,
         this.createLetters(),
         this.animate = this.animate.bind(this)
      }
      return a(e, [{
         key: "dispose",
         value: function() {
            var e = this;
            e.letters.forEach(function(e) {
               e.disposeFlag = !0
            });
            var t = {
               o: 1
            },
            i = $(h.
         default.el());
            TweenMax.to(t, 1.5, {
               o: 0,
               onUpdate: function() {
                  i.css("opacity", t.o)
               },
               onComplete: function() {
                  e.letters.forEach(function(t) {
                     t.dispose(),
                     e.scene.remove(t.mesh)
                  }),
                  setTimeout(function() {
                     e.animateId = cancelAnimationFrame(e.animateId),
                     i.css("opacity", 1)
                  },
                  1e3)
               }
            })
         }
      },
      {
         key: "createLetters",
         value: function() {
            this.letters = [];
            for (var e, t, i, n, s = 0; s < 30; ++s) {
               n = .4 * Math.random() + .4,
               s < 6 ? (e = .2, t = .9, i = .4) : s < 15 ? (e = .25, t = .91, i = .45) : s < 27 ? (e = .3, t = .92, i = .5, n = 1) : (e = .5, t = .96, i = .6, n = 1);
               var a = new m(this.texture, e, t, i, n);
               this.scene.add(a.mesh),
               this.letters.push(a)
            }
            this.emptyBall = new f(60)
         }
      },
      {
         key: "animate",
         value: function() {
            self.animateId = requestAnimationFrame(this.animate),
            this.renderer.render(this.scene, this.camera),
            this.collision()
         }
      },
      {
         key: "collision",
         value: function() {
            var e, t, i, n, s, a, r, o, c, h, u;
            for (u = 0; u < 30; ++u) e = this.letters[u],
            t = this.emptyBall.x - e.x,
            i = this.emptyBall.y - e.y,
            n = Math.sqrt(t * t + i * i),
            s = e.radius + this.emptyBall.radius,
            n < s && (a = Math.atan2(i, t), r = e.x + Math.cos(a) * s, o = e.y + Math.sin(a) * s, c = .1 * (r - this.emptyBall.x), h = .1 * (o - this.emptyBall.y), e.vx -= c, e.vy -= h),
            e.update()
         }
      }]),
      e
   } ();
   t.
default = g
},
function(e, t, i) {
   "use strict";
   function n(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   }
   function s(e, t) {
      if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
   }
   Object.defineProperty(t, "__esModule", {
      value: !0
   });
   var a = function() {
      function e(e, t) {
         for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
         }
      }
      return function(t, i, n) {
         return i && e(t.prototype, i),
         n && e(t, n),
         t
      }
   } (),
   r = i(4),
   o = i(259),
   c = n(o),
   h = i(28),
   u = n(h),
   l = u.
default.waterWidth,
   d = u.
default.waterHeight,
   p = u.
default.dpr,
   f = function() {
      var e = 2 * Math.PI / 250,
      t = Math.PI;
      return function(i) {
         return 80 * Math.sin(e * i + t)
      }
   } (),
   m = function() {
      function e(t) {
         var i = (t.renderer, t.textures);
         s(this, e),
         this.renderer = new THREE.WebGLRenderer,
         this.renderer.setSize(l, d),
         this.renderer.setPixelRatio(p),
         this.textures = i,
         this.initScene(),
         this.transition(),
         this.animate = this.animate.bind(this),
         this.renderer.domElement.style.bottom = 0,
         $("#j-view-back").append(this.renderer.domElement)
      }
      return a(e, [{
         key: "initScene",
         value: function() {
            var e = {
               minFilter: THREE.LinearFilter,
               magFilter: THREE.LinearFilter,
               format: THREE.RGBFormat,
               stencilBuffer: !0,
               depthBuffer: !0
            };
            this.fbo = new THREE.WebGLRenderTarget(l * p, d * p, e),
            this.liquid = new c.
         default(this.renderer, this.textures, this.fbo),
            this.scene = new THREE.Scene,
            this._w = window.innerWidth,
            this._h = d;
            var t = this._w / -2,
            n = this._w / 2,
            s = this._h / 2,
            a = this._h / -2;
            this.camera = new THREE.OrthographicCamera(t, n, s, a, -10, 10),
            this._material = new THREE.ShaderMaterial({
               uniforms: {
                  time: {
                     type: "f",
                     value: 0
                  },
                  textureDiffuse1: {
                     type: "t",
                     value: null
                  },
                  textureDiffuse2: {
                     type: "t",
                     value: null
                  },
                  threshold: {
                     type: "f",
                     value: .1
                  },
                  transition: {
                     type: "f",
                     value: 0
                  },
                  resolution: {
                     type: "v2",
                     value: new THREE.Vector2(1, this._h / this._w)
                  }
               },
               vertexShader: i(676),
               fragmentShader: i(673)
            });
            var r = new THREE.PlaneBufferGeometry(this._w, this._h);
            this._mesh = new THREE.Mesh(r, this._material),
            this.scene.add(this._mesh),
            this.liquidY = 0,
            this.liquidX = this._w >> 1,
            this._material.uniforms.textureDiffuse1.value = this.fbo.texture
         }
      },
      {
         key: "transition",
         value: function() {
            var e = this,
            t = this.renderer.domElement,
            i = {
               opacity: 0
            };
            r.TweenMax.to(this._material.uniforms.transition, 5, {
               value: 1,
               onComplete: function() {
                  e._material.uniforms.transition.value = 1
               }
            }),
            r.TweenMax.to(i, 1, {
               opacity: 1,
               onUpdate: function() {
                  t.style.opacity = i.opacity
               },
               ease: r.Power1.easeIn
            })
         }
      },
      {
         key: "animate",
         value: function() {
            this.animId = requestAnimationFrame(this.animate),
            this.liquid.render(),
            this.useAutoWave && (this.liquidY > this._h + 200 && (this.liquidY = 0), this.liquid.touchMove(f(this.liquidY) + this.liquidX, this.liquidY), this.liquidY += 2),
            this.renderer.render(this.scene, this.camera)
         }
      },
      {
         key: "touch",
         value: function(e, t) {
            this.liquid.touchMove(e, t)
         }
      },
      {
         key: "dispose",
         value: function() {
            cancelAnimationFrame(this.animId),
            this.renderer.dispose();
            var e = {
               opacity: 1
            },
            t = this.renderer.domElement;
            r.TweenMax.to(e, 1, {
               opacity: 0,
               onUpdate: function() {
                  t.style.opacity = e.opacity
               },
               onComplete: function() {
                  t.parentNode.removeChild(t)
               }
            })
         }
      }]),
      e
   } ();
   t.
default = m
},
function(e, t, i) {
   "use strict";
   function n(e, t) {
      return new Promise(function(i, n) { (new THREE.TextureLoader).load(t,
         function(t) {
            i({
               name: e,
               texture: t
            })
         },
         function() {},
         function() {
            n()
         })
      })
   }
   function s(e) {
      return Promise.all(e.map(function(e) {
         return n(e.name, e.url)
      }))
   }
   Object.defineProperty(t, "__esModule", {
      value: !0
   }),
   t.
default = s,
   i(72)
},
function(e, t, i) {
   "use strict";
   i(95);
   var n = i(10),
   s = function(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   } (n),
   a = i(93); !
   function(e) {
      e.Asset = Hilo.Class.create({
         Mixes: Hilo.EventMixin,
         load: function() {
            var t = [{
               id: "block",
               src: i(595)
            },
            {
               id: "man",
               src: i(631)
            },
            {
               id: "xunzhao",
               src: i(655)
            },
            {
               id: "guide-move-static",
               src: i(622)
            },
            {
               id: "guide-jump",
               src: i(620)
            },
            {
               id: "guide-jump-static",
               src: i(619)
            },
            {
               id: "guide-blink",
               src: i(618)
            },
            {
               id: "guide",
               src: i(627)
            },
            {
               id: "guide-new",
               src: i(623)
            },
            {
               id: "intro",
               src: i(628)
            },
            {
               id: "xxx-1",
               src: i(656)
            },
            {
               id: "xxx-2",
               src: i(657)
            },
            {
               id: "xxx-3",
               src: i(658)
            },
            {
               id: "mengxiang-text",
               src: i(637)
            },
            {
               id: "mengxiang-fly-1",
               src: i(634)
            },
            {
               id: "mengxiang-fly-2",
               src: i(635)
            },
            {
               id: "mengxiang-fly-3",
               src: i(636)
            },
            {
               id: "daji-static",
               src: i(609)
            },
            {
               id: "daji-0",
               src: i(607)
            },
            {
               id: "daji-1",
               src: i(608)
            },
            {
               id: "tongku",
               src: i(649)
            },
            {
               id: "sikao-repeat",
               src: i(647)
            },
            {
               id: "sikao-trans",
               src: i(648)
            },
            {
               id: "chengzhang-text-0",
               src: i(604)
            },
            {
               id: "chengzhang-text-1",
               src: i(605)
            },
            {
               id: "chengzhang-before-0",
               src: i(600)
            },
            {
               id: "chengzhang-before-1",
               src: i(601)
            },
            {
               id: "chengzhang-before-2",
               src: i(602)
            },
            {
               id: "chengzhang-before-3",
               src: i(603)
            },
            {
               id: "chengzhang-after-0",
               src: i(596)
            },
            {
               id: "chengzhang-after-1",
               src: i(597)
            },
            {
               id: "chengzhang-after-2",
               src: i(598)
            },
            {
               id: "chengzhang-after-3",
               src: i(599)
            },
            {
               id: "gudu-text-0",
               src: i(615)
            },
            {
               id: "gudu-text-1",
               src: i(616)
            },
            {
               id: "gudu-text-2",
               src: i(617)
            },
            {
               id: "gudu-repeat",
               src: i(613)
            },
            {
               id: "gudu-bihua",
               src: i(612)
            },
            {
               id: "gudu-static",
               src: i(614)
            },
            {
               id: "peiban-star",
               src: i(643)
            },
            {
               id: "peiban-text",
               src: i(644)
            },
            {
               id: "peiban-trans-0",
               src: i(645)
            },
            {
               id: "peiban-trans-1",
               src: i(646)
            },
            {
               id: "peiban-repeat-0",
               src: i(641)
            },
            {
               id: "peiban-repeat-1",
               src: i(642)
            },
            {
               id: "ai-static",
               src: i(594)
            },
            {
               id: "ai-repeat-0",
               src: i(592)
            },
            {
               id: "ai-repeat-1",
               src: i(593)
            },
            {
               id: "xingfu-text",
               src: i(654)
            },
            {
               id: "xing-repeat",
               src: i(653)
            },
            {
               id: "fu-repeat",
               src: i(610)
            },
            {
               id: "guide-s7",
               src: i(625)
            },
            {
               id: "cy",
               src: i(606)
            },
            {
               id: "ty",
               src: i(650)
            },
            {
               id: "nuli",
               src: i(640)
            },
            {
               id: "nuli-v2",
               src: i(639)
            },
            {
               id: "ni-copy",
               src: i(638)
            },
            {
               id: "guide-right",
               src: i(624)
            },
            {
               id: "guide-top",
               src: i(626)
            },
            {
               id: "guide-long",
               src: i(621)
            },
            {
               id: "jianchi",
               src: i(629)
            },
            {
               id: "mengxiang-end-trans",
               src: i(633)
            },
            {
               id: "mengxiang-end-repeat",
               src: i(632)
            },
            {
               id: "man-colors",
               src: i(630)
            }];
            this.queue = new Hilo.LoadQueue,
            this.queue.add(t),
            this.queue.on("complete", this.onComplete.bind(this)),
            this.queue.start(),
            e.progress = 0,
            this.elem = (0, s.
         default)(".splash-percentage"),
            this.clock = setInterval(function() {
               var t = this.queue.getLoaded() / this.queue.getTotal();
               e.progress = 100 * t.toFixed(2) >> 0,
               this.elem.html(e.progress),
               100 == e.progress && this.hideLoading()
            }.bind(this), 20)
         },
         onComplete: function(e) {
            this.block = this.queue.get("block").content,
            this.man = this.queue.get("man").content,
            this.xunzhao = this.queue.get("xunzhao").content,
            this.guide_move_static = this.queue.get("guide-move-static").content,
            this.xxx_1 = this.queue.get("xxx-1").content,
            this.xxx_2 = this.queue.get("xxx-2").content,
            this.xxx_3 = this.queue.get("xxx-3").content,
            this.guide_jump = new Hilo.TextureAtlas({
               image: this.queue.get("guide-jump").content,
               frames: [[540, 1352, 267, 148], [540, 1202, 267, 148], [540, 1052, 267, 148], [540, 902, 267, 148], [1616, 752, 267, 148], [1347, 752, 267, 148], [1078, 752, 267, 148], [809, 752, 267, 148], [540, 752, 267, 148], [1616, 602, 267, 148], [1347, 602, 267, 148], [1078, 602, 267, 148], [809, 602, 267, 148], [540, 602, 267, 148], [271, 1802, 267, 148], [271, 1652, 267, 148], [271, 1502, 267, 148], [271, 1352, 267, 148], [271, 1202, 267, 148], [271, 1052, 267, 148], [271, 902, 267, 148], [271, 752, 267, 148], [271, 602, 267, 148], [1616, 452, 267, 148], [1347, 452, 267, 148], [1078, 452, 267, 148], [809, 452, 267, 148], [540, 452, 267, 148], [271, 452, 267, 148], [1616, 302, 267, 148], [1347, 302, 267, 148], [1078, 302, 267, 148], [809, 302, 267, 148], [540, 302, 267, 148], [271, 302, 267, 148], [2, 1802, 267, 148], [2, 1652, 267, 148], [2, 1502, 267, 148], [2, 1352, 267, 148], [2, 1202, 267, 148], [2, 1052, 267, 148], [2, 902, 267, 148], [2, 752, 267, 148], [2, 602, 267, 148], [2, 452, 267, 148], [2, 302, 267, 148], [1616, 152, 267, 148], [1347, 152, 267, 148], [1078, 152, 267, 148], [809, 152, 267, 148], [540, 152, 267, 148], [271, 152, 267, 148], [2, 152, 267, 148], [1616, 2, 267, 148], [1347, 2, 267, 148], [1078, 2, 267, 148], [809, 2, 267, 148], [540, 2, 267, 148], [271, 2, 267, 148], [2, 2, 267, 148]],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]
               }
            }),
            this.guide_jump_static = this.queue.get("guide-jump-static").content,
            this.guide = new Hilo.TextureAtlas({
               image: this.queue.get("guide").content,
               frames: [[2, 84, 395, 39], [2, 43, 395, 39], [2, 2, 395, 39]]
            }),
            this.guide_new = new Hilo.TextureAtlas({
               image: this.queue.get("guide-new").content,
               frames: [[0, 0, 418, 81], [0, 81, 418, 81], [0, 162, 418, 81]]
            }),
            this.guide_blink = new Hilo.TextureAtlas({
               image: this.queue.get("guide-blink").content,
               frames: [[2, 453, 400, 39], [2, 412, 400, 39], [2, 371, 400, 39], [2, 330, 400, 39], [2, 289, 400, 39], [2, 248, 400, 39], [2, 207, 400, 39], [2, 166, 400, 39], [2, 125, 400, 39], [2, 84, 400, 39], [2, 43, 400, 39], [2, 2, 400, 39], [2, 453, 400, 39]],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
               }
            }),
            this.intro = this.queue.get("intro").content,
            this.mengxiang_text = new Hilo.TextureAtlas({
               image: this.queue.get("mengxiang-text").content,
               frames: [[1352, 1460, 448, 241], [902, 1703, 448, 241], [902, 1460, 448, 241], [1352, 1217, 448, 241], [902, 1217, 448, 241], [1352, 974, 448, 241], [902, 974, 448, 241], [452, 1703, 448, 241], [452, 1460, 448, 241], [452, 1217, 448, 241], [452, 974, 448, 241], [1352, 731, 448, 241], [902, 731, 448, 241], [452, 731, 448, 241], [1352, 488, 448, 241], [902, 488, 448, 241], [452, 488, 448, 241], [2, 1703, 448, 241], [2, 1460, 448, 241], [2, 1217, 448, 241], [2, 974, 448, 241], [2, 731, 448, 241], [2, 488, 448, 241], [1352, 245, 448, 241], [902, 245, 448, 241], [452, 245, 448, 241], [2, 245, 448, 241], [1352, 2, 448, 241], [902, 2, 448, 241], [452, 2, 448, 241], [2, 2, 448, 241]],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
               }
            }),
            this.mengxiang_fly_1 = new Hilo.TextureAtlas({
               image: this.queue.get("mengxiang-fly-1").content,
               frames: [[461, 412, 151, 203], [767, 207, 151, 203], [614, 207, 151, 203], [461, 207, 151, 203], [308, 617, 151, 203], [308, 412, 151, 203], [308, 207, 151, 203], [155, 617, 151, 203], [155, 412, 151, 203], [155, 207, 151, 203], [767, 2, 151, 203], [614, 2, 151, 203], [461, 2, 151, 203], [308, 2, 151, 203], [155, 2, 151, 203], [2, 617, 151, 203], [2, 412, 151, 203], [2, 207, 151, 203], [2, 2, 151, 203]],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
               }
            }),
            this.mengxiang_fly_2 = new Hilo.TextureAtlas({
               image: this.queue.get("mengxiang-fly-2").content,
               frames: [[461, 412, 151, 203], [767, 207, 151, 203], [614, 207, 151, 203], [461, 207, 151, 203], [308, 617, 151, 203], [308, 412, 151, 203], [308, 207, 151, 203], [155, 617, 151, 203], [155, 412, 151, 203], [155, 207, 151, 203], [767, 2, 151, 203], [614, 2, 151, 203], [461, 2, 151, 203], [308, 2, 151, 203], [155, 2, 151, 203], [2, 617, 151, 203], [2, 412, 151, 203], [2, 207, 151, 203], [2, 2, 151, 203]],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
               }
            }),
            this.mengxiang_fly_3 = new Hilo.TextureAtlas({
               image: this.queue.get("mengxiang-fly-3").content,
               frames: [[461, 412, 151, 203], [767, 207, 151, 203], [614, 207, 151, 203], [461, 207, 151, 203], [308, 617, 151, 203], [308, 412, 151, 203], [308, 207, 151, 203], [155, 617, 151, 203], [155, 412, 151, 203], [155, 207, 151, 203], [767, 2, 151, 203], [614, 2, 151, 203], [461, 2, 151, 203], [308, 2, 151, 203], [155, 2, 151, 203], [2, 617, 151, 203], [2, 412, 151, 203], [2, 207, 151, 203], [2, 2, 151, 203]],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
               }
            }),
            this.daji_static = this.queue.get("daji-static").content,
            this.daji = [new Hilo.TextureAtlas({
               image: this.queue.get("daji-0").content,
               frames: [[2, 2, 442, 160], [446, 2, 442, 160], [890, 2, 442, 160], [1334, 2, 442, 160], [2, 164, 442, 160], [446, 164, 442, 160], [890, 164, 442, 160], [1334, 164, 442, 160], [2, 326, 442, 160], [446, 326, 442, 160], [890, 326, 442, 160], [1334, 326, 442, 160], [2, 488, 442, 160], [446, 488, 442, 160], [890, 488, 442, 160], [1334, 488, 442, 160], [2, 650, 442, 160], [2, 812, 442, 160], [2, 974, 442, 160], [2, 1136, 442, 160], [2, 1298, 442, 160], [2, 1460, 442, 160], [2, 1622, 442, 160], [2, 1784, 442, 160], [446, 650, 442, 160], [890, 650, 442, 160], [1334, 650, 442, 160], [446, 812, 442, 160], [890, 812, 442, 160], [1334, 812, 442, 160], [446, 974, 442, 160], [890, 974, 442, 160], [1334, 974, 442, 160], [446, 1136, 442, 160], [446, 1298, 442, 160], [446, 1460, 442, 160], [446, 1622, 442, 160], [446, 1784, 442, 160], [890, 1136, 442, 160], [1334, 1136, 442, 160], [890, 1298, 442, 160], [1334, 1298, 442, 160], [890, 1460, 442, 160], [890, 1622, 442, 160], [890, 1784, 442, 160], [1334, 1460, 442, 160], [1334, 1622, 442, 160], [1334, 1784, 442, 160]],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]
               }
            }), new Hilo.TextureAtlas({
               image: this.queue.get("daji-1").content,
               frames: [[2, 2, 442, 160], [446, 2, 442, 160], [2, 164, 442, 160], [446, 164, 442, 160], [2, 326, 442, 160], [446, 326, 442, 160], [2, 488, 442, 160], [446, 488, 442, 160], [2, 650, 442, 160], [2, 812, 442, 160], [446, 650, 442, 160], [446, 812, 442, 160]],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
               }
            })],
            this.tongku = new Hilo.TextureAtlas({
               image: this.queue.get("tongku").content,
               frames: [[1037, 653, 343, 215], [1037, 653, 343, 215], [692, 653, 343, 215], [347, 1738, 343, 215], [347, 1521, 343, 215], [347, 1304, 343, 215], [347, 1087, 343, 215], [347, 870, 343, 215], [347, 653, 343, 215], [1382, 436, 343, 215], [1037, 436, 343, 215], [692, 436, 343, 215], [347, 436, 343, 215], [2, 1738, 343, 215], [2, 1521, 343, 215], [2, 1304, 343, 215], [2, 1087, 343, 215], [2, 870, 343, 215], [2, 653, 343, 215], [2, 436, 343, 215], [1382, 219, 343, 215], [1037, 219, 343, 215], [692, 219, 343, 215], [347, 219, 343, 215], [2, 219, 343, 215], [1382, 2, 343, 215], [1037, 2, 343, 215], [692, 2, 343, 215], [347, 2, 343, 215], [2, 2, 343, 215]],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
               }
            }),
            this.sikao_repeat = new Hilo.TextureAtlas({
               image: this.queue.get("sikao-repeat").content,
               frames: [[2, 436, 343, 215], [2, 219, 343, 215], [2, 2, 343, 215]],
               sprites: {
                  xxx: [0, 1, 2]
               }
            }),
            this.sikao_trans = new Hilo.TextureAtlas({
               image: this.queue.get("sikao-trans").content,
               frames: [[1382, 653, 343, 215], [1037, 653, 343, 215], [692, 653, 343, 215], [347, 1738, 343, 215], [347, 1521, 343, 215], [347, 1304, 343, 215], [347, 1087, 343, 215], [347, 870, 343, 215], [347, 653, 343, 215], [1382, 436, 343, 215], [1037, 436, 343, 215], [692, 436, 343, 215], [347, 436, 343, 215], [2, 1738, 343, 215], [2, 1521, 343, 215], [2, 1304, 343, 215], [2, 1087, 343, 215], [2, 870, 343, 215], [2, 653, 343, 215], [2, 436, 343, 215], [1382, 219, 343, 215], [1037, 219, 343, 215], [692, 219, 343, 215], [347, 219, 343, 215], [2, 219, 343, 215], [1382, 2, 343, 215], [1037, 2, 343, 215], [692, 2, 343, 215], [347, 2, 343, 215], [2, 2, 343, 215]],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
               }
            }),
            this.chengzhang_text = [new Hilo.TextureAtlas({
               image: this.queue.get("chengzhang-text-0").content,
               frames: [[2, 2, 1209, 274], [2, 278, 1209, 274], [2, 554, 1209, 274], [2, 830, 1209, 274], [2, 1106, 1209, 274], [2, 1382, 1209, 274], [2, 1658, 1209, 274]],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6]
               }
            }), new Hilo.TextureAtlas({
               image: this.queue.get("chengzhang-text-1").content,
               frames: [[2, 2, 1209, 274], [2, 278, 1209, 274], [2, 554, 1209, 274], [2, 830, 1209, 274], [2, 1106, 1209, 274], [2, 1382, 1209, 274]],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5]
               }
            })],
            this.chengzhang_before = [new Hilo.TextureAtlas({
               image: this.queue.get("chengzhang-before-0").content,
               frames: [[2, 2, 473, 274], [477, 2, 473, 274], [952, 2, 473, 274], [1427, 2, 473, 274], [2, 278, 473, 274], [477, 278, 473, 274], [952, 278, 473, 274], [1427, 278, 473, 274], [2, 554, 473, 274], [2, 830, 473, 274], [2, 1106, 473, 274], [2, 1382, 473, 274], [2, 1658, 473, 274], [477, 554, 473, 274], [952, 554, 473, 274], [1427, 554, 473, 274], [477, 830, 473, 274], [952, 830, 473, 274], [1427, 830, 473, 274], [477, 1106, 473, 274], [477, 1382, 473, 274], [477, 1658, 473, 274], [952, 1106, 473, 274], [1427, 1106, 473, 274], [952, 1382, 473, 274], [952, 1658, 473, 274], [1427, 1382, 473, 274], [1427, 1658, 473, 274]],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
               }
            }), new Hilo.TextureAtlas({
               image: this.queue.get("chengzhang-before-1").content,
               frames: [[2, 2, 473, 274], [477, 2, 473, 274], [952, 2, 473, 274], [1427, 2, 473, 274], [2, 278, 473, 274], [477, 278, 473, 274], [952, 278, 473, 274], [1427, 278, 473, 274], [2, 554, 473, 274], [2, 830, 473, 274], [2, 1106, 473, 274], [2, 1382, 473, 274], [2, 1658, 473, 274], [477, 554, 473, 274], [952, 554, 473, 274], [1427, 554, 473, 274], [477, 830, 473, 274], [952, 830, 473, 274], [1427, 830, 473, 274], [477, 1106, 473, 274], [477, 1382, 473, 274], [477, 1658, 473, 274], [952, 1106, 473, 274], [1427, 1106, 473, 274], [952, 1382, 473, 274], [952, 1658, 473, 274], [1427, 1382, 473, 274], [1427, 1658, 473, 274]],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
               }
            }), new Hilo.TextureAtlas({
               image: this.queue.get("chengzhang-before-2").content,
               frames: [[2, 2, 473, 274], [477, 2, 473, 274], [952, 2, 473, 274], [1427, 2, 473, 274], [2, 278, 473, 274], [477, 278, 473, 274], [952, 278, 473, 274], [1427, 278, 473, 274], [2, 554, 473, 274], [2, 830, 473, 274], [2, 1106, 473, 274], [2, 1382, 473, 274], [2, 1658, 473, 274], [477, 554, 473, 274], [952, 554, 473, 274], [1427, 554, 473, 274], [477, 830, 473, 274], [952, 830, 473, 274], [1427, 830, 473, 274], [477, 1106, 473, 274], [477, 1382, 473, 274], [477, 1658, 473, 274], [952, 1106, 473, 274], [1427, 1106, 473, 274], [952, 1382, 473, 274], [952, 1658, 473, 274], [1427, 1382, 473, 274], [1427, 1658, 473, 274]],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
               }
            }), new Hilo.TextureAtlas({
               image: this.queue.get("chengzhang-before-3").content,
               frames: [[2, 2, 473, 274], [477, 2, 473, 274], [2, 278, 473, 274], [477, 278, 473, 274], [2, 554, 473, 274], [477, 554, 473, 274], [2, 830, 473, 274], [477, 830, 473, 274]],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7]
               }
            })],
            this.chengzhang_after = [new Hilo.TextureAtlas({
               image: this.queue.get("chengzhang-after-0").content,
               frames: [[2, 2, 471, 274], [475, 2, 471, 274], [948, 2, 471, 274], [1421, 2, 471, 274], [2, 278, 471, 274], [475, 278, 471, 274], [948, 278, 471, 274], [1421, 278, 471, 274], [2, 554, 471, 274], [2, 830, 471, 274], [2, 1106, 471, 274], [2, 1382, 471, 274], [2, 1658, 471, 274], [475, 554, 471, 274], [948, 554, 471, 274], [1421, 554, 471, 274], [475, 830, 471, 274], [948, 830, 471, 274], [1421, 830, 471, 274], [475, 1106, 471, 274], [475, 1382, 471, 274], [475, 1658, 471, 274], [948, 1106, 471, 274], [1421, 1106, 471, 274], [948, 1382, 471, 274], [948, 1658, 471, 274], [1421, 1382, 471, 274], [1421, 1658, 471, 274]],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
               }
            }), new Hilo.TextureAtlas({
               image: this.queue.get("chengzhang-after-1").content,
               frames: [[2, 2, 471, 274], [475, 2, 471, 274], [948, 2, 471, 274], [1421, 2, 471, 274], [2, 278, 471, 274], [475, 278, 471, 274], [948, 278, 471, 274], [1421, 278, 471, 274], [2, 554, 471, 274], [2, 830, 471, 274], [2, 1106, 471, 274], [2, 1382, 471, 274], [2, 1658, 471, 274], [475, 554, 471, 274], [948, 554, 471, 274], [1421, 554, 471, 274], [475, 830, 471, 274], [948, 830, 471, 274], [1421, 830, 471, 274], [475, 1106, 471, 274], [475, 1382, 471, 274], [475, 1658, 471, 274], [948, 1106, 471, 274], [1421, 1106, 471, 274], [948, 1382, 471, 274], [948, 1658, 471, 274], [1421, 1382, 471, 274], [1421, 1658, 471, 274]],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
               }
            }), new Hilo.TextureAtlas({
               image: this.queue.get("chengzhang-after-2").content,
               frames: [[2, 2, 471, 274], [475, 2, 471, 274], [948, 2, 471, 274], [1421, 2, 471, 274], [2, 278, 471, 274], [475, 278, 471, 274], [948, 278, 471, 274], [1421, 278, 471, 274], [2, 554, 471, 274], [2, 830, 471, 274], [2, 1106, 471, 274], [2, 1382, 471, 274], [2, 1658, 471, 274], [475, 554, 471, 274], [948, 554, 471, 274], [1421, 554, 471, 274], [475, 830, 471, 274], [948, 830, 471, 274], [1421, 830, 471, 274], [475, 1106, 471, 274], [475, 1382, 471, 274], [475, 1658, 471, 274], [948, 1106, 471, 274], [1421, 1106, 471, 274], [948, 1382, 471, 274], [948, 1658, 471, 274], [1421, 1382, 471, 274], [1421, 1658, 471, 274]],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
               }
            }), new Hilo.TextureAtlas({
               image: this.queue.get("chengzhang-after-3").content,
               frames: [[2, 2, 471, 274]],
               sprites: {
                  xxx: [0]
               }
            })],
            this.gudu_text = [new Hilo.TextureAtlas({
               image: this.queue.get("gudu-text-0").content,
               frames: [[2, 2, 323, 266], [327, 2, 323, 266], [652, 2, 323, 266], [977, 2, 323, 266], [1302, 2, 323, 266], [1627, 2, 323, 266], [2, 270, 323, 266], [2, 538, 323, 266], [2, 806, 323, 266], [2, 1074, 323, 266], [2, 1342, 323, 266], [2, 1610, 323, 266], [327, 270, 323, 266], [652, 270, 323, 266], [977, 270, 323, 266], [1302, 270, 323, 266], [1627, 270, 323, 266], [327, 538, 323, 266], [327, 806, 323, 266], [327, 1074, 323, 266], [327, 1342, 323, 266], [327, 1610, 323, 266], [652, 538, 323, 266], [977, 538, 323, 266], [1302, 538, 323, 266], [1627, 538, 323, 266], [652, 806, 323, 266], [652, 1074, 323, 266], [652, 1342, 323, 266], [652, 1610, 323, 266], [977, 806, 323, 266], [1302, 806, 323, 266], [1627, 806, 323, 266], [977, 1074, 323, 266], [1302, 1074, 323, 266], [1627, 1074, 323, 266], [977, 1342, 323, 266], [977, 1610, 323, 266], [1302, 1342, 323, 266], [1627, 1342, 323, 266], [1302, 1610, 323, 266], [1627, 1610, 323, 266]],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41]
               }
            }), new Hilo.TextureAtlas({
               image: this.queue.get("gudu-text-1").content,
               frames: [[2, 2, 323, 266], [327, 2, 323, 266], [652, 2, 323, 266], [977, 2, 323, 266], [1302, 2, 323, 266], [1627, 2, 323, 266], [2, 270, 323, 266], [2, 538, 323, 266], [2, 806, 323, 266], [2, 1074, 323, 266], [2, 1342, 323, 266], [2, 1610, 323, 266], [327, 270, 323, 266], [652, 270, 323, 266], [977, 270, 323, 266], [1302, 270, 323, 266], [1627, 270, 323, 266], [327, 538, 323, 266], [327, 806, 323, 266], [327, 1074, 323, 266], [327, 1342, 323, 266], [327, 1610, 323, 266], [652, 538, 323, 266], [977, 538, 323, 266], [1302, 538, 323, 266], [1627, 538, 323, 266], [652, 806, 323, 266], [652, 1074, 323, 266], [652, 1342, 323, 266], [652, 1610, 323, 266], [977, 806, 323, 266], [1302, 806, 323, 266], [1627, 806, 323, 266], [977, 1074, 323, 266], [1302, 1074, 323, 266], [1627, 1074, 323, 266], [977, 1342, 323, 266], [977, 1610, 323, 266], [1302, 1342, 323, 266], [1627, 1342, 323, 266], [1302, 1610, 323, 266], [1627, 1610, 323, 266]],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41]
               }
            }), new Hilo.TextureAtlas({
               image: this.queue.get("gudu-text-2").content,
               frames: [[2, 2, 323, 266], [327, 2, 323, 266], [652, 2, 323, 266], [977, 2, 323, 266], [1302, 2, 323, 266], [1627, 2, 323, 266], [2, 270, 323, 266], [2, 538, 323, 266], [2, 806, 323, 266], [2, 1074, 323, 266], [2, 1342, 323, 266], [2, 1610, 323, 266], [327, 270, 323, 266], [652, 270, 323, 266], [977, 270, 323, 266], [1302, 270, 323, 266], [1627, 270, 323, 266], [327, 538, 323, 266], [327, 806, 323, 266], [327, 1074, 323, 266], [327, 1342, 323, 266], [327, 1610, 323, 266], [652, 538, 323, 266], [977, 538, 323, 266], [1302, 538, 323, 266], [1627, 538, 323, 266], [652, 806, 323, 266], [652, 1074, 323, 266], [652, 1342, 323, 266], [652, 1610, 323, 266], [977, 806, 323, 266], [1302, 806, 323, 266], [1627, 806, 323, 266], [977, 1074, 323, 266], [1302, 1074, 323, 266], [1627, 1074, 323, 266]],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
               }
            })],
            this.gudu_repeat = new Hilo.TextureAtlas({
               image: this.queue.get("gudu-repeat").content,
               frames: [[1627, 1074, 323, 266], [1302, 1074, 323, 266], [977, 1074, 323, 266], [1627, 806, 323, 266], [1302, 806, 323, 266], [977, 806, 323, 266], [652, 1610, 323, 266], [652, 1342, 323, 266], [652, 1074, 323, 266], [652, 806, 323, 266], [1627, 538, 323, 266], [1302, 538, 323, 266], [977, 538, 323, 266], [652, 538, 323, 266], [327, 1610, 323, 266], [327, 1342, 323, 266], [327, 1074, 323, 266], [327, 806, 323, 266], [327, 538, 323, 266], [1627, 270, 323, 266], [1302, 270, 323, 266], [977, 270, 323, 266], [652, 270, 323, 266], [327, 270, 323, 266], [2, 1610, 323, 266], [2, 1342, 323, 266], [2, 1074, 323, 266], [2, 806, 323, 266], [2, 538, 323, 266], [2, 270, 323, 266], [1627, 2, 323, 266], [1302, 2, 323, 266], [977, 2, 323, 266], [652, 2, 323, 266], [327, 2, 323, 266], [2, 2, 323, 266]],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
               }
            }),
            this.gudu_bihua = new Hilo.TextureAtlas({
               image: this.queue.get("gudu-bihua").content,
               frames: [[58, 261, 54, 35], [2, 261, 54, 35], [170, 224, 54, 35], [114, 224, 54, 35], [58, 224, 54, 35], [2, 224, 54, 35], [170, 187, 54, 35], [114, 187, 54, 35], [58, 187, 54, 35], [2, 187, 54, 35], [170, 150, 54, 35], [114, 150, 54, 35], [58, 150, 54, 35], [2, 150, 54, 35], [170, 113, 54, 35], [114, 113, 54, 35], [58, 113, 54, 35], [2, 113, 54, 35], [170, 76, 54, 35], [114, 76, 54, 35], [58, 76, 54, 35], [2, 76, 54, 35], [170, 39, 54, 35], [114, 39, 54, 35], [58, 39, 54, 35], [2, 39, 54, 35], [170, 2, 54, 35], [114, 2, 54, 35], [58, 2, 54, 35], [2, 2, 54, 35]],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
               }
            }),
            this.gudu_static = new Hilo.TextureAtlas({
               image: this.queue.get("gudu-static").content,
               frames: [[2, 2, 323, 266], [327, 2, 70, 46]]
            }),
            this.peiban_star = this.queue.get("peiban-star").content,
            this.peiban_text = new Hilo.TextureAtlas({
               image: this.queue.get("peiban-text").content,
               frames: [[1, 1, 149, 261], [1, 264, 149, 261]]
            }),
            this.peiban_trans = [new Hilo.TextureAtlas({
               image: this.queue.get("peiban-trans-0").content,
               frames: [[1, 1, 149, 261], [1, 264, 149, 261], [1, 527, 149, 261], [1, 790, 149, 261], [1, 1053, 149, 261], [1, 1316, 149, 261], [1, 1579, 149, 261], [152, 1, 149, 261], [152, 264, 149, 261], [152, 527, 149, 261], [152, 790, 149, 261], [152, 1053, 149, 261], [152, 1316, 149, 261], [152, 1579, 149, 261], [303, 1, 149, 261], [454, 1, 149, 261], [605, 1, 149, 261], [756, 1, 149, 261], [907, 1, 149, 261], [1058, 1, 149, 261], [1209, 1, 149, 261], [1360, 1, 149, 261], [1511, 1, 149, 261], [1662, 1, 149, 261], [1813, 1, 149, 261], [303, 264, 149, 261], [303, 527, 149, 261], [303, 790, 149, 261], [303, 1053, 149, 261], [303, 1316, 149, 261], [303, 1579, 149, 261], [454, 264, 149, 261], [454, 527, 149, 261], [454, 790, 149, 261], [454, 1053, 149, 261], [454, 1316, 149, 261], [454, 1579, 149, 261], [605, 264, 149, 261], [756, 264, 149, 261], [907, 264, 149, 261], [1058, 264, 149, 261], [1209, 264, 149, 261], [1360, 264, 149, 261], [1511, 264, 149, 261], [1662, 264, 149, 261], [1813, 264, 149, 261], [605, 527, 149, 261], [605, 790, 149, 261], [605, 1053, 149, 261], [605, 1316, 149, 261], [605, 1579, 149, 261], [756, 527, 149, 261], [907, 527, 149, 261], [1058, 527, 149, 261], [1209, 527, 149, 261], [1360, 527, 149, 261], [1511, 527, 149, 261], [1662, 527, 149, 261], [1813, 527, 149, 261], [756, 790, 149, 261], [756, 1053, 149, 261], [756, 1316, 149, 261], [756, 1579, 149, 261], [907, 790, 149, 261], [907, 1053, 149, 261], [907, 1316, 149, 261], [907, 1579, 149, 261], [1058, 790, 149, 261], [1209, 790, 149, 261], [1360, 790, 149, 261], [1511, 790, 149, 261], [1662, 790, 149, 261], [1813, 790, 149, 261], [1058, 1053, 149, 261], [1058, 1316, 149, 261], [1058, 1579, 149, 261], [1209, 1053, 149, 261], [1209, 1316, 149, 261], [1209, 1579, 149, 261], [1360, 1053, 149, 261], [1511, 1053, 149, 261], [1662, 1053, 149, 261], [1813, 1053, 149, 261], [1360, 1316, 149, 261], [1360, 1579, 149, 261], [1511, 1316, 149, 261], [1511, 1579, 149, 261], [1662, 1316, 149, 261], [1813, 1316, 149, 261], [1662, 1579, 149, 261], [1813, 1579, 149, 261]],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]
               }
            }), new Hilo.TextureAtlas({
               image: this.queue.get("peiban-trans-1").content,
               frames: [[1, 1, 149, 261], [1, 264, 149, 261], [1, 527, 149, 261], [152, 1, 149, 261], [152, 264, 149, 261], [152, 527, 149, 261], [303, 1, 149, 261], [303, 264, 149, 261], [303, 527, 149, 261], [454, 1, 149, 261], [454, 264, 149, 261], [454, 527, 149, 261], [605, 1, 149, 261], [605, 264, 149, 261], [605, 527, 149, 261], [756, 1, 149, 261], [756, 264, 149, 261], [756, 527, 149, 261], [907, 1, 149, 261], [907, 264, 149, 261], [907, 527, 149, 261], [1058, 1, 149, 261], [1058, 264, 149, 261]],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
               }
            })],
            this.peiban_repeat = [new Hilo.TextureAtlas({
               image: this.queue.get("peiban-repeat-0").content,
               frames: [[1, 1, 149, 261], [1, 264, 149, 261], [1, 527, 149, 261], [1, 790, 149, 261], [1, 1053, 149, 261], [1, 1316, 149, 261], [1, 1579, 149, 261], [152, 1, 149, 261], [152, 264, 149, 261], [152, 527, 149, 261], [152, 790, 149, 261], [152, 1053, 149, 261], [152, 1316, 149, 261], [152, 1579, 149, 261], [303, 1, 149, 261], [454, 1, 149, 261], [605, 1, 149, 261], [756, 1, 149, 261], [907, 1, 149, 261], [1058, 1, 149, 261], [1209, 1, 149, 261], [1360, 1, 149, 261], [1511, 1, 149, 261], [1662, 1, 149, 261], [1813, 1, 149, 261], [303, 264, 149, 261], [303, 527, 149, 261], [303, 790, 149, 261], [303, 1053, 149, 261], [303, 1316, 149, 261], [303, 1579, 149, 261], [454, 264, 149, 261], [454, 527, 149, 261], [454, 790, 149, 261], [454, 1053, 149, 261], [454, 1316, 149, 261], [454, 1579, 149, 261], [605, 264, 149, 261], [756, 264, 149, 261], [907, 264, 149, 261], [1058, 264, 149, 261], [1209, 264, 149, 261], [1360, 264, 149, 261], [1511, 264, 149, 261], [1662, 264, 149, 261], [1813, 264, 149, 261], [605, 527, 149, 261], [605, 790, 149, 261], [605, 1053, 149, 261], [605, 1316, 149, 261], [605, 1579, 149, 261], [756, 527, 149, 261], [907, 527, 149, 261], [1058, 527, 149, 261], [1209, 527, 149, 261], [1360, 527, 149, 261], [1511, 527, 149, 261], [1662, 527, 149, 261], [1813, 527, 149, 261], [756, 790, 149, 261], [756, 1053, 149, 261], [756, 1316, 149, 261], [756, 1579, 149, 261], [907, 790, 149, 261], [907, 1053, 149, 261], [907, 1316, 149, 261], [907, 1579, 149, 261], [1058, 790, 149, 261], [1209, 790, 149, 261], [1360, 790, 149, 261], [1511, 790, 149, 261], [1662, 790, 149, 261], [1813, 790, 149, 261], [1058, 1053, 149, 261], [1058, 1316, 149, 261], [1058, 1579, 149, 261], [1209, 1053, 149, 261], [1209, 1316, 149, 261], [1209, 1579, 149, 261], [1360, 1053, 149, 261], [1511, 1053, 149, 261], [1662, 1053, 149, 261], [1813, 1053, 149, 261], [1360, 1316, 149, 261], [1360, 1579, 149, 261], [1511, 1316, 149, 261], [1511, 1579, 149, 261], [1662, 1316, 149, 261], [1813, 1316, 149, 261], [1662, 1579, 149, 261], [1813, 1579, 149, 261]],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]
               }
            }), new Hilo.TextureAtlas({
               image: this.queue.get("peiban-repeat-1").content,
               frames: [[1, 1, 149, 261], [1, 264, 149, 261], [1, 527, 149, 261], [1, 790, 149, 261], [1, 1053, 149, 261], [1, 1316, 149, 261], [1, 1579, 149, 261], [152, 1, 149, 261], [152, 264, 149, 261], [152, 527, 149, 261], [152, 790, 149, 261], [152, 1053, 149, 261], [152, 1316, 149, 261], [152, 1579, 149, 261], [303, 1, 149, 261], [454, 1, 149, 261], [605, 1, 149, 261], [756, 1, 149, 261], [907, 1, 149, 261], [1058, 1, 149, 261], [1209, 1, 149, 261], [1360, 1, 149, 261], [1511, 1, 149, 261], [1662, 1, 149, 261], [303, 264, 149, 261], [303, 527, 149, 261], [303, 790, 149, 261], [303, 1053, 149, 261], [303, 1316, 149, 261], [303, 1579, 149, 261], [454, 264, 149, 261], [454, 527, 149, 261], [454, 790, 149, 261], [454, 1053, 149, 261], [454, 1316, 149, 261], [454, 1579, 149, 261], [605, 264, 149, 261], [756, 264, 149, 261], [907, 264, 149, 261], [1058, 264, 149, 261], [1209, 264, 149, 261], [1360, 264, 149, 261], [1511, 264, 149, 261], [1662, 264, 149, 261], [605, 527, 149, 261], [605, 790, 149, 261], [605, 1053, 149, 261], [605, 1316, 149, 261], [605, 1579, 149, 261], [756, 527, 149, 261], [756, 790, 149, 261], [756, 1053, 149, 261], [756, 1316, 149, 261], [756, 1579, 149, 261], [907, 527, 149, 261], [1058, 527, 149, 261], [1209, 527, 149, 261], [1360, 527, 149, 261], [1511, 527, 149, 261], [1662, 527, 149, 261], [907, 790, 149, 261], [907, 1053, 149, 261], [907, 1316, 149, 261], [907, 1579, 149, 261], [1058, 790, 149, 261], [1209, 790, 149, 261], [1360, 790, 149, 261], [1511, 790, 149, 261], [1662, 790, 149, 261], [1058, 1053, 149, 261], [1058, 1316, 149, 261], [1058, 1579, 149, 261], [1209, 1053, 149, 261], [1209, 1316, 149, 261], [1209, 1579, 149, 261], [1360, 1053, 149, 261], [1511, 1053, 149, 261], [1662, 1053, 149, 261], [1360, 1316, 149, 261], [1360, 1579, 149, 261], [1511, 1316, 149, 261], [1511, 1579, 149, 261]],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81]
               }
            })],
            this.ai_static = this.queue.get("ai-static").content,
            this.ai_repeat = [new Hilo.TextureAtlas({
               image: this.queue.get("ai-repeat-0").content,
               frames: [[2, 2, 241, 300], [2, 304, 241, 300], [2, 606, 241, 300], [2, 908, 241, 300], [2, 1210, 241, 300], [2, 1512, 241, 300], [245, 2, 241, 300], [488, 2, 241, 300], [731, 2, 241, 300], [974, 2, 241, 300], [1217, 2, 241, 300], [1460, 2, 241, 300], [1703, 2, 241, 300], [245, 304, 241, 300], [245, 606, 241, 300], [245, 908, 241, 300], [245, 1210, 241, 300], [245, 1512, 241, 300], [488, 304, 241, 300], [731, 304, 241, 300], [974, 304, 241, 300], [1217, 304, 241, 300], [1460, 304, 241, 300], [1703, 304, 241, 300], [488, 606, 241, 300], [488, 908, 241, 300], [488, 1210, 241, 300], [488, 1512, 241, 300], [731, 606, 241, 300], [974, 606, 241, 300], [1217, 606, 241, 300], [1460, 606, 241, 300], [1703, 606, 241, 300], [731, 908, 241, 300], [731, 1210, 241, 300], [731, 1512, 241, 300], [974, 908, 241, 300], [974, 1210, 241, 300], [974, 1512, 241, 300], [1217, 908, 241, 300], [1460, 908, 241, 300], [1703, 908, 241, 300], [1217, 1210, 241, 300], [1217, 1512, 241, 300], [1460, 1210, 241, 300], [1703, 1210, 241, 300], [1460, 1512, 241, 300], [1703, 1512, 241, 300]],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]
               }
            }), new Hilo.TextureAtlas({
               image: this.queue.get("ai-repeat-1").content,
               frames: [[2, 2, 241, 300], [2, 304, 241, 300], [2, 606, 241, 300], [2, 908, 241, 300], [2, 1210, 241, 300], [2, 1512, 241, 300], [245, 2, 241, 300], [488, 2, 241, 300], [731, 2, 241, 300], [974, 2, 241, 300], [1217, 2, 241, 300], [1460, 2, 241, 300], [1703, 2, 241, 300], [245, 304, 241, 300], [245, 606, 241, 300], [245, 908, 241, 300], [245, 1210, 241, 300], [245, 1512, 241, 300], [488, 304, 241, 300], [731, 304, 241, 300], [974, 304, 241, 300], [1217, 304, 241, 300], [1460, 304, 241, 300], [1703, 304, 241, 300], [488, 606, 241, 300], [488, 908, 241, 300], [488, 1210, 241, 300], [488, 1512, 241, 300], [731, 606, 241, 300], [974, 606, 241, 300], [1217, 606, 241, 300], [1460, 606, 241, 300], [1703, 606, 241, 300], [731, 908, 241, 300], [731, 1210, 241, 300], [731, 1512, 241, 300], [974, 908, 241, 300], [974, 1210, 241, 300], [974, 1512, 241, 300], [1217, 908, 241, 300], [1460, 908, 241, 300], [1703, 908, 241, 300]],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41]
               }
            })],
            this.xingfu_text = new Hilo.TextureAtlas({
               image: this.queue.get("xingfu-text").content,
               frames: [[103, 2, 96, 206], [2, 2, 99, 206]],
               sprites: {
                  xxx: [0, 1]
               }
            }),
            this.xing_repeat = new Hilo.TextureAtlas({
               image: this.queue.get("xing-repeat").content,
               frames: [[884, 418, 96, 206], [786, 418, 96, 206], [688, 418, 96, 206], [590, 626, 96, 206], [590, 418, 96, 206], [492, 626, 96, 206], [492, 418, 96, 206], [884, 210, 96, 206], [786, 210, 96, 206], [688, 210, 96, 206], [590, 210, 96, 206], [492, 210, 96, 206], [394, 626, 96, 206], [394, 418, 96, 206], [394, 210, 96, 206], [296, 626, 96, 206], [296, 418, 96, 206], [296, 210, 96, 206], [884, 2, 96, 206], [786, 2, 96, 206], [688, 2, 96, 206], [590, 2, 96, 206], [492, 2, 96, 206], [394, 2, 96, 206], [296, 2, 96, 206], [198, 626, 96, 206], [198, 418, 96, 206], [198, 210, 96, 206], [198, 2, 96, 206], [100, 626, 96, 206], [100, 418, 96, 206], [100, 210, 96, 206], [100, 2, 96, 206], [2, 626, 96, 206], [2, 418, 96, 206], [2, 210, 96, 206], [2, 2, 96, 206]],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
               }
            }),
            this.fu_repeat = new Hilo.TextureAtlas({
               image: this.queue.get("fu-repeat").content,
               frames: [[911, 418, 99, 206], [810, 418, 99, 206], [709, 418, 99, 206], [608, 626, 99, 206], [608, 418, 99, 206], [507, 626, 99, 206], [507, 418, 99, 206], [911, 210, 99, 206], [810, 210, 99, 206], [709, 210, 99, 206], [608, 210, 99, 206], [507, 210, 99, 206], [406, 626, 99, 206], [406, 418, 99, 206], [406, 210, 99, 206], [305, 626, 99, 206], [305, 418, 99, 206], [305, 210, 99, 206], [911, 2, 99, 206], [810, 2, 99, 206], [709, 2, 99, 206], [608, 2, 99, 206], [507, 2, 99, 206], [406, 2, 99, 206], [305, 2, 99, 206], [204, 626, 99, 206], [204, 418, 99, 206], [204, 210, 99, 206], [204, 2, 99, 206], [103, 626, 99, 206], [103, 418, 99, 206], [103, 210, 99, 206], [103, 2, 99, 206], [2, 626, 99, 206], [2, 418, 99, 206], [2, 210, 99, 206], [2, 2, 99, 206]],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
               }
            }),
            this.guide_s7 = this.queue.get("guide-s7").content,
            this.cy = new Hilo.TextureAtlas({
               image: this.queue.get("cy").content,
               frames: [[0, 0, 40, 40], [40, 0, 40, 40], [80, 0, 40, 40], [0, 40, 40, 40], [40, 40, 40, 40], [80, 40, 40, 40], [0, 80, 40, 40], [40, 80, 40, 40]]
            }),
            this.ty = new Hilo.TextureAtlas({
               image: this.queue.get("ty").content,
               frames: [[0, 93, 111, 58], [0, 11, 21, 14], [94, 35, 20, 58], [0, 0, 23, 4], [63, 35, 31, 36], [37, 11, 32, 23], [34, 35, 8, 32], [60, 0, 26, 5], [21, 11, 16, 20], [69, 11, 48, 24], [35, 0, 25, 5], [42, 35, 21, 35], [17, 35, 10, 26], [0, 35, 17, 25], [27, 35, 7, 31], [23, 0, 12, 4], [86, 0, 28, 11]]
            }),
            this.nuli = this.queue.get("nuli").content,
            this.nuli_v2 = new Hilo.TextureAtlas({
               image: this.queue.get("nuli-v2").content,
               frames: [[0, 0, 79, 95], [79, 0, 83, 95]]
            }),
            this.ni_copy = new Hilo.TextureAtlas({
               image: this.queue.get("ni-copy").content,
               frames: [[0, 0, 50, 50], [50, 0, 50, 50]],
               sprites: {
                  xxx: [0, 1]
               }
            }),
            this.guide_right = this.queue.get("guide-right").content,
            this.guide_top = this.queue.get("guide-top").content,
            this.guide_long = this.queue.get("guide-long").content,
            this.jianchi = this.queue.get("jianchi").content,
            this.mengxiang_end_trans = new Hilo.TextureAtlas({
               image: this.queue.get("mengxiang-end-trans").content,
               frames: [[524, 1811, 259, 199], [524, 1610, 259, 199], [524, 1409, 259, 199], [263, 1811, 259, 199], [263, 1610, 259, 199], [263, 1409, 259, 199], [524, 1208, 259, 199], [263, 1208, 259, 199], [2, 1811, 259, 199], [2, 1610, 259, 199], [2, 1409, 259, 199], [2, 1208, 259, 199], [524, 1007, 259, 199], [263, 1007, 259, 199], [2, 1007, 259, 199], [524, 806, 259, 199], [263, 806, 259, 199], [2, 806, 259, 199], [524, 605, 259, 199], [263, 605, 259, 199], [2, 605, 259, 199], [524, 404, 259, 199], [263, 404, 259, 199], [2, 404, 259, 199], [524, 203, 259, 199], [263, 203, 259, 199], [2, 203, 259, 199], [524, 2, 259, 199], [263, 2, 259, 199], [2, 2, 259, 199]],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
               }
            }),
            this.mengxiang_end_repeat = new Hilo.TextureAtlas({
               image: this.queue.get("mengxiang-end-repeat").content,
               frames: [[524, 1007, 259, 199], [524, 1007, 259, 199], [524, 806, 259, 199], [1568, 605, 259, 199], [1307, 605, 259, 199], [1046, 605, 259, 199], [785, 605, 259, 199], [524, 605, 259, 199], [1568, 404, 259, 199], [1307, 404, 259, 199], [1046, 404, 259, 199], [785, 404, 259, 199], [524, 404, 259, 199], [263, 1811, 259, 199], [263, 1610, 259, 199], [263, 1409, 259, 199], [263, 1208, 259, 199], [263, 1007, 259, 199], [263, 806, 259, 199], [263, 605, 259, 199], [263, 404, 259, 199], [1568, 203, 259, 199], [1307, 203, 259, 199], [1568, 203, 259, 199], [1046, 203, 259, 199], [785, 203, 259, 199], [524, 203, 259, 199], [263, 203, 259, 199], [2, 1811, 259, 199], [2, 1610, 259, 199], [2, 1409, 259, 199], [2, 1208, 259, 199], [2, 1007, 259, 199], [2, 806, 259, 199], [2, 605, 259, 199], [2, 404, 259, 199], [2, 203, 259, 199], [1568, 2, 259, 199], [1307, 2, 259, 199], [1046, 2, 259, 199], [785, 2, 259, 199], [524, 2, 259, 199], [263, 2, 259, 199], [2, 2, 259, 199], [524, 806, 259, 199]],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44]
               }
            }),
            this.man_colors = new Hilo.TextureAtlas({
               image: this.queue.get("man-colors").content,
               frames: [[54, 262, 50, 50], [2, 418, 50, 50], [2, 366, 50, 50], [2, 314, 50, 50], [2, 262, 50, 50], [158, 210, 50, 50], [106, 210, 50, 50], [54, 210, 50, 50], [2, 210, 50, 50], [158, 158, 50, 50], [106, 158, 50, 50], [54, 158, 50, 50], [2, 158, 50, 50], [158, 106, 50, 50], [106, 106, 50, 50], [54, 106, 50, 50], [2, 106, 50, 50], [158, 54, 50, 50], [106, 54, 50, 50], [54, 54, 50, 50], [2, 54, 50, 50], [158, 2, 50, 50], [106, 2, 50, 50], [54, 2, 50, 50], [2, 2, 50, 50]],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
               }
            }),
            this.hideLoading();
            this.queue.off("complete"),
            this.fire("complete")
         },
         hideLoading: function() {
            clearInterval(this.clock),
            this.elem.html(100),
            (0, a.setTimeout)(function() { (0, s.
            default)("#loading").hide()
            },
            250)
         }
      })
   } (window.game)
},
function(e, t, i) {
   "use strict";
   function n(e) {
      function t() {
         a = r.checkCollision(r.manTop),
         a && "wallTop" === a.target.id ? (r.isMovingX = !1, r.isMovingY = !1, r.isFall2Top = !0, r.y = a.target.y + a.target.height - r.manTop.height, r.clickCount = 0, r.isFall2Top = !0, e.isTouchTop = !0, e.s8.manCopy && e.s8.manCopy.goto(1, !0)) : r.isMovingX = !0;
         var t = +new Date - r.jumpStartTime,
         i = r.initVelocity * t - .5 * r.gravity * t * t,
         n = r.jumpStartX - i;
         r.vx = r.initVelocity - r.gravity * t,
         o = r.checkCollision(r.manRight),
         r.vx < 0 && o && "wallRight" === o.target.id ? (r.isMovingX = !1, r.x = o.x - r.man.width - r.manRight.width, r.clickCount = 0, r.vx = 0, r.isMovingY = !1, r.stepLength = r.initStepLength) : r.x = n >> 0
      }
      function i() {
         r.isMovingX = !0;
         var e = +new Date - r.jumpStartTime,
         t = r.initVelocity * e - .5 * r.gravity * e * e,
         i = r.jumpStartY + t;
         r.vy = r.initVelocity - r.gravity * e,
         a = r.checkCollision(r.manTop),
         r.vy < 0 && a && "wallTop" === a.target.id ? (r.isMovingX = !1, r.isMovingY = !1, r.y = a.y + a.target.height - r.manTop.height, r.clickCount = 0, r.vy = 0, r.stepLength = r.initStepLength, s() && n()) : (r.y = i >> 0, s() && n())
      }
      function n() {
         e.man.x = e.MIDDLE_SCENE,
         e.isDisabled = !0,
         e.s8 && e.s8.fall2Tuoyan()
      }
      function s() {
         return r.x <= e.MIDDLE_SCENE + 4 && r.x >= e.MIDDLE_SCENE - 4
      }
      var a, r = e.man,
      o = r.checkCollision(r.manRight);
      r.hitTestObject(e.s8.wallTop, !0) && (a = {
         target: e.s8.wallTop
      }),
      r.isMovingX &&
      function() {
         e.isTouchTop ? s() ? (r.isMovingX = !1, n()) : (r.x -= r.stepLength, r.isFall2Top = !0, e.s8.manCopy && e.s8.manCopy.goto(1, !0)) : a && "wallTop" === a.target.id ? (r.y = a.target.height - r.manTop.height, e.isTouchTop = !0) : (o && "wallRight" === o.target.id && (r.x = o.x - r.man.width - r.manRight.width), r.y -= r.stepLength)
      } (),
      r.isMovingY &&
      function() {
         r.isFall2Top ? i() : t()
      } ()
   }
   function s(e) {
      var t = e.man;
      if (e.isFreeWalk && t.x >= e.MIDDLE_SCENE && t.x < 600 && 36 === t.y && (t.jumpSomewhere(t.jumpStartX, t.jumpStartY, e.MIDDLE_SCENE, 36, -1), e.isReady2Fall = !0), e.isFreeWalk && e.s7 && t.x + t.width >= e.s7.block2.x + e.s7.x && t.x <= e.s7.block2.x + e.s7.block2.width + e.s7.x) {
         if (e.s7.isShooted) return;
         e.s7.isShooted = !0;
         a()
      }
   }
   function a() {
      function e() {
         i.isDisabled = !1,
         i.s8.manCopy.alpha = 1,
         i.man.alpha = 0
      }
      function t() {
         i.isDisabled = !0
      }
      var i = game,
      n = i.man,
      s = {
         x: n.jumpStartX,
         y: n.jumpStartY
      },
      a = {
         x: 656,
         y: 344
      };
      n.isMovingY = !1;
      var o = {
         x: s.x + a.x >> 1,
         y: 190
      },
      c = {
         x: o.x + s.x >> 1,
         y: (o.y + s.y >> 1) - 40
      },
      h = {
         x: o.x + a.x >> 1,
         y: (o.y + a.y >> 1) - 40
      };
      new TimelineMax({
         onComplete: e,
         onUpdate: t
      }).to(n, .11, r({},
      c, {
         ease: Power0.easeIn
      })).to(n, .12, r({},
      o, {
         ease: Power0.easeIn
      })).to(n, .11, r({},
      h, {
         ease: Power0.easeOut
      })).to(n, .12, r({},
      a, {
         ease: Power0.easeOut
      }))
   }
   Object.defineProperty(t, "__esModule", {
      value: !0
   });
   var r = Object.assign ||
   function(e) {
      for (var t = 1; t < arguments.length; t++) {
         var i = arguments[t];
         for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
      }
      return e
   };
   t.
default = n,
   t.actionCreativeScene = n,
   t.jump2Target = s
},
function(e, t, i) {
   "use strict";
   var n = i(265),
   s = i(4),
   a = i(17),
   r = function(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   } (a); !
   function(e) {
      var t = e.Man = Hilo.Class.create({
         Extends: Hilo.Container,
         constructor: function(i) {
            t.superclass.constructor.call(this, i),
            this.gravity = .003,
            this.updateJumpPoint(0),
            this.initStepLength = 5,
            this.init(i),
            this.MIDDLE_SCENE = e.width - this.man.width >> 1
         },
         startX: 0,
         startY: 0,
         groundY: 0,
         gravity: 0,
         jumpHeight: 0,
         initVelocity: 0,
         isMovingX: !1,
         isMovingY: !1,
         isLongPress: !1,
         stepLength: 4,
         speedY: 0,
         man: null,
         manTop: null,
         manRight: null,
         manBottom: null,
         manLeft: null,
         vy: 0,
         clickCount: 0,
         isShowYou: !0,
         delta: void 0,
         offset: 0,
         isFall2Top: !1,
         isCorner: !1,
         isJumpHit: !1,
         init: function(t) {
            var i = e.COVER_WIDTH;
            this.man = new Hilo.Bitmap({
               id: "man",
               x: i,
               y: i,
               image: e.asset.man
            }),
            this.manTop = new Hilo.View({
               id: "manTop",
               x: i,
               y: 0,
               width: this.man.width,
               height: i,
               background: "#ccc",
               visible: !1
            }),
            this.manRight = new Hilo.View({
               id: "manRight",
               x: this.man.width + i,
               y: i,
               width: i,
               height: this.man.height,
               background: "#ccc",
               visible: !1
            }),
            this.manBottom = new Hilo.View({
               id: "manBottom",
               x: i,
               y: this.man.height + i,
               width: this.man.width,
               height: i,
               background: "#ccc",
               visible: !1
            }),
            this.manLeft = new Hilo.View({
               id: "manLeft",
               x: 0,
               y: i,
               width: i,
               height: this.man.height,
               background: "#ccc",
               visible: !1
            }),
            this.width = this.man.width + 2 * i,
            this.height = this.man.height + 2 * i,
            this.addChild(this.man, this.manTop, this.manRight, this.manBottom, this.manLeft)
         },
         getReady: function() {
            this.x = this.startX,
            this.y = this.startY
         },
         changeMan: function(t) {
            t.x = e.COVER_WIDTH,
            t.y = e.COVER_WIDTH,
            this.removeChild(this.man),
            this.addChild(t),
            this.man = t
         },
         updateDelta: function(e) {
            this.landingManPos = this.x,
            this.landingBlockPos = e.target.x,
            this.delta = this.landingManPos - this.landingBlockPos >> 0,
            this.offset = 0
         },
         checkCollision: function(t) {
            t = t || this;
            var i = e.collisionSet.length;
            if (0 === i) return null;
            for (var n, s = 0; s < i; ++s) if (n = e.collisionSet[s], t.hitTestObject(n, !0)) return {
               target: n,
               x: n.x,
               y: n.y
            };
            return null
         },
         updateJumpPoint: function(e) {
            if (! (e < 0)) {
               this.stepLength = 5;
               var t = 200;
               t = e > 250 ? 200 : 0 | Math.sqrt(90 * e + 4e4),
               t != this.jumpHeight && (this.jumpHeight = t, this.initVelocity = Math.sqrt(2 * this.jumpHeight * this.gravity), this.riseTime = Math.sqrt(2 * this.jumpHeight / this.gravity))
            }
         },
         calcStepLength: function() {
            var t = Math.max(e.ticker.getMeasuredFPS(), 30),
            i = 6 * this.jumpHeight / 50 - 19 | 0;
            this.stepLength = i + (60 - t) / 4 | 0
         },
         resetStepLength: function() {
            this.stepLength = 5
         },
         jumpSomewhere: function(t, i, n, s) {
            var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
            r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
            o = n - t,
            c = s - i;
            if (! (this.jumpHeight + c < 0)) {
               var h = Math.sqrt(2 * (this.jumpHeight + c) / this.gravity),
               u = this.riseTime + h,
               l = o / u,
               d = e.ticker.getMeasuredFPS() || 30;
               this.stepLength = r * a * l * 1e3 / d,
               console.log("鎵ц 璺宠穬鍒板畾鐐�, 姝ラ暱涓猴細", this.stepLength)
            }
         },
         detectFreeFall: function() {
            if (!this.isMovingX && !this.isMovingY && !this.isJumpHit) {
               var t = this.checkCollision(this.manBottom);
               if (t) this.lastStandTime = +new Date,
               this.lastStandY = this.y,
               this.vy < 0 && (this.y = t.y - this.man.height - this.manTop.height >> 0),
               this.vy = 0,
               this.isDisabled = !1;
               else {
                  var i = +new Date - this.lastStandTime,
                  n = .5 * this.gravity * i * i >> 0,
                  s = this.lastStandY + n;
                  this.vy = -this.gravity * i,
                  this.y = s,
                  e.isDisabled = !0
               }
            }
         },
         longPress: function() {
            e.isDisabled || this.isMovingY || (this.isMovingX = !0, this.isLongPress = !0, this.resetStepLength())
         },
         shortTouch: function(t) {
            this.clickCount > 0 || (++this.clickCount, e.isDisabled || e.isNoShortClick || (this.isMovingY = !0, this.calcStepLength(), this.jumpStartX = this.x, this.jumpStartY = this.y, this.jumpStartTime = t, (0, n.jump2Target)(e)))
         },
         moveX: function() {
            var t, i, n, s, a;
            if (t = this.checkCollision(this.manRight), i = this.checkCollision(this.manBottom), t && (this.isMovingX = !1, this.x -= this.stepLength), i) this.lastStandTime = +new Date,
            this.lastStandY = this.y,
            this.isSlideFall = !1,
            this.vy < 0 && (this.y = i.y - this.man.height - this.manTop.height >> 0),
            this.vy = 0;
            else {
               if (0 === e.firstTime) return void++e.firstTime;
               n = this.lastStandTime ? +new Date - this.lastStandTime: 0,
               s = this.gravity * n * n >> 1,
               this.vy = -this.gravity * n,
               a = this.lastStandY + s,
               this.y = a,
               this.isSlideFall = !0
            } (this.x < this.MIDDLE_SCENE || e.isFreeWalk) && (this.x += this.stepLength)
         },
         moveY: function(t) {
            var i, n, s, a, o, c;
            if (this.isMovingX = !0, i = +new Date - this.jumpStartTime, n = i + t, s = this.initVelocity * i - (this.gravity * i * i >> 1), o = this.jumpStartY - s | 0, this.vy = this.initVelocity - this.gravity * i, c = this.checkCollision(this.manBottom), !e.isFreeWalk && this.vy < 0 && !c) {
               a = (this.gravity * t * (i + n) >> 1) - this.initVelocity * t | 0;
               for (var h, u, l, d = 0,
               p = e.collisionSet.length,
               f = this.x + this.manLeft.width,
               m = o + this.man.height - this.manBottom.height; d < p; ++d) if (h = e.collisionSet[d], u = r.
            default.offset(h), f >= u.x && f <= u.x + h.width && (l = u.y - m, a - l > 0)) {
                  o = u.y - this.man.height - this.manBottom.height,
                  this.vy = 0,
                  this.isMovingY = !1,
                  this.isMovingX = !1,
                  this.clickCount = 0;
                  break
               }
            }
            this.vy < 0 && c ? (this.y = c.y - this.man.height - this.manBottom.height, this.vy = 0, this.isMovingX = !1, this.isMovingY = !1, this.clickCount = 0) : this.y = o >> 0
         },
         onUpdate: function(t) {
            this.isDead || (e.isCreativeEnable ? (0, n.actionCreativeScene)(e) : ((this.isMovingX || this.isSlideFall) && this.moveX(), this.isMovingY && this.moveY(t)), (this.y >= e.height || this.x >= e.width || this.x <= 0 || isNaN(this.x) || isNaN(this.y) || this.y <= -30) && (this.isDead = !0, console.log("==> 鎸備簡")))
         },
         blink: function() {
            this.blinkTween && this.blinkTween.kill();
            var e = {
               o: 1
            },
            t = this.man;
            this.blinkTween = s.TweenMax.to(e, .3, {
               o: 0,
               repeat: 3,
               yoyo: !0,
               onUpdate: function() {
                  t.alpha = e.o
               }
            })
         }
      })
   } (window.game)
},
function(e, t, i) {
   "use strict";
   function n(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   }
   var s = Object.assign ||
   function(e) {
      for (var t = 1; t < arguments.length; t++) {
         var i = arguments[t];
         for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
      }
      return e
   },
   a = i(22),
   r = n(a),
   o = i(18),
   c = n(o),
   h = i(4),
   u = i(96); !
   function(e) {
      var t = e.S1 = Hilo.Class.create({
         Extends: r.
      default,
         constructor: function(e) {
            e.width = 590,
            t.superclass.constructor.apply(this, arguments)
         },
         shortcut: function() {},
         onRecoverCurrent: function() {
            return this.x = -180,
            e.man.x = e.man.MIDDLE_SCENE,
            e.man.y = this.block1.y - e.man.height + e.man.manBottom.height,
            !0
         },
         init: function(t) {
            var i = {
               x: 60,
               y: 440
            };
            this.xunzhao = new Hilo.Bitmap(s({},
            i, {
               alpha: 0,
               image: e.asset.xunzhao
            })),
            this.addChild(this.xunzhao),
            this.block1 = new c.
         default({
               id:
               "xunzhao_block_1",
               x: this.xunzhao.x,
               y: this.xunzhao.y + 4,
               width: this.xunzhao.width
            }),
            this.addChild(this.block1),
            this.block2 = new c.
         default({
               x:
               this.xunzhao.x + this.xunzhao.width - 100,
               y: this.xunzhao.y + 4,
               width: 100
            }),
            this.addChild(this.block2),
            this.block3 = new c.
         default({
               x:
               this.xunzhao.x + this.xunzhao.width - 20,
               y: this.xunzhao.y + 3,
               width: 10,
               height: 10
            }),
            this.addChild(this.block3),
            this.sign = new u.MovingSign({
               x: this.block1.x + 80,
               y: this.block1.y - 34
            }),
            this.guide_jump = new Hilo.Bitmap({
               x: this.xunzhao.x + 500,
               y: this.xunzhao.y - 150,
               image: e.asset.guide_jump_static
            }),
            this.xxx_1 = new Hilo.Bitmap({
               x: e.width - 433 >> 1,
               y: e.NOTICE_Y,
               alpha: 1,
               image: e.asset.xxx_1
            }),
            e.collisionSet.push(this.block1, this.block2, this.block3),
            this.dropdown()
         },
         dropdown: function() {
            e.isDisabled = !0;
            var t = {
               y: e.man.y,
               o: 0
            },
            i = e.man,
            n = this;
            i.alpha = 0,
            h.TweenMax.to(t, .2, {
               delay: 1,
               o: 1,
               y: this.block1.y - i.height + i.manBottom.height,
               onUpdate: function() {
                  i.y = t.y,
                  i.alpha = t.o,
                  n.xunzhao.alpha = t.o
               },
               onComplete: function() {
                  e.isDisabled = !1,
                  e.isNoShortClick = !0,
                  n.showTip1(),
                  e.guide.zoom(0)
               }
            }),
            setTimeout(function() {},
            3e3)
         },
         onUpdate: function() {
            t.superclass.onUpdate.apply(this, arguments),
            this.isShowTip1 && this.sign.updateWidth(this.x),
            this.isOnBlock(this.block2) && (this.showTip2(), e.guide.stopZoomPress(), e.guide.zoom(1)),
            e.man.isMovingY && (this.hideTip2(), e.guide.stopZoomClick())
         },
         updateJumpPoint: function() {
            this.isOnBlock(this.block1) && this.calcBlockDistanceY(this.block1, -30)
         },
         showTip1: function() {
            this.isShowTip1 || (this.isShowTip1 = !0, this.addChild(this.sign))
         },
         hideTip1: function() {
            e.isNoShortClick = !1,
            e.man.clickCount = 0
         },
         showTip2: function() {
            this.isShowTip2 || (this.isShowTip2 = !0, this.hideTip1(), this.addChild(this.guide_jump))
         },
         hideTip2: function() {
            if (!this.isHideTip2) {
               this.isHideTip2 = !0;
               var t = {
                  o: 1
               },
               i = this;
               h.TweenMax.to(t, .2, {
                  o: 0,
                  onUpdate: function() {
                     i.guide_jump.alpha = t.o
                  },
                  onComplete: function() {
                     i.removeChild(i.guide_jump),
                     e.guide.switchToBoth(),
                     e.guide.removeNewGuide()
                  },
                  ease: h.Power1.easeIn
               })
            }
         }
      })
   } (window.game)
},
function(e, t, i) {
   "use strict";
   function n(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   }
   var s = Object.assign ||
   function(e) {
      for (var t = 1; t < arguments.length; t++) {
         var i = arguments[t];
         for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
      }
      return e
   },
   a = i(22),
   r = n(a),
   o = i(18),
   c = n(o),
   h = i(4),
   u = i(27),
   l = n(u),
   d = i(74),
   p = n(d); !
   function(e) {
      var t = e.S10 = Hilo.Class.create({
         Extends: r.
      default,
         constructor: function(e) {
            e.width = 1500,
            t.superclass.constructor.apply(this, arguments)
         },
         shortcut: function() {},
         onRecoverCurrent: function() {
            return this.x = 240,
            e.man.x = e.man.MIDDLE_SCENE,
            e.man.y = this.block1.y - e.man.height + e.man.manBottom.height,
            e.isDisabled = !1,
            e.isNoShortClick = !1,
            e.man.clickCount = 0,
            !0
         },
         init: function(t) {
            var i = {
               x: 50,
               y: 400
            };
            this.jianchi = new Hilo.Bitmap(s({},
            i, {
               image: e.asset.jianchi
            })),
            this.addChild(this.jianchi),
            this.block1 = new c.
         default(s({
               id:
               "jianchi_block_1"
            },
            i, {
               width: this.jianchi.width
            })),
            this.addChild(this.block1),
            this.block2 = new c.
         default({
               x:
               i.x + 350,
               y: i.y,
               width: 160
            }),
            this.addChild(this.block2),
            this.mengxiang_trans = new Hilo.Sprite({
               x: this.block2.x - 40,
               y: this.block2.y - 45,
               paused: !0,
               loop: !1,
               frames: e.asset.mengxiang_end_trans.getSprite("xxx")
            }),
            this.addChild(this.mengxiang_trans),
            this.mengxiang_repeat = new Hilo.Sprite({
               x: this.block2.x - 40,
               y: this.block2.y - 45,
               paused: !0,
               frames: e.asset.mengxiang_end_repeat.getSprite("xxx")
            }),
            e.collisionSet.push(this.block1, this.block2)
         },
         onUpdate: function() {
            t.superclass.onUpdate.apply(this, arguments) || (e.man.x >= this.x + this.block2.x + this.block2.width / 2 - e.man.width / 2 && (e.isDisabled = !0), this.isOnBlock(this.block1) && this.quake(), this.isOnBlock(this.block2) && this.play())
         },
         updateJumpPoint: function() {
            this.isOnBlock(this.block1) && this.calcBlockDistanceY(this.block1, 20)
         },
         quake: function() {
            if (!this.isQuaking) {
               this.isQuaking = !0,
               e.guide.setFullOpacity(.4),
               e.guide.switchToBoth(),
               this.shift(),
               this.jianchi2 = new Hilo.Bitmap({
                  x: this.jianchi.x,
                  y: this.jianchi.y,
                  image: e.asset.jianchi
               }),
               this.addChild(this.jianchi2);
               var t = [this.jianchi, this.jianchi2],
               i = t[0].x,
               n = {
                  x: 0
               };
               this.quakeTimeline = new h.TimelineMax({
                  repeat: 200,
                  onUpdate: function() {
                     t[0].x = i + n.x,
                     t[1].x = i - n.x
                  },
                  ease: h.Power0.linear
               }),
               this.quakeTimeline.to(n, .3, {
                  x: 1.8
               }).to(n, .6, {
                  x: -1.8
               }).to(n, .3, {
                  x: 0
               })
            }
         },
         play: function() {
            this.isPlaying || (this.isPlaying = !0, e.guide.dispose(), this.quakeTimeline && this.quakeTimeline.kill(), this.removeChild(this.jianchi), this.removeChild(this.jianchi2), e.isDisabled = !0, e.man.changeMan(new Hilo.Sprite({
               frames: e.asset.man_colors.getSprite("xxx")
            })), this.blink(), l.
         default.startCollision(), p.
         default.moveDown(), l.
         default.showEnding())
         },
         blink: function() {
            var e = this.mengxiang_trans.getNumFrames(),
            t = this;
            this.mengxiang_trans.play(),
            this.mengxiang_trans.setFrameCallback(e - 1,
            function() {
               t.mengxiang_trans.setFrameCallback(e - 1),
               t.removeChild(t.mengxiang_trans),
               t.addChild(t.mengxiang_repeat),
               t.mengxiang_repeat.play()
            })
         }
      })
   } (window.game)
},
function(e, t, i) {
   "use strict";
   var n = i(22),
   s = function(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   } (n); !
   function(e) {
      var t = e.S11 = Hilo.Class.create({
         Extends: s.
      default,
         constructor: function(e) {
            t.superclass.constructor.apply(this, arguments)
         },
         init: function(e) {}
      })
   } (window.game)
},
function(e, t, i) {
   "use strict";
   function n(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   }
   var s = Object.assign ||
   function(e) {
      for (var t = 1; t < arguments.length; t++) {
         var i = arguments[t];
         for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
      }
      return e
   },
   a = i(27),
   r = n(a),
   o = i(17),
   c = n(o),
   h = i(22),
   u = n(h),
   l = i(18),
   d = n(l),
   p = i(4),
   f = i(54),
   m = n(f); !
   function(e) {
      var t = e.S2 = Hilo.Class.create({
         Extends: u.
      default,
         constructor: function(e) {
            e.width = 780,
            t.superclass.constructor.apply(this, arguments)
         },
         shortcut: function() {},
         onRecoverCurrent: function() {
            return this.x = 120,
            e.man.x = e.man.MIDDLE_SCENE,
            e.man.y = this.block1.y - e.man.height + e.man.manBottom.height,
            this.isRaining = !1,
            this.isShattered = !1,
            this.isFalling = !1,
            e.man.isFallingMengXiang = !1,
            !0
         },
         init: function(t) {
            var i = {
               x: 0,
               y: 365
            },
            n = {
               width: 157,
               height: 95
            };
            this.mengxiang1 = new Hilo.Sprite(s({},
            i, {
               paused: !0,
               loop: !1,
               frames: e.asset.mengxiang_text.getFrame(0)
            })),
            this.addChild(this.mengxiang1),
            this.mengxiang_fly_1 = new Hilo.Sprite({
               x: this.mengxiang1.x + 150,
               y: this.mengxiang1.y - 100,
               interval: 1.5,
               paused: !0,
               loop: !0,
               frames: e.asset.mengxiang_fly_1.getSprite("xxx")
            }),
            this.block1 = new d.
         default({
               id:
               "mengxiang_block_1",
               x: this.mengxiang1.x + 145,
               y: this.mengxiang1.y + 80,
               width: 160
            }),
            this.addChild(this.block1),
            i.x += 170 + n.width,
            this.mengxiang2 = new Hilo.Sprite(s({},
            i, {
               paused: !0,
               loop: !1,
               frames: e.asset.mengxiang_text.getFrame(0)
            })),
            this.addChild(this.mengxiang2),
            this.mengxiang_fly_2 = new Hilo.Sprite({
               x: this.mengxiang2.x + 150,
               y: this.mengxiang2.y - 100,
               interval: 1.5,
               paused: !0,
               loop: !0,
               frames: e.asset.mengxiang_fly_2.getSprite("xxx")
            }),
            this.block2 = new d.
         default({
               x:
               this.mengxiang2.x + 145,
               y: this.mengxiang2.y + 80,
               width: 160
            }),
            this.addChild(this.block2),
            i.x += 170 + n.width,
            this.mengxiang3 = new Hilo.Sprite(s({},
            i, {
               paused: !0,
               loop: !1,
               frames: e.asset.mengxiang_text.getSprite("xxx")
            })),
            this.addChild(this.mengxiang3),
            this.mengxiang_fly_3 = new Hilo.Sprite({
               x: this.mengxiang3.x + 150,
               y: this.mengxiang3.y - 100,
               interval: 1.5,
               paused: !0,
               loop: !0,
               frames: e.asset.mengxiang_fly_3.getSprite("xxx")
            }),
            this.block3 = new d.
         default({
               x:
               this.mengxiang3.x + 145,
               y: this.mengxiang3.y + 80,
               width: 160
            }),
            this.addChild(this.block3),
            this.xxx_2 = new Hilo.Bitmap({
               x: this.mengxiang2.x,
               y: e.NOTICE_Y,
               alpha: 1,
               image: e.asset.xxx_2
            }),
            e.collisionSet.push(this.block1, this.block2, this.block3)
         },
         onUpdate: function() {
            var i = e.man;
            this.loopBGM(),
            this.isFalling || (!this.isShattered && i.x >= this.x + this.block3.x + 68 && (e.isDisabled = !0), t.superclass.onUpdate.apply(this, arguments) || this.isShattered || (i.isMovingY && (this.hideMengxiangFly1(), this.hideMengxiangFly2()), this.isOnBlock(this.block3) && (this.isRaining || (this.isRaining = !0, c.
         default.delay(150).then(function() {
               r.
            default.startRain()
            })), this.showMengxiangFly3(), console.log("姊︽兂鍧犺惤鏃� - man.x: ", e.man.x, " 鍦烘櫙x: ", this.x, " 鍦版澘x: ", this.block3.x, " 鍦烘櫙width: ", this.width), this.fall())))
         },
         updateJumpPoint: function() {
            e.man;
            this.isOnBlock(this.block1) ? (this.calcBlockDistanceY(this.block1), this.showMengxiangFly1(), e.guide.hideIntro()) : this.isOnBlock(this.block2) && (this.calcBlockDistanceY(this.block2, 50), this.showMengxiangFly2(), e.guide.setFullOpacity(.4), e.guide.switchToBoth(!0))
         },
         fall: function() {
            if (!this.isFalling) {
               this.isFalling = !0,
               this.removeChild(this.block3),
               c.
            default.remove(e.collisionSet, this.block3),
               e.isDisabled = !0;
               var t = {
                  y: this.y
               },
               i = this;
               c.
            default.delay(2500).then(function() {
                  e.man.isFallingMengXiang = !0,
                  i.hideMengxiangFly3(),
                  i.shatter(),
                  p.TweenMax.to(t, .5, {
                     y: t.y - 400,
                     onUpdate: function() {
                        i.y = t.y
                     },
                     onComplete: function() {
                        i.isFalling = !1,
                        r.
                     default.stopRain()
                     },
                     ease: p.Power1.easeIn
                  })
               })
            }
         },
         shatter: function() {
            var e = this;
            return new Promise(function(t) {
               e.removeChild(e.mengxiang2),
               e.mengxiang3.play(),
               setTimeout(function() {
                  e.isShattered = !0,
                  t()
               },
               500)
            })
         },
         showMengxiangFly1: function() {
            this.isMengxiangFly1 || (this.isMengxiangFly1 = !0, this.addChild(this.mengxiang_fly_1), this.mengxiang_fly_1.play())
         },
         hideMengxiangFly1: function() {
            this.isMengxiangFly1 && (this.isMengxiangFly1 = !1, this.mengxiang_fly_1.stop(), this.removeChild(this.mengxiang_fly_1))
         },
         showMengxiangFly2: function() {
            this.isMengxiangFly2 || (this.isMengxiangFly2 = !0, this.addChild(this.mengxiang_fly_2), this.mengxiang_fly_2.play())
         },
         hideMengxiangFly2: function() {
            this.isMengxiangFly2 && (this.isMengxiangFly2 = !1, this.mengxiang_fly_2.stop(), this.removeChild(this.mengxiang_fly_2))
         },
         showMengxiangFly3: function() {
            this.isMengxiangFly3 || (this.isMengxiangFly3 = !0, this.addChild(this.mengxiang_fly_3), this.mengxiang_fly_3.play())
         },
         hideMengxiangFly3: function() {
            if (this.isMengxiangFly3) {
               this.isMengxiangFly3 = !1;
               var e = {
                  o: 1
               },
               t = this;
               p.TweenMax.to(e, 1, {
                  o: 0,
                  onUpdate: function() {
                     t.mengxiang_fly_3.alpha = e.o
                  },
                  onComplete: function() {
                     t.mengxiang_fly_3.stop(),
                     t.removeChild(t.mengxiang_fly_3)
                  }
               })
            }
         },
         checkAudio: function() {
            this.isOnBlock(this.block2) && this.playRain()
         },
         playRain: function() {
            this.isPlayRain || (this.isPlayRain = !0, m.
         default.rain.play())
         },
         loopBGM: function() {
            var e = m.
         default.bgm.isPlaying(),
            t = m.
         default.bgm.isPaused();
            e && !t || m.
         default.bgm.play()
         }
      })
   } (window.game)
},
function(e, t, i) {
   "use strict";
   function n(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   }
   var s = i(22),
   a = n(s),
   r = i(18),
   o = n(r),
   c = i(4),
   h = i(17),
   u = n(h),
   l = i(27);
   n(l); !
   function(e) {
      var t = e.S3 = Hilo.Class.create({
         Extends: a.
      default,
         constructor: function(e) {
            e.width = 820,
            t.superclass.constructor.apply(this, arguments)
         },
         shortcut: function() {},
         onRecoverCurrent: function() {
            return this.x = -220,
            e.man.x = e.man.MIDDLE_SCENE,
            e.man.y = this.block3.y - e.man.height + e.man.manBottom.height,
            this.isTongKuScene = !0,
            !0
         },
         init: function(t) {
            var i = {
               x: 0,
               y: 445
            };
            this.daji_static = new Hilo.Bitmap({
               x: i.x,
               y: i.y + 500,
               image: e.asset.daji_static,
               alpha: 0
            }),
            this.addChild(this.daji_static),
            this.xxx_3 = new Hilo.Bitmap({
               x: -130,
               y: 100,
               alpha: 1,
               image: e.asset.xxx_3
            }),
            this.daji = new Hilo.Sprite({
               paused: !0,
               loop: !1,
               interval: 1.2
            }),
            this.daji.addFrame(e.asset.daji[1].getSprite("xxx")),
            this.daji.addFrame(e.asset.daji[0].getSprite("xxx")),
            this.block1 = new o.
         default({
               x:
               this.daji_static.x,
               y: i.y,
               width: 150
            }),
            this.addChild(this.block1),
            this.block2 = new o.
         default({
               x:
               this.block1.x + 217 - 40,
               y: this.block1.y + 300,
               width: 180
            }),
            this.addChild(this.block2),
            this.tongku = new Hilo.Sprite({
               x: this.block2.x - 75,
               y: this.block2.y - 65,
               paused: !0,
               loop: !1,
               alpha: 0
            }),
            this.tongku.addFrame(e.asset.tongku.getSprite("xxx")),
            this.addChild(this.tongku),
            this.sikao_repeat = new Hilo.Sprite({
               x: this.tongku.x + 305,
               y: this.tongku.y - 250,
               alpha: 0,
               frames: e.asset.sikao_repeat.getSprite("xxx")
            }),
            this.addChild(this.sikao_repeat),
            this.sikao_trans = new Hilo.Sprite({
               x: this.sikao_repeat.x,
               y: this.sikao_repeat.y,
               paused: !0,
               loop: !1,
               frames: e.asset.sikao_trans.getSprite("xxx")
            }),
            this.block3 = new o.
         default({
               x:
               this.sikao_repeat.x + 80,
               y: this.sikao_repeat.y + 70,
               width: 190
            }),
            this.addChild(this.block3),
            e.collisionSet.push(this.block1, this.block2, this.block3)
         },
         repair: function() {
            var t = this.block1.y - e.man.height + e.man.manBottom.height;
            e.man.y > t && (e.man.y = t)
         },
         onUpdate: function() {
            t.superclass.onUpdate.apply(this, arguments) || (this.isTongKuScene ? this.isOnBlock(this.block3) && this.raiseSikao() : e.man.isFallingMengXiang ? this.raise() : this.isShow && this.checkRope())
         },
         raise: function() {
            if (!this.isShow) {
               this.isShow = !0;
               var t = {
                  alpha: 0,
                  y: this.daji_static.y
               },
               i = this;
               c.TweenMax.to(t, .5, {
                  alpha: 1,
                  y: this.daji_static.y - 500 - 35,
                  onStart: function() {
                     i.daji_static.x = e.man.x - i.x,
                     i.block1.x = e.man.x - i.x
                  },
                  onUpdate: function() {
                     i.daji_static.alpha = t.alpha,
                     i.daji_static.y = t.y
                  },
                  onComplete: function() {
                     e.man.isFallingMengXiang = !1,
                     e.isDisabled = !1,
                     i.daji.x = i.daji_static.x,
                     i.daji.y = i.daji_static.y - 10,
                     e.man.isMovingY || (e.man.y = i.block1.y - e.man.height + e.man.manBottom.height),
                     e.guide.setFullOpacity(1),
                     e.guide.switchToPress(),
                     e.man.y = i.block1.y - e.man.height + e.man.manBottom.height
                  },
                  ease: c.Power1.easeIn
               })
            }
         },
         checkRope: function() {
            if (e.isNoShortClick = !0, e.man.x >= this.x + this.block1.x + 30 && !this.isEnterSpec) {
               this.isEnterSpec = !0,
               e.isDisabled = !0,
               e.forceMovingX = !0,
               e.man.stepLength = 3,
               this.removeChild(this.daji_static),
               this.addChild(this.daji),
               this.daji.play(),
               e.man.visible = !1;
               var t = this,
               i = this.daji.getNumFrames();
               this.daji.setFrameCallback(41,
               function() {
                  t.removeChild(t.block1),
                  u.
               default.remove(e.collisionSet, t.block1),
                  t.fall()
               }),
               this.daji.setFrameCallback(i - 1,
               function() {
                  t.removeChild(t.daji)
               })
            } else this.isEnterSpec && !this.isFalling && (e.man.isMovingX = !1)
         },
         fall: function() {
            e.forceMovingX = !1,
            e.man.stepLength = e.man.initStepLength,
            this.isFalling = !0,
            e.man.x = this.x + this.daji.x + 217,
            e.man.y = this.y + this.daji.y + 137,
            e.man.visible = !0,
            e.man.pivotX = e.man.width >> 1,
            e.man.pivotY = e.man.height >> 1;
            var t = {
               alpha: 0,
               y: e.man.y,
               angle: 180
            },
            i = this;
            c.TweenMax.to(t, .5, {
               alpha: 1,
               y: this.y + this.block2.y - e.man.height / 2 + e.man.manBottom.height,
               angle: 720,
               onUpdate: function() {
                  e.man.y = t.y,
                  e.man.rotation = t.angle,
                  i.tongku.alpha = t.alpha
               },
               onComplete: this.raiseTongku.bind(this),
               ease: c.Power1.easeOut
            })
         },
         raiseTongku: function() {
            var t = this.tongku.y,
            i = this.block2.y,
            n = {
               vy: 0,
               alpha: 0
            },
            s = this;
            e.isDisabled = !0,
            e.isNoShortClick = !0,
            e.guide.setFullOpacity(.4),
            e.guide.switchToBoth(),
            c.TweenMax.to(n, 1, {
               delay: .5,
               vy: 150,
               alpha: 1,
               onStart: function() {
                  e.man.pivotX = 0,
                  e.man.pivotY = 0,
                  e.man.rotation = 0,
                  e.man.x -= e.man.width / 2,
                  s.transTongku()
               },
               onUpdate: function() {
                  s.tongku.y = t - n.vy,
                  s.block2.y = i - n.vy,
                  s.sikao_repeat.alpha = n.alpha,
                  e.man.y = s.block2.y - e.man.height + e.man.manBottom.height
               },
               onComplete: function() {
                  e.isDisabled = !1,
                  e.isNoShortClick = !1,
                  e.man.clickCount = 0,
                  e.man.stepLength = e.man.initStepLength,
                  s.isTongKuScene = !0
               }
            })
         },
         transTongku: function() {
            this.playedTongku || (this.playedTongku = !0, this.tongku.play())
         },
         raiseSikao: function() {
            if (!this.isRaiseSikao) {
               this.isRaiseSikao = !0,
               e.isDisabled = !0,
               e.isNoShortClick = !0;
               var t = this.sikao_trans.y,
               i = this.block3.y,
               n = {
                  vy: 0
               },
               s = this;
               c.TweenMax.to(n, 1, {
                  delay: .5,
                  vy: 150,
                  onStart: function() {
                     s.transSikao()
                  },
                  onUpdate: function() {
                     s.sikao_trans.y = t - n.vy,
                     s.block3.y = i - n.vy,
                     e.man.y = s.block3.y - e.man.height + e.man.manBottom.height
                  },
                  onComplete: function() {
                     e.isDisabled = !1,
                     e.isNoShortClick = !1,
                     e.man.clickCount = 0
                  }
               })
            }
         },
         transSikao: function() {
            this.playedSikao || (this.playedSikao = !0, this.removeChild(this.sikao_repeat), this.addChild(this.sikao_trans), this.sikao_trans.play(), console.log("鎬濊€冨彉瑙夐啋 this.x: ", this.x, " this.y: ", this.y, " man.x: ", e.man.x, " man.y: ", e.man.y))
         },
         updateJumpPoint: function() {
            this.isTongKuScene && (this.isOnBlock(this.block2) ? this.calcBlockDistanceY(this.block2) : this.isOnBlock(this.block3) && this.calcBlockDistanceY(this.block3))
         }
      })
   } (window.game)
},
function(e, t, i) {
   "use strict";
   function n(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   }
   var s = Object.assign ||
   function(e) {
      for (var t = 1; t < arguments.length; t++) {
         var i = arguments[t];
         for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
      }
      return e
   },
   a = i(22),
   r = n(a),
   o = i(18),
   c = n(o),
   h = i(27),
   u = (n(h), i(96)),
   l = i(54),
   d = n(l); !
   function(e) {
      var t = e.S4 = Hilo.Class.create({
         Extends: r.
      default,
         constructor: function(e) {
            e.width = 1209,
            t.superclass.constructor.apply(this, arguments)
         },
         shortcut: function() {},
         onRecoverCurrent: function() {
            return this.x = -780,
            e.man.x = e.man.MIDDLE_SCENE,
            e.man.y = this.block2.y - e.man.height + e.man.manBottom.height,
            this.isAfterMoving = !0,
            !0
         },
         init: function(t) {
            var i = {
               x: 0,
               y: 170
            };
            this.chengzhang_text = new Hilo.Sprite(s({},
            i, {
               paused: !0
            })),
            this.chengzhang_text.addFrame(e.asset.chengzhang_text[1].getSprite("xxx")),
            this.chengzhang_text.addFrame(e.asset.chengzhang_text[0].getSprite("xxx")),
            this.addChild(this.chengzhang_text),
            this.chengzhang_before = new Hilo.Sprite({
               y: i.y,
               paused: !0,
               loop: !1
            }),
            this.chengzhang_before.addFrame(e.asset.chengzhang_before[3].getSprite("xxx")),
            this.chengzhang_before.addFrame(e.asset.chengzhang_before[2].getSprite("xxx")),
            this.chengzhang_before.addFrame(e.asset.chengzhang_before[1].getSprite("xxx")),
            this.chengzhang_before.addFrame(e.asset.chengzhang_before[0].getSprite("xxx")),
            this.chengzhang_after = new Hilo.Sprite({
               y: i.y,
               paused: !0,
               loop: !1
            }),
            this.chengzhang_after.addFrame(e.asset.chengzhang_after[3].getSprite("xxx")),
            this.chengzhang_after.addFrame(e.asset.chengzhang_after[2].getSprite("xxx")),
            this.chengzhang_after.addFrame(e.asset.chengzhang_after[1].getSprite("xxx")),
            this.chengzhang_after.addFrame(e.asset.chengzhang_after[0].getSprite("xxx")),
            this.block1 = new c.
         default({
               x:
               this.chengzhang_text.x,
               y: this.chengzhang_text.y + 104,
               width: 170
            }),
            this.addChild(this.block1),
            this.block2 = new c.
         default({
               x:
               this.chengzhang_text.x + 987 - e.man.width,
               y: this.chengzhang_text.y + 100,
               width: 270
            }),
            this.addChild(this.block2),
            this.block3 = new c.
         default({
               x:
               this.block2.x + this.block2.width,
               y: this.block2.y - 1,
               width: 10,
               height: 10
            }),
            this.addChild(this.block3),
            this.sign = new u.MovingSign({
               x: this.block2.x - 156,
               y: this.block2.y - 34,
               width: 244
            }),
            e.collisionSet.push(this.block1, this.block2, this.block3)
         },
         onUpdate: function() {
            t.superclass.onUpdate.apply(this, arguments),
            this.isOnBlock(this.block1) && (e.isNoShortClick = !0),
            e.man.x >= this.x + this.block1.x + 97 && e.man.y + e.man.height - e.man.manBottom.height == this.block1.y && this.move(),
            this.isMoving && (e.man.isMovingX = !1),
            !this.isAfterMoving && this.x <= -(this.chengzhang_text.x + 987 - e.MIDDLE_SCENE) && (e.forceMovingX = !1)
         },
         updateJumpPoint: function() {
            this.isAfterMoving && this.isOnBlock(this.block2) && (this.calcBlockDistanceY(this.block2, 100), this.sign.updateWidth(this.x))
         },
         move: function() {
            if (!this.isMoving && !this.isAfterMoving) {
               this.isMoving = !0,
               e.isDisabled = !0,
               e.forceMovingX = !0,
               e.man.stepLength = 5,
               e.man.visible = !1,
               this.chengzhang_text.play();
               var t = this;
               this.repeat().then(function() {
                  t.isMoving = !1,
                  t.isAfterMoving = !0,
                  e.isNoShortClick = !1,
                  e.isDisabled = !1,
                  e.forceMovingX = !1,
                  e.man.clickCount = 0,
                  e.man.resetStepLength(),
                  e.man.visible = !0,
                  t.chengzhang_text.stop(),
                  e.man.x = t.x + t.block2.x,
                  e.man.y = t.block2.y - e.man.height + e.man.manBottom.height,
                  t.addChild(t.sign),
                  console.log("铻烘棆缁撴潫 this.x: ", t.x, " this.y: ", t.y, " man.x: ", e.man.x, " man.y: ", e.man.y)
               })
            }
         },
         repeat: function() {
            var e = this,
            t = this.chengzhang_before.getNumFrames(),
            i = this.chengzhang_after.getNumFrames();
            return new Promise(function(n) {
               e.chengzhang_before.x = e.chengzhang_text.x + 97,
               e.chengzhang_before.goto(0),
               e.addChild(e.chengzhang_before),
               e.chengzhang_before.setFrameCallback(t - 1,
               function() {
                  e.chengzhang_before.setFrameCallback(t - 1),
                  e.removeChild(e.chengzhang_before),
                  e.chengzhang_after.goto(0),
                  e.chengzhang_after.x = e.chengzhang_text.x + 516,
                  e.addChild(e.chengzhang_after),
                  e.chengzhang_after.setFrameCallback(i - 1,
                  function() {
                     e.chengzhang_after.setFrameCallback(i - 1),
                     e.removeChild(e.chengzhang_after),
                     n()
                  })
               })
            })
         },
         checkAudio: function() {
            this.isOnBlock(this.block2) && this.playGudu()
         },
         playGudu: function() {
            this.isPlayGudu || (this.isPlayGudu = !0, d.
         default.gudu.play())
         }
      })
   } (window.game)
},
function(e, t, i) {
   "use strict";
   function n(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   }
   var s = i(27),
   a = n(s),
   r = i(4),
   o = i(278),
   c = n(o),
   h = i(17),
   u = n(h),
   l = i(22),
   d = n(l),
   p = i(18),
   f = n(p); !
   function(e) {
      var t = e.S5 = Hilo.Class.create({
         Extends: d.
      default,
         constructor: function(e) {
            e.width = 560,
            t.superclass.constructor.apply(this, arguments)
         },
         shortcut: function() {},
         onRecoverCurrent: function() {
            return this.x = 50,
            e.man.x = e.man.MIDDLE_SCENE,
            e.man.y = this.block1.y - e.man.height + e.man.manBottom.height,
            !0
         },
         init: function(t) {
            var i = {
               x: 130,
               y: 270
            };
            this.gudu = new c.
         default(i),
            this.addChild(this.gudu),
            this.block1 = new f.
         default({
               x:
               this.gudu.x,
               y: this.gudu.y + 5,
               width: 292
            }),
            this.addChild(this.block1),
            this.block2 = new f.
         default({
               x:
               this.block1.x + this.block1.width - 10,
               y: this.block1.y - 1,
               width: 10,
               height: 10
            }),
            this.addChild(this.block2),
            e.collisionSet.push(this.block1, this.block2)
         },
         onUpdate: function() {
            t.superclass.onUpdate.apply(this, arguments) || (!this.isSinking && e.man.isMovingY && e.man.x + (e.man.width >> 1) >= this.x + this.block1.x + (this.block1.width >> 1) && (e.isDisabled = !0), this.isOnBlock(this.block1) && this.sink())
         },
         updateJumpPoint: function() {
            this.isOnBlock(this.block1) && this.calcBlockDistanceY(this.block1)
         },
         sink: function() {
            this.isSinking || (this.isSinking = !0, e.isDisabled = !1, this.shift(), console.log("鑸逛笅娌� this.x: ", this.x, " this.y: ", this.y, " man.x: ", e.man.x, " man.y: ", e.man.y), u.
         default.delay(100).then(function() {
               return a.
            default.showWater()
            }).then(function() {
               return u.
            default.delay(1e3)
            }).then(function() {
               var t = this.gudu,
               i = this.block1,
               n = this.block2,
               s = e.man,
               a = this,
               o = {
                  y: i.y
               };
               t.sink(),
               r.TweenMax.to(o, u.
            default.adjustTime(14), {
                  y: o.y + 72,
                  onUpdate: function() {
                     i.y = o.y,
                     n.y = o.y - 1,
                     !s.isMovingY && s.x < a.x + i.x + i.width && (s.y = i.y - s.height + s.manBottom.height)
                  },
                  onComplete: function() {
                     console.log("sank")
                  },
                  ease: r.Power0.linear
               })
            }.bind(this)))
         }
      })
   } (window.game)
},
function(e, t, i) {
   "use strict";
   function n(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   }
   var s = Object.assign ||
   function(e) {
      for (var t = 1; t < arguments.length; t++) {
         var i = arguments[t];
         for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
      }
      return e
   },
   a = i(18),
   r = n(a),
   o = i(22),
   c = n(o),
   h = i(4),
   u = i(17),
   l = n(u),
   d = i(27),
   p = n(d),
   f = i(74),
   m = n(f); !
   function(e) {
      var t = e.S6 = Hilo.Class.create({
         Extends: c.
      default,
         constructor: function(e) {
            e.width = 2070,
            t.superclass.constructor.apply(this, arguments)
         },
         shortcut: function() {},
         onRecoverCurrent: function() {
            return e.man.x = e.man.MIDDLE_SCENE,
            e.man.y = this.block2.y - e.man.height + e.man.manBottom.height,
            this.x = e.man.x - (this.block2.x + this.block2.width / 2 - e.man.width / 2),
            this.isMoving = !0,
            this.isOnLove = !1,
            !0
         },
         init: function(t) {
            var i = this,
            n = {
               x: 200,
               y: 210
            };
            this.container = new Hilo.Container,
            this.peiban_text_0 = new Hilo.Sprite(s({},
            n, {
               frames: e.asset.peiban_text.getFrame(0)
            })),
            this.container.addChild(this.peiban_text_0),
            this.peiban_text_1 = new Hilo.Sprite(s({},
            n, {
               frames: e.asset.peiban_text.getFrame(1)
            })),
            this.peiban_trans = new Hilo.Sprite(s({},
            n, {
               loop: !1
            })),
            this.peiban_trans.addFrame(e.asset.peiban_trans[0].getSprite("xxx")),
            this.peiban_trans.addFrame(e.asset.peiban_trans[1].getSprite("xxx")),
            this.peiban_repeat = new Hilo.Sprite(s({},
            n)),
            this.peiban_repeat.addFrame(e.asset.peiban_repeat[0].getSprite("xxx")),
            this.peiban_repeat.addFrame(e.asset.peiban_repeat[1].getSprite("xxx")),
            this.block1 = new r.
         default({
               x:
               this.peiban_text_0.x + 30,
               y: this.peiban_text_0.y + 70,
               width: 80
            }),
            this.container.addChild(this.block1),
            this.addChild(this.container),
            e.collisionSet.push(this.block1),
            this.ai_static = new Hilo.Bitmap({
               x: 1720,
               y: n.y + 80,
               image: e.asset.ai_static
            }),
            this.addChild(this.ai_static),
            this.ai_repeat = new Hilo.Sprite({
               x: this.ai_static.x,
               y: this.ai_static.y,
               paused: !0
            }),
            this.ai_repeat.addFrame(e.asset.ai_repeat[0].getSprite("xxx")),
            this.ai_repeat.addFrame(e.asset.ai_repeat[1].getSprite("xxx")),
            this.block2 = new r.
         default({
               id:
               "ai_block_2",
               x: this.ai_static.x + 58,
               y: this.ai_static.y + 115,
               width: 128
            }),
            this.addChild(this.block2),
            e.collisionSet.push(this.block2),
            this.stars = [this.createStar(0, -50), this.createStar(800, -50)],
            this.stars.forEach(function(e) {
               i.addChild(e)
            }),
            this.moveLeft()
         },
         dispose: function() {
            t.superclass.dispose.apply(this, arguments),
            this.blinkTween && this.blinkTween.kill()
         },
         clearCollisionSet: function() {
            l.
         default.remove(e.collisionSet, this.block1),
            l.
         default.remove(e.collisionSet, this.block2)
         },
         onUpdate: function() {
            t.superclass.onUpdate.apply(this, arguments) || (this.isOnBlock(this.block1) ? this.move() : !this.isOnLove && this.isOnBlock(this.block2) ? this.playLove() : this.isOnLove && e.man.clickCount > 0 && this.stopLove(), e.forceMovingX && this.container.x < 1300 ? this.container.x += e.man.stepLength: !this.isAfterMoving && this.container.x >= 1300 && (this.isAfterMoving = !0, e.forceMovingX = !1, console.log("闄即鍒扮粓鐐� this.x: ", this.x, " this.y: ", this.y, " man.x: ", e.man.x, " man.y: ", e.man.y, ", 鑰楁椂: ", +new Date - this.startTime)), !this.isMoving && e.man.x + (e.man.width >> 1) >= this.x + this.container.x + this.block1.x + (this.block1.width >> 1) && e.man.x <= this.x + this.container.x + this.block1.x + this.block1.width ? e.isDisabled = !0 : !this.isOnLove && !this.isStopLove && e.man.x + (e.man.width >> 1) >= this.x + this.block2.x + (this.block2.width >> 1) && e.man.x <= this.x + this.block2.x + this.block2.width && (e.isDisabled = !0))
         },
         moveLeft: function() {
            var t = {
               x: 0
            },
            i = this;
            e.isNoShortClick = !0,
            h.TweenMax.to(t, 1, {
               delay: 4,
               x: -200,
               onUpdate: function() {
                  i.container.x = t.x
               },
               onComplete: function() {
                  e.man.clickCount = 0,
                  e.isNoShortClick = !1
               },
               ease: h.Power0.linear
            })
         },
         move: function() {
            if (!this.isMoving) {
               this.isMoving = !0,
               e.guide.fadeOut(),
               m.
            default.fadeOutBig(),
               p.
            default.hideWater(),
               this.shift(),
               e.isDisabled = !0,
               this.container.removeChild(this.peiban_text_0),
               this.container.addChild(this.peiban_text_1),
               this.container.addChild(this.peiban_trans),
               this.peiban_trans.play();
               var t = this.peiban_trans.getNumFrames(),
               i = this;
               this.peiban_trans.setFrameCallback(t - 1,
               function() {
                  i.peiban_trans.setFrameCallback(t - 1),
                  i.container.removeChild(i.peiban_trans),
                  i.container.addChild(i.peiban_repeat),
                  i.peiban_repeat.play()
               });
               var n = {
                  alpha: 1,
                  y: this.container.y
               };
               this.blinkTween = h.TweenMax.to(n, 1.5, {
                  alpha: 0,
                  repeat: 100,
                  yoyo: !0,
                  delay: .5,
                  onUpdate: function() {
                     i.peiban_text_1.alpha = n.alpha
                  },
                  ease: Power4.easeOut
               });
               var s = new h.TimelineMax({
                  delay: 1,
                  onStart: function() {
                     e.man.resetStepLength(),
                     e.forceMovingX = !0,
                     i.startTime = +new Date
                  },
                  onUpdate: function() {
                     i.container.y = n.y,
                     e.man.isMovingY || (e.man.y = i.container.y + i.block1.y - e.man.height + e.man.manBottom.height)
                  },
                  onComplete: function() {
                     e.man.updateJumpPoint(100),
                     e.isDisabled = !1,
                     e.man.clickCount = 0,
                     e.guide.switchToBoth()
                  }
               }),
               a = l.
            default.adjustTime(5100) / 1e4;
               s.to(n, 1 * a, {
                  y: this.container.y - 50
               }).to(n, 3 * a, {
                  y: this.container.y + 100
               }).to(n, 2 * a, {
                  y: this.container.y + 0
               }).to(n, 3 * a, {
                  y: this.container.y + 150
               }).to(n, 1 * a, {
                  y: this.container.y + 125
               })
            }
         },
         playLove: function() {
            this.isOnLove || (this.isOnLove = !0, m.
         default.fadeInBig(), this.fadeOut(), e.man.visible = !1, e.isDisabled = !0, this.removeChild(this.ai_static), this.addChild(this.ai_repeat), this.ai_repeat.play(), console.log("璺冲埌鐖变笂 this.x: ", this.x, " this.y: ", this.y, " man.x: ", e.man.x, " man.y: ", e.man.y))
         },
         stopLove: function() {
            if (!this.isStopLove) {
               this.isStopLove = !0,
               e.isDisabled = !1,
               e.isNoShortClick = !1,
               e.man.clickCount = 0;
               var t = this;
               e.man.visible = !0,
               t.ai_repeat.stop(),
               t.removeChild(t.ai_repeat),
               t.addChild(t.ai_static),
               e.man.x = t.x + t.block2.x + t.block2.width / 2 - e.man.width / 2,
               e.man.y = t.block2.y - e.man.height + e.man.manBottom.height,
               t.calcBlockDistanceY(t.block2),
               e.onUserStart(),
               l.
            default.delay(10).then(e.onUserEnd.bind(e))
            }
         },
         fadeOut: function() {
            var e = {
               o: 1
            },
            t = this.container;
            h.TweenMax.to(e, .5, {
               o: 0,
               onUpdate: function() {
                  t.alpha = e.o
               }
            })
         },
         createStar: function(t, i) {
            return new Hilo.Bitmap({
               x: this.peiban_text_0.x + t,
               y: this.peiban_text_0.y + i,
               image: e.asset.peiban_star
            })
         }
      })
   } (window.game)
},
function(e, t, i) {
   "use strict";
   function n(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   }
   var s = Object.assign ||
   function(e) {
      for (var t = 1; t < arguments.length; t++) {
         var i = arguments[t];
         for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
      }
      return e
   },
   a = i(22),
   r = n(a),
   o = i(18),
   c = n(o),
   h = (i(4), i(281)); !
   function(e) {
      var t = e.S7 = Hilo.Class.create({
         Extends: r.
      default,
         constructor: function(e) {
            e.width = 600,
            t.superclass.constructor.apply(this, arguments)
         },
         shortcut: function() {},
         onRecoverCurrent: function() {
            return e.man.x = e.man.MIDDLE_SCENE,
            e.man.y = this.block1.y - e.man.height + e.man.manBottom.height,
            this.x = -301,
            this.isShooted = !1,
            !0
         },
         init: function(t) {
            var i = {
               x: 0,
               y: 400
            };
            this.block1 = new c.
         default(s({},
            i, {
               width: 832
            })),
            this.addChild(this.block1),
            this.block2 = new c.
         default({
               x:
               this.block1.x + this.block1.width - 200,
               y: this.block1.y,
               width: 200
            }),
            this.addChild(this.block2),
            this.block3 = new c.
         default({
               x:
               this.block1.x + this.block1.width - 10,
               y: this.block1.y - 1,
               width: 10,
               height: 10
            }),
            this.addChild(this.block3),
            e.collisionSet.push(this.block1, this.block3);
            var n = [],
            a = 0;
            for (a = 0; a < 8; ++a, i.x += 104) {
               var r = a % 2 == 0 ? new h.XingSprite(i) : new h.FuSprite(i);
               this.addChild(r),
               n.push(r)
            }
            this.words = n,
            this.guide = new Hilo.Bitmap({
               x: n[0].x,
               y: n[0].y - 40,
               image: e.asset.guide_s7,
               alpha: 0
            }),
            this.addChild(this.guide),
            this.guide_mask = new Hilo.View({
               x: n[0].x,
               y: n[0].y - 40,
               width: 0,
               height: 24,
               background: "#262231"
            }),
            this.addChild(this.guide_mask)
         },
         repair: function() {
            if (!this.isRepair) {
               this.isRepair = !0;
               var t = this.block1.y - e.man.height + e.man.manBottom.height;
               e.man.y > t && (e.man.y = t)
            }
         },
         onUpdate: function() {
            t.superclass.onUpdate.apply(this, arguments),
            e.man.hitTestObject(this.block1, !0) && this.repair(),
            this.isOnBlock(this.block1) && (e.man.clickCount = 0, this.playText(), this.isShowTip = !0, this.isOnBlock(this.block2) ? (e.isNoShortClick = !1, e.man.clickCount = 0, e.guide.switchToBoth()) : e.isNoShortClick = !0, this.isChangeGuide || (this.isChangeGuide = !0, e.guide.setFullOpacity(1), e.guide.switchToPress())),
            this.isShowTip && this.updateGuideMask(),
            e.isFreeWalk && !e.isCreativeEnable && e.man.x >= 440 && this.hideGuideMask()
         },
         playText: function() {
            for (var t = e.man.x,
            i = 0; i < 8; ++i) t >= this.x + this.words[i].x && this.words[i].play()
         },
         updateGuideMask: function() {
            this.guide.alpha = 1,
            this.guide_mask.alpha = 1,
            this.guide_mask.width = e.man.x + e.man.manLeft.width - (this.x + this.guide_mask.x)
         },
         hideGuideMask: function() {
            this.isShowTip = !1,
            this.removeChild(this.guide),
            this.removeChild(this.guide_mask)
         }
      })
   } (window.game)
},
function(e, t, i) {
   "use strict";
   function n(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   }
   var s = Object.assign ||
   function(e) {
      for (var t = 1; t < arguments.length; t++) {
         var i = arguments[t];
         for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
      }
      return e
   },
   a = i(22),
   r = n(a),
   o = i(18),
   c = n(o),
   h = i(4),
   u = i(279),
   l = i(280),
   d = i(17),
   p = n(d),
   f = i(54),
   m = n(f); !
   function(e) {
      var t = e.S8 = Hilo.Class.create({
         Extends: r.
      default,
         constructor: function(i) {
            t.superclass.constructor.call(this, i),
            this.width = 1e3,
            this.height = i.height || 1334,
            this.initScenePos(e.width - 450, i.startY)
         },
         shortcut: function() {},
         onRecoverCurrent: function() {
            return this.resume(),
            !0
         },
         onRecoverNext: function(t, i) {
            e.man.alpha = 1,
            this.x = 0
         },
         init: function(t) {
            var i = {
               itemWidth: 40,
               letterSpace: 3,
               wordSpace: 6
            },
            n = this.getVisibleHeight(),
            a = this.manCopy = new Hilo.Sprite({
               id: "manCopy",
               width: 50,
               height: 50,
               alpha: 0
            });
            a.addFrame(e.asset.ni_copy.getSprite("xxx")),
            a.goto(0, !0),
            this.addChild(a);
            var r = this.wallRight = new l.WallRight(s({
               id: "wallRight"
            },
            i, {
               x: e.width - 40,
               y: 0,
               width: 40,
               height: n - 40
            })),
            o = this.wallLeft = new l.WallLeft(s({
               id: "wallLeft"
            },
            i, {
               x: 0,
               y: 46,
               width: 40,
               height: n - 40
            })),
            c = this.wallTop = new l.WallTop(s({
               id: "wallTop"
            },
            i, {
               x: 0,
               y: 0,
               width: e.width - 40,
               height: 40
            })),
            h = this.wallBottom = new l.WallBottom(s({
               id: "wallBottom"
            },
            i, {
               x: 40,
               y: n - 40,
               width: e.width - 120,
               height: 40
            }));
            this.addChild(r),
            this.addChild(o),
            this.addChild(c),
            this.addChild(h),
            this.staggerArr = [],
            this.staggerArr = this.staggerArr.concat(r.staggerArr1, c.staggerArr, o.staggerArr, h.staggerArr, r.staggerArr2),
            this.guide_right = new Hilo.Bitmap({
               x: this.wallRight.x - 36,
               y: this.wallRight.y + 36,
               image: e.asset.guide_right,
               alpha: 0
            }),
            this.addChild(this.guide_right),
            this.guide_right_mask = new Hilo.View({
               x: this.guide_right.x + 10,
               y: this.guide_right.y + this.guide_right.height,
               width: 14,
               height: 500,
               background: "#262231",
               alpha: 0
            }),
            this.addChild(this.guide_right_mask),
            this.guide_top = new Hilo.Bitmap({
               x: 50,
               y: 44,
               image: e.asset.guide_top,
               alpha: 0
            }),
            this.addChild(this.guide_top),
            this.guide_top_mask = new Hilo.View({
               x: this.guide_top.x + 100,
               y: this.guide_top.y + 10,
               width: 50,
               height: 14,
               background: "#262231",
               alpha: 0
            }),
            this.addChild(this.guide_top_mask)
         },
         fall2Tuoyan: function() {
            var t, i = this;
            if (!this.isFalled) {
               this.isFalled = !0,
               this.initTuoyan(),
               t = i.blockArr && i.blockArr[0] && i.blockArr[0].y - e.man.man.height - e.man.manBottom.height,
               this.removeOtherBlocks(5),
               e.man.pivotX = e.man.width >> 1,
               e.man.pivotY = e.man.height >> 1;
               var n = {
                  y: 36,
                  rotation: 0
               };
               h.TweenMax.to(n, .75, {
                  y: t + e.man.height / 2,
                  duration: 200,
                  rotation: 720,
                  ease: Power1.easeOut,
                  onStart: function() {
                     e.man.isMovingX = !1,
                     e.man.isMovingY = !1,
                     i.hideManCopy()
                  },
                  onUpdate: function() {
                     e.man.y = n.y,
                     e.man.rotation = n.rotation,
                     e.isDisabled = !0,
                     e.man.isMovingX = !1,
                     e.man.isMovingY = !1
                  },
                  onComplete: function() {
                     e.isDisabled = !1,
                     e.isCreativeEnable = !1,
                     e.isFreeWalk = !1,
                     e.isNoShortClick = !0,
                     e.guide.switchToPress(),
                     e.man.x -= e.man.man.width / 2,
                     e.man.pivotX = 0,
                     e.man.pivotY = 0,
                     e.man.y = 346,
                     e.man.isDead = !1,
                     i.isStartCheck = !0,
                     i.isTriggered = !0,
                     i.timerFallStrokes(),
                     e.s9 && (e.s9.isShowTip = !0)
                  }
               })
            }
         },
         timerFallStrokes: function() {
            var e = this;
            p.
         default.delay(400).then(function() {
               for (var t = 0; t < 10; ++t) e["timer" + t] = setTimeout(function(t) {
                  e.words[t].fallStrokes()
               }.bind(e, t), 380 * t - 1)
            })
         },
         initTuoyan: function() {
            var t = {
               x: 317,
               y: 400
            };
            this.blockArr = [];
            var i, n, a = [],
            r = 0;
            for (r = 0; r < 10; ++r) r % 2 == 0 ? (i = this["tuo" + r] = new u.TuoSprite({
               x: t.x,
               y: 396
            }), this["tuo" + r].id = "tuo" + r, n = this["ty-block" + r] = new c.
         default(s({},
            t, {
               width: i.width,
               height: i.height,
               alpha: 1
            })), this["ty-block" + r].id = "ty-block" + r, t.x += 55) : (i = this["yan" + r] = new u.YanSprite({
               x: t.x,
               y: 396
            }), this["yan" + r].id = "yan" + r, n = this["ty-block" + r] = new c.
         default(s({},
            t, {
               width: i.width,
               height: i.height,
               alpha: 1
            })), this["ty-block" + r].id = "ty-block" + r, t.x += 51, t.x += 9),
            this.addChild(i),
            this.addChild(n),
            this.blockArr.push(n),
            a.push(i);
            Array.prototype.push.apply(e.collisionSet, this.blockArr),
            this.words = a
         },
         removeOtherBlocks: function(t) {
            e.collisionSet.shift(),
            p.
         default.remove(e.collisionSet, this.wallRight),
            p.
         default.remove(e.collisionSet, this.wallTop),
            this.hideTip2(),
            this.removeChild(this.wallTop),
            this.removeChild(this.wallRight),
            this.removeChild(this.wallBottom),
            this.removeChild(this.wallLeft),
            e.shift(),
            this.wallRight = null
         },
         hideXingFu: function() {
            if (e.s7) for (var t = e.s7.children,
            i = 0; i < t.length; ++i) t[i].alpha = 0
         },
         showChuangyi: function() {
            h.TweenMax.staggerTo(this.staggerArr, .1, {
               alpha: 1
            },
            .02)
         },
         hideChuangyi: function() {
            function e() {
               this.wallTop && this.removeChild(this.wallTop),
               this.wallRight && this.removeChild(this.wallRight),
               this.removeChild(this.wallBottom),
               this.removeChild(this.wallLeft)
            }
            var t = [];
            t = t.concat(this.wallTop.children.slice(9), this.wallRight.children.slice(), this.wallBottom.children.slice().reverse(), this.wallLeft.children.slice().reverse(), this.wallTop.children.slice(0, 9)),
            h.TweenMax.staggerTo(t, .1, {
               alpha: 0
            },
            .02, e.bind(this))
         },
         getVisibleHeight: function() {
            var t = window.innerHeight / window.innerWidth;
            return t > 16 / 9 && (t = 16 / 9),
            t * e.width
         },
         checkStandTuoyan: function() {
            if (this.isTriggered && !this.isStopCheck) {
               e.man.x + e.man.width > this.x + this.words[this.words.length - 1].x + 51 && (this.isTriggered = !1);
               for (var t = 0,
               i = 0; i < this.blockArr.length; ++i) e.man.hitTestObject(this.blockArr[i], !0) && ++t;
               0 === t && !1 === e.man.isMovingY && (this.isStopCheck = !0, this.fall2Bottom())
            }
         },
         fall2Bottom: function() {
            var e = game;
            this.blockArr[0].y,
            e.man.height,
            e.man.manBottom.height;
            this.tweenFall = new TimelineMax,
            this.tweenFall.to(e.man, .5, {
               y: e.height + 2,
               ease: Power2.easeOut,
               onComplete: function() {}
            }),
            this.deadPos = {
               x: e.man.x,
               y: e.man.y,
               curSceneX: this.x
            }
         },
         resume: function() {
            for (var t = this,
            i = 0; i < 10; ++i) clearTimeout(t["timer" + i]);
            for (var n = 0; n < this.words.length; ++n) this.words[n].tl && this.words[n].tl.progress(0),
            this.words[n].tl && this.words[n].tl.pause();
            setTimeout(this.timerFallStrokes.bind(this), 1e3),
            e.man.y = this.blockArr[0].y - e.man.height + e.man.manBottom.height,
            this.deadPos ? (e.man.x = this.deadPos.x, this.x = this.deadPos.curSceneX) : (e.man.x = 350, this.x = e.sceneSet[0].x),
            this.tweenFall && this.tweenFall.progress(0),
            this.tweenFall && this.tweenFall.pause(),
            e.collisionSet = e.collisionSet.filter(function(e) {
               return - 1 === t.blockArr.indexOf(e)
            }),
            Array.prototype.push.apply(e.collisionSet, t.blockArr);
            for (var s = this.children.filter(function(e) {
               return t.blockArr.indexOf(e) > -1
            }), a = 0; a < s.length; ++a) this.removeChild(s[a]);
            this.addChild.apply(t, t.blockArr),
            this.isStopCheck = !1,
            e.man.isDead = !1
         },
         showMancopy: function() {
            var t = e.COVER_WIDTH;
            this.manCopy.x = e.man.x + t,
            this.manCopy.y = e.man.y + t,
            this.manCopy.alpha = 1,
            e.man.alpha = 0
         },
         hideManCopy: function() {
            this.manCopy && (this.manCopy.alpha = 0, e.man.alpha = 1, this.removeChild(this.manCopy), this.manCopy = null)
         },
         showTip1: function() {
            this.isShowTip1 || (this.isShowTip1 = !0, this.guide_right.alpha = 1, this.guide_right_mask.alpha = 1)
         },
         hideTip1: function() {
            this.isHideTip1 || (this.isHideTip1 = !0, this.removeChild(this.guide_right), this.removeChild(this.guide_right_mask), this.guide_right = null, this.guide_right_mask = null, this.showTip2())
         },
         showTip2: function() {
            this.isShowTip2 || (this.isShowTip2 = !0, this.guide_top.alpha = 1, this.guide_top_mask.alpha = 1)
         },
         hideTip2: function() {
            this.removeChild(this.guide_top),
            this.removeChild(this.guide_top_mask),
            this.guide_top = null,
            this.guide_top_mask = null
         },
         loopBGM: function() {
            var e = m.
         default.bgm.isPlaying(),
            t = m.
         default.bgm.isPaused();
            e && !t || m.
         default.bgm.play()
         },
         onUpdate: function() {
            if (this.loopBGM(), !e.man.isDead && (e.man.isMovingX && e.man.x >= e.MIDDLE_SCENE - e.man.width && !e.isFreeWalk && (this.x -= e.man.stepLength), this.x <= 0 && !this.isFreeWalk && (this.isFreeWalk = !0, e.isFreeWalk = !0, e.collisionSet.push(this.wallRight, this.wallTop)), this.wallRight && e.man.manRight.hitTestObject(this.wallRight, !0) && (e.isCreativeEnable = !0, this.showChuangyi(), this.hideXingFu()), this.checkStandTuoyan(), e.isCreativeEnable && this.manCopy && this.showMancopy(), e.isCreativeEnable && !e.isTouchTop && e.man.y >= 62 && (this.showTip1(), this.guide_right_mask.y = e.man.y + e.man.height - 4), e.isCreativeEnable && !e.isTouchTop && e.man.y < 62 && this.hideTip1(), e.isCreativeEnable && e.isTouchTop && e.man.x > e.MIDDLE_SCENE)) {
               if (!this.guide_top_mask || !this.wallRight) return;
               this.guide_top_mask.x = e.man.x + e.man.width,
               this.guide_top_mask.width = 710 - this.guide_top_mask.x
            }
         }
      })
   } (window.game)
},
function(e, t, i) {
   "use strict";
   function n(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   }
   var s = Object.assign ||
   function(e) {
      for (var t = 1; t < arguments.length; t++) {
         var i = arguments[t];
         for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
      }
      return e
   },
   a = i(22),
   r = n(a),
   o = i(18),
   c = n(o),
   h = i(4); !
   function(e) {
      var t = e.S9 = Hilo.Class.create({
         Extends: r.
      default,
         constructor: function(e) {
            e.width = 812,
            t.superclass.constructor.apply(this, arguments)
         },
         shortcut: function() {},
         onRecoverCurrent: function() {
            return this.x = -730,
            e.man.x = e.man.MIDDLE_SCENE,
            e.man.y = this.block1.y - e.man.height + e.man.manBottom.height,
            !0
         },
         init: function(t) {
            this.words = [];
            for (var i = 0; i < 4; ++i) {
               var n = {
                  x: 35 * i - 80,
                  y: 400
               };
               this.initNuliGroup(n, i)
            }
            this.block1 = new c.
         default({
               x:
               -80,
               y: 400,
               width: 772
            }),
            this.addChild(this.block1),
            this.block2 = new c.
         default({
               x:
               this.block1.x + this.block1.width - 200,
               y: this.block1.y,
               width: 200
            }),
            this.addChild(this.block2),
            this.block3 = new c.
         default({
               x:
               this.block1.x + this.block1.width - 10,
               y: this.block1.y - 1,
               width: 10,
               height: 10
            }),
            this.addChild(this.block3),
            e.collisionSet.push(this.block1, this.block3),
            this.defaultShow(8),
            this.guide = new Hilo.Bitmap({
               x: this.block1.x - 600,
               y: this.block1.y - 40,
               image: e.asset.guide_long,
               alpha: 0
            }),
            this.addChild(this.guide),
            this.guide_mask = new Hilo.View({
               x: this.guide.x,
               y: this.guide.y,
               width: 34,
               height: 24,
               background: "#262231",
               alpha: 0
            }),
            this.addChild(this.guide_mask)
         },
         initNuliGroup: function(t, i) {
            var n = {
               alpha: 0,
               y: t.y - 6
            },
            a = t.x;
            this["group" + i] = [];
            for (var r = 0; r < 4; ++r) {
               var o = new Hilo.Sprite(s({
                  id: "nu" + r,
                  frames: e.asset.nuli_v2.getFrame(0),
                  x: 162 * r + 8 * r + a
               },
               n)),
               c = new Hilo.Sprite(s({
                  id: "li" + r,
                  frames: e.asset.nuli_v2.getFrame(1),
                  x: o.x + 79
               },
               n));
               this.addChild(o),
               this.addChild(c),
               this["group" + i].push(o),
               this["group" + i].push(c)
            }
         },
         defaultShow: function(e) {
            if (! (e > this.children.length)) for (var t = 0; t < e; ++t) this.children[t].alpha = 1,
            this.children[t].isShow = !0
         },
         animateFirst: function() {
            this.isShow || (this.isShow = !0, h.TweenMax.staggerTo(this.group0.slice(8), 3, {
               alpha: 1
            },
            .1))
         },
         animateCascade: function() {
            for (var t = e.man.x,
            i = this.block1.width / 2 / 4 >> 0,
            n = 1; n <= 4; ++n) t >= this.x + this.block1.x + i * n && this.animateGroup(n)
         },
         animateGroup: function(e) {
            var t = this["group" + e];
            t && !t.isPlayed && (t.isPlayed = !0, h.TweenMax.staggerTo(t, .3, {
               alpha: 1
            },
            .08))
         },
         updateGuideMask: function() {
            this.guide.alpha = 1,
            this.guide_mask.alpha = 1,
            this.guide_mask.width = e.man.x + e.man.manLeft.width - (this.x + this.guide_mask.x)
         },
         hideGuideMask: function() {
            this.isShowTip = !1,
            this.removeChild(this.guide),
            this.removeChild(this.guide_mask)
         },
         onUpdate: function() {
            t.superclass.onUpdate.apply(this, arguments) || (this.isOnBlock(this.block1) && (this.animateCascade(), this.isOnBlock(this.block2) ? (e.isNoShortClick = !1, e.man.clickCount = 0, e.guide.switchToBoth()) : e.isNoShortClick = !0), this.isShowTip && this.updateGuideMask(), e.s9 && this.x + this.block1.x <= -340 && this.hideGuideMask())
         },
         updateJumpPoint: function() {
            this.isOnBlock(this.block1) && this.calcBlockDistanceY(this.block1)
         }
      })
   } (window.game)
},
function(e, t, i) {
   "use strict";
   function n(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   }
   Object.defineProperty(t, "__esModule", {
      value: !0
   });
   var s = Object.assign ||
   function(e) {
      for (var t = 1; t < arguments.length; t++) {
         var i = arguments[t];
         for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
      }
      return e
   },
   a = i(27),
   r = n(a),
   o = i(4),
   c = i(28),
   h = n(c),
   u = (function() {
      var e = 2 * Math.PI / 1800,
      t = -Math.PI
   } (),
   function() {
      var e = 2 * Math.PI / 3e3;
      return function(t) {
         return 180 * Math.sin(e * t + 0)
      }
   } ()),
   l = (function() {
      var e = 2 * Math.PI / 1500,
      t = -Math.PI
   } (),
   function() {
      var e = 2 * Math.PI / 2e3,
      t = -Math.PI / 2
   } (), Hilo.Class.create({
      Extends: Hilo.Container,
      constructor: function(e) {
         l.superclass.constructor.call(this, e);
         var t = game.asset,
         i = {
            x: 0,
            y: 0
         };
         this.text_static = new Hilo.Sprite({
            width: 323,
            height: 266,
            frames: t.gudu_static.getFrame(0),
            paused: !0,
            loop: !1
         }),
         this.text_trans = new Hilo.Sprite({
            width: 323,
            height: 266,
            paused: !0,
            loop: !1,
            interval: 5
         }),
         this.text_trans.addFrame(t.gudu_text[2].getSprite("xxx")),
         this.text_trans.addFrame(t.gudu_text[1].getSprite("xxx")),
         this.text_trans.addFrame(t.gudu_text[0].getSprite("xxx")),
         this.text_repeat = new Hilo.Sprite({
            width: 323,
            height: 266,
            frames: t.gudu_repeat.getSprite("xxx")
         }),
         i = {
            x: 75,
            y: 110
         },
         this.bihua_static = new Hilo.Sprite(s({},
         i, {
            width: 70,
            height: 46,
            frames: t.gudu_static.getFrame(1),
            paused: !0,
            loop: !1
         })),
         this.bihua_repeat = new Hilo.Sprite({
            width: 54,
            height: 35,
            frames: t.gudu_bihua.getSprite("xxx")
         }),
         this.reset()
      },
      reset: function() {
         this.addChild(this.text_static),
         this.addChild(this.bihua_static),
         this.removeChild(this.text_trans),
         this.removeChild(this.text_repeat)
      },
      dispose: function() {},
      sink: function(e, t) {
         this.removeChild(this.text_static),
         this.addChild(this.text_trans);
         var i = this,
         n = this.text_trans,
         s = n.getNumFrames();
         n.play(),
         this.fly(),
         n.setFrameCallback(s - 1,
         function() {
            n.setFrameCallback(s - 1),
            i.afterSink()
         })
      },
      fly: function() {
         var e, t, i, n = this.parent,
         s = this;
         n.x;
         e = this.bihua_repeat.x = this.bihua_static.x,
         t = this.bihua_repeat.y = this.bihua_static.y,
         this.removeChild(this.bihua_static),
         this.addChild(this.bihua_repeat),
         this.bihua_repeat.play(),
         i = this.bihua_repeat;
         var a = {
            r1: 0,
            y1: n.y + this.y + t
         };
         this.flyTween = new o.TweenMax(a, 4, {
            r1: -80,
            y1: n.y + 2 * h.
         default.height + 200,
            onUpdate: function() {
               i.y = a.y1 - n.y - s.y,
               i.x = u(i.y - t) + e,
               i.rotation = a.r1,
               r.
            default.touchWater(n.x + s.x + i.x >> 1, n.y + s.y + i.y + 200 >> 1)
            },
            onComplete: function() {
               r.
            default.autoWave()
            },
            ease: o.Power1.easeIn
         })
      },
      stopFly: function() {},
      afterSink: function() {
         this.removeChild(this.text_trans),
         this.addChild(this.text_repeat)
      }
   }));
   t.
default = l
},
function(e, t, i) {
   "use strict";
   function n(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   }
   Object.defineProperty(t, "__esModule", {
      value: !0
   }),
   t.YanSprite = t.TuoSprite = void 0;
   var s = i(4),
   a = i(18),
   r = (n(a), i(17)),
   o = n(r),
   c = Hilo.Class.create({
      Extends: Hilo.Container,
      constructor: function(e) {
         c.superclass.constructor.call(this, e),
         this.init(e)
      },
      init: function() {
         throw new Error("瀛愮被瀹炵幇")
      },
      play: function() {
         this.isPlayed || (this.isPlayed = !0, this.fallStrokes())
      },
      fallStrokes: function() {
         var e = this,
         t = game;
         this.staggerArr.length;
         this.sscount = 0,
         (this.tl = new s.TimelineMax).staggerTo(this.staggerArr, 3.2, {
            alpha: 0,
            y: game.height,
            onStart: function() {
               if (7 == ++e.sscount) {
                  var i = e.id.slice(3);
                  t.s8 && t.s8.removeChildById("ty-block" + i),
                  t.s8 && t.s8["ty-block" + i] && o.
               default.remove(t.collisionSet, t.s8["ty-block" + i])
               }
            },
            ease: Power2.easeOut
         },
         .06)
      }
   }),
   h = Hilo.Class.create({
      Extends: c,
      constructor: function(e) {
         h.superclass.constructor.call(this, e)
      },
      init: function(e) {
         var t = game.asset;
         this.width = 55,
         this.height = 58,
         this.staggerArr = [],
         this.t1 = new Hilo.Sprite({
            x: 2,
            y: 26,
            width: 21,
            height: 14,
            frames: t.ty.getFrame(1)
         }),
         this.t2 = new Hilo.Sprite({
            x: 0,
            y: 1,
            width: 20,
            height: 58,
            frames: t.ty.getFrame(2)
         }),
         this.t3 = new Hilo.Sprite({
            x: 1,
            y: 16,
            width: 23,
            height: 4,
            frames: t.ty.getFrame(3)
         }),
         this.t4 = new Hilo.Sprite({
            x: 24,
            y: 21,
            width: 31,
            height: 36,
            frames: t.ty.getFrame(4)
         }),
         this.t5 = new Hilo.Sprite({
            x: 19,
            y: 22,
            width: 32,
            height: 23,
            frames: t.ty.getFrame(5)
         }),
         this.t6 = new Hilo.Sprite({
            x: 34,
            y: 16,
            width: 8,
            height: 32,
            frames: t.ty.getFrame(6)
         }),
         this.t7 = new Hilo.Sprite({
            x: 29,
            y: 10,
            width: 26,
            height: 5,
            frames: t.ty.getFrame(7)
         }),
         this.t8 = new Hilo.Sprite({
            x: 21,
            y: 4,
            width: 16,
            height: 20,
            frames: t.ty.getFrame(8)
         }),
         this.addChild(this.t1),
         this.addChild(this.t2),
         this.addChild(this.t3),
         this.addChild(this.t4),
         this.addChild(this.t5),
         this.addChild(this.t6),
         this.addChild(this.t7),
         this.addChild(this.t8),
         this.staggerArr = this.children.slice()
      }
   }),
   u = Hilo.Class.create({
      Extends: c,
      constructor: function(e) {
         u.superclass.constructor.call(this, e)
      },
      init: function(e) {
         var t = game.asset;
         this.width = 51,
         this.height = 58,
         this.y1 = new Hilo.Sprite({
            x: 3,
            y: 34,
            width: 48,
            height: 24,
            frames: t.ty.getFrame(9)
         }),
         this.y2 = new Hilo.Sprite({
            x: 25,
            y: 40,
            width: 25,
            height: 5,
            frames: t.ty.getFrame(10)
         }),
         this.y3 = new Hilo.Sprite({
            x: 0,
            y: 23,
            width: 21,
            height: 35,
            frames: t.ty.getFrame(11)
         }),
         this.y4 = new Hilo.Sprite({
            x: 20,
            y: 20,
            width: 10,
            height: 26,
            frames: t.ty.getFrame(12)
         }),
         this.y5 = new Hilo.Sprite({
            x: 0,
            y: 7,
            width: 17,
            height: 25,
            frames: t.ty.getFrame(13)
         }),
         this.y6 = new Hilo.Sprite({
            x: 31,
            y: 13,
            width: 7,
            height: 31,
            frames: t.ty.getFrame(14)
         }),
         this.y7 = new Hilo.Sprite({
            x: 38,
            y: 23,
            width: 12,
            height: 4,
            frames: t.ty.getFrame(15)
         }),
         this.y8 = new Hilo.Sprite({
            x: 20,
            y: 4,
            width: 28,
            height: 11,
            frames: t.ty.getFrame(16)
         }),
         this.addChild(this.y1),
         this.addChild(this.y2),
         this.addChild(this.y3),
         this.addChild(this.y4),
         this.addChild(this.y5),
         this.addChild(this.y6),
         this.addChild(this.y7),
         this.addChild(this.y8),
         this.staggerArr = this.children.slice()
      }
   });
   t.TuoSprite = h,
   t.YanSprite = u
},
function(e, t, i) {
   "use strict";
   Object.defineProperty(t, "__esModule", {
      value: !0
   });
   var n = Object.assign ||
   function(e) {
      for (var t = 1; t < arguments.length; t++) {
         var i = arguments[t];
         for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
      }
      return e
   },
   s = Hilo.Class.create({
      Extends: Hilo.Container,
      constructor: function(e) {
         s.superclass.constructor.call(this, e),
         this.id = e.id,
         this.width = e.width,
         this.height = e.height,
         this.x = e.x || 0,
         this.y = e.y || 0,
         this.staggerArr = [],
         this.init(e)
      },
      init: function() {
         throw new Error("瀛愮被瀹炵幇")
      }
   }),
   a = Hilo.Class.create({
      Extends: s,
      constructor: function(e) {
         a.superclass.constructor.call(this, e)
      },
      init: function(e) {
         for (var t = game,
         i = e.itemWidth,
         s = e.letterSpace,
         a = e.wordSpace,
         r = 2 * i + s,
         o = this.width / r >> 0,
         c = a,
         h = {
            y: 0,
            width: i,
            height: i,
            alpha: 0
         },
         u = 0; u < o; u++) {
            c = 0;
            var l = new Hilo.Sprite(n({
               id: "c" + u,
               frames: t.asset.cy.getFrame(7)
            },
            h, {
               x: u * r + u * a + c
            })),
            d = new Hilo.Sprite(n({
               id: "r" + u,
               frames: t.asset.cy.getFrame(6)
            },
            h, {
               x: l.x + i + s
            }));
            this.addChild(l),
            this.addChild(d)
         }
         var p = (this.children[this.getNumChildren() - 1], new Hilo.Bitmap(n({
            id: "r" + u,
            image: t.asset.letter_top_1
         },
         h, {
            x: 0
         })));
         this.addChild(p);
         var f = this.children,
         m = f.slice(0, f.length - 1).reverse();
         m.push(p),
         Array.prototype.push.apply(this.staggerArr, m)
      }
   }),
   r = Hilo.Class.create({
      Extends: s,
      constructor: function(e) {
         r.superclass.constructor.call(this, e)
      },
      init: function(e) {
         for (var t = game,
         i = e.itemWidth,
         s = e.letterSpace,
         a = e.wordSpace,
         r = 2 * i + s,
         o = this.height / r >> 0,
         c = a,
         h = {
            x: 0,
            width: i,
            height: i,
            alpha: 0
         },
         u = 0; u < o; u++) {
            c = 0;
            var l = new Hilo.Sprite(n({
               id: "c" + u,
               frames: t.asset.cy.getFrame(4)
            },
            h, {
               y: u * r + u * a + c
            })),
            d = new Hilo.Sprite(n({
               id: "r" + u,
               frames: t.asset.cy.getFrame(5)
            },
            h, {
               y: l.y + i + s
            }));
            this.addChild(l),
            this.addChild(d)
         }
         for (var p = this.children,
         u = 0; u < 12; u++) p[u].alpha = 1;
         console.log("鍙充晶鎬诲叡鐨� children锛�", this.children),
         this.staggerArr1 = p.slice(0, 0).reverse(),
         this.staggerArr2 = p.slice(12, p.length).reverse()
      }
   }),
   o = Hilo.Class.create({
      Extends: s,
      constructor: function(e) {
         o.superclass.constructor.call(this, e)
      },
      init: function(e) {
         var t = game,
         i = e.itemWidth,
         s = e.letterSpace,
         a = e.wordSpace,
         r = 2 * i + s,
         o = this.width / r >> 0,
         c = a,
         h = {
            y: 0,
            width: i,
            height: i,
            alpha: 0
         },
         u = new Hilo.Sprite(n({
            id: "rr",
            frames: t.asset.cy.getFrame(1)
         },
         h, {
            x: 0
         }));
         this.addChild(u);
         for (var l = 0; l < o; l++) {
            c = i + s;
            var d = new Hilo.Sprite(n({
               id: "c" + l,
               frames: t.asset.cy.getFrame(0)
            },
            h, {
               x: l * r + l * a + c
            })),
            p = new Hilo.Sprite(n({
               id: "r" + l,
               frames: t.asset.cy.getFrame(1)
            },
            h, {
               x: d.x + i + s
            }));
            this.addChild(d),
            this.addChild(p)
         }
         var f = (this.children[this.getNumChildren() - 1], this.children),
         m = f.length;
         f.slice(0, m - 1).reverse(),
         f[m - 1],
         this.part;
         this.staggerArr = this.children
      }
   }),
   c = Hilo.Class.create({
      Extends: s,
      constructor: function(e) {
         c.superclass.constructor.call(this, e)
      },
      init: function(e) {
         for (var t = game,
         i = e.itemWidth,
         s = e.letterSpace,
         a = e.wordSpace,
         r = 2 * i + s,
         o = this.height / r >> 0,
         c = {
            x: 0,
            width: i,
            height: i,
            alpha: 0
         },
         h = 0; h < o; h++) {
            0 === h ? 0 : a;
            var u = new Hilo.Sprite(n({
               id: "c" + h,
               frames: t.asset.cy.getFrame(2)
            },
            c, {
               y: h * r + h * a
            })),
            l = new Hilo.Sprite(n({
               id: "r" + h,
               frames: t.asset.cy.getFrame(3)
            },
            c, {
               y: u.y + i + s
            }));
            this.addChild(u),
            this.addChild(l)
         }
         this.children[this.getNumChildren() - 1];
         this.staggerArr = this.children.slice()
      }
   });
   t.WallTop = a,
   t.WallRight = r,
   t.WallBottom = o,
   t.WallLeft = c
},
function(e, t, i) {
   "use strict";
   Object.defineProperty(t, "__esModule", {
      value: !0
   }),
   t.FuSprite = t.XingSprite = void 0;
   var n = (i(4), i(28)),
   s = (function(e) {
      e && e.__esModule
   } (n), Hilo.Class.create({
      Extends: Hilo.Container,
      constructor: function(e) {
         s.superclass.constructor.call(this, e),
         this.init(e)
      },
      init: function() {
         throw new Error("瀛愮被瀹炵幇")
      },
      play: function() {
         this.isPlayed || (this.isPlayed = !0, this.removeChild(this.text), this.addChild(this.repeat), this.repeat.play())
      }
   })),
   a = Hilo.Class.create({
      Extends: s,
      constructor: function(e) {
         a.superclass.constructor.call(this, e)
      },
      init: function(e) {
         this.text = new Hilo.Sprite({
            paused: !0,
            loop: !1,
            frames: game.asset.xingfu_text.getFrame(0)
         }),
         this.repeat = new Hilo.Sprite({
            paused: !0,
            loop: !0,
            frames: game.asset.xing_repeat.getSprite("xxx")
         }),
         this.addChild(this.text)
      }
   }),
   r = Hilo.Class.create({
      Extends: s,
      constructor: function(e) {
         r.superclass.constructor.call(this, e)
      },
      init: function(e) {
         this.text = new Hilo.Sprite({
            paused: !0,
            loop: !1,
            frames: game.asset.xingfu_text.getFrame(1)
         }),
         this.repeat = new Hilo.Sprite({
            paused: !0,
            loop: !0,
            frames: game.asset.fu_repeat.getSprite("xxx")
         }),
         this.addChild(this.text)
      }
   });
   t.XingSprite = a,
   t.FuSprite = r
},
function(e, t, i) {
   "use strict";
   Object.defineProperty(t, "__esModule", {
      value: !0
   });
   var n = Object.assign ||
   function(e) {
      for (var t = 1; t < arguments.length; t++) {
         var i = arguments[t];
         for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
      }
      return e
   },
   s = i(54),
   a = function(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   } (s),
   r = {
      y: 0,
      color: "#fff"
   },
   o = Hilo.Class.create({
      Extends: Hilo.Container,
      constructor: function(e) {
         o.superclass.constructor.call(this, e),
         this.width = game.width,
         this.height = 40,
         this.x = 0,
         this.y = 0,
         this.time = 0,
         this.init()
      },
      init: function() {
         this.showFPS(),
         this.showManMsg(),
         this.showAudioInfo()
      },
      showFPS: function() {
         this.fps = new Hilo.Text(n({
            x: 0
         },
         r)),
         this.addChild(this.fps)
      },
      showSceneSet: function() {
         this.sceneSet = new Hilo.Text(n({
            x: 70
         },
         r, {
            maxWidth: 330
         })),
         this.addChild(this.sceneSet)
      },
      showManMsg: function() {
         this.manMsg = new Hilo.Text(n({
            x: 70
         },
         r, {
            maxWidth: 330
         })),
         this.addChild(this.manMsg)
      },
      showSteplength: function() {
         this.steplength = new Hilo.Text(n({
            x: 650
         },
         r)),
         this.addChild(this.steplength)
      },
      showAudioInfo: function() {
         this.audioInfo = new Hilo.Text(n({
            x: 390
         },
         r, {
            maxWidth: 330
         })),
         this.addChild(this.audioInfo),
         this.time = +new Date
      },
      updateFPS: function() {
         this.fps && (this.fps.text = "FPS: " + game.ticker.getMeasuredFPS())
      },
      updateSceneSet: function() {
         if (this.sceneSet) {
            var e = game.sceneSet[0],
            t = game.sceneSet[1];
            e && t && (this.sceneSet.text = "|  鍦烘櫙ID: " + e.id + " - " + t.id + "  |  宸﹀満鏅�.x: " + (0 | e.x) + "   鍙冲満鏅�.x " + (0 | t.x))
         }
      },
      updateManMsg: function() {
         this.manMsg && (this.manMsg.text = "|  man.x: " + (0 | game.man.x) + "  man.y: " + (0 | game.man.y) + "  |  isDead: " + !!game.man.isDead + "  |  man.alpha: " + game.man.alpha)
      },
      updateSteplength: function() {
         this.steplength && (this.steplength.text = "|  姝ラ暱锛�" + game.man.stepLength.toFixed(2))
      },
      updateAudioInfo: function() {
         var e = a.
      default.bgm.isPlaying(),
         t = a.
      default.bgm.isPaused(),
         i = a.
      default.bgm.getVolume();
         this.audioInfo.text = "|  鎾斁涓細" + e + " | 鏄惁鏆傚仠: " + t + "  | 绉掓暟锛�" + ( + new Date - this.time) / 1e3 + "  |  闊抽噺锛�" + i
      },
      onUpdate: function() {
         this.updateFPS(),
         this.updateManMsg(),
         this.updateAudioInfo()
      }
   });
   t.
default = o
},
function(e, t, i) {
   "use strict";
   function n(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   }
   function s(e) {
      e.preventDefault();
      var t = f.
   default.getActionNode(e.target);
      if (t) {
         switch (t.getAttribute("data-action")) {
         case "bottom":
            r.
         default.isInNEMapp() ? window.onClickTopButton && window.onClickTopButton() : (f.
         default.biLogClick("homepage", "downloadclient"), setTimeout(function() {
               c.
            default.downloadApp()
            },
            30));
            break;
         case "primary":
            r.
         default.isInNEMapp() ? window.onClickTopButton && window.onClickTopButton() : (f.
         default.biLogClick("homepage", "replay"), u.
         default.bgm.stop(), setTimeout(function() {
               location.replace(f.
            default.getRandomShareLink())
            },
            30));
            break;
         case "playlist":
            f.
         default.biLogClick("homepage", "playlist"),
            r.
         default.isInNEMapp() ? (u.
         default.bgm.stop(), location.href = "orpheus://playlist/2006469527") : setTimeout(function() {
               location.href = "//music.163.com/m/playlist?id=2006469527"
            },
            30)
         }
      }
   }
   i(221),
   i(231),
   i(218);
   var a = i(26),
   r = n(a),
   o = i(207),
   c = n(o),
   h = i(54),
   u = n(h),
   l = i(219),
   d = n(l),
   p = i(17),
   f = n(p),
   m = i(10),
   g = n(m);
   r.
default.isMobile() ? (function() {
      function e() {
         u.
      default.xintiao.play(),
         u.
      default.bgm.play(),
         u.
      default.rain.load(),
         u.
      default.gudu.load(),
         u.
      default.bgm.isPlaying() && (document.removeEventListener("WeixinJSBridgeReady", e), (0, g.
      default)(window).off("touchstart", e))
      }
      r.
   default.isInNEMapp() && (0, g.
   default)(document.documentElement).addClass("z-inapp"),
      (0, g.
   default)("#loading").removeClass("f-hide"),
      game.init(),
      u.
   default.init(),
      document.addEventListener("WeixinJSBridgeReady", e),
      (0, g.
   default)(window).on("touchstart", e),
      e(),
      new d.
   default({
         title:
         "鐐瑰嚮杩涘叆||||||||||||浣犵殑涓栫晫",
         subTitle: "鎰夸綘鑳戒綋浼氭瘡涓€涓瘝锛屽湪浣犵敓鍛戒腑鐨勬剰涔�",
         text: "鐐瑰嚮杩涘叆||||||||||||浣犵殑涓栫晫",
         link: f.
      default.getRandomShareLink(),
         picUrl: "http://p3.music.126.net/YqZ2rysxNuBlZlvNNyEpPQ==/18570751395282859.jpg"
      }),
      f.
   default.biLogPage("homepage")
   } (),
   function() { (0, g.
   default)("canvas").on("touchstart",
      function(e) {
         e.preventDefault()
      }),
      (0, g.
   default)(".j-nocallout").on("touchstart", s)
   } ()) : (0, g.
default)("#j-web").removeClass("f-hide")
},
function(e, t, i) {
   "use strict";
   function n(e, t) {
      if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
   }
   Object.defineProperty(t, "__esModule", {
      value: !0
   });
   var s = function() {
      function e(e, t) {
         for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
         }
      }
      return function(t, i, n) {
         return i && e(t.prototype, i),
         n && e(t, n),
         t
      }
   } (),
   a = i(17),
   r = function(e) {
      return e && e.__esModule ? e: {
      default:
         e
      }
   } (a),
   o = function() {
      function e(t) {
         n(this, e),
         this.audioNode = document.createElement("audio"),
         "string" == typeof t && (t = {
            src: t
         }),
         this.audioNode.src = t.src,
         this.audioNode.preload = !!t.preload,
         this.audioNode.autoplay = !!t.autoplay,
         this.audioNode.loop = !!t.loop
      }
      return s(e, [{
         key: "play",
         value: function() {
            try {
               this.audioNode.play(),
               r.
            default.stopAppMusic()
            } catch(e) {
               console.log(e)
            }
         }
      },
      {
         key: "load",
         value: function() {
            try {
               this.audioNode.load()
            } catch(e) {
               console.log(e)
            }
         }
      },
      {
         key: "isPlaying",
         value: function() {
            return this.audioNode && this.audioNode.currentTime > 0
         }
      },
      {
         key: "isPaused",
         value: function() {
            return this.audioNode && this.audioNode.paused
         }
      },
      {
         key: "stop",
         value: function() {
            try {
               this.audioNode.pause(),
               this.audioNode.currentTime = 0,
               this.audioNode = null
            } catch(e) {
               console.log(e)
            }
         }
      },
      {
         key: "setVolume",
         value: function(e) {
            this.audioNode.volume = e
         }
      },
      {
         key: "getVolume",
         value: function() {
            return this.audioNode.volume
         }
      },
      {
         key: "setCurrentTime",
         value: function(e) {
            this.audioNode.currentTime = e
         }
      }]),
      e
   } ();
   t.
default = o
},
function(e, t, i) {
   e.exports = {
   default:
      i(290),
      __esModule: !0
   }
},
function(e, t, i) {
   e.exports = {
   default:
      i(291),
      __esModule: !0
   }
},
, ,
function(e, t, i) {
   i(312),
   e.exports = i(66).Object.keys
},
function(e, t, i) {
   i(315),
   i(313),
   i(316),
   i(317),
   e.exports = i(66).Symbol
},
function(e, t, i) {
   i(314),
   i(318),
   e.exports = i(110).f("iterator")
},
function(e, t) {
   e.exports = function(e) {
      if ("function" != typeof e) throw TypeError(e + " is not a function!");
      return e
   }
},
function(e, t) {
   e.exports = function() {}
},
function(e, t, i) {
   var n = i(58),
   s = i(310),
   a = i(309);
   e.exports = function(e) {
      return function(t, i, r) {
         var o, c = n(t),
         h = s(c.length),
         u = a(r, h);
         if (e && i != i) {
            for (; h > u;) if ((o = c[u++]) != o) return ! 0
         } else for (; h > u; u++) if ((e || u in c) && c[u] === i) return e || u || 0;
         return ! e && -1
      }
   }
},
function(e, t, i) {
   var n = i(292);
   e.exports = function(e, t, i) {
      if (n(e), void 0 === t) return e;
      switch (i) {
      case 1:
         return function(i) {
            return e.call(t, i)
         };
      case 2:
         return function(i, n) {
            return e.call(t, i, n)
         };
      case 3:
         return function(i, n, s) {
            return e.call(t, i, n, s)
         }
      }
      return function() {
         return e.apply(t, arguments)
      }
   }
},
function(e, t, i) {
   var n = i(76),
   s = i(152),
   a = i(103);
   e.exports = function(e) {
      var t = n(e),
      i = s.f;
      if (i) for (var r, o = i(e), c = a.f, h = 0; o.length > h;) c.call(e, r = o[h++]) && t.push(r);
      return t
   }
},
function(e, t, i) {
   var n = i(38).document;
   e.exports = n && n.documentElement
},
function(e, t, i) {
   var n = i(146);
   e.exports = Object("z").propertyIsEnumerable(0) ? Object: function(e) {
      return "String" == n(e) ? e.split("") : Object(e)
   }
},
function(e, t, i) {
   var n = i(146);
   e.exports = Array.isArray ||
   function(e) {
      return "Array" == n(e)
   }
},
function(e, t, i) {
   "use strict";
   var n = i(150),
   s = i(77),
   a = i(104),
   r = {};
   i(56)(r, i(59)("iterator"),
   function() {
      return this
   }),
   e.exports = function(e, t, i) {
      e.prototype = n(r, {
         next: s(1, i)
      }),
      a(e, t + " Iterator")
   }
},
function(e, t) {
   e.exports = function(e, t) {
      return {
         value: t,
         done: !!e
      }
   }
},
function(e, t, i) {
   var n = i(78)("meta"),
   s = i(68),
   a = i(42),
   r = i(57).f,
   o = 0,
   c = Object.isExtensible ||
   function() {
      return ! 0
   },
   h = !i(67)(function() {
      return c(Object.preventExtensions({}))
   }),
   u = function(e) {
      r(e, n, {
         value: {
            i: "O" + ++o,
            w: {}
         }
      })
   },
   l = function(e, t) {
      if (!s(e)) return "symbol" == typeof e ? e: ("string" == typeof e ? "S": "P") + e;
      if (!a(e, n)) {
         if (!c(e)) return "F";
         if (!t) return "E";
         u(e)
      }
      return e[n].i
   },
   d = function(e, t) {
      if (!a(e, n)) {
         if (!c(e)) return ! 0;
         if (!t) return ! 1;
         u(e)
      }
      return e[n].w
   },
   p = function(e) {
      return h && f.NEED && c(e) && !a(e, n) && u(e),
      e
   },
   f = e.exports = {
      KEY: n,
      NEED: !1,
      fastKey: l,
      getWeak: d,
      onFreeze: p
   }
},
function(e, t, i) {
   var n = i(57),
   s = i(75),
   a = i(76);
   e.exports = i(55) ? Object.defineProperties: function(e, t) {
      s(e);
      for (var i, r = a(t), o = r.length, c = 0; o > c;) n.f(e, i = r[c++], t[i]);
      return e
   }
},
function(e, t, i) {
   var n = i(103),
   s = i(77),
   a = i(58),
   r = i(108),
   o = i(42),
   c = i(148),
   h = Object.getOwnPropertyDescriptor;
   t.f = i(55) ? h: function(e, t) {
      if (e = a(e), t = r(t, !0), c) try {
         return h(e, t)
      } catch(e) {}
      if (o(e, t)) return s(!n.f.call(e, t), e[t])
   }
},
function(e, t, i) {
   var n = i(58),
   s = i(151).f,
   a = {}.toString,
   r = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
   o = function(e) {
      try {
         return s(e)
      } catch(e) {
         return r.slice()
      }
   };
   e.exports.f = function(e) {
      return r && "[object Window]" == a.call(e) ? o(e) : s(n(e))
   }
},
function(e, t, i) {
   var n = i(42),
   s = i(155),
   a = i(105)("IE_PROTO"),
   r = Object.prototype;
   e.exports = Object.getPrototypeOf ||
   function(e) {
      return e = s(e),
      n(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype: e instanceof Object ? r: null
   }
},
function(e, t, i) {
   var n = i(100),
   s = i(66),
   a = i(67);
   e.exports = function(e, t) {
      var i = (s.Object || {})[e] || Object[e],
      r = {};
      r[e] = t(i),
      n(n.S + n.F * a(function() {
         i(1)
      }), "Object", r)
   }
},
function(e, t, i) {
   var n = i(107),
   s = i(98);
   e.exports = function(e) {
      return function(t, i) {
         var a, r, o = String(s(t)),
         c = n(i),
         h = o.length;
         return c < 0 || c >= h ? e ? "": void 0 : (a = o.charCodeAt(c), a < 55296 || a > 56319 || c + 1 === h || (r = o.charCodeAt(c + 1)) < 56320 || r > 57343 ? e ? o.charAt(c) : a: e ? o.slice(c, c + 2) : r - 56320 + (a - 55296 << 10) + 65536)
      }
   }
},
function(e, t, i) {
   var n = i(107),
   s = Math.max,
   a = Math.min;
   e.exports = function(e, t) {
      return e = n(e),
      e < 0 ? s(e + t, 0) : a(e, t)
   }
},
function(e, t, i) {
   var n = i(107),
   s = Math.min;
   e.exports = function(e) {
      return e > 0 ? s(n(e), 9007199254740991) : 0
   }
},
function(e, t, i) {
   "use strict";
   var n = i(293),
   s = i(301),
   a = i(101),
   r = i(58);
   e.exports = i(149)(Array, "Array",
   function(e, t) {
      this._t = r(e),
      this._i = 0,
      this._k = t
   },
   function() {
      var e = this._t,
      t = this._k,
      i = this._i++;
      return ! e || i >= e.length ? (this._t = void 0, s(1)) : "keys" == t ? s(0, i) : "values" == t ? s(0, e[i]) : s(0, [i, e[i]])
   },
   "values"),
   a.Arguments = a.Array,
   n("keys"),
   n("values"),
   n("entries")
},
function(e, t, i) {
   var n = i(155),
   s = i(76);
   i(307)("keys",
   function() {
      return function(e) {
         return s(n(e))
      }
   })
},
function(e, t) {},
function(e, t, i) {
   "use strict";
   var n = i(308)(!0);
   i(149)(String, "String",
   function(e) {
      this._t = String(e),
      this._i = 0
   },
   function() {
      var e, t = this._t,
      i = this._i;
      return i >= t.length ? {
         value: void 0,
         done: !0
      }: (e = n(t, i), this._i += e.length, {
         value: e,
         done: !1
      })
   })
},
function(e, t, i) {
   "use strict";
   var n = i(38),
   s = i(42),
   a = i(55),
   r = i(100),
   o = i(154),
   c = i(302).KEY,
   h = i(67),
   u = i(106),
   l = i(104),
   d = i(78),
   p = i(59),
   f = i(110),
   m = i(109),
   g = i(296),
   v = i(299),
   y = i(75),
   x = i(68),
   w = i(58),
   _ = i(108),
   b = i(77),
   k = i(150),
   S = i(305),
   C = i(304),
   T = i(57),
   M = i(76),
   E = C.f,
   H = T.f,
   R = S.f,
   O = n.Symbol,
   P = n.JSON,
   A = P && P.stringify,
   F = p("_hidden"),
   j = p("toPrimitive"),
   D = {}.propertyIsEnumerable,
   B = u("symbol-registry"),
   I = u("symbols"),
   L = u("op-symbols"),
   z = Object.prototype,
   q = "function" == typeof O,
   N = n.QObject,
   W = !N || !N.prototype || !N.prototype.findChild,
   U = a && h(function() {
      return 7 != k(H({},
      "a", {
         get: function() {
            return H(this, "a", {
               value: 7
            }).a
         }
      })).a
   }) ?
   function(e, t, i) {
      var n = E(z, t);
      n && delete z[t],
      H(e, t, i),
      n && e !== z && H(z, t, n)
   }: H,
   X = function(e) {
      var t = I[e] = k(O.prototype);
      return t._k = e,
      t
   },
   V = q && "symbol" == typeof O.iterator ?
   function(e) {
      return "symbol" == typeof e
   }: function(e) {
      return e instanceof O
   },
   Y = function(e, t, i) {
      return e === z && Y(L, t, i),
      y(e),
      t = _(t, !0),
      y(i),
      s(I, t) ? (i.enumerable ? (s(e, F) && e[F][t] && (e[F][t] = !1), i = k(i, {
         enumerable: b(0, !1)
      })) : (s(e, F) || H(e, F, b(1, {})), e[F][t] = !0), U(e, t, i)) : H(e, t, i)
   },
   G = function(e, t) {
      y(e);
      for (var i, n = g(t = w(t)), s = 0, a = n.length; a > s;) Y(e, i = n[s++], t[i]);
      return e
   },
   K = function(e, t) {
      return void 0 === t ? k(e) : G(k(e), t)
   },
   Q = function(e) {
      var t = D.call(this, e = _(e, !0));
      return ! (this === z && s(I, e) && !s(L, e)) && (!(t || !s(this, e) || !s(I, e) || s(this, F) && this[F][e]) || t)
   },
   J = function(e, t) {
      if (e = w(e), t = _(t, !0), e !== z || !s(I, t) || s(L, t)) {
         var i = E(e, t);
         return ! i || !s(I, t) || s(e, F) && e[F][t] || (i.enumerable = !0),
         i
      }
   },
   $ = function(e) {
      for (var t, i = R(w(e)), n = [], a = 0; i.length > a;) s(I, t = i[a++]) || t == F || t == c || n.push(t);
      return n
   },
   Z = function(e) {
      for (var t, i = e === z,
      n = R(i ? L: w(e)), a = [], r = 0; n.length > r;) ! s(I, t = n[r++]) || i && !s(z, t) || a.push(I[t]);
      return a
   };
   q || (O = function() {
      if (this instanceof O) throw TypeError("Symbol is not a constructor!");
      var e = d(arguments.length > 0 ? arguments[0] : void 0),
      t = function(i) {
         this === z && t.call(L, i),
         s(this, F) && s(this[F], e) && (this[F][e] = !1),
         U(this, e, b(1, i))
      };
      return a && W && U(z, e, {
         configurable: !0,
         set: t
      }),
      X(e)
   },
   o(O.prototype, "toString",
   function() {
      return this._k
   }), C.f = J, T.f = Y, i(151).f = S.f = $, i(103).f = Q, i(152).f = Z, a && !i(102) && o(z, "propertyIsEnumerable", Q, !0), f.f = function(e) {
      return X(p(e))
   }),
   r(r.G + r.W + r.F * !q, {
      Symbol: O
   });
   for (var ee = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), te = 0; ee.length > te;) p(ee[te++]);
   for (var ie = M(p.store), ne = 0; ie.length > ne;) m(ie[ne++]);
   r(r.S + r.F * !q, "Symbol", {
      for: function(e) {
         return s(B, e += "") ? B[e] : B[e] = O(e)
      },
      keyFor: function(e) {
         if (!V(e)) throw TypeError(e + " is not a symbol!");
         for (var t in B) if (B[t] === e) return t
      },
      useSetter: function() {
         W = !0
      },
      useSimple: function() {
         W = !1
      }
   }),
   r(r.S + r.F * !q, "Object", {
      create: K,
      defineProperty: Y,
      defineProperties: G,
      getOwnPropertyDescriptor: J,
      getOwnPropertyNames: $,
      getOwnPropertySymbols: Z
   }),
   P && r(r.S + r.F * (!q || h(function() {
      var e = O();
      return "[null]" != A([e]) || "{}" != A({
         a: e
      }) || "{}" != A(Object(e))
   })), "JSON", {
      stringify: function(e) {
         for (var t, i, n = [e], s = 1; arguments.length > s;) n.push(arguments[s++]);
         if (i = t = n[1], (x(t) || void 0 !== e) && !V(e)) return v(t) || (t = function(e, t) {
            if ("function" == typeof i && (t = i.call(this, e, t)), !V(t)) return t
         }),
         n[1] = t,
         A.apply(P, n)
      }
   }),
   O.prototype[j] || i(56)(O.prototype, j, O.prototype.valueOf),
   l(O, "Symbol"),
   l(Math, "Math", !0),
   l(n.JSON, "JSON", !0)
},
function(e, t, i) {
   i(109)("asyncIterator")
},
function(e, t, i) {
   i(109)("observable")
},
function(e, t, i) {
   i(311);
   for (var n = i(38), s = i(56), a = i(101), r = i(59)("toStringTag"), o = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < o.length; c++) {
      var h = o[c],
      u = n[h],
      l = u && u.prototype;
      l && !l[r] && s(l, r, h),
      a[h] = a.Array
   }
},
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
function(e, t, i) {
   e.exports = i.p + "client/audio/happiness/01-bgm.mp3?4b25efcc7af444e9b960665809614156"
},
function(e, t, i) {
   e.exports = i.p + "client/audio/happiness/02-rain.mp3?6a09c243d4baf7b4ea41a20f50ca5e26"
},
function(e, t, i) {
   e.exports = i.p + "client/audio/happiness/03-gudu.mp3?708a82d9047f09bda297250c6379838f"
},
function(e, t, i) {
   e.exports = i.p + "client/audio/happiness/05-xintiao.mp3?11e0561eb00c57930cd3c891d94152ec"
},
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/ai-repeat-0.png?f614aeb9b1a24bbf45deb893fec16a2c"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/ai-repeat-1.png?2786ec41a2ad440690f04fb3a9e09b75"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/ai-static.png?90162a310e552e73501da5f05421db8c"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/block-1.png?050aa1562d717dbb0e2cad7c98788b96"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/chengzhang-after-0.png?516af75fa1607c3c5a94384d24238cea"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/chengzhang-after-1.png?ba7bf696b2d4aa1742628604cabc2e01"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/chengzhang-after-2.png?4fb5a260b07570a2d40496b2e3be8f20"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/chengzhang-after-3.png?e04170c0344089a5d2f680be81562485"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/chengzhang-before-0.png?6eb09d18811cdcaf79a83701d34da157"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/chengzhang-before-1.png?38b70f144aa856bfa199998006e13d20"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/chengzhang-before-2.png?c7f1b8c1f0c8856d00ed2d7a554dbf2e"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/chengzhang-before-3.png?f91d5fe0d47aea4343c26b367a255352"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/chengzhang-text-0.png?dfb242be44fe87550fda9bf76e0a690d"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/chengzhang-text-1.png?ed6f101e343351dfb6528833eff34fb7"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/chuangyi.png?660ef4492fc989497b34f3539d6b22ca"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/daji-0.png?dd633cb10e37af46f363e9933c466284"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/daji-1.png?9f6b7a70bdf48b7259231194e938af3f"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/daji-static.png?a4d2293e93b95c3aa140c98b12b533bc"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/fu-repeat.png?9f0d8987d133e5d5ce5a1e4db419cafb"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/game-bg.jpg?8091f44363d916c1952dbddc75f6dc11"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/gudu-bihua.png?d106888f5909ed36b29aebd2178e622d"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/gudu-repeat.png?d9da1776ac4ae959293ce96cbe401d04"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/gudu-static.png?49455cb741a646cd0e217f4de9d9f52d"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/gudu-text-0.png?182392423c857a4f2acdf82687165e73"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/gudu-text-1.png?8eb4b1d345cf42b3b3886e5f13d6ce6a"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/gudu-text-2.png?9e8b1cf72cb2eee30826259e6b6f2bab"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/guide-blink.png?47ae9c7ef63e1ef9ba117240425c966e"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/guide-jump-static.png?fc9cbcc6dd9be8463040389c4a9d834b"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/guide-jump.png?21d45aba254aaf455e0ee16e6100cedc"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/guide-long.png?17cbfdeaf5650cbb85d7c152a83178f8"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/guide-move-static.png?26ad21bb9d6358fbd279fa66f452ba39"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/guide-new.png?2d85965860c75aa8bd45754fba8ca631"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/guide-right.png?5c4b9d88d14dcc9ad7760b30f33d47fa"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/guide-s7.png?14b493bd39012231f01d617e0e40038e"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/guide-top.png?aa1501473ae1c6aa45b53f24f55cfebb"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/guide.png?2b75d6e40d8d428296f6c3fc32c7f911"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/intro.png?81e55308c24dca9ea0d956495db693f4"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/jianchi.png?37900572df42a2f118193db3487c1b2a"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/man-colors.png?c5b339d122f76fba960129864944bdfe"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/man.png?734def9012a1da6c9af2b075ba42aa88"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/mengxiang-end-repeat.png?3a58fb7d8ace2ad19be8119dfcbab5c1"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/mengxiang-end-trans.png?106ee9580429235a30a289078041dd46"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/mengxiang-fly-1.png?fa8fe4fb9ee7531f2192de31447be0c7"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/mengxiang-fly-2.png?f41891e7e5c952aaed0ebab110dad053"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/mengxiang-fly-3.png?8cea723ee1dde82339e9347ed518599f"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/mengxiang-text.png?d05a6d0fec3b36cfade4b724d5dbdc88"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/ni-rotation.png?fc6460c1ba2482cd74b4529b46c11938"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/nuli-v2.png?b489f88eaa51af4519e439c00153aad9"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/nuli.png?53f0c966abc670f3252ef4e9c44d5749"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/peiban-repeat-0.png?87855a0e708582141f61365b34e58d4f"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/peiban-repeat-1.png?10a45ce086a2ddd8b03c05c078d04ece"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/peiban-star.png?c5c28dc72c49cc4d9460c3d66afd46a2"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/peiban-text.png?d755e247740fda11ac3a739285704fae"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/peiban-trans-0.png?4a9955ee8c965265b85515f021e475a1"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/peiban-trans-1.png?74ac68b3fcec7d1853b8eed92225a931"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/sikao-repeat.png?cec72a9579e5bf484c3d92896da192fc"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/sikao-trans.png?61f5c9b5015f8c7a7c0a0c2a3264c0b9"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/tongku.png?3c47ad9682cc1cd3a6ccbcaaff7a32b0"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/tuoyan.png?a4eaaedea2509d234a3e3b58459a69c9"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/water-bg.jpg?f90cb25496f24353dccb7bc9f0e0f649"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/water-text.png?e55c90e1cc71591733eae8164b89ea5a"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/xing-repeat.png?c00e17dfd884d479b0cdb670dbcf65c5"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/xingfu-text.png?b2661f2c4a6d67e47bca0f8a6167b8ce"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/xunzhao.png?e473d0d621c66b50e3bc73665a996ddc"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/xxx-1.png?a5df11ce44a74e5a4c6a4f9ebae79744"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/xxx-2.png?3e51e29807b6741baded759c03a9f9b6"
},
function(e, t, i) {
   e.exports = i.p + "client/images/happiness/xxx-3.png?3cbef1439b5c1d031cee5c3b940b0268"
},
, , , ,
function(e, t) {
   e.exports = "#ifdef GL_ES\nprecision mediump float;\n#define GLSLIFY 1\n#define GLSLIFY 1\n#endif\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_1_0(vec3 x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289_1_0(vec4 x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_1_1(vec4 x) {\n        return mod289_1_0(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_1_2(vec4 r)\n{\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise_1_3(vec3 v)\n    {\n    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n    const vec4  D_1_4 = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n    vec3 i  = floor(v + dot(v, C.yyy) );\n    vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n    vec3 g_1_5 = step(x0.yzx, x0.xyz);\n    vec3 l = 1.0 - g_1_5;\n    vec3 i1 = min( g_1_5.xyz, l.zxy );\n    vec3 i2 = max( g_1_5.xyz, l.zxy );\n\n    //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n    //   x1 = x0 - i1  + 1.0 * C.xxx;\n    //   x2 = x0 - i2  + 2.0 * C.xxx;\n    //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n    vec3 x1 = x0 - i1 + C.xxx;\n    vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n    vec3 x3 = x0 - D_1_4.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n    i = mod289_1_0(i);\n    vec4 p = permute_1_1( permute_1_1( permute_1_1(\n                i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n            + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n    float n_ = 0.142857142857; // 1.0/7.0\n    vec3  ns = n_ * D_1_4.wyz - D_1_4.xzx;\n\n    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n    vec4 x_ = floor(j * ns.z);\n    vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n    vec4 x = x_ *ns.x + ns.yyyy;\n    vec4 y = y_ *ns.x + ns.yyyy;\n    vec4 h = 1.0 - abs(x) - abs(y);\n\n    vec4 b0 = vec4( x.xy, y.xy );\n    vec4 b1 = vec4( x.zw, y.zw );\n\n    //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n    //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n    vec4 s0 = floor(b0)*2.0 + 1.0;\n    vec4 s1 = floor(b1)*2.0 + 1.0;\n    vec4 sh = -step(h, vec4(0.0));\n\n    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n    vec4 a1_1_6 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n    vec3 p0_1_7 = vec3(a0.xy,h.x);\n    vec3 p1 = vec3(a0.zw,h.y);\n    vec3 p2 = vec3(a1_1_6.xy,h.z);\n    vec3 p3 = vec3(a1_1_6.zw,h.w);\n\n//Normalise gradients\n    vec4 norm = taylorInvSqrt_1_2(vec4(dot(p0_1_7,p0_1_7), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n    p0_1_7 *= norm.x;\n    p1 *= norm.y;\n    p2 *= norm.z;\n    p3 *= norm.w;\n\n// Mix final noise value\n    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n    m = m * m;\n    return 42.0 * dot( m*m, vec4( dot(p0_1_7,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n    }\n\n\n\n\nuniform sampler2D u_noise;\nuniform sampler2D tDiffuse;\nuniform vec2 u_mouse;\nuniform float u_time;\nuniform float u_aspect;\nuniform float u_amp;\n\nuniform vec2 u_random;\n\nvarying vec2 v_uv;\n\nconst float PI2 = 6.2831853072;\n\nconst vec2 noiseSize = vec2(256.);\n\nvoid main() {\n\n    vec2 pos = v_uv * 2. - 1.0;\n    pos.y *= u_aspect;\n\n    float perlin = snoise_1_3(vec3(pos, u_time));\n\n    vec2 mousePos = u_mouse * 2. - 1.0;\n    mousePos.y *= u_aspect;\n\n    float dist = length(mousePos - pos);\n    float radius = mix(0.4, 1.2, u_amp) + perlin * .2;\n    float intensity = pow(1. - smoothstep(.0, radius, dist), 3.);\n\n    float angle = (perlin + u_time) * PI2;\n    float c = cos(angle);\n    float s = sin(angle);\n\n    vec2 displace = vec2(c, s) * .12 * u_amp;\n\n    vec2 bulge = (mousePos - pos) * u_amp;\n\n    vec2 st = v_uv + intensity * (displace + bulge);\n\n\n    // vec3 color = texture2D(tDiffuse, st).rgb;\n    vec4 color = texture2D(tDiffuse, st).rgba;\n\n    float add = c * intensity * u_amp;\n\n    add += (1. - smoothstep(0., .1, abs(dist - radius * u_amp))) * .1;\n\n    color += add * .4;\n\n    // vec2 noiseUv = gl_FragCoord.xy / noiseSize + u_random;\n    // float noise = texture2D(u_noise, noiseUv).r;\n\n    // color = vec3(noise);//step(noise, add) * .1;\n\n    \n\n    // gl_FragColor = vec4(color, 1.0);\n    gl_FragColor = color;\n}"
},
function(e, t) {
   e.exports = "#define GLSLIFY 1\nvarying vec2 v_uv;\n        \nvoid main() {\n\n    v_uv = uv;\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}"
},
function(e, t) {
   e.exports = "precision highp float;\nprecision highp int;\n#define GLSLIFY 1\n\nuniform vec2 force;\nuniform vec2 center;\nuniform vec2 scale;\nuniform vec2 px;\nvarying vec2 uv;\n\nvoid main(){\n    float distance_ = 1.0-min(length((uv-center)/scale), 1.0);\n    // float distance_ = 1.0-min(length((uv-center)/scale), 1.0);\n    // gl_FragColor = vec4(force*distance_, 0, 1);\n    gl_FragColor = vec4(force*distance_, 0, 1);\n}"
},
function(e, t) {
   e.exports = "precision highp float;\nprecision highp int;\n#define GLSLIFY 1\nuniform sampler2D source;\nuniform sampler2D velocity;\nuniform float dt;\nuniform float scale;\nuniform vec2 px1;\nvarying vec2 uv;\n\nvoid main(){\n    gl_FragColor = texture2D(source, uv-texture2D(velocity, uv).xy*dt*px1)*scale;\n        // gl_FragColor = texture2D(velocity, uv);\n}"
},
function(e, t) {
   e.exports = "precision highp float;\nprecision highp int;\n#define GLSLIFY 1\n\nattribute vec2 uv;\n\nattribute vec3 position;\nattribute vec3 normal;\n\nuniform float aspectRatio;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\n\nuniform float timer;\n\nvarying highp vec2 vUv;\n\nvarying vec2 vN;\n\nuniform sampler2D pre;\nuniform sampler2D velocity;\n\n\nfloat scale = 1.0;\n\nvoid main(){\n\n    vUv = uv;\n\n    // vec4 p = vec4( vec3(position.x + 1.7, position.y + 4.0, position.z), 1. );\n    vec4 p = vec4( vec3(position.x , position.y , position.z + 0.5), 1. );\n\n        vec3 e = normalize( vec3( modelViewMatrix * p ) );\n        vec3 n = normalize( normalMatrix * normal.xyz / 2.0 );\n\n        vec3 r = (reflect( e, n ));\n        float m = 2. * sqrt(\n            pow( r.x, 2. ) +\n            pow( r.y, 2. ) +\n            pow( r.z + 1., 2. )\n        );\n        vN = r.xy / m + .5;\n\n\n    // gl_Position = projectionMatrix * modelViewMatrix * vec4(position.xy, position.z, 1.0 );\n    gl_Position = vec4(position * 2.0, 1.0);\n}"
},
function(e, t) {
   e.exports = "precision highp float;\nprecision highp int;\n#define GLSLIFY 1\nattribute vec3 position;\nattribute vec3 offset;\nvarying vec2 uv;\n\nvoid main(){\n    uv = vec2(0.5)+(position.xy)*0.5;\n\n    gl_Position = vec4(position, 1.0);\n}"
},
function(e, t) {
   e.exports = "precision highp float;\n#define GLSLIFY 1\nuniform sampler2D pre;\nuniform sampler2D div;\nuniform float alpha;\nuniform float beta;\nuniform vec2 px;\nvarying vec2 uv;\nvoid main ()\n{\n    vec2 tmpvar_1;\n    tmpvar_1.y = 0.0;\n    tmpvar_1.x = px.x;\n    vec2 tmpvar_2;\n    tmpvar_2.y = 0.0;\n    tmpvar_2.x = px.x;\n    vec2 tmpvar_3;\n    tmpvar_3.x = 0.0;\n    tmpvar_3.y = px.y;\n    vec2 tmpvar_4;\n    tmpvar_4.x = 0.0;\n    tmpvar_4.y = px.y;\n    lowp vec4 tmpvar_5;\n    tmpvar_5 = vec4((((\n    (texture2D (pre, (uv - tmpvar_1)).x + texture2D (pre, (uv + tmpvar_2)).x)\n    +\n    (texture2D (pre, (uv - tmpvar_3)).x + texture2D (pre, (uv + tmpvar_4)).x)\n    ) + (alpha * texture2D (div, uv).x)) * beta));\n    gl_FragColor = tmpvar_5;\n}"
},
function(e, t) {
   e.exports = "precision highp float;\n#define GLSLIFY 1\nattribute vec3 position;\nuniform vec2 center;\nuniform vec2 px;\nvarying highp vec2 uv;\n\nvoid main ()\n{\n    highp vec2 tmpvar_1;\n    vec2 tmpvar_2;\n    tmpvar_2 = (px * 2.0);\n    tmpvar_1 = clamp ((position.xy + center), (-1.0 + tmpvar_2), (1.0 - tmpvar_2));\n    uv = tmpvar_1;\n    highp vec4 tmpvar_3;\n    tmpvar_3.zw = vec2(0.0, 1.0);\n    tmpvar_3.xy = tmpvar_1;\n    gl_Position = tmpvar_3;\n}"
},
function(e, t) {
   e.exports = "precision highp float;\n#define GLSLIFY 1\nuniform sampler2D velocity;\nuniform vec2 px;\nvarying vec2 uv;\nvoid main ()\n{\n    vec2 tmpvar_1;\n    tmpvar_1.y = 0.0;\n    tmpvar_1.x = px.x;\n    vec2 tmpvar_2;\n    tmpvar_2.y = 0.0;\n    tmpvar_2.x = px.x;\n    vec2 tmpvar_3;\n    tmpvar_3.x = 0.0;\n    tmpvar_3.y = px.y;\n    vec2 tmpvar_4;\n    tmpvar_4.x = 0.0;\n    tmpvar_4.y = px.y;\n    lowp vec4 tmpvar_5;\n    tmpvar_5 = vec4((((\n        (texture2D (velocity, (uv + tmpvar_2)).x - texture2D (velocity, (uv - tmpvar_1)).x)\n    + texture2D (velocity,\n        (uv + tmpvar_4)\n    ).y) - texture2D (velocity, (uv - tmpvar_3)).y) * 0.5));\n    gl_FragColor = tmpvar_5;\n}"
},
function(e, t) {
   e.exports = "precision highp float;\nprecision highp int;\n#define GLSLIFY 1\n\n\nvarying highp vec2 vUv;\n\n// uniform sampler2D displacement;\nuniform sampler2D diffuse;\nuniform sampler2D pre;\nuniform sampler2D velocity;\nuniform sampler2D logo;\nuniform sampler2D test;\nuniform float timer;\n// uniform sampler2D colormap;\n\n\nuniform float alphatransition;\n\nvarying vec3 vEye;\nvarying vec2 basicUv;\n\nvarying vec2 vN;\n\nuniform float aspectRatio;\n\nfloat transitionratio = 15.0;\n\nfloat when_eq(float x, float y) {\n    return 1.0 - abs(sign(x - y));\n}\n\nfloat when_gt(float x, float y) {\n    return max(sign(x - y), 0.0);\n}\n\n\n//\n// Description : Array and textureless GLSL 2D simplex noise function.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_2d(vec3 x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec2 mod289_2d(vec2 x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute(vec3 x) {\n    return mod289_2d(((x*34.0)+1.0)*x);\n}\n\nfloat snoise_2d(vec2 v)\n    {\n    const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                        0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                        -0.577350269189626,  // -1.0 + 2.0 * C.x\n                        0.024390243902439); // 1.0 / 41.0\n// First corner\n    vec2 i  = floor(v + dot(v, C.yy) );\n    vec2 x0 = v -   i + dot(i, C.xx);\n\n// Other corners\n    vec2 i1;\n    //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\n    //i1.y = 1.0 - i1.x;\n    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n    // x0 = x0 - 0.0 + 0.0 * C.xx ;\n    // x1 = x0 - i1 + 1.0 * C.xx ;\n    // x2 = x0 - 1.0 + 2.0 * C.xx ;\n    vec4 x12 = x0.xyxy + C.xxzz;\n    x12.xy -= i1;\n\n// Permutations\n    i = mod289_2d(i); // Avoid truncation effects in permutation\n    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n    + i.x + vec3(0.0, i1.x, 1.0 ));\n\n    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n    m = m*m ;\n    m = m*m ;\n\n// Gradients: 41 points uniformly over a line, mapped onto a diamond.\n// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\n\n    vec3 x = 2.0 * fract(p * C.www) - 1.0;\n    vec3 h = abs(x) - 0.5;\n    vec3 ox = floor(x + 0.5);\n    vec3 a0 = x - ox;\n\n// Normalise gradients implicitly by scaling m\n// Approximation of: m *= inversesqrt( a0*a0 + h*h );\n    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n\n// Compute final noise value at P\n    vec3 g;\n    g.x  = a0.x  * x0.x  + h.x  * x0.y;\n    g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n    return 130.0 * dot(m, g);\n}\n\n\nvoid main(){\n\n    highp vec2 vUv2 = vUv;\n\n    vUv2.x = vUv.x;\n    vUv2.y = vUv.y * (1.0 / aspectRatio);\n    vUv2.y += .5 * ( 1. - 1.0 / aspectRatio );\n\n    if( 1.0 > aspectRatio ) {\n        vUv2.x = vUv.x * aspectRatio / 1.0;\n        vUv2.x += .5 * ( 1. - aspectRatio / 1.0 );\n        vUv2.y = vUv.y;\n\n    }\n\n    vec4 tpre = texture2D(pre, vUv);\n    vec4 tVelocity = texture2D(velocity, vUv);\n\n    vec2 displace = 1.0 - vN + vec2(tpre.x, tVelocity.y) * 1.75;\n\n    // vec3 base = texture2D( diffuse, random).rgb;\n    vec3 base = texture2D( diffuse, displace).rgb;\n\n    float reflectNoise = (snoise_2d(vUv * 10.0 + timer / 10.0)) * 0.004;\n\n\n\n    vec4 logod = texture2D(\n        logo,\n        vUv2 + (tpre.x, tVelocity.y) + (reflectNoise)\n    );\n\n    // vec4 logo22 = texture2D( logo,  vUv2 + (tpre.x * 1.2, tVelocity.y * 1.2));\n\n    // logo22 *= vec4(0.1, 0.1, 0.1, alphatransition);\n\n    // logod.a = logod.a * alphatransition;\n\n    // vec3 final = mix(\n        // base.rgb * (1.0 - logod.a) + logod.rgb * logod.a, logod.rgb, when_gt(logod.a, 0.5));\n    // vec3 final = base.rgb * (1.0 - logod.a) + logod.rgb * logod.a;\n\n    // vec3 final;\n    // if(logod.a > 0.5) {\n\n    // \tfinal = logod.rgb;\n\n    // }\n\n    // else {\n\n    // \tfinal = base.rgb;\n    // }\n\n    vec3 final = base.rgb * (1.0 - logod.a) + logod.rgb * logod.a;\n\n    // vec3 final2 = mix(\n        // base.rgb * (1.0 - logo22.a) + logo22.rgb * logo22.a, logo22.rgb, when_gt(logo22.a, 0.5));\n    // vec3 final2 = base.rgb * (1.0 - logo22.a) + logo22.rgb * logo22.a;\n\n    // // final2.rgb = base.rgb * 0.5 + (final2.rgb * 0.3) * 0.5;\n\n    // final = ((final * logod.a + final.rgb * (1.0 - logod.a)) + final2 * logo22.a);\n    // final = mix(final, final2, when_gt(logo22.a, logod.a));\n\n    gl_FragColor = vec4(\tfinal, 1.0);\n    // gl_FragColor = vec4(tVelocity.xxx, 1.0);\n}"
},
function(e, t) {
   e.exports = "#define GLSLIFY 1\nuniform sampler2D textureDiffuse1;\nuniform sampler2D textureDiffuse2;\nuniform vec2 resolution;\nuniform float transition;\nuniform float time;\n// uniform float threshold;\nvarying vec2 vUv;\n\nconst float amplitude = 15.0;\n\nfloat when_lt(float x, float y) {\n    return max(sign(y - x), 0.0);\n}\n\n\nvoid main() {\n\n    highp vec2 dir_1;\n    highp float tmpvar_2;\n    tmpvar_2 = (20.0 * transition);\n    highp vec2 tmpvar_3;\n    tmpvar_3 = (vUv - vec2(0.5, 0.5));\n    dir_1.y = tmpvar_3.y;\n    dir_1.x = (tmpvar_3.x * (resolution.x / resolution.y));\n    dir_1.y = (tmpvar_3.y + (sin(\n    ((8.0 * dir_1.x) + (2.0 * time))\n    ) * 0.05));\n    dir_1.x = (dir_1.x + (cos(\n    ((3.0 * dir_1.y) + time)\n    ) * 0.08));\n    highp float tmpvar_4;\n    tmpvar_4 = sqrt(dot (dir_1, dir_1));\n    highp vec2 tmpvar_5;\n    highp float tmpvar_6;\n    tmpvar_6 = (1.0 - transition);\n    tmpvar_5 = (((dir_1 / 2.0) * sin(\n    ((tmpvar_4 * 15.0) - (transition * tmpvar_2))\n    )) * tmpvar_6);\n    highp vec2 tmpvar_7;\n    highp float tmpvar_8;\n    tmpvar_8 = sin(time);\n    tmpvar_7.x = ((tmpvar_8 / 2.0) * tmpvar_6);\n    tmpvar_7.y = ((sin(\n    (time + 12.0)\n    ) / 1.3) * tmpvar_6);\n    lowp vec3 tmpvar_9;\n    tmpvar_9 = ((texture2D (textureDiffuse1, (vec2(mod (\n    (vUv + (tmpvar_5 + tmpvar_7))\n    , 1.0)))).xyz * transition) + (texture2D (textureDiffuse2, vUv).xyz * tmpvar_6));\n    highp float tmpvar_10;\n    tmpvar_10 = clamp (((\n    (transition + tmpvar_5.y)\n    - tmpvar_4) / 0.3), 0.0, 1.0);\n    highp float tmpvar_11;\n    tmpvar_11 = min (max ((tmpvar_10 *\n    (tmpvar_10 * (3.0 - (2.0 * tmpvar_10)))\n    ), 0.0), 1.0);\n    lowp vec3 tmpvar_12;\n    tmpvar_12 = mix (((tmpvar_11 * texture2D (textureDiffuse1,\n    (vUv + tmpvar_5)\n    ).xyz) + (\n    (1.0 - tmpvar_11)\n    * tmpvar_9)), tmpvar_9, max (sign(\n    ((tmpvar_4 + ((\n        (dir_1 * sin(((30.0 *\n        (tmpvar_4 / 2.0)\n        ) - (transition * tmpvar_2))))\n    * transition) * tmpvar_8).x) - (transition + tmpvar_5.y))\n    ), 0.0));\n    gl_FragColor.xyz = tmpvar_12;\n}"
},
function(e, t) {
   e.exports = "precision highp float;\n#define GLSLIFY 1\n        \nattribute vec3 position;\nuniform vec2 px;\nvarying vec2 uv;\n\nvoid main(){\n    uv = vec2(0.5)+(position.xy)*0.5;\n    gl_Position = vec4(position, 1.0);\n}"
},
function(e, t) {
   e.exports = "precision highp float;\n#define GLSLIFY 1\nuniform sampler2D pre;\nuniform sampler2D velocity;\nuniform float scale;\nuniform vec2 px;\nvarying vec2 uv;\nvoid main ()\n{\n    vec2 tmpvar_1;\n    tmpvar_1.y = 0.0;\n    tmpvar_1.x = px.x;\n    vec2 tmpvar_2;\n    tmpvar_2.y = 0.0;\n    tmpvar_2.x = px.x;\n    vec2 tmpvar_3;\n    tmpvar_3.x = 0.0;\n    tmpvar_3.y = px.y;\n    vec2 tmpvar_4;\n    tmpvar_4.x = 0.0;\n    tmpvar_4.y = px.y;\n    lowp vec2 tmpvar_5;\n    tmpvar_5.x = texture2D (pre, (uv + tmpvar_2)).x;\n    tmpvar_5.y = texture2D (pre, (uv + tmpvar_4)).x;\n    lowp vec2 tmpvar_6;\n    tmpvar_6.x = texture2D (pre, (uv - tmpvar_1)).x;\n    tmpvar_6.y = texture2D (pre, (uv - tmpvar_3)).x;\n    lowp vec4 tmpvar_7;\n    tmpvar_7.zw = vec2(1.0, 1.0);\n    tmpvar_7.xy = ((texture2D (velocity, uv).xy - (\n        (tmpvar_5 - tmpvar_6)\n    * 0.5)) * scale);\n    gl_FragColor = tmpvar_7;\n}"
},
function(e, t) {
   e.exports = "#define GLSLIFY 1\nvarying vec2 vUv;\n    \nvoid main() {\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"
},
, ,
function(module, exports, __webpack_require__) {
   var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
   /*!
  * Reqwest! A general purpose XHR connection manager
  * license MIT (c) Dustin Diaz 2015
  * https://github.com/ded/reqwest
  */
   !
   function(e, t, i) {
      void 0 !== module && module.exports ? module.exports = i() : (__WEBPACK_AMD_DEFINE_FACTORY__ = i, void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
   } (0, 0,
   function() {
      function succeed(e) {
         var t = protocolRe.exec(e.url);
         return t = t && t[1] || context.location.protocol,
         httpsRe.test(t) ? twoHundo.test(e.request.status) : !!e.request.response
      }
      function handleReadyState(e, t, i) {
         return function() {
            return e._aborted ? i(e.request) : e._timedOut ? i(e.request, "Request is aborted: timeout") : void(e.request && 4 == e.request[readyState] && (e.request.onreadystatechange = noop, succeed(e) ? t(e.request) : i(e.request)))
         }
      }
      function setHeaders(e, t) {
         var i, n = t.headers || {};
         n.Accept = n.Accept || defaultHeaders.accept[t.type] || defaultHeaders.accept["*"];
         var s = "undefined" != typeof FormData && t.data instanceof FormData;
         t.crossOrigin || n[requestedWith] || (n[requestedWith] = defaultHeaders.requestedWith),
         n[contentType] || s || (n[contentType] = t.contentType || defaultHeaders.contentType);
         for (i in n) n.hasOwnProperty(i) && "setRequestHeader" in e && e.setRequestHeader(i, n[i])
      }
      function setCredentials(e, t) {
         void 0 !== t.withCredentials && void 0 !== e.withCredentials && (e.withCredentials = !!t.withCredentials)
      }
      function generalCallback(e) {
         lastValue = e
      }
      function urlappend(e, t) {
         return e + (/\?/.test(e) ? "&": "?") + t
      }
      function handleJsonp(e, t, i, n) {
         var s = uniqid++,
         a = e.jsonpCallback || "callback",
         r = e.jsonpCallbackName || reqwest.getcallbackPrefix(s),
         o = new RegExp("((^|\\?|&)" + a + ")=([^&]+)"),
         c = n.match(o),
         h = doc.createElement("script"),
         u = 0,
         l = -1 !== navigator.userAgent.indexOf("MSIE 10.0");
         return c ? "?" === c[3] ? n = n.replace(o, "$1=" + r) : r = c[3] : n = urlappend(n, a + "=" + r),
         context[r] = generalCallback,
         h.type = "text/javascript",
         h.src = n,
         h.async = !0,
         void 0 === h.onreadystatechange || l || (h.htmlFor = h.id = "_reqwest_" + s),
         h.onload = h.onreadystatechange = function() {
            if (h[readyState] && "complete" !== h[readyState] && "loaded" !== h[readyState] || u) return ! 1;
            h.onload = h.onreadystatechange = null,
            h.onclick && h.onclick(),
            t(lastValue),
            lastValue = void 0,
            head.removeChild(h),
            u = 1
         },
         head.appendChild(h),
         {
            abort: function() {
               h.onload = h.onreadystatechange = null,
               i({},
               "Request is aborted: timeout", {}),
               lastValue = void 0,
               head.removeChild(h),
               u = 1
            }
         }
      }
      function getRequest(e, t) {
         var i, n = this.o,
         s = (n.method || "GET").toUpperCase(),
         a = "string" == typeof n ? n: n.url,
         r = !1 !== n.processData && n.data && "string" != typeof n.data ? reqwest.toQueryString(n.data) : n.data || null,
         o = !1;
         return "jsonp" != n.type && "GET" != s || !r || (a = urlappend(a, r), r = null),
         "jsonp" == n.type ? handleJsonp(n, e, t, a) : (i = n.xhr && n.xhr(n) || xhr(n), i.open(s, a, !1 !== n.async), setHeaders(i, n), setCredentials(i, n), context[xDomainRequest] && i instanceof context[xDomainRequest] ? (i.onload = e, i.onerror = t, i.onprogress = function() {},
         o = !0) : i.onreadystatechange = handleReadyState(this, e, t), n.before && n.before(i), o ? setTimeout(function() {
            i.send(r)
         },
         200) : i.send(r), i)
      }
      function Reqwest(e, t) {
         this.o = e,
         this.fn = t,
         init.apply(this, arguments)
      }
      function setType(e) {
         if (null !== e) return e.match("json") ? "json": e.match("javascript") ? "js": e.match("text") ? "html": e.match("xml") ? "xml": void 0
      }
      function init(o, fn) {
         function complete(e) {
            for (o.timeout && clearTimeout(self.timeout), self.timeout = null; self._completeHandlers.length > 0;) self._completeHandlers.shift()(e)
         }
         function success(resp) {
            var type = o.type || resp && setType(resp.getResponseHeader("Content-Type"));
            resp = "jsonp" !== type ? self.request: resp;
            var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type),
            r = filteredResponse;
            try {
               resp.responseText = r
            } catch(e) {}
            if (r) switch (type) {
            case "json":
               try {
                  resp = context.JSON ? context.JSON.parse(r) : eval("(" + r + ")")
               } catch(e) {
                  return error(resp, "Could not parse JSON in response", e)
               }
               break;
            case "js":
               resp = eval(r);
               break;
            case "html":
               resp = r;
               break;
            case "xml":
               resp = resp.responseXML && resp.responseXML.parseError && resp.responseXML.parseError.errorCode && resp.responseXML.parseError.reason ? null: resp.responseXML
            }
            for (self._responseArgs.resp = resp, self._fulfilled = !0, fn(resp), self._successHandler(resp); self._fulfillmentHandlers.length > 0;) resp = self._fulfillmentHandlers.shift()(resp);
            complete(resp)
         }
         function timedOut() {
            self._timedOut = !0,
            self.request.abort()
         }
         function error(e, t, i) {
            for (e = self.request, self._responseArgs.resp = e, self._responseArgs.msg = t, self._responseArgs.t = i, self._erred = !0; self._errorHandlers.length > 0;) self._errorHandlers.shift()(e, t, i);
            complete(e)
         }
         this.url = "string" == typeof o ? o: o.url,
         this.timeout = null,
         this._fulfilled = !1,
         this._successHandler = function() {},
         this._fulfillmentHandlers = [],
         this._errorHandlers = [],
         this._completeHandlers = [],
         this._erred = !1,
         this._responseArgs = {};
         var self = this;
         fn = fn ||
         function() {},
         o.timeout && (this.timeout = setTimeout(function() {
            timedOut()
         },
         o.timeout)),
         o.success && (this._successHandler = function() {
            o.success.apply(o, arguments)
         }),
         o.error && this._errorHandlers.push(function() {
            o.error.apply(o, arguments)
         }),
         o.complete && this._completeHandlers.push(function() {
            o.complete.apply(o, arguments)
         }),
         this.request = getRequest.call(this, success, error)
      }
      function reqwest(e, t) {
         return new Reqwest(e, t)
      }
      function normalize(e) {
         return e ? e.replace(/\r?\n/g, "\r\n") : ""
      }
      function serial(e, t) {
         var i, n, s, a, r = e.name,
         o = e.tagName.toLowerCase(),
         c = function(e) {
            e && !e.disabled && t(r, normalize(e.attributes.value && e.attributes.value.specified ? e.value: e.text))
         };
         if (!e.disabled && r) switch (o) {
         case "input":
            /reset|button|image|file/i.test(e.type) || (i = /checkbox/i.test(e.type), n = /radio/i.test(e.type), s = e.value, (!(i || n) || e.checked) && t(r, normalize(i && "" === s ? "on": s)));
            break;
         case "textarea":
            t(r, normalize(e.value));
            break;
         case "select":
            if ("select-one" === e.type.toLowerCase()) c(e.selectedIndex >= 0 ? e.options[e.selectedIndex] : null);
            else for (a = 0; e.length && a < e.length; a++) e.options[a].selected && c(e.options[a])
         }
      }
      function eachFormElement() {
         var e, t, i = this;
         for (t = 0; t < arguments.length; t++) e = arguments[t],
         /input|select|textarea/i.test(e.tagName) && serial(e, i),
         function(e, t) {
            var n, s, a;
            for (n = 0; n < t.length; n++) for (a = e[byTag](t[n]), s = 0; s < a.length; s++) serial(a[s], i)
         } (e, ["input", "select", "textarea"])
      }
      function serializeQueryString() {
         return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments))
      }
      function serializeHash() {
         var e = {};
         return eachFormElement.apply(function(t, i) {
            t in e ? (e[t] && !isArray(e[t]) && (e[t] = [e[t]]), e[t].push(i)) : e[t] = i
         },
         arguments),
         e
      }
      function buildParams(e, t, i, n) {
         var s, a, r, o = /\[\]$/;
         if (isArray(t)) for (a = 0; t && a < t.length; a++) r = t[a],
         i || o.test(e) ? n(e, r) : buildParams(e + "[" + ("object" == typeof r ? a: "") + "]", r, i, n);
         else if (t && "[object Object]" === t.toString()) for (s in t) buildParams(e + "[" + s + "]", t[s], i, n);
         else n(e, t)
      }
      var context = this;
      if ("window" in context) var doc = document,
      byTag = "getElementsByTagName",
      head = doc[byTag]("head")[0];
      else {
         var XHR2;
         try {
            XHR2 = __webpack_require__(681)
         } catch(e) {
            throw new Error("Peer dependency `xhr2` required! Please npm install xhr2")
         }
      }
      var httpsRe = /^http/,
      protocolRe = /(^\w+):\/\//,
      twoHundo = /^(20\d|1223)$/,
      readyState = "readyState",
      contentType = "Content-Type",
      requestedWith = "X-Requested-With",
      uniqid = 0,
      callbackPrefix = "reqwest_" + +new Date,
      lastValue, xmlHttpRequest = "XMLHttpRequest",
      xDomainRequest = "XDomainRequest",
      noop = function() {},
      isArray = "function" == typeof Array.isArray ? Array.isArray: function(e) {
         return e instanceof Array
      },
      defaultHeaders = {
         contentType: "application/x-www-form-urlencoded",
         requestedWith: xmlHttpRequest,
         accept: {
            "*": "text/javascript, text/html, application/xml, text/xml, */*",
            xml: "application/xml, text/xml",
            html: "text/html",
            text: "text/plain",
            json: "application/json, text/javascript",
            js: "application/javascript, text/javascript"
         }
      },
      xhr = function(e) {
         if (!0 === e.crossOrigin) {
            var t = context[xmlHttpRequest] ? new XMLHttpRequest: null;
            if (t && "withCredentials" in t) return t;
            if (context[xDomainRequest]) return new XDomainRequest;
            throw new Error("Browser does not support cross-origin requests")
         }
         return context[xmlHttpRequest] ? new XMLHttpRequest: XHR2 ? new XHR2: new ActiveXObject("Microsoft.XMLHTTP")
      },
      globalSetupOptions = {
         dataFilter: function(e) {
            return e
         }
      };
      return Reqwest.prototype = {
         abort: function() {
            this._aborted = !0,
            this.request.abort()
         },
         retry: function() {
            init.call(this, this.o, this.fn)
         },
         then: function(e, t) {
            return e = e ||
            function() {},
            t = t ||
            function() {},
            this._fulfilled ? this._responseArgs.resp = e(this._responseArgs.resp) : this._erred ? t(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : (this._fulfillmentHandlers.push(e), this._errorHandlers.push(t)),
            this
         },
         always: function(e) {
            return this._fulfilled || this._erred ? e(this._responseArgs.resp) : this._completeHandlers.push(e),
            this
         },
         fail: function(e) {
            return this._erred ? e(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : this._errorHandlers.push(e),
            this
         },
         catch: function(e) {
            return this.fail(e)
         }
      },
      reqwest.serializeArray = function() {
         var e = [];
         return eachFormElement.apply(function(t, i) {
            e.push({
               name: t,
               value: i
            })
         },
         arguments),
         e
      },
      reqwest.serialize = function() {
         if (0 === arguments.length) return "";
         var e, t, i = Array.prototype.slice.call(arguments, 0);
         return e = i.pop(),
         e && e.nodeType && i.push(e) && (e = null),
         e && (e = e.type),
         t = "map" == e ? serializeHash: "array" == e ? reqwest.serializeArray: serializeQueryString,
         t.apply(null, i)
      },
      reqwest.toQueryString = function(e, t) {
         var i, n, s = t || !1,
         a = [],
         r = encodeURIComponent,
         o = function(e, t) {
            t = "function" == typeof t ? t() : null == t ? "": t,
            a[a.length] = r(e) + "=" + r(t)
         };
         if (isArray(e)) for (n = 0; e && n < e.length; n++) o(e[n].name, e[n].value);
         else for (i in e) e.hasOwnProperty(i) && buildParams(i, e[i], s, o);
         return a.join("&").replace(/%20/g, "+")
      },
      reqwest.getcallbackPrefix = function() {
         return callbackPrefix
      },
      reqwest.compat = function(e, t) {
         return e && (e.type && (e.method = e.type) && delete e.type, e.dataType && (e.type = e.dataType), e.jsonpCallback && (e.jsonpCallbackName = e.jsonpCallback) && delete e.jsonpCallback, e.jsonp && (e.jsonpCallback = e.jsonp)),
         new Reqwest(e, t)
      },
      reqwest.ajaxSetup = function(e) {
         e = e || {};
         for (var t in e) globalSetupOptions[t] = e[t]
      },
      reqwest
   })
},
,
function(e, t) {}], [283]);