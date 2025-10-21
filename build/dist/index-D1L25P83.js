import { defineComponent as fs, useAttrs as el, computed as ir, resolveComponent as lo, createBlock as nl, openBlock as Qn, mergeProps as il, unref as Be, withCtx as xi, renderSlot as rl, ref as me, onMounted as ps, onUnmounted as co, createElementBlock as Ei, normalizeStyle as yi, createCommentVNode as uo, createElementVNode as Jt, reactive as sl, watch as al, withModifiers as ol, toDisplayString as oe, normalizeClass as ll, createVNode as Cn, createTextVNode as Li } from "vue";
const cl = /* @__PURE__ */ fs({
  name: "WyButton",
  __name: "Button",
  setup(i) {
    const t = el(), e = ir(() => ["wy-button"]), n = (r) => {
      var s;
      typeof t.onClick == "function" && t.onClick(r), console.log("[Button Click]", {
        type: t.type,
        text: (s = r.target.textContent) == null ? void 0 : s.trim()
      });
    };
    return (r, s) => {
      const a = lo("ElButton");
      return Qn(), nl(a, il(Be(t), {
        class: [Be(t).class, e.value],
        onClick: n
      }), {
        default: xi(() => [
          rl(r.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 16, ["class"]);
    };
  }
}), pr = (i, t) => {
  const e = i.__vccOpts || i;
  for (const [n, r] of t)
    e[n] = r;
  return e;
}, ho = /* @__PURE__ */ pr(cl, [["__scopeId", "data-v-1a19201c"]]), mr = (i) => (i.install = (t) => {
  const e = i.name;
  e && t.component(e, i);
}, i), ul = mr(ho);
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const ms = "164", nm = { ROTATE: 0, DOLLY: 1, PAN: 2 }, im = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, hl = 0, Ls = 1, dl = 2, fo = 1, fl = 2, Ye = 3, un = 0, Me = 1, $e = 2, ln = 0, Kn = 1, Ds = 2, Us = 3, Is = 4, pl = 5, En = 100, ml = 101, gl = 102, _l = 103, vl = 104, xl = 200, Ml = 201, Sl = 202, El = 203, rs = 204, ss = 205, yl = 206, Tl = 207, Al = 208, bl = 209, wl = 210, Rl = 211, Cl = 212, Pl = 213, Ll = 214, Dl = 0, Ul = 1, Il = 2, ar = 3, Nl = 4, Fl = 5, Ol = 6, Bl = 7, po = 0, zl = 1, Hl = 2, cn = 0, Vl = 1, Gl = 2, kl = 3, Wl = 4, Xl = 5, ql = 6, Yl = 7, mo = 300, ti = 301, ei = 302, as = 303, os = 304, gr = 306, ls = 1e3, Tn = 1001, cs = 1002, xe = 1003, $l = 1004, Di = 1005, Ue = 1006, Tr = 1007, An = 1008, hn = 1009, jl = 1010, Kl = 1011, go = 1012, _o = 1013, ni = 1014, je = 1015, _r = 1016, vo = 1017, xo = 1018, Ai = 1020, Zl = 35902, Jl = 1021, Ql = 1022, ze = 1023, tc = 1024, ec = 1025, Zn = 1026, Ti = 1027, Mo = 1028, So = 1029, nc = 1030, Eo = 1031, yo = 1033, Ar = 33776, br = 33777, wr = 33778, Rr = 33779, Ns = 35840, Fs = 35841, Os = 35842, Bs = 35843, zs = 36196, Hs = 37492, Vs = 37496, Gs = 37808, ks = 37809, Ws = 37810, Xs = 37811, qs = 37812, Ys = 37813, $s = 37814, js = 37815, Ks = 37816, Zs = 37817, Js = 37818, Qs = 37819, ta = 37820, ea = 37821, Cr = 36492, na = 36494, ia = 36495, ic = 36283, ra = 36284, sa = 36285, aa = 36286, rc = 3200, sc = 3201, ac = 0, oc = 1, on = "", Ne = "srgb", dn = "srgb-linear", gs = "display-p3", vr = "display-p3-linear", or = "linear", $t = "srgb", lr = "rec709", cr = "p3", Pn = 7680, oa = 519, lc = 512, cc = 513, uc = 514, To = 515, hc = 516, dc = 517, fc = 518, pc = 519, la = 35044, ca = "300 es", Ke = 2e3, ur = 2001;
class ri {
  addEventListener(t, e) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[t] === void 0 && (n[t] = []), n[t].indexOf(e) === -1 && n[t].push(e);
  }
  hasEventListener(t, e) {
    if (this._listeners === void 0)
      return !1;
    const n = this._listeners;
    return n[t] !== void 0 && n[t].indexOf(e) !== -1;
  }
  removeEventListener(t, e) {
    if (this._listeners === void 0)
      return;
    const r = this._listeners[t];
    if (r !== void 0) {
      const s = r.indexOf(e);
      s !== -1 && r.splice(s, 1);
    }
  }
  dispatchEvent(t) {
    if (this._listeners === void 0)
      return;
    const n = this._listeners[t.type];
    if (n !== void 0) {
      t.target = this;
      const r = n.slice(0);
      for (let s = 0, a = r.length; s < a; s++)
        r[s].call(this, t);
      t.target = null;
    }
  }
}
const he = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], rr = Math.PI / 180, us = 180 / Math.PI;
function bi() {
  const i = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (he[i & 255] + he[i >> 8 & 255] + he[i >> 16 & 255] + he[i >> 24 & 255] + "-" + he[t & 255] + he[t >> 8 & 255] + "-" + he[t >> 16 & 15 | 64] + he[t >> 24 & 255] + "-" + he[e & 63 | 128] + he[e >> 8 & 255] + "-" + he[e >> 16 & 255] + he[e >> 24 & 255] + he[n & 255] + he[n >> 8 & 255] + he[n >> 16 & 255] + he[n >> 24 & 255]).toLowerCase();
}
function ge(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function mc(i, t) {
  return (i % t + t) % t;
}
function Pr(i, t, e) {
  return (1 - e) * i + e * t;
}
function ci(i, t) {
  switch (t.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function ve(i, t) {
  switch (t.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const rm = {
  DEG2RAD: rr
};
class zt {
  constructor(t = 0, e = 0) {
    zt.prototype.isVector2 = !0, this.x = t, this.y = e;
  }
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  set(t, e) {
    return this.x = t, this.y = e, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  applyMatrix3(t) {
    const e = this.x, n = this.y, r = t.elements;
    return this.x = r[0] * e + r[3] * n + r[6], this.y = r[1] * e + r[4] * n + r[7], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
  }
  clamp(t, e) {
    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this;
  }
  clampScalar(t, e) {
    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  cross(t) {
    return this.x * t.y - this.y * t.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0)
      return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(ge(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, n = this.y - t.y;
    return e * e + n * n;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this;
  }
  rotateAround(t, e) {
    const n = Math.cos(e), r = Math.sin(e), s = this.x - t.x, a = this.y - t.y;
    return this.x = s * n - a * r + t.x, this.y = s * r + a * n + t.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ct {
  constructor(t, e, n, r, s, a, o, l, c) {
    Ct.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], t !== void 0 && this.set(t, e, n, r, s, a, o, l, c);
  }
  set(t, e, n, r, s, a, o, l, c) {
    const u = this.elements;
    return u[0] = t, u[1] = r, u[2] = o, u[3] = e, u[4] = s, u[5] = l, u[6] = n, u[7] = a, u[8] = c, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(t) {
    const e = this.elements, n = t.elements;
    return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this;
  }
  extractBasis(t, e, n) {
    return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(t) {
    const e = t.elements;
    return this.set(
      e[0],
      e[4],
      e[8],
      e[1],
      e[5],
      e[9],
      e[2],
      e[6],
      e[10]
    ), this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements, r = e.elements, s = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], u = n[4], p = n[7], f = n[2], m = n[5], g = n[8], v = r[0], d = r[3], h = r[6], A = r[1], E = r[4], b = r[7], V = r[2], w = r[5], C = r[8];
    return s[0] = a * v + o * A + l * V, s[3] = a * d + o * E + l * w, s[6] = a * h + o * b + l * C, s[1] = c * v + u * A + p * V, s[4] = c * d + u * E + p * w, s[7] = c * h + u * b + p * C, s[2] = f * v + m * A + g * V, s[5] = f * d + m * E + g * w, s[8] = f * h + m * b + g * C, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], n = t[1], r = t[2], s = t[3], a = t[4], o = t[5], l = t[6], c = t[7], u = t[8];
    return e * a * u - e * o * c - n * s * u + n * o * l + r * s * c - r * a * l;
  }
  invert() {
    const t = this.elements, e = t[0], n = t[1], r = t[2], s = t[3], a = t[4], o = t[5], l = t[6], c = t[7], u = t[8], p = u * a - o * c, f = o * l - u * s, m = c * s - a * l, g = e * p + n * f + r * m;
    if (g === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const v = 1 / g;
    return t[0] = p * v, t[1] = (r * c - u * n) * v, t[2] = (o * n - r * a) * v, t[3] = f * v, t[4] = (u * e - r * l) * v, t[5] = (r * s - o * e) * v, t[6] = m * v, t[7] = (n * l - c * e) * v, t[8] = (a * e - n * s) * v, this;
  }
  transpose() {
    let t;
    const e = this.elements;
    return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this;
  }
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  transposeIntoArray(t) {
    const e = this.elements;
    return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
  }
  setUvTransform(t, e, n, r, s, a, o) {
    const l = Math.cos(s), c = Math.sin(s);
    return this.set(
      n * l,
      n * c,
      -n * (l * a + c * o) + a + t,
      -r * c,
      r * l,
      -r * (-c * a + l * o) + o + e,
      0,
      0,
      1
    ), this;
  }
  //
  scale(t, e) {
    return this.premultiply(Lr.makeScale(t, e)), this;
  }
  rotate(t) {
    return this.premultiply(Lr.makeRotation(-t)), this;
  }
  translate(t, e) {
    return this.premultiply(Lr.makeTranslation(t, e)), this;
  }
  // for 2D Transforms
  makeTranslation(t, e) {
    return t.isVector2 ? this.set(
      1,
      0,
      t.x,
      0,
      1,
      t.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      t,
      0,
      1,
      e,
      0,
      0,
      1
    ), this;
  }
  makeRotation(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(
      e,
      -n,
      0,
      n,
      e,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(t, e) {
    return this.set(
      t,
      0,
      0,
      0,
      e,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(t) {
    const e = this.elements, n = t.elements;
    for (let r = 0; r < 9; r++)
      if (e[r] !== n[r])
        return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Lr = /* @__PURE__ */ new Ct();
function Ao(i) {
  for (let t = i.length - 1; t >= 0; --t)
    if (i[t] >= 65535)
      return !0;
  return !1;
}
function hr(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function gc() {
  const i = hr("canvas");
  return i.style.display = "block", i;
}
const ua = {};
function _c(i) {
  i in ua || (ua[i] = !0, console.warn(i));
}
const ha = /* @__PURE__ */ new Ct().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), da = /* @__PURE__ */ new Ct().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), Ui = {
  [dn]: {
    transfer: or,
    primaries: lr,
    toReference: (i) => i,
    fromReference: (i) => i
  },
  [Ne]: {
    transfer: $t,
    primaries: lr,
    toReference: (i) => i.convertSRGBToLinear(),
    fromReference: (i) => i.convertLinearToSRGB()
  },
  [vr]: {
    transfer: or,
    primaries: cr,
    toReference: (i) => i.applyMatrix3(da),
    fromReference: (i) => i.applyMatrix3(ha)
  },
  [gs]: {
    transfer: $t,
    primaries: cr,
    toReference: (i) => i.convertSRGBToLinear().applyMatrix3(da),
    fromReference: (i) => i.applyMatrix3(ha).convertLinearToSRGB()
  }
}, vc = /* @__PURE__ */ new Set([dn, vr]), Xt = {
  enabled: !0,
  _workingColorSpace: dn,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(i) {
    if (!vc.has(i))
      throw new Error(`Unsupported working color space, "${i}".`);
    this._workingColorSpace = i;
  },
  convert: function(i, t, e) {
    if (this.enabled === !1 || t === e || !t || !e)
      return i;
    const n = Ui[t].toReference, r = Ui[e].fromReference;
    return r(n(i));
  },
  fromWorkingColorSpace: function(i, t) {
    return this.convert(i, this._workingColorSpace, t);
  },
  toWorkingColorSpace: function(i, t) {
    return this.convert(i, t, this._workingColorSpace);
  },
  getPrimaries: function(i) {
    return Ui[i].primaries;
  },
  getTransfer: function(i) {
    return i === on ? or : Ui[i].transfer;
  }
};
function Jn(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function Dr(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let Ln;
class xc {
  static getDataURL(t) {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u")
      return t.src;
    let e;
    if (t instanceof HTMLCanvasElement)
      e = t;
    else {
      Ln === void 0 && (Ln = hr("canvas")), Ln.width = t.width, Ln.height = t.height;
      const n = Ln.getContext("2d");
      t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), e = Ln;
    }
    return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", 0.6)) : e.toDataURL("image/png");
  }
  static sRGBToLinear(t) {
    if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
      const e = hr("canvas");
      e.width = t.width, e.height = t.height;
      const n = e.getContext("2d");
      n.drawImage(t, 0, 0, t.width, t.height);
      const r = n.getImageData(0, 0, t.width, t.height), s = r.data;
      for (let a = 0; a < s.length; a++)
        s[a] = Jn(s[a] / 255) * 255;
      return n.putImageData(r, 0, 0), e;
    } else if (t.data) {
      const e = t.data.slice(0);
      for (let n = 0; n < e.length; n++)
        e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[n] = Math.floor(Jn(e[n] / 255) * 255) : e[n] = Jn(e[n]);
      return {
        data: e,
        width: t.width,
        height: t.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
  }
}
let Mc = 0;
class bo {
  constructor(t = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: Mc++ }), this.uuid = bi(), this.data = t, this.dataReady = !0, this.version = 0;
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.images[this.uuid] !== void 0)
      return t.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let a = 0, o = r.length; a < o; a++)
          r[a].isDataTexture ? s.push(Ur(r[a].image)) : s.push(Ur(r[a]));
      } else
        s = Ur(r);
      n.url = s;
    }
    return e || (t.images[this.uuid] = n), n;
  }
}
function Ur(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? xc.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Sc = 0;
class _e extends ri {
  constructor(t = _e.DEFAULT_IMAGE, e = _e.DEFAULT_MAPPING, n = Tn, r = Tn, s = Ue, a = An, o = ze, l = hn, c = _e.DEFAULT_ANISOTROPY, u = on) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Sc++ }), this.uuid = bi(), this.name = "", this.source = new bo(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new zt(0, 0), this.repeat = new zt(1, 1), this.center = new zt(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ct(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(t = null) {
    this.source.data = t;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this;
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.textures[this.uuid] !== void 0)
      return t.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(t).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), e || (t.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(t) {
    if (this.mapping !== mo)
      return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1)
      switch (this.wrapS) {
        case ls:
          t.x = t.x - Math.floor(t.x);
          break;
        case Tn:
          t.x = t.x < 0 ? 0 : 1;
          break;
        case cs:
          Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
          break;
      }
    if (t.y < 0 || t.y > 1)
      switch (this.wrapT) {
        case ls:
          t.y = t.y - Math.floor(t.y);
          break;
        case Tn:
          t.y = t.y < 0 ? 0 : 1;
          break;
        case cs:
          Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
          break;
      }
    return this.flipY && (t.y = 1 - t.y), t;
  }
  set needsUpdate(t) {
    t === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  set needsPMREMUpdate(t) {
    t === !0 && this.pmremVersion++;
  }
}
_e.DEFAULT_IMAGE = null;
_e.DEFAULT_MAPPING = mo;
_e.DEFAULT_ANISOTROPY = 1;
class se {
  constructor(t = 0, e = 0, n = 0, r = 1) {
    se.prototype.isVector4 = !0, this.x = t, this.y = e, this.z = n, this.w = r;
  }
  get width() {
    return this.z;
  }
  set width(t) {
    this.z = t;
  }
  get height() {
    return this.w;
  }
  set height(t) {
    this.w = t;
  }
  set(t, e, n, r) {
    return this.x = t, this.y = e, this.z = n, this.w = r, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this.w = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setW(t) {
    return this.w = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      case 3:
        this.w = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w !== void 0 ? t.w : 1, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this.w += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
  }
  applyMatrix4(t) {
    const e = this.x, n = this.y, r = this.z, s = this.w, a = t.elements;
    return this.x = a[0] * e + a[4] * n + a[8] * r + a[12] * s, this.y = a[1] * e + a[5] * n + a[9] * r + a[13] * s, this.z = a[2] * e + a[6] * n + a[10] * r + a[14] * s, this.w = a[3] * e + a[7] * n + a[11] * r + a[15] * s, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w);
    const e = Math.sqrt(1 - t.w * t.w);
    return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this;
  }
  setAxisAngleFromRotationMatrix(t) {
    let e, n, r, s;
    const l = t.elements, c = l[0], u = l[4], p = l[8], f = l[1], m = l[5], g = l[9], v = l[2], d = l[6], h = l[10];
    if (Math.abs(u - f) < 0.01 && Math.abs(p - v) < 0.01 && Math.abs(g - d) < 0.01) {
      if (Math.abs(u + f) < 0.1 && Math.abs(p + v) < 0.1 && Math.abs(g + d) < 0.1 && Math.abs(c + m + h - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      e = Math.PI;
      const E = (c + 1) / 2, b = (m + 1) / 2, V = (h + 1) / 2, w = (u + f) / 4, C = (p + v) / 4, k = (g + d) / 4;
      return E > b && E > V ? E < 0.01 ? (n = 0, r = 0.707106781, s = 0.707106781) : (n = Math.sqrt(E), r = w / n, s = C / n) : b > V ? b < 0.01 ? (n = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(b), n = w / r, s = k / r) : V < 0.01 ? (n = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(V), n = C / s, r = k / s), this.set(n, r, s, e), this;
    }
    let A = Math.sqrt((d - g) * (d - g) + (p - v) * (p - v) + (f - u) * (f - u));
    return Math.abs(A) < 1e-3 && (A = 1), this.x = (d - g) / A, this.y = (p - v) / A, this.z = (f - u) / A, this.w = Math.acos((c + m + h - 1) / 2), this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
  }
  clamp(t, e) {
    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this;
  }
  clampScalar(t, e) {
    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Ec extends ri {
  constructor(t = 1, e = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = t, this.height = e, this.depth = 1, this.scissor = new se(0, 0, t, e), this.scissorTest = !1, this.viewport = new se(0, 0, t, e);
    const r = { width: t, height: e, depth: 1 };
    n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: Ue,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1
    }, n);
    const s = new _e(r, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
    s.flipY = !1, s.generateMipmaps = n.generateMipmaps, s.internalFormat = n.internalFormat, this.textures = [];
    const a = n.count;
    for (let o = 0; o < a; o++)
      this.textures[o] = s.clone(), this.textures[o].isRenderTargetTexture = !0;
    this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(t) {
    this.textures[0] = t;
  }
  setSize(t, e, n = 1) {
    if (this.width !== t || this.height !== e || this.depth !== n) {
      this.width = t, this.height = e, this.depth = n;
      for (let r = 0, s = this.textures.length; r < s; r++)
        this.textures[r].image.width = t, this.textures[r].image.height = e, this.textures[r].image.depth = n;
      this.dispose();
    }
    this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.width = t.width, this.height = t.height, this.depth = t.depth, this.scissor.copy(t.scissor), this.scissorTest = t.scissorTest, this.viewport.copy(t.viewport), this.textures.length = 0;
    for (let n = 0, r = t.textures.length; n < r; n++)
      this.textures[n] = t.textures[n].clone(), this.textures[n].isRenderTargetTexture = !0;
    const e = Object.assign({}, t.texture.image);
    return this.texture.source = new bo(e), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.resolveDepthBuffer = t.resolveDepthBuffer, this.resolveStencilBuffer = t.resolveStencilBuffer, t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class bn extends Ec {
  constructor(t = 1, e = 1, n = {}) {
    super(t, e, n), this.isWebGLRenderTarget = !0;
  }
}
class wo extends _e {
  constructor(t = null, e = 1, n = 1, r = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: t, width: e, height: n, depth: r }, this.magFilter = xe, this.minFilter = xe, this.wrapR = Tn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class yc extends _e {
  constructor(t = null, e = 1, n = 1, r = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: t, width: e, height: n, depth: r }, this.magFilter = xe, this.minFilter = xe, this.wrapR = Tn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class wi {
  constructor(t = 0, e = 0, n = 0, r = 1) {
    this.isQuaternion = !0, this._x = t, this._y = e, this._z = n, this._w = r;
  }
  static slerpFlat(t, e, n, r, s, a, o) {
    let l = n[r + 0], c = n[r + 1], u = n[r + 2], p = n[r + 3];
    const f = s[a + 0], m = s[a + 1], g = s[a + 2], v = s[a + 3];
    if (o === 0) {
      t[e + 0] = l, t[e + 1] = c, t[e + 2] = u, t[e + 3] = p;
      return;
    }
    if (o === 1) {
      t[e + 0] = f, t[e + 1] = m, t[e + 2] = g, t[e + 3] = v;
      return;
    }
    if (p !== v || l !== f || c !== m || u !== g) {
      let d = 1 - o;
      const h = l * f + c * m + u * g + p * v, A = h >= 0 ? 1 : -1, E = 1 - h * h;
      if (E > Number.EPSILON) {
        const V = Math.sqrt(E), w = Math.atan2(V, h * A);
        d = Math.sin(d * w) / V, o = Math.sin(o * w) / V;
      }
      const b = o * A;
      if (l = l * d + f * b, c = c * d + m * b, u = u * d + g * b, p = p * d + v * b, d === 1 - o) {
        const V = 1 / Math.sqrt(l * l + c * c + u * u + p * p);
        l *= V, c *= V, u *= V, p *= V;
      }
    }
    t[e] = l, t[e + 1] = c, t[e + 2] = u, t[e + 3] = p;
  }
  static multiplyQuaternionsFlat(t, e, n, r, s, a) {
    const o = n[r], l = n[r + 1], c = n[r + 2], u = n[r + 3], p = s[a], f = s[a + 1], m = s[a + 2], g = s[a + 3];
    return t[e] = o * g + u * p + l * m - c * f, t[e + 1] = l * g + u * f + c * p - o * m, t[e + 2] = c * g + u * m + o * f - l * p, t[e + 3] = u * g - o * p - l * f - c * m, t;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(t) {
    this._w = t, this._onChangeCallback();
  }
  set(t, e, n, r) {
    return this._x = t, this._y = e, this._z = n, this._w = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(t) {
    return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
  }
  setFromEuler(t, e = !0) {
    const n = t._x, r = t._y, s = t._z, a = t._order, o = Math.cos, l = Math.sin, c = o(n / 2), u = o(r / 2), p = o(s / 2), f = l(n / 2), m = l(r / 2), g = l(s / 2);
    switch (a) {
      case "XYZ":
        this._x = f * u * p + c * m * g, this._y = c * m * p - f * u * g, this._z = c * u * g + f * m * p, this._w = c * u * p - f * m * g;
        break;
      case "YXZ":
        this._x = f * u * p + c * m * g, this._y = c * m * p - f * u * g, this._z = c * u * g - f * m * p, this._w = c * u * p + f * m * g;
        break;
      case "ZXY":
        this._x = f * u * p - c * m * g, this._y = c * m * p + f * u * g, this._z = c * u * g + f * m * p, this._w = c * u * p - f * m * g;
        break;
      case "ZYX":
        this._x = f * u * p - c * m * g, this._y = c * m * p + f * u * g, this._z = c * u * g - f * m * p, this._w = c * u * p + f * m * g;
        break;
      case "YZX":
        this._x = f * u * p + c * m * g, this._y = c * m * p + f * u * g, this._z = c * u * g - f * m * p, this._w = c * u * p - f * m * g;
        break;
      case "XZY":
        this._x = f * u * p - c * m * g, this._y = c * m * p - f * u * g, this._z = c * u * g + f * m * p, this._w = c * u * p + f * m * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return e === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(t, e) {
    const n = e / 2, r = Math.sin(n);
    return this._x = t.x * r, this._y = t.y * r, this._z = t.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t) {
    const e = t.elements, n = e[0], r = e[4], s = e[8], a = e[1], o = e[5], l = e[9], c = e[2], u = e[6], p = e[10], f = n + o + p;
    if (f > 0) {
      const m = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / m, this._x = (u - l) * m, this._y = (s - c) * m, this._z = (a - r) * m;
    } else if (n > o && n > p) {
      const m = 2 * Math.sqrt(1 + n - o - p);
      this._w = (u - l) / m, this._x = 0.25 * m, this._y = (r + a) / m, this._z = (s + c) / m;
    } else if (o > p) {
      const m = 2 * Math.sqrt(1 + o - n - p);
      this._w = (s - c) / m, this._x = (r + a) / m, this._y = 0.25 * m, this._z = (l + u) / m;
    } else {
      const m = 2 * Math.sqrt(1 + p - n - o);
      this._w = (a - r) / m, this._x = (s + c) / m, this._y = (l + u) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(t, e) {
    let n = t.dot(e) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize();
  }
  angleTo(t) {
    return 2 * Math.acos(Math.abs(ge(this.dot(t), -1, 1)));
  }
  rotateTowards(t, e) {
    const n = this.angleTo(t);
    if (n === 0)
      return this;
    const r = Math.min(1, e / n);
    return this.slerp(t, r), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(t) {
    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let t = this.length();
    return t === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
  }
  multiply(t) {
    return this.multiplyQuaternions(this, t);
  }
  premultiply(t) {
    return this.multiplyQuaternions(t, this);
  }
  multiplyQuaternions(t, e) {
    const n = t._x, r = t._y, s = t._z, a = t._w, o = e._x, l = e._y, c = e._z, u = e._w;
    return this._x = n * u + a * o + r * c - s * l, this._y = r * u + a * l + s * o - n * c, this._z = s * u + a * c + n * l - r * o, this._w = a * u - n * o - r * l - s * c, this._onChangeCallback(), this;
  }
  slerp(t, e) {
    if (e === 0)
      return this;
    if (e === 1)
      return this.copy(t);
    const n = this._x, r = this._y, s = this._z, a = this._w;
    let o = a * t._w + n * t._x + r * t._y + s * t._z;
    if (o < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), o >= 1)
      return this._w = a, this._x = n, this._y = r, this._z = s, this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const m = 1 - e;
      return this._w = m * a + e * this._w, this._x = m * n + e * this._x, this._y = m * r + e * this._y, this._z = m * s + e * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), u = Math.atan2(c, o), p = Math.sin((1 - e) * u) / c, f = Math.sin(e * u) / c;
    return this._w = a * p + this._w * f, this._x = n * p + this._x * f, this._y = r * p + this._y * f, this._z = s * p + this._z * f, this._onChangeCallback(), this;
  }
  slerpQuaternions(t, e, n) {
    return this.copy(t).slerp(e, n);
  }
  random() {
    const t = 2 * Math.PI * Math.random(), e = 2 * Math.PI * Math.random(), n = Math.random(), r = Math.sqrt(1 - n), s = Math.sqrt(n);
    return this.set(
      r * Math.sin(t),
      r * Math.cos(t),
      s * Math.sin(e),
      s * Math.cos(e)
    );
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
  }
  fromArray(t, e = 0) {
    return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
  }
  fromBufferAttribute(t, e) {
    return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class B {
  constructor(t = 0, e = 0, n = 0) {
    B.prototype.isVector3 = !0, this.x = t, this.y = e, this.z = n;
  }
  set(t, e, n) {
    return n === void 0 && (n = this.z), this.x = t, this.y = e, this.z = n, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this;
  }
  multiplyVectors(t, e) {
    return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
  }
  applyEuler(t) {
    return this.applyQuaternion(fa.setFromEuler(t));
  }
  applyAxisAngle(t, e) {
    return this.applyQuaternion(fa.setFromAxisAngle(t, e));
  }
  applyMatrix3(t) {
    const e = this.x, n = this.y, r = this.z, s = t.elements;
    return this.x = s[0] * e + s[3] * n + s[6] * r, this.y = s[1] * e + s[4] * n + s[7] * r, this.z = s[2] * e + s[5] * n + s[8] * r, this;
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    const e = this.x, n = this.y, r = this.z, s = t.elements, a = 1 / (s[3] * e + s[7] * n + s[11] * r + s[15]);
    return this.x = (s[0] * e + s[4] * n + s[8] * r + s[12]) * a, this.y = (s[1] * e + s[5] * n + s[9] * r + s[13]) * a, this.z = (s[2] * e + s[6] * n + s[10] * r + s[14]) * a, this;
  }
  applyQuaternion(t) {
    const e = this.x, n = this.y, r = this.z, s = t.x, a = t.y, o = t.z, l = t.w, c = 2 * (a * r - o * n), u = 2 * (o * e - s * r), p = 2 * (s * n - a * e);
    return this.x = e + l * c + a * p - o * u, this.y = n + l * u + o * c - s * p, this.z = r + l * p + s * u - a * c, this;
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
  }
  transformDirection(t) {
    const e = this.x, n = this.y, r = this.z, s = t.elements;
    return this.x = s[0] * e + s[4] * n + s[8] * r, this.y = s[1] * e + s[5] * n + s[9] * r, this.z = s[2] * e + s[6] * n + s[10] * r, this.normalize();
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
  }
  clamp(t, e) {
    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this;
  }
  clampScalar(t, e) {
    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this;
  }
  cross(t) {
    return this.crossVectors(this, t);
  }
  crossVectors(t, e) {
    const n = t.x, r = t.y, s = t.z, a = e.x, o = e.y, l = e.z;
    return this.x = r * l - s * o, this.y = s * a - n * l, this.z = n * o - r * a, this;
  }
  projectOnVector(t) {
    const e = t.lengthSq();
    if (e === 0)
      return this.set(0, 0, 0);
    const n = t.dot(this) / e;
    return this.copy(t).multiplyScalar(n);
  }
  projectOnPlane(t) {
    return Ir.copy(this).projectOnVector(t), this.sub(Ir);
  }
  reflect(t) {
    return this.sub(Ir.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0)
      return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(ge(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, n = this.y - t.y, r = this.z - t.z;
    return e * e + n * n + r * r;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, e, n) {
    const r = Math.sin(e) * t;
    return this.x = r * Math.sin(n), this.y = Math.cos(e) * t, this.z = r * Math.cos(n), this;
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, e, n) {
    return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this;
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this;
  }
  setFromMatrixScale(t) {
    const e = this.setFromMatrixColumn(t, 0).length(), n = this.setFromMatrixColumn(t, 1).length(), r = this.setFromMatrixColumn(t, 2).length();
    return this.x = e, this.y = n, this.z = r, this;
  }
  setFromMatrixColumn(t, e) {
    return this.fromArray(t.elements, e * 4);
  }
  setFromMatrix3Column(t, e) {
    return this.fromArray(t.elements, e * 3);
  }
  setFromEuler(t) {
    return this.x = t._x, this.y = t._y, this.z = t._z, this;
  }
  setFromColor(t) {
    return this.x = t.r, this.y = t.g, this.z = t.b, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const t = Math.random() * Math.PI * 2, e = Math.random() * 2 - 1, n = Math.sqrt(1 - e * e);
    return this.x = n * Math.cos(t), this.y = e, this.z = n * Math.sin(t), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Ir = /* @__PURE__ */ new B(), fa = /* @__PURE__ */ new wi();
class wn {
  constructor(t = new B(1 / 0, 1 / 0, 1 / 0), e = new B(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = t, this.max = e;
  }
  set(t, e) {
    return this.min.copy(t), this.max.copy(e), this;
  }
  setFromArray(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e += 3)
      this.expandByPoint(Pe.fromArray(t, e));
    return this;
  }
  setFromBufferAttribute(t) {
    this.makeEmpty();
    for (let e = 0, n = t.count; e < n; e++)
      this.expandByPoint(Pe.fromBufferAttribute(t, e));
    return this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e++)
      this.expandByPoint(t[e]);
    return this;
  }
  setFromCenterAndSize(t, e) {
    const n = Pe.copy(e).multiplyScalar(0.5);
    return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
  }
  setFromObject(t, e = !1) {
    return this.makeEmpty(), this.expandByObject(t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.min.copy(t.min), this.max.copy(t.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
  }
  expandByPoint(t) {
    return this.min.min(t), this.max.max(t), this;
  }
  expandByVector(t) {
    return this.min.sub(t), this.max.add(t), this;
  }
  expandByScalar(t) {
    return this.min.addScalar(-t), this.max.addScalar(t), this;
  }
  expandByObject(t, e = !1) {
    t.updateWorldMatrix(!1, !1);
    const n = t.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (e === !0 && s !== void 0 && t.isInstancedMesh !== !0)
        for (let a = 0, o = s.count; a < o; a++)
          t.isMesh === !0 ? t.getVertexPosition(a, Pe) : Pe.fromBufferAttribute(s, a), Pe.applyMatrix4(t.matrixWorld), this.expandByPoint(Pe);
      else
        t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), Ii.copy(t.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Ii.copy(n.boundingBox)), Ii.applyMatrix4(t.matrixWorld), this.union(Ii);
    }
    const r = t.children;
    for (let s = 0, a = r.length; s < a; s++)
      this.expandByObject(r[s], e);
    return this;
  }
  containsPoint(t) {
    return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z);
  }
  containsBox(t) {
    return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
  }
  getParameter(t, e) {
    return e.set(
      (t.x - this.min.x) / (this.max.x - this.min.x),
      (t.y - this.min.y) / (this.max.y - this.min.y),
      (t.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(t) {
    return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z);
  }
  intersectsSphere(t) {
    return this.clampPoint(t.center, Pe), Pe.distanceToSquared(t.center) <= t.radius * t.radius;
  }
  intersectsPlane(t) {
    let e, n;
    return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant;
  }
  intersectsTriangle(t) {
    if (this.isEmpty())
      return !1;
    this.getCenter(ui), Ni.subVectors(this.max, ui), Dn.subVectors(t.a, ui), Un.subVectors(t.b, ui), In.subVectors(t.c, ui), tn.subVectors(Un, Dn), en.subVectors(In, Un), pn.subVectors(Dn, In);
    let e = [
      0,
      -tn.z,
      tn.y,
      0,
      -en.z,
      en.y,
      0,
      -pn.z,
      pn.y,
      tn.z,
      0,
      -tn.x,
      en.z,
      0,
      -en.x,
      pn.z,
      0,
      -pn.x,
      -tn.y,
      tn.x,
      0,
      -en.y,
      en.x,
      0,
      -pn.y,
      pn.x,
      0
    ];
    return !Nr(e, Dn, Un, In, Ni) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Nr(e, Dn, Un, In, Ni)) ? !1 : (Fi.crossVectors(tn, en), e = [Fi.x, Fi.y, Fi.z], Nr(e, Dn, Un, In, Ni));
  }
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return this.clampPoint(t, Pe).distanceTo(t);
  }
  getBoundingSphere(t) {
    return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = this.getSize(Pe).length() * 0.5), t;
  }
  intersect(t) {
    return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  applyMatrix4(t) {
    return this.isEmpty() ? this : (Ge[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), Ge[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), Ge[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), Ge[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), Ge[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), Ge[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), Ge[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), Ge[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(Ge), this);
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
}
const Ge = [
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B()
], Pe = /* @__PURE__ */ new B(), Ii = /* @__PURE__ */ new wn(), Dn = /* @__PURE__ */ new B(), Un = /* @__PURE__ */ new B(), In = /* @__PURE__ */ new B(), tn = /* @__PURE__ */ new B(), en = /* @__PURE__ */ new B(), pn = /* @__PURE__ */ new B(), ui = /* @__PURE__ */ new B(), Ni = /* @__PURE__ */ new B(), Fi = /* @__PURE__ */ new B(), mn = /* @__PURE__ */ new B();
function Nr(i, t, e, n, r) {
  for (let s = 0, a = i.length - 3; s <= a; s += 3) {
    mn.fromArray(i, s);
    const o = r.x * Math.abs(mn.x) + r.y * Math.abs(mn.y) + r.z * Math.abs(mn.z), l = t.dot(mn), c = e.dot(mn), u = n.dot(mn);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > o)
      return !1;
  }
  return !0;
}
const Tc = /* @__PURE__ */ new wn(), hi = /* @__PURE__ */ new B(), Fr = /* @__PURE__ */ new B();
class si {
  constructor(t = new B(), e = -1) {
    this.isSphere = !0, this.center = t, this.radius = e;
  }
  set(t, e) {
    return this.center.copy(t), this.radius = e, this;
  }
  setFromPoints(t, e) {
    const n = this.center;
    e !== void 0 ? n.copy(e) : Tc.setFromPoints(t).getCenter(n);
    let r = 0;
    for (let s = 0, a = t.length; s < a; s++)
      r = Math.max(r, n.distanceToSquared(t[s]));
    return this.radius = Math.sqrt(r), this;
  }
  copy(t) {
    return this.center.copy(t.center), this.radius = t.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(t) {
    return t.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(t) {
    return t.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(t) {
    const e = this.radius + t.radius;
    return t.center.distanceToSquared(this.center) <= e * e;
  }
  intersectsBox(t) {
    return t.intersectsSphere(this);
  }
  intersectsPlane(t) {
    return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(t, e) {
    const n = this.center.distanceToSquared(t);
    return e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
  }
  getBoundingBox(t) {
    return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
  }
  applyMatrix4(t) {
    return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this;
  }
  translate(t) {
    return this.center.add(t), this;
  }
  expandByPoint(t) {
    if (this.isEmpty())
      return this.center.copy(t), this.radius = 0, this;
    hi.subVectors(t, this.center);
    const e = hi.lengthSq();
    if (e > this.radius * this.radius) {
      const n = Math.sqrt(e), r = (n - this.radius) * 0.5;
      this.center.addScaledVector(hi, r / n), this.radius += r;
    }
    return this;
  }
  union(t) {
    return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === !0 ? this.radius = Math.max(this.radius, t.radius) : (Fr.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(hi.copy(t.center).add(Fr)), this.expandByPoint(hi.copy(t.center).sub(Fr))), this);
  }
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const ke = /* @__PURE__ */ new B(), Or = /* @__PURE__ */ new B(), Oi = /* @__PURE__ */ new B(), nn = /* @__PURE__ */ new B(), Br = /* @__PURE__ */ new B(), Bi = /* @__PURE__ */ new B(), zr = /* @__PURE__ */ new B();
class _s {
  constructor(t = new B(), e = new B(0, 0, -1)) {
    this.origin = t, this.direction = e;
  }
  set(t, e) {
    return this.origin.copy(t), this.direction.copy(e), this;
  }
  copy(t) {
    return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
  }
  at(t, e) {
    return e.copy(this.origin).addScaledVector(this.direction, t);
  }
  lookAt(t) {
    return this.direction.copy(t).sub(this.origin).normalize(), this;
  }
  recast(t) {
    return this.origin.copy(this.at(t, ke)), this;
  }
  closestPointToPoint(t, e) {
    e.subVectors(t, this.origin);
    const n = e.dot(this.direction);
    return n < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(t) {
    return Math.sqrt(this.distanceSqToPoint(t));
  }
  distanceSqToPoint(t) {
    const e = ke.subVectors(t, this.origin).dot(this.direction);
    return e < 0 ? this.origin.distanceToSquared(t) : (ke.copy(this.origin).addScaledVector(this.direction, e), ke.distanceToSquared(t));
  }
  distanceSqToSegment(t, e, n, r) {
    Or.copy(t).add(e).multiplyScalar(0.5), Oi.copy(e).sub(t).normalize(), nn.copy(this.origin).sub(Or);
    const s = t.distanceTo(e) * 0.5, a = -this.direction.dot(Oi), o = nn.dot(this.direction), l = -nn.dot(Oi), c = nn.lengthSq(), u = Math.abs(1 - a * a);
    let p, f, m, g;
    if (u > 0)
      if (p = a * l - o, f = a * o - l, g = s * u, p >= 0)
        if (f >= -g)
          if (f <= g) {
            const v = 1 / u;
            p *= v, f *= v, m = p * (p + a * f + 2 * o) + f * (a * p + f + 2 * l) + c;
          } else
            f = s, p = Math.max(0, -(a * f + o)), m = -p * p + f * (f + 2 * l) + c;
        else
          f = -s, p = Math.max(0, -(a * f + o)), m = -p * p + f * (f + 2 * l) + c;
      else
        f <= -g ? (p = Math.max(0, -(-a * s + o)), f = p > 0 ? -s : Math.min(Math.max(-s, -l), s), m = -p * p + f * (f + 2 * l) + c) : f <= g ? (p = 0, f = Math.min(Math.max(-s, -l), s), m = f * (f + 2 * l) + c) : (p = Math.max(0, -(a * s + o)), f = p > 0 ? s : Math.min(Math.max(-s, -l), s), m = -p * p + f * (f + 2 * l) + c);
    else
      f = a > 0 ? -s : s, p = Math.max(0, -(a * f + o)), m = -p * p + f * (f + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, p), r && r.copy(Or).addScaledVector(Oi, f), m;
  }
  intersectSphere(t, e) {
    ke.subVectors(t.center, this.origin);
    const n = ke.dot(this.direction), r = ke.dot(ke) - n * n, s = t.radius * t.radius;
    if (r > s)
      return null;
    const a = Math.sqrt(s - r), o = n - a, l = n + a;
    return l < 0 ? null : o < 0 ? this.at(l, e) : this.at(o, e);
  }
  intersectsSphere(t) {
    return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
  }
  distanceToPlane(t) {
    const e = t.normal.dot(this.direction);
    if (e === 0)
      return t.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(t.normal) + t.constant) / e;
    return n >= 0 ? n : null;
  }
  intersectPlane(t, e) {
    const n = this.distanceToPlane(t);
    return n === null ? null : this.at(n, e);
  }
  intersectsPlane(t) {
    const e = t.distanceToPoint(this.origin);
    return e === 0 || t.normal.dot(this.direction) * e < 0;
  }
  intersectBox(t, e) {
    let n, r, s, a, o, l;
    const c = 1 / this.direction.x, u = 1 / this.direction.y, p = 1 / this.direction.z, f = this.origin;
    return c >= 0 ? (n = (t.min.x - f.x) * c, r = (t.max.x - f.x) * c) : (n = (t.max.x - f.x) * c, r = (t.min.x - f.x) * c), u >= 0 ? (s = (t.min.y - f.y) * u, a = (t.max.y - f.y) * u) : (s = (t.max.y - f.y) * u, a = (t.min.y - f.y) * u), n > a || s > r || ((s > n || isNaN(n)) && (n = s), (a < r || isNaN(r)) && (r = a), p >= 0 ? (o = (t.min.z - f.z) * p, l = (t.max.z - f.z) * p) : (o = (t.max.z - f.z) * p, l = (t.min.z - f.z) * p), n > l || o > r) || ((o > n || n !== n) && (n = o), (l < r || r !== r) && (r = l), r < 0) ? null : this.at(n >= 0 ? n : r, e);
  }
  intersectsBox(t) {
    return this.intersectBox(t, ke) !== null;
  }
  intersectTriangle(t, e, n, r, s) {
    Br.subVectors(e, t), Bi.subVectors(n, t), zr.crossVectors(Br, Bi);
    let a = this.direction.dot(zr), o;
    if (a > 0) {
      if (r)
        return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    nn.subVectors(this.origin, t);
    const l = o * this.direction.dot(Bi.crossVectors(nn, Bi));
    if (l < 0)
      return null;
    const c = o * this.direction.dot(Br.cross(nn));
    if (c < 0 || l + c > a)
      return null;
    const u = -o * nn.dot(zr);
    return u < 0 ? null : this.at(u / a, s);
  }
  applyMatrix4(t) {
    return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
  }
  equals(t) {
    return t.origin.equals(this.origin) && t.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class qt {
  constructor(t, e, n, r, s, a, o, l, c, u, p, f, m, g, v, d) {
    qt.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], t !== void 0 && this.set(t, e, n, r, s, a, o, l, c, u, p, f, m, g, v, d);
  }
  set(t, e, n, r, s, a, o, l, c, u, p, f, m, g, v, d) {
    const h = this.elements;
    return h[0] = t, h[4] = e, h[8] = n, h[12] = r, h[1] = s, h[5] = a, h[9] = o, h[13] = l, h[2] = c, h[6] = u, h[10] = p, h[14] = f, h[3] = m, h[7] = g, h[11] = v, h[15] = d, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new qt().fromArray(this.elements);
  }
  copy(t) {
    const e = this.elements, n = t.elements;
    return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this;
  }
  copyPosition(t) {
    const e = this.elements, n = t.elements;
    return e[12] = n[12], e[13] = n[13], e[14] = n[14], this;
  }
  setFromMatrix3(t) {
    const e = t.elements;
    return this.set(
      e[0],
      e[3],
      e[6],
      0,
      e[1],
      e[4],
      e[7],
      0,
      e[2],
      e[5],
      e[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(t, e, n) {
    return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(t, e, n) {
    return this.set(
      t.x,
      e.x,
      n.x,
      0,
      t.y,
      e.y,
      n.y,
      0,
      t.z,
      e.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(t) {
    const e = this.elements, n = t.elements, r = 1 / Nn.setFromMatrixColumn(t, 0).length(), s = 1 / Nn.setFromMatrixColumn(t, 1).length(), a = 1 / Nn.setFromMatrixColumn(t, 2).length();
    return e[0] = n[0] * r, e[1] = n[1] * r, e[2] = n[2] * r, e[3] = 0, e[4] = n[4] * s, e[5] = n[5] * s, e[6] = n[6] * s, e[7] = 0, e[8] = n[8] * a, e[9] = n[9] * a, e[10] = n[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromEuler(t) {
    const e = this.elements, n = t.x, r = t.y, s = t.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(r), c = Math.sin(r), u = Math.cos(s), p = Math.sin(s);
    if (t.order === "XYZ") {
      const f = a * u, m = a * p, g = o * u, v = o * p;
      e[0] = l * u, e[4] = -l * p, e[8] = c, e[1] = m + g * c, e[5] = f - v * c, e[9] = -o * l, e[2] = v - f * c, e[6] = g + m * c, e[10] = a * l;
    } else if (t.order === "YXZ") {
      const f = l * u, m = l * p, g = c * u, v = c * p;
      e[0] = f + v * o, e[4] = g * o - m, e[8] = a * c, e[1] = a * p, e[5] = a * u, e[9] = -o, e[2] = m * o - g, e[6] = v + f * o, e[10] = a * l;
    } else if (t.order === "ZXY") {
      const f = l * u, m = l * p, g = c * u, v = c * p;
      e[0] = f - v * o, e[4] = -a * p, e[8] = g + m * o, e[1] = m + g * o, e[5] = a * u, e[9] = v - f * o, e[2] = -a * c, e[6] = o, e[10] = a * l;
    } else if (t.order === "ZYX") {
      const f = a * u, m = a * p, g = o * u, v = o * p;
      e[0] = l * u, e[4] = g * c - m, e[8] = f * c + v, e[1] = l * p, e[5] = v * c + f, e[9] = m * c - g, e[2] = -c, e[6] = o * l, e[10] = a * l;
    } else if (t.order === "YZX") {
      const f = a * l, m = a * c, g = o * l, v = o * c;
      e[0] = l * u, e[4] = v - f * p, e[8] = g * p + m, e[1] = p, e[5] = a * u, e[9] = -o * u, e[2] = -c * u, e[6] = m * p + g, e[10] = f - v * p;
    } else if (t.order === "XZY") {
      const f = a * l, m = a * c, g = o * l, v = o * c;
      e[0] = l * u, e[4] = -p, e[8] = c * u, e[1] = f * p + v, e[5] = a * u, e[9] = m * p - g, e[2] = g * p - m, e[6] = o * u, e[10] = v * p + f;
    }
    return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromQuaternion(t) {
    return this.compose(Ac, t, bc);
  }
  lookAt(t, e, n) {
    const r = this.elements;
    return Ee.subVectors(t, e), Ee.lengthSq() === 0 && (Ee.z = 1), Ee.normalize(), rn.crossVectors(n, Ee), rn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Ee.x += 1e-4 : Ee.z += 1e-4, Ee.normalize(), rn.crossVectors(n, Ee)), rn.normalize(), zi.crossVectors(Ee, rn), r[0] = rn.x, r[4] = zi.x, r[8] = Ee.x, r[1] = rn.y, r[5] = zi.y, r[9] = Ee.y, r[2] = rn.z, r[6] = zi.z, r[10] = Ee.z, this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements, r = e.elements, s = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], u = n[1], p = n[5], f = n[9], m = n[13], g = n[2], v = n[6], d = n[10], h = n[14], A = n[3], E = n[7], b = n[11], V = n[15], w = r[0], C = r[4], k = r[8], S = r[12], _ = r[1], L = r[5], R = r[9], y = r[13], P = r[2], U = r[6], O = r[10], $ = r[14], N = r[3], j = r[7], J = r[11], lt = r[15];
    return s[0] = a * w + o * _ + l * P + c * N, s[4] = a * C + o * L + l * U + c * j, s[8] = a * k + o * R + l * O + c * J, s[12] = a * S + o * y + l * $ + c * lt, s[1] = u * w + p * _ + f * P + m * N, s[5] = u * C + p * L + f * U + m * j, s[9] = u * k + p * R + f * O + m * J, s[13] = u * S + p * y + f * $ + m * lt, s[2] = g * w + v * _ + d * P + h * N, s[6] = g * C + v * L + d * U + h * j, s[10] = g * k + v * R + d * O + h * J, s[14] = g * S + v * y + d * $ + h * lt, s[3] = A * w + E * _ + b * P + V * N, s[7] = A * C + E * L + b * U + V * j, s[11] = A * k + E * R + b * O + V * J, s[15] = A * S + E * y + b * $ + V * lt, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], n = t[4], r = t[8], s = t[12], a = t[1], o = t[5], l = t[9], c = t[13], u = t[2], p = t[6], f = t[10], m = t[14], g = t[3], v = t[7], d = t[11], h = t[15];
    return g * (+s * l * p - r * c * p - s * o * f + n * c * f + r * o * m - n * l * m) + v * (+e * l * m - e * c * f + s * a * f - r * a * m + r * c * u - s * l * u) + d * (+e * c * p - e * o * m - s * a * p + n * a * m + s * o * u - n * c * u) + h * (-r * o * u - e * l * p + e * o * f + r * a * p - n * a * f + n * l * u);
  }
  transpose() {
    const t = this.elements;
    let e;
    return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
  }
  setPosition(t, e, n) {
    const r = this.elements;
    return t.isVector3 ? (r[12] = t.x, r[13] = t.y, r[14] = t.z) : (r[12] = t, r[13] = e, r[14] = n), this;
  }
  invert() {
    const t = this.elements, e = t[0], n = t[1], r = t[2], s = t[3], a = t[4], o = t[5], l = t[6], c = t[7], u = t[8], p = t[9], f = t[10], m = t[11], g = t[12], v = t[13], d = t[14], h = t[15], A = p * d * c - v * f * c + v * l * m - o * d * m - p * l * h + o * f * h, E = g * f * c - u * d * c - g * l * m + a * d * m + u * l * h - a * f * h, b = u * v * c - g * p * c + g * o * m - a * v * m - u * o * h + a * p * h, V = g * p * l - u * v * l - g * o * f + a * v * f + u * o * d - a * p * d, w = e * A + n * E + r * b + s * V;
    if (w === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const C = 1 / w;
    return t[0] = A * C, t[1] = (v * f * s - p * d * s - v * r * m + n * d * m + p * r * h - n * f * h) * C, t[2] = (o * d * s - v * l * s + v * r * c - n * d * c - o * r * h + n * l * h) * C, t[3] = (p * l * s - o * f * s - p * r * c + n * f * c + o * r * m - n * l * m) * C, t[4] = E * C, t[5] = (u * d * s - g * f * s + g * r * m - e * d * m - u * r * h + e * f * h) * C, t[6] = (g * l * s - a * d * s - g * r * c + e * d * c + a * r * h - e * l * h) * C, t[7] = (a * f * s - u * l * s + u * r * c - e * f * c - a * r * m + e * l * m) * C, t[8] = b * C, t[9] = (g * p * s - u * v * s - g * n * m + e * v * m + u * n * h - e * p * h) * C, t[10] = (a * v * s - g * o * s + g * n * c - e * v * c - a * n * h + e * o * h) * C, t[11] = (u * o * s - a * p * s - u * n * c + e * p * c + a * n * m - e * o * m) * C, t[12] = V * C, t[13] = (u * v * r - g * p * r + g * n * f - e * v * f - u * n * d + e * p * d) * C, t[14] = (g * o * r - a * v * r - g * n * l + e * v * l + a * n * d - e * o * d) * C, t[15] = (a * p * r - u * o * r + u * n * l - e * p * l - a * n * f + e * o * f) * C, this;
  }
  scale(t) {
    const e = this.elements, n = t.x, r = t.y, s = t.z;
    return e[0] *= n, e[4] *= r, e[8] *= s, e[1] *= n, e[5] *= r, e[9] *= s, e[2] *= n, e[6] *= r, e[10] *= s, e[3] *= n, e[7] *= r, e[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], r = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(e, n, r));
  }
  makeTranslation(t, e, n) {
    return t.isVector3 ? this.set(
      1,
      0,
      0,
      t.x,
      0,
      1,
      0,
      t.y,
      0,
      0,
      1,
      t.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      t,
      0,
      1,
      0,
      e,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      e,
      -n,
      0,
      0,
      n,
      e,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(
      e,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      e,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(
      e,
      -n,
      0,
      0,
      n,
      e,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(t, e) {
    const n = Math.cos(e), r = Math.sin(e), s = 1 - n, a = t.x, o = t.y, l = t.z, c = s * a, u = s * o;
    return this.set(
      c * a + n,
      c * o - r * l,
      c * l + r * o,
      0,
      c * o + r * l,
      u * o + n,
      u * l - r * a,
      0,
      c * l - r * o,
      u * l + r * a,
      s * l * l + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(t, e, n) {
    return this.set(
      t,
      0,
      0,
      0,
      0,
      e,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(t, e, n, r, s, a) {
    return this.set(
      1,
      n,
      s,
      0,
      t,
      1,
      a,
      0,
      e,
      r,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(t, e, n) {
    const r = this.elements, s = e._x, a = e._y, o = e._z, l = e._w, c = s + s, u = a + a, p = o + o, f = s * c, m = s * u, g = s * p, v = a * u, d = a * p, h = o * p, A = l * c, E = l * u, b = l * p, V = n.x, w = n.y, C = n.z;
    return r[0] = (1 - (v + h)) * V, r[1] = (m + b) * V, r[2] = (g - E) * V, r[3] = 0, r[4] = (m - b) * w, r[5] = (1 - (f + h)) * w, r[6] = (d + A) * w, r[7] = 0, r[8] = (g + E) * C, r[9] = (d - A) * C, r[10] = (1 - (f + v)) * C, r[11] = 0, r[12] = t.x, r[13] = t.y, r[14] = t.z, r[15] = 1, this;
  }
  decompose(t, e, n) {
    const r = this.elements;
    let s = Nn.set(r[0], r[1], r[2]).length();
    const a = Nn.set(r[4], r[5], r[6]).length(), o = Nn.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s), t.x = r[12], t.y = r[13], t.z = r[14], Le.copy(this);
    const c = 1 / s, u = 1 / a, p = 1 / o;
    return Le.elements[0] *= c, Le.elements[1] *= c, Le.elements[2] *= c, Le.elements[4] *= u, Le.elements[5] *= u, Le.elements[6] *= u, Le.elements[8] *= p, Le.elements[9] *= p, Le.elements[10] *= p, e.setFromRotationMatrix(Le), n.x = s, n.y = a, n.z = o, this;
  }
  makePerspective(t, e, n, r, s, a, o = Ke) {
    const l = this.elements, c = 2 * s / (e - t), u = 2 * s / (n - r), p = (e + t) / (e - t), f = (n + r) / (n - r);
    let m, g;
    if (o === Ke)
      m = -(a + s) / (a - s), g = -2 * a * s / (a - s);
    else if (o === ur)
      m = -a / (a - s), g = -a * s / (a - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = c, l[4] = 0, l[8] = p, l[12] = 0, l[1] = 0, l[5] = u, l[9] = f, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = m, l[14] = g, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(t, e, n, r, s, a, o = Ke) {
    const l = this.elements, c = 1 / (e - t), u = 1 / (n - r), p = 1 / (a - s), f = (e + t) * c, m = (n + r) * u;
    let g, v;
    if (o === Ke)
      g = (a + s) * p, v = -2 * p;
    else if (o === ur)
      g = s * p, v = -1 * p;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -f, l[1] = 0, l[5] = 2 * u, l[9] = 0, l[13] = -m, l[2] = 0, l[6] = 0, l[10] = v, l[14] = -g, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(t) {
    const e = this.elements, n = t.elements;
    for (let r = 0; r < 16; r++)
      if (e[r] !== n[r])
        return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t;
  }
}
const Nn = /* @__PURE__ */ new B(), Le = /* @__PURE__ */ new qt(), Ac = /* @__PURE__ */ new B(0, 0, 0), bc = /* @__PURE__ */ new B(1, 1, 1), rn = /* @__PURE__ */ new B(), zi = /* @__PURE__ */ new B(), Ee = /* @__PURE__ */ new B(), pa = /* @__PURE__ */ new qt(), ma = /* @__PURE__ */ new wi();
class Ze {
  constructor(t = 0, e = 0, n = 0, r = Ze.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = t, this._y = e, this._z = n, this._order = r;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(t) {
    this._order = t, this._onChangeCallback();
  }
  set(t, e, n, r = this._order) {
    return this._x = t, this._y = e, this._z = n, this._order = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(t) {
    return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t, e = this._order, n = !0) {
    const r = t.elements, s = r[0], a = r[4], o = r[8], l = r[1], c = r[5], u = r[9], p = r[2], f = r[6], m = r[10];
    switch (e) {
      case "XYZ":
        this._y = Math.asin(ge(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-u, m), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(f, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-ge(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(o, m), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-p, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(ge(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-p, m), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-ge(p, -1, 1)), Math.abs(p) < 0.9999999 ? (this._x = Math.atan2(f, m), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(ge(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-p, s)) : (this._x = 0, this._y = Math.atan2(o, m));
        break;
      case "XZY":
        this._z = Math.asin(-ge(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(f, c), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-u, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
    }
    return this._order = e, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, e, n) {
    return pa.makeRotationFromQuaternion(t), this.setFromRotationMatrix(pa, e, n);
  }
  setFromVector3(t, e = this._order) {
    return this.set(t.x, t.y, t.z, e);
  }
  reorder(t) {
    return ma.setFromEuler(this), this.setFromQuaternion(ma, t);
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
  }
  fromArray(t) {
    return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t;
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Ze.DEFAULT_ORDER = "XYZ";
class vs {
  constructor() {
    this.mask = 1;
  }
  set(t) {
    this.mask = (1 << t | 0) >>> 0;
  }
  enable(t) {
    this.mask |= 1 << t | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(t) {
    this.mask ^= 1 << t | 0;
  }
  disable(t) {
    this.mask &= ~(1 << t | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(t) {
    return (this.mask & t.mask) !== 0;
  }
  isEnabled(t) {
    return (this.mask & (1 << t | 0)) !== 0;
  }
}
let wc = 0;
const ga = /* @__PURE__ */ new B(), Fn = /* @__PURE__ */ new wi(), We = /* @__PURE__ */ new qt(), Hi = /* @__PURE__ */ new B(), di = /* @__PURE__ */ new B(), Rc = /* @__PURE__ */ new B(), Cc = /* @__PURE__ */ new wi(), _a = /* @__PURE__ */ new B(1, 0, 0), va = /* @__PURE__ */ new B(0, 1, 0), xa = /* @__PURE__ */ new B(0, 0, 1), Ma = { type: "added" }, Pc = { type: "removed" }, On = { type: "childadded", child: null }, Hr = { type: "childremoved", child: null };
class ae extends ri {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: wc++ }), this.uuid = bi(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ae.DEFAULT_UP.clone();
    const t = new B(), e = new Ze(), n = new wi(), r = new B(1, 1, 1);
    function s() {
      n.setFromEuler(e, !1);
    }
    function a() {
      e.setFromQuaternion(n, void 0, !1);
    }
    e._onChange(s), n._onChange(a), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: r
      },
      modelViewMatrix: {
        value: new qt()
      },
      normalMatrix: {
        value: new Ct()
      }
    }), this.matrix = new qt(), this.matrixWorld = new qt(), this.matrixAutoUpdate = ae.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new vs(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(t) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(t) {
    return this.quaternion.premultiply(t), this;
  }
  setRotationFromAxisAngle(t, e) {
    this.quaternion.setFromAxisAngle(t, e);
  }
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, !0);
  }
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  rotateOnAxis(t, e) {
    return Fn.setFromAxisAngle(t, e), this.quaternion.multiply(Fn), this;
  }
  rotateOnWorldAxis(t, e) {
    return Fn.setFromAxisAngle(t, e), this.quaternion.premultiply(Fn), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(_a, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(va, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(xa, t);
  }
  translateOnAxis(t, e) {
    return ga.copy(t).applyQuaternion(this.quaternion), this.position.add(ga.multiplyScalar(e)), this;
  }
  translateX(t) {
    return this.translateOnAxis(_a, t);
  }
  translateY(t) {
    return this.translateOnAxis(va, t);
  }
  translateZ(t) {
    return this.translateOnAxis(xa, t);
  }
  localToWorld(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(We.copy(this.matrixWorld).invert());
  }
  lookAt(t, e, n) {
    t.isVector3 ? Hi.copy(t) : Hi.set(t, e, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), di.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? We.lookAt(di, Hi, this.up) : We.lookAt(Hi, di, this.up), this.quaternion.setFromRotationMatrix(We), r && (We.extractRotation(r.matrixWorld), Fn.setFromRotationMatrix(We), this.quaternion.premultiply(Fn.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++)
        this.add(arguments[e]);
      return this;
    }
    return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(Ma), On.child = t, this.dispatchEvent(On), On.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const e = this.children.indexOf(t);
    return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(Pc), Hr.child = t, this.dispatchEvent(Hr), Hr.child = null), this;
  }
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t) {
    return this.updateWorldMatrix(!0, !1), We.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), We.multiply(t.parent.matrixWorld)), t.applyMatrix4(We), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(!1, !0), t.dispatchEvent(Ma), On.child = t, this.dispatchEvent(On), On.child = null, this;
  }
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  getObjectByProperty(t, e) {
    if (this[t] === e)
      return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const a = this.children[n].getObjectByProperty(t, e);
      if (a !== void 0)
        return a;
    }
  }
  getObjectsByProperty(t, e, n = []) {
    this[t] === e && n.push(this);
    const r = this.children;
    for (let s = 0, a = r.length; s < a; s++)
      r[s].getObjectsByProperty(t, e, n);
    return n;
  }
  getWorldPosition(t) {
    return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(di, t, Rc), t;
  }
  getWorldScale(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(di, Cc, t), t;
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(!0, !1);
    const e = this.matrixWorld.elements;
    return t.set(e[8], e[9], e[10]).normalize();
  }
  raycast() {
  }
  traverse(t) {
    t(this);
    const e = this.children;
    for (let n = 0, r = e.length; n < r; n++)
      e[n].traverse(t);
  }
  traverseVisible(t) {
    if (this.visible === !1)
      return;
    t(this);
    const e = this.children;
    for (let n = 0, r = e.length; n < r; n++)
      e[n].traverseVisible(t);
  }
  traverseAncestors(t) {
    const e = this.parent;
    e !== null && (t(e), e.traverseAncestors(t));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
    const e = this.children;
    for (let n = 0, r = e.length; n < r; n++) {
      const s = e[n];
      (s.matrixWorldAutoUpdate === !0 || t === !0) && s.updateMatrixWorld(t);
    }
  }
  updateWorldMatrix(t, e) {
    const n = this.parent;
    if (t === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), e === !0) {
      const r = this.children;
      for (let s = 0, a = r.length; s < a; s++) {
        const o = r[s];
        o.matrixWorldAutoUpdate === !0 && o.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string", n = {};
    e && (t = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const r = {};
    r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.visibility = this._visibility, r.active = this._active, r.bounds = this._bounds.map((o) => ({
      boxInitialized: o.boxInitialized,
      boxMin: o.box.min.toArray(),
      boxMax: o.box.max.toArray(),
      sphereInitialized: o.sphereInitialized,
      sphereRadius: o.sphere.radius,
      sphereCenter: o.sphere.center.toArray()
    })), r.maxGeometryCount = this._maxGeometryCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.geometryCount = this._geometryCount, r.matricesTexture = this._matricesTexture.toJSON(t), this.boundingSphere !== null && (r.boundingSphere = {
      center: r.boundingSphere.center.toArray(),
      radius: r.boundingSphere.radius
    }), this.boundingBox !== null && (r.boundingBox = {
      min: r.boundingBox.min.toArray(),
      max: r.boundingBox.max.toArray()
    }));
    function s(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(t)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(t.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l))
          for (let c = 0, u = l.length; c < u; c++) {
            const p = l[c];
            s(t.shapes, p);
          }
        else
          s(t.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(t.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(s(t.materials, this.material[l]));
        r.material = o;
      } else
        r.material = s(t.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let o = 0; o < this.children.length; o++)
        r.children.push(this.children[o].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        r.animations.push(s(t.animations, l));
      }
    }
    if (e) {
      const o = a(t.geometries), l = a(t.materials), c = a(t.textures), u = a(t.images), p = a(t.shapes), f = a(t.skeletons), m = a(t.animations), g = a(t.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), u.length > 0 && (n.images = u), p.length > 0 && (n.shapes = p), f.length > 0 && (n.skeletons = f), m.length > 0 && (n.animations = m), g.length > 0 && (n.nodes = g);
    }
    return n.object = r, n;
    function a(o) {
      const l = [];
      for (const c in o) {
        const u = o[c];
        delete u.metadata, l.push(u);
      }
      return l;
    }
  }
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  copy(t, e = !0) {
    if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), e === !0)
      for (let n = 0; n < t.children.length; n++) {
        const r = t.children[n];
        this.add(r.clone());
      }
    return this;
  }
}
ae.DEFAULT_UP = /* @__PURE__ */ new B(0, 1, 0);
ae.DEFAULT_MATRIX_AUTO_UPDATE = !0;
ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const De = /* @__PURE__ */ new B(), Xe = /* @__PURE__ */ new B(), Vr = /* @__PURE__ */ new B(), qe = /* @__PURE__ */ new B(), Bn = /* @__PURE__ */ new B(), zn = /* @__PURE__ */ new B(), Sa = /* @__PURE__ */ new B(), Gr = /* @__PURE__ */ new B(), kr = /* @__PURE__ */ new B(), Wr = /* @__PURE__ */ new B();
class Oe {
  constructor(t = new B(), e = new B(), n = new B()) {
    this.a = t, this.b = e, this.c = n;
  }
  static getNormal(t, e, n, r) {
    r.subVectors(n, e), De.subVectors(t, e), r.cross(De);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(t, e, n, r, s) {
    De.subVectors(r, e), Xe.subVectors(n, e), Vr.subVectors(t, e);
    const a = De.dot(De), o = De.dot(Xe), l = De.dot(Vr), c = Xe.dot(Xe), u = Xe.dot(Vr), p = a * c - o * o;
    if (p === 0)
      return s.set(0, 0, 0), null;
    const f = 1 / p, m = (c * l - o * u) * f, g = (a * u - o * l) * f;
    return s.set(1 - m - g, g, m);
  }
  static containsPoint(t, e, n, r) {
    return this.getBarycoord(t, e, n, r, qe) === null ? !1 : qe.x >= 0 && qe.y >= 0 && qe.x + qe.y <= 1;
  }
  static getInterpolation(t, e, n, r, s, a, o, l) {
    return this.getBarycoord(t, e, n, r, qe) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, qe.x), l.addScaledVector(a, qe.y), l.addScaledVector(o, qe.z), l);
  }
  static isFrontFacing(t, e, n, r) {
    return De.subVectors(n, e), Xe.subVectors(t, e), De.cross(Xe).dot(r) < 0;
  }
  set(t, e, n) {
    return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
  }
  setFromPointsAndIndices(t, e, n, r) {
    return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[r]), this;
  }
  setFromAttributeAndIndices(t, e, n, r) {
    return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, n), this.c.fromBufferAttribute(t, r), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
  }
  getArea() {
    return De.subVectors(this.c, this.b), Xe.subVectors(this.a, this.b), De.cross(Xe).length() * 0.5;
  }
  getMidpoint(t) {
    return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return Oe.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, e) {
    return Oe.getBarycoord(t, this.a, this.b, this.c, e);
  }
  getInterpolation(t, e, n, r, s) {
    return Oe.getInterpolation(t, this.a, this.b, this.c, e, n, r, s);
  }
  containsPoint(t) {
    return Oe.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return Oe.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, e) {
    const n = this.a, r = this.b, s = this.c;
    let a, o;
    Bn.subVectors(r, n), zn.subVectors(s, n), Gr.subVectors(t, n);
    const l = Bn.dot(Gr), c = zn.dot(Gr);
    if (l <= 0 && c <= 0)
      return e.copy(n);
    kr.subVectors(t, r);
    const u = Bn.dot(kr), p = zn.dot(kr);
    if (u >= 0 && p <= u)
      return e.copy(r);
    const f = l * p - u * c;
    if (f <= 0 && l >= 0 && u <= 0)
      return a = l / (l - u), e.copy(n).addScaledVector(Bn, a);
    Wr.subVectors(t, s);
    const m = Bn.dot(Wr), g = zn.dot(Wr);
    if (g >= 0 && m <= g)
      return e.copy(s);
    const v = m * c - l * g;
    if (v <= 0 && c >= 0 && g <= 0)
      return o = c / (c - g), e.copy(n).addScaledVector(zn, o);
    const d = u * g - m * p;
    if (d <= 0 && p - u >= 0 && m - g >= 0)
      return Sa.subVectors(s, r), o = (p - u) / (p - u + (m - g)), e.copy(r).addScaledVector(Sa, o);
    const h = 1 / (d + v + f);
    return a = v * h, o = f * h, e.copy(n).addScaledVector(Bn, a).addScaledVector(zn, o);
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}
const Ro = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, sn = { h: 0, s: 0, l: 0 }, Vi = { h: 0, s: 0, l: 0 };
function Xr(i, t, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? i + (t - i) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? i + (t - i) * 6 * (2 / 3 - e) : i;
}
class Pt {
  constructor(t, e, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(t, e, n);
  }
  set(t, e, n) {
    if (e === void 0 && n === void 0) {
      const r = t;
      r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r);
    } else
      this.setRGB(t, e, n);
    return this;
  }
  setScalar(t) {
    return this.r = t, this.g = t, this.b = t, this;
  }
  setHex(t, e = Ne) {
    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, Xt.toWorkingColorSpace(this, e), this;
  }
  setRGB(t, e, n, r = Xt.workingColorSpace) {
    return this.r = t, this.g = e, this.b = n, Xt.toWorkingColorSpace(this, r), this;
  }
  setHSL(t, e, n, r = Xt.workingColorSpace) {
    if (t = mc(t, 1), e = ge(e, 0, 1), n = ge(n, 0, 1), e === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + e) : n + e - n * e, a = 2 * n - s;
      this.r = Xr(a, s, t + 1 / 3), this.g = Xr(a, s, t), this.b = Xr(a, s, t - 1 / 3);
    }
    return Xt.toWorkingColorSpace(this, r), this;
  }
  setStyle(t, e = Ne) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
    }
    let r;
    if (r = /^(\w+)\(([^\)]*)\)/.exec(t)) {
      let s;
      const a = r[1], o = r[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(255, parseInt(s[1], 10)) / 255,
              Math.min(255, parseInt(s[2], 10)) / 255,
              Math.min(255, parseInt(s[3], 10)) / 255,
              e
            );
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(100, parseInt(s[1], 10)) / 100,
              Math.min(100, parseInt(s[2], 10)) / 100,
              Math.min(100, parseInt(s[3], 10)) / 100,
              e
            );
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setHSL(
              parseFloat(s[1]) / 360,
              parseFloat(s[2]) / 100,
              parseFloat(s[3]) / 100,
              e
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + t);
      }
    } else if (r = /^\#([A-Fa-f\d]+)$/.exec(t)) {
      const s = r[1], a = s.length;
      if (a === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          e
        );
      if (a === 6)
        return this.setHex(parseInt(s, 16), e);
      console.warn("THREE.Color: Invalid hex color " + t);
    } else if (t && t.length > 0)
      return this.setColorName(t, e);
    return this;
  }
  setColorName(t, e = Ne) {
    const n = Ro[t.toLowerCase()];
    return n !== void 0 ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(t) {
    return this.r = t.r, this.g = t.g, this.b = t.b, this;
  }
  copySRGBToLinear(t) {
    return this.r = Jn(t.r), this.g = Jn(t.g), this.b = Jn(t.b), this;
  }
  copyLinearToSRGB(t) {
    return this.r = Dr(t.r), this.g = Dr(t.g), this.b = Dr(t.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(t = Ne) {
    return Xt.fromWorkingColorSpace(de.copy(this), t), Math.round(ge(de.r * 255, 0, 255)) * 65536 + Math.round(ge(de.g * 255, 0, 255)) * 256 + Math.round(ge(de.b * 255, 0, 255));
  }
  getHexString(t = Ne) {
    return ("000000" + this.getHex(t).toString(16)).slice(-6);
  }
  getHSL(t, e = Xt.workingColorSpace) {
    Xt.fromWorkingColorSpace(de.copy(this), e);
    const n = de.r, r = de.g, s = de.b, a = Math.max(n, r, s), o = Math.min(n, r, s);
    let l, c;
    const u = (o + a) / 2;
    if (o === a)
      l = 0, c = 0;
    else {
      const p = a - o;
      switch (c = u <= 0.5 ? p / (a + o) : p / (2 - a - o), a) {
        case n:
          l = (r - s) / p + (r < s ? 6 : 0);
          break;
        case r:
          l = (s - n) / p + 2;
          break;
        case s:
          l = (n - r) / p + 4;
          break;
      }
      l /= 6;
    }
    return t.h = l, t.s = c, t.l = u, t;
  }
  getRGB(t, e = Xt.workingColorSpace) {
    return Xt.fromWorkingColorSpace(de.copy(this), e), t.r = de.r, t.g = de.g, t.b = de.b, t;
  }
  getStyle(t = Ne) {
    Xt.fromWorkingColorSpace(de.copy(this), t);
    const e = de.r, n = de.g, r = de.b;
    return t !== Ne ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
  }
  offsetHSL(t, e, n) {
    return this.getHSL(sn), this.setHSL(sn.h + t, sn.s + e, sn.l + n);
  }
  add(t) {
    return this.r += t.r, this.g += t.g, this.b += t.b, this;
  }
  addColors(t, e) {
    return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this;
  }
  addScalar(t) {
    return this.r += t, this.g += t, this.b += t, this;
  }
  sub(t) {
    return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
  }
  multiply(t) {
    return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
  }
  multiplyScalar(t) {
    return this.r *= t, this.g *= t, this.b *= t, this;
  }
  lerp(t, e) {
    return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this;
  }
  lerpColors(t, e, n) {
    return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this;
  }
  lerpHSL(t, e) {
    this.getHSL(sn), t.getHSL(Vi);
    const n = Pr(sn.h, Vi.h, e), r = Pr(sn.s, Vi.s, e), s = Pr(sn.l, Vi.l, e);
    return this.setHSL(n, r, s), this;
  }
  setFromVector3(t) {
    return this.r = t.x, this.g = t.y, this.b = t.z, this;
  }
  applyMatrix3(t) {
    const e = this.r, n = this.g, r = this.b, s = t.elements;
    return this.r = s[0] * e + s[3] * n + s[6] * r, this.g = s[1] * e + s[4] * n + s[7] * r, this.b = s[2] * e + s[5] * n + s[8] * r, this;
  }
  equals(t) {
    return t.r === this.r && t.g === this.g && t.b === this.b;
  }
  fromArray(t, e = 0) {
    return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
  }
  fromBufferAttribute(t, e) {
    return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const de = /* @__PURE__ */ new Pt();
Pt.NAMES = Ro;
let Lc = 0;
class Ri extends ri {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Lc++ }), this.uuid = bi(), this.name = "", this.type = "Material", this.blending = Kn, this.side = un, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = rs, this.blendDst = ss, this.blendEquation = En, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Pt(0, 0, 0), this.blendAlpha = 0, this.depthFunc = ar, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = oa, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Pn, this.stencilZFail = Pn, this.stencilZPass = Pn, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(t) {
    this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(t) {
    if (t !== void 0)
      for (const e in t) {
        const n = t[e];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);
          continue;
        }
        const r = this[e];
        if (r === void 0) {
          console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);
          continue;
        }
        r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[e] = n;
      }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    e && (t = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Kn && (n.blending = this.blending), this.side !== un && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== rs && (n.blendSrc = this.blendSrc), this.blendDst !== ss && (n.blendDst = this.blendDst), this.blendEquation !== En && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== ar && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== oa && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Pn && (n.stencilFail = this.stencilFail), this.stencilZFail !== Pn && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Pn && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function r(s) {
      const a = [];
      for (const o in s) {
        const l = s[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (e) {
      const s = r(t.textures), a = r(t.images);
      s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.blendColor.copy(t.blendColor), this.blendAlpha = t.blendAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
    const e = t.clippingPlanes;
    let n = null;
    if (e !== null) {
      const r = e.length;
      n = new Array(r);
      for (let s = 0; s !== r; ++s)
        n[s] = e[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaHash = t.alphaHash, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.forceSinglePass = t.forceSinglePass, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
}
class xs extends Ri {
  constructor(t) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Pt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Ze(), this.combine = po, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
  }
}
const ee = /* @__PURE__ */ new B(), Gi = /* @__PURE__ */ new zt();
class Ce {
  constructor(t, e, n = !1) {
    if (Array.isArray(t))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = n, this.usage = la, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.gpuType = je, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  get updateRange() {
    return _c("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
  }
  setUsage(t) {
    return this.usage = t, this;
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(t) {
    return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this.gpuType = t.gpuType, this;
  }
  copyAt(t, e, n) {
    t *= this.itemSize, n *= e.itemSize;
    for (let r = 0, s = this.itemSize; r < s; r++)
      this.array[t + r] = e.array[n + r];
    return this;
  }
  copyArray(t) {
    return this.array.set(t), this;
  }
  applyMatrix3(t) {
    if (this.itemSize === 2)
      for (let e = 0, n = this.count; e < n; e++)
        Gi.fromBufferAttribute(this, e), Gi.applyMatrix3(t), this.setXY(e, Gi.x, Gi.y);
    else if (this.itemSize === 3)
      for (let e = 0, n = this.count; e < n; e++)
        ee.fromBufferAttribute(this, e), ee.applyMatrix3(t), this.setXYZ(e, ee.x, ee.y, ee.z);
    return this;
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.count; e < n; e++)
      ee.fromBufferAttribute(this, e), ee.applyMatrix4(t), this.setXYZ(e, ee.x, ee.y, ee.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++)
      ee.fromBufferAttribute(this, e), ee.applyNormalMatrix(t), this.setXYZ(e, ee.x, ee.y, ee.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++)
      ee.fromBufferAttribute(this, e), ee.transformDirection(t), this.setXYZ(e, ee.x, ee.y, ee.z);
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  getComponent(t, e) {
    let n = this.array[t * this.itemSize + e];
    return this.normalized && (n = ci(n, this.array)), n;
  }
  setComponent(t, e, n) {
    return this.normalized && (n = ve(n, this.array)), this.array[t * this.itemSize + e] = n, this;
  }
  getX(t) {
    let e = this.array[t * this.itemSize];
    return this.normalized && (e = ci(e, this.array)), e;
  }
  setX(t, e) {
    return this.normalized && (e = ve(e, this.array)), this.array[t * this.itemSize] = e, this;
  }
  getY(t) {
    let e = this.array[t * this.itemSize + 1];
    return this.normalized && (e = ci(e, this.array)), e;
  }
  setY(t, e) {
    return this.normalized && (e = ve(e, this.array)), this.array[t * this.itemSize + 1] = e, this;
  }
  getZ(t) {
    let e = this.array[t * this.itemSize + 2];
    return this.normalized && (e = ci(e, this.array)), e;
  }
  setZ(t, e) {
    return this.normalized && (e = ve(e, this.array)), this.array[t * this.itemSize + 2] = e, this;
  }
  getW(t) {
    let e = this.array[t * this.itemSize + 3];
    return this.normalized && (e = ci(e, this.array)), e;
  }
  setW(t, e) {
    return this.normalized && (e = ve(e, this.array)), this.array[t * this.itemSize + 3] = e, this;
  }
  setXY(t, e, n) {
    return t *= this.itemSize, this.normalized && (e = ve(e, this.array), n = ve(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this;
  }
  setXYZ(t, e, n, r) {
    return t *= this.itemSize, this.normalized && (e = ve(e, this.array), n = ve(n, this.array), r = ve(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = r, this;
  }
  setXYZW(t, e, n, r, s) {
    return t *= this.itemSize, this.normalized && (e = ve(e, this.array), n = ve(n, this.array), r = ve(r, this.array), s = ve(s, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = r, this.array[t + 3] = s, this;
  }
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const t = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (t.name = this.name), this.usage !== la && (t.usage = this.usage), t;
  }
}
class Co extends Ce {
  constructor(t, e, n) {
    super(new Uint16Array(t), e, n);
  }
}
class Po extends Ce {
  constructor(t, e, n) {
    super(new Uint32Array(t), e, n);
  }
}
class be extends Ce {
  constructor(t, e, n) {
    super(new Float32Array(t), e, n);
  }
}
let Dc = 0;
const Re = /* @__PURE__ */ new qt(), qr = /* @__PURE__ */ new ae(), Hn = /* @__PURE__ */ new B(), ye = /* @__PURE__ */ new wn(), fi = /* @__PURE__ */ new wn(), re = /* @__PURE__ */ new B();
class He extends ri {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Dc++ }), this.uuid = bi(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return Array.isArray(t) ? this.index = new (Ao(t) ? Po : Co)(t, 1) : this.index = t, this;
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  setAttribute(t, e) {
    return this.attributes[t] = e, this;
  }
  deleteAttribute(t) {
    return delete this.attributes[t], this;
  }
  hasAttribute(t) {
    return this.attributes[t] !== void 0;
  }
  addGroup(t, e, n = 0) {
    this.groups.push({
      start: t,
      count: e,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(t, e) {
    this.drawRange.start = t, this.drawRange.count = e;
  }
  applyMatrix4(t) {
    const e = this.attributes.position;
    e !== void 0 && (e.applyMatrix4(t), e.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Ct().getNormalMatrix(t);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(t), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(t) {
    return Re.makeRotationFromQuaternion(t), this.applyMatrix4(Re), this;
  }
  rotateX(t) {
    return Re.makeRotationX(t), this.applyMatrix4(Re), this;
  }
  rotateY(t) {
    return Re.makeRotationY(t), this.applyMatrix4(Re), this;
  }
  rotateZ(t) {
    return Re.makeRotationZ(t), this.applyMatrix4(Re), this;
  }
  translate(t, e, n) {
    return Re.makeTranslation(t, e, n), this.applyMatrix4(Re), this;
  }
  scale(t, e, n) {
    return Re.makeScale(t, e, n), this.applyMatrix4(Re), this;
  }
  lookAt(t) {
    return qr.lookAt(t), qr.updateMatrix(), this.applyMatrix4(qr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Hn).negate(), this.translate(Hn.x, Hn.y, Hn.z), this;
  }
  setFromPoints(t) {
    const e = [];
    for (let n = 0, r = t.length; n < r; n++) {
      const s = t[n];
      e.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new be(e, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new wn());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new B(-1 / 0, -1 / 0, -1 / 0),
        new B(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (t !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(t), e)
        for (let n = 0, r = e.length; n < r; n++) {
          const s = e[n];
          ye.setFromBufferAttribute(s), this.morphTargetsRelative ? (re.addVectors(this.boundingBox.min, ye.min), this.boundingBox.expandByPoint(re), re.addVectors(this.boundingBox.max, ye.max), this.boundingBox.expandByPoint(re)) : (this.boundingBox.expandByPoint(ye.min), this.boundingBox.expandByPoint(ye.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new si());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new B(), 1 / 0);
      return;
    }
    if (t) {
      const n = this.boundingSphere.center;
      if (ye.setFromBufferAttribute(t), e)
        for (let s = 0, a = e.length; s < a; s++) {
          const o = e[s];
          fi.setFromBufferAttribute(o), this.morphTargetsRelative ? (re.addVectors(ye.min, fi.min), ye.expandByPoint(re), re.addVectors(ye.max, fi.max), ye.expandByPoint(re)) : (ye.expandByPoint(fi.min), ye.expandByPoint(fi.max));
        }
      ye.getCenter(n);
      let r = 0;
      for (let s = 0, a = t.count; s < a; s++)
        re.fromBufferAttribute(t, s), r = Math.max(r, n.distanceToSquared(re));
      if (e)
        for (let s = 0, a = e.length; s < a; s++) {
          const o = e[s], l = this.morphTargetsRelative;
          for (let c = 0, u = o.count; c < u; c++)
            re.fromBufferAttribute(o, c), l && (Hn.fromBufferAttribute(t, c), re.add(Hn)), r = Math.max(r, n.distanceToSquared(re));
        }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const t = this.index, e = this.attributes;
    if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.position, r = e.normal, s = e.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Ce(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], l = [];
    for (let k = 0; k < n.count; k++)
      o[k] = new B(), l[k] = new B();
    const c = new B(), u = new B(), p = new B(), f = new zt(), m = new zt(), g = new zt(), v = new B(), d = new B();
    function h(k, S, _) {
      c.fromBufferAttribute(n, k), u.fromBufferAttribute(n, S), p.fromBufferAttribute(n, _), f.fromBufferAttribute(s, k), m.fromBufferAttribute(s, S), g.fromBufferAttribute(s, _), u.sub(c), p.sub(c), m.sub(f), g.sub(f);
      const L = 1 / (m.x * g.y - g.x * m.y);
      isFinite(L) && (v.copy(u).multiplyScalar(g.y).addScaledVector(p, -m.y).multiplyScalar(L), d.copy(p).multiplyScalar(m.x).addScaledVector(u, -g.x).multiplyScalar(L), o[k].add(v), o[S].add(v), o[_].add(v), l[k].add(d), l[S].add(d), l[_].add(d));
    }
    let A = this.groups;
    A.length === 0 && (A = [{
      start: 0,
      count: t.count
    }]);
    for (let k = 0, S = A.length; k < S; ++k) {
      const _ = A[k], L = _.start, R = _.count;
      for (let y = L, P = L + R; y < P; y += 3)
        h(
          t.getX(y + 0),
          t.getX(y + 1),
          t.getX(y + 2)
        );
    }
    const E = new B(), b = new B(), V = new B(), w = new B();
    function C(k) {
      V.fromBufferAttribute(r, k), w.copy(V);
      const S = o[k];
      E.copy(S), E.sub(V.multiplyScalar(V.dot(S))).normalize(), b.crossVectors(w, S);
      const L = b.dot(l[k]) < 0 ? -1 : 1;
      a.setXYZW(k, E.x, E.y, E.z, L);
    }
    for (let k = 0, S = A.length; k < S; ++k) {
      const _ = A[k], L = _.start, R = _.count;
      for (let y = L, P = L + R; y < P; y += 3)
        C(t.getX(y + 0)), C(t.getX(y + 1)), C(t.getX(y + 2));
    }
  }
  computeVertexNormals() {
    const t = this.index, e = this.getAttribute("position");
    if (e !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Ce(new Float32Array(e.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let f = 0, m = n.count; f < m; f++)
          n.setXYZ(f, 0, 0, 0);
      const r = new B(), s = new B(), a = new B(), o = new B(), l = new B(), c = new B(), u = new B(), p = new B();
      if (t)
        for (let f = 0, m = t.count; f < m; f += 3) {
          const g = t.getX(f + 0), v = t.getX(f + 1), d = t.getX(f + 2);
          r.fromBufferAttribute(e, g), s.fromBufferAttribute(e, v), a.fromBufferAttribute(e, d), u.subVectors(a, s), p.subVectors(r, s), u.cross(p), o.fromBufferAttribute(n, g), l.fromBufferAttribute(n, v), c.fromBufferAttribute(n, d), o.add(u), l.add(u), c.add(u), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(v, l.x, l.y, l.z), n.setXYZ(d, c.x, c.y, c.z);
        }
      else
        for (let f = 0, m = e.count; f < m; f += 3)
          r.fromBufferAttribute(e, f + 0), s.fromBufferAttribute(e, f + 1), a.fromBufferAttribute(e, f + 2), u.subVectors(a, s), p.subVectors(r, s), u.cross(p), n.setXYZ(f + 0, u.x, u.y, u.z), n.setXYZ(f + 1, u.x, u.y, u.z), n.setXYZ(f + 2, u.x, u.y, u.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let e = 0, n = t.count; e < n; e++)
      re.fromBufferAttribute(t, e), re.normalize(), t.setXYZ(e, re.x, re.y, re.z);
  }
  toNonIndexed() {
    function t(o, l) {
      const c = o.array, u = o.itemSize, p = o.normalized, f = new c.constructor(l.length * u);
      let m = 0, g = 0;
      for (let v = 0, d = l.length; v < d; v++) {
        o.isInterleavedBufferAttribute ? m = l[v] * o.data.stride + o.offset : m = l[v] * u;
        for (let h = 0; h < u; h++)
          f[g++] = c[m++];
      }
      return new Ce(f, u, p);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const e = new He(), n = this.index.array, r = this.attributes;
    for (const o in r) {
      const l = r[o], c = t(l, n);
      e.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [], c = s[o];
      for (let u = 0, p = c.length; u < p; u++) {
        const f = c[u], m = t(f, n);
        l.push(m);
      }
      e.morphAttributes[o] = l;
    }
    e.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      e.addGroup(c.start, c.count, c.materialIndex);
    }
    return e;
  }
  toJSON() {
    const t = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l)
        l[c] !== void 0 && (t[c] = l[c]);
      return t;
    }
    t.data = { attributes: {} };
    const e = this.index;
    e !== null && (t.data.index = {
      type: e.array.constructor.name,
      array: Array.prototype.slice.call(e.array)
    });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      t.data.attributes[l] = c.toJSON(t.data);
    }
    const r = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], u = [];
      for (let p = 0, f = c.length; p < f; p++) {
        const m = c[p];
        u.push(m.toJSON(t.data));
      }
      u.length > 0 && (r[l] = u, s = !0);
    }
    s && (t.data.morphAttributes = r, t.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (t.data.boundingSphere = {
      center: o.center.toArray(),
      radius: o.radius
    }), t;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const e = {};
    this.name = t.name;
    const n = t.index;
    n !== null && this.setIndex(n.clone(e));
    const r = t.attributes;
    for (const c in r) {
      const u = r[c];
      this.setAttribute(c, u.clone(e));
    }
    const s = t.morphAttributes;
    for (const c in s) {
      const u = [], p = s[c];
      for (let f = 0, m = p.length; f < m; f++)
        u.push(p[f].clone(e));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const a = t.groups;
    for (let c = 0, u = a.length; c < u; c++) {
      const p = a[c];
      this.addGroup(p.start, p.count, p.materialIndex);
    }
    const o = t.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = t.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Ea = /* @__PURE__ */ new qt(), gn = /* @__PURE__ */ new _s(), ki = /* @__PURE__ */ new si(), ya = /* @__PURE__ */ new B(), Vn = /* @__PURE__ */ new B(), Gn = /* @__PURE__ */ new B(), kn = /* @__PURE__ */ new B(), Yr = /* @__PURE__ */ new B(), Wi = /* @__PURE__ */ new B(), Xi = /* @__PURE__ */ new zt(), qi = /* @__PURE__ */ new zt(), Yi = /* @__PURE__ */ new zt(), Ta = /* @__PURE__ */ new B(), Aa = /* @__PURE__ */ new B(), ba = /* @__PURE__ */ new B(), $i = /* @__PURE__ */ new B(), ji = /* @__PURE__ */ new B();
class Ae extends ae {
  constructor(t = new He(), e = new xs()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, n = Object.keys(e);
    if (n.length > 0) {
      const r = e[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
  getVertexPosition(t, e) {
    const n = this.geometry, r = n.attributes.position, s = n.morphAttributes.position, a = n.morphTargetsRelative;
    e.fromBufferAttribute(r, t);
    const o = this.morphTargetInfluences;
    if (s && o) {
      Wi.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const u = o[l], p = s[l];
        u !== 0 && (Yr.fromBufferAttribute(p, t), a ? Wi.addScaledVector(Yr, u) : Wi.addScaledVector(Yr.sub(e), u));
      }
      e.add(Wi);
    }
    return e;
  }
  raycast(t, e) {
    const n = this.geometry, r = this.material, s = this.matrixWorld;
    r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), ki.copy(n.boundingSphere), ki.applyMatrix4(s), gn.copy(t.ray).recast(t.near), !(ki.containsPoint(gn.origin) === !1 && (gn.intersectSphere(ki, ya) === null || gn.origin.distanceToSquared(ya) > (t.far - t.near) ** 2)) && (Ea.copy(s).invert(), gn.copy(t.ray).applyMatrix4(Ea), !(n.boundingBox !== null && gn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(t, e, gn)));
  }
  _computeIntersections(t, e, n) {
    let r;
    const s = this.geometry, a = this.material, o = s.index, l = s.attributes.position, c = s.attributes.uv, u = s.attributes.uv1, p = s.attributes.normal, f = s.groups, m = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let g = 0, v = f.length; g < v; g++) {
          const d = f[g], h = a[d.materialIndex], A = Math.max(d.start, m.start), E = Math.min(o.count, Math.min(d.start + d.count, m.start + m.count));
          for (let b = A, V = E; b < V; b += 3) {
            const w = o.getX(b), C = o.getX(b + 1), k = o.getX(b + 2);
            r = Ki(this, h, t, n, c, u, p, w, C, k), r && (r.faceIndex = Math.floor(b / 3), r.face.materialIndex = d.materialIndex, e.push(r));
          }
        }
      else {
        const g = Math.max(0, m.start), v = Math.min(o.count, m.start + m.count);
        for (let d = g, h = v; d < h; d += 3) {
          const A = o.getX(d), E = o.getX(d + 1), b = o.getX(d + 2);
          r = Ki(this, a, t, n, c, u, p, A, E, b), r && (r.faceIndex = Math.floor(d / 3), e.push(r));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(a))
        for (let g = 0, v = f.length; g < v; g++) {
          const d = f[g], h = a[d.materialIndex], A = Math.max(d.start, m.start), E = Math.min(l.count, Math.min(d.start + d.count, m.start + m.count));
          for (let b = A, V = E; b < V; b += 3) {
            const w = b, C = b + 1, k = b + 2;
            r = Ki(this, h, t, n, c, u, p, w, C, k), r && (r.faceIndex = Math.floor(b / 3), r.face.materialIndex = d.materialIndex, e.push(r));
          }
        }
      else {
        const g = Math.max(0, m.start), v = Math.min(l.count, m.start + m.count);
        for (let d = g, h = v; d < h; d += 3) {
          const A = d, E = d + 1, b = d + 2;
          r = Ki(this, a, t, n, c, u, p, A, E, b), r && (r.faceIndex = Math.floor(d / 3), e.push(r));
        }
      }
  }
}
function Uc(i, t, e, n, r, s, a, o) {
  let l;
  if (t.side === Me ? l = n.intersectTriangle(a, s, r, !0, o) : l = n.intersectTriangle(r, s, a, t.side === un, o), l === null)
    return null;
  ji.copy(o), ji.applyMatrix4(i.matrixWorld);
  const c = e.ray.origin.distanceTo(ji);
  return c < e.near || c > e.far ? null : {
    distance: c,
    point: ji.clone(),
    object: i
  };
}
function Ki(i, t, e, n, r, s, a, o, l, c) {
  i.getVertexPosition(o, Vn), i.getVertexPosition(l, Gn), i.getVertexPosition(c, kn);
  const u = Uc(i, t, e, n, Vn, Gn, kn, $i);
  if (u) {
    r && (Xi.fromBufferAttribute(r, o), qi.fromBufferAttribute(r, l), Yi.fromBufferAttribute(r, c), u.uv = Oe.getInterpolation($i, Vn, Gn, kn, Xi, qi, Yi, new zt())), s && (Xi.fromBufferAttribute(s, o), qi.fromBufferAttribute(s, l), Yi.fromBufferAttribute(s, c), u.uv1 = Oe.getInterpolation($i, Vn, Gn, kn, Xi, qi, Yi, new zt())), a && (Ta.fromBufferAttribute(a, o), Aa.fromBufferAttribute(a, l), ba.fromBufferAttribute(a, c), u.normal = Oe.getInterpolation($i, Vn, Gn, kn, Ta, Aa, ba, new B()), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const p = {
      a: o,
      b: l,
      c,
      normal: new B(),
      materialIndex: 0
    };
    Oe.getNormal(Vn, Gn, kn, p.normal), u.face = p;
  }
  return u;
}
class Rn extends He {
  constructor(t = 1, e = 1, n = 1, r = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: t,
      height: e,
      depth: n,
      widthSegments: r,
      heightSegments: s,
      depthSegments: a
    };
    const o = this;
    r = Math.floor(r), s = Math.floor(s), a = Math.floor(a);
    const l = [], c = [], u = [], p = [];
    let f = 0, m = 0;
    g("z", "y", "x", -1, -1, n, e, t, a, s, 0), g("z", "y", "x", 1, -1, n, e, -t, a, s, 1), g("x", "z", "y", 1, 1, t, n, e, r, a, 2), g("x", "z", "y", 1, -1, t, n, -e, r, a, 3), g("x", "y", "z", 1, -1, t, e, n, r, s, 4), g("x", "y", "z", -1, -1, t, e, -n, r, s, 5), this.setIndex(l), this.setAttribute("position", new be(c, 3)), this.setAttribute("normal", new be(u, 3)), this.setAttribute("uv", new be(p, 2));
    function g(v, d, h, A, E, b, V, w, C, k, S) {
      const _ = b / C, L = V / k, R = b / 2, y = V / 2, P = w / 2, U = C + 1, O = k + 1;
      let $ = 0, N = 0;
      const j = new B();
      for (let J = 0; J < O; J++) {
        const lt = J * L - y;
        for (let _t = 0; _t < U; _t++) {
          const Et = _t * _ - R;
          j[v] = Et * A, j[d] = lt * E, j[h] = P, c.push(j.x, j.y, j.z), j[v] = 0, j[d] = 0, j[h] = w > 0 ? 1 : -1, u.push(j.x, j.y, j.z), p.push(_t / C), p.push(1 - J / k), $ += 1;
        }
      }
      for (let J = 0; J < k; J++)
        for (let lt = 0; lt < C; lt++) {
          const _t = f + lt + U * J, Et = f + lt + U * (J + 1), W = f + (lt + 1) + U * (J + 1), q = f + (lt + 1) + U * J;
          l.push(_t, Et, q), l.push(Et, W, q), N += 6;
        }
      o.addGroup(m, N, S), m += N, f += $;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Rn(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
  }
}
function ii(i) {
  const t = {};
  for (const e in i) {
    t[e] = {};
    for (const n in i[e]) {
      const r = i[e][n];
      r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[e][n] = null) : t[e][n] = r.clone() : Array.isArray(r) ? t[e][n] = r.slice() : t[e][n] = r;
    }
  }
  return t;
}
function pe(i) {
  const t = {};
  for (let e = 0; e < i.length; e++) {
    const n = ii(i[e]);
    for (const r in n)
      t[r] = n[r];
  }
  return t;
}
function Ic(i) {
  const t = [];
  for (let e = 0; e < i.length; e++)
    t.push(i[e].clone());
  return t;
}
function Lo(i) {
  const t = i.getRenderTarget();
  return t === null ? i.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : Xt.workingColorSpace;
}
const Nc = { clone: ii, merge: pe };
var Fc = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Oc = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Je extends Ri {
  constructor(t) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Fc, this.fragmentShader = Oc, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, t !== void 0 && this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = ii(t.uniforms), this.uniformsGroups = Ic(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    e.glslVersion = this.glslVersion, e.uniforms = {};
    for (const r in this.uniforms) {
      const a = this.uniforms[r].value;
      a && a.isTexture ? e.uniforms[r] = {
        type: "t",
        value: a.toJSON(t).uuid
      } : a && a.isColor ? e.uniforms[r] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? e.uniforms[r] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? e.uniforms[r] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? e.uniforms[r] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? e.uniforms[r] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? e.uniforms[r] = {
        type: "m4",
        value: a.toArray()
      } : e.uniforms[r] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e.lights = this.lights, e.clipping = this.clipping;
    const n = {};
    for (const r in this.extensions)
      this.extensions[r] === !0 && (n[r] = !0);
    return Object.keys(n).length > 0 && (e.extensions = n), e;
  }
}
class Do extends ae {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new qt(), this.projectionMatrix = new qt(), this.projectionMatrixInverse = new qt(), this.coordinateSystem = Ke;
  }
  copy(t, e) {
    return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this.coordinateSystem = t.coordinateSystem, this;
  }
  getWorldDirection(t) {
    return super.getWorldDirection(t).negate();
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(t, e) {
    super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const an = /* @__PURE__ */ new B(), wa = /* @__PURE__ */ new zt(), Ra = /* @__PURE__ */ new zt();
class Te extends Do {
  constructor(t = 50, e = 1, n = 0.1, r = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = t.view === null ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(t) {
    const e = 0.5 * this.getFilmHeight() / t;
    this.fov = us * 2 * Math.atan(e), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const t = Math.tan(rr * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / t;
  }
  getEffectiveFOV() {
    return us * 2 * Math.atan(
      Math.tan(rr * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets minTarget and maxTarget to the coordinates of the lower-left and upper-right corners of the view rectangle.
   */
  getViewBounds(t, e, n) {
    an.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e.set(an.x, an.y).multiplyScalar(-t / an.z), an.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(an.x, an.y).multiplyScalar(-t / an.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   * Copies the result into the target Vector2, where x is width and y is height.
   */
  getViewSize(t, e) {
    return this.getViewBounds(t, wa, Ra), e.subVectors(Ra, wa);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(t, e, n, r, s, a) {
    this.aspect = t / e, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = this.near;
    let e = t * Math.tan(rr * 0.5 * this.fov) / this.zoom, n = 2 * e, r = this.aspect * n, s = -0.5 * r;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth, c = a.fullHeight;
      s += a.offsetX * r / l, e -= a.offsetY * n / c, r *= a.width / l, n *= a.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (s += t * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, e, e - n, t, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, this.view !== null && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
  }
}
const Wn = -90, Xn = 1;
class Bc extends ae {
  constructor(t, e, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new Te(Wn, Xn, t, e);
    r.layers = this.layers, this.add(r);
    const s = new Te(Wn, Xn, t, e);
    s.layers = this.layers, this.add(s);
    const a = new Te(Wn, Xn, t, e);
    a.layers = this.layers, this.add(a);
    const o = new Te(Wn, Xn, t, e);
    o.layers = this.layers, this.add(o);
    const l = new Te(Wn, Xn, t, e);
    l.layers = this.layers, this.add(l);
    const c = new Te(Wn, Xn, t, e);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const t = this.coordinateSystem, e = this.children.concat(), [n, r, s, a, o, l] = e;
    for (const c of e)
      this.remove(c);
    if (t === Ke)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (t === ur)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t);
    for (const c of e)
      this.add(c), c.updateMatrixWorld();
  }
  update(t, e) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: r } = this;
    this.coordinateSystem !== t.coordinateSystem && (this.coordinateSystem = t.coordinateSystem, this.updateCoordinateSystem());
    const [s, a, o, l, c, u] = this.children, p = t.getRenderTarget(), f = t.getActiveCubeFace(), m = t.getActiveMipmapLevel(), g = t.xr.enabled;
    t.xr.enabled = !1;
    const v = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0, r), t.render(e, s), t.setRenderTarget(n, 1, r), t.render(e, a), t.setRenderTarget(n, 2, r), t.render(e, o), t.setRenderTarget(n, 3, r), t.render(e, l), t.setRenderTarget(n, 4, r), t.render(e, c), n.texture.generateMipmaps = v, t.setRenderTarget(n, 5, r), t.render(e, u), t.setRenderTarget(p, f, m), t.xr.enabled = g, n.texture.needsPMREMUpdate = !0;
  }
}
class Uo extends _e {
  constructor(t, e, n, r, s, a, o, l, c, u) {
    t = t !== void 0 ? t : [], e = e !== void 0 ? e : ti, super(t, e, n, r, s, a, o, l, c, u), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(t) {
    this.image = t;
  }
}
class zc extends bn {
  constructor(t = 1, e = {}) {
    super(t, t, e), this.isWebGLCubeRenderTarget = !0;
    const n = { width: t, height: t, depth: 1 }, r = [n, n, n, n, n, n];
    this.texture = new Uo(r, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = e.generateMipmaps !== void 0 ? e.generateMipmaps : !1, this.texture.minFilter = e.minFilter !== void 0 ? e.minFilter : Ue;
  }
  fromEquirectangularTexture(t, e) {
    this.texture.type = e.type, this.texture.colorSpace = e.colorSpace, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, r = new Rn(5, 5, 5), s = new Je({
      name: "CubemapFromEquirect",
      uniforms: ii(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: Me,
      blending: ln
    });
    s.uniforms.tEquirect.value = e;
    const a = new Ae(r, s), o = e.minFilter;
    return e.minFilter === An && (e.minFilter = Ue), new Bc(1, 10, this).update(t, a), e.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(t, e, n, r) {
    const s = t.getRenderTarget();
    for (let a = 0; a < 6; a++)
      t.setRenderTarget(this, a), t.clear(e, n, r);
    t.setRenderTarget(s);
  }
}
const $r = /* @__PURE__ */ new B(), Hc = /* @__PURE__ */ new B(), Vc = /* @__PURE__ */ new Ct();
class Mn {
  constructor(t = new B(1, 0, 0), e = 0) {
    this.isPlane = !0, this.normal = t, this.constant = e;
  }
  set(t, e) {
    return this.normal.copy(t), this.constant = e, this;
  }
  setComponents(t, e, n, r) {
    return this.normal.set(t, e, n), this.constant = r, this;
  }
  setFromNormalAndCoplanarPoint(t, e) {
    return this.normal.copy(t), this.constant = -e.dot(this.normal), this;
  }
  setFromCoplanarPoints(t, e, n) {
    const r = $r.subVectors(n, e).cross(Hc.subVectors(t, e)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, t), this;
  }
  copy(t) {
    return this.normal.copy(t.normal), this.constant = t.constant, this;
  }
  normalize() {
    const t = 1 / this.normal.length();
    return this.normal.multiplyScalar(t), this.constant *= t, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(t) {
    return this.normal.dot(t) + this.constant;
  }
  distanceToSphere(t) {
    return this.distanceToPoint(t.center) - t.radius;
  }
  projectPoint(t, e) {
    return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t));
  }
  intersectLine(t, e) {
    const n = t.delta($r), r = this.normal.dot(n);
    if (r === 0)
      return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
    const s = -(t.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : e.copy(t.start).addScaledVector(n, s);
  }
  intersectsLine(t) {
    const e = this.distanceToPoint(t.start), n = this.distanceToPoint(t.end);
    return e < 0 && n > 0 || n < 0 && e > 0;
  }
  intersectsBox(t) {
    return t.intersectsPlane(this);
  }
  intersectsSphere(t) {
    return t.intersectsPlane(this);
  }
  coplanarPoint(t) {
    return t.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(t, e) {
    const n = e || Vc.getNormalMatrix(t), r = this.coplanarPoint($r).applyMatrix4(t), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -r.dot(s), this;
  }
  translate(t) {
    return this.constant -= t.dot(this.normal), this;
  }
  equals(t) {
    return t.normal.equals(this.normal) && t.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const _n = /* @__PURE__ */ new si(), Zi = /* @__PURE__ */ new B();
class Ms {
  constructor(t = new Mn(), e = new Mn(), n = new Mn(), r = new Mn(), s = new Mn(), a = new Mn()) {
    this.planes = [t, e, n, r, s, a];
  }
  set(t, e, n, r, s, a) {
    const o = this.planes;
    return o[0].copy(t), o[1].copy(e), o[2].copy(n), o[3].copy(r), o[4].copy(s), o[5].copy(a), this;
  }
  copy(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++)
      e[n].copy(t.planes[n]);
    return this;
  }
  setFromProjectionMatrix(t, e = Ke) {
    const n = this.planes, r = t.elements, s = r[0], a = r[1], o = r[2], l = r[3], c = r[4], u = r[5], p = r[6], f = r[7], m = r[8], g = r[9], v = r[10], d = r[11], h = r[12], A = r[13], E = r[14], b = r[15];
    if (n[0].setComponents(l - s, f - c, d - m, b - h).normalize(), n[1].setComponents(l + s, f + c, d + m, b + h).normalize(), n[2].setComponents(l + a, f + u, d + g, b + A).normalize(), n[3].setComponents(l - a, f - u, d - g, b - A).normalize(), n[4].setComponents(l - o, f - p, d - v, b - E).normalize(), e === Ke)
      n[5].setComponents(l + o, f + p, d + v, b + E).normalize();
    else if (e === ur)
      n[5].setComponents(o, p, v, E).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
    return this;
  }
  intersectsObject(t) {
    if (t.boundingSphere !== void 0)
      t.boundingSphere === null && t.computeBoundingSphere(), _n.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
    else {
      const e = t.geometry;
      e.boundingSphere === null && e.computeBoundingSphere(), _n.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
    }
    return this.intersectsSphere(_n);
  }
  intersectsSprite(t) {
    return _n.center.set(0, 0, 0), _n.radius = 0.7071067811865476, _n.applyMatrix4(t.matrixWorld), this.intersectsSphere(_n);
  }
  intersectsSphere(t) {
    const e = this.planes, n = t.center, r = -t.radius;
    for (let s = 0; s < 6; s++)
      if (e[s].distanceToPoint(n) < r)
        return !1;
    return !0;
  }
  intersectsBox(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = e[n];
      if (Zi.x = r.normal.x > 0 ? t.max.x : t.min.x, Zi.y = r.normal.y > 0 ? t.max.y : t.min.y, Zi.z = r.normal.z > 0 ? t.max.z : t.min.z, r.distanceToPoint(Zi) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++)
      if (e[n].distanceToPoint(t) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function Io() {
  let i = null, t = !1, e = null, n = null;
  function r(s, a) {
    e(s, a), n = i.requestAnimationFrame(r);
  }
  return {
    start: function() {
      t !== !0 && e !== null && (n = i.requestAnimationFrame(r), t = !0);
    },
    stop: function() {
      i.cancelAnimationFrame(n), t = !1;
    },
    setAnimationLoop: function(s) {
      e = s;
    },
    setContext: function(s) {
      i = s;
    }
  };
}
function Gc(i) {
  const t = /* @__PURE__ */ new WeakMap();
  function e(o, l) {
    const c = o.array, u = o.usage, p = c.byteLength, f = i.createBuffer();
    i.bindBuffer(l, f), i.bufferData(l, c, u), o.onUploadCallback();
    let m;
    if (c instanceof Float32Array)
      m = i.FLOAT;
    else if (c instanceof Uint16Array)
      o.isFloat16BufferAttribute ? m = i.HALF_FLOAT : m = i.UNSIGNED_SHORT;
    else if (c instanceof Int16Array)
      m = i.SHORT;
    else if (c instanceof Uint32Array)
      m = i.UNSIGNED_INT;
    else if (c instanceof Int32Array)
      m = i.INT;
    else if (c instanceof Int8Array)
      m = i.BYTE;
    else if (c instanceof Uint8Array)
      m = i.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray)
      m = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return {
      buffer: f,
      type: m,
      bytesPerElement: c.BYTES_PER_ELEMENT,
      version: o.version,
      size: p
    };
  }
  function n(o, l, c) {
    const u = l.array, p = l._updateRange, f = l.updateRanges;
    if (i.bindBuffer(c, o), p.count === -1 && f.length === 0 && i.bufferSubData(c, 0, u), f.length !== 0) {
      for (let m = 0, g = f.length; m < g; m++) {
        const v = f[m];
        i.bufferSubData(
          c,
          v.start * u.BYTES_PER_ELEMENT,
          u,
          v.start,
          v.count
        );
      }
      l.clearUpdateRanges();
    }
    p.count !== -1 && (i.bufferSubData(
      c,
      p.offset * u.BYTES_PER_ELEMENT,
      u,
      p.offset,
      p.count
    ), p.count = -1), l.onUploadCallback();
  }
  function r(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), t.get(o);
  }
  function s(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = t.get(o);
    l && (i.deleteBuffer(l.buffer), t.delete(o));
  }
  function a(o, l) {
    if (o.isGLBufferAttribute) {
      const u = t.get(o);
      (!u || u.version < o.version) && t.set(o, {
        buffer: o.buffer,
        type: o.type,
        bytesPerElement: o.elementSize,
        version: o.version
      });
      return;
    }
    o.isInterleavedBufferAttribute && (o = o.data);
    const c = t.get(o);
    if (c === void 0)
      t.set(o, e(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(c.buffer, o, l), c.version = o.version;
    }
  }
  return {
    get: r,
    remove: s,
    update: a
  };
}
class xr extends He {
  constructor(t = 1, e = 1, n = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: t,
      height: e,
      widthSegments: n,
      heightSegments: r
    };
    const s = t / 2, a = e / 2, o = Math.floor(n), l = Math.floor(r), c = o + 1, u = l + 1, p = t / o, f = e / l, m = [], g = [], v = [], d = [];
    for (let h = 0; h < u; h++) {
      const A = h * f - a;
      for (let E = 0; E < c; E++) {
        const b = E * p - s;
        g.push(b, -A, 0), v.push(0, 0, 1), d.push(E / o), d.push(1 - h / l);
      }
    }
    for (let h = 0; h < l; h++)
      for (let A = 0; A < o; A++) {
        const E = A + c * h, b = A + c * (h + 1), V = A + 1 + c * (h + 1), w = A + 1 + c * h;
        m.push(E, b, w), m.push(b, V, w);
      }
    this.setIndex(m), this.setAttribute("position", new be(g, 3)), this.setAttribute("normal", new be(v, 3)), this.setAttribute("uv", new be(d, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new xr(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}
var kc = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Wc = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, Xc = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, qc = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Yc = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, $c = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, jc = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Kc = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Zc = `#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, Jc = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`, Qc = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, tu = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, eu = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, nu = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, iu = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, ru = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, su = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, au = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, ou = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, lu = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, cu = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, uu = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, hu = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, du = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, fu = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, pu = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, mu = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, gu = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, _u = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, vu = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, xu = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Mu = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`, Su = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Eu = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, yu = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Tu = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Au = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, bu = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, wu = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Ru = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Cu = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Pu = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Lu = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Du = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Uu = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Iu = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, Nu = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, Fu = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Ou = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Bu = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, zu = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Hu = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, Vu = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, Gu = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, ku = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Wu = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Xu = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, qu = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Yu = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, $u = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, ju = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Ku = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Zu = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Ju = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Qu = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, th = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, eh = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, nh = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, ih = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, rh = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, sh = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, ah = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, oh = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, lh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, ch = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, uh = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, hh = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, dh = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, fh = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, ph = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, mh = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, gh = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, _h = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, vh = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, xh = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Mh = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Sh = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Eh = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, yh = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Th = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`, Ah = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, bh = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, wh = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, Rh = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Ch = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, Ph = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Lh = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, Dh = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Uh = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Ih = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Nh = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, Fh = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, Oh = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, Bh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, zh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Hh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, Vh = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Gh = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, kh = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Wh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Xh = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, qh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Yh = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, $h = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, jh = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, Kh = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Zh = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Jh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Qh = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, td = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, ed = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, nd = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, id = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, rd = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, sd = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ad = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, od = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ld = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, cd = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, ud = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, hd = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, dd = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, fd = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, pd = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, md = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, gd = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, _d = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, vd = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, xd = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Md = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Sd = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Rt = {
  alphahash_fragment: kc,
  alphahash_pars_fragment: Wc,
  alphamap_fragment: Xc,
  alphamap_pars_fragment: qc,
  alphatest_fragment: Yc,
  alphatest_pars_fragment: $c,
  aomap_fragment: jc,
  aomap_pars_fragment: Kc,
  batching_pars_vertex: Zc,
  batching_vertex: Jc,
  begin_vertex: Qc,
  beginnormal_vertex: tu,
  bsdfs: eu,
  iridescence_fragment: nu,
  bumpmap_pars_fragment: iu,
  clipping_planes_fragment: ru,
  clipping_planes_pars_fragment: su,
  clipping_planes_pars_vertex: au,
  clipping_planes_vertex: ou,
  color_fragment: lu,
  color_pars_fragment: cu,
  color_pars_vertex: uu,
  color_vertex: hu,
  common: du,
  cube_uv_reflection_fragment: fu,
  defaultnormal_vertex: pu,
  displacementmap_pars_vertex: mu,
  displacementmap_vertex: gu,
  emissivemap_fragment: _u,
  emissivemap_pars_fragment: vu,
  colorspace_fragment: xu,
  colorspace_pars_fragment: Mu,
  envmap_fragment: Su,
  envmap_common_pars_fragment: Eu,
  envmap_pars_fragment: yu,
  envmap_pars_vertex: Tu,
  envmap_physical_pars_fragment: Nu,
  envmap_vertex: Au,
  fog_vertex: bu,
  fog_pars_vertex: wu,
  fog_fragment: Ru,
  fog_pars_fragment: Cu,
  gradientmap_pars_fragment: Pu,
  lightmap_pars_fragment: Lu,
  lights_lambert_fragment: Du,
  lights_lambert_pars_fragment: Uu,
  lights_pars_begin: Iu,
  lights_toon_fragment: Fu,
  lights_toon_pars_fragment: Ou,
  lights_phong_fragment: Bu,
  lights_phong_pars_fragment: zu,
  lights_physical_fragment: Hu,
  lights_physical_pars_fragment: Vu,
  lights_fragment_begin: Gu,
  lights_fragment_maps: ku,
  lights_fragment_end: Wu,
  logdepthbuf_fragment: Xu,
  logdepthbuf_pars_fragment: qu,
  logdepthbuf_pars_vertex: Yu,
  logdepthbuf_vertex: $u,
  map_fragment: ju,
  map_pars_fragment: Ku,
  map_particle_fragment: Zu,
  map_particle_pars_fragment: Ju,
  metalnessmap_fragment: Qu,
  metalnessmap_pars_fragment: th,
  morphinstance_vertex: eh,
  morphcolor_vertex: nh,
  morphnormal_vertex: ih,
  morphtarget_pars_vertex: rh,
  morphtarget_vertex: sh,
  normal_fragment_begin: ah,
  normal_fragment_maps: oh,
  normal_pars_fragment: lh,
  normal_pars_vertex: ch,
  normal_vertex: uh,
  normalmap_pars_fragment: hh,
  clearcoat_normal_fragment_begin: dh,
  clearcoat_normal_fragment_maps: fh,
  clearcoat_pars_fragment: ph,
  iridescence_pars_fragment: mh,
  opaque_fragment: gh,
  packing: _h,
  premultiplied_alpha_fragment: vh,
  project_vertex: xh,
  dithering_fragment: Mh,
  dithering_pars_fragment: Sh,
  roughnessmap_fragment: Eh,
  roughnessmap_pars_fragment: yh,
  shadowmap_pars_fragment: Th,
  shadowmap_pars_vertex: Ah,
  shadowmap_vertex: bh,
  shadowmask_pars_fragment: wh,
  skinbase_vertex: Rh,
  skinning_pars_vertex: Ch,
  skinning_vertex: Ph,
  skinnormal_vertex: Lh,
  specularmap_fragment: Dh,
  specularmap_pars_fragment: Uh,
  tonemapping_fragment: Ih,
  tonemapping_pars_fragment: Nh,
  transmission_fragment: Fh,
  transmission_pars_fragment: Oh,
  uv_pars_fragment: Bh,
  uv_pars_vertex: zh,
  uv_vertex: Hh,
  worldpos_vertex: Vh,
  background_vert: Gh,
  background_frag: kh,
  backgroundCube_vert: Wh,
  backgroundCube_frag: Xh,
  cube_vert: qh,
  cube_frag: Yh,
  depth_vert: $h,
  depth_frag: jh,
  distanceRGBA_vert: Kh,
  distanceRGBA_frag: Zh,
  equirect_vert: Jh,
  equirect_frag: Qh,
  linedashed_vert: td,
  linedashed_frag: ed,
  meshbasic_vert: nd,
  meshbasic_frag: id,
  meshlambert_vert: rd,
  meshlambert_frag: sd,
  meshmatcap_vert: ad,
  meshmatcap_frag: od,
  meshnormal_vert: ld,
  meshnormal_frag: cd,
  meshphong_vert: ud,
  meshphong_frag: hd,
  meshphysical_vert: dd,
  meshphysical_frag: fd,
  meshtoon_vert: pd,
  meshtoon_frag: md,
  points_vert: gd,
  points_frag: _d,
  shadow_vert: vd,
  shadow_frag: xd,
  sprite_vert: Md,
  sprite_frag: Sd
}, it = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Pt(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ct() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ct() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Ct() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Ct() },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Ct() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Ct() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Ct() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Ct() },
    normalScale: { value: /* @__PURE__ */ new zt(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Ct() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Ct() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Ct() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Ct() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Pt(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new Pt(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ct() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Ct() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Pt(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new zt(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ct() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ct() },
    alphaTest: { value: 0 }
  }
}, Fe = {
  basic: {
    uniforms: /* @__PURE__ */ pe([
      it.common,
      it.specularmap,
      it.envmap,
      it.aomap,
      it.lightmap,
      it.fog
    ]),
    vertexShader: Rt.meshbasic_vert,
    fragmentShader: Rt.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ pe([
      it.common,
      it.specularmap,
      it.envmap,
      it.aomap,
      it.lightmap,
      it.emissivemap,
      it.bumpmap,
      it.normalmap,
      it.displacementmap,
      it.fog,
      it.lights,
      {
        emissive: { value: /* @__PURE__ */ new Pt(0) }
      }
    ]),
    vertexShader: Rt.meshlambert_vert,
    fragmentShader: Rt.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ pe([
      it.common,
      it.specularmap,
      it.envmap,
      it.aomap,
      it.lightmap,
      it.emissivemap,
      it.bumpmap,
      it.normalmap,
      it.displacementmap,
      it.fog,
      it.lights,
      {
        emissive: { value: /* @__PURE__ */ new Pt(0) },
        specular: { value: /* @__PURE__ */ new Pt(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Rt.meshphong_vert,
    fragmentShader: Rt.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ pe([
      it.common,
      it.envmap,
      it.aomap,
      it.lightmap,
      it.emissivemap,
      it.bumpmap,
      it.normalmap,
      it.displacementmap,
      it.roughnessmap,
      it.metalnessmap,
      it.fog,
      it.lights,
      {
        emissive: { value: /* @__PURE__ */ new Pt(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Rt.meshphysical_vert,
    fragmentShader: Rt.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ pe([
      it.common,
      it.aomap,
      it.lightmap,
      it.emissivemap,
      it.bumpmap,
      it.normalmap,
      it.displacementmap,
      it.gradientmap,
      it.fog,
      it.lights,
      {
        emissive: { value: /* @__PURE__ */ new Pt(0) }
      }
    ]),
    vertexShader: Rt.meshtoon_vert,
    fragmentShader: Rt.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ pe([
      it.common,
      it.bumpmap,
      it.normalmap,
      it.displacementmap,
      it.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Rt.meshmatcap_vert,
    fragmentShader: Rt.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ pe([
      it.points,
      it.fog
    ]),
    vertexShader: Rt.points_vert,
    fragmentShader: Rt.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ pe([
      it.common,
      it.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Rt.linedashed_vert,
    fragmentShader: Rt.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ pe([
      it.common,
      it.displacementmap
    ]),
    vertexShader: Rt.depth_vert,
    fragmentShader: Rt.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ pe([
      it.common,
      it.bumpmap,
      it.normalmap,
      it.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Rt.meshnormal_vert,
    fragmentShader: Rt.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ pe([
      it.sprite,
      it.fog
    ]),
    vertexShader: Rt.sprite_vert,
    fragmentShader: Rt.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Ct() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Rt.background_vert,
    fragmentShader: Rt.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new Ct() }
    },
    vertexShader: Rt.backgroundCube_vert,
    fragmentShader: Rt.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Rt.cube_vert,
    fragmentShader: Rt.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Rt.equirect_vert,
    fragmentShader: Rt.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ pe([
      it.common,
      it.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new B() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Rt.distanceRGBA_vert,
    fragmentShader: Rt.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ pe([
      it.lights,
      it.fog,
      {
        color: { value: /* @__PURE__ */ new Pt(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Rt.shadow_vert,
    fragmentShader: Rt.shadow_frag
  }
};
Fe.physical = {
  uniforms: /* @__PURE__ */ pe([
    Fe.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Ct() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Ct() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new zt(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Ct() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Ct() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Ct() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Pt(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Ct() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Ct() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Ct() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new zt() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Ct() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Pt(0) },
      specularColor: { value: /* @__PURE__ */ new Pt(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Ct() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Ct() },
      anisotropyVector: { value: /* @__PURE__ */ new zt() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Ct() }
    }
  ]),
  vertexShader: Rt.meshphysical_vert,
  fragmentShader: Rt.meshphysical_frag
};
const Ji = { r: 0, b: 0, g: 0 }, vn = /* @__PURE__ */ new Ze(), Ed = /* @__PURE__ */ new qt();
function yd(i, t, e, n, r, s, a) {
  const o = new Pt(0);
  let l = s === !0 ? 0 : 1, c, u, p = null, f = 0, m = null;
  function g(A) {
    let E = A.isScene === !0 ? A.background : null;
    return E && E.isTexture && (E = (A.backgroundBlurriness > 0 ? e : t).get(E)), E;
  }
  function v(A) {
    let E = !1;
    const b = g(A);
    b === null ? h(o, l) : b && b.isColor && (h(b, 1), E = !0);
    const V = i.xr.getEnvironmentBlendMode();
    V === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : V === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (i.autoClear || E) && i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil);
  }
  function d(A, E) {
    const b = g(E);
    b && (b.isCubeTexture || b.mapping === gr) ? (u === void 0 && (u = new Ae(
      new Rn(1, 1, 1),
      new Je({
        name: "BackgroundCubeMaterial",
        uniforms: ii(Fe.backgroundCube.uniforms),
        vertexShader: Fe.backgroundCube.vertexShader,
        fragmentShader: Fe.backgroundCube.fragmentShader,
        side: Me,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(V, w, C) {
      this.matrixWorld.copyPosition(C.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), r.update(u)), vn.copy(E.backgroundRotation), vn.x *= -1, vn.y *= -1, vn.z *= -1, b.isCubeTexture && b.isRenderTargetTexture === !1 && (vn.y *= -1, vn.z *= -1), u.material.uniforms.envMap.value = b, u.material.uniforms.flipEnvMap.value = b.isCubeTexture && b.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = E.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = E.backgroundIntensity, u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ed.makeRotationFromEuler(vn)), u.material.toneMapped = Xt.getTransfer(b.colorSpace) !== $t, (p !== b || f !== b.version || m !== i.toneMapping) && (u.material.needsUpdate = !0, p = b, f = b.version, m = i.toneMapping), u.layers.enableAll(), A.unshift(u, u.geometry, u.material, 0, 0, null)) : b && b.isTexture && (c === void 0 && (c = new Ae(
      new xr(2, 2),
      new Je({
        name: "BackgroundMaterial",
        uniforms: ii(Fe.background.uniforms),
        vertexShader: Fe.background.vertexShader,
        fragmentShader: Fe.background.fragmentShader,
        side: un,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), r.update(c)), c.material.uniforms.t2D.value = b, c.material.uniforms.backgroundIntensity.value = E.backgroundIntensity, c.material.toneMapped = Xt.getTransfer(b.colorSpace) !== $t, b.matrixAutoUpdate === !0 && b.updateMatrix(), c.material.uniforms.uvTransform.value.copy(b.matrix), (p !== b || f !== b.version || m !== i.toneMapping) && (c.material.needsUpdate = !0, p = b, f = b.version, m = i.toneMapping), c.layers.enableAll(), A.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function h(A, E) {
    A.getRGB(Ji, Lo(i)), n.buffers.color.setClear(Ji.r, Ji.g, Ji.b, E, a);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(A, E = 1) {
      o.set(A), l = E, h(o, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(A) {
      l = A, h(o, l);
    },
    render: v,
    addToRenderList: d
  };
}
function Td(i, t) {
  const e = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, r = f(null);
  let s = r, a = !1;
  function o(_, L, R, y, P) {
    let U = !1;
    const O = p(y, R, L);
    s !== O && (s = O, c(s.object)), U = m(_, y, R, P), U && g(_, y, R, P), P !== null && t.update(P, i.ELEMENT_ARRAY_BUFFER), (U || a) && (a = !1, b(_, L, R, y), P !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get(P).buffer));
  }
  function l() {
    return i.createVertexArray();
  }
  function c(_) {
    return i.bindVertexArray(_);
  }
  function u(_) {
    return i.deleteVertexArray(_);
  }
  function p(_, L, R) {
    const y = R.wireframe === !0;
    let P = n[_.id];
    P === void 0 && (P = {}, n[_.id] = P);
    let U = P[L.id];
    U === void 0 && (U = {}, P[L.id] = U);
    let O = U[y];
    return O === void 0 && (O = f(l()), U[y] = O), O;
  }
  function f(_) {
    const L = [], R = [], y = [];
    for (let P = 0; P < e; P++)
      L[P] = 0, R[P] = 0, y[P] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: L,
      enabledAttributes: R,
      attributeDivisors: y,
      object: _,
      attributes: {},
      index: null
    };
  }
  function m(_, L, R, y) {
    const P = s.attributes, U = L.attributes;
    let O = 0;
    const $ = R.getAttributes();
    for (const N in $)
      if ($[N].location >= 0) {
        const J = P[N];
        let lt = U[N];
        if (lt === void 0 && (N === "instanceMatrix" && _.instanceMatrix && (lt = _.instanceMatrix), N === "instanceColor" && _.instanceColor && (lt = _.instanceColor)), J === void 0 || J.attribute !== lt || lt && J.data !== lt.data)
          return !0;
        O++;
      }
    return s.attributesNum !== O || s.index !== y;
  }
  function g(_, L, R, y) {
    const P = {}, U = L.attributes;
    let O = 0;
    const $ = R.getAttributes();
    for (const N in $)
      if ($[N].location >= 0) {
        let J = U[N];
        J === void 0 && (N === "instanceMatrix" && _.instanceMatrix && (J = _.instanceMatrix), N === "instanceColor" && _.instanceColor && (J = _.instanceColor));
        const lt = {};
        lt.attribute = J, J && J.data && (lt.data = J.data), P[N] = lt, O++;
      }
    s.attributes = P, s.attributesNum = O, s.index = y;
  }
  function v() {
    const _ = s.newAttributes;
    for (let L = 0, R = _.length; L < R; L++)
      _[L] = 0;
  }
  function d(_) {
    h(_, 0);
  }
  function h(_, L) {
    const R = s.newAttributes, y = s.enabledAttributes, P = s.attributeDivisors;
    R[_] = 1, y[_] === 0 && (i.enableVertexAttribArray(_), y[_] = 1), P[_] !== L && (i.vertexAttribDivisor(_, L), P[_] = L);
  }
  function A() {
    const _ = s.newAttributes, L = s.enabledAttributes;
    for (let R = 0, y = L.length; R < y; R++)
      L[R] !== _[R] && (i.disableVertexAttribArray(R), L[R] = 0);
  }
  function E(_, L, R, y, P, U, O) {
    O === !0 ? i.vertexAttribIPointer(_, L, R, P, U) : i.vertexAttribPointer(_, L, R, y, P, U);
  }
  function b(_, L, R, y) {
    v();
    const P = y.attributes, U = R.getAttributes(), O = L.defaultAttributeValues;
    for (const $ in U) {
      const N = U[$];
      if (N.location >= 0) {
        let j = P[$];
        if (j === void 0 && ($ === "instanceMatrix" && _.instanceMatrix && (j = _.instanceMatrix), $ === "instanceColor" && _.instanceColor && (j = _.instanceColor)), j !== void 0) {
          const J = j.normalized, lt = j.itemSize, _t = t.get(j);
          if (_t === void 0)
            continue;
          const Et = _t.buffer, W = _t.type, q = _t.bytesPerElement, ct = W === i.INT || W === i.UNSIGNED_INT || j.gpuType === _o;
          if (j.isInterleavedBufferAttribute) {
            const et = j.data, vt = et.stride, bt = j.offset;
            if (et.isInstancedInterleavedBuffer) {
              for (let F = 0; F < N.locationSize; F++)
                h(N.location + F, et.meshPerAttribute);
              _.isInstancedMesh !== !0 && y._maxInstanceCount === void 0 && (y._maxInstanceCount = et.meshPerAttribute * et.count);
            } else
              for (let F = 0; F < N.locationSize; F++)
                d(N.location + F);
            i.bindBuffer(i.ARRAY_BUFFER, Et);
            for (let F = 0; F < N.locationSize; F++)
              E(
                N.location + F,
                lt / N.locationSize,
                W,
                J,
                vt * q,
                (bt + lt / N.locationSize * F) * q,
                ct
              );
          } else {
            if (j.isInstancedBufferAttribute) {
              for (let et = 0; et < N.locationSize; et++)
                h(N.location + et, j.meshPerAttribute);
              _.isInstancedMesh !== !0 && y._maxInstanceCount === void 0 && (y._maxInstanceCount = j.meshPerAttribute * j.count);
            } else
              for (let et = 0; et < N.locationSize; et++)
                d(N.location + et);
            i.bindBuffer(i.ARRAY_BUFFER, Et);
            for (let et = 0; et < N.locationSize; et++)
              E(
                N.location + et,
                lt / N.locationSize,
                W,
                J,
                lt * q,
                lt / N.locationSize * et * q,
                ct
              );
          }
        } else if (O !== void 0) {
          const J = O[$];
          if (J !== void 0)
            switch (J.length) {
              case 2:
                i.vertexAttrib2fv(N.location, J);
                break;
              case 3:
                i.vertexAttrib3fv(N.location, J);
                break;
              case 4:
                i.vertexAttrib4fv(N.location, J);
                break;
              default:
                i.vertexAttrib1fv(N.location, J);
            }
        }
      }
    }
    A();
  }
  function V() {
    k();
    for (const _ in n) {
      const L = n[_];
      for (const R in L) {
        const y = L[R];
        for (const P in y)
          u(y[P].object), delete y[P];
        delete L[R];
      }
      delete n[_];
    }
  }
  function w(_) {
    if (n[_.id] === void 0)
      return;
    const L = n[_.id];
    for (const R in L) {
      const y = L[R];
      for (const P in y)
        u(y[P].object), delete y[P];
      delete L[R];
    }
    delete n[_.id];
  }
  function C(_) {
    for (const L in n) {
      const R = n[L];
      if (R[_.id] === void 0)
        continue;
      const y = R[_.id];
      for (const P in y)
        u(y[P].object), delete y[P];
      delete R[_.id];
    }
  }
  function k() {
    S(), a = !0, s !== r && (s = r, c(s.object));
  }
  function S() {
    r.geometry = null, r.program = null, r.wireframe = !1;
  }
  return {
    setup: o,
    reset: k,
    resetDefaultState: S,
    dispose: V,
    releaseStatesOfGeometry: w,
    releaseStatesOfProgram: C,
    initAttributes: v,
    enableAttribute: d,
    disableUnusedAttributes: A
  };
}
function Ad(i, t, e) {
  let n;
  function r(c) {
    n = c;
  }
  function s(c, u) {
    i.drawArrays(n, c, u), e.update(u, n, 1);
  }
  function a(c, u, p) {
    p !== 0 && (i.drawArraysInstanced(n, c, u, p), e.update(u, n, p));
  }
  function o(c, u, p) {
    if (p === 0)
      return;
    const f = t.get("WEBGL_multi_draw");
    if (f === null)
      for (let m = 0; m < p; m++)
        this.render(c[m], u[m]);
    else {
      f.multiDrawArraysWEBGL(n, c, 0, u, 0, p);
      let m = 0;
      for (let g = 0; g < p; g++)
        m += u[g];
      e.update(m, n, 1);
    }
  }
  function l(c, u, p, f) {
    if (p === 0)
      return;
    const m = t.get("WEBGL_multi_draw");
    if (m === null)
      for (let g = 0; g < c.length; g++)
        a(c[g], u[g], f[g]);
    else {
      m.multiDrawArraysInstancedWEBGL(n, c, 0, u, 0, f, 0, p);
      let g = 0;
      for (let v = 0; v < p; v++)
        g += u[v];
      for (let v = 0; v < f.length; v++)
        e.update(g, n, f[v]);
    }
  }
  this.setMode = r, this.render = s, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = l;
}
function bd(i, t, e, n) {
  let r;
  function s() {
    if (r !== void 0)
      return r;
    if (t.has("EXT_texture_filter_anisotropic") === !0) {
      const w = t.get("EXT_texture_filter_anisotropic");
      r = i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      r = 0;
    return r;
  }
  function a(w) {
    return !(w !== ze && n.convert(w) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(w) {
    const C = w === _r && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
    return !(w !== hn && n.convert(w) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    w !== je && !C);
  }
  function l(w) {
    if (w === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
        return "highp";
      w = "mediump";
    }
    return w === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = e.precision !== void 0 ? e.precision : "highp";
  const u = l(c);
  u !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", u, "instead."), c = u);
  const p = e.logarithmicDepthBuffer === !0, f = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), m = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), g = i.getParameter(i.MAX_TEXTURE_SIZE), v = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), d = i.getParameter(i.MAX_VERTEX_ATTRIBS), h = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), A = i.getParameter(i.MAX_VARYING_VECTORS), E = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), b = m > 0, V = i.getParameter(i.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: s,
    getMaxPrecision: l,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: c,
    logarithmicDepthBuffer: p,
    maxTextures: f,
    maxVertexTextures: m,
    maxTextureSize: g,
    maxCubemapSize: v,
    maxAttributes: d,
    maxVertexUniforms: h,
    maxVaryings: A,
    maxFragmentUniforms: E,
    vertexTextures: b,
    maxSamples: V
  };
}
function wd(i) {
  const t = this;
  let e = null, n = 0, r = !1, s = !1;
  const a = new Mn(), o = new Ct(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(p, f) {
    const m = p.length !== 0 || f || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || r;
    return r = f, n = p.length, m;
  }, this.beginShadows = function() {
    s = !0, u(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(p, f) {
    e = u(p, f, 0);
  }, this.setState = function(p, f, m) {
    const g = p.clippingPlanes, v = p.clipIntersection, d = p.clipShadows, h = i.get(p);
    if (!r || g === null || g.length === 0 || s && !d)
      s ? u(null) : c();
    else {
      const A = s ? 0 : n, E = A * 4;
      let b = h.clippingState || null;
      l.value = b, b = u(g, f, E, m);
      for (let V = 0; V !== E; ++V)
        b[V] = e[V];
      h.clippingState = b, this.numIntersection = v ? this.numPlanes : 0, this.numPlanes += A;
    }
  };
  function c() {
    l.value !== e && (l.value = e, l.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0;
  }
  function u(p, f, m, g) {
    const v = p !== null ? p.length : 0;
    let d = null;
    if (v !== 0) {
      if (d = l.value, g !== !0 || d === null) {
        const h = m + v * 4, A = f.matrixWorldInverse;
        o.getNormalMatrix(A), (d === null || d.length < h) && (d = new Float32Array(h));
        for (let E = 0, b = m; E !== v; ++E, b += 4)
          a.copy(p[E]).applyMatrix4(A, o), a.normal.toArray(d, b), d[b + 3] = a.constant;
      }
      l.value = d, l.needsUpdate = !0;
    }
    return t.numPlanes = v, t.numIntersection = 0, d;
  }
}
function Rd(i) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(a, o) {
    return o === as ? a.mapping = ti : o === os && (a.mapping = ei), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === as || o === os)
        if (t.has(a)) {
          const l = t.get(a).texture;
          return e(l, a.mapping);
        } else {
          const l = a.image;
          if (l && l.height > 0) {
            const c = new zc(l.height);
            return c.fromEquirectangularTexture(i, a), t.set(a, c), a.addEventListener("dispose", r), e(c.texture, a.mapping);
          } else
            return null;
        }
    }
    return a;
  }
  function r(a) {
    const o = a.target;
    o.removeEventListener("dispose", r);
    const l = t.get(o);
    l !== void 0 && (t.delete(o), l.dispose());
  }
  function s() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
class No extends Do {
  constructor(t = -1, e = 1, n = 1, r = -1, s = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = r, this.near = s, this.far = a, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = t.view === null ? null : Object.assign({}, t.view), this;
  }
  setViewOffset(t, e, n, r, s, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2;
    let s = n - t, a = n + t, o = r + e, l = r - e;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += c * this.view.offsetX, a = s + c * this.view.width, o -= u * this.view.offsetY, l = o - u * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, this.view !== null && (e.object.view = Object.assign({}, this.view)), e;
  }
}
const $n = 4, Ca = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], yn = 20, jr = /* @__PURE__ */ new No(), Pa = /* @__PURE__ */ new Pt();
let Kr = null, Zr = 0, Jr = 0, Qr = !1;
const Sn = (1 + Math.sqrt(5)) / 2, qn = 1 / Sn, La = [
  /* @__PURE__ */ new B(-Sn, qn, 0),
  /* @__PURE__ */ new B(Sn, qn, 0),
  /* @__PURE__ */ new B(-qn, 0, Sn),
  /* @__PURE__ */ new B(qn, 0, Sn),
  /* @__PURE__ */ new B(0, Sn, -qn),
  /* @__PURE__ */ new B(0, Sn, qn),
  /* @__PURE__ */ new B(-1, 1, -1),
  /* @__PURE__ */ new B(1, 1, -1),
  /* @__PURE__ */ new B(-1, 1, 1),
  /* @__PURE__ */ new B(1, 1, 1)
];
class Da {
  constructor(t) {
    this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(t, e = 0, n = 0.1, r = 100) {
    Kr = this._renderer.getRenderTarget(), Zr = this._renderer.getActiveCubeFace(), Jr = this._renderer.getActiveMipmapLevel(), Qr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = !0, this._sceneToCubeUV(t, n, r, s), e > 0 && this._blur(s, 0, 0, e), this._applyPMREM(s), this._cleanup(s), s;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported equirectangular image size is 64 x 32.
   */
  fromEquirectangular(t, e = null) {
    return this._fromTexture(t, e);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported cube size is 16 x 16.
   */
  fromCubemap(t, e = null) {
    return this._fromTexture(t, e);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Na(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Ia(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(t) {
    this._lodMax = Math.floor(Math.log2(t)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let t = 0; t < this._lodPlanes.length; t++)
      this._lodPlanes[t].dispose();
  }
  _cleanup(t) {
    this._renderer.setRenderTarget(Kr, Zr, Jr), this._renderer.xr.enabled = Qr, t.scissorTest = !1, Qi(t, 0, 0, t.width, t.height);
  }
  _fromTexture(t, e) {
    t.mapping === ti || t.mapping === ei ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), Kr = this._renderer.getRenderTarget(), Zr = this._renderer.getActiveCubeFace(), Jr = this._renderer.getActiveMipmapLevel(), Qr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = e || this._allocateTargets();
    return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const t = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n = {
      magFilter: Ue,
      minFilter: Ue,
      generateMipmaps: !1,
      type: _r,
      format: ze,
      colorSpace: dn,
      depthBuffer: !1
    }, r = Ua(t, e, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Ua(t, e, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Cd(s)), this._blurMaterial = Pd(s, t, e);
    }
    return r;
  }
  _compileMaterial(t) {
    const e = new Ae(this._lodPlanes[0], t);
    this._renderer.compile(e, jr);
  }
  _sceneToCubeUV(t, e, n, r) {
    const o = new Te(90, 1, e, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], u = this._renderer, p = u.autoClear, f = u.toneMapping;
    u.getClearColor(Pa), u.toneMapping = cn, u.autoClear = !1;
    const m = new xs({
      name: "PMREM.Background",
      side: Me,
      depthWrite: !1,
      depthTest: !1
    }), g = new Ae(new Rn(), m);
    let v = !1;
    const d = t.background;
    d ? d.isColor && (m.color.copy(d), t.background = null, v = !0) : (m.color.copy(Pa), v = !0);
    for (let h = 0; h < 6; h++) {
      const A = h % 3;
      A === 0 ? (o.up.set(0, l[h], 0), o.lookAt(c[h], 0, 0)) : A === 1 ? (o.up.set(0, 0, l[h]), o.lookAt(0, c[h], 0)) : (o.up.set(0, l[h], 0), o.lookAt(0, 0, c[h]));
      const E = this._cubeSize;
      Qi(r, A * E, h > 2 ? E : 0, E, E), u.setRenderTarget(r), v && u.render(g, o), u.render(t, o);
    }
    g.geometry.dispose(), g.material.dispose(), u.toneMapping = f, u.autoClear = p, t.background = d;
  }
  _textureToCubeUV(t, e) {
    const n = this._renderer, r = t.mapping === ti || t.mapping === ei;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = Na()), this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Ia());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, a = new Ae(this._lodPlanes[0], s), o = s.uniforms;
    o.envMap.value = t;
    const l = this._cubeSize;
    Qi(e, 0, 0, 3 * l, 2 * l), n.setRenderTarget(e), n.render(a, jr);
  }
  _applyPMREM(t) {
    const e = this._renderer, n = e.autoClear;
    e.autoClear = !1;
    const r = this._lodPlanes.length;
    for (let s = 1; s < r; s++) {
      const a = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), o = La[(r - s - 1) % La.length];
      this._blur(t, s - 1, s, a, o);
    }
    e.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(t, e, n, r, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(
      t,
      a,
      e,
      n,
      r,
      "latitudinal",
      s
    ), this._halfBlur(
      a,
      t,
      n,
      n,
      r,
      "longitudinal",
      s
    );
  }
  _halfBlur(t, e, n, r, s, a, o) {
    const l = this._renderer, c = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const u = 3, p = new Ae(this._lodPlanes[r], c), f = c.uniforms, m = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * yn - 1), v = s / g, d = isFinite(s) ? 1 + Math.floor(u * v) : yn;
    d > yn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${yn}`);
    const h = [];
    let A = 0;
    for (let C = 0; C < yn; ++C) {
      const k = C / v, S = Math.exp(-k * k / 2);
      h.push(S), C === 0 ? A += S : C < d && (A += 2 * S);
    }
    for (let C = 0; C < h.length; C++)
      h[C] = h[C] / A;
    f.envMap.value = t.texture, f.samples.value = d, f.weights.value = h, f.latitudinal.value = a === "latitudinal", o && (f.poleAxis.value = o);
    const { _lodMax: E } = this;
    f.dTheta.value = g, f.mipInt.value = E - n;
    const b = this._sizeLods[r], V = 3 * b * (r > E - $n ? r - E + $n : 0), w = 4 * (this._cubeSize - b);
    Qi(e, V, w, 3 * b, 2 * b), l.setRenderTarget(e), l.render(p, jr);
  }
}
function Cd(i) {
  const t = [], e = [], n = [];
  let r = i;
  const s = i - $n + 1 + Ca.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, r);
    e.push(o);
    let l = 1 / o;
    a > i - $n ? l = Ca[a - i + $n - 1] : a === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2), u = -c, p = 1 + c, f = [u, u, p, u, p, p, u, u, p, p, u, p], m = 6, g = 6, v = 3, d = 2, h = 1, A = new Float32Array(v * g * m), E = new Float32Array(d * g * m), b = new Float32Array(h * g * m);
    for (let w = 0; w < m; w++) {
      const C = w % 3 * 2 / 3 - 1, k = w > 2 ? 0 : -1, S = [
        C,
        k,
        0,
        C + 2 / 3,
        k,
        0,
        C + 2 / 3,
        k + 1,
        0,
        C,
        k,
        0,
        C + 2 / 3,
        k + 1,
        0,
        C,
        k + 1,
        0
      ];
      A.set(S, v * g * w), E.set(f, d * g * w);
      const _ = [w, w, w, w, w, w];
      b.set(_, h * g * w);
    }
    const V = new He();
    V.setAttribute("position", new Ce(A, v)), V.setAttribute("uv", new Ce(E, d)), V.setAttribute("faceIndex", new Ce(b, h)), t.push(V), r > $n && r--;
  }
  return { lodPlanes: t, sizeLods: e, sigmas: n };
}
function Ua(i, t, e) {
  const n = new bn(i, t, e);
  return n.texture.mapping = gr, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Qi(i, t, e, n, r) {
  i.viewport.set(t, e, n, r), i.scissor.set(t, e, n, r);
}
function Pd(i, t, e) {
  const n = new Float32Array(yn), r = new B(0, 1, 0);
  return new Je({
    name: "SphericalGaussianBlur",
    defines: {
      n: yn,
      CUBEUV_TEXEL_WIDTH: 1 / t,
      CUBEUV_TEXEL_HEIGHT: 1 / e,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r }
    },
    vertexShader: Ss(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: ln,
    depthTest: !1,
    depthWrite: !1
  });
}
function Ia() {
  return new Je({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Ss(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: ln,
    depthTest: !1,
    depthWrite: !1
  });
}
function Na() {
  return new Je({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Ss(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: ln,
    depthTest: !1,
    depthWrite: !1
  });
}
function Ss() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function Ld(i) {
  let t = /* @__PURE__ */ new WeakMap(), e = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping, c = l === as || l === os, u = l === ti || l === ei;
      if (c || u) {
        let p = t.get(o);
        const f = p !== void 0 ? p.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== f)
          return e === null && (e = new Da(i)), p = c ? e.fromEquirectangular(o, p) : e.fromCubemap(o, p), p.texture.pmremVersion = o.pmremVersion, t.set(o, p), p.texture;
        if (p !== void 0)
          return p.texture;
        {
          const m = o.image;
          return c && m && m.height > 0 || u && m && r(m) ? (e === null && (e = new Da(i)), p = c ? e.fromEquirectangular(o) : e.fromCubemap(o), p.texture.pmremVersion = o.pmremVersion, t.set(o, p), o.addEventListener("dispose", s), p.texture) : null;
        }
      }
    }
    return o;
  }
  function r(o) {
    let l = 0;
    const c = 6;
    for (let u = 0; u < c; u++)
      o[u] !== void 0 && l++;
    return l === c;
  }
  function s(o) {
    const l = o.target;
    l.removeEventListener("dispose", s);
    const c = t.get(l);
    c !== void 0 && (t.delete(l), c.dispose());
  }
  function a() {
    t = /* @__PURE__ */ new WeakMap(), e !== null && (e.dispose(), e = null);
  }
  return {
    get: n,
    dispose: a
  };
}
function Dd(i) {
  const t = {};
  function e(n) {
    if (t[n] !== void 0)
      return t[n];
    let r;
    switch (n) {
      case "WEBGL_depth_texture":
        r = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r = i.getExtension(n);
    }
    return t[n] = r, r;
  }
  return {
    has: function(n) {
      return e(n) !== null;
    },
    init: function() {
      e("EXT_color_buffer_float"), e("WEBGL_clip_cull_distance"), e("OES_texture_float_linear"), e("EXT_color_buffer_half_float"), e("WEBGL_multisampled_render_to_texture"), e("WEBGL_render_shared_exponent");
    },
    get: function(n) {
      const r = e(n);
      return r === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), r;
    }
  };
}
function Ud(i, t, e, n) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function a(p) {
    const f = p.target;
    f.index !== null && t.remove(f.index);
    for (const g in f.attributes)
      t.remove(f.attributes[g]);
    for (const g in f.morphAttributes) {
      const v = f.morphAttributes[g];
      for (let d = 0, h = v.length; d < h; d++)
        t.remove(v[d]);
    }
    f.removeEventListener("dispose", a), delete r[f.id];
    const m = s.get(f);
    m && (t.remove(m), s.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount, e.memory.geometries--;
  }
  function o(p, f) {
    return r[f.id] === !0 || (f.addEventListener("dispose", a), r[f.id] = !0, e.memory.geometries++), f;
  }
  function l(p) {
    const f = p.attributes;
    for (const g in f)
      t.update(f[g], i.ARRAY_BUFFER);
    const m = p.morphAttributes;
    for (const g in m) {
      const v = m[g];
      for (let d = 0, h = v.length; d < h; d++)
        t.update(v[d], i.ARRAY_BUFFER);
    }
  }
  function c(p) {
    const f = [], m = p.index, g = p.attributes.position;
    let v = 0;
    if (m !== null) {
      const A = m.array;
      v = m.version;
      for (let E = 0, b = A.length; E < b; E += 3) {
        const V = A[E + 0], w = A[E + 1], C = A[E + 2];
        f.push(V, w, w, C, C, V);
      }
    } else if (g !== void 0) {
      const A = g.array;
      v = g.version;
      for (let E = 0, b = A.length / 3 - 1; E < b; E += 3) {
        const V = E + 0, w = E + 1, C = E + 2;
        f.push(V, w, w, C, C, V);
      }
    } else
      return;
    const d = new (Ao(f) ? Po : Co)(f, 1);
    d.version = v;
    const h = s.get(p);
    h && t.remove(h), s.set(p, d);
  }
  function u(p) {
    const f = s.get(p);
    if (f) {
      const m = p.index;
      m !== null && f.version < m.version && c(p);
    } else
      c(p);
    return s.get(p);
  }
  return {
    get: o,
    update: l,
    getWireframeAttribute: u
  };
}
function Id(i, t, e) {
  let n;
  function r(f) {
    n = f;
  }
  let s, a;
  function o(f) {
    s = f.type, a = f.bytesPerElement;
  }
  function l(f, m) {
    i.drawElements(n, m, s, f * a), e.update(m, n, 1);
  }
  function c(f, m, g) {
    g !== 0 && (i.drawElementsInstanced(n, m, s, f * a, g), e.update(m, n, g));
  }
  function u(f, m, g) {
    if (g === 0)
      return;
    const v = t.get("WEBGL_multi_draw");
    if (v === null)
      for (let d = 0; d < g; d++)
        this.render(f[d] / a, m[d]);
    else {
      v.multiDrawElementsWEBGL(n, m, 0, s, f, 0, g);
      let d = 0;
      for (let h = 0; h < g; h++)
        d += m[h];
      e.update(d, n, 1);
    }
  }
  function p(f, m, g, v) {
    if (g === 0)
      return;
    const d = t.get("WEBGL_multi_draw");
    if (d === null)
      for (let h = 0; h < f.length; h++)
        c(f[h] / a, m[h], v[h]);
    else {
      d.multiDrawElementsInstancedWEBGL(n, m, 0, s, f, 0, v, 0, g);
      let h = 0;
      for (let A = 0; A < g; A++)
        h += m[A];
      for (let A = 0; A < v.length; A++)
        e.update(h, n, v[A]);
    }
  }
  this.setMode = r, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = u, this.renderMultiDrawInstances = p;
}
function Nd(i) {
  const t = {
    geometries: 0,
    textures: 0
  }, e = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, a, o) {
    switch (e.calls++, a) {
      case i.TRIANGLES:
        e.triangles += o * (s / 3);
        break;
      case i.LINES:
        e.lines += o * (s / 2);
        break;
      case i.LINE_STRIP:
        e.lines += o * (s - 1);
        break;
      case i.LINE_LOOP:
        e.lines += o * s;
        break;
      case i.POINTS:
        e.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function r() {
    e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
  }
  return {
    memory: t,
    render: e,
    programs: null,
    autoReset: !0,
    reset: r,
    update: n
  };
}
function Fd(i, t, e) {
  const n = /* @__PURE__ */ new WeakMap(), r = new se();
  function s(a, o, l) {
    const c = a.morphTargetInfluences, u = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, p = u !== void 0 ? u.length : 0;
    let f = n.get(o);
    if (f === void 0 || f.count !== p) {
      let S = function() {
        C.dispose(), n.delete(o), o.removeEventListener("dispose", S);
      };
      f !== void 0 && f.texture.dispose();
      const m = o.morphAttributes.position !== void 0, g = o.morphAttributes.normal !== void 0, v = o.morphAttributes.color !== void 0, d = o.morphAttributes.position || [], h = o.morphAttributes.normal || [], A = o.morphAttributes.color || [];
      let E = 0;
      m === !0 && (E = 1), g === !0 && (E = 2), v === !0 && (E = 3);
      let b = o.attributes.position.count * E, V = 1;
      b > t.maxTextureSize && (V = Math.ceil(b / t.maxTextureSize), b = t.maxTextureSize);
      const w = new Float32Array(b * V * 4 * p), C = new wo(w, b, V, p);
      C.type = je, C.needsUpdate = !0;
      const k = E * 4;
      for (let _ = 0; _ < p; _++) {
        const L = d[_], R = h[_], y = A[_], P = b * V * 4 * _;
        for (let U = 0; U < L.count; U++) {
          const O = U * k;
          m === !0 && (r.fromBufferAttribute(L, U), w[P + O + 0] = r.x, w[P + O + 1] = r.y, w[P + O + 2] = r.z, w[P + O + 3] = 0), g === !0 && (r.fromBufferAttribute(R, U), w[P + O + 4] = r.x, w[P + O + 5] = r.y, w[P + O + 6] = r.z, w[P + O + 7] = 0), v === !0 && (r.fromBufferAttribute(y, U), w[P + O + 8] = r.x, w[P + O + 9] = r.y, w[P + O + 10] = r.z, w[P + O + 11] = y.itemSize === 4 ? r.w : 1);
        }
      }
      f = {
        count: p,
        texture: C,
        size: new zt(b, V)
      }, n.set(o, f), o.addEventListener("dispose", S);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      l.getUniforms().setValue(i, "morphTexture", a.morphTexture, e);
    else {
      let m = 0;
      for (let v = 0; v < c.length; v++)
        m += c[v];
      const g = o.morphTargetsRelative ? 1 : 1 - m;
      l.getUniforms().setValue(i, "morphTargetBaseInfluence", g), l.getUniforms().setValue(i, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(i, "morphTargetsTexture", f.texture, e), l.getUniforms().setValue(i, "morphTargetsTextureSize", f.size);
  }
  return {
    update: s
  };
}
function Od(i, t, e, n) {
  let r = /* @__PURE__ */ new WeakMap();
  function s(l) {
    const c = n.render.frame, u = l.geometry, p = t.get(l, u);
    if (r.get(p) !== c && (t.update(p), r.set(p, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === !1 && l.addEventListener("dispose", o), r.get(l) !== c && (e.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && e.update(l.instanceColor, i.ARRAY_BUFFER), r.set(l, c))), l.isSkinnedMesh) {
      const f = l.skeleton;
      r.get(f) !== c && (f.update(), r.set(f, c));
    }
    return p;
  }
  function a() {
    r = /* @__PURE__ */ new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o), e.remove(c.instanceMatrix), c.instanceColor !== null && e.remove(c.instanceColor);
  }
  return {
    update: s,
    dispose: a
  };
}
class Fo extends _e {
  constructor(t, e, n, r, s, a, o, l, c, u) {
    if (u = u !== void 0 ? u : Zn, u !== Zn && u !== Ti)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && u === Zn && (n = ni), n === void 0 && u === Ti && (n = Ai), super(null, r, s, a, o, l, u, n, c), this.isDepthTexture = !0, this.image = { width: t, height: e }, this.magFilter = o !== void 0 ? o : xe, this.minFilter = l !== void 0 ? l : xe, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(t) {
    return super.copy(t), this.compareFunction = t.compareFunction, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.compareFunction !== null && (e.compareFunction = this.compareFunction), e;
  }
}
const Oo = /* @__PURE__ */ new _e(), Bo = /* @__PURE__ */ new Fo(1, 1);
Bo.compareFunction = To;
const zo = /* @__PURE__ */ new wo(), Ho = /* @__PURE__ */ new yc(), Vo = /* @__PURE__ */ new Uo(), Fa = [], Oa = [], Ba = new Float32Array(16), za = new Float32Array(9), Ha = new Float32Array(4);
function ai(i, t, e) {
  const n = i[0];
  if (n <= 0 || n > 0)
    return i;
  const r = t * e;
  let s = Fa[r];
  if (s === void 0 && (s = new Float32Array(r), Fa[r] = s), t !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== t; ++a)
      o += e, i[a].toArray(s, o);
  }
  return s;
}
function ne(i, t) {
  if (i.length !== t.length)
    return !1;
  for (let e = 0, n = i.length; e < n; e++)
    if (i[e] !== t[e])
      return !1;
  return !0;
}
function ie(i, t) {
  for (let e = 0, n = t.length; e < n; e++)
    i[e] = t[e];
}
function Mr(i, t) {
  let e = Oa[t];
  e === void 0 && (e = new Int32Array(t), Oa[t] = e);
  for (let n = 0; n !== t; ++n)
    e[n] = i.allocateTextureUnit();
  return e;
}
function Bd(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1f(this.addr, t), e[0] = t);
}
function zd(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (i.uniform2f(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (ne(e, t))
      return;
    i.uniform2fv(this.addr, t), ie(e, t);
  }
}
function Hd(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3f(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else if (t.r !== void 0)
    (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (i.uniform3f(this.addr, t.r, t.g, t.b), e[0] = t.r, e[1] = t.g, e[2] = t.b);
  else {
    if (ne(e, t))
      return;
    i.uniform3fv(this.addr, t), ie(e, t);
  }
}
function Vd(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4f(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (ne(e, t))
      return;
    i.uniform4fv(this.addr, t), ie(e, t);
  }
}
function Gd(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (ne(e, t))
      return;
    i.uniformMatrix2fv(this.addr, !1, t), ie(e, t);
  } else {
    if (ne(e, n))
      return;
    Ha.set(n), i.uniformMatrix2fv(this.addr, !1, Ha), ie(e, n);
  }
}
function kd(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (ne(e, t))
      return;
    i.uniformMatrix3fv(this.addr, !1, t), ie(e, t);
  } else {
    if (ne(e, n))
      return;
    za.set(n), i.uniformMatrix3fv(this.addr, !1, za), ie(e, n);
  }
}
function Wd(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (ne(e, t))
      return;
    i.uniformMatrix4fv(this.addr, !1, t), ie(e, t);
  } else {
    if (ne(e, n))
      return;
    Ba.set(n), i.uniformMatrix4fv(this.addr, !1, Ba), ie(e, n);
  }
}
function Xd(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1i(this.addr, t), e[0] = t);
}
function qd(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (i.uniform2i(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (ne(e, t))
      return;
    i.uniform2iv(this.addr, t), ie(e, t);
  }
}
function Yd(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3i(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (ne(e, t))
      return;
    i.uniform3iv(this.addr, t), ie(e, t);
  }
}
function $d(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4i(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (ne(e, t))
      return;
    i.uniform4iv(this.addr, t), ie(e, t);
  }
}
function jd(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1ui(this.addr, t), e[0] = t);
}
function Kd(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (i.uniform2ui(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (ne(e, t))
      return;
    i.uniform2uiv(this.addr, t), ie(e, t);
  }
}
function Zd(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3ui(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (ne(e, t))
      return;
    i.uniform3uiv(this.addr, t), ie(e, t);
  }
}
function Jd(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4ui(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (ne(e, t))
      return;
    i.uniform4uiv(this.addr, t), ie(e, t);
  }
}
function Qd(i, t, e) {
  const n = this.cache, r = e.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r);
  const s = this.type === i.SAMPLER_2D_SHADOW ? Bo : Oo;
  e.setTexture2D(t || s, r);
}
function tf(i, t, e) {
  const n = this.cache, r = e.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), e.setTexture3D(t || Ho, r);
}
function ef(i, t, e) {
  const n = this.cache, r = e.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), e.setTextureCube(t || Vo, r);
}
function nf(i, t, e) {
  const n = this.cache, r = e.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), e.setTexture2DArray(t || zo, r);
}
function rf(i) {
  switch (i) {
    case 5126:
      return Bd;
    case 35664:
      return zd;
    case 35665:
      return Hd;
    case 35666:
      return Vd;
    case 35674:
      return Gd;
    case 35675:
      return kd;
    case 35676:
      return Wd;
    case 5124:
    case 35670:
      return Xd;
    case 35667:
    case 35671:
      return qd;
    case 35668:
    case 35672:
      return Yd;
    case 35669:
    case 35673:
      return $d;
    case 5125:
      return jd;
    case 36294:
      return Kd;
    case 36295:
      return Zd;
    case 36296:
      return Jd;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Qd;
    case 35679:
    case 36299:
    case 36307:
      return tf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return ef;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return nf;
  }
}
function sf(i, t) {
  i.uniform1fv(this.addr, t);
}
function af(i, t) {
  const e = ai(t, this.size, 2);
  i.uniform2fv(this.addr, e);
}
function of(i, t) {
  const e = ai(t, this.size, 3);
  i.uniform3fv(this.addr, e);
}
function lf(i, t) {
  const e = ai(t, this.size, 4);
  i.uniform4fv(this.addr, e);
}
function cf(i, t) {
  const e = ai(t, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, e);
}
function uf(i, t) {
  const e = ai(t, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, e);
}
function hf(i, t) {
  const e = ai(t, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, e);
}
function df(i, t) {
  i.uniform1iv(this.addr, t);
}
function ff(i, t) {
  i.uniform2iv(this.addr, t);
}
function pf(i, t) {
  i.uniform3iv(this.addr, t);
}
function mf(i, t) {
  i.uniform4iv(this.addr, t);
}
function gf(i, t) {
  i.uniform1uiv(this.addr, t);
}
function _f(i, t) {
  i.uniform2uiv(this.addr, t);
}
function vf(i, t) {
  i.uniform3uiv(this.addr, t);
}
function xf(i, t) {
  i.uniform4uiv(this.addr, t);
}
function Mf(i, t, e) {
  const n = this.cache, r = t.length, s = Mr(e, r);
  ne(n, s) || (i.uniform1iv(this.addr, s), ie(n, s));
  for (let a = 0; a !== r; ++a)
    e.setTexture2D(t[a] || Oo, s[a]);
}
function Sf(i, t, e) {
  const n = this.cache, r = t.length, s = Mr(e, r);
  ne(n, s) || (i.uniform1iv(this.addr, s), ie(n, s));
  for (let a = 0; a !== r; ++a)
    e.setTexture3D(t[a] || Ho, s[a]);
}
function Ef(i, t, e) {
  const n = this.cache, r = t.length, s = Mr(e, r);
  ne(n, s) || (i.uniform1iv(this.addr, s), ie(n, s));
  for (let a = 0; a !== r; ++a)
    e.setTextureCube(t[a] || Vo, s[a]);
}
function yf(i, t, e) {
  const n = this.cache, r = t.length, s = Mr(e, r);
  ne(n, s) || (i.uniform1iv(this.addr, s), ie(n, s));
  for (let a = 0; a !== r; ++a)
    e.setTexture2DArray(t[a] || zo, s[a]);
}
function Tf(i) {
  switch (i) {
    case 5126:
      return sf;
    case 35664:
      return af;
    case 35665:
      return of;
    case 35666:
      return lf;
    case 35674:
      return cf;
    case 35675:
      return uf;
    case 35676:
      return hf;
    case 5124:
    case 35670:
      return df;
    case 35667:
    case 35671:
      return ff;
    case 35668:
    case 35672:
      return pf;
    case 35669:
    case 35673:
      return mf;
    case 5125:
      return gf;
    case 36294:
      return _f;
    case 36295:
      return vf;
    case 36296:
      return xf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Mf;
    case 35679:
    case 36299:
    case 36307:
      return Sf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Ef;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return yf;
  }
}
class Af {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.setValue = rf(e.type);
  }
}
class bf {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = Tf(e.type);
  }
}
class wf {
  constructor(t) {
    this.id = t, this.seq = [], this.map = {};
  }
  setValue(t, e, n) {
    const r = this.seq;
    for (let s = 0, a = r.length; s !== a; ++s) {
      const o = r[s];
      o.setValue(t, e[o.id], n);
    }
  }
}
const ts = /(\w+)(\])?(\[|\.)?/g;
function Va(i, t) {
  i.seq.push(t), i.map[t.id] = t;
}
function Rf(i, t, e) {
  const n = i.name, r = n.length;
  for (ts.lastIndex = 0; ; ) {
    const s = ts.exec(n), a = ts.lastIndex;
    let o = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === r) {
      Va(e, c === void 0 ? new Af(o, i, t) : new bf(o, i, t));
      break;
    } else {
      let p = e.map[o];
      p === void 0 && (p = new wf(o), Va(e, p)), e = p;
    }
  }
}
class sr {
  constructor(t, e) {
    this.seq = [], this.map = {};
    const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      const s = t.getActiveUniform(e, r), a = t.getUniformLocation(e, s.name);
      Rf(s, a, this);
    }
  }
  setValue(t, e, n, r) {
    const s = this.map[e];
    s !== void 0 && s.setValue(t, n, r);
  }
  setOptional(t, e, n) {
    const r = e[n];
    r !== void 0 && this.setValue(t, n, r);
  }
  static upload(t, e, n, r) {
    for (let s = 0, a = e.length; s !== a; ++s) {
      const o = e[s], l = n[o.id];
      l.needsUpdate !== !1 && o.setValue(t, l.value, r);
    }
  }
  static seqWithValue(t, e) {
    const n = [];
    for (let r = 0, s = t.length; r !== s; ++r) {
      const a = t[r];
      a.id in e && n.push(a);
    }
    return n;
  }
}
function Ga(i, t, e) {
  const n = i.createShader(t);
  return i.shaderSource(n, e), i.compileShader(n), n;
}
const Cf = 37297;
let Pf = 0;
function Lf(i, t) {
  const e = i.split(`
`), n = [], r = Math.max(t - 6, 0), s = Math.min(t + 6, e.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    n.push(`${o === t ? ">" : " "} ${o}: ${e[a]}`);
  }
  return n.join(`
`);
}
function Df(i) {
  const t = Xt.getPrimaries(Xt.workingColorSpace), e = Xt.getPrimaries(i);
  let n;
  switch (t === e ? n = "" : t === cr && e === lr ? n = "LinearDisplayP3ToLinearSRGB" : t === lr && e === cr && (n = "LinearSRGBToLinearDisplayP3"), i) {
    case dn:
    case vr:
      return [n, "LinearTransferOETF"];
    case Ne:
    case gs:
      return [n, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", i), [n, "LinearTransferOETF"];
  }
}
function ka(i, t, e) {
  const n = i.getShaderParameter(t, i.COMPILE_STATUS), r = i.getShaderInfoLog(t).trim();
  if (n && r === "")
    return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const a = parseInt(s[1]);
    return e.toUpperCase() + `

` + r + `

` + Lf(i.getShaderSource(t), a);
  } else
    return r;
}
function Uf(i, t) {
  const e = Df(t);
  return `vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`;
}
function If(i, t) {
  let e;
  switch (t) {
    case Vl:
      e = "Linear";
      break;
    case Gl:
      e = "Reinhard";
      break;
    case kl:
      e = "OptimizedCineon";
      break;
    case Wl:
      e = "ACESFilmic";
      break;
    case ql:
      e = "AgX";
      break;
    case Yl:
      e = "Neutral";
      break;
    case Xl:
      e = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), e = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + e + "ToneMapping( color ); }";
}
function Nf(i) {
  return [
    i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(Mi).join(`
`);
}
function Ff(i) {
  const t = [];
  for (const e in i) {
    const n = i[e];
    n !== !1 && t.push("#define " + e + " " + n);
  }
  return t.join(`
`);
}
function Of(i, t) {
  const e = {}, n = i.getProgramParameter(t, i.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const s = i.getActiveAttrib(t, r), a = s.name;
    let o = 1;
    s.type === i.FLOAT_MAT2 && (o = 2), s.type === i.FLOAT_MAT3 && (o = 3), s.type === i.FLOAT_MAT4 && (o = 4), e[a] = {
      type: s.type,
      location: i.getAttribLocation(t, a),
      locationSize: o
    };
  }
  return e;
}
function Mi(i) {
  return i !== "";
}
function Wa(i, t) {
  const e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function Xa(i, t) {
  return i.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
const Bf = /^[ \t]*#include +<([\w\d./]+)>/gm;
function hs(i) {
  return i.replace(Bf, Hf);
}
const zf = /* @__PURE__ */ new Map();
function Hf(i, t) {
  let e = Rt[t];
  if (e === void 0) {
    const n = zf.get(t);
    if (n !== void 0)
      e = Rt[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, n);
    else
      throw new Error("Can not resolve #include <" + t + ">");
  }
  return hs(e);
}
const Vf = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function qa(i) {
  return i.replace(Vf, Gf);
}
function Gf(i, t, e, n) {
  let r = "";
  for (let s = parseInt(t); s < parseInt(e); s++)
    r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function Ya(i) {
  let t = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return i.precision === "highp" ? t += `
#define HIGH_PRECISION` : i.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (t += `
#define LOW_PRECISION`), t;
}
function kf(i) {
  let t = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === fo ? t = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === fl ? t = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === Ye && (t = "SHADOWMAP_TYPE_VSM"), t;
}
function Wf(i) {
  let t = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case ti:
      case ei:
        t = "ENVMAP_TYPE_CUBE";
        break;
      case gr:
        t = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return t;
}
function Xf(i) {
  let t = "ENVMAP_MODE_REFLECTION";
  if (i.envMap)
    switch (i.envMapMode) {
      case ei:
        t = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return t;
}
function qf(i) {
  let t = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case po:
        t = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case zl:
        t = "ENVMAP_BLENDING_MIX";
        break;
      case Hl:
        t = "ENVMAP_BLENDING_ADD";
        break;
    }
  return t;
}
function Yf(i) {
  const t = i.envMapCubeUVHeight;
  if (t === null)
    return null;
  const e = Math.log2(t) - 2, n = 1 / t;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 7 * 16)), texelHeight: n, maxMip: e };
}
function $f(i, t, e, n) {
  const r = i.getContext(), s = e.defines;
  let a = e.vertexShader, o = e.fragmentShader;
  const l = kf(e), c = Wf(e), u = Xf(e), p = qf(e), f = Yf(e), m = Nf(e), g = Ff(s), v = r.createProgram();
  let d, h, A = e.glslVersion ? "#version " + e.glslVersion + `
` : "";
  e.isRawShaderMaterial ? (d = [
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    g
  ].filter(Mi).join(`
`), d.length > 0 && (d += `
`), h = [
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    g
  ].filter(Mi).join(`
`), h.length > 0 && (h += `
`)) : (d = [
    Ya(e),
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    g,
    e.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    e.batching ? "#define USE_BATCHING" : "",
    e.instancing ? "#define USE_INSTANCING" : "",
    e.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    e.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
    e.useFog && e.fog ? "#define USE_FOG" : "",
    e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
    e.map ? "#define USE_MAP" : "",
    e.envMap ? "#define USE_ENVMAP" : "",
    e.envMap ? "#define " + u : "",
    e.lightMap ? "#define USE_LIGHTMAP" : "",
    e.aoMap ? "#define USE_AOMAP" : "",
    e.bumpMap ? "#define USE_BUMPMAP" : "",
    e.normalMap ? "#define USE_NORMALMAP" : "",
    e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    e.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    e.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    e.anisotropy ? "#define USE_ANISOTROPY" : "",
    e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    e.specularMap ? "#define USE_SPECULARMAP" : "",
    e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    e.metalnessMap ? "#define USE_METALNESSMAP" : "",
    e.alphaMap ? "#define USE_ALPHAMAP" : "",
    e.alphaHash ? "#define USE_ALPHAHASH" : "",
    e.transmission ? "#define USE_TRANSMISSION" : "",
    e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    e.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    e.mapUv ? "#define MAP_UV " + e.mapUv : "",
    e.alphaMapUv ? "#define ALPHAMAP_UV " + e.alphaMapUv : "",
    e.lightMapUv ? "#define LIGHTMAP_UV " + e.lightMapUv : "",
    e.aoMapUv ? "#define AOMAP_UV " + e.aoMapUv : "",
    e.emissiveMapUv ? "#define EMISSIVEMAP_UV " + e.emissiveMapUv : "",
    e.bumpMapUv ? "#define BUMPMAP_UV " + e.bumpMapUv : "",
    e.normalMapUv ? "#define NORMALMAP_UV " + e.normalMapUv : "",
    e.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + e.displacementMapUv : "",
    e.metalnessMapUv ? "#define METALNESSMAP_UV " + e.metalnessMapUv : "",
    e.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + e.roughnessMapUv : "",
    e.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + e.anisotropyMapUv : "",
    e.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + e.clearcoatMapUv : "",
    e.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + e.clearcoatNormalMapUv : "",
    e.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + e.clearcoatRoughnessMapUv : "",
    e.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + e.iridescenceMapUv : "",
    e.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + e.iridescenceThicknessMapUv : "",
    e.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + e.sheenColorMapUv : "",
    e.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + e.sheenRoughnessMapUv : "",
    e.specularMapUv ? "#define SPECULARMAP_UV " + e.specularMapUv : "",
    e.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + e.specularColorMapUv : "",
    e.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + e.specularIntensityMapUv : "",
    e.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + e.transmissionMapUv : "",
    e.thicknessMapUv ? "#define THICKNESSMAP_UV " + e.thicknessMapUv : "",
    //
    e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "",
    e.vertexColors ? "#define USE_COLOR" : "",
    e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    e.vertexUv1s ? "#define USE_UV1" : "",
    e.vertexUv2s ? "#define USE_UV2" : "",
    e.vertexUv3s ? "#define USE_UV3" : "",
    e.pointsUvs ? "#define USE_POINTS_UV" : "",
    e.flatShading ? "#define FLAT_SHADED" : "",
    e.skinning ? "#define USE_SKINNING" : "",
    e.morphTargets ? "#define USE_MORPHTARGETS" : "",
    e.morphNormals && e.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    e.morphColors ? "#define USE_MORPHCOLORS" : "",
    e.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE" : "",
    e.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride : "",
    e.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount : "",
    e.doubleSided ? "#define DOUBLE_SIDED" : "",
    e.flipSided ? "#define FLIP_SIDED" : "",
    e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    e.shadowMapEnabled ? "#define " + l : "",
    e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    e.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "#ifdef USE_INSTANCING_MORPH",
    "	uniform sampler2D morphTexture;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
    "	attribute vec3 morphTarget0;",
    "	attribute vec3 morphTarget1;",
    "	attribute vec3 morphTarget2;",
    "	attribute vec3 morphTarget3;",
    "	#ifdef USE_MORPHNORMALS",
    "		attribute vec3 morphNormal0;",
    "		attribute vec3 morphNormal1;",
    "		attribute vec3 morphNormal2;",
    "		attribute vec3 morphNormal3;",
    "	#else",
    "		attribute vec3 morphTarget4;",
    "		attribute vec3 morphTarget5;",
    "		attribute vec3 morphTarget6;",
    "		attribute vec3 morphTarget7;",
    "	#endif",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(Mi).join(`
`), h = [
    Ya(e),
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    g,
    e.useFog && e.fog ? "#define USE_FOG" : "",
    e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
    e.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    e.map ? "#define USE_MAP" : "",
    e.matcap ? "#define USE_MATCAP" : "",
    e.envMap ? "#define USE_ENVMAP" : "",
    e.envMap ? "#define " + c : "",
    e.envMap ? "#define " + u : "",
    e.envMap ? "#define " + p : "",
    f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
    f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
    f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
    e.lightMap ? "#define USE_LIGHTMAP" : "",
    e.aoMap ? "#define USE_AOMAP" : "",
    e.bumpMap ? "#define USE_BUMPMAP" : "",
    e.normalMap ? "#define USE_NORMALMAP" : "",
    e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    e.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    e.anisotropy ? "#define USE_ANISOTROPY" : "",
    e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    e.clearcoat ? "#define USE_CLEARCOAT" : "",
    e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    e.dispersion ? "#define USE_DISPERSION" : "",
    e.iridescence ? "#define USE_IRIDESCENCE" : "",
    e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    e.specularMap ? "#define USE_SPECULARMAP" : "",
    e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    e.metalnessMap ? "#define USE_METALNESSMAP" : "",
    e.alphaMap ? "#define USE_ALPHAMAP" : "",
    e.alphaTest ? "#define USE_ALPHATEST" : "",
    e.alphaHash ? "#define USE_ALPHAHASH" : "",
    e.sheen ? "#define USE_SHEEN" : "",
    e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    e.transmission ? "#define USE_TRANSMISSION" : "",
    e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    e.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "",
    e.vertexColors || e.instancingColor ? "#define USE_COLOR" : "",
    e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    e.vertexUv1s ? "#define USE_UV1" : "",
    e.vertexUv2s ? "#define USE_UV2" : "",
    e.vertexUv3s ? "#define USE_UV3" : "",
    e.pointsUvs ? "#define USE_POINTS_UV" : "",
    e.gradientMap ? "#define USE_GRADIENTMAP" : "",
    e.flatShading ? "#define FLAT_SHADED" : "",
    e.doubleSided ? "#define DOUBLE_SIDED" : "",
    e.flipSided ? "#define FLIP_SIDED" : "",
    e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    e.shadowMapEnabled ? "#define " + l : "",
    e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    e.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    e.toneMapping !== cn ? "#define TONE_MAPPING" : "",
    e.toneMapping !== cn ? Rt.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    e.toneMapping !== cn ? If("toneMapping", e.toneMapping) : "",
    e.dithering ? "#define DITHERING" : "",
    e.opaque ? "#define OPAQUE" : "",
    Rt.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    Uf("linearToOutputTexel", e.outputColorSpace),
    e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "",
    `
`
  ].filter(Mi).join(`
`)), a = hs(a), a = Wa(a, e), a = Xa(a, e), o = hs(o), o = Wa(o, e), o = Xa(o, e), a = qa(a), o = qa(o), e.isRawShaderMaterial !== !0 && (A = `#version 300 es
`, d = [
    m,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + d, h = [
    "#define varying in",
    e.glslVersion === ca ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    e.glslVersion === ca ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + h);
  const E = A + d + a, b = A + h + o, V = Ga(r, r.VERTEX_SHADER, E), w = Ga(r, r.FRAGMENT_SHADER, b);
  r.attachShader(v, V), r.attachShader(v, w), e.index0AttributeName !== void 0 ? r.bindAttribLocation(v, 0, e.index0AttributeName) : e.morphTargets === !0 && r.bindAttribLocation(v, 0, "position"), r.linkProgram(v);
  function C(L) {
    if (i.debug.checkShaderErrors) {
      const R = r.getProgramInfoLog(v).trim(), y = r.getShaderInfoLog(V).trim(), P = r.getShaderInfoLog(w).trim();
      let U = !0, O = !0;
      if (r.getProgramParameter(v, r.LINK_STATUS) === !1)
        if (U = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(r, v, V, w);
        else {
          const $ = ka(r, V, "vertex"), N = ka(r, w, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(v, r.VALIDATE_STATUS) + `

Material Name: ` + L.name + `
Material Type: ` + L.type + `

Program Info Log: ` + R + `
` + $ + `
` + N
          );
        }
      else
        R !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", R) : (y === "" || P === "") && (O = !1);
      O && (L.diagnostics = {
        runnable: U,
        programLog: R,
        vertexShader: {
          log: y,
          prefix: d
        },
        fragmentShader: {
          log: P,
          prefix: h
        }
      });
    }
    r.deleteShader(V), r.deleteShader(w), k = new sr(r, v), S = Of(r, v);
  }
  let k;
  this.getUniforms = function() {
    return k === void 0 && C(this), k;
  };
  let S;
  this.getAttributes = function() {
    return S === void 0 && C(this), S;
  };
  let _ = e.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return _ === !1 && (_ = r.getProgramParameter(v, Cf)), _;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(v), this.program = void 0;
  }, this.type = e.shaderType, this.name = e.shaderName, this.id = Pf++, this.cacheKey = t, this.usedTimes = 1, this.program = v, this.vertexShader = V, this.fragmentShader = w, this;
}
let jf = 0;
class Kf {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(t) {
    const e = t.vertexShader, n = t.fragmentShader, r = this._getShaderStage(e), s = this._getShaderStage(n), a = this._getShaderCacheForMaterial(t);
    return a.has(r) === !1 && (a.add(r), r.usedTimes++), a.has(s) === !1 && (a.add(s), s.usedTimes++), this;
  }
  remove(t) {
    const e = this.materialCache.get(t);
    for (const n of e)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(t), this;
  }
  getVertexShaderID(t) {
    return this._getShaderStage(t.vertexShader).id;
  }
  getFragmentShaderID(t) {
    return this._getShaderStage(t.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(t) {
    const e = this.materialCache;
    let n = e.get(t);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), e.set(t, n)), n;
  }
  _getShaderStage(t) {
    const e = this.shaderCache;
    let n = e.get(t);
    return n === void 0 && (n = new Zf(t), e.set(t, n)), n;
  }
}
class Zf {
  constructor(t) {
    this.id = jf++, this.code = t, this.usedTimes = 0;
  }
}
function Jf(i, t, e, n, r, s, a) {
  const o = new vs(), l = new Kf(), c = /* @__PURE__ */ new Set(), u = [], p = r.logarithmicDepthBuffer, f = r.vertexTextures;
  let m = r.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function v(S) {
    return c.add(S), S === 0 ? "uv" : `uv${S}`;
  }
  function d(S, _, L, R, y) {
    const P = R.fog, U = y.geometry, O = S.isMeshStandardMaterial ? R.environment : null, $ = (S.isMeshStandardMaterial ? e : t).get(S.envMap || O), N = $ && $.mapping === gr ? $.image.height : null, j = g[S.type];
    S.precision !== null && (m = r.getMaxPrecision(S.precision), m !== S.precision && console.warn("THREE.WebGLProgram.getParameters:", S.precision, "not supported, using", m, "instead."));
    const J = U.morphAttributes.position || U.morphAttributes.normal || U.morphAttributes.color, lt = J !== void 0 ? J.length : 0;
    let _t = 0;
    U.morphAttributes.position !== void 0 && (_t = 1), U.morphAttributes.normal !== void 0 && (_t = 2), U.morphAttributes.color !== void 0 && (_t = 3);
    let Et, W, q, ct;
    if (j) {
      const kt = Fe[j];
      Et = kt.vertexShader, W = kt.fragmentShader;
    } else
      Et = S.vertexShader, W = S.fragmentShader, l.update(S), q = l.getVertexShaderID(S), ct = l.getFragmentShaderID(S);
    const et = i.getRenderTarget(), vt = y.isInstancedMesh === !0, bt = y.isBatchedMesh === !0, F = !!S.map, yt = !!S.matcap, ht = !!$, Wt = !!S.aoMap, St = !!S.lightMap, Ot = !!S.bumpMap, It = !!S.normalMap, Bt = !!S.displacementMap, Kt = !!S.emissiveMap, T = !!S.metalnessMap, x = !!S.roughnessMap, X = S.anisotropy > 0, K = S.clearcoat > 0, Q = S.dispersion > 0, tt = S.iridescence > 0, gt = S.sheen > 0, ot = S.transmission > 0, at = X && !!S.anisotropyMap, Lt = K && !!S.clearcoatMap, nt = K && !!S.clearcoatNormalMap, mt = K && !!S.clearcoatRoughnessMap, Ht = tt && !!S.iridescenceMap, xt = tt && !!S.iridescenceThicknessMap, dt = gt && !!S.sheenColorMap, Dt = gt && !!S.sheenRoughnessMap, Ft = !!S.specularMap, Qt = !!S.specularColorMap, Ut = !!S.specularIntensityMap, D = ot && !!S.transmissionMap, Z = ot && !!S.thicknessMap, Y = !!S.gradientMap, rt = !!S.alphaMap, ut = S.alphaTest > 0, Vt = !!S.alphaHash, Yt = !!S.extensions;
    let Zt = cn;
    S.toneMapped && (et === null || et.isXRRenderTarget === !0) && (Zt = i.toneMapping);
    const le = {
      shaderID: j,
      shaderType: S.type,
      shaderName: S.name,
      vertexShader: Et,
      fragmentShader: W,
      defines: S.defines,
      customVertexShaderID: q,
      customFragmentShaderID: ct,
      isRawShaderMaterial: S.isRawShaderMaterial === !0,
      glslVersion: S.glslVersion,
      precision: m,
      batching: bt,
      instancing: vt,
      instancingColor: vt && y.instanceColor !== null,
      instancingMorph: vt && y.morphTexture !== null,
      supportsVertexTextures: f,
      outputColorSpace: et === null ? i.outputColorSpace : et.isXRRenderTarget === !0 ? et.texture.colorSpace : dn,
      alphaToCoverage: !!S.alphaToCoverage,
      map: F,
      matcap: yt,
      envMap: ht,
      envMapMode: ht && $.mapping,
      envMapCubeUVHeight: N,
      aoMap: Wt,
      lightMap: St,
      bumpMap: Ot,
      normalMap: It,
      displacementMap: f && Bt,
      emissiveMap: Kt,
      normalMapObjectSpace: It && S.normalMapType === oc,
      normalMapTangentSpace: It && S.normalMapType === ac,
      metalnessMap: T,
      roughnessMap: x,
      anisotropy: X,
      anisotropyMap: at,
      clearcoat: K,
      clearcoatMap: Lt,
      clearcoatNormalMap: nt,
      clearcoatRoughnessMap: mt,
      dispersion: Q,
      iridescence: tt,
      iridescenceMap: Ht,
      iridescenceThicknessMap: xt,
      sheen: gt,
      sheenColorMap: dt,
      sheenRoughnessMap: Dt,
      specularMap: Ft,
      specularColorMap: Qt,
      specularIntensityMap: Ut,
      transmission: ot,
      transmissionMap: D,
      thicknessMap: Z,
      gradientMap: Y,
      opaque: S.transparent === !1 && S.blending === Kn && S.alphaToCoverage === !1,
      alphaMap: rt,
      alphaTest: ut,
      alphaHash: Vt,
      combine: S.combine,
      //
      mapUv: F && v(S.map.channel),
      aoMapUv: Wt && v(S.aoMap.channel),
      lightMapUv: St && v(S.lightMap.channel),
      bumpMapUv: Ot && v(S.bumpMap.channel),
      normalMapUv: It && v(S.normalMap.channel),
      displacementMapUv: Bt && v(S.displacementMap.channel),
      emissiveMapUv: Kt && v(S.emissiveMap.channel),
      metalnessMapUv: T && v(S.metalnessMap.channel),
      roughnessMapUv: x && v(S.roughnessMap.channel),
      anisotropyMapUv: at && v(S.anisotropyMap.channel),
      clearcoatMapUv: Lt && v(S.clearcoatMap.channel),
      clearcoatNormalMapUv: nt && v(S.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: mt && v(S.clearcoatRoughnessMap.channel),
      iridescenceMapUv: Ht && v(S.iridescenceMap.channel),
      iridescenceThicknessMapUv: xt && v(S.iridescenceThicknessMap.channel),
      sheenColorMapUv: dt && v(S.sheenColorMap.channel),
      sheenRoughnessMapUv: Dt && v(S.sheenRoughnessMap.channel),
      specularMapUv: Ft && v(S.specularMap.channel),
      specularColorMapUv: Qt && v(S.specularColorMap.channel),
      specularIntensityMapUv: Ut && v(S.specularIntensityMap.channel),
      transmissionMapUv: D && v(S.transmissionMap.channel),
      thicknessMapUv: Z && v(S.thicknessMap.channel),
      alphaMapUv: rt && v(S.alphaMap.channel),
      //
      vertexTangents: !!U.attributes.tangent && (It || X),
      vertexColors: S.vertexColors,
      vertexAlphas: S.vertexColors === !0 && !!U.attributes.color && U.attributes.color.itemSize === 4,
      pointsUvs: y.isPoints === !0 && !!U.attributes.uv && (F || rt),
      fog: !!P,
      useFog: S.fog === !0,
      fogExp2: !!P && P.isFogExp2,
      flatShading: S.flatShading === !0,
      sizeAttenuation: S.sizeAttenuation === !0,
      logarithmicDepthBuffer: p,
      skinning: y.isSkinnedMesh === !0,
      morphTargets: U.morphAttributes.position !== void 0,
      morphNormals: U.morphAttributes.normal !== void 0,
      morphColors: U.morphAttributes.color !== void 0,
      morphTargetsCount: lt,
      morphTextureStride: _t,
      numDirLights: _.directional.length,
      numPointLights: _.point.length,
      numSpotLights: _.spot.length,
      numSpotLightMaps: _.spotLightMap.length,
      numRectAreaLights: _.rectArea.length,
      numHemiLights: _.hemi.length,
      numDirLightShadows: _.directionalShadowMap.length,
      numPointLightShadows: _.pointShadowMap.length,
      numSpotLightShadows: _.spotShadowMap.length,
      numSpotLightShadowsWithMaps: _.numSpotLightShadowsWithMaps,
      numLightProbes: _.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: S.dithering,
      shadowMapEnabled: i.shadowMap.enabled && L.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: Zt,
      useLegacyLights: i._useLegacyLights,
      decodeVideoTexture: F && S.map.isVideoTexture === !0 && Xt.getTransfer(S.map.colorSpace) === $t,
      premultipliedAlpha: S.premultipliedAlpha,
      doubleSided: S.side === $e,
      flipSided: S.side === Me,
      useDepthPacking: S.depthPacking >= 0,
      depthPacking: S.depthPacking || 0,
      index0AttributeName: S.index0AttributeName,
      extensionClipCullDistance: Yt && S.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: Yt && S.extensions.multiDraw === !0 && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: S.customProgramCacheKey()
    };
    return le.vertexUv1s = c.has(1), le.vertexUv2s = c.has(2), le.vertexUv3s = c.has(3), c.clear(), le;
  }
  function h(S) {
    const _ = [];
    if (S.shaderID ? _.push(S.shaderID) : (_.push(S.customVertexShaderID), _.push(S.customFragmentShaderID)), S.defines !== void 0)
      for (const L in S.defines)
        _.push(L), _.push(S.defines[L]);
    return S.isRawShaderMaterial === !1 && (A(_, S), E(_, S), _.push(i.outputColorSpace)), _.push(S.customProgramCacheKey), _.join();
  }
  function A(S, _) {
    S.push(_.precision), S.push(_.outputColorSpace), S.push(_.envMapMode), S.push(_.envMapCubeUVHeight), S.push(_.mapUv), S.push(_.alphaMapUv), S.push(_.lightMapUv), S.push(_.aoMapUv), S.push(_.bumpMapUv), S.push(_.normalMapUv), S.push(_.displacementMapUv), S.push(_.emissiveMapUv), S.push(_.metalnessMapUv), S.push(_.roughnessMapUv), S.push(_.anisotropyMapUv), S.push(_.clearcoatMapUv), S.push(_.clearcoatNormalMapUv), S.push(_.clearcoatRoughnessMapUv), S.push(_.iridescenceMapUv), S.push(_.iridescenceThicknessMapUv), S.push(_.sheenColorMapUv), S.push(_.sheenRoughnessMapUv), S.push(_.specularMapUv), S.push(_.specularColorMapUv), S.push(_.specularIntensityMapUv), S.push(_.transmissionMapUv), S.push(_.thicknessMapUv), S.push(_.combine), S.push(_.fogExp2), S.push(_.sizeAttenuation), S.push(_.morphTargetsCount), S.push(_.morphAttributeCount), S.push(_.numDirLights), S.push(_.numPointLights), S.push(_.numSpotLights), S.push(_.numSpotLightMaps), S.push(_.numHemiLights), S.push(_.numRectAreaLights), S.push(_.numDirLightShadows), S.push(_.numPointLightShadows), S.push(_.numSpotLightShadows), S.push(_.numSpotLightShadowsWithMaps), S.push(_.numLightProbes), S.push(_.shadowMapType), S.push(_.toneMapping), S.push(_.numClippingPlanes), S.push(_.numClipIntersection), S.push(_.depthPacking);
  }
  function E(S, _) {
    o.disableAll(), _.supportsVertexTextures && o.enable(0), _.instancing && o.enable(1), _.instancingColor && o.enable(2), _.instancingMorph && o.enable(3), _.matcap && o.enable(4), _.envMap && o.enable(5), _.normalMapObjectSpace && o.enable(6), _.normalMapTangentSpace && o.enable(7), _.clearcoat && o.enable(8), _.iridescence && o.enable(9), _.alphaTest && o.enable(10), _.vertexColors && o.enable(11), _.vertexAlphas && o.enable(12), _.vertexUv1s && o.enable(13), _.vertexUv2s && o.enable(14), _.vertexUv3s && o.enable(15), _.vertexTangents && o.enable(16), _.anisotropy && o.enable(17), _.alphaHash && o.enable(18), _.batching && o.enable(19), _.dispersion && o.enable(20), S.push(o.mask), o.disableAll(), _.fog && o.enable(0), _.useFog && o.enable(1), _.flatShading && o.enable(2), _.logarithmicDepthBuffer && o.enable(3), _.skinning && o.enable(4), _.morphTargets && o.enable(5), _.morphNormals && o.enable(6), _.morphColors && o.enable(7), _.premultipliedAlpha && o.enable(8), _.shadowMapEnabled && o.enable(9), _.useLegacyLights && o.enable(10), _.doubleSided && o.enable(11), _.flipSided && o.enable(12), _.useDepthPacking && o.enable(13), _.dithering && o.enable(14), _.transmission && o.enable(15), _.sheen && o.enable(16), _.opaque && o.enable(17), _.pointsUvs && o.enable(18), _.decodeVideoTexture && o.enable(19), _.alphaToCoverage && o.enable(20), S.push(o.mask);
  }
  function b(S) {
    const _ = g[S.type];
    let L;
    if (_) {
      const R = Fe[_];
      L = Nc.clone(R.uniforms);
    } else
      L = S.uniforms;
    return L;
  }
  function V(S, _) {
    let L;
    for (let R = 0, y = u.length; R < y; R++) {
      const P = u[R];
      if (P.cacheKey === _) {
        L = P, ++L.usedTimes;
        break;
      }
    }
    return L === void 0 && (L = new $f(i, _, S, s), u.push(L)), L;
  }
  function w(S) {
    if (--S.usedTimes === 0) {
      const _ = u.indexOf(S);
      u[_] = u[u.length - 1], u.pop(), S.destroy();
    }
  }
  function C(S) {
    l.remove(S);
  }
  function k() {
    l.dispose();
  }
  return {
    getParameters: d,
    getProgramCacheKey: h,
    getUniforms: b,
    acquireProgram: V,
    releaseProgram: w,
    releaseShaderCache: C,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: u,
    dispose: k
  };
}
function Qf() {
  let i = /* @__PURE__ */ new WeakMap();
  function t(s) {
    let a = i.get(s);
    return a === void 0 && (a = {}, i.set(s, a)), a;
  }
  function e(s) {
    i.delete(s);
  }
  function n(s, a, o) {
    i.get(s)[a] = o;
  }
  function r() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    remove: e,
    update: n,
    dispose: r
  };
}
function tp(i, t) {
  return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.material.id !== t.material.id ? i.material.id - t.material.id : i.z !== t.z ? i.z - t.z : i.id - t.id;
}
function $a(i, t) {
  return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.z !== t.z ? t.z - i.z : i.id - t.id;
}
function ja() {
  const i = [];
  let t = 0;
  const e = [], n = [], r = [];
  function s() {
    t = 0, e.length = 0, n.length = 0, r.length = 0;
  }
  function a(p, f, m, g, v, d) {
    let h = i[t];
    return h === void 0 ? (h = {
      id: p.id,
      object: p,
      geometry: f,
      material: m,
      groupOrder: g,
      renderOrder: p.renderOrder,
      z: v,
      group: d
    }, i[t] = h) : (h.id = p.id, h.object = p, h.geometry = f, h.material = m, h.groupOrder = g, h.renderOrder = p.renderOrder, h.z = v, h.group = d), t++, h;
  }
  function o(p, f, m, g, v, d) {
    const h = a(p, f, m, g, v, d);
    m.transmission > 0 ? n.push(h) : m.transparent === !0 ? r.push(h) : e.push(h);
  }
  function l(p, f, m, g, v, d) {
    const h = a(p, f, m, g, v, d);
    m.transmission > 0 ? n.unshift(h) : m.transparent === !0 ? r.unshift(h) : e.unshift(h);
  }
  function c(p, f) {
    e.length > 1 && e.sort(p || tp), n.length > 1 && n.sort(f || $a), r.length > 1 && r.sort(f || $a);
  }
  function u() {
    for (let p = t, f = i.length; p < f; p++) {
      const m = i[p];
      if (m.id === null)
        break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
    }
  }
  return {
    opaque: e,
    transmissive: n,
    transparent: r,
    init: s,
    push: o,
    unshift: l,
    finish: u,
    sort: c
  };
}
function ep() {
  let i = /* @__PURE__ */ new WeakMap();
  function t(n, r) {
    const s = i.get(n);
    let a;
    return s === void 0 ? (a = new ja(), i.set(n, [a])) : r >= s.length ? (a = new ja(), s.push(a)) : a = s[r], a;
  }
  function e() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: e
  };
}
function np() {
  const i = {};
  return {
    get: function(t) {
      if (i[t.id] !== void 0)
        return i[t.id];
      let e;
      switch (t.type) {
        case "DirectionalLight":
          e = {
            direction: new B(),
            color: new Pt()
          };
          break;
        case "SpotLight":
          e = {
            position: new B(),
            direction: new B(),
            color: new Pt(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          e = {
            position: new B(),
            color: new Pt(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          e = {
            direction: new B(),
            skyColor: new Pt(),
            groundColor: new Pt()
          };
          break;
        case "RectAreaLight":
          e = {
            color: new Pt(),
            position: new B(),
            halfWidth: new B(),
            halfHeight: new B()
          };
          break;
      }
      return i[t.id] = e, e;
    }
  };
}
function ip() {
  const i = {};
  return {
    get: function(t) {
      if (i[t.id] !== void 0)
        return i[t.id];
      let e;
      switch (t.type) {
        case "DirectionalLight":
          e = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new zt()
          };
          break;
        case "SpotLight":
          e = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new zt()
          };
          break;
        case "PointLight":
          e = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new zt(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[t.id] = e, e;
    }
  };
}
let rp = 0;
function sp(i, t) {
  return (t.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (i.map ? 1 : 0);
}
function ap(i) {
  const t = new np(), e = ip(), n = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let c = 0; c < 9; c++)
    n.probe.push(new B());
  const r = new B(), s = new qt(), a = new qt();
  function o(c, u) {
    let p = 0, f = 0, m = 0;
    for (let L = 0; L < 9; L++)
      n.probe[L].set(0, 0, 0);
    let g = 0, v = 0, d = 0, h = 0, A = 0, E = 0, b = 0, V = 0, w = 0, C = 0, k = 0;
    c.sort(sp);
    const S = u === !0 ? Math.PI : 1;
    for (let L = 0, R = c.length; L < R; L++) {
      const y = c[L], P = y.color, U = y.intensity, O = y.distance, $ = y.shadow && y.shadow.map ? y.shadow.map.texture : null;
      if (y.isAmbientLight)
        p += P.r * U * S, f += P.g * U * S, m += P.b * U * S;
      else if (y.isLightProbe) {
        for (let N = 0; N < 9; N++)
          n.probe[N].addScaledVector(y.sh.coefficients[N], U);
        k++;
      } else if (y.isDirectionalLight) {
        const N = t.get(y);
        if (N.color.copy(y.color).multiplyScalar(y.intensity * S), y.castShadow) {
          const j = y.shadow, J = e.get(y);
          J.shadowBias = j.bias, J.shadowNormalBias = j.normalBias, J.shadowRadius = j.radius, J.shadowMapSize = j.mapSize, n.directionalShadow[g] = J, n.directionalShadowMap[g] = $, n.directionalShadowMatrix[g] = y.shadow.matrix, E++;
        }
        n.directional[g] = N, g++;
      } else if (y.isSpotLight) {
        const N = t.get(y);
        N.position.setFromMatrixPosition(y.matrixWorld), N.color.copy(P).multiplyScalar(U * S), N.distance = O, N.coneCos = Math.cos(y.angle), N.penumbraCos = Math.cos(y.angle * (1 - y.penumbra)), N.decay = y.decay, n.spot[d] = N;
        const j = y.shadow;
        if (y.map && (n.spotLightMap[w] = y.map, w++, j.updateMatrices(y), y.castShadow && C++), n.spotLightMatrix[d] = j.matrix, y.castShadow) {
          const J = e.get(y);
          J.shadowBias = j.bias, J.shadowNormalBias = j.normalBias, J.shadowRadius = j.radius, J.shadowMapSize = j.mapSize, n.spotShadow[d] = J, n.spotShadowMap[d] = $, V++;
        }
        d++;
      } else if (y.isRectAreaLight) {
        const N = t.get(y);
        N.color.copy(P).multiplyScalar(U), N.halfWidth.set(y.width * 0.5, 0, 0), N.halfHeight.set(0, y.height * 0.5, 0), n.rectArea[h] = N, h++;
      } else if (y.isPointLight) {
        const N = t.get(y);
        if (N.color.copy(y.color).multiplyScalar(y.intensity * S), N.distance = y.distance, N.decay = y.decay, y.castShadow) {
          const j = y.shadow, J = e.get(y);
          J.shadowBias = j.bias, J.shadowNormalBias = j.normalBias, J.shadowRadius = j.radius, J.shadowMapSize = j.mapSize, J.shadowCameraNear = j.camera.near, J.shadowCameraFar = j.camera.far, n.pointShadow[v] = J, n.pointShadowMap[v] = $, n.pointShadowMatrix[v] = y.shadow.matrix, b++;
        }
        n.point[v] = N, v++;
      } else if (y.isHemisphereLight) {
        const N = t.get(y);
        N.skyColor.copy(y.color).multiplyScalar(U * S), N.groundColor.copy(y.groundColor).multiplyScalar(U * S), n.hemi[A] = N, A++;
      }
    }
    h > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = it.LTC_FLOAT_1, n.rectAreaLTC2 = it.LTC_FLOAT_2) : (n.rectAreaLTC1 = it.LTC_HALF_1, n.rectAreaLTC2 = it.LTC_HALF_2)), n.ambient[0] = p, n.ambient[1] = f, n.ambient[2] = m;
    const _ = n.hash;
    (_.directionalLength !== g || _.pointLength !== v || _.spotLength !== d || _.rectAreaLength !== h || _.hemiLength !== A || _.numDirectionalShadows !== E || _.numPointShadows !== b || _.numSpotShadows !== V || _.numSpotMaps !== w || _.numLightProbes !== k) && (n.directional.length = g, n.spot.length = d, n.rectArea.length = h, n.point.length = v, n.hemi.length = A, n.directionalShadow.length = E, n.directionalShadowMap.length = E, n.pointShadow.length = b, n.pointShadowMap.length = b, n.spotShadow.length = V, n.spotShadowMap.length = V, n.directionalShadowMatrix.length = E, n.pointShadowMatrix.length = b, n.spotLightMatrix.length = V + w - C, n.spotLightMap.length = w, n.numSpotLightShadowsWithMaps = C, n.numLightProbes = k, _.directionalLength = g, _.pointLength = v, _.spotLength = d, _.rectAreaLength = h, _.hemiLength = A, _.numDirectionalShadows = E, _.numPointShadows = b, _.numSpotShadows = V, _.numSpotMaps = w, _.numLightProbes = k, n.version = rp++);
  }
  function l(c, u) {
    let p = 0, f = 0, m = 0, g = 0, v = 0;
    const d = u.matrixWorldInverse;
    for (let h = 0, A = c.length; h < A; h++) {
      const E = c[h];
      if (E.isDirectionalLight) {
        const b = n.directional[p];
        b.direction.setFromMatrixPosition(E.matrixWorld), r.setFromMatrixPosition(E.target.matrixWorld), b.direction.sub(r), b.direction.transformDirection(d), p++;
      } else if (E.isSpotLight) {
        const b = n.spot[m];
        b.position.setFromMatrixPosition(E.matrixWorld), b.position.applyMatrix4(d), b.direction.setFromMatrixPosition(E.matrixWorld), r.setFromMatrixPosition(E.target.matrixWorld), b.direction.sub(r), b.direction.transformDirection(d), m++;
      } else if (E.isRectAreaLight) {
        const b = n.rectArea[g];
        b.position.setFromMatrixPosition(E.matrixWorld), b.position.applyMatrix4(d), a.identity(), s.copy(E.matrixWorld), s.premultiply(d), a.extractRotation(s), b.halfWidth.set(E.width * 0.5, 0, 0), b.halfHeight.set(0, E.height * 0.5, 0), b.halfWidth.applyMatrix4(a), b.halfHeight.applyMatrix4(a), g++;
      } else if (E.isPointLight) {
        const b = n.point[f];
        b.position.setFromMatrixPosition(E.matrixWorld), b.position.applyMatrix4(d), f++;
      } else if (E.isHemisphereLight) {
        const b = n.hemi[v];
        b.direction.setFromMatrixPosition(E.matrixWorld), b.direction.transformDirection(d), v++;
      }
    }
  }
  return {
    setup: o,
    setupView: l,
    state: n
  };
}
function Ka(i) {
  const t = new ap(i), e = [], n = [];
  function r(u) {
    c.camera = u, e.length = 0, n.length = 0;
  }
  function s(u) {
    e.push(u);
  }
  function a(u) {
    n.push(u);
  }
  function o(u) {
    t.setup(e, u);
  }
  function l(u) {
    t.setupView(e, u);
  }
  const c = {
    lightsArray: e,
    shadowsArray: n,
    camera: null,
    lights: t,
    transmissionRenderTarget: {}
  };
  return {
    init: r,
    state: c,
    setupLights: o,
    setupLightsView: l,
    pushLight: s,
    pushShadow: a
  };
}
function op(i) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(r, s = 0) {
    const a = t.get(r);
    let o;
    return a === void 0 ? (o = new Ka(i), t.set(r, [o])) : s >= a.length ? (o = new Ka(i), a.push(o)) : o = a[s], o;
  }
  function n() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: n
  };
}
class lp extends Ri {
  constructor(t) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = rc, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
  }
}
class cp extends Ri {
  constructor(t) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this;
  }
}
const up = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, hp = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function dp(i, t, e) {
  let n = new Ms();
  const r = new zt(), s = new zt(), a = new se(), o = new lp({ depthPacking: sc }), l = new cp(), c = {}, u = e.maxTextureSize, p = { [un]: Me, [Me]: un, [$e]: $e }, f = new Je({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new zt() },
      radius: { value: 4 }
    },
    vertexShader: up,
    fragmentShader: hp
  }), m = f.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new He();
  g.setAttribute(
    "position",
    new Ce(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const v = new Ae(g, f), d = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = fo;
  let h = this.type;
  this.render = function(w, C, k) {
    if (d.enabled === !1 || d.autoUpdate === !1 && d.needsUpdate === !1 || w.length === 0)
      return;
    const S = i.getRenderTarget(), _ = i.getActiveCubeFace(), L = i.getActiveMipmapLevel(), R = i.state;
    R.setBlending(ln), R.buffers.color.setClear(1, 1, 1, 1), R.buffers.depth.setTest(!0), R.setScissorTest(!1);
    const y = h !== Ye && this.type === Ye, P = h === Ye && this.type !== Ye;
    for (let U = 0, O = w.length; U < O; U++) {
      const $ = w[U], N = $.shadow;
      if (N === void 0) {
        console.warn("THREE.WebGLShadowMap:", $, "has no shadow.");
        continue;
      }
      if (N.autoUpdate === !1 && N.needsUpdate === !1)
        continue;
      r.copy(N.mapSize);
      const j = N.getFrameExtents();
      if (r.multiply(j), s.copy(N.mapSize), (r.x > u || r.y > u) && (r.x > u && (s.x = Math.floor(u / j.x), r.x = s.x * j.x, N.mapSize.x = s.x), r.y > u && (s.y = Math.floor(u / j.y), r.y = s.y * j.y, N.mapSize.y = s.y)), N.map === null || y === !0 || P === !0) {
        const lt = this.type !== Ye ? { minFilter: xe, magFilter: xe } : {};
        N.map !== null && N.map.dispose(), N.map = new bn(r.x, r.y, lt), N.map.texture.name = $.name + ".shadowMap", N.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(N.map), i.clear();
      const J = N.getViewportCount();
      for (let lt = 0; lt < J; lt++) {
        const _t = N.getViewport(lt);
        a.set(
          s.x * _t.x,
          s.y * _t.y,
          s.x * _t.z,
          s.y * _t.w
        ), R.viewport(a), N.updateMatrices($, lt), n = N.getFrustum(), b(C, k, N.camera, $, this.type);
      }
      N.isPointLightShadow !== !0 && this.type === Ye && A(N, k), N.needsUpdate = !1;
    }
    h = this.type, d.needsUpdate = !1, i.setRenderTarget(S, _, L);
  };
  function A(w, C) {
    const k = t.update(v);
    f.defines.VSM_SAMPLES !== w.blurSamples && (f.defines.VSM_SAMPLES = w.blurSamples, m.defines.VSM_SAMPLES = w.blurSamples, f.needsUpdate = !0, m.needsUpdate = !0), w.mapPass === null && (w.mapPass = new bn(r.x, r.y)), f.uniforms.shadow_pass.value = w.map.texture, f.uniforms.resolution.value = w.mapSize, f.uniforms.radius.value = w.radius, i.setRenderTarget(w.mapPass), i.clear(), i.renderBufferDirect(C, null, k, f, v, null), m.uniforms.shadow_pass.value = w.mapPass.texture, m.uniforms.resolution.value = w.mapSize, m.uniforms.radius.value = w.radius, i.setRenderTarget(w.map), i.clear(), i.renderBufferDirect(C, null, k, m, v, null);
  }
  function E(w, C, k, S) {
    let _ = null;
    const L = k.isPointLight === !0 ? w.customDistanceMaterial : w.customDepthMaterial;
    if (L !== void 0)
      _ = L;
    else if (_ = k.isPointLight === !0 ? l : o, i.localClippingEnabled && C.clipShadows === !0 && Array.isArray(C.clippingPlanes) && C.clippingPlanes.length !== 0 || C.displacementMap && C.displacementScale !== 0 || C.alphaMap && C.alphaTest > 0 || C.map && C.alphaTest > 0) {
      const R = _.uuid, y = C.uuid;
      let P = c[R];
      P === void 0 && (P = {}, c[R] = P);
      let U = P[y];
      U === void 0 && (U = _.clone(), P[y] = U, C.addEventListener("dispose", V)), _ = U;
    }
    if (_.visible = C.visible, _.wireframe = C.wireframe, S === Ye ? _.side = C.shadowSide !== null ? C.shadowSide : C.side : _.side = C.shadowSide !== null ? C.shadowSide : p[C.side], _.alphaMap = C.alphaMap, _.alphaTest = C.alphaTest, _.map = C.map, _.clipShadows = C.clipShadows, _.clippingPlanes = C.clippingPlanes, _.clipIntersection = C.clipIntersection, _.displacementMap = C.displacementMap, _.displacementScale = C.displacementScale, _.displacementBias = C.displacementBias, _.wireframeLinewidth = C.wireframeLinewidth, _.linewidth = C.linewidth, k.isPointLight === !0 && _.isMeshDistanceMaterial === !0) {
      const R = i.properties.get(_);
      R.light = k;
    }
    return _;
  }
  function b(w, C, k, S, _) {
    if (w.visible === !1)
      return;
    if (w.layers.test(C.layers) && (w.isMesh || w.isLine || w.isPoints) && (w.castShadow || w.receiveShadow && _ === Ye) && (!w.frustumCulled || n.intersectsObject(w))) {
      w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse, w.matrixWorld);
      const y = t.update(w), P = w.material;
      if (Array.isArray(P)) {
        const U = y.groups;
        for (let O = 0, $ = U.length; O < $; O++) {
          const N = U[O], j = P[N.materialIndex];
          if (j && j.visible) {
            const J = E(w, j, S, _);
            w.onBeforeShadow(i, w, C, k, y, J, N), i.renderBufferDirect(k, null, y, J, w, N), w.onAfterShadow(i, w, C, k, y, J, N);
          }
        }
      } else if (P.visible) {
        const U = E(w, P, S, _);
        w.onBeforeShadow(i, w, C, k, y, U, null), i.renderBufferDirect(k, null, y, U, w, null), w.onAfterShadow(i, w, C, k, y, U, null);
      }
    }
    const R = w.children;
    for (let y = 0, P = R.length; y < P; y++)
      b(R[y], C, k, S, _);
  }
  function V(w) {
    w.target.removeEventListener("dispose", V);
    for (const k in c) {
      const S = c[k], _ = w.target.uuid;
      _ in S && (S[_].dispose(), delete S[_]);
    }
  }
}
function fp(i) {
  function t() {
    let D = !1;
    const Z = new se();
    let Y = null;
    const rt = new se(0, 0, 0, 0);
    return {
      setMask: function(ut) {
        Y !== ut && !D && (i.colorMask(ut, ut, ut, ut), Y = ut);
      },
      setLocked: function(ut) {
        D = ut;
      },
      setClear: function(ut, Vt, Yt, Zt, le) {
        le === !0 && (ut *= Zt, Vt *= Zt, Yt *= Zt), Z.set(ut, Vt, Yt, Zt), rt.equals(Z) === !1 && (i.clearColor(ut, Vt, Yt, Zt), rt.copy(Z));
      },
      reset: function() {
        D = !1, Y = null, rt.set(-1, 0, 0, 0);
      }
    };
  }
  function e() {
    let D = !1, Z = null, Y = null, rt = null;
    return {
      setTest: function(ut) {
        ut ? ct(i.DEPTH_TEST) : et(i.DEPTH_TEST);
      },
      setMask: function(ut) {
        Z !== ut && !D && (i.depthMask(ut), Z = ut);
      },
      setFunc: function(ut) {
        if (Y !== ut) {
          switch (ut) {
            case Dl:
              i.depthFunc(i.NEVER);
              break;
            case Ul:
              i.depthFunc(i.ALWAYS);
              break;
            case Il:
              i.depthFunc(i.LESS);
              break;
            case ar:
              i.depthFunc(i.LEQUAL);
              break;
            case Nl:
              i.depthFunc(i.EQUAL);
              break;
            case Fl:
              i.depthFunc(i.GEQUAL);
              break;
            case Ol:
              i.depthFunc(i.GREATER);
              break;
            case Bl:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          Y = ut;
        }
      },
      setLocked: function(ut) {
        D = ut;
      },
      setClear: function(ut) {
        rt !== ut && (i.clearDepth(ut), rt = ut);
      },
      reset: function() {
        D = !1, Z = null, Y = null, rt = null;
      }
    };
  }
  function n() {
    let D = !1, Z = null, Y = null, rt = null, ut = null, Vt = null, Yt = null, Zt = null, le = null;
    return {
      setTest: function(kt) {
        D || (kt ? ct(i.STENCIL_TEST) : et(i.STENCIL_TEST));
      },
      setMask: function(kt) {
        Z !== kt && !D && (i.stencilMask(kt), Z = kt);
      },
      setFunc: function(kt, Ie, fe) {
        (Y !== kt || rt !== Ie || ut !== fe) && (i.stencilFunc(kt, Ie, fe), Y = kt, rt = Ie, ut = fe);
      },
      setOp: function(kt, Ie, fe) {
        (Vt !== kt || Yt !== Ie || Zt !== fe) && (i.stencilOp(kt, Ie, fe), Vt = kt, Yt = Ie, Zt = fe);
      },
      setLocked: function(kt) {
        D = kt;
      },
      setClear: function(kt) {
        le !== kt && (i.clearStencil(kt), le = kt);
      },
      reset: function() {
        D = !1, Z = null, Y = null, rt = null, ut = null, Vt = null, Yt = null, Zt = null, le = null;
      }
    };
  }
  const r = new t(), s = new e(), a = new n(), o = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let c = {}, u = {}, p = /* @__PURE__ */ new WeakMap(), f = [], m = null, g = !1, v = null, d = null, h = null, A = null, E = null, b = null, V = null, w = new Pt(0, 0, 0), C = 0, k = !1, S = null, _ = null, L = null, R = null, y = null;
  const P = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let U = !1, O = 0;
  const $ = i.getParameter(i.VERSION);
  $.indexOf("WebGL") !== -1 ? (O = parseFloat(/^WebGL (\d)/.exec($)[1]), U = O >= 1) : $.indexOf("OpenGL ES") !== -1 && (O = parseFloat(/^OpenGL ES (\d)/.exec($)[1]), U = O >= 2);
  let N = null, j = {};
  const J = i.getParameter(i.SCISSOR_BOX), lt = i.getParameter(i.VIEWPORT), _t = new se().fromArray(J), Et = new se().fromArray(lt);
  function W(D, Z, Y, rt) {
    const ut = new Uint8Array(4), Vt = i.createTexture();
    i.bindTexture(D, Vt), i.texParameteri(D, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(D, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let Yt = 0; Yt < Y; Yt++)
      D === i.TEXTURE_3D || D === i.TEXTURE_2D_ARRAY ? i.texImage3D(Z, 0, i.RGBA, 1, 1, rt, 0, i.RGBA, i.UNSIGNED_BYTE, ut) : i.texImage2D(Z + Yt, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, ut);
    return Vt;
  }
  const q = {};
  q[i.TEXTURE_2D] = W(i.TEXTURE_2D, i.TEXTURE_2D, 1), q[i.TEXTURE_CUBE_MAP] = W(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), q[i.TEXTURE_2D_ARRAY] = W(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), q[i.TEXTURE_3D] = W(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), r.setClear(0, 0, 0, 1), s.setClear(1), a.setClear(0), ct(i.DEPTH_TEST), s.setFunc(ar), Ot(!1), It(Ls), ct(i.CULL_FACE), Wt(ln);
  function ct(D) {
    c[D] !== !0 && (i.enable(D), c[D] = !0);
  }
  function et(D) {
    c[D] !== !1 && (i.disable(D), c[D] = !1);
  }
  function vt(D, Z) {
    return u[D] !== Z ? (i.bindFramebuffer(D, Z), u[D] = Z, D === i.DRAW_FRAMEBUFFER && (u[i.FRAMEBUFFER] = Z), D === i.FRAMEBUFFER && (u[i.DRAW_FRAMEBUFFER] = Z), !0) : !1;
  }
  function bt(D, Z) {
    let Y = f, rt = !1;
    if (D) {
      Y = p.get(Z), Y === void 0 && (Y = [], p.set(Z, Y));
      const ut = D.textures;
      if (Y.length !== ut.length || Y[0] !== i.COLOR_ATTACHMENT0) {
        for (let Vt = 0, Yt = ut.length; Vt < Yt; Vt++)
          Y[Vt] = i.COLOR_ATTACHMENT0 + Vt;
        Y.length = ut.length, rt = !0;
      }
    } else
      Y[0] !== i.BACK && (Y[0] = i.BACK, rt = !0);
    rt && i.drawBuffers(Y);
  }
  function F(D) {
    return m !== D ? (i.useProgram(D), m = D, !0) : !1;
  }
  const yt = {
    [En]: i.FUNC_ADD,
    [ml]: i.FUNC_SUBTRACT,
    [gl]: i.FUNC_REVERSE_SUBTRACT
  };
  yt[_l] = i.MIN, yt[vl] = i.MAX;
  const ht = {
    [xl]: i.ZERO,
    [Ml]: i.ONE,
    [Sl]: i.SRC_COLOR,
    [rs]: i.SRC_ALPHA,
    [wl]: i.SRC_ALPHA_SATURATE,
    [Al]: i.DST_COLOR,
    [yl]: i.DST_ALPHA,
    [El]: i.ONE_MINUS_SRC_COLOR,
    [ss]: i.ONE_MINUS_SRC_ALPHA,
    [bl]: i.ONE_MINUS_DST_COLOR,
    [Tl]: i.ONE_MINUS_DST_ALPHA,
    [Rl]: i.CONSTANT_COLOR,
    [Cl]: i.ONE_MINUS_CONSTANT_COLOR,
    [Pl]: i.CONSTANT_ALPHA,
    [Ll]: i.ONE_MINUS_CONSTANT_ALPHA
  };
  function Wt(D, Z, Y, rt, ut, Vt, Yt, Zt, le, kt) {
    if (D === ln) {
      g === !0 && (et(i.BLEND), g = !1);
      return;
    }
    if (g === !1 && (ct(i.BLEND), g = !0), D !== pl) {
      if (D !== v || kt !== k) {
        if ((d !== En || E !== En) && (i.blendEquation(i.FUNC_ADD), d = En, E = En), kt)
          switch (D) {
            case Kn:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case Ds:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case Us:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case Is:
              i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", D);
              break;
          }
        else
          switch (D) {
            case Kn:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case Ds:
              i.blendFunc(i.SRC_ALPHA, i.ONE);
              break;
            case Us:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case Is:
              i.blendFunc(i.ZERO, i.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", D);
              break;
          }
        h = null, A = null, b = null, V = null, w.set(0, 0, 0), C = 0, v = D, k = kt;
      }
      return;
    }
    ut = ut || Z, Vt = Vt || Y, Yt = Yt || rt, (Z !== d || ut !== E) && (i.blendEquationSeparate(yt[Z], yt[ut]), d = Z, E = ut), (Y !== h || rt !== A || Vt !== b || Yt !== V) && (i.blendFuncSeparate(ht[Y], ht[rt], ht[Vt], ht[Yt]), h = Y, A = rt, b = Vt, V = Yt), (Zt.equals(w) === !1 || le !== C) && (i.blendColor(Zt.r, Zt.g, Zt.b, le), w.copy(Zt), C = le), v = D, k = !1;
  }
  function St(D, Z) {
    D.side === $e ? et(i.CULL_FACE) : ct(i.CULL_FACE);
    let Y = D.side === Me;
    Z && (Y = !Y), Ot(Y), D.blending === Kn && D.transparent === !1 ? Wt(ln) : Wt(D.blending, D.blendEquation, D.blendSrc, D.blendDst, D.blendEquationAlpha, D.blendSrcAlpha, D.blendDstAlpha, D.blendColor, D.blendAlpha, D.premultipliedAlpha), s.setFunc(D.depthFunc), s.setTest(D.depthTest), s.setMask(D.depthWrite), r.setMask(D.colorWrite);
    const rt = D.stencilWrite;
    a.setTest(rt), rt && (a.setMask(D.stencilWriteMask), a.setFunc(D.stencilFunc, D.stencilRef, D.stencilFuncMask), a.setOp(D.stencilFail, D.stencilZFail, D.stencilZPass)), Kt(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits), D.alphaToCoverage === !0 ? ct(i.SAMPLE_ALPHA_TO_COVERAGE) : et(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Ot(D) {
    S !== D && (D ? i.frontFace(i.CW) : i.frontFace(i.CCW), S = D);
  }
  function It(D) {
    D !== hl ? (ct(i.CULL_FACE), D !== _ && (D === Ls ? i.cullFace(i.BACK) : D === dl ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : et(i.CULL_FACE), _ = D;
  }
  function Bt(D) {
    D !== L && (U && i.lineWidth(D), L = D);
  }
  function Kt(D, Z, Y) {
    D ? (ct(i.POLYGON_OFFSET_FILL), (R !== Z || y !== Y) && (i.polygonOffset(Z, Y), R = Z, y = Y)) : et(i.POLYGON_OFFSET_FILL);
  }
  function T(D) {
    D ? ct(i.SCISSOR_TEST) : et(i.SCISSOR_TEST);
  }
  function x(D) {
    D === void 0 && (D = i.TEXTURE0 + P - 1), N !== D && (i.activeTexture(D), N = D);
  }
  function X(D, Z, Y) {
    Y === void 0 && (N === null ? Y = i.TEXTURE0 + P - 1 : Y = N);
    let rt = j[Y];
    rt === void 0 && (rt = { type: void 0, texture: void 0 }, j[Y] = rt), (rt.type !== D || rt.texture !== Z) && (N !== Y && (i.activeTexture(Y), N = Y), i.bindTexture(D, Z || q[D]), rt.type = D, rt.texture = Z);
  }
  function K() {
    const D = j[N];
    D !== void 0 && D.type !== void 0 && (i.bindTexture(D.type, null), D.type = void 0, D.texture = void 0);
  }
  function Q() {
    try {
      i.compressedTexImage2D.apply(i, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function tt() {
    try {
      i.compressedTexImage3D.apply(i, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function gt() {
    try {
      i.texSubImage2D.apply(i, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function ot() {
    try {
      i.texSubImage3D.apply(i, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function at() {
    try {
      i.compressedTexSubImage2D.apply(i, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Lt() {
    try {
      i.compressedTexSubImage3D.apply(i, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function nt() {
    try {
      i.texStorage2D.apply(i, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function mt() {
    try {
      i.texStorage3D.apply(i, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Ht() {
    try {
      i.texImage2D.apply(i, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function xt() {
    try {
      i.texImage3D.apply(i, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function dt(D) {
    _t.equals(D) === !1 && (i.scissor(D.x, D.y, D.z, D.w), _t.copy(D));
  }
  function Dt(D) {
    Et.equals(D) === !1 && (i.viewport(D.x, D.y, D.z, D.w), Et.copy(D));
  }
  function Ft(D, Z) {
    let Y = l.get(Z);
    Y === void 0 && (Y = /* @__PURE__ */ new WeakMap(), l.set(Z, Y));
    let rt = Y.get(D);
    rt === void 0 && (rt = i.getUniformBlockIndex(Z, D.name), Y.set(D, rt));
  }
  function Qt(D, Z) {
    const rt = l.get(Z).get(D);
    o.get(Z) !== rt && (i.uniformBlockBinding(Z, rt, D.__bindingPointIndex), o.set(Z, rt));
  }
  function Ut() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), c = {}, N = null, j = {}, u = {}, p = /* @__PURE__ */ new WeakMap(), f = [], m = null, g = !1, v = null, d = null, h = null, A = null, E = null, b = null, V = null, w = new Pt(0, 0, 0), C = 0, k = !1, S = null, _ = null, L = null, R = null, y = null, _t.set(0, 0, i.canvas.width, i.canvas.height), Et.set(0, 0, i.canvas.width, i.canvas.height), r.reset(), s.reset(), a.reset();
  }
  return {
    buffers: {
      color: r,
      depth: s,
      stencil: a
    },
    enable: ct,
    disable: et,
    bindFramebuffer: vt,
    drawBuffers: bt,
    useProgram: F,
    setBlending: Wt,
    setMaterial: St,
    setFlipSided: Ot,
    setCullFace: It,
    setLineWidth: Bt,
    setPolygonOffset: Kt,
    setScissorTest: T,
    activeTexture: x,
    bindTexture: X,
    unbindTexture: K,
    compressedTexImage2D: Q,
    compressedTexImage3D: tt,
    texImage2D: Ht,
    texImage3D: xt,
    updateUBOMapping: Ft,
    uniformBlockBinding: Qt,
    texStorage2D: nt,
    texStorage3D: mt,
    texSubImage2D: gt,
    texSubImage3D: ot,
    compressedTexSubImage2D: at,
    compressedTexSubImage3D: Lt,
    scissor: dt,
    viewport: Dt,
    reset: Ut
  };
}
function pp(i, t, e, n, r, s, a) {
  const o = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), c = new zt(), u = /* @__PURE__ */ new WeakMap();
  let p;
  const f = /* @__PURE__ */ new WeakMap();
  let m = !1;
  try {
    m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(T, x) {
    return m ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(T, x)
    ) : hr("canvas");
  }
  function v(T, x, X) {
    let K = 1;
    const Q = Kt(T);
    if ((Q.width > X || Q.height > X) && (K = X / Math.max(Q.width, Q.height)), K < 1)
      if (typeof HTMLImageElement < "u" && T instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && T instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && T instanceof ImageBitmap || typeof VideoFrame < "u" && T instanceof VideoFrame) {
        const tt = Math.floor(K * Q.width), gt = Math.floor(K * Q.height);
        p === void 0 && (p = g(tt, gt));
        const ot = x ? g(tt, gt) : p;
        return ot.width = tt, ot.height = gt, ot.getContext("2d").drawImage(T, 0, 0, tt, gt), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + Q.width + "x" + Q.height + ") to (" + tt + "x" + gt + ")."), ot;
      } else
        return "data" in T && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + Q.width + "x" + Q.height + ")."), T;
    return T;
  }
  function d(T) {
    return T.generateMipmaps && T.minFilter !== xe && T.minFilter !== Ue;
  }
  function h(T) {
    i.generateMipmap(T);
  }
  function A(T, x, X, K, Q = !1) {
    if (T !== null) {
      if (i[T] !== void 0)
        return i[T];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + T + "'");
    }
    let tt = x;
    if (x === i.RED && (X === i.FLOAT && (tt = i.R32F), X === i.HALF_FLOAT && (tt = i.R16F), X === i.UNSIGNED_BYTE && (tt = i.R8)), x === i.RED_INTEGER && (X === i.UNSIGNED_BYTE && (tt = i.R8UI), X === i.UNSIGNED_SHORT && (tt = i.R16UI), X === i.UNSIGNED_INT && (tt = i.R32UI), X === i.BYTE && (tt = i.R8I), X === i.SHORT && (tt = i.R16I), X === i.INT && (tt = i.R32I)), x === i.RG && (X === i.FLOAT && (tt = i.RG32F), X === i.HALF_FLOAT && (tt = i.RG16F), X === i.UNSIGNED_BYTE && (tt = i.RG8)), x === i.RG_INTEGER && (X === i.UNSIGNED_BYTE && (tt = i.RG8UI), X === i.UNSIGNED_SHORT && (tt = i.RG16UI), X === i.UNSIGNED_INT && (tt = i.RG32UI), X === i.BYTE && (tt = i.RG8I), X === i.SHORT && (tt = i.RG16I), X === i.INT && (tt = i.RG32I)), x === i.RGB && X === i.UNSIGNED_INT_5_9_9_9_REV && (tt = i.RGB9_E5), x === i.RGBA) {
      const gt = Q ? or : Xt.getTransfer(K);
      X === i.FLOAT && (tt = i.RGBA32F), X === i.HALF_FLOAT && (tt = i.RGBA16F), X === i.UNSIGNED_BYTE && (tt = gt === $t ? i.SRGB8_ALPHA8 : i.RGBA8), X === i.UNSIGNED_SHORT_4_4_4_4 && (tt = i.RGBA4), X === i.UNSIGNED_SHORT_5_5_5_1 && (tt = i.RGB5_A1);
    }
    return (tt === i.R16F || tt === i.R32F || tt === i.RG16F || tt === i.RG32F || tt === i.RGBA16F || tt === i.RGBA32F) && t.get("EXT_color_buffer_float"), tt;
  }
  function E(T, x) {
    return d(T) === !0 || T.isFramebufferTexture && T.minFilter !== xe && T.minFilter !== Ue ? Math.log2(Math.max(x.width, x.height)) + 1 : T.mipmaps !== void 0 && T.mipmaps.length > 0 ? T.mipmaps.length : T.isCompressedTexture && Array.isArray(T.image) ? x.mipmaps.length : 1;
  }
  function b(T) {
    const x = T.target;
    x.removeEventListener("dispose", b), w(x), x.isVideoTexture && u.delete(x);
  }
  function V(T) {
    const x = T.target;
    x.removeEventListener("dispose", V), k(x);
  }
  function w(T) {
    const x = n.get(T);
    if (x.__webglInit === void 0)
      return;
    const X = T.source, K = f.get(X);
    if (K) {
      const Q = K[x.__cacheKey];
      Q.usedTimes--, Q.usedTimes === 0 && C(T), Object.keys(K).length === 0 && f.delete(X);
    }
    n.remove(T);
  }
  function C(T) {
    const x = n.get(T);
    i.deleteTexture(x.__webglTexture);
    const X = T.source, K = f.get(X);
    delete K[x.__cacheKey], a.memory.textures--;
  }
  function k(T) {
    const x = n.get(T);
    if (T.depthTexture && T.depthTexture.dispose(), T.isWebGLCubeRenderTarget)
      for (let K = 0; K < 6; K++) {
        if (Array.isArray(x.__webglFramebuffer[K]))
          for (let Q = 0; Q < x.__webglFramebuffer[K].length; Q++)
            i.deleteFramebuffer(x.__webglFramebuffer[K][Q]);
        else
          i.deleteFramebuffer(x.__webglFramebuffer[K]);
        x.__webglDepthbuffer && i.deleteRenderbuffer(x.__webglDepthbuffer[K]);
      }
    else {
      if (Array.isArray(x.__webglFramebuffer))
        for (let K = 0; K < x.__webglFramebuffer.length; K++)
          i.deleteFramebuffer(x.__webglFramebuffer[K]);
      else
        i.deleteFramebuffer(x.__webglFramebuffer);
      if (x.__webglDepthbuffer && i.deleteRenderbuffer(x.__webglDepthbuffer), x.__webglMultisampledFramebuffer && i.deleteFramebuffer(x.__webglMultisampledFramebuffer), x.__webglColorRenderbuffer)
        for (let K = 0; K < x.__webglColorRenderbuffer.length; K++)
          x.__webglColorRenderbuffer[K] && i.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);
      x.__webglDepthRenderbuffer && i.deleteRenderbuffer(x.__webglDepthRenderbuffer);
    }
    const X = T.textures;
    for (let K = 0, Q = X.length; K < Q; K++) {
      const tt = n.get(X[K]);
      tt.__webglTexture && (i.deleteTexture(tt.__webglTexture), a.memory.textures--), n.remove(X[K]);
    }
    n.remove(T);
  }
  let S = 0;
  function _() {
    S = 0;
  }
  function L() {
    const T = S;
    return T >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + T + " texture units while this GPU supports only " + r.maxTextures), S += 1, T;
  }
  function R(T) {
    const x = [];
    return x.push(T.wrapS), x.push(T.wrapT), x.push(T.wrapR || 0), x.push(T.magFilter), x.push(T.minFilter), x.push(T.anisotropy), x.push(T.internalFormat), x.push(T.format), x.push(T.type), x.push(T.generateMipmaps), x.push(T.premultiplyAlpha), x.push(T.flipY), x.push(T.unpackAlignment), x.push(T.colorSpace), x.join();
  }
  function y(T, x) {
    const X = n.get(T);
    if (T.isVideoTexture && It(T), T.isRenderTargetTexture === !1 && T.version > 0 && X.__version !== T.version) {
      const K = T.image;
      if (K === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (K.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        _t(X, T, x);
        return;
      }
    }
    e.bindTexture(i.TEXTURE_2D, X.__webglTexture, i.TEXTURE0 + x);
  }
  function P(T, x) {
    const X = n.get(T);
    if (T.version > 0 && X.__version !== T.version) {
      _t(X, T, x);
      return;
    }
    e.bindTexture(i.TEXTURE_2D_ARRAY, X.__webglTexture, i.TEXTURE0 + x);
  }
  function U(T, x) {
    const X = n.get(T);
    if (T.version > 0 && X.__version !== T.version) {
      _t(X, T, x);
      return;
    }
    e.bindTexture(i.TEXTURE_3D, X.__webglTexture, i.TEXTURE0 + x);
  }
  function O(T, x) {
    const X = n.get(T);
    if (T.version > 0 && X.__version !== T.version) {
      Et(X, T, x);
      return;
    }
    e.bindTexture(i.TEXTURE_CUBE_MAP, X.__webglTexture, i.TEXTURE0 + x);
  }
  const $ = {
    [ls]: i.REPEAT,
    [Tn]: i.CLAMP_TO_EDGE,
    [cs]: i.MIRRORED_REPEAT
  }, N = {
    [xe]: i.NEAREST,
    [$l]: i.NEAREST_MIPMAP_NEAREST,
    [Di]: i.NEAREST_MIPMAP_LINEAR,
    [Ue]: i.LINEAR,
    [Tr]: i.LINEAR_MIPMAP_NEAREST,
    [An]: i.LINEAR_MIPMAP_LINEAR
  }, j = {
    [lc]: i.NEVER,
    [pc]: i.ALWAYS,
    [cc]: i.LESS,
    [To]: i.LEQUAL,
    [uc]: i.EQUAL,
    [fc]: i.GEQUAL,
    [hc]: i.GREATER,
    [dc]: i.NOTEQUAL
  };
  function J(T, x) {
    if (x.type === je && t.has("OES_texture_float_linear") === !1 && (x.magFilter === Ue || x.magFilter === Tr || x.magFilter === Di || x.magFilter === An || x.minFilter === Ue || x.minFilter === Tr || x.minFilter === Di || x.minFilter === An) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(T, i.TEXTURE_WRAP_S, $[x.wrapS]), i.texParameteri(T, i.TEXTURE_WRAP_T, $[x.wrapT]), (T === i.TEXTURE_3D || T === i.TEXTURE_2D_ARRAY) && i.texParameteri(T, i.TEXTURE_WRAP_R, $[x.wrapR]), i.texParameteri(T, i.TEXTURE_MAG_FILTER, N[x.magFilter]), i.texParameteri(T, i.TEXTURE_MIN_FILTER, N[x.minFilter]), x.compareFunction && (i.texParameteri(T, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(T, i.TEXTURE_COMPARE_FUNC, j[x.compareFunction])), t.has("EXT_texture_filter_anisotropic") === !0) {
      if (x.magFilter === xe || x.minFilter !== Di && x.minFilter !== An || x.type === je && t.has("OES_texture_float_linear") === !1)
        return;
      if (x.anisotropy > 1 || n.get(x).__currentAnisotropy) {
        const X = t.get("EXT_texture_filter_anisotropic");
        i.texParameterf(T, X.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(x.anisotropy, r.getMaxAnisotropy())), n.get(x).__currentAnisotropy = x.anisotropy;
      }
    }
  }
  function lt(T, x) {
    let X = !1;
    T.__webglInit === void 0 && (T.__webglInit = !0, x.addEventListener("dispose", b));
    const K = x.source;
    let Q = f.get(K);
    Q === void 0 && (Q = {}, f.set(K, Q));
    const tt = R(x);
    if (tt !== T.__cacheKey) {
      Q[tt] === void 0 && (Q[tt] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, X = !0), Q[tt].usedTimes++;
      const gt = Q[T.__cacheKey];
      gt !== void 0 && (Q[T.__cacheKey].usedTimes--, gt.usedTimes === 0 && C(x)), T.__cacheKey = tt, T.__webglTexture = Q[tt].texture;
    }
    return X;
  }
  function _t(T, x, X) {
    let K = i.TEXTURE_2D;
    (x.isDataArrayTexture || x.isCompressedArrayTexture) && (K = i.TEXTURE_2D_ARRAY), x.isData3DTexture && (K = i.TEXTURE_3D);
    const Q = lt(T, x), tt = x.source;
    e.bindTexture(K, T.__webglTexture, i.TEXTURE0 + X);
    const gt = n.get(tt);
    if (tt.version !== gt.__version || Q === !0) {
      e.activeTexture(i.TEXTURE0 + X);
      const ot = Xt.getPrimaries(Xt.workingColorSpace), at = x.colorSpace === on ? null : Xt.getPrimaries(x.colorSpace), Lt = x.colorSpace === on || ot === at ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, x.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, x.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Lt);
      let nt = v(x.image, !1, r.maxTextureSize);
      nt = Bt(x, nt);
      const mt = s.convert(x.format, x.colorSpace), Ht = s.convert(x.type);
      let xt = A(x.internalFormat, mt, Ht, x.colorSpace, x.isVideoTexture);
      J(K, x);
      let dt;
      const Dt = x.mipmaps, Ft = x.isVideoTexture !== !0, Qt = gt.__version === void 0 || Q === !0, Ut = tt.dataReady, D = E(x, nt);
      if (x.isDepthTexture)
        xt = i.DEPTH_COMPONENT16, x.type === je ? xt = i.DEPTH_COMPONENT32F : x.type === ni ? xt = i.DEPTH_COMPONENT24 : x.type === Ai && (xt = i.DEPTH24_STENCIL8), Qt && (Ft ? e.texStorage2D(i.TEXTURE_2D, 1, xt, nt.width, nt.height) : e.texImage2D(i.TEXTURE_2D, 0, xt, nt.width, nt.height, 0, mt, Ht, null));
      else if (x.isDataTexture)
        if (Dt.length > 0) {
          Ft && Qt && e.texStorage2D(i.TEXTURE_2D, D, xt, Dt[0].width, Dt[0].height);
          for (let Z = 0, Y = Dt.length; Z < Y; Z++)
            dt = Dt[Z], Ft ? Ut && e.texSubImage2D(i.TEXTURE_2D, Z, 0, 0, dt.width, dt.height, mt, Ht, dt.data) : e.texImage2D(i.TEXTURE_2D, Z, xt, dt.width, dt.height, 0, mt, Ht, dt.data);
          x.generateMipmaps = !1;
        } else
          Ft ? (Qt && e.texStorage2D(i.TEXTURE_2D, D, xt, nt.width, nt.height), Ut && e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, nt.width, nt.height, mt, Ht, nt.data)) : e.texImage2D(i.TEXTURE_2D, 0, xt, nt.width, nt.height, 0, mt, Ht, nt.data);
      else if (x.isCompressedTexture)
        if (x.isCompressedArrayTexture) {
          Ft && Qt && e.texStorage3D(i.TEXTURE_2D_ARRAY, D, xt, Dt[0].width, Dt[0].height, nt.depth);
          for (let Z = 0, Y = Dt.length; Z < Y; Z++)
            dt = Dt[Z], x.format !== ze ? mt !== null ? Ft ? Ut && e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, Z, 0, 0, 0, dt.width, dt.height, nt.depth, mt, dt.data, 0, 0) : e.compressedTexImage3D(i.TEXTURE_2D_ARRAY, Z, xt, dt.width, dt.height, nt.depth, 0, dt.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ft ? Ut && e.texSubImage3D(i.TEXTURE_2D_ARRAY, Z, 0, 0, 0, dt.width, dt.height, nt.depth, mt, Ht, dt.data) : e.texImage3D(i.TEXTURE_2D_ARRAY, Z, xt, dt.width, dt.height, nt.depth, 0, mt, Ht, dt.data);
        } else {
          Ft && Qt && e.texStorage2D(i.TEXTURE_2D, D, xt, Dt[0].width, Dt[0].height);
          for (let Z = 0, Y = Dt.length; Z < Y; Z++)
            dt = Dt[Z], x.format !== ze ? mt !== null ? Ft ? Ut && e.compressedTexSubImage2D(i.TEXTURE_2D, Z, 0, 0, dt.width, dt.height, mt, dt.data) : e.compressedTexImage2D(i.TEXTURE_2D, Z, xt, dt.width, dt.height, 0, dt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ft ? Ut && e.texSubImage2D(i.TEXTURE_2D, Z, 0, 0, dt.width, dt.height, mt, Ht, dt.data) : e.texImage2D(i.TEXTURE_2D, Z, xt, dt.width, dt.height, 0, mt, Ht, dt.data);
        }
      else if (x.isDataArrayTexture)
        Ft ? (Qt && e.texStorage3D(i.TEXTURE_2D_ARRAY, D, xt, nt.width, nt.height, nt.depth), Ut && e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, nt.width, nt.height, nt.depth, mt, Ht, nt.data)) : e.texImage3D(i.TEXTURE_2D_ARRAY, 0, xt, nt.width, nt.height, nt.depth, 0, mt, Ht, nt.data);
      else if (x.isData3DTexture)
        Ft ? (Qt && e.texStorage3D(i.TEXTURE_3D, D, xt, nt.width, nt.height, nt.depth), Ut && e.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, nt.width, nt.height, nt.depth, mt, Ht, nt.data)) : e.texImage3D(i.TEXTURE_3D, 0, xt, nt.width, nt.height, nt.depth, 0, mt, Ht, nt.data);
      else if (x.isFramebufferTexture) {
        if (Qt)
          if (Ft)
            e.texStorage2D(i.TEXTURE_2D, D, xt, nt.width, nt.height);
          else {
            let Z = nt.width, Y = nt.height;
            for (let rt = 0; rt < D; rt++)
              e.texImage2D(i.TEXTURE_2D, rt, xt, Z, Y, 0, mt, Ht, null), Z >>= 1, Y >>= 1;
          }
      } else if (Dt.length > 0) {
        if (Ft && Qt) {
          const Z = Kt(Dt[0]);
          e.texStorage2D(i.TEXTURE_2D, D, xt, Z.width, Z.height);
        }
        for (let Z = 0, Y = Dt.length; Z < Y; Z++)
          dt = Dt[Z], Ft ? Ut && e.texSubImage2D(i.TEXTURE_2D, Z, 0, 0, mt, Ht, dt) : e.texImage2D(i.TEXTURE_2D, Z, xt, mt, Ht, dt);
        x.generateMipmaps = !1;
      } else if (Ft) {
        if (Qt) {
          const Z = Kt(nt);
          e.texStorage2D(i.TEXTURE_2D, D, xt, Z.width, Z.height);
        }
        Ut && e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, mt, Ht, nt);
      } else
        e.texImage2D(i.TEXTURE_2D, 0, xt, mt, Ht, nt);
      d(x) && h(K), gt.__version = tt.version, x.onUpdate && x.onUpdate(x);
    }
    T.__version = x.version;
  }
  function Et(T, x, X) {
    if (x.image.length !== 6)
      return;
    const K = lt(T, x), Q = x.source;
    e.bindTexture(i.TEXTURE_CUBE_MAP, T.__webglTexture, i.TEXTURE0 + X);
    const tt = n.get(Q);
    if (Q.version !== tt.__version || K === !0) {
      e.activeTexture(i.TEXTURE0 + X);
      const gt = Xt.getPrimaries(Xt.workingColorSpace), ot = x.colorSpace === on ? null : Xt.getPrimaries(x.colorSpace), at = x.colorSpace === on || gt === ot ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, x.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, x.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, at);
      const Lt = x.isCompressedTexture || x.image[0].isCompressedTexture, nt = x.image[0] && x.image[0].isDataTexture, mt = [];
      for (let Y = 0; Y < 6; Y++)
        !Lt && !nt ? mt[Y] = v(x.image[Y], !0, r.maxCubemapSize) : mt[Y] = nt ? x.image[Y].image : x.image[Y], mt[Y] = Bt(x, mt[Y]);
      const Ht = mt[0], xt = s.convert(x.format, x.colorSpace), dt = s.convert(x.type), Dt = A(x.internalFormat, xt, dt, x.colorSpace), Ft = x.isVideoTexture !== !0, Qt = tt.__version === void 0 || K === !0, Ut = Q.dataReady;
      let D = E(x, Ht);
      J(i.TEXTURE_CUBE_MAP, x);
      let Z;
      if (Lt) {
        Ft && Qt && e.texStorage2D(i.TEXTURE_CUBE_MAP, D, Dt, Ht.width, Ht.height);
        for (let Y = 0; Y < 6; Y++) {
          Z = mt[Y].mipmaps;
          for (let rt = 0; rt < Z.length; rt++) {
            const ut = Z[rt];
            x.format !== ze ? xt !== null ? Ft ? Ut && e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, rt, 0, 0, ut.width, ut.height, xt, ut.data) : e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, rt, Dt, ut.width, ut.height, 0, ut.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ft ? Ut && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, rt, 0, 0, ut.width, ut.height, xt, dt, ut.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, rt, Dt, ut.width, ut.height, 0, xt, dt, ut.data);
          }
        }
      } else {
        if (Z = x.mipmaps, Ft && Qt) {
          Z.length > 0 && D++;
          const Y = Kt(mt[0]);
          e.texStorage2D(i.TEXTURE_CUBE_MAP, D, Dt, Y.width, Y.height);
        }
        for (let Y = 0; Y < 6; Y++)
          if (nt) {
            Ft ? Ut && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, 0, 0, mt[Y].width, mt[Y].height, xt, dt, mt[Y].data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, Dt, mt[Y].width, mt[Y].height, 0, xt, dt, mt[Y].data);
            for (let rt = 0; rt < Z.length; rt++) {
              const Vt = Z[rt].image[Y].image;
              Ft ? Ut && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, rt + 1, 0, 0, Vt.width, Vt.height, xt, dt, Vt.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, rt + 1, Dt, Vt.width, Vt.height, 0, xt, dt, Vt.data);
            }
          } else {
            Ft ? Ut && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, 0, 0, xt, dt, mt[Y]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, Dt, xt, dt, mt[Y]);
            for (let rt = 0; rt < Z.length; rt++) {
              const ut = Z[rt];
              Ft ? Ut && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, rt + 1, 0, 0, xt, dt, ut.image[Y]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, rt + 1, Dt, xt, dt, ut.image[Y]);
            }
          }
      }
      d(x) && h(i.TEXTURE_CUBE_MAP), tt.__version = Q.version, x.onUpdate && x.onUpdate(x);
    }
    T.__version = x.version;
  }
  function W(T, x, X, K, Q, tt) {
    const gt = s.convert(X.format, X.colorSpace), ot = s.convert(X.type), at = A(X.internalFormat, gt, ot, X.colorSpace);
    if (!n.get(x).__hasExternalTextures) {
      const nt = Math.max(1, x.width >> tt), mt = Math.max(1, x.height >> tt);
      Q === i.TEXTURE_3D || Q === i.TEXTURE_2D_ARRAY ? e.texImage3D(Q, tt, at, nt, mt, x.depth, 0, gt, ot, null) : e.texImage2D(Q, tt, at, nt, mt, 0, gt, ot, null);
    }
    e.bindFramebuffer(i.FRAMEBUFFER, T), Ot(x) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, K, Q, n.get(X).__webglTexture, 0, St(x)) : (Q === i.TEXTURE_2D || Q >= i.TEXTURE_CUBE_MAP_POSITIVE_X && Q <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, K, Q, n.get(X).__webglTexture, tt), e.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function q(T, x, X) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, T), x.depthBuffer && !x.stencilBuffer) {
      let K = i.DEPTH_COMPONENT24;
      if (X || Ot(x)) {
        const Q = x.depthTexture;
        Q && Q.isDepthTexture && (Q.type === je ? K = i.DEPTH_COMPONENT32F : Q.type === ni && (K = i.DEPTH_COMPONENT24));
        const tt = St(x);
        Ot(x) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, tt, K, x.width, x.height) : i.renderbufferStorageMultisample(i.RENDERBUFFER, tt, K, x.width, x.height);
      } else
        i.renderbufferStorage(i.RENDERBUFFER, K, x.width, x.height);
      i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.RENDERBUFFER, T);
    } else if (x.depthBuffer && x.stencilBuffer) {
      const K = St(x);
      X && Ot(x) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, K, i.DEPTH24_STENCIL8, x.width, x.height) : Ot(x) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, K, i.DEPTH24_STENCIL8, x.width, x.height) : i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, x.width, x.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.RENDERBUFFER, T);
    } else {
      const K = x.textures;
      for (let Q = 0; Q < K.length; Q++) {
        const tt = K[Q], gt = s.convert(tt.format, tt.colorSpace), ot = s.convert(tt.type), at = A(tt.internalFormat, gt, ot, tt.colorSpace), Lt = St(x);
        X && Ot(x) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, Lt, at, x.width, x.height) : Ot(x) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, Lt, at, x.width, x.height) : i.renderbufferStorage(i.RENDERBUFFER, at, x.width, x.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function ct(T, x) {
    if (x && x.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (e.bindFramebuffer(i.FRAMEBUFFER, T), !(x.depthTexture && x.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(x.depthTexture).__webglTexture || x.depthTexture.image.width !== x.width || x.depthTexture.image.height !== x.height) && (x.depthTexture.image.width = x.width, x.depthTexture.image.height = x.height, x.depthTexture.needsUpdate = !0), y(x.depthTexture, 0);
    const K = n.get(x.depthTexture).__webglTexture, Q = St(x);
    if (x.depthTexture.format === Zn)
      Ot(x) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, K, 0, Q) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, K, 0);
    else if (x.depthTexture.format === Ti)
      Ot(x) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, K, 0, Q) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, K, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function et(T) {
    const x = n.get(T), X = T.isWebGLCubeRenderTarget === !0;
    if (T.depthTexture && !x.__autoAllocateDepthBuffer) {
      if (X)
        throw new Error("target.depthTexture not supported in Cube render targets");
      ct(x.__webglFramebuffer, T);
    } else if (X) {
      x.__webglDepthbuffer = [];
      for (let K = 0; K < 6; K++)
        e.bindFramebuffer(i.FRAMEBUFFER, x.__webglFramebuffer[K]), x.__webglDepthbuffer[K] = i.createRenderbuffer(), q(x.__webglDepthbuffer[K], T, !1);
    } else
      e.bindFramebuffer(i.FRAMEBUFFER, x.__webglFramebuffer), x.__webglDepthbuffer = i.createRenderbuffer(), q(x.__webglDepthbuffer, T, !1);
    e.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function vt(T, x, X) {
    const K = n.get(T);
    x !== void 0 && W(K.__webglFramebuffer, T, T.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), X !== void 0 && et(T);
  }
  function bt(T) {
    const x = T.texture, X = n.get(T), K = n.get(x);
    T.addEventListener("dispose", V);
    const Q = T.textures, tt = T.isWebGLCubeRenderTarget === !0, gt = Q.length > 1;
    if (gt || (K.__webglTexture === void 0 && (K.__webglTexture = i.createTexture()), K.__version = x.version, a.memory.textures++), tt) {
      X.__webglFramebuffer = [];
      for (let ot = 0; ot < 6; ot++)
        if (x.mipmaps && x.mipmaps.length > 0) {
          X.__webglFramebuffer[ot] = [];
          for (let at = 0; at < x.mipmaps.length; at++)
            X.__webglFramebuffer[ot][at] = i.createFramebuffer();
        } else
          X.__webglFramebuffer[ot] = i.createFramebuffer();
    } else {
      if (x.mipmaps && x.mipmaps.length > 0) {
        X.__webglFramebuffer = [];
        for (let ot = 0; ot < x.mipmaps.length; ot++)
          X.__webglFramebuffer[ot] = i.createFramebuffer();
      } else
        X.__webglFramebuffer = i.createFramebuffer();
      if (gt)
        for (let ot = 0, at = Q.length; ot < at; ot++) {
          const Lt = n.get(Q[ot]);
          Lt.__webglTexture === void 0 && (Lt.__webglTexture = i.createTexture(), a.memory.textures++);
        }
      if (T.samples > 0 && Ot(T) === !1) {
        X.__webglMultisampledFramebuffer = i.createFramebuffer(), X.__webglColorRenderbuffer = [], e.bindFramebuffer(i.FRAMEBUFFER, X.__webglMultisampledFramebuffer);
        for (let ot = 0; ot < Q.length; ot++) {
          const at = Q[ot];
          X.__webglColorRenderbuffer[ot] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, X.__webglColorRenderbuffer[ot]);
          const Lt = s.convert(at.format, at.colorSpace), nt = s.convert(at.type), mt = A(at.internalFormat, Lt, nt, at.colorSpace, T.isXRRenderTarget === !0), Ht = St(T);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, Ht, mt, T.width, T.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ot, i.RENDERBUFFER, X.__webglColorRenderbuffer[ot]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), T.depthBuffer && (X.__webglDepthRenderbuffer = i.createRenderbuffer(), q(X.__webglDepthRenderbuffer, T, !0)), e.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (tt) {
      e.bindTexture(i.TEXTURE_CUBE_MAP, K.__webglTexture), J(i.TEXTURE_CUBE_MAP, x);
      for (let ot = 0; ot < 6; ot++)
        if (x.mipmaps && x.mipmaps.length > 0)
          for (let at = 0; at < x.mipmaps.length; at++)
            W(X.__webglFramebuffer[ot][at], T, x, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ot, at);
        else
          W(X.__webglFramebuffer[ot], T, x, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ot, 0);
      d(x) && h(i.TEXTURE_CUBE_MAP), e.unbindTexture();
    } else if (gt) {
      for (let ot = 0, at = Q.length; ot < at; ot++) {
        const Lt = Q[ot], nt = n.get(Lt);
        e.bindTexture(i.TEXTURE_2D, nt.__webglTexture), J(i.TEXTURE_2D, Lt), W(X.__webglFramebuffer, T, Lt, i.COLOR_ATTACHMENT0 + ot, i.TEXTURE_2D, 0), d(Lt) && h(i.TEXTURE_2D);
      }
      e.unbindTexture();
    } else {
      let ot = i.TEXTURE_2D;
      if ((T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) && (ot = T.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), e.bindTexture(ot, K.__webglTexture), J(ot, x), x.mipmaps && x.mipmaps.length > 0)
        for (let at = 0; at < x.mipmaps.length; at++)
          W(X.__webglFramebuffer[at], T, x, i.COLOR_ATTACHMENT0, ot, at);
      else
        W(X.__webglFramebuffer, T, x, i.COLOR_ATTACHMENT0, ot, 0);
      d(x) && h(ot), e.unbindTexture();
    }
    T.depthBuffer && et(T);
  }
  function F(T) {
    const x = T.textures;
    for (let X = 0, K = x.length; X < K; X++) {
      const Q = x[X];
      if (d(Q)) {
        const tt = T.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : i.TEXTURE_2D, gt = n.get(Q).__webglTexture;
        e.bindTexture(tt, gt), h(tt), e.unbindTexture();
      }
    }
  }
  const yt = [], ht = [];
  function Wt(T) {
    if (T.samples > 0) {
      if (Ot(T) === !1) {
        const x = T.textures, X = T.width, K = T.height;
        let Q = i.COLOR_BUFFER_BIT;
        const tt = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, gt = n.get(T), ot = x.length > 1;
        if (ot)
          for (let at = 0; at < x.length; at++)
            e.bindFramebuffer(i.FRAMEBUFFER, gt.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + at, i.RENDERBUFFER, null), e.bindFramebuffer(i.FRAMEBUFFER, gt.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + at, i.TEXTURE_2D, null, 0);
        e.bindFramebuffer(i.READ_FRAMEBUFFER, gt.__webglMultisampledFramebuffer), e.bindFramebuffer(i.DRAW_FRAMEBUFFER, gt.__webglFramebuffer);
        for (let at = 0; at < x.length; at++) {
          if (T.resolveDepthBuffer && (T.depthBuffer && (Q |= i.DEPTH_BUFFER_BIT), T.stencilBuffer && T.resolveStencilBuffer && (Q |= i.STENCIL_BUFFER_BIT)), ot) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, gt.__webglColorRenderbuffer[at]);
            const Lt = n.get(x[at]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, Lt, 0);
          }
          i.blitFramebuffer(0, 0, X, K, 0, 0, X, K, Q, i.NEAREST), l === !0 && (yt.length = 0, ht.length = 0, yt.push(i.COLOR_ATTACHMENT0 + at), T.depthBuffer && T.resolveDepthBuffer === !1 && (yt.push(tt), ht.push(tt), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, ht)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, yt));
        }
        if (e.bindFramebuffer(i.READ_FRAMEBUFFER, null), e.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), ot)
          for (let at = 0; at < x.length; at++) {
            e.bindFramebuffer(i.FRAMEBUFFER, gt.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + at, i.RENDERBUFFER, gt.__webglColorRenderbuffer[at]);
            const Lt = n.get(x[at]).__webglTexture;
            e.bindFramebuffer(i.FRAMEBUFFER, gt.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + at, i.TEXTURE_2D, Lt, 0);
          }
        e.bindFramebuffer(i.DRAW_FRAMEBUFFER, gt.__webglMultisampledFramebuffer);
      } else if (T.depthBuffer && T.resolveDepthBuffer === !1 && l) {
        const x = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [x]);
      }
    }
  }
  function St(T) {
    return Math.min(r.maxSamples, T.samples);
  }
  function Ot(T) {
    const x = n.get(T);
    return T.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && x.__useRenderToTexture !== !1;
  }
  function It(T) {
    const x = a.render.frame;
    u.get(T) !== x && (u.set(T, x), T.update());
  }
  function Bt(T, x) {
    const X = T.colorSpace, K = T.format, Q = T.type;
    return T.isCompressedTexture === !0 || T.isVideoTexture === !0 || X !== dn && X !== on && (Xt.getTransfer(X) === $t ? (K !== ze || Q !== hn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", X)), x;
  }
  function Kt(T) {
    return typeof HTMLImageElement < "u" && T instanceof HTMLImageElement ? (c.width = T.naturalWidth || T.width, c.height = T.naturalHeight || T.height) : typeof VideoFrame < "u" && T instanceof VideoFrame ? (c.width = T.displayWidth, c.height = T.displayHeight) : (c.width = T.width, c.height = T.height), c;
  }
  this.allocateTextureUnit = L, this.resetTextureUnits = _, this.setTexture2D = y, this.setTexture2DArray = P, this.setTexture3D = U, this.setTextureCube = O, this.rebindTextures = vt, this.setupRenderTarget = bt, this.updateRenderTargetMipmap = F, this.updateMultisampleRenderTarget = Wt, this.setupDepthRenderbuffer = et, this.setupFrameBufferTexture = W, this.useMultisampledRTT = Ot;
}
function mp(i, t) {
  function e(n, r = on) {
    let s;
    const a = Xt.getTransfer(r);
    if (n === hn)
      return i.UNSIGNED_BYTE;
    if (n === vo)
      return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === xo)
      return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === Zl)
      return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === jl)
      return i.BYTE;
    if (n === Kl)
      return i.SHORT;
    if (n === go)
      return i.UNSIGNED_SHORT;
    if (n === _o)
      return i.INT;
    if (n === ni)
      return i.UNSIGNED_INT;
    if (n === je)
      return i.FLOAT;
    if (n === _r)
      return i.HALF_FLOAT;
    if (n === Jl)
      return i.ALPHA;
    if (n === Ql)
      return i.RGB;
    if (n === ze)
      return i.RGBA;
    if (n === tc)
      return i.LUMINANCE;
    if (n === ec)
      return i.LUMINANCE_ALPHA;
    if (n === Zn)
      return i.DEPTH_COMPONENT;
    if (n === Ti)
      return i.DEPTH_STENCIL;
    if (n === Mo)
      return i.RED;
    if (n === So)
      return i.RED_INTEGER;
    if (n === nc)
      return i.RG;
    if (n === Eo)
      return i.RG_INTEGER;
    if (n === yo)
      return i.RGBA_INTEGER;
    if (n === Ar || n === br || n === wr || n === Rr)
      if (a === $t)
        if (s = t.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
          if (n === Ar)
            return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === br)
            return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === wr)
            return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === Rr)
            return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (s = t.get("WEBGL_compressed_texture_s3tc"), s !== null) {
        if (n === Ar)
          return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === br)
          return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === wr)
          return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === Rr)
          return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === Ns || n === Fs || n === Os || n === Bs)
      if (s = t.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
        if (n === Ns)
          return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === Fs)
          return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === Os)
          return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === Bs)
          return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === zs || n === Hs || n === Vs)
      if (s = t.get("WEBGL_compressed_texture_etc"), s !== null) {
        if (n === zs || n === Hs)
          return a === $t ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n === Vs)
          return a === $t ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (n === Gs || n === ks || n === Ws || n === Xs || n === qs || n === Ys || n === $s || n === js || n === Ks || n === Zs || n === Js || n === Qs || n === ta || n === ea)
      if (s = t.get("WEBGL_compressed_texture_astc"), s !== null) {
        if (n === Gs)
          return a === $t ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === ks)
          return a === $t ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === Ws)
          return a === $t ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === Xs)
          return a === $t ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === qs)
          return a === $t ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === Ys)
          return a === $t ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === $s)
          return a === $t ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === js)
          return a === $t ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === Ks)
          return a === $t ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === Zs)
          return a === $t ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === Js)
          return a === $t ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === Qs)
          return a === $t ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === ta)
          return a === $t ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === ea)
          return a === $t ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === Cr || n === na || n === ia)
      if (s = t.get("EXT_texture_compression_bptc"), s !== null) {
        if (n === Cr)
          return a === $t ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === na)
          return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === ia)
          return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === ic || n === ra || n === sa || n === aa)
      if (s = t.get("EXT_texture_compression_rgtc"), s !== null) {
        if (n === Cr)
          return s.COMPRESSED_RED_RGTC1_EXT;
        if (n === ra)
          return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === sa)
          return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === aa)
          return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === Ai ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: e };
}
class gp extends Te {
  constructor(t = []) {
    super(), this.isArrayCamera = !0, this.cameras = t;
  }
}
class jn extends ae {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const _p = { type: "move" };
class es {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new jn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new jn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new B(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new B()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new jn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new B(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new B()), this._grip;
  }
  dispatchEvent(t) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(t), this._grip !== null && this._grip.dispatchEvent(t), this._hand !== null && this._hand.dispatchEvent(t), this;
  }
  connect(t) {
    if (t && t.hand) {
      const e = this._hand;
      if (e)
        for (const n of t.hand.values())
          this._getHandJoint(e, n);
    }
    return this.dispatchEvent({ type: "connected", data: t }), this;
  }
  disconnect(t) {
    return this.dispatchEvent({ type: "disconnected", data: t }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(t, e, n) {
    let r = null, s = null, a = null;
    const o = this._targetRay, l = this._grip, c = this._hand;
    if (t && e.session.visibilityState !== "visible-blurred") {
      if (c && t.hand) {
        a = !0;
        for (const v of t.hand.values()) {
          const d = e.getJointPose(v, n), h = this._getHandJoint(c, v);
          d !== null && (h.matrix.fromArray(d.transform.matrix), h.matrix.decompose(h.position, h.rotation, h.scale), h.matrixWorldNeedsUpdate = !0, h.jointRadius = d.radius), h.visible = d !== null;
        }
        const u = c.joints["index-finger-tip"], p = c.joints["thumb-tip"], f = u.position.distanceTo(p.position), m = 0.02, g = 5e-3;
        c.inputState.pinching && f > m + g ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: t.handedness,
          target: this
        })) : !c.inputState.pinching && f <= m - g && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: t.handedness,
          target: this
        }));
      } else
        l !== null && t.gripSpace && (s = e.getPose(t.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1));
      o !== null && (r = e.getPose(t.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(_p)));
    }
    return o !== null && (o.visible = r !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = a !== null), this;
  }
  // private method
  _getHandJoint(t, e) {
    if (t.joints[e.jointName] === void 0) {
      const n = new jn();
      n.matrixAutoUpdate = !1, n.visible = !1, t.joints[e.jointName] = n, t.add(n);
    }
    return t.joints[e.jointName];
  }
}
const vp = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, xp = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class Mp {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(t, e, n) {
    if (this.texture === null) {
      const r = new _e(), s = t.properties.get(r);
      s.__webglTexture = e.texture, (e.depthNear != n.depthNear || e.depthFar != n.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = r;
    }
  }
  render(t, e) {
    if (this.texture !== null) {
      if (this.mesh === null) {
        const n = e.cameras[0].viewport, r = new Je({
          vertexShader: vp,
          fragmentShader: xp,
          uniforms: {
            depthColor: { value: this.texture },
            depthWidth: { value: n.z },
            depthHeight: { value: n.w }
          }
        });
        this.mesh = new Ae(new xr(20, 20), r);
      }
      t.render(this.mesh, e);
    }
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
}
class Sp extends ri {
  constructor(t, e) {
    super();
    const n = this;
    let r = null, s = 1, a = null, o = "local-floor", l = 1, c = null, u = null, p = null, f = null, m = null, g = null;
    const v = new Mp(), d = e.getContextAttributes();
    let h = null, A = null;
    const E = [], b = [], V = new zt();
    let w = null;
    const C = new Te();
    C.layers.enable(1), C.viewport = new se();
    const k = new Te();
    k.layers.enable(2), k.viewport = new se();
    const S = [C, k], _ = new gp();
    _.layers.enable(1), _.layers.enable(2);
    let L = null, R = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(W) {
      let q = E[W];
      return q === void 0 && (q = new es(), E[W] = q), q.getTargetRaySpace();
    }, this.getControllerGrip = function(W) {
      let q = E[W];
      return q === void 0 && (q = new es(), E[W] = q), q.getGripSpace();
    }, this.getHand = function(W) {
      let q = E[W];
      return q === void 0 && (q = new es(), E[W] = q), q.getHandSpace();
    };
    function y(W) {
      const q = b.indexOf(W.inputSource);
      if (q === -1)
        return;
      const ct = E[q];
      ct !== void 0 && (ct.update(W.inputSource, W.frame, c || a), ct.dispatchEvent({ type: W.type, data: W.inputSource }));
    }
    function P() {
      r.removeEventListener("select", y), r.removeEventListener("selectstart", y), r.removeEventListener("selectend", y), r.removeEventListener("squeeze", y), r.removeEventListener("squeezestart", y), r.removeEventListener("squeezeend", y), r.removeEventListener("end", P), r.removeEventListener("inputsourceschange", U);
      for (let W = 0; W < E.length; W++) {
        const q = b[W];
        q !== null && (b[W] = null, E[W].disconnect(q));
      }
      L = null, R = null, v.reset(), t.setRenderTarget(h), m = null, f = null, p = null, r = null, A = null, Et.stop(), n.isPresenting = !1, t.setPixelRatio(w), t.setSize(V.width, V.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(W) {
      s = W, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(W) {
      o = W, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || a;
    }, this.setReferenceSpace = function(W) {
      c = W;
    }, this.getBaseLayer = function() {
      return f !== null ? f : m;
    }, this.getBinding = function() {
      return p;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(W) {
      if (r = W, r !== null) {
        if (h = t.getRenderTarget(), r.addEventListener("select", y), r.addEventListener("selectstart", y), r.addEventListener("selectend", y), r.addEventListener("squeeze", y), r.addEventListener("squeezestart", y), r.addEventListener("squeezeend", y), r.addEventListener("end", P), r.addEventListener("inputsourceschange", U), d.xrCompatible !== !0 && await e.makeXRCompatible(), w = t.getPixelRatio(), t.getSize(V), r.renderState.layers === void 0) {
          const q = {
            antialias: d.antialias,
            alpha: !0,
            depth: d.depth,
            stencil: d.stencil,
            framebufferScaleFactor: s
          };
          m = new XRWebGLLayer(r, e, q), r.updateRenderState({ baseLayer: m }), t.setPixelRatio(1), t.setSize(m.framebufferWidth, m.framebufferHeight, !1), A = new bn(
            m.framebufferWidth,
            m.framebufferHeight,
            {
              format: ze,
              type: hn,
              colorSpace: t.outputColorSpace,
              stencilBuffer: d.stencil
            }
          );
        } else {
          let q = null, ct = null, et = null;
          d.depth && (et = d.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, q = d.stencil ? Ti : Zn, ct = d.stencil ? Ai : ni);
          const vt = {
            colorFormat: e.RGBA8,
            depthFormat: et,
            scaleFactor: s
          };
          p = new XRWebGLBinding(r, e), f = p.createProjectionLayer(vt), r.updateRenderState({ layers: [f] }), t.setPixelRatio(1), t.setSize(f.textureWidth, f.textureHeight, !1), A = new bn(
            f.textureWidth,
            f.textureHeight,
            {
              format: ze,
              type: hn,
              depthTexture: new Fo(f.textureWidth, f.textureHeight, ct, void 0, void 0, void 0, void 0, void 0, void 0, q),
              stencilBuffer: d.stencil,
              colorSpace: t.outputColorSpace,
              samples: d.antialias ? 4 : 0,
              resolveDepthBuffer: f.ignoreDepthValues === !1
            }
          );
        }
        A.isXRRenderTarget = !0, this.setFoveation(l), c = null, a = await r.requestReferenceSpace(o), Et.setContext(r), Et.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null)
        return r.environmentBlendMode;
    };
    function U(W) {
      for (let q = 0; q < W.removed.length; q++) {
        const ct = W.removed[q], et = b.indexOf(ct);
        et >= 0 && (b[et] = null, E[et].disconnect(ct));
      }
      for (let q = 0; q < W.added.length; q++) {
        const ct = W.added[q];
        let et = b.indexOf(ct);
        if (et === -1) {
          for (let bt = 0; bt < E.length; bt++)
            if (bt >= b.length) {
              b.push(ct), et = bt;
              break;
            } else if (b[bt] === null) {
              b[bt] = ct, et = bt;
              break;
            }
          if (et === -1)
            break;
        }
        const vt = E[et];
        vt && vt.connect(ct);
      }
    }
    const O = new B(), $ = new B();
    function N(W, q, ct) {
      O.setFromMatrixPosition(q.matrixWorld), $.setFromMatrixPosition(ct.matrixWorld);
      const et = O.distanceTo($), vt = q.projectionMatrix.elements, bt = ct.projectionMatrix.elements, F = vt[14] / (vt[10] - 1), yt = vt[14] / (vt[10] + 1), ht = (vt[9] + 1) / vt[5], Wt = (vt[9] - 1) / vt[5], St = (vt[8] - 1) / vt[0], Ot = (bt[8] + 1) / bt[0], It = F * St, Bt = F * Ot, Kt = et / (-St + Ot), T = Kt * -St;
      q.matrixWorld.decompose(W.position, W.quaternion, W.scale), W.translateX(T), W.translateZ(Kt), W.matrixWorld.compose(W.position, W.quaternion, W.scale), W.matrixWorldInverse.copy(W.matrixWorld).invert();
      const x = F + Kt, X = yt + Kt, K = It - T, Q = Bt + (et - T), tt = ht * yt / X * x, gt = Wt * yt / X * x;
      W.projectionMatrix.makePerspective(K, Q, tt, gt, x, X), W.projectionMatrixInverse.copy(W.projectionMatrix).invert();
    }
    function j(W, q) {
      q === null ? W.matrixWorld.copy(W.matrix) : W.matrixWorld.multiplyMatrices(q.matrixWorld, W.matrix), W.matrixWorldInverse.copy(W.matrixWorld).invert();
    }
    this.updateCamera = function(W) {
      if (r === null)
        return;
      v.texture !== null && (W.near = v.depthNear, W.far = v.depthFar), _.near = k.near = C.near = W.near, _.far = k.far = C.far = W.far, (L !== _.near || R !== _.far) && (r.updateRenderState({
        depthNear: _.near,
        depthFar: _.far
      }), L = _.near, R = _.far, C.near = L, C.far = R, k.near = L, k.far = R, C.updateProjectionMatrix(), k.updateProjectionMatrix(), W.updateProjectionMatrix());
      const q = W.parent, ct = _.cameras;
      j(_, q);
      for (let et = 0; et < ct.length; et++)
        j(ct[et], q);
      ct.length === 2 ? N(_, C, k) : _.projectionMatrix.copy(C.projectionMatrix), J(W, _, q);
    };
    function J(W, q, ct) {
      ct === null ? W.matrix.copy(q.matrixWorld) : (W.matrix.copy(ct.matrixWorld), W.matrix.invert(), W.matrix.multiply(q.matrixWorld)), W.matrix.decompose(W.position, W.quaternion, W.scale), W.updateMatrixWorld(!0), W.projectionMatrix.copy(q.projectionMatrix), W.projectionMatrixInverse.copy(q.projectionMatrixInverse), W.isPerspectiveCamera && (W.fov = us * 2 * Math.atan(1 / W.projectionMatrix.elements[5]), W.zoom = 1);
    }
    this.getCamera = function() {
      return _;
    }, this.getFoveation = function() {
      if (!(f === null && m === null))
        return l;
    }, this.setFoveation = function(W) {
      l = W, f !== null && (f.fixedFoveation = W), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = W);
    }, this.hasDepthSensing = function() {
      return v.texture !== null;
    };
    let lt = null;
    function _t(W, q) {
      if (u = q.getViewerPose(c || a), g = q, u !== null) {
        const ct = u.views;
        m !== null && (t.setRenderTargetFramebuffer(A, m.framebuffer), t.setRenderTarget(A));
        let et = !1;
        ct.length !== _.cameras.length && (_.cameras.length = 0, et = !0);
        for (let bt = 0; bt < ct.length; bt++) {
          const F = ct[bt];
          let yt = null;
          if (m !== null)
            yt = m.getViewport(F);
          else {
            const Wt = p.getViewSubImage(f, F);
            yt = Wt.viewport, bt === 0 && (t.setRenderTargetTextures(
              A,
              Wt.colorTexture,
              f.ignoreDepthValues ? void 0 : Wt.depthStencilTexture
            ), t.setRenderTarget(A));
          }
          let ht = S[bt];
          ht === void 0 && (ht = new Te(), ht.layers.enable(bt), ht.viewport = new se(), S[bt] = ht), ht.matrix.fromArray(F.transform.matrix), ht.matrix.decompose(ht.position, ht.quaternion, ht.scale), ht.projectionMatrix.fromArray(F.projectionMatrix), ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(), ht.viewport.set(yt.x, yt.y, yt.width, yt.height), bt === 0 && (_.matrix.copy(ht.matrix), _.matrix.decompose(_.position, _.quaternion, _.scale)), et === !0 && _.cameras.push(ht);
        }
        const vt = r.enabledFeatures;
        if (vt && vt.includes("depth-sensing")) {
          const bt = p.getDepthInformation(ct[0]);
          bt && bt.isValid && bt.texture && v.init(t, bt, r.renderState);
        }
      }
      for (let ct = 0; ct < E.length; ct++) {
        const et = b[ct], vt = E[ct];
        et !== null && vt !== void 0 && vt.update(et, q, c || a);
      }
      v.render(t, _), lt && lt(W, q), q.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: q }), g = null;
    }
    const Et = new Io();
    Et.setAnimationLoop(_t), this.setAnimationLoop = function(W) {
      lt = W;
    }, this.dispose = function() {
    };
  }
}
const xn = /* @__PURE__ */ new Ze(), Ep = /* @__PURE__ */ new qt();
function yp(i, t) {
  function e(d, h) {
    d.matrixAutoUpdate === !0 && d.updateMatrix(), h.value.copy(d.matrix);
  }
  function n(d, h) {
    h.color.getRGB(d.fogColor.value, Lo(i)), h.isFog ? (d.fogNear.value = h.near, d.fogFar.value = h.far) : h.isFogExp2 && (d.fogDensity.value = h.density);
  }
  function r(d, h, A, E, b) {
    h.isMeshBasicMaterial || h.isMeshLambertMaterial ? s(d, h) : h.isMeshToonMaterial ? (s(d, h), p(d, h)) : h.isMeshPhongMaterial ? (s(d, h), u(d, h)) : h.isMeshStandardMaterial ? (s(d, h), f(d, h), h.isMeshPhysicalMaterial && m(d, h, b)) : h.isMeshMatcapMaterial ? (s(d, h), g(d, h)) : h.isMeshDepthMaterial ? s(d, h) : h.isMeshDistanceMaterial ? (s(d, h), v(d, h)) : h.isMeshNormalMaterial ? s(d, h) : h.isLineBasicMaterial ? (a(d, h), h.isLineDashedMaterial && o(d, h)) : h.isPointsMaterial ? l(d, h, A, E) : h.isSpriteMaterial ? c(d, h) : h.isShadowMaterial ? (d.color.value.copy(h.color), d.opacity.value = h.opacity) : h.isShaderMaterial && (h.uniformsNeedUpdate = !1);
  }
  function s(d, h) {
    d.opacity.value = h.opacity, h.color && d.diffuse.value.copy(h.color), h.emissive && d.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity), h.map && (d.map.value = h.map, e(h.map, d.mapTransform)), h.alphaMap && (d.alphaMap.value = h.alphaMap, e(h.alphaMap, d.alphaMapTransform)), h.bumpMap && (d.bumpMap.value = h.bumpMap, e(h.bumpMap, d.bumpMapTransform), d.bumpScale.value = h.bumpScale, h.side === Me && (d.bumpScale.value *= -1)), h.normalMap && (d.normalMap.value = h.normalMap, e(h.normalMap, d.normalMapTransform), d.normalScale.value.copy(h.normalScale), h.side === Me && d.normalScale.value.negate()), h.displacementMap && (d.displacementMap.value = h.displacementMap, e(h.displacementMap, d.displacementMapTransform), d.displacementScale.value = h.displacementScale, d.displacementBias.value = h.displacementBias), h.emissiveMap && (d.emissiveMap.value = h.emissiveMap, e(h.emissiveMap, d.emissiveMapTransform)), h.specularMap && (d.specularMap.value = h.specularMap, e(h.specularMap, d.specularMapTransform)), h.alphaTest > 0 && (d.alphaTest.value = h.alphaTest);
    const A = t.get(h), E = A.envMap, b = A.envMapRotation;
    if (E && (d.envMap.value = E, xn.copy(b), xn.x *= -1, xn.y *= -1, xn.z *= -1, E.isCubeTexture && E.isRenderTargetTexture === !1 && (xn.y *= -1, xn.z *= -1), d.envMapRotation.value.setFromMatrix4(Ep.makeRotationFromEuler(xn)), d.flipEnvMap.value = E.isCubeTexture && E.isRenderTargetTexture === !1 ? -1 : 1, d.reflectivity.value = h.reflectivity, d.ior.value = h.ior, d.refractionRatio.value = h.refractionRatio), h.lightMap) {
      d.lightMap.value = h.lightMap;
      const V = i._useLegacyLights === !0 ? Math.PI : 1;
      d.lightMapIntensity.value = h.lightMapIntensity * V, e(h.lightMap, d.lightMapTransform);
    }
    h.aoMap && (d.aoMap.value = h.aoMap, d.aoMapIntensity.value = h.aoMapIntensity, e(h.aoMap, d.aoMapTransform));
  }
  function a(d, h) {
    d.diffuse.value.copy(h.color), d.opacity.value = h.opacity, h.map && (d.map.value = h.map, e(h.map, d.mapTransform));
  }
  function o(d, h) {
    d.dashSize.value = h.dashSize, d.totalSize.value = h.dashSize + h.gapSize, d.scale.value = h.scale;
  }
  function l(d, h, A, E) {
    d.diffuse.value.copy(h.color), d.opacity.value = h.opacity, d.size.value = h.size * A, d.scale.value = E * 0.5, h.map && (d.map.value = h.map, e(h.map, d.uvTransform)), h.alphaMap && (d.alphaMap.value = h.alphaMap, e(h.alphaMap, d.alphaMapTransform)), h.alphaTest > 0 && (d.alphaTest.value = h.alphaTest);
  }
  function c(d, h) {
    d.diffuse.value.copy(h.color), d.opacity.value = h.opacity, d.rotation.value = h.rotation, h.map && (d.map.value = h.map, e(h.map, d.mapTransform)), h.alphaMap && (d.alphaMap.value = h.alphaMap, e(h.alphaMap, d.alphaMapTransform)), h.alphaTest > 0 && (d.alphaTest.value = h.alphaTest);
  }
  function u(d, h) {
    d.specular.value.copy(h.specular), d.shininess.value = Math.max(h.shininess, 1e-4);
  }
  function p(d, h) {
    h.gradientMap && (d.gradientMap.value = h.gradientMap);
  }
  function f(d, h) {
    d.metalness.value = h.metalness, h.metalnessMap && (d.metalnessMap.value = h.metalnessMap, e(h.metalnessMap, d.metalnessMapTransform)), d.roughness.value = h.roughness, h.roughnessMap && (d.roughnessMap.value = h.roughnessMap, e(h.roughnessMap, d.roughnessMapTransform)), h.envMap && (d.envMapIntensity.value = h.envMapIntensity);
  }
  function m(d, h, A) {
    d.ior.value = h.ior, h.sheen > 0 && (d.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen), d.sheenRoughness.value = h.sheenRoughness, h.sheenColorMap && (d.sheenColorMap.value = h.sheenColorMap, e(h.sheenColorMap, d.sheenColorMapTransform)), h.sheenRoughnessMap && (d.sheenRoughnessMap.value = h.sheenRoughnessMap, e(h.sheenRoughnessMap, d.sheenRoughnessMapTransform))), h.clearcoat > 0 && (d.clearcoat.value = h.clearcoat, d.clearcoatRoughness.value = h.clearcoatRoughness, h.clearcoatMap && (d.clearcoatMap.value = h.clearcoatMap, e(h.clearcoatMap, d.clearcoatMapTransform)), h.clearcoatRoughnessMap && (d.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap, e(h.clearcoatRoughnessMap, d.clearcoatRoughnessMapTransform)), h.clearcoatNormalMap && (d.clearcoatNormalMap.value = h.clearcoatNormalMap, e(h.clearcoatNormalMap, d.clearcoatNormalMapTransform), d.clearcoatNormalScale.value.copy(h.clearcoatNormalScale), h.side === Me && d.clearcoatNormalScale.value.negate())), h.dispersion > 0 && (d.dispersion.value = h.dispersion), h.iridescence > 0 && (d.iridescence.value = h.iridescence, d.iridescenceIOR.value = h.iridescenceIOR, d.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0], d.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1], h.iridescenceMap && (d.iridescenceMap.value = h.iridescenceMap, e(h.iridescenceMap, d.iridescenceMapTransform)), h.iridescenceThicknessMap && (d.iridescenceThicknessMap.value = h.iridescenceThicknessMap, e(h.iridescenceThicknessMap, d.iridescenceThicknessMapTransform))), h.transmission > 0 && (d.transmission.value = h.transmission, d.transmissionSamplerMap.value = A.texture, d.transmissionSamplerSize.value.set(A.width, A.height), h.transmissionMap && (d.transmissionMap.value = h.transmissionMap, e(h.transmissionMap, d.transmissionMapTransform)), d.thickness.value = h.thickness, h.thicknessMap && (d.thicknessMap.value = h.thicknessMap, e(h.thicknessMap, d.thicknessMapTransform)), d.attenuationDistance.value = h.attenuationDistance, d.attenuationColor.value.copy(h.attenuationColor)), h.anisotropy > 0 && (d.anisotropyVector.value.set(h.anisotropy * Math.cos(h.anisotropyRotation), h.anisotropy * Math.sin(h.anisotropyRotation)), h.anisotropyMap && (d.anisotropyMap.value = h.anisotropyMap, e(h.anisotropyMap, d.anisotropyMapTransform))), d.specularIntensity.value = h.specularIntensity, d.specularColor.value.copy(h.specularColor), h.specularColorMap && (d.specularColorMap.value = h.specularColorMap, e(h.specularColorMap, d.specularColorMapTransform)), h.specularIntensityMap && (d.specularIntensityMap.value = h.specularIntensityMap, e(h.specularIntensityMap, d.specularIntensityMapTransform));
  }
  function g(d, h) {
    h.matcap && (d.matcap.value = h.matcap);
  }
  function v(d, h) {
    const A = t.get(h).light;
    d.referencePosition.value.setFromMatrixPosition(A.matrixWorld), d.nearDistance.value = A.shadow.camera.near, d.farDistance.value = A.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: r
  };
}
function Tp(i, t, e, n) {
  let r = {}, s = {}, a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(A, E) {
    const b = E.program;
    n.uniformBlockBinding(A, b);
  }
  function c(A, E) {
    let b = r[A.id];
    b === void 0 && (g(A), b = u(A), r[A.id] = b, A.addEventListener("dispose", d));
    const V = E.program;
    n.updateUBOMapping(A, V);
    const w = t.render.frame;
    s[A.id] !== w && (f(A), s[A.id] = w);
  }
  function u(A) {
    const E = p();
    A.__bindingPointIndex = E;
    const b = i.createBuffer(), V = A.__size, w = A.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, b), i.bufferData(i.UNIFORM_BUFFER, V, w), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, E, b), b;
  }
  function p() {
    for (let A = 0; A < o; A++)
      if (a.indexOf(A) === -1)
        return a.push(A), A;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(A) {
    const E = r[A.id], b = A.uniforms, V = A.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, E);
    for (let w = 0, C = b.length; w < C; w++) {
      const k = Array.isArray(b[w]) ? b[w] : [b[w]];
      for (let S = 0, _ = k.length; S < _; S++) {
        const L = k[S];
        if (m(L, w, S, V) === !0) {
          const R = L.__offset, y = Array.isArray(L.value) ? L.value : [L.value];
          let P = 0;
          for (let U = 0; U < y.length; U++) {
            const O = y[U], $ = v(O);
            typeof O == "number" || typeof O == "boolean" ? (L.__data[0] = O, i.bufferSubData(i.UNIFORM_BUFFER, R + P, L.__data)) : O.isMatrix3 ? (L.__data[0] = O.elements[0], L.__data[1] = O.elements[1], L.__data[2] = O.elements[2], L.__data[3] = 0, L.__data[4] = O.elements[3], L.__data[5] = O.elements[4], L.__data[6] = O.elements[5], L.__data[7] = 0, L.__data[8] = O.elements[6], L.__data[9] = O.elements[7], L.__data[10] = O.elements[8], L.__data[11] = 0) : (O.toArray(L.__data, P), P += $.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, R, L.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function m(A, E, b, V) {
    const w = A.value, C = E + "_" + b;
    if (V[C] === void 0)
      return typeof w == "number" || typeof w == "boolean" ? V[C] = w : V[C] = w.clone(), !0;
    {
      const k = V[C];
      if (typeof w == "number" || typeof w == "boolean") {
        if (k !== w)
          return V[C] = w, !0;
      } else if (k.equals(w) === !1)
        return k.copy(w), !0;
    }
    return !1;
  }
  function g(A) {
    const E = A.uniforms;
    let b = 0;
    const V = 16;
    for (let C = 0, k = E.length; C < k; C++) {
      const S = Array.isArray(E[C]) ? E[C] : [E[C]];
      for (let _ = 0, L = S.length; _ < L; _++) {
        const R = S[_], y = Array.isArray(R.value) ? R.value : [R.value];
        for (let P = 0, U = y.length; P < U; P++) {
          const O = y[P], $ = v(O), N = b % V;
          N !== 0 && V - N < $.boundary && (b += V - N), R.__data = new Float32Array($.storage / Float32Array.BYTES_PER_ELEMENT), R.__offset = b, b += $.storage;
        }
      }
    }
    const w = b % V;
    return w > 0 && (b += V - w), A.__size = b, A.__cache = {}, this;
  }
  function v(A) {
    const E = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof A == "number" || typeof A == "boolean" ? (E.boundary = 4, E.storage = 4) : A.isVector2 ? (E.boundary = 8, E.storage = 8) : A.isVector3 || A.isColor ? (E.boundary = 16, E.storage = 12) : A.isVector4 ? (E.boundary = 16, E.storage = 16) : A.isMatrix3 ? (E.boundary = 48, E.storage = 48) : A.isMatrix4 ? (E.boundary = 64, E.storage = 64) : A.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", A), E;
  }
  function d(A) {
    const E = A.target;
    E.removeEventListener("dispose", d);
    const b = a.indexOf(E.__bindingPointIndex);
    a.splice(b, 1), i.deleteBuffer(r[E.id]), delete r[E.id], delete s[E.id];
  }
  function h() {
    for (const A in r)
      i.deleteBuffer(r[A]);
    a = [], r = {}, s = {};
  }
  return {
    bind: l,
    update: c,
    dispose: h
  };
}
class Go {
  constructor(t = {}) {
    const {
      canvas: e = gc(),
      context: n = null,
      depth: r = !0,
      stencil: s = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: p = !1
    } = t;
    this.isWebGLRenderer = !0;
    let f;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      f = n.getContextAttributes().alpha;
    } else
      f = a;
    const m = new Uint32Array(4), g = new Int32Array(4);
    let v = null, d = null;
    const h = [], A = [];
    this.domElement = e, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = Ne, this._useLegacyLights = !1, this.toneMapping = cn, this.toneMappingExposure = 1;
    const E = this;
    let b = !1, V = 0, w = 0, C = null, k = -1, S = null;
    const _ = new se(), L = new se();
    let R = null;
    const y = new Pt(0);
    let P = 0, U = e.width, O = e.height, $ = 1, N = null, j = null;
    const J = new se(0, 0, U, O), lt = new se(0, 0, U, O);
    let _t = !1;
    const Et = new Ms();
    let W = !1, q = !1;
    const ct = new qt(), et = new B(), vt = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    function bt() {
      return C === null ? $ : 1;
    }
    let F = n;
    function yt(M, I) {
      return e.getContext(M, I);
    }
    try {
      const M = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: o,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: u,
        failIfMajorPerformanceCaveat: p
      };
      if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${ms}`), e.addEventListener("webglcontextlost", D, !1), e.addEventListener("webglcontextrestored", Z, !1), e.addEventListener("webglcontextcreationerror", Y, !1), F === null) {
        const I = "webgl2";
        if (F = yt(I, M), F === null)
          throw yt(I) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (M) {
      throw console.error("THREE.WebGLRenderer: " + M.message), M;
    }
    let ht, Wt, St, Ot, It, Bt, Kt, T, x, X, K, Q, tt, gt, ot, at, Lt, nt, mt, Ht, xt, dt, Dt, Ft;
    function Qt() {
      ht = new Dd(F), ht.init(), dt = new mp(F, ht), Wt = new bd(F, ht, t, dt), St = new fp(F), Ot = new Nd(F), It = new Qf(), Bt = new pp(F, ht, St, It, Wt, dt, Ot), Kt = new Rd(E), T = new Ld(E), x = new Gc(F), Dt = new Td(F, x), X = new Ud(F, x, Ot, Dt), K = new Od(F, X, x, Ot), mt = new Fd(F, Wt, Bt), at = new wd(It), Q = new Jf(E, Kt, T, ht, Wt, Dt, at), tt = new yp(E, It), gt = new ep(), ot = new op(ht), nt = new yd(E, Kt, T, St, K, f, l), Lt = new dp(E, K, Wt), Ft = new Tp(F, Ot, Wt, St), Ht = new Ad(F, ht, Ot), xt = new Id(F, ht, Ot), Ot.programs = Q.programs, E.capabilities = Wt, E.extensions = ht, E.properties = It, E.renderLists = gt, E.shadowMap = Lt, E.state = St, E.info = Ot;
    }
    Qt();
    const Ut = new Sp(E, F);
    this.xr = Ut, this.getContext = function() {
      return F;
    }, this.getContextAttributes = function() {
      return F.getContextAttributes();
    }, this.forceContextLoss = function() {
      const M = ht.get("WEBGL_lose_context");
      M && M.loseContext();
    }, this.forceContextRestore = function() {
      const M = ht.get("WEBGL_lose_context");
      M && M.restoreContext();
    }, this.getPixelRatio = function() {
      return $;
    }, this.setPixelRatio = function(M) {
      M !== void 0 && ($ = M, this.setSize(U, O, !1));
    }, this.getSize = function(M) {
      return M.set(U, O);
    }, this.setSize = function(M, I, G = !0) {
      if (Ut.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      U = M, O = I, e.width = Math.floor(M * $), e.height = Math.floor(I * $), G === !0 && (e.style.width = M + "px", e.style.height = I + "px"), this.setViewport(0, 0, M, I);
    }, this.getDrawingBufferSize = function(M) {
      return M.set(U * $, O * $).floor();
    }, this.setDrawingBufferSize = function(M, I, G) {
      U = M, O = I, $ = G, e.width = Math.floor(M * G), e.height = Math.floor(I * G), this.setViewport(0, 0, M, I);
    }, this.getCurrentViewport = function(M) {
      return M.copy(_);
    }, this.getViewport = function(M) {
      return M.copy(J);
    }, this.setViewport = function(M, I, G, z) {
      M.isVector4 ? J.set(M.x, M.y, M.z, M.w) : J.set(M, I, G, z), St.viewport(_.copy(J).multiplyScalar($).round());
    }, this.getScissor = function(M) {
      return M.copy(lt);
    }, this.setScissor = function(M, I, G, z) {
      M.isVector4 ? lt.set(M.x, M.y, M.z, M.w) : lt.set(M, I, G, z), St.scissor(L.copy(lt).multiplyScalar($).round());
    }, this.getScissorTest = function() {
      return _t;
    }, this.setScissorTest = function(M) {
      St.setScissorTest(_t = M);
    }, this.setOpaqueSort = function(M) {
      N = M;
    }, this.setTransparentSort = function(M) {
      j = M;
    }, this.getClearColor = function(M) {
      return M.copy(nt.getClearColor());
    }, this.setClearColor = function() {
      nt.setClearColor.apply(nt, arguments);
    }, this.getClearAlpha = function() {
      return nt.getClearAlpha();
    }, this.setClearAlpha = function() {
      nt.setClearAlpha.apply(nt, arguments);
    }, this.clear = function(M = !0, I = !0, G = !0) {
      let z = 0;
      if (M) {
        let H = !1;
        if (C !== null) {
          const st = C.texture.format;
          H = st === yo || st === Eo || st === So;
        }
        if (H) {
          const st = C.texture.type, ft = st === hn || st === ni || st === go || st === Ai || st === vo || st === xo, pt = nt.getClearColor(), Mt = nt.getClearAlpha(), Tt = pt.r, wt = pt.g, Nt = pt.b;
          ft ? (m[0] = Tt, m[1] = wt, m[2] = Nt, m[3] = Mt, F.clearBufferuiv(F.COLOR, 0, m)) : (g[0] = Tt, g[1] = wt, g[2] = Nt, g[3] = Mt, F.clearBufferiv(F.COLOR, 0, g));
        } else
          z |= F.COLOR_BUFFER_BIT;
      }
      I && (z |= F.DEPTH_BUFFER_BIT), G && (z |= F.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), F.clear(z);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      e.removeEventListener("webglcontextlost", D, !1), e.removeEventListener("webglcontextrestored", Z, !1), e.removeEventListener("webglcontextcreationerror", Y, !1), gt.dispose(), ot.dispose(), It.dispose(), Kt.dispose(), T.dispose(), K.dispose(), Dt.dispose(), Ft.dispose(), Q.dispose(), Ut.dispose(), Ut.removeEventListener("sessionstart", kt), Ut.removeEventListener("sessionend", Ie), fe.stop();
    };
    function D(M) {
      M.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), b = !0;
    }
    function Z() {
      console.log("THREE.WebGLRenderer: Context Restored."), b = !1;
      const M = Ot.autoReset, I = Lt.enabled, G = Lt.autoUpdate, z = Lt.needsUpdate, H = Lt.type;
      Qt(), Ot.autoReset = M, Lt.enabled = I, Lt.autoUpdate = G, Lt.needsUpdate = z, Lt.type = H;
    }
    function Y(M) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", M.statusMessage);
    }
    function rt(M) {
      const I = M.target;
      I.removeEventListener("dispose", rt), ut(I);
    }
    function ut(M) {
      Vt(M), It.remove(M);
    }
    function Vt(M) {
      const I = It.get(M).programs;
      I !== void 0 && (I.forEach(function(G) {
        Q.releaseProgram(G);
      }), M.isShaderMaterial && Q.releaseShaderCache(M));
    }
    this.renderBufferDirect = function(M, I, G, z, H, st) {
      I === null && (I = vt);
      const ft = H.isMesh && H.matrixWorld.determinant() < 0, pt = Zo(M, I, G, z, H);
      St.setMaterial(z, ft);
      let Mt = G.index, Tt = 1;
      if (z.wireframe === !0) {
        if (Mt = X.getWireframeAttribute(G), Mt === void 0)
          return;
        Tt = 2;
      }
      const wt = G.drawRange, Nt = G.attributes.position;
      let te = wt.start * Tt, ce = (wt.start + wt.count) * Tt;
      st !== null && (te = Math.max(te, st.start * Tt), ce = Math.min(ce, (st.start + st.count) * Tt)), Mt !== null ? (te = Math.max(te, 0), ce = Math.min(ce, Mt.count)) : Nt != null && (te = Math.max(te, 0), ce = Math.min(ce, Nt.count));
      const Se = ce - te;
      if (Se < 0 || Se === 1 / 0)
        return;
      Dt.setup(H, z, pt, G, Mt);
      let Ve, Gt = Ht;
      if (Mt !== null && (Ve = x.get(Mt), Gt = xt, Gt.setIndex(Ve)), H.isMesh)
        z.wireframe === !0 ? (St.setLineWidth(z.wireframeLinewidth * bt()), Gt.setMode(F.LINES)) : Gt.setMode(F.TRIANGLES);
      else if (H.isLine) {
        let At = z.linewidth;
        At === void 0 && (At = 1), St.setLineWidth(At * bt()), H.isLineSegments ? Gt.setMode(F.LINES) : H.isLineLoop ? Gt.setMode(F.LINE_LOOP) : Gt.setMode(F.LINE_STRIP);
      } else
        H.isPoints ? Gt.setMode(F.POINTS) : H.isSprite && Gt.setMode(F.TRIANGLES);
      if (H.isBatchedMesh)
        H._multiDrawInstances !== null ? Gt.renderMultiDrawInstances(H._multiDrawStarts, H._multiDrawCounts, H._multiDrawCount, H._multiDrawInstances) : Gt.renderMultiDraw(H._multiDrawStarts, H._multiDrawCounts, H._multiDrawCount);
      else if (H.isInstancedMesh)
        Gt.renderInstances(te, Se, H.count);
      else if (G.isInstancedBufferGeometry) {
        const At = G._maxInstanceCount !== void 0 ? G._maxInstanceCount : 1 / 0, oi = Math.min(G.instanceCount, At);
        Gt.renderInstances(te, Se, oi);
      } else
        Gt.render(te, Se);
    };
    function Yt(M, I, G) {
      M.transparent === !0 && M.side === $e && M.forceSinglePass === !1 ? (M.side = Me, M.needsUpdate = !0, Pi(M, I, G), M.side = un, M.needsUpdate = !0, Pi(M, I, G), M.side = $e) : Pi(M, I, G);
    }
    this.compile = function(M, I, G = null) {
      G === null && (G = M), d = ot.get(G), d.init(I), A.push(d), G.traverseVisible(function(H) {
        H.isLight && H.layers.test(I.layers) && (d.pushLight(H), H.castShadow && d.pushShadow(H));
      }), M !== G && M.traverseVisible(function(H) {
        H.isLight && H.layers.test(I.layers) && (d.pushLight(H), H.castShadow && d.pushShadow(H));
      }), d.setupLights(E._useLegacyLights);
      const z = /* @__PURE__ */ new Set();
      return M.traverse(function(H) {
        const st = H.material;
        if (st)
          if (Array.isArray(st))
            for (let ft = 0; ft < st.length; ft++) {
              const pt = st[ft];
              Yt(pt, G, H), z.add(pt);
            }
          else
            Yt(st, G, H), z.add(st);
      }), A.pop(), d = null, z;
    }, this.compileAsync = function(M, I, G = null) {
      const z = this.compile(M, I, G);
      return new Promise((H) => {
        function st() {
          if (z.forEach(function(ft) {
            It.get(ft).currentProgram.isReady() && z.delete(ft);
          }), z.size === 0) {
            H(M);
            return;
          }
          setTimeout(st, 10);
        }
        ht.get("KHR_parallel_shader_compile") !== null ? st() : setTimeout(st, 10);
      });
    };
    let Zt = null;
    function le(M) {
      Zt && Zt(M);
    }
    function kt() {
      fe.stop();
    }
    function Ie() {
      fe.start();
    }
    const fe = new Io();
    fe.setAnimationLoop(le), typeof self < "u" && fe.setContext(self), this.setAnimationLoop = function(M) {
      Zt = M, Ut.setAnimationLoop(M), M === null ? fe.stop() : fe.start();
    }, Ut.addEventListener("sessionstart", kt), Ut.addEventListener("sessionend", Ie), this.render = function(M, I) {
      if (I !== void 0 && I.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (b === !0)
        return;
      M.matrixWorldAutoUpdate === !0 && M.updateMatrixWorld(), I.parent === null && I.matrixWorldAutoUpdate === !0 && I.updateMatrixWorld(), Ut.enabled === !0 && Ut.isPresenting === !0 && (Ut.cameraAutoUpdate === !0 && Ut.updateCamera(I), I = Ut.getCamera()), M.isScene === !0 && M.onBeforeRender(E, M, I, C), d = ot.get(M, A.length), d.init(I), A.push(d), ct.multiplyMatrices(I.projectionMatrix, I.matrixWorldInverse), Et.setFromProjectionMatrix(ct), q = this.localClippingEnabled, W = at.init(this.clippingPlanes, q), v = gt.get(M, h.length), v.init(), h.push(v), ys(M, I, 0, E.sortObjects), v.finish(), E.sortObjects === !0 && v.sort(N, j);
      const G = Ut.enabled === !1 || Ut.isPresenting === !1 || Ut.hasDepthSensing() === !1;
      G && nt.addToRenderList(v, M), this.info.render.frame++, W === !0 && at.beginShadows();
      const z = d.state.shadowsArray;
      Lt.render(z, M, I), W === !0 && at.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const H = v.opaque, st = v.transmissive;
      if (d.setupLights(E._useLegacyLights), I.isArrayCamera) {
        const ft = I.cameras;
        if (st.length > 0)
          for (let pt = 0, Mt = ft.length; pt < Mt; pt++) {
            const Tt = ft[pt];
            As(H, st, M, Tt);
          }
        G && nt.render(M);
        for (let pt = 0, Mt = ft.length; pt < Mt; pt++) {
          const Tt = ft[pt];
          Ts(v, M, Tt, Tt.viewport);
        }
      } else
        st.length > 0 && As(H, st, M, I), G && nt.render(M), Ts(v, M, I);
      C !== null && (Bt.updateMultisampleRenderTarget(C), Bt.updateRenderTargetMipmap(C)), M.isScene === !0 && M.onAfterRender(E, M, I), Dt.resetDefaultState(), k = -1, S = null, A.pop(), A.length > 0 ? (d = A[A.length - 1], W === !0 && at.setGlobalState(E.clippingPlanes, d.state.camera)) : d = null, h.pop(), h.length > 0 ? v = h[h.length - 1] : v = null;
    };
    function ys(M, I, G, z) {
      if (M.visible === !1)
        return;
      if (M.layers.test(I.layers)) {
        if (M.isGroup)
          G = M.renderOrder;
        else if (M.isLOD)
          M.autoUpdate === !0 && M.update(I);
        else if (M.isLight)
          d.pushLight(M), M.castShadow && d.pushShadow(M);
        else if (M.isSprite) {
          if (!M.frustumCulled || Et.intersectsSprite(M)) {
            z && et.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ct);
            const ft = K.update(M), pt = M.material;
            pt.visible && v.push(M, ft, pt, G, et.z, null);
          }
        } else if ((M.isMesh || M.isLine || M.isPoints) && (!M.frustumCulled || Et.intersectsObject(M))) {
          const ft = K.update(M), pt = M.material;
          if (z && (M.boundingSphere !== void 0 ? (M.boundingSphere === null && M.computeBoundingSphere(), et.copy(M.boundingSphere.center)) : (ft.boundingSphere === null && ft.computeBoundingSphere(), et.copy(ft.boundingSphere.center)), et.applyMatrix4(M.matrixWorld).applyMatrix4(ct)), Array.isArray(pt)) {
            const Mt = ft.groups;
            for (let Tt = 0, wt = Mt.length; Tt < wt; Tt++) {
              const Nt = Mt[Tt], te = pt[Nt.materialIndex];
              te && te.visible && v.push(M, ft, te, G, et.z, Nt);
            }
          } else
            pt.visible && v.push(M, ft, pt, G, et.z, null);
        }
      }
      const st = M.children;
      for (let ft = 0, pt = st.length; ft < pt; ft++)
        ys(st[ft], I, G, z);
    }
    function Ts(M, I, G, z) {
      const H = M.opaque, st = M.transmissive, ft = M.transparent;
      d.setupLightsView(G), W === !0 && at.setGlobalState(E.clippingPlanes, G), z && St.viewport(_.copy(z)), H.length > 0 && Ci(H, I, G), st.length > 0 && Ci(st, I, G), ft.length > 0 && Ci(ft, I, G), St.buffers.depth.setTest(!0), St.buffers.depth.setMask(!0), St.buffers.color.setMask(!0), St.setPolygonOffset(!1);
    }
    function As(M, I, G, z) {
      if ((G.isScene === !0 ? G.overrideMaterial : null) !== null)
        return;
      d.state.transmissionRenderTarget[z.id] === void 0 && (d.state.transmissionRenderTarget[z.id] = new bn(1, 1, {
        generateMipmaps: !0,
        type: ht.has("EXT_color_buffer_half_float") || ht.has("EXT_color_buffer_float") ? _r : hn,
        minFilter: An,
        samples: 4,
        stencilBuffer: s,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1
      }));
      const st = d.state.transmissionRenderTarget[z.id], ft = z.viewport || _;
      st.setSize(ft.z, ft.w);
      const pt = E.getRenderTarget();
      E.setRenderTarget(st), E.getClearColor(y), P = E.getClearAlpha(), P < 1 && E.setClearColor(16777215, 0.5), E.clear();
      const Mt = E.toneMapping;
      E.toneMapping = cn;
      const Tt = z.viewport;
      if (z.viewport !== void 0 && (z.viewport = void 0), d.setupLightsView(z), W === !0 && at.setGlobalState(E.clippingPlanes, z), Ci(M, G, z), Bt.updateMultisampleRenderTarget(st), Bt.updateRenderTargetMipmap(st), ht.has("WEBGL_multisampled_render_to_texture") === !1) {
        let wt = !1;
        for (let Nt = 0, te = I.length; Nt < te; Nt++) {
          const ce = I[Nt], Se = ce.object, Ve = ce.geometry, Gt = ce.material, At = ce.group;
          if (Gt.side === $e && Se.layers.test(z.layers)) {
            const oi = Gt.side;
            Gt.side = Me, Gt.needsUpdate = !0, bs(Se, G, z, Ve, Gt, At), Gt.side = oi, Gt.needsUpdate = !0, wt = !0;
          }
        }
        wt === !0 && (Bt.updateMultisampleRenderTarget(st), Bt.updateRenderTargetMipmap(st));
      }
      E.setRenderTarget(pt), E.setClearColor(y, P), Tt !== void 0 && (z.viewport = Tt), E.toneMapping = Mt;
    }
    function Ci(M, I, G) {
      const z = I.isScene === !0 ? I.overrideMaterial : null;
      for (let H = 0, st = M.length; H < st; H++) {
        const ft = M[H], pt = ft.object, Mt = ft.geometry, Tt = z === null ? ft.material : z, wt = ft.group;
        pt.layers.test(G.layers) && bs(pt, I, G, Mt, Tt, wt);
      }
    }
    function bs(M, I, G, z, H, st) {
      M.onBeforeRender(E, I, G, z, H, st), M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse, M.matrixWorld), M.normalMatrix.getNormalMatrix(M.modelViewMatrix), H.onBeforeRender(E, I, G, z, M, st), H.transparent === !0 && H.side === $e && H.forceSinglePass === !1 ? (H.side = Me, H.needsUpdate = !0, E.renderBufferDirect(G, I, z, H, M, st), H.side = un, H.needsUpdate = !0, E.renderBufferDirect(G, I, z, H, M, st), H.side = $e) : E.renderBufferDirect(G, I, z, H, M, st), M.onAfterRender(E, I, G, z, H, st);
    }
    function Pi(M, I, G) {
      I.isScene !== !0 && (I = vt);
      const z = It.get(M), H = d.state.lights, st = d.state.shadowsArray, ft = H.state.version, pt = Q.getParameters(M, H.state, st, I, G), Mt = Q.getProgramCacheKey(pt);
      let Tt = z.programs;
      z.environment = M.isMeshStandardMaterial ? I.environment : null, z.fog = I.fog, z.envMap = (M.isMeshStandardMaterial ? T : Kt).get(M.envMap || z.environment), z.envMapRotation = z.environment !== null && M.envMap === null ? I.environmentRotation : M.envMapRotation, Tt === void 0 && (M.addEventListener("dispose", rt), Tt = /* @__PURE__ */ new Map(), z.programs = Tt);
      let wt = Tt.get(Mt);
      if (wt !== void 0) {
        if (z.currentProgram === wt && z.lightsStateVersion === ft)
          return Rs(M, pt), wt;
      } else
        pt.uniforms = Q.getUniforms(M), M.onBuild(G, pt, E), M.onBeforeCompile(pt, E), wt = Q.acquireProgram(pt, Mt), Tt.set(Mt, wt), z.uniforms = pt.uniforms;
      const Nt = z.uniforms;
      return (!M.isShaderMaterial && !M.isRawShaderMaterial || M.clipping === !0) && (Nt.clippingPlanes = at.uniform), Rs(M, pt), z.needsLights = Qo(M), z.lightsStateVersion = ft, z.needsLights && (Nt.ambientLightColor.value = H.state.ambient, Nt.lightProbe.value = H.state.probe, Nt.directionalLights.value = H.state.directional, Nt.directionalLightShadows.value = H.state.directionalShadow, Nt.spotLights.value = H.state.spot, Nt.spotLightShadows.value = H.state.spotShadow, Nt.rectAreaLights.value = H.state.rectArea, Nt.ltc_1.value = H.state.rectAreaLTC1, Nt.ltc_2.value = H.state.rectAreaLTC2, Nt.pointLights.value = H.state.point, Nt.pointLightShadows.value = H.state.pointShadow, Nt.hemisphereLights.value = H.state.hemi, Nt.directionalShadowMap.value = H.state.directionalShadowMap, Nt.directionalShadowMatrix.value = H.state.directionalShadowMatrix, Nt.spotShadowMap.value = H.state.spotShadowMap, Nt.spotLightMatrix.value = H.state.spotLightMatrix, Nt.spotLightMap.value = H.state.spotLightMap, Nt.pointShadowMap.value = H.state.pointShadowMap, Nt.pointShadowMatrix.value = H.state.pointShadowMatrix), z.currentProgram = wt, z.uniformsList = null, wt;
    }
    function ws(M) {
      if (M.uniformsList === null) {
        const I = M.currentProgram.getUniforms();
        M.uniformsList = sr.seqWithValue(I.seq, M.uniforms);
      }
      return M.uniformsList;
    }
    function Rs(M, I) {
      const G = It.get(M);
      G.outputColorSpace = I.outputColorSpace, G.batching = I.batching, G.instancing = I.instancing, G.instancingColor = I.instancingColor, G.instancingMorph = I.instancingMorph, G.skinning = I.skinning, G.morphTargets = I.morphTargets, G.morphNormals = I.morphNormals, G.morphColors = I.morphColors, G.morphTargetsCount = I.morphTargetsCount, G.numClippingPlanes = I.numClippingPlanes, G.numIntersection = I.numClipIntersection, G.vertexAlphas = I.vertexAlphas, G.vertexTangents = I.vertexTangents, G.toneMapping = I.toneMapping;
    }
    function Zo(M, I, G, z, H) {
      I.isScene !== !0 && (I = vt), Bt.resetTextureUnits();
      const st = I.fog, ft = z.isMeshStandardMaterial ? I.environment : null, pt = C === null ? E.outputColorSpace : C.isXRRenderTarget === !0 ? C.texture.colorSpace : dn, Mt = (z.isMeshStandardMaterial ? T : Kt).get(z.envMap || ft), Tt = z.vertexColors === !0 && !!G.attributes.color && G.attributes.color.itemSize === 4, wt = !!G.attributes.tangent && (!!z.normalMap || z.anisotropy > 0), Nt = !!G.morphAttributes.position, te = !!G.morphAttributes.normal, ce = !!G.morphAttributes.color;
      let Se = cn;
      z.toneMapped && (C === null || C.isXRRenderTarget === !0) && (Se = E.toneMapping);
      const Ve = G.morphAttributes.position || G.morphAttributes.normal || G.morphAttributes.color, Gt = Ve !== void 0 ? Ve.length : 0, At = It.get(z), oi = d.state.lights;
      if (W === !0 && (q === !0 || M !== S)) {
        const we = M === S && z.id === k;
        at.setState(z, M, we);
      }
      let jt = !1;
      z.version === At.__version ? (At.needsLights && At.lightsStateVersion !== oi.state.version || At.outputColorSpace !== pt || H.isBatchedMesh && At.batching === !1 || !H.isBatchedMesh && At.batching === !0 || H.isInstancedMesh && At.instancing === !1 || !H.isInstancedMesh && At.instancing === !0 || H.isSkinnedMesh && At.skinning === !1 || !H.isSkinnedMesh && At.skinning === !0 || H.isInstancedMesh && At.instancingColor === !0 && H.instanceColor === null || H.isInstancedMesh && At.instancingColor === !1 && H.instanceColor !== null || H.isInstancedMesh && At.instancingMorph === !0 && H.morphTexture === null || H.isInstancedMesh && At.instancingMorph === !1 && H.morphTexture !== null || At.envMap !== Mt || z.fog === !0 && At.fog !== st || At.numClippingPlanes !== void 0 && (At.numClippingPlanes !== at.numPlanes || At.numIntersection !== at.numIntersection) || At.vertexAlphas !== Tt || At.vertexTangents !== wt || At.morphTargets !== Nt || At.morphNormals !== te || At.morphColors !== ce || At.toneMapping !== Se || At.morphTargetsCount !== Gt) && (jt = !0) : (jt = !0, At.__version = z.version);
      let fn = At.currentProgram;
      jt === !0 && (fn = Pi(z, I, H));
      let Cs = !1, li = !1, Sr = !1;
      const ue = fn.getUniforms(), Qe = At.uniforms;
      if (St.useProgram(fn.program) && (Cs = !0, li = !0, Sr = !0), z.id !== k && (k = z.id, li = !0), Cs || S !== M) {
        ue.setValue(F, "projectionMatrix", M.projectionMatrix), ue.setValue(F, "viewMatrix", M.matrixWorldInverse);
        const we = ue.map.cameraPosition;
        we !== void 0 && we.setValue(F, et.setFromMatrixPosition(M.matrixWorld)), Wt.logarithmicDepthBuffer && ue.setValue(
          F,
          "logDepthBufFC",
          2 / (Math.log(M.far + 1) / Math.LN2)
        ), (z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshLambertMaterial || z.isMeshBasicMaterial || z.isMeshStandardMaterial || z.isShaderMaterial) && ue.setValue(F, "isOrthographic", M.isOrthographicCamera === !0), S !== M && (S = M, li = !0, Sr = !0);
      }
      if (H.isSkinnedMesh) {
        ue.setOptional(F, H, "bindMatrix"), ue.setOptional(F, H, "bindMatrixInverse");
        const we = H.skeleton;
        we && (we.boneTexture === null && we.computeBoneTexture(), ue.setValue(F, "boneTexture", we.boneTexture, Bt));
      }
      H.isBatchedMesh && (ue.setOptional(F, H, "batchingTexture"), ue.setValue(F, "batchingTexture", H._matricesTexture, Bt));
      const Er = G.morphAttributes;
      if ((Er.position !== void 0 || Er.normal !== void 0 || Er.color !== void 0) && mt.update(H, G, fn), (li || At.receiveShadow !== H.receiveShadow) && (At.receiveShadow = H.receiveShadow, ue.setValue(F, "receiveShadow", H.receiveShadow)), z.isMeshGouraudMaterial && z.envMap !== null && (Qe.envMap.value = Mt, Qe.flipEnvMap.value = Mt.isCubeTexture && Mt.isRenderTargetTexture === !1 ? -1 : 1), z.isMeshStandardMaterial && z.envMap === null && I.environment !== null && (Qe.envMapIntensity.value = I.environmentIntensity), li && (ue.setValue(F, "toneMappingExposure", E.toneMappingExposure), At.needsLights && Jo(Qe, Sr), st && z.fog === !0 && tt.refreshFogUniforms(Qe, st), tt.refreshMaterialUniforms(Qe, z, $, O, d.state.transmissionRenderTarget[M.id]), sr.upload(F, ws(At), Qe, Bt)), z.isShaderMaterial && z.uniformsNeedUpdate === !0 && (sr.upload(F, ws(At), Qe, Bt), z.uniformsNeedUpdate = !1), z.isSpriteMaterial && ue.setValue(F, "center", H.center), ue.setValue(F, "modelViewMatrix", H.modelViewMatrix), ue.setValue(F, "normalMatrix", H.normalMatrix), ue.setValue(F, "modelMatrix", H.matrixWorld), z.isShaderMaterial || z.isRawShaderMaterial) {
        const we = z.uniformsGroups;
        for (let yr = 0, tl = we.length; yr < tl; yr++) {
          const Ps = we[yr];
          Ft.update(Ps, fn), Ft.bind(Ps, fn);
        }
      }
      return fn;
    }
    function Jo(M, I) {
      M.ambientLightColor.needsUpdate = I, M.lightProbe.needsUpdate = I, M.directionalLights.needsUpdate = I, M.directionalLightShadows.needsUpdate = I, M.pointLights.needsUpdate = I, M.pointLightShadows.needsUpdate = I, M.spotLights.needsUpdate = I, M.spotLightShadows.needsUpdate = I, M.rectAreaLights.needsUpdate = I, M.hemisphereLights.needsUpdate = I;
    }
    function Qo(M) {
      return M.isMeshLambertMaterial || M.isMeshToonMaterial || M.isMeshPhongMaterial || M.isMeshStandardMaterial || M.isShadowMaterial || M.isShaderMaterial && M.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return V;
    }, this.getActiveMipmapLevel = function() {
      return w;
    }, this.getRenderTarget = function() {
      return C;
    }, this.setRenderTargetTextures = function(M, I, G) {
      It.get(M.texture).__webglTexture = I, It.get(M.depthTexture).__webglTexture = G;
      const z = It.get(M);
      z.__hasExternalTextures = !0, z.__autoAllocateDepthBuffer = G === void 0, z.__autoAllocateDepthBuffer || ht.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), z.__useRenderToTexture = !1);
    }, this.setRenderTargetFramebuffer = function(M, I) {
      const G = It.get(M);
      G.__webglFramebuffer = I, G.__useDefaultFramebuffer = I === void 0;
    }, this.setRenderTarget = function(M, I = 0, G = 0) {
      C = M, V = I, w = G;
      let z = !0, H = null, st = !1, ft = !1;
      if (M) {
        const Mt = It.get(M);
        Mt.__useDefaultFramebuffer !== void 0 ? (St.bindFramebuffer(F.FRAMEBUFFER, null), z = !1) : Mt.__webglFramebuffer === void 0 ? Bt.setupRenderTarget(M) : Mt.__hasExternalTextures && Bt.rebindTextures(M, It.get(M.texture).__webglTexture, It.get(M.depthTexture).__webglTexture);
        const Tt = M.texture;
        (Tt.isData3DTexture || Tt.isDataArrayTexture || Tt.isCompressedArrayTexture) && (ft = !0);
        const wt = It.get(M).__webglFramebuffer;
        M.isWebGLCubeRenderTarget ? (Array.isArray(wt[I]) ? H = wt[I][G] : H = wt[I], st = !0) : M.samples > 0 && Bt.useMultisampledRTT(M) === !1 ? H = It.get(M).__webglMultisampledFramebuffer : Array.isArray(wt) ? H = wt[G] : H = wt, _.copy(M.viewport), L.copy(M.scissor), R = M.scissorTest;
      } else
        _.copy(J).multiplyScalar($).floor(), L.copy(lt).multiplyScalar($).floor(), R = _t;
      if (St.bindFramebuffer(F.FRAMEBUFFER, H) && z && St.drawBuffers(M, H), St.viewport(_), St.scissor(L), St.setScissorTest(R), st) {
        const Mt = It.get(M.texture);
        F.framebufferTexture2D(F.FRAMEBUFFER, F.COLOR_ATTACHMENT0, F.TEXTURE_CUBE_MAP_POSITIVE_X + I, Mt.__webglTexture, G);
      } else if (ft) {
        const Mt = It.get(M.texture), Tt = I || 0;
        F.framebufferTextureLayer(F.FRAMEBUFFER, F.COLOR_ATTACHMENT0, Mt.__webglTexture, G || 0, Tt);
      }
      k = -1;
    }, this.readRenderTargetPixels = function(M, I, G, z, H, st, ft) {
      if (!(M && M.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let pt = It.get(M).__webglFramebuffer;
      if (M.isWebGLCubeRenderTarget && ft !== void 0 && (pt = pt[ft]), pt) {
        St.bindFramebuffer(F.FRAMEBUFFER, pt);
        try {
          const Mt = M.texture, Tt = Mt.format, wt = Mt.type;
          if (!Wt.textureFormatReadable(Tt)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Wt.textureTypeReadable(wt)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          I >= 0 && I <= M.width - z && G >= 0 && G <= M.height - H && F.readPixels(I, G, z, H, dt.convert(Tt), dt.convert(wt), st);
        } finally {
          const Mt = C !== null ? It.get(C).__webglFramebuffer : null;
          St.bindFramebuffer(F.FRAMEBUFFER, Mt);
        }
      }
    }, this.copyFramebufferToTexture = function(M, I, G = 0) {
      const z = Math.pow(2, -G), H = Math.floor(I.image.width * z), st = Math.floor(I.image.height * z);
      Bt.setTexture2D(I, 0), F.copyTexSubImage2D(F.TEXTURE_2D, G, 0, 0, M.x, M.y, H, st), St.unbindTexture();
    }, this.copyTextureToTexture = function(M, I, G, z = 0) {
      const H = I.image.width, st = I.image.height, ft = dt.convert(G.format), pt = dt.convert(G.type);
      Bt.setTexture2D(G, 0), F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL, G.flipY), F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL, G.premultiplyAlpha), F.pixelStorei(F.UNPACK_ALIGNMENT, G.unpackAlignment), I.isDataTexture ? F.texSubImage2D(F.TEXTURE_2D, z, M.x, M.y, H, st, ft, pt, I.image.data) : I.isCompressedTexture ? F.compressedTexSubImage2D(F.TEXTURE_2D, z, M.x, M.y, I.mipmaps[0].width, I.mipmaps[0].height, ft, I.mipmaps[0].data) : F.texSubImage2D(F.TEXTURE_2D, z, M.x, M.y, ft, pt, I.image), z === 0 && G.generateMipmaps && F.generateMipmap(F.TEXTURE_2D), St.unbindTexture();
    }, this.copyTextureToTexture3D = function(M, I, G, z, H = 0) {
      const st = M.max.x - M.min.x, ft = M.max.y - M.min.y, pt = M.max.z - M.min.z, Mt = dt.convert(z.format), Tt = dt.convert(z.type);
      let wt;
      if (z.isData3DTexture)
        Bt.setTexture3D(z, 0), wt = F.TEXTURE_3D;
      else if (z.isDataArrayTexture || z.isCompressedArrayTexture)
        Bt.setTexture2DArray(z, 0), wt = F.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL, z.flipY), F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL, z.premultiplyAlpha), F.pixelStorei(F.UNPACK_ALIGNMENT, z.unpackAlignment);
      const Nt = F.getParameter(F.UNPACK_ROW_LENGTH), te = F.getParameter(F.UNPACK_IMAGE_HEIGHT), ce = F.getParameter(F.UNPACK_SKIP_PIXELS), Se = F.getParameter(F.UNPACK_SKIP_ROWS), Ve = F.getParameter(F.UNPACK_SKIP_IMAGES), Gt = G.isCompressedTexture ? G.mipmaps[H] : G.image;
      F.pixelStorei(F.UNPACK_ROW_LENGTH, Gt.width), F.pixelStorei(F.UNPACK_IMAGE_HEIGHT, Gt.height), F.pixelStorei(F.UNPACK_SKIP_PIXELS, M.min.x), F.pixelStorei(F.UNPACK_SKIP_ROWS, M.min.y), F.pixelStorei(F.UNPACK_SKIP_IMAGES, M.min.z), G.isDataTexture || G.isData3DTexture ? F.texSubImage3D(wt, H, I.x, I.y, I.z, st, ft, pt, Mt, Tt, Gt.data) : z.isCompressedArrayTexture ? F.compressedTexSubImage3D(wt, H, I.x, I.y, I.z, st, ft, pt, Mt, Gt.data) : F.texSubImage3D(wt, H, I.x, I.y, I.z, st, ft, pt, Mt, Tt, Gt), F.pixelStorei(F.UNPACK_ROW_LENGTH, Nt), F.pixelStorei(F.UNPACK_IMAGE_HEIGHT, te), F.pixelStorei(F.UNPACK_SKIP_PIXELS, ce), F.pixelStorei(F.UNPACK_SKIP_ROWS, Se), F.pixelStorei(F.UNPACK_SKIP_IMAGES, Ve), H === 0 && z.generateMipmaps && F.generateMipmap(wt), St.unbindTexture();
    }, this.initTexture = function(M) {
      M.isCubeTexture ? Bt.setTextureCube(M, 0) : M.isData3DTexture ? Bt.setTexture3D(M, 0) : M.isDataArrayTexture || M.isCompressedArrayTexture ? Bt.setTexture2DArray(M, 0) : Bt.setTexture2D(M, 0), St.unbindTexture();
    }, this.resetState = function() {
      V = 0, w = 0, C = null, St.reset(), Dt.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return Ke;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(t) {
    this._outputColorSpace = t;
    const e = this.getContext();
    e.drawingBufferColorSpace = t === gs ? "display-p3" : "srgb", e.unpackColorSpace = Xt.workingColorSpace === vr ? "display-p3" : "srgb";
  }
  get useLegacyLights() {
    return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights;
  }
  set useLegacyLights(t) {
    console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = t;
  }
}
class ko extends ae {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Ze(), this.environmentIntensity = 1, this.environmentRotation = new Ze(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(t, e) {
    return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, this.backgroundRotation.copy(t.backgroundRotation), this.environmentIntensity = t.environmentIntensity, this.environmentRotation.copy(t.environmentRotation), t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.fog !== null && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity), e.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (e.object.environmentIntensity = this.environmentIntensity), e.object.environmentRotation = this.environmentRotation.toArray(), e;
  }
}
class Ap extends _e {
  constructor(t = null, e = 1, n = 1, r, s, a, o, l, c = xe, u = xe, p, f) {
    super(null, a, o, l, c, u, r, s, p, f), this.isDataTexture = !0, this.image = { data: t, width: e, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Si extends Ce {
  constructor(t, e, n, r = 1) {
    super(t, e, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = r;
  }
  copy(t) {
    return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.meshPerAttribute = this.meshPerAttribute, t.isInstancedBufferAttribute = !0, t;
  }
}
const Yn = /* @__PURE__ */ new qt(), Za = /* @__PURE__ */ new qt(), tr = [], Ja = /* @__PURE__ */ new wn(), bp = /* @__PURE__ */ new qt(), pi = /* @__PURE__ */ new Ae(), mi = /* @__PURE__ */ new si();
class wp extends Ae {
  constructor(t, e, n) {
    super(t, e), this.isInstancedMesh = !0, this.instanceMatrix = new Si(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let r = 0; r < n; r++)
      this.setMatrixAt(r, bp);
  }
  computeBoundingBox() {
    const t = this.geometry, e = this.count;
    this.boundingBox === null && (this.boundingBox = new wn()), t.boundingBox === null && t.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < e; n++)
      this.getMatrixAt(n, Yn), Ja.copy(t.boundingBox).applyMatrix4(Yn), this.boundingBox.union(Ja);
  }
  computeBoundingSphere() {
    const t = this.geometry, e = this.count;
    this.boundingSphere === null && (this.boundingSphere = new si()), t.boundingSphere === null && t.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < e; n++)
      this.getMatrixAt(n, Yn), mi.copy(t.boundingSphere).applyMatrix4(Yn), this.boundingSphere.union(mi);
  }
  copy(t, e) {
    return super.copy(t, e), this.instanceMatrix.copy(t.instanceMatrix), t.morphTexture !== null && (this.morphTexture = t.morphTexture.clone()), t.instanceColor !== null && (this.instanceColor = t.instanceColor.clone()), this.count = t.count, t.boundingBox !== null && (this.boundingBox = t.boundingBox.clone()), t.boundingSphere !== null && (this.boundingSphere = t.boundingSphere.clone()), this;
  }
  getColorAt(t, e) {
    e.fromArray(this.instanceColor.array, t * 3);
  }
  getMatrixAt(t, e) {
    e.fromArray(this.instanceMatrix.array, t * 16);
  }
  getMorphAt(t, e) {
    const n = e.morphTargetInfluences, r = this.morphTexture.source.data.data, s = n.length + 1, a = t * s + 1;
    for (let o = 0; o < n.length; o++)
      n[o] = r[a + o];
  }
  raycast(t, e) {
    const n = this.matrixWorld, r = this.count;
    if (pi.geometry = this.geometry, pi.material = this.material, pi.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), mi.copy(this.boundingSphere), mi.applyMatrix4(n), t.ray.intersectsSphere(mi) !== !1))
      for (let s = 0; s < r; s++) {
        this.getMatrixAt(s, Yn), Za.multiplyMatrices(n, Yn), pi.matrixWorld = Za, pi.raycast(t, tr);
        for (let a = 0, o = tr.length; a < o; a++) {
          const l = tr[a];
          l.instanceId = s, l.object = this, e.push(l);
        }
        tr.length = 0;
      }
  }
  setColorAt(t, e) {
    this.instanceColor === null && (this.instanceColor = new Si(new Float32Array(this.instanceMatrix.count * 3), 3)), e.toArray(this.instanceColor.array, t * 3);
  }
  setMatrixAt(t, e) {
    e.toArray(this.instanceMatrix.array, t * 16);
  }
  setMorphAt(t, e) {
    const n = e.morphTargetInfluences, r = n.length + 1;
    this.morphTexture === null && (this.morphTexture = new Ap(new Float32Array(r * this.count), r, this.count, Mo, je));
    const s = this.morphTexture.source.data.data;
    let a = 0;
    for (let c = 0; c < n.length; c++)
      a += n[c];
    const o = this.geometry.morphTargetsRelative ? 1 : 1 - a, l = r * t;
    s[l] = o, s.set(n, l + 1);
  }
  updateMorphTargets() {
  }
  dispose() {
    return this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null), this;
  }
}
class Es extends Ri {
  constructor(t) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Pt(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.fog = t.fog, this;
  }
}
const dr = /* @__PURE__ */ new B(), fr = /* @__PURE__ */ new B(), Qa = /* @__PURE__ */ new qt(), gi = /* @__PURE__ */ new _s(), er = /* @__PURE__ */ new si(), ns = /* @__PURE__ */ new B(), to = /* @__PURE__ */ new B();
class Rp extends ae {
  constructor(t = new He(), e = new Es()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = t, this.material = e, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const e = t.attributes.position, n = [0];
      for (let r = 1, s = e.count; r < s; r++)
        dr.fromBufferAttribute(e, r - 1), fr.fromBufferAttribute(e, r), n[r] = n[r - 1], n[r] += dr.distanceTo(fr);
      t.setAttribute("lineDistance", new be(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(t, e) {
    const n = this.geometry, r = this.matrixWorld, s = t.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), er.copy(n.boundingSphere), er.applyMatrix4(r), er.radius += s, t.ray.intersectsSphere(er) === !1)
      return;
    Qa.copy(r).invert(), gi.copy(t.ray).applyMatrix4(Qa);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = this.isLineSegments ? 2 : 1, u = n.index, f = n.attributes.position;
    if (u !== null) {
      const m = Math.max(0, a.start), g = Math.min(u.count, a.start + a.count);
      for (let v = m, d = g - 1; v < d; v += c) {
        const h = u.getX(v), A = u.getX(v + 1), E = nr(this, t, gi, l, h, A);
        E && e.push(E);
      }
      if (this.isLineLoop) {
        const v = u.getX(g - 1), d = u.getX(m), h = nr(this, t, gi, l, v, d);
        h && e.push(h);
      }
    } else {
      const m = Math.max(0, a.start), g = Math.min(f.count, a.start + a.count);
      for (let v = m, d = g - 1; v < d; v += c) {
        const h = nr(this, t, gi, l, v, v + 1);
        h && e.push(h);
      }
      if (this.isLineLoop) {
        const v = nr(this, t, gi, l, g - 1, m);
        v && e.push(v);
      }
    }
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, n = Object.keys(e);
    if (n.length > 0) {
      const r = e[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
function nr(i, t, e, n, r, s) {
  const a = i.geometry.attributes.position;
  if (dr.fromBufferAttribute(a, r), fr.fromBufferAttribute(a, s), e.distanceSqToSegment(dr, fr, ns, to) > n)
    return;
  ns.applyMatrix4(i.matrixWorld);
  const l = t.ray.origin.distanceTo(ns);
  if (!(l < t.near || l > t.far))
    return {
      distance: l,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: to.clone().applyMatrix4(i.matrixWorld),
      index: r,
      face: null,
      faceIndex: null,
      object: i
    };
}
const eo = /* @__PURE__ */ new B(), no = /* @__PURE__ */ new B();
class Wo extends Rp {
  constructor(t, e) {
    super(t, e), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const e = t.attributes.position, n = [];
      for (let r = 0, s = e.count; r < s; r += 2)
        eo.fromBufferAttribute(e, r), no.fromBufferAttribute(e, r + 1), n[r] = r === 0 ? 0 : n[r - 1], n[r + 1] = n[r] + eo.distanceTo(no);
      t.setAttribute("lineDistance", new be(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Xo extends ae {
  constructor(t, e = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Pt(t), this.intensity = e;
  }
  dispose() {
  }
  copy(t, e) {
    return super.copy(t, e), this.color.copy(t.color), this.intensity = t.intensity, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, this.groundColor !== void 0 && (e.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (e.object.distance = this.distance), this.angle !== void 0 && (e.object.angle = this.angle), this.decay !== void 0 && (e.object.decay = this.decay), this.penumbra !== void 0 && (e.object.penumbra = this.penumbra), this.shadow !== void 0 && (e.object.shadow = this.shadow.toJSON()), e;
  }
}
const is = /* @__PURE__ */ new qt(), io = /* @__PURE__ */ new B(), ro = /* @__PURE__ */ new B();
class Cp {
  constructor(t) {
    this.camera = t, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new zt(512, 512), this.map = null, this.mapPass = null, this.matrix = new qt(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Ms(), this._frameExtents = new zt(1, 1), this._viewportCount = 1, this._viewports = [
      new se(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(t) {
    const e = this.camera, n = this.matrix;
    io.setFromMatrixPosition(t.matrixWorld), e.position.copy(io), ro.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(ro), e.updateMatrixWorld(), is.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(is), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(is);
  }
  getViewport(t) {
    return this._viewports[t];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(t) {
    return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const t = {};
    return this.bias !== 0 && (t.bias = this.bias), this.normalBias !== 0 && (t.normalBias = this.normalBias), this.radius !== 1 && (t.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t;
  }
}
class Pp extends Cp {
  constructor() {
    super(new No(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class qo extends Xo {
  constructor(t, e) {
    super(t, e), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(ae.DEFAULT_UP), this.updateMatrix(), this.target = new ae(), this.shadow = new Pp();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t) {
    return super.copy(t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
  }
}
class Yo extends Xo {
  constructor(t, e) {
    super(t, e), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
const so = /* @__PURE__ */ new qt();
class $o {
  constructor(t, e, n = 0, r = 1 / 0) {
    this.ray = new _s(t, e), this.near = n, this.far = r, this.camera = null, this.layers = new vs(), this.params = {
      Mesh: {},
      Line: { threshold: 1 },
      LOD: {},
      Points: { threshold: 1 },
      Sprite: {}
    };
  }
  set(t, e) {
    this.ray.set(t, e);
  }
  setFromCamera(t, e) {
    e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, 0.5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type: " + e.type);
  }
  setFromXRController(t) {
    return so.identity().extractRotation(t.matrixWorld), this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(so), this;
  }
  intersectObject(t, e = !0, n = []) {
    return ds(t, this, n, e), n.sort(ao), n;
  }
  intersectObjects(t, e = !0, n = []) {
    for (let r = 0, s = t.length; r < s; r++)
      ds(t[r], this, n, e);
    return n.sort(ao), n;
  }
}
function ao(i, t) {
  return i.distance - t.distance;
}
function ds(i, t, e, n) {
  if (i.layers.test(t.layers) && i.raycast(t, e), n === !0) {
    const r = i.children;
    for (let s = 0, a = r.length; s < a; s++)
      ds(r[s], t, e, !0);
  }
}
class sm {
  constructor(t = 1, e = 0, n = 0) {
    return this.radius = t, this.phi = e, this.theta = n, this;
  }
  set(t, e, n) {
    return this.radius = t, this.phi = e, this.theta = n, this;
  }
  copy(t) {
    return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this;
  }
  // restrict phi to be between EPS and PI-EPS
  makeSafe() {
    return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
  }
  setFromVector3(t) {
    return this.setFromCartesianCoords(t.x, t.y, t.z);
  }
  setFromCartesianCoords(t, e, n) {
    return this.radius = Math.sqrt(t * t + e * e + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(ge(e / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class jo extends Wo {
  constructor(t = 10, e = 10, n = 4473924, r = 8947848) {
    n = new Pt(n), r = new Pt(r);
    const s = e / 2, a = t / e, o = t / 2, l = [], c = [];
    for (let f = 0, m = 0, g = -o; f <= e; f++, g += a) {
      l.push(-o, 0, g, o, 0, g), l.push(g, 0, -o, g, 0, o);
      const v = f === s ? n : r;
      v.toArray(c, m), m += 3, v.toArray(c, m), m += 3, v.toArray(c, m), m += 3, v.toArray(c, m), m += 3;
    }
    const u = new He();
    u.setAttribute("position", new be(l, 3)), u.setAttribute("color", new be(c, 3));
    const p = new Es({ vertexColors: !0, toneMapped: !1 });
    super(u, p), this.type = "GridHelper";
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class Ko extends Wo {
  constructor(t = 1) {
    const e = [
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      0,
      0,
      t
    ], n = [
      1,
      0,
      0,
      1,
      0.6,
      0,
      0,
      1,
      0,
      0.6,
      1,
      0,
      0,
      0,
      1,
      0,
      0.6,
      1
    ], r = new He();
    r.setAttribute("position", new be(e, 3)), r.setAttribute("color", new be(n, 3));
    const s = new Es({ vertexColors: !0, toneMapped: !1 });
    super(r, s), this.type = "AxesHelper";
  }
  setColors(t, e, n) {
    const r = new Pt(), s = this.geometry.attributes.color.array;
    return r.set(t), r.toArray(s, 0), r.toArray(s, 3), r.set(e), r.toArray(s, 6), r.toArray(s, 9), r.set(n), r.toArray(s, 12), r.toArray(s, 15), this.geometry.attributes.color.needsUpdate = !0, this;
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: ms
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = ms);
const Lp = ["innerHTML"], Dp = /* @__PURE__ */ fs({
  name: "JBHeatMap3D",
  __name: "HeatMap",
  props: {
    data: {
      type: Array,
      default: () => []
    },
    width: { type: Number, default: 600 },
    height: { type: Number, default: 500 },
    baseSize: { type: Number, default: 0.1 },
    maxHeight: { type: Number, default: 3 },
    enableOrbit: { type: Boolean, default: !0 },
    backgroundColor: { type: String, default: "#0d1b2a" },
    showGridHelper: { type: Boolean, default: !0 },
    showAxesHelper: { type: Boolean, default: !0 },
    gradientColors: {
      type: Array,
      default: () => ["#9b30ff", "#00ffff", "#ffff00", "#ff0000"]
    },
    autoAnimate: { type: Boolean, default: !1 },
    cameraPosition: {
      type: Object,
      default: () => ({ x: 5, y: 5, z: 5 })
    }
  },
  setup(i, { expose: t }) {
    const e = i, n = me(null), r = me({ show: !1, x: 0, y: 0, content: "" }), s = me(e.autoAnimate);
    let a, o, l, c = null, u, p, f, m = null, g = [], v = 0, d = 0;
    ps(async () => {
      const { OrbitControls: R } = await import("./OrbitControls-Cn3PDJwR.js");
      h(), e.enableOrbit && (c = new R(o, l.domElement), c.enableDamping = !0, c.dampingFactor = 0.05), C(), window.addEventListener("mousemove", _), window.addEventListener("resize", L), n.value && n.value.addEventListener("mouseleave", () => {
        r.value.show = !1;
      });
    }), co(() => {
      m && cancelAnimationFrame(m), window.removeEventListener("mousemove", _), window.removeEventListener("resize", L), l.dispose();
    });
    function h() {
      const { backgroundColor: R, showGridHelper: y, showAxesHelper: P, cameraPosition: U } = e;
      a = new ko(), a.background = new Pt(R), o = new Te(75, e.width / e.height, 0.1, 1e3), o.position.set(U.x, U.y, U.z), l = new Go({ antialias: !0 }), l.setSize(e.width, e.height), l.shadowMap.enabled = !0, n.value && n.value.appendChild(l.domElement), e.enableOrbit && c && (c.enableDamping = !0, c.dampingFactor = 0.05), a.add(new Yo(16777215, 0.6));
      const O = new qo(16777215, 0.8);
      if (O.position.set(10, 20, 5), a.add(O), u = new jn(), a.add(u), y) {
        const $ = Math.max(v, d) * e.baseSize * 1.2, N = new jo($, Math.max(v, d), 4473924, 2236962);
        a.add(N);
      }
      if (P) {
        const $ = new Ko(Math.max(v, d) * e.baseSize * 0.6);
        a.add($);
      }
      p = new $o(), f = new zt(), w();
    }
    function A(R = 10, y = 10) {
      return Array.from({ length: R }, () => Array.from({ length: y }, () => Math.random() * 15 + 1));
    }
    function E(R, y, P, U, O, $) {
      const N = 0.1 + (P - U) / (O - U) * e.maxHeight, j = new Rn(e.baseSize, N, e.baseSize, 1, 8, 1), J = j.attributes.position, lt = j.attributes.normal, _t = [], Et = (P - U) / (O - U), W = [
        new Pt(139),
        // 深蓝
        new Pt(65535),
        // 青
        new Pt(16776960),
        // 黄
        new Pt(16711680)
        // 红
      ];
      let q = [];
      Et >= 0.75 ? q = [...W] : Et >= 0.5 ? q = W.slice(0, 3) : Et >= 0.25 ? q = W.slice(0, 2) : q = W.slice(0, 1);
      for (let vt = 0; vt < J.count; vt++) {
        const bt = J.getY(vt), F = lt.getY(vt);
        let yt = new Pt();
        const ht = (bt + N / 2) / N;
        F > 0.5 ? yt.copy(q[q.length - 1]) : q.length === 4 ? ht < 0.25 ? yt.lerpColors(q[0], q[1], ht / 0.25) : ht < 0.5 ? yt.lerpColors(q[1], q[2], (ht - 0.25) / 0.25) : ht < 0.75 ? yt.lerpColors(q[2], q[3], (ht - 0.5) / 0.25) : yt.copy(q[3]) : q.length === 3 ? ht < 0.33 ? yt.lerpColors(q[0], q[1], ht / 0.33) : ht < 0.66 ? yt.lerpColors(q[1], q[2], (ht - 0.33) / 0.33) : yt.copy(q[2]) : q.length === 2 ? ht < 0.5 ? yt.lerpColors(q[0], q[1], ht / 0.5) : yt.copy(q[1]) : yt.copy(q[0]), _t.push(yt.r, yt.g, yt.b);
      }
      j.setAttribute("color", new Ce(new Float32Array(_t), 3));
      const ct = new xs({ vertexColors: !0 }), et = new Ae(j, ct);
      return et.position.set((R - (v - 1) / 2) * e.baseSize, N / 2, (y - (d - 1) / 2) * e.baseSize), et.userData = { value: P, x: R, z: y }, et;
    }
    let b = null;
    new ae();
    function V() {
      if (b)
        b.geometry.dispose(), b.material.dispose(), u.remove(b), b = null;
      else {
        const { children: R } = u;
        R.forEach((y) => {
          y instanceof Ae && (y.geometry.dispose(), (Array.isArray(y.material) ? y.material : [y.material]).forEach((U) => U.dispose()));
        }), u.clear();
      }
    }
    function w() {
      var U;
      if (V(), console.log("createHeatmap 调用，props.data =", e.data), Array.isArray(e.data) && e.data.length > 0 && e.data.every((O) => Array.isArray(O)) ? g = e.data : (console.log("数据不合法，使用默认数据"), g = A()), u.clear(), v = g.length, d = ((U = g[0]) == null ? void 0 : U.length) || 0, v === 0 || d === 0) {
        console.warn("数据为空，无法创建热力图");
        return;
      }
      let y = 1 / 0, P = -1 / 0;
      for (let O = 0; O < v; O++) {
        const $ = g[O];
        if (Array.isArray($))
          for (let N = 0; N < d; N++) {
            const j = $[N];
            typeof j == "number" && (j < y && (y = j), j > P && (P = j));
          }
      }
      y === 1 / 0 && (y = 0), P === -1 / 0 && (P = 0);
      for (let O = 0; O < v; O++) {
        const $ = g[O];
        if (Array.isArray($))
          for (let N = 0; N < d; N++) {
            const j = $[N], lt = E(O, N, typeof j == "number" ? j : 0, y, P);
            u.add(lt);
          }
      }
    }
    function C() {
      m = requestAnimationFrame(C), s.value && k(), c && c.update(), l.render(a, o);
    }
    function k() {
      for (let R = 0; R < v; R++)
        for (let y = 0; y < d; y++)
          g[R] && typeof g[R][y] == "number" && (g[R][y] += (Math.random() - 0.5) * 0.3, g[R][y] = Math.min(20, Math.max(1, g[R][y])));
    }
    let S = null;
    function _(R) {
      if (!n.value)
        return;
      const y = n.value.getBoundingClientRect();
      if (R.clientX < y.left || R.clientX > y.right || R.clientY < y.top || R.clientY > y.bottom) {
        r.value.show = !1;
        return;
      }
      S && cancelAnimationFrame(S), S = requestAnimationFrame(() => {
        f.x = (R.clientX - y.left) / y.width * 2 - 1, f.y = -((R.clientY - y.top) / y.height) * 2 + 1, p.setFromCamera(f, o);
        const P = p.intersectObjects(u.children);
        if (P.length) {
          const U = P[0].object, { value: O, x: $, z: N } = U.userData;
          r.value = {
            show: !0,
            x: R.clientX - y.left + 10,
            y: R.clientY - y.top - 30,
            content: `数值: ${O.toFixed(2)}<br>位置: (${$}, ${N})`
          };
        } else
          r.value.show = !1;
      });
    }
    function L() {
      o.aspect = e.width / e.height, o.updateProjectionMatrix(), l.setSize(e.width, e.height);
    }
    return t({
      refresh: w,
      toggleAnimation: () => s.value = !s.value
    }), (R, y) => (Qn(), Ei("div", {
      class: "heatmap-wrapper",
      style: yi({ width: i.width + "px", height: i.height + "px" })
    }, [
      Be(r).show ? (Qn(), Ei("div", {
        key: 0,
        class: "tooltip",
        style: yi({ left: Be(r).x + "px", top: Be(r).y + "px" }),
        innerHTML: Be(r).content
      }, null, 12, Lp)) : uo("", !0),
      Jt("div", {
        ref_key: "containerRef",
        ref: n,
        class: "three-container"
      }, null, 512)
    ], 4));
  }
}), Up = /* @__PURE__ */ pr(Dp, [["__scopeId", "data-v-e5ccf10b"]]), Ip = mr(Up), Np = ["innerHTML"], Fp = /* @__PURE__ */ fs({
  name: "JBHeatMap3D",
  __name: "HeatMap2",
  props: {
    data: {
      type: Array,
      default: () => []
    },
    width: { type: Number, default: 600 },
    height: { type: Number, default: 500 },
    baseSize: { type: Number, default: 0.1 },
    maxHeight: { type: Number, default: 3 },
    enableOrbit: { type: Boolean, default: !0 },
    backgroundColor: { type: String, default: "#0d1b2a" },
    showGridHelper: { type: Boolean, default: !0 },
    showAxesHelper: { type: Boolean, default: !0 },
    gradientColors: {
      type: Array,
      default: () => ["#00008b", "#00ffff", "#ffff00", "#ff0000"]
    },
    autoAnimate: { type: Boolean, default: !1 },
    cameraPosition: {
      type: Object,
      default: () => ({ x: 8, y: 8, z: 8 })
    }
  },
  setup(i, { expose: t }) {
    const e = i, n = me(null), r = me({ show: !1, x: 0, y: 0, content: "" }), s = me(e.autoAnimate);
    let a, o, l, c = null, u, p, f, m = null, g = null;
    const v = [];
    let d = 0, h = 0, A;
    ps(async () => {
      b();
      const { OrbitControls: P } = await import("./OrbitControls-Cn3PDJwR.js");
      e.enableOrbit && (c = new P(o, l.domElement), c.enableDamping = !0, c.dampingFactor = 0.05), _(), window.addEventListener("mousemove", R), window.addEventListener("resize", y), n.value && n.value.addEventListener("mouseleave", () => {
        r.value.show = !1;
      });
    }), co(() => {
      m && cancelAnimationFrame(m), window.removeEventListener("mousemove", R), window.removeEventListener("resize", y), g && (g.geometry.dispose(), g.material.dispose()), A && A.dispose(), l == null || l.dispose();
    });
    function E() {
      console.log("创建分段渐变着色器材质...");
      const P = new B(0, 0, 0.545), U = new B(0, 1, 1), O = new B(1, 1, 0), $ = new B(1, 0, 0), N = new Je({
        uniforms: {
          color0: { value: P },
          color1: { value: U },
          color2: { value: O },
          color3: { value: $ },
          baseSize: { value: e.baseSize },
          maxHeight: { value: e.maxHeight }
        },
        vertexShader: `
            attribute float instanceValue;
            attribute vec3 instancePosition;
            attribute vec3 instanceScale;

            varying float vValue;
            varying float vHeight;
            varying vec3 vPosition;

            void main() {
                vValue = instanceValue;
                vPosition = position;

                // 计算顶点在柱体中的相对高度 (0到1)
                vHeight = (position.y + 0.5); // 立方体原本y范围是-0.5到0.5

                // 应用实例的缩放和位置
                vec3 transformed = position * instanceScale;
                transformed += instancePosition;

                gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
            }
        `,
        fragmentShader: `
            uniform vec3 color0;
            uniform vec3 color1;
            uniform vec3 color2;
            uniform vec3 color3;

            varying float vValue;
            varying float vHeight;
            varying vec3 vPosition;

            void main() {
                // 根据数值大小决定使用多少段渐变
                vec3 finalColor;

                if (vValue < 0.25) {
                    // 低值：只使用第1段颜色 - 深蓝
                    finalColor = color0;
                } else if (vValue < 0.5) {
                    // 中等值：使用前2段渐变 - 深蓝 → 青
                    if (vHeight < 0.5) {
                        finalColor = mix(color0, color1, vHeight / 0.5);
                    } else {
                        finalColor = color1;
                    }
                } else if (vValue < 0.75) {
                    // 较高值：使用前3段渐变 - 深蓝 → 青 → 黄
                    if (vHeight < 0.33) {
                        finalColor = mix(color0, color1, vHeight / 0.33);
                    } else if (vHeight < 0.66) {
                        finalColor = mix(color1, color2, (vHeight - 0.33) / 0.33);
                    } else {
                        finalColor = color2;
                    }
                } else {
                    // 最高值：使用完整的4段渐变 - 深蓝 → 青 → 黄 → 红
                    if (vHeight < 0.25) {
                        finalColor = mix(color0, color1, vHeight / 0.25);
                    } else if (vHeight < 0.5) {
                        finalColor = mix(color1, color2, (vHeight - 0.25) / 0.25);
                    } else if (vHeight < 0.75) {
                        finalColor = mix(color2, color3, (vHeight - 0.5) / 0.25);
                    } else {
                        finalColor = color3;
                    }
                }

                // 简单的光照效果
                vec3 lightDir = normalize(vec3(1.0, 2.0, 0.5));
                vec3 normal;

                // 计算法向量
                if (abs(vPosition.y) > 0.49) {
                    normal = vec3(0.0, sign(vPosition.y), 0.0);
                } else if (abs(vPosition.x) > 0.49) {
                    normal = vec3(sign(vPosition.x), 0.0, 0.0);
                } else {
                    normal = vec3(0.0, 0.0, sign(vPosition.z));
                }

                float diffuse = max(dot(normal, lightDir), 0.3);

                // 顶部更亮
                float topBrightness = vPosition.y > 0.4 ? 1.2 : 1.0;

                gl_FragColor = vec4(finalColor * diffuse * topBrightness, 1.0);
            }
        `,
        transparent: !1
      });
      return console.log("分段渐变着色器材质创建完成"), N;
    }
    function b() {
      console.log("初始化 Three.js...");
      const { backgroundColor: P, showGridHelper: U, showAxesHelper: O, cameraPosition: $, enableOrbit: N } = e;
      a = new ko(), a.background = new Pt(P), console.log("场景创建完成，背景色:", P), o = new Te(75, e.width / e.height, 0.1, 1e3), o.position.set($.x, $.y, $.z), console.log("相机创建完成，位置:", $), l = new Go({
        antialias: !0,
        powerPreference: "high-performance"
      }), l.setSize(e.width, e.height), l.setPixelRatio(Math.min(window.devicePixelRatio, 2)), console.log("渲染器创建完成，尺寸:", e.width, "x", e.height), n.value && (n.value.innerHTML = "", n.value.appendChild(l.domElement), console.log("渲染器DOM添加到容器"));
      const j = new Yo(16777215, 0.8);
      a.add(j);
      const J = new qo(16777215, 0.8);
      J.position.set(5, 10, 5), a.add(J), console.log("光源设置完成"), u = new jn(), a.add(u), console.log("热力图组创建完成"), p = new $o(), f = new zt(), w(), console.log("Three.js 初始化完成");
    }
    function V() {
      return new Rn(1, 1, 1, 1, 8, 1);
    }
    function w() {
      var W;
      console.log("开始创建热力图..."), g && (u.remove(g), g.geometry.dispose(), g.material.dispose(), g = null, console.log("清理旧的热力图实例")), v.length = 0;
      let P = e.data;
      Array.isArray(P) && P.length > 0 && P.every((q) => Array.isArray(q) && q.length > 0) || (console.log("使用默认测试数据"), P = [
        [1, 3, 5, 7, 9],
        [2, 4, 6, 8, 10],
        [3, 5, 7, 9, 11],
        [4, 6, 8, 10, 12],
        [5, 7, 9, 11, 13]
      ]), d = P.length, h = ((W = P[0]) == null ? void 0 : W.length) || 0, console.log(`网格尺寸: ${d} x ${h}`, "数据:", P);
      let O = 1 / 0, $ = -1 / 0;
      for (let q = 0; q < d; q++) {
        const ct = P[q];
        if (Array.isArray(ct))
          for (let et = 0; et < h; et++) {
            const vt = ct[et];
            typeof vt == "number" && (vt < O && (O = vt), vt > $ && ($ = vt));
          }
      }
      O === 1 / 0 && (O = 0), $ === -1 / 0 && ($ = 1), O === $ && ($ = O + 1), console.log(`数据范围: ${O} - ${$}`), A = E();
      const N = V(), j = d * h, J = new Float32Array(j), lt = new Float32Array(j * 3), _t = new Float32Array(j * 3);
      let Et = 0;
      for (let q = 0; q < d; q++) {
        const ct = P[q];
        if (Array.isArray(ct))
          for (let et = 0; et < h; et++) {
            const vt = typeof ct[et] == "number" ? ct[et] : 0, bt = (vt - O) / ($ - O), F = 0.1 + bt * e.maxHeight;
            J[Et] = bt;
            const yt = (q - (d - 1) / 2) * e.baseSize, ht = (et - (h - 1) / 2) * e.baseSize, Wt = F / 2;
            lt[Et * 3] = yt, lt[Et * 3 + 1] = Wt, lt[Et * 3 + 2] = ht, _t[Et * 3] = e.baseSize, _t[Et * 3 + 1] = F, _t[Et * 3 + 2] = e.baseSize, v[Et] = {
              value: vt,
              x: q,
              z: et,
              normalizedValue: bt
            }, Et++;
          }
      }
      console.log(`创建 ${j} 个实例`), N.setAttribute("instanceValue", new Si(J, 1)), N.setAttribute("instancePosition", new Si(lt, 3)), N.setAttribute("instanceScale", new Si(_t, 3)), g = new wp(N, A, j), u.add(g), S(), console.log("热力图创建完成");
    }
    let C = null, k = null;
    function S() {
      C && (a.remove(C), C = null), k && (a.remove(k), k = null);
      const { showGridHelper: P, showAxesHelper: U } = e;
      if (P) {
        const O = Math.max(d, h) * e.baseSize * 1.5, $ = Math.max(d, h);
        C = new jo(O, $, 16777215, 8947848), C.position.y = -0.01, a.add(C);
      }
      if (U) {
        const O = Math.max(d, h) * e.baseSize * 0.8;
        k = new Ko(O), a.add(k);
      }
    }
    function _() {
      m = requestAnimationFrame(_), c && c.update(), l.render(a, o);
    }
    let L = null;
    function R(P) {
      if (!n.value || !g)
        return;
      const U = n.value.getBoundingClientRect();
      if (P.clientX < U.left || P.clientX > U.right || P.clientY < U.top || P.clientY < U.bottom) {
        r.value.show = !1;
        return;
      }
      L && cancelAnimationFrame(L), L = requestAnimationFrame(() => {
        f.x = (P.clientX - U.left) / U.width * 2 - 1, f.y = -((P.clientY - U.top) / U.height) * 2 + 1, p.setFromCamera(f, o);
        const O = p.intersectObject(g);
        if (O.length > 0) {
          const $ = O[0].instanceId;
          if ($ !== void 0 && v[$]) {
            const N = v[$];
            r.value = {
              show: !0,
              x: P.clientX - U.left + 10,
              y: P.clientY - U.top - 30,
              content: `数值: ${N.value.toFixed(2)}<br>位置: (${N.x}, ${N.z})<br>高度: ${(N.normalizedValue * 100).toFixed(1)}%`
            };
          }
        } else
          r.value.show = !1;
      });
    }
    function y() {
      !o || !l || (o.aspect = e.width / e.height, o.updateProjectionMatrix(), l.setSize(e.width, e.height));
    }
    return t({
      refresh: w,
      toggleAnimation: () => s.value = !s.value,
      updateData: (P) => {
        w();
      }
    }), (P, U) => (Qn(), Ei("div", {
      class: "heatmap-wrapper",
      style: yi({ width: i.width + "px", height: i.height + "px" })
    }, [
      Be(r).show ? (Qn(), Ei("div", {
        key: 0,
        class: "tooltip",
        style: yi({ left: Be(r).x + "px", top: Be(r).y + "px" }),
        innerHTML: Be(r).content
      }, null, 12, Np)) : uo("", !0),
      Jt("div", {
        ref_key: "containerRef",
        ref: n,
        class: "three-container"
      }, null, 512)
    ], 4));
  }
}), Op = /* @__PURE__ */ pr(Fp, [["__scopeId", "data-v-977d9a62"]]), Bp = mr(Op), zp = { class: "container" }, Hp = { class: "content" }, Vp = { class: "heatmap-wrapper" }, Gp = { class: "canvas-container" }, kp = {
  class: "coordinates",
  id: "coordinates"
}, Wp = { class: "controls" }, Xp = { class: "control-group" }, qp = { class: "control-row" }, Yp = { class: "control-item" }, $p = { class: "control-item" }, jp = { class: "control-group" }, Kp = {
  class: "data-info",
  id: "dataInfo"
}, Zp = { class: "btn-group" }, _i = 612, vi = 831, Jp = /* @__PURE__ */ Object.assign({ name: "JBHeatMap2D" }, {
  __name: "HeatMap2D",
  setup(i) {
    const t = me(null);
    let e = null;
    const n = me(36), r = me(36), s = me(80), a = me(Math.floor(_i / n.value)), o = me(Math.floor(vi / r.value)), l = me(0), c = me(0), u = sl({
      visible: !1,
      x: 0,
      y: 0,
      col: 0,
      row: 0,
      value: 0,
      rawX: 0,
      rawY: 0
    }), p = me([]), f = ir(() => {
      var R;
      let L = 0;
      for (let y = 0; y < o.value; y++)
        for (let P = 0; P < a.value; P++)
          ((R = p.value[y]) == null ? void 0 : R[P]) > 0 && L++;
      return L;
    }), m = ir(() => {
      var R;
      let L = 0;
      for (let y = 0; y < o.value; y++)
        for (let P = 0; P < a.value; P++)
          ((R = p.value[y]) == null ? void 0 : R[P]) > L && (L = p.value[y][P]);
      return L;
    }), g = ir(() => {
      var y;
      let L = 0, R = 0;
      for (let P = 0; P < o.value; P++)
        for (let U = 0; U < a.value; U++) {
          const O = (y = p.value[P]) == null ? void 0 : y[U];
          O > 0 && (L += O, R++);
        }
      return R > 0 ? L / R : 0;
    });
    function v(L, R) {
      const y = R > 0 ? L / R : 0;
      return y < 0.25 ? "rgb(43, 88, 118)" : y < 0.5 ? "rgb(78, 67, 118)" : y < 0.75 ? "rgb(178, 69, 146)" : "rgb(241, 95, 121)";
    }
    function d() {
      if (e) {
        e.clearRect(0, 0, _i, vi);
        for (let L = 0; L < o.value; L++)
          for (let R = 0; R < a.value; R++) {
            const y = p.value[L][R];
            if (y > 0) {
              const P = R * n.value, U = L * r.value;
              e.fillStyle = v(y, s.value), e.fillRect(P, U, n.value, r.value);
            }
          }
      }
    }
    function h() {
      p.value = Array(o.value).fill().map(() => Array(a.value).fill(0));
    }
    function A(L, R, y, P) {
      for (let U = 0; U < o.value; U++)
        for (let O = 0; O < a.value; O++) {
          const $ = O * n.value + n.value / 2, N = U * r.value + r.value / 2, j = Math.sqrt(($ - L) ** 2 + (N - R) ** 2);
          if (j < y) {
            const J = P * (1 - j / y);
            p.value[U][O] = Math.max(p.value[U][O], Math.floor(J));
          }
        }
    }
    function E(L, R, y, P) {
      const U = Math.floor(L / n.value), O = Math.floor(R / r.value), $ = Math.max(0, U - y), N = Math.min(a.value - 1, U + y), j = Math.max(0, O - y), J = Math.min(o.value - 1, O + y);
      for (let lt = j; lt <= J; lt++)
        for (let _t = $; _t <= N; _t++) {
          const Et = Math.sqrt((_t - U) ** 2 + (lt - O) ** 2);
          if (Et < y) {
            const W = P * (1 - Et / y);
            p.value[lt][_t] = Math.min(100, Math.max(p.value[lt][_t], Math.floor(W)));
          }
        }
      d();
    }
    function b() {
      for (let L = 0; L < o.value; L++)
        for (let R = 0; R < a.value; R++)
          p.value[L][R] = Math.random() < 0.1 ? Math.floor(Math.random() * 100) : 0;
      console.log("数据已生成", p.value), d();
    }
    function V() {
      w(), A(50, 50, 30, 90), A(150, 100, 25, 80), A(80, 200, 35, 95), A(180, 250, 40, 85), d();
    }
    function w() {
      for (let L = 0; L < o.value; L++)
        for (let R = 0; R < a.value; R++)
          p.value[L][R] = 0;
      d();
    }
    function C() {
      var P;
      if (n.value < 1 || n.value > 100 || r.value < 1 || r.value > 100) {
        alert("请输入有效的热力块尺寸（1-100）");
        return;
      }
      const L = JSON.parse(JSON.stringify(p.value)), R = a.value, y = o.value;
      a.value = Math.floor(_i / n.value), o.value = Math.floor(vi / r.value), h();
      for (let U = 0; U < Math.min(o.value, y.value); U++)
        for (let O = 0; O < Math.min(a.value, R); O++)
          p.value[U][O] = ((P = L[U]) == null ? void 0 : P[O]) || 0;
      d();
    }
    let k = !1;
    function S(L) {
      const R = t.value.getBoundingClientRect(), y = L.clientX - R.left, P = L.clientY - R.top;
      l.value = Math.floor(y), c.value = Math.floor(P);
      const U = Math.floor(y / n.value), O = Math.floor(P / r.value);
      U >= 0 && U < a.value && O >= 0 && O < o.value ? (u.visible = !0, u.col = U, u.row = O, u.value = p.value[O][U], u.rawX = y, u.rawY = P, u.x = L.clientX + 15, u.y = L.clientY - 30) : u.visible = !1, k && E(y, P, 5, 60);
    }
    function _() {
      k = !1, u.visible = !1;
    }
    return al(s, () => d()), ps(() => {
      e = t.value.getContext("2d"), a.value = Math.floor(_i / n.value), o.value = Math.floor(vi / r.value), h(), V();
    }), (L, R) => {
      const y = lo("el-input"), P = ho;
      return Qn(), Ei("div", zp, [
        Jt("div", Hp, [
          Jt("div", Vp, [
            Jt("div", Gp, [
              Jt("canvas", {
                ref_key: "heatmapCanvas",
                ref: t,
                id: "heatmapCanvas",
                width: "612",
                height: "831",
                onMousedown: R[0] || (R[0] = (...U) => L.handleMouseDown && L.handleMouseDown(...U)),
                onMousemove: S,
                onMouseup: R[1] || (R[1] = (...U) => L.handleMouseUp && L.handleMouseUp(...U)),
                onMouseleave: _,
                onContextmenu: R[2] || (R[2] = ol(() => {
                }, ["prevent"]))
              }, null, 544),
              Jt("div", kp, "X: " + oe(l.value) + ", Y: " + oe(c.value), 1),
              Jt("div", {
                class: ll(["tooltip", { show: u.visible }]),
                style: yi({ left: u.x + "px", top: u.y + "px" })
              }, [
                R[5] || (R[5] = Jt("h3", null, "热力块信息", -1)),
                Jt("p", null, "位置: (" + oe(u.col) + ", " + oe(u.row) + ")", 1),
                Jt("p", null, "值: " + oe(u.value), 1),
                Jt("p", null, "坐标: (" + oe(Math.floor(u.rawX)) + ", " + oe(Math.floor(u.rawY)) + ")", 1)
              ], 6)
            ])
          ])
        ]),
        Jt("div", Wp, [
          Jt("div", Xp, [
            Jt("div", qp, [
              Jt("div", Yp, [
                R[6] || (R[6] = Jt("label", { for: "blockWidth" }, "热力块宽度 (px)", -1)),
                Cn(y, {
                  type: "number",
                  id: "blockWidth",
                  min: "1",
                  max: "100",
                  modelValue: n.value,
                  "onUpdate:modelValue": R[3] || (R[3] = (U) => n.value = U),
                  modelModifiers: { number: !0 }
                }, null, 8, ["modelValue"])
              ]),
              Jt("div", $p, [
                R[7] || (R[7] = Jt("label", { for: "blockHeight" }, "热力块高度 (px)", -1)),
                Cn(y, {
                  type: "number",
                  id: "blockHeight",
                  min: "1",
                  max: "100",
                  modelValue: r.value,
                  "onUpdate:modelValue": R[4] || (R[4] = (U) => r.value = U),
                  modelModifiers: { number: !0 }
                }, null, 8, ["modelValue"])
              ])
            ]),
            Cn(P, {
              type: "primary",
              onClick: C
            }, {
              default: xi(() => [...R[8] || (R[8] = [
                Li("应用热力块尺寸", -1)
              ])]),
              _: 1
            })
          ]),
          Jt("div", jp, [
            Jt("div", Kp, " 热力图尺寸: " + oe(_i) + "px × " + oe(vi) + "px、 热力块数量: " + oe(a.value.value) + " × " + oe(o.value.value) + " (共" + oe(a.value.value * o.value.value) + "个)、 每个热力块尺寸: " + oe(n.value) + "px × " + oe(r.value) + "px、 活跃热力块: " + oe(f.value) + "、 最大值: " + oe(m.value) + "、 平均值: " + oe(g.value.toFixed(2)), 1)
          ]),
          Jt("div", Zp, [
            Cn(P, {
              type: "primary",
              onClick: b
            }, {
              default: xi(() => [...R[9] || (R[9] = [
                Li("随机生成数据", -1)
              ])]),
              _: 1
            }),
            Cn(P, {
              type: "primary",
              onClick: V
            }, {
              default: xi(() => [...R[10] || (R[10] = [
                Li("重置数据", -1)
              ])]),
              _: 1
            }),
            Cn(P, {
              type: "primary",
              onClick: w
            }, {
              default: xi(() => [...R[11] || (R[11] = [
                Li("清除数据", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
}), Qp = /* @__PURE__ */ pr(Jp, [["__scopeId", "data-v-481b569c"]]), tm = mr(Qp), oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  JBHeatMap2: Bp,
  JBHeatMap2D: tm,
  WyButton: ul,
  WyHeatMap: Ip
}, Symbol.toStringTag, { value: "Module" })), am = (i) => {
  for (const t in oo)
    i.use(oo[t]);
};
export {
  ri as E,
  Bp as J,
  nm as M,
  Mn as P,
  wi as Q,
  _s as R,
  sm as S,
  im as T,
  B as V,
  ul as W,
  zt as a,
  rm as b,
  Ip as c,
  tm as d,
  am as i
};
