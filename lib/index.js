function gn(n) {
  return Object.prototype.toString.call(n).slice(8, -1) === "Number";
}
/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var $ = 9e15, B = 1e9, cn = "0123456789abcdef", X = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Y = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", fn = {
  precision: 20,
  rounding: 4,
  modulo: 1,
  toExpNeg: -7,
  toExpPos: 21,
  minE: -$,
  maxE: $,
  crypto: !1
}, Nn, k, w = !0, tn = "[DecimalError] ", H = tn + "Invalid argument: ", bn = tn + "Precision limit exceeded", xn = tn + "crypto unavailable", En = "[object Decimal]", S = Math.floor, M = Math.pow, Dn = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Zn = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Pn = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, yn = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, _ = 1e7, m = 7, Rn = 9007199254740991, Tn = X.length - 1, ln = Y.length - 1, d = { toStringTag: En };
d.absoluteValue = d.abs = function() {
  var n = new this.constructor(this);
  return n.s < 0 && (n.s = 1), g(n);
};
d.ceil = function() {
  return g(new this.constructor(this), this.e + 1, 2);
};
d.clampedTo = d.clamp = function(n, t) {
  var r, e = this, i = e.constructor;
  if (n = new i(n), t = new i(t), !n.s || !t.s)
    return new i(NaN);
  if (n.gt(t))
    throw Error(H + t);
  return r = e.cmp(n), r < 0 ? n : e.cmp(t) > 0 ? t : new i(e);
};
d.comparedTo = d.cmp = function(n) {
  var t, r, e, i, s = this, o = s.d, u = (n = new s.constructor(n)).d, f = s.s, c = n.s;
  if (!o || !u)
    return !f || !c ? NaN : f !== c ? f : o === u ? 0 : !o ^ f < 0 ? 1 : -1;
  if (!o[0] || !u[0])
    return o[0] ? f : u[0] ? -c : 0;
  if (f !== c)
    return f;
  if (s.e !== n.e)
    return s.e > n.e ^ f < 0 ? 1 : -1;
  for (e = o.length, i = u.length, t = 0, r = e < i ? e : i; t < r; ++t)
    if (o[t] !== u[t])
      return o[t] > u[t] ^ f < 0 ? 1 : -1;
  return e === i ? 0 : e > i ^ f < 0 ? 1 : -1;
};
d.cosine = d.cos = function() {
  var n, t, r = this, e = r.constructor;
  return r.d ? r.d[0] ? (n = e.precision, t = e.rounding, e.precision = n + Math.max(r.e, r.sd()) + m, e.rounding = 1, r = _n(e, Sn(e, r)), e.precision = n, e.rounding = t, g(k == 2 || k == 3 ? r.neg() : r, n, t, !0)) : new e(1) : new e(NaN);
};
d.cubeRoot = d.cbrt = function() {
  var n, t, r, e, i, s, o, u, f, c, l = this, a = l.constructor;
  if (!l.isFinite() || l.isZero())
    return new a(l);
  for (w = !1, s = l.s * M(l.s * l, 1 / 3), !s || Math.abs(s) == 1 / 0 ? (r = O(l.d), n = l.e, (s = (n - r.length + 1) % 3) && (r += s == 1 || s == -2 ? "0" : "00"), s = M(r, 1 / 3), n = S((n + 1) / 3) - (n % 3 == (n < 0 ? -1 : 2)), s == 1 / 0 ? r = "5e" + n : (r = s.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + n), e = new a(r), e.s = l.s) : e = new a(s.toString()), o = (n = a.precision) + 3; ; )
    if (u = e, f = u.times(u).times(u), c = f.plus(l), e = x(c.plus(l).times(u), c.plus(f), o + 2, 1), O(u.d).slice(0, o) === (r = O(e.d)).slice(0, o))
      if (r = r.slice(o - 3, o + 1), r == "9999" || !i && r == "4999") {
        if (!i && (g(u, n + 1, 0), u.times(u).times(u).eq(l))) {
          e = u;
          break;
        }
        o += 4, i = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (g(e, n + 1, 1), t = !e.times(e).times(e).eq(l));
        break;
      }
  return w = !0, g(e, n, a.rounding, t);
};
d.decimalPlaces = d.dp = function() {
  var n, t = this.d, r = NaN;
  if (t) {
    if (n = t.length - 1, r = (n - S(this.e / m)) * m, n = t[n], n)
      for (; n % 10 == 0; n /= 10)
        r--;
    r < 0 && (r = 0);
  }
  return r;
};
d.dividedBy = d.div = function(n) {
  return x(this, new this.constructor(n));
};
d.dividedToIntegerBy = d.divToInt = function(n) {
  var t = this, r = t.constructor;
  return g(x(t, new r(n), 0, 1, 1), r.precision, r.rounding);
};
d.equals = d.eq = function(n) {
  return this.cmp(n) === 0;
};
d.floor = function() {
  return g(new this.constructor(this), this.e + 1, 3);
};
d.greaterThan = d.gt = function(n) {
  return this.cmp(n) > 0;
};
d.greaterThanOrEqualTo = d.gte = function(n) {
  var t = this.cmp(n);
  return t == 1 || t === 0;
};
d.hyperbolicCosine = d.cosh = function() {
  var n, t, r, e, i, s = this, o = s.constructor, u = new o(1);
  if (!s.isFinite())
    return new o(s.s ? 1 / 0 : NaN);
  if (s.isZero())
    return u;
  r = o.precision, e = o.rounding, o.precision = r + Math.max(s.e, s.sd()) + 4, o.rounding = 1, i = s.d.length, i < 32 ? (n = Math.ceil(i / 3), t = (1 / en(4, n)).toString()) : (n = 16, t = "2.3283064365386962890625e-10"), s = j(o, 1, s.times(t), new o(1), !0);
  for (var f, c = n, l = new o(8); c--; )
    f = s.times(s), s = u.minus(f.times(l.minus(f.times(l))));
  return g(s, o.precision = r, o.rounding = e, !0);
};
d.hyperbolicSine = d.sinh = function() {
  var n, t, r, e, i = this, s = i.constructor;
  if (!i.isFinite() || i.isZero())
    return new s(i);
  if (t = s.precision, r = s.rounding, s.precision = t + Math.max(i.e, i.sd()) + 4, s.rounding = 1, e = i.d.length, e < 3)
    i = j(s, 2, i, i, !0);
  else {
    n = 1.4 * Math.sqrt(e), n = n > 16 ? 16 : n | 0, i = i.times(1 / en(5, n)), i = j(s, 2, i, i, !0);
    for (var o, u = new s(5), f = new s(16), c = new s(20); n--; )
      o = i.times(i), i = i.times(u.plus(o.times(f.times(o).plus(c))));
  }
  return s.precision = t, s.rounding = r, g(i, t, r, !0);
};
d.hyperbolicTangent = d.tanh = function() {
  var n, t, r = this, e = r.constructor;
  return r.isFinite() ? r.isZero() ? new e(r) : (n = e.precision, t = e.rounding, e.precision = n + 7, e.rounding = 1, x(r.sinh(), r.cosh(), e.precision = n, e.rounding = t)) : new e(r.s);
};
d.inverseCosine = d.acos = function() {
  var n, t = this, r = t.constructor, e = t.abs().cmp(1), i = r.precision, s = r.rounding;
  return e !== -1 ? e === 0 ? t.isNeg() ? T(r, i, s) : new r(0) : new r(NaN) : t.isZero() ? T(r, i + 4, s).times(0.5) : (r.precision = i + 6, r.rounding = 1, t = t.asin(), n = T(r, i + 4, s).times(0.5), r.precision = i, r.rounding = s, n.minus(t));
};
d.inverseHyperbolicCosine = d.acosh = function() {
  var n, t, r = this, e = r.constructor;
  return r.lte(1) ? new e(r.eq(1) ? 0 : NaN) : r.isFinite() ? (n = e.precision, t = e.rounding, e.precision = n + Math.max(Math.abs(r.e), r.sd()) + 4, e.rounding = 1, w = !1, r = r.times(r).minus(1).sqrt().plus(r), w = !0, e.precision = n, e.rounding = t, r.ln()) : new e(r);
};
d.inverseHyperbolicSine = d.asinh = function() {
  var n, t, r = this, e = r.constructor;
  return !r.isFinite() || r.isZero() ? new e(r) : (n = e.precision, t = e.rounding, e.precision = n + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, e.rounding = 1, w = !1, r = r.times(r).plus(1).sqrt().plus(r), w = !0, e.precision = n, e.rounding = t, r.ln());
};
d.inverseHyperbolicTangent = d.atanh = function() {
  var n, t, r, e, i = this, s = i.constructor;
  return i.isFinite() ? i.e >= 0 ? new s(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (n = s.precision, t = s.rounding, e = i.sd(), Math.max(e, n) < 2 * -i.e - 1 ? g(new s(i), n, t, !0) : (s.precision = r = e - i.e, i = x(i.plus(1), new s(1).minus(i), r + n, 1), s.precision = n + 4, s.rounding = 1, i = i.ln(), s.precision = n, s.rounding = t, i.times(0.5))) : new s(NaN);
};
d.inverseSine = d.asin = function() {
  var n, t, r, e, i = this, s = i.constructor;
  return i.isZero() ? new s(i) : (t = i.abs().cmp(1), r = s.precision, e = s.rounding, t !== -1 ? t === 0 ? (n = T(s, r + 4, e).times(0.5), n.s = i.s, n) : new s(NaN) : (s.precision = r + 6, s.rounding = 1, i = i.div(new s(1).minus(i.times(i)).sqrt().plus(1)).atan(), s.precision = r, s.rounding = e, i.times(2)));
};
d.inverseTangent = d.atan = function() {
  var n, t, r, e, i, s, o, u, f, c = this, l = c.constructor, a = l.precision, h = l.rounding;
  if (c.isFinite()) {
    if (c.isZero())
      return new l(c);
    if (c.abs().eq(1) && a + 4 <= ln)
      return o = T(l, a + 4, h).times(0.25), o.s = c.s, o;
  } else {
    if (!c.s)
      return new l(NaN);
    if (a + 4 <= ln)
      return o = T(l, a + 4, h).times(0.5), o.s = c.s, o;
  }
  for (l.precision = u = a + 10, l.rounding = 1, r = Math.min(28, u / m + 2 | 0), n = r; n; --n)
    c = c.div(c.times(c).plus(1).sqrt().plus(1));
  for (w = !1, t = Math.ceil(u / m), e = 1, f = c.times(c), o = new l(c), i = c; n !== -1; )
    if (i = i.times(f), s = o.minus(i.div(e += 2)), i = i.times(f), o = s.plus(i.div(e += 2)), o.d[t] !== void 0)
      for (n = t; o.d[n] === s.d[n] && n--; )
        ;
  return r && (o = o.times(2 << r - 1)), w = !0, g(o, l.precision = a, l.rounding = h, !0);
};
d.isFinite = function() {
  return !!this.d;
};
d.isInteger = d.isInt = function() {
  return !!this.d && S(this.e / m) > this.d.length - 2;
};
d.isNaN = function() {
  return !this.s;
};
d.isNegative = d.isNeg = function() {
  return this.s < 0;
};
d.isPositive = d.isPos = function() {
  return this.s > 0;
};
d.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
d.lessThan = d.lt = function(n) {
  return this.cmp(n) < 0;
};
d.lessThanOrEqualTo = d.lte = function(n) {
  return this.cmp(n) < 1;
};
d.logarithm = d.log = function(n) {
  var t, r, e, i, s, o, u, f, c = this, l = c.constructor, a = l.precision, h = l.rounding, p = 5;
  if (n == null)
    n = new l(10), t = !0;
  else {
    if (n = new l(n), r = n.d, n.s < 0 || !r || !r[0] || n.eq(1))
      return new l(NaN);
    t = n.eq(10);
  }
  if (r = c.d, c.s < 0 || !r || !r[0] || c.eq(1))
    return new l(r && !r[0] ? -1 / 0 : c.s != 1 ? NaN : r ? 0 : 1 / 0);
  if (t)
    if (r.length > 1)
      s = !0;
    else {
      for (i = r[0]; i % 10 === 0; )
        i /= 10;
      s = i !== 1;
    }
  if (w = !1, u = a + p, o = C(c, u), e = t ? nn(l, u + 10) : C(n, u), f = x(o, e, u, 1), W(f.d, i = a, h))
    do
      if (u += 10, o = C(c, u), e = t ? nn(l, u + 10) : C(n, u), f = x(o, e, u, 1), !s) {
        +O(f.d).slice(i + 1, i + 15) + 1 == 1e14 && (f = g(f, a + 1, 0));
        break;
      }
    while (W(f.d, i += 10, h));
  return w = !0, g(f, a, h);
};
d.minus = d.sub = function(n) {
  var t, r, e, i, s, o, u, f, c, l, a, h, p = this, N = p.constructor;
  if (n = new N(n), !p.d || !n.d)
    return !p.s || !n.s ? n = new N(NaN) : p.d ? n.s = -n.s : n = new N(n.d || p.s !== n.s ? p : NaN), n;
  if (p.s != n.s)
    return n.s = -n.s, p.plus(n);
  if (c = p.d, h = n.d, u = N.precision, f = N.rounding, !c[0] || !h[0]) {
    if (h[0])
      n.s = -n.s;
    else if (c[0])
      n = new N(p);
    else
      return new N(f === 3 ? -0 : 0);
    return w ? g(n, u, f) : n;
  }
  if (r = S(n.e / m), l = S(p.e / m), c = c.slice(), s = l - r, s) {
    for (a = s < 0, a ? (t = c, s = -s, o = h.length) : (t = h, r = l, o = c.length), e = Math.max(Math.ceil(u / m), o) + 2, s > e && (s = e, t.length = 1), t.reverse(), e = s; e--; )
      t.push(0);
    t.reverse();
  } else {
    for (e = c.length, o = h.length, a = e < o, a && (o = e), e = 0; e < o; e++)
      if (c[e] != h[e]) {
        a = c[e] < h[e];
        break;
      }
    s = 0;
  }
  for (a && (t = c, c = h, h = t, n.s = -n.s), o = c.length, e = h.length - o; e > 0; --e)
    c[o++] = 0;
  for (e = h.length; e > s; ) {
    if (c[--e] < h[e]) {
      for (i = e; i && c[--i] === 0; )
        c[i] = _ - 1;
      --c[i], c[e] += _;
    }
    c[e] -= h[e];
  }
  for (; c[--o] === 0; )
    c.pop();
  for (; c[0] === 0; c.shift())
    --r;
  return c[0] ? (n.d = c, n.e = rn(c, r), w ? g(n, u, f) : n) : new N(f === 3 ? -0 : 0);
};
d.modulo = d.mod = function(n) {
  var t, r = this, e = r.constructor;
  return n = new e(n), !r.d || !n.s || n.d && !n.d[0] ? new e(NaN) : !n.d || r.d && !r.d[0] ? g(new e(r), e.precision, e.rounding) : (w = !1, e.modulo == 9 ? (t = x(r, n.abs(), 0, 3, 1), t.s *= n.s) : t = x(r, n, 0, e.modulo, 1), t = t.times(n), w = !0, r.minus(t));
};
d.naturalExponential = d.exp = function() {
  return an(this);
};
d.naturalLogarithm = d.ln = function() {
  return C(this);
};
d.negated = d.neg = function() {
  var n = new this.constructor(this);
  return n.s = -n.s, g(n);
};
d.plus = d.add = function(n) {
  var t, r, e, i, s, o, u, f, c, l, a = this, h = a.constructor;
  if (n = new h(n), !a.d || !n.d)
    return !a.s || !n.s ? n = new h(NaN) : a.d || (n = new h(n.d || a.s === n.s ? a : NaN)), n;
  if (a.s != n.s)
    return n.s = -n.s, a.minus(n);
  if (c = a.d, l = n.d, u = h.precision, f = h.rounding, !c[0] || !l[0])
    return l[0] || (n = new h(a)), w ? g(n, u, f) : n;
  if (s = S(a.e / m), e = S(n.e / m), c = c.slice(), i = s - e, i) {
    for (i < 0 ? (r = c, i = -i, o = l.length) : (r = l, e = s, o = c.length), s = Math.ceil(u / m), o = s > o ? s + 1 : o + 1, i > o && (i = o, r.length = 1), r.reverse(); i--; )
      r.push(0);
    r.reverse();
  }
  for (o = c.length, i = l.length, o - i < 0 && (i = o, r = l, l = c, c = r), t = 0; i; )
    t = (c[--i] = c[i] + l[i] + t) / _ | 0, c[i] %= _;
  for (t && (c.unshift(t), ++e), o = c.length; c[--o] == 0; )
    c.pop();
  return n.d = c, n.e = rn(c, e), w ? g(n, u, f) : n;
};
d.precision = d.sd = function(n) {
  var t, r = this;
  if (n !== void 0 && n !== !!n && n !== 1 && n !== 0)
    throw Error(H + n);
  return r.d ? (t = Mn(r.d), n && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t;
};
d.round = function() {
  var n = this, t = n.constructor;
  return g(new t(n), n.e + 1, t.rounding);
};
d.sine = d.sin = function() {
  var n, t, r = this, e = r.constructor;
  return r.isFinite() ? r.isZero() ? new e(r) : (n = e.precision, t = e.rounding, e.precision = n + Math.max(r.e, r.sd()) + m, e.rounding = 1, r = Un(e, Sn(e, r)), e.precision = n, e.rounding = t, g(k > 2 ? r.neg() : r, n, t, !0)) : new e(NaN);
};
d.squareRoot = d.sqrt = function() {
  var n, t, r, e, i, s, o = this, u = o.d, f = o.e, c = o.s, l = o.constructor;
  if (c !== 1 || !u || !u[0])
    return new l(!c || c < 0 && (!u || u[0]) ? NaN : u ? o : 1 / 0);
  for (w = !1, c = Math.sqrt(+o), c == 0 || c == 1 / 0 ? (t = O(u), (t.length + f) % 2 == 0 && (t += "0"), c = Math.sqrt(t), f = S((f + 1) / 2) - (f < 0 || f % 2), c == 1 / 0 ? t = "5e" + f : (t = c.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + f), e = new l(t)) : e = new l(c.toString()), r = (f = l.precision) + 3; ; )
    if (s = e, e = s.plus(x(o, s, r + 2, 1)).times(0.5), O(s.d).slice(0, r) === (t = O(e.d)).slice(0, r))
      if (t = t.slice(r - 3, r + 1), t == "9999" || !i && t == "4999") {
        if (!i && (g(s, f + 1, 0), s.times(s).eq(o))) {
          e = s;
          break;
        }
        r += 4, i = 1;
      } else {
        (!+t || !+t.slice(1) && t.charAt(0) == "5") && (g(e, f + 1, 1), n = !e.times(e).eq(o));
        break;
      }
  return w = !0, g(e, f, l.rounding, n);
};
d.tangent = d.tan = function() {
  var n, t, r = this, e = r.constructor;
  return r.isFinite() ? r.isZero() ? new e(r) : (n = e.precision, t = e.rounding, e.precision = n + 10, e.rounding = 1, r = r.sin(), r.s = 1, r = x(r, new e(1).minus(r.times(r)).sqrt(), n + 10, 0), e.precision = n, e.rounding = t, g(k == 2 || k == 4 ? r.neg() : r, n, t, !0)) : new e(NaN);
};
d.times = d.mul = function(n) {
  var t, r, e, i, s, o, u, f, c, l = this, a = l.constructor, h = l.d, p = (n = new a(n)).d;
  if (n.s *= l.s, !h || !h[0] || !p || !p[0])
    return new a(!n.s || h && !h[0] && !p || p && !p[0] && !h ? NaN : !h || !p ? n.s / 0 : n.s * 0);
  for (r = S(l.e / m) + S(n.e / m), f = h.length, c = p.length, f < c && (s = h, h = p, p = s, o = f, f = c, c = o), s = [], o = f + c, e = o; e--; )
    s.push(0);
  for (e = c; --e >= 0; ) {
    for (t = 0, i = f + e; i > e; )
      u = s[i] + p[e] * h[i - e - 1] + t, s[i--] = u % _ | 0, t = u / _ | 0;
    s[i] = (s[i] + t) % _ | 0;
  }
  for (; !s[--o]; )
    s.pop();
  return t ? ++r : s.shift(), n.d = s, n.e = rn(s, r), w ? g(n, a.precision, a.rounding) : n;
};
d.toBinary = function(n, t) {
  return dn(this, 2, n, t);
};
d.toDecimalPlaces = d.toDP = function(n, t) {
  var r = this, e = r.constructor;
  return r = new e(r), n === void 0 ? r : (D(n, 0, B), t === void 0 ? t = e.rounding : D(t, 0, 8), g(r, n + r.e + 1, t));
};
d.toExponential = function(n, t) {
  var r, e = this, i = e.constructor;
  return n === void 0 ? r = L(e, !0) : (D(n, 0, B), t === void 0 ? t = i.rounding : D(t, 0, 8), e = g(new i(e), n + 1, t), r = L(e, !0, n + 1)), e.isNeg() && !e.isZero() ? "-" + r : r;
};
d.toFixed = function(n, t) {
  var r, e, i = this, s = i.constructor;
  return n === void 0 ? r = L(i) : (D(n, 0, B), t === void 0 ? t = s.rounding : D(t, 0, 8), e = g(new s(i), n + i.e + 1, t), r = L(e, !1, n + e.e + 1)), i.isNeg() && !i.isZero() ? "-" + r : r;
};
d.toFraction = function(n) {
  var t, r, e, i, s, o, u, f, c, l, a, h, p = this, N = p.d, v = p.constructor;
  if (!N)
    return new v(p);
  if (c = r = new v(1), e = f = new v(0), t = new v(e), s = t.e = Mn(N) - p.e - 1, o = s % m, t.d[0] = M(10, o < 0 ? m + o : o), n == null)
    n = s > 0 ? t : c;
  else {
    if (u = new v(n), !u.isInt() || u.lt(c))
      throw Error(H + u);
    n = u.gt(t) ? s > 0 ? t : c : u;
  }
  for (w = !1, u = new v(O(N)), l = v.precision, v.precision = s = N.length * m * 2; a = x(u, t, 0, 1, 1), i = r.plus(a.times(e)), i.cmp(n) != 1; )
    r = e, e = i, i = c, c = f.plus(a.times(i)), f = i, i = t, t = u.minus(a.times(i)), u = i;
  return i = x(n.minus(r), e, 0, 1, 1), f = f.plus(i.times(c)), r = r.plus(i.times(e)), f.s = c.s = p.s, h = x(c, e, s, 1).minus(p).abs().cmp(x(f, r, s, 1).minus(p).abs()) < 1 ? [c, e] : [f, r], v.precision = l, w = !0, h;
};
d.toHexadecimal = d.toHex = function(n, t) {
  return dn(this, 16, n, t);
};
d.toNearest = function(n, t) {
  var r = this, e = r.constructor;
  if (r = new e(r), n == null) {
    if (!r.d)
      return r;
    n = new e(1), t = e.rounding;
  } else {
    if (n = new e(n), t === void 0 ? t = e.rounding : D(t, 0, 8), !r.d)
      return n.s ? r : n;
    if (!n.d)
      return n.s && (n.s = r.s), n;
  }
  return n.d[0] ? (w = !1, r = x(r, n, 0, t, 1).times(n), w = !0, g(r)) : (n.s = r.s, r = n), r;
};
d.toNumber = function() {
  return +this;
};
d.toOctal = function(n, t) {
  return dn(this, 8, n, t);
};
d.toPower = d.pow = function(n) {
  var t, r, e, i, s, o, u = this, f = u.constructor, c = +(n = new f(n));
  if (!u.d || !n.d || !u.d[0] || !n.d[0])
    return new f(M(+u, c));
  if (u = new f(u), u.eq(1))
    return u;
  if (e = f.precision, s = f.rounding, n.eq(1))
    return g(u, e, s);
  if (t = S(n.e / m), t >= n.d.length - 1 && (r = c < 0 ? -c : c) <= Rn)
    return i = On(f, u, r, e), n.s < 0 ? new f(1).div(i) : g(i, e, s);
  if (o = u.s, o < 0) {
    if (t < n.d.length - 1)
      return new f(NaN);
    if (n.d[t] & 1 || (o = 1), u.e == 0 && u.d[0] == 1 && u.d.length == 1)
      return u.s = o, u;
  }
  return r = M(+u, c), t = r == 0 || !isFinite(r) ? S(c * (Math.log("0." + O(u.d)) / Math.LN10 + u.e + 1)) : new f(r + "").e, t > f.maxE + 1 || t < f.minE - 1 ? new f(t > 0 ? o / 0 : 0) : (w = !1, f.rounding = u.s = 1, r = Math.min(12, (t + "").length), i = an(n.times(C(u, e + r)), e), i.d && (i = g(i, e + 5, 1), W(i.d, e, s) && (t = e + 10, i = g(an(n.times(C(u, t + r)), t), t + 5, 1), +O(i.d).slice(e + 1, e + 15) + 1 == 1e14 && (i = g(i, e + 1, 0)))), i.s = o, w = !0, f.rounding = s, g(i, e, s));
};
d.toPrecision = function(n, t) {
  var r, e = this, i = e.constructor;
  return n === void 0 ? r = L(e, e.e <= i.toExpNeg || e.e >= i.toExpPos) : (D(n, 1, B), t === void 0 ? t = i.rounding : D(t, 0, 8), e = g(new i(e), n, t), r = L(e, n <= e.e || e.e <= i.toExpNeg, n)), e.isNeg() && !e.isZero() ? "-" + r : r;
};
d.toSignificantDigits = d.toSD = function(n, t) {
  var r = this, e = r.constructor;
  return n === void 0 ? (n = e.precision, t = e.rounding) : (D(n, 1, B), t === void 0 ? t = e.rounding : D(t, 0, 8)), g(new e(r), n, t);
};
d.toString = function() {
  var n = this, t = n.constructor, r = L(n, n.e <= t.toExpNeg || n.e >= t.toExpPos);
  return n.isNeg() && !n.isZero() ? "-" + r : r;
};
d.truncated = d.trunc = function() {
  return g(new this.constructor(this), this.e + 1, 1);
};
d.valueOf = d.toJSON = function() {
  var n = this, t = n.constructor, r = L(n, n.e <= t.toExpNeg || n.e >= t.toExpPos);
  return n.isNeg() ? "-" + r : r;
};
function O(n) {
  var t, r, e, i = n.length - 1, s = "", o = n[0];
  if (i > 0) {
    for (s += o, t = 1; t < i; t++)
      e = n[t] + "", r = m - e.length, r && (s += I(r)), s += e;
    o = n[t], e = o + "", r = m - e.length, r && (s += I(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; )
    o /= 10;
  return s + o;
}
function D(n, t, r) {
  if (n !== ~~n || n < t || n > r)
    throw Error(H + n);
}
function W(n, t, r, e) {
  var i, s, o, u;
  for (s = n[0]; s >= 10; s /= 10)
    --t;
  return --t < 0 ? (t += m, i = 0) : (i = Math.ceil((t + 1) / m), t %= m), s = M(10, m - t), u = n[i] % s | 0, e == null ? t < 3 ? (t == 0 ? u = u / 100 | 0 : t == 1 && (u = u / 10 | 0), o = r < 4 && u == 99999 || r > 3 && u == 49999 || u == 5e4 || u == 0) : o = (r < 4 && u + 1 == s || r > 3 && u + 1 == s / 2) && (n[i + 1] / s / 100 | 0) == M(10, t - 2) - 1 || (u == s / 2 || u == 0) && (n[i + 1] / s / 100 | 0) == 0 : t < 4 ? (t == 0 ? u = u / 1e3 | 0 : t == 1 ? u = u / 100 | 0 : t == 2 && (u = u / 10 | 0), o = (e || r < 4) && u == 9999 || !e && r > 3 && u == 4999) : o = ((e || r < 4) && u + 1 == s || !e && r > 3 && u + 1 == s / 2) && (n[i + 1] / s / 1e3 | 0) == M(10, t - 3) - 1, o;
}
function Q(n, t, r) {
  for (var e, i = [0], s, o = 0, u = n.length; o < u; ) {
    for (s = i.length; s--; )
      i[s] *= t;
    for (i[0] += cn.indexOf(n.charAt(o++)), e = 0; e < i.length; e++)
      i[e] > r - 1 && (i[e + 1] === void 0 && (i[e + 1] = 0), i[e + 1] += i[e] / r | 0, i[e] %= r);
  }
  return i.reverse();
}
function _n(n, t) {
  var r, e, i;
  if (t.isZero())
    return t;
  e = t.d.length, e < 32 ? (r = Math.ceil(e / 3), i = (1 / en(4, r)).toString()) : (r = 16, i = "2.3283064365386962890625e-10"), n.precision += r, t = j(n, 1, t.times(i), new n(1));
  for (var s = r; s--; ) {
    var o = t.times(t);
    t = o.times(o).minus(o).times(8).plus(1);
  }
  return n.precision -= r, t;
}
var x = function() {
  function n(e, i, s) {
    var o, u = 0, f = e.length;
    for (e = e.slice(); f--; )
      o = e[f] * i + u, e[f] = o % s | 0, u = o / s | 0;
    return u && e.unshift(u), e;
  }
  function t(e, i, s, o) {
    var u, f;
    if (s != o)
      f = s > o ? 1 : -1;
    else
      for (u = f = 0; u < s; u++)
        if (e[u] != i[u]) {
          f = e[u] > i[u] ? 1 : -1;
          break;
        }
    return f;
  }
  function r(e, i, s, o) {
    for (var u = 0; s--; )
      e[s] -= u, u = e[s] < i[s] ? 1 : 0, e[s] = u * o + e[s] - i[s];
    for (; !e[0] && e.length > 1; )
      e.shift();
  }
  return function(e, i, s, o, u, f) {
    var c, l, a, h, p, N, v, A, y, P, b, q, J, U, sn, z, V, on, R, G, K = e.constructor, un = e.s == i.s ? 1 : -1, F = e.d, E = i.d;
    if (!F || !F[0] || !E || !E[0])
      return new K(
        !e.s || !i.s || (F ? E && F[0] == E[0] : !E) ? NaN : F && F[0] == 0 || !E ? un * 0 : un / 0
      );
    for (f ? (p = 1, l = e.e - i.e) : (f = _, p = m, l = S(e.e / p) - S(i.e / p)), R = E.length, V = F.length, y = new K(un), P = y.d = [], a = 0; E[a] == (F[a] || 0); a++)
      ;
    if (E[a] > (F[a] || 0) && l--, s == null ? (U = s = K.precision, o = K.rounding) : u ? U = s + (e.e - i.e) + 1 : U = s, U < 0)
      P.push(1), N = !0;
    else {
      if (U = U / p + 2 | 0, a = 0, R == 1) {
        for (h = 0, E = E[0], U++; (a < V || h) && U--; a++)
          sn = h * f + (F[a] || 0), P[a] = sn / E | 0, h = sn % E | 0;
        N = h || a < V;
      } else {
        for (h = f / (E[0] + 1) | 0, h > 1 && (E = n(E, h, f), F = n(F, h, f), R = E.length, V = F.length), z = R, b = F.slice(0, R), q = b.length; q < R; )
          b[q++] = 0;
        G = E.slice(), G.unshift(0), on = E[0], E[1] >= f / 2 && ++on;
        do
          h = 0, c = t(E, b, R, q), c < 0 ? (J = b[0], R != q && (J = J * f + (b[1] || 0)), h = J / on | 0, h > 1 ? (h >= f && (h = f - 1), v = n(E, h, f), A = v.length, q = b.length, c = t(v, b, A, q), c == 1 && (h--, r(v, R < A ? G : E, A, f))) : (h == 0 && (c = h = 1), v = E.slice()), A = v.length, A < q && v.unshift(0), r(b, v, q, f), c == -1 && (q = b.length, c = t(E, b, R, q), c < 1 && (h++, r(b, R < q ? G : E, q, f))), q = b.length) : c === 0 && (h++, b = [0]), P[a++] = h, c && b[0] ? b[q++] = F[z] || 0 : (b = [F[z]], q = 1);
        while ((z++ < V || b[0] !== void 0) && U--);
        N = b[0] !== void 0;
      }
      P[0] || P.shift();
    }
    if (p == 1)
      y.e = l, Nn = N;
    else {
      for (a = 1, h = P[0]; h >= 10; h /= 10)
        a++;
      y.e = a + l * p - 1, g(y, u ? s + y.e + 1 : s, o, N);
    }
    return y;
  };
}();
function g(n, t, r, e) {
  var i, s, o, u, f, c, l, a, h, p = n.constructor;
  n:
    if (t != null) {
      if (a = n.d, !a)
        return n;
      for (i = 1, u = a[0]; u >= 10; u /= 10)
        i++;
      if (s = t - i, s < 0)
        s += m, o = t, l = a[h = 0], f = l / M(10, i - o - 1) % 10 | 0;
      else if (h = Math.ceil((s + 1) / m), u = a.length, h >= u)
        if (e) {
          for (; u++ <= h; )
            a.push(0);
          l = f = 0, i = 1, s %= m, o = s - m + 1;
        } else
          break n;
      else {
        for (l = u = a[h], i = 1; u >= 10; u /= 10)
          i++;
        s %= m, o = s - m + i, f = o < 0 ? 0 : l / M(10, i - o - 1) % 10 | 0;
      }
      if (e = e || t < 0 || a[h + 1] !== void 0 || (o < 0 ? l : l % M(10, i - o - 1)), c = r < 4 ? (f || e) && (r == 0 || r == (n.s < 0 ? 3 : 2)) : f > 5 || f == 5 && (r == 4 || e || r == 6 && (s > 0 ? o > 0 ? l / M(10, i - o) : 0 : a[h - 1]) % 10 & 1 || r == (n.s < 0 ? 8 : 7)), t < 1 || !a[0])
        return a.length = 0, c ? (t -= n.e + 1, a[0] = M(10, (m - t % m) % m), n.e = -t || 0) : a[0] = n.e = 0, n;
      if (s == 0 ? (a.length = h, u = 1, h--) : (a.length = h + 1, u = M(10, m - s), a[h] = o > 0 ? (l / M(10, i - o) % M(10, o) | 0) * u : 0), c)
        for (; ; )
          if (h == 0) {
            for (s = 1, o = a[0]; o >= 10; o /= 10)
              s++;
            for (o = a[0] += u, u = 1; o >= 10; o /= 10)
              u++;
            s != u && (n.e++, a[0] == _ && (a[0] = 1));
            break;
          } else {
            if (a[h] += u, a[h] != _)
              break;
            a[h--] = 0, u = 1;
          }
      for (s = a.length; a[--s] === 0; )
        a.pop();
    }
  return w && (n.e > p.maxE ? (n.d = null, n.e = NaN) : n.e < p.minE && (n.e = 0, n.d = [0])), n;
}
function L(n, t, r) {
  if (!n.isFinite())
    return Fn(n);
  var e, i = n.e, s = O(n.d), o = s.length;
  return t ? (r && (e = r - o) > 0 ? s = s.charAt(0) + "." + s.slice(1) + I(e) : o > 1 && (s = s.charAt(0) + "." + s.slice(1)), s = s + (n.e < 0 ? "e" : "e+") + n.e) : i < 0 ? (s = "0." + I(-i - 1) + s, r && (e = r - o) > 0 && (s += I(e))) : i >= o ? (s += I(i + 1 - o), r && (e = r - i - 1) > 0 && (s = s + "." + I(e))) : ((e = i + 1) < o && (s = s.slice(0, e) + "." + s.slice(e)), r && (e = r - o) > 0 && (i + 1 === o && (s += "."), s += I(e))), s;
}
function rn(n, t) {
  var r = n[0];
  for (t *= m; r >= 10; r /= 10)
    t++;
  return t;
}
function nn(n, t, r) {
  if (t > Tn)
    throw w = !0, r && (n.precision = r), Error(bn);
  return g(new n(X), t, 1, !0);
}
function T(n, t, r) {
  if (t > ln)
    throw Error(bn);
  return g(new n(Y), t, r, !0);
}
function Mn(n) {
  var t = n.length - 1, r = t * m + 1;
  if (t = n[t], t) {
    for (; t % 10 == 0; t /= 10)
      r--;
    for (t = n[0]; t >= 10; t /= 10)
      r++;
  }
  return r;
}
function I(n) {
  for (var t = ""; n--; )
    t += "0";
  return t;
}
function On(n, t, r, e) {
  var i, s = new n(1), o = Math.ceil(e / m + 4);
  for (w = !1; ; ) {
    if (r % 2 && (s = s.times(t), mn(s.d, o) && (i = !0)), r = S(r / 2), r === 0) {
      r = s.d.length - 1, i && s.d[r] === 0 && ++s.d[r];
      break;
    }
    t = t.times(t), mn(t.d, o);
  }
  return w = !0, s;
}
function pn(n) {
  return n.d[n.d.length - 1] & 1;
}
function qn(n, t, r) {
  for (var e, i = new n(t[0]), s = 0; ++s < t.length; )
    if (e = new n(t[s]), e.s)
      i[r](e) && (i = e);
    else {
      i = e;
      break;
    }
  return i;
}
function an(n, t) {
  var r, e, i, s, o, u, f, c = 0, l = 0, a = 0, h = n.constructor, p = h.rounding, N = h.precision;
  if (!n.d || !n.d[0] || n.e > 17)
    return new h(n.d ? n.d[0] ? n.s < 0 ? 0 : 1 / 0 : 1 : n.s ? n.s < 0 ? 0 : n : 0 / 0);
  for (t == null ? (w = !1, f = N) : f = t, u = new h(0.03125); n.e > -2; )
    n = n.times(u), a += 5;
  for (e = Math.log(M(2, a)) / Math.LN10 * 2 + 5 | 0, f += e, r = s = o = new h(1), h.precision = f; ; ) {
    if (s = g(s.times(n), f, 1), r = r.times(++l), u = o.plus(x(s, r, f, 1)), O(u.d).slice(0, f) === O(o.d).slice(0, f)) {
      for (i = a; i--; )
        o = g(o.times(o), f, 1);
      if (t == null)
        if (c < 3 && W(o.d, f - e, p, c))
          h.precision = f += 10, r = s = u = new h(1), l = 0, c++;
        else
          return g(o, h.precision = N, p, w = !0);
      else
        return h.precision = N, o;
    }
    o = u;
  }
}
function C(n, t) {
  var r, e, i, s, o, u, f, c, l, a, h, p = 1, N = 10, v = n, A = v.d, y = v.constructor, P = y.rounding, b = y.precision;
  if (v.s < 0 || !A || !A[0] || !v.e && A[0] == 1 && A.length == 1)
    return new y(A && !A[0] ? -1 / 0 : v.s != 1 ? NaN : A ? 0 : v);
  if (t == null ? (w = !1, l = b) : l = t, y.precision = l += N, r = O(A), e = r.charAt(0), Math.abs(s = v.e) < 15e14) {
    for (; e < 7 && e != 1 || e == 1 && r.charAt(1) > 3; )
      v = v.times(n), r = O(v.d), e = r.charAt(0), p++;
    s = v.e, e > 1 ? (v = new y("0." + r), s++) : v = new y(e + "." + r.slice(1));
  } else
    return c = nn(y, l + 2, b).times(s + ""), v = C(new y(e + "." + r.slice(1)), l - N).plus(c), y.precision = b, t == null ? g(v, b, P, w = !0) : v;
  for (a = v, f = o = v = x(v.minus(1), v.plus(1), l, 1), h = g(v.times(v), l, 1), i = 3; ; ) {
    if (o = g(o.times(h), l, 1), c = f.plus(x(o, new y(i), l, 1)), O(c.d).slice(0, l) === O(f.d).slice(0, l))
      if (f = f.times(2), s !== 0 && (f = f.plus(nn(y, l + 2, b).times(s + ""))), f = x(f, new y(p), l, 1), t == null)
        if (W(f.d, l - N, P, u))
          y.precision = l += N, c = o = v = x(a.minus(1), a.plus(1), l, 1), h = g(v.times(v), l, 1), i = u = 1;
        else
          return g(f, y.precision = b, P, w = !0);
      else
        return y.precision = b, f;
    f = c, i += 2;
  }
}
function Fn(n) {
  return String(n.s * n.s / 0);
}
function hn(n, t) {
  var r, e, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (e = t.search(/e/i)) > 0 ? (r < 0 && (r = e), r += +t.slice(e + 1), t = t.substring(0, e)) : r < 0 && (r = t.length), e = 0; t.charCodeAt(e) === 48; e++)
    ;
  for (i = t.length; t.charCodeAt(i - 1) === 48; --i)
    ;
  if (t = t.slice(e, i), t) {
    if (i -= e, n.e = r = r - e - 1, n.d = [], e = (r + 1) % m, r < 0 && (e += m), e < i) {
      for (e && n.d.push(+t.slice(0, e)), i -= m; e < i; )
        n.d.push(+t.slice(e, e += m));
      t = t.slice(e), e = m - t.length;
    } else
      e -= i;
    for (; e--; )
      t += "0";
    n.d.push(+t), w && (n.e > n.constructor.maxE ? (n.d = null, n.e = NaN) : n.e < n.constructor.minE && (n.e = 0, n.d = [0]));
  } else
    n.e = 0, n.d = [0];
  return n;
}
function Ln(n, t) {
  var r, e, i, s, o, u, f, c, l;
  if (t.indexOf("_") > -1) {
    if (t = t.replace(/(\d)_(?=\d)/g, "$1"), yn.test(t))
      return hn(n, t);
  } else if (t === "Infinity" || t === "NaN")
    return +t || (n.s = NaN), n.e = NaN, n.d = null, n;
  if (Zn.test(t))
    r = 16, t = t.toLowerCase();
  else if (Dn.test(t))
    r = 2;
  else if (Pn.test(t))
    r = 8;
  else
    throw Error(H + t);
  for (s = t.search(/p/i), s > 0 ? (f = +t.slice(s + 1), t = t.substring(2, s)) : t = t.slice(2), s = t.indexOf("."), o = s >= 0, e = n.constructor, o && (t = t.replace(".", ""), u = t.length, s = u - s, i = On(e, new e(r), s, s * 2)), c = Q(t, r, _), l = c.length - 1, s = l; c[s] === 0; --s)
    c.pop();
  return s < 0 ? new e(n.s * 0) : (n.e = rn(c, l), n.d = c, w = !1, o && (n = x(n, i, u * 4)), f && (n = n.times(Math.abs(f) < 54 ? M(2, f) : Z.pow(2, f))), w = !0, n);
}
function Un(n, t) {
  var r, e = t.d.length;
  if (e < 3)
    return t.isZero() ? t : j(n, 2, t, t);
  r = 1.4 * Math.sqrt(e), r = r > 16 ? 16 : r | 0, t = t.times(1 / en(5, r)), t = j(n, 2, t, t);
  for (var i, s = new n(5), o = new n(16), u = new n(20); r--; )
    i = t.times(t), t = t.times(s.plus(i.times(o.times(i).minus(u))));
  return t;
}
function j(n, t, r, e, i) {
  var s, o, u, f, c = n.precision, l = Math.ceil(c / m);
  for (w = !1, f = r.times(r), u = new n(e); ; ) {
    if (o = x(u.times(f), new n(t++ * t++), c, 1), u = i ? e.plus(o) : e.minus(o), e = x(o.times(f), new n(t++ * t++), c, 1), o = u.plus(e), o.d[l] !== void 0) {
      for (s = l; o.d[s] === u.d[s] && s--; )
        ;
      if (s == -1)
        break;
    }
    s = u, u = e, e = o, o = s;
  }
  return w = !0, o.d.length = l + 1, o;
}
function en(n, t) {
  for (var r = n; --t; )
    r *= n;
  return r;
}
function Sn(n, t) {
  var r, e = t.s < 0, i = T(n, n.precision, 1), s = i.times(0.5);
  if (t = t.abs(), t.lte(s))
    return k = e ? 4 : 1, t;
  if (r = t.divToInt(i), r.isZero())
    k = e ? 3 : 2;
  else {
    if (t = t.minus(r.times(i)), t.lte(s))
      return k = pn(r) ? e ? 2 : 3 : e ? 4 : 1, t;
    k = pn(r) ? e ? 1 : 4 : e ? 3 : 2;
  }
  return t.minus(i).abs();
}
function dn(n, t, r, e) {
  var i, s, o, u, f, c, l, a, h, p = n.constructor, N = r !== void 0;
  if (N ? (D(r, 1, B), e === void 0 ? e = p.rounding : D(e, 0, 8)) : (r = p.precision, e = p.rounding), !n.isFinite())
    l = Fn(n);
  else {
    for (l = L(n), o = l.indexOf("."), N ? (i = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2)) : i = t, o >= 0 && (l = l.replace(".", ""), h = new p(1), h.e = l.length - o, h.d = Q(L(h), 10, i), h.e = h.d.length), a = Q(l, 10, i), s = f = a.length; a[--f] == 0; )
      a.pop();
    if (!a[0])
      l = N ? "0p+0" : "0";
    else {
      if (o < 0 ? s-- : (n = new p(n), n.d = a, n.e = s, n = x(n, h, r, e, 0, i), a = n.d, s = n.e, c = Nn), o = a[r], u = i / 2, c = c || a[r + 1] !== void 0, c = e < 4 ? (o !== void 0 || c) && (e === 0 || e === (n.s < 0 ? 3 : 2)) : o > u || o === u && (e === 4 || c || e === 6 && a[r - 1] & 1 || e === (n.s < 0 ? 8 : 7)), a.length = r, c)
        for (; ++a[--r] > i - 1; )
          a[r] = 0, r || (++s, a.unshift(1));
      for (f = a.length; !a[f - 1]; --f)
        ;
      for (o = 0, l = ""; o < f; o++)
        l += cn.charAt(a[o]);
      if (N) {
        if (f > 1)
          if (t == 16 || t == 8) {
            for (o = t == 16 ? 4 : 3, --f; f % o; f++)
              l += "0";
            for (a = Q(l, i, t), f = a.length; !a[f - 1]; --f)
              ;
            for (o = 1, l = "1."; o < f; o++)
              l += cn.charAt(a[o]);
          } else
            l = l.charAt(0) + "." + l.slice(1);
        l = l + (s < 0 ? "p" : "p+") + s;
      } else if (s < 0) {
        for (; ++s; )
          l = "0" + l;
        l = "0." + l;
      } else if (++s > f)
        for (s -= f; s--; )
          l += "0";
      else
        s < f && (l = l.slice(0, s) + "." + l.slice(s));
    }
    l = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + l;
  }
  return n.s < 0 ? "-" + l : l;
}
function mn(n, t) {
  if (n.length > t)
    return n.length = t, !0;
}
function kn(n) {
  return new this(n).abs();
}
function In(n) {
  return new this(n).acos();
}
function Cn(n) {
  return new this(n).acosh();
}
function Hn(n, t) {
  return new this(n).plus(t);
}
function Bn(n) {
  return new this(n).asin();
}
function $n(n) {
  return new this(n).asinh();
}
function jn(n) {
  return new this(n).atan();
}
function Vn(n) {
  return new this(n).atanh();
}
function Wn(n, t) {
  n = new this(n), t = new this(t);
  var r, e = this.precision, i = this.rounding, s = e + 4;
  return !n.s || !t.s ? r = new this(NaN) : !n.d && !t.d ? (r = T(this, s, 1).times(t.s > 0 ? 0.25 : 0.75), r.s = n.s) : !t.d || n.isZero() ? (r = t.s < 0 ? T(this, e, i) : new this(0), r.s = n.s) : !n.d || t.isZero() ? (r = T(this, s, 1).times(0.5), r.s = n.s) : t.s < 0 ? (this.precision = s, this.rounding = 1, r = this.atan(x(n, t, s, 1)), t = T(this, s, 1), this.precision = e, this.rounding = i, r = n.s < 0 ? r.minus(t) : r.plus(t)) : r = this.atan(x(n, t, s, 1)), r;
}
function Jn(n) {
  return new this(n).cbrt();
}
function zn(n) {
  return g(n = new this(n), n.e + 1, 2);
}
function Gn(n, t, r) {
  return new this(n).clamp(t, r);
}
function Kn(n) {
  if (!n || typeof n != "object")
    throw Error(tn + "Object expected");
  var t, r, e, i = n.defaults === !0, s = [
    "precision",
    1,
    B,
    "rounding",
    0,
    8,
    "toExpNeg",
    -$,
    0,
    "toExpPos",
    0,
    $,
    "maxE",
    0,
    $,
    "minE",
    -$,
    0,
    "modulo",
    0,
    9
  ];
  for (t = 0; t < s.length; t += 3)
    if (r = s[t], i && (this[r] = fn[r]), (e = n[r]) !== void 0)
      if (S(e) === e && e >= s[t + 1] && e <= s[t + 2])
        this[r] = e;
      else
        throw Error(H + r + ": " + e);
  if (r = "crypto", i && (this[r] = fn[r]), (e = n[r]) !== void 0)
    if (e === !0 || e === !1 || e === 0 || e === 1)
      if (e)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(xn);
      else
        this[r] = !1;
    else
      throw Error(H + r + ": " + e);
  return this;
}
function Qn(n) {
  return new this(n).cos();
}
function Xn(n) {
  return new this(n).cosh();
}
function An(n) {
  var t, r, e;
  function i(s) {
    var o, u, f, c = this;
    if (!(c instanceof i))
      return new i(s);
    if (c.constructor = i, wn(s)) {
      c.s = s.s, w ? !s.d || s.e > i.maxE ? (c.e = NaN, c.d = null) : s.e < i.minE ? (c.e = 0, c.d = [0]) : (c.e = s.e, c.d = s.d.slice()) : (c.e = s.e, c.d = s.d ? s.d.slice() : s.d);
      return;
    }
    if (f = typeof s, f === "number") {
      if (s === 0) {
        c.s = 1 / s < 0 ? -1 : 1, c.e = 0, c.d = [0];
        return;
      }
      if (s < 0 ? (s = -s, c.s = -1) : c.s = 1, s === ~~s && s < 1e7) {
        for (o = 0, u = s; u >= 10; u /= 10)
          o++;
        w ? o > i.maxE ? (c.e = NaN, c.d = null) : o < i.minE ? (c.e = 0, c.d = [0]) : (c.e = o, c.d = [s]) : (c.e = o, c.d = [s]);
        return;
      } else if (s * 0 !== 0) {
        s || (c.s = NaN), c.e = NaN, c.d = null;
        return;
      }
      return hn(c, s.toString());
    } else if (f !== "string")
      throw Error(H + s);
    return (u = s.charCodeAt(0)) === 45 ? (s = s.slice(1), c.s = -1) : (u === 43 && (s = s.slice(1)), c.s = 1), yn.test(s) ? hn(c, s) : Ln(c, s);
  }
  if (i.prototype = d, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = Kn, i.clone = An, i.isDecimal = wn, i.abs = kn, i.acos = In, i.acosh = Cn, i.add = Hn, i.asin = Bn, i.asinh = $n, i.atan = jn, i.atanh = Vn, i.atan2 = Wn, i.cbrt = Jn, i.ceil = zn, i.clamp = Gn, i.cos = Qn, i.cosh = Xn, i.div = Yn, i.exp = nt, i.floor = tt, i.hypot = rt, i.ln = et, i.log = it, i.log10 = ot, i.log2 = st, i.max = ut, i.min = ct, i.mod = ft, i.mul = lt, i.pow = at, i.random = ht, i.round = dt, i.sign = gt, i.sin = pt, i.sinh = mt, i.sqrt = wt, i.sub = vt, i.sum = Nt, i.tan = bt, i.tanh = xt, i.trunc = Et, n === void 0 && (n = {}), n && n.defaults !== !0)
    for (e = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0; t < e.length; )
      n.hasOwnProperty(r = e[t++]) || (n[r] = this[r]);
  return i.config(n), i;
}
function Yn(n, t) {
  return new this(n).div(t);
}
function nt(n) {
  return new this(n).exp();
}
function tt(n) {
  return g(n = new this(n), n.e + 1, 3);
}
function rt() {
  var n, t, r = new this(0);
  for (w = !1, n = 0; n < arguments.length; )
    if (t = new this(arguments[n++]), t.d)
      r.d && (r = r.plus(t.times(t)));
    else {
      if (t.s)
        return w = !0, new this(1 / 0);
      r = t;
    }
  return w = !0, r.sqrt();
}
function wn(n) {
  return n instanceof Z || n && n.toStringTag === En || !1;
}
function et(n) {
  return new this(n).ln();
}
function it(n, t) {
  return new this(n).log(t);
}
function st(n) {
  return new this(n).log(2);
}
function ot(n) {
  return new this(n).log(10);
}
function ut() {
  return qn(this, arguments, "lt");
}
function ct() {
  return qn(this, arguments, "gt");
}
function ft(n, t) {
  return new this(n).mod(t);
}
function lt(n, t) {
  return new this(n).mul(t);
}
function at(n, t) {
  return new this(n).pow(t);
}
function ht(n) {
  var t, r, e, i, s = 0, o = new this(1), u = [];
  if (n === void 0 ? n = this.precision : D(n, 1, B), e = Math.ceil(n / m), this.crypto)
    if (crypto.getRandomValues)
      for (t = crypto.getRandomValues(new Uint32Array(e)); s < e; )
        i = t[s], i >= 429e7 ? t[s] = crypto.getRandomValues(new Uint32Array(1))[0] : u[s++] = i % 1e7;
    else if (crypto.randomBytes) {
      for (t = crypto.randomBytes(e *= 4); s < e; )
        i = t[s] + (t[s + 1] << 8) + (t[s + 2] << 16) + ((t[s + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, s) : (u.push(i % 1e7), s += 4);
      s = e / 4;
    } else
      throw Error(xn);
  else
    for (; s < e; )
      u[s++] = Math.random() * 1e7 | 0;
  for (e = u[--s], n %= m, e && n && (i = M(10, m - n), u[s] = (e / i | 0) * i); u[s] === 0; s--)
    u.pop();
  if (s < 0)
    r = 0, u = [0];
  else {
    for (r = -1; u[0] === 0; r -= m)
      u.shift();
    for (e = 1, i = u[0]; i >= 10; i /= 10)
      e++;
    e < m && (r -= m - e);
  }
  return o.e = r, o.d = u, o;
}
function dt(n) {
  return g(n = new this(n), n.e + 1, this.rounding);
}
function gt(n) {
  return n = new this(n), n.d ? n.d[0] ? n.s : 0 * n.s : n.s || NaN;
}
function pt(n) {
  return new this(n).sin();
}
function mt(n) {
  return new this(n).sinh();
}
function wt(n) {
  return new this(n).sqrt();
}
function vt(n, t) {
  return new this(n).sub(t);
}
function Nt() {
  var n = 0, t = arguments, r = new this(t[n]);
  for (w = !1; r.s && ++n < t.length; )
    r = r.plus(t[n]);
  return w = !0, g(r, this.precision, this.rounding);
}
function bt(n) {
  return new this(n).tan();
}
function xt(n) {
  return new this(n).tanh();
}
function Et(n) {
  return g(n = new this(n), n.e + 1, 1);
}
d[Symbol.for("nodejs.util.inspect.custom")] = d.toString;
d[Symbol.toStringTag] = "Decimal";
var Z = d.constructor = An(fn);
X = new Z(X);
Y = new Z(Y);
const vn = {
  add: function(n, t) {
    return new Z(n).add(new Z(t)).toNumber();
  },
  subtract: function(n, t) {
    return new Z(n).sub(new Z(t)).toNumber();
  },
  multiply: function(n, t) {
    return new Z(n).mul(new Z(t)).toNumber();
  },
  divide: function(n, t) {
    return new Z(n).div(new Z(t)).toNumber();
  }
};
Number.prototype.toFixedNew = function(n) {
  let t = this;
  return t < 0 ? (t = t * -1, (Math.round(vn.multiply(t, Math.pow(10, n))) / Math.pow(10, n) * -1).toFixed(n)) : (Math.round(vn.multiply(t, Math.pow(10, n))) / Math.pow(10, n)).toFixed(n);
};
Number.prototype.countDecimals = function() {
  return Math.floor(this.valueOf()) === this.valueOf() ? 0 : this.toString().split(".")[1].length || 0;
};
const yt = function(n, t = 2, r = !0, e = ",") {
  let i = Number(n);
  if (gn(i)) {
    let s = "";
    if (gn(t))
      if (r)
        s = i.toFixedNew(t).toString();
      else {
        let u = String(i).split(".")[1];
        u = u ? u.length : 0, u > t && (u = t), s = i.toFixedNew(u).toString();
      }
    else
      s = i.toString();
    let o = s.split(".");
    return o[0] = o[0].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + (e || ",")), o.join(".");
  }
  return n;
};
export {
  yt as thousands
};
//# sourceMappingURL=index.js.map
