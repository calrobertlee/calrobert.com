/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
! function (t) {
  var e = {};

  function n(r) {
    if (e[r]) return e[r].exports;
    var i = e[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
  }
  n.m = t, n.c = e, n.d = function (t, e, r) {
    n.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: r
    })
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t)
      for (var i in t) n.d(r, i, function (e) {
        return t[e]
      }.bind(null, i));
    return r
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default
    } : function () {
      return t
    };
    return n.d(e, "a", e), e
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, n.p = "", n(n.s = 99)
}([function (t, e) {
  t.exports = function (t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }
}, function (t, e) {
  var n = Array.isArray;
  t.exports = n
}, function (t, e, n) {
  "use strict";
  var r = n(12);
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var i = {
    IX2EngineActionTypes: !0,
    IX2EngineConstants: !0
  };
  e.IX2EngineConstants = e.IX2EngineActionTypes = void 0;
  var o = n(118);
  Object.keys(o).forEach(function (t) {
    "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: function () {
        return o[t]
      }
    }))
  });
  var a = n(119);
  Object.keys(a).forEach(function (t) {
    "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: function () {
        return a[t]
      }
    }))
  });
  var u = n(120);
  Object.keys(u).forEach(function (t) {
    "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: function () {
        return u[t]
      }
    }))
  });
  var c = r(n(121));
  e.IX2EngineActionTypes = c;
  var s = r(n(122));
  e.IX2EngineConstants = s
}, function (t, e, n) {
  "use strict";
  var r = {},
    i = {},
    o = [],
    a = window.Webflow || [],
    u = window.jQuery,
    c = u(window),
    s = u(document),
    f = u.isFunction,
    l = r._ = n(101),
    d = r.tram = n(54) && u.tram,
    p = !1,
    v = !1;

  function h(t) {
    r.env() && (f(t.design) && c.on("__wf_design", t.design), f(t.preview) && c.on("__wf_preview", t.preview)), f(t.destroy) && c.on("__wf_destroy", t.destroy), t.ready && f(t.ready) && function (t) {
      if (p) return void t.ready();
      if (l.contains(o, t.ready)) return;
      o.push(t.ready)
    }(t)
  }

  function g(t) {
    f(t.design) && c.off("__wf_design", t.design), f(t.preview) && c.off("__wf_preview", t.preview), f(t.destroy) && c.off("__wf_destroy", t.destroy), t.ready && f(t.ready) && function (t) {
      o = l.filter(o, function (e) {
        return e !== t.ready
      })
    }(t)
  }
  d.config.hideBackface = !1, d.config.keepInherited = !0, r.define = function (t, e, n) {
    i[t] && g(i[t]);
    var r = i[t] = e(u, l, n) || {};
    return h(r), r
  }, r.require = function (t) {
    return i[t]
  }, r.push = function (t) {
    p ? f(t) && t() : a.push(t)
  }, r.env = function (t) {
    var e = window.__wf_design,
      n = void 0 !== e;
    return t ? "design" === t ? n && e : "preview" === t ? n && !e : "slug" === t ? n && window.__wf_slug : "editor" === t ? window.WebflowEditor : "test" === t ? window.__wf_test : "frame" === t ? window !== window.top : void 0 : n
  };
  var E, _ = navigator.userAgent.toLowerCase(),
    m = r.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
    y = r.env.chrome = /chrome/.test(_) && /Google/.test(navigator.vendor) && parseInt(_.match(/chrome\/(\d+)\./)[1], 10),
    I = r.env.ios = /(ipod|iphone|ipad)/.test(_);
  r.env.safari = /safari/.test(_) && !y && !I, m && s.on("touchstart mousedown", function (t) {
    E = t.target
  }), r.validClick = m ? function (t) {
    return t === E || u.contains(t, E)
  } : function () {
    return !0
  };
  var T, w = "resize.webflow orientationchange.webflow load.webflow";

  function b(t, e) {
    var n = [],
      r = {};
    return r.up = l.throttle(function (t) {
      l.each(n, function (e) {
        e(t)
      })
    }), t && e && t.on(e, r.up), r.on = function (t) {
      "function" == typeof t && (l.contains(n, t) || n.push(t))
    }, r.off = function (t) {
      n = arguments.length ? l.filter(n, function (e) {
        return e !== t
      }) : []
    }, r
  }

  function O(t) {
    f(t) && t()
  }

  function A() {
    T && (T.reject(), c.off("load", T.resolve)), T = new u.Deferred, c.on("load", T.resolve)
  }
  r.resize = b(c, w), r.scroll = b(c, "scroll.webflow resize.webflow orientationchange.webflow load.webflow"), r.redraw = b(), r.location = function (t) {
    window.location = t
  }, r.env() && (r.location = function () {}), r.ready = function () {
    p = !0, v ? (v = !1, l.each(i, h)) : l.each(o, O), l.each(a, O), r.resize.up()
  }, r.load = function (t) {
    T.then(t)
  }, r.destroy = function (t) {
    t = t || {}, v = !0, c.triggerHandler("__wf_destroy"), null != t.domready && (p = t.domready), l.each(i, g), r.resize.off(), r.scroll.off(), r.redraw.off(), o = [], a = [], "pending" === T.state() && A()
  }, u(r.ready), A(), t.exports = window.Webflow = r
}, function (t, e, n) {
  var r = n(66),
    i = "object" == typeof self && self && self.Object === Object && self,
    o = r || i || Function("return this")();
  t.exports = o
}, function (t, e) {
  t.exports = function (t) {
    var e = typeof t;
    return null != t && ("object" == e || "function" == e)
  }
}, function (t, e, n) {
  var r = n(125),
    i = n(179),
    o = n(47),
    a = n(1),
    u = n(186);
  t.exports = function (t) {
    return "function" == typeof t ? t : null == t ? o : "object" == typeof t ? a(t) ? i(t[0], t[1]) : r(t) : u(t)
  }
}, function (t, e, n) {
  var r = n(137),
    i = n(142);
  t.exports = function (t, e) {
    var n = i(t, e);
    return r(n) ? n : void 0
  }
}, function (t, e) {
  t.exports = function (t) {
    return null != t && "object" == typeof t
  }
}, function (t, e, n) {
  "use strict";
  var r = n(12);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.IX2VanillaUtils = e.IX2VanillaPlugins = e.IX2ElementsReducer = e.IX2EasingUtils = e.IX2Easings = e.IX2BrowserSupport = void 0;
  var i = r(n(33));
  e.IX2BrowserSupport = i;
  var o = r(n(84));
  e.IX2Easings = o;
  var a = r(n(86));
  e.IX2EasingUtils = a;
  var u = r(n(193));
  e.IX2ElementsReducer = u;
  var c = r(n(88));
  e.IX2VanillaPlugins = c;
  var s = r(n(195));
  e.IX2VanillaUtils = s
}, function (t, e, n) {
  var r = n(14),
    i = n(138),
    o = n(139),
    a = "[object Null]",
    u = "[object Undefined]",
    c = r ? r.toStringTag : void 0;
  t.exports = function (t) {
    return null == t ? void 0 === t ? u : a : c && c in Object(t) ? i(t) : o(t)
  }
}, function (t, e, n) {
  var r = n(65),
    i = n(41);
  t.exports = function (t) {
    return null != t && i(t.length) && !r(t)
  }
}, function (t, e) {
  t.exports = function (t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var n in t)
        if (Object.prototype.hasOwnProperty.call(t, n)) {
          var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
          r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n]
        } return e.default = t, e
  }
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
  };
  e.clone = c, e.addLast = l, e.addFirst = d, e.removeLast = p, e.removeFirst = v, e.insert = h, e.removeAt = g, e.replaceAt = E, e.getIn = _, e.set = m, e.setIn = y, e.update = I, e.updateIn = T, e.merge = w, e.mergeDeep = b, e.mergeIn = O, e.omit = A, e.addDefaults = S;
  /*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   */
  var i = "INVALID_ARGS";

  function o(t) {
    throw new Error(t)
  }

  function a(t) {
    var e = Object.keys(t);
    return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e
  }
  var u = {}.hasOwnProperty;

  function c(t) {
    if (Array.isArray(t)) return t.slice();
    for (var e = a(t), n = {}, r = 0; r < e.length; r++) {
      var i = e[r];
      n[i] = t[i]
    }
    return n
  }

  function s(t, e, n) {
    var r = n;
    null == r && o(i);
    for (var u = !1, l = arguments.length, d = Array(l > 3 ? l - 3 : 0), p = 3; p < l; p++) d[p - 3] = arguments[p];
    for (var v = 0; v < d.length; v++) {
      var h = d[v];
      if (null != h) {
        var g = a(h);
        if (g.length)
          for (var E = 0; E <= g.length; E++) {
            var _ = g[E];
            if (!t || void 0 === r[_]) {
              var m = h[_];
              e && f(r[_]) && f(m) && (m = s(t, e, r[_], m)), void 0 !== m && m !== r[_] && (u || (u = !0, r = c(r)), r[_] = m)
            }
          }
      }
    }
    return r
  }

  function f(t) {
    var e = void 0 === t ? "undefined" : r(t);
    return null != t && ("object" === e || "function" === e)
  }

  function l(t, e) {
    return Array.isArray(e) ? t.concat(e) : t.concat([e])
  }

  function d(t, e) {
    return Array.isArray(e) ? e.concat(t) : [e].concat(t)
  }

  function p(t) {
    return t.length ? t.slice(0, t.length - 1) : t
  }

  function v(t) {
    return t.length ? t.slice(1) : t
  }

  function h(t, e, n) {
    return t.slice(0, e).concat(Array.isArray(n) ? n : [n]).concat(t.slice(e))
  }

  function g(t, e) {
    return e >= t.length || e < 0 ? t : t.slice(0, e).concat(t.slice(e + 1))
  }

  function E(t, e, n) {
    if (t[e] === n) return t;
    for (var r = t.length, i = Array(r), o = 0; o < r; o++) i[o] = t[o];
    return i[e] = n, i
  }

  function _(t, e) {
    if (!Array.isArray(e) && o(i), null != t) {
      for (var n = t, r = 0; r < e.length; r++) {
        var a = e[r];
        if (void 0 === (n = null != n ? n[a] : void 0)) return n
      }
      return n
    }
  }

  function m(t, e, n) {
    var r = null == t ? "number" == typeof e ? [] : {} : t;
    if (r[e] === n) return r;
    var i = c(r);
    return i[e] = n, i
  }

  function y(t, e, n) {
    return e.length ? function t(e, n, r, i) {
      var o = void 0,
        a = n[i];
      o = i === n.length - 1 ? r : t(f(e) && f(e[a]) ? e[a] : "number" == typeof n[i + 1] ? [] : {}, n, r, i + 1);
      return m(e, a, o)
    }(t, e, n, 0) : n
  }

  function I(t, e, n) {
    return m(t, e, n(null == t ? void 0 : t[e]))
  }

  function T(t, e, n) {
    return y(t, e, n(_(t, e)))
  }

  function w(t, e, n, r, i, o) {
    for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
    return u.length ? s.call.apply(s, [null, !1, !1, t, e, n, r, i, o].concat(u)) : s(!1, !1, t, e, n, r, i, o)
  }

  function b(t, e, n, r, i, o) {
    for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
    return u.length ? s.call.apply(s, [null, !1, !0, t, e, n, r, i, o].concat(u)) : s(!1, !0, t, e, n, r, i, o)
  }

  function O(t, e, n, r, i, o, a) {
    var u = _(t, e);
    null == u && (u = {});
    for (var c = arguments.length, f = Array(c > 7 ? c - 7 : 0), l = 7; l < c; l++) f[l - 7] = arguments[l];
    return y(t, e, f.length ? s.call.apply(s, [null, !1, !1, u, n, r, i, o, a].concat(f)) : s(!1, !1, u, n, r, i, o, a))
  }

  function A(t, e) {
    for (var n = Array.isArray(e) ? e : [e], r = !1, i = 0; i < n.length; i++)
      if (u.call(t, n[i])) {
        r = !0;
        break
      } if (!r) return t;
    for (var o = {}, c = a(t), s = 0; s < c.length; s++) {
      var f = c[s];
      n.indexOf(f) >= 0 || (o[f] = t[f])
    }
    return o
  }

  function S(t, e, n, r, i, o) {
    for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
    return u.length ? s.call.apply(s, [null, !0, !1, t, e, n, r, i, o].concat(u)) : s(!0, !1, t, e, n, r, i, o)
  }
  var x = {
    clone: c,
    addLast: l,
    addFirst: d,
    removeLast: p,
    removeFirst: v,
    insert: h,
    removeAt: g,
    replaceAt: E,
    getIn: _,
    set: m,
    setIn: y,
    update: I,
    updateIn: T,
    merge: w,
    mergeDeep: b,
    mergeIn: O,
    omit: A,
    addDefaults: S
  };
  e.default = x
}, function (t, e, n) {
  var r = n(4).Symbol;
  t.exports = r
}, function (t, e, n) {
  var r = n(27),
    i = 1 / 0;
  t.exports = function (t) {
    if ("string" == typeof t || r(t)) return t;
    var e = t + "";
    return "0" == e && 1 / t == -i ? "-0" : e
  }
}, function (t, e) {
  function n(t) {
    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  function r(e) {
    return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? t.exports = r = function (t) {
      return n(t)
    } : t.exports = r = function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t)
    }, r(e)
  }
  t.exports = r
}, function (t, e) {
  t.exports = function (t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t
  }
}, function (t, e) {
  function n() {
    return t.exports = n = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
      }
      return t
    }, n.apply(this, arguments)
  }
  t.exports = n
}, function (t, e, n) {
  var r = n(127),
    i = n(128),
    o = n(129),
    a = n(130),
    u = n(131);

  function c(t) {
    var e = -1,
      n = null == t ? 0 : t.length;
    for (this.clear(); ++e < n;) {
      var r = t[e];
      this.set(r[0], r[1])
    }
  }
  c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function (t, e, n) {
  var r = n(34);
  t.exports = function (t, e) {
    for (var n = t.length; n--;)
      if (r(t[n][0], e)) return n;
    return -1
  }
}, function (t, e, n) {
  var r = n(7)(Object, "create");
  t.exports = r
}, function (t, e, n) {
  var r = n(151);
  t.exports = function (t, e) {
    var n = t.__data__;
    return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
  }
}, function (t, e, n) {
  var r = n(73),
    i = n(42),
    o = n(11);
  t.exports = function (t) {
    return o(t) ? r(t) : i(t)
  }
}, function (t, e, n) {
  var r = n(169),
    i = n(8),
    o = Object.prototype,
    a = o.hasOwnProperty,
    u = o.propertyIsEnumerable,
    c = r(function () {
      return arguments
    }()) ? r : function (t) {
      return i(t) && a.call(t, "callee") && !u.call(t, "callee")
    };
  t.exports = c
}, function (t, e, n) {
  var r = n(45);
  t.exports = function (t, e, n) {
    var i = null == t ? void 0 : r(t, e);
    return void 0 === i ? n : i
  }
}, function (t, e, n) {
  var r = n(1),
    i = n(46),
    o = n(180),
    a = n(79);
  t.exports = function (t, e) {
    return r(t) ? t : i(t, e) ? [t] : o(a(t))
  }
}, function (t, e, n) {
  var r = n(10),
    i = n(8),
    o = "[object Symbol]";
  t.exports = function (t) {
    return "symbol" == typeof t || i(t) && r(t) == o
  }
}, function (t, e, n) {
  "use strict";
  var r = window.jQuery,
    i = {},
    o = [],
    a = {
      reset: function (t, e) {
        e.__wf_intro = null
      },
      intro: function (t, e) {
        e.__wf_intro || (e.__wf_intro = !0, r(e).triggerHandler(i.types.INTRO))
      },
      outro: function (t, e) {
        e.__wf_intro && (e.__wf_intro = null, r(e).triggerHandler(i.types.OUTRO))
      }
    };
  i.triggers = {}, i.types = {
    INTRO: "w-ix-intro.w-ix",
    OUTRO: "w-ix-outro.w-ix"
  }, i.init = function () {
    for (var t = o.length, e = 0; e < t; e++) {
      var n = o[e];
      n[0](0, n[1])
    }
    o = [], r.extend(i.triggers, a)
  }, i.async = function () {
    for (var t in a) {
      var e = a[t];
      a.hasOwnProperty(t) && (i.triggers[t] = function (t, n) {
        o.push([e, n])
      })
    }
  }, i.async(), t.exports = i
}, function (t, e, n) {
  "use strict";
  var r = n(28);

  function i(t, e) {
    var n = document.createEvent("CustomEvent");
    n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n)
  }
  var o = window.jQuery,
    a = {},
    u = {
      reset: function (t, e) {
        r.triggers.reset(t, e)
      },
      intro: function (t, e) {
        r.triggers.intro(t, e), i(e, "COMPONENT_ACTIVE")
      },
      outro: function (t, e) {
        r.triggers.outro(t, e), i(e, "COMPONENT_INACTIVE")
      }
    };
  a.triggers = {}, a.types = {
    INTRO: "w-ix-intro.w-ix",
    OUTRO: "w-ix-outro.w-ix"
  }, o.extend(a.triggers, u), t.exports = a
}, function (t, e, n) {
  "use strict";
  n.r(e), n.d(e, "ActionTypes", function () {
    return o
  }), n.d(e, "default", function () {
    return a
  });
  var r = n(56),
    i = n(113),
    o = {
      INIT: "@@redux/INIT"
    };

  function a(t, e, n) {
    var u;
    if ("function" == typeof e && void 0 === n && (n = e, e = void 0), void 0 !== n) {
      if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
      return n(a)(t, e)
    }
    if ("function" != typeof t) throw new Error("Expected the reducer to be a function.");
    var c = t,
      s = e,
      f = [],
      l = f,
      d = !1;

    function p() {
      l === f && (l = f.slice())
    }

    function v() {
      return s
    }

    function h(t) {
      if ("function" != typeof t) throw new Error("Expected listener to be a function.");
      var e = !0;
      return p(), l.push(t),
        function () {
          if (e) {
            e = !1, p();
            var n = l.indexOf(t);
            l.splice(n, 1)
          }
        }
    }

    function g(t) {
      if (!Object(r.default)(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
      if (void 0 === t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
      if (d) throw new Error("Reducers may not dispatch actions.");
      try {
        d = !0, s = c(s, t)
      } finally {
        d = !1
      }
      for (var e = f = l, n = 0; n < e.length; n++) e[n]();
      return t
    }
    return g({
      type: o.INIT
    }), (u = {
      dispatch: g,
      subscribe: h,
      getState: v,
      replaceReducer: function (t) {
        if ("function" != typeof t) throw new Error("Expected the nextReducer to be a function.");
        c = t, g({
          type: o.INIT
        })
      }
    })[i.default] = function () {
      var t, e = h;
      return (t = {
        subscribe: function (t) {
          if ("object" != typeof t) throw new TypeError("Expected the observer to be an object.");

          function n() {
            t.next && t.next(v())
          }
          return n(), {
            unsubscribe: e(n)
          }
        }
      })[i.default] = function () {
        return this
      }, t
    }, u
  }
}, function (t, e) {
  var n;
  n = function () {
    return this
  }();
  try {
    n = n || new Function("return this")()
  } catch (t) {
    "object" == typeof window && (n = window)
  }
  t.exports = n
}, function (t, e, n) {
  "use strict";

  function r() {
    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
    if (0 === e.length) return function (t) {
      return t
    };
    if (1 === e.length) return e[0];
    var r = e[e.length - 1],
      i = e.slice(0, -1);
    return function () {
      return i.reduceRight(function (t, e) {
        return e(t)
      }, r.apply(void 0, arguments))
    }
  }
  n.r(e), n.d(e, "default", function () {
    return r
  })
}, function (t, e, n) {
  "use strict";
  var r = n(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.TRANSFORM_STYLE_PREFIXED = e.TRANSFORM_PREFIXED = e.FLEX_PREFIXED = e.ELEMENT_MATCHES = e.withBrowser = e.IS_BROWSER_ENV = void 0;
  var i = r(n(62)),
    o = "undefined" != typeof window;
  e.IS_BROWSER_ENV = o;
  var a = function (t, e) {
    return o ? t() : e
  };
  e.withBrowser = a;
  var u = a(function () {
    return (0, i.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], function (t) {
      return t in Element.prototype
    })
  });
  e.ELEMENT_MATCHES = u;
  var c = a(function () {
    var t = document.createElement("i"),
      e = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
    try {
      for (var n = e.length, r = 0; r < n; r++) {
        var i = e[r];
        if (t.style.display = i, t.style.display === i) return i
      }
      return ""
    } catch (t) {
      return ""
    }
  }, "flex");
  e.FLEX_PREFIXED = c;
  var s = a(function () {
    var t = document.createElement("i");
    if (null == t.style.transform)
      for (var e = ["Webkit", "Moz", "ms"], n = e.length, r = 0; r < n; r++) {
        var i = e[r] + "Transform";
        if (void 0 !== t.style[i]) return i
      }
    return "transform"
  }, "transform");
  e.TRANSFORM_PREFIXED = s;
  var f = s.split("transform")[0],
    l = f ? f + "TransformStyle" : "transformStyle";
  e.TRANSFORM_STYLE_PREFIXED = l
}, function (t, e) {
  t.exports = function (t, e) {
    return t === e || t != t && e != e
  }
}, function (t, e, n) {
  var r = n(7)(n(4), "Map");
  t.exports = r
}, function (t, e, n) {
  var r = n(143),
    i = n(150),
    o = n(152),
    a = n(153),
    u = n(154);

  function c(t) {
    var e = -1,
      n = null == t ? 0 : t.length;
    for (this.clear(); ++e < n;) {
      var r = t[e];
      this.set(r[0], r[1])
    }
  }
  c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function (t, e) {
  t.exports = function (t, e) {
    for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
    return t
  }
}, function (t, e, n) {
  (function (t) {
    var r = n(4),
      i = n(170),
      o = e && !e.nodeType && e,
      a = o && "object" == typeof t && t && !t.nodeType && t,
      u = a && a.exports === o ? r.Buffer : void 0,
      c = (u ? u.isBuffer : void 0) || i;
    t.exports = c
  }).call(this, n(74)(t))
}, function (t, e) {
  var n = 9007199254740991,
    r = /^(?:0|[1-9]\d*)$/;
  t.exports = function (t, e) {
    var i = typeof t;
    return !!(e = null == e ? n : e) && ("number" == i || "symbol" != i && r.test(t)) && t > -1 && t % 1 == 0 && t < e
  }
}, function (t, e, n) {
  var r = n(171),
    i = n(172),
    o = n(173),
    a = o && o.isTypedArray,
    u = a ? i(a) : r;
  t.exports = u
}, function (t, e) {
  var n = 9007199254740991;
  t.exports = function (t) {
    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n
  }
}, function (t, e, n) {
  var r = n(43),
    i = n(174),
    o = Object.prototype.hasOwnProperty;
  t.exports = function (t) {
    if (!r(t)) return i(t);
    var e = [];
    for (var n in Object(t)) o.call(t, n) && "constructor" != n && e.push(n);
    return e
  }
}, function (t, e) {
  var n = Object.prototype;
  t.exports = function (t) {
    var e = t && t.constructor;
    return t === ("function" == typeof e && e.prototype || n)
  }
}, function (t, e, n) {
  var r = n(175),
    i = n(35),
    o = n(176),
    a = n(177),
    u = n(76),
    c = n(10),
    s = n(67),
    f = s(r),
    l = s(i),
    d = s(o),
    p = s(a),
    v = s(u),
    h = c;
  (r && "[object DataView]" != h(new r(new ArrayBuffer(1))) || i && "[object Map]" != h(new i) || o && "[object Promise]" != h(o.resolve()) || a && "[object Set]" != h(new a) || u && "[object WeakMap]" != h(new u)) && (h = function (t) {
    var e = c(t),
      n = "[object Object]" == e ? t.constructor : void 0,
      r = n ? s(n) : "";
    if (r) switch (r) {
      case f:
        return "[object DataView]";
      case l:
        return "[object Map]";
      case d:
        return "[object Promise]";
      case p:
        return "[object Set]";
      case v:
        return "[object WeakMap]"
    }
    return e
  }), t.exports = h
}, function (t, e, n) {
  var r = n(26),
    i = n(15);
  t.exports = function (t, e) {
    for (var n = 0, o = (e = r(e, t)).length; null != t && n < o;) t = t[i(e[n++])];
    return n && n == o ? t : void 0
  }
}, function (t, e, n) {
  var r = n(1),
    i = n(27),
    o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    a = /^\w*$/;
  t.exports = function (t, e) {
    if (r(t)) return !1;
    var n = typeof t;
    return !("number" != n && "symbol" != n && "boolean" != n && null != t && !i(t)) || a.test(t) || !o.test(t) || null != e && t in Object(e)
  }
}, function (t, e) {
  t.exports = function (t) {
    return t
  }
}, function (t, e, n) {
  var r = n(189);
  t.exports = function (t) {
    var e = r(t),
      n = e % 1;
    return e == e ? n ? e - n : e : 0
  }
}, function (t, e, n) {
  var r = n(5),
    i = n(27),
    o = NaN,
    a = /^\s+|\s+$/g,
    u = /^[-+]0x[0-9a-f]+$/i,
    c = /^0b[01]+$/i,
    s = /^0o[0-7]+$/i,
    f = parseInt;
  t.exports = function (t) {
    if ("number" == typeof t) return t;
    if (i(t)) return o;
    if (r(t)) {
      var e = "function" == typeof t.valueOf ? t.valueOf() : t;
      t = r(e) ? e + "" : e
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = t.replace(a, "");
    var n = c.test(t);
    return n || s.test(t) ? f(t.slice(2), n ? 2 : 8) : u.test(t) ? o : +t
  }
}, function (t, e, n) {
  "use strict";
  var r = n(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.mediaQueriesDefined = e.viewportWidthChanged = e.actionListPlaybackChanged = e.elementStateChanged = e.instanceRemoved = e.instanceStarted = e.instanceAdded = e.parameterChanged = e.animationFrameChanged = e.eventStateChanged = e.testFrameRendered = e.eventListenerAdded = e.clearRequested = e.stopRequested = e.playbackRequested = e.previewRequested = e.sessionStopped = e.sessionStarted = e.sessionInitialized = e.rawDataImported = void 0;
  var i = r(n(18)),
    o = n(2),
    a = n(9),
    u = o.IX2EngineActionTypes,
    c = u.IX2_RAW_DATA_IMPORTED,
    s = u.IX2_SESSION_INITIALIZED,
    f = u.IX2_SESSION_STARTED,
    l = u.IX2_SESSION_STOPPED,
    d = u.IX2_PREVIEW_REQUESTED,
    p = u.IX2_PLAYBACK_REQUESTED,
    v = u.IX2_STOP_REQUESTED,
    h = u.IX2_CLEAR_REQUESTED,
    g = u.IX2_EVENT_LISTENER_ADDED,
    E = u.IX2_TEST_FRAME_RENDERED,
    _ = u.IX2_EVENT_STATE_CHANGED,
    m = u.IX2_ANIMATION_FRAME_CHANGED,
    y = u.IX2_PARAMETER_CHANGED,
    I = u.IX2_INSTANCE_ADDED,
    T = u.IX2_INSTANCE_STARTED,
    w = u.IX2_INSTANCE_REMOVED,
    b = u.IX2_ELEMENT_STATE_CHANGED,
    O = u.IX2_ACTION_LIST_PLAYBACK_CHANGED,
    A = u.IX2_VIEWPORT_WIDTH_CHANGED,
    S = u.IX2_MEDIA_QUERIES_DEFINED,
    x = a.IX2VanillaUtils.reifyState;
  e.rawDataImported = function (t) {
    return {
      type: c,
      payload: (0, i.default)({}, x(t))
    }
  };
  e.sessionInitialized = function (t) {
    var e = t.hasBoundaryNodes;
    return {
      type: s,
      payload: {
        hasBoundaryNodes: e
      }
    }
  };
  e.sessionStarted = function () {
    return {
      type: f
    }
  };
  e.sessionStopped = function () {
    return {
      type: l
    }
  };
  e.previewRequested = function (t) {
    var e = t.rawData,
      n = t.defer;
    return {
      type: d,
      payload: {
        defer: n,
        rawData: e
      }
    }
  };
  e.playbackRequested = function (t) {
    var e = t.actionTypeId,
      n = void 0 === e ? o.ActionTypeConsts.GENERAL_START_ACTION : e,
      r = t.actionListId,
      i = t.actionItemId,
      a = t.eventId,
      u = t.allowEvents,
      c = t.immediate,
      s = t.testManual,
      f = t.verbose,
      l = t.rawData;
    return {
      type: p,
      payload: {
        actionTypeId: n,
        actionListId: r,
        actionItemId: i,
        testManual: s,
        eventId: a,
        allowEvents: u,
        immediate: c,
        verbose: f,
        rawData: l
      }
    }
  };
  e.stopRequested = function (t) {
    return {
      type: v,
      payload: {
        actionListId: t
      }
    }
  };
  e.clearRequested = function () {
    return {
      type: h
    }
  };
  e.eventListenerAdded = function (t, e) {
    return {
      type: g,
      payload: {
        target: t,
        listenerParams: e
      }
    }
  };
  e.testFrameRendered = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
    return {
      type: E,
      payload: {
        step: t
      }
    }
  };
  e.eventStateChanged = function (t, e) {
    return {
      type: _,
      payload: {
        stateKey: t,
        newState: e
      }
    }
  };
  e.animationFrameChanged = function (t, e) {
    return {
      type: m,
      payload: {
        now: t,
        parameters: e
      }
    }
  };
  e.parameterChanged = function (t, e) {
    return {
      type: y,
      payload: {
        key: t,
        value: e
      }
    }
  };
  e.instanceAdded = function (t) {
    return {
      type: I,
      payload: (0, i.default)({}, t)
    }
  };
  e.instanceStarted = function (t, e) {
    return {
      type: T,
      payload: {
        instanceId: t,
        time: e
      }
    }
  };
  e.instanceRemoved = function (t) {
    return {
      type: w,
      payload: {
        instanceId: t
      }
    }
  };
  e.elementStateChanged = function (t, e, n, r) {
    return {
      type: b,
      payload: {
        elementId: t,
        actionTypeId: e,
        current: n,
        actionItem: r
      }
    }
  };
  e.actionListPlaybackChanged = function (t) {
    var e = t.actionListId,
      n = t.isPlaying;
    return {
      type: O,
      payload: {
        actionListId: e,
        isPlaying: n
      }
    }
  };
  e.viewportWidthChanged = function (t) {
    var e = t.width,
      n = t.mediaQueries;
    return {
      type: A,
      payload: {
        width: e,
        mediaQueries: n
      }
    }
  };
  e.mediaQueriesDefined = function () {
    return {
      type: S
    }
  }
}, function (t, e, n) {
  var r = n(96),
    i = n(52);

  function o(t, e) {
    this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = void 0
  }
  o.prototype = r(i.prototype), o.prototype.constructor = o, t.exports = o
}, function (t, e) {
  t.exports = function () {}
}, function (t, e, n) {
  var r = n(96),
    i = n(52),
    o = 4294967295;

  function a(t) {
    this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = o, this.__views__ = []
  }
  a.prototype = r(i.prototype), a.prototype.constructor = a, t.exports = a
}, function (t, e, n) {
  "use strict";
  var r = n(0)(n(16));
  window.tram = function (t) {
    function e(t, e) {
      return (new j.Bare).init(t, e)
    }

    function n(t) {
      return t.replace(/[A-Z]/g, function (t) {
        return "-" + t.toLowerCase()
      })
    }

    function i(t) {
      var e = parseInt(t.slice(1), 16);
      return [e >> 16 & 255, e >> 8 & 255, 255 & e]
    }

    function o(t, e, n) {
      return "#" + (1 << 24 | t << 16 | e << 8 | n).toString(16).slice(1)
    }

    function a() {}

    function u(t, e, n) {
      s("Units do not match [" + t + "]: " + e + ", " + n)
    }

    function c(t, e, n) {
      if (void 0 !== e && (n = e), void 0 === t) return n;
      var r = n;
      return $.test(t) || !Z.test(t) ? r = parseInt(t, 10) : Z.test(t) && (r = 1e3 * parseFloat(t)), 0 > r && (r = 0), r == r ? r : n
    }

    function s(t) {
      H.debug && window && window.console.warn(t)
    }
    var f = function (t, e, n) {
        function i(t) {
          return "object" == (0, r.default)(t)
        }

        function o(t) {
          return "function" == typeof t
        }

        function a() {}
        return function r(u, c) {
          function s() {
            var t = new f;
            return o(t.init) && t.init.apply(t, arguments), t
          }

          function f() {}
          c === n && (c = u, u = Object), s.Bare = f;
          var l, d = a[t] = u[t],
            p = f[t] = s[t] = new a;
          return p.constructor = s, s.mixin = function (e) {
            return f[t] = s[t] = r(s, e)[t], s
          }, s.open = function (t) {
            if (l = {}, o(t) ? l = t.call(s, p, d, s, u) : i(t) && (l = t), i(l))
              for (var n in l) e.call(l, n) && (p[n] = l[n]);
            return o(p.init) || (p.init = u), s
          }, s.open(c)
        }
      }("prototype", {}.hasOwnProperty),
      l = {
        ease: ["ease", function (t, e, n, r) {
          var i = (t /= r) * t,
            o = i * t;
          return e + n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + .25 * t)
        }],
        "ease-in": ["ease-in", function (t, e, n, r) {
          var i = (t /= r) * t,
            o = i * t;
          return e + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i)
        }],
        "ease-out": ["ease-out", function (t, e, n, r) {
          var i = (t /= r) * t,
            o = i * t;
          return e + n * (.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * t)
        }],
        "ease-in-out": ["ease-in-out", function (t, e, n, r) {
          var i = (t /= r) * t,
            o = i * t;
          return e + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i)
        }],
        linear: ["linear", function (t, e, n, r) {
          return n * t / r + e
        }],
        "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function (t, e, n, r) {
          return n * (t /= r) * t + e
        }],
        "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function (t, e, n, r) {
          return -n * (t /= r) * (t - 2) + e
        }],
        "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function (t, e, n, r) {
          return (t /= r / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e
        }],
        "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function (t, e, n, r) {
          return n * (t /= r) * t * t + e
        }],
        "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function (t, e, n, r) {
          return n * ((t = t / r - 1) * t * t + 1) + e
        }],
        "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function (t, e, n, r) {
          return (t /= r / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e
        }],
        "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function (t, e, n, r) {
          return n * (t /= r) * t * t * t + e
        }],
        "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function (t, e, n, r) {
          return -n * ((t = t / r - 1) * t * t * t - 1) + e
        }],
        "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function (t, e, n, r) {
          return (t /= r / 2) < 1 ? n / 2 * t * t * t * t + e : -n / 2 * ((t -= 2) * t * t * t - 2) + e
        }],
        "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function (t, e, n, r) {
          return n * (t /= r) * t * t * t * t + e
        }],
        "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function (t, e, n, r) {
          return n * ((t = t / r - 1) * t * t * t * t + 1) + e
        }],
        "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function (t, e, n, r) {
          return (t /= r / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e
        }],
        "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function (t, e, n, r) {
          return -n * Math.cos(t / r * (Math.PI / 2)) + n + e
        }],
        "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function (t, e, n, r) {
          return n * Math.sin(t / r * (Math.PI / 2)) + e
        }],
        "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function (t, e, n, r) {
          return -n / 2 * (Math.cos(Math.PI * t / r) - 1) + e
        }],
        "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function (t, e, n, r) {
          return 0 === t ? e : n * Math.pow(2, 10 * (t / r - 1)) + e
        }],
        "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function (t, e, n, r) {
          return t === r ? e + n : n * (1 - Math.pow(2, -10 * t / r)) + e
        }],
        "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function (t, e, n, r) {
          return 0 === t ? e : t === r ? e + n : (t /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : n / 2 * (2 - Math.pow(2, -10 * --t)) + e
        }],
        "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function (t, e, n, r) {
          return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + e
        }],
        "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function (t, e, n, r) {
          return n * Math.sqrt(1 - (t = t / r - 1) * t) + e
        }],
        "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function (t, e, n, r) {
          return (t /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
        }],
        "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function (t, e, n, r, i) {
          return void 0 === i && (i = 1.70158), n * (t /= r) * t * ((i + 1) * t - i) + e
        }],
        "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function (t, e, n, r, i) {
          return void 0 === i && (i = 1.70158), n * ((t = t / r - 1) * t * ((i + 1) * t + i) + 1) + e
        }],
        "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function (t, e, n, r, i) {
          return void 0 === i && (i = 1.70158), (t /= r / 2) < 1 ? n / 2 * t * t * ((1 + (i *= 1.525)) * t - i) + e : n / 2 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) + e
        }]
      },
      d = {
        "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
        "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
        "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
      },
      p = document,
      v = window,
      h = "bkwld-tram",
      g = /[\-\.0-9]/g,
      E = /[A-Z]/,
      _ = "number",
      m = /^(rgb|#)/,
      y = /(em|cm|mm|in|pt|pc|px)$/,
      I = /(em|cm|mm|in|pt|pc|px|%)$/,
      T = /(deg|rad|turn)$/,
      w = "unitless",
      b = /(all|none) 0s ease 0s/,
      O = /^(width|height)$/,
      A = " ",
      S = p.createElement("a"),
      x = ["Webkit", "Moz", "O", "ms"],
      R = ["-webkit-", "-moz-", "-o-", "-ms-"],
      N = function (t) {
        if (t in S.style) return {
          dom: t,
          css: t
        };
        var e, n, r = "",
          i = t.split("-");
        for (e = 0; e < i.length; e++) r += i[e].charAt(0).toUpperCase() + i[e].slice(1);
        for (e = 0; e < x.length; e++)
          if ((n = x[e] + r) in S.style) return {
            dom: n,
            css: R[e] + t
          }
      },
      C = e.support = {
        bind: Function.prototype.bind,
        transform: N("transform"),
        transition: N("transition"),
        backface: N("backface-visibility"),
        timing: N("transition-timing-function")
      };
    if (C.transition) {
      var L = C.timing.dom;
      if (S.style[L] = l["ease-in-back"][0], !S.style[L])
        for (var D in d) l[D][0] = d[D]
    }
    var P = e.frame = function () {
        var t = v.requestAnimationFrame || v.webkitRequestAnimationFrame || v.mozRequestAnimationFrame || v.oRequestAnimationFrame || v.msRequestAnimationFrame;
        return t && C.bind ? t.bind(v) : function (t) {
          v.setTimeout(t, 16)
        }
      }(),
      M = e.now = function () {
        var t = v.performance,
          e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
        return e && C.bind ? e.bind(t) : Date.now || function () {
          return +new Date
        }
      }(),
      F = f(function (e) {
        function i(t, e) {
          var n = function (t) {
              for (var e = -1, n = t ? t.length : 0, r = []; ++e < n;) {
                var i = t[e];
                i && r.push(i)
              }
              return r
            }(("" + t).split(A)),
            r = n[0];
          e = e || {};
          var i = Q[r];
          if (!i) return s("Unsupported property: " + r);
          if (!e.weak || !this.props[r]) {
            var o = i[0],
              a = this.props[r];
            return a || (a = this.props[r] = new o.Bare), a.init(this.$el, n, i, e), a
          }
        }

        function o(t, e, n) {
          if (t) {
            var o = (0, r.default)(t);
            if (e || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == o && e) return this.timer = new B({
              duration: t,
              context: this,
              complete: a
            }), void(this.active = !0);
            if ("string" == o && e) {
              switch (t) {
                case "hide":
                  f.call(this);
                  break;
                case "stop":
                  u.call(this);
                  break;
                case "redraw":
                  l.call(this);
                  break;
                default:
                  i.call(this, t, n && n[1])
              }
              return a.call(this)
            }
            if ("function" == o) return void t.call(this, this);
            if ("object" == o) {
              var s = 0;
              p.call(this, t, function (t, e) {
                t.span > s && (s = t.span), t.stop(), t.animate(e)
              }, function (t) {
                "wait" in t && (s = c(t.wait, 0))
              }), d.call(this), s > 0 && (this.timer = new B({
                duration: s,
                context: this
              }), this.active = !0, e && (this.timer.complete = a));
              var v = this,
                h = !1,
                g = {};
              P(function () {
                p.call(v, t, function (t) {
                  t.active && (h = !0, g[t.name] = t.nextStyle)
                }), h && v.$el.css(g)
              })
            }
          }
        }

        function a() {
          if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
            var t = this.queue.shift();
            o.call(this, t.options, !0, t.args)
          }
        }

        function u(t) {
          var e;
          this.timer && this.timer.destroy(), this.queue = [], this.active = !1, "string" == typeof t ? (e = {})[t] = 1 : e = "object" == (0, r.default)(t) && null != t ? t : this.props, p.call(this, e, v), d.call(this)
        }

        function f() {
          u.call(this), this.el.style.display = "none"
        }

        function l() {
          this.el.offsetHeight
        }

        function d() {
          var t, e, n = [];
          for (t in this.upstream && n.push(this.upstream), this.props)(e = this.props[t]).active && n.push(e.string);
          n = n.join(","), this.style !== n && (this.style = n, this.el.style[C.transition.dom] = n)
        }

        function p(t, e, r) {
          var o, a, u, c, s = e !== v,
            f = {};
          for (o in t) u = t[o], o in q ? (f.transform || (f.transform = {}), f.transform[o] = u) : (E.test(o) && (o = n(o)), o in Q ? f[o] = u : (c || (c = {}), c[o] = u));
          for (o in f) {
            if (u = f[o], !(a = this.props[o])) {
              if (!s) continue;
              a = i.call(this, o)
            }
            e.call(this, a, u)
          }
          r && c && r.call(this, c)
        }

        function v(t) {
          t.stop()
        }

        function g(t, e) {
          t.set(e)
        }

        function _(t) {
          this.$el.css(t)
        }

        function m(t, n) {
          e[t] = function () {
            return this.children ? function (t, e) {
              var n, r = this.children.length;
              for (n = 0; r > n; n++) t.apply(this.children[n], e);
              return this
            }.call(this, n, arguments) : (this.el && n.apply(this, arguments), this)
          }
        }
        e.init = function (e) {
          if (this.$el = t(e), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, H.keepInherited && !H.fallback) {
            var n = Y(this.el, "transition");
            n && !b.test(n) && (this.upstream = n)
          }
          C.backface && H.hideBackface && z(this.el, C.backface.css, "hidden")
        }, m("add", i), m("start", o), m("wait", function (t) {
          t = c(t, 0), this.active ? this.queue.push({
            options: t
          }) : (this.timer = new B({
            duration: t,
            context: this,
            complete: a
          }), this.active = !0)
        }), m("then", function (t) {
          return this.active ? (this.queue.push({
            options: t,
            args: arguments
          }), void(this.timer.complete = a)) : s("No active transition timer. Use start() or wait() before then().")
        }), m("next", a), m("stop", u), m("set", function (t) {
          u.call(this, t), p.call(this, t, g, _)
        }), m("show", function (t) {
          "string" != typeof t && (t = "block"), this.el.style.display = t
        }), m("hide", f), m("redraw", l), m("destroy", function () {
          u.call(this), t.removeData(this.el, h), this.$el = this.el = null
        })
      }),
      j = f(F, function (e) {
        function n(e, n) {
          var r = t.data(e, h) || t.data(e, h, new F.Bare);
          return r.el || r.init(e), n ? r.start(n) : r
        }
        e.init = function (e, r) {
          var i = t(e);
          if (!i.length) return this;
          if (1 === i.length) return n(i[0], r);
          var o = [];
          return i.each(function (t, e) {
            o.push(n(e, r))
          }), this.children = o, this
        }
      }),
      X = f(function (t) {
        function e() {
          var t = this.get();
          this.update("auto");
          var e = this.get();
          return this.update(t), e
        }

        function n(t) {
          var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
          return (e ? o(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
        }
        var i = 500,
          a = "ease",
          u = 0;
        t.init = function (t, e, n, r) {
          this.$el = t, this.el = t[0];
          var o = e[0];
          n[2] && (o = n[2]), K[o] && (o = K[o]), this.name = o, this.type = n[1], this.duration = c(e[1], this.duration, i), this.ease = function (t, e, n) {
            return void 0 !== e && (n = e), t in l ? t : n
          }(e[2], this.ease, a), this.delay = c(e[3], this.delay, u), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = O.test(this.name), this.unit = r.unit || this.unit || H.defaultUnit, this.angle = r.angle || this.angle || H.defaultAngle, H.fallback || r.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + A + this.duration + "ms" + ("ease" != this.ease ? A + l[this.ease][0] : "") + (this.delay ? A + this.delay + "ms" : ""))
        }, t.set = function (t) {
          t = this.convert(t, this.type), this.update(t), this.redraw()
        }, t.transition = function (t) {
          this.active = !0, t = this.convert(t, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == t && (t = e.call(this))), this.nextStyle = t
        }, t.fallback = function (t) {
          var n = this.el.style[this.name] || this.convert(this.get(), this.type);
          t = this.convert(t, this.type), this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == t && (t = e.call(this))), this.tween = new U({
            from: n,
            to: t,
            duration: this.duration,
            delay: this.delay,
            ease: this.ease,
            update: this.update,
            context: this
          })
        }, t.get = function () {
          return Y(this.el, this.name)
        }, t.update = function (t) {
          z(this.el, this.name, t)
        }, t.stop = function () {
          (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, z(this.el, this.name, this.get()));
          var t = this.tween;
          t && t.context && t.destroy()
        }, t.convert = function (t, e) {
          if ("auto" == t && this.auto) return t;
          var i, o = "number" == typeof t,
            a = "string" == typeof t;
          switch (e) {
            case _:
              if (o) return t;
              if (a && "" === t.replace(g, "")) return +t;
              i = "number(unitless)";
              break;
            case m:
              if (a) {
                if ("" === t && this.original) return this.original;
                if (e.test(t)) return "#" == t.charAt(0) && 7 == t.length ? t : n(t)
              }
              i = "hex or rgb string";
              break;
            case y:
              if (o) return t + this.unit;
              if (a && e.test(t)) return t;
              i = "number(px) or string(unit)";
              break;
            case I:
              if (o) return t + this.unit;
              if (a && e.test(t)) return t;
              i = "number(px) or string(unit or %)";
              break;
            case T:
              if (o) return t + this.angle;
              if (a && e.test(t)) return t;
              i = "number(deg) or string(angle)";
              break;
            case w:
              if (o) return t;
              if (a && I.test(t)) return t;
              i = "number(unitless) or string(unit or %)"
          }
          return function (t, e) {
            s("Type warning: Expected: [" + t + "] Got: [" + (0, r.default)(e) + "] " + e)
          }(i, t), t
        }, t.redraw = function () {
          this.el.offsetHeight
        }
      }),
      k = f(X, function (t, e) {
        t.init = function () {
          e.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), m))
        }
      }),
      G = f(X, function (t, e) {
        t.init = function () {
          e.init.apply(this, arguments), this.animate = this.fallback
        }, t.get = function () {
          return this.$el[this.name]()
        }, t.update = function (t) {
          this.$el[this.name](t)
        }
      }),
      V = f(X, function (t, e) {
        function n(t, e) {
          var n, r, i, o, a;
          for (n in t) i = (o = q[n])[0], r = o[1] || n, a = this.convert(t[n], i), e.call(this, r, a, i)
        }
        t.init = function () {
          e.init.apply(this, arguments), this.current || (this.current = {}, q.perspective && H.perspective && (this.current.perspective = H.perspective, z(this.el, this.name, this.style(this.current)), this.redraw()))
        }, t.set = function (t) {
          n.call(this, t, function (t, e) {
            this.current[t] = e
          }), z(this.el, this.name, this.style(this.current)), this.redraw()
        }, t.transition = function (t) {
          var e = this.values(t);
          this.tween = new W({
            current: this.current,
            values: e,
            duration: this.duration,
            delay: this.delay,
            ease: this.ease
          });
          var n, r = {};
          for (n in this.current) r[n] = n in e ? e[n] : this.current[n];
          this.active = !0, this.nextStyle = this.style(r)
        }, t.fallback = function (t) {
          var e = this.values(t);
          this.tween = new W({
            current: this.current,
            values: e,
            duration: this.duration,
            delay: this.delay,
            ease: this.ease,
            update: this.update,
            context: this
          })
        }, t.update = function () {
          z(this.el, this.name, this.style(this.current))
        }, t.style = function (t) {
          var e, n = "";
          for (e in t) n += e + "(" + t[e] + ") ";
          return n
        }, t.values = function (t) {
          var e, r = {};
          return n.call(this, t, function (t, n, i) {
            r[t] = n, void 0 === this.current[t] && (e = 0, ~t.indexOf("scale") && (e = 1), this.current[t] = this.convert(e, i))
          }), r
        }
      }),
      U = f(function (e) {
        function n() {
          var t, e, r, i = c.length;
          if (i)
            for (P(n), e = M(), t = i; t--;)(r = c[t]) && r.render(e)
        }
        var r = {
          ease: l.ease[1],
          from: 0,
          to: 1
        };
        e.init = function (t) {
          this.duration = t.duration || 0, this.delay = t.delay || 0;
          var e = t.ease || r.ease;
          l[e] && (e = l[e][1]), "function" != typeof e && (e = r.ease), this.ease = e, this.update = t.update || a, this.complete = t.complete || a, this.context = t.context || this, this.name = t.name;
          var n = t.from,
            i = t.to;
          void 0 === n && (n = r.from), void 0 === i && (i = r.to), this.unit = t.unit || "", "number" == typeof n && "number" == typeof i ? (this.begin = n, this.change = i - n) : this.format(i, n), this.value = this.begin + this.unit, this.start = M(), !1 !== t.autoplay && this.play()
        }, e.play = function () {
          var t;
          this.active || (this.start || (this.start = M()), this.active = !0, t = this, 1 === c.push(t) && P(n))
        }, e.stop = function () {
          var e, n, r;
          this.active && (this.active = !1, e = this, (r = t.inArray(e, c)) >= 0 && (n = c.slice(r + 1), c.length = r, n.length && (c = c.concat(n))))
        }, e.render = function (t) {
          var e, n = t - this.start;
          if (this.delay) {
            if (n <= this.delay) return;
            n -= this.delay
          }
          if (n < this.duration) {
            var r = this.ease(n, 0, 1, this.duration);
            return e = this.startRGB ? function (t, e, n) {
              return o(t[0] + n * (e[0] - t[0]), t[1] + n * (e[1] - t[1]), t[2] + n * (e[2] - t[2]))
            }(this.startRGB, this.endRGB, r) : function (t) {
              return Math.round(t * s) / s
            }(this.begin + r * this.change), this.value = e + this.unit, void this.update.call(this.context, this.value)
          }
          e = this.endHex || this.begin + this.change, this.value = e + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
        }, e.format = function (t, e) {
          if (e += "", "#" == (t += "").charAt(0)) return this.startRGB = i(e), this.endRGB = i(t), this.endHex = t, this.begin = 0, void(this.change = 1);
          if (!this.unit) {
            var n = e.replace(g, "");
            n !== t.replace(g, "") && u("tween", e, t), this.unit = n
          }
          e = parseFloat(e), t = parseFloat(t), this.begin = this.value = e, this.change = t - e
        }, e.destroy = function () {
          this.stop(), this.context = null, this.ease = this.update = this.complete = a
        };
        var c = [],
          s = 1e3
      }),
      B = f(U, function (t) {
        t.init = function (t) {
          this.duration = t.duration || 0, this.complete = t.complete || a, this.context = t.context, this.play()
        }, t.render = function (t) {
          t - this.start < this.duration || (this.complete.call(this.context), this.destroy())
        }
      }),
      W = f(U, function (t, e) {
        t.init = function (t) {
          var e, n;
          for (e in this.context = t.context, this.update = t.update, this.tweens = [], this.current = t.current, t.values) n = t.values[e], this.current[e] !== n && this.tweens.push(new U({
            name: e,
            from: this.current[e],
            to: n,
            duration: t.duration,
            delay: t.delay,
            ease: t.ease,
            autoplay: !1
          }));
          this.play()
        }, t.render = function (t) {
          var e, n, r = !1;
          for (e = this.tweens.length; e--;)(n = this.tweens[e]).context && (n.render(t), this.current[n.name] = n.value, r = !0);
          return r ? void(this.update && this.update.call(this.context)) : this.destroy()
        }, t.destroy = function () {
          if (e.destroy.call(this), this.tweens) {
            var t;
            for (t = this.tweens.length; t--;) this.tweens[t].destroy();
            this.tweens = null, this.current = null
          }
        }
      }),
      H = e.config = {
        debug: !1,
        defaultUnit: "px",
        defaultAngle: "deg",
        keepInherited: !1,
        hideBackface: !1,
        perspective: "",
        fallback: !C.transition,
        agentTests: []
      };
    e.fallback = function (t) {
      if (!C.transition) return H.fallback = !0;
      H.agentTests.push("(" + t + ")");
      var e = new RegExp(H.agentTests.join("|"), "i");
      H.fallback = e.test(navigator.userAgent)
    }, e.fallback("6.0.[2-5] Safari"), e.tween = function (t) {
      return new U(t)
    }, e.delay = function (t, e, n) {
      return new B({
        complete: e,
        duration: t,
        context: n
      })
    }, t.fn.tram = function (t) {
      return e.call(null, this, t)
    };
    var z = t.style,
      Y = t.css,
      K = {
        transform: C.transform && C.transform.css
      },
      Q = {
        color: [k, m],
        background: [k, m, "background-color"],
        "outline-color": [k, m],
        "border-color": [k, m],
        "border-top-color": [k, m],
        "border-right-color": [k, m],
        "border-bottom-color": [k, m],
        "border-left-color": [k, m],
        "border-width": [X, y],
        "border-top-width": [X, y],
        "border-right-width": [X, y],
        "border-bottom-width": [X, y],
        "border-left-width": [X, y],
        "border-spacing": [X, y],
        "letter-spacing": [X, y],
        margin: [X, y],
        "margin-top": [X, y],
        "margin-right": [X, y],
        "margin-bottom": [X, y],
        "margin-left": [X, y],
        padding: [X, y],
        "padding-top": [X, y],
        "padding-right": [X, y],
        "padding-bottom": [X, y],
        "padding-left": [X, y],
        "outline-width": [X, y],
        opacity: [X, _],
        top: [X, I],
        right: [X, I],
        bottom: [X, I],
        left: [X, I],
        "font-size": [X, I],
        "text-indent": [X, I],
        "word-spacing": [X, I],
        width: [X, I],
        "min-width": [X, I],
        "max-width": [X, I],
        height: [X, I],
        "min-height": [X, I],
        "max-height": [X, I],
        "line-height": [X, w],
        "scroll-top": [G, _, "scrollTop"],
        "scroll-left": [G, _, "scrollLeft"]
      },
      q = {};
    C.transform && (Q.transform = [V], q = {
      x: [I, "translateX"],
      y: [I, "translateY"],
      rotate: [T],
      rotateX: [T],
      rotateY: [T],
      scale: [_],
      scaleX: [_],
      scaleY: [_],
      skew: [T],
      skewX: [T],
      skewY: [T]
    }), C.transform && C.backface && (q.z = [I, "translateZ"], q.rotateZ = [T], q.scaleZ = [_], q.perspective = [y]);
    var $ = /ms/,
      Z = /s|\./;
    return t.tram = e
  }(window.jQuery)
}, function (t, e, n) {
  "use strict";
  n.r(e);
  var r = n(30);
  n.d(e, "createStore", function () {
    return r.default
  });
  var i = n(58);
  n.d(e, "combineReducers", function () {
    return i.default
  });
  var o = n(60);
  n.d(e, "bindActionCreators", function () {
    return o.default
  });
  var a = n(61);
  n.d(e, "applyMiddleware", function () {
    return a.default
  });
  var u = n(32);
  n.d(e, "compose", function () {
    return u.default
  });
  n(59)
}, function (t, e, n) {
  "use strict";
  n.r(e);
  var r = n(105),
    i = n(110),
    o = n(112),
    a = "[object Object]",
    u = Function.prototype,
    c = Object.prototype,
    s = u.toString,
    f = c.hasOwnProperty,
    l = s.call(Object);
  e.default = function (t) {
    if (!Object(o.default)(t) || Object(r.default)(t) != a) return !1;
    var e = Object(i.default)(t);
    if (null === e) return !0;
    var n = f.call(e, "constructor") && e.constructor;
    return "function" == typeof n && n instanceof n && s.call(n) == l
  }
}, function (t, e, n) {
  "use strict";
  n.r(e);
  var r = n(106).default.Symbol;
  e.default = r
}, function (t, e, n) {
  "use strict";
  n.r(e), n.d(e, "default", function () {
    return o
  });
  var r = n(30);
  n(56), n(59);

  function i(t, e) {
    var n = e && e.type;
    return "Given action " + (n && '"' + n.toString() + '"' || "an action") + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
  }

  function o(t) {
    for (var e = Object.keys(t), n = {}, o = 0; o < e.length; o++) {
      var a = e[o];
      0, "function" == typeof t[a] && (n[a] = t[a])
    }
    var u, c = Object.keys(n);
    try {
      ! function (t) {
        Object.keys(t).forEach(function (e) {
          var n = t[e];
          if (void 0 === n(void 0, {
              type: r.ActionTypes.INIT
            })) throw new Error('Reducer "' + e + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
          if (void 0 === n(void 0, {
              type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
            })) throw new Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + r.ActionTypes.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')
        })
      }(n)
    } catch (t) {
      u = t
    }
    return function () {
      var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
        e = arguments[1];
      if (u) throw u;
      for (var r = !1, o = {}, a = 0; a < c.length; a++) {
        var s = c[a],
          f = n[s],
          l = t[s],
          d = f(l, e);
        if (void 0 === d) {
          var p = i(s, e);
          throw new Error(p)
        }
        o[s] = d, r = r || d !== l
      }
      return r ? o : t
    }
  }
}, function (t, e, n) {
  "use strict";

  function r(t) {
    "undefined" != typeof console && "function" == typeof console.error && console.error(t);
    try {
      throw new Error(t)
    } catch (t) {}
  }
  n.r(e), n.d(e, "default", function () {
    return r
  })
}, function (t, e, n) {
  "use strict";

  function r(t, e) {
    return function () {
      return e(t.apply(void 0, arguments))
    }
  }

  function i(t, e) {
    if ("function" == typeof t) return r(t, e);
    if ("object" != typeof t || null === t) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : typeof t) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
    for (var n = Object.keys(t), i = {}, o = 0; o < n.length; o++) {
      var a = n[o],
        u = t[a];
      "function" == typeof u && (i[a] = r(u, e))
    }
    return i
  }
  n.r(e), n.d(e, "default", function () {
    return i
  })
}, function (t, e, n) {
  "use strict";
  n.r(e), n.d(e, "default", function () {
    return o
  });
  var r = n(32),
    i = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
      }
      return t
    };

  function o() {
    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
    return function (t) {
      return function (n, o, a) {
        var u, c = t(n, o, a),
          s = c.dispatch,
          f = {
            getState: c.getState,
            dispatch: function (t) {
              return s(t)
            }
          };
        return u = e.map(function (t) {
          return t(f)
        }), s = r.default.apply(void 0, u)(c.dispatch), i({}, c, {
          dispatch: s
        })
      }
    }
  }
}, function (t, e, n) {
  var r = n(63)(n(188));
  t.exports = r
}, function (t, e, n) {
  var r = n(6),
    i = n(11),
    o = n(23);
  t.exports = function (t) {
    return function (e, n, a) {
      var u = Object(e);
      if (!i(e)) {
        var c = r(n, 3);
        e = o(e), n = function (t) {
          return c(u[t], t, u)
        }
      }
      var s = t(e, n, a);
      return s > -1 ? u[c ? e[s] : s] : void 0
    }
  }
}, function (t, e, n) {
  var r = n(19),
    i = n(132),
    o = n(133),
    a = n(134),
    u = n(135),
    c = n(136);

  function s(t) {
    var e = this.__data__ = new r(t);
    this.size = e.size
  }
  s.prototype.clear = i, s.prototype.delete = o, s.prototype.get = a, s.prototype.has = u, s.prototype.set = c, t.exports = s
}, function (t, e, n) {
  var r = n(10),
    i = n(5),
    o = "[object AsyncFunction]",
    a = "[object Function]",
    u = "[object GeneratorFunction]",
    c = "[object Proxy]";
  t.exports = function (t) {
    if (!i(t)) return !1;
    var e = r(t);
    return e == a || e == u || e == o || e == c
  }
}, function (t, e, n) {
  (function (e) {
    var n = "object" == typeof e && e && e.Object === Object && e;
    t.exports = n
  }).call(this, n(31))
}, function (t, e) {
  var n = Function.prototype.toString;
  t.exports = function (t) {
    if (null != t) {
      try {
        return n.call(t)
      } catch (t) {}
      try {
        return t + ""
      } catch (t) {}
    }
    return ""
  }
}, function (t, e, n) {
  var r = n(155),
    i = n(8);
  t.exports = function t(e, n, o, a, u) {
    return e === n || (null == e || null == n || !i(e) && !i(n) ? e != e && n != n : r(e, n, o, a, t, u))
  }
}, function (t, e, n) {
  var r = n(156),
    i = n(159),
    o = n(160),
    a = 1,
    u = 2;
  t.exports = function (t, e, n, c, s, f) {
    var l = n & a,
      d = t.length,
      p = e.length;
    if (d != p && !(l && p > d)) return !1;
    var v = f.get(t);
    if (v && f.get(e)) return v == e;
    var h = -1,
      g = !0,
      E = n & u ? new r : void 0;
    for (f.set(t, e), f.set(e, t); ++h < d;) {
      var _ = t[h],
        m = e[h];
      if (c) var y = l ? c(m, _, h, e, t, f) : c(_, m, h, t, e, f);
      if (void 0 !== y) {
        if (y) continue;
        g = !1;
        break
      }
      if (E) {
        if (!i(e, function (t, e) {
            if (!o(E, e) && (_ === t || s(_, t, n, c, f))) return E.push(e)
          })) {
          g = !1;
          break
        }
      } else if (_ !== m && !s(_, m, n, c, f)) {
        g = !1;
        break
      }
    }
    return f.delete(t), f.delete(e), g
  }
}, function (t, e, n) {
  var r = n(37),
    i = n(1);
  t.exports = function (t, e, n) {
    var o = e(t);
    return i(t) ? o : r(o, n(t))
  }
}, function (t, e, n) {
  var r = n(167),
    i = n(72),
    o = Object.prototype.propertyIsEnumerable,
    a = Object.getOwnPropertySymbols,
    u = a ? function (t) {
      return null == t ? [] : (t = Object(t), r(a(t), function (e) {
        return o.call(t, e)
      }))
    } : i;
  t.exports = u
}, function (t, e) {
  t.exports = function () {
    return []
  }
}, function (t, e, n) {
  var r = n(168),
    i = n(24),
    o = n(1),
    a = n(38),
    u = n(39),
    c = n(40),
    s = Object.prototype.hasOwnProperty;
  t.exports = function (t, e) {
    var n = o(t),
      f = !n && i(t),
      l = !n && !f && a(t),
      d = !n && !f && !l && c(t),
      p = n || f || l || d,
      v = p ? r(t.length, String) : [],
      h = v.length;
    for (var g in t) !e && !s.call(t, g) || p && ("length" == g || l && ("offset" == g || "parent" == g) || d && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || u(g, h)) || v.push(g);
    return v
  }
}, function (t, e) {
  t.exports = function (t) {
    return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
      enumerable: !0,
      get: function () {
        return t.l
      }
    }), Object.defineProperty(t, "id", {
      enumerable: !0,
      get: function () {
        return t.i
      }
    }), t.webpackPolyfill = 1), t
  }
}, function (t, e) {
  t.exports = function (t, e) {
    return function (n) {
      return t(e(n))
    }
  }
}, function (t, e, n) {
  var r = n(7)(n(4), "WeakMap");
  t.exports = r
}, function (t, e, n) {
  var r = n(5);
  t.exports = function (t) {
    return t == t && !r(t)
  }
}, function (t, e) {
  t.exports = function (t, e) {
    return function (n) {
      return null != n && n[t] === e && (void 0 !== e || t in Object(n))
    }
  }
}, function (t, e, n) {
  var r = n(80);
  t.exports = function (t) {
    return null == t ? "" : r(t)
  }
}, function (t, e, n) {
  var r = n(14),
    i = n(81),
    o = n(1),
    a = n(27),
    u = 1 / 0,
    c = r ? r.prototype : void 0,
    s = c ? c.toString : void 0;
  t.exports = function t(e) {
    if ("string" == typeof e) return e;
    if (o(e)) return i(e, t) + "";
    if (a(e)) return s ? s.call(e) : "";
    var n = e + "";
    return "0" == n && 1 / e == -u ? "-0" : n
  }
}, function (t, e) {
  t.exports = function (t, e) {
    for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) i[n] = e(t[n], n, t);
    return i
  }
}, function (t, e) {
  t.exports = function (t) {
    return function (e) {
      return null == e ? void 0 : e[t]
    }
  }
}, function (t, e) {
  t.exports = function (t, e, n, r) {
    for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
      if (e(t[o], o, t)) return o;
    return -1
  }
}, function (t, e, n) {
  "use strict";
  var r = n(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.inQuad = function (t) {
    return Math.pow(t, 2)
  }, e.outQuad = function (t) {
    return -(Math.pow(t - 1, 2) - 1)
  }, e.inOutQuad = function (t) {
    if ((t /= .5) < 1) return .5 * Math.pow(t, 2);
    return -.5 * ((t -= 2) * t - 2)
  }, e.inCubic = function (t) {
    return Math.pow(t, 3)
  }, e.outCubic = function (t) {
    return Math.pow(t - 1, 3) + 1
  }, e.inOutCubic = function (t) {
    if ((t /= .5) < 1) return .5 * Math.pow(t, 3);
    return .5 * (Math.pow(t - 2, 3) + 2)
  }, e.inQuart = function (t) {
    return Math.pow(t, 4)
  }, e.outQuart = function (t) {
    return -(Math.pow(t - 1, 4) - 1)
  }, e.inOutQuart = function (t) {
    if ((t /= .5) < 1) return .5 * Math.pow(t, 4);
    return -.5 * ((t -= 2) * Math.pow(t, 3) - 2)
  }, e.inQuint = function (t) {
    return Math.pow(t, 5)
  }, e.outQuint = function (t) {
    return Math.pow(t - 1, 5) + 1
  }, e.inOutQuint = function (t) {
    if ((t /= .5) < 1) return .5 * Math.pow(t, 5);
    return .5 * (Math.pow(t - 2, 5) + 2)
  }, e.inSine = function (t) {
    return 1 - Math.cos(t * (Math.PI / 2))
  }, e.outSine = function (t) {
    return Math.sin(t * (Math.PI / 2))
  }, e.inOutSine = function (t) {
    return -.5 * (Math.cos(Math.PI * t) - 1)
  }, e.inExpo = function (t) {
    return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
  }, e.outExpo = function (t) {
    return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
  }, e.inOutExpo = function (t) {
    if (0 === t) return 0;
    if (1 === t) return 1;
    if ((t /= .5) < 1) return .5 * Math.pow(2, 10 * (t - 1));
    return .5 * (2 - Math.pow(2, -10 * --t))
  }, e.inCirc = function (t) {
    return -(Math.sqrt(1 - t * t) - 1)
  }, e.outCirc = function (t) {
    return Math.sqrt(1 - Math.pow(t - 1, 2))
  }, e.inOutCirc = function (t) {
    if ((t /= .5) < 1) return -.5 * (Math.sqrt(1 - t * t) - 1);
    return .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
  }, e.outBounce = function (t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
  }, e.inBack = function (t) {
    return t * t * ((o + 1) * t - o)
  }, e.outBack = function (t) {
    return (t -= 1) * t * ((o + 1) * t + o) + 1
  }, e.inOutBack = function (t) {
    var e = o;
    if ((t /= .5) < 1) return t * t * ((1 + (e *= 1.525)) * t - e) * .5;
    return .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
  }, e.inElastic = function (t) {
    var e = o,
      n = 0,
      r = 1;
    if (0 === t) return 0;
    if (1 === t) return 1;
    n || (n = .3);
    r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
    return -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)
  }, e.outElastic = function (t) {
    var e = o,
      n = 0,
      r = 1;
    if (0 === t) return 0;
    if (1 === t) return 1;
    n || (n = .3);
    r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
    return r * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1
  }, e.inOutElastic = function (t) {
    var e = o,
      n = 0,
      r = 1;
    if (0 === t) return 0;
    if (2 == (t /= .5)) return 1;
    n || (n = .3 * 1.5);
    r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
    if (t < 1) return r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5;
    return r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1
  }, e.swingFromTo = function (t) {
    var e = o;
    return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
  }, e.swingFrom = function (t) {
    return t * t * ((o + 1) * t - o)
  }, e.swingTo = function (t) {
    return (t -= 1) * t * ((o + 1) * t + o) + 1
  }, e.bounce = function (t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
  }, e.bouncePast = function (t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
  }, e.easeInOut = e.easeOut = e.easeIn = e.ease = void 0;
  var i = r(n(85)),
    o = 1.70158,
    a = (0, i.default)(.25, .1, .25, 1);
  e.ease = a;
  var u = (0, i.default)(.42, 0, 1, 1);
  e.easeIn = u;
  var c = (0, i.default)(0, 0, .58, 1);
  e.easeOut = c;
  var s = (0, i.default)(.42, 0, .58, 1);
  e.easeInOut = s
}, function (t, e) {
  var n = 4,
    r = .001,
    i = 1e-7,
    o = 10,
    a = 11,
    u = 1 / (a - 1),
    c = "function" == typeof Float32Array;

  function s(t, e) {
    return 1 - 3 * e + 3 * t
  }

  function f(t, e) {
    return 3 * e - 6 * t
  }

  function l(t) {
    return 3 * t
  }

  function d(t, e, n) {
    return ((s(e, n) * t + f(e, n)) * t + l(e)) * t
  }

  function p(t, e, n) {
    return 3 * s(e, n) * t * t + 2 * f(e, n) * t + l(e)
  }
  t.exports = function (t, e, s, f) {
    if (!(0 <= t && t <= 1 && 0 <= s && s <= 1)) throw new Error("bezier x values must be in [0, 1] range");
    var l = c ? new Float32Array(a) : new Array(a);
    if (t !== e || s !== f)
      for (var v = 0; v < a; ++v) l[v] = d(v * u, t, s);

    function h(e) {
      for (var c = 0, f = 1, v = a - 1; f !== v && l[f] <= e; ++f) c += u;
      var h = c + (e - l[--f]) / (l[f + 1] - l[f]) * u,
        g = p(h, t, s);
      return g >= r ? function (t, e, r, i) {
        for (var o = 0; o < n; ++o) {
          var a = p(e, r, i);
          if (0 === a) return e;
          e -= (d(e, r, i) - t) / a
        }
        return e
      }(e, h, t, s) : 0 === g ? h : function (t, e, n, r, a) {
        var u, c, s = 0;
        do {
          (u = d(c = e + (n - e) / 2, r, a) - t) > 0 ? n = c : e = c
        } while (Math.abs(u) > i && ++s < o);
        return c
      }(e, c, c + u, t, s)
    }
    return function (n) {
      return t === e && s === f ? n : 0 === n ? 0 : 1 === n ? 1 : d(h(n), e, f)
    }
  }
}, function (t, e, n) {
  "use strict";
  var r = n(0)(n(87)),
    i = n(0),
    o = n(12);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.optimizeFloat = c, e.createBezierEasing = function (t) {
    return u.default.apply(void 0, (0, r.default)(t))
  }, e.applyEasing = function (t, e, n) {
    if (0 === e) return 0;
    if (1 === e) return 1;
    if (n) return c(e > 0 ? n(e) : e);
    return c(e > 0 && t && a[t] ? a[t](e) : e)
  };
  var a = o(n(84)),
    u = i(n(85));

  function c(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
      r = Math.pow(n, e),
      i = Number(Math.round(t * r) / r);
    return Math.abs(i) > 1e-4 ? i : 0
  }
}, function (t, e, n) {
  var r = n(190),
    i = n(191),
    o = n(192);
  t.exports = function (t) {
    return r(t) || i(t) || o()
  }
}, function (t, e, n) {
  "use strict";
  var r = n(0)(n(17));
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.isPluginType = function (t) {
    return t === o.ActionTypeConsts.PLUGIN_LOTTIE
  }, e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginDuration = e.getPluginOrigin = e.getPluginConfig = void 0;
  var i = n(194),
    o = n(2),
    a = n(33),
    u = (0, r.default)({}, o.ActionTypeConsts.PLUGIN_LOTTIE, {
      getConfig: i.getPluginConfig,
      getOrigin: i.getPluginOrigin,
      getDuration: i.getPluginDuration,
      getDestination: i.getPluginDestination,
      createInstance: i.createPluginInstance,
      render: i.renderPlugin,
      clear: i.clearPlugin
    });
  var c = function (t) {
      return function (e) {
        if (!a.IS_BROWSER_ENV) return function () {
          return null
        };
        var n = u[e];
        if (!n) throw new Error("IX2 no plugin configured for: ".concat(e));
        var r = n[t];
        if (!r) throw new Error("IX2 invalid plugin method: ".concat(t));
        return r
      }
    },
    s = c("getConfig");
  e.getPluginConfig = s;
  var f = c("getOrigin");
  e.getPluginOrigin = f;
  var l = c("getDuration");
  e.getPluginDuration = l;
  var d = c("getDestination");
  e.getPluginDestination = d;
  var p = c("createInstance");
  e.createPluginInstance = p;
  var v = c("render");
  e.renderPlugin = v;
  var h = c("clear");
  e.clearPlugin = h
}, function (t, e, n) {
  var r = n(90),
    i = n(201)(r);
  t.exports = i
}, function (t, e, n) {
  var r = n(199),
    i = n(23);
  t.exports = function (t, e) {
    return t && r(t, e, i)
  }
}, function (t, e, n) {
  "use strict";
  var r = n(205);
  e.__esModule = !0, e.default = void 0;
  var i = r(n(206)).default;
  e.default = i
}, function (t, e, n) {
  "use strict";
  var r = n(0)(n(87)),
    i = n(12),
    o = n(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.observeRequests = function (t) {
    D({
      store: t,
      select: function (t) {
        var e = t.ixRequest;
        return e.preview
      },
      onChange: tt
    }), D({
      store: t,
      select: function (t) {
        var e = t.ixRequest;
        return e.playback
      },
      onChange: rt
    }), D({
      store: t,
      select: function (t) {
        var e = t.ixRequest;
        return e.stop
      },
      onChange: it
    }), D({
      store: t,
      select: function (t) {
        var e = t.ixRequest;
        return e.clear
      },
      onChange: ot
    })
  }, e.startEngine = at, e.stopEngine = ut, e.stopAllActionGroups = ht, e.stopActionGroup = gt, e.startActionGroup = Et;
  var a = o(n(18)),
    u = o(n(209)),
    c = o(n(62)),
    s = o(n(25)),
    f = o(n(210)),
    l = o(n(216)),
    d = o(n(228)),
    p = o(n(229)),
    v = o(n(230)),
    h = o(n(233)),
    g = o(n(234)),
    E = o(n(91)),
    _ = n(2),
    m = n(9),
    y = n(50),
    I = i(n(237)),
    T = o(n(238)),
    w = _.IX2EngineConstants,
    b = w.COLON_DELIMITER,
    O = w.BOUNDARY_SELECTOR,
    A = w.HTML_ELEMENT,
    S = w.RENDER_GENERAL,
    x = w.W_MOD_IX,
    R = m.IX2VanillaUtils,
    N = R.getAffectedElements,
    C = R.getElementId,
    L = R.getDestinationValues,
    D = R.observeStore,
    P = R.getInstanceId,
    M = R.renderHTMLElement,
    F = R.clearAllStyles,
    j = R.getMaxDurationItemIndex,
    X = R.getComputedStyle,
    k = R.getInstanceOrigin,
    G = R.reduceListToGroup,
    V = R.shouldNamespaceEventParameter,
    U = R.getNamespacedParameterId,
    B = R.shouldAllowMediaQuery,
    W = R.cleanupHTMLElement,
    H = R.stringifyTarget,
    z = R.mediaQueriesEqual,
    Y = m.IX2VanillaPlugins,
    K = Y.isPluginType,
    Q = Y.createPluginInstance,
    q = Y.getPluginDuration,
    $ = navigator.userAgent,
    Z = $.match(/iPad/i) || $.match(/iPhone/),
    J = 12;

  function tt(t, e) {
    var n = t.rawData,
      r = function () {
        at({
          store: e,
          rawData: n,
          allowEvents: !0
        }), et()
      };
    t.defer ? setTimeout(r, 0) : r()
  }

  function et() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
  }

  function nt(t) {
    return t && (0, h.default)(t, "_EFFECT")
  }

  function rt(t, e) {
    var n = t.actionTypeId,
      r = t.actionListId,
      i = t.actionItemId,
      o = t.eventId,
      a = t.allowEvents,
      u = t.immediate,
      c = t.testManual,
      s = t.verbose,
      f = void 0 === s || s,
      l = t.rawData;
    if (r && i && l && u) {
      var d = l.actionLists[r];
      d && (l = G({
        actionList: d,
        actionItemId: i,
        rawData: l
      }))
    }
    if (at({
        store: e,
        rawData: l,
        allowEvents: a,
        testManual: c
      }), r && n === _.ActionTypeConsts.GENERAL_START_ACTION || nt(n)) {
      gt({
        store: e,
        actionListId: r
      }), vt({
        store: e,
        actionListId: r,
        eventId: o
      });
      var p = Et({
        store: e,
        eventId: o,
        actionListId: r,
        immediate: u,
        verbose: f
      });
      f && p && e.dispatch((0, y.actionListPlaybackChanged)({
        actionListId: r,
        isPlaying: !u
      }))
    }
  }

  function it(t, e) {
    var n = t.actionListId;
    n ? gt({
      store: e,
      actionListId: n
    }) : ht({
      store: e
    }), ut(e)
  }

  function ot(t, e) {
    ut(e), F({
      store: e,
      elementApi: I
    })
  }

  function at(t) {
    var e, n = t.store,
      i = t.rawData,
      o = t.allowEvents,
      a = t.testManual,
      u = n.getState().ixSession;
    i && n.dispatch((0, y.rawDataImported)(i)), u.active || (n.dispatch((0, y.sessionInitialized)({
      hasBoundaryNodes: Boolean(document.querySelector(O))
    })), o && (function (t) {
      var e = t.getState().ixData.eventTypeMap;
      ft(t), (0, v.default)(e, function (e, n) {
        var i = T.default[n];
        i ? function (t) {
          var e = t.logic,
            n = t.store,
            i = t.events;
          ! function (t) {
            if (Z) {
              var e = {},
                n = "";
              for (var r in t) {
                var i = t[r],
                  o = i.eventTypeId,
                  a = i.target,
                  u = I.getQuerySelector(a);
                e[u] || o !== _.EventTypeConsts.MOUSE_CLICK && o !== _.EventTypeConsts.MOUSE_SECOND_CLICK || (e[u] = !0, n += u + "{cursor: pointer;touch-action: manipulation;}")
              }
              if (n) {
                var c = document.createElement("style");
                c.textContent = n, document.body.appendChild(c)
              }
            }
          }(i);
          var o = e.types,
            a = e.handler,
            u = n.getState().ixData,
            l = u.actionLists,
            d = lt(i, pt);
          if ((0, f.default)(d)) {
            (0, v.default)(d, function (t, e) {
              var o = i[e],
                a = o.action,
                f = o.id,
                d = o.mediaQueries,
                p = void 0 === d ? u.mediaQueryKeys : d,
                v = a.config.actionListId;
              if (z(p, u.mediaQueryKeys) || n.dispatch((0, y.mediaQueriesDefined)()), a.actionTypeId === _.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
                var h = Array.isArray(o.config) ? o.config : [o.config];
                h.forEach(function (e) {
                  var i = e.continuousParameterGroupId,
                    o = (0, s.default)(l, "".concat(v, ".continuousParameterGroups"), []),
                    a = (0, c.default)(o, function (t) {
                      var e = t.id;
                      return e === i
                    }),
                    u = (e.smoothing || 0) / 100,
                    d = (e.restingState || 0) / 100;
                  a && t.forEach(function (t, i) {
                    var o = f + b + i;
                    ! function (t) {
                      var e = t.store,
                        n = t.eventStateKey,
                        i = t.eventTarget,
                        o = t.eventId,
                        a = t.eventConfig,
                        u = t.actionListId,
                        c = t.parameterGroup,
                        f = t.smoothing,
                        l = t.restingValue,
                        d = e.getState(),
                        p = d.ixData,
                        v = d.ixSession,
                        h = p.events[o],
                        g = h.eventTypeId,
                        E = {},
                        _ = {},
                        m = [],
                        y = c.continuousActionGroups,
                        T = c.id;
                      V(g, a) && (T = U(n, T));
                      var w = v.hasBoundaryNodes && i ? I.getClosestElement(i, O) : null;
                      y.forEach(function (t) {
                        var e = t.keyframe,
                          n = t.actionItems;
                        n.forEach(function (t) {
                          var n = t.actionTypeId,
                            o = t.config.target;
                          if (o) {
                            var a = o.boundaryMode ? w : null,
                              u = H(o) + b + n;
                            if (_[u] = function () {
                                var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                  n = arguments.length > 1 ? arguments[1] : void 0,
                                  i = arguments.length > 2 ? arguments[2] : void 0,
                                  o = (0, r.default)(e);
                                return o.some(function (e, r) {
                                  return e.keyframe === n && (t = r, !0)
                                }), null == t && (t = o.length, o.push({
                                  keyframe: n,
                                  actionItems: []
                                })), o[t].actionItems.push(i), o
                              }(_[u], e, t), !E[u]) {
                              E[u] = !0;
                              var c = t.config;
                              N({
                                config: c,
                                event: h,
                                eventTarget: i,
                                elementRoot: a,
                                elementApi: I
                              }).forEach(function (t) {
                                m.push({
                                  element: t,
                                  key: u
                                })
                              })
                            }
                          }
                        })
                      }), m.forEach(function (t) {
                        var n = t.element,
                          r = t.key,
                          i = _[r],
                          a = (0, s.default)(i, "[0].actionItems[0]", {}),
                          c = a.actionTypeId,
                          d = K(c) ? Q(c)(n, a) : null,
                          p = L({
                            element: n,
                            actionItem: a,
                            elementApi: I
                          }, d);
                        _t({
                          store: e,
                          element: n,
                          eventId: o,
                          actionListId: u,
                          actionItem: a,
                          destination: p,
                          continuous: !0,
                          parameterId: T,
                          actionGroups: i,
                          smoothing: f,
                          restingValue: l,
                          pluginInstance: d
                        })
                      })
                    }({
                      store: n,
                      eventStateKey: o,
                      eventTarget: t,
                      eventId: f,
                      eventConfig: e,
                      actionListId: v,
                      parameterGroup: a,
                      smoothing: u,
                      restingValue: d
                    })
                  })
                })
              }(a.actionTypeId === _.ActionTypeConsts.GENERAL_START_ACTION || nt(a.actionTypeId)) && vt({
                store: n,
                actionListId: v,
                eventId: f
              })
            });
            var p = function (t) {
                var e = n.getState(),
                  r = e.ixSession;
                dt(d, function (e, o, c) {
                  var s = i[o],
                    f = r.eventState[c],
                    l = s.action,
                    d = s.mediaQueries,
                    p = void 0 === d ? u.mediaQueryKeys : d;
                  if (B(p, r.mediaQueryKey)) {
                    var v = function () {
                      var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = a({
                          store: n,
                          element: e,
                          event: s,
                          eventConfig: r,
                          nativeEvent: t,
                          eventStateKey: c
                        }, f);
                      (0, E.default)(i, f) || n.dispatch((0, y.eventStateChanged)(c, i))
                    };
                    if (l.actionTypeId === _.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
                      var h = Array.isArray(s.config) ? s.config : [s.config];
                      h.forEach(v)
                    } else v()
                  }
                })
              },
              h = (0, g.default)(p, J),
              m = function (t) {
                var e = t.target,
                  r = void 0 === e ? document : e,
                  i = t.types,
                  o = t.throttle;
                i.split(" ").filter(Boolean).forEach(function (t) {
                  var e = o ? h : p;
                  r.addEventListener(t, e), n.dispatch((0, y.eventListenerAdded)(r, [t, e]))
                })
              };
            Array.isArray(o) ? o.forEach(m) : "string" == typeof o && m(e)
          }
        }({
          logic: i,
          store: t,
          events: e
        }) : console.warn("IX2 event type not configured: ".concat(n))
      }), t.getState().ixSession.eventListeners.length && function (t) {
        var e = function () {
          ft(t)
        };
        st.forEach(function (n) {
          window.addEventListener(n, e), t.dispatch((0, y.eventListenerAdded)(window, [n, e]))
        }), e()
      }(t)
    }(n), -1 === (e = document.documentElement).className.indexOf(x) && (e.className += " ".concat(x)), n.getState().ixSession.hasDefinedMediaQueries && function (t) {
      D({
        store: t,
        select: function (t) {
          return t.ixSession.mediaQueryKey
        },
        onChange: function () {
          ut(t), F({
            store: t,
            elementApi: I
          }), at({
            store: t,
            allowEvents: !0
          }), et()
        }
      })
    }(n)), n.dispatch((0, y.sessionStarted)()), function (t, e) {
      ! function n(r) {
        var i = t.getState(),
          o = i.ixSession,
          a = i.ixParameters;
        o.active && (t.dispatch((0, y.animationFrameChanged)(r, a)), e ? function (t, e) {
          var n = D({
            store: t,
            select: function (t) {
              return t.ixSession.tick
            },
            onChange: function (t) {
              e(t), n()
            }
          })
        }(t, n) : requestAnimationFrame(n))
      }(window.performance.now())
    }(n, a))
  }

  function ut(t) {
    var e = t.getState().ixSession;
    e.active && (e.eventListeners.forEach(ct), t.dispatch((0, y.sessionStopped)()))
  }

  function ct(t) {
    var e = t.target,
      n = t.listenerParams;
    e.removeEventListener.apply(e, n)
  }
  var st = ["resize", "orientationchange"];

  function ft(t) {
    var e = t.getState(),
      n = e.ixSession,
      r = e.ixData,
      i = window.innerWidth;
    if (i !== n.viewportWidth) {
      var o = r.mediaQueries;
      t.dispatch((0, y.viewportWidthChanged)({
        width: i,
        mediaQueries: o
      }))
    }
  }
  var lt = function (t, e) {
      return (0, l.default)((0, p.default)(t, e), d.default)
    },
    dt = function (t, e) {
      (0, v.default)(t, function (t, n) {
        t.forEach(function (t, r) {
          e(t, n, n + b + r)
        })
      })
    },
    pt = function (t) {
      var e = {
        target: t.target
      };
      return N({
        config: e,
        elementApi: I
      })
    };

  function vt(t) {
    var e = t.store,
      n = t.actionListId,
      r = t.eventId,
      i = e.getState(),
      o = i.ixData,
      a = i.ixSession,
      u = o.actionLists,
      c = o.events[r],
      f = u[n];
    if (f && f.useFirstGroupAsInitialState) {
      var l = (0, s.default)(f, "actionItemGroups[0].actionItems", []),
        d = (0, s.default)(c, "mediaQueries", o.mediaQueryKeys);
      if (!B(d, a.mediaQueryKey)) return;
      l.forEach(function (t) {
        var i = t.config,
          o = t.actionTypeId,
          a = N({
            config: i,
            event: c,
            elementApi: I
          }),
          u = K(o);
        a.forEach(function (i) {
          var a = u ? Q(o)(i, t) : null;
          _t({
            destination: L({
              element: i,
              actionItem: t,
              elementApi: I
            }, a),
            immediate: !0,
            store: e,
            element: i,
            eventId: r,
            actionItem: t,
            actionListId: n,
            pluginInstance: a
          })
        })
      })
    }
  }

  function ht(t) {
    var e = t.store,
      n = e.getState().ixInstances;
    (0, v.default)(n, function (t) {
      if (!t.continuous) {
        var n = t.actionListId,
          r = t.verbose;
        mt(t, e), r && e.dispatch((0, y.actionListPlaybackChanged)({
          actionListId: n,
          isPlaying: !1
        }))
      }
    })
  }

  function gt(t) {
    var e = t.store,
      n = t.eventId,
      r = t.eventTarget,
      i = t.eventStateKey,
      o = t.actionListId,
      a = e.getState(),
      u = a.ixInstances,
      c = a.ixSession.hasBoundaryNodes && r ? I.getClosestElement(r, O) : null;
    (0, v.default)(u, function (t) {
      var r = (0, s.default)(t, "actionItem.config.target.boundaryMode"),
        a = !i || t.eventStateKey === i;
      if (t.actionListId === o && t.eventId === n && a) {
        if (c && r && !I.elementContains(c, t.element)) return;
        mt(t, e), t.verbose && e.dispatch((0, y.actionListPlaybackChanged)({
          actionListId: o,
          isPlaying: !1
        }))
      }
    })
  }

  function Et(t) {
    var e = t.store,
      n = t.eventId,
      r = t.eventTarget,
      i = t.eventStateKey,
      o = t.actionListId,
      a = t.groupIndex,
      u = void 0 === a ? 0 : a,
      c = t.immediate,
      f = t.verbose,
      l = e.getState(),
      d = l.ixData,
      p = l.ixSession,
      v = d.events[n] || {},
      h = v.mediaQueries,
      g = void 0 === h ? d.mediaQueryKeys : h,
      E = (0, s.default)(d, "actionLists.".concat(o), {}),
      _ = E.actionItemGroups,
      m = E.useFirstGroupAsInitialState;
    if (!_ || !_.length) return !1;
    u >= _.length && (0, s.default)(v, "config.loop") && (u = 0), 0 === u && m && u++;
    var y = (0 === u || 1 === u && m) && nt(v.action && v.action.actionTypeId) ? v.config.delay : void 0,
      T = (0, s.default)(_, [u, "actionItems"], []);
    if (!T.length) return !1;
    if (!B(g, p.mediaQueryKey)) return !1;
    var w = p.hasBoundaryNodes && r ? I.getClosestElement(r, O) : null,
      b = j(T),
      A = !1;
    return T.forEach(function (t, a) {
      var s = t.config,
        l = t.actionTypeId,
        d = K(l),
        p = s.target;
      if (p) {
        var h = p.boundaryMode ? w : null;
        N({
          config: s,
          event: v,
          eventTarget: r,
          elementRoot: h,
          elementApi: I
        }).forEach(function (s, p) {
          var v = d ? Q(l)(s, t) : null,
            h = d ? q(l)(s, t) : null;
          A = !0;
          var g = b === a && 0 === p,
            E = X({
              element: s,
              actionItem: t
            }),
            _ = L({
              element: s,
              actionItem: t,
              elementApi: I
            }, v);
          _t({
            store: e,
            element: s,
            actionItem: t,
            eventId: n,
            eventTarget: r,
            eventStateKey: i,
            actionListId: o,
            groupIndex: u,
            isCarrier: g,
            computedStyle: E,
            destination: _,
            immediate: c,
            verbose: f,
            pluginInstance: v,
            pluginDuration: h,
            instanceDelay: y
          })
        })
      }
    }), A
  }

  function _t(t) {
    var e = t.store,
      n = t.computedStyle,
      r = (0, u.default)(t, ["store", "computedStyle"]),
      i = !r.continuous,
      o = r.element,
      c = r.actionItem,
      s = r.immediate,
      f = r.pluginInstance,
      l = P(),
      d = e.getState(),
      p = d.ixElements,
      v = d.ixSession,
      h = C(p, o),
      g = (p[h] || {}).refState,
      E = I.getRefType(o),
      _ = k(o, g, n, c, I, f);
    e.dispatch((0, y.instanceAdded)((0, a.default)({
      instanceId: l,
      elementId: h,
      origin: _,
      refType: E
    }, r))), yt(document.body, "ix2-animation-started", l), s ? function (t, e) {
      var n = t.getState().ixParameters;
      t.dispatch((0, y.instanceStarted)(e, 0)), t.dispatch((0, y.animationFrameChanged)(performance.now(), n)), It(t.getState().ixInstances[e], t)
    }(e, l) : (D({
      store: e,
      select: function (t) {
        return t.ixInstances[l]
      },
      onChange: It
    }), i && e.dispatch((0, y.instanceStarted)(l, v.tick)))
  }

  function mt(t, e) {
    yt(document.body, "ix2-animation-stopping", {
      instanceId: t.id,
      state: e.getState()
    });
    var n = t.elementId,
      r = t.actionItem,
      i = e.getState().ixElements[n] || {},
      o = i.ref;
    i.refType === A && W(o, r, I), e.dispatch((0, y.instanceRemoved)(t.id))
  }

  function yt(t, e, n) {
    var r = document.createEvent("CustomEvent");
    r.initCustomEvent(e, !0, !0, n), t.dispatchEvent(r)
  }

  function It(t, e) {
    var n = t.active,
      r = t.continuous,
      i = t.complete,
      o = t.elementId,
      a = t.actionItem,
      u = t.actionTypeId,
      c = t.renderType,
      s = t.current,
      f = t.groupIndex,
      l = t.eventId,
      d = t.eventTarget,
      p = t.eventStateKey,
      v = t.actionListId,
      h = t.isCarrier,
      g = t.styleProp,
      E = t.verbose,
      _ = t.pluginInstance,
      m = e.getState(),
      T = m.ixData,
      w = m.ixSession,
      b = (T.events[l] || {}).mediaQueries,
      O = void 0 === b ? T.mediaQueryKeys : b;
    if (B(O, w.mediaQueryKey) && (r || n || i)) {
      if (s || c === S && i) {
        e.dispatch((0, y.elementStateChanged)(o, u, s, a));
        var x = e.getState().ixElements[o] || {},
          R = x.ref,
          N = x.refType,
          C = x.refState,
          L = C && C[u];
        switch (N) {
          case A:
            M(R, C, L, l, a, g, I, c, _)
        }
      }
      if (i) {
        if (h) {
          var D = Et({
            store: e,
            eventId: l,
            eventTarget: d,
            eventStateKey: p,
            actionListId: v,
            groupIndex: f + 1,
            verbose: E
          });
          E && !D && e.dispatch((0, y.actionListPlaybackChanged)({
            actionListId: v,
            isPlaying: !1
          }))
        }
        mt(t, e)
      }
    }
  }
}, function (t, e, n) {
  var r = n(94);
  t.exports = function (t, e, n) {
    "__proto__" == e && r ? r(t, e, {
      configurable: !0,
      enumerable: !0,
      value: n,
      writable: !0
    }) : t[e] = n
  }
}, function (t, e, n) {
  var r = n(7),
    i = function () {
      try {
        var t = r(Object, "defineProperty");
        return t({}, "", {}), t
      } catch (t) {}
    }();
  t.exports = i
}, function (t, e) {
  t.exports = function (t, e, n) {
    return t == t && (void 0 !== n && (t = t <= n ? t : n), void 0 !== e && (t = t >= e ? t : e)), t
  }
}, function (t, e, n) {
  var r = n(5),
    i = Object.create,
    o = function () {
      function t() {}
      return function (e) {
        if (!r(e)) return {};
        if (i) return i(e);
        t.prototype = e;
        var n = new t;
        return t.prototype = void 0, n
      }
    }();
  t.exports = o
}, function (t, e, n) {
  var r = n(251),
    i = n(252),
    o = r ? function (t) {
      return r.get(t)
    } : i;
  t.exports = o
}, function (t, e, n) {
  var r = n(253),
    i = Object.prototype.hasOwnProperty;
  t.exports = function (t) {
    for (var e = t.name + "", n = r[e], o = i.call(r, e) ? n.length : 0; o--;) {
      var a = n[o],
        u = a.func;
      if (null == u || u == t) return a.name
    }
    return e
  }
}, function (t, e, n) {
  n(100), n(28), n(102), n(29), n(103), n(259), n(260), n(261), n(262), n(267), n(268), t.exports = n(269)
}, function (t, e, n) {
  "use strict";
  var r = n(3);
  r.define("brand", t.exports = function (t) {
    var e, n = {},
      i = document,
      o = t("html"),
      a = t("body"),
      u = ".w-webflow-badge",
      c = window.location,
      s = /PhantomJS/i.test(navigator.userAgent),
      f = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";

    function l() {
      var n = i.fullScreen || i.mozFullScreen || i.webkitIsFullScreen || i.msFullscreenElement || Boolean(i.webkitFullscreenElement);
      t(e).attr("style", n ? "display: none !important;" : "")
    }

    function d() {
      var t = a.children(u),
        n = t.length && t.get(0) === e,
        i = r.env("editor");
      n ? i && t.remove() : (t.length && t.remove(), i || a.append(e))
    }
    return n.ready = function () {
      var n, r, a, u = o.attr("data-wf-status"),
        p = o.attr("data-wf-domain") || "";
      /\.webflow\.io$/i.test(p) && c.hostname !== p && (u = !0), u && !s && (e = e || (n = t('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"), r = t("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").attr("alt", "").css({
        marginRight: "8px",
        width: "16px"
      }), a = t("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg").attr("alt", "Made in Webflow"), n.append(r, a), n[0]), d(), setTimeout(d, 500), t(i).off(f, l).on(f, l))
    }, n
  })
}, function (t, e, n) {
  "use strict";
  var r = window.$,
    i = n(54) && r.tram;
  /*!
   * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
   * _.each
   * _.map
   * _.find
   * _.filter
   * _.any
   * _.contains
   * _.delay
   * _.defer
   * _.throttle (webflow)
   * _.debounce
   * _.keys
   * _.has
   * _.now
   *
   * http://underscorejs.org
   * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Underscore may be freely distributed under the MIT license.
   * @license MIT
   */
  t.exports = function () {
    var t = {
        VERSION: "1.6.0-Webflow"
      },
      e = {},
      n = Array.prototype,
      r = Object.prototype,
      o = Function.prototype,
      a = (n.push, n.slice),
      u = (n.concat, r.toString, r.hasOwnProperty),
      c = n.forEach,
      s = n.map,
      f = (n.reduce, n.reduceRight, n.filter),
      l = (n.every, n.some),
      d = n.indexOf,
      p = (n.lastIndexOf, Array.isArray, Object.keys),
      v = (o.bind, t.each = t.forEach = function (n, r, i) {
        if (null == n) return n;
        if (c && n.forEach === c) n.forEach(r, i);
        else if (n.length === +n.length) {
          for (var o = 0, a = n.length; o < a; o++)
            if (r.call(i, n[o], o, n) === e) return
        } else {
          var u = t.keys(n);
          for (o = 0, a = u.length; o < a; o++)
            if (r.call(i, n[u[o]], u[o], n) === e) return
        }
        return n
      });
    t.map = t.collect = function (t, e, n) {
      var r = [];
      return null == t ? r : s && t.map === s ? t.map(e, n) : (v(t, function (t, i, o) {
        r.push(e.call(n, t, i, o))
      }), r)
    }, t.find = t.detect = function (t, e, n) {
      var r;
      return h(t, function (t, i, o) {
        if (e.call(n, t, i, o)) return r = t, !0
      }), r
    }, t.filter = t.select = function (t, e, n) {
      var r = [];
      return null == t ? r : f && t.filter === f ? t.filter(e, n) : (v(t, function (t, i, o) {
        e.call(n, t, i, o) && r.push(t)
      }), r)
    };
    var h = t.some = t.any = function (n, r, i) {
      r || (r = t.identity);
      var o = !1;
      return null == n ? o : l && n.some === l ? n.some(r, i) : (v(n, function (t, n, a) {
        if (o || (o = r.call(i, t, n, a))) return e
      }), !!o)
    };
    t.contains = t.include = function (t, e) {
      return null != t && (d && t.indexOf === d ? -1 != t.indexOf(e) : h(t, function (t) {
        return t === e
      }))
    }, t.delay = function (t, e) {
      var n = a.call(arguments, 2);
      return setTimeout(function () {
        return t.apply(null, n)
      }, e)
    }, t.defer = function (e) {
      return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)))
    }, t.throttle = function (t) {
      var e, n, r;
      return function () {
        e || (e = !0, n = arguments, r = this, i.frame(function () {
          e = !1, t.apply(r, n)
        }))
      }
    }, t.debounce = function (e, n, r) {
      var i, o, a, u, c, s = function s() {
        var f = t.now() - u;
        f < n ? i = setTimeout(s, n - f) : (i = null, r || (c = e.apply(a, o), a = o = null))
      };
      return function () {
        a = this, o = arguments, u = t.now();
        var f = r && !i;
        return i || (i = setTimeout(s, n)), f && (c = e.apply(a, o), a = o = null), c
      }
    }, t.defaults = function (e) {
      if (!t.isObject(e)) return e;
      for (var n = 1, r = arguments.length; n < r; n++) {
        var i = arguments[n];
        for (var o in i) void 0 === e[o] && (e[o] = i[o])
      }
      return e
    }, t.keys = function (e) {
      if (!t.isObject(e)) return [];
      if (p) return p(e);
      var n = [];
      for (var r in e) t.has(e, r) && n.push(r);
      return n
    }, t.has = function (t, e) {
      return u.call(t, e)
    }, t.isObject = function (t) {
      return t === Object(t)
    }, t.now = Date.now || function () {
      return (new Date).getTime()
    }, t.templateSettings = {
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: /<%=([\s\S]+?)%>/g,
      escape: /<%-([\s\S]+?)%>/g
    };
    var g = /(.)^/,
      E = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
      },
      _ = /\\|'|\r|\n|\u2028|\u2029/g,
      m = function (t) {
        return "\\" + E[t]
      };
    return t.template = function (e, n, r) {
      !n && r && (n = r), n = t.defaults({}, n, t.templateSettings);
      var i = RegExp([(n.escape || g).source, (n.interpolate || g).source, (n.evaluate || g).source].join("|") + "|$", "g"),
        o = 0,
        a = "__p+='";
      e.replace(i, function (t, n, r, i, u) {
        return a += e.slice(o, u).replace(_, m), o = u + t.length, n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : i && (a += "';\n" + i + "\n__p+='"), t
      }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
      try {
        var u = new Function(n.variable || "obj", "_", a)
      } catch (t) {
        throw t.source = a, t
      }
      var c = function (e) {
          return u.call(this, e, t)
        },
        s = n.variable || "obj";
      return c.source = "function(" + s + "){\n" + a + "}", c
    }, t
  }()
}, function (t, e, n) {
  "use strict";
  var r = n(3),
    i = n(28);
  r.define("ix", t.exports = function (t, e) {
    var n, o, a = {},
      u = t(window),
      c = ".w-ix",
      s = t.tram,
      f = r.env,
      l = f(),
      d = f.chrome && f.chrome < 35,
      p = "none 0s ease 0s",
      v = t(),
      h = {},
      g = [],
      E = [],
      _ = [],
      m = 1,
      y = {
        tabs: ".w-tab-link, .w-tab-pane",
        dropdown: ".w-dropdown",
        slider: ".w-slide",
        navbar: ".w-nav"
      };

    function I(t) {
      t && (h = {}, e.each(t, function (t) {
        h[t.slug] = t.value
      }), T())
    }

    function T() {
      ! function () {
        var e = t("[data-ix]");
        if (!e.length) return;
        e.each(O), e.each(w), g.length && (r.scroll.on(A), setTimeout(A, 1));
        E.length && r.load(S);
        _.length && setTimeout(x, m)
      }(), i.init(), r.redraw.up()
    }

    function w(n, o) {
      var u = t(o),
        s = u.attr("data-ix"),
        f = h[s];
      if (f) {
        var d = f.triggers;
        d && (a.style(u, f.style), e.each(d, function (t) {
          var e = {},
            n = t.type,
            o = t.stepsB && t.stepsB.length;

          function a() {
            R(t, u, {
              group: "A"
            })
          }

          function s() {
            R(t, u, {
              group: "B"
            })
          }
          if ("load" !== n) {
            if ("click" === n) return u.on("click" + c, function (n) {
              r.validClick(n.currentTarget) && ("#" === u.attr("href") && n.preventDefault(), R(t, u, {
                group: e.clicked ? "B" : "A"
              }), o && (e.clicked = !e.clicked))
            }), void(v = v.add(u));
            if ("hover" === n) return u.on("mouseenter" + c, a), u.on("mouseleave" + c, s), void(v = v.add(u));
            if ("scroll" !== n) {
              var f = y[n];
              if (f) {
                var d = u.closest(f);
                return d.on(i.types.INTRO, a).on(i.types.OUTRO, s), void(v = v.add(d))
              }
            } else g.push({
              el: u,
              trigger: t,
              state: {
                active: !1
              },
              offsetTop: b(t.offsetTop),
              offsetBot: b(t.offsetBot)
            })
          } else t.preload && !l ? E.push(a) : _.push(a)
        }))
      }
    }

    function b(t) {
      if (!t) return 0;
      t = String(t);
      var e = parseInt(t, 10);
      return e != e ? 0 : (t.indexOf("%") > 0 && (e /= 100) >= 1 && (e = .999), e)
    }

    function O(e, n) {
      t(n).off(c)
    }

    function A() {
      for (var t = u.scrollTop(), e = u.height(), n = g.length, r = 0; r < n; r++) {
        var i = g[r],
          o = i.el,
          a = i.trigger,
          c = a.stepsB && a.stepsB.length,
          s = i.state,
          f = o.offset().top,
          l = o.outerHeight(),
          d = i.offsetTop,
          p = i.offsetBot;
        d < 1 && d > 0 && (d *= e), p < 1 && p > 0 && (p *= e);
        var v = f + l - d >= t && f + p <= t + e;
        v !== s.active && ((!1 !== v || c) && (s.active = v, R(a, o, {
          group: v ? "A" : "B"
        })))
      }
    }

    function S() {
      for (var t = E.length, e = 0; e < t; e++) E[e]()
    }

    function x() {
      for (var t = _.length, e = 0; e < t; e++) _[e]()
    }

    function R(e, r, i, o) {
      var a = (i = i || {}).done,
        u = e.preserve3d;
      if (!n || i.force) {
        var c = i.group || "A",
          f = e["loop" + c],
          p = e["steps" + c];
        if (p && p.length) {
          if (p.length < 2 && (f = !1), !o) {
            var v = e.selector;
            v && (r = e.descend ? r.find(v) : e.siblings ? r.siblings(v) : t(v), l && r.attr("data-ix-affect", 1)), d && r.addClass("w-ix-emptyfix"), u && r.css("transform-style", "preserve-3d")
          }
          for (var h = s(r), g = {
              omit3d: !u
            }, E = 0; E < p.length; E++) N(h, p[E], g);
          g.start ? h.then(_) : _()
        }
      }

      function _() {
        if (f) return R(e, r, i, !0);
        "auto" === g.width && h.set({
          width: "auto"
        }), "auto" === g.height && h.set({
          height: "auto"
        }), a && a()
      }
    }

    function N(t, e, n) {
      var i = "add",
        o = "start";
      n.start && (i = o = "then");
      var a = e.transition;
      if (a) {
        a = a.split(",");
        for (var u = 0; u < a.length; u++) {
          var c = a[u];
          t[i](c)
        }
      }
      var s = C(e, n) || {};
      if (null != s.width && (n.width = s.width), null != s.height && (n.height = s.height), null == a) {
        n.start ? t.then(function () {
          var e = this.queue;
          this.set(s), s.display && (t.redraw(), r.redraw.up()), this.queue = e, this.next()
        }) : (t.set(s), s.display && (t.redraw(), r.redraw.up()));
        var f = s.wait;
        null != f && (t.wait(f), n.start = !0)
      } else {
        if (s.display) {
          var l = s.display;
          delete s.display, n.start ? t.then(function () {
            var t = this.queue;
            this.set({
              display: l
            }).redraw(), r.redraw.up(), this.queue = t, this.next()
          }) : (t.set({
            display: l
          }).redraw(), r.redraw.up())
        }
        t[o](s), n.start = !0
      }
    }

    function C(t, e) {
      var n = e && e.omit3d,
        r = {},
        i = !1;
      for (var o in t) "transition" !== o && "keysort" !== o && (!n || "z" !== o && "rotateX" !== o && "rotateY" !== o && "scaleZ" !== o) && (r[o] = t[o], i = !0);
      return i ? r : null
    }
    return a.init = function (t) {
      setTimeout(function () {
        I(t)
      }, 1)
    }, a.preview = function () {
      n = !1, m = 100, setTimeout(function () {
        I(window.__wf_ix)
      }, 1)
    }, a.design = function () {
      n = !0, a.destroy()
    }, a.destroy = function () {
      o = !0, v.each(O), r.scroll.off(A), i.async(), g = [], E = [], _ = []
    }, a.ready = function () {
      if (l) return f("design") ? a.design() : a.preview();
      h && o && (o = !1, T())
    }, a.run = R, a.style = l ? function (e, n) {
      var r = s(e);
      if (t.isEmptyObject(n)) return;
      e.css("transition", "");
      var i = e.css("transition");
      i === p && (i = r.upstream = null);
      r.upstream = p, r.set(C(n)), r.upstream = i
    } : function (t, e) {
      s(t).set(C(e))
    }, a
  })
}, function (t, e, n) {
  "use strict";
  var r = n(3),
    i = n(104);
  i.setEnv(r.env), r.define("ix2", t.exports = function () {
    return i
  })
}, function (t, e, n) {
  "use strict";
  var r = n(12),
    i = n(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.setEnv = function (t) {
    t() && (0, u.observeRequests)(s)
  }, e.init = function (t) {
    f(), (0, u.startEngine)({
      store: s,
      rawData: t,
      allowEvents: !0
    })
  }, e.destroy = f, e.actions = e.store = void 0;
  var o = n(55),
    a = i(n(116)),
    u = n(92),
    c = r(n(50));
  e.actions = c;
  var s = (0, o.createStore)(a.default);

  function f() {
    (0, u.stopEngine)(s)
  }
  e.store = s
}, function (t, e, n) {
  "use strict";
  n.r(e);
  var r = n(57),
    i = n(108),
    o = n(109),
    a = "[object Null]",
    u = "[object Undefined]",
    c = r.default ? r.default.toStringTag : void 0;
  e.default = function (t) {
    return null == t ? void 0 === t ? u : a : c && c in Object(t) ? Object(i.default)(t) : Object(o.default)(t)
  }
}, function (t, e, n) {
  "use strict";
  n.r(e);
  var r = n(107),
    i = "object" == typeof self && self && self.Object === Object && self,
    o = r.default || i || Function("return this")();
  e.default = o
}, function (t, e, n) {
  "use strict";
  n.r(e),
    function (t) {
      var n = "object" == typeof t && t && t.Object === Object && t;
      e.default = n
    }.call(this, n(31))
}, function (t, e, n) {
  "use strict";
  n.r(e);
  var r = n(57),
    i = Object.prototype,
    o = i.hasOwnProperty,
    a = i.toString,
    u = r.default ? r.default.toStringTag : void 0;
  e.default = function (t) {
    var e = o.call(t, u),
      n = t[u];
    try {
      t[u] = void 0;
      var r = !0
    } catch (t) {}
    var i = a.call(t);
    return r && (e ? t[u] = n : delete t[u]), i
  }
}, function (t, e, n) {
  "use strict";
  n.r(e);
  var r = Object.prototype.toString;
  e.default = function (t) {
    return r.call(t)
  }
}, function (t, e, n) {
  "use strict";
  n.r(e);
  var r = n(111),
    i = Object(r.default)(Object.getPrototypeOf, Object);
  e.default = i
}, function (t, e, n) {
  "use strict";
  n.r(e), e.default = function (t, e) {
    return function (n) {
      return t(e(n))
    }
  }
}, function (t, e, n) {
  "use strict";
  n.r(e), e.default = function (t) {
    return null != t && "object" == typeof t
  }
}, function (t, e, n) {
  "use strict";
  n.r(e),
    function (t, r) {
      var i, o = n(115);
      i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : r;
      var a = Object(o.default)(i);
      e.default = a
    }.call(this, n(31), n(114)(t))
}, function (t, e) {
  t.exports = function (t) {
    if (!t.webpackPolyfill) {
      var e = Object.create(t);
      e.children || (e.children = []), Object.defineProperty(e, "loaded", {
        enumerable: !0,
        get: function () {
          return e.l
        }
      }), Object.defineProperty(e, "id", {
        enumerable: !0,
        get: function () {
          return e.i
        }
      }), Object.defineProperty(e, "exports", {
        enumerable: !0
      }), e.webpackPolyfill = 1
    }
    return e
  }
}, function (t, e, n) {
  "use strict";

  function r(t) {
    var e, n = t.Symbol;
    return "function" == typeof n ? n.observable ? e = n.observable : (e = n("observable"), n.observable = e) : e = "@@observable", e
  }
  n.r(e), n.d(e, "default", function () {
    return r
  })
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var r = n(55),
    i = n(117),
    o = n(123),
    a = n(124),
    u = n(9),
    c = n(207),
    s = n(208),
    f = u.IX2ElementsReducer.ixElements,
    l = (0, r.combineReducers)({
      ixData: i.ixData,
      ixRequest: o.ixRequest,
      ixSession: a.ixSession,
      ixElements: f,
      ixInstances: c.ixInstances,
      ixParameters: s.ixParameters
    });
  e.default = l
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.ixData = void 0;
  var r = n(2).IX2EngineActionTypes.IX2_RAW_DATA_IMPORTED;
  e.ixData = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
      e = arguments.length > 1 ? arguments[1] : void 0;
    switch (e.type) {
      case r:
        return e.payload.ixData || Object.freeze({});
      default:
        return t
    }
  }
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.QuickEffectDirectionConsts = e.QuickEffectIds = e.EventLimitAffectedElements = e.EventContinuousMouseAxes = e.EventBasedOn = e.EventAppliesTo = e.EventTypeConsts = void 0;
  e.EventTypeConsts = {
    NAVBAR_OPEN: "NAVBAR_OPEN",
    NAVBAR_CLOSE: "NAVBAR_CLOSE",
    TAB_ACTIVE: "TAB_ACTIVE",
    TAB_INACTIVE: "TAB_INACTIVE",
    SLIDER_ACTIVE: "SLIDER_ACTIVE",
    SLIDER_INACTIVE: "SLIDER_INACTIVE",
    DROPDOWN_OPEN: "DROPDOWN_OPEN",
    DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
    MOUSE_CLICK: "MOUSE_CLICK",
    MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
    MOUSE_DOWN: "MOUSE_DOWN",
    MOUSE_UP: "MOUSE_UP",
    MOUSE_OVER: "MOUSE_OVER",
    MOUSE_OUT: "MOUSE_OUT",
    MOUSE_MOVE: "MOUSE_MOVE",
    MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
    SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
    SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
    SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
    ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
    ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
    PAGE_START: "PAGE_START",
    PAGE_FINISH: "PAGE_FINISH",
    PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
    PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
    PAGE_SCROLL: "PAGE_SCROLL"
  };
  e.EventAppliesTo = {
    ELEMENT: "ELEMENT",
    CLASS: "CLASS",
    PAGE: "PAGE"
  };
  e.EventBasedOn = {
    ELEMENT: "ELEMENT",
    VIEWPORT: "VIEWPORT"
  };
  e.EventContinuousMouseAxes = {
    X_AXIS: "X_AXIS",
    Y_AXIS: "Y_AXIS"
  };
  e.EventLimitAffectedElements = {
    CHILDREN: "CHILDREN",
    SIBLINGS: "SIBLINGS",
    IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
  };
  e.QuickEffectIds = {
    FADE_EFFECT: "FADE_EFFECT",
    SLIDE_EFFECT: "SLIDE_EFFECT",
    BLUR_EFFECT: "BLUR_EFFECT",
    GROW_EFFECT: "GROW_EFFECT",
    SHRINK_EFFECT: "SHRINK_EFFECT",
    SPIN_EFFECT: "SPIN_EFFECT",
    FLY_EFFECT: "FLY_EFFECT",
    POP_EFFECT: "POP_EFFECT",
    FLIP_EFFECT: "FLIP_EFFECT",
    JIGGLE_EFFECT: "JIGGLE_EFFECT",
    PULSE_EFFECT: "PULSE_EFFECT",
    DROP_EFFECT: "DROP_EFFECT",
    BLINK_EFFECT: "BLINK_EFFECT",
    BOUNCE_EFFECT: "BOUNCE_EFFECT",
    FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
    FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
    RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
    JELLO_EFFECT: "JELLO_EFFECT",
    GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
    SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
    PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
  };
  e.QuickEffectDirectionConsts = {
    LEFT: "LEFT",
    RIGHT: "RIGHT",
    BOTTOM: "BOTTOM",
    TOP: "TOP",
    BOTTOM_LEFT: "BOTTOM_LEFT",
    BOTTOM_RIGHT: "BOTTOM_RIGHT",
    TOP_RIGHT: "TOP_RIGHT",
    TOP_LEFT: "TOP_LEFT",
    CLOCKWISE: "CLOCKWISE",
    COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
  }
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.ActionAppliesTo = e.ActionTypeConsts = void 0;
  e.ActionTypeConsts = {
    TRANSFORM_MOVE: "TRANSFORM_MOVE",
    TRANSFORM_SCALE: "TRANSFORM_SCALE",
    TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
    TRANSFORM_SKEW: "TRANSFORM_SKEW",
    STYLE_OPACITY: "STYLE_OPACITY",
    STYLE_SIZE: "STYLE_SIZE",
    STYLE_FILTER: "STYLE_FILTER",
    STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
    STYLE_BORDER: "STYLE_BORDER",
    STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
    PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
    GENERAL_DISPLAY: "GENERAL_DISPLAY",
    GENERAL_START_ACTION: "GENERAL_START_ACTION",
    GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
    GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
    GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
    GENERAL_LOOP: "GENERAL_LOOP",
    STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
  };
  e.ActionAppliesTo = {
    ELEMENT: "ELEMENT",
    ELEMENT_CLASS: "ELEMENT_CLASS",
    TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
  }
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.InteractionTypeConsts = void 0;
  e.InteractionTypeConsts = {
    MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
    MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
    MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
    SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
    SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
    MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
    PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
    PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
    PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
    NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
    DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
    ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
    TAB_INTERACTION: "TAB_INTERACTION",
    SLIDER_INTERACTION: "SLIDER_INTERACTION"
  }
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.IX2_TEST_FRAME_RENDERED = e.IX2_MEDIA_QUERIES_DEFINED = e.IX2_VIEWPORT_WIDTH_CHANGED = e.IX2_ACTION_LIST_PLAYBACK_CHANGED = e.IX2_ELEMENT_STATE_CHANGED = e.IX2_INSTANCE_REMOVED = e.IX2_INSTANCE_STARTED = e.IX2_INSTANCE_ADDED = e.IX2_PARAMETER_CHANGED = e.IX2_ANIMATION_FRAME_CHANGED = e.IX2_EVENT_STATE_CHANGED = e.IX2_EVENT_LISTENER_ADDED = e.IX2_CLEAR_REQUESTED = e.IX2_STOP_REQUESTED = e.IX2_PLAYBACK_REQUESTED = e.IX2_PREVIEW_REQUESTED = e.IX2_SESSION_STOPPED = e.IX2_SESSION_STARTED = e.IX2_SESSION_INITIALIZED = e.IX2_RAW_DATA_IMPORTED = void 0;
  e.IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED";
  e.IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED";
  e.IX2_SESSION_STARTED = "IX2_SESSION_STARTED";
  e.IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED";
  e.IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED";
  e.IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED";
  e.IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED";
  e.IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED";
  e.IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED";
  e.IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED";
  e.IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED";
  e.IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED";
  e.IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED";
  e.IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED";
  e.IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED";
  e.IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED";
  e.IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
  e.IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED";
  e.IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED";
  e.IX2_TEST_FRAME_RENDERED = "IX2_TEST_FRAME_RENDERED"
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.RENDER_PLUGIN = e.RENDER_STYLE = e.RENDER_GENERAL = e.RENDER_TRANSFORM = e.ABSTRACT_NODE = e.PLAIN_OBJECT = e.HTML_ELEMENT = e.PRESERVE_3D = e.PARENT = e.SIBLINGS = e.IMMEDIATE_CHILDREN = e.CHILDREN = e.BAR_DELIMITER = e.COLON_DELIMITER = e.COMMA_DELIMITER = e.AUTO = e.WILL_CHANGE = e.FLEX = e.DISPLAY = e.COLOR = e.BORDER_COLOR = e.BACKGROUND = e.BACKGROUND_COLOR = e.HEIGHT = e.WIDTH = e.FILTER = e.OPACITY = e.SKEW_Y = e.SKEW_X = e.SKEW = e.ROTATE_Z = e.ROTATE_Y = e.ROTATE_X = e.SCALE_3D = e.SCALE_Z = e.SCALE_Y = e.SCALE_X = e.TRANSLATE_3D = e.TRANSLATE_Z = e.TRANSLATE_Y = e.TRANSLATE_X = e.TRANSFORM = e.CONFIG_UNIT = e.CONFIG_Z_UNIT = e.CONFIG_Y_UNIT = e.CONFIG_X_UNIT = e.CONFIG_VALUE = e.CONFIG_Z_VALUE = e.CONFIG_Y_VALUE = e.CONFIG_X_VALUE = e.BOUNDARY_SELECTOR = e.W_MOD_IX = e.W_MOD_JS = e.WF_PAGE = e.IX2_ID_DELIMITER = void 0;
  e.IX2_ID_DELIMITER = "|";
  e.WF_PAGE = "data-wf-page";
  e.W_MOD_JS = "w-mod-js";
  e.W_MOD_IX = "w-mod-ix";
  e.BOUNDARY_SELECTOR = ".w-dyn-item";
  e.CONFIG_X_VALUE = "xValue";
  e.CONFIG_Y_VALUE = "yValue";
  e.CONFIG_Z_VALUE = "zValue";
  e.CONFIG_VALUE = "value";
  e.CONFIG_X_UNIT = "xUnit";
  e.CONFIG_Y_UNIT = "yUnit";
  e.CONFIG_Z_UNIT = "zUnit";
  e.CONFIG_UNIT = "unit";
  e.TRANSFORM = "transform";
  e.TRANSLATE_X = "translateX";
  e.TRANSLATE_Y = "translateY";
  e.TRANSLATE_Z = "translateZ";
  e.TRANSLATE_3D = "translate3d";
  e.SCALE_X = "scaleX";
  e.SCALE_Y = "scaleY";
  e.SCALE_Z = "scaleZ";
  e.SCALE_3D = "scale3d";
  e.ROTATE_X = "rotateX";
  e.ROTATE_Y = "rotateY";
  e.ROTATE_Z = "rotateZ";
  e.SKEW = "skew";
  e.SKEW_X = "skewX";
  e.SKEW_Y = "skewY";
  e.OPACITY = "opacity";
  e.FILTER = "filter";
  e.WIDTH = "width";
  e.HEIGHT = "height";
  e.BACKGROUND_COLOR = "backgroundColor";
  e.BACKGROUND = "background";
  e.BORDER_COLOR = "borderColor";
  e.COLOR = "color";
  e.DISPLAY = "display";
  e.FLEX = "flex";
  e.WILL_CHANGE = "willChange";
  e.AUTO = "AUTO";
  e.COMMA_DELIMITER = ",";
  e.COLON_DELIMITER = ":";
  e.BAR_DELIMITER = "|";
  e.CHILDREN = "CHILDREN";
  e.IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN";
  e.SIBLINGS = "SIBLINGS";
  e.PARENT = "PARENT";
  e.PRESERVE_3D = "preserve-3d";
  e.HTML_ELEMENT = "HTML_ELEMENT";
  e.PLAIN_OBJECT = "PLAIN_OBJECT";
  e.ABSTRACT_NODE = "ABSTRACT_NODE";
  e.RENDER_TRANSFORM = "RENDER_TRANSFORM";
  e.RENDER_GENERAL = "RENDER_GENERAL";
  e.RENDER_STYLE = "RENDER_STYLE";
  e.RENDER_PLUGIN = "RENDER_PLUGIN"
}, function (t, e, n) {
  "use strict";
  var r, i = n(0)(n(17)),
    o = n(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.ixRequest = void 0;
  var a = o(n(18)),
    u = n(2),
    c = n(13),
    s = u.IX2EngineActionTypes,
    f = s.IX2_PREVIEW_REQUESTED,
    l = s.IX2_PLAYBACK_REQUESTED,
    d = s.IX2_STOP_REQUESTED,
    p = s.IX2_CLEAR_REQUESTED,
    v = {
      preview: {},
      playback: {},
      stop: {},
      clear: {}
    },
    h = Object.create(null, (r = {}, (0, i.default)(r, f, {
      value: "preview"
    }), (0, i.default)(r, l, {
      value: "playback"
    }), (0, i.default)(r, d, {
      value: "stop"
    }), (0, i.default)(r, p, {
      value: "clear"
    }), r));
  e.ixRequest = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
      e = arguments.length > 1 ? arguments[1] : void 0;
    if (e.type in h) {
      var n = [h[e.type]];
      return (0, c.setIn)(t, [n], (0, a.default)({}, e.payload))
    }
    return t
  }
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.ixSession = void 0;
  var r = n(2),
    i = n(13),
    o = r.IX2EngineActionTypes,
    a = o.IX2_SESSION_INITIALIZED,
    u = o.IX2_SESSION_STARTED,
    c = o.IX2_TEST_FRAME_RENDERED,
    s = o.IX2_SESSION_STOPPED,
    f = o.IX2_EVENT_LISTENER_ADDED,
    l = o.IX2_EVENT_STATE_CHANGED,
    d = o.IX2_ANIMATION_FRAME_CHANGED,
    p = o.IX2_ACTION_LIST_PLAYBACK_CHANGED,
    v = o.IX2_VIEWPORT_WIDTH_CHANGED,
    h = o.IX2_MEDIA_QUERIES_DEFINED,
    g = {
      active: !1,
      tick: 0,
      eventListeners: [],
      eventState: {},
      playbackState: {},
      viewportWidth: 0,
      mediaQueryKey: null,
      hasBoundaryNodes: !1,
      hasDefinedMediaQueries: !1
    };
  e.ixSession = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
      e = arguments.length > 1 ? arguments[1] : void 0;
    switch (e.type) {
      case a:
        var n = e.payload.hasBoundaryNodes;
        return (0, i.set)(t, "hasBoundaryNodes", n);
      case u:
        return (0, i.set)(t, "active", !0);
      case c:
        var r = e.payload.step,
          o = void 0 === r ? 20 : r;
        return (0, i.set)(t, "tick", t.tick + o);
      case s:
        return g;
      case d:
        var E = e.payload.now;
        return (0, i.set)(t, "tick", E);
      case f:
        var _ = (0, i.addLast)(t.eventListeners, e.payload);
        return (0, i.set)(t, "eventListeners", _);
      case l:
        var m = e.payload,
          y = m.stateKey,
          I = m.newState;
        return (0, i.setIn)(t, ["eventState", y], I);
      case p:
        var T = e.payload,
          w = T.actionListId,
          b = T.isPlaying;
        return (0, i.setIn)(t, ["playbackState", w], b);
      case v:
        for (var O = e.payload, A = O.width, S = O.mediaQueries, x = S.length, R = null, N = 0; N < x; N++) {
          var C = S[N],
            L = C.key,
            D = C.min,
            P = C.max;
          if (A >= D && A <= P) {
            R = L;
            break
          }
        }
        return (0, i.merge)(t, {
          viewportWidth: A,
          mediaQueryKey: R
        });
      case h:
        return (0, i.set)(t, "hasDefinedMediaQueries", !0);
      default:
        return t
    }
  }
}, function (t, e, n) {
  var r = n(126),
    i = n(178),
    o = n(78);
  t.exports = function (t) {
    var e = i(t);
    return 1 == e.length && e[0][2] ? o(e[0][0], e[0][1]) : function (n) {
      return n === t || r(n, t, e)
    }
  }
}, function (t, e, n) {
  var r = n(64),
    i = n(68),
    o = 1,
    a = 2;
  t.exports = function (t, e, n, u) {
    var c = n.length,
      s = c,
      f = !u;
    if (null == t) return !s;
    for (t = Object(t); c--;) {
      var l = n[c];
      if (f && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1
    }
    for (; ++c < s;) {
      var d = (l = n[c])[0],
        p = t[d],
        v = l[1];
      if (f && l[2]) {
        if (void 0 === p && !(d in t)) return !1
      } else {
        var h = new r;
        if (u) var g = u(p, v, d, t, e, h);
        if (!(void 0 === g ? i(v, p, o | a, u, h) : g)) return !1
      }
    }
    return !0
  }
}, function (t, e) {
  t.exports = function () {
    this.__data__ = [], this.size = 0
  }
}, function (t, e, n) {
  var r = n(20),
    i = Array.prototype.splice;
  t.exports = function (t) {
    var e = this.__data__,
      n = r(e, t);
    return !(n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, 0))
  }
}, function (t, e, n) {
  var r = n(20);
  t.exports = function (t) {
    var e = this.__data__,
      n = r(e, t);
    return n < 0 ? void 0 : e[n][1]
  }
}, function (t, e, n) {
  var r = n(20);
  t.exports = function (t) {
    return r(this.__data__, t) > -1
  }
}, function (t, e, n) {
  var r = n(20);
  t.exports = function (t, e) {
    var n = this.__data__,
      i = r(n, t);
    return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
  }
}, function (t, e, n) {
  var r = n(19);
  t.exports = function () {
    this.__data__ = new r, this.size = 0
  }
}, function (t, e) {
  t.exports = function (t) {
    var e = this.__data__,
      n = e.delete(t);
    return this.size = e.size, n
  }
}, function (t, e) {
  t.exports = function (t) {
    return this.__data__.get(t)
  }
}, function (t, e) {
  t.exports = function (t) {
    return this.__data__.has(t)
  }
}, function (t, e, n) {
  var r = n(19),
    i = n(35),
    o = n(36),
    a = 200;
  t.exports = function (t, e) {
    var n = this.__data__;
    if (n instanceof r) {
      var u = n.__data__;
      if (!i || u.length < a - 1) return u.push([t, e]), this.size = ++n.size, this;
      n = this.__data__ = new o(u)
    }
    return n.set(t, e), this.size = n.size, this
  }
}, function (t, e, n) {
  var r = n(65),
    i = n(140),
    o = n(5),
    a = n(67),
    u = /^\[object .+?Constructor\]$/,
    c = Function.prototype,
    s = Object.prototype,
    f = c.toString,
    l = s.hasOwnProperty,
    d = RegExp("^" + f.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  t.exports = function (t) {
    return !(!o(t) || i(t)) && (r(t) ? d : u).test(a(t))
  }
}, function (t, e, n) {
  var r = n(14),
    i = Object.prototype,
    o = i.hasOwnProperty,
    a = i.toString,
    u = r ? r.toStringTag : void 0;
  t.exports = function (t) {
    var e = o.call(t, u),
      n = t[u];
    try {
      t[u] = void 0;
      var r = !0
    } catch (t) {}
    var i = a.call(t);
    return r && (e ? t[u] = n : delete t[u]), i
  }
}, function (t, e) {
  var n = Object.prototype.toString;
  t.exports = function (t) {
    return n.call(t)
  }
}, function (t, e, n) {
  var r, i = n(141),
    o = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
  t.exports = function (t) {
    return !!o && o in t
  }
}, function (t, e, n) {
  var r = n(4)["__core-js_shared__"];
  t.exports = r
}, function (t, e) {
  t.exports = function (t, e) {
    return null == t ? void 0 : t[e]
  }
}, function (t, e, n) {
  var r = n(144),
    i = n(19),
    o = n(35);
  t.exports = function () {
    this.size = 0, this.__data__ = {
      hash: new r,
      map: new(o || i),
      string: new r
    }
  }
}, function (t, e, n) {
  var r = n(145),
    i = n(146),
    o = n(147),
    a = n(148),
    u = n(149);

  function c(t) {
    var e = -1,
      n = null == t ? 0 : t.length;
    for (this.clear(); ++e < n;) {
      var r = t[e];
      this.set(r[0], r[1])
    }
  }
  c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function (t, e, n) {
  var r = n(21);
  t.exports = function () {
    this.__data__ = r ? r(null) : {}, this.size = 0
  }
}, function (t, e) {
  t.exports = function (t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e
  }
}, function (t, e, n) {
  var r = n(21),
    i = "__lodash_hash_undefined__",
    o = Object.prototype.hasOwnProperty;
  t.exports = function (t) {
    var e = this.__data__;
    if (r) {
      var n = e[t];
      return n === i ? void 0 : n
    }
    return o.call(e, t) ? e[t] : void 0
  }
}, function (t, e, n) {
  var r = n(21),
    i = Object.prototype.hasOwnProperty;
  t.exports = function (t) {
    var e = this.__data__;
    return r ? void 0 !== e[t] : i.call(e, t)
  }
}, function (t, e, n) {
  var r = n(21),
    i = "__lodash_hash_undefined__";
  t.exports = function (t, e) {
    var n = this.__data__;
    return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? i : e, this
  }
}, function (t, e, n) {
  var r = n(22);
  t.exports = function (t) {
    var e = r(this, t).delete(t);
    return this.size -= e ? 1 : 0, e
  }
}, function (t, e) {
  t.exports = function (t) {
    var e = typeof t;
    return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
  }
}, function (t, e, n) {
  var r = n(22);
  t.exports = function (t) {
    return r(this, t).get(t)
  }
}, function (t, e, n) {
  var r = n(22);
  t.exports = function (t) {
    return r(this, t).has(t)
  }
}, function (t, e, n) {
  var r = n(22);
  t.exports = function (t, e) {
    var n = r(this, t),
      i = n.size;
    return n.set(t, e), this.size += n.size == i ? 0 : 1, this
  }
}, function (t, e, n) {
  var r = n(64),
    i = n(69),
    o = n(161),
    a = n(165),
    u = n(44),
    c = n(1),
    s = n(38),
    f = n(40),
    l = 1,
    d = "[object Arguments]",
    p = "[object Array]",
    v = "[object Object]",
    h = Object.prototype.hasOwnProperty;
  t.exports = function (t, e, n, g, E, _) {
    var m = c(t),
      y = c(e),
      I = m ? p : u(t),
      T = y ? p : u(e),
      w = (I = I == d ? v : I) == v,
      b = (T = T == d ? v : T) == v,
      O = I == T;
    if (O && s(t)) {
      if (!s(e)) return !1;
      m = !0, w = !1
    }
    if (O && !w) return _ || (_ = new r), m || f(t) ? i(t, e, n, g, E, _) : o(t, e, I, n, g, E, _);
    if (!(n & l)) {
      var A = w && h.call(t, "__wrapped__"),
        S = b && h.call(e, "__wrapped__");
      if (A || S) {
        var x = A ? t.value() : t,
          R = S ? e.value() : e;
        return _ || (_ = new r), E(x, R, n, g, _)
      }
    }
    return !!O && (_ || (_ = new r), a(t, e, n, g, E, _))
  }
}, function (t, e, n) {
  var r = n(36),
    i = n(157),
    o = n(158);

  function a(t) {
    var e = -1,
      n = null == t ? 0 : t.length;
    for (this.__data__ = new r; ++e < n;) this.add(t[e])
  }
  a.prototype.add = a.prototype.push = i, a.prototype.has = o, t.exports = a
}, function (t, e) {
  var n = "__lodash_hash_undefined__";
  t.exports = function (t) {
    return this.__data__.set(t, n), this
  }
}, function (t, e) {
  t.exports = function (t) {
    return this.__data__.has(t)
  }
}, function (t, e) {
  t.exports = function (t, e) {
    for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
      if (e(t[n], n, t)) return !0;
    return !1
  }
}, function (t, e) {
  t.exports = function (t, e) {
    return t.has(e)
  }
}, function (t, e, n) {
  var r = n(14),
    i = n(162),
    o = n(34),
    a = n(69),
    u = n(163),
    c = n(164),
    s = 1,
    f = 2,
    l = "[object Boolean]",
    d = "[object Date]",
    p = "[object Error]",
    v = "[object Map]",
    h = "[object Number]",
    g = "[object RegExp]",
    E = "[object Set]",
    _ = "[object String]",
    m = "[object Symbol]",
    y = "[object ArrayBuffer]",
    I = "[object DataView]",
    T = r ? r.prototype : void 0,
    w = T ? T.valueOf : void 0;
  t.exports = function (t, e, n, r, T, b, O) {
    switch (n) {
      case I:
        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
        t = t.buffer, e = e.buffer;
      case y:
        return !(t.byteLength != e.byteLength || !b(new i(t), new i(e)));
      case l:
      case d:
      case h:
        return o(+t, +e);
      case p:
        return t.name == e.name && t.message == e.message;
      case g:
      case _:
        return t == e + "";
      case v:
        var A = u;
      case E:
        var S = r & s;
        if (A || (A = c), t.size != e.size && !S) return !1;
        var x = O.get(t);
        if (x) return x == e;
        r |= f, O.set(t, e);
        var R = a(A(t), A(e), r, T, b, O);
        return O.delete(t), R;
      case m:
        if (w) return w.call(t) == w.call(e)
    }
    return !1
  }
}, function (t, e, n) {
  var r = n(4).Uint8Array;
  t.exports = r
}, function (t, e) {
  t.exports = function (t) {
    var e = -1,
      n = Array(t.size);
    return t.forEach(function (t, r) {
      n[++e] = [r, t]
    }), n
  }
}, function (t, e) {
  t.exports = function (t) {
    var e = -1,
      n = Array(t.size);
    return t.forEach(function (t) {
      n[++e] = t
    }), n
  }
}, function (t, e, n) {
  var r = n(166),
    i = 1,
    o = Object.prototype.hasOwnProperty;
  t.exports = function (t, e, n, a, u, c) {
    var s = n & i,
      f = r(t),
      l = f.length;
    if (l != r(e).length && !s) return !1;
    for (var d = l; d--;) {
      var p = f[d];
      if (!(s ? p in e : o.call(e, p))) return !1
    }
    var v = c.get(t);
    if (v && c.get(e)) return v == e;
    var h = !0;
    c.set(t, e), c.set(e, t);
    for (var g = s; ++d < l;) {
      var E = t[p = f[d]],
        _ = e[p];
      if (a) var m = s ? a(_, E, p, e, t, c) : a(E, _, p, t, e, c);
      if (!(void 0 === m ? E === _ || u(E, _, n, a, c) : m)) {
        h = !1;
        break
      }
      g || (g = "constructor" == p)
    }
    if (h && !g) {
      var y = t.constructor,
        I = e.constructor;
      y != I && "constructor" in t && "constructor" in e && !("function" == typeof y && y instanceof y && "function" == typeof I && I instanceof I) && (h = !1)
    }
    return c.delete(t), c.delete(e), h
  }
}, function (t, e, n) {
  var r = n(70),
    i = n(71),
    o = n(23);
  t.exports = function (t) {
    return r(t, o, i)
  }
}, function (t, e) {
  t.exports = function (t, e) {
    for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r;) {
      var a = t[n];
      e(a, n, t) && (o[i++] = a)
    }
    return o
  }
}, function (t, e) {
  t.exports = function (t, e) {
    for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
    return r
  }
}, function (t, e, n) {
  var r = n(10),
    i = n(8),
    o = "[object Arguments]";
  t.exports = function (t) {
    return i(t) && r(t) == o
  }
}, function (t, e) {
  t.exports = function () {
    return !1
  }
}, function (t, e, n) {
  var r = n(10),
    i = n(41),
    o = n(8),
    a = {};
  a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = function (t) {
    return o(t) && i(t.length) && !!a[r(t)]
  }
}, function (t, e) {
  t.exports = function (t) {
    return function (e) {
      return t(e)
    }
  }
}, function (t, e, n) {
  (function (t) {
    var r = n(66),
      i = e && !e.nodeType && e,
      o = i && "object" == typeof t && t && !t.nodeType && t,
      a = o && o.exports === i && r.process,
      u = function () {
        try {
          var t = o && o.require && o.require("util").types;
          return t || a && a.binding && a.binding("util")
        } catch (t) {}
      }();
    t.exports = u
  }).call(this, n(74)(t))
}, function (t, e, n) {
  var r = n(75)(Object.keys, Object);
  t.exports = r
}, function (t, e, n) {
  var r = n(7)(n(4), "DataView");
  t.exports = r
}, function (t, e, n) {
  var r = n(7)(n(4), "Promise");
  t.exports = r
}, function (t, e, n) {
  var r = n(7)(n(4), "Set");
  t.exports = r
}, function (t, e, n) {
  var r = n(77),
    i = n(23);
  t.exports = function (t) {
    for (var e = i(t), n = e.length; n--;) {
      var o = e[n],
        a = t[o];
      e[n] = [o, a, r(a)]
    }
    return e
  }
}, function (t, e, n) {
  var r = n(68),
    i = n(25),
    o = n(183),
    a = n(46),
    u = n(77),
    c = n(78),
    s = n(15),
    f = 1,
    l = 2;
  t.exports = function (t, e) {
    return a(t) && u(e) ? c(s(t), e) : function (n) {
      var a = i(n, t);
      return void 0 === a && a === e ? o(n, t) : r(e, a, f | l)
    }
  }
}, function (t, e, n) {
  var r = n(181),
    i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    o = /\\(\\)?/g,
    a = r(function (t) {
      var e = [];
      return 46 === t.charCodeAt(0) && e.push(""), t.replace(i, function (t, n, r, i) {
        e.push(r ? i.replace(o, "$1") : n || t)
      }), e
    });
  t.exports = a
}, function (t, e, n) {
  var r = n(182),
    i = 500;
  t.exports = function (t) {
    var e = r(t, function (t) {
        return n.size === i && n.clear(), t
      }),
      n = e.cache;
    return e
  }
}, function (t, e, n) {
  var r = n(36),
    i = "Expected a function";

  function o(t, e) {
    if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(i);
    var n = function () {
      var r = arguments,
        i = e ? e.apply(this, r) : r[0],
        o = n.cache;
      if (o.has(i)) return o.get(i);
      var a = t.apply(this, r);
      return n.cache = o.set(i, a) || o, a
    };
    return n.cache = new(o.Cache || r), n
  }
  o.Cache = r, t.exports = o
}, function (t, e, n) {
  var r = n(184),
    i = n(185);
  t.exports = function (t, e) {
    return null != t && i(t, e, r)
  }
}, function (t, e) {
  t.exports = function (t, e) {
    return null != t && e in Object(t)
  }
}, function (t, e, n) {
  var r = n(26),
    i = n(24),
    o = n(1),
    a = n(39),
    u = n(41),
    c = n(15);
  t.exports = function (t, e, n) {
    for (var s = -1, f = (e = r(e, t)).length, l = !1; ++s < f;) {
      var d = c(e[s]);
      if (!(l = null != t && n(t, d))) break;
      t = t[d]
    }
    return l || ++s != f ? l : !!(f = null == t ? 0 : t.length) && u(f) && a(d, f) && (o(t) || i(t))
  }
}, function (t, e, n) {
  var r = n(82),
    i = n(187),
    o = n(46),
    a = n(15);
  t.exports = function (t) {
    return o(t) ? r(a(t)) : i(t)
  }
}, function (t, e, n) {
  var r = n(45);
  t.exports = function (t) {
    return function (e) {
      return r(e, t)
    }
  }
}, function (t, e, n) {
  var r = n(83),
    i = n(6),
    o = n(48),
    a = Math.max;
  t.exports = function (t, e, n) {
    var u = null == t ? 0 : t.length;
    if (!u) return -1;
    var c = null == n ? 0 : o(n);
    return c < 0 && (c = a(u + c, 0)), r(t, i(e, 3), c)
  }
}, function (t, e, n) {
  var r = n(49),
    i = 1 / 0,
    o = 1.7976931348623157e308;
  t.exports = function (t) {
    return t ? (t = r(t)) === i || t === -i ? (t < 0 ? -1 : 1) * o : t == t ? t : 0 : 0 === t ? t : 0
  }
}, function (t, e) {
  t.exports = function (t) {
    if (Array.isArray(t)) {
      for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
      return n
    }
  }
}, function (t, e) {
  t.exports = function (t) {
    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
  }
}, function (t, e) {
  t.exports = function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance")
  }
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.createElementState = I, e.mergeActionState = T, e.ixElements = void 0;
  var r = n(13),
    i = n(2),
    o = i.IX2EngineConstants,
    a = (o.HTML_ELEMENT, o.PLAIN_OBJECT),
    u = (o.ABSTRACT_NODE, o.CONFIG_X_VALUE),
    c = o.CONFIG_Y_VALUE,
    s = o.CONFIG_Z_VALUE,
    f = o.CONFIG_VALUE,
    l = o.CONFIG_X_UNIT,
    d = o.CONFIG_Y_UNIT,
    p = o.CONFIG_Z_UNIT,
    v = o.CONFIG_UNIT,
    h = i.IX2EngineActionTypes,
    g = h.IX2_SESSION_STOPPED,
    E = h.IX2_INSTANCE_ADDED,
    _ = h.IX2_ELEMENT_STATE_CHANGED,
    m = {},
    y = "refState";

  function I(t, e, n, i, o) {
    var u = n === a ? (0, r.getIn)(o, ["config", "target", "objectId"]) : null;
    return (0, r.mergeIn)(t, [i], {
      id: i,
      ref: e,
      refId: u,
      refType: n
    })
  }

  function T(t, e, n, i, o) {
    var a = function (t) {
        var e = t.config;
        return w.reduce(function (t, n) {
          var r = n[0],
            i = n[1],
            o = e[r],
            a = e[i];
          return null != o && null != a && (t[i] = a), t
        }, {})
      }(o),
      u = [e, y, n];
    return (0, r.mergeIn)(t, u, i, a)
  }
  e.ixElements = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
      e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    switch (e.type) {
      case g:
        return m;
      case E:
        var n = e.payload,
          i = n.elementId,
          o = n.element,
          a = n.origin,
          u = n.actionItem,
          c = n.refType,
          s = u.actionTypeId,
          f = t;
        return (0, r.getIn)(f, [i, o]) !== o && (f = I(f, o, c, i, u)), T(f, i, s, a, u);
      case _:
        var l = e.payload;
        return T(t, l.elementId, l.actionTypeId, l.current, l.actionItem);
      default:
        return t
    }
  };
  var w = [
    [u, l],
    [c, d],
    [s, p],
    [f, v]
  ]
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginOrigin = e.getPluginDuration = e.getPluginConfig = void 0;
  e.getPluginConfig = function (t) {
    return t.value
  };
  e.getPluginDuration = function (t, e) {
    if ("auto" !== e.config.duration) return null;
    var n = parseFloat(t.getAttribute("data-duration"));
    return n > 0 ? 1e3 * n : 1e3 * parseFloat(t.getAttribute("data-default-duration"))
  };
  e.getPluginOrigin = function (t) {
    return t || {
      value: 0
    }
  };
  e.getPluginDestination = function (t) {
    return {
      value: t.value
    }
  };
  e.createPluginInstance = function (t) {
    var e = window.Webflow.require("lottie").createInstance(t);
    return e.stop(), e.setSubframe(!0), e
  };
  e.renderPlugin = function (t, e, n) {
    if (t) {
      var r = e[n.actionTypeId].value / 100;
      t.goToFrame(t.frames * r)
    }
  };
  e.clearPlugin = function (t) {
    window.Webflow.require("lottie").createInstance(t).stop()
  }
}, function (t, e, n) {
  "use strict";
  var r, i, o, a = n(0),
    u = a(n(16)),
    c = a(n(17)),
    s = n(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.getInstanceId = function () {
    return "i" + ht++
  }, e.getElementId = function (t, e) {
    for (var n in t) {
      var r = t[n];
      if (r && r.ref === e) return r.id
    }
    return "e" + gt++
  }, e.reifyState = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      e = t.events,
      n = t.actionLists,
      r = t.site,
      i = (0, l.default)(e, function (t, e) {
        var n = e.eventTypeId;
        return t[n] || (t[n] = {}), t[n][e.id] = e, t
      }, {}),
      o = r && r.mediaQueries,
      a = [];
    o ? a = o.map(function (t) {
      return t.key
    }) : (o = [], console.warn("IX2 missing mediaQueries in site data"));
    return {
      ixData: {
        events: e,
        actionLists: n,
        eventTypeMap: i,
        mediaQueries: o,
        mediaQueryKeys: a
      }
    }
  }, e.observeStore = function (t) {
    var e = t.store,
      n = t.select,
      r = t.onChange,
      i = t.comparator,
      o = void 0 === i ? Et : i,
      a = e.getState,
      u = (0, e.subscribe)(function () {
        var t = n(a());
        if (null == t) return void u();
        o(t, c) || r(c = t, e)
      }),
      c = n(a());
    return u
  }, e.getAffectedElements = mt, e.getComputedStyle = function (t) {
    var e = t.element,
      n = t.actionItem;
    if (!m.IS_BROWSER_ENV) return {};
    switch (n.actionTypeId) {
      case ot:
      case at:
      case ut:
      case ct:
      case st:
        return window.getComputedStyle(e);
      default:
        return {}
    }
  }, e.getInstanceOrigin = function (t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      r = arguments.length > 3 ? arguments[3] : void 0,
      i = (arguments.length > 4 ? arguments[4] : void 0).getStyle,
      o = r.actionTypeId,
      a = r.config;
    if ((0, _.isPluginType)(o)) return (0, _.getPluginOrigin)(o)(e[o]);
    switch (o) {
      case J:
      case tt:
      case et:
      case nt:
        return e[o] || bt[o];
      case it:
        return It(e[o], r.config.filters);
      case rt:
        return {
          value: (0, f.default)(parseFloat(i(t, C)), 1)
        };
      case ot:
        var u, c, s = i(t, D),
          l = i(t, P);
        return u = a.widthUnit === W ? yt.test(s) ? parseFloat(s) : parseFloat(n.width) : (0, f.default)(parseFloat(s), parseFloat(n.width)), c = a.heightUnit === W ? yt.test(l) ? parseFloat(l) : parseFloat(n.height) : (0, f.default)(parseFloat(l), parseFloat(n.height)), {
          widthValue: u,
          heightValue: c
        };
      case at:
      case ut:
      case ct:
        return function (t) {
          var e = t.element,
            n = t.actionTypeId,
            r = t.computedStyle,
            i = t.getStyle,
            o = dt[n],
            a = i(e, o),
            u = xt.test(a) ? a : r[o],
            c = function (t, e) {
              var n = t.exec(e);
              return n ? n[1] : ""
            }(Rt, u).split(H);
          return {
            rValue: (0, f.default)(parseInt(c[0], 10), 255),
            gValue: (0, f.default)(parseInt(c[1], 10), 255),
            bValue: (0, f.default)(parseInt(c[2], 10), 255),
            aValue: (0, f.default)(parseFloat(c[3]), 1)
          }
        }({
          element: t,
          actionTypeId: o,
          computedStyle: n,
          getStyle: i
        });
      case st:
        return {
          value: (0, f.default)(i(t, U), n.display)
        };
      case ft:
        return e[o] || {
          value: 0
        };
      default:
        return
    }
  }, e.getDestinationValues = function (t) {
    var e = t.element,
      n = t.actionItem,
      r = t.elementApi,
      i = n.actionTypeId;
    if ((0, _.isPluginType)(i)) return (0, _.getPluginDestination)(i)(n.config);
    switch (i) {
      case J:
      case tt:
      case et:
      case nt:
        var o = n.config,
          a = o.xValue,
          u = o.yValue,
          c = o.zValue;
        return {
          xValue: a, yValue: u, zValue: c
        };
      case ot:
        var s = r.getStyle,
          f = r.setStyle,
          l = r.getProperty,
          d = n.config,
          p = d.widthUnit,
          v = d.heightUnit,
          h = n.config,
          g = h.widthValue,
          E = h.heightValue;
        if (!m.IS_BROWSER_ENV) return {
          widthValue: g,
          heightValue: E
        };
        if (p === W) {
          var y = s(e, D);
          f(e, D, ""), g = l(e, "offsetWidth"), f(e, D, y)
        }
        if (v === W) {
          var I = s(e, P);
          f(e, P, ""), E = l(e, "offsetHeight"), f(e, P, I)
        }
        return {
          widthValue: g, heightValue: E
        };
      case at:
      case ut:
      case ct:
        var T = n.config,
          w = T.rValue,
          b = T.gValue,
          O = T.bValue,
          A = T.aValue;
        return {
          rValue: w, gValue: b, bValue: O, aValue: A
        };
      case it:
        return n.config.filters.reduce(Tt, {});
      default:
        var S = n.config.value;
        return {
          value: S
        }
    }
  }, e.getRenderType = wt, e.getStyleProp = function (t, e) {
    return t === q ? e.replace("STYLE_", "").toLowerCase() : null
  }, e.renderHTMLElement = function (t, e, n, r, i, o, a, u, c) {
    switch (u) {
      case K:
        return function (t, e, n, r, i) {
          var o = St.map(function (t) {
              var n = bt[t],
                r = e[t] || {},
                i = r.xValue,
                o = void 0 === i ? n.xValue : i,
                a = r.yValue,
                u = void 0 === a ? n.yValue : a,
                c = r.zValue,
                s = void 0 === c ? n.zValue : c,
                f = r.xUnit,
                l = void 0 === f ? "" : f,
                d = r.yUnit,
                p = void 0 === d ? "" : d,
                v = r.zUnit,
                h = void 0 === v ? "" : v;
              switch (t) {
                case J:
                  return "".concat(w, "(").concat(o).concat(l, ", ").concat(u).concat(p, ", ").concat(s).concat(h, ")");
                case tt:
                  return "".concat(b, "(").concat(o).concat(l, ", ").concat(u).concat(p, ", ").concat(s).concat(h, ")");
                case et:
                  return "".concat(O, "(").concat(o).concat(l, ") ").concat(A, "(").concat(u).concat(p, ") ").concat(S, "(").concat(s).concat(h, ")");
                case nt:
                  return "".concat(x, "(").concat(o).concat(l, ", ").concat(u).concat(p, ")");
                default:
                  return ""
              }
            }).join(" "),
            a = i.setStyle;
          Nt(t, m.TRANSFORM_PREFIXED, i), a(t, m.TRANSFORM_PREFIXED, o), u = r, c = n, s = u.actionTypeId, f = c.xValue, l = c.yValue, d = c.zValue, (s === J && void 0 !== d || s === tt && void 0 !== d || s === et && (void 0 !== f || void 0 !== l)) && a(t, m.TRANSFORM_STYLE_PREFIXED, R);
          var u, c, s, f, l, d
        }(t, e, n, i, a);
      case q:
        return function (t, e, n, r, i, o) {
          var a = o.setStyle,
            u = r.actionTypeId,
            c = r.config;
          switch (u) {
            case ot:
              var s = r.config,
                f = s.widthUnit,
                d = void 0 === f ? "" : f,
                p = s.heightUnit,
                v = void 0 === p ? "" : p,
                h = n.widthValue,
                g = n.heightValue;
              void 0 !== h && (d === W && (d = "px"), Nt(t, D, o), a(t, D, h + d)), void 0 !== g && (v === W && (v = "px"), Nt(t, P, o), a(t, P, g + v));
              break;
            case it:
              ! function (t, e, n, r) {
                var i = (0, l.default)(e, function (t, e, r) {
                    return "".concat(t, " ").concat(r, "(").concat(e).concat(At(r, n), ")")
                  }, ""),
                  o = r.setStyle;
                Nt(t, L, r), o(t, L, i)
              }(t, n, c, o);
              break;
            case at:
            case ut:
            case ct:
              var E = dt[u],
                _ = Math.round(n.rValue),
                m = Math.round(n.gValue),
                y = Math.round(n.bValue),
                I = n.aValue;
              Nt(t, E, o), a(t, E, I >= 1 ? "rgb(".concat(_, ",").concat(m, ",").concat(y, ")") : "rgba(".concat(_, ",").concat(m, ",").concat(y, ",").concat(I, ")"));
              break;
            default:
              var T = c.unit,
                w = void 0 === T ? "" : T;
              Nt(t, i, o), a(t, i, n.value + w)
          }
        }(t, 0, n, i, o, a);
      case Q:
        return function (t, e, n) {
          var r = n.setStyle;
          switch (e.actionTypeId) {
            case st:
              var i = e.config.value;
              return void(i === N && m.IS_BROWSER_ENV ? r(t, U, m.FLEX_PREFIXED) : r(t, U, i))
          }
        }(t, i, a);
      case $:
        var s = i.actionTypeId;
        if ((0, _.isPluginType)(s)) return (0, _.renderPlugin)(s)(c, e, i)
    }
  }, e.clearAllStyles = function (t) {
    var e = t.store,
      n = t.elementApi,
      r = e.getState().ixData,
      i = r.events,
      o = void 0 === i ? {} : i,
      a = r.actionLists,
      u = void 0 === a ? {} : a;
    Object.keys(o).forEach(function (t) {
      var e = o[t],
        r = e.action.config,
        i = r.actionListId,
        a = u[i];
      a && Lt({
        actionList: a,
        event: e,
        elementApi: n
      })
    }), Object.keys(u).forEach(function (t) {
      Lt({
        actionList: u[t],
        elementApi: n
      })
    })
  }, e.cleanupHTMLElement = function (t, e, n) {
    var r = n.setStyle,
      i = n.getStyle,
      o = e.actionTypeId;
    if (o === ot) {
      var a = e.config;
      a.widthUnit === W && r(t, D, ""), a.heightUnit === W && r(t, P, "")
    }
    i(t, B) && Pt({
      effect: Ct,
      actionTypeId: o,
      elementApi: n
    })(t)
  }, e.getMaxDurationItemIndex = Ft, e.getActionListProgress = function (t, e) {
    var n = t.actionItemGroups,
      r = t.useFirstGroupAsInitialState,
      i = e.actionItem,
      o = e.verboseTimeElapsed,
      a = void 0 === o ? 0 : o,
      u = 0,
      c = 0;
    return n.forEach(function (t, e) {
      if (!r || 0 !== e) {
        var n = t.actionItems,
          o = n[Ft(n)],
          s = o.config,
          f = o.actionTypeId;
        i.id === o.id && (c = u + a);
        var l = wt(f) === Q ? 0 : s.duration;
        u += s.delay + l
      }
    }), u > 0 ? (0, E.optimizeFloat)(c / u) : 0
  }, e.reduceListToGroup = function (t) {
    var e = t.actionList,
      n = t.actionItemId,
      r = t.rawData,
      i = e.actionItemGroups,
      o = e.continuousParameterGroups,
      a = [],
      u = function (t) {
        return a.push((0, v.mergeIn)(t, ["config"], {
          delay: 0,
          duration: 0
        })), t.id === n
      };
    return i && i.some(function (t) {
      return t.actionItems.some(u)
    }), o && o.some(function (t) {
      return t.continuousActionGroups.some(function (t) {
        return t.actionItems.some(u)
      })
    }), (0, v.setIn)(r, ["actionLists"], (0, c.default)({}, e.id, {
      id: e.id,
      actionItemGroups: [{
        actionItems: a
      }]
    }))
  }, e.shouldNamespaceEventParameter = function (t, e) {
    var n = e.basedOn;
    return t === g.EventTypeConsts.SCROLLING_IN_VIEW && (n === g.EventBasedOn.ELEMENT || null == n) || t === g.EventTypeConsts.MOUSE_MOVE && n === g.EventBasedOn.ELEMENT
  }, e.getNamespacedParameterId = function (t, e) {
    return t + z + e
  }, e.shouldAllowMediaQuery = function (t, e) {
    if (null == e) return !0;
    return -1 !== t.indexOf(e)
  }, e.mediaQueriesEqual = function (t, e) {
    return (0, h.default)(t && t.sort(), e && e.sort())
  }, e.stringifyTarget = function (t) {
    if ("string" == typeof t) return t;
    var e = t.id,
      n = void 0 === e ? "" : e,
      r = t.selector,
      i = void 0 === r ? "" : r,
      o = t.useEventTarget;
    return n + Y + i + Y + (void 0 === o ? "" : o)
  }, e.getItemConfigByKey = void 0;
  var f = s(n(196)),
    l = s(n(197)),
    d = s(n(203)),
    p = s(n(25)),
    v = n(13),
    h = s(n(91)),
    g = n(2),
    E = n(86),
    _ = n(88),
    m = n(33),
    y = g.IX2EngineConstants,
    I = y.BACKGROUND,
    T = y.TRANSFORM,
    w = y.TRANSLATE_3D,
    b = y.SCALE_3D,
    O = y.ROTATE_X,
    A = y.ROTATE_Y,
    S = y.ROTATE_Z,
    x = y.SKEW,
    R = y.PRESERVE_3D,
    N = y.FLEX,
    C = y.OPACITY,
    L = y.FILTER,
    D = y.WIDTH,
    P = y.HEIGHT,
    M = y.BACKGROUND_COLOR,
    F = y.BORDER_COLOR,
    j = y.COLOR,
    X = y.CHILDREN,
    k = y.IMMEDIATE_CHILDREN,
    G = y.SIBLINGS,
    V = y.PARENT,
    U = y.DISPLAY,
    B = y.WILL_CHANGE,
    W = y.AUTO,
    H = y.COMMA_DELIMITER,
    z = y.COLON_DELIMITER,
    Y = y.BAR_DELIMITER,
    K = y.RENDER_TRANSFORM,
    Q = y.RENDER_GENERAL,
    q = y.RENDER_STYLE,
    $ = y.RENDER_PLUGIN,
    Z = g.ActionTypeConsts,
    J = Z.TRANSFORM_MOVE,
    tt = Z.TRANSFORM_SCALE,
    et = Z.TRANSFORM_ROTATE,
    nt = Z.TRANSFORM_SKEW,
    rt = Z.STYLE_OPACITY,
    it = Z.STYLE_FILTER,
    ot = Z.STYLE_SIZE,
    at = Z.STYLE_BACKGROUND_COLOR,
    ut = Z.STYLE_BORDER,
    ct = Z.STYLE_TEXT_COLOR,
    st = Z.GENERAL_DISPLAY,
    ft = "OBJECT_VALUE",
    lt = function (t) {
      return t.trim()
    },
    dt = Object.freeze((r = {}, (0, c.default)(r, at, M), (0, c.default)(r, ut, F), (0, c.default)(r, ct, j), r)),
    pt = Object.freeze((i = {}, (0, c.default)(i, m.TRANSFORM_PREFIXED, T), (0, c.default)(i, M, I), (0, c.default)(i, C, C), (0, c.default)(i, L, L), (0, c.default)(i, D, D), (0, c.default)(i, P, P), i)),
    vt = {},
    ht = 1;
  var gt = 1;
  var Et = function (t, e) {
    return t === e
  };

  function _t(t) {
    var e = (0, u.default)(t);
    return "string" === e ? {
      id: t
    } : null != t && "object" === e ? {
      id: t.id,
      objectId: t.objectId,
      selector: t.selector,
      selectorGuids: t.selectorGuids,
      appliesTo: t.appliesTo,
      useEventTarget: t.useEventTarget
    } : {}
  }

  function mt(t) {
    var e = t.config,
      n = t.event,
      r = t.eventTarget,
      i = t.elementRoot,
      o = t.elementApi;
    if (!o) throw new Error("IX2 missing elementApi");
    var a = o.getValidDocument,
      u = o.getQuerySelector,
      c = o.queryDocument,
      s = o.getChildElements,
      f = o.getSiblingElements,
      l = o.matchSelector,
      d = o.elementContains,
      v = o.isSiblingNode,
      h = e.target;
    if (!h) return [];
    var E = _t(h),
      _ = E.id,
      y = E.objectId,
      I = E.selector,
      T = E.selectorGuids,
      w = E.appliesTo,
      b = E.useEventTarget;
    if (y) return [vt[y] || (vt[y] = {})];
    if (w === g.EventAppliesTo.PAGE) {
      var O = a(_);
      return O ? [O] : []
    }
    var A, S, x, R = (0, p.default)(n, "action.config.affectedElements", {})[_ || I] || {},
      N = Boolean(R.id || R.selector),
      C = n && u(_t(n.target));
    if (N ? (A = R.limitAffectedElements, S = C, x = u(R)) : S = x = u({
        id: _,
        selector: I,
        selectorGuids: T
      }), n && b) {
      var L = r && (x || !0 === b) ? [r] : c(C);
      if (x) {
        if (b === V) return c(x).filter(function (t) {
          return L.some(function (e) {
            return d(t, e)
          })
        });
        if (b === X) return c(x).filter(function (t) {
          return L.some(function (e) {
            return d(e, t)
          })
        });
        if (b === G) return c(x).filter(function (t) {
          return L.some(function (e) {
            return v(e, t)
          })
        })
      }
      return L
    }
    return null == S || null == x ? [] : m.IS_BROWSER_ENV && i ? c(x).filter(function (t) {
      return i.contains(t)
    }) : A === X ? c(S, x) : A === k ? s(c(S)).filter(l(x)) : A === G ? f(c(S)).filter(l(x)) : c(x)
  }
  var yt = /px/,
    It = function (t, e) {
      return e.reduce(function (t, e) {
        return null == t[e.type] && (t[e.type] = Ot[e.type]), t
      }, t || {})
    };
  var Tt = function (t, e) {
    return e && (t[e.type] = e.value || 0), t
  };

  function wt(t) {
    return /^TRANSFORM_/.test(t) ? K : /^STYLE_/.test(t) ? q : /^GENERAL_/.test(t) ? Q : /^PLUGIN_/.test(t) ? $ : void 0
  }
  e.getItemConfigByKey = function (t, e, n) {
    if ((0, _.isPluginType)(t)) return (0, _.getPluginConfig)(t)(n, e);
    switch (t) {
      case it:
        var r = (0, d.default)(n.filters, function (t) {
          return t.type === e
        });
        return r ? r.value : 0;
      default:
        return n[e]
    }
  };
  var bt = (o = {}, (0, c.default)(o, J, Object.freeze({
      xValue: 0,
      yValue: 0,
      zValue: 0
    })), (0, c.default)(o, tt, Object.freeze({
      xValue: 1,
      yValue: 1,
      zValue: 1
    })), (0, c.default)(o, et, Object.freeze({
      xValue: 0,
      yValue: 0,
      zValue: 0
    })), (0, c.default)(o, nt, Object.freeze({
      xValue: 0,
      yValue: 0
    })), o),
    Ot = Object.freeze({
      blur: 0,
      "hue-rotate": 0,
      invert: 0,
      grayscale: 0,
      saturate: 100,
      sepia: 0,
      contrast: 100,
      brightness: 100
    }),
    At = function (t, e) {
      var n = (0, d.default)(e.filters, function (e) {
        return e.type === t
      });
      if (n && n.unit) return n.unit;
      switch (t) {
        case "blur":
          return "px";
        case "hue-rotate":
          return "deg";
        default:
          return "%"
      }
    },
    St = Object.keys(bt);
  var xt = /^rgb/,
    Rt = RegExp("rgba?".concat("\\(([^)]+)\\)"));

  function Nt(t, e, n) {
    if (m.IS_BROWSER_ENV) {
      var r = pt[e];
      if (r) {
        var i = n.getStyle,
          o = n.setStyle,
          a = i(t, B);
        if (a) {
          var u = a.split(H).map(lt); - 1 === u.indexOf(r) && o(t, B, u.concat(r).join(H))
        } else o(t, B, r)
      }
    }
  }

  function Ct(t, e, n) {
    if (m.IS_BROWSER_ENV) {
      var r = pt[e];
      if (r) {
        var i = n.getStyle,
          o = n.setStyle,
          a = i(t, B);
        a && -1 !== a.indexOf(r) && o(t, B, a.split(H).map(lt).filter(function (t) {
          return t !== r
        }).join(H))
      }
    }
  }

  function Lt(t) {
    var e = t.actionList,
      n = void 0 === e ? {} : e,
      r = t.event,
      i = t.elementApi,
      o = n.actionItemGroups,
      a = n.continuousParameterGroups;
    o && o.forEach(function (t) {
      Dt({
        actionGroup: t,
        event: r,
        elementApi: i
      })
    }), a && a.forEach(function (t) {
      t.continuousActionGroups.forEach(function (t) {
        Dt({
          actionGroup: t,
          event: r,
          elementApi: i
        })
      })
    })
  }

  function Dt(t) {
    var e = t.actionGroup,
      n = t.event,
      r = t.elementApi;
    e.actionItems.forEach(function (t) {
      var e, i = t.actionTypeId,
        o = t.config;
      e = (0, _.isPluginType)(i) ? (0, _.clearPlugin)(i) : Pt({
        effect: Mt,
        actionTypeId: i,
        elementApi: r
      }), mt({
        config: o,
        event: n,
        elementApi: r
      }).forEach(e)
    })
  }
  var Pt = function (t) {
    var e = t.effect,
      n = t.actionTypeId,
      r = t.elementApi;
    return function (t) {
      switch (n) {
        case J:
        case tt:
        case et:
        case nt:
          e(t, m.TRANSFORM_PREFIXED, r);
          break;
        case it:
          e(t, L, r);
          break;
        case rt:
          e(t, C, r);
          break;
        case ot:
          e(t, D, r), e(t, P, r);
          break;
        case at:
        case ut:
        case ct:
          e(t, dt[n], r);
          break;
        case st:
          e(t, U, r)
      }
    }
  };

  function Mt(t, e, n) {
    var r = n.setStyle;
    Ct(t, e, n), r(t, e, ""), e === m.TRANSFORM_PREFIXED && r(t, m.TRANSFORM_STYLE_PREFIXED, "")
  }

  function Ft(t) {
    var e = 0,
      n = 0;
    return t.forEach(function (t, r) {
      var i = t.config,
        o = i.delay + i.duration;
      o >= e && (e = o, n = r)
    }), n
  }
}, function (t, e) {
  t.exports = function (t, e) {
    return null == t || t != t ? e : t
  }
}, function (t, e, n) {
  var r = n(198),
    i = n(89),
    o = n(6),
    a = n(202),
    u = n(1);
  t.exports = function (t, e, n) {
    var c = u(t) ? r : a,
      s = arguments.length < 3;
    return c(t, o(e, 4), n, s, i)
  }
}, function (t, e) {
  t.exports = function (t, e, n, r) {
    var i = -1,
      o = null == t ? 0 : t.length;
    for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t);
    return n
  }
}, function (t, e, n) {
  var r = n(200)();
  t.exports = r
}, function (t, e) {
  t.exports = function (t) {
    return function (e, n, r) {
      for (var i = -1, o = Object(e), a = r(e), u = a.length; u--;) {
        var c = a[t ? u : ++i];
        if (!1 === n(o[c], c, o)) break
      }
      return e
    }
  }
}, function (t, e, n) {
  var r = n(11);
  t.exports = function (t, e) {
    return function (n, i) {
      if (null == n) return n;
      if (!r(n)) return t(n, i);
      for (var o = n.length, a = e ? o : -1, u = Object(n);
        (e ? a-- : ++a < o) && !1 !== i(u[a], a, u););
      return n
    }
  }
}, function (t, e) {
  t.exports = function (t, e, n, r, i) {
    return i(t, function (t, i, o) {
      n = r ? (r = !1, t) : e(n, t, i, o)
    }), n
  }
}, function (t, e, n) {
  var r = n(63)(n(204));
  t.exports = r
}, function (t, e, n) {
  var r = n(83),
    i = n(6),
    o = n(48),
    a = Math.max,
    u = Math.min;
  t.exports = function (t, e, n) {
    var c = null == t ? 0 : t.length;
    if (!c) return -1;
    var s = c - 1;
    return void 0 !== n && (s = o(n), s = n < 0 ? a(c + s, 0) : u(s, c - 1)), r(t, i(e, 3), s, !0)
  }
}, function (t, e) {
  t.exports = function (t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }
}, function (t, e, n) {
  "use strict";
  var r = Object.prototype.hasOwnProperty;

  function i(t, e) {
    return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e
  }
  t.exports = function (t, e) {
    if (i(t, e)) return !0;
    if ("object" != typeof t || null === t || "object" != typeof e || null === e) return !1;
    var n = Object.keys(t),
      o = Object.keys(e);
    if (n.length !== o.length) return !1;
    for (var a = 0; a < n.length; a++)
      if (!r.call(e, n[a]) || !i(t[n[a]], e[n[a]])) return !1;
    return !0
  }
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.ixInstances = void 0;
  var r = n(2),
    i = n(9),
    o = n(13),
    a = r.IX2EngineActionTypes,
    u = a.IX2_RAW_DATA_IMPORTED,
    c = a.IX2_SESSION_STOPPED,
    s = a.IX2_INSTANCE_ADDED,
    f = a.IX2_INSTANCE_STARTED,
    l = a.IX2_INSTANCE_REMOVED,
    d = a.IX2_ANIMATION_FRAME_CHANGED,
    p = i.IX2EasingUtils,
    v = p.optimizeFloat,
    h = p.applyEasing,
    g = p.createBezierEasing,
    E = r.IX2EngineConstants.RENDER_GENERAL,
    _ = i.IX2VanillaUtils,
    m = _.getItemConfigByKey,
    y = _.getRenderType,
    I = _.getStyleProp,
    T = function (t, e) {
      var n = t.position,
        r = t.parameterId,
        i = t.actionGroups,
        a = t.destinationKeys,
        u = t.smoothing,
        c = t.restingValue,
        s = t.actionTypeId,
        f = t.customEasingFn,
        l = e.payload.parameters,
        d = Math.max(1 - u, .01),
        p = l[r];
      null == p && (d = 1, p = c);
      var g, E, _, y, I = Math.max(p, 0) || 0,
        T = v(I - n),
        w = v(n + T * d),
        b = 100 * w;
      if (w === n && t.current) return t;
      for (var O = 0, A = i.length; O < A; O++) {
        var S = i[O],
          x = S.keyframe,
          R = S.actionItems;
        if (0 === O && (g = R[0]), b >= x) {
          g = R[0];
          var N = i[O + 1],
            C = N && b !== x;
          E = C ? N.actionItems[0] : null, C && (_ = x / 100, y = (N.keyframe - x) / 100)
        }
      }
      var L = {};
      if (g && !E)
        for (var D = 0, P = a.length; D < P; D++) {
          var M = a[D];
          L[M] = m(s, M, g.config)
        } else if (g && E && void 0 !== _ && void 0 !== y)
          for (var F = (w - _) / y, j = g.config.easing, X = h(j, F, f), k = 0, G = a.length; k < G; k++) {
            var V = a[k],
              U = m(s, V, g.config),
              B = (m(s, V, E.config) - U) * X + U;
            L[V] = B
          }
      return (0, o.merge)(t, {
        position: w,
        current: L
      })
    },
    w = function (t, e) {
      var n = t,
        r = n.active,
        i = n.origin,
        a = n.start,
        u = n.immediate,
        c = n.renderType,
        s = n.verbose,
        f = n.actionItem,
        l = n.destination,
        d = n.destinationKeys,
        p = n.pluginDuration,
        g = n.instanceDelay,
        _ = n.customEasingFn,
        m = f.config.easing,
        y = f.config,
        I = y.duration,
        T = y.delay;
      null != p && (I = p), T = null != g ? g : T, c === E ? I = 0 : u && (I = T = 0);
      var w = e.payload.now;
      if (r && i) {
        var b = w - (a + T);
        if (s) {
          var O = w - a,
            A = I + T,
            S = v(Math.min(Math.max(0, O / A), 1));
          t = (0, o.set)(t, "verboseTimeElapsed", A * S)
        }
        if (b < 0) return t;
        var x = v(Math.min(Math.max(0, b / I), 1)),
          R = h(m, x, _),
          N = {},
          C = null;
        return d.length && (C = d.reduce(function (t, e) {
          var n = l[e],
            r = parseFloat(i[e]) || 0,
            o = (parseFloat(n) - r) * R + r;
          return t[e] = o, t
        }, {})), N.current = C, N.position = x, 1 === x && (N.active = !1, N.complete = !0), (0, o.merge)(t, N)
      }
      return t
    };
  e.ixInstances = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
      e = arguments.length > 1 ? arguments[1] : void 0;
    switch (e.type) {
      case u:
        return e.payload.ixInstances || Object.freeze({});
      case c:
        return Object.freeze({});
      case s:
        var n = e.payload,
          r = n.instanceId,
          i = n.elementId,
          a = n.actionItem,
          p = n.eventId,
          v = n.eventTarget,
          h = n.eventStateKey,
          E = n.actionListId,
          _ = n.groupIndex,
          m = n.isCarrier,
          b = n.origin,
          O = n.destination,
          A = n.immediate,
          S = n.verbose,
          x = n.continuous,
          R = n.parameterId,
          N = n.actionGroups,
          C = n.smoothing,
          L = n.restingValue,
          D = n.pluginInstance,
          P = n.pluginDuration,
          M = n.instanceDelay,
          F = a.actionTypeId,
          j = y(F),
          X = I(j, F),
          k = Object.keys(O).filter(function (t) {
            return null != O[t]
          }),
          G = a.config.easing;
        return (0, o.set)(t, r, {
          id: r,
          elementId: i,
          active: !1,
          position: 0,
          start: 0,
          origin: b,
          destination: O,
          destinationKeys: k,
          immediate: A,
          verbose: S,
          current: null,
          actionItem: a,
          actionTypeId: F,
          eventId: p,
          eventTarget: v,
          eventStateKey: h,
          actionListId: E,
          groupIndex: _,
          renderType: j,
          isCarrier: m,
          styleProp: X,
          continuous: x,
          parameterId: R,
          actionGroups: N,
          smoothing: C,
          restingValue: L,
          pluginInstance: D,
          pluginDuration: P,
          instanceDelay: M,
          customEasingFn: Array.isArray(G) && 4 === G.length ? g(G) : void 0
        });
      case f:
        var V = e.payload,
          U = V.instanceId,
          B = V.time;
        return (0, o.mergeIn)(t, [U], {
          active: !0,
          complete: !1,
          start: B
        });
      case l:
        var W = e.payload.instanceId;
        if (!t[W]) return t;
        for (var H = {}, z = Object.keys(t), Y = z.length, K = 0; K < Y; K++) {
          var Q = z[K];
          Q !== W && (H[Q] = t[Q])
        }
        return H;
      case d:
        for (var q = t, $ = Object.keys(t), Z = $.length, J = 0; J < Z; J++) {
          var tt = $[J],
            et = t[tt],
            nt = et.continuous ? T : w;
          q = (0, o.set)(q, tt, nt(et, e))
        }
        return q;
      default:
        return t
    }
  }
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.ixParameters = void 0;
  var r = n(2).IX2EngineActionTypes,
    i = r.IX2_RAW_DATA_IMPORTED,
    o = r.IX2_SESSION_STOPPED,
    a = r.IX2_PARAMETER_CHANGED;
  e.ixParameters = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      e = arguments.length > 1 ? arguments[1] : void 0;
    switch (e.type) {
      case i:
        return e.payload.ixParameters || {};
      case o:
        return {};
      case a:
        var n = e.payload,
          r = n.key,
          u = n.value;
        return t[r] = u, t;
      default:
        return t
    }
  }
}, function (t, e) {
  t.exports = function (t, e) {
    if (null == t) return {};
    var n, r, i = {},
      o = Object.keys(t);
    for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
    return i
  }
}, function (t, e, n) {
  var r = n(42),
    i = n(44),
    o = n(11),
    a = n(211),
    u = n(212),
    c = "[object Map]",
    s = "[object Set]";
  t.exports = function (t) {
    if (null == t) return 0;
    if (o(t)) return a(t) ? u(t) : t.length;
    var e = i(t);
    return e == c || e == s ? t.size : r(t).length
  }
}, function (t, e, n) {
  var r = n(10),
    i = n(1),
    o = n(8),
    a = "[object String]";
  t.exports = function (t) {
    return "string" == typeof t || !i(t) && o(t) && r(t) == a
  }
}, function (t, e, n) {
  var r = n(213),
    i = n(214),
    o = n(215);
  t.exports = function (t) {
    return i(t) ? o(t) : r(t)
  }
}, function (t, e, n) {
  var r = n(82)("length");
  t.exports = r
}, function (t, e) {
  var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
  t.exports = function (t) {
    return n.test(t)
  }
}, function (t, e) {
  var n = "[\\ud800-\\udfff]",
    r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
    i = "\\ud83c[\\udffb-\\udfff]",
    o = "[^\\ud800-\\udfff]",
    a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    c = "(?:" + r + "|" + i + ")" + "?",
    s = "[\\ufe0e\\ufe0f]?" + c + ("(?:\\u200d(?:" + [o, a, u].join("|") + ")[\\ufe0e\\ufe0f]?" + c + ")*"),
    f = "(?:" + [o + r + "?", r, a, u, n].join("|") + ")",
    l = RegExp(i + "(?=" + i + ")|" + f + s, "g");
  t.exports = function (t) {
    for (var e = l.lastIndex = 0; l.test(t);) ++e;
    return e
  }
}, function (t, e, n) {
  var r = n(6),
    i = n(217),
    o = n(218);
  t.exports = function (t, e) {
    return o(t, i(r(e)))
  }
}, function (t, e) {
  var n = "Expected a function";
  t.exports = function (t) {
    if ("function" != typeof t) throw new TypeError(n);
    return function () {
      var e = arguments;
      switch (e.length) {
        case 0:
          return !t.call(this);
        case 1:
          return !t.call(this, e[0]);
        case 2:
          return !t.call(this, e[0], e[1]);
        case 3:
          return !t.call(this, e[0], e[1], e[2])
      }
      return !t.apply(this, e)
    }
  }
}, function (t, e, n) {
  var r = n(81),
    i = n(6),
    o = n(219),
    a = n(222);
  t.exports = function (t, e) {
    if (null == t) return {};
    var n = r(a(t), function (t) {
      return [t]
    });
    return e = i(e), o(t, n, function (t, n) {
      return e(t, n[0])
    })
  }
}, function (t, e, n) {
  var r = n(45),
    i = n(220),
    o = n(26);
  t.exports = function (t, e, n) {
    for (var a = -1, u = e.length, c = {}; ++a < u;) {
      var s = e[a],
        f = r(t, s);
      n(f, s) && i(c, o(s, t), f)
    }
    return c
  }
}, function (t, e, n) {
  var r = n(221),
    i = n(26),
    o = n(39),
    a = n(5),
    u = n(15);
  t.exports = function (t, e, n, c) {
    if (!a(t)) return t;
    for (var s = -1, f = (e = i(e, t)).length, l = f - 1, d = t; null != d && ++s < f;) {
      var p = u(e[s]),
        v = n;
      if (s != l) {
        var h = d[p];
        void 0 === (v = c ? c(h, p, d) : void 0) && (v = a(h) ? h : o(e[s + 1]) ? [] : {})
      }
      r(d, p, v), d = d[p]
    }
    return t
  }
}, function (t, e, n) {
  var r = n(93),
    i = n(34),
    o = Object.prototype.hasOwnProperty;
  t.exports = function (t, e, n) {
    var a = t[e];
    o.call(t, e) && i(a, n) && (void 0 !== n || e in t) || r(t, e, n)
  }
}, function (t, e, n) {
  var r = n(70),
    i = n(223),
    o = n(225);
  t.exports = function (t) {
    return r(t, o, i)
  }
}, function (t, e, n) {
  var r = n(37),
    i = n(224),
    o = n(71),
    a = n(72),
    u = Object.getOwnPropertySymbols ? function (t) {
      for (var e = []; t;) r(e, o(t)), t = i(t);
      return e
    } : a;
  t.exports = u
}, function (t, e, n) {
  var r = n(75)(Object.getPrototypeOf, Object);
  t.exports = r
}, function (t, e, n) {
  var r = n(73),
    i = n(226),
    o = n(11);
  t.exports = function (t) {
    return o(t) ? r(t, !0) : i(t)
  }
}, function (t, e, n) {
  var r = n(5),
    i = n(43),
    o = n(227),
    a = Object.prototype.hasOwnProperty;
  t.exports = function (t) {
    if (!r(t)) return o(t);
    var e = i(t),
      n = [];
    for (var u in t)("constructor" != u || !e && a.call(t, u)) && n.push(u);
    return n
  }
}, function (t, e) {
  t.exports = function (t) {
    var e = [];
    if (null != t)
      for (var n in Object(t)) e.push(n);
    return e
  }
}, function (t, e, n) {
  var r = n(42),
    i = n(44),
    o = n(24),
    a = n(1),
    u = n(11),
    c = n(38),
    s = n(43),
    f = n(40),
    l = "[object Map]",
    d = "[object Set]",
    p = Object.prototype.hasOwnProperty;
  t.exports = function (t) {
    if (null == t) return !0;
    if (u(t) && (a(t) || "string" == typeof t || "function" == typeof t.splice || c(t) || f(t) || o(t))) return !t.length;
    var e = i(t);
    if (e == l || e == d) return !t.size;
    if (s(t)) return !r(t).length;
    for (var n in t)
      if (p.call(t, n)) return !1;
    return !0
  }
}, function (t, e, n) {
  var r = n(93),
    i = n(90),
    o = n(6);
  t.exports = function (t, e) {
    var n = {};
    return e = o(e, 3), i(t, function (t, i, o) {
      r(n, i, e(t, i, o))
    }), n
  }
}, function (t, e, n) {
  var r = n(231),
    i = n(89),
    o = n(232),
    a = n(1);
  t.exports = function (t, e) {
    return (a(t) ? r : i)(t, o(e))
  }
}, function (t, e) {
  t.exports = function (t, e) {
    for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t););
    return t
  }
}, function (t, e, n) {
  var r = n(47);
  t.exports = function (t) {
    return "function" == typeof t ? t : r
  }
}, function (t, e, n) {
  var r = n(95),
    i = n(80),
    o = n(48),
    a = n(79);
  t.exports = function (t, e, n) {
    t = a(t), e = i(e);
    var u = t.length,
      c = n = void 0 === n ? u : r(o(n), 0, u);
    return (n -= e.length) >= 0 && t.slice(n, c) == e
  }
}, function (t, e, n) {
  var r = n(235),
    i = n(5),
    o = "Expected a function";
  t.exports = function (t, e, n) {
    var a = !0,
      u = !0;
    if ("function" != typeof t) throw new TypeError(o);
    return i(n) && (a = "leading" in n ? !!n.leading : a, u = "trailing" in n ? !!n.trailing : u), r(t, e, {
      leading: a,
      maxWait: e,
      trailing: u
    })
  }
}, function (t, e, n) {
  var r = n(5),
    i = n(236),
    o = n(49),
    a = "Expected a function",
    u = Math.max,
    c = Math.min;
  t.exports = function (t, e, n) {
    var s, f, l, d, p, v, h = 0,
      g = !1,
      E = !1,
      _ = !0;
    if ("function" != typeof t) throw new TypeError(a);

    function m(e) {
      var n = s,
        r = f;
      return s = f = void 0, h = e, d = t.apply(r, n)
    }

    function y(t) {
      var n = t - v;
      return void 0 === v || n >= e || n < 0 || E && t - h >= l
    }

    function I() {
      var t = i();
      if (y(t)) return T(t);
      p = setTimeout(I, function (t) {
        var n = e - (t - v);
        return E ? c(n, l - (t - h)) : n
      }(t))
    }

    function T(t) {
      return p = void 0, _ && s ? m(t) : (s = f = void 0, d)
    }

    function w() {
      var t = i(),
        n = y(t);
      if (s = arguments, f = this, v = t, n) {
        if (void 0 === p) return function (t) {
          return h = t, p = setTimeout(I, e), g ? m(t) : d
        }(v);
        if (E) return clearTimeout(p), p = setTimeout(I, e), m(v)
      }
      return void 0 === p && (p = setTimeout(I, e)), d
    }
    return e = o(e) || 0, r(n) && (g = !!n.leading, l = (E = "maxWait" in n) ? u(o(n.maxWait) || 0, e) : l, _ = "trailing" in n ? !!n.trailing : _), w.cancel = function () {
      void 0 !== p && clearTimeout(p), h = 0, s = v = f = p = void 0
    }, w.flush = function () {
      return void 0 === p ? d : T(i())
    }, w
  }
}, function (t, e, n) {
  var r = n(4);
  t.exports = function () {
    return r.Date.now()
  }
}, function (t, e, n) {
  "use strict";
  var r = n(0)(n(16));
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.setStyle = function (t, e, n) {
    t.style[e] = n
  }, e.getStyle = function (t, e) {
    return t.style[e]
  }, e.getProperty = function (t, e) {
    return t[e]
  }, e.matchSelector = function (t) {
    return function (e) {
      return e[a](t)
    }
  }, e.getQuerySelector = function (t) {
    var e = t.id,
      n = t.selector;
    if (e) {
      var r = e;
      if (-1 !== e.indexOf(c)) {
        var i = e.split(c),
          o = i[0];
        if (r = i[1], o !== document.documentElement.getAttribute(l)) return null
      }
      return '[data-w-id^="'.concat(r, '"]')
    }
    return n
  }, e.getValidDocument = function (t) {
    if (null == t || t === document.documentElement.getAttribute(l)) return document;
    return null
  }, e.queryDocument = function (t, e) {
    return Array.prototype.slice.call(document.querySelectorAll(e ? t + " " + e : t))
  }, e.elementContains = function (t, e) {
    return t.contains(e)
  }, e.isSiblingNode = function (t, e) {
    return t !== e && t.parentNode === e.parentNode
  }, e.getChildElements = function (t) {
    for (var e = [], n = 0, r = (t || []).length; n < r; n++) {
      var i = t[n].children,
        o = i.length;
      if (o)
        for (var a = 0; a < o; a++) e.push(i[a])
    }
    return e
  }, e.getSiblingElements = function () {
    for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [], n = [], r = 0, i = t.length; r < i; r++) {
      var o = t[r].parentNode;
      if (o && o.children && o.children.length && -1 === n.indexOf(o)) {
        n.push(o);
        for (var a = o.firstElementChild; null != a;) - 1 === t.indexOf(a) && e.push(a), a = a.nextElementSibling
      }
    }
    return e
  }, e.getRefType = function (t) {
    if (null != t && "object" == (0, r.default)(t)) return t instanceof Element ? s : f;
    return null
  }, e.getClosestElement = void 0;
  var i = n(9),
    o = n(2),
    a = i.IX2BrowserSupport.ELEMENT_MATCHES,
    u = o.IX2EngineConstants,
    c = u.IX2_ID_DELIMITER,
    s = u.HTML_ELEMENT,
    f = u.PLAIN_OBJECT,
    l = u.WF_PAGE;
  var d = Element.prototype.closest ? function (t, e) {
    return document.documentElement.contains(t) ? t.closest(e) : null
  } : function (t, e) {
    if (!document.documentElement.contains(t)) return null;
    var n = t;
    do {
      if (n[a] && n[a](e)) return n;
      n = n.parentNode
    } while (null != n);
    return null
  };
  e.getClosestElement = d
}, function (t, e, n) {
  "use strict";
  var r, i = n(0),
    o = i(n(17)),
    a = i(n(16)),
    u = n(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var c, s, f, l = u(n(18)),
    d = u(n(239)),
    p = u(n(25)),
    v = u(n(258)),
    h = n(2),
    g = n(92),
    E = n(50),
    _ = n(9),
    m = h.EventTypeConsts,
    y = m.MOUSE_CLICK,
    I = m.MOUSE_SECOND_CLICK,
    T = m.MOUSE_DOWN,
    w = m.MOUSE_UP,
    b = m.MOUSE_OVER,
    O = m.MOUSE_OUT,
    A = m.DROPDOWN_CLOSE,
    S = m.DROPDOWN_OPEN,
    x = m.SLIDER_ACTIVE,
    R = m.SLIDER_INACTIVE,
    N = m.TAB_ACTIVE,
    C = m.TAB_INACTIVE,
    L = m.NAVBAR_CLOSE,
    D = m.NAVBAR_OPEN,
    P = m.MOUSE_MOVE,
    M = m.PAGE_SCROLL_DOWN,
    F = m.SCROLL_INTO_VIEW,
    j = m.SCROLL_OUT_OF_VIEW,
    X = m.PAGE_SCROLL_UP,
    k = m.SCROLLING_IN_VIEW,
    G = m.PAGE_FINISH,
    V = m.ECOMMERCE_CART_CLOSE,
    U = m.ECOMMERCE_CART_OPEN,
    B = m.PAGE_START,
    W = m.PAGE_SCROLL,
    H = "COMPONENT_ACTIVE",
    z = "COMPONENT_INACTIVE",
    Y = h.IX2EngineConstants.COLON_DELIMITER,
    K = _.IX2VanillaUtils.getNamespacedParameterId,
    Q = function (t) {
      return function (e) {
        return !("object" !== (0, a.default)(e) || !t(e)) || e
      }
    },
    q = Q(function (t) {
      return t.element === t.nativeEvent.target
    }),
    $ = Q(function (t) {
      var e = t.element,
        n = t.nativeEvent;
      return e.contains(n.target)
    }),
    Z = (0, d.default)([q, $]),
    J = function (t, e) {
      if (e) {
        var n = t.getState().ixData.events[e];
        if (n && !at[n.eventTypeId]) return n
      }
      return null
    },
    tt = function (t, e) {
      var n = t.store,
        r = t.event,
        i = t.element,
        o = t.eventStateKey,
        a = r.action,
        u = r.id,
        c = a.config,
        s = c.actionListId,
        f = c.autoStopEventId,
        l = J(n, f);
      return l && (0, g.stopActionGroup)({
        store: n,
        eventId: f,
        eventTarget: i,
        eventStateKey: f + Y + o.split(Y)[1],
        actionListId: (0, p.default)(l, "action.config.actionListId")
      }), (0, g.stopActionGroup)({
        store: n,
        eventId: u,
        eventTarget: i,
        eventStateKey: o,
        actionListId: s
      }), (0, g.startActionGroup)({
        store: n,
        eventId: u,
        eventTarget: i,
        eventStateKey: o,
        actionListId: s
      }), e
    },
    et = function (t, e) {
      return function (n, r) {
        return !0 === t(n, r) ? e(n, r) : r
      }
    },
    nt = {
      handler: et(Z, tt)
    },
    rt = (0, l.default)({}, nt, {
      types: [H, z].join(" ")
    }),
    it = [{
      target: window,
      types: "resize orientationchange",
      throttle: !0
    }, {
      target: document,
      types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
      throttle: !0
    }],
    ot = {
      types: it
    },
    at = {
      PAGE_START: B,
      PAGE_FINISH: G
    },
    ut = (c = void 0 !== window.pageXOffset, s = "CSS1Compat" === document.compatMode ? document.documentElement : document.body, function () {
      return {
        scrollLeft: c ? window.pageXOffset : s.scrollLeft,
        scrollTop: c ? window.pageYOffset : s.scrollTop,
        stiffScrollTop: (0, v.default)(c ? window.pageYOffset : s.scrollTop, 0, s.scrollHeight - window.innerHeight),
        scrollWidth: s.scrollWidth,
        scrollHeight: s.scrollHeight,
        clientWidth: s.clientWidth,
        clientHeight: s.clientHeight,
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      }
    }),
    ct = function (t) {
      var e = t.element,
        n = t.nativeEvent,
        r = n.type,
        i = n.target,
        o = n.relatedTarget,
        a = e.contains(i);
      if ("mouseover" === r && a) return !0;
      var u = e.contains(o);
      return !("mouseout" !== r || !a || !u)
    },
    st = function (t) {
      var e, n, r = t.element,
        i = t.event.config,
        o = ut(),
        a = o.clientWidth,
        u = o.clientHeight,
        c = i.scrollOffsetValue,
        s = "PX" === i.scrollOffsetUnit ? c : u * (c || 0) / 100;
      return e = r.getBoundingClientRect(), n = {
        left: 0,
        top: s,
        right: a,
        bottom: u - s
      }, !(e.left > n.right || e.right < n.left || e.top > n.bottom || e.bottom < n.top)
    },
    ft = function (t) {
      return function (e, n) {
        var r = e.nativeEvent.type,
          i = -1 !== [H, z].indexOf(r) ? r === H : n.isActive,
          o = (0, l.default)({}, n, {
            isActive: i
          });
        return n && o.isActive === n.isActive ? o : t(e, o) || o
      }
    },
    lt = function (t) {
      return function (e, n) {
        var r = {
          elementHovered: ct(e)
        };
        return (n ? r.elementHovered !== n.elementHovered : r.elementHovered) && t(e, r) || r
      }
    },
    dt = function (t) {
      return function (e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = ut(),
          i = r.stiffScrollTop,
          o = r.scrollHeight,
          a = r.innerHeight,
          u = e.event,
          c = u.config,
          s = u.eventTypeId,
          f = c.scrollOffsetValue,
          d = "PX" === c.scrollOffsetUnit,
          p = o - a,
          v = Number((i / p).toFixed(2));
        if (n && n.percentTop === v) return n;
        var h, g, E = (d ? f : a * (f || 0) / 100) / p,
          _ = 0;
        n && (h = v > n.percentTop, _ = (g = n.scrollingDown !== h) ? v : n.anchorTop);
        var m = s === M ? v >= _ + E : v <= _ - E,
          y = (0, l.default)({}, n, {
            percentTop: v,
            inBounds: m,
            anchorTop: _,
            scrollingDown: h
          });
        return n && m && (g || y.inBounds !== n.inBounds) && t(e, y) || y
      }
    },
    pt = function (t) {
      return function (e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            clickCount: 0
          },
          r = {
            clickCount: n.clickCount % 2 + 1
          };
        return r.clickCount !== n.clickCount && t(e, r) || r
      }
    },
    vt = function () {
      var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return (0, l.default)({}, rt, {
        handler: et(t ? Z : q, ft(function (t, e) {
          return e.isActive ? nt.handler(t, e) : e
        }))
      })
    },
    ht = function () {
      var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return (0, l.default)({}, rt, {
        handler: et(t ? Z : q, ft(function (t, e) {
          return e.isActive ? e : nt.handler(t, e)
        }))
      })
    },
    gt = (0, l.default)({}, ot, {
      handler: (f = function (t, e) {
        var n = e.elementVisible,
          r = t.event;
        return !t.store.getState().ixData.events[r.action.config.autoStopEventId] && e.triggered ? e : r.eventTypeId === F === n ? (tt(t), (0, l.default)({}, e, {
          triggered: !0
        })) : e
      }, function (t, e) {
        var n = (0, l.default)({}, e, {
          elementVisible: st(t)
        });
        return (e ? n.elementVisible !== e.elementVisible : n.elementVisible) && f(t, n) || n
      })
    }),
    Et = (r = {}, (0, o.default)(r, x, vt()), (0, o.default)(r, R, ht()), (0, o.default)(r, S, vt()), (0, o.default)(r, A, ht()), (0, o.default)(r, D, vt(!1)), (0, o.default)(r, L, ht(!1)), (0, o.default)(r, N, vt()), (0, o.default)(r, C, ht()), (0, o.default)(r, U, {
      types: "ecommerce-cart-open",
      handler: et(Z, tt)
    }), (0, o.default)(r, V, {
      types: "ecommerce-cart-close",
      handler: et(Z, tt)
    }), (0, o.default)(r, y, {
      types: "click",
      handler: et(Z, pt(function (t, e) {
        var n, r, i, o = e.clickCount;
        r = (n = t).store, i = n.event.action.config.autoStopEventId, Boolean(J(r, i)) ? 1 === o && tt(t) : tt(t)
      }))
    }), (0, o.default)(r, I, {
      types: "click",
      handler: et(Z, pt(function (t, e) {
        2 === e.clickCount && tt(t)
      }))
    }), (0, o.default)(r, T, (0, l.default)({}, nt, {
      types: "mousedown"
    })), (0, o.default)(r, w, (0, l.default)({}, nt, {
      types: "mouseup"
    })), (0, o.default)(r, b, {
      types: "mouseover mouseout",
      handler: et(Z, lt(function (t, e) {
        e.elementHovered && tt(t)
      }))
    }), (0, o.default)(r, O, {
      types: "mouseover mouseout",
      handler: et(Z, lt(function (t, e) {
        e.elementHovered || tt(t)
      }))
    }), (0, o.default)(r, P, {
      types: "mousemove mouseout scroll",
      handler: function (t) {
        var e = t.store,
          n = t.element,
          r = t.eventConfig,
          i = t.nativeEvent,
          o = t.eventStateKey,
          a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0
          },
          u = r.basedOn,
          c = r.selectedAxis,
          s = r.continuousParameterGroupId,
          f = r.reverse,
          l = r.restingState,
          d = void 0 === l ? 0 : l,
          p = i.clientX,
          v = void 0 === p ? a.clientX : p,
          g = i.clientY,
          _ = void 0 === g ? a.clientY : g,
          m = i.pageX,
          y = void 0 === m ? a.pageX : m,
          I = i.pageY,
          T = void 0 === I ? a.pageY : I,
          w = "X_AXIS" === c,
          b = "mouseout" === i.type,
          O = d / 100,
          A = s,
          S = !1;
        switch (u) {
          case h.EventBasedOn.VIEWPORT:
            O = w ? Math.min(v, window.innerWidth) / window.innerWidth : Math.min(_, window.innerHeight) / window.innerHeight;
            break;
          case h.EventBasedOn.PAGE:
            var x = ut(),
              R = x.scrollLeft,
              N = x.scrollTop,
              C = x.scrollWidth,
              L = x.scrollHeight;
            O = w ? Math.min(R + y, C) / C : Math.min(N + T, L) / L;
            break;
          case h.EventBasedOn.ELEMENT:
          default:
            A = K(o, s);
            var D = 0 === i.type.indexOf("mouse");
            if (D && !0 !== Z({
                element: n,
                nativeEvent: i
              })) break;
            var P = n.getBoundingClientRect(),
              M = P.left,
              F = P.top,
              j = P.width,
              X = P.height;
            if (!D && ! function (t, e) {
                return t.left > e.left && t.left < e.right && t.top > e.top && t.top < e.bottom
              }({
                left: v,
                top: _
              }, P)) break;
            S = !0, O = w ? (v - M) / j : (_ - F) / X
        }
        return b && (O > .95 || O < .05) && (O = Math.round(O)), (u !== h.EventBasedOn.ELEMENT || S || S !== a.elementHovered) && (O = f ? 1 - O : O, e.dispatch((0, E.parameterChanged)(A, O))), {
          elementHovered: S,
          clientX: v,
          clientY: _,
          pageX: y,
          pageY: T
        }
      }
    }), (0, o.default)(r, W, {
      types: it,
      handler: function (t) {
        var e = t.store,
          n = t.eventConfig,
          r = n.continuousParameterGroupId,
          i = n.reverse,
          o = ut(),
          a = o.scrollTop / (o.scrollHeight - o.clientHeight);
        a = i ? 1 - a : a, e.dispatch((0, E.parameterChanged)(r, a))
      }
    }), (0, o.default)(r, k, {
      types: it,
      handler: function (t) {
        var e = t.element,
          n = t.store,
          r = t.eventConfig,
          i = t.eventStateKey,
          o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            scrollPercent: 0
          },
          a = ut(),
          u = a.scrollLeft,
          c = a.scrollTop,
          s = a.scrollWidth,
          f = a.scrollHeight,
          l = a.clientHeight,
          d = r.basedOn,
          p = r.selectedAxis,
          v = r.continuousParameterGroupId,
          g = r.startsEntering,
          _ = r.startsExiting,
          m = r.addEndOffset,
          y = r.addStartOffset,
          I = r.addOffsetValue,
          T = void 0 === I ? 0 : I,
          w = r.endOffsetValue,
          b = void 0 === w ? 0 : w,
          O = "X_AXIS" === p;
        if (d === h.EventBasedOn.VIEWPORT) {
          var A = O ? u / s : c / f;
          return A !== o.scrollPercent && n.dispatch((0, E.parameterChanged)(v, A)), {
            scrollPercent: A
          }
        }
        var S = K(i, v),
          x = e.getBoundingClientRect(),
          R = (y ? T : 0) / 100,
          N = (m ? b : 0) / 100;
        R = g ? R : 1 - R, N = _ ? N : 1 - N;
        var C = x.top + Math.min(x.height * R, l),
          L = x.top + x.height * N - C,
          D = Math.min(l + L, f),
          P = Math.min(Math.max(0, l - C), D) / D;
        return P !== o.scrollPercent && n.dispatch((0, E.parameterChanged)(S, P)), {
          scrollPercent: P
        }
      }
    }), (0, o.default)(r, F, gt), (0, o.default)(r, j, gt), (0, o.default)(r, M, (0, l.default)({}, ot, {
      handler: dt(function (t, e) {
        e.scrollingDown && tt(t)
      })
    })), (0, o.default)(r, X, (0, l.default)({}, ot, {
      handler: dt(function (t, e) {
        e.scrollingDown || tt(t)
      })
    })), (0, o.default)(r, G, {
      types: "readystatechange IX2_PAGE_UPDATE",
      handler: et(q, function (t) {
        return function (e, n) {
          var r = {
            finished: "complete" === document.readyState
          };
          return !r.finished || n && n.finshed || t(e), r
        }
      }(tt))
    }), (0, o.default)(r, B, {
      types: "readystatechange IX2_PAGE_UPDATE",
      handler: et(q, function (t) {
        return function (e, n) {
          return n || t(e), {
            started: !0
          }
        }
      }(tt))
    }), r);
  e.default = Et
}, function (t, e, n) {
  var r = n(240)();
  t.exports = r
}, function (t, e, n) {
  var r = n(51),
    i = n(241),
    o = n(97),
    a = n(98),
    u = n(1),
    c = n(254),
    s = "Expected a function",
    f = 8,
    l = 32,
    d = 128,
    p = 256;
  t.exports = function (t) {
    return i(function (e) {
      var n = e.length,
        i = n,
        v = r.prototype.thru;
      for (t && e.reverse(); i--;) {
        var h = e[i];
        if ("function" != typeof h) throw new TypeError(s);
        if (v && !g && "wrapper" == a(h)) var g = new r([], !0)
      }
      for (i = g ? i : n; ++i < n;) {
        h = e[i];
        var E = a(h),
          _ = "wrapper" == E ? o(h) : void 0;
        g = _ && c(_[0]) && _[1] == (d | f | l | p) && !_[4].length && 1 == _[9] ? g[a(_[0])].apply(g, _[3]) : 1 == h.length && c(h) ? g[E]() : g.thru(h)
      }
      return function () {
        var t = arguments,
          r = t[0];
        if (g && 1 == t.length && u(r)) return g.plant(r).value();
        for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n;) o = e[i].call(this, o);
        return o
      }
    })
  }
}, function (t, e, n) {
  var r = n(242),
    i = n(245),
    o = n(247);
  t.exports = function (t) {
    return o(i(t, void 0, r), t + "")
  }
}, function (t, e, n) {
  var r = n(243);
  t.exports = function (t) {
    return null != t && t.length ? r(t, 1) : []
  }
}, function (t, e, n) {
  var r = n(37),
    i = n(244);
  t.exports = function t(e, n, o, a, u) {
    var c = -1,
      s = e.length;
    for (o || (o = i), u || (u = []); ++c < s;) {
      var f = e[c];
      n > 0 && o(f) ? n > 1 ? t(f, n - 1, o, a, u) : r(u, f) : a || (u[u.length] = f)
    }
    return u
  }
}, function (t, e, n) {
  var r = n(14),
    i = n(24),
    o = n(1),
    a = r ? r.isConcatSpreadable : void 0;
  t.exports = function (t) {
    return o(t) || i(t) || !!(a && t && t[a])
  }
}, function (t, e, n) {
  var r = n(246),
    i = Math.max;
  t.exports = function (t, e, n) {
    return e = i(void 0 === e ? t.length - 1 : e, 0),
      function () {
        for (var o = arguments, a = -1, u = i(o.length - e, 0), c = Array(u); ++a < u;) c[a] = o[e + a];
        a = -1;
        for (var s = Array(e + 1); ++a < e;) s[a] = o[a];
        return s[e] = n(c), r(t, this, s)
      }
  }
}, function (t, e) {
  t.exports = function (t, e, n) {
    switch (n.length) {
      case 0:
        return t.call(e);
      case 1:
        return t.call(e, n[0]);
      case 2:
        return t.call(e, n[0], n[1]);
      case 3:
        return t.call(e, n[0], n[1], n[2])
    }
    return t.apply(e, n)
  }
}, function (t, e, n) {
  var r = n(248),
    i = n(250)(r);
  t.exports = i
}, function (t, e, n) {
  var r = n(249),
    i = n(94),
    o = n(47),
    a = i ? function (t, e) {
      return i(t, "toString", {
        configurable: !0,
        enumerable: !1,
        value: r(e),
        writable: !0
      })
    } : o;
  t.exports = a
}, function (t, e) {
  t.exports = function (t) {
    return function () {
      return t
    }
  }
}, function (t, e) {
  var n = 800,
    r = 16,
    i = Date.now;
  t.exports = function (t) {
    var e = 0,
      o = 0;
    return function () {
      var a = i(),
        u = r - (a - o);
      if (o = a, u > 0) {
        if (++e >= n) return arguments[0]
      } else e = 0;
      return t.apply(void 0, arguments)
    }
  }
}, function (t, e, n) {
  var r = n(76),
    i = r && new r;
  t.exports = i
}, function (t, e) {
  t.exports = function () {}
}, function (t, e) {
  t.exports = {}
}, function (t, e, n) {
  var r = n(53),
    i = n(97),
    o = n(98),
    a = n(255);
  t.exports = function (t) {
    var e = o(t),
      n = a[e];
    if ("function" != typeof n || !(e in r.prototype)) return !1;
    if (t === n) return !0;
    var u = i(n);
    return !!u && t === u[0]
  }
}, function (t, e, n) {
  var r = n(53),
    i = n(51),
    o = n(52),
    a = n(1),
    u = n(8),
    c = n(256),
    s = Object.prototype.hasOwnProperty;

  function f(t) {
    if (u(t) && !a(t) && !(t instanceof r)) {
      if (t instanceof i) return t;
      if (s.call(t, "__wrapped__")) return c(t)
    }
    return new i(t)
  }
  f.prototype = o.prototype, f.prototype.constructor = f, t.exports = f
}, function (t, e, n) {
  var r = n(53),
    i = n(51),
    o = n(257);
  t.exports = function (t) {
    if (t instanceof r) return t.clone();
    var e = new i(t.__wrapped__, t.__chain__);
    return e.__actions__ = o(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
  }
}, function (t, e) {
  t.exports = function (t, e) {
    var n = -1,
      r = t.length;
    for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
    return e
  }
}, function (t, e, n) {
  var r = n(95),
    i = n(49);
  t.exports = function (t, e, n) {
    return void 0 === n && (n = e, e = void 0), void 0 !== n && (n = (n = i(n)) == n ? n : 0), void 0 !== e && (e = (e = i(e)) == e ? e : 0), r(i(t), e, n)
  }
}, function (t, e, n) {
  "use strict";
  var r = n(3);
  r.define("links", t.exports = function (t, e) {
    var n, i, o, a = {},
      u = t(window),
      c = r.env(),
      s = window.location,
      f = document.createElement("a"),
      l = "w--current",
      d = /index\.(html|php)$/,
      p = /\/$/;

    function v(e) {
      var r = n && e.getAttribute("href-disabled") || e.getAttribute("href");
      if (f.href = r, !(r.indexOf(":") >= 0)) {
        var a = t(e);
        if (f.hash.length > 1 && f.host + f.pathname === s.host + s.pathname) {
          if (!/^#[a-zA-Z0-9\-\_]+$/.test(f.hash)) return;
          var u = t(f.hash);
          u.length && i.push({
            link: a,
            sec: u,
            active: !1
          })
        } else if ("#" !== r && "" !== r) {
          var c = f.href === s.href || r === o || d.test(r) && p.test(o);
          g(a, l, c)
        }
      }
    }

    function h() {
      var t = u.scrollTop(),
        n = u.height();
      e.each(i, function (e) {
        var r = e.link,
          i = e.sec,
          o = i.offset().top,
          a = i.outerHeight(),
          u = .5 * n,
          c = i.is(":visible") && o + a - u >= t && o + u <= t + n;
        e.active !== c && (e.active = c, g(r, l, c))
      })
    }

    function g(t, e, n) {
      var r = t.hasClass(e);
      n && r || (n || r) && (n ? t.addClass(e) : t.removeClass(e))
    }
    return a.ready = a.design = a.preview = function () {
      n = c && r.env("design"), o = r.env("slug") || s.pathname || "", r.scroll.off(h), i = [];
      for (var t = document.links, e = 0; e < t.length; ++e) v(t[e]);
      i.length && (r.scroll.on(h), h())
    }, a
  })
}, function (t, e, n) {
  "use strict";
  var r = n(3);
  r.define("scroll", t.exports = function (t) {
    var e, n = t(document),
      i = window,
      o = i.location,
      a = function () {
        try {
          return Boolean(i.frameElement)
        } catch (t) {
          return !0
        }
      }() ? null : i.history,
      u = /^[a-zA-Z0-9][\w:.-]*$/,
      c = 'a[href="#"]',
      s = 'a[href*="#"]:not(.w-tab-link):not(' + c + ")";

    function f(n) {
      if (!(r.env("design") || window.$.mobile && t(n.currentTarget).hasClass("ui-link"))) {
        var c = this.href.split("#"),
          s = c[0] === e ? c[1] : null;
        s && function (e, n) {
          if (!u.test(e)) return;
          var c = t("#" + e);
          if (!c.length) return;
          n && (n.preventDefault(), n.stopPropagation());
          if (o.hash !== e && a && a.pushState && (!r.env.chrome || "file:" !== o.protocol)) {
            var s = a.state && a.state.hash;
            s !== e && a.pushState({
              hash: e
            }, "", "#" + e)
          }
          var f = r.env("editor") ? ".w-editor-body" : "body",
            l = t("header, " + f + " > .header, " + f + " > .w-nav:not([data-no-scroll])"),
            d = "fixed" === l.css("position") ? l.outerHeight() : 0;
          i.setTimeout(function () {
            ! function (e, n) {
              var r = t(i).scrollTop(),
                o = e.offset().top - n;
              if ("mid" === e.data("scroll")) {
                var a = t(i).height() - n,
                  u = e.outerHeight();
                u < a && (o -= Math.round((a - u) / 2))
              }
              var c = 1;
              t("body").add(e).each(function () {
                var e = parseFloat(t(this).attr("data-scroll-time"), 10);
                !isNaN(e) && (0 === e || e > 0) && (c = e)
              }), Date.now || (Date.now = function () {
                return (new Date).getTime()
              });
              var s = Date.now(),
                f = i.requestAnimationFrame || i.mozRequestAnimationFrame || i.webkitRequestAnimationFrame || function (t) {
                  i.setTimeout(t, 15)
                },
                l = (472.143 * Math.log(Math.abs(r - o) + 125) - 2e3) * c;
              ! function t() {
                var e = Date.now() - s;
                i.scroll(0, function (t, e, n, r) {
                  if (n > r) return e;
                  return t + (e - t) * (i = n / r, i < .5 ? 4 * i * i * i : (i - 1) * (2 * i - 2) * (2 * i - 2) + 1);
                  var i
                }(r, o, e, l)), e <= l && f(t)
              }()
            }(c, d)
          }, n ? 0 : 300)
        }(s, n)
      }
    }
    return {
      ready: function () {
        e = o.href.split("#")[0], n.on("click", s, f), n.on("click", c, function (t) {
          t.preventDefault()
        })
      }
    }
  })
}, function (t, e, n) {
  "use strict";
  n(3).define("touch", t.exports = function (t) {
    var e = {},
      n = window.getSelection;

    function r(e) {
      var r, i, o = !1,
        a = !1,
        u = Math.min(Math.round(.04 * window.innerWidth), 40);

      function c(t) {
        var e = t.touches;
        e && e.length > 1 || (o = !0, e ? (a = !0, r = e[0].clientX) : r = t.clientX, i = r)
      }

      function s(e) {
        if (o) {
          if (a && "mousemove" === e.type) return e.preventDefault(), void e.stopPropagation();
          var r = e.touches,
            c = r ? r[0].clientX : e.clientX,
            s = c - i;
          i = c, Math.abs(s) > u && n && "" === String(n()) && (! function (e, n, r) {
            var i = t.Event(e, {
              originalEvent: n
            });
            t(n.target).trigger(i, r)
          }("swipe", e, {
            direction: s > 0 ? "right" : "left"
          }), l())
        }
      }

      function f(t) {
        if (o) return o = !1, a && "mouseup" === t.type ? (t.preventDefault(), t.stopPropagation(), void(a = !1)) : void 0
      }

      function l() {
        o = !1
      }
      e.addEventListener("touchstart", c, !1), e.addEventListener("touchmove", s, !1), e.addEventListener("touchend", f, !1), e.addEventListener("touchcancel", l, !1), e.addEventListener("mousedown", c, !1), e.addEventListener("mousemove", s, !1), e.addEventListener("mouseup", f, !1), e.addEventListener("mouseout", l, !1), this.destroy = function () {
        e.removeEventListener("touchstart", c, !1), e.removeEventListener("touchmove", s, !1), e.removeEventListener("touchend", f, !1), e.removeEventListener("touchcancel", l, !1), e.removeEventListener("mousedown", c, !1), e.removeEventListener("mousemove", s, !1), e.removeEventListener("mouseup", f, !1), e.removeEventListener("mouseout", l, !1), e = null
      }
    }
    return t.event.special.tap = {
      bindType: "click",
      delegateType: "click"
    }, e.init = function (e) {
      return (e = "string" == typeof e ? t(e).get(0) : e) ? new r(e) : null
    }, e.instance = e.init(document), e
  })
}, function (t, e, n) {
  "use strict";
  var r = n(0)(n(263)),
    i = n(3);
  i.define("forms", t.exports = function (t, e) {
    var n, o, a, u, c, s = {},
      f = t(document),
      l = window.location,
      d = window.XDomainRequest && !window.atob,
      p = ".w-form",
      v = /e(-)?mail/i,
      h = /^\S+@\S+$/,
      g = window.alert,
      E = i.env(),
      _ = /list-manage[1-9]?.com/i,
      m = e.debounce(function () {
        g("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
      }, 100);

    function y(e, n) {
      var r = t(n),
        i = t.data(n, p);
      i || (i = t.data(n, p, {
        form: r
      })), I(i);
      var a = r.closest("div.w-form");
      i.done = a.find("> .w-form-done"), i.fail = a.find("> .w-form-fail"), i.fileUploads = a.find(".w-file-upload"), i.fileUploads.each(function (e) {
        ! function (e, n) {
          if (!n.fileUploads || !n.fileUploads[e]) return;
          var r, i = t(n.fileUploads[e]),
            o = i.find("> .w-file-upload-default"),
            a = i.find("> .w-file-upload-uploading"),
            u = i.find("> .w-file-upload-success"),
            s = i.find("> .w-file-upload-error"),
            f = o.find(".w-file-upload-input"),
            l = o.find(".w-file-upload-label"),
            d = l.children(),
            p = s.find(".w-file-upload-error-msg"),
            v = u.find(".w-file-upload-file"),
            h = u.find(".w-file-remove-link"),
            g = v.find(".w-file-upload-file-name"),
            _ = p.attr("data-w-size-error"),
            m = p.attr("data-w-type-error"),
            y = p.attr("data-w-generic-error");
          if (E) f.on("click", function (t) {
            t.preventDefault()
          }), l.on("click", function (t) {
            t.preventDefault()
          }), d.on("click", function (t) {
            t.preventDefault()
          });
          else {
            h.on("click", function () {
              f.removeAttr("data-value"), f.val(""), g.html(""), o.toggle(!0), u.toggle(!1)
            }), f.on("change", function (i) {
              (r = i.target && i.target.files && i.target.files[0]) && (o.toggle(!1), s.toggle(!1), a.toggle(!0), g.text(r.name), S() || T(n), n.fileUploads[e].uploading = !0, function (e, n) {
                var r = {
                  name: e.name,
                  size: e.size
                };
                t.ajax({
                  type: "POST",
                  url: c,
                  data: r,
                  dataType: "json",
                  crossDomain: !0
                }).done(function (t) {
                  n(null, t)
                }).fail(function (t) {
                  n(t)
                })
              }(r, O))
            });
            var w = l.outerHeight();
            f.height(w), f.width(1)
          }

          function b(t) {
            var r = t.responseJSON && t.responseJSON.msg,
              i = y;
            "string" == typeof r && 0 === r.indexOf("InvalidFileTypeError") ? i = m : "string" == typeof r && 0 === r.indexOf("MaxFileSizeError") && (i = _), p.text(i), f.removeAttr("data-value"), f.val(""), a.toggle(!1), o.toggle(!0), s.toggle(!0), n.fileUploads[e].uploading = !1, S() || I(n)
          }

          function O(e, n) {
            if (e) return b(e);
            var i = n.fileName,
              o = n.postData,
              a = n.fileId,
              u = n.s3Url;
            f.attr("data-value", a),
              function (e, n, r, i, o) {
                var a = new FormData;
                for (var u in n) a.append(u, n[u]);
                a.append("file", r, i), t.ajax({
                  type: "POST",
                  url: e,
                  data: a,
                  processData: !1,
                  contentType: !1
                }).done(function () {
                  o(null)
                }).fail(function (t) {
                  o(t)
                })
              }(u, o, r, i, A)
          }

          function A(t) {
            if (t) return b(t);
            a.toggle(!1), u.css("display", "inline-block"), n.fileUploads[e].uploading = !1, S() || I(n)
          }

          function S() {
            var t = n.fileUploads && n.fileUploads.toArray() || [];
            return t.some(function (t) {
              return t.uploading
            })
          }
        }(e, i)
      });
      var u = i.action = r.attr("action");
      i.handler = null, i.redirect = r.attr("data-redirect"), _.test(u) ? i.handler = O : u || (o ? i.handler = "function" == typeof hostedSubmitWebflow ? hostedSubmitWebflow : b : m())
    }

    function I(t) {
      var e = t.btn = t.form.find(':input[type="submit"]');
      t.wait = t.btn.attr("data-wait") || null, t.success = !1, e.prop("disabled", !1), t.label && e.val(t.label)
    }

    function T(t) {
      var e = t.btn,
        n = t.wait;
      e.prop("disabled", !0), n && (t.label = e.val(), e.val(n))
    }

    function w(e, n) {
      var r = null;
      return n = n || {}, e.find(':input:not([type="submit"]):not([type="file"])').each(function (i, o) {
        var a = t(o),
          u = a.attr("type"),
          c = a.attr("data-name") || a.attr("name") || "Field " + (i + 1),
          s = a.val();
        if ("checkbox" === u) s = a.is(":checked");
        else if ("radio" === u) {
          if (null === n[c] || "string" == typeof n[c]) return;
          s = e.find('input[name="' + a.attr("name") + '"]:checked').val() || null
        }
        "string" == typeof s && (s = t.trim(s)), n[c] = s, r = r || function (t, e, n, r) {
          var i = null;
          "password" === e ? i = "Passwords cannot be submitted." : t.attr("required") ? r ? v.test(t.attr("type")) && (h.test(r) || (i = "Please enter a valid email address for: " + n)) : i = "Please fill out the required field: " + n : "g-recaptcha-response" !== n || r || (i = "Please confirm you’re not a robot.");
          return i
        }(a, u, c, s)
      }), r
    }

    function b(t) {
      S(t), A(t)
    }

    function O(n) {
      I(n);
      var r = n.form,
        i = {};
      if (!/^https/.test(l.href) || /^https/.test(n.action)) {
        S(n);
        var o, a = w(r, i);
        if (a) return g(a);
        T(n), e.each(i, function (t, e) {
          v.test(e) && (i.EMAIL = t), /^((full[ _-]?)?name)$/i.test(e) && (o = t), /^(first[ _-]?name)$/i.test(e) && (i.FNAME = t), /^(last[ _-]?name)$/i.test(e) && (i.LNAME = t)
        }), o && !i.FNAME && (o = o.split(" "), i.FNAME = o[0], i.LNAME = i.LNAME || o[1]);
        var u = n.action.replace("/post?", "/post-json?") + "&c=?",
          c = u.indexOf("u=") + 2;
        c = u.substring(c, u.indexOf("&", c));
        var s = u.indexOf("id=") + 3;
        s = u.substring(s, u.indexOf("&", s)), i["b_" + c + "_" + s] = "", t.ajax({
          url: u,
          data: i,
          dataType: "jsonp"
        }).done(function (t) {
          n.success = "success" === t.result || /already/.test(t.msg), n.success || console.info("MailChimp error: " + t.msg), A(n)
        }).fail(function () {
          A(n)
        })
      } else r.attr("method", "post")
    }

    function A(t) {
      var e = t.form,
        n = t.redirect,
        r = t.success;
      r && n ? i.location(n) : (t.done.toggle(r), t.fail.toggle(!r), e.toggle(!r), I(t))
    }

    function S(t) {
      t.evt && t.evt.preventDefault(), t.evt = null
    }
    return s.ready = s.design = s.preview = function () {
      ! function () {
        o = t("html").attr("data-wf-site"), u = "https://webflow.com/api/v1/form/" + o, d && u.indexOf("https://webflow.com") >= 0 && (u = u.replace("https://webflow.com", "http://formdata.webflow.com"));
        if (c = "".concat(u, "/signFile"), !(n = t(p + " form")).length) return;
        n.each(y)
      }(), E || a || function () {
        a = !0, f.on("submit", p + " form", function (e) {
          var n = t.data(this, p);
          n.handler && (n.evt = e, n.handler(n))
        });
        var e = [
          ["checkbox", ".w-checkbox-input"],
          ["radio", ".w-radio-input"]
        ];
        f.on("change", p + ' form input[type="checkbox"]:not(.w-checkbox-input)', function (e) {
          t(e.target).siblings(".w-checkbox-input").toggleClass("w--redirected-checked")
        }), f.on("change", p + ' form input[type="radio"]', function (e) {
          t('input[name="'.concat(e.target.name, '"]:not(').concat(".w-checkbox-input", ")")).map(function (e, n) {
            return t(n).siblings(".w-radio-input").removeClass("w--redirected-checked")
          });
          var n = t(e.target);
          n.hasClass("w-radio-input") || n.siblings(".w-radio-input").addClass("w--redirected-checked")
        }), e.forEach(function (e) {
          var n = (0, r.default)(e, 2),
            i = n[0],
            o = n[1];
          f.on("focus", p + ' form input[type="'.concat(i, '"]:not(') + o + ")", function (e) {
            t(e.target).siblings(o).addClass("w--redirected-focus")
          }), f.on("blur", p + ' form input[type="'.concat(i, '"]:not(') + o + ")", function (e) {
            t(e.target).siblings(o).removeClass("w--redirected-focus")
          })
        })
      }()
    }, s
  })
}, function (t, e, n) {
  var r = n(264),
    i = n(265),
    o = n(266);
  t.exports = function (t, e) {
    return r(t) || i(t, e) || o()
  }
}, function (t, e) {
  t.exports = function (t) {
    if (Array.isArray(t)) return t
  }
}, function (t, e) {
  t.exports = function (t, e) {
    var n = [],
      r = !0,
      i = !1,
      o = void 0;
    try {
      for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
    } catch (t) {
      i = !0, o = t
    } finally {
      try {
        r || null == u.return || u.return()
      } finally {
        if (i) throw o
      }
    }
    return n
  }
}, function (t, e) {
  t.exports = function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance")
  }
}, function (t, e, n) {
  "use strict";
  var r = n(3),
    i = "w-condition-invisible",
    o = "." + i;

  function a(t) {
    return Boolean(t.$el && t.$el.closest(o).length)
  }

  function u(t, e) {
    for (var n = t; n >= 0; n--)
      if (!a(e[n])) return n;
    return -1
  }

  function c(t, e) {
    for (var n = t; n <= e.length - 1; n++)
      if (!a(e[n])) return n;
    return -1
  }

  function s(t, e, n, r) {
    var o, s, f, l = n.tram,
      d = Array.isArray,
      p = "w-lightbox-",
      v = /(^|\s+)/g,
      h = [];

    function g(t, e) {
      return h = d(t) ? t : [t], s || g.build(),
        function (t) {
          return t.filter(function (t) {
            return !a(t)
          })
        }(h).length > 1 && (s.items = s.empty, h.forEach(function (t) {
          var e = P("thumbnail"),
            n = P("item").append(e);
          a(t) && n.addClass(i), s.items = s.items.add(n), S(t.thumbnailUrl || t.url, function (t) {
            t.prop("width") > t.prop("height") ? C(t, "wide") : C(t, "tall"), e.append(C(t, "thumbnail-image"))
          })
        }), s.strip.empty().append(s.items), C(s.content, "group")), l(L(s.lightbox, "hide").trigger("focus")).add("opacity .3s").start({
          opacity: 1
        }), C(s.html, "noscroll"), g.show(e || 0)
    }

    function E(t) {
      return function (e) {
        this === e.target && (e.stopPropagation(), e.preventDefault(), t())
      }
    }
    g.build = function () {
      return g.destroy(), (s = {
        html: n(e.documentElement),
        empty: n()
      }).arrowLeft = P("control left inactive"), s.arrowRight = P("control right inactive"), s.close = P("control close"), s.spinner = P("spinner"), s.strip = P("strip"), f = new x(s.spinner, R("hide")), s.content = P("content").append(s.spinner, s.arrowLeft, s.arrowRight, s.close), s.container = P("container").append(s.content, s.strip), s.lightbox = P("backdrop hide").append(s.container), s.strip.on("click", N("item"), I), s.content.on("swipe", T).on("click", N("left"), _).on("click", N("right"), m).on("click", N("close"), y).on("click", N("image, caption"), m), s.container.on("click", N("view"), y).on("dragstart", N("img"), b), s.lightbox.on("keydown", O).on("focusin", w), n(r).append(s.lightbox.prop("tabIndex", 0)), g
    }, g.destroy = function () {
      s && (L(s.html, "noscroll"), s.lightbox.remove(), s = void 0)
    }, g.show = function (t) {
      if (t !== o) {
        var e = h[t];
        if (!e) return g.hide();
        if (a(e)) {
          if (t < o) {
            var r = u(t - 1, h);
            t = r > -1 ? r : t
          } else {
            var i = c(t + 1, h);
            t = i > -1 ? i : t
          }
          e = h[t]
        }
        var d, p, v = o;
        return o = t, f.show(), S(e.html && (d = e.width, p = e.height, "data:image/svg+xml;charset=utf-8," + encodeURI('<svg xmlns="http://www.w3.org/2000/svg" width="' + d + '" height="' + p + '"/>')) || e.url, function (r) {
          if (t === o) {
            var i, a, d = P("figure", "figure").append(C(r, "image")),
              p = P("frame").append(d),
              g = P("view").append(p);
            e.html && ((a = (i = n(e.html)).is("iframe")) && i.on("load", E), d.append(C(i, "embed"))), e.caption && d.append(P("caption", "figcaption").text(e.caption)), s.spinner.before(g), a || E()
          }

          function E() {
            var e;
            if (f.hide(), t === o) {
              if (D(s.arrowLeft, "inactive", function (t, e) {
                  return -1 === u(t - 1, e)
                }(t, h)), D(s.arrowRight, "inactive", function (t, e) {
                  return -1 === c(t + 1, e)
                }(t, h)), s.view ? (l(s.view).add("opacity .3s").start({
                  opacity: 0
                }).then((e = s.view, function () {
                  e.remove()
                })), l(g).add("opacity .3s").add("transform .3s").set({
                  x: t > v ? "80px" : "-80px"
                }).start({
                  opacity: 1,
                  x: 0
                })) : g.css("opacity", 1), s.view = g, s.items) {
                L(s.items, "active");
                var n = s.items.eq(t);
                C(n, "active"),
                  function (t) {
                    var e, n = t.get(0),
                      r = s.strip.get(0),
                      i = n.offsetLeft,
                      o = n.clientWidth,
                      a = r.scrollLeft,
                      u = r.clientWidth,
                      c = r.scrollWidth - u;
                    i < a ? e = Math.max(0, i + o - u) : i + o > u + a && (e = Math.min(i, c));
                    null != e && l(s.strip).add("scroll-left 500ms").start({
                      "scroll-left": e
                    })
                  }(n)
              }
            } else g.remove()
          }
        }), g
      }
    }, g.hide = function () {
      return l(s.lightbox).add("opacity .3s").start({
        opacity: 0
      }).then(A), g
    }, g.prev = function () {
      var t = u(o - 1, h);
      t > -1 && g.show(t)
    }, g.next = function () {
      var t = c(o + 1, h);
      t > -1 && g.show(t)
    };
    var _ = E(g.prev),
      m = E(g.next),
      y = E(g.hide),
      I = function (t) {
        var e = n(this).index();
        t.preventDefault(), g.show(e)
      },
      T = function (t, e) {
        t.preventDefault(), "left" === e.direction ? g.next() : "right" === e.direction && g.prev()
      },
      w = function () {
        this.focus()
      };

    function b(t) {
      t.preventDefault()
    }

    function O(t) {
      var e = t.keyCode;
      27 === e ? g.hide() : 37 === e ? g.prev() : 39 === e && g.next()
    }

    function A() {
      s && (s.strip.scrollLeft(0).empty(), L(s.html, "noscroll"), C(s.lightbox, "hide"), s.view && s.view.remove(), L(s.content, "group"), C(s.arrowLeft, "inactive"), C(s.arrowRight, "inactive"), o = s.view = void 0)
    }

    function S(t, e) {
      var n = P("img", "img");
      return n.one("load", function () {
        e(n)
      }), n.attr("src", t), n
    }

    function x(t, e, n) {
      this.$element = t, this.className = e, this.delay = n || 200, this.hide()
    }

    function R(t, e) {
      return t.replace(v, (e ? " ." : " ") + p)
    }

    function N(t) {
      return R(t, !0)
    }

    function C(t, e) {
      return t.addClass(R(e))
    }

    function L(t, e) {
      return t.removeClass(R(e))
    }

    function D(t, e, n) {
      return t.toggleClass(R(e), n)
    }

    function P(t, r) {
      return C(n(e.createElement(r || "div")), t)
    }
    return x.prototype.show = function () {
        var t = this;
        t.timeoutId || (t.timeoutId = setTimeout(function () {
          t.$element.removeClass(t.className), delete t.timeoutId
        }, t.delay))
      }, x.prototype.hide = function () {
        if (this.timeoutId) return clearTimeout(this.timeoutId), void delete this.timeoutId;
        this.$element.addClass(this.className)
      },
      function () {
        var n = t.navigator.userAgent,
          r = n.match(/(iPhone|iPad|iPod);[^OS]*OS (\d)/);
        if (n.indexOf("Android ") > -1 && -1 === n.indexOf("Chrome") || r && !(r[2] > 7)) {
          var i = e.createElement("style");
          e.head.appendChild(i), t.addEventListener("resize", o, !0), o()
        }

        function o() {
          var e = t.innerHeight,
            n = t.innerWidth,
            r = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + e + "px}.w-lightbox-view {width:" + n + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .86 * e + "px}.w-lightbox-image {max-width:" + n + "px;max-height:" + e + "px}.w-lightbox-group .w-lightbox-image {max-height:" + .86 * e + "px}.w-lightbox-strip {padding: 0 " + .01 * e + "px}.w-lightbox-item {width:" + .1 * e + "px;padding:" + .02 * e + "px " + .01 * e + "px}.w-lightbox-thumbnail {height:" + .1 * e + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + .96 * e + "px}.w-lightbox-content {margin-top:" + .02 * e + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .84 * e + "px}.w-lightbox-image {max-width:" + .96 * n + "px;max-height:" + .96 * e + "px}.w-lightbox-group .w-lightbox-image {max-width:" + .823 * n + "px;max-height:" + .84 * e + "px}}";
          i.textContent = r
        }
      }(), g
  }
  r.define("lightbox", t.exports = function (t) {
    var e, n, i = {},
      o = r.env(),
      a = s(window, document, t, o ? "#lightbox-mountpoint" : "body"),
      u = t(document),
      c = ".w-lightbox";

    function f(t) {
      var e, r, i = t.el.children(".w-json").html();
      if (i) {
        try {
          i = JSON.parse(i)
        } catch (t) {
          console.error("Malformed lightbox JSON configuration.", t)
        }! function (t) {
          t.images && (t.images.forEach(function (t) {
            t.type = "image"
          }), t.items = t.images);
          t.embed && (t.embed.type = "video", t.items = [t.embed]);
          t.groupId && (t.group = t.groupId)
        }(i), i.items.forEach(function (e) {
          e.$el = t.el
        }), (e = i.group) ? ((r = n[e]) || (r = n[e] = []), t.items = r, i.items.length && (t.index = r.length, r.push.apply(r, i.items))) : (t.items = i.items, t.index = 0)
      } else t.items = []
    }
    return i.ready = i.design = i.preview = function () {
      e = o && r.env("design"), a.destroy(), n = {}, u.find(c).webflowLightBox()
    }, jQuery.fn.extend({
      webflowLightBox: function () {
        t.each(this, function (n, r) {
          var i = t.data(r, c);
          i || (i = t.data(r, c, {
            el: t(r),
            mode: "images",
            images: [],
            embed: ""
          })), i.el.off(c), f(i), e ? i.el.on("setting" + c, f.bind(null, i)) : i.el.on("click" + c, function (t) {
            return function () {
              t.items.length && a(t.items, t.index || 0)
            }
          }(i)).on("click" + c, function (t) {
            t.preventDefault()
          })
        })
      }
    }), i
  })
}, function (t, e, n) {
  "use strict";
  var r = n(3),
    i = n(29);
  r.define("navbar", t.exports = function (t, e) {
    var n, o, a, u, c = {},
      s = t.tram,
      f = t(window),
      l = t(document),
      d = r.env(),
      p = '<div class="w-nav-overlay" data-wf-ignore />',
      v = ".w-nav",
      h = "w--open",
      g = "w--nav-dropdown-open",
      E = "w--nav-dropdown-toggle-open",
      _ = "w--nav-dropdown-list-open",
      m = "w--nav-link-open",
      y = i.triggers,
      I = t();

    function T() {
      r.resize.off(w)
    }

    function w() {
      o.each(N)
    }

    function b(n, i) {
      var o = t(i),
        c = t.data(i, v);
      c || (c = t.data(i, v, {
        open: !1,
        el: o,
        config: {}
      })), c.menu = o.find(".w-nav-menu"), c.links = c.menu.find(".w-nav-link"), c.dropdowns = c.menu.find(".w-dropdown"), c.dropdownToggle = c.menu.find(".w-dropdown-toggle"), c.dropdownList = c.menu.find(".w-dropdown-list"), c.button = o.find(".w-nav-button"), c.container = o.find(".w-container"), c.outside = function (e) {
        e.outside && l.off("click" + v, e.outside);
        return function (n) {
          var r = t(n.target);
          u && r.closest(".w-editor-bem-EditorOverlay").length || R(e, r)
        }
      }(c), c.el.off(v), c.button.off(v), c.menu.off(v), S(c), a ? (A(c), c.el.on("setting" + v, function (t) {
        return function (n, r) {
          r = r || {};
          var i = f.width();
          S(t), !0 === r.open && P(t, !0), !1 === r.open && F(t, !0), t.open && e.defer(function () {
            i !== f.width() && x(t)
          })
        }
      }(c))) : (! function (e) {
        if (e.overlay) return;
        e.overlay = t(p).appendTo(e.el), e.parent = e.menu.parent(), F(e, !0)
      }(c), c.button.on("click" + v, function (t) {
        return e.debounce(function () {
          t.open ? F(t) : P(t)
        })
      }(c)), c.menu.on("click" + v, "a", function (e) {
        return function (n) {
          var i = t(this),
            o = i.attr("href");
          r.validClick(n.currentTarget) ? o && 0 === o.indexOf("#") && e.open && F(e) : n.preventDefault()
        }
      }(c))), N(n, i)
    }

    function O(e, n) {
      var r = t.data(n, v);
      r && (A(r), t.removeData(n, v))
    }

    function A(t) {
      t.overlay && (F(t, !0), t.overlay.remove(), t.overlay = null)
    }

    function S(t) {
      var n = {},
        r = t.config || {},
        i = n.animation = t.el.attr("data-animation") || "default";
      n.animOver = /^over/.test(i), n.animDirect = /left$/.test(i) ? -1 : 1, r.animation !== i && t.open && e.defer(x, t), n.easing = t.el.attr("data-easing") || "ease", n.easing2 = t.el.attr("data-easing2") || "ease";
      var o = t.el.attr("data-duration");
      n.duration = null != o ? Number(o) : 400, n.docHeight = t.el.attr("data-doc-height"), t.config = n
    }

    function x(t) {
      t.open && (F(t, !0), P(t, !0))
    }
    c.ready = c.design = c.preview = function () {
      if (a = d && r.env("design"), u = r.env("editor"), n = t(document.body), !(o = l.find(v)).length) return;
      o.each(b), T(), r.resize.on(w)
    }, c.destroy = function () {
      I = t(), T(), o && o.length && o.each(O)
    };
    var R = e.debounce(function (t, e) {
      if (t.open) {
        var n = e.closest(".w-nav-menu");
        t.menu.is(n) || F(t)
      }
    });

    function N(e, n) {
      var r = t.data(n, v),
        i = r.collapsed = "none" !== r.button.css("display");
      if (!r.open || i || a || F(r, !0), r.container.length) {
        var o = function (e) {
          var n = e.container.css(C);
          "none" === n && (n = "");
          return function (e, r) {
            (r = t(r)).css(C, ""), "none" === r.css(C) && r.css(C, n)
          }
        }(r);
        r.links.each(o), r.dropdowns.each(o)
      }
      r.open && M(r)
    }
    var C = "max-width";

    function L(t, e) {
      e.setAttribute("data-nav-menu-open", "")
    }

    function D(t, e) {
      e.removeAttribute("data-nav-menu-open")
    }

    function P(t, e) {
      if (!t.open) {
        t.open = !0, t.menu.each(L), t.links.addClass(m), t.dropdowns.addClass(g), t.dropdownToggle.addClass(E), t.dropdownList.addClass(_), t.button.addClass(h);
        var n = t.config;
        "none" !== n.animation && s.support.transform || (e = !0);
        var i = M(t),
          o = t.menu.outerHeight(!0),
          u = t.menu.outerWidth(!0),
          c = t.el.height(),
          f = t.el[0];
        if (N(0, f), y.intro(0, f), r.redraw.up(), a || l.on("click" + v, t.outside), !e) {
          var d = "transform " + n.duration + "ms " + n.easing;
          if (t.overlay && (I = t.menu.prev(), t.overlay.show().append(t.menu)), n.animOver) return s(t.menu).add(d).set({
            x: n.animDirect * u,
            height: i
          }).start({
            x: 0
          }), void(t.overlay && t.overlay.width(u));
          var p = c + o;
          s(t.menu).add(d).set({
            y: -p
          }).start({
            y: 0
          })
        }
      }
    }

    function M(t) {
      var e = t.config,
        r = e.docHeight ? l.height() : n.height();
      return e.animOver ? t.menu.height(r) : "fixed" !== t.el.css("position") && (r -= t.el.height()), t.overlay && t.overlay.height(r), r
    }

    function F(t, e) {
      if (t.open) {
        t.open = !1, t.button.removeClass(h);
        var n = t.config;
        if (("none" === n.animation || !s.support.transform || n.duration <= 0) && (e = !0), y.outro(0, t.el[0]), l.off("click" + v, t.outside), e) return s(t.menu).stop(), void c();
        var r = "transform " + n.duration + "ms " + n.easing2,
          i = t.menu.outerHeight(!0),
          o = t.menu.outerWidth(!0),
          a = t.el.height();
        if (n.animOver) s(t.menu).add(r).start({
          x: o * n.animDirect
        }).then(c);
        else {
          var u = a + i;
          s(t.menu).add(r).start({
            y: -u
          }).then(c)
        }
      }

      function c() {
        t.menu.height(""), s(t.menu).set({
          x: 0,
          y: 0
        }), t.menu.each(D), t.links.removeClass(m), t.dropdowns.removeClass(g), t.dropdownToggle.removeClass(E), t.dropdownList.removeClass(_), t.overlay && t.overlay.children().length && (I.length ? t.menu.insertAfter(I) : t.menu.prependTo(t.parent), t.overlay.attr("style", "").hide()), t.el.triggerHandler("w-close")
      }
    }
    return c
  })
}, function (t, e, n) {
  "use strict";
  var r = n(3),
    i = n(29);
  r.define("slider", t.exports = function (t, e) {
    var n, o, a, u, c = {},
      s = t.tram,
      f = t(document),
      l = r.env(),
      d = ".w-slider",
      p = '<div class="w-slider-dot" data-wf-ignore />',
      v = i.triggers;

    function h() {
      (n = f.find(d)).length && (n.each(_), u = null, a || (g(), r.resize.on(E), r.redraw.on(c.redraw)))
    }

    function g() {
      r.resize.off(E), r.redraw.off(c.redraw)
    }

    function E() {
      n.filter(":visible").each(A)
    }

    function _(e, n) {
      var r = t(n),
        i = t.data(n, d);
      if (i || (i = t.data(n, d, {
          index: 0,
          depth: 1,
          el: r,
          config: {}
        })), i.mask = r.children(".w-slider-mask"), i.left = r.children(".w-slider-arrow-left"), i.right = r.children(".w-slider-arrow-right"), i.nav = r.children(".w-slider-nav"), i.slides = i.mask.children(".w-slide"), i.slides.each(v.reset), u && (i.maskWidth = 0), !s.support.transform) return i.left.hide(), i.right.hide(), i.nav.hide(), void(a = !0);
      i.el.off(d), i.left.off(d), i.right.off(d), i.nav.off(d), m(i), o ? (i.el.on("setting" + d, b(i)), w(i), i.hasTimer = !1) : (i.el.on("swipe" + d, b(i)), i.left.on("click" + d, I(i)), i.right.on("click" + d, T(i)), i.config.autoplay && !i.hasTimer && (i.hasTimer = !0, i.timerCount = 1, function t(e) {
        w(e);
        var n = e.config;
        var r = n.timerMax;
        if (r && e.timerCount++ > r) return;
        e.timerId = window.setTimeout(function () {
          null == e.timerId || o || (T(e)(), t(e))
        }, n.delay)
      }(i))), i.nav.on("click" + d, "> div", b(i)), l || i.mask.contents().filter(function () {
        return 3 === this.nodeType
      }).remove();
      var c = r.filter(":hidden");
      c.show();
      var f = r.parents(":hidden");
      f.show(), A(e, n), c.css("display", ""), f.css("display", "")
    }

    function m(t) {
      var e = {
        crossOver: 0
      };
      e.animation = t.el.attr("data-animation") || "slide", "outin" === e.animation && (e.animation = "cross", e.crossOver = .5), e.easing = t.el.attr("data-easing") || "ease";
      var n = t.el.attr("data-duration");
      if (e.duration = null != n ? parseInt(n, 10) : 500, y(t.el.attr("data-infinite")) && (e.infinite = !0), y(t.el.attr("data-disable-swipe")) && (e.disableSwipe = !0), y(t.el.attr("data-hide-arrows")) ? e.hideArrows = !0 : t.config.hideArrows && (t.left.show(), t.right.show()), y(t.el.attr("data-autoplay"))) {
        e.autoplay = !0, e.delay = parseInt(t.el.attr("data-delay"), 10) || 2e3, e.timerMax = parseInt(t.el.attr("data-autoplay-limit"), 10);
        var r = "mousedown" + d + " touchstart" + d;
        o || t.el.off(r).one(r, function () {
          w(t)
        })
      }
      var i = t.right.width();
      e.edge = i ? i + 40 : 100, t.config = e
    }

    function y(t) {
      return "1" === t || "true" === t
    }

    function I(t) {
      return function () {
        O(t, {
          index: t.index - 1,
          vector: -1
        })
      }
    }

    function T(t) {
      return function () {
        O(t, {
          index: t.index + 1,
          vector: 1
        })
      }
    }

    function w(t) {
      window.clearTimeout(t.timerId), t.timerId = null
    }

    function b(n) {
      return function (i, a) {
        a = a || {};
        var u = n.config;
        if (o && "setting" === i.type) {
          if ("prev" === a.select) return I(n)();
          if ("next" === a.select) return T(n)();
          if (m(n), S(n), null == a.select) return;
          ! function (n, r) {
            var i = null;
            r === n.slides.length && (h(), S(n)), e.each(n.anchors, function (e, n) {
              t(e.els).each(function (e, o) {
                t(o).index() === r && (i = n)
              })
            }), null != i && O(n, {
              index: i,
              immediate: !0
            })
          }(n, a.select)
        } else {
          if ("swipe" === i.type) {
            if (u.disableSwipe) return;
            if (r.env("editor")) return;
            return "left" === a.direction ? T(n)() : "right" === a.direction ? I(n)() : void 0
          }
          n.nav.has(i.target).length && O(n, {
            index: t(i.target).index()
          })
        }
      }
    }

    function O(e, n) {
      n = n || {};
      var r = e.config,
        i = e.anchors;
      e.previous = e.index;
      var a = n.index,
        c = {};
      a < 0 ? (a = i.length - 1, r.infinite && (c.x = -e.endX, c.from = 0, c.to = i[0].width)) : a >= i.length && (a = 0, r.infinite && (c.x = i[i.length - 1].width, c.from = -i[i.length - 1].x, c.to = c.from - c.x)), e.index = a;
      var f = e.nav.children().eq(e.index).addClass("w-active");
      e.nav.children().not(f).removeClass("w-active"), r.hideArrows && (e.index === i.length - 1 ? e.right.hide() : e.right.show(), 0 === e.index ? e.left.hide() : e.left.show());
      var l = e.offsetX || 0,
        d = e.offsetX = -i[e.index].x,
        p = {
          x: d,
          opacity: 1,
          visibility: ""
        },
        h = t(i[e.index].els),
        g = t(i[e.previous] && i[e.previous].els),
        E = e.slides.not(h),
        _ = r.animation,
        m = r.easing,
        y = Math.round(r.duration),
        I = n.vector || (e.index > e.previous ? 1 : -1),
        T = "opacity " + y + "ms " + m,
        w = "transform " + y + "ms " + m;
      if (o || (h.each(v.intro), E.each(v.outro)), n.immediate && !u) return s(h).set(p), void A();
      if (e.index !== e.previous) {
        if ("cross" === _) {
          var b = Math.round(y - y * r.crossOver),
            O = Math.round(y - b);
          return T = "opacity " + b + "ms " + m, s(g).set({
            visibility: ""
          }).add(T).start({
            opacity: 0
          }), void s(h).set({
            visibility: "",
            x: d,
            opacity: 0,
            zIndex: e.depth++
          }).add(T).wait(O).then({
            opacity: 1
          }).then(A)
        }
        if ("fade" === _) return s(g).set({
          visibility: ""
        }).stop(), void s(h).set({
          visibility: "",
          x: d,
          opacity: 0,
          zIndex: e.depth++
        }).add(T).start({
          opacity: 1
        }).then(A);
        if ("over" === _) return p = {
          x: e.endX
        }, s(g).set({
          visibility: ""
        }).stop(), void s(h).set({
          visibility: "",
          zIndex: e.depth++,
          x: d + i[e.index].width * I
        }).add(w).start({
          x: d
        }).then(A);
        r.infinite && c.x ? (s(e.slides.not(g)).set({
          visibility: "",
          x: c.x
        }).add(w).start({
          x: d
        }), s(g).set({
          visibility: "",
          x: c.from
        }).add(w).start({
          x: c.to
        }), e.shifted = g) : (r.infinite && e.shifted && (s(e.shifted).set({
          visibility: "",
          x: l
        }), e.shifted = null), s(e.slides).set({
          visibility: ""
        }).add(w).start({
          x: d
        }))
      }

      function A() {
        h = t(i[e.index].els), E = e.slides.not(h), "slide" !== _ && (p.visibility = "hidden"), s(E).set(p)
      }
    }

    function A(e, n) {
      var r = t.data(n, d);
      if (r) return function (t) {
        var e = t.mask.width();
        if (t.maskWidth !== e) return t.maskWidth = e, !0;
        return !1
      }(r) ? S(r) : void(o && function (e) {
        var n = 0;
        if (e.slides.each(function (e, r) {
            n += t(r).outerWidth(!0)
          }), e.slidesWidth !== n) return e.slidesWidth = n, !0;
        return !1
      }(r) && S(r))
    }

    function S(e) {
      var n = 1,
        r = 0,
        i = 0,
        a = 0,
        u = e.maskWidth,
        c = u - e.config.edge;
      c < 0 && (c = 0), e.anchors = [{
        els: [],
        x: 0,
        width: 0
      }], e.slides.each(function (o, s) {
        i - r > c && (n++, r += u, e.anchors[n - 1] = {
          els: [],
          x: i,
          width: 0
        }), a = t(s).outerWidth(!0), i += a, e.anchors[n - 1].width += a, e.anchors[n - 1].els.push(s)
      }), e.endX = i, o && (e.pages = null), e.nav.length && e.pages !== n && (e.pages = n, function (e) {
        var n, r = [],
          i = e.el.attr("data-nav-spacing");
        i && (i = parseFloat(i) + "px");
        for (var o = 0; o < e.pages; o++) n = t(p), e.nav.hasClass("w-num") && n.text(o + 1), null != i && n.css({
          "margin-left": i,
          "margin-right": i
        }), r.push(n);
        e.nav.empty().append(r)
      }(e));
      var s = e.index;
      s >= n && (s = n - 1), O(e, {
        immediate: !0,
        index: s
      })
    }
    return c.ready = function () {
      o = r.env("design"), h()
    }, c.design = function () {
      o = !0, h()
    }, c.preview = function () {
      o = !1, h()
    }, c.redraw = function () {
      u = !0, h()
    }, c.destroy = g, c
  })
}]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions: Init
 */
Webflow.require('ix').init([{
    "slug": "roll-over-fade-1",
    "name": "roll-over-fade 1",
    "value": {
      "style": {
        "opacity": 1
      },
      "triggers": [{
        "type": "hover",
        "selector": ".text-black-1",
        "stepsA": [{
          "opacity": 0,
          "transition": "opacity 211ms ease-out-sine 0"
        }],
        "stepsB": [{
          "opacity": 1,
          "transition": "opacity 211ms ease-in-sine 0"
        }]
      }]
    }
  },
  {
    "slug": "roll-over-fade-2",
    "name": "roll-over-fade 2",
    "value": {
      "style": {
        "opacity": 1
      },
      "triggers": [{
        "type": "hover",
        "selector": ".text-black-2",
        "stepsA": [{
          "opacity": 0,
          "transition": "opacity 211ms ease-out-sine 0"
        }],
        "stepsB": [{
          "opacity": 1,
          "transition": "opacity 211ms ease-in-sine 0"
        }]
      }]
    }
  },
  {
    "slug": "roll-over-fade-3",
    "name": "roll-over-fade 3",
    "value": {
      "style": {
        "opacity": 1
      },
      "triggers": [{
        "type": "hover",
        "selector": ".text-black-3",
        "stepsA": [{
          "opacity": 0,
          "transition": "opacity 211ms ease-out-sine 0"
        }],
        "stepsB": [{
          "opacity": 1,
          "transition": "opacity 211ms ease-in-sine 0"
        }]
      }]
    }
  },
  {
    "slug": "roll-over-fade-4",
    "name": "roll-over-fade 4",
    "value": {
      "style": {
        "opacity": 1
      },
      "triggers": [{
        "type": "hover",
        "selector": ".text-black-4",
        "stepsA": [{
          "opacity": 0,
          "transition": "opacity 211ms ease-out-sine 0"
        }],
        "stepsB": [{
          "opacity": 1,
          "transition": "opacity 211ms ease-in-sine 0"
        }]
      }]
    }
  },
  {
    "slug": "roll-over-fade-5",
    "name": "roll-over-fade 5",
    "value": {
      "style": {
        "opacity": 1
      },
      "triggers": [{
        "type": "hover",
        "selector": ".text-black-5",
        "stepsA": [{
          "opacity": 0,
          "transition": "opacity 211ms ease-out-sine 0"
        }],
        "stepsB": [{
          "opacity": 1,
          "transition": "opacity 211ms ease-in-sine 0"
        }]
      }]
    }
  },
  {
    "slug": "new-interaction",
    "name": "New Interaction",
    "value": {
      "style": {},
      "triggers": [{
        "type": "scroll",
        "selector": ".global-nav-container-z-1",
        "stepsA": [{
          "opacity": 0,
          "transition": "opacity 200 ease 0"
        }],
        "stepsB": [{
          "opacity": 1,
          "transition": "opacity 200 ease 0"
        }]
      }]
    }
  },
  {
    "slug": "new-interaction-2",
    "name": "New Interaction 2",
    "value": {
      "style": {},
      "triggers": [{
        "type": "scroll",
        "selector": ".global-nav-container",
        "stepsA": [{
          "opacity": 1,
          "transition": "opacity 200 ease 0"
        }],
        "stepsB": [{
          "opacity": 0,
          "transition": "opacity 200 ease 0"
        }]
      }]
    }
  },
  /*
   {"slug":"g 1","name":"g 1","value":{"style":{},"triggers":[{"type":"load","selector":".g-text-1","stepsA":[{"opacity":0}],"stepsB":[]},{"type":"hover","selector":".g-text-1","stepsA":[{"opacity":1,"transition":"opacity 66ms ease 0"}],"stepsB":[{"opacity":0,"transition":"opacity 66ms ease 0"}]}]}},
   {"slug":"g 2","name":"g 2","value":{"style":{},"triggers":[{"type":"load","selector":".g-text-2","stepsA":[{"opacity":0}],"stepsB":[]},{"type":"hover","selector":".g-text-2","stepsA":[{"opacity":1,"transition":"opacity 66ms ease 0"}],"stepsB":[{"opacity":0,"transition":"opacity 66ms ease 0"}]}]}},
   {"slug":"g 3","name":"g 3","value":{"style":{},"triggers":[{"type":"load","selector":".g-text-3","stepsA":[{"opacity":0}],"stepsB":[]},{"type":"hover","selector":".g-text-3","stepsA":[{"opacity":1,"transition":"opacity 66ms ease 0"}],"stepsB":[{"opacity":0,"transition":"opacity 66ms ease 0"}]}]}},
   {"slug":"g 4","name":"g 4","value":{"style":{},"triggers":[{"type":"load","selector":".g-text-4","stepsA":[{"opacity":0}],"stepsB":[]},{"type":"hover","selector":".g-text-4","stepsA":[{"opacity":1,"transition":"opacity 66ms ease 0"}],"stepsB":[{"opacity":0,"transition":"opacity 66ms ease 0"}]}]}},
   {"slug":"g5","name":"g5","value":{"style":{},"triggers":[{"type":"load","selector":".g-text-5","stepsA":[{"opacity":0}],"stepsB":[]},{"type":"hover","selector":".g-text-5","stepsA":[{"opacity":1,"transition":"opacity 66ms ease 0"}],"stepsB":[{"opacity":0,"transition":"opacity 66ms ease 0"}]}]}},
   {"slug":"g6","name":"g6","value":{"style":{},"triggers":[{"type":"load","selector":".g-text-6","stepsA":[{"opacity":0}],"stepsB":[]},{"type":"hover","selector":".g-text-6","stepsA":[{"opacity":1,"transition":"opacity 66ms ease 0"}],"stepsB":[{"opacity":0,"transition":"opacity 66ms ease 0"}]}]}},
   {"slug":"g7","name":"g7","value":{"style":{},"triggers":[{"type":"load","selector":".g-text-7","stepsA":[{"opacity":0}],"stepsB":[]},{"type":"hover","selector":".g-text-7","stepsA":[{"opacity":1,"transition":"opacity 66ms ease 0"}],"stepsB":[{"opacity":0,"transition":"opacity 66ms ease 0"}]}]}},
   {"slug":"g7","name":"g7","value":{"style":{},"triggers":[{"type":"load","selector":".g-text-7","stepsA":[{"opacity":0}],"stepsB":[]},{"type":"hover","selector":".g-text-7","stepsA":[{"opacity":1,"transition":"opacity 66ms ease 0"}],"stepsB":[{"opacity":0,"transition":"opacity 66ms ease 0"}]}]}},
   {"slug":"g8","name":"g8","value":{"style":{},"triggers":[{"type":"load","selector":".g-text-8","stepsA":[{"opacity":0}],"stepsB":[]},{"type":"hover","selector":".g-text-8","stepsA":[{"opacity":1,"transition":"opacity 66ms ease 0"}],"stepsB":[{"opacity":0,"transition":"opacity 66ms ease 0"}]}]}},
   {"slug":"g9","name":"g9","value":{"style":{},"triggers":[{"type":"load","selector":".g-text-9","stepsA":[{"opacity":0}],"stepsB":[]},{"type":"hover","selector":".g-text-9","stepsA":[{"opacity":1,"transition":"opacity 66ms ease 0"}],"stepsB":[{"opacity":0,"transition":"opacity 66ms ease 0"}]}]}},
   {"slug":"g10","name":"g10","value":{"style":{},"triggers":[{"type":"load","selector":".g-text-10","stepsA":[{"opacity":0}],"stepsB":[]},{"type":"hover","selector":".g-text-10","stepsA":[{"opacity":1,"transition":"opacity 66ms ease 0"}],"stepsB":[{"opacity":0,"transition":"opacity 66ms ease 0"}]}]}},
   {"slug":"g11","name":"g11","value":{"style":{},"triggers":[{"type":"load","selector":".g-text-11","stepsA":[{"opacity":0}],"stepsB":[]},{"type":"hover","selector":".g-text-11","stepsA":[{"opacity":1,"transition":"opacity 66ms ease 0"}],"stepsB":[{"opacity":0,"transition":"opacity 66ms ease 0"}]}]}},
   {"slug":"g12","name":"g12","value":{"style":{},"triggers":[{"type":"load","selector":".g-text-12","stepsA":[{"opacity":0}],"stepsB":[]},{"type":"hover","selector":".g-text-12","stepsA":[{"opacity":1,"transition":"opacity 66ms ease 0"}],"stepsB":[{"opacity":0,"transition":"opacity 66ms ease 0"}]}]}},
   {"slug":"g13","name":"g13","value":{"style":{},"triggers":[{"type":"load","selector":".g-text-13","stepsA":[{"opacity":0}],"stepsB":[]},{"type":"hover","selector":".g-text-13","stepsA":[{"opacity":1,"transition":"opacity 66ms ease 0"}],"stepsB":[{"opacity":0,"transition":"opacity 66ms ease 0"}]}]}},
   {"slug":"g14","name":"g14","value":{"style":{},"triggers":[{"type":"load","selector":".g-text-14","stepsA":[{"opacity":0}],"stepsB":[]},{"type":"hover","selector":".g-text-14","stepsA":[{"opacity":1,"transition":"opacity 66ms ease 0"}],"stepsB":[{"opacity":0,"transition":"opacity 66ms ease 0"}]}]}}, */
  {
    "slug": "close-modal",
    "name": "close modal",
    "value": {
      "style": {},
      "triggers": [{
        "type": "click",
        "selector": ".modal",
        "preserve3d": true,
        "stepsA": [{
          "display": "none",
          "x": "0px",
          "y": "0px",
          "z": "-100px"
        }],
        "stepsB": []
      }]
    }
  },
  {
    "slug": "close-modal-2",
    "name": "close modal 2",
    "value": {
      "style": {},
      "triggers": [{
        "type": "click",
        "selector": ".modal-2",
        "preserve3d": true,
        "stepsA": [{
          "display": "none",
          "x": "0px",
          "y": "0px",
          "z": "-100px"
        }],
        "stepsB": []
      }]
    }
  },
  {
    "slug": "open-modal",
    "name": "open modal",
    "value": {
      "style": {},
      "triggers": [{
        "type": "click",
        "selector": ".modal",
        "preserve3d": true,
        "stepsA": [{
          "display": "block",
          "transition": "transform 200 ease 0",
          "x": "0px",
          "y": "0px",
          "z": "100px"
        }],
        "stepsB": []
      }]
    }
  },
  {
    "slug": "open-modal-2",
    "name": "open modal 2",
    "value": {
      "style": {},
      "triggers": [{
        "type": "click",
        "selector": ".modal-2",
        "preserve3d": true,
        "stepsA": [{
          "display": "block",
          "transition": "transform 200 ease 0",
          "x": "0px",
          "y": "0px",
          "z": "100px"
        }],
        "stepsB": []
      }]
    }
  },
  {
    "slug": "modal-on-load",
    "name": "modal on load",
    "value": {
      "style": {},
      "triggers": [{
        "type": "load",
        "selector": ".modal",
        "stepsA": [{
          "display": "none"
        }, {}],
        "stepsB": []
      }]
    }
  },
  {
    "slug": "bg-image-visibility-on-sroll-in-out",
    "name": "BG Image Visibility on Sroll in/out",
    "value": {
      "style": {},
      "triggers": [{
        "type": "scroll",
        "selector": ".project-bg",
        "stepsA": [{
          "display": "block"
        }],
        "stepsB": [{
          "display": "none"
        }]
      }]
    }
  },
  {
    "slug": "bg-image-visibility-on-sroll-in-out-2",
    "name": "BG Image Visibility on Sroll in/out 2",
    "value": {
      "style": {},
      "triggers": [{
        "type": "scroll",
        "selector": ".project-bg",
        "stepsA": [{
          "display": "block"
        }],
        "stepsB": [{
          "display": "none"
        }]
      }]
    }
  }
]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
  "events": {
    "e": {
      "id": "e",
      "eventTypeId": "PAGE_SCROLL",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-2",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e2e0eab86f417815727a86f"
      },
      "config": [{
        "continuousParameterGroupId": "a-2-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1574465440408
    },
    "e-2": {
      "id": "e-2",
      "eventTypeId": "PAGE_SCROLL",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-3",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e2e0eab86f417bd6a27a876"
      },
      "config": [{
        "continuousParameterGroupId": "a-3-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1574465739715
    },
    "e-4": {
      "id": "e-4",
      "eventTypeId": "PAGE_FINISH",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-3"
        }
      },
      "mediaQueries": ["main"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e2e0eab86f417815727a86f"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1574468686646
    },
    "e-13": {
      "id": "e-13",
      "eventTypeId": "PAGE_SCROLL",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-7",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e2e0eab86f4176e9f27a87c"
      },
      "config": [{
        "continuousParameterGroupId": "a-7-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1575616006290
    },
    "e-18": {
      "id": "e-18",
      "eventTypeId": "PAGE_SCROLL",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-10",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e2e0eab86f417b13b27a87d"
      },
      "config": [{
        "continuousParameterGroupId": "a-10-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1575869839748
    },
    "e-43": {
      "id": "e-43",
      "eventTypeId": "MOUSE_MOVE",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-14",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e2e0eab86f41772f227a84a"
      },
      "config": [{
        "continuousParameterGroupId": "a-14-p",
        "selectedAxis": "X_AXIS",
        "basedOn": "VIEWPORT",
        "reverse": false,
        "smoothing": 50,
        "restingState": 50
      }, {
        "continuousParameterGroupId": "a-14-p-2",
        "selectedAxis": "Y_AXIS",
        "basedOn": "VIEWPORT",
        "reverse": false,
        "smoothing": 50,
        "restingState": 50
      }],
      "createdOn": 1576643131064
    },
    "e-44": {
      "id": "e-44",
      "eventTypeId": "MOUSE_MOVE",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-15",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e2e0eab86f41772f227a84a"
      },
      "config": [{
        "continuousParameterGroupId": "a-15-p",
        "selectedAxis": "X_AXIS",
        "basedOn": "VIEWPORT",
        "reverse": false,
        "smoothing": 50,
        "restingState": 50
      }, {
        "continuousParameterGroupId": "a-15-p-2",
        "selectedAxis": "Y_AXIS",
        "basedOn": "VIEWPORT",
        "reverse": false,
        "smoothing": 50,
        "restingState": 50
      }],
      "createdOn": 1576643378685
    },
    "e-45": {
      "id": "e-45",
      "eventTypeId": "MOUSE_MOVE",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-16",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e2e0eab86f41772f227a84a"
      },
      "config": [{
        "continuousParameterGroupId": "a-16-p",
        "selectedAxis": "X_AXIS",
        "basedOn": "VIEWPORT",
        "reverse": false,
        "smoothing": 50,
        "restingState": 50
      }, {
        "continuousParameterGroupId": "a-16-p-2",
        "selectedAxis": "Y_AXIS",
        "basedOn": "VIEWPORT",
        "reverse": false,
        "smoothing": 50,
        "restingState": 50
      }],
      "createdOn": 1576643463393
    },
    "e-47": {
      "id": "e-47",
      "eventTypeId": "PAGE_FINISH",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-19",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-46"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e2e0eab86f417698b27a87e"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1576716765248
    },
    "e-49": {
      "id": "e-49",
      "eventTypeId": "PAGE_FINISH",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-48"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e2e0eab86f41772f227a84a"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1576718997555
    },
    "e-51": {
      "id": "e-51",
      "eventTypeId": "PAGE_FINISH",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-20",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-50"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e2e0eab86f417f24027a87f"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1576720743028
    },
    "e-52": {
      "id": "e-52",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "FADE_EFFECT",
        "config": {
          "actionListId": "fadeIn",
          "autoStopEventId": "e-53"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e6aff9a40b2ff47012d18fb|7ad0793d-320c-38b4-944e-23749d3d4351"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": null,
        "effectIn": true
      },
      "createdOn": 1576729354064
    },
    "e-101": {
      "id": "e-101",
      "eventTypeId": "PAGE_FINISH",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-23",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-100"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e2e0eab86f417347627a883"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1576804141660
    },
    "e-102": {
      "id": "e-102",
      "eventTypeId": "PAGE_SCROLL",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-22",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e2e0eab86f417347627a883"
      },
      "config": [{
        "continuousParameterGroupId": "a-22-p",
        "smoothing": 61,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1576808335797
    },
    "e-136": {
      "id": "e-136",
      "eventTypeId": "MOUSE_MOVE",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-26",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e2e0eab86f41772f227a84a"
      },
      "config": [{
        "continuousParameterGroupId": "a-26-p",
        "selectedAxis": "X_AXIS",
        "basedOn": "VIEWPORT",
        "reverse": false,
        "smoothing": 50,
        "restingState": 50
      }, {
        "continuousParameterGroupId": "a-26-p-2",
        "selectedAxis": "Y_AXIS",
        "basedOn": "VIEWPORT",
        "reverse": false,
        "smoothing": 50,
        "restingState": 50
      }],
      "createdOn": 1578781288019
    },
    "e-137": {
      "id": "e-137",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "FADE_EFFECT",
        "config": {
          "actionListId": "fadeIn",
          "autoStopEventId": "e-138"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e6aff9a40b2ff47012d18fb|7ad0793d-320c-38b4-944e-23749d3d4351"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": null,
        "effectIn": true
      },
      "createdOn": 1578782689184
    },
    "e-140": {
      "id": "e-140",
      "eventTypeId": "PAGE_FINISH",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-27",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-139"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e2e0eab86f417a0a627a885"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1578782689184
    },
    "e-141": {
      "id": "e-141",
      "eventTypeId": "PAGE_SCROLL",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-28",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e2e0eab86f417a0a627a885"
      },
      "config": [{
        "continuousParameterGroupId": "a-28-p",
        "smoothing": 61,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1578782689184
    },
    "e-150": {
      "id": "e-150",
      "eventTypeId": "MOUSE_MOVE",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-31",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e2e0eab86f417454127a886"
      },
      "config": [{
        "continuousParameterGroupId": "a-31-p",
        "selectedAxis": "X_AXIS",
        "basedOn": "VIEWPORT",
        "reverse": false,
        "smoothing": 50,
        "restingState": 50
      }, {
        "continuousParameterGroupId": "a-31-p-2",
        "selectedAxis": "Y_AXIS",
        "basedOn": "VIEWPORT",
        "reverse": false,
        "smoothing": 50,
        "restingState": 50
      }],
      "createdOn": 1578862645212
    },
    "e-151": {
      "id": "e-151",
      "eventTypeId": "MOUSE_MOVE",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-32",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e2e0eab86f417454127a886"
      },
      "config": [{
        "continuousParameterGroupId": "a-32-p",
        "selectedAxis": "X_AXIS",
        "basedOn": "VIEWPORT",
        "reverse": false,
        "smoothing": 50,
        "restingState": 50
      }, {
        "continuousParameterGroupId": "a-32-p-2",
        "selectedAxis": "Y_AXIS",
        "basedOn": "VIEWPORT",
        "reverse": false,
        "smoothing": 50,
        "restingState": 50
      }],
      "createdOn": 1578862645212
    },
    "e-152": {
      "id": "e-152",
      "eventTypeId": "MOUSE_MOVE",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-33",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e2e0eab86f417454127a886"
      },
      "config": [{
        "continuousParameterGroupId": "a-33-p",
        "selectedAxis": "X_AXIS",
        "basedOn": "VIEWPORT",
        "reverse": false,
        "smoothing": 50,
        "restingState": 50
      }, {
        "continuousParameterGroupId": "a-33-p-2",
        "selectedAxis": "Y_AXIS",
        "basedOn": "VIEWPORT",
        "reverse": false,
        "smoothing": 50,
        "restingState": 50
      }],
      "createdOn": 1578862645212
    },
    "e-154": {
      "id": "e-154",
      "eventTypeId": "PAGE_FINISH",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-34",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-153"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e2e0eab86f417454127a886"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1578862645212
    },
    "e-157": {
      "id": "e-157",
      "eventTypeId": "MOUSE_MOVE",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-35",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e2e0eab86f417454127a886"
      },
      "config": [{
        "continuousParameterGroupId": "a-35-p",
        "selectedAxis": "X_AXIS",
        "basedOn": "VIEWPORT",
        "reverse": false,
        "smoothing": 50,
        "restingState": 50
      }, {
        "continuousParameterGroupId": "a-35-p-2",
        "selectedAxis": "Y_AXIS",
        "basedOn": "VIEWPORT",
        "reverse": false,
        "smoothing": 50,
        "restingState": 50
      }],
      "createdOn": 1578862645212
    },
    "e-159": {
      "id": "e-159",
      "eventTypeId": "PAGE_FINISH",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-36",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-158"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e2e0eab86f417b68027a888"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1578863511440
    },
    "e-166": {
      "id": "e-166",
      "eventTypeId": "PAGE_FINISH",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-37",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-165"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e2e0eab86f417761827a889"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1578863553906
    },
    "e-213": {
      "id": "e-213",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "FADE_EFFECT",
        "config": {
          "actionListId": "fadeIn",
          "autoStopEventId": "e-214"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e6aff9a40b2ff47012d18fb|7ad0793d-320c-38b4-944e-23749d3d4351"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": null,
        "effectIn": true
      },
      "createdOn": 1578863725980
    },
    "e-216": {
      "id": "e-216",
      "eventTypeId": "PAGE_FINISH",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-38",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-215"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e2e0eab86f417ef7127a88b"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1578863725980
    },
    "e-217": {
      "id": "e-217",
      "eventTypeId": "PAGE_SCROLL",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-39",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e2e0eab86f417ef7127a88b"
      },
      "config": [{
        "continuousParameterGroupId": "a-39-p",
        "smoothing": 61,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1578863725980
    },
    "e-226": {
      "id": "e-226",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "FADE_EFFECT",
        "config": {
          "actionListId": "fadeIn",
          "autoStopEventId": "e-227"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e6aff9a40b2ff47012d18fb|7ad0793d-320c-38b4-944e-23749d3d4351"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": null,
        "effectIn": true
      },
      "createdOn": 1578863747079
    },
    "e-229": {
      "id": "e-229",
      "eventTypeId": "PAGE_FINISH",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-40",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-228"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e2e0eab86f417feca27a88c"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1578863747079
    },
    "e-230": {
      "id": "e-230",
      "eventTypeId": "PAGE_SCROLL",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-41",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e2e0eab86f417feca27a88c"
      },
      "config": [{
        "continuousParameterGroupId": "a-41-p",
        "smoothing": 61,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1578863747079
    },
    "e-239": {
      "id": "e-239",
      "eventTypeId": "PAGE_START",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-42",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-240"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e35f094121267b8bfb9eb9e"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1582230684744
    },
    "e-241": {
      "id": "e-241",
      "eventTypeId": "PAGE_START",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-43",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-242"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e2e0eab86f4173c1f27a872"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1583347245398
    },
    "e-243": {
      "id": "e-243",
      "eventTypeId": "MOUSE_MOVE",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-44",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e2e0eab86f41772f227a84a"
      },
      "config": [{
        "continuousParameterGroupId": "a-44-p",
        "selectedAxis": "X_AXIS",
        "basedOn": "VIEWPORT",
        "reverse": false,
        "smoothing": 50,
        "restingState": 50
      }, {
        "continuousParameterGroupId": "a-44-p-2",
        "selectedAxis": "Y_AXIS",
        "basedOn": "VIEWPORT",
        "reverse": false,
        "smoothing": 50,
        "restingState": 50
      }],
      "createdOn": 1584076809250
    },
    "e-245": {
      "id": "e-245",
      "eventTypeId": "PAGE_FINISH",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-45",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-244"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e6aff9a40b2ff47012d18fb"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1584077696830
    },
    "e-246": {
      "id": "e-246",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "FADE_EFFECT",
        "config": {
          "actionListId": "fadeIn",
          "autoStopEventId": "e-247"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e7076cb2d9c3f43606ee5e6|7ad0793d-320c-38b4-944e-23749d3d4351"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": null,
        "effectIn": true
      },
      "createdOn": 1584428747434
    },
    "e-250": {
      "id": "e-250",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "FADE_EFFECT",
        "config": {
          "actionListId": "fadeIn",
          "autoStopEventId": "e-251"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e7076cb2d9c3f43606ee5e6|7ad0793d-320c-38b4-944e-23749d3d4351"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": null,
        "effectIn": true
      },
      "createdOn": 1584428747434
    },
    "e-254": {
      "id": "e-254",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "FADE_EFFECT",
        "config": {
          "actionListId": "fadeIn",
          "autoStopEventId": "e-255"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e7076cb2d9c3f43606ee5e6|7ad0793d-320c-38b4-944e-23749d3d4351"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": null,
        "effectIn": true
      },
      "createdOn": 1584428747434
    },
    "e-258": {
      "id": "e-258",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "FADE_EFFECT",
        "config": {
          "actionListId": "fadeIn",
          "autoStopEventId": "e-259"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e7076cb2d9c3f43606ee5e6|7ad0793d-320c-38b4-944e-23749d3d4351"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": null,
        "effectIn": true
      },
      "createdOn": 1584428747434
    },
    "e-263": {
      "id": "e-263",
      "eventTypeId": "PAGE_FINISH",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-46",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-262"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e7076cb2d9c3f43606ee5e6"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1584428747434
    },
    "e-310": {
      "id": "e-310",
      "eventTypeId": "PAGE_START",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-47",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-311"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5eaa2bc6f5cf23fb31fb297d"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1588224388334
    },
    "e-312": {
      "id": "e-312",
      "eventTypeId": "PAGE_START",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-48",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-313"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5eaa5323b688d3e840ad5d1a"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1588224564930
    }
  },
  "actionLists": {
    "a-2": {
      "id": "a-2",
      "title": "Scroll Progress",
      "continuousParameterGroups": [{
        "id": "a-2-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-2-n",
            "actionTypeId": "TRANSFORM_SCALE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "769471b8-ce82-f9da-eb87-36a4466eff4f"
              },
              "xValue": 2,
              "yValue": 1,
              "locked": false
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-2-n-2",
            "actionTypeId": "TRANSFORM_SCALE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "769471b8-ce82-f9da-eb87-36a4466eff4f"
              },
              "xValue": 1,
              "yValue": 1,
              "locked": true
            }
          }]
        }]
      }],
      "createdOn": 1574465453650
    },
    "a-3": {
      "id": "a-3",
      "title": "Scroll",
      "continuousParameterGroups": [{
        "id": "a-3-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-3-n",
            "actionTypeId": "TRANSFORM_SCALE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f417bd6a27a876|05b65087-49ec-8a7b-ae1f-be5834e40029"
              },
              "xValue": 0,
              "locked": false
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-3-n-2",
            "actionTypeId": "TRANSFORM_SCALE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f417bd6a27a876|05b65087-49ec-8a7b-ae1f-be5834e40029"
              },
              "xValue": 1,
              "yValue": 1,
              "locked": false
            }
          }]
        }]
      }],
      "createdOn": 1574465753898
    },
    "a": {
      "id": "a",
      "title": "Page Load Home",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-n-15",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f41772f227a84a|32cb3ffb-c6cc-c1e2-0ea9-570cb1f7941b"
            },
            "value": 0,
            "unit": ""
          }
        }, {
          "id": "a-n-31",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f41772f227a84a|44f5e7d8-bcb0-813d-9294-5bcce6ee3198"
            },
            "value": 0,
            "unit": ""
          }
        }, {
          "id": "a-n-38",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f41772f227a84a|e8bc077c-217b-8da1-21c2-35cd23fd338a"
            },
            "value": 0,
            "unit": ""
          }
        }, {
          "id": "a-n-43",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f41772f227a84a|8ecc9a4b-6bbe-ad58-a602-464dce50a960"
            },
            "value": 0,
            "unit": ""
          }
        }, {
          "id": "a-n-45",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f41772f227a84a|3938354a-9c52-41cf-c544-2d9857229b0a"
            },
            "value": 0,
            "unit": ""
          }
        }, {
          "id": "a-n-50",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f41772f227a84a|32cb3ffb-c6cc-c1e2-0ea9-570cb1f7941b"
            },
            "yValue": 8,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-n-51",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f41772f227a84a|44f5e7d8-bcb0-813d-9294-5bcce6ee3198"
            },
            "yValue": 8,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-n-52",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f41772f227a84a|e8bc077c-217b-8da1-21c2-35cd23fd338a"
            },
            "yValue": 8,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-n-53",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f41772f227a84a|8ecc9a4b-6bbe-ad58-a602-464dce50a960"
            },
            "yValue": 8,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-n-54",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f41772f227a84a|a1535323-8206-7aaa-bb2d-c9a38e18e736"
            },
            "yValue": 8,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-n-60",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f41772f227a84a|3938354a-9c52-41cf-c544-2d9857229b0a"
            },
            "yValue": 8,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-n-62",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f41772f227a84a|a1535323-8206-7aaa-bb2d-c9a38e18e736"
            },
            "value": 0,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-n-17",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 100,
            "easing": [0, 0.512, 0.994, 0.769],
            "duration": 300,
            "target": {
              "id": "5e2e0eab86f41772f227a84a|32cb3ffb-c6cc-c1e2-0ea9-570cb1f7941b"
            },
            "value": 1,
            "unit": ""
          }
        }, {
          "id": "a-n-33",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 100,
            "easing": [0, 0.512, 0.994, 0.769],
            "duration": 300,
            "target": {
              "id": "5e2e0eab86f41772f227a84a|44f5e7d8-bcb0-813d-9294-5bcce6ee3198"
            },
            "value": 1,
            "unit": ""
          }
        }, {
          "id": "a-n-40",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 100,
            "easing": [0, 0.512, 0.994, 0.769],
            "duration": 300,
            "target": {
              "id": "5e2e0eab86f41772f227a84a|e8bc077c-217b-8da1-21c2-35cd23fd338a"
            },
            "value": 1,
            "unit": ""
          }
        }, {
          "id": "a-n-47",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 100,
            "easing": [0, 0.512, 0.994, 0.769],
            "duration": 300,
            "target": {
              "id": "5e2e0eab86f41772f227a84a|8ecc9a4b-6bbe-ad58-a602-464dce50a960"
            },
            "value": 1,
            "unit": ""
          }
        }, {
          "id": "a-n-49",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 100,
            "easing": [0, 0.512, 0.994, 0.769],
            "duration": 300,
            "target": {
              "id": "5e2e0eab86f41772f227a84a|3938354a-9c52-41cf-c544-2d9857229b0a"
            },
            "value": 1,
            "unit": ""
          }
        }, {
          "id": "a-n-55",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 100,
            "easing": [0, 0.202, 0.251, 0.997],
            "duration": 300,
            "target": {
              "id": "5e2e0eab86f41772f227a84a|32cb3ffb-c6cc-c1e2-0ea9-570cb1f7941b"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-n-56",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 100,
            "easing": [0, 0.202, 0.251, 0.997],
            "duration": 300,
            "target": {
              "id": "5e2e0eab86f41772f227a84a|44f5e7d8-bcb0-813d-9294-5bcce6ee3198"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-n-57",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 100,
            "easing": [0, 0.202, 0.251, 0.997],
            "duration": 300,
            "target": {
              "id": "5e2e0eab86f41772f227a84a|e8bc077c-217b-8da1-21c2-35cd23fd338a"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-n-58",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 100,
            "easing": [0, 0.202, 0.251, 0.997],
            "duration": 300,
            "target": {
              "id": "5e2e0eab86f41772f227a84a|8ecc9a4b-6bbe-ad58-a602-464dce50a960"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-n-59",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 100,
            "easing": [0, 0.202, 0.251, 0.997],
            "duration": 300,
            "target": {
              "id": "5e2e0eab86f41772f227a84a|3938354a-9c52-41cf-c544-2d9857229b0a"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-n-61",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 100,
            "easing": [0, 0.202, 0.251, 0.997],
            "duration": 300,
            "target": {
              "id": "5e2e0eab86f41772f227a84a|a1535323-8206-7aaa-bb2d-c9a38e18e736"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-n-63",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 100,
            "easing": [0, 0.512, 0.994, 0.769],
            "duration": 300,
            "target": {
              "id": "5e2e0eab86f41772f227a84a|a1535323-8206-7aaa-bb2d-c9a38e18e736"
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "createdOn": 1568186320819,
      "useFirstGroupAsInitialState": true
    },
    "a-7": {
      "id": "a-7",
      "title": "Scroll 2",
      "continuousParameterGroups": [{
        "id": "a-7-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-7-n",
            "actionTypeId": "TRANSFORM_SCALE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f4176e9f27a87c|05b65087-49ec-8a7b-ae1f-be5834e40029"
              },
              "xValue": 0,
              "locked": false
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-7-n-2",
            "actionTypeId": "TRANSFORM_SCALE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f4176e9f27a87c|05b65087-49ec-8a7b-ae1f-be5834e40029"
              },
              "xValue": 1,
              "yValue": 1,
              "locked": false
            }
          }]
        }]
      }],
      "createdOn": 1574465753898
    },
    "a-10": {
      "id": "a-10",
      "title": "Scroll 3",
      "continuousParameterGroups": [{
        "id": "a-10-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-10-n",
            "actionTypeId": "TRANSFORM_SCALE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f417b13b27a87d|05b65087-49ec-8a7b-ae1f-be5834e40029"
              },
              "xValue": 0,
              "locked": false
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-10-n-2",
            "actionTypeId": "TRANSFORM_SCALE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f417b13b27a87d|05b65087-49ec-8a7b-ae1f-be5834e40029"
              },
              "xValue": 1,
              "yValue": 1,
              "locked": false
            }
          }]
        }]
      }],
      "createdOn": 1574465753898
    },
    "a-14": {
      "id": "a-14",
      "title": "3d-hover 1",
      "continuousParameterGroups": [{
        "id": "a-14-p",
        "type": "MOUSE_X",
        "parameterLabel": "Mouse X",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-14-n",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f41772f227a84a|2f39a7e2-46cf-c8ee-e806-72aac559831e"
              },
              "yValue": -3,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-14-n-2",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f41772f227a84a|2f39a7e2-46cf-c8ee-e806-72aac559831e"
              },
              "yValue": 3,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }]
      }, {
        "id": "a-14-p-2",
        "type": "MOUSE_Y",
        "parameterLabel": "Mouse Y",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-14-n-3",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f41772f227a84a|2f39a7e2-46cf-c8ee-e806-72aac559831e"
              },
              "xValue": 6,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-14-n-4",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f41772f227a84a|2f39a7e2-46cf-c8ee-e806-72aac559831e"
              },
              "xValue": -6,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }]
      }],
      "createdOn": 1576642772413
    },
    "a-15": {
      "id": "a-15",
      "title": "3d-hover 2",
      "continuousParameterGroups": [{
        "id": "a-15-p",
        "type": "MOUSE_X",
        "parameterLabel": "Mouse X",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-15-n",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f41772f227a84a|629439bd-e9d9-71ce-514f-1b60dc80d337"
              },
              "yValue": -3,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-15-n-2",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f41772f227a84a|629439bd-e9d9-71ce-514f-1b60dc80d337"
              },
              "yValue": 3,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }]
      }, {
        "id": "a-15-p-2",
        "type": "MOUSE_Y",
        "parameterLabel": "Mouse Y",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-15-n-3",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f41772f227a84a|629439bd-e9d9-71ce-514f-1b60dc80d337"
              },
              "xValue": 6,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-15-n-4",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f41772f227a84a|629439bd-e9d9-71ce-514f-1b60dc80d337"
              },
              "xValue": -6,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }]
      }],
      "createdOn": 1576643383034
    },
    "a-16": {
      "id": "a-16",
      "title": "3d-hover 3",
      "continuousParameterGroups": [{
        "id": "a-16-p",
        "type": "MOUSE_X",
        "parameterLabel": "Mouse X",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-16-n",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f41772f227a84a|e62f108e-9765-a41f-9373-a4be1f3a5f17"
              },
              "yValue": -3,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-16-n-2",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f41772f227a84a|e62f108e-9765-a41f-9373-a4be1f3a5f17"
              },
              "yValue": 3,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }]
      }, {
        "id": "a-16-p-2",
        "type": "MOUSE_Y",
        "parameterLabel": "Mouse Y",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-16-n-3",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f41772f227a84a|e62f108e-9765-a41f-9373-a4be1f3a5f17"
              },
              "xValue": 6,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-16-n-4",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f41772f227a84a|e62f108e-9765-a41f-9373-a4be1f3a5f17"
              },
              "xValue": -6,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }]
      }],
      "createdOn": 1576643568835
    },
    "a-19": {
      "id": "a-19",
      "title": "Page Load Visual Design",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-19-n-48",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f417698b27a87e|86609ba5-9de8-62af-83b3-6a025b5803e6"
            },
            "value": 0,
            "unit": ""
          }
        }, {
          "id": "a-19-n-47",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f417698b27a87e|86609ba5-9de8-62af-83b3-6a025b5803e6"
            },
            "yValue": 8,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-19-n-49",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f417698b27a87e|ccd8b198-c747-2dab-4a72-f3533355a084"
            },
            "value": 0,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-19-n-50",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": [0, 0.512, 0.994, 0.769],
            "duration": 150,
            "target": {
              "id": "5e2e0eab86f417698b27a87e|ccd8b198-c747-2dab-4a72-f3533355a084"
            },
            "value": 1,
            "unit": ""
          }
        }, {
          "id": "a-19-n-29",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 150,
            "easing": [0, 0.202, 0.251, 0.997],
            "duration": 200,
            "target": {
              "id": "5e2e0eab86f417698b27a87e|86609ba5-9de8-62af-83b3-6a025b5803e6"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-19-n-30",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 150,
            "easing": [0, 0.202, 0.251, 0.997],
            "duration": 200,
            "target": {
              "id": "5e2e0eab86f417698b27a87e|86609ba5-9de8-62af-83b3-6a025b5803e6"
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "createdOn": 1568186320819,
      "useFirstGroupAsInitialState": true
    },
    "a-20": {
      "id": "a-20",
      "title": "Page Load ABout",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-20-n-8",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f417f24027a87f|62f496f6-a0eb-c75a-8516-e40725a6ea5a"
            },
            "value": 0,
            "unit": ""
          }
        }, {
          "id": "a-20-n-7",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f417f24027a87f|62f496f6-a0eb-c75a-8516-e40725a6ea5a"
            },
            "yValue": 8,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-20-n-23",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 100,
            "easing": [0, 0.202, 0.251, 0.997],
            "duration": 300,
            "target": {
              "id": "5e2e0eab86f417f24027a87f|62f496f6-a0eb-c75a-8516-e40725a6ea5a"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-20-n-24",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 100,
            "easing": [0.316, 0.026, 0.795, 0.985],
            "duration": 300,
            "target": {
              "id": "5e2e0eab86f417f24027a87f|62f496f6-a0eb-c75a-8516-e40725a6ea5a"
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "createdOn": 1568186320819,
      "useFirstGroupAsInitialState": true
    },
    "a-23": {
      "id": "a-23",
      "title": "Page Load – Dashboard",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-23-n-2",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f417347627a883|77e97c86-f1c5-8bbf-b86c-30c9b17953b9"
            },
            "yValue": -100,
            "xUnit": "PX",
            "yUnit": "VH",
            "zUnit": "PX"
          }
        }, {
          "id": "a-23-n-3",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f417347627a883|8c5b0806-7330-c707-2e59-211a1d203504"
            },
            "value": 0.02,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-23-n-5",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 300,
            "easing": [0.614, -0.044, 0.099, 1.003],
            "duration": 350,
            "target": {
              "id": "5e2e0eab86f417347627a883|77e97c86-f1c5-8bbf-b86c-30c9b17953b9"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "VH",
            "zUnit": "PX"
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-23-n-4",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": [0.215, 0.61, 0.355, 1],
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f417347627a883|8c5b0806-7330-c707-2e59-211a1d203504"
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "createdOn": 1568186320819,
      "useFirstGroupAsInitialState": true
    },
    "a-22": {
      "id": "a-22",
      "title": "Parallax Scroll BG",
      "continuousParameterGroups": [{
        "id": "a-22-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-22-n",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e6aff9a40b2ff47012d18fb|1d369a34-33ee-2df0-58f4-80ca738ce8c0"
              },
              "yValue": 80,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-22-n-3",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f417347627a883|741ff8fb-2a19-7e8d-8231-96df58971794"
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "keyframe": 4,
          "actionItems": [{
            "id": "a-22-n-4",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f417347627a883|741ff8fb-2a19-7e8d-8231-96df58971794"
              },
              "value": 0,
              "unit": ""
            }
          }]
        }, {
          "keyframe": 26,
          "actionItems": [{
            "id": "a-22-n-2",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e6aff9a40b2ff47012d18fb|1d369a34-33ee-2df0-58f4-80ca738ce8c0"
              },
              "yValue": -50,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }]
      }],
      "createdOn": 1576808342950
    },
    "a-26": {
      "id": "a-26",
      "title": "3d-hover 4",
      "continuousParameterGroups": [{
        "id": "a-26-p",
        "type": "MOUSE_X",
        "parameterLabel": "Mouse X",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-26-n",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f41772f227a84a|a1535323-8206-7aaa-bb2d-c9a38e18e737"
              },
              "yValue": -3,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-26-n-2",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f41772f227a84a|a1535323-8206-7aaa-bb2d-c9a38e18e737"
              },
              "yValue": 3,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }]
      }, {
        "id": "a-26-p-2",
        "type": "MOUSE_Y",
        "parameterLabel": "Mouse Y",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-26-n-3",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f41772f227a84a|a1535323-8206-7aaa-bb2d-c9a38e18e737"
              },
              "xValue": 6,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-26-n-4",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f41772f227a84a|a1535323-8206-7aaa-bb2d-c9a38e18e737"
              },
              "xValue": -6,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }]
      }],
      "createdOn": 1576643568835
    },
    "a-27": {
      "id": "a-27",
      "title": "Page Load – Dashboard 3",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-27-n",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e6aff9a40b2ff47012d18fb|5b1e5dfb-de2e-0da3-3f46-87980d05fa7e"
            },
            "yValue": -100,
            "xUnit": "PX",
            "yUnit": "VH",
            "zUnit": "PX"
          }
        }, {
          "id": "a-27-n-2",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e6aff9a40b2ff47012d18fb|1d369a34-33ee-2df0-58f4-80ca738ce8c0"
            },
            "value": 0.02,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-27-n-3",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 300,
            "easing": [0.614, -0.044, 0.099, 1.003],
            "duration": 350,
            "target": {
              "id": "5e6aff9a40b2ff47012d18fb|5b1e5dfb-de2e-0da3-3f46-87980d05fa7e"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "VH",
            "zUnit": "PX"
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-27-n-4",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": [0.215, 0.61, 0.355, 1],
            "duration": 500,
            "target": {
              "id": "5e6aff9a40b2ff47012d18fb|1d369a34-33ee-2df0-58f4-80ca738ce8c0"
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "createdOn": 1568186320819,
      "useFirstGroupAsInitialState": true
    },
    "a-28": {
      "id": "a-28",
      "title": "Parallax Scroll BG 3",
      "continuousParameterGroups": [{
        "id": "a-28-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-28-n",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e6aff9a40b2ff47012d18fb|1d369a34-33ee-2df0-58f4-80ca738ce8c0"
              },
              "yValue": 80,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-28-n-2",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f417a0a627a885|741ff8fb-2a19-7e8d-8231-96df58971794"
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "keyframe": 9,
          "actionItems": [{
            "id": "a-28-n-3",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f417a0a627a885|741ff8fb-2a19-7e8d-8231-96df58971794"
              },
              "value": 0,
              "unit": ""
            }
          }]
        }, {
          "keyframe": 26,
          "actionItems": [{
            "id": "a-28-n-4",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e6aff9a40b2ff47012d18fb|1d369a34-33ee-2df0-58f4-80ca738ce8c0"
              },
              "yValue": -50,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }]
      }],
      "createdOn": 1576808342950
    },
    "a-31": {
      "id": "a-31",
      "title": "3d-hover 5",
      "continuousParameterGroups": [{
        "id": "a-31-p",
        "type": "MOUSE_X",
        "parameterLabel": "Mouse X",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-31-n",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f417454127a886|2f39a7e2-46cf-c8ee-e806-72aac559831e"
              },
              "yValue": -5,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-31-n-2",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f417454127a886|2f39a7e2-46cf-c8ee-e806-72aac559831e"
              },
              "yValue": 5,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }]
      }, {
        "id": "a-31-p-2",
        "type": "MOUSE_Y",
        "parameterLabel": "Mouse Y",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-31-n-3",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f417454127a886|2f39a7e2-46cf-c8ee-e806-72aac559831e"
              },
              "xValue": 8,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-31-n-4",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f417454127a886|2f39a7e2-46cf-c8ee-e806-72aac559831e"
              },
              "xValue": -8,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }]
      }],
      "createdOn": 1576642772413
    },
    "a-32": {
      "id": "a-32",
      "title": "3d-hover 6",
      "continuousParameterGroups": [{
        "id": "a-32-p",
        "type": "MOUSE_X",
        "parameterLabel": "Mouse X",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-32-n",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f417454127a886|ff0927a6-6f7c-2fea-acfe-0ba07ee96ec2"
              },
              "yValue": -5,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-32-n-2",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f417454127a886|ff0927a6-6f7c-2fea-acfe-0ba07ee96ec2"
              },
              "yValue": 5,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }]
      }, {
        "id": "a-32-p-2",
        "type": "MOUSE_Y",
        "parameterLabel": "Mouse Y",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-32-n-3",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f417454127a886|ff0927a6-6f7c-2fea-acfe-0ba07ee96ec2"
              },
              "xValue": 8,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-32-n-4",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f417454127a886|ff0927a6-6f7c-2fea-acfe-0ba07ee96ec2"
              },
              "xValue": -8,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }]
      }],
      "createdOn": 1576643383034
    },
    "a-33": {
      "id": "a-33",
      "title": "3d-hover 7",
      "continuousParameterGroups": [{
        "id": "a-33-p",
        "type": "MOUSE_X",
        "parameterLabel": "Mouse X",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-33-n",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f417454127a886|83d69bc8-741b-567f-90de-f0e8a2eaafed"
              },
              "yValue": -5,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-33-n-2",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f417454127a886|83d69bc8-741b-567f-90de-f0e8a2eaafed"
              },
              "yValue": 5,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }]
      }, {
        "id": "a-33-p-2",
        "type": "MOUSE_Y",
        "parameterLabel": "Mouse Y",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-33-n-3",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f417454127a886|83d69bc8-741b-567f-90de-f0e8a2eaafed"
              },
              "xValue": 8,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-33-n-4",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f417454127a886|83d69bc8-741b-567f-90de-f0e8a2eaafed"
              },
              "xValue": -8,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }]
      }],
      "createdOn": 1576643568835
    },
    "a-34": {
      "id": "a-34",
      "title": "Page Load Home 2",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-34-n",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f417454127a886|32cb3ffb-c6cc-c1e2-0ea9-570cb1f7941b"
            },
            "value": 0,
            "unit": ""
          }
        }, {
          "id": "a-34-n-2",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f417454127a886|44f5e7d8-bcb0-813d-9294-5bcce6ee3198"
            },
            "value": 0,
            "unit": ""
          }
        }, {
          "id": "a-34-n-3",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f417454127a886|e8bc077c-217b-8da1-21c2-35cd23fd338a"
            },
            "value": 0,
            "unit": ""
          }
        }, {
          "id": "a-34-n-4",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f417454127a886|c43af24f-ea23-0035-3704-74a13fa9b9b4"
            },
            "value": 0,
            "unit": ""
          }
        }, {
          "id": "a-34-n-5",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f417454127a886|3938354a-9c52-41cf-c544-2d9857229b0a"
            },
            "value": 0,
            "unit": ""
          }
        }, {
          "id": "a-34-n-6",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f417454127a886|32cb3ffb-c6cc-c1e2-0ea9-570cb1f7941b"
            },
            "yValue": 8,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-34-n-7",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f417454127a886|44f5e7d8-bcb0-813d-9294-5bcce6ee3198"
            },
            "yValue": 8,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-34-n-8",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f417454127a886|e8bc077c-217b-8da1-21c2-35cd23fd338a"
            },
            "yValue": 8,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-34-n-9",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f417454127a886|c43af24f-ea23-0035-3704-74a13fa9b9b4"
            },
            "yValue": 8,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-34-n-10",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f417454127a886|a1535323-8206-7aaa-bb2d-c9a38e18e736"
            },
            "yValue": 8,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-34-n-11",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f417454127a886|3938354a-9c52-41cf-c544-2d9857229b0a"
            },
            "yValue": 8,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-34-n-12",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f417454127a886|a1535323-8206-7aaa-bb2d-c9a38e18e736"
            },
            "value": 0,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-34-n-13",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 100,
            "easing": [0, 0.512, 0.994, 0.769],
            "duration": 300,
            "target": {
              "id": "5e2e0eab86f417454127a886|32cb3ffb-c6cc-c1e2-0ea9-570cb1f7941b"
            },
            "value": 1,
            "unit": ""
          }
        }, {
          "id": "a-34-n-14",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 100,
            "easing": [0, 0.512, 0.994, 0.769],
            "duration": 300,
            "target": {
              "id": "5e2e0eab86f417454127a886|44f5e7d8-bcb0-813d-9294-5bcce6ee3198"
            },
            "value": 1,
            "unit": ""
          }
        }, {
          "id": "a-34-n-15",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 100,
            "easing": [0, 0.512, 0.994, 0.769],
            "duration": 300,
            "target": {
              "id": "5e2e0eab86f417454127a886|e8bc077c-217b-8da1-21c2-35cd23fd338a"
            },
            "value": 1,
            "unit": ""
          }
        }, {
          "id": "a-34-n-16",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 100,
            "easing": [0, 0.512, 0.994, 0.769],
            "duration": 300,
            "target": {
              "id": "5e2e0eab86f417454127a886|c43af24f-ea23-0035-3704-74a13fa9b9b4"
            },
            "value": 1,
            "unit": ""
          }
        }, {
          "id": "a-34-n-17",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 100,
            "easing": [0, 0.512, 0.994, 0.769],
            "duration": 300,
            "target": {
              "id": "5e2e0eab86f417454127a886|3938354a-9c52-41cf-c544-2d9857229b0a"
            },
            "value": 1,
            "unit": ""
          }
        }, {
          "id": "a-34-n-18",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 100,
            "easing": [0, 0.202, 0.251, 0.997],
            "duration": 300,
            "target": {
              "id": "5e2e0eab86f417454127a886|32cb3ffb-c6cc-c1e2-0ea9-570cb1f7941b"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-34-n-19",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 100,
            "easing": [0, 0.202, 0.251, 0.997],
            "duration": 300,
            "target": {
              "id": "5e2e0eab86f417454127a886|44f5e7d8-bcb0-813d-9294-5bcce6ee3198"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-34-n-20",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 100,
            "easing": [0, 0.202, 0.251, 0.997],
            "duration": 300,
            "target": {
              "id": "5e2e0eab86f417454127a886|e8bc077c-217b-8da1-21c2-35cd23fd338a"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-34-n-21",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 100,
            "easing": [0, 0.202, 0.251, 0.997],
            "duration": 300,
            "target": {
              "id": "5e2e0eab86f417454127a886|c43af24f-ea23-0035-3704-74a13fa9b9b4"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-34-n-22",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 100,
            "easing": [0, 0.202, 0.251, 0.997],
            "duration": 300,
            "target": {
              "id": "5e2e0eab86f417454127a886|3938354a-9c52-41cf-c544-2d9857229b0a"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-34-n-23",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 100,
            "easing": [0, 0.202, 0.251, 0.997],
            "duration": 300,
            "target": {
              "id": "5e2e0eab86f417454127a886|a1535323-8206-7aaa-bb2d-c9a38e18e736"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-34-n-24",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 100,
            "easing": [0, 0.512, 0.994, 0.769],
            "duration": 300,
            "target": {
              "id": "5e2e0eab86f417454127a886|a1535323-8206-7aaa-bb2d-c9a38e18e736"
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "createdOn": 1568186320819,
      "useFirstGroupAsInitialState": true
    },
    "a-35": {
      "id": "a-35",
      "title": "3d-hover 8",
      "continuousParameterGroups": [{
        "id": "a-35-p",
        "type": "MOUSE_X",
        "parameterLabel": "Mouse X",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-35-n",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f417454127a886|a1535323-8206-7aaa-bb2d-c9a38e18e737"
              },
              "yValue": -5,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-35-n-2",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f417454127a886|a1535323-8206-7aaa-bb2d-c9a38e18e737"
              },
              "yValue": 5,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }]
      }, {
        "id": "a-35-p-2",
        "type": "MOUSE_Y",
        "parameterLabel": "Mouse Y",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-35-n-3",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f417454127a886|a1535323-8206-7aaa-bb2d-c9a38e18e737"
              },
              "xValue": 8,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-35-n-4",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f417454127a886|a1535323-8206-7aaa-bb2d-c9a38e18e737"
              },
              "xValue": -8,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }]
      }],
      "createdOn": 1576643568835
    },
    "a-36": {
      "id": "a-36",
      "title": "Page Load ABout 2",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-36-n",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f417b68027a888|62f496f6-a0eb-c75a-8516-e40725a6ea5a"
            },
            "value": 0,
            "unit": ""
          }
        }, {
          "id": "a-36-n-2",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f417b68027a888|62f496f6-a0eb-c75a-8516-e40725a6ea5a"
            },
            "yValue": 8,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-36-n-3",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 100,
            "easing": [0, 0.202, 0.251, 0.997],
            "duration": 300,
            "target": {
              "id": "5e2e0eab86f417b68027a888|62f496f6-a0eb-c75a-8516-e40725a6ea5a"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-36-n-4",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 100,
            "easing": [0.316, 0.026, 0.795, 0.985],
            "duration": 300,
            "target": {
              "id": "5e2e0eab86f417b68027a888|62f496f6-a0eb-c75a-8516-e40725a6ea5a"
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "createdOn": 1568186320819,
      "useFirstGroupAsInitialState": true
    },
    "a-37": {
      "id": "a-37",
      "title": "Page Load Visual Design 2",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-37-n",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f417761827a889|86609ba5-9de8-62af-83b3-6a025b5803e6"
            },
            "value": 0,
            "unit": ""
          }
        }, {
          "id": "a-37-n-2",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f417761827a889|86609ba5-9de8-62af-83b3-6a025b5803e6"
            },
            "yValue": 8,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-37-n-3",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e2e0eab86f417761827a889|ccd8b198-c747-2dab-4a72-f3533355a084"
            },
            "value": 0,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-37-n-4",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": [0, 0.512, 0.994, 0.769],
            "duration": 150,
            "target": {
              "id": "5e2e0eab86f417761827a889|ccd8b198-c747-2dab-4a72-f3533355a084"
            },
            "value": 1,
            "unit": ""
          }
        }, {
          "id": "a-37-n-5",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 150,
            "easing": [0, 0.202, 0.251, 0.997],
            "duration": 200,
            "target": {
              "id": "5e2e0eab86f417761827a889|86609ba5-9de8-62af-83b3-6a025b5803e6"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-37-n-6",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 150,
            "easing": [0, 0.202, 0.251, 0.997],
            "duration": 200,
            "target": {
              "id": "5e2e0eab86f417761827a889|86609ba5-9de8-62af-83b3-6a025b5803e6"
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "createdOn": 1568186320819,
      "useFirstGroupAsInitialState": true
    },
    "a-38": {
      "id": "a-38",
      "title": "Page Load – Dashboard 5",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-38-n",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e6aff9a40b2ff47012d18fb|5b1e5dfb-de2e-0da3-3f46-87980d05fa7e"
            },
            "yValue": -100,
            "xUnit": "PX",
            "yUnit": "VH",
            "zUnit": "PX"
          }
        }, {
          "id": "a-38-n-2",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e6aff9a40b2ff47012d18fb|1d369a34-33ee-2df0-58f4-80ca738ce8c0"
            },
            "value": 0.02,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-38-n-3",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 300,
            "easing": [0.614, -0.044, 0.099, 1.003],
            "duration": 350,
            "target": {
              "id": "5e6aff9a40b2ff47012d18fb|5b1e5dfb-de2e-0da3-3f46-87980d05fa7e"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "VH",
            "zUnit": "PX"
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-38-n-4",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": [0.215, 0.61, 0.355, 1],
            "duration": 500,
            "target": {
              "id": "5e6aff9a40b2ff47012d18fb|1d369a34-33ee-2df0-58f4-80ca738ce8c0"
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "createdOn": 1568186320819,
      "useFirstGroupAsInitialState": true
    },
    "a-39": {
      "id": "a-39",
      "title": "Parallax Scroll BG 5",
      "continuousParameterGroups": [{
        "id": "a-39-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-39-n",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e6aff9a40b2ff47012d18fb|1d369a34-33ee-2df0-58f4-80ca738ce8c0"
              },
              "yValue": 80,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-39-n-2",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f417ef7127a88b|741ff8fb-2a19-7e8d-8231-96df58971794"
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "keyframe": 7,
          "actionItems": [{
            "id": "a-39-n-3",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f417ef7127a88b|741ff8fb-2a19-7e8d-8231-96df58971794"
              },
              "value": 0,
              "unit": ""
            }
          }]
        }, {
          "keyframe": 26,
          "actionItems": [{
            "id": "a-39-n-4",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e6aff9a40b2ff47012d18fb|1d369a34-33ee-2df0-58f4-80ca738ce8c0"
              },
              "yValue": -50,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }]
      }],
      "createdOn": 1576808342950
    },
    "a-40": {
      "id": "a-40",
      "title": "Page Load – Dashboard 6",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-40-n",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e6aff9a40b2ff47012d18fb|5b1e5dfb-de2e-0da3-3f46-87980d05fa7e"
            },
            "yValue": -100,
            "xUnit": "PX",
            "yUnit": "VH",
            "zUnit": "PX"
          }
        }, {
          "id": "a-40-n-2",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e6aff9a40b2ff47012d18fb|1d369a34-33ee-2df0-58f4-80ca738ce8c0"
            },
            "value": 0.02,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-40-n-3",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 300,
            "easing": [0.614, -0.044, 0.099, 1.003],
            "duration": 350,
            "target": {
              "id": "5e6aff9a40b2ff47012d18fb|5b1e5dfb-de2e-0da3-3f46-87980d05fa7e"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "VH",
            "zUnit": "PX"
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-40-n-4",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": [0.215, 0.61, 0.355, 1],
            "duration": 500,
            "target": {
              "id": "5e6aff9a40b2ff47012d18fb|1d369a34-33ee-2df0-58f4-80ca738ce8c0"
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "createdOn": 1568186320819,
      "useFirstGroupAsInitialState": true
    },
    "a-41": {
      "id": "a-41",
      "title": "Parallax Scroll BG 6",
      "continuousParameterGroups": [{
        "id": "a-41-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-41-n",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e6aff9a40b2ff47012d18fb|1d369a34-33ee-2df0-58f4-80ca738ce8c0"
              },
              "yValue": 80,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-41-n-2",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f417feca27a88c|741ff8fb-2a19-7e8d-8231-96df58971794"
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "keyframe": 9,
          "actionItems": [{
            "id": "a-41-n-3",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f417feca27a88c|741ff8fb-2a19-7e8d-8231-96df58971794"
              },
              "value": 0,
              "unit": ""
            }
          }]
        }, {
          "keyframe": 26,
          "actionItems": [{
            "id": "a-41-n-4",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e6aff9a40b2ff47012d18fb|1d369a34-33ee-2df0-58f4-80ca738ce8c0"
              },
              "yValue": -50,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }]
      }],
      "createdOn": 1576808342950
    },
    "a-42": {
      "id": "a-42",
      "title": "Contact load animation",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-42-n-2",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 100,
            "target": {
              "id": "5e35f094121267b8bfb9eb9e|efc2e7b5-a6b9-1a07-d8da-566efb13ee68"
            },
            "value": 0.54,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-42-n-3",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 100,
            "target": {
              "id": "5e35f094121267b8bfb9eb9e|efc2e7b5-a6b9-1a07-d8da-566efb13ee68"
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "createdOn": 1582230690781,
      "useFirstGroupAsInitialState": true
    },
    "a-43": {
      "id": "a-43",
      "title": "404 load animation",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-43-n",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 100,
            "target": {
              "id": "5e2e0eab86f4173c1f27a872|b203fed5-4f7a-bba4-60ad-bc8756daf328"
            },
            "value": 0,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-43-n-4",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 150,
            "target": {
              "id": "5e2e0eab86f4173c1f27a872|b203fed5-4f7a-bba4-60ad-bc8756daf328"
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "createdOn": 1582230690781,
      "useFirstGroupAsInitialState": true
    },
    "a-44": {
      "id": "a-44",
      "title": "3d-hover 9",
      "continuousParameterGroups": [{
        "id": "a-44-p",
        "type": "MOUSE_X",
        "parameterLabel": "Mouse X",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-44-n",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f41772f227a84a|b4ebf615-1519-2034-8b03-610e831253a4"
              },
              "yValue": -5,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-44-n-2",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f41772f227a84a|b4ebf615-1519-2034-8b03-610e831253a4"
              },
              "yValue": 5,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }]
      }, {
        "id": "a-44-p-2",
        "type": "MOUSE_Y",
        "parameterLabel": "Mouse Y",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-44-n-3",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f41772f227a84a|b4ebf615-1519-2034-8b03-610e831253a4"
              },
              "xValue": 8,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-44-n-4",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e2e0eab86f41772f227a84a|b4ebf615-1519-2034-8b03-610e831253a4"
              },
              "xValue": -8,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }]
      }],
      "createdOn": 1576643568835
    },
    "a-45": {
      "id": "a-45",
      "title": "Page Load – Waking uP",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-45-n",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e6aff9a40b2ff47012d18fb|5b1e5dfb-de2e-0da3-3f46-87980d05fa7e"
            },
            "yValue": -100,
            "xUnit": "PX",
            "yUnit": "VH",
            "zUnit": "PX"
          }
        }, {
          "id": "a-45-n-2",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e6aff9a40b2ff47012d18fb|1d369a34-33ee-2df0-58f4-80ca738ce8c0"
            },
            "value": 0.02,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-45-n-3",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 300,
            "easing": [0.614, -0.044, 0.099, 1.003],
            "duration": 350,
            "target": {
              "id": "5e6aff9a40b2ff47012d18fb|5b1e5dfb-de2e-0da3-3f46-87980d05fa7e"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "VH",
            "zUnit": "PX"
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-45-n-4",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": [0.215, 0.61, 0.355, 1],
            "duration": 500,
            "target": {
              "id": "5e6aff9a40b2ff47012d18fb|1d369a34-33ee-2df0-58f4-80ca738ce8c0"
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "createdOn": 1568186320819,
      "useFirstGroupAsInitialState": true
    },
    "a-46": {
      "id": "a-46",
      "title": "Page Load – Waking uP 2",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-46-n",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e7076cb2d9c3f43606ee5e6|5b1e5dfb-de2e-0da3-3f46-87980d05fa7e"
            },
            "yValue": -100,
            "xUnit": "PX",
            "yUnit": "VH",
            "zUnit": "PX"
          }
        }, {
          "id": "a-46-n-2",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e7076cb2d9c3f43606ee5e6|1d369a34-33ee-2df0-58f4-80ca738ce8c0"
            },
            "value": 0.02,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-46-n-3",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 300,
            "easing": [0.614, -0.044, 0.099, 1.003],
            "duration": 350,
            "target": {
              "id": "5e7076cb2d9c3f43606ee5e6|5b1e5dfb-de2e-0da3-3f46-87980d05fa7e"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "VH",
            "zUnit": "PX"
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-46-n-4",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": [0.215, 0.61, 0.355, 1],
            "duration": 500,
            "target": {
              "id": "5e7076cb2d9c3f43606ee5e6|1d369a34-33ee-2df0-58f4-80ca738ce8c0"
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "createdOn": 1568186320819,
      "useFirstGroupAsInitialState": true
    },
    "a-47": {
      "id": "a-47",
      "title": "Page Load Checkout",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-47-n",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5eaa2bc6f5cf23fb31fb297d|1e3c00f3-6739-3635-22eb-d7f56f0a4217"
            },
            "value": 0,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-47-n-4",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 100,
            "easing": [0.316, 0.026, 0.795, 0.985],
            "duration": 300,
            "target": {
              "id": "5eaa2bc6f5cf23fb31fb297d|1e3c00f3-6739-3635-22eb-d7f56f0a4217"
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "createdOn": 1568186320819,
      "useFirstGroupAsInitialState": true
    },
    "a-48": {
      "id": "a-48",
      "title": "Page Load Checkout Success",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-48-n",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5eaa5323b688d3e840ad5d1a|c07831f6-f8b2-d2af-c47b-9b58c204432b"
            },
            "value": 0,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-48-n-2",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 100,
            "easing": [0.316, 0.026, 0.795, 0.985],
            "duration": 300,
            "target": {
              "id": "5eaa5323b688d3e840ad5d1a|c07831f6-f8b2-d2af-c47b-9b58c204432b"
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "createdOn": 1568186320819,
      "useFirstGroupAsInitialState": true
    },
    "fadeIn": {
      "id": "fadeIn",
      "useFirstGroupAsInitialState": true,
      "actionItemGroups": [{
        "actionItems": [{
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "duration": 0,
            "target": {
              "id": "N/A",
              "appliesTo": "TRIGGER_ELEMENT",
              "useEventTarget": true
            },
            "value": 0
          }
        }]
      }, {
        "actionItems": [{
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "outQuart",
            "duration": 1000,
            "target": {
              "id": "N/A",
              "appliesTo": "TRIGGER_ELEMENT",
              "useEventTarget": true
            },
            "value": 1
          }
        }]
      }]
    }
  },
  "site": {
    "mediaQueries": [{
      "key": "main",
      "min": 992,
      "max": 10000
    }, {
      "key": "medium",
      "min": 768,
      "max": 991
    }, {
      "key": "small",
      "min": 480,
      "max": 767
    }, {
      "key": "tiny",
      "min": 0,
      "max": 479
    }]
  }
});
