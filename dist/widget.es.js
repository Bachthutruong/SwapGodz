import * as ae from "react";
import zr, { useContext as vn, useMemo as wa, useRef as Er, useDebugValue as g0, createElement as c1, createContext as Af, useState as Ne, useEffect as Ft, useCallback as xn, useLayoutEffect as f1, PureComponent as d1, memo as l1, StrictMode as h1 } from "react";
import * as u1 from "react-dom";
import { createPortal as m1 } from "react-dom";
var tr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function It(t) {
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
var si = { exports: {} }, ht = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var x0;
function p1() {
  if (x0)
    return ht;
  x0 = 1;
  var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, p = t ? Symbol.for("react.async_mode") : 60111, x = t ? Symbol.for("react.concurrent_mode") : 60111, y = t ? Symbol.for("react.forward_ref") : 60112, C = t ? Symbol.for("react.suspense") : 60113, B = t ? Symbol.for("react.suspense_list") : 60120, F = t ? Symbol.for("react.memo") : 60115, R = t ? Symbol.for("react.lazy") : 60116, M = t ? Symbol.for("react.block") : 60121, S = t ? Symbol.for("react.fundamental") : 60117, U = t ? Symbol.for("react.responder") : 60118, N = t ? Symbol.for("react.scope") : 60119;
  function z(T) {
    if (typeof T == "object" && T !== null) {
      var G = T.$$typeof;
      switch (G) {
        case e:
          switch (T = T.type, T) {
            case p:
            case x:
            case n:
            case i:
            case a:
            case C:
              return T;
            default:
              switch (T = T && T.$$typeof, T) {
                case c:
                case y:
                case R:
                case F:
                case s:
                  return T;
                default:
                  return G;
              }
          }
        case r:
          return G;
      }
    }
  }
  function O(T) {
    return z(T) === x;
  }
  return ht.AsyncMode = p, ht.ConcurrentMode = x, ht.ContextConsumer = c, ht.ContextProvider = s, ht.Element = e, ht.ForwardRef = y, ht.Fragment = n, ht.Lazy = R, ht.Memo = F, ht.Portal = r, ht.Profiler = i, ht.StrictMode = a, ht.Suspense = C, ht.isAsyncMode = function(T) {
    return O(T) || z(T) === p;
  }, ht.isConcurrentMode = O, ht.isContextConsumer = function(T) {
    return z(T) === c;
  }, ht.isContextProvider = function(T) {
    return z(T) === s;
  }, ht.isElement = function(T) {
    return typeof T == "object" && T !== null && T.$$typeof === e;
  }, ht.isForwardRef = function(T) {
    return z(T) === y;
  }, ht.isFragment = function(T) {
    return z(T) === n;
  }, ht.isLazy = function(T) {
    return z(T) === R;
  }, ht.isMemo = function(T) {
    return z(T) === F;
  }, ht.isPortal = function(T) {
    return z(T) === r;
  }, ht.isProfiler = function(T) {
    return z(T) === i;
  }, ht.isStrictMode = function(T) {
    return z(T) === a;
  }, ht.isSuspense = function(T) {
    return z(T) === C;
  }, ht.isValidElementType = function(T) {
    return typeof T == "string" || typeof T == "function" || T === n || T === x || T === i || T === a || T === C || T === B || typeof T == "object" && T !== null && (T.$$typeof === R || T.$$typeof === F || T.$$typeof === s || T.$$typeof === c || T.$$typeof === y || T.$$typeof === S || T.$$typeof === U || T.$$typeof === N || T.$$typeof === M);
  }, ht.typeOf = z, ht;
}
var ut = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var y0;
function b1() {
  return y0 || (y0 = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, p = t ? Symbol.for("react.async_mode") : 60111, x = t ? Symbol.for("react.concurrent_mode") : 60111, y = t ? Symbol.for("react.forward_ref") : 60112, C = t ? Symbol.for("react.suspense") : 60113, B = t ? Symbol.for("react.suspense_list") : 60120, F = t ? Symbol.for("react.memo") : 60115, R = t ? Symbol.for("react.lazy") : 60116, M = t ? Symbol.for("react.block") : 60121, S = t ? Symbol.for("react.fundamental") : 60117, U = t ? Symbol.for("react.responder") : 60118, N = t ? Symbol.for("react.scope") : 60119;
    function z(j) {
      return typeof j == "string" || typeof j == "function" || j === n || j === x || j === i || j === a || j === C || j === B || typeof j == "object" && j !== null && (j.$$typeof === R || j.$$typeof === F || j.$$typeof === s || j.$$typeof === c || j.$$typeof === y || j.$$typeof === S || j.$$typeof === U || j.$$typeof === N || j.$$typeof === M);
    }
    function O(j) {
      if (typeof j == "object" && j !== null) {
        var le = j.$$typeof;
        switch (le) {
          case e:
            var te = j.type;
            switch (te) {
              case p:
              case x:
              case n:
              case i:
              case a:
              case C:
                return te;
              default:
                var q = te && te.$$typeof;
                switch (q) {
                  case c:
                  case y:
                  case R:
                  case F:
                  case s:
                    return q;
                  default:
                    return le;
                }
            }
          case r:
            return le;
        }
      }
    }
    var T = p, G = x, J = c, Y = s, X = e, se = y, D = n, u = R, l = F, o = r, d = i, g = a, v = C, A = !1;
    function w(j) {
      return A || (A = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), h(j) || O(j) === p;
    }
    function h(j) {
      return O(j) === x;
    }
    function m(j) {
      return O(j) === c;
    }
    function f(j) {
      return O(j) === s;
    }
    function E(j) {
      return typeof j == "object" && j !== null && j.$$typeof === e;
    }
    function k(j) {
      return O(j) === y;
    }
    function b(j) {
      return O(j) === n;
    }
    function I(j) {
      return O(j) === R;
    }
    function L(j) {
      return O(j) === F;
    }
    function P(j) {
      return O(j) === r;
    }
    function H(j) {
      return O(j) === i;
    }
    function $(j) {
      return O(j) === a;
    }
    function V(j) {
      return O(j) === C;
    }
    ut.AsyncMode = T, ut.ConcurrentMode = G, ut.ContextConsumer = J, ut.ContextProvider = Y, ut.Element = X, ut.ForwardRef = se, ut.Fragment = D, ut.Lazy = u, ut.Memo = l, ut.Portal = o, ut.Profiler = d, ut.StrictMode = g, ut.Suspense = v, ut.isAsyncMode = w, ut.isConcurrentMode = h, ut.isContextConsumer = m, ut.isContextProvider = f, ut.isElement = E, ut.isForwardRef = k, ut.isFragment = b, ut.isLazy = I, ut.isMemo = L, ut.isPortal = P, ut.isProfiler = H, ut.isStrictMode = $, ut.isSuspense = V, ut.isValidElementType = z, ut.typeOf = O;
  }()), ut;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = p1() : t.exports = b1();
})(si);
function g1(t) {
  function e(f, E, k, b, I) {
    for (var L = 0, P = 0, H = 0, $ = 0, V, j, le = 0, te = 0, q, xe = q = V = 0, ue = 0, he = 0, Pe = 0, ye = 0, be = k.length, Ue = be - 1, _e, re = "", ve = "", Le = "", pe = "", Te; ue < be; ) {
      if (j = k.charCodeAt(ue), ue === Ue && P + $ + H + L !== 0 && (P !== 0 && (j = P === 47 ? 10 : 47), $ = H = L = 0, be++, Ue++), P + $ + H + L === 0) {
        if (ue === Ue && (0 < he && (re = re.replace(B, "")), 0 < re.trim().length)) {
          switch (j) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              re += k.charAt(ue);
          }
          j = 59;
        }
        switch (j) {
          case 123:
            for (re = re.trim(), V = re.charCodeAt(0), q = 1, ye = ++ue; ue < be; ) {
              switch (j = k.charCodeAt(ue)) {
                case 123:
                  q++;
                  break;
                case 125:
                  q--;
                  break;
                case 47:
                  switch (j = k.charCodeAt(ue + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (xe = ue + 1; xe < Ue; ++xe)
                          switch (k.charCodeAt(xe)) {
                            case 47:
                              if (j === 42 && k.charCodeAt(xe - 1) === 42 && ue + 2 !== xe) {
                                ue = xe + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (j === 47) {
                                ue = xe + 1;
                                break e;
                              }
                          }
                        ue = xe;
                      }
                  }
                  break;
                case 91:
                  j++;
                case 40:
                  j++;
                case 34:
                case 39:
                  for (; ue++ < Ue && k.charCodeAt(ue) !== j; )
                    ;
              }
              if (q === 0)
                break;
              ue++;
            }
            switch (q = k.substring(ye, ue), V === 0 && (V = (re = re.replace(C, "").trim()).charCodeAt(0)), V) {
              case 64:
                switch (0 < he && (re = re.replace(B, "")), j = re.charCodeAt(1), j) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    he = E;
                    break;
                  default:
                    he = g;
                }
                if (q = e(E, he, q, j, I + 1), ye = q.length, 0 < A && (he = r(g, re, Pe), Te = c(3, q, he, E, l, u, ye, j, I, b), re = he.join(""), Te !== void 0 && (ye = (q = Te.trim()).length) === 0 && (j = 0, q = "")), 0 < ye)
                  switch (j) {
                    case 115:
                      re = re.replace(G, s);
                    case 100:
                    case 109:
                    case 45:
                      q = re + "{" + q + "}";
                      break;
                    case 107:
                      re = re.replace(N, "$1 $2"), q = re + "{" + q + "}", q = d === 1 || d === 2 && i("@" + q, 3) ? "@-webkit-" + q + "@" + q : "@" + q;
                      break;
                    default:
                      q = re + q, b === 112 && (q = (ve += q, ""));
                  }
                else
                  q = "";
                break;
              default:
                q = e(E, r(E, re, Pe), q, b, I + 1);
            }
            Le += q, q = Pe = he = xe = V = 0, re = "", j = k.charCodeAt(++ue);
            break;
          case 125:
          case 59:
            if (re = (0 < he ? re.replace(B, "") : re).trim(), 1 < (ye = re.length))
              switch (xe === 0 && (V = re.charCodeAt(0), V === 45 || 96 < V && 123 > V) && (ye = (re = re.replace(" ", ":")).length), 0 < A && (Te = c(1, re, E, f, l, u, ve.length, b, I, b)) !== void 0 && (ye = (re = Te.trim()).length) === 0 && (re = "\0\0"), V = re.charCodeAt(0), j = re.charCodeAt(1), V) {
                case 0:
                  break;
                case 64:
                  if (j === 105 || j === 99) {
                    pe += re + k.charAt(ue);
                    break;
                  }
                default:
                  re.charCodeAt(ye - 1) !== 58 && (ve += a(re, V, j, re.charCodeAt(2)));
              }
            Pe = he = xe = V = 0, re = "", j = k.charCodeAt(++ue);
        }
      }
      switch (j) {
        case 13:
        case 10:
          P === 47 ? P = 0 : 1 + V === 0 && b !== 107 && 0 < re.length && (he = 1, re += "\0"), 0 < A * h && c(0, re, E, f, l, u, ve.length, b, I, b), u = 1, l++;
          break;
        case 59:
        case 125:
          if (P + $ + H + L === 0) {
            u++;
            break;
          }
        default:
          switch (u++, _e = k.charAt(ue), j) {
            case 9:
            case 32:
              if ($ + L + P === 0)
                switch (le) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    _e = "";
                    break;
                  default:
                    j !== 32 && (_e = " ");
                }
              break;
            case 0:
              _e = "\\0";
              break;
            case 12:
              _e = "\\f";
              break;
            case 11:
              _e = "\\v";
              break;
            case 38:
              $ + P + L === 0 && (he = Pe = 1, _e = "\f" + _e);
              break;
            case 108:
              if ($ + P + L + o === 0 && 0 < xe)
                switch (ue - xe) {
                  case 2:
                    le === 112 && k.charCodeAt(ue - 3) === 58 && (o = le);
                  case 8:
                    te === 111 && (o = te);
                }
              break;
            case 58:
              $ + P + L === 0 && (xe = ue);
              break;
            case 44:
              P + H + $ + L === 0 && (he = 1, _e += "\r");
              break;
            case 34:
            case 39:
              P === 0 && ($ = $ === j ? 0 : $ === 0 ? j : $);
              break;
            case 91:
              $ + P + H === 0 && L++;
              break;
            case 93:
              $ + P + H === 0 && L--;
              break;
            case 41:
              $ + P + L === 0 && H--;
              break;
            case 40:
              if ($ + P + L === 0) {
                if (V === 0)
                  switch (2 * le + 3 * te) {
                    case 533:
                      break;
                    default:
                      V = 1;
                  }
                H++;
              }
              break;
            case 64:
              P + H + $ + L + xe + q === 0 && (q = 1);
              break;
            case 42:
            case 47:
              if (!(0 < $ + L + H))
                switch (P) {
                  case 0:
                    switch (2 * j + 3 * k.charCodeAt(ue + 1)) {
                      case 235:
                        P = 47;
                        break;
                      case 220:
                        ye = ue, P = 42;
                    }
                    break;
                  case 42:
                    j === 47 && le === 42 && ye + 2 !== ue && (k.charCodeAt(ye + 2) === 33 && (ve += k.substring(ye, ue + 1)), _e = "", P = 0);
                }
          }
          P === 0 && (re += _e);
      }
      te = le, le = j, ue++;
    }
    if (ye = ve.length, 0 < ye) {
      if (he = E, 0 < A && (Te = c(2, ve, he, f, l, u, ye, b, I, b), Te !== void 0 && (ve = Te).length === 0))
        return pe + ve + Le;
      if (ve = he.join(",") + "{" + ve + "}", d * o !== 0) {
        switch (d !== 2 || i(ve, 2) || (o = 0), o) {
          case 111:
            ve = ve.replace(O, ":-moz-$1") + ve;
            break;
          case 112:
            ve = ve.replace(z, "::-webkit-input-$1") + ve.replace(z, "::-moz-$1") + ve.replace(z, ":-ms-input-$1") + ve;
        }
        o = 0;
      }
    }
    return pe + ve + Le;
  }
  function r(f, E, k) {
    var b = E.trim().split(S);
    E = b;
    var I = b.length, L = f.length;
    switch (L) {
      case 0:
      case 1:
        var P = 0;
        for (f = L === 0 ? "" : f[0] + " "; P < I; ++P)
          E[P] = n(f, E[P], k).trim();
        break;
      default:
        var H = P = 0;
        for (E = []; P < I; ++P)
          for (var $ = 0; $ < L; ++$)
            E[H++] = n(f[$] + " ", b[P], k).trim();
    }
    return E;
  }
  function n(f, E, k) {
    var b = E.charCodeAt(0);
    switch (33 > b && (b = (E = E.trim()).charCodeAt(0)), b) {
      case 38:
        return E.replace(U, "$1" + f.trim());
      case 58:
        return f.trim() + E.replace(U, "$1" + f.trim());
      default:
        if (0 < 1 * k && 0 < E.indexOf("\f"))
          return E.replace(U, (f.charCodeAt(0) === 58 ? "" : "$1") + f.trim());
    }
    return f + E;
  }
  function a(f, E, k, b) {
    var I = f + ";", L = 2 * E + 3 * k + 4 * b;
    if (L === 944) {
      f = I.indexOf(":", 9) + 1;
      var P = I.substring(f, I.length - 1).trim();
      return P = I.substring(0, f).trim() + P + ";", d === 1 || d === 2 && i(P, 1) ? "-webkit-" + P + P : P;
    }
    if (d === 0 || d === 2 && !i(I, 1))
      return I;
    switch (L) {
      case 1015:
        return I.charCodeAt(10) === 97 ? "-webkit-" + I + I : I;
      case 951:
        return I.charCodeAt(3) === 116 ? "-webkit-" + I + I : I;
      case 963:
        return I.charCodeAt(5) === 110 ? "-webkit-" + I + I : I;
      case 1009:
        if (I.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + I + I;
      case 978:
        return "-webkit-" + I + "-moz-" + I + I;
      case 1019:
      case 983:
        return "-webkit-" + I + "-moz-" + I + "-ms-" + I + I;
      case 883:
        if (I.charCodeAt(8) === 45)
          return "-webkit-" + I + I;
        if (0 < I.indexOf("image-set(", 11))
          return I.replace(D, "$1-webkit-$2") + I;
        break;
      case 932:
        if (I.charCodeAt(4) === 45)
          switch (I.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + I.replace("-grow", "") + "-webkit-" + I + "-ms-" + I.replace("grow", "positive") + I;
            case 115:
              return "-webkit-" + I + "-ms-" + I.replace("shrink", "negative") + I;
            case 98:
              return "-webkit-" + I + "-ms-" + I.replace("basis", "preferred-size") + I;
          }
        return "-webkit-" + I + "-ms-" + I + I;
      case 964:
        return "-webkit-" + I + "-ms-flex-" + I + I;
      case 1023:
        if (I.charCodeAt(8) !== 99)
          break;
        return P = I.substring(I.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + P + "-webkit-" + I + "-ms-flex-pack" + P + I;
      case 1005:
        return R.test(I) ? I.replace(F, ":-webkit-") + I.replace(F, ":-moz-") + I : I;
      case 1e3:
        switch (P = I.substring(13).trim(), E = P.indexOf("-") + 1, P.charCodeAt(0) + P.charCodeAt(E)) {
          case 226:
            P = I.replace(T, "tb");
            break;
          case 232:
            P = I.replace(T, "tb-rl");
            break;
          case 220:
            P = I.replace(T, "lr");
            break;
          default:
            return I;
        }
        return "-webkit-" + I + "-ms-" + P + I;
      case 1017:
        if (I.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (E = (I = f).length - 10, P = (I.charCodeAt(E) === 33 ? I.substring(0, E) : I).substring(f.indexOf(":", 7) + 1).trim(), L = P.charCodeAt(0) + (P.charCodeAt(7) | 0)) {
          case 203:
            if (111 > P.charCodeAt(8))
              break;
          case 115:
            I = I.replace(P, "-webkit-" + P) + ";" + I;
            break;
          case 207:
          case 102:
            I = I.replace(P, "-webkit-" + (102 < L ? "inline-" : "") + "box") + ";" + I.replace(P, "-webkit-" + P) + ";" + I.replace(P, "-ms-" + P + "box") + ";" + I;
        }
        return I + ";";
      case 938:
        if (I.charCodeAt(5) === 45)
          switch (I.charCodeAt(6)) {
            case 105:
              return P = I.replace("-items", ""), "-webkit-" + I + "-webkit-box-" + P + "-ms-flex-" + P + I;
            case 115:
              return "-webkit-" + I + "-ms-flex-item-" + I.replace(Y, "") + I;
            default:
              return "-webkit-" + I + "-ms-flex-line-pack" + I.replace("align-content", "").replace(Y, "") + I;
          }
        break;
      case 973:
      case 989:
        if (I.charCodeAt(3) !== 45 || I.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (se.test(f) === !0)
          return (P = f.substring(f.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(f.replace("stretch", "fill-available"), E, k, b).replace(":fill-available", ":stretch") : I.replace(P, "-webkit-" + P) + I.replace(P, "-moz-" + P.replace("fill-", "")) + I;
        break;
      case 962:
        if (I = "-webkit-" + I + (I.charCodeAt(5) === 102 ? "-ms-" + I : "") + I, k + b === 211 && I.charCodeAt(13) === 105 && 0 < I.indexOf("transform", 10))
          return I.substring(0, I.indexOf(";", 27) + 1).replace(M, "$1-webkit-$2") + I;
    }
    return I;
  }
  function i(f, E) {
    var k = f.indexOf(E === 1 ? ":" : "{"), b = f.substring(0, E !== 3 ? k : 10);
    return k = f.substring(k + 1, f.length - 1), w(E !== 2 ? b : b.replace(X, "$1"), k, E);
  }
  function s(f, E) {
    var k = a(E, E.charCodeAt(0), E.charCodeAt(1), E.charCodeAt(2));
    return k !== E + ";" ? k.replace(J, " or ($1)").substring(4) : "(" + E + ")";
  }
  function c(f, E, k, b, I, L, P, H, $, V) {
    for (var j = 0, le = E, te; j < A; ++j)
      switch (te = v[j].call(y, f, le, k, b, I, L, P, H, $, V)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          le = te;
      }
    if (le !== E)
      return le;
  }
  function p(f) {
    switch (f) {
      case void 0:
      case null:
        A = v.length = 0;
        break;
      default:
        if (typeof f == "function")
          v[A++] = f;
        else if (typeof f == "object")
          for (var E = 0, k = f.length; E < k; ++E)
            p(f[E]);
        else
          h = !!f | 0;
    }
    return p;
  }
  function x(f) {
    return f = f.prefix, f !== void 0 && (w = null, f ? typeof f != "function" ? d = 1 : (d = 2, w = f) : d = 0), x;
  }
  function y(f, E) {
    var k = f;
    if (33 > k.charCodeAt(0) && (k = k.trim()), m = k, k = [m], 0 < A) {
      var b = c(-1, E, k, k, l, u, 0, 0, 0, 0);
      b !== void 0 && typeof b == "string" && (E = b);
    }
    var I = e(g, k, E, 0, 0);
    return 0 < A && (b = c(-2, I, k, k, l, u, I.length, 0, 0, 0), b !== void 0 && (I = b)), m = "", o = 0, u = l = 1, I;
  }
  var C = /^\0+/g, B = /[\0\r\f]/g, F = /: */g, R = /zoo|gra/, M = /([,: ])(transform)/g, S = /,\r+?/g, U = /([\t\r\n ])*\f?&/g, N = /@(k\w+)\s*(\S*)\s*/, z = /::(place)/g, O = /:(read-only)/g, T = /[svh]\w+-[tblr]{2}/, G = /\(\s*(.*)\s*\)/g, J = /([\s\S]*?);/g, Y = /-self|flex-/g, X = /[^]*?(:[rp][el]a[\w-]+)[^]*/, se = /stretch|:\s*\w+\-(?:conte|avail)/, D = /([^-])(image-set\()/, u = 1, l = 1, o = 0, d = 1, g = [], v = [], A = 0, w = null, h = 0, m = "";
  return y.use = p, y.set = x, t !== void 0 && x(t), y;
}
var x1 = {
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
function y1(t) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return e[r] === void 0 && (e[r] = t(r)), e[r];
  };
}
var v1 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, v0 = /* @__PURE__ */ y1(
  function(t) {
    return v1.test(t) || t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) < 91;
  }
), Ro = si.exports, w1 = {
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
}, A1 = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, E1 = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ef = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Mo = {};
Mo[Ro.ForwardRef] = E1;
Mo[Ro.Memo] = Ef;
function w0(t) {
  return Ro.isMemo(t) ? Ef : Mo[t.$$typeof] || w1;
}
var C1 = Object.defineProperty, I1 = Object.getOwnPropertyNames, A0 = Object.getOwnPropertySymbols, k1 = Object.getOwnPropertyDescriptor, S1 = Object.getPrototypeOf, E0 = Object.prototype;
function Cf(t, e, r) {
  if (typeof e != "string") {
    if (E0) {
      var n = S1(e);
      n && n !== E0 && Cf(t, n, r);
    }
    var a = I1(e);
    A0 && (a = a.concat(A0(e)));
    for (var i = w0(t), s = w0(e), c = 0; c < a.length; ++c) {
      var p = a[c];
      if (!A1[p] && !(r && r[p]) && !(s && s[p]) && !(i && i[p])) {
        var x = k1(e, p);
        try {
          C1(t, p, x);
        } catch {
        }
      }
    }
  }
  return t;
}
var D1 = Cf;
function Ur() {
  return (Ur = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }).apply(this, arguments);
}
var C0 = function(t, e) {
  for (var r = [t[0]], n = 0, a = e.length; n < a; n += 1)
    r.push(e[n], t[n + 1]);
  return r;
}, Js = function(t) {
  return t !== null && typeof t == "object" && (t.toString ? t.toString() : Object.prototype.toString.call(t)) === "[object Object]" && !si.exports.typeOf(t);
}, zi = Object.freeze([]), mn = Object.freeze({});
function ca(t) {
  return typeof t == "function";
}
function Ys(t) {
  return process.env.NODE_ENV !== "production" && typeof t == "string" && t || t.displayName || t.name || "Component";
}
function _o(t) {
  return t && typeof t.styledComponentId == "string";
}
var fa = typeof process < "u" && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", To = typeof window < "u" && "HTMLElement" in window, B1 = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), F1 = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function R1() {
  for (var t = arguments.length <= 0 ? void 0 : arguments[0], e = [], r = 1, n = arguments.length; r < n; r += 1)
    e.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return e.forEach(function(a) {
    t = t.replace(/%[a-z]/, a);
  }), t;
}
function Qr(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + t + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(R1.apply(void 0, [F1[t]].concat(r)).trim());
}
var M1 = function() {
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
      for (var a = this.groupSizes, i = a.length, s = i; r >= s; )
        (s <<= 1) < 0 && Qr(16, "" + r);
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(a), this.length = s;
      for (var c = i; c < s; c++)
        this.groupSizes[c] = 0;
    }
    for (var p = this.indexOfGroup(r + 1), x = 0, y = n.length; x < y; x++)
      this.tag.insertRule(p, n[x]) && (this.groupSizes[r]++, p++);
  }, e.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], a = this.indexOfGroup(r), i = a + n;
      this.groupSizes[r] = 0;
      for (var s = a; s < i; s++)
        this.tag.deleteRule(a);
    }
  }, e.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0)
      return n;
    for (var a = this.groupSizes[r], i = this.indexOfGroup(r), s = i + a, c = i; c < s; c++)
      n += this.tag.getRule(c) + `/*!sc*/
`;
    return n;
  }, t;
}(), Bi = /* @__PURE__ */ new Map(), Gi = /* @__PURE__ */ new Map(), Na = 1, xi = function(t) {
  if (Bi.has(t))
    return Bi.get(t);
  for (; Gi.has(Na); )
    Na++;
  var e = Na++;
  return process.env.NODE_ENV !== "production" && ((0 | e) < 0 || e > 1 << 30) && Qr(16, "" + e), Bi.set(t, e), Gi.set(e, t), e;
}, _1 = function(t) {
  return Gi.get(t);
}, T1 = function(t, e) {
  e >= Na && (Na = e + 1), Bi.set(t, e), Gi.set(e, t);
}, U1 = "style[" + fa + '][data-styled-version="5.3.6"]', P1 = new RegExp("^" + fa + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), N1 = function(t, e, r) {
  for (var n, a = r.split(","), i = 0, s = a.length; i < s; i++)
    (n = a[i]) && t.registerName(e, n);
}, O1 = function(t, e) {
  for (var r = (e.textContent || "").split(`/*!sc*/
`), n = [], a = 0, i = r.length; a < i; a++) {
    var s = r[a].trim();
    if (s) {
      var c = s.match(P1);
      if (c) {
        var p = 0 | parseInt(c[1], 10), x = c[2];
        p !== 0 && (T1(x, p), N1(t, x, c[3]), t.getTag().insertRules(p, n)), n.length = 0;
      } else
        n.push(s);
    }
  }
}, L1 = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, If = function(t) {
  var e = document.head, r = t || e, n = document.createElement("style"), a = function(c) {
    for (var p = c.childNodes, x = p.length; x >= 0; x--) {
      var y = p[x];
      if (y && y.nodeType === 1 && y.hasAttribute(fa))
        return y;
    }
  }(r), i = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(fa, "active"), n.setAttribute("data-styled-version", "5.3.6");
  var s = L1();
  return s && n.setAttribute("nonce", s), r.insertBefore(n, i), n;
}, j1 = function() {
  function t(r) {
    var n = this.element = If(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet)
        return a.sheet;
      for (var i = document.styleSheets, s = 0, c = i.length; s < c; s++) {
        var p = i[s];
        if (p.ownerNode === a)
          return p;
      }
      Qr(17);
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
}(), W1 = function() {
  function t(r) {
    var n = this.element = If(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var e = t.prototype;
  return e.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var a = document.createTextNode(n), i = this.nodes[r];
      return this.element.insertBefore(a, i || null), this.length++, !0;
    }
    return !1;
  }, e.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, e.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, t;
}(), H1 = function() {
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
}(), I0 = To, z1 = { isServer: !To, useCSSOMInjection: !B1 }, kf = function() {
  function t(r, n, a) {
    r === void 0 && (r = mn), n === void 0 && (n = {}), this.options = Ur({}, z1, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && To && I0 && (I0 = !1, function(i) {
      for (var s = document.querySelectorAll(U1), c = 0, p = s.length; c < p; c++) {
        var x = s[c];
        x && x.getAttribute(fa) !== "active" && (O1(i, x), x.parentNode && x.parentNode.removeChild(x));
      }
    }(this));
  }
  t.registerId = function(r) {
    return xi(r);
  };
  var e = t.prototype;
  return e.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new t(Ur({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, e.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, e.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, i = n.useCSSOMInjection, s = n.target, r = a ? new H1(s) : i ? new j1(s) : new W1(s), new M1(r)));
    var r, n, a, i, s;
  }, e.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, e.registerName = function(r, n) {
    if (xi(r), this.names.has(r))
      this.names.get(r).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(r, a);
    }
  }, e.insertRules = function(r, n, a) {
    this.registerName(r, n), this.getTag().insertRules(xi(r), a);
  }, e.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, e.clearRules = function(r) {
    this.getTag().clearGroup(xi(r)), this.clearNames(r);
  }, e.clearTag = function() {
    this.tag = void 0;
  }, e.toString = function() {
    return function(r) {
      for (var n = r.getTag(), a = n.length, i = "", s = 0; s < a; s++) {
        var c = _1(s);
        if (c !== void 0) {
          var p = r.names.get(c), x = n.getGroup(s);
          if (p && x && p.size) {
            var y = fa + ".g" + s + '[id="' + c + '"]', C = "";
            p !== void 0 && p.forEach(function(B) {
              B.length > 0 && (C += B + ",");
            }), i += "" + x + y + '{content:"' + C + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, t;
}(), G1 = /(a)(d)/gi, k0 = function(t) {
  return String.fromCharCode(t + (t > 25 ? 39 : 97));
};
function Qs(t) {
  var e, r = "";
  for (e = Math.abs(t); e > 52; e = e / 52 | 0)
    r = k0(e % 52) + r;
  return (k0(e % 52) + r).replace(G1, "$1-$2");
}
var _n = function(t, e) {
  for (var r = e.length; r; )
    t = 33 * t ^ e.charCodeAt(--r);
  return t;
}, Sf = function(t) {
  return _n(5381, t);
};
function $1(t) {
  for (var e = 0; e < t.length; e += 1) {
    var r = t[e];
    if (ca(r) && !_o(r))
      return !1;
  }
  return !0;
}
var V1 = Sf("5.3.6"), K1 = function() {
  function t(e, r, n) {
    this.rules = e, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && $1(e), this.componentId = r, this.baseHash = _n(V1, r), this.baseStyle = n, kf.registerId(r);
  }
  return t.prototype.generateAndInjectStyles = function(e, r, n) {
    var a = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(e, r, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId))
        i.push(this.staticRulesId);
      else {
        var s = da(this.rules, e, r, n).join(""), c = Qs(_n(this.baseHash, s) >>> 0);
        if (!r.hasNameForId(a, c)) {
          var p = n(s, "." + c, void 0, a);
          r.insertRules(a, c, p);
        }
        i.push(c), this.staticRulesId = c;
      }
    else {
      for (var x = this.rules.length, y = _n(this.baseHash, n.hash), C = "", B = 0; B < x; B++) {
        var F = this.rules[B];
        if (typeof F == "string")
          C += F, process.env.NODE_ENV !== "production" && (y = _n(y, F + B));
        else if (F) {
          var R = da(F, e, r, n), M = Array.isArray(R) ? R.join("") : R;
          y = _n(y, M + B), C += M;
        }
      }
      if (C) {
        var S = Qs(y >>> 0);
        if (!r.hasNameForId(a, S)) {
          var U = n(C, "." + S, void 0, a);
          r.insertRules(a, S, U);
        }
        i.push(S);
      }
    }
    return i.join(" ");
  }, t;
}(), q1 = /^\s*\/\/.*$/gm, X1 = [":", "[", ".", "#"];
function Z1(t) {
  var e, r, n, a, i = t === void 0 ? mn : t, s = i.options, c = s === void 0 ? mn : s, p = i.plugins, x = p === void 0 ? zi : p, y = new g1(c), C = [], B = function(M) {
    function S(U) {
      if (U)
        try {
          M(U + "}");
        } catch {
        }
    }
    return function(U, N, z, O, T, G, J, Y, X, se) {
      switch (U) {
        case 1:
          if (X === 0 && N.charCodeAt(0) === 64)
            return M(N + ";"), "";
          break;
        case 2:
          if (Y === 0)
            return N + "/*|*/";
          break;
        case 3:
          switch (Y) {
            case 102:
            case 112:
              return M(z[0] + N), "";
            default:
              return N + (se === 0 ? "/*|*/" : "");
          }
        case -2:
          N.split("/*|*/}").forEach(S);
      }
    };
  }(function(M) {
    C.push(M);
  }), F = function(M, S, U) {
    return S === 0 && X1.indexOf(U[r.length]) !== -1 || U.match(a) ? M : "." + e;
  };
  function R(M, S, U, N) {
    N === void 0 && (N = "&");
    var z = M.replace(q1, ""), O = S && U ? U + " " + S + " { " + z + " }" : z;
    return e = N, r = S, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), y(U || !S ? "" : S, O);
  }
  return y.use([].concat(x, [function(M, S, U) {
    M === 2 && U.length && U[0].lastIndexOf(r) > 0 && (U[0] = U[0].replace(n, F));
  }, B, function(M) {
    if (M === -2) {
      var S = C;
      return C = [], S;
    }
  }])), R.hash = x.length ? x.reduce(function(M, S) {
    return S.name || Qr(15), _n(M, S.name);
  }, 5381).toString() : "", R;
}
var Df = zr.createContext();
Df.Consumer;
var Bf = zr.createContext(), J1 = (Bf.Consumer, new kf()), eo = Z1();
function Y1() {
  return vn(Df) || J1;
}
function Q1() {
  return vn(Bf) || eo;
}
var Ff = function() {
  function t(e, r) {
    var n = this;
    this.inject = function(a, i) {
      i === void 0 && (i = eo);
      var s = n.name + i.hash;
      a.hasNameForId(n.id, s) || a.insertRules(n.id, s, i(n.rules, s, "@keyframes"));
    }, this.toString = function() {
      return Qr(12, String(n.name));
    }, this.name = e, this.id = "sc-keyframes-" + e, this.rules = r;
  }
  return t.prototype.getName = function(e) {
    return e === void 0 && (e = eo), this.name + e.hash;
  }, t;
}(), eh = /([A-Z])/, th = /([A-Z])/g, rh = /^ms-/, nh = function(t) {
  return "-" + t.toLowerCase();
};
function S0(t) {
  return eh.test(t) ? t.replace(th, nh).replace(rh, "-ms-") : t;
}
var D0 = function(t) {
  return t == null || t === !1 || t === "";
};
function da(t, e, r, n) {
  if (Array.isArray(t)) {
    for (var a, i = [], s = 0, c = t.length; s < c; s += 1)
      (a = da(t[s], e, r, n)) !== "" && (Array.isArray(a) ? i.push.apply(i, a) : i.push(a));
    return i;
  }
  if (D0(t))
    return "";
  if (_o(t))
    return "." + t.styledComponentId;
  if (ca(t)) {
    if (typeof (x = t) != "function" || x.prototype && x.prototype.isReactComponent || !e)
      return t;
    var p = t(e);
    return process.env.NODE_ENV !== "production" && si.exports.isElement(p) && console.warn(Ys(t) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), da(p, e, r, n);
  }
  var x;
  return t instanceof Ff ? r ? (t.inject(r, n), t.getName(n)) : t : Js(t) ? function y(C, B) {
    var F, R, M = [];
    for (var S in C)
      C.hasOwnProperty(S) && !D0(C[S]) && (Array.isArray(C[S]) && C[S].isCss || ca(C[S]) ? M.push(S0(S) + ":", C[S], ";") : Js(C[S]) ? M.push.apply(M, y(C[S], S)) : M.push(S0(S) + ": " + (F = S, (R = C[S]) == null || typeof R == "boolean" || R === "" ? "" : typeof R != "number" || R === 0 || F in x1 ? String(R).trim() : R + "px") + ";"));
    return B ? [B + " {"].concat(M, ["}"]) : M;
  }(t) : t.toString();
}
var B0 = function(t) {
  return Array.isArray(t) && (t.isCss = !0), t;
};
function rs(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  return ca(t) || Js(t) ? B0(da(C0(zi, [t].concat(r)))) : r.length === 0 && t.length === 1 && typeof t[0] == "string" ? t : B0(da(C0(t, r)));
}
var F0 = /invalid hook call/i, yi = /* @__PURE__ */ new Set(), ah = function(t, e) {
  if (process.env.NODE_ENV !== "production") {
    var r = "The component " + t + (e ? ' with the id of "' + e + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var a = !0;
      console.error = function(i) {
        if (F0.test(i))
          a = !1, yi.delete(r);
        else {
          for (var s = arguments.length, c = new Array(s > 1 ? s - 1 : 0), p = 1; p < s; p++)
            c[p - 1] = arguments[p];
          n.apply(void 0, [i].concat(c));
        }
      }, Er(), a && !yi.has(r) && (console.warn(r), yi.add(r));
    } catch (i) {
      F0.test(i.message) && yi.delete(r);
    } finally {
      console.error = n;
    }
  }
}, ih = function(t, e, r) {
  return r === void 0 && (r = mn), t.theme !== r.theme && t.theme || e || r.theme;
}, sh = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, oh = /(^-|-$)/g;
function As(t) {
  return t.replace(sh, "-").replace(oh, "");
}
var Rf = function(t) {
  return Qs(Sf(t) >>> 0);
};
function vi(t) {
  return typeof t == "string" && (process.env.NODE_ENV === "production" || t.charAt(0) === t.charAt(0).toLowerCase());
}
var to = function(t) {
  return typeof t == "function" || typeof t == "object" && t !== null && !Array.isArray(t);
}, ch = function(t) {
  return t !== "__proto__" && t !== "constructor" && t !== "prototype";
};
function fh(t, e, r) {
  var n = t[r];
  to(e) && to(n) ? Mf(n, e) : t[r] = e;
}
function Mf(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  for (var a = 0, i = r; a < i.length; a++) {
    var s = i[a];
    if (to(s))
      for (var c in s)
        ch(c) && fh(t, s[c], c);
  }
  return t;
}
var Va = zr.createContext();
Va.Consumer;
function dh(t) {
  var e = vn(Va), r = wa(function() {
    return function(n, a) {
      if (!n)
        return Qr(14);
      if (ca(n)) {
        var i = n(a);
        return process.env.NODE_ENV === "production" || i !== null && !Array.isArray(i) && typeof i == "object" ? i : Qr(7);
      }
      return Array.isArray(n) || typeof n != "object" ? Qr(8) : a ? Ur({}, a, {}, n) : n;
    }(t.theme, e);
  }, [t.theme, e]);
  return t.children ? zr.createElement(Va.Provider, { value: r }, t.children) : null;
}
var Es = {};
function _f(t, e, r) {
  var n = _o(t), a = !vi(t), i = e.attrs, s = i === void 0 ? zi : i, c = e.componentId, p = c === void 0 ? function(N, z) {
    var O = typeof N != "string" ? "sc" : As(N);
    Es[O] = (Es[O] || 0) + 1;
    var T = O + "-" + Rf("5.3.6" + O + Es[O]);
    return z ? z + "-" + T : T;
  }(e.displayName, e.parentComponentId) : c, x = e.displayName, y = x === void 0 ? function(N) {
    return vi(N) ? "styled." + N : "Styled(" + Ys(N) + ")";
  }(t) : x, C = e.displayName && e.componentId ? As(e.displayName) + "-" + e.componentId : e.componentId || p, B = n && t.attrs ? Array.prototype.concat(t.attrs, s).filter(Boolean) : s, F = e.shouldForwardProp;
  n && t.shouldForwardProp && (F = e.shouldForwardProp ? function(N, z, O) {
    return t.shouldForwardProp(N, z, O) && e.shouldForwardProp(N, z, O);
  } : t.shouldForwardProp);
  var R, M = new K1(r, C, n ? t.componentStyle : void 0), S = M.isStatic && s.length === 0, U = function(N, z) {
    return function(O, T, G, J) {
      var Y = O.attrs, X = O.componentStyle, se = O.defaultProps, D = O.foldedComponentIds, u = O.shouldForwardProp, l = O.styledComponentId, o = O.target;
      process.env.NODE_ENV !== "production" && g0(l);
      var d = function(b, I, L) {
        b === void 0 && (b = mn);
        var P = Ur({}, I, { theme: b }), H = {};
        return L.forEach(function($) {
          var V, j, le, te = $;
          for (V in ca(te) && (te = te(P)), te)
            P[V] = H[V] = V === "className" ? (j = H[V], le = te[V], j && le ? j + " " + le : j || le) : te[V];
        }), [P, H];
      }(ih(T, vn(Va), se) || mn, T, Y), g = d[0], v = d[1], A = function(b, I, L, P) {
        var H = Y1(), $ = Q1(), V = I ? b.generateAndInjectStyles(mn, H, $) : b.generateAndInjectStyles(L, H, $);
        return process.env.NODE_ENV !== "production" && g0(V), process.env.NODE_ENV !== "production" && !I && P && P(V), V;
      }(X, J, g, process.env.NODE_ENV !== "production" ? O.warnTooManyClasses : void 0), w = G, h = v.$as || T.$as || v.as || T.as || o, m = vi(h), f = v !== T ? Ur({}, T, {}, v) : T, E = {};
      for (var k in f)
        k[0] !== "$" && k !== "as" && (k === "forwardedAs" ? E.as = f[k] : (u ? u(k, v0, h) : !m || v0(k)) && (E[k] = f[k]));
      return T.style && v.style !== T.style && (E.style = Ur({}, T.style, {}, v.style)), E.className = Array.prototype.concat(D, l, A !== l ? A : null, T.className, v.className).filter(Boolean).join(" "), E.ref = w, c1(h, E);
    }(R, N, z, S);
  };
  return U.displayName = y, (R = zr.forwardRef(U)).attrs = B, R.componentStyle = M, R.displayName = y, R.shouldForwardProp = F, R.foldedComponentIds = n ? Array.prototype.concat(t.foldedComponentIds, t.styledComponentId) : zi, R.styledComponentId = C, R.target = n ? t.target : t, R.withComponent = function(N) {
    var z = e.componentId, O = function(G, J) {
      if (G == null)
        return {};
      var Y, X, se = {}, D = Object.keys(G);
      for (X = 0; X < D.length; X++)
        Y = D[X], J.indexOf(Y) >= 0 || (se[Y] = G[Y]);
      return se;
    }(e, ["componentId"]), T = z && z + "-" + (vi(N) ? N : As(Ys(N)));
    return _f(N, Ur({}, O, { attrs: B, componentId: T }), r);
  }, Object.defineProperty(R, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(N) {
    this._foldedDefaultProps = n ? Mf({}, t.defaultProps, N) : N;
  } }), process.env.NODE_ENV !== "production" && (ah(y, C), R.warnTooManyClasses = function(N, z) {
    var O = {}, T = !1;
    return function(G) {
      if (!T && (O[G] = !0, Object.keys(O).length >= 200)) {
        var J = z ? ' with the id of "' + z + '"' : "";
        console.warn("Over 200 classes were generated for component " + N + J + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), T = !0, O = {};
      }
    };
  }(y, C)), R.toString = function() {
    return "." + R.styledComponentId;
  }, a && D1(R, t, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), R;
}
var ro = function(t) {
  return function e(r, n, a) {
    if (a === void 0 && (a = mn), !si.exports.isValidElementType(n))
      return Qr(1, String(n));
    var i = function() {
      return r(n, a, rs.apply(void 0, arguments));
    };
    return i.withConfig = function(s) {
      return e(r, n, Ur({}, a, {}, s));
    }, i.attrs = function(s) {
      return e(r, n, Ur({}, a, { attrs: Array.prototype.concat(a.attrs, s).filter(Boolean) }));
    }, i;
  }(_f, t);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(t) {
  ro[t] = ro(t);
});
function Uo(t) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  var a = rs.apply(void 0, [t].concat(r)).join(""), i = Rf(a);
  return new Ff(i, a);
}
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const ee = ro, lh = {
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
}, hh = (t) => /* @__PURE__ */ ae.createElement("svg", { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ ae.createElement("path", { d: "M2.5 15C2.5 15.4583 2.875 15.8333 3.33333 15.8333H7.5V14.1667H3.33333C2.875 14.1667 2.5 14.5417 2.5 15ZM2.5 5C2.5 5.45833 2.875 5.83333 3.33333 5.83333H10.8333V4.16667H3.33333C2.875 4.16667 2.5 4.54167 2.5 5ZM10.8333 16.6667V15.8333H16.6667C17.125 15.8333 17.5 15.4583 17.5 15C17.5 14.5417 17.125 14.1667 16.6667 14.1667H10.8333V13.3333C10.8333 12.875 10.4583 12.5 10 12.5C9.54167 12.5 9.16667 12.875 9.16667 13.3333V16.6667C9.16667 17.125 9.54167 17.5 10 17.5C10.4583 17.5 10.8333 17.125 10.8333 16.6667ZM5.83333 8.33333V9.16667H3.33333C2.875 9.16667 2.5 9.54167 2.5 10C2.5 10.4583 2.875 10.8333 3.33333 10.8333H5.83333V11.6667C5.83333 12.125 6.20833 12.5 6.66667 12.5C7.125 12.5 7.5 12.125 7.5 11.6667V8.33333C7.5 7.875 7.125 7.5 6.66667 7.5C6.20833 7.5 5.83333 7.875 5.83333 8.33333ZM17.5 10C17.5 9.54167 17.125 9.16667 16.6667 9.16667H9.16667V10.8333H16.6667C17.125 10.8333 17.5 10.4583 17.5 10ZM13.3333 7.5C13.7917 7.5 14.1667 7.125 14.1667 6.66667V5.83333H16.6667C17.125 5.83333 17.5 5.45833 17.5 5C17.5 4.54167 17.125 4.16667 16.6667 4.16667H14.1667V3.33333C14.1667 2.875 13.7917 2.5 13.3333 2.5C12.875 2.5 12.5 2.875 12.5 3.33333V6.66667C12.5 7.125 12.875 7.5 13.3333 7.5Z", fill: "currentColor" })), R0 = (t) => /* @__PURE__ */ ae.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ ae.createElement("path", { d: "M6.66667 10.6667V5.33333C6.66667 4.6 7.26 4 8 4H14V3.33333C14 2.6 13.4 2 12.6667 2H3.33333C2.59333 2 2 2.6 2 3.33333V12.6667C2 13.4 2.59333 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V12H8C7.26 12 6.66667 11.4 6.66667 10.6667ZM8.66667 5.33333C8.3 5.33333 8 5.63333 8 6V10C8 10.3667 8.3 10.6667 8.66667 10.6667H14.6667V5.33333H8.66667ZM10.6667 9C10.1133 9 9.66667 8.55333 9.66667 8C9.66667 7.44667 10.1133 7 10.6667 7C11.22 7 11.6667 7.44667 11.6667 8C11.6667 8.55333 11.22 9 10.6667 9Z", fill: "currentColor" })), no = (t) => /* @__PURE__ */ ae.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ ae.createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z", fill: "currentColor" })), uh = (t) => /* @__PURE__ */ ae.createElement("svg", { width: 24, height: 24, transform: "none", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ ae.createElement("path", { d: "M12.14 6.13978L9.34997 3.35978C9.14997 3.16978 8.83997 3.16978 8.63997 3.35978L5.84997 6.13978C5.52997 6.44978 5.75997 6.98978 6.19997 6.98978L7.99997 6.98978L7.99997 12.9998C7.99997 13.5498 8.44997 13.9998 8.99997 13.9998C9.54997 13.9998 9.99997 13.5498 9.99997 12.9998L9.99997 6.98978L11.79 6.98978C12.24 6.98978 12.46 6.44978 12.14 6.13978ZM15.35 20.6498L18.14 17.8698C18.46 17.5598 18.23 17.0198 17.79 17.0198L16 17.0198L16 10.9998C16 10.4498 15.55 9.99979 15 9.99979C14.45 9.99979 14 10.4498 14 10.9998L14 17.0098L12.21 17.0098C11.76 17.0098 11.54 17.5498 11.86 17.8598L14.65 20.6398C14.84 20.8398 15.16 20.8398 15.35 20.6498Z", fill: "currentColor" })), mh = (t) => /* @__PURE__ */ ae.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ ae.createElement("g", { clipPath: "url(#clip0_1036_5139)" }, /* @__PURE__ */ ae.createElement("path", { d: "M10.0833 3.41667L11.7499 5.08334L10.0833 6.75001", stroke: "#979797", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ ae.createElement("path", { d: "M4.25 7.58333V6.74999C4.25 6.30797 4.42559 5.88404 4.73816 5.57148C5.05072 5.25892 5.47464 5.08333 5.91667 5.08333H11.75", stroke: "#979797", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ ae.createElement("path", { d: "M5.91667 12.5833L4.25 10.9167L5.91667 9.25", stroke: "#979797", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ ae.createElement("path", { d: "M11.75 8.41667V9.25001C11.75 9.69203 11.5744 10.116 11.2618 10.4285C10.9493 10.7411 10.5254 10.9167 10.0833 10.9167H4.25", stroke: "#979797", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })), /* @__PURE__ */ ae.createElement("defs", null, /* @__PURE__ */ ae.createElement("clipPath", { id: "clip0_1036_5139" }, /* @__PURE__ */ ae.createElement("rect", { width: 10, height: 10, fill: "white", transform: "translate(3 3)" })))), Tf = (t) => /* @__PURE__ */ ae.createElement("svg", { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ ae.createElement("g", { clipPath: "url(#clip0_268_44772)" }, /* @__PURE__ */ ae.createElement("path", { d: "M13.85 2.49155C13.4417 2.08322 12.7833 2.08322 12.375 2.49155L5.44999 9.41655C5.12499 9.74155 5.12499 10.2666 5.44999 10.5916L12.375 17.5166C12.7833 17.9249 13.4417 17.9249 13.85 17.5166C14.2583 17.1082 14.2583 16.4499 13.85 16.0416L7.81665 9.99989L13.8583 3.95822C14.2583 3.55822 14.2583 2.89155 13.85 2.49155Z", fill: "currentColor" })), /* @__PURE__ */ ae.createElement("defs", null, /* @__PURE__ */ ae.createElement("clipPath", { id: "clip0_268_44772" }, /* @__PURE__ */ ae.createElement("rect", { width: 20, height: 20, fill: "currentColor" })))), M0 = (t) => /* @__PURE__ */ ae.createElement("svg", { width: 61, height: 20, viewBox: "0 0 61 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ ae.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ ae.createElement("path", { d: "M6.01758 9.99596L13.5114 14.2792C13.5713 14.313 13.639 14.3306 13.7079 14.3304C13.7768 14.3302 13.8444 14.3122 13.9041 14.2781C13.9639 14.244 14.0137 14.195 14.0487 14.1359C14.0837 14.0768 14.1027 14.0097 14.1039 13.9411L14.1051 6.05348C14.1044 5.98473 14.0856 5.91738 14.0507 5.85809C14.0158 5.79879 13.9659 5.74962 13.9061 5.71544C13.8462 5.68126 13.7784 5.66325 13.7095 5.66321C13.6405 5.66316 13.5727 5.68108 13.5128 5.71518L6.01758 9.99596Z", fill: "currentColor" }), /* @__PURE__ */ ae.createElement("path", { d: "M13.0758 3.86933L8.10117 0.0794926C8.04809 0.0397578 7.98589 0.0138881 7.92022 0.00423986C7.85455 -0.00540841 7.7875 0.00147132 7.72517 0.0242526C7.66285 0.0470339 7.60724 0.0849927 7.56341 0.134671C7.51957 0.18435 7.4889 0.24417 7.47419 0.308682L5.65527 8.7463L13.0354 4.52282C13.0925 4.49102 13.1407 4.44544 13.1755 4.39027C13.2103 4.3351 13.2306 4.2721 13.2346 4.20706C13.2386 4.14201 13.2262 4.077 13.1985 4.01799C13.1707 3.95898 13.1285 3.90787 13.0758 3.86933Z", fill: "currentColor" }), /* @__PURE__ */ ae.createElement("path", { d: "M8.09737 19.9187L13.0847 16.1247C13.1363 16.0854 13.1774 16.0341 13.2043 15.9753C13.2313 15.9164 13.2433 15.8519 13.2394 15.7873C13.2354 15.7228 13.2155 15.6602 13.1816 15.605C13.1476 15.5499 13.1006 15.504 13.0446 15.4712L5.6543 11.2511L7.47622 19.6893C7.48956 19.754 7.51921 19.8142 7.56237 19.8644C7.60553 19.9145 7.66079 19.9528 7.72293 19.9758C7.78507 19.9987 7.85205 20.0055 7.91756 19.9955C7.98307 19.9855 8.04495 19.9591 8.09737 19.9187Z", fill: "currentColor" }), /* @__PURE__ */ ae.createElement("path", { d: "M4.09602 9.9957L6.05884 0.904641C6.07589 0.825899 6.06815 0.743831 6.03666 0.66964C6.00517 0.595448 5.95148 0.532749 5.88291 0.4901C5.81434 0.447452 5.73423 0.426932 5.65353 0.431343C5.57282 0.435754 5.49544 0.46488 5.43196 0.514745L0.410088 4.33735C0.282855 4.43432 0.179798 4.55925 0.108943 4.70241C0.0380878 4.84557 0.00134694 5.0031 0.00158152 5.16273L1.66608e-06 14.8445C-0.000284921 15.0042 0.0364046 15.1617 0.107213 15.3049C0.178021 15.4481 0.281037 15.573 0.408239 15.6701L5.42887 19.4886C5.49281 19.5364 5.56975 19.5638 5.6496 19.5672C5.72945 19.5706 5.80848 19.5499 5.8763 19.5077C5.94411 19.4656 5.99756 19.404 6.0296 19.331C6.06165 19.258 6.07081 19.1771 6.05587 19.0989L4.09602 9.9957Z", fill: "currentColor" }), /* @__PURE__ */ ae.createElement("path", { d: "M43.1801 7.34494C43.5389 7.33762 43.8933 7.4251 44.2072 7.59846C44.521 7.77183 44.7833 8.02492 44.9672 8.332L44.3463 8.80862C44.2137 8.60905 44.039 8.44065 43.8344 8.31515C43.6367 8.19754 43.4102 8.13671 43.1799 8.13939C42.9723 8.13484 42.768 8.19155 42.5926 8.30239C42.5095 8.35695 42.4423 8.43253 42.3981 8.52141C42.3539 8.6103 42.3341 8.70929 42.3409 8.80827C42.3382 8.90224 42.3583 8.99546 42.3996 9.07999C42.4394 9.15634 42.4934 9.22444 42.5588 9.28068C42.6327 9.34389 42.7145 9.39734 42.8021 9.43971C42.8972 9.48722 43.0007 9.53879 43.1125 9.59441L43.7334 9.87889C43.9273 9.96675 44.1151 10.0674 44.2956 10.1801C44.451 10.2757 44.5923 10.3925 44.7153 10.5271C44.8248 10.6494 44.9127 10.7895 44.9752 10.9412C45.0388 11.1037 45.0702 11.2769 45.0675 11.4513C45.071 11.6808 45.0221 11.9081 44.9245 12.1161C44.8321 12.3104 44.6974 12.4818 44.5302 12.6177C44.3542 12.7588 44.1537 12.8665 43.9386 12.9353C43.7016 13.0123 43.4536 13.0504 43.2043 13.0481C42.7713 13.0564 42.3444 12.9449 41.971 12.7261C41.6147 12.5133 41.3199 12.2121 41.1152 11.852L41.7446 11.3755C41.8238 11.4937 41.9122 11.6056 42.009 11.71C42.1058 11.8152 42.2141 11.9091 42.3319 11.9902C42.4521 12.0725 42.5834 12.1373 42.722 12.1827C42.8751 12.2317 43.0352 12.2557 43.1961 12.2537C43.4434 12.2654 43.6874 12.1932 43.8882 12.0489C43.9746 11.983 44.0437 11.8973 44.0898 11.7991C44.1359 11.7008 44.1575 11.593 44.1528 11.4846C44.1547 11.388 44.1347 11.2923 44.0941 11.2045C44.0539 11.1223 43.9966 11.0496 43.9262 10.9911C43.8469 10.9255 43.7611 10.868 43.6702 10.8196C43.5723 10.7667 43.4619 10.7124 43.3389 10.6566L42.7267 10.3721C42.5541 10.292 42.386 10.2027 42.2232 10.1044C42.0722 10.0143 41.9339 9.90458 41.812 9.77815C41.6959 9.65758 41.6021 9.51745 41.5351 9.36426C41.4656 9.19888 41.4314 9.02091 41.4346 8.84164C41.4314 8.62736 41.4789 8.41534 41.5731 8.22272C41.6641 8.04046 41.7928 7.87949 41.9508 7.75043C42.1152 7.61681 42.303 7.51472 42.5047 7.44934C42.7228 7.37848 42.9508 7.34323 43.1801 7.34494Z", fill: "currentColor" }), /* @__PURE__ */ ae.createElement("path", { d: "M50.0013 11.5106L51.0674 8.85145L51.9988 8.85169L50.1771 13.0493H49.8752L48.5749 10.3062L47.2908 13.0488H46.9886L45.1602 8.85052L46.1 8.85063L47.1818 11.5352L48.4326 8.75912H48.7346L50.0013 11.5106Z", fill: "currentColor" }), /* @__PURE__ */ ae.createElement("path", { d: "M54.0459 8.76021C54.2798 8.75747 54.5124 8.79427 54.734 8.86904C54.9328 8.93674 55.1145 9.04661 55.2666 9.19108C55.4205 9.34206 55.5393 9.52479 55.6148 9.72645C55.703 9.96598 55.7457 10.2198 55.7407 10.4749L55.7402 12.9585L54.9178 12.9584V12.4985C54.7675 12.6748 54.5778 12.8137 54.3641 12.9039C54.1224 13.0048 53.8624 13.0547 53.6004 13.0502C53.4001 13.0526 53.2006 13.0243 53.0088 12.9664C52.8431 12.9164 52.6891 12.8339 52.5558 12.7238C52.4325 12.6213 52.3336 12.4928 52.2663 12.3475C52.1975 12.1951 52.1632 12.0295 52.1658 11.8624C52.1595 11.697 52.1936 11.5326 52.2653 11.3833C52.3369 11.234 52.4439 11.1043 52.577 11.0054C52.9011 10.7813 53.2908 10.6711 53.6847 10.692L54.8509 10.6921L54.8511 10.4245C54.8653 10.3057 54.8523 10.1854 54.813 10.0724C54.7738 9.95938 54.7093 9.85674 54.6245 9.77219C54.5397 9.68764 54.4367 9.62337 54.3233 9.58423C54.21 9.54509 54.0892 9.5321 53.97 9.54624C53.7497 9.54115 53.5322 9.59606 53.3409 9.70504C53.144 9.82637 52.9682 9.9789 52.8205 10.1566L52.317 9.6381C52.5096 9.35434 52.7729 9.12527 53.081 8.9733C53.3822 8.83011 53.7122 8.75723 54.0459 8.76021ZM53.785 12.3729C53.9252 12.3738 54.0645 12.3497 54.1962 12.3018C54.3211 12.2568 54.4363 12.1887 54.536 12.1011C54.6338 12.0151 54.7125 11.9098 54.7671 11.7917C54.8234 11.6699 54.852 11.5371 54.8509 11.4029V11.3276L53.7937 11.3275C53.6049 11.316 53.4168 11.3596 53.2524 11.4528C53.1906 11.4936 53.1407 11.5498 53.1075 11.6159C53.0744 11.6819 53.0593 11.7555 53.0636 11.8292C53.0596 11.9092 53.0769 11.9889 53.1137 12.0601C53.1505 12.1313 53.2056 12.1916 53.2733 12.2348C53.4263 12.3305 53.6044 12.3786 53.785 12.3729H53.785Z", fill: "currentColor" }), /* @__PURE__ */ ae.createElement("path", { d: "M58.8868 8.76073C59.1652 8.75824 59.441 8.81385 59.6966 8.92397C59.9395 9.02866 60.158 9.18243 60.3384 9.37555C60.5202 9.57271 60.6626 9.80269 60.7578 10.0531C60.8607 10.3242 60.9118 10.612 60.9085 10.9018C60.9114 11.193 60.8602 11.4822 60.7575 11.7548C60.6626 12.0075 60.5185 12.2391 60.3337 12.4363C60.1483 12.6331 59.9239 12.7893 59.6747 12.8951C59.4255 13.0008 59.157 13.0538 58.8861 13.0507C58.6171 13.0538 58.3502 13.0025 58.1016 12.9001C57.8717 12.8054 57.6686 12.6561 57.51 12.4651L57.5098 14.4637L56.6289 14.4636L56.6298 8.85236L57.4435 8.85247L57.4433 9.44624C57.5964 9.22732 57.805 9.05276 58.0478 8.94036C58.3103 8.81827 58.5971 8.75686 58.8868 8.76073ZM58.7441 9.56349C58.5909 9.56385 58.439 9.5907 58.2951 9.64283C58.147 9.69579 58.0114 9.77834 57.8965 9.88541C57.7735 10.002 57.6763 10.1429 57.6112 10.2992C57.5339 10.4903 57.4967 10.6952 57.502 10.9013C57.4968 11.1069 57.5324 11.3116 57.6068 11.5035C57.6701 11.6609 57.7659 11.8034 57.8879 11.9217C58.0017 12.031 58.1374 12.1151 58.2861 12.1684C58.4328 12.2211 58.5876 12.248 58.7436 12.2479C58.912 12.2489 59.0789 12.2162 59.2344 12.1519C59.3859 12.0895 59.523 11.997 59.6374 11.88C59.7546 11.7588 59.846 11.6152 59.906 11.4578C60.0343 11.1038 60.0344 10.7163 59.9063 10.3623C59.8466 10.2056 59.7568 10.0622 59.6418 9.93994C59.5289 9.82224 59.3934 9.7284 59.2433 9.664C59.0857 9.59624 58.9157 9.56201 58.7441 9.5635V9.56349Z", fill: "currentColor" }), /* @__PURE__ */ ae.createElement("path", { d: "M20.6715 12.9526L19.7822 12.9525L19.7832 7.43326L20.6725 7.43338L20.6715 12.9526ZM21.8049 10.0175L24.3636 12.9532L23.2644 12.953L20.6971 10.0174L23.022 7.43373L24.1128 7.43397L21.8049 10.0175Z", fill: "currentColor" }), /* @__PURE__ */ ae.createElement("path", { d: "M26.3188 13.4222C26.1891 13.7586 25.9735 14.0554 25.6934 14.2833C25.4326 14.4671 25.1188 14.561 24.7996 14.5508C24.6846 14.5505 24.5698 14.5435 24.4556 14.5299C24.3424 14.5166 24.2303 14.4957 24.12 14.4672V13.7229C24.2208 13.7339 24.3103 13.7423 24.3887 13.748C24.4669 13.7535 24.5423 13.7562 24.615 13.7563C24.7914 13.7596 24.9658 13.7195 25.1228 13.6394C25.3022 13.5242 25.4393 13.354 25.5133 13.1544L25.681 12.7698L24.0371 8.84738L24.9851 8.84762L26.1595 11.8416L27.3851 8.84797L28.3247 8.84809L26.3188 13.4222Z", fill: "currentColor" }), /* @__PURE__ */ ae.createElement("path", { d: "M29.6675 9.3499C29.8292 9.16227 30.0316 9.01363 30.2593 8.91516C30.5065 8.80734 30.774 8.75321 31.0438 8.75637C31.3146 8.75335 31.5831 8.80644 31.8323 8.91228C32.0814 9.01811 32.3058 9.17439 32.4911 9.37119C32.6759 9.56851 32.8198 9.80017 32.9148 10.053C33.0173 10.3256 33.0684 10.6148 33.0655 10.9059C33.0686 11.1957 33.0174 11.4836 32.9145 11.7547C32.8193 12.005 32.6768 12.2349 32.4949 12.432C32.3156 12.6244 32.0985 12.7781 31.8571 12.8834C31.6031 12.9937 31.3286 13.0493 31.0516 13.0463C30.761 13.0499 30.4731 12.9899 30.2083 12.8706C29.9635 12.7615 29.7531 12.588 29.5998 12.3688V12.9541L28.7861 12.954L28.7871 6.68207L29.6679 6.68218L29.6675 9.3499ZM30.9011 9.55912C30.7451 9.55905 30.5903 9.58589 30.4436 9.63846C30.2948 9.69187 30.1591 9.77593 30.0451 9.88514C29.9231 10.0034 29.8274 10.1459 29.764 10.3033C29.6895 10.4951 29.6539 10.6997 29.659 10.9053C29.654 11.1127 29.691 11.3189 29.768 11.5116C29.8323 11.6696 29.9295 11.8121 30.0533 11.9298C30.1675 12.0367 30.3033 12.118 30.4516 12.1682C30.5961 12.2178 30.7478 12.2433 30.9006 12.2436C31.0722 12.245 31.2422 12.2109 31.3998 12.1433C31.55 12.0789 31.6856 11.985 31.7986 11.8673C31.9136 11.7452 32.0034 11.6017 32.063 11.4451C32.1913 11.0912 32.1914 10.7037 32.0633 10.3497C32.0032 10.1923 31.9118 10.0486 31.7946 9.92727C31.6803 9.81036 31.5432 9.71787 31.3919 9.65544C31.2364 9.59095 31.0695 9.5582 30.9011 9.55913V9.55912Z", fill: "currentColor" }), /* @__PURE__ */ ae.createElement("path", { d: "M35.7842 8.7573C36.0456 8.75491 36.3049 8.80324 36.5477 8.8996C36.7735 8.98759 36.9786 9.121 37.1504 9.29151C37.3221 9.46202 37.4568 9.66597 37.546 9.89064C37.6424 10.1284 37.6908 10.3827 37.6885 10.6391C37.6888 10.7454 37.6817 10.8516 37.6674 10.9569C37.6576 11.0359 37.6423 11.1141 37.6214 11.191L34.5502 11.1905C34.5956 11.5027 34.7574 11.7865 35.0034 11.9851C35.2579 12.1794 35.5721 12.2799 35.8925 12.2695C36.1174 12.2728 36.3404 12.2286 36.547 12.14C36.7467 12.0512 36.9309 11.9313 37.0927 11.7847L37.5204 12.3869C37.3053 12.5912 37.0552 12.7554 36.782 12.8718C36.4952 12.9913 36.1868 13.0511 35.8758 13.0473C35.5716 13.0499 35.2696 12.9946 34.9863 12.8842C34.7249 12.784 34.4867 12.6319 34.2862 12.437C34.0858 12.2422 33.9272 12.0086 33.8203 11.7507C33.7073 11.4835 33.6502 11.1961 33.6524 10.9062C33.6502 10.6166 33.7059 10.3294 33.8163 10.0615C33.9205 9.8067 34.0745 9.57507 34.2693 9.38011C34.4636 9.18702 34.6929 9.0324 34.9449 8.92443C35.2101 8.81139 35.4959 8.75448 35.7842 8.7573ZM35.7586 9.50155C35.4766 9.49442 35.2017 9.59116 34.9867 9.77327C34.7688 9.96353 34.6211 10.2211 34.5673 10.5049L36.8076 10.5052C36.8108 10.3653 36.7836 10.2263 36.7279 10.0978C36.6721 9.9693 36.5891 9.85436 36.4845 9.76086C36.2825 9.58881 36.0243 9.49655 35.7586 9.50155Z", fill: "currentColor" }), /* @__PURE__ */ ae.createElement("path", { d: "M40.5502 8.8081C40.6134 8.8075 40.6765 8.81173 40.739 8.82074C40.7921 8.82905 40.841 8.8388 40.8858 8.84999L40.8855 9.62771L40.6171 9.62759C40.4591 9.62692 40.302 9.65093 40.1515 9.69874C40.0094 9.74254 39.878 9.81508 39.7654 9.91183C39.6537 10.01 39.5649 10.1313 39.5052 10.2672C39.4379 10.4244 39.4049 10.594 39.4084 10.7648L39.4082 12.9558L38.5273 12.9556L38.5281 8.84965L39.3418 8.84977L39.3415 9.40176C39.48 9.21261 39.6631 9.06037 39.8746 8.95848C40.0855 8.85803 40.3165 8.80661 40.5502 8.8081Z", fill: "currentColor" }))), Uf = (t) => /* @__PURE__ */ ae.createElement("svg", { width: 25, height: 24, viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ ae.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.607 4.73317L21.0374 13.9333C22.3729 16.1998 20.6576 19 17.9289 19H7.07003C4.34316 19 2.62604 16.2015 3.96337 13.935L9.39373 4.73488C10.7545 2.42199 14.2427 2.42199 15.607 4.73317Z", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ ae.createElement("path", { d: "M12.5 11V8", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ ae.createElement("path", { d: "M12.499 14.82C12.399 14.82 12.319 14.902 12.321 15C12.321 15.1 12.403 15.18 12.501 15.18C12.599 15.18 12.679 15.098 12.679 15C12.679 14.902 12.599 14.82 12.499 14.82", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })), ph = (t) => /* @__PURE__ */ ae.createElement("svg", { width: 12, height: 12, viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ ae.createElement("path", { id: "Vector", d: "M12 5.33333V0H6.66667L8.86 2.19333L2.19333 8.86L0 6.66667V12H5.33333L3.14 9.80667L9.80667 3.14L12 5.33333Z", fill: "currentColor" }));
function oi() {
  return vn(Va);
}
const bh = ee.div`
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
`, gh = ee.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.25rem;
  font-weight: 500;
  align-items: center;
`, _0 = ee.div`
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
`, xh = ee.button`
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
`, T0 = ee.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`, ao = ee.button`
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
`, yh = ee(ao)`
  width: 40px;
  height: 40px;
  background: ${({
  theme: t
}) => t.secondary};

  :hover {
    opacity: 0.8;
  }
`, U0 = ee.div`
  gap: 4px;
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: ${({
  theme: t
}) => t.subText};
`, P0 = ee.div`
  display: flex;
  align-items: center;
  margin-top: 0.75rem;
`, N0 = ee.input`
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
`, O0 = ee.button`
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
`, vh = ee.div`
  display: flex;
  margin-top: 1rem;
  align-items: center;
  justify-content: space-between;
`, wh = ee.div`
  display: flex;
  align-items: center;
`, aa = ee.button`
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
`, Cs = ee.span`
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
`, Ah = ee.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({
  theme: t
}) => t.subText};
  margin-left: 4px;
`, Pf = ee.div`
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
`, dn = ee.div`
  display: flex;
  justify-content: space-between;
`, ln = ee.div`
  display: flex;
  align-items: center;
  color: ${({
  theme: t
}) => t.subText};
`, Jr = ee.div`
  font-weight: 500;
`, Eh = ee.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  text-transform: uppercase;
  text-align: left;
`, Ch = ee.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: right;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
`, Ih = ee.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid ${({
  theme: t
}) => t.stroke};
`, Nf = ee.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`, Of = ee.div`
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
var Lf = { exports: {} };
const kh = {}, Sh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kh
}, Symbol.toStringTag, { value: "Module" })), jf = /* @__PURE__ */ It(Sh);
(function(t) {
  (function(e, r) {
    function n(l, o) {
      if (!l)
        throw new Error(o || "Assertion failed");
    }
    function a(l, o) {
      l.super_ = o;
      var d = function() {
      };
      d.prototype = o.prototype, l.prototype = new d(), l.prototype.constructor = l;
    }
    function i(l, o, d) {
      if (i.isBN(l))
        return l;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, l !== null && ((o === "le" || o === "be") && (d = o, o = 10), this._init(l || 0, o || 10, d || "be"));
    }
    typeof e == "object" ? e.exports = i : r.BN = i, i.BN = i, i.wordSize = 26;
    var s;
    try {
      typeof window < "u" && typeof window.Buffer < "u" ? s = window.Buffer : s = jf.Buffer;
    } catch {
    }
    i.isBN = function(o) {
      return o instanceof i ? !0 : o !== null && typeof o == "object" && o.constructor.wordSize === i.wordSize && Array.isArray(o.words);
    }, i.max = function(o, d) {
      return o.cmp(d) > 0 ? o : d;
    }, i.min = function(o, d) {
      return o.cmp(d) < 0 ? o : d;
    }, i.prototype._init = function(o, d, g) {
      if (typeof o == "number")
        return this._initNumber(o, d, g);
      if (typeof o == "object")
        return this._initArray(o, d, g);
      d === "hex" && (d = 16), n(d === (d | 0) && d >= 2 && d <= 36), o = o.toString().replace(/\s+/g, "");
      var v = 0;
      o[0] === "-" && (v++, this.negative = 1), v < o.length && (d === 16 ? this._parseHex(o, v, g) : (this._parseBase(o, d, v), g === "le" && this._initArray(this.toArray(), d, g)));
    }, i.prototype._initNumber = function(o, d, g) {
      o < 0 && (this.negative = 1, o = -o), o < 67108864 ? (this.words = [o & 67108863], this.length = 1) : o < 4503599627370496 ? (this.words = [
        o & 67108863,
        o / 67108864 & 67108863
      ], this.length = 2) : (n(o < 9007199254740992), this.words = [
        o & 67108863,
        o / 67108864 & 67108863,
        1
      ], this.length = 3), g === "le" && this._initArray(this.toArray(), d, g);
    }, i.prototype._initArray = function(o, d, g) {
      if (n(typeof o.length == "number"), o.length <= 0)
        return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(o.length / 3), this.words = new Array(this.length);
      for (var v = 0; v < this.length; v++)
        this.words[v] = 0;
      var A, w, h = 0;
      if (g === "be")
        for (v = o.length - 1, A = 0; v >= 0; v -= 3)
          w = o[v] | o[v - 1] << 8 | o[v - 2] << 16, this.words[A] |= w << h & 67108863, this.words[A + 1] = w >>> 26 - h & 67108863, h += 24, h >= 26 && (h -= 26, A++);
      else if (g === "le")
        for (v = 0, A = 0; v < o.length; v += 3)
          w = o[v] | o[v + 1] << 8 | o[v + 2] << 16, this.words[A] |= w << h & 67108863, this.words[A + 1] = w >>> 26 - h & 67108863, h += 24, h >= 26 && (h -= 26, A++);
      return this._strip();
    };
    function c(l, o) {
      var d = l.charCodeAt(o);
      if (d >= 48 && d <= 57)
        return d - 48;
      if (d >= 65 && d <= 70)
        return d - 55;
      if (d >= 97 && d <= 102)
        return d - 87;
      n(!1, "Invalid character in " + l);
    }
    function p(l, o, d) {
      var g = c(l, d);
      return d - 1 >= o && (g |= c(l, d - 1) << 4), g;
    }
    i.prototype._parseHex = function(o, d, g) {
      this.length = Math.ceil((o.length - d) / 6), this.words = new Array(this.length);
      for (var v = 0; v < this.length; v++)
        this.words[v] = 0;
      var A = 0, w = 0, h;
      if (g === "be")
        for (v = o.length - 1; v >= d; v -= 2)
          h = p(o, d, v) << A, this.words[w] |= h & 67108863, A >= 18 ? (A -= 18, w += 1, this.words[w] |= h >>> 26) : A += 8;
      else {
        var m = o.length - d;
        for (v = m % 2 === 0 ? d + 1 : d; v < o.length; v += 2)
          h = p(o, d, v) << A, this.words[w] |= h & 67108863, A >= 18 ? (A -= 18, w += 1, this.words[w] |= h >>> 26) : A += 8;
      }
      this._strip();
    };
    function x(l, o, d, g) {
      for (var v = 0, A = 0, w = Math.min(l.length, d), h = o; h < w; h++) {
        var m = l.charCodeAt(h) - 48;
        v *= g, m >= 49 ? A = m - 49 + 10 : m >= 17 ? A = m - 17 + 10 : A = m, n(m >= 0 && A < g, "Invalid character"), v += A;
      }
      return v;
    }
    i.prototype._parseBase = function(o, d, g) {
      this.words = [0], this.length = 1;
      for (var v = 0, A = 1; A <= 67108863; A *= d)
        v++;
      v--, A = A / d | 0;
      for (var w = o.length - g, h = w % v, m = Math.min(w, w - h) + g, f = 0, E = g; E < m; E += v)
        f = x(o, E, E + v, d), this.imuln(A), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f);
      if (h !== 0) {
        var k = 1;
        for (f = x(o, E, o.length, d), E = 0; E < h; E++)
          k *= d;
        this.imuln(k), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f);
      }
      this._strip();
    }, i.prototype.copy = function(o) {
      o.words = new Array(this.length);
      for (var d = 0; d < this.length; d++)
        o.words[d] = this.words[d];
      o.length = this.length, o.negative = this.negative, o.red = this.red;
    };
    function y(l, o) {
      l.words = o.words, l.length = o.length, l.negative = o.negative, l.red = o.red;
    }
    if (i.prototype._move = function(o) {
      y(o, this);
    }, i.prototype.clone = function() {
      var o = new i(null);
      return this.copy(o), o;
    }, i.prototype._expand = function(o) {
      for (; this.length < o; )
        this.words[this.length++] = 0;
      return this;
    }, i.prototype._strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0; )
        this.length--;
      return this._normSign();
    }, i.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, typeof Symbol < "u" && typeof Symbol.for == "function")
      try {
        i.prototype[Symbol.for("nodejs.util.inspect.custom")] = C;
      } catch {
        i.prototype.inspect = C;
      }
    else
      i.prototype.inspect = C;
    function C() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }
    var B = [
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
    ], F = [
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
    ], R = [
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
    i.prototype.toString = function(o, d) {
      o = o || 10, d = d | 0 || 1;
      var g;
      if (o === 16 || o === "hex") {
        g = "";
        for (var v = 0, A = 0, w = 0; w < this.length; w++) {
          var h = this.words[w], m = ((h << v | A) & 16777215).toString(16);
          A = h >>> 24 - v & 16777215, v += 2, v >= 26 && (v -= 26, w--), A !== 0 || w !== this.length - 1 ? g = B[6 - m.length] + m + g : g = m + g;
        }
        for (A !== 0 && (g = A.toString(16) + g); g.length % d !== 0; )
          g = "0" + g;
        return this.negative !== 0 && (g = "-" + g), g;
      }
      if (o === (o | 0) && o >= 2 && o <= 36) {
        var f = F[o], E = R[o];
        g = "";
        var k = this.clone();
        for (k.negative = 0; !k.isZero(); ) {
          var b = k.modrn(E).toString(o);
          k = k.idivn(E), k.isZero() ? g = b + g : g = B[f - b.length] + b + g;
        }
        for (this.isZero() && (g = "0" + g); g.length % d !== 0; )
          g = "0" + g;
        return this.negative !== 0 && (g = "-" + g), g;
      }
      n(!1, "Base should be between 2 and 36");
    }, i.prototype.toNumber = function() {
      var o = this.words[0];
      return this.length === 2 ? o += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? o += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -o : o;
    }, i.prototype.toJSON = function() {
      return this.toString(16, 2);
    }, s && (i.prototype.toBuffer = function(o, d) {
      return this.toArrayLike(s, o, d);
    }), i.prototype.toArray = function(o, d) {
      return this.toArrayLike(Array, o, d);
    };
    var M = function(o, d) {
      return o.allocUnsafe ? o.allocUnsafe(d) : new o(d);
    };
    i.prototype.toArrayLike = function(o, d, g) {
      this._strip();
      var v = this.byteLength(), A = g || Math.max(1, v);
      n(v <= A, "byte array longer than desired length"), n(A > 0, "Requested array length <= 0");
      var w = M(o, A), h = d === "le" ? "LE" : "BE";
      return this["_toArrayLike" + h](w, v), w;
    }, i.prototype._toArrayLikeLE = function(o, d) {
      for (var g = 0, v = 0, A = 0, w = 0; A < this.length; A++) {
        var h = this.words[A] << w | v;
        o[g++] = h & 255, g < o.length && (o[g++] = h >> 8 & 255), g < o.length && (o[g++] = h >> 16 & 255), w === 6 ? (g < o.length && (o[g++] = h >> 24 & 255), v = 0, w = 0) : (v = h >>> 24, w += 2);
      }
      if (g < o.length)
        for (o[g++] = v; g < o.length; )
          o[g++] = 0;
    }, i.prototype._toArrayLikeBE = function(o, d) {
      for (var g = o.length - 1, v = 0, A = 0, w = 0; A < this.length; A++) {
        var h = this.words[A] << w | v;
        o[g--] = h & 255, g >= 0 && (o[g--] = h >> 8 & 255), g >= 0 && (o[g--] = h >> 16 & 255), w === 6 ? (g >= 0 && (o[g--] = h >> 24 & 255), v = 0, w = 0) : (v = h >>> 24, w += 2);
      }
      if (g >= 0)
        for (o[g--] = v; g >= 0; )
          o[g--] = 0;
    }, Math.clz32 ? i.prototype._countBits = function(o) {
      return 32 - Math.clz32(o);
    } : i.prototype._countBits = function(o) {
      var d = o, g = 0;
      return d >= 4096 && (g += 13, d >>>= 13), d >= 64 && (g += 7, d >>>= 7), d >= 8 && (g += 4, d >>>= 4), d >= 2 && (g += 2, d >>>= 2), g + d;
    }, i.prototype._zeroBits = function(o) {
      if (o === 0)
        return 26;
      var d = o, g = 0;
      return (d & 8191) === 0 && (g += 13, d >>>= 13), (d & 127) === 0 && (g += 7, d >>>= 7), (d & 15) === 0 && (g += 4, d >>>= 4), (d & 3) === 0 && (g += 2, d >>>= 2), (d & 1) === 0 && g++, g;
    }, i.prototype.bitLength = function() {
      var o = this.words[this.length - 1], d = this._countBits(o);
      return (this.length - 1) * 26 + d;
    };
    function S(l) {
      for (var o = new Array(l.bitLength()), d = 0; d < o.length; d++) {
        var g = d / 26 | 0, v = d % 26;
        o[d] = l.words[g] >>> v & 1;
      }
      return o;
    }
    i.prototype.zeroBits = function() {
      if (this.isZero())
        return 0;
      for (var o = 0, d = 0; d < this.length; d++) {
        var g = this._zeroBits(this.words[d]);
        if (o += g, g !== 26)
          break;
      }
      return o;
    }, i.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, i.prototype.toTwos = function(o) {
      return this.negative !== 0 ? this.abs().inotn(o).iaddn(1) : this.clone();
    }, i.prototype.fromTwos = function(o) {
      return this.testn(o - 1) ? this.notn(o).iaddn(1).ineg() : this.clone();
    }, i.prototype.isNeg = function() {
      return this.negative !== 0;
    }, i.prototype.neg = function() {
      return this.clone().ineg();
    }, i.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, i.prototype.iuor = function(o) {
      for (; this.length < o.length; )
        this.words[this.length++] = 0;
      for (var d = 0; d < o.length; d++)
        this.words[d] = this.words[d] | o.words[d];
      return this._strip();
    }, i.prototype.ior = function(o) {
      return n((this.negative | o.negative) === 0), this.iuor(o);
    }, i.prototype.or = function(o) {
      return this.length > o.length ? this.clone().ior(o) : o.clone().ior(this);
    }, i.prototype.uor = function(o) {
      return this.length > o.length ? this.clone().iuor(o) : o.clone().iuor(this);
    }, i.prototype.iuand = function(o) {
      var d;
      this.length > o.length ? d = o : d = this;
      for (var g = 0; g < d.length; g++)
        this.words[g] = this.words[g] & o.words[g];
      return this.length = d.length, this._strip();
    }, i.prototype.iand = function(o) {
      return n((this.negative | o.negative) === 0), this.iuand(o);
    }, i.prototype.and = function(o) {
      return this.length > o.length ? this.clone().iand(o) : o.clone().iand(this);
    }, i.prototype.uand = function(o) {
      return this.length > o.length ? this.clone().iuand(o) : o.clone().iuand(this);
    }, i.prototype.iuxor = function(o) {
      var d, g;
      this.length > o.length ? (d = this, g = o) : (d = o, g = this);
      for (var v = 0; v < g.length; v++)
        this.words[v] = d.words[v] ^ g.words[v];
      if (this !== d)
        for (; v < d.length; v++)
          this.words[v] = d.words[v];
      return this.length = d.length, this._strip();
    }, i.prototype.ixor = function(o) {
      return n((this.negative | o.negative) === 0), this.iuxor(o);
    }, i.prototype.xor = function(o) {
      return this.length > o.length ? this.clone().ixor(o) : o.clone().ixor(this);
    }, i.prototype.uxor = function(o) {
      return this.length > o.length ? this.clone().iuxor(o) : o.clone().iuxor(this);
    }, i.prototype.inotn = function(o) {
      n(typeof o == "number" && o >= 0);
      var d = Math.ceil(o / 26) | 0, g = o % 26;
      this._expand(d), g > 0 && d--;
      for (var v = 0; v < d; v++)
        this.words[v] = ~this.words[v] & 67108863;
      return g > 0 && (this.words[v] = ~this.words[v] & 67108863 >> 26 - g), this._strip();
    }, i.prototype.notn = function(o) {
      return this.clone().inotn(o);
    }, i.prototype.setn = function(o, d) {
      n(typeof o == "number" && o >= 0);
      var g = o / 26 | 0, v = o % 26;
      return this._expand(g + 1), d ? this.words[g] = this.words[g] | 1 << v : this.words[g] = this.words[g] & ~(1 << v), this._strip();
    }, i.prototype.iadd = function(o) {
      var d;
      if (this.negative !== 0 && o.negative === 0)
        return this.negative = 0, d = this.isub(o), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && o.negative !== 0)
        return o.negative = 0, d = this.isub(o), o.negative = 1, d._normSign();
      var g, v;
      this.length > o.length ? (g = this, v = o) : (g = o, v = this);
      for (var A = 0, w = 0; w < v.length; w++)
        d = (g.words[w] | 0) + (v.words[w] | 0) + A, this.words[w] = d & 67108863, A = d >>> 26;
      for (; A !== 0 && w < g.length; w++)
        d = (g.words[w] | 0) + A, this.words[w] = d & 67108863, A = d >>> 26;
      if (this.length = g.length, A !== 0)
        this.words[this.length] = A, this.length++;
      else if (g !== this)
        for (; w < g.length; w++)
          this.words[w] = g.words[w];
      return this;
    }, i.prototype.add = function(o) {
      var d;
      return o.negative !== 0 && this.negative === 0 ? (o.negative = 0, d = this.sub(o), o.negative ^= 1, d) : o.negative === 0 && this.negative !== 0 ? (this.negative = 0, d = o.sub(this), this.negative = 1, d) : this.length > o.length ? this.clone().iadd(o) : o.clone().iadd(this);
    }, i.prototype.isub = function(o) {
      if (o.negative !== 0) {
        o.negative = 0;
        var d = this.iadd(o);
        return o.negative = 1, d._normSign();
      } else if (this.negative !== 0)
        return this.negative = 0, this.iadd(o), this.negative = 1, this._normSign();
      var g = this.cmp(o);
      if (g === 0)
        return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var v, A;
      g > 0 ? (v = this, A = o) : (v = o, A = this);
      for (var w = 0, h = 0; h < A.length; h++)
        d = (v.words[h] | 0) - (A.words[h] | 0) + w, w = d >> 26, this.words[h] = d & 67108863;
      for (; w !== 0 && h < v.length; h++)
        d = (v.words[h] | 0) + w, w = d >> 26, this.words[h] = d & 67108863;
      if (w === 0 && h < v.length && v !== this)
        for (; h < v.length; h++)
          this.words[h] = v.words[h];
      return this.length = Math.max(this.length, h), v !== this && (this.negative = 1), this._strip();
    }, i.prototype.sub = function(o) {
      return this.clone().isub(o);
    };
    function U(l, o, d) {
      d.negative = o.negative ^ l.negative;
      var g = l.length + o.length | 0;
      d.length = g, g = g - 1 | 0;
      var v = l.words[0] | 0, A = o.words[0] | 0, w = v * A, h = w & 67108863, m = w / 67108864 | 0;
      d.words[0] = h;
      for (var f = 1; f < g; f++) {
        for (var E = m >>> 26, k = m & 67108863, b = Math.min(f, o.length - 1), I = Math.max(0, f - l.length + 1); I <= b; I++) {
          var L = f - I | 0;
          v = l.words[L] | 0, A = o.words[I] | 0, w = v * A + k, E += w / 67108864 | 0, k = w & 67108863;
        }
        d.words[f] = k | 0, m = E | 0;
      }
      return m !== 0 ? d.words[f] = m | 0 : d.length--, d._strip();
    }
    var N = function(o, d, g) {
      var v = o.words, A = d.words, w = g.words, h = 0, m, f, E, k = v[0] | 0, b = k & 8191, I = k >>> 13, L = v[1] | 0, P = L & 8191, H = L >>> 13, $ = v[2] | 0, V = $ & 8191, j = $ >>> 13, le = v[3] | 0, te = le & 8191, q = le >>> 13, xe = v[4] | 0, ue = xe & 8191, he = xe >>> 13, Pe = v[5] | 0, ye = Pe & 8191, be = Pe >>> 13, Ue = v[6] | 0, _e = Ue & 8191, re = Ue >>> 13, ve = v[7] | 0, Le = ve & 8191, pe = ve >>> 13, Te = v[8] | 0, Ve = Te & 8191, Ee = Te >>> 13, ze = v[9] | 0, Ae = ze & 8191, Ce = ze >>> 13, Je = A[0] | 0, at = Je & 8191, Be = Je >>> 13, it = A[1] | 0, st = it & 8191, Ie = it >>> 13, Qe = A[2] | 0, Ge = Qe & 8191, ke = Qe >>> 13, Ye = A[3] | 0, et = Ye & 8191, Fe = Ye >>> 13, tt = A[4] | 0, ot = tt & 8191, Se = tt >>> 13, rt = A[5] | 0, ct = rt & 8191, Re = rt >>> 13, nt = A[6] | 0, ft = nt & 8191, Me = nt >>> 13, dt = A[7] | 0, lt = dt & 8191, _ = dt >>> 13, K = A[8] | 0, ne = K & 8191, oe = K >>> 13, ge = A[9] | 0, we = ge & 8191, me = ge >>> 13;
      g.negative = o.negative ^ d.negative, g.length = 19, m = Math.imul(b, at), f = Math.imul(b, Be), f = f + Math.imul(I, at) | 0, E = Math.imul(I, Be);
      var De = (h + m | 0) + ((f & 8191) << 13) | 0;
      h = (E + (f >>> 13) | 0) + (De >>> 26) | 0, De &= 67108863, m = Math.imul(P, at), f = Math.imul(P, Be), f = f + Math.imul(H, at) | 0, E = Math.imul(H, Be), m = m + Math.imul(b, st) | 0, f = f + Math.imul(b, Ie) | 0, f = f + Math.imul(I, st) | 0, E = E + Math.imul(I, Ie) | 0;
      var mt = (h + m | 0) + ((f & 8191) << 13) | 0;
      h = (E + (f >>> 13) | 0) + (mt >>> 26) | 0, mt &= 67108863, m = Math.imul(V, at), f = Math.imul(V, Be), f = f + Math.imul(j, at) | 0, E = Math.imul(j, Be), m = m + Math.imul(P, st) | 0, f = f + Math.imul(P, Ie) | 0, f = f + Math.imul(H, st) | 0, E = E + Math.imul(H, Ie) | 0, m = m + Math.imul(b, Ge) | 0, f = f + Math.imul(b, ke) | 0, f = f + Math.imul(I, Ge) | 0, E = E + Math.imul(I, ke) | 0;
      var Ke = (h + m | 0) + ((f & 8191) << 13) | 0;
      h = (E + (f >>> 13) | 0) + (Ke >>> 26) | 0, Ke &= 67108863, m = Math.imul(te, at), f = Math.imul(te, Be), f = f + Math.imul(q, at) | 0, E = Math.imul(q, Be), m = m + Math.imul(V, st) | 0, f = f + Math.imul(V, Ie) | 0, f = f + Math.imul(j, st) | 0, E = E + Math.imul(j, Ie) | 0, m = m + Math.imul(P, Ge) | 0, f = f + Math.imul(P, ke) | 0, f = f + Math.imul(H, Ge) | 0, E = E + Math.imul(H, ke) | 0, m = m + Math.imul(b, et) | 0, f = f + Math.imul(b, Fe) | 0, f = f + Math.imul(I, et) | 0, E = E + Math.imul(I, Fe) | 0;
      var Xe = (h + m | 0) + ((f & 8191) << 13) | 0;
      h = (E + (f >>> 13) | 0) + (Xe >>> 26) | 0, Xe &= 67108863, m = Math.imul(ue, at), f = Math.imul(ue, Be), f = f + Math.imul(he, at) | 0, E = Math.imul(he, Be), m = m + Math.imul(te, st) | 0, f = f + Math.imul(te, Ie) | 0, f = f + Math.imul(q, st) | 0, E = E + Math.imul(q, Ie) | 0, m = m + Math.imul(V, Ge) | 0, f = f + Math.imul(V, ke) | 0, f = f + Math.imul(j, Ge) | 0, E = E + Math.imul(j, ke) | 0, m = m + Math.imul(P, et) | 0, f = f + Math.imul(P, Fe) | 0, f = f + Math.imul(H, et) | 0, E = E + Math.imul(H, Fe) | 0, m = m + Math.imul(b, ot) | 0, f = f + Math.imul(b, Se) | 0, f = f + Math.imul(I, ot) | 0, E = E + Math.imul(I, Se) | 0;
      var xt = (h + m | 0) + ((f & 8191) << 13) | 0;
      h = (E + (f >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, m = Math.imul(ye, at), f = Math.imul(ye, Be), f = f + Math.imul(be, at) | 0, E = Math.imul(be, Be), m = m + Math.imul(ue, st) | 0, f = f + Math.imul(ue, Ie) | 0, f = f + Math.imul(he, st) | 0, E = E + Math.imul(he, Ie) | 0, m = m + Math.imul(te, Ge) | 0, f = f + Math.imul(te, ke) | 0, f = f + Math.imul(q, Ge) | 0, E = E + Math.imul(q, ke) | 0, m = m + Math.imul(V, et) | 0, f = f + Math.imul(V, Fe) | 0, f = f + Math.imul(j, et) | 0, E = E + Math.imul(j, Fe) | 0, m = m + Math.imul(P, ot) | 0, f = f + Math.imul(P, Se) | 0, f = f + Math.imul(H, ot) | 0, E = E + Math.imul(H, Se) | 0, m = m + Math.imul(b, ct) | 0, f = f + Math.imul(b, Re) | 0, f = f + Math.imul(I, ct) | 0, E = E + Math.imul(I, Re) | 0;
      var Vt = (h + m | 0) + ((f & 8191) << 13) | 0;
      h = (E + (f >>> 13) | 0) + (Vt >>> 26) | 0, Vt &= 67108863, m = Math.imul(_e, at), f = Math.imul(_e, Be), f = f + Math.imul(re, at) | 0, E = Math.imul(re, Be), m = m + Math.imul(ye, st) | 0, f = f + Math.imul(ye, Ie) | 0, f = f + Math.imul(be, st) | 0, E = E + Math.imul(be, Ie) | 0, m = m + Math.imul(ue, Ge) | 0, f = f + Math.imul(ue, ke) | 0, f = f + Math.imul(he, Ge) | 0, E = E + Math.imul(he, ke) | 0, m = m + Math.imul(te, et) | 0, f = f + Math.imul(te, Fe) | 0, f = f + Math.imul(q, et) | 0, E = E + Math.imul(q, Fe) | 0, m = m + Math.imul(V, ot) | 0, f = f + Math.imul(V, Se) | 0, f = f + Math.imul(j, ot) | 0, E = E + Math.imul(j, Se) | 0, m = m + Math.imul(P, ct) | 0, f = f + Math.imul(P, Re) | 0, f = f + Math.imul(H, ct) | 0, E = E + Math.imul(H, Re) | 0, m = m + Math.imul(b, ft) | 0, f = f + Math.imul(b, Me) | 0, f = f + Math.imul(I, ft) | 0, E = E + Math.imul(I, Me) | 0;
      var Dr = (h + m | 0) + ((f & 8191) << 13) | 0;
      h = (E + (f >>> 13) | 0) + (Dr >>> 26) | 0, Dr &= 67108863, m = Math.imul(Le, at), f = Math.imul(Le, Be), f = f + Math.imul(pe, at) | 0, E = Math.imul(pe, Be), m = m + Math.imul(_e, st) | 0, f = f + Math.imul(_e, Ie) | 0, f = f + Math.imul(re, st) | 0, E = E + Math.imul(re, Ie) | 0, m = m + Math.imul(ye, Ge) | 0, f = f + Math.imul(ye, ke) | 0, f = f + Math.imul(be, Ge) | 0, E = E + Math.imul(be, ke) | 0, m = m + Math.imul(ue, et) | 0, f = f + Math.imul(ue, Fe) | 0, f = f + Math.imul(he, et) | 0, E = E + Math.imul(he, Fe) | 0, m = m + Math.imul(te, ot) | 0, f = f + Math.imul(te, Se) | 0, f = f + Math.imul(q, ot) | 0, E = E + Math.imul(q, Se) | 0, m = m + Math.imul(V, ct) | 0, f = f + Math.imul(V, Re) | 0, f = f + Math.imul(j, ct) | 0, E = E + Math.imul(j, Re) | 0, m = m + Math.imul(P, ft) | 0, f = f + Math.imul(P, Me) | 0, f = f + Math.imul(H, ft) | 0, E = E + Math.imul(H, Me) | 0, m = m + Math.imul(b, lt) | 0, f = f + Math.imul(b, _) | 0, f = f + Math.imul(I, lt) | 0, E = E + Math.imul(I, _) | 0;
      var Ut = (h + m | 0) + ((f & 8191) << 13) | 0;
      h = (E + (f >>> 13) | 0) + (Ut >>> 26) | 0, Ut &= 67108863, m = Math.imul(Ve, at), f = Math.imul(Ve, Be), f = f + Math.imul(Ee, at) | 0, E = Math.imul(Ee, Be), m = m + Math.imul(Le, st) | 0, f = f + Math.imul(Le, Ie) | 0, f = f + Math.imul(pe, st) | 0, E = E + Math.imul(pe, Ie) | 0, m = m + Math.imul(_e, Ge) | 0, f = f + Math.imul(_e, ke) | 0, f = f + Math.imul(re, Ge) | 0, E = E + Math.imul(re, ke) | 0, m = m + Math.imul(ye, et) | 0, f = f + Math.imul(ye, Fe) | 0, f = f + Math.imul(be, et) | 0, E = E + Math.imul(be, Fe) | 0, m = m + Math.imul(ue, ot) | 0, f = f + Math.imul(ue, Se) | 0, f = f + Math.imul(he, ot) | 0, E = E + Math.imul(he, Se) | 0, m = m + Math.imul(te, ct) | 0, f = f + Math.imul(te, Re) | 0, f = f + Math.imul(q, ct) | 0, E = E + Math.imul(q, Re) | 0, m = m + Math.imul(V, ft) | 0, f = f + Math.imul(V, Me) | 0, f = f + Math.imul(j, ft) | 0, E = E + Math.imul(j, Me) | 0, m = m + Math.imul(P, lt) | 0, f = f + Math.imul(P, _) | 0, f = f + Math.imul(H, lt) | 0, E = E + Math.imul(H, _) | 0, m = m + Math.imul(b, ne) | 0, f = f + Math.imul(b, oe) | 0, f = f + Math.imul(I, ne) | 0, E = E + Math.imul(I, oe) | 0;
      var En = (h + m | 0) + ((f & 8191) << 13) | 0;
      h = (E + (f >>> 13) | 0) + (En >>> 26) | 0, En &= 67108863, m = Math.imul(Ae, at), f = Math.imul(Ae, Be), f = f + Math.imul(Ce, at) | 0, E = Math.imul(Ce, Be), m = m + Math.imul(Ve, st) | 0, f = f + Math.imul(Ve, Ie) | 0, f = f + Math.imul(Ee, st) | 0, E = E + Math.imul(Ee, Ie) | 0, m = m + Math.imul(Le, Ge) | 0, f = f + Math.imul(Le, ke) | 0, f = f + Math.imul(pe, Ge) | 0, E = E + Math.imul(pe, ke) | 0, m = m + Math.imul(_e, et) | 0, f = f + Math.imul(_e, Fe) | 0, f = f + Math.imul(re, et) | 0, E = E + Math.imul(re, Fe) | 0, m = m + Math.imul(ye, ot) | 0, f = f + Math.imul(ye, Se) | 0, f = f + Math.imul(be, ot) | 0, E = E + Math.imul(be, Se) | 0, m = m + Math.imul(ue, ct) | 0, f = f + Math.imul(ue, Re) | 0, f = f + Math.imul(he, ct) | 0, E = E + Math.imul(he, Re) | 0, m = m + Math.imul(te, ft) | 0, f = f + Math.imul(te, Me) | 0, f = f + Math.imul(q, ft) | 0, E = E + Math.imul(q, Me) | 0, m = m + Math.imul(V, lt) | 0, f = f + Math.imul(V, _) | 0, f = f + Math.imul(j, lt) | 0, E = E + Math.imul(j, _) | 0, m = m + Math.imul(P, ne) | 0, f = f + Math.imul(P, oe) | 0, f = f + Math.imul(H, ne) | 0, E = E + Math.imul(H, oe) | 0, m = m + Math.imul(b, we) | 0, f = f + Math.imul(b, me) | 0, f = f + Math.imul(I, we) | 0, E = E + Math.imul(I, me) | 0;
      var Cn = (h + m | 0) + ((f & 8191) << 13) | 0;
      h = (E + (f >>> 13) | 0) + (Cn >>> 26) | 0, Cn &= 67108863, m = Math.imul(Ae, st), f = Math.imul(Ae, Ie), f = f + Math.imul(Ce, st) | 0, E = Math.imul(Ce, Ie), m = m + Math.imul(Ve, Ge) | 0, f = f + Math.imul(Ve, ke) | 0, f = f + Math.imul(Ee, Ge) | 0, E = E + Math.imul(Ee, ke) | 0, m = m + Math.imul(Le, et) | 0, f = f + Math.imul(Le, Fe) | 0, f = f + Math.imul(pe, et) | 0, E = E + Math.imul(pe, Fe) | 0, m = m + Math.imul(_e, ot) | 0, f = f + Math.imul(_e, Se) | 0, f = f + Math.imul(re, ot) | 0, E = E + Math.imul(re, Se) | 0, m = m + Math.imul(ye, ct) | 0, f = f + Math.imul(ye, Re) | 0, f = f + Math.imul(be, ct) | 0, E = E + Math.imul(be, Re) | 0, m = m + Math.imul(ue, ft) | 0, f = f + Math.imul(ue, Me) | 0, f = f + Math.imul(he, ft) | 0, E = E + Math.imul(he, Me) | 0, m = m + Math.imul(te, lt) | 0, f = f + Math.imul(te, _) | 0, f = f + Math.imul(q, lt) | 0, E = E + Math.imul(q, _) | 0, m = m + Math.imul(V, ne) | 0, f = f + Math.imul(V, oe) | 0, f = f + Math.imul(j, ne) | 0, E = E + Math.imul(j, oe) | 0, m = m + Math.imul(P, we) | 0, f = f + Math.imul(P, me) | 0, f = f + Math.imul(H, we) | 0, E = E + Math.imul(H, me) | 0;
      var In = (h + m | 0) + ((f & 8191) << 13) | 0;
      h = (E + (f >>> 13) | 0) + (In >>> 26) | 0, In &= 67108863, m = Math.imul(Ae, Ge), f = Math.imul(Ae, ke), f = f + Math.imul(Ce, Ge) | 0, E = Math.imul(Ce, ke), m = m + Math.imul(Ve, et) | 0, f = f + Math.imul(Ve, Fe) | 0, f = f + Math.imul(Ee, et) | 0, E = E + Math.imul(Ee, Fe) | 0, m = m + Math.imul(Le, ot) | 0, f = f + Math.imul(Le, Se) | 0, f = f + Math.imul(pe, ot) | 0, E = E + Math.imul(pe, Se) | 0, m = m + Math.imul(_e, ct) | 0, f = f + Math.imul(_e, Re) | 0, f = f + Math.imul(re, ct) | 0, E = E + Math.imul(re, Re) | 0, m = m + Math.imul(ye, ft) | 0, f = f + Math.imul(ye, Me) | 0, f = f + Math.imul(be, ft) | 0, E = E + Math.imul(be, Me) | 0, m = m + Math.imul(ue, lt) | 0, f = f + Math.imul(ue, _) | 0, f = f + Math.imul(he, lt) | 0, E = E + Math.imul(he, _) | 0, m = m + Math.imul(te, ne) | 0, f = f + Math.imul(te, oe) | 0, f = f + Math.imul(q, ne) | 0, E = E + Math.imul(q, oe) | 0, m = m + Math.imul(V, we) | 0, f = f + Math.imul(V, me) | 0, f = f + Math.imul(j, we) | 0, E = E + Math.imul(j, me) | 0;
      var kn = (h + m | 0) + ((f & 8191) << 13) | 0;
      h = (E + (f >>> 13) | 0) + (kn >>> 26) | 0, kn &= 67108863, m = Math.imul(Ae, et), f = Math.imul(Ae, Fe), f = f + Math.imul(Ce, et) | 0, E = Math.imul(Ce, Fe), m = m + Math.imul(Ve, ot) | 0, f = f + Math.imul(Ve, Se) | 0, f = f + Math.imul(Ee, ot) | 0, E = E + Math.imul(Ee, Se) | 0, m = m + Math.imul(Le, ct) | 0, f = f + Math.imul(Le, Re) | 0, f = f + Math.imul(pe, ct) | 0, E = E + Math.imul(pe, Re) | 0, m = m + Math.imul(_e, ft) | 0, f = f + Math.imul(_e, Me) | 0, f = f + Math.imul(re, ft) | 0, E = E + Math.imul(re, Me) | 0, m = m + Math.imul(ye, lt) | 0, f = f + Math.imul(ye, _) | 0, f = f + Math.imul(be, lt) | 0, E = E + Math.imul(be, _) | 0, m = m + Math.imul(ue, ne) | 0, f = f + Math.imul(ue, oe) | 0, f = f + Math.imul(he, ne) | 0, E = E + Math.imul(he, oe) | 0, m = m + Math.imul(te, we) | 0, f = f + Math.imul(te, me) | 0, f = f + Math.imul(q, we) | 0, E = E + Math.imul(q, me) | 0;
      var Sn = (h + m | 0) + ((f & 8191) << 13) | 0;
      h = (E + (f >>> 13) | 0) + (Sn >>> 26) | 0, Sn &= 67108863, m = Math.imul(Ae, ot), f = Math.imul(Ae, Se), f = f + Math.imul(Ce, ot) | 0, E = Math.imul(Ce, Se), m = m + Math.imul(Ve, ct) | 0, f = f + Math.imul(Ve, Re) | 0, f = f + Math.imul(Ee, ct) | 0, E = E + Math.imul(Ee, Re) | 0, m = m + Math.imul(Le, ft) | 0, f = f + Math.imul(Le, Me) | 0, f = f + Math.imul(pe, ft) | 0, E = E + Math.imul(pe, Me) | 0, m = m + Math.imul(_e, lt) | 0, f = f + Math.imul(_e, _) | 0, f = f + Math.imul(re, lt) | 0, E = E + Math.imul(re, _) | 0, m = m + Math.imul(ye, ne) | 0, f = f + Math.imul(ye, oe) | 0, f = f + Math.imul(be, ne) | 0, E = E + Math.imul(be, oe) | 0, m = m + Math.imul(ue, we) | 0, f = f + Math.imul(ue, me) | 0, f = f + Math.imul(he, we) | 0, E = E + Math.imul(he, me) | 0;
      var Dn = (h + m | 0) + ((f & 8191) << 13) | 0;
      h = (E + (f >>> 13) | 0) + (Dn >>> 26) | 0, Dn &= 67108863, m = Math.imul(Ae, ct), f = Math.imul(Ae, Re), f = f + Math.imul(Ce, ct) | 0, E = Math.imul(Ce, Re), m = m + Math.imul(Ve, ft) | 0, f = f + Math.imul(Ve, Me) | 0, f = f + Math.imul(Ee, ft) | 0, E = E + Math.imul(Ee, Me) | 0, m = m + Math.imul(Le, lt) | 0, f = f + Math.imul(Le, _) | 0, f = f + Math.imul(pe, lt) | 0, E = E + Math.imul(pe, _) | 0, m = m + Math.imul(_e, ne) | 0, f = f + Math.imul(_e, oe) | 0, f = f + Math.imul(re, ne) | 0, E = E + Math.imul(re, oe) | 0, m = m + Math.imul(ye, we) | 0, f = f + Math.imul(ye, me) | 0, f = f + Math.imul(be, we) | 0, E = E + Math.imul(be, me) | 0;
      var Bn = (h + m | 0) + ((f & 8191) << 13) | 0;
      h = (E + (f >>> 13) | 0) + (Bn >>> 26) | 0, Bn &= 67108863, m = Math.imul(Ae, ft), f = Math.imul(Ae, Me), f = f + Math.imul(Ce, ft) | 0, E = Math.imul(Ce, Me), m = m + Math.imul(Ve, lt) | 0, f = f + Math.imul(Ve, _) | 0, f = f + Math.imul(Ee, lt) | 0, E = E + Math.imul(Ee, _) | 0, m = m + Math.imul(Le, ne) | 0, f = f + Math.imul(Le, oe) | 0, f = f + Math.imul(pe, ne) | 0, E = E + Math.imul(pe, oe) | 0, m = m + Math.imul(_e, we) | 0, f = f + Math.imul(_e, me) | 0, f = f + Math.imul(re, we) | 0, E = E + Math.imul(re, me) | 0;
      var Fn = (h + m | 0) + ((f & 8191) << 13) | 0;
      h = (E + (f >>> 13) | 0) + (Fn >>> 26) | 0, Fn &= 67108863, m = Math.imul(Ae, lt), f = Math.imul(Ae, _), f = f + Math.imul(Ce, lt) | 0, E = Math.imul(Ce, _), m = m + Math.imul(Ve, ne) | 0, f = f + Math.imul(Ve, oe) | 0, f = f + Math.imul(Ee, ne) | 0, E = E + Math.imul(Ee, oe) | 0, m = m + Math.imul(Le, we) | 0, f = f + Math.imul(Le, me) | 0, f = f + Math.imul(pe, we) | 0, E = E + Math.imul(pe, me) | 0;
      var Rn = (h + m | 0) + ((f & 8191) << 13) | 0;
      h = (E + (f >>> 13) | 0) + (Rn >>> 26) | 0, Rn &= 67108863, m = Math.imul(Ae, ne), f = Math.imul(Ae, oe), f = f + Math.imul(Ce, ne) | 0, E = Math.imul(Ce, oe), m = m + Math.imul(Ve, we) | 0, f = f + Math.imul(Ve, me) | 0, f = f + Math.imul(Ee, we) | 0, E = E + Math.imul(Ee, me) | 0;
      var vs = (h + m | 0) + ((f & 8191) << 13) | 0;
      h = (E + (f >>> 13) | 0) + (vs >>> 26) | 0, vs &= 67108863, m = Math.imul(Ae, we), f = Math.imul(Ae, me), f = f + Math.imul(Ce, we) | 0, E = Math.imul(Ce, me);
      var ws = (h + m | 0) + ((f & 8191) << 13) | 0;
      return h = (E + (f >>> 13) | 0) + (ws >>> 26) | 0, ws &= 67108863, w[0] = De, w[1] = mt, w[2] = Ke, w[3] = Xe, w[4] = xt, w[5] = Vt, w[6] = Dr, w[7] = Ut, w[8] = En, w[9] = Cn, w[10] = In, w[11] = kn, w[12] = Sn, w[13] = Dn, w[14] = Bn, w[15] = Fn, w[16] = Rn, w[17] = vs, w[18] = ws, h !== 0 && (w[19] = h, g.length++), g;
    };
    Math.imul || (N = U);
    function z(l, o, d) {
      d.negative = o.negative ^ l.negative, d.length = l.length + o.length;
      for (var g = 0, v = 0, A = 0; A < d.length - 1; A++) {
        var w = v;
        v = 0;
        for (var h = g & 67108863, m = Math.min(A, o.length - 1), f = Math.max(0, A - l.length + 1); f <= m; f++) {
          var E = A - f, k = l.words[E] | 0, b = o.words[f] | 0, I = k * b, L = I & 67108863;
          w = w + (I / 67108864 | 0) | 0, L = L + h | 0, h = L & 67108863, w = w + (L >>> 26) | 0, v += w >>> 26, w &= 67108863;
        }
        d.words[A] = h, g = w, w = v;
      }
      return g !== 0 ? d.words[A] = g : d.length--, d._strip();
    }
    function O(l, o, d) {
      return z(l, o, d);
    }
    i.prototype.mulTo = function(o, d) {
      var g, v = this.length + o.length;
      return this.length === 10 && o.length === 10 ? g = N(this, o, d) : v < 63 ? g = U(this, o, d) : v < 1024 ? g = z(this, o, d) : g = O(this, o, d), g;
    }, i.prototype.mul = function(o) {
      var d = new i(null);
      return d.words = new Array(this.length + o.length), this.mulTo(o, d);
    }, i.prototype.mulf = function(o) {
      var d = new i(null);
      return d.words = new Array(this.length + o.length), O(this, o, d);
    }, i.prototype.imul = function(o) {
      return this.clone().mulTo(o, this);
    }, i.prototype.imuln = function(o) {
      var d = o < 0;
      d && (o = -o), n(typeof o == "number"), n(o < 67108864);
      for (var g = 0, v = 0; v < this.length; v++) {
        var A = (this.words[v] | 0) * o, w = (A & 67108863) + (g & 67108863);
        g >>= 26, g += A / 67108864 | 0, g += w >>> 26, this.words[v] = w & 67108863;
      }
      return g !== 0 && (this.words[v] = g, this.length++), d ? this.ineg() : this;
    }, i.prototype.muln = function(o) {
      return this.clone().imuln(o);
    }, i.prototype.sqr = function() {
      return this.mul(this);
    }, i.prototype.isqr = function() {
      return this.imul(this.clone());
    }, i.prototype.pow = function(o) {
      var d = S(o);
      if (d.length === 0)
        return new i(1);
      for (var g = this, v = 0; v < d.length && d[v] === 0; v++, g = g.sqr())
        ;
      if (++v < d.length)
        for (var A = g.sqr(); v < d.length; v++, A = A.sqr())
          d[v] !== 0 && (g = g.mul(A));
      return g;
    }, i.prototype.iushln = function(o) {
      n(typeof o == "number" && o >= 0);
      var d = o % 26, g = (o - d) / 26, v = 67108863 >>> 26 - d << 26 - d, A;
      if (d !== 0) {
        var w = 0;
        for (A = 0; A < this.length; A++) {
          var h = this.words[A] & v, m = (this.words[A] | 0) - h << d;
          this.words[A] = m | w, w = h >>> 26 - d;
        }
        w && (this.words[A] = w, this.length++);
      }
      if (g !== 0) {
        for (A = this.length - 1; A >= 0; A--)
          this.words[A + g] = this.words[A];
        for (A = 0; A < g; A++)
          this.words[A] = 0;
        this.length += g;
      }
      return this._strip();
    }, i.prototype.ishln = function(o) {
      return n(this.negative === 0), this.iushln(o);
    }, i.prototype.iushrn = function(o, d, g) {
      n(typeof o == "number" && o >= 0);
      var v;
      d ? v = (d - d % 26) / 26 : v = 0;
      var A = o % 26, w = Math.min((o - A) / 26, this.length), h = 67108863 ^ 67108863 >>> A << A, m = g;
      if (v -= w, v = Math.max(0, v), m) {
        for (var f = 0; f < w; f++)
          m.words[f] = this.words[f];
        m.length = w;
      }
      if (w !== 0)
        if (this.length > w)
          for (this.length -= w, f = 0; f < this.length; f++)
            this.words[f] = this.words[f + w];
        else
          this.words[0] = 0, this.length = 1;
      var E = 0;
      for (f = this.length - 1; f >= 0 && (E !== 0 || f >= v); f--) {
        var k = this.words[f] | 0;
        this.words[f] = E << 26 - A | k >>> A, E = k & h;
      }
      return m && E !== 0 && (m.words[m.length++] = E), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
    }, i.prototype.ishrn = function(o, d, g) {
      return n(this.negative === 0), this.iushrn(o, d, g);
    }, i.prototype.shln = function(o) {
      return this.clone().ishln(o);
    }, i.prototype.ushln = function(o) {
      return this.clone().iushln(o);
    }, i.prototype.shrn = function(o) {
      return this.clone().ishrn(o);
    }, i.prototype.ushrn = function(o) {
      return this.clone().iushrn(o);
    }, i.prototype.testn = function(o) {
      n(typeof o == "number" && o >= 0);
      var d = o % 26, g = (o - d) / 26, v = 1 << d;
      if (this.length <= g)
        return !1;
      var A = this.words[g];
      return !!(A & v);
    }, i.prototype.imaskn = function(o) {
      n(typeof o == "number" && o >= 0);
      var d = o % 26, g = (o - d) / 26;
      if (n(this.negative === 0, "imaskn works only with positive numbers"), this.length <= g)
        return this;
      if (d !== 0 && g++, this.length = Math.min(g, this.length), d !== 0) {
        var v = 67108863 ^ 67108863 >>> d << d;
        this.words[this.length - 1] &= v;
      }
      return this._strip();
    }, i.prototype.maskn = function(o) {
      return this.clone().imaskn(o);
    }, i.prototype.iaddn = function(o) {
      return n(typeof o == "number"), n(o < 67108864), o < 0 ? this.isubn(-o) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= o ? (this.words[0] = o - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(o), this.negative = 1, this) : this._iaddn(o);
    }, i.prototype._iaddn = function(o) {
      this.words[0] += o;
      for (var d = 0; d < this.length && this.words[d] >= 67108864; d++)
        this.words[d] -= 67108864, d === this.length - 1 ? this.words[d + 1] = 1 : this.words[d + 1]++;
      return this.length = Math.max(this.length, d + 1), this;
    }, i.prototype.isubn = function(o) {
      if (n(typeof o == "number"), n(o < 67108864), o < 0)
        return this.iaddn(-o);
      if (this.negative !== 0)
        return this.negative = 0, this.iaddn(o), this.negative = 1, this;
      if (this.words[0] -= o, this.length === 1 && this.words[0] < 0)
        this.words[0] = -this.words[0], this.negative = 1;
      else
        for (var d = 0; d < this.length && this.words[d] < 0; d++)
          this.words[d] += 67108864, this.words[d + 1] -= 1;
      return this._strip();
    }, i.prototype.addn = function(o) {
      return this.clone().iaddn(o);
    }, i.prototype.subn = function(o) {
      return this.clone().isubn(o);
    }, i.prototype.iabs = function() {
      return this.negative = 0, this;
    }, i.prototype.abs = function() {
      return this.clone().iabs();
    }, i.prototype._ishlnsubmul = function(o, d, g) {
      var v = o.length + g, A;
      this._expand(v);
      var w, h = 0;
      for (A = 0; A < o.length; A++) {
        w = (this.words[A + g] | 0) + h;
        var m = (o.words[A] | 0) * d;
        w -= m & 67108863, h = (w >> 26) - (m / 67108864 | 0), this.words[A + g] = w & 67108863;
      }
      for (; A < this.length - g; A++)
        w = (this.words[A + g] | 0) + h, h = w >> 26, this.words[A + g] = w & 67108863;
      if (h === 0)
        return this._strip();
      for (n(h === -1), h = 0, A = 0; A < this.length; A++)
        w = -(this.words[A] | 0) + h, h = w >> 26, this.words[A] = w & 67108863;
      return this.negative = 1, this._strip();
    }, i.prototype._wordDiv = function(o, d) {
      var g = this.length - o.length, v = this.clone(), A = o, w = A.words[A.length - 1] | 0, h = this._countBits(w);
      g = 26 - h, g !== 0 && (A = A.ushln(g), v.iushln(g), w = A.words[A.length - 1] | 0);
      var m = v.length - A.length, f;
      if (d !== "mod") {
        f = new i(null), f.length = m + 1, f.words = new Array(f.length);
        for (var E = 0; E < f.length; E++)
          f.words[E] = 0;
      }
      var k = v.clone()._ishlnsubmul(A, 1, m);
      k.negative === 0 && (v = k, f && (f.words[m] = 1));
      for (var b = m - 1; b >= 0; b--) {
        var I = (v.words[A.length + b] | 0) * 67108864 + (v.words[A.length + b - 1] | 0);
        for (I = Math.min(I / w | 0, 67108863), v._ishlnsubmul(A, I, b); v.negative !== 0; )
          I--, v.negative = 0, v._ishlnsubmul(A, 1, b), v.isZero() || (v.negative ^= 1);
        f && (f.words[b] = I);
      }
      return f && f._strip(), v._strip(), d !== "div" && g !== 0 && v.iushrn(g), {
        div: f || null,
        mod: v
      };
    }, i.prototype.divmod = function(o, d, g) {
      if (n(!o.isZero()), this.isZero())
        return {
          div: new i(0),
          mod: new i(0)
        };
      var v, A, w;
      return this.negative !== 0 && o.negative === 0 ? (w = this.neg().divmod(o, d), d !== "mod" && (v = w.div.neg()), d !== "div" && (A = w.mod.neg(), g && A.negative !== 0 && A.iadd(o)), {
        div: v,
        mod: A
      }) : this.negative === 0 && o.negative !== 0 ? (w = this.divmod(o.neg(), d), d !== "mod" && (v = w.div.neg()), {
        div: v,
        mod: w.mod
      }) : (this.negative & o.negative) !== 0 ? (w = this.neg().divmod(o.neg(), d), d !== "div" && (A = w.mod.neg(), g && A.negative !== 0 && A.isub(o)), {
        div: w.div,
        mod: A
      }) : o.length > this.length || this.cmp(o) < 0 ? {
        div: new i(0),
        mod: this
      } : o.length === 1 ? d === "div" ? {
        div: this.divn(o.words[0]),
        mod: null
      } : d === "mod" ? {
        div: null,
        mod: new i(this.modrn(o.words[0]))
      } : {
        div: this.divn(o.words[0]),
        mod: new i(this.modrn(o.words[0]))
      } : this._wordDiv(o, d);
    }, i.prototype.div = function(o) {
      return this.divmod(o, "div", !1).div;
    }, i.prototype.mod = function(o) {
      return this.divmod(o, "mod", !1).mod;
    }, i.prototype.umod = function(o) {
      return this.divmod(o, "mod", !0).mod;
    }, i.prototype.divRound = function(o) {
      var d = this.divmod(o);
      if (d.mod.isZero())
        return d.div;
      var g = d.div.negative !== 0 ? d.mod.isub(o) : d.mod, v = o.ushrn(1), A = o.andln(1), w = g.cmp(v);
      return w < 0 || A === 1 && w === 0 ? d.div : d.div.negative !== 0 ? d.div.isubn(1) : d.div.iaddn(1);
    }, i.prototype.modrn = function(o) {
      var d = o < 0;
      d && (o = -o), n(o <= 67108863);
      for (var g = (1 << 26) % o, v = 0, A = this.length - 1; A >= 0; A--)
        v = (g * v + (this.words[A] | 0)) % o;
      return d ? -v : v;
    }, i.prototype.modn = function(o) {
      return this.modrn(o);
    }, i.prototype.idivn = function(o) {
      var d = o < 0;
      d && (o = -o), n(o <= 67108863);
      for (var g = 0, v = this.length - 1; v >= 0; v--) {
        var A = (this.words[v] | 0) + g * 67108864;
        this.words[v] = A / o | 0, g = A % o;
      }
      return this._strip(), d ? this.ineg() : this;
    }, i.prototype.divn = function(o) {
      return this.clone().idivn(o);
    }, i.prototype.egcd = function(o) {
      n(o.negative === 0), n(!o.isZero());
      var d = this, g = o.clone();
      d.negative !== 0 ? d = d.umod(o) : d = d.clone();
      for (var v = new i(1), A = new i(0), w = new i(0), h = new i(1), m = 0; d.isEven() && g.isEven(); )
        d.iushrn(1), g.iushrn(1), ++m;
      for (var f = g.clone(), E = d.clone(); !d.isZero(); ) {
        for (var k = 0, b = 1; (d.words[0] & b) === 0 && k < 26; ++k, b <<= 1)
          ;
        if (k > 0)
          for (d.iushrn(k); k-- > 0; )
            (v.isOdd() || A.isOdd()) && (v.iadd(f), A.isub(E)), v.iushrn(1), A.iushrn(1);
        for (var I = 0, L = 1; (g.words[0] & L) === 0 && I < 26; ++I, L <<= 1)
          ;
        if (I > 0)
          for (g.iushrn(I); I-- > 0; )
            (w.isOdd() || h.isOdd()) && (w.iadd(f), h.isub(E)), w.iushrn(1), h.iushrn(1);
        d.cmp(g) >= 0 ? (d.isub(g), v.isub(w), A.isub(h)) : (g.isub(d), w.isub(v), h.isub(A));
      }
      return {
        a: w,
        b: h,
        gcd: g.iushln(m)
      };
    }, i.prototype._invmp = function(o) {
      n(o.negative === 0), n(!o.isZero());
      var d = this, g = o.clone();
      d.negative !== 0 ? d = d.umod(o) : d = d.clone();
      for (var v = new i(1), A = new i(0), w = g.clone(); d.cmpn(1) > 0 && g.cmpn(1) > 0; ) {
        for (var h = 0, m = 1; (d.words[0] & m) === 0 && h < 26; ++h, m <<= 1)
          ;
        if (h > 0)
          for (d.iushrn(h); h-- > 0; )
            v.isOdd() && v.iadd(w), v.iushrn(1);
        for (var f = 0, E = 1; (g.words[0] & E) === 0 && f < 26; ++f, E <<= 1)
          ;
        if (f > 0)
          for (g.iushrn(f); f-- > 0; )
            A.isOdd() && A.iadd(w), A.iushrn(1);
        d.cmp(g) >= 0 ? (d.isub(g), v.isub(A)) : (g.isub(d), A.isub(v));
      }
      var k;
      return d.cmpn(1) === 0 ? k = v : k = A, k.cmpn(0) < 0 && k.iadd(o), k;
    }, i.prototype.gcd = function(o) {
      if (this.isZero())
        return o.abs();
      if (o.isZero())
        return this.abs();
      var d = this.clone(), g = o.clone();
      d.negative = 0, g.negative = 0;
      for (var v = 0; d.isEven() && g.isEven(); v++)
        d.iushrn(1), g.iushrn(1);
      do {
        for (; d.isEven(); )
          d.iushrn(1);
        for (; g.isEven(); )
          g.iushrn(1);
        var A = d.cmp(g);
        if (A < 0) {
          var w = d;
          d = g, g = w;
        } else if (A === 0 || g.cmpn(1) === 0)
          break;
        d.isub(g);
      } while (!0);
      return g.iushln(v);
    }, i.prototype.invm = function(o) {
      return this.egcd(o).a.umod(o);
    }, i.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, i.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, i.prototype.andln = function(o) {
      return this.words[0] & o;
    }, i.prototype.bincn = function(o) {
      n(typeof o == "number");
      var d = o % 26, g = (o - d) / 26, v = 1 << d;
      if (this.length <= g)
        return this._expand(g + 1), this.words[g] |= v, this;
      for (var A = v, w = g; A !== 0 && w < this.length; w++) {
        var h = this.words[w] | 0;
        h += A, A = h >>> 26, h &= 67108863, this.words[w] = h;
      }
      return A !== 0 && (this.words[w] = A, this.length++), this;
    }, i.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, i.prototype.cmpn = function(o) {
      var d = o < 0;
      if (this.negative !== 0 && !d)
        return -1;
      if (this.negative === 0 && d)
        return 1;
      this._strip();
      var g;
      if (this.length > 1)
        g = 1;
      else {
        d && (o = -o), n(o <= 67108863, "Number is too big");
        var v = this.words[0] | 0;
        g = v === o ? 0 : v < o ? -1 : 1;
      }
      return this.negative !== 0 ? -g | 0 : g;
    }, i.prototype.cmp = function(o) {
      if (this.negative !== 0 && o.negative === 0)
        return -1;
      if (this.negative === 0 && o.negative !== 0)
        return 1;
      var d = this.ucmp(o);
      return this.negative !== 0 ? -d | 0 : d;
    }, i.prototype.ucmp = function(o) {
      if (this.length > o.length)
        return 1;
      if (this.length < o.length)
        return -1;
      for (var d = 0, g = this.length - 1; g >= 0; g--) {
        var v = this.words[g] | 0, A = o.words[g] | 0;
        if (v !== A) {
          v < A ? d = -1 : v > A && (d = 1);
          break;
        }
      }
      return d;
    }, i.prototype.gtn = function(o) {
      return this.cmpn(o) === 1;
    }, i.prototype.gt = function(o) {
      return this.cmp(o) === 1;
    }, i.prototype.gten = function(o) {
      return this.cmpn(o) >= 0;
    }, i.prototype.gte = function(o) {
      return this.cmp(o) >= 0;
    }, i.prototype.ltn = function(o) {
      return this.cmpn(o) === -1;
    }, i.prototype.lt = function(o) {
      return this.cmp(o) === -1;
    }, i.prototype.lten = function(o) {
      return this.cmpn(o) <= 0;
    }, i.prototype.lte = function(o) {
      return this.cmp(o) <= 0;
    }, i.prototype.eqn = function(o) {
      return this.cmpn(o) === 0;
    }, i.prototype.eq = function(o) {
      return this.cmp(o) === 0;
    }, i.red = function(o) {
      return new D(o);
    }, i.prototype.toRed = function(o) {
      return n(!this.red, "Already a number in reduction context"), n(this.negative === 0, "red works only with positives"), o.convertTo(this)._forceRed(o);
    }, i.prototype.fromRed = function() {
      return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, i.prototype._forceRed = function(o) {
      return this.red = o, this;
    }, i.prototype.forceRed = function(o) {
      return n(!this.red, "Already a number in reduction context"), this._forceRed(o);
    }, i.prototype.redAdd = function(o) {
      return n(this.red, "redAdd works only with red numbers"), this.red.add(this, o);
    }, i.prototype.redIAdd = function(o) {
      return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, o);
    }, i.prototype.redSub = function(o) {
      return n(this.red, "redSub works only with red numbers"), this.red.sub(this, o);
    }, i.prototype.redISub = function(o) {
      return n(this.red, "redISub works only with red numbers"), this.red.isub(this, o);
    }, i.prototype.redShl = function(o) {
      return n(this.red, "redShl works only with red numbers"), this.red.shl(this, o);
    }, i.prototype.redMul = function(o) {
      return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, o), this.red.mul(this, o);
    }, i.prototype.redIMul = function(o) {
      return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, o), this.red.imul(this, o);
    }, i.prototype.redSqr = function() {
      return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, i.prototype.redISqr = function() {
      return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, i.prototype.redSqrt = function() {
      return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, i.prototype.redInvm = function() {
      return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, i.prototype.redNeg = function() {
      return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, i.prototype.redPow = function(o) {
      return n(this.red && !o.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, o);
    };
    var T = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };
    function G(l, o) {
      this.name = l, this.p = new i(o, 16), this.n = this.p.bitLength(), this.k = new i(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    G.prototype._tmp = function() {
      var o = new i(null);
      return o.words = new Array(Math.ceil(this.n / 13)), o;
    }, G.prototype.ireduce = function(o) {
      var d = o, g;
      do
        this.split(d, this.tmp), d = this.imulK(d), d = d.iadd(this.tmp), g = d.bitLength();
      while (g > this.n);
      var v = g < this.n ? -1 : d.ucmp(this.p);
      return v === 0 ? (d.words[0] = 0, d.length = 1) : v > 0 ? d.isub(this.p) : d.strip !== void 0 ? d.strip() : d._strip(), d;
    }, G.prototype.split = function(o, d) {
      o.iushrn(this.n, 0, d);
    }, G.prototype.imulK = function(o) {
      return o.imul(this.k);
    };
    function J() {
      G.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    a(J, G), J.prototype.split = function(o, d) {
      for (var g = 4194303, v = Math.min(o.length, 9), A = 0; A < v; A++)
        d.words[A] = o.words[A];
      if (d.length = v, o.length <= 9) {
        o.words[0] = 0, o.length = 1;
        return;
      }
      var w = o.words[9];
      for (d.words[d.length++] = w & g, A = 10; A < o.length; A++) {
        var h = o.words[A] | 0;
        o.words[A - 10] = (h & g) << 4 | w >>> 22, w = h;
      }
      w >>>= 22, o.words[A - 10] = w, w === 0 && o.length > 10 ? o.length -= 10 : o.length -= 9;
    }, J.prototype.imulK = function(o) {
      o.words[o.length] = 0, o.words[o.length + 1] = 0, o.length += 2;
      for (var d = 0, g = 0; g < o.length; g++) {
        var v = o.words[g] | 0;
        d += v * 977, o.words[g] = d & 67108863, d = v * 64 + (d / 67108864 | 0);
      }
      return o.words[o.length - 1] === 0 && (o.length--, o.words[o.length - 1] === 0 && o.length--), o;
    };
    function Y() {
      G.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    a(Y, G);
    function X() {
      G.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    a(X, G);
    function se() {
      G.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    a(se, G), se.prototype.imulK = function(o) {
      for (var d = 0, g = 0; g < o.length; g++) {
        var v = (o.words[g] | 0) * 19 + d, A = v & 67108863;
        v >>>= 26, o.words[g] = A, d = v;
      }
      return d !== 0 && (o.words[o.length++] = d), o;
    }, i._prime = function(o) {
      if (T[o])
        return T[o];
      var d;
      if (o === "k256")
        d = new J();
      else if (o === "p224")
        d = new Y();
      else if (o === "p192")
        d = new X();
      else if (o === "p25519")
        d = new se();
      else
        throw new Error("Unknown prime " + o);
      return T[o] = d, d;
    };
    function D(l) {
      if (typeof l == "string") {
        var o = i._prime(l);
        this.m = o.p, this.prime = o;
      } else
        n(l.gtn(1), "modulus must be greater than 1"), this.m = l, this.prime = null;
    }
    D.prototype._verify1 = function(o) {
      n(o.negative === 0, "red works only with positives"), n(o.red, "red works only with red numbers");
    }, D.prototype._verify2 = function(o, d) {
      n((o.negative | d.negative) === 0, "red works only with positives"), n(
        o.red && o.red === d.red,
        "red works only with red numbers"
      );
    }, D.prototype.imod = function(o) {
      return this.prime ? this.prime.ireduce(o)._forceRed(this) : (y(o, o.umod(this.m)._forceRed(this)), o);
    }, D.prototype.neg = function(o) {
      return o.isZero() ? o.clone() : this.m.sub(o)._forceRed(this);
    }, D.prototype.add = function(o, d) {
      this._verify2(o, d);
      var g = o.add(d);
      return g.cmp(this.m) >= 0 && g.isub(this.m), g._forceRed(this);
    }, D.prototype.iadd = function(o, d) {
      this._verify2(o, d);
      var g = o.iadd(d);
      return g.cmp(this.m) >= 0 && g.isub(this.m), g;
    }, D.prototype.sub = function(o, d) {
      this._verify2(o, d);
      var g = o.sub(d);
      return g.cmpn(0) < 0 && g.iadd(this.m), g._forceRed(this);
    }, D.prototype.isub = function(o, d) {
      this._verify2(o, d);
      var g = o.isub(d);
      return g.cmpn(0) < 0 && g.iadd(this.m), g;
    }, D.prototype.shl = function(o, d) {
      return this._verify1(o), this.imod(o.ushln(d));
    }, D.prototype.imul = function(o, d) {
      return this._verify2(o, d), this.imod(o.imul(d));
    }, D.prototype.mul = function(o, d) {
      return this._verify2(o, d), this.imod(o.mul(d));
    }, D.prototype.isqr = function(o) {
      return this.imul(o, o.clone());
    }, D.prototype.sqr = function(o) {
      return this.mul(o, o);
    }, D.prototype.sqrt = function(o) {
      if (o.isZero())
        return o.clone();
      var d = this.m.andln(3);
      if (n(d % 2 === 1), d === 3) {
        var g = this.m.add(new i(1)).iushrn(2);
        return this.pow(o, g);
      }
      for (var v = this.m.subn(1), A = 0; !v.isZero() && v.andln(1) === 0; )
        A++, v.iushrn(1);
      n(!v.isZero());
      var w = new i(1).toRed(this), h = w.redNeg(), m = this.m.subn(1).iushrn(1), f = this.m.bitLength();
      for (f = new i(2 * f * f).toRed(this); this.pow(f, m).cmp(h) !== 0; )
        f.redIAdd(h);
      for (var E = this.pow(f, v), k = this.pow(o, v.addn(1).iushrn(1)), b = this.pow(o, v), I = A; b.cmp(w) !== 0; ) {
        for (var L = b, P = 0; L.cmp(w) !== 0; P++)
          L = L.redSqr();
        n(P < I);
        var H = this.pow(E, new i(1).iushln(I - P - 1));
        k = k.redMul(H), E = H.redSqr(), b = b.redMul(E), I = P;
      }
      return k;
    }, D.prototype.invm = function(o) {
      var d = o._invmp(this.m);
      return d.negative !== 0 ? (d.negative = 0, this.imod(d).redNeg()) : this.imod(d);
    }, D.prototype.pow = function(o, d) {
      if (d.isZero())
        return new i(1).toRed(this);
      if (d.cmpn(1) === 0)
        return o.clone();
      var g = 4, v = new Array(1 << g);
      v[0] = new i(1).toRed(this), v[1] = o;
      for (var A = 2; A < v.length; A++)
        v[A] = this.mul(v[A - 1], o);
      var w = v[0], h = 0, m = 0, f = d.bitLength() % 26;
      for (f === 0 && (f = 26), A = d.length - 1; A >= 0; A--) {
        for (var E = d.words[A], k = f - 1; k >= 0; k--) {
          var b = E >> k & 1;
          if (w !== v[0] && (w = this.sqr(w)), b === 0 && h === 0) {
            m = 0;
            continue;
          }
          h <<= 1, h |= b, m++, !(m !== g && (A !== 0 || k !== 0)) && (w = this.mul(w, v[h]), m = 0, h = 0);
        }
        f = 26;
      }
      return w;
    }, D.prototype.convertTo = function(o) {
      var d = o.umod(this.m);
      return d === o ? d.clone() : d;
    }, D.prototype.convertFrom = function(o) {
      var d = o.clone();
      return d.red = null, d;
    }, i.mont = function(o) {
      return new u(o);
    };
    function u(l) {
      D.call(this, l), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new i(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    a(u, D), u.prototype.convertTo = function(o) {
      return this.imod(o.ushln(this.shift));
    }, u.prototype.convertFrom = function(o) {
      var d = this.imod(o.mul(this.rinv));
      return d.red = null, d;
    }, u.prototype.imul = function(o, d) {
      if (o.isZero() || d.isZero())
        return o.words[0] = 0, o.length = 1, o;
      var g = o.imul(d), v = g.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), A = g.isub(v).iushrn(this.shift), w = A;
      return A.cmp(this.m) >= 0 ? w = A.isub(this.m) : A.cmpn(0) < 0 && (w = A.iadd(this.m)), w._forceRed(this);
    }, u.prototype.mul = function(o, d) {
      if (o.isZero() || d.isZero())
        return new i(0)._forceRed(this);
      var g = o.mul(d), v = g.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), A = g.isub(v).iushrn(this.shift), w = A;
      return A.cmp(this.m) >= 0 ? w = A.isub(this.m) : A.cmpn(0) < 0 && (w = A.iadd(this.m)), w._forceRed(this);
    }, u.prototype.invm = function(o) {
      var d = this.imod(o._invmp(this.m).mul(this.r2));
      return d._forceRed(this);
    };
  })(t, tr);
})(Lf);
const Oe = Lf.exports, Dh = "logger/5.7.0";
let L0 = !1, j0 = !1;
const Fi = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
let W0 = Fi.default, Is = null;
function Bh() {
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
const H0 = Bh();
var $i;
(function(t) {
  t.DEBUG = "DEBUG", t.INFO = "INFO", t.WARNING = "WARNING", t.ERROR = "ERROR", t.OFF = "OFF";
})($i || ($i = {}));
var cr;
(function(t) {
  t.UNKNOWN_ERROR = "UNKNOWN_ERROR", t.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", t.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", t.NETWORK_ERROR = "NETWORK_ERROR", t.SERVER_ERROR = "SERVER_ERROR", t.TIMEOUT = "TIMEOUT", t.BUFFER_OVERRUN = "BUFFER_OVERRUN", t.NUMERIC_FAULT = "NUMERIC_FAULT", t.MISSING_NEW = "MISSING_NEW", t.INVALID_ARGUMENT = "INVALID_ARGUMENT", t.MISSING_ARGUMENT = "MISSING_ARGUMENT", t.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", t.CALL_EXCEPTION = "CALL_EXCEPTION", t.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", t.NONCE_EXPIRED = "NONCE_EXPIRED", t.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", t.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", t.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", t.ACTION_REJECTED = "ACTION_REJECTED";
})(cr || (cr = {}));
const z0 = "0123456789abcdef";
class Z {
  constructor(e) {
    Object.defineProperty(this, "version", {
      enumerable: !0,
      value: e,
      writable: !1
    });
  }
  _log(e, r) {
    const n = e.toLowerCase();
    Fi[n] == null && this.throwArgumentError("invalid log level name", "logLevel", e), !(W0 > Fi[n]) && console.log.apply(console, r);
  }
  debug(...e) {
    this._log(Z.levels.DEBUG, e);
  }
  info(...e) {
    this._log(Z.levels.INFO, e);
  }
  warn(...e) {
    this._log(Z.levels.WARNING, e);
  }
  makeError(e, r, n) {
    if (j0)
      return this.makeError("censored error", r, {});
    r || (r = Z.errors.UNKNOWN_ERROR), n || (n = {});
    const a = [];
    Object.keys(n).forEach((p) => {
      const x = n[p];
      try {
        if (x instanceof Uint8Array) {
          let y = "";
          for (let C = 0; C < x.length; C++)
            y += z0[x[C] >> 4], y += z0[x[C] & 15];
          a.push(p + "=Uint8Array(0x" + y + ")");
        } else
          a.push(p + "=" + JSON.stringify(x));
      } catch {
        a.push(p + "=" + JSON.stringify(n[p].toString()));
      }
    }), a.push(`code=${r}`), a.push(`version=${this.version}`);
    const i = e;
    let s = "";
    switch (r) {
      case cr.NUMERIC_FAULT: {
        s = "NUMERIC_FAULT";
        const p = e;
        switch (p) {
          case "overflow":
          case "underflow":
          case "division-by-zero":
            s += "-" + p;
            break;
          case "negative-power":
          case "negative-width":
            s += "-unsupported";
            break;
          case "unbound-bitwise-result":
            s += "-unbound-result";
            break;
        }
        break;
      }
      case cr.CALL_EXCEPTION:
      case cr.INSUFFICIENT_FUNDS:
      case cr.MISSING_NEW:
      case cr.NONCE_EXPIRED:
      case cr.REPLACEMENT_UNDERPRICED:
      case cr.TRANSACTION_REPLACED:
      case cr.UNPREDICTABLE_GAS_LIMIT:
        s = r;
        break;
    }
    s && (e += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"), a.length && (e += " (" + a.join(", ") + ")");
    const c = new Error(e);
    return c.reason = i, c.code = r, Object.keys(n).forEach(function(p) {
      c[p] = n[p];
    }), c;
  }
  throwError(e, r, n) {
    throw this.makeError(e, r, n);
  }
  throwArgumentError(e, r, n) {
    return this.throwError(e, Z.errors.INVALID_ARGUMENT, {
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
    H0 && this.throwError("platform missing String.prototype.normalize", Z.errors.UNSUPPORTED_OPERATION, {
      operation: "String.prototype.normalize",
      form: H0
    });
  }
  checkSafeUint53(e, r) {
    typeof e == "number" && (r == null && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, Z.errors.NUMERIC_FAULT, {
      operation: "checkSafeInteger",
      fault: "out-of-safe-range",
      value: e
    }), e % 1 && this.throwError(r, Z.errors.NUMERIC_FAULT, {
      operation: "checkSafeInteger",
      fault: "non-integer",
      value: e
    }));
  }
  checkArgumentCount(e, r, n) {
    n ? n = ": " + n : n = "", e < r && this.throwError("missing argument" + n, Z.errors.MISSING_ARGUMENT, {
      count: e,
      expectedCount: r
    }), e > r && this.throwError("too many arguments" + n, Z.errors.UNEXPECTED_ARGUMENT, {
      count: e,
      expectedCount: r
    });
  }
  checkNew(e, r) {
    (e === Object || e == null) && this.throwError("missing new", Z.errors.MISSING_NEW, { name: r.name });
  }
  checkAbstract(e, r) {
    e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", Z.errors.UNSUPPORTED_OPERATION, { name: e.name, operation: "new" }) : (e === Object || e == null) && this.throwError("missing new", Z.errors.MISSING_NEW, { name: r.name });
  }
  static globalLogger() {
    return Is || (Is = new Z(Dh)), Is;
  }
  static setCensorship(e, r) {
    if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", Z.errors.UNSUPPORTED_OPERATION, {
      operation: "setCensorship"
    }), L0) {
      if (!e)
        return;
      this.globalLogger().throwError("error censorship permanent", Z.errors.UNSUPPORTED_OPERATION, {
        operation: "setCensorship"
      });
    }
    j0 = !!e, L0 = !!r;
  }
  static setLogLevel(e) {
    const r = Fi[e.toLowerCase()];
    if (r == null) {
      Z.globalLogger().warn("invalid log level - " + e);
      return;
    }
    W0 = r;
  }
  static from(e) {
    return new Z(e);
  }
}
Z.errors = cr;
Z.levels = $i;
const Fh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get LogLevel() {
    return $i;
  },
  get ErrorCode() {
    return cr;
  },
  Logger: Z
}, Symbol.toStringTag, { value: "Module" })), Rh = "bytes/5.7.0", Ct = new Z(Rh);
function Wf(t) {
  return !!t.toHexString;
}
function ia(t) {
  return t.slice || (t.slice = function() {
    const e = Array.prototype.slice.call(arguments);
    return ia(new Uint8Array(Array.prototype.slice.apply(t, e)));
  }), t;
}
function ci(t) {
  return At(t) && !(t.length % 2) || Vn(t);
}
function G0(t) {
  return typeof t == "number" && t == t && t % 1 === 0;
}
function Vn(t) {
  if (t == null)
    return !1;
  if (t.constructor === Uint8Array)
    return !0;
  if (typeof t == "string" || !G0(t.length) || t.length < 0)
    return !1;
  for (let e = 0; e < t.length; e++) {
    const r = t[e];
    if (!G0(r) || r < 0 || r >= 256)
      return !1;
  }
  return !0;
}
function ce(t, e) {
  if (e || (e = {}), typeof t == "number") {
    Ct.checkSafeUint53(t, "invalid arrayify value");
    const r = [];
    for (; t; )
      r.unshift(t & 255), t = parseInt(String(t / 256));
    return r.length === 0 && r.push(0), ia(new Uint8Array(r));
  }
  if (e.allowMissingPrefix && typeof t == "string" && t.substring(0, 2) !== "0x" && (t = "0x" + t), Wf(t) && (t = t.toHexString()), At(t)) {
    let r = t.substring(2);
    r.length % 2 && (e.hexPad === "left" ? r = "0" + r : e.hexPad === "right" ? r += "0" : Ct.throwArgumentError("hex data is odd-length", "value", t));
    const n = [];
    for (let a = 0; a < r.length; a += 2)
      n.push(parseInt(r.substring(a, a + 2), 16));
    return ia(new Uint8Array(n));
  }
  return Vn(t) ? ia(new Uint8Array(t)) : Ct.throwArgumentError("invalid arrayify value", "value", t);
}
function Dt(t) {
  const e = t.map((a) => ce(a)), r = e.reduce((a, i) => a + i.length, 0), n = new Uint8Array(r);
  return e.reduce((a, i) => (n.set(i, a), a + i.length), 0), ia(n);
}
function Lr(t) {
  let e = ce(t);
  if (e.length === 0)
    return e;
  let r = 0;
  for (; r < e.length && e[r] === 0; )
    r++;
  return r && (e = e.slice(r)), e;
}
function Oa(t, e) {
  t = ce(t), t.length > e && Ct.throwArgumentError("value out of range", "value", arguments[0]);
  const r = new Uint8Array(e);
  return r.set(t, e - t.length), ia(r);
}
function At(t, e) {
  return !(typeof t != "string" || !t.match(/^0x[0-9A-Fa-f]*$/) || e && t.length !== 2 + 2 * e);
}
const ks = "0123456789abcdef";
function fe(t, e) {
  if (e || (e = {}), typeof t == "number") {
    Ct.checkSafeUint53(t, "invalid hexlify value");
    let r = "";
    for (; t; )
      r = ks[t & 15] + r, t = Math.floor(t / 16);
    return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00";
  }
  if (typeof t == "bigint")
    return t = t.toString(16), t.length % 2 ? "0x0" + t : "0x" + t;
  if (e.allowMissingPrefix && typeof t == "string" && t.substring(0, 2) !== "0x" && (t = "0x" + t), Wf(t))
    return t.toHexString();
  if (At(t))
    return t.length % 2 && (e.hexPad === "left" ? t = "0x0" + t.substring(2) : e.hexPad === "right" ? t += "0" : Ct.throwArgumentError("hex data is odd-length", "value", t)), t.toLowerCase();
  if (Vn(t)) {
    let r = "0x";
    for (let n = 0; n < t.length; n++) {
      let a = t[n];
      r += ks[(a & 240) >> 4] + ks[a & 15];
    }
    return r;
  }
  return Ct.throwArgumentError("invalid hexlify value", "value", t);
}
function Ka(t) {
  if (typeof t != "string")
    t = fe(t);
  else if (!At(t) || t.length % 2)
    return null;
  return (t.length - 2) / 2;
}
function tn(t, e, r) {
  return typeof t != "string" ? t = fe(t) : (!At(t) || t.length % 2) && Ct.throwArgumentError("invalid hexData", "value", t), e = 2 + 2 * e, r != null ? "0x" + t.substring(e, 2 + 2 * r) : "0x" + t.substring(e);
}
function pn(t) {
  let e = "0x";
  return t.forEach((r) => {
    e += fe(r).substring(2);
  }), e;
}
function Mh(t) {
  const e = Hf(fe(t, { hexPad: "left" }));
  return e === "0x" ? "0x0" : e;
}
function Hf(t) {
  typeof t != "string" && (t = fe(t)), At(t) || Ct.throwArgumentError("invalid hex string", "value", t), t = t.substring(2);
  let e = 0;
  for (; e < t.length && t[e] === "0"; )
    e++;
  return "0x" + t.substring(e);
}
function Bt(t, e) {
  for (typeof t != "string" ? t = fe(t) : At(t) || Ct.throwArgumentError("invalid hex string", "value", t), t.length > 2 * e + 2 && Ct.throwArgumentError("value out of range", "value", arguments[1]); t.length < 2 * e + 2; )
    t = "0x0" + t.substring(2);
  return t;
}
function Kn(t) {
  const e = {
    r: "0x",
    s: "0x",
    _vs: "0x",
    recoveryParam: 0,
    v: 0,
    yParityAndS: "0x",
    compact: "0x"
  };
  if (ci(t)) {
    let r = ce(t);
    r.length === 64 ? (e.v = 27 + (r[32] >> 7), r[32] &= 127, e.r = fe(r.slice(0, 32)), e.s = fe(r.slice(32, 64))) : r.length === 65 ? (e.r = fe(r.slice(0, 32)), e.s = fe(r.slice(32, 64)), e.v = r[64]) : Ct.throwArgumentError("invalid signature string", "signature", t), e.v < 27 && (e.v === 0 || e.v === 1 ? e.v += 27 : Ct.throwArgumentError("signature invalid v byte", "signature", t)), e.recoveryParam = 1 - e.v % 2, e.recoveryParam && (r[32] |= 128), e._vs = fe(r.slice(32, 64));
  } else {
    if (e.r = t.r, e.s = t.s, e.v = t.v, e.recoveryParam = t.recoveryParam, e._vs = t._vs, e._vs != null) {
      const a = Oa(ce(e._vs), 32);
      e._vs = fe(a);
      const i = a[0] >= 128 ? 1 : 0;
      e.recoveryParam == null ? e.recoveryParam = i : e.recoveryParam !== i && Ct.throwArgumentError("signature recoveryParam mismatch _vs", "signature", t), a[0] &= 127;
      const s = fe(a);
      e.s == null ? e.s = s : e.s !== s && Ct.throwArgumentError("signature v mismatch _vs", "signature", t);
    }
    if (e.recoveryParam == null)
      e.v == null ? Ct.throwArgumentError("signature missing v and recoveryParam", "signature", t) : e.v === 0 || e.v === 1 ? e.recoveryParam = e.v : e.recoveryParam = 1 - e.v % 2;
    else if (e.v == null)
      e.v = 27 + e.recoveryParam;
    else {
      const a = e.v === 0 || e.v === 1 ? e.v : 1 - e.v % 2;
      e.recoveryParam !== a && Ct.throwArgumentError("signature recoveryParam mismatch v", "signature", t);
    }
    e.r == null || !At(e.r) ? Ct.throwArgumentError("signature missing or invalid r", "signature", t) : e.r = Bt(e.r, 32), e.s == null || !At(e.s) ? Ct.throwArgumentError("signature missing or invalid s", "signature", t) : e.s = Bt(e.s, 32);
    const r = ce(e.s);
    r[0] >= 128 && Ct.throwArgumentError("signature s out of range", "signature", t), e.recoveryParam && (r[0] |= 128);
    const n = fe(r);
    e._vs && (At(e._vs) || Ct.throwArgumentError("signature invalid _vs", "signature", t), e._vs = Bt(e._vs, 32)), e._vs == null ? e._vs = n : e._vs !== n && Ct.throwArgumentError("signature _vs mismatch v and s", "signature", t);
  }
  return e.yParityAndS = e._vs, e.compact = e.r + e.yParityAndS.substring(2), e;
}
function io(t) {
  return t = Kn(t), fe(Dt([
    t.r,
    t.s,
    t.recoveryParam ? "0x1c" : "0x1b"
  ]));
}
const _h = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBytesLike: ci,
  isBytes: Vn,
  arrayify: ce,
  concat: Dt,
  stripZeros: Lr,
  zeroPad: Oa,
  isHexString: At,
  hexlify: fe,
  hexDataLength: Ka,
  hexDataSlice: tn,
  hexConcat: pn,
  hexValue: Mh,
  hexStripZeros: Hf,
  hexZeroPad: Bt,
  splitSignature: Kn,
  joinSignature: io
}, Symbol.toStringTag, { value: "Module" })), zf = "bignumber/5.7.0";
var qa = Oe.BN;
const Zr = new Z(zf), Ss = {}, $0 = 9007199254740991;
function Th(t) {
  return t != null && (de.isBigNumber(t) || typeof t == "number" && t % 1 === 0 || typeof t == "string" && !!t.match(/^-?[0-9]+$/) || At(t) || typeof t == "bigint" || Vn(t));
}
let V0 = !1;
class de {
  constructor(e, r) {
    e !== Ss && Zr.throwError("cannot call constructor directly; use BigNumber.from", Z.errors.UNSUPPORTED_OPERATION, {
      operation: "new (BigNumber)"
    }), this._hex = r, this._isBigNumber = !0, Object.freeze(this);
  }
  fromTwos(e) {
    return Kt(je(this).fromTwos(e));
  }
  toTwos(e) {
    return Kt(je(this).toTwos(e));
  }
  abs() {
    return this._hex[0] === "-" ? de.from(this._hex.substring(1)) : this;
  }
  add(e) {
    return Kt(je(this).add(je(e)));
  }
  sub(e) {
    return Kt(je(this).sub(je(e)));
  }
  div(e) {
    return de.from(e).isZero() && ir("division-by-zero", "div"), Kt(je(this).div(je(e)));
  }
  mul(e) {
    return Kt(je(this).mul(je(e)));
  }
  mod(e) {
    const r = je(e);
    return r.isNeg() && ir("division-by-zero", "mod"), Kt(je(this).umod(r));
  }
  pow(e) {
    const r = je(e);
    return r.isNeg() && ir("negative-power", "pow"), Kt(je(this).pow(r));
  }
  and(e) {
    const r = je(e);
    return (this.isNegative() || r.isNeg()) && ir("unbound-bitwise-result", "and"), Kt(je(this).and(r));
  }
  or(e) {
    const r = je(e);
    return (this.isNegative() || r.isNeg()) && ir("unbound-bitwise-result", "or"), Kt(je(this).or(r));
  }
  xor(e) {
    const r = je(e);
    return (this.isNegative() || r.isNeg()) && ir("unbound-bitwise-result", "xor"), Kt(je(this).xor(r));
  }
  mask(e) {
    return (this.isNegative() || e < 0) && ir("negative-width", "mask"), Kt(je(this).maskn(e));
  }
  shl(e) {
    return (this.isNegative() || e < 0) && ir("negative-width", "shl"), Kt(je(this).shln(e));
  }
  shr(e) {
    return (this.isNegative() || e < 0) && ir("negative-width", "shr"), Kt(je(this).shrn(e));
  }
  eq(e) {
    return je(this).eq(je(e));
  }
  lt(e) {
    return je(this).lt(je(e));
  }
  lte(e) {
    return je(this).lte(je(e));
  }
  gt(e) {
    return je(this).gt(je(e));
  }
  gte(e) {
    return je(this).gte(je(e));
  }
  isNegative() {
    return this._hex[0] === "-";
  }
  isZero() {
    return je(this).isZero();
  }
  toNumber() {
    try {
      return je(this).toNumber();
    } catch {
      ir("overflow", "toNumber", this.toString());
    }
    return null;
  }
  toBigInt() {
    try {
      return BigInt(this.toString());
    } catch {
    }
    return Zr.throwError("this platform does not support BigInt", Z.errors.UNSUPPORTED_OPERATION, {
      value: this.toString()
    });
  }
  toString() {
    return arguments.length > 0 && (arguments[0] === 10 ? V0 || (V0 = !0, Zr.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : arguments[0] === 16 ? Zr.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", Z.errors.UNEXPECTED_ARGUMENT, {}) : Zr.throwError("BigNumber.toString does not accept parameters", Z.errors.UNEXPECTED_ARGUMENT, {})), je(this).toString(10);
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
      return e.match(/^-?0x[0-9a-f]+$/i) ? new de(Ss, Xa(e)) : e.match(/^-?[0-9]+$/) ? new de(Ss, Xa(new qa(e))) : Zr.throwArgumentError("invalid BigNumber string", "value", e);
    if (typeof e == "number")
      return e % 1 && ir("underflow", "BigNumber.from", e), (e >= $0 || e <= -$0) && ir("overflow", "BigNumber.from", e), de.from(String(e));
    const r = e;
    if (typeof r == "bigint")
      return de.from(r.toString());
    if (Vn(r))
      return de.from(fe(r));
    if (r)
      if (r.toHexString) {
        const n = r.toHexString();
        if (typeof n == "string")
          return de.from(n);
      } else {
        let n = r._hex;
        if (n == null && r.type === "BigNumber" && (n = r.hex), typeof n == "string" && (At(n) || n[0] === "-" && At(n.substring(1))))
          return de.from(n);
      }
    return Zr.throwArgumentError("invalid BigNumber value", "value", e);
  }
  static isBigNumber(e) {
    return !!(e && e._isBigNumber);
  }
}
function Xa(t) {
  if (typeof t != "string")
    return Xa(t.toString(16));
  if (t[0] === "-")
    return t = t.substring(1), t[0] === "-" && Zr.throwArgumentError("invalid hex", "value", t), t = Xa(t), t === "0x00" ? t : "-" + t;
  if (t.substring(0, 2) !== "0x" && (t = "0x" + t), t === "0x")
    return "0x00";
  for (t.length % 2 && (t = "0x0" + t.substring(2)); t.length > 4 && t.substring(0, 4) === "0x00"; )
    t = "0x" + t.substring(4);
  return t;
}
function Kt(t) {
  return de.from(Xa(t));
}
function je(t) {
  const e = de.from(t).toHexString();
  return e[0] === "-" ? new qa("-" + e.substring(3), 16) : new qa(e.substring(2), 16);
}
function ir(t, e, r) {
  const n = { fault: t, operation: e };
  return r != null && (n.value = r), Zr.throwError(t, Z.errors.NUMERIC_FAULT, n);
}
function Uh(t) {
  return new qa(t, 36).toString(16);
}
function Ph(t) {
  return new qa(t, 16).toString(36);
}
const Gt = new Z(zf), La = {}, Gf = de.from(0), $f = de.from(-1);
function Vf(t, e, r, n) {
  const a = { fault: e, operation: r };
  return n !== void 0 && (a.value = n), Gt.throwError(t, Z.errors.NUMERIC_FAULT, a);
}
let ja = "0";
for (; ja.length < 256; )
  ja += ja;
function Po(t) {
  if (typeof t != "number")
    try {
      t = de.from(t).toNumber();
    } catch {
    }
  return typeof t == "number" && t >= 0 && t <= 256 && !(t % 1) ? "1" + ja.substring(0, t) : Gt.throwArgumentError("invalid decimal size", "decimals", t);
}
function Ri(t, e) {
  e == null && (e = 0);
  const r = Po(e);
  t = de.from(t);
  const n = t.lt(Gf);
  n && (t = t.mul($f));
  let a = t.mod(r).toString();
  for (; a.length < r.length - 1; )
    a = "0" + a;
  a = a.match(/^([0-9]*[1-9]|0)(0*)/)[1];
  const i = t.div(r).toString();
  return r.length === 1 ? t = i : t = i + "." + a, n && (t = "-" + t), t;
}
function Br(t, e) {
  e == null && (e = 0);
  const r = Po(e);
  (typeof t != "string" || !t.match(/^-?[0-9.]+$/)) && Gt.throwArgumentError("invalid decimal value", "value", t);
  const n = t.substring(0, 1) === "-";
  n && (t = t.substring(1)), t === "." && Gt.throwArgumentError("missing value", "value", t);
  const a = t.split(".");
  a.length > 2 && Gt.throwArgumentError("too many decimal points", "value", t);
  let i = a[0], s = a[1];
  for (i || (i = "0"), s || (s = "0"); s[s.length - 1] === "0"; )
    s = s.substring(0, s.length - 1);
  for (s.length > r.length - 1 && Vf("fractional component exceeds decimals", "underflow", "parseFixed"), s === "" && (s = "0"); s.length < r.length - 1; )
    s += "0";
  const c = de.from(i), p = de.from(s);
  let x = c.mul(r).add(p);
  return n && (x = x.mul($f)), x;
}
class sa {
  constructor(e, r, n, a) {
    e !== La && Gt.throwError("cannot use FixedFormat constructor; use FixedFormat.from", Z.errors.UNSUPPORTED_OPERATION, {
      operation: "new FixedFormat"
    }), this.signed = r, this.width = n, this.decimals = a, this.name = (r ? "" : "u") + "fixed" + String(n) + "x" + String(a), this._multiplier = Po(a), Object.freeze(this);
  }
  static from(e) {
    if (e instanceof sa)
      return e;
    typeof e == "number" && (e = `fixed128x${e}`);
    let r = !0, n = 128, a = 18;
    if (typeof e == "string") {
      if (e !== "fixed")
        if (e === "ufixed")
          r = !1;
        else {
          const i = e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
          i || Gt.throwArgumentError("invalid fixed format", "format", e), r = i[1] !== "u", n = parseInt(i[2]), a = parseInt(i[3]);
        }
    } else if (e) {
      const i = (s, c, p) => e[s] == null ? p : (typeof e[s] !== c && Gt.throwArgumentError("invalid fixed format (" + s + " not " + c + ")", "format." + s, e[s]), e[s]);
      r = i("signed", "boolean", r), n = i("width", "number", n), a = i("decimals", "number", a);
    }
    return n % 8 && Gt.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", n), a > 80 && Gt.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", a), new sa(La, r, n, a);
  }
}
class Pt {
  constructor(e, r, n, a) {
    e !== La && Gt.throwError("cannot use FixedNumber constructor; use FixedNumber.from", Z.errors.UNSUPPORTED_OPERATION, {
      operation: "new FixedFormat"
    }), this.format = a, this._hex = r, this._value = n, this._isFixedNumber = !0, Object.freeze(this);
  }
  _checkFormat(e) {
    this.format.name !== e.format.name && Gt.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", e);
  }
  addUnsafe(e) {
    this._checkFormat(e);
    const r = Br(this._value, this.format.decimals), n = Br(e._value, e.format.decimals);
    return Pt.fromValue(r.add(n), this.format.decimals, this.format);
  }
  subUnsafe(e) {
    this._checkFormat(e);
    const r = Br(this._value, this.format.decimals), n = Br(e._value, e.format.decimals);
    return Pt.fromValue(r.sub(n), this.format.decimals, this.format);
  }
  mulUnsafe(e) {
    this._checkFormat(e);
    const r = Br(this._value, this.format.decimals), n = Br(e._value, e.format.decimals);
    return Pt.fromValue(r.mul(n).div(this.format._multiplier), this.format.decimals, this.format);
  }
  divUnsafe(e) {
    this._checkFormat(e);
    const r = Br(this._value, this.format.decimals), n = Br(e._value, e.format.decimals);
    return Pt.fromValue(r.mul(this.format._multiplier).div(n), this.format.decimals, this.format);
  }
  floor() {
    const e = this.toString().split(".");
    e.length === 1 && e.push("0");
    let r = Pt.from(e[0], this.format);
    const n = !e[1].match(/^(0*)$/);
    return this.isNegative() && n && (r = r.subUnsafe(K0.toFormat(r.format))), r;
  }
  ceiling() {
    const e = this.toString().split(".");
    e.length === 1 && e.push("0");
    let r = Pt.from(e[0], this.format);
    const n = !e[1].match(/^(0*)$/);
    return !this.isNegative() && n && (r = r.addUnsafe(K0.toFormat(r.format))), r;
  }
  round(e) {
    e == null && (e = 0);
    const r = this.toString().split(".");
    if (r.length === 1 && r.push("0"), (e < 0 || e > 80 || e % 1) && Gt.throwArgumentError("invalid decimal count", "decimals", e), r[1].length <= e)
      return this;
    const n = Pt.from("1" + ja.substring(0, e), this.format), a = Nh.toFormat(this.format);
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
    e % 8 && Gt.throwArgumentError("invalid byte width", "width", e);
    const r = de.from(this._hex).fromTwos(this.format.width).toTwos(e).toHexString();
    return Bt(r, e / 8);
  }
  toUnsafeFloat() {
    return parseFloat(this.toString());
  }
  toFormat(e) {
    return Pt.fromString(this._value, e);
  }
  static fromValue(e, r, n) {
    return n == null && r != null && !Th(r) && (n = r, r = null), r == null && (r = 0), n == null && (n = "fixed"), Pt.fromString(Ri(e, r), sa.from(n));
  }
  static fromString(e, r) {
    r == null && (r = "fixed");
    const n = sa.from(r), a = Br(e, n.decimals);
    !n.signed && a.lt(Gf) && Vf("unsigned value cannot be negative", "overflow", "value", e);
    let i = null;
    n.signed ? i = a.toTwos(n.width).toHexString() : (i = a.toHexString(), i = Bt(i, n.width / 8));
    const s = Ri(a, n.decimals);
    return new Pt(La, i, s, n);
  }
  static fromBytes(e, r) {
    r == null && (r = "fixed");
    const n = sa.from(r);
    if (ce(e).length > n.width / 8)
      throw new Error("overflow");
    let a = de.from(e);
    n.signed && (a = a.fromTwos(n.width));
    const i = a.toTwos((n.signed ? 0 : 1) + n.width).toHexString(), s = Ri(a, n.decimals);
    return new Pt(La, i, s, n);
  }
  static from(e, r) {
    if (typeof e == "string")
      return Pt.fromString(e, r);
    if (Vn(e))
      return Pt.fromBytes(e, r);
    try {
      return Pt.fromValue(e, 0, r);
    } catch (n) {
      if (n.code !== Z.errors.INVALID_ARGUMENT)
        throw n;
    }
    return Gt.throwArgumentError("invalid FixedNumber value", "value", e);
  }
  static isFixedNumber(e) {
    return !!(e && e._isFixedNumber);
  }
}
const K0 = Pt.from(1), Nh = Pt.from("0.5"), Oh = "properties/5.7.0";
var Lh = globalThis && globalThis.__awaiter || function(t, e, r, n) {
  function a(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i);
    });
  }
  return new (r || (r = Promise))(function(i, s) {
    function c(y) {
      try {
        x(n.next(y));
      } catch (C) {
        s(C);
      }
    }
    function p(y) {
      try {
        x(n.throw(y));
      } catch (C) {
        s(C);
      }
    }
    function x(y) {
      y.done ? i(y.value) : a(y.value).then(c, p);
    }
    x((n = n.apply(t, e || [])).next());
  });
};
const Vi = new Z(Oh);
function ie(t, e, r) {
  Object.defineProperty(t, e, {
    enumerable: !0,
    value: r,
    writable: !1
  });
}
function ta(t, e) {
  for (let r = 0; r < 32; r++) {
    if (t[e])
      return t[e];
    if (!t.prototype || typeof t.prototype != "object")
      break;
    t = Object.getPrototypeOf(t.prototype).constructor;
  }
  return null;
}
function Pr(t) {
  return Lh(this, void 0, void 0, function* () {
    const e = Object.keys(t).map((n) => {
      const a = t[n];
      return Promise.resolve(a).then((i) => ({ key: n, value: i }));
    });
    return (yield Promise.all(e)).reduce((n, a) => (n[a.key] = a.value, n), {});
  });
}
function Kf(t, e) {
  (!t || typeof t != "object") && Vi.throwArgumentError("invalid object", "object", t), Object.keys(t).forEach((r) => {
    e[r] || Vi.throwArgumentError("invalid object key - " + r, "transaction:" + r, t);
  });
}
function nr(t) {
  const e = {};
  for (const r in t)
    e[r] = t[r];
  return e;
}
const jh = { bigint: !0, boolean: !0, function: !0, number: !0, string: !0 };
function qf(t) {
  if (t == null || jh[typeof t])
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
      if (!qf(n))
        return !1;
    }
    return !0;
  }
  return Vi.throwArgumentError(`Cannot deepCopy ${typeof t}`, "object", t);
}
function Wh(t) {
  if (qf(t))
    return t;
  if (Array.isArray(t))
    return Object.freeze(t.map((e) => Ln(e)));
  if (typeof t == "object") {
    const e = {};
    for (const r in t) {
      const n = t[r];
      n !== void 0 && ie(e, r, Ln(n));
    }
    return e;
  }
  return Vi.throwArgumentError(`Cannot deepCopy ${typeof t}`, "object", t);
}
function Ln(t) {
  return Wh(t);
}
class qn {
  constructor(e) {
    for (const r in e)
      this[r] = Ln(e[r]);
  }
}
const Hh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  defineReadOnly: ie,
  getStatic: ta,
  resolveProperties: Pr,
  checkProperties: Kf,
  shallowCopy: nr,
  deepCopy: Ln,
  Description: qn
}, Symbol.toStringTag, { value: "Module" })), fi = "abi/5.7.0", $e = new Z(fi), jn = {};
let q0 = { calldata: !0, memory: !0, storage: !0 }, zh = { calldata: !0, memory: !0 };
function wi(t, e) {
  if (t === "bytes" || t === "string") {
    if (q0[e])
      return !0;
  } else if (t === "address") {
    if (e === "payable")
      return !0;
  } else if ((t.indexOf("[") >= 0 || t === "tuple") && zh[e])
    return !0;
  return (q0[e] || e === "payable") && $e.throwArgumentError("invalid modifier", "name", e), !1;
}
function Gh(t, e) {
  let r = t;
  function n(c) {
    $e.throwArgumentError(`unexpected character at position ${c}`, "param", t);
  }
  t = t.replace(/\s/g, " ");
  function a(c) {
    let p = { type: "", name: "", parent: c, state: { allowType: !0 } };
    return e && (p.indexed = !1), p;
  }
  let i = { type: "", name: "", state: { allowType: !0 } }, s = i;
  for (let c = 0; c < t.length; c++) {
    let p = t[c];
    switch (p) {
      case "(":
        s.state.allowType && s.type === "" ? s.type = "tuple" : s.state.allowParams || n(c), s.state.allowType = !1, s.type = Yn(s.type), s.components = [a(s)], s = s.components[0];
        break;
      case ")":
        delete s.state, s.name === "indexed" && (e || n(c), s.indexed = !0, s.name = ""), wi(s.type, s.name) && (s.name = ""), s.type = Yn(s.type);
        let x = s;
        s = s.parent, s || n(c), delete x.parent, s.state.allowParams = !1, s.state.allowName = !0, s.state.allowArray = !0;
        break;
      case ",":
        delete s.state, s.name === "indexed" && (e || n(c), s.indexed = !0, s.name = ""), wi(s.type, s.name) && (s.name = ""), s.type = Yn(s.type);
        let y = a(s.parent);
        s.parent.components.push(y), delete s.parent, s = y;
        break;
      case " ":
        s.state.allowType && s.type !== "" && (s.type = Yn(s.type), delete s.state.allowType, s.state.allowName = !0, s.state.allowParams = !0), s.state.allowName && s.name !== "" && (s.name === "indexed" ? (e || n(c), s.indexed && n(c), s.indexed = !0, s.name = "") : wi(s.type, s.name) ? s.name = "" : s.state.allowName = !1);
        break;
      case "[":
        s.state.allowArray || n(c), s.type += p, s.state.allowArray = !1, s.state.allowName = !1, s.state.readArray = !0;
        break;
      case "]":
        s.state.readArray || n(c), s.type += p, s.state.readArray = !1, s.state.allowArray = !0, s.state.allowName = !0;
        break;
      default:
        s.state.allowType ? (s.type += p, s.state.allowParams = !0, s.state.allowArray = !0) : s.state.allowName ? (s.name += p, delete s.state.allowArray) : s.state.readArray ? s.type += p : n(c);
    }
  }
  return s.parent && $e.throwArgumentError("unexpected eof", "param", t), delete i.state, s.name === "indexed" ? (e || n(r.length - 7), s.indexed && n(r.length - 7), s.indexed = !0, s.name = "") : wi(s.type, s.name) && (s.name = ""), i.type = Yn(i.type), i;
}
function Mi(t, e) {
  for (let r in e)
    ie(t, r, e[r]);
}
const Ze = Object.freeze({
  sighash: "sighash",
  minimal: "minimal",
  full: "full",
  json: "json"
}), $h = new RegExp(/^(.*)\[([0-9]*)\]$/);
class Rt {
  constructor(e, r) {
    e !== jn && $e.throwError("use fromString", Z.errors.UNSUPPORTED_OPERATION, {
      operation: "new ParamType()"
    }), Mi(this, r);
    let n = this.type.match($h);
    n ? Mi(this, {
      arrayLength: parseInt(n[2] || "-1"),
      arrayChildren: Rt.fromObject({
        type: n[1],
        components: this.components
      }),
      baseType: "array"
    }) : Mi(this, {
      arrayLength: null,
      arrayChildren: null,
      baseType: this.components != null ? "tuple" : this.type
    }), this._isParamType = !0, Object.freeze(this);
  }
  format(e) {
    if (e || (e = Ze.sighash), Ze[e] || $e.throwArgumentError("invalid format type", "format", e), e === Ze.json) {
      let n = {
        type: this.baseType === "tuple" ? "tuple" : this.type,
        name: this.name || void 0
      };
      return typeof this.indexed == "boolean" && (n.indexed = this.indexed), this.components && (n.components = this.components.map((a) => JSON.parse(a.format(e)))), JSON.stringify(n);
    }
    let r = "";
    return this.baseType === "array" ? (r += this.arrayChildren.format(e), r += "[" + (this.arrayLength < 0 ? "" : String(this.arrayLength)) + "]") : this.baseType === "tuple" ? (e !== Ze.sighash && (r += this.type), r += "(" + this.components.map((n) => n.format(e)).join(e === Ze.full ? ", " : ",") + ")") : r += this.type, e !== Ze.sighash && (this.indexed === !0 && (r += " indexed"), e === Ze.full && this.name && (r += " " + this.name)), r;
  }
  static from(e, r) {
    return typeof e == "string" ? Rt.fromString(e, r) : Rt.fromObject(e);
  }
  static fromObject(e) {
    return Rt.isParamType(e) ? e : new Rt(jn, {
      name: e.name || null,
      type: Yn(e.type),
      indexed: e.indexed == null ? null : !!e.indexed,
      components: e.components ? e.components.map(Rt.fromObject) : null
    });
  }
  static fromString(e, r) {
    function n(a) {
      return Rt.fromObject({
        name: a.name,
        type: a.type,
        indexed: a.indexed,
        components: a.components
      });
    }
    return n(Gh(e, !!r));
  }
  static isParamType(e) {
    return !!(e != null && e._isParamType);
  }
}
function Za(t, e) {
  return Kh(t).map((r) => Rt.fromString(r, e));
}
class Nr {
  constructor(e, r) {
    e !== jn && $e.throwError("use a static from method", Z.errors.UNSUPPORTED_OPERATION, {
      operation: "new Fragment()"
    }), Mi(this, r), this._isFragment = !0, Object.freeze(this);
  }
  static from(e) {
    return Nr.isFragment(e) ? e : typeof e == "string" ? Nr.fromString(e) : Nr.fromObject(e);
  }
  static fromObject(e) {
    if (Nr.isFragment(e))
      return e;
    switch (e.type) {
      case "function":
        return vr.fromObject(e);
      case "event":
        return Tr.fromObject(e);
      case "constructor":
        return yr.fromObject(e);
      case "error":
        return Yr.fromObject(e);
      case "fallback":
      case "receive":
        return null;
    }
    return $e.throwArgumentError("invalid fragment object", "value", e);
  }
  static fromString(e) {
    return e = e.replace(/\s/g, " "), e = e.replace(/\(/g, " (").replace(/\)/g, ") ").replace(/\s+/g, " "), e = e.trim(), e.split(" ")[0] === "event" ? Tr.fromString(e.substring(5).trim()) : e.split(" ")[0] === "function" ? vr.fromString(e.substring(8).trim()) : e.split("(")[0].trim() === "constructor" ? yr.fromString(e.trim()) : e.split(" ")[0] === "error" ? Yr.fromString(e.substring(5).trim()) : $e.throwArgumentError("unsupported fragment", "value", e);
  }
  static isFragment(e) {
    return !!(e && e._isFragment);
  }
}
class Tr extends Nr {
  format(e) {
    if (e || (e = Ze.sighash), Ze[e] || $e.throwArgumentError("invalid format type", "format", e), e === Ze.json)
      return JSON.stringify({
        type: "event",
        anonymous: this.anonymous,
        name: this.name,
        inputs: this.inputs.map((n) => JSON.parse(n.format(e)))
      });
    let r = "";
    return e !== Ze.sighash && (r += "event "), r += this.name + "(" + this.inputs.map((n) => n.format(e)).join(e === Ze.full ? ", " : ",") + ") ", e !== Ze.sighash && this.anonymous && (r += "anonymous "), r.trim();
  }
  static from(e) {
    return typeof e == "string" ? Tr.fromString(e) : Tr.fromObject(e);
  }
  static fromObject(e) {
    if (Tr.isEventFragment(e))
      return e;
    e.type !== "event" && $e.throwArgumentError("invalid event object", "value", e);
    const r = {
      name: Ja(e.name),
      anonymous: e.anonymous,
      inputs: e.inputs ? e.inputs.map(Rt.fromObject) : [],
      type: "event"
    };
    return new Tr(jn, r);
  }
  static fromString(e) {
    let r = e.match(Ya);
    r || $e.throwArgumentError("invalid event string", "value", e);
    let n = !1;
    return r[3].split(" ").forEach((a) => {
      switch (a.trim()) {
        case "anonymous":
          n = !0;
          break;
        case "":
          break;
        default:
          $e.warn("unknown modifier: " + a);
      }
    }), Tr.fromObject({
      name: r[1].trim(),
      anonymous: n,
      inputs: Za(r[2], !0),
      type: "event"
    });
  }
  static isEventFragment(e) {
    return e && e._isFragment && e.type === "event";
  }
}
function Xf(t, e) {
  e.gas = null;
  let r = t.split("@");
  return r.length !== 1 ? (r.length > 2 && $e.throwArgumentError("invalid human-readable ABI signature", "value", t), r[1].match(/^[0-9]+$/) || $e.throwArgumentError("invalid human-readable ABI signature gas", "value", t), e.gas = de.from(r[1]), r[0]) : t;
}
function Zf(t, e) {
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
function Jf(t) {
  let e = {
    constant: !1,
    payable: !0,
    stateMutability: "payable"
  };
  return t.stateMutability != null ? (e.stateMutability = t.stateMutability, e.constant = e.stateMutability === "view" || e.stateMutability === "pure", t.constant != null && !!t.constant !== e.constant && $e.throwArgumentError("cannot have constant function with mutability " + e.stateMutability, "value", t), e.payable = e.stateMutability === "payable", t.payable != null && !!t.payable !== e.payable && $e.throwArgumentError("cannot have payable function with mutability " + e.stateMutability, "value", t)) : t.payable != null ? (e.payable = !!t.payable, t.constant == null && !e.payable && t.type !== "constructor" && $e.throwArgumentError("unable to determine stateMutability", "value", t), e.constant = !!t.constant, e.constant ? e.stateMutability = "view" : e.stateMutability = e.payable ? "payable" : "nonpayable", e.payable && e.constant && $e.throwArgumentError("cannot have constant payable function", "value", t)) : t.constant != null ? (e.constant = !!t.constant, e.payable = !e.constant, e.stateMutability = e.constant ? "view" : "payable") : t.type !== "constructor" && $e.throwArgumentError("unable to determine stateMutability", "value", t), e;
}
class yr extends Nr {
  format(e) {
    if (e || (e = Ze.sighash), Ze[e] || $e.throwArgumentError("invalid format type", "format", e), e === Ze.json)
      return JSON.stringify({
        type: "constructor",
        stateMutability: this.stateMutability !== "nonpayable" ? this.stateMutability : void 0,
        payable: this.payable,
        gas: this.gas ? this.gas.toNumber() : void 0,
        inputs: this.inputs.map((n) => JSON.parse(n.format(e)))
      });
    e === Ze.sighash && $e.throwError("cannot format a constructor for sighash", Z.errors.UNSUPPORTED_OPERATION, {
      operation: "format(sighash)"
    });
    let r = "constructor(" + this.inputs.map((n) => n.format(e)).join(e === Ze.full ? ", " : ",") + ") ";
    return this.stateMutability && this.stateMutability !== "nonpayable" && (r += this.stateMutability + " "), r.trim();
  }
  static from(e) {
    return typeof e == "string" ? yr.fromString(e) : yr.fromObject(e);
  }
  static fromObject(e) {
    if (yr.isConstructorFragment(e))
      return e;
    e.type !== "constructor" && $e.throwArgumentError("invalid constructor object", "value", e);
    let r = Jf(e);
    r.constant && $e.throwArgumentError("constructor cannot be constant", "value", e);
    const n = {
      name: null,
      type: e.type,
      inputs: e.inputs ? e.inputs.map(Rt.fromObject) : [],
      payable: r.payable,
      stateMutability: r.stateMutability,
      gas: e.gas ? de.from(e.gas) : null
    };
    return new yr(jn, n);
  }
  static fromString(e) {
    let r = { type: "constructor" };
    e = Xf(e, r);
    let n = e.match(Ya);
    return (!n || n[1].trim() !== "constructor") && $e.throwArgumentError("invalid constructor string", "value", e), r.inputs = Za(n[2].trim(), !1), Zf(n[3].trim(), r), yr.fromObject(r);
  }
  static isConstructorFragment(e) {
    return e && e._isFragment && e.type === "constructor";
  }
}
class vr extends yr {
  format(e) {
    if (e || (e = Ze.sighash), Ze[e] || $e.throwArgumentError("invalid format type", "format", e), e === Ze.json)
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
    return e !== Ze.sighash && (r += "function "), r += this.name + "(" + this.inputs.map((n) => n.format(e)).join(e === Ze.full ? ", " : ",") + ") ", e !== Ze.sighash && (this.stateMutability ? this.stateMutability !== "nonpayable" && (r += this.stateMutability + " ") : this.constant && (r += "view "), this.outputs && this.outputs.length && (r += "returns (" + this.outputs.map((n) => n.format(e)).join(", ") + ") "), this.gas != null && (r += "@" + this.gas.toString() + " ")), r.trim();
  }
  static from(e) {
    return typeof e == "string" ? vr.fromString(e) : vr.fromObject(e);
  }
  static fromObject(e) {
    if (vr.isFunctionFragment(e))
      return e;
    e.type !== "function" && $e.throwArgumentError("invalid function object", "value", e);
    let r = Jf(e);
    const n = {
      type: e.type,
      name: Ja(e.name),
      constant: r.constant,
      inputs: e.inputs ? e.inputs.map(Rt.fromObject) : [],
      outputs: e.outputs ? e.outputs.map(Rt.fromObject) : [],
      payable: r.payable,
      stateMutability: r.stateMutability,
      gas: e.gas ? de.from(e.gas) : null
    };
    return new vr(jn, n);
  }
  static fromString(e) {
    let r = { type: "function" };
    e = Xf(e, r);
    let n = e.split(" returns ");
    n.length > 2 && $e.throwArgumentError("invalid function string", "value", e);
    let a = n[0].match(Ya);
    if (a || $e.throwArgumentError("invalid function signature", "value", e), r.name = a[1].trim(), r.name && Ja(r.name), r.inputs = Za(a[2], !1), Zf(a[3].trim(), r), n.length > 1) {
      let i = n[1].match(Ya);
      (i[1].trim() != "" || i[3].trim() != "") && $e.throwArgumentError("unexpected tokens", "value", e), r.outputs = Za(i[2], !1);
    } else
      r.outputs = [];
    return vr.fromObject(r);
  }
  static isFunctionFragment(e) {
    return e && e._isFragment && e.type === "function";
  }
}
function X0(t) {
  const e = t.format();
  return (e === "Error(string)" || e === "Panic(uint256)") && $e.throwArgumentError(`cannot specify user defined ${e} error`, "fragment", t), t;
}
class Yr extends Nr {
  format(e) {
    if (e || (e = Ze.sighash), Ze[e] || $e.throwArgumentError("invalid format type", "format", e), e === Ze.json)
      return JSON.stringify({
        type: "error",
        name: this.name,
        inputs: this.inputs.map((n) => JSON.parse(n.format(e)))
      });
    let r = "";
    return e !== Ze.sighash && (r += "error "), r += this.name + "(" + this.inputs.map((n) => n.format(e)).join(e === Ze.full ? ", " : ",") + ") ", r.trim();
  }
  static from(e) {
    return typeof e == "string" ? Yr.fromString(e) : Yr.fromObject(e);
  }
  static fromObject(e) {
    if (Yr.isErrorFragment(e))
      return e;
    e.type !== "error" && $e.throwArgumentError("invalid error object", "value", e);
    const r = {
      type: e.type,
      name: Ja(e.name),
      inputs: e.inputs ? e.inputs.map(Rt.fromObject) : []
    };
    return X0(new Yr(jn, r));
  }
  static fromString(e) {
    let r = { type: "error" }, n = e.match(Ya);
    return n || $e.throwArgumentError("invalid error signature", "value", e), r.name = n[1].trim(), r.name && Ja(r.name), r.inputs = Za(n[2], !1), X0(Yr.fromObject(r));
  }
  static isErrorFragment(e) {
    return e && e._isFragment && e.type === "error";
  }
}
function Yn(t) {
  return t.match(/^uint($|[^1-9])/) ? t = "uint256" + t.substring(4) : t.match(/^int($|[^1-9])/) && (t = "int256" + t.substring(3)), t;
}
const Vh = new RegExp("^[a-zA-Z$_][a-zA-Z0-9$_]*$");
function Ja(t) {
  return (!t || !t.match(Vh)) && $e.throwArgumentError(`invalid identifier "${t}"`, "value", t), t;
}
const Ya = new RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$");
function Kh(t) {
  t = t.trim();
  let e = [], r = "", n = 0;
  for (let a = 0; a < t.length; a++) {
    let i = t[a];
    i === "," && n === 0 ? (e.push(r), r = "") : (r += i, i === "(" ? n++ : i === ")" && (n--, n === -1 && $e.throwArgumentError("unbalanced parenthesis", "value", t)));
  }
  return r && e.push(r), e;
}
const No = new Z(fi);
function Yf(t) {
  const e = [], r = function(n, a) {
    if (!!Array.isArray(a))
      for (let i in a) {
        const s = n.slice();
        s.push(i);
        try {
          r(s, a[i]);
        } catch (c) {
          e.push({ path: s, error: c });
        }
      }
  };
  return r([], t), e;
}
class an {
  constructor(e, r, n, a) {
    this.name = e, this.type = r, this.localName = n, this.dynamic = a;
  }
  _throwError(e, r) {
    No.throwArgumentError(e, this.localName, r);
  }
}
class so {
  constructor(e) {
    ie(this, "wordSize", e || 32), this._data = [], this._dataLength = 0, this._padding = new Uint8Array(e);
  }
  get data() {
    return pn(this._data);
  }
  get length() {
    return this._dataLength;
  }
  _writeData(e) {
    return this._data.push(e), this._dataLength += e.length, e.length;
  }
  appendWriter(e) {
    return this._writeData(Dt(e._data));
  }
  writeBytes(e) {
    let r = ce(e);
    const n = r.length % this.wordSize;
    return n && (r = Dt([r, this._padding.slice(n)])), this._writeData(r);
  }
  _getValue(e) {
    let r = ce(de.from(e));
    return r.length > this.wordSize && No.throwError("value out-of-bounds", Z.errors.BUFFER_OVERRUN, {
      length: this.wordSize,
      offset: r.length
    }), r.length % this.wordSize && (r = Dt([this._padding.slice(r.length % this.wordSize), r])), r;
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
class Ki {
  constructor(e, r, n, a) {
    ie(this, "_data", ce(e)), ie(this, "wordSize", r || 32), ie(this, "_coerceFunc", n), ie(this, "allowLoose", a), this._offset = 0;
  }
  get data() {
    return fe(this._data);
  }
  get consumed() {
    return this._offset;
  }
  static coerce(e, r) {
    let n = e.match("^u?int([0-9]+)$");
    return n && parseInt(n[1]) <= 48 && (r = r.toNumber()), r;
  }
  coerce(e, r) {
    return this._coerceFunc ? this._coerceFunc(e, r) : Ki.coerce(e, r);
  }
  _peekBytes(e, r, n) {
    let a = Math.ceil(r / this.wordSize) * this.wordSize;
    return this._offset + a > this._data.length && (this.allowLoose && n && this._offset + r <= this._data.length ? a = r : No.throwError("data out-of-bounds", Z.errors.BUFFER_OVERRUN, {
      length: this._data.length,
      offset: this._offset + a
    })), this._data.slice(this._offset, this._offset + a);
  }
  subReader(e) {
    return new Ki(this._data.slice(this._offset + e), this.wordSize, this._coerceFunc, this.allowLoose);
  }
  readBytes(e, r) {
    let n = this._peekBytes(0, e, !!r);
    return this._offset += n.length, n.slice(0, e);
  }
  readValue() {
    return de.from(this.readBytes(this.wordSize));
  }
}
var Qf = { exports: {} };
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
    var i = !n && typeof self == "object", s = !a.JS_SHA3_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
    s ? a = tr : i && (a = self);
    var c = !a.JS_SHA3_NO_COMMON_JS && !0 && t.exports, p = !a.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", x = "0123456789abcdef".split(""), y = [31, 7936, 2031616, 520093696], C = [4, 1024, 262144, 67108864], B = [1, 256, 65536, 16777216], F = [6, 1536, 393216, 100663296], R = [0, 8, 16, 24], M = [
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
    ], S = [224, 256, 384, 512], U = [128, 256], N = ["hex", "buffer", "arrayBuffer", "array", "digest"], z = {
      128: 168,
      256: 136
    };
    (a.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(b) {
      return Object.prototype.toString.call(b) === "[object Array]";
    }), p && (a.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(b) {
      return typeof b == "object" && b.buffer && b.buffer.constructor === ArrayBuffer;
    });
    for (var O = function(b, I, L) {
      return function(P) {
        return new f(b, I, b).update(P)[L]();
      };
    }, T = function(b, I, L) {
      return function(P, H) {
        return new f(b, I, H).update(P)[L]();
      };
    }, G = function(b, I, L) {
      return function(P, H, $, V) {
        return o["cshake" + b].update(P, H, $, V)[L]();
      };
    }, J = function(b, I, L) {
      return function(P, H, $, V) {
        return o["kmac" + b].update(P, H, $, V)[L]();
      };
    }, Y = function(b, I, L, P) {
      for (var H = 0; H < N.length; ++H) {
        var $ = N[H];
        b[$] = I(L, P, $);
      }
      return b;
    }, X = function(b, I) {
      var L = O(b, I, "hex");
      return L.create = function() {
        return new f(b, I, b);
      }, L.update = function(P) {
        return L.create().update(P);
      }, Y(L, O, b, I);
    }, se = function(b, I) {
      var L = T(b, I, "hex");
      return L.create = function(P) {
        return new f(b, I, P);
      }, L.update = function(P, H) {
        return L.create(H).update(P);
      }, Y(L, T, b, I);
    }, D = function(b, I) {
      var L = z[b], P = G(b, I, "hex");
      return P.create = function(H, $, V) {
        return !$ && !V ? o["shake" + b].create(H) : new f(b, I, H).bytepad([$, V], L);
      }, P.update = function(H, $, V, j) {
        return P.create($, V, j).update(H);
      }, Y(P, G, b, I);
    }, u = function(b, I) {
      var L = z[b], P = J(b, I, "hex");
      return P.create = function(H, $, V) {
        return new E(b, I, $).bytepad(["KMAC", V], L).bytepad([H], L);
      }, P.update = function(H, $, V, j) {
        return P.create(H, V, j).update($);
      }, Y(P, J, b, I);
    }, l = [
      { name: "keccak", padding: B, bits: S, createMethod: X },
      { name: "sha3", padding: F, bits: S, createMethod: X },
      { name: "shake", padding: y, bits: U, createMethod: se },
      { name: "cshake", padding: C, bits: U, createMethod: D },
      { name: "kmac", padding: C, bits: U, createMethod: u }
    ], o = {}, d = [], g = 0; g < l.length; ++g)
      for (var v = l[g], A = v.bits, w = 0; w < A.length; ++w) {
        var h = v.name + "_" + A[w];
        if (d.push(h), o[h] = v.createMethod(A[w], v.padding), v.name !== "sha3") {
          var m = v.name + A[w];
          d.push(m), o[m] = o[h];
        }
      }
    function f(b, I, L) {
      this.blocks = [], this.s = [], this.padding = I, this.outputBits = L, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (b << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = L >> 5, this.extraBytes = (L & 31) >> 3;
      for (var P = 0; P < 50; ++P)
        this.s[P] = 0;
    }
    f.prototype.update = function(b) {
      if (this.finalized)
        throw new Error(r);
      var I, L = typeof b;
      if (L !== "string") {
        if (L === "object") {
          if (b === null)
            throw new Error(e);
          if (p && b.constructor === ArrayBuffer)
            b = new Uint8Array(b);
          else if (!Array.isArray(b) && (!p || !ArrayBuffer.isView(b)))
            throw new Error(e);
        } else
          throw new Error(e);
        I = !0;
      }
      for (var P = this.blocks, H = this.byteCount, $ = b.length, V = this.blockCount, j = 0, le = this.s, te, q; j < $; ) {
        if (this.reset)
          for (this.reset = !1, P[0] = this.block, te = 1; te < V + 1; ++te)
            P[te] = 0;
        if (I)
          for (te = this.start; j < $ && te < H; ++j)
            P[te >> 2] |= b[j] << R[te++ & 3];
        else
          for (te = this.start; j < $ && te < H; ++j)
            q = b.charCodeAt(j), q < 128 ? P[te >> 2] |= q << R[te++ & 3] : q < 2048 ? (P[te >> 2] |= (192 | q >> 6) << R[te++ & 3], P[te >> 2] |= (128 | q & 63) << R[te++ & 3]) : q < 55296 || q >= 57344 ? (P[te >> 2] |= (224 | q >> 12) << R[te++ & 3], P[te >> 2] |= (128 | q >> 6 & 63) << R[te++ & 3], P[te >> 2] |= (128 | q & 63) << R[te++ & 3]) : (q = 65536 + ((q & 1023) << 10 | b.charCodeAt(++j) & 1023), P[te >> 2] |= (240 | q >> 18) << R[te++ & 3], P[te >> 2] |= (128 | q >> 12 & 63) << R[te++ & 3], P[te >> 2] |= (128 | q >> 6 & 63) << R[te++ & 3], P[te >> 2] |= (128 | q & 63) << R[te++ & 3]);
        if (this.lastByteIndex = te, te >= H) {
          for (this.start = te - H, this.block = P[V], te = 0; te < V; ++te)
            le[te] ^= P[te];
          k(le), this.reset = !0;
        } else
          this.start = te;
      }
      return this;
    }, f.prototype.encode = function(b, I) {
      var L = b & 255, P = 1, H = [L];
      for (b = b >> 8, L = b & 255; L > 0; )
        H.unshift(L), b = b >> 8, L = b & 255, ++P;
      return I ? H.push(P) : H.unshift(P), this.update(H), H.length;
    }, f.prototype.encodeString = function(b) {
      var I, L = typeof b;
      if (L !== "string") {
        if (L === "object") {
          if (b === null)
            throw new Error(e);
          if (p && b.constructor === ArrayBuffer)
            b = new Uint8Array(b);
          else if (!Array.isArray(b) && (!p || !ArrayBuffer.isView(b)))
            throw new Error(e);
        } else
          throw new Error(e);
        I = !0;
      }
      var P = 0, H = b.length;
      if (I)
        P = H;
      else
        for (var $ = 0; $ < b.length; ++$) {
          var V = b.charCodeAt($);
          V < 128 ? P += 1 : V < 2048 ? P += 2 : V < 55296 || V >= 57344 ? P += 3 : (V = 65536 + ((V & 1023) << 10 | b.charCodeAt(++$) & 1023), P += 4);
        }
      return P += this.encode(P * 8), this.update(b), P;
    }, f.prototype.bytepad = function(b, I) {
      for (var L = this.encode(I), P = 0; P < b.length; ++P)
        L += this.encodeString(b[P]);
      var H = I - L % I, $ = [];
      return $.length = H, this.update($), this;
    }, f.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = !0;
        var b = this.blocks, I = this.lastByteIndex, L = this.blockCount, P = this.s;
        if (b[I >> 2] |= this.padding[I & 3], this.lastByteIndex === this.byteCount)
          for (b[0] = b[L], I = 1; I < L + 1; ++I)
            b[I] = 0;
        for (b[L - 1] |= 2147483648, I = 0; I < L; ++I)
          P[I] ^= b[I];
        k(P);
      }
    }, f.prototype.toString = f.prototype.hex = function() {
      this.finalize();
      for (var b = this.blockCount, I = this.s, L = this.outputBlocks, P = this.extraBytes, H = 0, $ = 0, V = "", j; $ < L; ) {
        for (H = 0; H < b && $ < L; ++H, ++$)
          j = I[H], V += x[j >> 4 & 15] + x[j & 15] + x[j >> 12 & 15] + x[j >> 8 & 15] + x[j >> 20 & 15] + x[j >> 16 & 15] + x[j >> 28 & 15] + x[j >> 24 & 15];
        $ % b === 0 && (k(I), H = 0);
      }
      return P && (j = I[H], V += x[j >> 4 & 15] + x[j & 15], P > 1 && (V += x[j >> 12 & 15] + x[j >> 8 & 15]), P > 2 && (V += x[j >> 20 & 15] + x[j >> 16 & 15])), V;
    }, f.prototype.arrayBuffer = function() {
      this.finalize();
      var b = this.blockCount, I = this.s, L = this.outputBlocks, P = this.extraBytes, H = 0, $ = 0, V = this.outputBits >> 3, j;
      P ? j = new ArrayBuffer(L + 1 << 2) : j = new ArrayBuffer(V);
      for (var le = new Uint32Array(j); $ < L; ) {
        for (H = 0; H < b && $ < L; ++H, ++$)
          le[$] = I[H];
        $ % b === 0 && k(I);
      }
      return P && (le[H] = I[H], j = j.slice(0, V)), j;
    }, f.prototype.buffer = f.prototype.arrayBuffer, f.prototype.digest = f.prototype.array = function() {
      this.finalize();
      for (var b = this.blockCount, I = this.s, L = this.outputBlocks, P = this.extraBytes, H = 0, $ = 0, V = [], j, le; $ < L; ) {
        for (H = 0; H < b && $ < L; ++H, ++$)
          j = $ << 2, le = I[H], V[j] = le & 255, V[j + 1] = le >> 8 & 255, V[j + 2] = le >> 16 & 255, V[j + 3] = le >> 24 & 255;
        $ % b === 0 && k(I);
      }
      return P && (j = $ << 2, le = I[H], V[j] = le & 255, P > 1 && (V[j + 1] = le >> 8 & 255), P > 2 && (V[j + 2] = le >> 16 & 255)), V;
    };
    function E(b, I, L) {
      f.call(this, b, I, L);
    }
    E.prototype = new f(), E.prototype.finalize = function() {
      return this.encode(this.outputBits, !0), f.prototype.finalize.call(this);
    };
    var k = function(b) {
      var I, L, P, H, $, V, j, le, te, q, xe, ue, he, Pe, ye, be, Ue, _e, re, ve, Le, pe, Te, Ve, Ee, ze, Ae, Ce, Je, at, Be, it, st, Ie, Qe, Ge, ke, Ye, et, Fe, tt, ot, Se, rt, ct, Re, nt, ft, Me, dt, lt, _, K, ne, oe, ge, we, me, De, mt, Ke, Xe, xt;
      for (P = 0; P < 48; P += 2)
        H = b[0] ^ b[10] ^ b[20] ^ b[30] ^ b[40], $ = b[1] ^ b[11] ^ b[21] ^ b[31] ^ b[41], V = b[2] ^ b[12] ^ b[22] ^ b[32] ^ b[42], j = b[3] ^ b[13] ^ b[23] ^ b[33] ^ b[43], le = b[4] ^ b[14] ^ b[24] ^ b[34] ^ b[44], te = b[5] ^ b[15] ^ b[25] ^ b[35] ^ b[45], q = b[6] ^ b[16] ^ b[26] ^ b[36] ^ b[46], xe = b[7] ^ b[17] ^ b[27] ^ b[37] ^ b[47], ue = b[8] ^ b[18] ^ b[28] ^ b[38] ^ b[48], he = b[9] ^ b[19] ^ b[29] ^ b[39] ^ b[49], I = ue ^ (V << 1 | j >>> 31), L = he ^ (j << 1 | V >>> 31), b[0] ^= I, b[1] ^= L, b[10] ^= I, b[11] ^= L, b[20] ^= I, b[21] ^= L, b[30] ^= I, b[31] ^= L, b[40] ^= I, b[41] ^= L, I = H ^ (le << 1 | te >>> 31), L = $ ^ (te << 1 | le >>> 31), b[2] ^= I, b[3] ^= L, b[12] ^= I, b[13] ^= L, b[22] ^= I, b[23] ^= L, b[32] ^= I, b[33] ^= L, b[42] ^= I, b[43] ^= L, I = V ^ (q << 1 | xe >>> 31), L = j ^ (xe << 1 | q >>> 31), b[4] ^= I, b[5] ^= L, b[14] ^= I, b[15] ^= L, b[24] ^= I, b[25] ^= L, b[34] ^= I, b[35] ^= L, b[44] ^= I, b[45] ^= L, I = le ^ (ue << 1 | he >>> 31), L = te ^ (he << 1 | ue >>> 31), b[6] ^= I, b[7] ^= L, b[16] ^= I, b[17] ^= L, b[26] ^= I, b[27] ^= L, b[36] ^= I, b[37] ^= L, b[46] ^= I, b[47] ^= L, I = q ^ (H << 1 | $ >>> 31), L = xe ^ ($ << 1 | H >>> 31), b[8] ^= I, b[9] ^= L, b[18] ^= I, b[19] ^= L, b[28] ^= I, b[29] ^= L, b[38] ^= I, b[39] ^= L, b[48] ^= I, b[49] ^= L, Pe = b[0], ye = b[1], Re = b[11] << 4 | b[10] >>> 28, nt = b[10] << 4 | b[11] >>> 28, Ce = b[20] << 3 | b[21] >>> 29, Je = b[21] << 3 | b[20] >>> 29, mt = b[31] << 9 | b[30] >>> 23, Ke = b[30] << 9 | b[31] >>> 23, ot = b[40] << 18 | b[41] >>> 14, Se = b[41] << 18 | b[40] >>> 14, Ie = b[2] << 1 | b[3] >>> 31, Qe = b[3] << 1 | b[2] >>> 31, be = b[13] << 12 | b[12] >>> 20, Ue = b[12] << 12 | b[13] >>> 20, ft = b[22] << 10 | b[23] >>> 22, Me = b[23] << 10 | b[22] >>> 22, at = b[33] << 13 | b[32] >>> 19, Be = b[32] << 13 | b[33] >>> 19, Xe = b[42] << 2 | b[43] >>> 30, xt = b[43] << 2 | b[42] >>> 30, ne = b[5] << 30 | b[4] >>> 2, oe = b[4] << 30 | b[5] >>> 2, Ge = b[14] << 6 | b[15] >>> 26, ke = b[15] << 6 | b[14] >>> 26, _e = b[25] << 11 | b[24] >>> 21, re = b[24] << 11 | b[25] >>> 21, dt = b[34] << 15 | b[35] >>> 17, lt = b[35] << 15 | b[34] >>> 17, it = b[45] << 29 | b[44] >>> 3, st = b[44] << 29 | b[45] >>> 3, Ve = b[6] << 28 | b[7] >>> 4, Ee = b[7] << 28 | b[6] >>> 4, ge = b[17] << 23 | b[16] >>> 9, we = b[16] << 23 | b[17] >>> 9, Ye = b[26] << 25 | b[27] >>> 7, et = b[27] << 25 | b[26] >>> 7, ve = b[36] << 21 | b[37] >>> 11, Le = b[37] << 21 | b[36] >>> 11, _ = b[47] << 24 | b[46] >>> 8, K = b[46] << 24 | b[47] >>> 8, rt = b[8] << 27 | b[9] >>> 5, ct = b[9] << 27 | b[8] >>> 5, ze = b[18] << 20 | b[19] >>> 12, Ae = b[19] << 20 | b[18] >>> 12, me = b[29] << 7 | b[28] >>> 25, De = b[28] << 7 | b[29] >>> 25, Fe = b[38] << 8 | b[39] >>> 24, tt = b[39] << 8 | b[38] >>> 24, pe = b[48] << 14 | b[49] >>> 18, Te = b[49] << 14 | b[48] >>> 18, b[0] = Pe ^ ~be & _e, b[1] = ye ^ ~Ue & re, b[10] = Ve ^ ~ze & Ce, b[11] = Ee ^ ~Ae & Je, b[20] = Ie ^ ~Ge & Ye, b[21] = Qe ^ ~ke & et, b[30] = rt ^ ~Re & ft, b[31] = ct ^ ~nt & Me, b[40] = ne ^ ~ge & me, b[41] = oe ^ ~we & De, b[2] = be ^ ~_e & ve, b[3] = Ue ^ ~re & Le, b[12] = ze ^ ~Ce & at, b[13] = Ae ^ ~Je & Be, b[22] = Ge ^ ~Ye & Fe, b[23] = ke ^ ~et & tt, b[32] = Re ^ ~ft & dt, b[33] = nt ^ ~Me & lt, b[42] = ge ^ ~me & mt, b[43] = we ^ ~De & Ke, b[4] = _e ^ ~ve & pe, b[5] = re ^ ~Le & Te, b[14] = Ce ^ ~at & it, b[15] = Je ^ ~Be & st, b[24] = Ye ^ ~Fe & ot, b[25] = et ^ ~tt & Se, b[34] = ft ^ ~dt & _, b[35] = Me ^ ~lt & K, b[44] = me ^ ~mt & Xe, b[45] = De ^ ~Ke & xt, b[6] = ve ^ ~pe & Pe, b[7] = Le ^ ~Te & ye, b[16] = at ^ ~it & Ve, b[17] = Be ^ ~st & Ee, b[26] = Fe ^ ~ot & Ie, b[27] = tt ^ ~Se & Qe, b[36] = dt ^ ~_ & rt, b[37] = lt ^ ~K & ct, b[46] = mt ^ ~Xe & ne, b[47] = Ke ^ ~xt & oe, b[8] = pe ^ ~Pe & be, b[9] = Te ^ ~ye & Ue, b[18] = it ^ ~Ve & ze, b[19] = st ^ ~Ee & Ae, b[28] = ot ^ ~Ie & Ge, b[29] = Se ^ ~Qe & ke, b[38] = _ ^ ~rt & Re, b[39] = K ^ ~ct & nt, b[48] = Xe ^ ~ne & ge, b[49] = xt ^ ~oe & we, b[0] ^= M[P], b[1] ^= M[P + 1];
    };
    if (c)
      t.exports = o;
    else
      for (g = 0; g < d.length; ++g)
        a[d[g]] = o[d[g]];
  })();
})(Qf);
const qh = Qf.exports;
function bt(t) {
  return "0x" + qh.keccak_256(ce(t));
}
const Xh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  keccak256: bt
}, Symbol.toStringTag, { value: "Module" })), Zh = "rlp/5.7.0", Mr = new Z(Zh);
function Z0(t) {
  const e = [];
  for (; t; )
    e.unshift(t & 255), t >>= 8;
  return e;
}
function J0(t, e, r) {
  let n = 0;
  for (let a = 0; a < r; a++)
    n = n * 256 + t[e + a];
  return n;
}
function ed(t) {
  if (Array.isArray(t)) {
    let n = [];
    if (t.forEach(function(i) {
      n = n.concat(ed(i));
    }), n.length <= 55)
      return n.unshift(192 + n.length), n;
    const a = Z0(n.length);
    return a.unshift(247 + a.length), a.concat(n);
  }
  ci(t) || Mr.throwArgumentError("RLP object must be BytesLike", "object", t);
  const e = Array.prototype.slice.call(ce(t));
  if (e.length === 1 && e[0] <= 127)
    return e;
  if (e.length <= 55)
    return e.unshift(128 + e.length), e;
  const r = Z0(e.length);
  return r.unshift(183 + r.length), r.concat(e);
}
function Wn(t) {
  return fe(ed(t));
}
function Y0(t, e, r, n) {
  const a = [];
  for (; r < e + 1 + n; ) {
    const i = td(t, r);
    a.push(i.result), r += i.consumed, r > e + 1 + n && Mr.throwError("child data too short", Z.errors.BUFFER_OVERRUN, {});
  }
  return { consumed: 1 + n, result: a };
}
function td(t, e) {
  if (t.length === 0 && Mr.throwError("data too short", Z.errors.BUFFER_OVERRUN, {}), t[e] >= 248) {
    const r = t[e] - 247;
    e + 1 + r > t.length && Mr.throwError("data short segment too short", Z.errors.BUFFER_OVERRUN, {});
    const n = J0(t, e + 1, r);
    return e + 1 + r + n > t.length && Mr.throwError("data long segment too short", Z.errors.BUFFER_OVERRUN, {}), Y0(t, e, e + 1 + r, r + n);
  } else if (t[e] >= 192) {
    const r = t[e] - 192;
    return e + 1 + r > t.length && Mr.throwError("data array too short", Z.errors.BUFFER_OVERRUN, {}), Y0(t, e, e + 1, r);
  } else if (t[e] >= 184) {
    const r = t[e] - 183;
    e + 1 + r > t.length && Mr.throwError("data array too short", Z.errors.BUFFER_OVERRUN, {});
    const n = J0(t, e + 1, r);
    e + 1 + r + n > t.length && Mr.throwError("data array too short", Z.errors.BUFFER_OVERRUN, {});
    const a = fe(t.slice(e + 1 + r, e + 1 + r + n));
    return { consumed: 1 + r + n, result: a };
  } else if (t[e] >= 128) {
    const r = t[e] - 128;
    e + 1 + r > t.length && Mr.throwError("data too short", Z.errors.BUFFER_OVERRUN, {});
    const n = fe(t.slice(e + 1, e + 1 + r));
    return { consumed: 1 + r, result: n };
  }
  return { consumed: 1, result: fe(t[e]) };
}
function ns(t) {
  const e = ce(t), r = td(e, 0);
  return r.consumed !== e.length && Mr.throwArgumentError("invalid rlp data", "data", t), r.result;
}
const Jh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  encode: Wn,
  decode: ns
}, Symbol.toStringTag, { value: "Module" })), Yh = "address/5.7.0", hn = new Z(Yh);
function Q0(t) {
  At(t, 20) || hn.throwArgumentError("invalid address", "address", t), t = t.toLowerCase();
  const e = t.substring(2).split(""), r = new Uint8Array(40);
  for (let a = 0; a < 40; a++)
    r[a] = e[a].charCodeAt(0);
  const n = ce(bt(r));
  for (let a = 0; a < 40; a += 2)
    n[a >> 1] >> 4 >= 8 && (e[a] = e[a].toUpperCase()), (n[a >> 1] & 15) >= 8 && (e[a + 1] = e[a + 1].toUpperCase());
  return "0x" + e.join("");
}
const Qh = 9007199254740991;
function eu(t) {
  return Math.log10 ? Math.log10(t) : Math.log(t) / Math.LN10;
}
const Oo = {};
for (let t = 0; t < 10; t++)
  Oo[String(t)] = String(t);
for (let t = 0; t < 26; t++)
  Oo[String.fromCharCode(65 + t)] = String(10 + t);
const ec = Math.floor(eu(Qh));
function rd(t) {
  t = t.toUpperCase(), t = t.substring(4) + t.substring(0, 2) + "00";
  let e = t.split("").map((n) => Oo[n]).join("");
  for (; e.length >= ec; ) {
    let n = e.substring(0, ec);
    e = parseInt(n, 10) % 97 + e.substring(n.length);
  }
  let r = String(98 - parseInt(e, 10) % 97);
  for (; r.length < 2; )
    r = "0" + r;
  return r;
}
function gt(t) {
  let e = null;
  if (typeof t != "string" && hn.throwArgumentError("invalid address", "address", t), t.match(/^(0x)?[0-9a-fA-F]{40}$/))
    t.substring(0, 2) !== "0x" && (t = "0x" + t), e = Q0(t), t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && e !== t && hn.throwArgumentError("bad address checksum", "address", t);
  else if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    for (t.substring(2, 4) !== rd(t) && hn.throwArgumentError("bad icap checksum", "address", t), e = Uh(t.substring(4)); e.length < 40; )
      e = "0" + e;
    e = Q0("0x" + e);
  } else
    hn.throwArgumentError("invalid address", "address", t);
  return e;
}
function tu(t) {
  try {
    return gt(t), !0;
  } catch {
  }
  return !1;
}
function ru(t) {
  let e = Ph(gt(t).substring(2)).toUpperCase();
  for (; e.length < 30; )
    e = "0" + e;
  return "XE" + rd("XE00" + e) + e;
}
function nd(t) {
  let e = null;
  try {
    e = gt(t.from);
  } catch {
    hn.throwArgumentError("missing from address", "transaction", t);
  }
  const r = Lr(ce(de.from(t.nonce).toHexString()));
  return gt(tn(bt(Wn([e, r])), 12));
}
function nu(t, e, r) {
  return Ka(e) !== 32 && hn.throwArgumentError("salt must be 32 bytes", "salt", e), Ka(r) !== 32 && hn.throwArgumentError("initCodeHash must be 32 bytes", "initCodeHash", r), gt(tn(bt(Dt(["0xff", gt(t), e, r])), 12));
}
const au = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getAddress: gt,
  isAddress: tu,
  getIcapAddress: ru,
  getContractAddress: nd,
  getCreate2Address: nu
}, Symbol.toStringTag, { value: "Module" }));
class iu extends an {
  constructor(e) {
    super("address", "address", e, !1);
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000";
  }
  encode(e, r) {
    try {
      r = gt(r);
    } catch (n) {
      this._throwError(n.message, r);
    }
    return e.writeValue(r);
  }
  decode(e) {
    return gt(Bt(e.readValue().toHexString(), 20));
  }
}
class su extends an {
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
const ra = new Z(fi);
function ad(t, e, r) {
  let n = null;
  if (Array.isArray(r))
    n = r;
  else if (r && typeof r == "object") {
    let p = {};
    n = e.map((x) => {
      const y = x.localName;
      return y || ra.throwError("cannot encode object for signature with missing names", Z.errors.INVALID_ARGUMENT, {
        argument: "values",
        coder: x,
        value: r
      }), p[y] && ra.throwError("cannot encode object for signature with duplicate names", Z.errors.INVALID_ARGUMENT, {
        argument: "values",
        coder: x,
        value: r
      }), p[y] = !0, r[y];
    });
  } else
    ra.throwArgumentError("invalid tuple value", "tuple", r);
  e.length !== n.length && ra.throwArgumentError("types/value length mismatch", "tuple", r);
  let a = new so(t.wordSize), i = new so(t.wordSize), s = [];
  e.forEach((p, x) => {
    let y = n[x];
    if (p.dynamic) {
      let C = i.length;
      p.encode(i, y);
      let B = a.writeUpdatableValue();
      s.push((F) => {
        B(F + C);
      });
    } else
      p.encode(a, y);
  }), s.forEach((p) => {
    p(a.length);
  });
  let c = t.appendWriter(a);
  return c += t.appendWriter(i), c;
}
function id(t, e) {
  let r = [], n = t.subReader(0);
  e.forEach((i) => {
    let s = null;
    if (i.dynamic) {
      let c = t.readValue(), p = n.subReader(c.toNumber());
      try {
        s = i.decode(p);
      } catch (x) {
        if (x.code === Z.errors.BUFFER_OVERRUN)
          throw x;
        s = x, s.baseType = i.name, s.name = i.localName, s.type = i.type;
      }
    } else
      try {
        s = i.decode(t);
      } catch (c) {
        if (c.code === Z.errors.BUFFER_OVERRUN)
          throw c;
        s = c, s.baseType = i.name, s.name = i.localName, s.type = i.type;
      }
    s != null && r.push(s);
  });
  const a = e.reduce((i, s) => {
    const c = s.localName;
    return c && (i[c] || (i[c] = 0), i[c]++), i;
  }, {});
  e.forEach((i, s) => {
    let c = i.localName;
    if (!c || a[c] !== 1 || (c === "length" && (c = "_length"), r[c] != null))
      return;
    const p = r[s];
    p instanceof Error ? Object.defineProperty(r, c, {
      enumerable: !0,
      get: () => {
        throw p;
      }
    }) : r[c] = p;
  });
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    s instanceof Error && Object.defineProperty(r, i, {
      enumerable: !0,
      get: () => {
        throw s;
      }
    });
  }
  return Object.freeze(r);
}
class ou extends an {
  constructor(e, r, n) {
    const a = e.type + "[" + (r >= 0 ? r : "") + "]", i = r === -1 || e.dynamic;
    super("array", a, n, i), this.coder = e, this.length = r;
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
    n === -1 && (n = r.length, e.writeValue(r.length)), ra.checkArgumentCount(r.length, n, "coder array" + (this.localName ? " " + this.localName : ""));
    let a = [];
    for (let i = 0; i < r.length; i++)
      a.push(this.coder);
    return ad(e, a, r);
  }
  decode(e) {
    let r = this.length;
    r === -1 && (r = e.readValue().toNumber(), r * 32 > e._data.length && ra.throwError("insufficient data length", Z.errors.BUFFER_OVERRUN, {
      length: e._data.length,
      count: r
    }));
    let n = [];
    for (let a = 0; a < r; a++)
      n.push(new su(this.coder));
    return e.coerce(this.name, id(e, n));
  }
}
class cu extends an {
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
class sd extends an {
  constructor(e, r) {
    super(e, e, r, !0);
  }
  defaultValue() {
    return "0x";
  }
  encode(e, r) {
    r = ce(r);
    let n = e.writeValue(r.length);
    return n += e.writeBytes(r), n;
  }
  decode(e) {
    return e.readBytes(e.readValue().toNumber(), !0);
  }
}
class fu extends sd {
  constructor(e) {
    super("bytes", e);
  }
  decode(e) {
    return e.coerce(this.name, fe(super.decode(e)));
  }
}
class du extends an {
  constructor(e, r) {
    let n = "bytes" + String(e);
    super(n, n, r, !1), this.size = e;
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + this.size * 2);
  }
  encode(e, r) {
    let n = ce(r);
    return n.length !== this.size && this._throwError("incorrect data length", r), e.writeBytes(n);
  }
  decode(e) {
    return e.coerce(this.name, fe(e.readBytes(this.size)));
  }
}
class lu extends an {
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
const hu = /* @__PURE__ */ de.from(-1), od = /* @__PURE__ */ de.from(0), uu = /* @__PURE__ */ de.from(1), mu = /* @__PURE__ */ de.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), pu = "0x0000000000000000000000000000000000000000000000000000000000000000";
class bu extends an {
  constructor(e, r, n) {
    const a = (r ? "int" : "uint") + e * 8;
    super(a, a, n, !1), this.size = e, this.signed = r;
  }
  defaultValue() {
    return 0;
  }
  encode(e, r) {
    let n = de.from(r), a = mu.mask(e.wordSize * 8);
    if (this.signed) {
      let i = a.mask(this.size * 8 - 1);
      (n.gt(i) || n.lt(i.add(uu).mul(hu))) && this._throwError("value out-of-bounds", r);
    } else
      (n.lt(od) || n.gt(a.mask(this.size * 8))) && this._throwError("value out-of-bounds", r);
    return n = n.toTwos(this.size * 8).mask(this.size * 8), this.signed && (n = n.fromTwos(this.size * 8).toTwos(8 * e.wordSize)), e.writeValue(n);
  }
  decode(e) {
    let r = e.readValue().mask(this.size * 8);
    return this.signed && (r = r.fromTwos(this.size * 8)), e.coerce(this.name, r);
  }
}
const gu = "strings/5.7.0", cd = new Z(gu);
var Gr;
(function(t) {
  t.current = "", t.NFC = "NFC", t.NFD = "NFD", t.NFKC = "NFKC", t.NFKD = "NFKD";
})(Gr || (Gr = {}));
var Xt;
(function(t) {
  t.UNEXPECTED_CONTINUE = "unexpected continuation byte", t.BAD_PREFIX = "bad codepoint prefix", t.OVERRUN = "string overrun", t.MISSING_CONTINUE = "missing continuation byte", t.OUT_OF_RANGE = "out of UTF-8 range", t.UTF16_SURROGATE = "UTF-16 surrogate", t.OVERLONG = "overlong representation";
})(Xt || (Xt = {}));
function xu(t, e, r, n, a) {
  return cd.throwArgumentError(`invalid codepoint at offset ${e}; ${t}`, "bytes", r);
}
function fd(t, e, r, n, a) {
  if (t === Xt.BAD_PREFIX || t === Xt.UNEXPECTED_CONTINUE) {
    let i = 0;
    for (let s = e + 1; s < r.length && r[s] >> 6 === 2; s++)
      i++;
    return i;
  }
  return t === Xt.OVERRUN ? r.length - e - 1 : 0;
}
function yu(t, e, r, n, a) {
  return t === Xt.OVERLONG ? (n.push(a), 0) : (n.push(65533), fd(t, e, r));
}
const dd = Object.freeze({
  error: xu,
  ignore: fd,
  replace: yu
});
function Lo(t, e) {
  e == null && (e = dd.error), t = ce(t);
  const r = [];
  let n = 0;
  for (; n < t.length; ) {
    const a = t[n++];
    if (a >> 7 === 0) {
      r.push(a);
      continue;
    }
    let i = null, s = null;
    if ((a & 224) === 192)
      i = 1, s = 127;
    else if ((a & 240) === 224)
      i = 2, s = 2047;
    else if ((a & 248) === 240)
      i = 3, s = 65535;
    else {
      (a & 192) === 128 ? n += e(Xt.UNEXPECTED_CONTINUE, n - 1, t, r) : n += e(Xt.BAD_PREFIX, n - 1, t, r);
      continue;
    }
    if (n - 1 + i >= t.length) {
      n += e(Xt.OVERRUN, n - 1, t, r);
      continue;
    }
    let c = a & (1 << 8 - i - 1) - 1;
    for (let p = 0; p < i; p++) {
      let x = t[n];
      if ((x & 192) != 128) {
        n += e(Xt.MISSING_CONTINUE, n, t, r), c = null;
        break;
      }
      c = c << 6 | x & 63, n++;
    }
    if (c !== null) {
      if (c > 1114111) {
        n += e(Xt.OUT_OF_RANGE, n - 1 - i, t, r, c);
        continue;
      }
      if (c >= 55296 && c <= 57343) {
        n += e(Xt.UTF16_SURROGATE, n - 1 - i, t, r, c);
        continue;
      }
      if (c <= s) {
        n += e(Xt.OVERLONG, n - 1 - i, t, r, c);
        continue;
      }
      r.push(c);
    }
  }
  return r;
}
function _t(t, e = Gr.current) {
  e != Gr.current && (cd.checkNormalize(), t = t.normalize(e));
  let r = [];
  for (let n = 0; n < t.length; n++) {
    const a = t.charCodeAt(n);
    if (a < 128)
      r.push(a);
    else if (a < 2048)
      r.push(a >> 6 | 192), r.push(a & 63 | 128);
    else if ((a & 64512) == 55296) {
      n++;
      const i = t.charCodeAt(n);
      if (n >= t.length || (i & 64512) !== 56320)
        throw new Error("invalid utf-8 string");
      const s = 65536 + ((a & 1023) << 10) + (i & 1023);
      r.push(s >> 18 | 240), r.push(s >> 12 & 63 | 128), r.push(s >> 6 & 63 | 128), r.push(s & 63 | 128);
    } else
      r.push(a >> 12 | 224), r.push(a >> 6 & 63 | 128), r.push(a & 63 | 128);
  }
  return ce(r);
}
function Ds(t) {
  const e = "0000" + t.toString(16);
  return "\\u" + e.substring(e.length - 4);
}
function vu(t, e) {
  return '"' + Lo(t, e).map((r) => {
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
    return r <= 65535 ? Ds(r) : (r -= 65536, Ds((r >> 10 & 1023) + 55296) + Ds((r & 1023) + 56320));
  }).join("") + '"';
}
function oo(t) {
  return t.map((e) => e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10 & 1023) + 55296, (e & 1023) + 56320))).join("");
}
function Aa(t, e) {
  return oo(Lo(t, e));
}
function qi(t, e = Gr.current) {
  return Lo(_t(t, e));
}
function wu(t) {
  const e = _t(t);
  if (e.length > 31)
    throw new Error("bytes32 string must be less than 32 bytes");
  return fe(Dt([e, pu]).slice(0, 32));
}
function Au(t) {
  const e = ce(t);
  if (e.length !== 32)
    throw new Error("invalid bytes32 - not 32 bytes long");
  if (e[31] !== 0)
    throw new Error("invalid bytes32 string - no null terminator");
  let r = 31;
  for (; e[r - 1] === 0; )
    r--;
  return Aa(e.slice(0, r));
}
function Eu(t) {
  if (t.length % 4 !== 0)
    throw new Error("bad data");
  let e = [];
  for (let r = 0; r < t.length; r += 4)
    e.push(parseInt(t.substring(r, r + 4), 16));
  return e;
}
function jo(t, e) {
  e || (e = function(a) {
    return [parseInt(a, 16)];
  });
  let r = 0, n = {};
  return t.split(",").forEach((a) => {
    let i = a.split(":");
    r += parseInt(i[0], 16), n[r] = e(i[1]);
  }), n;
}
function ld(t) {
  let e = 0;
  return t.split(",").map((r) => {
    let n = r.split("-");
    n.length === 1 ? n[1] = "0" : n[1] === "" && (n[1] = "1");
    let a = e + parseInt(n[0], 16);
    return e = parseInt(n[1], 16), { l: a, h: e };
  });
}
function Wo(t, e) {
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
const Cu = ld("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"), Iu = "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map((t) => parseInt(t, 16)), ku = [
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
], Su = jo("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"), Du = jo("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"), Bu = jo("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D", Eu), Fu = ld("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");
function Ru(t) {
  return t.reduce((e, r) => (r.forEach((n) => {
    e.push(n);
  }), e), []);
}
function Mu(t) {
  return !!Wo(t, Cu);
}
function _u(t) {
  let e = Wo(t, ku);
  if (e)
    return [t + e.s];
  let r = Su[t];
  if (r)
    return r;
  let n = Du[t];
  if (n)
    return [t + n[0]];
  let a = Bu[t];
  return a || null;
}
function Tu(t) {
  return !!Wo(t, Fu);
}
function Uu(t) {
  if (t.match(/^[a-z0-9-]*$/i) && t.length <= 59)
    return t.toLowerCase();
  let e = qi(t);
  e = Ru(e.map((n) => {
    if (Iu.indexOf(n) >= 0)
      return [];
    if (n >= 65024 && n <= 65039)
      return [];
    let a = _u(n);
    return a || [n];
  })), e = qi(oo(e), Gr.NFKC), e.forEach((n) => {
    if (Tu(n))
      throw new Error("STRINGPREP_CONTAINS_PROHIBITED");
  }), e.forEach((n) => {
    if (Mu(n))
      throw new Error("STRINGPREP_CONTAINS_UNASSIGNED");
  });
  let r = oo(e);
  if (r.substring(0, 1) === "-" || r.substring(2, 4) === "--" || r.substring(r.length - 1) === "-")
    throw new Error("invalid hyphen");
  return r;
}
const Pu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _toEscapedUtf8String: vu,
  toUtf8Bytes: _t,
  toUtf8CodePoints: qi,
  toUtf8String: Aa,
  Utf8ErrorFuncs: dd,
  get Utf8ErrorReason() {
    return Xt;
  },
  get UnicodeNormalizationForm() {
    return Gr;
  },
  formatBytes32String: wu,
  parseBytes32String: Au,
  nameprep: Uu
}, Symbol.toStringTag, { value: "Module" }));
class Nu extends sd {
  constructor(e) {
    super("string", e);
  }
  defaultValue() {
    return "";
  }
  encode(e, r) {
    return super.encode(e, _t(r));
  }
  decode(e) {
    return Aa(super.decode(e));
  }
}
class Ai extends an {
  constructor(e, r) {
    let n = !1;
    const a = [];
    e.forEach((s) => {
      s.dynamic && (n = !0), a.push(s.type);
    });
    const i = "tuple(" + a.join(",") + ")";
    super("tuple", i, r, n), this.coders = e;
  }
  defaultValue() {
    const e = [];
    this.coders.forEach((n) => {
      e.push(n.defaultValue());
    });
    const r = this.coders.reduce((n, a) => {
      const i = a.localName;
      return i && (n[i] || (n[i] = 0), n[i]++), n;
    }, {});
    return this.coders.forEach((n, a) => {
      let i = n.localName;
      !i || r[i] !== 1 || (i === "length" && (i = "_length"), e[i] == null && (e[i] = e[a]));
    }), Object.freeze(e);
  }
  encode(e, r) {
    return ad(e, this.coders, r);
  }
  decode(e) {
    return e.coerce(this.name, id(e, this.coders));
  }
}
const Ei = new Z(fi), Ou = new RegExp(/^bytes([0-9]*)$/), Lu = new RegExp(/^(u?int)([0-9]*)$/);
class hd {
  constructor(e) {
    ie(this, "coerceFunc", e || null);
  }
  _getCoder(e) {
    switch (e.baseType) {
      case "address":
        return new iu(e.name);
      case "bool":
        return new cu(e.name);
      case "string":
        return new Nu(e.name);
      case "bytes":
        return new fu(e.name);
      case "array":
        return new ou(this._getCoder(e.arrayChildren), e.arrayLength, e.name);
      case "tuple":
        return new Ai((e.components || []).map((n) => this._getCoder(n)), e.name);
      case "":
        return new lu(e.name);
    }
    let r = e.type.match(Lu);
    if (r) {
      let n = parseInt(r[2] || "256");
      return (n === 0 || n > 256 || n % 8 !== 0) && Ei.throwArgumentError("invalid " + r[1] + " bit length", "param", e), new bu(n / 8, r[1] === "int", e.name);
    }
    if (r = e.type.match(Ou), r) {
      let n = parseInt(r[1]);
      return (n === 0 || n > 32) && Ei.throwArgumentError("invalid bytes length", "param", e), new du(n, e.name);
    }
    return Ei.throwArgumentError("invalid type", "type", e.type);
  }
  _getWordSize() {
    return 32;
  }
  _getReader(e, r) {
    return new Ki(e, this._getWordSize(), this.coerceFunc, r);
  }
  _getWriter() {
    return new so(this._getWordSize());
  }
  getDefaultValue(e) {
    const r = e.map((a) => this._getCoder(Rt.from(a)));
    return new Ai(r, "_").defaultValue();
  }
  encode(e, r) {
    e.length !== r.length && Ei.throwError("types/values length mismatch", Z.errors.INVALID_ARGUMENT, {
      count: { types: e.length, values: r.length },
      value: { types: e, values: r }
    });
    const n = e.map((s) => this._getCoder(Rt.from(s))), a = new Ai(n, "_"), i = this._getWriter();
    return a.encode(i, r), i.data;
  }
  decode(e, r, n) {
    const a = e.map((s) => this._getCoder(Rt.from(s)));
    return new Ai(a, "_").decode(this._getReader(ce(r), n));
  }
}
const ud = new hd();
function un(t) {
  return bt(_t(t));
}
const md = "hash/5.7.0", ju = "logger/5.7.0";
let tc = !1, rc = !1;
const _i = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
let nc = _i.default, Bs = null;
function Wu() {
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
const ac = Wu();
var co;
(function(t) {
  t.DEBUG = "DEBUG", t.INFO = "INFO", t.WARNING = "WARNING", t.ERROR = "ERROR", t.OFF = "OFF";
})(co || (co = {}));
var xr;
(function(t) {
  t.UNKNOWN_ERROR = "UNKNOWN_ERROR", t.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", t.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", t.NETWORK_ERROR = "NETWORK_ERROR", t.SERVER_ERROR = "SERVER_ERROR", t.TIMEOUT = "TIMEOUT", t.BUFFER_OVERRUN = "BUFFER_OVERRUN", t.NUMERIC_FAULT = "NUMERIC_FAULT", t.MISSING_NEW = "MISSING_NEW", t.INVALID_ARGUMENT = "INVALID_ARGUMENT", t.MISSING_ARGUMENT = "MISSING_ARGUMENT", t.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", t.CALL_EXCEPTION = "CALL_EXCEPTION", t.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", t.NONCE_EXPIRED = "NONCE_EXPIRED", t.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", t.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", t.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", t.ACTION_REJECTED = "ACTION_REJECTED";
})(xr || (xr = {}));
const ic = "0123456789abcdef";
class Et {
  constructor(e) {
    Object.defineProperty(this, "version", {
      enumerable: !0,
      value: e,
      writable: !1
    });
  }
  _log(e, r) {
    const n = e.toLowerCase();
    _i[n] == null && this.throwArgumentError("invalid log level name", "logLevel", e), !(nc > _i[n]) && console.log.apply(console, r);
  }
  debug(...e) {
    this._log(Et.levels.DEBUG, e);
  }
  info(...e) {
    this._log(Et.levels.INFO, e);
  }
  warn(...e) {
    this._log(Et.levels.WARNING, e);
  }
  makeError(e, r, n) {
    if (rc)
      return this.makeError("censored error", r, {});
    r || (r = Et.errors.UNKNOWN_ERROR), n || (n = {});
    const a = [];
    Object.keys(n).forEach((p) => {
      const x = n[p];
      try {
        if (x instanceof Uint8Array) {
          let y = "";
          for (let C = 0; C < x.length; C++)
            y += ic[x[C] >> 4], y += ic[x[C] & 15];
          a.push(p + "=Uint8Array(0x" + y + ")");
        } else
          a.push(p + "=" + JSON.stringify(x));
      } catch {
        a.push(p + "=" + JSON.stringify(n[p].toString()));
      }
    }), a.push(`code=${r}`), a.push(`version=${this.version}`);
    const i = e;
    let s = "";
    switch (r) {
      case xr.NUMERIC_FAULT: {
        s = "NUMERIC_FAULT";
        const p = e;
        switch (p) {
          case "overflow":
          case "underflow":
          case "division-by-zero":
            s += "-" + p;
            break;
          case "negative-power":
          case "negative-width":
            s += "-unsupported";
            break;
          case "unbound-bitwise-result":
            s += "-unbound-result";
            break;
        }
        break;
      }
      case xr.CALL_EXCEPTION:
      case xr.INSUFFICIENT_FUNDS:
      case xr.MISSING_NEW:
      case xr.NONCE_EXPIRED:
      case xr.REPLACEMENT_UNDERPRICED:
      case xr.TRANSACTION_REPLACED:
      case xr.UNPREDICTABLE_GAS_LIMIT:
        s = r;
        break;
    }
    s && (e += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"), a.length && (e += " (" + a.join(", ") + ")");
    const c = new Error(e);
    return c.reason = i, c.code = r, Object.keys(n).forEach(function(p) {
      c[p] = n[p];
    }), c;
  }
  throwError(e, r, n) {
    throw this.makeError(e, r, n);
  }
  throwArgumentError(e, r, n) {
    return this.throwError(e, Et.errors.INVALID_ARGUMENT, {
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
    ac && this.throwError("platform missing String.prototype.normalize", Et.errors.UNSUPPORTED_OPERATION, {
      operation: "String.prototype.normalize",
      form: ac
    });
  }
  checkSafeUint53(e, r) {
    typeof e == "number" && (r == null && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, Et.errors.NUMERIC_FAULT, {
      operation: "checkSafeInteger",
      fault: "out-of-safe-range",
      value: e
    }), e % 1 && this.throwError(r, Et.errors.NUMERIC_FAULT, {
      operation: "checkSafeInteger",
      fault: "non-integer",
      value: e
    }));
  }
  checkArgumentCount(e, r, n) {
    n ? n = ": " + n : n = "", e < r && this.throwError("missing argument" + n, Et.errors.MISSING_ARGUMENT, {
      count: e,
      expectedCount: r
    }), e > r && this.throwError("too many arguments" + n, Et.errors.UNEXPECTED_ARGUMENT, {
      count: e,
      expectedCount: r
    });
  }
  checkNew(e, r) {
    (e === Object || e == null) && this.throwError("missing new", Et.errors.MISSING_NEW, { name: r.name });
  }
  checkAbstract(e, r) {
    e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", Et.errors.UNSUPPORTED_OPERATION, { name: e.name, operation: "new" }) : (e === Object || e == null) && this.throwError("missing new", Et.errors.MISSING_NEW, { name: r.name });
  }
  static globalLogger() {
    return Bs || (Bs = new Et(ju)), Bs;
  }
  static setCensorship(e, r) {
    if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", Et.errors.UNSUPPORTED_OPERATION, {
      operation: "setCensorship"
    }), tc) {
      if (!e)
        return;
      this.globalLogger().throwError("error censorship permanent", Et.errors.UNSUPPORTED_OPERATION, {
        operation: "setCensorship"
      });
    }
    rc = !!e, tc = !!r;
  }
  static setLogLevel(e) {
    const r = _i[e.toLowerCase()];
    if (r == null) {
      Et.globalLogger().warn("invalid log level - " + e);
      return;
    }
    nc = r;
  }
  static from(e) {
    return new Et(e);
  }
}
Et.errors = xr;
Et.levels = co;
const Hu = "bytes/5.7.0", Fs = new Et(Hu);
function zu(t) {
  return !!t.toHexString;
}
function Ti(t) {
  return t.slice || (t.slice = function() {
    const e = Array.prototype.slice.call(arguments);
    return Ti(new Uint8Array(Array.prototype.slice.apply(t, e)));
  }), t;
}
function sc(t) {
  return typeof t == "number" && t == t && t % 1 === 0;
}
function Gu(t) {
  if (t == null)
    return !1;
  if (t.constructor === Uint8Array)
    return !0;
  if (typeof t == "string" || !sc(t.length) || t.length < 0)
    return !1;
  for (let e = 0; e < t.length; e++) {
    const r = t[e];
    if (!sc(r) || r < 0 || r >= 256)
      return !1;
  }
  return !0;
}
function pd(t, e) {
  if (e || (e = {}), typeof t == "number") {
    Fs.checkSafeUint53(t, "invalid arrayify value");
    const r = [];
    for (; t; )
      r.unshift(t & 255), t = parseInt(String(t / 256));
    return r.length === 0 && r.push(0), Ti(new Uint8Array(r));
  }
  if (e.allowMissingPrefix && typeof t == "string" && t.substring(0, 2) !== "0x" && (t = "0x" + t), zu(t) && (t = t.toHexString()), $u(t)) {
    let r = t.substring(2);
    r.length % 2 && (e.hexPad === "left" ? r = "0" + r : e.hexPad === "right" ? r += "0" : Fs.throwArgumentError("hex data is odd-length", "value", t));
    const n = [];
    for (let a = 0; a < r.length; a += 2)
      n.push(parseInt(r.substring(a, a + 2), 16));
    return Ti(new Uint8Array(n));
  }
  return Gu(t) ? Ti(new Uint8Array(t)) : Fs.throwArgumentError("invalid arrayify value", "value", t);
}
function $u(t, e) {
  return !(typeof t != "string" || !t.match(/^0x[0-9A-Fa-f]*$/) || e && t.length !== 2 + 2 * e);
}
function Ho(t) {
  t = atob(t);
  const e = [];
  for (let r = 0; r < t.length; r++)
    e.push(t.charCodeAt(r));
  return pd(e);
}
function bd(t) {
  t = pd(t);
  let e = "";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return btoa(e);
}
const Vu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: Ho,
  encode: bd
}, Symbol.toStringTag, { value: "Module" }));
function gd(t, e) {
  e == null && (e = 1);
  const r = [], n = r.forEach, a = function(i, s) {
    n.call(i, function(c) {
      s > 0 && Array.isArray(c) ? a(c, s - 1) : r.push(c);
    });
  };
  return a(t, e), r;
}
function Ku(t) {
  const e = {};
  for (let r = 0; r < t.length; r++) {
    const n = t[r];
    e[n[0]] = n[1];
  }
  return e;
}
function qu(t) {
  let e = 0;
  function r() {
    return t[e++] << 8 | t[e++];
  }
  let n = r(), a = 1, i = [0, 1];
  for (let T = 1; T < n; T++)
    i.push(a += r());
  let s = r(), c = e;
  e += s;
  let p = 0, x = 0;
  function y() {
    return p == 0 && (x = x << 8 | t[e++], p = 8), x >> --p & 1;
  }
  const C = 31, B = Math.pow(2, C), F = B >>> 1, R = F >> 1, M = B - 1;
  let S = 0;
  for (let T = 0; T < C; T++)
    S = S << 1 | y();
  let U = [], N = 0, z = B;
  for (; ; ) {
    let T = Math.floor(((S - N + 1) * a - 1) / z), G = 0, J = n;
    for (; J - G > 1; ) {
      let se = G + J >>> 1;
      T < i[se] ? J = se : G = se;
    }
    if (G == 0)
      break;
    U.push(G);
    let Y = N + Math.floor(z * i[G] / a), X = N + Math.floor(z * i[G + 1] / a) - 1;
    for (; ((Y ^ X) & F) == 0; )
      S = S << 1 & M | y(), Y = Y << 1 & M, X = X << 1 & M | 1;
    for (; Y & ~X & R; )
      S = S & F | S << 1 & M >>> 1 | y(), Y = Y << 1 ^ F, X = (X ^ F) << 1 | F | 1;
    N = Y, z = 1 + X - Y;
  }
  let O = n - 4;
  return U.map((T) => {
    switch (T - O) {
      case 3:
        return O + 65792 + (t[c++] << 16 | t[c++] << 8 | t[c++]);
      case 2:
        return O + 256 + (t[c++] << 8 | t[c++]);
      case 1:
        return O + t[c++];
      default:
        return T - 1;
    }
  });
}
function Xu(t) {
  let e = 0;
  return () => t[e++];
}
function Zu(t) {
  return Xu(qu(t));
}
function Ju(t) {
  return t & 1 ? ~t >> 1 : t >> 1;
}
function Yu(t, e) {
  let r = Array(t);
  for (let n = 0; n < t; n++)
    r[n] = 1 + e();
  return r;
}
function oc(t, e) {
  let r = Array(t);
  for (let n = 0, a = -1; n < t; n++)
    r[n] = a += 1 + e();
  return r;
}
function Qu(t, e) {
  let r = Array(t);
  for (let n = 0, a = 0; n < t; n++)
    r[n] = a += Ju(e());
  return r;
}
function Xi(t, e) {
  let r = oc(t(), t), n = t(), a = oc(n, t), i = Yu(n, t);
  for (let s = 0; s < n; s++)
    for (let c = 0; c < i[s]; c++)
      r.push(a[s] + c);
  return e ? r.map((s) => e[s]) : r;
}
function em(t) {
  let e = [];
  for (; ; ) {
    let r = t();
    if (r == 0)
      break;
    e.push(rm(r, t));
  }
  for (; ; ) {
    let r = t() - 1;
    if (r < 0)
      break;
    e.push(nm(r, t));
  }
  return Ku(gd(e));
}
function tm(t) {
  let e = [];
  for (; ; ) {
    let r = t();
    if (r == 0)
      break;
    e.push(r);
  }
  return e;
}
function xd(t, e, r) {
  let n = Array(t).fill(void 0).map(() => []);
  for (let a = 0; a < e; a++)
    Qu(t, r).forEach((i, s) => n[s].push(i));
  return n;
}
function rm(t, e) {
  let r = 1 + e(), n = e(), a = tm(e), i = xd(a.length, 1 + t, e);
  return gd(i.map((s, c) => {
    const p = s[0], x = s.slice(1);
    return Array(a[c]).fill(void 0).map((y, C) => {
      let B = C * n;
      return [p + C * r, x.map((F) => F + B)];
    });
  }));
}
function nm(t, e) {
  let r = 1 + e();
  return xd(r, 1 + t, e).map((a) => [a[0], a.slice(1)]);
}
function am(t) {
  let e = Xi(t).sort((n, a) => n - a);
  return r();
  function r() {
    let n = [];
    for (; ; ) {
      let x = Xi(t, e);
      if (x.length == 0)
        break;
      n.push({ set: new Set(x), node: r() });
    }
    n.sort((x, y) => y.set.size - x.set.size);
    let a = t(), i = a % 3;
    a = a / 3 | 0;
    let s = !!(a & 1);
    a >>= 1;
    let c = a == 1, p = a == 2;
    return { branches: n, valid: i, fe0f: s, save: c, check: p };
  }
}
function im() {
  return Zu(Ho("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="));
}
const as = im(), sm = new Set(Xi(as)), om = new Set(Xi(as)), cm = em(as), fm = am(as), cc = 45, fc = 95;
function yd(t) {
  return qi(t);
}
function dm(t) {
  return t.filter((e) => e != 65039);
}
function vd(t) {
  for (let e of t.split(".")) {
    let r = yd(e);
    try {
      for (let n = r.lastIndexOf(fc) - 1; n >= 0; n--)
        if (r[n] !== fc)
          throw new Error("underscore only allowed at start");
      if (r.length >= 4 && r.every((n) => n < 128) && r[2] === cc && r[3] === cc)
        throw new Error("invalid label extension");
    } catch (n) {
      throw new Error(`Invalid label "${e}": ${n.message}`);
    }
  }
  return t;
}
function lm(t) {
  return vd(hm(t, dm));
}
function hm(t, e) {
  let r = yd(t).reverse(), n = [];
  for (; r.length; ) {
    let a = mm(r);
    if (a) {
      n.push(...e(a));
      continue;
    }
    let i = r.pop();
    if (sm.has(i)) {
      n.push(i);
      continue;
    }
    if (om.has(i))
      continue;
    let s = cm[i];
    if (s) {
      n.push(...s);
      continue;
    }
    throw new Error(`Disallowed codepoint: 0x${i.toString(16).toUpperCase()}`);
  }
  return vd(um(String.fromCodePoint(...n)));
}
function um(t) {
  return t.normalize("NFC");
}
function mm(t, e) {
  var r;
  let n = fm, a, i, s = [], c = t.length;
  for (e && (e.length = 0); c; ) {
    let p = t[--c];
    if (n = (r = n.branches.find((x) => x.set.has(p))) === null || r === void 0 ? void 0 : r.node, !n)
      break;
    if (n.save)
      i = p;
    else if (n.check && p === i)
      break;
    s.push(p), n.fe0f && (s.push(65039), c > 0 && t[c - 1] == 65039 && c--), n.valid && (a = s.slice(), n.valid == 2 && a.splice(1, 1), e && e.push(...t.slice(c).reverse()), t.length = c);
  }
  return a;
}
const pm = new Z(md), wd = new Uint8Array(32);
wd.fill(0);
function dc(t) {
  if (t.length === 0)
    throw new Error("invalid ENS name; empty component");
  return t;
}
function is(t) {
  const e = _t(lm(t)), r = [];
  if (t.length === 0)
    return r;
  let n = 0;
  for (let a = 0; a < e.length; a++)
    e[a] === 46 && (r.push(dc(e.slice(n, a))), n = a + 1);
  if (n >= e.length)
    throw new Error("invalid ENS name; empty component");
  return r.push(dc(e.slice(n))), r;
}
function bm(t) {
  return is(t).map((e) => Aa(e)).join(".");
}
function gm(t) {
  try {
    return is(t).length !== 0;
  } catch {
  }
  return !1;
}
function xm(t) {
  typeof t != "string" && pm.throwArgumentError("invalid ENS name; not a string", "name", t);
  let e = wd;
  const r = is(t);
  for (; r.length; )
    e = bt(Dt([e, bt(r.pop())]));
  return fe(e);
}
function ym(t) {
  return fe(Dt(is(t).map((e) => {
    if (e.length > 63)
      throw new Error("invalid DNS encoded entry; length exceeds 63 bytes");
    const r = new Uint8Array(e.length + 1);
    return r.set(e, 1), r[0] = r.length - 1, r;
  }))) + "00";
}
const Ad = `Ethereum Signed Message:
`;
function zo(t) {
  return typeof t == "string" && (t = _t(t)), bt(Dt([
    _t(Ad),
    _t(String(t.length)),
    t
  ]));
}
var vm = globalThis && globalThis.__awaiter || function(t, e, r, n) {
  function a(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i);
    });
  }
  return new (r || (r = Promise))(function(i, s) {
    function c(y) {
      try {
        x(n.next(y));
      } catch (C) {
        s(C);
      }
    }
    function p(y) {
      try {
        x(n.throw(y));
      } catch (C) {
        s(C);
      }
    }
    function x(y) {
      y.done ? i(y.value) : a(y.value).then(c, p);
    }
    x((n = n.apply(t, e || [])).next());
  });
};
const vt = new Z(md), Ed = new Uint8Array(32);
Ed.fill(0);
const wm = de.from(-1), Cd = de.from(0), Id = de.from(1), Am = de.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
function Em(t) {
  const e = ce(t), r = e.length % 32;
  return r ? pn([e, Ed.slice(r)]) : fe(e);
}
const Cm = Bt(Id.toHexString(), 32), Im = Bt(Cd.toHexString(), 32), lc = {
  name: "string",
  version: "string",
  chainId: "uint256",
  verifyingContract: "address",
  salt: "bytes32"
}, Rs = [
  "name",
  "version",
  "chainId",
  "verifyingContract",
  "salt"
];
function hc(t) {
  return function(e) {
    return typeof e != "string" && vt.throwArgumentError(`invalid domain value for ${JSON.stringify(t)}`, `domain.${t}`, e), e;
  };
}
const km = {
  name: hc("name"),
  version: hc("version"),
  chainId: function(t) {
    try {
      return de.from(t).toString();
    } catch {
    }
    return vt.throwArgumentError('invalid domain value for "chainId"', "domain.chainId", t);
  },
  verifyingContract: function(t) {
    try {
      return gt(t).toLowerCase();
    } catch {
    }
    return vt.throwArgumentError('invalid domain value "verifyingContract"', "domain.verifyingContract", t);
  },
  salt: function(t) {
    try {
      const e = ce(t);
      if (e.length !== 32)
        throw new Error("bad length");
      return fe(e);
    } catch {
    }
    return vt.throwArgumentError('invalid domain value "salt"', "domain.salt", t);
  }
};
function Ms(t) {
  {
    const e = t.match(/^(u?)int(\d*)$/);
    if (e) {
      const r = e[1] === "", n = parseInt(e[2] || "256");
      (n % 8 !== 0 || n > 256 || e[2] && e[2] !== String(n)) && vt.throwArgumentError("invalid numeric width", "type", t);
      const a = Am.mask(r ? n - 1 : n), i = r ? a.add(Id).mul(wm) : Cd;
      return function(s) {
        const c = de.from(s);
        return (c.lt(i) || c.gt(a)) && vt.throwArgumentError(`value out-of-bounds for ${t}`, "value", s), Bt(c.toTwos(256).toHexString(), 32);
      };
    }
  }
  {
    const e = t.match(/^bytes(\d+)$/);
    if (e) {
      const r = parseInt(e[1]);
      return (r === 0 || r > 32 || e[1] !== String(r)) && vt.throwArgumentError("invalid bytes width", "type", t), function(n) {
        return ce(n).length !== r && vt.throwArgumentError(`invalid length for ${t}`, "value", n), Em(n);
      };
    }
  }
  switch (t) {
    case "address":
      return function(e) {
        return Bt(gt(e), 32);
      };
    case "bool":
      return function(e) {
        return e ? Cm : Im;
      };
    case "bytes":
      return function(e) {
        return bt(e);
      };
    case "string":
      return function(e) {
        return un(e);
      };
  }
  return null;
}
function uc(t, e) {
  return `${t}(${e.map(({ name: r, type: n }) => n + " " + r).join(",")})`;
}
class Ht {
  constructor(e) {
    ie(this, "types", Object.freeze(Ln(e))), ie(this, "_encoderCache", {}), ie(this, "_types", {});
    const r = {}, n = {}, a = {};
    Object.keys(e).forEach((c) => {
      r[c] = {}, n[c] = [], a[c] = {};
    });
    for (const c in e) {
      const p = {};
      e[c].forEach((x) => {
        p[x.name] && vt.throwArgumentError(`duplicate variable name ${JSON.stringify(x.name)} in ${JSON.stringify(c)}`, "types", e), p[x.name] = !0;
        const y = x.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
        y === c && vt.throwArgumentError(`circular type reference to ${JSON.stringify(y)}`, "types", e), !Ms(y) && (n[y] || vt.throwArgumentError(`unknown type ${JSON.stringify(y)}`, "types", e), n[y].push(c), r[c][y] = !0);
      });
    }
    const i = Object.keys(n).filter((c) => n[c].length === 0);
    i.length === 0 ? vt.throwArgumentError("missing primary type", "types", e) : i.length > 1 && vt.throwArgumentError(`ambiguous primary types or unused types: ${i.map((c) => JSON.stringify(c)).join(", ")}`, "types", e), ie(this, "primaryType", i[0]);
    function s(c, p) {
      p[c] && vt.throwArgumentError(`circular type reference to ${JSON.stringify(c)}`, "types", e), p[c] = !0, Object.keys(r[c]).forEach((x) => {
        !n[x] || (s(x, p), Object.keys(p).forEach((y) => {
          a[y][x] = !0;
        }));
      }), delete p[c];
    }
    s(this.primaryType, {});
    for (const c in a) {
      const p = Object.keys(a[c]);
      p.sort(), this._types[c] = uc(c, e[c]) + p.map((x) => uc(x, e[x])).join("");
    }
  }
  getEncoder(e) {
    let r = this._encoderCache[e];
    return r || (r = this._encoderCache[e] = this._getEncoder(e)), r;
  }
  _getEncoder(e) {
    {
      const a = Ms(e);
      if (a)
        return a;
    }
    const r = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
    if (r) {
      const a = r[1], i = this.getEncoder(a), s = parseInt(r[3]);
      return (c) => {
        s >= 0 && c.length !== s && vt.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", c);
        let p = c.map(i);
        return this._types[a] && (p = p.map(bt)), bt(pn(p));
      };
    }
    const n = this.types[e];
    if (n) {
      const a = un(this._types[e]);
      return (i) => {
        const s = n.map(({ name: c, type: p }) => {
          const x = this.getEncoder(p)(i[c]);
          return this._types[p] ? bt(x) : x;
        });
        return s.unshift(a), pn(s);
      };
    }
    return vt.throwArgumentError(`unknown type: ${e}`, "type", e);
  }
  encodeType(e) {
    const r = this._types[e];
    return r || vt.throwArgumentError(`unknown type: ${JSON.stringify(e)}`, "name", e), r;
  }
  encodeData(e, r) {
    return this.getEncoder(e)(r);
  }
  hashStruct(e, r) {
    return bt(this.encodeData(e, r));
  }
  encode(e) {
    return this.encodeData(this.primaryType, e);
  }
  hash(e) {
    return this.hashStruct(this.primaryType, e);
  }
  _visit(e, r, n) {
    if (Ms(e))
      return n(e, r);
    const a = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
    if (a) {
      const s = a[1], c = parseInt(a[3]);
      return c >= 0 && r.length !== c && vt.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", r), r.map((p) => this._visit(s, p, n));
    }
    const i = this.types[e];
    return i ? i.reduce((s, { name: c, type: p }) => (s[c] = this._visit(p, r[c], n), s), {}) : vt.throwArgumentError(`unknown type: ${e}`, "type", e);
  }
  visit(e, r) {
    return this._visit(this.primaryType, e, r);
  }
  static from(e) {
    return new Ht(e);
  }
  static getPrimaryType(e) {
    return Ht.from(e).primaryType;
  }
  static hashStruct(e, r, n) {
    return Ht.from(r).hashStruct(e, n);
  }
  static hashDomain(e) {
    const r = [];
    for (const n in e) {
      const a = lc[n];
      a || vt.throwArgumentError(`invalid typed-data domain key: ${JSON.stringify(n)}`, "domain", e), r.push({ name: n, type: a });
    }
    return r.sort((n, a) => Rs.indexOf(n.name) - Rs.indexOf(a.name)), Ht.hashStruct("EIP712Domain", { EIP712Domain: r }, e);
  }
  static encode(e, r, n) {
    return pn([
      "0x1901",
      Ht.hashDomain(e),
      Ht.from(r).hash(n)
    ]);
  }
  static hash(e, r, n) {
    return bt(Ht.encode(e, r, n));
  }
  static resolveNames(e, r, n, a) {
    return vm(this, void 0, void 0, function* () {
      e = nr(e);
      const i = {};
      e.verifyingContract && !At(e.verifyingContract, 20) && (i[e.verifyingContract] = "0x");
      const s = Ht.from(r);
      s.visit(n, (c, p) => (c === "address" && !At(p, 20) && (i[p] = "0x"), p));
      for (const c in i)
        i[c] = yield a(c);
      return e.verifyingContract && i[e.verifyingContract] && (e.verifyingContract = i[e.verifyingContract]), n = s.visit(n, (c, p) => c === "address" && i[p] ? i[p] : p), { domain: e, value: n };
    });
  }
  static getPayload(e, r, n) {
    Ht.hashDomain(e);
    const a = {}, i = [];
    Rs.forEach((p) => {
      const x = e[p];
      x != null && (a[p] = km[p](x), i.push({ name: p, type: lc[p] }));
    });
    const s = Ht.from(r), c = nr(r);
    return c.EIP712Domain ? vt.throwArgumentError("types must not contain EIP712Domain type", "types.EIP712Domain", r) : c.EIP712Domain = i, s.encode(n), {
      types: c,
      domain: a,
      primaryType: s.primaryType,
      message: s.visit(n, (p, x) => {
        if (p.match(/^bytes(\d*)/))
          return fe(ce(x));
        if (p.match(/^u?int/))
          return de.from(x).toString();
        switch (p) {
          case "address":
            return x.toLowerCase();
          case "bool":
            return !!x;
          case "string":
            return typeof x != "string" && vt.throwArgumentError("invalid string", "value", x), x;
        }
        return vt.throwArgumentError("unsupported type", "type", p);
      })
    };
  }
}
const Sm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  id: un,
  dnsEncode: ym,
  namehash: xm,
  isValidName: gm,
  ensNormalize: bm,
  messagePrefix: Ad,
  hashMessage: zo,
  _TypedDataEncoder: Ht
}, Symbol.toStringTag, { value: "Module" })), yt = new Z(fi);
class kd extends qn {
}
class Sd extends qn {
}
class Dm extends qn {
}
class Zi extends qn {
  static isIndexed(e) {
    return !!(e && e._isIndexed);
  }
}
const Bm = {
  "0x08c379a0": { signature: "Error(string)", name: "Error", inputs: ["string"], reason: !0 },
  "0x4e487b71": { signature: "Panic(uint256)", name: "Panic", inputs: ["uint256"] }
};
function mc(t, e) {
  const r = new Error(`deferred error during ABI decoding triggered accessing ${t}`);
  return r.error = e, r;
}
class fo {
  constructor(e) {
    let r = [];
    typeof e == "string" ? r = JSON.parse(e) : r = e, ie(this, "fragments", r.map((n) => Nr.from(n)).filter((n) => n != null)), ie(this, "_abiCoder", ta(new.target, "getAbiCoder")()), ie(this, "functions", {}), ie(this, "errors", {}), ie(this, "events", {}), ie(this, "structs", {}), this.fragments.forEach((n) => {
      let a = null;
      switch (n.type) {
        case "constructor":
          if (this.deploy) {
            yt.warn("duplicate definition - constructor");
            return;
          }
          ie(this, "deploy", n);
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
      let i = n.format();
      if (a[i]) {
        yt.warn("duplicate definition - " + i);
        return;
      }
      a[i] = n;
    }), this.deploy || ie(this, "deploy", yr.from({
      payable: !1,
      type: "constructor"
    })), ie(this, "_isInterface", !0);
  }
  format(e) {
    e || (e = Ze.full), e === Ze.sighash && yt.throwArgumentError("interface does not support formatting sighash", "format", e);
    const r = this.fragments.map((n) => n.format(e));
    return e === Ze.json ? JSON.stringify(r.map((n) => JSON.parse(n))) : r;
  }
  static getAbiCoder() {
    return ud;
  }
  static getAddress(e) {
    return gt(e);
  }
  static getSighash(e) {
    return tn(un(e.format()), 0, 4);
  }
  static getEventTopic(e) {
    return un(e.format());
  }
  getFunction(e) {
    if (At(e)) {
      for (const n in this.functions)
        if (e === this.getSighash(n))
          return this.functions[n];
      yt.throwArgumentError("no matching function", "sighash", e);
    }
    if (e.indexOf("(") === -1) {
      const n = e.trim(), a = Object.keys(this.functions).filter((i) => i.split("(")[0] === n);
      return a.length === 0 ? yt.throwArgumentError("no matching function", "name", n) : a.length > 1 && yt.throwArgumentError("multiple matching functions", "name", n), this.functions[a[0]];
    }
    const r = this.functions[vr.fromString(e).format()];
    return r || yt.throwArgumentError("no matching function", "signature", e), r;
  }
  getEvent(e) {
    if (At(e)) {
      const n = e.toLowerCase();
      for (const a in this.events)
        if (n === this.getEventTopic(a))
          return this.events[a];
      yt.throwArgumentError("no matching event", "topichash", n);
    }
    if (e.indexOf("(") === -1) {
      const n = e.trim(), a = Object.keys(this.events).filter((i) => i.split("(")[0] === n);
      return a.length === 0 ? yt.throwArgumentError("no matching event", "name", n) : a.length > 1 && yt.throwArgumentError("multiple matching events", "name", n), this.events[a[0]];
    }
    const r = this.events[Tr.fromString(e).format()];
    return r || yt.throwArgumentError("no matching event", "signature", e), r;
  }
  getError(e) {
    if (At(e)) {
      const n = ta(this.constructor, "getSighash");
      for (const a in this.errors) {
        const i = this.errors[a];
        if (e === n(i))
          return this.errors[a];
      }
      yt.throwArgumentError("no matching error", "sighash", e);
    }
    if (e.indexOf("(") === -1) {
      const n = e.trim(), a = Object.keys(this.errors).filter((i) => i.split("(")[0] === n);
      return a.length === 0 ? yt.throwArgumentError("no matching error", "name", n) : a.length > 1 && yt.throwArgumentError("multiple matching errors", "name", n), this.errors[a[0]];
    }
    const r = this.errors[vr.fromString(e).format()];
    return r || yt.throwArgumentError("no matching error", "signature", e), r;
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
    return ta(this.constructor, "getSighash")(e);
  }
  getEventTopic(e) {
    return typeof e == "string" && (e = this.getEvent(e)), ta(this.constructor, "getEventTopic")(e);
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
    const n = ce(r);
    return fe(n.slice(0, 4)) !== this.getSighash(e) && yt.throwArgumentError(`data signature does not match error ${e.name}.`, "data", fe(n)), this._decodeParams(e.inputs, n.slice(4));
  }
  encodeErrorResult(e, r) {
    return typeof e == "string" && (e = this.getError(e)), fe(Dt([
      this.getSighash(e),
      this._encodeParams(e.inputs, r || [])
    ]));
  }
  decodeFunctionData(e, r) {
    typeof e == "string" && (e = this.getFunction(e));
    const n = ce(r);
    return fe(n.slice(0, 4)) !== this.getSighash(e) && yt.throwArgumentError(`data signature does not match function ${e.name}.`, "data", fe(n)), this._decodeParams(e.inputs, n.slice(4));
  }
  encodeFunctionData(e, r) {
    return typeof e == "string" && (e = this.getFunction(e)), fe(Dt([
      this.getSighash(e),
      this._encodeParams(e.inputs, r || [])
    ]));
  }
  decodeFunctionResult(e, r) {
    typeof e == "string" && (e = this.getFunction(e));
    let n = ce(r), a = null, i = "", s = null, c = null, p = null;
    switch (n.length % this._abiCoder._getWordSize()) {
      case 0:
        try {
          return this._abiCoder.decode(e.outputs, n);
        } catch {
        }
        break;
      case 4: {
        const x = fe(n.slice(0, 4)), y = Bm[x];
        if (y)
          s = this._abiCoder.decode(y.inputs, n.slice(4)), c = y.name, p = y.signature, y.reason && (a = s[0]), c === "Error" ? i = `; VM Exception while processing transaction: reverted with reason string ${JSON.stringify(s[0])}` : c === "Panic" && (i = `; VM Exception while processing transaction: reverted with panic code ${s[0]}`);
        else
          try {
            const C = this.getError(x);
            s = this._abiCoder.decode(C.inputs, n.slice(4)), c = C.name, p = C.format();
          } catch {
          }
        break;
      }
    }
    return yt.throwError("call revert exception" + i, Z.errors.CALL_EXCEPTION, {
      method: e.format(),
      data: fe(r),
      errorArgs: s,
      errorName: c,
      errorSignature: p,
      reason: a
    });
  }
  encodeFunctionResult(e, r) {
    return typeof e == "string" && (e = this.getFunction(e)), fe(this._abiCoder.encode(e.outputs, r || []));
  }
  encodeFilterTopics(e, r) {
    typeof e == "string" && (e = this.getEvent(e)), r.length > e.inputs.length && yt.throwError("too many arguments for " + e.format(), Z.errors.UNEXPECTED_ARGUMENT, {
      argument: "values",
      value: r
    });
    let n = [];
    e.anonymous || n.push(this.getEventTopic(e));
    const a = (i, s) => i.type === "string" ? un(s) : i.type === "bytes" ? bt(fe(s)) : (i.type === "bool" && typeof s == "boolean" && (s = s ? "0x01" : "0x00"), i.type.match(/^u?int/) && (s = de.from(s).toHexString()), i.type === "address" && this._abiCoder.encode(["address"], [s]), Bt(fe(s), 32));
    for (r.forEach((i, s) => {
      let c = e.inputs[s];
      if (!c.indexed) {
        i != null && yt.throwArgumentError("cannot filter non-indexed parameters; must be null", "contract." + c.name, i);
        return;
      }
      i == null ? n.push(null) : c.baseType === "array" || c.baseType === "tuple" ? yt.throwArgumentError("filtering with tuples or arrays not supported", "contract." + c.name, i) : Array.isArray(i) ? n.push(i.map((p) => a(c, p))) : n.push(a(c, i));
    }); n.length && n[n.length - 1] === null; )
      n.pop();
    return n;
  }
  encodeEventLog(e, r) {
    typeof e == "string" && (e = this.getEvent(e));
    const n = [], a = [], i = [];
    return e.anonymous || n.push(this.getEventTopic(e)), r.length !== e.inputs.length && yt.throwArgumentError("event arguments/values mismatch", "values", r), e.inputs.forEach((s, c) => {
      const p = r[c];
      if (s.indexed)
        if (s.type === "string")
          n.push(un(p));
        else if (s.type === "bytes")
          n.push(bt(p));
        else {
          if (s.baseType === "tuple" || s.baseType === "array")
            throw new Error("not implemented");
          n.push(this._abiCoder.encode([s.type], [p]));
        }
      else
        a.push(s), i.push(p);
    }), {
      data: this._abiCoder.encode(a, i),
      topics: n
    };
  }
  decodeEventLog(e, r, n) {
    if (typeof e == "string" && (e = this.getEvent(e)), n != null && !e.anonymous) {
      let B = this.getEventTopic(e);
      (!At(n[0], 32) || n[0].toLowerCase() !== B) && yt.throwError("fragment/topic mismatch", Z.errors.INVALID_ARGUMENT, { argument: "topics[0]", expected: B, value: n[0] }), n = n.slice(1);
    }
    let a = [], i = [], s = [];
    e.inputs.forEach((B, F) => {
      B.indexed ? B.type === "string" || B.type === "bytes" || B.baseType === "tuple" || B.baseType === "array" ? (a.push(Rt.fromObject({ type: "bytes32", name: B.name })), s.push(!0)) : (a.push(B), s.push(!1)) : (i.push(B), s.push(!1));
    });
    let c = n != null ? this._abiCoder.decode(a, Dt(n)) : null, p = this._abiCoder.decode(i, r, !0), x = [], y = 0, C = 0;
    e.inputs.forEach((B, F) => {
      if (B.indexed)
        if (c == null)
          x[F] = new Zi({ _isIndexed: !0, hash: null });
        else if (s[F])
          x[F] = new Zi({ _isIndexed: !0, hash: c[C++] });
        else
          try {
            x[F] = c[C++];
          } catch (R) {
            x[F] = R;
          }
      else
        try {
          x[F] = p[y++];
        } catch (R) {
          x[F] = R;
        }
      if (B.name && x[B.name] == null) {
        const R = x[F];
        R instanceof Error ? Object.defineProperty(x, B.name, {
          enumerable: !0,
          get: () => {
            throw mc(`property ${JSON.stringify(B.name)}`, R);
          }
        }) : x[B.name] = R;
      }
    });
    for (let B = 0; B < x.length; B++) {
      const F = x[B];
      F instanceof Error && Object.defineProperty(x, B, {
        enumerable: !0,
        get: () => {
          throw mc(`index ${B}`, F);
        }
      });
    }
    return Object.freeze(x);
  }
  parseTransaction(e) {
    let r = this.getFunction(e.data.substring(0, 10).toLowerCase());
    return r ? new Sd({
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
    return !r || r.anonymous ? null : new kd({
      eventFragment: r,
      name: r.name,
      signature: r.format(),
      topic: this.getEventTopic(r),
      args: this.decodeEventLog(r, e.data, e.topics)
    });
  }
  parseError(e) {
    const r = fe(e);
    let n = this.getError(r.substring(0, 10).toLowerCase());
    return n ? new Dm({
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
const Fm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ConstructorFragment: yr,
  ErrorFragment: Yr,
  EventFragment: Tr,
  Fragment: Nr,
  FunctionFragment: vr,
  ParamType: Rt,
  FormatTypes: Ze,
  AbiCoder: hd,
  defaultAbiCoder: ud,
  Interface: fo,
  Indexed: Zi,
  checkResultErrors: Yf,
  LogDescription: kd,
  TransactionDescription: Sd
}, Symbol.toStringTag, { value: "Module" })), Rm = "abstract-provider/5.7.0";
var Mm = globalThis && globalThis.__awaiter || function(t, e, r, n) {
  function a(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i);
    });
  }
  return new (r || (r = Promise))(function(i, s) {
    function c(y) {
      try {
        x(n.next(y));
      } catch (C) {
        s(C);
      }
    }
    function p(y) {
      try {
        x(n.throw(y));
      } catch (C) {
        s(C);
      }
    }
    function x(y) {
      y.done ? i(y.value) : a(y.value).then(c, p);
    }
    x((n = n.apply(t, e || [])).next());
  });
};
const _m = new Z(Rm);
class ss {
  constructor() {
    _m.checkAbstract(new.target, ss), ie(this, "_isProvider", !0);
  }
  getFeeData() {
    return Mm(this, void 0, void 0, function* () {
      const { block: e, gasPrice: r } = yield Pr({
        block: this.getBlock("latest"),
        gasPrice: this.getGasPrice().catch((s) => null)
      });
      let n = null, a = null, i = null;
      return e && e.baseFeePerGas && (n = e.baseFeePerGas, i = de.from("1500000000"), a = e.baseFeePerGas.mul(2).add(i)), { lastBaseFeePerGas: n, maxFeePerGas: a, maxPriorityFeePerGas: i, gasPrice: r };
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
const Tm = "abstract-signer/5.7.0";
var pr = globalThis && globalThis.__awaiter || function(t, e, r, n) {
  function a(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i);
    });
  }
  return new (r || (r = Promise))(function(i, s) {
    function c(y) {
      try {
        x(n.next(y));
      } catch (C) {
        s(C);
      }
    }
    function p(y) {
      try {
        x(n.throw(y));
      } catch (C) {
        s(C);
      }
    }
    function x(y) {
      y.done ? i(y.value) : a(y.value).then(c, p);
    }
    x((n = n.apply(t, e || [])).next());
  });
};
const or = new Z(Tm), Um = [
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
], Pm = [
  Z.errors.INSUFFICIENT_FUNDS,
  Z.errors.NONCE_EXPIRED,
  Z.errors.REPLACEMENT_UNDERPRICED
];
class di {
  constructor() {
    or.checkAbstract(new.target, di), ie(this, "_isSigner", !0);
  }
  getBalance(e) {
    return pr(this, void 0, void 0, function* () {
      return this._checkProvider("getBalance"), yield this.provider.getBalance(this.getAddress(), e);
    });
  }
  getTransactionCount(e) {
    return pr(this, void 0, void 0, function* () {
      return this._checkProvider("getTransactionCount"), yield this.provider.getTransactionCount(this.getAddress(), e);
    });
  }
  estimateGas(e) {
    return pr(this, void 0, void 0, function* () {
      this._checkProvider("estimateGas");
      const r = yield Pr(this.checkTransaction(e));
      return yield this.provider.estimateGas(r);
    });
  }
  call(e, r) {
    return pr(this, void 0, void 0, function* () {
      this._checkProvider("call");
      const n = yield Pr(this.checkTransaction(e));
      return yield this.provider.call(n, r);
    });
  }
  sendTransaction(e) {
    return pr(this, void 0, void 0, function* () {
      this._checkProvider("sendTransaction");
      const r = yield this.populateTransaction(e), n = yield this.signTransaction(r);
      return yield this.provider.sendTransaction(n);
    });
  }
  getChainId() {
    return pr(this, void 0, void 0, function* () {
      return this._checkProvider("getChainId"), (yield this.provider.getNetwork()).chainId;
    });
  }
  getGasPrice() {
    return pr(this, void 0, void 0, function* () {
      return this._checkProvider("getGasPrice"), yield this.provider.getGasPrice();
    });
  }
  getFeeData() {
    return pr(this, void 0, void 0, function* () {
      return this._checkProvider("getFeeData"), yield this.provider.getFeeData();
    });
  }
  resolveName(e) {
    return pr(this, void 0, void 0, function* () {
      return this._checkProvider("resolveName"), yield this.provider.resolveName(e);
    });
  }
  checkTransaction(e) {
    for (const n in e)
      Um.indexOf(n) === -1 && or.throwArgumentError("invalid transaction key: " + n, "transaction", e);
    const r = nr(e);
    return r.from == null ? r.from = this.getAddress() : r.from = Promise.all([
      Promise.resolve(r.from),
      this.getAddress()
    ]).then((n) => (n[0].toLowerCase() !== n[1].toLowerCase() && or.throwArgumentError("from address mismatch", "transaction", e), n[0])), r;
  }
  populateTransaction(e) {
    return pr(this, void 0, void 0, function* () {
      const r = yield Pr(this.checkTransaction(e));
      r.to != null && (r.to = Promise.resolve(r.to).then((a) => pr(this, void 0, void 0, function* () {
        if (a == null)
          return null;
        const i = yield this.resolveName(a);
        return i == null && or.throwArgumentError("provided ENS name resolves to null", "tx.to", a), i;
      })), r.to.catch((a) => {
      }));
      const n = r.maxFeePerGas != null || r.maxPriorityFeePerGas != null;
      if (r.gasPrice != null && (r.type === 2 || n) ? or.throwArgumentError("eip-1559 transaction do not support gasPrice", "transaction", e) : (r.type === 0 || r.type === 1) && n && or.throwArgumentError("pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "transaction", e), (r.type === 2 || r.type == null) && r.maxFeePerGas != null && r.maxPriorityFeePerGas != null)
        r.type = 2;
      else if (r.type === 0 || r.type === 1)
        r.gasPrice == null && (r.gasPrice = this.getGasPrice());
      else {
        const a = yield this.getFeeData();
        if (r.type == null)
          if (a.maxFeePerGas != null && a.maxPriorityFeePerGas != null)
            if (r.type = 2, r.gasPrice != null) {
              const i = r.gasPrice;
              delete r.gasPrice, r.maxFeePerGas = i, r.maxPriorityFeePerGas = i;
            } else
              r.maxFeePerGas == null && (r.maxFeePerGas = a.maxFeePerGas), r.maxPriorityFeePerGas == null && (r.maxPriorityFeePerGas = a.maxPriorityFeePerGas);
          else
            a.gasPrice != null ? (n && or.throwError("network does not support EIP-1559", Z.errors.UNSUPPORTED_OPERATION, {
              operation: "populateTransaction"
            }), r.gasPrice == null && (r.gasPrice = a.gasPrice), r.type = 0) : or.throwError("failed to get consistent fee data", Z.errors.UNSUPPORTED_OPERATION, {
              operation: "signer.getFeeData"
            });
        else
          r.type === 2 && (r.maxFeePerGas == null && (r.maxFeePerGas = a.maxFeePerGas), r.maxPriorityFeePerGas == null && (r.maxPriorityFeePerGas = a.maxPriorityFeePerGas));
      }
      return r.nonce == null && (r.nonce = this.getTransactionCount("pending")), r.gasLimit == null && (r.gasLimit = this.estimateGas(r).catch((a) => {
        if (Pm.indexOf(a.code) >= 0)
          throw a;
        return or.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", Z.errors.UNPREDICTABLE_GAS_LIMIT, {
          error: a,
          tx: r
        });
      })), r.chainId == null ? r.chainId = this.getChainId() : r.chainId = Promise.all([
        Promise.resolve(r.chainId),
        this.getChainId()
      ]).then((a) => (a[1] !== 0 && a[0] !== a[1] && or.throwArgumentError("chainId address mismatch", "transaction", e), a[0])), yield Pr(r);
    });
  }
  _checkProvider(e) {
    this.provider || or.throwError("missing provider", Z.errors.UNSUPPORTED_OPERATION, {
      operation: e || "_checkProvider"
    });
  }
  static isSigner(e) {
    return !!(e && e._isSigner);
  }
}
class Go extends di {
  constructor(e, r) {
    super(), ie(this, "address", e), ie(this, "provider", r || null);
  }
  getAddress() {
    return Promise.resolve(this.address);
  }
  _fail(e, r) {
    return Promise.resolve().then(() => {
      or.throwError(e, Z.errors.UNSUPPORTED_OPERATION, { operation: r });
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
    return new Go(this.address, e);
  }
}
var zt = {}, He = {}, li = Dd;
function Dd(t, e) {
  if (!t)
    throw new Error(e || "Assertion failed");
}
Dd.equal = function(e, r, n) {
  if (e != r)
    throw new Error(n || "Assertion failed: " + e + " != " + r);
};
var lo = { exports: {} };
typeof Object.create == "function" ? lo.exports = function(e, r) {
  r && (e.super_ = r, e.prototype = Object.create(r.prototype, {
    constructor: {
      value: e,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }));
} : lo.exports = function(e, r) {
  if (r) {
    e.super_ = r;
    var n = function() {
    };
    n.prototype = r.prototype, e.prototype = new n(), e.prototype.constructor = e;
  }
};
var Nm = li, Om = lo.exports;
He.inherits = Om;
function Lm(t, e) {
  return (t.charCodeAt(e) & 64512) !== 55296 || e < 0 || e + 1 >= t.length ? !1 : (t.charCodeAt(e + 1) & 64512) === 56320;
}
function jm(t, e) {
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
        var i = t.charCodeAt(a);
        i < 128 ? r[n++] = i : i < 2048 ? (r[n++] = i >> 6 | 192, r[n++] = i & 63 | 128) : Lm(t, a) ? (i = 65536 + ((i & 1023) << 10) + (t.charCodeAt(++a) & 1023), r[n++] = i >> 18 | 240, r[n++] = i >> 12 & 63 | 128, r[n++] = i >> 6 & 63 | 128, r[n++] = i & 63 | 128) : (r[n++] = i >> 12 | 224, r[n++] = i >> 6 & 63 | 128, r[n++] = i & 63 | 128);
      }
  else
    for (a = 0; a < t.length; a++)
      r[a] = t[a] | 0;
  return r;
}
He.toArray = jm;
function Wm(t) {
  for (var e = "", r = 0; r < t.length; r++)
    e += Fd(t[r].toString(16));
  return e;
}
He.toHex = Wm;
function Bd(t) {
  var e = t >>> 24 | t >>> 8 & 65280 | t << 8 & 16711680 | (t & 255) << 24;
  return e >>> 0;
}
He.htonl = Bd;
function Hm(t, e) {
  for (var r = "", n = 0; n < t.length; n++) {
    var a = t[n];
    e === "little" && (a = Bd(a)), r += Rd(a.toString(16));
  }
  return r;
}
He.toHex32 = Hm;
function Fd(t) {
  return t.length === 1 ? "0" + t : t;
}
He.zero2 = Fd;
function Rd(t) {
  return t.length === 7 ? "0" + t : t.length === 6 ? "00" + t : t.length === 5 ? "000" + t : t.length === 4 ? "0000" + t : t.length === 3 ? "00000" + t : t.length === 2 ? "000000" + t : t.length === 1 ? "0000000" + t : t;
}
He.zero8 = Rd;
function zm(t, e, r, n) {
  var a = r - e;
  Nm(a % 4 === 0);
  for (var i = new Array(a / 4), s = 0, c = e; s < i.length; s++, c += 4) {
    var p;
    n === "big" ? p = t[c] << 24 | t[c + 1] << 16 | t[c + 2] << 8 | t[c + 3] : p = t[c + 3] << 24 | t[c + 2] << 16 | t[c + 1] << 8 | t[c], i[s] = p >>> 0;
  }
  return i;
}
He.join32 = zm;
function Gm(t, e) {
  for (var r = new Array(t.length * 4), n = 0, a = 0; n < t.length; n++, a += 4) {
    var i = t[n];
    e === "big" ? (r[a] = i >>> 24, r[a + 1] = i >>> 16 & 255, r[a + 2] = i >>> 8 & 255, r[a + 3] = i & 255) : (r[a + 3] = i >>> 24, r[a + 2] = i >>> 16 & 255, r[a + 1] = i >>> 8 & 255, r[a] = i & 255);
  }
  return r;
}
He.split32 = Gm;
function $m(t, e) {
  return t >>> e | t << 32 - e;
}
He.rotr32 = $m;
function Vm(t, e) {
  return t << e | t >>> 32 - e;
}
He.rotl32 = Vm;
function Km(t, e) {
  return t + e >>> 0;
}
He.sum32 = Km;
function qm(t, e, r) {
  return t + e + r >>> 0;
}
He.sum32_3 = qm;
function Xm(t, e, r, n) {
  return t + e + r + n >>> 0;
}
He.sum32_4 = Xm;
function Zm(t, e, r, n, a) {
  return t + e + r + n + a >>> 0;
}
He.sum32_5 = Zm;
function Jm(t, e, r, n) {
  var a = t[e], i = t[e + 1], s = n + i >>> 0, c = (s < n ? 1 : 0) + r + a;
  t[e] = c >>> 0, t[e + 1] = s;
}
He.sum64 = Jm;
function Ym(t, e, r, n) {
  var a = e + n >>> 0, i = (a < e ? 1 : 0) + t + r;
  return i >>> 0;
}
He.sum64_hi = Ym;
function Qm(t, e, r, n) {
  var a = e + n;
  return a >>> 0;
}
He.sum64_lo = Qm;
function e2(t, e, r, n, a, i, s, c) {
  var p = 0, x = e;
  x = x + n >>> 0, p += x < e ? 1 : 0, x = x + i >>> 0, p += x < i ? 1 : 0, x = x + c >>> 0, p += x < c ? 1 : 0;
  var y = t + r + a + s + p;
  return y >>> 0;
}
He.sum64_4_hi = e2;
function t2(t, e, r, n, a, i, s, c) {
  var p = e + n + i + c;
  return p >>> 0;
}
He.sum64_4_lo = t2;
function r2(t, e, r, n, a, i, s, c, p, x) {
  var y = 0, C = e;
  C = C + n >>> 0, y += C < e ? 1 : 0, C = C + i >>> 0, y += C < i ? 1 : 0, C = C + c >>> 0, y += C < c ? 1 : 0, C = C + x >>> 0, y += C < x ? 1 : 0;
  var B = t + r + a + s + p + y;
  return B >>> 0;
}
He.sum64_5_hi = r2;
function n2(t, e, r, n, a, i, s, c, p, x) {
  var y = e + n + i + c + x;
  return y >>> 0;
}
He.sum64_5_lo = n2;
function a2(t, e, r) {
  var n = e << 32 - r | t >>> r;
  return n >>> 0;
}
He.rotr64_hi = a2;
function i2(t, e, r) {
  var n = t << 32 - r | e >>> r;
  return n >>> 0;
}
He.rotr64_lo = i2;
function s2(t, e, r) {
  return t >>> r;
}
He.shr64_hi = s2;
function o2(t, e, r) {
  var n = t << 32 - r | e >>> r;
  return n >>> 0;
}
He.shr64_lo = o2;
var Ea = {}, pc = He, c2 = li;
function os() {
  this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
}
Ea.BlockHash = os;
os.prototype.update = function(e, r) {
  if (e = pc.toArray(e, r), this.pending ? this.pending = this.pending.concat(e) : this.pending = e, this.pendingTotal += e.length, this.pending.length >= this._delta8) {
    e = this.pending;
    var n = e.length % this._delta8;
    this.pending = e.slice(e.length - n, e.length), this.pending.length === 0 && (this.pending = null), e = pc.join32(e, 0, e.length - n, this.endian);
    for (var a = 0; a < e.length; a += this._delta32)
      this._update(e, a, a + this._delta32);
  }
  return this;
};
os.prototype.digest = function(e) {
  return this.update(this._pad()), c2(this.pending === null), this._digest(e);
};
os.prototype._pad = function() {
  var e = this.pendingTotal, r = this._delta8, n = r - (e + this.padLength) % r, a = new Array(n + this.padLength);
  a[0] = 128;
  for (var i = 1; i < n; i++)
    a[i] = 0;
  if (e <<= 3, this.endian === "big") {
    for (var s = 8; s < this.padLength; s++)
      a[i++] = 0;
    a[i++] = 0, a[i++] = 0, a[i++] = 0, a[i++] = 0, a[i++] = e >>> 24 & 255, a[i++] = e >>> 16 & 255, a[i++] = e >>> 8 & 255, a[i++] = e & 255;
  } else
    for (a[i++] = e & 255, a[i++] = e >>> 8 & 255, a[i++] = e >>> 16 & 255, a[i++] = e >>> 24 & 255, a[i++] = 0, a[i++] = 0, a[i++] = 0, a[i++] = 0, s = 8; s < this.padLength; s++)
      a[i++] = 0;
  return a;
};
var Ca = {}, Xr = {}, f2 = He, jr = f2.rotr32;
function d2(t, e, r, n) {
  if (t === 0)
    return Md(e, r, n);
  if (t === 1 || t === 3)
    return Td(e, r, n);
  if (t === 2)
    return _d(e, r, n);
}
Xr.ft_1 = d2;
function Md(t, e, r) {
  return t & e ^ ~t & r;
}
Xr.ch32 = Md;
function _d(t, e, r) {
  return t & e ^ t & r ^ e & r;
}
Xr.maj32 = _d;
function Td(t, e, r) {
  return t ^ e ^ r;
}
Xr.p32 = Td;
function l2(t) {
  return jr(t, 2) ^ jr(t, 13) ^ jr(t, 22);
}
Xr.s0_256 = l2;
function h2(t) {
  return jr(t, 6) ^ jr(t, 11) ^ jr(t, 25);
}
Xr.s1_256 = h2;
function u2(t) {
  return jr(t, 7) ^ jr(t, 18) ^ t >>> 3;
}
Xr.g0_256 = u2;
function m2(t) {
  return jr(t, 17) ^ jr(t, 19) ^ t >>> 10;
}
Xr.g1_256 = m2;
var la = He, p2 = Ea, b2 = Xr, _s = la.rotl32, Sa = la.sum32, g2 = la.sum32_5, x2 = b2.ft_1, Ud = p2.BlockHash, y2 = [
  1518500249,
  1859775393,
  2400959708,
  3395469782
];
function $r() {
  if (!(this instanceof $r))
    return new $r();
  Ud.call(this), this.h = [
    1732584193,
    4023233417,
    2562383102,
    271733878,
    3285377520
  ], this.W = new Array(80);
}
la.inherits($r, Ud);
var v2 = $r;
$r.blockSize = 512;
$r.outSize = 160;
$r.hmacStrength = 80;
$r.padLength = 64;
$r.prototype._update = function(e, r) {
  for (var n = this.W, a = 0; a < 16; a++)
    n[a] = e[r + a];
  for (; a < n.length; a++)
    n[a] = _s(n[a - 3] ^ n[a - 8] ^ n[a - 14] ^ n[a - 16], 1);
  var i = this.h[0], s = this.h[1], c = this.h[2], p = this.h[3], x = this.h[4];
  for (a = 0; a < n.length; a++) {
    var y = ~~(a / 20), C = g2(_s(i, 5), x2(y, s, c, p), x, n[a], y2[y]);
    x = p, p = c, c = _s(s, 30), s = i, i = C;
  }
  this.h[0] = Sa(this.h[0], i), this.h[1] = Sa(this.h[1], s), this.h[2] = Sa(this.h[2], c), this.h[3] = Sa(this.h[3], p), this.h[4] = Sa(this.h[4], x);
};
$r.prototype._digest = function(e) {
  return e === "hex" ? la.toHex32(this.h, "big") : la.split32(this.h, "big");
};
var ha = He, w2 = Ea, Ia = Xr, A2 = li, br = ha.sum32, E2 = ha.sum32_4, C2 = ha.sum32_5, I2 = Ia.ch32, k2 = Ia.maj32, S2 = Ia.s0_256, D2 = Ia.s1_256, B2 = Ia.g0_256, F2 = Ia.g1_256, Pd = w2.BlockHash, R2 = [
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
function Vr() {
  if (!(this instanceof Vr))
    return new Vr();
  Pd.call(this), this.h = [
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ], this.k = R2, this.W = new Array(64);
}
ha.inherits(Vr, Pd);
var Nd = Vr;
Vr.blockSize = 512;
Vr.outSize = 256;
Vr.hmacStrength = 192;
Vr.padLength = 64;
Vr.prototype._update = function(e, r) {
  for (var n = this.W, a = 0; a < 16; a++)
    n[a] = e[r + a];
  for (; a < n.length; a++)
    n[a] = E2(F2(n[a - 2]), n[a - 7], B2(n[a - 15]), n[a - 16]);
  var i = this.h[0], s = this.h[1], c = this.h[2], p = this.h[3], x = this.h[4], y = this.h[5], C = this.h[6], B = this.h[7];
  for (A2(this.k.length === n.length), a = 0; a < n.length; a++) {
    var F = C2(B, D2(x), I2(x, y, C), this.k[a], n[a]), R = br(S2(i), k2(i, s, c));
    B = C, C = y, y = x, x = br(p, F), p = c, c = s, s = i, i = br(F, R);
  }
  this.h[0] = br(this.h[0], i), this.h[1] = br(this.h[1], s), this.h[2] = br(this.h[2], c), this.h[3] = br(this.h[3], p), this.h[4] = br(this.h[4], x), this.h[5] = br(this.h[5], y), this.h[6] = br(this.h[6], C), this.h[7] = br(this.h[7], B);
};
Vr.prototype._digest = function(e) {
  return e === "hex" ? ha.toHex32(this.h, "big") : ha.split32(this.h, "big");
};
var ho = He, Od = Nd;
function rn() {
  if (!(this instanceof rn))
    return new rn();
  Od.call(this), this.h = [
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
ho.inherits(rn, Od);
var M2 = rn;
rn.blockSize = 512;
rn.outSize = 224;
rn.hmacStrength = 192;
rn.padLength = 64;
rn.prototype._digest = function(e) {
  return e === "hex" ? ho.toHex32(this.h.slice(0, 7), "big") : ho.split32(this.h.slice(0, 7), "big");
};
var Yt = He, _2 = Ea, T2 = li, Wr = Yt.rotr64_hi, Hr = Yt.rotr64_lo, Ld = Yt.shr64_hi, jd = Yt.shr64_lo, sn = Yt.sum64, Ts = Yt.sum64_hi, Us = Yt.sum64_lo, U2 = Yt.sum64_4_hi, P2 = Yt.sum64_4_lo, N2 = Yt.sum64_5_hi, O2 = Yt.sum64_5_lo, Wd = _2.BlockHash, L2 = [
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
function kr() {
  if (!(this instanceof kr))
    return new kr();
  Wd.call(this), this.h = [
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
  ], this.k = L2, this.W = new Array(160);
}
Yt.inherits(kr, Wd);
var Hd = kr;
kr.blockSize = 1024;
kr.outSize = 512;
kr.hmacStrength = 192;
kr.padLength = 128;
kr.prototype._prepareBlock = function(e, r) {
  for (var n = this.W, a = 0; a < 32; a++)
    n[a] = e[r + a];
  for (; a < n.length; a += 2) {
    var i = Z2(n[a - 4], n[a - 3]), s = J2(n[a - 4], n[a - 3]), c = n[a - 14], p = n[a - 13], x = q2(n[a - 30], n[a - 29]), y = X2(n[a - 30], n[a - 29]), C = n[a - 32], B = n[a - 31];
    n[a] = U2(
      i,
      s,
      c,
      p,
      x,
      y,
      C,
      B
    ), n[a + 1] = P2(
      i,
      s,
      c,
      p,
      x,
      y,
      C,
      B
    );
  }
};
kr.prototype._update = function(e, r) {
  this._prepareBlock(e, r);
  var n = this.W, a = this.h[0], i = this.h[1], s = this.h[2], c = this.h[3], p = this.h[4], x = this.h[5], y = this.h[6], C = this.h[7], B = this.h[8], F = this.h[9], R = this.h[10], M = this.h[11], S = this.h[12], U = this.h[13], N = this.h[14], z = this.h[15];
  T2(this.k.length === n.length);
  for (var O = 0; O < n.length; O += 2) {
    var T = N, G = z, J = V2(B, F), Y = K2(B, F), X = j2(B, F, R, M, S), se = W2(B, F, R, M, S, U), D = this.k[O], u = this.k[O + 1], l = n[O], o = n[O + 1], d = N2(
      T,
      G,
      J,
      Y,
      X,
      se,
      D,
      u,
      l,
      o
    ), g = O2(
      T,
      G,
      J,
      Y,
      X,
      se,
      D,
      u,
      l,
      o
    );
    T = G2(a, i), G = $2(a, i), J = H2(a, i, s, c, p), Y = z2(a, i, s, c, p, x);
    var v = Ts(T, G, J, Y), A = Us(T, G, J, Y);
    N = S, z = U, S = R, U = M, R = B, M = F, B = Ts(y, C, d, g), F = Us(C, C, d, g), y = p, C = x, p = s, x = c, s = a, c = i, a = Ts(d, g, v, A), i = Us(d, g, v, A);
  }
  sn(this.h, 0, a, i), sn(this.h, 2, s, c), sn(this.h, 4, p, x), sn(this.h, 6, y, C), sn(this.h, 8, B, F), sn(this.h, 10, R, M), sn(this.h, 12, S, U), sn(this.h, 14, N, z);
};
kr.prototype._digest = function(e) {
  return e === "hex" ? Yt.toHex32(this.h, "big") : Yt.split32(this.h, "big");
};
function j2(t, e, r, n, a) {
  var i = t & r ^ ~t & a;
  return i < 0 && (i += 4294967296), i;
}
function W2(t, e, r, n, a, i) {
  var s = e & n ^ ~e & i;
  return s < 0 && (s += 4294967296), s;
}
function H2(t, e, r, n, a) {
  var i = t & r ^ t & a ^ r & a;
  return i < 0 && (i += 4294967296), i;
}
function z2(t, e, r, n, a, i) {
  var s = e & n ^ e & i ^ n & i;
  return s < 0 && (s += 4294967296), s;
}
function G2(t, e) {
  var r = Wr(t, e, 28), n = Wr(e, t, 2), a = Wr(e, t, 7), i = r ^ n ^ a;
  return i < 0 && (i += 4294967296), i;
}
function $2(t, e) {
  var r = Hr(t, e, 28), n = Hr(e, t, 2), a = Hr(e, t, 7), i = r ^ n ^ a;
  return i < 0 && (i += 4294967296), i;
}
function V2(t, e) {
  var r = Wr(t, e, 14), n = Wr(t, e, 18), a = Wr(e, t, 9), i = r ^ n ^ a;
  return i < 0 && (i += 4294967296), i;
}
function K2(t, e) {
  var r = Hr(t, e, 14), n = Hr(t, e, 18), a = Hr(e, t, 9), i = r ^ n ^ a;
  return i < 0 && (i += 4294967296), i;
}
function q2(t, e) {
  var r = Wr(t, e, 1), n = Wr(t, e, 8), a = Ld(t, e, 7), i = r ^ n ^ a;
  return i < 0 && (i += 4294967296), i;
}
function X2(t, e) {
  var r = Hr(t, e, 1), n = Hr(t, e, 8), a = jd(t, e, 7), i = r ^ n ^ a;
  return i < 0 && (i += 4294967296), i;
}
function Z2(t, e) {
  var r = Wr(t, e, 19), n = Wr(e, t, 29), a = Ld(t, e, 6), i = r ^ n ^ a;
  return i < 0 && (i += 4294967296), i;
}
function J2(t, e) {
  var r = Hr(t, e, 19), n = Hr(e, t, 29), a = jd(t, e, 6), i = r ^ n ^ a;
  return i < 0 && (i += 4294967296), i;
}
var uo = He, zd = Hd;
function nn() {
  if (!(this instanceof nn))
    return new nn();
  zd.call(this), this.h = [
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
uo.inherits(nn, zd);
var Y2 = nn;
nn.blockSize = 1024;
nn.outSize = 384;
nn.hmacStrength = 192;
nn.padLength = 128;
nn.prototype._digest = function(e) {
  return e === "hex" ? uo.toHex32(this.h.slice(0, 12), "big") : uo.split32(this.h.slice(0, 12), "big");
};
Ca.sha1 = v2;
Ca.sha224 = M2;
Ca.sha256 = Nd;
Ca.sha384 = Y2;
Ca.sha512 = Hd;
var Gd = {}, Hn = He, Q2 = Ea, Ci = Hn.rotl32, bc = Hn.sum32, Da = Hn.sum32_3, gc = Hn.sum32_4, $d = Q2.BlockHash;
function Kr() {
  if (!(this instanceof Kr))
    return new Kr();
  $d.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little";
}
Hn.inherits(Kr, $d);
Gd.ripemd160 = Kr;
Kr.blockSize = 512;
Kr.outSize = 160;
Kr.hmacStrength = 192;
Kr.padLength = 64;
Kr.prototype._update = function(e, r) {
  for (var n = this.h[0], a = this.h[1], i = this.h[2], s = this.h[3], c = this.h[4], p = n, x = a, y = i, C = s, B = c, F = 0; F < 80; F++) {
    var R = bc(
      Ci(
        gc(n, xc(F, a, i, s), e[rp[F] + r], ep(F)),
        ap[F]
      ),
      c
    );
    n = c, c = s, s = Ci(i, 10), i = a, a = R, R = bc(
      Ci(
        gc(p, xc(79 - F, x, y, C), e[np[F] + r], tp(F)),
        ip[F]
      ),
      B
    ), p = B, B = C, C = Ci(y, 10), y = x, x = R;
  }
  R = Da(this.h[1], i, C), this.h[1] = Da(this.h[2], s, B), this.h[2] = Da(this.h[3], c, p), this.h[3] = Da(this.h[4], n, x), this.h[4] = Da(this.h[0], a, y), this.h[0] = R;
};
Kr.prototype._digest = function(e) {
  return e === "hex" ? Hn.toHex32(this.h, "little") : Hn.split32(this.h, "little");
};
function xc(t, e, r, n) {
  return t <= 15 ? e ^ r ^ n : t <= 31 ? e & r | ~e & n : t <= 47 ? (e | ~r) ^ n : t <= 63 ? e & n | r & ~n : e ^ (r | ~n);
}
function ep(t) {
  return t <= 15 ? 0 : t <= 31 ? 1518500249 : t <= 47 ? 1859775393 : t <= 63 ? 2400959708 : 2840853838;
}
function tp(t) {
  return t <= 15 ? 1352829926 : t <= 31 ? 1548603684 : t <= 47 ? 1836072691 : t <= 63 ? 2053994217 : 0;
}
var rp = [
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
], np = [
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
], ap = [
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
], ip = [
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
], sp = He, op = li;
function ua(t, e, r) {
  if (!(this instanceof ua))
    return new ua(t, e, r);
  this.Hash = t, this.blockSize = t.blockSize / 8, this.outSize = t.outSize / 8, this.inner = null, this.outer = null, this._init(sp.toArray(e, r));
}
var cp = ua;
ua.prototype._init = function(e) {
  e.length > this.blockSize && (e = new this.Hash().update(e).digest()), op(e.length <= this.blockSize);
  for (var r = e.length; r < this.blockSize; r++)
    e.push(0);
  for (r = 0; r < e.length; r++)
    e[r] ^= 54;
  for (this.inner = new this.Hash().update(e), r = 0; r < e.length; r++)
    e[r] ^= 106;
  this.outer = new this.Hash().update(e);
};
ua.prototype.update = function(e, r) {
  return this.inner.update(e, r), this;
};
ua.prototype.digest = function(e) {
  return this.outer.update(this.inner.digest()), this.outer.digest(e);
};
(function(t) {
  var e = t;
  e.utils = He, e.common = Ea, e.sha = Ca, e.ripemd = Gd, e.hmac = cp, e.sha1 = e.sha.sha1, e.sha256 = e.sha.sha256, e.sha224 = e.sha.sha224, e.sha384 = e.sha.sha384, e.sha512 = e.sha.sha512, e.ripemd160 = e.ripemd.ripemd160;
})(zt);
function ka(t, e, r) {
  return r = {
    path: e,
    exports: {},
    require: function(n, a) {
      return fp(n, a == null ? r.path : a);
    }
  }, t(r, r.exports), r.exports;
}
function fp() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var $o = Vd;
function Vd(t, e) {
  if (!t)
    throw new Error(e || "Assertion failed");
}
Vd.equal = function(e, r, n) {
  if (e != r)
    throw new Error(n || "Assertion failed: " + e + " != " + r);
};
var wr = ka(function(t, e) {
  var r = e;
  function n(s, c) {
    if (Array.isArray(s))
      return s.slice();
    if (!s)
      return [];
    var p = [];
    if (typeof s != "string") {
      for (var x = 0; x < s.length; x++)
        p[x] = s[x] | 0;
      return p;
    }
    if (c === "hex") {
      s = s.replace(/[^a-z0-9]+/ig, ""), s.length % 2 !== 0 && (s = "0" + s);
      for (var x = 0; x < s.length; x += 2)
        p.push(parseInt(s[x] + s[x + 1], 16));
    } else
      for (var x = 0; x < s.length; x++) {
        var y = s.charCodeAt(x), C = y >> 8, B = y & 255;
        C ? p.push(C, B) : p.push(B);
      }
    return p;
  }
  r.toArray = n;
  function a(s) {
    return s.length === 1 ? "0" + s : s;
  }
  r.zero2 = a;
  function i(s) {
    for (var c = "", p = 0; p < s.length; p++)
      c += a(s[p].toString(16));
    return c;
  }
  r.toHex = i, r.encode = function(c, p) {
    return p === "hex" ? i(c) : c;
  };
}), ar = ka(function(t, e) {
  var r = e;
  r.assert = $o, r.toArray = wr.toArray, r.zero2 = wr.zero2, r.toHex = wr.toHex, r.encode = wr.encode;
  function n(p, x, y) {
    var C = new Array(Math.max(p.bitLength(), y) + 1);
    C.fill(0);
    for (var B = 1 << x + 1, F = p.clone(), R = 0; R < C.length; R++) {
      var M, S = F.andln(B - 1);
      F.isOdd() ? (S > (B >> 1) - 1 ? M = (B >> 1) - S : M = S, F.isubn(M)) : M = 0, C[R] = M, F.iushrn(1);
    }
    return C;
  }
  r.getNAF = n;
  function a(p, x) {
    var y = [
      [],
      []
    ];
    p = p.clone(), x = x.clone();
    for (var C = 0, B = 0, F; p.cmpn(-C) > 0 || x.cmpn(-B) > 0; ) {
      var R = p.andln(3) + C & 3, M = x.andln(3) + B & 3;
      R === 3 && (R = -1), M === 3 && (M = -1);
      var S;
      (R & 1) === 0 ? S = 0 : (F = p.andln(7) + C & 7, (F === 3 || F === 5) && M === 2 ? S = -R : S = R), y[0].push(S);
      var U;
      (M & 1) === 0 ? U = 0 : (F = x.andln(7) + B & 7, (F === 3 || F === 5) && R === 2 ? U = -M : U = M), y[1].push(U), 2 * C === S + 1 && (C = 1 - C), 2 * B === U + 1 && (B = 1 - B), p.iushrn(1), x.iushrn(1);
    }
    return y;
  }
  r.getJSF = a;
  function i(p, x, y) {
    var C = "_" + x;
    p.prototype[x] = function() {
      return this[C] !== void 0 ? this[C] : this[C] = y.call(this);
    };
  }
  r.cachedProperty = i;
  function s(p) {
    return typeof p == "string" ? r.toArray(p, "hex") : p;
  }
  r.parseBytes = s;
  function c(p) {
    return new Oe(p, "hex", "le");
  }
  r.intFromLE = c;
}), Ji = ar.getNAF, dp = ar.getJSF, Yi = ar.assert;
function wn(t, e) {
  this.type = t, this.p = new Oe(e.p, 16), this.red = e.prime ? Oe.red(e.prime) : Oe.mont(this.p), this.zero = new Oe(0).toRed(this.red), this.one = new Oe(1).toRed(this.red), this.two = new Oe(2).toRed(this.red), this.n = e.n && new Oe(e.n, 16), this.g = e.g && this.pointFromJSON(e.g, e.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
  var r = this.n && this.p.div(this.n);
  !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red));
}
var Xn = wn;
wn.prototype.point = function() {
  throw new Error("Not implemented");
};
wn.prototype.validate = function() {
  throw new Error("Not implemented");
};
wn.prototype._fixedNafMul = function(e, r) {
  Yi(e.precomputed);
  var n = e._getDoubles(), a = Ji(r, 1, this._bitLength), i = (1 << n.step + 1) - (n.step % 2 === 0 ? 2 : 1);
  i /= 3;
  var s = [], c, p;
  for (c = 0; c < a.length; c += n.step) {
    p = 0;
    for (var x = c + n.step - 1; x >= c; x--)
      p = (p << 1) + a[x];
    s.push(p);
  }
  for (var y = this.jpoint(null, null, null), C = this.jpoint(null, null, null), B = i; B > 0; B--) {
    for (c = 0; c < s.length; c++)
      p = s[c], p === B ? C = C.mixedAdd(n.points[c]) : p === -B && (C = C.mixedAdd(n.points[c].neg()));
    y = y.add(C);
  }
  return y.toP();
};
wn.prototype._wnafMul = function(e, r) {
  var n = 4, a = e._getNAFPoints(n);
  n = a.wnd;
  for (var i = a.points, s = Ji(r, n, this._bitLength), c = this.jpoint(null, null, null), p = s.length - 1; p >= 0; p--) {
    for (var x = 0; p >= 0 && s[p] === 0; p--)
      x++;
    if (p >= 0 && x++, c = c.dblp(x), p < 0)
      break;
    var y = s[p];
    Yi(y !== 0), e.type === "affine" ? y > 0 ? c = c.mixedAdd(i[y - 1 >> 1]) : c = c.mixedAdd(i[-y - 1 >> 1].neg()) : y > 0 ? c = c.add(i[y - 1 >> 1]) : c = c.add(i[-y - 1 >> 1].neg());
  }
  return e.type === "affine" ? c.toP() : c;
};
wn.prototype._wnafMulAdd = function(e, r, n, a, i) {
  var s = this._wnafT1, c = this._wnafT2, p = this._wnafT3, x = 0, y, C, B;
  for (y = 0; y < a; y++) {
    B = r[y];
    var F = B._getNAFPoints(e);
    s[y] = F.wnd, c[y] = F.points;
  }
  for (y = a - 1; y >= 1; y -= 2) {
    var R = y - 1, M = y;
    if (s[R] !== 1 || s[M] !== 1) {
      p[R] = Ji(n[R], s[R], this._bitLength), p[M] = Ji(n[M], s[M], this._bitLength), x = Math.max(p[R].length, x), x = Math.max(p[M].length, x);
      continue;
    }
    var S = [
      r[R],
      null,
      null,
      r[M]
    ];
    r[R].y.cmp(r[M].y) === 0 ? (S[1] = r[R].add(r[M]), S[2] = r[R].toJ().mixedAdd(r[M].neg())) : r[R].y.cmp(r[M].y.redNeg()) === 0 ? (S[1] = r[R].toJ().mixedAdd(r[M]), S[2] = r[R].add(r[M].neg())) : (S[1] = r[R].toJ().mixedAdd(r[M]), S[2] = r[R].toJ().mixedAdd(r[M].neg()));
    var U = [
      -3,
      -1,
      -5,
      -7,
      0,
      7,
      5,
      1,
      3
    ], N = dp(n[R], n[M]);
    for (x = Math.max(N[0].length, x), p[R] = new Array(x), p[M] = new Array(x), C = 0; C < x; C++) {
      var z = N[0][C] | 0, O = N[1][C] | 0;
      p[R][C] = U[(z + 1) * 3 + (O + 1)], p[M][C] = 0, c[R] = S;
    }
  }
  var T = this.jpoint(null, null, null), G = this._wnafT4;
  for (y = x; y >= 0; y--) {
    for (var J = 0; y >= 0; ) {
      var Y = !0;
      for (C = 0; C < a; C++)
        G[C] = p[C][y] | 0, G[C] !== 0 && (Y = !1);
      if (!Y)
        break;
      J++, y--;
    }
    if (y >= 0 && J++, T = T.dblp(J), y < 0)
      break;
    for (C = 0; C < a; C++) {
      var X = G[C];
      X !== 0 && (X > 0 ? B = c[C][X - 1 >> 1] : X < 0 && (B = c[C][-X - 1 >> 1].neg()), B.type === "affine" ? T = T.mixedAdd(B) : T = T.add(B));
    }
  }
  for (y = 0; y < a; y++)
    c[y] = null;
  return i ? T : T.toP();
};
function hr(t, e) {
  this.curve = t, this.type = e, this.precomputed = null;
}
wn.BasePoint = hr;
hr.prototype.eq = function() {
  throw new Error("Not implemented");
};
hr.prototype.validate = function() {
  return this.curve.validate(this);
};
wn.prototype.decodePoint = function(e, r) {
  e = ar.toArray(e, r);
  var n = this.p.byteLength();
  if ((e[0] === 4 || e[0] === 6 || e[0] === 7) && e.length - 1 === 2 * n) {
    e[0] === 6 ? Yi(e[e.length - 1] % 2 === 0) : e[0] === 7 && Yi(e[e.length - 1] % 2 === 1);
    var a = this.point(
      e.slice(1, 1 + n),
      e.slice(1 + n, 1 + 2 * n)
    );
    return a;
  } else if ((e[0] === 2 || e[0] === 3) && e.length - 1 === n)
    return this.pointFromX(e.slice(1, 1 + n), e[0] === 3);
  throw new Error("Unknown point format");
};
hr.prototype.encodeCompressed = function(e) {
  return this.encode(e, !0);
};
hr.prototype._encode = function(e) {
  var r = this.curve.p.byteLength(), n = this.getX().toArray("be", r);
  return e ? [this.getY().isEven() ? 2 : 3].concat(n) : [4].concat(n, this.getY().toArray("be", r));
};
hr.prototype.encode = function(e, r) {
  return ar.encode(this._encode(r), e);
};
hr.prototype.precompute = function(e) {
  if (this.precomputed)
    return this;
  var r = {
    doubles: null,
    naf: null,
    beta: null
  };
  return r.naf = this._getNAFPoints(8), r.doubles = this._getDoubles(4, e), r.beta = this._getBeta(), this.precomputed = r, this;
};
hr.prototype._hasDoubles = function(e) {
  if (!this.precomputed)
    return !1;
  var r = this.precomputed.doubles;
  return r ? r.points.length >= Math.ceil((e.bitLength() + 1) / r.step) : !1;
};
hr.prototype._getDoubles = function(e, r) {
  if (this.precomputed && this.precomputed.doubles)
    return this.precomputed.doubles;
  for (var n = [this], a = this, i = 0; i < r; i += e) {
    for (var s = 0; s < e; s++)
      a = a.dbl();
    n.push(a);
  }
  return {
    step: e,
    points: n
  };
};
hr.prototype._getNAFPoints = function(e) {
  if (this.precomputed && this.precomputed.naf)
    return this.precomputed.naf;
  for (var r = [this], n = (1 << e) - 1, a = n === 1 ? null : this.dbl(), i = 1; i < n; i++)
    r[i] = r[i - 1].add(a);
  return {
    wnd: e,
    points: r
  };
};
hr.prototype._getBeta = function() {
  return null;
};
hr.prototype.dblp = function(e) {
  for (var r = this, n = 0; n < e; n++)
    r = r.dbl();
  return r;
};
var Vo = ka(function(t) {
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
}), lp = ar.assert;
function ur(t) {
  Xn.call(this, "short", t), this.a = new Oe(t.a, 16).toRed(this.red), this.b = new Oe(t.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = this.a.fromRed().cmpn(0) === 0, this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0, this.endo = this._getEndomorphism(t), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4);
}
Vo(ur, Xn);
var hp = ur;
ur.prototype._getEndomorphism = function(e) {
  if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
    var r, n;
    if (e.beta)
      r = new Oe(e.beta, 16).toRed(this.red);
    else {
      var a = this._getEndoRoots(this.p);
      r = a[0].cmp(a[1]) < 0 ? a[0] : a[1], r = r.toRed(this.red);
    }
    if (e.lambda)
      n = new Oe(e.lambda, 16);
    else {
      var i = this._getEndoRoots(this.n);
      this.g.mul(i[0]).x.cmp(this.g.x.redMul(r)) === 0 ? n = i[0] : (n = i[1], lp(this.g.mul(n).x.cmp(this.g.x.redMul(r)) === 0));
    }
    var s;
    return e.basis ? s = e.basis.map(function(c) {
      return {
        a: new Oe(c.a, 16),
        b: new Oe(c.b, 16)
      };
    }) : s = this._getEndoBasis(n), {
      beta: r,
      lambda: n,
      basis: s
    };
  }
};
ur.prototype._getEndoRoots = function(e) {
  var r = e === this.p ? this.red : Oe.mont(e), n = new Oe(2).toRed(r).redInvm(), a = n.redNeg(), i = new Oe(3).toRed(r).redNeg().redSqrt().redMul(n), s = a.redAdd(i).fromRed(), c = a.redSub(i).fromRed();
  return [s, c];
};
ur.prototype._getEndoBasis = function(e) {
  for (var r = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), n = e, a = this.n.clone(), i = new Oe(1), s = new Oe(0), c = new Oe(0), p = new Oe(1), x, y, C, B, F, R, M, S = 0, U, N; n.cmpn(0) !== 0; ) {
    var z = a.div(n);
    U = a.sub(z.mul(n)), N = c.sub(z.mul(i));
    var O = p.sub(z.mul(s));
    if (!C && U.cmp(r) < 0)
      x = M.neg(), y = i, C = U.neg(), B = N;
    else if (C && ++S === 2)
      break;
    M = U, a = n, n = U, c = i, i = N, p = s, s = O;
  }
  F = U.neg(), R = N;
  var T = C.sqr().add(B.sqr()), G = F.sqr().add(R.sqr());
  return G.cmp(T) >= 0 && (F = x, R = y), C.negative && (C = C.neg(), B = B.neg()), F.negative && (F = F.neg(), R = R.neg()), [
    { a: C, b: B },
    { a: F, b: R }
  ];
};
ur.prototype._endoSplit = function(e) {
  var r = this.endo.basis, n = r[0], a = r[1], i = a.b.mul(e).divRound(this.n), s = n.b.neg().mul(e).divRound(this.n), c = i.mul(n.a), p = s.mul(a.a), x = i.mul(n.b), y = s.mul(a.b), C = e.sub(c).sub(p), B = x.add(y).neg();
  return { k1: C, k2: B };
};
ur.prototype.pointFromX = function(e, r) {
  e = new Oe(e, 16), e.red || (e = e.toRed(this.red));
  var n = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b), a = n.redSqrt();
  if (a.redSqr().redSub(n).cmp(this.zero) !== 0)
    throw new Error("invalid point");
  var i = a.fromRed().isOdd();
  return (r && !i || !r && i) && (a = a.redNeg()), this.point(e, a);
};
ur.prototype.validate = function(e) {
  if (e.inf)
    return !0;
  var r = e.x, n = e.y, a = this.a.redMul(r), i = r.redSqr().redMul(r).redIAdd(a).redIAdd(this.b);
  return n.redSqr().redISub(i).cmpn(0) === 0;
};
ur.prototype._endoWnafMulAdd = function(e, r, n) {
  for (var a = this._endoWnafT1, i = this._endoWnafT2, s = 0; s < e.length; s++) {
    var c = this._endoSplit(r[s]), p = e[s], x = p._getBeta();
    c.k1.negative && (c.k1.ineg(), p = p.neg(!0)), c.k2.negative && (c.k2.ineg(), x = x.neg(!0)), a[s * 2] = p, a[s * 2 + 1] = x, i[s * 2] = c.k1, i[s * 2 + 1] = c.k2;
  }
  for (var y = this._wnafMulAdd(1, a, i, s * 2, n), C = 0; C < s * 2; C++)
    a[C] = null, i[C] = null;
  return y;
};
function Tt(t, e, r, n) {
  Xn.BasePoint.call(this, t, "affine"), e === null && r === null ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new Oe(e, 16), this.y = new Oe(r, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1);
}
Vo(Tt, Xn.BasePoint);
ur.prototype.point = function(e, r, n) {
  return new Tt(this, e, r, n);
};
ur.prototype.pointFromJSON = function(e, r) {
  return Tt.fromJSON(this, e, r);
};
Tt.prototype._getBeta = function() {
  if (!!this.curve.endo) {
    var e = this.precomputed;
    if (e && e.beta)
      return e.beta;
    var r = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
    if (e) {
      var n = this.curve, a = function(i) {
        return n.point(i.x.redMul(n.endo.beta), i.y);
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
Tt.prototype.toJSON = function() {
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
Tt.fromJSON = function(e, r, n) {
  typeof r == "string" && (r = JSON.parse(r));
  var a = e.point(r[0], r[1], n);
  if (!r[2])
    return a;
  function i(c) {
    return e.point(c[0], c[1], n);
  }
  var s = r[2];
  return a.precomputed = {
    beta: null,
    doubles: s.doubles && {
      step: s.doubles.step,
      points: [a].concat(s.doubles.points.map(i))
    },
    naf: s.naf && {
      wnd: s.naf.wnd,
      points: [a].concat(s.naf.points.map(i))
    }
  }, a;
};
Tt.prototype.inspect = function() {
  return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
};
Tt.prototype.isInfinity = function() {
  return this.inf;
};
Tt.prototype.add = function(e) {
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
Tt.prototype.dbl = function() {
  if (this.inf)
    return this;
  var e = this.y.redAdd(this.y);
  if (e.cmpn(0) === 0)
    return this.curve.point(null, null);
  var r = this.curve.a, n = this.x.redSqr(), a = e.redInvm(), i = n.redAdd(n).redIAdd(n).redIAdd(r).redMul(a), s = i.redSqr().redISub(this.x.redAdd(this.x)), c = i.redMul(this.x.redSub(s)).redISub(this.y);
  return this.curve.point(s, c);
};
Tt.prototype.getX = function() {
  return this.x.fromRed();
};
Tt.prototype.getY = function() {
  return this.y.fromRed();
};
Tt.prototype.mul = function(e) {
  return e = new Oe(e, 16), this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e);
};
Tt.prototype.mulAdd = function(e, r, n) {
  var a = [this, r], i = [e, n];
  return this.curve.endo ? this.curve._endoWnafMulAdd(a, i) : this.curve._wnafMulAdd(1, a, i, 2);
};
Tt.prototype.jmulAdd = function(e, r, n) {
  var a = [this, r], i = [e, n];
  return this.curve.endo ? this.curve._endoWnafMulAdd(a, i, !0) : this.curve._wnafMulAdd(1, a, i, 2, !0);
};
Tt.prototype.eq = function(e) {
  return this === e || this.inf === e.inf && (this.inf || this.x.cmp(e.x) === 0 && this.y.cmp(e.y) === 0);
};
Tt.prototype.neg = function(e) {
  if (this.inf)
    return this;
  var r = this.curve.point(this.x, this.y.redNeg());
  if (e && this.precomputed) {
    var n = this.precomputed, a = function(i) {
      return i.neg();
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
Tt.prototype.toJ = function() {
  if (this.inf)
    return this.curve.jpoint(null, null, null);
  var e = this.curve.jpoint(this.x, this.y, this.curve.one);
  return e;
};
function Nt(t, e, r, n) {
  Xn.BasePoint.call(this, t, "jacobian"), e === null && r === null && n === null ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new Oe(0)) : (this.x = new Oe(e, 16), this.y = new Oe(r, 16), this.z = new Oe(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
}
Vo(Nt, Xn.BasePoint);
ur.prototype.jpoint = function(e, r, n) {
  return new Nt(this, e, r, n);
};
Nt.prototype.toP = function() {
  if (this.isInfinity())
    return this.curve.point(null, null);
  var e = this.z.redInvm(), r = e.redSqr(), n = this.x.redMul(r), a = this.y.redMul(r).redMul(e);
  return this.curve.point(n, a);
};
Nt.prototype.neg = function() {
  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
};
Nt.prototype.add = function(e) {
  if (this.isInfinity())
    return e;
  if (e.isInfinity())
    return this;
  var r = e.z.redSqr(), n = this.z.redSqr(), a = this.x.redMul(r), i = e.x.redMul(n), s = this.y.redMul(r.redMul(e.z)), c = e.y.redMul(n.redMul(this.z)), p = a.redSub(i), x = s.redSub(c);
  if (p.cmpn(0) === 0)
    return x.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var y = p.redSqr(), C = y.redMul(p), B = a.redMul(y), F = x.redSqr().redIAdd(C).redISub(B).redISub(B), R = x.redMul(B.redISub(F)).redISub(s.redMul(C)), M = this.z.redMul(e.z).redMul(p);
  return this.curve.jpoint(F, R, M);
};
Nt.prototype.mixedAdd = function(e) {
  if (this.isInfinity())
    return e.toJ();
  if (e.isInfinity())
    return this;
  var r = this.z.redSqr(), n = this.x, a = e.x.redMul(r), i = this.y, s = e.y.redMul(r).redMul(this.z), c = n.redSub(a), p = i.redSub(s);
  if (c.cmpn(0) === 0)
    return p.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var x = c.redSqr(), y = x.redMul(c), C = n.redMul(x), B = p.redSqr().redIAdd(y).redISub(C).redISub(C), F = p.redMul(C.redISub(B)).redISub(i.redMul(y)), R = this.z.redMul(c);
  return this.curve.jpoint(B, F, R);
};
Nt.prototype.dblp = function(e) {
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
  var a = this.curve.a, i = this.curve.tinv, s = this.x, c = this.y, p = this.z, x = p.redSqr().redSqr(), y = c.redAdd(c);
  for (r = 0; r < e; r++) {
    var C = s.redSqr(), B = y.redSqr(), F = B.redSqr(), R = C.redAdd(C).redIAdd(C).redIAdd(a.redMul(x)), M = s.redMul(B), S = R.redSqr().redISub(M.redAdd(M)), U = M.redISub(S), N = R.redMul(U);
    N = N.redIAdd(N).redISub(F);
    var z = y.redMul(p);
    r + 1 < e && (x = x.redMul(F)), s = S, p = z, y = N;
  }
  return this.curve.jpoint(s, y.redMul(i), p);
};
Nt.prototype.dbl = function() {
  return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
};
Nt.prototype._zeroDbl = function() {
  var e, r, n;
  if (this.zOne) {
    var a = this.x.redSqr(), i = this.y.redSqr(), s = i.redSqr(), c = this.x.redAdd(i).redSqr().redISub(a).redISub(s);
    c = c.redIAdd(c);
    var p = a.redAdd(a).redIAdd(a), x = p.redSqr().redISub(c).redISub(c), y = s.redIAdd(s);
    y = y.redIAdd(y), y = y.redIAdd(y), e = x, r = p.redMul(c.redISub(x)).redISub(y), n = this.y.redAdd(this.y);
  } else {
    var C = this.x.redSqr(), B = this.y.redSqr(), F = B.redSqr(), R = this.x.redAdd(B).redSqr().redISub(C).redISub(F);
    R = R.redIAdd(R);
    var M = C.redAdd(C).redIAdd(C), S = M.redSqr(), U = F.redIAdd(F);
    U = U.redIAdd(U), U = U.redIAdd(U), e = S.redISub(R).redISub(R), r = M.redMul(R.redISub(e)).redISub(U), n = this.y.redMul(this.z), n = n.redIAdd(n);
  }
  return this.curve.jpoint(e, r, n);
};
Nt.prototype._threeDbl = function() {
  var e, r, n;
  if (this.zOne) {
    var a = this.x.redSqr(), i = this.y.redSqr(), s = i.redSqr(), c = this.x.redAdd(i).redSqr().redISub(a).redISub(s);
    c = c.redIAdd(c);
    var p = a.redAdd(a).redIAdd(a).redIAdd(this.curve.a), x = p.redSqr().redISub(c).redISub(c);
    e = x;
    var y = s.redIAdd(s);
    y = y.redIAdd(y), y = y.redIAdd(y), r = p.redMul(c.redISub(x)).redISub(y), n = this.y.redAdd(this.y);
  } else {
    var C = this.z.redSqr(), B = this.y.redSqr(), F = this.x.redMul(B), R = this.x.redSub(C).redMul(this.x.redAdd(C));
    R = R.redAdd(R).redIAdd(R);
    var M = F.redIAdd(F);
    M = M.redIAdd(M);
    var S = M.redAdd(M);
    e = R.redSqr().redISub(S), n = this.y.redAdd(this.z).redSqr().redISub(B).redISub(C);
    var U = B.redSqr();
    U = U.redIAdd(U), U = U.redIAdd(U), U = U.redIAdd(U), r = R.redMul(M.redISub(e)).redISub(U);
  }
  return this.curve.jpoint(e, r, n);
};
Nt.prototype._dbl = function() {
  var e = this.curve.a, r = this.x, n = this.y, a = this.z, i = a.redSqr().redSqr(), s = r.redSqr(), c = n.redSqr(), p = s.redAdd(s).redIAdd(s).redIAdd(e.redMul(i)), x = r.redAdd(r);
  x = x.redIAdd(x);
  var y = x.redMul(c), C = p.redSqr().redISub(y.redAdd(y)), B = y.redISub(C), F = c.redSqr();
  F = F.redIAdd(F), F = F.redIAdd(F), F = F.redIAdd(F);
  var R = p.redMul(B).redISub(F), M = n.redAdd(n).redMul(a);
  return this.curve.jpoint(C, R, M);
};
Nt.prototype.trpl = function() {
  if (!this.curve.zeroA)
    return this.dbl().add(this);
  var e = this.x.redSqr(), r = this.y.redSqr(), n = this.z.redSqr(), a = r.redSqr(), i = e.redAdd(e).redIAdd(e), s = i.redSqr(), c = this.x.redAdd(r).redSqr().redISub(e).redISub(a);
  c = c.redIAdd(c), c = c.redAdd(c).redIAdd(c), c = c.redISub(s);
  var p = c.redSqr(), x = a.redIAdd(a);
  x = x.redIAdd(x), x = x.redIAdd(x), x = x.redIAdd(x);
  var y = i.redIAdd(c).redSqr().redISub(s).redISub(p).redISub(x), C = r.redMul(y);
  C = C.redIAdd(C), C = C.redIAdd(C);
  var B = this.x.redMul(p).redISub(C);
  B = B.redIAdd(B), B = B.redIAdd(B);
  var F = this.y.redMul(y.redMul(x.redISub(y)).redISub(c.redMul(p)));
  F = F.redIAdd(F), F = F.redIAdd(F), F = F.redIAdd(F);
  var R = this.z.redAdd(c).redSqr().redISub(n).redISub(p);
  return this.curve.jpoint(B, F, R);
};
Nt.prototype.mul = function(e, r) {
  return e = new Oe(e, r), this.curve._wnafMul(this, e);
};
Nt.prototype.eq = function(e) {
  if (e.type === "affine")
    return this.eq(e.toJ());
  if (this === e)
    return !0;
  var r = this.z.redSqr(), n = e.z.redSqr();
  if (this.x.redMul(n).redISub(e.x.redMul(r)).cmpn(0) !== 0)
    return !1;
  var a = r.redMul(this.z), i = n.redMul(e.z);
  return this.y.redMul(i).redISub(e.y.redMul(a)).cmpn(0) === 0;
};
Nt.prototype.eqXToP = function(e) {
  var r = this.z.redSqr(), n = e.toRed(this.curve.red).redMul(r);
  if (this.x.cmp(n) === 0)
    return !0;
  for (var a = e.clone(), i = this.curve.redN.redMul(r); ; ) {
    if (a.iadd(this.curve.n), a.cmp(this.curve.p) >= 0)
      return !1;
    if (n.redIAdd(i), this.x.cmp(n) === 0)
      return !0;
  }
};
Nt.prototype.inspect = function() {
  return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
};
Nt.prototype.isInfinity = function() {
  return this.z.cmpn(0) === 0;
};
var Ui = ka(function(t, e) {
  var r = e;
  r.base = Xn, r.short = hp, r.mont = null, r.edwards = null;
}), Pi = ka(function(t, e) {
  var r = e, n = ar.assert;
  function a(c) {
    c.type === "short" ? this.curve = new Ui.short(c) : c.type === "edwards" ? this.curve = new Ui.edwards(c) : this.curve = new Ui.mont(c), this.g = this.curve.g, this.n = this.curve.n, this.hash = c.hash, n(this.g.validate(), "Invalid curve"), n(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
  }
  r.PresetCurve = a;
  function i(c, p) {
    Object.defineProperty(r, c, {
      configurable: !0,
      enumerable: !0,
      get: function() {
        var x = new a(p);
        return Object.defineProperty(r, c, {
          configurable: !0,
          enumerable: !0,
          value: x
        }), x;
      }
    });
  }
  i("p192", {
    type: "short",
    prime: "p192",
    p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
    a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
    b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
    n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
    hash: zt.sha256,
    gRed: !1,
    g: [
      "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
      "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"
    ]
  }), i("p224", {
    type: "short",
    prime: "p224",
    p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
    a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
    b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
    n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
    hash: zt.sha256,
    gRed: !1,
    g: [
      "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
      "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"
    ]
  }), i("p256", {
    type: "short",
    prime: null,
    p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
    a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
    b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
    n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
    hash: zt.sha256,
    gRed: !1,
    g: [
      "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
      "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"
    ]
  }), i("p384", {
    type: "short",
    prime: null,
    p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
    a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
    b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
    n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
    hash: zt.sha384,
    gRed: !1,
    g: [
      "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
      "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"
    ]
  }), i("p521", {
    type: "short",
    prime: null,
    p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
    a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
    b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
    n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
    hash: zt.sha512,
    gRed: !1,
    g: [
      "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
      "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"
    ]
  }), i("curve25519", {
    type: "mont",
    prime: "p25519",
    p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
    a: "76d06",
    b: "1",
    n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
    hash: zt.sha256,
    gRed: !1,
    g: [
      "9"
    ]
  }), i("ed25519", {
    type: "edwards",
    prime: "p25519",
    p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
    a: "-1",
    c: "1",
    d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
    n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
    hash: zt.sha256,
    gRed: !1,
    g: [
      "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
      "6666666666666666666666666666666666666666666666666666666666666658"
    ]
  });
  var s;
  try {
    s = null.crash();
  } catch {
    s = void 0;
  }
  i("secp256k1", {
    type: "short",
    prime: "k256",
    p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
    a: "0",
    b: "7",
    n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
    h: "1",
    hash: zt.sha256,
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
      s
    ]
  });
});
function yn(t) {
  if (!(this instanceof yn))
    return new yn(t);
  this.hash = t.hash, this.predResist = !!t.predResist, this.outLen = this.hash.outSize, this.minEntropy = t.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
  var e = wr.toArray(t.entropy, t.entropyEnc || "hex"), r = wr.toArray(t.nonce, t.nonceEnc || "hex"), n = wr.toArray(t.pers, t.persEnc || "hex");
  $o(
    e.length >= this.minEntropy / 8,
    "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
  ), this._init(e, r, n);
}
var Kd = yn;
yn.prototype._init = function(e, r, n) {
  var a = e.concat(r).concat(n);
  this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
  for (var i = 0; i < this.V.length; i++)
    this.K[i] = 0, this.V[i] = 1;
  this._update(a), this._reseed = 1, this.reseedInterval = 281474976710656;
};
yn.prototype._hmac = function() {
  return new zt.hmac(this.hash, this.K);
};
yn.prototype._update = function(e) {
  var r = this._hmac().update(this.V).update([0]);
  e && (r = r.update(e)), this.K = r.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest());
};
yn.prototype.reseed = function(e, r, n, a) {
  typeof r != "string" && (a = n, n = r, r = null), e = wr.toArray(e, r), n = wr.toArray(n, a), $o(
    e.length >= this.minEntropy / 8,
    "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
  ), this._update(e.concat(n || [])), this._reseed = 1;
};
yn.prototype.generate = function(e, r, n, a) {
  if (this._reseed > this.reseedInterval)
    throw new Error("Reseed is required");
  typeof r != "string" && (a = n, n = r, r = null), n && (n = wr.toArray(n, a || "hex"), this._update(n));
  for (var i = []; i.length < e; )
    this.V = this._hmac().update(this.V).digest(), i = i.concat(this.V);
  var s = i.slice(0, e);
  return this._update(n), this._reseed++, wr.encode(s, r);
};
var mo = ar.assert;
function Wt(t, e) {
  this.ec = t, this.priv = null, this.pub = null, e.priv && this._importPrivate(e.priv, e.privEnc), e.pub && this._importPublic(e.pub, e.pubEnc);
}
var Ko = Wt;
Wt.fromPublic = function(e, r, n) {
  return r instanceof Wt ? r : new Wt(e, {
    pub: r,
    pubEnc: n
  });
};
Wt.fromPrivate = function(e, r, n) {
  return r instanceof Wt ? r : new Wt(e, {
    priv: r,
    privEnc: n
  });
};
Wt.prototype.validate = function() {
  var e = this.getPublic();
  return e.isInfinity() ? { result: !1, reason: "Invalid public key" } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? { result: !0, reason: null } : { result: !1, reason: "Public key * N != O" } : { result: !1, reason: "Public key is not a point" };
};
Wt.prototype.getPublic = function(e, r) {
  return typeof e == "string" && (r = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), r ? this.pub.encode(r, e) : this.pub;
};
Wt.prototype.getPrivate = function(e) {
  return e === "hex" ? this.priv.toString(16, 2) : this.priv;
};
Wt.prototype._importPrivate = function(e, r) {
  this.priv = new Oe(e, r || 16), this.priv = this.priv.umod(this.ec.curve.n);
};
Wt.prototype._importPublic = function(e, r) {
  if (e.x || e.y) {
    this.ec.curve.type === "mont" ? mo(e.x, "Need x coordinate") : (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") && mo(e.x && e.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(e.x, e.y);
    return;
  }
  this.pub = this.ec.curve.decodePoint(e, r);
};
Wt.prototype.derive = function(e) {
  return e.validate() || mo(e.validate(), "public point not validated"), e.mul(this.priv).getX();
};
Wt.prototype.sign = function(e, r, n) {
  return this.ec.sign(e, this, r, n);
};
Wt.prototype.verify = function(e, r) {
  return this.ec.verify(e, r, this);
};
Wt.prototype.inspect = function() {
  return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
};
var up = ar.assert;
function cs(t, e) {
  if (t instanceof cs)
    return t;
  this._importDER(t, e) || (up(t.r && t.s, "Signature without r or s"), this.r = new Oe(t.r, 16), this.s = new Oe(t.s, 16), t.recoveryParam === void 0 ? this.recoveryParam = null : this.recoveryParam = t.recoveryParam);
}
var fs = cs;
function mp() {
  this.place = 0;
}
function Ps(t, e) {
  var r = t[e.place++];
  if (!(r & 128))
    return r;
  var n = r & 15;
  if (n === 0 || n > 4)
    return !1;
  for (var a = 0, i = 0, s = e.place; i < n; i++, s++)
    a <<= 8, a |= t[s], a >>>= 0;
  return a <= 127 ? !1 : (e.place = s, a);
}
function yc(t) {
  for (var e = 0, r = t.length - 1; !t[e] && !(t[e + 1] & 128) && e < r; )
    e++;
  return e === 0 ? t : t.slice(e);
}
cs.prototype._importDER = function(e, r) {
  e = ar.toArray(e, r);
  var n = new mp();
  if (e[n.place++] !== 48)
    return !1;
  var a = Ps(e, n);
  if (a === !1 || a + n.place !== e.length || e[n.place++] !== 2)
    return !1;
  var i = Ps(e, n);
  if (i === !1)
    return !1;
  var s = e.slice(n.place, i + n.place);
  if (n.place += i, e[n.place++] !== 2)
    return !1;
  var c = Ps(e, n);
  if (c === !1 || e.length !== c + n.place)
    return !1;
  var p = e.slice(n.place, c + n.place);
  if (s[0] === 0)
    if (s[1] & 128)
      s = s.slice(1);
    else
      return !1;
  if (p[0] === 0)
    if (p[1] & 128)
      p = p.slice(1);
    else
      return !1;
  return this.r = new Oe(s), this.s = new Oe(p), this.recoveryParam = null, !0;
};
function Ns(t, e) {
  if (e < 128) {
    t.push(e);
    return;
  }
  var r = 1 + (Math.log(e) / Math.LN2 >>> 3);
  for (t.push(r | 128); --r; )
    t.push(e >>> (r << 3) & 255);
  t.push(e);
}
cs.prototype.toDER = function(e) {
  var r = this.r.toArray(), n = this.s.toArray();
  for (r[0] & 128 && (r = [0].concat(r)), n[0] & 128 && (n = [0].concat(n)), r = yc(r), n = yc(n); !n[0] && !(n[1] & 128); )
    n = n.slice(1);
  var a = [2];
  Ns(a, r.length), a = a.concat(r), a.push(2), Ns(a, n.length);
  var i = a.concat(n), s = [48];
  return Ns(s, i.length), s = s.concat(i), ar.encode(s, e);
};
var pp = function() {
  throw new Error("unsupported");
}, qd = ar.assert;
function fr(t) {
  if (!(this instanceof fr))
    return new fr(t);
  typeof t == "string" && (qd(
    Object.prototype.hasOwnProperty.call(Pi, t),
    "Unknown curve " + t
  ), t = Pi[t]), t instanceof Pi.PresetCurve && (t = { curve: t }), this.curve = t.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = t.curve.g, this.g.precompute(t.curve.n.bitLength() + 1), this.hash = t.hash || t.curve.hash;
}
var bp = fr;
fr.prototype.keyPair = function(e) {
  return new Ko(this, e);
};
fr.prototype.keyFromPrivate = function(e, r) {
  return Ko.fromPrivate(this, e, r);
};
fr.prototype.keyFromPublic = function(e, r) {
  return Ko.fromPublic(this, e, r);
};
fr.prototype.genKeyPair = function(e) {
  e || (e = {});
  for (var r = new Kd({
    hash: this.hash,
    pers: e.pers,
    persEnc: e.persEnc || "utf8",
    entropy: e.entropy || pp(this.hash.hmacStrength),
    entropyEnc: e.entropy && e.entropyEnc || "utf8",
    nonce: this.n.toArray()
  }), n = this.n.byteLength(), a = this.n.sub(new Oe(2)); ; ) {
    var i = new Oe(r.generate(n));
    if (!(i.cmp(a) > 0))
      return i.iaddn(1), this.keyFromPrivate(i);
  }
};
fr.prototype._truncateToN = function(e, r) {
  var n = e.byteLength() * 8 - this.n.bitLength();
  return n > 0 && (e = e.ushrn(n)), !r && e.cmp(this.n) >= 0 ? e.sub(this.n) : e;
};
fr.prototype.sign = function(e, r, n, a) {
  typeof n == "object" && (a = n, n = null), a || (a = {}), r = this.keyFromPrivate(r, n), e = this._truncateToN(new Oe(e, 16));
  for (var i = this.n.byteLength(), s = r.getPrivate().toArray("be", i), c = e.toArray("be", i), p = new Kd({
    hash: this.hash,
    entropy: s,
    nonce: c,
    pers: a.pers,
    persEnc: a.persEnc || "utf8"
  }), x = this.n.sub(new Oe(1)), y = 0; ; y++) {
    var C = a.k ? a.k(y) : new Oe(p.generate(this.n.byteLength()));
    if (C = this._truncateToN(C, !0), !(C.cmpn(1) <= 0 || C.cmp(x) >= 0)) {
      var B = this.g.mul(C);
      if (!B.isInfinity()) {
        var F = B.getX(), R = F.umod(this.n);
        if (R.cmpn(0) !== 0) {
          var M = C.invm(this.n).mul(R.mul(r.getPrivate()).iadd(e));
          if (M = M.umod(this.n), M.cmpn(0) !== 0) {
            var S = (B.getY().isOdd() ? 1 : 0) | (F.cmp(R) !== 0 ? 2 : 0);
            return a.canonical && M.cmp(this.nh) > 0 && (M = this.n.sub(M), S ^= 1), new fs({ r: R, s: M, recoveryParam: S });
          }
        }
      }
    }
  }
};
fr.prototype.verify = function(e, r, n, a) {
  e = this._truncateToN(new Oe(e, 16)), n = this.keyFromPublic(n, a), r = new fs(r, "hex");
  var i = r.r, s = r.s;
  if (i.cmpn(1) < 0 || i.cmp(this.n) >= 0 || s.cmpn(1) < 0 || s.cmp(this.n) >= 0)
    return !1;
  var c = s.invm(this.n), p = c.mul(e).umod(this.n), x = c.mul(i).umod(this.n), y;
  return this.curve._maxwellTrick ? (y = this.g.jmulAdd(p, n.getPublic(), x), y.isInfinity() ? !1 : y.eqXToP(i)) : (y = this.g.mulAdd(p, n.getPublic(), x), y.isInfinity() ? !1 : y.getX().umod(this.n).cmp(i) === 0);
};
fr.prototype.recoverPubKey = function(t, e, r, n) {
  qd((3 & r) === r, "The recovery param is more than two bits"), e = new fs(e, n);
  var a = this.n, i = new Oe(t), s = e.r, c = e.s, p = r & 1, x = r >> 1;
  if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && x)
    throw new Error("Unable to find sencond key candinate");
  x ? s = this.curve.pointFromX(s.add(this.curve.n), p) : s = this.curve.pointFromX(s, p);
  var y = e.r.invm(a), C = a.sub(i).mul(y).umod(a), B = c.mul(y).umod(a);
  return this.g.mulAdd(C, s, B);
};
fr.prototype.getKeyRecoveryParam = function(t, e, r, n) {
  if (e = new fs(e, n), e.recoveryParam !== null)
    return e.recoveryParam;
  for (var a = 0; a < 4; a++) {
    var i;
    try {
      i = this.recoverPubKey(t, e, a);
    } catch {
      continue;
    }
    if (i.eq(r))
      return a;
  }
  throw new Error("Unable to find valid recovery factor");
};
var gp = ka(function(t, e) {
  var r = e;
  r.version = "6.5.4", r.utils = ar, r.rand = function() {
    throw new Error("unsupported");
  }, r.curve = Ui, r.curves = Pi, r.ec = bp, r.eddsa = null;
}), xp = gp.ec;
const yp = "signing-key/5.7.0", po = new Z(yp);
let Os = null;
function _r() {
  return Os || (Os = new xp("secp256k1")), Os;
}
class Un {
  constructor(e) {
    ie(this, "curve", "secp256k1"), ie(this, "privateKey", fe(e)), Ka(this.privateKey) !== 32 && po.throwArgumentError("invalid private key", "privateKey", "[[ REDACTED ]]");
    const r = _r().keyFromPrivate(ce(this.privateKey));
    ie(this, "publicKey", "0x" + r.getPublic(!1, "hex")), ie(this, "compressedPublicKey", "0x" + r.getPublic(!0, "hex")), ie(this, "_isSigningKey", !0);
  }
  _addPoint(e) {
    const r = _r().keyFromPublic(ce(this.publicKey)), n = _r().keyFromPublic(ce(e));
    return "0x" + r.pub.add(n.pub).encodeCompressed("hex");
  }
  signDigest(e) {
    const r = _r().keyFromPrivate(ce(this.privateKey)), n = ce(e);
    n.length !== 32 && po.throwArgumentError("bad digest length", "digest", e);
    const a = r.sign(n, { canonical: !0 });
    return Kn({
      recoveryParam: a.recoveryParam,
      r: Bt("0x" + a.r.toString(16), 32),
      s: Bt("0x" + a.s.toString(16), 32)
    });
  }
  computeSharedSecret(e) {
    const r = _r().keyFromPrivate(ce(this.privateKey)), n = _r().keyFromPublic(ce(qo(e)));
    return Bt("0x" + r.derive(n.getPublic()).toString(16), 32);
  }
  static isSigningKey(e) {
    return !!(e && e._isSigningKey);
  }
}
function Xd(t, e) {
  const r = Kn(e), n = { r: ce(r.r), s: ce(r.s) };
  return "0x" + _r().recoverPubKey(ce(t), n, r.recoveryParam).encode("hex", !1);
}
function qo(t, e) {
  const r = ce(t);
  if (r.length === 32) {
    const n = new Un(r);
    return e ? "0x" + _r().keyFromPrivate(r).getPublic(!0, "hex") : n.publicKey;
  } else {
    if (r.length === 33)
      return e ? fe(r) : "0x" + _r().keyFromPublic(r).getPublic(!1, "hex");
    if (r.length === 65)
      return e ? "0x" + _r().keyFromPublic(r).getPublic(!0, "hex") : fe(r);
  }
  return po.throwArgumentError("invalid public or private key", "key", "[REDACTED]");
}
const vp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SigningKey: Un,
  recoverPublicKey: Xd,
  computePublicKey: qo
}, Symbol.toStringTag, { value: "Module" })), wp = "transactions/5.7.0", jt = new Z(wp);
var bo;
(function(t) {
  t[t.legacy = 0] = "legacy", t[t.eip2930 = 1] = "eip2930", t[t.eip1559 = 2] = "eip1559";
})(bo || (bo = {}));
function Xo(t) {
  return t === "0x" ? null : gt(t);
}
function Ot(t) {
  return t === "0x" ? od : de.from(t);
}
const Ap = [
  { name: "nonce", maxLength: 32, numeric: !0 },
  { name: "gasPrice", maxLength: 32, numeric: !0 },
  { name: "gasLimit", maxLength: 32, numeric: !0 },
  { name: "to", length: 20 },
  { name: "value", maxLength: 32, numeric: !0 },
  { name: "data" }
], Ep = {
  chainId: !0,
  data: !0,
  gasLimit: !0,
  gasPrice: !0,
  nonce: !0,
  to: !0,
  type: !0,
  value: !0
};
function bn(t) {
  const e = qo(t);
  return gt(tn(bt(tn(e, 1)), 12));
}
function hi(t, e) {
  return bn(Xd(ce(t), e));
}
function Qt(t, e) {
  const r = Lr(de.from(t).toHexString());
  return r.length > 32 && jt.throwArgumentError("invalid length for " + e, "transaction:" + e, t), r;
}
function Ls(t, e) {
  return {
    address: gt(t),
    storageKeys: (e || []).map((r, n) => (Ka(r) !== 32 && jt.throwArgumentError("invalid access list storageKey", `accessList[${t}:${n}]`, r), r.toLowerCase()))
  };
}
function ui(t) {
  if (Array.isArray(t))
    return t.map((r, n) => Array.isArray(r) ? (r.length > 2 && jt.throwArgumentError("access list expected to be [ address, storageKeys[] ]", `value[${n}]`, r), Ls(r[0], r[1])) : Ls(r.address, r.storageKeys));
  const e = Object.keys(t).map((r) => {
    const n = t[r].reduce((a, i) => (a[i] = !0, a), {});
    return Ls(r, Object.keys(n).sort());
  });
  return e.sort((r, n) => r.address.localeCompare(n.address)), e;
}
function Zd(t) {
  return ui(t).map((e) => [e.address, e.storageKeys]);
}
function Jd(t, e) {
  if (t.gasPrice != null) {
    const n = de.from(t.gasPrice), a = de.from(t.maxFeePerGas || 0);
    n.eq(a) || jt.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas", "tx", {
      gasPrice: n,
      maxFeePerGas: a
    });
  }
  const r = [
    Qt(t.chainId || 0, "chainId"),
    Qt(t.nonce || 0, "nonce"),
    Qt(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
    Qt(t.maxFeePerGas || 0, "maxFeePerGas"),
    Qt(t.gasLimit || 0, "gasLimit"),
    t.to != null ? gt(t.to) : "0x",
    Qt(t.value || 0, "value"),
    t.data || "0x",
    Zd(t.accessList || [])
  ];
  if (e) {
    const n = Kn(e);
    r.push(Qt(n.recoveryParam, "recoveryParam")), r.push(Lr(n.r)), r.push(Lr(n.s));
  }
  return pn(["0x02", Wn(r)]);
}
function Yd(t, e) {
  const r = [
    Qt(t.chainId || 0, "chainId"),
    Qt(t.nonce || 0, "nonce"),
    Qt(t.gasPrice || 0, "gasPrice"),
    Qt(t.gasLimit || 0, "gasLimit"),
    t.to != null ? gt(t.to) : "0x",
    Qt(t.value || 0, "value"),
    t.data || "0x",
    Zd(t.accessList || [])
  ];
  if (e) {
    const n = Kn(e);
    r.push(Qt(n.recoveryParam, "recoveryParam")), r.push(Lr(n.r)), r.push(Lr(n.s));
  }
  return pn(["0x01", Wn(r)]);
}
function Cp(t, e) {
  Kf(t, Ep);
  const r = [];
  Ap.forEach(function(s) {
    let c = t[s.name] || [];
    const p = {};
    s.numeric && (p.hexPad = "left"), c = ce(fe(c, p)), s.length && c.length !== s.length && c.length > 0 && jt.throwArgumentError("invalid length for " + s.name, "transaction:" + s.name, c), s.maxLength && (c = Lr(c), c.length > s.maxLength && jt.throwArgumentError("invalid length for " + s.name, "transaction:" + s.name, c)), r.push(fe(c));
  });
  let n = 0;
  if (t.chainId != null ? (n = t.chainId, typeof n != "number" && jt.throwArgumentError("invalid transaction.chainId", "transaction", t)) : e && !ci(e) && e.v > 28 && (n = Math.floor((e.v - 35) / 2)), n !== 0 && (r.push(fe(n)), r.push("0x"), r.push("0x")), !e)
    return Wn(r);
  const a = Kn(e);
  let i = 27 + a.recoveryParam;
  return n !== 0 ? (r.pop(), r.pop(), r.pop(), i += n * 2 + 8, a.v > 28 && a.v !== i && jt.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", e)) : a.v !== i && jt.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", e), r.push(fe(i)), r.push(Lr(ce(a.r))), r.push(Lr(ce(a.s))), Wn(r);
}
function go(t, e) {
  if (t.type == null || t.type === 0)
    return t.accessList != null && jt.throwArgumentError("untyped transactions do not support accessList; include type: 1", "transaction", t), Cp(t, e);
  switch (t.type) {
    case 1:
      return Yd(t, e);
    case 2:
      return Jd(t, e);
  }
  return jt.throwError(`unsupported transaction type: ${t.type}`, Z.errors.UNSUPPORTED_OPERATION, {
    operation: "serializeTransaction",
    transactionType: t.type
  });
}
function Qd(t, e, r) {
  try {
    const n = Ot(e[0]).toNumber();
    if (n !== 0 && n !== 1)
      throw new Error("bad recid");
    t.v = n;
  } catch {
    jt.throwArgumentError("invalid v for transaction type: 1", "v", e[0]);
  }
  t.r = Bt(e[1], 32), t.s = Bt(e[2], 32);
  try {
    const n = bt(r(t));
    t.from = hi(n, { r: t.r, s: t.s, recoveryParam: t.v });
  } catch {
  }
}
function Ip(t) {
  const e = ns(t.slice(1));
  e.length !== 9 && e.length !== 12 && jt.throwArgumentError("invalid component count for transaction type: 2", "payload", fe(t));
  const r = Ot(e[2]), n = Ot(e[3]), a = {
    type: 2,
    chainId: Ot(e[0]).toNumber(),
    nonce: Ot(e[1]).toNumber(),
    maxPriorityFeePerGas: r,
    maxFeePerGas: n,
    gasPrice: null,
    gasLimit: Ot(e[4]),
    to: Xo(e[5]),
    value: Ot(e[6]),
    data: e[7],
    accessList: ui(e[8])
  };
  return e.length === 9 || (a.hash = bt(t), Qd(a, e.slice(9), Jd)), a;
}
function kp(t) {
  const e = ns(t.slice(1));
  e.length !== 8 && e.length !== 11 && jt.throwArgumentError("invalid component count for transaction type: 1", "payload", fe(t));
  const r = {
    type: 1,
    chainId: Ot(e[0]).toNumber(),
    nonce: Ot(e[1]).toNumber(),
    gasPrice: Ot(e[2]),
    gasLimit: Ot(e[3]),
    to: Xo(e[4]),
    value: Ot(e[5]),
    data: e[6],
    accessList: ui(e[7])
  };
  return e.length === 8 || (r.hash = bt(t), Qd(r, e.slice(8), Yd)), r;
}
function Sp(t) {
  const e = ns(t);
  e.length !== 9 && e.length !== 6 && jt.throwArgumentError("invalid raw transaction", "rawTransaction", t);
  const r = {
    nonce: Ot(e[0]).toNumber(),
    gasPrice: Ot(e[1]),
    gasLimit: Ot(e[2]),
    to: Xo(e[3]),
    value: Ot(e[4]),
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
  if (r.r = Bt(e[7], 32), r.s = Bt(e[8], 32), de.from(r.r).isZero() && de.from(r.s).isZero())
    r.chainId = r.v, r.v = 0;
  else {
    r.chainId = Math.floor((r.v - 35) / 2), r.chainId < 0 && (r.chainId = 0);
    let n = r.v - 27;
    const a = e.slice(0, 6);
    r.chainId !== 0 && (a.push(fe(r.chainId)), a.push("0x"), a.push("0x"), n -= r.chainId * 2 + 8);
    const i = bt(Wn(a));
    try {
      r.from = hi(i, { r: fe(r.r), s: fe(r.s), recoveryParam: n });
    } catch {
    }
    r.hash = bt(t);
  }
  return r.type = null, r;
}
function Dp(t) {
  const e = ce(t);
  if (e[0] > 127)
    return Sp(e);
  switch (e[0]) {
    case 1:
      return kp(e);
    case 2:
      return Ip(e);
  }
  return jt.throwError(`unsupported transaction type: ${e[0]}`, Z.errors.UNSUPPORTED_OPERATION, {
    operation: "parseTransaction",
    transactionType: e[0]
  });
}
const Bp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get TransactionTypes() {
    return bo;
  },
  computeAddress: bn,
  recoverAddress: hi,
  accessListify: ui,
  serialize: go,
  parse: Dp
}, Symbol.toStringTag, { value: "Module" })), Fp = "contracts/5.7.0";
var zn = globalThis && globalThis.__awaiter || function(t, e, r, n) {
  function a(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i);
    });
  }
  return new (r || (r = Promise))(function(i, s) {
    function c(y) {
      try {
        x(n.next(y));
      } catch (C) {
        s(C);
      }
    }
    function p(y) {
      try {
        x(n.throw(y));
      } catch (C) {
        s(C);
      }
    }
    function x(y) {
      y.done ? i(y.value) : a(y.value).then(c, p);
    }
    x((n = n.apply(t, e || [])).next());
  });
};
const kt = new Z(Fp);
function Qi(t, e) {
  return zn(this, void 0, void 0, function* () {
    const r = yield e;
    typeof r != "string" && kt.throwArgumentError("invalid address or ENS name", "name", r);
    try {
      return gt(r);
    } catch {
    }
    t || kt.throwError("a provider or signer is needed to resolve ENS names", Z.errors.UNSUPPORTED_OPERATION, {
      operation: "resolveName"
    });
    const n = yield t.resolveName(r);
    return n == null && kt.throwArgumentError("resolver or addr is not configured for ENS name", "name", r), n;
  });
}
function Ni(t, e, r) {
  return zn(this, void 0, void 0, function* () {
    return Array.isArray(r) ? yield Promise.all(r.map((n, a) => Ni(t, Array.isArray(e) ? e[a] : e[n.name], n))) : r.type === "address" ? yield Qi(t, e) : r.type === "tuple" ? yield Ni(t, e, r.components) : r.baseType === "array" ? Array.isArray(e) ? yield Promise.all(e.map((n) => Ni(t, n, r.arrayChildren))) : Promise.reject(kt.makeError("invalid value for array", Z.errors.INVALID_ARGUMENT, {
      argument: "value",
      value: e
    })) : e;
  });
}
function ds(t, e, r) {
  return zn(this, void 0, void 0, function* () {
    let n = {};
    r.length === e.inputs.length + 1 && typeof r[r.length - 1] == "object" && (n = nr(r.pop())), kt.checkArgumentCount(r.length, e.inputs.length, "passed to contract"), t.signer ? n.from ? n.from = Pr({
      override: Qi(t.signer, n.from),
      signer: t.signer.getAddress()
    }).then((x) => zn(this, void 0, void 0, function* () {
      return gt(x.signer) !== x.override && kt.throwError("Contract with a Signer cannot override from", Z.errors.UNSUPPORTED_OPERATION, {
        operation: "overrides.from"
      }), x.override;
    })) : n.from = t.signer.getAddress() : n.from && (n.from = Qi(t.provider, n.from));
    const a = yield Pr({
      args: Ni(t.signer || t.provider, r, e.inputs),
      address: t.resolvedAddress,
      overrides: Pr(n) || {}
    }), i = t.interface.encodeFunctionData(e, a.args), s = {
      data: i,
      to: a.address
    }, c = a.overrides;
    if (c.nonce != null && (s.nonce = de.from(c.nonce).toNumber()), c.gasLimit != null && (s.gasLimit = de.from(c.gasLimit)), c.gasPrice != null && (s.gasPrice = de.from(c.gasPrice)), c.maxFeePerGas != null && (s.maxFeePerGas = de.from(c.maxFeePerGas)), c.maxPriorityFeePerGas != null && (s.maxPriorityFeePerGas = de.from(c.maxPriorityFeePerGas)), c.from != null && (s.from = c.from), c.type != null && (s.type = c.type), c.accessList != null && (s.accessList = ui(c.accessList)), s.gasLimit == null && e.gas != null) {
      let x = 21e3;
      const y = ce(i);
      for (let C = 0; C < y.length; C++)
        x += 4, y[C] && (x += 64);
      s.gasLimit = de.from(e.gas).add(x);
    }
    if (c.value) {
      const x = de.from(c.value);
      !x.isZero() && !e.payable && kt.throwError("non-payable method cannot override value", Z.errors.UNSUPPORTED_OPERATION, {
        operation: "overrides.value",
        value: n.value
      }), s.value = x;
    }
    c.customData && (s.customData = nr(c.customData)), c.ccipReadEnabled && (s.ccipReadEnabled = !!c.ccipReadEnabled), delete n.nonce, delete n.gasLimit, delete n.gasPrice, delete n.from, delete n.value, delete n.type, delete n.accessList, delete n.maxFeePerGas, delete n.maxPriorityFeePerGas, delete n.customData, delete n.ccipReadEnabled;
    const p = Object.keys(n).filter((x) => n[x] != null);
    return p.length && kt.throwError(`cannot override ${p.map((x) => JSON.stringify(x)).join(",")}`, Z.errors.UNSUPPORTED_OPERATION, {
      operation: "overrides",
      overrides: p
    }), s;
  });
}
function Rp(t, e) {
  return function(...r) {
    return ds(t, e, r);
  };
}
function Mp(t, e) {
  const r = t.signer || t.provider;
  return function(...n) {
    return zn(this, void 0, void 0, function* () {
      r || kt.throwError("estimate require a provider or signer", Z.errors.UNSUPPORTED_OPERATION, {
        operation: "estimateGas"
      });
      const a = yield ds(t, e, n);
      return yield r.estimateGas(a);
    });
  };
}
function _p(t, e) {
  const r = e.wait.bind(e);
  e.wait = (n) => r(n).then((a) => (a.events = a.logs.map((i) => {
    let s = Ln(i), c = null;
    try {
      c = t.interface.parseLog(i);
    } catch {
    }
    return c && (s.args = c.args, s.decode = (p, x) => t.interface.decodeEventLog(c.eventFragment, p, x), s.event = c.name, s.eventSignature = c.signature), s.removeListener = () => t.provider, s.getBlock = () => t.provider.getBlock(a.blockHash), s.getTransaction = () => t.provider.getTransaction(a.transactionHash), s.getTransactionReceipt = () => Promise.resolve(a), s;
  }), a));
}
function el(t, e, r) {
  const n = t.signer || t.provider;
  return function(...a) {
    return zn(this, void 0, void 0, function* () {
      let i;
      if (a.length === e.inputs.length + 1 && typeof a[a.length - 1] == "object") {
        const p = nr(a.pop());
        p.blockTag != null && (i = yield p.blockTag), delete p.blockTag, a.push(p);
      }
      t.deployTransaction != null && (yield t._deployed(i));
      const s = yield ds(t, e, a), c = yield n.call(s, i);
      try {
        let p = t.interface.decodeFunctionResult(e, c);
        return r && e.outputs.length === 1 && (p = p[0]), p;
      } catch (p) {
        throw p.code === Z.errors.CALL_EXCEPTION && (p.address = t.address, p.args = a, p.transaction = s), p;
      }
    });
  };
}
function Tp(t, e) {
  return function(...r) {
    return zn(this, void 0, void 0, function* () {
      t.signer || kt.throwError("sending a transaction requires a signer", Z.errors.UNSUPPORTED_OPERATION, {
        operation: "sendTransaction"
      }), t.deployTransaction != null && (yield t._deployed());
      const n = yield ds(t, e, r), a = yield t.signer.sendTransaction(n);
      return _p(t, a), a;
    });
  };
}
function vc(t, e, r) {
  return e.constant ? el(t, e, r) : Tp(t, e);
}
function tl(t) {
  return t.address && (t.topics == null || t.topics.length === 0) ? "*" : (t.address || "*") + "@" + (t.topics ? t.topics.map((e) => Array.isArray(e) ? e.join("|") : e).join(":") : "");
}
class Qa {
  constructor(e, r) {
    ie(this, "tag", e), ie(this, "filter", r), this._listeners = [];
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
class Up extends Qa {
  constructor() {
    super("error", null);
  }
}
class wc extends Qa {
  constructor(e, r, n, a) {
    const i = {
      address: e
    };
    let s = r.getEventTopic(n);
    a ? (s !== a[0] && kt.throwArgumentError("topic mismatch", "topics", a), i.topics = a.slice()) : i.topics = [s], super(tl(i), i), ie(this, "address", e), ie(this, "interface", r), ie(this, "fragment", n);
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
    const r = Yf(e.args);
    if (r.length)
      throw r[0].error;
    const n = (e.args || []).slice();
    return n.push(e), n;
  }
}
class Ac extends Qa {
  constructor(e, r) {
    super("*", { address: e }), ie(this, "address", e), ie(this, "interface", r);
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
class Pp {
  constructor(e, r, n) {
    ie(this, "interface", ta(new.target, "getInterface")(r)), n == null ? (ie(this, "provider", null), ie(this, "signer", null)) : di.isSigner(n) ? (ie(this, "provider", n.provider || null), ie(this, "signer", n)) : ss.isProvider(n) ? (ie(this, "provider", n), ie(this, "signer", null)) : kt.throwArgumentError("invalid signer or provider", "signerOrProvider", n), ie(this, "callStatic", {}), ie(this, "estimateGas", {}), ie(this, "functions", {}), ie(this, "populateTransaction", {}), ie(this, "filters", {});
    {
      const s = {};
      Object.keys(this.interface.events).forEach((c) => {
        const p = this.interface.events[c];
        ie(this.filters, c, (...x) => ({
          address: this.address,
          topics: this.interface.encodeFilterTopics(p, x)
        })), s[p.name] || (s[p.name] = []), s[p.name].push(c);
      }), Object.keys(s).forEach((c) => {
        const p = s[c];
        p.length === 1 ? ie(this.filters, c, this.filters[p[0]]) : kt.warn(`Duplicate definition of ${c} (${p.join(", ")})`);
      });
    }
    if (ie(this, "_runningEvents", {}), ie(this, "_wrappedEmits", {}), e == null && kt.throwArgumentError("invalid contract address or ENS name", "addressOrName", e), ie(this, "address", e), this.provider)
      ie(this, "resolvedAddress", Qi(this.provider, e));
    else
      try {
        ie(this, "resolvedAddress", Promise.resolve(gt(e)));
      } catch {
        kt.throwError("provider is required to use ENS name as contract address", Z.errors.UNSUPPORTED_OPERATION, {
          operation: "new Contract"
        });
      }
    this.resolvedAddress.catch((s) => {
    });
    const a = {}, i = {};
    Object.keys(this.interface.functions).forEach((s) => {
      const c = this.interface.functions[s];
      if (i[s]) {
        kt.warn(`Duplicate ABI entry for ${JSON.stringify(s)}`);
        return;
      }
      i[s] = !0;
      {
        const p = c.name;
        a[`%${p}`] || (a[`%${p}`] = []), a[`%${p}`].push(s);
      }
      this[s] == null && ie(this, s, vc(this, c, !0)), this.functions[s] == null && ie(this.functions, s, vc(this, c, !1)), this.callStatic[s] == null && ie(this.callStatic, s, el(this, c, !0)), this.populateTransaction[s] == null && ie(this.populateTransaction, s, Rp(this, c)), this.estimateGas[s] == null && ie(this.estimateGas, s, Mp(this, c));
    }), Object.keys(a).forEach((s) => {
      const c = a[s];
      if (c.length > 1)
        return;
      s = s.substring(1);
      const p = c[0];
      try {
        this[s] == null && ie(this, s, this[p]);
      } catch {
      }
      this.functions[s] == null && ie(this.functions, s, this.functions[p]), this.callStatic[s] == null && ie(this.callStatic, s, this.callStatic[p]), this.populateTransaction[s] == null && ie(this.populateTransaction, s, this.populateTransaction[p]), this.estimateGas[s] == null && ie(this.estimateGas, s, this.estimateGas[p]);
    });
  }
  static getContractAddress(e) {
    return nd(e);
  }
  static getInterface(e) {
    return fo.isInterface(e) ? e : new fo(e);
  }
  deployed() {
    return this._deployed();
  }
  _deployed(e) {
    return this._deployedPromise || (this.deployTransaction ? this._deployedPromise = this.deployTransaction.wait().then(() => this) : this._deployedPromise = this.provider.getCode(this.address, e).then((r) => (r === "0x" && kt.throwError("contract not deployed", Z.errors.UNSUPPORTED_OPERATION, {
      contractAddress: this.address,
      operation: "getDeployed"
    }), this))), this._deployedPromise;
  }
  fallback(e) {
    this.signer || kt.throwError("sending a transactions require a signer", Z.errors.UNSUPPORTED_OPERATION, { operation: "sendTransaction(fallback)" });
    const r = nr(e || {});
    return ["from", "to"].forEach(function(n) {
      r[n] != null && kt.throwError("cannot override " + n, Z.errors.UNSUPPORTED_OPERATION, { operation: n });
    }), r.to = this.resolvedAddress, this.deployed().then(() => this.signer.sendTransaction(r));
  }
  connect(e) {
    typeof e == "string" && (e = new Go(e, this.provider));
    const r = new this.constructor(this.address, this.interface, e);
    return this.deployTransaction && ie(r, "deployTransaction", this.deployTransaction), r;
  }
  attach(e) {
    return new this.constructor(e, this.interface, this.signer || this.provider);
  }
  static isIndexed(e) {
    return Zi.isIndexed(e);
  }
  _normalizeRunningEvent(e) {
    return this._runningEvents[e.tag] ? this._runningEvents[e.tag] : e;
  }
  _getRunningEvent(e) {
    if (typeof e == "string") {
      if (e === "error")
        return this._normalizeRunningEvent(new Up());
      if (e === "event")
        return this._normalizeRunningEvent(new Qa("event", null));
      if (e === "*")
        return this._normalizeRunningEvent(new Ac(this.address, this.interface));
      const r = this.interface.getEvent(e);
      return this._normalizeRunningEvent(new wc(this.address, this.interface, r));
    }
    if (e.topics && e.topics.length > 0) {
      try {
        const n = e.topics[0];
        if (typeof n != "string")
          throw new Error("invalid topic");
        const a = this.interface.getEvent(n);
        return this._normalizeRunningEvent(new wc(this.address, this.interface, a, e.topics));
      } catch {
      }
      const r = {
        address: this.address,
        topics: e.topics
      };
      return this._normalizeRunningEvent(new Qa(tl(r), r));
    }
    return this._normalizeRunningEvent(new Ac(this.address, this.interface));
  }
  _checkRunningEvents(e) {
    if (e.listenerCount() === 0) {
      delete this._runningEvents[e.tag];
      const r = this._wrappedEmits[e.tag];
      r && e.filter && (this.provider.off(e.filter, r), delete this._wrappedEmits[e.tag]);
    }
  }
  _wrapEvent(e, r, n) {
    const a = Ln(r);
    return a.removeListener = () => {
      !n || (e.removeListener(n), this._checkRunningEvents(e));
    }, a.getBlock = () => this.provider.getBlock(r.blockHash), a.getTransaction = () => this.provider.getTransaction(r.transactionHash), a.getTransactionReceipt = () => this.provider.getTransactionReceipt(r.transactionHash), e.prepareEvent(a), a;
  }
  _addEventListener(e, r, n) {
    if (this.provider || kt.throwError("events require a provider or a signer with a provider", Z.errors.UNSUPPORTED_OPERATION, { operation: "once" }), e.addListener(r, n), this._runningEvents[e.tag] = e, !this._wrappedEmits[e.tag]) {
      const a = (i) => {
        let s = this._wrapEvent(e, i, r);
        if (s.decodeError == null)
          try {
            const c = e.getEmit(s);
            this.emit(e.filter, ...c);
          } catch (c) {
            s.decodeError = c.error;
          }
        e.filter != null && this.emit("event", s), s.decodeError != null && this.emit("error", s.decodeError, s);
      };
      this._wrappedEmits[e.tag] = a, e.filter != null && this.provider.on(e.filter, a);
    }
  }
  queryFilter(e, r, n) {
    const a = this._getRunningEvent(e), i = nr(a.filter);
    return typeof r == "string" && At(r, 32) ? (n != null && kt.throwArgumentError("cannot specify toBlock with blockhash", "toBlock", n), i.blockHash = r) : (i.fromBlock = r != null ? r : 0, i.toBlock = n != null ? n : "latest"), this.provider.getLogs(i).then((s) => s.map((c) => this._wrapEvent(a, c, null)));
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
class Np extends Pp {
}
class Zo {
  constructor(e) {
    ie(this, "alphabet", e), ie(this, "base", e.length), ie(this, "_alphabetMap", {}), ie(this, "_leader", e.charAt(0));
    for (let r = 0; r < e.length; r++)
      this._alphabetMap[e.charAt(r)] = r;
  }
  encode(e) {
    let r = ce(e);
    if (r.length === 0)
      return "";
    let n = [0];
    for (let i = 0; i < r.length; ++i) {
      let s = r[i];
      for (let c = 0; c < n.length; ++c)
        s += n[c] << 8, n[c] = s % this.base, s = s / this.base | 0;
      for (; s > 0; )
        n.push(s % this.base), s = s / this.base | 0;
    }
    let a = "";
    for (let i = 0; r[i] === 0 && i < r.length - 1; ++i)
      a += this._leader;
    for (let i = n.length - 1; i >= 0; --i)
      a += this.alphabet[n[i]];
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
      let i = a;
      for (let s = 0; s < r.length; ++s)
        i += r[s] * this.base, r[s] = i & 255, i >>= 8;
      for (; i > 0; )
        r.push(i & 255), i >>= 8;
    }
    for (let n = 0; e[n] === this._leader && n < e.length - 1; ++n)
      r.push(0);
    return ce(new Uint8Array(r.reverse()));
  }
}
const Op = new Zo("abcdefghijklmnopqrstuvwxyz234567"), Jo = new Zo("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"), Lp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseX: Zo,
  Base32: Op,
  Base58: Jo
}, Symbol.toStringTag, { value: "Module" }));
var ma;
(function(t) {
  t.sha256 = "sha256", t.sha512 = "sha512";
})(ma || (ma = {}));
const jp = "sha2/5.7.0", Wp = new Z(jp);
function rl(t) {
  return "0x" + zt.ripemd160().update(ce(t)).digest("hex");
}
function Gn(t) {
  return "0x" + zt.sha256().update(ce(t)).digest("hex");
}
function Hp(t) {
  return "0x" + zt.sha512().update(ce(t)).digest("hex");
}
function ei(t, e, r) {
  return ma[t] || Wp.throwError("unsupported algorithm " + t, Z.errors.UNSUPPORTED_OPERATION, {
    operation: "hmac",
    algorithm: t
  }), "0x" + zt.hmac(zt[t], ce(e)).update(ce(r)).digest("hex");
}
const zp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  computeHmac: ei,
  ripemd160: rl,
  sha256: Gn,
  sha512: Hp,
  get SupportedAlgorithm() {
    return ma;
  }
}, Symbol.toStringTag, { value: "Module" }));
function Yo(t, e, r, n, a) {
  t = ce(t), e = ce(e);
  let i, s = 1;
  const c = new Uint8Array(n), p = new Uint8Array(e.length + 4);
  p.set(e);
  let x, y;
  for (let C = 1; C <= s; C++) {
    p[e.length] = C >> 24 & 255, p[e.length + 1] = C >> 16 & 255, p[e.length + 2] = C >> 8 & 255, p[e.length + 3] = C & 255;
    let B = ce(ei(a, t, p));
    i || (i = B.length, y = new Uint8Array(i), s = Math.ceil(n / i), x = n - (s - 1) * i), y.set(B);
    for (let M = 1; M < r; M++) {
      B = ce(ei(a, t, B));
      for (let S = 0; S < i; S++)
        y[S] ^= B[S];
    }
    const F = (C - 1) * i, R = C === s ? x : i;
    c.set(ce(y).slice(0, R), F);
  }
  return fe(c);
}
const Gp = "wordlists/5.7.0", $p = new Z(Gp);
class mi {
  constructor(e) {
    $p.checkAbstract(new.target, mi), ie(this, "locale", e);
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
    return un(r.join(`
`) + `
`);
  }
  static register(e, r) {
    r || (r = e.locale);
  }
}
const Vp = "AbandonAbilityAbleAboutAboveAbsentAbsorbAbstractAbsurdAbuseAccessAccidentAccountAccuseAchieveAcidAcousticAcquireAcrossActActionActorActressActualAdaptAddAddictAddressAdjustAdmitAdultAdvanceAdviceAerobicAffairAffordAfraidAgainAgeAgentAgreeAheadAimAirAirportAisleAlarmAlbumAlcoholAlertAlienAllAlleyAllowAlmostAloneAlphaAlreadyAlsoAlterAlwaysAmateurAmazingAmongAmountAmusedAnalystAnchorAncientAngerAngleAngryAnimalAnkleAnnounceAnnualAnotherAnswerAntennaAntiqueAnxietyAnyApartApologyAppearAppleApproveAprilArchArcticAreaArenaArgueArmArmedArmorArmyAroundArrangeArrestArriveArrowArtArtefactArtistArtworkAskAspectAssaultAssetAssistAssumeAsthmaAthleteAtomAttackAttendAttitudeAttractAuctionAuditAugustAuntAuthorAutoAutumnAverageAvocadoAvoidAwakeAwareAwayAwesomeAwfulAwkwardAxisBabyBachelorBaconBadgeBagBalanceBalconyBallBambooBananaBannerBarBarelyBargainBarrelBaseBasicBasketBattleBeachBeanBeautyBecauseBecomeBeefBeforeBeginBehaveBehindBelieveBelowBeltBenchBenefitBestBetrayBetterBetweenBeyondBicycleBidBikeBindBiologyBirdBirthBitterBlackBladeBlameBlanketBlastBleakBlessBlindBloodBlossomBlouseBlueBlurBlushBoardBoatBodyBoilBombBoneBonusBookBoostBorderBoringBorrowBossBottomBounceBoxBoyBracketBrainBrandBrassBraveBreadBreezeBrickBridgeBriefBrightBringBriskBroccoliBrokenBronzeBroomBrotherBrownBrushBubbleBuddyBudgetBuffaloBuildBulbBulkBulletBundleBunkerBurdenBurgerBurstBusBusinessBusyButterBuyerBuzzCabbageCabinCableCactusCageCakeCallCalmCameraCampCanCanalCancelCandyCannonCanoeCanvasCanyonCapableCapitalCaptainCarCarbonCardCargoCarpetCarryCartCaseCashCasinoCastleCasualCatCatalogCatchCategoryCattleCaughtCauseCautionCaveCeilingCeleryCementCensusCenturyCerealCertainChairChalkChampionChangeChaosChapterChargeChaseChatCheapCheckCheeseChefCherryChestChickenChiefChildChimneyChoiceChooseChronicChuckleChunkChurnCigarCinnamonCircleCitizenCityCivilClaimClapClarifyClawClayCleanClerkCleverClickClientCliffClimbClinicClipClockClogCloseClothCloudClownClubClumpClusterClutchCoachCoastCoconutCodeCoffeeCoilCoinCollectColorColumnCombineComeComfortComicCommonCompanyConcertConductConfirmCongressConnectConsiderControlConvinceCookCoolCopperCopyCoralCoreCornCorrectCostCottonCouchCountryCoupleCourseCousinCoverCoyoteCrackCradleCraftCramCraneCrashCraterCrawlCrazyCreamCreditCreekCrewCricketCrimeCrispCriticCropCrossCrouchCrowdCrucialCruelCruiseCrumbleCrunchCrushCryCrystalCubeCultureCupCupboardCuriousCurrentCurtainCurveCushionCustomCuteCycleDadDamageDampDanceDangerDaringDashDaughterDawnDayDealDebateDebrisDecadeDecemberDecideDeclineDecorateDecreaseDeerDefenseDefineDefyDegreeDelayDeliverDemandDemiseDenialDentistDenyDepartDependDepositDepthDeputyDeriveDescribeDesertDesignDeskDespairDestroyDetailDetectDevelopDeviceDevoteDiagramDialDiamondDiaryDiceDieselDietDifferDigitalDignityDilemmaDinnerDinosaurDirectDirtDisagreeDiscoverDiseaseDishDismissDisorderDisplayDistanceDivertDivideDivorceDizzyDoctorDocumentDogDollDolphinDomainDonateDonkeyDonorDoorDoseDoubleDoveDraftDragonDramaDrasticDrawDreamDressDriftDrillDrinkDripDriveDropDrumDryDuckDumbDuneDuringDustDutchDutyDwarfDynamicEagerEagleEarlyEarnEarthEasilyEastEasyEchoEcologyEconomyEdgeEditEducateEffortEggEightEitherElbowElderElectricElegantElementElephantElevatorEliteElseEmbarkEmbodyEmbraceEmergeEmotionEmployEmpowerEmptyEnableEnactEndEndlessEndorseEnemyEnergyEnforceEngageEngineEnhanceEnjoyEnlistEnoughEnrichEnrollEnsureEnterEntireEntryEnvelopeEpisodeEqualEquipEraEraseErodeErosionErrorEruptEscapeEssayEssenceEstateEternalEthicsEvidenceEvilEvokeEvolveExactExampleExcessExchangeExciteExcludeExcuseExecuteExerciseExhaustExhibitExileExistExitExoticExpandExpectExpireExplainExposeExpressExtendExtraEyeEyebrowFabricFaceFacultyFadeFaintFaithFallFalseFameFamilyFamousFanFancyFantasyFarmFashionFatFatalFatherFatigueFaultFavoriteFeatureFebruaryFederalFeeFeedFeelFemaleFenceFestivalFetchFeverFewFiberFictionFieldFigureFileFilmFilterFinalFindFineFingerFinishFireFirmFirstFiscalFishFitFitnessFixFlagFlameFlashFlatFlavorFleeFlightFlipFloatFlockFloorFlowerFluidFlushFlyFoamFocusFogFoilFoldFollowFoodFootForceForestForgetForkFortuneForumForwardFossilFosterFoundFoxFragileFrameFrequentFreshFriendFringeFrogFrontFrostFrownFrozenFruitFuelFunFunnyFurnaceFuryFutureGadgetGainGalaxyGalleryGameGapGarageGarbageGardenGarlicGarmentGasGaspGateGatherGaugeGazeGeneralGeniusGenreGentleGenuineGestureGhostGiantGiftGiggleGingerGiraffeGirlGiveGladGlanceGlareGlassGlideGlimpseGlobeGloomGloryGloveGlowGlueGoatGoddessGoldGoodGooseGorillaGospelGossipGovernGownGrabGraceGrainGrantGrapeGrassGravityGreatGreenGridGriefGritGroceryGroupGrowGruntGuardGuessGuideGuiltGuitarGunGymHabitHairHalfHammerHamsterHandHappyHarborHardHarshHarvestHatHaveHawkHazardHeadHealthHeartHeavyHedgehogHeightHelloHelmetHelpHenHeroHiddenHighHillHintHipHireHistoryHobbyHockeyHoldHoleHolidayHollowHomeHoneyHoodHopeHornHorrorHorseHospitalHostHotelHourHoverHubHugeHumanHumbleHumorHundredHungryHuntHurdleHurryHurtHusbandHybridIceIconIdeaIdentifyIdleIgnoreIllIllegalIllnessImageImitateImmenseImmuneImpactImposeImproveImpulseInchIncludeIncomeIncreaseIndexIndicateIndoorIndustryInfantInflictInformInhaleInheritInitialInjectInjuryInmateInnerInnocentInputInquiryInsaneInsectInsideInspireInstallIntactInterestIntoInvestInviteInvolveIronIslandIsolateIssueItemIvoryJacketJaguarJarJazzJealousJeansJellyJewelJobJoinJokeJourneyJoyJudgeJuiceJumpJungleJuniorJunkJustKangarooKeenKeepKetchupKeyKickKidKidneyKindKingdomKissKitKitchenKiteKittenKiwiKneeKnifeKnockKnowLabLabelLaborLadderLadyLakeLampLanguageLaptopLargeLaterLatinLaughLaundryLavaLawLawnLawsuitLayerLazyLeaderLeafLearnLeaveLectureLeftLegLegalLegendLeisureLemonLendLengthLensLeopardLessonLetterLevelLiarLibertyLibraryLicenseLifeLiftLightLikeLimbLimitLinkLionLiquidListLittleLiveLizardLoadLoanLobsterLocalLockLogicLonelyLongLoopLotteryLoudLoungeLoveLoyalLuckyLuggageLumberLunarLunchLuxuryLyricsMachineMadMagicMagnetMaidMailMainMajorMakeMammalManManageMandateMangoMansionManualMapleMarbleMarchMarginMarineMarketMarriageMaskMassMasterMatchMaterialMathMatrixMatterMaximumMazeMeadowMeanMeasureMeatMechanicMedalMediaMelodyMeltMemberMemoryMentionMenuMercyMergeMeritMerryMeshMessageMetalMethodMiddleMidnightMilkMillionMimicMindMinimumMinorMinuteMiracleMirrorMiseryMissMistakeMixMixedMixtureMobileModelModifyMomMomentMonitorMonkeyMonsterMonthMoonMoralMoreMorningMosquitoMotherMotionMotorMountainMouseMoveMovieMuchMuffinMuleMultiplyMuscleMuseumMushroomMusicMustMutualMyselfMysteryMythNaiveNameNapkinNarrowNastyNationNatureNearNeckNeedNegativeNeglectNeitherNephewNerveNestNetNetworkNeutralNeverNewsNextNiceNightNobleNoiseNomineeNoodleNormalNorthNoseNotableNoteNothingNoticeNovelNowNuclearNumberNurseNutOakObeyObjectObligeObscureObserveObtainObviousOccurOceanOctoberOdorOffOfferOfficeOftenOilOkayOldOliveOlympicOmitOnceOneOnionOnlineOnlyOpenOperaOpinionOpposeOptionOrangeOrbitOrchardOrderOrdinaryOrganOrientOriginalOrphanOstrichOtherOutdoorOuterOutputOutsideOvalOvenOverOwnOwnerOxygenOysterOzonePactPaddlePagePairPalacePalmPandaPanelPanicPantherPaperParadeParentParkParrotPartyPassPatchPathPatientPatrolPatternPausePavePaymentPeacePeanutPearPeasantPelicanPenPenaltyPencilPeoplePepperPerfectPermitPersonPetPhonePhotoPhrasePhysicalPianoPicnicPicturePiecePigPigeonPillPilotPinkPioneerPipePistolPitchPizzaPlacePlanetPlasticPlatePlayPleasePledgePluckPlugPlungePoemPoetPointPolarPolePolicePondPonyPoolPopularPortionPositionPossiblePostPotatoPotteryPovertyPowderPowerPracticePraisePredictPreferPreparePresentPrettyPreventPricePridePrimaryPrintPriorityPrisonPrivatePrizeProblemProcessProduceProfitProgramProjectPromoteProofPropertyProsperProtectProudProvidePublicPuddingPullPulpPulsePumpkinPunchPupilPuppyPurchasePurityPurposePursePushPutPuzzlePyramidQualityQuantumQuarterQuestionQuickQuitQuizQuoteRabbitRaccoonRaceRackRadarRadioRailRainRaiseRallyRampRanchRandomRangeRapidRareRateRatherRavenRawRazorReadyRealReasonRebelRebuildRecallReceiveRecipeRecordRecycleReduceReflectReformRefuseRegionRegretRegularRejectRelaxReleaseReliefRelyRemainRememberRemindRemoveRenderRenewRentReopenRepairRepeatReplaceReportRequireRescueResembleResistResourceResponseResultRetireRetreatReturnReunionRevealReviewRewardRhythmRibRibbonRiceRichRideRidgeRifleRightRigidRingRiotRippleRiskRitualRivalRiverRoadRoastRobotRobustRocketRomanceRoofRookieRoomRoseRotateRoughRoundRouteRoyalRubberRudeRugRuleRunRunwayRuralSadSaddleSadnessSafeSailSaladSalmonSalonSaltSaluteSameSampleSandSatisfySatoshiSauceSausageSaveSayScaleScanScareScatterSceneSchemeSchoolScienceScissorsScorpionScoutScrapScreenScriptScrubSeaSearchSeasonSeatSecondSecretSectionSecuritySeedSeekSegmentSelectSellSeminarSeniorSenseSentenceSeriesServiceSessionSettleSetupSevenShadowShaftShallowShareShedShellSheriffShieldShiftShineShipShiverShockShoeShootShopShortShoulderShoveShrimpShrugShuffleShySiblingSickSideSiegeSightSignSilentSilkSillySilverSimilarSimpleSinceSingSirenSisterSituateSixSizeSkateSketchSkiSkillSkinSkirtSkullSlabSlamSleepSlenderSliceSlideSlightSlimSloganSlotSlowSlushSmallSmartSmileSmokeSmoothSnackSnakeSnapSniffSnowSoapSoccerSocialSockSodaSoftSolarSoldierSolidSolutionSolveSomeoneSongSoonSorrySortSoulSoundSoupSourceSouthSpaceSpareSpatialSpawnSpeakSpecialSpeedSpellSpendSphereSpiceSpiderSpikeSpinSpiritSplitSpoilSponsorSpoonSportSpotSpraySpreadSpringSpySquareSqueezeSquirrelStableStadiumStaffStageStairsStampStandStartStateStaySteakSteelStemStepStereoStickStillStingStockStomachStoneStoolStoryStoveStrategyStreetStrikeStrongStruggleStudentStuffStumbleStyleSubjectSubmitSubwaySuccessSuchSuddenSufferSugarSuggestSuitSummerSunSunnySunsetSuperSupplySupremeSureSurfaceSurgeSurpriseSurroundSurveySuspectSustainSwallowSwampSwapSwarmSwearSweetSwiftSwimSwingSwitchSwordSymbolSymptomSyrupSystemTableTackleTagTailTalentTalkTankTapeTargetTaskTasteTattooTaxiTeachTeamTellTenTenantTennisTentTermTestTextThankThatThemeThenTheoryThereTheyThingThisThoughtThreeThriveThrowThumbThunderTicketTideTigerTiltTimberTimeTinyTipTiredTissueTitleToastTobaccoTodayToddlerToeTogetherToiletTokenTomatoTomorrowToneTongueTonightToolToothTopTopicToppleTorchTornadoTortoiseTossTotalTouristTowardTowerTownToyTrackTradeTrafficTragicTrainTransferTrapTrashTravelTrayTreatTreeTrendTrialTribeTrickTriggerTrimTripTrophyTroubleTruckTrueTrulyTrumpetTrustTruthTryTubeTuitionTumbleTunaTunnelTurkeyTurnTurtleTwelveTwentyTwiceTwinTwistTwoTypeTypicalUglyUmbrellaUnableUnawareUncleUncoverUnderUndoUnfairUnfoldUnhappyUniformUniqueUnitUniverseUnknownUnlockUntilUnusualUnveilUpdateUpgradeUpholdUponUpperUpsetUrbanUrgeUsageUseUsedUsefulUselessUsualUtilityVacantVacuumVagueValidValleyValveVanVanishVaporVariousVastVaultVehicleVelvetVendorVentureVenueVerbVerifyVersionVeryVesselVeteranViableVibrantViciousVictoryVideoViewVillageVintageViolinVirtualVirusVisaVisitVisualVitalVividVocalVoiceVoidVolcanoVolumeVoteVoyageWageWagonWaitWalkWallWalnutWantWarfareWarmWarriorWashWaspWasteWaterWaveWayWealthWeaponWearWeaselWeatherWebWeddingWeekendWeirdWelcomeWestWetWhaleWhatWheatWheelWhenWhereWhipWhisperWideWidthWifeWildWillWinWindowWineWingWinkWinnerWinterWireWisdomWiseWishWitnessWolfWomanWonderWoodWoolWordWorkWorldWorryWorthWrapWreckWrestleWristWriteWrongYardYearYellowYouYoungYouthZebraZeroZoneZoo";
let Wa = null;
function Ec(t) {
  if (Wa == null && (Wa = Vp.replace(/([A-Z])/g, " $1").toLowerCase().substring(1).split(" "), mi.check(t) !== "0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60"))
    throw Wa = null, new Error("BIP39 Wordlist for en (English) FAILED");
}
class Kp extends mi {
  constructor() {
    super("en");
  }
  getWord(e) {
    return Ec(this), Wa[e];
  }
  getWordIndex(e) {
    return Ec(this), Wa.indexOf(e);
  }
}
const nl = new Kp();
mi.register(nl);
const Cc = {
  en: nl
}, qp = "hdnode/5.7.0", ti = new Z(qp), Xp = de.from("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), Zp = _t("Bitcoin seed"), Qn = 2147483648;
function al(t) {
  return (1 << t) - 1 << 8 - t;
}
function Jp(t) {
  return (1 << t) - 1;
}
function Ii(t) {
  return Bt(fe(t), 32);
}
function Ic(t) {
  return Jo.encode(Dt([t, tn(Gn(Gn(t)), 0, 4)]));
}
function Qo(t) {
  if (t == null)
    return Cc.en;
  if (typeof t == "string") {
    const e = Cc[t];
    return e == null && ti.throwArgumentError("unknown locale", "wordlist", t), e;
  }
  return t;
}
const Zn = {}, pa = "m/44'/60'/0'/0/0";
class er {
  constructor(e, r, n, a, i, s, c, p) {
    if (e !== Zn)
      throw new Error("HDNode constructor cannot be called directly");
    if (r) {
      const x = new Un(r);
      ie(this, "privateKey", x.privateKey), ie(this, "publicKey", x.compressedPublicKey);
    } else
      ie(this, "privateKey", null), ie(this, "publicKey", fe(n));
    ie(this, "parentFingerprint", a), ie(this, "fingerprint", tn(rl(Gn(this.publicKey)), 0, 4)), ie(this, "address", bn(this.publicKey)), ie(this, "chainCode", i), ie(this, "index", s), ie(this, "depth", c), p == null ? (ie(this, "mnemonic", null), ie(this, "path", null)) : typeof p == "string" ? (ie(this, "mnemonic", null), ie(this, "path", p)) : (ie(this, "mnemonic", p), ie(this, "path", p.path));
  }
  get extendedKey() {
    if (this.depth >= 256)
      throw new Error("Depth too large!");
    return Ic(Dt([
      this.privateKey != null ? "0x0488ADE4" : "0x0488B21E",
      fe(this.depth),
      this.parentFingerprint,
      Bt(fe(this.index), 4),
      this.chainCode,
      this.privateKey != null ? Dt(["0x00", this.privateKey]) : this.publicKey
    ]));
  }
  neuter() {
    return new er(Zn, null, this.publicKey, this.parentFingerprint, this.chainCode, this.index, this.depth, this.path);
  }
  _derive(e) {
    if (e > 4294967295)
      throw new Error("invalid index - " + String(e));
    let r = this.path;
    r && (r += "/" + (e & ~Qn));
    const n = new Uint8Array(37);
    if (e & Qn) {
      if (!this.privateKey)
        throw new Error("cannot derive child of neutered node");
      n.set(ce(this.privateKey), 1), r && (r += "'");
    } else
      n.set(ce(this.publicKey));
    for (let C = 24; C >= 0; C -= 8)
      n[33 + (C >> 3)] = e >> 24 - C & 255;
    const a = ce(ei(ma.sha512, this.chainCode, n)), i = a.slice(0, 32), s = a.slice(32);
    let c = null, p = null;
    this.privateKey ? c = Ii(de.from(i).add(this.privateKey).mod(Xp)) : p = new Un(fe(i))._addPoint(this.publicKey);
    let x = r;
    const y = this.mnemonic;
    return y && (x = Object.freeze({
      phrase: y.phrase,
      path: r,
      locale: y.locale || "en"
    })), new er(Zn, c, p, this.fingerprint, Ii(s), e, this.depth + 1, x);
  }
  derivePath(e) {
    const r = e.split("/");
    if (r.length === 0 || r[0] === "m" && this.depth !== 0)
      throw new Error("invalid path - " + e);
    r[0] === "m" && r.shift();
    let n = this;
    for (let a = 0; a < r.length; a++) {
      const i = r[a];
      if (i.match(/^[0-9]+'$/)) {
        const s = parseInt(i.substring(0, i.length - 1));
        if (s >= Qn)
          throw new Error("invalid path index - " + i);
        n = n._derive(Qn + s);
      } else if (i.match(/^[0-9]+$/)) {
        const s = parseInt(i);
        if (s >= Qn)
          throw new Error("invalid path index - " + i);
        n = n._derive(s);
      } else
        throw new Error("invalid path component - " + i);
    }
    return n;
  }
  static _fromSeed(e, r) {
    const n = ce(e);
    if (n.length < 16 || n.length > 64)
      throw new Error("invalid seed");
    const a = ce(ei(ma.sha512, Zp, n));
    return new er(Zn, Ii(a.slice(0, 32)), null, "0x00000000", Ii(a.slice(32)), 0, 0, r);
  }
  static fromMnemonic(e, r, n) {
    return n = Qo(n), e = hs(ls(e, n), n), er._fromSeed(il(e, r), {
      phrase: e,
      path: "m",
      locale: n.locale
    });
  }
  static fromSeed(e) {
    return er._fromSeed(e, null);
  }
  static fromExtendedKey(e) {
    const r = Jo.decode(e);
    (r.length !== 82 || Ic(r.slice(0, 78)) !== e) && ti.throwArgumentError("invalid extended key", "extendedKey", "[REDACTED]");
    const n = r[4], a = fe(r.slice(5, 9)), i = parseInt(fe(r.slice(9, 13)).substring(2), 16), s = fe(r.slice(13, 45)), c = r.slice(45, 78);
    switch (fe(r.slice(0, 4))) {
      case "0x0488b21e":
      case "0x043587cf":
        return new er(Zn, null, fe(c), a, s, i, n, null);
      case "0x0488ade4":
      case "0x04358394 ":
        if (c[0] !== 0)
          break;
        return new er(Zn, fe(c.slice(1)), null, a, s, i, n, null);
    }
    return ti.throwArgumentError("invalid extended key", "extendedKey", "[REDACTED]");
  }
}
function il(t, e) {
  e || (e = "");
  const r = _t("mnemonic" + e, Gr.NFKD);
  return Yo(_t(t, Gr.NFKD), r, 2048, 64, "sha512");
}
function ls(t, e) {
  e = Qo(e), ti.checkNormalize();
  const r = e.split(t);
  if (r.length % 3 !== 0)
    throw new Error("invalid mnemonic");
  const n = ce(new Uint8Array(Math.ceil(11 * r.length / 8)));
  let a = 0;
  for (let x = 0; x < r.length; x++) {
    let y = e.getWordIndex(r[x].normalize("NFKD"));
    if (y === -1)
      throw new Error("invalid mnemonic");
    for (let C = 0; C < 11; C++)
      y & 1 << 10 - C && (n[a >> 3] |= 1 << 7 - a % 8), a++;
  }
  const i = 32 * r.length / 3, s = r.length / 3, c = al(s);
  if ((ce(Gn(n.slice(0, i / 8)))[0] & c) !== (n[n.length - 1] & c))
    throw new Error("invalid checksum");
  return fe(n.slice(0, i / 8));
}
function hs(t, e) {
  if (e = Qo(e), t = ce(t), t.length % 4 !== 0 || t.length < 16 || t.length > 32)
    throw new Error("invalid entropy");
  const r = [0];
  let n = 11;
  for (let s = 0; s < t.length; s++)
    n > 8 ? (r[r.length - 1] <<= 8, r[r.length - 1] |= t[s], n -= 8) : (r[r.length - 1] <<= n, r[r.length - 1] |= t[s] >> 8 - n, r.push(t[s] & Jp(8 - n)), n += 3);
  const a = t.length / 4, i = ce(Gn(t))[0] & al(a);
  return r[r.length - 1] <<= a, r[r.length - 1] |= i >> 8 - a, e.join(r.map((s) => e.getWord(s)));
}
function Yp(t, e) {
  try {
    return ls(t, e), !0;
  } catch {
  }
  return !1;
}
function Qp(t) {
  return (typeof t != "number" || t < 0 || t >= Qn || t % 1) && ti.throwArgumentError("invalid account index", "index", t), `m/44'/60'/${t}'/0/0`;
}
const e3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  defaultPath: pa,
  HDNode: er,
  mnemonicToSeed: il,
  mnemonicToEntropy: ls,
  entropyToMnemonic: hs,
  isValidMnemonic: Yp,
  getAccountPath: Qp
}, Symbol.toStringTag, { value: "Module" })), t3 = "random/5.7.0", xo = new Z(t3);
function r3() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("unable to locate global object");
}
const kc = r3();
let Oi = kc.crypto || kc.msCrypto;
(!Oi || !Oi.getRandomValues) && (xo.warn("WARNING: Missing strong random number source"), Oi = {
  getRandomValues: function(t) {
    return xo.throwError("no secure random source avaialble", Z.errors.UNSUPPORTED_OPERATION, {
      operation: "crypto.getRandomValues"
    });
  }
});
function na(t) {
  (t <= 0 || t > 1024 || t % 1 || t != t) && xo.throwArgumentError("invalid length", "length", t);
  const e = new Uint8Array(t);
  return Oi.getRandomValues(e), ce(e);
}
function n3(t) {
  t = t.slice();
  for (let e = t.length - 1; e > 0; e--) {
    const r = Math.floor(Math.random() * (e + 1)), n = t[e];
    t[e] = t[r], t[r] = n;
  }
  return t;
}
const a3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  randomBytes: na,
  shuffled: n3
}, Symbol.toStringTag, { value: "Module" }));
var sl = { exports: {} };
(function(t, e) {
  (function(r) {
    function n(m) {
      return parseInt(m) === m;
    }
    function a(m) {
      if (!n(m.length))
        return !1;
      for (var f = 0; f < m.length; f++)
        if (!n(m[f]) || m[f] < 0 || m[f] > 255)
          return !1;
      return !0;
    }
    function i(m, f) {
      if (m.buffer && ArrayBuffer.isView(m) && m.name === "Uint8Array")
        return f && (m.slice ? m = m.slice() : m = Array.prototype.slice.call(m)), m;
      if (Array.isArray(m)) {
        if (!a(m))
          throw new Error("Array contains invalid value: " + m);
        return new Uint8Array(m);
      }
      if (n(m.length) && a(m))
        return new Uint8Array(m);
      throw new Error("unsupported array-like object");
    }
    function s(m) {
      return new Uint8Array(m);
    }
    function c(m, f, E, k, b) {
      (k != null || b != null) && (m.slice ? m = m.slice(k, b) : m = Array.prototype.slice.call(m, k, b)), f.set(m, E);
    }
    var p = function() {
      function m(E) {
        var k = [], b = 0;
        for (E = encodeURI(E); b < E.length; ) {
          var I = E.charCodeAt(b++);
          I === 37 ? (k.push(parseInt(E.substr(b, 2), 16)), b += 2) : k.push(I);
        }
        return i(k);
      }
      function f(E) {
        for (var k = [], b = 0; b < E.length; ) {
          var I = E[b];
          I < 128 ? (k.push(String.fromCharCode(I)), b++) : I > 191 && I < 224 ? (k.push(String.fromCharCode((I & 31) << 6 | E[b + 1] & 63)), b += 2) : (k.push(String.fromCharCode((I & 15) << 12 | (E[b + 1] & 63) << 6 | E[b + 2] & 63)), b += 3);
        }
        return k.join("");
      }
      return {
        toBytes: m,
        fromBytes: f
      };
    }(), x = function() {
      function m(k) {
        for (var b = [], I = 0; I < k.length; I += 2)
          b.push(parseInt(k.substr(I, 2), 16));
        return b;
      }
      var f = "0123456789abcdef";
      function E(k) {
        for (var b = [], I = 0; I < k.length; I++) {
          var L = k[I];
          b.push(f[(L & 240) >> 4] + f[L & 15]);
        }
        return b.join("");
      }
      return {
        toBytes: m,
        fromBytes: E
      };
    }(), y = { 16: 10, 24: 12, 32: 14 }, C = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145], B = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22], F = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125], R = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986], M = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766], S = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126], U = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436], N = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890], z = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935], O = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600], T = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480], G = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795], J = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855], Y = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150], X = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];
    function se(m) {
      for (var f = [], E = 0; E < m.length; E += 4)
        f.push(
          m[E] << 24 | m[E + 1] << 16 | m[E + 2] << 8 | m[E + 3]
        );
      return f;
    }
    var D = function(m) {
      if (!(this instanceof D))
        throw Error("AES must be instanitated with `new`");
      Object.defineProperty(this, "key", {
        value: i(m, !0)
      }), this._prepare();
    };
    D.prototype._prepare = function() {
      var m = y[this.key.length];
      if (m == null)
        throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
      this._Ke = [], this._Kd = [];
      for (var f = 0; f <= m; f++)
        this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
      for (var E = (m + 1) * 4, k = this.key.length / 4, b = se(this.key), I, f = 0; f < k; f++)
        I = f >> 2, this._Ke[I][f % 4] = b[f], this._Kd[m - I][f % 4] = b[f];
      for (var L = 0, P = k, H; P < E; ) {
        if (H = b[k - 1], b[0] ^= B[H >> 16 & 255] << 24 ^ B[H >> 8 & 255] << 16 ^ B[H & 255] << 8 ^ B[H >> 24 & 255] ^ C[L] << 24, L += 1, k != 8)
          for (var f = 1; f < k; f++)
            b[f] ^= b[f - 1];
        else {
          for (var f = 1; f < k / 2; f++)
            b[f] ^= b[f - 1];
          H = b[k / 2 - 1], b[k / 2] ^= B[H & 255] ^ B[H >> 8 & 255] << 8 ^ B[H >> 16 & 255] << 16 ^ B[H >> 24 & 255] << 24;
          for (var f = k / 2 + 1; f < k; f++)
            b[f] ^= b[f - 1];
        }
        for (var f = 0, $, V; f < k && P < E; )
          $ = P >> 2, V = P % 4, this._Ke[$][V] = b[f], this._Kd[m - $][V] = b[f++], P++;
      }
      for (var $ = 1; $ < m; $++)
        for (var V = 0; V < 4; V++)
          H = this._Kd[$][V], this._Kd[$][V] = G[H >> 24 & 255] ^ J[H >> 16 & 255] ^ Y[H >> 8 & 255] ^ X[H & 255];
    }, D.prototype.encrypt = function(m) {
      if (m.length != 16)
        throw new Error("invalid plaintext size (must be 16 bytes)");
      for (var f = this._Ke.length - 1, E = [0, 0, 0, 0], k = se(m), b = 0; b < 4; b++)
        k[b] ^= this._Ke[0][b];
      for (var I = 1; I < f; I++) {
        for (var b = 0; b < 4; b++)
          E[b] = R[k[b] >> 24 & 255] ^ M[k[(b + 1) % 4] >> 16 & 255] ^ S[k[(b + 2) % 4] >> 8 & 255] ^ U[k[(b + 3) % 4] & 255] ^ this._Ke[I][b];
        k = E.slice();
      }
      for (var L = s(16), P, b = 0; b < 4; b++)
        P = this._Ke[f][b], L[4 * b] = (B[k[b] >> 24 & 255] ^ P >> 24) & 255, L[4 * b + 1] = (B[k[(b + 1) % 4] >> 16 & 255] ^ P >> 16) & 255, L[4 * b + 2] = (B[k[(b + 2) % 4] >> 8 & 255] ^ P >> 8) & 255, L[4 * b + 3] = (B[k[(b + 3) % 4] & 255] ^ P) & 255;
      return L;
    }, D.prototype.decrypt = function(m) {
      if (m.length != 16)
        throw new Error("invalid ciphertext size (must be 16 bytes)");
      for (var f = this._Kd.length - 1, E = [0, 0, 0, 0], k = se(m), b = 0; b < 4; b++)
        k[b] ^= this._Kd[0][b];
      for (var I = 1; I < f; I++) {
        for (var b = 0; b < 4; b++)
          E[b] = N[k[b] >> 24 & 255] ^ z[k[(b + 3) % 4] >> 16 & 255] ^ O[k[(b + 2) % 4] >> 8 & 255] ^ T[k[(b + 1) % 4] & 255] ^ this._Kd[I][b];
        k = E.slice();
      }
      for (var L = s(16), P, b = 0; b < 4; b++)
        P = this._Kd[f][b], L[4 * b] = (F[k[b] >> 24 & 255] ^ P >> 24) & 255, L[4 * b + 1] = (F[k[(b + 3) % 4] >> 16 & 255] ^ P >> 16) & 255, L[4 * b + 2] = (F[k[(b + 2) % 4] >> 8 & 255] ^ P >> 8) & 255, L[4 * b + 3] = (F[k[(b + 1) % 4] & 255] ^ P) & 255;
      return L;
    };
    var u = function(m) {
      if (!(this instanceof u))
        throw Error("AES must be instanitated with `new`");
      this.description = "Electronic Code Block", this.name = "ecb", this._aes = new D(m);
    };
    u.prototype.encrypt = function(m) {
      if (m = i(m), m.length % 16 !== 0)
        throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
      for (var f = s(m.length), E = s(16), k = 0; k < m.length; k += 16)
        c(m, E, 0, k, k + 16), E = this._aes.encrypt(E), c(E, f, k);
      return f;
    }, u.prototype.decrypt = function(m) {
      if (m = i(m), m.length % 16 !== 0)
        throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
      for (var f = s(m.length), E = s(16), k = 0; k < m.length; k += 16)
        c(m, E, 0, k, k + 16), E = this._aes.decrypt(E), c(E, f, k);
      return f;
    };
    var l = function(m, f) {
      if (!(this instanceof l))
        throw Error("AES must be instanitated with `new`");
      if (this.description = "Cipher Block Chaining", this.name = "cbc", !f)
        f = s(16);
      else if (f.length != 16)
        throw new Error("invalid initialation vector size (must be 16 bytes)");
      this._lastCipherblock = i(f, !0), this._aes = new D(m);
    };
    l.prototype.encrypt = function(m) {
      if (m = i(m), m.length % 16 !== 0)
        throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
      for (var f = s(m.length), E = s(16), k = 0; k < m.length; k += 16) {
        c(m, E, 0, k, k + 16);
        for (var b = 0; b < 16; b++)
          E[b] ^= this._lastCipherblock[b];
        this._lastCipherblock = this._aes.encrypt(E), c(this._lastCipherblock, f, k);
      }
      return f;
    }, l.prototype.decrypt = function(m) {
      if (m = i(m), m.length % 16 !== 0)
        throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
      for (var f = s(m.length), E = s(16), k = 0; k < m.length; k += 16) {
        c(m, E, 0, k, k + 16), E = this._aes.decrypt(E);
        for (var b = 0; b < 16; b++)
          f[k + b] = E[b] ^ this._lastCipherblock[b];
        c(m, this._lastCipherblock, 0, k, k + 16);
      }
      return f;
    };
    var o = function(m, f, E) {
      if (!(this instanceof o))
        throw Error("AES must be instanitated with `new`");
      if (this.description = "Cipher Feedback", this.name = "cfb", !f)
        f = s(16);
      else if (f.length != 16)
        throw new Error("invalid initialation vector size (must be 16 size)");
      E || (E = 1), this.segmentSize = E, this._shiftRegister = i(f, !0), this._aes = new D(m);
    };
    o.prototype.encrypt = function(m) {
      if (m.length % this.segmentSize != 0)
        throw new Error("invalid plaintext size (must be segmentSize bytes)");
      for (var f = i(m, !0), E, k = 0; k < f.length; k += this.segmentSize) {
        E = this._aes.encrypt(this._shiftRegister);
        for (var b = 0; b < this.segmentSize; b++)
          f[k + b] ^= E[b];
        c(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), c(f, this._shiftRegister, 16 - this.segmentSize, k, k + this.segmentSize);
      }
      return f;
    }, o.prototype.decrypt = function(m) {
      if (m.length % this.segmentSize != 0)
        throw new Error("invalid ciphertext size (must be segmentSize bytes)");
      for (var f = i(m, !0), E, k = 0; k < f.length; k += this.segmentSize) {
        E = this._aes.encrypt(this._shiftRegister);
        for (var b = 0; b < this.segmentSize; b++)
          f[k + b] ^= E[b];
        c(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), c(m, this._shiftRegister, 16 - this.segmentSize, k, k + this.segmentSize);
      }
      return f;
    };
    var d = function(m, f) {
      if (!(this instanceof d))
        throw Error("AES must be instanitated with `new`");
      if (this.description = "Output Feedback", this.name = "ofb", !f)
        f = s(16);
      else if (f.length != 16)
        throw new Error("invalid initialation vector size (must be 16 bytes)");
      this._lastPrecipher = i(f, !0), this._lastPrecipherIndex = 16, this._aes = new D(m);
    };
    d.prototype.encrypt = function(m) {
      for (var f = i(m, !0), E = 0; E < f.length; E++)
        this._lastPrecipherIndex === 16 && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0), f[E] ^= this._lastPrecipher[this._lastPrecipherIndex++];
      return f;
    }, d.prototype.decrypt = d.prototype.encrypt;
    var g = function(m) {
      if (!(this instanceof g))
        throw Error("Counter must be instanitated with `new`");
      m !== 0 && !m && (m = 1), typeof m == "number" ? (this._counter = s(16), this.setValue(m)) : this.setBytes(m);
    };
    g.prototype.setValue = function(m) {
      if (typeof m != "number" || parseInt(m) != m)
        throw new Error("invalid counter value (must be an integer)");
      for (var f = 15; f >= 0; --f)
        this._counter[f] = m % 256, m = m >> 8;
    }, g.prototype.setBytes = function(m) {
      if (m = i(m, !0), m.length != 16)
        throw new Error("invalid counter bytes size (must be 16 bytes)");
      this._counter = m;
    }, g.prototype.increment = function() {
      for (var m = 15; m >= 0; m--)
        if (this._counter[m] === 255)
          this._counter[m] = 0;
        else {
          this._counter[m]++;
          break;
        }
    };
    var v = function(m, f) {
      if (!(this instanceof v))
        throw Error("AES must be instanitated with `new`");
      this.description = "Counter", this.name = "ctr", f instanceof g || (f = new g(f)), this._counter = f, this._remainingCounter = null, this._remainingCounterIndex = 16, this._aes = new D(m);
    };
    v.prototype.encrypt = function(m) {
      for (var f = i(m, !0), E = 0; E < f.length; E++)
        this._remainingCounterIndex === 16 && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()), f[E] ^= this._remainingCounter[this._remainingCounterIndex++];
      return f;
    }, v.prototype.decrypt = v.prototype.encrypt;
    function A(m) {
      m = i(m, !0);
      var f = 16 - m.length % 16, E = s(m.length + f);
      c(m, E);
      for (var k = m.length; k < E.length; k++)
        E[k] = f;
      return E;
    }
    function w(m) {
      if (m = i(m, !0), m.length < 16)
        throw new Error("PKCS#7 invalid length");
      var f = m[m.length - 1];
      if (f > 16)
        throw new Error("PKCS#7 padding byte out of range");
      for (var E = m.length - f, k = 0; k < f; k++)
        if (m[E + k] !== f)
          throw new Error("PKCS#7 invalid padding byte");
      var b = s(E);
      return c(m, b, 0, 0, E), b;
    }
    var h = {
      AES: D,
      Counter: g,
      ModeOfOperation: {
        ecb: u,
        cbc: l,
        cfb: o,
        ofb: d,
        ctr: v
      },
      utils: {
        hex: x,
        utf8: p
      },
      padding: {
        pkcs7: {
          pad: A,
          strip: w
        }
      },
      _arrayTest: {
        coerceArray: i,
        createArray: s,
        copyArray: c
      }
    };
    t.exports = h;
  })();
})(sl);
const Or = sl.exports, ol = "json-wallets/5.7.0";
function Pn(t) {
  return typeof t == "string" && t.substring(0, 2) !== "0x" && (t = "0x" + t), ce(t);
}
function Ba(t, e) {
  for (t = String(t); t.length < e; )
    t = "0" + t;
  return t;
}
function e0(t) {
  return typeof t == "string" ? _t(t, Gr.NFKC) : ce(t);
}
function St(t, e) {
  let r = t;
  const n = e.toLowerCase().split("/");
  for (let a = 0; a < n.length; a++) {
    let i = null;
    for (const s in r)
      if (s.toLowerCase() === n[a]) {
        i = r[s];
        break;
      }
    if (i === null)
      return null;
    r = i;
  }
  return r;
}
function i3(t) {
  const e = ce(t);
  e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128;
  const r = fe(e);
  return [
    r.substring(2, 10),
    r.substring(10, 14),
    r.substring(14, 18),
    r.substring(18, 22),
    r.substring(22, 34)
  ].join("-");
}
const s3 = new Z(ol);
class o3 extends qn {
  isCrowdsaleAccount(e) {
    return !!(e && e._isCrowdsaleAccount);
  }
}
function t0(t, e) {
  const r = JSON.parse(t);
  e = e0(e);
  const n = gt(St(r, "ethaddr")), a = Pn(St(r, "encseed"));
  (!a || a.length % 16 !== 0) && s3.throwArgumentError("invalid encseed", "json", t);
  const i = ce(Yo(e, e, 2e3, 32, "sha256")).slice(0, 16), s = a.slice(0, 16), c = a.slice(16), p = new Or.ModeOfOperation.cbc(i, s), x = Or.padding.pkcs7.strip(ce(p.decrypt(c)));
  let y = "";
  for (let F = 0; F < x.length; F++)
    y += String.fromCharCode(x[F]);
  const C = _t(y), B = bt(C);
  return new o3({
    _isCrowdsaleAccount: !0,
    address: n,
    privateKey: B
  });
}
function us(t) {
  let e = null;
  try {
    e = JSON.parse(t);
  } catch {
    return !1;
  }
  return e.encseed && e.ethaddr;
}
function ms(t) {
  let e = null;
  try {
    e = JSON.parse(t);
  } catch {
    return !1;
  }
  return !(!e.version || parseInt(e.version) !== e.version || parseInt(e.version) !== 3);
}
function c3(t) {
  if (us(t))
    try {
      return gt(JSON.parse(t).ethaddr);
    } catch {
      return null;
    }
  if (ms(t))
    try {
      return gt(JSON.parse(t).address);
    } catch {
      return null;
    }
  return null;
}
var cl = { exports: {} };
(function(t, e) {
  (function(r) {
    function a(M) {
      const S = new Uint32Array([
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
      let U = 1779033703, N = 3144134277, z = 1013904242, O = 2773480762, T = 1359893119, G = 2600822924, J = 528734635, Y = 1541459225;
      const X = new Uint32Array(64);
      function se(v) {
        let A = 0, w = v.length;
        for (; w >= 64; ) {
          let h = U, m = N, f = z, E = O, k = T, b = G, I = J, L = Y, P, H, $, V, j;
          for (H = 0; H < 16; H++)
            $ = A + H * 4, X[H] = (v[$] & 255) << 24 | (v[$ + 1] & 255) << 16 | (v[$ + 2] & 255) << 8 | v[$ + 3] & 255;
          for (H = 16; H < 64; H++)
            P = X[H - 2], V = (P >>> 17 | P << 32 - 17) ^ (P >>> 19 | P << 32 - 19) ^ P >>> 10, P = X[H - 15], j = (P >>> 7 | P << 32 - 7) ^ (P >>> 18 | P << 32 - 18) ^ P >>> 3, X[H] = (V + X[H - 7] | 0) + (j + X[H - 16] | 0) | 0;
          for (H = 0; H < 64; H++)
            V = (((k >>> 6 | k << 32 - 6) ^ (k >>> 11 | k << 32 - 11) ^ (k >>> 25 | k << 32 - 25)) + (k & b ^ ~k & I) | 0) + (L + (S[H] + X[H] | 0) | 0) | 0, j = ((h >>> 2 | h << 32 - 2) ^ (h >>> 13 | h << 32 - 13) ^ (h >>> 22 | h << 32 - 22)) + (h & m ^ h & f ^ m & f) | 0, L = I, I = b, b = k, k = E + V | 0, E = f, f = m, m = h, h = V + j | 0;
          U = U + h | 0, N = N + m | 0, z = z + f | 0, O = O + E | 0, T = T + k | 0, G = G + b | 0, J = J + I | 0, Y = Y + L | 0, A += 64, w -= 64;
        }
      }
      se(M);
      let D, u = M.length % 64, l = M.length / 536870912 | 0, o = M.length << 3, d = u < 56 ? 56 : 120, g = M.slice(M.length - u, M.length);
      for (g.push(128), D = u + 1; D < d; D++)
        g.push(0);
      return g.push(l >>> 24 & 255), g.push(l >>> 16 & 255), g.push(l >>> 8 & 255), g.push(l >>> 0 & 255), g.push(o >>> 24 & 255), g.push(o >>> 16 & 255), g.push(o >>> 8 & 255), g.push(o >>> 0 & 255), se(g), [
        U >>> 24 & 255,
        U >>> 16 & 255,
        U >>> 8 & 255,
        U >>> 0 & 255,
        N >>> 24 & 255,
        N >>> 16 & 255,
        N >>> 8 & 255,
        N >>> 0 & 255,
        z >>> 24 & 255,
        z >>> 16 & 255,
        z >>> 8 & 255,
        z >>> 0 & 255,
        O >>> 24 & 255,
        O >>> 16 & 255,
        O >>> 8 & 255,
        O >>> 0 & 255,
        T >>> 24 & 255,
        T >>> 16 & 255,
        T >>> 8 & 255,
        T >>> 0 & 255,
        G >>> 24 & 255,
        G >>> 16 & 255,
        G >>> 8 & 255,
        G >>> 0 & 255,
        J >>> 24 & 255,
        J >>> 16 & 255,
        J >>> 8 & 255,
        J >>> 0 & 255,
        Y >>> 24 & 255,
        Y >>> 16 & 255,
        Y >>> 8 & 255,
        Y >>> 0 & 255
      ];
    }
    function i(M, S, U) {
      M = M.length <= 64 ? M : a(M);
      const N = 64 + S.length + 4, z = new Array(N), O = new Array(64);
      let T, G = [];
      for (T = 0; T < 64; T++)
        z[T] = 54;
      for (T = 0; T < M.length; T++)
        z[T] ^= M[T];
      for (T = 0; T < S.length; T++)
        z[64 + T] = S[T];
      for (T = N - 4; T < N; T++)
        z[T] = 0;
      for (T = 0; T < 64; T++)
        O[T] = 92;
      for (T = 0; T < M.length; T++)
        O[T] ^= M[T];
      function J() {
        for (let Y = N - 1; Y >= N - 4; Y--) {
          if (z[Y]++, z[Y] <= 255)
            return;
          z[Y] = 0;
        }
      }
      for (; U >= 32; )
        J(), G = G.concat(a(O.concat(a(z)))), U -= 32;
      return U > 0 && (J(), G = G.concat(a(O.concat(a(z))).slice(0, U))), G;
    }
    function s(M, S, U, N, z) {
      let O;
      for (y(M, (2 * U - 1) * 16, z, 0, 16), O = 0; O < 2 * U; O++)
        x(M, O * 16, z, 16), p(z, N), y(z, 0, M, S + O * 16, 16);
      for (O = 0; O < U; O++)
        y(M, S + O * 2 * 16, M, O * 16, 16);
      for (O = 0; O < U; O++)
        y(M, S + (O * 2 + 1) * 16, M, (O + U) * 16, 16);
    }
    function c(M, S) {
      return M << S | M >>> 32 - S;
    }
    function p(M, S) {
      y(M, 0, S, 0, 16);
      for (let U = 8; U > 0; U -= 2)
        S[4] ^= c(S[0] + S[12], 7), S[8] ^= c(S[4] + S[0], 9), S[12] ^= c(S[8] + S[4], 13), S[0] ^= c(S[12] + S[8], 18), S[9] ^= c(S[5] + S[1], 7), S[13] ^= c(S[9] + S[5], 9), S[1] ^= c(S[13] + S[9], 13), S[5] ^= c(S[1] + S[13], 18), S[14] ^= c(S[10] + S[6], 7), S[2] ^= c(S[14] + S[10], 9), S[6] ^= c(S[2] + S[14], 13), S[10] ^= c(S[6] + S[2], 18), S[3] ^= c(S[15] + S[11], 7), S[7] ^= c(S[3] + S[15], 9), S[11] ^= c(S[7] + S[3], 13), S[15] ^= c(S[11] + S[7], 18), S[1] ^= c(S[0] + S[3], 7), S[2] ^= c(S[1] + S[0], 9), S[3] ^= c(S[2] + S[1], 13), S[0] ^= c(S[3] + S[2], 18), S[6] ^= c(S[5] + S[4], 7), S[7] ^= c(S[6] + S[5], 9), S[4] ^= c(S[7] + S[6], 13), S[5] ^= c(S[4] + S[7], 18), S[11] ^= c(S[10] + S[9], 7), S[8] ^= c(S[11] + S[10], 9), S[9] ^= c(S[8] + S[11], 13), S[10] ^= c(S[9] + S[8], 18), S[12] ^= c(S[15] + S[14], 7), S[13] ^= c(S[12] + S[15], 9), S[14] ^= c(S[13] + S[12], 13), S[15] ^= c(S[14] + S[13], 18);
      for (let U = 0; U < 16; ++U)
        M[U] += S[U];
    }
    function x(M, S, U, N) {
      for (let z = 0; z < N; z++)
        U[z] ^= M[S + z];
    }
    function y(M, S, U, N, z) {
      for (; z--; )
        U[N++] = M[S++];
    }
    function C(M) {
      if (!M || typeof M.length != "number")
        return !1;
      for (let S = 0; S < M.length; S++) {
        const U = M[S];
        if (typeof U != "number" || U % 1 || U < 0 || U >= 256)
          return !1;
      }
      return !0;
    }
    function B(M, S) {
      if (typeof M != "number" || M % 1)
        throw new Error("invalid " + S);
      return M;
    }
    function F(M, S, U, N, z, O, T) {
      if (U = B(U, "N"), N = B(N, "r"), z = B(z, "p"), O = B(O, "dkLen"), U === 0 || (U & U - 1) !== 0)
        throw new Error("N must be power of 2");
      if (U > 2147483647 / 128 / N)
        throw new Error("N too large");
      if (N > 2147483647 / 128 / z)
        throw new Error("r too large");
      if (!C(M))
        throw new Error("password must be an array or buffer");
      if (M = Array.prototype.slice.call(M), !C(S))
        throw new Error("salt must be an array or buffer");
      S = Array.prototype.slice.call(S);
      let G = i(M, S, z * 128 * N);
      const J = new Uint32Array(z * 32 * N);
      for (let k = 0; k < J.length; k++) {
        const b = k * 4;
        J[k] = (G[b + 3] & 255) << 24 | (G[b + 2] & 255) << 16 | (G[b + 1] & 255) << 8 | (G[b + 0] & 255) << 0;
      }
      const Y = new Uint32Array(64 * N), X = new Uint32Array(32 * N * U), se = 32 * N, D = new Uint32Array(16), u = new Uint32Array(16), l = z * U * 2;
      let o = 0, d = null, g = !1, v = 0, A = 0, w, h;
      const m = T ? parseInt(1e3 / N) : 4294967295, f = typeof setImmediate < "u" ? setImmediate : setTimeout, E = function() {
        if (g)
          return T(new Error("cancelled"), o / l);
        let k;
        switch (v) {
          case 0:
            h = A * 32 * N, y(J, h, Y, 0, se), v = 1, w = 0;
          case 1:
            k = U - w, k > m && (k = m);
            for (let I = 0; I < k; I++)
              y(Y, 0, X, (w + I) * se, se), s(Y, se, N, D, u);
            if (w += k, o += k, T) {
              const I = parseInt(1e3 * o / l);
              if (I !== d) {
                if (g = T(null, o / l), g)
                  break;
                d = I;
              }
            }
            if (w < U)
              break;
            w = 0, v = 2;
          case 2:
            k = U - w, k > m && (k = m);
            for (let I = 0; I < k; I++) {
              const L = (2 * N - 1) * 16, P = Y[L] & U - 1;
              x(X, P * se, Y, se), s(Y, se, N, D, u);
            }
            if (w += k, o += k, T) {
              const I = parseInt(1e3 * o / l);
              if (I !== d) {
                if (g = T(null, o / l), g)
                  break;
                d = I;
              }
            }
            if (w < U)
              break;
            if (y(Y, 0, J, h, se), A++, A < z) {
              v = 0;
              break;
            }
            G = [];
            for (let I = 0; I < J.length; I++)
              G.push(J[I] >> 0 & 255), G.push(J[I] >> 8 & 255), G.push(J[I] >> 16 & 255), G.push(J[I] >> 24 & 255);
            const b = i(M, G, O);
            return T && T(null, 1, b), b;
        }
        T && f(E);
      };
      if (!T)
        for (; ; ) {
          const k = E();
          if (k != null)
            return k;
        }
      E();
    }
    const R = {
      scrypt: function(M, S, U, N, z, O, T) {
        return new Promise(function(G, J) {
          let Y = 0;
          T && T(0), F(M, S, U, N, z, O, function(X, se, D) {
            if (X)
              J(X);
            else if (D)
              T && Y !== 1 && T(1), G(new Uint8Array(D));
            else if (T && se !== Y)
              return Y = se, T(se);
          });
        });
      },
      syncScrypt: function(M, S, U, N, z, O) {
        return new Uint8Array(F(M, S, U, N, z, O));
      }
    };
    t.exports = R;
  })();
})(cl);
const r0 = cl.exports;
var f3 = globalThis && globalThis.__awaiter || function(t, e, r, n) {
  function a(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i);
    });
  }
  return new (r || (r = Promise))(function(i, s) {
    function c(y) {
      try {
        x(n.next(y));
      } catch (C) {
        s(C);
      }
    }
    function p(y) {
      try {
        x(n.throw(y));
      } catch (C) {
        s(C);
      }
    }
    function x(y) {
      y.done ? i(y.value) : a(y.value).then(c, p);
    }
    x((n = n.apply(t, e || [])).next());
  });
};
const yo = new Z(ol);
function Sc(t) {
  return t != null && t.mnemonic && t.mnemonic.phrase;
}
class d3 extends qn {
  isKeystoreAccount(e) {
    return !!(e && e._isKeystoreAccount);
  }
}
function l3(t, e, r) {
  if (St(t, "crypto/cipher") === "aes-128-ctr") {
    const a = Pn(St(t, "crypto/cipherparams/iv")), i = new Or.Counter(a), s = new Or.ModeOfOperation.ctr(e, i);
    return ce(s.decrypt(r));
  }
  return null;
}
function fl(t, e) {
  const r = Pn(St(t, "crypto/ciphertext"));
  if (fe(bt(Dt([e.slice(16, 32), r]))).substring(2) !== St(t, "crypto/mac").toLowerCase())
    throw new Error("invalid password");
  const a = l3(t, e.slice(0, 16), r);
  a || yo.throwError("unsupported cipher", Z.errors.UNSUPPORTED_OPERATION, {
    operation: "decrypt"
  });
  const i = e.slice(32, 64), s = bn(a);
  if (t.address) {
    let p = t.address.toLowerCase();
    if (p.substring(0, 2) !== "0x" && (p = "0x" + p), gt(p) !== s)
      throw new Error("address mismatch");
  }
  const c = {
    _isKeystoreAccount: !0,
    address: s,
    privateKey: fe(a)
  };
  if (St(t, "x-ethers/version") === "0.1") {
    const p = Pn(St(t, "x-ethers/mnemonicCiphertext")), x = Pn(St(t, "x-ethers/mnemonicCounter")), y = new Or.Counter(x), C = new Or.ModeOfOperation.ctr(i, y), B = St(t, "x-ethers/path") || pa, F = St(t, "x-ethers/locale") || "en", R = ce(C.decrypt(p));
    try {
      const M = hs(R, F), S = er.fromMnemonic(M, null, F).derivePath(B);
      if (S.privateKey != c.privateKey)
        throw new Error("mnemonic mismatch");
      c.mnemonic = S.mnemonic;
    } catch (M) {
      if (M.code !== Z.errors.INVALID_ARGUMENT || M.argument !== "wordlist")
        throw M;
    }
  }
  return new d3(c);
}
function dl(t, e, r, n, a) {
  return ce(Yo(t, e, r, n, a));
}
function h3(t, e, r, n, a) {
  return Promise.resolve(dl(t, e, r, n, a));
}
function ll(t, e, r, n, a) {
  const i = e0(e), s = St(t, "crypto/kdf");
  if (s && typeof s == "string") {
    const c = function(p, x) {
      return yo.throwArgumentError("invalid key-derivation function parameters", p, x);
    };
    if (s.toLowerCase() === "scrypt") {
      const p = Pn(St(t, "crypto/kdfparams/salt")), x = parseInt(St(t, "crypto/kdfparams/n")), y = parseInt(St(t, "crypto/kdfparams/r")), C = parseInt(St(t, "crypto/kdfparams/p"));
      (!x || !y || !C) && c("kdf", s), (x & x - 1) !== 0 && c("N", x);
      const B = parseInt(St(t, "crypto/kdfparams/dklen"));
      return B !== 32 && c("dklen", B), n(i, p, x, y, C, 64, a);
    } else if (s.toLowerCase() === "pbkdf2") {
      const p = Pn(St(t, "crypto/kdfparams/salt"));
      let x = null;
      const y = St(t, "crypto/kdfparams/prf");
      y === "hmac-sha256" ? x = "sha256" : y === "hmac-sha512" ? x = "sha512" : c("prf", y);
      const C = parseInt(St(t, "crypto/kdfparams/c")), B = parseInt(St(t, "crypto/kdfparams/dklen"));
      return B !== 32 && c("dklen", B), r(i, p, C, B, x);
    }
  }
  return yo.throwArgumentError("unsupported key-derivation function", "kdf", s);
}
function hl(t, e) {
  const r = JSON.parse(t), n = ll(r, e, dl, r0.syncScrypt);
  return fl(r, n);
}
function ul(t, e, r) {
  return f3(this, void 0, void 0, function* () {
    const n = JSON.parse(t), a = yield ll(n, e, h3, r0.scrypt, r);
    return fl(n, a);
  });
}
function ml(t, e, r, n) {
  try {
    if (gt(t.address) !== bn(t.privateKey))
      throw new Error("address/privateKey mismatch");
    if (Sc(t)) {
      const S = t.mnemonic;
      if (er.fromMnemonic(S.phrase, null, S.locale).derivePath(S.path || pa).privateKey != t.privateKey)
        throw new Error("mnemonic mismatch");
    }
  } catch (S) {
    return Promise.reject(S);
  }
  typeof r == "function" && !n && (n = r, r = {}), r || (r = {});
  const a = ce(t.privateKey), i = e0(e);
  let s = null, c = null, p = null;
  if (Sc(t)) {
    const S = t.mnemonic;
    s = ce(ls(S.phrase, S.locale || "en")), c = S.path || pa, p = S.locale || "en";
  }
  let x = r.client;
  x || (x = "ethers.js");
  let y = null;
  r.salt ? y = ce(r.salt) : y = na(32);
  let C = null;
  if (r.iv) {
    if (C = ce(r.iv), C.length !== 16)
      throw new Error("invalid iv");
  } else
    C = na(16);
  let B = null;
  if (r.uuid) {
    if (B = ce(r.uuid), B.length !== 16)
      throw new Error("invalid uuid");
  } else
    B = na(16);
  let F = 1 << 17, R = 8, M = 1;
  return r.scrypt && (r.scrypt.N && (F = r.scrypt.N), r.scrypt.r && (R = r.scrypt.r), r.scrypt.p && (M = r.scrypt.p)), r0.scrypt(i, y, F, R, M, 64, n).then((S) => {
    S = ce(S);
    const U = S.slice(0, 16), N = S.slice(16, 32), z = S.slice(32, 64), O = new Or.Counter(C), T = new Or.ModeOfOperation.ctr(U, O), G = ce(T.encrypt(a)), J = bt(Dt([N, G])), Y = {
      address: t.address.substring(2).toLowerCase(),
      id: i3(B),
      version: 3,
      crypto: {
        cipher: "aes-128-ctr",
        cipherparams: {
          iv: fe(C).substring(2)
        },
        ciphertext: fe(G).substring(2),
        kdf: "scrypt",
        kdfparams: {
          salt: fe(y).substring(2),
          n: F,
          dklen: 32,
          p: M,
          r: R
        },
        mac: J.substring(2)
      }
    };
    if (s) {
      const X = na(16), se = new Or.Counter(X), D = new Or.ModeOfOperation.ctr(z, se), u = ce(D.encrypt(s)), l = new Date(), o = l.getUTCFullYear() + "-" + Ba(l.getUTCMonth() + 1, 2) + "-" + Ba(l.getUTCDate(), 2) + "T" + Ba(l.getUTCHours(), 2) + "-" + Ba(l.getUTCMinutes(), 2) + "-" + Ba(l.getUTCSeconds(), 2) + ".0Z";
      Y["x-ethers"] = {
        client: x,
        gethFilename: "UTC--" + o + "--" + Y.address,
        mnemonicCounter: fe(X).substring(2),
        mnemonicCiphertext: fe(u).substring(2),
        path: c,
        locale: p,
        version: "0.1"
      };
    }
    return JSON.stringify(Y);
  });
}
function pl(t, e, r) {
  if (us(t)) {
    r && r(0);
    const n = t0(t, e);
    return r && r(1), Promise.resolve(n);
  }
  return ms(t) ? ul(t, e, r) : Promise.reject(new Error("invalid JSON wallet"));
}
function bl(t, e) {
  if (us(t))
    return t0(t, e);
  if (ms(t))
    return hl(t, e);
  throw new Error("invalid JSON wallet");
}
const u3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decryptCrowdsale: t0,
  decryptKeystore: ul,
  decryptKeystoreSync: hl,
  encryptKeystore: ml,
  isCrowdsaleWallet: us,
  isKeystoreWallet: ms,
  getJsonWalletAddress: c3,
  decryptJsonWallet: pl,
  decryptJsonWalletSync: bl
}, Symbol.toStringTag, { value: "Module" })), m3 = "wallet/5.7.0";
var Dc = globalThis && globalThis.__awaiter || function(t, e, r, n) {
  function a(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i);
    });
  }
  return new (r || (r = Promise))(function(i, s) {
    function c(y) {
      try {
        x(n.next(y));
      } catch (C) {
        s(C);
      }
    }
    function p(y) {
      try {
        x(n.throw(y));
      } catch (C) {
        s(C);
      }
    }
    function x(y) {
      y.done ? i(y.value) : a(y.value).then(c, p);
    }
    x((n = n.apply(t, e || [])).next());
  });
};
const Jn = new Z(m3);
function p3(t) {
  return t != null && At(t.privateKey, 32) && t.address != null;
}
function b3(t) {
  const e = t.mnemonic;
  return e && e.phrase;
}
class Tn extends di {
  constructor(e, r) {
    if (super(), p3(e)) {
      const n = new Un(e.privateKey);
      if (ie(this, "_signingKey", () => n), ie(this, "address", bn(this.publicKey)), this.address !== gt(e.address) && Jn.throwArgumentError("privateKey/address mismatch", "privateKey", "[REDACTED]"), b3(e)) {
        const a = e.mnemonic;
        ie(this, "_mnemonic", () => ({
          phrase: a.phrase,
          path: a.path || pa,
          locale: a.locale || "en"
        }));
        const i = this.mnemonic, s = er.fromMnemonic(i.phrase, null, i.locale).derivePath(i.path);
        bn(s.privateKey) !== this.address && Jn.throwArgumentError("mnemonic/address mismatch", "privateKey", "[REDACTED]");
      } else
        ie(this, "_mnemonic", () => null);
    } else {
      if (Un.isSigningKey(e))
        e.curve !== "secp256k1" && Jn.throwArgumentError("unsupported curve; must be secp256k1", "privateKey", "[REDACTED]"), ie(this, "_signingKey", () => e);
      else {
        typeof e == "string" && e.match(/^[0-9a-f]*$/i) && e.length === 64 && (e = "0x" + e);
        const n = new Un(e);
        ie(this, "_signingKey", () => n);
      }
      ie(this, "_mnemonic", () => null), ie(this, "address", bn(this.publicKey));
    }
    r && !ss.isProvider(r) && Jn.throwArgumentError("invalid provider", "provider", r), ie(this, "provider", r || null);
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
    return new Tn(this, e);
  }
  signTransaction(e) {
    return Pr(e).then((r) => {
      r.from != null && (gt(r.from) !== this.address && Jn.throwArgumentError("transaction from address mismatch", "transaction.from", e.from), delete r.from);
      const n = this._signingKey().signDigest(bt(go(r)));
      return go(r, n);
    });
  }
  signMessage(e) {
    return Dc(this, void 0, void 0, function* () {
      return io(this._signingKey().signDigest(zo(e)));
    });
  }
  _signTypedData(e, r, n) {
    return Dc(this, void 0, void 0, function* () {
      const a = yield Ht.resolveNames(e, r, n, (i) => (this.provider == null && Jn.throwError("cannot resolve ENS names without a provider", Z.errors.UNSUPPORTED_OPERATION, {
        operation: "resolveName",
        value: i
      }), this.provider.resolveName(i)));
      return io(this._signingKey().signDigest(Ht.hash(a.domain, r, a.value)));
    });
  }
  encrypt(e, r, n) {
    if (typeof r == "function" && !n && (n = r, r = {}), n && typeof n != "function")
      throw new Error("invalid callback");
    return r || (r = {}), ml(this, e, r, n);
  }
  static createRandom(e) {
    let r = na(16);
    e || (e = {}), e.extraEntropy && (r = ce(tn(bt(Dt([r, e.extraEntropy])), 0, 16)));
    const n = hs(r, e.locale);
    return Tn.fromMnemonic(n, e.path, e.locale);
  }
  static fromEncryptedJson(e, r, n) {
    return pl(e, r, n).then((a) => new Tn(a));
  }
  static fromEncryptedJsonSync(e, r) {
    return new Tn(bl(e, r));
  }
  static fromMnemonic(e, r, n) {
    return r || (r = pa), new Tn(er.fromMnemonic(e, null, n).derivePath(r));
  }
}
function g3(t, e) {
  return hi(zo(t), e);
}
function x3(t, e, r, n) {
  return hi(Ht.hash(t, e, r), n);
}
const y3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Wallet: Tn,
  verifyMessage: g3,
  verifyTypedData: x3
}, Symbol.toStringTag, { value: "Module" })), v3 = "solidity/5.7.0", w3 = new RegExp("^bytes([0-9]+)$"), A3 = new RegExp("^(u?int)([0-9]*)$"), E3 = new RegExp("^(.*)\\[([0-9]*)\\]$"), C3 = "0000000000000000000000000000000000000000000000000000000000000000", ea = new Z(v3);
function gl(t, e, r) {
  switch (t) {
    case "address":
      return r ? Oa(e, 32) : ce(e);
    case "string":
      return _t(e);
    case "bytes":
      return ce(e);
    case "bool":
      return e = e ? "0x01" : "0x00", r ? Oa(e, 32) : ce(e);
  }
  let n = t.match(A3);
  if (n) {
    let a = parseInt(n[2] || "256");
    return (n[2] && String(a) !== n[2] || a % 8 !== 0 || a === 0 || a > 256) && ea.throwArgumentError("invalid number type", "type", t), r && (a = 256), e = de.from(e).toTwos(a), Oa(e, a / 8);
  }
  if (n = t.match(w3), n) {
    const a = parseInt(n[1]);
    return (String(a) !== n[1] || a === 0 || a > 32) && ea.throwArgumentError("invalid bytes type", "type", t), ce(e).byteLength !== a && ea.throwArgumentError(`invalid value for ${t}`, "value", e), r ? ce((e + C3).substring(0, 66)) : e;
  }
  if (n = t.match(E3), n && Array.isArray(e)) {
    const a = n[1];
    parseInt(n[2] || String(e.length)) != e.length && ea.throwArgumentError(`invalid array length for ${t}`, "value", e);
    const s = [];
    return e.forEach(function(c) {
      s.push(gl(a, c, !0));
    }), Dt(s);
  }
  return ea.throwArgumentError("invalid type", "type", t);
}
function n0(t, e) {
  t.length != e.length && ea.throwArgumentError("wrong number of values; expected ${ types.length }", "values", e);
  const r = [];
  return t.forEach(function(n, a) {
    r.push(gl(n, e[a]));
  }), fe(Dt(r));
}
function I3(t, e) {
  return bt(n0(t, e));
}
function k3(t, e) {
  return Gn(n0(t, e));
}
const S3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pack: n0,
  keccak256: I3,
  sha256: k3
}, Symbol.toStringTag, { value: "Module" })), D3 = "units/5.7.0", xl = new Z(D3), yl = [
  "wei",
  "kwei",
  "mwei",
  "gwei",
  "szabo",
  "finney",
  "ether"
];
function B3(t) {
  const e = String(t).split(".");
  (e.length > 2 || !e[0].match(/^-?[0-9]*$/) || e[1] && !e[1].match(/^[0-9]*$/) || t === "." || t === "-.") && xl.throwArgumentError("invalid value", "value", t);
  let r = e[0], n = "";
  for (r.substring(0, 1) === "-" && (n = "-", r = r.substring(1)); r.substring(0, 1) === "0"; )
    r = r.substring(1);
  r === "" && (r = "0");
  let a = "";
  for (e.length === 2 && (a = "." + (e[1] || "0")); a.length > 2 && a[a.length - 1] === "0"; )
    a = a.substring(0, a.length - 1);
  const i = [];
  for (; r.length; )
    if (r.length <= 3) {
      i.unshift(r);
      break;
    } else {
      const s = r.length - 3;
      i.unshift(r.substring(s)), r = r.substring(0, s);
    }
  return n + i.join(",") + a;
}
function vl(t, e) {
  if (typeof e == "string") {
    const r = yl.indexOf(e);
    r !== -1 && (e = 3 * r);
  }
  return Ri(t, e != null ? e : 18);
}
function wl(t, e) {
  if (typeof t != "string" && xl.throwArgumentError("value must be a string", "value", t), typeof e == "string") {
    const r = yl.indexOf(e);
    r !== -1 && (e = 3 * r);
  }
  return Br(t, e != null ? e : 18);
}
function F3(t) {
  return vl(t, 18);
}
function R3(t) {
  return wl(t, 18);
}
const M3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commify: B3,
  formatUnits: vl,
  parseUnits: wl,
  formatEther: F3,
  parseEther: R3
}, Symbol.toStringTag, { value: "Module" })), _3 = "web/5.7.1";
var T3 = globalThis && globalThis.__awaiter || function(t, e, r, n) {
  function a(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i);
    });
  }
  return new (r || (r = Promise))(function(i, s) {
    function c(y) {
      try {
        x(n.next(y));
      } catch (C) {
        s(C);
      }
    }
    function p(y) {
      try {
        x(n.throw(y));
      } catch (C) {
        s(C);
      }
    }
    function x(y) {
      y.done ? i(y.value) : a(y.value).then(c, p);
    }
    x((n = n.apply(t, e || [])).next());
  });
};
function U3(t, e) {
  return T3(this, void 0, void 0, function* () {
    e == null && (e = {});
    const r = {
      method: e.method || "GET",
      headers: e.headers || {},
      body: e.body || void 0
    };
    if (e.skipFetchSetup !== !0 && (r.mode = "cors", r.cache = "no-cache", r.credentials = "same-origin", r.redirect = "follow", r.referrer = "client"), e.fetchOptions != null) {
      const s = e.fetchOptions;
      s.mode && (r.mode = s.mode), s.cache && (r.cache = s.cache), s.credentials && (r.credentials = s.credentials), s.redirect && (r.redirect = s.redirect), s.referrer && (r.referrer = s.referrer);
    }
    const n = yield fetch(t, r), a = yield n.arrayBuffer(), i = {};
    return n.headers.forEach ? n.headers.forEach((s, c) => {
      i[c.toLowerCase()] = s;
    }) : n.headers.keys().forEach((s) => {
      i[s.toLowerCase()] = n.headers.get(s);
    }), {
      headers: i,
      statusCode: n.status,
      statusMessage: n.statusText,
      body: ce(new Uint8Array(a))
    };
  });
}
var P3 = globalThis && globalThis.__awaiter || function(t, e, r, n) {
  function a(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i);
    });
  }
  return new (r || (r = Promise))(function(i, s) {
    function c(y) {
      try {
        x(n.next(y));
      } catch (C) {
        s(C);
      }
    }
    function p(y) {
      try {
        x(n.throw(y));
      } catch (C) {
        s(C);
      }
    }
    function x(y) {
      y.done ? i(y.value) : a(y.value).then(c, p);
    }
    x((n = n.apply(t, e || [])).next());
  });
};
const gr = new Z(_3);
function Bc(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
function on(t, e) {
  if (t == null)
    return null;
  if (typeof t == "string")
    return t;
  if (ci(t)) {
    if (e && (e.split("/")[0] === "text" || e.split(";")[0].trim() === "application/json"))
      try {
        return Aa(t);
      } catch {
      }
    return fe(t);
  }
  return t;
}
function N3(t) {
  return _t(t.replace(/%([0-9a-f][0-9a-f])/gi, (e, r) => String.fromCharCode(parseInt(r, 16))));
}
function Al(t, e, r) {
  const n = typeof t == "object" && t.throttleLimit != null ? t.throttleLimit : 12;
  gr.assertArgument(n > 0 && n % 1 === 0, "invalid connection throttle limit", "connection.throttleLimit", n);
  const a = typeof t == "object" ? t.throttleCallback : null, i = typeof t == "object" && typeof t.throttleSlotInterval == "number" ? t.throttleSlotInterval : 100;
  gr.assertArgument(i > 0 && i % 1 === 0, "invalid connection throttle slot interval", "connection.throttleSlotInterval", i);
  const s = typeof t == "object" ? !!t.errorPassThrough : !1, c = {};
  let p = null;
  const x = {
    method: "GET"
  };
  let y = !1, C = 2 * 60 * 1e3;
  if (typeof t == "string")
    p = t;
  else if (typeof t == "object") {
    if ((t == null || t.url == null) && gr.throwArgumentError("missing URL", "connection.url", t), p = t.url, typeof t.timeout == "number" && t.timeout > 0 && (C = t.timeout), t.headers)
      for (const U in t.headers)
        c[U.toLowerCase()] = { key: U, value: String(t.headers[U]) }, ["if-none-match", "if-modified-since"].indexOf(U.toLowerCase()) >= 0 && (y = !0);
    if (x.allowGzip = !!t.allowGzip, t.user != null && t.password != null) {
      p.substring(0, 6) !== "https:" && t.allowInsecureAuthentication !== !0 && gr.throwError("basic authentication requires a secure https url", Z.errors.INVALID_ARGUMENT, { argument: "url", url: p, user: t.user, password: "[REDACTED]" });
      const U = t.user + ":" + t.password;
      c.authorization = {
        key: "Authorization",
        value: "Basic " + bd(_t(U))
      };
    }
    t.skipFetchSetup != null && (x.skipFetchSetup = !!t.skipFetchSetup), t.fetchOptions != null && (x.fetchOptions = nr(t.fetchOptions));
  }
  const B = new RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"), F = p ? p.match(B) : null;
  if (F)
    try {
      const U = {
        statusCode: 200,
        statusMessage: "OK",
        headers: { "content-type": F[1] || "text/plain" },
        body: F[2] ? Ho(F[3]) : N3(F[3])
      };
      let N = U.body;
      return r && (N = r(U.body, U)), Promise.resolve(N);
    } catch (U) {
      gr.throwError("processing response error", Z.errors.SERVER_ERROR, {
        body: on(F[1], F[2]),
        error: U,
        requestBody: null,
        requestMethod: "GET",
        url: p
      });
    }
  e && (x.method = "POST", x.body = e, c["content-type"] == null && (c["content-type"] = { key: "Content-Type", value: "application/octet-stream" }), c["content-length"] == null && (c["content-length"] = { key: "Content-Length", value: String(e.length) }));
  const R = {};
  Object.keys(c).forEach((U) => {
    const N = c[U];
    R[N.key] = N.value;
  }), x.headers = R;
  const M = function() {
    let U = null;
    return { promise: new Promise(function(O, T) {
      C && (U = setTimeout(() => {
        U != null && (U = null, T(gr.makeError("timeout", Z.errors.TIMEOUT, {
          requestBody: on(x.body, R["content-type"]),
          requestMethod: x.method,
          timeout: C,
          url: p
        })));
      }, C));
    }), cancel: function() {
      U != null && (clearTimeout(U), U = null);
    } };
  }(), S = function() {
    return P3(this, void 0, void 0, function* () {
      for (let U = 0; U < n; U++) {
        let N = null;
        try {
          if (N = yield U3(p, x), U < n) {
            if (N.statusCode === 301 || N.statusCode === 302) {
              const O = N.headers.location || "";
              if (x.method === "GET" && O.match(/^https:/)) {
                p = N.headers.location;
                continue;
              }
            } else if (N.statusCode === 429) {
              let O = !0;
              if (a && (O = yield a(U, p)), O) {
                let T = 0;
                const G = N.headers["retry-after"];
                typeof G == "string" && G.match(/^[1-9][0-9]*$/) ? T = parseInt(G) * 1e3 : T = i * parseInt(String(Math.random() * Math.pow(2, U))), yield Bc(T);
                continue;
              }
            }
          }
        } catch (O) {
          N = O.response, N == null && (M.cancel(), gr.throwError("missing response", Z.errors.SERVER_ERROR, {
            requestBody: on(x.body, R["content-type"]),
            requestMethod: x.method,
            serverError: O,
            url: p
          }));
        }
        let z = N.body;
        if (y && N.statusCode === 304 ? z = null : !s && (N.statusCode < 200 || N.statusCode >= 300) && (M.cancel(), gr.throwError("bad response", Z.errors.SERVER_ERROR, {
          status: N.statusCode,
          headers: N.headers,
          body: on(z, N.headers ? N.headers["content-type"] : null),
          requestBody: on(x.body, R["content-type"]),
          requestMethod: x.method,
          url: p
        })), r)
          try {
            const O = yield r(z, N);
            return M.cancel(), O;
          } catch (O) {
            if (O.throttleRetry && U < n) {
              let T = !0;
              if (a && (T = yield a(U, p)), T) {
                const G = i * parseInt(String(Math.random() * Math.pow(2, U)));
                yield Bc(G);
                continue;
              }
            }
            M.cancel(), gr.throwError("processing response error", Z.errors.SERVER_ERROR, {
              body: on(z, N.headers ? N.headers["content-type"] : null),
              error: O,
              requestBody: on(x.body, R["content-type"]),
              requestMethod: x.method,
              url: p
            });
          }
        return M.cancel(), z;
      }
      return gr.throwError("failed response", Z.errors.SERVER_ERROR, {
        requestBody: on(x.body, R["content-type"]),
        requestMethod: x.method,
        url: p
      });
    });
  }();
  return Promise.race([M.promise, S]);
}
function O3(t, e, r) {
  let n = (i, s) => {
    let c = null;
    if (i != null)
      try {
        c = JSON.parse(Aa(i));
      } catch (p) {
        gr.throwError("invalid JSON", Z.errors.SERVER_ERROR, {
          body: i,
          error: p
        });
      }
    return r && (c = r(c, s)), c;
  }, a = null;
  if (e != null) {
    a = _t(e);
    const i = typeof t == "string" ? { url: t } : nr(t);
    i.headers ? Object.keys(i.headers).filter((c) => c.toLowerCase() === "content-type").length !== 0 || (i.headers = nr(i.headers), i.headers["content-type"] = "application/json") : i.headers = { "content-type": "application/json" }, t = i;
  }
  return Al(t, a, n);
}
function L3(t, e) {
  return e || (e = {}), e = nr(e), e.floor == null && (e.floor = 0), e.ceiling == null && (e.ceiling = 1e4), e.interval == null && (e.interval = 250), new Promise(function(r, n) {
    let a = null, i = !1;
    const s = () => i ? !1 : (i = !0, a && clearTimeout(a), !0);
    e.timeout && (a = setTimeout(() => {
      s() && n(new Error("timeout"));
    }, e.timeout));
    const c = e.retryLimit;
    let p = 0;
    function x() {
      return t().then(function(y) {
        if (y !== void 0)
          s() && r(y);
        else if (e.oncePoll)
          e.oncePoll.once("poll", x);
        else if (e.onceBlock)
          e.onceBlock.once("block", x);
        else if (!i) {
          if (p++, p > c) {
            s() && n(new Error("retry limit reached"));
            return;
          }
          let C = e.interval * parseInt(String(Math.random() * Math.pow(2, p)));
          C < e.floor && (C = e.floor), C > e.ceiling && (C = e.ceiling), setTimeout(x, C);
        }
        return null;
      }, function(y) {
        s() && n(y);
      });
    }
    x();
  });
}
const j3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _fetchData: Al,
  fetchJson: O3,
  poll: L3
}, Symbol.toStringTag, { value: "Module" })), W3 = "ethers/5.7.2";
new Z(W3);
const H3 = [
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
], z3 = [
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
    address: "0x1068a889fd7151fb2ca9d98d268b0d0cd623fc2f",
    symbol: "GODZ",
    name: "Godzilla Token",
    decimals: 18,
    logoURI: "https://kenhcine.cgv.vn/media/catalog/product/c/g/cgv_godzilla.jpg"
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
], G3 = [
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
    address: "0xda4714fee90ad7de50bc185ccd06b175d23906c1",
    _scan: "https://bscscan.com/address/0xda4714fee90ad7de50bc185ccd06b175d23906c1",
    symbol: "GODZ",
    name: "Godzilla Token",
    decimals: 18,
    logoURI: "https://kenhcine.cgv.vn/media/catalog/product/c/g/cgv_godzilla.jpg"
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
], $3 = [
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
], V3 = [
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
], K3 = [
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
], q3 = [
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
], X3 = [
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
], Z3 = [
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
], J3 = [
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
], Y3 = [
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
], Q3 = [
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
], e6 = [
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
], t6 = [
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
], r6 = [
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
], n6 = [
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
var El = /* @__PURE__ */ ((t) => (t[t.UNDERLAYER = -1] = "UNDERLAYER", t[t.OVERLAY = 100] = "OVERLAY", t[t.DIALOG = 1e3] = "DIALOG", t[t.TOOLTIP = 2e3] = "TOOLTIP", t))(El || {});
const pt = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", cn = (t) => ({
  name: "Ether",
  decimals: 18,
  symbol: "ETH",
  address: pt,
  chainId: t,
  logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
}), a6 = (t) => ({
  name: "Godz",
  decimals: 18,
  symbol: "GODZ",
  address: pt,
  chainId: t,
  logoURI: "https://kenhcine.cgv.vn/media/catalog/product/c/g/cgv_godzilla.jpg"
}), es = {
  1: cn(1),
  109: a6(109),
  137: {
    name: "Matic",
    symbol: "MATIC",
    decimals: 18,
    address: pt,
    chainId: 137,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png"
  },
  56: {
    name: "BNB",
    symbol: "BNB",
    decimals: 18,
    address: pt,
    chainId: 56,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"
  },
  43114: {
    name: "AVAX",
    symbol: "AVAX",
    decimals: 18,
    address: pt,
    chainId: 43114,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png"
  },
  250: {
    name: "Fantom",
    symbol: "FTM",
    decimals: 18,
    address: pt,
    chainId: 250,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3513.png"
  },
  25: {
    name: "Cronos",
    symbol: "CRO",
    decimals: 18,
    address: pt,
    chainId: 25,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3635.png"
  },
  42161: cn(42161),
  199: {
    name: "BTT",
    symbol: "BTT",
    decimals: 18,
    address: pt,
    chainId: 199,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/16086.png"
  },
  106: {
    name: "VLX",
    symbol: "VLX",
    decimals: 18,
    address: pt,
    chainId: 106,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/4747.png"
  },
  1313161554: cn(1313161554),
  42262: {
    name: "ROSE",
    symbol: "ROSE",
    decimals: 18,
    address: pt,
    chainId: 42262,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/7653.png"
  },
  10: cn(10),
  59144: cn(59144),
  1101: cn(1101),
  324: cn(324),
  8453: cn(8453)
}, Nn = {
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
}, i6 = {
  1: z3,
  137: H3,
  56: G3,
  43114: $3,
  250: V3,
  25: K3,
  42161: q3,
  199: X3,
  106: Z3,
  1313161554: J3,
  42262: Y3,
  10: Q3,
  59144: r6,
  1101: t6,
  324: e6,
  8453: n6
}, s6 = {
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
  8453: "0xcA11bde05977b3631167028862bE2a173976CA11",
  109: "0xda4714fee90ad7de50bc185ccd06b175d23906c1"
}, a0 = {
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
}, ri = {
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
}, i0 = Object.keys(ri);
var Ar = {};
const o6 = /* @__PURE__ */ It(Fm), c6 = /* @__PURE__ */ It(au), f6 = /* @__PURE__ */ It(Vu), d6 = /* @__PURE__ */ It(Lp), l6 = /* @__PURE__ */ It(_h), h6 = /* @__PURE__ */ It(Sm), u6 = /* @__PURE__ */ It(e3), m6 = /* @__PURE__ */ It(u3), p6 = /* @__PURE__ */ It(Xh), b6 = /* @__PURE__ */ It(Fh), Fc = /* @__PURE__ */ It(zp), g6 = /* @__PURE__ */ It(S3), x6 = /* @__PURE__ */ It(a3), y6 = /* @__PURE__ */ It(Hh), v6 = /* @__PURE__ */ It(Jh), w6 = /* @__PURE__ */ It(vp), Rc = /* @__PURE__ */ It(Pu), A6 = /* @__PURE__ */ It(Bp), E6 = /* @__PURE__ */ It(M3), C6 = /* @__PURE__ */ It(y3), I6 = /* @__PURE__ */ It(j3);
(function(t) {
  var e = tr && tr.__createBinding || (Object.create ? function(D, u, l, o) {
    o === void 0 && (o = l), Object.defineProperty(D, o, { enumerable: !0, get: function() {
      return u[l];
    } });
  } : function(D, u, l, o) {
    o === void 0 && (o = l), D[o] = u[l];
  }), r = tr && tr.__setModuleDefault || (Object.create ? function(D, u) {
    Object.defineProperty(D, "default", { enumerable: !0, value: u });
  } : function(D, u) {
    D.default = u;
  }), n = tr && tr.__importStar || function(D) {
    if (D && D.__esModule)
      return D;
    var u = {};
    if (D != null)
      for (var l in D)
        l !== "default" && Object.prototype.hasOwnProperty.call(D, l) && e(u, D, l);
    return r(u, D), u;
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.formatBytes32String = t.Utf8ErrorFuncs = t.toUtf8String = t.toUtf8CodePoints = t.toUtf8Bytes = t._toEscapedUtf8String = t.nameprep = t.hexDataSlice = t.hexDataLength = t.hexZeroPad = t.hexValue = t.hexStripZeros = t.hexConcat = t.isHexString = t.hexlify = t.base64 = t.base58 = t.TransactionDescription = t.LogDescription = t.Interface = t.SigningKey = t.HDNode = t.defaultPath = t.isBytesLike = t.isBytes = t.zeroPad = t.stripZeros = t.concat = t.arrayify = t.shallowCopy = t.resolveProperties = t.getStatic = t.defineReadOnly = t.deepCopy = t.checkProperties = t.poll = t.fetchJson = t._fetchData = t.RLP = t.Logger = t.checkResultErrors = t.FormatTypes = t.ParamType = t.FunctionFragment = t.EventFragment = t.ErrorFragment = t.ConstructorFragment = t.Fragment = t.defaultAbiCoder = t.AbiCoder = void 0, t.Indexed = t.Utf8ErrorReason = t.UnicodeNormalizationForm = t.SupportedAlgorithm = t.mnemonicToSeed = t.isValidMnemonic = t.entropyToMnemonic = t.mnemonicToEntropy = t.getAccountPath = t.verifyTypedData = t.verifyMessage = t.recoverPublicKey = t.computePublicKey = t.recoverAddress = t.computeAddress = t.getJsonWalletAddress = t.TransactionTypes = t.serializeTransaction = t.parseTransaction = t.accessListify = t.joinSignature = t.splitSignature = t.soliditySha256 = t.solidityKeccak256 = t.solidityPack = t.shuffled = t.randomBytes = t.sha512 = t.sha256 = t.ripemd160 = t.keccak256 = t.computeHmac = t.commify = t.parseUnits = t.formatUnits = t.parseEther = t.formatEther = t.isAddress = t.getCreate2Address = t.getContractAddress = t.getIcapAddress = t.getAddress = t._TypedDataEncoder = t.id = t.isValidName = t.namehash = t.hashMessage = t.dnsEncode = t.parseBytes32String = void 0;
  var a = o6;
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
  var i = c6;
  Object.defineProperty(t, "getAddress", { enumerable: !0, get: function() {
    return i.getAddress;
  } }), Object.defineProperty(t, "getCreate2Address", { enumerable: !0, get: function() {
    return i.getCreate2Address;
  } }), Object.defineProperty(t, "getContractAddress", { enumerable: !0, get: function() {
    return i.getContractAddress;
  } }), Object.defineProperty(t, "getIcapAddress", { enumerable: !0, get: function() {
    return i.getIcapAddress;
  } }), Object.defineProperty(t, "isAddress", { enumerable: !0, get: function() {
    return i.isAddress;
  } });
  var s = n(f6);
  t.base64 = s;
  var c = d6;
  Object.defineProperty(t, "base58", { enumerable: !0, get: function() {
    return c.Base58;
  } });
  var p = l6;
  Object.defineProperty(t, "arrayify", { enumerable: !0, get: function() {
    return p.arrayify;
  } }), Object.defineProperty(t, "concat", { enumerable: !0, get: function() {
    return p.concat;
  } }), Object.defineProperty(t, "hexConcat", { enumerable: !0, get: function() {
    return p.hexConcat;
  } }), Object.defineProperty(t, "hexDataSlice", { enumerable: !0, get: function() {
    return p.hexDataSlice;
  } }), Object.defineProperty(t, "hexDataLength", { enumerable: !0, get: function() {
    return p.hexDataLength;
  } }), Object.defineProperty(t, "hexlify", { enumerable: !0, get: function() {
    return p.hexlify;
  } }), Object.defineProperty(t, "hexStripZeros", { enumerable: !0, get: function() {
    return p.hexStripZeros;
  } }), Object.defineProperty(t, "hexValue", { enumerable: !0, get: function() {
    return p.hexValue;
  } }), Object.defineProperty(t, "hexZeroPad", { enumerable: !0, get: function() {
    return p.hexZeroPad;
  } }), Object.defineProperty(t, "isBytes", { enumerable: !0, get: function() {
    return p.isBytes;
  } }), Object.defineProperty(t, "isBytesLike", { enumerable: !0, get: function() {
    return p.isBytesLike;
  } }), Object.defineProperty(t, "isHexString", { enumerable: !0, get: function() {
    return p.isHexString;
  } }), Object.defineProperty(t, "joinSignature", { enumerable: !0, get: function() {
    return p.joinSignature;
  } }), Object.defineProperty(t, "zeroPad", { enumerable: !0, get: function() {
    return p.zeroPad;
  } }), Object.defineProperty(t, "splitSignature", { enumerable: !0, get: function() {
    return p.splitSignature;
  } }), Object.defineProperty(t, "stripZeros", { enumerable: !0, get: function() {
    return p.stripZeros;
  } });
  var x = h6;
  Object.defineProperty(t, "_TypedDataEncoder", { enumerable: !0, get: function() {
    return x._TypedDataEncoder;
  } }), Object.defineProperty(t, "dnsEncode", { enumerable: !0, get: function() {
    return x.dnsEncode;
  } }), Object.defineProperty(t, "hashMessage", { enumerable: !0, get: function() {
    return x.hashMessage;
  } }), Object.defineProperty(t, "id", { enumerable: !0, get: function() {
    return x.id;
  } }), Object.defineProperty(t, "isValidName", { enumerable: !0, get: function() {
    return x.isValidName;
  } }), Object.defineProperty(t, "namehash", { enumerable: !0, get: function() {
    return x.namehash;
  } });
  var y = u6;
  Object.defineProperty(t, "defaultPath", { enumerable: !0, get: function() {
    return y.defaultPath;
  } }), Object.defineProperty(t, "entropyToMnemonic", { enumerable: !0, get: function() {
    return y.entropyToMnemonic;
  } }), Object.defineProperty(t, "getAccountPath", { enumerable: !0, get: function() {
    return y.getAccountPath;
  } }), Object.defineProperty(t, "HDNode", { enumerable: !0, get: function() {
    return y.HDNode;
  } }), Object.defineProperty(t, "isValidMnemonic", { enumerable: !0, get: function() {
    return y.isValidMnemonic;
  } }), Object.defineProperty(t, "mnemonicToEntropy", { enumerable: !0, get: function() {
    return y.mnemonicToEntropy;
  } }), Object.defineProperty(t, "mnemonicToSeed", { enumerable: !0, get: function() {
    return y.mnemonicToSeed;
  } });
  var C = m6;
  Object.defineProperty(t, "getJsonWalletAddress", { enumerable: !0, get: function() {
    return C.getJsonWalletAddress;
  } });
  var B = p6;
  Object.defineProperty(t, "keccak256", { enumerable: !0, get: function() {
    return B.keccak256;
  } });
  var F = b6;
  Object.defineProperty(t, "Logger", { enumerable: !0, get: function() {
    return F.Logger;
  } });
  var R = Fc;
  Object.defineProperty(t, "computeHmac", { enumerable: !0, get: function() {
    return R.computeHmac;
  } }), Object.defineProperty(t, "ripemd160", { enumerable: !0, get: function() {
    return R.ripemd160;
  } }), Object.defineProperty(t, "sha256", { enumerable: !0, get: function() {
    return R.sha256;
  } }), Object.defineProperty(t, "sha512", { enumerable: !0, get: function() {
    return R.sha512;
  } });
  var M = g6;
  Object.defineProperty(t, "solidityKeccak256", { enumerable: !0, get: function() {
    return M.keccak256;
  } }), Object.defineProperty(t, "solidityPack", { enumerable: !0, get: function() {
    return M.pack;
  } }), Object.defineProperty(t, "soliditySha256", { enumerable: !0, get: function() {
    return M.sha256;
  } });
  var S = x6;
  Object.defineProperty(t, "randomBytes", { enumerable: !0, get: function() {
    return S.randomBytes;
  } }), Object.defineProperty(t, "shuffled", { enumerable: !0, get: function() {
    return S.shuffled;
  } });
  var U = y6;
  Object.defineProperty(t, "checkProperties", { enumerable: !0, get: function() {
    return U.checkProperties;
  } }), Object.defineProperty(t, "deepCopy", { enumerable: !0, get: function() {
    return U.deepCopy;
  } }), Object.defineProperty(t, "defineReadOnly", { enumerable: !0, get: function() {
    return U.defineReadOnly;
  } }), Object.defineProperty(t, "getStatic", { enumerable: !0, get: function() {
    return U.getStatic;
  } }), Object.defineProperty(t, "resolveProperties", { enumerable: !0, get: function() {
    return U.resolveProperties;
  } }), Object.defineProperty(t, "shallowCopy", { enumerable: !0, get: function() {
    return U.shallowCopy;
  } });
  var N = n(v6);
  t.RLP = N;
  var z = w6;
  Object.defineProperty(t, "computePublicKey", { enumerable: !0, get: function() {
    return z.computePublicKey;
  } }), Object.defineProperty(t, "recoverPublicKey", { enumerable: !0, get: function() {
    return z.recoverPublicKey;
  } }), Object.defineProperty(t, "SigningKey", { enumerable: !0, get: function() {
    return z.SigningKey;
  } });
  var O = Rc;
  Object.defineProperty(t, "formatBytes32String", { enumerable: !0, get: function() {
    return O.formatBytes32String;
  } }), Object.defineProperty(t, "nameprep", { enumerable: !0, get: function() {
    return O.nameprep;
  } }), Object.defineProperty(t, "parseBytes32String", { enumerable: !0, get: function() {
    return O.parseBytes32String;
  } }), Object.defineProperty(t, "_toEscapedUtf8String", { enumerable: !0, get: function() {
    return O._toEscapedUtf8String;
  } }), Object.defineProperty(t, "toUtf8Bytes", { enumerable: !0, get: function() {
    return O.toUtf8Bytes;
  } }), Object.defineProperty(t, "toUtf8CodePoints", { enumerable: !0, get: function() {
    return O.toUtf8CodePoints;
  } }), Object.defineProperty(t, "toUtf8String", { enumerable: !0, get: function() {
    return O.toUtf8String;
  } }), Object.defineProperty(t, "Utf8ErrorFuncs", { enumerable: !0, get: function() {
    return O.Utf8ErrorFuncs;
  } });
  var T = A6;
  Object.defineProperty(t, "accessListify", { enumerable: !0, get: function() {
    return T.accessListify;
  } }), Object.defineProperty(t, "computeAddress", { enumerable: !0, get: function() {
    return T.computeAddress;
  } }), Object.defineProperty(t, "parseTransaction", { enumerable: !0, get: function() {
    return T.parse;
  } }), Object.defineProperty(t, "recoverAddress", { enumerable: !0, get: function() {
    return T.recoverAddress;
  } }), Object.defineProperty(t, "serializeTransaction", { enumerable: !0, get: function() {
    return T.serialize;
  } }), Object.defineProperty(t, "TransactionTypes", { enumerable: !0, get: function() {
    return T.TransactionTypes;
  } });
  var G = E6;
  Object.defineProperty(t, "commify", { enumerable: !0, get: function() {
    return G.commify;
  } }), Object.defineProperty(t, "formatEther", { enumerable: !0, get: function() {
    return G.formatEther;
  } }), Object.defineProperty(t, "parseEther", { enumerable: !0, get: function() {
    return G.parseEther;
  } }), Object.defineProperty(t, "formatUnits", { enumerable: !0, get: function() {
    return G.formatUnits;
  } }), Object.defineProperty(t, "parseUnits", { enumerable: !0, get: function() {
    return G.parseUnits;
  } });
  var J = C6;
  Object.defineProperty(t, "verifyMessage", { enumerable: !0, get: function() {
    return J.verifyMessage;
  } }), Object.defineProperty(t, "verifyTypedData", { enumerable: !0, get: function() {
    return J.verifyTypedData;
  } });
  var Y = I6;
  Object.defineProperty(t, "_fetchData", { enumerable: !0, get: function() {
    return Y._fetchData;
  } }), Object.defineProperty(t, "fetchJson", { enumerable: !0, get: function() {
    return Y.fetchJson;
  } }), Object.defineProperty(t, "poll", { enumerable: !0, get: function() {
    return Y.poll;
  } });
  var X = Fc;
  Object.defineProperty(t, "SupportedAlgorithm", { enumerable: !0, get: function() {
    return X.SupportedAlgorithm;
  } });
  var se = Rc;
  Object.defineProperty(t, "UnicodeNormalizationForm", { enumerable: !0, get: function() {
    return se.UnicodeNormalizationForm;
  } }), Object.defineProperty(t, "Utf8ErrorReason", { enumerable: !0, get: function() {
    return se.Utf8ErrorReason;
  } });
})(Ar);
const k6 = [
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
], Cl = [
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
], S6 = [
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
], js = new Ar.Interface(Cl);
function s0(t) {
  try {
    return Ar.getAddress(t);
  } catch {
    return !1;
  }
}
function D6(t) {
  if (navigator.clipboard && window.isSecureContext)
    return navigator.clipboard.writeText(t);
  {
    const e = document.createElement("textarea");
    return e.value = t, e.style.position = "fixed", e.style.left = "-999999px", e.style.top = "-999999px", document.body.appendChild(e), e.focus(), e.select(), new Promise((r, n) => {
      document.execCommand("copy") ? r(t) : n(), e.remove();
    });
  }
}
const Mc = (t, e) => {
  var r;
  return e.toLowerCase() === pt.toLowerCase() || e.toLowerCase() === ((r = Nn[t].address) == null ? void 0 : r.toLowerCase());
};
function B6(t, e, r) {
  return !e || !r ? !1 : Mc(t, e) && Mc(t, r) ? !0 : e.toLowerCase() === r.toLowerCase();
}
var ps = { exports: {} }, Fa = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _c;
function F6() {
  if (_c)
    return Fa;
  _c = 1;
  var t = zr, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, p, x) {
    var y, C = {}, B = null, F = null;
    x !== void 0 && (B = "" + x), p.key !== void 0 && (B = "" + p.key), p.ref !== void 0 && (F = p.ref);
    for (y in p)
      n.call(p, y) && !i.hasOwnProperty(y) && (C[y] = p[y]);
    if (c && c.defaultProps)
      for (y in p = c.defaultProps, p)
        C[y] === void 0 && (C[y] = p[y]);
    return { $$typeof: e, type: c, key: B, ref: F, props: C, _owner: a.current };
  }
  return Fa.Fragment = r, Fa.jsx = s, Fa.jsxs = s, Fa;
}
var Ra = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tc;
function R6() {
  return Tc || (Tc = 1, process.env.NODE_ENV !== "production" && function() {
    var t = zr, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), R = Symbol.iterator, M = "@@iterator";
    function S(_) {
      if (_ === null || typeof _ != "object")
        return null;
      var K = R && _[R] || _[M];
      return typeof K == "function" ? K : null;
    }
    var U = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function N(_) {
      {
        for (var K = arguments.length, ne = new Array(K > 1 ? K - 1 : 0), oe = 1; oe < K; oe++)
          ne[oe - 1] = arguments[oe];
        z("error", _, ne);
      }
    }
    function z(_, K, ne) {
      {
        var oe = U.ReactDebugCurrentFrame, ge = oe.getStackAddendum();
        ge !== "" && (K += "%s", ne = ne.concat([ge]));
        var we = ne.map(function(me) {
          return String(me);
        });
        we.unshift("Warning: " + K), Function.prototype.apply.call(console[_], console, we);
      }
    }
    var O = !1, T = !1, G = !1, J = !1, Y = !1, X;
    X = Symbol.for("react.module.reference");
    function se(_) {
      return !!(typeof _ == "string" || typeof _ == "function" || _ === n || _ === i || Y || _ === a || _ === x || _ === y || J || _ === F || O || T || G || typeof _ == "object" && _ !== null && (_.$$typeof === B || _.$$typeof === C || _.$$typeof === s || _.$$typeof === c || _.$$typeof === p || _.$$typeof === X || _.getModuleId !== void 0));
    }
    function D(_, K, ne) {
      var oe = _.displayName;
      if (oe)
        return oe;
      var ge = K.displayName || K.name || "";
      return ge !== "" ? ne + "(" + ge + ")" : ne;
    }
    function u(_) {
      return _.displayName || "Context";
    }
    function l(_) {
      if (_ == null)
        return null;
      if (typeof _.tag == "number" && N("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof _ == "function")
        return _.displayName || _.name || null;
      if (typeof _ == "string")
        return _;
      switch (_) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case x:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case c:
            var K = _;
            return u(K) + ".Consumer";
          case s:
            var ne = _;
            return u(ne._context) + ".Provider";
          case p:
            return D(_, _.render, "ForwardRef");
          case C:
            var oe = _.displayName || null;
            return oe !== null ? oe : l(_.type) || "Memo";
          case B: {
            var ge = _, we = ge._payload, me = ge._init;
            try {
              return l(me(we));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var o = Object.assign, d = 0, g, v, A, w, h, m, f;
    function E() {
    }
    E.__reactDisabledLog = !0;
    function k() {
      {
        if (d === 0) {
          g = console.log, v = console.info, A = console.warn, w = console.error, h = console.group, m = console.groupCollapsed, f = console.groupEnd;
          var _ = {
            configurable: !0,
            enumerable: !0,
            value: E,
            writable: !0
          };
          Object.defineProperties(console, {
            info: _,
            log: _,
            warn: _,
            error: _,
            group: _,
            groupCollapsed: _,
            groupEnd: _
          });
        }
        d++;
      }
    }
    function b() {
      {
        if (d--, d === 0) {
          var _ = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: o({}, _, {
              value: g
            }),
            info: o({}, _, {
              value: v
            }),
            warn: o({}, _, {
              value: A
            }),
            error: o({}, _, {
              value: w
            }),
            group: o({}, _, {
              value: h
            }),
            groupCollapsed: o({}, _, {
              value: m
            }),
            groupEnd: o({}, _, {
              value: f
            })
          });
        }
        d < 0 && N("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var I = U.ReactCurrentDispatcher, L;
    function P(_, K, ne) {
      {
        if (L === void 0)
          try {
            throw Error();
          } catch (ge) {
            var oe = ge.stack.trim().match(/\n( *(at )?)/);
            L = oe && oe[1] || "";
          }
        return `
` + L + _;
      }
    }
    var H = !1, $;
    {
      var V = typeof WeakMap == "function" ? WeakMap : Map;
      $ = new V();
    }
    function j(_, K) {
      if (!_ || H)
        return "";
      {
        var ne = $.get(_);
        if (ne !== void 0)
          return ne;
      }
      var oe;
      H = !0;
      var ge = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var we;
      we = I.current, I.current = null, k();
      try {
        if (K) {
          var me = function() {
            throw Error();
          };
          if (Object.defineProperty(me.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(me, []);
            } catch (Ut) {
              oe = Ut;
            }
            Reflect.construct(_, [], me);
          } else {
            try {
              me.call();
            } catch (Ut) {
              oe = Ut;
            }
            _.call(me.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ut) {
            oe = Ut;
          }
          _();
        }
      } catch (Ut) {
        if (Ut && oe && typeof Ut.stack == "string") {
          for (var De = Ut.stack.split(`
`), mt = oe.stack.split(`
`), Ke = De.length - 1, Xe = mt.length - 1; Ke >= 1 && Xe >= 0 && De[Ke] !== mt[Xe]; )
            Xe--;
          for (; Ke >= 1 && Xe >= 0; Ke--, Xe--)
            if (De[Ke] !== mt[Xe]) {
              if (Ke !== 1 || Xe !== 1)
                do
                  if (Ke--, Xe--, Xe < 0 || De[Ke] !== mt[Xe]) {
                    var xt = `
` + De[Ke].replace(" at new ", " at ");
                    return _.displayName && xt.includes("<anonymous>") && (xt = xt.replace("<anonymous>", _.displayName)), typeof _ == "function" && $.set(_, xt), xt;
                  }
                while (Ke >= 1 && Xe >= 0);
              break;
            }
        }
      } finally {
        H = !1, I.current = we, b(), Error.prepareStackTrace = ge;
      }
      var Vt = _ ? _.displayName || _.name : "", Dr = Vt ? P(Vt) : "";
      return typeof _ == "function" && $.set(_, Dr), Dr;
    }
    function le(_, K, ne) {
      return j(_, !1);
    }
    function te(_) {
      var K = _.prototype;
      return !!(K && K.isReactComponent);
    }
    function q(_, K, ne) {
      if (_ == null)
        return "";
      if (typeof _ == "function")
        return j(_, te(_));
      if (typeof _ == "string")
        return P(_);
      switch (_) {
        case x:
          return P("Suspense");
        case y:
          return P("SuspenseList");
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case p:
            return le(_.render);
          case C:
            return q(_.type, K, ne);
          case B: {
            var oe = _, ge = oe._payload, we = oe._init;
            try {
              return q(we(ge), K, ne);
            } catch {
            }
          }
        }
      return "";
    }
    var xe = Object.prototype.hasOwnProperty, ue = {}, he = U.ReactDebugCurrentFrame;
    function Pe(_) {
      if (_) {
        var K = _._owner, ne = q(_.type, _._source, K ? K.type : null);
        he.setExtraStackFrame(ne);
      } else
        he.setExtraStackFrame(null);
    }
    function ye(_, K, ne, oe, ge) {
      {
        var we = Function.call.bind(xe);
        for (var me in _)
          if (we(_, me)) {
            var De = void 0;
            try {
              if (typeof _[me] != "function") {
                var mt = Error((oe || "React class") + ": " + ne + " type `" + me + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof _[me] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw mt.name = "Invariant Violation", mt;
              }
              De = _[me](K, me, oe, ne, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ke) {
              De = Ke;
            }
            De && !(De instanceof Error) && (Pe(ge), N("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", oe || "React class", ne, me, typeof De), Pe(null)), De instanceof Error && !(De.message in ue) && (ue[De.message] = !0, Pe(ge), N("Failed %s type: %s", ne, De.message), Pe(null));
          }
      }
    }
    var be = Array.isArray;
    function Ue(_) {
      return be(_);
    }
    function _e(_) {
      {
        var K = typeof Symbol == "function" && Symbol.toStringTag, ne = K && _[Symbol.toStringTag] || _.constructor.name || "Object";
        return ne;
      }
    }
    function re(_) {
      try {
        return ve(_), !1;
      } catch {
        return !0;
      }
    }
    function ve(_) {
      return "" + _;
    }
    function Le(_) {
      if (re(_))
        return N("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", _e(_)), ve(_);
    }
    var pe = U.ReactCurrentOwner, Te = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ve, Ee, ze;
    ze = {};
    function Ae(_) {
      if (xe.call(_, "ref")) {
        var K = Object.getOwnPropertyDescriptor(_, "ref").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return _.ref !== void 0;
    }
    function Ce(_) {
      if (xe.call(_, "key")) {
        var K = Object.getOwnPropertyDescriptor(_, "key").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return _.key !== void 0;
    }
    function Je(_, K) {
      if (typeof _.ref == "string" && pe.current && K && pe.current.stateNode !== K) {
        var ne = l(pe.current.type);
        ze[ne] || (N('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l(pe.current.type), _.ref), ze[ne] = !0);
      }
    }
    function at(_, K) {
      {
        var ne = function() {
          Ve || (Ve = !0, N("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        ne.isReactWarning = !0, Object.defineProperty(_, "key", {
          get: ne,
          configurable: !0
        });
      }
    }
    function Be(_, K) {
      {
        var ne = function() {
          Ee || (Ee = !0, N("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        ne.isReactWarning = !0, Object.defineProperty(_, "ref", {
          get: ne,
          configurable: !0
        });
      }
    }
    var it = function(_, K, ne, oe, ge, we, me) {
      var De = {
        $$typeof: e,
        type: _,
        key: K,
        ref: ne,
        props: me,
        _owner: we
      };
      return De._store = {}, Object.defineProperty(De._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(De, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: oe
      }), Object.defineProperty(De, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ge
      }), Object.freeze && (Object.freeze(De.props), Object.freeze(De)), De;
    };
    function st(_, K, ne, oe, ge) {
      {
        var we, me = {}, De = null, mt = null;
        ne !== void 0 && (Le(ne), De = "" + ne), Ce(K) && (Le(K.key), De = "" + K.key), Ae(K) && (mt = K.ref, Je(K, ge));
        for (we in K)
          xe.call(K, we) && !Te.hasOwnProperty(we) && (me[we] = K[we]);
        if (_ && _.defaultProps) {
          var Ke = _.defaultProps;
          for (we in Ke)
            me[we] === void 0 && (me[we] = Ke[we]);
        }
        if (De || mt) {
          var Xe = typeof _ == "function" ? _.displayName || _.name || "Unknown" : _;
          De && at(me, Xe), mt && Be(me, Xe);
        }
        return it(_, De, mt, ge, oe, pe.current, me);
      }
    }
    var Ie = U.ReactCurrentOwner, Qe = U.ReactDebugCurrentFrame;
    function Ge(_) {
      if (_) {
        var K = _._owner, ne = q(_.type, _._source, K ? K.type : null);
        Qe.setExtraStackFrame(ne);
      } else
        Qe.setExtraStackFrame(null);
    }
    var ke;
    ke = !1;
    function Ye(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === e;
    }
    function et() {
      {
        if (Ie.current) {
          var _ = l(Ie.current.type);
          if (_)
            return `

Check the render method of \`` + _ + "`.";
        }
        return "";
      }
    }
    function Fe(_) {
      {
        if (_ !== void 0) {
          var K = _.fileName.replace(/^.*[\\\/]/, ""), ne = _.lineNumber;
          return `

Check your code at ` + K + ":" + ne + ".";
        }
        return "";
      }
    }
    var tt = {};
    function ot(_) {
      {
        var K = et();
        if (!K) {
          var ne = typeof _ == "string" ? _ : _.displayName || _.name;
          ne && (K = `

Check the top-level render call using <` + ne + ">.");
        }
        return K;
      }
    }
    function Se(_, K) {
      {
        if (!_._store || _._store.validated || _.key != null)
          return;
        _._store.validated = !0;
        var ne = ot(K);
        if (tt[ne])
          return;
        tt[ne] = !0;
        var oe = "";
        _ && _._owner && _._owner !== Ie.current && (oe = " It was passed a child from " + l(_._owner.type) + "."), Ge(_), N('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ne, oe), Ge(null);
      }
    }
    function rt(_, K) {
      {
        if (typeof _ != "object")
          return;
        if (Ue(_))
          for (var ne = 0; ne < _.length; ne++) {
            var oe = _[ne];
            Ye(oe) && Se(oe, K);
          }
        else if (Ye(_))
          _._store && (_._store.validated = !0);
        else if (_) {
          var ge = S(_);
          if (typeof ge == "function" && ge !== _.entries)
            for (var we = ge.call(_), me; !(me = we.next()).done; )
              Ye(me.value) && Se(me.value, K);
        }
      }
    }
    function ct(_) {
      {
        var K = _.type;
        if (K == null || typeof K == "string")
          return;
        var ne;
        if (typeof K == "function")
          ne = K.propTypes;
        else if (typeof K == "object" && (K.$$typeof === p || K.$$typeof === C))
          ne = K.propTypes;
        else
          return;
        if (ne) {
          var oe = l(K);
          ye(ne, _.props, "prop", oe, _);
        } else if (K.PropTypes !== void 0 && !ke) {
          ke = !0;
          var ge = l(K);
          N("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ge || "Unknown");
        }
        typeof K.getDefaultProps == "function" && !K.getDefaultProps.isReactClassApproved && N("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Re(_) {
      {
        for (var K = Object.keys(_.props), ne = 0; ne < K.length; ne++) {
          var oe = K[ne];
          if (oe !== "children" && oe !== "key") {
            Ge(_), N("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", oe), Ge(null);
            break;
          }
        }
        _.ref !== null && (Ge(_), N("Invalid attribute `ref` supplied to `React.Fragment`."), Ge(null));
      }
    }
    function nt(_, K, ne, oe, ge, we) {
      {
        var me = se(_);
        if (!me) {
          var De = "";
          (_ === void 0 || typeof _ == "object" && _ !== null && Object.keys(_).length === 0) && (De += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var mt = Fe(ge);
          mt ? De += mt : De += et();
          var Ke;
          _ === null ? Ke = "null" : Ue(_) ? Ke = "array" : _ !== void 0 && _.$$typeof === e ? (Ke = "<" + (l(_.type) || "Unknown") + " />", De = " Did you accidentally export a JSX literal instead of a component?") : Ke = typeof _, N("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ke, De);
        }
        var Xe = st(_, K, ne, ge, we);
        if (Xe == null)
          return Xe;
        if (me) {
          var xt = K.children;
          if (xt !== void 0)
            if (oe)
              if (Ue(xt)) {
                for (var Vt = 0; Vt < xt.length; Vt++)
                  rt(xt[Vt], _);
                Object.freeze && Object.freeze(xt);
              } else
                N("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              rt(xt, _);
        }
        return _ === n ? Re(Xe) : ct(Xe), Xe;
      }
    }
    function ft(_, K, ne) {
      return nt(_, K, ne, !0);
    }
    function Me(_, K, ne) {
      return nt(_, K, ne, !1);
    }
    var dt = Me, lt = ft;
    Ra.Fragment = n, Ra.jsx = dt, Ra.jsxs = lt;
  }()), Ra;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = F6() : t.exports = R6();
})(ps);
const Cr = ps.exports.Fragment, W = ps.exports.jsx, Q = ps.exports.jsxs, Il = Af(null), M6 = ({
  provider: t,
  children: e
}) => {
  const [r, n] = Ne(1), [a, i] = Ne("");
  return Ft(() => {
    t ? (t == null || t.getNetwork().then((s) => n(s.chainId)), t == null || t.listAccounts().then((s) => i(s[0]))) : n(1);
  }, [t]), /* @__PURE__ */ W(Il.Provider, {
    value: {
      provider: t,
      chainId: r,
      account: a
    },
    children: e
  });
}, $t = () => vn(Il) || {
  provider: null,
  chainId: 1,
  account: ""
};
function bs(t, e) {
  const { provider: r, account: n } = $t();
  return wa(() => {
    const a = s0(t);
    if (!a || !r)
      return null;
    try {
      return new Np(a, e, n ? r.getSigner(n) : r);
    } catch (i) {
      return console.error("Failed to get contract", i), null;
    }
  }, [t, e, r, n]);
}
const _6 = () => {
  const { chainId: t } = $t();
  return bs(s6[t], S6);
};
function T6() {
  const { chainId: t } = $t();
  return bs(Nn[t].address, k6);
}
const o0 = (t) => {
  const {
    provider: e,
    chainId: r
  } = $t(), n = _6(), [a, i] = Ne({}), [s, c] = Ne(!1), p = xn(async () => {
    if (!e) {
      i({});
      return;
    }
    try {
      c(!0);
      const y = (await e.listAccounts())[0], C = await e.getBalance(y), B = js.getFunction("balanceOf"), F = js.encodeFunctionData(B, [y]), R = t.map((U) => ({
        target: U,
        callData: F
      })), S = (await (n == null ? void 0 : n.callStatic.tryBlockAndAggregate(!1, R))).returnData.map((U) => js.decodeFunctionResult(B, U.returnData));
      c(!1), i({
        [pt]: C,
        ...S.reduce((U, N, z) => ({
          ...U,
          [t[z]]: N.balance
        }), {})
      });
    } catch {
      c(!1);
    }
  }, [e, r, JSON.stringify(t)]);
  return Ft(() => {
    p();
    const x = setInterval(() => {
      p();
    }, 1e4);
    return () => {
      clearInterval(x);
    };
  }, [e, p]), {
    loading: s,
    balances: a,
    refetch: p
  };
}, c0 = Af({
  tokenList: [],
  importedTokens: [],
  addToken: () => {
  },
  removeToken: () => {
  }
}), U6 = ({
  tokenList: t,
  children: e
}) => {
  const {
    chainId: r
  } = $t(), [n, a] = Ne(() => {
    if (typeof window < "u")
      try {
        return JSON.parse(localStorage.getItem("importedTokens") || "[]");
      } catch {
        return [];
      }
    return [];
  }), i = (c) => {
    const p = [...n.filter((x) => x.address !== c.address), c];
    a(p), typeof window < "u" && localStorage.setItem("importedTokens", JSON.stringify(p));
  }, s = (c) => {
    const p = n.filter((x) => x.address.toLowerCase() !== c.address.toLowerCase() && x.chainId === c.chainId);
    a(p), typeof window < "u" && localStorage.setItem("importedTokens", JSON.stringify(p));
  };
  return /* @__PURE__ */ W(c0.Provider, {
    value: {
      tokenList: t != null && t.length ? t : i6[r],
      importedTokens: n,
      addToken: i,
      removeToken: s
    },
    children: e
  });
}, gs = () => {
  const {
    tokenList: t,
    importedTokens: e
  } = vn(c0), {
    chainId: r
  } = $t();
  return wa(() => [...e.filter((n) => n.chainId === r).map((n) => ({
    ...n,
    isImport: !0
  })), ...t || []], [t, e, r]);
}, kl = () => {
  const {
    addToken: t,
    removeToken: e,
    importedTokens: r
  } = vn(c0);
  return {
    addToken: t,
    removeToken: e,
    importedTokens: r
  };
}, Sl = (t) => /* @__PURE__ */ ae.createElement("svg", { width: 94, height: 94, viewBox: "0 0 94 94", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ ae.createElement("path", { d: "M92 47C92 22.1472 71.8528 2 47 2C22.1472 2 2 22.1472 2 47C2 71.8528 22.1472 92 47 92", stroke: "currentColor", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" })), Dl = (t) => /* @__PURE__ */ ae.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24px", height: "24px", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "CurrencyLogo__StyledLogo-sc-1q82rua-1 gpxlKa", ...t }, /* @__PURE__ */ ae.createElement("circle", { cx: 12, cy: 12, r: 10 }), /* @__PURE__ */ ae.createElement("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }), /* @__PURE__ */ ae.createElement("line", { x1: 12, y1: 17, x2: 12.01, y2: 17 })), P6 = (t) => /* @__PURE__ */ ae.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-trash-2", ...t }, /* @__PURE__ */ ae.createElement("polyline", { points: "3 6 5 6 21 6" }), /* @__PURE__ */ ae.createElement("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }), /* @__PURE__ */ ae.createElement("line", { x1: 10, y1: 11, x2: 10, y2: 17 }), /* @__PURE__ */ ae.createElement("line", { x1: 14, y1: 11, x2: 14, y2: 17 })), N6 = [
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
], O6 = (t) => {
  const e = bs(t, N6), { chainId: r } = $t(), [n, a] = Ne(null);
  return Ft(() => {
    (async () => {
      const [s, c, p] = await Promise.all([
        e == null ? void 0 : e.name(),
        e == null ? void 0 : e.symbol(),
        e == null ? void 0 : e.decimals()
      ]);
      a({
        address: t,
        name: s,
        symbol: c,
        decimals: p,
        chainId: r,
        logoURI: ""
      });
    })();
  }, [e, t, r]), n;
}, L6 = ee(P6)`
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
`, j6 = Uo`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, W6 = ee(Sl)`
  animation: 2s ${j6} linear infinite;
  width: 20px;
  height: 20px;
  color: ${({
  theme: t
}) => t.accent};

  path {
    stroke-width: 8;
  }
`, Bl = ee.input`
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
`, H6 = ee.div`
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
`, Fl = ee.div`
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
`, Rl = ee.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
`, Ml = ee.div`
  color: ${({
  theme: t
}) => t.subText};
  font-size: 0.75rem;
`, z6 = ee.div`
  font-size: 1rem;
  overflow: hidden;
  max-width: 6rem;
  text-overflow: ellipsis;
`, G6 = ee.div`
  padding-bottom: 16px;
  border-bottom: 1px solid ${({
  theme: t
}) => t.stroke};
  display: flex;
  gap: 24px;
  cursor: pointer;
`, Uc = ee.div`
  color: ${({
  theme: t,
  active: e
}) => e ? t.accent : t.text};
  hover: ${({
  theme: t
}) => t.accent};
  font-size: 14px;
  font-weight: 500;
`, $6 = ee.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: ${({
  theme: t
}) => t.subText};
`, V6 = ({
  address: t,
  onImport: e
}) => {
  const r = O6(t);
  return r ? /* @__PURE__ */ Q(Fl, {
    selected: !1,
    children: [/* @__PURE__ */ Q(Rl, {
      children: [/* @__PURE__ */ W(Dl, {}), /* @__PURE__ */ Q("div", {
        style: {
          textAlign: "left"
        },
        children: [/* @__PURE__ */ W("span", {
          children: r.symbol
        }), /* @__PURE__ */ W(Ml, {
          children: r.name
        })]
      })]
    }), /* @__PURE__ */ W(aa, {
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
function Pc({
  selectedToken: t,
  onChange: e,
  onImport: r
}) {
  const n = gs(), [a, i] = Ne(""), s = n.map((R) => R.address), {
    balances: c,
    loading: p
  } = o0(s), {
    removeToken: x
  } = kl(), {
    chainId: y
  } = $t(), C = [{
    ...es[y],
    balance: c[pt],
    formattedBalance: Ar.formatUnits(c[pt] || de.from(0), 18)
  }, ...n.map((R) => {
    const M = c[R.address], S = Ar.formatUnits(M || de.from(0), R.decimals);
    return {
      ...R,
      balance: M,
      formattedBalance: S
    };
  }).sort((R, M) => parseFloat(M.formattedBalance) - parseFloat(R.formattedBalance))].filter((R) => R.address.toLowerCase() === a.trim().toLowerCase() || R.name.toLowerCase().includes(a.toLowerCase()) || R.symbol.toLowerCase().includes(a.toLowerCase())), [B, F] = Ne("all");
  return /* @__PURE__ */ Q(Cr, {
    children: [/* @__PURE__ */ W(Bl, {
      placeholder: "Search by token name, token symbol or address",
      value: a,
      onChange: (R) => i(R.target.value)
    }), /* @__PURE__ */ Q(G6, {
      children: [/* @__PURE__ */ W(Uc, {
        active: B === "all",
        onClick: () => F("all"),
        role: "button",
        children: "All"
      }), /* @__PURE__ */ W(Uc, {
        active: B === "imported",
        onClick: () => F("imported"),
        role: "button",
        children: "Imported"
      })]
    }), /* @__PURE__ */ Q(H6, {
      children: [!C.length && Ar.isAddress(a.trim()) && /* @__PURE__ */ W(V6, {
        address: a.trim(),
        onImport: r
      }), !C.filter((R) => B === "imported" ? R.isImport : !0).length && !Ar.isAddress(a.trim()) && /* @__PURE__ */ W($6, {
        children: "No results found"
      }), C.filter((R) => B === "imported" ? R.isImport : !0).map((R) => /* @__PURE__ */ Q(Fl, {
        selected: R.address === t,
        onClick: () => {
          e(R.address);
        },
        children: [/* @__PURE__ */ Q(Rl, {
          children: [/* @__PURE__ */ W("img", {
            src: R.logoURI,
            width: "24",
            height: "24",
            alt: "logo",
            style: {
              borderRadius: "999px"
            },
            onError: ({
              currentTarget: M
            }) => {
              M.onerror = null, M.src = new URL("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iQ3VycmVuY3lMb2dvX19TdHlsZWRMb2dvLXNjLTFxODJydWEtMSBncHhsS2EiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIj48L2NpcmNsZT48cGF0aCBkPSJNOS4wOSA5YTMgMyAwIDAgMSA1LjgzIDFjMCAyLTMgMy0zIDMiPjwvcGF0aD48bGluZSB4MT0iMTIiIHkxPSIxNyIgeDI9IjEyLjAxIiB5Mj0iMTciPjwvbGluZT48L3N2Zz4K", self.location).href;
            }
          }), /* @__PURE__ */ Q("div", {
            style: {
              textAlign: "left"
            },
            children: [/* @__PURE__ */ W("span", {
              children: R.symbol
            }), /* @__PURE__ */ W(Ml, {
              children: R.name
            })]
          })]
        }), B === "imported" ? /* @__PURE__ */ W(L6, {
          onClick: (M) => {
            M.stopPropagation(), x(R);
          }
        }) : p ? /* @__PURE__ */ W(W6, {}) : /* @__PURE__ */ W(z6, {
          children: R.balance && parseFloat(R.formattedBalance) < 1e-6 ? R.formattedBalance : parseFloat(parseFloat(R.formattedBalance).toPrecision(10))
        })]
      }, R.address))]
    })]
  });
}
var _l = { exports: {} };
(function(t) {
  (function(e, r) {
    function n(D, u) {
      if (!D)
        throw new Error(u || "Assertion failed");
    }
    function a(D, u) {
      D.super_ = u;
      var l = function() {
      };
      l.prototype = u.prototype, D.prototype = new l(), D.prototype.constructor = D;
    }
    function i(D, u, l) {
      if (i.isBN(D))
        return D;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, D !== null && ((u === "le" || u === "be") && (l = u, u = 10), this._init(D || 0, u || 10, l || "be"));
    }
    typeof e == "object" ? e.exports = i : r.BN = i, i.BN = i, i.wordSize = 26;
    var s;
    try {
      typeof window < "u" && typeof window.Buffer < "u" ? s = window.Buffer : s = jf.Buffer;
    } catch {
    }
    i.isBN = function(u) {
      return u instanceof i ? !0 : u !== null && typeof u == "object" && u.constructor.wordSize === i.wordSize && Array.isArray(u.words);
    }, i.max = function(u, l) {
      return u.cmp(l) > 0 ? u : l;
    }, i.min = function(u, l) {
      return u.cmp(l) < 0 ? u : l;
    }, i.prototype._init = function(u, l, o) {
      if (typeof u == "number")
        return this._initNumber(u, l, o);
      if (typeof u == "object")
        return this._initArray(u, l, o);
      l === "hex" && (l = 16), n(l === (l | 0) && l >= 2 && l <= 36), u = u.toString().replace(/\s+/g, "");
      var d = 0;
      u[0] === "-" && (d++, this.negative = 1), d < u.length && (l === 16 ? this._parseHex(u, d, o) : (this._parseBase(u, l, d), o === "le" && this._initArray(this.toArray(), l, o)));
    }, i.prototype._initNumber = function(u, l, o) {
      u < 0 && (this.negative = 1, u = -u), u < 67108864 ? (this.words = [u & 67108863], this.length = 1) : u < 4503599627370496 ? (this.words = [
        u & 67108863,
        u / 67108864 & 67108863
      ], this.length = 2) : (n(u < 9007199254740992), this.words = [
        u & 67108863,
        u / 67108864 & 67108863,
        1
      ], this.length = 3), o === "le" && this._initArray(this.toArray(), l, o);
    }, i.prototype._initArray = function(u, l, o) {
      if (n(typeof u.length == "number"), u.length <= 0)
        return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(u.length / 3), this.words = new Array(this.length);
      for (var d = 0; d < this.length; d++)
        this.words[d] = 0;
      var g, v, A = 0;
      if (o === "be")
        for (d = u.length - 1, g = 0; d >= 0; d -= 3)
          v = u[d] | u[d - 1] << 8 | u[d - 2] << 16, this.words[g] |= v << A & 67108863, this.words[g + 1] = v >>> 26 - A & 67108863, A += 24, A >= 26 && (A -= 26, g++);
      else if (o === "le")
        for (d = 0, g = 0; d < u.length; d += 3)
          v = u[d] | u[d + 1] << 8 | u[d + 2] << 16, this.words[g] |= v << A & 67108863, this.words[g + 1] = v >>> 26 - A & 67108863, A += 24, A >= 26 && (A -= 26, g++);
      return this.strip();
    };
    function c(D, u) {
      var l = D.charCodeAt(u);
      return l >= 65 && l <= 70 ? l - 55 : l >= 97 && l <= 102 ? l - 87 : l - 48 & 15;
    }
    function p(D, u, l) {
      var o = c(D, l);
      return l - 1 >= u && (o |= c(D, l - 1) << 4), o;
    }
    i.prototype._parseHex = function(u, l, o) {
      this.length = Math.ceil((u.length - l) / 6), this.words = new Array(this.length);
      for (var d = 0; d < this.length; d++)
        this.words[d] = 0;
      var g = 0, v = 0, A;
      if (o === "be")
        for (d = u.length - 1; d >= l; d -= 2)
          A = p(u, l, d) << g, this.words[v] |= A & 67108863, g >= 18 ? (g -= 18, v += 1, this.words[v] |= A >>> 26) : g += 8;
      else {
        var w = u.length - l;
        for (d = w % 2 === 0 ? l + 1 : l; d < u.length; d += 2)
          A = p(u, l, d) << g, this.words[v] |= A & 67108863, g >= 18 ? (g -= 18, v += 1, this.words[v] |= A >>> 26) : g += 8;
      }
      this.strip();
    };
    function x(D, u, l, o) {
      for (var d = 0, g = Math.min(D.length, l), v = u; v < g; v++) {
        var A = D.charCodeAt(v) - 48;
        d *= o, A >= 49 ? d += A - 49 + 10 : A >= 17 ? d += A - 17 + 10 : d += A;
      }
      return d;
    }
    i.prototype._parseBase = function(u, l, o) {
      this.words = [0], this.length = 1;
      for (var d = 0, g = 1; g <= 67108863; g *= l)
        d++;
      d--, g = g / l | 0;
      for (var v = u.length - o, A = v % d, w = Math.min(v, v - A) + o, h = 0, m = o; m < w; m += d)
        h = x(u, m, m + d, l), this.imuln(g), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h);
      if (A !== 0) {
        var f = 1;
        for (h = x(u, m, u.length, l), m = 0; m < A; m++)
          f *= l;
        this.imuln(f), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h);
      }
      this.strip();
    }, i.prototype.copy = function(u) {
      u.words = new Array(this.length);
      for (var l = 0; l < this.length; l++)
        u.words[l] = this.words[l];
      u.length = this.length, u.negative = this.negative, u.red = this.red;
    }, i.prototype.clone = function() {
      var u = new i(null);
      return this.copy(u), u;
    }, i.prototype._expand = function(u) {
      for (; this.length < u; )
        this.words[this.length++] = 0;
      return this;
    }, i.prototype.strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0; )
        this.length--;
      return this._normSign();
    }, i.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, i.prototype.inspect = function() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    };
    var y = [
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
    ], C = [
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
    ], B = [
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
    i.prototype.toString = function(u, l) {
      u = u || 10, l = l | 0 || 1;
      var o;
      if (u === 16 || u === "hex") {
        o = "";
        for (var d = 0, g = 0, v = 0; v < this.length; v++) {
          var A = this.words[v], w = ((A << d | g) & 16777215).toString(16);
          g = A >>> 24 - d & 16777215, g !== 0 || v !== this.length - 1 ? o = y[6 - w.length] + w + o : o = w + o, d += 2, d >= 26 && (d -= 26, v--);
        }
        for (g !== 0 && (o = g.toString(16) + o); o.length % l !== 0; )
          o = "0" + o;
        return this.negative !== 0 && (o = "-" + o), o;
      }
      if (u === (u | 0) && u >= 2 && u <= 36) {
        var h = C[u], m = B[u];
        o = "";
        var f = this.clone();
        for (f.negative = 0; !f.isZero(); ) {
          var E = f.modn(m).toString(u);
          f = f.idivn(m), f.isZero() ? o = E + o : o = y[h - E.length] + E + o;
        }
        for (this.isZero() && (o = "0" + o); o.length % l !== 0; )
          o = "0" + o;
        return this.negative !== 0 && (o = "-" + o), o;
      }
      n(!1, "Base should be between 2 and 36");
    }, i.prototype.toNumber = function() {
      var u = this.words[0];
      return this.length === 2 ? u += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? u += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -u : u;
    }, i.prototype.toJSON = function() {
      return this.toString(16);
    }, i.prototype.toBuffer = function(u, l) {
      return n(typeof s < "u"), this.toArrayLike(s, u, l);
    }, i.prototype.toArray = function(u, l) {
      return this.toArrayLike(Array, u, l);
    }, i.prototype.toArrayLike = function(u, l, o) {
      var d = this.byteLength(), g = o || Math.max(1, d);
      n(d <= g, "byte array longer than desired length"), n(g > 0, "Requested array length <= 0"), this.strip();
      var v = l === "le", A = new u(g), w, h, m = this.clone();
      if (v) {
        for (h = 0; !m.isZero(); h++)
          w = m.andln(255), m.iushrn(8), A[h] = w;
        for (; h < g; h++)
          A[h] = 0;
      } else {
        for (h = 0; h < g - d; h++)
          A[h] = 0;
        for (h = 0; !m.isZero(); h++)
          w = m.andln(255), m.iushrn(8), A[g - h - 1] = w;
      }
      return A;
    }, Math.clz32 ? i.prototype._countBits = function(u) {
      return 32 - Math.clz32(u);
    } : i.prototype._countBits = function(u) {
      var l = u, o = 0;
      return l >= 4096 && (o += 13, l >>>= 13), l >= 64 && (o += 7, l >>>= 7), l >= 8 && (o += 4, l >>>= 4), l >= 2 && (o += 2, l >>>= 2), o + l;
    }, i.prototype._zeroBits = function(u) {
      if (u === 0)
        return 26;
      var l = u, o = 0;
      return (l & 8191) === 0 && (o += 13, l >>>= 13), (l & 127) === 0 && (o += 7, l >>>= 7), (l & 15) === 0 && (o += 4, l >>>= 4), (l & 3) === 0 && (o += 2, l >>>= 2), (l & 1) === 0 && o++, o;
    }, i.prototype.bitLength = function() {
      var u = this.words[this.length - 1], l = this._countBits(u);
      return (this.length - 1) * 26 + l;
    };
    function F(D) {
      for (var u = new Array(D.bitLength()), l = 0; l < u.length; l++) {
        var o = l / 26 | 0, d = l % 26;
        u[l] = (D.words[o] & 1 << d) >>> d;
      }
      return u;
    }
    i.prototype.zeroBits = function() {
      if (this.isZero())
        return 0;
      for (var u = 0, l = 0; l < this.length; l++) {
        var o = this._zeroBits(this.words[l]);
        if (u += o, o !== 26)
          break;
      }
      return u;
    }, i.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, i.prototype.toTwos = function(u) {
      return this.negative !== 0 ? this.abs().inotn(u).iaddn(1) : this.clone();
    }, i.prototype.fromTwos = function(u) {
      return this.testn(u - 1) ? this.notn(u).iaddn(1).ineg() : this.clone();
    }, i.prototype.isNeg = function() {
      return this.negative !== 0;
    }, i.prototype.neg = function() {
      return this.clone().ineg();
    }, i.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, i.prototype.iuor = function(u) {
      for (; this.length < u.length; )
        this.words[this.length++] = 0;
      for (var l = 0; l < u.length; l++)
        this.words[l] = this.words[l] | u.words[l];
      return this.strip();
    }, i.prototype.ior = function(u) {
      return n((this.negative | u.negative) === 0), this.iuor(u);
    }, i.prototype.or = function(u) {
      return this.length > u.length ? this.clone().ior(u) : u.clone().ior(this);
    }, i.prototype.uor = function(u) {
      return this.length > u.length ? this.clone().iuor(u) : u.clone().iuor(this);
    }, i.prototype.iuand = function(u) {
      var l;
      this.length > u.length ? l = u : l = this;
      for (var o = 0; o < l.length; o++)
        this.words[o] = this.words[o] & u.words[o];
      return this.length = l.length, this.strip();
    }, i.prototype.iand = function(u) {
      return n((this.negative | u.negative) === 0), this.iuand(u);
    }, i.prototype.and = function(u) {
      return this.length > u.length ? this.clone().iand(u) : u.clone().iand(this);
    }, i.prototype.uand = function(u) {
      return this.length > u.length ? this.clone().iuand(u) : u.clone().iuand(this);
    }, i.prototype.iuxor = function(u) {
      var l, o;
      this.length > u.length ? (l = this, o = u) : (l = u, o = this);
      for (var d = 0; d < o.length; d++)
        this.words[d] = l.words[d] ^ o.words[d];
      if (this !== l)
        for (; d < l.length; d++)
          this.words[d] = l.words[d];
      return this.length = l.length, this.strip();
    }, i.prototype.ixor = function(u) {
      return n((this.negative | u.negative) === 0), this.iuxor(u);
    }, i.prototype.xor = function(u) {
      return this.length > u.length ? this.clone().ixor(u) : u.clone().ixor(this);
    }, i.prototype.uxor = function(u) {
      return this.length > u.length ? this.clone().iuxor(u) : u.clone().iuxor(this);
    }, i.prototype.inotn = function(u) {
      n(typeof u == "number" && u >= 0);
      var l = Math.ceil(u / 26) | 0, o = u % 26;
      this._expand(l), o > 0 && l--;
      for (var d = 0; d < l; d++)
        this.words[d] = ~this.words[d] & 67108863;
      return o > 0 && (this.words[d] = ~this.words[d] & 67108863 >> 26 - o), this.strip();
    }, i.prototype.notn = function(u) {
      return this.clone().inotn(u);
    }, i.prototype.setn = function(u, l) {
      n(typeof u == "number" && u >= 0);
      var o = u / 26 | 0, d = u % 26;
      return this._expand(o + 1), l ? this.words[o] = this.words[o] | 1 << d : this.words[o] = this.words[o] & ~(1 << d), this.strip();
    }, i.prototype.iadd = function(u) {
      var l;
      if (this.negative !== 0 && u.negative === 0)
        return this.negative = 0, l = this.isub(u), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && u.negative !== 0)
        return u.negative = 0, l = this.isub(u), u.negative = 1, l._normSign();
      var o, d;
      this.length > u.length ? (o = this, d = u) : (o = u, d = this);
      for (var g = 0, v = 0; v < d.length; v++)
        l = (o.words[v] | 0) + (d.words[v] | 0) + g, this.words[v] = l & 67108863, g = l >>> 26;
      for (; g !== 0 && v < o.length; v++)
        l = (o.words[v] | 0) + g, this.words[v] = l & 67108863, g = l >>> 26;
      if (this.length = o.length, g !== 0)
        this.words[this.length] = g, this.length++;
      else if (o !== this)
        for (; v < o.length; v++)
          this.words[v] = o.words[v];
      return this;
    }, i.prototype.add = function(u) {
      var l;
      return u.negative !== 0 && this.negative === 0 ? (u.negative = 0, l = this.sub(u), u.negative ^= 1, l) : u.negative === 0 && this.negative !== 0 ? (this.negative = 0, l = u.sub(this), this.negative = 1, l) : this.length > u.length ? this.clone().iadd(u) : u.clone().iadd(this);
    }, i.prototype.isub = function(u) {
      if (u.negative !== 0) {
        u.negative = 0;
        var l = this.iadd(u);
        return u.negative = 1, l._normSign();
      } else if (this.negative !== 0)
        return this.negative = 0, this.iadd(u), this.negative = 1, this._normSign();
      var o = this.cmp(u);
      if (o === 0)
        return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var d, g;
      o > 0 ? (d = this, g = u) : (d = u, g = this);
      for (var v = 0, A = 0; A < g.length; A++)
        l = (d.words[A] | 0) - (g.words[A] | 0) + v, v = l >> 26, this.words[A] = l & 67108863;
      for (; v !== 0 && A < d.length; A++)
        l = (d.words[A] | 0) + v, v = l >> 26, this.words[A] = l & 67108863;
      if (v === 0 && A < d.length && d !== this)
        for (; A < d.length; A++)
          this.words[A] = d.words[A];
      return this.length = Math.max(this.length, A), d !== this && (this.negative = 1), this.strip();
    }, i.prototype.sub = function(u) {
      return this.clone().isub(u);
    };
    function R(D, u, l) {
      l.negative = u.negative ^ D.negative;
      var o = D.length + u.length | 0;
      l.length = o, o = o - 1 | 0;
      var d = D.words[0] | 0, g = u.words[0] | 0, v = d * g, A = v & 67108863, w = v / 67108864 | 0;
      l.words[0] = A;
      for (var h = 1; h < o; h++) {
        for (var m = w >>> 26, f = w & 67108863, E = Math.min(h, u.length - 1), k = Math.max(0, h - D.length + 1); k <= E; k++) {
          var b = h - k | 0;
          d = D.words[b] | 0, g = u.words[k] | 0, v = d * g + f, m += v / 67108864 | 0, f = v & 67108863;
        }
        l.words[h] = f | 0, w = m | 0;
      }
      return w !== 0 ? l.words[h] = w | 0 : l.length--, l.strip();
    }
    var M = function(u, l, o) {
      var d = u.words, g = l.words, v = o.words, A = 0, w, h, m, f = d[0] | 0, E = f & 8191, k = f >>> 13, b = d[1] | 0, I = b & 8191, L = b >>> 13, P = d[2] | 0, H = P & 8191, $ = P >>> 13, V = d[3] | 0, j = V & 8191, le = V >>> 13, te = d[4] | 0, q = te & 8191, xe = te >>> 13, ue = d[5] | 0, he = ue & 8191, Pe = ue >>> 13, ye = d[6] | 0, be = ye & 8191, Ue = ye >>> 13, _e = d[7] | 0, re = _e & 8191, ve = _e >>> 13, Le = d[8] | 0, pe = Le & 8191, Te = Le >>> 13, Ve = d[9] | 0, Ee = Ve & 8191, ze = Ve >>> 13, Ae = g[0] | 0, Ce = Ae & 8191, Je = Ae >>> 13, at = g[1] | 0, Be = at & 8191, it = at >>> 13, st = g[2] | 0, Ie = st & 8191, Qe = st >>> 13, Ge = g[3] | 0, ke = Ge & 8191, Ye = Ge >>> 13, et = g[4] | 0, Fe = et & 8191, tt = et >>> 13, ot = g[5] | 0, Se = ot & 8191, rt = ot >>> 13, ct = g[6] | 0, Re = ct & 8191, nt = ct >>> 13, ft = g[7] | 0, Me = ft & 8191, dt = ft >>> 13, lt = g[8] | 0, _ = lt & 8191, K = lt >>> 13, ne = g[9] | 0, oe = ne & 8191, ge = ne >>> 13;
      o.negative = u.negative ^ l.negative, o.length = 19, w = Math.imul(E, Ce), h = Math.imul(E, Je), h = h + Math.imul(k, Ce) | 0, m = Math.imul(k, Je);
      var we = (A + w | 0) + ((h & 8191) << 13) | 0;
      A = (m + (h >>> 13) | 0) + (we >>> 26) | 0, we &= 67108863, w = Math.imul(I, Ce), h = Math.imul(I, Je), h = h + Math.imul(L, Ce) | 0, m = Math.imul(L, Je), w = w + Math.imul(E, Be) | 0, h = h + Math.imul(E, it) | 0, h = h + Math.imul(k, Be) | 0, m = m + Math.imul(k, it) | 0;
      var me = (A + w | 0) + ((h & 8191) << 13) | 0;
      A = (m + (h >>> 13) | 0) + (me >>> 26) | 0, me &= 67108863, w = Math.imul(H, Ce), h = Math.imul(H, Je), h = h + Math.imul($, Ce) | 0, m = Math.imul($, Je), w = w + Math.imul(I, Be) | 0, h = h + Math.imul(I, it) | 0, h = h + Math.imul(L, Be) | 0, m = m + Math.imul(L, it) | 0, w = w + Math.imul(E, Ie) | 0, h = h + Math.imul(E, Qe) | 0, h = h + Math.imul(k, Ie) | 0, m = m + Math.imul(k, Qe) | 0;
      var De = (A + w | 0) + ((h & 8191) << 13) | 0;
      A = (m + (h >>> 13) | 0) + (De >>> 26) | 0, De &= 67108863, w = Math.imul(j, Ce), h = Math.imul(j, Je), h = h + Math.imul(le, Ce) | 0, m = Math.imul(le, Je), w = w + Math.imul(H, Be) | 0, h = h + Math.imul(H, it) | 0, h = h + Math.imul($, Be) | 0, m = m + Math.imul($, it) | 0, w = w + Math.imul(I, Ie) | 0, h = h + Math.imul(I, Qe) | 0, h = h + Math.imul(L, Ie) | 0, m = m + Math.imul(L, Qe) | 0, w = w + Math.imul(E, ke) | 0, h = h + Math.imul(E, Ye) | 0, h = h + Math.imul(k, ke) | 0, m = m + Math.imul(k, Ye) | 0;
      var mt = (A + w | 0) + ((h & 8191) << 13) | 0;
      A = (m + (h >>> 13) | 0) + (mt >>> 26) | 0, mt &= 67108863, w = Math.imul(q, Ce), h = Math.imul(q, Je), h = h + Math.imul(xe, Ce) | 0, m = Math.imul(xe, Je), w = w + Math.imul(j, Be) | 0, h = h + Math.imul(j, it) | 0, h = h + Math.imul(le, Be) | 0, m = m + Math.imul(le, it) | 0, w = w + Math.imul(H, Ie) | 0, h = h + Math.imul(H, Qe) | 0, h = h + Math.imul($, Ie) | 0, m = m + Math.imul($, Qe) | 0, w = w + Math.imul(I, ke) | 0, h = h + Math.imul(I, Ye) | 0, h = h + Math.imul(L, ke) | 0, m = m + Math.imul(L, Ye) | 0, w = w + Math.imul(E, Fe) | 0, h = h + Math.imul(E, tt) | 0, h = h + Math.imul(k, Fe) | 0, m = m + Math.imul(k, tt) | 0;
      var Ke = (A + w | 0) + ((h & 8191) << 13) | 0;
      A = (m + (h >>> 13) | 0) + (Ke >>> 26) | 0, Ke &= 67108863, w = Math.imul(he, Ce), h = Math.imul(he, Je), h = h + Math.imul(Pe, Ce) | 0, m = Math.imul(Pe, Je), w = w + Math.imul(q, Be) | 0, h = h + Math.imul(q, it) | 0, h = h + Math.imul(xe, Be) | 0, m = m + Math.imul(xe, it) | 0, w = w + Math.imul(j, Ie) | 0, h = h + Math.imul(j, Qe) | 0, h = h + Math.imul(le, Ie) | 0, m = m + Math.imul(le, Qe) | 0, w = w + Math.imul(H, ke) | 0, h = h + Math.imul(H, Ye) | 0, h = h + Math.imul($, ke) | 0, m = m + Math.imul($, Ye) | 0, w = w + Math.imul(I, Fe) | 0, h = h + Math.imul(I, tt) | 0, h = h + Math.imul(L, Fe) | 0, m = m + Math.imul(L, tt) | 0, w = w + Math.imul(E, Se) | 0, h = h + Math.imul(E, rt) | 0, h = h + Math.imul(k, Se) | 0, m = m + Math.imul(k, rt) | 0;
      var Xe = (A + w | 0) + ((h & 8191) << 13) | 0;
      A = (m + (h >>> 13) | 0) + (Xe >>> 26) | 0, Xe &= 67108863, w = Math.imul(be, Ce), h = Math.imul(be, Je), h = h + Math.imul(Ue, Ce) | 0, m = Math.imul(Ue, Je), w = w + Math.imul(he, Be) | 0, h = h + Math.imul(he, it) | 0, h = h + Math.imul(Pe, Be) | 0, m = m + Math.imul(Pe, it) | 0, w = w + Math.imul(q, Ie) | 0, h = h + Math.imul(q, Qe) | 0, h = h + Math.imul(xe, Ie) | 0, m = m + Math.imul(xe, Qe) | 0, w = w + Math.imul(j, ke) | 0, h = h + Math.imul(j, Ye) | 0, h = h + Math.imul(le, ke) | 0, m = m + Math.imul(le, Ye) | 0, w = w + Math.imul(H, Fe) | 0, h = h + Math.imul(H, tt) | 0, h = h + Math.imul($, Fe) | 0, m = m + Math.imul($, tt) | 0, w = w + Math.imul(I, Se) | 0, h = h + Math.imul(I, rt) | 0, h = h + Math.imul(L, Se) | 0, m = m + Math.imul(L, rt) | 0, w = w + Math.imul(E, Re) | 0, h = h + Math.imul(E, nt) | 0, h = h + Math.imul(k, Re) | 0, m = m + Math.imul(k, nt) | 0;
      var xt = (A + w | 0) + ((h & 8191) << 13) | 0;
      A = (m + (h >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, w = Math.imul(re, Ce), h = Math.imul(re, Je), h = h + Math.imul(ve, Ce) | 0, m = Math.imul(ve, Je), w = w + Math.imul(be, Be) | 0, h = h + Math.imul(be, it) | 0, h = h + Math.imul(Ue, Be) | 0, m = m + Math.imul(Ue, it) | 0, w = w + Math.imul(he, Ie) | 0, h = h + Math.imul(he, Qe) | 0, h = h + Math.imul(Pe, Ie) | 0, m = m + Math.imul(Pe, Qe) | 0, w = w + Math.imul(q, ke) | 0, h = h + Math.imul(q, Ye) | 0, h = h + Math.imul(xe, ke) | 0, m = m + Math.imul(xe, Ye) | 0, w = w + Math.imul(j, Fe) | 0, h = h + Math.imul(j, tt) | 0, h = h + Math.imul(le, Fe) | 0, m = m + Math.imul(le, tt) | 0, w = w + Math.imul(H, Se) | 0, h = h + Math.imul(H, rt) | 0, h = h + Math.imul($, Se) | 0, m = m + Math.imul($, rt) | 0, w = w + Math.imul(I, Re) | 0, h = h + Math.imul(I, nt) | 0, h = h + Math.imul(L, Re) | 0, m = m + Math.imul(L, nt) | 0, w = w + Math.imul(E, Me) | 0, h = h + Math.imul(E, dt) | 0, h = h + Math.imul(k, Me) | 0, m = m + Math.imul(k, dt) | 0;
      var Vt = (A + w | 0) + ((h & 8191) << 13) | 0;
      A = (m + (h >>> 13) | 0) + (Vt >>> 26) | 0, Vt &= 67108863, w = Math.imul(pe, Ce), h = Math.imul(pe, Je), h = h + Math.imul(Te, Ce) | 0, m = Math.imul(Te, Je), w = w + Math.imul(re, Be) | 0, h = h + Math.imul(re, it) | 0, h = h + Math.imul(ve, Be) | 0, m = m + Math.imul(ve, it) | 0, w = w + Math.imul(be, Ie) | 0, h = h + Math.imul(be, Qe) | 0, h = h + Math.imul(Ue, Ie) | 0, m = m + Math.imul(Ue, Qe) | 0, w = w + Math.imul(he, ke) | 0, h = h + Math.imul(he, Ye) | 0, h = h + Math.imul(Pe, ke) | 0, m = m + Math.imul(Pe, Ye) | 0, w = w + Math.imul(q, Fe) | 0, h = h + Math.imul(q, tt) | 0, h = h + Math.imul(xe, Fe) | 0, m = m + Math.imul(xe, tt) | 0, w = w + Math.imul(j, Se) | 0, h = h + Math.imul(j, rt) | 0, h = h + Math.imul(le, Se) | 0, m = m + Math.imul(le, rt) | 0, w = w + Math.imul(H, Re) | 0, h = h + Math.imul(H, nt) | 0, h = h + Math.imul($, Re) | 0, m = m + Math.imul($, nt) | 0, w = w + Math.imul(I, Me) | 0, h = h + Math.imul(I, dt) | 0, h = h + Math.imul(L, Me) | 0, m = m + Math.imul(L, dt) | 0, w = w + Math.imul(E, _) | 0, h = h + Math.imul(E, K) | 0, h = h + Math.imul(k, _) | 0, m = m + Math.imul(k, K) | 0;
      var Dr = (A + w | 0) + ((h & 8191) << 13) | 0;
      A = (m + (h >>> 13) | 0) + (Dr >>> 26) | 0, Dr &= 67108863, w = Math.imul(Ee, Ce), h = Math.imul(Ee, Je), h = h + Math.imul(ze, Ce) | 0, m = Math.imul(ze, Je), w = w + Math.imul(pe, Be) | 0, h = h + Math.imul(pe, it) | 0, h = h + Math.imul(Te, Be) | 0, m = m + Math.imul(Te, it) | 0, w = w + Math.imul(re, Ie) | 0, h = h + Math.imul(re, Qe) | 0, h = h + Math.imul(ve, Ie) | 0, m = m + Math.imul(ve, Qe) | 0, w = w + Math.imul(be, ke) | 0, h = h + Math.imul(be, Ye) | 0, h = h + Math.imul(Ue, ke) | 0, m = m + Math.imul(Ue, Ye) | 0, w = w + Math.imul(he, Fe) | 0, h = h + Math.imul(he, tt) | 0, h = h + Math.imul(Pe, Fe) | 0, m = m + Math.imul(Pe, tt) | 0, w = w + Math.imul(q, Se) | 0, h = h + Math.imul(q, rt) | 0, h = h + Math.imul(xe, Se) | 0, m = m + Math.imul(xe, rt) | 0, w = w + Math.imul(j, Re) | 0, h = h + Math.imul(j, nt) | 0, h = h + Math.imul(le, Re) | 0, m = m + Math.imul(le, nt) | 0, w = w + Math.imul(H, Me) | 0, h = h + Math.imul(H, dt) | 0, h = h + Math.imul($, Me) | 0, m = m + Math.imul($, dt) | 0, w = w + Math.imul(I, _) | 0, h = h + Math.imul(I, K) | 0, h = h + Math.imul(L, _) | 0, m = m + Math.imul(L, K) | 0, w = w + Math.imul(E, oe) | 0, h = h + Math.imul(E, ge) | 0, h = h + Math.imul(k, oe) | 0, m = m + Math.imul(k, ge) | 0;
      var Ut = (A + w | 0) + ((h & 8191) << 13) | 0;
      A = (m + (h >>> 13) | 0) + (Ut >>> 26) | 0, Ut &= 67108863, w = Math.imul(Ee, Be), h = Math.imul(Ee, it), h = h + Math.imul(ze, Be) | 0, m = Math.imul(ze, it), w = w + Math.imul(pe, Ie) | 0, h = h + Math.imul(pe, Qe) | 0, h = h + Math.imul(Te, Ie) | 0, m = m + Math.imul(Te, Qe) | 0, w = w + Math.imul(re, ke) | 0, h = h + Math.imul(re, Ye) | 0, h = h + Math.imul(ve, ke) | 0, m = m + Math.imul(ve, Ye) | 0, w = w + Math.imul(be, Fe) | 0, h = h + Math.imul(be, tt) | 0, h = h + Math.imul(Ue, Fe) | 0, m = m + Math.imul(Ue, tt) | 0, w = w + Math.imul(he, Se) | 0, h = h + Math.imul(he, rt) | 0, h = h + Math.imul(Pe, Se) | 0, m = m + Math.imul(Pe, rt) | 0, w = w + Math.imul(q, Re) | 0, h = h + Math.imul(q, nt) | 0, h = h + Math.imul(xe, Re) | 0, m = m + Math.imul(xe, nt) | 0, w = w + Math.imul(j, Me) | 0, h = h + Math.imul(j, dt) | 0, h = h + Math.imul(le, Me) | 0, m = m + Math.imul(le, dt) | 0, w = w + Math.imul(H, _) | 0, h = h + Math.imul(H, K) | 0, h = h + Math.imul($, _) | 0, m = m + Math.imul($, K) | 0, w = w + Math.imul(I, oe) | 0, h = h + Math.imul(I, ge) | 0, h = h + Math.imul(L, oe) | 0, m = m + Math.imul(L, ge) | 0;
      var En = (A + w | 0) + ((h & 8191) << 13) | 0;
      A = (m + (h >>> 13) | 0) + (En >>> 26) | 0, En &= 67108863, w = Math.imul(Ee, Ie), h = Math.imul(Ee, Qe), h = h + Math.imul(ze, Ie) | 0, m = Math.imul(ze, Qe), w = w + Math.imul(pe, ke) | 0, h = h + Math.imul(pe, Ye) | 0, h = h + Math.imul(Te, ke) | 0, m = m + Math.imul(Te, Ye) | 0, w = w + Math.imul(re, Fe) | 0, h = h + Math.imul(re, tt) | 0, h = h + Math.imul(ve, Fe) | 0, m = m + Math.imul(ve, tt) | 0, w = w + Math.imul(be, Se) | 0, h = h + Math.imul(be, rt) | 0, h = h + Math.imul(Ue, Se) | 0, m = m + Math.imul(Ue, rt) | 0, w = w + Math.imul(he, Re) | 0, h = h + Math.imul(he, nt) | 0, h = h + Math.imul(Pe, Re) | 0, m = m + Math.imul(Pe, nt) | 0, w = w + Math.imul(q, Me) | 0, h = h + Math.imul(q, dt) | 0, h = h + Math.imul(xe, Me) | 0, m = m + Math.imul(xe, dt) | 0, w = w + Math.imul(j, _) | 0, h = h + Math.imul(j, K) | 0, h = h + Math.imul(le, _) | 0, m = m + Math.imul(le, K) | 0, w = w + Math.imul(H, oe) | 0, h = h + Math.imul(H, ge) | 0, h = h + Math.imul($, oe) | 0, m = m + Math.imul($, ge) | 0;
      var Cn = (A + w | 0) + ((h & 8191) << 13) | 0;
      A = (m + (h >>> 13) | 0) + (Cn >>> 26) | 0, Cn &= 67108863, w = Math.imul(Ee, ke), h = Math.imul(Ee, Ye), h = h + Math.imul(ze, ke) | 0, m = Math.imul(ze, Ye), w = w + Math.imul(pe, Fe) | 0, h = h + Math.imul(pe, tt) | 0, h = h + Math.imul(Te, Fe) | 0, m = m + Math.imul(Te, tt) | 0, w = w + Math.imul(re, Se) | 0, h = h + Math.imul(re, rt) | 0, h = h + Math.imul(ve, Se) | 0, m = m + Math.imul(ve, rt) | 0, w = w + Math.imul(be, Re) | 0, h = h + Math.imul(be, nt) | 0, h = h + Math.imul(Ue, Re) | 0, m = m + Math.imul(Ue, nt) | 0, w = w + Math.imul(he, Me) | 0, h = h + Math.imul(he, dt) | 0, h = h + Math.imul(Pe, Me) | 0, m = m + Math.imul(Pe, dt) | 0, w = w + Math.imul(q, _) | 0, h = h + Math.imul(q, K) | 0, h = h + Math.imul(xe, _) | 0, m = m + Math.imul(xe, K) | 0, w = w + Math.imul(j, oe) | 0, h = h + Math.imul(j, ge) | 0, h = h + Math.imul(le, oe) | 0, m = m + Math.imul(le, ge) | 0;
      var In = (A + w | 0) + ((h & 8191) << 13) | 0;
      A = (m + (h >>> 13) | 0) + (In >>> 26) | 0, In &= 67108863, w = Math.imul(Ee, Fe), h = Math.imul(Ee, tt), h = h + Math.imul(ze, Fe) | 0, m = Math.imul(ze, tt), w = w + Math.imul(pe, Se) | 0, h = h + Math.imul(pe, rt) | 0, h = h + Math.imul(Te, Se) | 0, m = m + Math.imul(Te, rt) | 0, w = w + Math.imul(re, Re) | 0, h = h + Math.imul(re, nt) | 0, h = h + Math.imul(ve, Re) | 0, m = m + Math.imul(ve, nt) | 0, w = w + Math.imul(be, Me) | 0, h = h + Math.imul(be, dt) | 0, h = h + Math.imul(Ue, Me) | 0, m = m + Math.imul(Ue, dt) | 0, w = w + Math.imul(he, _) | 0, h = h + Math.imul(he, K) | 0, h = h + Math.imul(Pe, _) | 0, m = m + Math.imul(Pe, K) | 0, w = w + Math.imul(q, oe) | 0, h = h + Math.imul(q, ge) | 0, h = h + Math.imul(xe, oe) | 0, m = m + Math.imul(xe, ge) | 0;
      var kn = (A + w | 0) + ((h & 8191) << 13) | 0;
      A = (m + (h >>> 13) | 0) + (kn >>> 26) | 0, kn &= 67108863, w = Math.imul(Ee, Se), h = Math.imul(Ee, rt), h = h + Math.imul(ze, Se) | 0, m = Math.imul(ze, rt), w = w + Math.imul(pe, Re) | 0, h = h + Math.imul(pe, nt) | 0, h = h + Math.imul(Te, Re) | 0, m = m + Math.imul(Te, nt) | 0, w = w + Math.imul(re, Me) | 0, h = h + Math.imul(re, dt) | 0, h = h + Math.imul(ve, Me) | 0, m = m + Math.imul(ve, dt) | 0, w = w + Math.imul(be, _) | 0, h = h + Math.imul(be, K) | 0, h = h + Math.imul(Ue, _) | 0, m = m + Math.imul(Ue, K) | 0, w = w + Math.imul(he, oe) | 0, h = h + Math.imul(he, ge) | 0, h = h + Math.imul(Pe, oe) | 0, m = m + Math.imul(Pe, ge) | 0;
      var Sn = (A + w | 0) + ((h & 8191) << 13) | 0;
      A = (m + (h >>> 13) | 0) + (Sn >>> 26) | 0, Sn &= 67108863, w = Math.imul(Ee, Re), h = Math.imul(Ee, nt), h = h + Math.imul(ze, Re) | 0, m = Math.imul(ze, nt), w = w + Math.imul(pe, Me) | 0, h = h + Math.imul(pe, dt) | 0, h = h + Math.imul(Te, Me) | 0, m = m + Math.imul(Te, dt) | 0, w = w + Math.imul(re, _) | 0, h = h + Math.imul(re, K) | 0, h = h + Math.imul(ve, _) | 0, m = m + Math.imul(ve, K) | 0, w = w + Math.imul(be, oe) | 0, h = h + Math.imul(be, ge) | 0, h = h + Math.imul(Ue, oe) | 0, m = m + Math.imul(Ue, ge) | 0;
      var Dn = (A + w | 0) + ((h & 8191) << 13) | 0;
      A = (m + (h >>> 13) | 0) + (Dn >>> 26) | 0, Dn &= 67108863, w = Math.imul(Ee, Me), h = Math.imul(Ee, dt), h = h + Math.imul(ze, Me) | 0, m = Math.imul(ze, dt), w = w + Math.imul(pe, _) | 0, h = h + Math.imul(pe, K) | 0, h = h + Math.imul(Te, _) | 0, m = m + Math.imul(Te, K) | 0, w = w + Math.imul(re, oe) | 0, h = h + Math.imul(re, ge) | 0, h = h + Math.imul(ve, oe) | 0, m = m + Math.imul(ve, ge) | 0;
      var Bn = (A + w | 0) + ((h & 8191) << 13) | 0;
      A = (m + (h >>> 13) | 0) + (Bn >>> 26) | 0, Bn &= 67108863, w = Math.imul(Ee, _), h = Math.imul(Ee, K), h = h + Math.imul(ze, _) | 0, m = Math.imul(ze, K), w = w + Math.imul(pe, oe) | 0, h = h + Math.imul(pe, ge) | 0, h = h + Math.imul(Te, oe) | 0, m = m + Math.imul(Te, ge) | 0;
      var Fn = (A + w | 0) + ((h & 8191) << 13) | 0;
      A = (m + (h >>> 13) | 0) + (Fn >>> 26) | 0, Fn &= 67108863, w = Math.imul(Ee, oe), h = Math.imul(Ee, ge), h = h + Math.imul(ze, oe) | 0, m = Math.imul(ze, ge);
      var Rn = (A + w | 0) + ((h & 8191) << 13) | 0;
      return A = (m + (h >>> 13) | 0) + (Rn >>> 26) | 0, Rn &= 67108863, v[0] = we, v[1] = me, v[2] = De, v[3] = mt, v[4] = Ke, v[5] = Xe, v[6] = xt, v[7] = Vt, v[8] = Dr, v[9] = Ut, v[10] = En, v[11] = Cn, v[12] = In, v[13] = kn, v[14] = Sn, v[15] = Dn, v[16] = Bn, v[17] = Fn, v[18] = Rn, A !== 0 && (v[19] = A, o.length++), o;
    };
    Math.imul || (M = R);
    function S(D, u, l) {
      l.negative = u.negative ^ D.negative, l.length = D.length + u.length;
      for (var o = 0, d = 0, g = 0; g < l.length - 1; g++) {
        var v = d;
        d = 0;
        for (var A = o & 67108863, w = Math.min(g, u.length - 1), h = Math.max(0, g - D.length + 1); h <= w; h++) {
          var m = g - h, f = D.words[m] | 0, E = u.words[h] | 0, k = f * E, b = k & 67108863;
          v = v + (k / 67108864 | 0) | 0, b = b + A | 0, A = b & 67108863, v = v + (b >>> 26) | 0, d += v >>> 26, v &= 67108863;
        }
        l.words[g] = A, o = v, v = d;
      }
      return o !== 0 ? l.words[g] = o : l.length--, l.strip();
    }
    function U(D, u, l) {
      var o = new N();
      return o.mulp(D, u, l);
    }
    i.prototype.mulTo = function(u, l) {
      var o, d = this.length + u.length;
      return this.length === 10 && u.length === 10 ? o = M(this, u, l) : d < 63 ? o = R(this, u, l) : d < 1024 ? o = S(this, u, l) : o = U(this, u, l), o;
    };
    function N(D, u) {
      this.x = D, this.y = u;
    }
    N.prototype.makeRBT = function(u) {
      for (var l = new Array(u), o = i.prototype._countBits(u) - 1, d = 0; d < u; d++)
        l[d] = this.revBin(d, o, u);
      return l;
    }, N.prototype.revBin = function(u, l, o) {
      if (u === 0 || u === o - 1)
        return u;
      for (var d = 0, g = 0; g < l; g++)
        d |= (u & 1) << l - g - 1, u >>= 1;
      return d;
    }, N.prototype.permute = function(u, l, o, d, g, v) {
      for (var A = 0; A < v; A++)
        d[A] = l[u[A]], g[A] = o[u[A]];
    }, N.prototype.transform = function(u, l, o, d, g, v) {
      this.permute(v, u, l, o, d, g);
      for (var A = 1; A < g; A <<= 1)
        for (var w = A << 1, h = Math.cos(2 * Math.PI / w), m = Math.sin(2 * Math.PI / w), f = 0; f < g; f += w)
          for (var E = h, k = m, b = 0; b < A; b++) {
            var I = o[f + b], L = d[f + b], P = o[f + b + A], H = d[f + b + A], $ = E * P - k * H;
            H = E * H + k * P, P = $, o[f + b] = I + P, d[f + b] = L + H, o[f + b + A] = I - P, d[f + b + A] = L - H, b !== w && ($ = h * E - m * k, k = h * k + m * E, E = $);
          }
    }, N.prototype.guessLen13b = function(u, l) {
      var o = Math.max(l, u) | 1, d = o & 1, g = 0;
      for (o = o / 2 | 0; o; o = o >>> 1)
        g++;
      return 1 << g + 1 + d;
    }, N.prototype.conjugate = function(u, l, o) {
      if (!(o <= 1))
        for (var d = 0; d < o / 2; d++) {
          var g = u[d];
          u[d] = u[o - d - 1], u[o - d - 1] = g, g = l[d], l[d] = -l[o - d - 1], l[o - d - 1] = -g;
        }
    }, N.prototype.normalize13b = function(u, l) {
      for (var o = 0, d = 0; d < l / 2; d++) {
        var g = Math.round(u[2 * d + 1] / l) * 8192 + Math.round(u[2 * d] / l) + o;
        u[d] = g & 67108863, g < 67108864 ? o = 0 : o = g / 67108864 | 0;
      }
      return u;
    }, N.prototype.convert13b = function(u, l, o, d) {
      for (var g = 0, v = 0; v < l; v++)
        g = g + (u[v] | 0), o[2 * v] = g & 8191, g = g >>> 13, o[2 * v + 1] = g & 8191, g = g >>> 13;
      for (v = 2 * l; v < d; ++v)
        o[v] = 0;
      n(g === 0), n((g & -8192) === 0);
    }, N.prototype.stub = function(u) {
      for (var l = new Array(u), o = 0; o < u; o++)
        l[o] = 0;
      return l;
    }, N.prototype.mulp = function(u, l, o) {
      var d = 2 * this.guessLen13b(u.length, l.length), g = this.makeRBT(d), v = this.stub(d), A = new Array(d), w = new Array(d), h = new Array(d), m = new Array(d), f = new Array(d), E = new Array(d), k = o.words;
      k.length = d, this.convert13b(u.words, u.length, A, d), this.convert13b(l.words, l.length, m, d), this.transform(A, v, w, h, d, g), this.transform(m, v, f, E, d, g);
      for (var b = 0; b < d; b++) {
        var I = w[b] * f[b] - h[b] * E[b];
        h[b] = w[b] * E[b] + h[b] * f[b], w[b] = I;
      }
      return this.conjugate(w, h, d), this.transform(w, h, k, v, d, g), this.conjugate(k, v, d), this.normalize13b(k, d), o.negative = u.negative ^ l.negative, o.length = u.length + l.length, o.strip();
    }, i.prototype.mul = function(u) {
      var l = new i(null);
      return l.words = new Array(this.length + u.length), this.mulTo(u, l);
    }, i.prototype.mulf = function(u) {
      var l = new i(null);
      return l.words = new Array(this.length + u.length), U(this, u, l);
    }, i.prototype.imul = function(u) {
      return this.clone().mulTo(u, this);
    }, i.prototype.imuln = function(u) {
      n(typeof u == "number"), n(u < 67108864);
      for (var l = 0, o = 0; o < this.length; o++) {
        var d = (this.words[o] | 0) * u, g = (d & 67108863) + (l & 67108863);
        l >>= 26, l += d / 67108864 | 0, l += g >>> 26, this.words[o] = g & 67108863;
      }
      return l !== 0 && (this.words[o] = l, this.length++), this;
    }, i.prototype.muln = function(u) {
      return this.clone().imuln(u);
    }, i.prototype.sqr = function() {
      return this.mul(this);
    }, i.prototype.isqr = function() {
      return this.imul(this.clone());
    }, i.prototype.pow = function(u) {
      var l = F(u);
      if (l.length === 0)
        return new i(1);
      for (var o = this, d = 0; d < l.length && l[d] === 0; d++, o = o.sqr())
        ;
      if (++d < l.length)
        for (var g = o.sqr(); d < l.length; d++, g = g.sqr())
          l[d] !== 0 && (o = o.mul(g));
      return o;
    }, i.prototype.iushln = function(u) {
      n(typeof u == "number" && u >= 0);
      var l = u % 26, o = (u - l) / 26, d = 67108863 >>> 26 - l << 26 - l, g;
      if (l !== 0) {
        var v = 0;
        for (g = 0; g < this.length; g++) {
          var A = this.words[g] & d, w = (this.words[g] | 0) - A << l;
          this.words[g] = w | v, v = A >>> 26 - l;
        }
        v && (this.words[g] = v, this.length++);
      }
      if (o !== 0) {
        for (g = this.length - 1; g >= 0; g--)
          this.words[g + o] = this.words[g];
        for (g = 0; g < o; g++)
          this.words[g] = 0;
        this.length += o;
      }
      return this.strip();
    }, i.prototype.ishln = function(u) {
      return n(this.negative === 0), this.iushln(u);
    }, i.prototype.iushrn = function(u, l, o) {
      n(typeof u == "number" && u >= 0);
      var d;
      l ? d = (l - l % 26) / 26 : d = 0;
      var g = u % 26, v = Math.min((u - g) / 26, this.length), A = 67108863 ^ 67108863 >>> g << g, w = o;
      if (d -= v, d = Math.max(0, d), w) {
        for (var h = 0; h < v; h++)
          w.words[h] = this.words[h];
        w.length = v;
      }
      if (v !== 0)
        if (this.length > v)
          for (this.length -= v, h = 0; h < this.length; h++)
            this.words[h] = this.words[h + v];
        else
          this.words[0] = 0, this.length = 1;
      var m = 0;
      for (h = this.length - 1; h >= 0 && (m !== 0 || h >= d); h--) {
        var f = this.words[h] | 0;
        this.words[h] = m << 26 - g | f >>> g, m = f & A;
      }
      return w && m !== 0 && (w.words[w.length++] = m), this.length === 0 && (this.words[0] = 0, this.length = 1), this.strip();
    }, i.prototype.ishrn = function(u, l, o) {
      return n(this.negative === 0), this.iushrn(u, l, o);
    }, i.prototype.shln = function(u) {
      return this.clone().ishln(u);
    }, i.prototype.ushln = function(u) {
      return this.clone().iushln(u);
    }, i.prototype.shrn = function(u) {
      return this.clone().ishrn(u);
    }, i.prototype.ushrn = function(u) {
      return this.clone().iushrn(u);
    }, i.prototype.testn = function(u) {
      n(typeof u == "number" && u >= 0);
      var l = u % 26, o = (u - l) / 26, d = 1 << l;
      if (this.length <= o)
        return !1;
      var g = this.words[o];
      return !!(g & d);
    }, i.prototype.imaskn = function(u) {
      n(typeof u == "number" && u >= 0);
      var l = u % 26, o = (u - l) / 26;
      if (n(this.negative === 0, "imaskn works only with positive numbers"), this.length <= o)
        return this;
      if (l !== 0 && o++, this.length = Math.min(o, this.length), l !== 0) {
        var d = 67108863 ^ 67108863 >>> l << l;
        this.words[this.length - 1] &= d;
      }
      return this.strip();
    }, i.prototype.maskn = function(u) {
      return this.clone().imaskn(u);
    }, i.prototype.iaddn = function(u) {
      return n(typeof u == "number"), n(u < 67108864), u < 0 ? this.isubn(-u) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) < u ? (this.words[0] = u - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(u), this.negative = 1, this) : this._iaddn(u);
    }, i.prototype._iaddn = function(u) {
      this.words[0] += u;
      for (var l = 0; l < this.length && this.words[l] >= 67108864; l++)
        this.words[l] -= 67108864, l === this.length - 1 ? this.words[l + 1] = 1 : this.words[l + 1]++;
      return this.length = Math.max(this.length, l + 1), this;
    }, i.prototype.isubn = function(u) {
      if (n(typeof u == "number"), n(u < 67108864), u < 0)
        return this.iaddn(-u);
      if (this.negative !== 0)
        return this.negative = 0, this.iaddn(u), this.negative = 1, this;
      if (this.words[0] -= u, this.length === 1 && this.words[0] < 0)
        this.words[0] = -this.words[0], this.negative = 1;
      else
        for (var l = 0; l < this.length && this.words[l] < 0; l++)
          this.words[l] += 67108864, this.words[l + 1] -= 1;
      return this.strip();
    }, i.prototype.addn = function(u) {
      return this.clone().iaddn(u);
    }, i.prototype.subn = function(u) {
      return this.clone().isubn(u);
    }, i.prototype.iabs = function() {
      return this.negative = 0, this;
    }, i.prototype.abs = function() {
      return this.clone().iabs();
    }, i.prototype._ishlnsubmul = function(u, l, o) {
      var d = u.length + o, g;
      this._expand(d);
      var v, A = 0;
      for (g = 0; g < u.length; g++) {
        v = (this.words[g + o] | 0) + A;
        var w = (u.words[g] | 0) * l;
        v -= w & 67108863, A = (v >> 26) - (w / 67108864 | 0), this.words[g + o] = v & 67108863;
      }
      for (; g < this.length - o; g++)
        v = (this.words[g + o] | 0) + A, A = v >> 26, this.words[g + o] = v & 67108863;
      if (A === 0)
        return this.strip();
      for (n(A === -1), A = 0, g = 0; g < this.length; g++)
        v = -(this.words[g] | 0) + A, A = v >> 26, this.words[g] = v & 67108863;
      return this.negative = 1, this.strip();
    }, i.prototype._wordDiv = function(u, l) {
      var o = this.length - u.length, d = this.clone(), g = u, v = g.words[g.length - 1] | 0, A = this._countBits(v);
      o = 26 - A, o !== 0 && (g = g.ushln(o), d.iushln(o), v = g.words[g.length - 1] | 0);
      var w = d.length - g.length, h;
      if (l !== "mod") {
        h = new i(null), h.length = w + 1, h.words = new Array(h.length);
        for (var m = 0; m < h.length; m++)
          h.words[m] = 0;
      }
      var f = d.clone()._ishlnsubmul(g, 1, w);
      f.negative === 0 && (d = f, h && (h.words[w] = 1));
      for (var E = w - 1; E >= 0; E--) {
        var k = (d.words[g.length + E] | 0) * 67108864 + (d.words[g.length + E - 1] | 0);
        for (k = Math.min(k / v | 0, 67108863), d._ishlnsubmul(g, k, E); d.negative !== 0; )
          k--, d.negative = 0, d._ishlnsubmul(g, 1, E), d.isZero() || (d.negative ^= 1);
        h && (h.words[E] = k);
      }
      return h && h.strip(), d.strip(), l !== "div" && o !== 0 && d.iushrn(o), {
        div: h || null,
        mod: d
      };
    }, i.prototype.divmod = function(u, l, o) {
      if (n(!u.isZero()), this.isZero())
        return {
          div: new i(0),
          mod: new i(0)
        };
      var d, g, v;
      return this.negative !== 0 && u.negative === 0 ? (v = this.neg().divmod(u, l), l !== "mod" && (d = v.div.neg()), l !== "div" && (g = v.mod.neg(), o && g.negative !== 0 && g.iadd(u)), {
        div: d,
        mod: g
      }) : this.negative === 0 && u.negative !== 0 ? (v = this.divmod(u.neg(), l), l !== "mod" && (d = v.div.neg()), {
        div: d,
        mod: v.mod
      }) : (this.negative & u.negative) !== 0 ? (v = this.neg().divmod(u.neg(), l), l !== "div" && (g = v.mod.neg(), o && g.negative !== 0 && g.isub(u)), {
        div: v.div,
        mod: g
      }) : u.length > this.length || this.cmp(u) < 0 ? {
        div: new i(0),
        mod: this
      } : u.length === 1 ? l === "div" ? {
        div: this.divn(u.words[0]),
        mod: null
      } : l === "mod" ? {
        div: null,
        mod: new i(this.modn(u.words[0]))
      } : {
        div: this.divn(u.words[0]),
        mod: new i(this.modn(u.words[0]))
      } : this._wordDiv(u, l);
    }, i.prototype.div = function(u) {
      return this.divmod(u, "div", !1).div;
    }, i.prototype.mod = function(u) {
      return this.divmod(u, "mod", !1).mod;
    }, i.prototype.umod = function(u) {
      return this.divmod(u, "mod", !0).mod;
    }, i.prototype.divRound = function(u) {
      var l = this.divmod(u);
      if (l.mod.isZero())
        return l.div;
      var o = l.div.negative !== 0 ? l.mod.isub(u) : l.mod, d = u.ushrn(1), g = u.andln(1), v = o.cmp(d);
      return v < 0 || g === 1 && v === 0 ? l.div : l.div.negative !== 0 ? l.div.isubn(1) : l.div.iaddn(1);
    }, i.prototype.modn = function(u) {
      n(u <= 67108863);
      for (var l = (1 << 26) % u, o = 0, d = this.length - 1; d >= 0; d--)
        o = (l * o + (this.words[d] | 0)) % u;
      return o;
    }, i.prototype.idivn = function(u) {
      n(u <= 67108863);
      for (var l = 0, o = this.length - 1; o >= 0; o--) {
        var d = (this.words[o] | 0) + l * 67108864;
        this.words[o] = d / u | 0, l = d % u;
      }
      return this.strip();
    }, i.prototype.divn = function(u) {
      return this.clone().idivn(u);
    }, i.prototype.egcd = function(u) {
      n(u.negative === 0), n(!u.isZero());
      var l = this, o = u.clone();
      l.negative !== 0 ? l = l.umod(u) : l = l.clone();
      for (var d = new i(1), g = new i(0), v = new i(0), A = new i(1), w = 0; l.isEven() && o.isEven(); )
        l.iushrn(1), o.iushrn(1), ++w;
      for (var h = o.clone(), m = l.clone(); !l.isZero(); ) {
        for (var f = 0, E = 1; (l.words[0] & E) === 0 && f < 26; ++f, E <<= 1)
          ;
        if (f > 0)
          for (l.iushrn(f); f-- > 0; )
            (d.isOdd() || g.isOdd()) && (d.iadd(h), g.isub(m)), d.iushrn(1), g.iushrn(1);
        for (var k = 0, b = 1; (o.words[0] & b) === 0 && k < 26; ++k, b <<= 1)
          ;
        if (k > 0)
          for (o.iushrn(k); k-- > 0; )
            (v.isOdd() || A.isOdd()) && (v.iadd(h), A.isub(m)), v.iushrn(1), A.iushrn(1);
        l.cmp(o) >= 0 ? (l.isub(o), d.isub(v), g.isub(A)) : (o.isub(l), v.isub(d), A.isub(g));
      }
      return {
        a: v,
        b: A,
        gcd: o.iushln(w)
      };
    }, i.prototype._invmp = function(u) {
      n(u.negative === 0), n(!u.isZero());
      var l = this, o = u.clone();
      l.negative !== 0 ? l = l.umod(u) : l = l.clone();
      for (var d = new i(1), g = new i(0), v = o.clone(); l.cmpn(1) > 0 && o.cmpn(1) > 0; ) {
        for (var A = 0, w = 1; (l.words[0] & w) === 0 && A < 26; ++A, w <<= 1)
          ;
        if (A > 0)
          for (l.iushrn(A); A-- > 0; )
            d.isOdd() && d.iadd(v), d.iushrn(1);
        for (var h = 0, m = 1; (o.words[0] & m) === 0 && h < 26; ++h, m <<= 1)
          ;
        if (h > 0)
          for (o.iushrn(h); h-- > 0; )
            g.isOdd() && g.iadd(v), g.iushrn(1);
        l.cmp(o) >= 0 ? (l.isub(o), d.isub(g)) : (o.isub(l), g.isub(d));
      }
      var f;
      return l.cmpn(1) === 0 ? f = d : f = g, f.cmpn(0) < 0 && f.iadd(u), f;
    }, i.prototype.gcd = function(u) {
      if (this.isZero())
        return u.abs();
      if (u.isZero())
        return this.abs();
      var l = this.clone(), o = u.clone();
      l.negative = 0, o.negative = 0;
      for (var d = 0; l.isEven() && o.isEven(); d++)
        l.iushrn(1), o.iushrn(1);
      do {
        for (; l.isEven(); )
          l.iushrn(1);
        for (; o.isEven(); )
          o.iushrn(1);
        var g = l.cmp(o);
        if (g < 0) {
          var v = l;
          l = o, o = v;
        } else if (g === 0 || o.cmpn(1) === 0)
          break;
        l.isub(o);
      } while (!0);
      return o.iushln(d);
    }, i.prototype.invm = function(u) {
      return this.egcd(u).a.umod(u);
    }, i.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, i.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, i.prototype.andln = function(u) {
      return this.words[0] & u;
    }, i.prototype.bincn = function(u) {
      n(typeof u == "number");
      var l = u % 26, o = (u - l) / 26, d = 1 << l;
      if (this.length <= o)
        return this._expand(o + 1), this.words[o] |= d, this;
      for (var g = d, v = o; g !== 0 && v < this.length; v++) {
        var A = this.words[v] | 0;
        A += g, g = A >>> 26, A &= 67108863, this.words[v] = A;
      }
      return g !== 0 && (this.words[v] = g, this.length++), this;
    }, i.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, i.prototype.cmpn = function(u) {
      var l = u < 0;
      if (this.negative !== 0 && !l)
        return -1;
      if (this.negative === 0 && l)
        return 1;
      this.strip();
      var o;
      if (this.length > 1)
        o = 1;
      else {
        l && (u = -u), n(u <= 67108863, "Number is too big");
        var d = this.words[0] | 0;
        o = d === u ? 0 : d < u ? -1 : 1;
      }
      return this.negative !== 0 ? -o | 0 : o;
    }, i.prototype.cmp = function(u) {
      if (this.negative !== 0 && u.negative === 0)
        return -1;
      if (this.negative === 0 && u.negative !== 0)
        return 1;
      var l = this.ucmp(u);
      return this.negative !== 0 ? -l | 0 : l;
    }, i.prototype.ucmp = function(u) {
      if (this.length > u.length)
        return 1;
      if (this.length < u.length)
        return -1;
      for (var l = 0, o = this.length - 1; o >= 0; o--) {
        var d = this.words[o] | 0, g = u.words[o] | 0;
        if (d !== g) {
          d < g ? l = -1 : d > g && (l = 1);
          break;
        }
      }
      return l;
    }, i.prototype.gtn = function(u) {
      return this.cmpn(u) === 1;
    }, i.prototype.gt = function(u) {
      return this.cmp(u) === 1;
    }, i.prototype.gten = function(u) {
      return this.cmpn(u) >= 0;
    }, i.prototype.gte = function(u) {
      return this.cmp(u) >= 0;
    }, i.prototype.ltn = function(u) {
      return this.cmpn(u) === -1;
    }, i.prototype.lt = function(u) {
      return this.cmp(u) === -1;
    }, i.prototype.lten = function(u) {
      return this.cmpn(u) <= 0;
    }, i.prototype.lte = function(u) {
      return this.cmp(u) <= 0;
    }, i.prototype.eqn = function(u) {
      return this.cmpn(u) === 0;
    }, i.prototype.eq = function(u) {
      return this.cmp(u) === 0;
    }, i.red = function(u) {
      return new X(u);
    }, i.prototype.toRed = function(u) {
      return n(!this.red, "Already a number in reduction context"), n(this.negative === 0, "red works only with positives"), u.convertTo(this)._forceRed(u);
    }, i.prototype.fromRed = function() {
      return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, i.prototype._forceRed = function(u) {
      return this.red = u, this;
    }, i.prototype.forceRed = function(u) {
      return n(!this.red, "Already a number in reduction context"), this._forceRed(u);
    }, i.prototype.redAdd = function(u) {
      return n(this.red, "redAdd works only with red numbers"), this.red.add(this, u);
    }, i.prototype.redIAdd = function(u) {
      return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, u);
    }, i.prototype.redSub = function(u) {
      return n(this.red, "redSub works only with red numbers"), this.red.sub(this, u);
    }, i.prototype.redISub = function(u) {
      return n(this.red, "redISub works only with red numbers"), this.red.isub(this, u);
    }, i.prototype.redShl = function(u) {
      return n(this.red, "redShl works only with red numbers"), this.red.shl(this, u);
    }, i.prototype.redMul = function(u) {
      return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, u), this.red.mul(this, u);
    }, i.prototype.redIMul = function(u) {
      return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, u), this.red.imul(this, u);
    }, i.prototype.redSqr = function() {
      return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, i.prototype.redISqr = function() {
      return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, i.prototype.redSqrt = function() {
      return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, i.prototype.redInvm = function() {
      return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, i.prototype.redNeg = function() {
      return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, i.prototype.redPow = function(u) {
      return n(this.red && !u.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, u);
    };
    var z = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };
    function O(D, u) {
      this.name = D, this.p = new i(u, 16), this.n = this.p.bitLength(), this.k = new i(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    O.prototype._tmp = function() {
      var u = new i(null);
      return u.words = new Array(Math.ceil(this.n / 13)), u;
    }, O.prototype.ireduce = function(u) {
      var l = u, o;
      do
        this.split(l, this.tmp), l = this.imulK(l), l = l.iadd(this.tmp), o = l.bitLength();
      while (o > this.n);
      var d = o < this.n ? -1 : l.ucmp(this.p);
      return d === 0 ? (l.words[0] = 0, l.length = 1) : d > 0 ? l.isub(this.p) : l.strip !== void 0 ? l.strip() : l._strip(), l;
    }, O.prototype.split = function(u, l) {
      u.iushrn(this.n, 0, l);
    }, O.prototype.imulK = function(u) {
      return u.imul(this.k);
    };
    function T() {
      O.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    a(T, O), T.prototype.split = function(u, l) {
      for (var o = 4194303, d = Math.min(u.length, 9), g = 0; g < d; g++)
        l.words[g] = u.words[g];
      if (l.length = d, u.length <= 9) {
        u.words[0] = 0, u.length = 1;
        return;
      }
      var v = u.words[9];
      for (l.words[l.length++] = v & o, g = 10; g < u.length; g++) {
        var A = u.words[g] | 0;
        u.words[g - 10] = (A & o) << 4 | v >>> 22, v = A;
      }
      v >>>= 22, u.words[g - 10] = v, v === 0 && u.length > 10 ? u.length -= 10 : u.length -= 9;
    }, T.prototype.imulK = function(u) {
      u.words[u.length] = 0, u.words[u.length + 1] = 0, u.length += 2;
      for (var l = 0, o = 0; o < u.length; o++) {
        var d = u.words[o] | 0;
        l += d * 977, u.words[o] = l & 67108863, l = d * 64 + (l / 67108864 | 0);
      }
      return u.words[u.length - 1] === 0 && (u.length--, u.words[u.length - 1] === 0 && u.length--), u;
    };
    function G() {
      O.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    a(G, O);
    function J() {
      O.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    a(J, O);
    function Y() {
      O.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    a(Y, O), Y.prototype.imulK = function(u) {
      for (var l = 0, o = 0; o < u.length; o++) {
        var d = (u.words[o] | 0) * 19 + l, g = d & 67108863;
        d >>>= 26, u.words[o] = g, l = d;
      }
      return l !== 0 && (u.words[u.length++] = l), u;
    }, i._prime = function(u) {
      if (z[u])
        return z[u];
      var l;
      if (u === "k256")
        l = new T();
      else if (u === "p224")
        l = new G();
      else if (u === "p192")
        l = new J();
      else if (u === "p25519")
        l = new Y();
      else
        throw new Error("Unknown prime " + u);
      return z[u] = l, l;
    };
    function X(D) {
      if (typeof D == "string") {
        var u = i._prime(D);
        this.m = u.p, this.prime = u;
      } else
        n(D.gtn(1), "modulus must be greater than 1"), this.m = D, this.prime = null;
    }
    X.prototype._verify1 = function(u) {
      n(u.negative === 0, "red works only with positives"), n(u.red, "red works only with red numbers");
    }, X.prototype._verify2 = function(u, l) {
      n((u.negative | l.negative) === 0, "red works only with positives"), n(
        u.red && u.red === l.red,
        "red works only with red numbers"
      );
    }, X.prototype.imod = function(u) {
      return this.prime ? this.prime.ireduce(u)._forceRed(this) : u.umod(this.m)._forceRed(this);
    }, X.prototype.neg = function(u) {
      return u.isZero() ? u.clone() : this.m.sub(u)._forceRed(this);
    }, X.prototype.add = function(u, l) {
      this._verify2(u, l);
      var o = u.add(l);
      return o.cmp(this.m) >= 0 && o.isub(this.m), o._forceRed(this);
    }, X.prototype.iadd = function(u, l) {
      this._verify2(u, l);
      var o = u.iadd(l);
      return o.cmp(this.m) >= 0 && o.isub(this.m), o;
    }, X.prototype.sub = function(u, l) {
      this._verify2(u, l);
      var o = u.sub(l);
      return o.cmpn(0) < 0 && o.iadd(this.m), o._forceRed(this);
    }, X.prototype.isub = function(u, l) {
      this._verify2(u, l);
      var o = u.isub(l);
      return o.cmpn(0) < 0 && o.iadd(this.m), o;
    }, X.prototype.shl = function(u, l) {
      return this._verify1(u), this.imod(u.ushln(l));
    }, X.prototype.imul = function(u, l) {
      return this._verify2(u, l), this.imod(u.imul(l));
    }, X.prototype.mul = function(u, l) {
      return this._verify2(u, l), this.imod(u.mul(l));
    }, X.prototype.isqr = function(u) {
      return this.imul(u, u.clone());
    }, X.prototype.sqr = function(u) {
      return this.mul(u, u);
    }, X.prototype.sqrt = function(u) {
      if (u.isZero())
        return u.clone();
      var l = this.m.andln(3);
      if (n(l % 2 === 1), l === 3) {
        var o = this.m.add(new i(1)).iushrn(2);
        return this.pow(u, o);
      }
      for (var d = this.m.subn(1), g = 0; !d.isZero() && d.andln(1) === 0; )
        g++, d.iushrn(1);
      n(!d.isZero());
      var v = new i(1).toRed(this), A = v.redNeg(), w = this.m.subn(1).iushrn(1), h = this.m.bitLength();
      for (h = new i(2 * h * h).toRed(this); this.pow(h, w).cmp(A) !== 0; )
        h.redIAdd(A);
      for (var m = this.pow(h, d), f = this.pow(u, d.addn(1).iushrn(1)), E = this.pow(u, d), k = g; E.cmp(v) !== 0; ) {
        for (var b = E, I = 0; b.cmp(v) !== 0; I++)
          b = b.redSqr();
        n(I < k);
        var L = this.pow(m, new i(1).iushln(k - I - 1));
        f = f.redMul(L), m = L.redSqr(), E = E.redMul(m), k = I;
      }
      return f;
    }, X.prototype.invm = function(u) {
      var l = u._invmp(this.m);
      return l.negative !== 0 ? (l.negative = 0, this.imod(l).redNeg()) : this.imod(l);
    }, X.prototype.pow = function(u, l) {
      if (l.isZero())
        return new i(1).toRed(this);
      if (l.cmpn(1) === 0)
        return u.clone();
      var o = 4, d = new Array(1 << o);
      d[0] = new i(1).toRed(this), d[1] = u;
      for (var g = 2; g < d.length; g++)
        d[g] = this.mul(d[g - 1], u);
      var v = d[0], A = 0, w = 0, h = l.bitLength() % 26;
      for (h === 0 && (h = 26), g = l.length - 1; g >= 0; g--) {
        for (var m = l.words[g], f = h - 1; f >= 0; f--) {
          var E = m >> f & 1;
          if (v !== d[0] && (v = this.sqr(v)), E === 0 && A === 0) {
            w = 0;
            continue;
          }
          A <<= 1, A |= E, w++, !(w !== o && (g !== 0 || f !== 0)) && (v = this.mul(v, d[A]), w = 0, A = 0);
        }
        h = 26;
      }
      return v;
    }, X.prototype.convertTo = function(u) {
      var l = u.umod(this.m);
      return l === u ? l.clone() : l;
    }, X.prototype.convertFrom = function(u) {
      var l = u.clone();
      return l.red = null, l;
    }, i.mont = function(u) {
      return new se(u);
    };
    function se(D) {
      X.call(this, D), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new i(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    a(se, X), se.prototype.convertTo = function(u) {
      return this.imod(u.ushln(this.shift));
    }, se.prototype.convertFrom = function(u) {
      var l = this.imod(u.mul(this.rinv));
      return l.red = null, l;
    }, se.prototype.imul = function(u, l) {
      if (u.isZero() || l.isZero())
        return u.words[0] = 0, u.length = 1, u;
      var o = u.imul(l), d = o.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), g = o.isub(d).iushrn(this.shift), v = g;
      return g.cmp(this.m) >= 0 ? v = g.isub(this.m) : g.cmpn(0) < 0 && (v = g.iadd(this.m)), v._forceRed(this);
    }, se.prototype.mul = function(u, l) {
      if (u.isZero() || l.isZero())
        return new i(0)._forceRed(this);
      var o = u.mul(l), d = o.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), g = o.isub(d).iushrn(this.shift), v = g;
      return g.cmp(this.m) >= 0 ? v = g.isub(this.m) : g.cmpn(0) < 0 && (v = g.iadd(this.m)), v._forceRed(this);
    }, se.prototype.invm = function(u) {
      var l = this.imod(u._invmp(this.m).mul(this.r2));
      return l._forceRed(this);
    };
  })(t, tr);
})(_l);
const K6 = _l.exports, q6 = "logger/5.5.0";
let Nc = !1, Oc = !1;
const Li = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
let Lc = Li.default, Ws = null;
function X6() {
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
const jc = X6();
var vo;
(function(t) {
  t.DEBUG = "DEBUG", t.INFO = "INFO", t.WARNING = "WARNING", t.ERROR = "ERROR", t.OFF = "OFF";
})(vo || (vo = {}));
var wo;
(function(t) {
  t.UNKNOWN_ERROR = "UNKNOWN_ERROR", t.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", t.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", t.NETWORK_ERROR = "NETWORK_ERROR", t.SERVER_ERROR = "SERVER_ERROR", t.TIMEOUT = "TIMEOUT", t.BUFFER_OVERRUN = "BUFFER_OVERRUN", t.NUMERIC_FAULT = "NUMERIC_FAULT", t.MISSING_NEW = "MISSING_NEW", t.INVALID_ARGUMENT = "INVALID_ARGUMENT", t.MISSING_ARGUMENT = "MISSING_ARGUMENT", t.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", t.CALL_EXCEPTION = "CALL_EXCEPTION", t.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", t.NONCE_EXPIRED = "NONCE_EXPIRED", t.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", t.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", t.TRANSACTION_REPLACED = "TRANSACTION_REPLACED";
})(wo || (wo = {}));
const Wc = "0123456789abcdef";
class qe {
  constructor(e) {
    Object.defineProperty(this, "version", {
      enumerable: !0,
      value: e,
      writable: !1
    });
  }
  _log(e, r) {
    const n = e.toLowerCase();
    Li[n] == null && this.throwArgumentError("invalid log level name", "logLevel", e), !(Lc > Li[n]) && console.log.apply(console, r);
  }
  debug(...e) {
    this._log(qe.levels.DEBUG, e);
  }
  info(...e) {
    this._log(qe.levels.INFO, e);
  }
  warn(...e) {
    this._log(qe.levels.WARNING, e);
  }
  makeError(e, r, n) {
    if (Oc)
      return this.makeError("censored error", r, {});
    r || (r = qe.errors.UNKNOWN_ERROR), n || (n = {});
    const a = [];
    Object.keys(n).forEach((c) => {
      const p = n[c];
      try {
        if (p instanceof Uint8Array) {
          let x = "";
          for (let y = 0; y < p.length; y++)
            x += Wc[p[y] >> 4], x += Wc[p[y] & 15];
          a.push(c + "=Uint8Array(0x" + x + ")");
        } else
          a.push(c + "=" + JSON.stringify(p));
      } catch {
        a.push(c + "=" + JSON.stringify(n[c].toString()));
      }
    }), a.push(`code=${r}`), a.push(`version=${this.version}`);
    const i = e;
    a.length && (e += " (" + a.join(", ") + ")");
    const s = new Error(e);
    return s.reason = i, s.code = r, Object.keys(n).forEach(function(c) {
      s[c] = n[c];
    }), s;
  }
  throwError(e, r, n) {
    throw this.makeError(e, r, n);
  }
  throwArgumentError(e, r, n) {
    return this.throwError(e, qe.errors.INVALID_ARGUMENT, {
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
    jc && this.throwError("platform missing String.prototype.normalize", qe.errors.UNSUPPORTED_OPERATION, {
      operation: "String.prototype.normalize",
      form: jc
    });
  }
  checkSafeUint53(e, r) {
    typeof e == "number" && (r == null && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, qe.errors.NUMERIC_FAULT, {
      operation: "checkSafeInteger",
      fault: "out-of-safe-range",
      value: e
    }), e % 1 && this.throwError(r, qe.errors.NUMERIC_FAULT, {
      operation: "checkSafeInteger",
      fault: "non-integer",
      value: e
    }));
  }
  checkArgumentCount(e, r, n) {
    n ? n = ": " + n : n = "", e < r && this.throwError("missing argument" + n, qe.errors.MISSING_ARGUMENT, {
      count: e,
      expectedCount: r
    }), e > r && this.throwError("too many arguments" + n, qe.errors.UNEXPECTED_ARGUMENT, {
      count: e,
      expectedCount: r
    });
  }
  checkNew(e, r) {
    (e === Object || e == null) && this.throwError("missing new", qe.errors.MISSING_NEW, { name: r.name });
  }
  checkAbstract(e, r) {
    e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", qe.errors.UNSUPPORTED_OPERATION, { name: e.name, operation: "new" }) : (e === Object || e == null) && this.throwError("missing new", qe.errors.MISSING_NEW, { name: r.name });
  }
  static globalLogger() {
    return Ws || (Ws = new qe(q6)), Ws;
  }
  static setCensorship(e, r) {
    if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", qe.errors.UNSUPPORTED_OPERATION, {
      operation: "setCensorship"
    }), Nc) {
      if (!e)
        return;
      this.globalLogger().throwError("error censorship permanent", qe.errors.UNSUPPORTED_OPERATION, {
        operation: "setCensorship"
      });
    }
    Oc = !!e, Nc = !!r;
  }
  static setLogLevel(e) {
    const r = Li[e.toLowerCase()];
    if (r == null) {
      qe.globalLogger().warn("invalid log level - " + e);
      return;
    }
    Lc = r;
  }
  static from(e) {
    return new qe(e);
  }
}
qe.errors = wo;
qe.levels = vo;
const Z6 = "bytes/5.5.0", gn = new qe(Z6);
function Tl(t) {
  return !!t.toHexString;
}
function ji(t) {
  return t.slice || (t.slice = function() {
    const e = Array.prototype.slice.call(arguments);
    return ji(new Uint8Array(Array.prototype.slice.apply(t, e)));
  }), t;
}
function Hc(t) {
  return typeof t == "number" && t == t && t % 1 === 0;
}
function pi(t) {
  if (t == null)
    return !1;
  if (t.constructor === Uint8Array)
    return !0;
  if (typeof t == "string" || !Hc(t.length) || t.length < 0)
    return !1;
  for (let e = 0; e < t.length; e++) {
    const r = t[e];
    if (!Hc(r) || r < 0 || r >= 256)
      return !1;
  }
  return !0;
}
function J6(t, e) {
  if (e || (e = {}), typeof t == "number") {
    gn.checkSafeUint53(t, "invalid arrayify value");
    const r = [];
    for (; t; )
      r.unshift(t & 255), t = parseInt(String(t / 256));
    return r.length === 0 && r.push(0), ji(new Uint8Array(r));
  }
  if (e.allowMissingPrefix && typeof t == "string" && t.substring(0, 2) !== "0x" && (t = "0x" + t), Tl(t) && (t = t.toHexString()), ba(t)) {
    let r = t.substring(2);
    r.length % 2 && (e.hexPad === "left" ? r = "0x0" + r.substring(2) : e.hexPad === "right" ? r += "0" : gn.throwArgumentError("hex data is odd-length", "value", t));
    const n = [];
    for (let a = 0; a < r.length; a += 2)
      n.push(parseInt(r.substring(a, a + 2), 16));
    return ji(new Uint8Array(n));
  }
  return pi(t) ? ji(new Uint8Array(t)) : gn.throwArgumentError("invalid arrayify value", "value", t);
}
function ba(t, e) {
  return !(typeof t != "string" || !t.match(/^0x[0-9A-Fa-f]*$/) || e && t.length !== 2 + 2 * e);
}
const Hs = "0123456789abcdef";
function Ul(t, e) {
  if (e || (e = {}), typeof t == "number") {
    gn.checkSafeUint53(t, "invalid hexlify value");
    let r = "";
    for (; t; )
      r = Hs[t & 15] + r, t = Math.floor(t / 16);
    return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00";
  }
  if (typeof t == "bigint")
    return t = t.toString(16), t.length % 2 ? "0x0" + t : "0x" + t;
  if (e.allowMissingPrefix && typeof t == "string" && t.substring(0, 2) !== "0x" && (t = "0x" + t), Tl(t))
    return t.toHexString();
  if (ba(t))
    return t.length % 2 && (e.hexPad === "left" ? t = "0x0" + t.substring(2) : e.hexPad === "right" ? t += "0" : gn.throwArgumentError("hex data is odd-length", "value", t)), t.toLowerCase();
  if (pi(t)) {
    let r = "0x";
    for (let n = 0; n < t.length; n++) {
      let a = t[n];
      r += Hs[(a & 240) >> 4] + Hs[a & 15];
    }
    return r;
  }
  return gn.throwArgumentError("invalid hexlify value", "value", t);
}
function zc(t, e) {
  for (typeof t != "string" ? t = Ul(t) : ba(t) || gn.throwArgumentError("invalid hex string", "value", t), t.length > 2 * e + 2 && gn.throwArgumentError("value out of range", "value", arguments[1]); t.length < 2 * e + 2; )
    t = "0x0" + t.substring(2);
  return t;
}
const Pl = "bignumber/5.5.0";
var Ao = K6.BN;
const Rr = new qe(Pl), zs = {}, Gc = 9007199254740991;
function Y6(t) {
  return t != null && (wt.isBigNumber(t) || typeof t == "number" && t % 1 === 0 || typeof t == "string" && !!t.match(/^-?[0-9]+$/) || ba(t) || typeof t == "bigint" || pi(t));
}
let $c = !1;
class wt {
  constructor(e, r) {
    Rr.checkNew(new.target, wt), e !== zs && Rr.throwError("cannot call constructor directly; use BigNumber.from", qe.errors.UNSUPPORTED_OPERATION, {
      operation: "new (BigNumber)"
    }), this._hex = r, this._isBigNumber = !0, Object.freeze(this);
  }
  fromTwos(e) {
    return qt(We(this).fromTwos(e));
  }
  toTwos(e) {
    return qt(We(this).toTwos(e));
  }
  abs() {
    return this._hex[0] === "-" ? wt.from(this._hex.substring(1)) : this;
  }
  add(e) {
    return qt(We(this).add(We(e)));
  }
  sub(e) {
    return qt(We(this).sub(We(e)));
  }
  div(e) {
    return wt.from(e).isZero() && sr("division by zero", "div"), qt(We(this).div(We(e)));
  }
  mul(e) {
    return qt(We(this).mul(We(e)));
  }
  mod(e) {
    const r = We(e);
    return r.isNeg() && sr("cannot modulo negative values", "mod"), qt(We(this).umod(r));
  }
  pow(e) {
    const r = We(e);
    return r.isNeg() && sr("cannot raise to negative values", "pow"), qt(We(this).pow(r));
  }
  and(e) {
    const r = We(e);
    return (this.isNegative() || r.isNeg()) && sr("cannot 'and' negative values", "and"), qt(We(this).and(r));
  }
  or(e) {
    const r = We(e);
    return (this.isNegative() || r.isNeg()) && sr("cannot 'or' negative values", "or"), qt(We(this).or(r));
  }
  xor(e) {
    const r = We(e);
    return (this.isNegative() || r.isNeg()) && sr("cannot 'xor' negative values", "xor"), qt(We(this).xor(r));
  }
  mask(e) {
    return (this.isNegative() || e < 0) && sr("cannot mask negative values", "mask"), qt(We(this).maskn(e));
  }
  shl(e) {
    return (this.isNegative() || e < 0) && sr("cannot shift negative values", "shl"), qt(We(this).shln(e));
  }
  shr(e) {
    return (this.isNegative() || e < 0) && sr("cannot shift negative values", "shr"), qt(We(this).shrn(e));
  }
  eq(e) {
    return We(this).eq(We(e));
  }
  lt(e) {
    return We(this).lt(We(e));
  }
  lte(e) {
    return We(this).lte(We(e));
  }
  gt(e) {
    return We(this).gt(We(e));
  }
  gte(e) {
    return We(this).gte(We(e));
  }
  isNegative() {
    return this._hex[0] === "-";
  }
  isZero() {
    return We(this).isZero();
  }
  toNumber() {
    try {
      return We(this).toNumber();
    } catch {
      sr("overflow", "toNumber", this.toString());
    }
    return null;
  }
  toBigInt() {
    try {
      return BigInt(this.toString());
    } catch {
    }
    return Rr.throwError("this platform does not support BigInt", qe.errors.UNSUPPORTED_OPERATION, {
      value: this.toString()
    });
  }
  toString() {
    return arguments.length > 0 && (arguments[0] === 10 ? $c || ($c = !0, Rr.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : arguments[0] === 16 ? Rr.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", qe.errors.UNEXPECTED_ARGUMENT, {}) : Rr.throwError("BigNumber.toString does not accept parameters", qe.errors.UNEXPECTED_ARGUMENT, {})), We(this).toString(10);
  }
  toHexString() {
    return this._hex;
  }
  toJSON(e) {
    return { type: "BigNumber", hex: this.toHexString() };
  }
  static from(e) {
    if (e instanceof wt)
      return e;
    if (typeof e == "string")
      return e.match(/^-?0x[0-9a-f]+$/i) ? new wt(zs, ni(e)) : e.match(/^-?[0-9]+$/) ? new wt(zs, ni(new Ao(e))) : Rr.throwArgumentError("invalid BigNumber string", "value", e);
    if (typeof e == "number")
      return e % 1 && sr("underflow", "BigNumber.from", e), (e >= Gc || e <= -Gc) && sr("overflow", "BigNumber.from", e), wt.from(String(e));
    const r = e;
    if (typeof r == "bigint")
      return wt.from(r.toString());
    if (pi(r))
      return wt.from(Ul(r));
    if (r)
      if (r.toHexString) {
        const n = r.toHexString();
        if (typeof n == "string")
          return wt.from(n);
      } else {
        let n = r._hex;
        if (n == null && r.type === "BigNumber" && (n = r.hex), typeof n == "string" && (ba(n) || n[0] === "-" && ba(n.substring(1))))
          return wt.from(n);
      }
    return Rr.throwArgumentError("invalid BigNumber value", "value", e);
  }
  static isBigNumber(e) {
    return !!(e && e._isBigNumber);
  }
}
function ni(t) {
  if (typeof t != "string")
    return ni(t.toString(16));
  if (t[0] === "-")
    return t = t.substring(1), t[0] === "-" && Rr.throwArgumentError("invalid hex", "value", t), t = ni(t), t === "0x00" ? t : "-" + t;
  if (t.substring(0, 2) !== "0x" && (t = "0x" + t), t === "0x")
    return "0x00";
  for (t.length % 2 && (t = "0x0" + t.substring(2)); t.length > 4 && t.substring(0, 4) === "0x00"; )
    t = "0x" + t.substring(4);
  return t;
}
function qt(t) {
  return wt.from(ni(t));
}
function We(t) {
  const e = wt.from(t).toHexString();
  return e[0] === "-" ? new Ao("-" + e.substring(3), 16) : new Ao(e.substring(2), 16);
}
function sr(t, e, r) {
  const n = { fault: t, operation: e };
  return r != null && (n.value = r), Rr.throwError(t, qe.errors.NUMERIC_FAULT, n);
}
const Lt = new qe(Pl), Ha = {}, Nl = wt.from(0), Ol = wt.from(-1);
function Ll(t, e, r, n) {
  const a = { fault: e, operation: r };
  return n !== void 0 && (a.value = n), Lt.throwError(t, qe.errors.NUMERIC_FAULT, a);
}
let za = "0";
for (; za.length < 256; )
  za += za;
function f0(t) {
  if (typeof t != "number")
    try {
      t = wt.from(t).toNumber();
    } catch {
    }
  return typeof t == "number" && t >= 0 && t <= 256 && !(t % 1) ? "1" + za.substring(0, t) : Lt.throwArgumentError("invalid decimal size", "decimals", t);
}
function Gs(t, e) {
  e == null && (e = 0);
  const r = f0(e);
  t = wt.from(t);
  const n = t.lt(Nl);
  n && (t = t.mul(Ol));
  let a = t.mod(r).toString();
  for (; a.length < r.length - 1; )
    a = "0" + a;
  a = a.match(/^([0-9]*[1-9]|0)(0*)/)[1];
  const i = t.div(r).toString();
  return r.length === 1 ? t = i : t = i + "." + a, n && (t = "-" + t), t;
}
function Fr(t, e) {
  e == null && (e = 0);
  const r = f0(e);
  (typeof t != "string" || !t.match(/^-?[0-9.]+$/)) && Lt.throwArgumentError("invalid decimal value", "value", t);
  const n = t.substring(0, 1) === "-";
  n && (t = t.substring(1)), t === "." && Lt.throwArgumentError("missing value", "value", t);
  const a = t.split(".");
  a.length > 2 && Lt.throwArgumentError("too many decimal points", "value", t);
  let i = a[0], s = a[1];
  for (i || (i = "0"), s || (s = "0"); s[s.length - 1] === "0"; )
    s = s.substring(0, s.length - 1);
  for (s.length > r.length - 1 && Ll("fractional component exceeds decimals", "underflow", "parseFixed"), s === "" && (s = "0"); s.length < r.length - 1; )
    s += "0";
  const c = wt.from(i), p = wt.from(s);
  let x = c.mul(r).add(p);
  return n && (x = x.mul(Ol)), x;
}
class oa {
  constructor(e, r, n, a) {
    e !== Ha && Lt.throwError("cannot use FixedFormat constructor; use FixedFormat.from", qe.errors.UNSUPPORTED_OPERATION, {
      operation: "new FixedFormat"
    }), this.signed = r, this.width = n, this.decimals = a, this.name = (r ? "" : "u") + "fixed" + String(n) + "x" + String(a), this._multiplier = f0(a), Object.freeze(this);
  }
  static from(e) {
    if (e instanceof oa)
      return e;
    typeof e == "number" && (e = `fixed128x${e}`);
    let r = !0, n = 128, a = 18;
    if (typeof e == "string") {
      if (e !== "fixed")
        if (e === "ufixed")
          r = !1;
        else {
          const i = e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
          i || Lt.throwArgumentError("invalid fixed format", "format", e), r = i[1] !== "u", n = parseInt(i[2]), a = parseInt(i[3]);
        }
    } else if (e) {
      const i = (s, c, p) => e[s] == null ? p : (typeof e[s] !== c && Lt.throwArgumentError("invalid fixed format (" + s + " not " + c + ")", "format." + s, e[s]), e[s]);
      r = i("signed", "boolean", r), n = i("width", "number", n), a = i("decimals", "number", a);
    }
    return n % 8 && Lt.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", n), a > 80 && Lt.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", a), new oa(Ha, r, n, a);
  }
}
class Mt {
  constructor(e, r, n, a) {
    Lt.checkNew(new.target, Mt), e !== Ha && Lt.throwError("cannot use FixedNumber constructor; use FixedNumber.from", qe.errors.UNSUPPORTED_OPERATION, {
      operation: "new FixedFormat"
    }), this.format = a, this._hex = r, this._value = n, this._isFixedNumber = !0, Object.freeze(this);
  }
  _checkFormat(e) {
    this.format.name !== e.format.name && Lt.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", e);
  }
  addUnsafe(e) {
    this._checkFormat(e);
    const r = Fr(this._value, this.format.decimals), n = Fr(e._value, e.format.decimals);
    return Mt.fromValue(r.add(n), this.format.decimals, this.format);
  }
  subUnsafe(e) {
    this._checkFormat(e);
    const r = Fr(this._value, this.format.decimals), n = Fr(e._value, e.format.decimals);
    return Mt.fromValue(r.sub(n), this.format.decimals, this.format);
  }
  mulUnsafe(e) {
    this._checkFormat(e);
    const r = Fr(this._value, this.format.decimals), n = Fr(e._value, e.format.decimals);
    return Mt.fromValue(r.mul(n).div(this.format._multiplier), this.format.decimals, this.format);
  }
  divUnsafe(e) {
    this._checkFormat(e);
    const r = Fr(this._value, this.format.decimals), n = Fr(e._value, e.format.decimals);
    return Mt.fromValue(r.mul(this.format._multiplier).div(n), this.format.decimals, this.format);
  }
  floor() {
    const e = this.toString().split(".");
    e.length === 1 && e.push("0");
    let r = Mt.from(e[0], this.format);
    const n = !e[1].match(/^(0*)$/);
    return this.isNegative() && n && (r = r.subUnsafe(Vc.toFormat(r.format))), r;
  }
  ceiling() {
    const e = this.toString().split(".");
    e.length === 1 && e.push("0");
    let r = Mt.from(e[0], this.format);
    const n = !e[1].match(/^(0*)$/);
    return !this.isNegative() && n && (r = r.addUnsafe(Vc.toFormat(r.format))), r;
  }
  round(e) {
    e == null && (e = 0);
    const r = this.toString().split(".");
    if (r.length === 1 && r.push("0"), (e < 0 || e > 80 || e % 1) && Lt.throwArgumentError("invalid decimal count", "decimals", e), r[1].length <= e)
      return this;
    const n = Mt.from("1" + za.substring(0, e), this.format), a = Q6.toFormat(this.format);
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
    e % 8 && Lt.throwArgumentError("invalid byte width", "width", e);
    const r = wt.from(this._hex).fromTwos(this.format.width).toTwos(e).toHexString();
    return zc(r, e / 8);
  }
  toUnsafeFloat() {
    return parseFloat(this.toString());
  }
  toFormat(e) {
    return Mt.fromString(this._value, e);
  }
  static fromValue(e, r, n) {
    return n == null && r != null && !Y6(r) && (n = r, r = null), r == null && (r = 0), n == null && (n = "fixed"), Mt.fromString(Gs(e, r), oa.from(n));
  }
  static fromString(e, r) {
    r == null && (r = "fixed");
    const n = oa.from(r), a = Fr(e, n.decimals);
    !n.signed && a.lt(Nl) && Ll("unsigned value cannot be negative", "overflow", "value", e);
    let i = null;
    n.signed ? i = a.toTwos(n.width).toHexString() : (i = a.toHexString(), i = zc(i, n.width / 8));
    const s = Gs(a, n.decimals);
    return new Mt(Ha, i, s, n);
  }
  static fromBytes(e, r) {
    r == null && (r = "fixed");
    const n = oa.from(r);
    if (J6(e).length > n.width / 8)
      throw new Error("overflow");
    let a = wt.from(e);
    n.signed && (a = a.fromTwos(n.width));
    const i = a.toTwos((n.signed ? 0 : 1) + n.width).toHexString(), s = Gs(a, n.decimals);
    return new Mt(Ha, i, s, n);
  }
  static from(e, r) {
    if (typeof e == "string")
      return Mt.fromString(e, r);
    if (pi(e))
      return Mt.fromBytes(e, r);
    try {
      return Mt.fromValue(e, 0, r);
    } catch (n) {
      if (n.code !== qe.errors.INVALID_ARGUMENT)
        throw n;
    }
    return Lt.throwArgumentError("invalid FixedNumber value", "value", e);
  }
  static isFixedNumber(e) {
    return !!(e && e._isFixedNumber);
  }
}
const Vc = Mt.from(1), Q6 = Mt.from("0.5"), e4 = "units/5.5.0", t4 = new qe(e4), r4 = [
  "wei",
  "kwei",
  "mwei",
  "gwei",
  "szabo",
  "finney",
  "ether"
];
function n4(t, e) {
  if (typeof t != "string" && t4.throwArgumentError("value must be a string", "value", t), typeof e == "string") {
    const r = r4.indexOf(e);
    r !== -1 && (e = 3 * r);
  }
  return Fr(t, e != null ? e : 18);
}
function a4(t, e) {
  const [r, n] = Ne(t);
  return Ft(() => {
    const a = setTimeout(() => n(t), e || 500);
    return () => {
      clearTimeout(a);
    };
  }, [t, e]), r;
}
const jl = (t) => {
  const e = wa(() => t ? t.split(",") : void 0, [t]), {
    chainId: r
  } = $t(), n = !i0.includes(r.toString()), [a, i] = Ne([]), [s, c] = Ne([]), p = a.filter((C) => e ? e.includes(C.dexId) : !0), x = s.map((C) => C.dexId), y = s.length === 0 && !t ? void 0 : p.filter((C) => !x.includes(C.dexId)).map((C) => C.dexId).join(",").replace("kyberswapv1", "kyberswap,kyberswap-static");
  return Ft(() => {
    (async () => {
      var z;
      if (n)
        return;
      const B = await fetch(`https://ks-setting.kyberswap.com/api/v1/dexes?chain=${a0[r]}&isEnabled=true&pageSize=100`).then((O) => O.json());
      let F = ((z = B == null ? void 0 : B.data) == null ? void 0 : z.dexes) || [];
      const R = F.find((O) => O.dexId === "kyberswap-elastic"), M = F.find((O) => O.dexId === "kyberswap"), S = F.find((O) => O.dexId === "kyberswap-static"), U = F.find((O) => O.dexId === "kyberswap-limit-order");
      let N = [];
      R && (N = [{
        dexId: "kyberswap-elastic",
        name: "KyberSwap Elastic",
        logoURL: "https://kyberswap.com/favicon.ico"
      }]), (S || M) && N.push({
        dexId: "kyberswapv1",
        name: "KyberSwap Classic",
        logoURL: "https://kyberswap.com/favicon.ico"
      }), U && N.push({
        dexId: "kyberswap-limit-order",
        name: "KyberSwap Limit Order",
        logoURL: "https://kyberswap.com/favicon.ico"
      }), F = N.concat(F.filter((O) => !["kyberswap", "kyberswap-elastic", "kyberswap-static", "kyberswap-limit-order"].includes(O.dexId))), i(F);
    })();
  }, [n, r, e]), [p, y, s, c];
}, i4 = ({
  defaultTokenIn: t,
  defaultTokenOut: e,
  defaultSlippage: r,
  feeSetting: n,
  enableDexes: a
}) => {
  const {
    provider: i,
    chainId: s
  } = $t(), [c, p] = Ne(t || pt), [x, y] = Ne(e || ""), C = gs(), B = !i0.includes(s.toString()), F = c === pt && x.toLowerCase() === Nn[s].address.toLowerCase(), R = x === pt && c.toLowerCase() === Nn[s].address.toLowerCase();
  Ft(() => {
    B ? (p(""), y(""), se(null)) : (se(null), p(t || pt), y(e || ""));
  }, [B, s, t, e]);
  const {
    balances: M
  } = o0(C.map((E) => E.address)), [S, U, N, z] = jl(a), [O, T] = Ne("1"), G = a4(O), [J, Y] = Ne(!1), [X, se] = Ne(null), [D, u] = Ne(""), [l, o] = Ne(r || 50), [d, g] = Ne(20), v = Er(), {
    chargeFeeBy: A,
    feeAmount: w,
    isInBps: h,
    feeReceiver: m
  } = n || {}, f = xn(async () => {
    var V, j, le, te;
    if (B)
      return;
    const E = c === pt ? 18 : (V = C.find((q) => q.address.toLowerCase() === c.toLowerCase())) == null ? void 0 : V.decimals;
    if (!E || !c || !x || !G) {
      u("Invalid input"), se(null);
      return;
    }
    let k = de.from("0");
    try {
      k = n4(G, E);
    } catch {
      u("Invalid input amount"), se(null);
      return;
    }
    if (!k) {
      u("Invalid input amount"), se(null);
      return;
    }
    const b = M[c] || de.from(0);
    let I = "";
    if (b.lt(k) && (I = "Insufficient balance"), i || (I = "Please connect your wallet"), u(I), F || R) {
      se({
        routerAddress: Nn[s].address,
        routeSummary: {
          tokenIn: c,
          amountIn: k.toString(),
          amountInUsd: "",
          tokenOut: x,
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
      tokenIn: c,
      tokenOut: x,
      saveGas: !1,
      gasInclude: !0,
      amountIn: k.toString(),
      includedSources: U,
      chargeFeeBy: A,
      feeAmount: w,
      isInBps: h,
      feeReceiver: m
    }, P = Object.keys(L).reduce((q, xe) => L[xe] !== void 0 ? `${q}&${xe}=${L[xe]}` : q, "");
    Y(!0), v.current && v.current.abort();
    const H = new AbortController();
    v.current = H;
    const $ = await fetch(`https://aggregator-api.kyberswap.com/${a0[s]}/api/v1/routes?${P.slice(1)}`, {
      signal: (j = v.current) == null ? void 0 : j.signal
    }).then((q) => q.json());
    Number((te = (le = $.data) == null ? void 0 : le.routeSummary) == null ? void 0 : te.amountOut) ? (se($.data), i && !b.lt(k) && u("")) : (se(null), u("Insufficient liquidity")), v.current = null, Y(!1);
  }, [
    C,
    c,
    x,
    F,
    R,
    i,
    G,
    U,
    B,
    s,
    A,
    w,
    h,
    m,
    JSON.stringify(M)
  ]);
  return Ft(() => {
    f();
  }, [f]), {
    tokenIn: c,
    tokenOut: x,
    setTokenOut: y,
    setTokenIn: p,
    inputAmout: O,
    trade: X,
    setInputAmount: T,
    loading: J,
    error: D,
    slippage: l,
    setSlippage: o,
    getRate: f,
    deadline: d,
    setDeadline: g,
    allDexes: S,
    excludedDexes: N,
    setExcludedDexes: z,
    setTrade: se,
    isWrap: F,
    isUnwrap: R
  };
};
var Pa = /* @__PURE__ */ ((t) => (t.UNKNOWN = "unknown", t.PENDING = "pending", t.APPROVED = "approved", t.NOT_APPROVED = "not_approved", t))(Pa || {});
function s4(t, e, r) {
  const {
    account: n,
    provider: a
  } = $t(), [i, s] = Ne(!1), [c, p] = Ne(() => e === pt ? "approved" : "unknown"), x = bs(e, Cl), [y, C] = Ne(""), B = xn(() => {
    if (x) {
      const F = de.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
      x.approve(r, F).then((R) => {
        p("pending"), C(R.hash);
      });
    }
  }, [x, r]);
  return Ft(() => {
    if (y) {
      const F = setInterval(() => {
        a == null || a.getTransactionReceipt(y).then((R) => {
          R && (C(""), p("approved"));
        });
      }, 8e3);
      return () => {
        clearInterval(F);
      };
    }
  }, [y, a]), Ft(() => {
    e === pt && p("approved"), x && e !== pt && n && r && (s(!0), x.allowance(n, r).then((F) => {
      de.from(t).lte(F) ? p("approved") : p("not_approved"), s(!1);
    }));
  }, [x, e, n, r, t]), {
    loading: i,
    approvalState: c,
    approve: B
  };
}
const Wl = (t) => /* @__PURE__ */ ae.createElement("svg", { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ ae.createElement("g", { clipPath: "url(#clip0_277_44496)" }, /* @__PURE__ */ ae.createElement("path", { d: "M9.99984 18.3332C14.6022 18.3332 18.3332 14.6022 18.3332 9.99984C18.3332 5.39746 14.6022 1.6665 9.99984 1.6665C5.39746 1.6665 1.6665 5.39746 1.6665 9.99984C1.6665 14.6022 5.39746 18.3332 9.99984 18.3332Z", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ ae.createElement("path", { d: "M10 13.3333V10", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ ae.createElement("path", { d: "M10 6.6665H10.0083", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })), /* @__PURE__ */ ae.createElement("defs", null, /* @__PURE__ */ ae.createElement("clipPath", { id: "clip0_277_44496" }, /* @__PURE__ */ ae.createElement("rect", { width: 20, height: 20, fill: "currentColor" }))));
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
function o4() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function c4() {
  let [, t] = Ne(/* @__PURE__ */ Object.create(null));
  return xn(() => {
    t(/* @__PURE__ */ Object.create(null));
  }, []);
}
var f4 = o4() ? f1 : Ft, d4 = ({
  children: t,
  type: e = "reach-portal",
  containerRef: r
}) => {
  let n = ae.useRef(null), a = ae.useRef(null), i = c4();
  return ae.useEffect(() => {
    r != null && (typeof r != "object" || !("current" in r) ? console.warn("@reach/portal: Invalid value passed to the `containerRef` of a `Portal`. The portal will be appended to the document body, but if you want to attach it to another DOM node you must pass a valid React ref object to `containerRef`.") : r.current == null && console.warn("@reach/portal: A ref was passed to the `containerRef` prop of a `Portal`, but no DOM node was attached to it. Be sure to pass the ref to a DOM component.\n\nIf you are forwarding the ref from another component, be sure to use the React.forwardRef API. See https://reactjs.org/docs/forwarding-refs.html."));
  }, [r]), f4(() => {
    if (!n.current)
      return;
    let s = n.current.ownerDocument, c = (r == null ? void 0 : r.current) || s.body;
    return a.current = s == null ? void 0 : s.createElement(e), c.appendChild(a.current), i(), () => {
      a.current && c && c.removeChild(a.current);
    };
  }, [e, i, r]), a.current ? m1(t, a.current) : /* @__PURE__ */ W("span", {
    ref: n
  });
}, Hl = ({
  unstable_skipInitialRender: t,
  ...e
}) => {
  let [r, n] = ae.useState(!1);
  return ae.useEffect(() => {
    t && n(!0);
  }, [t]), t && !r ? null : /* @__PURE__ */ W(d4, {
    ...e
  });
};
Hl.displayName = "Portal";
var Kc = function(e) {
  return e.reduce(function(r, n) {
    var a = n[0], i = n[1];
    return r[a] = i, r;
  }, {});
}, qc = typeof window < "u" && window.document && window.document.createElement ? ae.useLayoutEffect : ae.useEffect, Zt = "top", dr = "bottom", lr = "right", Jt = "left", xs = "auto", bi = [Zt, dr, lr, Jt], ga = "start", ai = "end", l4 = "clippingParents", zl = "viewport", Ma = "popper", h4 = "reference", Xc = /* @__PURE__ */ bi.reduce(function(t, e) {
  return t.concat([e + "-" + ga, e + "-" + ai]);
}, []), Gl = /* @__PURE__ */ [].concat(bi, [xs]).reduce(function(t, e) {
  return t.concat([e, e + "-" + ga, e + "-" + ai]);
}, []), u4 = "beforeRead", m4 = "read", p4 = "afterRead", b4 = "beforeMain", g4 = "main", x4 = "afterMain", y4 = "beforeWrite", v4 = "write", w4 = "afterWrite", Eo = [u4, m4, p4, b4, g4, x4, y4, v4, w4];
function qr(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function mr(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return e && e.defaultView || window;
  }
  return t;
}
function $n(t) {
  var e = mr(t).Element;
  return t instanceof e || t instanceof Element;
}
function rr(t) {
  var e = mr(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function d0(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = mr(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function A4(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(r) {
    var n = e.styles[r] || {}, a = e.attributes[r] || {}, i = e.elements[r];
    !rr(i) || !qr(i) || (Object.assign(i.style, n), Object.keys(a).forEach(function(s) {
      var c = a[s];
      c === !1 ? i.removeAttribute(s) : i.setAttribute(s, c === !0 ? "" : c);
    }));
  });
}
function E4(t) {
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
      var a = e.elements[n], i = e.attributes[n] || {}, s = Object.keys(e.styles.hasOwnProperty(n) ? e.styles[n] : r[n]), c = s.reduce(function(p, x) {
        return p[x] = "", p;
      }, {});
      !rr(a) || !qr(a) || (Object.assign(a.style, c), Object.keys(i).forEach(function(p) {
        a.removeAttribute(p);
      }));
    });
  };
}
const C4 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: A4,
  effect: E4,
  requires: ["computeStyles"]
};
function Ir(t) {
  return t.split("-")[0];
}
var On = Math.max, ts = Math.min, xa = Math.round;
function Co() {
  var t = navigator.userAgentData;
  return t != null && t.brands ? t.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function $l() {
  return !/^((?!chrome|android).)*safari/i.test(Co());
}
function ya(t, e, r) {
  e === void 0 && (e = !1), r === void 0 && (r = !1);
  var n = t.getBoundingClientRect(), a = 1, i = 1;
  e && rr(t) && (a = t.offsetWidth > 0 && xa(n.width) / t.offsetWidth || 1, i = t.offsetHeight > 0 && xa(n.height) / t.offsetHeight || 1);
  var s = $n(t) ? mr(t) : window, c = s.visualViewport, p = !$l() && r, x = (n.left + (p && c ? c.offsetLeft : 0)) / a, y = (n.top + (p && c ? c.offsetTop : 0)) / i, C = n.width / a, B = n.height / i;
  return {
    width: C,
    height: B,
    top: y,
    right: x + C,
    bottom: y + B,
    left: x,
    x,
    y
  };
}
function l0(t) {
  var e = ya(t), r = t.offsetWidth, n = t.offsetHeight;
  return Math.abs(e.width - r) <= 1 && (r = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
    x: t.offsetLeft,
    y: t.offsetTop,
    width: r,
    height: n
  };
}
function Vl(t, e) {
  var r = e.getRootNode && e.getRootNode();
  if (t.contains(e))
    return !0;
  if (r && d0(r)) {
    var n = e;
    do {
      if (n && t.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Sr(t) {
  return mr(t).getComputedStyle(t);
}
function I4(t) {
  return ["table", "td", "th"].indexOf(qr(t)) >= 0;
}
function An(t) {
  return (($n(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function ys(t) {
  return qr(t) === "html" ? t : t.assignedSlot || t.parentNode || (d0(t) ? t.host : null) || An(t);
}
function Zc(t) {
  return !rr(t) || Sr(t).position === "fixed" ? null : t.offsetParent;
}
function k4(t) {
  var e = /firefox/i.test(Co()), r = /Trident/i.test(Co());
  if (r && rr(t)) {
    var n = Sr(t);
    if (n.position === "fixed")
      return null;
  }
  var a = ys(t);
  for (d0(a) && (a = a.host); rr(a) && ["html", "body"].indexOf(qr(a)) < 0; ) {
    var i = Sr(a);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || e && i.willChange === "filter" || e && i.filter && i.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function gi(t) {
  for (var e = mr(t), r = Zc(t); r && I4(r) && Sr(r).position === "static"; )
    r = Zc(r);
  return r && (qr(r) === "html" || qr(r) === "body" && Sr(r).position === "static") ? e : r || k4(t) || e;
}
function h0(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function Ga(t, e, r) {
  return On(t, ts(e, r));
}
function S4(t, e, r) {
  var n = Ga(t, e, r);
  return n > r ? r : n;
}
function Kl() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ql(t) {
  return Object.assign({}, Kl(), t);
}
function Xl(t, e) {
  return e.reduce(function(r, n) {
    return r[n] = t, r;
  }, {});
}
var D4 = function(e, r) {
  return e = typeof e == "function" ? e(Object.assign({}, r.rects, {
    placement: r.placement
  })) : e, ql(typeof e != "number" ? e : Xl(e, bi));
};
function B4(t) {
  var e, r = t.state, n = t.name, a = t.options, i = r.elements.arrow, s = r.modifiersData.popperOffsets, c = Ir(r.placement), p = h0(c), x = [Jt, lr].indexOf(c) >= 0, y = x ? "height" : "width";
  if (!(!i || !s)) {
    var C = D4(a.padding, r), B = l0(i), F = p === "y" ? Zt : Jt, R = p === "y" ? dr : lr, M = r.rects.reference[y] + r.rects.reference[p] - s[p] - r.rects.popper[y], S = s[p] - r.rects.reference[p], U = gi(i), N = U ? p === "y" ? U.clientHeight || 0 : U.clientWidth || 0 : 0, z = M / 2 - S / 2, O = C[F], T = N - B[y] - C[R], G = N / 2 - B[y] / 2 + z, J = Ga(O, G, T), Y = p;
    r.modifiersData[n] = (e = {}, e[Y] = J, e.centerOffset = J - G, e);
  }
}
function F4(t) {
  var e = t.state, r = t.options, n = r.element, a = n === void 0 ? "[data-popper-arrow]" : n;
  if (a != null && !(typeof a == "string" && (a = e.elements.popper.querySelector(a), !a))) {
    if (process.env.NODE_ENV !== "production" && (rr(a) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !Vl(e.elements.popper, a)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    e.elements.arrow = a;
  }
}
const R4 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: B4,
  effect: F4,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function va(t) {
  return t.split("-")[1];
}
var M4 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function _4(t) {
  var e = t.x, r = t.y, n = window, a = n.devicePixelRatio || 1;
  return {
    x: xa(e * a) / a || 0,
    y: xa(r * a) / a || 0
  };
}
function Jc(t) {
  var e, r = t.popper, n = t.popperRect, a = t.placement, i = t.variation, s = t.offsets, c = t.position, p = t.gpuAcceleration, x = t.adaptive, y = t.roundOffsets, C = t.isFixed, B = s.x, F = B === void 0 ? 0 : B, R = s.y, M = R === void 0 ? 0 : R, S = typeof y == "function" ? y({
    x: F,
    y: M
  }) : {
    x: F,
    y: M
  };
  F = S.x, M = S.y;
  var U = s.hasOwnProperty("x"), N = s.hasOwnProperty("y"), z = Jt, O = Zt, T = window;
  if (x) {
    var G = gi(r), J = "clientHeight", Y = "clientWidth";
    if (G === mr(r) && (G = An(r), Sr(G).position !== "static" && c === "absolute" && (J = "scrollHeight", Y = "scrollWidth")), G = G, a === Zt || (a === Jt || a === lr) && i === ai) {
      O = dr;
      var X = C && G === T && T.visualViewport ? T.visualViewport.height : G[J];
      M -= X - n.height, M *= p ? 1 : -1;
    }
    if (a === Jt || (a === Zt || a === dr) && i === ai) {
      z = lr;
      var se = C && G === T && T.visualViewport ? T.visualViewport.width : G[Y];
      F -= se - n.width, F *= p ? 1 : -1;
    }
  }
  var D = Object.assign({
    position: c
  }, x && M4), u = y === !0 ? _4({
    x: F,
    y: M
  }) : {
    x: F,
    y: M
  };
  if (F = u.x, M = u.y, p) {
    var l;
    return Object.assign({}, D, (l = {}, l[O] = N ? "0" : "", l[z] = U ? "0" : "", l.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + F + "px, " + M + "px)" : "translate3d(" + F + "px, " + M + "px, 0)", l));
  }
  return Object.assign({}, D, (e = {}, e[O] = N ? M + "px" : "", e[z] = U ? F + "px" : "", e.transform = "", e));
}
function T4(t) {
  var e = t.state, r = t.options, n = r.gpuAcceleration, a = n === void 0 ? !0 : n, i = r.adaptive, s = i === void 0 ? !0 : i, c = r.roundOffsets, p = c === void 0 ? !0 : c;
  if (process.env.NODE_ENV !== "production") {
    var x = Sr(e.elements.popper).transitionProperty || "";
    s && ["transform", "top", "right", "bottom", "left"].some(function(C) {
      return x.indexOf(C) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var y = {
    placement: Ir(e.placement),
    variation: va(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: a,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Jc(Object.assign({}, y, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: s,
    roundOffsets: p
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Jc(Object.assign({}, y, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: p
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const U4 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: T4,
  data: {}
};
var ki = {
  passive: !0
};
function P4(t) {
  var e = t.state, r = t.instance, n = t.options, a = n.scroll, i = a === void 0 ? !0 : a, s = n.resize, c = s === void 0 ? !0 : s, p = mr(e.elements.popper), x = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return i && x.forEach(function(y) {
    y.addEventListener("scroll", r.update, ki);
  }), c && p.addEventListener("resize", r.update, ki), function() {
    i && x.forEach(function(y) {
      y.removeEventListener("scroll", r.update, ki);
    }), c && p.removeEventListener("resize", r.update, ki);
  };
}
const N4 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: P4,
  data: {}
};
var O4 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Wi(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return O4[e];
  });
}
var L4 = {
  start: "end",
  end: "start"
};
function Yc(t) {
  return t.replace(/start|end/g, function(e) {
    return L4[e];
  });
}
function u0(t) {
  var e = mr(t), r = e.pageXOffset, n = e.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function m0(t) {
  return ya(An(t)).left + u0(t).scrollLeft;
}
function j4(t, e) {
  var r = mr(t), n = An(t), a = r.visualViewport, i = n.clientWidth, s = n.clientHeight, c = 0, p = 0;
  if (a) {
    i = a.width, s = a.height;
    var x = $l();
    (x || !x && e === "fixed") && (c = a.offsetLeft, p = a.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: c + m0(t),
    y: p
  };
}
function W4(t) {
  var e, r = An(t), n = u0(t), a = (e = t.ownerDocument) == null ? void 0 : e.body, i = On(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), s = On(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), c = -n.scrollLeft + m0(t), p = -n.scrollTop;
  return Sr(a || r).direction === "rtl" && (c += On(r.clientWidth, a ? a.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: c,
    y: p
  };
}
function p0(t) {
  var e = Sr(t), r = e.overflow, n = e.overflowX, a = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function Zl(t) {
  return ["html", "body", "#document"].indexOf(qr(t)) >= 0 ? t.ownerDocument.body : rr(t) && p0(t) ? t : Zl(ys(t));
}
function $a(t, e) {
  var r;
  e === void 0 && (e = []);
  var n = Zl(t), a = n === ((r = t.ownerDocument) == null ? void 0 : r.body), i = mr(n), s = a ? [i].concat(i.visualViewport || [], p0(n) ? n : []) : n, c = e.concat(s);
  return a ? c : c.concat($a(ys(s)));
}
function Io(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height
  });
}
function H4(t, e) {
  var r = ya(t, !1, e === "fixed");
  return r.top = r.top + t.clientTop, r.left = r.left + t.clientLeft, r.bottom = r.top + t.clientHeight, r.right = r.left + t.clientWidth, r.width = t.clientWidth, r.height = t.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Qc(t, e, r) {
  return e === zl ? Io(j4(t, r)) : $n(e) ? H4(e, r) : Io(W4(An(t)));
}
function z4(t) {
  var e = $a(ys(t)), r = ["absolute", "fixed"].indexOf(Sr(t).position) >= 0, n = r && rr(t) ? gi(t) : t;
  return $n(n) ? e.filter(function(a) {
    return $n(a) && Vl(a, n) && qr(a) !== "body";
  }) : [];
}
function G4(t, e, r, n) {
  var a = e === "clippingParents" ? z4(t) : [].concat(e), i = [].concat(a, [r]), s = i[0], c = i.reduce(function(p, x) {
    var y = Qc(t, x, n);
    return p.top = On(y.top, p.top), p.right = ts(y.right, p.right), p.bottom = ts(y.bottom, p.bottom), p.left = On(y.left, p.left), p;
  }, Qc(t, s, n));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Jl(t) {
  var e = t.reference, r = t.element, n = t.placement, a = n ? Ir(n) : null, i = n ? va(n) : null, s = e.x + e.width / 2 - r.width / 2, c = e.y + e.height / 2 - r.height / 2, p;
  switch (a) {
    case Zt:
      p = {
        x: s,
        y: e.y - r.height
      };
      break;
    case dr:
      p = {
        x: s,
        y: e.y + e.height
      };
      break;
    case lr:
      p = {
        x: e.x + e.width,
        y: c
      };
      break;
    case Jt:
      p = {
        x: e.x - r.width,
        y: c
      };
      break;
    default:
      p = {
        x: e.x,
        y: e.y
      };
  }
  var x = a ? h0(a) : null;
  if (x != null) {
    var y = x === "y" ? "height" : "width";
    switch (i) {
      case ga:
        p[x] = p[x] - (e[y] / 2 - r[y] / 2);
        break;
      case ai:
        p[x] = p[x] + (e[y] / 2 - r[y] / 2);
        break;
    }
  }
  return p;
}
function ii(t, e) {
  e === void 0 && (e = {});
  var r = e, n = r.placement, a = n === void 0 ? t.placement : n, i = r.strategy, s = i === void 0 ? t.strategy : i, c = r.boundary, p = c === void 0 ? l4 : c, x = r.rootBoundary, y = x === void 0 ? zl : x, C = r.elementContext, B = C === void 0 ? Ma : C, F = r.altBoundary, R = F === void 0 ? !1 : F, M = r.padding, S = M === void 0 ? 0 : M, U = ql(typeof S != "number" ? S : Xl(S, bi)), N = B === Ma ? h4 : Ma, z = t.rects.popper, O = t.elements[R ? N : B], T = G4($n(O) ? O : O.contextElement || An(t.elements.popper), p, y, s), G = ya(t.elements.reference), J = Jl({
    reference: G,
    element: z,
    strategy: "absolute",
    placement: a
  }), Y = Io(Object.assign({}, z, J)), X = B === Ma ? Y : G, se = {
    top: T.top - X.top + U.top,
    bottom: X.bottom - T.bottom + U.bottom,
    left: T.left - X.left + U.left,
    right: X.right - T.right + U.right
  }, D = t.modifiersData.offset;
  if (B === Ma && D) {
    var u = D[a];
    Object.keys(se).forEach(function(l) {
      var o = [lr, dr].indexOf(l) >= 0 ? 1 : -1, d = [Zt, dr].indexOf(l) >= 0 ? "y" : "x";
      se[l] += u[d] * o;
    });
  }
  return se;
}
function $4(t, e) {
  e === void 0 && (e = {});
  var r = e, n = r.placement, a = r.boundary, i = r.rootBoundary, s = r.padding, c = r.flipVariations, p = r.allowedAutoPlacements, x = p === void 0 ? Gl : p, y = va(n), C = y ? c ? Xc : Xc.filter(function(R) {
    return va(R) === y;
  }) : bi, B = C.filter(function(R) {
    return x.indexOf(R) >= 0;
  });
  B.length === 0 && (B = C, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var F = B.reduce(function(R, M) {
    return R[M] = ii(t, {
      placement: M,
      boundary: a,
      rootBoundary: i,
      padding: s
    })[Ir(M)], R;
  }, {});
  return Object.keys(F).sort(function(R, M) {
    return F[R] - F[M];
  });
}
function V4(t) {
  if (Ir(t) === xs)
    return [];
  var e = Wi(t);
  return [Yc(t), e, Yc(e)];
}
function K4(t) {
  var e = t.state, r = t.options, n = t.name;
  if (!e.modifiersData[n]._skip) {
    for (var a = r.mainAxis, i = a === void 0 ? !0 : a, s = r.altAxis, c = s === void 0 ? !0 : s, p = r.fallbackPlacements, x = r.padding, y = r.boundary, C = r.rootBoundary, B = r.altBoundary, F = r.flipVariations, R = F === void 0 ? !0 : F, M = r.allowedAutoPlacements, S = e.options.placement, U = Ir(S), N = U === S, z = p || (N || !R ? [Wi(S)] : V4(S)), O = [S].concat(z).reduce(function(k, b) {
      return k.concat(Ir(b) === xs ? $4(e, {
        placement: b,
        boundary: y,
        rootBoundary: C,
        padding: x,
        flipVariations: R,
        allowedAutoPlacements: M
      }) : b);
    }, []), T = e.rects.reference, G = e.rects.popper, J = /* @__PURE__ */ new Map(), Y = !0, X = O[0], se = 0; se < O.length; se++) {
      var D = O[se], u = Ir(D), l = va(D) === ga, o = [Zt, dr].indexOf(u) >= 0, d = o ? "width" : "height", g = ii(e, {
        placement: D,
        boundary: y,
        rootBoundary: C,
        altBoundary: B,
        padding: x
      }), v = o ? l ? lr : Jt : l ? dr : Zt;
      T[d] > G[d] && (v = Wi(v));
      var A = Wi(v), w = [];
      if (i && w.push(g[u] <= 0), c && w.push(g[v] <= 0, g[A] <= 0), w.every(function(k) {
        return k;
      })) {
        X = D, Y = !1;
        break;
      }
      J.set(D, w);
    }
    if (Y)
      for (var h = R ? 3 : 1, m = function(b) {
        var I = O.find(function(L) {
          var P = J.get(L);
          if (P)
            return P.slice(0, b).every(function(H) {
              return H;
            });
        });
        if (I)
          return X = I, "break";
      }, f = h; f > 0; f--) {
        var E = m(f);
        if (E === "break")
          break;
      }
    e.placement !== X && (e.modifiersData[n]._skip = !0, e.placement = X, e.reset = !0);
  }
}
const q4 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: K4,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ef(t, e, r) {
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
function tf(t) {
  return [Zt, lr, dr, Jt].some(function(e) {
    return t[e] >= 0;
  });
}
function X4(t) {
  var e = t.state, r = t.name, n = e.rects.reference, a = e.rects.popper, i = e.modifiersData.preventOverflow, s = ii(e, {
    elementContext: "reference"
  }), c = ii(e, {
    altBoundary: !0
  }), p = ef(s, n), x = ef(c, a, i), y = tf(p), C = tf(x);
  e.modifiersData[r] = {
    referenceClippingOffsets: p,
    popperEscapeOffsets: x,
    isReferenceHidden: y,
    hasPopperEscaped: C
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": y,
    "data-popper-escaped": C
  });
}
const Z4 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: X4
};
function J4(t, e, r) {
  var n = Ir(t), a = [Jt, Zt].indexOf(n) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, e, {
    placement: t
  })) : r, s = i[0], c = i[1];
  return s = s || 0, c = (c || 0) * a, [Jt, lr].indexOf(n) >= 0 ? {
    x: c,
    y: s
  } : {
    x: s,
    y: c
  };
}
function Y4(t) {
  var e = t.state, r = t.options, n = t.name, a = r.offset, i = a === void 0 ? [0, 0] : a, s = Gl.reduce(function(y, C) {
    return y[C] = J4(C, e.rects, i), y;
  }, {}), c = s[e.placement], p = c.x, x = c.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += p, e.modifiersData.popperOffsets.y += x), e.modifiersData[n] = s;
}
const Q4 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Y4
};
function eb(t) {
  var e = t.state, r = t.name;
  e.modifiersData[r] = Jl({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const tb = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: eb,
  data: {}
};
function rb(t) {
  return t === "x" ? "y" : "x";
}
function nb(t) {
  var e = t.state, r = t.options, n = t.name, a = r.mainAxis, i = a === void 0 ? !0 : a, s = r.altAxis, c = s === void 0 ? !1 : s, p = r.boundary, x = r.rootBoundary, y = r.altBoundary, C = r.padding, B = r.tether, F = B === void 0 ? !0 : B, R = r.tetherOffset, M = R === void 0 ? 0 : R, S = ii(e, {
    boundary: p,
    rootBoundary: x,
    padding: C,
    altBoundary: y
  }), U = Ir(e.placement), N = va(e.placement), z = !N, O = h0(U), T = rb(O), G = e.modifiersData.popperOffsets, J = e.rects.reference, Y = e.rects.popper, X = typeof M == "function" ? M(Object.assign({}, e.rects, {
    placement: e.placement
  })) : M, se = typeof X == "number" ? {
    mainAxis: X,
    altAxis: X
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, X), D = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, u = {
    x: 0,
    y: 0
  };
  if (!!G) {
    if (i) {
      var l, o = O === "y" ? Zt : Jt, d = O === "y" ? dr : lr, g = O === "y" ? "height" : "width", v = G[O], A = v + S[o], w = v - S[d], h = F ? -Y[g] / 2 : 0, m = N === ga ? J[g] : Y[g], f = N === ga ? -Y[g] : -J[g], E = e.elements.arrow, k = F && E ? l0(E) : {
        width: 0,
        height: 0
      }, b = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : Kl(), I = b[o], L = b[d], P = Ga(0, J[g], k[g]), H = z ? J[g] / 2 - h - P - I - se.mainAxis : m - P - I - se.mainAxis, $ = z ? -J[g] / 2 + h + P + L + se.mainAxis : f + P + L + se.mainAxis, V = e.elements.arrow && gi(e.elements.arrow), j = V ? O === "y" ? V.clientTop || 0 : V.clientLeft || 0 : 0, le = (l = D == null ? void 0 : D[O]) != null ? l : 0, te = v + H - le - j, q = v + $ - le, xe = Ga(F ? ts(A, te) : A, v, F ? On(w, q) : w);
      G[O] = xe, u[O] = xe - v;
    }
    if (c) {
      var ue, he = O === "x" ? Zt : Jt, Pe = O === "x" ? dr : lr, ye = G[T], be = T === "y" ? "height" : "width", Ue = ye + S[he], _e = ye - S[Pe], re = [Zt, Jt].indexOf(U) !== -1, ve = (ue = D == null ? void 0 : D[T]) != null ? ue : 0, Le = re ? Ue : ye - J[be] - Y[be] - ve + se.altAxis, pe = re ? ye + J[be] + Y[be] - ve - se.altAxis : _e, Te = F && re ? S4(Le, ye, pe) : Ga(F ? Le : Ue, ye, F ? pe : _e);
      G[T] = Te, u[T] = Te - ye;
    }
    e.modifiersData[n] = u;
  }
}
const ab = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: nb,
  requiresIfExists: ["offset"]
};
function ib(t) {
  return {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  };
}
function sb(t) {
  return t === mr(t) || !rr(t) ? u0(t) : ib(t);
}
function ob(t) {
  var e = t.getBoundingClientRect(), r = xa(e.width) / t.offsetWidth || 1, n = xa(e.height) / t.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function cb(t, e, r) {
  r === void 0 && (r = !1);
  var n = rr(e), a = rr(e) && ob(e), i = An(e), s = ya(t, a, r), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, p = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((qr(e) !== "body" || p0(i)) && (c = sb(e)), rr(e) ? (p = ya(e, !0), p.x += e.clientLeft, p.y += e.clientTop) : i && (p.x = m0(i))), {
    x: s.left + c.scrollLeft - p.x,
    y: s.top + c.scrollTop - p.y,
    width: s.width,
    height: s.height
  };
}
function fb(t) {
  var e = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  t.forEach(function(i) {
    e.set(i.name, i);
  });
  function a(i) {
    r.add(i.name);
    var s = [].concat(i.requires || [], i.requiresIfExists || []);
    s.forEach(function(c) {
      if (!r.has(c)) {
        var p = e.get(c);
        p && a(p);
      }
    }), n.push(i);
  }
  return t.forEach(function(i) {
    r.has(i.name) || a(i);
  }), n;
}
function db(t) {
  var e = fb(t);
  return Eo.reduce(function(r, n) {
    return r.concat(e.filter(function(a) {
      return a.phase === n;
    }));
  }, []);
}
function lb(t) {
  var e;
  return function() {
    return e || (e = new Promise(function(r) {
      Promise.resolve().then(function() {
        e = void 0, r(t());
      });
    })), e;
  };
}
function fn(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  return [].concat(r).reduce(function(a, i) {
    return a.replace(/%s/, i);
  }, t);
}
var Mn = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', hb = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', rf = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function ub(t) {
  t.forEach(function(e) {
    [].concat(Object.keys(e), rf).filter(function(r, n, a) {
      return a.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof e.name != "string" && console.error(fn(Mn, String(e.name), '"name"', '"string"', '"' + String(e.name) + '"'));
          break;
        case "enabled":
          typeof e.enabled != "boolean" && console.error(fn(Mn, e.name, '"enabled"', '"boolean"', '"' + String(e.enabled) + '"'));
          break;
        case "phase":
          Eo.indexOf(e.phase) < 0 && console.error(fn(Mn, e.name, '"phase"', "either " + Eo.join(", "), '"' + String(e.phase) + '"'));
          break;
        case "fn":
          typeof e.fn != "function" && console.error(fn(Mn, e.name, '"fn"', '"function"', '"' + String(e.fn) + '"'));
          break;
        case "effect":
          e.effect != null && typeof e.effect != "function" && console.error(fn(Mn, e.name, '"effect"', '"function"', '"' + String(e.fn) + '"'));
          break;
        case "requires":
          e.requires != null && !Array.isArray(e.requires) && console.error(fn(Mn, e.name, '"requires"', '"array"', '"' + String(e.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(e.requiresIfExists) || console.error(fn(Mn, e.name, '"requiresIfExists"', '"array"', '"' + String(e.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + e.name + '" modifier, valid properties are ' + rf.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      e.requires && e.requires.forEach(function(n) {
        t.find(function(a) {
          return a.name === n;
        }) == null && console.error(fn(hb, String(e.name), n, n));
      });
    });
  });
}
function mb(t, e) {
  var r = /* @__PURE__ */ new Set();
  return t.filter(function(n) {
    var a = e(n);
    if (!r.has(a))
      return r.add(a), !0;
  });
}
function pb(t) {
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
var nf = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", bb = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", af = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function sf() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return !e.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function gb(t) {
  t === void 0 && (t = {});
  var e = t, r = e.defaultModifiers, n = r === void 0 ? [] : r, a = e.defaultOptions, i = a === void 0 ? af : a;
  return function(c, p, x) {
    x === void 0 && (x = i);
    var y = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, af, i),
      modifiersData: {},
      elements: {
        reference: c,
        popper: p
      },
      attributes: {},
      styles: {}
    }, C = [], B = !1, F = {
      state: y,
      setOptions: function(U) {
        var N = typeof U == "function" ? U(y.options) : U;
        M(), y.options = Object.assign({}, i, y.options, N), y.scrollParents = {
          reference: $n(c) ? $a(c) : c.contextElement ? $a(c.contextElement) : [],
          popper: $a(p)
        };
        var z = db(pb([].concat(n, y.options.modifiers)));
        if (y.orderedModifiers = z.filter(function(D) {
          return D.enabled;
        }), process.env.NODE_ENV !== "production") {
          var O = mb([].concat(z, y.options.modifiers), function(D) {
            var u = D.name;
            return u;
          });
          if (ub(O), Ir(y.options.placement) === xs) {
            var T = y.orderedModifiers.find(function(D) {
              var u = D.name;
              return u === "flip";
            });
            T || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var G = Sr(p), J = G.marginTop, Y = G.marginRight, X = G.marginBottom, se = G.marginLeft;
          [J, Y, X, se].some(function(D) {
            return parseFloat(D);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return R(), F.update();
      },
      forceUpdate: function() {
        if (!B) {
          var U = y.elements, N = U.reference, z = U.popper;
          if (!sf(N, z)) {
            process.env.NODE_ENV !== "production" && console.error(nf);
            return;
          }
          y.rects = {
            reference: cb(N, gi(z), y.options.strategy === "fixed"),
            popper: l0(z)
          }, y.reset = !1, y.placement = y.options.placement, y.orderedModifiers.forEach(function(D) {
            return y.modifiersData[D.name] = Object.assign({}, D.data);
          });
          for (var O = 0, T = 0; T < y.orderedModifiers.length; T++) {
            if (process.env.NODE_ENV !== "production" && (O += 1, O > 100)) {
              console.error(bb);
              break;
            }
            if (y.reset === !0) {
              y.reset = !1, T = -1;
              continue;
            }
            var G = y.orderedModifiers[T], J = G.fn, Y = G.options, X = Y === void 0 ? {} : Y, se = G.name;
            typeof J == "function" && (y = J({
              state: y,
              options: X,
              name: se,
              instance: F
            }) || y);
          }
        }
      },
      update: lb(function() {
        return new Promise(function(S) {
          F.forceUpdate(), S(y);
        });
      }),
      destroy: function() {
        M(), B = !0;
      }
    };
    if (!sf(c, p))
      return process.env.NODE_ENV !== "production" && console.error(nf), F;
    F.setOptions(x).then(function(S) {
      !B && x.onFirstUpdate && x.onFirstUpdate(S);
    });
    function R() {
      y.orderedModifiers.forEach(function(S) {
        var U = S.name, N = S.options, z = N === void 0 ? {} : N, O = S.effect;
        if (typeof O == "function") {
          var T = O({
            state: y,
            name: U,
            instance: F,
            options: z
          }), G = function() {
          };
          C.push(T || G);
        }
      });
    }
    function M() {
      C.forEach(function(S) {
        return S();
      }), C = [];
    }
    return F;
  };
}
var xb = [N4, tb, U4, C4, Q4, q4, ab, R4, Z4], yb = /* @__PURE__ */ gb({
  defaultModifiers: xb
}), vb = typeof Element < "u", wb = typeof Map == "function", Ab = typeof Set == "function", Eb = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Hi(t, e) {
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
        if (!Hi(t[n], e[n]))
          return !1;
      return !0;
    }
    var i;
    if (wb && t instanceof Map && e instanceof Map) {
      if (t.size !== e.size)
        return !1;
      for (i = t.entries(); !(n = i.next()).done; )
        if (!e.has(n.value[0]))
          return !1;
      for (i = t.entries(); !(n = i.next()).done; )
        if (!Hi(n.value[1], e.get(n.value[0])))
          return !1;
      return !0;
    }
    if (Ab && t instanceof Set && e instanceof Set) {
      if (t.size !== e.size)
        return !1;
      for (i = t.entries(); !(n = i.next()).done; )
        if (!e.has(n.value[0]))
          return !1;
      return !0;
    }
    if (Eb && ArrayBuffer.isView(t) && ArrayBuffer.isView(e)) {
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
    if (vb && t instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((a[n] === "_owner" || a[n] === "__v" || a[n] === "__o") && t.$$typeof) && !Hi(t[a[n]], e[a[n]]))
        return !1;
    return !0;
  }
  return t !== t && e !== e;
}
var Cb = function(e, r) {
  try {
    return Hi(e, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
}, Ib = [], kb = function(e, r, n) {
  n === void 0 && (n = {});
  var a = ae.useRef(null), i = {
    onFirstUpdate: n.onFirstUpdate,
    placement: n.placement || "bottom",
    strategy: n.strategy || "absolute",
    modifiers: n.modifiers || Ib
  }, s = ae.useState({
    styles: {
      popper: {
        position: i.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), c = s[0], p = s[1], x = ae.useMemo(function() {
    return {
      name: "updateState",
      enabled: !0,
      phase: "write",
      fn: function(F) {
        var R = F.state, M = Object.keys(R.elements);
        u1.flushSync(function() {
          p({
            styles: Kc(M.map(function(S) {
              return [S, R.styles[S] || {}];
            })),
            attributes: Kc(M.map(function(S) {
              return [S, R.attributes[S]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []), y = ae.useMemo(function() {
    var B = {
      onFirstUpdate: i.onFirstUpdate,
      placement: i.placement,
      strategy: i.strategy,
      modifiers: [].concat(i.modifiers, [x, {
        name: "applyStyles",
        enabled: !1
      }])
    };
    return Cb(a.current, B) ? a.current || B : (a.current = B, B);
  }, [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, x]), C = ae.useRef();
  return qc(function() {
    C.current && C.current.setOptions(y);
  }, [y]), qc(function() {
    if (!(e == null || r == null)) {
      var B = n.createPopper || yb, F = B(e, r, y);
      return C.current = F, function() {
        F.destroy(), C.current = null;
      };
    }
  }, [e, r, n.createPopper]), {
    state: C.current ? C.current.state : null,
    styles: c.styles,
    attributes: c.attributes,
    update: C.current ? C.current.update : null,
    forceUpdate: C.current ? C.current.forceUpdate : null
  };
};
function Sb(t, e, r = !0) {
  const n = Er();
  Ft(() => {
    n.current = t;
  }, [t]), Ft(() => {
    function a() {
      const i = n.current;
      i && i();
    }
    if (e !== null) {
      r && a();
      const i = setInterval(a, e);
      return () => clearInterval(i);
    }
  }, [e, r]);
}
const Db = ee.div`
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
`, Bb = ee.div`
  display: inline-block;
`, Fb = ee.div`
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
function Rb({
  content: t,
  show: e,
  children: r,
  placement: n = "auto",
  noArrow: a = !1
}) {
  var M, S;
  const [i, s] = Ne(null), [c, p] = Ne(null), [x, y] = Ne(null), {
    styles: C,
    update: B,
    attributes: F
  } = kb(i, c, {
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
        element: x
      }
    }]
  }), R = xn(() => {
    B && B();
  }, [B]);
  return Sb(R, e ? 100 : null), /* @__PURE__ */ Q(Cr, {
    children: [/* @__PURE__ */ W(Bb, {
      ref: s,
      children: r
    }), /* @__PURE__ */ W(Hl, {
      children: /* @__PURE__ */ Q(Db, {
        show: e,
        ref: p,
        style: C.popper,
        ...F.popper,
        children: [t, a || /* @__PURE__ */ W(Fb, {
          className: `arrow-${(S = (M = F.popper) == null ? void 0 : M["data-popper-placement"]) != null ? S : ""}`,
          ref: y,
          style: C.arrow,
          ...F.arrow
        })]
      })
    })]
  });
}
const Mb = ee.div`
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
function _b({
  text: t,
  width: e,
  size: r,
  ...n
}) {
  return /* @__PURE__ */ W(Rb, {
    content: t ? /* @__PURE__ */ W(Mb, {
      width: e,
      size: r,
      children: t
    }) : null,
    ...n
  });
}
const Tb = ee.div`
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
`, Ub = ee.span`
  display: inline-flex;
  justify-content: center;
  margin-left: 0.25rem;
  align-items: center;
  line-height: 100%;
  vertical-align: middle;
`;
function en({
  text: t,
  size: e = 14,
  placement: r,
  style: n,
  color: a
}) {
  const [i, s] = Ne(!1), c = xn(() => s(!0), [s]), p = xn(() => s(!1), [s]);
  return /* @__PURE__ */ W(Ub, {
    style: n,
    children: /* @__PURE__ */ W(_b, {
      text: t,
      show: i,
      placement: r,
      size: e,
      children: /* @__PURE__ */ W(Tb, {
        onClick: c,
        onMouseEnter: c,
        onMouseLeave: p,
        children: /* @__PURE__ */ W(Wl, {
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
const $s = ee.div`
  font-size: 0.75rem;
  text-align: left;
`, Pb = ee.input`
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
`, Nb = ee.div`
  border-radius: 999px;
  margin-top: 8px;
  background: ${({
  theme: t
}) => t.secondary};
  padding: 2px;
  display: flex;
`, _a = ee.div`
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
`, of = ee.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`, Ob = ee.div`
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
`, Lb = 1e4, jb = 2e3, Yl = (t) => Math.round(Number.parseFloat(t) * 100), Wb = (t) => {
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
  const r = Yl(t);
  return Number.isNaN(r) ? {
    isValid: !1,
    message: "Enter a valid slippage percentage"
  } : r < 0 ? {
    isValid: !1,
    message: "Enter a valid slippage percentage"
  } : r < 50 ? {
    isValid: !0,
    message: "Your transaction may fail"
  } : r > jb ? {
    isValid: !1,
    message: "Enter a smaller slippage percentage"
  } : r > 500 ? {
    isValid: !0,
    message: "Your transaction may be frontrun"
  } : {
    isValid: !0
  };
};
function Hb({
  slippage: t,
  setSlippage: e,
  deadline: r,
  setDeadline: n,
  allDexes: a,
  excludedDexes: i,
  onShowSource: s
}) {
  const [c, p] = Ne(() => [5, 10, 50, 100].includes(t) ? "" : (t * 100 / Lb).toString()), x = oi(), [y, C] = Ne(!1), {
    isValid: B,
    message: F
  } = Wb(c);
  return /* @__PURE__ */ Q(Cr, {
    children: [/* @__PURE__ */ Q("div", {
      children: [/* @__PURE__ */ Q($s, {
        children: ["Max Slippage", /* @__PURE__ */ W(en, {
          color: x.text,
          text: "Transaction will revert if there is an adverse rate change that is higher than this %"
        })]
      }), /* @__PURE__ */ Q(Nb, {
        children: [/* @__PURE__ */ W(_a, {
          isActive: t === 5,
          onClick: () => e(5),
          children: "0.05%"
        }), /* @__PURE__ */ W(_a, {
          isActive: t === 10,
          onClick: () => e(10),
          children: "0.1%"
        }), /* @__PURE__ */ W(_a, {
          isActive: t === 50,
          onClick: () => e(50),
          children: "0.5%"
        }), /* @__PURE__ */ W(_a, {
          isActive: t === 100,
          onClick: () => e(100),
          children: "1%"
        }), /* @__PURE__ */ Q(_a, {
          isActive: ![5, 10, 50, 100].includes(t),
          style: {
            flex: 3,
            background: y ? x.dialog : void 0,
            border: F ? B ? `1px solid ${x.warning}` : `1px solid ${x.error}` : void 0
          },
          children: [F && /* @__PURE__ */ W(Uf, {
            style: {
              position: "absolute",
              top: 2,
              left: 4,
              width: 20,
              height: 20,
              color: B ? x.warning : x.error
            }
          }), /* @__PURE__ */ W(Pb, {
            isActive: ![5, 10, 50, 100].includes(t),
            placeholder: "Custom",
            onFocus: () => C(!0),
            onBlur: () => {
              C(!1), B && e(Yl(c));
            },
            value: c,
            onChange: (R) => p(R.target.value)
          }), /* @__PURE__ */ W("span", {
            children: "%"
          })]
        })]
      }), F && /* @__PURE__ */ W("div", {
        style: {
          fontSize: "12px",
          color: B ? x.warning : x.error,
          textAlign: "left",
          marginTop: "4px"
        },
        children: F
      })]
    }), /* @__PURE__ */ Q(of, {
      children: [/* @__PURE__ */ Q($s, {
        children: ["Transaction Time Limit", /* @__PURE__ */ W(en, {
          color: x.text,
          text: "Transaction will revert if it is pending for longer than the indicated time"
        })]
      }), /* @__PURE__ */ Q(Ob, {
        children: [/* @__PURE__ */ W("input", {
          maxLength: 5,
          placeholder: "20",
          value: r ? r.toString() : "",
          style: {
            fontSize: "12px"
          },
          onChange: (R) => {
            const M = +R.target.value.trim().replace(/[^0-9.]/g, "").replace(/(\..*?)\..*/g, "$1").replace(/^0[^.]/, "0");
            n(M);
          }
        }), /* @__PURE__ */ W("span", {
          style: {
            color: x.subText
          },
          children: "mins"
        })]
      })]
    }), /* @__PURE__ */ Q(of, {
      children: [/* @__PURE__ */ Q($s, {
        children: ["Liquidity Sources", /* @__PURE__ */ W(en, {
          color: x.text,
          text: "Your trade is routed through one or more of these liquidity sources"
        })]
      }), /* @__PURE__ */ Q("div", {
        role: "button",
        onClick: s,
        style: {
          alignItems: "center",
          display: "flex",
          fontSize: 12,
          fontWeight: 500,
          gap: 4,
          cursor: "pointer"
        },
        children: [a.length - i.length || a.length, " out of ", a.length, " selected", /* @__PURE__ */ W(Tf, {
          style: {
            transform: "rotate(-180deg)",
            width: "16px",
            color: x.subText
          }
        })]
      })]
    })]
  });
}
const zb = Uo`
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`, Gb = ee.svg`
  ${({
  spinning: t
}) => t ? rs`
          animation-name: ${zb};
          animation-duration: 696ms;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        ` : ""}
`, $b = ({
  spinning: t,
  countdown: e
}) => {
  const r = oi();
  return /* @__PURE__ */ Q(Gb, {
    spinning: t,
    id: "arrow_loading",
    xmlns: "http://www.w3.org/2000/svg",
    color: r.accent,
    viewBox: "2 2 20 20",
    width: "32",
    height: "32",
    children: [/* @__PURE__ */ W("path", {
      stroke: "none",
      fill: r.accent + "66",
      d: "M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z"
    }), /* @__PURE__ */ Q("defs", {
      children: [/* @__PURE__ */ W("path", {
        id: "arrow",
        stroke: "none",
        fill: "none",
        d: "M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z"
      }), /* @__PURE__ */ W("clipPath", {
        id: "arrow-clip",
        children: /* @__PURE__ */ W("use", {
          xlinkHref: "#arrow"
        })
      })]
    }), /* @__PURE__ */ W("g", {
      clipPath: "url(#arrow-clip)",
      children: /* @__PURE__ */ W("circle", {
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
}, Vb = ee.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`, Kb = ee.div`
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
function qb({
  trade: t,
  onRefresh: e,
  loading: r
}) {
  const [n, a] = Ne(0);
  return Ft(() => {
    a(!r && !!t ? 1e4 : 0);
  }, [r, t]), Ft(() => {
    if (n > 0) {
      const i = setInterval(() => {
        const s = n - 10;
        a(s), s === 10 && e();
      }, 10);
      return () => {
        clearInterval(i);
      };
    }
  }, [n, e]), /* @__PURE__ */ Q(Vb, {
    role: "button",
    onClick: e,
    children: [/* @__PURE__ */ W($b, {
      spinning: r,
      countdown: n
    }), !!n && !r && /* @__PURE__ */ W(Kb, {
      children: (n / 1e3).toFixed()
    })]
  });
}
const Vs = (t) => /* @__PURE__ */ ae.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ ae.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.0714 3.15544L13.6916 9.28884C14.582 10.7999 13.4384 12.6667 11.6193 12.6667H4.38002C2.5621 12.6667 1.41736 10.801 2.30892 9.28998L5.92915 3.15659C6.83631 1.61466 9.1618 1.61466 10.0714 3.15544Z", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ ae.createElement("path", { d: "M7.99992 7.33333V5.33333", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ ae.createElement("path", { d: "M7.99926 9.88C7.9326 9.88 7.87926 9.93467 7.8806 10C7.8806 10.0667 7.93526 10.12 8.0006 10.12C8.06593 10.12 8.11926 10.0653 8.11926 10C8.11926 9.93467 8.06593 9.88 7.99926 9.88", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })), ko = (t) => /* @__PURE__ */ ae.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "SwapSettingsPanel__BackIconWrapper-sc-riij1g-0 LgspM", ...t }, /* @__PURE__ */ ae.createElement("line", { x1: 19, y1: 12, x2: 5, y2: 12 }), /* @__PURE__ */ ae.createElement("polyline", { points: "12 19 5 12 12 5" })), So = (t) => /* @__PURE__ */ ae.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ ae.createElement("g", { clipPath: "url(#clip0_1393_3583)" }, /* @__PURE__ */ ae.createElement("path", { d: "M12 12.6667H4C3.63333 12.6667 3.33333 12.3667 3.33333 12V4C3.33333 3.63333 3.63333 3.33333 4 3.33333H7.33333C7.7 3.33333 8 3.03333 8 2.66667C8 2.3 7.7 2 7.33333 2H3.33333C2.59333 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V8.66667C14 8.3 13.7 8 13.3333 8C12.9667 8 12.6667 8.3 12.6667 8.66667V12C12.6667 12.3667 12.3667 12.6667 12 12.6667ZM9.33333 2.66667C9.33333 3.03333 9.63333 3.33333 10 3.33333H11.7267L5.64 9.42C5.38 9.68 5.38 10.1 5.64 10.36C5.9 10.62 6.32 10.62 6.58 10.36L12.6667 4.27333V6C12.6667 6.36667 12.9667 6.66667 13.3333 6.66667C13.7 6.66667 14 6.36667 14 6V2.66667C14 2.3 13.7 2 13.3333 2H10C9.63333 2 9.33333 2.3 9.33333 2.66667Z", fill: "currentColor" })), /* @__PURE__ */ ae.createElement("defs", null, /* @__PURE__ */ ae.createElement("clipPath", { id: "clip0_1393_3583" }, /* @__PURE__ */ ae.createElement("rect", { width: 16, height: 16, fill: "currentColor" })))), Ql = (t) => /* @__PURE__ */ ae.createElement("svg", { width: 92, height: 92, viewBox: "0 0 92 92", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ ae.createElement("circle", { cx: 46.5111, cy: 46.5111, r: 37.3333, stroke: "currentColor", strokeWidth: 2 }), /* @__PURE__ */ ae.createElement("path", { d: "M25.0483 46.1748L39.5042 60.8219L67.5898 32.7832", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" })), e1 = (t) => /* @__PURE__ */ ae.createElement("svg", { width: 92, height: 92, viewBox: "0 0 92 92", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ ae.createElement("path", { d: "M40.4664 14.797L7.99811 69.0003C7.32869 70.1596 6.97448 71.4739 6.97073 72.8126C6.96698 74.1513 7.31382 75.4676 7.97674 76.6306C8.63966 77.7937 9.59556 78.7628 10.7493 79.4417C11.9031 80.1206 13.2145 80.4856 14.5531 80.5003H79.4898C80.8284 80.4856 82.1398 80.1206 83.2936 79.4417C84.4473 78.7628 85.4032 77.7937 86.0661 76.6306C86.7291 75.4676 87.0759 74.1513 87.0722 72.8126C87.0684 71.4739 86.7142 70.1596 86.0448 69.0003L53.5764 14.797C52.8931 13.6704 51.9309 12.7389 50.7827 12.0925C49.6345 11.446 48.3391 11.1064 47.0214 11.1064C45.7038 11.1064 44.4084 11.446 43.2602 12.0925C42.112 12.7389 41.1498 13.6704 40.4664 14.797V14.797Z", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ ae.createElement("path", { d: "M47.0225 34.5V49.8333", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ ae.createElement("path", { d: "M47.0225 65.1665H47.06", stroke: "currentColor", strokeWidth: 4, strokeLinecap: "round", strokeLinejoin: "round" })), Xb = [
  "user rejected transaction",
  "User declined to send the transaction",
  "user denied transaction",
  "you must accept"
].map((t) => t.toLowerCase());
function Zb(t) {
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
  ].map(String).includes(e) || Xb.some((a) => {
    var i;
    return (i = e == null ? void 0 : e.includes) == null ? void 0 : i.call(e, a);
  });
}
function Jb(t) {
  const e = t || "";
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Yb(t) {
  var r;
  const e = ((r = t == null ? void 0 : t.toLowerCase) == null ? void 0 : r.call(t)) || "";
  if (!e || e.includes("router: expired"))
    return "An error occurred. Refresh the page and try again ";
  if (e.includes("mintotalamountout") || e.includes("err_limit_out") || e.includes("return amount is not enough") || e.includes("code=call_exception") || e.includes("none of the calls threw an error"))
    return "An error occurred. Try refreshing the price rate or increase max slippage";
  if (e.includes("header not found") || e.includes("swap failed"))
    return "An error occurred. Refresh the page and try again. If the issue still persists, it might be an issue with your RPC node settings in Metamask.";
  if (Zb(e))
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
const Qb = [
  {
    pattern: /{"originalError":.+"message":"execution reverted: ([^"]+)"/,
    getMessage: (t) => t[1]
  },
  { pattern: /^([\w ]*\w+) \(.+?\)$/, getMessage: (t) => t[1] },
  { pattern: /"message": ?"[^"]+?"/, getMessage: (t) => t[1] }
];
function e8(t) {
  const e = Qb.find((r) => r.pattern.exec(t));
  if (e)
    return Jb(e.getMessage(e.pattern.exec(t)));
}
function t8(t) {
  const e = typeof t == "string" ? t : t.message, r = Yb(e);
  if (r)
    return r;
  if (e.length < 100)
    return e;
  const n = e8(e);
  return n || "An error occurred";
}
const r8 = ee(Ql)`
  color: ${({
  theme: t
}) => t.success};
`, cf = ee(e1)`
  color: ${({
  theme: t
}) => t.error};
`, n8 = ee(ko)`
  color: ${({
  theme: t
}) => t.subText};
  transform: rotate(-90deg);
`, ff = ee.div`
  display: flex;
  font-size: 1.5rem;
  gap: 0.5rem;
  align-items: center;
  font-weight: 500;

  img {
    border-radius: 50%;
  }
`, a8 = ee.div`
  color: ${({
  theme: t
}) => t.subText};
  font-size: 0.75rem;
  text-align: left;
`, Do = ee.div`
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
`, i8 = ee(Do)`
  background: ${({
  theme: t
}) => t.error + "40"};
  color: ${({
  theme: t
}) => t.error};
`, df = ee.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`, s8 = Uo`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, o8 = ee(Sl)`
  animation: 2s ${s8} linear infinite;
  width: 94px;
  height: 94px;
  color: ${({
  theme: t
}) => t.accent};
`, lf = ee.a`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${({
  theme: t
}) => t.accent};
  font-size: 14px;
  gap: 4px;
`, Si = ee.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid ${({
  theme: t
}) => t.stroke};
`, Ta = ee.div`
  font-size: 1rem;
  font-weight: 500;
`, c8 = ee.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  gap: 6px;
  img {
    border-radius: 50%;
  }
`, hf = ee.div`
  font-size: 12px;
  color: ${({
  theme: t
}) => t.subText};
  margin-top: 12px;
`, f8 = ee.div`
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
`, d8 = ee.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
`, l8 = ee(no)`
  transform: rotate(${({
  open: t
}) => t ? "-180deg" : "0"});
  transition: all 0.2s ease;
`;
function Ks(t) {
  const e = de.from(2e4), r = t.mul(de.from(2e3)).div(de.from(1e4));
  return r.gte(e) ? t.add(r) : t.add(e);
}
function h8({
  trade: t,
  tokenInInfo: e,
  amountIn: r,
  tokenOutInfo: n,
  amountOut: a,
  rate: i,
  slippage: s,
  priceImpact: c,
  onClose: p,
  deadline: x,
  client: y,
  onTxSubmit: C
}) {
  var v;
  const B = oi(), {
    provider: F,
    account: R,
    chainId: M
  } = $t();
  let S = "--";
  const U = t.routeSummary.tokenIn.toLowerCase() === pt.toLowerCase() && t.routeSummary.tokenOut.toLowerCase() === Nn[M].address.toLowerCase(), N = t.routeSummary.tokenOut.toLowerCase() === pt.toLowerCase() && t.routeSummary.tokenIn.toLowerCase() === Nn[M].address.toLowerCase();
  a && !U && !N && (S = (Number(a) * (1 - s / 1e4)).toPrecision(8).toString());
  const [z, O] = Ne(!1), [T, G] = Ne(""), [J, Y] = Ne(""), [X, se] = Ne(""), [D, u] = Ne(!1);
  Ft(() => {
    if (T) {
      const A = setInterval(() => {
        F == null || F.getTransactionReceipt(T).then((w) => {
          !w || (w.status ? Y("success") : Y("failed"));
        });
      }, 1e4);
      return () => {
        clearInterval(A);
      };
    }
  }, [T, F]);
  const [l, o] = Ne(null), d = T6(), g = async () => {
    o({
      amountIn: r,
      amountOut: a
    });
    try {
      if (O(!0), G(""), se(""), U) {
        if (!d)
          return;
        const E = await d.estimateGas.deposit({
          value: de.from(t.routeSummary.amountIn).toHexString()
        }), k = await d.deposit({
          value: de.from(t.routeSummary.amountIn).toHexString(),
          gasLimit: Ks(E)
        });
        G((k == null ? void 0 : k.hash) || ""), C == null || C((k == null ? void 0 : k.hash) || "", k), O(!1);
        return;
      }
      if (N) {
        if (!d)
          return;
        const E = await d.estimateGas.withdraw(de.from(t.routeSummary.amountIn).toHexString()), k = await d.withdraw(de.from(t.routeSummary.amountIn).toHexString(), {
          gasLimit: Ks(E)
        });
        G((k == null ? void 0 : k.hash) || ""), C == null || C((k == null ? void 0 : k.hash) || "", k), O(!1);
        return;
      }
      const A = new Date();
      A.setMinutes(A.getMinutes() + (x || 20));
      const w = await fetch(`https://aggregator-api.kyberswap.com/${a0[M]}/api/v1/route/build`, {
        method: "POST",
        body: JSON.stringify({
          routeSummary: t.routeSummary,
          deadline: Math.floor(A.getTime() / 1e3),
          slippageTolerance: s,
          sender: R,
          recipient: R,
          source: y
        })
      }).then((E) => E.json());
      if (!w.data)
        throw new Error("Build route failed: " + JSON.stringify(w.details));
      const h = {
        from: R,
        to: t == null ? void 0 : t.routerAddress,
        data: w.data.data,
        value: de.from(e.address === pt ? t == null ? void 0 : t.routeSummary.amountIn : 0)
      }, m = await (F == null ? void 0 : F.estimateGas(h)), f = await (F == null ? void 0 : F.getSigner().sendTransaction({
        ...h,
        gasLimit: Ks(m || de.from(0))
      }));
      G((f == null ? void 0 : f.hash) || ""), C == null || C((f == null ? void 0 : f.hash) || "", f), O(!1);
    } catch (A) {
      O(!1), se(A);
    }
  };
  return z || T ? /* @__PURE__ */ Q(Cr, {
    children: [/* @__PURE__ */ Q(df, {
      children: [J === "success" ? /* @__PURE__ */ W(r8, {}) : J === "failed" ? /* @__PURE__ */ W(cf, {}) : /* @__PURE__ */ W(o8, {}), T ? J === "success" ? /* @__PURE__ */ W(Ta, {
        children: "Transaction successful"
      }) : J === "failed" ? /* @__PURE__ */ W(Ta, {
        children: "Transaction failed"
      }) : /* @__PURE__ */ W(Ta, {
        children: "Processing transaction"
      }) : /* @__PURE__ */ W(Ta, {
        children: "Waiting For Confirmation"
      }), /* @__PURE__ */ Q(c8, {
        children: [/* @__PURE__ */ W("img", {
          src: e.logoURI,
          width: "16",
          height: "16",
          alt: ""
        }), +Number(l == null ? void 0 : l.amountIn).toPrecision(6), /* @__PURE__ */ W(ko, {
          style: {
            width: 16,
            transform: "rotate(180deg)"
          }
        }), /* @__PURE__ */ W("img", {
          src: n.logoURI,
          width: "16",
          height: "16",
          alt: ""
        }), +Number(l == null ? void 0 : l.amountOut).toPrecision(6)]
      }), !T && /* @__PURE__ */ W(hf, {
        children: "Confirm this transaction in your wallet"
      }), T && J === "" && /* @__PURE__ */ W(hf, {
        children: "Waiting for the transaction to be mined"
      })]
    }), /* @__PURE__ */ W(Si, {}), T && /* @__PURE__ */ Q(lf, {
      href: `${ri[M]}/tx/${T}`,
      target: "_blank",
      rel: "noopener norefferer",
      children: ["View transaction ", /* @__PURE__ */ W(So, {})]
    }), /* @__PURE__ */ W(aa, {
      style: {
        marginTop: 0
      },
      onClick: p,
      children: "Close"
    })]
  }) : X ? /* @__PURE__ */ Q(Cr, {
    children: [/* @__PURE__ */ Q(df, {
      children: [/* @__PURE__ */ W(cf, {}), /* @__PURE__ */ W(Ta, {
        children: t8(X)
      })]
    }), /* @__PURE__ */ Q("div", {
      children: [/* @__PURE__ */ W(Si, {}), /* @__PURE__ */ Q(d8, {
        role: "button",
        onClick: () => u((A) => !A),
        children: [/* @__PURE__ */ Q("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontSize: "14px"
          },
          children: [/* @__PURE__ */ W(Wl, {}), "Error details"]
        }), /* @__PURE__ */ W(l8, {
          open: D
        })]
      }), /* @__PURE__ */ W(Si, {}), /* @__PURE__ */ W(f8, {
        show: D,
        children: ((v = X == null ? void 0 : X.data) == null ? void 0 : v.message) || (X == null ? void 0 : X.message)
      })]
    }), D && /* @__PURE__ */ W(Si, {}), T && /* @__PURE__ */ Q(lf, {
      children: ["View transaction ", /* @__PURE__ */ W(So, {})]
    }), /* @__PURE__ */ W(aa, {
      style: {
        marginTop: 0
      },
      onClick: p,
      children: X ? "Dismiss" : "Close"
    })]
  }) : /* @__PURE__ */ Q(Cr, {
    children: [/* @__PURE__ */ W(Nf, {
      children: /* @__PURE__ */ Q(Of, {
        onClick: p,
        role: "button",
        children: [/* @__PURE__ */ W(ko, {}), "Confirm swap"]
      })
    }), /* @__PURE__ */ Q(ff, {
      children: [/* @__PURE__ */ W("img", {
        src: e.logoURI,
        width: "28",
        alt: "",
        height: "28",
        onError: ({
          currentTarget: A
        }) => {
          A.onerror = null, A.src = new URL("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iQ3VycmVuY3lMb2dvX19TdHlsZWRMb2dvLXNjLTFxODJydWEtMSBncHhsS2EiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIj48L2NpcmNsZT48cGF0aCBkPSJNOS4wOSA5YTMgMyAwIDAgMSA1LjgzIDFjMCAyLTMgMy0zIDMiPjwvcGF0aD48bGluZSB4MT0iMTIiIHkxPSIxNyIgeDI9IjEyLjAxIiB5Mj0iMTciPjwvbGluZT48L3N2Zz4K", self.location).href;
        }
      }), +Number(r).toPrecision(10), /* @__PURE__ */ W("div", {
        children: e.symbol
      })]
    }), /* @__PURE__ */ W(n8, {}), /* @__PURE__ */ Q(ff, {
      children: [/* @__PURE__ */ W("img", {
        alt: "",
        src: n.logoURI,
        width: "28",
        height: "28",
        onError: ({
          currentTarget: A
        }) => {
          A.onerror = null, A.src = new URL("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iQ3VycmVuY3lMb2dvX19TdHlsZWRMb2dvLXNjLTFxODJydWEtMSBncHhsS2EiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIj48L2NpcmNsZT48cGF0aCBkPSJNOS4wOSA5YTMgMyAwIDAgMSA1LjgzIDFjMCAyLTMgMy0zIDMiPjwvcGF0aD48bGluZSB4MT0iMTIiIHkxPSIxNyIgeDI9IjEyLjAxIiB5Mj0iMTciPjwvbGluZT48L3N2Zz4K", self.location).href;
        }
      }), +Number(a).toPrecision(10), /* @__PURE__ */ W("div", {
        children: n.symbol
      })]
    }), U || N ? null : /* @__PURE__ */ Q(a8, {
      children: ["Output is estimated. You will receive at least ", S, " ", n.symbol, " or the transaction will revert."]
    }), /* @__PURE__ */ Q(Pf, {
      children: [/* @__PURE__ */ Q(dn, {
        children: [/* @__PURE__ */ W(ln, {
          children: "Current Price"
        }), /* @__PURE__ */ Q(Jr, {
          children: ["1 ", e.symbol, " = ", parseFloat(i.toPrecision(6)), " ", n.symbol]
        })]
      }), /* @__PURE__ */ Q(dn, {
        children: [/* @__PURE__ */ Q(ln, {
          children: ["Minimum Received", /* @__PURE__ */ W(en, {
            text: "Minimum amount you will receive or your transaction will revert"
          })]
        }), /* @__PURE__ */ Q(Jr, {
          children: [S, " ", S === "--" ? "" : n.symbol]
        })]
      }), /* @__PURE__ */ Q(dn, {
        children: [/* @__PURE__ */ Q(ln, {
          children: ["Gas Fee", /* @__PURE__ */ W(en, {
            text: "Estimated network fee for your transaction"
          })]
        }), U || N ? /* @__PURE__ */ W(Jr, {
          children: "--"
        }) : /* @__PURE__ */ Q(Jr, {
          children: ["$", (+t.routeSummary.gasUsd).toPrecision(4)]
        })]
      }), /* @__PURE__ */ Q(dn, {
        children: [/* @__PURE__ */ Q(ln, {
          children: ["Price Impact", /* @__PURE__ */ W(en, {
            text: "Estimated change in price due to the size of your transaction"
          })]
        }), /* @__PURE__ */ W(Jr, {
          style: {
            color: c > 15 ? B.error : c > 5 ? B.warning : B.text
          },
          children: c === -1 ? "--" : c > 0.01 ? c.toFixed(3) + "%" : "< 0.01%"
        })]
      }), /* @__PURE__ */ Q(dn, {
        children: [/* @__PURE__ */ W(ln, {
          children: "Slippage"
        }), /* @__PURE__ */ Q(Jr, {
          children: [s * 100 / 1e4, "%"]
        })]
      })]
    }), /* @__PURE__ */ Q("div", {
      style: {
        marginTop: "auto"
      },
      children: [U || N ? null : c > 15 ? /* @__PURE__ */ Q(i8, {
        children: [/* @__PURE__ */ W(Vs, {}), " Price Impact is Very High"]
      }) : c > 5 ? /* @__PURE__ */ Q(Do, {
        children: [/* @__PURE__ */ W(Vs, {}), " Price Impact is High"]
      }) : c === -1 ? /* @__PURE__ */ Q(Do, {
        children: [/* @__PURE__ */ W(Vs, {}), "Unable to calculate Price Impact"]
      }) : null, /* @__PURE__ */ Q(aa, {
        onClick: g,
        children: ["Confirm ", U ? "wrap" : N ? "unwrap" : "swap"]
      })]
    })]
  });
}
const u8 = ee.div`
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
`, Bo = ee.input`
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
`, m8 = ee.div`
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
`, p8 = ee.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  column-gap: 16px;
  padding: 12px;
`, b8 = ee.div`
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;

  img {
    width: 100%;
    height: auto;
  }
`, g8 = ee.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${({
  theme: t
}) => t.text};
`;
function x8({
  allDexes: t,
  excludedDexes: e,
  setExcludedDexes: r
}) {
  const [n, a] = Ne(""), i = e.map((c) => c.dexId), s = Er(null);
  return Ft(() => {
    !s.current || (e.length === 0 ? (s.current.indeterminate = !1, s.current.checked = !0) : e.length === t.length ? (s.current.indeterminate = !1, s.current.checked = !1) : (s.current.indeterminate = !0, s.current.checked = !1));
  }, [t.length, e.length]), /* @__PURE__ */ Q(Cr, {
    children: [/* @__PURE__ */ W(Bl, {
      placeholder: "Search for a liquidity source",
      value: n,
      onChange: (c) => a(c.target.value)
    }), /* @__PURE__ */ Q("div", {
      style: {
        flex: 1
      },
      children: [/* @__PURE__ */ Q(m8, {
        children: [/* @__PURE__ */ W(Bo, {
          type: "checkbox",
          ref: s,
          onChange: (c) => {
            c.currentTarget.checked ? r([]) : r(t);
          }
        }), "Liquidity Sources"]
      }), /* @__PURE__ */ W(u8, {
        children: t.filter((c) => c.name.toLowerCase().includes(n.trim().toLowerCase())).map((c) => /* @__PURE__ */ Q(p8, {
          children: [/* @__PURE__ */ W(Bo, {
            type: "checkbox",
            checked: !i.includes(c.dexId),
            onChange: (p) => {
              p.target.checked ? r(e.filter((x) => x.dexId !== c.dexId)) : r([...e, c]);
            }
          }), /* @__PURE__ */ W(b8, {
            children: /* @__PURE__ */ W("img", {
              src: c.logoURL,
              alt: "logo"
            })
          }), /* @__PURE__ */ W(g8, {
            children: c.name
          })]
        }, c.dexId))
      })]
    })]
  });
}
const y8 = (t) => /* @__PURE__ */ ae.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ ae.createElement("g", { clipPath: "url(#clip0_1597_66764)" }, /* @__PURE__ */ ae.createElement("path", { d: "M10 13.3335H3.33333V4.66683C3.33333 4.30016 3.03333 4.00016 2.66667 4.00016C2.3 4.00016 2 4.30016 2 4.66683V13.3335C2 14.0668 2.6 14.6668 3.33333 14.6668H10C10.3667 14.6668 10.6667 14.3668 10.6667 14.0002C10.6667 13.6335 10.3667 13.3335 10 13.3335ZM13.3333 10.6668V2.66683C13.3333 1.9335 12.7333 1.3335 12 1.3335H6C5.26667 1.3335 4.66667 1.9335 4.66667 2.66683V10.6668C4.66667 11.4002 5.26667 12.0002 6 12.0002H12C12.7333 12.0002 13.3333 11.4002 13.3333 10.6668ZM12 10.6668H6V2.66683H12V10.6668Z", fill: "currentColor" })), /* @__PURE__ */ ae.createElement("defs", null, /* @__PURE__ */ ae.createElement("clipPath", { id: "clip0_1597_66764" }, /* @__PURE__ */ ae.createElement("rect", { width: 16, height: 16, fill: "currentColor" })))), v8 = ee(Ql)`
  width: 14px;
  height: 14px;
  circle {
    stroke-width: 6;
  }

  path {
    stroke-width: 6;
  }
`, w8 = ee(e1)`
  width: 24px;
  height: 24px;

  circle {
    stroke-width: 6;
  }

  path {
    stroke-width: 6;
  }
`, A8 = ee.div`
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
`, E8 = ee.div`
  color: ${({
  theme: t
}) => t.subText};
  font-size: 14px;
  text-align: left;
`, C8 = ee.div`
  font-weight: 500;
  text-align: left;
  font-size: 20px;
`, I8 = ee.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-top: 8px;
  gap: 4px;
  a {
    line-height: 0;
  }
`, k8 = ee.div`
  border-radius: ${({
  theme: t
}) => t.borderRadius};
  background: ${({
  theme: t
}) => t.error + "44"};
  padding: 20px;
`, S8 = ee.div`
  display: flex;
  font-size: 20px;
  color: ${({
  theme: t
}) => t.error};
  gap: 8px;
`, D8 = ee.div`
  font-size: 14px;
  margin-top: 16px;
  line-height: 20px;
  text-align: left;
`, B8 = ee.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 20px;
  font-size: 14px;
`;
function F8({
  token: t,
  onImport: e
}) {
  const {
    chainId: r
  } = $t(), [n, a] = Ne(!1), [i, s] = Ne(!1), {
    addToken: c
  } = kl(), p = oi();
  return Ft(() => {
    if (i) {
      const x = setTimeout(() => {
        s(!1);
      }, 2e3);
      return () => {
        clearTimeout(x);
      };
    }
  }, [i]), /* @__PURE__ */ Q(Cr, {
    children: [/* @__PURE__ */ Q(A8, {
      children: [/* @__PURE__ */ W(Dl, {
        style: {
          width: "44px",
          height: "44px"
        }
      }), /* @__PURE__ */ Q("div", {
        children: [/* @__PURE__ */ W(C8, {
          children: t.symbol
        }), /* @__PURE__ */ W(E8, {
          children: t.symbol
        }), /* @__PURE__ */ Q(I8, {
          children: ["Address: ", t.address.substring(0, 6), "...", t.address.substring(36), i ? /* @__PURE__ */ W(v8, {}) : /* @__PURE__ */ W(y8, {
            style: {
              cursor: "pointer",
              width: "14px",
              height: "14px",
              color: p.text
            },
            role: "button",
            onClick: () => {
              D6(t.address), s(!0);
            }
          }), /* @__PURE__ */ W("a", {
            href: ri[r] + "/address/" + t.address,
            target: "_blank",
            rel: "noopener norefferer noreferrer",
            children: /* @__PURE__ */ W(So, {
              style: {
                width: "12px",
                height: "12px"
              }
            })
          })]
        })]
      })]
    }), /* @__PURE__ */ Q(k8, {
      children: [/* @__PURE__ */ Q(S8, {
        children: [/* @__PURE__ */ W(w8, {}), /* @__PURE__ */ W("div", {
          children: "Trade at your own risk!"
        })]
      }), /* @__PURE__ */ Q(D8, {
        children: ["Anyone can create a token, including creating fake versions of existing tokens that claim to represent projects", /* @__PURE__ */ W("br", {}), /* @__PURE__ */ W("br", {}), "If you purchase this token, you may not be able to sell it back"]
      }), /* @__PURE__ */ Q(B8, {
        children: [/* @__PURE__ */ W(Bo, {
          type: "checkbox",
          checked: n,
          onChange: (x) => a(x.currentTarget.checked)
        }), " I understand"]
      })]
    }), /* @__PURE__ */ W(aa, {
      style: {
        marginTop: "auto"
      },
      disabled: !n,
      onClick: () => {
        c(t), e();
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
var t1 = function(t, e) {
  return (t1 = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var a in n)
      n.hasOwnProperty(a) && (r[a] = n[a]);
  })(t, e);
}, R8, Di, M8 = (function(t) {
  /*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
  (function() {
    var e = {}.hasOwnProperty;
    function r() {
      for (var n = [], a = 0; a < arguments.length; a++) {
        var i = arguments[a];
        if (i) {
          var s = typeof i;
          if (s === "string" || s === "number")
            n.push(i);
          else if (Array.isArray(i) && i.length) {
            var c = r.apply(null, i);
            c && n.push(c);
          } else if (s === "object")
            for (var p in i)
              e.call(i, p) && i[p] && n.push(p);
        }
      }
      return n.join(" ");
    }
    t.exports ? (r.default = r, t.exports = r) : window.classNames = r;
  })();
}(Di = {
  path: R8,
  exports: {},
  require: function(t, e) {
    return function() {
      throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
    }(e == null && Di.path);
  }
}, Di.exports), Di.exports);
function Fo(t, e, r) {
  var n, a, i, s, c;
  function p() {
    var y = Date.now() - s;
    y < e && y >= 0 ? n = setTimeout(p, e - y) : (n = null, r || (c = t.apply(i, a), i = a = null));
  }
  e == null && (e = 100);
  var x = function() {
    i = this, a = arguments, s = Date.now();
    var y = r && !n;
    return n || (n = setTimeout(p, e)), y && (c = t.apply(i, a), i = a = null), c;
  };
  return x.clear = function() {
    n && (clearTimeout(n), n = null);
  }, x.flush = function() {
    n && (c = t.apply(i, a), i = a = null, clearTimeout(n), n = null);
  }, x;
}
Fo.debounce = Fo;
var _8 = Fo;
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
var qs, T8 = (qs = "indiana-scroll-container", function(t, e) {
  if (!t)
    return qs;
  var r;
  typeof t == "string" ? r = t : e = t;
  var n = qs;
  return r && (n += "__" + r), n + (e ? Object.keys(e).reduce(function(a, i) {
    var s = e[i];
    return s && (a += " " + (typeof s == "boolean" ? n + "--" + i : n + "--" + i + "_" + s)), a;
  }, "") : "");
}), U8 = function(t) {
  function e(r) {
    var n = t.call(this, r) || this;
    return n.onEndScroll = function() {
      n.scrolling = !1, !n.pressed && n.started && n.processEnd();
    }, n.onScroll = function(a) {
      var i = n.container.current;
      i.scrollLeft === n.scrollLeft && i.scrollTop === n.scrollTop || (n.scrolling = !0, n.processScroll(a), n.onEndScroll());
    }, n.onTouchStart = function(a) {
      var i = n.props.nativeMobileScroll;
      if (n.isDraggable(a.target))
        if (n.internal = !0, i && n.scrolling)
          n.pressed = !0;
        else {
          var s = a.touches[0];
          n.processClick(a, s.clientX, s.clientY), !i && n.props.stopPropagation && a.stopPropagation();
        }
    }, n.onTouchEnd = function(a) {
      var i = n.props.nativeMobileScroll;
      n.pressed && (!n.started || n.scrolling && i ? n.pressed = !1 : n.processEnd(), n.forceUpdate());
    }, n.onTouchMove = function(a) {
      var i = n.props.nativeMobileScroll;
      if (n.pressed && (!i || !n.isMobile)) {
        var s = a.touches[0];
        s && n.processMove(a, s.clientX, s.clientY), a.preventDefault(), n.props.stopPropagation && a.stopPropagation();
      }
    }, n.onMouseDown = function(a) {
      n.isDraggable(a.target) && n.isScrollable() && (n.internal = !0, n.props.buttons.indexOf(a.button) !== -1 && (n.processClick(a, a.clientX, a.clientY), a.preventDefault(), n.props.stopPropagation && a.stopPropagation()));
    }, n.onMouseMove = function(a) {
      n.pressed && (n.processMove(a, a.clientX, a.clientY), a.preventDefault(), n.props.stopPropagation && a.stopPropagation());
    }, n.onMouseUp = function(a) {
      n.pressed && (n.started ? n.processEnd() : (n.internal = !1, n.pressed = !1, n.forceUpdate(), n.props.onClick && n.props.onClick(a)), a.preventDefault(), n.props.stopPropagation && a.stopPropagation());
    }, n.container = zr.createRef(), n.onEndScroll = _8(n.onEndScroll, 300), n.scrolling = !1, n.started = !1, n.pressed = !1, n.internal = !1, n.getRef = n.getRef.bind(n), n;
  }
  return function(r, n) {
    function a() {
      this.constructor = r;
    }
    t1(r, n), r.prototype = n === null ? Object.create(n) : (a.prototype = n.prototype, new a());
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
    var i = this.container.current;
    this.scrollLeft = i.scrollLeft, this.scrollTop = i.scrollTop, this.clientX = n, this.clientY = a, this.pressed = !0;
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
    var i = this.props, s = i.horizontal, c = i.vertical, p = i.activationDistance, x = i.onScroll, y = this.container.current;
    this.started ? (s && (y.scrollLeft -= n - this.clientX), c && (y.scrollTop -= a - this.clientY), x && x({
      external: !this.internal
    }), this.clientX = n, this.clientY = a, this.scrollLeft = y.scrollLeft, this.scrollTop = y.scrollTop) : (s && Math.abs(n - this.clientX) > p || c && Math.abs(a - this.clientY) > p) && (this.clientX = n, this.clientY = a, this.processStart());
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
    var r = this.props, n = r.children, a = r.draggingClassName, i = r.className, s = r.style, c = r.hideScrollbars, p = r.component;
    return zr.createElement(p, {
      className: M8(i, this.pressed && a, T8({
        dragging: this.pressed,
        "hide-scrollbars": c,
        "native-scroll": this.isMobile
      })),
      style: s,
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
}(d1);
function P8(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var b0 = P8, N8 = typeof tr == "object" && tr && tr.Object === Object && tr, O8 = N8, L8 = O8, j8 = typeof self == "object" && self && self.Object === Object && self, W8 = L8 || j8 || Function("return this")(), r1 = W8, H8 = r1, z8 = function() {
  return H8.Date.now();
}, G8 = z8, $8 = /\s/;
function V8(t) {
  for (var e = t.length; e-- && $8.test(t.charAt(e)); )
    ;
  return e;
}
var K8 = V8, q8 = K8, X8 = /^\s+/;
function Z8(t) {
  return t && t.slice(0, q8(t) + 1).replace(X8, "");
}
var J8 = Z8, Y8 = r1, Q8 = Y8.Symbol, n1 = Q8, uf = n1, a1 = Object.prototype, e5 = a1.hasOwnProperty, t5 = a1.toString, Ua = uf ? uf.toStringTag : void 0;
function r5(t) {
  var e = e5.call(t, Ua), r = t[Ua];
  try {
    t[Ua] = void 0;
    var n = !0;
  } catch {
  }
  var a = t5.call(t);
  return n && (e ? t[Ua] = r : delete t[Ua]), a;
}
var n5 = r5, a5 = Object.prototype, i5 = a5.toString;
function s5(t) {
  return i5.call(t);
}
var o5 = s5, mf = n1, c5 = n5, f5 = o5, d5 = "[object Null]", l5 = "[object Undefined]", pf = mf ? mf.toStringTag : void 0;
function h5(t) {
  return t == null ? t === void 0 ? l5 : d5 : pf && pf in Object(t) ? c5(t) : f5(t);
}
var u5 = h5;
function m5(t) {
  return t != null && typeof t == "object";
}
var p5 = m5, b5 = u5, g5 = p5, x5 = "[object Symbol]";
function y5(t) {
  return typeof t == "symbol" || g5(t) && b5(t) == x5;
}
var v5 = y5, w5 = J8, bf = b0, A5 = v5, gf = 0 / 0, E5 = /^[-+]0x[0-9a-f]+$/i, C5 = /^0b[01]+$/i, I5 = /^0o[0-7]+$/i, k5 = parseInt;
function S5(t) {
  if (typeof t == "number")
    return t;
  if (A5(t))
    return gf;
  if (bf(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = bf(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = w5(t);
  var r = C5.test(t);
  return r || I5.test(t) ? k5(t.slice(2), r ? 2 : 8) : E5.test(t) ? gf : +t;
}
var D5 = S5, B5 = b0, Xs = G8, xf = D5, F5 = "Expected a function", R5 = Math.max, M5 = Math.min;
function _5(t, e, r) {
  var n, a, i, s, c, p, x = 0, y = !1, C = !1, B = !0;
  if (typeof t != "function")
    throw new TypeError(F5);
  e = xf(e) || 0, B5(r) && (y = !!r.leading, C = "maxWait" in r, i = C ? R5(xf(r.maxWait) || 0, e) : i, B = "trailing" in r ? !!r.trailing : B);
  function F(G) {
    var J = n, Y = a;
    return n = a = void 0, x = G, s = t.apply(Y, J), s;
  }
  function R(G) {
    return x = G, c = setTimeout(U, e), y ? F(G) : s;
  }
  function M(G) {
    var J = G - p, Y = G - x, X = e - J;
    return C ? M5(X, i - Y) : X;
  }
  function S(G) {
    var J = G - p, Y = G - x;
    return p === void 0 || J >= e || J < 0 || C && Y >= i;
  }
  function U() {
    var G = Xs();
    if (S(G))
      return N(G);
    c = setTimeout(U, M(G));
  }
  function N(G) {
    return c = void 0, B && n ? F(G) : (n = a = void 0, s);
  }
  function z() {
    c !== void 0 && clearTimeout(c), x = 0, n = p = a = c = void 0;
  }
  function O() {
    return c === void 0 ? s : N(Xs());
  }
  function T() {
    var G = Xs(), J = S(G);
    if (n = arguments, a = this, p = G, J) {
      if (c === void 0)
        return R(p);
      if (C)
        return clearTimeout(c), c = setTimeout(U, e), F(p);
    }
    return c === void 0 && (c = setTimeout(U, e)), s;
  }
  return T.cancel = z, T.flush = O, T;
}
var T5 = _5, U5 = T5, P5 = b0, N5 = "Expected a function";
function O5(t, e, r) {
  var n = !0, a = !0;
  if (typeof t != "function")
    throw new TypeError(N5);
  return P5(r) && (n = "leading" in r ? !!r.leading : n, a = "trailing" in r ? !!r.trailing : a), U5(t, e, {
    leading: n,
    maxWait: e,
    trailing: a
  });
}
var L5 = O5;
function j5(t, e) {
  const r = Er(t);
  return r.current = t, wa(() => L5(r.current, e), [e]);
}
const W5 = (t, e) => e == null ? void 0 : e.find(
  (r) => r.dexId === t.exchange || (t.exchange === "kyberswap" || t.exchange === "kyberswap-static") && r.dexId === "kyberswapv1"
), H5 = (t, e = 0) => e === 1 ? "100%" : !t && t !== 0 ? null : `${(e > 1 ? Math.min(99.99, Math.max(0.01, t)) : t).toFixed(0)}%`, z5 = (t) => {
  var e, r, n, a;
  ((e = t == null ? void 0 : t.scrollTop) != null ? e : 0) > 0 ? t == null || t.classList.add("top") : t == null || t.classList.remove("top"), ((r = t == null ? void 0 : t.scrollHeight) != null ? r : 0) - ((n = t == null ? void 0 : t.scrollTop) != null ? n : 0) > ((a = t == null ? void 0 : t.clientHeight) != null ? a : 0) ? t == null || t.classList.add("bottom") : t == null || t.classList.remove("bottom");
}, G5 = (t, e, r) => j5(() => {
  var i, s, c, p, x;
  const a = t.current;
  (a == null ? void 0 : a.scrollLeft) > 0 ? (i = e.current) == null || i.classList.add("left-visible") : (s = e.current) == null || s.classList.remove("left-visible"), Math.floor((((c = r.current) == null ? void 0 : c.scrollWidth) || 0) - (a == null ? void 0 : a.scrollLeft)) > Math.floor(a == null ? void 0 : a.clientWidth) ? (p = e.current) == null || p.classList.add("right-visible") : (x = e.current) == null || x.classList.remove("right-visible");
}, 300), $5 = ee.div`
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
`, V5 = ee.div`
  width: 100%;
`, K5 = ee.div`
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
`, q5 = ee.div`
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
`, yf = ee.i`
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
`, X5 = ee.div`
  position: relative;
  padding-top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`, Z5 = ee.div`
  flex: auto;
  min-width: 50px;
  border-bottom: 1px solid ${({
  theme: t
}) => t.border};
  height: 1px;
`, vf = ee.div`
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
`, i1 = ee.a`
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
}) => t && rs`
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
`, J5 = ee.div`
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
`, Y5 = ee.div`
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
`, Q5 = ee.div`
  position: absolute;
  border-bottom: 1px solid ${({
  theme: t
}) => t.border};
  width: calc(100% - 68px);
  left: 43px;
`, eg = ee.div`
  z-index: 1;
  display: flex;
  align-items: center;
`, tg = ee.div`
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
`, rg = ee.a`
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
`, ng = ee.div`
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
`, ag = ee.div`
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
`, s1 = ee.div`
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid ${({
  theme: t
}) => t.accent};
`, o1 = ee.div`
  min-width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
function ig(t) {
  if (!t.length)
    return [];
  try {
    let e = -1;
    const r = t.reduce((i, s) => {
      var y, C;
      let c, p = [], x = ((C = (y = s.pools) == null ? void 0 : y[0]) == null ? void 0 : C.swapPercentage) || 0;
      if (i[s.slug]) {
        const B = i[s.slug] || {};
        c = B.index;
        const F = B.subRoutes || [];
        x += B.swapPercentage || 0, F.forEach((R, M) => {
          const S = s.pools && s.pools[M] || {}, U = R.reduce((O, T) => O + T.swapAmount || 0, 0) + S.swapAmount || 0;
          let N = !1;
          const z = R.map((O) => {
            const T = { ...O }, G = T.id === S.id;
            let J = T.swapAmount || 0;
            return G && (N = !0, J = J + S.swapAmount || 0), T.swapPercentage = Math.round(parseFloat(J) * 100 / parseFloat(U)), T.total = U.toString(), T;
          });
          if (!N) {
            const O = Math.round(parseFloat(S.swapAmount) * 100 / parseFloat(U));
            z.push({ ...S, swapPercentage: O });
          }
          p[M] = z;
        });
      } else
        e += 1, c = e, p = s.pools.map((B) => [{ ...B, swapPercentage: 100 }]);
      return Object.assign({}, i, {
        [s.slug]: { index: c, swapPercentage: x, path: s.path, subRoutes: p }
      });
    }, {}), n = Object.keys(r).length, a = new Array(n).map(() => ({}));
    return Object.values(r).forEach((i) => {
      i.index > n || a.splice(i.index, 1, {
        swapPercentage: i.swapPercentage,
        path: i.path,
        subRoutes: i.subRoutes,
        id: i.subRoutes.flat().map((s) => s.id).join("-")
      });
    }), a;
  } catch (e) {
    return console.error("[error_routesV2]", e), [];
  }
}
function sg(t, e, r, n, a) {
  if (!r || !n)
    return;
  const i = a.reduce((x, y) => (x[y.address] = y, x), {}), s = [], c = function(x, y) {
    if (!x || !y)
      return;
    if (B6(t, x, e == null ? void 0 : e.address) && Number(r) > 0) {
      const B = parseFloat(y) * 100 / parseFloat(r);
      return Math.round(B);
    }
  }, p = (x) => x.toLowerCase() === pt.toLowerCase() ? es[t] : (i == null ? void 0 : i[s0(x) || ""]) || (i == null ? void 0 : i[x]) || {
    name: "--",
    decimals: 0,
    symbol: "--",
    address: x,
    chainId: t,
    logoURI: ""
  };
  return n.forEach((x) => {
    var B;
    if (!x.length || x.length < 1)
      return;
    if (x.length === 1) {
      const F = x[0], R = [p(F.tokenIn), p(F.tokenOut)];
      s.push({
        slug: (B = F.tokenOut) == null ? void 0 : B.toLowerCase(),
        pools: [
          {
            id: F.pool,
            exchange: F.exchange,
            swapAmount: parseFloat(F.swapAmount),
            swapPercentage: c(F.tokenIn, F.swapAmount)
          }
        ],
        path: R,
        id: F.pool
      });
      return;
    }
    const y = [], C = [];
    x.forEach((F, R) => {
      C.push({
        id: F.pool + "-" + F.tokenIn + "-" + F.tokenOut,
        exchange: F.exchange,
        swapAmount: parseFloat(F.swapAmount),
        swapPercentage: R === 0 ? c(F.tokenIn, F.swapAmount) : 100
      }), R === 0 && y.push(p(F.tokenIn));
      const M = p(F.tokenOut);
      y.push(M);
    }), s.push({
      slug: y.slice(1).map((F) => F.address).join("-").toLowerCase(),
      path: y,
      pools: C,
      id: C.map((F) => F.id).join("-")
    });
  }), ig(s);
}
const og = ({
  route: t,
  chainId: e,
  backgroundColor: r
}) => {
  var p;
  const n = Er(null), a = Er(null), i = Er(null), [s] = jl(), c = G5(n, i, a);
  return Ft(() => (window.addEventListener("resize", c), () => window.removeEventListener("resize", c)), []), Ft(() => {
    c();
  }, [t]), /* @__PURE__ */ W(ag, {
    ref: i,
    backgroundColor: r,
    children: /* @__PURE__ */ W(U8, {
      innerRef: n,
      vertical: !1,
      onScroll: c,
      children: /* @__PURE__ */ W(eg, {
        length: (p = t == null ? void 0 : t.subRoutes) == null ? void 0 : p.length,
        ref: a,
        children: t.subRoutes.map((x, y, C) => {
          const B = t.path[y + 1], F = x.flat().map((R) => R.id).join("-");
          return /* @__PURE__ */ Q(zr.Fragment, {
            children: [/* @__PURE__ */ Q(tg, {
              children: [/* @__PURE__ */ Q(i1, {
                style: {
                  marginRight: 0
                },
                href: `${ri[e]}/token/${B == null ? void 0 : B.address}`,
                target: "_blank",
                children: [/* @__PURE__ */ W("img", {
                  width: "20",
                  height: "20",
                  alt: "tokenIn",
                  src: B == null ? void 0 : B.logoURI,
                  style: {
                    borderRadius: "50%"
                  },
                  onError: ({
                    currentTarget: R
                  }) => {
                    R.onerror = null, R.src = new URL("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iQ3VycmVuY3lMb2dvX19TdHlsZWRMb2dvLXNjLTFxODJydWEtMSBncHhsS2EiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIj48L2NpcmNsZT48cGF0aCBkPSJNOS4wOSA5YTMgMyAwIDAgMSA1LjgzIDFjMCAyLTMgMy0zIDMiPjwvcGF0aD48bGluZSB4MT0iMTIiIHkxPSIxNyIgeDI9IjEyLjAxIiB5Mj0iMTciPjwvbGluZT48L3N2Zz4K", self.location).href;
                  }
                }), /* @__PURE__ */ W("span", {
                  children: B == null ? void 0 : B.symbol
                })]
              }), Array.isArray(x) ? x.map((R) => {
                var N;
                const M = W5(R, s), S = (N = R.id.split("-")) == null ? void 0 : N[0];
                return ((z) => s0(S) && !["1inch", "paraswap", "0x"].includes(R.exchange) ? /* @__PURE__ */ W(rg, {
                  href: `${ri[e]}/address/${S}`,
                  target: "_blank",
                  children: z
                }, `${z}-${R.id}`) : /* @__PURE__ */ W(ng, {
                  children: z
                }, `${z}-${R.id}`))(/* @__PURE__ */ Q(Cr, {
                  children: [M != null && M.logoURL ? /* @__PURE__ */ W("img", {
                    src: M == null ? void 0 : M.logoURL,
                    alt: "",
                    className: "img--sm"
                  }) : /* @__PURE__ */ W("i", {
                    className: "img--sm"
                  }), `${(M == null ? void 0 : M.name) || "--"}: ${R.swapPercentage}%`]
                }));
              }) : null]
            }), y !== C.length - 1 && /* @__PURE__ */ W(o1, {
              children: /* @__PURE__ */ W(s1, {})
            })]
          }, F);
        })
      })
    })
  });
}, cg = ({
  trade: t,
  currencyIn: e,
  currencyOut: r
}) => {
  const {
    chainId: n
  } = $t(), a = Er(null), i = Er(null), s = Er(null), c = gs(), p = t == null ? void 0 : t.routeSummary.amountIn, x = t == null ? void 0 : t.routeSummary.amountOut, y = wa(() => {
    var R;
    if (!!t)
      return sg(n, e, p, (R = t.routeSummary) == null ? void 0 : R.route, c);
  }, [n, e, p, c, t]), C = (R, M, S) => {
    if (n && R) {
      const U = M ? Number(M) / 10 ** ((R == null ? void 0 : R.decimals) || 18) : 0, N = Number(U.toFixed(4));
      return /* @__PURE__ */ Q(i1, {
        as: "div",
        reverse: S,
        style: {
          border: "none"
        },
        children: [/* @__PURE__ */ W("img", {
          width: "20",
          height: "20",
          alt: S ? "token out" : "token in",
          src: R == null ? void 0 : R.logoURI,
          style: {
            borderRadius: "50%"
          },
          onError: ({
            currentTarget: z
          }) => {
            z.onerror = null, z.src = new URL("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iQ3VycmVuY3lMb2dvX19TdHlsZWRMb2dvLXNjLTFxODJydWEtMSBncHhsS2EiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIj48L2NpcmNsZT48cGF0aCBkPSJNOS4wOSA5YTMgMyAwIDAgMSA1LjgzIDFjMCAyLTMgMy0zIDMiPjwvcGF0aD48bGluZSB4MT0iMTIiIHkxPSIxNyIgeDI9IjEyLjAxIiB5Mj0iMTciPjwvbGluZT48L3N2Zz4K", self.location).href;
          }
        }), /* @__PURE__ */ Q("span", {
          children: [N, " ", R.symbol]
        })]
      });
    }
    return null;
  }, B = n && y && y.length > 0, F = xn(() => z5(a.current), []);
  return Ft(() => (window.addEventListener("resize", F), () => window.removeEventListener("resize", F)), [F]), Ft(() => {
    F();
  }, [y, F]), /* @__PURE__ */ W(V5, {
    children: /* @__PURE__ */ W(K5, {
      ref: a,
      children: /* @__PURE__ */ W($5, {
        ref: i,
        onScroll: F,
        style: {
          maxHeight: "100%"
        },
        children: /* @__PURE__ */ Q("div", {
          ref: s,
          children: [/* @__PURE__ */ Q(X5, {
            children: [/* @__PURE__ */ W(vf, {
              children: C(e, p)
            }), !B && /* @__PURE__ */ W(Z5, {}), /* @__PURE__ */ W(vf, {
              children: C(r, x, !0)
            })]
          }), B ? /* @__PURE__ */ W("div", {
            children: /* @__PURE__ */ Q(J5, {
              children: [/* @__PURE__ */ W(yf, {}), /* @__PURE__ */ W(yf, {
                out: !0
              }), y.map((R) => /* @__PURE__ */ Q(Y5, {
                children: [/* @__PURE__ */ W(q5, {
                  children: H5(R.swapPercentage, y.length)
                }), /* @__PURE__ */ W(Q5, {}), /* @__PURE__ */ W(og, {
                  route: R,
                  chainId: n
                }), /* @__PURE__ */ W(o1, {
                  style: {
                    marginRight: "2px"
                  },
                  children: /* @__PURE__ */ W(s1, {})
                })]
              }, R.id))]
            })
          }) : null]
        })
      })
    })
  });
}, fg = l1(cg), dg = ee.div`
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
  z-index: ${El.DIALOG};
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
`, lg = ee.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`, hg = ee.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`, wf = ee.span`
  font-size: 16px;
  width: max-content;
`, Zs = ee.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: ${({
  theme: t
}) => t.subText};
  font-size: 12px;
  margin-top: 1rem;
`, ug = ({
  defaultTokenIn: t,
  defaultTokenOut: e,
  defaultSlippage: r,
  feeSetting: n,
  client: a,
  onTxSubmit: i,
  enableRoute: s,
  enableDexes: c,
  title: p
}) => {
  var ve, Le, pe, Te, Ve, Ee, ze;
  const [x, y] = Ne(null), {
    chainId: C
  } = $t(), B = !i0.includes(C.toString()), F = gs(), {
    loading: R,
    error: M,
    tokenIn: S,
    tokenOut: U,
    setTokenIn: N,
    setTokenOut: z,
    inputAmout: O,
    setInputAmount: T,
    trade: G,
    slippage: J,
    setSlippage: Y,
    getRate: X,
    deadline: se,
    setDeadline: D,
    allDexes: u,
    excludedDexes: l,
    setExcludedDexes: o,
    setTrade: d,
    isWrap: g,
    isUnwrap: v
  } = i4({
    defaultTokenIn: t,
    defaultTokenOut: e,
    defaultSlippage: r,
    feeSetting: n,
    enableDexes: c
  }), A = B ? null : G, [w, h] = Ne(!1), {
    balances: m,
    refetch: f
  } = o0(F.map((Ae) => Ae.address)), E = S === pt ? es[C] : F.find((Ae) => Ae.address.toLowerCase() === S.toLowerCase()), k = U === pt ? es[C] : F.find((Ae) => Ae.address.toLowerCase() === U.toLowerCase()), b = g || v ? O : (ve = A == null ? void 0 : A.routeSummary) != null && ve.amountOut ? Ar.formatUnits(A.routeSummary.amountOut, k == null ? void 0 : k.decimals).toString() : "";
  let I = "";
  b && (I = g || v ? parseFloat((+b).toPrecision(8)).toString() : (Number(b) * (1 - J / 1e4)).toPrecision(8).toString());
  const L = m[S] || de.from(0), P = m[U] || de.from(0), H = Ar.formatUnits(L, (E == null ? void 0 : E.decimals) || 18), $ = Ar.formatUnits(P, (k == null ? void 0 : k.decimals) || 18), V = g || v ? 1 : ((Le = A == null ? void 0 : A.routeSummary) == null ? void 0 : Le.amountIn) && ((pe = A == null ? void 0 : A.routeSummary) == null ? void 0 : pe.amountOut) && parseFloat(Ar.formatUnits(A.routeSummary.amountOut, (k == null ? void 0 : k.decimals) || 18)) / parseFloat(O), j = parseFloat(parseFloat(H).toPrecision(10)), le = parseFloat(parseFloat($).toPrecision(10)), te = oi(), q = A != null && A.routeSummary.amountOutUsd ? (+A.routeSummary.amountInUsd - +A.routeSummary.amountOutUsd) * 100 / +A.routeSummary.amountInUsd : -1, xe = (() => {
    switch (x) {
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
  })(), [ue, he] = Ne(null), [Pe, ye] = Ne("in"), be = (() => {
    switch (x) {
      case "setting":
        return /* @__PURE__ */ W(Hb, {
          slippage: J,
          setSlippage: Y,
          deadline: se,
          setDeadline: D,
          allDexes: u,
          excludedDexes: l,
          onShowSource: () => y("dexes_setting")
        });
      case "trade_route":
        return s ? /* @__PURE__ */ W(fg, {
          trade: A,
          currencyIn: E,
          currencyOut: k
        }) : null;
      case "currency_in":
        return /* @__PURE__ */ W(Pc, {
          selectedToken: S,
          onChange: (Ae) => {
            Ae === U && z(S), N(Ae), y(null);
          },
          onImport: (Ae) => {
            he(Ae), y("import_token"), ye("in");
          }
        });
      case "currency_out":
        return /* @__PURE__ */ W(Pc, {
          selectedToken: U,
          onChange: (Ae) => {
            Ae === S && N(U), z(Ae), y(null);
          },
          onImport: (Ae) => {
            he(Ae), y("import_token"), ye("out");
          }
        });
      case "review":
        return V && E && A && k ? /* @__PURE__ */ W(h8, {
          trade: A,
          tokenInInfo: E,
          amountIn: O,
          tokenOutInfo: k,
          amountOut: b,
          rate: V,
          priceImpact: q,
          slippage: J,
          deadline: se,
          client: a,
          onClose: () => {
            y(null), f();
          },
          onTxSubmit: i
        }) : null;
      case "dexes_setting":
        return /* @__PURE__ */ W(x8, {
          allDexes: u,
          excludedDexes: l,
          setExcludedDexes: o
        });
      case "import_token":
        return ue ? /* @__PURE__ */ W(F8, {
          token: ue,
          onImport: () => {
            Pe === "in" ? (N(ue.address), y(null)) : (z(ue.address), y(null));
          }
        }) : null;
      default:
        return null;
    }
  })(), {
    loading: Ue,
    approve: _e,
    approvalState: re
  } = s4(((Te = A == null ? void 0 : A.routeSummary) == null ? void 0 : Te.amountIn) || "0", S, (A == null ? void 0 : A.routerAddress) || "");
  return /* @__PURE__ */ Q(bh, {
    children: [/* @__PURE__ */ Q(dg, {
      className: x ? "open" : "close",
      children: [x !== "review" && /* @__PURE__ */ W(Nf, {
        children: /* @__PURE__ */ Q(Of, {
          onClick: () => y(x === "dexes_setting" ? "setting" : null),
          role: "button",
          children: [/* @__PURE__ */ W(Tf, {
            style: {
              color: te.subText
            }
          }), xe]
        })
      }), /* @__PURE__ */ W(hg, {
        children: be
      }), /* @__PURE__ */ Q(Zs, {
        style: {
          marginTop: "0"
        },
        children: ["Powered By", /* @__PURE__ */ W(M0, {})]
      })]
    }), /* @__PURE__ */ Q(gh, {
      children: [p || "Swap", /* @__PURE__ */ W(ao, {
        onClick: () => y("setting"),
        children: /* @__PURE__ */ W(hh, {})
      })]
    }), /* @__PURE__ */ Q(_0, {
      children: [/* @__PURE__ */ Q(T0, {
        children: [/* @__PURE__ */ W("div", {
          children: /* @__PURE__ */ W(xh, {
            onClick: () => T(H),
            children: "Max"
          })
        }), /* @__PURE__ */ Q(U0, {
          children: [/* @__PURE__ */ W(R0, {}), j]
        })]
      }), /* @__PURE__ */ Q(P0, {
        children: [/* @__PURE__ */ W(N0, {
          value: O,
          onChange: (Ae) => {
            const Ce = Ae.target.value.replace(/,/g, "."), Je = RegExp("^\\d*(?:\\\\[.])?\\d*$");
            (Ce === "" || Je.test(Ce.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))) && T(Ce);
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
        }), !!((Ve = A == null ? void 0 : A.routeSummary) != null && Ve.amountInUsd) && /* @__PURE__ */ Q("span", {
          style: {
            fontSize: "12px",
            marginRight: "4px",
            color: te.subText
          },
          children: ["~", (+A.routeSummary.amountInUsd).toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
          })]
        }), /* @__PURE__ */ Q(O0, {
          onClick: () => !B && y("currency_in"),
          children: [E ? /* @__PURE__ */ Q(Cr, {
            children: [/* @__PURE__ */ W("img", {
              width: "20",
              height: "20",
              alt: "tokenIn",
              src: E == null ? void 0 : E.logoURI,
              style: {
                borderRadius: "50%"
              },
              onError: ({
                currentTarget: Ae
              }) => {
                Ae.onerror = null, Ae.src = new URL("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iQ3VycmVuY3lMb2dvX19TdHlsZWRMb2dvLXNjLTFxODJydWEtMSBncHhsS2EiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIj48L2NpcmNsZT48cGF0aCBkPSJNOS4wOSA5YTMgMyAwIDAgMSA1LjgzIDFjMCAyLTMgMy0zIDMiPjwvcGF0aD48bGluZSB4MT0iMTIiIHkxPSIxNyIgeDI9IjEyLjAxIiB5Mj0iMTciPjwvbGluZT48L3N2Zz4K", self.location).href;
              }
            }), /* @__PURE__ */ W("div", {
              style: {
                marginLeft: "0.375rem"
              },
              children: E == null ? void 0 : E.symbol
            })]
          }) : /* @__PURE__ */ W(wf, {
            children: "Select a token"
          }), /* @__PURE__ */ W(no, {})]
        })]
      })]
    }), /* @__PURE__ */ Q(vh, {
      children: [/* @__PURE__ */ Q(wh, {
        children: [/* @__PURE__ */ W(qb, {
          loading: R,
          onRefresh: () => {
            X();
          },
          trade: A
        }), /* @__PURE__ */ W(Ah, {
          children: (() => V ? w ? `1 ${k == null ? void 0 : k.symbol} = ${+(1 / V).toPrecision(10)} ${E == null ? void 0 : E.symbol}` : `1 ${E == null ? void 0 : E.symbol} = ${+V.toPrecision(10)} ${k == null ? void 0 : k.symbol}` : "--")()
        }), !!V && /* @__PURE__ */ W(ao, {
          onClick: () => h((Ae) => !Ae),
          children: /* @__PURE__ */ W(mh, {})
        })]
      }), /* @__PURE__ */ W(yh, {
        onClick: () => {
          d(null), N(U), z(S);
        },
        children: /* @__PURE__ */ W(uh, {})
      })]
    }), /* @__PURE__ */ Q(_0, {
      children: [/* @__PURE__ */ Q(T0, {
        children: [/* @__PURE__ */ W("div", {}), /* @__PURE__ */ Q(U0, {
          children: [/* @__PURE__ */ W(R0, {}), le]
        })]
      }), /* @__PURE__ */ Q(P0, {
        children: [/* @__PURE__ */ W(N0, {
          disabled: !0,
          value: g || v ? +b : (+b).toPrecision(8)
        }), !!((Ee = A == null ? void 0 : A.routeSummary) != null && Ee.amountOutUsd) && /* @__PURE__ */ Q("span", {
          style: {
            fontSize: "12px",
            marginRight: "4px",
            color: te.subText
          },
          children: ["~", (+A.routeSummary.amountOutUsd).toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
          })]
        }), /* @__PURE__ */ Q(O0, {
          onClick: () => !B && y("currency_out"),
          children: [k ? /* @__PURE__ */ Q(Cr, {
            children: [/* @__PURE__ */ W("img", {
              width: "20",
              height: "20",
              alt: "tokenOut",
              src: k == null ? void 0 : k.logoURI,
              style: {
                borderRadius: "50%"
              },
              onError: ({
                currentTarget: Ae
              }) => {
                Ae.onerror = null, Ae.src = new URL("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iQ3VycmVuY3lMb2dvX19TdHlsZWRMb2dvLXNjLTFxODJydWEtMSBncHhsS2EiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIj48L2NpcmNsZT48cGF0aCBkPSJNOS4wOSA5YTMgMyAwIDAgMSA1LjgzIDFjMCAyLTMgMy0zIDMiPjwvcGF0aD48bGluZSB4MT0iMTIiIHkxPSIxNyIgeDI9IjEyLjAxIiB5Mj0iMTciPjwvbGluZT48L3N2Zz4K", self.location).href;
              }
            }), /* @__PURE__ */ W("div", {
              style: {
                marginLeft: "0.375rem"
              },
              children: k == null ? void 0 : k.symbol
            })]
          }) : /* @__PURE__ */ W(wf, {
            children: "Select a token"
          }), /* @__PURE__ */ W(no, {})]
        })]
      })]
    }), /* @__PURE__ */ Q(Pf, {
      style: {
        marginTop: "1rem"
      },
      children: [/* @__PURE__ */ Q(lg, {
        children: [/* @__PURE__ */ W(Eh, {
          children: "More information"
        }), s && !(g || v) && /* @__PURE__ */ Q(Ch, {
          onClick: () => y("trade_route"),
          children: ["View Routes ", /* @__PURE__ */ W(ph, {
            style: {
              width: 12,
              height: 12
            }
          })]
        })]
      }), /* @__PURE__ */ W(Ih, {}), /* @__PURE__ */ Q(dn, {
        children: [/* @__PURE__ */ Q(ln, {
          children: ["Minimum Received", /* @__PURE__ */ W(en, {
            text: "Minimum amount you will receive or your transaction will revert"
          })]
        }), /* @__PURE__ */ W(Jr, {
          children: I ? `${I} ${k == null ? void 0 : k.symbol}` : "--"
        })]
      }), /* @__PURE__ */ Q(dn, {
        children: [/* @__PURE__ */ Q(ln, {
          children: ["Gas Fee ", /* @__PURE__ */ W(en, {
            text: "Estimated network fee for your transaction"
          })]
        }), /* @__PURE__ */ W(Jr, {
          children: (ze = A == null ? void 0 : A.routeSummary) != null && ze.gasUsd ? "$" + (+A.routeSummary.gasUsd).toPrecision(4) : "--"
        })]
      }), /* @__PURE__ */ Q(dn, {
        children: [/* @__PURE__ */ Q(ln, {
          children: ["Price Impact", /* @__PURE__ */ W(en, {
            text: "Estimated change in price due to the size of your transaction"
          })]
        }), /* @__PURE__ */ W(Jr, {
          style: {
            color: q > 15 ? te.error : q > 5 ? te.warning : te.text
          },
          children: q === -1 ? "--" : q > 0.01 ? q.toFixed(3) + "%" : "< 0.01%"
        })]
      })]
    }), /* @__PURE__ */ W(aa, {
      disabled: !!M || R || Ue || re === Pa.PENDING || B,
      onClick: async () => {
        re === Pa.NOT_APPROVED && !g && !v ? _e() : y("review");
      },
      children: B ? /* @__PURE__ */ Q(Zs, {
        style: {
          fontSize: "16px",
          marginTop: "0"
        },
        children: [/* @__PURE__ */ W(Uf, {
          style: {
            width: "24px",
            height: "24px"
          }
        }), "Unsupported network"]
      }) : R ? /* @__PURE__ */ W(Cs, {
        children: "Calculate best route"
      }) : M || (g ? "Wrap" : v ? "Unwrap" : Ue ? /* @__PURE__ */ W(Cs, {
        children: "Checking Allowance"
      }) : re === Pa.NOT_APPROVED ? "Approve" : re === Pa.PENDING ? /* @__PURE__ */ W(Cs, {
        children: "Approving"
      }) : "Swap")
    }), /* @__PURE__ */ Q(Zs, {
      children: ["Powered By", /* @__PURE__ */ W(M0, {})]
    })]
  });
};
function bg({
  provider: t,
  tokenList: e,
  theme: r,
  defaultTokenIn: n,
  defaultTokenOut: a,
  defaultSlippage: i,
  feeSetting: s,
  client: c,
  onTxSubmit: p,
  enableRoute: x = !0,
  enableDexes: y,
  title: C
}) {
  return /* @__PURE__ */ W(h1, {
    children: /* @__PURE__ */ W(dh, {
      theme: r || lh,
      children: /* @__PURE__ */ W(M6, {
        provider: t,
        children: /* @__PURE__ */ W(U6, {
          tokenList: e,
          children: /* @__PURE__ */ W(ug, {
            defaultTokenIn: n,
            defaultTokenOut: a,
            defaultSlippage: i,
            feeSetting: s,
            client: c,
            onTxSubmit: p,
            enableRoute: x,
            enableDexes: y,
            title: C
          })
        })
      })
    })
  });
}
export {
  dg as DialogWrapper,
  bg as Widget
};
