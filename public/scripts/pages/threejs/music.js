webpackJsonp([0], [, , 
   2: function(t, e) {
      var i = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
      "number" == typeof __g && (__g = i)
}, 
3: function(t, e) {
   var i = t.exports = {
      version: "2.5.3"
   };
   "number" == typeof __e && (__e = i)
}, , , 
6: function(t, e, i) {
   var n = i(43)("wks"),
      s = i(31),
      r = i(2).Symbol,
      a = "function" == typeof r;
   (t.exports = function(t) {
      return n[t] || (n[t] = a && r[t] || (a ? r : s)("Symbol." + t))
   }).store = n
}, , ,
9: function(t, e) {
   var i = {}.hasOwnProperty;
   t.exports = function(t, e) {
      return i.call(t, e)
   }
}, ,
11: function(t, e, i) {
   t.exports = !i(22)(function() {
      return 7 != Object.defineProperty({}, "a", {
         get: function() {
            return 7
         }
      }).a
   })
}, 
12: function(t, e, i) {
   var n = i(21),
      s = i(71),
      r = i(46),
      a = Object.defineProperty;
   e.f = i(11) ? Object.defineProperty : function(t, e, i) {
      if (n(t), e = r(e, !0), n(i), s) try {
         return a(t, e, i)
      } catch (t) {}
      if ("get" in i || "set" in i) throw TypeError("Accessors not supported!");
      return "value" in i && (t[e] = i.value), t
   }
}, 
13: function(t, e, i) {
   (function(i) {
      var n, s, r = void 0 !== t && t.exports && void 0 !== i ? i : this || window;
      (r._gsQueue || (r._gsQueue = [])).push(function() {
         "use strict";
         r._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
            var n = function(t) {
                  var e, i = [],
                     n = t.length;
                  for (e = 0; e !== n; i.push(t[e++]));
                  return i
               },
               s = function(t, e, i) {
                  var n, s, r = t.cycle;
                  for (n in r) s = r[n], t[n] = "function" == typeof s ? s(i, e[i]) : s[i % s.length];
                  delete t.cycle
               },
               r = function(t, e, n) {
                  i.call(this, t, e, n), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !! this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = r.prototype.render
               },
               a = i._internals,
               o = a.isSelector,
               l = a.isArray,
               h = r.prototype = i.to({}, .1, {}),
               c = [];
            r.version = "1.20.3", h.constructor = r, h.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, h.invalidate = function() {
               return this._yoyo = !0 === this.vars.yoyo || !! this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), i.prototype.invalidate.call(this)
            }, h.updateTo = function(t, e) {
               var n, s = this.ratio,
                  r = this.vars.immediateRender || t.immediateRender;
               e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
               for (n in t) this.vars[n] = t[n];
               if (this._initted || r) if (e) this._initted = !1, r && this.render(0, !0, !0);
               else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                  var a = this._totalTime;
                  this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
               } else if (this._initted = !1, this._init(), this._time > 0 || r) for (var o, l = 1 / (1 - s), h = this._firstPT; h;) o = h.s + h.c, h.c *= l, h.s = o - h.c, h = h._next;
               return this
            }, h.render = function(t, e, n) {
               this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
               var s, r, o, l, h, c, u, d, p, f = this._dirty ? this.totalDuration() : this._totalDuration,
                  m = this._time,
                  g = this._totalTime,
                  v = this._cycle,
                  _ = this._duration,
                  y = this._rawPrevTime;
               if (t >= f - 1e-7 && t >= 0 ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = _, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === _ && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (t = 0), (y < 0 || t <= 0 && t >= -1e-7 || 1e-10 === y && "isPause" !== this.data) && y !== t && (n = !0, y > 1e-10 && (r = "onReverseComplete")), this._rawPrevTime = d = !e || t || y === t ? t : 1e-10)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== g || 0 === _ && y > 0) && (r = "onReverseComplete", s = this._reversed), t < 0 && (this._active = !1, 0 === _ && (this._initted || !this.vars.lazy || n) && (y >= 0 && (n = !0), this._rawPrevTime = d = !e || t || y === t ? t : 1e-10)), this._initted || (n = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = _ + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && g <= t && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = _ - this._time, (p = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== p || this._initted ? this._yoyoEase = p = !0 === p ? this._ease : p instanceof Ease ? p : Ease.map[p] : (p = this.vars.ease, this._yoyoEase = p = p ? p instanceof Ease ? p : "function" == typeof p ? new Ease(p, this.vars.easeParams) : Ease.map[p] || i.defaultEase : i.defaultEase)), this.ratio = p ? 1 - p.getRatio((_ - this._time) / _) : 0)), this._time > _ ? this._time = _ : this._time < 0 && (this._time = 0)), this._easeType && !p ? (h = this._time / _, c = this._easeType, u = this._easePower, (1 === c || 3 === c && h >= .5) && (h = 1 - h), 3 === c && (h *= 2), 1 === u ? h *= h : 2 === u ? h *= h * h : 3 === u ? h *= h * h * h : 4 === u && (h *= h * h * h * h), 1 === c ? this.ratio = 1 - h : 2 === c ? this.ratio = h : this._time / _ < .5 ? this.ratio = h / 2 : this.ratio = 1 - h / 2) : p || (this.ratio = this._ease.getRatio(this._time / _))), m === this._time && !n && v === this._cycle) return void(g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
               if (!this._initted) {
                  if (this._init(), !this._initted || this._gc) return;
                  if (!n && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = m, this._totalTime = g, this._rawPrevTime = y, this._cycle = v, a.lazyTweens.push(this), void(this._lazy = [t, e]);
                  !this._time || s || p ? s && this._ease._calcEnd && !p && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / _)
               }
               for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0), 0 === g && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, !0, n) : r || (r = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== _ || e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
               this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, !0, n), e || (this._totalTime !== g || r) && this._callback("onUpdate")), this._cycle !== v && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (this._gc && !n || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, n), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === _ && 1e-10 === this._rawPrevTime && 1e-10 !== d && (this._rawPrevTime = 0)))
            }, r.to = function(t, e, i) {
               return new r(t, e, i)
            }, r.from = function(t, e, i) {
               return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i)
            }, r.fromTo = function(t, e, i, n) {
               return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new r(t, e, n)
            }, r.staggerTo = r.allTo = function(t, e, a, h, u, d, p) {
               h = h || 0;
               var f, m, g, v, _ = 0,
                  y = [],
                  x = function() {
                     a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments), u.apply(p || a.callbackScope || this, d || c)
                  },
                  w = a.cycle,
                  b = a.startAt && a.startAt.cycle;
               for (l(t) || ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = n(t))), t = t || [], h < 0 && (t = n(t), t.reverse(), h *= -1), f = t.length - 1, g = 0; g <= f; g++) {
                  m = {};
                  for (v in a) m[v] = a[v];
                  if (w && (s(m, t, g), null != m.duration && (e = m.duration, delete m.duration)), b) {
                     b = m.startAt = {};
                     for (v in a.startAt) b[v] = a.startAt[v];
                     s(m.startAt, t, g)
                  }
                  m.delay = _ + (m.delay || 0), g === f && u && (m.onComplete = x), y[g] = new r(t[g], e, m), _ += h
               }
               return y
            }, r.staggerFrom = r.allFrom = function(t, e, i, n, s, a, o) {
               return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, n, s, a, o)
            }, r.staggerFromTo = r.allFromTo = function(t, e, i, n, s, a, o, l) {
               return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, n, s, a, o, l)
            }, r.delayedCall = function(t, e, i, n, s) {
               return new r(e, 0, {
                  delay: t,
                  onComplete: e,
                  onCompleteParams: i,
                  callbackScope: n,
                  onReverseComplete: e,
                  onReverseCompleteParams: i,
                  immediateRender: !1,
                  useFrames: s,
                  overwrite: 0
               })
            }, r.set = function(t, e) {
               return new r(t, 0, e)
            }, r.isTweening = function(t) {
               return i.getTweensOf(t, !0).length > 0
            };
            var u = function(t, e) {
                  for (var n = [], s = 0, r = t._first; r;) r instanceof i ? n[s++] = r : (e && (n[s++] = r), n = n.concat(u(r, e)), s = n.length), r = r._next;
                  return n
               },
               d = r.getAllTweens = function(e) {
                  return u(t._rootTimeline, e).concat(u(t._rootFramesTimeline, e))
               };
            r.killAll = function(t, i, n, s) {
               null == i && (i = !0), null == n && (n = !0);
               var r, a, o, l = d(0 != s),
                  h = l.length,
                  c = i && n && s;
               for (o = 0; o < h; o++) a = l[o], (c || a instanceof e || (r = a.target === a.vars.onComplete) && n || i && !r) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
            }, r.killChildTweensOf = function(t, e) {
               if (null != t) {
                  var s, h, c, u, d, p = a.tweenLookup;
                  if ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = n(t)), l(t)) for (u = t.length; --u > -1;) r.killChildTweensOf(t[u], e);
                  else {
                     s = [];
                     for (c in p) for (h = p[c].target.parentNode; h;) h === t && (s = s.concat(p[c].tweens)), h = h.parentNode;
                     for (d = s.length, u = 0; u < d; u++) e && s[u].totalTime(s[u].totalDuration()), s[u]._enabled(!1, !1)
                  }
               }
            };
            var p = function(t, i, n, s) {
                  i = !1 !== i, n = !1 !== n, s = !1 !== s;
                  for (var r, a, o = d(s), l = i && n && s, h = o.length; --h > -1;) a = o[h], (l || a instanceof e || (r = a.target === a.vars.onComplete) && n || i && !r) && a.paused(t)
               };
            return r.pauseAll = function(t, e, i) {
               p(!0, t, e, i)
            }, r.resumeAll = function(t, e, i) {
               p(!1, t, e, i)
            }, r.globalTimeScale = function(e) {
               var n = t._rootTimeline,
                  s = i.ticker.time;
               return arguments.length ? (e = e || 1e-10, n._startTime = s - (s - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, s = i.ticker.frame, n._startTime = s - (s - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
            }, h.progress = function(t, e) {
               return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
            }, h.totalProgress = function(t, e) {
               return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
            }, h.time = function(t, e) {
               return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
            }, h.duration = function(e) {
               return arguments.length ? t.prototype.duration.call(this, e) : this._duration
            }, h.totalDuration = function(t) {
               return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
            }, h.repeat = function(t) {
               return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
            }, h.repeatDelay = function(t) {
               return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
            }, h.yoyo = function(t) {
               return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, r
         }, !0), r._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
            var n = function(t) {
                  e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                  var i, n, s = this.vars;
                  for (n in s) i = s[n], l(i) && -1 !== i.join("").indexOf("{self}") && (s[n] = this._swapSelfInParams(i));
                  l(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger)
               },
               s = i._internals,
               a = n._internals = {},
               o = s.isSelector,
               l = s.isArray,
               h = s.lazyTweens,
               c = s.lazyRender,
               u = r._gsDefine.globals,
               d = function(t) {
                  var e, i = {};
                  for (e in t) i[e] = t[e];
                  return i
               },
               p = function(t, e, i) {
                  var n, s, r = t.cycle;
                  for (n in r) s = r[n], t[n] = "function" == typeof s ? s(i, e[i]) : s[i % s.length];
                  delete t.cycle
               },
               f = a.pauseCallback = function() {},
               m = function(t) {
                  var e, i = [],
                     n = t.length;
                  for (e = 0; e !== n; i.push(t[e++]));
                  return i
               },
               g = n.prototype = new e;
            return n.version = "1.20.3", g.constructor = n, g.kill()._gc = g._forcingPlayhead = g._hasPause = !1, g.to = function(t, e, n, s) {
               var r = n.repeat && u.TweenMax || i;
               return e ? this.add(new r(t, e, n), s) : this.set(t, n, s)
            }, g.from = function(t, e, n, s) {
               return this.add((n.repeat && u.TweenMax || i).from(t, e, n), s)
            }, g.fromTo = function(t, e, n, s, r) {
               var a = s.repeat && u.TweenMax || i;
               return e ? this.add(a.fromTo(t, e, n, s), r) : this.set(t, s, r)
            }, g.staggerTo = function(t, e, s, r, a, l, h, c) {
               var u, f, g = new n({
                  onComplete: l,
                  onCompleteParams: h,
                  callbackScope: c,
                  smoothChildTiming: this.smoothChildTiming
               }),
                  v = s.cycle;
               for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = m(t)), r = r || 0, r < 0 && (t = m(t), t.reverse(), r *= -1), f = 0; f < t.length; f++) u = d(s), u.startAt && (u.startAt = d(u.startAt), u.startAt.cycle && p(u.startAt, t, f)), v && (p(u, t, f), null != u.duration && (e = u.duration, delete u.duration)), g.to(t[f], e, u, f * r);
               return this.add(g, a)
            }, g.staggerFrom = function(t, e, i, n, s, r, a, o) {
               return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, s, r, a, o)
            }, g.staggerFromTo = function(t, e, i, n, s, r, a, o, l) {
               return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, s, r, a, o, l)
            }, g.call = function(t, e, n, s) {
               return this.add(i.delayedCall(0, t, e, n), s)
            }, g.set = function(t, e, n) {
               return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
            }, n.exportRoot = function(t, e) {
               t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
               var s, r, a, o, l = new n(t),
                  h = l._timeline;
               for (null == e && (e = !0), h._remove(l, !0), l._startTime = 0, l._rawPrevTime = l._time = l._totalTime = h._time, a = h._first; a;) o = a._next, e && a instanceof i && a.target === a.vars.onComplete || (r = a._startTime - a._delay, r < 0 && (s = 1), l.add(a, r)), a = o;
               return h.add(l, 0), s && l.totalDuration(), l
            }, g.add = function(s, r, a, o) {
               var h, c, u, d, p, f;
               if ("number" != typeof r && (r = this._parseTimeOrLabel(r, 0, !0, s)), !(s instanceof t)) {
                  if (s instanceof Array || s && s.push && l(s)) {
                     for (a = a || "normal", o = o || 0, h = r, c = s.length, u = 0; u < c; u++) l(d = s[u]) && (d = new n({
                        tweens: d
                     })), this.add(d, h), "string" != typeof d && "function" != typeof d && ("sequence" === a ? h = d._startTime + d.totalDuration() / d._timeScale : "start" === a && (d._startTime -= d.delay())), h += o;
                     return this._uncache(!0)
                  }
                  if ("string" == typeof s) return this.addLabel(s, r);
                  if ("function" != typeof s) throw "Cannot add " + s + " into the timeline; it is not a tween, timeline, function, or string.";
                  s = i.delayedCall(0, s)
               }
               if (e.prototype.add.call(this, s, r), s._time && s.render((this.rawTime() - s._startTime) * s._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) for (p = this, f = p.rawTime() > s._startTime; p._timeline;) f && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
               return this
            }, g.remove = function(e) {
               if (e instanceof t) {
                  this._remove(e, !1);
                  var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                  return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
               }
               if (e instanceof Array || e && e.push && l(e)) {
                  for (var n = e.length; --n > -1;) this.remove(e[n]);
                  return this
               }
               return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
            }, g._remove = function(t, i) {
               return e.prototype._remove.call(this, t, i), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, g.append = function(t, e) {
               return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
            }, g.insert = g.insertMultiple = function(t, e, i, n) {
               return this.add(t, e || 0, i, n)
            }, g.appendMultiple = function(t, e, i, n) {
               return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
            }, g.addLabel = function(t, e) {
               return this._labels[t] = this._parseTimeOrLabel(e), this
            }, g.addPause = function(t, e, n, s) {
               var r = i.delayedCall(0, f, n, s || this);
               return r.vars.onComplete = r.vars.onReverseComplete = e, r.data = "isPause", this._hasPause = !0, this.add(r, t)
            }, g.removeLabel = function(t) {
               return delete this._labels[t], this
            }, g.getLabelTime = function(t) {
               return null != this._labels[t] ? this._labels[t] : -1
            }, g._parseTimeOrLabel = function(e, i, n, s) {
               var r, a;
               if (s instanceof t && s.timeline === this) this.remove(s);
               else if (s && (s instanceof Array || s.push && l(s))) for (a = s.length; --a > -1;) s[a] instanceof t && s[a].timeline === this && this.remove(s[a]);
               if (r = "number" != typeof e || i ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - r : 0, n);
               if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = r);
               else {
                  if (-1 === (a = e.indexOf("="))) return null == this._labels[e] ? n ? this._labels[e] = r + i : i : this._labels[e] + i;
                  i = parseInt(e.charAt(a - 1) + "1", 10) * Number(e.substr(a + 1)), e = a > 1 ? this._parseTimeOrLabel(e.substr(0, a - 1), 0, n) : r
               }
               return Number(e) + i
            }, g.seek = function(t, e) {
               return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
            }, g.stop = function() {
               return this.paused(!0)
            }, g.gotoAndPlay = function(t, e) {
               return this.play(t, e)
            }, g.gotoAndStop = function(t, e) {
               return this.pause(t, e)
            }, g.render = function(t, e, i) {
               this._gc && this._enabled(!0, !1);
               var n, s, r, a, o, l, u, d = this._time,
                  p = this._dirty ? this.totalDuration() : this._totalDuration,
                  f = this._startTime,
                  m = this._timeScale,
                  g = this._paused;
               if (d !== this._time && (t += this._time - d), t >= p - 1e-7 && t >= 0) this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (s = !0, a = "onComplete", o = !! this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || this._rawPrevTime < 0 || 1e-10 === this._rawPrevTime) && this._rawPrevTime !== t && this._first && (o = !0, this._rawPrevTime > 1e-10 && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, t = p + 1e-4;
               else if (t < 1e-7) if (this._totalTime = this._time = 0, (0 !== d || 0 === this._duration && 1e-10 !== this._rawPrevTime && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (a = "onReverseComplete", s = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (o = s = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (o = !0), this._rawPrevTime = t;
               else {
                  if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && s) for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                  t = 0, this._initted || (o = !0)
               } else {
                  if (this._hasPause && !this._forcingPlayhead && !e) {
                     if (t >= d) for (n = this._first; n && n._startTime <= t && !l;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (l = n), n = n._next;
                     else for (n = this._last; n && n._startTime >= t && !l;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (l = n), n = n._prev;
                     l && (this._time = t = l._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                  }
                  this._totalTime = this._time = this._rawPrevTime = t
               }
               if (this._time !== d && this._first || i || o || l) {
                  if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (u = this._time) >= d) for (n = this._first; n && (r = n._next, u === this._time && (!this._paused || g));)(n._active || n._startTime <= u && !n._paused && !n._gc) && (l === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = r;
                  else for (n = this._last; n && (r = n._prev, u === this._time && (!this._paused || g));) {
                     if (n._active || n._startTime <= d && !n._paused && !n._gc) {
                        if (l === n) {
                           for (l = n._prev; l && l.endTime() > this._time;) l.render(l._reversed ? l.totalDuration() - (t - l._startTime) * l._timeScale : (t - l._startTime) * l._timeScale, e, i), l = l._prev;
                           l = null, this.pause()
                        }
                        n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                     }
                     n = r
                  }
                  this._onUpdate && (e || (h.length && c(), this._callback("onUpdate"))), a && (this._gc || f !== this._startTime && m === this._timeScale || (0 === this._time || p >= this.totalDuration()) && (s && (h.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
               }
            }, g._hasPausedChild = function() {
               for (var t = this._first; t;) {
                  if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                  t = t._next
               }
               return !1
            }, g.getChildren = function(t, e, n, s) {
               s = s || -9999999999;
               for (var r = [], a = this._first, o = 0; a;) a._startTime < s || (a instanceof i ? !1 !== e && (r[o++] = a) : (!1 !== n && (r[o++] = a), !1 !== t && (r = r.concat(a.getChildren(!0, e, n)), o = r.length))), a = a._next;
               return r
            }, g.getTweensOf = function(t, e) {
               var n, s, r = this._gc,
                  a = [],
                  o = 0;
               for (r && this._enabled(!0, !0), n = i.getTweensOf(t), s = n.length; --s > -1;)(n[s].timeline === this || e && this._contains(n[s])) && (a[o++] = n[s]);
               return r && this._enabled(!1, !0), a
            }, g.recent = function() {
               return this._recent
            }, g._contains = function(t) {
               for (var e = t.timeline; e;) {
                  if (e === this) return !0;
                  e = e.timeline
               }
               return !1
            }, g.shiftChildren = function(t, e, i) {
               i = i || 0;
               for (var n, s = this._first, r = this._labels; s;) s._startTime >= i && (s._startTime += t), s = s._next;
               if (e) for (n in r) r[n] >= i && (r[n] += t);
               return this._uncache(!0)
            }, g._kill = function(t, e) {
               if (!t && !e) return this._enabled(!1, !1);
               for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, s = !1; --n > -1;) i[n]._kill(t, e) && (s = !0);
               return s
            }, g.clear = function(t) {
               var e = this.getChildren(!1, !0, !0),
                  i = e.length;
               for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
               return !1 !== t && (this._labels = {}), this._uncache(!0)
            }, g.invalidate = function() {
               for (var e = this._first; e;) e.invalidate(), e = e._next;
               return t.prototype.invalidate.call(this)
            }, g._enabled = function(t, i) {
               if (t === this._gc) for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
               return e.prototype._enabled.call(this, t, i)
            }, g.totalTime = function(e, i, n) {
               this._forcingPlayhead = !0;
               var s = t.prototype.totalTime.apply(this, arguments);
               return this._forcingPlayhead = !1, s
            }, g.duration = function(t) {
               return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
            }, g.totalDuration = function(t) {
               if (!arguments.length) {
                  if (this._dirty) {
                     for (var e, i, n = 0, s = this._last, r = 999999999999; s;) e = s._prev, s._dirty && s.totalDuration(), s._startTime > r && this._sortChildren && !s._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(s, s._startTime - s._delay), this._calculatingDuration = 0) : r = s._startTime, s._startTime < 0 && !s._paused && (n -= s._startTime, this._timeline.smoothChildTiming && (this._startTime += s._startTime / this._timeScale, this._time -= s._startTime, this._totalTime -= s._startTime, this._rawPrevTime -= s._startTime), this.shiftChildren(-s._startTime, !1, -9999999999), r = 0), i = s._startTime + s._totalDuration / s._timeScale, i > n && (n = i), s = e;
                     this._duration = this._totalDuration = n, this._dirty = !1
                  }
                  return this._totalDuration
               }
               return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
            }, g.paused = function(e) {
               if (!e) for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
               return t.prototype.paused.apply(this, arguments)
            }, g.usesFrames = function() {
               for (var e = this._timeline; e._timeline;) e = e._timeline;
               return e === t._rootFramesTimeline
            }, g.rawTime = function(t) {
               return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
            }, n
         }, !0), r._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
            var n = function(e) {
                  t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
               },
               s = e._internals,
               a = s.lazyTweens,
               o = s.lazyRender,
               l = r._gsDefine.globals,
               h = new i(null, null, 1, 0),
               c = n.prototype = new t;
            return c.constructor = n, c.kill()._gc = !1, n.version = "1.20.3", c.invalidate = function() {
               return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
            }, c.addCallback = function(t, i, n, s) {
               return this.add(e.delayedCall(0, t, n, s), i)
            }, c.removeCallback = function(t, e) {
               if (t) if (null == e) this._kill(null, t);
               else for (var i = this.getTweensOf(t, !1), n = i.length, s = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === s && i[n]._enabled(!1, !1);
               return this
            }, c.removePause = function(e) {
               return this.removeCallback(t._internals.pauseCallback, e)
            }, c.tweenTo = function(t, i) {
               i = i || {};
               var n, s, r, a = {
                  ease: h,
                  useFrames: this.usesFrames(),
                  immediateRender: !1
               },
                  o = i.repeat && l.TweenMax || e;
               for (s in i) a[s] = i[s];
               return a.time = this._parseTimeOrLabel(t), n = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, r = new o(this, n, a), a.onStart = function() {
                  r.target.paused(!0), r.vars.time !== r.target.time() && n === r.duration() && r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || r, i.onStartParams || [])
               }, r
            }, c.tweenFromTo = function(t, e, i) {
               i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                  onComplete: this.seek,
                  onCompleteParams: [t],
                  callbackScope: this
               }, i.immediateRender = !1 !== i.immediateRender;
               var n = this.tweenTo(e, i);
               return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
            }, c.render = function(t, e, i) {
               this._gc && this._enabled(!0, !1);
               var n, s, r, l, h, c, u, d, p = this._time,
                  f = this._dirty ? this.totalDuration() : this._totalDuration,
                  m = this._duration,
                  g = this._totalTime,
                  v = this._startTime,
                  _ = this._timeScale,
                  y = this._rawPrevTime,
                  x = this._paused,
                  w = this._cycle;
               if (p !== this._time && (t += this._time - p), t >= f - 1e-7 && t >= 0) this._locked || (this._totalTime = f, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (s = !0, l = "onComplete", h = !! this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || y < 0 || 1e-10 === y) && y !== t && this._first && (h = !0, y > 1e-10 && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = m, t = m + 1e-4);
               else if (t < 1e-7) if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== p || 0 === m && 1e-10 !== y && (y > 0 || t < 0 && y >= 0) && !this._locked) && (l = "onReverseComplete", s = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = s = !0, l = "onReverseComplete") : y >= 0 && this._first && (h = !0), this._rawPrevTime = t;
               else {
                  if (this._rawPrevTime = m || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && s) for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                  t = 0, this._initted || (h = !0)
               } else if (0 === m && y < 0 && (h = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (c = m + this._repeatDelay, this._cycle = this._totalTime / c >> 0, 0 !== this._cycle && this._cycle === this._totalTime / c && g <= t && this._cycle--, this._time = this._totalTime - this._cycle * c, this._yoyo && 0 != (1 & this._cycle) && (this._time = m - this._time), this._time > m ? (this._time = m, t = m + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                  if ((t = this._time) >= p || this._repeat && w !== this._cycle) for (n = this._first; n && n._startTime <= t && !u;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (u = n), n = n._next;
                  else for (n = this._last; n && n._startTime >= t && !u;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (u = n), n = n._prev;
                  u && u._startTime < m && (this._time = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
               }
               if (this._cycle !== w && !this._locked) {
                  var b = this._yoyo && 0 != (1 & w),
                     T = b === (this._yoyo && 0 != (1 & this._cycle)),
                     k = this._totalTime,
                     S = this._cycle,
                     C = this._rawPrevTime,
                     E = this._time;
                  if (this._totalTime = w * m, this._cycle < w ? b = !b : this._totalTime += m, this._time = p, this._rawPrevTime = 0 === m ? y - 1e-4 : y, this._cycle = w, this._locked = !0, p = b ? 0 : m, this.render(p, e, 0 === m), e || this._gc || this.vars.onRepeat && (this._cycle = S, this._locked = !1, this._callback("onRepeat")), p !== this._time) return;
                  if (T && (this._cycle = w, this._locked = !0, p = b ? m + 1e-4 : -1e-4, this.render(p, !0, !1)), this._locked = !1, this._paused && !x) return;
                  this._time = E, this._totalTime = k, this._cycle = S, this._rawPrevTime = C
               }
               if (!(this._time !== p && this._first || i || h || u)) return void(g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
               if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (d = this._time) >= p) for (n = this._first; n && (r = n._next, d === this._time && (!this._paused || x));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (u === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = r;
               else for (n = this._last; n && (r = n._prev, d === this._time && (!this._paused || x));) {
                  if (n._active || n._startTime <= p && !n._paused && !n._gc) {
                     if (u === n) {
                        for (u = n._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i), u = u._prev;
                        u = null, this.pause()
                     }
                     n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                  }
                  n = r
               }
               this._onUpdate && (e || (a.length && o(), this._callback("onUpdate"))), l && (this._locked || this._gc || v !== this._startTime && _ === this._timeScale || (0 === this._time || f >= this.totalDuration()) && (s && (a.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[l] && this._callback(l)))
            }, c.getActive = function(t, e, i) {
               null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
               var n, s, r = [],
                  a = this.getChildren(t, e, i),
                  o = 0,
                  l = a.length;
               for (n = 0; n < l; n++) s = a[n], s.isActive() && (r[o++] = s);
               return r
            }, c.getLabelAfter = function(t) {
               t || 0 !== t && (t = this._time);
               var e, i = this.getLabelsArray(),
                  n = i.length;
               for (e = 0; e < n; e++) if (i[e].time > t) return i[e].name;
               return null
            }, c.getLabelBefore = function(t) {
               null == t && (t = this._time);
               for (var e = this.getLabelsArray(), i = e.length; --i > -1;) if (e[i].time < t) return e[i].name;
               return null
            }, c.getLabelsArray = function() {
               var t, e = [],
                  i = 0;
               for (t in this._labels) e[i++] = {
                  time: this._labels[t],
                  name: t
               };
               return e.sort(function(t, e) {
                  return t.time - e.time
               }), e
            }, c.invalidate = function() {
               return this._locked = !1, t.prototype.invalidate.call(this)
            }, c.progress = function(t, e) {
               return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
            }, c.totalProgress = function(t, e) {
               return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
            }, c.totalDuration = function(e) {
               return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
            }, c.time = function(t, e) {
               return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
            }, c.repeat = function(t) {
               return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
            }, c.repeatDelay = function(t) {
               return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
            }, c.yoyo = function(t) {
               return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, c.currentLabel = function(t) {
               return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
            }, n
         }, !0), function() {
            var t = 180 / Math.PI,
               e = [],
               i = [],
               n = [],
               s = {},
               a = r._gsDefine.globals,
               o = function(t, e, i, n) {
                  i === n && (i = n - (n - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
               },
               l = function(t, e, i, n) {
                  var s = {
                     a: t
                  },
                     r = {},
                     a = {},
                     o = {
                        c: n
                     },
                     l = (t + e) / 2,
                     h = (e + i) / 2,
                     c = (i + n) / 2,
                     u = (l + h) / 2,
                     d = (h + c) / 2,
                     p = (d - u) / 8;
                  return s.b = l + (t - l) / 4, r.b = u + p, s.c = r.a = (s.b + r.b) / 2, r.c = a.a = (u + d) / 2, a.b = d - p, o.b = c + (n - c) / 4, a.c = o.a = (a.b + o.b) / 2, [s, r, a, o]
               },
               h = function(t, s, r, a, o) {
                  var h, c, u, d, p, f, m, g, v, _, y, x, w, b = t.length - 1,
                     T = 0,
                     k = t[0].a;
                  for (h = 0; h < b; h++) p = t[T], c = p.a, u = p.d, d = t[T + 1].d, o ? (y = e[h], x = i[h], w = (x + y) * s * .25 / (a ? .5 : n[h] || .5), f = u - (u - c) * (a ? .5 * s : 0 !== y ? w / y : 0), m = u + (d - u) * (a ? .5 * s : 0 !== x ? w / x : 0), g = u - (f + ((m - f) * (3 * y / (y + x) + .5) / 4 || 0))) : (f = u - (u - c) * s * .5, m = u + (d - u) * s * .5, g = u - (f + m) / 2), f += g, m += g, p.c = v = f, p.b = 0 !== h ? k : k = p.a + .6 * (p.c - p.a), p.da = u - c, p.ca = v - c, p.ba = k - c, r ? (_ = l(c, k, v, u), t.splice(T, 1, _[0], _[1], _[2], _[3]), T += 4) : T++, k = m;
                  p = t[T], p.b = k, p.c = k + .4 * (p.d - k), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = k - p.a, r && (_ = l(p.a, k, p.c, p.d), t.splice(T, 1, _[0], _[1], _[2], _[3]))
               },
               c = function(t, n, s, r) {
                  var a, l, h, c, u, d, p = [];
                  if (r) for (t = [r].concat(t), l = t.length; --l > -1;)"string" == typeof(d = t[l][n]) && "=" === d.charAt(1) && (t[l][n] = r[n] + Number(d.charAt(0) + d.substr(2)));
                  if ((a = t.length - 2) < 0) return p[0] = new o(t[0][n], 0, 0, t[0][n]), p;
                  for (l = 0; l < a; l++) h = t[l][n], c = t[l + 1][n], p[l] = new o(h, 0, 0, c), s && (u = t[l + 2][n], e[l] = (e[l] || 0) + (c - h) * (c - h), i[l] = (i[l] || 0) + (u - c) * (u - c));
                  return p[l] = new o(t[l][n], 0, 0, t[l + 1][n]), p
               },
               u = function(t, r, a, o, l, u) {
                  var d, p, f, m, g, v, _, y, x = {},
                     w = [],
                     b = u || t[0];
                  l = "string" == typeof l ? "," + l + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == r && (r = 1);
                  for (p in t[0]) w.push(p);
                  if (t.length > 1) {
                     for (y = t[t.length - 1], _ = !0, d = w.length; --d > -1;) if (p = w[d], Math.abs(b[p] - y[p]) > .05) {
                        _ = !1;
                        break
                     }
                     _ && (t = t.concat(), u && t.unshift(u), t.push(t[1]), u = t[t.length - 3])
                  }
                  for (e.length = i.length = n.length = 0, d = w.length; --d > -1;) p = w[d], s[p] = -1 !== l.indexOf("," + p + ","), x[p] = c(t, p, s[p], u);
                  for (d = e.length; --d > -1;) e[d] = Math.sqrt(e[d]), i[d] = Math.sqrt(i[d]);
                  if (!o) {
                     for (d = w.length; --d > -1;) if (s[p]) for (f = x[w[d]], v = f.length - 1, m = 0; m < v; m++) g = f[m + 1].da / i[m] + f[m].da / e[m] || 0, n[m] = (n[m] || 0) + g * g;
                     for (d = n.length; --d > -1;) n[d] = Math.sqrt(n[d])
                  }
                  for (d = w.length, m = a ? 4 : 1; --d > -1;) p = w[d], f = x[p], h(f, r, a, o, s[p]), _ && (f.splice(0, m), f.splice(f.length - m, m));
                  return x
               },
               d = function(t, e, i) {
                  e = e || "soft";
                  var n, s, r, a, l, h, c, u, d, p, f, m = {},
                     g = "cubic" === e ? 3 : 2,
                     v = "soft" === e,
                     _ = [];
                  if (v && i && (t = [i].concat(t)), null == t || t.length < g + 1) throw "invalid Bezier data";
                  for (d in t[0]) _.push(d);
                  for (h = _.length; --h > -1;) {
                     for (d = _[h], m[d] = l = [], p = 0, u = t.length, c = 0; c < u; c++) n = null == i ? t[c][d] : "string" == typeof(f = t[c][d]) && "=" === f.charAt(1) ? i[d] + Number(f.charAt(0) + f.substr(2)) : Number(f), v && c > 1 && c < u - 1 && (l[p++] = (n + l[p - 2]) / 2), l[p++] = n;
                     for (u = p - g + 1, p = 0, c = 0; c < u; c += g) n = l[c], s = l[c + 1], r = l[c + 2], a = 2 === g ? 0 : l[c + 3], l[p++] = f = 3 === g ? new o(n, s, r, a) : new o(n, (2 * s + n) / 3, (2 * s + r) / 3, r);
                     l.length = p
                  }
                  return m
               },
               p = function(t, e, i) {
                  for (var n, s, r, a, o, l, h, c, u, d, p, f = 1 / i, m = t.length; --m > -1;) for (d = t[m], r = d.a, a = d.d - r, o = d.c - r, l = d.b - r, n = s = 0, c = 1; c <= i; c++) h = f * c, u = 1 - h, n = s - (s = (h * h * a + 3 * u * (h * o + u * l)) * h), p = m * i + c - 1, e[p] = (e[p] || 0) + n * n
               },
               f = function(t, e) {
                  e = e >> 0 || 6;
                  var i, n, s, r, a = [],
                     o = [],
                     l = 0,
                     h = 0,
                     c = e - 1,
                     u = [],
                     d = [];
                  for (i in t) p(t[i], a, e);
                  for (s = a.length, n = 0; n < s; n++) l += Math.sqrt(a[n]), r = n % e, d[r] = l, r === c && (h += l, r = n / e >> 0, u[r] = d, o[r] = h, l = 0, d = []);
                  return {
                     length: h,
                     lengths: o,
                     segments: u
                  }
               },
               m = r._gsDefine.plugin({
                  propName: "bezier",
                  priority: -1,
                  version: "1.3.8",
                  API: 2,
                  global: !0,
                  init: function(t, e, i) {
                     this._target = t, e instanceof Array && (e = {
                        values: e
                     }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                     var n, s, r, a, o, l = e.values || [],
                        h = {},
                        c = l[0],
                        p = e.autoRotate || i.vars.orientToBezier;
                     this._autoRotate = p ? p instanceof Array ? p : [
                        ["x", "y", "rotation", !0 === p ? 0 : Number(p) || 0]
                     ] : null;
                     for (n in c) this._props.push(n);
                     for (r = this._props.length; --r > -1;) n = this._props[r], this._overwriteProps.push(n), s = this._func[n] = "function" == typeof t[n], h[n] = s ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), o || h[n] !== l[0][n] && (o = h);
                     if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : d(l, e.type, h), this._segCount = this._beziers[n].length, this._timeRes) {
                        var m = f(this._beziers, this._timeRes);
                        this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                     }
                     if (p = this._autoRotate) for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), r = p.length; --r > -1;) {
                        for (a = 0; a < 3; a++) n = p[r][a], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                        n = p[r][2], this._initialRotations[r] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0, this._overwriteProps.push(n)
                     }
                     return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                  },
                  set: function(e) {
                     var i, n, s, r, a, o, l, h, c, u, d = this._segCount,
                        p = this._func,
                        f = this._target,
                        m = e !== this._startRatio;
                     if (this._timeRes) {
                        if (c = this._lengths, u = this._curSeg, e *= this._length, s = this._li, e > this._l2 && s < d - 1) {
                           for (h = d - 1; s < h && (this._l2 = c[++s]) <= e;);
                           this._l1 = c[s - 1], this._li = s, this._curSeg = u = this._segments[s], this._s2 = u[this._s1 = this._si = 0]
                        } else if (e < this._l1 && s > 0) {
                           for (; s > 0 && (this._l1 = c[--s]) >= e;);
                           0 === s && e < this._l1 ? this._l1 = 0 : s++, this._l2 = c[s], this._li = s, this._curSeg = u = this._segments[s], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                        }
                        if (i = s, e -= this._l1, s = this._si, e > this._s2 && s < u.length - 1) {
                           for (h = u.length - 1; s < h && (this._s2 = u[++s]) <= e;);
                           this._s1 = u[s - 1], this._si = s
                        } else if (e < this._s1 && s > 0) {
                           for (; s > 0 && (this._s1 = u[--s]) >= e;);
                           0 === s && e < this._s1 ? this._s1 = 0 : s++, this._s2 = u[s], this._si = s
                        }
                        o = (s + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                     } else i = e < 0 ? 0 : e >= 1 ? d - 1 : d * e >> 0, o = (e - i * (1 / d)) * d;
                     for (n = 1 - o, s = this._props.length; --s > -1;) r = this._props[s], a = this._beziers[r][i], l = (o * o * a.da + 3 * n * (o * a.ca + n * a.ba)) * o + a.a, this._mod[r] && (l = this._mod[r](l, f)), p[r] ? f[r](l) : f[r] = l;
                     if (this._autoRotate) {
                        var g, v, _, y, x, w, b, T = this._autoRotate;
                        for (s = T.length; --s > -1;) r = T[s][2], w = T[s][3] || 0, b = !0 === T[s][4] ? 1 : t, a = this._beziers[T[s][0]], g = this._beziers[T[s][1]], a && g && (a = a[i], g = g[i], v = a.a + (a.b - a.a) * o, y = a.b + (a.c - a.b) * o, v += (y - v) * o, y += (a.c + (a.d - a.c) * o - y) * o, _ = g.a + (g.b - g.a) * o, x = g.b + (g.c - g.b) * o, _ += (x - _) * o, x += (g.c + (g.d - g.c) * o - x) * o, l = m ? Math.atan2(x - _, y - v) * b + w : this._initialRotations[s], this._mod[r] && (l = this._mod[r](l, f)), p[r] ? f[r](l) : f[r] = l)
                     }
                  }
               }),
               g = m.prototype;
            m.bezierThrough = u, m.cubicToQuadratic = l, m._autoCSS = !0, m.quadraticToCubic = function(t, e, i) {
               return new o(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
            }, m._cssRegister = function() {
               var t = a.CSSPlugin;
               if (t) {
                  var e = t._internals,
                     i = e._parseToProxy,
                     n = e._setPluginRatio,
                     s = e.CSSPropTween;
                  e._registerComplexSpecialProp("bezier", {
                     parser: function(t, e, r, a, o, l) {
                        e instanceof Array && (e = {
                           values: e
                        }), l = new m;
                        var h, c, u, d = e.values,
                           p = d.length - 1,
                           f = [],
                           g = {};
                        if (p < 0) return o;
                        for (h = 0; h <= p; h++) u = i(t, d[h], a, o, l, p !== h), f[h] = u.end;
                        for (c in e) g[c] = e[c];
                        return g.values = f, o = new s(t, "bezier", 0, 0, u.pt, 2), o.data = u, o.plugin = l, o.setRatio = n, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (h = !0 === g.autoRotate ? 0 : Number(g.autoRotate), g.autoRotate = null != u.end.left ? [
                           ["left", "top", "rotation", h, !1]
                        ] : null != u.end.x && [
                           ["x", "y", "rotation", h, !1]
                        ]), g.autoRotate && (a._transform || a._enableTransforms(!1), u.autoRotate = a._target._gsTransform, u.proxy.rotation = u.autoRotate.rotation || 0, a._overwriteProps.push("rotation")), l._onInitTween(u.proxy, g, a._tween), o
                     }
                  })
               }
            }, g._mod = function(t) {
               for (var e, i = this._overwriteProps, n = i.length; --n > -1;)(e = t[i[n]]) && "function" == typeof e && (this._mod[i[n]] = e)
            }, g._kill = function(t) {
               var e, i, n = this._props;
               for (e in this._beziers) if (e in t) for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
               if (n = this._autoRotate) for (i = n.length; --i > -1;) t[n[i][2]] && n.splice(i, 1);
               return this._super._kill.call(this, t)
            }
         }(), r._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
            var i, n, s, a, o = function() {
                  t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
               },
               l = r._gsDefine.globals,
               h = {},
               c = o.prototype = new t("css");
            c.constructor = o, o.version = "1.20.3", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", o.defaultSmoothOrigin = !0, c = "px", o.suffixMap = {
               top: c,
               right: c,
               bottom: c,
               left: c,
               width: c,
               height: c,
               fontSize: c,
               padding: c,
               margin: c,
               perspective: c,
               lineHeight: ""
            };
            var u, d, p, f, m, g, v, _, y = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
               x = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
               w = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
               b = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
               T = /(?:\d|\-|\+|=|#|\.)*/g,
               k = /opacity *= *([^)]*)/i,
               S = /opacity:([^;]*)/i,
               C = /alpha\(opacity *=.+?\)/i,
               E = /^(rgb|hsl)/,
               P = /([A-Z])/g,
               M = /-([a-z])/gi,
               O = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
               R = function(t, e) {
                  return e.toUpperCase()
               },
               A = /(?:Left|Right|Width)/i,
               j = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
               D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
               F = /,(?=[^\)]*(?:\(|$))/gi,
               H = /[\s,\(]/i,
               z = Math.PI / 180,
               I = 180 / Math.PI,
               N = {},
               B = {
                  style: {}
               },
               L = r.document || {
                  createElement: function() {
                     return B
                  }
               },
               q = function(t, e) {
                  return L.createElementNS ? L.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : L.createElement(t)
               },
               $ = q("div"),
               X = q("img"),
               U = o._internals = {
                  _specialProps: h
               },
               W = (r.navigator || {}).userAgent || "",
               Y = function() {
                  var t = W.indexOf("Android"),
                     e = q("a");
                  return p = -1 !== W.indexOf("Safari") && -1 === W.indexOf("Chrome") && (-1 === t || parseFloat(W.substr(t + 8, 2)) > 3), m = p && parseFloat(W.substr(W.indexOf("Version/") + 8, 2)) < 6, f = -1 !== W.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(W) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(W)) && (g = parseFloat(RegExp.$1)), !! e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
               }(),
               V = function(t) {
                  return k.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
               },
               G = function(t) {
                  r.console && console.log(t)
               },
               K = "",
               Q = "",
               Z = function(t, e) {
                  e = e || $;
                  var i, n, s = e.style;
                  if (void 0 !== s[t]) return t;
                  for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === s[i[n] + t];);
                  return n >= 0 ? (Q = 3 === n ? "ms" : i[n], K = "-" + Q.toLowerCase() + "-", Q + t) : null
               },
               J = L.defaultView ? L.defaultView.getComputedStyle : function() {},
               tt = o.getStyle = function(t, e, i, n, s) {
                  var r;
                  return Y || "opacity" !== e ? (!n && t.style[e] ? r = t.style[e] : (i = i || J(t)) ? r = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(P, "-$1").toLowerCase()) : t.currentStyle && (r = t.currentStyle[e]), null == s || r && "none" !== r && "auto" !== r && "auto auto" !== r ? r : s) : V(t)
               },
               et = U.convertToPixels = function(t, i, n, s, r) {
                  if ("px" === s || !s && "lineHeight" !== i) return n;
                  if ("auto" === s || !n) return 0;
                  var a, l, h, c = A.test(i),
                     u = t,
                     d = $.style,
                     p = n < 0,
                     f = 1 === n;
                  if (p && (n = -n), f && (n *= 100), "lineHeight" !== i || s) if ("%" === s && -1 !== i.indexOf("border")) a = n / 100 * (c ? t.clientWidth : t.clientHeight);
                  else {
                     if (d.cssText = "border:0 solid red;position:" + tt(t, "position") + ";line-height:0;", "%" !== s && u.appendChild && "v" !== s.charAt(0) && "rem" !== s) d[c ? "borderLeftWidth" : "borderTopWidth"] = n + s;
                     else {
                        if (u = t.parentNode || L.body, -1 !== tt(u, "display").indexOf("flex") && (d.position = "absolute"), l = u._gsCache, h = e.ticker.frame, l && c && l.time === h) return l.width * n / 100;
                        d[c ? "width" : "height"] = n + s
                     }
                     u.appendChild($), a = parseFloat($[c ? "offsetWidth" : "offsetHeight"]), u.removeChild($), c && "%" === s && !1 !== o.cacheWidths && (l = u._gsCache = u._gsCache || {}, l.time = h, l.width = a / n * 100), 0 !== a || r || (a = et(t, i, n, s, !0))
                  } else l = J(t).lineHeight, t.style.lineHeight = n, a = parseFloat(J(t).lineHeight), t.style.lineHeight = l;
                  return f && (a /= 100), p ? -a : a
               },
               it = U.calculateOffset = function(t, e, i) {
                  if ("absolute" !== tt(t, "position", i)) return 0;
                  var n = "left" === e ? "Left" : "Top",
                     s = tt(t, "margin" + n, i);
                  return t["offset" + n] - (et(t, e, parseFloat(s), s.replace(T, "")) || 0)
               },
               nt = function(t, e) {
                  var i, n, s, r = {};
                  if (e = e || J(t, null)) if (i = e.length) for (; --i > -1;) s = e[i], -1 !== s.indexOf("-transform") && Ot !== s || (r[s.replace(M, R)] = e.getPropertyValue(s));
                  else for (i in e) - 1 !== i.indexOf("Transform") && Mt !== i || (r[i] = e[i]);
                  else if (e = t.currentStyle || t.style) for (i in e)"string" == typeof i && void 0 === r[i] && (r[i.replace(M, R)] = e[i]);
                  return Y || (r.opacity = V(t)), n = Xt(t, e, !1), r.rotation = n.rotation, r.skewX = n.skewX, r.scaleX = n.scaleX, r.scaleY = n.scaleY, r.x = n.x, r.y = n.y, At && (r.z = n.z, r.rotationX = n.rotationX, r.rotationY = n.rotationY, r.scaleZ = n.scaleZ), r.filters && delete r.filters, r
               },
               st = function(t, e, i, n, s) {
                  var r, a, o, l = {},
                     h = t.style;
                  for (a in i)"cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (r = i[a]) || s && s[a]) && -1 === a.indexOf("Origin") && ("number" != typeof r && "string" != typeof r || (l[a] = "auto" !== r || "left" !== a && "top" !== a ? "" !== r && "auto" !== r && "none" !== r || "string" != typeof e[a] || "" === e[a].replace(b, "") ? r : 0 : it(t, a), void 0 !== h[a] && (o = new yt(h, a, h[a], o))));
                  if (n) for (a in n)"className" !== a && (l[a] = n[a]);
                  return {
                     difs: l,
                     firstMPT: o
                  }
               },
               rt = {
                  width: ["Left", "Right"],
                  height: ["Top", "Bottom"]
               },
               at = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
               ot = function(t, e, i) {
                  if ("svg" === (t.nodeName + "").toLowerCase()) return (i || J(t))[e] || 0;
                  if (t.getCTM && Lt(t)) return t.getBBox()[e] || 0;
                  var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                     s = rt[e],
                     r = s.length;
                  for (i = i || J(t, null); --r > -1;) n -= parseFloat(tt(t, "padding" + s[r], i, !0)) || 0, n -= parseFloat(tt(t, "border" + s[r] + "Width", i, !0)) || 0;
                  return n
               },
               lt = function(t, e) {
                  if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                  null != t && "" !== t || (t = "0 0");
                  var i, n = t.split(" "),
                     s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0],
                     r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
                  if (n.length > 3 && !e) {
                     for (n = t.split(", ").join(",").split(","), t = [], i = 0; i < n.length; i++) t.push(lt(n[i]));
                     return t.join(",")
                  }
                  return null == r ? r = "center" === s ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), t = s + " " + r + (n.length > 2 ? " " + n[2] : ""), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(b, "")), e.oy = parseFloat(r.replace(b, "")), e.v = t), e || t
               },
               ht = function(t, e) {
                  return "function" == typeof t && (t = t(_, v)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
               },
               ct = function(t, e) {
                  return "function" == typeof t && (t = t(_, v)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
               },
               ut = function(t, e, i, n) {
                  var s, r, a, o, l;
                  return "function" == typeof t && (t = t(_, v)), null == t ? o = e : "number" == typeof t ? o = t : (s = 360, r = t.split("_"), l = "=" === t.charAt(1), a = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(r[0].substr(2)) : parseFloat(r[0])) * (-1 === t.indexOf("rad") ? 1 : I) - (l ? 0 : e), r.length && (n && (n[i] = e + a), -1 !== t.indexOf("short") && (a %= s) !== a % (s / 2) && (a = a < 0 ? a + s : a - s), -1 !== t.indexOf("_cw") && a < 0 ? a = (a + 9999999999 * s) % s - (a / s | 0) * s : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * s) % s - (a / s | 0) * s)), o = e + a), o < 1e-6 && o > -1e-6 && (o = 0), o
               },
               dt = {
                  aqua: [0, 255, 255],
                  lime: [0, 255, 0],
                  silver: [192, 192, 192],
                  black: [0, 0, 0],
                  maroon: [128, 0, 0],
                  teal: [0, 128, 128],
                  blue: [0, 0, 255],
                  navy: [0, 0, 128],
                  white: [255, 255, 255],
                  fuchsia: [255, 0, 255],
                  olive: [128, 128, 0],
                  yellow: [255, 255, 0],
                  orange: [255, 165, 0],
                  gray: [128, 128, 128],
                  purple: [128, 0, 128],
                  green: [0, 128, 0],
                  red: [255, 0, 0],
                  pink: [255, 192, 203],
                  cyan: [0, 255, 255],
                  transparent: [255, 255, 255, 0]
               },
               pt = function(t, e, i) {
                  return t = t < 0 ? t + 1 : t > 1 ? t - 1 : t, 255 * (6 * t < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
               },
               ft = o.parseColor = function(t, e) {
                  var i, n, s, r, a, o, l, h, c, u, d;
                  if (t) if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                  else {
                     if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), dt[t]) i = dt[t];
                     else if ("#" === t.charAt(0)) 4 === t.length && (n = t.charAt(1), s = t.charAt(2), r = t.charAt(3), t = "#" + n + n + s + s + r + r), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t];
                     else if ("hsl" === t.substr(0, 3)) if (i = d = t.match(y), e) {
                        if (-1 !== t.indexOf("=")) return t.match(x)
                     } else a = Number(i[0]) % 360 / 360, o = Number(i[1]) / 100, l = Number(i[2]) / 100, s = l <= .5 ? l * (o + 1) : l + o - l * o, n = 2 * l - s, i.length > 3 && (i[3] = Number(i[3])), i[0] = pt(a + 1 / 3, n, s), i[1] = pt(a, n, s), i[2] = pt(a - 1 / 3, n, s);
                     else i = t.match(y) || dt.transparent;
                     i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                  } else i = dt.black;
                  return e && !d && (n = i[0] / 255, s = i[1] / 255, r = i[2] / 255, h = Math.max(n, s, r), c = Math.min(n, s, r), l = (h + c) / 2, h === c ? a = o = 0 : (u = h - c, o = l > .5 ? u / (2 - h - c) : u / (h + c), a = h === n ? (s - r) / u + (s < r ? 6 : 0) : h === s ? (r - n) / u + 2 : (n - s) / u + 4, a *= 60), i[0] = a + .5 | 0, i[1] = 100 * o + .5 | 0, i[2] = 100 * l + .5 | 0), i
               },
               mt = function(t, e) {
                  var i, n, s, r = t.match(gt) || [],
                     a = 0,
                     o = "";
                  if (!r.length) return t;
                  for (i = 0; i < r.length; i++) n = r[i], s = t.substr(a, t.indexOf(n, a) - a), a += s.length + n.length, n = ft(n, e), 3 === n.length && n.push(1), o += s + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                  return o + t.substr(a)
               },
               gt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (c in dt) gt += "|" + c + "\\b";
            gt = new RegExp(gt + ")", "gi"), o.colorStringFilter = function(t) {
               var e, i = t[0] + " " + t[1];
               gt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = mt(t[0], e), t[1] = mt(t[1], e)), gt.lastIndex = 0
            }, e.defaultStringFilter || (e.defaultStringFilter = o.colorStringFilter);
            var vt = function(t, e, i, n) {
                  if (null == t) return function(t) {
                     return t
                  };
                  var s, r = e ? (t.match(gt) || [""])[0] : "",
                     a = t.split(r).join("").match(w) || [],
                     o = t.substr(0, t.indexOf(a[0])),
                     l = ")" === t.charAt(t.length - 1) ? ")" : "",
                     h = -1 !== t.indexOf(" ") ? " " : ",",
                     c = a.length,
                     u = c > 0 ? a[0].replace(y, "") : "";
                  return c ? s = e ?
                  function(t) {
                     var e, d, p, f;
                     if ("number" == typeof t) t += u;
                     else if (n && F.test(t)) {
                        for (f = t.replace(F, "|").split("|"), p = 0; p < f.length; p++) f[p] = s(f[p]);
                        return f.join(",")
                     }
                     if (e = (t.match(gt) || [r])[0], d = t.split(e).join("").match(w) || [], p = d.length, c > p--) for (; ++p < c;) d[p] = i ? d[(p - 1) / 2 | 0] : a[p];
                     return o + d.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                  } : function(t) {
                     var e, r, d;
                     if ("number" == typeof t) t += u;
                     else if (n && F.test(t)) {
                        for (r = t.replace(F, "|").split("|"), d = 0; d < r.length; d++) r[d] = s(r[d]);
                        return r.join(",")
                     }
                     if (e = t.match(w) || [], d = e.length, c > d--) for (; ++d < c;) e[d] = i ? e[(d - 1) / 2 | 0] : a[d];
                     return o + e.join(h) + l
                  } : function(t) {
                     return t
                  }
               },
               _t = function(t) {
                  return t = t.split(","), function(e, i, n, s, r, a, o) {
                     var l, h = (i + "").split(" ");
                     for (o = {}, l = 0; l < 4; l++) o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                     return s.parse(e, o, r, a)
                  }
               },
               yt = (U._setPluginRatio = function(t) {
                  this.plugin.setRatio(t);
                  for (var e, i, n, s, r, a = this.data, o = a.proxy, l = a.firstMPT; l;) e = o[l.v], l.r ? e = Math.round(e) : e < 1e-6 && e > -1e-6 && (e = 0), l.t[l.p] = e, l = l._next;
                  if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod(o.rotation, this.t) : o.rotation), 1 === t || 0 === t) for (l = a.firstMPT, r = 1 === t ? "e" : "b"; l;) {
                     if (i = l.t, i.type) {
                        if (1 === i.type) {
                           for (s = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) s += i["xn" + n] + i["xs" + (n + 1)];
                           i[r] = s
                        }
                     } else i[r] = i.s + i.xs0;
                     l = l._next
                  }
               }, function(t, e, i, n, s) {
                  this.t = t, this.p = e, this.v = i, this.r = s, n && (n._prev = this, this._next = n)
               }),
               xt = (U._parseToProxy = function(t, e, i, n, s, r) {
                  var a, o, l, h, c, u = n,
                     d = {},
                     p = {},
                     f = i._transform,
                     m = N;
                  for (i._transform = null, N = e, n = c = i.parse(t, e, n, s), N = m, r && (i._transform = f, u && (u._prev = null, u._prev && (u._prev._next = null))); n && n !== u;) {
                     if (n.type <= 1 && (o = n.p, p[o] = n.s + n.c, d[o] = n.s, r || (h = new yt(n, "s", o, h, n.r), n.c = 0), 1 === n.type)) for (a = n.l; --a > 0;) l = "xn" + a, o = n.p + "_" + l, p[o] = n.data[l], d[o] = n[l], r || (h = new yt(n, l, o, h, n.rxp[l]));
                     n = n._next
                  }
                  return {
                     proxy: d,
                     end: p,
                     firstMPT: h,
                     pt: c
                  }
               }, U.CSSPropTween = function(t, e, n, s, r, o, l, h, c, u, d) {
                  this.t = t, this.p = e, this.s = n, this.c = s, this.n = l || e, t instanceof xt || a.push(this.n), this.r = h, this.type = o || 0, c && (this.pr = c, i = !0), this.b = void 0 === u ? n : u, this.e = void 0 === d ? n + s : d, r && (this._next = r, r._prev = this)
               }),
               wt = function(t, e, i, n, s, r) {
                  var a = new xt(t, e, i, n - i, s, -1, r);
                  return a.b = i, a.e = a.xs0 = n, a
               },
               bt = o.parseComplex = function(t, e, i, n, s, r, a, l, h, c) {
                  i = i || r || "", "function" == typeof n && (n = n(_, v)), a = new xt(t, e, 0, 0, a, c ? 2 : 1, null, !1, l, i, n), n += "", s && gt.test(n + i) && (n = [i, n], o.colorStringFilter(n), i = n[0], n = n[1]);
                  var d, p, f, m, g, w, b, T, k, S, C, E, P, M = i.split(", ").join(",").split(" "),
                     O = n.split(", ").join(",").split(" "),
                     R = M.length,
                     A = !1 !== u;
                  for (-1 === n.indexOf(",") && -1 === i.indexOf(",") || (-1 !== (n + i).indexOf("rgb") || -1 !== (n + i).indexOf("hsl") ? (M = M.join(" ").replace(F, ", ").split(" "), O = O.join(" ").replace(F, ", ").split(" ")) : (M = M.join(" ").split(",").join(", ").split(" "), O = O.join(" ").split(",").join(", ").split(" ")), R = M.length), R !== O.length && (M = (r || "").split(" "), R = M.length), a.plugin = h, a.setRatio = c, gt.lastIndex = 0, d = 0; d < R; d++) if (m = M[d], g = O[d], (T = parseFloat(m)) || 0 === T) a.appendXtra("", T, ht(g, T), g.replace(x, ""), A && -1 !== g.indexOf("px"), !0);
                  else if (s && gt.test(m)) E = g.indexOf(")") + 1, E = ")" + (E ? g.substr(E) : ""), P = -1 !== g.indexOf("hsl") && Y, S = g, m = ft(m, P), g = ft(g, P), k = m.length + g.length > 6, k && !Y && 0 === g[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(O[d]).join("transparent")) : (Y || (k = !1), P ? a.appendXtra(S.substr(0, S.indexOf("hsl")) + (k ? "hsla(" : "hsl("), m[0], ht(g[0], m[0]), ",", !1, !0).appendXtra("", m[1], ht(g[1], m[1]), "%,", !1).appendXtra("", m[2], ht(g[2], m[2]), k ? "%," : "%" + E, !1) : a.appendXtra(S.substr(0, S.indexOf("rgb")) + (k ? "rgba(" : "rgb("), m[0], g[0] - m[0], ",", !0, !0).appendXtra("", m[1], g[1] - m[1], ",", !0).appendXtra("", m[2], g[2] - m[2], k ? "," : E, !0), k && (m = m.length < 4 ? 1 : m[3], a.appendXtra("", m, (g.length < 4 ? 1 : g[3]) - m, E, !1))), gt.lastIndex = 0;
                  else if (w = m.match(y)) {
                     if (!(b = g.match(x)) || b.length !== w.length) return a;
                     for (f = 0, p = 0; p < w.length; p++) C = w[p], S = m.indexOf(C, f), a.appendXtra(m.substr(f, S - f), Number(C), ht(b[p], C), "", A && "px" === m.substr(S + C.length, 2), 0 === p), f = S + C.length;
                     a["xs" + a.l] += m.substr(f)
                  } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + g : g;
                  if (-1 !== n.indexOf("=") && a.data) {
                     for (E = a.xs0 + a.data.s, d = 1; d < a.l; d++) E += a["xs" + d] + a.data["xn" + d];
                     a.e = E + a["xs" + d]
                  }
                  return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
               },
               Tt = 9;
            for (c = xt.prototype, c.l = c.pr = 0; --Tt > 0;) c["xn" + Tt] = 0, c["xs" + Tt] = "";
            c.xs0 = "", c._next = c._prev = c.xfirst = c.data = c.plugin = c.setRatio = c.rxp = null, c.appendXtra = function(t, e, i, n, s, r) {
               var a = this,
                  o = a.l;
               return a["xs" + o] += r && (o || a["xs" + o]) ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = n || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = s, a["xn" + o] = e, a.plugin || (a.xfirst = new xt(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, s, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                  s: e + i
               }, a.rxp = {}, a.s = e, a.c = i, a.r = s, a)) : (a["xs" + o] += e + (n || ""), a)
            };
            var kt = function(t, e) {
                  e = e || {}, this.p = e.prefix ? Z(t) || t : t, h[t] = h[this.p] = this, this.format = e.formatter || vt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
               },
               St = U._registerComplexSpecialProp = function(t, e, i) {
                  "object" != typeof e && (e = {
                     parser: i
                  });
                  var n, s = t.split(","),
                     r = e.defaultValue;
                  for (i = i || [r], n = 0; n < s.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || r, new kt(s[n], e)
               },
               Ct = U._registerPluginProp = function(t) {
                  if (!h[t]) {
                     var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                     St(t, {
                        parser: function(t, i, n, s, r, a, o) {
                           var c = l.com.greensock.plugins[e];
                           return c ? (c._cssRegister(), h[n].parse(t, i, n, s, r, a, o)) : (G("Error: " + e + " js file not loaded."), r)
                        }
                     })
                  }
               };
            c = kt.prototype, c.parseComplex = function(t, e, i, n, s, r) {
               var a, o, l, h, c, u, d = this.keyword;
               if (this.multi && (F.test(i) || F.test(e) ? (o = e.replace(F, "|").split("|"), l = i.replace(F, "|").split("|")) : d && (o = [e], l = [i])), l) {
                  for (h = l.length > o.length ? l.length : o.length, a = 0; a < h; a++) e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, d && (c = e.indexOf(d), u = i.indexOf(d), c !== u && (-1 === u ? o[a] = o[a].split(d).join("") : -1 === c && (o[a] += " " + d)));
                  e = o.join(", "), i = l.join(", ")
               }
               return bt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, s, r)
            }, c.parse = function(t, e, i, n, r, a, o) {
               return this.parseComplex(t.style, this.format(tt(t, this.p, s, !1, this.dflt)), this.format(e), r, a)
            }, o.registerSpecialProp = function(t, e, i) {
               St(t, {
                  parser: function(t, n, s, r, a, o, l) {
                     var h = new xt(t, s, 0, 0, a, 2, s, !1, i);
                     return h.plugin = o, h.setRatio = e(t, n, r._tween, s), h
                  },
                  priority: i
               })
            }, o.useSVGTransformAttr = !0;
            var Et, Pt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
               Mt = Z("transform"),
               Ot = K + "transform",
               Rt = Z("transformOrigin"),
               At = null !== Z("perspective"),
               jt = U.Transform = function() {
                  this.perspective = parseFloat(o.defaultTransformPerspective) || 0, this.force3D = !(!1 === o.defaultForce3D || !At) && (o.defaultForce3D || "auto")
               },
               Dt = r.SVGElement,
               Ft = function(t, e, i) {
                  var n, s = L.createElementNS("http://www.w3.org/2000/svg", t),
                     r = /([a-z])([A-Z])/g;
                  for (n in i) s.setAttributeNS(null, n.replace(r, "$1-$2").toLowerCase(), i[n]);
                  return e.appendChild(s), s
               },
               Ht = L.documentElement || {},
               zt = function() {
                  var t, e, i, n = g || /Android/i.test(W) && !r.chrome;
                  return L.createElementNS && !n && (t = Ft("svg", Ht), e = Ft("rect", t, {
                     width: 100,
                     height: 50,
                     x: 100
                  }), i = e.getBoundingClientRect().width, e.style[Rt] = "50% 50%", e.style[Mt] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(f && At), Ht.removeChild(t)), n
               }(),
               It = function(t, e, i, n, s, r) {
                  var a, l, h, c, u, d, p, f, m, g, v, _, y, x, w = t._gsTransform,
                     b = $t(t, !0);
                  w && (y = w.xOrigin, x = w.yOrigin), (!n || (a = n.split(" ")).length < 2) && (p = t.getBBox(), 0 === p.x && 0 === p.y && p.width + p.height === 0 && (p = {
                     x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                     y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                     width: 0,
                     height: 0
                  }), e = lt(e).split(" "), a = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * p.width : parseFloat(e[0])) + p.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * p.height : parseFloat(e[1])) + p.y]), i.xOrigin = c = parseFloat(a[0]), i.yOrigin = u = parseFloat(a[1]), n && b !== qt && (d = b[0], p = b[1], f = b[2], m = b[3], g = b[4], v = b[5], (_ = d * m - p * f) && (l = c * (m / _) + u * (-f / _) + (f * v - m * g) / _, h = c * (-p / _) + u * (d / _) - (d * v - p * g) / _, c = i.xOrigin = a[0] = l, u = i.yOrigin = a[1] = h)), w && (r && (i.xOffset = w.xOffset, i.yOffset = w.yOffset, w = i), s || !1 !== s && !1 !== o.defaultSmoothOrigin ? (l = c - y, h = u - x, w.xOffset += l * b[0] + h * b[2] - l, w.yOffset += l * b[1] + h * b[3] - h) : w.xOffset = w.yOffset = 0), r || t.setAttribute("data-svg-origin", a.join(" "))
               },
               Nt = function(t) {
                  var e, i = q("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                     n = this.parentNode,
                     s = this.nextSibling,
                     r = this.style.cssText;
                  if (Ht.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                     e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Nt
                  } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox());
                  return s ? n.insertBefore(this, s) : n.appendChild(this), Ht.removeChild(i), this.style.cssText = r, e
               },
               Bt = function(t) {
                  try {
                     return t.getBBox()
                  } catch (e) {
                     return Nt.call(t, !0)
                  }
               },
               Lt = function(t) {
                  return !(!Dt || !t.getCTM || t.parentNode && !t.ownerSVGElement || !Bt(t))
               },
               qt = [1, 0, 0, 1, 0, 0],
               $t = function(t, e) {
                  var i, n, s, r, a, o, l = t._gsTransform || new jt,
                     h = t.style;
                  if (Mt ? n = tt(t, Ot, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(j), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, !Mt || !(o = !J(t) || "none" === J(t).display) && t.parentNode || (o && (r = h.display, h.display = "block"), t.parentNode || (a = 1, Ht.appendChild(t)), n = tt(t, Ot, null, !0), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, r ? h.display = r : o && Vt(h, "display"), a && Ht.removeChild(t)), (l.svg || t.getCTM && Lt(t)) && (i && -1 !== (h[Mt] + "").indexOf("matrix") && (n = h[Mt], i = 0), s = t.getAttribute("transform"), i && s && (-1 !== s.indexOf("matrix") ? (n = s, i = 0) : -1 !== s.indexOf("translate") && (n = "matrix(1,0,0,1," + s.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return qt;
                  for (s = (n || "").match(y) || [], Tt = s.length; --Tt > -1;) r = Number(s[Tt]), s[Tt] = (a = r - (r |= 0)) ? (1e5 * a + (a < 0 ? -.5 : .5) | 0) / 1e5 + r : r;
                  return e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s
               },
               Xt = U.getTransform = function(t, i, n, s) {
                  if (t._gsTransform && n && !s) return t._gsTransform;
                  var r, a, l, h, c, u, d = n ? t._gsTransform || new jt : new jt,
                     p = d.scaleX < 0,
                     f = At ? parseFloat(tt(t, Rt, i, !1, "0 0 0").split(" ")[2]) || d.zOrigin || 0 : 0,
                     m = parseFloat(o.defaultTransformPerspective) || 0;
                  if (d.svg = !(!t.getCTM || !Lt(t)), d.svg && (It(t, tt(t, Rt, i, !1, "50% 50%") + "", d, t.getAttribute("data-svg-origin")), Et = o.useSVGTransformAttr || zt), (r = $t(t)) !== qt) {
                     if (16 === r.length) {
                        var g, v, _, y, x, w = r[0],
                           b = r[1],
                           T = r[2],
                           k = r[3],
                           S = r[4],
                           C = r[5],
                           E = r[6],
                           P = r[7],
                           M = r[8],
                           O = r[9],
                           R = r[10],
                           A = r[12],
                           j = r[13],
                           D = r[14],
                           F = r[11],
                           H = Math.atan2(E, R);
                        d.zOrigin && (D = -d.zOrigin, A = M * D - r[12], j = O * D - r[13], D = R * D + d.zOrigin - r[14]), d.rotationX = H * I, H && (y = Math.cos(-H), x = Math.sin(-H), g = S * y + M * x, v = C * y + O * x, _ = E * y + R * x, M = S * -x + M * y, O = C * -x + O * y, R = E * -x + R * y, F = P * -x + F * y, S = g, C = v, E = _), H = Math.atan2(-T, R), d.rotationY = H * I, H && (y = Math.cos(-H), x = Math.sin(-H), g = w * y - M * x, v = b * y - O * x, _ = T * y - R * x, O = b * x + O * y, R = T * x + R * y, F = k * x + F * y, w = g, b = v, T = _), H = Math.atan2(b, w), d.rotation = H * I, H && (y = Math.cos(H), x = Math.sin(H), g = w * y + b * x, v = S * y + C * x, _ = M * y + O * x, b = b * y - w * x, C = C * y - S * x, O = O * y - M * x, w = g, S = v, M = _), d.rotationX && Math.abs(d.rotationX) + Math.abs(d.rotation) > 359.9 && (d.rotationX = d.rotation = 0, d.rotationY = 180 - d.rotationY), H = Math.atan2(S, C), d.scaleX = (1e5 * Math.sqrt(w * w + b * b + T * T) + .5 | 0) / 1e5, d.scaleY = (1e5 * Math.sqrt(C * C + E * E) + .5 | 0) / 1e5, d.scaleZ = (1e5 * Math.sqrt(M * M + O * O + R * R) + .5 | 0) / 1e5, w /= d.scaleX, S /= d.scaleY, b /= d.scaleX, C /= d.scaleY, Math.abs(H) > 2e-5 ? (d.skewX = H * I, S = 0, "simple" !== d.skewType && (d.scaleY *= 1 / Math.cos(H))) : d.skewX = 0, d.perspective = F ? 1 / (F < 0 ? -F : F) : 0, d.x = A, d.y = j, d.z = D, d.svg && (d.x -= d.xOrigin - (d.xOrigin * w - d.yOrigin * S), d.y -= d.yOrigin - (d.yOrigin * b - d.xOrigin * C))
                     } else if (!At || s || !r.length || d.x !== r[4] || d.y !== r[5] || !d.rotationX && !d.rotationY) {
                        var z = r.length >= 6,
                           N = z ? r[0] : 1,
                           B = r[1] || 0,
                           L = r[2] || 0,
                           q = z ? r[3] : 1;
                        d.x = r[4] || 0, d.y = r[5] || 0, l = Math.sqrt(N * N + B * B), h = Math.sqrt(q * q + L * L), c = N || B ? Math.atan2(B, N) * I : d.rotation || 0, u = L || q ? Math.atan2(L, q) * I + c : d.skewX || 0, d.scaleX = l, d.scaleY = h, d.rotation = c, d.skewX = u, At && (d.rotationX = d.rotationY = d.z = 0, d.perspective = m, d.scaleZ = 1), d.svg && (d.x -= d.xOrigin - (d.xOrigin * N + d.yOrigin * L), d.y -= d.yOrigin - (d.xOrigin * B + d.yOrigin * q))
                     }
                     Math.abs(d.skewX) > 90 && Math.abs(d.skewX) < 270 && (p ? (d.scaleX *= -1, d.skewX += d.rotation <= 0 ? 180 : -180, d.rotation += d.rotation <= 0 ? 180 : -180) : (d.scaleY *= -1, d.skewX += d.skewX <= 0 ? 180 : -180)), d.zOrigin = f;
                     for (a in d) d[a] < 2e-5 && d[a] > -2e-5 && (d[a] = 0)
                  }
                  return n && (t._gsTransform = d, d.svg && (Et && t.style[Mt] ? e.delayedCall(.001, function() {
                     Vt(t.style, Mt)
                  }) : !Et && t.getAttribute("transform") && e.delayedCall(.001, function() {
                     t.removeAttribute("transform")
                  }))), d
               },
               Ut = function(t) {
                  var e, i, n = this.data,
                     s = -n.rotation * z,
                     r = s + n.skewX * z,
                     a = (Math.cos(s) * n.scaleX * 1e5 | 0) / 1e5,
                     o = (Math.sin(s) * n.scaleX * 1e5 | 0) / 1e5,
                     l = (Math.sin(r) * -n.scaleY * 1e5 | 0) / 1e5,
                     h = (Math.cos(r) * n.scaleY * 1e5 | 0) / 1e5,
                     c = this.t.style,
                     u = this.t.currentStyle;
                  if (u) {
                     i = o, o = -l, l = -i, e = u.filter, c.filter = "";
                     var d, p, f = this.t.offsetWidth,
                        m = this.t.offsetHeight,
                        v = "absolute" !== u.position,
                        _ = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + o + ", M21=" + l + ", M22=" + h,
                        y = n.x + f * n.xPercent / 100,
                        x = n.y + m * n.yPercent / 100;
                     if (null != n.ox && (d = (n.oxp ? f * n.ox * .01 : n.ox) - f / 2, p = (n.oyp ? m * n.oy * .01 : n.oy) - m / 2, y += d - (d * a + p * o), x += p - (d * l + p * h)), v ? (d = f / 2, p = m / 2, _ += ", Dx=" + (d - (d * a + p * o) + y) + ", Dy=" + (p - (d * l + p * h) + x) + ")") : _ += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? c.filter = e.replace(D, _) : c.filter = _ + " " + e, 0 !== t && 1 !== t || 1 === a && 0 === o && 0 === l && 1 === h && (v && -1 === _.indexOf("Dx=0, Dy=0") || k.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && c.removeAttribute("filter")), !v) {
                        var w, b, S, C = g < 8 ? 1 : -1;
                        for (d = n.ieOffsetX || 0, p = n.ieOffsetY || 0, n.ieOffsetX = Math.round((f - ((a < 0 ? -a : a) * f + (o < 0 ? -o : o) * m)) / 2 + y), n.ieOffsetY = Math.round((m - ((h < 0 ? -h : h) * m + (l < 0 ? -l : l) * f)) / 2 + x), Tt = 0; Tt < 4; Tt++) b = at[Tt], w = u[b], i = -1 !== w.indexOf("px") ? parseFloat(w) : et(this.t, b, parseFloat(w), w.replace(T, "")) || 0, S = i !== n[b] ? Tt < 2 ? -n.ieOffsetX : -n.ieOffsetY : Tt < 2 ? d - n.ieOffsetX : p - n.ieOffsetY, c[b] = (n[b] = Math.round(i - S * (0 === Tt || 2 === Tt ? 1 : C))) + "px"
                     }
                  }
               },
               Wt = U.set3DTransformRatio = U.setTransformRatio = function(t) {
                  var e, i, n, s, r, a, o, l, h, c, u, d, p, m, g, v, _, y, x, w, b, T, k, S = this.data,
                     C = this.t.style,
                     E = S.rotation,
                     P = S.rotationX,
                     M = S.rotationY,
                     O = S.scaleX,
                     R = S.scaleY,
                     A = S.scaleZ,
                     j = S.x,
                     D = S.y,
                     F = S.z,
                     H = S.svg,
                     I = S.perspective,
                     N = S.force3D,
                     B = S.skewY,
                     L = S.skewX;
                  if (B && (L += B, E += B), ((1 === t || 0 === t) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !N) && !F && !I && !M && !P && 1 === A || Et && H || !At) return void(E || L || H ? (E *= z, T = L * z, k = 1e5, i = Math.cos(E) * O, r = Math.sin(E) * O, n = Math.sin(E - T) * -R, a = Math.cos(E - T) * R, T && "simple" === S.skewType && (e = Math.tan(T - B * z), e = Math.sqrt(1 + e * e), n *= e, a *= e, B && (e = Math.tan(B * z), e = Math.sqrt(1 + e * e), i *= e, r *= e)), H && (j += S.xOrigin - (S.xOrigin * i + S.yOrigin * n) + S.xOffset, D += S.yOrigin - (S.xOrigin * r + S.yOrigin * a) + S.yOffset, Et && (S.xPercent || S.yPercent) && (g = this.t.getBBox(), j += .01 * S.xPercent * g.width, D += .01 * S.yPercent * g.height), g = 1e-6, j < g && j > -g && (j = 0), D < g && D > -g && (D = 0)), x = (i * k | 0) / k + "," + (r * k | 0) / k + "," + (n * k | 0) / k + "," + (a * k | 0) / k + "," + j + "," + D + ")", H && Et ? this.t.setAttribute("transform", "matrix(" + x) : C[Mt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + x) : C[Mt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + O + ",0,0," + R + "," + j + "," + D + ")");
                  if (f && (g = 1e-4, O < g && O > -g && (O = A = 2e-5), R < g && R > -g && (R = A = 2e-5), !I || S.z || S.rotationX || S.rotationY || (I = 0)), E || L) E *= z, v = i = Math.cos(E), _ = r = Math.sin(E), L && (E -= L * z, v = Math.cos(E), _ = Math.sin(E), "simple" === S.skewType && (e = Math.tan((L - B) * z), e = Math.sqrt(1 + e * e), v *= e, _ *= e, S.skewY && (e = Math.tan(B * z), e = Math.sqrt(1 + e * e), i *= e, r *= e))), n = -_, a = v;
                  else {
                     if (!(M || P || 1 !== A || I || H)) return void(C[Mt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + j + "px," + D + "px," + F + "px)" + (1 !== O || 1 !== R ? " scale(" + O + "," + R + ")" : ""));
                     i = a = 1, n = r = 0
                  }
                  c = 1, s = o = l = h = u = d = 0, p = I ? -1 / I : 0, m = S.zOrigin, g = 1e-6, w = ",", b = "0", E = M * z, E && (v = Math.cos(E), _ = Math.sin(E), l = -_, u = p * -_, s = i * _, o = r * _, c = v, p *= v, i *= v, r *= v), E = P * z, E && (v = Math.cos(E), _ = Math.sin(E), e = n * v + s * _, y = a * v + o * _, h = c * _, d = p * _, s = n * -_ + s * v, o = a * -_ + o * v, c *= v, p *= v, n = e, a = y), 1 !== A && (s *= A, o *= A, c *= A, p *= A), 1 !== R && (n *= R, a *= R, h *= R, d *= R), 1 !== O && (i *= O, r *= O, l *= O, u *= O), (m || H) && (m && (j += s * -m, D += o * -m, F += c * -m + m), H && (j += S.xOrigin - (S.xOrigin * i + S.yOrigin * n) + S.xOffset, D += S.yOrigin - (S.xOrigin * r + S.yOrigin * a) + S.yOffset), j < g && j > -g && (j = b), D < g && D > -g && (D = b), F < g && F > -g && (F = 0)), x = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(", x += (i < g && i > -g ? b : i) + w + (r < g && r > -g ? b : r) + w + (l < g && l > -g ? b : l), x += w + (u < g && u > -g ? b : u) + w + (n < g && n > -g ? b : n) + w + (a < g && a > -g ? b : a), P || M || 1 !== A ? (x += w + (h < g && h > -g ? b : h) + w + (d < g && d > -g ? b : d) + w + (s < g && s > -g ? b : s), x += w + (o < g && o > -g ? b : o) + w + (c < g && c > -g ? b : c) + w + (p < g && p > -g ? b : p) + w) : x += ",0,0,0,0,1,0,", x += j + w + D + w + F + w + (I ? 1 + -F / I : 1) + ")", C[Mt] = x
               };
            c = jt.prototype, c.x = c.y = c.z = c.skewX = c.skewY = c.rotation = c.rotationX = c.rotationY = c.zOrigin = c.xPercent = c.yPercent = c.xOffset = c.yOffset = 0, c.scaleX = c.scaleY = c.scaleZ = 1, St("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
               parser: function(t, e, i, n, r, a, l) {
                  if (n._lastParsedTransform === l) return r;
                  n._lastParsedTransform = l;
                  var h, c = l.scale && "function" == typeof l.scale ? l.scale : 0;
                  "function" == typeof l[i] && (h = l[i], l[i] = e), c && (l.scale = c(_, t));
                  var u, d, p, f, m, g, y, x, w, b = t._gsTransform,
                     T = t.style,
                     k = Pt.length,
                     S = l,
                     C = {},
                     E = Xt(t, s, !0, S.parseTransform),
                     P = S.transform && ("function" == typeof S.transform ? S.transform(_, v) : S.transform);
                  if (E.skewType = S.skewType || E.skewType || o.defaultSkewType, n._transform = E, P && "string" == typeof P && Mt) d = $.style, d[Mt] = P, d.display = "block", d.position = "absolute", L.body.appendChild($), u = Xt($, null, !1), "simple" === E.skewType && (u.scaleY *= Math.cos(u.skewX * z)), E.svg && (g = E.xOrigin, y = E.yOrigin, u.x -= E.xOffset, u.y -= E.yOffset, (S.transformOrigin || S.svgOrigin) && (P = {}, It(t, lt(S.transformOrigin), P, S.svgOrigin, S.smoothOrigin, !0), g = P.xOrigin, y = P.yOrigin, u.x -= P.xOffset - E.xOffset, u.y -= P.yOffset - E.yOffset), (g || y) && (x = $t($, !0), u.x -= g - (g * x[0] + y * x[2]), u.y -= y - (g * x[1] + y * x[3]))), L.body.removeChild($), u.perspective || (u.perspective = E.perspective), null != S.xPercent && (u.xPercent = ct(S.xPercent, E.xPercent)), null != S.yPercent && (u.yPercent = ct(S.yPercent, E.yPercent));
                  else if ("object" == typeof S) {
                     if (u = {
                        scaleX: ct(null != S.scaleX ? S.scaleX : S.scale, E.scaleX),
                        scaleY: ct(null != S.scaleY ? S.scaleY : S.scale, E.scaleY),
                        scaleZ: ct(S.scaleZ, E.scaleZ),
                        x: ct(S.x, E.x),
                        y: ct(S.y, E.y),
                        z: ct(S.z, E.z),
                        xPercent: ct(S.xPercent, E.xPercent),
                        yPercent: ct(S.yPercent, E.yPercent),
                        perspective: ct(S.transformPerspective, E.perspective)
                     }, null != (m = S.directionalRotation)) if ("object" == typeof m) for (d in m) S[d] = m[d];
                     else S.rotation = m;
                     "string" == typeof S.x && -1 !== S.x.indexOf("%") && (u.x = 0, u.xPercent = ct(S.x, E.xPercent)), "string" == typeof S.y && -1 !== S.y.indexOf("%") && (u.y = 0, u.yPercent = ct(S.y, E.yPercent)), u.rotation = ut("rotation" in S ? S.rotation : "shortRotation" in S ? S.shortRotation + "_short" : "rotationZ" in S ? S.rotationZ : E.rotation, E.rotation, "rotation", C), At && (u.rotationX = ut("rotationX" in S ? S.rotationX : "shortRotationX" in S ? S.shortRotationX + "_short" : E.rotationX || 0, E.rotationX, "rotationX", C), u.rotationY = ut("rotationY" in S ? S.rotationY : "shortRotationY" in S ? S.shortRotationY + "_short" : E.rotationY || 0, E.rotationY, "rotationY", C)), u.skewX = ut(S.skewX, E.skewX), u.skewY = ut(S.skewY, E.skewY)
                  }
                  for (At && null != S.force3D && (E.force3D = S.force3D, f = !0), p = E.force3D || E.z || E.rotationX || E.rotationY || u.z || u.rotationX || u.rotationY || u.perspective, p || null == S.scale || (u.scaleZ = 1); --k > -1;) w = Pt[k], ((P = u[w] - E[w]) > 1e-6 || P < -1e-6 || null != S[w] || null != N[w]) && (f = !0, r = new xt(E, w, E[w], P, r), w in C && (r.e = C[w]), r.xs0 = 0, r.plugin = a, n._overwriteProps.push(r.n));
                  return P = S.transformOrigin, E.svg && (P || S.svgOrigin) && (g = E.xOffset, y = E.yOffset, It(t, lt(P), u, S.svgOrigin, S.smoothOrigin), r = wt(E, "xOrigin", (b ? E : u).xOrigin, u.xOrigin, r, "transformOrigin"), r = wt(E, "yOrigin", (b ? E : u).yOrigin, u.yOrigin, r, "transformOrigin"), g === E.xOffset && y === E.yOffset || (r = wt(E, "xOffset", b ? g : E.xOffset, E.xOffset, r, "transformOrigin"), r = wt(E, "yOffset", b ? y : E.yOffset, E.yOffset, r, "transformOrigin")), P = "0px 0px"), (P || At && p && E.zOrigin) && (Mt ? (f = !0, w = Rt, P = (P || tt(t, w, s, !1, "50% 50%")) + "", r = new xt(T, w, 0, 0, r, -1, "transformOrigin"), r.b = T[w], r.plugin = a, At ? (d = E.zOrigin, P = P.split(" "), E.zOrigin = (P.length > 2 && (0 === d || "0px" !== P[2]) ? parseFloat(P[2]) : d) || 0, r.xs0 = r.e = P[0] + " " + (P[1] || "50%") + " 0px", r = new xt(E, "zOrigin", 0, 0, r, -1, r.n), r.b = d, r.xs0 = r.e = E.zOrigin) : r.xs0 = r.e = P) : lt(P + "", E)), f && (n._transformType = E.svg && Et || !p && 3 !== this._transformType ? 2 : 3), h && (l[i] = h), c && (l.scale = c), r
               },
               prefix: !0
            }), St("boxShadow", {
               defaultValue: "0px 0px 0px 0px #999",
               prefix: !0,
               color: !0,
               multi: !0,
               keyword: "inset"
            }), St("borderRadius", {
               defaultValue: "0px",
               parser: function(t, e, i, r, a, o) {
                  e = this.format(e);
                  var l, h, c, u, d, p, f, m, g, v, _, y, x, w, b, T, k = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                     S = t.style;
                  for (g = parseFloat(t.offsetWidth), v = parseFloat(t.offsetHeight), l = e.split(" "), h = 0; h < k.length; h++) this.p.indexOf("border") && (k[h] = Z(k[h])), d = u = tt(t, k[h], s, !1, "0px"), -1 !== d.indexOf(" ") && (u = d.split(" "), d = u[0], u = u[1]), p = c = l[h], f = parseFloat(d), y = d.substr((f + "").length), x = "=" === p.charAt(1), x ? (m = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), m *= parseFloat(p), _ = p.substr((m + "").length - (m < 0 ? 1 : 0)) || "") : (m = parseFloat(p), _ = p.substr((m + "").length)), "" === _ && (_ = n[i] || y), _ !== y && (w = et(t, "borderLeft", f, y), b = et(t, "borderTop", f, y), "%" === _ ? (d = w / g * 100 + "%", u = b / v * 100 + "%") : "em" === _ ? (T = et(t, "borderLeft", 1, "em"), d = w / T + "em", u = b / T + "em") : (d = w + "px", u = b + "px"), x && (p = parseFloat(d) + m + _, c = parseFloat(u) + m + _)), a = bt(S, k[h], d + " " + u, p + " " + c, !1, "0px", a);
                  return a
               },
               prefix: !0,
               formatter: vt("0px 0px 0px 0px", !1, !0)
            }), St("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
               defaultValue: "0px",
               parser: function(t, e, i, n, r, a) {
                  return bt(t.style, i, this.format(tt(t, i, s, !1, "0px 0px")), this.format(e), !1, "0px", r)
               },
               prefix: !0,
               formatter: vt("0px 0px", !1, !0)
            }), St("backgroundPosition", {
               defaultValue: "0 0",
               parser: function(t, e, i, n, r, a) {
                  var o, l, h, c, u, d, p = "background-position",
                     f = s || J(t, null),
                     m = this.format((f ? g ? f.getPropertyValue(p + "-x") + " " + f.getPropertyValue(p + "-y") : f.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                     v = this.format(e);
                  if (-1 !== m.indexOf("%") != (-1 !== v.indexOf("%")) && v.split(",").length < 2 && (d = tt(t, "backgroundImage").replace(O, "")) && "none" !== d) {
                     for (o = m.split(" "), l = v.split(" "), X.setAttribute("src", d), h = 2; --h > -1;) m = o[h], (c = -1 !== m.indexOf("%")) !== (-1 !== l[h].indexOf("%")) && (u = 0 === h ? t.offsetWidth - X.width : t.offsetHeight - X.height, o[h] = c ? parseFloat(m) / 100 * u + "px" : parseFloat(m) / u * 100 + "%");
                     m = o.join(" ")
                  }
                  return this.parseComplex(t.style, m, v, r, a)
               },
               formatter: lt
            }), St("backgroundSize", {
               defaultValue: "0 0",
               formatter: function(t) {
                  return t += "", lt(-1 === t.indexOf(" ") ? t + " " + t : t)
               }
            }), St("perspective", {
               defaultValue: "0px",
               prefix: !0
            }), St("perspectiveOrigin", {
               defaultValue: "50% 50%",
               prefix: !0
            }), St("transformStyle", {
               prefix: !0
            }), St("backfaceVisibility", {
               prefix: !0
            }), St("userSelect", {
               prefix: !0
            }), St("margin", {
               parser: _t("marginTop,marginRight,marginBottom,marginLeft")
            }), St("padding", {
               parser: _t("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), St("clip", {
               defaultValue: "rect(0px,0px,0px,0px)",
               parser: function(t, e, i, n, r, a) {
                  var o, l, h;
                  return g < 9 ? (l = t.currentStyle, h = g < 8 ? " " : ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format(tt(t, this.p, s, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, r, a)
               }
            }), St("textShadow", {
               defaultValue: "0px 0px 0px #999",
               color: !0,
               multi: !0
            }), St("autoRound,strictUnits", {
               parser: function(t, e, i, n, s) {
                  return s
               }
            }), St("border", {
               defaultValue: "0px solid #000",
               parser: function(t, e, i, n, r, a) {
                  var o = tt(t, "borderTopWidth", s, !1, "0px"),
                     l = this.format(e).split(" "),
                     h = l[0].replace(T, "");
                  return "px" !== h && (o = parseFloat(o) / et(t, "borderTopWidth", 1, h) + h), this.parseComplex(t.style, this.format(o + " " + tt(t, "borderTopStyle", s, !1, "solid") + " " + tt(t, "borderTopColor", s, !1, "#000")), l.join(" "), r, a)
               },
               color: !0,
               formatter: function(t) {
                  var e = t.split(" ");
                  return e[0] + " " + (e[1] || "solid") + " " + (t.match(gt) || ["#000"])[0]
               }
            }), St("borderWidth", {
               parser: _t("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), St("float,cssFloat,styleFloat", {
               parser: function(t, e, i, n, s, r) {
                  var a = t.style,
                     o = "cssFloat" in a ? "cssFloat" : "styleFloat";
                  return new xt(a, o, 0, 0, s, -1, i, !1, 0, a[o], e)
               }
            });
            var Yt = function(t) {
                  var e, i = this.t,
                     n = i.filter || tt(this.data, "filter") || "",
                     s = this.s + this.c * t | 0;
                  100 === s && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !tt(this.data, "filter")) : (i.filter = n.replace(C, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + s + ")"), -1 === n.indexOf("pacity") ? 0 === s && this.xn1 || (i.filter = n + " alpha(opacity=" + s + ")") : i.filter = n.replace(k, "opacity=" + s))
               };
            St("opacity,alpha,autoAlpha", {
               defaultValue: "1",
               parser: function(t, e, i, n, r, a) {
                  var o = parseFloat(tt(t, "opacity", s, !1, "1")),
                     l = t.style,
                     h = "autoAlpha" === i;
                  return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), h && 1 === o && "hidden" === tt(t, "visibility", s) && 0 !== e && (o = 0), Y ? r = new xt(l, "opacity", o, e - o, r) : (r = new xt(l, "opacity", 100 * o, 100 * (e - o), r), r.xn1 = h ? 1 : 0, l.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = a, r.setRatio = Yt), h && (r = new xt(l, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), r.xs0 = "inherit", n._overwriteProps.push(r.n), n._overwriteProps.push(i)), r
               }
            });
            var Vt = function(t, e) {
                  e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(P, "-$1").toLowerCase())) : t.removeAttribute(e))
               },
               Gt = function(t) {
                  if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                     this.t.setAttribute("class", 0 === t ? this.b : this.e);
                     for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Vt(i, e.p), e = e._next;
                     1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                  } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
               };
            St("className", {
               parser: function(t, e, n, r, a, o, l) {
                  var h, c, u, d, p, f = t.getAttribute("class") || "",
                     m = t.style.cssText;
                  if (a = r._classNamePT = new xt(t, n, 0, 0, a, 2), a.setRatio = Gt, a.pr = -11, i = !0, a.b = f, c = nt(t, s), u = t._gsClassPT) {
                     for (d = {}, p = u.data; p;) d[p.p] = 1, p = p._next;
                     u.setRatio(1)
                  }
                  return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : f.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", a.e), h = st(t, c, nt(t), l, d), t.setAttribute("class", f), a.data = h.firstMPT, t.style.cssText = m, a = a.xfirst = r.parse(t, h.difs, a, o)
               }
            });
            var Kt = function(t) {
                  if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                     var e, i, n, s, r, a = this.t.style,
                        o = h.transform.parse;
                     if ("all" === this.e) a.cssText = "", s = !0;
                     else for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], h[i] && (h[i].parse === o ? s = !0 : i = "transformOrigin" === i ? Rt : h[i].p), Vt(a, i);
                     s && (Vt(a, Mt), (r = this.t._gsTransform) && (r.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                  }
               };
            for (St("clearProps", {
               parser: function(t, e, n, s, r) {
                  return r = new xt(t, n, 0, 0, r, 2), r.setRatio = Kt, r.e = e, r.pr = -10, r.data = s._tween, i = !0, r
               }
            }), c = "bezier,throwProps,physicsProps,physics2D".split(","), Tt = c.length; Tt--;) Ct(c[Tt]);
            c = o.prototype, c._firstPT = c._lastParsedTransform = c._transform = null, c._onInitTween = function(t, e, r, l) {
               if (!t.nodeType) return !1;
               this._target = v = t, this._tween = r, this._vars = e, _ = l, u = e.autoRound, i = !1, n = e.suffixMap || o.suffixMap, s = J(t, ""), a = this._overwriteProps;
               var c, f, g, y, x, w, b, T, k, C = t.style;
               if (d && "" === C.zIndex && ("auto" !== (c = tt(t, "zIndex", s)) && "" !== c || this._addLazySet(C, "zIndex", 0)), "string" == typeof e && (y = C.cssText, c = nt(t, s), C.cssText = y + ";" + e, c = st(t, c, nt(t)).difs, !Y && S.test(e) && (c.opacity = parseFloat(RegExp.$1)), e = c, C.cssText = y), e.className ? this._firstPT = f = h.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = f = this.parse(t, e, null), this._transformType) {
                  for (k = 3 === this._transformType, Mt ? p && (d = !0, "" === C.zIndex && ("auto" !== (b = tt(t, "zIndex", s)) && "" !== b || this._addLazySet(C, "zIndex", 0)), m && this._addLazySet(C, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (k ? "visible" : "hidden"))) : C.zoom = 1, g = f; g && g._next;) g = g._next;
                  T = new xt(t, "transform", 0, 0, null, 2), this._linkCSSP(T, null, g), T.setRatio = Mt ? Wt : Ut, T.data = this._transform || Xt(t, s, !0), T.tween = r, T.pr = -1, a.pop()
               }
               if (i) {
                  for (; f;) {
                     for (w = f._next, g = y; g && g.pr > f.pr;) g = g._next;
                     (f._prev = g ? g._prev : x) ? f._prev._next = f : y = f, (f._next = g) ? g._prev = f : x = f, f = w
                  }
                  this._firstPT = y
               }
               return !0
            }, c.parse = function(t, e, i, r) {
               var a, o, l, c, d, p, f, m, g, y, x = t.style;
               for (a in e) {
                  if (p = e[a], "function" == typeof p && (p = p(_, v)), o = h[a]) i = o.parse(t, p, a, this, i, r, e);
                  else {
                     if ("--" === a.substr(0, 2)) {
                        this._tween._propLookup[a] = this._addTween.call(this._tween, t.style, "setProperty", J(t).getPropertyValue(a) + "", p + "", a, !1, a);
                        continue
                     }
                     d = tt(t, a, s) + "", g = "string" == typeof p, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || g && E.test(p) ? (g || (p = ft(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = bt(x, a, d, p, !0, "transparent", i, 0, r)) : g && H.test(p) ? i = bt(x, a, d, p, !0, null, i, 0, r) : (l = parseFloat(d), f = l || 0 === l ? d.substr((l + "").length) : "", "" !== d && "auto" !== d || ("width" === a || "height" === a ? (l = ot(t, a, s), f = "px") : "left" === a || "top" === a ? (l = it(t, a, s), f = "px") : (l = "opacity" !== a ? 0 : 1, f = "")), y = g && "=" === p.charAt(1), y ? (c = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), c *= parseFloat(p), m = p.replace(T, "")) : (c = parseFloat(p), m = g ? p.replace(T, "") : ""), "" === m && (m = a in n ? n[a] : f), p = c || 0 === c ? (y ? c + l : c) + m : e[a], f !== m && ("" === m && "lineHeight" !== a || (c || 0 === c) && l && (l = et(t, a, l, f), "%" === m ? (l /= et(t, a, 100, "%") / 100, !0 !== e.strictUnits && (d = l + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? l /= et(t, a, 1, m) : "px" !== m && (c = et(t, a, c, m), m = "px"), y && (c || 0 === c) && (p = c + l + m))), y && (c += l), !l && 0 !== l || !c && 0 !== c ? void 0 !== x[a] && (p || p + "" != "NaN" && null != p) ? (i = new xt(x, a, c || l || 0, 0, i, -1, a, !1, 0, d, p), i.xs0 = "none" !== p || "display" !== a && -1 === a.indexOf("Style") ? p : d) : G("invalid " + a + " tween value: " + e[a]) : (i = new xt(x, a, l, c - l, i, 0, a, !1 !== u && ("px" === m || "zIndex" === a), 0, d, p), i.xs0 = m))
                  }
                  r && i && !i.plugin && (i.plugin = r)
               }
               return i
            }, c.setRatio = function(t) {
               var e, i, n, s = this._firstPT;
               if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime) for (; s;) {
                  if (e = s.c * t + s.s, s.r ? e = Math.round(e) : e < 1e-6 && e > -1e-6 && (e = 0), s.type) if (1 === s.type) if (2 === (n = s.l)) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;
                  else if (3 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                  else if (4 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;
                  else if (5 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;
                  else {
                     for (i = s.xs0 + e + s.xs1, n = 1; n < s.l; n++) i += s["xn" + n] + s["xs" + (n + 1)];
                     s.t[s.p] = i
                  } else - 1 === s.type ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(t);
                  else s.t[s.p] = e + s.xs0;
                  s = s._next
               } else for (; s;) 2 !== s.type ? s.t[s.p] = s.b : s.setRatio(t), s = s._next;
               else for (; s;) {
                  if (2 !== s.type) if (s.r && -1 !== s.type) if (e = Math.round(s.s + s.c), s.type) {
                     if (1 === s.type) {
                        for (n = s.l, i = s.xs0 + e + s.xs1, n = 1; n < s.l; n++) i += s["xn" + n] + s["xs" + (n + 1)];
                        s.t[s.p] = i
                     }
                  } else s.t[s.p] = e + s.xs0;
                  else s.t[s.p] = s.e;
                  else s.setRatio(t);
                  s = s._next
               }
            }, c._enableTransforms = function(t) {
               this._transform = this._transform || Xt(this._target, s, !0), this._transformType = this._transform.svg && Et || !t && 3 !== this._transformType ? 2 : 3
            };
            var Qt = function(t) {
                  this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
               };
            c._addLazySet = function(t, e, i) {
               var n = this._firstPT = new xt(t, e, 0, 0, this._firstPT, 2);
               n.e = i, n.setRatio = Qt, n.data = this
            }, c._linkCSSP = function(t, e, i, n) {
               return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
            }, c._mod = function(t) {
               for (var e = this._firstPT; e;)"function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
            }, c._kill = function(e) {
               var i, n, s, r = e;
               if (e.autoAlpha || e.alpha) {
                  r = {};
                  for (n in e) r[n] = e[n];
                  r.opacity = 1, r.autoAlpha && (r.visibility = 1)
               }
               for (e.className && (i = this._classNamePT) && (s = i.xfirst, s && s._prev ? this._linkCSSP(s._prev, i._next, s._prev._prev) : s === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, s._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(e), n = i.plugin), i = i._next;
               return t.prototype._kill.call(this, r)
            };
            var Zt = function(t, e, i) {
                  var n, s, r, a;
                  if (t.slice) for (s = t.length; --s > -1;) Zt(t[s], e, i);
                  else for (n = t.childNodes, s = n.length; --s > -1;) r = n[s], a = r.type, r.style && (e.push(nt(r)), i && i.push(r)), 1 !== a && 9 !== a && 11 !== a || !r.childNodes.length || Zt(r, e, i)
               };
            return o.cascadeTo = function(t, i, n) {
               var s, r, a, o, l = e.to(t, i, n),
                  h = [l],
                  c = [],
                  u = [],
                  d = [],
                  p = e._internals.reservedProps;
               for (t = l._targets || l.target, Zt(t, c, d), l.render(i, !0, !0), Zt(t, u), l.render(0, !0, !0), l._enabled(!0), s = d.length; --s > -1;) if (r = st(d[s], c[s], u[s]), r.firstMPT) {
                  r = r.difs;
                  for (a in n) p[a] && (r[a] = n[a]);
                  o = {};
                  for (a in r) o[a] = c[s][a];
                  h.push(e.fromTo(d[s], i, o, r))
               }
               return h
            }, t.activate([o]), o
         }, !0), function() {
            var t = r._gsDefine.plugin({
               propName: "roundProps",
               version: "1.6.0",
               priority: -1,
               API: 2,
               init: function(t, e, i) {
                  return this._tween = i, !0
               }
            }),
               e = function(t) {
                  for (; t;) t.f || t.blob || (t.m = Math.round), t = t._next
               },
               i = t.prototype;
            i._onInitAllProps = function() {
               for (var t, i, n, s = this._tween, r = s.vars.roundProps.join ? s.vars.roundProps : s.vars.roundProps.split(","), a = r.length, o = {}, l = s._propLookup.roundProps; --a > -1;) o[r[a]] = Math.round;
               for (a = r.length; --a > -1;) for (t = r[a], i = s._firstPT; i;) n = i._next, i.pg ? i.t._mod(o) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), n && (n._prev = i._prev), i._prev ? i._prev._next = n : s._firstPT === i && (s._firstPT = n), i._next = i._prev = null, s._propLookup[t] = l)), i = n;
               return !1
            }, i._add = function(t, e, i, n) {
               this._addTween(t, e, i, i + n, e, Math.round), this._overwriteProps.push(e)
            }
         }(), function() {
            r._gsDefine.plugin({
               propName: "attr",
               API: 2,
               version: "0.6.1",
               init: function(t, e, i, n) {
                  var s, r;
                  if ("function" != typeof t.setAttribute) return !1;
                  for (s in e) r = e[s], "function" == typeof r && (r = r(n, t)), this._addTween(t, "setAttribute", t.getAttribute(s) + "", r + "", s, !1, s), this._overwriteProps.push(s);
                  return !0
               }
            })
         }(), r._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.3.1",
            API: 2,
            init: function(t, e, i, n) {
               "object" != typeof e && (e = {
                  rotation: e
               }), this.finals = {};
               var s, r, a, o, l, h, c = !0 === e.useRadians ? 2 * Math.PI : 360;
               for (s in e)"useRadians" !== s && (o = e[s], "function" == typeof o && (o = o(n, t)), h = (o + "").split("_"), r = h[0], a = parseFloat("function" != typeof t[s] ? t[s] : t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]()), o = this.finals[s] = "string" == typeof r && "=" === r.charAt(1) ? a + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0, l = o - a, h.length && (r = h.join("_"), -1 !== r.indexOf("short") && (l %= c) !== l % (c / 2) && (l = l < 0 ? l + c : l - c), -1 !== r.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * c) % c - (l / c | 0) * c : -1 !== r.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * c) % c - (l / c | 0) * c)), (l > 1e-6 || l < -1e-6) && (this._addTween(t, s, a, a + l, s), this._overwriteProps.push(s)));
               return !0
            },
            set: function(t) {
               var e;
               if (1 !== t) this._super.setRatio.call(this, t);
               else for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
            }
         })._autoCSS = !0, r._gsDefine("easing.Back", ["easing.Ease"], function(t) {
            var e, i, n, s = r.GreenSockGlobals || r,
               a = s.com.greensock,
               o = 2 * Math.PI,
               l = Math.PI / 2,
               h = a._class,
               c = function(e, i) {
                  var n = h("easing." + e, function() {}, !0),
                     s = n.prototype = new t;
                  return s.constructor = n, s.getRatio = i, n
               },
               u = t.register ||
            function() {}, d = function(t, e, i, n, s) {
               var r = h("easing." + t, {
                  easeOut: new e,
                  easeIn: new i,
                  easeInOut: new n
               }, !0);
               return u(r, t), r
            }, p = function(t, e, i) {
               this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
            }, f = function(e, i) {
               var n = h("easing." + e, function(t) {
                  this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
               }, !0),
                  s = n.prototype = new t;
               return s.constructor = n, s.getRatio = i, s.config = function(t) {
                  return new n(t)
               }, n
            }, m = d("Back", f("BackOut", function(t) {
               return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
            }), f("BackIn", function(t) {
               return t * t * ((this._p1 + 1) * t - this._p1)
            }), f("BackInOut", function(t) {
               return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
            })), g = h("easing.SlowMo", function(t, e, i) {
               e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
            }, !0), v = g.prototype = new t;
            return v.constructor = g, v.getRatio = function(t) {
               var e = t + (.5 - t) * this._p;
               return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
            }, g.ease = new g(.7, .7), v.config = g.config = function(t, e, i) {
               return new g(t, e, i)
            }, e = h("easing.SteppedEase", function(t, e) {
               t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0
            }, !0), v = e.prototype = new t, v.constructor = e, v.getRatio = function(t) {
               return t < 0 ? t = 0 : t >= 1 && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1
            }, v.config = e.config = function(t, i) {
               return new e(t, i)
            }, i = h("easing.RoughEase", function(e) {
               e = e || {};
               for (var i, n, s, r, a, o, l = e.taper || "none", h = [], c = 0, u = 0 | (e.points || 20), d = u, f = !1 !== e.randomize, m = !0 === e.clamp, g = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --d > -1;) i = f ? Math.random() : 1 / u * d, n = g ? g.getRatio(i) : i, "none" === l ? s = v : "out" === l ? (r = 1 - i, s = r * r * v) : "in" === l ? s = i * i * v : i < .5 ? (r = 2 * i, s = r * r * .5 * v) : (r = 2 * (1 - i), s = r * r * .5 * v), f ? n += Math.random() * s - .5 * s : d % 2 ? n += .5 * s : n -= .5 * s, m && (n > 1 ? n = 1 : n < 0 && (n = 0)), h[c++] = {
                  x: i,
                  y: n
               };
               for (h.sort(function(t, e) {
                  return t.x - e.x
               }), o = new p(1, 1, null), d = u; --d > -1;) a = h[d], o = new p(a.x, a.y, o);
               this._prev = new p(0, 0, 0 !== o.t ? o : o.next)
            }, !0), v = i.prototype = new t, v.constructor = i, v.getRatio = function(t) {
               var e = this._prev;
               if (t > e.t) {
                  for (; e.next && t >= e.t;) e = e.next;
                  e = e.prev
               } else for (; e.prev && t <= e.t;) e = e.prev;
               return this._prev = e, e.v + (t - e.t) / e.gap * e.c
            }, v.config = function(t) {
               return new i(t)
            }, i.ease = new i, d("Bounce", c("BounceOut", function(t) {
               return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }), c("BounceIn", function(t) {
               return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
            }), c("BounceInOut", function(t) {
               var e = t < .5;
               return t = e ? 1 - 2 * t : 2 * t - 1, t < 1 / 2.75 ? t *= 7.5625 * t : t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
            })), d("Circ", c("CircOut", function(t) {
               return Math.sqrt(1 - (t -= 1) * t)
            }), c("CircIn", function(t) {
               return -(Math.sqrt(1 - t * t) - 1)
            }), c("CircInOut", function(t) {
               return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            })), n = function(e, i, n) {
               var s = h("easing." + e, function(t, e) {
                  this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (t < 1 ? t : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
               }, !0),
                  r = s.prototype = new t;
               return r.constructor = s, r.getRatio = i, r.config = function(t, e) {
                  return new s(t, e)
               }, s
            }, d("Elastic", n("ElasticOut", function(t) {
               return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
            }, .3), n("ElasticIn", function(t) {
               return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
            }, .3), n("ElasticInOut", function(t) {
               return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
            }, .45)), d("Expo", c("ExpoOut", function(t) {
               return 1 - Math.pow(2, -10 * t)
            }), c("ExpoIn", function(t) {
               return Math.pow(2, 10 * (t - 1)) - .001
            }), c("ExpoInOut", function(t) {
               return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            })), d("Sine", c("SineOut", function(t) {
               return Math.sin(t * l)
            }), c("SineIn", function(t) {
               return 1 - Math.cos(t * l)
            }), c("SineInOut", function(t) {
               return -.5 * (Math.cos(Math.PI * t) - 1)
            })), h("easing.EaseLookup", {
               find: function(e) {
                  return t.map[e]
               }
            }, !0), u(s.SlowMo, "SlowMo", "ease,"), u(i, "RoughEase", "ease,"), u(e, "SteppedEase", "ease,"), m
         }, !0)
      }), r._gsDefine && r._gsQueue.pop()(), function(i, r) {
         "use strict";
         var a = {},
            o = i.document,
            l = i.GreenSockGlobals = i.GreenSockGlobals || i;
         if (!l.TweenLite) {
            var h, c, u, d, p, f = function(t) {
                  var e, i = t.split("."),
                     n = l;
                  for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
                  return n
               },
               m = f("com.greensock"),
               g = function(t) {
                  var e, i = [],
                     n = t.length;
                  for (e = 0; e !== n; i.push(t[e++]));
                  return i
               },
               v = function() {},
               _ = function() {
                  var t = Object.prototype.toString,
                     e = t.call([]);
                  return function(i) {
                     return null != i && (i instanceof Array || "object" == typeof i && !! i.push && t.call(i) === e)
                  }
               }(),
               y = {},
               x = function(i, r, o, h) {
                  this.sc = y[i] ? y[i].sc : [], y[i] = this, this.gsClass = null, this.func = o;
                  var c = [];
                  this.check = function(u) {
                     for (var d, p, m, g, v = r.length, _ = v; --v > -1;)(d = y[r[v]] || new x(r[v], [])).gsClass ? (c[v] = d.gsClass, _--) : u && d.sc.push(this);
                     if (0 === _ && o) {
                        if (p = ("com.greensock." + i).split("."), m = p.pop(), g = f(p.join("."))[m] = this.gsClass = o.apply(o, c), h) if (l[m] = a[m] = g, void 0 !== t && t.exports) if ("TweenMax" === i) {
                           t.exports = a.TweenMax = g;
                           for (v in a) g[v] = a[v]
                        } else a.TweenMax && (a.TweenMax[m] = g);
                        else n = [], void 0 !== (s = function() {
                           return g
                        }.apply(e, n)) && (t.exports = s);
                        for (v = 0; v < this.sc.length; v++) this.sc[v].check()
                     }
                  }, this.check(!0)
               },
               w = i._gsDefine = function(t, e, i, n) {
                  return new x(t, e, i, n)
               },
               b = m._class = function(t, e, i) {
                  return e = e ||
                  function() {}, w(t, [], function() {
                     return e
                  }, i), e
               };
            w.globals = l;
            var T = [0, 0, 1, 1],
               k = b("easing.Ease", function(t, e, i, n) {
                  this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? T.concat(e) : T
               }, !0),
               S = k.map = {},
               C = k.register = function(t, e, i, n) {
                  for (var s, r, a, o, l = e.split(","), h = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;) for (r = l[h], s = n ? b("easing." + r, null, !0) : m.easing[r] || {}, a = c.length; --a > -1;) o = c[a], S[r + "." + o] = S[o + r] = s[o] = t.getRatio ? t : t[o] || new t
               };
            for (u = k.prototype, u._calcEnd = !1, u.getRatio = function(t) {
               if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
               var e = this._type,
                  i = this._power,
                  n = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
               return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : t < .5 ? n / 2 : 1 - n / 2
            }, h = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], c = h.length; --c > -1;) u = h[c] + ",Power" + c, C(new k(null, null, 1, c), u, "easeOut", !0), C(new k(null, null, 2, c), u, "easeIn" + (0 === c ? ",easeNone" : "")), C(new k(null, null, 3, c), u, "easeInOut");
            S.linear = m.easing.Linear.easeIn, S.swing = m.easing.Quad.easeInOut;
            var E = b("events.EventDispatcher", function(t) {
               this._listeners = {}, this._eventTarget = t || this
            });
            u = E.prototype, u.addEventListener = function(t, e, i, n, s) {
               s = s || 0;
               var r, a, o = this._listeners[t],
                  l = 0;
               for (this !== d || p || d.wake(), null == o && (this._listeners[t] = o = []), a = o.length; --a > -1;) r = o[a], r.c === e && r.s === i ? o.splice(a, 1) : 0 === l && r.pr < s && (l = a + 1);
               o.splice(l, 0, {
                  c: e,
                  s: i,
                  up: n,
                  pr: s
               })
            }, u.removeEventListener = function(t, e) {
               var i, n = this._listeners[t];
               if (n) for (i = n.length; --i > -1;) if (n[i].c === e) return void n.splice(i, 1)
            }, u.dispatchEvent = function(t) {
               var e, i, n, s = this._listeners[t];
               if (s) for (e = s.length, e > 1 && (s = s.slice(0)), i = this._eventTarget; --e > -1;)(n = s[e]) && (n.up ? n.c.call(n.s || i, {
                  type: t,
                  target: i
               }) : n.c.call(n.s || i))
            };
            var P = i.requestAnimationFrame,
               M = i.cancelAnimationFrame,
               O = Date.now ||
            function() {
               return (new Date).getTime()
            }, R = O();
            for (h = ["ms", "moz", "webkit", "o"], c = h.length; --c > -1 && !P;) P = i[h[c] + "RequestAnimationFrame"], M = i[h[c] + "CancelAnimationFrame"] || i[h[c] + "CancelRequestAnimationFrame"];
            b("Ticker", function(t, e) {
               var i, n, s, r, a, l = this,
                  h = O(),
                  c = !(!1 === e || !P) && "auto",
                  u = 500,
                  f = 33,
                  m = function(t) {
                     var e, o, c = O() - R;
                     c > u && (h += c - f), R += c, l.time = (R - h) / 1e3, e = l.time - a, (!i || e > 0 || !0 === t) && (l.frame++, a += e + (e >= r ? .004 : r - e), o = !0), !0 !== t && (s = n(m)), o && l.dispatchEvent("tick")
                  };
               E.call(l), l.time = l.frame = 0, l.tick = function() {
                  m(!0)
               }, l.lagSmoothing = function(t, e) {
                  if (!arguments.length) return u < 1e10;
                  u = t || 1e10, f = Math.min(e, u, 0)
               }, l.sleep = function() {
                  null != s && (c && M ? M(s) : clearTimeout(s), n = v, s = null, l === d && (p = !1))
               }, l.wake = function(t) {
                  null !== s ? l.sleep() : t ? h += -R + (R = O()) : l.frame > 10 && (R = O() - u + 5), n = 0 === i ? v : c && P ? P : function(t) {
                     return setTimeout(t, 1e3 * (a - l.time) + 1 | 0)
                  }, l === d && (p = !0), m(2)
               }, l.fps = function(t) {
                  if (!arguments.length) return i;
                  i = t, r = 1 / (i || 60), a = this.time + r, l.wake()
               }, l.useRAF = function(t) {
                  if (!arguments.length) return c;
                  l.sleep(), c = t, l.fps(i)
               }, l.fps(t), setTimeout(function() {
                  "auto" === c && l.frame < 5 && "hidden" !== o.visibilityState && l.useRAF(!1)
               }, 1500)
            }), u = m.Ticker.prototype = new m.events.EventDispatcher, u.constructor = m.Ticker;
            var A = b("core.Animation", function(t, e) {
               if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, Z) {
                  p || d.wake();
                  var i = this.vars.useFrames ? Q : Z;
                  i.add(this, i._time), this.vars.paused && this.paused(!0)
               }
            });
            d = A.ticker = new m.Ticker, u = A.prototype, u._dirty = u._gc = u._initted = u._paused = !1, u._totalTime = u._time = 0, u._rawPrevTime = -1, u._next = u._last = u._onUpdate = u._timeline = u.timeline = null, u._paused = !1;
            var j = function() {
                  p && O() - R > 2e3 && ("hidden" !== o.visibilityState || !d.lagSmoothing()) && d.wake();
                  var t = setTimeout(j, 2e3);
                  t.unref && t.unref()
               };
            j(), u.play = function(t, e) {
               return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, u.pause = function(t, e) {
               return null != t && this.seek(t, e), this.paused(!0)
            }, u.resume = function(t, e) {
               return null != t && this.seek(t, e), this.paused(!1)
            }, u.seek = function(t, e) {
               return this.totalTime(Number(t), !1 !== e)
            }, u.restart = function(t, e) {
               return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
            }, u.reverse = function(t, e) {
               return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, u.render = function(t, e, i) {}, u.invalidate = function() {
               return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
            }, u.isActive = function() {
               var t, e = this._timeline,
                  i = this._startTime;
               return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7
            }, u._enabled = function(t, e) {
               return p || d.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, u._kill = function(t, e) {
               return this._enabled(!1, !1)
            }, u.kill = function(t, e) {
               return this._kill(t, e), this
            }, u._uncache = function(t) {
               for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
               return this
            }, u._swapSelfInParams = function(t) {
               for (var e = t.length, i = t.concat(); --e > -1;)"{self}" === t[e] && (i[e] = this);
               return i
            }, u._callback = function(t) {
               var e = this.vars,
                  i = e[t],
                  n = e[t + "Params"],
                  s = e[t + "Scope"] || e.callbackScope || this;
               switch (n ? n.length : 0) {
               case 0:
                  i.call(s);
                  break;
               case 1:
                  i.call(s, n[0]);
                  break;
               case 2:
                  i.call(s, n[0], n[1]);
                  break;
               default:
                  i.apply(s, n)
               }
            }, u.eventCallback = function(t, e, i, n) {
               if ("on" === (t || "").substr(0, 2)) {
                  var s = this.vars;
                  if (1 === arguments.length) return s[t];
                  null == e ? delete s[t] : (s[t] = e, s[t + "Params"] = _(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, s[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
               }
               return this
            }, u.delay = function(t) {
               return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, u.duration = function(t) {
               return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, u.totalDuration = function(t) {
               return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, u.time = function(t, e) {
               return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, u.totalTime = function(t, e, i) {
               if (p || d.wake(), !arguments.length) return this._totalTime;
               if (this._timeline) {
                  if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                     this._dirty && this.totalDuration();
                     var n = this._totalDuration,
                        s = this._timeline;
                     if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? n - t : t) / this._timeScale, s._dirty || this._uncache(!1), s._timeline) for (; s._timeline;) s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0), s = s._timeline
                  }
                  this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (I.length && tt(), this.render(t, e, !1), I.length && tt())
               }
               return this
            }, u.progress = u.totalProgress = function(t, e) {
               var i = this.duration();
               return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
            }, u.startTime = function(t) {
               return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, u.endTime = function(t) {
               return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, u.timeScale = function(t) {
               if (!arguments.length) return this._timeScale;
               var e, i;
               for (t = t || 1e-10, this._timeline && this._timeline.smoothChildTiming && (e = this._pauseTime, i = e || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline;
               return this
            }, u.reversed = function(t) {
               return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, u.paused = function(t) {
               if (!arguments.length) return this._paused;
               var e, i, n = this._timeline;
               return t != this._paused && n && (p || t || d.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
            };
            var D = b("core.SimpleTimeline", function(t) {
               A.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            u = D.prototype = new A, u.constructor = D, u.kill()._gc = !1, u._first = u._last = u._recent = null, u._sortChildren = !1, u.add = u.insert = function(t, e, i, n) {
               var s, r;
               if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), s = this._last, this._sortChildren) for (r = t._startTime; s && s._startTime > r;) s = s._prev;
               return s ? (t._next = s._next, s._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = s, this._recent = t, this._timeline && this._uncache(!0), this
            }, u._remove = function(t, e) {
               return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, u.render = function(t, e, i) {
               var n, s = this._first;
               for (this._totalTime = this._time = this._rawPrevTime = t; s;) n = s._next, (s._active || t >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = n
            }, u.rawTime = function() {
               return p || d.wake(), this._totalTime
            };
            var F = b("TweenLite", function(t, e, n) {
               if (A.call(this, e, n), this.render = F.prototype.render, null == t) throw "Cannot tween a null target.";
               this.target = t = "string" != typeof t ? t : F.selector(t) || t;
               var s, r, a, o = t.jquery || t.length && t !== i && t[0] && (t[0] === i || t[0].nodeType && t[0].style && !t.nodeType),
                  l = this.vars.overwrite;
               if (this._overwrite = l = null == l ? K[F.defaultOverwrite] : "number" == typeof l ? l >> 0 : K[l], (o || t instanceof Array || t.push && _(t)) && "number" != typeof t[0]) for (this._targets = a = g(t), this._propLookup = [], this._siblings = [], s = 0; s < a.length; s++) r = a[s], r ? "string" != typeof r ? r.length && r !== i && r[0] && (r[0] === i || r[0].nodeType && r[0].style && !r.nodeType) ? (a.splice(s--, 1), this._targets = a = a.concat(g(r))) : (this._siblings[s] = et(r, this, !1), 1 === l && this._siblings[s].length > 1 && nt(r, this, null, 1, this._siblings[s])) : "string" == typeof(r = a[s--] = F.selector(r)) && a.splice(s + 1, 1) : a.splice(s--, 1);
               else this._propLookup = {}, this._siblings = et(t, this, !1), 1 === l && this._siblings.length > 1 && nt(t, this, null, 1, this._siblings);
               (this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-10, this.render(Math.min(0, -this._delay)))
            }, !0),
               H = function(t) {
                  return t && t.length && t !== i && t[0] && (t[0] === i || t[0].nodeType && t[0].style && !t.nodeType)
               },
               z = function(t, e) {
                  var i, n = {};
                  for (i in t) G[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!W[i] || W[i] && W[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                  t.css = n
               };
            u = F.prototype = new A, u.constructor = F, u.kill()._gc = !1, u.ratio = 0, u._firstPT = u._targets = u._overwrittenProps = u._startAt = null, u._notifyPluginsOfEnabled = u._lazy = !1, F.version = "1.20.3", F.defaultEase = u._ease = new k(null, null, 1, 1), F.defaultOverwrite = "auto", F.ticker = d, F.autoSleep = 120, F.lagSmoothing = function(t, e) {
               d.lagSmoothing(t, e)
            }, F.selector = i.$ || i.jQuery ||
            function(t) {
               var e = i.$ || i.jQuery;
               return e ? (F.selector = e, e(t)) : void 0 === o ? t : o.querySelectorAll ? o.querySelectorAll(t) : o.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
            };
            var I = [],
               N = {},
               B = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
               L = /[\+-]=-?[\.\d]/,
               q = function(t) {
                  for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
               },
               $ = function(t, e, i, n) {
                  var s, r, a, o, l, h, c, u = [],
                     d = 0,
                     p = "",
                     f = 0;
                  for (u.start = t, u.end = e, t = u[0] = t + "", e = u[1] = e + "", i && (i(u), t = u[0], e = u[1]), u.length = 0, s = t.match(B) || [], r = e.match(B) || [], n && (n._next = null, n.blob = 1, u._firstPT = u._applyPT = n), l = r.length, o = 0; o < l; o++) c = r[o], h = e.substr(d, e.indexOf(c, d) - d), p += h || !o ? h : ",", d += h.length, f ? f = (f + 1) % 5 : "rgba(" === h.substr(-5) && (f = 1), c === s[o] || s.length <= o ? p += c : (p && (u.push(p), p = ""), a = parseFloat(s[o]), u.push(a), u._firstPT = {
                     _next: u._firstPT,
                     t: u,
                     p: u.length - 1,
                     s: a,
                     c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - a) || 0,
                     f: 0,
                     m: f && f < 4 ? Math.round : 0
                  }), d += c.length;
                  return p += e.substr(d), p && u.push(p), u.setRatio = q, L.test(e) && (u.end = null), u
               },
               X = function(t, e, i, n, s, r, a, o, l) {
                  "function" == typeof n && (n = n(l || 0, t));
                  var h, c = typeof t[e],
                     u = "function" !== c ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                     d = "get" !== i ? i : u ? a ? t[u](a) : t[u]() : t[e],
                     p = "string" == typeof n && "=" === n.charAt(1),
                     f = {
                        t: t,
                        p: e,
                        s: d,
                        f: "function" === c,
                        pg: 0,
                        n: s || e,
                        m: r ? "function" == typeof r ? r : Math.round : 0,
                        pr: 0,
                        c: p ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - d || 0
                     };
                  if (("number" != typeof d || "number" != typeof n && !p) && (a || isNaN(d) || !p && isNaN(n) || "boolean" == typeof d || "boolean" == typeof n ? (f.fp = a, h = $(d, p ? parseFloat(f.s) + f.c : n, o || F.defaultStringFilter, f), f = {
                     t: h,
                     p: "setRatio",
                     s: 0,
                     c: 1,
                     f: 2,
                     pg: 0,
                     n: s || e,
                     pr: 0,
                     m: 0
                  }) : (f.s = parseFloat(d), p || (f.c = parseFloat(n) - f.s || 0))), f.c) return (f._next = this._firstPT) && (f._next._prev = f), this._firstPT = f, f
               },
               U = F._internals = {
                  isArray: _,
                  isSelector: H,
                  lazyTweens: I,
                  blobDif: $
               },
               W = F._plugins = {},
               Y = U.tweenLookup = {},
               V = 0,
               G = U.reservedProps = {
                  ease: 1,
                  delay: 1,
                  overwrite: 1,
                  onComplete: 1,
                  onCompleteParams: 1,
                  onCompleteScope: 1,
                  useFrames: 1,
                  runBackwards: 1,
                  startAt: 1,
                  onUpdate: 1,
                  onUpdateParams: 1,
                  onUpdateScope: 1,
                  onStart: 1,
                  onStartParams: 1,
                  onStartScope: 1,
                  onReverseComplete: 1,
                  onReverseCompleteParams: 1,
                  onReverseCompleteScope: 1,
                  onRepeat: 1,
                  onRepeatParams: 1,
                  onRepeatScope: 1,
                  easeParams: 1,
                  yoyo: 1,
                  immediateRender: 1,
                  repeat: 1,
                  repeatDelay: 1,
                  data: 1,
                  paused: 1,
                  reversed: 1,
                  autoCSS: 1,
                  lazy: 1,
                  onOverwrite: 1,
                  callbackScope: 1,
                  stringFilter: 1,
                  id: 1,
                  yoyoEase: 1
               },
               K = {
                  none: 0,
                  all: 1,
                  auto: 2,
                  concurrent: 3,
                  allOnStart: 4,
                  preexisting: 5,
                  true: 1,
                  false: 0
               },
               Q = A._rootFramesTimeline = new D,
               Z = A._rootTimeline = new D,
               J = 30,
               tt = U.lazyRender = function() {
                  var t, e = I.length;
                  for (N = {}; --e > -1;)(t = I[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                  I.length = 0
               };
            Z._startTime = d.time, Q._startTime = d.frame, Z._active = Q._active = !0, setTimeout(tt, 1), A._updateRoot = F.render = function() {
               var t, e, i;
               if (I.length && tt(), Z.render((d.time - Z._startTime) * Z._timeScale, !1, !1), Q.render((d.frame - Q._startTime) * Q._timeScale, !1, !1), I.length && tt(), d.frame >= J) {
                  J = d.frame + (parseInt(F.autoSleep, 10) || 120);
                  for (i in Y) {
                     for (e = Y[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                     0 === e.length && delete Y[i]
                  }
                  if ((!(i = Z._first) || i._paused) && F.autoSleep && !Q._first && 1 === d._listeners.tick.length) {
                     for (; i && i._paused;) i = i._next;
                     i || d.sleep()
                  }
               }
            }, d.addEventListener("tick", A._updateRoot);
            var et = function(t, e, i) {
                  var n, s, r = t._gsTweenID;
                  if (Y[r || (t._gsTweenID = r = "t" + V++)] || (Y[r] = {
                     target: t,
                     tweens: []
                  }), e && (n = Y[r].tweens, n[s = n.length] = e, i)) for (; --s > -1;) n[s] === e && n.splice(s, 1);
                  return Y[r].tweens
               },
               it = function(t, e, i, n) {
                  var s, r, a = t.vars.onOverwrite;
                  return a && (s = a(t, e, i, n)), a = F.onOverwrite, a && (r = a(t, e, i, n)), !1 !== s && !1 !== r
               },
               nt = function(t, e, i, n, s) {
                  var r, a, o, l;
                  if (1 === n || n >= 4) {
                     for (l = s.length, r = 0; r < l; r++) if ((o = s[r]) !== e) o._gc || o._kill(null, t, e) && (a = !0);
                     else if (5 === n) break;
                     return a
                  }
                  var h, c = e._startTime + 1e-10,
                     u = [],
                     d = 0,
                     p = 0 === e._duration;
                  for (r = s.length; --r > -1;)(o = s[r]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || st(e, 0, p), 0 === st(o, h, p) && (u[d++] = o)) : o._startTime <= c && o._startTime + o.totalDuration() / o._timeScale > c && ((p || !o._initted) && c - o._startTime <= 2e-10 || (u[d++] = o)));
                  for (r = d; --r > -1;) if (o = u[r], 2 === n && o._kill(i, t, e) && (a = !0), 2 !== n || !o._firstPT && o._initted) {
                     if (2 !== n && !it(o, e)) continue;
                     o._enabled(!1, !1) && (a = !0)
                  }
                  return a
               },
               st = function(t, e, i) {
                  for (var n = t._timeline, s = n._timeScale, r = t._startTime; n._timeline;) {
                     if (r += n._startTime, s *= n._timeScale, n._paused) return -100;
                     n = n._timeline
                  }
                  return r /= s, r > e ? r - e : i && r === e || !t._initted && r - e < 2e-10 ? 1e-10 : (r += t.totalDuration() / t._timeScale / s) > e + 1e-10 ? 0 : r - e - 1e-10
               };
            u._init = function() {
               var t, e, i, n, s, r, a = this.vars,
                  o = this._overwrittenProps,
                  l = this._duration,
                  h = !! a.immediateRender,
                  c = a.ease;
               if (a.startAt) {
                  this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), s = {};
                  for (n in a.startAt) s[n] = a.startAt[n];
                  if (s.data = "isStart", s.overwrite = !1, s.immediateRender = !0, s.lazy = h && !1 !== a.lazy, s.startAt = s.delay = null, s.onUpdate = a.onUpdate, s.onUpdateParams = a.onUpdateParams, s.onUpdateScope = a.onUpdateScope || a.callbackScope || this, this._startAt = F.to(this.target, 0, s), h) if (this._time > 0) this._startAt = null;
                  else if (0 !== l) return
               } else if (a.runBackwards && 0 !== l) if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
               else {
                  0 !== this._time && (h = !1), i = {};
                  for (n in a) G[n] && "autoCSS" !== n || (i[n] = a[n]);
                  if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && !1 !== a.lazy, i.immediateRender = h, this._startAt = F.to(this.target, 0, i), h) {
                     if (0 === this._time) return
                  } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
               }
               if (this._ease = c = c ? c instanceof k ? c : "function" == typeof c ? new k(c, a.easeParams) : S[c] || F.defaultEase : F.defaultEase, a.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, a.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (r = this._targets.length, t = 0; t < r; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null, t) && (e = !0);
               else e = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
               if (e && F._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), a.runBackwards) for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
               this._onUpdate = a.onUpdate, this._initted = !0
            }, u._initProps = function(t, e, n, s, r) {
               var a, o, l, h, c, u;
               if (null == t) return !1;
               N[t._gsTweenID] && tt(), this.vars.css || t.style && t !== i && t.nodeType && W.css && !1 !== this.vars.autoCSS && z(this.vars, t);
               for (a in this.vars) if (u = this.vars[a], G[a]) u && (u instanceof Array || u.push && _(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[a] = u = this._swapSelfInParams(u, this));
               else if (W[a] && (h = new W[a])._onInitTween(t, this.vars[a], this, r)) {
                  for (this._firstPT = c = {
                     _next: this._firstPT,
                     t: h,
                     p: "setRatio",
                     s: 0,
                     c: 1,
                     f: 1,
                     n: a,
                     pg: 1,
                     pr: h._priority,
                     m: 0
                  }, o = h._overwriteProps.length; --o > -1;) e[h._overwriteProps[o]] = this._firstPT;
                  (h._priority || h._onInitAllProps) && (l = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c)
               } else e[a] = X.call(this, t, a, "get", u, a, 0, null, this.vars.stringFilter, r);
               return s && this._kill(s, t) ? this._initProps(t, e, n, s, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && nt(t, this, e, this._overwrite, n) ? (this._kill(e, t), this._initProps(t, e, n, s, r)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (N[t._gsTweenID] = !0), l)
            }, u.render = function(t, e, i) {
               var n, s, r, a, o = this._time,
                  l = this._duration,
                  h = this._rawPrevTime;
               if (t >= l - 1e-7 && t >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (h < 0 || t <= 0 && t >= -1e-7 || 1e-10 === h && "isPause" !== this.data) && h !== t && (i = !0, h > 1e-10 && (s = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : 1e-10);
               else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0) && (s = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (1e-10 !== h || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : 1e-10)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
               else if (this._totalTime = this._time = t, this._easeType) {
                  var c = t / l,
                     u = this._easeType,
                     d = this._easePower;
                  (1 === u || 3 === u && c >= .5) && (c = 1 - c), 3 === u && (c *= 2), 1 === d ? c *= c : 2 === d ? c *= c * c : 3 === d ? c *= c * c * c : 4 === d && (c *= c * c * c * c), this.ratio = 1 === u ? 1 - c : 2 === u ? c : t / l < .5 ? c / 2 : 1 - c / 2
               } else this.ratio = this._ease.getRatio(t / l);
               if (this._time !== o || i) {
                  if (!this._initted) {
                     if (this._init(), !this._initted || this._gc) return;
                     if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = h, I.push(this), void(this._lazy = [t, e]);
                     this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                  }
                  for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                  this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i), e || (this._time !== o || n || i) && this._callback("onUpdate")), s && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s), 0 === l && 1e-10 === this._rawPrevTime && 1e-10 !== a && (this._rawPrevTime = 0)))
               }
            }, u._kill = function(t, e, i) {
               if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
               e = "string" != typeof e ? e || this._targets || this.target : F.selector(e) || e;
               var n, s, r, a, o, l, h, c, u, d = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
               if ((_(e) || H(e)) && "number" != typeof e[0]) for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
               else {
                  if (this._targets) {
                     for (n = this._targets.length; --n > -1;) if (e === this._targets[n]) {
                        o = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                        break
                     }
                  } else {
                     if (e !== this.target) return !1;
                     o = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                  }
                  if (o) {
                     if (h = t || o, c = t !== s && "all" !== s && t !== o && ("object" != typeof t || !t._tempKill), i && (F.onOverwrite || this.vars.onOverwrite)) {
                        for (r in h) o[r] && (u || (u = []), u.push(r));
                        if ((u || !t) && !it(this, i, e, u)) return !1
                     }
                     for (r in h)(a = o[r]) && (d && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[r]), c && (s[r] = 1);
                     !this._firstPT && this._initted && this._enabled(!1, !1)
                  }
               }
               return l
            }, u.invalidate = function() {
               return this._notifyPluginsOfEnabled && F._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], A.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1e-10, this.render(Math.min(0, -this._delay))), this
            }, u._enabled = function(t, e) {
               if (p || d.wake(), t && this._gc) {
                  var i, n = this._targets;
                  if (n) for (i = n.length; --i > -1;) this._siblings[i] = et(n[i], this, !0);
                  else this._siblings = et(this.target, this, !0)
               }
               return A.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && F._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
            }, F.to = function(t, e, i) {
               return new F(t, e, i)
            }, F.from = function(t, e, i) {
               return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new F(t, e, i)
            }, F.fromTo = function(t, e, i, n) {
               return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new F(t, e, n)
            }, F.delayedCall = function(t, e, i, n, s) {
               return new F(e, 0, {
                  delay: t,
                  onComplete: e,
                  onCompleteParams: i,
                  callbackScope: n,
                  onReverseComplete: e,
                  onReverseCompleteParams: i,
                  immediateRender: !1,
                  lazy: !1,
                  useFrames: s,
                  overwrite: 0
               })
            }, F.set = function(t, e) {
               return new F(t, 0, e)
            }, F.getTweensOf = function(t, e) {
               if (null == t) return [];
               t = "string" != typeof t ? t : F.selector(t) || t;
               var i, n, s, r;
               if ((_(t) || H(t)) && "number" != typeof t[0]) {
                  for (i = t.length, n = []; --i > -1;) n = n.concat(F.getTweensOf(t[i], e));
                  for (i = n.length; --i > -1;) for (r = n[i], s = i; --s > -1;) r === n[s] && n.splice(i, 1)
               } else if (t._gsTweenID) for (n = et(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
               return n || []
            }, F.killTweensOf = F.killDelayedCallsTo = function(t, e, i) {
               "object" == typeof e && (i = e, e = !1);
               for (var n = F.getTweensOf(t, e), s = n.length; --s > -1;) n[s]._kill(i, t)
            };
            var rt = b("plugins.TweenPlugin", function(t, e) {
               this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = rt.prototype
            }, !0);
            if (u = rt.prototype, rt.version = "1.19.0", rt.API = 2, u._firstPT = null, u._addTween = X, u.setRatio = q, u._kill = function(t) {
               var e, i = this._overwriteProps,
                  n = this._firstPT;
               if (null != t[this._propName]) this._overwriteProps = [];
               else for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
               for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
               return !1
            }, u._mod = u._roundProps = function(t) {
               for (var e, i = this._firstPT; i;) e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")], e && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
            }, F._onPluginEvent = function(t, e) {
               var i, n, s, r, a, o = e._firstPT;
               if ("_onInitAllProps" === t) {
                  for (; o;) {
                     for (a = o._next, n = s; n && n.pr > o.pr;) n = n._next;
                     (o._prev = n ? n._prev : r) ? o._prev._next = o : s = o, (o._next = n) ? n._prev = o : r = o, o = a
                  }
                  o = e._firstPT = s
               }
               for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
               return i
            }, rt.activate = function(t) {
               for (var e = t.length; --e > -1;) t[e].API === rt.API && (W[(new t[e])._propName] = t[e]);
               return !0
            }, w.plugin = function(t) {
               if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
               var e, i = t.propName,
                  n = t.priority || 0,
                  s = t.overwriteProps,
                  r = {
                     init: "_onInitTween",
                     set: "setRatio",
                     kill: "_kill",
                     round: "_mod",
                     mod: "_mod",
                     initAll: "_onInitAllProps"
                  },
                  a = b("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                     rt.call(this, i, n), this._overwriteProps = s || []
                  }, !0 === t.global),
                  o = a.prototype = new rt(i);
               o.constructor = a, a.API = t.API;
               for (e in r)"function" == typeof t[e] && (o[r[e]] = t[e]);
               return a.version = t.version, rt.activate([a]), a
            }, h = i._gsQueue) {
               for (c = 0; c < h.length; c++) h[c]();
               for (u in y) y[u].func || i.console.log("GSAP encountered missing dependency: " + u)
            }
            p = !1
         }
      }(void 0 !== t && t.exports && void 0 !== i ? i : this || window)
   }).call(e, i(160))
}, 
14: function(t, e, i) {
   i(109)(i(148)), t.exports = window.Zepto
}, 
15: function(t, e, i) {
   var n = i(12),
      s = i(30);
   t.exports = i(11) ?
   function(t, e, i) {
      return n.f(t, e, s(1, i))
   } : function(t, e, i) {
      return t[e] = i, t
   }
}, , 
17: function(t, e) {
   t.exports = function(t) {
      return "object" == typeof t ? null !== t : "function" == typeof t
   }
}, 
18: function(t, e, i) {
   var n = i(94),
      s = i(40);
   t.exports = function(t) {
      return n(s(t))
   }
}, 
19: function(t, e, i) {
   var n = i(2),
      s = i(3),
      r = i(65),
      a = i(15),
      o = function(t, e, i) {
         var l, h, c, u = t & o.F,
            d = t & o.G,
            p = t & o.S,
            f = t & o.P,
            m = t & o.B,
            g = t & o.W,
            v = d ? s : s[e] || (s[e] = {}),
            _ = v.prototype,
            y = d ? n : p ? n[e] : (n[e] || {}).prototype;
         d && (i = e);
         for (l in i)(h = !u && y && void 0 !== y[l]) && l in v || (c = h ? y[l] : i[l], v[l] = d && "function" != typeof y[l] ? i[l] : m && h ? r(c, n) : g && y[l] == c ?
         function(t) {
            var e = function(e, i, n) {
                  if (this instanceof t) {
                     switch (arguments.length) {
                     case 0:
                        return new t;
                     case 1:
                        return new t(e);
                     case 2:
                        return new t(e, i)
                     }
                     return new t(e, i, n)
                  }
                  return t.apply(this, arguments)
               };
            return e.prototype = t.prototype, e
         }(c) : f && "function" == typeof c ? r(Function.call, c) : c, f && ((v.virtual || (v.virtual = {}))[l] = c, t & o.R && _ && !_[l] && a(_, l, c)))
      };
   o.F = 1, o.G = 2, o.S = 4, o.P = 8, o.B = 16, o.W = 32, o.U = 64, o.R = 128, t.exports = o
}, , 
21: function(t, e, i) {
   var n = i(17);
   t.exports = function(t) {
      if (!n(t)) throw TypeError(t + " is not an object!");
      return t
   }
}, 
22: function(t, e) {
   t.exports = function(t) {
      try {
         return !!t()
      } catch (t) {
         return !0
      }
   }
}, 
23: function(t, e, i) {
   "use strict";
   Object.defineProperty(e, "__esModule", {
      value: !0
   });
   var n = "",
      s = "";
   "undefined" != typeof window && (n = window.navigator.userAgent, s = window.document.cookie || "");
   var r = /ipad/gi,
      a = /iphone|ipod|ipad|ios/gi,
      o = /Android/gi,
      l = /windows\s+phone/gi,
      h = /IPadQQ/gi,
      c = /mobile|mobi|wap|simulator|iphone|android/gi,
      u = /SINA_ROBOT|SINA_WEIBO/gi,
      d = /Weibo|MicroMessenger|YDDict|youdao_dict|QQ(?!Browser)|RenRen|Douban|YiXin|TXMicroBlog|NewsApp/i,
      p = /QQBrowser/gi,
      f = /Android\s+([\d\.]+);/i,
      m = /Windows\s+Phone\s+([\d+\.]+);/i,
      g = /.*Windows\sNT\s(.*)\;/i,
      v = /OS\s+([\d+_]+)/i,
      _ = function() {
         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
         return "" == t ? 0 : O(t) ? 3 : k(t) ? 1 : E(t) ? 2 : 0
      },
      y = function() {
         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
         switch (_(t)) {
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
      x = function() {
         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n,
            e = R(t);
         return null != e ? e : null != (e = t.match(v)) ? e[1].replace(/_/g, ".") : (e = P(t), null != e ? e : "")
      },
      w = function() {
         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
         return "" == t ? 0 : O(t) ? A(t) ? 31 : 30 : k(t) ? S(t) ? 11 : 10 : E(t) ? 20 : 0
      },
      b = function() {
         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
         switch (w(t)) {
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
      T = function() {
         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
         return S(t) ? "pad" : "phone"
      },
      k = function() {
         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
         if ("" == t) return !1;
         var e = t.match(a),
            i = t.match(l);
         return null != e && null == i
      },
      S = function() {
         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
         return "" != t && null != t.match(r)
      },
      C = function() {
         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n,
            e = t.match(v);
         return null != e ? parseInt(e[1].split("_")[0], 10) : -1
      },
      E = function() {
         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
         if ("" == t) return !1;
         var e = t.match(o),
            i = t.match(l);
         return null != e && null == i
      },
      P = function() {
         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n,
            e = t.match(f);
         return null != e ? e[1] : null
      },
      M = function() {
         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
         return E(t) && /\bChrome\/\d/.test(t) && !/\bVersion\/\d/.test(t)
      },
      O = function() {
         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
         return "" != t && null != t.match(l)
      },
      R = function() {
         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n,
            e = t.match(m);
         return null != e ? e[1] : null
      },
      A = function() {
         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
         if (O(t)) {
            var e = R(t);
            if (null != e) try {
               var i = parseFloat(e, 10);
               if (null != i && i >= 10) return !0
            } catch (t) {
               return !1
            }
         }
         return !1
      },
      j = function() {
         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n,
            e = t.match(g);
         return null != e ? e[1] : null
      },
      D = function() {
         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
         if ("" == t) return !1;
         var e = j(t);
         if (null != e) try {
            var i = parseFloat(e, 10);
            if (null != i && i >= 10) return !0
         } catch (t) {
            return !1
         }
         return !1
      },
      F = function() {
         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
         return "" != t && null != t.match(c)
      },
      H = function() {
         return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n).indexOf("MSIE 6.0")
      },
      z = function() {
         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
         return "" != t && null != t.matcher(u)
      },
      I = function() {
         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
         if ("" == t) return !1;
         var e = B(t);
         return "QQ".toLowerCase() == e || "Weibo".toLowerCase() == e || "MicroMessenger".toLowerCase() == e
      },
      N = function(t) {
         return null != t.match(h)
      },
      B = function() {
         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
         if ("" == t) return !1;
         var e = t.match(d),
            i = t.match(p);
         return null != e ? e[0].toLowerCase() : null != i ? i[0].toLowerCase() : ""
      },
      L = {
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
      q = function() {
         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            e = "";
         for (var i in L) if (i.toLowerCase() == t) {
            e = L[i];
            break
         }
         return e
      },
      $ = /appver/i,
      X = /NeteaseMusic\/([\d\.]+)?/i,
      U = function() {
         return null != n.match(X) || null != s.match($)
      },
      W = /appver=([\d\.]+)?/i,
      Y = function() {
         var t = n.match(X) || s.match(W);
         return null != t ? t[1] : ""
      },
      V = function(t) {
         var e = t.userAgent,
            i = t.Cookie;
         n = e || "", s = i || ""
      },
      G = {
         EnvInit: V,
         getPlatform: _,
         getPlatform2Str: y,
         getOSVersionStr: x,
         getDevicePro: w,
         getDevicePro2Str: b,
         getDevice: T,
         isIos: k,
         isPad: S,
         getIosLargeVersion: C,
         isAndroid: E,
         isAndroidChrome: M,
         getAndroidVersion: P,
         isWP: O,
         getWPVersion: R,
         isWP10: A,
         getWinVersion: j,
         isWin10: D,
         isMobile: F,
         isIe6: H,
         isSinaRobot: z,
         isUnsupportedClient: I,
         isIpadQQ: N,
         getClient: B,
         isInNEMapp: U,
         getAppVersion: Y,
         fetchLogByClient: q
      };
   e.
default = G, t.exports = e.
default
}, , , , 
27: function(t, e, i) {
   "use strict";

   function n(t) {
      return t && t.__esModule ? t : {
      default:
         t
      }
   }
   e.__esModule = !0;
   var s = i(128),
      r = n(s),
      a = i(127),
      o = n(a),
      l = "function" == typeof o.
   default &&"symbol" == typeof r.
   default ?
   function(t) {
      return typeof t
   }:


   function(t) {
      return t && "function" == typeof o.
   default &&t.constructor === o.
   default &&t !== o.
   default.prototype ? "symbol":
      typeof t
   };
   e.
default = "function" == typeof o.
default &&"symbol" === l(r.
default) ?
   function(t) {
      return void 0 === t ? "undefined" : l(t)
   }:


   function(t) {
      return t && "function" == typeof o.
   default &&t.constructor === o.
   default &&t !== o.
   default.prototype ? "symbol":
      void 0 === t ? "undefined" : l(t)
   }
}, 
28: function(t, e, i) {
   var n = i(74),
      s = i(41);
   t.exports = Object.keys ||
   function(t) {
      return n(t, s)
   }
}, 
29: function(module, exports, __webpack_require__) {
   !
   function(t, e) {
      module.exports = e()
   }(0, function() {
      return function(t) {
         function e(n) {
            if (i[n]) return i[n].exports;
            var s = i[n] = {
               i: n,
               l: !1,
               exports: {}
            };
            return t[n].call(s.exports, s, s.exports, e), s.l = !0, s.exports
         }
         var i = {};
         return e.m = t, e.c = i, e.i = function(t) {
            return t
         }, e.d = function(t, i, n) {
            e.o(t, i) || Object.defineProperty(t, i, {
               configurable: !1,
               enumerable: !0,
               get: n
            })
         }, e.n = function(t) {
            var i = t && t.__esModule ?
            function() {
               return t.
            default
            } : function() {
               return t
            };
            return e.d(i, "a", i), i
         }, e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
         }, e.p = "", e(e.s = 8)
      }([function(t, e, i) {
         function n(t, e) {
            for (var i in e) e.hasOwnProperty(i) && null == t[i] && (t[i] = e[i]);
            return t
         }

         function s(t) {
            var e = {};
            return t.split("&").forEach(function(t) {
               var i = t.split("=");
               if (i.length) {
                  var n = i.shift();
                  n && (e[decodeURIComponent(n)] = decodeURIComponent(i.join("=")))
               }
            }), e
         }

         function r(t) {
            var e = "";
            for (var i in t) void 0 !== t[i] && (e += encodeURIComponent(i) + "=" + encodeURIComponent(t[i]) + "&");
            return e.slice(0, -1)
         }

         function a(t) {
            if ("undefined" != typeof document) {
               var e = document.cookie,
                  i = "\\b" + t + "=",
                  n = e.search(i);
               if (n < 0) return "";
               n += i.length - 2;
               var s = e.indexOf(";", n);
               return s < 0 && (s = e.length), e.substring(n, s) || ""
            }
         }
         var o = i(3),
            l = o.asrsea,
            h = o.ecnonasr,
            c = i(4),
            u = c.emj2code,
            d = c.BASE_CODE;
         t.exports = {
            extend: n,
            obj2query: r,
            query2obj: s,
            getCookie: a,
            asrsea: l,
            ecnonasr: h,
            emj2code: u,
            BASE_CODE: d
         }
      }, function(t, e, i) {
         function n(t, e) {
            e = e || {};
            var i = a({
               url: t,
               type: e.type || "json",
               method: e.method || "get",
               data: e.body || e.data,
               crossOrigin: !e.noCrossOrigin,
               withCredentials: void 0 === e.withCredentials || e.withCredentials
            }, e);
            return !1 === e.async ? s(i) : new Promise(function(t, e) {
               i.error = function(t) {
                  e(t)
               }, i.success = function(e) {
                  t({
                     json: Promise.resolve.bind(Promise, e)
                  })
               }, s(i)
            })
         }
         var s = i(6),
            r = i(0),
            a = r.extend;
         t.exports = n
      }, function(t, e) {
         var i = function(t, e) {
               var i = {},
                  n = i.lib = {},
                  s = function() {},
                  r = n.Base = {
                     extend: function(t) {
                        s.prototype = this;
                        var e = new s;
                        return t && e.mixIn(t), e.hasOwnProperty("init") || (e.init = function() {
                           e.$super.init.apply(this, arguments)
                        }), e.init.prototype = e, e.$super = this, e
                     },
                     create: function() {
                        var t = this.extend();
                        return t.init.apply(t, arguments), t
                     },
                     init: function() {},
                     mixIn: function(t) {
                        for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                        t.hasOwnProperty("toString") && (this.toString = t.toString)
                     },
                     clone: function() {
                        return this.init.prototype.extend(this)
                     }
                  },
                  a = n.WordArray = r.extend({
                     init: function(t, e) {
                        t = this.words = t || [], this.sigBytes = void 0 != e ? e : 4 * t.length
                     },
                     toString: function(t) {
                        return (t || l).stringify(this)
                     },
                     concat: function(t) {
                        var e = this.words,
                           i = t.words,
                           n = this.sigBytes;
                        if (t = t.sigBytes, this.clamp(), n % 4) for (var s = 0; s < t; s++) e[n + s >>> 2] |= (i[s >>> 2] >>> 24 - s % 4 * 8 & 255) << 24 - (n + s) % 4 * 8;
                        else if (65535 < i.length) for (s = 0; s < t; s += 4) e[n + s >>> 2] = i[s >>> 2];
                        else e.push.apply(e, i);
                        return this.sigBytes += t, this
                     },
                     clamp: function() {
                        var e = this.words,
                           i = this.sigBytes;
                        e[i >>> 2] &= 4294967295 << 32 - i % 4 * 8, e.length = t.ceil(i / 4)
                     },
                     clone: function() {
                        var t = r.clone.call(this);
                        return t.words = this.words.slice(0), t
                     },
                     random: function(e) {
                        for (var i = [], n = 0; n < e; n += 4) i.push(4294967296 * t.random() | 0);
                        return new a.init(i, e)
                     }
                  }),
                  o = i.enc = {},
                  l = o.Hex = {
                     stringify: function(t) {
                        var e = t.words;
                        t = t.sigBytes;
                        for (var i = [], n = 0; n < t; n++) {
                           var s = e[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                           i.push((s >>> 4).toString(16)), i.push((15 & s).toString(16))
                        }
                        return i.join("")
                     },
                     parse: function(t) {
                        for (var e = t.length, i = [], n = 0; n < e; n += 2) i[n >>> 3] |= parseInt(t.substr(n, 2), 16) << 24 - n % 8 * 4;
                        return new a.init(i, e / 2)
                     }
                  },
                  h = o.Latin1 = {
                     stringify: function(t) {
                        var e = t.words;
                        t = t.sigBytes;
                        for (var i = [], n = 0; n < t; n++) i.push(String.fromCharCode(e[n >>> 2] >>> 24 - n % 4 * 8 & 255));
                        return i.join("")
                     },
                     parse: function(t) {
                        for (var e = t.length, i = [], n = 0; n < e; n++) i[n >>> 2] |= (255 & t.charCodeAt(n)) << 24 - n % 4 * 8;
                        return new a.init(i, e)
                     }
                  },
                  c = o.Utf8 = {
                     stringify: function(t) {
                        try {
                           return decodeURIComponent(escape(h.stringify(t)))
                        } catch (t) {
                           throw Error("Malformed UTF-8 data")
                        }
                     },
                     parse: function(t) {
                        return h.parse(unescape(encodeURIComponent(t)))
                     }
                  },
                  u = n.BufferedBlockAlgorithm = r.extend({
                     reset: function() {
                        this._data = new a.init, this._nDataBytes = 0
                     },
                     _append: function(t) {
                        "string" == typeof t && (t = c.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes
                     },
                     _process: function(e) {
                        var i = this._data,
                           n = i.words,
                           s = i.sigBytes,
                           r = this.blockSize,
                           o = s / (4 * r),
                           o = e ? t.ceil(o) : t.max((0 | o) - this._minBufferSize, 0);
                        if (e = o * r, s = t.min(4 * e, s), e) {
                           for (var l = 0; l < e; l += r) this._doProcessBlock(n, l);
                           l = n.splice(0, e), i.sigBytes -= s
                        }
                        return new a.init(l, s)
                     },
                     clone: function() {
                        var t = r.clone.call(this);
                        return t._data = this._data.clone(), t
                     },
                     _minBufferSize: 0
                  });
               n.Hasher = u.extend({
                  cfg: r.extend(),
                  init: function(t) {
                     this.cfg = this.cfg.extend(t), this.reset()
                  },
                  reset: function() {
                     u.reset.call(this), this._doReset()
                  },
                  update: function(t) {
                     return this._append(t), this._process(), this
                  },
                  finalize: function(t) {
                     return t && this._append(t), this._doFinalize()
                  },
                  blockSize: 16,
                  _createHelper: function(t) {
                     return function(e, i) {
                        return new t.init(i).finalize(e)
                     }
                  },
                  _createHmacHelper: function(t) {
                     return function(e, i) {
                        return new d.HMAC.init(t, i).finalize(e)
                     }
                  }
               });
               var d = i.algo = {};
               return i
            }(Math);
         !
         function() {
            var t = i,
               e = t.lib.WordArray;
            t.enc.Base64 = {
               stringify: function(t) {
                  var e = t.words,
                     i = t.sigBytes,
                     n = this._map;
                  t.clamp(), t = [];
                  for (var s = 0; s < i; s += 3) for (var r = (e[s >>> 2] >>> 24 - s % 4 * 8 & 255) << 16 | (e[s + 1 >>> 2] >>> 24 - (s + 1) % 4 * 8 & 255) << 8 | e[s + 2 >>> 2] >>> 24 - (s + 2) % 4 * 8 & 255, a = 0; 4 > a && s + .75 * a < i; a++) t.push(n.charAt(r >>> 6 * (3 - a) & 63));
                  if (e = n.charAt(64)) for (; t.length % 4;) t.push(e);
                  return t.join("")
               },
               parse: function(t) {
                  var i = t.length,
                     n = this._map,
                     s = n.charAt(64);
                  s && -1 != (s = t.indexOf(s)) && (i = s);
                  for (var s = [], r = 0, a = 0; a < i; a++) if (a % 4) {
                     var o = n.indexOf(t.charAt(a - 1)) << a % 4 * 2,
                        l = n.indexOf(t.charAt(a)) >>> 6 - a % 4 * 2;
                     s[r >>> 2] |= (o | l) << 24 - r % 4 * 8, r++
                  }
                  return e.create(s, r)
               },
               _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            }
         }(), function(t) {
            function e(t, e, i, n, s, r, a) {
               return ((t = t + (e & i | ~e & n) + s + a) << r | t >>> 32 - r) + e
            }

            function n(t, e, i, n, s, r, a) {
               return ((t = t + (e & n | i & ~n) + s + a) << r | t >>> 32 - r) + e
            }

            function s(t, e, i, n, s, r, a) {
               return ((t = t + (e ^ i ^ n) + s + a) << r | t >>> 32 - r) + e
            }

            function r(t, e, i, n, s, r, a) {
               return ((t = t + (i ^ (e | ~n)) + s + a) << r | t >>> 32 - r) + e
            }
            for (var a = i, o = a.lib, l = o.WordArray, h = o.Hasher, o = a.algo, c = [], u = 0; 64 > u; u++) c[u] = 4294967296 * t.abs(t.sin(u + 1)) | 0;
            o = o.MD5 = h.extend({
               _doReset: function() {
                  this._hash = new l.init([1732584193, 4023233417, 2562383102, 271733878])
               },
               _doProcessBlock: function(t, i) {
                  for (var a = 0; 16 > a; a++) {
                     var o = i + a,
                        l = t[o];
                     t[o] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8)
                  }
                  var a = this._hash.words,
                     o = t[i + 0],
                     l = t[i + 1],
                     h = t[i + 2],
                     u = t[i + 3],
                     d = t[i + 4],
                     p = t[i + 5],
                     f = t[i + 6],
                     m = t[i + 7],
                     g = t[i + 8],
                     v = t[i + 9],
                     _ = t[i + 10],
                     y = t[i + 11],
                     x = t[i + 12],
                     w = t[i + 13],
                     b = t[i + 14],
                     T = t[i + 15],
                     k = a[0],
                     S = a[1],
                     C = a[2],
                     E = a[3],
                     k = e(k, S, C, E, o, 7, c[0]),
                     E = e(E, k, S, C, l, 12, c[1]),
                     C = e(C, E, k, S, h, 17, c[2]),
                     S = e(S, C, E, k, u, 22, c[3]),
                     k = e(k, S, C, E, d, 7, c[4]),
                     E = e(E, k, S, C, p, 12, c[5]),
                     C = e(C, E, k, S, f, 17, c[6]),
                     S = e(S, C, E, k, m, 22, c[7]),
                     k = e(k, S, C, E, g, 7, c[8]),
                     E = e(E, k, S, C, v, 12, c[9]),
                     C = e(C, E, k, S, _, 17, c[10]),
                     S = e(S, C, E, k, y, 22, c[11]),
                     k = e(k, S, C, E, x, 7, c[12]),
                     E = e(E, k, S, C, w, 12, c[13]),
                     C = e(C, E, k, S, b, 17, c[14]),
                     S = e(S, C, E, k, T, 22, c[15]),
                     k = n(k, S, C, E, l, 5, c[16]),
                     E = n(E, k, S, C, f, 9, c[17]),
                     C = n(C, E, k, S, y, 14, c[18]),
                     S = n(S, C, E, k, o, 20, c[19]),
                     k = n(k, S, C, E, p, 5, c[20]),
                     E = n(E, k, S, C, _, 9, c[21]),
                     C = n(C, E, k, S, T, 14, c[22]),
                     S = n(S, C, E, k, d, 20, c[23]),
                     k = n(k, S, C, E, v, 5, c[24]),
                     E = n(E, k, S, C, b, 9, c[25]),
                     C = n(C, E, k, S, u, 14, c[26]),
                     S = n(S, C, E, k, g, 20, c[27]),
                     k = n(k, S, C, E, w, 5, c[28]),
                     E = n(E, k, S, C, h, 9, c[29]),
                     C = n(C, E, k, S, m, 14, c[30]),
                     S = n(S, C, E, k, x, 20, c[31]),
                     k = s(k, S, C, E, p, 4, c[32]),
                     E = s(E, k, S, C, g, 11, c[33]),
                     C = s(C, E, k, S, y, 16, c[34]),
                     S = s(S, C, E, k, b, 23, c[35]),
                     k = s(k, S, C, E, l, 4, c[36]),
                     E = s(E, k, S, C, d, 11, c[37]),
                     C = s(C, E, k, S, m, 16, c[38]),
                     S = s(S, C, E, k, _, 23, c[39]),
                     k = s(k, S, C, E, w, 4, c[40]),
                     E = s(E, k, S, C, o, 11, c[41]),
                     C = s(C, E, k, S, u, 16, c[42]),
                     S = s(S, C, E, k, f, 23, c[43]),
                     k = s(k, S, C, E, v, 4, c[44]),
                     E = s(E, k, S, C, x, 11, c[45]),
                     C = s(C, E, k, S, T, 16, c[46]),
                     S = s(S, C, E, k, h, 23, c[47]),
                     k = r(k, S, C, E, o, 6, c[48]),
                     E = r(E, k, S, C, m, 10, c[49]),
                     C = r(C, E, k, S, b, 15, c[50]),
                     S = r(S, C, E, k, p, 21, c[51]),
                     k = r(k, S, C, E, x, 6, c[52]),
                     E = r(E, k, S, C, u, 10, c[53]),
                     C = r(C, E, k, S, _, 15, c[54]),
                     S = r(S, C, E, k, l, 21, c[55]),
                     k = r(k, S, C, E, g, 6, c[56]),
                     E = r(E, k, S, C, T, 10, c[57]),
                     C = r(C, E, k, S, f, 15, c[58]),
                     S = r(S, C, E, k, w, 21, c[59]),
                     k = r(k, S, C, E, d, 6, c[60]),
                     E = r(E, k, S, C, y, 10, c[61]),
                     C = r(C, E, k, S, h, 15, c[62]),
                     S = r(S, C, E, k, v, 21, c[63]);
                  a[0] = a[0] + k | 0, a[1] = a[1] + S | 0, a[2] = a[2] + C | 0, a[3] = a[3] + E | 0
               },
               _doFinalize: function() {
                  var e = this._data,
                     i = e.words,
                     n = 8 * this._nDataBytes,
                     s = 8 * e.sigBytes;
                  i[s >>> 5] |= 128 << 24 - s % 32;
                  var r = t.floor(n / 4294967296);
                  for (i[15 + (s + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), i[14 + (s + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), e.sigBytes = 4 * (i.length + 1), this._process(), e = this._hash, i = e.words, n = 0; 4 > n; n++) s = i[n], i[n] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8);
                  return e
               },
               clone: function() {
                  var t = h.clone.call(this);
                  return t._hash = this._hash.clone(), t
               }
            }), a.MD5 = h._createHelper(o), a.HmacMD5 = h._createHmacHelper(o)
         }(Math), function() {
            var t = i,
               e = t.lib,
               n = e.Base,
               s = e.WordArray,
               e = t.algo,
               r = e.EvpKDF = n.extend({
                  cfg: n.extend({
                     keySize: 4,
                     hasher: e.MD5,
                     iterations: 1
                  }),
                  init: function(t) {
                     this.cfg = this.cfg.extend(t)
                  },
                  compute: function(t, e) {
                     for (var i = this.cfg, n = i.hasher.create(), r = s.create(), a = r.words, o = i.keySize, i = i.iterations; a.length < o;) {
                        l && n.update(l);
                        var l = n.update(t).finalize(e);
                        n.reset();
                        for (var h = 1; h < i; h++) l = n.finalize(l), n.reset();
                        r.concat(l)
                     }
                     return r.sigBytes = 4 * o, r
                  }
               });
            t.EvpKDF = function(t, e, i) {
               return r.create(i).compute(t, e)
            }
         }(), i.lib.Cipher ||
         function(t) {
            var e = i,
               n = e.lib,
               s = n.Base,
               r = n.WordArray,
               a = n.BufferedBlockAlgorithm,
               o = e.enc.Base64,
               l = e.algo.EvpKDF,
               h = n.Cipher = a.extend({
                  cfg: s.extend(),
                  createEncryptor: function(t, e) {
                     return this.create(this._ENC_XFORM_MODE, t, e)
                  },
                  createDecryptor: function(t, e) {
                     return this.create(this._DEC_XFORM_MODE, t, e)
                  },
                  init: function(t, e, i) {
                     this.cfg = this.cfg.extend(i), this._xformMode = t, this._key = e, this.reset()
                  },
                  reset: function() {
                     a.reset.call(this), this._doReset()
                  },
                  process: function(t) {
                     return this._append(t), this._process()
                  },
                  finalize: function(t) {
                     return t && this._append(t), this._doFinalize()
                  },
                  keySize: 4,
                  ivSize: 4,
                  _ENC_XFORM_MODE: 1,
                  _DEC_XFORM_MODE: 2,
                  _createHelper: function(t) {
                     return {
                        encrypt: function(e, i, n) {
                           return ("string" == typeof i ? m : f).encrypt(t, e, i, n)
                        },
                        decrypt: function(e, i, n) {
                           return ("string" == typeof i ? m : f).decrypt(t, e, i, n)
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
            var c = e.mode = {},
               u = function(t, e, i) {
                  var n = this._iv;
                  n ? this._iv = void 0 : n = this._prevBlock;
                  for (var s = 0; s < i; s++) t[e + s] ^= n[s]
               },
               d = (n.BlockCipherMode = s.extend({
                  createEncryptor: function(t, e) {
                     return this.Encryptor.create(t, e)
                  },
                  createDecryptor: function(t, e) {
                     return this.Decryptor.create(t, e)
                  },
                  init: function(t, e) {
                     this._cipher = t, this._iv = e
                  }
               })).extend();
            d.Encryptor = d.extend({
               processBlock: function(t, e) {
                  var i = this._cipher,
                     n = i.blockSize;
                  u.call(this, t, e, n), i.encryptBlock(t, e), this._prevBlock = t.slice(e, e + n)
               }
            }), d.Decryptor = d.extend({
               processBlock: function(t, e) {
                  var i = this._cipher,
                     n = i.blockSize,
                     s = t.slice(e, e + n);
                  i.decryptBlock(t, e), u.call(this, t, e, n), this._prevBlock = s
               }
            }), c = c.CBC = d, d = (e.pad = {}).Pkcs7 = {
               pad: function(t, e) {
                  for (var i = 4 * e, i = i - t.sigBytes % i, n = i << 24 | i << 16 | i << 8 | i, s = [], a = 0; a < i; a += 4) s.push(n);
                  i = r.create(s, i), t.concat(i)
               },
               unpad: function(t) {
                  t.sigBytes -= 255 & t.words[t.sigBytes - 1 >>> 2]
               }
            }, n.BlockCipher = h.extend({
               cfg: h.cfg.extend({
                  mode: c,
                  padding: d
               }),
               reset: function() {
                  h.reset.call(this);
                  var t = this.cfg,
                     e = t.iv,
                     t = t.mode;
                  if (this._xformMode == this._ENC_XFORM_MODE) var i = t.createEncryptor;
                  else i = t.createDecryptor, this._minBufferSize = 1;
                  this._mode = i.call(t, this, e && e.words)
               },
               _doProcessBlock: function(t, e) {
                  this._mode.processBlock(t, e)
               },
               _doFinalize: function() {
                  var t = this.cfg.padding;
                  if (this._xformMode == this._ENC_XFORM_MODE) {
                     t.pad(this._data, this.blockSize);
                     var e = this._process(!0)
                  } else e = this._process(!0), t.unpad(e);
                  return e
               },
               blockSize: 4
            });
            var p = n.CipherParams = s.extend({
               init: function(t) {
                  this.mixIn(t)
               },
               toString: function(t) {
                  return (t || this.formatter).stringify(this)
               }
            }),
               c = (e.format = {}).OpenSSL = {
                  stringify: function(t) {
                     var e = t.ciphertext;
                     return t = t.salt, (t ? r.create([1398893684, 1701076831]).concat(t).concat(e) : e).toString(o)
                  },
                  parse: function(t) {
                     t = o.parse(t);
                     var e = t.words;
                     if (1398893684 == e[0] && 1701076831 == e[1]) {
                        var i = r.create(e.slice(2, 4));
                        e.splice(0, 4), t.sigBytes -= 16
                     }
                     return p.create({
                        ciphertext: t,
                        salt: i
                     })
                  }
               },
               f = n.SerializableCipher = s.extend({
                  cfg: s.extend({
                     format: c
                  }),
                  encrypt: function(t, e, i, n) {
                     n = this.cfg.extend(n);
                     var s = t.createEncryptor(i, n);
                     return e = s.finalize(e), s = s.cfg, p.create({
                        ciphertext: e,
                        key: i,
                        iv: s.iv,
                        algorithm: t,
                        mode: s.mode,
                        padding: s.padding,
                        blockSize: t.blockSize,
                        formatter: n.format
                     })
                  },
                  decrypt: function(t, e, i, n) {
                     return n = this.cfg.extend(n), e = this._parse(e, n.format), t.createDecryptor(i, n).finalize(e.ciphertext)
                  },
                  _parse: function(t, e) {
                     return "string" == typeof t ? e.parse(t, this) : t
                  }
               }),
               e = (e.kdf = {}).OpenSSL = {
                  execute: function(t, e, i, n) {
                     return n || (n = r.random(8)), t = l.create({
                        keySize: e + i
                     }).compute(t, n), i = r.create(t.words.slice(e), 4 * i), t.sigBytes = 4 * e, p.create({
                        key: t,
                        iv: i,
                        salt: n
                     })
                  }
               },
               m = n.PasswordBasedCipher = f.extend({
                  cfg: f.cfg.extend({
                     kdf: e
                  }),
                  encrypt: function(t, e, i, n) {
                     return n = this.cfg.extend(n), i = n.kdf.execute(i, t.keySize, t.ivSize), n.iv = i.iv, t = f.encrypt.call(this, t, e, i.key, n), t.mixIn(i), t
                  },
                  decrypt: function(t, e, i, n) {
                     return n = this.cfg.extend(n), e = this._parse(e, n.format), i = n.kdf.execute(i, t.keySize, t.ivSize, e.salt), n.iv = i.iv, f.decrypt.call(this, t, e, i.key, n)
                  }
               })
         }(), function() {
            for (var t = i, e = t.lib.BlockCipher, n = t.algo, s = [], r = [], a = [], o = [], l = [], h = [], c = [], u = [], d = [], p = [], f = [], m = 0; 256 > m; m++) f[m] = 128 > m ? m << 1 : m << 1 ^ 283;
            for (var g = 0, v = 0, m = 0; 256 > m; m++) {
               var _ = v ^ v << 1 ^ v << 2 ^ v << 3 ^ v << 4,
                  _ = _ >>> 8 ^ 255 & _ ^ 99;
               s[g] = _, r[_] = g;
               var y = f[g],
                  x = f[y],
                  w = f[x],
                  b = 257 * f[_] ^ 16843008 * _;
               a[g] = b << 24 | b >>> 8, o[g] = b << 16 | b >>> 16, l[g] = b << 8 | b >>> 24, h[g] = b, b = 16843009 * w ^ 65537 * x ^ 257 * y ^ 16843008 * g, c[_] = b << 24 | b >>> 8, u[_] = b << 16 | b >>> 16, d[_] = b << 8 | b >>> 24, p[_] = b, g ? (g = y ^ f[f[f[w ^ y]]], v ^= f[f[v]]) : g = v = 1
            }
            var T = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
               n = n.AES = e.extend({
                  _doReset: function() {
                     for (var t = this._key, e = t.words, i = t.sigBytes / 4, t = 4 * ((this._nRounds = i + 6) + 1), n = this._keySchedule = [], r = 0; r < t; r++) if (r < i) n[r] = e[r];
                     else {
                        var a = n[r - 1];
                        r % i ? 6 < i && 4 == r % i && (a = s[a >>> 24] << 24 | s[a >>> 16 & 255] << 16 | s[a >>> 8 & 255] << 8 | s[255 & a]) : (a = a << 8 | a >>> 24, a = s[a >>> 24] << 24 | s[a >>> 16 & 255] << 16 | s[a >>> 8 & 255] << 8 | s[255 & a], a ^= T[r / i | 0] << 24), n[r] = n[r - i] ^ a
                     }
                     for (e = this._invKeySchedule = [], i = 0; i < t; i++) r = t - i, a = i % 4 ? n[r] : n[r - 4], e[i] = 4 > i || 4 >= r ? a : c[s[a >>> 24]] ^ u[s[a >>> 16 & 255]] ^ d[s[a >>> 8 & 255]] ^ p[s[255 & a]]
                  },
                  encryptBlock: function(t, e) {
                     this._doCryptBlock(t, e, this._keySchedule, a, o, l, h, s)
                  },
                  decryptBlock: function(t, e) {
                     var i = t[e + 1];
                     t[e + 1] = t[e + 3], t[e + 3] = i, this._doCryptBlock(t, e, this._invKeySchedule, c, u, d, p, r), i = t[e + 1], t[e + 1] = t[e + 3], t[e + 3] = i
                  },
                  _doCryptBlock: function(t, e, i, n, s, r, a, o) {
                     for (var l = this._nRounds, h = t[e] ^ i[0], c = t[e + 1] ^ i[1], u = t[e + 2] ^ i[2], d = t[e + 3] ^ i[3], p = 4, f = 1; f < l; f++) var m = n[h >>> 24] ^ s[c >>> 16 & 255] ^ r[u >>> 8 & 255] ^ a[255 & d] ^ i[p++],
                        g = n[c >>> 24] ^ s[u >>> 16 & 255] ^ r[d >>> 8 & 255] ^ a[255 & h] ^ i[p++],
                        v = n[u >>> 24] ^ s[d >>> 16 & 255] ^ r[h >>> 8 & 255] ^ a[255 & c] ^ i[p++],
                        d = n[d >>> 24] ^ s[h >>> 16 & 255] ^ r[c >>> 8 & 255] ^ a[255 & u] ^ i[p++],
                        h = m,
                        c = g,
                        u = v;
                     m = (o[h >>> 24] << 24 | o[c >>> 16 & 255] << 16 | o[u >>> 8 & 255] << 8 | o[255 & d]) ^ i[p++], g = (o[c >>> 24] << 24 | o[u >>> 16 & 255] << 16 | o[d >>> 8 & 255] << 8 | o[255 & h]) ^ i[p++], v = (o[u >>> 24] << 24 | o[d >>> 16 & 255] << 16 | o[h >>> 8 & 255] << 8 | o[255 & c]) ^ i[p++], d = (o[d >>> 24] << 24 | o[h >>> 16 & 255] << 16 | o[c >>> 8 & 255] << 8 | o[255 & u]) ^ i[p++], t[e] = m, t[e + 1] = g, t[e + 2] = v, t[e + 3] = d
                  },
                  keySize: 8
               });
            t.AES = e._createHelper(n)
         }(), t.exports = i
      }, function(t, e, i) {
         function n(t) {
            var e, i, n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
               s = "";
            for (e = 0; t > e; e += 1) i = Math.random() * n.length, i = Math.floor(i), s += n.charAt(i);
            return s
         }

         function s(t, e) {
            var i = l.enc.Utf8.parse(e),
               n = l.enc.Utf8.parse("0102030405060708"),
               s = l.enc.Utf8.parse(t);
            return l.AES.encrypt(s, i, {
               iv: n,
               mode: l.mode.CBC
            }).toString()
         }

         function r(t, e, i) {
            var n;
            return h.setMaxDigits(131), n = new h.RSAKeyPair(e, "", i), h.encryptedString(n, t)
         }

         function a(t, e, i, a) {
            var o = {},
               l = n(16);
            return o.encText = s(t, a), o.encText = s(o.encText, l), o.encSecKey = r(l, e, i), o
         }

         function o(t, e, i, n) {
            var s = {};
            return s.encText = r(t + n, e, i), s
         }
         var l = i(2),
            h = i(5);
         t.exports = {
            asrsea: a,
            ecnonasr: o
         }
      }, function(t, e) {
         function i(t) {
            return t.map(function(t) {
               return n[t]
            }).join("")
         }
         var n = {
            "è‰²": "00e0b",
            "æµæ„Ÿ": "509f6",
            "è¿™è¾¹": "259df",
            "å¼±": "8642d",
            "å˜´å”‡": "bc356",
            "äº²": "62901",
            "å¼€å¿ƒ": "477df",
            "å‘²ç‰™": "22677",
            "æ†¨ç¬‘": "ec152",
            "çŒ«": "b5ff6",
            "çš±çœ‰": "8ace6",
            "å¹½çµ": "15bb7",
            "è›‹ç³•": "b7251",
            "å‘æ€’": "52b3a",
            "å¤§å“­": "b17a8",
            "å…”å­": "76aea",
            "æ˜Ÿæ˜Ÿ": "8a5aa",
            "é’Ÿæƒ…": "76d2e",
            "ç‰µæ‰‹": "41762",
            "å…¬é¸¡": "9ec4e",
            "çˆ±æ„": "e341f",
            "ç¦æ­¢": "56135",
            "ç‹—": "fccf6",
            "äº²äº²": "95280",
            "å‰": "104e0",
            "ç¤¼ç‰©": "312ec",
            "æ™•": "bda92",
            "å‘†": "557c9",
            "ç”Ÿç—…": "38701",
            "é’»çŸ³": "14af6",
            "æ‹œ": "c9d05",
            "æ€’": "c4f7f",
            "ç¤ºçˆ±": "0c368",
            "æ±—": "5b7a4",
            "å°é¸¡": "6bee2",
            "ç—›è‹¦": "55932",
            "æ’‡å˜´": "575cc",
            "æƒ¶æ": "e10b4",
            "å£ç½©": "24d81",
            "åèˆŒ": "3cfe4",
            "å¿ƒç¢Ž": "875d3",
            "ç”Ÿæ°”": "e8204",
            "å¯çˆ±": "7b97d",
            "é¬¼è„¸": "def52",
            "è·³èˆž": "741d5",
            "ç”·å­©": "46b8e",
            "å¥¸ç¬‘": "289dc",
            "çŒª": "6935b",
            "åœˆ": "3ece0",
            "ä¾¿ä¾¿": "462db",
            "å¤–æ˜Ÿ": "0a22b",
            "åœ£è¯ž": "8e7",
            "æµæ³ª": "01000",
            "å¼º": "1",
            "çˆ±å¿ƒ": "0CoJU",
            "å¥³å­©": "m6Qyw",
            "æƒŠæ": "8W8ju",
            "å¤§ç¬‘": "d"
         },
            s = ["è‰²", "æµæ„Ÿ", "è¿™è¾¹", "å¼±", "å˜´å”‡", "äº²", "å¼€å¿ƒ", "å‘²ç‰™", "æ†¨ç¬‘", "çŒ«", "çš±çœ‰", "å¹½çµ", "è›‹ç³•", "å‘æ€’", "å¤§å“­", "å…”å­", "æ˜Ÿæ˜Ÿ", "é’Ÿæƒ…", "ç‰µæ‰‹", "å…¬é¸¡", "çˆ±æ„", "ç¦æ­¢", "ç‹—", "äº²äº²", "å‰", "ç¤¼ç‰©", "æ™•", "å‘†", "ç”Ÿç—…", "é’»çŸ³", "æ‹œ", "æ€’", "ç¤ºçˆ±", "æ±—", "å°é¸¡", "ç—›è‹¦", "æ’‡å˜´", "æƒ¶æ", "å£ç½©", "åèˆŒ", "å¿ƒç¢Ž", "ç”Ÿæ°”", "å¯çˆ±", "é¬¼è„¸", "è·³èˆž", "ç”·å­©", "å¥¸ç¬‘", "çŒª", "åœˆ", "ä¾¿ä¾¿", "å¤–æ˜Ÿ", "åœ£è¯ž"],
            r = i(s);
         t.exports = {
            emj2code: i,
            BASE_CODE: r
         }
      }, function(t, e) {
         function n(t, e, i) {
            this.e = m(t), this.d = m(e), this.m = m(i), this.chunkSize = 2 * _(this.m), this.radix = 16, this.barrett = new R(this.m)
         }

         function s(t, e) {
            for (var i, n, s, r, o, l, h, u = new Array, p = e.length, f = 0; p > f;) u[f] = e.charCodeAt(f), f++;
            for (; 0 != u.length % t.chunkSize;) u[f++] = 0;
            for (i = u.length, n = "", f = 0; i > f; f += t.chunkSize) {
               for (o = new a, s = 0, r = f; r < f + t.chunkSize; ++s) o.digits[s] = u[r++], o.digits[s] += u[r++] << 8;
               l = t.barrett.powMod(o, t.e), h = 16 == t.radix ? d(l) : c(l, t.radix), n += h + " "
            }
            return n.substring(0, n.length - 1)
         }

         function r(t) {
            H = t, z = new Array(H);
            for (var e = 0; e < z.length; e++) z[e] = 0;
            I = new a, N = new a, N.digits[0] = 1
         }

         function a(t) {
            this.digits = "boolean" == typeof t && 1 == t ? null : z.slice(0), this.isNeg = !1
         }

         function o(t) {
            var e = new a(!0);
            return e.digits = t.digits.slice(0), e.isNeg = t.isNeg, e
         }

         function l(t) {
            var e, i = new a;
            for (i.isNeg = 0 > t, t = Math.abs(t), e = 0; t > 0;) i.digits[e++] = t & G, t >>= X;
            return i
         }

         function h(t) {
            var e, i = "";
            for (e = t.length - 1; e > -1; --e) i += t.charAt(e);
            return i
         }

         function c(t, e) {
            var i, n, s = new a;
            for (s.digits[0] = e, i = M(t, s), n = B[i[1].digits[0]]; 1 == P(i[0], I);) i = M(i[0], s), digit = i[1].digits[0], n += B[i[1].digits[0]];
            return (t.isNeg ? "-" : "") + h(n)
         }

         function u(t) {
            var e = "";
            for (i = 0; 4 > i; ++i) e += L[15 & t], t >>>= 4;
            return h(e)
         }

         function d(t) {
            var e, i = "";
            for (_(t), e = _(t); e > -1; --e) i += u(t.digits[e]);
            return i
         }

         function p(t) {
            return t >= 48 && 57 >= t ? t - 48 : t >= 65 && 90 >= t ? 10 + t - 65 : t >= 97 && 122 >= t ? 10 + t - 97 : 0
         }

         function f(t) {
            var e, i = 0,
               n = Math.min(t.length, 4);
            for (e = 0; n > e; ++e) i <<= 4, i |= p(t.charCodeAt(e));
            return i
         }

         function m(t) {
            var e, i, n = new a,
               s = t.length;
            for (e = s, i = 0; e > 0; e -= 4, ++i) n.digits[i] = f(t.substr(Math.max(e - 4, 0), Math.min(e, 4)));
            return n
         }

         function g(t, e) {
            var i, n, s, r;
            if (t.isNeg != e.isNeg) e.isNeg = !e.isNeg, i = v(t, e), e.isNeg = !e.isNeg;
            else {
               for (i = new a, n = 0, r = 0; r < t.digits.length; ++r) s = t.digits[r] + e.digits[r] + n, i.digits[r] = 65535 & s, n = Number(s >= W);
               i.isNeg = t.isNeg
            }
            return i
         }

         function v(t, e) {
            var i, n, s, r;
            if (t.isNeg != e.isNeg) e.isNeg = !e.isNeg, i = g(t, e), e.isNeg = !e.isNeg;
            else {
               for (i = new a, s = 0, r = 0; r < t.digits.length; ++r) n = t.digits[r] - e.digits[r] + s, i.digits[r] = 65535 & n, i.digits[r] < 0 && (i.digits[r] += W), s = 0 - Number(0 > n);
               if (-1 == s) {
                  for (s = 0, r = 0; r < t.digits.length; ++r) n = 0 - i.digits[r] + s, i.digits[r] = 65535 & n, i.digits[r] < 0 && (i.digits[r] += W), s = 0 - Number(0 > n);
                  i.isNeg = !t.isNeg
               } else i.isNeg = t.isNeg
            }
            return i
         }

         function _(t) {
            for (var e = t.digits.length - 1; e > 0 && 0 == t.digits[e];)--e;
            return e
         }

         function y(t) {
            var e, i = _(t),
               n = t.digits[i],
               s = (i + 1) * U;
            for (e = s; e > s - U && 0 == (32768 & n); --e) n <<= 1;
            return e
         }

         function x(t, e) {
            var i, n, s, r, o = new a,
               l = _(t),
               h = _(e);
            for (r = 0; h >= r; ++r) {
               for (i = 0, s = r, j = 0; l >= j; ++j, ++s) n = o.digits[s] + t.digits[j] * e.digits[r] + i, o.digits[s] = n & G, i = n >>> X;
               o.digits[r + l + 1] = i
            }
            return o.isNeg = t.isNeg != e.isNeg, o
         }

         function w(t, e) {
            var i, n, s, r;
            for (result = new a, i = _(t), n = 0, r = 0; i >= r; ++r) s = result.digits[r] + t.digits[r] * e + n, result.digits[r] = s & G, n = s >>> X;
            return result.digits[1 + i] = n, result
         }

         function b(t, e, i, n, s) {
            var r, a, o = Math.min(e + s, t.length);
            for (r = e, a = n; o > r; ++r, ++a) i[a] = t[r]
         }

         function T(t, e) {
            var i, n, s, r, o = Math.floor(e / U),
               l = new a;
            for (b(t.digits, 0, l.digits, o, l.digits.length - o), i = e % U, n = U - i, s = l.digits.length - 1, r = s - 1; s > 0; --s, --r) l.digits[s] = l.digits[s] << i & G | (l.digits[r] & q[i]) >>> n;
            return l.digits[0] = l.digits[s] << i & G, l.isNeg = t.isNeg, l
         }

         function k(t, e) {
            var i, n, s, r, o = Math.floor(e / U),
               l = new a;
            for (b(t.digits, o, l.digits, 0, t.digits.length - o), i = e % U, n = U - i, s = 0, r = s + 1; s < l.digits.length - 1; ++s, ++r) l.digits[s] = l.digits[s] >>> i | (l.digits[r] & $[i]) << n;
            return l.digits[l.digits.length - 1] >>>= i, l.isNeg = t.isNeg, l
         }

         function S(t, e) {
            var i = new a;
            return b(t.digits, 0, i.digits, e, i.digits.length - e), i
         }

         function C(t, e) {
            var i = new a;
            return b(t.digits, e, i.digits, 0, i.digits.length - e), i
         }

         function E(t, e) {
            var i = new a;
            return b(t.digits, 0, i.digits, 0, e), i
         }

         function P(t, e) {
            if (t.isNeg != e.isNeg) return 1 - 2 * Number(t.isNeg);
            for (var i = t.digits.length - 1; i >= 0; --i) if (t.digits[i] != e.digits[i]) return t.isNeg ? 1 - 2 * Number(t.digits[i] > e.digits[i]) : 1 - 2 * Number(t.digits[i] < e.digits[i]);
            return 0
         }

         function M(t, e) {
            var i, n, s, r, l, h, c, u, d, p, f, m, x, b, C = y(t),
               E = y(e),
               M = e.isNeg;
            if (E > C) return t.isNeg ? (i = o(N), i.isNeg = !e.isNeg, t.isNeg = !1, e.isNeg = !1, n = v(e, t), t.isNeg = !0, e.isNeg = M) : (i = new a, n = o(t)), new Array(i, n);
            for (i = new a, n = t, s = Math.ceil(E / U) - 1, r = 0; e.digits[s] < Y;) e = T(e, 1), ++r, ++E, s = Math.ceil(E / U) - 1;
            for (n = T(n, r), C += r, l = Math.ceil(C / U) - 1, h = S(e, l - s); - 1 != P(n, h);)++i.digits[l - s], n = v(n, h);
            for (c = l; c > s; --c) {
               for (u = c >= n.digits.length ? 0 : n.digits[c], d = c - 1 >= n.digits.length ? 0 : n.digits[c - 1], p = c - 2 >= n.digits.length ? 0 : n.digits[c - 2], f = s >= e.digits.length ? 0 : e.digits[s], m = s - 1 >= e.digits.length ? 0 : e.digits[s - 1], i.digits[c - s - 1] = u == f ? G : Math.floor((u * W + d) / f), x = i.digits[c - s - 1] * (f * W + m), b = u * V + (d * W + p); x > b;)--i.digits[c - s - 1], x = i.digits[c - s - 1] * (f * W | m), b = u * W * W + (d * W + p);
               h = S(e, c - s - 1), n = v(n, w(h, i.digits[c - s - 1])), n.isNeg && (n = g(n, h), --i.digits[c - s - 1])
            }
            return n = k(n, r), i.isNeg = t.isNeg != M, t.isNeg && (i = M ? g(i, N) : v(i, N), e = k(e, r), n = v(e, n)), 0 == n.digits[0] && 0 == _(n) && (n.isNeg = !1), new Array(i, n)
         }

         function O(t, e) {
            return M(t, e)[0]
         }

         function R(t) {
            this.modulus = o(t), this.k = _(this.modulus) + 1;
            var e = new a;
            e.digits[2 * this.k] = 1, this.mu = O(e, this.modulus), this.bkplus1 = new a, this.bkplus1.digits[this.k + 1] = 1, this.modulo = A, this.multiplyMod = D, this.powMod = F
         }

         function A(t) {
            var e, i = C(t, this.k - 1),
               n = x(i, this.mu),
               s = C(n, this.k + 1),
               r = E(t, this.k + 1),
               a = x(s, this.modulus),
               o = E(a, this.k + 1),
               l = v(r, o);
            for (l.isNeg && (l = g(l, this.bkplus1)), e = P(l, this.modulus) >= 0; e;) l = v(l, this.modulus), e = P(l, this.modulus) >= 0;
            return l
         }

         function D(t, e) {
            var i = x(t, e);
            return this.modulo(i)
         }

         function F(t, e) {
            var i, n, s = new a;
            for (s.digits[0] = 1, i = t, n = e; 0 != (1 & n.digits[0]) && (s = this.multiplyMod(s, i)), n = k(n, 1), 0 != n.digits[0] || 0 != _(n);) i = this.multiplyMod(i, i);
            return s
         }
         var H, z, I, N, B, L, q, $, X = 16,
            U = X,
            W = 65536,
            Y = W >>> 1,
            V = W * W,
            G = W - 1;
         r(20), 15, l(1e15), B = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"), L = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"), q = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535), $ = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535), t.exports = {
            RSAKeyPair: n,
            setMaxDigits: r,
            encryptedString: s
         }
      }, function(module, exports, __webpack_require__) {
         var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
         /*!
          * Reqwest! A general purpose XHR connection manager
          * license MIT (c) Dustin Diaz 2015
          * https://github.com/ded/reqwest
          */
         !
         function(t, e, i) {
            void 0 !== module && module.exports ? module.exports = i() : (__WEBPACK_AMD_DEFINE_FACTORY__ = i, void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
         }(0, 0, function() {
            function succeed(t) {
               var e = protocolRe.exec(t.url);
               return e = e && e[1] || context.location.protocol, httpsRe.test(e) ? twoHundo.test(t.request.status) : !! t.request.response
            }

            function handleReadyState(t, e, i) {
               return function() {
                  return t._aborted ? i(t.request) : t._timedOut ? i(t.request, "Request is aborted: timeout") : void(t.request && 4 == t.request[readyState] && (t.request.onreadystatechange = noop, succeed(t) ? e(t.request) : i(t.request)))
               }
            }

            function setHeaders(t, e) {
               var i, n = e.headers || {};
               n.Accept = n.Accept || defaultHeaders.accept[e.type] || defaultHeaders.accept["*"];
               var s = "undefined" != typeof FormData && e.data instanceof FormData;
               e.crossOrigin || n[requestedWith] || (n[requestedWith] = defaultHeaders.requestedWith), n[contentType] || s || (n[contentType] = e.contentType || defaultHeaders.contentType);
               for (i in n) n.hasOwnProperty(i) && "setRequestHeader" in t && t.setRequestHeader(i, n[i])
            }

            function setCredentials(t, e) {
               void 0 !== e.withCredentials && void 0 !== t.withCredentials && (t.withCredentials = !! e.withCredentials)
            }

            function generalCallback(t) {
               lastValue = t
            }

            function urlappend(t, e) {
               return t + (/\?/.test(t) ? "&" : "?") + e
            }

            function handleJsonp(t, e, i, n) {
               var s = uniqid++,
                  r = t.jsonpCallback || "callback",
                  a = t.jsonpCallbackName || reqwest.getcallbackPrefix(s),
                  o = new RegExp("((^|\\?|&)" + r + ")=([^&]+)"),
                  l = n.match(o),
                  h = doc.createElement("script"),
                  c = 0,
                  u = -1 !== navigator.userAgent.indexOf("MSIE 10.0");
               return l ? "?" === l[3] ? n = n.replace(o, "$1=" + a) : a = l[3] : n = urlappend(n, r + "=" + a), context[a] = generalCallback, h.type = "text/javascript", h.src = n, h.async = !0, void 0 === h.onreadystatechange || u || (h.htmlFor = h.id = "_reqwest_" + s), h.onload = h.onreadystatechange = function() {
                  if (h[readyState] && "complete" !== h[readyState] && "loaded" !== h[readyState] || c) return !1;
                  h.onload = h.onreadystatechange = null, h.onclick && h.onclick(), e(lastValue), lastValue = void 0, head.removeChild(h), c = 1
               }, head.appendChild(h), {
                  abort: function() {
                     h.onload = h.onreadystatechange = null, i({}, "Request is aborted: timeout", {}), lastValue = void 0, head.removeChild(h), c = 1
                  }
               }
            }

            function getRequest(t, e) {
               var i, n = this.o,
                  s = (n.method || "GET").toUpperCase(),
                  r = "string" == typeof n ? n : n.url,
                  a = !1 !== n.processData && n.data && "string" != typeof n.data ? reqwest.toQueryString(n.data) : n.data || null,
                  o = !1;
               return "jsonp" != n.type && "GET" != s || !a || (r = urlappend(r, a), a = null), "jsonp" == n.type ? handleJsonp(n, t, e, r) : (i = n.xhr && n.xhr(n) || xhr(n), i.open(s, r, !1 !== n.async), setHeaders(i, n), setCredentials(i, n), context[xDomainRequest] && i instanceof context[xDomainRequest] ? (i.onload = t, i.onerror = e, i.onprogress = function() {}, o = !0) : i.onreadystatechange = handleReadyState(this, t, e), n.before && n.before(i), o ? setTimeout(function() {
                  i.send(a)
               }, 200) : i.send(a), i)
            }

            function Reqwest(t, e) {
               this.o = t, this.fn = e, init.apply(this, arguments)
            }

            function setType(t) {
               if (null !== t) return t.match("json") ? "json" : t.match("javascript") ? "js" : t.match("text") ? "html" : t.match("xml") ? "xml" : void 0
            }

            function init(o, fn) {
               function complete(t) {
                  for (o.timeout && clearTimeout(self.timeout), self.timeout = null; self._completeHandlers.length > 0;) self._completeHandlers.shift()(t)
               }

               function success(resp) {
                  var type = o.type || resp && setType(resp.getResponseHeader("Content-Type"));
                  resp = "jsonp" !== type ? self.request : resp;
                  var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type),
                     r = filteredResponse;
                  try {
                     resp.responseText = r
                  } catch (t) {}
                  if (r) switch (type) {
                  case "json":
                     try {
                        resp = context.JSON ? context.JSON.parse(r) : eval("(" + r + ")")
                     } catch (t) {
                        return error(resp, "Could not parse JSON in response", t)
                     }
                     break;
                  case "js":
                     resp = eval(r);
                     break;
                  case "html":
                     resp = r;
                     break;
                  case "xml":
                     resp = resp.responseXML && resp.responseXML.parseError && resp.responseXML.parseError.errorCode && resp.responseXML.parseError.reason ? null : resp.responseXML
                  }
                  for (self._responseArgs.resp = resp, self._fulfilled = !0, fn(resp), self._successHandler(resp); self._fulfillmentHandlers.length > 0;) resp = self._fulfillmentHandlers.shift()(resp);
                  complete(resp)
               }

               function timedOut() {
                  self._timedOut = !0, self.request.abort()
               }

               function error(t, e, i) {
                  for (t = self.request, self._responseArgs.resp = t, self._responseArgs.msg = e, self._responseArgs.t = i, self._erred = !0; self._errorHandlers.length > 0;) self._errorHandlers.shift()(t, e, i);
                  complete(t)
               }
               this.url = "string" == typeof o ? o : o.url, this.timeout = null, this._fulfilled = !1, this._successHandler = function() {}, this._fulfillmentHandlers = [], this._errorHandlers = [], this._completeHandlers = [], this._erred = !1, this._responseArgs = {};
               var self = this;
               fn = fn ||
               function() {}, o.timeout && (this.timeout = setTimeout(function() {
                  timedOut()
               }, o.timeout)), o.success && (this._successHandler = function() {
                  o.success.apply(o, arguments)
               }), o.error && this._errorHandlers.push(function() {
                  o.error.apply(o, arguments)
               }), o.complete && this._completeHandlers.push(function() {
                  o.complete.apply(o, arguments)
               }), this.request = getRequest.call(this, success, error)
            }

            function reqwest(t, e) {
               return new Reqwest(t, e)
            }

            function normalize(t) {
               return t ? t.replace(/\r?\n/g, "\r\n") : ""
            }

            function serial(t, e) {
               var i, n, s, r, a = t.name,
                  o = t.tagName.toLowerCase(),
                  l = function(t) {
                     t && !t.disabled && e(a, normalize(t.attributes.value && t.attributes.value.specified ? t.value : t.text))
                  };
               if (!t.disabled && a) switch (o) {
               case "input":
                  /reset|button|image|file/i.test(t.type) || (i = /checkbox/i.test(t.type), n = /radio/i.test(t.type), s = t.value, (!(i || n) || t.checked) && e(a, normalize(i && "" === s ? "on" : s)));
                  break;
               case "textarea":
                  e(a, normalize(t.value));
                  break;
               case "select":
                  if ("select-one" === t.type.toLowerCase()) l(t.selectedIndex >= 0 ? t.options[t.selectedIndex] : null);
                  else for (r = 0; t.length && r < t.length; r++) t.options[r].selected && l(t.options[r])
               }
            }

            function eachFormElement() {
               var t, e, i = this;
               for (e = 0; e < arguments.length; e++) t = arguments[e], /input|select|textarea/i.test(t.tagName) && serial(t, i), function(t, e) {
                  var n, s, r;
                  for (n = 0; n < e.length; n++) for (r = t[byTag](e[n]), s = 0; s < r.length; s++) serial(r[s], i)
               }(t, ["input", "select", "textarea"])
            }

            function serializeQueryString() {
               return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments))
            }

            function serializeHash() {
               var t = {};
               return eachFormElement.apply(function(e, i) {
                  e in t ? (t[e] && !isArray(t[e]) && (t[e] = [t[e]]), t[e].push(i)) : t[e] = i
               }, arguments), t
            }

            function buildParams(t, e, i, n) {
               var s, r, a, o = /\[\]$/;
               if (isArray(e)) for (r = 0; e && r < e.length; r++) a = e[r], i || o.test(t) ? n(t, a) : buildParams(t + "[" + ("object" == typeof a ? r : "") + "]", a, i, n);
               else if (e && "[object Object]" === e.toString()) for (s in e) buildParams(t + "[" + s + "]", e[s], i, n);
               else n(t, e)
            }
            var context = this;
            if ("window" in context) var doc = document,
               byTag = "getElementsByTagName",
               head = doc[byTag]("head")[0];
            else {
               var XHR2;
               try {
                  XHR2 = __webpack_require__(7)
               } catch (t) {
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
               isArray = "function" == typeof Array.isArray ? Array.isArray : function(t) {
                  return t instanceof Array
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
               xhr = function(t) {
                  if (!0 === t.crossOrigin) {
                     var e = context[xmlHttpRequest] ? new XMLHttpRequest : null;
                     if (e && "withCredentials" in e) return e;
                     if (context[xDomainRequest]) return new XDomainRequest;
                     throw new Error("Browser does not support cross-origin requests")
                  }
                  return context[xmlHttpRequest] ? new XMLHttpRequest : XHR2 ? new XHR2 : new ActiveXObject("Microsoft.XMLHTTP")
               },
               globalSetupOptions = {
                  dataFilter: function(t) {
                     return t
                  }
               };
            return Reqwest.prototype = {
               abort: function() {
                  this._aborted = !0, this.request.abort()
               },
               retry: function() {
                  init.call(this, this.o, this.fn)
               },
               then: function(t, e) {
                  return t = t ||
                  function() {}, e = e ||
                  function() {}, this._fulfilled ? this._responseArgs.resp = t(this._responseArgs.resp) : this._erred ? e(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : (this._fulfillmentHandlers.push(t), this._errorHandlers.push(e)), this
               },
               always: function(t) {
                  return this._fulfilled || this._erred ? t(this._responseArgs.resp) : this._completeHandlers.push(t), this
               },
               fail: function(t) {
                  return this._erred ? t(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : this._errorHandlers.push(t), this
               },
               catch: function(t) {
                  return this.fail(t)
               }
            }, reqwest.serializeArray = function() {
               var t = [];
               return eachFormElement.apply(function(e, i) {
                  t.push({
                     name: e,
                     value: i
                  })
               }, arguments), t
            }, reqwest.serialize = function() {
               if (0 === arguments.length) return "";
               var t, e, i = Array.prototype.slice.call(arguments, 0);
               return t = i.pop(), t && t.nodeType && i.push(t) && (t = null), t && (t = t.type), e = "map" == t ? serializeHash : "array" == t ? reqwest.serializeArray : serializeQueryString, e.apply(null, i)
            }, reqwest.toQueryString = function(t, e) {
               var i, n, s = e || !1,
                  r = [],
                  a = encodeURIComponent,
                  o = function(t, e) {
                     e = "function" == typeof e ? e() : null == e ? "" : e, r[r.length] = a(t) + "=" + a(e)
                  };
               if (isArray(t)) for (n = 0; t && n < t.length; n++) o(t[n].name, t[n].value);
               else for (i in t) t.hasOwnProperty(i) && buildParams(i, t[i], s, o);
               return r.join("&").replace(/%20/g, "+")
            }, reqwest.getcallbackPrefix = function() {
               return callbackPrefix
            }, reqwest.compat = function(t, e) {
               return t && (t.type && (t.method = t.type) && delete t.type, t.dataType && (t.type = t.dataType), t.jsonpCallback && (t.jsonpCallbackName = t.jsonpCallback) && delete t.jsonpCallback, t.jsonp && (t.jsonpCallback = t.jsonp)), new Reqwest(t, e)
            }, reqwest.ajaxSetup = function(t) {
               t = t || {};
               for (var e in t) globalSetupOptions[e] = t[e]
            }, reqwest
         })
      }, function(t, e) {}, function(t, e, i) {
         function n(t, e) {
            var i, n = {},
               e = r({}, e),
               s = t.split("?"),
               g = e.headers || (e.headers = {});
            if (void 0 === e.credentials && (e.credentials = "include"), m.test(t) && g[p] !== f && !e.noEnc) {
               g[p] = "application/x-www-form-urlencoded", g.Accept, 2 === s.length && (n = o(s[1])), t = s[0], ["query", "data"].forEach(function(t) {
                  e[t] && (n = r(n, "string" == typeof e[t] ? o(e[t]) : e[t]))
               });
               var v = l("__csrf");
               return v && (n.csrf_token = v), t = t.replace("api", "weapi") + (v ? "?" + a({
                  csrf_token: n.csrf_token
               }) : ""), e.method = "post", delete e.query, delete e.data, i = h(JSON.stringify(n), c(["æµæ³ª", "å¼º"]), u, c(["çˆ±å¿ƒ", "å¥³å­©", "æƒŠæ", "å¤§ç¬‘"])), e.body = a({
                  params: i.encText,
                  encSecKey: i.encSecKey
               }), d(t, e)
            }
            return d(t, e)
         }
         var s = i(0),
            r = s.extend,
            a = s.obj2query,
            o = s.query2obj,
            l = s.getCookie,
            h = s.asrsea,
            c = (s.ecnonasr, s.emj2code),
            u = s.BASE_CODE,
            d = void 0;
         "undefined" != typeof window && (d = i(1));
         var p = "Content-Type",
            f = "multipart/form-data",
            m = /(^|\.com)\/api/;
         n.encode = function(t, e) {
            t || (t = {}), e && (t.csrf_token = e);
            var i = h(JSON.stringify(t), c(["æµæ³ª", "å¼º"]), u, c(["çˆ±å¿ƒ", "å¥³å­©", "æƒŠæ", "å¤§ç¬‘"]));
            return e && (i.query = a({
               csrf_token: e
            })), i
         }, n.util = r({
            fetch: d
         }, s), t.exports = n
      }])
   })
}, 
30: function(t, e) {
   t.exports = function(t, e) {
      return {
         enumerable: !(1 & t),
         configurable: !(2 & t),
         writable: !(4 & t),
         value: e
      }
   }
}, 
31: function(t, e) {
   var i = 0,
      n = Math.random();
   t.exports = function(t) {
      return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++i + n).toString(36))
   }
}, , , 
34: function(t, e) {
   t.exports = {}
}, 
35: function(t, e) {
   e.f = {}.propertyIsEnumerable
}, ,
37: function(t, e) {
   t.exports = !0
}, 
38: function(t, e, i) {
   var n = i(12).f,
      s = i(9),
      r = i(6)("toStringTag");
   t.exports = function(t, e, i) {
      t && !s(t = i ? t : t.prototype, r) && n(t, r, {
         configurable: !0,
         value: e
      })
   }
}, , 
40: function(t, e) {
   t.exports = function(t) {
      if (void 0 == t) throw TypeError("Can't call method on  " + t);
      return t
   }
}, 
41: function(t, e) {
   t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, 
42: function(t, e, i) {
   var n = i(43)("keys"),
      s = i(31);
   t.exports = function(t) {
      return n[t] || (n[t] = s(t))
   }
}, 
43: function(t, e, i) {
   var n = i(2),
      s = n["__core-js_shared__"] || (n["__core-js_shared__"] = {});
   t.exports = function(t) {
      return s[t] || (s[t] = {})
   }
}, 
44: function(t, e) {
   var i = Math.ceil,
      n = Math.floor;
   t.exports = function(t) {
      return isNaN(t = +t) ? 0 : (t > 0 ? n : i)(t)
   }
}, 
45: function(t, e, i) {
   var n = i(40);
   t.exports = function(t) {
      return Object(n(t))
   }
}, 
46: function(t, e, i) {
   var n = i(17);
   t.exports = function(t, e) {
      if (!n(t)) return t;
      var i, s;
      if (e && "function" == typeof(i = t.toString) && !n(s = i.call(t))) return s;
      if ("function" == typeof(i = t.valueOf) && !n(s = i.call(t))) return s;
      if (!e && "function" == typeof(i = t.toString) && !n(s = i.call(t))) return s;
      throw TypeError("Can't convert object to primitive value")
   }
}, 
47: function(t, e, i) {
   var n = i(2),
      s = i(3),
      r = i(37),
      a = i(48),
      o = i(12).f;
   t.exports = function(t) {
      var e = s.Symbol || (s.Symbol = r ? {} : n.Symbol || {});
      "_" == t.charAt(0) || t in e || o(e, t, {
         value: a.f(t)
      })
   }
}, 
48: function(t, e, i) {
   e.f = i(6)
}, 
49: function(t, e) {
   var i = {}.toString;
   t.exports = function(t) {
      return i.call(t).slice(8, -1)
   }
}, , 
51: function(t, e, i) {
   "use strict";
   Object.defineProperty(e, "__esModule", {
      value: !0
   });
   var n = i(59),
      s = function() {};
   "undefined" != typeof window && (s = i(29));
   var r = function(t, e) {
         var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {};
         arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
         t && s(n.CurrentHost + "/api/feedback/weblog", {
            method: "post",
            data: {
               logs: JSON.stringify([{
                  action: t,
                  json: e || null
               }])
            }
         }).then(function(t) {
            return t.json()
         }).then(function(t) {
            i(t)
         }).
         catch (function(t) {
            i(t)
         })
      };
   e.
default = r, t.exports = e.
default
}, , , , , 
56: function(t, e, i) {
   var n = i(21),
      s = i(139),
      r = i(41),
      a = i(42)("IE_PROTO"),
      o = function() {},
      l = function() {
         var t, e = i(66)("iframe"),
            n = r.length;
         for (e.style.display = "none", i(101).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object<\/script>"), t.close(), l = t.F; n--;) delete l.prototype[r[n]];
         return l()
      };
   t.exports = Object.create ||
   function(t, e) {
      var i;
      return null !== t ? (o.prototype = n(t), i = new o, o.prototype = null, i[a] = t) : i = l(), void 0 === e ? i : s(i, e)
   }
}, 
57: function(t, e) {
   e.f = Object.getOwnPropertySymbols
}, 
58: function(t, e, i) {
   "use strict";

   function n(t) {
      return t && t.__esModule ? t : {
      default:
         t
      }
   }
   Object.defineProperty(e, "__esModule", {
      value: !0
   }), i(162);
   var s = i(51),
      r = n(s),
      a = i(23),
      o = n(a),
      l = i(29),
      h = (n(l), i(86)),
      c = (n(h), {});
   c.delay = function(t) {
      return new Promise(function(e) {
         setTimeout(e, t)
      })
   }, c.remove = function(t, e) {
      if (t && 0 != t.length) {
         var i = t.indexOf(e);
         i < 0 || t.splice(i, 1)
      }
   }, c.offset = function(t) {
      if (!t.parent) return {
         x: 0,
         y: 0
      };
      var e = c.offset(t.parent);
      return {
         x: t.x + e.x,
         y: t.y + e.y
      }
   }, c.offsetY = function(t) {
      return t.parent && t.y ? t.y + c.offsetY(t.parent) : 0
   }, c.offsetX = function(t) {
      return t.parent && t.x ? t.x + c.offsetX(t.parent) : 0
   }, c.adjustTime = function(t) {
      return 60 * t / Math.max(game.ticker.getMeasuredFPS(), 40)
   }, c.getActionNode = function(t) {
      return t ? t.getAttribute && t.getAttribute("data-action") ? t : c.getActionNode(t.parentNode) : null
   }, c.biLogPage = function(t) {
      (0, r.
   default)("page", {
         type: "webviewactivity",
         url: location.href,
         target: "m2_happiness",
         page: t,
         is_webview: o.
      default.isMobile() && o.
      default.isInNEMapp() ? 0:
         1,
         osver : o.
      default.getOSVersionStr()
      })
   }, c.biLogClick = function(t, e) {
      (0, r.
   default)("click", {
         resource: "webviewactivity",
         url: location.href,
         activity: "m2_happiness",
         page: t,
         target: e,
         is_webview: o.
      default.isMobile() && o.
      default.isInNEMapp() ? 0:
         1,
         osver : o.
      default.getOSVersionStr()
      })
   }, c.getAppShareType = function() {
      var t = {
         qqfriend: "qq",
         qqtimeline: "qzone",
         wxfriend: "wxsession",
         wxtimeline: "wxtimeline",
         yxfriend: "yxsession",
         yxtimeline: "yxtimeline",
         wb: "sina",
         db: "douban"
      };
      return function(e) {
         return t[e] || e
      }
   }();
   var u = 0;
   c.stopAppMusic = function() {
      o.
   default.isInNEMapp() && (u && (u = clearTimeout(u)), u = setTimeout(function() {
         location.href = "orpheus://stopplay"
      }, 10))
   }, c.isWeChat = function() {
      return /micromessenger/i.test(navigator.userAgent)
   }, c.getRandomShareLink = function() {
      return location.protocol + "//" + location.host + "/nact/happiness_" + Math.floor(50 * Math.random() + 1)
   }, e.
default = c
}, 
59: function(t, e, i) {
   "use strict";
   Object.defineProperty(e, "__esModule", {
      value: !0
   });
   var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
   function(t) {
      return typeof t
   } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
   }, s = function(t) {
      var e = {};
      if (!t) return e;
      t = "?" == t.charAt(0) ? t.slice(1) : t;
      for (var i = t.split("&"), n = 0, s = i.length; n < s; n++) {
         var r = i[n].split("=");
         try {
            e[r[0]] = decodeURIComponent(r[1])
         } catch (t) {
            e[r[0]] = r[1]
         }
      }
      return e
   }, r = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/, a = function(t) {
      var e = {};
      if (t) if ("string" == typeof t) {
         var i = t.match(r),
            a = i[1] ? i[1] + ":" : "",
            o = i[7] ? "#" + i[7] : "",
            l = i[3] || "",
            h = i[4] || "",
            c = i[5] ? "/" + i[5] : "",
            u = [l],
            d = i[6] ? "?" + i[6] : "";
         h && u.push(h), e = null != i ? {
            hash: o,
            host: u.join(":"),
            hostname: l,
            href: t,
            origin: a + "//" + u,
            pathname: c,
            port: h,
            protocol: a,
            search: d
         } : {}
      } else "object" === (void 0 === t ? "undefined" : n(t)) && (e = t);
      return e.params = s(e.search), e
   }, o = function() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
         i = t.search || "",
         n = t.hostname || "",
         r = t.protocol || "";
      e.CurrentParams = h = s(i), e.CurrentHost = l = "localhost" == n ? "igame.163.com" : n, r && (r = -1 != r.indexOf(":") ? r : r + ":"), e.CurrentHost = l = r + "//" + l, a.CurrentParams = h, a.CurrentHost = l
   }, l = "music.163.com", h = "";
   "undefined" != typeof window && o(window.location), e.UrlInit = o, e.CurrentParams = h, e.CurrentHost = l, e.getParams = s, a.getParams = s, a.UrlInit = o, e.
default = a
}, 
60: function(t, e, i) {
   "use strict";
   Object.defineProperty(e, "__esModule", {
      value: !0
   });
   var n = Hilo.Class.create({
      Extends: Hilo.Bitmap,
      constructor: function() {
         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
         t.width = t.width || 100, t.height = t.height || 150, t.image = game.asset.block, n.superclass.constructor.call(this, t)
      }
   });
   e.
default = n
}, , , , 
64: function(t, e, i) {
   t.exports = {
   default:
      i(129), __esModule: !0
   }
}, 
65: function(t, e, i) {
   var n = i(85);
   t.exports = function(t, e, i) {
      if (n(t), void 0 === e) return t;
      switch (i) {
      case 1:
         return function(i) {
            return t.call(e, i)
         };
      case 2:
         return function(i, n) {
            return t.call(e, i, n)
         };
      case 3:
         return function(i, n, s) {
            return t.call(e, i, n, s)
         }
      }
      return function() {
         return t.apply(e, arguments)
      }
   }
}, 
66: function(t, e, i) {
   var n = i(17),
      s = i(2).document,
      r = n(s) && n(s.createElement);
   t.exports = function(t) {
      return r ? s.createElement(t) : {}
   }
}, 
67: function(t, e, i) {
   "use strict";

   function n(t) {
      return t && t.__esModule ? t : {
      default:
         t
      }
   }
   Object.defineProperty(e, "__esModule", {
      value: !0
   }), i(205);
   var s = i(58),
      r = n(s),
      a = i(152),
      o = n(a),
      l = Hilo.Class.create({
         Extends: Hilo.Container,
         constructor: function(t) {
            l.superclass.constructor.apply(this, arguments), this.width = t.width || 750, this.height = t.height || 1334, this.initScenePos(t.startX, t.startY), this.init(t), setTimeout(this.shortcut.bind(this), 200)
         },
         shortcut: function() {},
         onRecoverCurrent: function(t, e) {},
         onRecoverNext: function(t, e) {
            this.x = t.x + t.width
         },
         init: function(t) {
            throw new Error("å­ç±»å®žçŽ°ï¼Œåˆ›å»ºä¸€äº›åœºæ™¯ä¸­éœ€è¦çš„å¯¹è±¡")
         },
         dispose: function() {
            this.clearCollisionSet()
         },
         initScenePos: function(t, e) {
            this.x = t || 0, this.y = e || 0
         },
         clearCollisionSet: function() {
            var t = this.children;
            game.collisionSet = game.collisionSet.filter(function(e) {
               return -1 === t.indexOf(e)
            })
         },
         onUpdate: function(t) {
            var e = game.man;
            if (this.loopBGM(), e.isDead) return !0;
            this.updateJumpPoint(), (game.forceMovingX || e.isMovingX && !game.isDisabled) && e.x >= e.MIDDLE_SCENE && !game.isFreeWalk && (this.x -= e.stepLength)
         },
         updateJumpPoint: function() {},
         isOnBlock: function(t) {
            var e = game.man,
               i = r.
            default.offset(t);
            return e.y + e.height - e.manBottom.height == i.y && e.x >= i.x - e.width && e.x <= i.x + t.width
         },
         calcBlockDistanceY: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return game.man.updateJumpPoint(this.x + t.x + t.width - game.man.x + e)
         },
         shift: function() {
            game.sceneSet[0] && game.sceneSet[0].id != this.id && game.shift()
         },
         checkAudio: function() {},
         loopBGM: function() {
            var t = o.
         default.bgm.isPlaying(),
               e = o.
            default.bgm.isPaused();
            t && !e || o.
         default.bgm.play()
         }
      });
   e.
default = l
}, , , , 
71: function(t, e, i) {
   t.exports = !i(11) && !i(22)(function() {
      return 7 != Object.defineProperty(i(66)("div"), "a", {
         get: function() {
            return 7
         }
      }).a
   })
}, 
72: function(t, e, i) {
   "use strict";
   var n = i(37),
      s = i(19),
      r = i(75),
      a = i(15),
      o = i(9),
      l = i(34),
      h = i(136),
      c = i(38),
      u = i(96),
      d = i(6)("iterator"),
      p = !([].keys && "next" in [].keys()),
      f = function() {
         return this
      };
   t.exports = function(t, e, i, m, g, v, _) {
      h(i, e, m);
      var y, x, w, b = function(t) {
            if (!p && t in C) return C[t];
            switch (t) {
            case "keys":
            case "values":
               return function() {
                  return new i(this, t)
               }
            }
            return function() {
               return new i(this, t)
            }
         },
         T = e + " Iterator",
         k = "values" == g,
         S = !1,
         C = t.prototype,
         E = C[d] || C["@@iterator"] || g && C[g],
         P = !p && E || b(g),
         M = g ? k ? b("entries") : P : void 0,
         O = "Array" == e ? C.entries || E : E;
      if (O && (w = u(O.call(new t))) !== Object.prototype && w.next && (c(w, T, !0), n || o(w, d) || a(w, d, f)), k && E && "values" !== E.name && (S = !0, P = function() {
         return E.call(this)
      }), n && !_ || !p && !S && C[d] || a(C, d, P), l[e] = P, l[T] = f, g) if (y = {
         values: k ? P : b("values"),
         keys: v ? P : b("keys"),
         entries: M
      }, _) for (x in y) x in C || r(C, x, y[x]);
      else s(s.P + s.F * (p || S), e, y);
      return y
   }
}, 
73: function(t, e, i) {
   var n = i(74),
      s = i(41).concat("length", "prototype");
   e.f = Object.getOwnPropertyNames ||
   function(t) {
      return n(t, s)
   }
}, 
74: function(t, e, i) {
   var n = i(9),
      s = i(18),
      r = i(133)(!1),
      a = i(42)("IE_PROTO");
   t.exports = function(t, e) {
      var i, o = s(t),
         l = 0,
         h = [];
      for (i in o) i != a && n(o, i) && h.push(i);
      for (; e.length > l;) n(o, i = e[l++]) && (~r(h, i) || h.push(i));
      return h
   }
}, 
75: function(t, e, i) {
   t.exports = i(15)
}, 
76: function(t, e, i) {
   "use strict";

   function n(t) {
      return t && t.__esModule ? t : {
      default:
         t
      }
   }
   Object.defineProperty(e, "__esModule", {
      value: !0
   });
   var s = i(27),
      r = n(s),
      a = i(113),
      o = n(a),
      l = i(114),
      h = n(l),
      c = i(112),
      u = n(c),
      d = "http://a.app.qq.com/o/simple.jsp?pkgname=com.netease.cloudmusic",
      p = "//music.163.com/api/android/download/latest2",
      f = function() {};
   "undefined" != typeof window && (f = i(150), h.
default.params.market && (p = p + "?market=" + h.
default.params.market));
   var m = ["micromessenger", "qq", "weibo", "douban", "renren"],
      g = {
         topic: "subject",
         activity: "topic"
      },
      v = /igame\.163\.com/,
      _ = function(t) {
         return m.indexOf(t) > -1
      },
      y = function(t) {
         if ("string" != typeof t) return "";
         var e = t;
         return "orpheus://" !== e.substring(0, 10) && (e = "orpheus://" + e), e
      },
      x = function(t) {
         var e = void 0;
         return function() {
            return e || (e = t())
         }
      }(function() {
         var t = window.location,
            e = t.hostname;
         e = v.test(e) ? "igame.163.com" : "music.163.com";
         var i = t.protocol + "//" + e + "/m/download",
            n = o.
         default.getPlatform2Str(),
            s = o.
         default.getClient(),
            r = o.
         default.isWP10(),
            a = o.
         default.getDevice();
         return "ios" === n ? i = "pad" === a ? "https://itunes.apple.com/cn/app/wang-yi-yun-yin-lehd/id871041757?l=ch":
         "micromessenger" === s || "qq" === s ? d : "https://itunes.apple.com/app/id590338362" : "wp" === n ? i = r ? "https://www.microsoft.com/store/apps/9nblggh6g0jf" : "http://www.windowsphone.com/s?appid=db9dbdaa-464e-4370-a078-800fc7983d39" : "micromessenger" === s || "qq" === s ? i = "http://a.app.qq.com/o/simple.jsp?pkgname=com.netease.cloudmusic&co-channel=87999" : "android" === n && (i = p), i
      }),
      w = function(t) {
         if (!t) return "";
         if ("undefined" == typeof window) return t;
         var e = y(t),
            i = window.location,
            n = i.search,
            s = i.hash,
            r = (0, l.parse)(n),
            a = (0, l.parse)(s && s.split("?")[1]),
            h = [];
         if (r.userid && -1 === e.indexOf("shareuserid=") && h.push("shareuserid=" + r.userid), r.yyfrom && -1 === e.indexOf("yyfrom=") && h.push("yyfrom=" + r.yyfrom), -1 === e.indexOf("thirdfrom=")) {
            var c = o.
         default.getClient(),
               u = o.
            default.fetchLogByClient(c);
            u ? h.push("thirdfrom=" + u):
            a.thirdfrom && h.push("thirdfrom=" + a.thirdfrom)
         }
         var d = e.indexOf("?") > 0 ? "&" : "?";
         return h.length > 0 ? "" + e + d + h.join("&") : e
      },
      b = /^\d+$/,
      T = function(t, e) {
         var i = void 0;
         i = "openurl" === t ? o.
      default.isInNEMapp() ? "activity":
         "openurl" : g[t] || t;
         var n = String(e),
            s = b.test(n) ? "/" : "?";
         return n = "" !== n ? "" + s + e : "", "orpheus://" + i + n
      },
      k = /^orpheus:\/\//,
      S = ["blur", "pagehide", "beforeunload"],
      C = function() {
         var t = [],
            e = null,
            i = null;
         if ("undefined" != typeof window) {
            var n = function e() {
                  t.forEach(function(t) {
                     window.clearTimeout(t)
                  }), t = [], S.forEach(function(t) {
                     window.removeEventListener(t, e, !1)
                  })
               };
            S.forEach(function(t) {
               window.addEventListener(t, n, !1)
            })
         }
         return function(n, s) {
            var r = n;
            if (r) if (r = w(r), o.
         default.isAndroidChrome()) {
               var a = r;
               k.test(a) && (a = a.substring(10));
               var l = "";
               "string" == typeof s && s.length > 0 && (l = ";S.browser_fallback_url=" + encodeURIComponent(s));
               var h = "intent://" + a + "/#Intent;scheme=orpheus;package=com.netease.cloudmusic" + l + ";end";
               location.href = h
            } else window.setTimeout(function() {
               "string" == typeof s && s.length > 0 && t.push(window.setTimeout(function() {
                  +new Date - e < 3100 && (window.top.location.href = s)
               }, 3e3)), e = +new Date, o.
            default.getIosLargeVersion() >= 9 ? location.href = r:
               (i = document.createElement("iframe"), i.src = r, i.style.display = "none", document.body.appendChild(i), window.setTimeout(function() {
                  i && (document.body.removeChild(i), i = null)
               }, 0))
            }, 0)
         }
      }(),
      E = function(t, e, i, n) {
         var s = w(t),
            r = window.location,
            a = v.test(r.host) ? "m.igame.163.com" : "m.music.163.com",
            o = r.protocol + "//" + a + "/m/applink/?scheme=" + encodeURIComponent(s);
         n && (o = r.protocol + "//" + a + "/m/applink/emptydl/?scheme=" + encodeURIComponent(s)), "string" == typeof e && e && (o = o + "&dl=" + encodeURIComponent(e)), "boolean" == typeof i && i && (o += "&redirect=1"), r.href = o
      },
      P = function() {};
   P = function() {
      var t = [61323, 50123, 49387, 39783, 25023, 16384, 9489, 8732, 6467, 5390, 4678, 3557, 2878],
         e = function(t, e) {
            P(t, e + 1)
         };
      return function(i, n) {
         var s = n || 0;
         if (!(s >= t.length)) {
            var r = +new Date,
               a = (0, l.stringify)({
                  k: r,
                  s: (0, u.
               default)("-x1*0a<-" + r),
                  r: i
               });
            f({
               url: "http://intent.music.163.com:" + t[s] + "/something2?" + a,
               crossOrigin: !0,
               method: "get",
               type: "html",
               contentType: "text/plain",
               success: function(t) {
                  var n = t;
                  if ("" !== n) {
                     n = n.replace(/\'/g, '"'), n = JSON.parse(n);
                     n.data === (0, u.
                  default)("i am alive") || e(i, s)
                  } else e(i, s)
               },
               error: function(t) {
                  e(i, s)
               }
            })
         }
      }
   }();
   var M = function(t) {
         var e = t.platform,
            i = t.client,
            n = t.deepLink,
            s = t.storeLink,
            r = t.autoRedirect,
            a = t.emptylink,
            l = t.guideCallback,
            h = window.location,
            c = e || o.
         default.getPlatform2Str(),
            u = i || o.
         default.getClient(),
            d = s;
         if (d && "android" === c) {
            d = h.protocol + "//" + h.hostname + "/m/download?dl=" + encodeURIComponent(d)
         }
         if (o.
      default.isInNEMapp()) C(n);
         else if (o.
      default.getIosLargeVersion() >= 9 && !o.
      default.isPad())"micromessenger" !== u && "qq" !== u || (d = ""), E(n, d, r, a);
         else if (u && _(u)) {
            if (l && l({
               platform: c,
               client: u
            }), "android" === c) {
               var p = w(n);
               P(p)
            }
         } else C(n, d)
      },
      O = /^https?:\/\//,
      R = function(t, e) {
         if (!t || !e) throw new Error("deepLink and resLink must be exist");
         var i = t;
         "object" === (void 0 === t ? "undefined" : (0, r.
      default)(t)) && (i = T(t.resType, t.resQuery));
         var n = Date.now(),
            s = e;
         if (!O.test(s)) {
            var a = "/" === s.charAt(0) ? "" : "/";
            s = location.protocol + "//" + location.host + a + s
         }
         if (o.
      default.isInNEMapp()) C(i);
         else if (o.
      default.getIosLargeVersion() >= 9) E(i, s, !0), setTimeout(function() {
            Date.now() - n < 200 && (location.href = s)
         }, 100);
         else if (o.
      default.isAndroidChrome()) C(i, s);
         else {
            var l = o.
         default.getPlatform2Str();
            "android" === l ? P(w(i)):
            C(i), setTimeout(function() {
               location.href = s
            }, 0)
         }
      },
      A = function() {
         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = t.platform,
            i = t.client,
            n = t.storeLink,
            s = t.guideCallback,
            r = e || o.
         default.getPlatform2Str(),
            a = i || o.
         default.getClient(),
            l = n || x();
         return "ios" === r && ("weibo" === a || "douban" === a) || o.
      default.isPad() && ("micromessenger" === a || "qq" === a) ? s ? s({
            platform: r,
            client: a
         }):
         "" : ("undefined" != typeof location && (location.href = l), l)
      },
      j = {
         wakeup: M,
         wakeupBeforeLink: R,
         downloadApp: A,
         getOrpheusLink: T,
         orpheus: C,
         appendBIQuery: w,
         uvl: E,
         getAppDownUrl: x,
         androidWakeup: P
      };
   e.
default = j, t.exports = e.
default
}, 
77: function(t, e, i) {
   "use strict";

   function n(t) {
      return t && t.__esModule ? t : {
      default:
         t
      }
   }

   function s(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
   }
   Object.defineProperty(e, "__esModule", {
      value: !0
   }), e.CanvasFront = void 0;
   var r = function() {
         function t(t, e) {
            for (var i = 0; i < e.length; i++) {
               var n = e[i];
               n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
         }
         return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e
         }
      }();
   i(162);
   var a = i(401),
      o = n(a),
      l = i(78),
      h = n(l),
      c = i(398),
      u = n(c),
      d = i(399),
      p = n(d),
      f = i(400),
      m = n(f),
      g = i(396),
      v = n(g),
      _ = h.
   default.width,
      y = h.
   default.height,
      x = h.
   default.dpr,
      w = e.CanvasFront = function() {
         function t() {
            if (s(this, t), t.instance) return t.instance;
            t.instance = this, this.renderer = new THREE.WebGLRenderer({
               alpha: !0
            }), this.renderer.setPixelRatio(x), this.renderer.setSize(_, y), this.initCameras(), this.loadTextures(), $("#j-view-front").append(this.renderer.domElement)
         }
         return r(t, [{
            key: "el",
            value: function() {
               return this.renderer.domElement
            }
         }, {
            key: "initCameras",
            value: function() {
               var t = new THREE.OrthographicCamera(_ / -2, _ / 2, y / 2, y / -2, 1, 1e3);
               t.position.set(0, 0, 400);
               var e = new THREE.PerspectiveCamera(50, _ / y, 1, 1e4);
               e.position.set(0, 0, 50), this.cameras = {
                  rain: t,
                  water: e
               }
            }
         }, {
            key: "loadTextures",
            value: function() {
               var t = this,
                  e = {};
               (0, o.
            default)([{
                  name: "xianshi-1",
                  url: i(304)
               }, {
                  name: "xianshi-2",
                  url: i(304)
               }, {
                  name: "water-bg",
                  url: i(824)
               }, {
                  name: "water-text",
                  url: i(825)
               }]).then(function(i) {
                  i.forEach(function(t) {
                     e[t.name] = t.texture
                  }), t.textures = e
               })
            }
         }, {
            key: "startRain",
            value: function() {
               this.rainScene = new u.
            default ({
                  renderer: this.renderer,
                  textures: this.textures
               }), this.rainScene.animate()
            }
         }, {
            key: "stopRain",
            value: function() {
               this.rainScene && this.rainScene.dispose()
            }
         }, {
            key: "showWater",
            value: function() {
               var t = this;
               return new Promise(function(e) {
                  t.waterScene = new m.
               default ({
                     textures: t.textures
                  }), t.waterScene.animate(), setTimeout(e, 500)
               })
            }
         }, {
            key: "touchWater",
            value: function(t, e) {
               this.waterScene.touch(t, e - y + h.
            default.waterHeight)
            }
         }, {
            key: "autoWave",
            value: function() {
               this.waterScene.useAutoWave = !0
            }
         }, {
            key: "hideWater",
            value: function() {
               this.waterScene && this.waterScene.dispose()
            }
         }, {
            key: "startCollision",
            value: function() {
               this.rainScene = new p.
            default ({
                  renderer: this.renderer,
                  textures: this.textures
               }), this.rainScene.animate()
            }
         }, {
            key: "stopCollision",
            value: function() {
               this.rainScene && this.rainScene.dispose()
            }
         }, {
            key: "showEnding",
            value: function() {
               this.endScene = new v.
            default ({
                  popularity: .8,
                  freezedRollupSpeed: .015,
                  speedMin: .05,
                  maxTrailLength: .2
               })
            }
         }]), t
      }();
   w.instance = null, e.
default = new w
}, 
78: function(t, e, i) {
   "use strict";
   Object.defineProperty(e, "__esModule", {
      value: !0
   });
   var n = {};
   n.width = window.innerWidth, n.height = window.innerHeight, n.dpr = 2, n.waterWidth = window.innerWidth, n.waterHeight = window.innerHeight - 175 * window.innerWidth / 375, e.
default = n
}, , , , , , , 
85: function(t, e) {
   t.exports = function(t) {
      if ("function" != typeof t) throw TypeError(t + " is not a function!");
      return t
   }
}, 
86: function(t, e, i) {
   "use strict";
   e.decode = e.parse = i(179), e.encode = e.stringify = i(180)
}, , , , , , , , 
94: function(t, e, i) {
   var n = i(49);
   t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
      return "String" == n(t) ? t.split("") : Object(t)
   }
}, 
95: function(t, e, i) {
   var n = i(35),
      s = i(30),
      r = i(18),
      a = i(46),
      o = i(9),
      l = i(71),
      h = Object.getOwnPropertyDescriptor;
   e.f = i(11) ? h : function(t, e) {
      if (t = r(t), e = a(e, !0), l) try {
         return h(t, e)
      } catch (t) {}
      if (o(t, e)) return s(!n.f.call(t, e), t[e])
   }
}, 
96: function(t, e, i) {
   var n = i(9),
      s = i(45),
      r = i(42)("IE_PROTO"),
      a = Object.prototype;
   t.exports = Object.getPrototypeOf ||
   function(t) {
      return t = s(t), n(t, r) ? t[r] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
   }
}, 
97: function(t, e, i) {
   var n = i(19),
      s = i(3),
      r = i(22);
   t.exports = function(t, e) {
      var i = (s.Object || {})[t] || Object[t],
         a = {};
      a[t] = e(i), n(n.S + n.F * r(function() {
         i(1)
      }), "Object", a)
   }
}, , , , 
101: function(t, e, i) {
   var n = i(2).document;
   t.exports = n && n.documentElement
}, 
102: function(t, e, i) {
   var n = i(44),
      s = Math.min;
   t.exports = function(t) {
      return t > 0 ? s(n(t), 9007199254740991) : 0
   }
}, 
103: function(t, e) {}, 
104: function(t, e, i) {
   "use strict";
   var n = i(141)(!0);
   i(72)(String, "String", function(t) {
      this._t = String(t), this._i = 0
   }, function() {
      var t, e = this._t,
         i = this._i;
      return i >= e.length ? {
         value: void 0,
         done: !0
      } : (t = n(e, i), this._i += t.length, {
         value: t,
         done: !1
      })
   })
}, 
105: function(t, e, i) {
   i(143);
   for (var n = i(2), s = i(15), r = i(34), a = i(6)("toStringTag"), o = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < o.length; l++) {
      var h = o[l],
         c = n[h],
         u = c && c.prototype;
      u && !u[a] && s(u, a, h), r[h] = r.Array
   }
}, , , , 
109: function(t, e) {
   t.exports = function(t) {
      function e(t) {
         "undefined" != typeof console && (console.error || console.log)("[Script Loader]", t)
      }
      try {
         "undefined" != typeof execScript &&
         function() {
            return "undefined" != typeof attachEvent && "undefined" == typeof addEventListener
         }() ? execScript(t) : "undefined" != typeof eval ? eval.call(null, t) : e("EvalError: No eval function available")
      } catch (t) {
         e(t)
      }
   }
}, 
110: function(t, e) {
   !
   function(e, i) {
      t.exports = function(t, e) {
         function i(e, i, n) {
            t.WeixinJSBridge ? WeixinJSBridge.invoke(e, s(i), function(t) {
               o(e, t, n)
            }) : c(e, n)
         }

         function n(e, i, n) {
            t.WeixinJSBridge ? WeixinJSBridge.on(e, function(t) {
               n && n.trigger && n.trigger(t), o(e, t, i)
            }) : n ? c(e, n) : c(e, i)
         }

         function s(t) {
            return t = t || {}, t.appId = M.appId, t.verifyAppId = M.appId, t.verifySignType = "sha1", t.verifyTimestamp = M.timestamp + "", t.verifyNonceStr = M.nonceStr, t.verifySignature = M.signature, t
         }

         function r(t) {
            return {
               timeStamp: t.timestamp + "",
               nonceStr: t.nonceStr,
               package: t.package,
               paySign: t.paySign,
               signType: t.signType || "SHA1"
            }
         }

         function a(t) {
            return t.postalCode = t.addressPostalCode, delete t.addressPostalCode, t.provinceName = t.proviceFirstStageName, delete t.proviceFirstStageName, t.cityName = t.addressCitySecondStageName, delete t.addressCitySecondStageName, t.countryName = t.addressCountiesThirdStageName, delete t.addressCountiesThirdStageName, t.detailInfo = t.addressDetailInfo, delete t.addressDetailInfo, t
         }

         function o(t, e, i) {
            "openEnterpriseChat" == t && (e.errCode = e.err_code), delete e.err_code, delete e.err_desc, delete e.err_detail;
            var n = e.errMsg;
            n || (n = e.err_msg, delete e.err_msg, n = l(t, n), e.errMsg = n), i = i || {}, i._complete && (i._complete(e), delete i._complete), n = e.errMsg || "", M.debug && !i.isInnerInvoke && alert(JSON.stringify(e));
            var s = n.indexOf(":");
            switch (n.substring(s + 1)) {
            case "ok":
               i.success && i.success(e);
               break;
            case "cancel":
               i.cancel && i.cancel(e);
               break;
            default:
               i.fail && i.fail(e)
            }
            i.complete && i.complete(e)
         }

         function l(t, e) {
            var i = t,
               n = g[i];
            n && (i = n);
            var s = "ok";
            if (e) {
               var r = e.indexOf(":");
               s = e.substring(r + 1), "confirm" == s && (s = "ok"), "failed" == s && (s = "fail"), -1 != s.indexOf("failed_") && (s = s.substring(7)), -1 != s.indexOf("fail_") && (s = s.substring(5)), s = s.replace(/_/g, " "), s = s.toLowerCase(), ("access denied" == s || "no permission to execute" == s) && (s = "permission denied"), "config" == i && "function not exist" == s && (s = "ok"), "" == s && (s = "fail")
            }
            return e = i + ":" + s
         }

         function h(t) {
            if (t) {
               for (var e = 0, i = t.length; i > e; ++e) {
                  var n = t[e],
                     s = m[n];
                  s && (t[e] = s)
               }
               return t
            }
         }

         function c(t, e) {
            if (!(!M.debug || e && e.isInnerInvoke)) {
               var i = g[t];
               i && (t = i), e && e._complete && delete e._complete, console.log('"' + t + '",', e || "")
            }
         }

         function u(t) {
            if (!(w || b || M.debug || "6.0.2" > C || P.systemType < 0)) {
               var e = new Image;
               P.appId = M.appId, P.initTime = E.initEndTime - E.initStartTime, P.preVerifyTime = E.preVerifyEndTime - E.preVerifyStartTime, D.getNetworkType({
                  isInnerInvoke: !0,
                  success: function(t) {
                     P.networkType = t.networkType;
                     var i = "https://open.weixin.qq.com/sdk/report?v=" + P.version + "&o=" + P.isPreVerifyOk + "&s=" + P.systemType + "&c=" + P.clientVersion + "&a=" + P.appId + "&n=" + P.networkType + "&i=" + P.initTime + "&p=" + P.preVerifyTime + "&u=" + P.url;
                     e.src = i
                  }
               })
            }
         }

         function d() {
            return (new Date).getTime()
         }

         function p(e) {
            T && (t.WeixinJSBridge ? e() : v.addEventListener && v.addEventListener("WeixinJSBridgeReady", e, !1))
         }

         function f() {
            D.invoke || (D.invoke = function(e, i, n) {
               t.WeixinJSBridge && WeixinJSBridge.invoke(e, s(i), n)
            }, D.on = function(e, i) {
               t.WeixinJSBridge && WeixinJSBridge.on(e, i)
            })
         }
         if (!t.jWeixin) {
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
                  var t = {};
                  for (var e in m) t[m[e]] = e;
                  return t
               }(),
               v = t.document,
               _ = v.title,
               y = navigator.userAgent.toLowerCase(),
               x = navigator.platform.toLowerCase(),
               w = !(!x.match("mac") && !x.match("win")),
               b = -1 != y.indexOf("wxdebugger"),
               T = -1 != y.indexOf("micromessenger"),
               k = -1 != y.indexOf("android"),
               S = -1 != y.indexOf("iphone") || -1 != y.indexOf("ipad"),
               C = function() {
                  var t = y.match(/micromessenger\/(\d+\.\d+\.\d+)/) || y.match(/micromessenger\/(\d+\.\d+)/);
                  return t ? t[1] : ""
               }(),
               E = {
                  initStartTime: d(),
                  initEndTime: 0,
                  preVerifyStartTime: 0,
                  preVerifyEndTime: 0
               },
               P = {
                  version: 1,
                  appId: "",
                  initTime: 0,
                  preVerifyTime: 0,
                  networkType: "",
                  isPreVerifyOk: 1,
                  systemType: S ? 1 : k ? 2 : -1,
                  clientVersion: C,
                  url: encodeURIComponent(location.href)
               },
               M = {},
               O = {
                  _completes: []
               },
               R = {
                  state: 0,
                  data: {}
               };
            p(function() {
               E.initEndTime = d()
            });
            var A = !1,
               j = [],
               D = {
                  config: function(t) {
                     M = t, c("config", t);
                     var e = !1 !== M.check;
                     p(function() {
                        if (e) i(m.config, {
                           verifyJsApiList: h(M.jsApiList)
                        }, function() {
                           O._complete = function(t) {
                              E.preVerifyEndTime = d(), R.state = 1, R.data = t
                           }, O.success = function(t) {
                              P.isPreVerifyOk = 0
                           }, O.fail = function(t) {
                              O._fail ? O._fail(t) : R.state = -1
                           };
                           var t = O._completes;
                           return t.push(function() {
                              u()
                           }), O.complete = function(e) {
                              for (var i = 0, n = t.length; n > i; ++i) t[i]();
                              O._completes = []
                           }, O
                        }()), E.preVerifyStartTime = d();
                        else {
                           R.state = 1;
                           for (var t = O._completes, n = 0, s = t.length; s > n; ++n) t[n]();
                           O._completes = []
                        }
                     }), M.beta && f()
                  },
                  ready: function(t) {
                     0 != R.state ? t() : (O._completes.push(t), !T && M.debug && t())
                  },
                  error: function(t) {
                     "6.0.2" > C || (-1 == R.state ? t(R.data) : O._fail = t)
                  },
                  checkJsApi: function(t) {
                     var e = function(t) {
                           var e = t.checkResult;
                           for (var i in e) {
                              var n = g[i];
                              n && (e[n] = e[i], delete e[i])
                           }
                           return t
                        };
                     i("checkJsApi", {
                        jsApiList: h(t.jsApiList)
                     }, function() {
                        return t._complete = function(t) {
                           if (k) {
                              var i = t.checkResult;
                              i && (t.checkResult = JSON.parse(i))
                           }
                           t = e(t)
                        }, t
                     }())
                  },
                  onMenuShareTimeline: function(t) {
                     n(m.onMenuShareTimeline, {
                        complete: function() {
                           i("shareTimeline", {
                              title: t.title || _,
                              desc: t.title || _,
                              img_url: t.imgUrl || "",
                              link: t.link || location.href,
                              type: t.type || "link",
                              data_url: t.dataUrl || ""
                           }, t)
                        }
                     }, t)
                  },
                  onMenuShareAppMessage: function(t) {
                     n(m.onMenuShareAppMessage, {
                        complete: function() {
                           i("sendAppMessage", {
                              title: t.title || _,
                              desc: t.desc || "",
                              link: t.link || location.href,
                              img_url: t.imgUrl || "",
                              type: t.type || "link",
                              data_url: t.dataUrl || ""
                           }, t)
                        }
                     }, t)
                  },
                  onMenuShareQQ: function(t) {
                     n(m.onMenuShareQQ, {
                        complete: function() {
                           i("shareQQ", {
                              title: t.title || _,
                              desc: t.desc || "",
                              img_url: t.imgUrl || "",
                              link: t.link || location.href
                           }, t)
                        }
                     }, t)
                  },
                  onMenuShareWeibo: function(t) {
                     n(m.onMenuShareWeibo, {
                        complete: function() {
                           i("shareWeiboApp", {
                              title: t.title || _,
                              desc: t.desc || "",
                              img_url: t.imgUrl || "",
                              link: t.link || location.href
                           }, t)
                        }
                     }, t)
                  },
                  onMenuShareQZone: function(t) {
                     n(m.onMenuShareQZone, {
                        complete: function() {
                           i("shareQZone", {
                              title: t.title || _,
                              desc: t.desc || "",
                              img_url: t.imgUrl || "",
                              link: t.link || location.href
                           }, t)
                        }
                     }, t)
                  },
                  startRecord: function(t) {
                     i("startRecord", {}, t)
                  },
                  stopRecord: function(t) {
                     i("stopRecord", {}, t)
                  },
                  onVoiceRecordEnd: function(t) {
                     n("onVoiceRecordEnd", t)
                  },
                  playVoice: function(t) {
                     i("playVoice", {
                        localId: t.localId
                     }, t)
                  },
                  pauseVoice: function(t) {
                     i("pauseVoice", {
                        localId: t.localId
                     }, t)
                  },
                  stopVoice: function(t) {
                     i("stopVoice", {
                        localId: t.localId
                     }, t)
                  },
                  onVoicePlayEnd: function(t) {
                     n("onVoicePlayEnd", t)
                  },
                  uploadVoice: function(t) {
                     i("uploadVoice", {
                        localId: t.localId,
                        isShowProgressTips: 0 == t.isShowProgressTips ? 0 : 1
                     }, t)
                  },
                  downloadVoice: function(t) {
                     i("downloadVoice", {
                        serverId: t.serverId,
                        isShowProgressTips: 0 == t.isShowProgressTips ? 0 : 1
                     }, t)
                  },
                  translateVoice: function(t) {
                     i("translateVoice", {
                        localId: t.localId,
                        isShowProgressTips: 0 == t.isShowProgressTips ? 0 : 1
                     }, t)
                  },
                  chooseImage: function(t) {
                     i("chooseImage", {
                        scene: "1|2",
                        count: t.count || 9,
                        sizeType: t.sizeType || ["original", "compressed"],
                        sourceType: t.sourceType || ["album", "camera"]
                     }, function() {
                        return t._complete = function(t) {
                           if (k) {
                              var e = t.localIds;
                              e && (t.localIds = JSON.parse(e))
                           }
                        }, t
                     }())
                  },
                  getLocation: function(t) {},
                  previewImage: function(t) {
                     i(m.previewImage, {
                        current: t.current,
                        urls: t.urls
                     }, t)
                  },
                  uploadImage: function(t) {
                     i("uploadImage", {
                        localId: t.localId,
                        isShowProgressTips: 0 == t.isShowProgressTips ? 0 : 1
                     }, t)
                  },
                  downloadImage: function(t) {
                     i("downloadImage", {
                        serverId: t.serverId,
                        isShowProgressTips: 0 == t.isShowProgressTips ? 0 : 1
                     }, t)
                  },
                  getLocalImgData: function(t) {
                     !1 === A ? (A = !0, i("getLocalImgData", {
                        localId: t.localId
                     }, function() {
                        return t._complete = function(t) {
                           if (A = !1, j.length > 0) {
                              var e = j.shift();
                              wx.getLocalImgData(e)
                           }
                        }, t
                     }())) : j.push(t)
                  },
                  getNetworkType: function(t) {
                     var e = function(t) {
                           var e = t.errMsg;
                           t.errMsg = "getNetworkType:ok";
                           var i = t.subtype;
                           if (delete t.subtype, i) t.networkType = i;
                           else {
                              var n = e.indexOf(":"),
                                 s = e.substring(n + 1);
                              switch (s) {
                              case "wifi":
                              case "edge":
                              case "wwan":
                                 t.networkType = s;
                                 break;
                              default:
                                 t.errMsg = "getNetworkType:fail"
                              }
                           }
                           return t
                        };
                     i("getNetworkType", {}, function() {
                        return t._complete = function(t) {
                           t = e(t)
                        }, t
                     }())
                  },
                  openLocation: function(t) {
                     i("openLocation", {
                        latitude: t.latitude,
                        longitude: t.longitude,
                        name: t.name || "",
                        address: t.address || "",
                        scale: t.scale || 28,
                        infoUrl: t.infoUrl || ""
                     }, t)
                  },
                  getLocation: function(t) {
                     t = t || {}, i(m.getLocation, {
                        type: t.type || "wgs84"
                     }, function() {
                        return t._complete = function(t) {
                           delete t.type
                        }, t
                     }())
                  },
                  hideOptionMenu: function(t) {
                     i("hideOptionMenu", {}, t)
                  },
                  showOptionMenu: function(t) {
                     i("showOptionMenu", {}, t)
                  },
                  closeWindow: function(t) {
                     t = t || {}, i("closeWindow", {}, t)
                  },
                  hideMenuItems: function(t) {
                     i("hideMenuItems", {
                        menuList: t.menuList
                     }, t)
                  },
                  showMenuItems: function(t) {
                     i("showMenuItems", {
                        menuList: t.menuList
                     }, t)
                  },
                  hideAllNonBaseMenuItem: function(t) {
                     i("hideAllNonBaseMenuItem", {}, t)
                  },
                  showAllNonBaseMenuItem: function(t) {
                     i("showAllNonBaseMenuItem", {}, t)
                  },
                  scanQRCode: function(t) {
                     t = t || {}, i("scanQRCode", {
                        needResult: t.needResult || 0,
                        scanType: t.scanType || ["qrCode", "barCode"]
                     }, function() {
                        return t._complete = function(t) {
                           if (S) {
                              var e = t.resultStr;
                              if (e) {
                                 var i = JSON.parse(e);
                                 t.resultStr = i && i.scan_code && i.scan_code.scan_result
                              }
                           }
                        }, t
                     }())
                  },
                  openAddress: function(t) {
                     i(m.openAddress, {}, function() {
                        return t._complete = function(t) {
                           t = a(t)
                        }, t
                     }())
                  },
                  openProductSpecificView: function(t) {
                     i(m.openProductSpecificView, {
                        pid: t.productId,
                        view_type: t.viewType || 0,
                        ext_info: t.extInfo
                     }, t)
                  },
                  addCard: function(t) {
                     for (var e = t.cardList, n = [], s = 0, r = e.length; r > s; ++s) {
                        var a = e[s],
                           o = {
                              card_id: a.cardId,
                              card_ext: a.cardExt
                           };
                        n.push(o)
                     }
                     i(m.addCard, {
                        card_list: n
                     }, function() {
                        return t._complete = function(t) {
                           var e = t.card_list;
                           if (e) {
                              e = JSON.parse(e);
                              for (var i = 0, n = e.length; n > i; ++i) {
                                 var s = e[i];
                                 s.cardId = s.card_id, s.cardExt = s.card_ext, s.isSuccess = !! s.is_succ, delete s.card_id, delete s.card_ext, delete s.is_succ
                              }
                              t.cardList = e, delete t.card_list
                           }
                        }, t
                     }())
                  },
                  chooseCard: function(t) {
                     i("chooseCard", {
                        app_id: M.appId,
                        location_id: t.shopId || "",
                        sign_type: t.signType || "SHA1",
                        card_id: t.cardId || "",
                        card_type: t.cardType || "",
                        card_sign: t.cardSign,
                        time_stamp: t.timestamp + "",
                        nonce_str: t.nonceStr
                     }, function() {
                        return t._complete = function(t) {
                           t.cardList = t.choose_card_info, delete t.choose_card_info
                        }, t
                     }())
                  },
                  openCard: function(t) {
                     for (var e = t.cardList, n = [], s = 0, r = e.length; r > s; ++s) {
                        var a = e[s],
                           o = {
                              card_id: a.cardId,
                              code: a.code
                           };
                        n.push(o)
                     }
                     i(m.openCard, {
                        card_list: n
                     }, t)
                  },
                  consumeAndShareCard: function(t) {
                     i(m.consumeAndShareCard, {
                        consumedCardId: t.cardId,
                        consumedCode: t.code
                     }, t)
                  },
                  chooseWXPay: function(t) {
                     i(m.chooseWXPay, r(t), t)
                  },
                  openEnterpriseRedPacket: function(t) {
                     i(m.openEnterpriseRedPacket, r(t), t)
                  },
                  startSearchBeacons: function(t) {
                     i(m.startSearchBeacons, {
                        ticket: t.ticket
                     }, t)
                  },
                  stopSearchBeacons: function(t) {
                     i(m.stopSearchBeacons, {}, t)
                  },
                  onSearchBeacons: function(t) {
                     n(m.onSearchBeacons, t)
                  },
                  openEnterpriseChat: function(t) {
                     i("openEnterpriseChat", {
                        useridlist: t.userIds,
                        chatname: t.groupName
                     }, t)
                  }
               },
               F = 1,
               H = {};
            return v.addEventListener("error", function(t) {
               if (!k) {
                  var e = t.target,
                     i = e.tagName,
                     n = e.src;
                  if ("IMG" == i || "VIDEO" == i || "AUDIO" == i || "SOURCE" == i) {
                     if (-1 != n.indexOf("wxlocalresource://")) {
                        t.preventDefault(), t.stopPropagation();
                        var s = e["wx-id"];
                        if (s || (s = F++, e["wx-id"] = s), H[s]) return;
                        H[s] = !0, wx.getLocalImgData({
                           localId: n,
                           success: function(t) {
                              e.src = t.localData
                           }
                        })
                     }
                  }
               }
            }, !0), v.addEventListener("load", function(t) {
               if (!k) {
                  var e = t.target,
                     i = e.tagName;
                  if (e.src, "IMG" == i || "VIDEO" == i || "AUDIO" == i || "SOURCE" == i) {
                     var n = e["wx-id"];
                     n && (H[n] = !1)
                  }
               }
            }, !0), e && (t.wx = t.jWeixin = D), D
         }
      }(e)
   }(window)
}, 
111: function(t, e) {},
112: function(t, e, i) {
   "use strict";

   function n(t, e) {
      var i = (65535 & t) + (65535 & e);
      return (t >> 16) + (e >> 16) + (i >> 16) << 16 | 65535 & i
   }

   function s(t, e) {
      return t << e | t >>> 32 - e
   }

   function r(t, e, i, r, a, o) {
      return n(s(n(n(e, t), n(r, o)), a), i)
   }

   function a(t, e, i, n, s, a, o) {
      return r(e & i | ~e & n, t, e, s, a, o)
   }

   function o(t, e, i, n, s, a, o) {
      return r(e & n | i & ~n, t, e, s, a, o)
   }

   function l(t, e, i, n, s, a, o) {
      return r(e ^ i ^ n, t, e, s, a, o)
   }

   function h(t, e, i, n, s, a, o) {
      return r(i ^ (e | ~n), t, e, s, a, o)
   }

   function c(t, e) {
      var i = t,
         s = e;
      i[s >> 5] |= 128 << s % 32, i[14 + (s + 64 >>> 9 << 4)] = s;
      var r = void 0,
         c = void 0,
         u = void 0,
         d = void 0,
         p = void 0,
         f = 1732584193,
         m = -271733879,
         g = -1732584194,
         v = 271733878;
      for (r = 0; r < i.length; r += 16) c = f, u = m, d = g, p = v, f = a(f, m, g, v, i[r], 7, -680876936), v = a(v, f, m, g, i[r + 1], 12, -389564586), g = a(g, v, f, m, i[r + 2], 17, 606105819), m = a(m, g, v, f, i[r + 3], 22, -1044525330), f = a(f, m, g, v, i[r + 4], 7, -176418897), v = a(v, f, m, g, i[r + 5], 12, 1200080426), g = a(g, v, f, m, i[r + 6], 17, -1473231341), m = a(m, g, v, f, i[r + 7], 22, -45705983), f = a(f, m, g, v, i[r + 8], 7, 1770035416), v = a(v, f, m, g, i[r + 9], 12, -1958414417), g = a(g, v, f, m, i[r + 10], 17, -42063), m = a(m, g, v, f, i[r + 11], 22, -1990404162), f = a(f, m, g, v, i[r + 12], 7, 1804603682), v = a(v, f, m, g, i[r + 13], 12, -40341101), g = a(g, v, f, m, i[r + 14], 17, -1502002290), m = a(m, g, v, f, i[r + 15], 22, 1236535329), f = o(f, m, g, v, i[r + 1], 5, -165796510), v = o(v, f, m, g, i[r + 6], 9, -1069501632), g = o(g, v, f, m, i[r + 11], 14, 643717713), m = o(m, g, v, f, i[r], 20, -373897302), f = o(f, m, g, v, i[r + 5], 5, -701558691), v = o(v, f, m, g, i[r + 10], 9, 38016083), g = o(g, v, f, m, i[r + 15], 14, -660478335), m = o(m, g, v, f, i[r + 4], 20, -405537848), f = o(f, m, g, v, i[r + 9], 5, 568446438), v = o(v, f, m, g, i[r + 14], 9, -1019803690), g = o(g, v, f, m, i[r + 3], 14, -187363961), m = o(m, g, v, f, i[r + 8], 20, 1163531501), f = o(f, m, g, v, i[r + 13], 5, -1444681467), v = o(v, f, m, g, i[r + 2], 9, -51403784), g = o(g, v, f, m, i[r + 7], 14, 1735328473), m = o(m, g, v, f, i[r + 12], 20, -1926607734), f = l(f, m, g, v, i[r + 5], 4, -378558), v = l(v, f, m, g, i[r + 8], 11, -2022574463), g = l(g, v, f, m, i[r + 11], 16, 1839030562), m = l(m, g, v, f, i[r + 14], 23, -35309556), f = l(f, m, g, v, i[r + 1], 4, -1530992060), v = l(v, f, m, g, i[r + 4], 11, 1272893353), g = l(g, v, f, m, i[r + 7], 16, -155497632), m = l(m, g, v, f, i[r + 10], 23, -1094730640), f = l(f, m, g, v, i[r + 13], 4, 681279174), v = l(v, f, m, g, i[r], 11, -358537222), g = l(g, v, f, m, i[r + 3], 16, -722521979), m = l(m, g, v, f, i[r + 6], 23, 76029189), f = l(f, m, g, v, i[r + 9], 4, -640364487), v = l(v, f, m, g, i[r + 12], 11, -421815835), g = l(g, v, f, m, i[r + 15], 16, 530742520), m = l(m, g, v, f, i[r + 2], 23, -995338651), f = h(f, m, g, v, i[r], 6, -198630844), v = h(v, f, m, g, i[r + 7], 10, 1126891415), g = h(g, v, f, m, i[r + 14], 15, -1416354905), m = h(m, g, v, f, i[r + 5], 21, -57434055), f = h(f, m, g, v, i[r + 12], 6, 1700485571), v = h(v, f, m, g, i[r + 3], 10, -1894986606), g = h(g, v, f, m, i[r + 10], 15, -1051523), m = h(m, g, v, f, i[r + 1], 21, -2054922799), f = h(f, m, g, v, i[r + 8], 6, 1873313359), v = h(v, f, m, g, i[r + 15], 10, -30611744), g = h(g, v, f, m, i[r + 6], 15, -1560198380), m = h(m, g, v, f, i[r + 13], 21, 1309151649), f = h(f, m, g, v, i[r + 4], 6, -145523070), v = h(v, f, m, g, i[r + 11], 10, -1120210379), g = h(g, v, f, m, i[r + 2], 15, 718787259), m = h(m, g, v, f, i[r + 9], 21, -343485551), f = n(f, c), m = n(m, u), g = n(g, d), v = n(v, p);
      return [f, m, g, v]
   }

   function u(t) {
      var e = void 0,
         i = "",
         n = 32 * t.length;
      for (e = 0; e < n; e += 8) i += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
      return i
   }

   function d(t) {
      var e = void 0,
         i = [];
      for (i[(t.length >> 2) - 1] = void 0, e = 0; e < i.length; e += 1) i[e] = 0;
      var n = 8 * t.length;
      for (e = 0; e < n; e += 8) i[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
      return i
   }

   function p(t) {
      return u(c(d(t), 8 * t.length))
   }

   function f(t, e) {
      var i = void 0,
         n = d(t),
         s = [],
         r = [];
      for (s[15] = void 0, r[15] = void 0, n.length > 16 && (n = c(n, 8 * t.length)), i = 0; i < 16; i += 1) s[i] = 909522486 ^ n[i], r[i] = 1549556828 ^ n[i];
      var a = c(s.concat(d(e)), 512 + 8 * e.length);
      return u(c(r.concat(a), 640))
   }

   function m(t) {
      var e = "0123456789abcdef",
         i = "",
         n = void 0,
         s = void 0;
      for (s = 0; s < t.length; s += 1) n = t.charCodeAt(s), i += e.charAt(n >>> 4 & 15) + e.charAt(15 & n);
      return i
   }

   function g(t) {
      return unescape(encodeURIComponent(t))
   }

   function v(t) {
      return p(g(t))
   }

   function _(t) {
      return m(v(t))
   }

   function y(t, e) {
      return f(g(t), g(e))
   }

   function x(t, e) {
      return m(y(t, e))
   }

   function w(t, e, i) {
      return e ? i ? y(e, t) : x(e, t) : i ? v(t) : _(t)
   }
   Object.defineProperty(e, "__esModule", {
      value: !0
   }), e.
default = w, t.exports = e.
default
}, 
113: function(t, e, i) {
   "use strict";
   Object.defineProperty(e, "__esModule", {
      value: !0
   }), e.createEnv = void 0;
   var n = i(64),
      s = function(t) {
         return t && t.__esModule ? t : {
         default:
            t
         }
      }(n),
      r = "",
      a = "";
   "undefined" != typeof window && (r = window.navigator.userAgent, a = window.document.cookie || "");
   var o = /ipad/gi,
      l = /iphone|ipod|ipad|ios/gi,
      h = /Android/gi,
      c = /windows\s+phone/gi,
      u = /IPadQQ/gi,
      d = /mobile|mobi|wap|simulator|iphone|android/gi,
      p = /SINA_ROBOT|SINA_WEIBO/gi,
      f = /Weibo|MicroMessenger|YDDict|youdao_dict|QQ(?!Browser)|RenRen|Douban|YiXin|TXMicroBlog|NewsApp/i,
      m = /QQBrowser/gi,
      g = /Android\s+([\d\.]+);/i,
      v = /Windows\s+Phone\s+([\d\.]+);/i,
      _ = /OS\s+([\d+_]+)/i,
      y = /\bChrome\/\d/,
      x = /\bVersion\/\d/,
      w = /appver/i,
      b = /NeteaseMusic\/([\d\.]+)?/i,
      T = /appver=([\d\.]+)?/i,
      k = {
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
      S = function() {
         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = t.userAgent || r,
            i = (t.Cookie, function() {
               return "" !== e && null !== e.match(c)
            }),
            n = function() {
               if ("" === e) return !1;
               var t = e.match(l),
                  i = e.match(c);
               return null !== t && null === i
            },
            S = function() {
               return "" !== e && null !== e.match(o)
            },
            C = function() {
               return S() ? "pad" : "phone"
            },
            E = function() {
               var t = e.match(_);
               if (null !== t) {
                  return t[1].replace(/_/g, ".")
               }
               return ""
            },
            P = function() {
               var t = E();
               return t && "string" == typeof t ? parseInt(t.split(".")[0], 10) : -1
            },
            M = function() {
               if ("" === e) return !1;
               var t = e.match(h),
                  i = e.match(c);
               return null !== t && null === i
            },
            O = function() {
               var t = e.match(g);
               return null !== t ? t[1] : ""
            },
            R = function() {
               var t = e.match(v);
               return null !== t ? t[1] : ""
            },
            A = function() {
               if (i()) {
                  var t = R();
                  if (null !== t) try {
                     var e = parseFloat(t, 10);
                     return !!(e && e >= 10)
                  } catch (t) {
                     return !1
                  }
               }
               return !1
            },
            j = function() {
               return "" === e ? 0 : i() ? 3 : n() ? 1 : M() ? 2 : 0
            },
            D = function() {
               switch (j()) {
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
            F = function() {
               var t = R();
               return null !== t ? t : null !== (t = e.match(_)) ? t[1].replace(/_/g, ".") : (t = O(), null !== t ? t : "")
            },
            H = function() {
               return "" === e ? 0 : i() ? A() ? 31 : 30 : n() ? S() ? 11 : 10 : M() ? 20 : 0
            },
            z = function() {
               switch (H()) {
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
               var t = M(),
                  i = y.test(e),
                  n = !x.test(e);
               return t && i && n
            },
            N = function() {
               if ("" === e) return !1;
               var t = e.match(f),
                  i = e.match(m);
               return null !== t ? t[0].toLowerCase() : null !== i ? i[0].toLowerCase() : ""
            },
            B = function() {
               return "" !== e && null !== e.match(d)
            },
            L = function() {
               return "" !== e && null !== e.match(p)
            },
            q = function() {
               if ("" === e) return !1;
               var t = N();
               return "QQ".toLowerCase() === t || "Weibo".toLowerCase() === t || "MicroMessenger".toLowerCase() === t
            },
            $ = function() {
               return null !== e.match(u)
            },
            X = function() {
               var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                  e = "";
               return (0, s.
            default)(k).forEach(function(i) {
                  i.toLowerCase() === t && (e = k[i])
               }), e
            },
            U = function() {
               var t = r.match(b),
                  e = a.match(w);
               return null !== t || null !== e
            };
         return {
            getPlatform: j,
            getPlatform2Str: D,
            getOSVersionStr: F,
            getDevicePro: H,
            getDevicePro2Str: z,
            getDevice: C,
            getClient: N,
            getIosLargeVersion: P,
            getIosVersion: E,
            getAndroidVersion: O,
            getWPVersion: R,
            getAppVersion: function() {
               var t = r.match(b) || a.match(T);
               return null !== t ? t[1] : ""
            },
            isIos: n,
            isPad: S,
            isAndroid: M,
            isAndroidChrome: I,
            isWP: i,
            isWP10: A,
            isMobile: B,
            isSinaRobot: L,
            isUnsupportedClient: q,
            isIpadQQ: $,
            isInNEMapp: U,
            fetchLogByClient: X
         }
      };
   e.createEnv = S, e.
default = S()
}, 
114: function(t, e, i) {
   "use strict";
   Object.defineProperty(e, "__esModule", {
      value: !0
   }), e.createUrl = e.stringify = e.parse = void 0;
   var n = i(27),
      s = function(t) {
         return t && t.__esModule ? t : {
         default:
            t
         }
      }(n),
      r = i(115),
      a = function(t, e) {
         return Object.prototype.hasOwnProperty.call(t, e)
      },
      o = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,
      l = ["hash", "host", "hostname", "href", "origin", "pathname", "port", "protocol", "search"],
      h = function(t) {
         var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = "";
         t ? i = t : "undefined" != typeof window && (i = window.location);
         var n = {},
            h = e.localhost,
            c = e.onlinehost;
         if (h = h || "igame.163.com", c = c || "music.163.com", i) if ("string" == typeof i) {
            var u = i.match(o);
            if (null !== u) {
               var d = u[1] ? u[1] + ":" : "",
                  p = u[7] ? "#" + u[7] : "",
                  f = u[3] || "",
                  m = u[4] || "",
                  g = u[5] ? "/" + u[5] : "",
                  v = [f],
                  _ = u[6] ? "?" + u[6] : "";
               m && v.push(m), n = {
                  hash: p,
                  host: v.join(":"),
                  hostname: f,
                  href: t,
                  origin: d + "//" + v,
                  pathname: g,
                  port: m,
                  protocol: d,
                  search: _
               }
            }
         } else "object" === (void 0 === i ? "undefined" : (0, s.
      default)(i)) && l.forEach(function(t) {
            a(i, t) && "function" != typeof i[t] && (n[t] = i[t])
         });
         var y = n,
            x = y.search,
            w = y.hostname,
            b = y.protocol;
         n.params = (0, r.parse)(x);
         var T = w || c;
         "localhost" === w && (T = h);
         var k = "http:";
         return b && (k = -1 !== b.indexOf(":") ? b : b + ":"), n.currentHost = k + "//" + T, n
      };
   e.parse = r.parse, e.stringify = r.stringify, e.createUrl = h, e.
default = h()
}, 
115: function(t, e, i) {
   "use strict";

   function n(t) {
      return t && t.__esModule ? t : {
      default:
         t
      }
   }
   Object.defineProperty(e, "__esModule", {
      value: !0
   }), e.stringify = e.parse = void 0;
   var s = i(64),
      r = n(s),
      a = i(27),
      o = n(a),
      l = function(t, e) {
         return Object.prototype.hasOwnProperty.call(t, e)
      },
      h = function(t) {
         var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = {};
         if ("string" != typeof t || 0 === t.length) return i;
         var n = e.gap,
            s = e.eva,
            r = e.cover;
         return n = n || "&", s = s || "=", r = void 0 !== r && r, ("?" === t.charAt(0) ? t.slice(1) : t).split(n).forEach(function(t) {
            var e = t.indexOf(s),
               n = e > -1 ? t.slice(0, e) : t,
               a = e > -1 ? t.slice(e + 1) : "";
            n = decodeURIComponent(n), a = decodeURIComponent(a), l(i, n) ? Array.isArray(i[n]) ? i[n].push(a) : i[n] = r ? a : [i[n], a] : i[n] = a
         }), i
      };
   e.parse = h;
   var c = function(t) {
         var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
         if ("object" !== (void 0 === t ? "undefined" : (0, o.
      default)(t)) || null === t) return "";
         var i = e.gap,
            n = e.eva;
         return i = i || "&", n = n || "=", (0, r.
      default)(t).map(function(e) {
            var s = "" + encodeURIComponent(e) + n;
            return Array.isArray(t[e]) ? t[e].map(function(t) {
               return "" + s + encodeURIComponent(t)
            }).join(i) : "" + s + encodeURIComponent(t[e])
         }).join(i)
      };
   e.stringify = c
}, , , , , , , , , , , , 
127: function(t, e, i) {
   t.exports = {
   default:
      i(130), __esModule: !0
   }
}, 
128: function(t, e, i) {
   t.exports = {
   default:
      i(131), __esModule: !0
   }
}, 
129: function(t, e, i) {
   i(144), t.exports = i(3).Object.keys
}, 
130: function(t, e, i) {
   i(145), i(103), i(146), i(147), t.exports = i(3).Symbol
}, 
131: function(t, e, i) {
   i(104), i(105), t.exports = i(48).f("iterator")
}, 
132: function(t, e) {
   t.exports = function() {}
}, 
133: function(t, e, i) {
   var n = i(18),
      s = i(102),
      r = i(142);
   t.exports = function(t) {
      return function(e, i, a) {
         var o, l = n(e),
            h = s(l.length),
            c = r(a, h);
         if (t && i != i) {
            for (; h > c;) if ((o = l[c++]) != o) return !0
         } else for (; h > c; c++) if ((t || c in l) && l[c] === i) return t || c || 0;
         return !t && -1
      }
   }
}, 
134: function(t, e, i) {
   var n = i(28),
      s = i(57),
      r = i(35);
   t.exports = function(t) {
      var e = n(t),
         i = s.f;
      if (i) for (var a, o = i(t), l = r.f, h = 0; o.length > h;) l.call(t, a = o[h++]) && e.push(a);
      return e
   }
}, 
135: function(t, e, i) {
   var n = i(49);
   t.exports = Array.isArray ||
   function(t) {
      return "Array" == n(t)
   }
}, 
136: function(t, e, i) {
   "use strict";
   var n = i(56),
      s = i(30),
      r = i(38),
      a = {};
   i(15)(a, i(6)("iterator"), function() {
      return this
   }), t.exports = function(t, e, i) {
      t.prototype = n(a, {
         next: s(1, i)
      }), r(t, e + " Iterator")
   }
}, 
137: function(t, e) {
   t.exports = function(t, e) {
      return {
         value: e,
         done: !! t
      }
   }
}, 
138: function(t, e, i) {
   var n = i(31)("meta"),
      s = i(17),
      r = i(9),
      a = i(12).f,
      o = 0,
      l = Object.isExtensible ||
   function() {
      return !0
   }, h = !i(22)(function() {
      return l(Object.preventExtensions({}))
   }), c = function(t) {
      a(t, n, {
         value: {
            i: "O" + ++o,
            w: {}
         }
      })
   }, u = function(t, e) {
      if (!s(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
      if (!r(t, n)) {
         if (!l(t)) return "F";
         if (!e) return "E";
         c(t)
      }
      return t[n].i
   }, d = function(t, e) {
      if (!r(t, n)) {
         if (!l(t)) return !0;
         if (!e) return !1;
         c(t)
      }
      return t[n].w
   }, p = function(t) {
      return h && f.NEED && l(t) && !r(t, n) && c(t), t
   }, f = t.exports = {
      KEY: n,
      NEED: !1,
      fastKey: u,
      getWeak: d,
      onFreeze: p
   }
}, 
139: function(t, e, i) {
   var n = i(12),
      s = i(21),
      r = i(28);
   t.exports = i(11) ? Object.defineProperties : function(t, e) {
      s(t);
      for (var i, a = r(e), o = a.length, l = 0; o > l;) n.f(t, i = a[l++], e[i]);
      return t
   }
}, 
140: function(t, e, i) {
   var n = i(18),
      s = i(73).f,
      r = {}.toString,
      a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
      o = function(t) {
         try {
            return s(t)
         } catch (t) {
            return a.slice()
         }
      };
   t.exports.f = function(t) {
      return a && "[object Window]" == r.call(t) ? o(t) : s(n(t))
   }
}, 
141: function(t, e, i) {
   var n = i(44),
      s = i(40);
   t.exports = function(t) {
      return function(e, i) {
         var r, a, o = String(s(e)),
            l = n(i),
            h = o.length;
         return l < 0 || l >= h ? t ? "" : void 0 : (r = o.charCodeAt(l), r < 55296 || r > 56319 || l + 1 === h || (a = o.charCodeAt(l + 1)) < 56320 || a > 57343 ? t ? o.charAt(l) : r : t ? o.slice(l, l + 2) : a - 56320 + (r - 55296 << 10) + 65536)
      }
   }
}, 
142: function(t, e, i) {
   var n = i(44),
      s = Math.max,
      r = Math.min;
   t.exports = function(t, e) {
      return t = n(t), t < 0 ? s(t + e, 0) : r(t, e)
   }
}, 
143: function(t, e, i) {
   "use strict";
   var n = i(132),
      s = i(137),
      r = i(34),
      a = i(18);
   t.exports = i(72)(Array, "Array", function(t, e) {
      this._t = a(t), this._i = 0, this._k = e
   }, function() {
      var t = this._t,
         e = this._k,
         i = this._i++;
      return !t || i >= t.length ? (this._t = void 0, s(1)) : "keys" == e ? s(0, i) : "values" == e ? s(0, t[i]) : s(0, [i, t[i]])
   }, "values"), r.Arguments = r.Array, n("keys"), n("values"), n("entries")
}, 
144: function(t, e, i) {
   var n = i(45),
      s = i(28);
   i(97)("keys", function() {
      return function(t) {
         return s(n(t))
      }
   })
}, 
145: function(t, e, i) {
   "use strict";
   var n = i(2),
      s = i(9),
      r = i(11),
      a = i(19),
      o = i(75),
      l = i(138).KEY,
      h = i(22),
      c = i(43),
      u = i(38),
      d = i(31),
      p = i(6),
      f = i(48),
      m = i(47),
      g = i(134),
      v = i(135),
      _ = i(21),
      y = i(17),
      x = i(18),
      w = i(46),
      b = i(30),
      T = i(56),
      k = i(140),
      S = i(95),
      C = i(12),
      E = i(28),
      P = S.f,
      M = C.f,
      O = k.f,
      R = n.Symbol,
      A = n.JSON,
      j = A && A.stringify,
      D = p("_hidden"),
      F = p("toPrimitive"),
      H = {}.propertyIsEnumerable,
      z = c("symbol-registry"),
      I = c("symbols"),
      N = c("op-symbols"),
      B = Object.prototype,
      L = "function" == typeof R,
      q = n.QObject,
      $ = !q || !q.prototype || !q.prototype.findChild,
      X = r && h(function() {
         return 7 != T(M({}, "a", {
            get: function() {
               return M(this, "a", {
                  value: 7
               }).a
            }
         })).a
      }) ?
   function(t, e, i) {
      var n = P(B, e);
      n && delete B[e], M(t, e, i), n && t !== B && M(B, e, n)
   } : M, U = function(t) {
      var e = I[t] = T(R.prototype);
      return e._k = t, e
   }, W = L && "symbol" == typeof R.iterator ?
   function(t) {
      return "symbol" == typeof t
   } : function(t) {
      return t instanceof R
   }, Y = function(t, e, i) {
      return t === B && Y(N, e, i), _(t), e = w(e, !0), _(i), s(I, e) ? (i.enumerable ? (s(t, D) && t[D][e] && (t[D][e] = !1), i = T(i, {
         enumerable: b(0, !1)
      })) : (s(t, D) || M(t, D, b(1, {})), t[D][e] = !0), X(t, e, i)) : M(t, e, i)
   }, V = function(t, e) {
      _(t);
      for (var i, n = g(e = x(e)), s = 0, r = n.length; r > s;) Y(t, i = n[s++], e[i]);
      return t
   }, G = function(t, e) {
      return void 0 === e ? T(t) : V(T(t), e)
   }, K = function(t) {
      var e = H.call(this, t = w(t, !0));
      return !(this === B && s(I, t) && !s(N, t)) && (!(e || !s(this, t) || !s(I, t) || s(this, D) && this[D][t]) || e)
   }, Q = function(t, e) {
      if (t = x(t), e = w(e, !0), t !== B || !s(I, e) || s(N, e)) {
         var i = P(t, e);
         return !i || !s(I, e) || s(t, D) && t[D][e] || (i.enumerable = !0), i
      }
   }, Z = function(t) {
      for (var e, i = O(x(t)), n = [], r = 0; i.length > r;) s(I, e = i[r++]) || e == D || e == l || n.push(e);
      return n
   }, J = function(t) {
      for (var e, i = t === B, n = O(i ? N : x(t)), r = [], a = 0; n.length > a;)!s(I, e = n[a++]) || i && !s(B, e) || r.push(I[e]);
      return r
   };
   L || (R = function() {
      if (this instanceof R) throw TypeError("Symbol is not a constructor!");
      var t = d(arguments.length > 0 ? arguments[0] : void 0),
         e = function(i) {
            this === B && e.call(N, i), s(this, D) && s(this[D], t) && (this[D][t] = !1), X(this, t, b(1, i))
         };
      return r && $ && X(B, t, {
         configurable: !0,
         set: e
      }), U(t)
   }, o(R.prototype, "toString", function() {
      return this._k
   }), S.f = Q, C.f = Y, i(73).f = k.f = Z, i(35).f = K, i(57).f = J, r && !i(37) && o(B, "propertyIsEnumerable", K, !0), f.f = function(t) {
      return U(p(t))
   }), a(a.G + a.W + a.F * !L, {
      Symbol: R
   });
   for (var tt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), et = 0; tt.length > et;) p(tt[et++]);
   for (var it = E(p.store), nt = 0; it.length > nt;) m(it[nt++]);
   a(a.S + a.F * !L, "Symbol", {
      for :function(t) {
         return s(z, t += "") ? z[t] : z[t] = R(t)
      }, keyFor: function(t) {
         if (!W(t)) throw TypeError(t + " is not a symbol!");
         for (var e in z) if (z[e] === t) return e
      },
      useSetter: function() {
         $ = !0
      },
      useSimple: function() {
         $ = !1
      }
   }), a(a.S + a.F * !L, "Object", {
      create: G,
      defineProperty: Y,
      defineProperties: V,
      getOwnPropertyDescriptor: Q,
      getOwnPropertyNames: Z,
      getOwnPropertySymbols: J
   }), A && a(a.S + a.F * (!L || h(function() {
      var t = R();
      return "[null]" != j([t]) || "{}" != j({
         a: t
      }) || "{}" != j(Object(t))
   })), "JSON", {
      stringify: function(t) {
         for (var e, i, n = [t], s = 1; arguments.length > s;) n.push(arguments[s++]);
         if (i = e = n[1], (y(e) || void 0 !== t) && !W(t)) return v(e) || (e = function(t, e) {
            if ("function" == typeof i && (e = i.call(this, t, e)), !W(e)) return e
         }), n[1] = e, j.apply(A, n)
      }
   }), R.prototype[F] || i(15)(R.prototype, F, R.prototype.valueOf), u(R, "Symbol"), u(Math, "Math", !0), u(n.JSON, "JSON", !0)
}, 
146: function(t, e, i) {
   i(47)("asyncIterator")
}, 
147: function(t, e, i) {
   i(47)("observable")
}, 
148: function(t, e) {
   t.exports = "/* Zepto v1.2.0 - zepto event ajax form ie - zeptojs.com/license */\n(function(global, factory) {\n  if (typeof define === 'function' && define.amd)\n    define(function() { return factory(global) })\n  else\n    factory(global)\n}(this, function(window) {\n  var Zepto = (function() {\n  var undefined, key, $, classList, emptyArray = [], concat = emptyArray.concat, filter = emptyArray.filter, slice = emptyArray.slice,\n    document = window.document,\n    elementDisplay = {}, classCache = {},\n    cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1,'opacity': 1, 'z-index': 1, 'zoom': 1 },\n    fragmentRE = /^\\s*<(\\w+|!)[^>]*>/,\n    singleTagRE = /^<(\\w+)\\s*\\/?>(?:<\\/\\1>|)$/,\n    tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:]+)[^>]*)\\/>/ig,\n    rootNodeRE = /^(?:body|html)$/i,\n    capitalRE = /([A-Z])/g,\n\n    // special attributes that should be get/set via method calls\n    methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],\n\n    adjacencyOperators = [ 'after', 'prepend', 'before', 'append' ],\n    table = document.createElement('table'),\n    tableRow = document.createElement('tr'),\n    containers = {\n      'tr': document.createElement('tbody'),\n      'tbody': table, 'thead': table, 'tfoot': table,\n      'td': tableRow, 'th': tableRow,\n      '*': document.createElement('div')\n    },\n    readyRE = /complete|loaded|interactive/,\n    simpleSelectorRE = /^[\\w-]*$/,\n    class2type = {},\n    toString = class2type.toString,\n    zepto = {},\n    camelize, uniq,\n    tempParent = document.createElement('div'),\n    propMap = {\n      'tabindex': 'tabIndex',\n      'readonly': 'readOnly',\n      'for': 'htmlFor',\n      'class': 'className',\n      'maxlength': 'maxLength',\n      'cellspacing': 'cellSpacing',\n      'cellpadding': 'cellPadding',\n      'rowspan': 'rowSpan',\n      'colspan': 'colSpan',\n      'usemap': 'useMap',\n      'frameborder': 'frameBorder',\n      'contenteditable': 'contentEditable'\n    },\n    isArray = Array.isArray ||\n      function(object){ return object instanceof Array }\n\n  zepto.matches = function(element, selector) {\n    if (!selector || !element || element.nodeType !== 1) return false\n    var matchesSelector = element.matches || element.webkitMatchesSelector ||\n                          element.mozMatchesSelector || element.oMatchesSelector ||\n                          element.matchesSelector\n    if (matchesSelector) return matchesSelector.call(element, selector)\n    // fall back to performing a selector:\n    var match, parent = element.parentNode, temp = !parent\n    if (temp) (parent = tempParent).appendChild(element)\n    match = ~zepto.qsa(parent, selector).indexOf(element)\n    temp && tempParent.removeChild(element)\n    return match\n  }\n\n  function type(obj) {\n    return obj == null ? String(obj) :\n      class2type[toString.call(obj)] || \"object\"\n  }\n\n  function isFunction(value) { return type(value) == \"function\" }\n  function isWindow(obj)     { return obj != null && obj == obj.window }\n  function isDocument(obj)   { return obj != null && obj.nodeType == obj.DOCUMENT_NODE }\n  function isObject(obj)     { return type(obj) == \"object\" }\n  function isPlainObject(obj) {\n    return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype\n  }\n\n  function likeArray(obj) {\n    var length = !!obj && 'length' in obj && obj.length,\n      type = $.type(obj)\n\n    return 'function' != type && !isWindow(obj) && (\n      'array' == type || length === 0 ||\n        (typeof length == 'number' && length > 0 && (length - 1) in obj)\n    )\n  }\n\n  function compact(array) { return filter.call(array, function(item){ return item != null }) }\n  function flatten(array) { return array.length > 0 ? $.fn.concat.apply([], array) : array }\n  camelize = function(str){ return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : '' }) }\n  function dasherize(str) {\n    return str.replace(/::/g, '/')\n           .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')\n           .replace(/([a-z\\d])([A-Z])/g, '$1_$2')\n           .replace(/_/g, '-')\n           .toLowerCase()\n  }\n  uniq = function(array){ return filter.call(array, function(item, idx){ return array.indexOf(item) == idx }) }\n\n  function classRE(name) {\n    return name in classCache ?\n      classCache[name] : (classCache[name] = new RegExp('(^|\\\\s)' + name + '(\\\\s|$)'))\n  }\n\n  function maybeAddPx(name, value) {\n    return (typeof value == \"number\" && !cssNumber[dasherize(name)]) ? value + \"px\" : value\n  }\n\n  function defaultDisplay(nodeName) {\n    var element, display\n    if (!elementDisplay[nodeName]) {\n      element = document.createElement(nodeName)\n      document.body.appendChild(element)\n      display = getComputedStyle(element, '').getPropertyValue(\"display\")\n      element.parentNode.removeChild(element)\n      display == \"none\" && (display = \"block\")\n      elementDisplay[nodeName] = display\n    }\n    return elementDisplay[nodeName]\n  }\n\n  function children(element) {\n    return 'children' in element ?\n      slice.call(element.children) :\n      $.map(element.childNodes, function(node){ if (node.nodeType == 1) return node })\n  }\n\n  function Z(dom, selector) {\n    var i, len = dom ? dom.length : 0\n    for (i = 0; i < len; i++) this[i] = dom[i]\n    this.length = len\n    this.selector = selector || ''\n  }\n\n  // `$.zepto.fragment` takes a html string and an optional tag name\n  // to generate DOM nodes from the given html string.\n  // The generated DOM nodes are returned as an array.\n  // This function can be overridden in plugins for example to make\n  // it compatible with browsers that don't support the DOM fully.\n  zepto.fragment = function(html, name, properties) {\n    var dom, nodes, container\n\n    // A special case optimization for a single tag\n    if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1))\n\n    if (!dom) {\n      if (html.replace) html = html.replace(tagExpanderRE, \"<$1></$2>\")\n      if (name === undefined) name = fragmentRE.test(html) && RegExp.$1\n      if (!(name in containers)) name = '*'\n\n      container = containers[name]\n      container.innerHTML = '' + html\n      dom = $.each(slice.call(container.childNodes), function(){\n        container.removeChild(this)\n      })\n    }\n\n    if (isPlainObject(properties)) {\n      nodes = $(dom)\n      $.each(properties, function(key, value) {\n        if (methodAttributes.indexOf(key) > -1) nodes[key](value)\n        else nodes.attr(key, value)\n      })\n    }\n\n    return dom\n  }\n\n  // `$.zepto.Z` swaps out the prototype of the given `dom` array\n  // of nodes with `$.fn` and thus supplying all the Zepto functions\n  // to the array. This method can be overridden in plugins.\n  zepto.Z = function(dom, selector) {\n    return new Z(dom, selector)\n  }\n\n  // `$.zepto.isZ` should return `true` if the given object is a Zepto\n  // collection. This method can be overridden in plugins.\n  zepto.isZ = function(object) {\n    return object instanceof zepto.Z\n  }\n\n  // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and\n  // takes a CSS selector and an optional context (and handles various\n  // special cases).\n  // This method can be overridden in plugins.\n  zepto.init = function(selector, context) {\n    var dom\n    // If nothing given, return an empty Zepto collection\n    if (!selector) return zepto.Z()\n    // Optimize for string selectors\n    else if (typeof selector == 'string') {\n      selector = selector.trim()\n      // If it's a html fragment, create nodes from it\n      // Note: In both Chrome 21 and Firefox 15, DOM error 12\n      // is thrown if the fragment doesn't begin with <\n      if (selector[0] == '<' && fragmentRE.test(selector))\n        dom = zepto.fragment(selector, RegExp.$1, context), selector = null\n      // If there's a context, create a collection on that context first, and select\n      // nodes from there\n      else if (context !== undefined) return $(context).find(selector)\n      // If it's a CSS selector, use it to select nodes.\n      else dom = zepto.qsa(document, selector)\n    }\n    // If a function is given, call it when the DOM is ready\n    else if (isFunction(selector)) return $(document).ready(selector)\n    // If a Zepto collection is given, just return it\n    else if (zepto.isZ(selector)) return selector\n    else {\n      // normalize array if an array of nodes is given\n      if (isArray(selector)) dom = compact(selector)\n      // Wrap DOM nodes.\n      else if (isObject(selector))\n        dom = [selector], selector = null\n      // If it's a html fragment, create nodes from it\n      else if (fragmentRE.test(selector))\n        dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null\n      // If there's a context, create a collection on that context first, and select\n      // nodes from there\n      else if (context !== undefined) return $(context).find(selector)\n      // And last but no least, if it's a CSS selector, use it to select nodes.\n      else dom = zepto.qsa(document, selector)\n    }\n    // create a new Zepto collection from the nodes found\n    return zepto.Z(dom, selector)\n  }\n\n  // `$` will be the base `Zepto` object. When calling this\n  // function just call `$.zepto.init, which makes the implementation\n  // details of selecting nodes and creating Zepto collections\n  // patchable in plugins.\n  $ = function(selector, context){\n    return zepto.init(selector, context)\n  }\n\n  function extend(target, source, deep) {\n    for (key in source)\n      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {\n        if (isPlainObject(source[key]) && !isPlainObject(target[key]))\n          target[key] = {}\n        if (isArray(source[key]) && !isArray(target[key]))\n          target[key] = []\n        extend(target[key], source[key], deep)\n      }\n      else if (source[key] !== undefined) target[key] = source[key]\n  }\n\n  // Copy all but undefined properties from one or more\n  // objects to the `target` object.\n  $.extend = function(target){\n    var deep, args = slice.call(arguments, 1)\n    if (typeof target == 'boolean') {\n      deep = target\n      target = args.shift()\n    }\n    args.forEach(function(arg){ extend(target, arg, deep) })\n    return target\n  }\n\n  // `$.zepto.qsa` is Zepto's CSS selector implementation which\n  // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.\n  // This method can be overridden in plugins.\n  zepto.qsa = function(element, selector){\n    var found,\n        maybeID = selector[0] == '#',\n        maybeClass = !maybeID && selector[0] == '.',\n        nameOnly = maybeID || maybeClass ? selector.slice(1) : selector, // Ensure that a 1 char tag name still gets checked\n        isSimple = simpleSelectorRE.test(nameOnly)\n    return (element.getElementById && isSimple && maybeID) ? // Safari DocumentFragment doesn't have getElementById\n      ( (found = element.getElementById(nameOnly)) ? [found] : [] ) :\n      (element.nodeType !== 1 && element.nodeType !== 9 && element.nodeType !== 11) ? [] :\n      slice.call(\n        isSimple && !maybeID && element.getElementsByClassName ? // DocumentFragment doesn't have getElementsByClassName/TagName\n          maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class\n          element.getElementsByTagName(selector) : // Or a tag\n          element.querySelectorAll(selector) // Or it's not simple, and we need to query all\n      )\n  }\n\n  function filtered(nodes, selector) {\n    return selector == null ? $(nodes) : $(nodes).filter(selector)\n  }\n\n  $.contains = document.documentElement.contains ?\n    function(parent, node) {\n      return parent !== node && parent.contains(node)\n    } :\n    function(parent, node) {\n      while (node && (node = node.parentNode))\n        if (node === parent) return true\n      return false\n    }\n\n  function funcArg(context, arg, idx, payload) {\n    return isFunction(arg) ? arg.call(context, idx, payload) : arg\n  }\n\n  function setAttribute(node, name, value) {\n    value == null ? node.removeAttribute(name) : node.setAttribute(name, value)\n  }\n\n  // access className property while respecting SVGAnimatedString\n  function className(node, value){\n    var klass = node.className || '',\n        svg   = klass && klass.baseVal !== undefined\n\n    if (value === undefined) return svg ? klass.baseVal : klass\n    svg ? (klass.baseVal = value) : (node.className = value)\n  }\n\n  // \"true\"  => true\n  // \"false\" => false\n  // \"null\"  => null\n  // \"42\"    => 42\n  // \"42.5\"  => 42.5\n  // \"08\"    => \"08\"\n  // JSON    => parse if valid\n  // String  => self\n  function deserializeValue(value) {\n    try {\n      return value ?\n        value == \"true\" ||\n        ( value == \"false\" ? false :\n          value == \"null\" ? null :\n          +value + \"\" == value ? +value :\n          /^[\\[\\{]/.test(value) ? $.parseJSON(value) :\n          value )\n        : value\n    } catch(e) {\n      return value\n    }\n  }\n\n  $.type = type\n  $.isFunction = isFunction\n  $.isWindow = isWindow\n  $.isArray = isArray\n  $.isPlainObject = isPlainObject\n\n  $.isEmptyObject = function(obj) {\n    var name\n    for (name in obj) return false\n    return true\n  }\n\n  $.isNumeric = function(val) {\n    var num = Number(val), type = typeof val\n    return val != null && type != 'boolean' &&\n      (type != 'string' || val.length) &&\n      !isNaN(num) && isFinite(num) || false\n  }\n\n  $.inArray = function(elem, array, i){\n    return emptyArray.indexOf.call(array, elem, i)\n  }\n\n  $.camelCase = camelize\n  $.trim = function(str) {\n    return str == null ? \"\" : String.prototype.trim.call(str)\n  }\n\n  // plugin compatibility\n  $.uuid = 0\n  $.support = { }\n  $.expr = { }\n  $.noop = function() {}\n\n  $.map = function(elements, callback){\n    var value, values = [], i, key\n    if (likeArray(elements))\n      for (i = 0; i < elements.length; i++) {\n        value = callback(elements[i], i)\n        if (value != null) values.push(value)\n      }\n    else\n      for (key in elements) {\n        value = callback(elements[key], key)\n        if (value != null) values.push(value)\n      }\n    return flatten(values)\n  }\n\n  $.each = function(elements, callback){\n    var i, key\n    if (likeArray(elements)) {\n      for (i = 0; i < elements.length; i++)\n        if (callback.call(elements[i], i, elements[i]) === false) return elements\n    } else {\n      for (key in elements)\n        if (callback.call(elements[key], key, elements[key]) === false) return elements\n    }\n\n    return elements\n  }\n\n  $.grep = function(elements, callback){\n    return filter.call(elements, callback)\n  }\n\n  if (window.JSON) $.parseJSON = JSON.parse\n\n  // Populate the class2type map\n  $.each(\"Boolean Number String Function Array Date RegExp Object Error\".split(\" \"), function(i, name) {\n    class2type[ \"[object \" + name + \"]\" ] = name.toLowerCase()\n  })\n\n  // Define methods that will be available on all\n  // Zepto collections\n  $.fn = {\n    constructor: zepto.Z,\n    length: 0,\n\n    // Because a collection acts like an array\n    // copy over these useful array functions.\n    forEach: emptyArray.forEach,\n    reduce: emptyArray.reduce,\n    push: emptyArray.push,\n    sort: emptyArray.sort,\n    splice: emptyArray.splice,\n    indexOf: emptyArray.indexOf,\n    concat: function(){\n      var i, value, args = []\n      for (i = 0; i < arguments.length; i++) {\n        value = arguments[i]\n        args[i] = zepto.isZ(value) ? value.toArray() : value\n      }\n      return concat.apply(zepto.isZ(this) ? this.toArray() : this, args)\n    },\n\n    // `map` and `slice` in the jQuery API work differently\n    // from their array counterparts\n    map: function(fn){\n      return $($.map(this, function(el, i){ return fn.call(el, i, el) }))\n    },\n    slice: function(){\n      return $(slice.apply(this, arguments))\n    },\n\n    ready: function(callback){\n      // need to check if document.body exists for IE as that browser reports\n      // document ready when it hasn't yet created the body element\n      if (readyRE.test(document.readyState) && document.body) callback($)\n      else document.addEventListener('DOMContentLoaded', function(){ callback($) }, false)\n      return this\n    },\n    get: function(idx){\n      return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length]\n    },\n    toArray: function(){ return this.get() },\n    size: function(){\n      return this.length\n    },\n    remove: function(){\n      return this.each(function(){\n        if (this.parentNode != null)\n          this.parentNode.removeChild(this)\n      })\n    },\n    each: function(callback){\n      emptyArray.every.call(this, function(el, idx){\n        return callback.call(el, idx, el) !== false\n      })\n      return this\n    },\n    filter: function(selector){\n      if (isFunction(selector)) return this.not(this.not(selector))\n      return $(filter.call(this, function(element){\n        return zepto.matches(element, selector)\n      }))\n    },\n    add: function(selector,context){\n      return $(uniq(this.concat($(selector,context))))\n    },\n    is: function(selector){\n      return this.length > 0 && zepto.matches(this[0], selector)\n    },\n    not: function(selector){\n      var nodes=[]\n      if (isFunction(selector) && selector.call !== undefined)\n        this.each(function(idx){\n          if (!selector.call(this,idx)) nodes.push(this)\n        })\n      else {\n        var excludes = typeof selector == 'string' ? this.filter(selector) :\n          (likeArray(selector) && isFunction(selector.item)) ? slice.call(selector) : $(selector)\n        this.forEach(function(el){\n          if (excludes.indexOf(el) < 0) nodes.push(el)\n        })\n      }\n      return $(nodes)\n    },\n    has: function(selector){\n      return this.filter(function(){\n        return isObject(selector) ?\n          $.contains(this, selector) :\n          $(this).find(selector).size()\n      })\n    },\n    eq: function(idx){\n      return idx === -1 ? this.slice(idx) : this.slice(idx, + idx + 1)\n    },\n    first: function(){\n      var el = this[0]\n      return el && !isObject(el) ? el : $(el)\n    },\n    last: function(){\n      var el = this[this.length - 1]\n      return el && !isObject(el) ? el : $(el)\n    },\n    find: function(selector){\n      var result, $this = this\n      if (!selector) result = $()\n      else if (typeof selector == 'object')\n        result = $(selector).filter(function(){\n          var node = this\n          return emptyArray.some.call($this, function(parent){\n            return $.contains(parent, node)\n          })\n        })\n      else if (this.length == 1) result = $(zepto.qsa(this[0], selector))\n      else result = this.map(function(){ return zepto.qsa(this, selector) })\n      return result\n    },\n    closest: function(selector, context){\n      var nodes = [], collection = typeof selector == 'object' && $(selector)\n      this.each(function(_, node){\n        while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector)))\n          node = node !== context && !isDocument(node) && node.parentNode\n        if (node && nodes.indexOf(node) < 0) nodes.push(node)\n      })\n      return $(nodes)\n    },\n    parents: function(selector){\n      var ancestors = [], nodes = this\n      while (nodes.length > 0)\n        nodes = $.map(nodes, function(node){\n          if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {\n            ancestors.push(node)\n            return node\n          }\n        })\n      return filtered(ancestors, selector)\n    },\n    parent: function(selector){\n      return filtered(uniq(this.pluck('parentNode')), selector)\n    },\n    children: function(selector){\n      return filtered(this.map(function(){ return children(this) }), selector)\n    },\n    contents: function() {\n      return this.map(function() { return this.contentDocument || slice.call(this.childNodes) })\n    },\n    siblings: function(selector){\n      return filtered(this.map(function(i, el){\n        return filter.call(children(el.parentNode), function(child){ return child!==el })\n      }), selector)\n    },\n    empty: function(){\n      return this.each(function(){ this.innerHTML = '' })\n    },\n    // `pluck` is borrowed from Prototype.js\n    pluck: function(property){\n      return $.map(this, function(el){ return el[property] })\n    },\n    show: function(){\n      return this.each(function(){\n        this.style.display == \"none\" && (this.style.display = '')\n        if (getComputedStyle(this, '').getPropertyValue(\"display\") == \"none\")\n          this.style.display = defaultDisplay(this.nodeName)\n      })\n    },\n    replaceWith: function(newContent){\n      return this.before(newContent).remove()\n    },\n    wrap: function(structure){\n      var func = isFunction(structure)\n      if (this[0] && !func)\n        var dom   = $(structure).get(0),\n            clone = dom.parentNode || this.length > 1\n\n      return this.each(function(index){\n        $(this).wrapAll(\n          func ? structure.call(this, index) :\n            clone ? dom.cloneNode(true) : dom\n        )\n      })\n    },\n    wrapAll: function(structure){\n      if (this[0]) {\n        $(this[0]).before(structure = $(structure))\n        var children\n        // drill down to the inmost element\n        while ((children = structure.children()).length) structure = children.first()\n        $(structure).append(this)\n      }\n      return this\n    },\n    wrapInner: function(structure){\n      var func = isFunction(structure)\n      return this.each(function(index){\n        var self = $(this), contents = self.contents(),\n            dom  = func ? structure.call(this, index) : structure\n        contents.length ? contents.wrapAll(dom) : self.append(dom)\n      })\n    },\n    unwrap: function(){\n      this.parent().each(function(){\n        $(this).replaceWith($(this).children())\n      })\n      return this\n    },\n    clone: function(){\n      return this.map(function(){ return this.cloneNode(true) })\n    },\n    hide: function(){\n      return this.css(\"display\", \"none\")\n    },\n    toggle: function(setting){\n      return this.each(function(){\n        var el = $(this)\n        ;(setting === undefined ? el.css(\"display\") == \"none\" : setting) ? el.show() : el.hide()\n      })\n    },\n    prev: function(selector){ return $(this.pluck('previousElementSibling')).filter(selector || '*') },\n    next: function(selector){ return $(this.pluck('nextElementSibling')).filter(selector || '*') },\n    html: function(html){\n      return 0 in arguments ?\n        this.each(function(idx){\n          var originHtml = this.innerHTML\n          $(this).empty().append( funcArg(this, html, idx, originHtml) )\n        }) :\n        (0 in this ? this[0].innerHTML : null)\n    },\n    text: function(text){\n      return 0 in arguments ?\n        this.each(function(idx){\n          var newText = funcArg(this, text, idx, this.textContent)\n          this.textContent = newText == null ? '' : ''+newText\n        }) :\n        (0 in this ? this.pluck('textContent').join(\"\") : null)\n    },\n    attr: function(name, value){\n      var result\n      return (typeof name == 'string' && !(1 in arguments)) ?\n        (0 in this && this[0].nodeType == 1 && (result = this[0].getAttribute(name)) != null ? result : undefined) :\n        this.each(function(idx){\n          if (this.nodeType !== 1) return\n          if (isObject(name)) for (key in name) setAttribute(this, key, name[key])\n          else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)))\n        })\n    },\n    removeAttr: function(name){\n      return this.each(function(){ this.nodeType === 1 && name.split(' ').forEach(function(attribute){\n        setAttribute(this, attribute)\n      }, this)})\n    },\n    prop: function(name, value){\n      name = propMap[name] || name\n      return (1 in arguments) ?\n        this.each(function(idx){\n          this[name] = funcArg(this, value, idx, this[name])\n        }) :\n        (this[0] && this[0][name])\n    },\n    removeProp: function(name){\n      name = propMap[name] || name\n      return this.each(function(){ delete this[name] })\n    },\n    data: function(name, value){\n      var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase()\n\n      var data = (1 in arguments) ?\n        this.attr(attrName, value) :\n        this.attr(attrName)\n\n      return data !== null ? deserializeValue(data) : undefined\n    },\n    val: function(value){\n      if (0 in arguments) {\n        if (value == null) value = \"\"\n        return this.each(function(idx){\n          this.value = funcArg(this, value, idx, this.value)\n        })\n      } else {\n        return this[0] && (this[0].multiple ?\n           $(this[0]).find('option').filter(function(){ return this.selected }).pluck('value') :\n           this[0].value)\n      }\n    },\n    offset: function(coordinates){\n      if (coordinates) return this.each(function(index){\n        var $this = $(this),\n            coords = funcArg(this, coordinates, index, $this.offset()),\n            parentOffset = $this.offsetParent().offset(),\n            props = {\n              top:  coords.top  - parentOffset.top,\n              left: coords.left - parentOffset.left\n            }\n\n        if ($this.css('position') == 'static') props['position'] = 'relative'\n        $this.css(props)\n      })\n      if (!this.length) return null\n      if (document.documentElement !== this[0] && !$.contains(document.documentElement, this[0]))\n        return {top: 0, left: 0}\n      var obj = this[0].getBoundingClientRect()\n      return {\n        left: obj.left + window.pageXOffset,\n        top: obj.top + window.pageYOffset,\n        width: Math.round(obj.width),\n        height: Math.round(obj.height)\n      }\n    },\n    css: function(property, value){\n      if (arguments.length < 2) {\n        var element = this[0]\n        if (typeof property == 'string') {\n          if (!element) return\n          return element.style[camelize(property)] || getComputedStyle(element, '').getPropertyValue(property)\n        } else if (isArray(property)) {\n          if (!element) return\n          var props = {}\n          var computedStyle = getComputedStyle(element, '')\n          $.each(property, function(_, prop){\n            props[prop] = (element.style[camelize(prop)] || computedStyle.getPropertyValue(prop))\n          })\n          return props\n        }\n      }\n\n      var css = ''\n      if (type(property) == 'string') {\n        if (!value && value !== 0)\n          this.each(function(){ this.style.removeProperty(dasherize(property)) })\n        else\n          css = dasherize(property) + \":\" + maybeAddPx(property, value)\n      } else {\n        for (key in property)\n          if (!property[key] && property[key] !== 0)\n            this.each(function(){ this.style.removeProperty(dasherize(key)) })\n          else\n            css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';'\n      }\n\n      return this.each(function(){ this.style.cssText += ';' + css })\n    },\n    index: function(element){\n      return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0])\n    },\n    hasClass: function(name){\n      if (!name) return false\n      return emptyArray.some.call(this, function(el){\n        return this.test(className(el))\n      }, classRE(name))\n    },\n    addClass: function(name){\n      if (!name) return this\n      return this.each(function(idx){\n        if (!('className' in this)) return\n        classList = []\n        var cls = className(this), newName = funcArg(this, name, idx, cls)\n        newName.split(/\\s+/g).forEach(function(klass){\n          if (!$(this).hasClass(klass)) classList.push(klass)\n        }, this)\n        classList.length && className(this, cls + (cls ? \" \" : \"\") + classList.join(\" \"))\n      })\n    },\n    removeClass: function(name){\n      return this.each(function(idx){\n        if (!('className' in this)) return\n        if (name === undefined) return className(this, '')\n        classList = className(this)\n        funcArg(this, name, idx, classList).split(/\\s+/g).forEach(function(klass){\n          classList = classList.replace(classRE(klass), \" \")\n        })\n        className(this, classList.trim())\n      })\n    },\n    toggleClass: function(name, when){\n      if (!name) return this\n      return this.each(function(idx){\n        var $this = $(this), names = funcArg(this, name, idx, className(this))\n        names.split(/\\s+/g).forEach(function(klass){\n          (when === undefined ? !$this.hasClass(klass) : when) ?\n            $this.addClass(klass) : $this.removeClass(klass)\n        })\n      })\n    },\n    scrollTop: function(value){\n      if (!this.length) return\n      var hasScrollTop = 'scrollTop' in this[0]\n      if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset\n      return this.each(hasScrollTop ?\n        function(){ this.scrollTop = value } :\n        function(){ this.scrollTo(this.scrollX, value) })\n    },\n    scrollLeft: function(value){\n      if (!this.length) return\n      var hasScrollLeft = 'scrollLeft' in this[0]\n      if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset\n      return this.each(hasScrollLeft ?\n        function(){ this.scrollLeft = value } :\n        function(){ this.scrollTo(value, this.scrollY) })\n    },\n    position: function() {\n      if (!this.length) return\n\n      var elem = this[0],\n        // Get *real* offsetParent\n        offsetParent = this.offsetParent(),\n        // Get correct offsets\n        offset       = this.offset(),\n        parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset()\n\n      // Subtract element margins\n      // note: when an element has margin: auto the offsetLeft and marginLeft\n      // are the same in Safari causing offset.left to incorrectly be 0\n      offset.top  -= parseFloat( $(elem).css('margin-top') ) || 0\n      offset.left -= parseFloat( $(elem).css('margin-left') ) || 0\n\n      // Add offsetParent borders\n      parentOffset.top  += parseFloat( $(offsetParent[0]).css('border-top-width') ) || 0\n      parentOffset.left += parseFloat( $(offsetParent[0]).css('border-left-width') ) || 0\n\n      // Subtract the two offsets\n      return {\n        top:  offset.top  - parentOffset.top,\n        left: offset.left - parentOffset.left\n      }\n    },\n    offsetParent: function() {\n      return this.map(function(){\n        var parent = this.offsetParent || document.body\n        while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css(\"position\") == \"static\")\n          parent = parent.offsetParent\n        return parent\n      })\n    }\n  }\n\n  // for now\n  $.fn.detach = $.fn.remove\n\n  // Generate the `width` and `height` functions\n  ;['width', 'height'].forEach(function(dimension){\n    var dimensionProperty =\n      dimension.replace(/./, function(m){ return m[0].toUpperCase() })\n\n    $.fn[dimension] = function(value){\n      var offset, el = this[0]\n      if (value === undefined) return isWindow(el) ? el['inner' + dimensionProperty] :\n        isDocument(el) ? el.documentElement['scroll' + dimensionProperty] :\n        (offset = this.offset()) && offset[dimension]\n      else return this.each(function(idx){\n        el = $(this)\n        el.css(dimension, funcArg(this, value, idx, el[dimension]()))\n      })\n    }\n  })\n\n  function traverseNode(node, fun) {\n    fun(node)\n    for (var i = 0, len = node.childNodes.length; i < len; i++)\n      traverseNode(node.childNodes[i], fun)\n  }\n\n  // Generate the `after`, `prepend`, `before`, `append`,\n  // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.\n  adjacencyOperators.forEach(function(operator, operatorIndex) {\n    var inside = operatorIndex % 2 //=> prepend, append\n\n    $.fn[operator] = function(){\n      // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings\n      var argType, nodes = $.map(arguments, function(arg) {\n            var arr = []\n            argType = type(arg)\n            if (argType == \"array\") {\n              arg.forEach(function(el) {\n                if (el.nodeType !== undefined) return arr.push(el)\n                else if ($.zepto.isZ(el)) return arr = arr.concat(el.get())\n                arr = arr.concat(zepto.fragment(el))\n              })\n              return arr\n            }\n            return argType == \"object\" || arg == null ?\n              arg : zepto.fragment(arg)\n          }),\n          parent, copyByClone = this.length > 1\n      if (nodes.length < 1) return this\n\n      return this.each(function(_, target){\n        parent = inside ? target : target.parentNode\n\n        // convert all methods to a \"before\" operation\n        target = operatorIndex == 0 ? target.nextSibling :\n                 operatorIndex == 1 ? target.firstChild :\n                 operatorIndex == 2 ? target :\n                 null\n\n        var parentInDocument = $.contains(document.documentElement, parent)\n\n        nodes.forEach(function(node){\n          if (copyByClone) node = node.cloneNode(true)\n          else if (!parent) return $(node).remove()\n\n          parent.insertBefore(node, target)\n          if (parentInDocument) traverseNode(node, function(el){\n            if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' &&\n               (!el.type || el.type === 'text/javascript') && !el.src){\n              var target = el.ownerDocument ? el.ownerDocument.defaultView : window\n              target['eval'].call(target, el.innerHTML)\n            }\n          })\n        })\n      })\n    }\n\n    // after    => insertAfter\n    // prepend  => prependTo\n    // before   => insertBefore\n    // append   => appendTo\n    $.fn[inside ? operator+'To' : 'insert'+(operatorIndex ? 'Before' : 'After')] = function(html){\n      $(html)[operator](this)\n      return this\n    }\n  })\n\n  zepto.Z.prototype = Z.prototype = $.fn\n\n  // Export internal API functions in the `$.zepto` namespace\n  zepto.uniq = uniq\n  zepto.deserializeValue = deserializeValue\n  $.zepto = zepto\n\n  return $\n})()\n\nwindow.Zepto = Zepto\nwindow.$ === undefined && (window.$ = Zepto)\n\n;(function($){\n  var _zid = 1, undefined,\n      slice = Array.prototype.slice,\n      isFunction = $.isFunction,\n      isString = function(obj){ return typeof obj == 'string' },\n      handlers = {},\n      specialEvents={},\n      focusinSupported = 'onfocusin' in window,\n      focus = { focus: 'focusin', blur: 'focusout' },\n      hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' }\n\n  specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents'\n\n  function zid(element) {\n    return element._zid || (element._zid = _zid++)\n  }\n  function findHandlers(element, event, fn, selector) {\n    event = parse(event)\n    if (event.ns) var matcher = matcherFor(event.ns)\n    return (handlers[zid(element)] || []).filter(function(handler) {\n      return handler\n        && (!event.e  || handler.e == event.e)\n        && (!event.ns || matcher.test(handler.ns))\n        && (!fn       || zid(handler.fn) === zid(fn))\n        && (!selector || handler.sel == selector)\n    })\n  }\n  function parse(event) {\n    var parts = ('' + event).split('.')\n    return {e: parts[0], ns: parts.slice(1).sort().join(' ')}\n  }\n  function matcherFor(ns) {\n    return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)')\n  }\n\n  function eventCapture(handler, captureSetting) {\n    return handler.del &&\n      (!focusinSupported && (handler.e in focus)) ||\n      !!captureSetting\n  }\n\n  function realEvent(type) {\n    return hover[type] || (focusinSupported && focus[type]) || type\n  }\n\n  function add(element, events, fn, data, selector, delegator, capture){\n    var id = zid(element), set = (handlers[id] || (handlers[id] = []))\n    events.split(/\\s/).forEach(function(event){\n      if (event == 'ready') return $(document).ready(fn)\n      var handler   = parse(event)\n      handler.fn    = fn\n      handler.sel   = selector\n      // emulate mouseenter, mouseleave\n      if (handler.e in hover) fn = function(e){\n        var related = e.relatedTarget\n        if (!related || (related !== this && !$.contains(this, related)))\n          return handler.fn.apply(this, arguments)\n      }\n      handler.del   = delegator\n      var callback  = delegator || fn\n      handler.proxy = function(e){\n        e = compatible(e)\n        if (e.isImmediatePropagationStopped()) return\n        e.data = data\n        var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args))\n        if (result === false) e.preventDefault(), e.stopPropagation()\n        return result\n      }\n      handler.i = set.length\n      set.push(handler)\n      if ('addEventListener' in element)\n        element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))\n    })\n  }\n  function remove(element, events, fn, selector, capture){\n    var id = zid(element)\n    ;(events || '').split(/\\s/).forEach(function(event){\n      findHandlers(element, event, fn, selector).forEach(function(handler){\n        delete handlers[id][handler.i]\n      if ('removeEventListener' in element)\n        element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))\n      })\n    })\n  }\n\n  $.event = { add: add, remove: remove }\n\n  $.proxy = function(fn, context) {\n    var args = (2 in arguments) && slice.call(arguments, 2)\n    if (isFunction(fn)) {\n      var proxyFn = function(){ return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments) }\n      proxyFn._zid = zid(fn)\n      return proxyFn\n    } else if (isString(context)) {\n      if (args) {\n        args.unshift(fn[context], fn)\n        return $.proxy.apply(null, args)\n      } else {\n        return $.proxy(fn[context], fn)\n      }\n    } else {\n      throw new TypeError(\"expected function\")\n    }\n  }\n\n  $.fn.bind = function(event, data, callback){\n    return this.on(event, data, callback)\n  }\n  $.fn.unbind = function(event, callback){\n    return this.off(event, callback)\n  }\n  $.fn.one = function(event, selector, data, callback){\n    return this.on(event, selector, data, callback, 1)\n  }\n\n  var returnTrue = function(){return true},\n      returnFalse = function(){return false},\n      ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,\n      eventMethods = {\n        preventDefault: 'isDefaultPrevented',\n        stopImmediatePropagation: 'isImmediatePropagationStopped',\n        stopPropagation: 'isPropagationStopped'\n      }\n\n  function compatible(event, source) {\n    if (source || !event.isDefaultPrevented) {\n      source || (source = event)\n\n      $.each(eventMethods, function(name, predicate) {\n        var sourceMethod = source[name]\n        event[name] = function(){\n          this[predicate] = returnTrue\n          return sourceMethod && sourceMethod.apply(source, arguments)\n        }\n        event[predicate] = returnFalse\n      })\n\n      event.timeStamp || (event.timeStamp = Date.now())\n\n      if (source.defaultPrevented !== undefined ? source.defaultPrevented :\n          'returnValue' in source ? source.returnValue === false :\n          source.getPreventDefault && source.getPreventDefault())\n        event.isDefaultPrevented = returnTrue\n    }\n    return event\n  }\n\n  function createProxy(event) {\n    var key, proxy = { originalEvent: event }\n    for (key in event)\n      if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key]\n\n    return compatible(proxy, event)\n  }\n\n  $.fn.delegate = function(selector, event, callback){\n    return this.on(event, selector, callback)\n  }\n  $.fn.undelegate = function(selector, event, callback){\n    return this.off(event, selector, callback)\n  }\n\n  $.fn.live = function(event, callback){\n    $(document.body).delegate(this.selector, event, callback)\n    return this\n  }\n  $.fn.die = function(event, callback){\n    $(document.body).undelegate(this.selector, event, callback)\n    return this\n  }\n\n  $.fn.on = function(event, selector, data, callback, one){\n    var autoRemove, delegator, $this = this\n    if (event && !isString(event)) {\n      $.each(event, function(type, fn){\n        $this.on(type, selector, data, fn, one)\n      })\n      return $this\n    }\n\n    if (!isString(selector) && !isFunction(callback) && callback !== false)\n      callback = data, data = selector, selector = undefined\n    if (callback === undefined || data === false)\n      callback = data, data = undefined\n\n    if (callback === false) callback = returnFalse\n\n    return $this.each(function(_, element){\n      if (one) autoRemove = function(e){\n        remove(element, e.type, callback)\n        return callback.apply(this, arguments)\n      }\n\n      if (selector) delegator = function(e){\n        var evt, match = $(e.target).closest(selector, element).get(0)\n        if (match && match !== element) {\n          evt = $.extend(createProxy(e), {currentTarget: match, liveFired: element})\n          return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)))\n        }\n      }\n\n      add(element, event, callback, data, selector, delegator || autoRemove)\n    })\n  }\n  $.fn.off = function(event, selector, callback){\n    var $this = this\n    if (event && !isString(event)) {\n      $.each(event, function(type, fn){\n        $this.off(type, selector, fn)\n      })\n      return $this\n    }\n\n    if (!isString(selector) && !isFunction(callback) && callback !== false)\n      callback = selector, selector = undefined\n\n    if (callback === false) callback = returnFalse\n\n    return $this.each(function(){\n      remove(this, event, callback, selector)\n    })\n  }\n\n  $.fn.trigger = function(event, args){\n    event = (isString(event) || $.isPlainObject(event)) ? $.Event(event) : compatible(event)\n    event._args = args\n    return this.each(function(){\n      // handle focus(), blur() by calling them directly\n      if (event.type in focus && typeof this[event.type] == \"function\") this[event.type]()\n      // items in the collection might not be DOM elements\n      else if ('dispatchEvent' in this) this.dispatchEvent(event)\n      else $(this).triggerHandler(event, args)\n    })\n  }\n\n  // triggers event handlers on current element just as if an event occurred,\n  // doesn't trigger an actual event, doesn't bubble\n  $.fn.triggerHandler = function(event, args){\n    var e, result\n    this.each(function(i, element){\n      e = createProxy(isString(event) ? $.Event(event) : event)\n      e._args = args\n      e.target = element\n      $.each(findHandlers(element, event.type || event), function(i, handler){\n        result = handler.proxy(e)\n        if (e.isImmediatePropagationStopped()) return false\n      })\n    })\n    return result\n  }\n\n  // shortcut methods for `.bind(event, fn)` for each event type\n  ;('focusin focusout focus blur load resize scroll unload click dblclick '+\n  'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave '+\n  'change select keydown keypress keyup error').split(' ').forEach(function(event) {\n    $.fn[event] = function(callback) {\n      return (0 in arguments) ?\n        this.bind(event, callback) :\n        this.trigger(event)\n    }\n  })\n\n  $.Event = function(type, props) {\n    if (!isString(type)) props = type, type = props.type\n    var event = document.createEvent(specialEvents[type] || 'Events'), bubbles = true\n    if (props) for (var name in props) (name == 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name])\n    event.initEvent(type, bubbles, true)\n    return compatible(event)\n  }\n\n})(Zepto)\n\n;(function($){\n  var jsonpID = +new Date(),\n      document = window.document,\n      key,\n      name,\n      rscript = /<script\\b[^<]*(?:(?!<\\/script>)<[^<]*)*<\\/script>/gi,\n      scriptTypeRE = /^(?:text|application)\\/javascript/i,\n      xmlTypeRE = /^(?:text|application)\\/xml/i,\n      jsonType = 'application/json',\n      htmlType = 'text/html',\n      blankRE = /^\\s*$/,\n      originAnchor = document.createElement('a')\n\n  originAnchor.href = window.location.href\n\n  // trigger a custom event and return false if it was cancelled\n  function triggerAndReturn(context, eventName, data) {\n    var event = $.Event(eventName)\n    $(context).trigger(event, data)\n    return !event.isDefaultPrevented()\n  }\n\n  // trigger an Ajax \"global\" event\n  function triggerGlobal(settings, context, eventName, data) {\n    if (settings.global) return triggerAndReturn(context || document, eventName, data)\n  }\n\n  // Number of active Ajax requests\n  $.active = 0\n\n  function ajaxStart(settings) {\n    if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart')\n  }\n  function ajaxStop(settings) {\n    if (settings.global && !(--$.active)) triggerGlobal(settings, null, 'ajaxStop')\n  }\n\n  // triggers an extra global event \"ajaxBeforeSend\" that's like \"ajaxSend\" but cancelable\n  function ajaxBeforeSend(xhr, settings) {\n    var context = settings.context\n    if (settings.beforeSend.call(context, xhr, settings) === false ||\n        triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false)\n      return false\n\n    triggerGlobal(settings, context, 'ajaxSend', [xhr, settings])\n  }\n  function ajaxSuccess(data, xhr, settings, deferred) {\n    var context = settings.context, status = 'success'\n    settings.success.call(context, data, status, xhr)\n    if (deferred) deferred.resolveWith(context, [data, status, xhr])\n    triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data])\n    ajaxComplete(status, xhr, settings)\n  }\n  // type: \"timeout\", \"error\", \"abort\", \"parsererror\"\n  function ajaxError(error, type, xhr, settings, deferred) {\n    var context = settings.context\n    settings.error.call(context, xhr, type, error)\n    if (deferred) deferred.rejectWith(context, [xhr, type, error])\n    triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error || type])\n    ajaxComplete(type, xhr, settings)\n  }\n  // status: \"success\", \"notmodified\", \"error\", \"timeout\", \"abort\", \"parsererror\"\n  function ajaxComplete(status, xhr, settings) {\n    var context = settings.context\n    settings.complete.call(context, xhr, status)\n    triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings])\n    ajaxStop(settings)\n  }\n\n  function ajaxDataFilter(data, type, settings) {\n    if (settings.dataFilter == empty) return data\n    var context = settings.context\n    return settings.dataFilter.call(context, data, type)\n  }\n\n  // Empty function, used as default callback\n  function empty() {}\n\n  $.ajaxJSONP = function(options, deferred){\n    if (!('type' in options)) return $.ajax(options)\n\n    var _callbackName = options.jsonpCallback,\n      callbackName = ($.isFunction(_callbackName) ?\n        _callbackName() : _callbackName) || ('Zepto' + (jsonpID++)),\n      script = document.createElement('script'),\n      originalCallback = window[callbackName],\n      responseData,\n      abort = function(errorType) {\n        $(script).triggerHandler('error', errorType || 'abort')\n      },\n      xhr = { abort: abort }, abortTimeout\n\n    if (deferred) deferred.promise(xhr)\n\n    $(script).on('load error', function(e, errorType){\n      clearTimeout(abortTimeout)\n      $(script).off().remove()\n\n      if (e.type == 'error' || !responseData) {\n        ajaxError(null, errorType || 'error', xhr, options, deferred)\n      } else {\n        ajaxSuccess(responseData[0], xhr, options, deferred)\n      }\n\n      window[callbackName] = originalCallback\n      if (responseData && $.isFunction(originalCallback))\n        originalCallback(responseData[0])\n\n      originalCallback = responseData = undefined\n    })\n\n    if (ajaxBeforeSend(xhr, options) === false) {\n      abort('abort')\n      return xhr\n    }\n\n    window[callbackName] = function(){\n      responseData = arguments\n    }\n\n    script.src = options.url.replace(/\\?(.+)=\\?/, '?$1=' + callbackName)\n    document.head.appendChild(script)\n\n    if (options.timeout > 0) abortTimeout = setTimeout(function(){\n      abort('timeout')\n    }, options.timeout)\n\n    return xhr\n  }\n\n  $.ajaxSettings = {\n    // Default type of request\n    type: 'GET',\n    // Callback that is executed before request\n    beforeSend: empty,\n    // Callback that is executed if the request succeeds\n    success: empty,\n    // Callback that is executed the the server drops error\n    error: empty,\n    // Callback that is executed on request complete (both: error and success)\n    complete: empty,\n    // The context for the callbacks\n    context: null,\n    // Whether to trigger \"global\" Ajax events\n    global: true,\n    // Transport\n    xhr: function () {\n      return new window.XMLHttpRequest()\n    },\n    // MIME types mapping\n    // IIS returns Javascript as \"application/x-javascript\"\n    accepts: {\n      script: 'text/javascript, application/javascript, application/x-javascript',\n      json:   jsonType,\n      xml:    'application/xml, text/xml',\n      html:   htmlType,\n      text:   'text/plain'\n    },\n    // Whether the request is to another domain\n    crossDomain: false,\n    // Default timeout\n    timeout: 0,\n    // Whether data should be serialized to string\n    processData: true,\n    // Whether the browser should be allowed to cache GET responses\n    cache: true,\n    //Used to handle the raw response data of XMLHttpRequest.\n    //This is a pre-filtering function to sanitize the response.\n    //The sanitized response should be returned\n    dataFilter: empty\n  }\n\n  function mimeToDataType(mime) {\n    if (mime) mime = mime.split(';', 2)[0]\n    return mime && ( mime == htmlType ? 'html' :\n      mime == jsonType ? 'json' :\n      scriptTypeRE.test(mime) ? 'script' :\n      xmlTypeRE.test(mime) && 'xml' ) || 'text'\n  }\n\n  function appendQuery(url, query) {\n    if (query == '') return url\n    return (url + '&' + query).replace(/[&?]{1,2}/, '?')\n  }\n\n  // serialize payload and append it to the URL for GET requests\n  function serializeData(options) {\n    if (options.processData && options.data && $.type(options.data) != \"string\")\n      options.data = $.param(options.data, options.traditional)\n    if (options.data && (!options.type || options.type.toUpperCase() == 'GET' || 'jsonp' == options.dataType))\n      options.url = appendQuery(options.url, options.data), options.data = undefined\n  }\n\n  $.ajax = function(options){\n    var settings = $.extend({}, options || {}),\n        deferred = $.Deferred && $.Deferred(),\n        urlAnchor, hashIndex\n    for (key in $.ajaxSettings) if (settings[key] === undefined) settings[key] = $.ajaxSettings[key]\n\n    ajaxStart(settings)\n\n    if (!settings.crossDomain) {\n      urlAnchor = document.createElement('a')\n      urlAnchor.href = settings.url\n      // cleans up URL for .href (IE only), see https://github.com/madrobby/zepto/pull/1049\n      urlAnchor.href = urlAnchor.href\n      settings.crossDomain = (originAnchor.protocol + '//' + originAnchor.host) !== (urlAnchor.protocol + '//' + urlAnchor.host)\n    }\n\n    if (!settings.url) settings.url = window.location.toString()\n    if ((hashIndex = settings.url.indexOf('#')) > -1) settings.url = settings.url.slice(0, hashIndex)\n    serializeData(settings)\n\n    var dataType = settings.dataType, hasPlaceholder = /\\?.+=\\?/.test(settings.url)\n    if (hasPlaceholder) dataType = 'jsonp'\n\n    if (settings.cache === false || (\n         (!options || options.cache !== true) &&\n         ('script' == dataType || 'jsonp' == dataType)\n        ))\n      settings.url = appendQuery(settings.url, '_=' + Date.now())\n\n    if ('jsonp' == dataType) {\n      if (!hasPlaceholder)\n        settings.url = appendQuery(settings.url,\n          settings.jsonp ? (settings.jsonp + '=?') : settings.jsonp === false ? '' : 'callback=?')\n      return $.ajaxJSONP(settings, deferred)\n    }\n\n    var mime = settings.accepts[dataType],\n        headers = { },\n        setHeader = function(name, value) { headers[name.toLowerCase()] = [name, value] },\n        protocol = /^([\\w-]+:)\\/\\//.test(settings.url) ? RegExp.$1 : window.location.protocol,\n        xhr = settings.xhr(),\n        nativeSetHeader = xhr.setRequestHeader,\n        abortTimeout\n\n    if (deferred) deferred.promise(xhr)\n\n    if (!settings.crossDomain) setHeader('X-Requested-With', 'XMLHttpRequest')\n    setHeader('Accept', mime || '*/*')\n    if (mime = settings.mimeType || mime) {\n      if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0]\n      xhr.overrideMimeType && xhr.overrideMimeType(mime)\n    }\n    if (settings.contentType || (settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET'))\n      setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded')\n\n    if (settings.headers) for (name in settings.headers) setHeader(name, settings.headers[name])\n    xhr.setRequestHeader = setHeader\n\n    xhr.onreadystatechange = function(){\n      if (xhr.readyState == 4) {\n        xhr.onreadystatechange = empty\n        clearTimeout(abortTimeout)\n        var result, error = false\n        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == 'file:')) {\n          dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'))\n\n          if (xhr.responseType == 'arraybuffer' || xhr.responseType == 'blob')\n            result = xhr.response\n          else {\n            result = xhr.responseText\n\n            try {\n              // http://perfectionkills.com/global-eval-what-are-the-options/\n              // sanitize response accordingly if data filter callback provided\n              result = ajaxDataFilter(result, dataType, settings)\n              if (dataType == 'script')    (1,eval)(result)\n              else if (dataType == 'xml')  result = xhr.responseXML\n              else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result)\n            } catch (e) { error = e }\n\n            if (error) return ajaxError(error, 'parsererror', xhr, settings, deferred)\n          }\n\n          ajaxSuccess(result, xhr, settings, deferred)\n        } else {\n          ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings, deferred)\n        }\n      }\n    }\n\n    if (ajaxBeforeSend(xhr, settings) === false) {\n      xhr.abort()\n      ajaxError(null, 'abort', xhr, settings, deferred)\n      return xhr\n    }\n\n    var async = 'async' in settings ? settings.async : true\n    xhr.open(settings.type, settings.url, async, settings.username, settings.password)\n\n    if (settings.xhrFields) for (name in settings.xhrFields) xhr[name] = settings.xhrFields[name]\n\n    for (name in headers) nativeSetHeader.apply(xhr, headers[name])\n\n    if (settings.timeout > 0) abortTimeout = setTimeout(function(){\n        xhr.onreadystatechange = empty\n        xhr.abort()\n        ajaxError(null, 'timeout', xhr, settings, deferred)\n      }, settings.timeout)\n\n    // avoid sending empty string (#319)\n    xhr.send(settings.data ? settings.data : null)\n    return xhr\n  }\n\n  // handle optional data/success arguments\n  function parseArguments(url, data, success, dataType) {\n    if ($.isFunction(data)) dataType = success, success = data, data = undefined\n    if (!$.isFunction(success)) dataType = success, success = undefined\n    return {\n      url: url\n    , data: data\n    , success: success\n    , dataType: dataType\n    }\n  }\n\n  $.get = function(/* url, data, success, dataType */){\n    return $.ajax(parseArguments.apply(null, arguments))\n  }\n\n  $.post = function(/* url, data, success, dataType */){\n    var options = parseArguments.apply(null, arguments)\n    options.type = 'POST'\n    return $.ajax(options)\n  }\n\n  $.getJSON = function(/* url, data, success */){\n    var options = parseArguments.apply(null, arguments)\n    options.dataType = 'json'\n    return $.ajax(options)\n  }\n\n  $.fn.load = function(url, data, success){\n    if (!this.length) return this\n    var self = this, parts = url.split(/\\s/), selector,\n        options = parseArguments(url, data, success),\n        callback = options.success\n    if (parts.length > 1) options.url = parts[0], selector = parts[1]\n    options.success = function(response){\n      self.html(selector ?\n        $('<div>').html(response.replace(rscript, \"\")).find(selector)\n        : response)\n      callback && callback.apply(self, arguments)\n    }\n    $.ajax(options)\n    return this\n  }\n\n  var escape = encodeURIComponent\n\n  function serialize(params, obj, traditional, scope){\n    var type, array = $.isArray(obj), hash = $.isPlainObject(obj)\n    $.each(obj, function(key, value) {\n      type = $.type(value)\n      if (scope) key = traditional ? scope :\n        scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']'\n      // handle data in serializeArray() format\n      if (!scope && array) params.add(value.name, value.value)\n      // recurse into nested objects\n      else if (type == \"array\" || (!traditional && type == \"object\"))\n        serialize(params, value, traditional, key)\n      else params.add(key, value)\n    })\n  }\n\n  $.param = function(obj, traditional){\n    var params = []\n    params.add = function(key, value) {\n      if ($.isFunction(value)) value = value()\n      if (value == null) value = \"\"\n      this.push(escape(key) + '=' + escape(value))\n    }\n    serialize(params, obj, traditional)\n    return params.join('&').replace(/%20/g, '+')\n  }\n})(Zepto)\n\n;(function($){\n  $.fn.serializeArray = function() {\n    var name, type, result = [],\n      add = function(value) {\n        if (value.forEach) return value.forEach(add)\n        result.push({ name: name, value: value })\n      }\n    if (this[0]) $.each(this[0].elements, function(_, field){\n      type = field.type, name = field.name\n      if (name && field.nodeName.toLowerCase() != 'fieldset' &&\n        !field.disabled && type != 'submit' && type != 'reset' && type != 'button' && type != 'file' &&\n        ((type != 'radio' && type != 'checkbox') || field.checked))\n          add($(field).val())\n    })\n    return result\n  }\n\n  $.fn.serialize = function(){\n    var result = []\n    this.serializeArray().forEach(function(elm){\n      result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value))\n    })\n    return result.join('&')\n  }\n\n  $.fn.submit = function(callback) {\n    if (0 in arguments) this.bind('submit', callback)\n    else if (this.length) {\n      var event = $.Event('submit')\n      this.eq(0).trigger(event)\n      if (!event.isDefaultPrevented()) this.get(0).submit()\n    }\n    return this\n  }\n\n})(Zepto)\n\n;(function(){\n  // getComputedStyle shouldn't freak out when called\n  // without a valid element as argument\n  try {\n    getComputedStyle(undefined)\n  } catch(e) {\n    var nativeGetComputedStyle = getComputedStyle\n    window.getComputedStyle = function(element, pseudoElement){\n      try {\n        return nativeGetComputedStyle(element, pseudoElement)\n      } catch(e) {\n        return null\n      }\n    }\n  }\n})()\n  return Zepto\n}))\n"
}, , 
150: function(module, exports, __webpack_require__) {
   var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
   /*!
    * Reqwest! A general purpose XHR connection manager
    * license MIT (c) Dustin Diaz 2015
    * https://github.com/ded/reqwest
    */
   !
   function(t, e, i) {
      void 0 !== module && module.exports ? module.exports = i() : (__WEBPACK_AMD_DEFINE_FACTORY__ = i, void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
   }(0, 0, function() {
      function succeed(t) {
         var e = protocolRe.exec(t.url);
         return e = e && e[1] || context.location.protocol, httpsRe.test(e) ? twoHundo.test(t.request.status) : !! t.request.response
      }

      function handleReadyState(t, e, i) {
         return function() {
            return t._aborted ? i(t.request) : t._timedOut ? i(t.request, "Request is aborted: timeout") : void(t.request && 4 == t.request[readyState] && (t.request.onreadystatechange = noop, succeed(t) ? e(t.request) : i(t.request)))
         }
      }

      function setHeaders(t, e) {
         var i, n = e.headers || {};
         n.Accept = n.Accept || defaultHeaders.accept[e.type] || defaultHeaders.accept["*"];
         var s = "undefined" != typeof FormData && e.data instanceof FormData;
         e.crossOrigin || n[requestedWith] || (n[requestedWith] = defaultHeaders.requestedWith), n[contentType] || s || (n[contentType] = e.contentType || defaultHeaders.contentType);
         for (i in n) n.hasOwnProperty(i) && "setRequestHeader" in t && t.setRequestHeader(i, n[i])
      }

      function setCredentials(t, e) {
         void 0 !== e.withCredentials && void 0 !== t.withCredentials && (t.withCredentials = !! e.withCredentials)
      }

      function generalCallback(t) {
         lastValue = t
      }

      function urlappend(t, e) {
         return t + (/\?/.test(t) ? "&" : "?") + e
      }

      function handleJsonp(t, e, i, n) {
         var s = uniqid++,
            r = t.jsonpCallback || "callback",
            a = t.jsonpCallbackName || reqwest.getcallbackPrefix(s),
            o = new RegExp("((^|\\?|&)" + r + ")=([^&]+)"),
            l = n.match(o),
            h = doc.createElement("script"),
            c = 0,
            u = -1 !== navigator.userAgent.indexOf("MSIE 10.0");
         return l ? "?" === l[3] ? n = n.replace(o, "$1=" + a) : a = l[3] : n = urlappend(n, r + "=" + a), context[a] = generalCallback, h.type = "text/javascript", h.src = n, h.async = !0, void 0 === h.onreadystatechange || u || (h.htmlFor = h.id = "_reqwest_" + s), h.onload = h.onreadystatechange = function() {
            if (h[readyState] && "complete" !== h[readyState] && "loaded" !== h[readyState] || c) return !1;
            h.onload = h.onreadystatechange = null, h.onclick && h.onclick(), e(lastValue), lastValue = void 0, head.removeChild(h), c = 1
         }, head.appendChild(h), {
            abort: function() {
               h.onload = h.onreadystatechange = null, i({}, "Request is aborted: timeout", {}), lastValue = void 0, head.removeChild(h), c = 1
            }
         }
      }

      function getRequest(t, e) {
         var i, n = this.o,
            s = (n.method || "GET").toUpperCase(),
            r = "string" == typeof n ? n : n.url,
            a = !1 !== n.processData && n.data && "string" != typeof n.data ? reqwest.toQueryString(n.data) : n.data || null,
            o = !1;
         return "jsonp" != n.type && "GET" != s || !a || (r = urlappend(r, a), a = null), "jsonp" == n.type ? handleJsonp(n, t, e, r) : (i = n.xhr && n.xhr(n) || xhr(n), i.open(s, r, !1 !== n.async), setHeaders(i, n), setCredentials(i, n), context[xDomainRequest] && i instanceof context[xDomainRequest] ? (i.onload = t, i.onerror = e, i.onprogress = function() {}, o = !0) : i.onreadystatechange = handleReadyState(this, t, e), n.before && n.before(i), o ? setTimeout(function() {
            i.send(a)
         }, 200) : i.send(a), i)
      }

      function Reqwest(t, e) {
         this.o = t, this.fn = e, init.apply(this, arguments)
      }

      function setType(t) {
         if (null !== t) return t.match("json") ? "json" : t.match("javascript") ? "js" : t.match("text") ? "html" : t.match("xml") ? "xml" : void 0
      }

      function init(o, fn) {
         function complete(t) {
            for (o.timeout && clearTimeout(self.timeout), self.timeout = null; self._completeHandlers.length > 0;) self._completeHandlers.shift()(t)
         }

         function success(resp) {
            var type = o.type || resp && setType(resp.getResponseHeader("Content-Type"));
            resp = "jsonp" !== type ? self.request : resp;
            var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type),
               r = filteredResponse;
            try {
               resp.responseText = r
            } catch (t) {}
            if (r) switch (type) {
            case "json":
               try {
                  resp = context.JSON ? context.JSON.parse(r) : eval("(" + r + ")")
               } catch (t) {
                  return error(resp, "Could not parse JSON in response", t)
               }
               break;
            case "js":
               resp = eval(r);
               break;
            case "html":
               resp = r;
               break;
            case "xml":
               resp = resp.responseXML && resp.responseXML.parseError && resp.responseXML.parseError.errorCode && resp.responseXML.parseError.reason ? null : resp.responseXML
            }
            for (self._responseArgs.resp = resp, self._fulfilled = !0, fn(resp), self._successHandler(resp); self._fulfillmentHandlers.length > 0;) resp = self._fulfillmentHandlers.shift()(resp);
            complete(resp)
         }

         function timedOut() {
            self._timedOut = !0, self.request.abort()
         }

         function error(t, e, i) {
            for (t = self.request, self._responseArgs.resp = t, self._responseArgs.msg = e, self._responseArgs.t = i, self._erred = !0; self._errorHandlers.length > 0;) self._errorHandlers.shift()(t, e, i);
            complete(t)
         }
         this.url = "string" == typeof o ? o : o.url, this.timeout = null, this._fulfilled = !1, this._successHandler = function() {}, this._fulfillmentHandlers = [], this._errorHandlers = [], this._completeHandlers = [], this._erred = !1, this._responseArgs = {};
         var self = this;
         fn = fn ||
         function() {}, o.timeout && (this.timeout = setTimeout(function() {
            timedOut()
         }, o.timeout)), o.success && (this._successHandler = function() {
            o.success.apply(o, arguments)
         }), o.error && this._errorHandlers.push(function() {
            o.error.apply(o, arguments)
         }), o.complete && this._completeHandlers.push(function() {
            o.complete.apply(o, arguments)
         }), this.request = getRequest.call(this, success, error)
      }

      function reqwest(t, e) {
         return new Reqwest(t, e)
      }

      function normalize(t) {
         return t ? t.replace(/\r?\n/g, "\r\n") : ""
      }

      function serial(t, e) {
         var i, n, s, r, a = t.name,
            o = t.tagName.toLowerCase(),
            l = function(t) {
               t && !t.disabled && e(a, normalize(t.attributes.value && t.attributes.value.specified ? t.value : t.text))
            };
         if (!t.disabled && a) switch (o) {
         case "input":
            /reset|button|image|file/i.test(t.type) || (i = /checkbox/i.test(t.type), n = /radio/i.test(t.type), s = t.value, (!(i || n) || t.checked) && e(a, normalize(i && "" === s ? "on" : s)));
            break;
         case "textarea":
            e(a, normalize(t.value));
            break;
         case "select":
            if ("select-one" === t.type.toLowerCase()) l(t.selectedIndex >= 0 ? t.options[t.selectedIndex] : null);
            else for (r = 0; t.length && r < t.length; r++) t.options[r].selected && l(t.options[r])
         }
      }

      function eachFormElement() {
         var t, e, i = this;
         for (e = 0; e < arguments.length; e++) t = arguments[e], /input|select|textarea/i.test(t.tagName) && serial(t, i), function(t, e) {
            var n, s, r;
            for (n = 0; n < e.length; n++) for (r = t[byTag](e[n]), s = 0; s < r.length; s++) serial(r[s], i)
         }(t, ["input", "select", "textarea"])
      }

      function serializeQueryString() {
         return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments))
      }

      function serializeHash() {
         var t = {};
         return eachFormElement.apply(function(e, i) {
            e in t ? (t[e] && !isArray(t[e]) && (t[e] = [t[e]]), t[e].push(i)) : t[e] = i
         }, arguments), t
      }

      function buildParams(t, e, i, n) {
         var s, r, a, o = /\[\]$/;
         if (isArray(e)) for (r = 0; e && r < e.length; r++) a = e[r], i || o.test(t) ? n(t, a) : buildParams(t + "[" + ("object" == typeof a ? r : "") + "]", a, i, n);
         else if (e && "[object Object]" === e.toString()) for (s in e) buildParams(t + "[" + s + "]", e[s], i, n);
         else n(t, e)
      }
      var context = this;
      if ("window" in context) var doc = document,
         byTag = "getElementsByTagName",
         head = doc[byTag]("head")[0];
      else {
         var XHR2;
         try {
            XHR2 = __webpack_require__(151)
         } catch (t) {
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
         isArray = "function" == typeof Array.isArray ? Array.isArray : function(t) {
            return t instanceof Array
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
         xhr = function(t) {
            if (!0 === t.crossOrigin) {
               var e = context[xmlHttpRequest] ? new XMLHttpRequest : null;
               if (e && "withCredentials" in e) return e;
               if (context[xDomainRequest]) return new XDomainRequest;
               throw new Error("Browser does not support cross-origin requests")
            }
            return context[xmlHttpRequest] ? new XMLHttpRequest : XHR2 ? new XHR2 : new ActiveXObject("Microsoft.XMLHTTP")
         },
         globalSetupOptions = {
            dataFilter: function(t) {
               return t
            }
         };
      return Reqwest.prototype = {
         abort: function() {
            this._aborted = !0, this.request.abort()
         },
         retry: function() {
            init.call(this, this.o, this.fn)
         },
         then: function(t, e) {
            return t = t ||
            function() {}, e = e ||
            function() {}, this._fulfilled ? this._responseArgs.resp = t(this._responseArgs.resp) : this._erred ? e(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : (this._fulfillmentHandlers.push(t), this._errorHandlers.push(e)), this
         },
         always: function(t) {
            return this._fulfilled || this._erred ? t(this._responseArgs.resp) : this._completeHandlers.push(t), this
         },
         fail: function(t) {
            return this._erred ? t(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : this._errorHandlers.push(t), this
         },
         catch: function(t) {
            return this.fail(t)
         }
      }, reqwest.serializeArray = function() {
         var t = [];
         return eachFormElement.apply(function(e, i) {
            t.push({
               name: e,
               value: i
            })
         }, arguments), t
      }, reqwest.serialize = function() {
         if (0 === arguments.length) return "";
         var t, e, i = Array.prototype.slice.call(arguments, 0);
         return t = i.pop(), t && t.nodeType && i.push(t) && (t = null), t && (t = t.type), e = "map" == t ? serializeHash : "array" == t ? reqwest.serializeArray : serializeQueryString, e.apply(null, i)
      }, reqwest.toQueryString = function(t, e) {
         var i, n, s = e || !1,
            r = [],
            a = encodeURIComponent,
            o = function(t, e) {
               e = "function" == typeof e ? e() : null == e ? "" : e, r[r.length] = a(t) + "=" + a(e)
            };
         if (isArray(t)) for (n = 0; t && n < t.length; n++) o(t[n].name, t[n].value);
         else for (i in t) t.hasOwnProperty(i) && buildParams(i, t[i], s, o);
         return r.join("&").replace(/%20/g, "+")
      }, reqwest.getcallbackPrefix = function() {
         return callbackPrefix
      }, reqwest.compat = function(t, e) {
         return t && (t.type && (t.method = t.type) && delete t.type, t.dataType && (t.type = t.dataType), t.jsonpCallback && (t.jsonpCallbackName = t.jsonpCallback) && delete t.jsonpCallback, t.jsonp && (t.jsonpCallback = t.jsonp)), new Reqwest(t, e)
      }, reqwest.ajaxSetup = function(t) {
         t = t || {};
         for (var e in t) globalSetupOptions[e] = t[e]
      }, reqwest
   })
}, 
151: function(t, e) {}, 
152: function(t, e, i) {
   "use strict";
   Object.defineProperty(e, "__esModule", {
      value: !0
   });
   var n = i(422),
      s = function(t) {
         return t && t.__esModule ? t : {
         default:
            t
         }
      }(n),
      r = {};
   r.init = function() {
      r.bgm = new s.
   default ({
         src: i(846),
         loop: !0
      }), r.rain = new s.
   default ({
         src: i(847),
         loop: !1
      }), r.gudu = new s.
   default ({
         src: i(848),
         loop: !1
      }), r.xintiao = new s.
   default ({
         src: i(849),
         loop: !1
      })
   }, e.
default = r
}, , , , , , , , , , , , , , , , , , , , , , , , , , , 
179: function(t, e, i) {
   "use strict";

   function n(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
   }
   t.exports = function(t, e, i, r) {
      e = e || "&", i = i || "=";
      var a = {};
      if ("string" != typeof t || 0 === t.length) return a;
      var o = /\+/g;
      t = t.split(e);
      var l = 1e3;
      r && "number" == typeof r.maxKeys && (l = r.maxKeys);
      var h = t.length;
      l > 0 && h > l && (h = l);
      for (var c = 0; c < h; ++c) {
         var u, d, p, f, m = t[c].replace(o, "%20"),
            g = m.indexOf(i);
         g >= 0 ? (u = m.substr(0, g), d = m.substr(g + 1)) : (u = m, d = ""), p = decodeURIComponent(u), f = decodeURIComponent(d), n(a, p) ? s(a[p]) ? a[p].push(f) : a[p] = [a[p], f] : a[p] = f
      }
      return a
   };
   var s = Array.isArray ||
   function(t) {
      return "[object Array]" === Object.prototype.toString.call(t)
   }
}, 
180: function(t, e, i) {
   "use strict";

   function n(t, e) {
      if (t.map) return t.map(e);
      for (var i = [], n = 0; n < t.length; n++) i.push(e(t[n], n));
      return i
   }
   var s = function(t) {
         switch (typeof t) {
         case "string":
            return t;
         case "boolean":
            return t ? "true" : "false";
         case "number":
            return isFinite(t) ? t : "";
         default:
            return ""
         }
      };
   t.exports = function(t, e, i, o) {
      return e = e || "&", i = i || "=", null === t && (t = void 0), "object" == typeof t ? n(a(t), function(a) {
         var o = encodeURIComponent(s(a)) + i;
         return r(t[a]) ? n(t[a], function(t) {
            return o + encodeURIComponent(s(t))
         }).join(e) : o + encodeURIComponent(s(t[a]))
      }).join(e) : o ? encodeURIComponent(s(o)) + i + encodeURIComponent(s(t)) : ""
   };
   var r = Array.isArray ||
   function(t) {
      return "[object Array]" === Object.prototype.toString.call(t)
   }, a = Object.keys ||
   function(t) {
      var e = [];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.push(i);
      return e
   }
}, , , , 
184: function(t, e, i) {
   "use strict";

   function n(t) {
      return t && t.__esModule ? t : {
      default:
         t
      }
   }

   function s(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
   }
   Object.defineProperty(e, "__esModule", {
      value: !0
   }), e.CanvasBg = void 0;
   var r = function() {
         function t(t, e) {
            for (var i = 0; i < e.length; i++) {
               var n = e[i];
               n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
         }
         return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e
         }
      }(),
      a = i(14),
      o = n(a),
      l = i(78),
      h = n(l),
      c = i(395),
      u = n(c),
      d = i(13),
      p = i(23),
      f = n(p),
      m = h.
   default.dpr,
      g = e.CanvasBg = function() {
         function t() {
            if (s(this, t), t.instance) return t.instance;
            t.instance = this;
            var e = window.innerWidth,
               i = window.innerHeight;
            this.camera = new THREE.PerspectiveCamera(90, e / i, .01, 1e3), this.renderer = new THREE.WebGLRenderer({
               alpha: !0,
               antialias: !0
            }), this.renderer.setSize(e, i), this.renderer.setPixelRatio(m), this.initScene(), this.animate = this.animate.bind(this), this.animateDistort = this.animateDistort.bind(this), this.resize = this.resize.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this), this.addPostEffect(), this.addEvent(), (0, o.
         default)("#j-view-back").append(this.renderer.domElement)
         }
         return r(t, [{
            key: "el",
            value: function() {
               return this.renderer.domElement
            }
         }, {
            key: "initScene",
            value: function() {
               window.innerWidth, window.innerHeight;
               this.scene = new THREE.Scene, this.scene.background = new THREE.Color(2499121);
               var t = (new THREE.TextureLoader).load(i(784));
               THREE.ImageUtils.crossOrigin = "", t.wrapS = THREE.RepeatWrapping, t.wrapT = THREE.MirroredRepeatWrapping, this.scene.background = t, this.initParticles()
            }
         }, {
            key: "initParticles",
            value: function() {
               var t = window.innerWidth,
                  e = window.innerHeight;
               this.points = [];
               var i, n, s, r, a, o, l, h;
               for (i = 0; i < 3; ++i) {
                  for (o = new THREE.PointsMaterial({
                     color: 15856371,
                     size: 2,
                     transparent: !0,
                     opacity: 1
                  }), l = new THREE.Geometry, n = 0; n < 80; ++n) s = (Math.random() * t << 1) - t, r = (Math.random() * e << 1) - e, a = 400 * Math.random(), l.vertices.push(new THREE.Vector3(s, r, a));
                  h = new THREE.Points(l, o), this.scene.add(h), this.points.push(h), h.position.x = t * i
               }
               for (o = new THREE.PointsMaterial({
                  color: 15856371,
                  size: 2,
                  transparent: !0,
                  opacity: .7
               }), l = new THREE.Geometry, n = 0; n < 150; ++n) s = (Math.random() * t << 1) - t, r = (Math.random() * e << 1) - e, a = 450, l.vertices.push(new THREE.Vector3(s, r, a));
               h = new THREE.Points(l, o), this.scene.add(h), this.points.push(h), h.position.x = t, this.bigPoints = h
            }
         }, {
            key: "transCamera",
            value: function() {
               var t = {
                  z: 400,
                  o: 1
               },
                  e = this;
               return new Promise(function(i) {
                  d.TweenMax.to(t, 5, {
                     z: 700,
                     o: .5,
                     onUpdate: function() {
                        e.camera.position.z = t.z, e.points[0].material.opacity = t.o, e.points[1].material.opacity = t.o, e.points[2].material.opacity = t.o
                     },
                     onComplete: function() {
                        e.isMoveLeft = !0, i()
                     },
                     ease: d.Power2.easeInOut
                  })
               })
            }
         }, {
            key: "addEvent",
            value: function() {
               (0, o.
            default)(window).on("resize", this.resize), this.isDisablePostEffect() || ((0, o.
            default)(window).on("touchstart mousedown", this.onTouchStart), (0, o.
            default)(window).on("touchstart touchmove mousemove", this.onTouchMove), (0, o.
            default)(window).on("touchend mouseup", this.onTouchEnd))
            }
         }, {
            key: "removeEvent",
            value: function() {
               (0, o.
            default)(window).off("resize", this.resize), this.isDisablePostEffect() || ((0, o.
            default)(window).off("touchstart mousedown", this.onTouchStart), (0, o.
            default)(window).off("touchstart touchmove mousemove", this.onTouchMove), (0, o.
            default)(window).off("touchend mouseup", this.onTouchEnd))
            }
         }, {
            key: "animateDistort",
            value: function() {
               this.disdortTimer && cancelAnimationFrame(this.disdortTimer), this.disdortTimer = requestAnimationFrame(this.animateDistort), this.distortPass.uniforms.u_time.value = ++this.distortPass.time / 100, this.distortPass.targetAmp += .2, this.distortPass.targetAmp = Math.min(.8, this.distortPass.targetAmp)
            }
         }, {
            key: "onTouchStart",
            value: function() {
               this.animateDistort()
            }
         }, {
            key: "onTouchMove",
            value: function(t) {
               var e = window.innerWidth,
                  i = window.innerHeight;
               t.touches && t.touches.length > 0 ? this.distortPass.uniforms.u_mouse.value.set(t.touches[0].pageX / e, 1 - t.touches[0].pageY / i) : this.distortPass.uniforms.u_mouse.value.set(t.pageX / e, 1 - t.pageY / i)
            }
         }, {
            key: "onTouchEnd",
            value: function() {
               this.disdortTimer = cancelAnimationFrame(this.disdortTimer), this.distortPass.targetAmp = 0
            }
         }, {
            key: "addPostEffect",
            value: function() {
               var t = this;
               if (!this.isDisablePostEffect()) {
                  var e = window.innerWidth,
                     i = window.innerHeight;
                  this.composer = new THREE.EffectComposer(this.renderer), this.composer.addPass(new THREE.RenderPass(this.scene, this.camera)), this.composer.setSize(e * m, i * m), this.distortPass = new u.
               default, this.distortPass.renderToScreen = !0, this.distortPass.uniforms.u_aspect.value = i / e, this.composer.addPass(this.distortPass), this.distortInterval = setInterval(function() {
                     t.distortPass.updateUniforms()
                  }, 1e3 / 24)
               }
            }
         }, {
            key: "isDisablePostEffect",
            value: function() {
               return !f.
            default.isIos() || 812 == screen.height
            }
         }, {
            key: "animate",
            value: function() {
               this.animateId = requestAnimationFrame(this.animate);
               var t = 1.5 * window.innerWidth,
                  e = 1.5 * window.innerHeight;
               this.points && (this.isMoveLeft ? (this.points[0].position.x -= 1, this.points[1].position.x -= 1, this.bigPoints.position.x -= .15, this.points[0].position.x < -t && (this.points[0].position.x = t), this.points[1].position.x < -t && (this.points[1].position.x = t), this.bigPoints.position.x < -t && (this.bigPoints.position.x = t)) : this.isMoveDown && (this.points[0].position.y -= 1, this.points[1].position.y -= 1, this.points[2].position.y -= 1, this.points[0].position.y < -e && (this.points[0].position.y = e), this.points[1].position.y < -e && (this.points[1].position.y = e), this.points[2].position.y < -e && (this.points[2].position.y = e))), this.composer ? this.composer.render() : this.renderer.render(this.scene, this.camera)
            }
         }, {
            key: "moveDown",
            value: function() {
               this.isMoveLeft = !1, this.isMoveDown = !0, this.points[2].position.y = window.innerHeight, this.points[2].position.x = 0
            }
         }, {
            key: "fadeOutBig",
            value: function() {
               var t = {
                  o: .7
               },
                  e = this.bigPoints;
               d.TweenMax.to(t, 1, {
                  o: 0,
                  onUpdate: function() {
                     e.material.opacity = t.o
                  }
               })
            }
         }, {
            key: "fadeInBig",
            value: function() {
               var t = {
                  o: 0
               },
                  e = this.bigPoints;
               d.TweenMax.to(t, 1, {
                  o: .7,
                  onUpdate: function() {
                     e.material.opacity = t.o
                  }
               })
            }
         }, {
            key: "transitionOut",
            value: function() {
               var t = this;
               this.points && (this.points.forEach(function(e) {
                  e.geometry.dispose(), e.material.dispose(), t.scene.remove(e)
               }), this.points = null)
            }
         }, {
            key: "dispose",
            value: function() {
               this.removeEvent(), this.animateId = cancelAnimationFrame(this.animateId), this.distortInterval = clearInterval(this.distortInterval), this.disdortTimer = cancelAnimationFrame(this.disdortTimer), this.renderer.dispose()
            }
         }, {
            key: "resize",
            value: function() {
               var t = window.innerWidth,
                  e = window.innerHeight;
               this.composer ? this.composer.setSize(t * m, e * m) : this.renderer.setSize(t * m, e * m)
            }
         }]), t
      }();
   g.instance = null, e.
default = new g
}, , , , , , , , , , , , , , , , , , , , , 
205: function(t, e, i) {
   "use strict";

   function n(t) {
      return t && t.__esModule ? t : {
      default:
         t
      }
   }
   var s = i(14),
      r = n(s),
      a = i(184),
      o = n(a),
      l = i(206),
      h = i(420);
   n(h);
   !
   function() {
      var t = window.game = {
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
            this.asset = new t.Asset, this.asset.on("complete", function(t) {
               this.asset.off("complete"), this.initStage()
            }.bind(this)), this.asset.load()
         },
         initStage: function() {
            this.width = 750, this.height = 1334, this.stage = new Hilo.Stage({
               renderType: "canvas",
               width: this.width,
               height: this.height,
               scaleX: this.scaleX,
               scaleY: this.scaleY
            }), this.scale(), this.ticker = new Hilo.Ticker(60), this.ticker.addTick(Hilo.Tween), this.ticker.addTick(this.stage), this.ticker.start(!0), this.stage.onUpdate = this.onUpdate.bind(this);
            var t = this;
            t.initGuide().then(function() {
               t.initMan(), t.gameReady(), t.initScene(1, 2)
            }), o.
         default.transCamera(), o.
         default.animate(), (0, r.
         default)("#j-view-game").append(this.stage.canvas), (0, r.
         default)(window).on("resize", function() {
               this.scale(), this.stage.resize(this.width, this.height, !0)
            }.bind(this)), (0, r.
         default)(window).on("touchstart", this.onUserStart.bind(this)), (0, r.
         default)(window).on("touchend", this.onUserEnd.bind(this))
         },
         scale: function() {
            this.scaleX = window.innerWidth / this.width, this.scaleY = this.scaleX, this.stage.scaleX = this.scaleX, this.stage.scaleY = this.scaleY
         },
         initGuide: function() {
            return this.guide = new l.Guide, this.stage.addChild(this.guide), this.guide.showIntro()
         },
         initScene: function(e, i) {
            var n = "s" + e,
               s = "s" + i;
            this[n] = new t["S" + e]({
               id: "s" + e
            }).addTo(this.stage), this[s] = new t["S" + i]({
               id: "s" + i,
               startX: this[n].width
            }).addTo(this.stage), this.sceneSet.push(this[n], this[s]), this.sceneOrder = i
         },
         initMan: function() {
            this.man = new t.Man({
               id: "me",
               startX: 110,
               startY: 270
            }).addTo(this.stage, 1), this.man.getReady(), this.MIDDLE_SCENE = this.width >> 1
         },
         gameReady: function() {
            this.firstTime = 0, this.isReady = !0
         },
         recoverGameRecord: function() {
            var t = this.sceneSet[0],
               e = this.sceneSet[1],
               i = !1;
            i = t.onRecoverCurrent(t, e), e.onRecoverNext(t, e), this.man.isDead = !i, this.man.isDead || this.man.blink()
         },
         onUserStart: function(t) {
            this.oldTime = +new Date, this.tagTimeout = setTimeout(function() {
               ++this.countLongPress, this.man.longPress()
            }.bind(this), 200)
         },
         onUserEnd: function() {
            return clearTimeout(this.tagTimeout), this.man.isMovingX = !1, this.man.isLongPress = !1, this.newTime = +new Date, this.newTime - this.oldTime < 200 && (this.man.shortTouch(this.oldTime), this.sceneSet[0] && this.sceneSet[0].checkAudio(), this.sceneSet[1] && this.sceneSet[1].checkAudio()), this.oldTime = this.newTime, !1
         },
         getCurrentScene: function() {
            if (this.sceneSet) {
               var t = this.sceneSet[0],
                  e = this.sceneSet[1],
                  i = this.man.x;
               return t && e && (this.currentScene = i >= t.x && i < t.x + t.width ? t.id : e.id), this.currentScene
            }
         },
         shift: function() {
            var t = this.sceneSet;
            if (t && !(t.length < 2)) {
               var e = t[0];
               e.dispose(), this.stage.removeChildById(e.id), t.splice(0, 1), ++this.sceneOrder, this[e.id] = null
            }
         },
         clearScene: function() {
            var t = this.sceneSet;
            if (t && !(t.length < 2) && (!t[1] || "s11" != t[1].id)) for (var e, i = 1; i <= 11; i++) e = "s" + i, this[e] && this[e].x <= -this[e].width && (this[e].dispose(), this.stage.removeChildById(e), t.splice(0, 1), this.sceneOrder++, this[e] = null)
         },
         updateScene: function() {
            var e = this.sceneSet;
            !e || e.length >= 2 || void 0 !== t["S" + this.sceneOrder] && (this["s" + this.sceneOrder] = new t["S" + this.sceneOrder]({
               id: "s" + this.sceneOrder,
               startX: e[0].x + e[0].width
            }).addTo(this.stage), this.sceneSet.push(this["s" + this.sceneOrder]))
         },
         onUpdate: function(t) {
            this.isReady && (this.man.isDead && this.recoverGameRecord(), this.getCurrentScene(), this.clearScene(), this.updateScene())
         }
      }
   }()
}, 
206: function(t, e, i) {
   "use strict";

   function n(t) {
      return t && t.__esModule ? t : {
      default:
         t
      }
   }
   Object.defineProperty(e, "__esModule", {
      value: !0
   }), e.Guide = e.MovingSign = void 0;
   var s = i(78),
      r = (n(s), i(60)),
      a = (n(r), i(13)),
      o = Hilo.Class.create({
         Extends: Hilo.Container,
         constructor: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            o.superclass.constructor.call(this, t), this.guide_move_static = new Hilo.Bitmap({
               x: 0,
               y: 0,
               image: game.asset.guide_move_static
            }), this.guide_move_mask = new Hilo.View({
               x: this.guide_move_static.x - 30,
               y: this.guide_move_static.y + 14,
               width: t.width || 0,
               height: 5,
               background: "#262231"
            }), this.addChild(this.guide_move_static), this.addChild(this.guide_move_mask)
         },
         updateWidth: function(t) {
            var e = game.man.x + game.man.manLeft.width - (t + this.x - 37);
            e >= this.guide_move_static.width - 70 ? this.visible = !1 : this.guide_move_mask.width = e
         }
      }),
      l = {
         BOTH: 0,
         CLICK: 1,
         PRESS: 2
      },
      h = Hilo.Class.create({
         Extends: Hilo.Container,
         constructor: function() {
            h.superclass.constructor.call(this);
            var t = game.NOTICE_Y = 100;
            this.guide_blink = new Hilo.Sprite({
               y: t,
               frames: game.asset.guide_blink.getSprite("xxx"),
               paused: !0,
               loop: !1,
               interval: 2
            }), this.guide_blink.x = game.width - this.guide_blink.width >> 1, this.guide_both = new Hilo.Sprite({
               y: t,
               frames: game.asset.guide.getFrame(0),
               alpha: 0
            }), this.guide_both.x = game.width - this.guide_both.width >> 1, this.guide_click = new Hilo.Sprite({
               y: t,
               frames: game.asset.guide.getFrame(1),
               alpha: 0,
               paused: !0,
               loop: !1
            }), this.guide_click.x = game.width - this.guide_click.width >> 1, this.guide_press = new Hilo.Sprite({
               y: t,
               frames: game.asset.guide.getFrame(2),
               alpha: 0,
               paused: !0,
               loop: !1
            }), this.guide_press.x = game.width - this.guide_press.width >> 1, this.guide_both_new = new Hilo.Sprite({
               y: t,
               frames: game.asset.guide_new.getFrame(0),
               alpha: 0
            }), this.guide_both_new.x = game.width - this.guide_both_new.width >> 1, this.guide_click_new = new Hilo.Sprite({
               y: t,
               frames: game.asset.guide_new.getFrame(1),
               alpha: 0
            }), this.guide_click_new.x = game.width - this.guide_click_new.width >> 1, this.guide_press_new = new Hilo.Sprite({
               y: t,
               frames: game.asset.guide_new.getFrame(2),
               alpha: 0
            }), this.guide_press_new.x = game.width - this.guide_press_new.width >> 1, this.addChild(this.guide_both_new), this.addChild(this.guide_click_new), this.addChild(this.guide_press_new), this.intro = new Hilo.Bitmap({
               image: game.asset.intro
            }), this.intro.x = game.width - this.intro.width >> 1, this.intro.y = game.height - this.intro.height - 300 >> 1, this.fullOpacity = 1, this.addChild(this.guide_both), this.addChild(this.guide_click), this.addChild(this.guide_press)
         },
         setFullOpacity: function(t) {
            this.fullOpacity = t || 1
         },
         switchToClick: function() {
            this.currentGuide != l.CLICK && (this.currentGuide = l.CLICK, this.guide_both.alpha = 0, this.guide_press.alpha = 0, this.guide_click.alpha = this.fullOpacity)
         },
         switchToPress: function() {
            this.currentGuide != l.PRESS && (this.currentGuide = l.PRESS, this.guide_both.alpha = 0, this.guide_click.alpha = 0, this.guide_press.alpha = this.fullOpacity)
         },
         switchToBoth: function(t) {
            (this.currentGuide != l.BOTH || t) && (this.currentGuide = l.BOTH, a.TweenMax.to([this.guide_press, this.guide_click], .2, {
               alpha: 0
            }), a.TweenMax.to(this.guide_both, .5, {
               alpha: this.fullOpacity,
               delay: 0
            }))
         },
         fadeOut: function() {
            this.currentGuide = null, a.TweenMax.to([this.guide_both, this.guide_press, this.guide_click], .3, {
               alpha: 0
            })
         },
         dispose: function() {
            this.removeChild(this.guide_blink), this.removeChild(this.guide_both), this.removeChild(this.guide_click), this.removeChild(this.guide_press)
         },
         blink: function() {
            var t = this;
            this.addChild(this.guide_blink), this.guide_blink.play(), a.TweenMax.to(this.guide_blink, .3, {
               alpha: 0,
               delay: .2,
               onComplete: function() {
                  t.switchToPress()
               }
            })
         },
         zoom: function(t) {
            if (!(this.isTag0 && 0 === t || this.isTag1 && 1 === t)) {
               var e = null;
               0 === t ? (this.toggle2Press(), e = this.guide_press_new, this.isTag0 = !0) : (this.toggle2Click(), e = this.guide_click_new, this.isTag1 = !0), this.zoomtl = new a.TimelineMax({
                  repeat: 1,
                  yoyo: !0
               }), this.zoomtl.to(e, .3, {
                  scaleX: 1.02,
                  scaleY: 1.02
               }).to(e, .3, {
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
            this.currentGuide != l.CLICK && (this.currentGuide = l.CLICK, this.guide_both_new.alpha = 0, this.guide_press_new.alpha = 0, this.guide_click_new.alpha = this.fullOpacity)
         },
         toggle2Press: function() {
            this.currentGuide != l.PRESS && (this.currentGuide = l.PRESS, this.guide_both_new.alpha = 0, this.guide_click_new.alpha = 0, this.guide_press_new.alpha = this.fullOpacity)
         },
         toggle2Both: function(t) {
            (this.currentGuide != l.BOTH || t) && (this.currentGuide = l.BOTH, a.TweenMax.to([this.guide_press_new, this.guide_click_new], .2, {
               alpha: 0
            }), a.TweenMax.to(this.guide_both_new, .5, {
               alpha: this.fullOpacity,
               delay: 0
            }))
         },
         removeNewGuide: function() {
            this.removeChild(this.guide_press_new), this.removeChild(this.guide_both_new), this.removeChild(this.guide_click_new)
         },
         showIntro: function() {
            this.addChild(this.intro);
            var t = {
               y: this.intro.y
            },
               e = this;
            return new Promise(function(i) {
               a.TweenMax.to(t, 1, {
                  y: 450,
                  delay: 4,
                  onStart: i,
                  onUpdate: function() {
                     e.intro.y = t.y
                  },
                  onComplete: function() {}
               })
            })
         },
         hideIntro: function() {
            this.isHideIntro || (this.isHideIntro = !0, this.removeChild(this.intro))
         }
      });
   e.MovingSign = o, e.Guide = h
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
304: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/text-xianshi-2.png?942b1677d6c117225774de2127fd4e13"
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
336: function(t, e, i) {
   "use strict";
   i(205), i(402), i(404), i(405), i(408), i(409), i(410), i(411), i(412), i(413), i(414), i(415), i(406), i(407)
}, 
337: function(t, e, i) {
   "use strict";

   function n(t) {
      return t && t.__esModule ? t : {
      default:
         t
      }
   }

   function s(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
   }
   Object.defineProperty(e, "__esModule", {
      value: !0
   });
   var r = function() {
         function t(t, e) {
            for (var i = 0; i < e.length; i++) {
               var n = e[i];
               n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
         }
         return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e
         }
      }(),
      a = i(29),
      o = n(a),
      l = i(51),
      h = n(l),
      c = i(23),
      u = n(c),
      d = i(110),
      p = n(d),
      f = i(86),
      m = n(f),
      g = i(58),
      v = n(g);
   window.api = window.api || {};
   var _ = function() {
         function t(e) {
            s(this, t), e && (this.config = e, this.updateShareData = this.updateShareData.bind(this), u.
         default.isInNEMapp() && this.registMusicShare(), v.
         default.isWeChat() && this.registWeiXinShare())
         }
         return r(t, [{
            key: "registMusicShare",
            value: function() {
               setTimeout(function() {
                  location.href = "orpheus://settopbutton?" + m.
               default.stringify({
                     title: "åˆ†äº«",
                     icon: "share",
                     callback: "onClickTopButton()",
                     show: !0,
                     playshow: !0
                  })
               }, 10), window.onClickTopButton = this.onClickTopButton.bind(this), window.api.shareCb = this.shareCb.bind(this)
            }
         }, {
            key: "registWeiXinShare",
            value: function(t) {
               if (v.
            default.isWeChat()) {
                  var e = !1,
                     t = t || this.config,
                     i = this,
                     n = function(t) {
                        p.
                     default.config({
                           debug: !1,
                           appId: t.appId,
                           timestamp: t.timestamp,
                           nonceStr: t.noncestr,
                           signature: t.signature,
                           jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"]
                        }), p.
                     default.ready(i.updateShareData.bind(this)), e = !0
                     };
                  if (e) return i.updateShareData();
                  (0, o.
               default)("/api/wechat/jssdk/info", {
                     method: "get",
                     data: {
                        url: location.href.split("#")[0]
                     }
                  }).then(function(t) {
                     return t.json()
                  }).then(function(t) {
                     200 == t.code && n(t)
                  }).
                  catch (function(t) {})
               }
            }
         }, {
            key: "updateShareData",
            value: function(t) {
               if (t = t || this.config, this.config = t, v.
            default.isWeChat()) {
                  var e = /from=timeline/.test(location.search) ? "wxtimeline" : "wxsession",
                     i = function(t) {
                        (0, h.
                     default)("indirectshare", {
                           type: "webviewactivity",
                           url: location.href,
                           from: e,
                           to: t,
                           target: "m2_happiness",
                           is_webview: 1
                        })
                     },
                     t = Object.assign({
                        title: document.title,
                        subTitle: location.href,
                        text: document.title,
                        link: v.
                     default.getRandomShareLink()
                     }, t);
                  p.
               default.onMenuShareAppMessage({
                     title: t.title,
                     desc: t.subTitle,
                     link: t.link,
                     imgUrl: t.picUrl,
                     success: i.bind(null, "wxsession")
                  }), p.
               default.onMenuShareTimeline({
                     title: t.text,
                     link: t.link,
                     imgUrl: t.picUrl,
                     success: i.bind(null, "wxtimeline")
                  })
               }
            }
         }, {
            key: "onClickTopButton",
            value: function() {
               var t = [],
                  e = this.config;
               t.push(encodeURIComponent(e.text)), t.push(encodeURIComponent(e.picUrl)), t.push(encodeURIComponent(e.link)), t.push(encodeURIComponent(e.title)), t.push(encodeURIComponent(e.subTitle)), location.href = "orpheus://share/" + t.join("/"), (0, h.
            default)("click", {
                  target: "share",
                  targetid: "button",
                  resource: "webviewactivity",
                  url: location.href,
                  activity: "m2_happiness",
                  is_webview: 0
               })
            }
         }, {
            key: "shareCb",
            value: function(t, e) {
               e = e || "", t && (0, h.
            default)("click", {
                  target: "share",
                  targetid: v.
               default.getAppShareType(e),
                  resource:
                  "webviewactivity",
                  url: location.href,
                  activity: "m2_happiness",
                  is_webview: 0
               })
            }
         }]), t
      }();
   e.
default = _
}, , , , , , , , , , , , , , , , , , , , , , , 
360: function(t, e) {}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
395: function(t, e, i) {
   "use strict";

   function n(t) {
      return t && t.__esModule ? t : {
      default:
         t
      }
   }

   function s(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
   }

   function r(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
   }

   function a(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
         constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
         }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
   }
   Object.defineProperty(e, "__esModule", {
      value: !0
   });
   var o = function() {
         function t(t, e) {
            for (var i = 0; i < e.length; i++) {
               var n = e[i];
               n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
         }
         return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e
         }
      }(),
      l = i(864),
      h = n(l),
      c = i(863),
      u = n(c),
      d = function(t) {
         function e() {
            s(this, e);
            var t = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {
               vertexShader: h.
            default,
               fragmentShader:
               u.
            default,
               uniforms:
               {
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
            return t.enabled = !0, t.amp = 0, t.targetAmp = 0, t.lerpUpWeight = .15, t.lerpDownWeight = .3, t.time = 0, t
         }
         return a(e, t), o(e, [{
            key: "updateUniforms",
            value: function() {
               var t = this.targetAmp - this.amp;
               this.amp += t * (t > 0 ? this.lerpUpWeight : this.lerpDownWeight), this.uniforms.u_amp.value = this.amp
            }
         }]), e
      }(THREE.ShaderPass);
   e.
default = d
}, 
396: function(t, e, i) {
   "use strict";

   function n(t) {
      return t && t.__esModule ? t : {
      default:
         t
      }
   }

   function s(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
   }
   Object.defineProperty(e, "__esModule", {
      value: !0
   });
   var r = function() {
         function t(t, e) {
            for (var i = 0; i < e.length; i++) {
               var n = e[i];
               n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
         }
         return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e
         }
      }(),
      a = i(78),
      o = n(a),
      l = i(13),
      h = i(184),
      c = n(h),
      u = i(77),
      d = n(u),
      p = i(58),
      f = n(p),
      m = o.
   default.width,
      g = o.
   default.height,
      v = (o.
   default.dpr, function() {
         function t(e) {
            var i = e.popularity,
               n = e.maxTrailLength,
               r = e.freezedRollupSpeed,
               a = e.speedMin;
            if (s(this, t), this.popularity = i, this.maxTrailLength = n, this.freezedRollupSpeed = r, this.speedMin = a, this.paused = !1, this.animated = !1, this.freezed = !1, this.speedOffset = 0, this.canvas = $('<canvas width="' + m + '" height="' + g + '"></canvas>').appendTo("#j-view-front")[0], !this.canvas) return !1;
            this.ctx = this.canvas.getContext("2d"), this.stars = [], this.canvas.width = window.innerWidth, this.canvas.height = window.innerHeight, this.centerX = this.canvas.width / 2, this.centerY = this.canvas.height / 2, this.populateSky(), this.showTip = this.showTip.bind(this), this.onTransitionStart = this.onTransitionStart.bind(this), this.onTransitionFreeze = this.onTransitionFreeze.bind(this), this.onTransitionFullscreen = this.onTransitionFullscreen.bind(this), this.onTransitionEnd = this.onTransitionEnd.bind(this), this.addEvent()
         }
         return r(t, [{
            key: "addEvent",
            value: function() {
               $(window).on("touchstart", this.onTransitionStart), this.tipTimer = setTimeout(this.showTip, 4e3), this.freezeTimer = setTimeout(this.onTransitionStart, 2e4)
            }
         }, {
            key: "showTip",
            value: function() {
               $("#j-view-front").append('<div class="u-press"></div>')
            }
         }, {
            key: "hideTip",
            value: function() {
               this.tipTimer = clearTimeout(this.tipTimer), $("#j-view-front .u-press").remove()
            }
         }, {
            key: "onTransitionStart",
            value: function() {
               $(window).off("touchstart", this.onTransitionStart), this.freezeTimer = clearTimeout(this.freezeTimer), this.hideTip(), c.
            default.transitionOut(), this.playAnimate(), setTimeout(this.onTransitionFreeze, 500), f.
            default.biLogPage("ending")
            }
         }, {
            key: "onTransitionFreeze",
            value: function() {
               this.freezed = !0, this.speedOffset = .3, d.
            default.stopCollision(), setTimeout(this.onTransitionFullscreen, 2e3)
            }
         }, {
            key: "onTransitionFullscreen",
            value: function() {
               this.fullscreen = !0, this.speedOffset = 1, this.maxTrailLength = 2, setTimeout(this.onTransitionEnd, 500)
            }
         }, {
            key: "onTransitionEnd",
            value: function() {
               var t = {
                  o: 0
               },
                  e = $("#j-view-end"),
                  i = this;
               l.TweenMax.to(t, .5, {
                  o: 1,
                  onStart: function() {
                     i.pauseAnimate(), e.removeClass("z-game")
                  },
                  onUpdate: function() {
                     e.css("opacity", t.o)
                  },
                  onComplete: function() {
                     i.animateText()
                  }
               }), c.
            default.dispose(), game.ticker.stop()
            }
         }, {
            key: "random",
            value: function(t, e, i) {
               return parseFloat(Math.min(t + Math.random() * (e - t), e).toFixed(i || 4))
            }
         }, {
            key: "randomInt",
            value: function(t, e) {
               var i = t + Math.random() * (e + 1 - t);
               return i = Math.floor(i)
            }
         }, {
            key: "randomDistribution",
            value: function() {
               return arguments[Math.floor(Math.random() * arguments.length)]
            }
         }, {
            key: "toRad",
            value: function(t) {
               return t * (Math.PI / 180)
            }
         }, {
            key: "populateSky",
            value: function() {
               var t = Math.round(Math.sqrt(Math.pow(this.centerY, 2) + Math.pow(this.centerX, 2))),
                  e = Math.floor(this.canvas.width * this.popularity);
               this.stars = [];
               for (var i = 0; i < e; i++) {
                  var n = {};
                  n.color = [244, 244, 244], n.angle = Math.ceil(360 * Math.random()), n.opacity = this.random(.15, .85), n.width = this.randomDistribution(3, 2, 2, 2, 2, 1), n.length = n.width / 2e3, n.trailLength = 0, n.radius = this.randomDistribution(this.randomInt(0, t), this.randomInt(25, t), this.randomInt(45, t), this.randomInt(50, t)), n.speed = Math.abs((20 / n.radius + Math.random()) / 10), this.stars.push(n)
               }
            }
         }, {
            key: "clearCtx",
            value: function() {
               this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            }
         }, {
            key: "drawStars",
            value: function() {
               this.clearCtx();
               for (var t = this.canvas.width, e = 0; e < this.stars.length; e++) {
                  var i = this.stars[e];
                  i.angleRad = this.toRad(i.angle), i.angleRadEnd = i.angleRad + i.length, i.angleRadStart = i.angleRadStart ? i.angleRadStart : i.angleRad, this.freezed ? i.trailLength > this.maxTrailLength && (i.angleRadStart = i.angleRadEnd - i.trailLength) : (i.speed < .8 && (i.speed += .01), i.angleRadStart = Math.min(i.angleRadStart + (this.freezedRollupSpeed + i.trailLength / 30), i.angleRad)), i.trailLength = i.angleRadEnd - i.angleRadStart;
                  var n = -Math.min(i.trailLength, .6);
                  this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(" + i.color[0] + "," + i.color[1] + "," + i.color[2] + "," + (this.fullscreen ? i.opacity += .02 : Math.max(i.opacity + n, .1)) + ")", this.ctx.lineCap = "round", this.ctx.lineWidth = this.fullscreen ? i.width += 2 : i.width, this.ctx.arc(this.centerX, this.centerY, i.radius, i.angleRadStart, i.angleRadEnd, !1), this.ctx.stroke(), i.angle += Math.max(i.speed + this.speedOffset, this.speedMin), 360 == i.angle && (i.angle = 0), t > i.width && (t = i.width)
               }
            }
         }, {
            key: "animateSky",
            value: function() {
               function t() {
                  e = Date.now(), i = e - s, i > r && (s = e - i % r, n.drawStars()), n.paused ? n.animated = !1 : requestAnimationFrame(t)
               }
               var e, i, n = this,
                  s = Date.now(),
                  r = 1e3 / 351;
               t()
            }
         }, {
            key: "playAnimate",
            value: function() {
               this.paused = !1, this.speedOffset = 0, this.freezed = !1, this.animated || (this.animateSky(), this.animated = !0)
            }
         }, {
            key: "pauseAnimate",
            value: function() {
               this.paused = !0
            }
         }, {
            key: "animateText",
            value: function() {
               $("#j-view-end .j-content").addClass("z-show")
            }
         }]), t
      }());
   e.
default = v
}, 
397: function(t, e, i) {
   "use strict";

   function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
   }
   Object.defineProperty(e, "__esModule", {
      value: !0
   });
   var s = function() {
         function t(t, e) {
            for (var i = 0; i < e.length; i++) {
               var n = e[i];
               n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
         }
         return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e
         }
      }(),
      r = (i(78), {
         iterations: 12,
         mouse_force: .2,
         resolution: .25,
         cursor_size: 60,
         step: .05,
         alphatransition: 1
      }),
      a = 512,
      o = 1 / window.innerWidth,
      l = 1 / window.innerHeight,
      h = new THREE.Vector2(o, l),
      c = new THREE.Vector2(1, window.innerWidth / window.innerHeight),
      u = new THREE.Vector2,
      d = new THREE.BufferGeometry;
   d.addAttribute("position", new THREE.Float32Attribute([-2, -2, 0, 2, -2, 0, 2, 2, 0, -2, 2, 0], 3));
   var p = {
      basic: i(867),
      finalQuad: i(872),
      kernel: i(874),
      advect: i(866),
      boundary: i(868),
      cursor: i(870),
      addFStrength: i(865),
      div: i(871),
      compute: i(869),
      subtractpreGradient: i(875)
   },
      f = {
         all: new THREE.PlaneBufferGeometry(2, 2),
         inside: new THREE.PlaneBufferGeometry(1.99, 1.99),
         boundary: d,
         cursor: new THREE.PlaneBufferGeometry(o * r.cursor_size * 2, l * r.cursor_size * 2)
      },
      m = {
         mouse: new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2)
      },
      g = m.mouse.x,
      v = m.mouse.y,
      _ = function() {
         function t(e, i, s) {
            n(this, t);
            var a = this;
            this._onTouchStart = function(t) {
               m.mouse.x = Math.min(Math.max((t.touches[0].clientX / a.w * 2 - 1 + 1) / 2, .15), .85) * a.w, m.mouse.y = a.h - Math.min(Math.max((-t.touches[0].clientY / a.h * 2 + 1 + 1) / 2, .15), .85) * a.h
            }, this._onTouchMove = function(t) {
               u.x = t.touches[0].clientX / a.w * 2 - 1, u.y = -t.touches[0].clientY / a.h * 2 + 1, a.hasMove = !0
            }, this._renderer = e, this.textures = i, this._scene = new THREE.Scene, this._fbo = s, this._offScene = new THREE.Scene, this._camera = new THREE.OrthographicCamera(1, 1, 1, 1, -100, 100), this._type = this._renderer.extensions.get("OES_texture_half_float_linear") ? THREE.HalfFloatType : THREE.FloatType, r.iterations = 2, this.hasMove = !1, this._initFBOS(), this.resize(window.innerWidth, window.innerHeight)
         }
         return s(t, [{
            key: "addEvent",
            value: function() {
               $(window).on("touchstart", this._onTouchStart), $(window).on("touchmove", this._onTouchMove)
            }
         }, {
            key: "touchStart",
            value: function(t, e) {
               var i = this;
               m.mouse.x = Math.min(Math.max((t / i.w * 2 - 1 + 1) / 2, .15), .85) * i.w, m.mouse.y = i.h - Math.min(Math.max((-e / i.h * 2 + 1 + 1) / 2, .15), .85) * i.h
            }
         }, {
            key: "touchMove",
            value: function(t, e) {
               var i = this;
               u.x = t / i.w * 2 - 1, u.y = -e / i.h * 2 + 1, i.hasMove = !0
            }
         }, {
            key: "_initFBOS",
            value: function() {
               var t = this.textures["water-bg"],
                  e = this.textures["water-text"];
               e.minFilter = THREE.LinearFilter, e.magFilter = THREE.LinearFilter, t.minFilter = THREE.LinearFilter, t.magFilter = THREE.LinearFilter, e.wrapS = e.wrapT = THREE.RepeatWrapping, t.wrapS = t.wrapT = THREE.RepeatWrapping, this.velocityFBO0 = this._createFbos(a, a, THREE.RGBFormat, this._type), this.velocityFBO1 = this._createFbos(a, a, THREE.RGBFormat, this._type), this.divFBO = this._createFbos(a, a, THREE.RGBFormat, this._type), this.preFBO0 = this._createFbos(a, a, THREE.RGBFormat, this._type), this.preFBO1 = this._createFbos(a, a, THREE.RGBFormat, this._type), this.velocityK = {
                  geom: f.inside,
                  mat: new THREE.RawShaderMaterial({
                     uniforms: {
                        px: {
                           type: "v2",
                           value: h
                        },
                        px1: {
                           type: "v2",
                           value: c
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
                           value: r.step
                        }
                     },
                     vertexShader: p.kernel,
                     fragmentShader: p.advect
                  }),
                  output: this.velocityFBO1
               }, this.velocityK.mesh = new THREE.Mesh(this.velocityK.geom, this.velocityK.mat), this.velocityBoundaryKernel = {
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
               }, this.velocityBoundaryKernel.mesh = new THREE.Line(this.velocityBoundaryKernel.geom, this.velocityBoundaryKernel.mat);
               var i = new THREE.Vector2(r.cursor_size * (1 / 1024), r.cursor_size * (1 / 1024));
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
               }, this.addCursor.mesh = new THREE.Mesh(this.addCursor.geom, this.addCursor.mat), this.divKernel = {
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
               }, this.divKernel.mesh = new THREE.Mesh(this.divKernel.geom, this.divKernel.mat), this.mainComputationKernel = {
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
               }, this.mainComputationKernel.mesh = new THREE.Mesh(this.mainComputationKernel.geom, this.mainComputationKernel.mat), this.preBoundaryKernel = {
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
               }, this.preBoundaryKernel.mesh = new THREE.Line(this.preBoundaryKernel.geom, this.preBoundaryKernel.mat), this.subtractpreGradientKernel = {
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
               }, this.subtractpreGradientKernel.mesh = new THREE.Mesh(this.subtractpreGradientKernel.geom, this.subtractpreGradientKernel.mat), this.finalQuadKernel = {
                  geom: new THREE.PlaneBufferGeometry(1, 1, 1, 1),
                  mat: new THREE.RawShaderMaterial({
                     uniforms: {
                        alphatransition: {
                           type: "f",
                           value: r.alphatransition
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
                           value: t
                        },
                        logo: {
                           type: "t",
                           value: e
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
               }, this._mesh = new THREE.Mesh(this.finalQuadKernel.geom, this.finalQuadKernel.mat), this.finalQuadKernel.mesh = this._mesh, this._mesh.position.set(1.7, 4, 0), this._scene.add(this._mesh), this.velocityK.mesh.scale.set(a, a, 1), this.velocityBoundaryKernel.mesh.scale.set(a, a, 1), this.addCursor.mesh.scale.set(a, a, 1), this.divKernel.mesh.scale.set(a, a, 1), this.mainComputationKernel.mesh.scale.set(a, a, 1), this.preBoundaryKernel.mesh.scale.set(a, a, 1), this.subtractpreGradientKernel.mesh.scale.set(a, a, 1)
            }
         }, {
            key: "_createFbos",
            value: function(t, e, i, n) {
               return new THREE.WebGLRenderTarget(t, e, {
                  minFilter: THREE.LinearFilter,
                  magFilter: THREE.LinearFilter,
                  format: i,
                  type: n,
                  wrapS: THREE.RepeatWrapping,
                  wrapT: THREE.RepeatWrapping
               })
            }
         }, {
            key: "resize",
            value: function(t, e) {
               this.w = t, this.h = e;
               var i = this.w / this.h;
               r.mouse_force = .2, o = 1 / this.w, l = 1 / this.h, h = new THREE.Vector2(o, l), c = new THREE.Vector2(1, this.w / this.h), this.addCursor.mesh.geometry.dispose(), this.addCursor.geom = new THREE.PlaneBufferGeometry(o * r.cursor_size * 2, l * r.cursor_size * 2), this.addCursor.mesh = new THREE.Mesh(this.addCursor.geom, this.addCursor.mat), this.addCursor.mesh.material.uniforms.aspectRatio.value = this.w / this.h, this.addCursor.mesh.material.uniforms.px.value = h, this.addCursor.mesh.material.uniforms.scale.value.x = r.cursor_size * o * Math.min(.0015 * this.w, 1), this.addCursor.mesh.material.uniforms.scale.value.y = r.cursor_size * l * Math.min(.0015 * this.w, 1), this.addCursor.mesh.geometry.needsUpdate = !0, this.addCursor.mesh.needsUpdate = !0, this.addCursor.mesh.material.needsUpdate = !0, this.divKernel.mesh.material.uniforms.px.value = h, this.velocityK.mat.uniforms.px.value = h, this.velocityK.mat.uniforms.px1.value = c, this.mainComputationKernel.mesh.material.uniforms.px.value = h, this.preBoundaryKernel.mesh.material.uniforms.px.value = h, this.subtractpreGradientKernel.mesh.material.uniforms.px.value = h, this._mesh.material.uniforms.aspectRatio.value = i, this._camera.projectionMatrix.makeOrthographic(this.w / -2, this.w / 2, this.h / 2, this.h / -2, this._camera.near, this._camera.far)
            }
         }, {
            key: "render",
            value: function() {
               var t = m.mouse.x,
                  e = m.mouse.y,
                  i = t - g,
                  n = e - v;
               g = t, v = e, 0 === g && 0 === v && (i = n = 0);
               var s = this.preFBO0,
                  a = this.preFBO1,
                  h = s;
               this.hasMove && (TweenMax.to(m.mouse, .016, {
                  x: Math.min(Math.max((u.x + 1) / 2, .15), .85) * this.w,
                  y: this.h - Math.min(Math.max((u.y + 1) / 2, .15), .85) * this.h
               }), this.hasMove = !1), this.velocityK.mat.uniforms.dt.value = 1 * r.step, this._compute(this.velocityK, !1), this.addCursor.mesh.material.uniforms.force.value.x = i * o * r.cursor_size * r.mouse_force, this.addCursor.mesh.material.uniforms.force.value.y = -n * l * r.cursor_size * r.mouse_force, this.addCursor.mesh.material.uniforms.center.value.x = g * o * 2 - 1, this.addCursor.mesh.material.uniforms.center.value.y = -1 * (v * l * 2 - 1), this._compute(this.addCursor, !1), this._compute(this.velocityBoundaryKernel, !1), this._compute(this.divKernel, !1);
               for (var c = 0; c < r.iterations; c++) this.mainComputationKernel.mat.uniforms.pre.value = this.preBoundaryKernel.mat.uniforms.pre.value = s, this.mainComputationKernel.output = this.preBoundaryKernel.output = a, this._compute(this.mainComputationKernel, !1), this._compute(this.preBoundaryKernel, !1), h = s, s = a, a = h;
               this._compute(this.subtractpreGradientKernel, !1), this._mesh.material.uniforms.alphatransition.value = r.alphatransition, this._renderer.setScissorTest(!1), this._renderer.setRenderTarget(this._fbo), this.finalQuadKernel.mesh.material.uniforms.timer.value += .016, this._renderer.objects.update(this.finalQuadKernel.mesh), this._renderer.renderBufferDirect(this._camera, null, this.finalQuadKernel.mesh.geometry, this.finalQuadKernel.mesh.material, this.finalQuadKernel.mesh, null)
            }
         }, {
            key: "_compute",
            value: function(t, e) {
               this._offScene.add(t.mesh), e ? this._renderer.render(this._offScene, this._camera) : (this._renderer.setRenderTarget(t.output), this._renderer.objects.update(t.mesh), this._renderer.renderBufferDirect(this._camera, null, t.mesh.geometry, t.mesh.material, t.mesh, null)), this._offScene.remove(t.mesh)
            }
         }]), t
      }();
   e.
default = _
}, 
398: function(t, e, i) {
   "use strict";

   function n(t) {
      return t && t.__esModule ? t : {
      default:
         t
      }
   }

   function s(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
   }
   Object.defineProperty(e, "__esModule", {
      value: !0
   });
   var r = function() {
         function t(t, e) {
            for (var i = 0; i < e.length; i++) {
               var n = e[i];
               n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
         }
         return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e
         }
      }(),
      a = i(78),
      o = n(a),
      l = i(13),
      h = i(77),
      c = n(h),
      u = o.
   default.width,
      d = o.
   default.height,
      p = (o.
   default.dpr, 128),
      f = 64,
      m = function() {
         function t(e, i, n, r, a) {
            s(this, t), this.sw = u, this.sh = d, this.friction = n, this.vyadd = r, this.gravity = .15, this.scale = i, this.w = p * i | 0, this.h = f * i | 0, this.radius = .5 * Math.max(this.w, this.h) | 0;
            var o = new THREE.PlaneGeometry(this.w, this.h),
               l = new THREE.MeshBasicMaterial({
                  map: e,
                  transparent: !0,
                  side: THREE.DoubleSide,
                  opacity: a
               });
            this.mesh = new THREE.Mesh(o, l), this.reset(), this.update()
         }
         return r(t, [{
            key: "dispose",
            value: function() {
               this.mesh.geometry.dispose(), this.mesh.material.dispose()
            }
         }, {
            key: "reset",
            value: function() {
               Math.random() < .3 ? this.x = Math.random() * this.sw - this.sw / 2 : this.x = Math.random() * this.sw / 2 - this.sw / 4, this.y = this.sh / 2 + Math.random() * this.sh, this.vx = 6 * Math.random() - 3, this.vy = 6 * Math.random() - 3, this.sin = Math.random()
            }
         }, {
            key: "hide",
            value: function() {
               this.vyadd *= 4
            }
         }, {
            key: "move",
            value: function() {
               this.sin += .05, this.vx *= this.friction, this.vy *= this.friction, this.vy -= this.vyadd, this.x += this.vx, this.y += this.vy, (this.x - this.radius > this.sw / 2 || this.x + this.radius < -this.sw / 2 || this.y + this.radius < -this.sh / 2 || this.y - this.radius > this.sh / 2) && (this.disposeFlag ? this.dispose() : this.reset())
            }
         }, {
            key: "update",
            value: function() {
               this.move(), this.mesh.position.set(this.x, this.y, 0)
            }
         }]), t
      }(),
      g = function() {
         function t(e) {
            var i = e.renderer,
               n = e.textures;
            s(this, t), this.renderer = i, this.texture = n["xianshi-1"], this.camera = new THREE.OrthographicCamera(u / -2, u / 2, d / 2, d / -2, 1, 1e3), this.camera.position.set(0, 0, 400), this.scene = new THREE.Scene, this.createLetters(), this.animate = this.animate.bind(this)
         }
         return r(t, [{
            key: "dispose",
            value: function() {
               var t = this;
               t.letters.forEach(function(t) {
                  t.disposeFlag = !0
               });
               var e = {
                  o: 1
               },
                  i = $(c.
               default.el());
               l.TweenMax.to(e, 1.5, {
                  o: 0,
                  onUpdate: function() {
                     i.css("opacity", e.o)
                  },
                  onComplete: function() {
                     t.letters.forEach(function(e) {
                        e.dispose(), t.scene.remove(e.mesh)
                     }), setTimeout(function() {
                        t.animateId = cancelAnimationFrame(t.animateId), i.css("opacity", 1)
                     }, 1e3)
                  }
               })
            }
         }, {
            key: "createLetters",
            value: function() {
               this.letters = [];
               for (var t, e, i, n, s = 0; s < 30; ++s) {
                  n = .4 * Math.random() + .4, s < 6 ? (t = .2, e = .9, i = .45) : s < 15 ? (t = .25, e = .91, i = .5) : s < 27 ? (t = .3, e = .92, i = .65, n = 1) : (t = .5, e = .96, i = .75, n = 1);
                  var r = new m(this.texture, t, e, i, n);
                  this.scene.add(r.mesh), this.letters.push(r)
               }
            }
         }, {
            key: "animate",
            value: function() {
               this.animateId = requestAnimationFrame(this.animate), this.renderer.render(this.scene, this.camera), this.collision()
            }
         }, {
            key: "collision",
            value: function() {
               var t, e, i, n, s, r, a, o, l, h, c, u, d;
               for (u = 0; u < 29; ++u) {
                  for (t = this.letters[u], d = u + 1; d < 30; ++d) e = this.letters[d], i = e.x - t.x, n = e.y - t.y, s = Math.sqrt(i * i + n * n), r = t.radius + e.radius, s < r && (a = Math.atan2(n, i), o = t.x + Math.cos(a) * r, l = t.y + Math.sin(a) * r, h = .1 * (o - e.x), c = .1 * (l - e.y), t.vx -= h, t.vy -= c, e.vx += h, e.vy += c);
                  t.update()
               }
            }
         }]), t
      }();
   e.
default = g
}, 
399: function(t, e, i) {
   "use strict";

   function n(t) {
      return t && t.__esModule ? t : {
      default:
         t
      }
   }

   function s(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
   }
   Object.defineProperty(e, "__esModule", {
      value: !0
   });
   var r = function() {
         function t(t, e) {
            for (var i = 0; i < e.length; i++) {
               var n = e[i];
               n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
         }
         return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e
         }
      }(),
      a = i(78),
      o = n(a),
      l = i(77),
      h = n(l),
      c = o.
   default.width,
      u = o.
   default.height,
      d = (o.
   default.dpr, 128),
      p = 64,
      f = function() {
         function t(e) {
            s(this, t);
            var i = {
               x: -12,
               y: 100
            };
            this.x = i.x, this.y = i.y, this.radius = e;
            var n = new THREE.RingGeometry(this.radius - 2, this.radius, 64),
               r = new THREE.MeshBasicMaterial({
                  color: 16776960
               });
            this.mesh = new THREE.Mesh(n, r), this.mesh.position.x = i.x, this.mesh.position.y = i.y
         }
         return r(t, [{
            key: "dispose",
            value: function() {
               this.mesh.geometry.dispose(), this.mesh.material.dispose()
            }
         }, {
            key: "draw",
            value: function(t, e) {
               this.x = t, this.y = e, this.mesh.position.set(t, e, 0)
            }
         }]), t
      }(),
      m = function() {
         function t(e, i, n, r, a) {
            s(this, t), this.sw = c, this.sh = u, this.friction = n, this.vyadd = r, this.gravity = .15, this.scale = i, this.w = d * i | 0, this.h = p * i | 0, this.radius = .5 * Math.max(this.w, this.h) | 0;
            var o = new THREE.PlaneGeometry(this.w, this.h),
               l = new THREE.MeshBasicMaterial({
                  map: e,
                  transparent: !0,
                  side: THREE.DoubleSide,
                  opacity: a
               });
            this.mesh = new THREE.Mesh(o, l), this.reset(), this.update()
         }
         return r(t, [{
            key: "dispose",
            value: function() {
               this.mesh.geometry.dispose(), this.mesh.material.dispose()
            }
         }, {
            key: "reset",
            value: function() {
               Math.random() < .3 ? this.x = Math.random() * this.sw - this.sw / 2 : this.x = Math.random() * this.sw / 2 - this.sw / 4, this.y = this.sh / 2 + Math.random() * this.sh, this.vx = 6 * Math.random() - 3, this.vy = 6 * Math.random() - 3, this.sin = Math.random()
            }
         }, {
            key: "hide",
            value: function() {
               this.vyadd *= 4
            }
         }, {
            key: "move",
            value: function() {
               this.sin += .05, this.vx *= this.friction, this.vy *= this.friction, this.vy -= this.vyadd, this.x += this.vx, this.y += this.vy, (this.x - this.radius > this.sw / 2 || this.x + this.radius < -this.sw / 2 || this.y + this.radius < -this.sh / 2 || this.y - this.radius > this.sh / 2) && (this.disposeFlag ? this.dispose() : this.reset())
            }
         }, {
            key: "update",
            value: function() {
               this.move(), this.mesh.position.set(this.x, this.y, 0)
            }
         }]), t
      }(),
      g = function() {
         function t(e) {
            var i = e.renderer,
               n = e.textures;
            s(this, t), this.renderer = i, this.texture = n["xianshi-2"], this.camera = new THREE.OrthographicCamera(c / -2, c / 2, u / 2, u / -2, 1, 1e3), this.camera.position.set(0, 0, 400), this.scene = new THREE.Scene, this.createLetters(), this.animate = this.animate.bind(this)
         }
         return r(t, [{
            key: "dispose",
            value: function() {
               var t = this;
               t.letters.forEach(function(t) {
                  t.disposeFlag = !0
               });
               var e = {
                  o: 1
               },
                  i = $(h.
               default.el());
               TweenMax.to(e, 1.5, {
                  o: 0,
                  onUpdate: function() {
                     i.css("opacity", e.o)
                  },
                  onComplete: function() {
                     t.letters.forEach(function(e) {
                        e.dispose(), t.scene.remove(e.mesh)
                     }), setTimeout(function() {
                        t.animateId = cancelAnimationFrame(t.animateId), i.css("opacity", 1)
                     }, 1e3)
                  }
               })
            }
         }, {
            key: "createLetters",
            value: function() {
               this.letters = [];
               for (var t, e, i, n, s = 0; s < 30; ++s) {
                  n = .4 * Math.random() + .4, s < 6 ? (t = .2, e = .9, i = .4) : s < 15 ? (t = .25, e = .91, i = .45) : s < 27 ? (t = .3, e = .92, i = .5, n = 1) : (t = .5, e = .96, i = .6, n = 1);
                  var r = new m(this.texture, t, e, i, n);
                  this.scene.add(r.mesh), this.letters.push(r)
               }
               this.emptyBall = new f(60)
            }
         }, {
            key: "animate",
            value: function() {
               self.animateId = requestAnimationFrame(this.animate), this.renderer.render(this.scene, this.camera), this.collision()
            }
         }, {
            key: "collision",
            value: function() {
               var t, e, i, n, s, r, a, o, l, h, c;
               for (c = 0; c < 30; ++c) t = this.letters[c], e = this.emptyBall.x - t.x, i = this.emptyBall.y - t.y, n = Math.sqrt(e * e + i * i), s = t.radius + this.emptyBall.radius, n < s && (r = Math.atan2(i, e), a = t.x + Math.cos(r) * s, o = t.y + Math.sin(r) * s, l = .1 * (a - this.emptyBall.x), h = .1 * (o - this.emptyBall.y), t.vx -= l, t.vy -= h), t.update()
            }
         }]), t
      }();
   e.
default = g
}, 
400: function(t, e, i) {
   "use strict";

   function n(t) {
      return t && t.__esModule ? t : {
      default:
         t
      }
   }

   function s(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
   }
   Object.defineProperty(e, "__esModule", {
      value: !0
   });
   var r = function() {
         function t(t, e) {
            for (var i = 0; i < e.length; i++) {
               var n = e[i];
               n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
         }
         return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e
         }
      }(),
      a = i(13),
      o = i(397),
      l = n(o),
      h = i(78),
      c = n(h),
      u = c.
   default.waterWidth,
      d = c.
   default.waterHeight,
      p = c.
   default.dpr,
      f = function() {
         var t = 2 * Math.PI / 250,
            e = Math.PI;
         return function(i) {
            return 80 * Math.sin(t * i + e)
         }
      }(),
      m = function() {
         function t(e) {
            var i = (e.renderer, e.textures);
            s(this, t), this.renderer = new THREE.WebGLRenderer, this.renderer.setSize(u, d), this.renderer.setPixelRatio(p), this.textures = i, this.initScene(), this.transition(), this.animate = this.animate.bind(this), this.renderer.domElement.style.bottom = 0, $("#j-view-back").append(this.renderer.domElement)
         }
         return r(t, [{
            key: "initScene",
            value: function() {
               var t = {
                  minFilter: THREE.LinearFilter,
                  magFilter: THREE.LinearFilter,
                  format: THREE.RGBFormat,
                  stencilBuffer: !0,
                  depthBuffer: !0
               };
               this.fbo = new THREE.WebGLRenderTarget(u * p, d * p, t), this.liquid = new l.
            default (this.renderer, this.textures, this.fbo), this.scene = new THREE.Scene, this._w = window.innerWidth, this._h = d;
               var e = this._w / -2,
                  n = this._w / 2,
                  s = this._h / 2,
                  r = this._h / -2;
               this.camera = new THREE.OrthographicCamera(e, n, s, r, -10, 10), this._material = new THREE.ShaderMaterial({
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
                  vertexShader: i(876),
                  fragmentShader: i(873)
               });
               var a = new THREE.PlaneBufferGeometry(this._w, this._h);
               this._mesh = new THREE.Mesh(a, this._material), this.scene.add(this._mesh), this.liquidY = 0, this.liquidX = this._w >> 1, this._material.uniforms.textureDiffuse1.value = this.fbo.texture
            }
         }, {
            key: "transition",
            value: function() {
               var t = this,
                  e = this.renderer.domElement,
                  i = {
                     opacity: 0
                  };
               a.TweenMax.to(this._material.uniforms.transition, 5, {
                  value: 1,
                  onComplete: function() {
                     t._material.uniforms.transition.value = 1
                  }
               }), a.TweenMax.to(i, 1, {
                  opacity: 1,
                  onUpdate: function() {
                     e.style.opacity = i.opacity
                  },
                  ease: a.Power1.easeIn
               })
            }
         }, {
            key: "animate",
            value: function() {
               this.animId = requestAnimationFrame(this.animate), this.liquid.render(), this.useAutoWave && (this.liquidY > this._h + 200 && (this.liquidY = 0), this.liquid.touchMove(f(this.liquidY) + this.liquidX, this.liquidY), this.liquidY += 2), this.renderer.render(this.scene, this.camera)
            }
         }, {
            key: "touch",
            value: function(t, e) {
               this.liquid.touchMove(t, e)
            }
         }, {
            key: "dispose",
            value: function() {
               cancelAnimationFrame(this.animId), this.renderer.dispose();
               var t = {
                  opacity: 1
               },
                  e = this.renderer.domElement;
               a.TweenMax.to(t, 1, {
                  opacity: 0,
                  onUpdate: function() {
                     e.style.opacity = t.opacity
                  },
                  onComplete: function() {
                     e.parentNode.removeChild(e)
                  }
               })
            }
         }]), t
      }();
   e.
default = m
}, 
401: function(t, e, i) {
   "use strict";

   function n(t, e) {
      return new Promise(function(i, n) {
         (new THREE.TextureLoader).load(e, function(e) {
            i({
               name: t,
               texture: e
            })
         }, function() {}, function() {
            n()
         })
      })
   }

   function s(t) {
      return Promise.all(t.map(function(t) {
         return n(t.name, t.url)
      }))
   }
   Object.defineProperty(e, "__esModule", {
      value: !0
   }), e.
default = s, i(162)
}, 
402: function(t, e, i) {
   "use strict";
   i(205);
   var n = i(14),
      s = function(t) {
         return t && t.__esModule ? t : {
         default:
            t
         }
      }(n),
      r = i(311);
   !
   function(t) {
      t.Asset = Hilo.Class.create({
         Mixes: Hilo.EventMixin,
         load: function() {
            var e = [{
               id: "block",
               src: i(768)
            }, {
               id: "man",
               src: i(804)
            }, {
               id: "xunzhao",
               src: i(828)
            }, {
               id: "guide-move-static",
               src: i(795)
            }, {
               id: "guide-jump",
               src: i(793)
            }, {
               id: "guide-jump-static",
               src: i(792)
            }, {
               id: "guide-blink",
               src: i(791)
            }, {
               id: "guide",
               src: i(800)
            }, {
               id: "guide-new",
               src: i(796)
            }, {
               id: "intro",
               src: i(801)
            }, {
               id: "xxx-1",
               src: i(829)
            }, {
               id: "xxx-2",
               src: i(830)
            }, {
               id: "xxx-3",
               src: i(831)
            }, {
               id: "mengxiang-text",
               src: i(810)
            }, {
               id: "mengxiang-fly-1",
               src: i(807)
            }, {
               id: "mengxiang-fly-2",
               src: i(808)
            }, {
               id: "mengxiang-fly-3",
               src: i(809)
            }, {
               id: "daji-static",
               src: i(782)
            }, {
               id: "daji-0",
               src: i(780)
            }, {
               id: "daji-1",
               src: i(781)
            }, {
               id: "tongku",
               src: i(822)
            }, {
               id: "sikao-repeat",
               src: i(820)
            }, {
               id: "sikao-trans",
               src: i(821)
            }, {
               id: "chengzhang-text-0",
               src: i(777)
            }, {
               id: "chengzhang-text-1",
               src: i(778)
            }, {
               id: "chengzhang-before-0",
               src: i(773)
            }, {
               id: "chengzhang-before-1",
               src: i(774)
            }, {
               id: "chengzhang-before-2",
               src: i(775)
            }, {
               id: "chengzhang-before-3",
               src: i(776)
            }, {
               id: "chengzhang-after-0",
               src: i(769)
            }, {
               id: "chengzhang-after-1",
               src: i(770)
            }, {
               id: "chengzhang-after-2",
               src: i(771)
            }, {
               id: "chengzhang-after-3",
               src: i(772)
            }, {
               id: "gudu-text-0",
               src: i(788)
            }, {
               id: "gudu-text-1",
               src: i(789)
            }, {
               id: "gudu-text-2",
               src: i(790)
            }, {
               id: "gudu-repeat",
               src: i(786)
            }, {
               id: "gudu-bihua",
               src: i(785)
            }, {
               id: "gudu-static",
               src: i(787)
            }, {
               id: "peiban-star",
               src: i(816)
            }, {
               id: "peiban-text",
               src: i(817)
            }, {
               id: "peiban-trans-0",
               src: i(818)
            }, {
               id: "peiban-trans-1",
               src: i(819)
            }, {
               id: "peiban-repeat-0",
               src: i(814)
            }, {
               id: "peiban-repeat-1",
               src: i(815)
            }, {
               id: "ai-static",
               src: i(767)
            }, {
               id: "ai-repeat-0",
               src: i(765)
            }, {
               id: "ai-repeat-1",
               src: i(766)
            }, {
               id: "xingfu-text",
               src: i(827)
            }, {
               id: "xing-repeat",
               src: i(826)
            }, {
               id: "fu-repeat",
               src: i(783)
            }, {
               id: "guide-s7",
               src: i(798)
            }, {
               id: "cy",
               src: i(779)
            }, {
               id: "ty",
               src: i(823)
            }, {
               id: "nuli",
               src: i(813)
            }, {
               id: "nuli-v2",
               src: i(812)
            }, {
               id: "ni-copy",
               src: i(811)
            }, {
               id: "guide-right",
               src: i(797)
            }, {
               id: "guide-top",
               src: i(799)
            }, {
               id: "guide-long",
               src: i(794)
            }, {
               id: "jianchi",
               src: i(802)
            }, {
               id: "mengxiang-end-trans",
               src: i(806)
            }, {
               id: "mengxiang-end-repeat",
               src: i(805)
            }, {
               id: "man-colors",
               src: i(803)
            }];
            this.queue = new Hilo.LoadQueue, this.queue.add(e), this.queue.on("complete", this.onComplete.bind(this)), this.queue.start(), t.progress = 0, this.elem = (0, s.
         default)(".splash-percentage"), this.clock = setInterval(function() {
               var e = this.queue.getLoaded() / this.queue.getTotal();
               t.progress = 100 * e.toFixed(2) >> 0, this.elem.html(t.progress), 100 == t.progress && this.hideLoading()
            }.bind(this), 20)
         },
         onComplete: function(t) {
            this.block = this.queue.get("block").content, this.man = this.queue.get("man").content, this.xunzhao = this.queue.get("xunzhao").content, this.guide_move_static = this.queue.get("guide-move-static").content, this.xxx_1 = this.queue.get("xxx-1").content, this.xxx_2 = this.queue.get("xxx-2").content, this.xxx_3 = this.queue.get("xxx-3").content, this.guide_jump = new Hilo.TextureAtlas({
               image: this.queue.get("guide-jump").content,
               frames: [
                  [540, 1352, 267, 148],
                  [540, 1202, 267, 148],
                  [540, 1052, 267, 148],
                  [540, 902, 267, 148],
                  [1616, 752, 267, 148],
                  [1347, 752, 267, 148],
                  [1078, 752, 267, 148],
                  [809, 752, 267, 148],
                  [540, 752, 267, 148],
                  [1616, 602, 267, 148],
                  [1347, 602, 267, 148],
                  [1078, 602, 267, 148],
                  [809, 602, 267, 148],
                  [540, 602, 267, 148],
                  [271, 1802, 267, 148],
                  [271, 1652, 267, 148],
                  [271, 1502, 267, 148],
                  [271, 1352, 267, 148],
                  [271, 1202, 267, 148],
                  [271, 1052, 267, 148],
                  [271, 902, 267, 148],
                  [271, 752, 267, 148],
                  [271, 602, 267, 148],
                  [1616, 452, 267, 148],
                  [1347, 452, 267, 148],
                  [1078, 452, 267, 148],
                  [809, 452, 267, 148],
                  [540, 452, 267, 148],
                  [271, 452, 267, 148],
                  [1616, 302, 267, 148],
                  [1347, 302, 267, 148],
                  [1078, 302, 267, 148],
                  [809, 302, 267, 148],
                  [540, 302, 267, 148],
                  [271, 302, 267, 148],
                  [2, 1802, 267, 148],
                  [2, 1652, 267, 148],
                  [2, 1502, 267, 148],
                  [2, 1352, 267, 148],
                  [2, 1202, 267, 148],
                  [2, 1052, 267, 148],
                  [2, 902, 267, 148],
                  [2, 752, 267, 148],
                  [2, 602, 267, 148],
                  [2, 452, 267, 148],
                  [2, 302, 267, 148],
                  [1616, 152, 267, 148],
                  [1347, 152, 267, 148],
                  [1078, 152, 267, 148],
                  [809, 152, 267, 148],
                  [540, 152, 267, 148],
                  [271, 152, 267, 148],
                  [2, 152, 267, 148],
                  [1616, 2, 267, 148],
                  [1347, 2, 267, 148],
                  [1078, 2, 267, 148],
                  [809, 2, 267, 148],
                  [540, 2, 267, 148],
                  [271, 2, 267, 148],
                  [2, 2, 267, 148]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]
               }
            }), this.guide_jump_static = this.queue.get("guide-jump-static").content, this.guide = new Hilo.TextureAtlas({
               image: this.queue.get("guide").content,
               frames: [
                  [2, 84, 395, 39],
                  [2, 43, 395, 39],
                  [2, 2, 395, 39]
               ]
            }), this.guide_new = new Hilo.TextureAtlas({
               image: this.queue.get("guide-new").content,
               frames: [
                  [0, 0, 418, 81],
                  [0, 81, 418, 81],
                  [0, 162, 418, 81]
               ]
            }), this.guide_blink = new Hilo.TextureAtlas({
               image: this.queue.get("guide-blink").content,
               frames: [
                  [2, 453, 400, 39],
                  [2, 412, 400, 39],
                  [2, 371, 400, 39],
                  [2, 330, 400, 39],
                  [2, 289, 400, 39],
                  [2, 248, 400, 39],
                  [2, 207, 400, 39],
                  [2, 166, 400, 39],
                  [2, 125, 400, 39],
                  [2, 84, 400, 39],
                  [2, 43, 400, 39],
                  [2, 2, 400, 39],
                  [2, 453, 400, 39]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
               }
            }), this.intro = this.queue.get("intro").content, this.mengxiang_text = new Hilo.TextureAtlas({
               image: this.queue.get("mengxiang-text").content,
               frames: [
                  [1352, 1460, 448, 241],
                  [902, 1703, 448, 241],
                  [902, 1460, 448, 241],
                  [1352, 1217, 448, 241],
                  [902, 1217, 448, 241],
                  [1352, 974, 448, 241],
                  [902, 974, 448, 241],
                  [452, 1703, 448, 241],
                  [452, 1460, 448, 241],
                  [452, 1217, 448, 241],
                  [452, 974, 448, 241],
                  [1352, 731, 448, 241],
                  [902, 731, 448, 241],
                  [452, 731, 448, 241],
                  [1352, 488, 448, 241],
                  [902, 488, 448, 241],
                  [452, 488, 448, 241],
                  [2, 1703, 448, 241],
                  [2, 1460, 448, 241],
                  [2, 1217, 448, 241],
                  [2, 974, 448, 241],
                  [2, 731, 448, 241],
                  [2, 488, 448, 241],
                  [1352, 245, 448, 241],
                  [902, 245, 448, 241],
                  [452, 245, 448, 241],
                  [2, 245, 448, 241],
                  [1352, 2, 448, 241],
                  [902, 2, 448, 241],
                  [452, 2, 448, 241],
                  [2, 2, 448, 241]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
               }
            }), this.mengxiang_fly_1 = new Hilo.TextureAtlas({
               image: this.queue.get("mengxiang-fly-1").content,
               frames: [
                  [461, 412, 151, 203],
                  [767, 207, 151, 203],
                  [614, 207, 151, 203],
                  [461, 207, 151, 203],
                  [308, 617, 151, 203],
                  [308, 412, 151, 203],
                  [308, 207, 151, 203],
                  [155, 617, 151, 203],
                  [155, 412, 151, 203],
                  [155, 207, 151, 203],
                  [767, 2, 151, 203],
                  [614, 2, 151, 203],
                  [461, 2, 151, 203],
                  [308, 2, 151, 203],
                  [155, 2, 151, 203],
                  [2, 617, 151, 203],
                  [2, 412, 151, 203],
                  [2, 207, 151, 203],
                  [2, 2, 151, 203]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
               }
            }), this.mengxiang_fly_2 = new Hilo.TextureAtlas({
               image: this.queue.get("mengxiang-fly-2").content,
               frames: [
                  [461, 412, 151, 203],
                  [767, 207, 151, 203],
                  [614, 207, 151, 203],
                  [461, 207, 151, 203],
                  [308, 617, 151, 203],
                  [308, 412, 151, 203],
                  [308, 207, 151, 203],
                  [155, 617, 151, 203],
                  [155, 412, 151, 203],
                  [155, 207, 151, 203],
                  [767, 2, 151, 203],
                  [614, 2, 151, 203],
                  [461, 2, 151, 203],
                  [308, 2, 151, 203],
                  [155, 2, 151, 203],
                  [2, 617, 151, 203],
                  [2, 412, 151, 203],
                  [2, 207, 151, 203],
                  [2, 2, 151, 203]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
               }
            }), this.mengxiang_fly_3 = new Hilo.TextureAtlas({
               image: this.queue.get("mengxiang-fly-3").content,
               frames: [
                  [461, 412, 151, 203],
                  [767, 207, 151, 203],
                  [614, 207, 151, 203],
                  [461, 207, 151, 203],
                  [308, 617, 151, 203],
                  [308, 412, 151, 203],
                  [308, 207, 151, 203],
                  [155, 617, 151, 203],
                  [155, 412, 151, 203],
                  [155, 207, 151, 203],
                  [767, 2, 151, 203],
                  [614, 2, 151, 203],
                  [461, 2, 151, 203],
                  [308, 2, 151, 203],
                  [155, 2, 151, 203],
                  [2, 617, 151, 203],
                  [2, 412, 151, 203],
                  [2, 207, 151, 203],
                  [2, 2, 151, 203]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
               }
            }), this.daji_static = this.queue.get("daji-static").content, this.daji = [new Hilo.TextureAtlas({
               image: this.queue.get("daji-0").content,
               frames: [
                  [2, 2, 442, 160],
                  [446, 2, 442, 160],
                  [890, 2, 442, 160],
                  [1334, 2, 442, 160],
                  [2, 164, 442, 160],
                  [446, 164, 442, 160],
                  [890, 164, 442, 160],
                  [1334, 164, 442, 160],
                  [2, 326, 442, 160],
                  [446, 326, 442, 160],
                  [890, 326, 442, 160],
                  [1334, 326, 442, 160],
                  [2, 488, 442, 160],
                  [446, 488, 442, 160],
                  [890, 488, 442, 160],
                  [1334, 488, 442, 160],
                  [2, 650, 442, 160],
                  [2, 812, 442, 160],
                  [2, 974, 442, 160],
                  [2, 1136, 442, 160],
                  [2, 1298, 442, 160],
                  [2, 1460, 442, 160],
                  [2, 1622, 442, 160],
                  [2, 1784, 442, 160],
                  [446, 650, 442, 160],
                  [890, 650, 442, 160],
                  [1334, 650, 442, 160],
                  [446, 812, 442, 160],
                  [890, 812, 442, 160],
                  [1334, 812, 442, 160],
                  [446, 974, 442, 160],
                  [890, 974, 442, 160],
                  [1334, 974, 442, 160],
                  [446, 1136, 442, 160],
                  [446, 1298, 442, 160],
                  [446, 1460, 442, 160],
                  [446, 1622, 442, 160],
                  [446, 1784, 442, 160],
                  [890, 1136, 442, 160],
                  [1334, 1136, 442, 160],
                  [890, 1298, 442, 160],
                  [1334, 1298, 442, 160],
                  [890, 1460, 442, 160],
                  [890, 1622, 442, 160],
                  [890, 1784, 442, 160],
                  [1334, 1460, 442, 160],
                  [1334, 1622, 442, 160],
                  [1334, 1784, 442, 160]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]
               }
            }), new Hilo.TextureAtlas({
               image: this.queue.get("daji-1").content,
               frames: [
                  [2, 2, 442, 160],
                  [446, 2, 442, 160],
                  [2, 164, 442, 160],
                  [446, 164, 442, 160],
                  [2, 326, 442, 160],
                  [446, 326, 442, 160],
                  [2, 488, 442, 160],
                  [446, 488, 442, 160],
                  [2, 650, 442, 160],
                  [2, 812, 442, 160],
                  [446, 650, 442, 160],
                  [446, 812, 442, 160]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
               }
            })], this.tongku = new Hilo.TextureAtlas({
               image: this.queue.get("tongku").content,
               frames: [
                  [1037, 653, 343, 215],
                  [1037, 653, 343, 215],
                  [692, 653, 343, 215],
                  [347, 1738, 343, 215],
                  [347, 1521, 343, 215],
                  [347, 1304, 343, 215],
                  [347, 1087, 343, 215],
                  [347, 870, 343, 215],
                  [347, 653, 343, 215],
                  [1382, 436, 343, 215],
                  [1037, 436, 343, 215],
                  [692, 436, 343, 215],
                  [347, 436, 343, 215],
                  [2, 1738, 343, 215],
                  [2, 1521, 343, 215],
                  [2, 1304, 343, 215],
                  [2, 1087, 343, 215],
                  [2, 870, 343, 215],
                  [2, 653, 343, 215],
                  [2, 436, 343, 215],
                  [1382, 219, 343, 215],
                  [1037, 219, 343, 215],
                  [692, 219, 343, 215],
                  [347, 219, 343, 215],
                  [2, 219, 343, 215],
                  [1382, 2, 343, 215],
                  [1037, 2, 343, 215],
                  [692, 2, 343, 215],
                  [347, 2, 343, 215],
                  [2, 2, 343, 215]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
               }
            }), this.sikao_repeat = new Hilo.TextureAtlas({
               image: this.queue.get("sikao-repeat").content,
               frames: [
                  [2, 436, 343, 215],
                  [2, 219, 343, 215],
                  [2, 2, 343, 215]
               ],
               sprites: {
                  xxx: [0, 1, 2]
               }
            }), this.sikao_trans = new Hilo.TextureAtlas({
               image: this.queue.get("sikao-trans").content,
               frames: [
                  [1382, 653, 343, 215],
                  [1037, 653, 343, 215],
                  [692, 653, 343, 215],
                  [347, 1738, 343, 215],
                  [347, 1521, 343, 215],
                  [347, 1304, 343, 215],
                  [347, 1087, 343, 215],
                  [347, 870, 343, 215],
                  [347, 653, 343, 215],
                  [1382, 436, 343, 215],
                  [1037, 436, 343, 215],
                  [692, 436, 343, 215],
                  [347, 436, 343, 215],
                  [2, 1738, 343, 215],
                  [2, 1521, 343, 215],
                  [2, 1304, 343, 215],
                  [2, 1087, 343, 215],
                  [2, 870, 343, 215],
                  [2, 653, 343, 215],
                  [2, 436, 343, 215],
                  [1382, 219, 343, 215],
                  [1037, 219, 343, 215],
                  [692, 219, 343, 215],
                  [347, 219, 343, 215],
                  [2, 219, 343, 215],
                  [1382, 2, 343, 215],
                  [1037, 2, 343, 215],
                  [692, 2, 343, 215],
                  [347, 2, 343, 215],
                  [2, 2, 343, 215]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
               }
            }), this.chengzhang_text = [new Hilo.TextureAtlas({
               image: this.queue.get("chengzhang-text-0").content,
               frames: [
                  [2, 2, 1209, 274],
                  [2, 278, 1209, 274],
                  [2, 554, 1209, 274],
                  [2, 830, 1209, 274],
                  [2, 1106, 1209, 274],
                  [2, 1382, 1209, 274],
                  [2, 1658, 1209, 274]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6]
               }
            }), new Hilo.TextureAtlas({
               image: this.queue.get("chengzhang-text-1").content,
               frames: [
                  [2, 2, 1209, 274],
                  [2, 278, 1209, 274],
                  [2, 554, 1209, 274],
                  [2, 830, 1209, 274],
                  [2, 1106, 1209, 274],
                  [2, 1382, 1209, 274]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5]
               }
            })], this.chengzhang_before = [new Hilo.TextureAtlas({
               image: this.queue.get("chengzhang-before-0").content,
               frames: [
                  [2, 2, 473, 274],
                  [477, 2, 473, 274],
                  [952, 2, 473, 274],
                  [1427, 2, 473, 274],
                  [2, 278, 473, 274],
                  [477, 278, 473, 274],
                  [952, 278, 473, 274],
                  [1427, 278, 473, 274],
                  [2, 554, 473, 274],
                  [2, 830, 473, 274],
                  [2, 1106, 473, 274],
                  [2, 1382, 473, 274],
                  [2, 1658, 473, 274],
                  [477, 554, 473, 274],
                  [952, 554, 473, 274],
                  [1427, 554, 473, 274],
                  [477, 830, 473, 274],
                  [952, 830, 473, 274],
                  [1427, 830, 473, 274],
                  [477, 1106, 473, 274],
                  [477, 1382, 473, 274],
                  [477, 1658, 473, 274],
                  [952, 1106, 473, 274],
                  [1427, 1106, 473, 274],
                  [952, 1382, 473, 274],
                  [952, 1658, 473, 274],
                  [1427, 1382, 473, 274],
                  [1427, 1658, 473, 274]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
               }
            }), new Hilo.TextureAtlas({
               image: this.queue.get("chengzhang-before-1").content,
               frames: [
                  [2, 2, 473, 274],
                  [477, 2, 473, 274],
                  [952, 2, 473, 274],
                  [1427, 2, 473, 274],
                  [2, 278, 473, 274],
                  [477, 278, 473, 274],
                  [952, 278, 473, 274],
                  [1427, 278, 473, 274],
                  [2, 554, 473, 274],
                  [2, 830, 473, 274],
                  [2, 1106, 473, 274],
                  [2, 1382, 473, 274],
                  [2, 1658, 473, 274],
                  [477, 554, 473, 274],
                  [952, 554, 473, 274],
                  [1427, 554, 473, 274],
                  [477, 830, 473, 274],
                  [952, 830, 473, 274],
                  [1427, 830, 473, 274],
                  [477, 1106, 473, 274],
                  [477, 1382, 473, 274],
                  [477, 1658, 473, 274],
                  [952, 1106, 473, 274],
                  [1427, 1106, 473, 274],
                  [952, 1382, 473, 274],
                  [952, 1658, 473, 274],
                  [1427, 1382, 473, 274],
                  [1427, 1658, 473, 274]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
               }
            }), new Hilo.TextureAtlas({
               image: this.queue.get("chengzhang-before-2").content,
               frames: [
                  [2, 2, 473, 274],
                  [477, 2, 473, 274],
                  [952, 2, 473, 274],
                  [1427, 2, 473, 274],
                  [2, 278, 473, 274],
                  [477, 278, 473, 274],
                  [952, 278, 473, 274],
                  [1427, 278, 473, 274],
                  [2, 554, 473, 274],
                  [2, 830, 473, 274],
                  [2, 1106, 473, 274],
                  [2, 1382, 473, 274],
                  [2, 1658, 473, 274],
                  [477, 554, 473, 274],
                  [952, 554, 473, 274],
                  [1427, 554, 473, 274],
                  [477, 830, 473, 274],
                  [952, 830, 473, 274],
                  [1427, 830, 473, 274],
                  [477, 1106, 473, 274],
                  [477, 1382, 473, 274],
                  [477, 1658, 473, 274],
                  [952, 1106, 473, 274],
                  [1427, 1106, 473, 274],
                  [952, 1382, 473, 274],
                  [952, 1658, 473, 274],
                  [1427, 1382, 473, 274],
                  [1427, 1658, 473, 274]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
               }
            }), new Hilo.TextureAtlas({
               image: this.queue.get("chengzhang-before-3").content,
               frames: [
                  [2, 2, 473, 274],
                  [477, 2, 473, 274],
                  [2, 278, 473, 274],
                  [477, 278, 473, 274],
                  [2, 554, 473, 274],
                  [477, 554, 473, 274],
                  [2, 830, 473, 274],
                  [477, 830, 473, 274]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7]
               }
            })], this.chengzhang_after = [new Hilo.TextureAtlas({
               image: this.queue.get("chengzhang-after-0").content,
               frames: [
                  [2, 2, 471, 274],
                  [475, 2, 471, 274],
                  [948, 2, 471, 274],
                  [1421, 2, 471, 274],
                  [2, 278, 471, 274],
                  [475, 278, 471, 274],
                  [948, 278, 471, 274],
                  [1421, 278, 471, 274],
                  [2, 554, 471, 274],
                  [2, 830, 471, 274],
                  [2, 1106, 471, 274],
                  [2, 1382, 471, 274],
                  [2, 1658, 471, 274],
                  [475, 554, 471, 274],
                  [948, 554, 471, 274],
                  [1421, 554, 471, 274],
                  [475, 830, 471, 274],
                  [948, 830, 471, 274],
                  [1421, 830, 471, 274],
                  [475, 1106, 471, 274],
                  [475, 1382, 471, 274],
                  [475, 1658, 471, 274],
                  [948, 1106, 471, 274],
                  [1421, 1106, 471, 274],
                  [948, 1382, 471, 274],
                  [948, 1658, 471, 274],
                  [1421, 1382, 471, 274],
                  [1421, 1658, 471, 274]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
               }
            }), new Hilo.TextureAtlas({
               image: this.queue.get("chengzhang-after-1").content,
               frames: [
                  [2, 2, 471, 274],
                  [475, 2, 471, 274],
                  [948, 2, 471, 274],
                  [1421, 2, 471, 274],
                  [2, 278, 471, 274],
                  [475, 278, 471, 274],
                  [948, 278, 471, 274],
                  [1421, 278, 471, 274],
                  [2, 554, 471, 274],
                  [2, 830, 471, 274],
                  [2, 1106, 471, 274],
                  [2, 1382, 471, 274],
                  [2, 1658, 471, 274],
                  [475, 554, 471, 274],
                  [948, 554, 471, 274],
                  [1421, 554, 471, 274],
                  [475, 830, 471, 274],
                  [948, 830, 471, 274],
                  [1421, 830, 471, 274],
                  [475, 1106, 471, 274],
                  [475, 1382, 471, 274],
                  [475, 1658, 471, 274],
                  [948, 1106, 471, 274],
                  [1421, 1106, 471, 274],
                  [948, 1382, 471, 274],
                  [948, 1658, 471, 274],
                  [1421, 1382, 471, 274],
                  [1421, 1658, 471, 274]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
               }
            }), new Hilo.TextureAtlas({
               image: this.queue.get("chengzhang-after-2").content,
               frames: [
                  [2, 2, 471, 274],
                  [475, 2, 471, 274],
                  [948, 2, 471, 274],
                  [1421, 2, 471, 274],
                  [2, 278, 471, 274],
                  [475, 278, 471, 274],
                  [948, 278, 471, 274],
                  [1421, 278, 471, 274],
                  [2, 554, 471, 274],
                  [2, 830, 471, 274],
                  [2, 1106, 471, 274],
                  [2, 1382, 471, 274],
                  [2, 1658, 471, 274],
                  [475, 554, 471, 274],
                  [948, 554, 471, 274],
                  [1421, 554, 471, 274],
                  [475, 830, 471, 274],
                  [948, 830, 471, 274],
                  [1421, 830, 471, 274],
                  [475, 1106, 471, 274],
                  [475, 1382, 471, 274],
                  [475, 1658, 471, 274],
                  [948, 1106, 471, 274],
                  [1421, 1106, 471, 274],
                  [948, 1382, 471, 274],
                  [948, 1658, 471, 274],
                  [1421, 1382, 471, 274],
                  [1421, 1658, 471, 274]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
               }
            }), new Hilo.TextureAtlas({
               image: this.queue.get("chengzhang-after-3").content,
               frames: [
                  [2, 2, 471, 274]
               ],
               sprites: {
                  xxx: [0]
               }
            })], this.gudu_text = [new Hilo.TextureAtlas({
               image: this.queue.get("gudu-text-0").content,
               frames: [
                  [2, 2, 323, 266],
                  [327, 2, 323, 266],
                  [652, 2, 323, 266],
                  [977, 2, 323, 266],
                  [1302, 2, 323, 266],
                  [1627, 2, 323, 266],
                  [2, 270, 323, 266],
                  [2, 538, 323, 266],
                  [2, 806, 323, 266],
                  [2, 1074, 323, 266],
                  [2, 1342, 323, 266],
                  [2, 1610, 323, 266],
                  [327, 270, 323, 266],
                  [652, 270, 323, 266],
                  [977, 270, 323, 266],
                  [1302, 270, 323, 266],
                  [1627, 270, 323, 266],
                  [327, 538, 323, 266],
                  [327, 806, 323, 266],
                  [327, 1074, 323, 266],
                  [327, 1342, 323, 266],
                  [327, 1610, 323, 266],
                  [652, 538, 323, 266],
                  [977, 538, 323, 266],
                  [1302, 538, 323, 266],
                  [1627, 538, 323, 266],
                  [652, 806, 323, 266],
                  [652, 1074, 323, 266],
                  [652, 1342, 323, 266],
                  [652, 1610, 323, 266],
                  [977, 806, 323, 266],
                  [1302, 806, 323, 266],
                  [1627, 806, 323, 266],
                  [977, 1074, 323, 266],
                  [1302, 1074, 323, 266],
                  [1627, 1074, 323, 266],
                  [977, 1342, 323, 266],
                  [977, 1610, 323, 266],
                  [1302, 1342, 323, 266],
                  [1627, 1342, 323, 266],
                  [1302, 1610, 323, 266],
                  [1627, 1610, 323, 266]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41]
               }
            }), new Hilo.TextureAtlas({
               image: this.queue.get("gudu-text-1").content,
               frames: [
                  [2, 2, 323, 266],
                  [327, 2, 323, 266],
                  [652, 2, 323, 266],
                  [977, 2, 323, 266],
                  [1302, 2, 323, 266],
                  [1627, 2, 323, 266],
                  [2, 270, 323, 266],
                  [2, 538, 323, 266],
                  [2, 806, 323, 266],
                  [2, 1074, 323, 266],
                  [2, 1342, 323, 266],
                  [2, 1610, 323, 266],
                  [327, 270, 323, 266],
                  [652, 270, 323, 266],
                  [977, 270, 323, 266],
                  [1302, 270, 323, 266],
                  [1627, 270, 323, 266],
                  [327, 538, 323, 266],
                  [327, 806, 323, 266],
                  [327, 1074, 323, 266],
                  [327, 1342, 323, 266],
                  [327, 1610, 323, 266],
                  [652, 538, 323, 266],
                  [977, 538, 323, 266],
                  [1302, 538, 323, 266],
                  [1627, 538, 323, 266],
                  [652, 806, 323, 266],
                  [652, 1074, 323, 266],
                  [652, 1342, 323, 266],
                  [652, 1610, 323, 266],
                  [977, 806, 323, 266],
                  [1302, 806, 323, 266],
                  [1627, 806, 323, 266],
                  [977, 1074, 323, 266],
                  [1302, 1074, 323, 266],
                  [1627, 1074, 323, 266],
                  [977, 1342, 323, 266],
                  [977, 1610, 323, 266],
                  [1302, 1342, 323, 266],
                  [1627, 1342, 323, 266],
                  [1302, 1610, 323, 266],
                  [1627, 1610, 323, 266]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41]
               }
            }), new Hilo.TextureAtlas({
               image: this.queue.get("gudu-text-2").content,
               frames: [
                  [2, 2, 323, 266],
                  [327, 2, 323, 266],
                  [652, 2, 323, 266],
                  [977, 2, 323, 266],
                  [1302, 2, 323, 266],
                  [1627, 2, 323, 266],
                  [2, 270, 323, 266],
                  [2, 538, 323, 266],
                  [2, 806, 323, 266],
                  [2, 1074, 323, 266],
                  [2, 1342, 323, 266],
                  [2, 1610, 323, 266],
                  [327, 270, 323, 266],
                  [652, 270, 323, 266],
                  [977, 270, 323, 266],
                  [1302, 270, 323, 266],
                  [1627, 270, 323, 266],
                  [327, 538, 323, 266],
                  [327, 806, 323, 266],
                  [327, 1074, 323, 266],
                  [327, 1342, 323, 266],
                  [327, 1610, 323, 266],
                  [652, 538, 323, 266],
                  [977, 538, 323, 266],
                  [1302, 538, 323, 266],
                  [1627, 538, 323, 266],
                  [652, 806, 323, 266],
                  [652, 1074, 323, 266],
                  [652, 1342, 323, 266],
                  [652, 1610, 323, 266],
                  [977, 806, 323, 266],
                  [1302, 806, 323, 266],
                  [1627, 806, 323, 266],
                  [977, 1074, 323, 266],
                  [1302, 1074, 323, 266],
                  [1627, 1074, 323, 266]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
               }
            })], this.gudu_repeat = new Hilo.TextureAtlas({
               image: this.queue.get("gudu-repeat").content,
               frames: [
                  [1627, 1074, 323, 266],
                  [1302, 1074, 323, 266],
                  [977, 1074, 323, 266],
                  [1627, 806, 323, 266],
                  [1302, 806, 323, 266],
                  [977, 806, 323, 266],
                  [652, 1610, 323, 266],
                  [652, 1342, 323, 266],
                  [652, 1074, 323, 266],
                  [652, 806, 323, 266],
                  [1627, 538, 323, 266],
                  [1302, 538, 323, 266],
                  [977, 538, 323, 266],
                  [652, 538, 323, 266],
                  [327, 1610, 323, 266],
                  [327, 1342, 323, 266],
                  [327, 1074, 323, 266],
                  [327, 806, 323, 266],
                  [327, 538, 323, 266],
                  [1627, 270, 323, 266],
                  [1302, 270, 323, 266],
                  [977, 270, 323, 266],
                  [652, 270, 323, 266],
                  [327, 270, 323, 266],
                  [2, 1610, 323, 266],
                  [2, 1342, 323, 266],
                  [2, 1074, 323, 266],
                  [2, 806, 323, 266],
                  [2, 538, 323, 266],
                  [2, 270, 323, 266],
                  [1627, 2, 323, 266],
                  [1302, 2, 323, 266],
                  [977, 2, 323, 266],
                  [652, 2, 323, 266],
                  [327, 2, 323, 266],
                  [2, 2, 323, 266]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
               }
            }), this.gudu_bihua = new Hilo.TextureAtlas({
               image: this.queue.get("gudu-bihua").content,
               frames: [
                  [58, 261, 54, 35],
                  [2, 261, 54, 35],
                  [170, 224, 54, 35],
                  [114, 224, 54, 35],
                  [58, 224, 54, 35],
                  [2, 224, 54, 35],
                  [170, 187, 54, 35],
                  [114, 187, 54, 35],
                  [58, 187, 54, 35],
                  [2, 187, 54, 35],
                  [170, 150, 54, 35],
                  [114, 150, 54, 35],
                  [58, 150, 54, 35],
                  [2, 150, 54, 35],
                  [170, 113, 54, 35],
                  [114, 113, 54, 35],
                  [58, 113, 54, 35],
                  [2, 113, 54, 35],
                  [170, 76, 54, 35],
                  [114, 76, 54, 35],
                  [58, 76, 54, 35],
                  [2, 76, 54, 35],
                  [170, 39, 54, 35],
                  [114, 39, 54, 35],
                  [58, 39, 54, 35],
                  [2, 39, 54, 35],
                  [170, 2, 54, 35],
                  [114, 2, 54, 35],
                  [58, 2, 54, 35],
                  [2, 2, 54, 35]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
               }
            }), this.gudu_static = new Hilo.TextureAtlas({
               image: this.queue.get("gudu-static").content,
               frames: [
                  [2, 2, 323, 266],
                  [327, 2, 70, 46]
               ]
            }), this.peiban_star = this.queue.get("peiban-star").content, this.peiban_text = new Hilo.TextureAtlas({
               image: this.queue.get("peiban-text").content,
               frames: [
                  [1, 1, 149, 261],
                  [1, 264, 149, 261]
               ]
            }), this.peiban_trans = [new Hilo.TextureAtlas({
               image: this.queue.get("peiban-trans-0").content,
               frames: [
                  [1, 1, 149, 261],
                  [1, 264, 149, 261],
                  [1, 527, 149, 261],
                  [1, 790, 149, 261],
                  [1, 1053, 149, 261],
                  [1, 1316, 149, 261],
                  [1, 1579, 149, 261],
                  [152, 1, 149, 261],
                  [152, 264, 149, 261],
                  [152, 527, 149, 261],
                  [152, 790, 149, 261],
                  [152, 1053, 149, 261],
                  [152, 1316, 149, 261],
                  [152, 1579, 149, 261],
                  [303, 1, 149, 261],
                  [454, 1, 149, 261],
                  [605, 1, 149, 261],
                  [756, 1, 149, 261],
                  [907, 1, 149, 261],
                  [1058, 1, 149, 261],
                  [1209, 1, 149, 261],
                  [1360, 1, 149, 261],
                  [1511, 1, 149, 261],
                  [1662, 1, 149, 261],
                  [1813, 1, 149, 261],
                  [303, 264, 149, 261],
                  [303, 527, 149, 261],
                  [303, 790, 149, 261],
                  [303, 1053, 149, 261],
                  [303, 1316, 149, 261],
                  [303, 1579, 149, 261],
                  [454, 264, 149, 261],
                  [454, 527, 149, 261],
                  [454, 790, 149, 261],
                  [454, 1053, 149, 261],
                  [454, 1316, 149, 261],
                  [454, 1579, 149, 261],
                  [605, 264, 149, 261],
                  [756, 264, 149, 261],
                  [907, 264, 149, 261],
                  [1058, 264, 149, 261],
                  [1209, 264, 149, 261],
                  [1360, 264, 149, 261],
                  [1511, 264, 149, 261],
                  [1662, 264, 149, 261],
                  [1813, 264, 149, 261],
                  [605, 527, 149, 261],
                  [605, 790, 149, 261],
                  [605, 1053, 149, 261],
                  [605, 1316, 149, 261],
                  [605, 1579, 149, 261],
                  [756, 527, 149, 261],
                  [907, 527, 149, 261],
                  [1058, 527, 149, 261],
                  [1209, 527, 149, 261],
                  [1360, 527, 149, 261],
                  [1511, 527, 149, 261],
                  [1662, 527, 149, 261],
                  [1813, 527, 149, 261],
                  [756, 790, 149, 261],
                  [756, 1053, 149, 261],
                  [756, 1316, 149, 261],
                  [756, 1579, 149, 261],
                  [907, 790, 149, 261],
                  [907, 1053, 149, 261],
                  [907, 1316, 149, 261],
                  [907, 1579, 149, 261],
                  [1058, 790, 149, 261],
                  [1209, 790, 149, 261],
                  [1360, 790, 149, 261],
                  [1511, 790, 149, 261],
                  [1662, 790, 149, 261],
                  [1813, 790, 149, 261],
                  [1058, 1053, 149, 261],
                  [1058, 1316, 149, 261],
                  [1058, 1579, 149, 261],
                  [1209, 1053, 149, 261],
                  [1209, 1316, 149, 261],
                  [1209, 1579, 149, 261],
                  [1360, 1053, 149, 261],
                  [1511, 1053, 149, 261],
                  [1662, 1053, 149, 261],
                  [1813, 1053, 149, 261],
                  [1360, 1316, 149, 261],
                  [1360, 1579, 149, 261],
                  [1511, 1316, 149, 261],
                  [1511, 1579, 149, 261],
                  [1662, 1316, 149, 261],
                  [1813, 1316, 149, 261],
                  [1662, 1579, 149, 261],
                  [1813, 1579, 149, 261]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]
               }
            }), new Hilo.TextureAtlas({
               image: this.queue.get("peiban-trans-1").content,
               frames: [
                  [1, 1, 149, 261],
                  [1, 264, 149, 261],
                  [1, 527, 149, 261],
                  [152, 1, 149, 261],
                  [152, 264, 149, 261],
                  [152, 527, 149, 261],
                  [303, 1, 149, 261],
                  [303, 264, 149, 261],
                  [303, 527, 149, 261],
                  [454, 1, 149, 261],
                  [454, 264, 149, 261],
                  [454, 527, 149, 261],
                  [605, 1, 149, 261],
                  [605, 264, 149, 261],
                  [605, 527, 149, 261],
                  [756, 1, 149, 261],
                  [756, 264, 149, 261],
                  [756, 527, 149, 261],
                  [907, 1, 149, 261],
                  [907, 264, 149, 261],
                  [907, 527, 149, 261],
                  [1058, 1, 149, 261],
                  [1058, 264, 149, 261]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
               }
            })], this.peiban_repeat = [new Hilo.TextureAtlas({
               image: this.queue.get("peiban-repeat-0").content,
               frames: [
                  [1, 1, 149, 261],
                  [1, 264, 149, 261],
                  [1, 527, 149, 261],
                  [1, 790, 149, 261],
                  [1, 1053, 149, 261],
                  [1, 1316, 149, 261],
                  [1, 1579, 149, 261],
                  [152, 1, 149, 261],
                  [152, 264, 149, 261],
                  [152, 527, 149, 261],
                  [152, 790, 149, 261],
                  [152, 1053, 149, 261],
                  [152, 1316, 149, 261],
                  [152, 1579, 149, 261],
                  [303, 1, 149, 261],
                  [454, 1, 149, 261],
                  [605, 1, 149, 261],
                  [756, 1, 149, 261],
                  [907, 1, 149, 261],
                  [1058, 1, 149, 261],
                  [1209, 1, 149, 261],
                  [1360, 1, 149, 261],
                  [1511, 1, 149, 261],
                  [1662, 1, 149, 261],
                  [1813, 1, 149, 261],
                  [303, 264, 149, 261],
                  [303, 527, 149, 261],
                  [303, 790, 149, 261],
                  [303, 1053, 149, 261],
                  [303, 1316, 149, 261],
                  [303, 1579, 149, 261],
                  [454, 264, 149, 261],
                  [454, 527, 149, 261],
                  [454, 790, 149, 261],
                  [454, 1053, 149, 261],
                  [454, 1316, 149, 261],
                  [454, 1579, 149, 261],
                  [605, 264, 149, 261],
                  [756, 264, 149, 261],
                  [907, 264, 149, 261],
                  [1058, 264, 149, 261],
                  [1209, 264, 149, 261],
                  [1360, 264, 149, 261],
                  [1511, 264, 149, 261],
                  [1662, 264, 149, 261],
                  [1813, 264, 149, 261],
                  [605, 527, 149, 261],
                  [605, 790, 149, 261],
                  [605, 1053, 149, 261],
                  [605, 1316, 149, 261],
                  [605, 1579, 149, 261],
                  [756, 527, 149, 261],
                  [907, 527, 149, 261],
                  [1058, 527, 149, 261],
                  [1209, 527, 149, 261],
                  [1360, 527, 149, 261],
                  [1511, 527, 149, 261],
                  [1662, 527, 149, 261],
                  [1813, 527, 149, 261],
                  [756, 790, 149, 261],
                  [756, 1053, 149, 261],
                  [756, 1316, 149, 261],
                  [756, 1579, 149, 261],
                  [907, 790, 149, 261],
                  [907, 1053, 149, 261],
                  [907, 1316, 149, 261],
                  [907, 1579, 149, 261],
                  [1058, 790, 149, 261],
                  [1209, 790, 149, 261],
                  [1360, 790, 149, 261],
                  [1511, 790, 149, 261],
                  [1662, 790, 149, 261],
                  [1813, 790, 149, 261],
                  [1058, 1053, 149, 261],
                  [1058, 1316, 149, 261],
                  [1058, 1579, 149, 261],
                  [1209, 1053, 149, 261],
                  [1209, 1316, 149, 261],
                  [1209, 1579, 149, 261],
                  [1360, 1053, 149, 261],
                  [1511, 1053, 149, 261],
                  [1662, 1053, 149, 261],
                  [1813, 1053, 149, 261],
                  [1360, 1316, 149, 261],
                  [1360, 1579, 149, 261],
                  [1511, 1316, 149, 261],
                  [1511, 1579, 149, 261],
                  [1662, 1316, 149, 261],
                  [1813, 1316, 149, 261],
                  [1662, 1579, 149, 261],
                  [1813, 1579, 149, 261]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]
               }
            }), new Hilo.TextureAtlas({
               image: this.queue.get("peiban-repeat-1").content,
               frames: [
                  [1, 1, 149, 261],
                  [1, 264, 149, 261],
                  [1, 527, 149, 261],
                  [1, 790, 149, 261],
                  [1, 1053, 149, 261],
                  [1, 1316, 149, 261],
                  [1, 1579, 149, 261],
                  [152, 1, 149, 261],
                  [152, 264, 149, 261],
                  [152, 527, 149, 261],
                  [152, 790, 149, 261],
                  [152, 1053, 149, 261],
                  [152, 1316, 149, 261],
                  [152, 1579, 149, 261],
                  [303, 1, 149, 261],
                  [454, 1, 149, 261],
                  [605, 1, 149, 261],
                  [756, 1, 149, 261],
                  [907, 1, 149, 261],
                  [1058, 1, 149, 261],
                  [1209, 1, 149, 261],
                  [1360, 1, 149, 261],
                  [1511, 1, 149, 261],
                  [1662, 1, 149, 261],
                  [303, 264, 149, 261],
                  [303, 527, 149, 261],
                  [303, 790, 149, 261],
                  [303, 1053, 149, 261],
                  [303, 1316, 149, 261],
                  [303, 1579, 149, 261],
                  [454, 264, 149, 261],
                  [454, 527, 149, 261],
                  [454, 790, 149, 261],
                  [454, 1053, 149, 261],
                  [454, 1316, 149, 261],
                  [454, 1579, 149, 261],
                  [605, 264, 149, 261],
                  [756, 264, 149, 261],
                  [907, 264, 149, 261],
                  [1058, 264, 149, 261],
                  [1209, 264, 149, 261],
                  [1360, 264, 149, 261],
                  [1511, 264, 149, 261],
                  [1662, 264, 149, 261],
                  [605, 527, 149, 261],
                  [605, 790, 149, 261],
                  [605, 1053, 149, 261],
                  [605, 1316, 149, 261],
                  [605, 1579, 149, 261],
                  [756, 527, 149, 261],
                  [756, 790, 149, 261],
                  [756, 1053, 149, 261],
                  [756, 1316, 149, 261],
                  [756, 1579, 149, 261],
                  [907, 527, 149, 261],
                  [1058, 527, 149, 261],
                  [1209, 527, 149, 261],
                  [1360, 527, 149, 261],
                  [1511, 527, 149, 261],
                  [1662, 527, 149, 261],
                  [907, 790, 149, 261],
                  [907, 1053, 149, 261],
                  [907, 1316, 149, 261],
                  [907, 1579, 149, 261],
                  [1058, 790, 149, 261],
                  [1209, 790, 149, 261],
                  [1360, 790, 149, 261],
                  [1511, 790, 149, 261],
                  [1662, 790, 149, 261],
                  [1058, 1053, 149, 261],
                  [1058, 1316, 149, 261],
                  [1058, 1579, 149, 261],
                  [1209, 1053, 149, 261],
                  [1209, 1316, 149, 261],
                  [1209, 1579, 149, 261],
                  [1360, 1053, 149, 261],
                  [1511, 1053, 149, 261],
                  [1662, 1053, 149, 261],
                  [1360, 1316, 149, 261],
                  [1360, 1579, 149, 261],
                  [1511, 1316, 149, 261],
                  [1511, 1579, 149, 261]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81]
               }
            })], this.ai_static = this.queue.get("ai-static").content, this.ai_repeat = [new Hilo.TextureAtlas({
               image: this.queue.get("ai-repeat-0").content,
               frames: [
                  [2, 2, 241, 300],
                  [2, 304, 241, 300],
                  [2, 606, 241, 300],
                  [2, 908, 241, 300],
                  [2, 1210, 241, 300],
                  [2, 1512, 241, 300],
                  [245, 2, 241, 300],
                  [488, 2, 241, 300],
                  [731, 2, 241, 300],
                  [974, 2, 241, 300],
                  [1217, 2, 241, 300],
                  [1460, 2, 241, 300],
                  [1703, 2, 241, 300],
                  [245, 304, 241, 300],
                  [245, 606, 241, 300],
                  [245, 908, 241, 300],
                  [245, 1210, 241, 300],
                  [245, 1512, 241, 300],
                  [488, 304, 241, 300],
                  [731, 304, 241, 300],
                  [974, 304, 241, 300],
                  [1217, 304, 241, 300],
                  [1460, 304, 241, 300],
                  [1703, 304, 241, 300],
                  [488, 606, 241, 300],
                  [488, 908, 241, 300],
                  [488, 1210, 241, 300],
                  [488, 1512, 241, 300],
                  [731, 606, 241, 300],
                  [974, 606, 241, 300],
                  [1217, 606, 241, 300],
                  [1460, 606, 241, 300],
                  [1703, 606, 241, 300],
                  [731, 908, 241, 300],
                  [731, 1210, 241, 300],
                  [731, 1512, 241, 300],
                  [974, 908, 241, 300],
                  [974, 1210, 241, 300],
                  [974, 1512, 241, 300],
                  [1217, 908, 241, 300],
                  [1460, 908, 241, 300],
                  [1703, 908, 241, 300],
                  [1217, 1210, 241, 300],
                  [1217, 1512, 241, 300],
                  [1460, 1210, 241, 300],
                  [1703, 1210, 241, 300],
                  [1460, 1512, 241, 300],
                  [1703, 1512, 241, 300]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]
               }
            }), new Hilo.TextureAtlas({
               image: this.queue.get("ai-repeat-1").content,
               frames: [
                  [2, 2, 241, 300],
                  [2, 304, 241, 300],
                  [2, 606, 241, 300],
                  [2, 908, 241, 300],
                  [2, 1210, 241, 300],
                  [2, 1512, 241, 300],
                  [245, 2, 241, 300],
                  [488, 2, 241, 300],
                  [731, 2, 241, 300],
                  [974, 2, 241, 300],
                  [1217, 2, 241, 300],
                  [1460, 2, 241, 300],
                  [1703, 2, 241, 300],
                  [245, 304, 241, 300],
                  [245, 606, 241, 300],
                  [245, 908, 241, 300],
                  [245, 1210, 241, 300],
                  [245, 1512, 241, 300],
                  [488, 304, 241, 300],
                  [731, 304, 241, 300],
                  [974, 304, 241, 300],
                  [1217, 304, 241, 300],
                  [1460, 304, 241, 300],
                  [1703, 304, 241, 300],
                  [488, 606, 241, 300],
                  [488, 908, 241, 300],
                  [488, 1210, 241, 300],
                  [488, 1512, 241, 300],
                  [731, 606, 241, 300],
                  [974, 606, 241, 300],
                  [1217, 606, 241, 300],
                  [1460, 606, 241, 300],
                  [1703, 606, 241, 300],
                  [731, 908, 241, 300],
                  [731, 1210, 241, 300],
                  [731, 1512, 241, 300],
                  [974, 908, 241, 300],
                  [974, 1210, 241, 300],
                  [974, 1512, 241, 300],
                  [1217, 908, 241, 300],
                  [1460, 908, 241, 300],
                  [1703, 908, 241, 300]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41]
               }
            })], this.xingfu_text = new Hilo.TextureAtlas({
               image: this.queue.get("xingfu-text").content,
               frames: [
                  [103, 2, 96, 206],
                  [2, 2, 99, 206]
               ],
               sprites: {
                  xxx: [0, 1]
               }
            }), this.xing_repeat = new Hilo.TextureAtlas({
               image: this.queue.get("xing-repeat").content,
               frames: [
                  [884, 418, 96, 206],
                  [786, 418, 96, 206],
                  [688, 418, 96, 206],
                  [590, 626, 96, 206],
                  [590, 418, 96, 206],
                  [492, 626, 96, 206],
                  [492, 418, 96, 206],
                  [884, 210, 96, 206],
                  [786, 210, 96, 206],
                  [688, 210, 96, 206],
                  [590, 210, 96, 206],
                  [492, 210, 96, 206],
                  [394, 626, 96, 206],
                  [394, 418, 96, 206],
                  [394, 210, 96, 206],
                  [296, 626, 96, 206],
                  [296, 418, 96, 206],
                  [296, 210, 96, 206],
                  [884, 2, 96, 206],
                  [786, 2, 96, 206],
                  [688, 2, 96, 206],
                  [590, 2, 96, 206],
                  [492, 2, 96, 206],
                  [394, 2, 96, 206],
                  [296, 2, 96, 206],
                  [198, 626, 96, 206],
                  [198, 418, 96, 206],
                  [198, 210, 96, 206],
                  [198, 2, 96, 206],
                  [100, 626, 96, 206],
                  [100, 418, 96, 206],
                  [100, 210, 96, 206],
                  [100, 2, 96, 206],
                  [2, 626, 96, 206],
                  [2, 418, 96, 206],
                  [2, 210, 96, 206],
                  [2, 2, 96, 206]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
               }
            }), this.fu_repeat = new Hilo.TextureAtlas({
               image: this.queue.get("fu-repeat").content,
               frames: [
                  [911, 418, 99, 206],
                  [810, 418, 99, 206],
                  [709, 418, 99, 206],
                  [608, 626, 99, 206],
                  [608, 418, 99, 206],
                  [507, 626, 99, 206],
                  [507, 418, 99, 206],
                  [911, 210, 99, 206],
                  [810, 210, 99, 206],
                  [709, 210, 99, 206],
                  [608, 210, 99, 206],
                  [507, 210, 99, 206],
                  [406, 626, 99, 206],
                  [406, 418, 99, 206],
                  [406, 210, 99, 206],
                  [305, 626, 99, 206],
                  [305, 418, 99, 206],
                  [305, 210, 99, 206],
                  [911, 2, 99, 206],
                  [810, 2, 99, 206],
                  [709, 2, 99, 206],
                  [608, 2, 99, 206],
                  [507, 2, 99, 206],
                  [406, 2, 99, 206],
                  [305, 2, 99, 206],
                  [204, 626, 99, 206],
                  [204, 418, 99, 206],
                  [204, 210, 99, 206],
                  [204, 2, 99, 206],
                  [103, 626, 99, 206],
                  [103, 418, 99, 206],
                  [103, 210, 99, 206],
                  [103, 2, 99, 206],
                  [2, 626, 99, 206],
                  [2, 418, 99, 206],
                  [2, 210, 99, 206],
                  [2, 2, 99, 206]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
               }
            }), this.guide_s7 = this.queue.get("guide-s7").content, this.cy = new Hilo.TextureAtlas({
               image: this.queue.get("cy").content,
               frames: [
                  [0, 0, 40, 40],
                  [40, 0, 40, 40],
                  [80, 0, 40, 40],
                  [0, 40, 40, 40],
                  [40, 40, 40, 40],
                  [80, 40, 40, 40],
                  [0, 80, 40, 40],
                  [40, 80, 40, 40]
               ]
            }), this.ty = new Hilo.TextureAtlas({
               image: this.queue.get("ty").content,
               frames: [
                  [0, 93, 111, 58],
                  [0, 11, 21, 14],
                  [94, 35, 20, 58],
                  [0, 0, 23, 4],
                  [63, 35, 31, 36],
                  [37, 11, 32, 23],
                  [34, 35, 8, 32],
                  [60, 0, 26, 5],
                  [21, 11, 16, 20],
                  [69, 11, 48, 24],
                  [35, 0, 25, 5],
                  [42, 35, 21, 35],
                  [17, 35, 10, 26],
                  [0, 35, 17, 25],
                  [27, 35, 7, 31],
                  [23, 0, 12, 4],
                  [86, 0, 28, 11]
               ]
            }), this.nuli = this.queue.get("nuli").content, this.nuli_v2 = new Hilo.TextureAtlas({
               image: this.queue.get("nuli-v2").content,
               frames: [
                  [0, 0, 79, 95],
                  [79, 0, 83, 95]
               ]
            }), this.ni_copy = new Hilo.TextureAtlas({
               image: this.queue.get("ni-copy").content,
               frames: [
                  [0, 0, 50, 50],
                  [50, 0, 50, 50]
               ],
               sprites: {
                  xxx: [0, 1]
               }
            }), this.guide_right = this.queue.get("guide-right").content, this.guide_top = this.queue.get("guide-top").content, this.guide_long = this.queue.get("guide-long").content, this.jianchi = this.queue.get("jianchi").content, this.mengxiang_end_trans = new Hilo.TextureAtlas({
               image: this.queue.get("mengxiang-end-trans").content,
               frames: [
                  [524, 1811, 259, 199],
                  [524, 1610, 259, 199],
                  [524, 1409, 259, 199],
                  [263, 1811, 259, 199],
                  [263, 1610, 259, 199],
                  [263, 1409, 259, 199],
                  [524, 1208, 259, 199],
                  [263, 1208, 259, 199],
                  [2, 1811, 259, 199],
                  [2, 1610, 259, 199],
                  [2, 1409, 259, 199],
                  [2, 1208, 259, 199],
                  [524, 1007, 259, 199],
                  [263, 1007, 259, 199],
                  [2, 1007, 259, 199],
                  [524, 806, 259, 199],
                  [263, 806, 259, 199],
                  [2, 806, 259, 199],
                  [524, 605, 259, 199],
                  [263, 605, 259, 199],
                  [2, 605, 259, 199],
                  [524, 404, 259, 199],
                  [263, 404, 259, 199],
                  [2, 404, 259, 199],
                  [524, 203, 259, 199],
                  [263, 203, 259, 199],
                  [2, 203, 259, 199],
                  [524, 2, 259, 199],
                  [263, 2, 259, 199],
                  [2, 2, 259, 199]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
               }
            }), this.mengxiang_end_repeat = new Hilo.TextureAtlas({
               image: this.queue.get("mengxiang-end-repeat").content,
               frames: [
                  [524, 1007, 259, 199],
                  [524, 1007, 259, 199],
                  [524, 806, 259, 199],
                  [1568, 605, 259, 199],
                  [1307, 605, 259, 199],
                  [1046, 605, 259, 199],
                  [785, 605, 259, 199],
                  [524, 605, 259, 199],
                  [1568, 404, 259, 199],
                  [1307, 404, 259, 199],
                  [1046, 404, 259, 199],
                  [785, 404, 259, 199],
                  [524, 404, 259, 199],
                  [263, 1811, 259, 199],
                  [263, 1610, 259, 199],
                  [263, 1409, 259, 199],
                  [263, 1208, 259, 199],
                  [263, 1007, 259, 199],
                  [263, 806, 259, 199],
                  [263, 605, 259, 199],
                  [263, 404, 259, 199],
                  [1568, 203, 259, 199],
                  [1307, 203, 259, 199],
                  [1568, 203, 259, 199],
                  [1046, 203, 259, 199],
                  [785, 203, 259, 199],
                  [524, 203, 259, 199],
                  [263, 203, 259, 199],
                  [2, 1811, 259, 199],
                  [2, 1610, 259, 199],
                  [2, 1409, 259, 199],
                  [2, 1208, 259, 199],
                  [2, 1007, 259, 199],
                  [2, 806, 259, 199],
                  [2, 605, 259, 199],
                  [2, 404, 259, 199],
                  [2, 203, 259, 199],
                  [1568, 2, 259, 199],
                  [1307, 2, 259, 199],
                  [1046, 2, 259, 199],
                  [785, 2, 259, 199],
                  [524, 2, 259, 199],
                  [263, 2, 259, 199],
                  [2, 2, 259, 199],
                  [524, 806, 259, 199]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44]
               }
            }), this.man_colors = new Hilo.TextureAtlas({
               image: this.queue.get("man-colors").content,
               frames: [
                  [54, 262, 50, 50],
                  [2, 418, 50, 50],
                  [2, 366, 50, 50],
                  [2, 314, 50, 50],
                  [2, 262, 50, 50],
                  [158, 210, 50, 50],
                  [106, 210, 50, 50],
                  [54, 210, 50, 50],
                  [2, 210, 50, 50],
                  [158, 158, 50, 50],
                  [106, 158, 50, 50],
                  [54, 158, 50, 50],
                  [2, 158, 50, 50],
                  [158, 106, 50, 50],
                  [106, 106, 50, 50],
                  [54, 106, 50, 50],
                  [2, 106, 50, 50],
                  [158, 54, 50, 50],
                  [106, 54, 50, 50],
                  [54, 54, 50, 50],
                  [2, 54, 50, 50],
                  [158, 2, 50, 50],
                  [106, 2, 50, 50],
                  [54, 2, 50, 50],
                  [2, 2, 50, 50]
               ],
               sprites: {
                  xxx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
               }
            }), this.hideLoading();
            this.queue.off("complete"), this.fire("complete")
         },
         hideLoading: function() {
            clearInterval(this.clock), this.elem.html(100), (0, r.setTimeout)(function() {
               (0, s.
            default)("#loading").hide()
            }, 250)
         }
      })
   }(window.game)
}, 
403: function(t, e, i) {
   "use strict";

   function n(t) {
      function e() {
         r = a.checkCollision(a.manTop), r && "wallTop" === r.target.id ? (a.isMovingX = !1, a.isMovingY = !1, a.isFall2Top = !0, a.y = r.target.y + r.target.height - a.manTop.height, a.clickCount = 0, a.isFall2Top = !0, t.isTouchTop = !0, t.s8.manCopy && t.s8.manCopy.goto(1, !0)) : a.isMovingX = !0;
         var e = +new Date - a.jumpStartTime,
            i = a.initVelocity * e - .5 * a.gravity * e * e,
            n = a.jumpStartX - i;
         a.vx = a.initVelocity - a.gravity * e, o = a.checkCollision(a.manRight), a.vx < 0 && o && "wallRight" === o.target.id ? (a.isMovingX = !1, a.x = o.x - a.man.width - a.manRight.width, a.clickCount = 0, a.vx = 0, a.isMovingY = !1, a.stepLength = a.initStepLength) : a.x = n >> 0
      }

      function i() {
         a.isMovingX = !0;
         var t = +new Date - a.jumpStartTime,
            e = a.initVelocity * t - .5 * a.gravity * t * t,
            i = a.jumpStartY + e;
         a.vy = a.initVelocity - a.gravity * t, r = a.checkCollision(a.manTop), a.vy < 0 && r && "wallTop" === r.target.id ? (a.isMovingX = !1, a.isMovingY = !1, a.y = r.y + r.target.height - a.manTop.height, a.clickCount = 0, a.vy = 0, a.stepLength = a.initStepLength, s() && n()) : (a.y = i >> 0, s() && n())
      }

      function n() {
         t.man.x = t.MIDDLE_SCENE, t.isDisabled = !0, t.s8 && t.s8.fall2Tuoyan()
      }

      function s() {
         return a.x <= t.MIDDLE_SCENE + 4 && a.x >= t.MIDDLE_SCENE - 4
      }
      var r, a = t.man,
         o = a.checkCollision(a.manRight);
      a.hitTestObject(t.s8.wallTop, !0) && (r = {
         target: t.s8.wallTop
      }), a.isMovingX &&
      function() {
         t.isTouchTop ? s() ? (a.isMovingX = !1, n()) : (a.x -= a.stepLength, a.isFall2Top = !0, t.s8.manCopy && t.s8.manCopy.goto(1, !0)) : r && "wallTop" === r.target.id ? (a.y = r.target.height - a.manTop.height, t.isTouchTop = !0) : (o && "wallRight" === o.target.id && (a.x = o.x - a.man.width - a.manRight.width), a.y -= a.stepLength)
      }(), a.isMovingY &&
      function() {
         a.isFall2Top ? i() : e()
      }()
   }

   function s(t) {
      var e = t.man;
      if (t.isFreeWalk && e.x >= t.MIDDLE_SCENE && e.x < 600 && 36 === e.y && (e.jumpSomewhere(e.jumpStartX, e.jumpStartY, t.MIDDLE_SCENE, 36, -1), t.isReady2Fall = !0), t.isFreeWalk && t.s7 && e.x + e.width >= t.s7.block2.x + t.s7.x && e.x <= t.s7.block2.x + t.s7.block2.width + t.s7.x) {
         if (t.s7.isShooted) return;
         t.s7.isShooted = !0;
         r()
      }
   }

   function r() {
      function t() {
         i.isDisabled = !1, i.s8.manCopy.alpha = 1, i.man.alpha = 0
      }

      function e() {
         i.isDisabled = !0
      }
      var i = game,
         n = i.man,
         s = {
            x: n.jumpStartX,
            y: n.jumpStartY
         },
         r = {
            x: 656,
            y: 344
         };
      n.isMovingY = !1;
      var o = {
         x: s.x + r.x >> 1,
         y: 190
      },
         l = {
            x: o.x + s.x >> 1,
            y: (o.y + s.y >> 1) - 40
         },
         h = {
            x: o.x + r.x >> 1,
            y: (o.y + r.y >> 1) - 40
         };
      new TimelineMax({
         onComplete: t,
         onUpdate: e
      }).to(n, .11, a({}, l, {
         ease: Power0.easeIn
      })).to(n, .12, a({}, o, {
         ease: Power0.easeIn
      })).to(n, .11, a({}, h, {
         ease: Power0.easeOut
      })).to(n, .12, a({}, r, {
         ease: Power0.easeOut
      }))
   }
   Object.defineProperty(e, "__esModule", {
      value: !0
   });
   var a = Object.assign ||
   function(t) {
      for (var e = 1; e < arguments.length; e++) {
         var i = arguments[e];
         for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
      }
      return t
   };
   e.
default = n, e.actionCreativeScene = n, e.jump2Target = s
}, 
404: function(t, e, i) {
   "use strict";
   var n = i(403),
      s = i(13),
      r = i(58),
      a = function(t) {
         return t && t.__esModule ? t : {
         default:
            t
         }
      }(r);
   !
   function(t) {
      var e = t.Man = Hilo.Class.create({
         Extends: Hilo.Container,
         constructor: function(i) {
            e.superclass.constructor.call(this, i), this.gravity = .003, this.updateJumpPoint(0), this.initStepLength = 5, this.init(i), this.MIDDLE_SCENE = t.width - this.man.width >> 1
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
         init: function(e) {
            var i = t.COVER_WIDTH;
            this.man = new Hilo.Bitmap({
               id: "man",
               x: i,
               y: i,
               image: t.asset.man
            }), this.manTop = new Hilo.View({
               id: "manTop",
               x: i,
               y: 0,
               width: this.man.width,
               height: i,
               background: "#ccc",
               visible: !1
            }), this.manRight = new Hilo.View({
               id: "manRight",
               x: this.man.width + i,
               y: i,
               width: i,
               height: this.man.height,
               background: "#ccc",
               visible: !1
            }), this.manBottom = new Hilo.View({
               id: "manBottom",
               x: i,
               y: this.man.height + i,
               width: this.man.width,
               height: i,
               background: "#ccc",
               visible: !1
            }), this.manLeft = new Hilo.View({
               id: "manLeft",
               x: 0,
               y: i,
               width: i,
               height: this.man.height,
               background: "#ccc",
               visible: !1
            }), this.width = this.man.width + 2 * i, this.height = this.man.height + 2 * i, this.addChild(this.man, this.manTop, this.manRight, this.manBottom, this.manLeft)
         },
         getReady: function() {
            this.x = this.startX, this.y = this.startY
         },
         changeMan: function(e) {
            e.x = t.COVER_WIDTH, e.y = t.COVER_WIDTH, this.removeChild(this.man), this.addChild(e), this.man = e
         },
         updateDelta: function(t) {
            this.landingManPos = this.x, this.landingBlockPos = t.target.x, this.delta = this.landingManPos - this.landingBlockPos >> 0, this.offset = 0
         },
         checkCollision: function(e) {
            e = e || this;
            var i = t.collisionSet.length;
            if (0 === i) return null;
            for (var n, s = 0; s < i; ++s) if (n = t.collisionSet[s], e.hitTestObject(n, !0)) return {
               target: n,
               x: n.x,
               y: n.y
            };
            return null
         },
         updateJumpPoint: function(t) {
            if (!(t < 0)) {
               this.stepLength = 5;
               var e = 200;
               e = t > 250 ? 200 : 0 | Math.sqrt(90 * t + 4e4), e != this.jumpHeight && (this.jumpHeight = e, this.initVelocity = Math.sqrt(2 * this.jumpHeight * this.gravity), this.riseTime = Math.sqrt(2 * this.jumpHeight / this.gravity))
            }
         },
         calcStepLength: function() {
            var e = Math.max(t.ticker.getMeasuredFPS(), 15),
               i = 6 * this.jumpHeight / 50 - 19 | 0;
            this.stepLength = i + (60 - e) / 4 | 0
         },
         resetStepLength: function() {
            this.stepLength = 5
         },
         jumpSomewhere: function(e, i, n, s) {
            var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
               a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
               o = n - e,
               l = s - i;
            if (!(this.jumpHeight + l < 0)) {
               var h = Math.sqrt(2 * (this.jumpHeight + l) / this.gravity),
                  c = this.riseTime + h,
                  u = o / c,
                  d = t.ticker.getMeasuredFPS() || 30;
               this.stepLength = a * r * u * 1e3 / d, console.log("æ‰§è¡Œ è·³è·ƒåˆ°å®šç‚¹, æ­¥é•¿ä¸ºï¼š", this.stepLength)
            }
         },
         detectFreeFall: function() {
            if (!this.isMovingX && !this.isMovingY && !this.isJumpHit) {
               var e = this.checkCollision(this.manBottom);
               if (e) this.lastStandTime = +new Date, this.lastStandY = this.y, this.vy < 0 && (this.y = e.y - this.man.height - this.manTop.height >> 0), this.vy = 0, this.isDisabled = !1;
               else {
                  var i = +new Date - this.lastStandTime,
                     n = .5 * this.gravity * i * i >> 0,
                     s = this.lastStandY + n;
                  this.vy = -this.gravity * i, this.y = s, t.isDisabled = !0
               }
            }
         },
         longPress: function() {
            t.isDisabled || this.isMovingY || (this.isMovingX = !0, this.isLongPress = !0, this.resetStepLength())
         },
         shortTouch: function(e) {
            this.clickCount > 0 || (++this.clickCount, t.isDisabled || t.isNoShortClick || (this.isMovingY = !0, this.calcStepLength(), this.jumpStartX = this.x, this.jumpStartY = this.y, this.jumpStartTime = e, (0, n.jump2Target)(t)))
         },
         moveX: function() {
            var e, i, n, s, r;
            if (e = this.checkCollision(this.manRight), i = this.checkCollision(this.manBottom), e && (this.isMovingX = !1, this.x -= this.stepLength), i) this.lastStandTime = +new Date, this.lastStandY = this.y, this.isSlideFall = !1, this.vy < 0 && (this.y = i.y - this.man.height - this.manTop.height >> 0), this.vy = 0;
            else {
               if (0 === t.firstTime) return void++t.firstTime;
               n = this.lastStandTime ? +new Date - this.lastStandTime : 0, s = this.gravity * n * n >> 1, this.vy = -this.gravity * n, r = this.lastStandY + s, this.y = r, this.isSlideFall = !0
            }(this.x < this.MIDDLE_SCENE || t.isFreeWalk) && (this.x += this.stepLength)
         },
         moveY: function(e) {
            var i, n, s, r, o, l;
            if (this.isMovingX = !0, i = +new Date - this.jumpStartTime, n = i + e, s = this.initVelocity * i - (this.gravity * i * i >> 1), o = this.jumpStartY - s | 0, this.vy = this.initVelocity - this.gravity * i, l = this.checkCollision(this.manBottom), !t.isFreeWalk && this.vy < 0 && !l) {
               r = (this.gravity * e * (i + n) >> 1) - this.initVelocity * e | 0;
               for (var h, c, u, d = 0, p = t.collisionSet.length, f = this.x + this.manLeft.width, m = o + this.man.height - this.manBottom.height; d < p; ++d) if (h = t.collisionSet[d], c = a.
            default.offset(h), f >= c.x && f <= c.x + h.width && (u = c.y - m, r - u > 0)) {
                  o = c.y - this.man.height - this.manBottom.height, this.vy = 0, this.isMovingY = !1, this.isMovingX = !1, this.clickCount = 0;
                  break
               }
            }
            this.vy < 0 && l ? (this.y = l.y - this.man.height - this.manBottom.height, this.vy = 0, this.isMovingX = !1, this.isMovingY = !1, this.clickCount = 0) : this.y = o >> 0
         },
         onUpdate: function(e) {
            this.isDead || (t.isCreativeEnable ? (0, n.actionCreativeScene)(t) : ((this.isMovingX || this.isSlideFall) && this.moveX(), this.isMovingY && this.moveY(e)), (this.y >= t.height || this.x >= t.width || this.x <= 0 || isNaN(this.x) || isNaN(this.y) || this.y <= -30) && (this.isDead = !0, console.log("==> æŒ‚äº†")))
         },
         blink: function() {
            this.blinkTween && this.blinkTween.kill();
            var t = {
               o: 1
            },
               e = this.man;
            this.blinkTween = s.TweenMax.to(t, .3, {
               o: 0,
               repeat: 3,
               yoyo: !0,
               onUpdate: function() {
                  e.alpha = t.o
               }
            })
         }
      })
   }(window.game)
}, 
405: function(t, e, i) {
   "use strict";

   function n(t) {
      return t && t.__esModule ? t : {
      default:
         t
      }
   }
   var s = Object.assign ||
   function(t) {
      for (var e = 1; e < arguments.length; e++) {
         var i = arguments[e];
         for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
      }
      return t
   }, r = i(67), a = n(r), o = i(60), l = n(o), h = i(13), c = i(206);
   !
   function(t) {
      var e = t.S1 = Hilo.Class.create({
         Extends: a.
      default,
         constructor:


         function(t) {
            t.width = 590, e.superclass.constructor.apply(this, arguments)
         },
         shortcut: function() {},
         onRecoverCurrent: function() {
            return this.x = -180, t.man.x = t.man.MIDDLE_SCENE, t.man.y = this.block1.y - t.man.height + t.man.manBottom.height, !0
         },
         init: function(e) {
            var i = {
               x: 60,
               y: 440
            };
            this.xunzhao = new Hilo.Bitmap(s({}, i, {
               alpha: 0,
               image: t.asset.xunzhao
            })), this.addChild(this.xunzhao), this.block1 = new l.
         default ({
               id: "xunzhao_block_1",
               x: this.xunzhao.x,
               y: this.xunzhao.y + 4,
               width: this.xunzhao.width
            }), this.addChild(this.block1), this.block2 = new l.
         default ({
               x: this.xunzhao.x + this.xunzhao.width - 100,
               y: this.xunzhao.y + 4,
               width: 100
            }), this.addChild(this.block2), this.block3 = new l.
         default ({
               x: this.xunzhao.x + this.xunzhao.width - 20,
               y: this.xunzhao.y + 3,
               width: 10,
               height: 10
            }), this.addChild(this.block3), this.sign = new c.MovingSign({
               x: this.block1.x + 80,
               y: this.block1.y - 34
            }), this.guide_jump = new Hilo.Bitmap({
               x: this.xunzhao.x + 500,
               y: this.xunzhao.y - 150,
               image: t.asset.guide_jump_static
            }), this.xxx_1 = new Hilo.Bitmap({
               x: t.width - 433 >> 1,
               y: t.NOTICE_Y,
               alpha: 1,
               image: t.asset.xxx_1
            }), t.collisionSet.push(this.block1, this.block2, this.block3), this.dropdown()
         },
         dropdown: function() {
            t.isDisabled = !0;
            var e = {
               y: t.man.y,
               o: 0
            },
               i = t.man,
               n = this;
            i.alpha = 0, h.TweenMax.to(e, .2, {
               delay: 1,
               o: 1,
               y: this.block1.y - i.height + i.manBottom.height,
               onUpdate: function() {
                  i.y = e.y, i.alpha = e.o, n.xunzhao.alpha = e.o
               },
               onComplete: function() {
                  t.isDisabled = !1, t.isNoShortClick = !0, n.showTip1(), t.guide.zoom(0)
               }
            }), setTimeout(function() {}, 3e3)
         },
         onUpdate: function() {
            e.superclass.onUpdate.apply(this, arguments), this.isShowTip1 && this.sign.updateWidth(this.x), this.isOnBlock(this.block2) && (this.showTip2(), t.guide.stopZoomPress(), t.guide.zoom(1)), t.man.isMovingY && (this.hideTip2(), t.guide.stopZoomClick())
         },
         updateJumpPoint: function() {
            this.isOnBlock(this.block1) && this.calcBlockDistanceY(this.block1, -30)
         },
         showTip1: function() {
            this.isShowTip1 || (this.isShowTip1 = !0, this.addChild(this.sign))
         },
         hideTip1: function() {
            t.isNoShortClick = !1, t.man.clickCount = 0
         },
         showTip2: function() {
            this.isShowTip2 || (this.isShowTip2 = !0, this.hideTip1(), this.addChild(this.guide_jump))
         },
         hideTip2: function() {
            if (!this.isHideTip2) {
               this.isHideTip2 = !0;
               var e = {
                  o: 1
               },
                  i = this;
               h.TweenMax.to(e, .2, {
                  o: 0,
                  onUpdate: function() {
                     i.guide_jump.alpha = e.o
                  },
                  onComplete: function() {
                     i.removeChild(i.guide_jump), t.guide.switchToBoth(), t.guide.removeNewGuide()
                  },
                  ease: h.Power1.easeIn
               })
            }
         }
      })
   }(window.game)
}, 
406: function(t, e, i) {
   "use strict";

   function n(t) {
      return t && t.__esModule ? t : {
      default:
         t
      }
   }
   var s = Object.assign ||
   function(t) {
      for (var e = 1; e < arguments.length; e++) {
         var i = arguments[e];
         for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
      }
      return t
   }, r = i(67), a = n(r), o = i(60), l = n(o), h = i(13), c = i(77), u = n(c), d = i(184), p = n(d);
   !
   function(t) {
      var e = t.S10 = Hilo.Class.create({
         Extends: a.
      default,
         constructor:


         function(t) {
            t.width = 1500, e.superclass.constructor.apply(this, arguments)
         },
         shortcut: function() {},
         onRecoverCurrent: function() {
            return this.x = 240, t.man.x = t.man.MIDDLE_SCENE, t.man.y = this.block1.y - t.man.height + t.man.manBottom.height, t.isDisabled = !1, t.isNoShortClick = !1, t.man.clickCount = 0, !0
         },
         init: function(e) {
            var i = {
               x: 50,
               y: 400
            };
            this.jianchi = new Hilo.Bitmap(s({}, i, {
               image: t.asset.jianchi
            })), this.addChild(this.jianchi), this.block1 = new l.
         default (s({
               id: "jianchi_block_1"
            }, i, {
               width: this.jianchi.width
            })), this.addChild(this.block1), this.block2 = new l.
         default ({
               x: i.x + 350,
               y: i.y,
               width: 160
            }), this.addChild(this.block2), this.mengxiang_trans = new Hilo.Sprite({
               x: this.block2.x - 40,
               y: this.block2.y - 45,
               paused: !0,
               loop: !1,
               frames: t.asset.mengxiang_end_trans.getSprite("xxx")
            }), this.addChild(this.mengxiang_trans), this.mengxiang_repeat = new Hilo.Sprite({
               x: this.block2.x - 40,
               y: this.block2.y - 45,
               paused: !0,
               frames: t.asset.mengxiang_end_repeat.getSprite("xxx")
            }), t.collisionSet.push(this.block1, this.block2)
         },
         onUpdate: function() {
            e.superclass.onUpdate.apply(this, arguments) || (t.man.x >= this.x + this.block2.x + this.block2.width / 2 - t.man.width / 2 && (t.isDisabled = !0), this.isOnBlock(this.block1) && this.quake(), this.isOnBlock(this.block2) && this.play())
         },
         updateJumpPoint: function() {
            this.isOnBlock(this.block1) && this.calcBlockDistanceY(this.block1, 20)
         },
         quake: function() {
            if (!this.isQuaking) {
               this.isQuaking = !0, t.guide.setFullOpacity(.4), t.guide.switchToBoth(), this.shift(), this.jianchi2 = new Hilo.Bitmap({
                  x: this.jianchi.x,
                  y: this.jianchi.y,
                  image: t.asset.jianchi
               }), this.addChild(this.jianchi2);
               var e = [this.jianchi, this.jianchi2],
                  i = e[0].x,
                  n = {
                     x: 0
                  };
               this.quakeTimeline = new h.TimelineMax({
                  repeat: 200,
                  onUpdate: function() {
                     e[0].x = i + n.x, e[1].x = i - n.x
                  },
                  ease: h.Power0.linear
               }), this.quakeTimeline.to(n, .3, {
                  x: 1.8
               }).to(n, .6, {
                  x: -1.8
               }).to(n, .3, {
                  x: 0
               })
            }
         },
         play: function() {
            this.isPlaying || (this.isPlaying = !0, t.guide.dispose(), this.quakeTimeline && this.quakeTimeline.kill(), this.removeChild(this.jianchi), this.removeChild(this.jianchi2), t.isDisabled = !0, t.man.changeMan(new Hilo.Sprite({
               frames: t.asset.man_colors.getSprite("xxx")
            })), this.blink(), u.
         default.startCollision(), p.
         default.moveDown(), u.
         default.showEnding())
         },
         blink: function() {
            var t = this.mengxiang_trans.getNumFrames(),
               e = this;
            this.mengxiang_trans.play(), this.mengxiang_trans.setFrameCallback(t - 1, function() {
               e.mengxiang_trans.setFrameCallback(t - 1), e.removeChild(e.mengxiang_trans), e.addChild(e.mengxiang_repeat), e.mengxiang_repeat.play()
            })
         }
      })
   }(window.game)
}, 
407: function(t, e, i) {
   "use strict";
   var n = i(67),
      s = function(t) {
         return t && t.__esModule ? t : {
         default:
            t
         }
      }(n);
   !
   function(t) {
      var e = t.S11 = Hilo.Class.create({
         Extends: s.
      default,
         constructor:


         function(t) {
            e.superclass.constructor.apply(this, arguments)
         },
         init: function(t) {}
      })
   }(window.game)
}, 
408: function(t, e, i) {
   "use strict";

   function n(t) {
      return t && t.__esModule ? t : {
      default:
         t
      }
   }
   var s = Object.assign ||
   function(t) {
      for (var e = 1; e < arguments.length; e++) {
         var i = arguments[e];
         for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
      }
      return t
   }, r = i(77), a = n(r), o = i(58), l = n(o), h = i(67), c = n(h), u = i(60), d = n(u), p = i(13), f = i(152), m = n(f);
   !
   function(t) {
      var e = t.S2 = Hilo.Class.create({
         Extends: c.
      default,
         constructor:


         function(t) {
            t.width = 780, e.superclass.constructor.apply(this, arguments)
         },
         shortcut: function() {},
         onRecoverCurrent: function() {
            return this.x = 120, t.man.x = t.man.MIDDLE_SCENE, t.man.y = this.block1.y - t.man.height + t.man.manBottom.height, this.isRaining = !1, this.isShattered = !1, this.isFalling = !1, t.man.isFallingMengXiang = !1, !0
         },
         init: function(e) {
            var i = {
               x: 0,
               y: 365
            },
               n = {
                  width: 157,
                  height: 95
               };
            this.mengxiang1 = new Hilo.Sprite(s({}, i, {
               paused: !0,
               loop: !1,
               frames: t.asset.mengxiang_text.getFrame(0)
            })), this.addChild(this.mengxiang1), this.mengxiang_fly_1 = new Hilo.Sprite({
               x: this.mengxiang1.x + 150,
               y: this.mengxiang1.y - 100,
               interval: 1.5,
               paused: !0,
               loop: !0,
               frames: t.asset.mengxiang_fly_1.getSprite("xxx")
            }), this.block1 = new d.
         default ({
               id: "mengxiang_block_1",
               x: this.mengxiang1.x + 145,
               y: this.mengxiang1.y + 80,
               width: 160
            }), this.addChild(this.block1), i.x += 170 + n.width, this.mengxiang2 = new Hilo.Sprite(s({}, i, {
               paused: !0,
               loop: !1,
               frames: t.asset.mengxiang_text.getFrame(0)
            })), this.addChild(this.mengxiang2), this.mengxiang_fly_2 = new Hilo.Sprite({
               x: this.mengxiang2.x + 150,
               y: this.mengxiang2.y - 100,
               interval: 1.5,
               paused: !0,
               loop: !0,
               frames: t.asset.mengxiang_fly_2.getSprite("xxx")
            }), this.block2 = new d.
         default ({
               x: this.mengxiang2.x + 145,
               y: this.mengxiang2.y + 80,
               width: 160
            }), this.addChild(this.block2), i.x += 170 + n.width, this.mengxiang3 = new Hilo.Sprite(s({}, i, {
               paused: !0,
               loop: !1,
               frames: t.asset.mengxiang_text.getSprite("xxx")
            })), this.addChild(this.mengxiang3), this.mengxiang_fly_3 = new Hilo.Sprite({
               x: this.mengxiang3.x + 150,
               y: this.mengxiang3.y - 100,
               interval: 1.5,
               paused: !0,
               loop: !0,
               frames: t.asset.mengxiang_fly_3.getSprite("xxx")
            }), this.block3 = new d.
         default ({
               x: this.mengxiang3.x + 145,
               y: this.mengxiang3.y + 80,
               width: 160
            }), this.addChild(this.block3), this.xxx_2 = new Hilo.Bitmap({
               x: this.mengxiang2.x,
               y: t.NOTICE_Y,
               alpha: 1,
               image: t.asset.xxx_2
            }), t.collisionSet.push(this.block1, this.block2, this.block3)
         },
         onUpdate: function() {
            var i = t.man;
            this.loopBGM(), this.isFalling || (!this.isShattered && i.x >= this.x + this.block3.x + 68 && (t.isDisabled = !0), e.superclass.onUpdate.apply(this, arguments) || this.isShattered || (i.isMovingY && (this.hideMengxiangFly1(), this.hideMengxiangFly2()), this.isOnBlock(this.block3) && (this.isRaining || (this.isRaining = !0, l.
         default.delay(150).then(function() {
               a.
            default.startRain()
            })), this.showMengxiangFly3(), console.log("æ¢¦æƒ³å è½æ—¶ - man.x: ", t.man.x, " åœºæ™¯x: ", this.x, " åœ°æ¿x: ", this.block3.x, " åœºæ™¯width: ", this.width), this.fall())))
         },
         updateJumpPoint: function() {
            t.man;
            this.isOnBlock(this.block1) ? (this.calcBlockDistanceY(this.block1), this.showMengxiangFly1(), t.guide.hideIntro()) : this.isOnBlock(this.block2) && (this.calcBlockDistanceY(this.block2, 50), this.showMengxiangFly2(), t.guide.setFullOpacity(.4), t.guide.switchToBoth(!0))
         },
         fall: function() {
            if (!this.isFalling) {
               this.isFalling = !0, this.removeChild(this.block3), l.
            default.remove(t.collisionSet, this.block3), t.isDisabled = !0;
               var e = {
                  y: this.y
               },
                  i = this;
               l.
            default.delay(2500).then(function() {
                  t.man.isFallingMengXiang = !0, i.hideMengxiangFly3(), i.shatter(), p.TweenMax.to(e, .5, {
                     y: e.y - 400,
                     onUpdate: function() {
                        i.y = e.y
                     },
                     onComplete: function() {
                        i.isFalling = !1, a.
                     default.stopRain()
                     },
                     ease: p.Power1.easeIn
                  })
               })
            }
         },
         shatter: function() {
            var t = this;
            return new Promise(function(e) {
               t.removeChild(t.mengxiang2), t.mengxiang3.play(), setTimeout(function() {
                  t.isShattered = !0, e()
               }, 500)
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
               var t = {
                  o: 1
               },
                  e = this;
               p.TweenMax.to(t, 1, {
                  o: 0,
                  onUpdate: function() {
                     e.mengxiang_fly_3.alpha = t.o
                  },
                  onComplete: function() {
                     e.mengxiang_fly_3.stop(), e.removeChild(e.mengxiang_fly_3)
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
            var t = m.
         default.bgm.isPlaying(),
               e = m.
            default.bgm.isPaused();
            t && !e || m.
         default.bgm.play()
         }
      })
   }(window.game)
}, 
409: function(t, e, i) {
   "use strict";

   function n(t) {
      return t && t.__esModule ? t : {
      default:
         t
      }
   }
   var s = i(67),
      r = n(s),
      a = i(60),
      o = n(a),
      l = i(13),
      h = i(58),
      c = n(h),
      u = i(77);
   n(u);
   !
   function(t) {
      var e = t.S3 = Hilo.Class.create({
         Extends: r.
      default,
         constructor:


         function(t) {
            t.width = 820, e.superclass.constructor.apply(this, arguments)
         },
         shortcut: function() {},
         onRecoverCurrent: function() {
            return this.x = -220, t.man.x = t.man.MIDDLE_SCENE, t.man.y = this.block3.y - t.man.height + t.man.manBottom.height, this.isTongKuScene = !0, !0
         },
         init: function(e) {
            var i = {
               x: 0,
               y: 445
            };
            this.daji_static = new Hilo.Bitmap({
               x: i.x,
               y: i.y + 500,
               image: t.asset.daji_static,
               alpha: 0
            }), this.addChild(this.daji_static), this.xxx_3 = new Hilo.Bitmap({
               x: -130,
               y: 100,
               alpha: 1,
               image: t.asset.xxx_3
            }), this.daji = new Hilo.Sprite({
               paused: !0,
               loop: !1,
               interval: 1.2
            }), this.daji.addFrame(t.asset.daji[1].getSprite("xxx")), this.daji.addFrame(t.asset.daji[0].getSprite("xxx")), this.block1 = new o.
         default ({
               x: this.daji_static.x,
               y: i.y,
               width: 150
            }), this.addChild(this.block1), this.block2 = new o.
         default ({
               x: this.block1.x + 217 - 40,
               y: this.block1.y + 300,
               width: 180
            }), this.addChild(this.block2), this.tongku = new Hilo.Sprite({
               x: this.block2.x - 75,
               y: this.block2.y - 65,
               paused: !0,
               loop: !1,
               alpha: 0
            }), this.tongku.addFrame(t.asset.tongku.getSprite("xxx")), this.addChild(this.tongku), this.sikao_repeat = new Hilo.Sprite({
               x: this.tongku.x + 305,
               y: this.tongku.y - 250,
               alpha: 0,
               frames: t.asset.sikao_repeat.getSprite("xxx")
            }), this.addChild(this.sikao_repeat), this.sikao_trans = new Hilo.Sprite({
               x: this.sikao_repeat.x,
               y: this.sikao_repeat.y,
               paused: !0,
               loop: !1,
               frames: t.asset.sikao_trans.getSprite("xxx")
            }), this.block3 = new o.
         default ({
               x: this.sikao_repeat.x + 80,
               y: this.sikao_repeat.y + 70,
               width: 190
            }), this.addChild(this.block3), t.collisionSet.push(this.block1, this.block2, this.block3)
         },
         repair: function() {
            var e = this.block1.y - t.man.height + t.man.manBottom.height;
            t.man.y > e && (t.man.y = e)
         },
         onUpdate: function() {
            e.superclass.onUpdate.apply(this, arguments) || (this.isTongKuScene ? this.isOnBlock(this.block3) && this.raiseSikao() : t.man.isFallingMengXiang ? this.raise() : this.isShow && this.checkRope())
         },
         raise: function() {
            if (!this.isShow) {
               this.isShow = !0;
               var e = {
                  alpha: 0,
                  y: this.daji_static.y
               },
                  i = this;
               l.TweenMax.to(e, .5, {
                  alpha: 1,
                  y: this.daji_static.y - 500 - 35,
                  onStart: function() {
                     i.daji_static.x = t.man.x - i.x, i.block1.x = t.man.x - i.x
                  },
                  onUpdate: function() {
                     i.daji_static.alpha = e.alpha, i.daji_static.y = e.y
                  },
                  onComplete: function() {
                     t.man.isFallingMengXiang = !1, t.isDisabled = !1, i.daji.x = i.daji_static.x, i.daji.y = i.daji_static.y - 10, t.man.isMovingY || (t.man.y = i.block1.y - t.man.height + t.man.manBottom.height), t.guide.setFullOpacity(1), t.guide.switchToPress(), t.man.y = i.block1.y - t.man.height + t.man.manBottom.height
                  },
                  ease: l.Power1.easeIn
               })
            }
         },
         checkRope: function() {
            if (t.isNoShortClick = !0, t.man.x >= this.x + this.block1.x + 30 && !this.isEnterSpec) {
               this.isEnterSpec = !0, t.isDisabled = !0, t.forceMovingX = !0, t.man.stepLength = 3, this.removeChild(this.daji_static), this.addChild(this.daji), this.daji.play(), t.man.visible = !1;
               var e = this,
                  i = this.daji.getNumFrames();
               this.daji.setFrameCallback(41, function() {
                  e.removeChild(e.block1), c.
               default.remove(t.collisionSet, e.block1), e.fall()
               }), this.daji.setFrameCallback(i - 1, function() {
                  e.removeChild(e.daji)
               })
            } else this.isEnterSpec && !this.isFalling && (t.man.isMovingX = !1)
         },
         fall: function() {
            t.forceMovingX = !1, t.man.stepLength = t.man.initStepLength, this.isFalling = !0, t.man.x = this.x + this.daji.x + 217, t.man.y = this.y + this.daji.y + 137, t.man.visible = !0, t.man.pivotX = t.man.width >> 1, t.man.pivotY = t.man.height >> 1;
            var e = {
               alpha: 0,
               y: t.man.y,
               angle: 180
            },
               i = this;
            l.TweenMax.to(e, .5, {
               alpha: 1,
               y: this.y + this.block2.y - t.man.height / 2 + t.man.manBottom.height,
               angle: 720,
               onUpdate: function() {
                  t.man.y = e.y, t.man.rotation = e.angle, i.tongku.alpha = e.alpha
               },
               onComplete: this.raiseTongku.bind(this),
               ease: l.Power1.easeOut
            })
         },
         raiseTongku: function() {
            var e = this.tongku.y,
               i = this.block2.y,
               n = {
                  vy: 0,
                  alpha: 0
               },
               s = this;
            t.isDisabled = !0, t.isNoShortClick = !0, t.guide.setFullOpacity(.4), t.guide.switchToBoth(), l.TweenMax.to(n, 1, {
               delay: .5,
               vy: 150,
               alpha: 1,
               onStart: function() {
                  t.man.pivotX = 0, t.man.pivotY = 0, t.man.rotation = 0, t.man.x -= t.man.width / 2, s.transTongku()
               },
               onUpdate: function() {
                  s.tongku.y = e - n.vy, s.block2.y = i - n.vy, s.sikao_repeat.alpha = n.alpha, t.man.y = s.block2.y - t.man.height + t.man.manBottom.height
               },
               onComplete: function() {
                  t.isDisabled = !1, t.isNoShortClick = !1, t.man.clickCount = 0, t.man.stepLength = t.man.initStepLength, s.isTongKuScene = !0
               }
            })
         },
         transTongku: function() {
            this.playedTongku || (this.playedTongku = !0, this.tongku.play())
         },
         raiseSikao: function() {
            if (!this.isRaiseSikao) {
               this.isRaiseSikao = !0, t.isDisabled = !0, t.isNoShortClick = !0;
               var e = this.sikao_trans.y,
                  i = this.block3.y,
                  n = {
                     vy: 0
                  },
                  s = this;
               l.TweenMax.to(n, 1, {
                  delay: .5,
                  vy: 150,
                  onStart: function() {
                     s.transSikao()
                  },
                  onUpdate: function() {
                     s.sikao_trans.y = e - n.vy, s.block3.y = i - n.vy, t.man.y = s.block3.y - t.man.height + t.man.manBottom.height
                  },
                  onComplete: function() {
                     t.isDisabled = !1, t.isNoShortClick = !1, t.man.clickCount = 0
                  }
               })
            }
         },
         transSikao: function() {
            this.playedSikao || (this.playedSikao = !0, this.removeChild(this.sikao_repeat), this.addChild(this.sikao_trans), this.sikao_trans.play(), console.log("æ€è€ƒå˜è§‰é†’ this.x: ", this.x, " this.y: ", this.y, " man.x: ", t.man.x, " man.y: ", t.man.y))
         },
         updateJumpPoint: function() {
            this.isTongKuScene && (this.isOnBlock(this.block2) ? this.calcBlockDistanceY(this.block2) : this.isOnBlock(this.block3) && this.calcBlockDistanceY(this.block3))
         }
      })
   }(window.game)
}, 
410: function(t, e, i) {
   "use strict";

   function n(t) {
      return t && t.__esModule ? t : {
      default:
         t
      }
   }
   var s = Object.assign ||
   function(t) {
      for (var e = 1; e < arguments.length; e++) {
         var i = arguments[e];
         for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
      }
      return t
   }, r = i(67), a = n(r), o = i(60), l = n(o), h = i(77), c = (n(h), i(206)), u = i(152), d = n(u);
   !
   function(t) {
      var e = t.S4 = Hilo.Class.create({
         Extends: a.
      default,
         constructor:


         function(t) {
            t.width = 1209, e.superclass.constructor.apply(this, arguments)
         },
         shortcut: function() {},
         onRecoverCurrent: function() {
            return this.x = -780, t.man.x = t.man.MIDDLE_SCENE, t.man.y = this.block2.y - t.man.height + t.man.manBottom.height, this.isAfterMoving = !0, !0
         },
         init: function(e) {
            var i = {
               x: 0,
               y: 170
            };
            this.chengzhang_text = new Hilo.Sprite(s({}, i, {
               paused: !0
            })), this.chengzhang_text.addFrame(t.asset.chengzhang_text[1].getSprite("xxx")), this.chengzhang_text.addFrame(t.asset.chengzhang_text[0].getSprite("xxx")), this.addChild(this.chengzhang_text), this.chengzhang_before = new Hilo.Sprite({
               y: i.y,
               paused: !0,
               loop: !1
            }), this.chengzhang_before.addFrame(t.asset.chengzhang_before[3].getSprite("xxx")), this.chengzhang_before.addFrame(t.asset.chengzhang_before[2].getSprite("xxx")), this.chengzhang_before.addFrame(t.asset.chengzhang_before[1].getSprite("xxx")), this.chengzhang_before.addFrame(t.asset.chengzhang_before[0].getSprite("xxx")), this.chengzhang_after = new Hilo.Sprite({
               y: i.y,
               paused: !0,
               loop: !1
            }), this.chengzhang_after.addFrame(t.asset.chengzhang_after[3].getSprite("xxx")), this.chengzhang_after.addFrame(t.asset.chengzhang_after[2].getSprite("xxx")), this.chengzhang_after.addFrame(t.asset.chengzhang_after[1].getSprite("xxx")), this.chengzhang_after.addFrame(t.asset.chengzhang_after[0].getSprite("xxx")), this.block1 = new l.
         default ({
               x: this.chengzhang_text.x,
               y: this.chengzhang_text.y + 104,
               width: 170
            }), this.addChild(this.block1), this.block2 = new l.
         default ({
               x: this.chengzhang_text.x + 987 - t.man.width,
               y: this.chengzhang_text.y + 100,
               width: 270
            }), this.addChild(this.block2), this.block3 = new l.
         default ({
               x: this.block2.x + this.block2.width,
               y: this.block2.y - 1,
               width: 10,
               height: 10
            }), this.addChild(this.block3), this.sign = new c.MovingSign({
               x: this.block2.x - 156,
               y: this.block2.y - 34,
               width: 244
            }), t.collisionSet.push(this.block1, this.block2, this.block3)
         },
         onUpdate: function() {
            e.superclass.onUpdate.apply(this, arguments), this.isOnBlock(this.block1) && (t.isNoShortClick = !0), t.man.x >= this.x + this.block1.x + 97 && t.man.y + t.man.height - t.man.manBottom.height == this.block1.y && this.move(), this.isMoving && (t.man.isMovingX = !1), !this.isAfterMoving && this.x <= -(this.chengzhang_text.x + 987 - t.MIDDLE_SCENE) && (t.forceMovingX = !1)
         },
         updateJumpPoint: function() {
            this.isAfterMoving && this.isOnBlock(this.block2) && (this.calcBlockDistanceY(this.block2, 100), this.sign.updateWidth(this.x))
         },
         move: function() {
            if (!this.isMoving && !this.isAfterMoving) {
               this.isMoving = !0, t.isDisabled = !0, t.forceMovingX = !0, t.man.stepLength = 5, t.man.visible = !1, this.chengzhang_text.play();
               var e = this;
               this.repeat().then(function() {
                  e.isMoving = !1, e.isAfterMoving = !0, t.isNoShortClick = !1, t.isDisabled = !1, t.forceMovingX = !1, t.man.clickCount = 0, t.man.resetStepLength(), t.man.visible = !0, e.chengzhang_text.stop(), t.man.x = e.x + e.block2.x, t.man.y = e.block2.y - t.man.height + t.man.manBottom.height, e.addChild(e.sign), console.log("èžºæ—‹ç»“æŸ this.x: ", e.x, " this.y: ", e.y, " man.x: ", t.man.x, " man.y: ", t.man.y)
               })
            }
         },
         repeat: function() {
            var t = this,
               e = this.chengzhang_before.getNumFrames(),
               i = this.chengzhang_after.getNumFrames();
            return new Promise(function(n) {
               t.chengzhang_before.x = t.chengzhang_text.x + 97, t.chengzhang_before.goto(0), t.addChild(t.chengzhang_before), t.chengzhang_before.setFrameCallback(e - 1, function() {
                  t.chengzhang_before.setFrameCallback(e - 1), t.removeChild(t.chengzhang_before), t.chengzhang_after.goto(0), t.chengzhang_after.x = t.chengzhang_text.x + 516, t.addChild(t.chengzhang_after), t.chengzhang_after.setFrameCallback(i - 1, function() {
                     t.chengzhang_after.setFrameCallback(i - 1), t.removeChild(t.chengzhang_after), n()
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
   }(window.game)
}, 
411: function(t, e, i) {
   "use strict";

   function n(t) {
      return t && t.__esModule ? t : {
      default:
         t
      }
   }
   var s = i(77),
      r = n(s),
      a = i(13),
      o = i(416),
      l = n(o),
      h = i(58),
      c = n(h),
      u = i(67),
      d = n(u),
      p = i(60),
      f = n(p);
   !
   function(t) {
      var e = t.S5 = Hilo.Class.create({
         Extends: d.
      default,
         constructor:


         function(t) {
            t.width = 560, e.superclass.constructor.apply(this, arguments)
         },
         shortcut: function() {},
         onRecoverCurrent: function() {
            return this.x = 50, t.man.x = t.man.MIDDLE_SCENE, t.man.y = this.block1.y - t.man.height + t.man.manBottom.height, !0
         },
         init: function(e) {
            var i = {
               x: 130,
               y: 270
            };
            this.gudu = new l.
         default (i), this.addChild(this.gudu), this.block1 = new f.
         default ({
               x: this.gudu.x,
               y: this.gudu.y + 5,
               width: 292
            }), this.addChild(this.block1), this.block2 = new f.
         default ({
               x: this.block1.x + this.block1.width - 10,
               y: this.block1.y - 1,
               width: 10,
               height: 10
            }), this.addChild(this.block2), t.collisionSet.push(this.block1, this.block2)
         },
         onUpdate: function() {
            e.superclass.onUpdate.apply(this, arguments) || (!this.isSinking && t.man.isMovingY && t.man.x + (t.man.width >> 1) >= this.x + this.block1.x + (this.block1.width >> 1) && (t.isDisabled = !0), this.isOnBlock(this.block1) && this.sink())
         },
         updateJumpPoint: function() {
            this.isOnBlock(this.block1) && this.calcBlockDistanceY(this.block1)
         },
         sink: function() {
            this.isSinking || (this.isSinking = !0, t.isDisabled = !1, this.shift(), console.log("èˆ¹ä¸‹æ²‰ this.x: ", this.x, " this.y: ", this.y, " man.x: ", t.man.x, " man.y: ", t.man.y), c.
         default.delay(100).then(function() {
               return r.
            default.showWater()
            }).then(function() {
               return c.
            default.delay(1e3)
            }).then(function() {
               var e = this.gudu,
                  i = this.block1,
                  n = this.block2,
                  s = t.man,
                  r = this,
                  o = {
                     y: i.y
                  };
               e.sink(), a.TweenMax.to(o, c.
            default.adjustTime(14), {
                  y: o.y + 72,
                  onUpdate: function() {
                     i.y = o.y, n.y = o.y - 1, !s.isMovingY && s.x < r.x + i.x + i.width && (s.y = i.y - s.height + s.manBottom.height)
                  },
                  onComplete: function() {
                     console.log("sank")
                  },
                  ease: a.Power0.linear
               })
            }.bind(this)))
         }
      })
   }(window.game)
}, 
412: function(t, e, i) {
   "use strict";

   function n(t) {
      return t && t.__esModule ? t : {
      default:
         t
      }
   }
   var s = Object.assign ||
   function(t) {
      for (var e = 1; e < arguments.length; e++) {
         var i = arguments[e];
         for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
      }
      return t
   }, r = i(60), a = n(r), o = i(67), l = n(o), h = i(13), c = i(58), u = n(c), d = i(77), p = n(d), f = i(184), m = n(f);
   !
   function(t) {
      var e = t.S6 = Hilo.Class.create({
         Extends: l.
      default,
         constructor:


         function(t) {
            t.width = 2070, e.superclass.constructor.apply(this, arguments)
         },
         shortcut: function() {},
         onRecoverCurrent: function() {
            return t.man.x = t.man.MIDDLE_SCENE, t.man.y = this.block2.y - t.man.height + t.man.manBottom.height, this.x = t.man.x - (this.block2.x + this.block2.width / 2 - t.man.width / 2), this.isMoving = !0, this.isOnLove = !1, !0
         },
         init: function(e) {
            var i = this,
               n = {
                  x: 200,
                  y: 210
               };
            this.container = new Hilo.Container, this.peiban_text_0 = new Hilo.Sprite(s({}, n, {
               frames: t.asset.peiban_text.getFrame(0)
            })), this.container.addChild(this.peiban_text_0), this.peiban_text_1 = new Hilo.Sprite(s({}, n, {
               frames: t.asset.peiban_text.getFrame(1)
            })), this.peiban_trans = new Hilo.Sprite(s({}, n, {
               loop: !1
            })), this.peiban_trans.addFrame(t.asset.peiban_trans[0].getSprite("xxx")), this.peiban_trans.addFrame(t.asset.peiban_trans[1].getSprite("xxx")), this.peiban_repeat = new Hilo.Sprite(s({}, n)), this.peiban_repeat.addFrame(t.asset.peiban_repeat[0].getSprite("xxx")), this.peiban_repeat.addFrame(t.asset.peiban_repeat[1].getSprite("xxx")), this.block1 = new a.
         default ({
               x: this.peiban_text_0.x + 30,
               y: this.peiban_text_0.y + 70,
               width: 80
            }), this.container.addChild(this.block1), this.addChild(this.container), t.collisionSet.push(this.block1), this.ai_static = new Hilo.Bitmap({
               x: 1720,
               y: n.y + 80,
               image: t.asset.ai_static
            }), this.addChild(this.ai_static), this.ai_repeat = new Hilo.Sprite({
               x: this.ai_static.x,
               y: this.ai_static.y,
               paused: !0
            }), this.ai_repeat.addFrame(t.asset.ai_repeat[0].getSprite("xxx")), this.ai_repeat.addFrame(t.asset.ai_repeat[1].getSprite("xxx")), this.block2 = new a.
         default ({
               id: "ai_block_2",
               x: this.ai_static.x + 58,
               y: this.ai_static.y + 115,
               width: 128
            }), this.addChild(this.block2), t.collisionSet.push(this.block2), this.stars = [this.createStar(0, -50), this.createStar(800, -50)], this.stars.forEach(function(t) {
               i.addChild(t)
            }), this.moveLeft()
         },
         dispose: function() {
            e.superclass.dispose.apply(this, arguments), this.blinkTween && this.blinkTween.kill()
         },
         clearCollisionSet: function() {
            u.
         default.remove(t.collisionSet, this.block1), u.
         default.remove(t.collisionSet, this.block2)
         },
         onUpdate: function() {
            e.superclass.onUpdate.apply(this, arguments) || (this.isOnBlock(this.block1) ? this.move() : !this.isOnLove && this.isOnBlock(this.block2) ? this.playLove() : this.isOnLove && t.man.clickCount > 0 && this.stopLove(), t.forceMovingX && this.container.x < 1300 ? this.container.x += t.man.stepLength : !this.isAfterMoving && this.container.x >= 1300 && (this.isAfterMoving = !0, t.forceMovingX = !1, console.log("é™ªä¼´åˆ°ç»ˆç‚¹ this.x: ", this.x, " this.y: ", this.y, " man.x: ", t.man.x, " man.y: ", t.man.y, ", è€—æ—¶: ", +new Date - this.startTime)), !this.isMoving && t.man.x + (t.man.width >> 1) >= this.x + this.container.x + this.block1.x + (this.block1.width >> 1) && t.man.x <= this.x + this.container.x + this.block1.x + this.block1.width ? t.isDisabled = !0 : !this.isOnLove && !this.isStopLove && t.man.x + (t.man.width >> 1) >= this.x + this.block2.x + (this.block2.width >> 1) && t.man.x <= this.x + this.block2.x + this.block2.width && (t.isDisabled = !0))
         },
         moveLeft: function() {
            var e = {
               x: 0
            },
               i = this;
            t.isNoShortClick = !0, h.TweenMax.to(e, 1, {
               delay: 4,
               x: -200,
               onUpdate: function() {
                  i.container.x = e.x
               },
               onComplete: function() {
                  t.man.clickCount = 0, t.isNoShortClick = !1
               },
               ease: h.Power0.linear
            })
         },
         move: function() {
            if (!this.isMoving) {
               this.isMoving = !0, t.guide.fadeOut(), m.
            default.fadeOutBig(), p.
            default.hideWater(), this.shift(), t.isDisabled = !0, this.container.removeChild(this.peiban_text_0), this.container.addChild(this.peiban_text_1), this.container.addChild(this.peiban_trans), this.peiban_trans.play();
               var e = this.peiban_trans.getNumFrames(),
                  i = this;
               this.peiban_trans.setFrameCallback(e - 1, function() {
                  i.peiban_trans.setFrameCallback(e - 1), i.container.removeChild(i.peiban_trans), i.container.addChild(i.peiban_repeat), i.peiban_repeat.play()
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
                     t.man.resetStepLength(), t.forceMovingX = !0, i.startTime = +new Date
                  },
                  onUpdate: function() {
                     i.container.y = n.y, t.man.isMovingY || (t.man.y = i.container.y + i.block1.y - t.man.height + t.man.manBottom.height)
                  },
                  onComplete: function() {
                     t.man.updateJumpPoint(100), t.isDisabled = !1, t.man.clickCount = 0, t.guide.switchToBoth()
                  }
               }),
                  r = u.
               default.adjustTime(5100) / 1e4;
               s.to(n, 1 * r, {
                  y: this.container.y - 50
               }).to(n, 3 * r, {
                  y: this.container.y + 100
               }).to(n, 2 * r, {
                  y: this.container.y + 0
               }).to(n, 3 * r, {
                  y: this.container.y + 150
               }).to(n, 1 * r, {
                  y: this.container.y + 125
               })
            }
         },
         playLove: function() {
            this.isOnLove || (this.isOnLove = !0, m.
         default.fadeInBig(), this.fadeOut(), t.man.visible = !1, t.isDisabled = !0, this.removeChild(this.ai_static), this.addChild(this.ai_repeat), this.ai_repeat.play(), console.log("è·³åˆ°çˆ±ä¸Š this.x: ", this.x, " this.y: ", this.y, " man.x: ", t.man.x, " man.y: ", t.man.y))
         },
         stopLove: function() {
            if (!this.isStopLove) {
               this.isStopLove = !0, t.isDisabled = !1, t.isNoShortClick = !1, t.man.clickCount = 0;
               var e = this;
               t.man.visible = !0, e.ai_repeat.stop(), e.removeChild(e.ai_repeat), e.addChild(e.ai_static), t.man.x = e.x + e.block2.x + e.block2.width / 2 - t.man.width / 2, t.man.y = e.block2.y - t.man.height + t.man.manBottom.height, e.calcBlockDistanceY(e.block2), t.onUserStart(), u.
            default.delay(10).then(t.onUserEnd.bind(t))
            }
         },
         fadeOut: function() {
            var t = {
               o: 1
            },
               e = this.container;
            h.TweenMax.to(t, .5, {
               o: 0,
               onUpdate: function() {
                  e.alpha = t.o
               }
            })
         },
         createStar: function(e, i) {
            return new Hilo.Bitmap({
               x: this.peiban_text_0.x + e,
               y: this.peiban_text_0.y + i,
               image: t.asset.peiban_star
            })
         }
      })
   }(window.game)
}, 
413: function(t, e, i) {
   "use strict";

   function n(t) {
      return t && t.__esModule ? t : {
      default:
         t
      }
   }
   var s = Object.assign ||
   function(t) {
      for (var e = 1; e < arguments.length; e++) {
         var i = arguments[e];
         for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
      }
      return t
   }, r = i(67), a = n(r), o = i(60), l = n(o), h = (i(13), i(419));
   !
   function(t) {
      var e = t.S7 = Hilo.Class.create({
         Extends: a.
      default,
         constructor:


         function(t) {
            t.width = 600, e.superclass.constructor.apply(this, arguments)
         },
         shortcut: function() {},
         onRecoverCurrent: function() {
            return t.man.x = t.man.MIDDLE_SCENE, t.man.y = this.block1.y - t.man.height + t.man.manBottom.height, this.x = -301, this.isShooted = !1, !0
         },
         init: function(e) {
            var i = {
               x: 0,
               y: 400
            };
            this.block1 = new l.
         default (s({}, i, {
               width: 832
            })), this.addChild(this.block1), this.block2 = new l.
         default ({
               x: this.block1.x + this.block1.width - 200,
               y: this.block1.y,
               width: 200
            }), this.addChild(this.block2), this.block3 = new l.
         default ({
               x: this.block1.x + this.block1.width - 10,
               y: this.block1.y - 1,
               width: 10,
               height: 10
            }), this.addChild(this.block3), t.collisionSet.push(this.block1, this.block3);
            var n = [],
               r = 0;
            for (r = 0; r < 8; ++r, i.x += 104) {
               var a = r % 2 == 0 ? new h.XingSprite(i) : new h.FuSprite(i);
               this.addChild(a), n.push(a)
            }
            this.words = n, this.guide = new Hilo.Bitmap({
               x: n[0].x,
               y: n[0].y - 40,
               image: t.asset.guide_s7,
               alpha: 0
            }), this.addChild(this.guide), this.guide_mask = new Hilo.View({
               x: n[0].x,
               y: n[0].y - 40,
               width: 0,
               height: 24,
               background: "#262231"
            }), this.addChild(this.guide_mask)
         },
         repair: function() {
            if (!this.isRepair) {
               this.isRepair = !0;
               var e = this.block1.y - t.man.height + t.man.manBottom.height;
               t.man.y > e && (t.man.y = e)
            }
         },
         onUpdate: function() {
            e.superclass.onUpdate.apply(this, arguments), t.man.hitTestObject(this.block1, !0) && this.repair(), this.isOnBlock(this.block1) && (t.man.clickCount = 0, this.playText(), this.isShowTip = !0, this.isOnBlock(this.block2) ? (t.isNoShortClick = !1, t.man.clickCount = 0, t.guide.switchToBoth()) : t.isNoShortClick = !0, this.isChangeGuide || (this.isChangeGuide = !0, t.guide.setFullOpacity(1), t.guide.switchToPress())), this.isShowTip && this.updateGuideMask(), t.isFreeWalk && !t.isCreativeEnable && t.man.x >= 440 && this.hideGuideMask()
         },
         playText: function() {
            for (var e = t.man.x, i = 0; i < 8; ++i) e >= this.x + this.words[i].x && this.words[i].play()
         },
         updateGuideMask: function() {
            this.guide.alpha = 1, this.guide_mask.alpha = 1, this.guide_mask.width = t.man.x + t.man.manLeft.width - (this.x + this.guide_mask.x)
         },
         hideGuideMask: function() {
            this.isShowTip = !1, this.removeChild(this.guide), this.removeChild(this.guide_mask)
         }
      })
   }(window.game)
}, 
414: function(t, e, i) {
   "use strict";

   function n(t) {
      return t && t.__esModule ? t : {
      default:
         t
      }
   }
   var s = Object.assign ||
   function(t) {
      for (var e = 1; e < arguments.length; e++) {
         var i = arguments[e];
         for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
      }
      return t
   }, r = i(67), a = n(r), o = i(60), l = n(o), h = i(13), c = i(417), u = i(418), d = i(58), p = n(d), f = i(152), m = n(f);
   !
   function(t) {
      var e = t.S8 = Hilo.Class.create({
         Extends: a.
      default,
         constructor:


         function(i) {
            e.superclass.constructor.call(this, i), this.width = 1e3, this.height = i.height || 1334, this.initScenePos(t.width - 450, i.startY)
         },
         shortcut: function() {},
         onRecoverCurrent: function() {
            return this.resume(), !0
         },
         onRecoverNext: function(e, i) {
            t.man.alpha = 1, this.x = 0
         },
         init: function(e) {
            var i = {
               itemWidth: 40,
               letterSpace: 3,
               wordSpace: 6
            },
               n = this.getVisibleHeight(),
               r = this.manCopy = new Hilo.Sprite({
                  id: "manCopy",
                  width: 50,
                  height: 50,
                  alpha: 0
               });
            r.addFrame(t.asset.ni_copy.getSprite("xxx")), r.goto(0, !0), this.addChild(r);
            var a = this.wallRight = new u.WallRight(s({
               id: "wallRight"
            }, i, {
               x: t.width - 40,
               y: 0,
               width: 40,
               height: n - 40
            })),
               o = this.wallLeft = new u.WallLeft(s({
                  id: "wallLeft"
               }, i, {
                  x: 0,
                  y: 46,
                  width: 40,
                  height: n - 40
               })),
               l = this.wallTop = new u.WallTop(s({
                  id: "wallTop"
               }, i, {
                  x: 0,
                  y: 0,
                  width: t.width - 40,
                  height: 40
               })),
               h = this.wallBottom = new u.WallBottom(s({
                  id: "wallBottom"
               }, i, {
                  x: 40,
                  y: n - 40,
                  width: t.width - 120,
                  height: 40
               }));
            this.addChild(a), this.addChild(o), this.addChild(l), this.addChild(h), this.staggerArr = [], this.staggerArr = this.staggerArr.concat(a.staggerArr1, l.staggerArr, o.staggerArr, h.staggerArr, a.staggerArr2), this.guide_right = new Hilo.Bitmap({
               x: this.wallRight.x - 36,
               y: this.wallRight.y + 36,
               image: t.asset.guide_right,
               alpha: 0
            }), this.addChild(this.guide_right), this.guide_right_mask = new Hilo.View({
               x: this.guide_right.x + 10,
               y: this.guide_right.y + this.guide_right.height,
               width: 14,
               height: 500,
               background: "#262231",
               alpha: 0
            }), this.addChild(this.guide_right_mask), this.guide_top = new Hilo.Bitmap({
               x: 50,
               y: 44,
               image: t.asset.guide_top,
               alpha: 0
            }), this.addChild(this.guide_top), this.guide_top_mask = new Hilo.View({
               x: this.guide_top.x + 100,
               y: this.guide_top.y + 10,
               width: 50,
               height: 14,
               background: "#262231",
               alpha: 0
            }), this.addChild(this.guide_top_mask)
         },
         fall2Tuoyan: function() {
            var e, i = this;
            if (!this.isFalled) {
               this.isFalled = !0, this.initTuoyan(), e = i.blockArr && i.blockArr[0] && i.blockArr[0].y - t.man.man.height - t.man.manBottom.height, this.removeOtherBlocks(5), t.man.pivotX = t.man.width >> 1, t.man.pivotY = t.man.height >> 1;
               var n = {
                  y: 36,
                  rotation: 0
               };
               h.TweenMax.to(n, .75, {
                  y: e + t.man.height / 2,
                  duration: 200,
                  rotation: 720,
                  ease: Power1.easeOut,
                  onStart: function() {
                     t.man.isMovingX = !1, t.man.isMovingY = !1, i.hideManCopy()
                  },
                  onUpdate: function() {
                     t.man.y = n.y, t.man.rotation = n.rotation, t.isDisabled = !0, t.man.isMovingX = !1, t.man.isMovingY = !1
                  },
                  onComplete: function() {
                     t.isDisabled = !1, t.isCreativeEnable = !1, t.isFreeWalk = !1, t.isNoShortClick = !0, t.guide.switchToPress(), t.man.x -= t.man.man.width / 2, t.man.pivotX = 0, t.man.pivotY = 0, t.man.y = 346, t.man.isDead = !1, i.isStartCheck = !0, i.isTriggered = !0, i.timerFallStrokes(), t.s9 && (t.s9.isShowTip = !0)
                  }
               })
            }
         },
         timerFallStrokes: function() {
            var t = this;
            p.
         default.delay(400).then(function() {
               for (var e = 0; e < 10; ++e) t["timer" + e] = setTimeout(function(e) {
                  t.words[e].fallStrokes()
               }.bind(t, e), 380 * e - 1)
            })
         },
         initTuoyan: function() {
            var e = {
               x: 317,
               y: 400
            };
            this.blockArr = [];
            var i, n, r = [],
               a = 0;
            for (a = 0; a < 10; ++a) a % 2 == 0 ? (i = this["tuo" + a] = new c.TuoSprite({
               x: e.x,
               y: 396
            }), this["tuo" + a].id = "tuo" + a, n = this["ty-block" + a] = new l.
         default (s({}, e, {
               width: i.width,
               height: i.height,
               alpha: 1
            })), this["ty-block" + a].id = "ty-block" + a, e.x += 55) : (i = this["yan" + a] = new c.YanSprite({
               x: e.x,
               y: 396
            }), this["yan" + a].id = "yan" + a, n = this["ty-block" + a] = new l.
         default (s({}, e, {
               width: i.width,
               height: i.height,
               alpha: 1
            })), this["ty-block" + a].id = "ty-block" + a, e.x += 51, e.x += 9), this.addChild(i), this.addChild(n), this.blockArr.push(n), r.push(i);
            Array.prototype.push.apply(t.collisionSet, this.blockArr), this.words = r
         },
         removeOtherBlocks: function(e) {
            t.collisionSet.shift(), p.
         default.remove(t.collisionSet, this.wallRight), p.
         default.remove(t.collisionSet, this.wallTop), this.hideTip2(), this.removeChild(this.wallTop), this.removeChild(this.wallRight), this.removeChild(this.wallBottom), this.removeChild(this.wallLeft), t.shift(), this.wallRight = null
         },
         hideXingFu: function() {
            if (t.s7) for (var e = t.s7.children, i = 0; i < e.length; ++i) e[i].alpha = 0
         },
         showChuangyi: function() {
            h.TweenMax.staggerTo(this.staggerArr, .1, {
               alpha: 1
            }, .02)
         },
         hideChuangyi: function() {
            function t() {
               this.wallTop && this.removeChild(this.wallTop), this.wallRight && this.removeChild(this.wallRight), this.removeChild(this.wallBottom), this.removeChild(this.wallLeft)
            }
            var e = [];
            e = e.concat(this.wallTop.children.slice(9), this.wallRight.children.slice(), this.wallBottom.children.slice().reverse(), this.wallLeft.children.slice().reverse(), this.wallTop.children.slice(0, 9)), h.TweenMax.staggerTo(e, .1, {
               alpha: 0
            }, .02, t.bind(this))
         },
         getVisibleHeight: function() {
            var e = window.innerHeight / window.innerWidth;
            return e > 16 / 9 && (e = 16 / 9), e * t.width
         },
         checkStandTuoyan: function() {
            if (this.isTriggered && !this.isStopCheck) {
               t.man.x + t.man.width > this.x + this.words[this.words.length - 1].x + 51 && (this.isTriggered = !1);
               for (var e = 0, i = 0; i < this.blockArr.length; ++i) t.man.hitTestObject(this.blockArr[i], !0) && ++e;
               0 === e && !1 === t.man.isMovingY && (this.isStopCheck = !0, this.fall2Bottom())
            }
         },
         fall2Bottom: function() {
            var t = game;
            this.blockArr[0].y, t.man.height, t.man.manBottom.height;
            this.tweenFall = new TimelineMax, this.tweenFall.to(t.man, .5, {
               y: t.height + 2,
               ease: Power2.easeOut,
               onComplete: function() {}
            }), this.deadPos = {
               x: t.man.x,
               y: t.man.y,
               curSceneX: this.x
            }
         },
         resume: function() {
            for (var e = this, i = 0; i < 10; ++i) clearTimeout(e["timer" + i]);
            for (var n = 0; n < this.words.length; ++n) this.words[n].tl && this.words[n].tl.progress(0), this.words[n].tl && this.words[n].tl.pause();
            setTimeout(this.timerFallStrokes.bind(this), 1e3), t.man.y = this.blockArr[0].y - t.man.height + t.man.manBottom.height, this.deadPos ? (t.man.x = this.deadPos.x, this.x = this.deadPos.curSceneX) : (t.man.x = 350, this.x = t.sceneSet[0].x), this.tweenFall && this.tweenFall.progress(0), this.tweenFall && this.tweenFall.pause(), t.collisionSet = t.collisionSet.filter(function(t) {
               return -1 === e.blockArr.indexOf(t)
            }), Array.prototype.push.apply(t.collisionSet, e.blockArr);
            for (var s = this.children.filter(function(t) {
               return e.blockArr.indexOf(t) > -1
            }), r = 0; r < s.length; ++r) this.removeChild(s[r]);
            this.addChild.apply(e, e.blockArr), this.isStopCheck = !1, t.man.isDead = !1
         },
         showMancopy: function() {
            var e = t.COVER_WIDTH;
            this.manCopy.x = t.man.x + e, this.manCopy.y = t.man.y + e, this.manCopy.alpha = 1, t.man.alpha = 0
         },
         hideManCopy: function() {
            this.manCopy && (this.manCopy.alpha = 0, t.man.alpha = 1, this.removeChild(this.manCopy), this.manCopy = null)
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
            this.removeChild(this.guide_top), this.removeChild(this.guide_top_mask), this.guide_top = null, this.guide_top_mask = null
         },
         loopBGM: function() {
            var t = m.
         default.bgm.isPlaying(),
               e = m.
            default.bgm.isPaused();
            t && !e || m.
         default.bgm.play()
         },
         onUpdate: function() {
            if (this.loopBGM(), !t.man.isDead && (t.man.isMovingX && t.man.x >= t.MIDDLE_SCENE - t.man.width && !t.isFreeWalk && (this.x -= t.man.stepLength), this.x <= 0 && !this.isFreeWalk && (this.isFreeWalk = !0, t.isFreeWalk = !0, t.collisionSet.push(this.wallRight, this.wallTop)), this.wallRight && t.man.manRight.hitTestObject(this.wallRight, !0) && (t.isCreativeEnable = !0, this.showChuangyi(), this.hideXingFu()), this.checkStandTuoyan(), t.isCreativeEnable && this.manCopy && this.showMancopy(), t.isCreativeEnable && !t.isTouchTop && t.man.y >= 62 && (this.showTip1(), this.guide_right_mask.y = t.man.y + t.man.height - 4), t.isCreativeEnable && !t.isTouchTop && t.man.y < 62 && this.hideTip1(), t.isCreativeEnable && t.isTouchTop && t.man.x > t.MIDDLE_SCENE)) {
               if (!this.guide_top_mask || !this.wallRight) return;
               this.guide_top_mask.x = t.man.x + t.man.width, this.guide_top_mask.width = 710 - this.guide_top_mask.x
            }
         }
      })
   }(window.game)
}, 
415: function(t, e, i) {
   "use strict";

   function n(t) {
      return t && t.__esModule ? t : {
      default:
         t
      }
   }
   var s = Object.assign ||
   function(t) {
      for (var e = 1; e < arguments.length; e++) {
         var i = arguments[e];
         for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
      }
      return t
   }, r = i(67), a = n(r), o = i(60), l = n(o), h = i(13);
   !
   function(t) {
      var e = t.S9 = Hilo.Class.create({
         Extends: a.
      default,
         constructor:


         function(t) {
            t.width = 812, e.superclass.constructor.apply(this, arguments)
         },
         shortcut: function() {},
         onRecoverCurrent: function() {
            return this.x = -730, t.man.x = t.man.MIDDLE_SCENE, t.man.y = this.block1.y - t.man.height + t.man.manBottom.height, !0
         },
         init: function(e) {
            this.words = [];
            for (var i = 0; i < 4; ++i) {
               var n = {
                  x: 35 * i - 80,
                  y: 400
               };
               this.initNuliGroup(n, i)
            }
            this.block1 = new l.
         default ({
               x: -80,
               y: 400,
               width: 772
            }), this.addChild(this.block1), this.block2 = new l.
         default ({
               x: this.block1.x + this.block1.width - 200,
               y: this.block1.y,
               width: 200
            }), this.addChild(this.block2), this.block3 = new l.
         default ({
               x: this.block1.x + this.block1.width - 10,
               y: this.block1.y - 1,
               width: 10,
               height: 10
            }), this.addChild(this.block3), t.collisionSet.push(this.block1, this.block3), this.defaultShow(8), this.guide = new Hilo.Bitmap({
               x: this.block1.x - 600,
               y: this.block1.y - 40,
               image: t.asset.guide_long,
               alpha: 0
            }), this.addChild(this.guide), this.guide_mask = new Hilo.View({
               x: this.guide.x,
               y: this.guide.y,
               width: 34,
               height: 24,
               background: "#262231",
               alpha: 0
            }), this.addChild(this.guide_mask)
         },
         initNuliGroup: function(e, i) {
            var n = {
               alpha: 0,
               y: e.y - 6
            },
               r = e.x;
            this["group" + i] = [];
            for (var a = 0; a < 4; ++a) {
               var o = new Hilo.Sprite(s({
                  id: "nu" + a,
                  frames: t.asset.nuli_v2.getFrame(0),
                  x: 162 * a + 8 * a + r
               }, n)),
                  l = new Hilo.Sprite(s({
                     id: "li" + a,
                     frames: t.asset.nuli_v2.getFrame(1),
                     x: o.x + 79
                  }, n));
               this.addChild(o), this.addChild(l), this["group" + i].push(o), this["group" + i].push(l)
            }
         },
         defaultShow: function(t) {
            if (!(t > this.children.length)) for (var e = 0; e < t; ++e) this.children[e].alpha = 1, this.children[e].isShow = !0
         },
         animateFirst: function() {
            this.isShow || (this.isShow = !0, h.TweenMax.staggerTo(this.group0.slice(8), 3, {
               alpha: 1
            }, .1))
         },
         animateCascade: function() {
            for (var e = t.man.x, i = this.block1.width / 2 / 4 >> 0, n = 1; n <= 4; ++n) e >= this.x + this.block1.x + i * n && this.animateGroup(n)
         },
         animateGroup: function(t) {
            var e = this["group" + t];
            e && !e.isPlayed && (e.isPlayed = !0, h.TweenMax.staggerTo(e, .3, {
               alpha: 1
            }, .08))
         },
         updateGuideMask: function() {
            this.guide.alpha = 1, this.guide_mask.alpha = 1, this.guide_mask.width = t.man.x + t.man.manLeft.width - (this.x + this.guide_mask.x)
         },
         hideGuideMask: function() {
            this.isShowTip = !1, this.removeChild(this.guide), this.removeChild(this.guide_mask)
         },
         onUpdate: function() {
            e.superclass.onUpdate.apply(this, arguments) || (this.isOnBlock(this.block1) && (this.animateCascade(), this.isOnBlock(this.block2) ? (t.isNoShortClick = !1, t.man.clickCount = 0, t.guide.switchToBoth()) : t.isNoShortClick = !0), this.isShowTip && this.updateGuideMask(), t.s9 && this.x + this.block1.x <= -340 && this.hideGuideMask())
         },
         updateJumpPoint: function() {
            this.isOnBlock(this.block1) && this.calcBlockDistanceY(this.block1)
         }
      })
   }(window.game)
}, 
416: function(t, e, i) {
   "use strict";

   function n(t) {
      return t && t.__esModule ? t : {
      default:
         t
      }
   }
   Object.defineProperty(e, "__esModule", {
      value: !0
   });
   var s = Object.assign ||
   function(t) {
      for (var e = 1; e < arguments.length; e++) {
         var i = arguments[e];
         for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
      }
      return t
   }, r = i(77), a = n(r), o = i(13), l = i(78), h = n(l), c = (function() {
      var t = 2 * Math.PI / 1800,
         e = -Math.PI
   }(), function() {
      var t = 2 * Math.PI / 3e3;
      return function(e) {
         return 180 * Math.sin(t * e + 0)
      }
   }()), u = (function() {
      var t = 2 * Math.PI / 1500,
         e = -Math.PI
   }(), function() {
      var t = 2 * Math.PI / 2e3,
         e = -Math.PI / 2
   }(), Hilo.Class.create({
      Extends: Hilo.Container,
      constructor: function(t) {
         u.superclass.constructor.call(this, t);
         var e = game.asset,
            i = {
               x: 0,
               y: 0
            };
         this.text_static = new Hilo.Sprite({
            width: 323,
            height: 266,
            frames: e.gudu_static.getFrame(0),
            paused: !0,
            loop: !1
         }), this.text_trans = new Hilo.Sprite({
            width: 323,
            height: 266,
            paused: !0,
            loop: !1,
            interval: 5
         }), this.text_trans.addFrame(e.gudu_text[2].getSprite("xxx")), this.text_trans.addFrame(e.gudu_text[1].getSprite("xxx")), this.text_trans.addFrame(e.gudu_text[0].getSprite("xxx")), this.text_repeat = new Hilo.Sprite({
            width: 323,
            height: 266,
            frames: e.gudu_repeat.getSprite("xxx")
         }), i = {
            x: 75,
            y: 110
         }, this.bihua_static = new Hilo.Sprite(s({}, i, {
            width: 70,
            height: 46,
            frames: e.gudu_static.getFrame(1),
            paused: !0,
            loop: !1
         })), this.bihua_repeat = new Hilo.Sprite({
            width: 54,
            height: 35,
            frames: e.gudu_bihua.getSprite("xxx")
         }), this.reset()
      },
      reset: function() {
         this.addChild(this.text_static), this.addChild(this.bihua_static), this.removeChild(this.text_trans), this.removeChild(this.text_repeat)
      },
      dispose: function() {},
      sink: function(t, e) {
         this.removeChild(this.text_static), this.addChild(this.text_trans);
         var i = this,
            n = this.text_trans,
            s = n.getNumFrames();
         n.play(), this.fly(), n.setFrameCallback(s - 1, function() {
            n.setFrameCallback(s - 1), i.afterSink()
         })
      },
      fly: function() {
         var t, e, i, n = this.parent,
            s = this;
         n.x;
         t = this.bihua_repeat.x = this.bihua_static.x, e = this.bihua_repeat.y = this.bihua_static.y, this.removeChild(this.bihua_static), this.addChild(this.bihua_repeat), this.bihua_repeat.play(), i = this.bihua_repeat;
         var r = {
            r1: 0,
            y1: n.y + this.y + e
         };
         this.flyTween = new o.TweenMax(r, 4, {
            r1: -80,
            y1: n.y + 2 * h.
         default.height + 200,
            onUpdate:


            function() {
               i.y = r.y1 - n.y - s.y, i.x = c(i.y - e) + t, i.rotation = r.r1, a.
            default.touchWater(n.x + s.x + i.x >> 1, n.y + s.y + i.y + 200 >> 1)
            },
            onComplete: function() {
               a.
            default.autoWave()
            },
            ease: o.Power1.easeIn
         })
      },
      stopFly: function() {},
      afterSink: function() {
         this.removeChild(this.text_trans), this.addChild(this.text_repeat)
      }
   }));
   e.
default = u
},
417: function(t, e, i) {
   "use strict";

   function n(t) {
      return t && t.__esModule ? t : {
      default:
         t
      }
   }
   Object.defineProperty(e, "__esModule", {
      value: !0
   }), e.YanSprite = e.TuoSprite = void 0;
   var s = i(13),
      r = i(60),
      a = (n(r), i(58)),
      o = n(a),
      l = Hilo.Class.create({
         Extends: Hilo.Container,
         constructor: function(t) {
            l.superclass.constructor.call(this, t), this.init(t)
         },
         init: function() {
            throw new Error("å­ç±»å®žçŽ°")
         },
         play: function() {
            this.isPlayed || (this.isPlayed = !0, this.fallStrokes())
         },
         fallStrokes: function() {
            var t = this,
               e = game;
            this.staggerArr.length;
            this.sscount = 0, (this.tl = new s.TimelineMax).staggerTo(this.staggerArr, 3.2, {
               alpha: 0,
               y: game.height,
               onStart: function() {
                  if (7 == ++t.sscount) {
                     var i = t.id.slice(3);
                     e.s8 && e.s8.removeChildById("ty-block" + i), e.s8 && e.s8["ty-block" + i] && o.
                  default.remove(e.collisionSet, e.s8["ty-block" + i])
                  }
               },
               ease: Power2.easeOut
            }, .06)
         }
      }),
      h = Hilo.Class.create({
         Extends: l,
         constructor: function(t) {
            h.superclass.constructor.call(this, t)
         },
         init: function(t) {
            var e = game.asset;
            this.width = 55, this.height = 58, this.staggerArr = [], this.t1 = new Hilo.Sprite({
               x: 2,
               y: 26,
               width: 21,
               height: 14,
               frames: e.ty.getFrame(1)
            }), this.t2 = new Hilo.Sprite({
               x: 0,
               y: 1,
               width: 20,
               height: 58,
               frames: e.ty.getFrame(2)
            }), this.t3 = new Hilo.Sprite({
               x: 1,
               y: 16,
               width: 23,
               height: 4,
               frames: e.ty.getFrame(3)
            }), this.t4 = new Hilo.Sprite({
               x: 24,
               y: 21,
               width: 31,
               height: 36,
               frames: e.ty.getFrame(4)
            }), this.t5 = new Hilo.Sprite({
               x: 19,
               y: 22,
               width: 32,
               height: 23,
               frames: e.ty.getFrame(5)
            }), this.t6 = new Hilo.Sprite({
               x: 34,
               y: 16,
               width: 8,
               height: 32,
               frames: e.ty.getFrame(6)
            }), this.t7 = new Hilo.Sprite({
               x: 29,
               y: 10,
               width: 26,
               height: 5,
               frames: e.ty.getFrame(7)
            }), this.t8 = new Hilo.Sprite({
               x: 21,
               y: 4,
               width: 16,
               height: 20,
               frames: e.ty.getFrame(8)
            }), this.addChild(this.t1), this.addChild(this.t2), this.addChild(this.t3), this.addChild(this.t4), this.addChild(this.t5), this.addChild(this.t6), this.addChild(this.t7), this.addChild(this.t8), this.staggerArr = this.children.slice()
         }
      }),
      c = Hilo.Class.create({
         Extends: l,
         constructor: function(t) {
            c.superclass.constructor.call(this, t)
         },
         init: function(t) {
            var e = game.asset;
            this.width = 51, this.height = 58, this.y1 = new Hilo.Sprite({
               x: 3,
               y: 34,
               width: 48,
               height: 24,
               frames: e.ty.getFrame(9)
            }), this.y2 = new Hilo.Sprite({
               x: 25,
               y: 40,
               width: 25,
               height: 5,
               frames: e.ty.getFrame(10)
            }), this.y3 = new Hilo.Sprite({
               x: 0,
               y: 23,
               width: 21,
               height: 35,
               frames: e.ty.getFrame(11)
            }), this.y4 = new Hilo.Sprite({
               x: 20,
               y: 20,
               width: 10,
               height: 26,
               frames: e.ty.getFrame(12)
            }), this.y5 = new Hilo.Sprite({
               x: 0,
               y: 7,
               width: 17,
               height: 25,
               frames: e.ty.getFrame(13)
            }), this.y6 = new Hilo.Sprite({
               x: 31,
               y: 13,
               width: 7,
               height: 31,
               frames: e.ty.getFrame(14)
            }), this.y7 = new Hilo.Sprite({
               x: 38,
               y: 23,
               width: 12,
               height: 4,
               frames: e.ty.getFrame(15)
            }), this.y8 = new Hilo.Sprite({
               x: 20,
               y: 4,
               width: 28,
               height: 11,
               frames: e.ty.getFrame(16)
            }), this.addChild(this.y1), this.addChild(this.y2), this.addChild(this.y3), this.addChild(this.y4), this.addChild(this.y5), this.addChild(this.y6), this.addChild(this.y7), this.addChild(this.y8), this.staggerArr = this.children.slice()
         }
      });
   e.TuoSprite = h, e.YanSprite = c
}, 
418: function(t, e, i) {
   "use strict";
   Object.defineProperty(e, "__esModule", {
      value: !0
   });
   var n = Object.assign ||
   function(t) {
      for (var e = 1; e < arguments.length; e++) {
         var i = arguments[e];
         for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
      }
      return t
   }, s = Hilo.Class.create({
      Extends: Hilo.Container,
      constructor: function(t) {
         s.superclass.constructor.call(this, t), this.id = t.id, this.width = t.width, this.height = t.height, this.x = t.x || 0, this.y = t.y || 0, this.staggerArr = [], this.init(t)
      },
      init: function() {
         throw new Error("å­ç±»å®žçŽ°")
      }
   }), r = Hilo.Class.create({
      Extends: s,
      constructor: function(t) {
         r.superclass.constructor.call(this, t)
      },
      init: function(t) {
         for (var e = game, i = t.itemWidth, s = t.letterSpace, r = t.wordSpace, a = 2 * i + s, o = this.width / a >> 0, l = r, h = {
            y: 0,
            width: i,
            height: i,
            alpha: 0
         }, c = 0; c < o; c++) {
            l = 0;
            var u = new Hilo.Sprite(n({
               id: "c" + c,
               frames: e.asset.cy.getFrame(7)
            }, h, {
               x: c * a + c * r + l
            })),
               d = new Hilo.Sprite(n({
                  id: "r" + c,
                  frames: e.asset.cy.getFrame(6)
               }, h, {
                  x: u.x + i + s
               }));
            this.addChild(u), this.addChild(d)
         }
         var p = (this.children[this.getNumChildren() - 1], new Hilo.Bitmap(n({
            id: "r" + c,
            image: e.asset.letter_top_1
         }, h, {
            x: 0
         })));
         this.addChild(p);
         var f = this.children,
            m = f.slice(0, f.length - 1).reverse();
         m.push(p), Array.prototype.push.apply(this.staggerArr, m)
      }
   }), a = Hilo.Class.create({
      Extends: s,
      constructor: function(t) {
         a.superclass.constructor.call(this, t)
      },
      init: function(t) {
         for (var e = game, i = t.itemWidth, s = t.letterSpace, r = t.wordSpace, a = 2 * i + s, o = this.height / a >> 0, l = r, h = {
            x: 0,
            width: i,
            height: i,
            alpha: 0
         }, c = 0; c < o; c++) {
            l = 0;
            var u = new Hilo.Sprite(n({
               id: "c" + c,
               frames: e.asset.cy.getFrame(4)
            }, h, {
               y: c * a + c * r + l
            })),
               d = new Hilo.Sprite(n({
                  id: "r" + c,
                  frames: e.asset.cy.getFrame(5)
               }, h, {
                  y: u.y + i + s
               }));
            this.addChild(u), this.addChild(d)
         }
         for (var p = this.children, c = 0; c < 12; c++) p[c].alpha = 1;
         console.log("å³ä¾§æ€»å…±çš„ childrenï¼š", this.children), this.staggerArr1 = p.slice(0, 0).reverse(), this.staggerArr2 = p.slice(12, p.length).reverse()
      }
   }), o = Hilo.Class.create({
      Extends: s,
      constructor: function(t) {
         o.superclass.constructor.call(this, t)
      },
      init: function(t) {
         var e = game,
            i = t.itemWidth,
            s = t.letterSpace,
            r = t.wordSpace,
            a = 2 * i + s,
            o = this.width / a >> 0,
            l = r,
            h = {
               y: 0,
               width: i,
               height: i,
               alpha: 0
            },
            c = new Hilo.Sprite(n({
               id: "rr",
               frames: e.asset.cy.getFrame(1)
            }, h, {
               x: 0
            }));
         this.addChild(c);
         for (var u = 0; u < o; u++) {
            l = i + s;
            var d = new Hilo.Sprite(n({
               id: "c" + u,
               frames: e.asset.cy.getFrame(0)
            }, h, {
               x: u * a + u * r + l
            })),
               p = new Hilo.Sprite(n({
                  id: "r" + u,
                  frames: e.asset.cy.getFrame(1)
               }, h, {
                  x: d.x + i + s
               }));
            this.addChild(d), this.addChild(p)
         }
         var f = (this.children[this.getNumChildren() - 1], this.children),
            m = f.length;
         f.slice(0, m - 1).reverse(), f[m - 1], this.part;
         this.staggerArr = this.children
      }
   }), l = Hilo.Class.create({
      Extends: s,
      constructor: function(t) {
         l.superclass.constructor.call(this, t)
      },
      init: function(t) {
         for (var e = game, i = t.itemWidth, s = t.letterSpace, r = t.wordSpace, a = 2 * i + s, o = this.height / a >> 0, l = {
            x: 0,
            width: i,
            height: i,
            alpha: 0
         }, h = 0; h < o; h++) {
            0 === h ? 0 : r;
            var c = new Hilo.Sprite(n({
               id: "c" + h,
               frames: e.asset.cy.getFrame(2)
            }, l, {
               y: h * a + h * r
            })),
               u = new Hilo.Sprite(n({
                  id: "r" + h,
                  frames: e.asset.cy.getFrame(3)
               }, l, {
                  y: c.y + i + s
               }));
            this.addChild(c), this.addChild(u)
         }
         this.children[this.getNumChildren() - 1];
         this.staggerArr = this.children.slice()
      }
   });
   e.WallTop = r, e.WallRight = a, e.WallBottom = o, e.WallLeft = l
}, 
419: function(t, e, i) {
   "use strict";
   Object.defineProperty(e, "__esModule", {
      value: !0
   }), e.FuSprite = e.XingSprite = void 0;
   var n = (i(13), i(78)),
      s = (function(t) {
         t && t.__esModule
      }(n), Hilo.Class.create({
         Extends: Hilo.Container,
         constructor: function(t) {
            s.superclass.constructor.call(this, t), this.init(t)
         },
         init: function() {
            throw new Error("å­ç±»å®žçŽ°")
         },
         play: function() {
            this.isPlayed || (this.isPlayed = !0, this.removeChild(this.text), this.addChild(this.repeat), this.repeat.play())
         }
      })),
      r = Hilo.Class.create({
         Extends: s,
         constructor: function(t) {
            r.superclass.constructor.call(this, t)
         },
         init: function(t) {
            this.text = new Hilo.Sprite({
               paused: !0,
               loop: !1,
               frames: game.asset.xingfu_text.getFrame(0)
            }), this.repeat = new Hilo.Sprite({
               paused: !0,
               loop: !0,
               frames: game.asset.xing_repeat.getSprite("xxx")
            }), this.addChild(this.text)
         }
      }),
      a = Hilo.Class.create({
         Extends: s,
         constructor: function(t) {
            a.superclass.constructor.call(this, t)
         },
         init: function(t) {
            this.text = new Hilo.Sprite({
               paused: !0,
               loop: !1,
               frames: game.asset.xingfu_text.getFrame(1)
            }), this.repeat = new Hilo.Sprite({
               paused: !0,
               loop: !0,
               frames: game.asset.fu_repeat.getSprite("xxx")
            }), this.addChild(this.text)
         }
      });
   e.XingSprite = r, e.FuSprite = a
}, 
420: function(t, e, i) {
   "use strict";
   Object.defineProperty(e, "__esModule", {
      value: !0
   });
   var n = Object.assign ||
   function(t) {
      for (var e = 1; e < arguments.length; e++) {
         var i = arguments[e];
         for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
      }
      return t
   }, s = i(152), r = function(t) {
      return t && t.__esModule ? t : {
      default:
         t
      }
   }(s), a = {
      y: 0,
      color: "#fff"
   }, o = Hilo.Class.create({
      Extends: Hilo.Container,
      constructor: function(t) {
         o.superclass.constructor.call(this, t), this.width = game.width, this.height = 40, this.x = 0, this.y = 0, this.time = 0, this.init()
      },
      init: function() {
         this.showFPS(), this.showManMsg(), this.showAudioInfo()
      },
      showFPS: function() {
         this.fps = new Hilo.Text(n({
            x: 0
         }, a)), this.addChild(this.fps)
      },
      showSceneSet: function() {
         this.sceneSet = new Hilo.Text(n({
            x: 70
         }, a, {
            maxWidth: 330
         })), this.addChild(this.sceneSet)
      },
      showManMsg: function() {
         this.manMsg = new Hilo.Text(n({
            x: 70
         }, a, {
            maxWidth: 330
         })), this.addChild(this.manMsg)
      },
      showSteplength: function() {
         this.steplength = new Hilo.Text(n({
            x: 650
         }, a)), this.addChild(this.steplength)
      },
      showAudioInfo: function() {
         this.audioInfo = new Hilo.Text(n({
            x: 390
         }, a, {
            maxWidth: 330
         })), this.addChild(this.audioInfo), this.time = +new Date
      },
      updateFPS: function() {
         this.fps && (this.fps.text = "FPS: " + game.ticker.getMeasuredFPS())
      },
      updateSceneSet: function() {
         if (this.sceneSet) {
            var t = game.sceneSet[0],
               e = game.sceneSet[1];
            t && e && (this.sceneSet.text = "|  åœºæ™¯ID: " + t.id + " - " + e.id + "  |  å·¦åœºæ™¯.x: " + (0 | t.x) + "   å³åœºæ™¯.x " + (0 | e.x))
         }
      },
      updateManMsg: function() {
         this.manMsg && (this.manMsg.text = "|  man.x: " + (0 | game.man.x) + "  man.y: " + (0 | game.man.y) + "  |  isDead: " + !! game.man.isDead + "  |  man.alpha: " + game.man.alpha)
      },
      updateSteplength: function() {
         this.steplength && (this.steplength.text = "|  æ­¥é•¿ï¼š" + game.man.stepLength.toFixed(2))
      },
      updateAudioInfo: function() {
         var t = r.
      default.bgm.isPlaying(),
            e = r.
         default.bgm.isPaused(),
            i = r.
         default.bgm.getVolume();
         this.audioInfo.text = "|  æ’­æ”¾ä¸­ï¼š" + t + " | æ˜¯å¦æš‚åœ: " + e + "  | ç§’æ•°ï¼š" + (+new Date - this.time) / 1e3 + "  |  éŸ³é‡ï¼š" + i
      },
      onUpdate: function() {
         this.updateFPS(), this.updateManMsg(), this.updateAudioInfo()
      }
   });
   e.
default = o
}, 
421: function(t, e, i) {
   "use strict";

   function n(t) {
      return t && t.__esModule ? t : {
      default:
         t
      }
   }

   function s(t) {
      t.preventDefault();
      var e = f.
   default.getActionNode(t.target);
      if (e) {
         switch (e.getAttribute("data-action")) {
         case "bottom":
            a.
         default.isInNEMapp() ? window.onClickTopButton && window.onClickTopButton():
            (f.
         default.biLogClick("homepage", "downloadclient"), setTimeout(function() {
               l.
            default.downloadApp()
            }, 30));
            break;
         case "primary":
            a.
         default.isInNEMapp() ? window.onClickTopButton && window.onClickTopButton():
            (f.
         default.biLogClick("homepage", "replay"), c.
         default.bgm.stop(), setTimeout(function() {
               location.replace(f.
            default.getRandomShareLink())
            }, 30));
            break;
         case "playlist":
            f.
         default.biLogClick("homepage", "playlist"), a.
         default.isInNEMapp() ? (c.
         default.bgm.stop(), location.href = "orpheus://playlist/2006469527"):
            setTimeout(function() {
               location.href = "//music.163.com/m/playlist?id=2006469527"
            }, 30)
         }
      }
   }
   i(111), i(360), i(336);
   var r = i(23),
      a = n(r),
      o = i(76),
      l = n(o),
      h = i(152),
      c = n(h),
      u = i(337),
      d = n(u),
      p = i(58),
      f = n(p),
      m = i(14),
      g = n(m);
   a.
default.isMobile() ? (function() {
      function t() {
         c.
      default.xintiao.play(), c.
      default.bgm.play(), c.
      default.rain.load(), c.
      default.gudu.load(), c.
      default.bgm.isPlaying() && (document.removeEventListener("WeixinJSBridgeReady", t), (0, g.
      default)(window).off("touchstart", t))
      }
      a.
   default.isInNEMapp() && (0, g.
   default)(document.documentElement).addClass("z-inapp"), (0, g.
   default)("#loading").removeClass("f-hide"), game.init(), c.
   default.init(), document.addEventListener("WeixinJSBridgeReady", t), (0, g.
   default)(window).on("touchstart", t), t(), new d.
   default ({
         title: "ç‚¹å‡»è¿›å…¥||||||||||||ä½ çš„ä¸–ç•Œ",
         subTitle: "æ„¿ä½ èƒ½ä½“ä¼šæ¯ä¸€ä¸ªè¯ï¼Œåœ¨ä½ ç”Ÿå‘½ä¸­çš„æ„ä¹‰",
         text: "ç‚¹å‡»è¿›å…¥||||||||||||ä½ çš„ä¸–ç•Œ",
         link: f.
      default.getRandomShareLink(),
         picUrl:
         "http://p3.music.126.net/YqZ2rysxNuBlZlvNNyEpPQ==/18570751395282859.jpg"
      }), f.
   default.biLogPage("homepage")
   }(), function() {
      (0, g.
   default)("canvas").on("touchstart", function(t) {
         t.preventDefault()
      }), (0, g.
   default)(".j-nocallout").on("touchstart", s)
   }()):
   (0, g.
default)("#j-web").removeClass("f-hide")
}, 
422: function(t, e, i) {
   "use strict";

   function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
   }
   Object.defineProperty(e, "__esModule", {
      value: !0
   });
   var s = function() {
         function t(t, e) {
            for (var i = 0; i < e.length; i++) {
               var n = e[i];
               n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
         }
         return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e
         }
      }(),
      r = i(58),
      a = function(t) {
         return t && t.__esModule ? t : {
         default:
            t
         }
      }(r),
      o = function() {
         function t(e) {
            n(this, t), this.audioNode = document.createElement("audio"), "string" == typeof e && (e = {
               src: e
            }), this.audioNode.src = e.src, this.audioNode.preload = !! e.preload, this.audioNode.autoplay = !! e.autoplay, this.audioNode.loop = !! e.loop
         }
         return s(t, [{
            key: "play",
            value: function() {
               try {
                  this.audioNode.play(), a.
               default.stopAppMusic()
               } catch (t) {
                  console.log(t)
               }
            }
         }, {
            key: "load",
            value: function() {
               try {
                  this.audioNode.load()
               } catch (t) {
                  console.log(t)
               }
            }
         }, {
            key: "isPlaying",
            value: function() {
               return this.audioNode && this.audioNode.currentTime > 0
            }
         }, {
            key: "isPaused",
            value: function() {
               return this.audioNode && this.audioNode.paused
            }
         }, {
            key: "stop",
            value: function() {
               try {
                  this.audioNode.pause(), this.audioNode.currentTime = 0, this.audioNode = null
               } catch (t) {
                  console.log(t)
               }
            }
         }, {
            key: "setVolume",
            value: function(t) {
               this.audioNode.volume = t
            }
         }, {
            key: "getVolume",
            value: function() {
               return this.audioNode.volume
            }
         }, {
            key: "setCurrentTime",
            value: function(t) {
               this.audioNode.currentTime = t
            }
         }]), t
      }();
   e.
default = o
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 
765:function(t, e, i) {
   t.exports = i.p + "client/images/happiness/ai-repeat-0.png?f614aeb9b1a24bbf45deb893fec16a2c"
}, 
766: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/ai-repeat-1.png?2786ec41a2ad440690f04fb3a9e09b75"
}, 
767: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/ai-static.png?90162a310e552e73501da5f05421db8c"
}, 
768: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/block-1.png?050aa1562d717dbb0e2cad7c98788b96"
}, 
769: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/chengzhang-after-0.png?516af75fa1607c3c5a94384d24238cea"
}, 
770: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/chengzhang-after-1.png?ba7bf696b2d4aa1742628604cabc2e01"
}, 
771: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/chengzhang-after-2.png?4fb5a260b07570a2d40496b2e3be8f20"
}, 
772: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/chengzhang-after-3.png?e04170c0344089a5d2f680be81562485"
}, 
773: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/chengzhang-before-0.png?6eb09d18811cdcaf79a83701d34da157"
}, 
774: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/chengzhang-before-1.png?38b70f144aa856bfa199998006e13d20"
}, 
775: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/chengzhang-before-2.png?c7f1b8c1f0c8856d00ed2d7a554dbf2e"
}, 
776: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/chengzhang-before-3.png?f91d5fe0d47aea4343c26b367a255352"
}, 
777: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/chengzhang-text-0.png?dfb242be44fe87550fda9bf76e0a690d"
}, 
778: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/chengzhang-text-1.png?ed6f101e343351dfb6528833eff34fb7"
}, 
779: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/chuangyi.png?660ef4492fc989497b34f3539d6b22ca"
}, 
780: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/daji-0.png?dd633cb10e37af46f363e9933c466284"
}, 
781: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/daji-1.png?9f6b7a70bdf48b7259231194e938af3f"
}, 
782: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/daji-static.png?a4d2293e93b95c3aa140c98b12b533bc"
}, 
783: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/fu-repeat.png?9f0d8987d133e5d5ce5a1e4db419cafb"
}, 
784: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/game-bg.jpg?8091f44363d916c1952dbddc75f6dc11"
}, 
785: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/gudu-bihua.png?d106888f5909ed36b29aebd2178e622d"
}, 
786: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/gudu-repeat.png?d9da1776ac4ae959293ce96cbe401d04"
}, 
787: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/gudu-static.png?49455cb741a646cd0e217f4de9d9f52d"
}, 
788: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/gudu-text-0.png?182392423c857a4f2acdf82687165e73"
}, 
789: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/gudu-text-1.png?8eb4b1d345cf42b3b3886e5f13d6ce6a"
}, 
790: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/gudu-text-2.png?9e8b1cf72cb2eee30826259e6b6f2bab"
}, 
791: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/guide-blink.png?47ae9c7ef63e1ef9ba117240425c966e"
}, 
792: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/guide-jump-static.png?fc9cbcc6dd9be8463040389c4a9d834b"
}, 
793: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/guide-jump.png?21d45aba254aaf455e0ee16e6100cedc"
}, 
794: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/guide-long.png?17cbfdeaf5650cbb85d7c152a83178f8"
}, 
795: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/guide-move-static.png?26ad21bb9d6358fbd279fa66f452ba39"
}, 
796: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/guide-new.png?2d85965860c75aa8bd45754fba8ca631"
}, 
797: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/guide-right.png?5c4b9d88d14dcc9ad7760b30f33d47fa"
}, 
798: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/guide-s7.png?14b493bd39012231f01d617e0e40038e"
}, 
799: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/guide-top.png?aa1501473ae1c6aa45b53f24f55cfebb"
}, 
800: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/guide.png?2b75d6e40d8d428296f6c3fc32c7f911"
}, 
801: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/intro.png?81e55308c24dca9ea0d956495db693f4"
}, 
802: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/jianchi.png?37900572df42a2f118193db3487c1b2a"
}, 
803: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/man-colors.png?c5b339d122f76fba960129864944bdfe"
}, 
804: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/man.png?734def9012a1da6c9af2b075ba42aa88"
}, 
805: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/mengxiang-end-repeat.png?3a58fb7d8ace2ad19be8119dfcbab5c1"
}, 
806: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/mengxiang-end-trans.png?106ee9580429235a30a289078041dd46"
}, 
807: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/mengxiang-fly-1.png?fa8fe4fb9ee7531f2192de31447be0c7"
}, 
808: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/mengxiang-fly-2.png?f41891e7e5c952aaed0ebab110dad053"
}, 
809: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/mengxiang-fly-3.png?8cea723ee1dde82339e9347ed518599f"
}, 
810: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/mengxiang-text.png?d05a6d0fec3b36cfade4b724d5dbdc88"
}, 
811: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/ni-rotation.png?fc6460c1ba2482cd74b4529b46c11938"
}, 
812: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/nuli-v2.png?b489f88eaa51af4519e439c00153aad9"
}, 
813: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/nuli.png?53f0c966abc670f3252ef4e9c44d5749"
}, 
814: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/peiban-repeat-0.png?87855a0e708582141f61365b34e58d4f"
}, 
815: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/peiban-repeat-1.png?10a45ce086a2ddd8b03c05c078d04ece"
}, 
816: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/peiban-star.png?c5c28dc72c49cc4d9460c3d66afd46a2"
}, 
817: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/peiban-text.png?d755e247740fda11ac3a739285704fae"
}, 
818: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/peiban-trans-0.png?4a9955ee8c965265b85515f021e475a1"
}, 
819: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/peiban-trans-1.png?74ac68b3fcec7d1853b8eed92225a931"
}, 
820: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/sikao-repeat.png?cec72a9579e5bf484c3d92896da192fc"
}, 
821: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/sikao-trans.png?61f5c9b5015f8c7a7c0a0c2a3264c0b9"
}, 
822: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/tongku.png?3c47ad9682cc1cd3a6ccbcaaff7a32b0"
}, 
823: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/tuoyan.png?a4eaaedea2509d234a3e3b58459a69c9"
}, 
824: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/water-bg.jpg?f90cb25496f24353dccb7bc9f0e0f649"
}, 
825: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/water-text.png?e55c90e1cc71591733eae8164b89ea5a"
}, 
826: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/xing-repeat.png?c00e17dfd884d479b0cdb670dbcf65c5"
}, 
827: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/xingfu-text.png?b2661f2c4a6d67e47bca0f8a6167b8ce"
}, 
828: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/xunzhao.png?e473d0d621c66b50e3bc73665a996ddc"
}, 
829: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/xxx-1.png?a5df11ce44a74e5a4c6a4f9ebae79744"
}, 
830: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/xxx-2.png?3e51e29807b6741baded759c03a9f9b6"
}, 
831: function(t, e, i) {
   t.exports = i.p + "client/images/happiness/xxx-3.png?3cbef1439b5c1d031cee5c3b940b0268"
}, , , , , , , , , , , , , , , 
846: function(t, e, i) {
   t.exports = i.p + "client/audio/happiness/01-bgm.mp3?4b25efcc7af444e9b960665809614156"
}, 
847: function(t, e, i) {
   t.exports = i.p + "client/audio/happiness/02-rain.mp3?6a09c243d4baf7b4ea41a20f50ca5e26"
}, 
848: function(t, e, i) {
   t.exports = i.p + "client/audio/happiness/03-gudu.mp3?708a82d9047f09bda297250c6379838f"
}, 
849: function(t, e, i) {
   t.exports = i.p + "client/audio/happiness/05-xintiao.mp3?11e0561eb00c57930cd3c891d94152ec"
}, , , , , , , , , , , , , , 
863: function(t, e) {
   t.exports = "#ifdef GL_ES\nprecision mediump float;\n#define GLSLIFY 1\n#define GLSLIFY 1\n#endif\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_1_0(vec3 x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289_1_0(vec4 x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_1_1(vec4 x) {\n        return mod289_1_0(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_1_2(vec4 r)\n{\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise_1_3(vec3 v)\n    {\n    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n    const vec4  D_1_4 = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n    vec3 i  = floor(v + dot(v, C.yyy) );\n    vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n    vec3 g_1_5 = step(x0.yzx, x0.xyz);\n    vec3 l = 1.0 - g_1_5;\n    vec3 i1 = min( g_1_5.xyz, l.zxy );\n    vec3 i2 = max( g_1_5.xyz, l.zxy );\n\n    //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n    //   x1 = x0 - i1  + 1.0 * C.xxx;\n    //   x2 = x0 - i2  + 2.0 * C.xxx;\n    //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n    vec3 x1 = x0 - i1 + C.xxx;\n    vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n    vec3 x3 = x0 - D_1_4.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n    i = mod289_1_0(i);\n    vec4 p = permute_1_1( permute_1_1( permute_1_1(\n                i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n            + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n    float n_ = 0.142857142857; // 1.0/7.0\n    vec3  ns = n_ * D_1_4.wyz - D_1_4.xzx;\n\n    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n    vec4 x_ = floor(j * ns.z);\n    vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n    vec4 x = x_ *ns.x + ns.yyyy;\n    vec4 y = y_ *ns.x + ns.yyyy;\n    vec4 h = 1.0 - abs(x) - abs(y);\n\n    vec4 b0 = vec4( x.xy, y.xy );\n    vec4 b1 = vec4( x.zw, y.zw );\n\n    //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n    //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n    vec4 s0 = floor(b0)*2.0 + 1.0;\n    vec4 s1 = floor(b1)*2.0 + 1.0;\n    vec4 sh = -step(h, vec4(0.0));\n\n    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n    vec4 a1_1_6 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n    vec3 p0_1_7 = vec3(a0.xy,h.x);\n    vec3 p1 = vec3(a0.zw,h.y);\n    vec3 p2 = vec3(a1_1_6.xy,h.z);\n    vec3 p3 = vec3(a1_1_6.zw,h.w);\n\n//Normalise gradients\n    vec4 norm = taylorInvSqrt_1_2(vec4(dot(p0_1_7,p0_1_7), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n    p0_1_7 *= norm.x;\n    p1 *= norm.y;\n    p2 *= norm.z;\n    p3 *= norm.w;\n\n// Mix final noise value\n    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n    m = m * m;\n    return 42.0 * dot( m*m, vec4( dot(p0_1_7,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n    }\n\n\n\n\nuniform sampler2D u_noise;\nuniform sampler2D tDiffuse;\nuniform vec2 u_mouse;\nuniform float u_time;\nuniform float u_aspect;\nuniform float u_amp;\n\nuniform vec2 u_random;\n\nvarying vec2 v_uv;\n\nconst float PI2 = 6.2831853072;\n\nconst vec2 noiseSize = vec2(256.);\n\nvoid main() {\n\n    vec2 pos = v_uv * 2. - 1.0;\n    pos.y *= u_aspect;\n\n    float perlin = snoise_1_3(vec3(pos, u_time));\n\n    vec2 mousePos = u_mouse * 2. - 1.0;\n    mousePos.y *= u_aspect;\n\n    float dist = length(mousePos - pos);\n    float radius = mix(0.4, 1.2, u_amp) + perlin * .2;\n    float intensity = pow(1. - smoothstep(.0, radius, dist), 3.);\n\n    float angle = (perlin + u_time) * PI2;\n    float c = cos(angle);\n    float s = sin(angle);\n\n    vec2 displace = vec2(c, s) * .12 * u_amp;\n\n    vec2 bulge = (mousePos - pos) * u_amp;\n\n    vec2 st = v_uv + intensity * (displace + bulge);\n\n\n    // vec3 color = texture2D(tDiffuse, st).rgb;\n    vec4 color = texture2D(tDiffuse, st).rgba;\n\n    float add = c * intensity * u_amp;\n\n    add += (1. - smoothstep(0., .1, abs(dist - radius * u_amp))) * .1;\n\n    color += add * .4;\n\n    // vec2 noiseUv = gl_FragCoord.xy / noiseSize + u_random;\n    // float noise = texture2D(u_noise, noiseUv).r;\n\n    // color = vec3(noise);//step(noise, add) * .1;\n\n    \n\n    // gl_FragColor = vec4(color, 1.0);\n    gl_FragColor = color;\n}"
}, 
864: function(t, e) {
   t.exports = "#define GLSLIFY 1\nvarying vec2 v_uv;\n        \nvoid main() {\n\n    v_uv = uv;\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}"
}, 
865: function(t, e) {
   t.exports = "precision highp float;\nprecision highp int;\n#define GLSLIFY 1\n\nuniform vec2 force;\nuniform vec2 center;\nuniform vec2 scale;\nuniform vec2 px;\nvarying vec2 uv;\n\nvoid main(){\n    float distance_ = 1.0-min(length((uv-center)/scale), 1.0);\n    // float distance_ = 1.0-min(length((uv-center)/scale), 1.0);\n    // gl_FragColor = vec4(force*distance_, 0, 1);\n    gl_FragColor = vec4(force*distance_, 0, 1);\n}"
}, 
866: function(t, e) {
   t.exports = "precision highp float;\nprecision highp int;\n#define GLSLIFY 1\nuniform sampler2D source;\nuniform sampler2D velocity;\nuniform float dt;\nuniform float scale;\nuniform vec2 px1;\nvarying vec2 uv;\n\nvoid main(){\n    gl_FragColor = texture2D(source, uv-texture2D(velocity, uv).xy*dt*px1)*scale;\n        // gl_FragColor = texture2D(velocity, uv);\n}"
}, 
867: function(t, e) {
   t.exports = "precision highp float;\nprecision highp int;\n#define GLSLIFY 1\n\nattribute vec2 uv;\n\nattribute vec3 position;\nattribute vec3 normal;\n\nuniform float aspectRatio;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\n\nuniform float timer;\n\nvarying highp vec2 vUv;\n\nvarying vec2 vN;\n\nuniform sampler2D pre;\nuniform sampler2D velocity;\n\n\nfloat scale = 1.0;\n\nvoid main(){\n\n    vUv = uv;\n\n    // vec4 p = vec4( vec3(position.x + 1.7, position.y + 4.0, position.z), 1. );\n    vec4 p = vec4( vec3(position.x , position.y , position.z + 0.5), 1. );\n\n        vec3 e = normalize( vec3( modelViewMatrix * p ) );\n        vec3 n = normalize( normalMatrix * normal.xyz / 2.0 );\n\n        vec3 r = (reflect( e, n ));\n        float m = 2. * sqrt(\n            pow( r.x, 2. ) +\n            pow( r.y, 2. ) +\n            pow( r.z + 1., 2. )\n        );\n        vN = r.xy / m + .5;\n\n\n    // gl_Position = projectionMatrix * modelViewMatrix * vec4(position.xy, position.z, 1.0 );\n    gl_Position = vec4(position * 2.0, 1.0);\n}"
}, 
868: function(t, e) {
   t.exports = "precision highp float;\nprecision highp int;\n#define GLSLIFY 1\nattribute vec3 position;\nattribute vec3 offset;\nvarying vec2 uv;\n\nvoid main(){\n    uv = vec2(0.5)+(position.xy)*0.5;\n\n    gl_Position = vec4(position, 1.0);\n}"
}, 
869: function(t, e) {
   t.exports = "precision highp float;\n#define GLSLIFY 1\nuniform sampler2D pre;\nuniform sampler2D div;\nuniform float alpha;\nuniform float beta;\nuniform vec2 px;\nvarying vec2 uv;\nvoid main ()\n{\n    vec2 tmpvar_1;\n    tmpvar_1.y = 0.0;\n    tmpvar_1.x = px.x;\n    vec2 tmpvar_2;\n    tmpvar_2.y = 0.0;\n    tmpvar_2.x = px.x;\n    vec2 tmpvar_3;\n    tmpvar_3.x = 0.0;\n    tmpvar_3.y = px.y;\n    vec2 tmpvar_4;\n    tmpvar_4.x = 0.0;\n    tmpvar_4.y = px.y;\n    lowp vec4 tmpvar_5;\n    tmpvar_5 = vec4((((\n    (texture2D (pre, (uv - tmpvar_1)).x + texture2D (pre, (uv + tmpvar_2)).x)\n    +\n    (texture2D (pre, (uv - tmpvar_3)).x + texture2D (pre, (uv + tmpvar_4)).x)\n    ) + (alpha * texture2D (div, uv).x)) * beta));\n    gl_FragColor = tmpvar_5;\n}"
}, 
870: function(t, e) {
   t.exports = "precision highp float;\n#define GLSLIFY 1\nattribute vec3 position;\nuniform vec2 center;\nuniform vec2 px;\nvarying highp vec2 uv;\n\nvoid main ()\n{\n    highp vec2 tmpvar_1;\n    vec2 tmpvar_2;\n    tmpvar_2 = (px * 2.0);\n    tmpvar_1 = clamp ((position.xy + center), (-1.0 + tmpvar_2), (1.0 - tmpvar_2));\n    uv = tmpvar_1;\n    highp vec4 tmpvar_3;\n    tmpvar_3.zw = vec2(0.0, 1.0);\n    tmpvar_3.xy = tmpvar_1;\n    gl_Position = tmpvar_3;\n}"
},
871: function(t, e) {
   t.exports = "precision highp float;\n#define GLSLIFY 1\nuniform sampler2D velocity;\nuniform vec2 px;\nvarying vec2 uv;\nvoid main ()\n{\n    vec2 tmpvar_1;\n    tmpvar_1.y = 0.0;\n    tmpvar_1.x = px.x;\n    vec2 tmpvar_2;\n    tmpvar_2.y = 0.0;\n    tmpvar_2.x = px.x;\n    vec2 tmpvar_3;\n    tmpvar_3.x = 0.0;\n    tmpvar_3.y = px.y;\n    vec2 tmpvar_4;\n    tmpvar_4.x = 0.0;\n    tmpvar_4.y = px.y;\n    lowp vec4 tmpvar_5;\n    tmpvar_5 = vec4((((\n        (texture2D (velocity, (uv + tmpvar_2)).x - texture2D (velocity, (uv - tmpvar_1)).x)\n    + texture2D (velocity,\n        (uv + tmpvar_4)\n    ).y) - texture2D (velocity, (uv - tmpvar_3)).y) * 0.5));\n    gl_FragColor = tmpvar_5;\n}"
},
872: function(t, e) {
   t.exports = "precision highp float;\nprecision highp int;\n#define GLSLIFY 1\n\n\nvarying highp vec2 vUv;\n\n// uniform sampler2D displacement;\nuniform sampler2D diffuse;\nuniform sampler2D pre;\nuniform sampler2D velocity;\nuniform sampler2D logo;\nuniform sampler2D test;\nuniform float timer;\n// uniform sampler2D colormap;\n\n\nuniform float alphatransition;\n\nvarying vec3 vEye;\nvarying vec2 basicUv;\n\nvarying vec2 vN;\n\nuniform float aspectRatio;\n\nfloat transitionratio = 15.0;\n\nfloat when_eq(float x, float y) {\n    return 1.0 - abs(sign(x - y));\n}\n\nfloat when_gt(float x, float y) {\n    return max(sign(x - y), 0.0);\n}\n\n\n//\n// Description : Array and textureless GLSL 2D simplex noise function.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_2d(vec3 x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec2 mod289_2d(vec2 x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute(vec3 x) {\n    return mod289_2d(((x*34.0)+1.0)*x);\n}\n\nfloat snoise_2d(vec2 v)\n    {\n    const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                        0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                        -0.577350269189626,  // -1.0 + 2.0 * C.x\n                        0.024390243902439); // 1.0 / 41.0\n// First corner\n    vec2 i  = floor(v + dot(v, C.yy) );\n    vec2 x0 = v -   i + dot(i, C.xx);\n\n// Other corners\n    vec2 i1;\n    //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\n    //i1.y = 1.0 - i1.x;\n    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n    // x0 = x0 - 0.0 + 0.0 * C.xx ;\n    // x1 = x0 - i1 + 1.0 * C.xx ;\n    // x2 = x0 - 1.0 + 2.0 * C.xx ;\n    vec4 x12 = x0.xyxy + C.xxzz;\n    x12.xy -= i1;\n\n// Permutations\n    i = mod289_2d(i); // Avoid truncation effects in permutation\n    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n    + i.x + vec3(0.0, i1.x, 1.0 ));\n\n    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n    m = m*m ;\n    m = m*m ;\n\n// Gradients: 41 points uniformly over a line, mapped onto a diamond.\n// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\n\n    vec3 x = 2.0 * fract(p * C.www) - 1.0;\n    vec3 h = abs(x) - 0.5;\n    vec3 ox = floor(x + 0.5);\n    vec3 a0 = x - ox;\n\n// Normalise gradients implicitly by scaling m\n// Approximation of: m *= inversesqrt( a0*a0 + h*h );\n    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n\n// Compute final noise value at P\n    vec3 g;\n    g.x  = a0.x  * x0.x  + h.x  * x0.y;\n    g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n    return 130.0 * dot(m, g);\n}\n\n\nvoid main(){\n\n    highp vec2 vUv2 = vUv;\n\n    vUv2.x = vUv.x;\n    vUv2.y = vUv.y * (1.0 / aspectRatio);\n    vUv2.y += .5 * ( 1. - 1.0 / aspectRatio );\n\n    if( 1.0 > aspectRatio ) {\n        vUv2.x = vUv.x * aspectRatio / 1.0;\n        vUv2.x += .5 * ( 1. - aspectRatio / 1.0 );\n        vUv2.y = vUv.y;\n\n    }\n\n    vec4 tpre = texture2D(pre, vUv);\n    vec4 tVelocity = texture2D(velocity, vUv);\n\n    vec2 displace = 1.0 - vN + vec2(tpre.x, tVelocity.y) * 1.75;\n\n    // vec3 base = texture2D( diffuse, random).rgb;\n    vec3 base = texture2D( diffuse, displace).rgb;\n\n    float reflectNoise = (snoise_2d(vUv * 10.0 + timer / 10.0)) * 0.004;\n\n\n\n    vec4 logod = texture2D(\n        logo,\n        vUv2 + (tpre.x, tVelocity.y) + (reflectNoise)\n    );\n\n    // vec4 logo22 = texture2D( logo,  vUv2 + (tpre.x * 1.2, tVelocity.y * 1.2));\n\n    // logo22 *= vec4(0.1, 0.1, 0.1, alphatransition);\n\n    // logod.a = logod.a * alphatransition;\n\n    // vec3 final = mix(\n        // base.rgb * (1.0 - logod.a) + logod.rgb * logod.a, logod.rgb, when_gt(logod.a, 0.5));\n    // vec3 final = base.rgb * (1.0 - logod.a) + logod.rgb * logod.a;\n\n    // vec3 final;\n    // if(logod.a > 0.5) {\n\n    // \tfinal = logod.rgb;\n\n    // }\n\n    // else {\n\n    // \tfinal = base.rgb;\n    // }\n\n    vec3 final = base.rgb * (1.0 - logod.a) + logod.rgb * logod.a;\n\n    // vec3 final2 = mix(\n        // base.rgb * (1.0 - logo22.a) + logo22.rgb * logo22.a, logo22.rgb, when_gt(logo22.a, 0.5));\n    // vec3 final2 = base.rgb * (1.0 - logo22.a) + logo22.rgb * logo22.a;\n\n    // // final2.rgb = base.rgb * 0.5 + (final2.rgb * 0.3) * 0.5;\n\n    // final = ((final * logod.a + final.rgb * (1.0 - logod.a)) + final2 * logo22.a);\n    // final = mix(final, final2, when_gt(logo22.a, logod.a));\n\n    gl_FragColor = vec4(\tfinal, 1.0);\n    // gl_FragColor = vec4(tVelocity.xxx, 1.0);\n}"
},
873: function(t, e) {
   t.exports = "#define GLSLIFY 1\nuniform sampler2D textureDiffuse1;\nuniform sampler2D textureDiffuse2;\nuniform vec2 resolution;\nuniform float transition;\nuniform float time;\n// uniform float threshold;\nvarying vec2 vUv;\n\nconst float amplitude = 15.0;\n\nfloat when_lt(float x, float y) {\n    return max(sign(y - x), 0.0);\n}\n\n\nvoid main() {\n\n    highp vec2 dir_1;\n    highp float tmpvar_2;\n    tmpvar_2 = (20.0 * transition);\n    highp vec2 tmpvar_3;\n    tmpvar_3 = (vUv - vec2(0.5, 0.5));\n    dir_1.y = tmpvar_3.y;\n    dir_1.x = (tmpvar_3.x * (resolution.x / resolution.y));\n    dir_1.y = (tmpvar_3.y + (sin(\n    ((8.0 * dir_1.x) + (2.0 * time))\n    ) * 0.05));\n    dir_1.x = (dir_1.x + (cos(\n    ((3.0 * dir_1.y) + time)\n    ) * 0.08));\n    highp float tmpvar_4;\n    tmpvar_4 = sqrt(dot (dir_1, dir_1));\n    highp vec2 tmpvar_5;\n    highp float tmpvar_6;\n    tmpvar_6 = (1.0 - transition);\n    tmpvar_5 = (((dir_1 / 2.0) * sin(\n    ((tmpvar_4 * 15.0) - (transition * tmpvar_2))\n    )) * tmpvar_6);\n    highp vec2 tmpvar_7;\n    highp float tmpvar_8;\n    tmpvar_8 = sin(time);\n    tmpvar_7.x = ((tmpvar_8 / 2.0) * tmpvar_6);\n    tmpvar_7.y = ((sin(\n    (time + 12.0)\n    ) / 1.3) * tmpvar_6);\n    lowp vec3 tmpvar_9;\n    tmpvar_9 = ((texture2D (textureDiffuse1, (vec2(mod (\n    (vUv + (tmpvar_5 + tmpvar_7))\n    , 1.0)))).xyz * transition) + (texture2D (textureDiffuse2, vUv).xyz * tmpvar_6));\n    highp float tmpvar_10;\n    tmpvar_10 = clamp (((\n    (transition + tmpvar_5.y)\n    - tmpvar_4) / 0.3), 0.0, 1.0);\n    highp float tmpvar_11;\n    tmpvar_11 = min (max ((tmpvar_10 *\n    (tmpvar_10 * (3.0 - (2.0 * tmpvar_10)))\n    ), 0.0), 1.0);\n    lowp vec3 tmpvar_12;\n    tmpvar_12 = mix (((tmpvar_11 * texture2D (textureDiffuse1,\n    (vUv + tmpvar_5)\n    ).xyz) + (\n    (1.0 - tmpvar_11)\n    * tmpvar_9)), tmpvar_9, max (sign(\n    ((tmpvar_4 + ((\n        (dir_1 * sin(((30.0 *\n        (tmpvar_4 / 2.0)\n        ) - (transition * tmpvar_2))))\n    * transition) * tmpvar_8).x) - (transition + tmpvar_5.y))\n    ), 0.0));\n    gl_FragColor.xyz = tmpvar_12;\n}"
},
874: function(t, e) {
   t.exports = "precision highp float;\n#define GLSLIFY 1\n        \nattribute vec3 position;\nuniform vec2 px;\nvarying vec2 uv;\n\nvoid main(){\n    uv = vec2(0.5)+(position.xy)*0.5;\n    gl_Position = vec4(position, 1.0);\n}"
},
875: function(t, e) {
   t.exports = "precision highp float;\n#define GLSLIFY 1\nuniform sampler2D pre;\nuniform sampler2D velocity;\nuniform float scale;\nuniform vec2 px;\nvarying vec2 uv;\nvoid main ()\n{\n    vec2 tmpvar_1;\n    tmpvar_1.y = 0.0;\n    tmpvar_1.x = px.x;\n    vec2 tmpvar_2;\n    tmpvar_2.y = 0.0;\n    tmpvar_2.x = px.x;\n    vec2 tmpvar_3;\n    tmpvar_3.x = 0.0;\n    tmpvar_3.y = px.y;\n    vec2 tmpvar_4;\n    tmpvar_4.x = 0.0;\n    tmpvar_4.y = px.y;\n    lowp vec2 tmpvar_5;\n    tmpvar_5.x = texture2D (pre, (uv + tmpvar_2)).x;\n    tmpvar_5.y = texture2D (pre, (uv + tmpvar_4)).x;\n    lowp vec2 tmpvar_6;\n    tmpvar_6.x = texture2D (pre, (uv - tmpvar_1)).x;\n    tmpvar_6.y = texture2D (pre, (uv - tmpvar_3)).x;\n    lowp vec4 tmpvar_7;\n    tmpvar_7.zw = vec2(1.0, 1.0);\n    tmpvar_7.xy = ((texture2D (velocity, uv).xy - (\n        (tmpvar_5 - tmpvar_6)\n    * 0.5)) * scale);\n    gl_FragColor = tmpvar_7;\n}"
},
876: function(t, e) {
   t.exports = "#define GLSLIFY 1\nvarying vec2 vUv;\n    \nvoid main() {\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"
}], [421]);