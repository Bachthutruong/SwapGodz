import * as ee from "react";
import Rr, { useContext as dn, useMemo as ea, useRef as dr, useDebugValue as Wi, createElement as dl, createContext as R0, useState as Ae, useEffect as yt, useCallback as on, useLayoutEffect as fl, PureComponent as ll, memo as ul, StrictMode as hl } from "react";
import * as ml from "react-dom";
import { createPortal as pl } from "react-dom";
var Kt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ht(t) {
  var e = t.default;
  if (typeof e == "function") {
    var r = function() {
      return e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(n) {
    var a = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(r, n, a.get ? a : {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    });
  }), r;
}
var ks = { exports: {} }, Oe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hi;
function bl() {
  if (Hi)
    return Oe;
  Hi = 1;
  var t = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), o = Symbol.for("react.context"), i = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), S;
  S = Symbol.for("react.module.reference");
  function D(x) {
    if (typeof x == "object" && x !== null) {
      var F = x.$$typeof;
      switch (F) {
        case t:
          switch (x = x.type, x) {
            case r:
            case a:
            case n:
            case u:
            case h:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case i:
                case o:
                case f:
                case C:
                case g:
                case s:
                  return x;
                default:
                  return F;
              }
          }
        case e:
          return F;
      }
    }
  }
  return Oe.ContextConsumer = o, Oe.ContextProvider = s, Oe.Element = t, Oe.ForwardRef = f, Oe.Fragment = r, Oe.Lazy = C, Oe.Memo = g, Oe.Portal = e, Oe.Profiler = a, Oe.StrictMode = n, Oe.Suspense = u, Oe.SuspenseList = h, Oe.isAsyncMode = function() {
    return !1;
  }, Oe.isConcurrentMode = function() {
    return !1;
  }, Oe.isContextConsumer = function(x) {
    return D(x) === o;
  }, Oe.isContextProvider = function(x) {
    return D(x) === s;
  }, Oe.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, Oe.isForwardRef = function(x) {
    return D(x) === f;
  }, Oe.isFragment = function(x) {
    return D(x) === r;
  }, Oe.isLazy = function(x) {
    return D(x) === C;
  }, Oe.isMemo = function(x) {
    return D(x) === g;
  }, Oe.isPortal = function(x) {
    return D(x) === e;
  }, Oe.isProfiler = function(x) {
    return D(x) === a;
  }, Oe.isStrictMode = function(x) {
    return D(x) === n;
  }, Oe.isSuspense = function(x) {
    return D(x) === u;
  }, Oe.isSuspenseList = function(x) {
    return D(x) === h;
  }, Oe.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === r || x === a || x === n || x === u || x === h || x === E || typeof x == "object" && x !== null && (x.$$typeof === C || x.$$typeof === g || x.$$typeof === s || x.$$typeof === o || x.$$typeof === f || x.$$typeof === S || x.getModuleId !== void 0);
  }, Oe.typeOf = D, Oe;
}
var Ne = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zi;
function gl() {
  return zi || (zi = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), o = Symbol.for("react.context"), i = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), S = !1, D = !1, x = !1, F = !1, M = !1, j;
    j = Symbol.for("react.module.reference");
    function U(z) {
      return !!(typeof z == "string" || typeof z == "function" || z === r || z === a || M || z === n || z === u || z === h || F || z === E || S || D || x || typeof z == "object" && z !== null && (z.$$typeof === C || z.$$typeof === g || z.$$typeof === s || z.$$typeof === o || z.$$typeof === f || z.$$typeof === j || z.getModuleId !== void 0));
    }
    function B(z) {
      if (typeof z == "object" && z !== null) {
        var Z = z.$$typeof;
        switch (Z) {
          case t:
            var ve = z.type;
            switch (ve) {
              case r:
              case a:
              case n:
              case u:
              case h:
                return ve;
              default:
                var le = ve && ve.$$typeof;
                switch (le) {
                  case i:
                  case o:
                  case f:
                  case C:
                  case g:
                  case s:
                    return le;
                  default:
                    return Z;
                }
            }
          case e:
            return Z;
        }
      }
    }
    var W = o, G = s, K = t, te = f, se = r, q = C, oe = g, I = e, d = a, m = n, y = u, w = h, A = !1, T = !1;
    function P(z) {
      return A || (A = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function p(z) {
      return T || (T = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function c(z) {
      return B(z) === o;
    }
    function b(z) {
      return B(z) === s;
    }
    function k(z) {
      return typeof z == "object" && z !== null && z.$$typeof === t;
    }
    function l(z) {
      return B(z) === f;
    }
    function v(z) {
      return B(z) === r;
    }
    function L(z) {
      return B(z) === C;
    }
    function _(z) {
      return B(z) === g;
    }
    function H(z) {
      return B(z) === e;
    }
    function Y(z) {
      return B(z) === a;
    }
    function $(z) {
      return B(z) === n;
    }
    function N(z) {
      return B(z) === u;
    }
    function he(z) {
      return B(z) === h;
    }
    Ne.ContextConsumer = W, Ne.ContextProvider = G, Ne.Element = K, Ne.ForwardRef = te, Ne.Fragment = se, Ne.Lazy = q, Ne.Memo = oe, Ne.Portal = I, Ne.Profiler = d, Ne.StrictMode = m, Ne.Suspense = y, Ne.SuspenseList = w, Ne.isAsyncMode = P, Ne.isConcurrentMode = p, Ne.isContextConsumer = c, Ne.isContextProvider = b, Ne.isElement = k, Ne.isForwardRef = l, Ne.isFragment = v, Ne.isLazy = L, Ne.isMemo = _, Ne.isPortal = H, Ne.isProfiler = Y, Ne.isStrictMode = $, Ne.isSuspense = N, Ne.isSuspenseList = he, Ne.isValidElementType = U, Ne.typeOf = B;
  }()), Ne;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = bl() : t.exports = gl();
})(ks);
function xl(t) {
  function e(c, b, k, l, v) {
    for (var L = 0, _ = 0, H = 0, Y = 0, $, N, he = 0, z = 0, Z, ve = Z = $ = 0, le = 0, ge = 0, lt = 0, me = 0, Ee = k.length, it = Ee - 1, ye, ie = "", ke = "", Se = "", Ce = "", st; le < Ee; ) {
      if (N = k.charCodeAt(le), le === it && _ + Y + H + L !== 0 && (_ !== 0 && (N = _ === 47 ? 10 : 47), Y = H = L = 0, Ee++, it++), _ + Y + H + L === 0) {
        if (le === it && (0 < ge && (ie = ie.replace(C, "")), 0 < ie.trim().length)) {
          switch (N) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              ie += k.charAt(le);
          }
          N = 59;
        }
        switch (N) {
          case 123:
            for (ie = ie.trim(), $ = ie.charCodeAt(0), Z = 1, me = ++le; le < Ee; ) {
              switch (N = k.charCodeAt(le)) {
                case 123:
                  Z++;
                  break;
                case 125:
                  Z--;
                  break;
                case 47:
                  switch (N = k.charCodeAt(le + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ve = le + 1; ve < it; ++ve)
                          switch (k.charCodeAt(ve)) {
                            case 47:
                              if (N === 42 && k.charCodeAt(ve - 1) === 42 && le + 2 !== ve) {
                                le = ve + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (N === 47) {
                                le = ve + 1;
                                break e;
                              }
                          }
                        le = ve;
                      }
                  }
                  break;
                case 91:
                  N++;
                case 40:
                  N++;
                case 34:
                case 39:
                  for (; le++ < it && k.charCodeAt(le) !== N; )
                    ;
              }
              if (Z === 0)
                break;
              le++;
            }
            switch (Z = k.substring(me, le), $ === 0 && ($ = (ie = ie.replace(g, "").trim()).charCodeAt(0)), $) {
              case 64:
                switch (0 < ge && (ie = ie.replace(C, "")), N = ie.charCodeAt(1), N) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ge = b;
                    break;
                  default:
                    ge = y;
                }
                if (Z = e(b, ge, Z, N, v + 1), me = Z.length, 0 < A && (ge = r(y, ie, lt), st = i(3, Z, ge, b, I, oe, me, N, v, l), ie = ge.join(""), st !== void 0 && (me = (Z = st.trim()).length) === 0 && (N = 0, Z = "")), 0 < me)
                  switch (N) {
                    case 115:
                      ie = ie.replace(W, o);
                    case 100:
                    case 109:
                    case 45:
                      Z = ie + "{" + Z + "}";
                      break;
                    case 107:
                      ie = ie.replace(M, "$1 $2"), Z = ie + "{" + Z + "}", Z = m === 1 || m === 2 && s("@" + Z, 3) ? "@-webkit-" + Z + "@" + Z : "@" + Z;
                      break;
                    default:
                      Z = ie + Z, l === 112 && (Z = (ke += Z, ""));
                  }
                else
                  Z = "";
                break;
              default:
                Z = e(b, r(b, ie, lt), Z, l, v + 1);
            }
            Se += Z, Z = lt = ge = ve = $ = 0, ie = "", N = k.charCodeAt(++le);
            break;
          case 125:
          case 59:
            if (ie = (0 < ge ? ie.replace(C, "") : ie).trim(), 1 < (me = ie.length))
              switch (ve === 0 && ($ = ie.charCodeAt(0), $ === 45 || 96 < $ && 123 > $) && (me = (ie = ie.replace(" ", ":")).length), 0 < A && (st = i(1, ie, b, c, I, oe, ke.length, l, v, l)) !== void 0 && (me = (ie = st.trim()).length) === 0 && (ie = "\0\0"), $ = ie.charCodeAt(0), N = ie.charCodeAt(1), $) {
                case 0:
                  break;
                case 64:
                  if (N === 105 || N === 99) {
                    Ce += ie + k.charAt(le);
                    break;
                  }
                default:
                  ie.charCodeAt(me - 1) !== 58 && (ke += a(ie, $, N, ie.charCodeAt(2)));
              }
            lt = ge = ve = $ = 0, ie = "", N = k.charCodeAt(++le);
        }
      }
      switch (N) {
        case 13:
        case 10:
          _ === 47 ? _ = 0 : 1 + $ === 0 && l !== 107 && 0 < ie.length && (ge = 1, ie += "\0"), 0 < A * P && i(0, ie, b, c, I, oe, ke.length, l, v, l), oe = 1, I++;
          break;
        case 59:
        case 125:
          if (_ + Y + H + L === 0) {
            oe++;
            break;
          }
        default:
          switch (oe++, ye = k.charAt(le), N) {
            case 9:
            case 32:
              if (Y + L + _ === 0)
                switch (he) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    ye = "";
                    break;
                  default:
                    N !== 32 && (ye = " ");
                }
              break;
            case 0:
              ye = "\\0";
              break;
            case 12:
              ye = "\\f";
              break;
            case 11:
              ye = "\\v";
              break;
            case 38:
              Y + _ + L === 0 && (ge = lt = 1, ye = "\f" + ye);
              break;
            case 108:
              if (Y + _ + L + d === 0 && 0 < ve)
                switch (le - ve) {
                  case 2:
                    he === 112 && k.charCodeAt(le - 3) === 58 && (d = he);
                  case 8:
                    z === 111 && (d = z);
                }
              break;
            case 58:
              Y + _ + L === 0 && (ve = le);
              break;
            case 44:
              _ + H + Y + L === 0 && (ge = 1, ye += "\r");
              break;
            case 34:
            case 39:
              _ === 0 && (Y = Y === N ? 0 : Y === 0 ? N : Y);
              break;
            case 91:
              Y + _ + H === 0 && L++;
              break;
            case 93:
              Y + _ + H === 0 && L--;
              break;
            case 41:
              Y + _ + L === 0 && H--;
              break;
            case 40:
              if (Y + _ + L === 0) {
                if ($ === 0)
                  switch (2 * he + 3 * z) {
                    case 533:
                      break;
                    default:
                      $ = 1;
                  }
                H++;
              }
              break;
            case 64:
              _ + H + Y + L + ve + Z === 0 && (Z = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Y + L + H))
                switch (_) {
                  case 0:
                    switch (2 * N + 3 * k.charCodeAt(le + 1)) {
                      case 235:
                        _ = 47;
                        break;
                      case 220:
                        me = le, _ = 42;
                    }
                    break;
                  case 42:
                    N === 47 && he === 42 && me + 2 !== le && (k.charCodeAt(me + 2) === 33 && (ke += k.substring(me, le + 1)), ye = "", _ = 0);
                }
          }
          _ === 0 && (ie += ye);
      }
      z = he, he = N, le++;
    }
    if (me = ke.length, 0 < me) {
      if (ge = b, 0 < A && (st = i(2, ke, ge, c, I, oe, me, l, v, l), st !== void 0 && (ke = st).length === 0))
        return Ce + ke + Se;
      if (ke = ge.join(",") + "{" + ke + "}", m * d !== 0) {
        switch (m !== 2 || s(ke, 2) || (d = 0), d) {
          case 111:
            ke = ke.replace(U, ":-moz-$1") + ke;
            break;
          case 112:
            ke = ke.replace(j, "::-webkit-input-$1") + ke.replace(j, "::-moz-$1") + ke.replace(j, ":-ms-input-$1") + ke;
        }
        d = 0;
      }
    }
    return Ce + ke + Se;
  }
  function r(c, b, k) {
    var l = b.trim().split(x);
    b = l;
    var v = l.length, L = c.length;
    switch (L) {
      case 0:
      case 1:
        var _ = 0;
        for (c = L === 0 ? "" : c[0] + " "; _ < v; ++_)
          b[_] = n(c, b[_], k).trim();
        break;
      default:
        var H = _ = 0;
        for (b = []; _ < v; ++_)
          for (var Y = 0; Y < L; ++Y)
            b[H++] = n(c[Y] + " ", l[_], k).trim();
    }
    return b;
  }
  function n(c, b, k) {
    var l = b.charCodeAt(0);
    switch (33 > l && (l = (b = b.trim()).charCodeAt(0)), l) {
      case 38:
        return b.replace(F, "$1" + c.trim());
      case 58:
        return c.trim() + b.replace(F, "$1" + c.trim());
      default:
        if (0 < 1 * k && 0 < b.indexOf("\f"))
          return b.replace(F, (c.charCodeAt(0) === 58 ? "" : "$1") + c.trim());
    }
    return c + b;
  }
  function a(c, b, k, l) {
    var v = c + ";", L = 2 * b + 3 * k + 4 * l;
    if (L === 944) {
      c = v.indexOf(":", 9) + 1;
      var _ = v.substring(c, v.length - 1).trim();
      return _ = v.substring(0, c).trim() + _ + ";", m === 1 || m === 2 && s(_, 1) ? "-webkit-" + _ + _ : _;
    }
    if (m === 0 || m === 2 && !s(v, 1))
      return v;
    switch (L) {
      case 1015:
        return v.charCodeAt(10) === 97 ? "-webkit-" + v + v : v;
      case 951:
        return v.charCodeAt(3) === 116 ? "-webkit-" + v + v : v;
      case 963:
        return v.charCodeAt(5) === 110 ? "-webkit-" + v + v : v;
      case 1009:
        if (v.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + v + v;
      case 978:
        return "-webkit-" + v + "-moz-" + v + v;
      case 1019:
      case 983:
        return "-webkit-" + v + "-moz-" + v + "-ms-" + v + v;
      case 883:
        if (v.charCodeAt(8) === 45)
          return "-webkit-" + v + v;
        if (0 < v.indexOf("image-set(", 11))
          return v.replace(q, "$1-webkit-$2") + v;
        break;
      case 932:
        if (v.charCodeAt(4) === 45)
          switch (v.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + v.replace("-grow", "") + "-webkit-" + v + "-ms-" + v.replace("grow", "positive") + v;
            case 115:
              return "-webkit-" + v + "-ms-" + v.replace("shrink", "negative") + v;
            case 98:
              return "-webkit-" + v + "-ms-" + v.replace("basis", "preferred-size") + v;
          }
        return "-webkit-" + v + "-ms-" + v + v;
      case 964:
        return "-webkit-" + v + "-ms-flex-" + v + v;
      case 1023:
        if (v.charCodeAt(8) !== 99)
          break;
        return _ = v.substring(v.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + _ + "-webkit-" + v + "-ms-flex-pack" + _ + v;
      case 1005:
        return S.test(v) ? v.replace(E, ":-webkit-") + v.replace(E, ":-moz-") + v : v;
      case 1e3:
        switch (_ = v.substring(13).trim(), b = _.indexOf("-") + 1, _.charCodeAt(0) + _.charCodeAt(b)) {
          case 226:
            _ = v.replace(B, "tb");
            break;
          case 232:
            _ = v.replace(B, "tb-rl");
            break;
          case 220:
            _ = v.replace(B, "lr");
            break;
          default:
            return v;
        }
        return "-webkit-" + v + "-ms-" + _ + v;
      case 1017:
        if (v.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (b = (v = c).length - 10, _ = (v.charCodeAt(b) === 33 ? v.substring(0, b) : v).substring(c.indexOf(":", 7) + 1).trim(), L = _.charCodeAt(0) + (_.charCodeAt(7) | 0)) {
          case 203:
            if (111 > _.charCodeAt(8))
              break;
          case 115:
            v = v.replace(_, "-webkit-" + _) + ";" + v;
            break;
          case 207:
          case 102:
            v = v.replace(_, "-webkit-" + (102 < L ? "inline-" : "") + "box") + ";" + v.replace(_, "-webkit-" + _) + ";" + v.replace(_, "-ms-" + _ + "box") + ";" + v;
        }
        return v + ";";
      case 938:
        if (v.charCodeAt(5) === 45)
          switch (v.charCodeAt(6)) {
            case 105:
              return _ = v.replace("-items", ""), "-webkit-" + v + "-webkit-box-" + _ + "-ms-flex-" + _ + v;
            case 115:
              return "-webkit-" + v + "-ms-flex-item-" + v.replace(K, "") + v;
            default:
              return "-webkit-" + v + "-ms-flex-line-pack" + v.replace("align-content", "").replace(K, "") + v;
          }
        break;
      case 973:
      case 989:
        if (v.charCodeAt(3) !== 45 || v.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (se.test(c) === !0)
          return (_ = c.substring(c.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(c.replace("stretch", "fill-available"), b, k, l).replace(":fill-available", ":stretch") : v.replace(_, "-webkit-" + _) + v.replace(_, "-moz-" + _.replace("fill-", "")) + v;
        break;
      case 962:
        if (v = "-webkit-" + v + (v.charCodeAt(5) === 102 ? "-ms-" + v : "") + v, k + l === 211 && v.charCodeAt(13) === 105 && 0 < v.indexOf("transform", 10))
          return v.substring(0, v.indexOf(";", 27) + 1).replace(D, "$1-webkit-$2") + v;
    }
    return v;
  }
  function s(c, b) {
    var k = c.indexOf(b === 1 ? ":" : "{"), l = c.substring(0, b !== 3 ? k : 10);
    return k = c.substring(k + 1, c.length - 1), T(b !== 2 ? l : l.replace(te, "$1"), k, b);
  }
  function o(c, b) {
    var k = a(b, b.charCodeAt(0), b.charCodeAt(1), b.charCodeAt(2));
    return k !== b + ";" ? k.replace(G, " or ($1)").substring(4) : "(" + b + ")";
  }
  function i(c, b, k, l, v, L, _, H, Y, $) {
    for (var N = 0, he = b, z; N < A; ++N)
      switch (z = w[N].call(h, c, he, k, l, v, L, _, H, Y, $)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          he = z;
      }
    if (he !== b)
      return he;
  }
  function f(c) {
    switch (c) {
      case void 0:
      case null:
        A = w.length = 0;
        break;
      default:
        if (typeof c == "function")
          w[A++] = c;
        else if (typeof c == "object")
          for (var b = 0, k = c.length; b < k; ++b)
            f(c[b]);
        else
          P = !!c | 0;
    }
    return f;
  }
  function u(c) {
    return c = c.prefix, c !== void 0 && (T = null, c ? typeof c != "function" ? m = 1 : (m = 2, T = c) : m = 0), u;
  }
  function h(c, b) {
    var k = c;
    if (33 > k.charCodeAt(0) && (k = k.trim()), p = k, k = [p], 0 < A) {
      var l = i(-1, b, k, k, I, oe, 0, 0, 0, 0);
      l !== void 0 && typeof l == "string" && (b = l);
    }
    var v = e(y, k, b, 0, 0);
    return 0 < A && (l = i(-2, v, k, k, I, oe, v.length, 0, 0, 0), l !== void 0 && (v = l)), p = "", d = 0, oe = I = 1, v;
  }
  var g = /^\0+/g, C = /[\0\r\f]/g, E = /: */g, S = /zoo|gra/, D = /([,: ])(transform)/g, x = /,\r+?/g, F = /([\t\r\n ])*\f?&/g, M = /@(k\w+)\s*(\S*)\s*/, j = /::(place)/g, U = /:(read-only)/g, B = /[svh]\w+-[tblr]{2}/, W = /\(\s*(.*)\s*\)/g, G = /([\s\S]*?);/g, K = /-self|flex-/g, te = /[^]*?(:[rp][el]a[\w-]+)[^]*/, se = /stretch|:\s*\w+\-(?:conte|avail)/, q = /([^-])(image-set\()/, oe = 1, I = 1, d = 0, m = 1, y = [], w = [], A = 0, T = null, P = 0, p = "";
  return h.use = f, h.set = u, t !== void 0 && u(t), h;
}
var yl = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function vl(t) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return e[r] === void 0 && (e[r] = t(r)), e[r];
  };
}
var Al = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, $i = /* @__PURE__ */ vl(
  function(t) {
    return Al.test(t) || t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) < 91;
  }
), _0 = { exports: {} }, Le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vi;
function wl() {
  if (Vi)
    return Le;
  Vi = 1;
  var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, o = t ? Symbol.for("react.provider") : 60109, i = t ? Symbol.for("react.context") : 60110, f = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, h = t ? Symbol.for("react.forward_ref") : 60112, g = t ? Symbol.for("react.suspense") : 60113, C = t ? Symbol.for("react.suspense_list") : 60120, E = t ? Symbol.for("react.memo") : 60115, S = t ? Symbol.for("react.lazy") : 60116, D = t ? Symbol.for("react.block") : 60121, x = t ? Symbol.for("react.fundamental") : 60117, F = t ? Symbol.for("react.responder") : 60118, M = t ? Symbol.for("react.scope") : 60119;
  function j(B) {
    if (typeof B == "object" && B !== null) {
      var W = B.$$typeof;
      switch (W) {
        case e:
          switch (B = B.type, B) {
            case f:
            case u:
            case n:
            case s:
            case a:
            case g:
              return B;
            default:
              switch (B = B && B.$$typeof, B) {
                case i:
                case h:
                case S:
                case E:
                case o:
                  return B;
                default:
                  return W;
              }
          }
        case r:
          return W;
      }
    }
  }
  function U(B) {
    return j(B) === u;
  }
  return Le.AsyncMode = f, Le.ConcurrentMode = u, Le.ContextConsumer = i, Le.ContextProvider = o, Le.Element = e, Le.ForwardRef = h, Le.Fragment = n, Le.Lazy = S, Le.Memo = E, Le.Portal = r, Le.Profiler = s, Le.StrictMode = a, Le.Suspense = g, Le.isAsyncMode = function(B) {
    return U(B) || j(B) === f;
  }, Le.isConcurrentMode = U, Le.isContextConsumer = function(B) {
    return j(B) === i;
  }, Le.isContextProvider = function(B) {
    return j(B) === o;
  }, Le.isElement = function(B) {
    return typeof B == "object" && B !== null && B.$$typeof === e;
  }, Le.isForwardRef = function(B) {
    return j(B) === h;
  }, Le.isFragment = function(B) {
    return j(B) === n;
  }, Le.isLazy = function(B) {
    return j(B) === S;
  }, Le.isMemo = function(B) {
    return j(B) === E;
  }, Le.isPortal = function(B) {
    return j(B) === r;
  }, Le.isProfiler = function(B) {
    return j(B) === s;
  }, Le.isStrictMode = function(B) {
    return j(B) === a;
  }, Le.isSuspense = function(B) {
    return j(B) === g;
  }, Le.isValidElementType = function(B) {
    return typeof B == "string" || typeof B == "function" || B === n || B === u || B === s || B === a || B === g || B === C || typeof B == "object" && B !== null && (B.$$typeof === S || B.$$typeof === E || B.$$typeof === o || B.$$typeof === i || B.$$typeof === h || B.$$typeof === x || B.$$typeof === F || B.$$typeof === M || B.$$typeof === D);
  }, Le.typeOf = j, Le;
}
var je = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gi;
function Cl() {
  return Gi || (Gi = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, o = t ? Symbol.for("react.provider") : 60109, i = t ? Symbol.for("react.context") : 60110, f = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, h = t ? Symbol.for("react.forward_ref") : 60112, g = t ? Symbol.for("react.suspense") : 60113, C = t ? Symbol.for("react.suspense_list") : 60120, E = t ? Symbol.for("react.memo") : 60115, S = t ? Symbol.for("react.lazy") : 60116, D = t ? Symbol.for("react.block") : 60121, x = t ? Symbol.for("react.fundamental") : 60117, F = t ? Symbol.for("react.responder") : 60118, M = t ? Symbol.for("react.scope") : 60119;
    function j(N) {
      return typeof N == "string" || typeof N == "function" || N === n || N === u || N === s || N === a || N === g || N === C || typeof N == "object" && N !== null && (N.$$typeof === S || N.$$typeof === E || N.$$typeof === o || N.$$typeof === i || N.$$typeof === h || N.$$typeof === x || N.$$typeof === F || N.$$typeof === M || N.$$typeof === D);
    }
    function U(N) {
      if (typeof N == "object" && N !== null) {
        var he = N.$$typeof;
        switch (he) {
          case e:
            var z = N.type;
            switch (z) {
              case f:
              case u:
              case n:
              case s:
              case a:
              case g:
                return z;
              default:
                var Z = z && z.$$typeof;
                switch (Z) {
                  case i:
                  case h:
                  case S:
                  case E:
                  case o:
                    return Z;
                  default:
                    return he;
                }
            }
          case r:
            return he;
        }
      }
    }
    var B = f, W = u, G = i, K = o, te = e, se = h, q = n, oe = S, I = E, d = r, m = s, y = a, w = g, A = !1;
    function T(N) {
      return A || (A = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), P(N) || U(N) === f;
    }
    function P(N) {
      return U(N) === u;
    }
    function p(N) {
      return U(N) === i;
    }
    function c(N) {
      return U(N) === o;
    }
    function b(N) {
      return typeof N == "object" && N !== null && N.$$typeof === e;
    }
    function k(N) {
      return U(N) === h;
    }
    function l(N) {
      return U(N) === n;
    }
    function v(N) {
      return U(N) === S;
    }
    function L(N) {
      return U(N) === E;
    }
    function _(N) {
      return U(N) === r;
    }
    function H(N) {
      return U(N) === s;
    }
    function Y(N) {
      return U(N) === a;
    }
    function $(N) {
      return U(N) === g;
    }
    je.AsyncMode = B, je.ConcurrentMode = W, je.ContextConsumer = G, je.ContextProvider = K, je.Element = te, je.ForwardRef = se, je.Fragment = q, je.Lazy = oe, je.Memo = I, je.Portal = d, je.Profiler = m, je.StrictMode = y, je.Suspense = w, je.isAsyncMode = T, je.isConcurrentMode = P, je.isContextConsumer = p, je.isContextProvider = c, je.isElement = b, je.isForwardRef = k, je.isFragment = l, je.isLazy = v, je.isMemo = L, je.isPortal = _, je.isProfiler = H, je.isStrictMode = Y, je.isSuspense = $, je.isValidElementType = j, je.typeOf = U;
  }()), je;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = wl() : t.exports = Cl();
})(_0);
var ti = _0.exports, El = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, Il = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, kl = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, T0 = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ri = {};
ri[ti.ForwardRef] = kl;
ri[ti.Memo] = T0;
function Ki(t) {
  return ti.isMemo(t) ? T0 : ri[t.$$typeof] || El;
}
var Sl = Object.defineProperty, Dl = Object.getOwnPropertyNames, qi = Object.getOwnPropertySymbols, Bl = Object.getOwnPropertyDescriptor, Fl = Object.getPrototypeOf, Yi = Object.prototype;
function M0(t, e, r) {
  if (typeof e != "string") {
    if (Yi) {
      var n = Fl(e);
      n && n !== Yi && M0(t, n, r);
    }
    var a = Dl(e);
    qi && (a = a.concat(qi(e)));
    for (var s = Ki(t), o = Ki(e), i = 0; i < a.length; ++i) {
      var f = a[i];
      if (!Il[f] && !(r && r[f]) && !(o && o[f]) && !(s && s[f])) {
        var u = Bl(e, f);
        try {
          Sl(t, f, u);
        } catch {
        }
      }
    }
  }
  return t;
}
var Rl = M0;
function Cr() {
  return (Cr = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }).apply(this, arguments);
}
var Xi = function(t, e) {
  for (var r = [t[0]], n = 0, a = e.length; n < a; n += 1)
    r.push(e[n], t[n + 1]);
  return r;
}, ko = function(t) {
  return t !== null && typeof t == "object" && (t.toString ? t.toString() : Object.prototype.toString.call(t)) === "[object Object]" && !ks.exports.typeOf(t);
}, hs = Object.freeze([]), nn = Object.freeze({});
function Hn(t) {
  return typeof t == "function";
}
function So(t) {
  return process.env.NODE_ENV !== "production" && typeof t == "string" && t || t.displayName || t.name || "Component";
}
function ni(t) {
  return t && typeof t.styledComponentId == "string";
}
var zn = typeof process < "u" && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", ai = typeof window < "u" && "HTMLElement" in window, _l = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Tl = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
` } : {};
function Ml() {
  for (var t = arguments.length <= 0 ? void 0 : arguments[0], e = [], r = 1, n = arguments.length; r < n; r += 1)
    e.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return e.forEach(function(a) {
    t = t.replace(/%[a-z]/, a);
  }), t;
}
function zr(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + t + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(Ml.apply(void 0, [Tl[t]].concat(r)).trim());
}
var Ul = function() {
  function t(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var e = t.prototype;
  return e.indexOfGroup = function(r) {
    for (var n = 0, a = 0; a < r; a++)
      n += this.groupSizes[a];
    return n;
  }, e.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var a = this.groupSizes, s = a.length, o = s; r >= o; )
        (o <<= 1) < 0 && zr(16, "" + r);
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(a), this.length = o;
      for (var i = s; i < o; i++)
        this.groupSizes[i] = 0;
    }
    for (var f = this.indexOfGroup(r + 1), u = 0, h = n.length; u < h; u++)
      this.tag.insertRule(f, n[u]) && (this.groupSizes[r]++, f++);
  }, e.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], a = this.indexOfGroup(r), s = a + n;
      this.groupSizes[r] = 0;
      for (var o = a; o < s; o++)
        this.tag.deleteRule(a);
    }
  }, e.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0)
      return n;
    for (var a = this.groupSizes[r], s = this.indexOfGroup(r), o = s + a, i = s; i < o; i++)
      n += this.tag.getRule(i) + `/*!sc*/
`;
    return n;
  }, t;
}(), ns = /* @__PURE__ */ new Map(), ms = /* @__PURE__ */ new Map(), ba = 1, Ga = function(t) {
  if (ns.has(t))
    return ns.get(t);
  for (; ms.has(ba); )
    ba++;
  var e = ba++;
  return process.env.NODE_ENV !== "production" && ((0 | e) < 0 || e > 1 << 30) && zr(16, "" + e), ns.set(t, e), ms.set(e, t), e;
}, Pl = function(t) {
  return ms.get(t);
}, Ol = function(t, e) {
  e >= ba && (ba = e + 1), ns.set(t, e), ms.set(e, t);
}, Nl = "style[" + zn + '][data-styled-version="5.3.6"]', Ll = new RegExp("^" + zn + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), jl = function(t, e, r) {
  for (var n, a = r.split(","), s = 0, o = a.length; s < o; s++)
    (n = a[s]) && t.registerName(e, n);
}, Wl = function(t, e) {
  for (var r = (e.textContent || "").split(`/*!sc*/
`), n = [], a = 0, s = r.length; a < s; a++) {
    var o = r[a].trim();
    if (o) {
      var i = o.match(Ll);
      if (i) {
        var f = 0 | parseInt(i[1], 10), u = i[2];
        f !== 0 && (Ol(u, f), jl(t, u, i[3]), t.getTag().insertRules(f, n)), n.length = 0;
      } else
        n.push(o);
    }
  }
}, Hl = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, U0 = function(t) {
  var e = document.head, r = t || e, n = document.createElement("style"), a = function(i) {
    for (var f = i.childNodes, u = f.length; u >= 0; u--) {
      var h = f[u];
      if (h && h.nodeType === 1 && h.hasAttribute(zn))
        return h;
    }
  }(r), s = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(zn, "active"), n.setAttribute("data-styled-version", "5.3.6");
  var o = Hl();
  return o && n.setAttribute("nonce", o), r.insertBefore(n, s), n;
}, zl = function() {
  function t(r) {
    var n = this.element = U0(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet)
        return a.sheet;
      for (var s = document.styleSheets, o = 0, i = s.length; o < i; o++) {
        var f = s[o];
        if (f.ownerNode === a)
          return f;
      }
      zr(17);
    }(n), this.length = 0;
  }
  var e = t.prototype;
  return e.insertRule = function(r, n) {
    try {
      return this.sheet.insertRule(n, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, e.getRule = function(r) {
    var n = this.sheet.cssRules[r];
    return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
  }, t;
}(), $l = function() {
  function t(r) {
    var n = this.element = U0(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var e = t.prototype;
  return e.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var a = document.createTextNode(n), s = this.nodes[r];
      return this.element.insertBefore(a, s || null), this.length++, !0;
    }
    return !1;
  }, e.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, e.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, t;
}(), Vl = function() {
  function t(r) {
    this.rules = [], this.length = 0;
  }
  var e = t.prototype;
  return e.insertRule = function(r, n) {
    return r <= this.length && (this.rules.splice(r, 0, n), this.length++, !0);
  }, e.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, e.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, t;
}(), Ji = ai, Gl = { isServer: !ai, useCSSOMInjection: !_l }, P0 = function() {
  function t(r, n, a) {
    r === void 0 && (r = nn), n === void 0 && (n = {}), this.options = Cr({}, Gl, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && ai && Ji && (Ji = !1, function(s) {
      for (var o = document.querySelectorAll(Nl), i = 0, f = o.length; i < f; i++) {
        var u = o[i];
        u && u.getAttribute(zn) !== "active" && (Wl(s, u), u.parentNode && u.parentNode.removeChild(u));
      }
    }(this));
  }
  t.registerId = function(r) {
    return Ga(r);
  };
  var e = t.prototype;
  return e.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new t(Cr({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, e.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, e.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, s = n.useCSSOMInjection, o = n.target, r = a ? new Vl(o) : s ? new zl(o) : new $l(o), new Ul(r)));
    var r, n, a, s, o;
  }, e.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, e.registerName = function(r, n) {
    if (Ga(r), this.names.has(r))
      this.names.get(r).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(r, a);
    }
  }, e.insertRules = function(r, n, a) {
    this.registerName(r, n), this.getTag().insertRules(Ga(r), a);
  }, e.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, e.clearRules = function(r) {
    this.getTag().clearGroup(Ga(r)), this.clearNames(r);
  }, e.clearTag = function() {
    this.tag = void 0;
  }, e.toString = function() {
    return function(r) {
      for (var n = r.getTag(), a = n.length, s = "", o = 0; o < a; o++) {
        var i = Pl(o);
        if (i !== void 0) {
          var f = r.names.get(i), u = n.getGroup(o);
          if (f && u && f.size) {
            var h = zn + ".g" + o + '[id="' + i + '"]', g = "";
            f !== void 0 && f.forEach(function(C) {
              C.length > 0 && (g += C + ",");
            }), s += "" + u + h + '{content:"' + g + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, t;
}(), Kl = /(a)(d)/gi, Zi = function(t) {
  return String.fromCharCode(t + (t > 25 ? 39 : 97));
};
function Do(t) {
  var e, r = "";
  for (e = Math.abs(t); e > 52; e = e / 52 | 0)
    r = Zi(e % 52) + r;
  return (Zi(e % 52) + r).replace(Kl, "$1-$2");
}
var hn = function(t, e) {
  for (var r = e.length; r; )
    t = 33 * t ^ e.charCodeAt(--r);
  return t;
}, O0 = function(t) {
  return hn(5381, t);
};
function ql(t) {
  for (var e = 0; e < t.length; e += 1) {
    var r = t[e];
    if (Hn(r) && !ni(r))
      return !1;
  }
  return !0;
}
var Yl = O0("5.3.6"), Xl = function() {
  function t(e, r, n) {
    this.rules = e, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && ql(e), this.componentId = r, this.baseHash = hn(Yl, r), this.baseStyle = n, P0.registerId(r);
  }
  return t.prototype.generateAndInjectStyles = function(e, r, n) {
    var a = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(e, r, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId))
        s.push(this.staticRulesId);
      else {
        var o = $n(this.rules, e, r, n).join(""), i = Do(hn(this.baseHash, o) >>> 0);
        if (!r.hasNameForId(a, i)) {
          var f = n(o, "." + i, void 0, a);
          r.insertRules(a, i, f);
        }
        s.push(i), this.staticRulesId = i;
      }
    else {
      for (var u = this.rules.length, h = hn(this.baseHash, n.hash), g = "", C = 0; C < u; C++) {
        var E = this.rules[C];
        if (typeof E == "string")
          g += E, process.env.NODE_ENV !== "production" && (h = hn(h, E + C));
        else if (E) {
          var S = $n(E, e, r, n), D = Array.isArray(S) ? S.join("") : S;
          h = hn(h, D + C), g += D;
        }
      }
      if (g) {
        var x = Do(h >>> 0);
        if (!r.hasNameForId(a, x)) {
          var F = n(g, "." + x, void 0, a);
          r.insertRules(a, x, F);
        }
        s.push(x);
      }
    }
    return s.join(" ");
  }, t;
}(), Jl = /^\s*\/\/.*$/gm, Zl = [":", "[", ".", "#"];
function Ql(t) {
  var e, r, n, a, s = t === void 0 ? nn : t, o = s.options, i = o === void 0 ? nn : o, f = s.plugins, u = f === void 0 ? hs : f, h = new xl(i), g = [], C = function(D) {
    function x(F) {
      if (F)
        try {
          D(F + "}");
        } catch {
        }
    }
    return function(F, M, j, U, B, W, G, K, te, se) {
      switch (F) {
        case 1:
          if (te === 0 && M.charCodeAt(0) === 64)
            return D(M + ";"), "";
          break;
        case 2:
          if (K === 0)
            return M + "/*|*/";
          break;
        case 3:
          switch (K) {
            case 102:
            case 112:
              return D(j[0] + M), "";
            default:
              return M + (se === 0 ? "/*|*/" : "");
          }
        case -2:
          M.split("/*|*/}").forEach(x);
      }
    };
  }(function(D) {
    g.push(D);
  }), E = function(D, x, F) {
    return x === 0 && Zl.indexOf(F[r.length]) !== -1 || F.match(a) ? D : "." + e;
  };
  function S(D, x, F, M) {
    M === void 0 && (M = "&");
    var j = D.replace(Jl, ""), U = x && F ? F + " " + x + " { " + j + " }" : j;
    return e = M, r = x, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), h(F || !x ? "" : x, U);
  }
  return h.use([].concat(u, [function(D, x, F) {
    D === 2 && F.length && F[0].lastIndexOf(r) > 0 && (F[0] = F[0].replace(n, E));
  }, C, function(D) {
    if (D === -2) {
      var x = g;
      return g = [], x;
    }
  }])), S.hash = u.length ? u.reduce(function(D, x) {
    return x.name || zr(15), hn(D, x.name);
  }, 5381).toString() : "", S;
}
var N0 = Rr.createContext();
N0.Consumer;
var L0 = Rr.createContext(), e1 = (L0.Consumer, new P0()), Bo = Ql();
function t1() {
  return dn(N0) || e1;
}
function r1() {
  return dn(L0) || Bo;
}
var j0 = function() {
  function t(e, r) {
    var n = this;
    this.inject = function(a, s) {
      s === void 0 && (s = Bo);
      var o = n.name + s.hash;
      a.hasNameForId(n.id, o) || a.insertRules(n.id, o, s(n.rules, o, "@keyframes"));
    }, this.toString = function() {
      return zr(12, String(n.name));
    }, this.name = e, this.id = "sc-keyframes-" + e, this.rules = r;
  }
  return t.prototype.getName = function(e) {
    return e === void 0 && (e = Bo), this.name + e.hash;
  }, t;
}(), n1 = /([A-Z])/, a1 = /([A-Z])/g, s1 = /^ms-/, o1 = function(t) {
  return "-" + t.toLowerCase();
};
function Qi(t) {
  return n1.test(t) ? t.replace(a1, o1).replace(s1, "-ms-") : t;
}
var ec = function(t) {
  return t == null || t === !1 || t === "";
};
function $n(t, e, r, n) {
  if (Array.isArray(t)) {
    for (var a, s = [], o = 0, i = t.length; o < i; o += 1)
      (a = $n(t[o], e, r, n)) !== "" && (Array.isArray(a) ? s.push.apply(s, a) : s.push(a));
    return s;
  }
  if (ec(t))
    return "";
  if (ni(t))
    return "." + t.styledComponentId;
  if (Hn(t)) {
    if (typeof (u = t) != "function" || u.prototype && u.prototype.isReactComponent || !e)
      return t;
    var f = t(e);
    return process.env.NODE_ENV !== "production" && ks.exports.isElement(f) && console.warn(So(t) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), $n(f, e, r, n);
  }
  var u;
  return t instanceof j0 ? r ? (t.inject(r, n), t.getName(n)) : t : ko(t) ? function h(g, C) {
    var E, S, D = [];
    for (var x in g)
      g.hasOwnProperty(x) && !ec(g[x]) && (Array.isArray(g[x]) && g[x].isCss || Hn(g[x]) ? D.push(Qi(x) + ":", g[x], ";") : ko(g[x]) ? D.push.apply(D, h(g[x], x)) : D.push(Qi(x) + ": " + (E = x, (S = g[x]) == null || typeof S == "boolean" || S === "" ? "" : typeof S != "number" || S === 0 || E in yl ? String(S).trim() : S + "px") + ";"));
    return C ? [C + " {"].concat(D, ["}"]) : D;
  }(t) : t.toString();
}
var tc = function(t) {
  return Array.isArray(t) && (t.isCss = !0), t;
};
function Ss(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  return Hn(t) || ko(t) ? tc($n(Xi(hs, [t].concat(r)))) : r.length === 0 && t.length === 1 && typeof t[0] == "string" ? t : tc($n(Xi(t, r)));
}
var rc = /invalid hook call/i, Ka = /* @__PURE__ */ new Set(), i1 = function(t, e) {
  if (process.env.NODE_ENV !== "production") {
    var r = "The component " + t + (e ? ' with the id of "' + e + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var a = !0;
      console.error = function(s) {
        if (rc.test(s))
          a = !1, Ka.delete(r);
        else {
          for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), f = 1; f < o; f++)
            i[f - 1] = arguments[f];
          n.apply(void 0, [s].concat(i));
        }
      }, dr(), a && !Ka.has(r) && (console.warn(r), Ka.add(r));
    } catch (s) {
      rc.test(s.message) && Ka.delete(r);
    } finally {
      console.error = n;
    }
  }
}, c1 = function(t, e, r) {
  return r === void 0 && (r = nn), t.theme !== r.theme && t.theme || e || r.theme;
}, d1 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, f1 = /(^-|-$)/g;
function ro(t) {
  return t.replace(d1, "-").replace(f1, "");
}
var W0 = function(t) {
  return Do(O0(t) >>> 0);
};
function qa(t) {
  return typeof t == "string" && (process.env.NODE_ENV === "production" || t.charAt(0) === t.charAt(0).toLowerCase());
}
var Fo = function(t) {
  return typeof t == "function" || typeof t == "object" && t !== null && !Array.isArray(t);
}, l1 = function(t) {
  return t !== "__proto__" && t !== "constructor" && t !== "prototype";
};
function u1(t, e, r) {
  var n = t[r];
  Fo(e) && Fo(n) ? H0(n, e) : t[r] = e;
}
function H0(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  for (var a = 0, s = r; a < s.length; a++) {
    var o = s[a];
    if (Fo(o))
      for (var i in o)
        l1(i) && u1(t, o[i], i);
  }
  return t;
}
var Ca = Rr.createContext();
Ca.Consumer;
function h1(t) {
  var e = dn(Ca), r = ea(function() {
    return function(n, a) {
      if (!n)
        return zr(14);
      if (Hn(n)) {
        var s = n(a);
        return process.env.NODE_ENV === "production" || s !== null && !Array.isArray(s) && typeof s == "object" ? s : zr(7);
      }
      return Array.isArray(n) || typeof n != "object" ? zr(8) : a ? Cr({}, a, {}, n) : n;
    }(t.theme, e);
  }, [t.theme, e]);
  return t.children ? Rr.createElement(Ca.Provider, { value: r }, t.children) : null;
}
var no = {};
function z0(t, e, r) {
  var n = ni(t), a = !qa(t), s = e.attrs, o = s === void 0 ? hs : s, i = e.componentId, f = i === void 0 ? function(M, j) {
    var U = typeof M != "string" ? "sc" : ro(M);
    no[U] = (no[U] || 0) + 1;
    var B = U + "-" + W0("5.3.6" + U + no[U]);
    return j ? j + "-" + B : B;
  }(e.displayName, e.parentComponentId) : i, u = e.displayName, h = u === void 0 ? function(M) {
    return qa(M) ? "styled." + M : "Styled(" + So(M) + ")";
  }(t) : u, g = e.displayName && e.componentId ? ro(e.displayName) + "-" + e.componentId : e.componentId || f, C = n && t.attrs ? Array.prototype.concat(t.attrs, o).filter(Boolean) : o, E = e.shouldForwardProp;
  n && t.shouldForwardProp && (E = e.shouldForwardProp ? function(M, j, U) {
    return t.shouldForwardProp(M, j, U) && e.shouldForwardProp(M, j, U);
  } : t.shouldForwardProp);
  var S, D = new Xl(r, g, n ? t.componentStyle : void 0), x = D.isStatic && o.length === 0, F = function(M, j) {
    return function(U, B, W, G) {
      var K = U.attrs, te = U.componentStyle, se = U.defaultProps, q = U.foldedComponentIds, oe = U.shouldForwardProp, I = U.styledComponentId, d = U.target;
      process.env.NODE_ENV !== "production" && Wi(I);
      var m = function(l, v, L) {
        l === void 0 && (l = nn);
        var _ = Cr({}, v, { theme: l }), H = {};
        return L.forEach(function(Y) {
          var $, N, he, z = Y;
          for ($ in Hn(z) && (z = z(_)), z)
            _[$] = H[$] = $ === "className" ? (N = H[$], he = z[$], N && he ? N + " " + he : N || he) : z[$];
        }), [_, H];
      }(c1(B, dn(Ca), se) || nn, B, K), y = m[0], w = m[1], A = function(l, v, L, _) {
        var H = t1(), Y = r1(), $ = v ? l.generateAndInjectStyles(nn, H, Y) : l.generateAndInjectStyles(L, H, Y);
        return process.env.NODE_ENV !== "production" && Wi($), process.env.NODE_ENV !== "production" && !v && _ && _($), $;
      }(te, G, y, process.env.NODE_ENV !== "production" ? U.warnTooManyClasses : void 0), T = W, P = w.$as || B.$as || w.as || B.as || d, p = qa(P), c = w !== B ? Cr({}, B, {}, w) : B, b = {};
      for (var k in c)
        k[0] !== "$" && k !== "as" && (k === "forwardedAs" ? b.as = c[k] : (oe ? oe(k, $i, P) : !p || $i(k)) && (b[k] = c[k]));
      return B.style && w.style !== B.style && (b.style = Cr({}, B.style, {}, w.style)), b.className = Array.prototype.concat(q, I, A !== I ? A : null, B.className, w.className).filter(Boolean).join(" "), b.ref = T, dl(P, b);
    }(S, M, j, x);
  };
  return F.displayName = h, (S = Rr.forwardRef(F)).attrs = C, S.componentStyle = D, S.displayName = h, S.shouldForwardProp = E, S.foldedComponentIds = n ? Array.prototype.concat(t.foldedComponentIds, t.styledComponentId) : hs, S.styledComponentId = g, S.target = n ? t.target : t, S.withComponent = function(M) {
    var j = e.componentId, U = function(W, G) {
      if (W == null)
        return {};
      var K, te, se = {}, q = Object.keys(W);
      for (te = 0; te < q.length; te++)
        K = q[te], G.indexOf(K) >= 0 || (se[K] = W[K]);
      return se;
    }(e, ["componentId"]), B = j && j + "-" + (qa(M) ? M : ro(So(M)));
    return z0(M, Cr({}, U, { attrs: C, componentId: B }), r);
  }, Object.defineProperty(S, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(M) {
    this._foldedDefaultProps = n ? H0({}, t.defaultProps, M) : M;
  } }), process.env.NODE_ENV !== "production" && (i1(h, g), S.warnTooManyClasses = function(M, j) {
    var U = {}, B = !1;
    return function(W) {
      if (!B && (U[W] = !0, Object.keys(U).length >= 200)) {
        var G = j ? ' with the id of "' + j + '"' : "";
        console.warn("Over 200 classes were generated for component " + M + G + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), B = !0, U = {};
      }
    };
  }(h, g)), S.toString = function() {
    return "." + S.styledComponentId;
  }, a && Rl(S, t, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), S;
}
var Ro = function(t) {
  return function e(r, n, a) {
    if (a === void 0 && (a = nn), !ks.exports.isValidElementType(n))
      return zr(1, String(n));
    var s = function() {
      return r(n, a, Ss.apply(void 0, arguments));
    };
    return s.withConfig = function(o) {
      return e(r, n, Cr({}, a, {}, o));
    }, s.attrs = function(o) {
      return e(r, n, Cr({}, a, { attrs: Array.prototype.concat(a.attrs, o).filter(Boolean) }));
    }, s;
  }(z0, t);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(t) {
  Ro[t] = Ro(t);
});
function si(t) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  var a = Ss.apply(void 0, [t].concat(r)).join(""), s = W0(a);
  return new j0(s, a);
}
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const J = Ro, m1 = {
  text: "#212121",
  subText: "#979797",
  primary: "#F1FFEE",
  dialog: "#EAFCE6",
  secondary: "#FFE3CA",
  interactive: "#FFFFFF",
  stroke: "#FF9F4A",
  accent: "#FF9F4A",
  success: "#189470",
  warning: "#FF9901",
  error: "#F84242",
  fontFamily: "Work Sans",
  borderRadius: "10px",
  buttonRadius: "10px",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.04)"
}, p1 = (t) => /* @__PURE__ */ ee.createElement("svg", { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ ee.createElement("path", { d: "M2.5 15C2.5 15.4583 2.875 15.8333 3.33333 15.8333H7.5V14.1667H3.33333C2.875 14.1667 2.5 14.5417 2.5 15ZM2.5 5C2.5 5.45833 2.875 5.83333 3.33333 5.83333H10.8333V4.16667H3.33333C2.875 4.16667 2.5 4.54167 2.5 5ZM10.8333 16.6667V15.8333H16.6667C17.125 15.8333 17.5 15.4583 17.5 15C17.5 14.5417 17.125 14.1667 16.6667 14.1667H10.8333V13.3333C10.8333 12.875 10.4583 12.5 10 12.5C9.54167 12.5 9.16667 12.875 9.16667 13.3333V16.6667C9.16667 17.125 9.54167 17.5 10 17.5C10.4583 17.5 10.8333 17.125 10.8333 16.6667ZM5.83333 8.33333V9.16667H3.33333C2.875 9.16667 2.5 9.54167 2.5 10C2.5 10.4583 2.875 10.8333 3.33333 10.8333H5.83333V11.6667C5.83333 12.125 6.20833 12.5 6.66667 12.5C7.125 12.5 7.5 12.125 7.5 11.6667V8.33333C7.5 7.875 7.125 7.5 6.66667 7.5C6.20833 7.5 5.83333 7.875 5.83333 8.33333ZM17.5 10C17.5 9.54167 17.125 9.16667 16.6667 9.16667H9.16667V10.8333H16.6667C17.125 10.8333 17.5 10.4583 17.5 10ZM13.3333 7.5C13.7917 7.5 14.1667 7.125 14.1667 6.66667V5.83333H16.6667C17.125 5.83333 17.5 5.45833 17.5 5C17.5 4.54167 17.125 4.16667 16.6667 4.16667H14.1667V3.33333C14.1667 2.875 13.7917 2.5 13.3333 2.5C12.875 2.5 12.5 2.875 12.5 3.33333V6.66667C12.5 7.125 12.875 7.5 13.3333 7.5Z", fill: "currentColor" })), nc = (t) => /* @__PURE__ */ ee.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ ee.createElement("path", { d: "M6.66667 10.6667V5.33333C6.66667 4.6 7.26 4 8 4H14V3.33333C14 2.6 13.4 2 12.6667 2H3.33333C2.59333 2 2 2.6 2 3.33333V12.6667C2 13.4 2.59333 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V12H8C7.26 12 6.66667 11.4 6.66667 10.6667ZM8.66667 5.33333C8.3 5.33333 8 5.63333 8 6V10C8 10.3667 8.3 10.6667 8.66667 10.6667H14.6667V5.33333H8.66667ZM10.6667 9C10.1133 9 9.66667 8.55333 9.66667 8C9.66667 7.44667 10.1133 7 10.6667 7C11.22 7 11.6667 7.44667 11.6667 8C11.6667 8.55333 11.22 9 10.6667 9Z", fill: "currentColor" })), _o = (t) => /* @__PURE__ */ ee.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ ee.createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z", fill: "currentColor" })), b1 = (t) => /* @__PURE__ */ ee.createElement("svg", { width: 24, height: 24, transform: "none", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ ee.createElement("path", { d: "M12.14 6.13978L9.34997 3.35978C9.14997 3.16978 8.83997 3.16978 8.63997 3.35978L5.84997 6.13978C5.52997 6.44978 5.75997 6.98978 6.19997 6.98978L7.99997 6.98978L7.99997 12.9998C7.99997 13.5498 8.44997 13.9998 8.99997 13.9998C9.54997 13.9998 9.99997 13.5498 9.99997 12.9998L9.99997 6.98978L11.79 6.98978C12.24 6.98978 12.46 6.44978 12.14 6.13978ZM15.35 20.6498L18.14 17.8698C18.46 17.5598 18.23 17.0198 17.79 17.0198L16 17.0198L16 10.9998C16 10.4498 15.55 9.99979 15 9.99979C14.45 9.99979 14 10.4498 14 10.9998L14 17.0098L12.21 17.0098C11.76 17.0098 11.54 17.5498 11.86 17.8598L14.65 20.6398C14.84 20.8398 15.16 20.8398 15.35 20.6498Z", fill: "currentColor" })), g1 = (t) => /* @__PURE__ */ ee.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ ee.createElement("g", { clipPath: "url(#clip0_1036_5139)" }, /* @__PURE__ */ ee.createElement("path", { d: "M10.0833 3.41667L11.7499 5.08334L10.0833 6.75001", stroke: "#979797", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ ee.createElement("path", { d: "M4.25 7.58333V6.74999C4.25 6.30797 4.42559 5.88404 4.73816 5.57148C5.05072 5.25892 5.47464 5.08333 5.91667 5.08333H11.75", stroke: "#979797", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ ee.createElement("path", { d: "M5.91667 12.5833L4.25 10.9167L5.91667 9.25", stroke: "#979797", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ ee.createElement("path", { d: "M11.75 8.41667V9.25001C11.75 9.69203 11.5744 10.116 11.2618 10.4285C10.9493 10.7411 10.5254 10.9167 10.0833 10.9167H4.25", stroke: "#979797", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })), /* @__PURE__ */ ee.createElement("defs", null, /* @__PURE__ */ ee.createElement("clipPath", { id: "clip0_1036_5139" }, /* @__PURE__ */ ee.createElement("rect", { width: 10, height: 10, fill: "white", transform: "translate(3 3)" })))), $0 = (t) => /* @__PURE__ */ ee.createElement("svg", { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ ee.createElement("g", { clipPath: "url(#clip0_268_44772)" }, /* @__PURE__ */ ee.createElement("path", { d: "M13.85 2.49155C13.4417 2.08322 12.7833 2.08322 12.375 2.49155L5.44999 9.41655C5.12499 9.74155 5.12499 10.2666 5.44999 10.5916L12.375 17.5166C12.7833 17.9249 13.4417 17.9249 13.85 17.5166C14.2583 17.1082 14.2583 16.4499 13.85 16.0416L7.81665 9.99989L13.8583 3.95822C14.2583 3.55822 14.2583 2.89155 13.85 2.49155Z", fill: "currentColor" })), /* @__PURE__ */ ee.createElement("defs", null, /* @__PURE__ */ ee.createElement("clipPath", { id: "clip0_268_44772" }, /* @__PURE__ */ ee.createElement("rect", { width: 20, height: 20, fill: "currentColor" })))), ac = (t) => /* @__PURE__ */ ee.createElement("svg", { width: 61, height: 20, viewBox: "0 0 61 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ ee.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ ee.createElement("path", { d: "M6.01758 9.99596L13.5114 14.2792C13.5713 14.313 13.639 14.3306 13.7079 14.3304C13.7768 14.3302 13.8444 14.3122 13.9041 14.2781C13.9639 14.244 14.0137 14.195 14.0487 14.1359C14.0837 14.0768 14.1027 14.0097 14.1039 13.9411L14.1051 6.05348C14.1044 5.98473 14.0856 5.91738 14.0507 5.85809C14.0158 5.79879 13.9659 5.74962 13.9061 5.71544C13.8462 5.68126 13.7784 5.66325 13.7095 5.66321C13.6405 5.66316 13.5727 5.68108 13.5128 5.71518L6.01758 9.99596Z", fill: "currentColor" }), /* @__PURE__ */ ee.createElement("path", { d: "M13.0758 3.86933L8.10117 0.0794926C8.04809 0.0397578 7.98589 0.0138881 7.92022 0.00423986C7.85455 -0.00540841 7.7875 0.00147132 7.72517 0.0242526C7.66285 0.0470339 7.60724 0.0849927 7.56341 0.134671C7.51957 0.18435 7.4889 0.24417 7.47419 0.308682L5.65527 8.7463L13.0354 4.52282C13.0925 4.49102 13.1407 4.44544 13.1755 4.39027C13.2103 4.3351 13.2306 4.2721 13.2346 4.20706C13.2386 4.14201 13.2262 4.077 13.1985 4.01799C13.1707 3.95898 13.1285 3.90787 13.0758 3.86933Z", fill: "currentColor" }), /* @__PURE__ */ ee.createElement("path", { d: "M8.09737 19.9187L13.0847 16.1247C13.1363 16.0854 13.1774 16.0341 13.2043 15.9753C13.2313 15.9164 13.2433 15.8519 13.2394 15.7873C13.2354 15.7228 13.2155 15.6602 13.1816 15.605C13.1476 15.5499 13.1006 15.504 13.0446 15.4712L5.6543 11.2511L7.47622 19.6893C7.48956 19.754 7.51921 19.8142 7.56237 19.8644C7.60553 19.9145 7.66079 19.9528 7.72293 19.9758C7.78507 19.9987 7.85205 20.0055 7.91756 19.9955C7.98307 19.9855 8.04495 19.9591 8.09737 19.9187Z", fill: "currentColor" }), /* @__PURE__ */ ee.createElement("path", { d: "M4.09602 9.9957L6.05884 0.904641C6.07589 0.825899 6.06815 0.743831 6.03666 0.66964C6.00517 0.595448 5.95148 0.532749 5.88291 0.4901C5.81434 0.447452 5.73423 0.426932 5.65353 0.431343C5.57282 0.435754 5.49544 0.46488 5.43196 0.514745L0.410088 4.33735C0.282855 4.43432 0.179798 4.55925 0.108943 4.70241C0.0380878 4.84557 0.00134694 5.0031 0.00158152 5.16273L1.66608e-06 14.8445C-0.000284921 15.0042 0.0364046 15.1617 0.107213 15.3049C0.178021 15.4481 0.281037 15.573 0.408239 15.6701L5.42887 19.4886C5.49281 19.5364 5.56975 19.5638 5.6496 19.5672C5.72945 19.5706 5.80848 19.5499 5.8763 19.5077C5.94411 19.4656 5.99756 19.404 6.0296 19.331C6.06165 19.258 6.07081 19.1771 6.05587 19.0989L4.09602 9.9957Z", fill: "currentColor" }), /* @__PURE__ */ ee.createElement("path", { d: "M43.1801 7.34494C43.5389 7.33762 43.8933 7.4251 44.2072 7.59846C44.521 7.77183 44.7833 8.02492 44.9672 8.332L44.3463 8.80862C44.2137 8.60905 44.039 8.44065 43.8344 8.31515C43.6367 8.19754 43.4102 8.13671 43.1799 8.13939C42.9723 8.13484 42.768 8.19155 42.5926 8.30239C42.5095 8.35695 42.4423 8.43253 42.3981 8.52141C42.3539 8.6103 42.3341 8.70929 42.3409 8.80827C42.3382 8.90224 42.3583 8.99546 42.3996 9.07999C42.4394 9.15634 42.4934 9.22444 42.5588 9.28068C42.6327 9.34389 42.7145 9.39734 42.8021 9.43971C42.8972 9.48722 43.0007 9.53879 43.1125 9.59441L43.7334 9.87889C43.9273 9.96675 44.1151 10.0674 44.2956 10.1801C44.451 10.2757 44.5923 10.3925 44.7153 10.5271C44.8248 10.6494 44.9127 10.7895 44.9752 10.9412C45.0388 11.1037 45.0702 11.2769 45.0675 11.4513C45.071 11.6808 45.0221 11.9081 44.9245 12.1161C44.8321 12.3104 44.6974 12.4818 44.5302 12.6177C44.3542 12.7588 44.1537 12.8665 43.9386 12.9353C43.7016 13.0123 43.4536 13.0504 43.2043 13.0481C42.7713 13.0564 42.3444 12.9449 41.971 12.7261C41.6147 12.5133 41.3199 12.2121 41.1152 11.852L41.7446 11.3755C41.8238 11.4937 41.9122 11.6056 42.009 11.71C42.1058 11.8152 42.2141 11.9091 42.3319 11.9902C42.4521 12.0725 42.5834 12.1373 42.722 12.1827C42.8751 12.2317 43.0352 12.2557 43.1961 12.2537C43.4434 12.2654 43.6874 12.1932 43.8882 12.0489C43.9746 11.983 44.0437 11.8973 44.0898 11.7991C44.1359 11.7008 44.1575 11.593 44.1528 11.4846C44.1547 11.388 44.1347 11.2923 44.0941 11.2045C44.0539 11.1223 43.9966 11.0496 43.9262 10.9911C43.8469 10.9255 43.7611 10.868 43.6702 10.8196C43.5723 10.7667 43.4619 10.7124 43.3389 10.6566L42.7267 10.3721C42.5541 10.292 42.386 10.2027 42.2232 10.1044C42.0722 10.0143 41.9339 9.90458 41.812 9.77815C41.6959 9.65758 41.6021 9.51745 41.5351 9.36426C41.4656 9.19888 41.4314 9.02091 41.4346 8.84164C41.4314 8.62736 41.4789 8.41534 41.5731 8.22272C41.6641 8.04046 41.7928 7.87949 41.9508 7.75043C42.1152 7.61681 42.303 7.51472 42.5047 7.44934C42.7228 7.37848 42.9508 7.34323 43.1801 7.34494Z", fill: "currentColor" }), /* @__PURE__ */ ee.createElement("path", { d: "M50.0013 11.5106L51.0674 8.85145L51.9988 8.85169L50.1771 13.0493H49.8752L48.5749 10.3062L47.2908 13.0488H46.9886L45.1602 8.85052L46.1 8.85063L47.1818 11.5352L48.4326 8.75912H48.7346L50.0013 11.5106Z", fill: "currentColor" }), /* @__PURE__ */ ee.createElement("path", { d: "M54.0459 8.76021C54.2798 8.75747 54.5124 8.79427 54.734 8.86904C54.9328 8.93674 55.1145 9.04661 55.2666 9.19108C55.4205 9.34206 55.5393 9.52479 55.6148 9.72645C55.703 9.96598 55.7457 10.2198 55.7407 10.4749L55.7402 12.9585L54.9178 12.9584V12.4985C54.7675 12.6748 54.5778 12.8137 54.3641 12.9039C54.1224 13.0048 53.8624 13.0547 53.6004 13.0502C53.4001 13.0526 53.2006 13.0243 53.0088 12.9664C52.8431 12.9164 52.6891 12.8339 52.5558 12.7238C52.4325 12.6213 52.3336 12.4928 52.2663 12.3475C52.1975 12.1951 52.1632 12.0295 52.1658 11.8624C52.1595 11.697 52.1936 11.5326 52.2653 11.3833C52.3369 11.234 52.4439 11.1043 52.577 11.0054C52.9011 10.7813 53.2908 10.6711 53.6847 10.692L54.8509 10.6921L54.8511 10.4245C54.8653 10.3057 54.8523 10.1854 54.813 10.0724C54.7738 9.95938 54.7093 9.85674 54.6245 9.77219C54.5397 9.68764 54.4367 9.62337 54.3233 9.58423C54.21 9.54509 54.0892 9.5321 53.97 9.54624C53.7497 9.54115 53.5322 9.59606 53.3409 9.70504C53.144 9.82637 52.9682 9.9789 52.8205 10.1566L52.317 9.6381C52.5096 9.35434 52.7729 9.12527 53.081 8.9733C53.3822 8.83011 53.7122 8.75723 54.0459 8.76021ZM53.785 12.3729C53.9252 12.3738 54.0645 12.3497 54.1962 12.3018C54.3211 12.2568 54.4363 12.1887 54.536 12.1011C54.6338 12.0151 54.7125 11.9098 54.7671 11.7917C54.8234 11.6699 54.852 11.5371 54.8509 11.4029V11.3276L53.7937 11.3275C53.6049 11.316 53.4168 11.3596 53.2524 11.4528C53.1906 11.4936 53.1407 11.5498 53.1075 11.6159C53.0744 11.6819 53.0593 11.7555 53.0636 11.8292C53.0596 11.9092 53.0769 11.9889 53.1137 12.0601C53.1505 12.1313 53.2056 12.1916 53.2733 12.2348C53.4263 12.3305 53.6044 12.3786 53.785 12.3729H53.785Z", fill: "currentColor" }), /* @__PURE__ */ ee.createElement("path", { d: "M58.8868 8.76073C59.1652 8.75824 59.441 8.81385 59.6966 8.92397C59.9395 9.02866 60.158 9.18243 60.3384 9.37555C60.5202 9.57271 60.6626 9.80269 60.7578 10.0531C60.8607 10.3242 60.9118 10.612 60.9085 10.9018C60.9114 11.193 60.8602 11.4822 60.7575 11.7548C60.6626 12.0075 60.5185 12.2391 60.3337 12.4363C60.1483 12.6331 59.9239 12.7893 59.6747 12.8951C59.4255 13.0008 59.157 13.0538 58.8861 13.0507C58.6171 13.0538 58.3502 13.0025 58.1016 12.9001C57.8717 12.8054 57.6686 12.6561 57.51 12.4651L57.5098 14.4637L56.6289 14.4636L56.6298 8.85236L57.4435 8.85247L57.4433 9.44624C57.5964 9.22732 57.805 9.05276 58.0478 8.94036C58.3103 8.81827 58.5971 8.75686 58.8868 8.76073ZM58.7441 9.56349C58.5909 9.56385 58.439 9.5907 58.2951 9.64283C58.147 9.69579 58.0114 9.77834 57.8965 9.88541C57.7735 10.002 57.6763 10.1429 57.6112 10.2992C57.5339 10.4903 57.4967 10.6952 57.502 10.9013C57.4968 11.1069 57.5324 11.3116 57.6068 11.5035C57.6701 11.6609 57.7659 11.8034 57.8879 11.9217C58.0017 12.031 58.1374 12.1151 58.2861 12.1684C58.4328 12.2211 58.5876 12.248 58.7436 12.2479C58.912 12.2489 59.0789 12.2162 59.2344 12.1519C59.3859 12.0895 59.523 11.997 59.6374 11.88C59.7546 11.7588 59.846 11.6152 59.906 11.4578C60.0343 11.1038 60.0344 10.7163 59.9063 10.3623C59.8466 10.2056 59.7568 10.0622 59.6418 9.93994C59.5289 9.82224 59.3934 9.7284 59.2433 9.664C59.0857 9.59624 58.9157 9.56201 58.7441 9.5635V9.56349Z", fill: "currentColor" }), /* @__PURE__ */ ee.createElement("path", { d: "M20.6715 12.9526L19.7822 12.9525L19.7832 7.43326L20.6725 7.43338L20.6715 12.9526ZM21.8049 10.0175L24.3636 12.9532L23.2644 12.953L20.6971 10.0174L23.022 7.43373L24.1128 7.43397L21.8049 10.0175Z", fill: "currentColor" }), /* @__PURE__ */ ee.createElement("path", { d: "M26.3188 13.4222C26.1891 13.7586 25.9735 14.0554 25.6934 14.2833C25.4326 14.4671 25.1188 14.561 24.7996 14.5508C24.6846 14.5505 24.5698 14.5435 24.4556 14.5299C24.3424 14.5166 24.2303 14.4957 24.12 14.4672V13.7229C24.2208 13.7339 24.3103 13.7423 24.3887 13.748C24.4669 13.7535 24.5423 13.7562 24.615 13.7563C24.7914 13.7596 24.9658 13.7195 25.1228 13.6394C25.3022 13.5242 25.4393 13.354 25.5133 13.1544L25.681 12.7698L24.0371 8.84738L24.9851 8.84762L26.1595 11.8416L27.3851 8.84797L28.3247 8.84809L26.3188 13.4222Z", fill: "currentColor" }), /* @__PURE__ */ ee.createElement("path", { d: "M29.6675 9.3499C29.8292 9.16227 30.0316 9.01363 30.2593 8.91516C30.5065 8.80734 30.774 8.75321 31.0438 8.75637C31.3146 8.75335 31.5831 8.80644 31.8323 8.91228C32.0814 9.01811 32.3058 9.17439 32.4911 9.37119C32.6759 9.56851 32.8198 9.80017 32.9148 10.053C33.0173 10.3256 33.0684 10.6148 33.0655 10.9059C33.0686 11.1957 33.0174 11.4836 32.9145 11.7547C32.8193 12.005 32.6768 12.2349 32.4949 12.432C32.3156 12.6244 32.0985 12.7781 31.8571 12.8834C31.6031 12.9937 31.3286 13.0493 31.0516 13.0463C30.761 13.0499 30.4731 12.9899 30.2083 12.8706C29.9635 12.7615 29.7531 12.588 29.5998 12.3688V12.9541L28.7861 12.954L28.7871 6.68207L29.6679 6.68218L29.6675 9.3499ZM30.9011 9.55912C30.7451 9.55905 30.5903 9.58589 30.4436 9.63846C30.2948 9.69187 30.1591 9.77593 30.0451 9.88514C29.9231 10.0034 29.8274 10.1459 29.764 10.3033C29.6895 10.4951 29.6539 10.6997 29.659 10.9053C29.654 11.1127 29.691 11.3189 29.768 11.5116C29.8323 11.6696 29.9295 11.8121 30.0533 11.9298C30.1675 12.0367 30.3033 12.118 30.4516 12.1682C30.5961 12.2178 30.7478 12.2433 30.9006 12.2436C31.0722 12.245 31.2422 12.2109 31.3998 12.1433C31.55 12.0789 31.6856 11.985 31.7986 11.8673C31.9136 11.7452 32.0034 11.6017 32.063 11.4451C32.1913 11.0912 32.1914 10.7037 32.0633 10.3497C32.0032 10.1923 31.9118 10.0486 31.7946 9.92727C31.6803 9.81036 31.5432 9.71787 31.3919 9.65544C31.2364 9.59095 31.0695 9.5582 30.9011 9.55913V9.55912Z", fill: "currentColor" }), /* @__PURE__ */ ee.createElement("path", { d: "M35.7842 8.7573C36.0456 8.75491 36.3049 8.80324 36.5477 8.8996C36.7735 8.98759 36.9786 9.121 37.1504 9.29151C37.3221 9.46202 37.4568 9.66597 37.546 9.89064C37.6424 10.1284 37.6908 10.3827 37.6885 10.6391C37.6888 10.7454 37.6817 10.8516 37.6674 10.9569C37.6576 11.0359 37.6423 11.1141 37.6214 11.191L34.5502 11.1905C34.5956 11.5027 34.7574 11.7865 35.0034 11.9851C35.2579 12.1794 35.5721 12.2799 35.8925 12.2695C36.1174 12.2728 36.3404 12.2286 36.547 12.14C36.7467 12.0512 36.9309 11.9313 37.0927 11.7847L37.5204 12.3869C37.3053 12.5912 37.0552 12.7554 36.782 12.8718C36.4952 12.9913 36.1868 13.0511 35.8758 13.0473C35.5716 13.0499 35.2696 12.9946 34.9863 12.8842C34.7249 12.784 34.4867 12.6319 34.2862 12.437C34.0858 12.2422 33.9272 12.0086 33.8203 11.7507C33.7073 11.4835 33.6502 11.1961 33.6524 10.9062C33.6502 10.6166 33.7059 10.3294 33.8163 10.0615C33.9205 9.8067 34.0745 9.57507 34.2693 9.38011C34.4636 9.18702 34.6929 9.0324 34.9449 8.92443C35.2101 8.81139 35.4959 8.75448 35.7842 8.7573ZM35.7586 9.50155C35.4766 9.49442 35.2017 9.59116 34.9867 9.77327C34.7688 9.96353 34.6211 10.2211 34.5673 10.5049L36.8076 10.5052C36.8108 10.3653 36.7836 10.2263 36.7279 10.0978C36.6721 9.9693 36.5891 9.85436 36.4845 9.76086C36.2825 9.58881 36.0243 9.49655 35.7586 9.50155Z", fill: "currentColor" }), /* @__PURE__ */ ee.createElement("path", { d: "M40.5502 8.8081C40.6134 8.8075 40.6765 8.81173 40.739 8.82074C40.7921 8.82905 40.841 8.8388 40.8858 8.84999L40.8855 9.62771L40.6171 9.62759C40.4591 9.62692 40.302 9.65093 40.1515 9.69874C40.0094 9.74254 39.878 9.81508 39.7654 9.91183C39.6537 10.01 39.5649 10.1313 39.5052 10.2672C39.4379 10.4244 39.4049 10.594 39.4084 10.7648L39.4082 12.9558L38.5273 12.9556L38.5281 8.84965L39.3418 8.84977L39.3415 9.40176C39.48 9.21261 39.6631 9.06037 39.8746 8.95848C40.0855 8.85803 40.3165 8.80661 40.5502 8.8081Z", fill: "currentColor" }))), V0 = (t) => /* @__PURE__ */ ee.createElement("svg", { width: 25, height: 24, viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ ee.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.607 4.73317L21.0374 13.9333C22.3729 16.1998 20.6576 19 17.9289 19H7.07003C4.34316 19 2.62604 16.2015 3.96337 13.935L9.39373 4.73488C10.7545 2.42199 14.2427 2.42199 15.607 4.73317Z", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ ee.createElement("path", { d: "M12.5 11V8", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ ee.createElement("path", { d: "M12.499 14.82C12.399 14.82 12.319 14.902 12.321 15C12.321 15.1 12.403 15.18 12.501 15.18C12.599 15.18 12.679 15.098 12.679 15C12.679 14.902 12.599 14.82 12.499 14.82", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })), x1 = (t) => /* @__PURE__ */ ee.createElement("svg", { width: 12, height: 12, viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ ee.createElement("path", { id: "Vector", d: "M12 5.33333V0H6.66667L8.86 2.19333L2.19333 8.86L0 6.66667V12H5.33333L3.14 9.80667L9.80667 3.14L12 5.33333Z", fill: "currentColor" }));
function Pa() {
  return dn(Ca);
}
const y1 = J.div`
  border-radius: ${({
  theme: t
}) => t.borderRadius};
  padding: 1rem;
  width: 375px;
  background: ${({
  theme: t
}) => t.primary};
  color: ${({
  theme: t
}) => t.text};
  font-family: ${({
  theme: t
}) => t.fontFamily || '"Work Sans", "Inter var", sans-serif'};
  position: relative;
  overflow: hidden;
  box-shadow: ${({
  theme: t
}) => t.boxShadow};
`, v1 = J.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.25rem;
  font-weight: 500;
  align-items: center;
`, sc = J.div`
  border-radius: ${({
  theme: t
}) => t.borderRadius};
  padding: 0.75rem;
  background: ${({
  theme: t
}) => t.secondary};
  margin-top: 1rem;
  box-shadow: ${({
  theme: t
}) => t.boxShadow};
`, A1 = J.button`
  outline: none;
  border: none;
  background: ${({
  theme: t
}) => t.interactive};
  border-radius: ${({
  theme: t
}) => t.buttonRadius};
  color: ${({
  theme: t
}) => t.subText};
  font-size: 0.75rem;
  padding: 0.125rem 0.5rem;
  font-weight: 500;
  cursor: pointer;
  margin-right: 0.25rem;

  :hover {
    opacity: 0.8;
  }
`, oc = J.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`, To = J.button`
  outline: none;
  border: none;
  border-radius: ${({
  theme: t
}) => t.buttonRadius};
  width: 2.25rem;
  height: 2.25rem;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({
  theme: t
}) => t.subText};

  :hover {
    background: ${({
  theme: t
}) => t.secondary};
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`, w1 = J(To)`
  width: 40px;
  height: 40px;
  background: ${({
  theme: t
}) => t.secondary};

  :hover {
    opacity: 0.8;
  }
`, ic = J.div`
  gap: 4px;
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: ${({
  theme: t
}) => t.subText};
`, cc = J.div`
  display: flex;
  align-items: center;
  margin-top: 0.75rem;
`, dc = J.input`
  width: 100%;
  font-size: 1.5rem;
  background: ${({
  theme: t
}) => t.secondary};
  outline: none;
  border: none;
  color: ${({
  theme: t
}) => t.text};

  :disabled {
    cursor: not-allowed;
  }
`, fc = J.button`
  outline: none;
  border: none;
  background: ${({
  theme: t
}) => t.interactive};
  border-radius: ${({
  theme: t
}) => t.buttonRadius};
  padding: 0.375rem 0 0.375rem 0.5rem;
  font-size: 1.125rem;
  color: ${({
  theme: t
}) => t.subText};
  display: flex;
  align-items: center;
  font-weight: 500;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`, C1 = J.div`
  display: flex;
  margin-top: 1rem;
  align-items: center;
  justify-content: space-between;
`, E1 = J.div`
  display: flex;
  align-items: center;
`, Ln = J.button`
  outline: none;
  border: none;
  border-radius: ${({
  theme: t
}) => t.buttonRadius};
  width: 100%;
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.75rem;
  background: ${({
  theme: t
}) => t.accent};
  color: ${({
  theme: t
}) => t.dialog};
  cursor: pointer;
  box-shadow: ${({
  theme: t
}) => t.boxShadow};

  :disabled {
    color: ${({
  theme: t
}) => t.subText};
    background: ${({
  theme: t
}) => t.interactive};
    cursor: not-allowed;

    :active {
      transform: none;
    }
  }

  :active {
    transform: scale(0.99);
  }
`, ao = J.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`, I1 = J.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({
  theme: t
}) => t.subText};
  margin-left: 4px;
`, G0 = J.div`
  background: ${({
  theme: t
}) => t.secondary};
  border-radius: ${({
  theme: t
}) => t.borderRadius};
  border: 1px solid ${({
  theme: t
}) => t.stroke};
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 12px;
`, Qr = J.div`
  display: flex;
  justify-content: space-between;
`, en = J.div`
  display: flex;
  align-items: center;
  color: ${({
  theme: t
}) => t.subText};
`, Wr = J.div`
  font-weight: 500;
`, k1 = J.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  text-transform: uppercase;
  text-align: left;
`, S1 = J.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: right;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
`, D1 = J.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid ${({
  theme: t
}) => t.stroke};
`, K0 = J.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`, q0 = J.div`
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 500;
  :hover {
    opacity: 0.8;
  }

  > svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;
var Y0 = { exports: {} };
const B1 = {}, F1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: B1
}, Symbol.toStringTag, { value: "Module" })), R1 = /* @__PURE__ */ ht(F1);
(function(t) {
  (function(e, r) {
    function n(I, d) {
      if (!I)
        throw new Error(d || "Assertion failed");
    }
    function a(I, d) {
      I.super_ = d;
      var m = function() {
      };
      m.prototype = d.prototype, I.prototype = new m(), I.prototype.constructor = I;
    }
    function s(I, d, m) {
      if (s.isBN(I))
        return I;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, I !== null && ((d === "le" || d === "be") && (m = d, d = 10), this._init(I || 0, d || 10, m || "be"));
    }
    typeof e == "object" ? e.exports = s : r.BN = s, s.BN = s, s.wordSize = 26;
    var o;
    try {
      typeof window < "u" && typeof window.Buffer < "u" ? o = window.Buffer : o = R1.Buffer;
    } catch {
    }
    s.isBN = function(d) {
      return d instanceof s ? !0 : d !== null && typeof d == "object" && d.constructor.wordSize === s.wordSize && Array.isArray(d.words);
    }, s.max = function(d, m) {
      return d.cmp(m) > 0 ? d : m;
    }, s.min = function(d, m) {
      return d.cmp(m) < 0 ? d : m;
    }, s.prototype._init = function(d, m, y) {
      if (typeof d == "number")
        return this._initNumber(d, m, y);
      if (typeof d == "object")
        return this._initArray(d, m, y);
      m === "hex" && (m = 16), n(m === (m | 0) && m >= 2 && m <= 36), d = d.toString().replace(/\s+/g, "");
      var w = 0;
      d[0] === "-" && (w++, this.negative = 1), w < d.length && (m === 16 ? this._parseHex(d, w, y) : (this._parseBase(d, m, w), y === "le" && this._initArray(this.toArray(), m, y)));
    }, s.prototype._initNumber = function(d, m, y) {
      d < 0 && (this.negative = 1, d = -d), d < 67108864 ? (this.words = [d & 67108863], this.length = 1) : d < 4503599627370496 ? (this.words = [
        d & 67108863,
        d / 67108864 & 67108863
      ], this.length = 2) : (n(d < 9007199254740992), this.words = [
        d & 67108863,
        d / 67108864 & 67108863,
        1
      ], this.length = 3), y === "le" && this._initArray(this.toArray(), m, y);
    }, s.prototype._initArray = function(d, m, y) {
      if (n(typeof d.length == "number"), d.length <= 0)
        return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(d.length / 3), this.words = new Array(this.length);
      for (var w = 0; w < this.length; w++)
        this.words[w] = 0;
      var A, T, P = 0;
      if (y === "be")
        for (w = d.length - 1, A = 0; w >= 0; w -= 3)
          T = d[w] | d[w - 1] << 8 | d[w - 2] << 16, this.words[A] |= T << P & 67108863, this.words[A + 1] = T >>> 26 - P & 67108863, P += 24, P >= 26 && (P -= 26, A++);
      else if (y === "le")
        for (w = 0, A = 0; w < d.length; w += 3)
          T = d[w] | d[w + 1] << 8 | d[w + 2] << 16, this.words[A] |= T << P & 67108863, this.words[A + 1] = T >>> 26 - P & 67108863, P += 24, P >= 26 && (P -= 26, A++);
      return this._strip();
    };
    function i(I, d) {
      var m = I.charCodeAt(d);
      if (m >= 48 && m <= 57)
        return m - 48;
      if (m >= 65 && m <= 70)
        return m - 55;
      if (m >= 97 && m <= 102)
        return m - 87;
      n(!1, "Invalid character in " + I);
    }
    function f(I, d, m) {
      var y = i(I, m);
      return m - 1 >= d && (y |= i(I, m - 1) << 4), y;
    }
    s.prototype._parseHex = function(d, m, y) {
      this.length = Math.ceil((d.length - m) / 6), this.words = new Array(this.length);
      for (var w = 0; w < this.length; w++)
        this.words[w] = 0;
      var A = 0, T = 0, P;
      if (y === "be")
        for (w = d.length - 1; w >= m; w -= 2)
          P = f(d, m, w) << A, this.words[T] |= P & 67108863, A >= 18 ? (A -= 18, T += 1, this.words[T] |= P >>> 26) : A += 8;
      else {
        var p = d.length - m;
        for (w = p % 2 === 0 ? m + 1 : m; w < d.length; w += 2)
          P = f(d, m, w) << A, this.words[T] |= P & 67108863, A >= 18 ? (A -= 18, T += 1, this.words[T] |= P >>> 26) : A += 8;
      }
      this._strip();
    };
    function u(I, d, m, y) {
      for (var w = 0, A = 0, T = Math.min(I.length, m), P = d; P < T; P++) {
        var p = I.charCodeAt(P) - 48;
        w *= y, p >= 49 ? A = p - 49 + 10 : p >= 17 ? A = p - 17 + 10 : A = p, n(p >= 0 && A < y, "Invalid character"), w += A;
      }
      return w;
    }
    s.prototype._parseBase = function(d, m, y) {
      this.words = [0], this.length = 1;
      for (var w = 0, A = 1; A <= 67108863; A *= m)
        w++;
      w--, A = A / m | 0;
      for (var T = d.length - y, P = T % w, p = Math.min(T, T - P) + y, c = 0, b = y; b < p; b += w)
        c = u(d, b, b + w, m), this.imuln(A), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c);
      if (P !== 0) {
        var k = 1;
        for (c = u(d, b, d.length, m), b = 0; b < P; b++)
          k *= m;
        this.imuln(k), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c);
      }
      this._strip();
    }, s.prototype.copy = function(d) {
      d.words = new Array(this.length);
      for (var m = 0; m < this.length; m++)
        d.words[m] = this.words[m];
      d.length = this.length, d.negative = this.negative, d.red = this.red;
    };
    function h(I, d) {
      I.words = d.words, I.length = d.length, I.negative = d.negative, I.red = d.red;
    }
    if (s.prototype._move = function(d) {
      h(d, this);
    }, s.prototype.clone = function() {
      var d = new s(null);
      return this.copy(d), d;
    }, s.prototype._expand = function(d) {
      for (; this.length < d; )
        this.words[this.length++] = 0;
      return this;
    }, s.prototype._strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0; )
        this.length--;
      return this._normSign();
    }, s.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, typeof Symbol < "u" && typeof Symbol.for == "function")
      try {
        s.prototype[Symbol.for("nodejs.util.inspect.custom")] = g;
      } catch {
        s.prototype.inspect = g;
      }
    else
      s.prototype.inspect = g;
    function g() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }
    var C = [
      "",
      "0",
      "00",
      "000",
      "0000",
      "00000",
      "000000",
      "0000000",
      "00000000",
      "000000000",
      "0000000000",
      "00000000000",
      "000000000000",
      "0000000000000",
      "00000000000000",
      "000000000000000",
      "0000000000000000",
      "00000000000000000",
      "000000000000000000",
      "0000000000000000000",
      "00000000000000000000",
      "000000000000000000000",
      "0000000000000000000000",
      "00000000000000000000000",
      "000000000000000000000000",
      "0000000000000000000000000"
    ], E = [
      0,
      0,
      25,
      16,
      12,
      11,
      10,
      9,
      8,
      8,
      7,
      7,
      7,
      7,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5
    ], S = [
      0,
      0,
      33554432,
      43046721,
      16777216,
      48828125,
      60466176,
      40353607,
      16777216,
      43046721,
      1e7,
      19487171,
      35831808,
      62748517,
      7529536,
      11390625,
      16777216,
      24137569,
      34012224,
      47045881,
      64e6,
      4084101,
      5153632,
      6436343,
      7962624,
      9765625,
      11881376,
      14348907,
      17210368,
      20511149,
      243e5,
      28629151,
      33554432,
      39135393,
      45435424,
      52521875,
      60466176
    ];
    s.prototype.toString = function(d, m) {
      d = d || 10, m = m | 0 || 1;
      var y;
      if (d === 16 || d === "hex") {
        y = "";
        for (var w = 0, A = 0, T = 0; T < this.length; T++) {
          var P = this.words[T], p = ((P << w | A) & 16777215).toString(16);
          A = P >>> 24 - w & 16777215, w += 2, w >= 26 && (w -= 26, T--), A !== 0 || T !== this.length - 1 ? y = C[6 - p.length] + p + y : y = p + y;
        }
        for (A !== 0 && (y = A.toString(16) + y); y.length % m !== 0; )
          y = "0" + y;
        return this.negative !== 0 && (y = "-" + y), y;
      }
      if (d === (d | 0) && d >= 2 && d <= 36) {
        var c = E[d], b = S[d];
        y = "";
        var k = this.clone();
        for (k.negative = 0; !k.isZero(); ) {
          var l = k.modrn(b).toString(d);
          k = k.idivn(b), k.isZero() ? y = l + y : y = C[c - l.length] + l + y;
        }
        for (this.isZero() && (y = "0" + y); y.length % m !== 0; )
          y = "0" + y;
        return this.negative !== 0 && (y = "-" + y), y;
      }
      n(!1, "Base should be between 2 and 36");
    }, s.prototype.toNumber = function() {
      var d = this.words[0];
      return this.length === 2 ? d += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? d += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -d : d;
    }, s.prototype.toJSON = function() {
      return this.toString(16, 2);
    }, o && (s.prototype.toBuffer = function(d, m) {
      return this.toArrayLike(o, d, m);
    }), s.prototype.toArray = function(d, m) {
      return this.toArrayLike(Array, d, m);
    };
    var D = function(d, m) {
      return d.allocUnsafe ? d.allocUnsafe(m) : new d(m);
    };
    s.prototype.toArrayLike = function(d, m, y) {
      this._strip();
      var w = this.byteLength(), A = y || Math.max(1, w);
      n(w <= A, "byte array longer than desired length"), n(A > 0, "Requested array length <= 0");
      var T = D(d, A), P = m === "le" ? "LE" : "BE";
      return this["_toArrayLike" + P](T, w), T;
    }, s.prototype._toArrayLikeLE = function(d, m) {
      for (var y = 0, w = 0, A = 0, T = 0; A < this.length; A++) {
        var P = this.words[A] << T | w;
        d[y++] = P & 255, y < d.length && (d[y++] = P >> 8 & 255), y < d.length && (d[y++] = P >> 16 & 255), T === 6 ? (y < d.length && (d[y++] = P >> 24 & 255), w = 0, T = 0) : (w = P >>> 24, T += 2);
      }
      if (y < d.length)
        for (d[y++] = w; y < d.length; )
          d[y++] = 0;
    }, s.prototype._toArrayLikeBE = function(d, m) {
      for (var y = d.length - 1, w = 0, A = 0, T = 0; A < this.length; A++) {
        var P = this.words[A] << T | w;
        d[y--] = P & 255, y >= 0 && (d[y--] = P >> 8 & 255), y >= 0 && (d[y--] = P >> 16 & 255), T === 6 ? (y >= 0 && (d[y--] = P >> 24 & 255), w = 0, T = 0) : (w = P >>> 24, T += 2);
      }
      if (y >= 0)
        for (d[y--] = w; y >= 0; )
          d[y--] = 0;
    }, Math.clz32 ? s.prototype._countBits = function(d) {
      return 32 - Math.clz32(d);
    } : s.prototype._countBits = function(d) {
      var m = d, y = 0;
      return m >= 4096 && (y += 13, m >>>= 13), m >= 64 && (y += 7, m >>>= 7), m >= 8 && (y += 4, m >>>= 4), m >= 2 && (y += 2, m >>>= 2), y + m;
    }, s.prototype._zeroBits = function(d) {
      if (d === 0)
        return 26;
      var m = d, y = 0;
      return (m & 8191) === 0 && (y += 13, m >>>= 13), (m & 127) === 0 && (y += 7, m >>>= 7), (m & 15) === 0 && (y += 4, m >>>= 4), (m & 3) === 0 && (y += 2, m >>>= 2), (m & 1) === 0 && y++, y;
    }, s.prototype.bitLength = function() {
      var d = this.words[this.length - 1], m = this._countBits(d);
      return (this.length - 1) * 26 + m;
    };
    function x(I) {
      for (var d = new Array(I.bitLength()), m = 0; m < d.length; m++) {
        var y = m / 26 | 0, w = m % 26;
        d[m] = I.words[y] >>> w & 1;
      }
      return d;
    }
    s.prototype.zeroBits = function() {
      if (this.isZero())
        return 0;
      for (var d = 0, m = 0; m < this.length; m++) {
        var y = this._zeroBits(this.words[m]);
        if (d += y, y !== 26)
          break;
      }
      return d;
    }, s.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, s.prototype.toTwos = function(d) {
      return this.negative !== 0 ? this.abs().inotn(d).iaddn(1) : this.clone();
    }, s.prototype.fromTwos = function(d) {
      return this.testn(d - 1) ? this.notn(d).iaddn(1).ineg() : this.clone();
    }, s.prototype.isNeg = function() {
      return this.negative !== 0;
    }, s.prototype.neg = function() {
      return this.clone().ineg();
    }, s.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, s.prototype.iuor = function(d) {
      for (; this.length < d.length; )
        this.words[this.length++] = 0;
      for (var m = 0; m < d.length; m++)
        this.words[m] = this.words[m] | d.words[m];
      return this._strip();
    }, s.prototype.ior = function(d) {
      return n((this.negative | d.negative) === 0), this.iuor(d);
    }, s.prototype.or = function(d) {
      return this.length > d.length ? this.clone().ior(d) : d.clone().ior(this);
    }, s.prototype.uor = function(d) {
      return this.length > d.length ? this.clone().iuor(d) : d.clone().iuor(this);
    }, s.prototype.iuand = function(d) {
      var m;
      this.length > d.length ? m = d : m = this;
      for (var y = 0; y < m.length; y++)
        this.words[y] = this.words[y] & d.words[y];
      return this.length = m.length, this._strip();
    }, s.prototype.iand = function(d) {
      return n((this.negative | d.negative) === 0), this.iuand(d);
    }, s.prototype.and = function(d) {
      return this.length > d.length ? this.clone().iand(d) : d.clone().iand(this);
    }, s.prototype.uand = function(d) {
      return this.length > d.length ? this.clone().iuand(d) : d.clone().iuand(this);
    }, s.prototype.iuxor = function(d) {
      var m, y;
      this.length > d.length ? (m = this, y = d) : (m = d, y = this);
      for (var w = 0; w < y.length; w++)
        this.words[w] = m.words[w] ^ y.words[w];
      if (this !== m)
        for (; w < m.length; w++)
          this.words[w] = m.words[w];
      return this.length = m.length, this._strip();
    }, s.prototype.ixor = function(d) {
      return n((this.negative | d.negative) === 0), this.iuxor(d);
    }, s.prototype.xor = function(d) {
      return this.length > d.length ? this.clone().ixor(d) : d.clone().ixor(this);
    }, s.prototype.uxor = function(d) {
      return this.length > d.length ? this.clone().iuxor(d) : d.clone().iuxor(this);
    }, s.prototype.inotn = function(d) {
      n(typeof d == "number" && d >= 0);
      var m = Math.ceil(d / 26) | 0, y = d % 26;
      this._expand(m), y > 0 && m--;
      for (var w = 0; w < m; w++)
        this.words[w] = ~this.words[w] & 67108863;
      return y > 0 && (this.words[w] = ~this.words[w] & 67108863 >> 26 - y), this._strip();
    }, s.prototype.notn = function(d) {
      return this.clone().inotn(d);
    }, s.prototype.setn = function(d, m) {
      n(typeof d == "number" && d >= 0);
      var y = d / 26 | 0, w = d % 26;
      return this._expand(y + 1), m ? this.words[y] = this.words[y] | 1 << w : this.words[y] = this.words[y] & ~(1 << w), this._strip();
    }, s.prototype.iadd = function(d) {
      var m;
      if (this.negative !== 0 && d.negative === 0)
        return this.negative = 0, m = this.isub(d), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && d.negative !== 0)
        return d.negative = 0, m = this.isub(d), d.negative = 1, m._normSign();
      var y, w;
      this.length > d.length ? (y = this, w = d) : (y = d, w = this);
      for (var A = 0, T = 0; T < w.length; T++)
        m = (y.words[T] | 0) + (w.words[T] | 0) + A, this.words[T] = m & 67108863, A = m >>> 26;
      for (; A !== 0 && T < y.length; T++)
        m = (y.words[T] | 0) + A, this.words[T] = m & 67108863, A = m >>> 26;
      if (this.length = y.length, A !== 0)
        this.words[this.length] = A, this.length++;
      else if (y !== this)
        for (; T < y.length; T++)
          this.words[T] = y.words[T];
      return this;
    }, s.prototype.add = function(d) {
      var m;
      return d.negative !== 0 && this.negative === 0 ? (d.negative = 0, m = this.sub(d), d.negative ^= 1, m) : d.negative === 0 && this.negative !== 0 ? (this.negative = 0, m = d.sub(this), this.negative = 1, m) : this.length > d.length ? this.clone().iadd(d) : d.clone().iadd(this);
    }, s.prototype.isub = function(d) {
      if (d.negative !== 0) {
        d.negative = 0;
        var m = this.iadd(d);
        return d.negative = 1, m._normSign();
      } else if (this.negative !== 0)
        return this.negative = 0, this.iadd(d), this.negative = 1, this._normSign();
      var y = this.cmp(d);
      if (y === 0)
        return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var w, A;
      y > 0 ? (w = this, A = d) : (w = d, A = this);
      for (var T = 0, P = 0; P < A.length; P++)
        m = (w.words[P] | 0) - (A.words[P] | 0) + T, T = m >> 26, this.words[P] = m & 67108863;
      for (; T !== 0 && P < w.length; P++)
        m = (w.words[P] | 0) + T, T = m >> 26, this.words[P] = m & 67108863;
      if (T === 0 && P < w.length && w !== this)
        for (; P < w.length; P++)
          this.words[P] = w.words[P];
      return this.length = Math.max(this.length, P), w !== this && (this.negative = 1), this._strip();
    }, s.prototype.sub = function(d) {
      return this.clone().isub(d);
    };
    function F(I, d, m) {
      m.negative = d.negative ^ I.negative;
      var y = I.length + d.length | 0;
      m.length = y, y = y - 1 | 0;
      var w = I.words[0] | 0, A = d.words[0] | 0, T = w * A, P = T & 67108863, p = T / 67108864 | 0;
      m.words[0] = P;
      for (var c = 1; c < y; c++) {
        for (var b = p >>> 26, k = p & 67108863, l = Math.min(c, d.length - 1), v = Math.max(0, c - I.length + 1); v <= l; v++) {
          var L = c - v | 0;
          w = I.words[L] | 0, A = d.words[v] | 0, T = w * A + k, b += T / 67108864 | 0, k = T & 67108863;
        }
        m.words[c] = k | 0, p = b | 0;
      }
      return p !== 0 ? m.words[c] = p | 0 : m.length--, m._strip();
    }
    var M = function(d, m, y) {
      var w = d.words, A = m.words, T = y.words, P = 0, p, c, b, k = w[0] | 0, l = k & 8191, v = k >>> 13, L = w[1] | 0, _ = L & 8191, H = L >>> 13, Y = w[2] | 0, $ = Y & 8191, N = Y >>> 13, he = w[3] | 0, z = he & 8191, Z = he >>> 13, ve = w[4] | 0, le = ve & 8191, ge = ve >>> 13, lt = w[5] | 0, me = lt & 8191, Ee = lt >>> 13, it = w[6] | 0, ye = it & 8191, ie = it >>> 13, ke = w[7] | 0, Se = ke & 8191, Ce = ke >>> 13, st = w[8] | 0, Te = st & 8191, Me = st >>> 13, _t = w[9] | 0, pe = _t & 8191, Ue = _t >>> 13, er = A[0] | 0, Ke = er & 8191, qe = er >>> 13, Nr = A[1] | 0, Ye = Nr & 8191, We = Nr >>> 13, mr = A[2] | 0, _e = mr & 8191, He = mr >>> 13, tr = A[3] | 0, $e = tr & 8191, Xe = tr >>> 13, pr = A[4] | 0, Je = pr & 8191, Ve = pr >>> 13, br = A[5] | 0, Ze = br & 8191, Qe = br >>> 13, gr = A[6] | 0, et = gr & 8191, tt = gr >>> 13, Lr = A[7] | 0, rt = Lr & 8191, R = Lr >>> 13, Q = A[8] | 0, re = Q & 8191, fe = Q >>> 13, Ie = A[9] | 0, be = Ie & 8191, ue = Ie >>> 13;
      y.negative = d.negative ^ m.negative, y.length = 19, p = Math.imul(l, Ke), c = Math.imul(l, qe), c = c + Math.imul(v, Ke) | 0, b = Math.imul(v, qe);
      var xe = (P + p | 0) + ((c & 8191) << 13) | 0;
      P = (b + (c >>> 13) | 0) + (xe >>> 26) | 0, xe &= 67108863, p = Math.imul(_, Ke), c = Math.imul(_, qe), c = c + Math.imul(H, Ke) | 0, b = Math.imul(H, qe), p = p + Math.imul(l, Ye) | 0, c = c + Math.imul(l, We) | 0, c = c + Math.imul(v, Ye) | 0, b = b + Math.imul(v, We) | 0;
      var ot = (P + p | 0) + ((c & 8191) << 13) | 0;
      P = (b + (c >>> 13) | 0) + (ot >>> 26) | 0, ot &= 67108863, p = Math.imul($, Ke), c = Math.imul($, qe), c = c + Math.imul(N, Ke) | 0, b = Math.imul(N, qe), p = p + Math.imul(_, Ye) | 0, c = c + Math.imul(_, We) | 0, c = c + Math.imul(H, Ye) | 0, b = b + Math.imul(H, We) | 0, p = p + Math.imul(l, _e) | 0, c = c + Math.imul(l, He) | 0, c = c + Math.imul(v, _e) | 0, b = b + Math.imul(v, He) | 0;
      var Pe = (P + p | 0) + ((c & 8191) << 13) | 0;
      P = (b + (c >>> 13) | 0) + (Pe >>> 26) | 0, Pe &= 67108863, p = Math.imul(z, Ke), c = Math.imul(z, qe), c = c + Math.imul(Z, Ke) | 0, b = Math.imul(Z, qe), p = p + Math.imul($, Ye) | 0, c = c + Math.imul($, We) | 0, c = c + Math.imul(N, Ye) | 0, b = b + Math.imul(N, We) | 0, p = p + Math.imul(_, _e) | 0, c = c + Math.imul(_, He) | 0, c = c + Math.imul(H, _e) | 0, b = b + Math.imul(H, He) | 0, p = p + Math.imul(l, $e) | 0, c = c + Math.imul(l, Xe) | 0, c = c + Math.imul(v, $e) | 0, b = b + Math.imul(v, Xe) | 0;
      var ze = (P + p | 0) + ((c & 8191) << 13) | 0;
      P = (b + (c >>> 13) | 0) + (ze >>> 26) | 0, ze &= 67108863, p = Math.imul(le, Ke), c = Math.imul(le, qe), c = c + Math.imul(ge, Ke) | 0, b = Math.imul(ge, qe), p = p + Math.imul(z, Ye) | 0, c = c + Math.imul(z, We) | 0, c = c + Math.imul(Z, Ye) | 0, b = b + Math.imul(Z, We) | 0, p = p + Math.imul($, _e) | 0, c = c + Math.imul($, He) | 0, c = c + Math.imul(N, _e) | 0, b = b + Math.imul(N, He) | 0, p = p + Math.imul(_, $e) | 0, c = c + Math.imul(_, Xe) | 0, c = c + Math.imul(H, $e) | 0, b = b + Math.imul(H, Xe) | 0, p = p + Math.imul(l, Je) | 0, c = c + Math.imul(l, Ve) | 0, c = c + Math.imul(v, Je) | 0, b = b + Math.imul(v, Ve) | 0;
      var mt = (P + p | 0) + ((c & 8191) << 13) | 0;
      P = (b + (c >>> 13) | 0) + (mt >>> 26) | 0, mt &= 67108863, p = Math.imul(me, Ke), c = Math.imul(me, qe), c = c + Math.imul(Ee, Ke) | 0, b = Math.imul(Ee, qe), p = p + Math.imul(le, Ye) | 0, c = c + Math.imul(le, We) | 0, c = c + Math.imul(ge, Ye) | 0, b = b + Math.imul(ge, We) | 0, p = p + Math.imul(z, _e) | 0, c = c + Math.imul(z, He) | 0, c = c + Math.imul(Z, _e) | 0, b = b + Math.imul(Z, He) | 0, p = p + Math.imul($, $e) | 0, c = c + Math.imul($, Xe) | 0, c = c + Math.imul(N, $e) | 0, b = b + Math.imul(N, Xe) | 0, p = p + Math.imul(_, Je) | 0, c = c + Math.imul(_, Ve) | 0, c = c + Math.imul(H, Je) | 0, b = b + Math.imul(H, Ve) | 0, p = p + Math.imul(l, Ze) | 0, c = c + Math.imul(l, Qe) | 0, c = c + Math.imul(v, Ze) | 0, b = b + Math.imul(v, Qe) | 0;
      var xr = (P + p | 0) + ((c & 8191) << 13) | 0;
      P = (b + (c >>> 13) | 0) + (xr >>> 26) | 0, xr &= 67108863, p = Math.imul(ye, Ke), c = Math.imul(ye, qe), c = c + Math.imul(ie, Ke) | 0, b = Math.imul(ie, qe), p = p + Math.imul(me, Ye) | 0, c = c + Math.imul(me, We) | 0, c = c + Math.imul(Ee, Ye) | 0, b = b + Math.imul(Ee, We) | 0, p = p + Math.imul(le, _e) | 0, c = c + Math.imul(le, He) | 0, c = c + Math.imul(ge, _e) | 0, b = b + Math.imul(ge, He) | 0, p = p + Math.imul(z, $e) | 0, c = c + Math.imul(z, Xe) | 0, c = c + Math.imul(Z, $e) | 0, b = b + Math.imul(Z, Xe) | 0, p = p + Math.imul($, Je) | 0, c = c + Math.imul($, Ve) | 0, c = c + Math.imul(N, Je) | 0, b = b + Math.imul(N, Ve) | 0, p = p + Math.imul(_, Ze) | 0, c = c + Math.imul(_, Qe) | 0, c = c + Math.imul(H, Ze) | 0, b = b + Math.imul(H, Qe) | 0, p = p + Math.imul(l, et) | 0, c = c + Math.imul(l, tt) | 0, c = c + Math.imul(v, et) | 0, b = b + Math.imul(v, tt) | 0;
      var Fn = (P + p | 0) + ((c & 8191) << 13) | 0;
      P = (b + (c >>> 13) | 0) + (Fn >>> 26) | 0, Fn &= 67108863, p = Math.imul(Se, Ke), c = Math.imul(Se, qe), c = c + Math.imul(Ce, Ke) | 0, b = Math.imul(Ce, qe), p = p + Math.imul(ye, Ye) | 0, c = c + Math.imul(ye, We) | 0, c = c + Math.imul(ie, Ye) | 0, b = b + Math.imul(ie, We) | 0, p = p + Math.imul(me, _e) | 0, c = c + Math.imul(me, He) | 0, c = c + Math.imul(Ee, _e) | 0, b = b + Math.imul(Ee, He) | 0, p = p + Math.imul(le, $e) | 0, c = c + Math.imul(le, Xe) | 0, c = c + Math.imul(ge, $e) | 0, b = b + Math.imul(ge, Xe) | 0, p = p + Math.imul(z, Je) | 0, c = c + Math.imul(z, Ve) | 0, c = c + Math.imul(Z, Je) | 0, b = b + Math.imul(Z, Ve) | 0, p = p + Math.imul($, Ze) | 0, c = c + Math.imul($, Qe) | 0, c = c + Math.imul(N, Ze) | 0, b = b + Math.imul(N, Qe) | 0, p = p + Math.imul(_, et) | 0, c = c + Math.imul(_, tt) | 0, c = c + Math.imul(H, et) | 0, b = b + Math.imul(H, tt) | 0, p = p + Math.imul(l, rt) | 0, c = c + Math.imul(l, R) | 0, c = c + Math.imul(v, rt) | 0, b = b + Math.imul(v, R) | 0;
      var Nt = (P + p | 0) + ((c & 8191) << 13) | 0;
      P = (b + (c >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, p = Math.imul(Te, Ke), c = Math.imul(Te, qe), c = c + Math.imul(Me, Ke) | 0, b = Math.imul(Me, qe), p = p + Math.imul(Se, Ye) | 0, c = c + Math.imul(Se, We) | 0, c = c + Math.imul(Ce, Ye) | 0, b = b + Math.imul(Ce, We) | 0, p = p + Math.imul(ye, _e) | 0, c = c + Math.imul(ye, He) | 0, c = c + Math.imul(ie, _e) | 0, b = b + Math.imul(ie, He) | 0, p = p + Math.imul(me, $e) | 0, c = c + Math.imul(me, Xe) | 0, c = c + Math.imul(Ee, $e) | 0, b = b + Math.imul(Ee, Xe) | 0, p = p + Math.imul(le, Je) | 0, c = c + Math.imul(le, Ve) | 0, c = c + Math.imul(ge, Je) | 0, b = b + Math.imul(ge, Ve) | 0, p = p + Math.imul(z, Ze) | 0, c = c + Math.imul(z, Qe) | 0, c = c + Math.imul(Z, Ze) | 0, b = b + Math.imul(Z, Qe) | 0, p = p + Math.imul($, et) | 0, c = c + Math.imul($, tt) | 0, c = c + Math.imul(N, et) | 0, b = b + Math.imul(N, tt) | 0, p = p + Math.imul(_, rt) | 0, c = c + Math.imul(_, R) | 0, c = c + Math.imul(H, rt) | 0, b = b + Math.imul(H, R) | 0, p = p + Math.imul(l, re) | 0, c = c + Math.imul(l, fe) | 0, c = c + Math.imul(v, re) | 0, b = b + Math.imul(v, fe) | 0;
      var Vs = (P + p | 0) + ((c & 8191) << 13) | 0;
      P = (b + (c >>> 13) | 0) + (Vs >>> 26) | 0, Vs &= 67108863, p = Math.imul(pe, Ke), c = Math.imul(pe, qe), c = c + Math.imul(Ue, Ke) | 0, b = Math.imul(Ue, qe), p = p + Math.imul(Te, Ye) | 0, c = c + Math.imul(Te, We) | 0, c = c + Math.imul(Me, Ye) | 0, b = b + Math.imul(Me, We) | 0, p = p + Math.imul(Se, _e) | 0, c = c + Math.imul(Se, He) | 0, c = c + Math.imul(Ce, _e) | 0, b = b + Math.imul(Ce, He) | 0, p = p + Math.imul(ye, $e) | 0, c = c + Math.imul(ye, Xe) | 0, c = c + Math.imul(ie, $e) | 0, b = b + Math.imul(ie, Xe) | 0, p = p + Math.imul(me, Je) | 0, c = c + Math.imul(me, Ve) | 0, c = c + Math.imul(Ee, Je) | 0, b = b + Math.imul(Ee, Ve) | 0, p = p + Math.imul(le, Ze) | 0, c = c + Math.imul(le, Qe) | 0, c = c + Math.imul(ge, Ze) | 0, b = b + Math.imul(ge, Qe) | 0, p = p + Math.imul(z, et) | 0, c = c + Math.imul(z, tt) | 0, c = c + Math.imul(Z, et) | 0, b = b + Math.imul(Z, tt) | 0, p = p + Math.imul($, rt) | 0, c = c + Math.imul($, R) | 0, c = c + Math.imul(N, rt) | 0, b = b + Math.imul(N, R) | 0, p = p + Math.imul(_, re) | 0, c = c + Math.imul(_, fe) | 0, c = c + Math.imul(H, re) | 0, b = b + Math.imul(H, fe) | 0, p = p + Math.imul(l, be) | 0, c = c + Math.imul(l, ue) | 0, c = c + Math.imul(v, be) | 0, b = b + Math.imul(v, ue) | 0;
      var Gs = (P + p | 0) + ((c & 8191) << 13) | 0;
      P = (b + (c >>> 13) | 0) + (Gs >>> 26) | 0, Gs &= 67108863, p = Math.imul(pe, Ye), c = Math.imul(pe, We), c = c + Math.imul(Ue, Ye) | 0, b = Math.imul(Ue, We), p = p + Math.imul(Te, _e) | 0, c = c + Math.imul(Te, He) | 0, c = c + Math.imul(Me, _e) | 0, b = b + Math.imul(Me, He) | 0, p = p + Math.imul(Se, $e) | 0, c = c + Math.imul(Se, Xe) | 0, c = c + Math.imul(Ce, $e) | 0, b = b + Math.imul(Ce, Xe) | 0, p = p + Math.imul(ye, Je) | 0, c = c + Math.imul(ye, Ve) | 0, c = c + Math.imul(ie, Je) | 0, b = b + Math.imul(ie, Ve) | 0, p = p + Math.imul(me, Ze) | 0, c = c + Math.imul(me, Qe) | 0, c = c + Math.imul(Ee, Ze) | 0, b = b + Math.imul(Ee, Qe) | 0, p = p + Math.imul(le, et) | 0, c = c + Math.imul(le, tt) | 0, c = c + Math.imul(ge, et) | 0, b = b + Math.imul(ge, tt) | 0, p = p + Math.imul(z, rt) | 0, c = c + Math.imul(z, R) | 0, c = c + Math.imul(Z, rt) | 0, b = b + Math.imul(Z, R) | 0, p = p + Math.imul($, re) | 0, c = c + Math.imul($, fe) | 0, c = c + Math.imul(N, re) | 0, b = b + Math.imul(N, fe) | 0, p = p + Math.imul(_, be) | 0, c = c + Math.imul(_, ue) | 0, c = c + Math.imul(H, be) | 0, b = b + Math.imul(H, ue) | 0;
      var Ks = (P + p | 0) + ((c & 8191) << 13) | 0;
      P = (b + (c >>> 13) | 0) + (Ks >>> 26) | 0, Ks &= 67108863, p = Math.imul(pe, _e), c = Math.imul(pe, He), c = c + Math.imul(Ue, _e) | 0, b = Math.imul(Ue, He), p = p + Math.imul(Te, $e) | 0, c = c + Math.imul(Te, Xe) | 0, c = c + Math.imul(Me, $e) | 0, b = b + Math.imul(Me, Xe) | 0, p = p + Math.imul(Se, Je) | 0, c = c + Math.imul(Se, Ve) | 0, c = c + Math.imul(Ce, Je) | 0, b = b + Math.imul(Ce, Ve) | 0, p = p + Math.imul(ye, Ze) | 0, c = c + Math.imul(ye, Qe) | 0, c = c + Math.imul(ie, Ze) | 0, b = b + Math.imul(ie, Qe) | 0, p = p + Math.imul(me, et) | 0, c = c + Math.imul(me, tt) | 0, c = c + Math.imul(Ee, et) | 0, b = b + Math.imul(Ee, tt) | 0, p = p + Math.imul(le, rt) | 0, c = c + Math.imul(le, R) | 0, c = c + Math.imul(ge, rt) | 0, b = b + Math.imul(ge, R) | 0, p = p + Math.imul(z, re) | 0, c = c + Math.imul(z, fe) | 0, c = c + Math.imul(Z, re) | 0, b = b + Math.imul(Z, fe) | 0, p = p + Math.imul($, be) | 0, c = c + Math.imul($, ue) | 0, c = c + Math.imul(N, be) | 0, b = b + Math.imul(N, ue) | 0;
      var qs = (P + p | 0) + ((c & 8191) << 13) | 0;
      P = (b + (c >>> 13) | 0) + (qs >>> 26) | 0, qs &= 67108863, p = Math.imul(pe, $e), c = Math.imul(pe, Xe), c = c + Math.imul(Ue, $e) | 0, b = Math.imul(Ue, Xe), p = p + Math.imul(Te, Je) | 0, c = c + Math.imul(Te, Ve) | 0, c = c + Math.imul(Me, Je) | 0, b = b + Math.imul(Me, Ve) | 0, p = p + Math.imul(Se, Ze) | 0, c = c + Math.imul(Se, Qe) | 0, c = c + Math.imul(Ce, Ze) | 0, b = b + Math.imul(Ce, Qe) | 0, p = p + Math.imul(ye, et) | 0, c = c + Math.imul(ye, tt) | 0, c = c + Math.imul(ie, et) | 0, b = b + Math.imul(ie, tt) | 0, p = p + Math.imul(me, rt) | 0, c = c + Math.imul(me, R) | 0, c = c + Math.imul(Ee, rt) | 0, b = b + Math.imul(Ee, R) | 0, p = p + Math.imul(le, re) | 0, c = c + Math.imul(le, fe) | 0, c = c + Math.imul(ge, re) | 0, b = b + Math.imul(ge, fe) | 0, p = p + Math.imul(z, be) | 0, c = c + Math.imul(z, ue) | 0, c = c + Math.imul(Z, be) | 0, b = b + Math.imul(Z, ue) | 0;
      var Ys = (P + p | 0) + ((c & 8191) << 13) | 0;
      P = (b + (c >>> 13) | 0) + (Ys >>> 26) | 0, Ys &= 67108863, p = Math.imul(pe, Je), c = Math.imul(pe, Ve), c = c + Math.imul(Ue, Je) | 0, b = Math.imul(Ue, Ve), p = p + Math.imul(Te, Ze) | 0, c = c + Math.imul(Te, Qe) | 0, c = c + Math.imul(Me, Ze) | 0, b = b + Math.imul(Me, Qe) | 0, p = p + Math.imul(Se, et) | 0, c = c + Math.imul(Se, tt) | 0, c = c + Math.imul(Ce, et) | 0, b = b + Math.imul(Ce, tt) | 0, p = p + Math.imul(ye, rt) | 0, c = c + Math.imul(ye, R) | 0, c = c + Math.imul(ie, rt) | 0, b = b + Math.imul(ie, R) | 0, p = p + Math.imul(me, re) | 0, c = c + Math.imul(me, fe) | 0, c = c + Math.imul(Ee, re) | 0, b = b + Math.imul(Ee, fe) | 0, p = p + Math.imul(le, be) | 0, c = c + Math.imul(le, ue) | 0, c = c + Math.imul(ge, be) | 0, b = b + Math.imul(ge, ue) | 0;
      var Xs = (P + p | 0) + ((c & 8191) << 13) | 0;
      P = (b + (c >>> 13) | 0) + (Xs >>> 26) | 0, Xs &= 67108863, p = Math.imul(pe, Ze), c = Math.imul(pe, Qe), c = c + Math.imul(Ue, Ze) | 0, b = Math.imul(Ue, Qe), p = p + Math.imul(Te, et) | 0, c = c + Math.imul(Te, tt) | 0, c = c + Math.imul(Me, et) | 0, b = b + Math.imul(Me, tt) | 0, p = p + Math.imul(Se, rt) | 0, c = c + Math.imul(Se, R) | 0, c = c + Math.imul(Ce, rt) | 0, b = b + Math.imul(Ce, R) | 0, p = p + Math.imul(ye, re) | 0, c = c + Math.imul(ye, fe) | 0, c = c + Math.imul(ie, re) | 0, b = b + Math.imul(ie, fe) | 0, p = p + Math.imul(me, be) | 0, c = c + Math.imul(me, ue) | 0, c = c + Math.imul(Ee, be) | 0, b = b + Math.imul(Ee, ue) | 0;
      var Js = (P + p | 0) + ((c & 8191) << 13) | 0;
      P = (b + (c >>> 13) | 0) + (Js >>> 26) | 0, Js &= 67108863, p = Math.imul(pe, et), c = Math.imul(pe, tt), c = c + Math.imul(Ue, et) | 0, b = Math.imul(Ue, tt), p = p + Math.imul(Te, rt) | 0, c = c + Math.imul(Te, R) | 0, c = c + Math.imul(Me, rt) | 0, b = b + Math.imul(Me, R) | 0, p = p + Math.imul(Se, re) | 0, c = c + Math.imul(Se, fe) | 0, c = c + Math.imul(Ce, re) | 0, b = b + Math.imul(Ce, fe) | 0, p = p + Math.imul(ye, be) | 0, c = c + Math.imul(ye, ue) | 0, c = c + Math.imul(ie, be) | 0, b = b + Math.imul(ie, ue) | 0;
      var Zs = (P + p | 0) + ((c & 8191) << 13) | 0;
      P = (b + (c >>> 13) | 0) + (Zs >>> 26) | 0, Zs &= 67108863, p = Math.imul(pe, rt), c = Math.imul(pe, R), c = c + Math.imul(Ue, rt) | 0, b = Math.imul(Ue, R), p = p + Math.imul(Te, re) | 0, c = c + Math.imul(Te, fe) | 0, c = c + Math.imul(Me, re) | 0, b = b + Math.imul(Me, fe) | 0, p = p + Math.imul(Se, be) | 0, c = c + Math.imul(Se, ue) | 0, c = c + Math.imul(Ce, be) | 0, b = b + Math.imul(Ce, ue) | 0;
      var Qs = (P + p | 0) + ((c & 8191) << 13) | 0;
      P = (b + (c >>> 13) | 0) + (Qs >>> 26) | 0, Qs &= 67108863, p = Math.imul(pe, re), c = Math.imul(pe, fe), c = c + Math.imul(Ue, re) | 0, b = Math.imul(Ue, fe), p = p + Math.imul(Te, be) | 0, c = c + Math.imul(Te, ue) | 0, c = c + Math.imul(Me, be) | 0, b = b + Math.imul(Me, ue) | 0;
      var eo = (P + p | 0) + ((c & 8191) << 13) | 0;
      P = (b + (c >>> 13) | 0) + (eo >>> 26) | 0, eo &= 67108863, p = Math.imul(pe, be), c = Math.imul(pe, ue), c = c + Math.imul(Ue, be) | 0, b = Math.imul(Ue, ue);
      var to = (P + p | 0) + ((c & 8191) << 13) | 0;
      return P = (b + (c >>> 13) | 0) + (to >>> 26) | 0, to &= 67108863, T[0] = xe, T[1] = ot, T[2] = Pe, T[3] = ze, T[4] = mt, T[5] = xr, T[6] = Fn, T[7] = Nt, T[8] = Vs, T[9] = Gs, T[10] = Ks, T[11] = qs, T[12] = Ys, T[13] = Xs, T[14] = Js, T[15] = Zs, T[16] = Qs, T[17] = eo, T[18] = to, P !== 0 && (T[19] = P, y.length++), y;
    };
    Math.imul || (M = F);
    function j(I, d, m) {
      m.negative = d.negative ^ I.negative, m.length = I.length + d.length;
      for (var y = 0, w = 0, A = 0; A < m.length - 1; A++) {
        var T = w;
        w = 0;
        for (var P = y & 67108863, p = Math.min(A, d.length - 1), c = Math.max(0, A - I.length + 1); c <= p; c++) {
          var b = A - c, k = I.words[b] | 0, l = d.words[c] | 0, v = k * l, L = v & 67108863;
          T = T + (v / 67108864 | 0) | 0, L = L + P | 0, P = L & 67108863, T = T + (L >>> 26) | 0, w += T >>> 26, T &= 67108863;
        }
        m.words[A] = P, y = T, T = w;
      }
      return y !== 0 ? m.words[A] = y : m.length--, m._strip();
    }
    function U(I, d, m) {
      return j(I, d, m);
    }
    s.prototype.mulTo = function(d, m) {
      var y, w = this.length + d.length;
      return this.length === 10 && d.length === 10 ? y = M(this, d, m) : w < 63 ? y = F(this, d, m) : w < 1024 ? y = j(this, d, m) : y = U(this, d, m), y;
    }, s.prototype.mul = function(d) {
      var m = new s(null);
      return m.words = new Array(this.length + d.length), this.mulTo(d, m);
    }, s.prototype.mulf = function(d) {
      var m = new s(null);
      return m.words = new Array(this.length + d.length), U(this, d, m);
    }, s.prototype.imul = function(d) {
      return this.clone().mulTo(d, this);
    }, s.prototype.imuln = function(d) {
      var m = d < 0;
      m && (d = -d), n(typeof d == "number"), n(d < 67108864);
      for (var y = 0, w = 0; w < this.length; w++) {
        var A = (this.words[w] | 0) * d, T = (A & 67108863) + (y & 67108863);
        y >>= 26, y += A / 67108864 | 0, y += T >>> 26, this.words[w] = T & 67108863;
      }
      return y !== 0 && (this.words[w] = y, this.length++), m ? this.ineg() : this;
    }, s.prototype.muln = function(d) {
      return this.clone().imuln(d);
    }, s.prototype.sqr = function() {
      return this.mul(this);
    }, s.prototype.isqr = function() {
      return this.imul(this.clone());
    }, s.prototype.pow = function(d) {
      var m = x(d);
      if (m.length === 0)
        return new s(1);
      for (var y = this, w = 0; w < m.length && m[w] === 0; w++, y = y.sqr())
        ;
      if (++w < m.length)
        for (var A = y.sqr(); w < m.length; w++, A = A.sqr())
          m[w] !== 0 && (y = y.mul(A));
      return y;
    }, s.prototype.iushln = function(d) {
      n(typeof d == "number" && d >= 0);
      var m = d % 26, y = (d - m) / 26, w = 67108863 >>> 26 - m << 26 - m, A;
      if (m !== 0) {
        var T = 0;
        for (A = 0; A < this.length; A++) {
          var P = this.words[A] & w, p = (this.words[A] | 0) - P << m;
          this.words[A] = p | T, T = P >>> 26 - m;
        }
        T && (this.words[A] = T, this.length++);
      }
      if (y !== 0) {
        for (A = this.length - 1; A >= 0; A--)
          this.words[A + y] = this.words[A];
        for (A = 0; A < y; A++)
          this.words[A] = 0;
        this.length += y;
      }
      return this._strip();
    }, s.prototype.ishln = function(d) {
      return n(this.negative === 0), this.iushln(d);
    }, s.prototype.iushrn = function(d, m, y) {
      n(typeof d == "number" && d >= 0);
      var w;
      m ? w = (m - m % 26) / 26 : w = 0;
      var A = d % 26, T = Math.min((d - A) / 26, this.length), P = 67108863 ^ 67108863 >>> A << A, p = y;
      if (w -= T, w = Math.max(0, w), p) {
        for (var c = 0; c < T; c++)
          p.words[c] = this.words[c];
        p.length = T;
      }
      if (T !== 0)
        if (this.length > T)
          for (this.length -= T, c = 0; c < this.length; c++)
            this.words[c] = this.words[c + T];
        else
          this.words[0] = 0, this.length = 1;
      var b = 0;
      for (c = this.length - 1; c >= 0 && (b !== 0 || c >= w); c--) {
        var k = this.words[c] | 0;
        this.words[c] = b << 26 - A | k >>> A, b = k & P;
      }
      return p && b !== 0 && (p.words[p.length++] = b), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
    }, s.prototype.ishrn = function(d, m, y) {
      return n(this.negative === 0), this.iushrn(d, m, y);
    }, s.prototype.shln = function(d) {
      return this.clone().ishln(d);
    }, s.prototype.ushln = function(d) {
      return this.clone().iushln(d);
    }, s.prototype.shrn = function(d) {
      return this.clone().ishrn(d);
    }, s.prototype.ushrn = function(d) {
      return this.clone().iushrn(d);
    }, s.prototype.testn = function(d) {
      n(typeof d == "number" && d >= 0);
      var m = d % 26, y = (d - m) / 26, w = 1 << m;
      if (this.length <= y)
        return !1;
      var A = this.words[y];
      return !!(A & w);
    }, s.prototype.imaskn = function(d) {
      n(typeof d == "number" && d >= 0);
      var m = d % 26, y = (d - m) / 26;
      if (n(this.negative === 0, "imaskn works only with positive numbers"), this.length <= y)
        return this;
      if (m !== 0 && y++, this.length = Math.min(y, this.length), m !== 0) {
        var w = 67108863 ^ 67108863 >>> m << m;
        this.words[this.length - 1] &= w;
      }
      return this._strip();
    }, s.prototype.maskn = function(d) {
      return this.clone().imaskn(d);
    }, s.prototype.iaddn = function(d) {
      return n(typeof d == "number"), n(d < 67108864), d < 0 ? this.isubn(-d) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= d ? (this.words[0] = d - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(d), this.negative = 1, this) : this._iaddn(d);
    }, s.prototype._iaddn = function(d) {
      this.words[0] += d;
      for (var m = 0; m < this.length && this.words[m] >= 67108864; m++)
        this.words[m] -= 67108864, m === this.length - 1 ? this.words[m + 1] = 1 : this.words[m + 1]++;
      return this.length = Math.max(this.length, m + 1), this;
    }, s.prototype.isubn = function(d) {
      if (n(typeof d == "number"), n(d < 67108864), d < 0)
        return this.iaddn(-d);
      if (this.negative !== 0)
        return this.negative = 0, this.iaddn(d), this.negative = 1, this;
      if (this.words[0] -= d, this.length === 1 && this.words[0] < 0)
        this.words[0] = -this.words[0], this.negative = 1;
      else
        for (var m = 0; m < this.length && this.words[m] < 0; m++)
          this.words[m] += 67108864, this.words[m + 1] -= 1;
      return this._strip();
    }, s.prototype.addn = function(d) {
      return this.clone().iaddn(d);
    }, s.prototype.subn = function(d) {
      return this.clone().isubn(d);
    }, s.prototype.iabs = function() {
      return this.negative = 0, this;
    }, s.prototype.abs = function() {
      return this.clone().iabs();
    }, s.prototype._ishlnsubmul = function(d, m, y) {
      var w = d.length + y, A;
      this._expand(w);
      var T, P = 0;
      for (A = 0; A < d.length; A++) {
        T = (this.words[A + y] | 0) + P;
        var p = (d.words[A] | 0) * m;
        T -= p & 67108863, P = (T >> 26) - (p / 67108864 | 0), this.words[A + y] = T & 67108863;
      }
      for (; A < this.length - y; A++)
        T = (this.words[A + y] | 0) + P, P = T >> 26, this.words[A + y] = T & 67108863;
      if (P === 0)
        return this._strip();
      for (n(P === -1), P = 0, A = 0; A < this.length; A++)
        T = -(this.words[A] | 0) + P, P = T >> 26, this.words[A] = T & 67108863;
      return this.negative = 1, this._strip();
    }, s.prototype._wordDiv = function(d, m) {
      var y = this.length - d.length, w = this.clone(), A = d, T = A.words[A.length - 1] | 0, P = this._countBits(T);
      y = 26 - P, y !== 0 && (A = A.ushln(y), w.iushln(y), T = A.words[A.length - 1] | 0);
      var p = w.length - A.length, c;
      if (m !== "mod") {
        c = new s(null), c.length = p + 1, c.words = new Array(c.length);
        for (var b = 0; b < c.length; b++)
          c.words[b] = 0;
      }
      var k = w.clone()._ishlnsubmul(A, 1, p);
      k.negative === 0 && (w = k, c && (c.words[p] = 1));
      for (var l = p - 1; l >= 0; l--) {
        var v = (w.words[A.length + l] | 0) * 67108864 + (w.words[A.length + l - 1] | 0);
        for (v = Math.min(v / T | 0, 67108863), w._ishlnsubmul(A, v, l); w.negative !== 0; )
          v--, w.negative = 0, w._ishlnsubmul(A, 1, l), w.isZero() || (w.negative ^= 1);
        c && (c.words[l] = v);
      }
      return c && c._strip(), w._strip(), m !== "div" && y !== 0 && w.iushrn(y), {
        div: c || null,
        mod: w
      };
    }, s.prototype.divmod = function(d, m, y) {
      if (n(!d.isZero()), this.isZero())
        return {
          div: new s(0),
          mod: new s(0)
        };
      var w, A, T;
      return this.negative !== 0 && d.negative === 0 ? (T = this.neg().divmod(d, m), m !== "mod" && (w = T.div.neg()), m !== "div" && (A = T.mod.neg(), y && A.negative !== 0 && A.iadd(d)), {
        div: w,
        mod: A
      }) : this.negative === 0 && d.negative !== 0 ? (T = this.divmod(d.neg(), m), m !== "mod" && (w = T.div.neg()), {
        div: w,
        mod: T.mod
      }) : (this.negative & d.negative) !== 0 ? (T = this.neg().divmod(d.neg(), m), m !== "div" && (A = T.mod.neg(), y && A.negative !== 0 && A.isub(d)), {
        div: T.div,
        mod: A
      }) : d.length > this.length || this.cmp(d) < 0 ? {
        div: new s(0),
        mod: this
      } : d.length === 1 ? m === "div" ? {
        div: this.divn(d.words[0]),
        mod: null
      } : m === "mod" ? {
        div: null,
        mod: new s(this.modrn(d.words[0]))
      } : {
        div: this.divn(d.words[0]),
        mod: new s(this.modrn(d.words[0]))
      } : this._wordDiv(d, m);
    }, s.prototype.div = function(d) {
      return this.divmod(d, "div", !1).div;
    }, s.prototype.mod = function(d) {
      return this.divmod(d, "mod", !1).mod;
    }, s.prototype.umod = function(d) {
      return this.divmod(d, "mod", !0).mod;
    }, s.prototype.divRound = function(d) {
      var m = this.divmod(d);
      if (m.mod.isZero())
        return m.div;
      var y = m.div.negative !== 0 ? m.mod.isub(d) : m.mod, w = d.ushrn(1), A = d.andln(1), T = y.cmp(w);
      return T < 0 || A === 1 && T === 0 ? m.div : m.div.negative !== 0 ? m.div.isubn(1) : m.div.iaddn(1);
    }, s.prototype.modrn = function(d) {
      var m = d < 0;
      m && (d = -d), n(d <= 67108863);
      for (var y = (1 << 26) % d, w = 0, A = this.length - 1; A >= 0; A--)
        w = (y * w + (this.words[A] | 0)) % d;
      return m ? -w : w;
    }, s.prototype.modn = function(d) {
      return this.modrn(d);
    }, s.prototype.idivn = function(d) {
      var m = d < 0;
      m && (d = -d), n(d <= 67108863);
      for (var y = 0, w = this.length - 1; w >= 0; w--) {
        var A = (this.words[w] | 0) + y * 67108864;
        this.words[w] = A / d | 0, y = A % d;
      }
      return this._strip(), m ? this.ineg() : this;
    }, s.prototype.divn = function(d) {
      return this.clone().idivn(d);
    }, s.prototype.egcd = function(d) {
      n(d.negative === 0), n(!d.isZero());
      var m = this, y = d.clone();
      m.negative !== 0 ? m = m.umod(d) : m = m.clone();
      for (var w = new s(1), A = new s(0), T = new s(0), P = new s(1), p = 0; m.isEven() && y.isEven(); )
        m.iushrn(1), y.iushrn(1), ++p;
      for (var c = y.clone(), b = m.clone(); !m.isZero(); ) {
        for (var k = 0, l = 1; (m.words[0] & l) === 0 && k < 26; ++k, l <<= 1)
          ;
        if (k > 0)
          for (m.iushrn(k); k-- > 0; )
            (w.isOdd() || A.isOdd()) && (w.iadd(c), A.isub(b)), w.iushrn(1), A.iushrn(1);
        for (var v = 0, L = 1; (y.words[0] & L) === 0 && v < 26; ++v, L <<= 1)
          ;
        if (v > 0)
          for (y.iushrn(v); v-- > 0; )
            (T.isOdd() || P.isOdd()) && (T.iadd(c), P.isub(b)), T.iushrn(1), P.iushrn(1);
        m.cmp(y) >= 0 ? (m.isub(y), w.isub(T), A.isub(P)) : (y.isub(m), T.isub(w), P.isub(A));
      }
      return {
        a: T,
        b: P,
        gcd: y.iushln(p)
      };
    }, s.prototype._invmp = function(d) {
      n(d.negative === 0), n(!d.isZero());
      var m = this, y = d.clone();
      m.negative !== 0 ? m = m.umod(d) : m = m.clone();
      for (var w = new s(1), A = new s(0), T = y.clone(); m.cmpn(1) > 0 && y.cmpn(1) > 0; ) {
        for (var P = 0, p = 1; (m.words[0] & p) === 0 && P < 26; ++P, p <<= 1)
          ;
        if (P > 0)
          for (m.iushrn(P); P-- > 0; )
            w.isOdd() && w.iadd(T), w.iushrn(1);
        for (var c = 0, b = 1; (y.words[0] & b) === 0 && c < 26; ++c, b <<= 1)
          ;
        if (c > 0)
          for (y.iushrn(c); c-- > 0; )
            A.isOdd() && A.iadd(T), A.iushrn(1);
        m.cmp(y) >= 0 ? (m.isub(y), w.isub(A)) : (y.isub(m), A.isub(w));
      }
      var k;
      return m.cmpn(1) === 0 ? k = w : k = A, k.cmpn(0) < 0 && k.iadd(d), k;
    }, s.prototype.gcd = function(d) {
      if (this.isZero())
        return d.abs();
      if (d.isZero())
        return this.abs();
      var m = this.clone(), y = d.clone();
      m.negative = 0, y.negative = 0;
      for (var w = 0; m.isEven() && y.isEven(); w++)
        m.iushrn(1), y.iushrn(1);
      do {
        for (; m.isEven(); )
          m.iushrn(1);
        for (; y.isEven(); )
          y.iushrn(1);
        var A = m.cmp(y);
        if (A < 0) {
          var T = m;
          m = y, y = T;
        } else if (A === 0 || y.cmpn(1) === 0)
          break;
        m.isub(y);
      } while (!0);
      return y.iushln(w);
    }, s.prototype.invm = function(d) {
      return this.egcd(d).a.umod(d);
    }, s.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, s.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, s.prototype.andln = function(d) {
      return this.words[0] & d;
    }, s.prototype.bincn = function(d) {
      n(typeof d == "number");
      var m = d % 26, y = (d - m) / 26, w = 1 << m;
      if (this.length <= y)
        return this._expand(y + 1), this.words[y] |= w, this;
      for (var A = w, T = y; A !== 0 && T < this.length; T++) {
        var P = this.words[T] | 0;
        P += A, A = P >>> 26, P &= 67108863, this.words[T] = P;
      }
      return A !== 0 && (this.words[T] = A, this.length++), this;
    }, s.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, s.prototype.cmpn = function(d) {
      var m = d < 0;
      if (this.negative !== 0 && !m)
        return -1;
      if (this.negative === 0 && m)
        return 1;
      this._strip();
      var y;
      if (this.length > 1)
        y = 1;
      else {
        m && (d = -d), n(d <= 67108863, "Number is too big");
        var w = this.words[0] | 0;
        y = w === d ? 0 : w < d ? -1 : 1;
      }
      return this.negative !== 0 ? -y | 0 : y;
    }, s.prototype.cmp = function(d) {
      if (this.negative !== 0 && d.negative === 0)
        return -1;
      if (this.negative === 0 && d.negative !== 0)
        return 1;
      var m = this.ucmp(d);
      return this.negative !== 0 ? -m | 0 : m;
    }, s.prototype.ucmp = function(d) {
      if (this.length > d.length)
        return 1;
      if (this.length < d.length)
        return -1;
      for (var m = 0, y = this.length - 1; y >= 0; y--) {
        var w = this.words[y] | 0, A = d.words[y] | 0;
        if (w !== A) {
          w < A ? m = -1 : w > A && (m = 1);
          break;
        }
      }
      return m;
    }, s.prototype.gtn = function(d) {
      return this.cmpn(d) === 1;
    }, s.prototype.gt = function(d) {
      return this.cmp(d) === 1;
    }, s.prototype.gten = function(d) {
      return this.cmpn(d) >= 0;
    }, s.prototype.gte = function(d) {
      return this.cmp(d) >= 0;
    }, s.prototype.ltn = function(d) {
      return this.cmpn(d) === -1;
    }, s.prototype.lt = function(d) {
      return this.cmp(d) === -1;
    }, s.prototype.lten = function(d) {
      return this.cmpn(d) <= 0;
    }, s.prototype.lte = function(d) {
      return this.cmp(d) <= 0;
    }, s.prototype.eqn = function(d) {
      return this.cmpn(d) === 0;
    }, s.prototype.eq = function(d) {
      return this.cmp(d) === 0;
    }, s.red = function(d) {
      return new q(d);
    }, s.prototype.toRed = function(d) {
      return n(!this.red, "Already a number in reduction context"), n(this.negative === 0, "red works only with positives"), d.convertTo(this)._forceRed(d);
    }, s.prototype.fromRed = function() {
      return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, s.prototype._forceRed = function(d) {
      return this.red = d, this;
    }, s.prototype.forceRed = function(d) {
      return n(!this.red, "Already a number in reduction context"), this._forceRed(d);
    }, s.prototype.redAdd = function(d) {
      return n(this.red, "redAdd works only with red numbers"), this.red.add(this, d);
    }, s.prototype.redIAdd = function(d) {
      return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, d);
    }, s.prototype.redSub = function(d) {
      return n(this.red, "redSub works only with red numbers"), this.red.sub(this, d);
    }, s.prototype.redISub = function(d) {
      return n(this.red, "redISub works only with red numbers"), this.red.isub(this, d);
    }, s.prototype.redShl = function(d) {
      return n(this.red, "redShl works only with red numbers"), this.red.shl(this, d);
    }, s.prototype.redMul = function(d) {
      return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, d), this.red.mul(this, d);
    }, s.prototype.redIMul = function(d) {
      return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, d), this.red.imul(this, d);
    }, s.prototype.redSqr = function() {
      return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, s.prototype.redISqr = function() {
      return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, s.prototype.redSqrt = function() {
      return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, s.prototype.redInvm = function() {
      return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, s.prototype.redNeg = function() {
      return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, s.prototype.redPow = function(d) {
      return n(this.red && !d.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, d);
    };
    var B = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };
    function W(I, d) {
      this.name = I, this.p = new s(d, 16), this.n = this.p.bitLength(), this.k = new s(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    W.prototype._tmp = function() {
      var d = new s(null);
      return d.words = new Array(Math.ceil(this.n / 13)), d;
    }, W.prototype.ireduce = function(d) {
      var m = d, y;
      do
        this.split(m, this.tmp), m = this.imulK(m), m = m.iadd(this.tmp), y = m.bitLength();
      while (y > this.n);
      var w = y < this.n ? -1 : m.ucmp(this.p);
      return w === 0 ? (m.words[0] = 0, m.length = 1) : w > 0 ? m.isub(this.p) : m.strip !== void 0 ? m.strip() : m._strip(), m;
    }, W.prototype.split = function(d, m) {
      d.iushrn(this.n, 0, m);
    }, W.prototype.imulK = function(d) {
      return d.imul(this.k);
    };
    function G() {
      W.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    a(G, W), G.prototype.split = function(d, m) {
      for (var y = 4194303, w = Math.min(d.length, 9), A = 0; A < w; A++)
        m.words[A] = d.words[A];
      if (m.length = w, d.length <= 9) {
        d.words[0] = 0, d.length = 1;
        return;
      }
      var T = d.words[9];
      for (m.words[m.length++] = T & y, A = 10; A < d.length; A++) {
        var P = d.words[A] | 0;
        d.words[A - 10] = (P & y) << 4 | T >>> 22, T = P;
      }
      T >>>= 22, d.words[A - 10] = T, T === 0 && d.length > 10 ? d.length -= 10 : d.length -= 9;
    }, G.prototype.imulK = function(d) {
      d.words[d.length] = 0, d.words[d.length + 1] = 0, d.length += 2;
      for (var m = 0, y = 0; y < d.length; y++) {
        var w = d.words[y] | 0;
        m += w * 977, d.words[y] = m & 67108863, m = w * 64 + (m / 67108864 | 0);
      }
      return d.words[d.length - 1] === 0 && (d.length--, d.words[d.length - 1] === 0 && d.length--), d;
    };
    function K() {
      W.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    a(K, W);
    function te() {
      W.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    a(te, W);
    function se() {
      W.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    a(se, W), se.prototype.imulK = function(d) {
      for (var m = 0, y = 0; y < d.length; y++) {
        var w = (d.words[y] | 0) * 19 + m, A = w & 67108863;
        w >>>= 26, d.words[y] = A, m = w;
      }
      return m !== 0 && (d.words[d.length++] = m), d;
    }, s._prime = function(d) {
      if (B[d])
        return B[d];
      var m;
      if (d === "k256")
        m = new G();
      else if (d === "p224")
        m = new K();
      else if (d === "p192")
        m = new te();
      else if (d === "p25519")
        m = new se();
      else
        throw new Error("Unknown prime " + d);
      return B[d] = m, m;
    };
    function q(I) {
      if (typeof I == "string") {
        var d = s._prime(I);
        this.m = d.p, this.prime = d;
      } else
        n(I.gtn(1), "modulus must be greater than 1"), this.m = I, this.prime = null;
    }
    q.prototype._verify1 = function(d) {
      n(d.negative === 0, "red works only with positives"), n(d.red, "red works only with red numbers");
    }, q.prototype._verify2 = function(d, m) {
      n((d.negative | m.negative) === 0, "red works only with positives"), n(
        d.red && d.red === m.red,
        "red works only with red numbers"
      );
    }, q.prototype.imod = function(d) {
      return this.prime ? this.prime.ireduce(d)._forceRed(this) : (h(d, d.umod(this.m)._forceRed(this)), d);
    }, q.prototype.neg = function(d) {
      return d.isZero() ? d.clone() : this.m.sub(d)._forceRed(this);
    }, q.prototype.add = function(d, m) {
      this._verify2(d, m);
      var y = d.add(m);
      return y.cmp(this.m) >= 0 && y.isub(this.m), y._forceRed(this);
    }, q.prototype.iadd = function(d, m) {
      this._verify2(d, m);
      var y = d.iadd(m);
      return y.cmp(this.m) >= 0 && y.isub(this.m), y;
    }, q.prototype.sub = function(d, m) {
      this._verify2(d, m);
      var y = d.sub(m);
      return y.cmpn(0) < 0 && y.iadd(this.m), y._forceRed(this);
    }, q.prototype.isub = function(d, m) {
      this._verify2(d, m);
      var y = d.isub(m);
      return y.cmpn(0) < 0 && y.iadd(this.m), y;
    }, q.prototype.shl = function(d, m) {
      return this._verify1(d), this.imod(d.ushln(m));
    }, q.prototype.imul = function(d, m) {
      return this._verify2(d, m), this.imod(d.imul(m));
    }, q.prototype.mul = function(d, m) {
      return this._verify2(d, m), this.imod(d.mul(m));
    }, q.prototype.isqr = function(d) {
      return this.imul(d, d.clone());
    }, q.prototype.sqr = function(d) {
      return this.mul(d, d);
    }, q.prototype.sqrt = function(d) {
      if (d.isZero())
        return d.clone();
      var m = this.m.andln(3);
      if (n(m % 2 === 1), m === 3) {
        var y = this.m.add(new s(1)).iushrn(2);
        return this.pow(d, y);
      }
      for (var w = this.m.subn(1), A = 0; !w.isZero() && w.andln(1) === 0; )
        A++, w.iushrn(1);
      n(!w.isZero());
      var T = new s(1).toRed(this), P = T.redNeg(), p = this.m.subn(1).iushrn(1), c = this.m.bitLength();
      for (c = new s(2 * c * c).toRed(this); this.pow(c, p).cmp(P) !== 0; )
        c.redIAdd(P);
      for (var b = this.pow(c, w), k = this.pow(d, w.addn(1).iushrn(1)), l = this.pow(d, w), v = A; l.cmp(T) !== 0; ) {
        for (var L = l, _ = 0; L.cmp(T) !== 0; _++)
          L = L.redSqr();
        n(_ < v);
        var H = this.pow(b, new s(1).iushln(v - _ - 1));
        k = k.redMul(H), b = H.redSqr(), l = l.redMul(b), v = _;
      }
      return k;
    }, q.prototype.invm = function(d) {
      var m = d._invmp(this.m);
      return m.negative !== 0 ? (m.negative = 0, this.imod(m).redNeg()) : this.imod(m);
    }, q.prototype.pow = function(d, m) {
      if (m.isZero())
        return new s(1).toRed(this);
      if (m.cmpn(1) === 0)
        return d.clone();
      var y = 4, w = new Array(1 << y);
      w[0] = new s(1).toRed(this), w[1] = d;
      for (var A = 2; A < w.length; A++)
        w[A] = this.mul(w[A - 1], d);
      var T = w[0], P = 0, p = 0, c = m.bitLength() % 26;
      for (c === 0 && (c = 26), A = m.length - 1; A >= 0; A--) {
        for (var b = m.words[A], k = c - 1; k >= 0; k--) {
          var l = b >> k & 1;
          if (T !== w[0] && (T = this.sqr(T)), l === 0 && P === 0) {
            p = 0;
            continue;
          }
          P <<= 1, P |= l, p++, !(p !== y && (A !== 0 || k !== 0)) && (T = this.mul(T, w[P]), p = 0, P = 0);
        }
        c = 26;
      }
      return T;
    }, q.prototype.convertTo = function(d) {
      var m = d.umod(this.m);
      return m === d ? m.clone() : m;
    }, q.prototype.convertFrom = function(d) {
      var m = d.clone();
      return m.red = null, m;
    }, s.mont = function(d) {
      return new oe(d);
    };
    function oe(I) {
      q.call(this, I), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new s(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    a(oe, q), oe.prototype.convertTo = function(d) {
      return this.imod(d.ushln(this.shift));
    }, oe.prototype.convertFrom = function(d) {
      var m = this.imod(d.mul(this.rinv));
      return m.red = null, m;
    }, oe.prototype.imul = function(d, m) {
      if (d.isZero() || m.isZero())
        return d.words[0] = 0, d.length = 1, d;
      var y = d.imul(m), w = y.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), A = y.isub(w).iushrn(this.shift), T = A;
      return A.cmp(this.m) >= 0 ? T = A.isub(this.m) : A.cmpn(0) < 0 && (T = A.iadd(this.m)), T._forceRed(this);
    }, oe.prototype.mul = function(d, m) {
      if (d.isZero() || m.isZero())
        return new s(0)._forceRed(this);
      var y = d.mul(m), w = y.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), A = y.isub(w).iushrn(this.shift), T = A;
      return A.cmp(this.m) >= 0 ? T = A.isub(this.m) : A.cmpn(0) < 0 && (T = A.iadd(this.m)), T._forceRed(this);
    }, oe.prototype.invm = function(d) {
      var m = this.imod(d._invmp(this.m).mul(this.r2));
      return m._forceRed(this);
    };
  })(t, Kt);
})(Y0);
const we = Y0.exports, _1 = "logger/5.7.0";
let lc = !1, uc = !1;
const as = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
let hc = as.default, so = null;
function T1() {
  try {
    const t = [];
    if (["NFD", "NFC", "NFKD", "NFKC"].forEach((e) => {
      try {
        if ("test".normalize(e) !== "test")
          throw new Error("bad normalize");
      } catch {
        t.push(e);
      }
    }), t.length)
      throw new Error("missing " + t.join(", "));
    if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769))
      throw new Error("broken implementation");
  } catch (t) {
    return t.message;
  }
  return null;
}
const mc = T1();
var ps;
(function(t) {
  t.DEBUG = "DEBUG", t.INFO = "INFO", t.WARNING = "WARNING", t.ERROR = "ERROR", t.OFF = "OFF";
})(ps || (ps = {}));
var Gt;
(function(t) {
  t.UNKNOWN_ERROR = "UNKNOWN_ERROR", t.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", t.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", t.NETWORK_ERROR = "NETWORK_ERROR", t.SERVER_ERROR = "SERVER_ERROR", t.TIMEOUT = "TIMEOUT", t.BUFFER_OVERRUN = "BUFFER_OVERRUN", t.NUMERIC_FAULT = "NUMERIC_FAULT", t.MISSING_NEW = "MISSING_NEW", t.INVALID_ARGUMENT = "INVALID_ARGUMENT", t.MISSING_ARGUMENT = "MISSING_ARGUMENT", t.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", t.CALL_EXCEPTION = "CALL_EXCEPTION", t.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", t.NONCE_EXPIRED = "NONCE_EXPIRED", t.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", t.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", t.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", t.ACTION_REJECTED = "ACTION_REJECTED";
})(Gt || (Gt = {}));
const pc = "0123456789abcdef";
class V {
  constructor(e) {
    Object.defineProperty(this, "version", {
      enumerable: !0,
      value: e,
      writable: !1
    });
  }
  _log(e, r) {
    const n = e.toLowerCase();
    as[n] == null && this.throwArgumentError("invalid log level name", "logLevel", e), !(hc > as[n]) && console.log.apply(console, r);
  }
  debug(...e) {
    this._log(V.levels.DEBUG, e);
  }
  info(...e) {
    this._log(V.levels.INFO, e);
  }
  warn(...e) {
    this._log(V.levels.WARNING, e);
  }
  makeError(e, r, n) {
    if (uc)
      return this.makeError("censored error", r, {});
    r || (r = V.errors.UNKNOWN_ERROR), n || (n = {});
    const a = [];
    Object.keys(n).forEach((f) => {
      const u = n[f];
      try {
        if (u instanceof Uint8Array) {
          let h = "";
          for (let g = 0; g < u.length; g++)
            h += pc[u[g] >> 4], h += pc[u[g] & 15];
          a.push(f + "=Uint8Array(0x" + h + ")");
        } else
          a.push(f + "=" + JSON.stringify(u));
      } catch {
        a.push(f + "=" + JSON.stringify(n[f].toString()));
      }
    }), a.push(`code=${r}`), a.push(`version=${this.version}`);
    const s = e;
    let o = "";
    switch (r) {
      case Gt.NUMERIC_FAULT: {
        o = "NUMERIC_FAULT";
        const f = e;
        switch (f) {
          case "overflow":
          case "underflow":
          case "division-by-zero":
            o += "-" + f;
            break;
          case "negative-power":
          case "negative-width":
            o += "-unsupported";
            break;
          case "unbound-bitwise-result":
            o += "-unbound-result";
            break;
        }
        break;
      }
      case Gt.CALL_EXCEPTION:
      case Gt.INSUFFICIENT_FUNDS:
      case Gt.MISSING_NEW:
      case Gt.NONCE_EXPIRED:
      case Gt.REPLACEMENT_UNDERPRICED:
      case Gt.TRANSACTION_REPLACED:
      case Gt.UNPREDICTABLE_GAS_LIMIT:
        o = r;
        break;
    }
    o && (e += " [ See: https://links.ethers.org/v5-errors-" + o + " ]"), a.length && (e += " (" + a.join(", ") + ")");
    const i = new Error(e);
    return i.reason = s, i.code = r, Object.keys(n).forEach(function(f) {
      i[f] = n[f];
    }), i;
  }
  throwError(e, r, n) {
    throw this.makeError(e, r, n);
  }
  throwArgumentError(e, r, n) {
    return this.throwError(e, V.errors.INVALID_ARGUMENT, {
      argument: r,
      value: n
    });
  }
  assert(e, r, n, a) {
    e || this.throwError(r, n, a);
  }
  assertArgument(e, r, n, a) {
    e || this.throwArgumentError(r, n, a);
  }
  checkNormalize(e) {
    mc && this.throwError("platform missing String.prototype.normalize", V.errors.UNSUPPORTED_OPERATION, {
      operation: "String.prototype.normalize",
      form: mc
    });
  }
  checkSafeUint53(e, r) {
    typeof e == "number" && (r == null && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, V.errors.NUMERIC_FAULT, {
      operation: "checkSafeInteger",
      fault: "out-of-safe-range",
      value: e
    }), e % 1 && this.throwError(r, V.errors.NUMERIC_FAULT, {
      operation: "checkSafeInteger",
      fault: "non-integer",
      value: e
    }));
  }
  checkArgumentCount(e, r, n) {
    n ? n = ": " + n : n = "", e < r && this.throwError("missing argument" + n, V.errors.MISSING_ARGUMENT, {
      count: e,
      expectedCount: r
    }), e > r && this.throwError("too many arguments" + n, V.errors.UNEXPECTED_ARGUMENT, {
      count: e,
      expectedCount: r
    });
  }
  checkNew(e, r) {
    (e === Object || e == null) && this.throwError("missing new", V.errors.MISSING_NEW, { name: r.name });
  }
  checkAbstract(e, r) {
    e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", V.errors.UNSUPPORTED_OPERATION, { name: e.name, operation: "new" }) : (e === Object || e == null) && this.throwError("missing new", V.errors.MISSING_NEW, { name: r.name });
  }
  static globalLogger() {
    return so || (so = new V(_1)), so;
  }
  static setCensorship(e, r) {
    if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", V.errors.UNSUPPORTED_OPERATION, {
      operation: "setCensorship"
    }), lc) {
      if (!e)
        return;
      this.globalLogger().throwError("error censorship permanent", V.errors.UNSUPPORTED_OPERATION, {
        operation: "setCensorship"
      });
    }
    uc = !!e, lc = !!r;
  }
  static setLogLevel(e) {
    const r = as[e.toLowerCase()];
    if (r == null) {
      V.globalLogger().warn("invalid log level - " + e);
      return;
    }
    hc = r;
  }
  static from(e) {
    return new V(e);
  }
}
V.errors = Gt;
V.levels = ps;
const M1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get LogLevel() {
    return ps;
  },
  get ErrorCode() {
    return Gt;
  },
  Logger: V
}, Symbol.toStringTag, { value: "Module" })), U1 = "bytes/5.7.0", ut = new V(U1);
function X0(t) {
  return !!t.toHexString;
}
function jn(t) {
  return t.slice || (t.slice = function() {
    const e = Array.prototype.slice.call(arguments);
    return jn(new Uint8Array(Array.prototype.slice.apply(t, e)));
  }), t;
}
function Oa(t) {
  return ft(t) && !(t.length % 2) || kn(t);
}
function bc(t) {
  return typeof t == "number" && t == t && t % 1 === 0;
}
function kn(t) {
  if (t == null)
    return !1;
  if (t.constructor === Uint8Array)
    return !0;
  if (typeof t == "string" || !bc(t.length) || t.length < 0)
    return !1;
  for (let e = 0; e < t.length; e++) {
    const r = t[e];
    if (!bc(r) || r < 0 || r >= 256)
      return !1;
  }
  return !0;
}
function ae(t, e) {
  if (e || (e = {}), typeof t == "number") {
    ut.checkSafeUint53(t, "invalid arrayify value");
    const r = [];
    for (; t; )
      r.unshift(t & 255), t = parseInt(String(t / 256));
    return r.length === 0 && r.push(0), jn(new Uint8Array(r));
  }
  if (e.allowMissingPrefix && typeof t == "string" && t.substring(0, 2) !== "0x" && (t = "0x" + t), X0(t) && (t = t.toHexString()), ft(t)) {
    let r = t.substring(2);
    r.length % 2 && (e.hexPad === "left" ? r = "0" + r : e.hexPad === "right" ? r += "0" : ut.throwArgumentError("hex data is odd-length", "value", t));
    const n = [];
    for (let a = 0; a < r.length; a += 2)
      n.push(parseInt(r.substring(a, a + 2), 16));
    return jn(new Uint8Array(n));
  }
  return kn(t) ? jn(new Uint8Array(t)) : ut.throwArgumentError("invalid arrayify value", "value", t);
}
function gt(t) {
  const e = t.map((a) => ae(a)), r = e.reduce((a, s) => a + s.length, 0), n = new Uint8Array(r);
  return e.reduce((a, s) => (n.set(s, a), a + s.length), 0), jn(n);
}
function Sr(t) {
  let e = ae(t);
  if (e.length === 0)
    return e;
  let r = 0;
  for (; r < e.length && e[r] === 0; )
    r++;
  return r && (e = e.slice(r)), e;
}
function ga(t, e) {
  t = ae(t), t.length > e && ut.throwArgumentError("value out of range", "value", arguments[0]);
  const r = new Uint8Array(e);
  return r.set(t, e - t.length), jn(r);
}
function ft(t, e) {
  return !(typeof t != "string" || !t.match(/^0x[0-9A-Fa-f]*$/) || e && t.length !== 2 + 2 * e);
}
const oo = "0123456789abcdef";
function ce(t, e) {
  if (e || (e = {}), typeof t == "number") {
    ut.checkSafeUint53(t, "invalid hexlify value");
    let r = "";
    for (; t; )
      r = oo[t & 15] + r, t = Math.floor(t / 16);
    return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00";
  }
  if (typeof t == "bigint")
    return t = t.toString(16), t.length % 2 ? "0x0" + t : "0x" + t;
  if (e.allowMissingPrefix && typeof t == "string" && t.substring(0, 2) !== "0x" && (t = "0x" + t), X0(t))
    return t.toHexString();
  if (ft(t))
    return t.length % 2 && (e.hexPad === "left" ? t = "0x0" + t.substring(2) : e.hexPad === "right" ? t += "0" : ut.throwArgumentError("hex data is odd-length", "value", t)), t.toLowerCase();
  if (kn(t)) {
    let r = "0x";
    for (let n = 0; n < t.length; n++) {
      let a = t[n];
      r += oo[(a & 240) >> 4] + oo[a & 15];
    }
    return r;
  }
  return ut.throwArgumentError("invalid hexlify value", "value", t);
}
function Ea(t) {
  if (typeof t != "string")
    t = ce(t);
  else if (!ft(t) || t.length % 2)
    return null;
  return (t.length - 2) / 2;
}
function Vr(t, e, r) {
  return typeof t != "string" ? t = ce(t) : (!ft(t) || t.length % 2) && ut.throwArgumentError("invalid hexData", "value", t), e = 2 + 2 * e, r != null ? "0x" + t.substring(e, 2 + 2 * r) : "0x" + t.substring(e);
}
function an(t) {
  let e = "0x";
  return t.forEach((r) => {
    e += ce(r).substring(2);
  }), e;
}
function P1(t) {
  const e = J0(ce(t, { hexPad: "left" }));
  return e === "0x" ? "0x0" : e;
}
function J0(t) {
  typeof t != "string" && (t = ce(t)), ft(t) || ut.throwArgumentError("invalid hex string", "value", t), t = t.substring(2);
  let e = 0;
  for (; e < t.length && t[e] === "0"; )
    e++;
  return "0x" + t.substring(e);
}
function xt(t, e) {
  for (typeof t != "string" ? t = ce(t) : ft(t) || ut.throwArgumentError("invalid hex string", "value", t), t.length > 2 * e + 2 && ut.throwArgumentError("value out of range", "value", arguments[1]); t.length < 2 * e + 2; )
    t = "0x0" + t.substring(2);
  return t;
}
function Sn(t) {
  const e = {
    r: "0x",
    s: "0x",
    _vs: "0x",
    recoveryParam: 0,
    v: 0,
    yParityAndS: "0x",
    compact: "0x"
  };
  if (Oa(t)) {
    let r = ae(t);
    r.length === 64 ? (e.v = 27 + (r[32] >> 7), r[32] &= 127, e.r = ce(r.slice(0, 32)), e.s = ce(r.slice(32, 64))) : r.length === 65 ? (e.r = ce(r.slice(0, 32)), e.s = ce(r.slice(32, 64)), e.v = r[64]) : ut.throwArgumentError("invalid signature string", "signature", t), e.v < 27 && (e.v === 0 || e.v === 1 ? e.v += 27 : ut.throwArgumentError("signature invalid v byte", "signature", t)), e.recoveryParam = 1 - e.v % 2, e.recoveryParam && (r[32] |= 128), e._vs = ce(r.slice(32, 64));
  } else {
    if (e.r = t.r, e.s = t.s, e.v = t.v, e.recoveryParam = t.recoveryParam, e._vs = t._vs, e._vs != null) {
      const a = ga(ae(e._vs), 32);
      e._vs = ce(a);
      const s = a[0] >= 128 ? 1 : 0;
      e.recoveryParam == null ? e.recoveryParam = s : e.recoveryParam !== s && ut.throwArgumentError("signature recoveryParam mismatch _vs", "signature", t), a[0] &= 127;
      const o = ce(a);
      e.s == null ? e.s = o : e.s !== o && ut.throwArgumentError("signature v mismatch _vs", "signature", t);
    }
    if (e.recoveryParam == null)
      e.v == null ? ut.throwArgumentError("signature missing v and recoveryParam", "signature", t) : e.v === 0 || e.v === 1 ? e.recoveryParam = e.v : e.recoveryParam = 1 - e.v % 2;
    else if (e.v == null)
      e.v = 27 + e.recoveryParam;
    else {
      const a = e.v === 0 || e.v === 1 ? e.v : 1 - e.v % 2;
      e.recoveryParam !== a && ut.throwArgumentError("signature recoveryParam mismatch v", "signature", t);
    }
    e.r == null || !ft(e.r) ? ut.throwArgumentError("signature missing or invalid r", "signature", t) : e.r = xt(e.r, 32), e.s == null || !ft(e.s) ? ut.throwArgumentError("signature missing or invalid s", "signature", t) : e.s = xt(e.s, 32);
    const r = ae(e.s);
    r[0] >= 128 && ut.throwArgumentError("signature s out of range", "signature", t), e.recoveryParam && (r[0] |= 128);
    const n = ce(r);
    e._vs && (ft(e._vs) || ut.throwArgumentError("signature invalid _vs", "signature", t), e._vs = xt(e._vs, 32)), e._vs == null ? e._vs = n : e._vs !== n && ut.throwArgumentError("signature _vs mismatch v and s", "signature", t);
  }
  return e.yParityAndS = e._vs, e.compact = e.r + e.yParityAndS.substring(2), e;
}
function Mo(t) {
  return t = Sn(t), ce(gt([
    t.r,
    t.s,
    t.recoveryParam ? "0x1c" : "0x1b"
  ]));
}
const O1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBytesLike: Oa,
  isBytes: kn,
  arrayify: ae,
  concat: gt,
  stripZeros: Sr,
  zeroPad: ga,
  isHexString: ft,
  hexlify: ce,
  hexDataLength: Ea,
  hexDataSlice: Vr,
  hexConcat: an,
  hexValue: P1,
  hexStripZeros: J0,
  hexZeroPad: xt,
  splitSignature: Sn,
  joinSignature: Mo
}, Symbol.toStringTag, { value: "Module" })), Z0 = "bignumber/5.7.0";
var Ia = we.BN;
const jr = new V(Z0), io = {}, gc = 9007199254740991;
function N1(t) {
  return t != null && (de.isBigNumber(t) || typeof t == "number" && t % 1 === 0 || typeof t == "string" && !!t.match(/^-?[0-9]+$/) || ft(t) || typeof t == "bigint" || kn(t));
}
let xc = !1;
class de {
  constructor(e, r) {
    e !== io && jr.throwError("cannot call constructor directly; use BigNumber.from", V.errors.UNSUPPORTED_OPERATION, {
      operation: "new (BigNumber)"
    }), this._hex = r, this._isBigNumber = !0, Object.freeze(this);
  }
  fromTwos(e) {
    return Tt(De(this).fromTwos(e));
  }
  toTwos(e) {
    return Tt(De(this).toTwos(e));
  }
  abs() {
    return this._hex[0] === "-" ? de.from(this._hex.substring(1)) : this;
  }
  add(e) {
    return Tt(De(this).add(De(e)));
  }
  sub(e) {
    return Tt(De(this).sub(De(e)));
  }
  div(e) {
    return de.from(e).isZero() && $t("division-by-zero", "div"), Tt(De(this).div(De(e)));
  }
  mul(e) {
    return Tt(De(this).mul(De(e)));
  }
  mod(e) {
    const r = De(e);
    return r.isNeg() && $t("division-by-zero", "mod"), Tt(De(this).umod(r));
  }
  pow(e) {
    const r = De(e);
    return r.isNeg() && $t("negative-power", "pow"), Tt(De(this).pow(r));
  }
  and(e) {
    const r = De(e);
    return (this.isNegative() || r.isNeg()) && $t("unbound-bitwise-result", "and"), Tt(De(this).and(r));
  }
  or(e) {
    const r = De(e);
    return (this.isNegative() || r.isNeg()) && $t("unbound-bitwise-result", "or"), Tt(De(this).or(r));
  }
  xor(e) {
    const r = De(e);
    return (this.isNegative() || r.isNeg()) && $t("unbound-bitwise-result", "xor"), Tt(De(this).xor(r));
  }
  mask(e) {
    return (this.isNegative() || e < 0) && $t("negative-width", "mask"), Tt(De(this).maskn(e));
  }
  shl(e) {
    return (this.isNegative() || e < 0) && $t("negative-width", "shl"), Tt(De(this).shln(e));
  }
  shr(e) {
    return (this.isNegative() || e < 0) && $t("negative-width", "shr"), Tt(De(this).shrn(e));
  }
  eq(e) {
    return De(this).eq(De(e));
  }
  lt(e) {
    return De(this).lt(De(e));
  }
  lte(e) {
    return De(this).lte(De(e));
  }
  gt(e) {
    return De(this).gt(De(e));
  }
  gte(e) {
    return De(this).gte(De(e));
  }
  isNegative() {
    return this._hex[0] === "-";
  }
  isZero() {
    return De(this).isZero();
  }
  toNumber() {
    try {
      return De(this).toNumber();
    } catch {
      $t("overflow", "toNumber", this.toString());
    }
    return null;
  }
  toBigInt() {
    try {
      return BigInt(this.toString());
    } catch {
    }
    return jr.throwError("this platform does not support BigInt", V.errors.UNSUPPORTED_OPERATION, {
      value: this.toString()
    });
  }
  toString() {
    return arguments.length > 0 && (arguments[0] === 10 ? xc || (xc = !0, jr.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : arguments[0] === 16 ? jr.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", V.errors.UNEXPECTED_ARGUMENT, {}) : jr.throwError("BigNumber.toString does not accept parameters", V.errors.UNEXPECTED_ARGUMENT, {})), De(this).toString(10);
  }
  toHexString() {
    return this._hex;
  }
  toJSON(e) {
    return { type: "BigNumber", hex: this.toHexString() };
  }
  static from(e) {
    if (e instanceof de)
      return e;
    if (typeof e == "string")
      return e.match(/^-?0x[0-9a-f]+$/i) ? new de(io, ka(e)) : e.match(/^-?[0-9]+$/) ? new de(io, ka(new Ia(e))) : jr.throwArgumentError("invalid BigNumber string", "value", e);
    if (typeof e == "number")
      return e % 1 && $t("underflow", "BigNumber.from", e), (e >= gc || e <= -gc) && $t("overflow", "BigNumber.from", e), de.from(String(e));
    const r = e;
    if (typeof r == "bigint")
      return de.from(r.toString());
    if (kn(r))
      return de.from(ce(r));
    if (r)
      if (r.toHexString) {
        const n = r.toHexString();
        if (typeof n == "string")
          return de.from(n);
      } else {
        let n = r._hex;
        if (n == null && r.type === "BigNumber" && (n = r.hex), typeof n == "string" && (ft(n) || n[0] === "-" && ft(n.substring(1))))
          return de.from(n);
      }
    return jr.throwArgumentError("invalid BigNumber value", "value", e);
  }
  static isBigNumber(e) {
    return !!(e && e._isBigNumber);
  }
}
function ka(t) {
  if (typeof t != "string")
    return ka(t.toString(16));
  if (t[0] === "-")
    return t = t.substring(1), t[0] === "-" && jr.throwArgumentError("invalid hex", "value", t), t = ka(t), t === "0x00" ? t : "-" + t;
  if (t.substring(0, 2) !== "0x" && (t = "0x" + t), t === "0x")
    return "0x00";
  for (t.length % 2 && (t = "0x0" + t.substring(2)); t.length > 4 && t.substring(0, 4) === "0x00"; )
    t = "0x" + t.substring(4);
  return t;
}
function Tt(t) {
  return de.from(ka(t));
}
function De(t) {
  const e = de.from(t).toHexString();
  return e[0] === "-" ? new Ia("-" + e.substring(3), 16) : new Ia(e.substring(2), 16);
}
function $t(t, e, r) {
  const n = { fault: t, operation: e };
  return r != null && (n.value = r), jr.throwError(t, V.errors.NUMERIC_FAULT, n);
}
function L1(t) {
  return new Ia(t, 36).toString(16);
}
function j1(t) {
  return new Ia(t, 16).toString(36);
}
const Ft = new V(Z0), xa = {}, Q0 = de.from(0), ed = de.from(-1);
function td(t, e, r, n) {
  const a = { fault: e, operation: r };
  return n !== void 0 && (a.value = n), Ft.throwError(t, V.errors.NUMERIC_FAULT, a);
}
let ya = "0";
for (; ya.length < 256; )
  ya += ya;
function oi(t) {
  if (typeof t != "number")
    try {
      t = de.from(t).toNumber();
    } catch {
    }
  return typeof t == "number" && t >= 0 && t <= 256 && !(t % 1) ? "1" + ya.substring(0, t) : Ft.throwArgumentError("invalid decimal size", "decimals", t);
}
function ss(t, e) {
  e == null && (e = 0);
  const r = oi(e);
  t = de.from(t);
  const n = t.lt(Q0);
  n && (t = t.mul(ed));
  let a = t.mod(r).toString();
  for (; a.length < r.length - 1; )
    a = "0" + a;
  a = a.match(/^([0-9]*[1-9]|0)(0*)/)[1];
  const s = t.div(r).toString();
  return r.length === 1 ? t = s : t = s + "." + a, n && (t = "-" + t), t;
}
function yr(t, e) {
  e == null && (e = 0);
  const r = oi(e);
  (typeof t != "string" || !t.match(/^-?[0-9.]+$/)) && Ft.throwArgumentError("invalid decimal value", "value", t);
  const n = t.substring(0, 1) === "-";
  n && (t = t.substring(1)), t === "." && Ft.throwArgumentError("missing value", "value", t);
  const a = t.split(".");
  a.length > 2 && Ft.throwArgumentError("too many decimal points", "value", t);
  let s = a[0], o = a[1];
  for (s || (s = "0"), o || (o = "0"); o[o.length - 1] === "0"; )
    o = o.substring(0, o.length - 1);
  for (o.length > r.length - 1 && td("fractional component exceeds decimals", "underflow", "parseFixed"), o === "" && (o = "0"); o.length < r.length - 1; )
    o += "0";
  const i = de.from(s), f = de.from(o);
  let u = i.mul(r).add(f);
  return n && (u = u.mul(ed)), u;
}
class Wn {
  constructor(e, r, n, a) {
    e !== xa && Ft.throwError("cannot use FixedFormat constructor; use FixedFormat.from", V.errors.UNSUPPORTED_OPERATION, {
      operation: "new FixedFormat"
    }), this.signed = r, this.width = n, this.decimals = a, this.name = (r ? "" : "u") + "fixed" + String(n) + "x" + String(a), this._multiplier = oi(a), Object.freeze(this);
  }
  static from(e) {
    if (e instanceof Wn)
      return e;
    typeof e == "number" && (e = `fixed128x${e}`);
    let r = !0, n = 128, a = 18;
    if (typeof e == "string") {
      if (e !== "fixed")
        if (e === "ufixed")
          r = !1;
        else {
          const s = e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
          s || Ft.throwArgumentError("invalid fixed format", "format", e), r = s[1] !== "u", n = parseInt(s[2]), a = parseInt(s[3]);
        }
    } else if (e) {
      const s = (o, i, f) => e[o] == null ? f : (typeof e[o] !== i && Ft.throwArgumentError("invalid fixed format (" + o + " not " + i + ")", "format." + o, e[o]), e[o]);
      r = s("signed", "boolean", r), n = s("width", "number", n), a = s("decimals", "number", a);
    }
    return n % 8 && Ft.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", n), a > 80 && Ft.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", a), new Wn(xa, r, n, a);
  }
}
class Ct {
  constructor(e, r, n, a) {
    e !== xa && Ft.throwError("cannot use FixedNumber constructor; use FixedNumber.from", V.errors.UNSUPPORTED_OPERATION, {
      operation: "new FixedFormat"
    }), this.format = a, this._hex = r, this._value = n, this._isFixedNumber = !0, Object.freeze(this);
  }
  _checkFormat(e) {
    this.format.name !== e.format.name && Ft.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", e);
  }
  addUnsafe(e) {
    this._checkFormat(e);
    const r = yr(this._value, this.format.decimals), n = yr(e._value, e.format.decimals);
    return Ct.fromValue(r.add(n), this.format.decimals, this.format);
  }
  subUnsafe(e) {
    this._checkFormat(e);
    const r = yr(this._value, this.format.decimals), n = yr(e._value, e.format.decimals);
    return Ct.fromValue(r.sub(n), this.format.decimals, this.format);
  }
  mulUnsafe(e) {
    this._checkFormat(e);
    const r = yr(this._value, this.format.decimals), n = yr(e._value, e.format.decimals);
    return Ct.fromValue(r.mul(n).div(this.format._multiplier), this.format.decimals, this.format);
  }
  divUnsafe(e) {
    this._checkFormat(e);
    const r = yr(this._value, this.format.decimals), n = yr(e._value, e.format.decimals);
    return Ct.fromValue(r.mul(this.format._multiplier).div(n), this.format.decimals, this.format);
  }
  floor() {
    const e = this.toString().split(".");
    e.length === 1 && e.push("0");
    let r = Ct.from(e[0], this.format);
    const n = !e[1].match(/^(0*)$/);
    return this.isNegative() && n && (r = r.subUnsafe(yc.toFormat(r.format))), r;
  }
  ceiling() {
    const e = this.toString().split(".");
    e.length === 1 && e.push("0");
    let r = Ct.from(e[0], this.format);
    const n = !e[1].match(/^(0*)$/);
    return !this.isNegative() && n && (r = r.addUnsafe(yc.toFormat(r.format))), r;
  }
  round(e) {
    e == null && (e = 0);
    const r = this.toString().split(".");
    if (r.length === 1 && r.push("0"), (e < 0 || e > 80 || e % 1) && Ft.throwArgumentError("invalid decimal count", "decimals", e), r[1].length <= e)
      return this;
    const n = Ct.from("1" + ya.substring(0, e), this.format), a = W1.toFormat(this.format);
    return this.mulUnsafe(n).addUnsafe(a).floor().divUnsafe(n);
  }
  isZero() {
    return this._value === "0.0" || this._value === "0";
  }
  isNegative() {
    return this._value[0] === "-";
  }
  toString() {
    return this._value;
  }
  toHexString(e) {
    if (e == null)
      return this._hex;
    e % 8 && Ft.throwArgumentError("invalid byte width", "width", e);
    const r = de.from(this._hex).fromTwos(this.format.width).toTwos(e).toHexString();
    return xt(r, e / 8);
  }
  toUnsafeFloat() {
    return parseFloat(this.toString());
  }
  toFormat(e) {
    return Ct.fromString(this._value, e);
  }
  static fromValue(e, r, n) {
    return n == null && r != null && !N1(r) && (n = r, r = null), r == null && (r = 0), n == null && (n = "fixed"), Ct.fromString(ss(e, r), Wn.from(n));
  }
  static fromString(e, r) {
    r == null && (r = "fixed");
    const n = Wn.from(r), a = yr(e, n.decimals);
    !n.signed && a.lt(Q0) && td("unsigned value cannot be negative", "overflow", "value", e);
    let s = null;
    n.signed ? s = a.toTwos(n.width).toHexString() : (s = a.toHexString(), s = xt(s, n.width / 8));
    const o = ss(a, n.decimals);
    return new Ct(xa, s, o, n);
  }
  static fromBytes(e, r) {
    r == null && (r = "fixed");
    const n = Wn.from(r);
    if (ae(e).length > n.width / 8)
      throw new Error("overflow");
    let a = de.from(e);
    n.signed && (a = a.fromTwos(n.width));
    const s = a.toTwos((n.signed ? 0 : 1) + n.width).toHexString(), o = ss(a, n.decimals);
    return new Ct(xa, s, o, n);
  }
  static from(e, r) {
    if (typeof e == "string")
      return Ct.fromString(e, r);
    if (kn(e))
      return Ct.fromBytes(e, r);
    try {
      return Ct.fromValue(e, 0, r);
    } catch (n) {
      if (n.code !== V.errors.INVALID_ARGUMENT)
        throw n;
    }
    return Ft.throwArgumentError("invalid FixedNumber value", "value", e);
  }
  static isFixedNumber(e) {
    return !!(e && e._isFixedNumber);
  }
}
const yc = Ct.from(1), W1 = Ct.from("0.5"), H1 = "properties/5.7.0";
var z1 = globalThis && globalThis.__awaiter || function(t, e, r, n) {
  function a(s) {
    return s instanceof r ? s : new r(function(o) {
      o(s);
    });
  }
  return new (r || (r = Promise))(function(s, o) {
    function i(h) {
      try {
        u(n.next(h));
      } catch (g) {
        o(g);
      }
    }
    function f(h) {
      try {
        u(n.throw(h));
      } catch (g) {
        o(g);
      }
    }
    function u(h) {
      h.done ? s(h.value) : a(h.value).then(i, f);
    }
    u((n = n.apply(t, e || [])).next());
  });
};
const bs = new V(H1);
function ne(t, e, r) {
  Object.defineProperty(t, e, {
    enumerable: !0,
    value: r,
    writable: !1
  });
}
function Pn(t, e) {
  for (let r = 0; r < 32; r++) {
    if (t[e])
      return t[e];
    if (!t.prototype || typeof t.prototype != "object")
      break;
    t = Object.getPrototypeOf(t.prototype).constructor;
  }
  return null;
}
function Er(t) {
  return z1(this, void 0, void 0, function* () {
    const e = Object.keys(t).map((n) => {
      const a = t[n];
      return Promise.resolve(a).then((s) => ({ key: n, value: s }));
    });
    return (yield Promise.all(e)).reduce((n, a) => (n[a.key] = a.value, n), {});
  });
}
function rd(t, e) {
  (!t || typeof t != "object") && bs.throwArgumentError("invalid object", "object", t), Object.keys(t).forEach((r) => {
    e[r] || bs.throwArgumentError("invalid object key - " + r, "transaction:" + r, t);
  });
}
function Ht(t) {
  const e = {};
  for (const r in t)
    e[r] = t[r];
  return e;
}
const $1 = { bigint: !0, boolean: !0, function: !0, number: !0, string: !0 };
function nd(t) {
  if (t == null || $1[typeof t])
    return !0;
  if (Array.isArray(t) || typeof t == "object") {
    if (!Object.isFrozen(t))
      return !1;
    const e = Object.keys(t);
    for (let r = 0; r < e.length; r++) {
      let n = null;
      try {
        n = t[e[r]];
      } catch {
        continue;
      }
      if (!nd(n))
        return !1;
    }
    return !0;
  }
  return bs.throwArgumentError(`Cannot deepCopy ${typeof t}`, "object", t);
}
function V1(t) {
  if (nd(t))
    return t;
  if (Array.isArray(t))
    return Object.freeze(t.map((e) => yn(e)));
  if (typeof t == "object") {
    const e = {};
    for (const r in t) {
      const n = t[r];
      n !== void 0 && ne(e, r, yn(n));
    }
    return e;
  }
  return bs.throwArgumentError(`Cannot deepCopy ${typeof t}`, "object", t);
}
function yn(t) {
  return V1(t);
}
class Dn {
  constructor(e) {
    for (const r in e)
      this[r] = yn(e[r]);
  }
}
const G1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  defineReadOnly: ne,
  getStatic: Pn,
  resolveProperties: Er,
  checkProperties: rd,
  shallowCopy: Ht,
  deepCopy: yn,
  Description: Dn
}, Symbol.toStringTag, { value: "Module" })), Na = "abi/5.7.0", Fe = new V(Na), vn = {};
let vc = { calldata: !0, memory: !0, storage: !0 }, K1 = { calldata: !0, memory: !0 };
function Ya(t, e) {
  if (t === "bytes" || t === "string") {
    if (vc[e])
      return !0;
  } else if (t === "address") {
    if (e === "payable")
      return !0;
  } else if ((t.indexOf("[") >= 0 || t === "tuple") && K1[e])
    return !0;
  return (vc[e] || e === "payable") && Fe.throwArgumentError("invalid modifier", "name", e), !1;
}
function q1(t, e) {
  let r = t;
  function n(i) {
    Fe.throwArgumentError(`unexpected character at position ${i}`, "param", t);
  }
  t = t.replace(/\s/g, " ");
  function a(i) {
    let f = { type: "", name: "", parent: i, state: { allowType: !0 } };
    return e && (f.indexed = !1), f;
  }
  let s = { type: "", name: "", state: { allowType: !0 } }, o = s;
  for (let i = 0; i < t.length; i++) {
    let f = t[i];
    switch (f) {
      case "(":
        o.state.allowType && o.type === "" ? o.type = "tuple" : o.state.allowParams || n(i), o.state.allowType = !1, o.type = Tn(o.type), o.components = [a(o)], o = o.components[0];
        break;
      case ")":
        delete o.state, o.name === "indexed" && (e || n(i), o.indexed = !0, o.name = ""), Ya(o.type, o.name) && (o.name = ""), o.type = Tn(o.type);
        let u = o;
        o = o.parent, o || n(i), delete u.parent, o.state.allowParams = !1, o.state.allowName = !0, o.state.allowArray = !0;
        break;
      case ",":
        delete o.state, o.name === "indexed" && (e || n(i), o.indexed = !0, o.name = ""), Ya(o.type, o.name) && (o.name = ""), o.type = Tn(o.type);
        let h = a(o.parent);
        o.parent.components.push(h), delete o.parent, o = h;
        break;
      case " ":
        o.state.allowType && o.type !== "" && (o.type = Tn(o.type), delete o.state.allowType, o.state.allowName = !0, o.state.allowParams = !0), o.state.allowName && o.name !== "" && (o.name === "indexed" ? (e || n(i), o.indexed && n(i), o.indexed = !0, o.name = "") : Ya(o.type, o.name) ? o.name = "" : o.state.allowName = !1);
        break;
      case "[":
        o.state.allowArray || n(i), o.type += f, o.state.allowArray = !1, o.state.allowName = !1, o.state.readArray = !0;
        break;
      case "]":
        o.state.readArray || n(i), o.type += f, o.state.readArray = !1, o.state.allowArray = !0, o.state.allowName = !0;
        break;
      default:
        o.state.allowType ? (o.type += f, o.state.allowParams = !0, o.state.allowArray = !0) : o.state.allowName ? (o.name += f, delete o.state.allowArray) : o.state.readArray ? o.type += f : n(i);
    }
  }
  return o.parent && Fe.throwArgumentError("unexpected eof", "param", t), delete s.state, o.name === "indexed" ? (e || n(r.length - 7), o.indexed && n(r.length - 7), o.indexed = !0, o.name = "") : Ya(o.type, o.name) && (o.name = ""), s.type = Tn(s.type), s;
}
function os(t, e) {
  for (let r in e)
    ne(t, r, e[r]);
}
const Re = Object.freeze({
  sighash: "sighash",
  minimal: "minimal",
  full: "full",
  json: "json"
}), Y1 = new RegExp(/^(.*)\[([0-9]*)\]$/);
class vt {
  constructor(e, r) {
    e !== vn && Fe.throwError("use fromString", V.errors.UNSUPPORTED_OPERATION, {
      operation: "new ParamType()"
    }), os(this, r);
    let n = this.type.match(Y1);
    n ? os(this, {
      arrayLength: parseInt(n[2] || "-1"),
      arrayChildren: vt.fromObject({
        type: n[1],
        components: this.components
      }),
      baseType: "array"
    }) : os(this, {
      arrayLength: null,
      arrayChildren: null,
      baseType: this.components != null ? "tuple" : this.type
    }), this._isParamType = !0, Object.freeze(this);
  }
  format(e) {
    if (e || (e = Re.sighash), Re[e] || Fe.throwArgumentError("invalid format type", "format", e), e === Re.json) {
      let n = {
        type: this.baseType === "tuple" ? "tuple" : this.type,
        name: this.name || void 0
      };
      return typeof this.indexed == "boolean" && (n.indexed = this.indexed), this.components && (n.components = this.components.map((a) => JSON.parse(a.format(e)))), JSON.stringify(n);
    }
    let r = "";
    return this.baseType === "array" ? (r += this.arrayChildren.format(e), r += "[" + (this.arrayLength < 0 ? "" : String(this.arrayLength)) + "]") : this.baseType === "tuple" ? (e !== Re.sighash && (r += this.type), r += "(" + this.components.map((n) => n.format(e)).join(e === Re.full ? ", " : ",") + ")") : r += this.type, e !== Re.sighash && (this.indexed === !0 && (r += " indexed"), e === Re.full && this.name && (r += " " + this.name)), r;
  }
  static from(e, r) {
    return typeof e == "string" ? vt.fromString(e, r) : vt.fromObject(e);
  }
  static fromObject(e) {
    return vt.isParamType(e) ? e : new vt(vn, {
      name: e.name || null,
      type: Tn(e.type),
      indexed: e.indexed == null ? null : !!e.indexed,
      components: e.components ? e.components.map(vt.fromObject) : null
    });
  }
  static fromString(e, r) {
    function n(a) {
      return vt.fromObject({
        name: a.name,
        type: a.type,
        indexed: a.indexed,
        components: a.components
      });
    }
    return n(q1(e, !!r));
  }
  static isParamType(e) {
    return !!(e != null && e._isParamType);
  }
}
function Sa(t, e) {
  return J1(t).map((r) => vt.fromString(r, e));
}
class Ir {
  constructor(e, r) {
    e !== vn && Fe.throwError("use a static from method", V.errors.UNSUPPORTED_OPERATION, {
      operation: "new Fragment()"
    }), os(this, r), this._isFragment = !0, Object.freeze(this);
  }
  static from(e) {
    return Ir.isFragment(e) ? e : typeof e == "string" ? Ir.fromString(e) : Ir.fromObject(e);
  }
  static fromObject(e) {
    if (Ir.isFragment(e))
      return e;
    switch (e.type) {
      case "function":
        return or.fromObject(e);
      case "event":
        return wr.fromObject(e);
      case "constructor":
        return sr.fromObject(e);
      case "error":
        return Hr.fromObject(e);
      case "fallback":
      case "receive":
        return null;
    }
    return Fe.throwArgumentError("invalid fragment object", "value", e);
  }
  static fromString(e) {
    return e = e.replace(/\s/g, " "), e = e.replace(/\(/g, " (").replace(/\)/g, ") ").replace(/\s+/g, " "), e = e.trim(), e.split(" ")[0] === "event" ? wr.fromString(e.substring(5).trim()) : e.split(" ")[0] === "function" ? or.fromString(e.substring(8).trim()) : e.split("(")[0].trim() === "constructor" ? sr.fromString(e.trim()) : e.split(" ")[0] === "error" ? Hr.fromString(e.substring(5).trim()) : Fe.throwArgumentError("unsupported fragment", "value", e);
  }
  static isFragment(e) {
    return !!(e && e._isFragment);
  }
}
class wr extends Ir {
  format(e) {
    if (e || (e = Re.sighash), Re[e] || Fe.throwArgumentError("invalid format type", "format", e), e === Re.json)
      return JSON.stringify({
        type: "event",
        anonymous: this.anonymous,
        name: this.name,
        inputs: this.inputs.map((n) => JSON.parse(n.format(e)))
      });
    let r = "";
    return e !== Re.sighash && (r += "event "), r += this.name + "(" + this.inputs.map((n) => n.format(e)).join(e === Re.full ? ", " : ",") + ") ", e !== Re.sighash && this.anonymous && (r += "anonymous "), r.trim();
  }
  static from(e) {
    return typeof e == "string" ? wr.fromString(e) : wr.fromObject(e);
  }
  static fromObject(e) {
    if (wr.isEventFragment(e))
      return e;
    e.type !== "event" && Fe.throwArgumentError("invalid event object", "value", e);
    const r = {
      name: Da(e.name),
      anonymous: e.anonymous,
      inputs: e.inputs ? e.inputs.map(vt.fromObject) : [],
      type: "event"
    };
    return new wr(vn, r);
  }
  static fromString(e) {
    let r = e.match(Ba);
    r || Fe.throwArgumentError("invalid event string", "value", e);
    let n = !1;
    return r[3].split(" ").forEach((a) => {
      switch (a.trim()) {
        case "anonymous":
          n = !0;
          break;
        case "":
          break;
        default:
          Fe.warn("unknown modifier: " + a);
      }
    }), wr.fromObject({
      name: r[1].trim(),
      anonymous: n,
      inputs: Sa(r[2], !0),
      type: "event"
    });
  }
  static isEventFragment(e) {
    return e && e._isFragment && e.type === "event";
  }
}
function ad(t, e) {
  e.gas = null;
  let r = t.split("@");
  return r.length !== 1 ? (r.length > 2 && Fe.throwArgumentError("invalid human-readable ABI signature", "value", t), r[1].match(/^[0-9]+$/) || Fe.throwArgumentError("invalid human-readable ABI signature gas", "value", t), e.gas = de.from(r[1]), r[0]) : t;
}
function sd(t, e) {
  e.constant = !1, e.payable = !1, e.stateMutability = "nonpayable", t.split(" ").forEach((r) => {
    switch (r.trim()) {
      case "constant":
        e.constant = !0;
        break;
      case "payable":
        e.payable = !0, e.stateMutability = "payable";
        break;
      case "nonpayable":
        e.payable = !1, e.stateMutability = "nonpayable";
        break;
      case "pure":
        e.constant = !0, e.stateMutability = "pure";
        break;
      case "view":
        e.constant = !0, e.stateMutability = "view";
        break;
      case "external":
      case "public":
      case "":
        break;
      default:
        console.log("unknown modifier: " + r);
    }
  });
}
function od(t) {
  let e = {
    constant: !1,
    payable: !0,
    stateMutability: "payable"
  };
  return t.stateMutability != null ? (e.stateMutability = t.stateMutability, e.constant = e.stateMutability === "view" || e.stateMutability === "pure", t.constant != null && !!t.constant !== e.constant && Fe.throwArgumentError("cannot have constant function with mutability " + e.stateMutability, "value", t), e.payable = e.stateMutability === "payable", t.payable != null && !!t.payable !== e.payable && Fe.throwArgumentError("cannot have payable function with mutability " + e.stateMutability, "value", t)) : t.payable != null ? (e.payable = !!t.payable, t.constant == null && !e.payable && t.type !== "constructor" && Fe.throwArgumentError("unable to determine stateMutability", "value", t), e.constant = !!t.constant, e.constant ? e.stateMutability = "view" : e.stateMutability = e.payable ? "payable" : "nonpayable", e.payable && e.constant && Fe.throwArgumentError("cannot have constant payable function", "value", t)) : t.constant != null ? (e.constant = !!t.constant, e.payable = !e.constant, e.stateMutability = e.constant ? "view" : "payable") : t.type !== "constructor" && Fe.throwArgumentError("unable to determine stateMutability", "value", t), e;
}
class sr extends Ir {
  format(e) {
    if (e || (e = Re.sighash), Re[e] || Fe.throwArgumentError("invalid format type", "format", e), e === Re.json)
      return JSON.stringify({
        type: "constructor",
        stateMutability: this.stateMutability !== "nonpayable" ? this.stateMutability : void 0,
        payable: this.payable,
        gas: this.gas ? this.gas.toNumber() : void 0,
        inputs: this.inputs.map((n) => JSON.parse(n.format(e)))
      });
    e === Re.sighash && Fe.throwError("cannot format a constructor for sighash", V.errors.UNSUPPORTED_OPERATION, {
      operation: "format(sighash)"
    });
    let r = "constructor(" + this.inputs.map((n) => n.format(e)).join(e === Re.full ? ", " : ",") + ") ";
    return this.stateMutability && this.stateMutability !== "nonpayable" && (r += this.stateMutability + " "), r.trim();
  }
  static from(e) {
    return typeof e == "string" ? sr.fromString(e) : sr.fromObject(e);
  }
  static fromObject(e) {
    if (sr.isConstructorFragment(e))
      return e;
    e.type !== "constructor" && Fe.throwArgumentError("invalid constructor object", "value", e);
    let r = od(e);
    r.constant && Fe.throwArgumentError("constructor cannot be constant", "value", e);
    const n = {
      name: null,
      type: e.type,
      inputs: e.inputs ? e.inputs.map(vt.fromObject) : [],
      payable: r.payable,
      stateMutability: r.stateMutability,
      gas: e.gas ? de.from(e.gas) : null
    };
    return new sr(vn, n);
  }
  static fromString(e) {
    let r = { type: "constructor" };
    e = ad(e, r);
    let n = e.match(Ba);
    return (!n || n[1].trim() !== "constructor") && Fe.throwArgumentError("invalid constructor string", "value", e), r.inputs = Sa(n[2].trim(), !1), sd(n[3].trim(), r), sr.fromObject(r);
  }
  static isConstructorFragment(e) {
    return e && e._isFragment && e.type === "constructor";
  }
}
class or extends sr {
  format(e) {
    if (e || (e = Re.sighash), Re[e] || Fe.throwArgumentError("invalid format type", "format", e), e === Re.json)
      return JSON.stringify({
        type: "function",
        name: this.name,
        constant: this.constant,
        stateMutability: this.stateMutability !== "nonpayable" ? this.stateMutability : void 0,
        payable: this.payable,
        gas: this.gas ? this.gas.toNumber() : void 0,
        inputs: this.inputs.map((n) => JSON.parse(n.format(e))),
        outputs: this.outputs.map((n) => JSON.parse(n.format(e)))
      });
    let r = "";
    return e !== Re.sighash && (r += "function "), r += this.name + "(" + this.inputs.map((n) => n.format(e)).join(e === Re.full ? ", " : ",") + ") ", e !== Re.sighash && (this.stateMutability ? this.stateMutability !== "nonpayable" && (r += this.stateMutability + " ") : this.constant && (r += "view "), this.outputs && this.outputs.length && (r += "returns (" + this.outputs.map((n) => n.format(e)).join(", ") + ") "), this.gas != null && (r += "@" + this.gas.toString() + " ")), r.trim();
  }
  static from(e) {
    return typeof e == "string" ? or.fromString(e) : or.fromObject(e);
  }
  static fromObject(e) {
    if (or.isFunctionFragment(e))
      return e;
    e.type !== "function" && Fe.throwArgumentError("invalid function object", "value", e);
    let r = od(e);
    const n = {
      type: e.type,
      name: Da(e.name),
      constant: r.constant,
      inputs: e.inputs ? e.inputs.map(vt.fromObject) : [],
      outputs: e.outputs ? e.outputs.map(vt.fromObject) : [],
      payable: r.payable,
      stateMutability: r.stateMutability,
      gas: e.gas ? de.from(e.gas) : null
    };
    return new or(vn, n);
  }
  static fromString(e) {
    let r = { type: "function" };
    e = ad(e, r);
    let n = e.split(" returns ");
    n.length > 2 && Fe.throwArgumentError("invalid function string", "value", e);
    let a = n[0].match(Ba);
    if (a || Fe.throwArgumentError("invalid function signature", "value", e), r.name = a[1].trim(), r.name && Da(r.name), r.inputs = Sa(a[2], !1), sd(a[3].trim(), r), n.length > 1) {
      let s = n[1].match(Ba);
      (s[1].trim() != "" || s[3].trim() != "") && Fe.throwArgumentError("unexpected tokens", "value", e), r.outputs = Sa(s[2], !1);
    } else
      r.outputs = [];
    return or.fromObject(r);
  }
  static isFunctionFragment(e) {
    return e && e._isFragment && e.type === "function";
  }
}
function Ac(t) {
  const e = t.format();
  return (e === "Error(string)" || e === "Panic(uint256)") && Fe.throwArgumentError(`cannot specify user defined ${e} error`, "fragment", t), t;
}
class Hr extends Ir {
  format(e) {
    if (e || (e = Re.sighash), Re[e] || Fe.throwArgumentError("invalid format type", "format", e), e === Re.json)
      return JSON.stringify({
        type: "error",
        name: this.name,
        inputs: this.inputs.map((n) => JSON.parse(n.format(e)))
      });
    let r = "";
    return e !== Re.sighash && (r += "error "), r += this.name + "(" + this.inputs.map((n) => n.format(e)).join(e === Re.full ? ", " : ",") + ") ", r.trim();
  }
  static from(e) {
    return typeof e == "string" ? Hr.fromString(e) : Hr.fromObject(e);
  }
  static fromObject(e) {
    if (Hr.isErrorFragment(e))
      return e;
    e.type !== "error" && Fe.throwArgumentError("invalid error object", "value", e);
    const r = {
      type: e.type,
      name: Da(e.name),
      inputs: e.inputs ? e.inputs.map(vt.fromObject) : []
    };
    return Ac(new Hr(vn, r));
  }
  static fromString(e) {
    let r = { type: "error" }, n = e.match(Ba);
    return n || Fe.throwArgumentError("invalid error signature", "value", e), r.name = n[1].trim(), r.name && Da(r.name), r.inputs = Sa(n[2], !1), Ac(Hr.fromObject(r));
  }
  static isErrorFragment(e) {
    return e && e._isFragment && e.type === "error";
  }
}
function Tn(t) {
  return t.match(/^uint($|[^1-9])/) ? t = "uint256" + t.substring(4) : t.match(/^int($|[^1-9])/) && (t = "int256" + t.substring(3)), t;
}
const X1 = new RegExp("^[a-zA-Z$_][a-zA-Z0-9$_]*$");
function Da(t) {
  return (!t || !t.match(X1)) && Fe.throwArgumentError(`invalid identifier "${t}"`, "value", t), t;
}
const Ba = new RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$");
function J1(t) {
  t = t.trim();
  let e = [], r = "", n = 0;
  for (let a = 0; a < t.length; a++) {
    let s = t[a];
    s === "," && n === 0 ? (e.push(r), r = "") : (r += s, s === "(" ? n++ : s === ")" && (n--, n === -1 && Fe.throwArgumentError("unbalanced parenthesis", "value", t)));
  }
  return r && e.push(r), e;
}
const ii = new V(Na);
function id(t) {
  const e = [], r = function(n, a) {
    if (!!Array.isArray(a))
      for (let s in a) {
        const o = n.slice();
        o.push(s);
        try {
          r(o, a[s]);
        } catch (i) {
          e.push({ path: o, error: i });
        }
      }
  };
  return r([], t), e;
}
class qr {
  constructor(e, r, n, a) {
    this.name = e, this.type = r, this.localName = n, this.dynamic = a;
  }
  _throwError(e, r) {
    ii.throwArgumentError(e, this.localName, r);
  }
}
class Uo {
  constructor(e) {
    ne(this, "wordSize", e || 32), this._data = [], this._dataLength = 0, this._padding = new Uint8Array(e);
  }
  get data() {
    return an(this._data);
  }
  get length() {
    return this._dataLength;
  }
  _writeData(e) {
    return this._data.push(e), this._dataLength += e.length, e.length;
  }
  appendWriter(e) {
    return this._writeData(gt(e._data));
  }
  writeBytes(e) {
    let r = ae(e);
    const n = r.length % this.wordSize;
    return n && (r = gt([r, this._padding.slice(n)])), this._writeData(r);
  }
  _getValue(e) {
    let r = ae(de.from(e));
    return r.length > this.wordSize && ii.throwError("value out-of-bounds", V.errors.BUFFER_OVERRUN, {
      length: this.wordSize,
      offset: r.length
    }), r.length % this.wordSize && (r = gt([this._padding.slice(r.length % this.wordSize), r])), r;
  }
  writeValue(e) {
    return this._writeData(this._getValue(e));
  }
  writeUpdatableValue() {
    const e = this._data.length;
    return this._data.push(this._padding), this._dataLength += this.wordSize, (r) => {
      this._data[e] = this._getValue(r);
    };
  }
}
class gs {
  constructor(e, r, n, a) {
    ne(this, "_data", ae(e)), ne(this, "wordSize", r || 32), ne(this, "_coerceFunc", n), ne(this, "allowLoose", a), this._offset = 0;
  }
  get data() {
    return ce(this._data);
  }
  get consumed() {
    return this._offset;
  }
  static coerce(e, r) {
    let n = e.match("^u?int([0-9]+)$");
    return n && parseInt(n[1]) <= 48 && (r = r.toNumber()), r;
  }
  coerce(e, r) {
    return this._coerceFunc ? this._coerceFunc(e, r) : gs.coerce(e, r);
  }
  _peekBytes(e, r, n) {
    let a = Math.ceil(r / this.wordSize) * this.wordSize;
    return this._offset + a > this._data.length && (this.allowLoose && n && this._offset + r <= this._data.length ? a = r : ii.throwError("data out-of-bounds", V.errors.BUFFER_OVERRUN, {
      length: this._data.length,
      offset: this._offset + a
    })), this._data.slice(this._offset, this._offset + a);
  }
  subReader(e) {
    return new gs(this._data.slice(this._offset + e), this.wordSize, this._coerceFunc, this.allowLoose);
  }
  readBytes(e, r) {
    let n = this._peekBytes(0, e, !!r);
    return this._offset += n.length, n.slice(0, e);
  }
  readValue() {
    return de.from(this.readBytes(this.wordSize));
  }
}
var cd = { exports: {} };
/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2018
 * @license MIT
 */
(function(t) {
  (function() {
    var e = "input is invalid type", r = "finalize already called", n = typeof window == "object", a = n ? window : {};
    a.JS_SHA3_NO_WINDOW && (n = !1);
    var s = !n && typeof self == "object", o = !a.JS_SHA3_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
    o ? a = Kt : s && (a = self);
    var i = !a.JS_SHA3_NO_COMMON_JS && !0 && t.exports, f = !a.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", u = "0123456789abcdef".split(""), h = [31, 7936, 2031616, 520093696], g = [4, 1024, 262144, 67108864], C = [1, 256, 65536, 16777216], E = [6, 1536, 393216, 100663296], S = [0, 8, 16, 24], D = [
      1,
      0,
      32898,
      0,
      32906,
      2147483648,
      2147516416,
      2147483648,
      32907,
      0,
      2147483649,
      0,
      2147516545,
      2147483648,
      32777,
      2147483648,
      138,
      0,
      136,
      0,
      2147516425,
      0,
      2147483658,
      0,
      2147516555,
      0,
      139,
      2147483648,
      32905,
      2147483648,
      32771,
      2147483648,
      32770,
      2147483648,
      128,
      2147483648,
      32778,
      0,
      2147483658,
      2147483648,
      2147516545,
      2147483648,
      32896,
      2147483648,
      2147483649,
      0,
      2147516424,
      2147483648
    ], x = [224, 256, 384, 512], F = [128, 256], M = ["hex", "buffer", "arrayBuffer", "array", "digest"], j = {
      128: 168,
      256: 136
    };
    (a.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(l) {
      return Object.prototype.toString.call(l) === "[object Array]";
    }), f && (a.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(l) {
      return typeof l == "object" && l.buffer && l.buffer.constructor === ArrayBuffer;
    });
    for (var U = function(l, v, L) {
      return function(_) {
        return new c(l, v, l).update(_)[L]();
      };
    }, B = function(l, v, L) {
      return function(_, H) {
        return new c(l, v, H).update(_)[L]();
      };
    }, W = function(l, v, L) {
      return function(_, H, Y, $) {
        return d["cshake" + l].update(_, H, Y, $)[L]();
      };
    }, G = function(l, v, L) {
      return function(_, H, Y, $) {
        return d["kmac" + l].update(_, H, Y, $)[L]();
      };
    }, K = function(l, v, L, _) {
      for (var H = 0; H < M.length; ++H) {
        var Y = M[H];
        l[Y] = v(L, _, Y);
      }
      return l;
    }, te = function(l, v) {
      var L = U(l, v, "hex");
      return L.create = function() {
        return new c(l, v, l);
      }, L.update = function(_) {
        return L.create().update(_);
      }, K(L, U, l, v);
    }, se = function(l, v) {
      var L = B(l, v, "hex");
      return L.create = function(_) {
        return new c(l, v, _);
      }, L.update = function(_, H) {
        return L.create(H).update(_);
      }, K(L, B, l, v);
    }, q = function(l, v) {
      var L = j[l], _ = W(l, v, "hex");
      return _.create = function(H, Y, $) {
        return !Y && !$ ? d["shake" + l].create(H) : new c(l, v, H).bytepad([Y, $], L);
      }, _.update = function(H, Y, $, N) {
        return _.create(Y, $, N).update(H);
      }, K(_, W, l, v);
    }, oe = function(l, v) {
      var L = j[l], _ = G(l, v, "hex");
      return _.create = function(H, Y, $) {
        return new b(l, v, Y).bytepad(["KMAC", $], L).bytepad([H], L);
      }, _.update = function(H, Y, $, N) {
        return _.create(H, $, N).update(Y);
      }, K(_, G, l, v);
    }, I = [
      { name: "keccak", padding: C, bits: x, createMethod: te },
      { name: "sha3", padding: E, bits: x, createMethod: te },
      { name: "shake", padding: h, bits: F, createMethod: se },
      { name: "cshake", padding: g, bits: F, createMethod: q },
      { name: "kmac", padding: g, bits: F, createMethod: oe }
    ], d = {}, m = [], y = 0; y < I.length; ++y)
      for (var w = I[y], A = w.bits, T = 0; T < A.length; ++T) {
        var P = w.name + "_" + A[T];
        if (m.push(P), d[P] = w.createMethod(A[T], w.padding), w.name !== "sha3") {
          var p = w.name + A[T];
          m.push(p), d[p] = d[P];
        }
      }
    function c(l, v, L) {
      this.blocks = [], this.s = [], this.padding = v, this.outputBits = L, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (l << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = L >> 5, this.extraBytes = (L & 31) >> 3;
      for (var _ = 0; _ < 50; ++_)
        this.s[_] = 0;
    }
    c.prototype.update = function(l) {
      if (this.finalized)
        throw new Error(r);
      var v, L = typeof l;
      if (L !== "string") {
        if (L === "object") {
          if (l === null)
            throw new Error(e);
          if (f && l.constructor === ArrayBuffer)
            l = new Uint8Array(l);
          else if (!Array.isArray(l) && (!f || !ArrayBuffer.isView(l)))
            throw new Error(e);
        } else
          throw new Error(e);
        v = !0;
      }
      for (var _ = this.blocks, H = this.byteCount, Y = l.length, $ = this.blockCount, N = 0, he = this.s, z, Z; N < Y; ) {
        if (this.reset)
          for (this.reset = !1, _[0] = this.block, z = 1; z < $ + 1; ++z)
            _[z] = 0;
        if (v)
          for (z = this.start; N < Y && z < H; ++N)
            _[z >> 2] |= l[N] << S[z++ & 3];
        else
          for (z = this.start; N < Y && z < H; ++N)
            Z = l.charCodeAt(N), Z < 128 ? _[z >> 2] |= Z << S[z++ & 3] : Z < 2048 ? (_[z >> 2] |= (192 | Z >> 6) << S[z++ & 3], _[z >> 2] |= (128 | Z & 63) << S[z++ & 3]) : Z < 55296 || Z >= 57344 ? (_[z >> 2] |= (224 | Z >> 12) << S[z++ & 3], _[z >> 2] |= (128 | Z >> 6 & 63) << S[z++ & 3], _[z >> 2] |= (128 | Z & 63) << S[z++ & 3]) : (Z = 65536 + ((Z & 1023) << 10 | l.charCodeAt(++N) & 1023), _[z >> 2] |= (240 | Z >> 18) << S[z++ & 3], _[z >> 2] |= (128 | Z >> 12 & 63) << S[z++ & 3], _[z >> 2] |= (128 | Z >> 6 & 63) << S[z++ & 3], _[z >> 2] |= (128 | Z & 63) << S[z++ & 3]);
        if (this.lastByteIndex = z, z >= H) {
          for (this.start = z - H, this.block = _[$], z = 0; z < $; ++z)
            he[z] ^= _[z];
          k(he), this.reset = !0;
        } else
          this.start = z;
      }
      return this;
    }, c.prototype.encode = function(l, v) {
      var L = l & 255, _ = 1, H = [L];
      for (l = l >> 8, L = l & 255; L > 0; )
        H.unshift(L), l = l >> 8, L = l & 255, ++_;
      return v ? H.push(_) : H.unshift(_), this.update(H), H.length;
    }, c.prototype.encodeString = function(l) {
      var v, L = typeof l;
      if (L !== "string") {
        if (L === "object") {
          if (l === null)
            throw new Error(e);
          if (f && l.constructor === ArrayBuffer)
            l = new Uint8Array(l);
          else if (!Array.isArray(l) && (!f || !ArrayBuffer.isView(l)))
            throw new Error(e);
        } else
          throw new Error(e);
        v = !0;
      }
      var _ = 0, H = l.length;
      if (v)
        _ = H;
      else
        for (var Y = 0; Y < l.length; ++Y) {
          var $ = l.charCodeAt(Y);
          $ < 128 ? _ += 1 : $ < 2048 ? _ += 2 : $ < 55296 || $ >= 57344 ? _ += 3 : ($ = 65536 + (($ & 1023) << 10 | l.charCodeAt(++Y) & 1023), _ += 4);
        }
      return _ += this.encode(_ * 8), this.update(l), _;
    }, c.prototype.bytepad = function(l, v) {
      for (var L = this.encode(v), _ = 0; _ < l.length; ++_)
        L += this.encodeString(l[_]);
      var H = v - L % v, Y = [];
      return Y.length = H, this.update(Y), this;
    }, c.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = !0;
        var l = this.blocks, v = this.lastByteIndex, L = this.blockCount, _ = this.s;
        if (l[v >> 2] |= this.padding[v & 3], this.lastByteIndex === this.byteCount)
          for (l[0] = l[L], v = 1; v < L + 1; ++v)
            l[v] = 0;
        for (l[L - 1] |= 2147483648, v = 0; v < L; ++v)
          _[v] ^= l[v];
        k(_);
      }
    }, c.prototype.toString = c.prototype.hex = function() {
      this.finalize();
      for (var l = this.blockCount, v = this.s, L = this.outputBlocks, _ = this.extraBytes, H = 0, Y = 0, $ = "", N; Y < L; ) {
        for (H = 0; H < l && Y < L; ++H, ++Y)
          N = v[H], $ += u[N >> 4 & 15] + u[N & 15] + u[N >> 12 & 15] + u[N >> 8 & 15] + u[N >> 20 & 15] + u[N >> 16 & 15] + u[N >> 28 & 15] + u[N >> 24 & 15];
        Y % l === 0 && (k(v), H = 0);
      }
      return _ && (N = v[H], $ += u[N >> 4 & 15] + u[N & 15], _ > 1 && ($ += u[N >> 12 & 15] + u[N >> 8 & 15]), _ > 2 && ($ += u[N >> 20 & 15] + u[N >> 16 & 15])), $;
    }, c.prototype.arrayBuffer = function() {
      this.finalize();
      var l = this.blockCount, v = this.s, L = this.outputBlocks, _ = this.extraBytes, H = 0, Y = 0, $ = this.outputBits >> 3, N;
      _ ? N = new ArrayBuffer(L + 1 << 2) : N = new ArrayBuffer($);
      for (var he = new Uint32Array(N); Y < L; ) {
        for (H = 0; H < l && Y < L; ++H, ++Y)
          he[Y] = v[H];
        Y % l === 0 && k(v);
      }
      return _ && (he[H] = v[H], N = N.slice(0, $)), N;
    }, c.prototype.buffer = c.prototype.arrayBuffer, c.prototype.digest = c.prototype.array = function() {
      this.finalize();
      for (var l = this.blockCount, v = this.s, L = this.outputBlocks, _ = this.extraBytes, H = 0, Y = 0, $ = [], N, he; Y < L; ) {
        for (H = 0; H < l && Y < L; ++H, ++Y)
          N = Y << 2, he = v[H], $[N] = he & 255, $[N + 1] = he >> 8 & 255, $[N + 2] = he >> 16 & 255, $[N + 3] = he >> 24 & 255;
        Y % l === 0 && k(v);
      }
      return _ && (N = Y << 2, he = v[H], $[N] = he & 255, _ > 1 && ($[N + 1] = he >> 8 & 255), _ > 2 && ($[N + 2] = he >> 16 & 255)), $;
    };
    function b(l, v, L) {
      c.call(this, l, v, L);
    }
    b.prototype = new c(), b.prototype.finalize = function() {
      return this.encode(this.outputBits, !0), c.prototype.finalize.call(this);
    };
    var k = function(l) {
      var v, L, _, H, Y, $, N, he, z, Z, ve, le, ge, lt, me, Ee, it, ye, ie, ke, Se, Ce, st, Te, Me, _t, pe, Ue, er, Ke, qe, Nr, Ye, We, mr, _e, He, tr, $e, Xe, pr, Je, Ve, br, Ze, Qe, gr, et, tt, Lr, rt, R, Q, re, fe, Ie, be, ue, xe, ot, Pe, ze, mt;
      for (_ = 0; _ < 48; _ += 2)
        H = l[0] ^ l[10] ^ l[20] ^ l[30] ^ l[40], Y = l[1] ^ l[11] ^ l[21] ^ l[31] ^ l[41], $ = l[2] ^ l[12] ^ l[22] ^ l[32] ^ l[42], N = l[3] ^ l[13] ^ l[23] ^ l[33] ^ l[43], he = l[4] ^ l[14] ^ l[24] ^ l[34] ^ l[44], z = l[5] ^ l[15] ^ l[25] ^ l[35] ^ l[45], Z = l[6] ^ l[16] ^ l[26] ^ l[36] ^ l[46], ve = l[7] ^ l[17] ^ l[27] ^ l[37] ^ l[47], le = l[8] ^ l[18] ^ l[28] ^ l[38] ^ l[48], ge = l[9] ^ l[19] ^ l[29] ^ l[39] ^ l[49], v = le ^ ($ << 1 | N >>> 31), L = ge ^ (N << 1 | $ >>> 31), l[0] ^= v, l[1] ^= L, l[10] ^= v, l[11] ^= L, l[20] ^= v, l[21] ^= L, l[30] ^= v, l[31] ^= L, l[40] ^= v, l[41] ^= L, v = H ^ (he << 1 | z >>> 31), L = Y ^ (z << 1 | he >>> 31), l[2] ^= v, l[3] ^= L, l[12] ^= v, l[13] ^= L, l[22] ^= v, l[23] ^= L, l[32] ^= v, l[33] ^= L, l[42] ^= v, l[43] ^= L, v = $ ^ (Z << 1 | ve >>> 31), L = N ^ (ve << 1 | Z >>> 31), l[4] ^= v, l[5] ^= L, l[14] ^= v, l[15] ^= L, l[24] ^= v, l[25] ^= L, l[34] ^= v, l[35] ^= L, l[44] ^= v, l[45] ^= L, v = he ^ (le << 1 | ge >>> 31), L = z ^ (ge << 1 | le >>> 31), l[6] ^= v, l[7] ^= L, l[16] ^= v, l[17] ^= L, l[26] ^= v, l[27] ^= L, l[36] ^= v, l[37] ^= L, l[46] ^= v, l[47] ^= L, v = Z ^ (H << 1 | Y >>> 31), L = ve ^ (Y << 1 | H >>> 31), l[8] ^= v, l[9] ^= L, l[18] ^= v, l[19] ^= L, l[28] ^= v, l[29] ^= L, l[38] ^= v, l[39] ^= L, l[48] ^= v, l[49] ^= L, lt = l[0], me = l[1], Qe = l[11] << 4 | l[10] >>> 28, gr = l[10] << 4 | l[11] >>> 28, Ue = l[20] << 3 | l[21] >>> 29, er = l[21] << 3 | l[20] >>> 29, ot = l[31] << 9 | l[30] >>> 23, Pe = l[30] << 9 | l[31] >>> 23, Je = l[40] << 18 | l[41] >>> 14, Ve = l[41] << 18 | l[40] >>> 14, We = l[2] << 1 | l[3] >>> 31, mr = l[3] << 1 | l[2] >>> 31, Ee = l[13] << 12 | l[12] >>> 20, it = l[12] << 12 | l[13] >>> 20, et = l[22] << 10 | l[23] >>> 22, tt = l[23] << 10 | l[22] >>> 22, Ke = l[33] << 13 | l[32] >>> 19, qe = l[32] << 13 | l[33] >>> 19, ze = l[42] << 2 | l[43] >>> 30, mt = l[43] << 2 | l[42] >>> 30, re = l[5] << 30 | l[4] >>> 2, fe = l[4] << 30 | l[5] >>> 2, _e = l[14] << 6 | l[15] >>> 26, He = l[15] << 6 | l[14] >>> 26, ye = l[25] << 11 | l[24] >>> 21, ie = l[24] << 11 | l[25] >>> 21, Lr = l[34] << 15 | l[35] >>> 17, rt = l[35] << 15 | l[34] >>> 17, Nr = l[45] << 29 | l[44] >>> 3, Ye = l[44] << 29 | l[45] >>> 3, Te = l[6] << 28 | l[7] >>> 4, Me = l[7] << 28 | l[6] >>> 4, Ie = l[17] << 23 | l[16] >>> 9, be = l[16] << 23 | l[17] >>> 9, tr = l[26] << 25 | l[27] >>> 7, $e = l[27] << 25 | l[26] >>> 7, ke = l[36] << 21 | l[37] >>> 11, Se = l[37] << 21 | l[36] >>> 11, R = l[47] << 24 | l[46] >>> 8, Q = l[46] << 24 | l[47] >>> 8, br = l[8] << 27 | l[9] >>> 5, Ze = l[9] << 27 | l[8] >>> 5, _t = l[18] << 20 | l[19] >>> 12, pe = l[19] << 20 | l[18] >>> 12, ue = l[29] << 7 | l[28] >>> 25, xe = l[28] << 7 | l[29] >>> 25, Xe = l[38] << 8 | l[39] >>> 24, pr = l[39] << 8 | l[38] >>> 24, Ce = l[48] << 14 | l[49] >>> 18, st = l[49] << 14 | l[48] >>> 18, l[0] = lt ^ ~Ee & ye, l[1] = me ^ ~it & ie, l[10] = Te ^ ~_t & Ue, l[11] = Me ^ ~pe & er, l[20] = We ^ ~_e & tr, l[21] = mr ^ ~He & $e, l[30] = br ^ ~Qe & et, l[31] = Ze ^ ~gr & tt, l[40] = re ^ ~Ie & ue, l[41] = fe ^ ~be & xe, l[2] = Ee ^ ~ye & ke, l[3] = it ^ ~ie & Se, l[12] = _t ^ ~Ue & Ke, l[13] = pe ^ ~er & qe, l[22] = _e ^ ~tr & Xe, l[23] = He ^ ~$e & pr, l[32] = Qe ^ ~et & Lr, l[33] = gr ^ ~tt & rt, l[42] = Ie ^ ~ue & ot, l[43] = be ^ ~xe & Pe, l[4] = ye ^ ~ke & Ce, l[5] = ie ^ ~Se & st, l[14] = Ue ^ ~Ke & Nr, l[15] = er ^ ~qe & Ye, l[24] = tr ^ ~Xe & Je, l[25] = $e ^ ~pr & Ve, l[34] = et ^ ~Lr & R, l[35] = tt ^ ~rt & Q, l[44] = ue ^ ~ot & ze, l[45] = xe ^ ~Pe & mt, l[6] = ke ^ ~Ce & lt, l[7] = Se ^ ~st & me, l[16] = Ke ^ ~Nr & Te, l[17] = qe ^ ~Ye & Me, l[26] = Xe ^ ~Je & We, l[27] = pr ^ ~Ve & mr, l[36] = Lr ^ ~R & br, l[37] = rt ^ ~Q & Ze, l[46] = ot ^ ~ze & re, l[47] = Pe ^ ~mt & fe, l[8] = Ce ^ ~lt & Ee, l[9] = st ^ ~me & it, l[18] = Nr ^ ~Te & _t, l[19] = Ye ^ ~Me & pe, l[28] = Je ^ ~We & _e, l[29] = Ve ^ ~mr & He, l[38] = R ^ ~br & Qe, l[39] = Q ^ ~Ze & gr, l[48] = ze ^ ~re & Ie, l[49] = mt ^ ~fe & be, l[0] ^= D[_], l[1] ^= D[_ + 1];
    };
    if (i)
      t.exports = d;
    else
      for (y = 0; y < m.length; ++y)
        a[m[y]] = d[m[y]];
  })();
})(cd);
const Z1 = cd.exports;
function Ge(t) {
  return "0x" + Z1.keccak_256(ae(t));
}
const Q1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  keccak256: Ge
}, Symbol.toStringTag, { value: "Module" })), eu = "rlp/5.7.0", vr = new V(eu);
function wc(t) {
  const e = [];
  for (; t; )
    e.unshift(t & 255), t >>= 8;
  return e;
}
function Cc(t, e, r) {
  let n = 0;
  for (let a = 0; a < r; a++)
    n = n * 256 + t[e + a];
  return n;
}
function dd(t) {
  if (Array.isArray(t)) {
    let n = [];
    if (t.forEach(function(s) {
      n = n.concat(dd(s));
    }), n.length <= 55)
      return n.unshift(192 + n.length), n;
    const a = wc(n.length);
    return a.unshift(247 + a.length), a.concat(n);
  }
  Oa(t) || vr.throwArgumentError("RLP object must be BytesLike", "object", t);
  const e = Array.prototype.slice.call(ae(t));
  if (e.length === 1 && e[0] <= 127)
    return e;
  if (e.length <= 55)
    return e.unshift(128 + e.length), e;
  const r = wc(e.length);
  return r.unshift(183 + r.length), r.concat(e);
}
function An(t) {
  return ce(dd(t));
}
function Ec(t, e, r, n) {
  const a = [];
  for (; r < e + 1 + n; ) {
    const s = fd(t, r);
    a.push(s.result), r += s.consumed, r > e + 1 + n && vr.throwError("child data too short", V.errors.BUFFER_OVERRUN, {});
  }
  return { consumed: 1 + n, result: a };
}
function fd(t, e) {
  if (t.length === 0 && vr.throwError("data too short", V.errors.BUFFER_OVERRUN, {}), t[e] >= 248) {
    const r = t[e] - 247;
    e + 1 + r > t.length && vr.throwError("data short segment too short", V.errors.BUFFER_OVERRUN, {});
    const n = Cc(t, e + 1, r);
    return e + 1 + r + n > t.length && vr.throwError("data long segment too short", V.errors.BUFFER_OVERRUN, {}), Ec(t, e, e + 1 + r, r + n);
  } else if (t[e] >= 192) {
    const r = t[e] - 192;
    return e + 1 + r > t.length && vr.throwError("data array too short", V.errors.BUFFER_OVERRUN, {}), Ec(t, e, e + 1, r);
  } else if (t[e] >= 184) {
    const r = t[e] - 183;
    e + 1 + r > t.length && vr.throwError("data array too short", V.errors.BUFFER_OVERRUN, {});
    const n = Cc(t, e + 1, r);
    e + 1 + r + n > t.length && vr.throwError("data array too short", V.errors.BUFFER_OVERRUN, {});
    const a = ce(t.slice(e + 1 + r, e + 1 + r + n));
    return { consumed: 1 + r + n, result: a };
  } else if (t[e] >= 128) {
    const r = t[e] - 128;
    e + 1 + r > t.length && vr.throwError("data too short", V.errors.BUFFER_OVERRUN, {});
    const n = ce(t.slice(e + 1, e + 1 + r));
    return { consumed: 1 + r, result: n };
  }
  return { consumed: 1, result: ce(t[e]) };
}
function Ds(t) {
  const e = ae(t), r = fd(e, 0);
  return r.consumed !== e.length && vr.throwArgumentError("invalid rlp data", "data", t), r.result;
}
const tu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  encode: An,
  decode: Ds
}, Symbol.toStringTag, { value: "Module" })), ru = "address/5.7.0", tn = new V(ru);
function Ic(t) {
  ft(t, 20) || tn.throwArgumentError("invalid address", "address", t), t = t.toLowerCase();
  const e = t.substring(2).split(""), r = new Uint8Array(40);
  for (let a = 0; a < 40; a++)
    r[a] = e[a].charCodeAt(0);
  const n = ae(Ge(r));
  for (let a = 0; a < 40; a += 2)
    n[a >> 1] >> 4 >= 8 && (e[a] = e[a].toUpperCase()), (n[a >> 1] & 15) >= 8 && (e[a + 1] = e[a + 1].toUpperCase());
  return "0x" + e.join("");
}
const nu = 9007199254740991;
function au(t) {
  return Math.log10 ? Math.log10(t) : Math.log(t) / Math.LN10;
}
const ci = {};
for (let t = 0; t < 10; t++)
  ci[String(t)] = String(t);
for (let t = 0; t < 26; t++)
  ci[String.fromCharCode(65 + t)] = String(10 + t);
const kc = Math.floor(au(nu));
function ld(t) {
  t = t.toUpperCase(), t = t.substring(4) + t.substring(0, 2) + "00";
  let e = t.split("").map((n) => ci[n]).join("");
  for (; e.length >= kc; ) {
    let n = e.substring(0, kc);
    e = parseInt(n, 10) % 97 + e.substring(n.length);
  }
  let r = String(98 - parseInt(e, 10) % 97);
  for (; r.length < 2; )
    r = "0" + r;
  return r;
}
function at(t) {
  let e = null;
  if (typeof t != "string" && tn.throwArgumentError("invalid address", "address", t), t.match(/^(0x)?[0-9a-fA-F]{40}$/))
    t.substring(0, 2) !== "0x" && (t = "0x" + t), e = Ic(t), t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && e !== t && tn.throwArgumentError("bad address checksum", "address", t);
  else if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    for (t.substring(2, 4) !== ld(t) && tn.throwArgumentError("bad icap checksum", "address", t), e = L1(t.substring(4)); e.length < 40; )
      e = "0" + e;
    e = Ic("0x" + e);
  } else
    tn.throwArgumentError("invalid address", "address", t);
  return e;
}
function su(t) {
  try {
    return at(t), !0;
  } catch {
  }
  return !1;
}
function ou(t) {
  let e = j1(at(t).substring(2)).toUpperCase();
  for (; e.length < 30; )
    e = "0" + e;
  return "XE" + ld("XE00" + e) + e;
}
function ud(t) {
  let e = null;
  try {
    e = at(t.from);
  } catch {
    tn.throwArgumentError("missing from address", "transaction", t);
  }
  const r = Sr(ae(de.from(t.nonce).toHexString()));
  return at(Vr(Ge(An([e, r])), 12));
}
function iu(t, e, r) {
  return Ea(e) !== 32 && tn.throwArgumentError("salt must be 32 bytes", "salt", e), Ea(r) !== 32 && tn.throwArgumentError("initCodeHash must be 32 bytes", "initCodeHash", r), at(Vr(Ge(gt(["0xff", at(t), e, r])), 12));
}
const cu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getAddress: at,
  isAddress: su,
  getIcapAddress: ou,
  getContractAddress: ud,
  getCreate2Address: iu
}, Symbol.toStringTag, { value: "Module" }));
class du extends qr {
  constructor(e) {
    super("address", "address", e, !1);
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000";
  }
  encode(e, r) {
    try {
      r = at(r);
    } catch (n) {
      this._throwError(n.message, r);
    }
    return e.writeValue(r);
  }
  decode(e) {
    return at(xt(e.readValue().toHexString(), 20));
  }
}
class fu extends qr {
  constructor(e) {
    super(e.name, e.type, void 0, e.dynamic), this.coder = e;
  }
  defaultValue() {
    return this.coder.defaultValue();
  }
  encode(e, r) {
    return this.coder.encode(e, r);
  }
  decode(e) {
    return this.coder.decode(e);
  }
}
const On = new V(Na);
function hd(t, e, r) {
  let n = null;
  if (Array.isArray(r))
    n = r;
  else if (r && typeof r == "object") {
    let f = {};
    n = e.map((u) => {
      const h = u.localName;
      return h || On.throwError("cannot encode object for signature with missing names", V.errors.INVALID_ARGUMENT, {
        argument: "values",
        coder: u,
        value: r
      }), f[h] && On.throwError("cannot encode object for signature with duplicate names", V.errors.INVALID_ARGUMENT, {
        argument: "values",
        coder: u,
        value: r
      }), f[h] = !0, r[h];
    });
  } else
    On.throwArgumentError("invalid tuple value", "tuple", r);
  e.length !== n.length && On.throwArgumentError("types/value length mismatch", "tuple", r);
  let a = new Uo(t.wordSize), s = new Uo(t.wordSize), o = [];
  e.forEach((f, u) => {
    let h = n[u];
    if (f.dynamic) {
      let g = s.length;
      f.encode(s, h);
      let C = a.writeUpdatableValue();
      o.push((E) => {
        C(E + g);
      });
    } else
      f.encode(a, h);
  }), o.forEach((f) => {
    f(a.length);
  });
  let i = t.appendWriter(a);
  return i += t.appendWriter(s), i;
}
function md(t, e) {
  let r = [], n = t.subReader(0);
  e.forEach((s) => {
    let o = null;
    if (s.dynamic) {
      let i = t.readValue(), f = n.subReader(i.toNumber());
      try {
        o = s.decode(f);
      } catch (u) {
        if (u.code === V.errors.BUFFER_OVERRUN)
          throw u;
        o = u, o.baseType = s.name, o.name = s.localName, o.type = s.type;
      }
    } else
      try {
        o = s.decode(t);
      } catch (i) {
        if (i.code === V.errors.BUFFER_OVERRUN)
          throw i;
        o = i, o.baseType = s.name, o.name = s.localName, o.type = s.type;
      }
    o != null && r.push(o);
  });
  const a = e.reduce((s, o) => {
    const i = o.localName;
    return i && (s[i] || (s[i] = 0), s[i]++), s;
  }, {});
  e.forEach((s, o) => {
    let i = s.localName;
    if (!i || a[i] !== 1 || (i === "length" && (i = "_length"), r[i] != null))
      return;
    const f = r[o];
    f instanceof Error ? Object.defineProperty(r, i, {
      enumerable: !0,
      get: () => {
        throw f;
      }
    }) : r[i] = f;
  });
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    o instanceof Error && Object.defineProperty(r, s, {
      enumerable: !0,
      get: () => {
        throw o;
      }
    });
  }
  return Object.freeze(r);
}
class lu extends qr {
  constructor(e, r, n) {
    const a = e.type + "[" + (r >= 0 ? r : "") + "]", s = r === -1 || e.dynamic;
    super("array", a, n, s), this.coder = e, this.length = r;
  }
  defaultValue() {
    const e = this.coder.defaultValue(), r = [];
    for (let n = 0; n < this.length; n++)
      r.push(e);
    return r;
  }
  encode(e, r) {
    Array.isArray(r) || this._throwError("expected array value", r);
    let n = this.length;
    n === -1 && (n = r.length, e.writeValue(r.length)), On.checkArgumentCount(r.length, n, "coder array" + (this.localName ? " " + this.localName : ""));
    let a = [];
    for (let s = 0; s < r.length; s++)
      a.push(this.coder);
    return hd(e, a, r);
  }
  decode(e) {
    let r = this.length;
    r === -1 && (r = e.readValue().toNumber(), r * 32 > e._data.length && On.throwError("insufficient data length", V.errors.BUFFER_OVERRUN, {
      length: e._data.length,
      count: r
    }));
    let n = [];
    for (let a = 0; a < r; a++)
      n.push(new fu(this.coder));
    return e.coerce(this.name, md(e, n));
  }
}
class uu extends qr {
  constructor(e) {
    super("bool", "bool", e, !1);
  }
  defaultValue() {
    return !1;
  }
  encode(e, r) {
    return e.writeValue(r ? 1 : 0);
  }
  decode(e) {
    return e.coerce(this.type, !e.readValue().isZero());
  }
}
class pd extends qr {
  constructor(e, r) {
    super(e, e, r, !0);
  }
  defaultValue() {
    return "0x";
  }
  encode(e, r) {
    r = ae(r);
    let n = e.writeValue(r.length);
    return n += e.writeBytes(r), n;
  }
  decode(e) {
    return e.readBytes(e.readValue().toNumber(), !0);
  }
}
class hu extends pd {
  constructor(e) {
    super("bytes", e);
  }
  decode(e) {
    return e.coerce(this.name, ce(super.decode(e)));
  }
}
class mu extends qr {
  constructor(e, r) {
    let n = "bytes" + String(e);
    super(n, n, r, !1), this.size = e;
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + this.size * 2);
  }
  encode(e, r) {
    let n = ae(r);
    return n.length !== this.size && this._throwError("incorrect data length", r), e.writeBytes(n);
  }
  decode(e) {
    return e.coerce(this.name, ce(e.readBytes(this.size)));
  }
}
class pu extends qr {
  constructor(e) {
    super("null", "", e, !1);
  }
  defaultValue() {
    return null;
  }
  encode(e, r) {
    return r != null && this._throwError("not null", r), e.writeBytes([]);
  }
  decode(e) {
    return e.readBytes(0), e.coerce(this.name, null);
  }
}
const bu = /* @__PURE__ */ de.from(-1), bd = /* @__PURE__ */ de.from(0), gu = /* @__PURE__ */ de.from(1), xu = /* @__PURE__ */ de.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), yu = "0x0000000000000000000000000000000000000000000000000000000000000000";
class vu extends qr {
  constructor(e, r, n) {
    const a = (r ? "int" : "uint") + e * 8;
    super(a, a, n, !1), this.size = e, this.signed = r;
  }
  defaultValue() {
    return 0;
  }
  encode(e, r) {
    let n = de.from(r), a = xu.mask(e.wordSize * 8);
    if (this.signed) {
      let s = a.mask(this.size * 8 - 1);
      (n.gt(s) || n.lt(s.add(gu).mul(bu))) && this._throwError("value out-of-bounds", r);
    } else
      (n.lt(bd) || n.gt(a.mask(this.size * 8))) && this._throwError("value out-of-bounds", r);
    return n = n.toTwos(this.size * 8).mask(this.size * 8), this.signed && (n = n.fromTwos(this.size * 8).toTwos(8 * e.wordSize)), e.writeValue(n);
  }
  decode(e) {
    let r = e.readValue().mask(this.size * 8);
    return this.signed && (r = r.fromTwos(this.size * 8)), e.coerce(this.name, r);
  }
}
const Au = "strings/5.7.0", gd = new V(Au);
var _r;
(function(t) {
  t.current = "", t.NFC = "NFC", t.NFD = "NFD", t.NFKC = "NFKC", t.NFKD = "NFKD";
})(_r || (_r = {}));
var Mt;
(function(t) {
  t.UNEXPECTED_CONTINUE = "unexpected continuation byte", t.BAD_PREFIX = "bad codepoint prefix", t.OVERRUN = "string overrun", t.MISSING_CONTINUE = "missing continuation byte", t.OUT_OF_RANGE = "out of UTF-8 range", t.UTF16_SURROGATE = "UTF-16 surrogate", t.OVERLONG = "overlong representation";
})(Mt || (Mt = {}));
function wu(t, e, r, n, a) {
  return gd.throwArgumentError(`invalid codepoint at offset ${e}; ${t}`, "bytes", r);
}
function xd(t, e, r, n, a) {
  if (t === Mt.BAD_PREFIX || t === Mt.UNEXPECTED_CONTINUE) {
    let s = 0;
    for (let o = e + 1; o < r.length && r[o] >> 6 === 2; o++)
      s++;
    return s;
  }
  return t === Mt.OVERRUN ? r.length - e - 1 : 0;
}
function Cu(t, e, r, n, a) {
  return t === Mt.OVERLONG ? (n.push(a), 0) : (n.push(65533), xd(t, e, r));
}
const yd = Object.freeze({
  error: wu,
  ignore: xd,
  replace: Cu
});
function di(t, e) {
  e == null && (e = yd.error), t = ae(t);
  const r = [];
  let n = 0;
  for (; n < t.length; ) {
    const a = t[n++];
    if (a >> 7 === 0) {
      r.push(a);
      continue;
    }
    let s = null, o = null;
    if ((a & 224) === 192)
      s = 1, o = 127;
    else if ((a & 240) === 224)
      s = 2, o = 2047;
    else if ((a & 248) === 240)
      s = 3, o = 65535;
    else {
      (a & 192) === 128 ? n += e(Mt.UNEXPECTED_CONTINUE, n - 1, t, r) : n += e(Mt.BAD_PREFIX, n - 1, t, r);
      continue;
    }
    if (n - 1 + s >= t.length) {
      n += e(Mt.OVERRUN, n - 1, t, r);
      continue;
    }
    let i = a & (1 << 8 - s - 1) - 1;
    for (let f = 0; f < s; f++) {
      let u = t[n];
      if ((u & 192) != 128) {
        n += e(Mt.MISSING_CONTINUE, n, t, r), i = null;
        break;
      }
      i = i << 6 | u & 63, n++;
    }
    if (i !== null) {
      if (i > 1114111) {
        n += e(Mt.OUT_OF_RANGE, n - 1 - s, t, r, i);
        continue;
      }
      if (i >= 55296 && i <= 57343) {
        n += e(Mt.UTF16_SURROGATE, n - 1 - s, t, r, i);
        continue;
      }
      if (i <= o) {
        n += e(Mt.OVERLONG, n - 1 - s, t, r, i);
        continue;
      }
      r.push(i);
    }
  }
  return r;
}
function At(t, e = _r.current) {
  e != _r.current && (gd.checkNormalize(), t = t.normalize(e));
  let r = [];
  for (let n = 0; n < t.length; n++) {
    const a = t.charCodeAt(n);
    if (a < 128)
      r.push(a);
    else if (a < 2048)
      r.push(a >> 6 | 192), r.push(a & 63 | 128);
    else if ((a & 64512) == 55296) {
      n++;
      const s = t.charCodeAt(n);
      if (n >= t.length || (s & 64512) !== 56320)
        throw new Error("invalid utf-8 string");
      const o = 65536 + ((a & 1023) << 10) + (s & 1023);
      r.push(o >> 18 | 240), r.push(o >> 12 & 63 | 128), r.push(o >> 6 & 63 | 128), r.push(o & 63 | 128);
    } else
      r.push(a >> 12 | 224), r.push(a >> 6 & 63 | 128), r.push(a & 63 | 128);
  }
  return ae(r);
}
function co(t) {
  const e = "0000" + t.toString(16);
  return "\\u" + e.substring(e.length - 4);
}
function Eu(t, e) {
  return '"' + di(t, e).map((r) => {
    if (r < 256) {
      switch (r) {
        case 8:
          return "\\b";
        case 9:
          return "\\t";
        case 10:
          return "\\n";
        case 13:
          return "\\r";
        case 34:
          return '\\"';
        case 92:
          return "\\\\";
      }
      if (r >= 32 && r < 127)
        return String.fromCharCode(r);
    }
    return r <= 65535 ? co(r) : (r -= 65536, co((r >> 10 & 1023) + 55296) + co((r & 1023) + 56320));
  }).join("") + '"';
}
function Po(t) {
  return t.map((e) => e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10 & 1023) + 55296, (e & 1023) + 56320))).join("");
}
function ta(t, e) {
  return Po(di(t, e));
}
function xs(t, e = _r.current) {
  return di(At(t, e));
}
function Iu(t) {
  const e = At(t);
  if (e.length > 31)
    throw new Error("bytes32 string must be less than 32 bytes");
  return ce(gt([e, yu]).slice(0, 32));
}
function ku(t) {
  const e = ae(t);
  if (e.length !== 32)
    throw new Error("invalid bytes32 - not 32 bytes long");
  if (e[31] !== 0)
    throw new Error("invalid bytes32 string - no null terminator");
  let r = 31;
  for (; e[r - 1] === 0; )
    r--;
  return ta(e.slice(0, r));
}
function Su(t) {
  if (t.length % 4 !== 0)
    throw new Error("bad data");
  let e = [];
  for (let r = 0; r < t.length; r += 4)
    e.push(parseInt(t.substring(r, r + 4), 16));
  return e;
}
function fi(t, e) {
  e || (e = function(a) {
    return [parseInt(a, 16)];
  });
  let r = 0, n = {};
  return t.split(",").forEach((a) => {
    let s = a.split(":");
    r += parseInt(s[0], 16), n[r] = e(s[1]);
  }), n;
}
function vd(t) {
  let e = 0;
  return t.split(",").map((r) => {
    let n = r.split("-");
    n.length === 1 ? n[1] = "0" : n[1] === "" && (n[1] = "1");
    let a = e + parseInt(n[0], 16);
    return e = parseInt(n[1], 16), { l: a, h: e };
  });
}
function li(t, e) {
  let r = 0;
  for (let n = 0; n < e.length; n++) {
    let a = e[n];
    if (r += a.l, t >= r && t <= r + a.h && (t - r) % (a.d || 1) === 0) {
      if (a.e && a.e.indexOf(t - r) !== -1)
        continue;
      return a;
    }
  }
  return null;
}
const Du = vd("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"), Bu = "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map((t) => parseInt(t, 16)), Fu = [
  { h: 25, s: 32, l: 65 },
  { h: 30, s: 32, e: [23], l: 127 },
  { h: 54, s: 1, e: [48], l: 64, d: 2 },
  { h: 14, s: 1, l: 57, d: 2 },
  { h: 44, s: 1, l: 17, d: 2 },
  { h: 10, s: 1, e: [2, 6, 8], l: 61, d: 2 },
  { h: 16, s: 1, l: 68, d: 2 },
  { h: 84, s: 1, e: [18, 24, 66], l: 19, d: 2 },
  { h: 26, s: 32, e: [17], l: 435 },
  { h: 22, s: 1, l: 71, d: 2 },
  { h: 15, s: 80, l: 40 },
  { h: 31, s: 32, l: 16 },
  { h: 32, s: 1, l: 80, d: 2 },
  { h: 52, s: 1, l: 42, d: 2 },
  { h: 12, s: 1, l: 55, d: 2 },
  { h: 40, s: 1, e: [38], l: 15, d: 2 },
  { h: 14, s: 1, l: 48, d: 2 },
  { h: 37, s: 48, l: 49 },
  { h: 148, s: 1, l: 6351, d: 2 },
  { h: 88, s: 1, l: 160, d: 2 },
  { h: 15, s: 16, l: 704 },
  { h: 25, s: 26, l: 854 },
  { h: 25, s: 32, l: 55915 },
  { h: 37, s: 40, l: 1247 },
  { h: 25, s: -119711, l: 53248 },
  { h: 25, s: -119763, l: 52 },
  { h: 25, s: -119815, l: 52 },
  { h: 25, s: -119867, e: [1, 4, 5, 7, 8, 11, 12, 17], l: 52 },
  { h: 25, s: -119919, l: 52 },
  { h: 24, s: -119971, e: [2, 7, 8, 17], l: 52 },
  { h: 24, s: -120023, e: [2, 7, 13, 15, 16, 17], l: 52 },
  { h: 25, s: -120075, l: 52 },
  { h: 25, s: -120127, l: 52 },
  { h: 25, s: -120179, l: 52 },
  { h: 25, s: -120231, l: 52 },
  { h: 25, s: -120283, l: 52 },
  { h: 25, s: -120335, l: 52 },
  { h: 24, s: -119543, e: [17], l: 56 },
  { h: 24, s: -119601, e: [17], l: 58 },
  { h: 24, s: -119659, e: [17], l: 58 },
  { h: 24, s: -119717, e: [17], l: 58 },
  { h: 24, s: -119775, e: [17], l: 58 }
], Ru = fi("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"), _u = fi("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"), Tu = fi("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D", Su), Mu = vd("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");
function Uu(t) {
  return t.reduce((e, r) => (r.forEach((n) => {
    e.push(n);
  }), e), []);
}
function Pu(t) {
  return !!li(t, Du);
}
function Ou(t) {
  let e = li(t, Fu);
  if (e)
    return [t + e.s];
  let r = Ru[t];
  if (r)
    return r;
  let n = _u[t];
  if (n)
    return [t + n[0]];
  let a = Tu[t];
  return a || null;
}
function Nu(t) {
  return !!li(t, Mu);
}
function Lu(t) {
  if (t.match(/^[a-z0-9-]*$/i) && t.length <= 59)
    return t.toLowerCase();
  let e = xs(t);
  e = Uu(e.map((n) => {
    if (Bu.indexOf(n) >= 0)
      return [];
    if (n >= 65024 && n <= 65039)
      return [];
    let a = Ou(n);
    return a || [n];
  })), e = xs(Po(e), _r.NFKC), e.forEach((n) => {
    if (Nu(n))
      throw new Error("STRINGPREP_CONTAINS_PROHIBITED");
  }), e.forEach((n) => {
    if (Pu(n))
      throw new Error("STRINGPREP_CONTAINS_UNASSIGNED");
  });
  let r = Po(e);
  if (r.substring(0, 1) === "-" || r.substring(2, 4) === "--" || r.substring(r.length - 1) === "-")
    throw new Error("invalid hyphen");
  return r;
}
const ju = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _toEscapedUtf8String: Eu,
  toUtf8Bytes: At,
  toUtf8CodePoints: xs,
  toUtf8String: ta,
  Utf8ErrorFuncs: yd,
  get Utf8ErrorReason() {
    return Mt;
  },
  get UnicodeNormalizationForm() {
    return _r;
  },
  formatBytes32String: Iu,
  parseBytes32String: ku,
  nameprep: Lu
}, Symbol.toStringTag, { value: "Module" }));
class Wu extends pd {
  constructor(e) {
    super("string", e);
  }
  defaultValue() {
    return "";
  }
  encode(e, r) {
    return super.encode(e, At(r));
  }
  decode(e) {
    return ta(super.decode(e));
  }
}
class Xa extends qr {
  constructor(e, r) {
    let n = !1;
    const a = [];
    e.forEach((o) => {
      o.dynamic && (n = !0), a.push(o.type);
    });
    const s = "tuple(" + a.join(",") + ")";
    super("tuple", s, r, n), this.coders = e;
  }
  defaultValue() {
    const e = [];
    this.coders.forEach((n) => {
      e.push(n.defaultValue());
    });
    const r = this.coders.reduce((n, a) => {
      const s = a.localName;
      return s && (n[s] || (n[s] = 0), n[s]++), n;
    }, {});
    return this.coders.forEach((n, a) => {
      let s = n.localName;
      !s || r[s] !== 1 || (s === "length" && (s = "_length"), e[s] == null && (e[s] = e[a]));
    }), Object.freeze(e);
  }
  encode(e, r) {
    return hd(e, this.coders, r);
  }
  decode(e) {
    return e.coerce(this.name, md(e, this.coders));
  }
}
const Ja = new V(Na), Hu = new RegExp(/^bytes([0-9]*)$/), zu = new RegExp(/^(u?int)([0-9]*)$/);
class Ad {
  constructor(e) {
    ne(this, "coerceFunc", e || null);
  }
  _getCoder(e) {
    switch (e.baseType) {
      case "address":
        return new du(e.name);
      case "bool":
        return new uu(e.name);
      case "string":
        return new Wu(e.name);
      case "bytes":
        return new hu(e.name);
      case "array":
        return new lu(this._getCoder(e.arrayChildren), e.arrayLength, e.name);
      case "tuple":
        return new Xa((e.components || []).map((n) => this._getCoder(n)), e.name);
      case "":
        return new pu(e.name);
    }
    let r = e.type.match(zu);
    if (r) {
      let n = parseInt(r[2] || "256");
      return (n === 0 || n > 256 || n % 8 !== 0) && Ja.throwArgumentError("invalid " + r[1] + " bit length", "param", e), new vu(n / 8, r[1] === "int", e.name);
    }
    if (r = e.type.match(Hu), r) {
      let n = parseInt(r[1]);
      return (n === 0 || n > 32) && Ja.throwArgumentError("invalid bytes length", "param", e), new mu(n, e.name);
    }
    return Ja.throwArgumentError("invalid type", "type", e.type);
  }
  _getWordSize() {
    return 32;
  }
  _getReader(e, r) {
    return new gs(e, this._getWordSize(), this.coerceFunc, r);
  }
  _getWriter() {
    return new Uo(this._getWordSize());
  }
  getDefaultValue(e) {
    const r = e.map((a) => this._getCoder(vt.from(a)));
    return new Xa(r, "_").defaultValue();
  }
  encode(e, r) {
    e.length !== r.length && Ja.throwError("types/values length mismatch", V.errors.INVALID_ARGUMENT, {
      count: { types: e.length, values: r.length },
      value: { types: e, values: r }
    });
    const n = e.map((o) => this._getCoder(vt.from(o))), a = new Xa(n, "_"), s = this._getWriter();
    return a.encode(s, r), s.data;
  }
  decode(e, r, n) {
    const a = e.map((o) => this._getCoder(vt.from(o)));
    return new Xa(a, "_").decode(this._getReader(ae(r), n));
  }
}
const wd = new Ad();
function rn(t) {
  return Ge(At(t));
}
const Cd = "hash/5.7.0";
function ui(t) {
  t = atob(t);
  const e = [];
  for (let r = 0; r < t.length; r++)
    e.push(t.charCodeAt(r));
  return ae(e);
}
function Ed(t) {
  t = ae(t);
  let e = "";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return btoa(e);
}
const $u = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: ui,
  encode: Ed
}, Symbol.toStringTag, { value: "Module" }));
function Id(t, e) {
  e == null && (e = 1);
  const r = [], n = r.forEach, a = function(s, o) {
    n.call(s, function(i) {
      o > 0 && Array.isArray(i) ? a(i, o - 1) : r.push(i);
    });
  };
  return a(t, e), r;
}
function Vu(t) {
  const e = {};
  for (let r = 0; r < t.length; r++) {
    const n = t[r];
    e[n[0]] = n[1];
  }
  return e;
}
function Gu(t) {
  let e = 0;
  function r() {
    return t[e++] << 8 | t[e++];
  }
  let n = r(), a = 1, s = [0, 1];
  for (let B = 1; B < n; B++)
    s.push(a += r());
  let o = r(), i = e;
  e += o;
  let f = 0, u = 0;
  function h() {
    return f == 0 && (u = u << 8 | t[e++], f = 8), u >> --f & 1;
  }
  const g = 31, C = Math.pow(2, g), E = C >>> 1, S = E >> 1, D = C - 1;
  let x = 0;
  for (let B = 0; B < g; B++)
    x = x << 1 | h();
  let F = [], M = 0, j = C;
  for (; ; ) {
    let B = Math.floor(((x - M + 1) * a - 1) / j), W = 0, G = n;
    for (; G - W > 1; ) {
      let se = W + G >>> 1;
      B < s[se] ? G = se : W = se;
    }
    if (W == 0)
      break;
    F.push(W);
    let K = M + Math.floor(j * s[W] / a), te = M + Math.floor(j * s[W + 1] / a) - 1;
    for (; ((K ^ te) & E) == 0; )
      x = x << 1 & D | h(), K = K << 1 & D, te = te << 1 & D | 1;
    for (; K & ~te & S; )
      x = x & E | x << 1 & D >>> 1 | h(), K = K << 1 ^ E, te = (te ^ E) << 1 | E | 1;
    M = K, j = 1 + te - K;
  }
  let U = n - 4;
  return F.map((B) => {
    switch (B - U) {
      case 3:
        return U + 65792 + (t[i++] << 16 | t[i++] << 8 | t[i++]);
      case 2:
        return U + 256 + (t[i++] << 8 | t[i++]);
      case 1:
        return U + t[i++];
      default:
        return B - 1;
    }
  });
}
function Ku(t) {
  let e = 0;
  return () => t[e++];
}
function qu(t) {
  return Ku(Gu(t));
}
function Yu(t) {
  return t & 1 ? ~t >> 1 : t >> 1;
}
function Xu(t, e) {
  let r = Array(t);
  for (let n = 0; n < t; n++)
    r[n] = 1 + e();
  return r;
}
function Sc(t, e) {
  let r = Array(t);
  for (let n = 0, a = -1; n < t; n++)
    r[n] = a += 1 + e();
  return r;
}
function Ju(t, e) {
  let r = Array(t);
  for (let n = 0, a = 0; n < t; n++)
    r[n] = a += Yu(e());
  return r;
}
function ys(t, e) {
  let r = Sc(t(), t), n = t(), a = Sc(n, t), s = Xu(n, t);
  for (let o = 0; o < n; o++)
    for (let i = 0; i < s[o]; i++)
      r.push(a[o] + i);
  return e ? r.map((o) => e[o]) : r;
}
function Zu(t) {
  let e = [];
  for (; ; ) {
    let r = t();
    if (r == 0)
      break;
    e.push(eh(r, t));
  }
  for (; ; ) {
    let r = t() - 1;
    if (r < 0)
      break;
    e.push(th(r, t));
  }
  return Vu(Id(e));
}
function Qu(t) {
  let e = [];
  for (; ; ) {
    let r = t();
    if (r == 0)
      break;
    e.push(r);
  }
  return e;
}
function kd(t, e, r) {
  let n = Array(t).fill(void 0).map(() => []);
  for (let a = 0; a < e; a++)
    Ju(t, r).forEach((s, o) => n[o].push(s));
  return n;
}
function eh(t, e) {
  let r = 1 + e(), n = e(), a = Qu(e), s = kd(a.length, 1 + t, e);
  return Id(s.map((o, i) => {
    const f = o[0], u = o.slice(1);
    return Array(a[i]).fill(void 0).map((h, g) => {
      let C = g * n;
      return [f + g * r, u.map((E) => E + C)];
    });
  }));
}
function th(t, e) {
  let r = 1 + e();
  return kd(r, 1 + t, e).map((a) => [a[0], a.slice(1)]);
}
function rh(t) {
  let e = ys(t).sort((n, a) => n - a);
  return r();
  function r() {
    let n = [];
    for (; ; ) {
      let u = ys(t, e);
      if (u.length == 0)
        break;
      n.push({ set: new Set(u), node: r() });
    }
    n.sort((u, h) => h.set.size - u.set.size);
    let a = t(), s = a % 3;
    a = a / 3 | 0;
    let o = !!(a & 1);
    a >>= 1;
    let i = a == 1, f = a == 2;
    return { branches: n, valid: s, fe0f: o, save: i, check: f };
  }
}
function nh() {
  return qu(ui("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="));
}
const Bs = nh(), ah = new Set(ys(Bs)), sh = new Set(ys(Bs)), oh = Zu(Bs), ih = rh(Bs), Dc = 45, Bc = 95;
function Sd(t) {
  return xs(t);
}
function ch(t) {
  return t.filter((e) => e != 65039);
}
function Dd(t) {
  for (let e of t.split(".")) {
    let r = Sd(e);
    try {
      for (let n = r.lastIndexOf(Bc) - 1; n >= 0; n--)
        if (r[n] !== Bc)
          throw new Error("underscore only allowed at start");
      if (r.length >= 4 && r.every((n) => n < 128) && r[2] === Dc && r[3] === Dc)
        throw new Error("invalid label extension");
    } catch (n) {
      throw new Error(`Invalid label "${e}": ${n.message}`);
    }
  }
  return t;
}
function dh(t) {
  return Dd(fh(t, ch));
}
function fh(t, e) {
  let r = Sd(t).reverse(), n = [];
  for (; r.length; ) {
    let a = uh(r);
    if (a) {
      n.push(...e(a));
      continue;
    }
    let s = r.pop();
    if (ah.has(s)) {
      n.push(s);
      continue;
    }
    if (sh.has(s))
      continue;
    let o = oh[s];
    if (o) {
      n.push(...o);
      continue;
    }
    throw new Error(`Disallowed codepoint: 0x${s.toString(16).toUpperCase()}`);
  }
  return Dd(lh(String.fromCodePoint(...n)));
}
function lh(t) {
  return t.normalize("NFC");
}
function uh(t, e) {
  var r;
  let n = ih, a, s, o = [], i = t.length;
  for (e && (e.length = 0); i; ) {
    let f = t[--i];
    if (n = (r = n.branches.find((u) => u.set.has(f))) === null || r === void 0 ? void 0 : r.node, !n)
      break;
    if (n.save)
      s = f;
    else if (n.check && f === s)
      break;
    o.push(f), n.fe0f && (o.push(65039), i > 0 && t[i - 1] == 65039 && i--), n.valid && (a = o.slice(), n.valid == 2 && a.splice(1, 1), e && e.push(...t.slice(i).reverse()), t.length = i);
  }
  return a;
}
const hh = new V(Cd), Bd = new Uint8Array(32);
Bd.fill(0);
function Fc(t) {
  if (t.length === 0)
    throw new Error("invalid ENS name; empty component");
  return t;
}
function Fs(t) {
  const e = At(dh(t)), r = [];
  if (t.length === 0)
    return r;
  let n = 0;
  for (let a = 0; a < e.length; a++)
    e[a] === 46 && (r.push(Fc(e.slice(n, a))), n = a + 1);
  if (n >= e.length)
    throw new Error("invalid ENS name; empty component");
  return r.push(Fc(e.slice(n))), r;
}
function mh(t) {
  return Fs(t).map((e) => ta(e)).join(".");
}
function ph(t) {
  try {
    return Fs(t).length !== 0;
  } catch {
  }
  return !1;
}
function bh(t) {
  typeof t != "string" && hh.throwArgumentError("invalid ENS name; not a string", "name", t);
  let e = Bd;
  const r = Fs(t);
  for (; r.length; )
    e = Ge(gt([e, Ge(r.pop())]));
  return ce(e);
}
function gh(t) {
  return ce(gt(Fs(t).map((e) => {
    if (e.length > 63)
      throw new Error("invalid DNS encoded entry; length exceeds 63 bytes");
    const r = new Uint8Array(e.length + 1);
    return r.set(e, 1), r[0] = r.length - 1, r;
  }))) + "00";
}
const Fd = `Ethereum Signed Message:
`;
function hi(t) {
  return typeof t == "string" && (t = At(t)), Ge(gt([
    At(Fd),
    At(String(t.length)),
    t
  ]));
}
var xh = globalThis && globalThis.__awaiter || function(t, e, r, n) {
  function a(s) {
    return s instanceof r ? s : new r(function(o) {
      o(s);
    });
  }
  return new (r || (r = Promise))(function(s, o) {
    function i(h) {
      try {
        u(n.next(h));
      } catch (g) {
        o(g);
      }
    }
    function f(h) {
      try {
        u(n.throw(h));
      } catch (g) {
        o(g);
      }
    }
    function u(h) {
      h.done ? s(h.value) : a(h.value).then(i, f);
    }
    u((n = n.apply(t, e || [])).next());
  });
};
const dt = new V(Cd), Rd = new Uint8Array(32);
Rd.fill(0);
const yh = de.from(-1), _d = de.from(0), Td = de.from(1), vh = de.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
function Ah(t) {
  const e = ae(t), r = e.length % 32;
  return r ? an([e, Rd.slice(r)]) : ce(e);
}
const wh = xt(Td.toHexString(), 32), Ch = xt(_d.toHexString(), 32), Rc = {
  name: "string",
  version: "string",
  chainId: "uint256",
  verifyingContract: "address",
  salt: "bytes32"
}, fo = [
  "name",
  "version",
  "chainId",
  "verifyingContract",
  "salt"
];
function _c(t) {
  return function(e) {
    return typeof e != "string" && dt.throwArgumentError(`invalid domain value for ${JSON.stringify(t)}`, `domain.${t}`, e), e;
  };
}
const Eh = {
  name: _c("name"),
  version: _c("version"),
  chainId: function(t) {
    try {
      return de.from(t).toString();
    } catch {
    }
    return dt.throwArgumentError('invalid domain value for "chainId"', "domain.chainId", t);
  },
  verifyingContract: function(t) {
    try {
      return at(t).toLowerCase();
    } catch {
    }
    return dt.throwArgumentError('invalid domain value "verifyingContract"', "domain.verifyingContract", t);
  },
  salt: function(t) {
    try {
      const e = ae(t);
      if (e.length !== 32)
        throw new Error("bad length");
      return ce(e);
    } catch {
    }
    return dt.throwArgumentError('invalid domain value "salt"', "domain.salt", t);
  }
};
function lo(t) {
  {
    const e = t.match(/^(u?)int(\d*)$/);
    if (e) {
      const r = e[1] === "", n = parseInt(e[2] || "256");
      (n % 8 !== 0 || n > 256 || e[2] && e[2] !== String(n)) && dt.throwArgumentError("invalid numeric width", "type", t);
      const a = vh.mask(r ? n - 1 : n), s = r ? a.add(Td).mul(yh) : _d;
      return function(o) {
        const i = de.from(o);
        return (i.lt(s) || i.gt(a)) && dt.throwArgumentError(`value out-of-bounds for ${t}`, "value", o), xt(i.toTwos(256).toHexString(), 32);
      };
    }
  }
  {
    const e = t.match(/^bytes(\d+)$/);
    if (e) {
      const r = parseInt(e[1]);
      return (r === 0 || r > 32 || e[1] !== String(r)) && dt.throwArgumentError("invalid bytes width", "type", t), function(n) {
        return ae(n).length !== r && dt.throwArgumentError(`invalid length for ${t}`, "value", n), Ah(n);
      };
    }
  }
  switch (t) {
    case "address":
      return function(e) {
        return xt(at(e), 32);
      };
    case "bool":
      return function(e) {
        return e ? wh : Ch;
      };
    case "bytes":
      return function(e) {
        return Ge(e);
      };
    case "string":
      return function(e) {
        return rn(e);
      };
  }
  return null;
}
function Tc(t, e) {
  return `${t}(${e.map(({ name: r, type: n }) => n + " " + r).join(",")})`;
}
class Dt {
  constructor(e) {
    ne(this, "types", Object.freeze(yn(e))), ne(this, "_encoderCache", {}), ne(this, "_types", {});
    const r = {}, n = {}, a = {};
    Object.keys(e).forEach((i) => {
      r[i] = {}, n[i] = [], a[i] = {};
    });
    for (const i in e) {
      const f = {};
      e[i].forEach((u) => {
        f[u.name] && dt.throwArgumentError(`duplicate variable name ${JSON.stringify(u.name)} in ${JSON.stringify(i)}`, "types", e), f[u.name] = !0;
        const h = u.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
        h === i && dt.throwArgumentError(`circular type reference to ${JSON.stringify(h)}`, "types", e), !lo(h) && (n[h] || dt.throwArgumentError(`unknown type ${JSON.stringify(h)}`, "types", e), n[h].push(i), r[i][h] = !0);
      });
    }
    const s = Object.keys(n).filter((i) => n[i].length === 0);
    s.length === 0 ? dt.throwArgumentError("missing primary type", "types", e) : s.length > 1 && dt.throwArgumentError(`ambiguous primary types or unused types: ${s.map((i) => JSON.stringify(i)).join(", ")}`, "types", e), ne(this, "primaryType", s[0]);
    function o(i, f) {
      f[i] && dt.throwArgumentError(`circular type reference to ${JSON.stringify(i)}`, "types", e), f[i] = !0, Object.keys(r[i]).forEach((u) => {
        !n[u] || (o(u, f), Object.keys(f).forEach((h) => {
          a[h][u] = !0;
        }));
      }), delete f[i];
    }
    o(this.primaryType, {});
    for (const i in a) {
      const f = Object.keys(a[i]);
      f.sort(), this._types[i] = Tc(i, e[i]) + f.map((u) => Tc(u, e[u])).join("");
    }
  }
  getEncoder(e) {
    let r = this._encoderCache[e];
    return r || (r = this._encoderCache[e] = this._getEncoder(e)), r;
  }
  _getEncoder(e) {
    {
      const a = lo(e);
      if (a)
        return a;
    }
    const r = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
    if (r) {
      const a = r[1], s = this.getEncoder(a), o = parseInt(r[3]);
      return (i) => {
        o >= 0 && i.length !== o && dt.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", i);
        let f = i.map(s);
        return this._types[a] && (f = f.map(Ge)), Ge(an(f));
      };
    }
    const n = this.types[e];
    if (n) {
      const a = rn(this._types[e]);
      return (s) => {
        const o = n.map(({ name: i, type: f }) => {
          const u = this.getEncoder(f)(s[i]);
          return this._types[f] ? Ge(u) : u;
        });
        return o.unshift(a), an(o);
      };
    }
    return dt.throwArgumentError(`unknown type: ${e}`, "type", e);
  }
  encodeType(e) {
    const r = this._types[e];
    return r || dt.throwArgumentError(`unknown type: ${JSON.stringify(e)}`, "name", e), r;
  }
  encodeData(e, r) {
    return this.getEncoder(e)(r);
  }
  hashStruct(e, r) {
    return Ge(this.encodeData(e, r));
  }
  encode(e) {
    return this.encodeData(this.primaryType, e);
  }
  hash(e) {
    return this.hashStruct(this.primaryType, e);
  }
  _visit(e, r, n) {
    if (lo(e))
      return n(e, r);
    const a = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
    if (a) {
      const o = a[1], i = parseInt(a[3]);
      return i >= 0 && r.length !== i && dt.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", r), r.map((f) => this._visit(o, f, n));
    }
    const s = this.types[e];
    return s ? s.reduce((o, { name: i, type: f }) => (o[i] = this._visit(f, r[i], n), o), {}) : dt.throwArgumentError(`unknown type: ${e}`, "type", e);
  }
  visit(e, r) {
    return this._visit(this.primaryType, e, r);
  }
  static from(e) {
    return new Dt(e);
  }
  static getPrimaryType(e) {
    return Dt.from(e).primaryType;
  }
  static hashStruct(e, r, n) {
    return Dt.from(r).hashStruct(e, n);
  }
  static hashDomain(e) {
    const r = [];
    for (const n in e) {
      const a = Rc[n];
      a || dt.throwArgumentError(`invalid typed-data domain key: ${JSON.stringify(n)}`, "domain", e), r.push({ name: n, type: a });
    }
    return r.sort((n, a) => fo.indexOf(n.name) - fo.indexOf(a.name)), Dt.hashStruct("EIP712Domain", { EIP712Domain: r }, e);
  }
  static encode(e, r, n) {
    return an([
      "0x1901",
      Dt.hashDomain(e),
      Dt.from(r).hash(n)
    ]);
  }
  static hash(e, r, n) {
    return Ge(Dt.encode(e, r, n));
  }
  static resolveNames(e, r, n, a) {
    return xh(this, void 0, void 0, function* () {
      e = Ht(e);
      const s = {};
      e.verifyingContract && !ft(e.verifyingContract, 20) && (s[e.verifyingContract] = "0x");
      const o = Dt.from(r);
      o.visit(n, (i, f) => (i === "address" && !ft(f, 20) && (s[f] = "0x"), f));
      for (const i in s)
        s[i] = yield a(i);
      return e.verifyingContract && s[e.verifyingContract] && (e.verifyingContract = s[e.verifyingContract]), n = o.visit(n, (i, f) => i === "address" && s[f] ? s[f] : f), { domain: e, value: n };
    });
  }
  static getPayload(e, r, n) {
    Dt.hashDomain(e);
    const a = {}, s = [];
    fo.forEach((f) => {
      const u = e[f];
      u != null && (a[f] = Eh[f](u), s.push({ name: f, type: Rc[f] }));
    });
    const o = Dt.from(r), i = Ht(r);
    return i.EIP712Domain ? dt.throwArgumentError("types must not contain EIP712Domain type", "types.EIP712Domain", r) : i.EIP712Domain = s, o.encode(n), {
      types: i,
      domain: a,
      primaryType: o.primaryType,
      message: o.visit(n, (f, u) => {
        if (f.match(/^bytes(\d*)/))
          return ce(ae(u));
        if (f.match(/^u?int/))
          return de.from(u).toString();
        switch (f) {
          case "address":
            return u.toLowerCase();
          case "bool":
            return !!u;
          case "string":
            return typeof u != "string" && dt.throwArgumentError("invalid string", "value", u), u;
        }
        return dt.throwArgumentError("unsupported type", "type", f);
      })
    };
  }
}
const Ih = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  id: rn,
  dnsEncode: gh,
  namehash: bh,
  isValidName: ph,
  ensNormalize: mh,
  messagePrefix: Fd,
  hashMessage: hi,
  _TypedDataEncoder: Dt
}, Symbol.toStringTag, { value: "Module" })), ct = new V(Na);
class Md extends Dn {
}
class Ud extends Dn {
}
class kh extends Dn {
}
class vs extends Dn {
  static isIndexed(e) {
    return !!(e && e._isIndexed);
  }
}
const Sh = {
  "0x08c379a0": { signature: "Error(string)", name: "Error", inputs: ["string"], reason: !0 },
  "0x4e487b71": { signature: "Panic(uint256)", name: "Panic", inputs: ["uint256"] }
};
function Mc(t, e) {
  const r = new Error(`deferred error during ABI decoding triggered accessing ${t}`);
  return r.error = e, r;
}
class Oo {
  constructor(e) {
    let r = [];
    typeof e == "string" ? r = JSON.parse(e) : r = e, ne(this, "fragments", r.map((n) => Ir.from(n)).filter((n) => n != null)), ne(this, "_abiCoder", Pn(new.target, "getAbiCoder")()), ne(this, "functions", {}), ne(this, "errors", {}), ne(this, "events", {}), ne(this, "structs", {}), this.fragments.forEach((n) => {
      let a = null;
      switch (n.type) {
        case "constructor":
          if (this.deploy) {
            ct.warn("duplicate definition - constructor");
            return;
          }
          ne(this, "deploy", n);
          return;
        case "function":
          a = this.functions;
          break;
        case "event":
          a = this.events;
          break;
        case "error":
          a = this.errors;
          break;
        default:
          return;
      }
      let s = n.format();
      if (a[s]) {
        ct.warn("duplicate definition - " + s);
        return;
      }
      a[s] = n;
    }), this.deploy || ne(this, "deploy", sr.from({
      payable: !1,
      type: "constructor"
    })), ne(this, "_isInterface", !0);
  }
  format(e) {
    e || (e = Re.full), e === Re.sighash && ct.throwArgumentError("interface does not support formatting sighash", "format", e);
    const r = this.fragments.map((n) => n.format(e));
    return e === Re.json ? JSON.stringify(r.map((n) => JSON.parse(n))) : r;
  }
  static getAbiCoder() {
    return wd;
  }
  static getAddress(e) {
    return at(e);
  }
  static getSighash(e) {
    return Vr(rn(e.format()), 0, 4);
  }
  static getEventTopic(e) {
    return rn(e.format());
  }
  getFunction(e) {
    if (ft(e)) {
      for (const n in this.functions)
        if (e === this.getSighash(n))
          return this.functions[n];
      ct.throwArgumentError("no matching function", "sighash", e);
    }
    if (e.indexOf("(") === -1) {
      const n = e.trim(), a = Object.keys(this.functions).filter((s) => s.split("(")[0] === n);
      return a.length === 0 ? ct.throwArgumentError("no matching function", "name", n) : a.length > 1 && ct.throwArgumentError("multiple matching functions", "name", n), this.functions[a[0]];
    }
    const r = this.functions[or.fromString(e).format()];
    return r || ct.throwArgumentError("no matching function", "signature", e), r;
  }
  getEvent(e) {
    if (ft(e)) {
      const n = e.toLowerCase();
      for (const a in this.events)
        if (n === this.getEventTopic(a))
          return this.events[a];
      ct.throwArgumentError("no matching event", "topichash", n);
    }
    if (e.indexOf("(") === -1) {
      const n = e.trim(), a = Object.keys(this.events).filter((s) => s.split("(")[0] === n);
      return a.length === 0 ? ct.throwArgumentError("no matching event", "name", n) : a.length > 1 && ct.throwArgumentError("multiple matching events", "name", n), this.events[a[0]];
    }
    const r = this.events[wr.fromString(e).format()];
    return r || ct.throwArgumentError("no matching event", "signature", e), r;
  }
  getError(e) {
    if (ft(e)) {
      const n = Pn(this.constructor, "getSighash");
      for (const a in this.errors) {
        const s = this.errors[a];
        if (e === n(s))
          return this.errors[a];
      }
      ct.throwArgumentError("no matching error", "sighash", e);
    }
    if (e.indexOf("(") === -1) {
      const n = e.trim(), a = Object.keys(this.errors).filter((s) => s.split("(")[0] === n);
      return a.length === 0 ? ct.throwArgumentError("no matching error", "name", n) : a.length > 1 && ct.throwArgumentError("multiple matching errors", "name", n), this.errors[a[0]];
    }
    const r = this.errors[or.fromString(e).format()];
    return r || ct.throwArgumentError("no matching error", "signature", e), r;
  }
  getSighash(e) {
    if (typeof e == "string")
      try {
        e = this.getFunction(e);
      } catch (r) {
        try {
          e = this.getError(e);
        } catch {
          throw r;
        }
      }
    return Pn(this.constructor, "getSighash")(e);
  }
  getEventTopic(e) {
    return typeof e == "string" && (e = this.getEvent(e)), Pn(this.constructor, "getEventTopic")(e);
  }
  _decodeParams(e, r) {
    return this._abiCoder.decode(e, r);
  }
  _encodeParams(e, r) {
    return this._abiCoder.encode(e, r);
  }
  encodeDeploy(e) {
    return this._encodeParams(this.deploy.inputs, e || []);
  }
  decodeErrorResult(e, r) {
    typeof e == "string" && (e = this.getError(e));
    const n = ae(r);
    return ce(n.slice(0, 4)) !== this.getSighash(e) && ct.throwArgumentError(`data signature does not match error ${e.name}.`, "data", ce(n)), this._decodeParams(e.inputs, n.slice(4));
  }
  encodeErrorResult(e, r) {
    return typeof e == "string" && (e = this.getError(e)), ce(gt([
      this.getSighash(e),
      this._encodeParams(e.inputs, r || [])
    ]));
  }
  decodeFunctionData(e, r) {
    typeof e == "string" && (e = this.getFunction(e));
    const n = ae(r);
    return ce(n.slice(0, 4)) !== this.getSighash(e) && ct.throwArgumentError(`data signature does not match function ${e.name}.`, "data", ce(n)), this._decodeParams(e.inputs, n.slice(4));
  }
  encodeFunctionData(e, r) {
    return typeof e == "string" && (e = this.getFunction(e)), ce(gt([
      this.getSighash(e),
      this._encodeParams(e.inputs, r || [])
    ]));
  }
  decodeFunctionResult(e, r) {
    typeof e == "string" && (e = this.getFunction(e));
    let n = ae(r), a = null, s = "", o = null, i = null, f = null;
    switch (n.length % this._abiCoder._getWordSize()) {
      case 0:
        try {
          return this._abiCoder.decode(e.outputs, n);
        } catch {
        }
        break;
      case 4: {
        const u = ce(n.slice(0, 4)), h = Sh[u];
        if (h)
          o = this._abiCoder.decode(h.inputs, n.slice(4)), i = h.name, f = h.signature, h.reason && (a = o[0]), i === "Error" ? s = `; VM Exception while processing transaction: reverted with reason string ${JSON.stringify(o[0])}` : i === "Panic" && (s = `; VM Exception while processing transaction: reverted with panic code ${o[0]}`);
        else
          try {
            const g = this.getError(u);
            o = this._abiCoder.decode(g.inputs, n.slice(4)), i = g.name, f = g.format();
          } catch {
          }
        break;
      }
    }
    return ct.throwError("call revert exception" + s, V.errors.CALL_EXCEPTION, {
      method: e.format(),
      data: ce(r),
      errorArgs: o,
      errorName: i,
      errorSignature: f,
      reason: a
    });
  }
  encodeFunctionResult(e, r) {
    return typeof e == "string" && (e = this.getFunction(e)), ce(this._abiCoder.encode(e.outputs, r || []));
  }
  encodeFilterTopics(e, r) {
    typeof e == "string" && (e = this.getEvent(e)), r.length > e.inputs.length && ct.throwError("too many arguments for " + e.format(), V.errors.UNEXPECTED_ARGUMENT, {
      argument: "values",
      value: r
    });
    let n = [];
    e.anonymous || n.push(this.getEventTopic(e));
    const a = (s, o) => s.type === "string" ? rn(o) : s.type === "bytes" ? Ge(ce(o)) : (s.type === "bool" && typeof o == "boolean" && (o = o ? "0x01" : "0x00"), s.type.match(/^u?int/) && (o = de.from(o).toHexString()), s.type === "address" && this._abiCoder.encode(["address"], [o]), xt(ce(o), 32));
    for (r.forEach((s, o) => {
      let i = e.inputs[o];
      if (!i.indexed) {
        s != null && ct.throwArgumentError("cannot filter non-indexed parameters; must be null", "contract." + i.name, s);
        return;
      }
      s == null ? n.push(null) : i.baseType === "array" || i.baseType === "tuple" ? ct.throwArgumentError("filtering with tuples or arrays not supported", "contract." + i.name, s) : Array.isArray(s) ? n.push(s.map((f) => a(i, f))) : n.push(a(i, s));
    }); n.length && n[n.length - 1] === null; )
      n.pop();
    return n;
  }
  encodeEventLog(e, r) {
    typeof e == "string" && (e = this.getEvent(e));
    const n = [], a = [], s = [];
    return e.anonymous || n.push(this.getEventTopic(e)), r.length !== e.inputs.length && ct.throwArgumentError("event arguments/values mismatch", "values", r), e.inputs.forEach((o, i) => {
      const f = r[i];
      if (o.indexed)
        if (o.type === "string")
          n.push(rn(f));
        else if (o.type === "bytes")
          n.push(Ge(f));
        else {
          if (o.baseType === "tuple" || o.baseType === "array")
            throw new Error("not implemented");
          n.push(this._abiCoder.encode([o.type], [f]));
        }
      else
        a.push(o), s.push(f);
    }), {
      data: this._abiCoder.encode(a, s),
      topics: n
    };
  }
  decodeEventLog(e, r, n) {
    if (typeof e == "string" && (e = this.getEvent(e)), n != null && !e.anonymous) {
      let C = this.getEventTopic(e);
      (!ft(n[0], 32) || n[0].toLowerCase() !== C) && ct.throwError("fragment/topic mismatch", V.errors.INVALID_ARGUMENT, { argument: "topics[0]", expected: C, value: n[0] }), n = n.slice(1);
    }
    let a = [], s = [], o = [];
    e.inputs.forEach((C, E) => {
      C.indexed ? C.type === "string" || C.type === "bytes" || C.baseType === "tuple" || C.baseType === "array" ? (a.push(vt.fromObject({ type: "bytes32", name: C.name })), o.push(!0)) : (a.push(C), o.push(!1)) : (s.push(C), o.push(!1));
    });
    let i = n != null ? this._abiCoder.decode(a, gt(n)) : null, f = this._abiCoder.decode(s, r, !0), u = [], h = 0, g = 0;
    e.inputs.forEach((C, E) => {
      if (C.indexed)
        if (i == null)
          u[E] = new vs({ _isIndexed: !0, hash: null });
        else if (o[E])
          u[E] = new vs({ _isIndexed: !0, hash: i[g++] });
        else
          try {
            u[E] = i[g++];
          } catch (S) {
            u[E] = S;
          }
      else
        try {
          u[E] = f[h++];
        } catch (S) {
          u[E] = S;
        }
      if (C.name && u[C.name] == null) {
        const S = u[E];
        S instanceof Error ? Object.defineProperty(u, C.name, {
          enumerable: !0,
          get: () => {
            throw Mc(`property ${JSON.stringify(C.name)}`, S);
          }
        }) : u[C.name] = S;
      }
    });
    for (let C = 0; C < u.length; C++) {
      const E = u[C];
      E instanceof Error && Object.defineProperty(u, C, {
        enumerable: !0,
        get: () => {
          throw Mc(`index ${C}`, E);
        }
      });
    }
    return Object.freeze(u);
  }
  parseTransaction(e) {
    let r = this.getFunction(e.data.substring(0, 10).toLowerCase());
    return r ? new Ud({
      args: this._abiCoder.decode(r.inputs, "0x" + e.data.substring(10)),
      functionFragment: r,
      name: r.name,
      signature: r.format(),
      sighash: this.getSighash(r),
      value: de.from(e.value || "0")
    }) : null;
  }
  parseLog(e) {
    let r = this.getEvent(e.topics[0]);
    return !r || r.anonymous ? null : new Md({
      eventFragment: r,
      name: r.name,
      signature: r.format(),
      topic: this.getEventTopic(r),
      args: this.decodeEventLog(r, e.data, e.topics)
    });
  }
  parseError(e) {
    const r = ce(e);
    let n = this.getError(r.substring(0, 10).toLowerCase());
    return n ? new kh({
      args: this._abiCoder.decode(n.inputs, "0x" + r.substring(10)),
      errorFragment: n,
      name: n.name,
      signature: n.format(),
      sighash: this.getSighash(n)
    }) : null;
  }
  static isInterface(e) {
    return !!(e && e._isInterface);
  }
}
const Dh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ConstructorFragment: sr,
  ErrorFragment: Hr,
  EventFragment: wr,
  Fragment: Ir,
  FunctionFragment: or,
  ParamType: vt,
  FormatTypes: Re,
  AbiCoder: Ad,
  defaultAbiCoder: wd,
  Interface: Oo,
  Indexed: vs,
  checkResultErrors: id,
  LogDescription: Md,
  TransactionDescription: Ud
}, Symbol.toStringTag, { value: "Module" })), Bh = "abstract-provider/5.7.0";
var Fh = globalThis && globalThis.__awaiter || function(t, e, r, n) {
  function a(s) {
    return s instanceof r ? s : new r(function(o) {
      o(s);
    });
  }
  return new (r || (r = Promise))(function(s, o) {
    function i(h) {
      try {
        u(n.next(h));
      } catch (g) {
        o(g);
      }
    }
    function f(h) {
      try {
        u(n.throw(h));
      } catch (g) {
        o(g);
      }
    }
    function u(h) {
      h.done ? s(h.value) : a(h.value).then(i, f);
    }
    u((n = n.apply(t, e || [])).next());
  });
};
const Rh = new V(Bh);
class Rs {
  constructor() {
    Rh.checkAbstract(new.target, Rs), ne(this, "_isProvider", !0);
  }
  getFeeData() {
    return Fh(this, void 0, void 0, function* () {
      const { block: e, gasPrice: r } = yield Er({
        block: this.getBlock("latest"),
        gasPrice: this.getGasPrice().catch((o) => null)
      });
      let n = null, a = null, s = null;
      return e && e.baseFeePerGas && (n = e.baseFeePerGas, s = de.from("1500000000"), a = e.baseFeePerGas.mul(2).add(s)), { lastBaseFeePerGas: n, maxFeePerGas: a, maxPriorityFeePerGas: s, gasPrice: r };
    });
  }
  addListener(e, r) {
    return this.on(e, r);
  }
  removeListener(e, r) {
    return this.off(e, r);
  }
  static isProvider(e) {
    return !!(e && e._isProvider);
  }
}
const _h = "abstract-signer/5.7.0";
var rr = globalThis && globalThis.__awaiter || function(t, e, r, n) {
  function a(s) {
    return s instanceof r ? s : new r(function(o) {
      o(s);
    });
  }
  return new (r || (r = Promise))(function(s, o) {
    function i(h) {
      try {
        u(n.next(h));
      } catch (g) {
        o(g);
      }
    }
    function f(h) {
      try {
        u(n.throw(h));
      } catch (g) {
        o(g);
      }
    }
    function u(h) {
      h.done ? s(h.value) : a(h.value).then(i, f);
    }
    u((n = n.apply(t, e || [])).next());
  });
};
const Vt = new V(_h), Th = [
  "accessList",
  "ccipReadEnabled",
  "chainId",
  "customData",
  "data",
  "from",
  "gasLimit",
  "gasPrice",
  "maxFeePerGas",
  "maxPriorityFeePerGas",
  "nonce",
  "to",
  "type",
  "value"
], Mh = [
  V.errors.INSUFFICIENT_FUNDS,
  V.errors.NONCE_EXPIRED,
  V.errors.REPLACEMENT_UNDERPRICED
];
class La {
  constructor() {
    Vt.checkAbstract(new.target, La), ne(this, "_isSigner", !0);
  }
  getBalance(e) {
    return rr(this, void 0, void 0, function* () {
      return this._checkProvider("getBalance"), yield this.provider.getBalance(this.getAddress(), e);
    });
  }
  getTransactionCount(e) {
    return rr(this, void 0, void 0, function* () {
      return this._checkProvider("getTransactionCount"), yield this.provider.getTransactionCount(this.getAddress(), e);
    });
  }
  estimateGas(e) {
    return rr(this, void 0, void 0, function* () {
      this._checkProvider("estimateGas");
      const r = yield Er(this.checkTransaction(e));
      return yield this.provider.estimateGas(r);
    });
  }
  call(e, r) {
    return rr(this, void 0, void 0, function* () {
      this._checkProvider("call");
      const n = yield Er(this.checkTransaction(e));
      return yield this.provider.call(n, r);
    });
  }
  sendTransaction(e) {
    return rr(this, void 0, void 0, function* () {
      this._checkProvider("sendTransaction");
      const r = yield this.populateTransaction(e), n = yield this.signTransaction(r);
      return yield this.provider.sendTransaction(n);
    });
  }
  getChainId() {
    return rr(this, void 0, void 0, function* () {
      return this._checkProvider("getChainId"), (yield this.provider.getNetwork()).chainId;
    });
  }
  getGasPrice() {
    return rr(this, void 0, void 0, function* () {
      return this._checkProvider("getGasPrice"), yield this.provider.getGasPrice();
    });
  }
  getFeeData() {
    return rr(this, void 0, void 0, function* () {
      return this._checkProvider("getFeeData"), yield this.provider.getFeeData();
    });
  }
  resolveName(e) {
    return rr(this, void 0, void 0, function* () {
      return this._checkProvider("resolveName"), yield this.provider.resolveName(e);
    });
  }
  checkTransaction(e) {
    for (const n in e)
      Th.indexOf(n) === -1 && Vt.throwArgumentError("invalid transaction key: " + n, "transaction", e);
    const r = Ht(e);
    return r.from == null ? r.from = this.getAddress() : r.from = Promise.all([
      Promise.resolve(r.from),
      this.getAddress()
    ]).then((n) => (n[0].toLowerCase() !== n[1].toLowerCase() && Vt.throwArgumentError("from address mismatch", "transaction", e), n[0])), r;
  }
  populateTransaction(e) {
    return rr(this, void 0, void 0, function* () {
      const r = yield Er(this.checkTransaction(e));
      r.to != null && (r.to = Promise.resolve(r.to).then((a) => rr(this, void 0, void 0, function* () {
        if (a == null)
          return null;
        const s = yield this.resolveName(a);
        return s == null && Vt.throwArgumentError("provided ENS name resolves to null", "tx.to", a), s;
      })), r.to.catch((a) => {
      }));
      const n = r.maxFeePerGas != null || r.maxPriorityFeePerGas != null;
      if (r.gasPrice != null && (r.type === 2 || n) ? Vt.throwArgumentError("eip-1559 transaction do not support gasPrice", "transaction", e) : (r.type === 0 || r.type === 1) && n && Vt.throwArgumentError("pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "transaction", e), (r.type === 2 || r.type == null) && r.maxFeePerGas != null && r.maxPriorityFeePerGas != null)
        r.type = 2;
      else if (r.type === 0 || r.type === 1)
        r.gasPrice == null && (r.gasPrice = this.getGasPrice());
      else {
        const a = yield this.getFeeData();
        if (r.type == null)
          if (a.maxFeePerGas != null && a.maxPriorityFeePerGas != null)
            if (r.type = 2, r.gasPrice != null) {
              const s = r.gasPrice;
              delete r.gasPrice, r.maxFeePerGas = s, r.maxPriorityFeePerGas = s;
            } else
              r.maxFeePerGas == null && (r.maxFeePerGas = a.maxFeePerGas), r.maxPriorityFeePerGas == null && (r.maxPriorityFeePerGas = a.maxPriorityFeePerGas);
          else
            a.gasPrice != null ? (n && Vt.throwError("network does not support EIP-1559", V.errors.UNSUPPORTED_OPERATION, {
              operation: "populateTransaction"
            }), r.gasPrice == null && (r.gasPrice = a.gasPrice), r.type = 0) : Vt.throwError("failed to get consistent fee data", V.errors.UNSUPPORTED_OPERATION, {
              operation: "signer.getFeeData"
            });
        else
          r.type === 2 && (r.maxFeePerGas == null && (r.maxFeePerGas = a.maxFeePerGas), r.maxPriorityFeePerGas == null && (r.maxPriorityFeePerGas = a.maxPriorityFeePerGas));
      }
      return r.nonce == null && (r.nonce = this.getTransactionCount("pending")), r.gasLimit == null && (r.gasLimit = this.estimateGas(r).catch((a) => {
        if (Mh.indexOf(a.code) >= 0)
          throw a;
        return Vt.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", V.errors.UNPREDICTABLE_GAS_LIMIT, {
          error: a,
          tx: r
        });
      })), r.chainId == null ? r.chainId = this.getChainId() : r.chainId = Promise.all([
        Promise.resolve(r.chainId),
        this.getChainId()
      ]).then((a) => (a[1] !== 0 && a[0] !== a[1] && Vt.throwArgumentError("chainId address mismatch", "transaction", e), a[0])), yield Er(r);
    });
  }
  _checkProvider(e) {
    this.provider || Vt.throwError("missing provider", V.errors.UNSUPPORTED_OPERATION, {
      operation: e || "_checkProvider"
    });
  }
  static isSigner(e) {
    return !!(e && e._isSigner);
  }
}
class mi extends La {
  constructor(e, r) {
    super(), ne(this, "address", e), ne(this, "provider", r || null);
  }
  getAddress() {
    return Promise.resolve(this.address);
  }
  _fail(e, r) {
    return Promise.resolve().then(() => {
      Vt.throwError(e, V.errors.UNSUPPORTED_OPERATION, { operation: r });
    });
  }
  signMessage(e) {
    return this._fail("VoidSigner cannot sign messages", "signMessage");
  }
  signTransaction(e) {
    return this._fail("VoidSigner cannot sign transactions", "signTransaction");
  }
  _signTypedData(e, r, n) {
    return this._fail("VoidSigner cannot sign typed data", "signTypedData");
  }
  connect(e) {
    return new mi(this.address, e);
  }
}
var Bt = {}, Be = {}, ja = Pd;
function Pd(t, e) {
  if (!t)
    throw new Error(e || "Assertion failed");
}
Pd.equal = function(e, r, n) {
  if (e != r)
    throw new Error(n || "Assertion failed: " + e + " != " + r);
};
var No = { exports: {} };
typeof Object.create == "function" ? No.exports = function(e, r) {
  r && (e.super_ = r, e.prototype = Object.create(r.prototype, {
    constructor: {
      value: e,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }));
} : No.exports = function(e, r) {
  if (r) {
    e.super_ = r;
    var n = function() {
    };
    n.prototype = r.prototype, e.prototype = new n(), e.prototype.constructor = e;
  }
};
var Uh = ja, Ph = No.exports;
Be.inherits = Ph;
function Oh(t, e) {
  return (t.charCodeAt(e) & 64512) !== 55296 || e < 0 || e + 1 >= t.length ? !1 : (t.charCodeAt(e + 1) & 64512) === 56320;
}
function Nh(t, e) {
  if (Array.isArray(t))
    return t.slice();
  if (!t)
    return [];
  var r = [];
  if (typeof t == "string")
    if (e) {
      if (e === "hex")
        for (t = t.replace(/[^a-z0-9]+/ig, ""), t.length % 2 !== 0 && (t = "0" + t), a = 0; a < t.length; a += 2)
          r.push(parseInt(t[a] + t[a + 1], 16));
    } else
      for (var n = 0, a = 0; a < t.length; a++) {
        var s = t.charCodeAt(a);
        s < 128 ? r[n++] = s : s < 2048 ? (r[n++] = s >> 6 | 192, r[n++] = s & 63 | 128) : Oh(t, a) ? (s = 65536 + ((s & 1023) << 10) + (t.charCodeAt(++a) & 1023), r[n++] = s >> 18 | 240, r[n++] = s >> 12 & 63 | 128, r[n++] = s >> 6 & 63 | 128, r[n++] = s & 63 | 128) : (r[n++] = s >> 12 | 224, r[n++] = s >> 6 & 63 | 128, r[n++] = s & 63 | 128);
      }
  else
    for (a = 0; a < t.length; a++)
      r[a] = t[a] | 0;
  return r;
}
Be.toArray = Nh;
function Lh(t) {
  for (var e = "", r = 0; r < t.length; r++)
    e += Nd(t[r].toString(16));
  return e;
}
Be.toHex = Lh;
function Od(t) {
  var e = t >>> 24 | t >>> 8 & 65280 | t << 8 & 16711680 | (t & 255) << 24;
  return e >>> 0;
}
Be.htonl = Od;
function jh(t, e) {
  for (var r = "", n = 0; n < t.length; n++) {
    var a = t[n];
    e === "little" && (a = Od(a)), r += Ld(a.toString(16));
  }
  return r;
}
Be.toHex32 = jh;
function Nd(t) {
  return t.length === 1 ? "0" + t : t;
}
Be.zero2 = Nd;
function Ld(t) {
  return t.length === 7 ? "0" + t : t.length === 6 ? "00" + t : t.length === 5 ? "000" + t : t.length === 4 ? "0000" + t : t.length === 3 ? "00000" + t : t.length === 2 ? "000000" + t : t.length === 1 ? "0000000" + t : t;
}
Be.zero8 = Ld;
function Wh(t, e, r, n) {
  var a = r - e;
  Uh(a % 4 === 0);
  for (var s = new Array(a / 4), o = 0, i = e; o < s.length; o++, i += 4) {
    var f;
    n === "big" ? f = t[i] << 24 | t[i + 1] << 16 | t[i + 2] << 8 | t[i + 3] : f = t[i + 3] << 24 | t[i + 2] << 16 | t[i + 1] << 8 | t[i], s[o] = f >>> 0;
  }
  return s;
}
Be.join32 = Wh;
function Hh(t, e) {
  for (var r = new Array(t.length * 4), n = 0, a = 0; n < t.length; n++, a += 4) {
    var s = t[n];
    e === "big" ? (r[a] = s >>> 24, r[a + 1] = s >>> 16 & 255, r[a + 2] = s >>> 8 & 255, r[a + 3] = s & 255) : (r[a + 3] = s >>> 24, r[a + 2] = s >>> 16 & 255, r[a + 1] = s >>> 8 & 255, r[a] = s & 255);
  }
  return r;
}
Be.split32 = Hh;
function zh(t, e) {
  return t >>> e | t << 32 - e;
}
Be.rotr32 = zh;
function $h(t, e) {
  return t << e | t >>> 32 - e;
}
Be.rotl32 = $h;
function Vh(t, e) {
  return t + e >>> 0;
}
Be.sum32 = Vh;
function Gh(t, e, r) {
  return t + e + r >>> 0;
}
Be.sum32_3 = Gh;
function Kh(t, e, r, n) {
  return t + e + r + n >>> 0;
}
Be.sum32_4 = Kh;
function qh(t, e, r, n, a) {
  return t + e + r + n + a >>> 0;
}
Be.sum32_5 = qh;
function Yh(t, e, r, n) {
  var a = t[e], s = t[e + 1], o = n + s >>> 0, i = (o < n ? 1 : 0) + r + a;
  t[e] = i >>> 0, t[e + 1] = o;
}
Be.sum64 = Yh;
function Xh(t, e, r, n) {
  var a = e + n >>> 0, s = (a < e ? 1 : 0) + t + r;
  return s >>> 0;
}
Be.sum64_hi = Xh;
function Jh(t, e, r, n) {
  var a = e + n;
  return a >>> 0;
}
Be.sum64_lo = Jh;
function Zh(t, e, r, n, a, s, o, i) {
  var f = 0, u = e;
  u = u + n >>> 0, f += u < e ? 1 : 0, u = u + s >>> 0, f += u < s ? 1 : 0, u = u + i >>> 0, f += u < i ? 1 : 0;
  var h = t + r + a + o + f;
  return h >>> 0;
}
Be.sum64_4_hi = Zh;
function Qh(t, e, r, n, a, s, o, i) {
  var f = e + n + s + i;
  return f >>> 0;
}
Be.sum64_4_lo = Qh;
function e2(t, e, r, n, a, s, o, i, f, u) {
  var h = 0, g = e;
  g = g + n >>> 0, h += g < e ? 1 : 0, g = g + s >>> 0, h += g < s ? 1 : 0, g = g + i >>> 0, h += g < i ? 1 : 0, g = g + u >>> 0, h += g < u ? 1 : 0;
  var C = t + r + a + o + f + h;
  return C >>> 0;
}
Be.sum64_5_hi = e2;
function t2(t, e, r, n, a, s, o, i, f, u) {
  var h = e + n + s + i + u;
  return h >>> 0;
}
Be.sum64_5_lo = t2;
function r2(t, e, r) {
  var n = e << 32 - r | t >>> r;
  return n >>> 0;
}
Be.rotr64_hi = r2;
function n2(t, e, r) {
  var n = t << 32 - r | e >>> r;
  return n >>> 0;
}
Be.rotr64_lo = n2;
function a2(t, e, r) {
  return t >>> r;
}
Be.shr64_hi = a2;
function s2(t, e, r) {
  var n = t << 32 - r | e >>> r;
  return n >>> 0;
}
Be.shr64_lo = s2;
var ra = {}, Uc = Be, o2 = ja;
function _s() {
  this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
}
ra.BlockHash = _s;
_s.prototype.update = function(e, r) {
  if (e = Uc.toArray(e, r), this.pending ? this.pending = this.pending.concat(e) : this.pending = e, this.pendingTotal += e.length, this.pending.length >= this._delta8) {
    e = this.pending;
    var n = e.length % this._delta8;
    this.pending = e.slice(e.length - n, e.length), this.pending.length === 0 && (this.pending = null), e = Uc.join32(e, 0, e.length - n, this.endian);
    for (var a = 0; a < e.length; a += this._delta32)
      this._update(e, a, a + this._delta32);
  }
  return this;
};
_s.prototype.digest = function(e) {
  return this.update(this._pad()), o2(this.pending === null), this._digest(e);
};
_s.prototype._pad = function() {
  var e = this.pendingTotal, r = this._delta8, n = r - (e + this.padLength) % r, a = new Array(n + this.padLength);
  a[0] = 128;
  for (var s = 1; s < n; s++)
    a[s] = 0;
  if (e <<= 3, this.endian === "big") {
    for (var o = 8; o < this.padLength; o++)
      a[s++] = 0;
    a[s++] = 0, a[s++] = 0, a[s++] = 0, a[s++] = 0, a[s++] = e >>> 24 & 255, a[s++] = e >>> 16 & 255, a[s++] = e >>> 8 & 255, a[s++] = e & 255;
  } else
    for (a[s++] = e & 255, a[s++] = e >>> 8 & 255, a[s++] = e >>> 16 & 255, a[s++] = e >>> 24 & 255, a[s++] = 0, a[s++] = 0, a[s++] = 0, a[s++] = 0, o = 8; o < this.padLength; o++)
      a[s++] = 0;
  return a;
};
var na = {}, Or = {}, i2 = Be, Dr = i2.rotr32;
function c2(t, e, r, n) {
  if (t === 0)
    return jd(e, r, n);
  if (t === 1 || t === 3)
    return Hd(e, r, n);
  if (t === 2)
    return Wd(e, r, n);
}
Or.ft_1 = c2;
function jd(t, e, r) {
  return t & e ^ ~t & r;
}
Or.ch32 = jd;
function Wd(t, e, r) {
  return t & e ^ t & r ^ e & r;
}
Or.maj32 = Wd;
function Hd(t, e, r) {
  return t ^ e ^ r;
}
Or.p32 = Hd;
function d2(t) {
  return Dr(t, 2) ^ Dr(t, 13) ^ Dr(t, 22);
}
Or.s0_256 = d2;
function f2(t) {
  return Dr(t, 6) ^ Dr(t, 11) ^ Dr(t, 25);
}
Or.s1_256 = f2;
function l2(t) {
  return Dr(t, 7) ^ Dr(t, 18) ^ t >>> 3;
}
Or.g0_256 = l2;
function u2(t) {
  return Dr(t, 17) ^ Dr(t, 19) ^ t >>> 10;
}
Or.g1_256 = u2;
var Vn = Be, h2 = ra, m2 = Or, uo = Vn.rotl32, oa = Vn.sum32, p2 = Vn.sum32_5, b2 = m2.ft_1, zd = h2.BlockHash, g2 = [
  1518500249,
  1859775393,
  2400959708,
  3395469782
];
function Tr() {
  if (!(this instanceof Tr))
    return new Tr();
  zd.call(this), this.h = [
    1732584193,
    4023233417,
    2562383102,
    271733878,
    3285377520
  ], this.W = new Array(80);
}
Vn.inherits(Tr, zd);
var x2 = Tr;
Tr.blockSize = 512;
Tr.outSize = 160;
Tr.hmacStrength = 80;
Tr.padLength = 64;
Tr.prototype._update = function(e, r) {
  for (var n = this.W, a = 0; a < 16; a++)
    n[a] = e[r + a];
  for (; a < n.length; a++)
    n[a] = uo(n[a - 3] ^ n[a - 8] ^ n[a - 14] ^ n[a - 16], 1);
  var s = this.h[0], o = this.h[1], i = this.h[2], f = this.h[3], u = this.h[4];
  for (a = 0; a < n.length; a++) {
    var h = ~~(a / 20), g = p2(uo(s, 5), b2(h, o, i, f), u, n[a], g2[h]);
    u = f, f = i, i = uo(o, 30), o = s, s = g;
  }
  this.h[0] = oa(this.h[0], s), this.h[1] = oa(this.h[1], o), this.h[2] = oa(this.h[2], i), this.h[3] = oa(this.h[3], f), this.h[4] = oa(this.h[4], u);
};
Tr.prototype._digest = function(e) {
  return e === "hex" ? Vn.toHex32(this.h, "big") : Vn.split32(this.h, "big");
};
var Gn = Be, y2 = ra, aa = Or, v2 = ja, nr = Gn.sum32, A2 = Gn.sum32_4, w2 = Gn.sum32_5, C2 = aa.ch32, E2 = aa.maj32, I2 = aa.s0_256, k2 = aa.s1_256, S2 = aa.g0_256, D2 = aa.g1_256, $d = y2.BlockHash, B2 = [
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
];
function Mr() {
  if (!(this instanceof Mr))
    return new Mr();
  $d.call(this), this.h = [
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ], this.k = B2, this.W = new Array(64);
}
Gn.inherits(Mr, $d);
var Vd = Mr;
Mr.blockSize = 512;
Mr.outSize = 256;
Mr.hmacStrength = 192;
Mr.padLength = 64;
Mr.prototype._update = function(e, r) {
  for (var n = this.W, a = 0; a < 16; a++)
    n[a] = e[r + a];
  for (; a < n.length; a++)
    n[a] = A2(D2(n[a - 2]), n[a - 7], S2(n[a - 15]), n[a - 16]);
  var s = this.h[0], o = this.h[1], i = this.h[2], f = this.h[3], u = this.h[4], h = this.h[5], g = this.h[6], C = this.h[7];
  for (v2(this.k.length === n.length), a = 0; a < n.length; a++) {
    var E = w2(C, k2(u), C2(u, h, g), this.k[a], n[a]), S = nr(I2(s), E2(s, o, i));
    C = g, g = h, h = u, u = nr(f, E), f = i, i = o, o = s, s = nr(E, S);
  }
  this.h[0] = nr(this.h[0], s), this.h[1] = nr(this.h[1], o), this.h[2] = nr(this.h[2], i), this.h[3] = nr(this.h[3], f), this.h[4] = nr(this.h[4], u), this.h[5] = nr(this.h[5], h), this.h[6] = nr(this.h[6], g), this.h[7] = nr(this.h[7], C);
};
Mr.prototype._digest = function(e) {
  return e === "hex" ? Gn.toHex32(this.h, "big") : Gn.split32(this.h, "big");
};
var Lo = Be, Gd = Vd;
function Gr() {
  if (!(this instanceof Gr))
    return new Gr();
  Gd.call(this), this.h = [
    3238371032,
    914150663,
    812702999,
    4144912697,
    4290775857,
    1750603025,
    1694076839,
    3204075428
  ];
}
Lo.inherits(Gr, Gd);
var F2 = Gr;
Gr.blockSize = 512;
Gr.outSize = 224;
Gr.hmacStrength = 192;
Gr.padLength = 64;
Gr.prototype._digest = function(e) {
  return e === "hex" ? Lo.toHex32(this.h.slice(0, 7), "big") : Lo.split32(this.h.slice(0, 7), "big");
};
var Ot = Be, R2 = ra, _2 = ja, Br = Ot.rotr64_hi, Fr = Ot.rotr64_lo, Kd = Ot.shr64_hi, qd = Ot.shr64_lo, Yr = Ot.sum64, ho = Ot.sum64_hi, mo = Ot.sum64_lo, T2 = Ot.sum64_4_hi, M2 = Ot.sum64_4_lo, U2 = Ot.sum64_5_hi, P2 = Ot.sum64_5_lo, Yd = R2.BlockHash, O2 = [
  1116352408,
  3609767458,
  1899447441,
  602891725,
  3049323471,
  3964484399,
  3921009573,
  2173295548,
  961987163,
  4081628472,
  1508970993,
  3053834265,
  2453635748,
  2937671579,
  2870763221,
  3664609560,
  3624381080,
  2734883394,
  310598401,
  1164996542,
  607225278,
  1323610764,
  1426881987,
  3590304994,
  1925078388,
  4068182383,
  2162078206,
  991336113,
  2614888103,
  633803317,
  3248222580,
  3479774868,
  3835390401,
  2666613458,
  4022224774,
  944711139,
  264347078,
  2341262773,
  604807628,
  2007800933,
  770255983,
  1495990901,
  1249150122,
  1856431235,
  1555081692,
  3175218132,
  1996064986,
  2198950837,
  2554220882,
  3999719339,
  2821834349,
  766784016,
  2952996808,
  2566594879,
  3210313671,
  3203337956,
  3336571891,
  1034457026,
  3584528711,
  2466948901,
  113926993,
  3758326383,
  338241895,
  168717936,
  666307205,
  1188179964,
  773529912,
  1546045734,
  1294757372,
  1522805485,
  1396182291,
  2643833823,
  1695183700,
  2343527390,
  1986661051,
  1014477480,
  2177026350,
  1206759142,
  2456956037,
  344077627,
  2730485921,
  1290863460,
  2820302411,
  3158454273,
  3259730800,
  3505952657,
  3345764771,
  106217008,
  3516065817,
  3606008344,
  3600352804,
  1432725776,
  4094571909,
  1467031594,
  275423344,
  851169720,
  430227734,
  3100823752,
  506948616,
  1363258195,
  659060556,
  3750685593,
  883997877,
  3785050280,
  958139571,
  3318307427,
  1322822218,
  3812723403,
  1537002063,
  2003034995,
  1747873779,
  3602036899,
  1955562222,
  1575990012,
  2024104815,
  1125592928,
  2227730452,
  2716904306,
  2361852424,
  442776044,
  2428436474,
  593698344,
  2756734187,
  3733110249,
  3204031479,
  2999351573,
  3329325298,
  3815920427,
  3391569614,
  3928383900,
  3515267271,
  566280711,
  3940187606,
  3454069534,
  4118630271,
  4000239992,
  116418474,
  1914138554,
  174292421,
  2731055270,
  289380356,
  3203993006,
  460393269,
  320620315,
  685471733,
  587496836,
  852142971,
  1086792851,
  1017036298,
  365543100,
  1126000580,
  2618297676,
  1288033470,
  3409855158,
  1501505948,
  4234509866,
  1607167915,
  987167468,
  1816402316,
  1246189591
];
function ur() {
  if (!(this instanceof ur))
    return new ur();
  Yd.call(this), this.h = [
    1779033703,
    4089235720,
    3144134277,
    2227873595,
    1013904242,
    4271175723,
    2773480762,
    1595750129,
    1359893119,
    2917565137,
    2600822924,
    725511199,
    528734635,
    4215389547,
    1541459225,
    327033209
  ], this.k = O2, this.W = new Array(160);
}
Ot.inherits(ur, Yd);
var Xd = ur;
ur.blockSize = 1024;
ur.outSize = 512;
ur.hmacStrength = 192;
ur.padLength = 128;
ur.prototype._prepareBlock = function(e, r) {
  for (var n = this.W, a = 0; a < 32; a++)
    n[a] = e[r + a];
  for (; a < n.length; a += 2) {
    var s = q2(n[a - 4], n[a - 3]), o = Y2(n[a - 4], n[a - 3]), i = n[a - 14], f = n[a - 13], u = G2(n[a - 30], n[a - 29]), h = K2(n[a - 30], n[a - 29]), g = n[a - 32], C = n[a - 31];
    n[a] = T2(
      s,
      o,
      i,
      f,
      u,
      h,
      g,
      C
    ), n[a + 1] = M2(
      s,
      o,
      i,
      f,
      u,
      h,
      g,
      C
    );
  }
};
ur.prototype._update = function(e, r) {
  this._prepareBlock(e, r);
  var n = this.W, a = this.h[0], s = this.h[1], o = this.h[2], i = this.h[3], f = this.h[4], u = this.h[5], h = this.h[6], g = this.h[7], C = this.h[8], E = this.h[9], S = this.h[10], D = this.h[11], x = this.h[12], F = this.h[13], M = this.h[14], j = this.h[15];
  _2(this.k.length === n.length);
  for (var U = 0; U < n.length; U += 2) {
    var B = M, W = j, G = $2(C, E), K = V2(C, E), te = N2(C, E, S, D, x), se = L2(C, E, S, D, x, F), q = this.k[U], oe = this.k[U + 1], I = n[U], d = n[U + 1], m = U2(
      B,
      W,
      G,
      K,
      te,
      se,
      q,
      oe,
      I,
      d
    ), y = P2(
      B,
      W,
      G,
      K,
      te,
      se,
      q,
      oe,
      I,
      d
    );
    B = H2(a, s), W = z2(a, s), G = j2(a, s, o, i, f), K = W2(a, s, o, i, f, u);
    var w = ho(B, W, G, K), A = mo(B, W, G, K);
    M = x, j = F, x = S, F = D, S = C, D = E, C = ho(h, g, m, y), E = mo(g, g, m, y), h = f, g = u, f = o, u = i, o = a, i = s, a = ho(m, y, w, A), s = mo(m, y, w, A);
  }
  Yr(this.h, 0, a, s), Yr(this.h, 2, o, i), Yr(this.h, 4, f, u), Yr(this.h, 6, h, g), Yr(this.h, 8, C, E), Yr(this.h, 10, S, D), Yr(this.h, 12, x, F), Yr(this.h, 14, M, j);
};
ur.prototype._digest = function(e) {
  return e === "hex" ? Ot.toHex32(this.h, "big") : Ot.split32(this.h, "big");
};
function N2(t, e, r, n, a) {
  var s = t & r ^ ~t & a;
  return s < 0 && (s += 4294967296), s;
}
function L2(t, e, r, n, a, s) {
  var o = e & n ^ ~e & s;
  return o < 0 && (o += 4294967296), o;
}
function j2(t, e, r, n, a) {
  var s = t & r ^ t & a ^ r & a;
  return s < 0 && (s += 4294967296), s;
}
function W2(t, e, r, n, a, s) {
  var o = e & n ^ e & s ^ n & s;
  return o < 0 && (o += 4294967296), o;
}
function H2(t, e) {
  var r = Br(t, e, 28), n = Br(e, t, 2), a = Br(e, t, 7), s = r ^ n ^ a;
  return s < 0 && (s += 4294967296), s;
}
function z2(t, e) {
  var r = Fr(t, e, 28), n = Fr(e, t, 2), a = Fr(e, t, 7), s = r ^ n ^ a;
  return s < 0 && (s += 4294967296), s;
}
function $2(t, e) {
  var r = Br(t, e, 14), n = Br(t, e, 18), a = Br(e, t, 9), s = r ^ n ^ a;
  return s < 0 && (s += 4294967296), s;
}
function V2(t, e) {
  var r = Fr(t, e, 14), n = Fr(t, e, 18), a = Fr(e, t, 9), s = r ^ n ^ a;
  return s < 0 && (s += 4294967296), s;
}
function G2(t, e) {
  var r = Br(t, e, 1), n = Br(t, e, 8), a = Kd(t, e, 7), s = r ^ n ^ a;
  return s < 0 && (s += 4294967296), s;
}
function K2(t, e) {
  var r = Fr(t, e, 1), n = Fr(t, e, 8), a = qd(t, e, 7), s = r ^ n ^ a;
  return s < 0 && (s += 4294967296), s;
}
function q2(t, e) {
  var r = Br(t, e, 19), n = Br(e, t, 29), a = Kd(t, e, 6), s = r ^ n ^ a;
  return s < 0 && (s += 4294967296), s;
}
function Y2(t, e) {
  var r = Fr(t, e, 19), n = Fr(e, t, 29), a = qd(t, e, 6), s = r ^ n ^ a;
  return s < 0 && (s += 4294967296), s;
}
var jo = Be, Jd = Xd;
function Kr() {
  if (!(this instanceof Kr))
    return new Kr();
  Jd.call(this), this.h = [
    3418070365,
    3238371032,
    1654270250,
    914150663,
    2438529370,
    812702999,
    355462360,
    4144912697,
    1731405415,
    4290775857,
    2394180231,
    1750603025,
    3675008525,
    1694076839,
    1203062813,
    3204075428
  ];
}
jo.inherits(Kr, Jd);
var X2 = Kr;
Kr.blockSize = 1024;
Kr.outSize = 384;
Kr.hmacStrength = 192;
Kr.padLength = 128;
Kr.prototype._digest = function(e) {
  return e === "hex" ? jo.toHex32(this.h.slice(0, 12), "big") : jo.split32(this.h.slice(0, 12), "big");
};
na.sha1 = x2;
na.sha224 = F2;
na.sha256 = Vd;
na.sha384 = X2;
na.sha512 = Xd;
var Zd = {}, wn = Be, J2 = ra, Za = wn.rotl32, Pc = wn.sum32, ia = wn.sum32_3, Oc = wn.sum32_4, Qd = J2.BlockHash;
function Ur() {
  if (!(this instanceof Ur))
    return new Ur();
  Qd.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little";
}
wn.inherits(Ur, Qd);
Zd.ripemd160 = Ur;
Ur.blockSize = 512;
Ur.outSize = 160;
Ur.hmacStrength = 192;
Ur.padLength = 64;
Ur.prototype._update = function(e, r) {
  for (var n = this.h[0], a = this.h[1], s = this.h[2], o = this.h[3], i = this.h[4], f = n, u = a, h = s, g = o, C = i, E = 0; E < 80; E++) {
    var S = Pc(
      Za(
        Oc(n, Nc(E, a, s, o), e[em[E] + r], Z2(E)),
        rm[E]
      ),
      i
    );
    n = i, i = o, o = Za(s, 10), s = a, a = S, S = Pc(
      Za(
        Oc(f, Nc(79 - E, u, h, g), e[tm[E] + r], Q2(E)),
        nm[E]
      ),
      C
    ), f = C, C = g, g = Za(h, 10), h = u, u = S;
  }
  S = ia(this.h[1], s, g), this.h[1] = ia(this.h[2], o, C), this.h[2] = ia(this.h[3], i, f), this.h[3] = ia(this.h[4], n, u), this.h[4] = ia(this.h[0], a, h), this.h[0] = S;
};
Ur.prototype._digest = function(e) {
  return e === "hex" ? wn.toHex32(this.h, "little") : wn.split32(this.h, "little");
};
function Nc(t, e, r, n) {
  return t <= 15 ? e ^ r ^ n : t <= 31 ? e & r | ~e & n : t <= 47 ? (e | ~r) ^ n : t <= 63 ? e & n | r & ~n : e ^ (r | ~n);
}
function Z2(t) {
  return t <= 15 ? 0 : t <= 31 ? 1518500249 : t <= 47 ? 1859775393 : t <= 63 ? 2400959708 : 2840853838;
}
function Q2(t) {
  return t <= 15 ? 1352829926 : t <= 31 ? 1548603684 : t <= 47 ? 1836072691 : t <= 63 ? 2053994217 : 0;
}
var em = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  7,
  4,
  13,
  1,
  10,
  6,
  15,
  3,
  12,
  0,
  9,
  5,
  2,
  14,
  11,
  8,
  3,
  10,
  14,
  4,
  9,
  15,
  8,
  1,
  2,
  7,
  0,
  6,
  13,
  11,
  5,
  12,
  1,
  9,
  11,
  10,
  0,
  8,
  12,
  4,
  13,
  3,
  7,
  15,
  14,
  5,
  6,
  2,
  4,
  0,
  5,
  9,
  7,
  12,
  2,
  10,
  14,
  1,
  3,
  8,
  11,
  6,
  15,
  13
], tm = [
  5,
  14,
  7,
  0,
  9,
  2,
  11,
  4,
  13,
  6,
  15,
  8,
  1,
  10,
  3,
  12,
  6,
  11,
  3,
  7,
  0,
  13,
  5,
  10,
  14,
  15,
  8,
  12,
  4,
  9,
  1,
  2,
  15,
  5,
  1,
  3,
  7,
  14,
  6,
  9,
  11,
  8,
  12,
  2,
  10,
  0,
  4,
  13,
  8,
  6,
  4,
  1,
  3,
  11,
  15,
  0,
  5,
  12,
  2,
  13,
  9,
  7,
  10,
  14,
  12,
  15,
  10,
  4,
  1,
  5,
  8,
  7,
  6,
  2,
  13,
  14,
  0,
  3,
  9,
  11
], rm = [
  11,
  14,
  15,
  12,
  5,
  8,
  7,
  9,
  11,
  13,
  14,
  15,
  6,
  7,
  9,
  8,
  7,
  6,
  8,
  13,
  11,
  9,
  7,
  15,
  7,
  12,
  15,
  9,
  11,
  7,
  13,
  12,
  11,
  13,
  6,
  7,
  14,
  9,
  13,
  15,
  14,
  8,
  13,
  6,
  5,
  12,
  7,
  5,
  11,
  12,
  14,
  15,
  14,
  15,
  9,
  8,
  9,
  14,
  5,
  6,
  8,
  6,
  5,
  12,
  9,
  15,
  5,
  11,
  6,
  8,
  13,
  12,
  5,
  12,
  13,
  14,
  11,
  8,
  5,
  6
], nm = [
  8,
  9,
  9,
  11,
  13,
  15,
  15,
  5,
  7,
  7,
  8,
  11,
  14,
  14,
  12,
  6,
  9,
  13,
  15,
  7,
  12,
  8,
  9,
  11,
  7,
  7,
  12,
  7,
  6,
  15,
  13,
  11,
  9,
  7,
  15,
  11,
  8,
  6,
  6,
  14,
  12,
  13,
  5,
  14,
  13,
  13,
  7,
  5,
  15,
  5,
  8,
  11,
  14,
  14,
  6,
  14,
  6,
  9,
  12,
  9,
  12,
  5,
  15,
  8,
  8,
  5,
  12,
  9,
  12,
  5,
  14,
  6,
  8,
  13,
  6,
  5,
  15,
  13,
  11,
  11
], am = Be, sm = ja;
function Kn(t, e, r) {
  if (!(this instanceof Kn))
    return new Kn(t, e, r);
  this.Hash = t, this.blockSize = t.blockSize / 8, this.outSize = t.outSize / 8, this.inner = null, this.outer = null, this._init(am.toArray(e, r));
}
var om = Kn;
Kn.prototype._init = function(e) {
  e.length > this.blockSize && (e = new this.Hash().update(e).digest()), sm(e.length <= this.blockSize);
  for (var r = e.length; r < this.blockSize; r++)
    e.push(0);
  for (r = 0; r < e.length; r++)
    e[r] ^= 54;
  for (this.inner = new this.Hash().update(e), r = 0; r < e.length; r++)
    e[r] ^= 106;
  this.outer = new this.Hash().update(e);
};
Kn.prototype.update = function(e, r) {
  return this.inner.update(e, r), this;
};
Kn.prototype.digest = function(e) {
  return this.outer.update(this.inner.digest()), this.outer.digest(e);
};
(function(t) {
  var e = t;
  e.utils = Be, e.common = ra, e.sha = na, e.ripemd = Zd, e.hmac = om, e.sha1 = e.sha.sha1, e.sha256 = e.sha.sha256, e.sha224 = e.sha.sha224, e.sha384 = e.sha.sha384, e.sha512 = e.sha.sha512, e.ripemd160 = e.ripemd.ripemd160;
})(Bt);
function sa(t, e, r) {
  return r = {
    path: e,
    exports: {},
    require: function(n, a) {
      return im(n, a == null ? r.path : a);
    }
  }, t(r, r.exports), r.exports;
}
function im() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var pi = ef;
function ef(t, e) {
  if (!t)
    throw new Error(e || "Assertion failed");
}
ef.equal = function(e, r, n) {
  if (e != r)
    throw new Error(n || "Assertion failed: " + e + " != " + r);
};
var ir = sa(function(t, e) {
  var r = e;
  function n(o, i) {
    if (Array.isArray(o))
      return o.slice();
    if (!o)
      return [];
    var f = [];
    if (typeof o != "string") {
      for (var u = 0; u < o.length; u++)
        f[u] = o[u] | 0;
      return f;
    }
    if (i === "hex") {
      o = o.replace(/[^a-z0-9]+/ig, ""), o.length % 2 !== 0 && (o = "0" + o);
      for (var u = 0; u < o.length; u += 2)
        f.push(parseInt(o[u] + o[u + 1], 16));
    } else
      for (var u = 0; u < o.length; u++) {
        var h = o.charCodeAt(u), g = h >> 8, C = h & 255;
        g ? f.push(g, C) : f.push(C);
      }
    return f;
  }
  r.toArray = n;
  function a(o) {
    return o.length === 1 ? "0" + o : o;
  }
  r.zero2 = a;
  function s(o) {
    for (var i = "", f = 0; f < o.length; f++)
      i += a(o[f].toString(16));
    return i;
  }
  r.toHex = s, r.encode = function(i, f) {
    return f === "hex" ? s(i) : i;
  };
}), zt = sa(function(t, e) {
  var r = e;
  r.assert = pi, r.toArray = ir.toArray, r.zero2 = ir.zero2, r.toHex = ir.toHex, r.encode = ir.encode;
  function n(f, u, h) {
    var g = new Array(Math.max(f.bitLength(), h) + 1);
    g.fill(0);
    for (var C = 1 << u + 1, E = f.clone(), S = 0; S < g.length; S++) {
      var D, x = E.andln(C - 1);
      E.isOdd() ? (x > (C >> 1) - 1 ? D = (C >> 1) - x : D = x, E.isubn(D)) : D = 0, g[S] = D, E.iushrn(1);
    }
    return g;
  }
  r.getNAF = n;
  function a(f, u) {
    var h = [
      [],
      []
    ];
    f = f.clone(), u = u.clone();
    for (var g = 0, C = 0, E; f.cmpn(-g) > 0 || u.cmpn(-C) > 0; ) {
      var S = f.andln(3) + g & 3, D = u.andln(3) + C & 3;
      S === 3 && (S = -1), D === 3 && (D = -1);
      var x;
      (S & 1) === 0 ? x = 0 : (E = f.andln(7) + g & 7, (E === 3 || E === 5) && D === 2 ? x = -S : x = S), h[0].push(x);
      var F;
      (D & 1) === 0 ? F = 0 : (E = u.andln(7) + C & 7, (E === 3 || E === 5) && S === 2 ? F = -D : F = D), h[1].push(F), 2 * g === x + 1 && (g = 1 - g), 2 * C === F + 1 && (C = 1 - C), f.iushrn(1), u.iushrn(1);
    }
    return h;
  }
  r.getJSF = a;
  function s(f, u, h) {
    var g = "_" + u;
    f.prototype[u] = function() {
      return this[g] !== void 0 ? this[g] : this[g] = h.call(this);
    };
  }
  r.cachedProperty = s;
  function o(f) {
    return typeof f == "string" ? r.toArray(f, "hex") : f;
  }
  r.parseBytes = o;
  function i(f) {
    return new we(f, "hex", "le");
  }
  r.intFromLE = i;
}), As = zt.getNAF, cm = zt.getJSF, ws = zt.assert;
function fn(t, e) {
  this.type = t, this.p = new we(e.p, 16), this.red = e.prime ? we.red(e.prime) : we.mont(this.p), this.zero = new we(0).toRed(this.red), this.one = new we(1).toRed(this.red), this.two = new we(2).toRed(this.red), this.n = e.n && new we(e.n, 16), this.g = e.g && this.pointFromJSON(e.g, e.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
  var r = this.n && this.p.div(this.n);
  !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red));
}
var Bn = fn;
fn.prototype.point = function() {
  throw new Error("Not implemented");
};
fn.prototype.validate = function() {
  throw new Error("Not implemented");
};
fn.prototype._fixedNafMul = function(e, r) {
  ws(e.precomputed);
  var n = e._getDoubles(), a = As(r, 1, this._bitLength), s = (1 << n.step + 1) - (n.step % 2 === 0 ? 2 : 1);
  s /= 3;
  var o = [], i, f;
  for (i = 0; i < a.length; i += n.step) {
    f = 0;
    for (var u = i + n.step - 1; u >= i; u--)
      f = (f << 1) + a[u];
    o.push(f);
  }
  for (var h = this.jpoint(null, null, null), g = this.jpoint(null, null, null), C = s; C > 0; C--) {
    for (i = 0; i < o.length; i++)
      f = o[i], f === C ? g = g.mixedAdd(n.points[i]) : f === -C && (g = g.mixedAdd(n.points[i].neg()));
    h = h.add(g);
  }
  return h.toP();
};
fn.prototype._wnafMul = function(e, r) {
  var n = 4, a = e._getNAFPoints(n);
  n = a.wnd;
  for (var s = a.points, o = As(r, n, this._bitLength), i = this.jpoint(null, null, null), f = o.length - 1; f >= 0; f--) {
    for (var u = 0; f >= 0 && o[f] === 0; f--)
      u++;
    if (f >= 0 && u++, i = i.dblp(u), f < 0)
      break;
    var h = o[f];
    ws(h !== 0), e.type === "affine" ? h > 0 ? i = i.mixedAdd(s[h - 1 >> 1]) : i = i.mixedAdd(s[-h - 1 >> 1].neg()) : h > 0 ? i = i.add(s[h - 1 >> 1]) : i = i.add(s[-h - 1 >> 1].neg());
  }
  return e.type === "affine" ? i.toP() : i;
};
fn.prototype._wnafMulAdd = function(e, r, n, a, s) {
  var o = this._wnafT1, i = this._wnafT2, f = this._wnafT3, u = 0, h, g, C;
  for (h = 0; h < a; h++) {
    C = r[h];
    var E = C._getNAFPoints(e);
    o[h] = E.wnd, i[h] = E.points;
  }
  for (h = a - 1; h >= 1; h -= 2) {
    var S = h - 1, D = h;
    if (o[S] !== 1 || o[D] !== 1) {
      f[S] = As(n[S], o[S], this._bitLength), f[D] = As(n[D], o[D], this._bitLength), u = Math.max(f[S].length, u), u = Math.max(f[D].length, u);
      continue;
    }
    var x = [
      r[S],
      null,
      null,
      r[D]
    ];
    r[S].y.cmp(r[D].y) === 0 ? (x[1] = r[S].add(r[D]), x[2] = r[S].toJ().mixedAdd(r[D].neg())) : r[S].y.cmp(r[D].y.redNeg()) === 0 ? (x[1] = r[S].toJ().mixedAdd(r[D]), x[2] = r[S].add(r[D].neg())) : (x[1] = r[S].toJ().mixedAdd(r[D]), x[2] = r[S].toJ().mixedAdd(r[D].neg()));
    var F = [
      -3,
      -1,
      -5,
      -7,
      0,
      7,
      5,
      1,
      3
    ], M = cm(n[S], n[D]);
    for (u = Math.max(M[0].length, u), f[S] = new Array(u), f[D] = new Array(u), g = 0; g < u; g++) {
      var j = M[0][g] | 0, U = M[1][g] | 0;
      f[S][g] = F[(j + 1) * 3 + (U + 1)], f[D][g] = 0, i[S] = x;
    }
  }
  var B = this.jpoint(null, null, null), W = this._wnafT4;
  for (h = u; h >= 0; h--) {
    for (var G = 0; h >= 0; ) {
      var K = !0;
      for (g = 0; g < a; g++)
        W[g] = f[g][h] | 0, W[g] !== 0 && (K = !1);
      if (!K)
        break;
      G++, h--;
    }
    if (h >= 0 && G++, B = B.dblp(G), h < 0)
      break;
    for (g = 0; g < a; g++) {
      var te = W[g];
      te !== 0 && (te > 0 ? C = i[g][te - 1 >> 1] : te < 0 && (C = i[g][-te - 1 >> 1].neg()), C.type === "affine" ? B = B.mixedAdd(C) : B = B.add(C));
    }
  }
  for (h = 0; h < a; h++)
    i[h] = null;
  return s ? B : B.toP();
};
function Jt(t, e) {
  this.curve = t, this.type = e, this.precomputed = null;
}
fn.BasePoint = Jt;
Jt.prototype.eq = function() {
  throw new Error("Not implemented");
};
Jt.prototype.validate = function() {
  return this.curve.validate(this);
};
fn.prototype.decodePoint = function(e, r) {
  e = zt.toArray(e, r);
  var n = this.p.byteLength();
  if ((e[0] === 4 || e[0] === 6 || e[0] === 7) && e.length - 1 === 2 * n) {
    e[0] === 6 ? ws(e[e.length - 1] % 2 === 0) : e[0] === 7 && ws(e[e.length - 1] % 2 === 1);
    var a = this.point(
      e.slice(1, 1 + n),
      e.slice(1 + n, 1 + 2 * n)
    );
    return a;
  } else if ((e[0] === 2 || e[0] === 3) && e.length - 1 === n)
    return this.pointFromX(e.slice(1, 1 + n), e[0] === 3);
  throw new Error("Unknown point format");
};
Jt.prototype.encodeCompressed = function(e) {
  return this.encode(e, !0);
};
Jt.prototype._encode = function(e) {
  var r = this.curve.p.byteLength(), n = this.getX().toArray("be", r);
  return e ? [this.getY().isEven() ? 2 : 3].concat(n) : [4].concat(n, this.getY().toArray("be", r));
};
Jt.prototype.encode = function(e, r) {
  return zt.encode(this._encode(r), e);
};
Jt.prototype.precompute = function(e) {
  if (this.precomputed)
    return this;
  var r = {
    doubles: null,
    naf: null,
    beta: null
  };
  return r.naf = this._getNAFPoints(8), r.doubles = this._getDoubles(4, e), r.beta = this._getBeta(), this.precomputed = r, this;
};
Jt.prototype._hasDoubles = function(e) {
  if (!this.precomputed)
    return !1;
  var r = this.precomputed.doubles;
  return r ? r.points.length >= Math.ceil((e.bitLength() + 1) / r.step) : !1;
};
Jt.prototype._getDoubles = function(e, r) {
  if (this.precomputed && this.precomputed.doubles)
    return this.precomputed.doubles;
  for (var n = [this], a = this, s = 0; s < r; s += e) {
    for (var o = 0; o < e; o++)
      a = a.dbl();
    n.push(a);
  }
  return {
    step: e,
    points: n
  };
};
Jt.prototype._getNAFPoints = function(e) {
  if (this.precomputed && this.precomputed.naf)
    return this.precomputed.naf;
  for (var r = [this], n = (1 << e) - 1, a = n === 1 ? null : this.dbl(), s = 1; s < n; s++)
    r[s] = r[s - 1].add(a);
  return {
    wnd: e,
    points: r
  };
};
Jt.prototype._getBeta = function() {
  return null;
};
Jt.prototype.dblp = function(e) {
  for (var r = this, n = 0; n < e; n++)
    r = r.dbl();
  return r;
};
var bi = sa(function(t) {
  typeof Object.create == "function" ? t.exports = function(r, n) {
    n && (r.super_ = n, r.prototype = Object.create(n.prototype, {
      constructor: {
        value: r,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }));
  } : t.exports = function(r, n) {
    if (n) {
      r.super_ = n;
      var a = function() {
      };
      a.prototype = n.prototype, r.prototype = new a(), r.prototype.constructor = r;
    }
  };
}), dm = zt.assert;
function Zt(t) {
  Bn.call(this, "short", t), this.a = new we(t.a, 16).toRed(this.red), this.b = new we(t.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = this.a.fromRed().cmpn(0) === 0, this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0, this.endo = this._getEndomorphism(t), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4);
}
bi(Zt, Bn);
var fm = Zt;
Zt.prototype._getEndomorphism = function(e) {
  if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
    var r, n;
    if (e.beta)
      r = new we(e.beta, 16).toRed(this.red);
    else {
      var a = this._getEndoRoots(this.p);
      r = a[0].cmp(a[1]) < 0 ? a[0] : a[1], r = r.toRed(this.red);
    }
    if (e.lambda)
      n = new we(e.lambda, 16);
    else {
      var s = this._getEndoRoots(this.n);
      this.g.mul(s[0]).x.cmp(this.g.x.redMul(r)) === 0 ? n = s[0] : (n = s[1], dm(this.g.mul(n).x.cmp(this.g.x.redMul(r)) === 0));
    }
    var o;
    return e.basis ? o = e.basis.map(function(i) {
      return {
        a: new we(i.a, 16),
        b: new we(i.b, 16)
      };
    }) : o = this._getEndoBasis(n), {
      beta: r,
      lambda: n,
      basis: o
    };
  }
};
Zt.prototype._getEndoRoots = function(e) {
  var r = e === this.p ? this.red : we.mont(e), n = new we(2).toRed(r).redInvm(), a = n.redNeg(), s = new we(3).toRed(r).redNeg().redSqrt().redMul(n), o = a.redAdd(s).fromRed(), i = a.redSub(s).fromRed();
  return [o, i];
};
Zt.prototype._getEndoBasis = function(e) {
  for (var r = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), n = e, a = this.n.clone(), s = new we(1), o = new we(0), i = new we(0), f = new we(1), u, h, g, C, E, S, D, x = 0, F, M; n.cmpn(0) !== 0; ) {
    var j = a.div(n);
    F = a.sub(j.mul(n)), M = i.sub(j.mul(s));
    var U = f.sub(j.mul(o));
    if (!g && F.cmp(r) < 0)
      u = D.neg(), h = s, g = F.neg(), C = M;
    else if (g && ++x === 2)
      break;
    D = F, a = n, n = F, i = s, s = M, f = o, o = U;
  }
  E = F.neg(), S = M;
  var B = g.sqr().add(C.sqr()), W = E.sqr().add(S.sqr());
  return W.cmp(B) >= 0 && (E = u, S = h), g.negative && (g = g.neg(), C = C.neg()), E.negative && (E = E.neg(), S = S.neg()), [
    { a: g, b: C },
    { a: E, b: S }
  ];
};
Zt.prototype._endoSplit = function(e) {
  var r = this.endo.basis, n = r[0], a = r[1], s = a.b.mul(e).divRound(this.n), o = n.b.neg().mul(e).divRound(this.n), i = s.mul(n.a), f = o.mul(a.a), u = s.mul(n.b), h = o.mul(a.b), g = e.sub(i).sub(f), C = u.add(h).neg();
  return { k1: g, k2: C };
};
Zt.prototype.pointFromX = function(e, r) {
  e = new we(e, 16), e.red || (e = e.toRed(this.red));
  var n = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b), a = n.redSqrt();
  if (a.redSqr().redSub(n).cmp(this.zero) !== 0)
    throw new Error("invalid point");
  var s = a.fromRed().isOdd();
  return (r && !s || !r && s) && (a = a.redNeg()), this.point(e, a);
};
Zt.prototype.validate = function(e) {
  if (e.inf)
    return !0;
  var r = e.x, n = e.y, a = this.a.redMul(r), s = r.redSqr().redMul(r).redIAdd(a).redIAdd(this.b);
  return n.redSqr().redISub(s).cmpn(0) === 0;
};
Zt.prototype._endoWnafMulAdd = function(e, r, n) {
  for (var a = this._endoWnafT1, s = this._endoWnafT2, o = 0; o < e.length; o++) {
    var i = this._endoSplit(r[o]), f = e[o], u = f._getBeta();
    i.k1.negative && (i.k1.ineg(), f = f.neg(!0)), i.k2.negative && (i.k2.ineg(), u = u.neg(!0)), a[o * 2] = f, a[o * 2 + 1] = u, s[o * 2] = i.k1, s[o * 2 + 1] = i.k2;
  }
  for (var h = this._wnafMulAdd(1, a, s, o * 2, n), g = 0; g < o * 2; g++)
    a[g] = null, s[g] = null;
  return h;
};
function wt(t, e, r, n) {
  Bn.BasePoint.call(this, t, "affine"), e === null && r === null ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new we(e, 16), this.y = new we(r, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1);
}
bi(wt, Bn.BasePoint);
Zt.prototype.point = function(e, r, n) {
  return new wt(this, e, r, n);
};
Zt.prototype.pointFromJSON = function(e, r) {
  return wt.fromJSON(this, e, r);
};
wt.prototype._getBeta = function() {
  if (!!this.curve.endo) {
    var e = this.precomputed;
    if (e && e.beta)
      return e.beta;
    var r = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
    if (e) {
      var n = this.curve, a = function(s) {
        return n.point(s.x.redMul(n.endo.beta), s.y);
      };
      e.beta = r, r.precomputed = {
        beta: null,
        naf: e.naf && {
          wnd: e.naf.wnd,
          points: e.naf.points.map(a)
        },
        doubles: e.doubles && {
          step: e.doubles.step,
          points: e.doubles.points.map(a)
        }
      };
    }
    return r;
  }
};
wt.prototype.toJSON = function() {
  return this.precomputed ? [this.x, this.y, this.precomputed && {
    doubles: this.precomputed.doubles && {
      step: this.precomputed.doubles.step,
      points: this.precomputed.doubles.points.slice(1)
    },
    naf: this.precomputed.naf && {
      wnd: this.precomputed.naf.wnd,
      points: this.precomputed.naf.points.slice(1)
    }
  }] : [this.x, this.y];
};
wt.fromJSON = function(e, r, n) {
  typeof r == "string" && (r = JSON.parse(r));
  var a = e.point(r[0], r[1], n);
  if (!r[2])
    return a;
  function s(i) {
    return e.point(i[0], i[1], n);
  }
  var o = r[2];
  return a.precomputed = {
    beta: null,
    doubles: o.doubles && {
      step: o.doubles.step,
      points: [a].concat(o.doubles.points.map(s))
    },
    naf: o.naf && {
      wnd: o.naf.wnd,
      points: [a].concat(o.naf.points.map(s))
    }
  }, a;
};
wt.prototype.inspect = function() {
  return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
};
wt.prototype.isInfinity = function() {
  return this.inf;
};
wt.prototype.add = function(e) {
  if (this.inf)
    return e;
  if (e.inf)
    return this;
  if (this.eq(e))
    return this.dbl();
  if (this.neg().eq(e))
    return this.curve.point(null, null);
  if (this.x.cmp(e.x) === 0)
    return this.curve.point(null, null);
  var r = this.y.redSub(e.y);
  r.cmpn(0) !== 0 && (r = r.redMul(this.x.redSub(e.x).redInvm()));
  var n = r.redSqr().redISub(this.x).redISub(e.x), a = r.redMul(this.x.redSub(n)).redISub(this.y);
  return this.curve.point(n, a);
};
wt.prototype.dbl = function() {
  if (this.inf)
    return this;
  var e = this.y.redAdd(this.y);
  if (e.cmpn(0) === 0)
    return this.curve.point(null, null);
  var r = this.curve.a, n = this.x.redSqr(), a = e.redInvm(), s = n.redAdd(n).redIAdd(n).redIAdd(r).redMul(a), o = s.redSqr().redISub(this.x.redAdd(this.x)), i = s.redMul(this.x.redSub(o)).redISub(this.y);
  return this.curve.point(o, i);
};
wt.prototype.getX = function() {
  return this.x.fromRed();
};
wt.prototype.getY = function() {
  return this.y.fromRed();
};
wt.prototype.mul = function(e) {
  return e = new we(e, 16), this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e);
};
wt.prototype.mulAdd = function(e, r, n) {
  var a = [this, r], s = [e, n];
  return this.curve.endo ? this.curve._endoWnafMulAdd(a, s) : this.curve._wnafMulAdd(1, a, s, 2);
};
wt.prototype.jmulAdd = function(e, r, n) {
  var a = [this, r], s = [e, n];
  return this.curve.endo ? this.curve._endoWnafMulAdd(a, s, !0) : this.curve._wnafMulAdd(1, a, s, 2, !0);
};
wt.prototype.eq = function(e) {
  return this === e || this.inf === e.inf && (this.inf || this.x.cmp(e.x) === 0 && this.y.cmp(e.y) === 0);
};
wt.prototype.neg = function(e) {
  if (this.inf)
    return this;
  var r = this.curve.point(this.x, this.y.redNeg());
  if (e && this.precomputed) {
    var n = this.precomputed, a = function(s) {
      return s.neg();
    };
    r.precomputed = {
      naf: n.naf && {
        wnd: n.naf.wnd,
        points: n.naf.points.map(a)
      },
      doubles: n.doubles && {
        step: n.doubles.step,
        points: n.doubles.points.map(a)
      }
    };
  }
  return r;
};
wt.prototype.toJ = function() {
  if (this.inf)
    return this.curve.jpoint(null, null, null);
  var e = this.curve.jpoint(this.x, this.y, this.curve.one);
  return e;
};
function Et(t, e, r, n) {
  Bn.BasePoint.call(this, t, "jacobian"), e === null && r === null && n === null ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new we(0)) : (this.x = new we(e, 16), this.y = new we(r, 16), this.z = new we(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
}
bi(Et, Bn.BasePoint);
Zt.prototype.jpoint = function(e, r, n) {
  return new Et(this, e, r, n);
};
Et.prototype.toP = function() {
  if (this.isInfinity())
    return this.curve.point(null, null);
  var e = this.z.redInvm(), r = e.redSqr(), n = this.x.redMul(r), a = this.y.redMul(r).redMul(e);
  return this.curve.point(n, a);
};
Et.prototype.neg = function() {
  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
};
Et.prototype.add = function(e) {
  if (this.isInfinity())
    return e;
  if (e.isInfinity())
    return this;
  var r = e.z.redSqr(), n = this.z.redSqr(), a = this.x.redMul(r), s = e.x.redMul(n), o = this.y.redMul(r.redMul(e.z)), i = e.y.redMul(n.redMul(this.z)), f = a.redSub(s), u = o.redSub(i);
  if (f.cmpn(0) === 0)
    return u.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var h = f.redSqr(), g = h.redMul(f), C = a.redMul(h), E = u.redSqr().redIAdd(g).redISub(C).redISub(C), S = u.redMul(C.redISub(E)).redISub(o.redMul(g)), D = this.z.redMul(e.z).redMul(f);
  return this.curve.jpoint(E, S, D);
};
Et.prototype.mixedAdd = function(e) {
  if (this.isInfinity())
    return e.toJ();
  if (e.isInfinity())
    return this;
  var r = this.z.redSqr(), n = this.x, a = e.x.redMul(r), s = this.y, o = e.y.redMul(r).redMul(this.z), i = n.redSub(a), f = s.redSub(o);
  if (i.cmpn(0) === 0)
    return f.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var u = i.redSqr(), h = u.redMul(i), g = n.redMul(u), C = f.redSqr().redIAdd(h).redISub(g).redISub(g), E = f.redMul(g.redISub(C)).redISub(s.redMul(h)), S = this.z.redMul(i);
  return this.curve.jpoint(C, E, S);
};
Et.prototype.dblp = function(e) {
  if (e === 0)
    return this;
  if (this.isInfinity())
    return this;
  if (!e)
    return this.dbl();
  var r;
  if (this.curve.zeroA || this.curve.threeA) {
    var n = this;
    for (r = 0; r < e; r++)
      n = n.dbl();
    return n;
  }
  var a = this.curve.a, s = this.curve.tinv, o = this.x, i = this.y, f = this.z, u = f.redSqr().redSqr(), h = i.redAdd(i);
  for (r = 0; r < e; r++) {
    var g = o.redSqr(), C = h.redSqr(), E = C.redSqr(), S = g.redAdd(g).redIAdd(g).redIAdd(a.redMul(u)), D = o.redMul(C), x = S.redSqr().redISub(D.redAdd(D)), F = D.redISub(x), M = S.redMul(F);
    M = M.redIAdd(M).redISub(E);
    var j = h.redMul(f);
    r + 1 < e && (u = u.redMul(E)), o = x, f = j, h = M;
  }
  return this.curve.jpoint(o, h.redMul(s), f);
};
Et.prototype.dbl = function() {
  return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
};
Et.prototype._zeroDbl = function() {
  var e, r, n;
  if (this.zOne) {
    var a = this.x.redSqr(), s = this.y.redSqr(), o = s.redSqr(), i = this.x.redAdd(s).redSqr().redISub(a).redISub(o);
    i = i.redIAdd(i);
    var f = a.redAdd(a).redIAdd(a), u = f.redSqr().redISub(i).redISub(i), h = o.redIAdd(o);
    h = h.redIAdd(h), h = h.redIAdd(h), e = u, r = f.redMul(i.redISub(u)).redISub(h), n = this.y.redAdd(this.y);
  } else {
    var g = this.x.redSqr(), C = this.y.redSqr(), E = C.redSqr(), S = this.x.redAdd(C).redSqr().redISub(g).redISub(E);
    S = S.redIAdd(S);
    var D = g.redAdd(g).redIAdd(g), x = D.redSqr(), F = E.redIAdd(E);
    F = F.redIAdd(F), F = F.redIAdd(F), e = x.redISub(S).redISub(S), r = D.redMul(S.redISub(e)).redISub(F), n = this.y.redMul(this.z), n = n.redIAdd(n);
  }
  return this.curve.jpoint(e, r, n);
};
Et.prototype._threeDbl = function() {
  var e, r, n;
  if (this.zOne) {
    var a = this.x.redSqr(), s = this.y.redSqr(), o = s.redSqr(), i = this.x.redAdd(s).redSqr().redISub(a).redISub(o);
    i = i.redIAdd(i);
    var f = a.redAdd(a).redIAdd(a).redIAdd(this.curve.a), u = f.redSqr().redISub(i).redISub(i);
    e = u;
    var h = o.redIAdd(o);
    h = h.redIAdd(h), h = h.redIAdd(h), r = f.redMul(i.redISub(u)).redISub(h), n = this.y.redAdd(this.y);
  } else {
    var g = this.z.redSqr(), C = this.y.redSqr(), E = this.x.redMul(C), S = this.x.redSub(g).redMul(this.x.redAdd(g));
    S = S.redAdd(S).redIAdd(S);
    var D = E.redIAdd(E);
    D = D.redIAdd(D);
    var x = D.redAdd(D);
    e = S.redSqr().redISub(x), n = this.y.redAdd(this.z).redSqr().redISub(C).redISub(g);
    var F = C.redSqr();
    F = F.redIAdd(F), F = F.redIAdd(F), F = F.redIAdd(F), r = S.redMul(D.redISub(e)).redISub(F);
  }
  return this.curve.jpoint(e, r, n);
};
Et.prototype._dbl = function() {
  var e = this.curve.a, r = this.x, n = this.y, a = this.z, s = a.redSqr().redSqr(), o = r.redSqr(), i = n.redSqr(), f = o.redAdd(o).redIAdd(o).redIAdd(e.redMul(s)), u = r.redAdd(r);
  u = u.redIAdd(u);
  var h = u.redMul(i), g = f.redSqr().redISub(h.redAdd(h)), C = h.redISub(g), E = i.redSqr();
  E = E.redIAdd(E), E = E.redIAdd(E), E = E.redIAdd(E);
  var S = f.redMul(C).redISub(E), D = n.redAdd(n).redMul(a);
  return this.curve.jpoint(g, S, D);
};
Et.prototype.trpl = function() {
  if (!this.curve.zeroA)
    return this.dbl().add(this);
  var e = this.x.redSqr(), r = this.y.redSqr(), n = this.z.redSqr(), a = r.redSqr(), s = e.redAdd(e).redIAdd(e), o = s.redSqr(), i = this.x.redAdd(r).redSqr().redISub(e).redISub(a);
  i = i.redIAdd(i), i = i.redAdd(i).redIAdd(i), i = i.redISub(o);
  var f = i.redSqr(), u = a.redIAdd(a);
  u = u.redIAdd(u), u = u.redIAdd(u), u = u.redIAdd(u);
  var h = s.redIAdd(i).redSqr().redISub(o).redISub(f).redISub(u), g = r.redMul(h);
  g = g.redIAdd(g), g = g.redIAdd(g);
  var C = this.x.redMul(f).redISub(g);
  C = C.redIAdd(C), C = C.redIAdd(C);
  var E = this.y.redMul(h.redMul(u.redISub(h)).redISub(i.redMul(f)));
  E = E.redIAdd(E), E = E.redIAdd(E), E = E.redIAdd(E);
  var S = this.z.redAdd(i).redSqr().redISub(n).redISub(f);
  return this.curve.jpoint(C, E, S);
};
Et.prototype.mul = function(e, r) {
  return e = new we(e, r), this.curve._wnafMul(this, e);
};
Et.prototype.eq = function(e) {
  if (e.type === "affine")
    return this.eq(e.toJ());
  if (this === e)
    return !0;
  var r = this.z.redSqr(), n = e.z.redSqr();
  if (this.x.redMul(n).redISub(e.x.redMul(r)).cmpn(0) !== 0)
    return !1;
  var a = r.redMul(this.z), s = n.redMul(e.z);
  return this.y.redMul(s).redISub(e.y.redMul(a)).cmpn(0) === 0;
};
Et.prototype.eqXToP = function(e) {
  var r = this.z.redSqr(), n = e.toRed(this.curve.red).redMul(r);
  if (this.x.cmp(n) === 0)
    return !0;
  for (var a = e.clone(), s = this.curve.redN.redMul(r); ; ) {
    if (a.iadd(this.curve.n), a.cmp(this.curve.p) >= 0)
      return !1;
    if (n.redIAdd(s), this.x.cmp(n) === 0)
      return !0;
  }
};
Et.prototype.inspect = function() {
  return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
};
Et.prototype.isInfinity = function() {
  return this.z.cmpn(0) === 0;
};
var is = sa(function(t, e) {
  var r = e;
  r.base = Bn, r.short = fm, r.mont = null, r.edwards = null;
}), cs = sa(function(t, e) {
  var r = e, n = zt.assert;
  function a(i) {
    i.type === "short" ? this.curve = new is.short(i) : i.type === "edwards" ? this.curve = new is.edwards(i) : this.curve = new is.mont(i), this.g = this.curve.g, this.n = this.curve.n, this.hash = i.hash, n(this.g.validate(), "Invalid curve"), n(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
  }
  r.PresetCurve = a;
  function s(i, f) {
    Object.defineProperty(r, i, {
      configurable: !0,
      enumerable: !0,
      get: function() {
        var u = new a(f);
        return Object.defineProperty(r, i, {
          configurable: !0,
          enumerable: !0,
          value: u
        }), u;
      }
    });
  }
  s("p192", {
    type: "short",
    prime: "p192",
    p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
    a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
    b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
    n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
    hash: Bt.sha256,
    gRed: !1,
    g: [
      "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
      "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"
    ]
  }), s("p224", {
    type: "short",
    prime: "p224",
    p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
    a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
    b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
    n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
    hash: Bt.sha256,
    gRed: !1,
    g: [
      "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
      "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"
    ]
  }), s("p256", {
    type: "short",
    prime: null,
    p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
    a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
    b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
    n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
    hash: Bt.sha256,
    gRed: !1,
    g: [
      "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
      "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"
    ]
  }), s("p384", {
    type: "short",
    prime: null,
    p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
    a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
    b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
    n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
    hash: Bt.sha384,
    gRed: !1,
    g: [
      "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
      "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"
    ]
  }), s("p521", {
    type: "short",
    prime: null,
    p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
    a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
    b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
    n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
    hash: Bt.sha512,
    gRed: !1,
    g: [
      "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
      "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"
    ]
  }), s("curve25519", {
    type: "mont",
    prime: "p25519",
    p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
    a: "76d06",
    b: "1",
    n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
    hash: Bt.sha256,
    gRed: !1,
    g: [
      "9"
    ]
  }), s("ed25519", {
    type: "edwards",
    prime: "p25519",
    p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
    a: "-1",
    c: "1",
    d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
    n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
    hash: Bt.sha256,
    gRed: !1,
    g: [
      "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
      "6666666666666666666666666666666666666666666666666666666666666658"
    ]
  });
  var o;
  try {
    o = null.crash();
  } catch {
    o = void 0;
  }
  s("secp256k1", {
    type: "short",
    prime: "k256",
    p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
    a: "0",
    b: "7",
    n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
    h: "1",
    hash: Bt.sha256,
    beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
    lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
    basis: [
      {
        a: "3086d221a7d46bcde86c90e49284eb15",
        b: "-e4437ed6010e88286f547fa90abfe4c3"
      },
      {
        a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
        b: "3086d221a7d46bcde86c90e49284eb15"
      }
    ],
    gRed: !1,
    g: [
      "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
      "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
      o
    ]
  });
});
function cn(t) {
  if (!(this instanceof cn))
    return new cn(t);
  this.hash = t.hash, this.predResist = !!t.predResist, this.outLen = this.hash.outSize, this.minEntropy = t.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
  var e = ir.toArray(t.entropy, t.entropyEnc || "hex"), r = ir.toArray(t.nonce, t.nonceEnc || "hex"), n = ir.toArray(t.pers, t.persEnc || "hex");
  pi(
    e.length >= this.minEntropy / 8,
    "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
  ), this._init(e, r, n);
}
var tf = cn;
cn.prototype._init = function(e, r, n) {
  var a = e.concat(r).concat(n);
  this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
  for (var s = 0; s < this.V.length; s++)
    this.K[s] = 0, this.V[s] = 1;
  this._update(a), this._reseed = 1, this.reseedInterval = 281474976710656;
};
cn.prototype._hmac = function() {
  return new Bt.hmac(this.hash, this.K);
};
cn.prototype._update = function(e) {
  var r = this._hmac().update(this.V).update([0]);
  e && (r = r.update(e)), this.K = r.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest());
};
cn.prototype.reseed = function(e, r, n, a) {
  typeof r != "string" && (a = n, n = r, r = null), e = ir.toArray(e, r), n = ir.toArray(n, a), pi(
    e.length >= this.minEntropy / 8,
    "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
  ), this._update(e.concat(n || [])), this._reseed = 1;
};
cn.prototype.generate = function(e, r, n, a) {
  if (this._reseed > this.reseedInterval)
    throw new Error("Reseed is required");
  typeof r != "string" && (a = n, n = r, r = null), n && (n = ir.toArray(n, a || "hex"), this._update(n));
  for (var s = []; s.length < e; )
    this.V = this._hmac().update(this.V).digest(), s = s.concat(this.V);
  var o = s.slice(0, e);
  return this._update(n), this._reseed++, ir.encode(o, r);
};
var Wo = zt.assert;
function St(t, e) {
  this.ec = t, this.priv = null, this.pub = null, e.priv && this._importPrivate(e.priv, e.privEnc), e.pub && this._importPublic(e.pub, e.pubEnc);
}
var gi = St;
St.fromPublic = function(e, r, n) {
  return r instanceof St ? r : new St(e, {
    pub: r,
    pubEnc: n
  });
};
St.fromPrivate = function(e, r, n) {
  return r instanceof St ? r : new St(e, {
    priv: r,
    privEnc: n
  });
};
St.prototype.validate = function() {
  var e = this.getPublic();
  return e.isInfinity() ? { result: !1, reason: "Invalid public key" } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? { result: !0, reason: null } : { result: !1, reason: "Public key * N != O" } : { result: !1, reason: "Public key is not a point" };
};
St.prototype.getPublic = function(e, r) {
  return typeof e == "string" && (r = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), r ? this.pub.encode(r, e) : this.pub;
};
St.prototype.getPrivate = function(e) {
  return e === "hex" ? this.priv.toString(16, 2) : this.priv;
};
St.prototype._importPrivate = function(e, r) {
  this.priv = new we(e, r || 16), this.priv = this.priv.umod(this.ec.curve.n);
};
St.prototype._importPublic = function(e, r) {
  if (e.x || e.y) {
    this.ec.curve.type === "mont" ? Wo(e.x, "Need x coordinate") : (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") && Wo(e.x && e.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(e.x, e.y);
    return;
  }
  this.pub = this.ec.curve.decodePoint(e, r);
};
St.prototype.derive = function(e) {
  return e.validate() || Wo(e.validate(), "public point not validated"), e.mul(this.priv).getX();
};
St.prototype.sign = function(e, r, n) {
  return this.ec.sign(e, this, r, n);
};
St.prototype.verify = function(e, r) {
  return this.ec.verify(e, r, this);
};
St.prototype.inspect = function() {
  return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
};
var lm = zt.assert;
function Ts(t, e) {
  if (t instanceof Ts)
    return t;
  this._importDER(t, e) || (lm(t.r && t.s, "Signature without r or s"), this.r = new we(t.r, 16), this.s = new we(t.s, 16), t.recoveryParam === void 0 ? this.recoveryParam = null : this.recoveryParam = t.recoveryParam);
}
var Ms = Ts;
function um() {
  this.place = 0;
}
function po(t, e) {
  var r = t[e.place++];
  if (!(r & 128))
    return r;
  var n = r & 15;
  if (n === 0 || n > 4)
    return !1;
  for (var a = 0, s = 0, o = e.place; s < n; s++, o++)
    a <<= 8, a |= t[o], a >>>= 0;
  return a <= 127 ? !1 : (e.place = o, a);
}
function Lc(t) {
  for (var e = 0, r = t.length - 1; !t[e] && !(t[e + 1] & 128) && e < r; )
    e++;
  return e === 0 ? t : t.slice(e);
}
Ts.prototype._importDER = function(e, r) {
  e = zt.toArray(e, r);
  var n = new um();
  if (e[n.place++] !== 48)
    return !1;
  var a = po(e, n);
  if (a === !1 || a + n.place !== e.length || e[n.place++] !== 2)
    return !1;
  var s = po(e, n);
  if (s === !1)
    return !1;
  var o = e.slice(n.place, s + n.place);
  if (n.place += s, e[n.place++] !== 2)
    return !1;
  var i = po(e, n);
  if (i === !1 || e.length !== i + n.place)
    return !1;
  var f = e.slice(n.place, i + n.place);
  if (o[0] === 0)
    if (o[1] & 128)
      o = o.slice(1);
    else
      return !1;
  if (f[0] === 0)
    if (f[1] & 128)
      f = f.slice(1);
    else
      return !1;
  return this.r = new we(o), this.s = new we(f), this.recoveryParam = null, !0;
};
function bo(t, e) {
  if (e < 128) {
    t.push(e);
    return;
  }
  var r = 1 + (Math.log(e) / Math.LN2 >>> 3);
  for (t.push(r | 128); --r; )
    t.push(e >>> (r << 3) & 255);
  t.push(e);
}
Ts.prototype.toDER = function(e) {
  var r = this.r.toArray(), n = this.s.toArray();
  for (r[0] & 128 && (r = [0].concat(r)), n[0] & 128 && (n = [0].concat(n)), r = Lc(r), n = Lc(n); !n[0] && !(n[1] & 128); )
    n = n.slice(1);
  var a = [2];
  bo(a, r.length), a = a.concat(r), a.push(2), bo(a, n.length);
  var s = a.concat(n), o = [48];
  return bo(o, s.length), o = o.concat(s), zt.encode(o, e);
};
var hm = function() {
  throw new Error("unsupported");
}, rf = zt.assert;
function qt(t) {
  if (!(this instanceof qt))
    return new qt(t);
  typeof t == "string" && (rf(
    Object.prototype.hasOwnProperty.call(cs, t),
    "Unknown curve " + t
  ), t = cs[t]), t instanceof cs.PresetCurve && (t = { curve: t }), this.curve = t.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = t.curve.g, this.g.precompute(t.curve.n.bitLength() + 1), this.hash = t.hash || t.curve.hash;
}
var mm = qt;
qt.prototype.keyPair = function(e) {
  return new gi(this, e);
};
qt.prototype.keyFromPrivate = function(e, r) {
  return gi.fromPrivate(this, e, r);
};
qt.prototype.keyFromPublic = function(e, r) {
  return gi.fromPublic(this, e, r);
};
qt.prototype.genKeyPair = function(e) {
  e || (e = {});
  for (var r = new tf({
    hash: this.hash,
    pers: e.pers,
    persEnc: e.persEnc || "utf8",
    entropy: e.entropy || hm(this.hash.hmacStrength),
    entropyEnc: e.entropy && e.entropyEnc || "utf8",
    nonce: this.n.toArray()
  }), n = this.n.byteLength(), a = this.n.sub(new we(2)); ; ) {
    var s = new we(r.generate(n));
    if (!(s.cmp(a) > 0))
      return s.iaddn(1), this.keyFromPrivate(s);
  }
};
qt.prototype._truncateToN = function(e, r) {
  var n = e.byteLength() * 8 - this.n.bitLength();
  return n > 0 && (e = e.ushrn(n)), !r && e.cmp(this.n) >= 0 ? e.sub(this.n) : e;
};
qt.prototype.sign = function(e, r, n, a) {
  typeof n == "object" && (a = n, n = null), a || (a = {}), r = this.keyFromPrivate(r, n), e = this._truncateToN(new we(e, 16));
  for (var s = this.n.byteLength(), o = r.getPrivate().toArray("be", s), i = e.toArray("be", s), f = new tf({
    hash: this.hash,
    entropy: o,
    nonce: i,
    pers: a.pers,
    persEnc: a.persEnc || "utf8"
  }), u = this.n.sub(new we(1)), h = 0; ; h++) {
    var g = a.k ? a.k(h) : new we(f.generate(this.n.byteLength()));
    if (g = this._truncateToN(g, !0), !(g.cmpn(1) <= 0 || g.cmp(u) >= 0)) {
      var C = this.g.mul(g);
      if (!C.isInfinity()) {
        var E = C.getX(), S = E.umod(this.n);
        if (S.cmpn(0) !== 0) {
          var D = g.invm(this.n).mul(S.mul(r.getPrivate()).iadd(e));
          if (D = D.umod(this.n), D.cmpn(0) !== 0) {
            var x = (C.getY().isOdd() ? 1 : 0) | (E.cmp(S) !== 0 ? 2 : 0);
            return a.canonical && D.cmp(this.nh) > 0 && (D = this.n.sub(D), x ^= 1), new Ms({ r: S, s: D, recoveryParam: x });
          }
        }
      }
    }
  }
};
qt.prototype.verify = function(e, r, n, a) {
  e = this._truncateToN(new we(e, 16)), n = this.keyFromPublic(n, a), r = new Ms(r, "hex");
  var s = r.r, o = r.s;
  if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0 || o.cmpn(1) < 0 || o.cmp(this.n) >= 0)
    return !1;
  var i = o.invm(this.n), f = i.mul(e).umod(this.n), u = i.mul(s).umod(this.n), h;
  return this.curve._maxwellTrick ? (h = this.g.jmulAdd(f, n.getPublic(), u), h.isInfinity() ? !1 : h.eqXToP(s)) : (h = this.g.mulAdd(f, n.getPublic(), u), h.isInfinity() ? !1 : h.getX().umod(this.n).cmp(s) === 0);
};
qt.prototype.recoverPubKey = function(t, e, r, n) {
  rf((3 & r) === r, "The recovery param is more than two bits"), e = new Ms(e, n);
  var a = this.n, s = new we(t), o = e.r, i = e.s, f = r & 1, u = r >> 1;
  if (o.cmp(this.curve.p.umod(this.curve.n)) >= 0 && u)
    throw new Error("Unable to find sencond key candinate");
  u ? o = this.curve.pointFromX(o.add(this.curve.n), f) : o = this.curve.pointFromX(o, f);
  var h = e.r.invm(a), g = a.sub(s).mul(h).umod(a), C = i.mul(h).umod(a);
  return this.g.mulAdd(g, o, C);
};
qt.prototype.getKeyRecoveryParam = function(t, e, r, n) {
  if (e = new Ms(e, n), e.recoveryParam !== null)
    return e.recoveryParam;
  for (var a = 0; a < 4; a++) {
    var s;
    try {
      s = this.recoverPubKey(t, e, a);
    } catch {
      continue;
    }
    if (s.eq(r))
      return a;
  }
  throw new Error("Unable to find valid recovery factor");
};
var pm = sa(function(t, e) {
  var r = e;
  r.version = "6.5.4", r.utils = zt, r.rand = function() {
    throw new Error("unsupported");
  }, r.curve = is, r.curves = cs, r.ec = mm, r.eddsa = null;
}), bm = pm.ec;
const gm = "signing-key/5.7.0", Ho = new V(gm);
let go = null;
function Ar() {
  return go || (go = new bm("secp256k1")), go;
}
class pn {
  constructor(e) {
    ne(this, "curve", "secp256k1"), ne(this, "privateKey", ce(e)), Ea(this.privateKey) !== 32 && Ho.throwArgumentError("invalid private key", "privateKey", "[[ REDACTED ]]");
    const r = Ar().keyFromPrivate(ae(this.privateKey));
    ne(this, "publicKey", "0x" + r.getPublic(!1, "hex")), ne(this, "compressedPublicKey", "0x" + r.getPublic(!0, "hex")), ne(this, "_isSigningKey", !0);
  }
  _addPoint(e) {
    const r = Ar().keyFromPublic(ae(this.publicKey)), n = Ar().keyFromPublic(ae(e));
    return "0x" + r.pub.add(n.pub).encodeCompressed("hex");
  }
  signDigest(e) {
    const r = Ar().keyFromPrivate(ae(this.privateKey)), n = ae(e);
    n.length !== 32 && Ho.throwArgumentError("bad digest length", "digest", e);
    const a = r.sign(n, { canonical: !0 });
    return Sn({
      recoveryParam: a.recoveryParam,
      r: xt("0x" + a.r.toString(16), 32),
      s: xt("0x" + a.s.toString(16), 32)
    });
  }
  computeSharedSecret(e) {
    const r = Ar().keyFromPrivate(ae(this.privateKey)), n = Ar().keyFromPublic(ae(xi(e)));
    return xt("0x" + r.derive(n.getPublic()).toString(16), 32);
  }
  static isSigningKey(e) {
    return !!(e && e._isSigningKey);
  }
}
function nf(t, e) {
  const r = Sn(e), n = { r: ae(r.r), s: ae(r.s) };
  return "0x" + Ar().recoverPubKey(ae(t), n, r.recoveryParam).encode("hex", !1);
}
function xi(t, e) {
  const r = ae(t);
  if (r.length === 32) {
    const n = new pn(r);
    return e ? "0x" + Ar().keyFromPrivate(r).getPublic(!0, "hex") : n.publicKey;
  } else {
    if (r.length === 33)
      return e ? ce(r) : "0x" + Ar().keyFromPublic(r).getPublic(!1, "hex");
    if (r.length === 65)
      return e ? "0x" + Ar().keyFromPublic(r).getPublic(!0, "hex") : ce(r);
  }
  return Ho.throwArgumentError("invalid public or private key", "key", "[REDACTED]");
}
const xm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SigningKey: pn,
  recoverPublicKey: nf,
  computePublicKey: xi
}, Symbol.toStringTag, { value: "Module" })), ym = "transactions/5.7.0", kt = new V(ym);
var zo;
(function(t) {
  t[t.legacy = 0] = "legacy", t[t.eip2930 = 1] = "eip2930", t[t.eip1559 = 2] = "eip1559";
})(zo || (zo = {}));
function yi(t) {
  return t === "0x" ? null : at(t);
}
function It(t) {
  return t === "0x" ? bd : de.from(t);
}
const vm = [
  { name: "nonce", maxLength: 32, numeric: !0 },
  { name: "gasPrice", maxLength: 32, numeric: !0 },
  { name: "gasLimit", maxLength: 32, numeric: !0 },
  { name: "to", length: 20 },
  { name: "value", maxLength: 32, numeric: !0 },
  { name: "data" }
], Am = {
  chainId: !0,
  data: !0,
  gasLimit: !0,
  gasPrice: !0,
  nonce: !0,
  to: !0,
  type: !0,
  value: !0
};
function sn(t) {
  const e = xi(t);
  return at(Vr(Ge(Vr(e, 1)), 12));
}
function Wa(t, e) {
  return sn(nf(ae(t), e));
}
function Lt(t, e) {
  const r = Sr(de.from(t).toHexString());
  return r.length > 32 && kt.throwArgumentError("invalid length for " + e, "transaction:" + e, t), r;
}
function xo(t, e) {
  return {
    address: at(t),
    storageKeys: (e || []).map((r, n) => (Ea(r) !== 32 && kt.throwArgumentError("invalid access list storageKey", `accessList[${t}:${n}]`, r), r.toLowerCase()))
  };
}
function Ha(t) {
  if (Array.isArray(t))
    return t.map((r, n) => Array.isArray(r) ? (r.length > 2 && kt.throwArgumentError("access list expected to be [ address, storageKeys[] ]", `value[${n}]`, r), xo(r[0], r[1])) : xo(r.address, r.storageKeys));
  const e = Object.keys(t).map((r) => {
    const n = t[r].reduce((a, s) => (a[s] = !0, a), {});
    return xo(r, Object.keys(n).sort());
  });
  return e.sort((r, n) => r.address.localeCompare(n.address)), e;
}
function af(t) {
  return Ha(t).map((e) => [e.address, e.storageKeys]);
}
function sf(t, e) {
  if (t.gasPrice != null) {
    const n = de.from(t.gasPrice), a = de.from(t.maxFeePerGas || 0);
    n.eq(a) || kt.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas", "tx", {
      gasPrice: n,
      maxFeePerGas: a
    });
  }
  const r = [
    Lt(t.chainId || 0, "chainId"),
    Lt(t.nonce || 0, "nonce"),
    Lt(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
    Lt(t.maxFeePerGas || 0, "maxFeePerGas"),
    Lt(t.gasLimit || 0, "gasLimit"),
    t.to != null ? at(t.to) : "0x",
    Lt(t.value || 0, "value"),
    t.data || "0x",
    af(t.accessList || [])
  ];
  if (e) {
    const n = Sn(e);
    r.push(Lt(n.recoveryParam, "recoveryParam")), r.push(Sr(n.r)), r.push(Sr(n.s));
  }
  return an(["0x02", An(r)]);
}
function of(t, e) {
  const r = [
    Lt(t.chainId || 0, "chainId"),
    Lt(t.nonce || 0, "nonce"),
    Lt(t.gasPrice || 0, "gasPrice"),
    Lt(t.gasLimit || 0, "gasLimit"),
    t.to != null ? at(t.to) : "0x",
    Lt(t.value || 0, "value"),
    t.data || "0x",
    af(t.accessList || [])
  ];
  if (e) {
    const n = Sn(e);
    r.push(Lt(n.recoveryParam, "recoveryParam")), r.push(Sr(n.r)), r.push(Sr(n.s));
  }
  return an(["0x01", An(r)]);
}
function wm(t, e) {
  rd(t, Am);
  const r = [];
  vm.forEach(function(o) {
    let i = t[o.name] || [];
    const f = {};
    o.numeric && (f.hexPad = "left"), i = ae(ce(i, f)), o.length && i.length !== o.length && i.length > 0 && kt.throwArgumentError("invalid length for " + o.name, "transaction:" + o.name, i), o.maxLength && (i = Sr(i), i.length > o.maxLength && kt.throwArgumentError("invalid length for " + o.name, "transaction:" + o.name, i)), r.push(ce(i));
  });
  let n = 0;
  if (t.chainId != null ? (n = t.chainId, typeof n != "number" && kt.throwArgumentError("invalid transaction.chainId", "transaction", t)) : e && !Oa(e) && e.v > 28 && (n = Math.floor((e.v - 35) / 2)), n !== 0 && (r.push(ce(n)), r.push("0x"), r.push("0x")), !e)
    return An(r);
  const a = Sn(e);
  let s = 27 + a.recoveryParam;
  return n !== 0 ? (r.pop(), r.pop(), r.pop(), s += n * 2 + 8, a.v > 28 && a.v !== s && kt.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", e)) : a.v !== s && kt.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", e), r.push(ce(s)), r.push(Sr(ae(a.r))), r.push(Sr(ae(a.s))), An(r);
}
function $o(t, e) {
  if (t.type == null || t.type === 0)
    return t.accessList != null && kt.throwArgumentError("untyped transactions do not support accessList; include type: 1", "transaction", t), wm(t, e);
  switch (t.type) {
    case 1:
      return of(t, e);
    case 2:
      return sf(t, e);
  }
  return kt.throwError(`unsupported transaction type: ${t.type}`, V.errors.UNSUPPORTED_OPERATION, {
    operation: "serializeTransaction",
    transactionType: t.type
  });
}
function cf(t, e, r) {
  try {
    const n = It(e[0]).toNumber();
    if (n !== 0 && n !== 1)
      throw new Error("bad recid");
    t.v = n;
  } catch {
    kt.throwArgumentError("invalid v for transaction type: 1", "v", e[0]);
  }
  t.r = xt(e[1], 32), t.s = xt(e[2], 32);
  try {
    const n = Ge(r(t));
    t.from = Wa(n, { r: t.r, s: t.s, recoveryParam: t.v });
  } catch {
  }
}
function Cm(t) {
  const e = Ds(t.slice(1));
  e.length !== 9 && e.length !== 12 && kt.throwArgumentError("invalid component count for transaction type: 2", "payload", ce(t));
  const r = It(e[2]), n = It(e[3]), a = {
    type: 2,
    chainId: It(e[0]).toNumber(),
    nonce: It(e[1]).toNumber(),
    maxPriorityFeePerGas: r,
    maxFeePerGas: n,
    gasPrice: null,
    gasLimit: It(e[4]),
    to: yi(e[5]),
    value: It(e[6]),
    data: e[7],
    accessList: Ha(e[8])
  };
  return e.length === 9 || (a.hash = Ge(t), cf(a, e.slice(9), sf)), a;
}
function Em(t) {
  const e = Ds(t.slice(1));
  e.length !== 8 && e.length !== 11 && kt.throwArgumentError("invalid component count for transaction type: 1", "payload", ce(t));
  const r = {
    type: 1,
    chainId: It(e[0]).toNumber(),
    nonce: It(e[1]).toNumber(),
    gasPrice: It(e[2]),
    gasLimit: It(e[3]),
    to: yi(e[4]),
    value: It(e[5]),
    data: e[6],
    accessList: Ha(e[7])
  };
  return e.length === 8 || (r.hash = Ge(t), cf(r, e.slice(8), of)), r;
}
function Im(t) {
  const e = Ds(t);
  e.length !== 9 && e.length !== 6 && kt.throwArgumentError("invalid raw transaction", "rawTransaction", t);
  const r = {
    nonce: It(e[0]).toNumber(),
    gasPrice: It(e[1]),
    gasLimit: It(e[2]),
    to: yi(e[3]),
    value: It(e[4]),
    data: e[5],
    chainId: 0
  };
  if (e.length === 6)
    return r;
  try {
    r.v = de.from(e[6]).toNumber();
  } catch {
    return r;
  }
  if (r.r = xt(e[7], 32), r.s = xt(e[8], 32), de.from(r.r).isZero() && de.from(r.s).isZero())
    r.chainId = r.v, r.v = 0;
  else {
    r.chainId = Math.floor((r.v - 35) / 2), r.chainId < 0 && (r.chainId = 0);
    let n = r.v - 27;
    const a = e.slice(0, 6);
    r.chainId !== 0 && (a.push(ce(r.chainId)), a.push("0x"), a.push("0x"), n -= r.chainId * 2 + 8);
    const s = Ge(An(a));
    try {
      r.from = Wa(s, { r: ce(r.r), s: ce(r.s), recoveryParam: n });
    } catch {
    }
    r.hash = Ge(t);
  }
  return r.type = null, r;
}
function km(t) {
  const e = ae(t);
  if (e[0] > 127)
    return Im(e);
  switch (e[0]) {
    case 1:
      return Em(e);
    case 2:
      return Cm(e);
  }
  return kt.throwError(`unsupported transaction type: ${e[0]}`, V.errors.UNSUPPORTED_OPERATION, {
    operation: "parseTransaction",
    transactionType: e[0]
  });
}
const Sm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get TransactionTypes() {
    return zo;
  },
  computeAddress: sn,
  recoverAddress: Wa,
  accessListify: Ha,
  serialize: $o,
  parse: km
}, Symbol.toStringTag, { value: "Module" })), Dm = "contracts/5.7.0";
var Cn = globalThis && globalThis.__awaiter || function(t, e, r, n) {
  function a(s) {
    return s instanceof r ? s : new r(function(o) {
      o(s);
    });
  }
  return new (r || (r = Promise))(function(s, o) {
    function i(h) {
      try {
        u(n.next(h));
      } catch (g) {
        o(g);
      }
    }
    function f(h) {
      try {
        u(n.throw(h));
      } catch (g) {
        o(g);
      }
    }
    function u(h) {
      h.done ? s(h.value) : a(h.value).then(i, f);
    }
    u((n = n.apply(t, e || [])).next());
  });
};
const pt = new V(Dm);
function Cs(t, e) {
  return Cn(this, void 0, void 0, function* () {
    const r = yield e;
    typeof r != "string" && pt.throwArgumentError("invalid address or ENS name", "name", r);
    try {
      return at(r);
    } catch {
    }
    t || pt.throwError("a provider or signer is needed to resolve ENS names", V.errors.UNSUPPORTED_OPERATION, {
      operation: "resolveName"
    });
    const n = yield t.resolveName(r);
    return n == null && pt.throwArgumentError("resolver or addr is not configured for ENS name", "name", r), n;
  });
}
function ds(t, e, r) {
  return Cn(this, void 0, void 0, function* () {
    return Array.isArray(r) ? yield Promise.all(r.map((n, a) => ds(t, Array.isArray(e) ? e[a] : e[n.name], n))) : r.type === "address" ? yield Cs(t, e) : r.type === "tuple" ? yield ds(t, e, r.components) : r.baseType === "array" ? Array.isArray(e) ? yield Promise.all(e.map((n) => ds(t, n, r.arrayChildren))) : Promise.reject(pt.makeError("invalid value for array", V.errors.INVALID_ARGUMENT, {
      argument: "value",
      value: e
    })) : e;
  });
}
function Us(t, e, r) {
  return Cn(this, void 0, void 0, function* () {
    let n = {};
    r.length === e.inputs.length + 1 && typeof r[r.length - 1] == "object" && (n = Ht(r.pop())), pt.checkArgumentCount(r.length, e.inputs.length, "passed to contract"), t.signer ? n.from ? n.from = Er({
      override: Cs(t.signer, n.from),
      signer: t.signer.getAddress()
    }).then((u) => Cn(this, void 0, void 0, function* () {
      return at(u.signer) !== u.override && pt.throwError("Contract with a Signer cannot override from", V.errors.UNSUPPORTED_OPERATION, {
        operation: "overrides.from"
      }), u.override;
    })) : n.from = t.signer.getAddress() : n.from && (n.from = Cs(t.provider, n.from));
    const a = yield Er({
      args: ds(t.signer || t.provider, r, e.inputs),
      address: t.resolvedAddress,
      overrides: Er(n) || {}
    }), s = t.interface.encodeFunctionData(e, a.args), o = {
      data: s,
      to: a.address
    }, i = a.overrides;
    if (i.nonce != null && (o.nonce = de.from(i.nonce).toNumber()), i.gasLimit != null && (o.gasLimit = de.from(i.gasLimit)), i.gasPrice != null && (o.gasPrice = de.from(i.gasPrice)), i.maxFeePerGas != null && (o.maxFeePerGas = de.from(i.maxFeePerGas)), i.maxPriorityFeePerGas != null && (o.maxPriorityFeePerGas = de.from(i.maxPriorityFeePerGas)), i.from != null && (o.from = i.from), i.type != null && (o.type = i.type), i.accessList != null && (o.accessList = Ha(i.accessList)), o.gasLimit == null && e.gas != null) {
      let u = 21e3;
      const h = ae(s);
      for (let g = 0; g < h.length; g++)
        u += 4, h[g] && (u += 64);
      o.gasLimit = de.from(e.gas).add(u);
    }
    if (i.value) {
      const u = de.from(i.value);
      !u.isZero() && !e.payable && pt.throwError("non-payable method cannot override value", V.errors.UNSUPPORTED_OPERATION, {
        operation: "overrides.value",
        value: n.value
      }), o.value = u;
    }
    i.customData && (o.customData = Ht(i.customData)), i.ccipReadEnabled && (o.ccipReadEnabled = !!i.ccipReadEnabled), delete n.nonce, delete n.gasLimit, delete n.gasPrice, delete n.from, delete n.value, delete n.type, delete n.accessList, delete n.maxFeePerGas, delete n.maxPriorityFeePerGas, delete n.customData, delete n.ccipReadEnabled;
    const f = Object.keys(n).filter((u) => n[u] != null);
    return f.length && pt.throwError(`cannot override ${f.map((u) => JSON.stringify(u)).join(",")}`, V.errors.UNSUPPORTED_OPERATION, {
      operation: "overrides",
      overrides: f
    }), o;
  });
}
function Bm(t, e) {
  return function(...r) {
    return Us(t, e, r);
  };
}
function Fm(t, e) {
  const r = t.signer || t.provider;
  return function(...n) {
    return Cn(this, void 0, void 0, function* () {
      r || pt.throwError("estimate require a provider or signer", V.errors.UNSUPPORTED_OPERATION, {
        operation: "estimateGas"
      });
      const a = yield Us(t, e, n);
      return yield r.estimateGas(a);
    });
  };
}
function Rm(t, e) {
  const r = e.wait.bind(e);
  e.wait = (n) => r(n).then((a) => (a.events = a.logs.map((s) => {
    let o = yn(s), i = null;
    try {
      i = t.interface.parseLog(s);
    } catch {
    }
    return i && (o.args = i.args, o.decode = (f, u) => t.interface.decodeEventLog(i.eventFragment, f, u), o.event = i.name, o.eventSignature = i.signature), o.removeListener = () => t.provider, o.getBlock = () => t.provider.getBlock(a.blockHash), o.getTransaction = () => t.provider.getTransaction(a.transactionHash), o.getTransactionReceipt = () => Promise.resolve(a), o;
  }), a));
}
function df(t, e, r) {
  const n = t.signer || t.provider;
  return function(...a) {
    return Cn(this, void 0, void 0, function* () {
      let s;
      if (a.length === e.inputs.length + 1 && typeof a[a.length - 1] == "object") {
        const f = Ht(a.pop());
        f.blockTag != null && (s = yield f.blockTag), delete f.blockTag, a.push(f);
      }
      t.deployTransaction != null && (yield t._deployed(s));
      const o = yield Us(t, e, a), i = yield n.call(o, s);
      try {
        let f = t.interface.decodeFunctionResult(e, i);
        return r && e.outputs.length === 1 && (f = f[0]), f;
      } catch (f) {
        throw f.code === V.errors.CALL_EXCEPTION && (f.address = t.address, f.args = a, f.transaction = o), f;
      }
    });
  };
}
function _m(t, e) {
  return function(...r) {
    return Cn(this, void 0, void 0, function* () {
      t.signer || pt.throwError("sending a transaction requires a signer", V.errors.UNSUPPORTED_OPERATION, {
        operation: "sendTransaction"
      }), t.deployTransaction != null && (yield t._deployed());
      const n = yield Us(t, e, r), a = yield t.signer.sendTransaction(n);
      return Rm(t, a), a;
    });
  };
}
function jc(t, e, r) {
  return e.constant ? df(t, e, r) : _m(t, e);
}
function ff(t) {
  return t.address && (t.topics == null || t.topics.length === 0) ? "*" : (t.address || "*") + "@" + (t.topics ? t.topics.map((e) => Array.isArray(e) ? e.join("|") : e).join(":") : "");
}
class Fa {
  constructor(e, r) {
    ne(this, "tag", e), ne(this, "filter", r), this._listeners = [];
  }
  addListener(e, r) {
    this._listeners.push({ listener: e, once: r });
  }
  removeListener(e) {
    let r = !1;
    this._listeners = this._listeners.filter((n) => r || n.listener !== e ? !0 : (r = !0, !1));
  }
  removeAllListeners() {
    this._listeners = [];
  }
  listeners() {
    return this._listeners.map((e) => e.listener);
  }
  listenerCount() {
    return this._listeners.length;
  }
  run(e) {
    const r = this.listenerCount();
    return this._listeners = this._listeners.filter((n) => {
      const a = e.slice();
      return setTimeout(() => {
        n.listener.apply(this, a);
      }, 0), !n.once;
    }), r;
  }
  prepareEvent(e) {
  }
  getEmit(e) {
    return [e];
  }
}
class Tm extends Fa {
  constructor() {
    super("error", null);
  }
}
class Wc extends Fa {
  constructor(e, r, n, a) {
    const s = {
      address: e
    };
    let o = r.getEventTopic(n);
    a ? (o !== a[0] && pt.throwArgumentError("topic mismatch", "topics", a), s.topics = a.slice()) : s.topics = [o], super(ff(s), s), ne(this, "address", e), ne(this, "interface", r), ne(this, "fragment", n);
  }
  prepareEvent(e) {
    super.prepareEvent(e), e.event = this.fragment.name, e.eventSignature = this.fragment.format(), e.decode = (r, n) => this.interface.decodeEventLog(this.fragment, r, n);
    try {
      e.args = this.interface.decodeEventLog(this.fragment, e.data, e.topics);
    } catch (r) {
      e.args = null, e.decodeError = r;
    }
  }
  getEmit(e) {
    const r = id(e.args);
    if (r.length)
      throw r[0].error;
    const n = (e.args || []).slice();
    return n.push(e), n;
  }
}
class Hc extends Fa {
  constructor(e, r) {
    super("*", { address: e }), ne(this, "address", e), ne(this, "interface", r);
  }
  prepareEvent(e) {
    super.prepareEvent(e);
    try {
      const r = this.interface.parseLog(e);
      e.event = r.name, e.eventSignature = r.signature, e.decode = (n, a) => this.interface.decodeEventLog(r.eventFragment, n, a), e.args = r.args;
    } catch {
    }
  }
}
class Mm {
  constructor(e, r, n) {
    ne(this, "interface", Pn(new.target, "getInterface")(r)), n == null ? (ne(this, "provider", null), ne(this, "signer", null)) : La.isSigner(n) ? (ne(this, "provider", n.provider || null), ne(this, "signer", n)) : Rs.isProvider(n) ? (ne(this, "provider", n), ne(this, "signer", null)) : pt.throwArgumentError("invalid signer or provider", "signerOrProvider", n), ne(this, "callStatic", {}), ne(this, "estimateGas", {}), ne(this, "functions", {}), ne(this, "populateTransaction", {}), ne(this, "filters", {});
    {
      const o = {};
      Object.keys(this.interface.events).forEach((i) => {
        const f = this.interface.events[i];
        ne(this.filters, i, (...u) => ({
          address: this.address,
          topics: this.interface.encodeFilterTopics(f, u)
        })), o[f.name] || (o[f.name] = []), o[f.name].push(i);
      }), Object.keys(o).forEach((i) => {
        const f = o[i];
        f.length === 1 ? ne(this.filters, i, this.filters[f[0]]) : pt.warn(`Duplicate definition of ${i} (${f.join(", ")})`);
      });
    }
    if (ne(this, "_runningEvents", {}), ne(this, "_wrappedEmits", {}), e == null && pt.throwArgumentError("invalid contract address or ENS name", "addressOrName", e), ne(this, "address", e), this.provider)
      ne(this, "resolvedAddress", Cs(this.provider, e));
    else
      try {
        ne(this, "resolvedAddress", Promise.resolve(at(e)));
      } catch {
        pt.throwError("provider is required to use ENS name as contract address", V.errors.UNSUPPORTED_OPERATION, {
          operation: "new Contract"
        });
      }
    this.resolvedAddress.catch((o) => {
    });
    const a = {}, s = {};
    Object.keys(this.interface.functions).forEach((o) => {
      const i = this.interface.functions[o];
      if (s[o]) {
        pt.warn(`Duplicate ABI entry for ${JSON.stringify(o)}`);
        return;
      }
      s[o] = !0;
      {
        const f = i.name;
        a[`%${f}`] || (a[`%${f}`] = []), a[`%${f}`].push(o);
      }
      this[o] == null && ne(this, o, jc(this, i, !0)), this.functions[o] == null && ne(this.functions, o, jc(this, i, !1)), this.callStatic[o] == null && ne(this.callStatic, o, df(this, i, !0)), this.populateTransaction[o] == null && ne(this.populateTransaction, o, Bm(this, i)), this.estimateGas[o] == null && ne(this.estimateGas, o, Fm(this, i));
    }), Object.keys(a).forEach((o) => {
      const i = a[o];
      if (i.length > 1)
        return;
      o = o.substring(1);
      const f = i[0];
      try {
        this[o] == null && ne(this, o, this[f]);
      } catch {
      }
      this.functions[o] == null && ne(this.functions, o, this.functions[f]), this.callStatic[o] == null && ne(this.callStatic, o, this.callStatic[f]), this.populateTransaction[o] == null && ne(this.populateTransaction, o, this.populateTransaction[f]), this.estimateGas[o] == null && ne(this.estimateGas, o, this.estimateGas[f]);
    });
  }
  static getContractAddress(e) {
    return ud(e);
  }
  static getInterface(e) {
    return Oo.isInterface(e) ? e : new Oo(e);
  }
  deployed() {
    return this._deployed();
  }
  _deployed(e) {
    return this._deployedPromise || (this.deployTransaction ? this._deployedPromise = this.deployTransaction.wait().then(() => this) : this._deployedPromise = this.provider.getCode(this.address, e).then((r) => (r === "0x" && pt.throwError("contract not deployed", V.errors.UNSUPPORTED_OPERATION, {
      contractAddress: this.address,
      operation: "getDeployed"
    }), this))), this._deployedPromise;
  }
  fallback(e) {
    this.signer || pt.throwError("sending a transactions require a signer", V.errors.UNSUPPORTED_OPERATION, { operation: "sendTransaction(fallback)" });
    const r = Ht(e || {});
    return ["from", "to"].forEach(function(n) {
      r[n] != null && pt.throwError("cannot override " + n, V.errors.UNSUPPORTED_OPERATION, { operation: n });
    }), r.to = this.resolvedAddress, this.deployed().then(() => this.signer.sendTransaction(r));
  }
  connect(e) {
    typeof e == "string" && (e = new mi(e, this.provider));
    const r = new this.constructor(this.address, this.interface, e);
    return this.deployTransaction && ne(r, "deployTransaction", this.deployTransaction), r;
  }
  attach(e) {
    return new this.constructor(e, this.interface, this.signer || this.provider);
  }
  static isIndexed(e) {
    return vs.isIndexed(e);
  }
  _normalizeRunningEvent(e) {
    return this._runningEvents[e.tag] ? this._runningEvents[e.tag] : e;
  }
  _getRunningEvent(e) {
    if (typeof e == "string") {
      if (e === "error")
        return this._normalizeRunningEvent(new Tm());
      if (e === "event")
        return this._normalizeRunningEvent(new Fa("event", null));
      if (e === "*")
        return this._normalizeRunningEvent(new Hc(this.address, this.interface));
      const r = this.interface.getEvent(e);
      return this._normalizeRunningEvent(new Wc(this.address, this.interface, r));
    }
    if (e.topics && e.topics.length > 0) {
      try {
        const n = e.topics[0];
        if (typeof n != "string")
          throw new Error("invalid topic");
        const a = this.interface.getEvent(n);
        return this._normalizeRunningEvent(new Wc(this.address, this.interface, a, e.topics));
      } catch {
      }
      const r = {
        address: this.address,
        topics: e.topics
      };
      return this._normalizeRunningEvent(new Fa(ff(r), r));
    }
    return this._normalizeRunningEvent(new Hc(this.address, this.interface));
  }
  _checkRunningEvents(e) {
    if (e.listenerCount() === 0) {
      delete this._runningEvents[e.tag];
      const r = this._wrappedEmits[e.tag];
      r && e.filter && (this.provider.off(e.filter, r), delete this._wrappedEmits[e.tag]);
    }
  }
  _wrapEvent(e, r, n) {
    const a = yn(r);
    return a.removeListener = () => {
      !n || (e.removeListener(n), this._checkRunningEvents(e));
    }, a.getBlock = () => this.provider.getBlock(r.blockHash), a.getTransaction = () => this.provider.getTransaction(r.transactionHash), a.getTransactionReceipt = () => this.provider.getTransactionReceipt(r.transactionHash), e.prepareEvent(a), a;
  }
  _addEventListener(e, r, n) {
    if (this.provider || pt.throwError("events require a provider or a signer with a provider", V.errors.UNSUPPORTED_OPERATION, { operation: "once" }), e.addListener(r, n), this._runningEvents[e.tag] = e, !this._wrappedEmits[e.tag]) {
      const a = (s) => {
        let o = this._wrapEvent(e, s, r);
        if (o.decodeError == null)
          try {
            const i = e.getEmit(o);
            this.emit(e.filter, ...i);
          } catch (i) {
            o.decodeError = i.error;
          }
        e.filter != null && this.emit("event", o), o.decodeError != null && this.emit("error", o.decodeError, o);
      };
      this._wrappedEmits[e.tag] = a, e.filter != null && this.provider.on(e.filter, a);
    }
  }
  queryFilter(e, r, n) {
    const a = this._getRunningEvent(e), s = Ht(a.filter);
    return typeof r == "string" && ft(r, 32) ? (n != null && pt.throwArgumentError("cannot specify toBlock with blockhash", "toBlock", n), s.blockHash = r) : (s.fromBlock = r != null ? r : 0, s.toBlock = n != null ? n : "latest"), this.provider.getLogs(s).then((o) => o.map((i) => this._wrapEvent(a, i, null)));
  }
  on(e, r) {
    return this._addEventListener(this._getRunningEvent(e), r, !1), this;
  }
  once(e, r) {
    return this._addEventListener(this._getRunningEvent(e), r, !0), this;
  }
  emit(e, ...r) {
    if (!this.provider)
      return !1;
    const n = this._getRunningEvent(e), a = n.run(r) > 0;
    return this._checkRunningEvents(n), a;
  }
  listenerCount(e) {
    return this.provider ? e == null ? Object.keys(this._runningEvents).reduce((r, n) => r + this._runningEvents[n].listenerCount(), 0) : this._getRunningEvent(e).listenerCount() : 0;
  }
  listeners(e) {
    if (!this.provider)
      return [];
    if (e == null) {
      const r = [];
      for (let n in this._runningEvents)
        this._runningEvents[n].listeners().forEach((a) => {
          r.push(a);
        });
      return r;
    }
    return this._getRunningEvent(e).listeners();
  }
  removeAllListeners(e) {
    if (!this.provider)
      return this;
    if (e == null) {
      for (const n in this._runningEvents) {
        const a = this._runningEvents[n];
        a.removeAllListeners(), this._checkRunningEvents(a);
      }
      return this;
    }
    const r = this._getRunningEvent(e);
    return r.removeAllListeners(), this._checkRunningEvents(r), this;
  }
  off(e, r) {
    if (!this.provider)
      return this;
    const n = this._getRunningEvent(e);
    return n.removeListener(r), this._checkRunningEvents(n), this;
  }
  removeListener(e, r) {
    return this.off(e, r);
  }
}
class Um extends Mm {
}
class vi {
  constructor(e) {
    ne(this, "alphabet", e), ne(this, "base", e.length), ne(this, "_alphabetMap", {}), ne(this, "_leader", e.charAt(0));
    for (let r = 0; r < e.length; r++)
      this._alphabetMap[e.charAt(r)] = r;
  }
  encode(e) {
    let r = ae(e);
    if (r.length === 0)
      return "";
    let n = [0];
    for (let s = 0; s < r.length; ++s) {
      let o = r[s];
      for (let i = 0; i < n.length; ++i)
        o += n[i] << 8, n[i] = o % this.base, o = o / this.base | 0;
      for (; o > 0; )
        n.push(o % this.base), o = o / this.base | 0;
    }
    let a = "";
    for (let s = 0; r[s] === 0 && s < r.length - 1; ++s)
      a += this._leader;
    for (let s = n.length - 1; s >= 0; --s)
      a += this.alphabet[n[s]];
    return a;
  }
  decode(e) {
    if (typeof e != "string")
      throw new TypeError("Expected String");
    let r = [];
    if (e.length === 0)
      return new Uint8Array(r);
    r.push(0);
    for (let n = 0; n < e.length; n++) {
      let a = this._alphabetMap[e[n]];
      if (a === void 0)
        throw new Error("Non-base" + this.base + " character");
      let s = a;
      for (let o = 0; o < r.length; ++o)
        s += r[o] * this.base, r[o] = s & 255, s >>= 8;
      for (; s > 0; )
        r.push(s & 255), s >>= 8;
    }
    for (let n = 0; e[n] === this._leader && n < e.length - 1; ++n)
      r.push(0);
    return ae(new Uint8Array(r.reverse()));
  }
}
const Pm = new vi("abcdefghijklmnopqrstuvwxyz234567"), Ai = new vi("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"), Om = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseX: vi,
  Base32: Pm,
  Base58: Ai
}, Symbol.toStringTag, { value: "Module" }));
var qn;
(function(t) {
  t.sha256 = "sha256", t.sha512 = "sha512";
})(qn || (qn = {}));
const Nm = "sha2/5.7.0", Lm = new V(Nm);
function lf(t) {
  return "0x" + Bt.ripemd160().update(ae(t)).digest("hex");
}
function En(t) {
  return "0x" + Bt.sha256().update(ae(t)).digest("hex");
}
function jm(t) {
  return "0x" + Bt.sha512().update(ae(t)).digest("hex");
}
function Ra(t, e, r) {
  return qn[t] || Lm.throwError("unsupported algorithm " + t, V.errors.UNSUPPORTED_OPERATION, {
    operation: "hmac",
    algorithm: t
  }), "0x" + Bt.hmac(Bt[t], ae(e)).update(ae(r)).digest("hex");
}
const Wm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  computeHmac: Ra,
  ripemd160: lf,
  sha256: En,
  sha512: jm,
  get SupportedAlgorithm() {
    return qn;
  }
}, Symbol.toStringTag, { value: "Module" }));
function wi(t, e, r, n, a) {
  t = ae(t), e = ae(e);
  let s, o = 1;
  const i = new Uint8Array(n), f = new Uint8Array(e.length + 4);
  f.set(e);
  let u, h;
  for (let g = 1; g <= o; g++) {
    f[e.length] = g >> 24 & 255, f[e.length + 1] = g >> 16 & 255, f[e.length + 2] = g >> 8 & 255, f[e.length + 3] = g & 255;
    let C = ae(Ra(a, t, f));
    s || (s = C.length, h = new Uint8Array(s), o = Math.ceil(n / s), u = n - (o - 1) * s), h.set(C);
    for (let D = 1; D < r; D++) {
      C = ae(Ra(a, t, C));
      for (let x = 0; x < s; x++)
        h[x] ^= C[x];
    }
    const E = (g - 1) * s, S = g === o ? u : s;
    i.set(ae(h).slice(0, S), E);
  }
  return ce(i);
}
const Hm = "wordlists/5.7.0", zm = new V(Hm);
class za {
  constructor(e) {
    zm.checkAbstract(new.target, za), ne(this, "locale", e);
  }
  split(e) {
    return e.toLowerCase().split(/ +/g);
  }
  join(e) {
    return e.join(" ");
  }
  static check(e) {
    const r = [];
    for (let n = 0; n < 2048; n++) {
      const a = e.getWord(n);
      if (n !== e.getWordIndex(a))
        return "0x";
      r.push(a);
    }
    return rn(r.join(`
`) + `
`);
  }
  static register(e, r) {
    r || (r = e.locale);
  }
}
const $m = "AbandonAbilityAbleAboutAboveAbsentAbsorbAbstractAbsurdAbuseAccessAccidentAccountAccuseAchieveAcidAcousticAcquireAcrossActActionActorActressActualAdaptAddAddictAddressAdjustAdmitAdultAdvanceAdviceAerobicAffairAffordAfraidAgainAgeAgentAgreeAheadAimAirAirportAisleAlarmAlbumAlcoholAlertAlienAllAlleyAllowAlmostAloneAlphaAlreadyAlsoAlterAlwaysAmateurAmazingAmongAmountAmusedAnalystAnchorAncientAngerAngleAngryAnimalAnkleAnnounceAnnualAnotherAnswerAntennaAntiqueAnxietyAnyApartApologyAppearAppleApproveAprilArchArcticAreaArenaArgueArmArmedArmorArmyAroundArrangeArrestArriveArrowArtArtefactArtistArtworkAskAspectAssaultAssetAssistAssumeAsthmaAthleteAtomAttackAttendAttitudeAttractAuctionAuditAugustAuntAuthorAutoAutumnAverageAvocadoAvoidAwakeAwareAwayAwesomeAwfulAwkwardAxisBabyBachelorBaconBadgeBagBalanceBalconyBallBambooBananaBannerBarBarelyBargainBarrelBaseBasicBasketBattleBeachBeanBeautyBecauseBecomeBeefBeforeBeginBehaveBehindBelieveBelowBeltBenchBenefitBestBetrayBetterBetweenBeyondBicycleBidBikeBindBiologyBirdBirthBitterBlackBladeBlameBlanketBlastBleakBlessBlindBloodBlossomBlouseBlueBlurBlushBoardBoatBodyBoilBombBoneBonusBookBoostBorderBoringBorrowBossBottomBounceBoxBoyBracketBrainBrandBrassBraveBreadBreezeBrickBridgeBriefBrightBringBriskBroccoliBrokenBronzeBroomBrotherBrownBrushBubbleBuddyBudgetBuffaloBuildBulbBulkBulletBundleBunkerBurdenBurgerBurstBusBusinessBusyButterBuyerBuzzCabbageCabinCableCactusCageCakeCallCalmCameraCampCanCanalCancelCandyCannonCanoeCanvasCanyonCapableCapitalCaptainCarCarbonCardCargoCarpetCarryCartCaseCashCasinoCastleCasualCatCatalogCatchCategoryCattleCaughtCauseCautionCaveCeilingCeleryCementCensusCenturyCerealCertainChairChalkChampionChangeChaosChapterChargeChaseChatCheapCheckCheeseChefCherryChestChickenChiefChildChimneyChoiceChooseChronicChuckleChunkChurnCigarCinnamonCircleCitizenCityCivilClaimClapClarifyClawClayCleanClerkCleverClickClientCliffClimbClinicClipClockClogCloseClothCloudClownClubClumpClusterClutchCoachCoastCoconutCodeCoffeeCoilCoinCollectColorColumnCombineComeComfortComicCommonCompanyConcertConductConfirmCongressConnectConsiderControlConvinceCookCoolCopperCopyCoralCoreCornCorrectCostCottonCouchCountryCoupleCourseCousinCoverCoyoteCrackCradleCraftCramCraneCrashCraterCrawlCrazyCreamCreditCreekCrewCricketCrimeCrispCriticCropCrossCrouchCrowdCrucialCruelCruiseCrumbleCrunchCrushCryCrystalCubeCultureCupCupboardCuriousCurrentCurtainCurveCushionCustomCuteCycleDadDamageDampDanceDangerDaringDashDaughterDawnDayDealDebateDebrisDecadeDecemberDecideDeclineDecorateDecreaseDeerDefenseDefineDefyDegreeDelayDeliverDemandDemiseDenialDentistDenyDepartDependDepositDepthDeputyDeriveDescribeDesertDesignDeskDespairDestroyDetailDetectDevelopDeviceDevoteDiagramDialDiamondDiaryDiceDieselDietDifferDigitalDignityDilemmaDinnerDinosaurDirectDirtDisagreeDiscoverDiseaseDishDismissDisorderDisplayDistanceDivertDivideDivorceDizzyDoctorDocumentDogDollDolphinDomainDonateDonkeyDonorDoorDoseDoubleDoveDraftDragonDramaDrasticDrawDreamDressDriftDrillDrinkDripDriveDropDrumDryDuckDumbDuneDuringDustDutchDutyDwarfDynamicEagerEagleEarlyEarnEarthEasilyEastEasyEchoEcologyEconomyEdgeEditEducateEffortEggEightEitherElbowElderElectricElegantElementElephantElevatorEliteElseEmbarkEmbodyEmbraceEmergeEmotionEmployEmpowerEmptyEnableEnactEndEndlessEndorseEnemyEnergyEnforceEngageEngineEnhanceEnjoyEnlistEnoughEnrichEnrollEnsureEnterEntireEntryEnvelopeEpisodeEqualEquipEraEraseErodeErosionErrorEruptEscapeEssayEssenceEstateEternalEthicsEvidenceEvilEvokeEvolveExactExampleExcessExchangeExciteExcludeExcuseExecuteExerciseExhaustExhibitExileExistExitExoticExpandExpectExpireExplainExposeExpressExtendExtraEyeEyebrowFabricFaceFacultyFadeFaintFaithFallFalseFameFamilyFamousFanFancyFantasyFarmFashionFatFatalFatherFatigueFaultFavoriteFeatureFebruaryFederalFeeFeedFeelFemaleFenceFestivalFetchFeverFewFiberFictionFieldFigureFileFilmFilterFinalFindFineFingerFinishFireFirmFirstFiscalFishFitFitnessFixFlagFlameFlashFlatFlavorFleeFlightFlipFloatFlockFloorFlowerFluidFlushFlyFoamFocusFogFoilFoldFollowFoodFootForceForestForgetForkFortuneForumForwardFossilFosterFoundFoxFragileFrameFrequentFreshFriendFringeFrogFrontFrostFrownFrozenFruitFuelFunFunnyFurnaceFuryFutureGadgetGainGalaxyGalleryGameGapGarageGarbageGardenGarlicGarmentGasGaspGateGatherGaugeGazeGeneralGeniusGenreGentleGenuineGestureGhostGiantGiftGiggleGingerGiraffeGirlGiveGladGlanceGlareGlassGlideGlimpseGlobeGloomGloryGloveGlowGlueGoatGoddessGoldGoodGooseGorillaGospelGossipGovernGownGrabGraceGrainGrantGrapeGrassGravityGreatGreenGridGriefGritGroceryGroupGrowGruntGuardGuessGuideGuiltGuitarGunGymHabitHairHalfHammerHamsterHandHappyHarborHardHarshHarvestHatHaveHawkHazardHeadHealthHeartHeavyHedgehogHeightHelloHelmetHelpHenHeroHiddenHighHillHintHipHireHistoryHobbyHockeyHoldHoleHolidayHollowHomeHoneyHoodHopeHornHorrorHorseHospitalHostHotelHourHoverHubHugeHumanHumbleHumorHundredHungryHuntHurdleHurryHurtHusbandHybridIceIconIdeaIdentifyIdleIgnoreIllIllegalIllnessImageImitateImmenseImmuneImpactImposeImproveImpulseInchIncludeIncomeIncreaseIndexIndicateIndoorIndustryInfantInflictInformInhaleInheritInitialInjectInjuryInmateInnerInnocentInputInquiryInsaneInsectInsideInspireInstallIntactInterestIntoInvestInviteInvolveIronIslandIsolateIssueItemIvoryJacketJaguarJarJazzJealousJeansJellyJewelJobJoinJokeJourneyJoyJudgeJuiceJumpJungleJuniorJunkJustKangarooKeenKeepKetchupKeyKickKidKidneyKindKingdomKissKitKitchenKiteKittenKiwiKneeKnifeKnockKnowLabLabelLaborLadderLadyLakeLampLanguageLaptopLargeLaterLatinLaughLaundryLavaLawLawnLawsuitLayerLazyLeaderLeafLearnLeaveLectureLeftLegLegalLegendLeisureLemonLendLengthLensLeopardLessonLetterLevelLiarLibertyLibraryLicenseLifeLiftLightLikeLimbLimitLinkLionLiquidListLittleLiveLizardLoadLoanLobsterLocalLockLogicLonelyLongLoopLotteryLoudLoungeLoveLoyalLuckyLuggageLumberLunarLunchLuxuryLyricsMachineMadMagicMagnetMaidMailMainMajorMakeMammalManManageMandateMangoMansionManualMapleMarbleMarchMarginMarineMarketMarriageMaskMassMasterMatchMaterialMathMatrixMatterMaximumMazeMeadowMeanMeasureMeatMechanicMedalMediaMelodyMeltMemberMemoryMentionMenuMercyMergeMeritMerryMeshMessageMetalMethodMiddleMidnightMilkMillionMimicMindMinimumMinorMinuteMiracleMirrorMiseryMissMistakeMixMixedMixtureMobileModelModifyMomMomentMonitorMonkeyMonsterMonthMoonMoralMoreMorningMosquitoMotherMotionMotorMountainMouseMoveMovieMuchMuffinMuleMultiplyMuscleMuseumMushroomMusicMustMutualMyselfMysteryMythNaiveNameNapkinNarrowNastyNationNatureNearNeckNeedNegativeNeglectNeitherNephewNerveNestNetNetworkNeutralNeverNewsNextNiceNightNobleNoiseNomineeNoodleNormalNorthNoseNotableNoteNothingNoticeNovelNowNuclearNumberNurseNutOakObeyObjectObligeObscureObserveObtainObviousOccurOceanOctoberOdorOffOfferOfficeOftenOilOkayOldOliveOlympicOmitOnceOneOnionOnlineOnlyOpenOperaOpinionOpposeOptionOrangeOrbitOrchardOrderOrdinaryOrganOrientOriginalOrphanOstrichOtherOutdoorOuterOutputOutsideOvalOvenOverOwnOwnerOxygenOysterOzonePactPaddlePagePairPalacePalmPandaPanelPanicPantherPaperParadeParentParkParrotPartyPassPatchPathPatientPatrolPatternPausePavePaymentPeacePeanutPearPeasantPelicanPenPenaltyPencilPeoplePepperPerfectPermitPersonPetPhonePhotoPhrasePhysicalPianoPicnicPicturePiecePigPigeonPillPilotPinkPioneerPipePistolPitchPizzaPlacePlanetPlasticPlatePlayPleasePledgePluckPlugPlungePoemPoetPointPolarPolePolicePondPonyPoolPopularPortionPositionPossiblePostPotatoPotteryPovertyPowderPowerPracticePraisePredictPreferPreparePresentPrettyPreventPricePridePrimaryPrintPriorityPrisonPrivatePrizeProblemProcessProduceProfitProgramProjectPromoteProofPropertyProsperProtectProudProvidePublicPuddingPullPulpPulsePumpkinPunchPupilPuppyPurchasePurityPurposePursePushPutPuzzlePyramidQualityQuantumQuarterQuestionQuickQuitQuizQuoteRabbitRaccoonRaceRackRadarRadioRailRainRaiseRallyRampRanchRandomRangeRapidRareRateRatherRavenRawRazorReadyRealReasonRebelRebuildRecallReceiveRecipeRecordRecycleReduceReflectReformRefuseRegionRegretRegularRejectRelaxReleaseReliefRelyRemainRememberRemindRemoveRenderRenewRentReopenRepairRepeatReplaceReportRequireRescueResembleResistResourceResponseResultRetireRetreatReturnReunionRevealReviewRewardRhythmRibRibbonRiceRichRideRidgeRifleRightRigidRingRiotRippleRiskRitualRivalRiverRoadRoastRobotRobustRocketRomanceRoofRookieRoomRoseRotateRoughRoundRouteRoyalRubberRudeRugRuleRunRunwayRuralSadSaddleSadnessSafeSailSaladSalmonSalonSaltSaluteSameSampleSandSatisfySatoshiSauceSausageSaveSayScaleScanScareScatterSceneSchemeSchoolScienceScissorsScorpionScoutScrapScreenScriptScrubSeaSearchSeasonSeatSecondSecretSectionSecuritySeedSeekSegmentSelectSellSeminarSeniorSenseSentenceSeriesServiceSessionSettleSetupSevenShadowShaftShallowShareShedShellSheriffShieldShiftShineShipShiverShockShoeShootShopShortShoulderShoveShrimpShrugShuffleShySiblingSickSideSiegeSightSignSilentSilkSillySilverSimilarSimpleSinceSingSirenSisterSituateSixSizeSkateSketchSkiSkillSkinSkirtSkullSlabSlamSleepSlenderSliceSlideSlightSlimSloganSlotSlowSlushSmallSmartSmileSmokeSmoothSnackSnakeSnapSniffSnowSoapSoccerSocialSockSodaSoftSolarSoldierSolidSolutionSolveSomeoneSongSoonSorrySortSoulSoundSoupSourceSouthSpaceSpareSpatialSpawnSpeakSpecialSpeedSpellSpendSphereSpiceSpiderSpikeSpinSpiritSplitSpoilSponsorSpoonSportSpotSpraySpreadSpringSpySquareSqueezeSquirrelStableStadiumStaffStageStairsStampStandStartStateStaySteakSteelStemStepStereoStickStillStingStockStomachStoneStoolStoryStoveStrategyStreetStrikeStrongStruggleStudentStuffStumbleStyleSubjectSubmitSubwaySuccessSuchSuddenSufferSugarSuggestSuitSummerSunSunnySunsetSuperSupplySupremeSureSurfaceSurgeSurpriseSurroundSurveySuspectSustainSwallowSwampSwapSwarmSwearSweetSwiftSwimSwingSwitchSwordSymbolSymptomSyrupSystemTableTackleTagTailTalentTalkTankTapeTargetTaskTasteTattooTaxiTeachTeamTellTenTenantTennisTentTermTestTextThankThatThemeThenTheoryThereTheyThingThisThoughtThreeThriveThrowThumbThunderTicketTideTigerTiltTimberTimeTinyTipTiredTissueTitleToastTobaccoTodayToddlerToeTogetherToiletTokenTomatoTomorrowToneTongueTonightToolToothTopTopicToppleTorchTornadoTortoiseTossTotalTouristTowardTowerTownToyTrackTradeTrafficTragicTrainTransferTrapTrashTravelTrayTreatTreeTrendTrialTribeTrickTriggerTrimTripTrophyTroubleTruckTrueTrulyTrumpetTrustTruthTryTubeTuitionTumbleTunaTunnelTurkeyTurnTurtleTwelveTwentyTwiceTwinTwistTwoTypeTypicalUglyUmbrellaUnableUnawareUncleUncoverUnderUndoUnfairUnfoldUnhappyUniformUniqueUnitUniverseUnknownUnlockUntilUnusualUnveilUpdateUpgradeUpholdUponUpperUpsetUrbanUrgeUsageUseUsedUsefulUselessUsualUtilityVacantVacuumVagueValidValleyValveVanVanishVaporVariousVastVaultVehicleVelvetVendorVentureVenueVerbVerifyVersionVeryVesselVeteranViableVibrantViciousVictoryVideoViewVillageVintageViolinVirtualVirusVisaVisitVisualVitalVividVocalVoiceVoidVolcanoVolumeVoteVoyageWageWagonWaitWalkWallWalnutWantWarfareWarmWarriorWashWaspWasteWaterWaveWayWealthWeaponWearWeaselWeatherWebWeddingWeekendWeirdWelcomeWestWetWhaleWhatWheatWheelWhenWhereWhipWhisperWideWidthWifeWildWillWinWindowWineWingWinkWinnerWinterWireWisdomWiseWishWitnessWolfWomanWonderWoodWoolWordWorkWorldWorryWorthWrapWreckWrestleWristWriteWrongYardYearYellowYouYoungYouthZebraZeroZoneZoo";
let va = null;
function zc(t) {
  if (va == null && (va = $m.replace(/([A-Z])/g, " $1").toLowerCase().substring(1).split(" "), za.check(t) !== "0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60"))
    throw va = null, new Error("BIP39 Wordlist for en (English) FAILED");
}
class Vm extends za {
  constructor() {
    super("en");
  }
  getWord(e) {
    return zc(this), va[e];
  }
  getWordIndex(e) {
    return zc(this), va.indexOf(e);
  }
}
const uf = new Vm();
za.register(uf);
const $c = {
  en: uf
}, Gm = "hdnode/5.7.0", _a = new V(Gm), Km = de.from("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), qm = At("Bitcoin seed"), Mn = 2147483648;
function hf(t) {
  return (1 << t) - 1 << 8 - t;
}
function Ym(t) {
  return (1 << t) - 1;
}
function Qa(t) {
  return xt(ce(t), 32);
}
function Vc(t) {
  return Ai.encode(gt([t, Vr(En(En(t)), 0, 4)]));
}
function Ci(t) {
  if (t == null)
    return $c.en;
  if (typeof t == "string") {
    const e = $c[t];
    return e == null && _a.throwArgumentError("unknown locale", "wordlist", t), e;
  }
  return t;
}
const Rn = {}, Yn = "m/44'/60'/0'/0/0";
class jt {
  constructor(e, r, n, a, s, o, i, f) {
    if (e !== Rn)
      throw new Error("HDNode constructor cannot be called directly");
    if (r) {
      const u = new pn(r);
      ne(this, "privateKey", u.privateKey), ne(this, "publicKey", u.compressedPublicKey);
    } else
      ne(this, "privateKey", null), ne(this, "publicKey", ce(n));
    ne(this, "parentFingerprint", a), ne(this, "fingerprint", Vr(lf(En(this.publicKey)), 0, 4)), ne(this, "address", sn(this.publicKey)), ne(this, "chainCode", s), ne(this, "index", o), ne(this, "depth", i), f == null ? (ne(this, "mnemonic", null), ne(this, "path", null)) : typeof f == "string" ? (ne(this, "mnemonic", null), ne(this, "path", f)) : (ne(this, "mnemonic", f), ne(this, "path", f.path));
  }
  get extendedKey() {
    if (this.depth >= 256)
      throw new Error("Depth too large!");
    return Vc(gt([
      this.privateKey != null ? "0x0488ADE4" : "0x0488B21E",
      ce(this.depth),
      this.parentFingerprint,
      xt(ce(this.index), 4),
      this.chainCode,
      this.privateKey != null ? gt(["0x00", this.privateKey]) : this.publicKey
    ]));
  }
  neuter() {
    return new jt(Rn, null, this.publicKey, this.parentFingerprint, this.chainCode, this.index, this.depth, this.path);
  }
  _derive(e) {
    if (e > 4294967295)
      throw new Error("invalid index - " + String(e));
    let r = this.path;
    r && (r += "/" + (e & ~Mn));
    const n = new Uint8Array(37);
    if (e & Mn) {
      if (!this.privateKey)
        throw new Error("cannot derive child of neutered node");
      n.set(ae(this.privateKey), 1), r && (r += "'");
    } else
      n.set(ae(this.publicKey));
    for (let g = 24; g >= 0; g -= 8)
      n[33 + (g >> 3)] = e >> 24 - g & 255;
    const a = ae(Ra(qn.sha512, this.chainCode, n)), s = a.slice(0, 32), o = a.slice(32);
    let i = null, f = null;
    this.privateKey ? i = Qa(de.from(s).add(this.privateKey).mod(Km)) : f = new pn(ce(s))._addPoint(this.publicKey);
    let u = r;
    const h = this.mnemonic;
    return h && (u = Object.freeze({
      phrase: h.phrase,
      path: r,
      locale: h.locale || "en"
    })), new jt(Rn, i, f, this.fingerprint, Qa(o), e, this.depth + 1, u);
  }
  derivePath(e) {
    const r = e.split("/");
    if (r.length === 0 || r[0] === "m" && this.depth !== 0)
      throw new Error("invalid path - " + e);
    r[0] === "m" && r.shift();
    let n = this;
    for (let a = 0; a < r.length; a++) {
      const s = r[a];
      if (s.match(/^[0-9]+'$/)) {
        const o = parseInt(s.substring(0, s.length - 1));
        if (o >= Mn)
          throw new Error("invalid path index - " + s);
        n = n._derive(Mn + o);
      } else if (s.match(/^[0-9]+$/)) {
        const o = parseInt(s);
        if (o >= Mn)
          throw new Error("invalid path index - " + s);
        n = n._derive(o);
      } else
        throw new Error("invalid path component - " + s);
    }
    return n;
  }
  static _fromSeed(e, r) {
    const n = ae(e);
    if (n.length < 16 || n.length > 64)
      throw new Error("invalid seed");
    const a = ae(Ra(qn.sha512, qm, n));
    return new jt(Rn, Qa(a.slice(0, 32)), null, "0x00000000", Qa(a.slice(32)), 0, 0, r);
  }
  static fromMnemonic(e, r, n) {
    return n = Ci(n), e = Os(Ps(e, n), n), jt._fromSeed(mf(e, r), {
      phrase: e,
      path: "m",
      locale: n.locale
    });
  }
  static fromSeed(e) {
    return jt._fromSeed(e, null);
  }
  static fromExtendedKey(e) {
    const r = Ai.decode(e);
    (r.length !== 82 || Vc(r.slice(0, 78)) !== e) && _a.throwArgumentError("invalid extended key", "extendedKey", "[REDACTED]");
    const n = r[4], a = ce(r.slice(5, 9)), s = parseInt(ce(r.slice(9, 13)).substring(2), 16), o = ce(r.slice(13, 45)), i = r.slice(45, 78);
    switch (ce(r.slice(0, 4))) {
      case "0x0488b21e":
      case "0x043587cf":
        return new jt(Rn, null, ce(i), a, o, s, n, null);
      case "0x0488ade4":
      case "0x04358394 ":
        if (i[0] !== 0)
          break;
        return new jt(Rn, ce(i.slice(1)), null, a, o, s, n, null);
    }
    return _a.throwArgumentError("invalid extended key", "extendedKey", "[REDACTED]");
  }
}
function mf(t, e) {
  e || (e = "");
  const r = At("mnemonic" + e, _r.NFKD);
  return wi(At(t, _r.NFKD), r, 2048, 64, "sha512");
}
function Ps(t, e) {
  e = Ci(e), _a.checkNormalize();
  const r = e.split(t);
  if (r.length % 3 !== 0)
    throw new Error("invalid mnemonic");
  const n = ae(new Uint8Array(Math.ceil(11 * r.length / 8)));
  let a = 0;
  for (let u = 0; u < r.length; u++) {
    let h = e.getWordIndex(r[u].normalize("NFKD"));
    if (h === -1)
      throw new Error("invalid mnemonic");
    for (let g = 0; g < 11; g++)
      h & 1 << 10 - g && (n[a >> 3] |= 1 << 7 - a % 8), a++;
  }
  const s = 32 * r.length / 3, o = r.length / 3, i = hf(o);
  if ((ae(En(n.slice(0, s / 8)))[0] & i) !== (n[n.length - 1] & i))
    throw new Error("invalid checksum");
  return ce(n.slice(0, s / 8));
}
function Os(t, e) {
  if (e = Ci(e), t = ae(t), t.length % 4 !== 0 || t.length < 16 || t.length > 32)
    throw new Error("invalid entropy");
  const r = [0];
  let n = 11;
  for (let o = 0; o < t.length; o++)
    n > 8 ? (r[r.length - 1] <<= 8, r[r.length - 1] |= t[o], n -= 8) : (r[r.length - 1] <<= n, r[r.length - 1] |= t[o] >> 8 - n, r.push(t[o] & Ym(8 - n)), n += 3);
  const a = t.length / 4, s = ae(En(t))[0] & hf(a);
  return r[r.length - 1] <<= a, r[r.length - 1] |= s >> 8 - a, e.join(r.map((o) => e.getWord(o)));
}
function Xm(t, e) {
  try {
    return Ps(t, e), !0;
  } catch {
  }
  return !1;
}
function Jm(t) {
  return (typeof t != "number" || t < 0 || t >= Mn || t % 1) && _a.throwArgumentError("invalid account index", "index", t), `m/44'/60'/${t}'/0/0`;
}
const Zm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  defaultPath: Yn,
  HDNode: jt,
  mnemonicToSeed: mf,
  mnemonicToEntropy: Ps,
  entropyToMnemonic: Os,
  isValidMnemonic: Xm,
  getAccountPath: Jm
}, Symbol.toStringTag, { value: "Module" })), Qm = "random/5.7.0", Vo = new V(Qm);
function ep() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("unable to locate global object");
}
const Gc = ep();
let fs = Gc.crypto || Gc.msCrypto;
(!fs || !fs.getRandomValues) && (Vo.warn("WARNING: Missing strong random number source"), fs = {
  getRandomValues: function(t) {
    return Vo.throwError("no secure random source avaialble", V.errors.UNSUPPORTED_OPERATION, {
      operation: "crypto.getRandomValues"
    });
  }
});
function Nn(t) {
  (t <= 0 || t > 1024 || t % 1 || t != t) && Vo.throwArgumentError("invalid length", "length", t);
  const e = new Uint8Array(t);
  return fs.getRandomValues(e), ae(e);
}
function tp(t) {
  t = t.slice();
  for (let e = t.length - 1; e > 0; e--) {
    const r = Math.floor(Math.random() * (e + 1)), n = t[e];
    t[e] = t[r], t[r] = n;
  }
  return t;
}
const rp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  randomBytes: Nn,
  shuffled: tp
}, Symbol.toStringTag, { value: "Module" }));
var pf = { exports: {} };
(function(t, e) {
  (function(r) {
    function n(p) {
      return parseInt(p) === p;
    }
    function a(p) {
      if (!n(p.length))
        return !1;
      for (var c = 0; c < p.length; c++)
        if (!n(p[c]) || p[c] < 0 || p[c] > 255)
          return !1;
      return !0;
    }
    function s(p, c) {
      if (p.buffer && ArrayBuffer.isView(p) && p.name === "Uint8Array")
        return c && (p.slice ? p = p.slice() : p = Array.prototype.slice.call(p)), p;
      if (Array.isArray(p)) {
        if (!a(p))
          throw new Error("Array contains invalid value: " + p);
        return new Uint8Array(p);
      }
      if (n(p.length) && a(p))
        return new Uint8Array(p);
      throw new Error("unsupported array-like object");
    }
    function o(p) {
      return new Uint8Array(p);
    }
    function i(p, c, b, k, l) {
      (k != null || l != null) && (p.slice ? p = p.slice(k, l) : p = Array.prototype.slice.call(p, k, l)), c.set(p, b);
    }
    var f = function() {
      function p(b) {
        var k = [], l = 0;
        for (b = encodeURI(b); l < b.length; ) {
          var v = b.charCodeAt(l++);
          v === 37 ? (k.push(parseInt(b.substr(l, 2), 16)), l += 2) : k.push(v);
        }
        return s(k);
      }
      function c(b) {
        for (var k = [], l = 0; l < b.length; ) {
          var v = b[l];
          v < 128 ? (k.push(String.fromCharCode(v)), l++) : v > 191 && v < 224 ? (k.push(String.fromCharCode((v & 31) << 6 | b[l + 1] & 63)), l += 2) : (k.push(String.fromCharCode((v & 15) << 12 | (b[l + 1] & 63) << 6 | b[l + 2] & 63)), l += 3);
        }
        return k.join("");
      }
      return {
        toBytes: p,
        fromBytes: c
      };
    }(), u = function() {
      function p(k) {
        for (var l = [], v = 0; v < k.length; v += 2)
          l.push(parseInt(k.substr(v, 2), 16));
        return l;
      }
      var c = "0123456789abcdef";
      function b(k) {
        for (var l = [], v = 0; v < k.length; v++) {
          var L = k[v];
          l.push(c[(L & 240) >> 4] + c[L & 15]);
        }
        return l.join("");
      }
      return {
        toBytes: p,
        fromBytes: b
      };
    }(), h = { 16: 10, 24: 12, 32: 14 }, g = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145], C = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22], E = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125], S = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986], D = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766], x = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126], F = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436], M = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890], j = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935], U = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600], B = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480], W = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795], G = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855], K = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150], te = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];
    function se(p) {
      for (var c = [], b = 0; b < p.length; b += 4)
        c.push(
          p[b] << 24 | p[b + 1] << 16 | p[b + 2] << 8 | p[b + 3]
        );
      return c;
    }
    var q = function(p) {
      if (!(this instanceof q))
        throw Error("AES must be instanitated with `new`");
      Object.defineProperty(this, "key", {
        value: s(p, !0)
      }), this._prepare();
    };
    q.prototype._prepare = function() {
      var p = h[this.key.length];
      if (p == null)
        throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
      this._Ke = [], this._Kd = [];
      for (var c = 0; c <= p; c++)
        this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
      for (var b = (p + 1) * 4, k = this.key.length / 4, l = se(this.key), v, c = 0; c < k; c++)
        v = c >> 2, this._Ke[v][c % 4] = l[c], this._Kd[p - v][c % 4] = l[c];
      for (var L = 0, _ = k, H; _ < b; ) {
        if (H = l[k - 1], l[0] ^= C[H >> 16 & 255] << 24 ^ C[H >> 8 & 255] << 16 ^ C[H & 255] << 8 ^ C[H >> 24 & 255] ^ g[L] << 24, L += 1, k != 8)
          for (var c = 1; c < k; c++)
            l[c] ^= l[c - 1];
        else {
          for (var c = 1; c < k / 2; c++)
            l[c] ^= l[c - 1];
          H = l[k / 2 - 1], l[k / 2] ^= C[H & 255] ^ C[H >> 8 & 255] << 8 ^ C[H >> 16 & 255] << 16 ^ C[H >> 24 & 255] << 24;
          for (var c = k / 2 + 1; c < k; c++)
            l[c] ^= l[c - 1];
        }
        for (var c = 0, Y, $; c < k && _ < b; )
          Y = _ >> 2, $ = _ % 4, this._Ke[Y][$] = l[c], this._Kd[p - Y][$] = l[c++], _++;
      }
      for (var Y = 1; Y < p; Y++)
        for (var $ = 0; $ < 4; $++)
          H = this._Kd[Y][$], this._Kd[Y][$] = W[H >> 24 & 255] ^ G[H >> 16 & 255] ^ K[H >> 8 & 255] ^ te[H & 255];
    }, q.prototype.encrypt = function(p) {
      if (p.length != 16)
        throw new Error("invalid plaintext size (must be 16 bytes)");
      for (var c = this._Ke.length - 1, b = [0, 0, 0, 0], k = se(p), l = 0; l < 4; l++)
        k[l] ^= this._Ke[0][l];
      for (var v = 1; v < c; v++) {
        for (var l = 0; l < 4; l++)
          b[l] = S[k[l] >> 24 & 255] ^ D[k[(l + 1) % 4] >> 16 & 255] ^ x[k[(l + 2) % 4] >> 8 & 255] ^ F[k[(l + 3) % 4] & 255] ^ this._Ke[v][l];
        k = b.slice();
      }
      for (var L = o(16), _, l = 0; l < 4; l++)
        _ = this._Ke[c][l], L[4 * l] = (C[k[l] >> 24 & 255] ^ _ >> 24) & 255, L[4 * l + 1] = (C[k[(l + 1) % 4] >> 16 & 255] ^ _ >> 16) & 255, L[4 * l + 2] = (C[k[(l + 2) % 4] >> 8 & 255] ^ _ >> 8) & 255, L[4 * l + 3] = (C[k[(l + 3) % 4] & 255] ^ _) & 255;
      return L;
    }, q.prototype.decrypt = function(p) {
      if (p.length != 16)
        throw new Error("invalid ciphertext size (must be 16 bytes)");
      for (var c = this._Kd.length - 1, b = [0, 0, 0, 0], k = se(p), l = 0; l < 4; l++)
        k[l] ^= this._Kd[0][l];
      for (var v = 1; v < c; v++) {
        for (var l = 0; l < 4; l++)
          b[l] = M[k[l] >> 24 & 255] ^ j[k[(l + 3) % 4] >> 16 & 255] ^ U[k[(l + 2) % 4] >> 8 & 255] ^ B[k[(l + 1) % 4] & 255] ^ this._Kd[v][l];
        k = b.slice();
      }
      for (var L = o(16), _, l = 0; l < 4; l++)
        _ = this._Kd[c][l], L[4 * l] = (E[k[l] >> 24 & 255] ^ _ >> 24) & 255, L[4 * l + 1] = (E[k[(l + 3) % 4] >> 16 & 255] ^ _ >> 16) & 255, L[4 * l + 2] = (E[k[(l + 2) % 4] >> 8 & 255] ^ _ >> 8) & 255, L[4 * l + 3] = (E[k[(l + 1) % 4] & 255] ^ _) & 255;
      return L;
    };
    var oe = function(p) {
      if (!(this instanceof oe))
        throw Error("AES must be instanitated with `new`");
      this.description = "Electronic Code Block", this.name = "ecb", this._aes = new q(p);
    };
    oe.prototype.encrypt = function(p) {
      if (p = s(p), p.length % 16 !== 0)
        throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
      for (var c = o(p.length), b = o(16), k = 0; k < p.length; k += 16)
        i(p, b, 0, k, k + 16), b = this._aes.encrypt(b), i(b, c, k);
      return c;
    }, oe.prototype.decrypt = function(p) {
      if (p = s(p), p.length % 16 !== 0)
        throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
      for (var c = o(p.length), b = o(16), k = 0; k < p.length; k += 16)
        i(p, b, 0, k, k + 16), b = this._aes.decrypt(b), i(b, c, k);
      return c;
    };
    var I = function(p, c) {
      if (!(this instanceof I))
        throw Error("AES must be instanitated with `new`");
      if (this.description = "Cipher Block Chaining", this.name = "cbc", !c)
        c = o(16);
      else if (c.length != 16)
        throw new Error("invalid initialation vector size (must be 16 bytes)");
      this._lastCipherblock = s(c, !0), this._aes = new q(p);
    };
    I.prototype.encrypt = function(p) {
      if (p = s(p), p.length % 16 !== 0)
        throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
      for (var c = o(p.length), b = o(16), k = 0; k < p.length; k += 16) {
        i(p, b, 0, k, k + 16);
        for (var l = 0; l < 16; l++)
          b[l] ^= this._lastCipherblock[l];
        this._lastCipherblock = this._aes.encrypt(b), i(this._lastCipherblock, c, k);
      }
      return c;
    }, I.prototype.decrypt = function(p) {
      if (p = s(p), p.length % 16 !== 0)
        throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
      for (var c = o(p.length), b = o(16), k = 0; k < p.length; k += 16) {
        i(p, b, 0, k, k + 16), b = this._aes.decrypt(b);
        for (var l = 0; l < 16; l++)
          c[k + l] = b[l] ^ this._lastCipherblock[l];
        i(p, this._lastCipherblock, 0, k, k + 16);
      }
      return c;
    };
    var d = function(p, c, b) {
      if (!(this instanceof d))
        throw Error("AES must be instanitated with `new`");
      if (this.description = "Cipher Feedback", this.name = "cfb", !c)
        c = o(16);
      else if (c.length != 16)
        throw new Error("invalid initialation vector size (must be 16 size)");
      b || (b = 1), this.segmentSize = b, this._shiftRegister = s(c, !0), this._aes = new q(p);
    };
    d.prototype.encrypt = function(p) {
      if (p.length % this.segmentSize != 0)
        throw new Error("invalid plaintext size (must be segmentSize bytes)");
      for (var c = s(p, !0), b, k = 0; k < c.length; k += this.segmentSize) {
        b = this._aes.encrypt(this._shiftRegister);
        for (var l = 0; l < this.segmentSize; l++)
          c[k + l] ^= b[l];
        i(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), i(c, this._shiftRegister, 16 - this.segmentSize, k, k + this.segmentSize);
      }
      return c;
    }, d.prototype.decrypt = function(p) {
      if (p.length % this.segmentSize != 0)
        throw new Error("invalid ciphertext size (must be segmentSize bytes)");
      for (var c = s(p, !0), b, k = 0; k < c.length; k += this.segmentSize) {
        b = this._aes.encrypt(this._shiftRegister);
        for (var l = 0; l < this.segmentSize; l++)
          c[k + l] ^= b[l];
        i(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), i(p, this._shiftRegister, 16 - this.segmentSize, k, k + this.segmentSize);
      }
      return c;
    };
    var m = function(p, c) {
      if (!(this instanceof m))
        throw Error("AES must be instanitated with `new`");
      if (this.description = "Output Feedback", this.name = "ofb", !c)
        c = o(16);
      else if (c.length != 16)
        throw new Error("invalid initialation vector size (must be 16 bytes)");
      this._lastPrecipher = s(c, !0), this._lastPrecipherIndex = 16, this._aes = new q(p);
    };
    m.prototype.encrypt = function(p) {
      for (var c = s(p, !0), b = 0; b < c.length; b++)
        this._lastPrecipherIndex === 16 && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0), c[b] ^= this._lastPrecipher[this._lastPrecipherIndex++];
      return c;
    }, m.prototype.decrypt = m.prototype.encrypt;
    var y = function(p) {
      if (!(this instanceof y))
        throw Error("Counter must be instanitated with `new`");
      p !== 0 && !p && (p = 1), typeof p == "number" ? (this._counter = o(16), this.setValue(p)) : this.setBytes(p);
    };
    y.prototype.setValue = function(p) {
      if (typeof p != "number" || parseInt(p) != p)
        throw new Error("invalid counter value (must be an integer)");
      for (var c = 15; c >= 0; --c)
        this._counter[c] = p % 256, p = p >> 8;
    }, y.prototype.setBytes = function(p) {
      if (p = s(p, !0), p.length != 16)
        throw new Error("invalid counter bytes size (must be 16 bytes)");
      this._counter = p;
    }, y.prototype.increment = function() {
      for (var p = 15; p >= 0; p--)
        if (this._counter[p] === 255)
          this._counter[p] = 0;
        else {
          this._counter[p]++;
          break;
        }
    };
    var w = function(p, c) {
      if (!(this instanceof w))
        throw Error("AES must be instanitated with `new`");
      this.description = "Counter", this.name = "ctr", c instanceof y || (c = new y(c)), this._counter = c, this._remainingCounter = null, this._remainingCounterIndex = 16, this._aes = new q(p);
    };
    w.prototype.encrypt = function(p) {
      for (var c = s(p, !0), b = 0; b < c.length; b++)
        this._remainingCounterIndex === 16 && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()), c[b] ^= this._remainingCounter[this._remainingCounterIndex++];
      return c;
    }, w.prototype.decrypt = w.prototype.encrypt;
    function A(p) {
      p = s(p, !0);
      var c = 16 - p.length % 16, b = o(p.length + c);
      i(p, b);
      for (var k = p.length; k < b.length; k++)
        b[k] = c;
      return b;
    }
    function T(p) {
      if (p = s(p, !0), p.length < 16)
        throw new Error("PKCS#7 invalid length");
      var c = p[p.length - 1];
      if (c > 16)
        throw new Error("PKCS#7 padding byte out of range");
      for (var b = p.length - c, k = 0; k < c; k++)
        if (p[b + k] !== c)
          throw new Error("PKCS#7 invalid padding byte");
      var l = o(b);
      return i(p, l, 0, 0, b), l;
    }
    var P = {
      AES: q,
      Counter: y,
      ModeOfOperation: {
        ecb: oe,
        cbc: I,
        cfb: d,
        ofb: m,
        ctr: w
      },
      utils: {
        hex: u,
        utf8: f
      },
      padding: {
        pkcs7: {
          pad: A,
          strip: T
        }
      },
      _arrayTest: {
        coerceArray: s,
        createArray: o,
        copyArray: i
      }
    };
    t.exports = P;
  })();
})(pf);
const kr = pf.exports, bf = "json-wallets/5.7.0";
function bn(t) {
  return typeof t == "string" && t.substring(0, 2) !== "0x" && (t = "0x" + t), ae(t);
}
function ca(t, e) {
  for (t = String(t); t.length < e; )
    t = "0" + t;
  return t;
}
function Ei(t) {
  return typeof t == "string" ? At(t, _r.NFKC) : ae(t);
}
function bt(t, e) {
  let r = t;
  const n = e.toLowerCase().split("/");
  for (let a = 0; a < n.length; a++) {
    let s = null;
    for (const o in r)
      if (o.toLowerCase() === n[a]) {
        s = r[o];
        break;
      }
    if (s === null)
      return null;
    r = s;
  }
  return r;
}
function np(t) {
  const e = ae(t);
  e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128;
  const r = ce(e);
  return [
    r.substring(2, 10),
    r.substring(10, 14),
    r.substring(14, 18),
    r.substring(18, 22),
    r.substring(22, 34)
  ].join("-");
}
const ap = new V(bf);
class sp extends Dn {
  isCrowdsaleAccount(e) {
    return !!(e && e._isCrowdsaleAccount);
  }
}
function Ii(t, e) {
  const r = JSON.parse(t);
  e = Ei(e);
  const n = at(bt(r, "ethaddr")), a = bn(bt(r, "encseed"));
  (!a || a.length % 16 !== 0) && ap.throwArgumentError("invalid encseed", "json", t);
  const s = ae(wi(e, e, 2e3, 32, "sha256")).slice(0, 16), o = a.slice(0, 16), i = a.slice(16), f = new kr.ModeOfOperation.cbc(s, o), u = kr.padding.pkcs7.strip(ae(f.decrypt(i)));
  let h = "";
  for (let E = 0; E < u.length; E++)
    h += String.fromCharCode(u[E]);
  const g = At(h), C = Ge(g);
  return new sp({
    _isCrowdsaleAccount: !0,
    address: n,
    privateKey: C
  });
}
function Ns(t) {
  let e = null;
  try {
    e = JSON.parse(t);
  } catch {
    return !1;
  }
  return e.encseed && e.ethaddr;
}
function Ls(t) {
  let e = null;
  try {
    e = JSON.parse(t);
  } catch {
    return !1;
  }
  return !(!e.version || parseInt(e.version) !== e.version || parseInt(e.version) !== 3);
}
function op(t) {
  if (Ns(t))
    try {
      return at(JSON.parse(t).ethaddr);
    } catch {
      return null;
    }
  if (Ls(t))
    try {
      return at(JSON.parse(t).address);
    } catch {
      return null;
    }
  return null;
}
var gf = { exports: {} };
(function(t, e) {
  (function(r) {
    function a(D) {
      const x = new Uint32Array([
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
      ]);
      let F = 1779033703, M = 3144134277, j = 1013904242, U = 2773480762, B = 1359893119, W = 2600822924, G = 528734635, K = 1541459225;
      const te = new Uint32Array(64);
      function se(w) {
        let A = 0, T = w.length;
        for (; T >= 64; ) {
          let P = F, p = M, c = j, b = U, k = B, l = W, v = G, L = K, _, H, Y, $, N;
          for (H = 0; H < 16; H++)
            Y = A + H * 4, te[H] = (w[Y] & 255) << 24 | (w[Y + 1] & 255) << 16 | (w[Y + 2] & 255) << 8 | w[Y + 3] & 255;
          for (H = 16; H < 64; H++)
            _ = te[H - 2], $ = (_ >>> 17 | _ << 32 - 17) ^ (_ >>> 19 | _ << 32 - 19) ^ _ >>> 10, _ = te[H - 15], N = (_ >>> 7 | _ << 32 - 7) ^ (_ >>> 18 | _ << 32 - 18) ^ _ >>> 3, te[H] = ($ + te[H - 7] | 0) + (N + te[H - 16] | 0) | 0;
          for (H = 0; H < 64; H++)
            $ = (((k >>> 6 | k << 32 - 6) ^ (k >>> 11 | k << 32 - 11) ^ (k >>> 25 | k << 32 - 25)) + (k & l ^ ~k & v) | 0) + (L + (x[H] + te[H] | 0) | 0) | 0, N = ((P >>> 2 | P << 32 - 2) ^ (P >>> 13 | P << 32 - 13) ^ (P >>> 22 | P << 32 - 22)) + (P & p ^ P & c ^ p & c) | 0, L = v, v = l, l = k, k = b + $ | 0, b = c, c = p, p = P, P = $ + N | 0;
          F = F + P | 0, M = M + p | 0, j = j + c | 0, U = U + b | 0, B = B + k | 0, W = W + l | 0, G = G + v | 0, K = K + L | 0, A += 64, T -= 64;
        }
      }
      se(D);
      let q, oe = D.length % 64, I = D.length / 536870912 | 0, d = D.length << 3, m = oe < 56 ? 56 : 120, y = D.slice(D.length - oe, D.length);
      for (y.push(128), q = oe + 1; q < m; q++)
        y.push(0);
      return y.push(I >>> 24 & 255), y.push(I >>> 16 & 255), y.push(I >>> 8 & 255), y.push(I >>> 0 & 255), y.push(d >>> 24 & 255), y.push(d >>> 16 & 255), y.push(d >>> 8 & 255), y.push(d >>> 0 & 255), se(y), [
        F >>> 24 & 255,
        F >>> 16 & 255,
        F >>> 8 & 255,
        F >>> 0 & 255,
        M >>> 24 & 255,
        M >>> 16 & 255,
        M >>> 8 & 255,
        M >>> 0 & 255,
        j >>> 24 & 255,
        j >>> 16 & 255,
        j >>> 8 & 255,
        j >>> 0 & 255,
        U >>> 24 & 255,
        U >>> 16 & 255,
        U >>> 8 & 255,
        U >>> 0 & 255,
        B >>> 24 & 255,
        B >>> 16 & 255,
        B >>> 8 & 255,
        B >>> 0 & 255,
        W >>> 24 & 255,
        W >>> 16 & 255,
        W >>> 8 & 255,
        W >>> 0 & 255,
        G >>> 24 & 255,
        G >>> 16 & 255,
        G >>> 8 & 255,
        G >>> 0 & 255,
        K >>> 24 & 255,
        K >>> 16 & 255,
        K >>> 8 & 255,
        K >>> 0 & 255
      ];
    }
    function s(D, x, F) {
      D = D.length <= 64 ? D : a(D);
      const M = 64 + x.length + 4, j = new Array(M), U = new Array(64);
      let B, W = [];
      for (B = 0; B < 64; B++)
        j[B] = 54;
      for (B = 0; B < D.length; B++)
        j[B] ^= D[B];
      for (B = 0; B < x.length; B++)
        j[64 + B] = x[B];
      for (B = M - 4; B < M; B++)
        j[B] = 0;
      for (B = 0; B < 64; B++)
        U[B] = 92;
      for (B = 0; B < D.length; B++)
        U[B] ^= D[B];
      function G() {
        for (let K = M - 1; K >= M - 4; K--) {
          if (j[K]++, j[K] <= 255)
            return;
          j[K] = 0;
        }
      }
      for (; F >= 32; )
        G(), W = W.concat(a(U.concat(a(j)))), F -= 32;
      return F > 0 && (G(), W = W.concat(a(U.concat(a(j))).slice(0, F))), W;
    }
    function o(D, x, F, M, j) {
      let U;
      for (h(D, (2 * F - 1) * 16, j, 0, 16), U = 0; U < 2 * F; U++)
        u(D, U * 16, j, 16), f(j, M), h(j, 0, D, x + U * 16, 16);
      for (U = 0; U < F; U++)
        h(D, x + U * 2 * 16, D, U * 16, 16);
      for (U = 0; U < F; U++)
        h(D, x + (U * 2 + 1) * 16, D, (U + F) * 16, 16);
    }
    function i(D, x) {
      return D << x | D >>> 32 - x;
    }
    function f(D, x) {
      h(D, 0, x, 0, 16);
      for (let F = 8; F > 0; F -= 2)
        x[4] ^= i(x[0] + x[12], 7), x[8] ^= i(x[4] + x[0], 9), x[12] ^= i(x[8] + x[4], 13), x[0] ^= i(x[12] + x[8], 18), x[9] ^= i(x[5] + x[1], 7), x[13] ^= i(x[9] + x[5], 9), x[1] ^= i(x[13] + x[9], 13), x[5] ^= i(x[1] + x[13], 18), x[14] ^= i(x[10] + x[6], 7), x[2] ^= i(x[14] + x[10], 9), x[6] ^= i(x[2] + x[14], 13), x[10] ^= i(x[6] + x[2], 18), x[3] ^= i(x[15] + x[11], 7), x[7] ^= i(x[3] + x[15], 9), x[11] ^= i(x[7] + x[3], 13), x[15] ^= i(x[11] + x[7], 18), x[1] ^= i(x[0] + x[3], 7), x[2] ^= i(x[1] + x[0], 9), x[3] ^= i(x[2] + x[1], 13), x[0] ^= i(x[3] + x[2], 18), x[6] ^= i(x[5] + x[4], 7), x[7] ^= i(x[6] + x[5], 9), x[4] ^= i(x[7] + x[6], 13), x[5] ^= i(x[4] + x[7], 18), x[11] ^= i(x[10] + x[9], 7), x[8] ^= i(x[11] + x[10], 9), x[9] ^= i(x[8] + x[11], 13), x[10] ^= i(x[9] + x[8], 18), x[12] ^= i(x[15] + x[14], 7), x[13] ^= i(x[12] + x[15], 9), x[14] ^= i(x[13] + x[12], 13), x[15] ^= i(x[14] + x[13], 18);
      for (let F = 0; F < 16; ++F)
        D[F] += x[F];
    }
    function u(D, x, F, M) {
      for (let j = 0; j < M; j++)
        F[j] ^= D[x + j];
    }
    function h(D, x, F, M, j) {
      for (; j--; )
        F[M++] = D[x++];
    }
    function g(D) {
      if (!D || typeof D.length != "number")
        return !1;
      for (let x = 0; x < D.length; x++) {
        const F = D[x];
        if (typeof F != "number" || F % 1 || F < 0 || F >= 256)
          return !1;
      }
      return !0;
    }
    function C(D, x) {
      if (typeof D != "number" || D % 1)
        throw new Error("invalid " + x);
      return D;
    }
    function E(D, x, F, M, j, U, B) {
      if (F = C(F, "N"), M = C(M, "r"), j = C(j, "p"), U = C(U, "dkLen"), F === 0 || (F & F - 1) !== 0)
        throw new Error("N must be power of 2");
      if (F > 2147483647 / 128 / M)
        throw new Error("N too large");
      if (M > 2147483647 / 128 / j)
        throw new Error("r too large");
      if (!g(D))
        throw new Error("password must be an array or buffer");
      if (D = Array.prototype.slice.call(D), !g(x))
        throw new Error("salt must be an array or buffer");
      x = Array.prototype.slice.call(x);
      let W = s(D, x, j * 128 * M);
      const G = new Uint32Array(j * 32 * M);
      for (let k = 0; k < G.length; k++) {
        const l = k * 4;
        G[k] = (W[l + 3] & 255) << 24 | (W[l + 2] & 255) << 16 | (W[l + 1] & 255) << 8 | (W[l + 0] & 255) << 0;
      }
      const K = new Uint32Array(64 * M), te = new Uint32Array(32 * M * F), se = 32 * M, q = new Uint32Array(16), oe = new Uint32Array(16), I = j * F * 2;
      let d = 0, m = null, y = !1, w = 0, A = 0, T, P;
      const p = B ? parseInt(1e3 / M) : 4294967295, c = typeof setImmediate < "u" ? setImmediate : setTimeout, b = function() {
        if (y)
          return B(new Error("cancelled"), d / I);
        let k;
        switch (w) {
          case 0:
            P = A * 32 * M, h(G, P, K, 0, se), w = 1, T = 0;
          case 1:
            k = F - T, k > p && (k = p);
            for (let v = 0; v < k; v++)
              h(K, 0, te, (T + v) * se, se), o(K, se, M, q, oe);
            if (T += k, d += k, B) {
              const v = parseInt(1e3 * d / I);
              if (v !== m) {
                if (y = B(null, d / I), y)
                  break;
                m = v;
              }
            }
            if (T < F)
              break;
            T = 0, w = 2;
          case 2:
            k = F - T, k > p && (k = p);
            for (let v = 0; v < k; v++) {
              const L = (2 * M - 1) * 16, _ = K[L] & F - 1;
              u(te, _ * se, K, se), o(K, se, M, q, oe);
            }
            if (T += k, d += k, B) {
              const v = parseInt(1e3 * d / I);
              if (v !== m) {
                if (y = B(null, d / I), y)
                  break;
                m = v;
              }
            }
            if (T < F)
              break;
            if (h(K, 0, G, P, se), A++, A < j) {
              w = 0;
              break;
            }
            W = [];
            for (let v = 0; v < G.length; v++)
              W.push(G[v] >> 0 & 255), W.push(G[v] >> 8 & 255), W.push(G[v] >> 16 & 255), W.push(G[v] >> 24 & 255);
            const l = s(D, W, U);
            return B && B(null, 1, l), l;
        }
        B && c(b);
      };
      if (!B)
        for (; ; ) {
          const k = b();
          if (k != null)
            return k;
        }
      b();
    }
    const S = {
      scrypt: function(D, x, F, M, j, U, B) {
        return new Promise(function(W, G) {
          let K = 0;
          B && B(0), E(D, x, F, M, j, U, function(te, se, q) {
            if (te)
              G(te);
            else if (q)
              B && K !== 1 && B(1), W(new Uint8Array(q));
            else if (B && se !== K)
              return K = se, B(se);
          });
        });
      },
      syncScrypt: function(D, x, F, M, j, U) {
        return new Uint8Array(E(D, x, F, M, j, U));
      }
    };
    t.exports = S;
  })();
})(gf);
const ki = gf.exports;
var ip = globalThis && globalThis.__awaiter || function(t, e, r, n) {
  function a(s) {
    return s instanceof r ? s : new r(function(o) {
      o(s);
    });
  }
  return new (r || (r = Promise))(function(s, o) {
    function i(h) {
      try {
        u(n.next(h));
      } catch (g) {
        o(g);
      }
    }
    function f(h) {
      try {
        u(n.throw(h));
      } catch (g) {
        o(g);
      }
    }
    function u(h) {
      h.done ? s(h.value) : a(h.value).then(i, f);
    }
    u((n = n.apply(t, e || [])).next());
  });
};
const Go = new V(bf);
function Kc(t) {
  return t != null && t.mnemonic && t.mnemonic.phrase;
}
class cp extends Dn {
  isKeystoreAccount(e) {
    return !!(e && e._isKeystoreAccount);
  }
}
function dp(t, e, r) {
  if (bt(t, "crypto/cipher") === "aes-128-ctr") {
    const a = bn(bt(t, "crypto/cipherparams/iv")), s = new kr.Counter(a), o = new kr.ModeOfOperation.ctr(e, s);
    return ae(o.decrypt(r));
  }
  return null;
}
function xf(t, e) {
  const r = bn(bt(t, "crypto/ciphertext"));
  if (ce(Ge(gt([e.slice(16, 32), r]))).substring(2) !== bt(t, "crypto/mac").toLowerCase())
    throw new Error("invalid password");
  const a = dp(t, e.slice(0, 16), r);
  a || Go.throwError("unsupported cipher", V.errors.UNSUPPORTED_OPERATION, {
    operation: "decrypt"
  });
  const s = e.slice(32, 64), o = sn(a);
  if (t.address) {
    let f = t.address.toLowerCase();
    if (f.substring(0, 2) !== "0x" && (f = "0x" + f), at(f) !== o)
      throw new Error("address mismatch");
  }
  const i = {
    _isKeystoreAccount: !0,
    address: o,
    privateKey: ce(a)
  };
  if (bt(t, "x-ethers/version") === "0.1") {
    const f = bn(bt(t, "x-ethers/mnemonicCiphertext")), u = bn(bt(t, "x-ethers/mnemonicCounter")), h = new kr.Counter(u), g = new kr.ModeOfOperation.ctr(s, h), C = bt(t, "x-ethers/path") || Yn, E = bt(t, "x-ethers/locale") || "en", S = ae(g.decrypt(f));
    try {
      const D = Os(S, E), x = jt.fromMnemonic(D, null, E).derivePath(C);
      if (x.privateKey != i.privateKey)
        throw new Error("mnemonic mismatch");
      i.mnemonic = x.mnemonic;
    } catch (D) {
      if (D.code !== V.errors.INVALID_ARGUMENT || D.argument !== "wordlist")
        throw D;
    }
  }
  return new cp(i);
}
function yf(t, e, r, n, a) {
  return ae(wi(t, e, r, n, a));
}
function fp(t, e, r, n, a) {
  return Promise.resolve(yf(t, e, r, n, a));
}
function vf(t, e, r, n, a) {
  const s = Ei(e), o = bt(t, "crypto/kdf");
  if (o && typeof o == "string") {
    const i = function(f, u) {
      return Go.throwArgumentError("invalid key-derivation function parameters", f, u);
    };
    if (o.toLowerCase() === "scrypt") {
      const f = bn(bt(t, "crypto/kdfparams/salt")), u = parseInt(bt(t, "crypto/kdfparams/n")), h = parseInt(bt(t, "crypto/kdfparams/r")), g = parseInt(bt(t, "crypto/kdfparams/p"));
      (!u || !h || !g) && i("kdf", o), (u & u - 1) !== 0 && i("N", u);
      const C = parseInt(bt(t, "crypto/kdfparams/dklen"));
      return C !== 32 && i("dklen", C), n(s, f, u, h, g, 64, a);
    } else if (o.toLowerCase() === "pbkdf2") {
      const f = bn(bt(t, "crypto/kdfparams/salt"));
      let u = null;
      const h = bt(t, "crypto/kdfparams/prf");
      h === "hmac-sha256" ? u = "sha256" : h === "hmac-sha512" ? u = "sha512" : i("prf", h);
      const g = parseInt(bt(t, "crypto/kdfparams/c")), C = parseInt(bt(t, "crypto/kdfparams/dklen"));
      return C !== 32 && i("dklen", C), r(s, f, g, C, u);
    }
  }
  return Go.throwArgumentError("unsupported key-derivation function", "kdf", o);
}
function Af(t, e) {
  const r = JSON.parse(t), n = vf(r, e, yf, ki.syncScrypt);
  return xf(r, n);
}
function wf(t, e, r) {
  return ip(this, void 0, void 0, function* () {
    const n = JSON.parse(t), a = yield vf(n, e, fp, ki.scrypt, r);
    return xf(n, a);
  });
}
function Cf(t, e, r, n) {
  try {
    if (at(t.address) !== sn(t.privateKey))
      throw new Error("address/privateKey mismatch");
    if (Kc(t)) {
      const x = t.mnemonic;
      if (jt.fromMnemonic(x.phrase, null, x.locale).derivePath(x.path || Yn).privateKey != t.privateKey)
        throw new Error("mnemonic mismatch");
    }
  } catch (x) {
    return Promise.reject(x);
  }
  typeof r == "function" && !n && (n = r, r = {}), r || (r = {});
  const a = ae(t.privateKey), s = Ei(e);
  let o = null, i = null, f = null;
  if (Kc(t)) {
    const x = t.mnemonic;
    o = ae(Ps(x.phrase, x.locale || "en")), i = x.path || Yn, f = x.locale || "en";
  }
  let u = r.client;
  u || (u = "ethers.js");
  let h = null;
  r.salt ? h = ae(r.salt) : h = Nn(32);
  let g = null;
  if (r.iv) {
    if (g = ae(r.iv), g.length !== 16)
      throw new Error("invalid iv");
  } else
    g = Nn(16);
  let C = null;
  if (r.uuid) {
    if (C = ae(r.uuid), C.length !== 16)
      throw new Error("invalid uuid");
  } else
    C = Nn(16);
  let E = 1 << 17, S = 8, D = 1;
  return r.scrypt && (r.scrypt.N && (E = r.scrypt.N), r.scrypt.r && (S = r.scrypt.r), r.scrypt.p && (D = r.scrypt.p)), ki.scrypt(s, h, E, S, D, 64, n).then((x) => {
    x = ae(x);
    const F = x.slice(0, 16), M = x.slice(16, 32), j = x.slice(32, 64), U = new kr.Counter(g), B = new kr.ModeOfOperation.ctr(F, U), W = ae(B.encrypt(a)), G = Ge(gt([M, W])), K = {
      address: t.address.substring(2).toLowerCase(),
      id: np(C),
      version: 3,
      crypto: {
        cipher: "aes-128-ctr",
        cipherparams: {
          iv: ce(g).substring(2)
        },
        ciphertext: ce(W).substring(2),
        kdf: "scrypt",
        kdfparams: {
          salt: ce(h).substring(2),
          n: E,
          dklen: 32,
          p: D,
          r: S
        },
        mac: G.substring(2)
      }
    };
    if (o) {
      const te = Nn(16), se = new kr.Counter(te), q = new kr.ModeOfOperation.ctr(j, se), oe = ae(q.encrypt(o)), I = new Date(), d = I.getUTCFullYear() + "-" + ca(I.getUTCMonth() + 1, 2) + "-" + ca(I.getUTCDate(), 2) + "T" + ca(I.getUTCHours(), 2) + "-" + ca(I.getUTCMinutes(), 2) + "-" + ca(I.getUTCSeconds(), 2) + ".0Z";
      K["x-ethers"] = {
        client: u,
        gethFilename: "UTC--" + d + "--" + K.address,
        mnemonicCounter: ce(te).substring(2),
        mnemonicCiphertext: ce(oe).substring(2),
        path: i,
        locale: f,
        version: "0.1"
      };
    }
    return JSON.stringify(K);
  });
}
function Ef(t, e, r) {
  if (Ns(t)) {
    r && r(0);
    const n = Ii(t, e);
    return r && r(1), Promise.resolve(n);
  }
  return Ls(t) ? wf(t, e, r) : Promise.reject(new Error("invalid JSON wallet"));
}
function If(t, e) {
  if (Ns(t))
    return Ii(t, e);
  if (Ls(t))
    return Af(t, e);
  throw new Error("invalid JSON wallet");
}
const lp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decryptCrowdsale: Ii,
  decryptKeystore: wf,
  decryptKeystoreSync: Af,
  encryptKeystore: Cf,
  isCrowdsaleWallet: Ns,
  isKeystoreWallet: Ls,
  getJsonWalletAddress: op,
  decryptJsonWallet: Ef,
  decryptJsonWalletSync: If
}, Symbol.toStringTag, { value: "Module" })), up = "wallet/5.7.0";
var qc = globalThis && globalThis.__awaiter || function(t, e, r, n) {
  function a(s) {
    return s instanceof r ? s : new r(function(o) {
      o(s);
    });
  }
  return new (r || (r = Promise))(function(s, o) {
    function i(h) {
      try {
        u(n.next(h));
      } catch (g) {
        o(g);
      }
    }
    function f(h) {
      try {
        u(n.throw(h));
      } catch (g) {
        o(g);
      }
    }
    function u(h) {
      h.done ? s(h.value) : a(h.value).then(i, f);
    }
    u((n = n.apply(t, e || [])).next());
  });
};
const _n = new V(up);
function hp(t) {
  return t != null && ft(t.privateKey, 32) && t.address != null;
}
function mp(t) {
  const e = t.mnemonic;
  return e && e.phrase;
}
class mn extends La {
  constructor(e, r) {
    if (super(), hp(e)) {
      const n = new pn(e.privateKey);
      if (ne(this, "_signingKey", () => n), ne(this, "address", sn(this.publicKey)), this.address !== at(e.address) && _n.throwArgumentError("privateKey/address mismatch", "privateKey", "[REDACTED]"), mp(e)) {
        const a = e.mnemonic;
        ne(this, "_mnemonic", () => ({
          phrase: a.phrase,
          path: a.path || Yn,
          locale: a.locale || "en"
        }));
        const s = this.mnemonic, o = jt.fromMnemonic(s.phrase, null, s.locale).derivePath(s.path);
        sn(o.privateKey) !== this.address && _n.throwArgumentError("mnemonic/address mismatch", "privateKey", "[REDACTED]");
      } else
        ne(this, "_mnemonic", () => null);
    } else {
      if (pn.isSigningKey(e))
        e.curve !== "secp256k1" && _n.throwArgumentError("unsupported curve; must be secp256k1", "privateKey", "[REDACTED]"), ne(this, "_signingKey", () => e);
      else {
        typeof e == "string" && e.match(/^[0-9a-f]*$/i) && e.length === 64 && (e = "0x" + e);
        const n = new pn(e);
        ne(this, "_signingKey", () => n);
      }
      ne(this, "_mnemonic", () => null), ne(this, "address", sn(this.publicKey));
    }
    r && !Rs.isProvider(r) && _n.throwArgumentError("invalid provider", "provider", r), ne(this, "provider", r || null);
  }
  get mnemonic() {
    return this._mnemonic();
  }
  get privateKey() {
    return this._signingKey().privateKey;
  }
  get publicKey() {
    return this._signingKey().publicKey;
  }
  getAddress() {
    return Promise.resolve(this.address);
  }
  connect(e) {
    return new mn(this, e);
  }
  signTransaction(e) {
    return Er(e).then((r) => {
      r.from != null && (at(r.from) !== this.address && _n.throwArgumentError("transaction from address mismatch", "transaction.from", e.from), delete r.from);
      const n = this._signingKey().signDigest(Ge($o(r)));
      return $o(r, n);
    });
  }
  signMessage(e) {
    return qc(this, void 0, void 0, function* () {
      return Mo(this._signingKey().signDigest(hi(e)));
    });
  }
  _signTypedData(e, r, n) {
    return qc(this, void 0, void 0, function* () {
      const a = yield Dt.resolveNames(e, r, n, (s) => (this.provider == null && _n.throwError("cannot resolve ENS names without a provider", V.errors.UNSUPPORTED_OPERATION, {
        operation: "resolveName",
        value: s
      }), this.provider.resolveName(s)));
      return Mo(this._signingKey().signDigest(Dt.hash(a.domain, r, a.value)));
    });
  }
  encrypt(e, r, n) {
    if (typeof r == "function" && !n && (n = r, r = {}), n && typeof n != "function")
      throw new Error("invalid callback");
    return r || (r = {}), Cf(this, e, r, n);
  }
  static createRandom(e) {
    let r = Nn(16);
    e || (e = {}), e.extraEntropy && (r = ae(Vr(Ge(gt([r, e.extraEntropy])), 0, 16)));
    const n = Os(r, e.locale);
    return mn.fromMnemonic(n, e.path, e.locale);
  }
  static fromEncryptedJson(e, r, n) {
    return Ef(e, r, n).then((a) => new mn(a));
  }
  static fromEncryptedJsonSync(e, r) {
    return new mn(If(e, r));
  }
  static fromMnemonic(e, r, n) {
    return r || (r = Yn), new mn(jt.fromMnemonic(e, null, n).derivePath(r));
  }
}
function pp(t, e) {
  return Wa(hi(t), e);
}
function bp(t, e, r, n) {
  return Wa(Dt.hash(t, e, r), n);
}
const gp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Wallet: mn,
  verifyMessage: pp,
  verifyTypedData: bp
}, Symbol.toStringTag, { value: "Module" })), xp = "web/5.7.1";
var yp = globalThis && globalThis.__awaiter || function(t, e, r, n) {
  function a(s) {
    return s instanceof r ? s : new r(function(o) {
      o(s);
    });
  }
  return new (r || (r = Promise))(function(s, o) {
    function i(h) {
      try {
        u(n.next(h));
      } catch (g) {
        o(g);
      }
    }
    function f(h) {
      try {
        u(n.throw(h));
      } catch (g) {
        o(g);
      }
    }
    function u(h) {
      h.done ? s(h.value) : a(h.value).then(i, f);
    }
    u((n = n.apply(t, e || [])).next());
  });
};
function vp(t, e) {
  return yp(this, void 0, void 0, function* () {
    e == null && (e = {});
    const r = {
      method: e.method || "GET",
      headers: e.headers || {},
      body: e.body || void 0
    };
    if (e.skipFetchSetup !== !0 && (r.mode = "cors", r.cache = "no-cache", r.credentials = "same-origin", r.redirect = "follow", r.referrer = "client"), e.fetchOptions != null) {
      const o = e.fetchOptions;
      o.mode && (r.mode = o.mode), o.cache && (r.cache = o.cache), o.credentials && (r.credentials = o.credentials), o.redirect && (r.redirect = o.redirect), o.referrer && (r.referrer = o.referrer);
    }
    const n = yield fetch(t, r), a = yield n.arrayBuffer(), s = {};
    return n.headers.forEach ? n.headers.forEach((o, i) => {
      s[i.toLowerCase()] = o;
    }) : n.headers.keys().forEach((o) => {
      s[o.toLowerCase()] = n.headers.get(o);
    }), {
      headers: s,
      statusCode: n.status,
      statusMessage: n.statusText,
      body: ae(new Uint8Array(a))
    };
  });
}
var Ap = globalThis && globalThis.__awaiter || function(t, e, r, n) {
  function a(s) {
    return s instanceof r ? s : new r(function(o) {
      o(s);
    });
  }
  return new (r || (r = Promise))(function(s, o) {
    function i(h) {
      try {
        u(n.next(h));
      } catch (g) {
        o(g);
      }
    }
    function f(h) {
      try {
        u(n.throw(h));
      } catch (g) {
        o(g);
      }
    }
    function u(h) {
      h.done ? s(h.value) : a(h.value).then(i, f);
    }
    u((n = n.apply(t, e || [])).next());
  });
};
const ar = new V(xp);
function Yc(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
function Xr(t, e) {
  if (t == null)
    return null;
  if (typeof t == "string")
    return t;
  if (Oa(t)) {
    if (e && (e.split("/")[0] === "text" || e.split(";")[0].trim() === "application/json"))
      try {
        return ta(t);
      } catch {
      }
    return ce(t);
  }
  return t;
}
function wp(t) {
  return At(t.replace(/%([0-9a-f][0-9a-f])/gi, (e, r) => String.fromCharCode(parseInt(r, 16))));
}
function kf(t, e, r) {
  const n = typeof t == "object" && t.throttleLimit != null ? t.throttleLimit : 12;
  ar.assertArgument(n > 0 && n % 1 === 0, "invalid connection throttle limit", "connection.throttleLimit", n);
  const a = typeof t == "object" ? t.throttleCallback : null, s = typeof t == "object" && typeof t.throttleSlotInterval == "number" ? t.throttleSlotInterval : 100;
  ar.assertArgument(s > 0 && s % 1 === 0, "invalid connection throttle slot interval", "connection.throttleSlotInterval", s);
  const o = typeof t == "object" ? !!t.errorPassThrough : !1, i = {};
  let f = null;
  const u = {
    method: "GET"
  };
  let h = !1, g = 2 * 60 * 1e3;
  if (typeof t == "string")
    f = t;
  else if (typeof t == "object") {
    if ((t == null || t.url == null) && ar.throwArgumentError("missing URL", "connection.url", t), f = t.url, typeof t.timeout == "number" && t.timeout > 0 && (g = t.timeout), t.headers)
      for (const F in t.headers)
        i[F.toLowerCase()] = { key: F, value: String(t.headers[F]) }, ["if-none-match", "if-modified-since"].indexOf(F.toLowerCase()) >= 0 && (h = !0);
    if (u.allowGzip = !!t.allowGzip, t.user != null && t.password != null) {
      f.substring(0, 6) !== "https:" && t.allowInsecureAuthentication !== !0 && ar.throwError("basic authentication requires a secure https url", V.errors.INVALID_ARGUMENT, { argument: "url", url: f, user: t.user, password: "[REDACTED]" });
      const F = t.user + ":" + t.password;
      i.authorization = {
        key: "Authorization",
        value: "Basic " + Ed(At(F))
      };
    }
    t.skipFetchSetup != null && (u.skipFetchSetup = !!t.skipFetchSetup), t.fetchOptions != null && (u.fetchOptions = Ht(t.fetchOptions));
  }
  const C = new RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"), E = f ? f.match(C) : null;
  if (E)
    try {
      const F = {
        statusCode: 200,
        statusMessage: "OK",
        headers: { "content-type": E[1] || "text/plain" },
        body: E[2] ? ui(E[3]) : wp(E[3])
      };
      let M = F.body;
      return r && (M = r(F.body, F)), Promise.resolve(M);
    } catch (F) {
      ar.throwError("processing response error", V.errors.SERVER_ERROR, {
        body: Xr(E[1], E[2]),
        error: F,
        requestBody: null,
        requestMethod: "GET",
        url: f
      });
    }
  e && (u.method = "POST", u.body = e, i["content-type"] == null && (i["content-type"] = { key: "Content-Type", value: "application/octet-stream" }), i["content-length"] == null && (i["content-length"] = { key: "Content-Length", value: String(e.length) }));
  const S = {};
  Object.keys(i).forEach((F) => {
    const M = i[F];
    S[M.key] = M.value;
  }), u.headers = S;
  const D = function() {
    let F = null;
    return { promise: new Promise(function(U, B) {
      g && (F = setTimeout(() => {
        F != null && (F = null, B(ar.makeError("timeout", V.errors.TIMEOUT, {
          requestBody: Xr(u.body, S["content-type"]),
          requestMethod: u.method,
          timeout: g,
          url: f
        })));
      }, g));
    }), cancel: function() {
      F != null && (clearTimeout(F), F = null);
    } };
  }(), x = function() {
    return Ap(this, void 0, void 0, function* () {
      for (let F = 0; F < n; F++) {
        let M = null;
        try {
          if (M = yield vp(f, u), F < n) {
            if (M.statusCode === 301 || M.statusCode === 302) {
              const U = M.headers.location || "";
              if (u.method === "GET" && U.match(/^https:/)) {
                f = M.headers.location;
                continue;
              }
            } else if (M.statusCode === 429) {
              let U = !0;
              if (a && (U = yield a(F, f)), U) {
                let B = 0;
                const W = M.headers["retry-after"];
                typeof W == "string" && W.match(/^[1-9][0-9]*$/) ? B = parseInt(W) * 1e3 : B = s * parseInt(String(Math.random() * Math.pow(2, F))), yield Yc(B);
                continue;
              }
            }
          }
        } catch (U) {
          M = U.response, M == null && (D.cancel(), ar.throwError("missing response", V.errors.SERVER_ERROR, {
            requestBody: Xr(u.body, S["content-type"]),
            requestMethod: u.method,
            serverError: U,
            url: f
          }));
        }
        let j = M.body;
        if (h && M.statusCode === 304 ? j = null : !o && (M.statusCode < 200 || M.statusCode >= 300) && (D.cancel(), ar.throwError("bad response", V.errors.SERVER_ERROR, {
          status: M.statusCode,
          headers: M.headers,
          body: Xr(j, M.headers ? M.headers["content-type"] : null),
          requestBody: Xr(u.body, S["content-type"]),
          requestMethod: u.method,
          url: f
        })), r)
          try {
            const U = yield r(j, M);
            return D.cancel(), U;
          } catch (U) {
            if (U.throttleRetry && F < n) {
              let B = !0;
              if (a && (B = yield a(F, f)), B) {
                const W = s * parseInt(String(Math.random() * Math.pow(2, F)));
                yield Yc(W);
                continue;
              }
            }
            D.cancel(), ar.throwError("processing response error", V.errors.SERVER_ERROR, {
              body: Xr(j, M.headers ? M.headers["content-type"] : null),
              error: U,
              requestBody: Xr(u.body, S["content-type"]),
              requestMethod: u.method,
              url: f
            });
          }
        return D.cancel(), j;
      }
      return ar.throwError("failed response", V.errors.SERVER_ERROR, {
        requestBody: Xr(u.body, S["content-type"]),
        requestMethod: u.method,
        url: f
      });
    });
  }();
  return Promise.race([D.promise, x]);
}
function Cp(t, e, r) {
  let n = (s, o) => {
    let i = null;
    if (s != null)
      try {
        i = JSON.parse(ta(s));
      } catch (f) {
        ar.throwError("invalid JSON", V.errors.SERVER_ERROR, {
          body: s,
          error: f
        });
      }
    return r && (i = r(i, o)), i;
  }, a = null;
  if (e != null) {
    a = At(e);
    const s = typeof t == "string" ? { url: t } : Ht(t);
    s.headers ? Object.keys(s.headers).filter((i) => i.toLowerCase() === "content-type").length !== 0 || (s.headers = Ht(s.headers), s.headers["content-type"] = "application/json") : s.headers = { "content-type": "application/json" }, t = s;
  }
  return kf(t, a, n);
}
function Ep(t, e) {
  return e || (e = {}), e = Ht(e), e.floor == null && (e.floor = 0), e.ceiling == null && (e.ceiling = 1e4), e.interval == null && (e.interval = 250), new Promise(function(r, n) {
    let a = null, s = !1;
    const o = () => s ? !1 : (s = !0, a && clearTimeout(a), !0);
    e.timeout && (a = setTimeout(() => {
      o() && n(new Error("timeout"));
    }, e.timeout));
    const i = e.retryLimit;
    let f = 0;
    function u() {
      return t().then(function(h) {
        if (h !== void 0)
          o() && r(h);
        else if (e.oncePoll)
          e.oncePoll.once("poll", u);
        else if (e.onceBlock)
          e.onceBlock.once("block", u);
        else if (!s) {
          if (f++, f > i) {
            o() && n(new Error("retry limit reached"));
            return;
          }
          let g = e.interval * parseInt(String(Math.random() * Math.pow(2, f)));
          g < e.floor && (g = e.floor), g > e.ceiling && (g = e.ceiling), setTimeout(u, g);
        }
        return null;
      }, function(h) {
        o() && n(h);
      });
    }
    u();
  });
}
const Ip = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _fetchData: kf,
  fetchJson: Cp,
  poll: Ep
}, Symbol.toStringTag, { value: "Module" })), kp = "solidity/5.7.0", Sp = new RegExp("^bytes([0-9]+)$"), Dp = new RegExp("^(u?int)([0-9]*)$"), Bp = new RegExp("^(.*)\\[([0-9]*)\\]$"), Fp = "0000000000000000000000000000000000000000000000000000000000000000", Un = new V(kp);
function Sf(t, e, r) {
  switch (t) {
    case "address":
      return r ? ga(e, 32) : ae(e);
    case "string":
      return At(e);
    case "bytes":
      return ae(e);
    case "bool":
      return e = e ? "0x01" : "0x00", r ? ga(e, 32) : ae(e);
  }
  let n = t.match(Dp);
  if (n) {
    let a = parseInt(n[2] || "256");
    return (n[2] && String(a) !== n[2] || a % 8 !== 0 || a === 0 || a > 256) && Un.throwArgumentError("invalid number type", "type", t), r && (a = 256), e = de.from(e).toTwos(a), ga(e, a / 8);
  }
  if (n = t.match(Sp), n) {
    const a = parseInt(n[1]);
    return (String(a) !== n[1] || a === 0 || a > 32) && Un.throwArgumentError("invalid bytes type", "type", t), ae(e).byteLength !== a && Un.throwArgumentError(`invalid value for ${t}`, "value", e), r ? ae((e + Fp).substring(0, 66)) : e;
  }
  if (n = t.match(Bp), n && Array.isArray(e)) {
    const a = n[1];
    parseInt(n[2] || String(e.length)) != e.length && Un.throwArgumentError(`invalid array length for ${t}`, "value", e);
    const o = [];
    return e.forEach(function(i) {
      o.push(Sf(a, i, !0));
    }), gt(o);
  }
  return Un.throwArgumentError("invalid type", "type", t);
}
function Si(t, e) {
  t.length != e.length && Un.throwArgumentError("wrong number of values; expected ${ types.length }", "values", e);
  const r = [];
  return t.forEach(function(n, a) {
    r.push(Sf(n, e[a]));
  }), ce(gt(r));
}
function Rp(t, e) {
  return Ge(Si(t, e));
}
function _p(t, e) {
  return En(Si(t, e));
}
const Tp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pack: Si,
  keccak256: Rp,
  sha256: _p
}, Symbol.toStringTag, { value: "Module" })), Mp = "units/5.7.0", Df = new V(Mp), Bf = [
  "wei",
  "kwei",
  "mwei",
  "gwei",
  "szabo",
  "finney",
  "ether"
];
function Up(t) {
  const e = String(t).split(".");
  (e.length > 2 || !e[0].match(/^-?[0-9]*$/) || e[1] && !e[1].match(/^[0-9]*$/) || t === "." || t === "-.") && Df.throwArgumentError("invalid value", "value", t);
  let r = e[0], n = "";
  for (r.substring(0, 1) === "-" && (n = "-", r = r.substring(1)); r.substring(0, 1) === "0"; )
    r = r.substring(1);
  r === "" && (r = "0");
  let a = "";
  for (e.length === 2 && (a = "." + (e[1] || "0")); a.length > 2 && a[a.length - 1] === "0"; )
    a = a.substring(0, a.length - 1);
  const s = [];
  for (; r.length; )
    if (r.length <= 3) {
      s.unshift(r);
      break;
    } else {
      const o = r.length - 3;
      s.unshift(r.substring(o)), r = r.substring(0, o);
    }
  return n + s.join(",") + a;
}
function Ff(t, e) {
  if (typeof e == "string") {
    const r = Bf.indexOf(e);
    r !== -1 && (e = 3 * r);
  }
  return ss(t, e != null ? e : 18);
}
function Di(t, e) {
  if (typeof t != "string" && Df.throwArgumentError("value must be a string", "value", t), typeof e == "string") {
    const r = Bf.indexOf(e);
    r !== -1 && (e = 3 * r);
  }
  return yr(t, e != null ? e : 18);
}
function Pp(t) {
  return Ff(t, 18);
}
function Op(t) {
  return Di(t, 18);
}
const Np = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commify: Up,
  formatUnits: Ff,
  parseUnits: Di,
  formatEther: Pp,
  parseEther: Op
}, Symbol.toStringTag, { value: "Module" })), Lp = "ethers/5.7.2";
new V(Lp);
const jp = [
  {
    chainId: 137,
    address: "0x1C954E8fe737F99f68Fa1CCda3e51ebDB291948C",
    _scan: "https://polygonscan.com/token/0x1C954E8fe737F99f68Fa1CCda3e51ebDB291948C",
    symbol: "KNC",
    name: "Kyber Network Crystal",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/dmm-interface/main/src/assets/images/KNC.svg"
  },
  {
    chainId: 137,
    address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
    _scan: "https://polygonscan.com/token/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
    symbol: "ETH",
    name: "Ether",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
  },
  {
    chainId: 137,
    address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    _scan: "https://polygonscan.com/token/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    symbol: "USDC",
    name: "USDC",
    decimals: 6,
    logoURI: "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png"
  },
  {
    chainId: 137,
    address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
    _scan: "https://polygonscan.com/token/0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
    symbol: "USDT",
    name: "USDT",
    decimals: 6,
    logoURI: "https://coin.top/production/logo/usdtlogo.png"
  },
  {
    chainId: 137,
    address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
    _scan: "https://polygonscan.com/token/0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
    symbol: "DAI",
    name: "DAI",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/9956/large/dai-multi-collateral-mcd.png"
  },
  {
    chainId: 137,
    address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
    _scan: "https://polygonscan.com/token/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
    symbol: "WMATIC",
    name: "Wrapped Matic",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/14073/small/matic.png"
  },
  {
    chainId: 137,
    address: "0x3A3e7650f8B9f667dA98F236010fBf44Ee4B2975",
    _scan: "https://polygonscan.com/token/0x3A3e7650f8B9f667dA98F236010fBf44Ee4B2975",
    symbol: "XUSD",
    name: "xDollar Stablecoin",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/16291/small/xUSD-web-transparent.png?1623661715"
  },
  {
    chainId: 137,
    address: "0x3Dc7B06dD0B1f08ef9AcBbD2564f8605b4868EEA",
    _scan: "https://polygonscan.com/token/0x3Dc7B06dD0B1f08ef9AcBbD2564f8605b4868EEA",
    symbol: "XDO",
    name: "xDollar",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/16289/small/logo-web-transparent_2.png"
  },
  {
    chainId: 137,
    address: "0x4e3Decbb3645551B8A19f0eA1678079FCB33fB4c",
    _scan: "https://polygonscan.com/token/0x4e3Decbb3645551B8A19f0eA1678079FCB33fB4c",
    symbol: "jEUR",
    name: "Jarvis Synthetic Euro",
    decimals: 18,
    logoURI: "https://i.imgur.com/92uhfao.png"
  },
  {
    chainId: 137,
    address: "0x767058F11800FBA6A682E73A6e79ec5eB74Fac8c",
    _scan: "https://polygonscan.com/token/0x767058F11800FBA6A682E73A6e79ec5eB74Fac8c",
    symbol: "jGBP",
    name: "Jarvis Synthetic British Pound",
    decimals: 18,
    logoURI: "https://i.imgur.com/HS7BMfs.png"
  },
  {
    chainId: 137,
    address: "0xbD1463F02f61676d53fd183C2B19282BFF93D099",
    _scan: "https://polygonscan.com/token/0xbD1463F02f61676d53fd183C2B19282BFF93D099",
    symbol: "jCHF",
    name: "Jarvis Synthetic Swiss Franc",
    decimals: 18,
    logoURI: "https://i.imgur.com/Fp31dDB.png"
  },
  {
    chainId: 137,
    address: "0x00e5646f60AC6Fb446f621d146B6E1886f002905",
    _scan: "https://polygonscan.com/token/0x00e5646f60AC6Fb446f621d146B6E1886f002905",
    symbol: "RAI",
    name: "Rai Reflex Index",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/14004/small/RAI-logo-coin.png?1613592334"
  },
  {
    chainId: 137,
    address: "0xfAdE2934b8E7685070149034384fB7863860D86e",
    _scan: "https://polygonscan.com/token/0xfAdE2934b8E7685070149034384fB7863860D86e",
    symbol: "AUR-0112",
    name: "Aureus",
    decimals: 18,
    logoURI: "https://i.imgur.com/PyipL43.png"
  },
  {
    chainId: 137,
    address: "0xc1c93D475dc82Fe72DBC7074d55f5a734F8cEEAE",
    _scan: "https://polygonscan.com/token/0xc1c93D475dc82Fe72DBC7074d55f5a734F8cEEAE",
    symbol: "PGX",
    name: "Pegaxy Stone",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/stevepegaxy/assets/master/blockchains/polygon/assets/0xc1c93D475dc82Fe72DBC7074d55f5a734F8cEEAE/logo.png"
  },
  {
    chainId: 137,
    address: "0xcC1B9517460D8aE86fe576f614d091fCa65a28Fc",
    _scan: "https://polygonscan.com/token/0xcC1B9517460D8aE86fe576f614d091fCa65a28Fc",
    symbol: "VIS",
    name: "Vigorus",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/stevepegaxy/assets/master/blockchains/polygon/assets/0xcC1B9517460D8aE86fe576f614d091fCa65a28Fc/logo.png"
  },
  {
    chainId: 137,
    address: "0x6Fb2415463e949aF08ce50F83E94b7e008BABf07",
    _scan: "https://polygonscan.com/token/0x6Fb2415463e949aF08ce50F83E94b7e008BABf07",
    symbol: "AUR-FEB22",
    name: "Aureus",
    decimals: 18,
    logoURI: ""
  },
  {
    chainId: 137,
    address: "0x2C89bbc92BD86F8075d1DEcc58C7F4E0107f286b",
    _scan: "https://polygonscan.com/token/0x2C89bbc92BD86F8075d1DEcc58C7F4E0107f286b",
    symbol: "AVAX",
    name: "Avalanche Token",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7/logo.png"
  },
  {
    chainId: 137,
    address: "0x5c4b7CCBF908E64F32e12c6650ec0C96d717f03F",
    _scan: "https://polygonscan.com/token/0x5c4b7CCBF908E64F32e12c6650ec0C96d717f03F",
    symbol: "BNB",
    name: "Binance Token",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"
  },
  {
    chainId: 137,
    address: "0xB85517b87BF64942adf3A0B9E4c71E4Bc5Caa4e5",
    _scan: "https://polygonscan.com/token/0xB85517b87BF64942adf3A0B9E4c71E4Bc5Caa4e5",
    symbol: "FTM",
    name: "Fantom Token",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3513.png"
  },
  {
    chainId: 137,
    address: "0x7DfF46370e9eA5f0Bad3C4E29711aD50062EA7A4",
    _scan: "https://polygonscan.com/token/0x7DfF46370e9eA5f0Bad3C4E29711aD50062EA7A4",
    symbol: "SOL",
    name: "SOL",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png"
  },
  {
    chainId: 137,
    address: "0xf2D8124b8F9267DaD61351c7aD252362880C6638",
    _scan: "https://polygonscan.com/token/0xf2D8124b8F9267DaD61351c7aD252362880C6638",
    symbol: "WCRO",
    name: "Wrapped CRO",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/14532.png"
  },
  {
    chainId: 137,
    address: "0x80c0CBDB8d0B190238795d376f0bD57fd40525F2",
    _scan: "https://polygonscan.com/token/0x80c0CBDB8d0B190238795d376f0bD57fd40525F2",
    symbol: "WONE",
    name: "Wrapped ONE",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11696.png"
  },
  {
    chainId: 137,
    address: "0xC25351811983818c9Fe6D8c580531819c8ADe90f",
    _scan: "https://polygonscan.com/token/0xC25351811983818c9Fe6D8c580531819c8ADe90f",
    symbol: "IDLE",
    name: "Idle (PoS)",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/7841.png"
  },
  {
    chainId: 137,
    address: "0xFbBd93fC3BE8B048c007666AF4846e4A36BACC95",
    _scan: "https://polygonscan.com/token/0xFbBd93fC3BE8B048c007666AF4846e4A36BACC95",
    symbol: "RIKEN",
    name: "RIKEN",
    decimals: 18,
    logoURI: "https://i.imgur.com/cTLXfWJ.png"
  },
  {
    chainId: 137,
    address: "0x9F994e2783b44C83204377589854A17c6b0c226d",
    _scan: "https://polygonscan.com/token/0x9F994e2783b44C83204377589854A17c6b0c226d",
    symbol: "RIGY",
    name: "RIGY",
    decimals: 18,
    logoURI: "https://i.imgur.com/0uZyC7M.png"
  },
  {
    chainId: 137,
    address: "0xD81F558b71A5323e433729009D55159955F8A7f9",
    _scan: "https://polygonscan.com/token/0xD81F558b71A5323e433729009D55159955F8A7f9",
    symbol: "UNB",
    name: "Unbound",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/7846.png"
  },
  {
    chainId: 137,
    address: "0x1eBA4B44C4F8cc2695347C6a78F0B7a002d26413",
    _scan: "https://polygonscan.com/token/0x1eBA4B44C4F8cc2695347C6a78F0B7a002d26413",
    symbol: "UND",
    name: "Unbound Dollar",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/7848.png"
  },
  {
    chainId: 137,
    address: "0x9111D6446Ac5b88A84cf06425c6286658368542F",
    _scan: "https://polygonscan.com/token/0x9111D6446Ac5b88A84cf06425c6286658368542F",
    symbol: "FLAG-PoS",
    name: "ForLootAndGlory",
    decimals: 18,
    logoURI: "https://app.forlootandglory.io/token_logo.png"
  },
  {
    chainId: 137,
    address: "0x3A58a54C066FdC0f2D55FC9C89F0415C92eBf3C4",
    _scan: "https://polygonscan.com/token/0x3A58a54C066FdC0f2D55FC9C89F0415C92eBf3C4",
    symbol: "stMATIC",
    name: "Staked MATIC (PoS)",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/18688.png"
  },
  {
    chainId: 137,
    address: "0x60138EFCeB1F7D8e10C8Cb89bb61BbDbEeBB4Ffc",
    _scan: "https://polygonscan.com/token/0x60138EFCeB1F7D8e10C8Cb89bb61BbDbEeBB4Ffc",
    symbol: "RICE",
    name: "Rice Wallet",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/RICE.png"
  },
  {
    chainId: 137,
    address: "0x76bF0C28e604CC3fE9967c83b3C3F31c213cfE64",
    _scan: "https://polygonscan.com/token/0x76bF0C28e604CC3fE9967c83b3C3F31c213cfE64",
    symbol: "CRYSTL",
    name: "Crystal Token",
    decimals: 18,
    logoURI: "https://www.crystl.finance/images/landing/shareholder.svg"
  },
  {
    chainId: 137,
    address: "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
    _scan: "https://polygonscan.com/token/0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
    decimals: 18,
    name: "MAI",
    symbol: "MAI",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/MAI.svg"
  },
  {
    chainId: 137,
    address: "0xc3c7d422809852031b44ab29eec9f1eff2a58756",
    _scan: "https://polygonscan.com/token/0xc3c7d422809852031b44ab29eec9f1eff2a58756",
    decimals: 18,
    name: "Lido DAO Token (PoS)",
    symbol: "LDO",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/LDO.png"
  },
  {
    chainId: 137,
    address: "0xD6DF932A45C0f255f85145f286eA0b292B21C90B",
    name: "Aave",
    symbol: "AAVE",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/7278.png"
  },
  {
    name: "Balancer",
    address: "0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3",
    symbol: "BAL",
    decimals: 18,
    chainId: 137,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/5728.png"
  },
  {
    name: "ChainLink Token",
    address: "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39",
    symbol: "LINK",
    decimals: 18,
    chainId: 137,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png"
  },
  {
    name: "Synthetix Network Token",
    address: "0x50B728D8D964fd00C2d0AAD81718b71311feF68a",
    symbol: "SNX",
    decimals: 18,
    chainId: 137,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/SNX.svg"
  },
  {
    name: "Uniswap",
    address: "0xb33EaAd8d922B1083446DC23f610c2567fB5180f",
    symbol: "UNI",
    decimals: 18,
    chainId: 137,
    logoURI: "ipfs://QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg"
  },
  {
    name: "Wrapped BTC",
    address: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
    symbol: "WBTC",
    decimals: 8,
    chainId: 137,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png"
  },
  {
    chainId: 137,
    address: "0x580a84c73811e1839f75d86d75d88cca0c241ff4",
    _scan: "https://polygonscan.com/token/0x580a84c73811e1839f75d86d75d88cca0c241ff4",
    name: "Qi Dao",
    symbol: "QI",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/QI.svg"
  },
  {
    chainId: 137,
    address: "0xbbba073c31bf03b8acf7c28ef0738decf3695683",
    _scan: "https://polygonscan.com/token/0xbbba073c31bf03b8acf7c28ef0738decf3695683",
    decimals: 18,
    name: "The SandBox",
    symbol: "Sand",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/6210.png"
  },
  {
    chainId: 137,
    address: "0x013f9c3fac3e2759d7e90aca4f9540f75194a0d7",
    _scan: "https://polygonscan.com/token/0x013f9c3fac3e2759d7e90aca4f9540f75194a0d7",
    decimals: 18,
    name: "Neutrino USD",
    symbol: "USDN",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/5068.png"
  },
  {
    chainId: 137,
    address: "0x2e1ad108ff1d8c782fcbbb89aad783ac49586756",
    _scan: "https://polygonscan.com/token/0x2e1ad108ff1d8c782fcbbb89aad783ac49586756",
    decimals: 18,
    name: "TrueUSD",
    symbol: "TUSD",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/2563.png"
  },
  {
    chainId: 137,
    address: "0x5fe2b58c013d7601147dcdd68c143a77499f5531",
    _scan: "https://polygonscan.com/token/0x5fe2b58c013d7601147dcdd68c143a77499f5531",
    decimals: 18,
    name: "The Graph",
    symbol: "GRT",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/GRT.png"
  },
  {
    chainId: 137,
    address: "0x3cef98bb43d732e2f285ee605a8158cde967d219",
    _scan: "https://polygonscan.com/token/0x3cef98bb43d732e2f285ee605a8158cde967d219",
    decimals: 18,
    name: "Basic Attention",
    symbol: "BAT",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/BAT.svg"
  },
  {
    chainId: 137,
    address: "0x9c2c5fd7b07e95ee044ddeba0e97a665f142394f",
    _scan: "https://polygonscan.com/token/0x9c2c5fd7b07e95ee044ddeba0e97a665f142394f",
    decimals: 18,
    name: "1inch",
    symbol: "1INCH",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/1INCH.png"
  },
  {
    chainId: 137,
    address: "0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a",
    _scan: "https://polygonscan.com/token/0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a",
    decimals: 18,
    name: "Sushi",
    symbol: "SUSHI",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/SUSHI.svg"
  },
  {
    chainId: 137,
    address: "0xB46E0ae620EFd98516f49bb00263317096C114b2",
    _scan: "https://polygonscan.com/token/0xB46E0ae620EFd98516f49bb00263317096C114b2",
    decimals: 18,
    name: "Theta Token",
    symbol: "THETA",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/2416.png"
  },
  {
    chainId: 137,
    address: "0x6f7C932e7684666C9fd1d44527765433e01fF61d",
    _scan: "https://polygonscan.com/token/0x6f7C932e7684666C9fd1d44527765433e01fF61d",
    decimals: 18,
    name: "Maker",
    symbol: "MKR",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/MKR.svg"
  },
  {
    chainId: 137,
    address: "0x6F3B3286fd86d8b47EC737CEB3D0D354cc657B3e",
    _scan: "https://polygonscan.com/token/0x6F3B3286fd86d8b47EC737CEB3D0D354cc657B3e",
    decimals: 18,
    name: "Paxos Standard",
    symbol: "PAX",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/3330.png"
  },
  {
    chainId: 137,
    address: "0xFAD65Eb62a97fF5Ed91B23aFD039956aaCa6e93b",
    _scan: "https://polygonscan.com/token/0xFAD65Eb62a97fF5Ed91B23aFD039956aaCa6e93b",
    decimals: 18,
    name: "HuobiToken",
    symbol: "HT",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/2502.png"
  },
  {
    chainId: 137,
    address: "0xFFA4D863C96e743A2e1513824EA006B8D0353C57",
    _scan: "https://polygonscan.com/token/0xFFA4D863C96e743A2e1513824EA006B8D0353C57",
    decimals: 18,
    name: "Decentralized USD",
    symbol: "USDD",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/USDD.svg"
  },
  {
    chainId: 137,
    address: "0x0621d647cecbFb64b79E44302c1933cB4f27054d",
    _scan: "https://polygonscan.com/token/0x0621d647cecbFb64b79E44302c1933cB4f27054d",
    decimals: 18,
    name: "Amp",
    symbol: "AMP",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/6945.png"
  },
  {
    chainId: 137,
    address: "0xf1938Ce12400f9a761084E7A80d37e732a4dA056",
    _scan: "https://polygonscan.com/token/0xf1938Ce12400f9a761084E7A80d37e732a4dA056",
    decimals: 18,
    name: "chiliZ",
    symbol: "CHZ",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/4066.png"
  },
  {
    chainId: 137,
    address: "0x553d3D295e0f695B9228246232eDF400ed3560B5",
    _scan: "https://polygonscan.com/token/0x553d3D295e0f695B9228246232eDF400ed3560B5",
    decimals: 18,
    name: "Paxos Gold",
    symbol: "PAXG",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/4705.png"
  },
  {
    chainId: 137,
    address: "0x84e1670F61347CDaeD56dcc736FB990fBB47ddC1",
    _scan: "https://polygonscan.com/token/0x84e1670F61347CDaeD56dcc736FB990fBB47ddC1",
    decimals: 18,
    name: "LoopringCoin V2",
    symbol: "LRC",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/1934.png"
  },
  {
    chainId: 137,
    address: "0x7eC26842F195c852Fa843bB9f6D8B583a274a157",
    _scan: "https://polygonscan.com/token/0x7eC26842F195c852Fa843bB9f6D8B583a274a157",
    decimals: 18,
    name: "EnjinCoin",
    symbol: "ENJ",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/2130.png"
  },
  {
    chainId: 137,
    address: "0x6Bf2eb299E51Fc5DF30Dec81D9445dDe70e3F185",
    _scan: "https://polygonscan.com/token/0x6Bf2eb299E51Fc5DF30Dec81D9445dDe70e3F185",
    decimals: 6,
    name: "Serum",
    symbol: "SRM",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/SRM.png"
  },
  {
    chainId: 137,
    address: "0x1B815d120B3eF02039Ee11dC2d33DE7aA4a8C603",
    _scan: "https://polygonscan.com/token/0x1B815d120B3eF02039Ee11dC2d33DE7aA4a8C603",
    decimals: 18,
    name: "Wootrade Network",
    symbol: "WOO",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/7501.png"
  },
  {
    chainId: 137,
    address: "0x0C51f415cF478f8D08c246a6C6Ee180C5dC3A012",
    _scan: "https://polygonscan.com/token/0x0C51f415cF478f8D08c246a6C6Ee180C5dC3A012",
    decimals: 18,
    name: "HoloToken",
    symbol: "HOT",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/2682.png"
  },
  {
    chainId: 137,
    address: "0x5FFD62D3C3eE2E81C00A7b9079FB248e7dF024A8",
    _scan: "https://polygonscan.com/token/0x5FFD62D3C3eE2E81C00A7b9079FB248e7dF024A8",
    decimals: 18,
    name: "Gnosis",
    symbol: "GNO",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/1659.png"
  },
  {
    chainId: 137,
    address: "0x41b3966B4FF7b427969ddf5da3627d6AEAE9a48E",
    _scan: "https://polygonscan.com/token/0x41b3966B4FF7b427969ddf5da3627d6AEAE9a48E",
    decimals: 18,
    name: "Nexo",
    symbol: "NEXO",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/2694.png"
  },
  {
    chainId: 137,
    address: "0x7205705771547cF79201111B4bd8aaF29467b9eC",
    _scan: "https://polygonscan.com/token/0x7205705771547cF79201111B4bd8aaF29467b9eC",
    decimals: 18,
    name: "Rocket Pool",
    symbol: "RPL",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/RPL.png"
  },
  {
    chainId: 137,
    address: "0x62414D03084EeB269E18C970a21f45D2967F0170",
    _scan: "https://polygonscan.com/token/0x62414D03084EeB269E18C970a21f45D2967F0170",
    decimals: 18,
    name: "OMG Network",
    symbol: "OMG",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/1808.png"
  },
  {
    chainId: 137,
    address: "0xcB059C5573646047D6d88dDdb87B745C18161d3b",
    _scan: "https://polygonscan.com/token/0xcB059C5573646047D6d88dDdb87B745C18161d3b",
    decimals: 18,
    name: "Polymath",
    symbol: "POLY",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/2496.png"
  },
  {
    chainId: 137,
    address: "0x5559Edb74751A0edE9DeA4DC23aeE72cCA6bE3D5",
    _scan: "https://polygonscan.com/token/0x5559Edb74751A0edE9DeA4DC23aeE72cCA6bE3D5",
    decimals: 18,
    name: "ZRX",
    symbol: "ZRX",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/ZRX.png"
  },
  {
    chainId: 137,
    address: "0x3962F4A0A0051DccE0be73A7e09cEf5756736712",
    _scan: "https://polygonscan.com/token/0x3962F4A0A0051DccE0be73A7e09cEf5756736712",
    decimals: 18,
    name: "Livepeer Token",
    symbol: "LPT",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/3640.png"
  },
  {
    chainId: 137,
    address: "0x6aBB753C1893194DE4a83c6e8B4EadFc105Fd5f5",
    _scan: "https://polygonscan.com/token/0x6aBB753C1893194DE4a83c6e8B4EadFc105Fd5f5",
    decimals: 18,
    name: "Swipe",
    symbol: "SXP",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/4279.png"
  },
  {
    chainId: 137,
    address: "0x0B220b82F3eA3B7F6d9A1D8ab58930C064A2b5Bf",
    _scan: "https://polygonscan.com/token/0x0B220b82F3eA3B7F6d9A1D8ab58930C064A2b5Bf",
    decimals: 18,
    name: "Golem Network Token",
    symbol: "GLM",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/1455.png"
  },
  {
    chainId: 137,
    address: "0xf8F9efC0db77d8881500bb06FF5D6ABc3070E695",
    _scan: "https://polygonscan.com/token/0xf8F9efC0db77d8881500bb06FF5D6ABc3070E695",
    decimals: 18,
    name: "Synapse",
    symbol: "SYN",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/SYN.svg"
  },
  {
    chainId: 137,
    address: "0x67Ce67ec4fCd4aCa0Fcb738dD080b2a21ff69D75",
    _scan: "https://polygonscan.com/token/0x67Ce67ec4fCd4aCa0Fcb738dD080b2a21ff69D75",
    decimals: 8,
    name: "SwissBorg",
    symbol: "CHSB",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/2499.png"
  },
  {
    chainId: 137,
    address: "0xE0339c80fFDE91F3e20494Df88d4206D86024cdF",
    _scan: "https://polygonscan.com/token/0xE0339c80fFDE91F3e20494Df88d4206D86024cdF",
    decimals: 18,
    name: "Dogelon",
    symbol: "ELON",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/ELON.png"
  },
  {
    chainId: 137,
    address: "0x3066818837c5e6eD6601bd5a91B0762877A6B731",
    _scan: "https://polygonscan.com/token/0x3066818837c5e6eD6601bd5a91B0762877A6B731",
    decimals: 18,
    name: "UMA Voting Token v1",
    symbol: "UMA",
    logoURI: "https://ethereum-optimism.github.io/logos/UMA.png"
  },
  {
    chainId: 137,
    address: "0xC8A94a3d3D2dabC3C1CaffFFDcA6A7543c3e3e65",
    _scan: "https://polygonscan.com/token/0xC8A94a3d3D2dabC3C1CaffFFDcA6A7543c3e3e65",
    decimals: 2,
    name: "Gemini dollar",
    symbol: "GUSD",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/3306.png"
  },
  {
    chainId: 137,
    address: "0xE3322702BEdaaEd36CdDAb233360B939775ae5f1",
    _scan: "https://polygonscan.com/token/0xE3322702BEdaaEd36CdDAb233360B939775ae5f1",
    decimals: 18,
    name: "Tellor Tributes",
    symbol: "TRB",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/4944.png"
  },
  {
    chainId: 137,
    address: "0xD07A7FAc2857901E4bEC0D89bBDAe764723AAB86",
    _scan: "https://polygonscan.com/token/0xD07A7FAc2857901E4bEC0D89bBDAe764723AAB86",
    decimals: 18,
    name: "USDK",
    symbol: "USDK",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/4064.png"
  },
  {
    chainId: 137,
    address: "0xc26D47d5c33aC71AC5CF9F776D63Ba292a4F7842",
    _scan: "https://polygonscan.com/token/0xc26D47d5c33aC71AC5CF9F776D63Ba292a4F7842",
    decimals: 18,
    name: "Bancor",
    symbol: "BNT",
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C/logo.png"
  }
], Wp = [
  {
    chainId: 1,
    address: "0xdeFA4e8a7bcBA345F687a2f1456F5Edd9CE97202",
    symbol: "KNC",
    name: "Kyber Network Crystal",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/dmm-interface/main/src/assets/images/KNC.svg"
  },
  {
    chainId: 1,
    address: "0xdd974D5C2e2928deA5F71b9825b8b646686BD200",
    symbol: "KNCL",
    name: "Kyber Network Crystal Legacy",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/KNCL.png"
  },
  {
    chainId: 1,
    address: "0x1F3F677Ecc58F6A1F9e2CF410dF4776a8546b5DE",
    symbol: "VNDC",
    name: "VNDC",
    decimals: 18,
    logoURI: ""
  },
  {
    chainId: 1,
    address: "0x27702a26126e0B3702af63Ee09aC4d1A084EF628",
    symbol: "ALEPH",
    name: "Aleph.im",
    decimals: 18,
    logoURI: ""
  },
  {
    chainId: 1,
    address: "0x196f4727526eA7FB1e17b2071B3d8eAA38486988",
    symbol: "RSV",
    name: "Reserve",
    decimals: 18,
    logoURI: ""
  },
  {
    chainId: 1,
    address: "0x0ccD5DD52Dee42B171a623478e5261C1eaaE092A",
    symbol: "DFM",
    name: "DFM",
    decimals: 18,
    logoURI: "https://mycoldwalletnow.wpcomstaging.com/htdocs/wp-content/mcwhp/img/logo.svg"
  },
  {
    chainId: 1,
    address: "0x6e36556B3ee5Aa28Def2a8EC3DAe30eC2B208739",
    symbol: "BUILD",
    name: "BUILD Finance",
    decimals: 18,
    logoURI: "https://build.finance/images/logo.png"
  },
  {
    chainId: 1,
    address: "0xdB25f211AB05b1c97D595516F45794528a807ad8",
    symbol: "EURS",
    name: "STASIS EURS Token",
    decimals: 2,
    logoURI: ""
  },
  {
    chainId: 1,
    address: "0xff56Cc6b1E6dEd347aA0B7676C85AB0B3D08B0FA",
    symbol: "ORBS",
    name: "ORBS",
    decimals: 18,
    logoURI: ""
  },
  {
    chainId: 1,
    address: "0xbE9375C6a420D2eEB258962efB95551A5b722803",
    symbol: "STMX",
    name: "StormX",
    decimals: 18,
    logoURI: ""
  },
  {
    chainId: 1,
    address: "0xEBd9D99A3982d547C5Bb4DB7E3b1F9F14b67Eb83",
    symbol: "ID",
    name: "Everest ID",
    decimals: 18,
    logoURI: ""
  },
  {
    chainId: 1,
    address: "0xC57d533c50bC22247d49a368880fb49a1caA39F7",
    symbol: "PTF",
    name: "PowerTrade Fuel Token",
    decimals: 18,
    logoURI: ""
  },
  {
    chainId: 1,
    address: "0x0bfEc35a1A3550Deed3F6fC76Dde7FC412729a91",
    symbol: "XKNCA",
    name: "xKNCa",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/13995/thumb/Token-4.png?1613545763"
  },
  {
    chainId: 1,
    address: "0x6710c63432A2De02954fc0f851db07146a6c0312",
    symbol: "MFG",
    name: "Smart MFG",
    decimals: 18,
    logoURI: "https://i.imgur.com/oReNLqf.png"
  },
  {
    chainId: 1,
    address: "0x70e8dE73cE538DA2bEEd35d14187F6959a8ecA96",
    symbol: "XSGD",
    name: "XSGD",
    decimals: 6,
    logoURI: "https://assets.website-files.com/600e34cbaf525c42912af8b6/600e34cbaf525c7ad82af99b_xgd-img%20(1).svg"
  },
  {
    chainId: 1,
    address: "0xBCD515D6C5de70D3A31D999A7FA6a299657De294",
    symbol: "RICE",
    name: "RICE",
    decimals: 18,
    logoURI: "https://drive.google.com/uc?export=download&id=16PVXI1Da5P27cywWiyqrcV-Q17u1aXsi"
  },
  {
    chainId: 1,
    address: "0x0f17BC9a994b87b5225cFb6a2Cd4D667ADb4F20B",
    symbol: "jEUR",
    name: "Jarvis Synthetic Euro",
    decimals: 18,
    logoURI: "https://i.imgur.com/92uhfao.png"
  },
  {
    chainId: 1,
    address: "0x7409856CAE628f5d578B285B45669b36E7005283",
    symbol: "jGBP",
    name: "Jarvis Synthetic British Pound",
    decimals: 18,
    logoURI: "https://i.imgur.com/HS7BMfs.png"
  },
  {
    chainId: 1,
    address: "0x53dfEa0A8CC2A2A2e425E1C174Bc162999723ea0",
    symbol: "jCHF",
    name: "Jarvis Synthetic Swiss Franc",
    decimals: 18,
    logoURI: "https://i.imgur.com/Fp31dDB.png"
  },
  {
    chainId: 1,
    address: "0x7F3EDcdD180Dbe4819Bd98FeE8929b5cEdB3AdEB",
    symbol: "XTK",
    name: "xToken",
    decimals: 18,
    logoURI: ""
  },
  {
    chainId: 1,
    address: "0xd7DCd9B99787C619b4D57979521258D1A7267ad7",
    symbol: "EVRY",
    name: "Evrynet Token",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11458.png"
  },
  {
    chainId: 1,
    address: "0x656C00e1BcD96f256F224AD9112FF426Ef053733",
    symbol: "EFI",
    name: "Efinity Token",
    decimals: 18,
    logoURI: ""
  },
  {
    chainId: 1,
    address: "0x8dB253a1943DdDf1AF9bcF8706ac9A0Ce939d922",
    symbol: "UNB",
    name: "Unbound",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/7846.png"
  },
  {
    chainId: 1,
    address: "0x0C0F2b41F758d66bB8e694693B0f9e6FaE726499",
    symbol: "UND",
    name: "Unbound Dollar",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/7848.png"
  },
  {
    chainId: 1,
    address: "0x431ad2ff6a9C365805eBaD47Ee021148d6f7DBe0",
    symbol: "DF",
    name: "dForce",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/dforce-network/documents/2eea27372fda6a207f60fba4274ad68008d63694/logos/Lending/DF.svg"
  },
  {
    chainId: 1,
    address: "0x0a5E677a6A24b2F1A2Bf4F3bFfC443231d2fDEc8",
    symbol: "USX",
    name: "dForce USD",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/dforce-network/documents/2eea27372fda6a207f60fba4274ad68008d63694/logos/Lending/USX.svg"
  },
  {
    chainId: 1,
    address: "0xb986F3a2d91d3704Dc974A24FB735dCc5E3C1E70",
    symbol: "EUX",
    name: "dForce EUR",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/dforce-network/documents/2eea27372fda6a207f60fba4274ad68008d63694/logos/Lending/EUX.svg"
  },
  {
    chainId: 1,
    address: "0x60EF10EDfF6D600cD91caeCA04caED2a2e605Fe5",
    symbol: "MOCHI",
    name: "Mochi Inu",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/14315.png"
  },
  {
    chainId: 1,
    address: "0x9F52c8ecbEe10e00D9faaAc5Ee9Ba0fF6550F511",
    symbol: "SIPHER",
    name: "SIPHER",
    decimals: 18,
    logoURI: "https://i.imgur.com/zhZo9Bx.jpg"
  },
  {
    chainId: 1,
    address: "0x4d224452801aced8b2f0aebe155379bb5d594381",
    symbol: "APE",
    name: "ApeCoin",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/18876.png"
  },
  {
    chainId: 1,
    address: "0xb620be8a1949aa9532e6a3510132864ef9bc3f82",
    symbol: "LFT",
    name: "Lend Flare Dao Token",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/19189.png"
  },
  {
    chainId: 1,
    address: "0x7C5A0CE9267ED19B22F8cae653F198e3E8daf098",
    symbol: "SAN",
    name: "Santiment Network Token",
    decimals: 18,
    logoURI: "https://i.imgur.com/OH663J3.jpg"
  },
  {
    chainId: 1,
    address: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
    symbol: "wstETH",
    name: "Wrapped stETH (Lido)",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/18834/large/wstETH.png"
  },
  {
    chainId: 1,
    address: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
    symbol: "stETH",
    name: "stETH (Lido)",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/13442/large/steth_logo.png"
  },
  {
    chainId: 1,
    address: "0xA64c3a85ddc4cD351Eeb7aeceBc6a44A64A76392",
    symbol: "RICE",
    name: "Rice Wallet",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/RICE.png"
  },
  {
    chainId: 1,
    address: "0xCC8Fa225D80b9c7D42F96e9570156c65D6cAAa25",
    symbol: "SLP",
    name: "Smooth Love Potion",
    decimals: 0,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/slp.svg"
  },
  {
    chainId: 1,
    address: "0x9c354503C38481a7A7a51629142963F98eCC12D0",
    symbol: "OGV",
    name: "Origin Dollar Governance",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/26353/large/ogv-200x200.png"
  },
  {
    chainId: 1,
    address: "0xD2af830E8CBdFed6CC11Bab697bB25496ed6FA62",
    symbol: "wOUSD",
    name: "Wrapped OUSD",
    decimals: 18,
    logoURI: "https://www.ousd.com/images/ousd-coin.svg"
  },
  {
    chainId: 1,
    address: "0x2A8e1E676Ec238d8A992307B495b45B3fEAa5e86",
    symbol: "OUSD",
    name: "Origin Dollar",
    decimals: 18,
    logoURI: "https://www.ousd.com/images/ousd-coin.svg"
  },
  {
    chainId: 1,
    address: "0x8207c1FfC5B6804F6024322CcF34F29c3541Ae26",
    symbol: "OGN",
    name: "Origin Token",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/5117.png"
  },
  {
    chainId: 1,
    address: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
    symbol: "AAVE",
    name: "Aave",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/7278.png"
  },
  {
    chainId: 1,
    address: "0xfF20817765cB7f73d4bde2e66e067E58D11095C2",
    symbol: "AMP",
    name: "Amp",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/6945.png"
  },
  {
    chainId: 1,
    address: "0xba100000625a3754423978a60c9317c58a424e3D",
    symbol: "BAL",
    name: "Balancer",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xba100000625a3754423978a60c9317c58a424e3D/logo.png"
  },
  {
    chainId: 1,
    address: "0xBA11D00c5f74255f56a5E366F4F77f5A186d7f55",
    symbol: "BAND",
    name: "Band Protocol",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/4679.png"
  },
  {
    chainId: 1,
    address: "0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C",
    symbol: "BNT",
    name: "Bancor Network Token",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C/logo.png"
  },
  {
    chainId: 1,
    address: "0xc00e94Cb662C3520282E6f5717214004A7f26888",
    symbol: "COMP",
    name: "Compound",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xc00e94Cb662C3520282E6f5717214004A7f26888/logo.png"
  },
  {
    chainId: 1,
    address: "0xD533a949740bb3306d119CC777fa900bA034cd52",
    symbol: "CRV",
    name: "Curve DAO Token",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xD533a949740bb3306d119CC777fa900bA034cd52/logo.png"
  },
  {
    chainId: 1,
    address: "0x41e5560054824eA6B0732E656E3Ad64E20e94E45",
    symbol: "CVC",
    name: "Civic",
    decimals: 8,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1816.png"
  },
  {
    chainId: 1,
    address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    symbol: "DAI",
    name: "Dai Stablecoin",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"
  },
  {
    chainId: 1,
    address: "0x0AbdAce70D3790235af448C88547603b945604ea",
    symbol: "DNT",
    name: "district0x",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1856.png"
  },
  {
    chainId: 1,
    address: "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72",
    symbol: "ENS",
    name: "Ethereum Name Service",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/13855.png"
  },
  {
    chainId: 1,
    address: "0x6810e776880C02933D47DB1b9fc05908e5386b96",
    symbol: "GNO",
    name: "Gnosis Token",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6810e776880C02933D47DB1b9fc05908e5386b96/logo.png"
  },
  {
    chainId: 1,
    address: "0xc944E90C64B2c07662A292be6244BDf05Cda44a7",
    symbol: "GRT",
    name: "The Graph",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/GRT.png"
  },
  {
    chainId: 1,
    address: "0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC",
    symbol: "KEEP",
    name: "Keep Network",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/5566.png"
  },
  {
    chainId: 1,
    address: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
    symbol: "LINK",
    name: "ChainLink Token",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png"
  },
  {
    chainId: 1,
    address: "0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD",
    symbol: "LRC",
    name: "LoopringCoin V2",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD/logo.png"
  },
  {
    chainId: 1,
    address: "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942",
    symbol: "MANA",
    name: "Decentraland",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1966.png"
  },
  {
    chainId: 1,
    address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
    symbol: "MATIC",
    name: "Polygon",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png"
  },
  {
    chainId: 1,
    address: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
    symbol: "MKR",
    name: "Maker",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/MKR.svg"
  },
  {
    chainId: 1,
    address: "0xec67005c4E498Ec7f55E092bd1d35cbC47C91892",
    symbol: "MLN",
    name: "Melon",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/605/thumb/melon.png?1547034295"
  },
  {
    chainId: 1,
    address: "0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671",
    symbol: "NMR",
    name: "Numeraire",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671/logo.png"
  },
  {
    chainId: 1,
    address: "0x4fE83213D56308330EC302a8BD641f1d0113A4Cc",
    symbol: "NU",
    name: "NuCypher",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/4761.png"
  },
  {
    chainId: 1,
    address: "0x4575f41308EC1483f3d399aa9a2826d74Da13Deb",
    symbol: "OXT",
    name: "Orchid",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4575f41308EC1483f3d399aa9a2826d74Da13Deb/logo.png"
  },
  {
    chainId: 1,
    address: "0x408e41876cCCDC0F92210600ef50372656052a38",
    symbol: "REN",
    name: "Republic Token",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x408e41876cCCDC0F92210600ef50372656052a38/logo.png"
  },
  {
    chainId: 1,
    address: "0x1985365e9f78359a9B6AD760e32412f4a445E862",
    symbol: "REP",
    name: "Reputation Augur v1",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1985365e9f78359a9B6AD760e32412f4a445E862/logo.png"
  },
  {
    chainId: 1,
    address: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
    symbol: "SNX",
    name: "Synthetix Network Token",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/SNX.svg"
  },
  {
    chainId: 1,
    address: "0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC",
    symbol: "STORJ",
    name: "Storj Token",
    decimals: 8,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC/logo.png"
  },
  {
    chainId: 1,
    address: "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51",
    symbol: "sUSD",
    name: "Synth sUSD",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/2927.png"
  },
  {
    chainId: 1,
    address: "0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa",
    symbol: "TBTC",
    name: "tBTC",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/5776.png"
  },
  {
    chainId: 1,
    address: "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828",
    symbol: "UMA",
    name: "UMA Voting Token v1",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828/logo.png"
  },
  {
    chainId: 1,
    address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    symbol: "UNI",
    name: "Uniswap",
    decimals: 18,
    logoURI: "ipfs://QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg"
  },
  {
    chainId: 1,
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    symbol: "USDC",
    name: "USDCoin",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"
  },
  {
    chainId: 1,
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    symbol: "USDT",
    name: "Tether USD",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png"
  },
  {
    chainId: 1,
    address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    symbol: "WBTC",
    name: "Wrapped BTC",
    decimals: 8,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png"
  },
  {
    chainId: 1,
    address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    symbol: "WETH",
    name: "Wrapped Ether",
    decimals: 18,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/e82896b2-ebf3-4a5c-bcca-cff1036fd885.png"
  },
  {
    chainId: 1,
    address: "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
    symbol: "YFI",
    name: "yearn finance",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/5864.png"
  },
  {
    chainId: 1,
    address: "0xE41d2489571d322189246DaFA5ebDe1F4699F498",
    symbol: "ZRX",
    name: "0x Protocol Token",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/ZRX.png"
  },
  {
    chainId: 1,
    address: "0xC285B7E09A4584D027E5BC36571785B515898246",
    symbol: "CUSD",
    name: "Coin98 Dollar",
    decimals: 18,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/9c83c438-c1a8-41a6-be94-823dda2f65dc.png"
  },
  {
    chainId: 1,
    address: "0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3",
    symbol: "LEO",
    name: "Bitfinex LEO Token",
    decimals: 18,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/1dc17949-c011-4822-b3f8-6e202cb69cd0.png"
  }
], Hp = [
  {
    chainId: 56,
    address: "0xfe56d5892BDffC7BF58f2E84BE1b2C32D21C308b",
    _scan: "https://bscscan.com/token/0xfe56d5892BDffC7BF58f2E84BE1b2C32D21C308b",
    symbol: "KNC",
    name: "Kyber Network Crystal",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/dmm-interface/main/src/assets/images/KNC.svg"
  },
  {
    chainId: 56,
    address: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
    _scan: "https://bscscan.com/token/0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
    symbol: "ETH",
    name: "Ether",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
  },
  {
    chainId: 56,
    address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
    _scan: "https://bscscan.com/token/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
    symbol: "USDC",
    name: "USDC",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png"
  },
  {
    chainId: 56,
    address: "0x55d398326f99059fF775485246999027B3197955",
    _scan: "https://bscscan.com/token/0x55d398326f99059fF775485246999027B3197955",
    symbol: "USDT",
    name: "USDT",
    decimals: 18,
    logoURI: "https://coin.top/production/logo/usdtlogo.png"
  },
  {
    chainId: 56,
    address: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
    _scan: "https://bscscan.com/token/0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
    symbol: "DAI",
    name: "DAI",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/9956/large/dai-multi-collateral-mcd.png"
  },
  {
    chainId: 56,
    address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    _scan: "https://bscscan.com/token/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    symbol: "WBNB",
    name: "Wrapped BNB",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/12591/small/binance-coin-logo.png"
  },
  {
    chainId: 56,
    address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
    _scan: "https://bscscan.com/token/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
    symbol: "BUSD",
    name: "BUSD",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/9576/small/BUSD.png"
  },
  {
    chainId: 56,
    address: "0x633237C6FA30FAe46Cc5bB22014DA30e50a718cC",
    _scan: "https://bscscan.com/token/0x633237C6FA30FAe46Cc5bB22014DA30e50a718cC",
    symbol: "FIWA",
    name: "FIWA",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/18208/small/defi_warrior.PNG?1630986310"
  },
  {
    chainId: 56,
    address: "0xE8176d414560cFE1Bf82Fd73B986823B89E4F545",
    _scan: "https://bscscan.com/token/0xE8176d414560cFE1Bf82Fd73B986823B89E4F545",
    symbol: "HERO",
    name: "HERO",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/17700/small/stephero.PNG"
  },
  {
    chainId: 56,
    address: "0xD6Cce248263ea1e2b8cB765178C944Fc16Ed0727",
    _scan: "https://bscscan.com/token/0xD6Cce248263ea1e2b8cB765178C944Fc16Ed0727",
    symbol: "CTR",
    name: "Creator Chain",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/10391.png"
  },
  {
    chainId: 56,
    address: "0x4A9A2b2b04549C3927dd2c9668A5eF3fCA473623",
    _scan: "https://bscscan.com/token/0x4A9A2b2b04549C3927dd2c9668A5eF3fCA473623",
    symbol: "DF",
    name: "dForce",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/dforce-network/documents/2eea27372fda6a207f60fba4274ad68008d63694/logos/Lending/DF.svg"
  },
  {
    chainId: 56,
    address: "0xB5102CeE1528Ce2C760893034A4603663495fD72",
    _scan: "https://bscscan.com/token/0xB5102CeE1528Ce2C760893034A4603663495fD72",
    symbol: "USX",
    name: "dForce USD",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/dforce-network/documents/2eea27372fda6a207f60fba4274ad68008d63694/logos/Lending/USX.svg"
  },
  {
    chainId: 56,
    address: "0x367c17D19fCd0f7746764455497D63c8e8b2BbA3",
    _scan: "https://bscscan.com/token/0x367c17D19fCd0f7746764455497D63c8e8b2BbA3",
    symbol: "EUX",
    name: "dForce EUR",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/dforce-network/documents/2eea27372fda6a207f60fba4274ad68008d63694/logos/Lending/EUX.svg"
  },
  {
    chainId: 56,
    address: "0x3944aC66b9b9B40a6474022D6962b6cAA001b5E3",
    _scan: "https://bscscan.com/token/0x3944aC66b9b9B40a6474022D6962b6cAA001b5E3",
    symbol: "EBA",
    name: "Elpis Battle",
    decimals: 18,
    logoURI: "https://i.imgur.com/Tzs373u.png"
  },
  {
    chainId: 56,
    address: "0xE81257d932280AE440B17AFc5f07C8A110D21432",
    _scan: "https://bscscan.com/token/0xE81257d932280AE440B17AFc5f07C8A110D21432",
    symbol: "ZUKI",
    name: "ZUKI MOBA",
    decimals: 18,
    logoURI: "https://zukimoba.com/images/logos/logo.png"
  },
  {
    chainId: 56,
    address: "0xe91a8D2c584Ca93C7405F15c22CdFE53C29896E3",
    _scan: "https://bscscan.com/token/0xe91a8D2c584Ca93C7405F15c22CdFE53C29896E3",
    symbol: "DEXT",
    name: "DEXTools",
    decimals: 18,
    logoURI: "https://bscscan.com/token/images/dextools_32.png"
  },
  {
    chainId: 56,
    address: "0xd07e82440A395f3F3551b42dA9210CD1Ef4f8B24",
    _scan: "https://bscscan.com/token/0xd07e82440A395f3F3551b42dA9210CD1Ef4f8B24",
    symbol: "PRL",
    name: "Parallel",
    decimals: 18,
    logoURI: "https://i.imgur.com/99UaEcO.png"
  },
  {
    chainId: 56,
    address: "0xc04a23149efdF9A63697f3Eb60705147e9f07FfD",
    _scan: "https://bscscan.com/token/0xc04a23149efdF9A63697f3Eb60705147e9f07FfD",
    symbol: "GENI",
    name: "GemUni",
    decimals: 18,
    logoURI: "https://i.imgur.com/f5JZgpy.png"
  },
  {
    chainId: 56,
    address: "0x5fdAb5BDbad5277B383B3482D085f4bFef68828C",
    _scan: "https://bscscan.com/token/0x5fdAb5BDbad5277B383B3482D085f4bFef68828C",
    symbol: "DFH",
    name: "DeFiHorse",
    decimals: 18,
    logoURI: "https://i.imgur.com/nQryhVr.jpg"
  },
  {
    chainId: 56,
    address: "0x3019BF2a2eF8040C242C9a4c5c4BD4C81678b2A1",
    _scan: "https://bscscan.com/token/0x3019BF2a2eF8040C242C9a4c5c4BD4C81678b2A1",
    symbol: "GMT",
    name: "STEPN",
    decimals: 8,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/18069.png"
  },
  {
    chainId: 56,
    address: "0x301AF3Eff0c904Dc5DdD06FAa808f653474F7FcC",
    _scan: "https://bscscan.com/token/0x301AF3Eff0c904Dc5DdD06FAa808f653474F7FcC",
    symbol: "UNB",
    name: "Unbound",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/7846.png"
  },
  {
    chainId: 56,
    address: "0xE7C04392A3a426D532f83cA968Bcc0341E99583D",
    _scan: "https://bscscan.com/token/0xE7C04392A3a426D532f83cA968Bcc0341E99583D",
    symbol: "UND",
    name: "Unbound Dollar",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/7848.png"
  },
  {
    chainId: 56,
    address: "0x393C44A497706DDE15996BB0C7Bdf691A79De38a",
    _scan: "https://bscscan.com/token/0x393C44A497706DDE15996BB0C7Bdf691A79De38a",
    symbol: "FBL",
    name: "FootballBattle",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/fbl.png"
  },
  {
    chainId: 56,
    address: "0x261C94f2d3CcCAE76f86F6C8F2C93785DD6cE022",
    _scan: "https://bscscan.com/token/0x261C94f2d3CcCAE76f86F6C8F2C93785DD6cE022",
    symbol: "ATH",
    name: "AETHR",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/ath.png"
  },
  {
    chainId: 56,
    address: "0xCf909EF9A61dC5b05D46B5490A9f00D51c40Bb28",
    _scan: "https://bscscan.com/token/0xCf909EF9A61dC5b05D46B5490A9f00D51c40Bb28",
    symbol: "RICE",
    name: "Rice Wallet",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/RICE.png"
  },
  {
    chainId: 56,
    address: "0x8717e80EfF08F53A45b4A925009957E14860A8a8",
    _scan: "https://bscscan.com/token/0x8717e80EfF08F53A45b4A925009957E14860A8a8",
    symbol: "BHO",
    name: "BHO Network",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/12280.png"
  },
  {
    chainId: 56,
    address: "0x92dA433dA84d58DFe2aade1943349e491Cbd6820",
    _scan: "https://bscscan.com/token/0x92dA433dA84d58DFe2aade1943349e491Cbd6820",
    symbol: "RDR",
    name: "Rise of Defenders",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/16051.png"
  },
  {
    chainId: 56,
    address: "0x85EAC5Ac2F758618dFa09bDbe0cf174e7d574D5B",
    _scan: "https://bscscan.com/token/0x85EAC5Ac2F758618dFa09bDbe0cf174e7d574D5B",
    symbol: "TRX",
    name: "TRON",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/trx.png"
  },
  {
    chainId: 56,
    address: "0x715D400F88C167884bbCc41C5FeA407ed4D2f8A0",
    _scan: "https://bscscan.com/token/0x715D400F88C167884bbCc41C5FeA407ed4D2f8A0",
    symbol: "AXS",
    name: "Axie Infinity Shard",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/axs.png"
  },
  {
    chainId: 56,
    address: "0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402",
    _scan: "https://bscscan.com/token/0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402",
    symbol: "DOT",
    name: "Polkadot Token",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/dot.png"
  },
  {
    chainId: 56,
    address: "0x2222227E22102Fe3322098e4CBfE18cFebD57c95",
    _scan: "https://bscscan.com/token/0x2222227E22102Fe3322098e4CBfE18cFebD57c95",
    symbol: "TLM",
    name: "Alien Worlds Trilium",
    decimals: 4,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/tlm.png"
  },
  {
    chainId: 56,
    address: "0xeE89Bd9aF5e72B19B48cac3E51acDe3A09A3AdE3",
    _scan: "https://bscscan.com/token/0xeE89Bd9aF5e72B19B48cac3E51acDe3A09A3AdE3",
    symbol: "TRUSTK",
    name: "Trustkey Wallet",
    decimals: 18,
    logoURI: "https://blog.trustkeys.network/wp-content/uploads/2019/08/cropped-AppIcon_OK_500.png"
  },
  {
    chainId: 56,
    address: "0xDbCcd9131405DD1fE7320090Af337952B9845DFA",
    _scan: "https://bscscan.com/token/0xDbCcd9131405DD1fE7320090Af337952B9845DFA",
    symbol: "BOT",
    name: "Starbots Token (Wormhole)",
    decimals: 8,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/BOT.png"
  },
  {
    chainId: 56,
    address: "0x3F56e0c36d275367b8C502090EDF38289b3dEa0d",
    _scan: "https://bscscan.com/token/0x3F56e0c36d275367b8C502090EDF38289b3dEa0d",
    decimals: 18,
    name: "MAI",
    symbol: "MAI",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/MAI.svg"
  }
], zp = [
  {
    chainId: 43114,
    address: "0x39fC9e94Caeacb435842FADeDeCB783589F50f5f",
    _scan: "https://snowtrace.io/token/0x39fC9e94Caeacb435842FADeDeCB783589F50f5f",
    symbol: "KNC",
    name: "Kyber Network Crystal",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/dmm-interface/main/src/assets/images/KNC.svg"
  },
  {
    chainId: 43114,
    address: "0x938fe3788222a74924e062120e7bfac829c719fb",
    _scan: "https://snowtrace.io/token/0x938fe3788222a74924e062120e7bfac829c719fb",
    symbol: "APEIN",
    name: "Ape In",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/18262/small/apein.PNG"
  },
  {
    chainId: 43114,
    address: "0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17",
    _scan: "https://snowtrace.io/token/0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17",
    symbol: "DYP",
    name: "DeFiYieldProtocol",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17/logo.png"
  },
  {
    chainId: 43114,
    address: "0xd1c3f94DE7e5B45fa4eDBBA472491a9f4B166FC4",
    _scan: "https://snowtrace.io/token/0xd1c3f94DE7e5B45fa4eDBBA472491a9f4B166FC4",
    symbol: "XAVA",
    name: "Avalaunch",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/0xd1c3f94DE7e5B45fa4eDBBA472491a9f4B166FC4/logo.png"
  },
  {
    chainId: 43114,
    address: "0x130966628846BFd36ff31a822705796e8cb8C18D",
    _scan: "https://snowtrace.io/token/0x130966628846BFd36ff31a822705796e8cb8C18D",
    symbol: "MIM",
    name: "Magic Internet Money",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/16786/small/mimlogopng.png?1624979612"
  },
  {
    chainId: 43114,
    address: "0x60781C2586D68229fde47564546784ab3fACA982",
    _scan: "https://snowtrace.io/token/0x60781C2586D68229fde47564546784ab3fACA982",
    decimals: 18,
    name: "Pangolin",
    symbol: "PNG",
    logoURI: "https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/0x60781C2586D68229fde47564546784ab3fACA982/logo.png"
  },
  {
    chainId: 43114,
    address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    _scan: "https://snowtrace.io/token/0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    decimals: 18,
    name: "Wrapped AVAX",
    symbol: "WAVAX",
    logoURI: "https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7/logo.png"
  },
  {
    chainId: 43114,
    address: "0xd501281565bf7789224523144Fe5D98e8B28f267",
    _scan: "https://snowtrace.io/token/0xd501281565bf7789224523144Fe5D98e8B28f267",
    decimals: 18,
    name: "1INCH Token",
    symbol: "1INCH.e",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/1INCH/logo.png"
  },
  {
    chainId: 43114,
    address: "0x63a72806098Bd3D9520cC43356dD78afe5D386D9",
    _scan: "https://snowtrace.io/token/0x63a72806098Bd3D9520cC43356dD78afe5D386D9",
    decimals: 18,
    name: "Aave Token",
    symbol: "AAVE.e",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/AAVE/logo.png"
  },
  {
    chainId: 43114,
    address: "0x98443B96EA4b0858FDF3219Cd13e98C7A4690588",
    _scan: "https://snowtrace.io/token/0x98443B96EA4b0858FDF3219Cd13e98C7A4690588",
    decimals: 18,
    name: "Basic Attention Token",
    symbol: "BAT.e",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/BAT/logo.png"
  },
  {
    chainId: 43114,
    address: "0x19860CCB0A68fd4213aB9D8266F7bBf05A8dDe98",
    _scan: "https://snowtrace.io/token/0x19860CCB0A68fd4213aB9D8266F7bBf05A8dDe98",
    decimals: 18,
    name: "Binance USD",
    symbol: "BUSD.e",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/BUSD/logo.png"
  },
  {
    chainId: 43114,
    address: "0xc3048E19E76CB9a3Aa9d77D8C03c29Fc906e2437",
    _scan: "https://snowtrace.io/token/0xc3048E19E76CB9a3Aa9d77D8C03c29Fc906e2437",
    decimals: 18,
    name: "Compound",
    symbol: "COMP.e",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/COMP/logo.png"
  },
  {
    chainId: 43114,
    address: "0x249848BeCA43aC405b8102Ec90Dd5F22CA513c06",
    _scan: "https://snowtrace.io/token/0x249848BeCA43aC405b8102Ec90Dd5F22CA513c06",
    decimals: 18,
    name: "Curve DAO Token",
    symbol: "CRV.e",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/CRV/logo.png"
  },
  {
    chainId: 43114,
    address: "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70",
    _scan: "https://snowtrace.io/token/0xd586E7F844cEa2F87f50152665BCbc2C279D8d70",
    decimals: 18,
    name: "Dai Stablecoin",
    symbol: "DAI.e",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/DAI/logo.png"
  },
  {
    chainId: 43114,
    address: "0x8a0cAc13c7da965a312f08ea4229c37869e85cB9",
    _scan: "https://snowtrace.io/token/0x8a0cAc13c7da965a312f08ea4229c37869e85cB9",
    decimals: 18,
    name: "Graph Token",
    symbol: "GRT.e",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/GRT.png"
  },
  {
    chainId: 43114,
    address: "0x5947BB275c521040051D82396192181b413227A3",
    _scan: "https://snowtrace.io/token/0x5947BB275c521040051D82396192181b413227A3",
    decimals: 18,
    name: "ChainLink Token",
    symbol: "LINK.e",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/LINK/logo.png"
  },
  {
    chainId: 43114,
    address: "0x88128fd4b259552A9A1D457f435a6527AAb72d42",
    _scan: "https://snowtrace.io/token/0x88128fd4b259552A9A1D457f435a6527AAb72d42",
    decimals: 18,
    name: "Maker",
    symbol: "MKR.e",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/MKR.svg"
  },
  {
    chainId: 43114,
    address: "0xBeC243C995409E6520D7C41E404da5dEba4b209B",
    _scan: "https://snowtrace.io/token/0xBeC243C995409E6520D7C41E404da5dEba4b209B",
    decimals: 18,
    name: "Synthetix Network Token",
    symbol: "SNX.e",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/SNX/logo.png"
  },
  {
    chainId: 43114,
    address: "0x37B608519F91f70F2EeB0e5Ed9AF4061722e4F76",
    _scan: "https://snowtrace.io/token/0x37B608519F91f70F2EeB0e5Ed9AF4061722e4F76",
    decimals: 18,
    name: "SushiToken",
    symbol: "SUSHI.e",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/SUSHI.svg"
  },
  {
    chainId: 43114,
    address: "0xc7B5D72C836e718cDA8888eaf03707fAef675079",
    _scan: "https://snowtrace.io/token/0xc7B5D72C836e718cDA8888eaf03707fAef675079",
    decimals: 18,
    name: "TrustSwap Token",
    symbol: "SWAP.e",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/SWAP/logo.png"
  },
  {
    chainId: 43114,
    address: "0x3Bd2B1c7ED8D396dbb98DED3aEbb41350a5b2339",
    _scan: "https://snowtrace.io/token/0x3Bd2B1c7ED8D396dbb98DED3aEbb41350a5b2339",
    decimals: 18,
    name: "UMA Voting Token v1",
    symbol: "UMA.e",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/UMA/logo.png"
  },
  {
    chainId: 43114,
    address: "0x8eBAf22B6F053dFFeaf46f4Dd9eFA95D89ba8580",
    _scan: "https://snowtrace.io/token/0x8eBAf22B6F053dFFeaf46f4Dd9eFA95D89ba8580",
    decimals: 18,
    name: "Uniswap",
    symbol: "UNI.e",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/UNI/logo.png"
  },
  {
    chainId: 43114,
    address: "0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664",
    _scan: "https://snowtrace.io/token/0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664",
    decimals: 6,
    name: "USD Coin",
    symbol: "USDC.e",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/USDC/logo.png"
  },
  {
    chainId: 43114,
    address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    _scan: "https://snowtrace.io/token/0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    decimals: 6,
    name: "USD Coin",
    symbol: "USDC",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/USDC/logo.png"
  },
  {
    chainId: 43114,
    address: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
    _scan: "https://snowtrace.io/token/0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
    decimals: 6,
    name: "TetherToken",
    symbol: "USDt",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/USDT/logo.png"
  },
  {
    chainId: 43114,
    address: "0xc7198437980c041c805A1EDcbA50c1Ce5db95118",
    _scan: "https://snowtrace.io/token/0xc7198437980c041c805A1EDcbA50c1Ce5db95118",
    decimals: 6,
    name: "Tether USD",
    symbol: "USDT.e",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/USDT/logo.png"
  },
  {
    chainId: 43114,
    address: "0x50b7545627a5162F82A992c33b87aDc75187B218",
    _scan: "https://snowtrace.io/token/0x50b7545627a5162F82A992c33b87aDc75187B218",
    decimals: 8,
    name: "Wrapped BTC",
    symbol: "WBTC.e",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/WBTC/logo.png"
  },
  {
    chainId: 43114,
    address: "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
    _scan: "https://snowtrace.io/token/0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
    decimals: 18,
    name: "Wrapped ETH",
    symbol: "WETH.e",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/WETH/logo.png"
  },
  {
    chainId: 43114,
    address: "0x9eAaC1B23d935365bD7b542Fe22cEEe2922f52dc",
    _scan: "https://snowtrace.io/token/0x9eAaC1B23d935365bD7b542Fe22cEEe2922f52dc",
    decimals: 18,
    name: "yearn.finance",
    symbol: "YFI.e",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/YFI/logo.png"
  },
  {
    chainId: 43114,
    address: "0x596fA47043f99A4e0F122243B841E55375cdE0d2",
    _scan: "https://snowtrace.io/token/0x596fA47043f99A4e0F122243B841E55375cdE0d2",
    decimals: 18,
    name: "0x Protocol Token",
    symbol: "ZRX.e",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/ZRX.png"
  },
  {
    chainId: 43114,
    address: "0xe19A1684873faB5Fb694CfD06607100A632fF21c",
    _scan: "https://snowtrace.io/token/0xe19A1684873faB5Fb694CfD06607100A632fF21c",
    decimals: 18,
    name: "BavaToken",
    symbol: "BAVA",
    logoURI: "https://i.imgur.com/mAeAIip.jpeg"
  },
  {
    chainId: 43114,
    address: "0x2b2C81e08f1Af8835a78Bb2A90AE924ACE0eA4bE",
    _scan: "https://snowtrace.io/token/0x2b2C81e08f1Af8835a78Bb2A90AE924ACE0eA4bE",
    decimals: 18,
    name: "Staked AVAX",
    symbol: "sAVAX",
    logoURI: "https://i.imgur.com/lqxXmU7.png"
  },
  {
    chainId: 43114,
    address: "0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5",
    _scan: "https://snowtrace.io/token/0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5",
    decimals: 18,
    name: "BENQI",
    symbol: "QI",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/9288.png"
  },
  {
    chainId: 43114,
    address: "0xb599c3590F42f8F995ECfa0f85D2980B76862fc1",
    _scan: "https://snowtrace.io/token/0xb599c3590F42f8F995ECfa0f85D2980B76862fc1",
    decimals: 6,
    name: "UST (Wormhole)",
    symbol: "UST",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/7129.png"
  },
  {
    chainId: 43114,
    address: "0x260Bbf5698121EB85e7a74f2E45E16Ce762EbE11",
    _scan: "https://snowtrace.io/token/0x260Bbf5698121EB85e7a74f2E45E16Ce762EbE11",
    decimals: 6,
    name: "Axelar Wrapped UST",
    symbol: "UST",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/7129.png"
  },
  {
    chainId: 43114,
    address: "0x0da67235dD5787D67955420C84ca1cEcd4E5Bb3b",
    _scan: "https://snowtrace.io/token/0x0da67235dD5787D67955420C84ca1cEcd4E5Bb3b",
    decimals: 18,
    name: "Wrapped MEMO",
    symbol: "wMEMO",
    logoURI: "https://snowtrace.io/token/images/wondelandmemo_32.png"
  },
  {
    chainId: 43114,
    address: "0x237917E8a998b37759c8EE2fAa529D60c66c2927",
    _scan: "https://snowtrace.io/token/0x237917E8a998b37759c8EE2fAa529D60c66c2927",
    decimals: 18,
    name: "Sifu",
    symbol: "sifu",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/19205.png"
  },
  {
    chainId: 43114,
    address: "0x63682bDC5f875e9bF69E201550658492C9763F89",
    _scan: "https://snowtrace.io/token/0x63682bDC5f875e9bF69E201550658492C9763F89",
    decimals: 18,
    name: "Betswap.gg",
    symbol: "BSGG",
    logoURI: "https://snowtrace.io/token/images/betswapgg_32.png"
  },
  {
    chainId: 43114,
    address: "0x3B55E45fD6bd7d4724F5c47E0d1bCaEdd059263e",
    _scan: "https://snowtrace.io/token/0x3B55E45fD6bd7d4724F5c47E0d1bCaEdd059263e",
    decimals: 18,
    name: "MAI",
    symbol: "MAI",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/MAI.svg"
  },
  {
    chainId: 43114,
    address: "0xE7dDa817b449A05bCB55DaeF2B2E8c095aD80993",
    _scan: "https://snowtrace.io/token/0xE7dDa817b449A05bCB55DaeF2B2E8c095aD80993",
    decimals: 18,
    name: "Teragon Managed Vault - Bastion Trading",
    symbol: "TMV-BT",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/TMV-BT.svg"
  },
  {
    chainId: 43114,
    address: "0x62edc0692bd897d2295872a9ffcac5425011c661",
    _scan: "https://snowtrace.io/token/0x62edc0692bd897d2295872a9ffcac5425011c661",
    decimals: 18,
    name: "GMX",
    symbol: "GMX",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/GMX.svg"
  },
  {
    chainId: 43114,
    address: "0x111111111111ed1d73f860f57b2798b683f2d325",
    _scan: "https://snowtrace.io/token/0x111111111111ed1d73f860f57b2798b683f2d325",
    decimals: 18,
    name: "YUSD Stablecoin",
    symbol: "YUSD",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/YUSD.png"
  },
  {
    chainId: 43114,
    address: "0x77777777777d4554c39223c354a05825b2e8faa3",
    _scan: "https://snowtrace.io/token/0x77777777777d4554c39223c354a05825b2e8faa3",
    decimals: 18,
    name: "Yeti Finance",
    symbol: "YETI",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/YETI.png"
  }
], $p = [
  {
    name: "Aave",
    symbol: "AAVE",
    address: "0x6a07A792ab2965C72a5B8088d3a069A7aC3a993B",
    _scan: "https://ftmscan.com/token/0x6a07A792ab2965C72a5B8088d3a069A7aC3a993B",
    chainId: 250,
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/12645/large/AAVE.png"
  },
  {
    name: "Badger",
    symbol: "BADGER",
    address: "0x753fbc5800a8C8e3Fb6DC6415810d627A387Dfc9",
    _scan: "https://ftmscan.com/token/0x753fbc5800a8C8e3Fb6DC6415810d627A387Dfc9",
    chainId: 250,
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/13287/large/badger_dao_logo.jpg"
  },
  {
    name: "Band Protocol",
    symbol: "BAND",
    address: "0x46E7628E8b4350b2716ab470eE0bA1fa9e76c6C5",
    _scan: "https://ftmscan.com/token/0x46E7628E8b4350b2716ab470eE0bA1fa9e76c6C5",
    chainId: 250,
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/9545/large/band-protocol.png"
  },
  {
    name: "SpookySwap",
    symbol: "BOO",
    address: "0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE",
    _scan: "https://ftmscan.com/token/0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/9608.png"
  },
  {
    name: "Cover Protocol",
    symbol: "COVER",
    address: "0xB01E8419d842beebf1b70A7b5f7142abbaf7159D",
    _scan: "https://ftmscan.com/token/0xB01E8419d842beebf1b70A7b5f7142abbaf7159D",
    chainId: 250,
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/13563/large/1_eWBbDaqpxXqt7WYPSP4qSw.jpeg"
  },
  {
    name: "Cream",
    symbol: "CREAM",
    address: "0x657A1861c15A3deD9AF0B6799a195a249ebdCbc6",
    _scan: "https://ftmscan.com/token/0x657A1861c15A3deD9AF0B6799a195a249ebdCbc6",
    chainId: 250,
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/11976/large/Cream.png"
  },
  {
    name: "Curve DAO",
    symbol: "CRV",
    address: "0x1E4F97b9f9F913c46F1632781732927B9019C68b",
    _scan: "https://ftmscan.com/token/0x1E4F97b9f9F913c46F1632781732927B9019C68b",
    chainId: 250,
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/12124/large/Curve.png"
  },
  {
    name: "Dai Stablecoin",
    symbol: "DAI",
    address: "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E",
    _scan: "https://ftmscan.com/token/0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E",
    chainId: 250,
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/9956/large/dai-multi-collateral-mcd.png"
  },
  {
    name: "Frapped USDT",
    symbol: "fUSDT",
    address: "0x049d68029688eAbF473097a2fC38ef61633A3C7A",
    _scan: "https://ftmscan.com/token/0x049d68029688eAbF473097a2fC38ef61633A3C7A",
    chainId: 250,
    decimals: 6,
    logoURI: "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png"
  },
  {
    name: "Graviton",
    symbol: "GTON",
    address: "0xC1Be9a4D5D45BeeACAE296a7BD5fADBfc14602C4",
    _scan: "https://ftmscan.com/token/0xC1Be9a4D5D45BeeACAE296a7BD5fADBfc14602C4",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/10006.png"
  },
  {
    name: "IceToken",
    symbol: "ICE",
    address: "0xf16e81dce15B08F326220742020379B855B87DF9",
    _scan: "https://ftmscan.com/token/0xf16e81dce15B08F326220742020379B855B87DF9",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/9073.png"
  },
  {
    name: "ChainLink",
    symbol: "LINK",
    address: "0xb3654dc3D10Ea7645f8319668E8F54d2574FBdC8",
    _scan: "https://ftmscan.com/token/0xb3654dc3D10Ea7645f8319668E8F54d2574FBdC8",
    chainId: 250,
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png"
  },
  {
    name: "Synthetix Network",
    symbol: "SNX",
    address: "0x56ee926bD8c72B2d5fa1aF4d9E4Cbb515a1E3Adc",
    _scan: "https://ftmscan.com/token/0x56ee926bD8c72B2d5fa1aF4d9E4Cbb515a1E3Adc",
    chainId: 250,
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/SNX.svg"
  },
  {
    name: "Sushi",
    symbol: "SUSHI",
    address: "0xae75A438b2E0cB8Bb01Ec1E1e376De11D44477CC",
    _scan: "https://ftmscan.com/token/0xae75A438b2E0cB8Bb01Ec1E1e376De11D44477CC",
    chainId: 250,
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/SUSHI.svg"
  },
  {
    name: "USD Coin",
    symbol: "USDC",
    address: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75",
    _scan: "https://ftmscan.com/token/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75",
    chainId: 250,
    decimals: 6,
    logoURI: "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png"
  },
  {
    name: "Wrapped Bitcoin",
    symbol: "wBTC",
    address: "0x321162Cd933E2Be498Cd2267a90534A804051b11",
    _scan: "https://ftmscan.com/token/0x321162Cd933E2Be498Cd2267a90534A804051b11",
    chainId: 250,
    decimals: 8,
    logoURI: "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png"
  },
  {
    name: "Wrapped Ether",
    symbol: "wETH",
    address: "0x74b23882a30290451A17c44f4F05243b6b58C76d",
    _scan: "https://ftmscan.com/token/0x74b23882a30290451A17c44f4F05243b6b58C76d",
    chainId: 250,
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/279/large/ethereum.png"
  },
  {
    name: "Wrapped FTM",
    symbol: "wFTM",
    address: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
    _scan: "https://ftmscan.com/token/0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/10240.png"
  },
  {
    name: "yearn.finance",
    symbol: "YFI",
    address: "0x29b0Da86e484E1C0029B56e817912d778aC0EC69",
    _scan: "https://ftmscan.com/token/0x29b0Da86e484E1C0029B56e817912d778aC0EC69",
    chainId: 250,
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/11849/large/yfi-192x192.png"
  },
  {
    name: "ZooCoin",
    symbol: "ZOO",
    address: "0x09e145A1D53c0045F41aEEf25D8ff982ae74dD56",
    _scan: "https://ftmscan.com/token/0x09e145A1D53c0045F41aEEf25D8ff982ae74dD56",
    chainId: 250,
    decimals: 0,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/9007.png"
  },
  {
    name: "Frax Share",
    symbol: "FXS",
    address: "0x82F8Cb20c14F134fe6Ebf7aC3B903B2117aAfa62",
    _scan: "https://ftmscan.com/token/0x82F8Cb20c14F134fe6Ebf7aC3B903B2117aAfa62",
    chainId: 250,
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/FXS.svg"
  },
  {
    name: "MMToken",
    symbol: "MM",
    address: "0xbFaf328Fe059c53D936876141f38089df0D1503D",
    _scan: "https://ftmscan.com/token/0xbFaf328Fe059c53D936876141f38089df0D1503D",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/7875.png"
  },
  {
    name: "Binance Coin",
    symbol: "BNB",
    address: "0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454",
    _scan: "https://ftmscan.com/token/0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454",
    chainId: 250,
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png"
  },
  {
    name: "Woofy",
    symbol: "WOOFY",
    address: "0xD0660cD418a64a1d44E9214ad8e459324D8157f1",
    _scan: "https://ftmscan.com/token/0xD0660cD418a64a1d44E9214ad8e459324D8157f1",
    chainId: 250,
    decimals: 12,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/9719.png"
  },
  {
    name: "Anyswap",
    symbol: "ANY",
    address: "0xdDcb3fFD12750B45d32E084887fdf1aABAb34239",
    _scan: "https://ftmscan.com/token/0xdDcb3fFD12750B45d32E084887fdf1aABAb34239",
    chainId: 250,
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/anyswap/Brand-assets/master/logo/c-128-color-2.png"
  },
  {
    name: "Beefy.Finance",
    symbol: "BIFI",
    address: "0xd6070ae98b8069de6B494332d1A1a81B6179D960",
    _scan: "https://ftmscan.com/token/0xd6070ae98b8069de6B494332d1A1a81B6179D960",
    chainId: 250,
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/12704/large/token.png"
  },
  {
    name: "TOMB",
    symbol: "TOMB",
    address: "0x6c021Ae822BEa943b2E66552bDe1D2696a53fbB7",
    _scan: "https://ftmscan.com/token/0x6c021Ae822BEa943b2E66552bDe1D2696a53fbB7",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11495.png"
  },
  {
    name: "TSHARE",
    symbol: "TSHARE",
    address: "0x4cdF39285D7Ca8eB3f090fDA0C069ba5F4145B37",
    _scan: "https://ftmscan.com/token/0x4cdF39285D7Ca8eB3f090fDA0C069ba5F4145B37",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/16943.png"
  },
  {
    name: "BOMB",
    symbol: "BOMB",
    address: "0x8503eb4A136bDBeB323E37Aa6e0FA0C772228378",
    _scan: "https://ftmscan.com/token/0x8503eb4A136bDBeB323E37Aa6e0FA0C772228378",
    chainId: 250,
    decimals: 0,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/9085.png"
  },
  {
    name: "Boo MirrorWorld",
    symbol: "xBOO",
    address: "0xa48d959AE2E88f1dAA7D5F611E01908106dE7598",
    _scan: "https://ftmscan.com/token/0xa48d959AE2E88f1dAA7D5F611E01908106dE7598",
    chainId: 250,
    decimals: 18,
    logoURI: "https://ftmscan.com/token/images/xBOO_32.png"
  },
  {
    name: "Smart Token",
    symbol: "SMART",
    address: "0x34D33dc8Ac6f1650D94A7E9A972B47044217600b",
    _scan: "https://ftmscan.com/token/0x34D33dc8Ac6f1650D94A7E9A972B47044217600b",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/15540.png"
  },
  {
    name: "aUSD",
    symbol: "aUSD",
    address: "0x41e3dF7f716aB5AF28c1497B354D79342923196a",
    _scan: "https://ftmscan.com/token/0x41e3dF7f716aB5AF28c1497B354D79342923196a",
    chainId: 250,
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/fantom/0x41e3dF7f716aB5AF28c1497B354D79342923196a.png"
  },
  {
    name: "Fantom USD",
    symbol: "fUSD",
    address: "0xAd84341756Bf337f5a0164515b1f6F993D194E1f",
    _scan: "https://ftmscan.com/token/0xAd84341756Bf337f5a0164515b1f6F993D194E1f",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/16831.png"
  },
  {
    name: "Magic Internet Money",
    symbol: "MIM",
    address: "0x82f0B8B456c1A451378467398982d4834b6829c1",
    _scan: "https://ftmscan.com/token/0x82f0B8B456c1A451378467398982d4834b6829c1",
    chainId: 250,
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/16786/large/mimlogopng.png"
  },
  {
    name: "ShadeToken",
    symbol: "SHADE",
    address: "0x3A3841f5fa9f2c283EA567d5Aeea3Af022dD2262",
    _scan: "https://ftmscan.com/token/0x3A3841f5fa9f2c283EA567d5Aeea3Af022dD2262",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11504.png"
  },
  {
    name: "AtariToken",
    symbol: "ATRI",
    address: "0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b",
    _scan: "https://ftmscan.com/token/0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b",
    chainId: 250,
    decimals: 0,
    logoURI: "https://assets.coingecko.com/coins/images/12992/large/atari.png"
  },
  {
    name: "Cryptokek.com",
    symbol: "KEK",
    address: "0x627524d78B4fC840C887ffeC90563c7A42b671fD",
    _scan: "https://ftmscan.com/token/0x627524d78B4fC840C887ffeC90563c7A42b671fD",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/8135.png"
  },
  {
    name: "YEL Token",
    symbol: "YEL",
    address: "0xD3b71117E6C1558c1553305b44988cd944e97300",
    _scan: "https://ftmscan.com/token/0xD3b71117E6C1558c1553305b44988cd944e97300",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11301.png"
  },
  {
    name: "Scream",
    symbol: "SCREAM",
    address: "0xe0654C8e6fd4D733349ac7E09f6f23DA256bF475",
    _scan: "https://ftmscan.com/token/0xe0654C8e6fd4D733349ac7E09f6f23DA256bF475",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11497.png"
  },
  {
    name: "Tarot",
    symbol: "TAROT",
    address: "0xC5e2B037D30a390e62180970B3aa4E91868764cD",
    _scan: "https://ftmscan.com/token/0xC5e2B037D30a390e62180970B3aa4E91868764cD",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11409.png"
  },
  {
    name: "BABYBOO",
    symbol: "BABYBOO",
    address: "0x471762A7017A5B1A3e931F1A97aa03Ef1E7F4A73",
    _scan: "https://ftmscan.com/token/0x471762A7017A5B1A3e931F1A97aa03Ef1E7F4A73",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11764.png"
  },
  {
    name: "Death",
    symbol: "Death",
    address: "0xeaF45B62d9d0Bdc1D763baF306af5eDD7C0d7e55",
    _scan: "https://ftmscan.com/token/0xeaF45B62d9d0Bdc1D763baF306af5eDD7C0d7e55",
    chainId: 250,
    decimals: 9,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11994.png"
  },
  {
    name: "SteakToken",
    symbol: "STEAK",
    address: "0x05848B832E872d9eDd84AC5718D58f21fD9c9649",
    _scan: "https://ftmscan.com/token/0x05848B832E872d9eDd84AC5718D58f21fD9c9649",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11774.png"
  },
  {
    name: "Totem Finance",
    symbol: "TOTEM",
    address: "0x31a37aedC0C18AA139e120e1CDC673BbB2063e6f",
    _scan: "https://ftmscan.com/token/0x31a37aedC0C18AA139e120e1CDC673BbB2063e6f",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11684.png"
  },
  {
    name: "OliveCash Token",
    symbol: "fOLIVE",
    address: "0xA9937092c4E2B0277C16802Cc8778D252854688A",
    _scan: "https://ftmscan.com/token/0xA9937092c4E2B0277C16802Cc8778D252854688A",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/10685.png"
  },
  {
    name: "Syfin",
    symbol: "SYF",
    address: "0x1BCF4DC879979C68fA255f731FE8Dcf71970c9bC",
    _scan: "https://ftmscan.com/token/0x1BCF4DC879979C68fA255f731FE8Dcf71970c9bC",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11692.png"
  },
  {
    name: "FTM1337",
    symbol: "ELITE",
    address: "0xf43Cc235E686d7BC513F53Fbffb61F760c3a1882",
    _scan: "https://ftmscan.com/token/0xf43Cc235E686d7BC513F53Fbffb61F760c3a1882",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/13436.png"
  },
  {
    name: "Fantom Oasis Token",
    symbol: "FTMO",
    address: "0x9bD0611610A0f5133e4dd1bFdd71C5479Ee77f37",
    _scan: "https://ftmscan.com/token/0x9bD0611610A0f5133e4dd1bFdd71C5479Ee77f37",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11907.png"
  },
  {
    name: "Wootrade Network",
    symbol: "WOO",
    address: "0x6626c47c00F1D87902fc13EECfaC3ed06D5E8D8a",
    _scan: "https://ftmscan.com/token/0x6626c47c00F1D87902fc13EECfaC3ed06D5E8D8a",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/7501.png"
  },
  {
    name: "fSWAMP Token",
    symbol: "fSWAMP",
    address: "0x23cBC7C95a13071562af2C4Fb1Efa7a284d0543a",
    _scan: "https://ftmscan.com/token/0x23cBC7C95a13071562af2C4Fb1Efa7a284d0543a",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/9082.png"
  },
  {
    name: "Treeb",
    symbol: "TREEB",
    address: "0xc60D7067dfBc6f2caf30523a064f416A5Af52963",
    _scan: "https://ftmscan.com/token/0xc60D7067dfBc6f2caf30523a064f416A5Af52963",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/12301.png"
  },
  {
    name: "Morpheus Token",
    symbol: "MORPH",
    address: "0x0789fF5bA37f72ABC4D561D00648acaDC897b32d",
    _scan: "https://ftmscan.com/token/0x0789fF5bA37f72ABC4D561D00648acaDC897b32d",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11896.png"
  },
  {
    name: "Timechain Swap Token",
    symbol: "TCS",
    address: "0xFbfAE0DD49882e503982f8eb4b8B1e464ecA0b91",
    _scan: "https://ftmscan.com/token/0xFbfAE0DD49882e503982f8eb4b8B1e464ecA0b91",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/12463.png"
  },
  {
    name: "FANG Token",
    symbol: "FANG",
    address: "0x49894fCC07233957c35462cfC3418Ef0CC26129f",
    _scan: "https://ftmscan.com/token/0x49894fCC07233957c35462cfC3418Ef0CC26129f",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/12671.png"
  },
  {
    name: "Liquid Driver",
    symbol: "LQDR",
    address: "0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9",
    _scan: "https://ftmscan.com/token/0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/13246.png"
  },
  {
    name: "Geist.Finance Protocol Token",
    symbol: "GEIST",
    address: "0xd8321AA83Fb0a4ECd6348D4577431310A6E0814d",
    _scan: "https://ftmscan.com/token/0xd8321AA83Fb0a4ECd6348D4577431310A6E0814d",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/12576.png"
  },
  {
    name: "Cougar Token",
    symbol: "CGS",
    address: "0x5a2e451Fb1b46FDE7718315661013ae1aE68e28C",
    _scan: "https://ftmscan.com/token/0x5a2e451Fb1b46FDE7718315661013ae1aE68e28C",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/13106.png"
  },
  {
    name: "Spell Token",
    symbol: "SPELL",
    address: "0x468003B688943977e6130F4F68F23aad939a1040",
    _scan: "https://ftmscan.com/token/0x468003B688943977e6130F4F68F23aad939a1040",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11289.png"
  },
  {
    name: "CoffinDollar",
    symbol: "CoUSD",
    address: "0x0DeF844ED26409C5C46dda124ec28fb064D90D27",
    _scan: "https://ftmscan.com/token/0x0DeF844ED26409C5C46dda124ec28fb064D90D27",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/12766.png"
  },
  {
    name: "CoffinToken",
    symbol: "COFFIN",
    address: "0x593Ab53baFfaF1E821845cf7080428366F030a9c",
    _scan: "https://ftmscan.com/token/0x593Ab53baFfaF1E821845cf7080428366F030a9c",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/12765.png"
  },
  {
    name: "Font",
    symbol: "FONT",
    address: "0xbbc4A8d076F4B1888fec42581B6fc58d242CF2D5",
    _scan: "https://ftmscan.com/token/0xbbc4A8d076F4B1888fec42581B6fc58d242CF2D5",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/8601.png"
  },
  {
    name: "CyberFi Token",
    symbol: "CFi",
    address: "0x6a545f9c64d8f7B957D8D2e6410B52095A9E6c29",
    _scan: "https://ftmscan.com/token/0x6a545f9c64d8f7B957D8D2e6410B52095A9E6c29",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/7699.png",
    bridgeId: "cfiv3",
    nativeChain: 1
  },
  {
    name: "DarkMatter",
    symbol: "DMD",
    address: "0x90E892FED501ae00596448aECF998C88816e5C0F",
    _scan: "https://ftmscan.com/token/0x90E892FED501ae00596448aECF998C88816e5C0F",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/12675.png",
    bridgeId: ""
  },
  {
    name: "FTM-Meso",
    symbol: "MESO",
    address: "0x4D9361A86D038C8adA3db2457608e2275B3E08d4",
    _scan: "https://ftmscan.com/token/0x4D9361A86D038C8adA3db2457608e2275B3E08d4",
    chainId: 250,
    decimals: 18,
    logoURI: "https://ftmscan.com/token/images/mesofinance_32.png",
    bridgeId: ""
  },
  {
    name: "Dola USD Stablecoin",
    symbol: "DOLA",
    address: "0x3129662808bEC728a27Ab6a6b9AFd3cBacA8A43c",
    _scan: "https://ftmscan.com/token/0x3129662808bEC728a27Ab6a6b9AFd3cBacA8A43c",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/19191.png",
    bridgeId: "dolav5",
    nativeChain: 1
  },
  {
    name: "TravaFinance Token",
    symbol: "TRAVA",
    address: "0x477a9D5dF9bedA06F6b021136a2efe7BE242fCC9",
    _scan: "https://ftmscan.com/token/0x477a9D5dF9bedA06F6b021136a2efe7BE242fCC9",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11209.png",
    bridgeId: ""
  },
  {
    name: "summitdefi.com",
    symbol: "SUMMIT",
    address: "0x8F9bCCB6Dd999148Da1808aC290F2274b13D7994",
    _scan: "https://ftmscan.com/token/0x8F9bCCB6Dd999148Da1808aC290F2274b13D7994",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/13123.png"
  },
  {
    name: "Yoshi.exchange",
    symbol: "YOSHI",
    address: "0x3dc57B391262e3aAe37a08D91241f9bA9d58b570",
    _scan: "https://ftmscan.com/token/0x3dc57B391262e3aAe37a08D91241f9bA9d58b570",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/13118.png"
  },
  {
    name: "Fantom Doge",
    symbol: "RIP",
    address: "0x1D43697D67cB5D0436cc38d583Ca473a1bFEbC7a",
    _scan: "https://ftmscan.com/token/0x1D43697D67cB5D0436cc38d583Ca473a1bFEbC7a",
    chainId: 250,
    decimals: 9,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11787.png"
  },
  {
    name: "Metti Inu",
    symbol: "Metti",
    address: "0x42aE8468A1FDDB965d420BD71368a87Ec3a2B4b8",
    _scan: "https://ftmscan.com/token/0x42aE8468A1FDDB965d420BD71368a87Ec3a2B4b8",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/13430.png"
  },
  {
    name: "ScareCrow",
    symbol: "SCARE",
    address: "0x46e1Ee17f51c52661D04238F1700C547dE3B84A1",
    _scan: "https://ftmscan.com/token/0x46e1Ee17f51c52661D04238F1700C547dE3B84A1",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/12827.png"
  },
  {
    name: "Exodia",
    symbol: "EXOD",
    address: "0x3b57f3FeAaF1e8254ec680275Ee6E7727C7413c7",
    _scan: "https://ftmscan.com/token/0x3b57f3FeAaF1e8254ec680275Ee6E7727C7413c7",
    chainId: 250,
    decimals: 9,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/13642.png"
  },
  {
    name: "FantomStarter",
    symbol: "FS",
    address: "0xC758295Cd1A564cdb020a78a681a838CF8e0627D",
    _scan: "https://ftmscan.com/token/0xC758295Cd1A564cdb020a78a681a838CF8e0627D",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/13237.png",
    bridgeId: ""
  },
  {
    name: "ArtWallet",
    symbol: "1ART",
    address: "0xD3c325848D7c6E29b574Cb0789998b2ff901f17E",
    _scan: "https://ftmscan.com/token/0xD3c325848D7c6E29b574Cb0789998b2ff901f17E",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/12929.png",
    bridgeId: ""
  },
  {
    name: "Bouje Token",
    symbol: "BOUJE",
    address: "0x37F70aa9fEfc8971117BD53A1Ddc2372aa7Eec41",
    _scan: "https://ftmscan.com/token/0x37F70aa9fEfc8971117BD53A1Ddc2372aa7Eec41",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/13522.png",
    bridgeId: ""
  },
  {
    name: "Feeder.finance",
    symbol: "FEED",
    address: "0x5d5530eb3147152FE78d5C4bFEeDe054c8d1442A",
    _scan: "https://ftmscan.com/token/0x5d5530eb3147152FE78d5C4bFEeDe054c8d1442A",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/14257.png",
    bridgeId: ""
  },
  {
    name: "JulSwap",
    symbol: "JulD",
    address: "0xEFF6FcfBc2383857Dd66ddf57effFC00d58b7d9D",
    _scan: "https://ftmscan.com/token/0xEFF6FcfBc2383857Dd66ddf57effFC00d58b7d9D",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/8164.png",
    bridgeId: ""
  },
  {
    name: "Hector",
    symbol: "HEC",
    address: "0x5C4FDfc5233f935f20D2aDbA572F770c2E377Ab0",
    _scan: "https://ftmscan.com/token/0x5C4FDfc5233f935f20D2aDbA572F770c2E377Ab0",
    chainId: 250,
    decimals: 9,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/13881.png",
    bridgeId: ""
  },
  {
    name: "Spartacus",
    symbol: "SPA",
    address: "0x5602df4A94eB6C680190ACCFA2A475621E0ddBdc",
    _scan: "https://ftmscan.com/token/0x5602df4A94eB6C680190ACCFA2A475621E0ddBdc",
    chainId: 250,
    decimals: 9,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/13748.png",
    bridgeId: ""
  },
  {
    name: "Fantohm",
    symbol: "FHM",
    address: "0xfa1FBb8Ef55A4855E5688C0eE13aC3f202486286",
    _scan: "https://ftmscan.com/token/0xfa1FBb8Ef55A4855E5688C0eE13aC3f202486286",
    chainId: 250,
    decimals: 9,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/14063.png",
    bridgeId: ""
  },
  {
    name: "SoulPower",
    symbol: "SOUL",
    address: "0xe2fb177009FF39F52C0134E8007FA0e4BaAcBd07",
    _scan: "https://ftmscan.com/token/0xe2fb177009FF39F52C0134E8007FA0e4BaAcBd07",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/13342.png",
    bridgeId: ""
  },
  {
    name: "TrueUSD",
    symbol: "TUSD",
    address: "0x9879aBDea01a879644185341F7aF7d8343556B7a",
    _scan: "https://ftmscan.com/token/0x9879aBDea01a879644185341F7aF7d8343556B7a",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/2563.png",
    bridgeId: ""
  },
  {
    name: "moda",
    symbol: "MODA",
    address: "0x6496994241804D7fE2b032901931e03bCD82301F",
    _scan: "https://ftmscan.com/token/0x6496994241804D7fE2b032901931e03bCD82301F",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/15747.png",
    bridgeId: ""
  },
  {
    name: "Raven",
    symbol: "RAVEN",
    address: "0x175cbf2809acFD7521fDd387d65aac523Fe4076F",
    _scan: "https://ftmscan.com/token/0x175cbf2809acFD7521fDd387d65aac523Fe4076F",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/14919.png",
    bridgeId: ""
  },
  {
    name: "PaintSwap",
    symbol: "BRUSH",
    address: "0x85dec8c4B2680793661bCA91a8F129607571863d",
    _scan: "https://ftmscan.com/token/0x85dec8c4B2680793661bCA91a8F129607571863d",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/13229.png"
  },
  {
    name: "PILLS Token",
    symbol: "PILLS",
    address: "0xB66b5D38E183De42F21e92aBcAF3c712dd5d6286",
    _scan: "https://ftmscan.com/token/0xB66b5D38E183De42F21e92aBcAF3c712dd5d6286",
    chainId: 250,
    decimals: 18,
    logoURI: "https://ftmscan.com/token/images/morpheusfinftm_32.png"
  },
  {
    chainId: 250,
    address: "0xfB98B335551a418cD0737375a2ea0ded62Ea213b",
    _scan: "https://ftmscan.com/token/0xfB98B335551a418cD0737375a2ea0ded62Ea213b",
    decimals: 18,
    name: "MAI",
    symbol: "MAI",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/MAI.svg"
  }
], Vp = [
  {
    chainId: 25,
    address: "0xc21223249CA28397B4B6541dfFaEcC539BfF0c59",
    _scan: "https://cronoscan.com/token/0xc21223249CA28397B4B6541dfFaEcC539BfF0c59",
    symbol: "USDC",
    name: "USDC",
    decimals: 6,
    logoURI: "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png"
  },
  {
    chainId: 25,
    address: "0x66e428c3f67a68878562e79A0234c1F83c208770",
    _scan: "https://cronoscan.com/token/0x66e428c3f67a68878562e79A0234c1F83c208770",
    symbol: "USDT",
    name: "USDT",
    decimals: 6,
    logoURI: "https://coin.top/production/logo/usdtlogo.png"
  },
  {
    chainId: 25,
    address: "0xF2001B145b43032AAF5Ee2884e456CCd805F677D",
    _scan: "https://cronoscan.com/token/0xF2001B145b43032AAF5Ee2884e456CCd805F677D",
    symbol: "DAI",
    name: "DAI",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/9956/large/dai-multi-collateral-mcd.png"
  },
  {
    chainId: 25,
    address: "0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23",
    _scan: "https://cronoscan.com/token/0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23",
    symbol: "WCRO",
    name: "Wrapped CRO",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/14532.png"
  },
  {
    chainId: 25,
    address: "0xe6801928061CDbE32AC5AD0634427E140EFd05F9",
    _scan: "https://cronoscan.com/token/0xe6801928061CDbE32AC5AD0634427E140EFd05F9",
    symbol: "BIFI",
    name: "Beefy.finance",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/12704/small/token.png"
  },
  {
    chainId: 25,
    address: "0xe44Fd7fCb2b1581822D0c862B68222998a0c299a",
    _scan: "https://cronoscan.com/token/0xe44Fd7fCb2b1581822D0c862B68222998a0c299a",
    symbol: "WETH",
    name: "Wrapped Ether",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
  },
  {
    chainId: 25,
    address: "0xbED48612BC69fA1CaB67052b42a95FB30C1bcFee",
    _scan: "https://cronoscan.com/token/0xbED48612BC69fA1CaB67052b42a95FB30C1bcFee",
    symbol: "SHIB",
    name: "Shiba Inu",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/11939/small/shiba.png"
  },
  {
    chainId: 25,
    address: "0x2D03bECE6747ADC00E1a131BBA1469C15fD11e03",
    _scan: "https://cronoscan.com/token/0x2D03bECE6747ADC00E1a131BBA1469C15fD11e03",
    symbol: "VVS",
    name: "VVS Token",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/20210/small/8glAYOTM_400x400.jpg"
  },
  {
    chainId: 25,
    address: "0x062E66477Faf219F25D27dCED647BF57C3107d52",
    _scan: "https://cronoscan.com/token/0x062E66477Faf219F25D27dCED647BF57C3107d52",
    symbol: "WBTC",
    name: "Wrapped BTC",
    decimals: 8,
    logoURI: "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png"
  },
  {
    chainId: 25,
    address: "0xadbd1231fb360047525BEdF962581F3eee7b49fe",
    _scan: "https://cronoscan.com/token/0xadbd1231fb360047525BEdF962581F3eee7b49fe",
    symbol: "CRONA",
    name: "CronaSwap Token",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/14625.png"
  },
  {
    chainId: 25,
    address: "0x97749c9B61F878a880DfE312d2594AE07AEd7656",
    _scan: "https://cronoscan.com/token/0x97749c9B61F878a880DfE312d2594AE07AEd7656",
    symbol: "MMF",
    name: "Mad Meerkat Finance",
    decimals: 18,
    logoURI: "https://mm.finance//images/tokens/0x97749c9B61F878a880DfE312d2594AE07AEd7656.svg"
  },
  {
    chainId: 25,
    address: "0xB888d8Dd1733d72681b30c00ee76BDE93ae7aa93",
    _scan: "https://cronoscan.com/token/0xB888d8Dd1733d72681b30c00ee76BDE93ae7aa93",
    symbol: "ATOM",
    name: "ATOM",
    decimals: 6,
    logoURI: "https://assets.coingecko.com/coins/images/1481/small/cosmos_hub.png"
  },
  {
    chainId: 25,
    address: "0xCbDE0E17d14F49e10a10302a32d17AE88a7Ecb8B",
    _scan: "https://cronoscan.com/token/0xCbDE0E17d14F49e10a10302a32d17AE88a7Ecb8B",
    symbol: "CRYSTL",
    name: "Crystal Token",
    decimals: 18,
    logoURI: "https://www.crystl.finance/images/landing/shareholder.svg"
  },
  {
    chainId: 25,
    address: "0x83b2AC8642aE46FC2823Bc959fFEB3c1742c48B5",
    _scan: "https://cronoscan.com/token/0x83b2AC8642aE46FC2823Bc959fFEB3c1742c48B5",
    symbol: "DARK",
    name: "DarkCrypto",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/DARK.svg"
  },
  {
    chainId: 25,
    address: "0x10C9284E6094b71D3CE4E38B8bFfc668199da677",
    _scan: "https://cronoscan.com/token/0x10C9284E6094b71D3CE4E38B8bFfc668199da677",
    symbol: "MIMAS",
    name: "Mimas Finance",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/MIMAS.png"
  },
  {
    chainId: 25,
    address: "0x2Ae35c8E3D4bD57e8898FF7cd2bBff87166EF8cb",
    _scan: "https://cronoscan.com/token/0x2Ae35c8E3D4bD57e8898FF7cd2bBff87166EF8cb",
    decimals: 18,
    name: "MAI",
    symbol: "MAI",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/MAI.svg"
  }
], Gp = [
  {
    chainId: 42161,
    address: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
    _scan: "https://arbiscan.io/token/0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
    symbol: "USDC",
    name: "USDC",
    decimals: 6,
    logoURI: "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png"
  },
  {
    chainId: 42161,
    address: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
    _scan: "https://arbiscan.io/token/0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
    symbol: "USDT",
    name: "USDT",
    decimals: 6,
    logoURI: "https://coin.top/production/logo/usdtlogo.png"
  },
  {
    chainId: 42161,
    address: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
    _scan: "https://arbiscan.io/token/0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
    symbol: "DAI",
    name: "DAI",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/9956/large/dai-multi-collateral-mcd.png"
  },
  {
    chainId: 42161,
    address: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
    _scan: "https://arbiscan.io/token/0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
    symbol: "WETH",
    name: "Wrapped Ether",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
  },
  {
    chainId: 42161,
    address: "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f",
    _scan: "https://arbiscan.io/token/0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f",
    symbol: "WBTC",
    name: "WBTC",
    decimals: 8,
    logoURI: "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png"
  },
  {
    chainId: 42161,
    address: "0xFEa7a6a0B346362BF88A9e4A88416B77a57D6c2A",
    _scan: "https://arbiscan.io/token/0xFEa7a6a0B346362BF88A9e4A88416B77a57D6c2A",
    symbol: "MIM",
    name: "Magic Internet Money",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/162.png"
  },
  {
    chainId: 42161,
    address: "0x3F56e0c36d275367b8C502090EDF38289b3dEa0d",
    _scan: "https://arbiscan.io/token/0x3F56e0c36d275367b8C502090EDF38289b3dEa0d",
    decimals: 18,
    name: "MAI",
    symbol: "MAI",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/MAI.svg"
  },
  {
    chainId: 42161,
    address: "0x9d2f299715d94d8a7e6f5eaa8e654e8c74a988a7",
    _scan: "https://arbiscan.io/token/0x9d2f299715d94d8a7e6f5eaa8e654e8c74a988a7",
    decimals: 18,
    name: "Frax Share",
    symbol: "FXS",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/FXS.svg"
  },
  {
    chainId: 42161,
    address: "0x080f6aed32fc474dd5717105dba5ea57268f46eb",
    _scan: "https://arbiscan.io/token/0x080f6aed32fc474dd5717105dba5ea57268f46eb",
    decimals: 18,
    name: "Synapse",
    symbol: "SYN",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/SYN.svg"
  },
  {
    chainId: 42161,
    address: "0x319f865b287fcc10b30d8ce6144e8b6d1b476999",
    _scan: "https://arbiscan.io/token/0x319f865b287fcc10b30d8ce6144e8b6d1b476999",
    decimals: 18,
    name: "Cartesi",
    symbol: "CTSI",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/CTSI.png"
  },
  {
    chainId: 42161,
    address: "0x9fb9a33956351cf4fa040f65a13b835a3c8764e3",
    _scan: "https://arbiscan.io/token/0x9fb9a33956351cf4fa040f65a13b835a3c8764e3",
    decimals: 18,
    name: "Multchain",
    symbol: "MULTI",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/MULTI.png"
  },
  {
    chainId: 42161,
    address: "0x6694340fc020c5e6b96567843da2df01b2ce1eb6",
    _scan: "https://arbiscan.io/token/0x6694340fc020c5e6b96567843da2df01b2ce1eb6",
    decimals: 18,
    name: "Stargate Finance",
    symbol: "STG",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/STG.svg"
  },
  {
    chainId: 42161,
    address: "0x99c409e5f62e4bd2ac142f17cafb6810b8f0baae",
    _scan: "https://arbiscan.io/token/0x99c409e5f62e4bd2ac142f17cafb6810b8f0baae",
    decimals: 18,
    name: "Beefy.Finance",
    symbol: "BIFI",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/BIFI.png"
  },
  {
    chainId: 42161,
    address: "0x68ead55c258d6fa5e46d67fc90f53211eab885be",
    _scan: "https://arbiscan.io/token/0x68ead55c258d6fa5e46d67fc90f53211eab885be",
    decimals: 18,
    name: "Popcorn",
    symbol: "POP",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/POP.png"
  },
  {
    chainId: 42161,
    address: "0xd74f5255d557944cf7dd0e45ff521520002d5748",
    _scan: "https://arbiscan.io/token/0xd74f5255d557944cf7dd0e45ff521520002d5748",
    decimals: 18,
    name: "Sperax USD",
    symbol: "USDS",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/USDS.svg"
  },
  {
    chainId: 42161,
    address: "0xee9801669c6138e84bd50deb500827b776777d28",
    _scan: "https://arbiscan.io/token/0xee9801669c6138e84bd50deb500827b776777d28",
    decimals: 18,
    name: "O3 Swap",
    symbol: "O3",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/O3.png"
  },
  {
    chainId: 42161,
    address: "0x21e60ee73f17ac0a411ae5d690f908c3ed66fe12",
    _scan: "https://arbiscan.io/token/0x21e60ee73f17ac0a411ae5d690f908c3ed66fe12",
    decimals: 18,
    name: "Deri Protocol",
    symbol: "DERI",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/DERI.svg"
  },
  {
    chainId: 42161,
    address: "0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a",
    _scan: "https://arbiscan.io/token/0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a",
    decimals: 18,
    name: "GMX",
    symbol: "GMX",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/GMX.svg"
  },
  {
    chainId: 42161,
    address: "0x912CE59144191C1204E64559FE8253a0e49E6548",
    decimals: 18,
    name: "ARB",
    symbol: "ARB",
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/8ba76036-74a3-4471-b3b3-69ea317b0bae.png"
  }
], Kp = [
  {
    chainId: 199,
    address: "0xCa424b845497f7204D9301bd13Ff87C0E2e86FCF",
    _scan: "https://bttcscan.com/token/0xCa424b845497f7204D9301bd13Ff87C0E2e86FCF",
    symbol: "USDC_b",
    name: "USD Coin_BSC",
    decimals: 18,
    logoURI: "https://coin.top/production/upload/logo/TEkxiTehnzSmSe2XqrBj4w32RUN966rdz81.png"
  },
  {
    chainId: 199,
    address: "0x9B5F27f6ea9bBD753ce3793a07CbA3C74644330d",
    _scan: "https://bttcscan.com/token/0x9B5F27f6ea9bBD753ce3793a07CbA3C74644330d",
    symbol: "USDT_b",
    name: "Tether USD_BSC",
    decimals: 18,
    logoURI: "https://coin.top/production/logo/usdtlogo.png"
  },
  {
    chainId: 199,
    address: "0xE887512ab8BC60BcC9224e1c3b5Be68E26048B8B",
    _scan: "https://bttcscan.com/token/0xE887512ab8BC60BcC9224e1c3b5Be68E26048B8B",
    symbol: "USDT_e",
    name: "Tether USD_Ethereum",
    decimals: 6,
    logoURI: "https://coin.top/production/logo/usdtlogo.png"
  },
  {
    chainId: 199,
    address: "0xe7dC549AE8DB61BDE71F22097BEcc8dB542cA100",
    _scan: "https://bttcscan.com/token/0xe7dC549AE8DB61BDE71F22097BEcc8dB542cA100",
    symbol: "DAI_e",
    name: "Dai Stablecoin_Ethereum",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3/logo.png"
  },
  {
    chainId: 199,
    address: "0x8D193c6efa90BCFf940A98785d1Ce9D093d3DC8A",
    _scan: "https://bttcscan.com/token/0x8D193c6efa90BCFf940A98785d1Ce9D093d3DC8A",
    symbol: "WBTT",
    name: "Wrapped BTT",
    decimals: 18,
    logoURI: "https://coin.top/production/logo/1002000.png"
  },
  {
    chainId: 199,
    address: "0xA20dfb01DCa223c0E52B0D4991D4aFA7E08e3a50",
    _scan: "https://bttcscan.com/token/0xA20dfb01DCa223c0E52B0D4991D4aFA7E08e3a50",
    symbol: "ETH_b",
    name: "Ethereum Token_BSC",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0x2170Ed0880ac9A755fd29B2688956BD959F933F8/logo.png"
  },
  {
    chainId: 199,
    address: "0x185a4091027E2dB459a2433F85f894dC3013aeB5",
    _scan: "https://bttcscan.com/token/0x185a4091027E2dB459a2433F85f894dC3013aeB5",
    symbol: "BNB",
    decimals: 18,
    name: "Binance Coin",
    logoURI: "https://coin.top/production/upload/logo/TDgkC3ZZBgaDqkteSgx9F14rPfqRgktyzh.jpeg"
  },
  {
    chainId: 199,
    address: "0xEdf53026aeA60f8F75FcA25f8830b7e2d6200662",
    _scan: "https://bttcscan.com/token/0xEdf53026aeA60f8F75FcA25f8830b7e2d6200662",
    symbol: "TRX",
    decimals: 6,
    name: "TRON",
    logoURI: "https://coin.top/production/upload/logo/TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR.png"
  },
  {
    chainId: 199,
    address: "0x5d9a3948a688aa40b5F2e1Ab58B80872FfF038A7",
    _scan: "https://bttcscan.com/token/0x5d9a3948a688aa40b5F2e1Ab58B80872FfF038A7",
    symbol: "XMN",
    name: "Metronotes",
    decimals: 9,
    logoURI: "http://images.bt.io/0x5d9a3948a688aa40b5f2e1ab58b80872fff038a7.png"
  },
  {
    chainId: 199,
    address: "0xA66Bb5755391C0202353dC1b708d13A97444e5B8",
    _scan: "https://bttcscan.com/token/0xA66Bb5755391C0202353dC1b708d13A97444e5B8",
    symbol: "TET",
    decimals: 18,
    name: "Tetcoin",
    logoURI: "http://images.bt.io/0xa66bb5755391c0202353dc1b708d13a97444e5b8.png"
  },
  {
    chainId: 199,
    address: "0xdB28719F7f938507dBfe4f0eAe55668903D34a15",
    _scan: "https://bttcscan.com/token/0xdB28719F7f938507dBfe4f0eAe55668903D34a15",
    symbol: "USDT_t",
    decimals: 6,
    name: "Tether USD_TRON",
    logoURI: "https://coin.top/production/logo/usdtlogo.png"
  },
  {
    chainId: 199,
    address: "0xcBb9EDF6775e39748Ea6483A7fa6a385Cd7E9a4E",
    _scan: "https://bttcscan.com/token/0xcBb9EDF6775e39748Ea6483A7fa6a385Cd7E9a4E",
    symbol: "BTT_b",
    name: "BitTorrent_BSC",
    decimals: 18,
    logoURI: "https://coin.top/production/logo/1002000.png"
  },
  {
    chainId: 199,
    address: "0x65676055E58b02E61272Cedec6E5C6D56BADfb86",
    _scan: "https://bttcscan.com/token/0x65676055E58b02E61272Cedec6E5C6D56BADfb86",
    symbol: "BTT_e",
    name: "BitTorrent_Ethereum",
    decimals: 18,
    logoURI: "https://coin.top/production/logo/1002000.png"
  },
  {
    chainId: 199,
    address: "0xb09349DDd39454d539EDC17Fc68eCC50E8e13377",
    _scan: "https://bttcscan.com/token/0xb09349DDd39454d539EDC17Fc68eCC50E8e13377",
    symbol: "HYBERBTT",
    name: "HYBERBTT",
    decimals: 18,
    logoURI: "https://coin.top/production/logo/1002000.png"
  },
  {
    chainId: 199,
    address: "0x935faA2FCec6Ab81265B301a30467Bbc804b43d3",
    _scan: "https://bttcscan.com/token/0x935faA2FCec6Ab81265B301a30467Bbc804b43d3",
    symbol: "USDC_t",
    name: "USD Coin_TRON",
    decimals: 6,
    logoURI: "https://bttcscan.com/token/images/usdcbttc_32.png"
  },
  {
    chainId: 199,
    address: "0x9888221fE6B5A2ad4cE7266c7826D2AD74D40CcF",
    _scan: "https://bttcscan.com/token/0x9888221fE6B5A2ad4cE7266c7826D2AD74D40CcF",
    symbol: "WBTC_e",
    name: "Wrapped BTC_Ethereum",
    decimals: 8,
    logoURI: "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png"
  },
  {
    chainId: 199,
    address: "0xE467F79E9869757DD818DfB8535068120F6BcB97",
    _scan: "https://bttcscan.com/token/0xE467F79E9869757DD818DfB8535068120F6BcB97",
    symbol: "KNC_e",
    name: "Kyber Network Crystal v2 - Ethereum",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/dmm-interface/main/src/assets/images/KNC.svg"
  },
  {
    chainId: 199,
    address: "0x18fA72e0EE4C580a129b0CE5bD0694d716C7443E",
    _scan: "https://bttcscan.com/token/0x18fA72e0EE4C580a129b0CE5bD0694d716C7443E",
    symbol: "KNC_b",
    name: "Kyber Network Crystal v2 - BSC",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/dmm-interface/main/src/assets/images/KNC.svg"
  },
  {
    chainId: 199,
    address: "0x1249C65AfB11D179FFB3CE7D4eEDd1D9b98AD006",
    _scan: "https://bttcscan.com/token/0x1249C65AfB11D179FFB3CE7D4eEDd1D9b98AD006",
    symbol: "ETH",
    name: "ETH",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0x2170Ed0880ac9A755fd29B2688956BD959F933F8/logo.png"
  },
  {
    chainId: 199,
    address: "0xAE17940943BA9440540940DB0F1877f101D39e8b",
    _scan: "https://bttcscan.com/token/0xAE17940943BA9440540940DB0F1877f101D39e8b",
    symbol: "USDC_e",
    name: "USD Coin_Ethereum",
    decimals: 6,
    logoURI: "https://coin.top/production/upload/logo/TEkxiTehnzSmSe2XqrBj4w32RUN966rdz81.png"
  },
  {
    chainId: 199,
    address: "0x17F235FD5974318E4E2a5e37919a209f7c37A6d1",
    _scan: "https://bttcscan.com/token/0x17F235FD5974318E4E2a5e37919a209f7c37A6d1",
    symbol: "USDD_t",
    name: "Decentralized USD_TRON",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/USDD.svg"
  }
], qp = [
  {
    chainId: 106,
    address: "0xc579D1f3CF86749E05CD06f7ADe17856c2CE3126",
    _scan: "https://evmexplorer.velas.com/token/0xc579D1f3CF86749E05CD06f7ADe17856c2CE3126",
    symbol: "WVLX",
    name: "Wrapped VLX",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/dmm-interface/9c1efef2dc1c650adeac5ed7a370cad8e064f6be/src/assets/networks/velas-network.png"
  },
  {
    chainId: 106,
    address: "0xc111c29A988AE0C0087D97b33C6E6766808A3BD3",
    _scan: "https://evmexplorer.velas.com/token/0xc111c29A988AE0C0087D97b33C6E6766808A3BD3",
    symbol: "BUSD",
    name: "Multichain BUSD",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/4687.png"
  },
  {
    chainId: 106,
    address: "0xaBf26902Fd7B624e0db40D31171eA9ddDf078351",
    _scan: "https://evmexplorer.velas.com/token/0xaBf26902Fd7B624e0db40D31171eA9ddDf078351",
    symbol: "WAG",
    name: "Wagyu",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11354.png"
  },
  {
    chainId: 106,
    address: "0x01445C31581c354b7338AC35693AB2001B50b9aE",
    _scan: "https://evmexplorer.velas.com/token/0x01445C31581c354b7338AC35693AB2001B50b9aE",
    symbol: "USDT",
    name: "Multichain USDT",
    decimals: 6,
    logoURI: "https://coin.top/production/logo/usdtlogo.png"
  },
  {
    chainId: 106,
    address: "0x8d9fB713587174Ee97e91866050c383b5cEE6209",
    _scan: "https://evmexplorer.velas.com/token/0x8d9fB713587174Ee97e91866050c383b5cEE6209",
    symbol: "SCAR",
    name: "Velhalla",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/13250.png"
  },
  {
    chainId: 106,
    address: "0x72eB7CA07399Ec402c5b7aa6A65752B6A1Dc0C27",
    _scan: "https://evmexplorer.velas.com/token/0x72eB7CA07399Ec402c5b7aa6A65752B6A1Dc0C27",
    symbol: "ASTRO",
    name: "AstroSwap",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/12120.png"
  },
  {
    chainId: 106,
    address: "0x3611Fbfb06ffBcEf9Afb210f6Ace86742e6c14a4",
    _scan: "https://evmexplorer.velas.com/token/0x3611Fbfb06ffBcEf9Afb210f6Ace86742e6c14a4",
    symbol: "ADA",
    name: "Ada Asset",
    decimals: 6,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png"
  },
  {
    chainId: 106,
    address: "0x8a74BC8c372bC7f0E9cA3f6Ac0df51BE15aEC47A",
    _scan: "https://evmexplorer.velas.com/token/0x8a74BC8c372bC7f0E9cA3f6Ac0df51BE15aEC47A",
    symbol: "PLSPAD",
    name: "PULSEPAD.io",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/12416.png"
  },
  {
    chainId: 106,
    address: "0x6EF5D1aB0642ceF5227465e209f92675008558cA",
    _scan: "https://evmexplorer.velas.com/token/0x6EF5D1aB0642ceF5227465e209f92675008558cA",
    symbol: "VSH",
    name: "VELASSHIBA",
    decimals: 9,
    logoURI: ""
  },
  {
    chainId: 106,
    address: "0xa065e0858417Dfc7abC6f2BD4D0185332475C180",
    _scan: "https://evmexplorer.velas.com/token/0xa065e0858417Dfc7abC6f2BD4D0185332475C180",
    symbol: "VLXPAD",
    name: "Velas Pad",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11654.png"
  },
  {
    chainId: 106,
    address: "0x4cBA3447E51239065310E24c02C190945ad761d9",
    _scan: "https://evmexplorer.velas.com/token/0x4cBA3447E51239065310E24c02C190945ad761d9",
    symbol: "MNFT",
    name: "MarvelousNFT",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/16218.png"
  },
  {
    chainId: 106,
    address: "0x62858686119135cc00C4A3102b436a0eB314D402",
    _scan: "https://evmexplorer.velas.com/token/0x62858686119135cc00C4A3102b436a0eB314D402",
    symbol: "METAV",
    name: "METAVPAD.com",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/13978.png"
  },
  {
    chainId: 106,
    address: "0xd12f7A98C0d740E7Ec82E8caF94EB79C56D1B623",
    _scan: "https://evmexplorer.velas.com/token/0xd12f7A98C0d740E7Ec82E8caF94EB79C56D1B623",
    symbol: "VDGT",
    name: "VeleroDAO",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/18282.png"
  },
  {
    chainId: 106,
    address: "0x09bcE7716D46459DF7473982Fd27A96EabD6eE4d",
    _scan: "https://evmexplorer.velas.com/token/0x09bcE7716D46459DF7473982Fd27A96EabD6eE4d",
    symbol: "BITORB",
    name: "Bitorbit",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/12255.png"
  },
  {
    chainId: 106,
    address: "0x9Ab70e92319f0b9127df78868Fd3655fB9f1E322",
    _scan: "https://evmexplorer.velas.com/token/0x9Ab70e92319f0b9127df78868Fd3655fB9f1E322",
    symbol: "WWY",
    name: "WeWay Token",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/17047.png"
  },
  {
    chainId: 106,
    address: "0xF800F6977a7F98eAca9163e549be17bbdA84394a",
    _scan: "https://evmexplorer.velas.com/token/0xF800F6977a7F98eAca9163e549be17bbdA84394a",
    symbol: "VHT",
    name: "Velhalla Token",
    decimals: 18,
    logoURI: ""
  },
  {
    chainId: 106,
    address: "0x32561fA6D2D3E2191bF50f813DF2C34fb3C89B62",
    _scan: "https://evmexplorer.velas.com/token/0x32561fA6D2D3E2191bF50f813DF2C34fb3C89B62",
    symbol: "VERVE",
    name: "VERVETV.app",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/16902.png"
  },
  {
    chainId: 106,
    address: "0x2217e5921B7edfB4BB193a6228459974010D2198",
    _scan: "https://evmexplorer.velas.com/token/0x2217e5921B7edfB4BB193a6228459974010D2198",
    symbol: "QMALL",
    name: "Qmall Token",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/18059.png"
  },
  {
    chainId: 106,
    address: "0x9b6fbF0ea23faF0d77B94d5699B44062e5E747Ac",
    _scan: "https://evmexplorer.velas.com/token/0x9b6fbF0ea23faF0d77B94d5699B44062e5E747Ac",
    symbol: "SWAPZ",
    name: "Swapz",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/10557.png"
  },
  {
    chainId: 106,
    address: "0x948E8c6E0c9035f7372a10e10f9f71cC81341053",
    _scan: "https://evmexplorer.velas.com/token/0x948E8c6E0c9035f7372a10e10f9f71cC81341053",
    symbol: "VPUNKS",
    name: "VelasPunks",
    decimals: 18,
    logoURI: ""
  },
  {
    chainId: 106,
    address: "0xe2C120f188eBd5389F71Cf4d9C16d05b62A58993",
    _scan: "https://evmexplorer.velas.com/token/0xe2C120f188eBd5389F71Cf4d9C16d05b62A58993",
    symbol: "USDC",
    name: "Multichain USDC",
    decimals: 6,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png"
  },
  {
    chainId: 106,
    address: "0x85219708c49aa701871Ad330A94EA0f41dFf24Ca",
    _scan: "https://evmexplorer.velas.com/token/0x85219708c49aa701871Ad330A94EA0f41dFf24Ca",
    symbol: "ETH",
    name: "Multichain ETH",
    decimals: 18,
    logoURI: "https://github.com/wagyuswapapp/assets/blob/master/blockchains/velas/assets/0x85219708c49aa701871ad330a94ea0f41dff24ca/logo.png?raw=true"
  },
  {
    chainId: 106,
    address: "0xcd7509b76281223f5b7d3ad5d47f8d7aa5c2b9bf",
    _scan: "https://evmexplorer.velas.com/token/0xcd7509b76281223f5b7d3ad5d47f8d7aa5c2b9bf",
    symbol: "USDV",
    name: "USD Velero Stablecoin",
    decimals: 18,
    logoURI: "https://github.com/wagyuswapapp/assets/blob/master/blockchains/velas/assets/0xcd7509b76281223f5b7d3ad5d47f8d7aa5c2b9bf/logo.png?raw=true"
  }
], Yp = [
  {
    chainId: 1313161554,
    address: "0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB",
    _scan: "https://aurorascan.dev/token/0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB",
    symbol: "WETH",
    name: "Wrapped Ether",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
  },
  {
    chainId: 1313161554,
    address: "0x4e834cdcc911605227eedddb89fad336ab9dc00a",
    _scan: "https://aurorascan.dev/token/0x4e834cdcc911605227eedddb89fad336ab9dc00a",
    symbol: "AAVE",
    name: "Aave Token",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/aave.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0x8bec47865ade3b172a928df8f990bc7f2a3b9f79",
    _scan: "https://aurorascan.dev/token/0x8bec47865ade3b172a928df8f990bc7f2a3b9f79",
    symbol: "AURORA",
    name: "Aurora",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/aurora.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0x8973c9ec7b79fe880697cdbca744892682764c37",
    _scan: "https://aurorascan.dev/token/0x8973c9ec7b79fe880697cdbca744892682764c37",
    symbol: "BAKED",
    name: "BakedToken",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/baked.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0xb59d0fdaf498182ff19c4e80c00ecfc4470926e2",
    _scan: "https://aurorascan.dev/token/0xb59d0fdaf498182ff19c4e80c00ecfc4470926e2",
    symbol: "BAL",
    name: "Balancer",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/bal.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0x2b9025aecc5ce7a8e6880d3e9c6e458927ecba04",
    _scan: "https://aurorascan.dev/token/0x2b9025aecc5ce7a8e6880d3e9c6e458927ecba04",
    symbol: "BAT",
    name: "Basic Attention Token",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/BAT.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0xdeacf0faa2b80af41470003b5f6cd113d47b4dcd",
    _scan: "https://aurorascan.dev/token/0xdeacf0faa2b80af41470003b5f6cd113d47b4dcd",
    symbol: "COMP",
    name: "Compound",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/comp.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0xabe9818c5fb5e751c4310be6f0f18c8d85f9bd7f",
    _scan: "https://aurorascan.dev/token/0xabe9818c5fb5e751c4310be6f0f18c8d85f9bd7f",
    symbol: "CREAM",
    name: "Cream Finance",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/cream.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0xe3520349f477a5f6eb06107066048508498a291b",
    _scan: "https://aurorascan.dev/token/0xe3520349f477a5f6eb06107066048508498a291b",
    symbol: "DAI",
    name: "Dai Stablecoin",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/dai.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0xe301ed8c7630c9678c39e4e45193d1e7dfb914f7",
    _scan: "https://aurorascan.dev/token/0xe301ed8c7630c9678c39e4e45193d1e7dfb914f7",
    symbol: "DODO",
    name: "DODO bird",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/dodo.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0xea62791aa682d455614eaa2a12ba3d9a2fd197af",
    _scan: "https://aurorascan.dev/token/0xea62791aa682d455614eaa2a12ba3d9a2fd197af",
    symbol: "FLX",
    name: "Flux Token",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/flx.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0xda2585430fef327ad8ee44af8f1f989a2a91a3d2",
    _scan: "https://aurorascan.dev/token/0xda2585430fef327ad8ee44af8f1f989a2a91a3d2",
    symbol: "FRAX",
    name: "Frax",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/FRAX.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0xc8fdd32e0bf33f0396a18209188bb8c6fb8747d2",
    _scan: "https://aurorascan.dev/token/0xc8fdd32e0bf33f0396a18209188bb8c6fb8747d2",
    symbol: "FXS",
    name: "Frax Share",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/FXS.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0x94190d8ef039c670c6d6b9990142e0ce2a1e3178",
    _scan: "https://aurorascan.dev/token/0x94190d8ef039c670c6d6b9990142e0ce2a1e3178",
    symbol: "LINK",
    name: "ChainLink Token",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/link.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0xfca152a9916895bf564e3f26a611f9e1e6aa6e73",
    _scan: "https://aurorascan.dev/token/0xfca152a9916895bf564e3f26a611f9e1e6aa6e73",
    symbol: "LUNA",
    name: "Wrapped LUNA Token",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/luna.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0x1d1f82d8b8fc72f29a8c268285347563cb6cd8b3",
    _scan: "https://aurorascan.dev/token/0x1d1f82d8b8fc72f29a8c268285347563cb6cd8b3",
    symbol: "MKR",
    name: "Maker",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/MKR.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0xd126b48c072f4668e944a8895bc74044d5f2e85b",
    _scan: "https://aurorascan.dev/token/0xd126b48c072f4668e944a8895bc74044d5f2e85b",
    symbol: "MNFT",
    name: "MANUFACTORY",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/mnft.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0x74974575d2f1668c63036d51ff48dbaa68e52408",
    _scan: "https://aurorascan.dev/token/0x74974575d2f1668c63036d51ff48dbaa68e52408",
    symbol: "MODA",
    name: "moda",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/moda.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d",
    _scan: "https://aurorascan.dev/token/0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d",
    symbol: "wNEAR",
    name: "Wrapped NEAR fungible token",
    decimals: 24,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/near.svg",
    tags: []
  },
  {
    chainId: 1313161554,
    address: "0x885f8CF6E45bdd3fdcDc644efdcd0AC93880c781",
    _scan: "https://aurorascan.dev/token/0x885f8CF6E45bdd3fdcDc644efdcd0AC93880c781",
    symbol: "PAD",
    name: "NearPad Token",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/pad.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0x8828a5047d093f6354e3fe29ffcb2761300dc994",
    _scan: "https://aurorascan.dev/token/0x8828a5047d093f6354e3fe29ffcb2761300dc994",
    symbol: "PULSE",
    name: "Pulse",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/pulse.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0x18921f1e257038e538ba24d49fa6495c8b1617bc",
    _scan: "https://aurorascan.dev/token/0x18921f1e257038e538ba24d49fa6495c8b1617bc",
    symbol: "REN",
    name: "Republic",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/ren.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0xdc9be1ff012d3c6da818d136a3b2e5fdd4442f74",
    _scan: "https://aurorascan.dev/token/0xdc9be1ff012d3c6da818d136a3b2e5fdd4442f74",
    symbol: "SNX",
    name: "Synthetix Network Token",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/SNX.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0x7821c773a12485b12a2b5b7bc451c3eb200986b1",
    _scan: "https://aurorascan.dev/token/0x7821c773a12485b12a2b5b7bc451c3eb200986b1",
    symbol: "SUSHI",
    name: "SushiToken",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/SUSHI.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0xFa94348467f64D5A457F75F8bc40495D33c65aBB",
    _scan: "https://aurorascan.dev/token/0xFa94348467f64D5A457F75F8bc40495D33c65aBB",
    symbol: "TRI",
    name: "Trisolaris",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/tri.svg",
    tags: []
  },
  {
    chainId: 1313161554,
    address: "0x984c2505a14da732d7271416356f535953610340",
    _scan: "https://aurorascan.dev/token/0x984c2505a14da732d7271416356f535953610340",
    symbol: "UMINT",
    name: "YouMinter",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/umint.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0x1bc741235ec0ee86ad488fa49b69bb6c823ee7b7",
    _scan: "https://aurorascan.dev/token/0x1bc741235ec0ee86ad488fa49b69bb6c823ee7b7",
    symbol: "UNI",
    name: "Uniswap",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/uni.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0xb12bfca5a55806aaf64e99521918a4bf0fc40802",
    _scan: "https://aurorascan.dev/token/0xb12bfca5a55806aaf64e99521918a4bf0fc40802",
    symbol: "USDC",
    name: "USD Coin",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/usdc.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0x4988a896b1227218e4a686fde5eabdcabd91571f",
    _scan: "https://aurorascan.dev/token/0x4988a896b1227218e4a686fde5eabdcabd91571f",
    symbol: "USDT",
    name: "TetherUS",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/usdt.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0x098d5b6a26bca1d71f2335805d71b244f94e8a5f",
    _scan: "https://aurorascan.dev/token/0x098d5b6a26bca1d71f2335805d71b244f94e8a5f",
    symbol: "UST",
    name: "Wrapped UST Token",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/ust.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0xf4eb217ba2454613b15dbdea6e5f22276410e89e",
    _scan: "https://aurorascan.dev/token/0xf4eb217ba2454613b15dbdea6e5f22276410e89e",
    symbol: "WBTC",
    name: "Wrapped BTC",
    decimals: 8,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/wbtc.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0xa64514a8af3ff7366ad3d5daa5a548eefcef85e0",
    _scan: "https://aurorascan.dev/token/0xa64514a8af3ff7366ad3d5daa5a548eefcef85e0",
    symbol: "YFI",
    name: "yearn.finance",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/yfi.svg",
    tags: ["ethereum"]
  }
], Xp = [
  {
    chainId: 42262,
    address: "0xd1dF9CE4b6159441D18BD6887dbd7320a8D52a05",
    _scan: "https://explorer.emerald.oasis.dev/token/0xd1dF9CE4b6159441D18BD6887dbd7320a8D52a05",
    symbol: "FTP",
    name: "Fountain Protocol",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/24041/small/logo-black.png?1646138615"
  },
  {
    chainId: 42262,
    address: "0xf02b3e437304892105992512539F769423a515Cb",
    _scan: "https://explorer.emerald.oasis.dev/token/0xf02b3e437304892105992512539F769423a515Cb",
    symbol: "YUZU",
    name: "YUZUToken",
    decimals: 18,
    logoURI: "https://yuzu-swap.com/yuzu.0f21407f.svg"
  },
  {
    chainId: 42262,
    address: "0x21C718C22D52d0F3a789b752D4c2fD5908a8A733",
    _scan: "https://explorer.emerald.oasis.dev/token/0x21C718C22D52d0F3a789b752D4c2fD5908a8A733",
    symbol: "WROSE",
    name: "Wrapped ROSE",
    decimals: 18,
    logoURI: "https://docs.oasis.dev/img/logo.png"
  },
  {
    chainId: 42262,
    address: "0x89aF3985261b664a24DE48355D589275b0FE2112",
    _scan: "https://explorer.emerald.oasis.dev/token/0x89aF3985261b664a24DE48355D589275b0FE2112",
    symbol: "USBL",
    name: "softbalanced.com",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/softbalanced/softbalanced.github.io/418f59f5cbc0a79866fce615c697812934902607/index_files/logo__.png"
  },
  {
    chainId: 42262,
    address: "0xBC033203796CC2C8C543a5aAe93a9a643320433D",
    _scan: "https://explorer.emerald.oasis.dev/token/0xBC033203796CC2C8C543a5aAe93a9a643320433D",
    symbol: "VS",
    name: "ValleySwap Token",
    decimals: 18,
    logoURI: "https://valleyswap.com/images/logo_valley-swap_mob.svg"
  },
  {
    chainId: 42262,
    address: "0x0bfF36Be5cf671Fa973f8206483b6641A90CE7d0",
    _scan: "https://explorer.emerald.oasis.dev/token/0x0bfF36Be5cf671Fa973f8206483b6641A90CE7d0",
    symbol: "\u{1F339}SWAP",
    name: "\u{1F339}RoseSwap.io",
    decimals: 18,
    logoURI: "https://app.rose.fi/static/media/rose.54bf1c833f8f489c2e36399cbf1033ed.svg"
  },
  {
    chainId: 42262,
    address: "0x6Cb9750a92643382e020eA9a170AbB83Df05F30B",
    _scan: "https://explorer.emerald.oasis.dev/token/0x6Cb9750a92643382e020eA9a170AbB83Df05F30B",
    symbol: "USDT",
    name: "Tether USD",
    decimals: 6,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
  },
  {
    chainId: 42262,
    address: "0x94fbfFe5698DB6f54d6Ca524DbE673a7729014Be",
    _scan: "https://explorer.emerald.oasis.dev/token/0x94fbfFe5698DB6f54d6Ca524DbE673a7729014Be",
    symbol: "USDC",
    name: "USD Coin",
    decimals: 6,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png"
  },
  {
    chainId: 42262,
    address: "0x010CDf0Db2737f9407F8CFcb4dCaECA4dE54c815",
    _scan: "https://explorer.emerald.oasis.dev/token/0x010CDf0Db2737f9407F8CFcb4dCaECA4dE54c815",
    symbol: "BTC",
    name: "Bitcoin",
    decimals: 8,
    logoURI: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579"
  },
  {
    chainId: 42262,
    address: "0x32847e63E99D3a044908763056e25694490082F8",
    _scan: "https://explorer.emerald.oasis.dev/token/0x32847e63E99D3a044908763056e25694490082F8",
    symbol: "AVAX",
    name: "AVAX (Wormhole)",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/AVAX_wh.png"
  },
  {
    chainId: 42262,
    address: "0x05CbE6319Dcc937BdbDf0931466F4fFd0d392B47",
    _scan: "https://explorer.emerald.oasis.dev/token/0x05CbE6319Dcc937BdbDf0931466F4fFd0d392B47",
    symbol: "USDCav",
    name: "USD Coin (Wormhole from Avalanche)",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/USDCav_wh.png"
  },
  {
    chainId: 42262,
    address: "0x05832a0905E516f29344ADBa1c2052a788B10129",
    _scan: "https://explorer.emerald.oasis.dev/token/0x05832a0905E516f29344ADBa1c2052a788B10129",
    symbol: "USDTav",
    name: "Tether USD (Wormhole from Avalanche)",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/USDTav_wh.png"
  },
  {
    chainId: 42262,
    address: "0xd79Ef9A91b56c690C7b80570a3c060678667f469",
    _scan: "https://explorer.emerald.oasis.dev/token/0xd79Ef9A91b56c690C7b80570a3c060678667f469",
    symbol: "BNB",
    name: "Binance Coin (Wormhole)",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/BNB_wh.png"
  },
  {
    chainId: 42262,
    address: "0xf6568FD76f9fcD1f60f73b730F142853c5eF627E",
    _scan: "https://explorer.emerald.oasis.dev/token/0xf6568FD76f9fcD1f60f73b730F142853c5eF627E",
    symbol: "BUSDbs",
    name: "Binance USD (Wormhole from BSC)",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/BUSDbs_wh.png"
  },
  {
    chainId: 42262,
    address: "0x4cA2A3De42eabC8fd8b0AC46127E64DB08b9150e",
    _scan: "https://explorer.emerald.oasis.dev/token/0x4cA2A3De42eabC8fd8b0AC46127E64DB08b9150e",
    symbol: "USDCbs",
    name: "USD Coin (Wormhole from BSC)",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/USDCbs_wh.png"
  },
  {
    chainId: 42262,
    address: "0x366EF31C8dc715cbeff5fA54Ad106dC9c25C6153",
    _scan: "https://explorer.emerald.oasis.dev/token/0x366EF31C8dc715cbeff5fA54Ad106dC9c25C6153",
    symbol: "USDTbs",
    name: "Tether USD (Wormhole from BSC)",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/USDTbs_wh.png"
  },
  {
    chainId: 42262,
    address: "0x3223f17957Ba502cbe71401D55A0DB26E5F7c68F",
    _scan: "https://explorer.emerald.oasis.dev/token/0x3223f17957Ba502cbe71401D55A0DB26E5F7c68F",
    symbol: "ETH",
    name: "Ether (Wormhole)",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/ETH_wh.png"
  },
  {
    chainId: 42262,
    address: "0xE8A638b3B7565Ee7c5eb9755E58552aFc87b94DD",
    _scan: "https://explorer.emerald.oasis.dev/token/0xE8A638b3B7565Ee7c5eb9755E58552aFc87b94DD",
    symbol: "USDCet",
    name: "USD Coin (Wormhole from Ethereum)",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/USDCet_wh.png"
  },
  {
    chainId: 42262,
    address: "0xdC19A122e268128B5eE20366299fc7b5b199C8e3",
    _scan: "https://explorer.emerald.oasis.dev/token/0xdC19A122e268128B5eE20366299fc7b5b199C8e3",
    symbol: "USDTet",
    name: "Tether USD (Wormhole from Ethereum)",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/USDTet_wh.png"
  },
  {
    chainId: 42262,
    address: "0xd43ce0aa2a29DCb75bDb83085703dc589DE6C7eb",
    _scan: "https://explorer.emerald.oasis.dev/token/0xd43ce0aa2a29DCb75bDb83085703dc589DE6C7eb",
    symbol: "WBTC",
    name: "Wrapped BTC (Wormhole)",
    decimals: 8,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/WBTC_wh.png"
  },
  {
    chainId: 42262,
    address: "0x3E62a9c3aF8b810dE79645C4579acC8f0d06a241",
    _scan: "https://explorer.emerald.oasis.dev/token/0x3E62a9c3aF8b810dE79645C4579acC8f0d06a241",
    symbol: "USDCpo",
    name: "USD Coin (PoS) (Wormhole from Polygon)",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/USDCpo_wh.png"
  },
  {
    chainId: 42262,
    address: "0xFffD69E757d8220CEA60dc80B9Fe1a30b58c94F3",
    _scan: "https://explorer.emerald.oasis.dev/token/0xFffD69E757d8220CEA60dc80B9Fe1a30b58c94F3",
    symbol: "USDTpo",
    name: "Tether USD (PoS) (Wormhole from Polygon)",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/USDTpo_wh.png"
  },
  {
    chainId: 42262,
    address: "0xd17dDAC91670274F7ba1590a06EcA0f2FD2b12bc",
    _scan: "https://explorer.emerald.oasis.dev/token/0xd17dDAC91670274F7ba1590a06EcA0f2FD2b12bc",
    symbol: "SOL",
    name: "SOL (Wormhole)",
    decimals: 9,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/SOL_wh.png"
  },
  {
    chainId: 42262,
    address: "0x1d1149a53deB36F2836Ae7877c9176413aDfA4A8",
    _scan: "https://explorer.emerald.oasis.dev/token/0x1d1149a53deB36F2836Ae7877c9176413aDfA4A8",
    symbol: "USDCso",
    name: "USD Coin (Wormhole from Solana)",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/USDCso_wh.png"
  },
  {
    chainId: 42262,
    address: "0x24285C5232ce3858F00bacb950Cae1f59d1b2704",
    _scan: "https://explorer.emerald.oasis.dev/token/0x24285C5232ce3858F00bacb950Cae1f59d1b2704",
    symbol: "USDTso",
    name: "Tether USD (Wormhole from Solana)",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/USDTso_wh.png"
  },
  {
    chainId: 42262,
    address: "0xa1E73c01E0cF7930F5e91CB291031739FE5Ad6C2",
    _scan: "https://explorer.emerald.oasis.dev/token/0xa1E73c01E0cF7930F5e91CB291031739FE5Ad6C2",
    symbol: "UST",
    name: "UST (Wormhole)",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/UST_wh.png"
  },
  {
    chainId: 42262,
    address: "0x4F43717B20ae319Aa50BC5B2349B93af5f7Ac823",
    _scan: "https://explorer.emerald.oasis.dev/token/0x4F43717B20ae319Aa50BC5B2349B93af5f7Ac823",
    symbol: "LUNA",
    name: "LUNA (Wormhole)",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/LUNA_wh.png"
  },
  {
    chainId: 42262,
    symbol: "ceUSDT",
    address: "0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E",
    _scan: "https://explorer.emerald.oasis.dev/token/0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E",
    name: "Tether USD (Celer)",
    decimals: 6,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
  },
  {
    chainId: 42262,
    symbol: "ceUSDC",
    address: "0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c",
    _scan: "https://explorer.emerald.oasis.dev/token/0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c",
    name: "USD Coin (Celer)",
    decimals: 6,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png"
  },
  {
    chainId: 42262,
    symbol: "ceETH",
    address: "0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98",
    _scan: "https://explorer.emerald.oasis.dev/token/0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98",
    name: "Wrapped Ether (Celer)",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
  },
  {
    chainId: 42262,
    symbol: "ceDAI",
    address: "0x5a4Ba16C2AeB295822A95280A7c7149E87769E6A",
    _scan: "https://explorer.emerald.oasis.dev/token/0x5a4Ba16C2AeB295822A95280A7c7149E87769E6A",
    name: "Dai Stablecoin (Celer)",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/4943.png"
  },
  {
    chainId: 42262,
    symbol: "cbBNB",
    address: "0x3795C36e7D12A8c252A20C5a7B455f7c57b60283",
    _scan: "https://explorer.emerald.oasis.dev/token/0x3795C36e7D12A8c252A20C5a7B455f7c57b60283",
    name: "Binance Coin (Celer)",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"
  },
  {
    chainId: 42262,
    symbol: "caAVAX",
    address: "0x6De33698e9e9b787e09d3Bd7771ef63557E148bb",
    _scan: "https://explorer.emerald.oasis.dev/token/0x6De33698e9e9b787e09d3Bd7771ef63557E148bb",
    name: "Avalanche (Celer)",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png"
  },
  {
    chainId: 42262,
    symbol: "cfFTM",
    address: "0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52",
    _scan: "https://explorer.emerald.oasis.dev/token/0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52",
    name: "Fantom (Celer)",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3513.png"
  },
  {
    chainId: 42262,
    symbol: "CELR",
    address: "0xf6a939e773fa4A63fd53f86bbbB279CaAD955035",
    _scan: "https://explorer.emerald.oasis.dev/token/0xf6a939e773fa4A63fd53f86bbbB279CaAD955035",
    name: "Celer Network",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3814.png"
  },
  {
    chainId: 42262,
    symbol: "ETH",
    address: "0xB44a9B6905aF7c801311e8F4E76932ee959c663C",
    _scan: "https://explorer.emerald.oasis.dev/token/0xB44a9B6905aF7c801311e8F4E76932ee959c663C",
    name: "Ethereum (Multichain)",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
  },
  {
    chainId: 42262,
    address: "0x80a16016cc4a2e6a2caca8a4a498b1699ff0f844",
    _scan: "https://explorer.emerald.oasis.dev/token/0x80a16016cc4a2e6a2caca8a4a498b1699ff0f844",
    symbol: "USDC",
    name: "USD Coin (Multichain)",
    decimals: 6,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png"
  },
  {
    chainId: 42262,
    symbol: "USDT",
    address: "0x6aB6d61428fde76768D7b45D8BFeec19c6eF91A8",
    _scan: "https://explorer.emerald.oasis.dev/token/0x6aB6d61428fde76768D7b45D8BFeec19c6eF91A8",
    name: "Tether USD (Multichain)",
    decimals: 6,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
  },
  {
    chainId: 42262,
    symbol: "BUSD",
    address: "0x639A647fbe20b6c8ac19E48E2de44ea792c62c5C",
    _scan: "https://explorer.emerald.oasis.dev/token/0x639A647fbe20b6c8ac19E48E2de44ea792c62c5C",
    name: "Binance-Peg BUSD Token (Multichain)",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/4687.png"
  },
  {
    chainId: 42262,
    symbol: "BNB",
    address: "0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d",
    _scan: "https://explorer.emerald.oasis.dev/token/0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d",
    name: "Binance (Multichain)",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"
  }
], Jp = [
  {
    chainId: 10,
    address: "0x61BAADcF22d2565B0F471b291C475db5555e0b76",
    _scan: "https://optimistic.etherscan.io/token/0x61BAADcF22d2565B0F471b291C475db5555e0b76",
    name: "Aelin Protocol",
    symbol: "AELIN",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/AELIN/logo.png"
  },
  {
    chainId: 10,
    address: "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000",
    _scan: "https://optimistic.etherscan.io/token/0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000",
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/ETH/logo.svg"
  },
  {
    chainId: 10,
    address: "0x395ae52bb17aef68c2888d941736a71dc6d4e125",
    _scan: "https://optimistic.etherscan.io/token/0x395ae52bb17aef68c2888d941736a71dc6d4e125",
    name: "PoolTogether",
    symbol: "POOL",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/POOL/logo.svg"
  },
  {
    chainId: 10,
    address: "0x374Ad0f47F4ca39c78E5Cc54f1C9e426FF8f231A",
    _scan: "https://optimistic.etherscan.io/token/0x374Ad0f47F4ca39c78E5Cc54f1C9e426FF8f231A",
    name: "Premia",
    symbol: "PREMIA",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/PREMIA/logo.svg"
  },
  {
    chainId: 10,
    address: "0xef6301da234fc7b0545c6e877d3359fe0b9e50a4",
    _scan: "https://optimistic.etherscan.io/token/0xef6301da234fc7b0545c6e877d3359fe0b9e50a4",
    name: "SUKU",
    symbol: "SUKU",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/SUKU/logo.png"
  },
  {
    chainId: 10,
    address: "0xd8f365c2c85648f9b89d9f1bf72c0ae4b1c36cfd",
    _scan: "https://optimistic.etherscan.io/token/0xd8f365c2c85648f9b89d9f1bf72c0ae4b1c36cfd",
    name: "TheDAO",
    symbol: "TheDAO",
    decimals: 16,
    logoURI: "https://ethereum-optimism.github.io/data/TheDAO/logo.svg"
  },
  {
    chainId: 10,
    address: "0xcB59a0A753fDB7491d5F3D794316F1adE197B21E",
    _scan: "https://optimistic.etherscan.io/token/0xcB59a0A753fDB7491d5F3D794316F1adE197B21E",
    name: "TrueUSD",
    symbol: "TUSD",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/TUSD/logo.png"
  },
  {
    chainId: 10,
    address: "0xD1917629B3E6A72E6772Aab5dBe58Eb7FA3C2F33",
    _scan: "https://optimistic.etherscan.io/token/0xD1917629B3E6A72E6772Aab5dBe58Eb7FA3C2F33",
    name: "0x Protocol Token",
    symbol: "ZRX",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/ZRX/logo.png"
  },
  {
    chainId: 10,
    address: "0x7113370218f31764C1B6353BDF6004d86fF6B9cc",
    _scan: "https://optimistic.etherscan.io/token/0x7113370218f31764C1B6353BDF6004d86fF6B9cc",
    name: "Decentralized USD",
    symbol: "USDD",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/USDD/logo.png"
  },
  {
    chainId: 10,
    address: "0x8700daec35af8ff88c16bdf0418774cb3d7599b4",
    _scan: "https://optimistic.etherscan.io/token/0x8700daec35af8ff88c16bdf0418774cb3d7599b4",
    name: "Synthetix",
    symbol: "SNX",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/SNX.svg"
  },
  {
    chainId: 10,
    address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
    _scan: "https://optimistic.etherscan.io/token/0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
    name: "Dai stable coin",
    symbol: "DAI",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/DAI/logo.svg"
  },
  {
    chainId: 10,
    address: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
    _scan: "https://optimistic.etherscan.io/token/0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
    name: "Tether USD",
    symbol: "USDT",
    decimals: 6,
    logoURI: "https://ethereum-optimism.github.io/data/USDT/logo.png"
  },
  {
    chainId: 10,
    address: "0x68f180fcCe6836688e9084f035309E29Bf0A2095",
    _scan: "https://optimistic.etherscan.io/token/0x68f180fcCe6836688e9084f035309E29Bf0A2095",
    name: "Wrapped Bitcoin",
    symbol: "WBTC",
    decimals: 8,
    logoURI: "https://ethereum-optimism.github.io/data/WBTC/logo.svg"
  },
  {
    chainId: 10,
    address: "0xe0BB0D3DE8c10976511e5030cA403dBf4c25165B",
    _scan: "https://optimistic.etherscan.io/token/0xe0BB0D3DE8c10976511e5030cA403dBf4c25165B",
    name: "0xBitcoin",
    symbol: "0xBTC",
    decimals: 8,
    logoURI: "https://ethereum-optimism.github.io/data/0xBTC/logo.png"
  },
  {
    chainId: 10,
    address: "0x350a791bfc2c21f9ed5d10980dad2e2638ffa7f6",
    _scan: "https://optimistic.etherscan.io/token/0x350a791bfc2c21f9ed5d10980dad2e2638ffa7f6",
    name: "Chainlink",
    symbol: "LINK",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/LINK/logo.png"
  },
  {
    chainId: 10,
    address: "0x65559aA14915a70190438eF90104769e5E890A00",
    _scan: "https://optimistic.etherscan.io/token/0x65559aA14915a70190438eF90104769e5E890A00",
    name: "Ethereum Name Service",
    symbol: "ENS",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/ENS/logo.png"
  },
  {
    chainId: 10,
    address: "0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9",
    _scan: "https://optimistic.etherscan.io/token/0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9",
    name: "Synthetix USD",
    symbol: "sUSD",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/sUSD/logo.svg"
  },
  {
    chainId: 10,
    address: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
    _scan: "https://optimistic.etherscan.io/token/0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    logoURI: "https://ethereum-optimism.github.io/data/USDC/logo.png"
  },
  {
    chainId: 10,
    address: "0xE405de8F52ba7559f9df3C368500B6E6ae6Cee49",
    _scan: "https://optimistic.etherscan.io/token/0xE405de8F52ba7559f9df3C368500B6E6ae6Cee49",
    name: "Synthetic Ether",
    symbol: "sETH",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/sETH/logo.svg"
  },
  {
    chainId: 10,
    address: "0x298B9B95708152ff6968aafd889c6586e9169f1D",
    _scan: "https://optimistic.etherscan.io/token/0x298B9B95708152ff6968aafd889c6586e9169f1D",
    name: "Synthetic Bitcoin",
    symbol: "sBTC",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/sBTC/logo.svg"
  },
  {
    chainId: 10,
    address: "0xc5Db22719A06418028A40A9B5E9A7c02959D0d08",
    _scan: "https://optimistic.etherscan.io/token/0xc5Db22719A06418028A40A9B5E9A7c02959D0d08",
    name: "Synthetic Chainlink",
    symbol: "sLINK",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/sLINK/logo.svg"
  },
  {
    chainId: 10,
    address: "0x6fd9d7ad17242c41f7131d257212c54a0e816691",
    _scan: "https://optimistic.etherscan.io/token/0x6fd9d7ad17242c41f7131d257212c54a0e816691",
    name: "Uniswap",
    symbol: "UNI",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/UNI/logo.png"
  },
  {
    chainId: 10,
    address: "0xc40f949f8a4e094d1b49a23ea9241d289b7b2819",
    _scan: "https://optimistic.etherscan.io/token/0xc40f949f8a4e094d1b49a23ea9241d289b7b2819",
    name: "LUSD Stablecoin",
    symbol: "LUSD",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/LUSD/logo.svg"
  },
  {
    chainId: 10,
    address: "0xb548f63d4405466b36c0c0ac3318a22fdcec711a",
    _scan: "https://optimistic.etherscan.io/token/0xb548f63d4405466b36c0c0ac3318a22fdcec711a",
    name: "Rari Governance Token",
    symbol: "RGT",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/RGT/logo.png"
  },
  {
    chainId: 10,
    address: "0x7FB688CCf682d58f86D7e38e03f9D22e7705448B",
    _scan: "https://optimistic.etherscan.io/token/0x7FB688CCf682d58f86D7e38e03f9D22e7705448B",
    name: "Rai Reflex Index",
    symbol: "RAI",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/RAI/logo.svg"
  },
  {
    chainId: 10,
    address: "0x9bcef72be871e61ed4fbbc7630889bee758eb81d",
    _scan: "https://optimistic.etherscan.io/token/0x9bcef72be871e61ed4fbbc7630889bee758eb81d",
    name: "Rocket Pool ETH",
    symbol: "rETH",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/rETH/logo.png"
  },
  {
    chainId: 10,
    address: "0x00F932F0FE257456b32dedA4758922E56A4F4b42",
    _scan: "https://optimistic.etherscan.io/token/0x00F932F0FE257456b32dedA4758922E56A4F4b42",
    name: "Paper",
    symbol: "PAPER",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/PAPER/logo.svg"
  },
  {
    chainId: 10,
    address: "0x7c6b91d9be155a6db01f749217d76ff02a7227f2",
    _scan: "https://optimistic.etherscan.io/token/0x7c6b91d9be155a6db01f749217d76ff02a7227f2",
    name: "Sarcophagus",
    symbol: "SARCO",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/SARCO/logo.png"
  },
  {
    chainId: 10,
    address: "0x5029C236320b8f15eF0a657054B84d90bfBEDED3",
    _scan: "https://optimistic.etherscan.io/token/0x5029C236320b8f15eF0a657054B84d90bfBEDED3",
    name: "BitANT",
    symbol: "BitANT",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/BitANT/logo.png"
  },
  {
    chainId: 10,
    address: "0xc98B98d17435AA00830c87eA02474C5007E1f272",
    _scan: "https://optimistic.etherscan.io/token/0xc98B98d17435AA00830c87eA02474C5007E1f272",
    name: "BitBTC",
    symbol: "BitBTC",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/BitBTC/logo.png"
  },
  {
    chainId: 10,
    address: "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
    _scan: "https://optimistic.etherscan.io/token/0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
    name: "Lyra",
    symbol: "LYRA",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/LYRA/logo.png"
  },
  {
    chainId: 10,
    address: "0xE7798f023fC62146e8Aa1b36Da45fb70855a77Ea",
    _scan: "https://optimistic.etherscan.io/token/0xE7798f023fC62146e8Aa1b36Da45fb70855a77Ea",
    name: "UMA Voting Token v1",
    symbol: "UMA",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/UMA/logo.png"
  },
  {
    chainId: 10,
    address: "0x9e1028F5F1D5eDE59748FFceE5532509976840E0",
    _scan: "https://optimistic.etherscan.io/token/0x9e1028F5F1D5eDE59748FFceE5532509976840E0",
    name: "Perpetual",
    symbol: "PERP",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/PERP/logo.png"
  },
  {
    chainId: 10,
    address: "0x9e5AAC1Ba1a2e6aEd6b32689DFcF62A509Ca96f3",
    _scan: "https://optimistic.etherscan.io/token/0x9e5AAC1Ba1a2e6aEd6b32689DFcF62A509Ca96f3",
    name: "dForce",
    symbol: "DF",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/DF/logo.svg"
  },
  {
    chainId: 10,
    address: "0xbfD291DA8A403DAAF7e5E9DC1ec0aCEaCd4848B9",
    _scan: "https://optimistic.etherscan.io/token/0xbfD291DA8A403DAAF7e5E9DC1ec0aCEaCd4848B9",
    name: "dForce USD",
    symbol: "USX",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/USX/logo.svg"
  },
  {
    chainId: 10,
    address: "0x3e7eF8f50246f725885102E8238CBba33F276747",
    _scan: "https://optimistic.etherscan.io/token/0x3e7eF8f50246f725885102E8238CBba33F276747",
    name: "BarnBridge Governance Token",
    symbol: "BOND",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/BOND/logo.svg"
  },
  {
    chainId: 10,
    address: "0x4200000000000000000000000000000000000006",
    _scan: "https://optimistic.etherscan.io/token/0x4200000000000000000000000000000000000006",
    name: "Wrapped Ether",
    symbol: "WETH",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/WETH/logo.png"
  },
  {
    chainId: 10,
    address: "0x7b0bcC23851bBF7601efC9E9FE532Bf5284F65d3",
    _scan: "https://optimistic.etherscan.io/token/0x7b0bcC23851bBF7601efC9E9FE532Bf5284F65d3",
    name: "Erica Social Token",
    symbol: "EST",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/EST/logo.png"
  },
  {
    chainId: 10,
    address: "0x1da650c3b2daa8aa9ff6f661d4156ce24d08a062",
    _scan: "https://optimistic.etherscan.io/token/0x1da650c3b2daa8aa9ff6f661d4156ce24d08a062",
    name: "Dentacoin",
    symbol: "DCN",
    decimals: 0,
    logoURI: "https://ethereum-optimism.github.io/data/DCN/logo.svg"
  },
  {
    chainId: 10,
    address: "0xf98dcd95217e15e05d8638da4c91125e59590b07",
    _scan: "https://optimistic.etherscan.io/token/0xf98dcd95217e15e05d8638da4c91125e59590b07",
    name: "Kromatika",
    symbol: "KROM",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/KROM/logo.png"
  },
  {
    chainId: 10,
    address: "0xAF9fE3B5cCDAe78188B1F8b9a49Da7ae9510F151",
    _scan: "https://optimistic.etherscan.io/token/0xAF9fE3B5cCDAe78188B1F8b9a49Da7ae9510F151",
    name: "dHEDGE DAO Token",
    symbol: "DHT",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/DHT/logo.svg"
  },
  {
    chainId: 10,
    address: "0xab7badef82e9fe11f6f33f87bc9bc2aa27f2fcb5",
    _scan: "https://optimistic.etherscan.io/token/0xab7badef82e9fe11f6f33f87bc9bc2aa27f2fcb5",
    name: "Maker",
    symbol: "MKR",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/MKR.svg"
  },
  {
    chainId: 10,
    address: "0x3bB4445D30AC020a84c1b5A8A2C6248ebC9779D0",
    _scan: "https://optimistic.etherscan.io/token/0x3bB4445D30AC020a84c1b5A8A2C6248ebC9779D0",
    name: "Theranos Coin",
    symbol: "LIZ",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/LIZ/logo.png"
  },
  {
    chainId: 10,
    address: "0x3390108E913824B8eaD638444cc52B9aBdF63798",
    _scan: "https://optimistic.etherscan.io/token/0x3390108E913824B8eaD638444cc52B9aBdF63798",
    name: "Mask Network",
    symbol: "MASK",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/MASK/logo.svg"
  },
  {
    chainId: 10,
    address: "0x0994206dfe8de6ec6920ff4d779b0d950605fb53",
    _scan: "https://optimistic.etherscan.io/token/0x0994206dfe8de6ec6920ff4d779b0d950605fb53",
    name: "Curve DAO Token",
    symbol: "CRV",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/CRV/logo.png"
  },
  {
    chainId: 10,
    address: "0xcfD1D50ce23C46D3Cf6407487B2F8934e96DC8f9",
    _scan: "https://optimistic.etherscan.io/token/0xcfD1D50ce23C46D3Cf6407487B2F8934e96DC8f9",
    name: "SPANK",
    symbol: "SPANK",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/SPANK/logo.png"
  },
  {
    chainId: 10,
    address: "0xFEaA9194F9F8c1B65429E31341a103071464907E",
    _scan: "https://optimistic.etherscan.io/token/0xFEaA9194F9F8c1B65429E31341a103071464907E",
    name: "LoopringCoin V2",
    symbol: "LRC",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/LRC/logo.png"
  },
  {
    chainId: 10,
    address: "0x217D47011b23BB961eB6D93cA9945B7501a5BB11",
    _scan: "https://optimistic.etherscan.io/token/0x217D47011b23BB961eB6D93cA9945B7501a5BB11",
    name: "Optimistic Thales Token",
    symbol: "THALES",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/THALES/logo.png"
  },
  {
    chainId: 10,
    address: "0xBA28feb4b6A6b81e3F26F08b83a19E715C4294fd",
    _scan: "https://optimistic.etherscan.io/token/0xBA28feb4b6A6b81e3F26F08b83a19E715C4294fd",
    name: "UST (Wormhole)",
    symbol: "UST",
    decimals: 6,
    logoURI: "https://ethereum-optimism.github.io/data/UST/logo.png"
  },
  {
    chainId: 10,
    address: "0xE4F27b04cC7729901876B44f4EAA5102EC150265",
    _scan: "https://optimistic.etherscan.io/token/0xE4F27b04cC7729901876B44f4EAA5102EC150265",
    name: "CryptoFranc",
    symbol: "XCHF",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/XCHF/logo.png"
  },
  {
    chainId: 10,
    address: "0x76FB31fb4af56892A25e32cFC43De717950c9278",
    _scan: "https://optimistic.etherscan.io/token/0x76FB31fb4af56892A25e32cFC43De717950c9278",
    name: "Aave Token",
    symbol: "AAVE",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/AAVE/logo.svg"
  },
  {
    chainId: 10,
    address: "0x81ab7e0d570b01411fcc4afd3d50ec8c241cb74b",
    _scan: "https://optimistic.etherscan.io/token/0x81ab7e0d570b01411fcc4afd3d50ec8c241cb74b",
    name: "Equalizer",
    symbol: "EQZ",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/EQZ/logo.png"
  },
  {
    chainId: 10,
    address: "0x117cFd9060525452db4A34d51c0b3b7599087f05",
    _scan: "https://optimistic.etherscan.io/token/0x117cFd9060525452db4A34d51c0b3b7599087f05",
    name: "Geyser",
    symbol: "GYSR",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/GYSR/logo.png"
  },
  {
    chainId: 10,
    address: "0xFE8B128bA8C78aabC59d4c64cEE7fF28e9379921",
    _scan: "https://optimistic.etherscan.io/token/0xFE8B128bA8C78aabC59d4c64cEE7fF28e9379921",
    name: "Balancer",
    symbol: "BAL",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/BAL/logo.png"
  },
  {
    chainId: 10,
    address: "0x1eba7a6a72c894026cd654ac5cdcf83a46445b08",
    _scan: "https://optimistic.etherscan.io/token/0x1eba7a6a72c894026cd654ac5cdcf83a46445b08",
    name: "Gitcoin",
    symbol: "GTC",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/GTC/logo.svg"
  },
  {
    chainId: 10,
    address: "0x4200000000000000000000000000000000000042",
    _scan: "https://optimistic.etherscan.io/token/0x4200000000000000000000000000000000000042",
    name: "Optimism",
    symbol: "OP",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/OP/logo.png"
  },
  {
    chainId: 10,
    address: "0x8aE125E8653821E851F12A49F7765db9a9ce7384",
    _scan: "https://optimistic.etherscan.io/token/0x8aE125E8653821E851F12A49F7765db9a9ce7384",
    name: "Dola USD Stablecoin",
    symbol: "DOLA",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/DOLA/logo.png"
  },
  {
    chainId: 10,
    address: "0x3c8B650257cFb5f272f799F5e2b4e65093a11a05",
    _scan: "https://optimistic.etherscan.io/token/0x3c8B650257cFb5f272f799F5e2b4e65093a11a05",
    name: "Velodrome",
    symbol: "VELO",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/VELO.svg"
  },
  {
    chainId: 10,
    address: "0xdFA46478F9e5EA86d57387849598dbFB2e964b02",
    _scan: "https://optimistic.etherscan.io/token/0xdFA46478F9e5EA86d57387849598dbFB2e964b02",
    decimals: 18,
    name: "MAI",
    symbol: "MAI",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/MAI.svg"
  },
  {
    chainId: 10,
    address: "0x2E3D870790dC77A83DD1d18184Acc7439A53f475",
    _scan: "https://optimistic.etherscan.io/token/0x2E3D870790dC77A83DD1d18184Acc7439A53f475",
    decimals: 18,
    name: "Frax",
    symbol: "FRAX",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/FRAX.svg"
  },
  {
    chainId: 10,
    address: "0xC22885e06cd8507c5c74a948C59af853AEd1Ea5C",
    _scan: "https://optimistic.etherscan.io/token/0xC22885e06cd8507c5c74a948C59af853AEd1Ea5C",
    decimals: 18,
    name: "Decentralized USD",
    symbol: "USDD",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/USDD.svg"
  },
  {
    chainId: 10,
    address: "0x67CCEA5bb16181E7b4109c9c2143c24a1c2205Be",
    _scan: "https://optimistic.etherscan.io/token/0x67CCEA5bb16181E7b4109c9c2143c24a1c2205Be",
    decimals: 18,
    name: "Frax Share",
    symbol: "FXS",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/FXS.svg"
  },
  {
    chainId: 10,
    address: "0xEe9801669C6138E84bD50dEB500827b776777d28",
    _scan: "https://optimistic.etherscan.io/token/0xEe9801669C6138E84bD50dEB500827b776777d28",
    decimals: 18,
    name: "O3 Swap Token",
    symbol: "O3",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/O3.png"
  },
  {
    chainId: 10,
    address: "0xb12c13e66AdE1F72f71834f2FC5082Db8C091358",
    _scan: "https://optimistic.etherscan.io/token/0xb12c13e66AdE1F72f71834f2FC5082Db8C091358",
    decimals: 18,
    name: "ROOBEE",
    symbol: "ROOBEE",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/ROOBEE.png"
  }
], Zp = [
  {
    chainId: 324,
    address: "0x42c1c56be243c250ab24d2ecdcc77f9ccaa59601",
    symbol: "PERP",
    name: "Perpetual",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/499378cf-23de-4820-b245-6e1a03bb6c99.png",
    isWhitelisted: !0,
    isStable: !1,
    domainSeparator: "0x81cbc2898010be52cf7de53dda5fa8f15543fa0eaa9e93132fad87635bc4240d"
  },
  {
    chainId: 324,
    address: "0xd0ea21ba66b67be636de1ec4bd9696eb8c61e9aa",
    symbol: "OT",
    name: "Onchain Trade",
    decimals: 18,
    marketCap: 18572300,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/7b4f7e9f-8c50-49ec-bcdc-818a7a04f059.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 324,
    address: "0x493257fd37edb34451f62edf8d2a0c418852ba4c",
    symbol: "USDT",
    name: "Tether USD",
    decimals: 6,
    marketCap: 8509229,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/fc7ce9b5-505f-4f29-8883-e86510170110.png",
    isWhitelisted: !0,
    isStable: !0,
    domainSeparator: "0x830cbbcc61d018041f1c7a8c546f97040273927bb154e60e2e29a2335855c88f"
  },
  {
    chainId: 324,
    address: "0x2039bb4116b4efc145ec4f0e2ea75012d6c0f181",
    symbol: "cBUSD",
    name: "Celer Network BUSD",
    decimals: 18,
    marketCap: 41498438e-1,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/4cff4553-3d67-4ed2-b2b5-22395ccddc58.png",
    isWhitelisted: !0,
    isStable: !0
  },
  {
    chainId: 324,
    address: "0x28a487240e4d45cff4a2980d334cc933b7483842",
    symbol: "cMATIC",
    name: "Celer Network MATIC",
    decimals: 18,
    marketCap: 94423.61325783927,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/46319446-0b42-4a83-a3f8-a32bd1e71b14.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 324,
    address: "0xd599da85f8fc4877e61f547dfacffe1238a7149e",
    symbol: "Cheems",
    name: "Cheems Token",
    decimals: 18,
    marketCap: 4205158886248695e-9,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/b047ce83-e47b-4008-af2d-3e39a4c8ff5a.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 324,
    address: "0x47260090ce5e83454d5f05a0abbb2c953835f777",
    symbol: "SPACE",
    name: "SPACE",
    decimals: 18,
    marketCap: 1411707218944e-6,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/e862d3a4-c23d-44ba-895f-00d112649ff1.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 324,
    address: "0x503234f203fc7eb888eec8513210612a43cf6115",
    symbol: "LUSD",
    name: "LUSD Stablecoin",
    decimals: 18,
    marketCap: 1.1744690840702192e6,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/0590b6f0-ea78-4d6c-97be-2c60bbe8723d.png",
    isWhitelisted: !0,
    isStable: !1,
    domainSeparator: "0x05b1a995acbd0855b351774294476a86a40dca4c0afb4af29404840d9d76f546"
  },
  {
    chainId: 324,
    address: "0xbbeb516fb02a01611cbbe0453fe3c580d7281011",
    symbol: "WBTC",
    name: "Wrapped BTC",
    decimals: 8,
    marketCap: 2964628941842585e-9,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/60ab839d-2e84-4a96-8fa6-3fad3f0e19ca.png",
    isWhitelisted: !0,
    isStable: !1,
    domainSeparator: "0x51b2483b94e2de6038509671367d5cbcf361a43e060bdd4e6e4c16c3cefd8a56"
  },
  {
    chainId: 324,
    address: "0xbe9f8c0d6f0fd7e46cdacca340747ea2f247991d",
    symbol: "IBEX",
    name: "Impermax",
    decimals: 18,
    marketCap: 108434.943831644,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/2f498c90-2362-4d41-ba7e-c4ea94be69ee.png",
    isWhitelisted: !0,
    isStable: !1,
    domainSeparator: "0xec02d80e980bdfe27587b993222c98fc030d9e17d7307ca163441a14a9f61df8"
  },
  {
    chainId: 324,
    address: "0xbbd1ba24d589c319c86519646817f2f153c9b716",
    symbol: "DVF",
    name: "DeversiFi Token",
    decimals: 18,
    marketCap: 364295.45885600493,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/4eb3ff0e-b6f1-43b8-aab3-aea9573cc936.png",
    isWhitelisted: !0,
    isStable: !1,
    domainSeparator: "0xeb2350171a78711269039b50311d08ba2eb2f9eaa1c5fe70750d6b81d7cfa654"
  },
  {
    chainId: 324,
    address: "0x7400793aad94c8ca801aa036357d10f5fd0ce08f",
    symbol: "cBNB",
    name: "Celer Network BNB",
    decimals: 18,
    marketCap: 42908.931409284945,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/ea1e6c58-948c-4925-a71f-4f11047236a5.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 324,
    address: "0x5aea5775959fbc2557cc8789bc1bf90a239d9a91",
    symbol: "WETH",
    name: "Wrapped Ether",
    decimals: 18,
    marketCap: 336873556608e-4,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/16b24a3e-dbd3-45cf-9ff4-d0c7c4f4fa21.png",
    isWhitelisted: !0,
    isStable: !1,
    domainSeparator: "0xa8f5be359d5418a641b1f93d80f0193fcb169b66be484b4500d0be81dcffe636"
  },
  {
    chainId: 324,
    address: "0x6a5279e99ca7786fb13f827fc1fb4f61684933d6",
    symbol: "cAVAX",
    name: "Celer Network AVAX",
    decimals: 18,
    marketCap: 81723.14146514701,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/ef6b1750-55f5-4d6d-9b0b-99be85f72833.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 324,
    address: "0x3355df6d4c9c3035724fd0e3914de96a5a83aaf4",
    symbol: "USDC",
    name: "USD Coin",
    decimals: 6,
    marketCap: 12748117867579e-5,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/67c97b93-3dde-4fe2-a5ed-17eb169d4eb9.png",
    isWhitelisted: !0,
    isStable: !0,
    domainSeparator: "0xebeac0e130ad64ced1e6145e3c5218c9d9831fc603230994f7d8f5f9e8605e97"
  },
  {
    chainId: 324,
    address: "0x7bcd44c0b91be28827426f607424e1a8a02d4e69",
    symbol: "anyETH",
    name: "Multichain ETH",
    decimals: 18,
    marketCap: 18181.29649529304,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/8a859fdd-a6a4-43d6-a47c-7f9d86f1202f.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 324,
    address: "0xfc7e56298657b002b3e656400e746b7212912757",
    symbol: "zkUSD",
    name: "zkUSD Dollar",
    decimals: 6,
    marketCap: 2.6435699127841783e6,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/665e69e3-03bf-468c-8969-be664503d4d3.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 324,
    address: "0xc2b13bb90e33f1e191b8aa8f44ce11534d5698e3",
    symbol: "COMBO",
    name: "Furucombo",
    decimals: 18,
    marketCap: 2036.5403544653616,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/e9ed8197-943a-4fd4-b16f-e07637e76573.webp",
    isWhitelisted: !0,
    isStable: !1,
    domainSeparator: "0x058f13819e1410e3777159ed31094c4778496680f911cff5c343f3cc633b3831"
  },
  {
    chainId: 324,
    address: "0x8e86e46278518efc1c5ced245cba2c7e3ef11557",
    symbol: "USD+",
    name: "USD+",
    decimals: 6,
    marketCap: 686803.0158171001,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/dffb121f-5f4a-408a-a694-859f5730dd37.png",
    isWhitelisted: !0,
    isStable: !0
  },
  {
    chainId: 324,
    address: "0x0e97c7a0f8b2c9885c8ac9fc6136e829cbc21d42",
    symbol: "MUTE",
    name: "Mute.io",
    decimals: 18,
    marketCap: 5334053761972001e-9,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/9b6357d5-3235-4e80-a686-048b7778ebc0.png",
    isWhitelisted: !0,
    isStable: !1,
    domainSeparator: "0x691b85dbd87a6a44499a02fc5a9d5c992b482a84345fb75d70f5e32bb842470b"
  },
  {
    chainId: 324,
    address: "0x85d84c774cf8e9ff85342684b0e795df72a24908",
    symbol: "VC",
    name: "Velocore",
    decimals: 18,
    marketCap: 2.0765816038870001e6,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/66a39c5e-7894-4300-81d1-d24e7d50de03.svg",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 324,
    address: "0xd63ef5e9c628c8a0e8984cdfb7444aee44b09044",
    symbol: "GOVI",
    name: "GOVI",
    decimals: 18,
    marketCap: 553080.3652648781,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/a92c9002-6b77-48aa-a22e-cde99532da11.webp",
    isWhitelisted: !0,
    isStable: !1,
    domainSeparator: "0x150d2c436b3859701a5685235d1cbff9d1ff4456d306abdab0b9747ffcadf945"
  },
  {
    chainId: 324,
    address: "0x32fd44bb869620c0ef993754c8a00be67c464806",
    symbol: "rETH",
    name: "Rocket Pool ETH",
    decimals: 18,
    marketCap: 653933.9128312399,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/199a1b98-39c1-4fb3-8347-72c716d8df9e.png",
    isWhitelisted: !0,
    isStable: !1,
    domainSeparator: "0x0691012c48834d1f564244c86bdf5e23add1847af0f17e8bad8640b008ad44a2"
  },
  {
    chainId: 324,
    address: "0x43cd37cc4b9ec54833c8ac362dd55e58bfd62b86",
    symbol: "crvUSD",
    name: "Curve USD Stablecoin",
    decimals: 18,
    marketCap: 15400.423188063583,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/ed42c844-6129-4bef-a765-ed2e96d08c7a.png",
    isWhitelisted: !0,
    isStable: !1,
    domainSeparator: "0xac3674592fa0e2f1235f8eaf996fda4d717abf103c6c073ef08d9a28baaea16f"
  },
  {
    chainId: 324,
    address: "0xcab3f741fa54e79e34753b95717b23018332b8ac",
    symbol: "TES",
    name: "Tiny Era Shard Token",
    decimals: 18,
    marketCap: 91737800,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/02218675-10ee-473e-84d5-315c645f1c20.png",
    isWhitelisted: !0,
    isStable: !1
  }
], Qp = [
  {
    chainId: 1101,
    address: "0xb23c20efce6e24acca0cef9b7b7aa196b84ec942",
    symbol: "rETH",
    name: "Rocket Pool ETH",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/98ac93d4-1b0e-44a9-977e-2dcb9aa78212.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 1101,
    address: "0x1e4a5963abfd975d8c9021ce480b42188849d41d",
    symbol: "USDT",
    name: "Tether USD",
    decimals: 6,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/428c44cb-9078-4820-b864-faf20a62c56e.png",
    isWhitelisted: !0,
    isStable: !0
  },
  {
    chainId: 1101,
    address: "0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035",
    symbol: "USDC",
    name: "USD Coin",
    decimals: 6,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/b36e57ad-e80b-4ca9-8bf9-4719c6903d7d.png",
    isWhitelisted: !0,
    isStable: !0
  },
  {
    chainId: 1101,
    address: "0xff8544fed5379d9ffa8d47a74ce6b91e632ac44d",
    symbol: "FRAX",
    name: "Frax",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/1d37c3e5-22f8-421b-b0b0-6f2be8c0427d.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 1101,
    address: "0x83b874c1e09d316059d929da402dcb1a98e92082",
    symbol: "stMATIC",
    name: "Staked MATIC",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/583e3838-b198-4e94-8515-9d3a8302ad48.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 1101,
    address: "0xc5015b9d9161dca7e18e32f6f25c4ad850731fd4",
    symbol: "DAI",
    name: "Dai Stablecoin",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/3005a16a-4666-45ec-bd26-7cfae555e587.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 1101,
    address: "0xea034fb02eb1808c2cc3adbc15f447b93cbe08e1",
    symbol: "WBTC",
    name: "Wrapped BTC",
    decimals: 8,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/00264d44-415a-4227-b6e1-ae273e9691bb.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 1101,
    address: "0xf329bc8e21da7f278ce806e04c2266974edb1386",
    symbol: "KOKOS",
    name: "Kokonut Swap Token",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/2f4a09d6-3aeb-4881-9653-a59c8b6dd6bf.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 1101,
    address: "0x696c0ba235444607a1c4b93e6b34ba14928c1b60",
    symbol: "DOV",
    name: "DoveSwap",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/57b66d15-fe07-4622-bd5b-936ace8fbe61.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 1101,
    address: "0x3d5320821bfca19fb0b5428f2c79d63bd5246f89",
    symbol: "CRV",
    name: "Curve DAO Token",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/5fc225a6-bfda-403f-a401-2e53fd481ed7.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 1101,
    address: "0x120ef59b80774f02211563834d8e3b72cb1649d6",
    symbol: "BAL",
    name: "Balancer",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/f84d886f-f5d6-47b2-be70-7c004bf7d40f.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 1101,
    address: "0xcf7ecee185f19e2e970a301ee37f93536ed66179",
    symbol: "frxETH",
    name: "Frax Ether",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/eafa4af9-1f2a-4314-b475-6ddbd676e6b1.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 1101,
    address: "0x5d8cff95d7a57c0bf50b30b43c7cc0d52825d4a9",
    symbol: "wstETH",
    name: "Wrapped liquid staked Ether 2.0",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/8a389d44-fb08-4c50-9271-a5a6f8d2294c.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 1101,
    address: "0x0d1e753a25ebda689453309112904807625befbe",
    symbol: "Cake",
    name: "PancakeSwap Token",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/6ce32914-90a2-4941-bd0f-1e05e071c23b.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 1101,
    address: "0xa2036f0538221a77a3937f1379699f44945018d0",
    symbol: "MATIC",
    name: "Matic ",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/6e5645d9-4388-4916-b87d-8e5d3952df5f.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 1101,
    address: "0x68286607a1d43602d880d349187c3c48c0fd05e6",
    symbol: "QUICK",
    name: "QuickSwap",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/29cf1faf-a0b2-4d80-999d-c8eb00d1a7c1.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 1101,
    address: "0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9",
    symbol: "WETH",
    name: "Wrapped Ether",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/562e7395-32fc-48c6-84b0-3c0d616245e1.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 1101,
    address: "0x6a80a465409ce8d36c513129c0feea61bed579ba",
    symbol: "KNC",
    name: "Kyber Network Crystal v2",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/994c3e7e-e8ef-44f4-ac87-2c51caf4c8ca.png",
    isWhitelisted: !0,
    isStable: !1
  }
], e3 = [
  {
    chainId: 59144,
    address: "0x3b2f62d42db19b30588648bf1c184865d4c3b1d6",
    symbol: "KNC",
    name: "Kyber Network Crystal v2",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/85a7985a-5597-4146-a1cf-07b9866044d9.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 59144,
    address: "0x176211869ca2b568f2a7d4ee941e073a821ee1ff",
    symbol: "USDC",
    name: "USD Coin",
    decimals: 6,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/acf6daf5-5e4f-4b0d-8038-41ea99b4b593.png",
    isWhitelisted: !0,
    isStable: !0
  },
  {
    chainId: 59144,
    address: "0x3aab2285ddcddad8edf438c1bab47e1a9d05a9b4",
    symbol: "WBTC",
    name: "Wrapped BTC",
    decimals: 8,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/e82833f8-6b21-44f1-869b-e7c1a1af2f93.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 59144,
    address: "0xb448ec505c924944ca8b2c55ef05c299ee0781df",
    symbol: "axlKNC",
    name: "Axelar Wrapped KNC",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/62350353-4882-4887-90de-6b459fab5cf6.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 59144,
    address: "0x23ee2343b892b1bb63503a4fabc840e0e2c6810f",
    symbol: "AXL",
    name: "Axelar",
    decimals: 6,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/94da0e0e-0c6a-4b61-af40-dbb19d6674c4.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 59144,
    address: "0xf3b001d64c656e30a62fbaaca003b1336b4ce12a",
    symbol: "MAI",
    name: "Mai Stablecoin",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/33784adb-5f93-49ed-b834-768a73ec3d88.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 59144,
    address: "0x88dfaaabaf06f3a41d2606ea98bc8eda109abebb",
    symbol: "axlWMAI",
    name: "Axelar Wrapped WMAI",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/56b4ab0e-f561-416a-ac76-e29d91ce0ed1.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 59144,
    address: "0x7f5373ae26c3e8ffc4c77b7255df7ec1a9af52a6",
    symbol: "axlUSDT",
    name: "Axelar Wrapped USDT",
    decimals: 6,
    marketCap: 15824.774,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/a38192ff-8deb-4957-b407-da6ba650d756.png",
    isWhitelisted: !0,
    isStable: !1,
    domainSeparator: "0xc826431c46d9ffdf92967202b38c3b0a0b665169b64c4381d21f8e4de32f2c71"
  },
  {
    chainId: 59144,
    address: "0x4af15ec2a0bd43db75dd04e62faa3b8ef36b00d5",
    symbol: "DAI",
    name: "Dai Stablecoin",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/be4ccf88-81ca-4c5d-a87c-ba722b19a17b.png",
    isWhitelisted: !0,
    isStable: !0
  },
  {
    chainId: 59144,
    address: "0xa219439258ca9da29e9cc4ce5596924745e12b93",
    symbol: "USDT",
    name: "Tether USD",
    decimals: 6,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/c18aaad3-016f-49e1-aff5-93968e4c001d.png",
    isWhitelisted: !0,
    isStable: !0
  },
  {
    chainId: 59144,
    address: "0xeb466342c4d449bc9f53a865d5cb90586f405215",
    symbol: "axlUSDC",
    name: "Axelar Wrapped USDC",
    decimals: 6,
    marketCap: 125189.84477999998,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/490c5441-6af5-4951-a1db-54d39d4ff01f.png",
    isWhitelisted: !0,
    isStable: !0,
    domainSeparator: "0x2cf46165b05bdd11ae7e0e842c4ce0d6db93ea5c0eb93a1fdfb831a370681a0b"
  },
  {
    chainId: 59144,
    address: "0x0e5f2ee8c29e7ebc14e45da7ff90566d8c407db7",
    symbol: "HAPI",
    name: "HAPI",
    decimals: 18,
    marketCap: 20690.82009977257,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/2a5ae219-3a0f-4be6-951d-2d7b3043c2b4.png",
    isWhitelisted: !0,
    isStable: !1,
    domainSeparator: "0x5c3b327e5be62247ba0c64a29458a7e438804f01f6c70ab444d1652b485eb7cd"
  },
  {
    chainId: 59144,
    address: "0xf5c6825015280cdfd0b56903f9f8b5a2233476f5",
    symbol: "BNB",
    name: "Binance Coin",
    decimals: 18,
    marketCap: 157869.04636699997,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/723ef9bc-107b-4755-b7c2-87c0fa0b2b24.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 59144,
    address: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f",
    symbol: "WETH",
    name: "Wrapped Ether",
    decimals: 18,
    marketCap: 3053320811552e-6,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/e7f03c04-eeea-443e-a4d8-c7855db5277d.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 59144,
    address: "0x66627f389ae46d881773b7131139b2411980e09e",
    symbol: "deUSDC",
    name: "DeBridge USD Coin",
    decimals: 6,
    marketCap: 53255.85113925467,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/44d6b1c5-c974-4476-8b0e-fbfde81c2a00.png",
    isWhitelisted: !0,
    isStable: !0,
    domainSeparator: "0x760bc757995bbaaa3abc07b104947e47a78c617803d8c4b49a04cabb2e84ad2a"
  },
  {
    chainId: 59144,
    address: "0x7d43aabc515c356145049227cee54b608342c0ad",
    symbol: "BUSD",
    name: "Binance USD",
    decimals: 18,
    marketCap: 2.2381548631100003e6,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/3597fcd8-a26a-4813-99e5-7ea1b6d685fe.png",
    isWhitelisted: !0,
    isStable: !0
  },
  {
    chainId: 59144,
    address: "0x265b25e22bcd7f10a5bd6e6410f10537cc7567e8",
    symbol: "MATIC",
    name: "Matic Token",
    decimals: 18,
    marketCap: 193295.4884923,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/4a116471-cc31-4764-97f7-cdd957da4b9f.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 59144,
    address: "0x5471ea8f739dd37e9b81be9c5c77754d8aa953e4",
    symbol: "AVAX",
    name: "Avalanche",
    decimals: 18,
    marketCap: 64390.449010000004,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/52459c77-6a4c-4655-9c9f-aafa3a48b9f1.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 59144,
    address: "0x6c6470898882b65e0275723d883a0d877aade43f",
    symbol: "deUSDT",
    name: "DeBridge Tether USD",
    decimals: 6,
    marketCap: 17536.347239503928,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/c22978cd-6d27-4440-bd53-883ab50c31c3.png",
    isWhitelisted: !0,
    isStable: !0,
    domainSeparator: "0x152f6e976e71fc881e3ae0630a312012aa17885edabf01a5dd6b4fbcb1f38091"
  }
], t3 = [
  {
    chainId: 8453,
    address: "0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca",
    symbol: "USDbC",
    name: "USD Base Coin",
    decimals: 6,
    marketCap: 60331456,
    logoURI: "https://basescan.org/token/images/usdbc_ofc_32.png",
    isWhitelisted: !0,
    isStable: !0
  },
  {
    chainId: 8453,
    address: "0x4200000000000000000000000000000000000006",
    symbol: "WETH",
    name: "Wrapped Ether",
    decimals: 18,
    marketCap: 538134464483502e-7,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/2c73c292-344c-4daf-9a82-0e081b0f916b1692777707948.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 8453,
    address: "0x2ae3f1ec7f1f5012cfeab0185bfc7aa3cf0dec22",
    symbol: "cbETH",
    name: "Coinbase Wrapped Staked ETH",
    decimals: 18,
    marketCap: 1647133849490205e-8,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/55f87238-fa59-42b3-8d27-edc4159e53281693005558215.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 8453,
    address: "0x50c5725949a6f0c72e6c4a641f24049a917db0cb",
    symbol: "DAI",
    name: "Dai Stablecoin",
    decimals: 18,
    marketCap: 16061205,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/b1fbd5ca-2a9a-48cf-b35c-7d2069ce6fc31693005268649.png",
    isWhitelisted: !0,
    isStable: !0
  },
  {
    chainId: 8453,
    address: "0xeb466342c4d449bc9f53a865d5cb90586f405215",
    symbol: "axlUSDC",
    name: "Axelar Wrapped USDC",
    decimals: 6,
    marketCap: 78116695e-1,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/398ee553-1929-4e2d-b5e4-f5534bbd2ed71693005326820.png",
    isWhitelisted: !0,
    isStable: !1,
    domainSeparator: "0x0004c43ad6dfda1dbc91908af2e9fce1d16f5982a04b2068519c74ce6cfaeae2"
  },
  {
    chainId: 8453,
    address: "0x6c47669ce25f01e64cef604e43d8fa8c42938fb1",
    symbol: "SHIA",
    name: "SHIA",
    decimals: 18,
    marketCap: 6970207716171388e-9,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/c6573721-c364-4f91-9c5f-79b5ff5e792e1692800003476.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 8453,
    address: "0x1dd2d631c92b1acdfcdd51a0f7145a50130050c4",
    symbol: "ALB",
    name: "AlienBase Token",
    decimals: 18,
    marketCap: 1877087052392568e-9,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/8226867d-cb9b-4631-b96a-db26c39701de1693005396291.png",
    isWhitelisted: !0,
    isStable: !1,
    domainSeparator: "0x17308a01bfc3d0e2f1ea4af8811e9d8f65209c5f7b480a0a6f793b29bffd1ae1"
  },
  {
    chainId: 8453,
    address: "0x940181a94a35a4569e4529a3cdfb74e38fd98631",
    symbol: "AERO",
    name: "Aerodrome",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/fb512643-cd38-47e7-b1a4-3d9d0bc42e1b1693380383389.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 8453,
    address: "0x6653dd4b92a0e5bf8ae570a98906d9d6fd2eec09",
    symbol: "RCKT",
    name: "RocketSwap",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/ad6634e2-db69-4c0f-a40d-0f4b03a966c51693636017157.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 8453,
    address: "0xbd2dbb8ecea9743ca5b16423b4eaa26bdcfe5ed2",
    symbol: "SYNTH",
    name: "Synth Token",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/6d030d67-99f3-4960-8676-81ccb1fbeb9c1693636119373.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 8453,
    address: "0x27d2decb4bfc9c76f0309b8e88dec3a601fe25a8",
    symbol: "BALD",
    name: "Bald",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/bba83106-836c-4878-a85b-20a7e6b8fe2d1693635264537.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 8453,
    address: "0x78a087d713be963bf307b18f2ff8122ef9a63ae9",
    symbol: "BSWAP",
    name: "Baseswap Token",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/f8fccf89-0cf3-42df-996e-a3a2cd5f35ed1693634347023.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 8453,
    address: "0x9e1028f5f1d5ede59748ffcee5532509976840e0",
    symbol: "COMP",
    name: "Compound",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/83272afa-ee77-4975-a395-09dd3846ec721693636665263.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 8453,
    address: "0xb79dd08ea68a908a97220c76d19a6aa9cbde4376",
    symbol: "USD+",
    name: "USD+",
    decimals: 6,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/6159e1ea-4263-4b31-9f01-201fec295efb1693635728057.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 8453,
    address: "0x34ccb1fec9e6af1b3aa6ffd737392dfa2f29843a",
    symbol: "Fren Pet",
    name: "Fren Pet",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/922d1a89-5d0f-48f3-8a55-41ad080dc17e1693634737491.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 8453,
    address: "0xbf1aea8670d2528e08334083616dd9c5f3b087ae",
    symbol: "MAI",
    name: "Mai Stablecoin",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/4ac247da-c433-41ec-9a71-d0531562a50f1693722343904.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 8453,
    address: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
    symbol: "USDC",
    name: "USD Coin",
    decimals: 6,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/90bc5afa-3ea2-4cb3-8e76-9d4dff085b761693939652735.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 8453,
    address: "0x65a2508c429a6078a7bc2f7df81ab575bd9d9275",
    symbol: "DAI+",
    name: "DAI+",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/b25bcc5c-3efe-4e77-a09b-4249d44c22b21693985070822.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 8453,
    address: "0xde5ed76e7c05ec5e4572cfc88d1acea165109e44",
    symbol: "DEUS",
    name: "DEUS",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/d7a96415-ef02-400f-bfe4-68053c7af91f1693985235671.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 8453,
    address: "0x4621b7a9c75199271f773ebd9a499dbd165c3191",
    symbol: "DOLA",
    name: "Dola USD Stablecoin",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/32b8ea20-0803-48ac-aa9b-b391c281d2681693985276493.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 8453,
    address: "0xa334884bf6b0a066d553d19e507315e839409e62",
    symbol: "ERN",
    name: "Ethos Reserve Note",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/d4f6bdef-b616-4a28-9244-fbb29012e9131693985648123.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 8453,
    address: "0xc5102fe9359fd9a28f877a67e36b0f050d81a3cc",
    symbol: "HOP",
    name: "Hop",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/2c2dad40-c4e9-41b4-95de-c3f1e82e263e1693985693950.png",
    isWhitelisted: !0,
    isStable: !1
  }
];
var Rf = /* @__PURE__ */ ((t) => (t[t.UNDERLAYER = -1] = "UNDERLAYER", t[t.OVERLAY = 100] = "OVERLAY", t[t.DIALOG = 1e3] = "DIALOG", t[t.TOOLTIP = 2e3] = "TOOLTIP", t))(Rf || {});
const nt = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", Jr = (t) => ({
  name: "Ether",
  decimals: 18,
  symbol: "ETH",
  address: nt,
  chainId: t,
  logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
}), Es = {
  1: Jr(1),
  137: {
    name: "Matic",
    symbol: "MATIC",
    decimals: 18,
    address: nt,
    chainId: 137,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png"
  },
  56: {
    name: "BNB",
    symbol: "BNB",
    decimals: 18,
    address: nt,
    chainId: 56,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"
  },
  43114: {
    name: "AVAX",
    symbol: "AVAX",
    decimals: 18,
    address: nt,
    chainId: 43114,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png"
  },
  250: {
    name: "Fantom",
    symbol: "FTM",
    decimals: 18,
    address: nt,
    chainId: 250,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3513.png"
  },
  25: {
    name: "Cronos",
    symbol: "CRO",
    decimals: 18,
    address: nt,
    chainId: 25,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3635.png"
  },
  42161: Jr(42161),
  199: {
    name: "BTT",
    symbol: "BTT",
    decimals: 18,
    address: nt,
    chainId: 199,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/16086.png"
  },
  106: {
    name: "VLX",
    symbol: "VLX",
    decimals: 18,
    address: nt,
    chainId: 106,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/4747.png"
  },
  1313161554: Jr(1313161554),
  42262: {
    name: "ROSE",
    symbol: "ROSE",
    decimals: 18,
    address: nt,
    chainId: 42262,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/7653.png"
  },
  10: Jr(10),
  59144: Jr(59144),
  1101: Jr(1101),
  324: Jr(324),
  8453: Jr(8453)
}, gn = {
  1: {
    name: "Wrapped Ether",
    decimals: 18,
    symbol: "WETH",
    address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    chainId: 1,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
  },
  137: {
    name: "Wrapped Matic",
    decimals: 18,
    symbol: "WMATIC",
    address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
    chainId: 137,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png"
  },
  56: {
    name: "Wrapped BNB",
    decimals: 18,
    symbol: "WBNB",
    address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    chainId: 56,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"
  },
  43114: {
    name: "Wrapped AVAX",
    decimals: 18,
    symbol: "WAVAX",
    address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    chainId: 43114,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png"
  },
  250: {
    name: "Wrapped Fantom",
    decimals: 18,
    symbol: "WFTM",
    address: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
    chainId: 250,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3513.png"
  },
  25: {
    name: "Wrapped CRO",
    decimals: 18,
    symbol: "WCRO",
    address: "0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23",
    chainId: 25,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3635.png"
  },
  42161: {
    name: "Wrapped Ether",
    decimals: 18,
    symbol: "WETH",
    address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    chainId: 42161,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
  },
  199: {
    name: "Wrapped BitTorrent",
    decimals: 18,
    symbol: "WBTT",
    address: "0x8D193c6efa90BCFf940A98785d1Ce9D093d3DC8A",
    chainId: 199,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/16086.png"
  },
  106: {
    name: "Wrapped VLX",
    decimals: 18,
    symbol: "WVLX",
    address: "0xc579D1f3CF86749E05CD06f7ADe17856c2CE3126",
    chainId: 106,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/4747.png"
  },
  1313161554: {
    name: "Wrapped ETH",
    decimals: 18,
    symbol: "WETH",
    address: "0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB",
    chainId: 1313161554,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
  },
  42262: {
    name: "Wrapped ROSE",
    decimals: 18,
    symbol: "WROSE",
    address: "0x21C718C22D52d0F3a789b752D4c2fD5908a8A733",
    chainId: 42262,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/7653.png"
  },
  10: {
    name: "Wrapped Ether",
    decimals: 18,
    symbol: "WETH",
    address: "0x4200000000000000000000000000000000000006",
    chainId: 10,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
  },
  59144: {
    name: "Wrapped Ether",
    decimals: 18,
    symbol: "WETH",
    address: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    chainId: 59144,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
  },
  1101: {
    name: "Wrapped Ether",
    decimals: 18,
    symbol: "WETH",
    address: "0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9",
    chainId: 1101,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
  },
  324: {
    name: "Wrapped Ether",
    decimals: 18,
    symbol: "WETH",
    address: "0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91",
    chainId: 324,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
  },
  8453: {
    name: "Wrapped Ether",
    decimals: 18,
    symbol: "WETH",
    address: "0x4200000000000000000000000000000000000006",
    chainId: 8453,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
  }
}, r3 = {
  1: Wp,
  137: jp,
  56: Hp,
  43114: zp,
  250: $p,
  25: Vp,
  42161: Gp,
  199: Kp,
  106: qp,
  1313161554: Yp,
  42262: Xp,
  10: Jp,
  59144: e3,
  1101: Qp,
  324: Zp,
  8453: t3
}, n3 = {
  1: "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696",
  137: "0xed386Fe855C1EFf2f843B910923Dd8846E45C5A4",
  56: "0xed386Fe855C1EFf2f843B910923Dd8846E45C5A4",
  43114: "0xF2FD8219609E28C61A998cc534681f95D2740f61",
  250: "0x878dFE971d44e9122048308301F540910Bbd934c",
  25: "0x63Abb9973506189dC3741f61d25d4ed508151E6d",
  42161: "0x80C7DD17B01855a6D2347444a0FCC36136a314de",
  199: "0xBF69a56D35B8d6f5A8e0e96B245a72F735751e54",
  106: "0x1877Ec0770901cc6886FDA7E7525a78c2Ed4e975",
  1313161554: "0xBF69a56D35B8d6f5A8e0e96B245a72F735751e54",
  42262: "0xBF69a56D35B8d6f5A8e0e96B245a72F735751e54",
  10: "0xD9bfE9979e9CA4b2fe84bA5d4Cf963bBcB376974",
  59144: "0xcA11bde05977b3631167028862bE2a173976CA11",
  1101: "0xcA11bde05977b3631167028862bE2a173976CA11",
  324: "0xF9cda624FBC7e059355ce98a31693d299FACd963",
  8453: "0xcA11bde05977b3631167028862bE2a173976CA11"
}, Bi = {
  1: "ethereum",
  137: "polygon",
  56: "bsc",
  43114: "avalanche",
  250: "fantom",
  25: "cronos",
  42161: "arbitrum",
  199: "bttc",
  106: "velas",
  1313161554: "aurora",
  42262: "oasis",
  10: "optimism",
  59144: "linea",
  1101: "polygon-zkevm",
  324: "zksync",
  8453: "base"
}, Ta = {
  1: "https://etherscan.io",
  137: "https://polygonscan.com",
  56: "https://bscscan.com",
  43114: "https://snowtrace.io",
  250: "https://ftmscan.com",
  25: "https://cronoscan.com",
  42161: "https://arbiscan.io",
  199: "https://bttcscan.com",
  106: "https://evmexplorer.velas.com",
  1313161554: "https://aurorascan.dev",
  42262: "https://www.oasisscan.com",
  10: "https://optimistic.etherscan.io",
  59144: "https://lineascan.build",
  1101: "https://zkevm.polygonscan.com",
  324: "https://explorer.zksync.io",
  8453: "https://basescan.org"
}, Fi = Object.keys(Ta);
var cr = {};
const a3 = /* @__PURE__ */ ht(Dh), s3 = /* @__PURE__ */ ht(cu), o3 = /* @__PURE__ */ ht($u), i3 = /* @__PURE__ */ ht(Om), c3 = /* @__PURE__ */ ht(O1), d3 = /* @__PURE__ */ ht(Ih), f3 = /* @__PURE__ */ ht(Zm), l3 = /* @__PURE__ */ ht(lp), u3 = /* @__PURE__ */ ht(Q1), h3 = /* @__PURE__ */ ht(M1), Xc = /* @__PURE__ */ ht(Wm), m3 = /* @__PURE__ */ ht(Tp), p3 = /* @__PURE__ */ ht(rp), b3 = /* @__PURE__ */ ht(G1), g3 = /* @__PURE__ */ ht(tu), x3 = /* @__PURE__ */ ht(xm), Jc = /* @__PURE__ */ ht(ju), y3 = /* @__PURE__ */ ht(Sm), v3 = /* @__PURE__ */ ht(Np), A3 = /* @__PURE__ */ ht(gp), w3 = /* @__PURE__ */ ht(Ip);
(function(t) {
  var e = Kt && Kt.__createBinding || (Object.create ? function(q, oe, I, d) {
    d === void 0 && (d = I), Object.defineProperty(q, d, { enumerable: !0, get: function() {
      return oe[I];
    } });
  } : function(q, oe, I, d) {
    d === void 0 && (d = I), q[d] = oe[I];
  }), r = Kt && Kt.__setModuleDefault || (Object.create ? function(q, oe) {
    Object.defineProperty(q, "default", { enumerable: !0, value: oe });
  } : function(q, oe) {
    q.default = oe;
  }), n = Kt && Kt.__importStar || function(q) {
    if (q && q.__esModule)
      return q;
    var oe = {};
    if (q != null)
      for (var I in q)
        I !== "default" && Object.prototype.hasOwnProperty.call(q, I) && e(oe, q, I);
    return r(oe, q), oe;
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.formatBytes32String = t.Utf8ErrorFuncs = t.toUtf8String = t.toUtf8CodePoints = t.toUtf8Bytes = t._toEscapedUtf8String = t.nameprep = t.hexDataSlice = t.hexDataLength = t.hexZeroPad = t.hexValue = t.hexStripZeros = t.hexConcat = t.isHexString = t.hexlify = t.base64 = t.base58 = t.TransactionDescription = t.LogDescription = t.Interface = t.SigningKey = t.HDNode = t.defaultPath = t.isBytesLike = t.isBytes = t.zeroPad = t.stripZeros = t.concat = t.arrayify = t.shallowCopy = t.resolveProperties = t.getStatic = t.defineReadOnly = t.deepCopy = t.checkProperties = t.poll = t.fetchJson = t._fetchData = t.RLP = t.Logger = t.checkResultErrors = t.FormatTypes = t.ParamType = t.FunctionFragment = t.EventFragment = t.ErrorFragment = t.ConstructorFragment = t.Fragment = t.defaultAbiCoder = t.AbiCoder = void 0, t.Indexed = t.Utf8ErrorReason = t.UnicodeNormalizationForm = t.SupportedAlgorithm = t.mnemonicToSeed = t.isValidMnemonic = t.entropyToMnemonic = t.mnemonicToEntropy = t.getAccountPath = t.verifyTypedData = t.verifyMessage = t.recoverPublicKey = t.computePublicKey = t.recoverAddress = t.computeAddress = t.getJsonWalletAddress = t.TransactionTypes = t.serializeTransaction = t.parseTransaction = t.accessListify = t.joinSignature = t.splitSignature = t.soliditySha256 = t.solidityKeccak256 = t.solidityPack = t.shuffled = t.randomBytes = t.sha512 = t.sha256 = t.ripemd160 = t.keccak256 = t.computeHmac = t.commify = t.parseUnits = t.formatUnits = t.parseEther = t.formatEther = t.isAddress = t.getCreate2Address = t.getContractAddress = t.getIcapAddress = t.getAddress = t._TypedDataEncoder = t.id = t.isValidName = t.namehash = t.hashMessage = t.dnsEncode = t.parseBytes32String = void 0;
  var a = a3;
  Object.defineProperty(t, "AbiCoder", { enumerable: !0, get: function() {
    return a.AbiCoder;
  } }), Object.defineProperty(t, "checkResultErrors", { enumerable: !0, get: function() {
    return a.checkResultErrors;
  } }), Object.defineProperty(t, "ConstructorFragment", { enumerable: !0, get: function() {
    return a.ConstructorFragment;
  } }), Object.defineProperty(t, "defaultAbiCoder", { enumerable: !0, get: function() {
    return a.defaultAbiCoder;
  } }), Object.defineProperty(t, "ErrorFragment", { enumerable: !0, get: function() {
    return a.ErrorFragment;
  } }), Object.defineProperty(t, "EventFragment", { enumerable: !0, get: function() {
    return a.EventFragment;
  } }), Object.defineProperty(t, "FormatTypes", { enumerable: !0, get: function() {
    return a.FormatTypes;
  } }), Object.defineProperty(t, "Fragment", { enumerable: !0, get: function() {
    return a.Fragment;
  } }), Object.defineProperty(t, "FunctionFragment", { enumerable: !0, get: function() {
    return a.FunctionFragment;
  } }), Object.defineProperty(t, "Indexed", { enumerable: !0, get: function() {
    return a.Indexed;
  } }), Object.defineProperty(t, "Interface", { enumerable: !0, get: function() {
    return a.Interface;
  } }), Object.defineProperty(t, "LogDescription", { enumerable: !0, get: function() {
    return a.LogDescription;
  } }), Object.defineProperty(t, "ParamType", { enumerable: !0, get: function() {
    return a.ParamType;
  } }), Object.defineProperty(t, "TransactionDescription", { enumerable: !0, get: function() {
    return a.TransactionDescription;
  } });
  var s = s3;
  Object.defineProperty(t, "getAddress", { enumerable: !0, get: function() {
    return s.getAddress;
  } }), Object.defineProperty(t, "getCreate2Address", { enumerable: !0, get: function() {
    return s.getCreate2Address;
  } }), Object.defineProperty(t, "getContractAddress", { enumerable: !0, get: function() {
    return s.getContractAddress;
  } }), Object.defineProperty(t, "getIcapAddress", { enumerable: !0, get: function() {
    return s.getIcapAddress;
  } }), Object.defineProperty(t, "isAddress", { enumerable: !0, get: function() {
    return s.isAddress;
  } });
  var o = n(o3);
  t.base64 = o;
  var i = i3;
  Object.defineProperty(t, "base58", { enumerable: !0, get: function() {
    return i.Base58;
  } });
  var f = c3;
  Object.defineProperty(t, "arrayify", { enumerable: !0, get: function() {
    return f.arrayify;
  } }), Object.defineProperty(t, "concat", { enumerable: !0, get: function() {
    return f.concat;
  } }), Object.defineProperty(t, "hexConcat", { enumerable: !0, get: function() {
    return f.hexConcat;
  } }), Object.defineProperty(t, "hexDataSlice", { enumerable: !0, get: function() {
    return f.hexDataSlice;
  } }), Object.defineProperty(t, "hexDataLength", { enumerable: !0, get: function() {
    return f.hexDataLength;
  } }), Object.defineProperty(t, "hexlify", { enumerable: !0, get: function() {
    return f.hexlify;
  } }), Object.defineProperty(t, "hexStripZeros", { enumerable: !0, get: function() {
    return f.hexStripZeros;
  } }), Object.defineProperty(t, "hexValue", { enumerable: !0, get: function() {
    return f.hexValue;
  } }), Object.defineProperty(t, "hexZeroPad", { enumerable: !0, get: function() {
    return f.hexZeroPad;
  } }), Object.defineProperty(t, "isBytes", { enumerable: !0, get: function() {
    return f.isBytes;
  } }), Object.defineProperty(t, "isBytesLike", { enumerable: !0, get: function() {
    return f.isBytesLike;
  } }), Object.defineProperty(t, "isHexString", { enumerable: !0, get: function() {
    return f.isHexString;
  } }), Object.defineProperty(t, "joinSignature", { enumerable: !0, get: function() {
    return f.joinSignature;
  } }), Object.defineProperty(t, "zeroPad", { enumerable: !0, get: function() {
    return f.zeroPad;
  } }), Object.defineProperty(t, "splitSignature", { enumerable: !0, get: function() {
    return f.splitSignature;
  } }), Object.defineProperty(t, "stripZeros", { enumerable: !0, get: function() {
    return f.stripZeros;
  } });
  var u = d3;
  Object.defineProperty(t, "_TypedDataEncoder", { enumerable: !0, get: function() {
    return u._TypedDataEncoder;
  } }), Object.defineProperty(t, "dnsEncode", { enumerable: !0, get: function() {
    return u.dnsEncode;
  } }), Object.defineProperty(t, "hashMessage", { enumerable: !0, get: function() {
    return u.hashMessage;
  } }), Object.defineProperty(t, "id", { enumerable: !0, get: function() {
    return u.id;
  } }), Object.defineProperty(t, "isValidName", { enumerable: !0, get: function() {
    return u.isValidName;
  } }), Object.defineProperty(t, "namehash", { enumerable: !0, get: function() {
    return u.namehash;
  } });
  var h = f3;
  Object.defineProperty(t, "defaultPath", { enumerable: !0, get: function() {
    return h.defaultPath;
  } }), Object.defineProperty(t, "entropyToMnemonic", { enumerable: !0, get: function() {
    return h.entropyToMnemonic;
  } }), Object.defineProperty(t, "getAccountPath", { enumerable: !0, get: function() {
    return h.getAccountPath;
  } }), Object.defineProperty(t, "HDNode", { enumerable: !0, get: function() {
    return h.HDNode;
  } }), Object.defineProperty(t, "isValidMnemonic", { enumerable: !0, get: function() {
    return h.isValidMnemonic;
  } }), Object.defineProperty(t, "mnemonicToEntropy", { enumerable: !0, get: function() {
    return h.mnemonicToEntropy;
  } }), Object.defineProperty(t, "mnemonicToSeed", { enumerable: !0, get: function() {
    return h.mnemonicToSeed;
  } });
  var g = l3;
  Object.defineProperty(t, "getJsonWalletAddress", { enumerable: !0, get: function() {
    return g.getJsonWalletAddress;
  } });
  var C = u3;
  Object.defineProperty(t, "keccak256", { enumerable: !0, get: function() {
    return C.keccak256;
  } });
  var E = h3;
  Object.defineProperty(t, "Logger", { enumerable: !0, get: function() {
    return E.Logger;
  } });
  var S = Xc;
  Object.defineProperty(t, "computeHmac", { enumerable: !0, get: function() {
    return S.computeHmac;
  } }), Object.defineProperty(t, "ripemd160", { enumerable: !0, get: function() {
    return S.ripemd160;
  } }), Object.defineProperty(t, "sha256", { enumerable: !0, get: function() {
    return S.sha256;
  } }), Object.defineProperty(t, "sha512", { enumerable: !0, get: function() {
    return S.sha512;
  } });
  var D = m3;
  Object.defineProperty(t, "solidityKeccak256", { enumerable: !0, get: function() {
    return D.keccak256;
  } }), Object.defineProperty(t, "solidityPack", { enumerable: !0, get: function() {
    return D.pack;
  } }), Object.defineProperty(t, "soliditySha256", { enumerable: !0, get: function() {
    return D.sha256;
  } });
  var x = p3;
  Object.defineProperty(t, "randomBytes", { enumerable: !0, get: function() {
    return x.randomBytes;
  } }), Object.defineProperty(t, "shuffled", { enumerable: !0, get: function() {
    return x.shuffled;
  } });
  var F = b3;
  Object.defineProperty(t, "checkProperties", { enumerable: !0, get: function() {
    return F.checkProperties;
  } }), Object.defineProperty(t, "deepCopy", { enumerable: !0, get: function() {
    return F.deepCopy;
  } }), Object.defineProperty(t, "defineReadOnly", { enumerable: !0, get: function() {
    return F.defineReadOnly;
  } }), Object.defineProperty(t, "getStatic", { enumerable: !0, get: function() {
    return F.getStatic;
  } }), Object.defineProperty(t, "resolveProperties", { enumerable: !0, get: function() {
    return F.resolveProperties;
  } }), Object.defineProperty(t, "shallowCopy", { enumerable: !0, get: function() {
    return F.shallowCopy;
  } });
  var M = n(g3);
  t.RLP = M;
  var j = x3;
  Object.defineProperty(t, "computePublicKey", { enumerable: !0, get: function() {
    return j.computePublicKey;
  } }), Object.defineProperty(t, "recoverPublicKey", { enumerable: !0, get: function() {
    return j.recoverPublicKey;
  } }), Object.defineProperty(t, "SigningKey", { enumerable: !0, get: function() {
    return j.SigningKey;
  } });
  var U = Jc;
  Object.defineProperty(t, "formatBytes32String", { enumerable: !0, get: function() {
    return U.formatBytes32String;
  } }), Object.defineProperty(t, "nameprep", { enumerable: !0, get: function() {
    return U.nameprep;
  } }), Object.defineProperty(t, "parseBytes32String", { enumerable: !0, get: function() {
    return U.parseBytes32String;
  } }), Object.defineProperty(t, "_toEscapedUtf8String", { enumerable: !0, get: function() {
    return U._toEscapedUtf8String;
  } }), Object.defineProperty(t, "toUtf8Bytes", { enumerable: !0, get: function() {
    return U.toUtf8Bytes;
  } }), Object.defineProperty(t, "toUtf8CodePoints", { enumerable: !0, get: function() {
    return U.toUtf8CodePoints;
  } }), Object.defineProperty(t, "toUtf8String", { enumerable: !0, get: function() {
    return U.toUtf8String;
  } }), Object.defineProperty(t, "Utf8ErrorFuncs", { enumerable: !0, get: function() {
    return U.Utf8ErrorFuncs;
  } });
  var B = y3;
  Object.defineProperty(t, "accessListify", { enumerable: !0, get: function() {
    return B.accessListify;
  } }), Object.defineProperty(t, "computeAddress", { enumerable: !0, get: function() {
    return B.computeAddress;
  } }), Object.defineProperty(t, "parseTransaction", { enumerable: !0, get: function() {
    return B.parse;
  } }), Object.defineProperty(t, "recoverAddress", { enumerable: !0, get: function() {
    return B.recoverAddress;
  } }), Object.defineProperty(t, "serializeTransaction", { enumerable: !0, get: function() {
    return B.serialize;
  } }), Object.defineProperty(t, "TransactionTypes", { enumerable: !0, get: function() {
    return B.TransactionTypes;
  } });
  var W = v3;
  Object.defineProperty(t, "commify", { enumerable: !0, get: function() {
    return W.commify;
  } }), Object.defineProperty(t, "formatEther", { enumerable: !0, get: function() {
    return W.formatEther;
  } }), Object.defineProperty(t, "parseEther", { enumerable: !0, get: function() {
    return W.parseEther;
  } }), Object.defineProperty(t, "formatUnits", { enumerable: !0, get: function() {
    return W.formatUnits;
  } }), Object.defineProperty(t, "parseUnits", { enumerable: !0, get: function() {
    return W.parseUnits;
  } });
  var G = A3;
  Object.defineProperty(t, "verifyMessage", { enumerable: !0, get: function() {
    return G.verifyMessage;
  } }), Object.defineProperty(t, "verifyTypedData", { enumerable: !0, get: function() {
    return G.verifyTypedData;
  } });
  var K = w3;
  Object.defineProperty(t, "_fetchData", { enumerable: !0, get: function() {
    return K._fetchData;
  } }), Object.defineProperty(t, "fetchJson", { enumerable: !0, get: function() {
    return K.fetchJson;
  } }), Object.defineProperty(t, "poll", { enumerable: !0, get: function() {
    return K.poll;
  } });
  var te = Xc;
  Object.defineProperty(t, "SupportedAlgorithm", { enumerable: !0, get: function() {
    return te.SupportedAlgorithm;
  } });
  var se = Jc;
  Object.defineProperty(t, "UnicodeNormalizationForm", { enumerable: !0, get: function() {
    return se.UnicodeNormalizationForm;
  } }), Object.defineProperty(t, "Utf8ErrorReason", { enumerable: !0, get: function() {
    return se.Utf8ErrorReason;
  } });
})(cr);
const C3 = [
  {
    constant: !0,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: !1,
    inputs: [
      {
        name: "guy",
        type: "address"
      },
      {
        name: "wad",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: !0,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: !1,
    inputs: [
      {
        name: "src",
        type: "address"
      },
      {
        name: "dst",
        type: "address"
      },
      {
        name: "wad",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: !1,
    inputs: [
      {
        name: "wad",
        type: "uint256"
      }
    ],
    name: "withdraw",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: !0,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: !0,
    inputs: [
      {
        name: "",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: !0,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: !1,
    inputs: [
      {
        name: "dst",
        type: "address"
      },
      {
        name: "wad",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: !1,
    inputs: [],
    name: "deposit",
    outputs: [],
    payable: !0,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: !0,
    inputs: [
      {
        name: "",
        type: "address"
      },
      {
        name: "",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    payable: !0,
    stateMutability: "payable",
    type: "fallback"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        name: "src",
        type: "address"
      },
      {
        indexed: !0,
        name: "guy",
        type: "address"
      },
      {
        indexed: !1,
        name: "wad",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        name: "src",
        type: "address"
      },
      {
        indexed: !0,
        name: "dst",
        type: "address"
      },
      {
        indexed: !1,
        name: "wad",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        name: "dst",
        type: "address"
      },
      {
        indexed: !1,
        name: "wad",
        type: "uint256"
      }
    ],
    name: "Deposit",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        name: "src",
        type: "address"
      },
      {
        indexed: !1,
        name: "wad",
        type: "uint256"
      }
    ],
    name: "Withdrawal",
    type: "event"
  }
], _f = [
  {
    constant: !0,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: !1,
    inputs: [
      {
        name: "_spender",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: !0,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: !1,
    inputs: [
      {
        name: "_from",
        type: "address"
      },
      {
        name: "_to",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: !0,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: !0,
    inputs: [
      {
        name: "_owner",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "balance",
        type: "uint256"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: !0,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: !1,
    inputs: [
      {
        name: "_to",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: !0,
    inputs: [
      {
        name: "_owner",
        type: "address"
      },
      {
        name: "_spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    payable: !0,
    stateMutability: "payable",
    type: "fallback"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        name: "owner",
        type: "address"
      },
      {
        indexed: !0,
        name: "spender",
        type: "address"
      },
      {
        indexed: !1,
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        name: "from",
        type: "address"
      },
      {
        indexed: !0,
        name: "to",
        type: "address"
      },
      {
        indexed: !1,
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  }
], E3 = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall2.Call[]",
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "aggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256"
      },
      {
        internalType: "bytes[]",
        name: "returnData",
        type: "bytes[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall2.Call[]",
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "blockAndAggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256"
      },
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32"
      },
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool"
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall2.Result[]",
        name: "returnData",
        type: "tuple[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256"
      }
    ],
    name: "getBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getBlockNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCurrentBlockCoinbase",
    outputs: [
      {
        internalType: "address",
        name: "coinbase",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCurrentBlockDifficulty",
    outputs: [
      {
        internalType: "uint256",
        name: "difficulty",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCurrentBlockGasLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "gaslimit",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCurrentBlockTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "getEthBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getLastBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "requireSuccess",
        type: "bool"
      },
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall2.Call[]",
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "tryAggregate",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool"
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall2.Result[]",
        name: "returnData",
        type: "tuple[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "requireSuccess",
        type: "bool"
      },
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall2.Call[]",
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "tryBlockAndAggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256"
      },
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32"
      },
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool"
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall2.Result[]",
        name: "returnData",
        type: "tuple[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
], yo = new cr.Interface(_f);
function Ri(t) {
  try {
    return cr.getAddress(t);
  } catch {
    return !1;
  }
}
function I3(t) {
  if (navigator.clipboard && window.isSecureContext)
    return navigator.clipboard.writeText(t);
  {
    const e = document.createElement("textarea");
    return e.value = t, e.style.position = "fixed", e.style.left = "-999999px", e.style.top = "-999999px", document.body.appendChild(e), e.focus(), e.select(), new Promise((r, n) => {
      document.execCommand("copy") ? r(t) : n(), e.remove();
    });
  }
}
const Zc = (t, e) => {
  var r;
  return e.toLowerCase() === nt.toLowerCase() || e.toLowerCase() === ((r = gn[t].address) == null ? void 0 : r.toLowerCase());
};
function k3(t, e, r) {
  return !e || !r ? !1 : Zc(t, e) && Zc(t, r) ? !0 : e.toLowerCase() === r.toLowerCase();
}
var js = { exports: {} }, da = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qc;
function S3() {
  if (Qc)
    return da;
  Qc = 1;
  var t = Rr, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(i, f, u) {
    var h, g = {}, C = null, E = null;
    u !== void 0 && (C = "" + u), f.key !== void 0 && (C = "" + f.key), f.ref !== void 0 && (E = f.ref);
    for (h in f)
      n.call(f, h) && !s.hasOwnProperty(h) && (g[h] = f[h]);
    if (i && i.defaultProps)
      for (h in f = i.defaultProps, f)
        g[h] === void 0 && (g[h] = f[h]);
    return { $$typeof: e, type: i, key: C, ref: E, props: g, _owner: a.current };
  }
  return da.Fragment = r, da.jsx = o, da.jsxs = o, da;
}
var fa = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e0;
function D3() {
  return e0 || (e0 = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Rr, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), S = Symbol.iterator, D = "@@iterator";
    function x(R) {
      if (R === null || typeof R != "object")
        return null;
      var Q = S && R[S] || R[D];
      return typeof Q == "function" ? Q : null;
    }
    var F = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function M(R) {
      {
        for (var Q = arguments.length, re = new Array(Q > 1 ? Q - 1 : 0), fe = 1; fe < Q; fe++)
          re[fe - 1] = arguments[fe];
        j("error", R, re);
      }
    }
    function j(R, Q, re) {
      {
        var fe = F.ReactDebugCurrentFrame, Ie = fe.getStackAddendum();
        Ie !== "" && (Q += "%s", re = re.concat([Ie]));
        var be = re.map(function(ue) {
          return String(ue);
        });
        be.unshift("Warning: " + Q), Function.prototype.apply.call(console[R], console, be);
      }
    }
    var U = !1, B = !1, W = !1, G = !1, K = !1, te;
    te = Symbol.for("react.module.reference");
    function se(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === n || R === s || K || R === a || R === u || R === h || G || R === E || U || B || W || typeof R == "object" && R !== null && (R.$$typeof === C || R.$$typeof === g || R.$$typeof === o || R.$$typeof === i || R.$$typeof === f || R.$$typeof === te || R.getModuleId !== void 0));
    }
    function q(R, Q, re) {
      var fe = R.displayName;
      if (fe)
        return fe;
      var Ie = Q.displayName || Q.name || "";
      return Ie !== "" ? re + "(" + Ie + ")" : re;
    }
    function oe(R) {
      return R.displayName || "Context";
    }
    function I(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && M("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case a:
          return "StrictMode";
        case u:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case i:
            var Q = R;
            return oe(Q) + ".Consumer";
          case o:
            var re = R;
            return oe(re._context) + ".Provider";
          case f:
            return q(R, R.render, "ForwardRef");
          case g:
            var fe = R.displayName || null;
            return fe !== null ? fe : I(R.type) || "Memo";
          case C: {
            var Ie = R, be = Ie._payload, ue = Ie._init;
            try {
              return I(ue(be));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var d = Object.assign, m = 0, y, w, A, T, P, p, c;
    function b() {
    }
    b.__reactDisabledLog = !0;
    function k() {
      {
        if (m === 0) {
          y = console.log, w = console.info, A = console.warn, T = console.error, P = console.group, p = console.groupCollapsed, c = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: b,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        m++;
      }
    }
    function l() {
      {
        if (m--, m === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: d({}, R, {
              value: y
            }),
            info: d({}, R, {
              value: w
            }),
            warn: d({}, R, {
              value: A
            }),
            error: d({}, R, {
              value: T
            }),
            group: d({}, R, {
              value: P
            }),
            groupCollapsed: d({}, R, {
              value: p
            }),
            groupEnd: d({}, R, {
              value: c
            })
          });
        }
        m < 0 && M("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var v = F.ReactCurrentDispatcher, L;
    function _(R, Q, re) {
      {
        if (L === void 0)
          try {
            throw Error();
          } catch (Ie) {
            var fe = Ie.stack.trim().match(/\n( *(at )?)/);
            L = fe && fe[1] || "";
          }
        return `
` + L + R;
      }
    }
    var H = !1, Y;
    {
      var $ = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new $();
    }
    function N(R, Q) {
      if (!R || H)
        return "";
      {
        var re = Y.get(R);
        if (re !== void 0)
          return re;
      }
      var fe;
      H = !0;
      var Ie = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var be;
      be = v.current, v.current = null, k();
      try {
        if (Q) {
          var ue = function() {
            throw Error();
          };
          if (Object.defineProperty(ue.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ue, []);
            } catch (Nt) {
              fe = Nt;
            }
            Reflect.construct(R, [], ue);
          } else {
            try {
              ue.call();
            } catch (Nt) {
              fe = Nt;
            }
            R.call(ue.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Nt) {
            fe = Nt;
          }
          R();
        }
      } catch (Nt) {
        if (Nt && fe && typeof Nt.stack == "string") {
          for (var xe = Nt.stack.split(`
`), ot = fe.stack.split(`
`), Pe = xe.length - 1, ze = ot.length - 1; Pe >= 1 && ze >= 0 && xe[Pe] !== ot[ze]; )
            ze--;
          for (; Pe >= 1 && ze >= 0; Pe--, ze--)
            if (xe[Pe] !== ot[ze]) {
              if (Pe !== 1 || ze !== 1)
                do
                  if (Pe--, ze--, ze < 0 || xe[Pe] !== ot[ze]) {
                    var mt = `
` + xe[Pe].replace(" at new ", " at ");
                    return R.displayName && mt.includes("<anonymous>") && (mt = mt.replace("<anonymous>", R.displayName)), typeof R == "function" && Y.set(R, mt), mt;
                  }
                while (Pe >= 1 && ze >= 0);
              break;
            }
        }
      } finally {
        H = !1, v.current = be, l(), Error.prepareStackTrace = Ie;
      }
      var xr = R ? R.displayName || R.name : "", Fn = xr ? _(xr) : "";
      return typeof R == "function" && Y.set(R, Fn), Fn;
    }
    function he(R, Q, re) {
      return N(R, !1);
    }
    function z(R) {
      var Q = R.prototype;
      return !!(Q && Q.isReactComponent);
    }
    function Z(R, Q, re) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return N(R, z(R));
      if (typeof R == "string")
        return _(R);
      switch (R) {
        case u:
          return _("Suspense");
        case h:
          return _("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case f:
            return he(R.render);
          case g:
            return Z(R.type, Q, re);
          case C: {
            var fe = R, Ie = fe._payload, be = fe._init;
            try {
              return Z(be(Ie), Q, re);
            } catch {
            }
          }
        }
      return "";
    }
    var ve = Object.prototype.hasOwnProperty, le = {}, ge = F.ReactDebugCurrentFrame;
    function lt(R) {
      if (R) {
        var Q = R._owner, re = Z(R.type, R._source, Q ? Q.type : null);
        ge.setExtraStackFrame(re);
      } else
        ge.setExtraStackFrame(null);
    }
    function me(R, Q, re, fe, Ie) {
      {
        var be = Function.call.bind(ve);
        for (var ue in R)
          if (be(R, ue)) {
            var xe = void 0;
            try {
              if (typeof R[ue] != "function") {
                var ot = Error((fe || "React class") + ": " + re + " type `" + ue + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[ue] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ot.name = "Invariant Violation", ot;
              }
              xe = R[ue](Q, ue, fe, re, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Pe) {
              xe = Pe;
            }
            xe && !(xe instanceof Error) && (lt(Ie), M("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", fe || "React class", re, ue, typeof xe), lt(null)), xe instanceof Error && !(xe.message in le) && (le[xe.message] = !0, lt(Ie), M("Failed %s type: %s", re, xe.message), lt(null));
          }
      }
    }
    var Ee = Array.isArray;
    function it(R) {
      return Ee(R);
    }
    function ye(R) {
      {
        var Q = typeof Symbol == "function" && Symbol.toStringTag, re = Q && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return re;
      }
    }
    function ie(R) {
      try {
        return ke(R), !1;
      } catch {
        return !0;
      }
    }
    function ke(R) {
      return "" + R;
    }
    function Se(R) {
      if (ie(R))
        return M("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ye(R)), ke(R);
    }
    var Ce = F.ReactCurrentOwner, st = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Te, Me, _t;
    _t = {};
    function pe(R) {
      if (ve.call(R, "ref")) {
        var Q = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function Ue(R) {
      if (ve.call(R, "key")) {
        var Q = Object.getOwnPropertyDescriptor(R, "key").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function er(R, Q) {
      if (typeof R.ref == "string" && Ce.current && Q && Ce.current.stateNode !== Q) {
        var re = I(Ce.current.type);
        _t[re] || (M('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(Ce.current.type), R.ref), _t[re] = !0);
      }
    }
    function Ke(R, Q) {
      {
        var re = function() {
          Te || (Te = !0, M("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
        };
        re.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: re,
          configurable: !0
        });
      }
    }
    function qe(R, Q) {
      {
        var re = function() {
          Me || (Me = !0, M("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
        };
        re.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: re,
          configurable: !0
        });
      }
    }
    var Nr = function(R, Q, re, fe, Ie, be, ue) {
      var xe = {
        $$typeof: e,
        type: R,
        key: Q,
        ref: re,
        props: ue,
        _owner: be
      };
      return xe._store = {}, Object.defineProperty(xe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(xe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: fe
      }), Object.defineProperty(xe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ie
      }), Object.freeze && (Object.freeze(xe.props), Object.freeze(xe)), xe;
    };
    function Ye(R, Q, re, fe, Ie) {
      {
        var be, ue = {}, xe = null, ot = null;
        re !== void 0 && (Se(re), xe = "" + re), Ue(Q) && (Se(Q.key), xe = "" + Q.key), pe(Q) && (ot = Q.ref, er(Q, Ie));
        for (be in Q)
          ve.call(Q, be) && !st.hasOwnProperty(be) && (ue[be] = Q[be]);
        if (R && R.defaultProps) {
          var Pe = R.defaultProps;
          for (be in Pe)
            ue[be] === void 0 && (ue[be] = Pe[be]);
        }
        if (xe || ot) {
          var ze = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          xe && Ke(ue, ze), ot && qe(ue, ze);
        }
        return Nr(R, xe, ot, Ie, fe, Ce.current, ue);
      }
    }
    var We = F.ReactCurrentOwner, mr = F.ReactDebugCurrentFrame;
    function _e(R) {
      if (R) {
        var Q = R._owner, re = Z(R.type, R._source, Q ? Q.type : null);
        mr.setExtraStackFrame(re);
      } else
        mr.setExtraStackFrame(null);
    }
    var He;
    He = !1;
    function tr(R) {
      return typeof R == "object" && R !== null && R.$$typeof === e;
    }
    function $e() {
      {
        if (We.current) {
          var R = I(We.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function Xe(R) {
      {
        if (R !== void 0) {
          var Q = R.fileName.replace(/^.*[\\\/]/, ""), re = R.lineNumber;
          return `

Check your code at ` + Q + ":" + re + ".";
        }
        return "";
      }
    }
    var pr = {};
    function Je(R) {
      {
        var Q = $e();
        if (!Q) {
          var re = typeof R == "string" ? R : R.displayName || R.name;
          re && (Q = `

Check the top-level render call using <` + re + ">.");
        }
        return Q;
      }
    }
    function Ve(R, Q) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var re = Je(Q);
        if (pr[re])
          return;
        pr[re] = !0;
        var fe = "";
        R && R._owner && R._owner !== We.current && (fe = " It was passed a child from " + I(R._owner.type) + "."), _e(R), M('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', re, fe), _e(null);
      }
    }
    function br(R, Q) {
      {
        if (typeof R != "object")
          return;
        if (it(R))
          for (var re = 0; re < R.length; re++) {
            var fe = R[re];
            tr(fe) && Ve(fe, Q);
          }
        else if (tr(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var Ie = x(R);
          if (typeof Ie == "function" && Ie !== R.entries)
            for (var be = Ie.call(R), ue; !(ue = be.next()).done; )
              tr(ue.value) && Ve(ue.value, Q);
        }
      }
    }
    function Ze(R) {
      {
        var Q = R.type;
        if (Q == null || typeof Q == "string")
          return;
        var re;
        if (typeof Q == "function")
          re = Q.propTypes;
        else if (typeof Q == "object" && (Q.$$typeof === f || Q.$$typeof === g))
          re = Q.propTypes;
        else
          return;
        if (re) {
          var fe = I(Q);
          me(re, R.props, "prop", fe, R);
        } else if (Q.PropTypes !== void 0 && !He) {
          He = !0;
          var Ie = I(Q);
          M("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ie || "Unknown");
        }
        typeof Q.getDefaultProps == "function" && !Q.getDefaultProps.isReactClassApproved && M("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Qe(R) {
      {
        for (var Q = Object.keys(R.props), re = 0; re < Q.length; re++) {
          var fe = Q[re];
          if (fe !== "children" && fe !== "key") {
            _e(R), M("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", fe), _e(null);
            break;
          }
        }
        R.ref !== null && (_e(R), M("Invalid attribute `ref` supplied to `React.Fragment`."), _e(null));
      }
    }
    function gr(R, Q, re, fe, Ie, be) {
      {
        var ue = se(R);
        if (!ue) {
          var xe = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (xe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ot = Xe(Ie);
          ot ? xe += ot : xe += $e();
          var Pe;
          R === null ? Pe = "null" : it(R) ? Pe = "array" : R !== void 0 && R.$$typeof === e ? (Pe = "<" + (I(R.type) || "Unknown") + " />", xe = " Did you accidentally export a JSX literal instead of a component?") : Pe = typeof R, M("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Pe, xe);
        }
        var ze = Ye(R, Q, re, Ie, be);
        if (ze == null)
          return ze;
        if (ue) {
          var mt = Q.children;
          if (mt !== void 0)
            if (fe)
              if (it(mt)) {
                for (var xr = 0; xr < mt.length; xr++)
                  br(mt[xr], R);
                Object.freeze && Object.freeze(mt);
              } else
                M("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              br(mt, R);
        }
        return R === n ? Qe(ze) : Ze(ze), ze;
      }
    }
    function et(R, Q, re) {
      return gr(R, Q, re, !0);
    }
    function tt(R, Q, re) {
      return gr(R, Q, re, !1);
    }
    var Lr = tt, rt = et;
    fa.Fragment = n, fa.jsx = Lr, fa.jsxs = rt;
  }()), fa;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = S3() : t.exports = D3();
})(js);
const fr = js.exports.Fragment, O = js.exports.jsx, X = js.exports.jsxs, Tf = R0(null), B3 = ({
  provider: t,
  children: e
}) => {
  const [r, n] = Ae(1), [a, s] = Ae("");
  return yt(() => {
    t ? (t == null || t.getNetwork().then((o) => n(o.chainId)), t == null || t.listAccounts().then((o) => s(o[0]))) : n(1);
  }, [t]), /* @__PURE__ */ O(Tf.Provider, {
    value: {
      provider: t,
      chainId: r,
      account: a
    },
    children: e
  });
}, Rt = () => dn(Tf) || {
  provider: null,
  chainId: 1,
  account: ""
};
function Ws(t, e) {
  const { provider: r, account: n } = Rt();
  return ea(() => {
    const a = Ri(t);
    if (!a || !r)
      return null;
    try {
      return new Um(a, e, n ? r.getSigner(n) : r);
    } catch (s) {
      return console.error("Failed to get contract", s), null;
    }
  }, [t, e, r, n]);
}
const F3 = () => {
  const { chainId: t } = Rt();
  return Ws(n3[t], E3);
};
function R3() {
  const { chainId: t } = Rt();
  return Ws(gn[t].address, C3);
}
const _i = (t) => {
  const {
    provider: e,
    chainId: r
  } = Rt(), n = F3(), [a, s] = Ae({}), [o, i] = Ae(!1), f = on(async () => {
    if (!e) {
      s({});
      return;
    }
    try {
      i(!0);
      const h = (await e.listAccounts())[0], g = await e.getBalance(h), C = yo.getFunction("balanceOf"), E = yo.encodeFunctionData(C, [h]), S = t.map((F) => ({
        target: F,
        callData: E
      })), x = (await (n == null ? void 0 : n.callStatic.tryBlockAndAggregate(!1, S))).returnData.map((F) => yo.decodeFunctionResult(C, F.returnData));
      i(!1), s({
        [nt]: g,
        ...x.reduce((F, M, j) => ({
          ...F,
          [t[j]]: M.balance
        }), {})
      });
    } catch {
      i(!1);
    }
  }, [e, r, JSON.stringify(t)]);
  return yt(() => {
    f();
    const u = setInterval(() => {
      f();
    }, 1e4);
    return () => {
      clearInterval(u);
    };
  }, [e, f]), {
    loading: o,
    balances: a,
    refetch: f
  };
}, Ti = R0({
  tokenList: [],
  importedTokens: [],
  addToken: () => {
  },
  removeToken: () => {
  }
}), _3 = ({
  tokenList: t,
  children: e
}) => {
  const {
    chainId: r
  } = Rt(), [n, a] = Ae(() => {
    if (typeof window < "u")
      try {
        return JSON.parse(localStorage.getItem("importedTokens") || "[]");
      } catch {
        return [];
      }
    return [];
  }), s = (i) => {
    const f = [...n.filter((u) => u.address !== i.address), i];
    a(f), typeof window < "u" && localStorage.setItem("importedTokens", JSON.stringify(f));
  }, o = (i) => {
    const f = n.filter((u) => u.address.toLowerCase() !== i.address.toLowerCase() && u.chainId === i.chainId);
    a(f), typeof window < "u" && localStorage.setItem("importedTokens", JSON.stringify(f));
  };
  return /* @__PURE__ */ O(Ti.Provider, {
    value: {
      tokenList: t != null && t.length ? t : r3[r],
      importedTokens: n,
      addToken: s,
      removeToken: o
    },
    children: e
  });
}, Hs = () => {
  const {
    tokenList: t,
    importedTokens: e
  } = dn(Ti), {
    chainId: r
  } = Rt();
  return ea(() => [...e.filter((n) => n.chainId === r).map((n) => ({
    ...n,
    isImport: !0
  })), ...t || []], [t, e, r]);
}, Mf = () => {
  const {
    addToken: t,
    removeToken: e,
    importedTokens: r
  } = dn(Ti);
  return {
    addToken: t,
    removeToken: e,
    importedTokens: r
  };
}, Uf = (t) => /* @__PURE__ */ ee.createElement("svg", { width: 94, height: 94, viewBox: "0 0 94 94", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ ee.createElement("path", { d: "M92 47C92 22.1472 71.8528 2 47 2C22.1472 2 2 22.1472 2 47C2 71.8528 22.1472 92 47 92", stroke: "currentColor", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" })), Pf = (t) => /* @__PURE__ */ ee.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24px", height: "24px", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "CurrencyLogo__StyledLogo-sc-1q82rua-1 gpxlKa", ...t }, /* @__PURE__ */ ee.createElement("circle", { cx: 12, cy: 12, r: 10 }), /* @__PURE__ */ ee.createElement("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }), /* @__PURE__ */ ee.createElement("line", { x1: 12, y1: 17, x2: 12.01, y2: 17 })), T3 = (t) => /* @__PURE__ */ ee.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-trash-2", ...t }, /* @__PURE__ */ ee.createElement("polyline", { points: "3 6 5 6 21 6" }), /* @__PURE__ */ ee.createElement("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }), /* @__PURE__ */ ee.createElement("line", { x1: 10, y1: 11, x2: 10, y2: 17 }), /* @__PURE__ */ ee.createElement("line", { x1: 14, y1: 11, x2: 14, y2: 17 })), M3 = [
  {
    constant: !0,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: !1,
    inputs: [
      {
        name: "_spender",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: !0,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: !1,
    inputs: [
      {
        name: "_from",
        type: "address"
      },
      {
        name: "_to",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: !0,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: !0,
    inputs: [
      {
        name: "_owner",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "balance",
        type: "uint256"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: !0,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: !1,
    inputs: [
      {
        name: "_to",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: !0,
    inputs: [
      {
        name: "_owner",
        type: "address"
      },
      {
        name: "_spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    payable: !0,
    stateMutability: "payable",
    type: "fallback"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        name: "owner",
        type: "address"
      },
      {
        indexed: !0,
        name: "spender",
        type: "address"
      },
      {
        indexed: !1,
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        name: "from",
        type: "address"
      },
      {
        indexed: !0,
        name: "to",
        type: "address"
      },
      {
        indexed: !1,
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  }
], U3 = (t) => {
  const e = Ws(t, M3), { chainId: r } = Rt(), [n, a] = Ae(null);
  return yt(() => {
    (async () => {
      const [o, i, f] = await Promise.all([
        e == null ? void 0 : e.name(),
        e == null ? void 0 : e.symbol(),
        e == null ? void 0 : e.decimals()
      ]);
      a({
        address: t,
        name: o,
        symbol: i,
        decimals: f,
        chainId: r,
        logoURI: ""
      });
    })();
  }, [e, t, r]), n;
}, P3 = J(T3)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  color: ${({
  theme: t
}) => t.text};

  :hover {
    color: ${({
  theme: t
}) => t.error};
  }
`, O3 = si`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, N3 = J(Uf)`
  animation: 2s ${O3} linear infinite;
  width: 20px;
  height: 20px;
  color: ${({
  theme: t
}) => t.accent};

  path {
    stroke-width: 8;
  }
`, Of = J.input`
  font-size: 0.75rem;
  padding: 0.75rem;
  border-radius: ${({
  theme: t
}) => t.borderRadius};
  background: ${({
  theme: t
}) => t.secondary};
  outline: none;
  border: none;
  color: ${({
  theme: t
}) => t.text};
`, L3 = J.div`
  flex: 1;
  overflow-y: scroll;

  /* width */
  ::-webkit-scrollbar {
    display: unset;
    width: 6px;
    border-radius: 999px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 999px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({
  theme: t
}) => t.subText + "66"};
    border-radius: 999px;
  }
`, Nf = J.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.75rem;
  cursor: pointer;

  background: ${({
  theme: t,
  selected: e
}) => e ? t.secondary : "transparent"};

  :hover {
    background: ${({
  theme: t
}) => t.secondary};
  }
`, Lf = J.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
`, jf = J.div`
  color: ${({
  theme: t
}) => t.subText};
  font-size: 0.75rem;
`, j3 = J.div`
  font-size: 1rem;
  overflow: hidden;
  max-width: 6rem;
  text-overflow: ellipsis;
`, W3 = J.div`
  padding-bottom: 16px;
  border-bottom: 1px solid ${({
  theme: t
}) => t.stroke};
  display: flex;
  gap: 24px;
  cursor: pointer;
`, t0 = J.div`
  color: ${({
  theme: t,
  active: e
}) => e ? t.accent : t.text};
  hover: ${({
  theme: t
}) => t.accent};
  font-size: 14px;
  font-weight: 500;
`, H3 = J.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: ${({
  theme: t
}) => t.subText};
`, z3 = ({
  address: t,
  onImport: e
}) => {
  const r = U3(t);
  return r ? /* @__PURE__ */ X(Nf, {
    selected: !1,
    children: [/* @__PURE__ */ X(Lf, {
      children: [/* @__PURE__ */ O(Pf, {}), /* @__PURE__ */ X("div", {
        style: {
          textAlign: "left"
        },
        children: [/* @__PURE__ */ O("span", {
          children: r.symbol
        }), /* @__PURE__ */ O(jf, {
          children: r.name
        })]
      })]
    }), /* @__PURE__ */ O(Ln, {
      style: {
        width: "fit-content",
        padding: "8px 16px",
        marginTop: 0
      },
      onClick: () => e(r),
      children: "Import"
    })]
  }) : null;
};
function r0({
  selectedToken: t,
  onChange: e,
  onImport: r
}) {
  const n = Hs(), [a, s] = Ae(""), o = n.map((S) => S.address), {
    balances: i,
    loading: f
  } = _i(o), {
    removeToken: u
  } = Mf(), {
    chainId: h
  } = Rt(), g = [{
    ...Es[h],
    balance: i[nt],
    formattedBalance: cr.formatUnits(i[nt] || de.from(0), 18)
  }, ...n.map((S) => {
    const D = i[S.address], x = cr.formatUnits(D || de.from(0), S.decimals);
    return {
      ...S,
      balance: D,
      formattedBalance: x
    };
  }).sort((S, D) => parseFloat(D.formattedBalance) - parseFloat(S.formattedBalance))].filter((S) => S.address.toLowerCase() === a.trim().toLowerCase() || S.name.toLowerCase().includes(a.toLowerCase()) || S.symbol.toLowerCase().includes(a.toLowerCase())), [C, E] = Ae("all");
  return /* @__PURE__ */ X(fr, {
    children: [/* @__PURE__ */ O(Of, {
      placeholder: "Search by token name, token symbol or address",
      value: a,
      onChange: (S) => s(S.target.value)
    }), /* @__PURE__ */ X(W3, {
      children: [/* @__PURE__ */ O(t0, {
        active: C === "all",
        onClick: () => E("all"),
        role: "button",
        children: "All"
      }), /* @__PURE__ */ O(t0, {
        active: C === "imported",
        onClick: () => E("imported"),
        role: "button",
        children: "Imported"
      })]
    }), /* @__PURE__ */ X(L3, {
      children: [!g.length && cr.isAddress(a.trim()) && /* @__PURE__ */ O(z3, {
        address: a.trim(),
        onImport: r
      }), !g.filter((S) => C === "imported" ? S.isImport : !0).length && !cr.isAddress(a.trim()) && /* @__PURE__ */ O(H3, {
        children: "No results found"
      }), g.filter((S) => C === "imported" ? S.isImport : !0).map((S) => /* @__PURE__ */ X(Nf, {
        selected: S.address === t,
        onClick: () => {
          e(S.address);
        },
        children: [/* @__PURE__ */ X(Lf, {
          children: [/* @__PURE__ */ O("img", {
            src: S.logoURI,
            width: "24",
            height: "24",
            alt: "logo",
            style: {
              borderRadius: "999px"
            },
            onError: ({
              currentTarget: D
            }) => {
              D.onerror = null, D.src = new URL("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iQ3VycmVuY3lMb2dvX19TdHlsZWRMb2dvLXNjLTFxODJydWEtMSBncHhsS2EiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIj48L2NpcmNsZT48cGF0aCBkPSJNOS4wOSA5YTMgMyAwIDAgMSA1LjgzIDFjMCAyLTMgMy0zIDMiPjwvcGF0aD48bGluZSB4MT0iMTIiIHkxPSIxNyIgeDI9IjEyLjAxIiB5Mj0iMTciPjwvbGluZT48L3N2Zz4K", self.location).href;
            }
          }), /* @__PURE__ */ X("div", {
            style: {
              textAlign: "left"
            },
            children: [/* @__PURE__ */ O("span", {
              children: S.symbol
            }), /* @__PURE__ */ O(jf, {
              children: S.name
            })]
          })]
        }), C === "imported" ? /* @__PURE__ */ O(P3, {
          onClick: (D) => {
            D.stopPropagation(), u(S);
          }
        }) : f ? /* @__PURE__ */ O(N3, {}) : /* @__PURE__ */ O(j3, {
          children: S.balance && parseFloat(S.formattedBalance) < 1e-6 ? S.formattedBalance : parseFloat(parseFloat(S.formattedBalance).toPrecision(10))
        })]
      }, S.address))]
    })]
  });
}
function $3(t, e) {
  const [r, n] = Ae(t);
  return yt(() => {
    const a = setTimeout(() => n(t), e || 500);
    return () => {
      clearTimeout(a);
    };
  }, [t, e]), r;
}
const Wf = (t) => {
  const e = ea(() => t ? t.split(",") : void 0, [t]), {
    chainId: r
  } = Rt(), n = !Fi.includes(r.toString()), [a, s] = Ae([]), [o, i] = Ae([]), f = a.filter((g) => e ? e.includes(g.dexId) : !0), u = o.map((g) => g.dexId), h = o.length === 0 && !t ? void 0 : f.filter((g) => !u.includes(g.dexId)).map((g) => g.dexId).join(",").replace("kyberswapv1", "kyberswap,kyberswap-static");
  return yt(() => {
    (async () => {
      var j;
      if (n)
        return;
      const C = await fetch(`https://ks-setting.kyberswap.com/api/v1/dexes?chain=${Bi[r]}&isEnabled=true&pageSize=100`).then((U) => U.json());
      let E = ((j = C == null ? void 0 : C.data) == null ? void 0 : j.dexes) || [];
      const S = E.find((U) => U.dexId === "kyberswap-elastic"), D = E.find((U) => U.dexId === "kyberswap"), x = E.find((U) => U.dexId === "kyberswap-static"), F = E.find((U) => U.dexId === "kyberswap-limit-order");
      let M = [];
      S && (M = [{
        dexId: "kyberswap-elastic",
        name: "KyberSwap Elastic",
        logoURL: "https://kyberswap.com/favicon.ico"
      }]), (x || D) && M.push({
        dexId: "kyberswapv1",
        name: "KyberSwap Classic",
        logoURL: "https://kyberswap.com/favicon.ico"
      }), F && M.push({
        dexId: "kyberswap-limit-order",
        name: "KyberSwap Limit Order",
        logoURL: "https://kyberswap.com/favicon.ico"
      }), E = M.concat(E.filter((U) => !["kyberswap", "kyberswap-elastic", "kyberswap-static", "kyberswap-limit-order"].includes(U.dexId))), s(E);
    })();
  }, [n, r, e]), [f, h, o, i];
}, V3 = ({
  defaultTokenIn: t,
  defaultTokenOut: e,
  defaultSlippage: r,
  feeSetting: n,
  enableDexes: a
}) => {
  const {
    provider: s,
    chainId: o
  } = Rt(), [i, f] = Ae(t || nt), [u, h] = Ae(e || ""), g = Hs(), C = !Fi.includes(o.toString()), E = i === nt && u.toLowerCase() === gn[o].address.toLowerCase(), S = u === nt && i.toLowerCase() === gn[o].address.toLowerCase();
  yt(() => {
    C ? (f(""), h(""), se(null)) : (se(null), f(t || nt), h(e || ""));
  }, [C, o, t, e]);
  const {
    balances: D
  } = _i(g.map((b) => b.address)), [x, F, M, j] = Wf(a), [U, B] = Ae("1"), W = $3(U), [G, K] = Ae(!1), [te, se] = Ae(null), [q, oe] = Ae(""), [I, d] = Ae(r || 50), [m, y] = Ae(20), w = dr(), {
    chargeFeeBy: A,
    feeAmount: T,
    isInBps: P,
    feeReceiver: p
  } = n || {}, c = on(async () => {
    var $, N, he, z;
    if (C)
      return;
    const b = i === nt ? 18 : ($ = g.find((Z) => Z.address.toLowerCase() === i.toLowerCase())) == null ? void 0 : $.decimals;
    if (!b || !i || !u || !W) {
      oe("Invalid input"), se(null);
      return;
    }
    let k = de.from("0");
    try {
      k = Di(W, b);
    } catch {
      oe("Invalid input amount"), se(null);
      return;
    }
    if (!k) {
      oe("Invalid input amount"), se(null);
      return;
    }
    const l = D[i] || de.from(0);
    let v = "";
    if (l.lt(k) && (v = "Insufficient balance"), s || (v = "Please connect your wallet"), oe(v), E || S) {
      se({
        routerAddress: gn[o].address,
        routeSummary: {
          tokenIn: i,
          amountIn: k.toString(),
          amountInUsd: "",
          tokenOut: u,
          amountOut: k.toString(),
          amountOutUsd: "",
          gas: "",
          gasPrice: "",
          gasUsd: "",
          extraFee: {
            feeAmount: "",
            chargeFeeBy: "",
            isInBps: "",
            feeReceiver: ""
          },
          route: []
        }
      });
      return;
    }
    const L = {
      tokenIn: i,
      tokenOut: u,
      saveGas: !1,
      gasInclude: !0,
      amountIn: k.toString(),
      includedSources: F,
      chargeFeeBy: A,
      feeAmount: T,
      isInBps: P,
      feeReceiver: p
    }, _ = Object.keys(L).reduce((Z, ve) => L[ve] !== void 0 ? `${Z}&${ve}=${L[ve]}` : Z, "");
    K(!0), w.current && w.current.abort();
    const H = new AbortController();
    w.current = H;
    const Y = await fetch(`https://aggregator-api.kyberswap.com/${Bi[o]}/api/v1/routes?${_.slice(1)}`, {
      signal: (N = w.current) == null ? void 0 : N.signal
    }).then((Z) => Z.json());
    Number((z = (he = Y.data) == null ? void 0 : he.routeSummary) == null ? void 0 : z.amountOut) ? (se(Y.data), s && !l.lt(k) && oe("")) : (se(null), oe("Insufficient liquidity")), w.current = null, K(!1);
  }, [
    g,
    i,
    u,
    E,
    S,
    s,
    W,
    F,
    C,
    o,
    A,
    T,
    P,
    p,
    JSON.stringify(D)
  ]);
  return yt(() => {
    c();
  }, [c]), {
    tokenIn: i,
    tokenOut: u,
    setTokenOut: h,
    setTokenIn: f,
    inputAmout: U,
    trade: te,
    setInputAmount: B,
    loading: G,
    error: q,
    slippage: I,
    setSlippage: d,
    getRate: c,
    deadline: m,
    setDeadline: y,
    allDexes: x,
    excludedDexes: M,
    setExcludedDexes: j,
    setTrade: se,
    isWrap: E,
    isUnwrap: S
  };
};
var pa = /* @__PURE__ */ ((t) => (t.UNKNOWN = "unknown", t.PENDING = "pending", t.APPROVED = "approved", t.NOT_APPROVED = "not_approved", t))(pa || {});
function G3(t, e, r) {
  const {
    account: n,
    provider: a
  } = Rt(), [s, o] = Ae(!1), [i, f] = Ae(() => e === nt ? "approved" : "unknown"), u = Ws(e, _f), [h, g] = Ae(""), C = on(() => {
    if (u) {
      const E = de.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
      u.approve(r, E).then((S) => {
        f("pending"), g(S.hash);
      });
    }
  }, [u, r]);
  return yt(() => {
    if (h) {
      const E = setInterval(() => {
        a == null || a.getTransactionReceipt(h).then((S) => {
          S && (g(""), f("approved"));
        });
      }, 8e3);
      return () => {
        clearInterval(E);
      };
    }
  }, [h, a]), yt(() => {
    e === nt && f("approved"), u && e !== nt && n && r && (o(!0), u.allowance(n, r).then((E) => {
      de.from(t).lte(E) ? f("approved") : f("not_approved"), o(!1);
    }));
  }, [u, e, n, r, t]), {
    loading: s,
    approvalState: i,
    approve: C
  };
}
const Hf = (t) => /* @__PURE__ */ ee.createElement("svg", { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ ee.createElement("g", { clipPath: "url(#clip0_277_44496)" }, /* @__PURE__ */ ee.createElement("path", { d: "M9.99984 18.3332C14.6022 18.3332 18.3332 14.6022 18.3332 9.99984C18.3332 5.39746 14.6022 1.6665 9.99984 1.6665C5.39746 1.6665 1.6665 5.39746 1.6665 9.99984C1.6665 14.6022 5.39746 18.3332 9.99984 18.3332Z", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ ee.createElement("path", { d: "M10 13.3333V10", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ ee.createElement("path", { d: "M10 6.6665H10.0083", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })), /* @__PURE__ */ ee.createElement("defs", null, /* @__PURE__ */ ee.createElement("clipPath", { id: "clip0_277_44496" }, /* @__PURE__ */ ee.createElement("rect", { width: 20, height: 20, fill: "currentColor" }))));
/**
  * @reach/utils v0.18.0
  *
  * Copyright (c) 2018-2022, React Training LLC
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE.md file in the root directory of this source tree.
  *
  * @license MIT
  */
function K3() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function q3() {
  let [, t] = Ae(/* @__PURE__ */ Object.create(null));
  return on(() => {
    t(/* @__PURE__ */ Object.create(null));
  }, []);
}
var Y3 = K3() ? fl : yt, X3 = ({
  children: t,
  type: e = "reach-portal",
  containerRef: r
}) => {
  let n = ee.useRef(null), a = ee.useRef(null), s = q3();
  return ee.useEffect(() => {
    r != null && (typeof r != "object" || !("current" in r) ? console.warn("@reach/portal: Invalid value passed to the `containerRef` of a `Portal`. The portal will be appended to the document body, but if you want to attach it to another DOM node you must pass a valid React ref object to `containerRef`.") : r.current == null && console.warn("@reach/portal: A ref was passed to the `containerRef` prop of a `Portal`, but no DOM node was attached to it. Be sure to pass the ref to a DOM component.\n\nIf you are forwarding the ref from another component, be sure to use the React.forwardRef API. See https://reactjs.org/docs/forwarding-refs.html."));
  }, [r]), Y3(() => {
    if (!n.current)
      return;
    let o = n.current.ownerDocument, i = (r == null ? void 0 : r.current) || o.body;
    return a.current = o == null ? void 0 : o.createElement(e), i.appendChild(a.current), s(), () => {
      a.current && i && i.removeChild(a.current);
    };
  }, [e, s, r]), a.current ? pl(t, a.current) : /* @__PURE__ */ O("span", {
    ref: n
  });
}, zf = ({
  unstable_skipInitialRender: t,
  ...e
}) => {
  let [r, n] = ee.useState(!1);
  return ee.useEffect(() => {
    t && n(!0);
  }, [t]), t && !r ? null : /* @__PURE__ */ O(X3, {
    ...e
  });
};
zf.displayName = "Portal";
var n0 = function(e) {
  return e.reduce(function(r, n) {
    var a = n[0], s = n[1];
    return r[a] = s, r;
  }, {});
}, a0 = typeof window < "u" && window.document && window.document.createElement ? ee.useLayoutEffect : ee.useEffect, Ut = "top", Yt = "bottom", Xt = "right", Pt = "left", zs = "auto", $a = [Ut, Yt, Xt, Pt], Xn = "start", Ma = "end", J3 = "clippingParents", $f = "viewport", la = "popper", Z3 = "reference", s0 = /* @__PURE__ */ $a.reduce(function(t, e) {
  return t.concat([e + "-" + Xn, e + "-" + Ma]);
}, []), Vf = /* @__PURE__ */ [].concat($a, [zs]).reduce(function(t, e) {
  return t.concat([e, e + "-" + Xn, e + "-" + Ma]);
}, []), Q3 = "beforeRead", e6 = "read", t6 = "afterRead", r6 = "beforeMain", n6 = "main", a6 = "afterMain", s6 = "beforeWrite", o6 = "write", i6 = "afterWrite", Ko = [Q3, e6, t6, r6, n6, a6, s6, o6, i6];
function Pr(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function Qt(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return e && e.defaultView || window;
  }
  return t;
}
function In(t) {
  var e = Qt(t).Element;
  return t instanceof e || t instanceof Element;
}
function Wt(t) {
  var e = Qt(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function Mi(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = Qt(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function c6(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(r) {
    var n = e.styles[r] || {}, a = e.attributes[r] || {}, s = e.elements[r];
    !Wt(s) || !Pr(s) || (Object.assign(s.style, n), Object.keys(a).forEach(function(o) {
      var i = a[o];
      i === !1 ? s.removeAttribute(o) : s.setAttribute(o, i === !0 ? "" : i);
    }));
  });
}
function d6(t) {
  var e = t.state, r = {
    popper: {
      position: e.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(e.elements.popper.style, r.popper), e.styles = r, e.elements.arrow && Object.assign(e.elements.arrow.style, r.arrow), function() {
    Object.keys(e.elements).forEach(function(n) {
      var a = e.elements[n], s = e.attributes[n] || {}, o = Object.keys(e.styles.hasOwnProperty(n) ? e.styles[n] : r[n]), i = o.reduce(function(f, u) {
        return f[u] = "", f;
      }, {});
      !Wt(a) || !Pr(a) || (Object.assign(a.style, i), Object.keys(s).forEach(function(f) {
        a.removeAttribute(f);
      }));
    });
  };
}
const f6 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: c6,
  effect: d6,
  requires: ["computeStyles"]
};
function lr(t) {
  return t.split("-")[0];
}
var xn = Math.max, Is = Math.min, Jn = Math.round;
function qo() {
  var t = navigator.userAgentData;
  return t != null && t.brands ? t.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function Gf() {
  return !/^((?!chrome|android).)*safari/i.test(qo());
}
function Zn(t, e, r) {
  e === void 0 && (e = !1), r === void 0 && (r = !1);
  var n = t.getBoundingClientRect(), a = 1, s = 1;
  e && Wt(t) && (a = t.offsetWidth > 0 && Jn(n.width) / t.offsetWidth || 1, s = t.offsetHeight > 0 && Jn(n.height) / t.offsetHeight || 1);
  var o = In(t) ? Qt(t) : window, i = o.visualViewport, f = !Gf() && r, u = (n.left + (f && i ? i.offsetLeft : 0)) / a, h = (n.top + (f && i ? i.offsetTop : 0)) / s, g = n.width / a, C = n.height / s;
  return {
    width: g,
    height: C,
    top: h,
    right: u + g,
    bottom: h + C,
    left: u,
    x: u,
    y: h
  };
}
function Ui(t) {
  var e = Zn(t), r = t.offsetWidth, n = t.offsetHeight;
  return Math.abs(e.width - r) <= 1 && (r = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
    x: t.offsetLeft,
    y: t.offsetTop,
    width: r,
    height: n
  };
}
function Kf(t, e) {
  var r = e.getRootNode && e.getRootNode();
  if (t.contains(e))
    return !0;
  if (r && Mi(r)) {
    var n = e;
    do {
      if (n && t.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function hr(t) {
  return Qt(t).getComputedStyle(t);
}
function l6(t) {
  return ["table", "td", "th"].indexOf(Pr(t)) >= 0;
}
function ln(t) {
  return ((In(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function $s(t) {
  return Pr(t) === "html" ? t : t.assignedSlot || t.parentNode || (Mi(t) ? t.host : null) || ln(t);
}
function o0(t) {
  return !Wt(t) || hr(t).position === "fixed" ? null : t.offsetParent;
}
function u6(t) {
  var e = /firefox/i.test(qo()), r = /Trident/i.test(qo());
  if (r && Wt(t)) {
    var n = hr(t);
    if (n.position === "fixed")
      return null;
  }
  var a = $s(t);
  for (Mi(a) && (a = a.host); Wt(a) && ["html", "body"].indexOf(Pr(a)) < 0; ) {
    var s = hr(a);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || e && s.willChange === "filter" || e && s.filter && s.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function Va(t) {
  for (var e = Qt(t), r = o0(t); r && l6(r) && hr(r).position === "static"; )
    r = o0(r);
  return r && (Pr(r) === "html" || Pr(r) === "body" && hr(r).position === "static") ? e : r || u6(t) || e;
}
function Pi(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function Aa(t, e, r) {
  return xn(t, Is(e, r));
}
function h6(t, e, r) {
  var n = Aa(t, e, r);
  return n > r ? r : n;
}
function qf() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Yf(t) {
  return Object.assign({}, qf(), t);
}
function Xf(t, e) {
  return e.reduce(function(r, n) {
    return r[n] = t, r;
  }, {});
}
var m6 = function(e, r) {
  return e = typeof e == "function" ? e(Object.assign({}, r.rects, {
    placement: r.placement
  })) : e, Yf(typeof e != "number" ? e : Xf(e, $a));
};
function p6(t) {
  var e, r = t.state, n = t.name, a = t.options, s = r.elements.arrow, o = r.modifiersData.popperOffsets, i = lr(r.placement), f = Pi(i), u = [Pt, Xt].indexOf(i) >= 0, h = u ? "height" : "width";
  if (!(!s || !o)) {
    var g = m6(a.padding, r), C = Ui(s), E = f === "y" ? Ut : Pt, S = f === "y" ? Yt : Xt, D = r.rects.reference[h] + r.rects.reference[f] - o[f] - r.rects.popper[h], x = o[f] - r.rects.reference[f], F = Va(s), M = F ? f === "y" ? F.clientHeight || 0 : F.clientWidth || 0 : 0, j = D / 2 - x / 2, U = g[E], B = M - C[h] - g[S], W = M / 2 - C[h] / 2 + j, G = Aa(U, W, B), K = f;
    r.modifiersData[n] = (e = {}, e[K] = G, e.centerOffset = G - W, e);
  }
}
function b6(t) {
  var e = t.state, r = t.options, n = r.element, a = n === void 0 ? "[data-popper-arrow]" : n;
  if (a != null && !(typeof a == "string" && (a = e.elements.popper.querySelector(a), !a))) {
    if (process.env.NODE_ENV !== "production" && (Wt(a) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !Kf(e.elements.popper, a)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    e.elements.arrow = a;
  }
}
const g6 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: p6,
  effect: b6,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Qn(t) {
  return t.split("-")[1];
}
var x6 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function y6(t) {
  var e = t.x, r = t.y, n = window, a = n.devicePixelRatio || 1;
  return {
    x: Jn(e * a) / a || 0,
    y: Jn(r * a) / a || 0
  };
}
function i0(t) {
  var e, r = t.popper, n = t.popperRect, a = t.placement, s = t.variation, o = t.offsets, i = t.position, f = t.gpuAcceleration, u = t.adaptive, h = t.roundOffsets, g = t.isFixed, C = o.x, E = C === void 0 ? 0 : C, S = o.y, D = S === void 0 ? 0 : S, x = typeof h == "function" ? h({
    x: E,
    y: D
  }) : {
    x: E,
    y: D
  };
  E = x.x, D = x.y;
  var F = o.hasOwnProperty("x"), M = o.hasOwnProperty("y"), j = Pt, U = Ut, B = window;
  if (u) {
    var W = Va(r), G = "clientHeight", K = "clientWidth";
    if (W === Qt(r) && (W = ln(r), hr(W).position !== "static" && i === "absolute" && (G = "scrollHeight", K = "scrollWidth")), W = W, a === Ut || (a === Pt || a === Xt) && s === Ma) {
      U = Yt;
      var te = g && W === B && B.visualViewport ? B.visualViewport.height : W[G];
      D -= te - n.height, D *= f ? 1 : -1;
    }
    if (a === Pt || (a === Ut || a === Yt) && s === Ma) {
      j = Xt;
      var se = g && W === B && B.visualViewport ? B.visualViewport.width : W[K];
      E -= se - n.width, E *= f ? 1 : -1;
    }
  }
  var q = Object.assign({
    position: i
  }, u && x6), oe = h === !0 ? y6({
    x: E,
    y: D
  }) : {
    x: E,
    y: D
  };
  if (E = oe.x, D = oe.y, f) {
    var I;
    return Object.assign({}, q, (I = {}, I[U] = M ? "0" : "", I[j] = F ? "0" : "", I.transform = (B.devicePixelRatio || 1) <= 1 ? "translate(" + E + "px, " + D + "px)" : "translate3d(" + E + "px, " + D + "px, 0)", I));
  }
  return Object.assign({}, q, (e = {}, e[U] = M ? D + "px" : "", e[j] = F ? E + "px" : "", e.transform = "", e));
}
function v6(t) {
  var e = t.state, r = t.options, n = r.gpuAcceleration, a = n === void 0 ? !0 : n, s = r.adaptive, o = s === void 0 ? !0 : s, i = r.roundOffsets, f = i === void 0 ? !0 : i;
  if (process.env.NODE_ENV !== "production") {
    var u = hr(e.elements.popper).transitionProperty || "";
    o && ["transform", "top", "right", "bottom", "left"].some(function(g) {
      return u.indexOf(g) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var h = {
    placement: lr(e.placement),
    variation: Qn(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: a,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, i0(Object.assign({}, h, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: o,
    roundOffsets: f
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, i0(Object.assign({}, h, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const A6 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: v6,
  data: {}
};
var es = {
  passive: !0
};
function w6(t) {
  var e = t.state, r = t.instance, n = t.options, a = n.scroll, s = a === void 0 ? !0 : a, o = n.resize, i = o === void 0 ? !0 : o, f = Qt(e.elements.popper), u = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return s && u.forEach(function(h) {
    h.addEventListener("scroll", r.update, es);
  }), i && f.addEventListener("resize", r.update, es), function() {
    s && u.forEach(function(h) {
      h.removeEventListener("scroll", r.update, es);
    }), i && f.removeEventListener("resize", r.update, es);
  };
}
const C6 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: w6,
  data: {}
};
var E6 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ls(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return E6[e];
  });
}
var I6 = {
  start: "end",
  end: "start"
};
function c0(t) {
  return t.replace(/start|end/g, function(e) {
    return I6[e];
  });
}
function Oi(t) {
  var e = Qt(t), r = e.pageXOffset, n = e.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Ni(t) {
  return Zn(ln(t)).left + Oi(t).scrollLeft;
}
function k6(t, e) {
  var r = Qt(t), n = ln(t), a = r.visualViewport, s = n.clientWidth, o = n.clientHeight, i = 0, f = 0;
  if (a) {
    s = a.width, o = a.height;
    var u = Gf();
    (u || !u && e === "fixed") && (i = a.offsetLeft, f = a.offsetTop);
  }
  return {
    width: s,
    height: o,
    x: i + Ni(t),
    y: f
  };
}
function S6(t) {
  var e, r = ln(t), n = Oi(t), a = (e = t.ownerDocument) == null ? void 0 : e.body, s = xn(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), o = xn(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), i = -n.scrollLeft + Ni(t), f = -n.scrollTop;
  return hr(a || r).direction === "rtl" && (i += xn(r.clientWidth, a ? a.clientWidth : 0) - s), {
    width: s,
    height: o,
    x: i,
    y: f
  };
}
function Li(t) {
  var e = hr(t), r = e.overflow, n = e.overflowX, a = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function Jf(t) {
  return ["html", "body", "#document"].indexOf(Pr(t)) >= 0 ? t.ownerDocument.body : Wt(t) && Li(t) ? t : Jf($s(t));
}
function wa(t, e) {
  var r;
  e === void 0 && (e = []);
  var n = Jf(t), a = n === ((r = t.ownerDocument) == null ? void 0 : r.body), s = Qt(n), o = a ? [s].concat(s.visualViewport || [], Li(n) ? n : []) : n, i = e.concat(o);
  return a ? i : i.concat(wa($s(o)));
}
function Yo(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height
  });
}
function D6(t, e) {
  var r = Zn(t, !1, e === "fixed");
  return r.top = r.top + t.clientTop, r.left = r.left + t.clientLeft, r.bottom = r.top + t.clientHeight, r.right = r.left + t.clientWidth, r.width = t.clientWidth, r.height = t.clientHeight, r.x = r.left, r.y = r.top, r;
}
function d0(t, e, r) {
  return e === $f ? Yo(k6(t, r)) : In(e) ? D6(e, r) : Yo(S6(ln(t)));
}
function B6(t) {
  var e = wa($s(t)), r = ["absolute", "fixed"].indexOf(hr(t).position) >= 0, n = r && Wt(t) ? Va(t) : t;
  return In(n) ? e.filter(function(a) {
    return In(a) && Kf(a, n) && Pr(a) !== "body";
  }) : [];
}
function F6(t, e, r, n) {
  var a = e === "clippingParents" ? B6(t) : [].concat(e), s = [].concat(a, [r]), o = s[0], i = s.reduce(function(f, u) {
    var h = d0(t, u, n);
    return f.top = xn(h.top, f.top), f.right = Is(h.right, f.right), f.bottom = Is(h.bottom, f.bottom), f.left = xn(h.left, f.left), f;
  }, d0(t, o, n));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Zf(t) {
  var e = t.reference, r = t.element, n = t.placement, a = n ? lr(n) : null, s = n ? Qn(n) : null, o = e.x + e.width / 2 - r.width / 2, i = e.y + e.height / 2 - r.height / 2, f;
  switch (a) {
    case Ut:
      f = {
        x: o,
        y: e.y - r.height
      };
      break;
    case Yt:
      f = {
        x: o,
        y: e.y + e.height
      };
      break;
    case Xt:
      f = {
        x: e.x + e.width,
        y: i
      };
      break;
    case Pt:
      f = {
        x: e.x - r.width,
        y: i
      };
      break;
    default:
      f = {
        x: e.x,
        y: e.y
      };
  }
  var u = a ? Pi(a) : null;
  if (u != null) {
    var h = u === "y" ? "height" : "width";
    switch (s) {
      case Xn:
        f[u] = f[u] - (e[h] / 2 - r[h] / 2);
        break;
      case Ma:
        f[u] = f[u] + (e[h] / 2 - r[h] / 2);
        break;
    }
  }
  return f;
}
function Ua(t, e) {
  e === void 0 && (e = {});
  var r = e, n = r.placement, a = n === void 0 ? t.placement : n, s = r.strategy, o = s === void 0 ? t.strategy : s, i = r.boundary, f = i === void 0 ? J3 : i, u = r.rootBoundary, h = u === void 0 ? $f : u, g = r.elementContext, C = g === void 0 ? la : g, E = r.altBoundary, S = E === void 0 ? !1 : E, D = r.padding, x = D === void 0 ? 0 : D, F = Yf(typeof x != "number" ? x : Xf(x, $a)), M = C === la ? Z3 : la, j = t.rects.popper, U = t.elements[S ? M : C], B = F6(In(U) ? U : U.contextElement || ln(t.elements.popper), f, h, o), W = Zn(t.elements.reference), G = Zf({
    reference: W,
    element: j,
    strategy: "absolute",
    placement: a
  }), K = Yo(Object.assign({}, j, G)), te = C === la ? K : W, se = {
    top: B.top - te.top + F.top,
    bottom: te.bottom - B.bottom + F.bottom,
    left: B.left - te.left + F.left,
    right: te.right - B.right + F.right
  }, q = t.modifiersData.offset;
  if (C === la && q) {
    var oe = q[a];
    Object.keys(se).forEach(function(I) {
      var d = [Xt, Yt].indexOf(I) >= 0 ? 1 : -1, m = [Ut, Yt].indexOf(I) >= 0 ? "y" : "x";
      se[I] += oe[m] * d;
    });
  }
  return se;
}
function R6(t, e) {
  e === void 0 && (e = {});
  var r = e, n = r.placement, a = r.boundary, s = r.rootBoundary, o = r.padding, i = r.flipVariations, f = r.allowedAutoPlacements, u = f === void 0 ? Vf : f, h = Qn(n), g = h ? i ? s0 : s0.filter(function(S) {
    return Qn(S) === h;
  }) : $a, C = g.filter(function(S) {
    return u.indexOf(S) >= 0;
  });
  C.length === 0 && (C = g, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var E = C.reduce(function(S, D) {
    return S[D] = Ua(t, {
      placement: D,
      boundary: a,
      rootBoundary: s,
      padding: o
    })[lr(D)], S;
  }, {});
  return Object.keys(E).sort(function(S, D) {
    return E[S] - E[D];
  });
}
function _6(t) {
  if (lr(t) === zs)
    return [];
  var e = ls(t);
  return [c0(t), e, c0(e)];
}
function T6(t) {
  var e = t.state, r = t.options, n = t.name;
  if (!e.modifiersData[n]._skip) {
    for (var a = r.mainAxis, s = a === void 0 ? !0 : a, o = r.altAxis, i = o === void 0 ? !0 : o, f = r.fallbackPlacements, u = r.padding, h = r.boundary, g = r.rootBoundary, C = r.altBoundary, E = r.flipVariations, S = E === void 0 ? !0 : E, D = r.allowedAutoPlacements, x = e.options.placement, F = lr(x), M = F === x, j = f || (M || !S ? [ls(x)] : _6(x)), U = [x].concat(j).reduce(function(k, l) {
      return k.concat(lr(l) === zs ? R6(e, {
        placement: l,
        boundary: h,
        rootBoundary: g,
        padding: u,
        flipVariations: S,
        allowedAutoPlacements: D
      }) : l);
    }, []), B = e.rects.reference, W = e.rects.popper, G = /* @__PURE__ */ new Map(), K = !0, te = U[0], se = 0; se < U.length; se++) {
      var q = U[se], oe = lr(q), I = Qn(q) === Xn, d = [Ut, Yt].indexOf(oe) >= 0, m = d ? "width" : "height", y = Ua(e, {
        placement: q,
        boundary: h,
        rootBoundary: g,
        altBoundary: C,
        padding: u
      }), w = d ? I ? Xt : Pt : I ? Yt : Ut;
      B[m] > W[m] && (w = ls(w));
      var A = ls(w), T = [];
      if (s && T.push(y[oe] <= 0), i && T.push(y[w] <= 0, y[A] <= 0), T.every(function(k) {
        return k;
      })) {
        te = q, K = !1;
        break;
      }
      G.set(q, T);
    }
    if (K)
      for (var P = S ? 3 : 1, p = function(l) {
        var v = U.find(function(L) {
          var _ = G.get(L);
          if (_)
            return _.slice(0, l).every(function(H) {
              return H;
            });
        });
        if (v)
          return te = v, "break";
      }, c = P; c > 0; c--) {
        var b = p(c);
        if (b === "break")
          break;
      }
    e.placement !== te && (e.modifiersData[n]._skip = !0, e.placement = te, e.reset = !0);
  }
}
const M6 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: T6,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function f0(t, e, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: t.top - e.height - r.y,
    right: t.right - e.width + r.x,
    bottom: t.bottom - e.height + r.y,
    left: t.left - e.width - r.x
  };
}
function l0(t) {
  return [Ut, Xt, Yt, Pt].some(function(e) {
    return t[e] >= 0;
  });
}
function U6(t) {
  var e = t.state, r = t.name, n = e.rects.reference, a = e.rects.popper, s = e.modifiersData.preventOverflow, o = Ua(e, {
    elementContext: "reference"
  }), i = Ua(e, {
    altBoundary: !0
  }), f = f0(o, n), u = f0(i, a, s), h = l0(f), g = l0(u);
  e.modifiersData[r] = {
    referenceClippingOffsets: f,
    popperEscapeOffsets: u,
    isReferenceHidden: h,
    hasPopperEscaped: g
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": h,
    "data-popper-escaped": g
  });
}
const P6 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: U6
};
function O6(t, e, r) {
  var n = lr(t), a = [Pt, Ut].indexOf(n) >= 0 ? -1 : 1, s = typeof r == "function" ? r(Object.assign({}, e, {
    placement: t
  })) : r, o = s[0], i = s[1];
  return o = o || 0, i = (i || 0) * a, [Pt, Xt].indexOf(n) >= 0 ? {
    x: i,
    y: o
  } : {
    x: o,
    y: i
  };
}
function N6(t) {
  var e = t.state, r = t.options, n = t.name, a = r.offset, s = a === void 0 ? [0, 0] : a, o = Vf.reduce(function(h, g) {
    return h[g] = O6(g, e.rects, s), h;
  }, {}), i = o[e.placement], f = i.x, u = i.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += f, e.modifiersData.popperOffsets.y += u), e.modifiersData[n] = o;
}
const L6 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: N6
};
function j6(t) {
  var e = t.state, r = t.name;
  e.modifiersData[r] = Zf({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const W6 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: j6,
  data: {}
};
function H6(t) {
  return t === "x" ? "y" : "x";
}
function z6(t) {
  var e = t.state, r = t.options, n = t.name, a = r.mainAxis, s = a === void 0 ? !0 : a, o = r.altAxis, i = o === void 0 ? !1 : o, f = r.boundary, u = r.rootBoundary, h = r.altBoundary, g = r.padding, C = r.tether, E = C === void 0 ? !0 : C, S = r.tetherOffset, D = S === void 0 ? 0 : S, x = Ua(e, {
    boundary: f,
    rootBoundary: u,
    padding: g,
    altBoundary: h
  }), F = lr(e.placement), M = Qn(e.placement), j = !M, U = Pi(F), B = H6(U), W = e.modifiersData.popperOffsets, G = e.rects.reference, K = e.rects.popper, te = typeof D == "function" ? D(Object.assign({}, e.rects, {
    placement: e.placement
  })) : D, se = typeof te == "number" ? {
    mainAxis: te,
    altAxis: te
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, te), q = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, oe = {
    x: 0,
    y: 0
  };
  if (!!W) {
    if (s) {
      var I, d = U === "y" ? Ut : Pt, m = U === "y" ? Yt : Xt, y = U === "y" ? "height" : "width", w = W[U], A = w + x[d], T = w - x[m], P = E ? -K[y] / 2 : 0, p = M === Xn ? G[y] : K[y], c = M === Xn ? -K[y] : -G[y], b = e.elements.arrow, k = E && b ? Ui(b) : {
        width: 0,
        height: 0
      }, l = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : qf(), v = l[d], L = l[m], _ = Aa(0, G[y], k[y]), H = j ? G[y] / 2 - P - _ - v - se.mainAxis : p - _ - v - se.mainAxis, Y = j ? -G[y] / 2 + P + _ + L + se.mainAxis : c + _ + L + se.mainAxis, $ = e.elements.arrow && Va(e.elements.arrow), N = $ ? U === "y" ? $.clientTop || 0 : $.clientLeft || 0 : 0, he = (I = q == null ? void 0 : q[U]) != null ? I : 0, z = w + H - he - N, Z = w + Y - he, ve = Aa(E ? Is(A, z) : A, w, E ? xn(T, Z) : T);
      W[U] = ve, oe[U] = ve - w;
    }
    if (i) {
      var le, ge = U === "x" ? Ut : Pt, lt = U === "x" ? Yt : Xt, me = W[B], Ee = B === "y" ? "height" : "width", it = me + x[ge], ye = me - x[lt], ie = [Ut, Pt].indexOf(F) !== -1, ke = (le = q == null ? void 0 : q[B]) != null ? le : 0, Se = ie ? it : me - G[Ee] - K[Ee] - ke + se.altAxis, Ce = ie ? me + G[Ee] + K[Ee] - ke - se.altAxis : ye, st = E && ie ? h6(Se, me, Ce) : Aa(E ? Se : it, me, E ? Ce : ye);
      W[B] = st, oe[B] = st - me;
    }
    e.modifiersData[n] = oe;
  }
}
const $6 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: z6,
  requiresIfExists: ["offset"]
};
function V6(t) {
  return {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  };
}
function G6(t) {
  return t === Qt(t) || !Wt(t) ? Oi(t) : V6(t);
}
function K6(t) {
  var e = t.getBoundingClientRect(), r = Jn(e.width) / t.offsetWidth || 1, n = Jn(e.height) / t.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function q6(t, e, r) {
  r === void 0 && (r = !1);
  var n = Wt(e), a = Wt(e) && K6(e), s = ln(e), o = Zn(t, a, r), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((Pr(e) !== "body" || Li(s)) && (i = G6(e)), Wt(e) ? (f = Zn(e, !0), f.x += e.clientLeft, f.y += e.clientTop) : s && (f.x = Ni(s))), {
    x: o.left + i.scrollLeft - f.x,
    y: o.top + i.scrollTop - f.y,
    width: o.width,
    height: o.height
  };
}
function Y6(t) {
  var e = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  t.forEach(function(s) {
    e.set(s.name, s);
  });
  function a(s) {
    r.add(s.name);
    var o = [].concat(s.requires || [], s.requiresIfExists || []);
    o.forEach(function(i) {
      if (!r.has(i)) {
        var f = e.get(i);
        f && a(f);
      }
    }), n.push(s);
  }
  return t.forEach(function(s) {
    r.has(s.name) || a(s);
  }), n;
}
function X6(t) {
  var e = Y6(t);
  return Ko.reduce(function(r, n) {
    return r.concat(e.filter(function(a) {
      return a.phase === n;
    }));
  }, []);
}
function J6(t) {
  var e;
  return function() {
    return e || (e = new Promise(function(r) {
      Promise.resolve().then(function() {
        e = void 0, r(t());
      });
    })), e;
  };
}
function Zr(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  return [].concat(r).reduce(function(a, s) {
    return a.replace(/%s/, s);
  }, t);
}
var un = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Z6 = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', u0 = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Q6(t) {
  t.forEach(function(e) {
    [].concat(Object.keys(e), u0).filter(function(r, n, a) {
      return a.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof e.name != "string" && console.error(Zr(un, String(e.name), '"name"', '"string"', '"' + String(e.name) + '"'));
          break;
        case "enabled":
          typeof e.enabled != "boolean" && console.error(Zr(un, e.name, '"enabled"', '"boolean"', '"' + String(e.enabled) + '"'));
          break;
        case "phase":
          Ko.indexOf(e.phase) < 0 && console.error(Zr(un, e.name, '"phase"', "either " + Ko.join(", "), '"' + String(e.phase) + '"'));
          break;
        case "fn":
          typeof e.fn != "function" && console.error(Zr(un, e.name, '"fn"', '"function"', '"' + String(e.fn) + '"'));
          break;
        case "effect":
          e.effect != null && typeof e.effect != "function" && console.error(Zr(un, e.name, '"effect"', '"function"', '"' + String(e.fn) + '"'));
          break;
        case "requires":
          e.requires != null && !Array.isArray(e.requires) && console.error(Zr(un, e.name, '"requires"', '"array"', '"' + String(e.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(e.requiresIfExists) || console.error(Zr(un, e.name, '"requiresIfExists"', '"array"', '"' + String(e.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + e.name + '" modifier, valid properties are ' + u0.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      e.requires && e.requires.forEach(function(n) {
        t.find(function(a) {
          return a.name === n;
        }) == null && console.error(Zr(Z6, String(e.name), n, n));
      });
    });
  });
}
function e4(t, e) {
  var r = /* @__PURE__ */ new Set();
  return t.filter(function(n) {
    var a = e(n);
    if (!r.has(a))
      return r.add(a), !0;
  });
}
function t4(t) {
  var e = t.reduce(function(r, n) {
    var a = r[n.name];
    return r[n.name] = a ? Object.assign({}, a, n, {
      options: Object.assign({}, a.options, n.options),
      data: Object.assign({}, a.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(e).map(function(r) {
    return e[r];
  });
}
var h0 = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", r4 = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", m0 = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function p0() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return !e.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function n4(t) {
  t === void 0 && (t = {});
  var e = t, r = e.defaultModifiers, n = r === void 0 ? [] : r, a = e.defaultOptions, s = a === void 0 ? m0 : a;
  return function(i, f, u) {
    u === void 0 && (u = s);
    var h = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, m0, s),
      modifiersData: {},
      elements: {
        reference: i,
        popper: f
      },
      attributes: {},
      styles: {}
    }, g = [], C = !1, E = {
      state: h,
      setOptions: function(F) {
        var M = typeof F == "function" ? F(h.options) : F;
        D(), h.options = Object.assign({}, s, h.options, M), h.scrollParents = {
          reference: In(i) ? wa(i) : i.contextElement ? wa(i.contextElement) : [],
          popper: wa(f)
        };
        var j = X6(t4([].concat(n, h.options.modifiers)));
        if (h.orderedModifiers = j.filter(function(q) {
          return q.enabled;
        }), process.env.NODE_ENV !== "production") {
          var U = e4([].concat(j, h.options.modifiers), function(q) {
            var oe = q.name;
            return oe;
          });
          if (Q6(U), lr(h.options.placement) === zs) {
            var B = h.orderedModifiers.find(function(q) {
              var oe = q.name;
              return oe === "flip";
            });
            B || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var W = hr(f), G = W.marginTop, K = W.marginRight, te = W.marginBottom, se = W.marginLeft;
          [G, K, te, se].some(function(q) {
            return parseFloat(q);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return S(), E.update();
      },
      forceUpdate: function() {
        if (!C) {
          var F = h.elements, M = F.reference, j = F.popper;
          if (!p0(M, j)) {
            process.env.NODE_ENV !== "production" && console.error(h0);
            return;
          }
          h.rects = {
            reference: q6(M, Va(j), h.options.strategy === "fixed"),
            popper: Ui(j)
          }, h.reset = !1, h.placement = h.options.placement, h.orderedModifiers.forEach(function(q) {
            return h.modifiersData[q.name] = Object.assign({}, q.data);
          });
          for (var U = 0, B = 0; B < h.orderedModifiers.length; B++) {
            if (process.env.NODE_ENV !== "production" && (U += 1, U > 100)) {
              console.error(r4);
              break;
            }
            if (h.reset === !0) {
              h.reset = !1, B = -1;
              continue;
            }
            var W = h.orderedModifiers[B], G = W.fn, K = W.options, te = K === void 0 ? {} : K, se = W.name;
            typeof G == "function" && (h = G({
              state: h,
              options: te,
              name: se,
              instance: E
            }) || h);
          }
        }
      },
      update: J6(function() {
        return new Promise(function(x) {
          E.forceUpdate(), x(h);
        });
      }),
      destroy: function() {
        D(), C = !0;
      }
    };
    if (!p0(i, f))
      return process.env.NODE_ENV !== "production" && console.error(h0), E;
    E.setOptions(u).then(function(x) {
      !C && u.onFirstUpdate && u.onFirstUpdate(x);
    });
    function S() {
      h.orderedModifiers.forEach(function(x) {
        var F = x.name, M = x.options, j = M === void 0 ? {} : M, U = x.effect;
        if (typeof U == "function") {
          var B = U({
            state: h,
            name: F,
            instance: E,
            options: j
          }), W = function() {
          };
          g.push(B || W);
        }
      });
    }
    function D() {
      g.forEach(function(x) {
        return x();
      }), g = [];
    }
    return E;
  };
}
var a4 = [C6, W6, A6, f6, L6, M6, $6, g6, P6], s4 = /* @__PURE__ */ n4({
  defaultModifiers: a4
}), o4 = typeof Element < "u", i4 = typeof Map == "function", c4 = typeof Set == "function", d4 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function us(t, e) {
  if (t === e)
    return !0;
  if (t && e && typeof t == "object" && typeof e == "object") {
    if (t.constructor !== e.constructor)
      return !1;
    var r, n, a;
    if (Array.isArray(t)) {
      if (r = t.length, r != e.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (!us(t[n], e[n]))
          return !1;
      return !0;
    }
    var s;
    if (i4 && t instanceof Map && e instanceof Map) {
      if (t.size !== e.size)
        return !1;
      for (s = t.entries(); !(n = s.next()).done; )
        if (!e.has(n.value[0]))
          return !1;
      for (s = t.entries(); !(n = s.next()).done; )
        if (!us(n.value[1], e.get(n.value[0])))
          return !1;
      return !0;
    }
    if (c4 && t instanceof Set && e instanceof Set) {
      if (t.size !== e.size)
        return !1;
      for (s = t.entries(); !(n = s.next()).done; )
        if (!e.has(n.value[0]))
          return !1;
      return !0;
    }
    if (d4 && ArrayBuffer.isView(t) && ArrayBuffer.isView(e)) {
      if (r = t.length, r != e.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (t[n] !== e[n])
          return !1;
      return !0;
    }
    if (t.constructor === RegExp)
      return t.source === e.source && t.flags === e.flags;
    if (t.valueOf !== Object.prototype.valueOf)
      return t.valueOf() === e.valueOf();
    if (t.toString !== Object.prototype.toString)
      return t.toString() === e.toString();
    if (a = Object.keys(t), r = a.length, r !== Object.keys(e).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(e, a[n]))
        return !1;
    if (o4 && t instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((a[n] === "_owner" || a[n] === "__v" || a[n] === "__o") && t.$$typeof) && !us(t[a[n]], e[a[n]]))
        return !1;
    return !0;
  }
  return t !== t && e !== e;
}
var f4 = function(e, r) {
  try {
    return us(e, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
}, l4 = [], u4 = function(e, r, n) {
  n === void 0 && (n = {});
  var a = ee.useRef(null), s = {
    onFirstUpdate: n.onFirstUpdate,
    placement: n.placement || "bottom",
    strategy: n.strategy || "absolute",
    modifiers: n.modifiers || l4
  }, o = ee.useState({
    styles: {
      popper: {
        position: s.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), i = o[0], f = o[1], u = ee.useMemo(function() {
    return {
      name: "updateState",
      enabled: !0,
      phase: "write",
      fn: function(E) {
        var S = E.state, D = Object.keys(S.elements);
        ml.flushSync(function() {
          f({
            styles: n0(D.map(function(x) {
              return [x, S.styles[x] || {}];
            })),
            attributes: n0(D.map(function(x) {
              return [x, S.attributes[x]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []), h = ee.useMemo(function() {
    var C = {
      onFirstUpdate: s.onFirstUpdate,
      placement: s.placement,
      strategy: s.strategy,
      modifiers: [].concat(s.modifiers, [u, {
        name: "applyStyles",
        enabled: !1
      }])
    };
    return f4(a.current, C) ? a.current || C : (a.current = C, C);
  }, [s.onFirstUpdate, s.placement, s.strategy, s.modifiers, u]), g = ee.useRef();
  return a0(function() {
    g.current && g.current.setOptions(h);
  }, [h]), a0(function() {
    if (!(e == null || r == null)) {
      var C = n.createPopper || s4, E = C(e, r, h);
      return g.current = E, function() {
        E.destroy(), g.current = null;
      };
    }
  }, [e, r, n.createPopper]), {
    state: g.current ? g.current.state : null,
    styles: i.styles,
    attributes: i.attributes,
    update: g.current ? g.current.update : null,
    forceUpdate: g.current ? g.current.forceUpdate : null
  };
};
function h4(t, e, r = !0) {
  const n = dr();
  yt(() => {
    n.current = t;
  }, [t]), yt(() => {
    function a() {
      const s = n.current;
      s && s();
    }
    if (e !== null) {
      r && a();
      const s = setInterval(a, e);
      return () => clearInterval(s);
    }
  }, [e, r]);
}
const m4 = J.div`
  z-index: 9999;

  visibility: ${(t) => t.show ? "visible" : "hidden"};
  opacity: ${(t) => t.show ? 0.95 : 0};
  transition: visibility 150ms linear, opacity 150ms linear;

  background: ${({
  theme: t
}) => t.dialog};
  border: 1px solid transparent;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.32);
  color: ${({
  theme: t
}) => t.subText};
  border-radius: 16px;
  font-family: ${({
  theme: t
}) => t.fontFamily || '"Work Sans", "Inter var", sans-serif'};
`, p4 = J.div`
  display: inline-block;
`, b4 = J.div`
  width: 12px;
  height: 12px;
  z-index: 9998;

  ::before {
    position: absolute;
    width: 12px;
    height: 12px;
    z-index: 9998;

    content: '';
    border: 1px solid transparent;
    transform: rotate(45deg);
    background: ${({
  theme: t
}) => t.dialog};
  }

  &.arrow-top {
    bottom: -7px;
    ::before {
      border-top: none;
      border-left: none;
    }
  }

  &.arrow-bottom {
    top: -7px;
    ::before {
      border-bottom: none;
      border-right: none;
    }
  }

  &.arrow-left {
    right: -7px;

    ::before {
      border-bottom: none;
      border-left: none;
    }
  }

  &.arrow-right {
    left: -7px;
    ::before {
      border-right: none;
      border-top: none;
    }
  }
`;
function g4({
  content: t,
  show: e,
  children: r,
  placement: n = "auto",
  noArrow: a = !1
}) {
  var D, x;
  const [s, o] = Ae(null), [i, f] = Ae(null), [u, h] = Ae(null), {
    styles: g,
    update: C,
    attributes: E
  } = u4(s, i, {
    placement: n,
    strategy: "fixed",
    modifiers: [{
      name: "offset",
      options: {
        offset: [8, 8]
      }
    }, {
      name: "arrow",
      options: {
        element: u
      }
    }]
  }), S = on(() => {
    C && C();
  }, [C]);
  return h4(S, e ? 100 : null), /* @__PURE__ */ X(fr, {
    children: [/* @__PURE__ */ O(p4, {
      ref: o,
      children: r
    }), /* @__PURE__ */ O(zf, {
      children: /* @__PURE__ */ X(m4, {
        show: e,
        ref: f,
        style: g.popper,
        ...E.popper,
        children: [t, a || /* @__PURE__ */ O(b4, {
          className: `arrow-${(x = (D = E.popper) == null ? void 0 : D["data-popper-placement"]) != null ? x : ""}`,
          ref: h,
          style: g.arrow,
          ...E.arrow
        })]
      })
    })]
  });
}
const x4 = J.div`
  width: ${({
  width: t
}) => t || "228px"};
  padding: 0.6rem 1rem;
  line-height: 150%;
  font-weight: 400;
  font-size: ${({
  size: t
}) => t || 14}px;
`;
function y4({
  text: t,
  width: e,
  size: r,
  ...n
}) {
  return /* @__PURE__ */ O(g4, {
    content: t ? /* @__PURE__ */ O(x4, {
      width: e,
      size: r,
      children: t
    }) : null,
    ...n
  });
}
const v4 = J.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  outline: none;
  cursor: default;
  border-radius: 36px;
  color: ${({
  theme: t
}) => t.subText};

  :hover,
  :focus {
    opacity: 0.7;
  }
`, A4 = J.span`
  display: inline-flex;
  justify-content: center;
  margin-left: 0.25rem;
  align-items: center;
  line-height: 100%;
  vertical-align: middle;
`;
function $r({
  text: t,
  size: e = 14,
  placement: r,
  style: n,
  color: a
}) {
  const [s, o] = Ae(!1), i = on(() => o(!0), [o]), f = on(() => o(!1), [o]);
  return /* @__PURE__ */ O(A4, {
    style: n,
    children: /* @__PURE__ */ O(y4, {
      text: t,
      show: s,
      placement: r,
      size: e,
      children: /* @__PURE__ */ O(v4, {
        onClick: i,
        onMouseEnter: i,
        onMouseLeave: f,
        children: /* @__PURE__ */ O(Hf, {
          style: {
            color: a,
            width: e,
            height: e
          }
        })
      })
    })
  });
}
const vo = J.div`
  font-size: 0.75rem;
  text-align: left;
`, w4 = J.input`
  background: ${({
  theme: t,
  isActive: e
}) => e ? t.dialog : t.secondary};
  border: none;
  outline: none;
  color: ${({
  theme: t
}) => t.text};
  text-align: right;
  width: 100%;
  font-size: 12px;
  padding: 0;

  :focus {
    background: ${({
  theme: t
}) => t.dialog};
  }
`, C4 = J.div`
  border-radius: 999px;
  margin-top: 8px;
  background: ${({
  theme: t
}) => t.secondary};
  padding: 2px;
  display: flex;
`, ua = J.div`
  position: relative;
  border-radius: 999px;
  color: ${({
  theme: t,
  isActive: e
}) => e ? t.text : t.subText};
  font-size: 12px;
  padding: 4px;
  font-weight: 500;
  flex: 2;
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: center;
  background: ${({
  theme: t,
  isActive: e
}) => e ? t.dialog : t.secondary};
  cursor: pointer;
  :hover {
    background: ${({
  theme: t
}) => t.dialog};
    input {
      background: ${({
  theme: t
}) => t.dialog};
    }
  }
`, b0 = J.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`, E4 = J.div`
  display: flex;
  padding: 6px 8px;
  gap: 4px;
  border-radius: 999px;
  background: ${({
  theme: t
}) => t.secondary};
  color: ${({
  theme: t
}) => t.text};
  font-size: 12px;
  font-weight: 500;
  text-align: right;

  input {
    border: none;
    outline: none;
    padding: 0;
    background: transparent;
    text-align: right;
    color: ${({
  theme: t
}) => t.text};
  }
`, I4 = 1e4, k4 = 2e3, Qf = (t) => Math.round(Number.parseFloat(t) * 100), S4 = (t) => {
  if (t === "")
    return {
      isValid: !0
    };
  const e = /^\s*([0-9]+)(\.\d+)?\s*$/;
  if (!t.match(e))
    return {
      isValid: !1,
      message: "Enter a valid slippage percentage"
    };
  const r = Qf(t);
  return Number.isNaN(r) ? {
    isValid: !1,
    message: "Enter a valid slippage percentage"
  } : r < 0 ? {
    isValid: !1,
    message: "Enter a valid slippage percentage"
  } : r < 50 ? {
    isValid: !0,
    message: "Your transaction may fail"
  } : r > k4 ? {
    isValid: !1,
    message: "Enter a smaller slippage percentage"
  } : r > 500 ? {
    isValid: !0,
    message: "Your transaction may be frontrun"
  } : {
    isValid: !0
  };
};
function D4({
  slippage: t,
  setSlippage: e,
  deadline: r,
  setDeadline: n,
  allDexes: a,
  excludedDexes: s,
  onShowSource: o
}) {
  const [i, f] = Ae(() => [5, 10, 50, 100].includes(t) ? "" : (t * 100 / I4).toString()), u = Pa(), [h, g] = Ae(!1), {
    isValid: C,
    message: E
  } = S4(i);
  return /* @__PURE__ */ X(fr, {
    children: [/* @__PURE__ */ X("div", {
      children: [/* @__PURE__ */ X(vo, {
        children: ["Max Slippage", /* @__PURE__ */ O($r, {
          color: u.text,
          text: "Transaction will revert if there is an adverse rate change that is higher than this %"
        })]
      }), /* @__PURE__ */ X(C4, {
        children: [/* @__PURE__ */ O(ua, {
          isActive: t === 5,
          onClick: () => e(5),
          children: "0.05%"
        }), /* @__PURE__ */ O(ua, {
          isActive: t === 10,
          onClick: () => e(10),
          children: "0.1%"
        }), /* @__PURE__ */ O(ua, {
          isActive: t === 50,
          onClick: () => e(50),
          children: "0.5%"
        }), /* @__PURE__ */ O(ua, {
          isActive: t === 100,
          onClick: () => e(100),
          children: "1%"
        }), /* @__PURE__ */ X(ua, {
          isActive: ![5, 10, 50, 100].includes(t),
          style: {
            flex: 3,
            background: h ? u.dialog : void 0,
            border: E ? C ? `1px solid ${u.warning}` : `1px solid ${u.error}` : void 0
          },
          children: [E && /* @__PURE__ */ O(V0, {
            style: {
              position: "absolute",
              top: 2,
              left: 4,
              width: 20,
              height: 20,
              color: C ? u.warning : u.error
            }
          }), /* @__PURE__ */ O(w4, {
            isActive: ![5, 10, 50, 100].includes(t),
            placeholder: "Custom",
            onFocus: () => g(!0),
            onBlur: () => {
              g(!1), C && e(Qf(i));
            },
            value: i,
            onChange: (S) => f(S.target.value)
          }), /* @__PURE__ */ O("span", {
            children: "%"
          })]
        })]
      }), E && /* @__PURE__ */ O("div", {
        style: {
          fontSize: "12px",
          color: C ? u.warning : u.error,
          textAlign: "left",
          marginTop: "4px"
        },
        children: E
      })]
    }), /* @__PURE__ */ X(b0, {
      children: [/* @__PURE__ */ X(vo, {
        children: ["Transaction Time Limit", /* @__PURE__ */ O($r, {
          color: u.text,
          text: "Transaction will revert if it is pending for longer than the indicated time"
        })]
      }), /* @__PURE__ */ X(E4, {
        children: [/* @__PURE__ */ O("input", {
          maxLength: 5,
          placeholder: "20",
          value: r ? r.toString() : "",
          style: {
            fontSize: "12px"
          },
          onChange: (S) => {
            const D = +S.target.value.trim().replace(/[^0-9.]/g, "").replace(/(\..*?)\..*/g, "$1").replace(/^0[^.]/, "0");
            n(D);
          }
        }), /* @__PURE__ */ O("span", {
          style: {
            color: u.subText
          },
          children: "mins"
        })]
      })]
    }), /* @__PURE__ */ X(b0, {
      children: [/* @__PURE__ */ X(vo, {
        children: ["Liquidity Sources", /* @__PURE__ */ O($r, {
          color: u.text,
          text: "Your trade is routed through one or more of these liquidity sources"
        })]
      }), /* @__PURE__ */ X("div", {
        role: "button",
        onClick: o,
        style: {
          alignItems: "center",
          display: "flex",
          fontSize: 12,
          fontWeight: 500,
          gap: 4,
          cursor: "pointer"
        },
        children: [a.length - s.length || a.length, " out of ", a.length, " selected", /* @__PURE__ */ O($0, {
          style: {
            transform: "rotate(-180deg)",
            width: "16px",
            color: u.subText
          }
        })]
      })]
    })]
  });
}
const B4 = si`
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`, F4 = J.svg`
  ${({
  spinning: t
}) => t ? Ss`
          animation-name: ${B4};
          animation-duration: 696ms;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        ` : ""}
`, R4 = ({
  spinning: t,
  countdown: e
}) => {
  const r = Pa();
  return /* @__PURE__ */ X(F4, {
    spinning: t,
    id: "arrow_loading",
    xmlns: "http://www.w3.org/2000/svg",
    color: r.accent,
    viewBox: "2 2 20 20",
    width: "32",
    height: "32",
    children: [/* @__PURE__ */ O("path", {
      stroke: "none",
      fill: r.accent + "66",
      d: "M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z"
    }), /* @__PURE__ */ X("defs", {
      children: [/* @__PURE__ */ O("path", {
        id: "arrow",
        stroke: "none",
        fill: "none",
        d: "M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z"
      }), /* @__PURE__ */ O("clipPath", {
        id: "arrow-clip",
        children: /* @__PURE__ */ O("use", {
          xlinkHref: "#arrow"
        })
      })]
    }), /* @__PURE__ */ O("g", {
      clipPath: "url(#arrow-clip)",
      children: /* @__PURE__ */ O("circle", {
        cx: "12",
        cy: "12",
        r: "5",
        transform: "rotate(365,12,12)",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "16",
        strokeDasharray: "30",
        strokeDashoffset: t || !e ? 0 : -30 + e / 1e4 * 30
      })
    })]
  });
}, _4 = J.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`, T4 = J.div`
  font-size: 0.75rem;
  font-weight: 500;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  color: ${({
  theme: t
}) => t.accent};
`;
function M4({
  trade: t,
  onRefresh: e,
  loading: r
}) {
  const [n, a] = Ae(0);
  return yt(() => {
    a(!r && !!t ? 1e4 : 0);
  }, [r, t]), yt(() => {
    if (n > 0) {
      const s = setInterval(() => {
        const o = n - 10;
        a(o), o === 10 && e();
      }, 10);
      return () => {
        clearInterval(s);
      };
    }
  }, [n, e]), /* @__PURE__ */ X(_4, {
    role: "button",
    onClick: e,
    children: [/* @__PURE__ */ O(R4, {
      spinning: r,
      countdown: n
    }), !!n && !r && /* @__PURE__ */ O(T4, {
      children: (n / 1e3).toFixed()
    })]
  });
}
const Ao = (t) => /* @__PURE__ */ ee.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ ee.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.0714 3.15544L13.6916 9.28884C14.582 10.7999 13.4384 12.6667 11.6193 12.6667H4.38002C2.5621 12.6667 1.41736 10.801 2.30892 9.28998L5.92915 3.15659C6.83631 1.61466 9.1618 1.61466 10.0714 3.15544Z", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ ee.createElement("path", { d: "M7.99992 7.33333V5.33333", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ ee.createElement("path", { d: "M7.99926 9.88C7.9326 9.88 7.87926 9.93467 7.8806 10C7.8806 10.0667 7.93526 10.12 8.0006 10.12C8.06593 10.12 8.11926 10.0653 8.11926 10C8.11926 9.93467 8.06593 9.88 7.99926 9.88", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })), Xo = (t) => /* @__PURE__ */ ee.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "SwapSettingsPanel__BackIconWrapper-sc-riij1g-0 LgspM", ...t }, /* @__PURE__ */ ee.createElement("line", { x1: 19, y1: 12, x2: 5, y2: 12 }), /* @__PURE__ */ ee.createElement("polyline", { points: "12 19 5 12 12 5" })), Jo = (t) => /* @__PURE__ */ ee.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ ee.createElement("g", { clipPath: "url(#clip0_1393_3583)" }, /* @__PURE__ */ ee.createElement("path", { d: "M12 12.6667H4C3.63333 12.6667 3.33333 12.3667 3.33333 12V4C3.33333 3.63333 3.63333 3.33333 4 3.33333H7.33333C7.7 3.33333 8 3.03333 8 2.66667C8 2.3 7.7 2 7.33333 2H3.33333C2.59333 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V8.66667C14 8.3 13.7 8 13.3333 8C12.9667 8 12.6667 8.3 12.6667 8.66667V12C12.6667 12.3667 12.3667 12.6667 12 12.6667ZM9.33333 2.66667C9.33333 3.03333 9.63333 3.33333 10 3.33333H11.7267L5.64 9.42C5.38 9.68 5.38 10.1 5.64 10.36C5.9 10.62 6.32 10.62 6.58 10.36L12.6667 4.27333V6C12.6667 6.36667 12.9667 6.66667 13.3333 6.66667C13.7 6.66667 14 6.36667 14 6V2.66667C14 2.3 13.7 2 13.3333 2H10C9.63333 2 9.33333 2.3 9.33333 2.66667Z", fill: "currentColor" })), /* @__PURE__ */ ee.createElement("defs", null, /* @__PURE__ */ ee.createElement("clipPath", { id: "clip0_1393_3583" }, /* @__PURE__ */ ee.createElement("rect", { width: 16, height: 16, fill: "currentColor" })))), el = (t) => /* @__PURE__ */ ee.createElement("svg", { width: 92, height: 92, viewBox: "0 0 92 92", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ ee.createElement("circle", { cx: 46.5111, cy: 46.5111, r: 37.3333, stroke: "currentColor", strokeWidth: 2 }), /* @__PURE__ */ ee.createElement("path", { d: "M25.0483 46.1748L39.5042 60.8219L67.5898 32.7832", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" })), tl = (t) => /* @__PURE__ */ ee.createElement("svg", { width: 92, height: 92, viewBox: "0 0 92 92", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ ee.createElement("path", { d: "M40.4664 14.797L7.99811 69.0003C7.32869 70.1596 6.97448 71.4739 6.97073 72.8126C6.96698 74.1513 7.31382 75.4676 7.97674 76.6306C8.63966 77.7937 9.59556 78.7628 10.7493 79.4417C11.9031 80.1206 13.2145 80.4856 14.5531 80.5003H79.4898C80.8284 80.4856 82.1398 80.1206 83.2936 79.4417C84.4473 78.7628 85.4032 77.7937 86.0661 76.6306C86.7291 75.4676 87.0759 74.1513 87.0722 72.8126C87.0684 71.4739 86.7142 70.1596 86.0448 69.0003L53.5764 14.797C52.8931 13.6704 51.9309 12.7389 50.7827 12.0925C49.6345 11.446 48.3391 11.1064 47.0214 11.1064C45.7038 11.1064 44.4084 11.446 43.2602 12.0925C42.112 12.7389 41.1498 13.6704 40.4664 14.797V14.797Z", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ ee.createElement("path", { d: "M47.0225 34.5V49.8333", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ ee.createElement("path", { d: "M47.0225 65.1665H47.06", stroke: "currentColor", strokeWidth: 4, strokeLinecap: "round", strokeLinejoin: "round" })), U4 = [
  "user rejected transaction",
  "User declined to send the transaction",
  "user denied transaction",
  "you must accept"
].map((t) => t.toLowerCase());
function P4(t) {
  var r, n;
  const e = String(
    typeof t == "string" ? t : (t == null ? void 0 : t.message) || (t == null ? void 0 : t.code) || (t == null ? void 0 : t.errorMessage) || ""
  ).toLowerCase();
  return [4001, "ACTION_REJECTED", -32050].map(String).includes((n = (r = t == null ? void 0 : t.code) == null ? void 0 : r.toString) == null ? void 0 : n.call(r)) || [
    4001,
    "Request rejected",
    "Error: User closed modal",
    "The transaction was cancelled",
    "Error: User closed modal"
  ].map(String).includes(e) || U4.some((a) => {
    var s;
    return (s = e == null ? void 0 : e.includes) == null ? void 0 : s.call(e, a);
  });
}
function O4(t) {
  const e = t || "";
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function N4(t) {
  var r;
  const e = ((r = t == null ? void 0 : t.toLowerCase) == null ? void 0 : r.call(t)) || "";
  if (!e || e.includes("router: expired"))
    return "An error occurred. Refresh the page and try again ";
  if (e.includes("mintotalamountout") || e.includes("err_limit_out") || e.includes("return amount is not enough") || e.includes("code=call_exception") || e.includes("none of the calls threw an error"))
    return "An error occurred. Try refreshing the price rate or increase max slippage";
  if (e.includes("header not found") || e.includes("swap failed"))
    return "An error occurred. Refresh the page and try again. If the issue still persists, it might be an issue with your RPC node settings in Metamask.";
  if (P4(e))
    return "User rejected the transaction.";
  if (e.includes("insufficient"))
    return "An error occurred. Please try increasing max slippage";
  if (e.includes("permit"))
    return "An error occurred. Invalid Permit Signature";
  if (e.includes("burn amount exceeds balance"))
    return "Insufficient fee rewards amount, try to remove your liquidity without claiming fees for now and you can try to claim it later";
  if (e === "[object Object]")
    return "Something went wrong. Please try again";
}
const L4 = [
  {
    pattern: /{"originalError":.+"message":"execution reverted: ([^"]+)"/,
    getMessage: (t) => t[1]
  },
  { pattern: /^([\w ]*\w+) \(.+?\)$/, getMessage: (t) => t[1] },
  { pattern: /"message": ?"[^"]+?"/, getMessage: (t) => t[1] }
];
function j4(t) {
  const e = L4.find((r) => r.pattern.exec(t));
  if (e)
    return O4(e.getMessage(e.pattern.exec(t)));
}
function W4(t) {
  const e = typeof t == "string" ? t : t.message, r = N4(e);
  if (r)
    return r;
  if (e.length < 100)
    return e;
  const n = j4(e);
  return n || "An error occurred";
}
const H4 = J(el)`
  color: ${({
  theme: t
}) => t.success};
`, g0 = J(tl)`
  color: ${({
  theme: t
}) => t.error};
`, z4 = J(Xo)`
  color: ${({
  theme: t
}) => t.subText};
  transform: rotate(-90deg);
`, x0 = J.div`
  display: flex;
  font-size: 1.5rem;
  gap: 0.5rem;
  align-items: center;
  font-weight: 500;

  img {
    border-radius: 50%;
  }
`, $4 = J.div`
  color: ${({
  theme: t
}) => t.subText};
  font-size: 0.75rem;
  text-align: left;
`, Zo = J.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: ${({
  theme: t
}) => t.buttonRadius};
  background: ${({
  theme: t
}) => t.warning + "40"};
  color: ${({
  theme: t
}) => t.warning};
  font-size: 12px;
  font-weight: 500px;
  padding: 12px;
`, V4 = J(Zo)`
  background: ${({
  theme: t
}) => t.error + "40"};
  color: ${({
  theme: t
}) => t.error};
`, y0 = J.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`, G4 = si`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, K4 = J(Uf)`
  animation: 2s ${G4} linear infinite;
  width: 94px;
  height: 94px;
  color: ${({
  theme: t
}) => t.accent};
`, v0 = J.a`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${({
  theme: t
}) => t.accent};
  font-size: 14px;
  gap: 4px;
`, ts = J.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid ${({
  theme: t
}) => t.stroke};
`, ha = J.div`
  font-size: 1rem;
  font-weight: 500;
`, q4 = J.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  gap: 6px;
  img {
    border-radius: 50%;
  }
`, A0 = J.div`
  font-size: 12px;
  color: ${({
  theme: t
}) => t.subText};
  margin-top: 12px;
`, Y4 = J.div`
  margin-top: ${({
  show: t
}) => t ? "12px" : "0"};
  max-height: ${({
  show: t
}) => t ? "200px" : "0"};
  transition: 0.2s ease-out;

  font-size: 12px;
  color: ${({
  theme: t
}) => t.subText};
  overflow-wrap: break-word;
  overflow-y: scroll;

  /* width */
  ::-webkit-scrollbar {
    display: unset;
    width: 6px;
    border-radius: 999px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 999px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({
  theme: t
}) => t.subText + "66"};
    border-radius: 999px;
  }
`, X4 = J.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
`, J4 = J(_o)`
  transform: rotate(${({
  open: t
}) => t ? "-180deg" : "0"});
  transition: all 0.2s ease;
`;
function wo(t) {
  const e = de.from(2e4), r = t.mul(de.from(2e3)).div(de.from(1e4));
  return r.gte(e) ? t.add(r) : t.add(e);
}
function Z4({
  trade: t,
  tokenInInfo: e,
  amountIn: r,
  tokenOutInfo: n,
  amountOut: a,
  rate: s,
  slippage: o,
  priceImpact: i,
  onClose: f,
  deadline: u,
  client: h,
  onTxSubmit: g
}) {
  var w;
  const C = Pa(), {
    provider: E,
    account: S,
    chainId: D
  } = Rt();
  let x = "--";
  const F = t.routeSummary.tokenIn.toLowerCase() === nt.toLowerCase() && t.routeSummary.tokenOut.toLowerCase() === gn[D].address.toLowerCase(), M = t.routeSummary.tokenOut.toLowerCase() === nt.toLowerCase() && t.routeSummary.tokenIn.toLowerCase() === gn[D].address.toLowerCase();
  a && !F && !M && (x = (Number(a) * (1 - o / 1e4)).toPrecision(8).toString());
  const [j, U] = Ae(!1), [B, W] = Ae(""), [G, K] = Ae(""), [te, se] = Ae(""), [q, oe] = Ae(!1);
  yt(() => {
    if (B) {
      const A = setInterval(() => {
        E == null || E.getTransactionReceipt(B).then((T) => {
          !T || (T.status ? K("success") : K("failed"));
        });
      }, 1e4);
      return () => {
        clearInterval(A);
      };
    }
  }, [B, E]);
  const [I, d] = Ae(null), m = R3(), y = async () => {
    d({
      amountIn: r,
      amountOut: a
    });
    try {
      if (U(!0), W(""), se(""), F) {
        if (!m)
          return;
        const b = await m.estimateGas.deposit({
          value: de.from(t.routeSummary.amountIn).toHexString()
        }), k = await m.deposit({
          value: de.from(t.routeSummary.amountIn).toHexString(),
          gasLimit: wo(b)
        });
        W((k == null ? void 0 : k.hash) || ""), g == null || g((k == null ? void 0 : k.hash) || "", k), U(!1);
        return;
      }
      if (M) {
        if (!m)
          return;
        const b = await m.estimateGas.withdraw(de.from(t.routeSummary.amountIn).toHexString()), k = await m.withdraw(de.from(t.routeSummary.amountIn).toHexString(), {
          gasLimit: wo(b)
        });
        W((k == null ? void 0 : k.hash) || ""), g == null || g((k == null ? void 0 : k.hash) || "", k), U(!1);
        return;
      }
      const A = new Date();
      A.setMinutes(A.getMinutes() + (u || 20));
      const T = await fetch(`https://aggregator-api.kyberswap.com/${Bi[D]}/api/v1/route/build`, {
        method: "POST",
        body: JSON.stringify({
          routeSummary: t.routeSummary,
          deadline: Math.floor(A.getTime() / 1e3),
          slippageTolerance: o,
          sender: S,
          recipient: S,
          source: h
        })
      }).then((b) => b.json());
      if (!T.data)
        throw new Error("Build route failed: " + JSON.stringify(T.details));
      const P = {
        from: S,
        to: t == null ? void 0 : t.routerAddress,
        data: T.data.data,
        value: de.from(e.address === nt ? t == null ? void 0 : t.routeSummary.amountIn : 0)
      }, p = await (E == null ? void 0 : E.estimateGas(P)), c = await (E == null ? void 0 : E.getSigner().sendTransaction({
        ...P,
        gasLimit: wo(p || de.from(0))
      }));
      W((c == null ? void 0 : c.hash) || ""), g == null || g((c == null ? void 0 : c.hash) || "", c), U(!1);
    } catch (A) {
      U(!1), se(A);
    }
  };
  return j || B ? /* @__PURE__ */ X(fr, {
    children: [/* @__PURE__ */ X(y0, {
      children: [G === "success" ? /* @__PURE__ */ O(H4, {}) : G === "failed" ? /* @__PURE__ */ O(g0, {}) : /* @__PURE__ */ O(K4, {}), B ? G === "success" ? /* @__PURE__ */ O(ha, {
        children: "Transaction successful"
      }) : G === "failed" ? /* @__PURE__ */ O(ha, {
        children: "Transaction failed"
      }) : /* @__PURE__ */ O(ha, {
        children: "Processing transaction"
      }) : /* @__PURE__ */ O(ha, {
        children: "Waiting For Confirmation"
      }), /* @__PURE__ */ X(q4, {
        children: [/* @__PURE__ */ O("img", {
          src: e.logoURI,
          width: "16",
          height: "16",
          alt: ""
        }), +Number(I == null ? void 0 : I.amountIn).toPrecision(6), /* @__PURE__ */ O(Xo, {
          style: {
            width: 16,
            transform: "rotate(180deg)"
          }
        }), /* @__PURE__ */ O("img", {
          src: n.logoURI,
          width: "16",
          height: "16",
          alt: ""
        }), +Number(I == null ? void 0 : I.amountOut).toPrecision(6)]
      }), !B && /* @__PURE__ */ O(A0, {
        children: "Confirm this transaction in your wallet"
      }), B && G === "" && /* @__PURE__ */ O(A0, {
        children: "Waiting for the transaction to be mined"
      })]
    }), /* @__PURE__ */ O(ts, {}), B && /* @__PURE__ */ X(v0, {
      href: `${Ta[D]}/tx/${B}`,
      target: "_blank",
      rel: "noopener norefferer",
      children: ["View transaction ", /* @__PURE__ */ O(Jo, {})]
    }), /* @__PURE__ */ O(Ln, {
      style: {
        marginTop: 0
      },
      onClick: f,
      children: "Close"
    })]
  }) : te ? /* @__PURE__ */ X(fr, {
    children: [/* @__PURE__ */ X(y0, {
      children: [/* @__PURE__ */ O(g0, {}), /* @__PURE__ */ O(ha, {
        children: W4(te)
      })]
    }), /* @__PURE__ */ X("div", {
      children: [/* @__PURE__ */ O(ts, {}), /* @__PURE__ */ X(X4, {
        role: "button",
        onClick: () => oe((A) => !A),
        children: [/* @__PURE__ */ X("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontSize: "14px"
          },
          children: [/* @__PURE__ */ O(Hf, {}), "Error details"]
        }), /* @__PURE__ */ O(J4, {
          open: q
        })]
      }), /* @__PURE__ */ O(ts, {}), /* @__PURE__ */ O(Y4, {
        show: q,
        children: ((w = te == null ? void 0 : te.data) == null ? void 0 : w.message) || (te == null ? void 0 : te.message)
      })]
    }), q && /* @__PURE__ */ O(ts, {}), B && /* @__PURE__ */ X(v0, {
      children: ["View transaction ", /* @__PURE__ */ O(Jo, {})]
    }), /* @__PURE__ */ O(Ln, {
      style: {
        marginTop: 0
      },
      onClick: f,
      children: te ? "Dismiss" : "Close"
    })]
  }) : /* @__PURE__ */ X(fr, {
    children: [/* @__PURE__ */ O(K0, {
      children: /* @__PURE__ */ X(q0, {
        onClick: f,
        role: "button",
        children: [/* @__PURE__ */ O(Xo, {}), "Confirm swap"]
      })
    }), /* @__PURE__ */ X(x0, {
      children: [/* @__PURE__ */ O("img", {
        src: e.logoURI,
        width: "28",
        alt: "",
        height: "28",
        onError: ({
          currentTarget: A
        }) => {
          A.onerror = null, A.src = new URL("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iQ3VycmVuY3lMb2dvX19TdHlsZWRMb2dvLXNjLTFxODJydWEtMSBncHhsS2EiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIj48L2NpcmNsZT48cGF0aCBkPSJNOS4wOSA5YTMgMyAwIDAgMSA1LjgzIDFjMCAyLTMgMy0zIDMiPjwvcGF0aD48bGluZSB4MT0iMTIiIHkxPSIxNyIgeDI9IjEyLjAxIiB5Mj0iMTciPjwvbGluZT48L3N2Zz4K", self.location).href;
        }
      }), +Number(r).toPrecision(10), /* @__PURE__ */ O("div", {
        children: e.symbol
      })]
    }), /* @__PURE__ */ O(z4, {}), /* @__PURE__ */ X(x0, {
      children: [/* @__PURE__ */ O("img", {
        alt: "",
        src: n.logoURI,
        width: "28",
        height: "28",
        onError: ({
          currentTarget: A
        }) => {
          A.onerror = null, A.src = new URL("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iQ3VycmVuY3lMb2dvX19TdHlsZWRMb2dvLXNjLTFxODJydWEtMSBncHhsS2EiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIj48L2NpcmNsZT48cGF0aCBkPSJNOS4wOSA5YTMgMyAwIDAgMSA1LjgzIDFjMCAyLTMgMy0zIDMiPjwvcGF0aD48bGluZSB4MT0iMTIiIHkxPSIxNyIgeDI9IjEyLjAxIiB5Mj0iMTciPjwvbGluZT48L3N2Zz4K", self.location).href;
        }
      }), +Number(a).toPrecision(10), /* @__PURE__ */ O("div", {
        children: n.symbol
      })]
    }), F || M ? null : /* @__PURE__ */ X($4, {
      children: ["Output is estimated. You will receive at least ", x, " ", n.symbol, " or the transaction will revert."]
    }), /* @__PURE__ */ X(G0, {
      children: [/* @__PURE__ */ X(Qr, {
        children: [/* @__PURE__ */ O(en, {
          children: "Current Price"
        }), /* @__PURE__ */ X(Wr, {
          children: ["1 ", e.symbol, " = ", parseFloat(s.toPrecision(6)), " ", n.symbol]
        })]
      }), /* @__PURE__ */ X(Qr, {
        children: [/* @__PURE__ */ X(en, {
          children: ["Minimum Received", /* @__PURE__ */ O($r, {
            text: "Minimum amount you will receive or your transaction will revert"
          })]
        }), /* @__PURE__ */ X(Wr, {
          children: [x, " ", x === "--" ? "" : n.symbol]
        })]
      }), /* @__PURE__ */ X(Qr, {
        children: [/* @__PURE__ */ X(en, {
          children: ["Gas Fee", /* @__PURE__ */ O($r, {
            text: "Estimated network fee for your transaction"
          })]
        }), F || M ? /* @__PURE__ */ O(Wr, {
          children: "--"
        }) : /* @__PURE__ */ X(Wr, {
          children: ["$", (+t.routeSummary.gasUsd).toPrecision(4)]
        })]
      }), /* @__PURE__ */ X(Qr, {
        children: [/* @__PURE__ */ X(en, {
          children: ["Price Impact", /* @__PURE__ */ O($r, {
            text: "Estimated change in price due to the size of your transaction"
          })]
        }), /* @__PURE__ */ O(Wr, {
          style: {
            color: i > 15 ? C.error : i > 5 ? C.warning : C.text
          },
          children: i === -1 ? "--" : i > 0.01 ? i.toFixed(3) + "%" : "< 0.01%"
        })]
      }), /* @__PURE__ */ X(Qr, {
        children: [/* @__PURE__ */ O(en, {
          children: "Slippage"
        }), /* @__PURE__ */ X(Wr, {
          children: [o * 100 / 1e4, "%"]
        })]
      })]
    }), /* @__PURE__ */ X("div", {
      style: {
        marginTop: "auto"
      },
      children: [F || M ? null : i > 15 ? /* @__PURE__ */ X(V4, {
        children: [/* @__PURE__ */ O(Ao, {}), " Price Impact is Very High"]
      }) : i > 5 ? /* @__PURE__ */ X(Zo, {
        children: [/* @__PURE__ */ O(Ao, {}), " Price Impact is High"]
      }) : i === -1 ? /* @__PURE__ */ X(Zo, {
        children: [/* @__PURE__ */ O(Ao, {}), "Unable to calculate Price Impact"]
      }) : null, /* @__PURE__ */ X(Ln, {
        onClick: y,
        children: ["Confirm ", F ? "wrap" : M ? "unwrap" : "swap"]
      })]
    })]
  });
}
const Q4 = J.div`
  width: 100%;
  height: 364px;
  max-height: 364px;
  overflow-y: scroll;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;

  /* width */
  ::-webkit-scrollbar {
    display: unset;
    width: 6px;
    border-radius: 999px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 999px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({
  theme: t
}) => t.subText + "66"};
    border-radius: 999px;
  }
`, Qo = J.input`
  position: relative;
  transform: scale(1.35);
  accent-color: ${({
  theme: t
}) => t.accent};

  :indeterminate::before {
    content: '';
    display: block;
    color: ${({
  theme: t
}) => t.text};
    width: 13px;
    height: 13px;
    background-color: ${({
  theme: t
}) => t.accent};
    border-radius: 2px;
  }
  :indeterminate::after {
    content: '';
    display: block;
    width: 7px;
    height: 7px;
    border: solid ${({
  theme: t
}) => t.text};
    border-width: 2px 0 0 0;
    position: absolute;
    top: 5.5px;
    left: 3px;
  }
`, eb = J.div`
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  background: ${({
  theme: t
}) => t.secondary};
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  padding: 12px;
  color: ${({
  theme: t
}) => t.subText};
  display: flex;
  gap: 1rem;
  align-items: center;
`, tb = J.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  column-gap: 16px;
  padding: 12px;
`, rb = J.div`
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;

  img {
    width: 100%;
    height: auto;
  }
`, nb = J.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${({
  theme: t
}) => t.text};
`;
function ab({
  allDexes: t,
  excludedDexes: e,
  setExcludedDexes: r
}) {
  const [n, a] = Ae(""), s = e.map((i) => i.dexId), o = dr(null);
  return yt(() => {
    !o.current || (e.length === 0 ? (o.current.indeterminate = !1, o.current.checked = !0) : e.length === t.length ? (o.current.indeterminate = !1, o.current.checked = !1) : (o.current.indeterminate = !0, o.current.checked = !1));
  }, [t.length, e.length]), /* @__PURE__ */ X(fr, {
    children: [/* @__PURE__ */ O(Of, {
      placeholder: "Search for a liquidity source",
      value: n,
      onChange: (i) => a(i.target.value)
    }), /* @__PURE__ */ X("div", {
      style: {
        flex: 1
      },
      children: [/* @__PURE__ */ X(eb, {
        children: [/* @__PURE__ */ O(Qo, {
          type: "checkbox",
          ref: o,
          onChange: (i) => {
            i.currentTarget.checked ? r([]) : r(t);
          }
        }), "Liquidity Sources"]
      }), /* @__PURE__ */ O(Q4, {
        children: t.filter((i) => i.name.toLowerCase().includes(n.trim().toLowerCase())).map((i) => /* @__PURE__ */ X(tb, {
          children: [/* @__PURE__ */ O(Qo, {
            type: "checkbox",
            checked: !s.includes(i.dexId),
            onChange: (f) => {
              f.target.checked ? r(e.filter((u) => u.dexId !== i.dexId)) : r([...e, i]);
            }
          }), /* @__PURE__ */ O(rb, {
            children: /* @__PURE__ */ O("img", {
              src: i.logoURL,
              alt: "logo"
            })
          }), /* @__PURE__ */ O(nb, {
            children: i.name
          })]
        }, i.dexId))
      })]
    })]
  });
}
const sb = (t) => /* @__PURE__ */ ee.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ ee.createElement("g", { clipPath: "url(#clip0_1597_66764)" }, /* @__PURE__ */ ee.createElement("path", { d: "M10 13.3335H3.33333V4.66683C3.33333 4.30016 3.03333 4.00016 2.66667 4.00016C2.3 4.00016 2 4.30016 2 4.66683V13.3335C2 14.0668 2.6 14.6668 3.33333 14.6668H10C10.3667 14.6668 10.6667 14.3668 10.6667 14.0002C10.6667 13.6335 10.3667 13.3335 10 13.3335ZM13.3333 10.6668V2.66683C13.3333 1.9335 12.7333 1.3335 12 1.3335H6C5.26667 1.3335 4.66667 1.9335 4.66667 2.66683V10.6668C4.66667 11.4002 5.26667 12.0002 6 12.0002H12C12.7333 12.0002 13.3333 11.4002 13.3333 10.6668ZM12 10.6668H6V2.66683H12V10.6668Z", fill: "currentColor" })), /* @__PURE__ */ ee.createElement("defs", null, /* @__PURE__ */ ee.createElement("clipPath", { id: "clip0_1597_66764" }, /* @__PURE__ */ ee.createElement("rect", { width: 16, height: 16, fill: "currentColor" })))), ob = J(el)`
  width: 14px;
  height: 14px;
  circle {
    stroke-width: 6;
  }

  path {
    stroke-width: 6;
  }
`, ib = J(tl)`
  width: 24px;
  height: 24px;

  circle {
    stroke-width: 6;
  }

  path {
    stroke-width: 6;
  }
`, cb = J.div`
  padding: 1.25rem;
  gap: 12px;
  border-radius: ${({
  theme: t
}) => t.borderRadius};
  background: ${({
  theme: t
}) => t.secondary};
  display: flex;
  align-items: flex-start;
`, db = J.div`
  color: ${({
  theme: t
}) => t.subText};
  font-size: 14px;
  text-align: left;
`, fb = J.div`
  font-weight: 500;
  text-align: left;
  font-size: 20px;
`, lb = J.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-top: 8px;
  gap: 4px;
  a {
    line-height: 0;
  }
`, ub = J.div`
  border-radius: ${({
  theme: t
}) => t.borderRadius};
  background: ${({
  theme: t
}) => t.error + "44"};
  padding: 20px;
`, hb = J.div`
  display: flex;
  font-size: 20px;
  color: ${({
  theme: t
}) => t.error};
  gap: 8px;
`, mb = J.div`
  font-size: 14px;
  margin-top: 16px;
  line-height: 20px;
  text-align: left;
`, pb = J.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 20px;
  font-size: 14px;
`;
function bb({
  token: t,
  onImport: e
}) {
  const {
    chainId: r
  } = Rt(), [n, a] = Ae(!1), [s, o] = Ae(!1), {
    addToken: i
  } = Mf(), f = Pa();
  return yt(() => {
    if (s) {
      const u = setTimeout(() => {
        o(!1);
      }, 2e3);
      return () => {
        clearTimeout(u);
      };
    }
  }, [s]), /* @__PURE__ */ X(fr, {
    children: [/* @__PURE__ */ X(cb, {
      children: [/* @__PURE__ */ O(Pf, {
        style: {
          width: "44px",
          height: "44px"
        }
      }), /* @__PURE__ */ X("div", {
        children: [/* @__PURE__ */ O(fb, {
          children: t.symbol
        }), /* @__PURE__ */ O(db, {
          children: t.symbol
        }), /* @__PURE__ */ X(lb, {
          children: ["Address: ", t.address.substring(0, 6), "...", t.address.substring(36), s ? /* @__PURE__ */ O(ob, {}) : /* @__PURE__ */ O(sb, {
            style: {
              cursor: "pointer",
              width: "14px",
              height: "14px",
              color: f.text
            },
            role: "button",
            onClick: () => {
              I3(t.address), o(!0);
            }
          }), /* @__PURE__ */ O("a", {
            href: Ta[r] + "/address/" + t.address,
            target: "_blank",
            rel: "noopener norefferer noreferrer",
            children: /* @__PURE__ */ O(Jo, {
              style: {
                width: "12px",
                height: "12px"
              }
            })
          })]
        })]
      })]
    }), /* @__PURE__ */ X(ub, {
      children: [/* @__PURE__ */ X(hb, {
        children: [/* @__PURE__ */ O(ib, {}), /* @__PURE__ */ O("div", {
          children: "Trade at your own risk!"
        })]
      }), /* @__PURE__ */ X(mb, {
        children: ["Anyone can create a token, including creating fake versions of existing tokens that claim to represent projects", /* @__PURE__ */ O("br", {}), /* @__PURE__ */ O("br", {}), "If you purchase this token, you may not be able to sell it back"]
      }), /* @__PURE__ */ X(pb, {
        children: [/* @__PURE__ */ O(Qo, {
          type: "checkbox",
          checked: n,
          onChange: (u) => a(u.currentTarget.checked)
        }), " I understand"]
      })]
    }), /* @__PURE__ */ O(Ln, {
      style: {
        marginTop: "auto"
      },
      disabled: !n,
      onClick: () => {
        i(t), e();
      },
      children: "Import"
    })]
  });
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var rl = function(t, e) {
  return (rl = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var a in n)
      n.hasOwnProperty(a) && (r[a] = n[a]);
  })(t, e);
}, gb, rs, xb = (function(t) {
  /*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
  (function() {
    var e = {}.hasOwnProperty;
    function r() {
      for (var n = [], a = 0; a < arguments.length; a++) {
        var s = arguments[a];
        if (s) {
          var o = typeof s;
          if (o === "string" || o === "number")
            n.push(s);
          else if (Array.isArray(s) && s.length) {
            var i = r.apply(null, s);
            i && n.push(i);
          } else if (o === "object")
            for (var f in s)
              e.call(s, f) && s[f] && n.push(f);
        }
      }
      return n.join(" ");
    }
    t.exports ? (r.default = r, t.exports = r) : window.classNames = r;
  })();
}(rs = {
  path: gb,
  exports: {},
  require: function(t, e) {
    return function() {
      throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
    }(e == null && rs.path);
  }
}, rs.exports), rs.exports);
function ei(t, e, r) {
  var n, a, s, o, i;
  function f() {
    var h = Date.now() - o;
    h < e && h >= 0 ? n = setTimeout(f, e - h) : (n = null, r || (i = t.apply(s, a), s = a = null));
  }
  e == null && (e = 100);
  var u = function() {
    s = this, a = arguments, o = Date.now();
    var h = r && !n;
    return n || (n = setTimeout(f, e)), h && (i = t.apply(s, a), s = a = null), i;
  };
  return u.clear = function() {
    n && (clearTimeout(n), n = null);
  }, u.flush = function() {
    n && (i = t.apply(s, a), s = a = null, clearTimeout(n), n = null);
  }, u;
}
ei.debounce = ei;
var yb = ei;
(function(t, e) {
  e === void 0 && (e = {});
  var r = e.insertAt;
  if (t && typeof document < "u") {
    var n = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", r === "top" && n.firstChild ? n.insertBefore(a, n.firstChild) : n.appendChild(a), a.styleSheet ? a.styleSheet.cssText = t : a.appendChild(document.createTextNode(t));
  }
})(`.indiana-scroll-container {
  overflow: auto; }
  .indiana-scroll-container--dragging {
    scroll-behavior: auto !important; }
    .indiana-scroll-container--dragging > * {
      pointer-events: none;
      cursor: -webkit-grab;
      cursor: grab; }
  .indiana-scroll-container--hide-scrollbars {
    overflow: hidden;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    scrollbar-width: none; }
    .indiana-scroll-container--hide-scrollbars::-webkit-scrollbar {
      display: none !important;
      height: 0 !important;
      width: 0 !important;
      background: transparent !important;
      -webkit-appearance: none !important; }
  .indiana-scroll-container--native-scroll {
    overflow: auto; }

.indiana-dragging {
  cursor: -webkit-grab;
  cursor: grab; }
`);
var Co, vb = (Co = "indiana-scroll-container", function(t, e) {
  if (!t)
    return Co;
  var r;
  typeof t == "string" ? r = t : e = t;
  var n = Co;
  return r && (n += "__" + r), n + (e ? Object.keys(e).reduce(function(a, s) {
    var o = e[s];
    return o && (a += " " + (typeof o == "boolean" ? n + "--" + s : n + "--" + s + "_" + o)), a;
  }, "") : "");
}), Ab = function(t) {
  function e(r) {
    var n = t.call(this, r) || this;
    return n.onEndScroll = function() {
      n.scrolling = !1, !n.pressed && n.started && n.processEnd();
    }, n.onScroll = function(a) {
      var s = n.container.current;
      s.scrollLeft === n.scrollLeft && s.scrollTop === n.scrollTop || (n.scrolling = !0, n.processScroll(a), n.onEndScroll());
    }, n.onTouchStart = function(a) {
      var s = n.props.nativeMobileScroll;
      if (n.isDraggable(a.target))
        if (n.internal = !0, s && n.scrolling)
          n.pressed = !0;
        else {
          var o = a.touches[0];
          n.processClick(a, o.clientX, o.clientY), !s && n.props.stopPropagation && a.stopPropagation();
        }
    }, n.onTouchEnd = function(a) {
      var s = n.props.nativeMobileScroll;
      n.pressed && (!n.started || n.scrolling && s ? n.pressed = !1 : n.processEnd(), n.forceUpdate());
    }, n.onTouchMove = function(a) {
      var s = n.props.nativeMobileScroll;
      if (n.pressed && (!s || !n.isMobile)) {
        var o = a.touches[0];
        o && n.processMove(a, o.clientX, o.clientY), a.preventDefault(), n.props.stopPropagation && a.stopPropagation();
      }
    }, n.onMouseDown = function(a) {
      n.isDraggable(a.target) && n.isScrollable() && (n.internal = !0, n.props.buttons.indexOf(a.button) !== -1 && (n.processClick(a, a.clientX, a.clientY), a.preventDefault(), n.props.stopPropagation && a.stopPropagation()));
    }, n.onMouseMove = function(a) {
      n.pressed && (n.processMove(a, a.clientX, a.clientY), a.preventDefault(), n.props.stopPropagation && a.stopPropagation());
    }, n.onMouseUp = function(a) {
      n.pressed && (n.started ? n.processEnd() : (n.internal = !1, n.pressed = !1, n.forceUpdate(), n.props.onClick && n.props.onClick(a)), a.preventDefault(), n.props.stopPropagation && a.stopPropagation());
    }, n.container = Rr.createRef(), n.onEndScroll = yb(n.onEndScroll, 300), n.scrolling = !1, n.started = !1, n.pressed = !1, n.internal = !1, n.getRef = n.getRef.bind(n), n;
  }
  return function(r, n) {
    function a() {
      this.constructor = r;
    }
    rl(r, n), r.prototype = n === null ? Object.create(n) : (a.prototype = n.prototype, new a());
  }(e, t), e.prototype.componentDidMount = function() {
    var r = this.props.nativeMobileScroll, n = this.container.current;
    window.addEventListener("mouseup", this.onMouseUp), window.addEventListener("mousemove", this.onMouseMove), window.addEventListener("touchmove", this.onTouchMove, {
      passive: !1
    }), window.addEventListener("touchend", this.onTouchEnd), n.addEventListener("touchstart", this.onTouchStart, {
      passive: !1
    }), n.addEventListener("mousedown", this.onMouseDown, {
      passive: !1
    }), r && (this.isMobile = this.isMobileDevice(), this.isMobile && this.forceUpdate());
  }, e.prototype.componentWillUnmount = function() {
    window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("touchend", this.onTouchEnd);
  }, e.prototype.getElement = function() {
    return this.container.current;
  }, e.prototype.isMobileDevice = function() {
    return window.orientation !== void 0 || navigator.userAgent.indexOf("IEMobile") !== -1;
  }, e.prototype.isDraggable = function(r) {
    var n = this.props.ignoreElements;
    if (n) {
      var a = r.closest(n);
      return a === null || a.contains(this.getElement());
    }
    return !0;
  }, e.prototype.isScrollable = function() {
    var r = this.container.current;
    return r && (r.scrollWidth > r.clientWidth || r.scrollHeight > r.clientHeight);
  }, e.prototype.processClick = function(r, n, a) {
    var s = this.container.current;
    this.scrollLeft = s.scrollLeft, this.scrollTop = s.scrollTop, this.clientX = n, this.clientY = a, this.pressed = !0;
  }, e.prototype.processStart = function(r) {
    r === void 0 && (r = !0);
    var n = this.props.onStartScroll;
    this.started = !0, r && document.body.classList.add("indiana-dragging"), n && n({
      external: !this.internal
    }), this.forceUpdate();
  }, e.prototype.processScroll = function(r) {
    if (this.started) {
      var n = this.props.onScroll;
      n && n({
        external: !this.internal
      });
    } else
      this.processStart(!1);
  }, e.prototype.processMove = function(r, n, a) {
    var s = this.props, o = s.horizontal, i = s.vertical, f = s.activationDistance, u = s.onScroll, h = this.container.current;
    this.started ? (o && (h.scrollLeft -= n - this.clientX), i && (h.scrollTop -= a - this.clientY), u && u({
      external: !this.internal
    }), this.clientX = n, this.clientY = a, this.scrollLeft = h.scrollLeft, this.scrollTop = h.scrollTop) : (o && Math.abs(n - this.clientX) > f || i && Math.abs(a - this.clientY) > f) && (this.clientX = n, this.clientY = a, this.processStart());
  }, e.prototype.processEnd = function() {
    var r = this.props.onEndScroll;
    this.container.current && r && r({
      external: !this.internal
    }), this.pressed = !1, this.started = !1, this.scrolling = !1, this.internal = !1, document.body.classList.remove("indiana-dragging"), this.forceUpdate();
  }, e.prototype.getRef = function(r) {
    [this.container, this.props.innerRef].forEach(function(n) {
      n && (typeof n == "function" ? n(r) : n.current = r);
    });
  }, e.prototype.render = function() {
    var r = this.props, n = r.children, a = r.draggingClassName, s = r.className, o = r.style, i = r.hideScrollbars, f = r.component;
    return Rr.createElement(f, {
      className: xb(s, this.pressed && a, vb({
        dragging: this.pressed,
        "hide-scrollbars": i,
        "native-scroll": this.isMobile
      })),
      style: o,
      ref: this.getRef,
      onScroll: this.onScroll
    }, n);
  }, e.defaultProps = {
    nativeMobileScroll: !0,
    hideScrollbars: !0,
    activationDistance: 10,
    vertical: !0,
    horizontal: !0,
    stopPropagation: !1,
    style: {},
    component: "div",
    buttons: [0]
  }, e;
}(ll);
function wb(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var ji = wb, Cb = typeof Kt == "object" && Kt && Kt.Object === Object && Kt, Eb = Cb, Ib = Eb, kb = typeof self == "object" && self && self.Object === Object && self, Sb = Ib || kb || Function("return this")(), nl = Sb, Db = nl, Bb = function() {
  return Db.Date.now();
}, Fb = Bb, Rb = /\s/;
function _b(t) {
  for (var e = t.length; e-- && Rb.test(t.charAt(e)); )
    ;
  return e;
}
var Tb = _b, Mb = Tb, Ub = /^\s+/;
function Pb(t) {
  return t && t.slice(0, Mb(t) + 1).replace(Ub, "");
}
var Ob = Pb, Nb = nl, Lb = Nb.Symbol, al = Lb, w0 = al, sl = Object.prototype, jb = sl.hasOwnProperty, Wb = sl.toString, ma = w0 ? w0.toStringTag : void 0;
function Hb(t) {
  var e = jb.call(t, ma), r = t[ma];
  try {
    t[ma] = void 0;
    var n = !0;
  } catch {
  }
  var a = Wb.call(t);
  return n && (e ? t[ma] = r : delete t[ma]), a;
}
var zb = Hb, $b = Object.prototype, Vb = $b.toString;
function Gb(t) {
  return Vb.call(t);
}
var Kb = Gb, C0 = al, qb = zb, Yb = Kb, Xb = "[object Null]", Jb = "[object Undefined]", E0 = C0 ? C0.toStringTag : void 0;
function Zb(t) {
  return t == null ? t === void 0 ? Jb : Xb : E0 && E0 in Object(t) ? qb(t) : Yb(t);
}
var Qb = Zb;
function e8(t) {
  return t != null && typeof t == "object";
}
var t8 = e8, r8 = Qb, n8 = t8, a8 = "[object Symbol]";
function s8(t) {
  return typeof t == "symbol" || n8(t) && r8(t) == a8;
}
var o8 = s8, i8 = Ob, I0 = ji, c8 = o8, k0 = 0 / 0, d8 = /^[-+]0x[0-9a-f]+$/i, f8 = /^0b[01]+$/i, l8 = /^0o[0-7]+$/i, u8 = parseInt;
function h8(t) {
  if (typeof t == "number")
    return t;
  if (c8(t))
    return k0;
  if (I0(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = I0(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = i8(t);
  var r = f8.test(t);
  return r || l8.test(t) ? u8(t.slice(2), r ? 2 : 8) : d8.test(t) ? k0 : +t;
}
var m8 = h8, p8 = ji, Eo = Fb, S0 = m8, b8 = "Expected a function", g8 = Math.max, x8 = Math.min;
function y8(t, e, r) {
  var n, a, s, o, i, f, u = 0, h = !1, g = !1, C = !0;
  if (typeof t != "function")
    throw new TypeError(b8);
  e = S0(e) || 0, p8(r) && (h = !!r.leading, g = "maxWait" in r, s = g ? g8(S0(r.maxWait) || 0, e) : s, C = "trailing" in r ? !!r.trailing : C);
  function E(W) {
    var G = n, K = a;
    return n = a = void 0, u = W, o = t.apply(K, G), o;
  }
  function S(W) {
    return u = W, i = setTimeout(F, e), h ? E(W) : o;
  }
  function D(W) {
    var G = W - f, K = W - u, te = e - G;
    return g ? x8(te, s - K) : te;
  }
  function x(W) {
    var G = W - f, K = W - u;
    return f === void 0 || G >= e || G < 0 || g && K >= s;
  }
  function F() {
    var W = Eo();
    if (x(W))
      return M(W);
    i = setTimeout(F, D(W));
  }
  function M(W) {
    return i = void 0, C && n ? E(W) : (n = a = void 0, o);
  }
  function j() {
    i !== void 0 && clearTimeout(i), u = 0, n = f = a = i = void 0;
  }
  function U() {
    return i === void 0 ? o : M(Eo());
  }
  function B() {
    var W = Eo(), G = x(W);
    if (n = arguments, a = this, f = W, G) {
      if (i === void 0)
        return S(f);
      if (g)
        return clearTimeout(i), i = setTimeout(F, e), E(f);
    }
    return i === void 0 && (i = setTimeout(F, e)), o;
  }
  return B.cancel = j, B.flush = U, B;
}
var v8 = y8, A8 = v8, w8 = ji, C8 = "Expected a function";
function E8(t, e, r) {
  var n = !0, a = !0;
  if (typeof t != "function")
    throw new TypeError(C8);
  return w8(r) && (n = "leading" in r ? !!r.leading : n, a = "trailing" in r ? !!r.trailing : a), A8(t, e, {
    leading: n,
    maxWait: e,
    trailing: a
  });
}
var I8 = E8;
function k8(t, e) {
  const r = dr(t);
  return r.current = t, ea(() => I8(r.current, e), [e]);
}
const S8 = (t, e) => e == null ? void 0 : e.find(
  (r) => r.dexId === t.exchange || (t.exchange === "kyberswap" || t.exchange === "kyberswap-static") && r.dexId === "kyberswapv1"
), D8 = (t, e = 0) => e === 1 ? "100%" : !t && t !== 0 ? null : `${(e > 1 ? Math.min(99.99, Math.max(0.01, t)) : t).toFixed(0)}%`, B8 = (t) => {
  var e, r, n, a;
  ((e = t == null ? void 0 : t.scrollTop) != null ? e : 0) > 0 ? t == null || t.classList.add("top") : t == null || t.classList.remove("top"), ((r = t == null ? void 0 : t.scrollHeight) != null ? r : 0) - ((n = t == null ? void 0 : t.scrollTop) != null ? n : 0) > ((a = t == null ? void 0 : t.clientHeight) != null ? a : 0) ? t == null || t.classList.add("bottom") : t == null || t.classList.remove("bottom");
}, F8 = (t, e, r) => k8(() => {
  var s, o, i, f, u;
  const a = t.current;
  (a == null ? void 0 : a.scrollLeft) > 0 ? (s = e.current) == null || s.classList.add("left-visible") : (o = e.current) == null || o.classList.remove("left-visible"), Math.floor((((i = r.current) == null ? void 0 : i.scrollWidth) || 0) - (a == null ? void 0 : a.scrollLeft)) > Math.floor(a == null ? void 0 : a.clientWidth) ? (f = e.current) == null || f.classList.add("right-visible") : (u = e.current) == null || u.classList.remove("right-visible");
}, 300), R8 = J.div`
  flex: 1;
  max-height: 100%;
  max-width: 100%;
  margin-left: 0;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 999px;
  }

  &:hover::-webkit-scrollbar-thumb {
    background: ${({
  theme: t
}) => t.border};
    border-radius: 999px;
  }

  &::-webkit-scrollbar-track-piece {
    background: transparent;
  }
`, _8 = J.div`
  width: 100%;
`, T8 = J.div`
  position: relative;
  min-height: 0;
  overflow: hidden;
  background-color: ${({
  theme: t
}) => t.dialog};
  border-radius: ${({
  theme: t
}) => t.borderRadius};
  &:before,
  &:after {
    content: '';
    display: block;
    z-index: 3;
    pointer-events: none;
    position: absolute;
    height: 50px;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.2s ease;
    opacity: 0;
  }

  &:before {
    background: linear-gradient(to bottom, ${({
  backgroundColor: t
}) => t}, transparent);
    top: 0;
  }

  &:after {
    background: linear-gradient(to top, ${({
  backgroundColor: t
}) => t}, transparent);
    bottom: 0;
  }

  &.top:before,
  &.bottom:after {
    opacity: 1;
  }
`, M8 = J.div`
  font-size: 12px;
  line-height: 14px;
  font-weight: 700;
  position: absolute;
  top: calc(50% - 15px);
  left: 8px;
  transform: translateY(50%);
  z-index: 2;
  color: ${({
  theme: t
}) => t.accent};
  background: ${({
  backgroundColor: t
}) => t};
`, D0 = J.i`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  position: absolute;
  top: 0;
  left: ${({
  out: t
}) => t ? "unset" : "6.5px"};
  right: ${({
  out: t
}) => t ? "6.5px" : "unset"};
  z-index: 1;
  background-color: ${({
  theme: t
}) => t.accent};
`, U8 = J.div`
  position: relative;
  padding-top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`, P8 = J.div`
  flex: auto;
  min-width: 50px;
  border-bottom: 1px solid ${({
  theme: t
}) => t.border};
  height: 1px;
`, B0 = J.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100px;
  width: max-content;
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
  min-height: 38px;
  border-radius: 0.5rem;
`, ol = J.a`
  width: 100%;
  display: flex;
  align-items: center;
  white-space: nowrap;
  text-decoration: none;
  color: ${({
  theme: t
}) => t.subText};
  ${({
  reverse: t
}) => t && Ss`
      flex-direction: row-reverse;
      justify-content: flex-start;
    `}
  padding-bottom: 7px;
  border-bottom: 1px solid ${({
  theme: t
}) => t.border};

  & > span {
    margin-left: 4px;
    margin-right: 4px;
  }
`, O8 = J.div`
  margin: auto;
  width: 100%;
  position: relative;
  padding: 20px 10px 0;
  box-sizing: border-box;

  &:before {
    position: absolute;
    display: block;
    content: '';
    top: 0;
    right: 0;
  }
`, N8 = J.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  align-items: center;

  &:before,
  &:after {
    content: '';
    display: block;
    border-left: 1px solid ${({
  theme: t
}) => t.border};
    width: 100%;
    height: calc(50% + 20px);
    position: absolute;
    border-right: 1px solid ${({
  theme: t
}) => t.border};
    box-sizing: border-box;
    pointer-events: none;
  }

  &:before {
    top: -20px;
  }

  &:after {
    bottom: -10px;
  }

  &:last-child:after {
    display: none;
  }
`, L8 = J.div`
  position: absolute;
  border-bottom: 1px solid ${({
  theme: t
}) => t.border};
  width: calc(100% - 68px);
  left: 43px;
`, j8 = J.div`
  z-index: 1;
  display: flex;
  align-items: center;
`, W8 = J.div`
  padding: 8px;
  border-radius: 8px;
  background-color: ${({
  theme: t
}) => t.primary};
  border: 1px solid ${({
  theme: t
}) => t.subText};
  height: fit-content;
  position: relative;
  flex: 0 0 146px;
  margin: auto;
  transition: filter 0.15s ease;
  cursor: pointer;

  :hover {
    filter: ${({
  theme: t
}) => t.darkMode ? "brightness(130%)" : "brightness(97%)"};
  }
`, H8 = J.a`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 0;
  margin-top: 4px;
  font-size: 10px;
  border-radius: 8px;
  color: ${({
  theme: t
}) => t.subText};
  line-height: 20px;
  white-space: nowrap;
  text-decoration: none;

  &:hover {
    color: ${({
  theme: t
}) => t.darkMode ? t.white : t.black};
  }

  & > .img--sm {
    width: 14px;
    height: 14px;
    margin-right: 4px;
  }

  &:first-child {
    margin-top: 8px;
  }
`, z8 = J.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 0;
  margin-top: 4px;
  font-size: 10px;
  border-radius: 8px;
  color: ${({
  theme: t
}) => t.subText};
  line-height: 20px;
  white-space: nowrap;
  text-decoration: none;

  & > .img--sm {
    width: 14px;
    height: 14px;
    margin-right: 4px;
  }

  &:first-child {
    margin-top: 8px;
  }
`, $8 = J.div`
  width: calc(100% - 68px);
  margin: 10px 0 10px 6px;

  &:after,
  &:before {
    transition: all 0.1s ease;
    content: '';
    display: block;
    z-index: 2;
    pointer-events: none;
    position: absolute;
    inset: 0 0 auto auto;
    width: 40px;
    height: calc(100% - 20px);
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
  }

  &:after {
    background: linear-gradient(to right, ${({
  backgroundColor: t
}) => t}, transparent);
    left: 42px;
  }

  &:before {
    background: linear-gradient(to left, ${({
  backgroundColor: t
}) => t}, transparent);
    right: 24px;
  }

  &.left-visible:after,
  &.right-visible:before {
    opacity: 1;
  }
`, il = J.div`
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid ${({
  theme: t
}) => t.accent};
`, cl = J.div`
  min-width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
function V8(t) {
  if (!t.length)
    return [];
  try {
    let e = -1;
    const r = t.reduce((s, o) => {
      var h, g;
      let i, f = [], u = ((g = (h = o.pools) == null ? void 0 : h[0]) == null ? void 0 : g.swapPercentage) || 0;
      if (s[o.slug]) {
        const C = s[o.slug] || {};
        i = C.index;
        const E = C.subRoutes || [];
        u += C.swapPercentage || 0, E.forEach((S, D) => {
          const x = o.pools && o.pools[D] || {}, F = S.reduce((U, B) => U + B.swapAmount || 0, 0) + x.swapAmount || 0;
          let M = !1;
          const j = S.map((U) => {
            const B = { ...U }, W = B.id === x.id;
            let G = B.swapAmount || 0;
            return W && (M = !0, G = G + x.swapAmount || 0), B.swapPercentage = Math.round(parseFloat(G) * 100 / parseFloat(F)), B.total = F.toString(), B;
          });
          if (!M) {
            const U = Math.round(parseFloat(x.swapAmount) * 100 / parseFloat(F));
            j.push({ ...x, swapPercentage: U });
          }
          f[D] = j;
        });
      } else
        e += 1, i = e, f = o.pools.map((C) => [{ ...C, swapPercentage: 100 }]);
      return Object.assign({}, s, {
        [o.slug]: { index: i, swapPercentage: u, path: o.path, subRoutes: f }
      });
    }, {}), n = Object.keys(r).length, a = new Array(n).map(() => ({}));
    return Object.values(r).forEach((s) => {
      s.index > n || a.splice(s.index, 1, {
        swapPercentage: s.swapPercentage,
        path: s.path,
        subRoutes: s.subRoutes,
        id: s.subRoutes.flat().map((o) => o.id).join("-")
      });
    }), a;
  } catch (e) {
    return console.error("[error_routesV2]", e), [];
  }
}
function G8(t, e, r, n, a) {
  if (!r || !n)
    return;
  const s = a.reduce((u, h) => (u[h.address] = h, u), {}), o = [], i = function(u, h) {
    if (!u || !h)
      return;
    if (k3(t, u, e == null ? void 0 : e.address) && Number(r) > 0) {
      const C = parseFloat(h) * 100 / parseFloat(r);
      return Math.round(C);
    }
  }, f = (u) => u.toLowerCase() === nt.toLowerCase() ? Es[t] : (s == null ? void 0 : s[Ri(u) || ""]) || (s == null ? void 0 : s[u]) || {
    name: "--",
    decimals: 0,
    symbol: "--",
    address: u,
    chainId: t,
    logoURI: ""
  };
  return n.forEach((u) => {
    var C;
    if (!u.length || u.length < 1)
      return;
    if (u.length === 1) {
      const E = u[0], S = [f(E.tokenIn), f(E.tokenOut)];
      o.push({
        slug: (C = E.tokenOut) == null ? void 0 : C.toLowerCase(),
        pools: [
          {
            id: E.pool,
            exchange: E.exchange,
            swapAmount: parseFloat(E.swapAmount),
            swapPercentage: i(E.tokenIn, E.swapAmount)
          }
        ],
        path: S,
        id: E.pool
      });
      return;
    }
    const h = [], g = [];
    u.forEach((E, S) => {
      g.push({
        id: E.pool + "-" + E.tokenIn + "-" + E.tokenOut,
        exchange: E.exchange,
        swapAmount: parseFloat(E.swapAmount),
        swapPercentage: S === 0 ? i(E.tokenIn, E.swapAmount) : 100
      }), S === 0 && h.push(f(E.tokenIn));
      const D = f(E.tokenOut);
      h.push(D);
    }), o.push({
      slug: h.slice(1).map((E) => E.address).join("-").toLowerCase(),
      path: h,
      pools: g,
      id: g.map((E) => E.id).join("-")
    });
  }), V8(o);
}
const K8 = ({
  route: t,
  chainId: e,
  backgroundColor: r
}) => {
  var f;
  const n = dr(null), a = dr(null), s = dr(null), [o] = Wf(), i = F8(n, s, a);
  return yt(() => (window.addEventListener("resize", i), () => window.removeEventListener("resize", i)), []), yt(() => {
    i();
  }, [t]), /* @__PURE__ */ O($8, {
    ref: s,
    backgroundColor: r,
    children: /* @__PURE__ */ O(Ab, {
      innerRef: n,
      vertical: !1,
      onScroll: i,
      children: /* @__PURE__ */ O(j8, {
        length: (f = t == null ? void 0 : t.subRoutes) == null ? void 0 : f.length,
        ref: a,
        children: t.subRoutes.map((u, h, g) => {
          const C = t.path[h + 1], E = u.flat().map((S) => S.id).join("-");
          return /* @__PURE__ */ X(Rr.Fragment, {
            children: [/* @__PURE__ */ X(W8, {
              children: [/* @__PURE__ */ X(ol, {
                style: {
                  marginRight: 0
                },
                href: `${Ta[e]}/token/${C == null ? void 0 : C.address}`,
                target: "_blank",
                children: [/* @__PURE__ */ O("img", {
                  width: "20",
                  height: "20",
                  alt: "tokenIn",
                  src: C == null ? void 0 : C.logoURI,
                  style: {
                    borderRadius: "50%"
                  },
                  onError: ({
                    currentTarget: S
                  }) => {
                    S.onerror = null, S.src = new URL("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iQ3VycmVuY3lMb2dvX19TdHlsZWRMb2dvLXNjLTFxODJydWEtMSBncHhsS2EiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIj48L2NpcmNsZT48cGF0aCBkPSJNOS4wOSA5YTMgMyAwIDAgMSA1LjgzIDFjMCAyLTMgMy0zIDMiPjwvcGF0aD48bGluZSB4MT0iMTIiIHkxPSIxNyIgeDI9IjEyLjAxIiB5Mj0iMTciPjwvbGluZT48L3N2Zz4K", self.location).href;
                  }
                }), /* @__PURE__ */ O("span", {
                  children: C == null ? void 0 : C.symbol
                })]
              }), Array.isArray(u) ? u.map((S) => {
                var M;
                const D = S8(S, o), x = (M = S.id.split("-")) == null ? void 0 : M[0];
                return ((j) => Ri(x) && !["1inch", "paraswap", "0x"].includes(S.exchange) ? /* @__PURE__ */ O(H8, {
                  href: `${Ta[e]}/address/${x}`,
                  target: "_blank",
                  children: j
                }, `${j}-${S.id}`) : /* @__PURE__ */ O(z8, {
                  children: j
                }, `${j}-${S.id}`))(/* @__PURE__ */ X(fr, {
                  children: [D != null && D.logoURL ? /* @__PURE__ */ O("img", {
                    src: D == null ? void 0 : D.logoURL,
                    alt: "",
                    className: "img--sm"
                  }) : /* @__PURE__ */ O("i", {
                    className: "img--sm"
                  }), `${(D == null ? void 0 : D.name) || "--"}: ${S.swapPercentage}%`]
                }));
              }) : null]
            }), h !== g.length - 1 && /* @__PURE__ */ O(cl, {
              children: /* @__PURE__ */ O(il, {})
            })]
          }, E);
        })
      })
    })
  });
}, q8 = ({
  trade: t,
  currencyIn: e,
  currencyOut: r
}) => {
  const {
    chainId: n
  } = Rt(), a = dr(null), s = dr(null), o = dr(null), i = Hs(), f = t == null ? void 0 : t.routeSummary.amountIn, u = t == null ? void 0 : t.routeSummary.amountOut, h = ea(() => {
    var S;
    if (!!t)
      return G8(n, e, f, (S = t.routeSummary) == null ? void 0 : S.route, i);
  }, [n, e, f, i, t]), g = (S, D, x) => {
    if (n && S) {
      const F = D ? Number(D) / 10 ** ((S == null ? void 0 : S.decimals) || 18) : 0, M = Number(F.toFixed(4));
      return /* @__PURE__ */ X(ol, {
        as: "div",
        reverse: x,
        style: {
          border: "none"
        },
        children: [/* @__PURE__ */ O("img", {
          width: "20",
          height: "20",
          alt: x ? "token out" : "token in",
          src: S == null ? void 0 : S.logoURI,
          style: {
            borderRadius: "50%"
          },
          onError: ({
            currentTarget: j
          }) => {
            j.onerror = null, j.src = new URL("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iQ3VycmVuY3lMb2dvX19TdHlsZWRMb2dvLXNjLTFxODJydWEtMSBncHhsS2EiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIj48L2NpcmNsZT48cGF0aCBkPSJNOS4wOSA5YTMgMyAwIDAgMSA1LjgzIDFjMCAyLTMgMy0zIDMiPjwvcGF0aD48bGluZSB4MT0iMTIiIHkxPSIxNyIgeDI9IjEyLjAxIiB5Mj0iMTciPjwvbGluZT48L3N2Zz4K", self.location).href;
          }
        }), /* @__PURE__ */ X("span", {
          children: [M, " ", S.symbol]
        })]
      });
    }
    return null;
  }, C = n && h && h.length > 0, E = on(() => B8(a.current), []);
  return yt(() => (window.addEventListener("resize", E), () => window.removeEventListener("resize", E)), [E]), yt(() => {
    E();
  }, [h, E]), /* @__PURE__ */ O(_8, {
    children: /* @__PURE__ */ O(T8, {
      ref: a,
      children: /* @__PURE__ */ O(R8, {
        ref: s,
        onScroll: E,
        style: {
          maxHeight: "100%"
        },
        children: /* @__PURE__ */ X("div", {
          ref: o,
          children: [/* @__PURE__ */ X(U8, {
            children: [/* @__PURE__ */ O(B0, {
              children: g(e, f)
            }), !C && /* @__PURE__ */ O(P8, {}), /* @__PURE__ */ O(B0, {
              children: g(r, u, !0)
            })]
          }), C ? /* @__PURE__ */ O("div", {
            children: /* @__PURE__ */ X(O8, {
              children: [/* @__PURE__ */ O(D0, {}), /* @__PURE__ */ O(D0, {
                out: !0
              }), h.map((S) => /* @__PURE__ */ X(N8, {
                children: [/* @__PURE__ */ O(M8, {
                  children: D8(S.swapPercentage, h.length)
                }), /* @__PURE__ */ O(L8, {}), /* @__PURE__ */ O(K8, {
                  route: S,
                  chainId: n
                }), /* @__PURE__ */ O(cl, {
                  style: {
                    marginRight: "2px"
                  },
                  children: /* @__PURE__ */ O(il, {})
                })]
              }, S.id))]
            })
          }) : null]
        })
      })
    })
  });
}, Y8 = ul(q8), X8 = J.div`
  background-color: ${({
  theme: t
}) => t.dialog};
  border-radius: ${({
  theme: t
}) => t.borderRadius};
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  padding: 1rem;
  overflow: hidden;
  z-index: ${Rf.DIALOG};
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @supports (overflow: clip) {
    overflow: clip;
  }

  transition: 0.25s ease-in-out;

  &.open {
    transform: translateX(0);
  }

  &.close {
    transform: translateX(100%);
  }
`, J8 = J.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`, Z8 = J.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`, F0 = J.span`
  font-size: 16px;
  width: max-content;
`, Io = J.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: ${({
  theme: t
}) => t.subText};
  font-size: 12px;
  margin-top: 1rem;
`, Q8 = ({
  defaultTokenIn: t,
  defaultTokenOut: e,
  defaultSlippage: r,
  feeSetting: n,
  client: a,
  onTxSubmit: s,
  enableRoute: o,
  enableDexes: i,
  title: f
}) => {
  var ke, Se, Ce, st, Te, Me, _t;
  const [u, h] = Ae(null), {
    chainId: g
  } = Rt(), C = !Fi.includes(g.toString()), E = Hs(), {
    loading: S,
    error: D,
    tokenIn: x,
    tokenOut: F,
    setTokenIn: M,
    setTokenOut: j,
    inputAmout: U,
    setInputAmount: B,
    trade: W,
    slippage: G,
    setSlippage: K,
    getRate: te,
    deadline: se,
    setDeadline: q,
    allDexes: oe,
    excludedDexes: I,
    setExcludedDexes: d,
    setTrade: m,
    isWrap: y,
    isUnwrap: w
  } = V3({
    defaultTokenIn: t,
    defaultTokenOut: e,
    defaultSlippage: r,
    feeSetting: n,
    enableDexes: i
  }), A = C ? null : W, [T, P] = Ae(!1), {
    balances: p,
    refetch: c
  } = _i(E.map((pe) => pe.address)), b = x === nt ? Es[g] : E.find((pe) => pe.address.toLowerCase() === x.toLowerCase()), k = F === nt ? Es[g] : E.find((pe) => pe.address.toLowerCase() === F.toLowerCase()), l = y || w ? U : (ke = A == null ? void 0 : A.routeSummary) != null && ke.amountOut ? cr.formatUnits(A.routeSummary.amountOut, k == null ? void 0 : k.decimals).toString() : "";
  let v = "";
  l && (v = y || w ? parseFloat((+l).toPrecision(8)).toString() : (Number(l) * (1 - G / 1e4)).toPrecision(8).toString());
  const L = p[x] || de.from(0), _ = p[F] || de.from(0), H = cr.formatUnits(L, (b == null ? void 0 : b.decimals) || 18), Y = cr.formatUnits(_, (k == null ? void 0 : k.decimals) || 18), $ = y || w ? 1 : ((Se = A == null ? void 0 : A.routeSummary) == null ? void 0 : Se.amountIn) && ((Ce = A == null ? void 0 : A.routeSummary) == null ? void 0 : Ce.amountOut) && parseFloat(cr.formatUnits(A.routeSummary.amountOut, (k == null ? void 0 : k.decimals) || 18)) / parseFloat(U), N = parseFloat(parseFloat(H).toPrecision(10)), he = parseFloat(parseFloat(Y).toPrecision(10)), z = Pa(), Z = A != null && A.routeSummary.amountOutUsd ? (+A.routeSummary.amountInUsd - +A.routeSummary.amountOutUsd) * 100 / +A.routeSummary.amountInUsd : -1, ve = (() => {
    switch (u) {
      case "setting":
        return "Settings";
      case "currency_in":
        return "Select a token";
      case "currency_out":
        return "Select a token";
      case "dexes_setting":
        return "Liquidity Sources";
      case "import_token":
        return "Import Token";
      case "trade_route":
        return "Your Trade Route";
      default:
        return null;
    }
  })(), [le, ge] = Ae(null), [lt, me] = Ae("in"), Ee = (() => {
    switch (u) {
      case "setting":
        return /* @__PURE__ */ O(D4, {
          slippage: G,
          setSlippage: K,
          deadline: se,
          setDeadline: q,
          allDexes: oe,
          excludedDexes: I,
          onShowSource: () => h("dexes_setting")
        });
      case "trade_route":
        return o ? /* @__PURE__ */ O(Y8, {
          trade: A,
          currencyIn: b,
          currencyOut: k
        }) : null;
      case "currency_in":
        return /* @__PURE__ */ O(r0, {
          selectedToken: x,
          onChange: (pe) => {
            pe === F && j(x), M(pe), h(null);
          },
          onImport: (pe) => {
            ge(pe), h("import_token"), me("in");
          }
        });
      case "currency_out":
        return /* @__PURE__ */ O(r0, {
          selectedToken: F,
          onChange: (pe) => {
            pe === x && M(F), j(pe), h(null);
          },
          onImport: (pe) => {
            ge(pe), h("import_token"), me("out");
          }
        });
      case "review":
        return $ && b && A && k ? /* @__PURE__ */ O(Z4, {
          trade: A,
          tokenInInfo: b,
          amountIn: U,
          tokenOutInfo: k,
          amountOut: l,
          rate: $,
          priceImpact: Z,
          slippage: G,
          deadline: se,
          client: a,
          onClose: () => {
            h(null), c();
          },
          onTxSubmit: s
        }) : null;
      case "dexes_setting":
        return /* @__PURE__ */ O(ab, {
          allDexes: oe,
          excludedDexes: I,
          setExcludedDexes: d
        });
      case "import_token":
        return le ? /* @__PURE__ */ O(bb, {
          token: le,
          onImport: () => {
            lt === "in" ? (M(le.address), h(null)) : (j(le.address), h(null));
          }
        }) : null;
      default:
        return null;
    }
  })(), {
    loading: it,
    approve: ye,
    approvalState: ie
  } = G3(((st = A == null ? void 0 : A.routeSummary) == null ? void 0 : st.amountIn) || "0", x, (A == null ? void 0 : A.routerAddress) || "");
  return /* @__PURE__ */ X(y1, {
    children: [/* @__PURE__ */ X(X8, {
      className: u ? "open" : "close",
      children: [u !== "review" && /* @__PURE__ */ O(K0, {
        children: /* @__PURE__ */ X(q0, {
          onClick: () => h(u === "dexes_setting" ? "setting" : null),
          role: "button",
          children: [/* @__PURE__ */ O($0, {
            style: {
              color: z.subText
            }
          }), ve]
        })
      }), /* @__PURE__ */ O(Z8, {
        children: Ee
      }), /* @__PURE__ */ X(Io, {
        style: {
          marginTop: "0"
        },
        children: ["Powered By", /* @__PURE__ */ O(ac, {})]
      })]
    }), /* @__PURE__ */ X(v1, {
      children: [f || "Swap", /* @__PURE__ */ O(To, {
        onClick: () => h("setting"),
        children: /* @__PURE__ */ O(p1, {})
      })]
    }), /* @__PURE__ */ X(sc, {
      children: [/* @__PURE__ */ X(oc, {
        children: [/* @__PURE__ */ O("div", {
          children: /* @__PURE__ */ O(A1, {
            onClick: () => B(H),
            children: "Max"
          })
        }), /* @__PURE__ */ X(ic, {
          children: [/* @__PURE__ */ O(nc, {}), N]
        })]
      }), /* @__PURE__ */ X(cc, {
        children: [/* @__PURE__ */ O(dc, {
          value: U,
          onChange: (pe) => {
            const Ue = pe.target.value.replace(/,/g, "."), er = RegExp("^\\d*(?:\\\\[.])?\\d*$");
            (Ue === "" || er.test(Ue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))) && B(Ue);
          },
          inputMode: "decimal",
          autoComplete: "off",
          autoCorrect: "off",
          type: "text",
          pattern: "^[0-9]*[.,]?[0-9]*$",
          placeholder: "0.0",
          minLength: 1,
          maxLength: 79,
          spellCheck: "false"
        }), !!((Te = A == null ? void 0 : A.routeSummary) != null && Te.amountInUsd) && /* @__PURE__ */ X("span", {
          style: {
            fontSize: "12px",
            marginRight: "4px",
            color: z.subText
          },
          children: ["~", (+A.routeSummary.amountInUsd).toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
          })]
        }), /* @__PURE__ */ X(fc, {
          onClick: () => !C && h("currency_in"),
          children: [b ? /* @__PURE__ */ X(fr, {
            children: [/* @__PURE__ */ O("img", {
              width: "20",
              height: "20",
              alt: "tokenIn",
              src: b == null ? void 0 : b.logoURI,
              style: {
                borderRadius: "50%"
              },
              onError: ({
                currentTarget: pe
              }) => {
                pe.onerror = null, pe.src = new URL("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iQ3VycmVuY3lMb2dvX19TdHlsZWRMb2dvLXNjLTFxODJydWEtMSBncHhsS2EiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIj48L2NpcmNsZT48cGF0aCBkPSJNOS4wOSA5YTMgMyAwIDAgMSA1LjgzIDFjMCAyLTMgMy0zIDMiPjwvcGF0aD48bGluZSB4MT0iMTIiIHkxPSIxNyIgeDI9IjEyLjAxIiB5Mj0iMTciPjwvbGluZT48L3N2Zz4K", self.location).href;
              }
            }), /* @__PURE__ */ O("div", {
              style: {
                marginLeft: "0.375rem"
              },
              children: b == null ? void 0 : b.symbol
            })]
          }) : /* @__PURE__ */ O(F0, {
            children: "Select a token"
          }), /* @__PURE__ */ O(_o, {})]
        })]
      })]
    }), /* @__PURE__ */ X(C1, {
      children: [/* @__PURE__ */ X(E1, {
        children: [/* @__PURE__ */ O(M4, {
          loading: S,
          onRefresh: () => {
            te();
          },
          trade: A
        }), /* @__PURE__ */ O(I1, {
          children: (() => $ ? T ? `1 ${k == null ? void 0 : k.symbol} = ${+(1 / $).toPrecision(10)} ${b == null ? void 0 : b.symbol}` : `1 ${b == null ? void 0 : b.symbol} = ${+$.toPrecision(10)} ${k == null ? void 0 : k.symbol}` : "--")()
        }), !!$ && /* @__PURE__ */ O(To, {
          onClick: () => P((pe) => !pe),
          children: /* @__PURE__ */ O(g1, {})
        })]
      }), /* @__PURE__ */ O(w1, {
        onClick: () => {
          m(null), M(F), j(x);
        },
        children: /* @__PURE__ */ O(b1, {})
      })]
    }), /* @__PURE__ */ X(sc, {
      children: [/* @__PURE__ */ X(oc, {
        children: [/* @__PURE__ */ O("div", {}), /* @__PURE__ */ X(ic, {
          children: [/* @__PURE__ */ O(nc, {}), he]
        })]
      }), /* @__PURE__ */ X(cc, {
        children: [/* @__PURE__ */ O(dc, {
          disabled: !0,
          value: y || w ? +l : (+l).toPrecision(8)
        }), !!((Me = A == null ? void 0 : A.routeSummary) != null && Me.amountOutUsd) && /* @__PURE__ */ X("span", {
          style: {
            fontSize: "12px",
            marginRight: "4px",
            color: z.subText
          },
          children: ["~", (+A.routeSummary.amountOutUsd).toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
          })]
        }), /* @__PURE__ */ X(fc, {
          onClick: () => !C && h("currency_out"),
          children: [k ? /* @__PURE__ */ X(fr, {
            children: [/* @__PURE__ */ O("img", {
              width: "20",
              height: "20",
              alt: "tokenOut",
              src: k == null ? void 0 : k.logoURI,
              style: {
                borderRadius: "50%"
              },
              onError: ({
                currentTarget: pe
              }) => {
                pe.onerror = null, pe.src = new URL("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iQ3VycmVuY3lMb2dvX19TdHlsZWRMb2dvLXNjLTFxODJydWEtMSBncHhsS2EiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIj48L2NpcmNsZT48cGF0aCBkPSJNOS4wOSA5YTMgMyAwIDAgMSA1LjgzIDFjMCAyLTMgMy0zIDMiPjwvcGF0aD48bGluZSB4MT0iMTIiIHkxPSIxNyIgeDI9IjEyLjAxIiB5Mj0iMTciPjwvbGluZT48L3N2Zz4K", self.location).href;
              }
            }), /* @__PURE__ */ O("div", {
              style: {
                marginLeft: "0.375rem"
              },
              children: k == null ? void 0 : k.symbol
            })]
          }) : /* @__PURE__ */ O(F0, {
            children: "Select a token"
          }), /* @__PURE__ */ O(_o, {})]
        })]
      })]
    }), /* @__PURE__ */ X(G0, {
      style: {
        marginTop: "1rem"
      },
      children: [/* @__PURE__ */ X(J8, {
        children: [/* @__PURE__ */ O(k1, {
          children: "More information"
        }), o && !(y || w) && /* @__PURE__ */ X(S1, {
          onClick: () => h("trade_route"),
          children: ["View Routes ", /* @__PURE__ */ O(x1, {
            style: {
              width: 12,
              height: 12
            }
          })]
        })]
      }), /* @__PURE__ */ O(D1, {}), /* @__PURE__ */ X(Qr, {
        children: [/* @__PURE__ */ X(en, {
          children: ["Minimum Received", /* @__PURE__ */ O($r, {
            text: "Minimum amount you will receive or your transaction will revert"
          })]
        }), /* @__PURE__ */ O(Wr, {
          children: v ? `${v} ${k == null ? void 0 : k.symbol}` : "--"
        })]
      }), /* @__PURE__ */ X(Qr, {
        children: [/* @__PURE__ */ X(en, {
          children: ["Gas Fee ", /* @__PURE__ */ O($r, {
            text: "Estimated network fee for your transaction"
          })]
        }), /* @__PURE__ */ O(Wr, {
          children: (_t = A == null ? void 0 : A.routeSummary) != null && _t.gasUsd ? "$" + (+A.routeSummary.gasUsd).toPrecision(4) : "--"
        })]
      }), /* @__PURE__ */ X(Qr, {
        children: [/* @__PURE__ */ X(en, {
          children: ["Price Impact", /* @__PURE__ */ O($r, {
            text: "Estimated change in price due to the size of your transaction"
          })]
        }), /* @__PURE__ */ O(Wr, {
          style: {
            color: Z > 15 ? z.error : Z > 5 ? z.warning : z.text
          },
          children: Z === -1 ? "--" : Z > 0.01 ? Z.toFixed(3) + "%" : "< 0.01%"
        })]
      })]
    }), /* @__PURE__ */ O(Ln, {
      disabled: !!D || S || it || ie === pa.PENDING || C,
      onClick: async () => {
        ie === pa.NOT_APPROVED && !y && !w ? ye() : h("review");
      },
      children: C ? /* @__PURE__ */ X(Io, {
        style: {
          fontSize: "16px",
          marginTop: "0"
        },
        children: [/* @__PURE__ */ O(V0, {
          style: {
            width: "24px",
            height: "24px"
          }
        }), "Unsupported network"]
      }) : S ? /* @__PURE__ */ O(ao, {
        children: "Calculate best route"
      }) : D || (y ? "Wrap" : w ? "Unwrap" : it ? /* @__PURE__ */ O(ao, {
        children: "Checking Allowance"
      }) : ie === pa.NOT_APPROVED ? "Approve" : ie === pa.PENDING ? /* @__PURE__ */ O(ao, {
        children: "Approving"
      }) : "Swap")
    }), /* @__PURE__ */ X(Io, {
      children: ["Powered By", /* @__PURE__ */ O(ac, {})]
    })]
  });
};
function r5({
  provider: t,
  tokenList: e,
  theme: r,
  defaultTokenIn: n,
  defaultTokenOut: a,
  defaultSlippage: s,
  feeSetting: o,
  client: i,
  onTxSubmit: f,
  enableRoute: u = !0,
  enableDexes: h,
  title: g
}) {
  return /* @__PURE__ */ O(hl, {
    children: /* @__PURE__ */ O(h1, {
      theme: r || m1,
      children: /* @__PURE__ */ O(B3, {
        provider: t,
        children: /* @__PURE__ */ O(_3, {
          tokenList: e,
          children: /* @__PURE__ */ O(Q8, {
            defaultTokenIn: n,
            defaultTokenOut: a,
            defaultSlippage: s,
            feeSetting: o,
            client: i,
            onTxSubmit: f,
            enableRoute: u,
            enableDexes: h,
            title: g
          })
        })
      })
    })
  });
}
export {
  X8 as DialogWrapper,
  r5 as Widget
};
