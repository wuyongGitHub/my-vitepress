import { defineComponent as ka, useAttrs as wo, computed as Ro, resolveComponent as Co, createBlock as Po, openBlock as Hr, mergeProps as Lo, unref as Hn, withCtx as Do, renderSlot as Uo, ref as sr, onMounted as Io, onUnmounted as No, createElementBlock as ds, normalizeStyle as fs, createCommentVNode as Fo, createElementVNode as Oo } from "vue";
const Bo = /* @__PURE__ */ ka({
  name: "WyButton",
  __name: "Button",
  setup(i) {
    const t = wo(), e = Ro(() => ["wy-button"]), n = (r) => {
      var s;
      typeof t.onClick == "function" && t.onClick(r), console.log("[Button Click]", {
        type: t.type,
        text: (s = r.target.textContent) == null ? void 0 : s.trim()
      });
    };
    return (r, s) => {
      const a = Co("ElButton");
      return Hr(), Po(a, Lo(Hn(t), {
        class: [Hn(t).class, e.value],
        onClick: n
      }), {
        default: Do(() => [
          Uo(r.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 16, ["class"]);
    };
  }
}), Wa = (i, t) => {
  const e = i.__vccOpts || i;
  for (const [n, r] of t)
    e[n] = r;
  return e;
}, zo = /* @__PURE__ */ Wa(Bo, [["__scopeId", "data-v-1a19201c"]]), Xa = (i) => (i.install = (t) => {
  const e = i.name;
  e && t.component(e, i);
}, i), Ho = Xa(zo);
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const jr = "164", gp = { ROTATE: 0, DOLLY: 1, PAN: 2 }, vp = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Vo = 0, ps = 1, Go = 2, qa = 1, ko = 2, ke = 3, sn = 0, me = 1, We = 2, nn = 0, Gn = 1, ms = 2, _s = 3, gs = 4, Wo = 5, vn = 100, Xo = 101, qo = 102, Yo = 103, Ko = 104, $o = 200, jo = 201, Zo = 202, Jo = 203, Vr = 204, Gr = 205, Qo = 206, tl = 207, el = 208, nl = 209, il = 210, rl = 211, sl = 212, al = 213, ol = 214, ll = 0, cl = 1, ul = 2, Gi = 3, hl = 4, dl = 5, fl = 6, pl = 7, Ya = 0, ml = 1, _l = 2, rn = 0, gl = 1, vl = 2, xl = 3, Ml = 4, Sl = 5, El = 6, yl = 7, Ka = 300, Xn = 301, qn = 302, kr = 303, Wr = 304, ji = 306, Xr = 1e3, Mn = 1001, qr = 1002, Te = 1003, Tl = 1004, _i = 1005, Re = 1006, ar = 1007, Sn = 1008, an = 1009, Al = 1010, bl = 1011, $a = 1012, ja = 1013, Yn = 1014, en = 1015, Zi = 1016, Za = 1017, Ja = 1018, ci = 1020, wl = 35902, Rl = 1021, Cl = 1022, Ne = 1023, Pl = 1024, Ll = 1025, kn = 1026, li = 1027, Dl = 1028, Qa = 1029, Ul = 1030, to = 1031, eo = 1033, or = 33776, lr = 33777, cr = 33778, ur = 33779, vs = 35840, xs = 35841, Ms = 35842, Ss = 35843, Es = 36196, ys = 37492, Ts = 37496, As = 37808, bs = 37809, ws = 37810, Rs = 37811, Cs = 37812, Ps = 37813, Ls = 37814, Ds = 37815, Us = 37816, Is = 37817, Ns = 37818, Fs = 37819, Os = 37820, Bs = 37821, hr = 36492, zs = 36494, Hs = 36495, Il = 36283, Vs = 36284, Gs = 36285, ks = 36286, Nl = 3200, Fl = 3201, Ol = 0, Bl = 1, tn = "", De = "srgb", ln = "srgb-linear", Zr = "display-p3", Ji = "display-p3-linear", ki = "linear", Yt = "srgb", Wi = "rec709", Xi = "p3", yn = 7680, Ws = 519, zl = 512, Hl = 513, Vl = 514, no = 515, Gl = 516, kl = 517, Wl = 518, Xl = 519, Xs = 35044, qs = "300 es", Xe = 2e3, qi = 2001;
class $n {
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
const ce = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], Hi = Math.PI / 180, Yr = 180 / Math.PI;
function ui() {
  const i = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (ce[i & 255] + ce[i >> 8 & 255] + ce[i >> 16 & 255] + ce[i >> 24 & 255] + "-" + ce[t & 255] + ce[t >> 8 & 255] + "-" + ce[t >> 16 & 15 | 64] + ce[t >> 24 & 255] + "-" + ce[e & 63 | 128] + ce[e >> 8 & 255] + "-" + ce[e >> 16 & 255] + ce[e >> 24 & 255] + ce[n & 255] + ce[n >> 8 & 255] + ce[n >> 16 & 255] + ce[n >> 24 & 255]).toLowerCase();
}
function fe(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function ql(i, t) {
  return (i % t + t) % t;
}
function dr(i, t, e) {
  return (1 - e) * i + e * t;
}
function ti(i, t) {
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
function pe(i, t) {
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
const xp = {
  DEG2RAD: Hi
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
    return Math.acos(fe(n, -1, 1));
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
class bt {
  constructor(t, e, n, r, s, a, o, l, c) {
    bt.prototype.isMatrix3 = !0, this.elements = [
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
    const n = t.elements, r = e.elements, s = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], u = n[4], p = n[7], f = n[2], m = n[5], _ = n[8], x = r[0], d = r[3], h = r[6], A = r[1], E = r[4], T = r[7], z = r[2], w = r[5], R = r[8];
    return s[0] = a * x + o * A + l * z, s[3] = a * d + o * E + l * w, s[6] = a * h + o * T + l * R, s[1] = c * x + u * A + p * z, s[4] = c * d + u * E + p * w, s[7] = c * h + u * T + p * R, s[2] = f * x + m * A + _ * z, s[5] = f * d + m * E + _ * w, s[8] = f * h + m * T + _ * R, this;
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
    const t = this.elements, e = t[0], n = t[1], r = t[2], s = t[3], a = t[4], o = t[5], l = t[6], c = t[7], u = t[8], p = u * a - o * c, f = o * l - u * s, m = c * s - a * l, _ = e * p + n * f + r * m;
    if (_ === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const x = 1 / _;
    return t[0] = p * x, t[1] = (r * c - u * n) * x, t[2] = (o * n - r * a) * x, t[3] = f * x, t[4] = (u * e - r * l) * x, t[5] = (r * s - o * e) * x, t[6] = m * x, t[7] = (n * l - c * e) * x, t[8] = (a * e - n * s) * x, this;
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
    return this.premultiply(fr.makeScale(t, e)), this;
  }
  rotate(t) {
    return this.premultiply(fr.makeRotation(-t)), this;
  }
  translate(t, e) {
    return this.premultiply(fr.makeTranslation(t, e)), this;
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
const fr = /* @__PURE__ */ new bt();
function io(i) {
  for (let t = i.length - 1; t >= 0; --t)
    if (i[t] >= 65535)
      return !0;
  return !1;
}
function Yi(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function Yl() {
  const i = Yi("canvas");
  return i.style.display = "block", i;
}
const Ys = {};
function Kl(i) {
  i in Ys || (Ys[i] = !0, console.warn(i));
}
const Ks = /* @__PURE__ */ new bt().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), $s = /* @__PURE__ */ new bt().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), gi = {
  [ln]: {
    transfer: ki,
    primaries: Wi,
    toReference: (i) => i,
    fromReference: (i) => i
  },
  [De]: {
    transfer: Yt,
    primaries: Wi,
    toReference: (i) => i.convertSRGBToLinear(),
    fromReference: (i) => i.convertLinearToSRGB()
  },
  [Ji]: {
    transfer: ki,
    primaries: Xi,
    toReference: (i) => i.applyMatrix3($s),
    fromReference: (i) => i.applyMatrix3(Ks)
  },
  [Zr]: {
    transfer: Yt,
    primaries: Xi,
    toReference: (i) => i.convertSRGBToLinear().applyMatrix3($s),
    fromReference: (i) => i.applyMatrix3(Ks).convertLinearToSRGB()
  }
}, $l = /* @__PURE__ */ new Set([ln, Ji]), Wt = {
  enabled: !0,
  _workingColorSpace: ln,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(i) {
    if (!$l.has(i))
      throw new Error(`Unsupported working color space, "${i}".`);
    this._workingColorSpace = i;
  },
  convert: function(i, t, e) {
    if (this.enabled === !1 || t === e || !t || !e)
      return i;
    const n = gi[t].toReference, r = gi[e].fromReference;
    return r(n(i));
  },
  fromWorkingColorSpace: function(i, t) {
    return this.convert(i, this._workingColorSpace, t);
  },
  toWorkingColorSpace: function(i, t) {
    return this.convert(i, t, this._workingColorSpace);
  },
  getPrimaries: function(i) {
    return gi[i].primaries;
  },
  getTransfer: function(i) {
    return i === tn ? ki : gi[i].transfer;
  }
};
function Wn(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function pr(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let Tn;
class jl {
  static getDataURL(t) {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u")
      return t.src;
    let e;
    if (t instanceof HTMLCanvasElement)
      e = t;
    else {
      Tn === void 0 && (Tn = Yi("canvas")), Tn.width = t.width, Tn.height = t.height;
      const n = Tn.getContext("2d");
      t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), e = Tn;
    }
    return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", 0.6)) : e.toDataURL("image/png");
  }
  static sRGBToLinear(t) {
    if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
      const e = Yi("canvas");
      e.width = t.width, e.height = t.height;
      const n = e.getContext("2d");
      n.drawImage(t, 0, 0, t.width, t.height);
      const r = n.getImageData(0, 0, t.width, t.height), s = r.data;
      for (let a = 0; a < s.length; a++)
        s[a] = Wn(s[a] / 255) * 255;
      return n.putImageData(r, 0, 0), e;
    } else if (t.data) {
      const e = t.data.slice(0);
      for (let n = 0; n < e.length; n++)
        e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[n] = Math.floor(Wn(e[n] / 255) * 255) : e[n] = Wn(e[n]);
      return {
        data: e,
        width: t.width,
        height: t.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
  }
}
let Zl = 0;
class ro {
  constructor(t = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: Zl++ }), this.uuid = ui(), this.data = t, this.dataReady = !0, this.version = 0;
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
          r[a].isDataTexture ? s.push(mr(r[a].image)) : s.push(mr(r[a]));
      } else
        s = mr(r);
      n.url = s;
    }
    return e || (t.images[this.uuid] = n), n;
  }
}
function mr(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? jl.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Jl = 0;
class _e extends $n {
  constructor(t = _e.DEFAULT_IMAGE, e = _e.DEFAULT_MAPPING, n = Mn, r = Mn, s = Re, a = Sn, o = Ne, l = an, c = _e.DEFAULT_ANISOTROPY, u = tn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Jl++ }), this.uuid = ui(), this.name = "", this.source = new ro(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new zt(0, 0), this.repeat = new zt(1, 1), this.center = new zt(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new bt(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
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
    if (this.mapping !== Ka)
      return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1)
      switch (this.wrapS) {
        case Xr:
          t.x = t.x - Math.floor(t.x);
          break;
        case Mn:
          t.x = t.x < 0 ? 0 : 1;
          break;
        case qr:
          Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
          break;
      }
    if (t.y < 0 || t.y > 1)
      switch (this.wrapT) {
        case Xr:
          t.y = t.y - Math.floor(t.y);
          break;
        case Mn:
          t.y = t.y < 0 ? 0 : 1;
          break;
        case qr:
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
_e.DEFAULT_MAPPING = Ka;
_e.DEFAULT_ANISOTROPY = 1;
class re {
  constructor(t = 0, e = 0, n = 0, r = 1) {
    re.prototype.isVector4 = !0, this.x = t, this.y = e, this.z = n, this.w = r;
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
    const l = t.elements, c = l[0], u = l[4], p = l[8], f = l[1], m = l[5], _ = l[9], x = l[2], d = l[6], h = l[10];
    if (Math.abs(u - f) < 0.01 && Math.abs(p - x) < 0.01 && Math.abs(_ - d) < 0.01) {
      if (Math.abs(u + f) < 0.1 && Math.abs(p + x) < 0.1 && Math.abs(_ + d) < 0.1 && Math.abs(c + m + h - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      e = Math.PI;
      const E = (c + 1) / 2, T = (m + 1) / 2, z = (h + 1) / 2, w = (u + f) / 4, R = (p + x) / 4, k = (_ + d) / 4;
      return E > T && E > z ? E < 0.01 ? (n = 0, r = 0.707106781, s = 0.707106781) : (n = Math.sqrt(E), r = w / n, s = R / n) : T > z ? T < 0.01 ? (n = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(T), n = w / r, s = k / r) : z < 0.01 ? (n = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(z), n = R / s, r = k / s), this.set(n, r, s, e), this;
    }
    let A = Math.sqrt((d - _) * (d - _) + (p - x) * (p - x) + (f - u) * (f - u));
    return Math.abs(A) < 1e-3 && (A = 1), this.x = (d - _) / A, this.y = (p - x) / A, this.z = (f - u) / A, this.w = Math.acos((c + m + h - 1) / 2), this;
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
class Ql extends $n {
  constructor(t = 1, e = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = t, this.height = e, this.depth = 1, this.scissor = new re(0, 0, t, e), this.scissorTest = !1, this.viewport = new re(0, 0, t, e);
    const r = { width: t, height: e, depth: 1 };
    n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: Re,
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
    return this.texture.source = new ro(e), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.resolveDepthBuffer = t.resolveDepthBuffer, this.resolveStencilBuffer = t.resolveStencilBuffer, t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class En extends Ql {
  constructor(t = 1, e = 1, n = {}) {
    super(t, e, n), this.isWebGLRenderTarget = !0;
  }
}
class so extends _e {
  constructor(t = null, e = 1, n = 1, r = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: t, width: e, height: n, depth: r }, this.magFilter = Te, this.minFilter = Te, this.wrapR = Mn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class tc extends _e {
  constructor(t = null, e = 1, n = 1, r = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: t, width: e, height: n, depth: r }, this.magFilter = Te, this.minFilter = Te, this.wrapR = Mn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class hi {
  constructor(t = 0, e = 0, n = 0, r = 1) {
    this.isQuaternion = !0, this._x = t, this._y = e, this._z = n, this._w = r;
  }
  static slerpFlat(t, e, n, r, s, a, o) {
    let l = n[r + 0], c = n[r + 1], u = n[r + 2], p = n[r + 3];
    const f = s[a + 0], m = s[a + 1], _ = s[a + 2], x = s[a + 3];
    if (o === 0) {
      t[e + 0] = l, t[e + 1] = c, t[e + 2] = u, t[e + 3] = p;
      return;
    }
    if (o === 1) {
      t[e + 0] = f, t[e + 1] = m, t[e + 2] = _, t[e + 3] = x;
      return;
    }
    if (p !== x || l !== f || c !== m || u !== _) {
      let d = 1 - o;
      const h = l * f + c * m + u * _ + p * x, A = h >= 0 ? 1 : -1, E = 1 - h * h;
      if (E > Number.EPSILON) {
        const z = Math.sqrt(E), w = Math.atan2(z, h * A);
        d = Math.sin(d * w) / z, o = Math.sin(o * w) / z;
      }
      const T = o * A;
      if (l = l * d + f * T, c = c * d + m * T, u = u * d + _ * T, p = p * d + x * T, d === 1 - o) {
        const z = 1 / Math.sqrt(l * l + c * c + u * u + p * p);
        l *= z, c *= z, u *= z, p *= z;
      }
    }
    t[e] = l, t[e + 1] = c, t[e + 2] = u, t[e + 3] = p;
  }
  static multiplyQuaternionsFlat(t, e, n, r, s, a) {
    const o = n[r], l = n[r + 1], c = n[r + 2], u = n[r + 3], p = s[a], f = s[a + 1], m = s[a + 2], _ = s[a + 3];
    return t[e] = o * _ + u * p + l * m - c * f, t[e + 1] = l * _ + u * f + c * p - o * m, t[e + 2] = c * _ + u * m + o * f - l * p, t[e + 3] = u * _ - o * p - l * f - c * m, t;
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
    const n = t._x, r = t._y, s = t._z, a = t._order, o = Math.cos, l = Math.sin, c = o(n / 2), u = o(r / 2), p = o(s / 2), f = l(n / 2), m = l(r / 2), _ = l(s / 2);
    switch (a) {
      case "XYZ":
        this._x = f * u * p + c * m * _, this._y = c * m * p - f * u * _, this._z = c * u * _ + f * m * p, this._w = c * u * p - f * m * _;
        break;
      case "YXZ":
        this._x = f * u * p + c * m * _, this._y = c * m * p - f * u * _, this._z = c * u * _ - f * m * p, this._w = c * u * p + f * m * _;
        break;
      case "ZXY":
        this._x = f * u * p - c * m * _, this._y = c * m * p + f * u * _, this._z = c * u * _ + f * m * p, this._w = c * u * p - f * m * _;
        break;
      case "ZYX":
        this._x = f * u * p - c * m * _, this._y = c * m * p + f * u * _, this._z = c * u * _ - f * m * p, this._w = c * u * p + f * m * _;
        break;
      case "YZX":
        this._x = f * u * p + c * m * _, this._y = c * m * p + f * u * _, this._z = c * u * _ - f * m * p, this._w = c * u * p - f * m * _;
        break;
      case "XZY":
        this._x = f * u * p - c * m * _, this._y = c * m * p - f * u * _, this._z = c * u * _ + f * m * p, this._w = c * u * p + f * m * _;
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
    return 2 * Math.acos(Math.abs(fe(this.dot(t), -1, 1)));
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
class D {
  constructor(t = 0, e = 0, n = 0) {
    D.prototype.isVector3 = !0, this.x = t, this.y = e, this.z = n;
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
    return this.applyQuaternion(js.setFromEuler(t));
  }
  applyAxisAngle(t, e) {
    return this.applyQuaternion(js.setFromAxisAngle(t, e));
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
    return _r.copy(this).projectOnVector(t), this.sub(_r);
  }
  reflect(t) {
    return this.sub(_r.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0)
      return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(fe(n, -1, 1));
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
const _r = /* @__PURE__ */ new D(), js = /* @__PURE__ */ new hi();
class di {
  constructor(t = new D(1 / 0, 1 / 0, 1 / 0), e = new D(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = t, this.max = e;
  }
  set(t, e) {
    return this.min.copy(t), this.max.copy(e), this;
  }
  setFromArray(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e += 3)
      this.expandByPoint(Ae.fromArray(t, e));
    return this;
  }
  setFromBufferAttribute(t) {
    this.makeEmpty();
    for (let e = 0, n = t.count; e < n; e++)
      this.expandByPoint(Ae.fromBufferAttribute(t, e));
    return this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e++)
      this.expandByPoint(t[e]);
    return this;
  }
  setFromCenterAndSize(t, e) {
    const n = Ae.copy(e).multiplyScalar(0.5);
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
          t.isMesh === !0 ? t.getVertexPosition(a, Ae) : Ae.fromBufferAttribute(s, a), Ae.applyMatrix4(t.matrixWorld), this.expandByPoint(Ae);
      else
        t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), vi.copy(t.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), vi.copy(n.boundingBox)), vi.applyMatrix4(t.matrixWorld), this.union(vi);
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
    return this.clampPoint(t.center, Ae), Ae.distanceToSquared(t.center) <= t.radius * t.radius;
  }
  intersectsPlane(t) {
    let e, n;
    return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant;
  }
  intersectsTriangle(t) {
    if (this.isEmpty())
      return !1;
    this.getCenter(ei), xi.subVectors(this.max, ei), An.subVectors(t.a, ei), bn.subVectors(t.b, ei), wn.subVectors(t.c, ei), Ke.subVectors(bn, An), $e.subVectors(wn, bn), un.subVectors(An, wn);
    let e = [
      0,
      -Ke.z,
      Ke.y,
      0,
      -$e.z,
      $e.y,
      0,
      -un.z,
      un.y,
      Ke.z,
      0,
      -Ke.x,
      $e.z,
      0,
      -$e.x,
      un.z,
      0,
      -un.x,
      -Ke.y,
      Ke.x,
      0,
      -$e.y,
      $e.x,
      0,
      -un.y,
      un.x,
      0
    ];
    return !gr(e, An, bn, wn, xi) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !gr(e, An, bn, wn, xi)) ? !1 : (Mi.crossVectors(Ke, $e), e = [Mi.x, Mi.y, Mi.z], gr(e, An, bn, wn, xi));
  }
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return this.clampPoint(t, Ae).distanceTo(t);
  }
  getBoundingSphere(t) {
    return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = this.getSize(Ae).length() * 0.5), t;
  }
  intersect(t) {
    return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  applyMatrix4(t) {
    return this.isEmpty() ? this : (Be[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), Be[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), Be[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), Be[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), Be[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), Be[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), Be[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), Be[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(Be), this);
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
}
const Be = [
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D()
], Ae = /* @__PURE__ */ new D(), vi = /* @__PURE__ */ new di(), An = /* @__PURE__ */ new D(), bn = /* @__PURE__ */ new D(), wn = /* @__PURE__ */ new D(), Ke = /* @__PURE__ */ new D(), $e = /* @__PURE__ */ new D(), un = /* @__PURE__ */ new D(), ei = /* @__PURE__ */ new D(), xi = /* @__PURE__ */ new D(), Mi = /* @__PURE__ */ new D(), hn = /* @__PURE__ */ new D();
function gr(i, t, e, n, r) {
  for (let s = 0, a = i.length - 3; s <= a; s += 3) {
    hn.fromArray(i, s);
    const o = r.x * Math.abs(hn.x) + r.y * Math.abs(hn.y) + r.z * Math.abs(hn.z), l = t.dot(hn), c = e.dot(hn), u = n.dot(hn);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > o)
      return !1;
  }
  return !0;
}
const ec = /* @__PURE__ */ new di(), ni = /* @__PURE__ */ new D(), vr = /* @__PURE__ */ new D();
class Qi {
  constructor(t = new D(), e = -1) {
    this.isSphere = !0, this.center = t, this.radius = e;
  }
  set(t, e) {
    return this.center.copy(t), this.radius = e, this;
  }
  setFromPoints(t, e) {
    const n = this.center;
    e !== void 0 ? n.copy(e) : ec.setFromPoints(t).getCenter(n);
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
    ni.subVectors(t, this.center);
    const e = ni.lengthSq();
    if (e > this.radius * this.radius) {
      const n = Math.sqrt(e), r = (n - this.radius) * 0.5;
      this.center.addScaledVector(ni, r / n), this.radius += r;
    }
    return this;
  }
  union(t) {
    return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === !0 ? this.radius = Math.max(this.radius, t.radius) : (vr.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(ni.copy(t.center).add(vr)), this.expandByPoint(ni.copy(t.center).sub(vr))), this);
  }
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const ze = /* @__PURE__ */ new D(), xr = /* @__PURE__ */ new D(), Si = /* @__PURE__ */ new D(), je = /* @__PURE__ */ new D(), Mr = /* @__PURE__ */ new D(), Ei = /* @__PURE__ */ new D(), Sr = /* @__PURE__ */ new D();
class Jr {
  constructor(t = new D(), e = new D(0, 0, -1)) {
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
    return this.origin.copy(this.at(t, ze)), this;
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
    const e = ze.subVectors(t, this.origin).dot(this.direction);
    return e < 0 ? this.origin.distanceToSquared(t) : (ze.copy(this.origin).addScaledVector(this.direction, e), ze.distanceToSquared(t));
  }
  distanceSqToSegment(t, e, n, r) {
    xr.copy(t).add(e).multiplyScalar(0.5), Si.copy(e).sub(t).normalize(), je.copy(this.origin).sub(xr);
    const s = t.distanceTo(e) * 0.5, a = -this.direction.dot(Si), o = je.dot(this.direction), l = -je.dot(Si), c = je.lengthSq(), u = Math.abs(1 - a * a);
    let p, f, m, _;
    if (u > 0)
      if (p = a * l - o, f = a * o - l, _ = s * u, p >= 0)
        if (f >= -_)
          if (f <= _) {
            const x = 1 / u;
            p *= x, f *= x, m = p * (p + a * f + 2 * o) + f * (a * p + f + 2 * l) + c;
          } else
            f = s, p = Math.max(0, -(a * f + o)), m = -p * p + f * (f + 2 * l) + c;
        else
          f = -s, p = Math.max(0, -(a * f + o)), m = -p * p + f * (f + 2 * l) + c;
      else
        f <= -_ ? (p = Math.max(0, -(-a * s + o)), f = p > 0 ? -s : Math.min(Math.max(-s, -l), s), m = -p * p + f * (f + 2 * l) + c) : f <= _ ? (p = 0, f = Math.min(Math.max(-s, -l), s), m = f * (f + 2 * l) + c) : (p = Math.max(0, -(a * s + o)), f = p > 0 ? s : Math.min(Math.max(-s, -l), s), m = -p * p + f * (f + 2 * l) + c);
    else
      f = a > 0 ? -s : s, p = Math.max(0, -(a * f + o)), m = -p * p + f * (f + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, p), r && r.copy(xr).addScaledVector(Si, f), m;
  }
  intersectSphere(t, e) {
    ze.subVectors(t.center, this.origin);
    const n = ze.dot(this.direction), r = ze.dot(ze) - n * n, s = t.radius * t.radius;
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
    return this.intersectBox(t, ze) !== null;
  }
  intersectTriangle(t, e, n, r, s) {
    Mr.subVectors(e, t), Ei.subVectors(n, t), Sr.crossVectors(Mr, Ei);
    let a = this.direction.dot(Sr), o;
    if (a > 0) {
      if (r)
        return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    je.subVectors(this.origin, t);
    const l = o * this.direction.dot(Ei.crossVectors(je, Ei));
    if (l < 0)
      return null;
    const c = o * this.direction.dot(Mr.cross(je));
    if (c < 0 || l + c > a)
      return null;
    const u = -o * je.dot(Sr);
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
class $t {
  constructor(t, e, n, r, s, a, o, l, c, u, p, f, m, _, x, d) {
    $t.prototype.isMatrix4 = !0, this.elements = [
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
    ], t !== void 0 && this.set(t, e, n, r, s, a, o, l, c, u, p, f, m, _, x, d);
  }
  set(t, e, n, r, s, a, o, l, c, u, p, f, m, _, x, d) {
    const h = this.elements;
    return h[0] = t, h[4] = e, h[8] = n, h[12] = r, h[1] = s, h[5] = a, h[9] = o, h[13] = l, h[2] = c, h[6] = u, h[10] = p, h[14] = f, h[3] = m, h[7] = _, h[11] = x, h[15] = d, this;
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
    return new $t().fromArray(this.elements);
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
    const e = this.elements, n = t.elements, r = 1 / Rn.setFromMatrixColumn(t, 0).length(), s = 1 / Rn.setFromMatrixColumn(t, 1).length(), a = 1 / Rn.setFromMatrixColumn(t, 2).length();
    return e[0] = n[0] * r, e[1] = n[1] * r, e[2] = n[2] * r, e[3] = 0, e[4] = n[4] * s, e[5] = n[5] * s, e[6] = n[6] * s, e[7] = 0, e[8] = n[8] * a, e[9] = n[9] * a, e[10] = n[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromEuler(t) {
    const e = this.elements, n = t.x, r = t.y, s = t.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(r), c = Math.sin(r), u = Math.cos(s), p = Math.sin(s);
    if (t.order === "XYZ") {
      const f = a * u, m = a * p, _ = o * u, x = o * p;
      e[0] = l * u, e[4] = -l * p, e[8] = c, e[1] = m + _ * c, e[5] = f - x * c, e[9] = -o * l, e[2] = x - f * c, e[6] = _ + m * c, e[10] = a * l;
    } else if (t.order === "YXZ") {
      const f = l * u, m = l * p, _ = c * u, x = c * p;
      e[0] = f + x * o, e[4] = _ * o - m, e[8] = a * c, e[1] = a * p, e[5] = a * u, e[9] = -o, e[2] = m * o - _, e[6] = x + f * o, e[10] = a * l;
    } else if (t.order === "ZXY") {
      const f = l * u, m = l * p, _ = c * u, x = c * p;
      e[0] = f - x * o, e[4] = -a * p, e[8] = _ + m * o, e[1] = m + _ * o, e[5] = a * u, e[9] = x - f * o, e[2] = -a * c, e[6] = o, e[10] = a * l;
    } else if (t.order === "ZYX") {
      const f = a * u, m = a * p, _ = o * u, x = o * p;
      e[0] = l * u, e[4] = _ * c - m, e[8] = f * c + x, e[1] = l * p, e[5] = x * c + f, e[9] = m * c - _, e[2] = -c, e[6] = o * l, e[10] = a * l;
    } else if (t.order === "YZX") {
      const f = a * l, m = a * c, _ = o * l, x = o * c;
      e[0] = l * u, e[4] = x - f * p, e[8] = _ * p + m, e[1] = p, e[5] = a * u, e[9] = -o * u, e[2] = -c * u, e[6] = m * p + _, e[10] = f - x * p;
    } else if (t.order === "XZY") {
      const f = a * l, m = a * c, _ = o * l, x = o * c;
      e[0] = l * u, e[4] = -p, e[8] = c * u, e[1] = f * p + x, e[5] = a * u, e[9] = m * p - _, e[2] = _ * p - m, e[6] = o * u, e[10] = x * p + f;
    }
    return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromQuaternion(t) {
    return this.compose(nc, t, ic);
  }
  lookAt(t, e, n) {
    const r = this.elements;
    return ve.subVectors(t, e), ve.lengthSq() === 0 && (ve.z = 1), ve.normalize(), Ze.crossVectors(n, ve), Ze.lengthSq() === 0 && (Math.abs(n.z) === 1 ? ve.x += 1e-4 : ve.z += 1e-4, ve.normalize(), Ze.crossVectors(n, ve)), Ze.normalize(), yi.crossVectors(ve, Ze), r[0] = Ze.x, r[4] = yi.x, r[8] = ve.x, r[1] = Ze.y, r[5] = yi.y, r[9] = ve.y, r[2] = Ze.z, r[6] = yi.z, r[10] = ve.z, this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements, r = e.elements, s = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], u = n[1], p = n[5], f = n[9], m = n[13], _ = n[2], x = n[6], d = n[10], h = n[14], A = n[3], E = n[7], T = n[11], z = n[15], w = r[0], R = r[4], k = r[8], S = r[12], g = r[1], F = r[5], O = r[9], b = r[13], H = r[2], W = r[6], q = r[10], tt = r[14], N = r[3], j = r[7], Q = r[11], dt = r[15];
    return s[0] = a * w + o * g + l * H + c * N, s[4] = a * R + o * F + l * W + c * j, s[8] = a * k + o * O + l * q + c * Q, s[12] = a * S + o * b + l * tt + c * dt, s[1] = u * w + p * g + f * H + m * N, s[5] = u * R + p * F + f * W + m * j, s[9] = u * k + p * O + f * q + m * Q, s[13] = u * S + p * b + f * tt + m * dt, s[2] = _ * w + x * g + d * H + h * N, s[6] = _ * R + x * F + d * W + h * j, s[10] = _ * k + x * O + d * q + h * Q, s[14] = _ * S + x * b + d * tt + h * dt, s[3] = A * w + E * g + T * H + z * N, s[7] = A * R + E * F + T * W + z * j, s[11] = A * k + E * O + T * q + z * Q, s[15] = A * S + E * b + T * tt + z * dt, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], n = t[4], r = t[8], s = t[12], a = t[1], o = t[5], l = t[9], c = t[13], u = t[2], p = t[6], f = t[10], m = t[14], _ = t[3], x = t[7], d = t[11], h = t[15];
    return _ * (+s * l * p - r * c * p - s * o * f + n * c * f + r * o * m - n * l * m) + x * (+e * l * m - e * c * f + s * a * f - r * a * m + r * c * u - s * l * u) + d * (+e * c * p - e * o * m - s * a * p + n * a * m + s * o * u - n * c * u) + h * (-r * o * u - e * l * p + e * o * f + r * a * p - n * a * f + n * l * u);
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
    const t = this.elements, e = t[0], n = t[1], r = t[2], s = t[3], a = t[4], o = t[5], l = t[6], c = t[7], u = t[8], p = t[9], f = t[10], m = t[11], _ = t[12], x = t[13], d = t[14], h = t[15], A = p * d * c - x * f * c + x * l * m - o * d * m - p * l * h + o * f * h, E = _ * f * c - u * d * c - _ * l * m + a * d * m + u * l * h - a * f * h, T = u * x * c - _ * p * c + _ * o * m - a * x * m - u * o * h + a * p * h, z = _ * p * l - u * x * l - _ * o * f + a * x * f + u * o * d - a * p * d, w = e * A + n * E + r * T + s * z;
    if (w === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const R = 1 / w;
    return t[0] = A * R, t[1] = (x * f * s - p * d * s - x * r * m + n * d * m + p * r * h - n * f * h) * R, t[2] = (o * d * s - x * l * s + x * r * c - n * d * c - o * r * h + n * l * h) * R, t[3] = (p * l * s - o * f * s - p * r * c + n * f * c + o * r * m - n * l * m) * R, t[4] = E * R, t[5] = (u * d * s - _ * f * s + _ * r * m - e * d * m - u * r * h + e * f * h) * R, t[6] = (_ * l * s - a * d * s - _ * r * c + e * d * c + a * r * h - e * l * h) * R, t[7] = (a * f * s - u * l * s + u * r * c - e * f * c - a * r * m + e * l * m) * R, t[8] = T * R, t[9] = (_ * p * s - u * x * s - _ * n * m + e * x * m + u * n * h - e * p * h) * R, t[10] = (a * x * s - _ * o * s + _ * n * c - e * x * c - a * n * h + e * o * h) * R, t[11] = (u * o * s - a * p * s - u * n * c + e * p * c + a * n * m - e * o * m) * R, t[12] = z * R, t[13] = (u * x * r - _ * p * r + _ * n * f - e * x * f - u * n * d + e * p * d) * R, t[14] = (_ * o * r - a * x * r - _ * n * l + e * x * l + a * n * d - e * o * d) * R, t[15] = (a * p * r - u * o * r + u * n * l - e * p * l - a * n * f + e * o * f) * R, this;
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
    const r = this.elements, s = e._x, a = e._y, o = e._z, l = e._w, c = s + s, u = a + a, p = o + o, f = s * c, m = s * u, _ = s * p, x = a * u, d = a * p, h = o * p, A = l * c, E = l * u, T = l * p, z = n.x, w = n.y, R = n.z;
    return r[0] = (1 - (x + h)) * z, r[1] = (m + T) * z, r[2] = (_ - E) * z, r[3] = 0, r[4] = (m - T) * w, r[5] = (1 - (f + h)) * w, r[6] = (d + A) * w, r[7] = 0, r[8] = (_ + E) * R, r[9] = (d - A) * R, r[10] = (1 - (f + x)) * R, r[11] = 0, r[12] = t.x, r[13] = t.y, r[14] = t.z, r[15] = 1, this;
  }
  decompose(t, e, n) {
    const r = this.elements;
    let s = Rn.set(r[0], r[1], r[2]).length();
    const a = Rn.set(r[4], r[5], r[6]).length(), o = Rn.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s), t.x = r[12], t.y = r[13], t.z = r[14], be.copy(this);
    const c = 1 / s, u = 1 / a, p = 1 / o;
    return be.elements[0] *= c, be.elements[1] *= c, be.elements[2] *= c, be.elements[4] *= u, be.elements[5] *= u, be.elements[6] *= u, be.elements[8] *= p, be.elements[9] *= p, be.elements[10] *= p, e.setFromRotationMatrix(be), n.x = s, n.y = a, n.z = o, this;
  }
  makePerspective(t, e, n, r, s, a, o = Xe) {
    const l = this.elements, c = 2 * s / (e - t), u = 2 * s / (n - r), p = (e + t) / (e - t), f = (n + r) / (n - r);
    let m, _;
    if (o === Xe)
      m = -(a + s) / (a - s), _ = -2 * a * s / (a - s);
    else if (o === qi)
      m = -a / (a - s), _ = -a * s / (a - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = c, l[4] = 0, l[8] = p, l[12] = 0, l[1] = 0, l[5] = u, l[9] = f, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = m, l[14] = _, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(t, e, n, r, s, a, o = Xe) {
    const l = this.elements, c = 1 / (e - t), u = 1 / (n - r), p = 1 / (a - s), f = (e + t) * c, m = (n + r) * u;
    let _, x;
    if (o === Xe)
      _ = (a + s) * p, x = -2 * p;
    else if (o === qi)
      _ = s * p, x = -1 * p;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -f, l[1] = 0, l[5] = 2 * u, l[9] = 0, l[13] = -m, l[2] = 0, l[6] = 0, l[10] = x, l[14] = -_, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
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
const Rn = /* @__PURE__ */ new D(), be = /* @__PURE__ */ new $t(), nc = /* @__PURE__ */ new D(0, 0, 0), ic = /* @__PURE__ */ new D(1, 1, 1), Ze = /* @__PURE__ */ new D(), yi = /* @__PURE__ */ new D(), ve = /* @__PURE__ */ new D(), Zs = /* @__PURE__ */ new $t(), Js = /* @__PURE__ */ new hi();
class qe {
  constructor(t = 0, e = 0, n = 0, r = qe.DEFAULT_ORDER) {
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
        this._y = Math.asin(fe(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-u, m), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(f, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-fe(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(o, m), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-p, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(fe(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-p, m), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-fe(p, -1, 1)), Math.abs(p) < 0.9999999 ? (this._x = Math.atan2(f, m), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(fe(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-p, s)) : (this._x = 0, this._y = Math.atan2(o, m));
        break;
      case "XZY":
        this._z = Math.asin(-fe(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(f, c), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-u, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
    }
    return this._order = e, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, e, n) {
    return Zs.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Zs, e, n);
  }
  setFromVector3(t, e = this._order) {
    return this.set(t.x, t.y, t.z, e);
  }
  reorder(t) {
    return Js.setFromEuler(this), this.setFromQuaternion(Js, t);
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
qe.DEFAULT_ORDER = "XYZ";
class Qr {
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
let rc = 0;
const Qs = /* @__PURE__ */ new D(), Cn = /* @__PURE__ */ new hi(), He = /* @__PURE__ */ new $t(), Ti = /* @__PURE__ */ new D(), ii = /* @__PURE__ */ new D(), sc = /* @__PURE__ */ new D(), ac = /* @__PURE__ */ new hi(), ta = /* @__PURE__ */ new D(1, 0, 0), ea = /* @__PURE__ */ new D(0, 1, 0), na = /* @__PURE__ */ new D(0, 0, 1), ia = { type: "added" }, oc = { type: "removed" }, Pn = { type: "childadded", child: null }, Er = { type: "childremoved", child: null };
class se extends $n {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: rc++ }), this.uuid = ui(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = se.DEFAULT_UP.clone();
    const t = new D(), e = new qe(), n = new hi(), r = new D(1, 1, 1);
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
        value: new $t()
      },
      normalMatrix: {
        value: new bt()
      }
    }), this.matrix = new $t(), this.matrixWorld = new $t(), this.matrixAutoUpdate = se.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Qr(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
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
    return Cn.setFromAxisAngle(t, e), this.quaternion.multiply(Cn), this;
  }
  rotateOnWorldAxis(t, e) {
    return Cn.setFromAxisAngle(t, e), this.quaternion.premultiply(Cn), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(ta, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(ea, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(na, t);
  }
  translateOnAxis(t, e) {
    return Qs.copy(t).applyQuaternion(this.quaternion), this.position.add(Qs.multiplyScalar(e)), this;
  }
  translateX(t) {
    return this.translateOnAxis(ta, t);
  }
  translateY(t) {
    return this.translateOnAxis(ea, t);
  }
  translateZ(t) {
    return this.translateOnAxis(na, t);
  }
  localToWorld(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(He.copy(this.matrixWorld).invert());
  }
  lookAt(t, e, n) {
    t.isVector3 ? Ti.copy(t) : Ti.set(t, e, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), ii.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? He.lookAt(ii, Ti, this.up) : He.lookAt(Ti, ii, this.up), this.quaternion.setFromRotationMatrix(He), r && (He.extractRotation(r.matrixWorld), Cn.setFromRotationMatrix(He), this.quaternion.premultiply(Cn.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++)
        this.add(arguments[e]);
      return this;
    }
    return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(ia), Pn.child = t, this.dispatchEvent(Pn), Pn.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const e = this.children.indexOf(t);
    return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(oc), Er.child = t, this.dispatchEvent(Er), Er.child = null), this;
  }
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t) {
    return this.updateWorldMatrix(!0, !1), He.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), He.multiply(t.parent.matrixWorld)), t.applyMatrix4(He), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(!1, !0), t.dispatchEvent(ia), Pn.child = t, this.dispatchEvent(Pn), Pn.child = null, this;
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
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ii, t, sc), t;
  }
  getWorldScale(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ii, ac, t), t;
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
      const o = a(t.geometries), l = a(t.materials), c = a(t.textures), u = a(t.images), p = a(t.shapes), f = a(t.skeletons), m = a(t.animations), _ = a(t.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), u.length > 0 && (n.images = u), p.length > 0 && (n.shapes = p), f.length > 0 && (n.skeletons = f), m.length > 0 && (n.animations = m), _.length > 0 && (n.nodes = _);
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
se.DEFAULT_UP = /* @__PURE__ */ new D(0, 1, 0);
se.DEFAULT_MATRIX_AUTO_UPDATE = !0;
se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const we = /* @__PURE__ */ new D(), Ve = /* @__PURE__ */ new D(), yr = /* @__PURE__ */ new D(), Ge = /* @__PURE__ */ new D(), Ln = /* @__PURE__ */ new D(), Dn = /* @__PURE__ */ new D(), ra = /* @__PURE__ */ new D(), Tr = /* @__PURE__ */ new D(), Ar = /* @__PURE__ */ new D(), br = /* @__PURE__ */ new D();
class Ie {
  constructor(t = new D(), e = new D(), n = new D()) {
    this.a = t, this.b = e, this.c = n;
  }
  static getNormal(t, e, n, r) {
    r.subVectors(n, e), we.subVectors(t, e), r.cross(we);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(t, e, n, r, s) {
    we.subVectors(r, e), Ve.subVectors(n, e), yr.subVectors(t, e);
    const a = we.dot(we), o = we.dot(Ve), l = we.dot(yr), c = Ve.dot(Ve), u = Ve.dot(yr), p = a * c - o * o;
    if (p === 0)
      return s.set(0, 0, 0), null;
    const f = 1 / p, m = (c * l - o * u) * f, _ = (a * u - o * l) * f;
    return s.set(1 - m - _, _, m);
  }
  static containsPoint(t, e, n, r) {
    return this.getBarycoord(t, e, n, r, Ge) === null ? !1 : Ge.x >= 0 && Ge.y >= 0 && Ge.x + Ge.y <= 1;
  }
  static getInterpolation(t, e, n, r, s, a, o, l) {
    return this.getBarycoord(t, e, n, r, Ge) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, Ge.x), l.addScaledVector(a, Ge.y), l.addScaledVector(o, Ge.z), l);
  }
  static isFrontFacing(t, e, n, r) {
    return we.subVectors(n, e), Ve.subVectors(t, e), we.cross(Ve).dot(r) < 0;
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
    return we.subVectors(this.c, this.b), Ve.subVectors(this.a, this.b), we.cross(Ve).length() * 0.5;
  }
  getMidpoint(t) {
    return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return Ie.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, e) {
    return Ie.getBarycoord(t, this.a, this.b, this.c, e);
  }
  getInterpolation(t, e, n, r, s) {
    return Ie.getInterpolation(t, this.a, this.b, this.c, e, n, r, s);
  }
  containsPoint(t) {
    return Ie.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return Ie.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, e) {
    const n = this.a, r = this.b, s = this.c;
    let a, o;
    Ln.subVectors(r, n), Dn.subVectors(s, n), Tr.subVectors(t, n);
    const l = Ln.dot(Tr), c = Dn.dot(Tr);
    if (l <= 0 && c <= 0)
      return e.copy(n);
    Ar.subVectors(t, r);
    const u = Ln.dot(Ar), p = Dn.dot(Ar);
    if (u >= 0 && p <= u)
      return e.copy(r);
    const f = l * p - u * c;
    if (f <= 0 && l >= 0 && u <= 0)
      return a = l / (l - u), e.copy(n).addScaledVector(Ln, a);
    br.subVectors(t, s);
    const m = Ln.dot(br), _ = Dn.dot(br);
    if (_ >= 0 && m <= _)
      return e.copy(s);
    const x = m * c - l * _;
    if (x <= 0 && c >= 0 && _ <= 0)
      return o = c / (c - _), e.copy(n).addScaledVector(Dn, o);
    const d = u * _ - m * p;
    if (d <= 0 && p - u >= 0 && m - _ >= 0)
      return ra.subVectors(s, r), o = (p - u) / (p - u + (m - _)), e.copy(r).addScaledVector(ra, o);
    const h = 1 / (d + x + f);
    return a = x * h, o = f * h, e.copy(n).addScaledVector(Ln, a).addScaledVector(Dn, o);
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}
const ao = {
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
}, Je = { h: 0, s: 0, l: 0 }, Ai = { h: 0, s: 0, l: 0 };
function wr(i, t, e) {
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
  setHex(t, e = De) {
    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, Wt.toWorkingColorSpace(this, e), this;
  }
  setRGB(t, e, n, r = Wt.workingColorSpace) {
    return this.r = t, this.g = e, this.b = n, Wt.toWorkingColorSpace(this, r), this;
  }
  setHSL(t, e, n, r = Wt.workingColorSpace) {
    if (t = ql(t, 1), e = fe(e, 0, 1), n = fe(n, 0, 1), e === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + e) : n + e - n * e, a = 2 * n - s;
      this.r = wr(a, s, t + 1 / 3), this.g = wr(a, s, t), this.b = wr(a, s, t - 1 / 3);
    }
    return Wt.toWorkingColorSpace(this, r), this;
  }
  setStyle(t, e = De) {
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
  setColorName(t, e = De) {
    const n = ao[t.toLowerCase()];
    return n !== void 0 ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(t) {
    return this.r = t.r, this.g = t.g, this.b = t.b, this;
  }
  copySRGBToLinear(t) {
    return this.r = Wn(t.r), this.g = Wn(t.g), this.b = Wn(t.b), this;
  }
  copyLinearToSRGB(t) {
    return this.r = pr(t.r), this.g = pr(t.g), this.b = pr(t.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(t = De) {
    return Wt.fromWorkingColorSpace(ue.copy(this), t), Math.round(fe(ue.r * 255, 0, 255)) * 65536 + Math.round(fe(ue.g * 255, 0, 255)) * 256 + Math.round(fe(ue.b * 255, 0, 255));
  }
  getHexString(t = De) {
    return ("000000" + this.getHex(t).toString(16)).slice(-6);
  }
  getHSL(t, e = Wt.workingColorSpace) {
    Wt.fromWorkingColorSpace(ue.copy(this), e);
    const n = ue.r, r = ue.g, s = ue.b, a = Math.max(n, r, s), o = Math.min(n, r, s);
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
  getRGB(t, e = Wt.workingColorSpace) {
    return Wt.fromWorkingColorSpace(ue.copy(this), e), t.r = ue.r, t.g = ue.g, t.b = ue.b, t;
  }
  getStyle(t = De) {
    Wt.fromWorkingColorSpace(ue.copy(this), t);
    const e = ue.r, n = ue.g, r = ue.b;
    return t !== De ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
  }
  offsetHSL(t, e, n) {
    return this.getHSL(Je), this.setHSL(Je.h + t, Je.s + e, Je.l + n);
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
    this.getHSL(Je), t.getHSL(Ai);
    const n = dr(Je.h, Ai.h, e), r = dr(Je.s, Ai.s, e), s = dr(Je.l, Ai.l, e);
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
const ue = /* @__PURE__ */ new Pt();
Pt.NAMES = ao;
let lc = 0;
class fi extends $n {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: lc++ }), this.uuid = ui(), this.name = "", this.type = "Material", this.blending = Gn, this.side = sn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = Vr, this.blendDst = Gr, this.blendEquation = vn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Pt(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Gi, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Ws, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = yn, this.stencilZFail = yn, this.stencilZPass = yn, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Gn && (n.blending = this.blending), this.side !== sn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== Vr && (n.blendSrc = this.blendSrc), this.blendDst !== Gr && (n.blendDst = this.blendDst), this.blendEquation !== vn && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== Gi && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== Ws && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== yn && (n.stencilFail = this.stencilFail), this.stencilZFail !== yn && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== yn && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
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
class ts extends fi {
  constructor(t) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Pt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new qe(), this.combine = Ya, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
  }
}
const te = /* @__PURE__ */ new D(), bi = /* @__PURE__ */ new zt();
class Pe {
  constructor(t, e, n = !1) {
    if (Array.isArray(t))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = n, this.usage = Xs, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.gpuType = en, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  get updateRange() {
    return Kl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
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
        bi.fromBufferAttribute(this, e), bi.applyMatrix3(t), this.setXY(e, bi.x, bi.y);
    else if (this.itemSize === 3)
      for (let e = 0, n = this.count; e < n; e++)
        te.fromBufferAttribute(this, e), te.applyMatrix3(t), this.setXYZ(e, te.x, te.y, te.z);
    return this;
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.count; e < n; e++)
      te.fromBufferAttribute(this, e), te.applyMatrix4(t), this.setXYZ(e, te.x, te.y, te.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++)
      te.fromBufferAttribute(this, e), te.applyNormalMatrix(t), this.setXYZ(e, te.x, te.y, te.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++)
      te.fromBufferAttribute(this, e), te.transformDirection(t), this.setXYZ(e, te.x, te.y, te.z);
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  getComponent(t, e) {
    let n = this.array[t * this.itemSize + e];
    return this.normalized && (n = ti(n, this.array)), n;
  }
  setComponent(t, e, n) {
    return this.normalized && (n = pe(n, this.array)), this.array[t * this.itemSize + e] = n, this;
  }
  getX(t) {
    let e = this.array[t * this.itemSize];
    return this.normalized && (e = ti(e, this.array)), e;
  }
  setX(t, e) {
    return this.normalized && (e = pe(e, this.array)), this.array[t * this.itemSize] = e, this;
  }
  getY(t) {
    let e = this.array[t * this.itemSize + 1];
    return this.normalized && (e = ti(e, this.array)), e;
  }
  setY(t, e) {
    return this.normalized && (e = pe(e, this.array)), this.array[t * this.itemSize + 1] = e, this;
  }
  getZ(t) {
    let e = this.array[t * this.itemSize + 2];
    return this.normalized && (e = ti(e, this.array)), e;
  }
  setZ(t, e) {
    return this.normalized && (e = pe(e, this.array)), this.array[t * this.itemSize + 2] = e, this;
  }
  getW(t) {
    let e = this.array[t * this.itemSize + 3];
    return this.normalized && (e = ti(e, this.array)), e;
  }
  setW(t, e) {
    return this.normalized && (e = pe(e, this.array)), this.array[t * this.itemSize + 3] = e, this;
  }
  setXY(t, e, n) {
    return t *= this.itemSize, this.normalized && (e = pe(e, this.array), n = pe(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this;
  }
  setXYZ(t, e, n, r) {
    return t *= this.itemSize, this.normalized && (e = pe(e, this.array), n = pe(n, this.array), r = pe(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = r, this;
  }
  setXYZW(t, e, n, r, s) {
    return t *= this.itemSize, this.normalized && (e = pe(e, this.array), n = pe(n, this.array), r = pe(r, this.array), s = pe(s, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = r, this.array[t + 3] = s, this;
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
    return this.name !== "" && (t.name = this.name), this.usage !== Xs && (t.usage = this.usage), t;
  }
}
class oo extends Pe {
  constructor(t, e, n) {
    super(new Uint16Array(t), e, n);
  }
}
class lo extends Pe {
  constructor(t, e, n) {
    super(new Uint32Array(t), e, n);
  }
}
class Me extends Pe {
  constructor(t, e, n) {
    super(new Float32Array(t), e, n);
  }
}
let cc = 0;
const Ee = /* @__PURE__ */ new $t(), Rr = /* @__PURE__ */ new se(), Un = /* @__PURE__ */ new D(), xe = /* @__PURE__ */ new di(), ri = /* @__PURE__ */ new di(), ie = /* @__PURE__ */ new D();
class Fe extends $n {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: cc++ }), this.uuid = ui(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return Array.isArray(t) ? this.index = new (io(t) ? lo : oo)(t, 1) : this.index = t, this;
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
      const s = new bt().getNormalMatrix(t);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(t), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(t) {
    return Ee.makeRotationFromQuaternion(t), this.applyMatrix4(Ee), this;
  }
  rotateX(t) {
    return Ee.makeRotationX(t), this.applyMatrix4(Ee), this;
  }
  rotateY(t) {
    return Ee.makeRotationY(t), this.applyMatrix4(Ee), this;
  }
  rotateZ(t) {
    return Ee.makeRotationZ(t), this.applyMatrix4(Ee), this;
  }
  translate(t, e, n) {
    return Ee.makeTranslation(t, e, n), this.applyMatrix4(Ee), this;
  }
  scale(t, e, n) {
    return Ee.makeScale(t, e, n), this.applyMatrix4(Ee), this;
  }
  lookAt(t) {
    return Rr.lookAt(t), Rr.updateMatrix(), this.applyMatrix4(Rr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Un).negate(), this.translate(Un.x, Un.y, Un.z), this;
  }
  setFromPoints(t) {
    const e = [];
    for (let n = 0, r = t.length; n < r; n++) {
      const s = t[n];
      e.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new Me(e, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new di());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new D(-1 / 0, -1 / 0, -1 / 0),
        new D(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (t !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(t), e)
        for (let n = 0, r = e.length; n < r; n++) {
          const s = e[n];
          xe.setFromBufferAttribute(s), this.morphTargetsRelative ? (ie.addVectors(this.boundingBox.min, xe.min), this.boundingBox.expandByPoint(ie), ie.addVectors(this.boundingBox.max, xe.max), this.boundingBox.expandByPoint(ie)) : (this.boundingBox.expandByPoint(xe.min), this.boundingBox.expandByPoint(xe.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Qi());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new D(), 1 / 0);
      return;
    }
    if (t) {
      const n = this.boundingSphere.center;
      if (xe.setFromBufferAttribute(t), e)
        for (let s = 0, a = e.length; s < a; s++) {
          const o = e[s];
          ri.setFromBufferAttribute(o), this.morphTargetsRelative ? (ie.addVectors(xe.min, ri.min), xe.expandByPoint(ie), ie.addVectors(xe.max, ri.max), xe.expandByPoint(ie)) : (xe.expandByPoint(ri.min), xe.expandByPoint(ri.max));
        }
      xe.getCenter(n);
      let r = 0;
      for (let s = 0, a = t.count; s < a; s++)
        ie.fromBufferAttribute(t, s), r = Math.max(r, n.distanceToSquared(ie));
      if (e)
        for (let s = 0, a = e.length; s < a; s++) {
          const o = e[s], l = this.morphTargetsRelative;
          for (let c = 0, u = o.count; c < u; c++)
            ie.fromBufferAttribute(o, c), l && (Un.fromBufferAttribute(t, c), ie.add(Un)), r = Math.max(r, n.distanceToSquared(ie));
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
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Pe(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], l = [];
    for (let k = 0; k < n.count; k++)
      o[k] = new D(), l[k] = new D();
    const c = new D(), u = new D(), p = new D(), f = new zt(), m = new zt(), _ = new zt(), x = new D(), d = new D();
    function h(k, S, g) {
      c.fromBufferAttribute(n, k), u.fromBufferAttribute(n, S), p.fromBufferAttribute(n, g), f.fromBufferAttribute(s, k), m.fromBufferAttribute(s, S), _.fromBufferAttribute(s, g), u.sub(c), p.sub(c), m.sub(f), _.sub(f);
      const F = 1 / (m.x * _.y - _.x * m.y);
      isFinite(F) && (x.copy(u).multiplyScalar(_.y).addScaledVector(p, -m.y).multiplyScalar(F), d.copy(p).multiplyScalar(m.x).addScaledVector(u, -_.x).multiplyScalar(F), o[k].add(x), o[S].add(x), o[g].add(x), l[k].add(d), l[S].add(d), l[g].add(d));
    }
    let A = this.groups;
    A.length === 0 && (A = [{
      start: 0,
      count: t.count
    }]);
    for (let k = 0, S = A.length; k < S; ++k) {
      const g = A[k], F = g.start, O = g.count;
      for (let b = F, H = F + O; b < H; b += 3)
        h(
          t.getX(b + 0),
          t.getX(b + 1),
          t.getX(b + 2)
        );
    }
    const E = new D(), T = new D(), z = new D(), w = new D();
    function R(k) {
      z.fromBufferAttribute(r, k), w.copy(z);
      const S = o[k];
      E.copy(S), E.sub(z.multiplyScalar(z.dot(S))).normalize(), T.crossVectors(w, S);
      const F = T.dot(l[k]) < 0 ? -1 : 1;
      a.setXYZW(k, E.x, E.y, E.z, F);
    }
    for (let k = 0, S = A.length; k < S; ++k) {
      const g = A[k], F = g.start, O = g.count;
      for (let b = F, H = F + O; b < H; b += 3)
        R(t.getX(b + 0)), R(t.getX(b + 1)), R(t.getX(b + 2));
    }
  }
  computeVertexNormals() {
    const t = this.index, e = this.getAttribute("position");
    if (e !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Pe(new Float32Array(e.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let f = 0, m = n.count; f < m; f++)
          n.setXYZ(f, 0, 0, 0);
      const r = new D(), s = new D(), a = new D(), o = new D(), l = new D(), c = new D(), u = new D(), p = new D();
      if (t)
        for (let f = 0, m = t.count; f < m; f += 3) {
          const _ = t.getX(f + 0), x = t.getX(f + 1), d = t.getX(f + 2);
          r.fromBufferAttribute(e, _), s.fromBufferAttribute(e, x), a.fromBufferAttribute(e, d), u.subVectors(a, s), p.subVectors(r, s), u.cross(p), o.fromBufferAttribute(n, _), l.fromBufferAttribute(n, x), c.fromBufferAttribute(n, d), o.add(u), l.add(u), c.add(u), n.setXYZ(_, o.x, o.y, o.z), n.setXYZ(x, l.x, l.y, l.z), n.setXYZ(d, c.x, c.y, c.z);
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
      ie.fromBufferAttribute(t, e), ie.normalize(), t.setXYZ(e, ie.x, ie.y, ie.z);
  }
  toNonIndexed() {
    function t(o, l) {
      const c = o.array, u = o.itemSize, p = o.normalized, f = new c.constructor(l.length * u);
      let m = 0, _ = 0;
      for (let x = 0, d = l.length; x < d; x++) {
        o.isInterleavedBufferAttribute ? m = l[x] * o.data.stride + o.offset : m = l[x] * u;
        for (let h = 0; h < u; h++)
          f[_++] = c[m++];
      }
      return new Pe(f, u, p);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const e = new Fe(), n = this.index.array, r = this.attributes;
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
const sa = /* @__PURE__ */ new $t(), dn = /* @__PURE__ */ new Jr(), wi = /* @__PURE__ */ new Qi(), aa = /* @__PURE__ */ new D(), In = /* @__PURE__ */ new D(), Nn = /* @__PURE__ */ new D(), Fn = /* @__PURE__ */ new D(), Cr = /* @__PURE__ */ new D(), Ri = /* @__PURE__ */ new D(), Ci = /* @__PURE__ */ new zt(), Pi = /* @__PURE__ */ new zt(), Li = /* @__PURE__ */ new zt(), oa = /* @__PURE__ */ new D(), la = /* @__PURE__ */ new D(), ca = /* @__PURE__ */ new D(), Di = /* @__PURE__ */ new D(), Ui = /* @__PURE__ */ new D();
class Ce extends se {
  constructor(t = new Fe(), e = new ts()) {
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
      Ri.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const u = o[l], p = s[l];
        u !== 0 && (Cr.fromBufferAttribute(p, t), a ? Ri.addScaledVector(Cr, u) : Ri.addScaledVector(Cr.sub(e), u));
      }
      e.add(Ri);
    }
    return e;
  }
  raycast(t, e) {
    const n = this.geometry, r = this.material, s = this.matrixWorld;
    r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), wi.copy(n.boundingSphere), wi.applyMatrix4(s), dn.copy(t.ray).recast(t.near), !(wi.containsPoint(dn.origin) === !1 && (dn.intersectSphere(wi, aa) === null || dn.origin.distanceToSquared(aa) > (t.far - t.near) ** 2)) && (sa.copy(s).invert(), dn.copy(t.ray).applyMatrix4(sa), !(n.boundingBox !== null && dn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(t, e, dn)));
  }
  _computeIntersections(t, e, n) {
    let r;
    const s = this.geometry, a = this.material, o = s.index, l = s.attributes.position, c = s.attributes.uv, u = s.attributes.uv1, p = s.attributes.normal, f = s.groups, m = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let _ = 0, x = f.length; _ < x; _++) {
          const d = f[_], h = a[d.materialIndex], A = Math.max(d.start, m.start), E = Math.min(o.count, Math.min(d.start + d.count, m.start + m.count));
          for (let T = A, z = E; T < z; T += 3) {
            const w = o.getX(T), R = o.getX(T + 1), k = o.getX(T + 2);
            r = Ii(this, h, t, n, c, u, p, w, R, k), r && (r.faceIndex = Math.floor(T / 3), r.face.materialIndex = d.materialIndex, e.push(r));
          }
        }
      else {
        const _ = Math.max(0, m.start), x = Math.min(o.count, m.start + m.count);
        for (let d = _, h = x; d < h; d += 3) {
          const A = o.getX(d), E = o.getX(d + 1), T = o.getX(d + 2);
          r = Ii(this, a, t, n, c, u, p, A, E, T), r && (r.faceIndex = Math.floor(d / 3), e.push(r));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(a))
        for (let _ = 0, x = f.length; _ < x; _++) {
          const d = f[_], h = a[d.materialIndex], A = Math.max(d.start, m.start), E = Math.min(l.count, Math.min(d.start + d.count, m.start + m.count));
          for (let T = A, z = E; T < z; T += 3) {
            const w = T, R = T + 1, k = T + 2;
            r = Ii(this, h, t, n, c, u, p, w, R, k), r && (r.faceIndex = Math.floor(T / 3), r.face.materialIndex = d.materialIndex, e.push(r));
          }
        }
      else {
        const _ = Math.max(0, m.start), x = Math.min(l.count, m.start + m.count);
        for (let d = _, h = x; d < h; d += 3) {
          const A = d, E = d + 1, T = d + 2;
          r = Ii(this, a, t, n, c, u, p, A, E, T), r && (r.faceIndex = Math.floor(d / 3), e.push(r));
        }
      }
  }
}
function uc(i, t, e, n, r, s, a, o) {
  let l;
  if (t.side === me ? l = n.intersectTriangle(a, s, r, !0, o) : l = n.intersectTriangle(r, s, a, t.side === sn, o), l === null)
    return null;
  Ui.copy(o), Ui.applyMatrix4(i.matrixWorld);
  const c = e.ray.origin.distanceTo(Ui);
  return c < e.near || c > e.far ? null : {
    distance: c,
    point: Ui.clone(),
    object: i
  };
}
function Ii(i, t, e, n, r, s, a, o, l, c) {
  i.getVertexPosition(o, In), i.getVertexPosition(l, Nn), i.getVertexPosition(c, Fn);
  const u = uc(i, t, e, n, In, Nn, Fn, Di);
  if (u) {
    r && (Ci.fromBufferAttribute(r, o), Pi.fromBufferAttribute(r, l), Li.fromBufferAttribute(r, c), u.uv = Ie.getInterpolation(Di, In, Nn, Fn, Ci, Pi, Li, new zt())), s && (Ci.fromBufferAttribute(s, o), Pi.fromBufferAttribute(s, l), Li.fromBufferAttribute(s, c), u.uv1 = Ie.getInterpolation(Di, In, Nn, Fn, Ci, Pi, Li, new zt())), a && (oa.fromBufferAttribute(a, o), la.fromBufferAttribute(a, l), ca.fromBufferAttribute(a, c), u.normal = Ie.getInterpolation(Di, In, Nn, Fn, oa, la, ca, new D()), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const p = {
      a: o,
      b: l,
      c,
      normal: new D(),
      materialIndex: 0
    };
    Ie.getNormal(In, Nn, Fn, p.normal), u.face = p;
  }
  return u;
}
class jn extends Fe {
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
    _("z", "y", "x", -1, -1, n, e, t, a, s, 0), _("z", "y", "x", 1, -1, n, e, -t, a, s, 1), _("x", "z", "y", 1, 1, t, n, e, r, a, 2), _("x", "z", "y", 1, -1, t, n, -e, r, a, 3), _("x", "y", "z", 1, -1, t, e, n, r, s, 4), _("x", "y", "z", -1, -1, t, e, -n, r, s, 5), this.setIndex(l), this.setAttribute("position", new Me(c, 3)), this.setAttribute("normal", new Me(u, 3)), this.setAttribute("uv", new Me(p, 2));
    function _(x, d, h, A, E, T, z, w, R, k, S) {
      const g = T / R, F = z / k, O = T / 2, b = z / 2, H = w / 2, W = R + 1, q = k + 1;
      let tt = 0, N = 0;
      const j = new D();
      for (let Q = 0; Q < q; Q++) {
        const dt = Q * F - b;
        for (let Lt = 0; Lt < W; Lt++) {
          const Vt = Lt * g - O;
          j[x] = Vt * A, j[d] = dt * E, j[h] = H, c.push(j.x, j.y, j.z), j[x] = 0, j[d] = 0, j[h] = w > 0 ? 1 : -1, u.push(j.x, j.y, j.z), p.push(Lt / R), p.push(1 - Q / k), tt += 1;
        }
      }
      for (let Q = 0; Q < k; Q++)
        for (let dt = 0; dt < R; dt++) {
          const Lt = f + dt + W * Q, Vt = f + dt + W * (Q + 1), G = f + (dt + 1) + W * (Q + 1), Y = f + (dt + 1) + W * Q;
          l.push(Lt, Vt, Y), l.push(Vt, G, Y), N += 6;
        }
      o.addGroup(m, N, S), m += N, f += tt;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new jn(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
  }
}
function Kn(i) {
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
function de(i) {
  const t = {};
  for (let e = 0; e < i.length; e++) {
    const n = Kn(i[e]);
    for (const r in n)
      t[r] = n[r];
  }
  return t;
}
function hc(i) {
  const t = [];
  for (let e = 0; e < i.length; e++)
    t.push(i[e].clone());
  return t;
}
function co(i) {
  const t = i.getRenderTarget();
  return t === null ? i.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : Wt.workingColorSpace;
}
const dc = { clone: Kn, merge: de };
var fc = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, pc = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class on extends fi {
  constructor(t) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = fc, this.fragmentShader = pc, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
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
    return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = Kn(t.uniforms), this.uniformsGroups = hc(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
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
class uo extends se {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new $t(), this.projectionMatrix = new $t(), this.projectionMatrixInverse = new $t(), this.coordinateSystem = Xe;
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
const Qe = /* @__PURE__ */ new D(), ua = /* @__PURE__ */ new zt(), ha = /* @__PURE__ */ new zt();
class ye extends uo {
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
    this.fov = Yr * 2 * Math.atan(e), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const t = Math.tan(Hi * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / t;
  }
  getEffectiveFOV() {
    return Yr * 2 * Math.atan(
      Math.tan(Hi * 0.5 * this.fov) / this.zoom
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
    Qe.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e.set(Qe.x, Qe.y).multiplyScalar(-t / Qe.z), Qe.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(Qe.x, Qe.y).multiplyScalar(-t / Qe.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   * Copies the result into the target Vector2, where x is width and y is height.
   */
  getViewSize(t, e) {
    return this.getViewBounds(t, ua, ha), e.subVectors(ha, ua);
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
    let e = t * Math.tan(Hi * 0.5 * this.fov) / this.zoom, n = 2 * e, r = this.aspect * n, s = -0.5 * r;
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
const On = -90, Bn = 1;
class mc extends se {
  constructor(t, e, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new ye(On, Bn, t, e);
    r.layers = this.layers, this.add(r);
    const s = new ye(On, Bn, t, e);
    s.layers = this.layers, this.add(s);
    const a = new ye(On, Bn, t, e);
    a.layers = this.layers, this.add(a);
    const o = new ye(On, Bn, t, e);
    o.layers = this.layers, this.add(o);
    const l = new ye(On, Bn, t, e);
    l.layers = this.layers, this.add(l);
    const c = new ye(On, Bn, t, e);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const t = this.coordinateSystem, e = this.children.concat(), [n, r, s, a, o, l] = e;
    for (const c of e)
      this.remove(c);
    if (t === Xe)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (t === qi)
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
    const [s, a, o, l, c, u] = this.children, p = t.getRenderTarget(), f = t.getActiveCubeFace(), m = t.getActiveMipmapLevel(), _ = t.xr.enabled;
    t.xr.enabled = !1;
    const x = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0, r), t.render(e, s), t.setRenderTarget(n, 1, r), t.render(e, a), t.setRenderTarget(n, 2, r), t.render(e, o), t.setRenderTarget(n, 3, r), t.render(e, l), t.setRenderTarget(n, 4, r), t.render(e, c), n.texture.generateMipmaps = x, t.setRenderTarget(n, 5, r), t.render(e, u), t.setRenderTarget(p, f, m), t.xr.enabled = _, n.texture.needsPMREMUpdate = !0;
  }
}
class ho extends _e {
  constructor(t, e, n, r, s, a, o, l, c, u) {
    t = t !== void 0 ? t : [], e = e !== void 0 ? e : Xn, super(t, e, n, r, s, a, o, l, c, u), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(t) {
    this.image = t;
  }
}
class _c extends En {
  constructor(t = 1, e = {}) {
    super(t, t, e), this.isWebGLCubeRenderTarget = !0;
    const n = { width: t, height: t, depth: 1 }, r = [n, n, n, n, n, n];
    this.texture = new ho(r, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = e.generateMipmaps !== void 0 ? e.generateMipmaps : !1, this.texture.minFilter = e.minFilter !== void 0 ? e.minFilter : Re;
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
    }, r = new jn(5, 5, 5), s = new on({
      name: "CubemapFromEquirect",
      uniforms: Kn(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: me,
      blending: nn
    });
    s.uniforms.tEquirect.value = e;
    const a = new Ce(r, s), o = e.minFilter;
    return e.minFilter === Sn && (e.minFilter = Re), new mc(1, 10, this).update(t, a), e.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(t, e, n, r) {
    const s = t.getRenderTarget();
    for (let a = 0; a < 6; a++)
      t.setRenderTarget(this, a), t.clear(e, n, r);
    t.setRenderTarget(s);
  }
}
const Pr = /* @__PURE__ */ new D(), gc = /* @__PURE__ */ new D(), vc = /* @__PURE__ */ new bt();
class _n {
  constructor(t = new D(1, 0, 0), e = 0) {
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
    const r = Pr.subVectors(n, e).cross(gc.subVectors(t, e)).normalize();
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
    const n = t.delta(Pr), r = this.normal.dot(n);
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
    const n = e || vc.getNormalMatrix(t), r = this.coplanarPoint(Pr).applyMatrix4(t), s = this.normal.applyMatrix3(n).normalize();
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
const fn = /* @__PURE__ */ new Qi(), Ni = /* @__PURE__ */ new D();
class es {
  constructor(t = new _n(), e = new _n(), n = new _n(), r = new _n(), s = new _n(), a = new _n()) {
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
  setFromProjectionMatrix(t, e = Xe) {
    const n = this.planes, r = t.elements, s = r[0], a = r[1], o = r[2], l = r[3], c = r[4], u = r[5], p = r[6], f = r[7], m = r[8], _ = r[9], x = r[10], d = r[11], h = r[12], A = r[13], E = r[14], T = r[15];
    if (n[0].setComponents(l - s, f - c, d - m, T - h).normalize(), n[1].setComponents(l + s, f + c, d + m, T + h).normalize(), n[2].setComponents(l + a, f + u, d + _, T + A).normalize(), n[3].setComponents(l - a, f - u, d - _, T - A).normalize(), n[4].setComponents(l - o, f - p, d - x, T - E).normalize(), e === Xe)
      n[5].setComponents(l + o, f + p, d + x, T + E).normalize();
    else if (e === qi)
      n[5].setComponents(o, p, x, E).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
    return this;
  }
  intersectsObject(t) {
    if (t.boundingSphere !== void 0)
      t.boundingSphere === null && t.computeBoundingSphere(), fn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
    else {
      const e = t.geometry;
      e.boundingSphere === null && e.computeBoundingSphere(), fn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
    }
    return this.intersectsSphere(fn);
  }
  intersectsSprite(t) {
    return fn.center.set(0, 0, 0), fn.radius = 0.7071067811865476, fn.applyMatrix4(t.matrixWorld), this.intersectsSphere(fn);
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
      if (Ni.x = r.normal.x > 0 ? t.max.x : t.min.x, Ni.y = r.normal.y > 0 ? t.max.y : t.min.y, Ni.z = r.normal.z > 0 ? t.max.z : t.min.z, r.distanceToPoint(Ni) < 0)
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
function fo() {
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
function xc(i) {
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
      for (let m = 0, _ = f.length; m < _; m++) {
        const x = f[m];
        i.bufferSubData(
          c,
          x.start * u.BYTES_PER_ELEMENT,
          u,
          x.start,
          x.count
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
class tr extends Fe {
  constructor(t = 1, e = 1, n = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: t,
      height: e,
      widthSegments: n,
      heightSegments: r
    };
    const s = t / 2, a = e / 2, o = Math.floor(n), l = Math.floor(r), c = o + 1, u = l + 1, p = t / o, f = e / l, m = [], _ = [], x = [], d = [];
    for (let h = 0; h < u; h++) {
      const A = h * f - a;
      for (let E = 0; E < c; E++) {
        const T = E * p - s;
        _.push(T, -A, 0), x.push(0, 0, 1), d.push(E / o), d.push(1 - h / l);
      }
    }
    for (let h = 0; h < l; h++)
      for (let A = 0; A < o; A++) {
        const E = A + c * h, T = A + c * (h + 1), z = A + 1 + c * (h + 1), w = A + 1 + c * h;
        m.push(E, T, w), m.push(T, z, w);
      }
    this.setIndex(m), this.setAttribute("position", new Me(_, 3)), this.setAttribute("normal", new Me(x, 3)), this.setAttribute("uv", new Me(d, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new tr(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}
var Mc = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Sc = `#ifdef USE_ALPHAHASH
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
#endif`, Ec = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, yc = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Tc = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, Ac = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, bc = `#ifdef USE_AOMAP
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
#endif`, wc = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Rc = `#ifdef USE_BATCHING
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
#endif`, Cc = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`, Pc = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Lc = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Dc = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, Uc = `#ifdef USE_IRIDESCENCE
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
#endif`, Ic = `#ifdef USE_BUMPMAP
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
#endif`, Nc = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, Fc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Oc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Bc = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, zc = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Hc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Vc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, Gc = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, kc = `#define PI 3.141592653589793
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
} // validated`, Wc = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, Xc = `vec3 transformedNormal = objectNormal;
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
#endif`, qc = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Yc = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Kc = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, $c = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, jc = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Zc = `
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
}`, Jc = `#ifdef USE_ENVMAP
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
#endif`, Qc = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, tu = `#ifdef USE_ENVMAP
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
#endif`, eu = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, nu = `#ifdef USE_ENVMAP
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
#endif`, iu = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, ru = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, su = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, au = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, ou = `#ifdef USE_GRADIENTMAP
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
}`, lu = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, cu = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, uu = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, hu = `uniform bool receiveShadow;
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
#endif`, du = `#ifdef USE_ENVMAP
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
#endif`, fu = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, pu = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, mu = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, _u = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, gu = `PhysicalMaterial material;
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
#endif`, vu = `struct PhysicalMaterial {
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
}`, xu = `
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
#endif`, Mu = `#if defined( RE_IndirectDiffuse )
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
#endif`, Su = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Eu = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, yu = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Tu = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Au = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, bu = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, wu = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Ru = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, Cu = `#if defined( USE_POINTS_UV )
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
#endif`, Pu = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Lu = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Du = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Uu = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Iu = `#ifdef USE_MORPHNORMALS
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
#endif`, Nu = `#ifdef USE_MORPHTARGETS
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
#endif`, Fu = `#ifdef USE_MORPHTARGETS
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
#endif`, Ou = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`, Bu = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, zu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Hu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Vu = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Gu = `#ifdef USE_NORMALMAP
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
#endif`, ku = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Wu = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Xu = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, qu = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Yu = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Ku = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, $u = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, ju = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Zu = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Ju = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Qu = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, th = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, eh = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, nh = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, ih = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, rh = `float getShadowMask() {
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
}`, sh = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, ah = `#ifdef USE_SKINNING
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
#endif`, oh = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, lh = `#ifdef USE_SKINNING
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
#endif`, ch = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, uh = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, hh = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, dh = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, fh = `#ifdef USE_TRANSMISSION
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
#endif`, ph = `#ifdef USE_TRANSMISSION
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
#endif`, mh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, _h = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, gh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, vh = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const xh = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Mh = `uniform sampler2D t2D;
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
}`, Sh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Eh = `#ifdef ENVMAP_TYPE_CUBE
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
}`, yh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Th = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Ah = `#include <common>
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
}`, bh = `#if DEPTH_PACKING == 3200
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
}`, wh = `#define DISTANCE
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
}`, Rh = `#define DISTANCE
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
}`, Ch = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Ph = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Lh = `uniform float scale;
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
}`, Dh = `uniform vec3 diffuse;
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
}`, Uh = `#include <common>
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
}`, Ih = `uniform vec3 diffuse;
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
}`, Nh = `#define LAMBERT
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
}`, Fh = `#define LAMBERT
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
}`, Oh = `#define MATCAP
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
}`, Bh = `#define MATCAP
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
}`, zh = `#define NORMAL
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
}`, Hh = `#define NORMAL
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
}`, Vh = `#define PHONG
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
}`, Gh = `#define PHONG
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
}`, kh = `#define STANDARD
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
}`, Wh = `#define STANDARD
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
}`, Xh = `#define TOON
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
}`, qh = `#define TOON
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
}`, Yh = `uniform float size;
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
}`, Kh = `uniform vec3 diffuse;
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
}`, $h = `#include <common>
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
}`, jh = `uniform vec3 color;
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
}`, Zh = `uniform float rotation;
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
}`, Jh = `uniform vec3 diffuse;
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
}`, At = {
  alphahash_fragment: Mc,
  alphahash_pars_fragment: Sc,
  alphamap_fragment: Ec,
  alphamap_pars_fragment: yc,
  alphatest_fragment: Tc,
  alphatest_pars_fragment: Ac,
  aomap_fragment: bc,
  aomap_pars_fragment: wc,
  batching_pars_vertex: Rc,
  batching_vertex: Cc,
  begin_vertex: Pc,
  beginnormal_vertex: Lc,
  bsdfs: Dc,
  iridescence_fragment: Uc,
  bumpmap_pars_fragment: Ic,
  clipping_planes_fragment: Nc,
  clipping_planes_pars_fragment: Fc,
  clipping_planes_pars_vertex: Oc,
  clipping_planes_vertex: Bc,
  color_fragment: zc,
  color_pars_fragment: Hc,
  color_pars_vertex: Vc,
  color_vertex: Gc,
  common: kc,
  cube_uv_reflection_fragment: Wc,
  defaultnormal_vertex: Xc,
  displacementmap_pars_vertex: qc,
  displacementmap_vertex: Yc,
  emissivemap_fragment: Kc,
  emissivemap_pars_fragment: $c,
  colorspace_fragment: jc,
  colorspace_pars_fragment: Zc,
  envmap_fragment: Jc,
  envmap_common_pars_fragment: Qc,
  envmap_pars_fragment: tu,
  envmap_pars_vertex: eu,
  envmap_physical_pars_fragment: du,
  envmap_vertex: nu,
  fog_vertex: iu,
  fog_pars_vertex: ru,
  fog_fragment: su,
  fog_pars_fragment: au,
  gradientmap_pars_fragment: ou,
  lightmap_pars_fragment: lu,
  lights_lambert_fragment: cu,
  lights_lambert_pars_fragment: uu,
  lights_pars_begin: hu,
  lights_toon_fragment: fu,
  lights_toon_pars_fragment: pu,
  lights_phong_fragment: mu,
  lights_phong_pars_fragment: _u,
  lights_physical_fragment: gu,
  lights_physical_pars_fragment: vu,
  lights_fragment_begin: xu,
  lights_fragment_maps: Mu,
  lights_fragment_end: Su,
  logdepthbuf_fragment: Eu,
  logdepthbuf_pars_fragment: yu,
  logdepthbuf_pars_vertex: Tu,
  logdepthbuf_vertex: Au,
  map_fragment: bu,
  map_pars_fragment: wu,
  map_particle_fragment: Ru,
  map_particle_pars_fragment: Cu,
  metalnessmap_fragment: Pu,
  metalnessmap_pars_fragment: Lu,
  morphinstance_vertex: Du,
  morphcolor_vertex: Uu,
  morphnormal_vertex: Iu,
  morphtarget_pars_vertex: Nu,
  morphtarget_vertex: Fu,
  normal_fragment_begin: Ou,
  normal_fragment_maps: Bu,
  normal_pars_fragment: zu,
  normal_pars_vertex: Hu,
  normal_vertex: Vu,
  normalmap_pars_fragment: Gu,
  clearcoat_normal_fragment_begin: ku,
  clearcoat_normal_fragment_maps: Wu,
  clearcoat_pars_fragment: Xu,
  iridescence_pars_fragment: qu,
  opaque_fragment: Yu,
  packing: Ku,
  premultiplied_alpha_fragment: $u,
  project_vertex: ju,
  dithering_fragment: Zu,
  dithering_pars_fragment: Ju,
  roughnessmap_fragment: Qu,
  roughnessmap_pars_fragment: th,
  shadowmap_pars_fragment: eh,
  shadowmap_pars_vertex: nh,
  shadowmap_vertex: ih,
  shadowmask_pars_fragment: rh,
  skinbase_vertex: sh,
  skinning_pars_vertex: ah,
  skinning_vertex: oh,
  skinnormal_vertex: lh,
  specularmap_fragment: ch,
  specularmap_pars_fragment: uh,
  tonemapping_fragment: hh,
  tonemapping_pars_fragment: dh,
  transmission_fragment: fh,
  transmission_pars_fragment: ph,
  uv_pars_fragment: mh,
  uv_pars_vertex: _h,
  uv_vertex: gh,
  worldpos_vertex: vh,
  background_vert: xh,
  background_frag: Mh,
  backgroundCube_vert: Sh,
  backgroundCube_frag: Eh,
  cube_vert: yh,
  cube_frag: Th,
  depth_vert: Ah,
  depth_frag: bh,
  distanceRGBA_vert: wh,
  distanceRGBA_frag: Rh,
  equirect_vert: Ch,
  equirect_frag: Ph,
  linedashed_vert: Lh,
  linedashed_frag: Dh,
  meshbasic_vert: Uh,
  meshbasic_frag: Ih,
  meshlambert_vert: Nh,
  meshlambert_frag: Fh,
  meshmatcap_vert: Oh,
  meshmatcap_frag: Bh,
  meshnormal_vert: zh,
  meshnormal_frag: Hh,
  meshphong_vert: Vh,
  meshphong_frag: Gh,
  meshphysical_vert: kh,
  meshphysical_frag: Wh,
  meshtoon_vert: Xh,
  meshtoon_frag: qh,
  points_vert: Yh,
  points_frag: Kh,
  shadow_vert: $h,
  shadow_frag: jh,
  sprite_vert: Zh,
  sprite_frag: Jh
}, it = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Pt(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new bt() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new bt() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new bt() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new bt() },
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
    aoMapTransform: { value: /* @__PURE__ */ new bt() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new bt() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new bt() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new bt() },
    normalScale: { value: /* @__PURE__ */ new zt(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new bt() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new bt() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new bt() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new bt() }
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
    alphaMapTransform: { value: /* @__PURE__ */ new bt() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new bt() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Pt(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new zt(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new bt() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new bt() },
    alphaTest: { value: 0 }
  }
}, Ue = {
  basic: {
    uniforms: /* @__PURE__ */ de([
      it.common,
      it.specularmap,
      it.envmap,
      it.aomap,
      it.lightmap,
      it.fog
    ]),
    vertexShader: At.meshbasic_vert,
    fragmentShader: At.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ de([
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
    vertexShader: At.meshlambert_vert,
    fragmentShader: At.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ de([
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
    vertexShader: At.meshphong_vert,
    fragmentShader: At.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ de([
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
    vertexShader: At.meshphysical_vert,
    fragmentShader: At.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ de([
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
    vertexShader: At.meshtoon_vert,
    fragmentShader: At.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ de([
      it.common,
      it.bumpmap,
      it.normalmap,
      it.displacementmap,
      it.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: At.meshmatcap_vert,
    fragmentShader: At.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ de([
      it.points,
      it.fog
    ]),
    vertexShader: At.points_vert,
    fragmentShader: At.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ de([
      it.common,
      it.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: At.linedashed_vert,
    fragmentShader: At.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ de([
      it.common,
      it.displacementmap
    ]),
    vertexShader: At.depth_vert,
    fragmentShader: At.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ de([
      it.common,
      it.bumpmap,
      it.normalmap,
      it.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: At.meshnormal_vert,
    fragmentShader: At.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ de([
      it.sprite,
      it.fog
    ]),
    vertexShader: At.sprite_vert,
    fragmentShader: At.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new bt() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: At.background_vert,
    fragmentShader: At.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new bt() }
    },
    vertexShader: At.backgroundCube_vert,
    fragmentShader: At.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: At.cube_vert,
    fragmentShader: At.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: At.equirect_vert,
    fragmentShader: At.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ de([
      it.common,
      it.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new D() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: At.distanceRGBA_vert,
    fragmentShader: At.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ de([
      it.lights,
      it.fog,
      {
        color: { value: /* @__PURE__ */ new Pt(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: At.shadow_vert,
    fragmentShader: At.shadow_frag
  }
};
Ue.physical = {
  uniforms: /* @__PURE__ */ de([
    Ue.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new bt() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new bt() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new zt(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new bt() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new bt() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new bt() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Pt(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new bt() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new bt() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new bt() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new zt() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new bt() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Pt(0) },
      specularColor: { value: /* @__PURE__ */ new Pt(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new bt() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new bt() },
      anisotropyVector: { value: /* @__PURE__ */ new zt() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new bt() }
    }
  ]),
  vertexShader: At.meshphysical_vert,
  fragmentShader: At.meshphysical_frag
};
const Fi = { r: 0, b: 0, g: 0 }, pn = /* @__PURE__ */ new qe(), Qh = /* @__PURE__ */ new $t();
function td(i, t, e, n, r, s, a) {
  const o = new Pt(0);
  let l = s === !0 ? 0 : 1, c, u, p = null, f = 0, m = null;
  function _(A) {
    let E = A.isScene === !0 ? A.background : null;
    return E && E.isTexture && (E = (A.backgroundBlurriness > 0 ? e : t).get(E)), E;
  }
  function x(A) {
    let E = !1;
    const T = _(A);
    T === null ? h(o, l) : T && T.isColor && (h(T, 1), E = !0);
    const z = i.xr.getEnvironmentBlendMode();
    z === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : z === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (i.autoClear || E) && i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil);
  }
  function d(A, E) {
    const T = _(E);
    T && (T.isCubeTexture || T.mapping === ji) ? (u === void 0 && (u = new Ce(
      new jn(1, 1, 1),
      new on({
        name: "BackgroundCubeMaterial",
        uniforms: Kn(Ue.backgroundCube.uniforms),
        vertexShader: Ue.backgroundCube.vertexShader,
        fragmentShader: Ue.backgroundCube.fragmentShader,
        side: me,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(z, w, R) {
      this.matrixWorld.copyPosition(R.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), r.update(u)), pn.copy(E.backgroundRotation), pn.x *= -1, pn.y *= -1, pn.z *= -1, T.isCubeTexture && T.isRenderTargetTexture === !1 && (pn.y *= -1, pn.z *= -1), u.material.uniforms.envMap.value = T, u.material.uniforms.flipEnvMap.value = T.isCubeTexture && T.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = E.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = E.backgroundIntensity, u.material.uniforms.backgroundRotation.value.setFromMatrix4(Qh.makeRotationFromEuler(pn)), u.material.toneMapped = Wt.getTransfer(T.colorSpace) !== Yt, (p !== T || f !== T.version || m !== i.toneMapping) && (u.material.needsUpdate = !0, p = T, f = T.version, m = i.toneMapping), u.layers.enableAll(), A.unshift(u, u.geometry, u.material, 0, 0, null)) : T && T.isTexture && (c === void 0 && (c = new Ce(
      new tr(2, 2),
      new on({
        name: "BackgroundMaterial",
        uniforms: Kn(Ue.background.uniforms),
        vertexShader: Ue.background.vertexShader,
        fragmentShader: Ue.background.fragmentShader,
        side: sn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), r.update(c)), c.material.uniforms.t2D.value = T, c.material.uniforms.backgroundIntensity.value = E.backgroundIntensity, c.material.toneMapped = Wt.getTransfer(T.colorSpace) !== Yt, T.matrixAutoUpdate === !0 && T.updateMatrix(), c.material.uniforms.uvTransform.value.copy(T.matrix), (p !== T || f !== T.version || m !== i.toneMapping) && (c.material.needsUpdate = !0, p = T, f = T.version, m = i.toneMapping), c.layers.enableAll(), A.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function h(A, E) {
    A.getRGB(Fi, co(i)), n.buffers.color.setClear(Fi.r, Fi.g, Fi.b, E, a);
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
    render: x,
    addToRenderList: d
  };
}
function ed(i, t) {
  const e = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, r = f(null);
  let s = r, a = !1;
  function o(g, F, O, b, H) {
    let W = !1;
    const q = p(b, O, F);
    s !== q && (s = q, c(s.object)), W = m(g, b, O, H), W && _(g, b, O, H), H !== null && t.update(H, i.ELEMENT_ARRAY_BUFFER), (W || a) && (a = !1, T(g, F, O, b), H !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get(H).buffer));
  }
  function l() {
    return i.createVertexArray();
  }
  function c(g) {
    return i.bindVertexArray(g);
  }
  function u(g) {
    return i.deleteVertexArray(g);
  }
  function p(g, F, O) {
    const b = O.wireframe === !0;
    let H = n[g.id];
    H === void 0 && (H = {}, n[g.id] = H);
    let W = H[F.id];
    W === void 0 && (W = {}, H[F.id] = W);
    let q = W[b];
    return q === void 0 && (q = f(l()), W[b] = q), q;
  }
  function f(g) {
    const F = [], O = [], b = [];
    for (let H = 0; H < e; H++)
      F[H] = 0, O[H] = 0, b[H] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: F,
      enabledAttributes: O,
      attributeDivisors: b,
      object: g,
      attributes: {},
      index: null
    };
  }
  function m(g, F, O, b) {
    const H = s.attributes, W = F.attributes;
    let q = 0;
    const tt = O.getAttributes();
    for (const N in tt)
      if (tt[N].location >= 0) {
        const Q = H[N];
        let dt = W[N];
        if (dt === void 0 && (N === "instanceMatrix" && g.instanceMatrix && (dt = g.instanceMatrix), N === "instanceColor" && g.instanceColor && (dt = g.instanceColor)), Q === void 0 || Q.attribute !== dt || dt && Q.data !== dt.data)
          return !0;
        q++;
      }
    return s.attributesNum !== q || s.index !== b;
  }
  function _(g, F, O, b) {
    const H = {}, W = F.attributes;
    let q = 0;
    const tt = O.getAttributes();
    for (const N in tt)
      if (tt[N].location >= 0) {
        let Q = W[N];
        Q === void 0 && (N === "instanceMatrix" && g.instanceMatrix && (Q = g.instanceMatrix), N === "instanceColor" && g.instanceColor && (Q = g.instanceColor));
        const dt = {};
        dt.attribute = Q, Q && Q.data && (dt.data = Q.data), H[N] = dt, q++;
      }
    s.attributes = H, s.attributesNum = q, s.index = b;
  }
  function x() {
    const g = s.newAttributes;
    for (let F = 0, O = g.length; F < O; F++)
      g[F] = 0;
  }
  function d(g) {
    h(g, 0);
  }
  function h(g, F) {
    const O = s.newAttributes, b = s.enabledAttributes, H = s.attributeDivisors;
    O[g] = 1, b[g] === 0 && (i.enableVertexAttribArray(g), b[g] = 1), H[g] !== F && (i.vertexAttribDivisor(g, F), H[g] = F);
  }
  function A() {
    const g = s.newAttributes, F = s.enabledAttributes;
    for (let O = 0, b = F.length; O < b; O++)
      F[O] !== g[O] && (i.disableVertexAttribArray(O), F[O] = 0);
  }
  function E(g, F, O, b, H, W, q) {
    q === !0 ? i.vertexAttribIPointer(g, F, O, H, W) : i.vertexAttribPointer(g, F, O, b, H, W);
  }
  function T(g, F, O, b) {
    x();
    const H = b.attributes, W = O.getAttributes(), q = F.defaultAttributeValues;
    for (const tt in W) {
      const N = W[tt];
      if (N.location >= 0) {
        let j = H[tt];
        if (j === void 0 && (tt === "instanceMatrix" && g.instanceMatrix && (j = g.instanceMatrix), tt === "instanceColor" && g.instanceColor && (j = g.instanceColor)), j !== void 0) {
          const Q = j.normalized, dt = j.itemSize, Lt = t.get(j);
          if (Lt === void 0)
            continue;
          const Vt = Lt.buffer, G = Lt.type, Y = Lt.bytesPerElement, ut = G === i.INT || G === i.UNSIGNED_INT || j.gpuType === ja;
          if (j.isInterleavedBufferAttribute) {
            const nt = j.data, Et = nt.stride, It = j.offset;
            if (nt.isInstancedInterleavedBuffer) {
              for (let L = 0; L < N.locationSize; L++)
                h(N.location + L, nt.meshPerAttribute);
              g.isInstancedMesh !== !0 && b._maxInstanceCount === void 0 && (b._maxInstanceCount = nt.meshPerAttribute * nt.count);
            } else
              for (let L = 0; L < N.locationSize; L++)
                d(N.location + L);
            i.bindBuffer(i.ARRAY_BUFFER, Vt);
            for (let L = 0; L < N.locationSize; L++)
              E(
                N.location + L,
                dt / N.locationSize,
                G,
                Q,
                Et * Y,
                (It + dt / N.locationSize * L) * Y,
                ut
              );
          } else {
            if (j.isInstancedBufferAttribute) {
              for (let nt = 0; nt < N.locationSize; nt++)
                h(N.location + nt, j.meshPerAttribute);
              g.isInstancedMesh !== !0 && b._maxInstanceCount === void 0 && (b._maxInstanceCount = j.meshPerAttribute * j.count);
            } else
              for (let nt = 0; nt < N.locationSize; nt++)
                d(N.location + nt);
            i.bindBuffer(i.ARRAY_BUFFER, Vt);
            for (let nt = 0; nt < N.locationSize; nt++)
              E(
                N.location + nt,
                dt / N.locationSize,
                G,
                Q,
                dt * Y,
                dt / N.locationSize * nt * Y,
                ut
              );
          }
        } else if (q !== void 0) {
          const Q = q[tt];
          if (Q !== void 0)
            switch (Q.length) {
              case 2:
                i.vertexAttrib2fv(N.location, Q);
                break;
              case 3:
                i.vertexAttrib3fv(N.location, Q);
                break;
              case 4:
                i.vertexAttrib4fv(N.location, Q);
                break;
              default:
                i.vertexAttrib1fv(N.location, Q);
            }
        }
      }
    }
    A();
  }
  function z() {
    k();
    for (const g in n) {
      const F = n[g];
      for (const O in F) {
        const b = F[O];
        for (const H in b)
          u(b[H].object), delete b[H];
        delete F[O];
      }
      delete n[g];
    }
  }
  function w(g) {
    if (n[g.id] === void 0)
      return;
    const F = n[g.id];
    for (const O in F) {
      const b = F[O];
      for (const H in b)
        u(b[H].object), delete b[H];
      delete F[O];
    }
    delete n[g.id];
  }
  function R(g) {
    for (const F in n) {
      const O = n[F];
      if (O[g.id] === void 0)
        continue;
      const b = O[g.id];
      for (const H in b)
        u(b[H].object), delete b[H];
      delete O[g.id];
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
    dispose: z,
    releaseStatesOfGeometry: w,
    releaseStatesOfProgram: R,
    initAttributes: x,
    enableAttribute: d,
    disableUnusedAttributes: A
  };
}
function nd(i, t, e) {
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
      for (let _ = 0; _ < p; _++)
        m += u[_];
      e.update(m, n, 1);
    }
  }
  function l(c, u, p, f) {
    if (p === 0)
      return;
    const m = t.get("WEBGL_multi_draw");
    if (m === null)
      for (let _ = 0; _ < c.length; _++)
        a(c[_], u[_], f[_]);
    else {
      m.multiDrawArraysInstancedWEBGL(n, c, 0, u, 0, f, 0, p);
      let _ = 0;
      for (let x = 0; x < p; x++)
        _ += u[x];
      for (let x = 0; x < f.length; x++)
        e.update(_, n, f[x]);
    }
  }
  this.setMode = r, this.render = s, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = l;
}
function id(i, t, e, n) {
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
    return !(w !== Ne && n.convert(w) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(w) {
    const R = w === Zi && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
    return !(w !== an && n.convert(w) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    w !== en && !R);
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
  const p = e.logarithmicDepthBuffer === !0, f = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), m = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), _ = i.getParameter(i.MAX_TEXTURE_SIZE), x = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), d = i.getParameter(i.MAX_VERTEX_ATTRIBS), h = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), A = i.getParameter(i.MAX_VARYING_VECTORS), E = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), T = m > 0, z = i.getParameter(i.MAX_SAMPLES);
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
    maxTextureSize: _,
    maxCubemapSize: x,
    maxAttributes: d,
    maxVertexUniforms: h,
    maxVaryings: A,
    maxFragmentUniforms: E,
    vertexTextures: T,
    maxSamples: z
  };
}
function rd(i) {
  const t = this;
  let e = null, n = 0, r = !1, s = !1;
  const a = new _n(), o = new bt(), l = { value: null, needsUpdate: !1 };
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
    const _ = p.clippingPlanes, x = p.clipIntersection, d = p.clipShadows, h = i.get(p);
    if (!r || _ === null || _.length === 0 || s && !d)
      s ? u(null) : c();
    else {
      const A = s ? 0 : n, E = A * 4;
      let T = h.clippingState || null;
      l.value = T, T = u(_, f, E, m);
      for (let z = 0; z !== E; ++z)
        T[z] = e[z];
      h.clippingState = T, this.numIntersection = x ? this.numPlanes : 0, this.numPlanes += A;
    }
  };
  function c() {
    l.value !== e && (l.value = e, l.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0;
  }
  function u(p, f, m, _) {
    const x = p !== null ? p.length : 0;
    let d = null;
    if (x !== 0) {
      if (d = l.value, _ !== !0 || d === null) {
        const h = m + x * 4, A = f.matrixWorldInverse;
        o.getNormalMatrix(A), (d === null || d.length < h) && (d = new Float32Array(h));
        for (let E = 0, T = m; E !== x; ++E, T += 4)
          a.copy(p[E]).applyMatrix4(A, o), a.normal.toArray(d, T), d[T + 3] = a.constant;
      }
      l.value = d, l.needsUpdate = !0;
    }
    return t.numPlanes = x, t.numIntersection = 0, d;
  }
}
function sd(i) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(a, o) {
    return o === kr ? a.mapping = Xn : o === Wr && (a.mapping = qn), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === kr || o === Wr)
        if (t.has(a)) {
          const l = t.get(a).texture;
          return e(l, a.mapping);
        } else {
          const l = a.image;
          if (l && l.height > 0) {
            const c = new _c(l.height);
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
class po extends uo {
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
const Vn = 4, da = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], xn = 20, Lr = /* @__PURE__ */ new po(), fa = /* @__PURE__ */ new Pt();
let Dr = null, Ur = 0, Ir = 0, Nr = !1;
const gn = (1 + Math.sqrt(5)) / 2, zn = 1 / gn, pa = [
  /* @__PURE__ */ new D(-gn, zn, 0),
  /* @__PURE__ */ new D(gn, zn, 0),
  /* @__PURE__ */ new D(-zn, 0, gn),
  /* @__PURE__ */ new D(zn, 0, gn),
  /* @__PURE__ */ new D(0, gn, -zn),
  /* @__PURE__ */ new D(0, gn, zn),
  /* @__PURE__ */ new D(-1, 1, -1),
  /* @__PURE__ */ new D(1, 1, -1),
  /* @__PURE__ */ new D(-1, 1, 1),
  /* @__PURE__ */ new D(1, 1, 1)
];
class ma {
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
    Dr = this._renderer.getRenderTarget(), Ur = this._renderer.getActiveCubeFace(), Ir = this._renderer.getActiveMipmapLevel(), Nr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(256);
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
    this._cubemapMaterial === null && (this._cubemapMaterial = va(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = ga(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(Dr, Ur, Ir), this._renderer.xr.enabled = Nr, t.scissorTest = !1, Oi(t, 0, 0, t.width, t.height);
  }
  _fromTexture(t, e) {
    t.mapping === Xn || t.mapping === qn ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), Dr = this._renderer.getRenderTarget(), Ur = this._renderer.getActiveCubeFace(), Ir = this._renderer.getActiveMipmapLevel(), Nr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = e || this._allocateTargets();
    return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const t = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n = {
      magFilter: Re,
      minFilter: Re,
      generateMipmaps: !1,
      type: Zi,
      format: Ne,
      colorSpace: ln,
      depthBuffer: !1
    }, r = _a(t, e, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = _a(t, e, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = ad(s)), this._blurMaterial = od(s, t, e);
    }
    return r;
  }
  _compileMaterial(t) {
    const e = new Ce(this._lodPlanes[0], t);
    this._renderer.compile(e, Lr);
  }
  _sceneToCubeUV(t, e, n, r) {
    const o = new ye(90, 1, e, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], u = this._renderer, p = u.autoClear, f = u.toneMapping;
    u.getClearColor(fa), u.toneMapping = rn, u.autoClear = !1;
    const m = new ts({
      name: "PMREM.Background",
      side: me,
      depthWrite: !1,
      depthTest: !1
    }), _ = new Ce(new jn(), m);
    let x = !1;
    const d = t.background;
    d ? d.isColor && (m.color.copy(d), t.background = null, x = !0) : (m.color.copy(fa), x = !0);
    for (let h = 0; h < 6; h++) {
      const A = h % 3;
      A === 0 ? (o.up.set(0, l[h], 0), o.lookAt(c[h], 0, 0)) : A === 1 ? (o.up.set(0, 0, l[h]), o.lookAt(0, c[h], 0)) : (o.up.set(0, l[h], 0), o.lookAt(0, 0, c[h]));
      const E = this._cubeSize;
      Oi(r, A * E, h > 2 ? E : 0, E, E), u.setRenderTarget(r), x && u.render(_, o), u.render(t, o);
    }
    _.geometry.dispose(), _.material.dispose(), u.toneMapping = f, u.autoClear = p, t.background = d;
  }
  _textureToCubeUV(t, e) {
    const n = this._renderer, r = t.mapping === Xn || t.mapping === qn;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = va()), this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = ga());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, a = new Ce(this._lodPlanes[0], s), o = s.uniforms;
    o.envMap.value = t;
    const l = this._cubeSize;
    Oi(e, 0, 0, 3 * l, 2 * l), n.setRenderTarget(e), n.render(a, Lr);
  }
  _applyPMREM(t) {
    const e = this._renderer, n = e.autoClear;
    e.autoClear = !1;
    const r = this._lodPlanes.length;
    for (let s = 1; s < r; s++) {
      const a = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), o = pa[(r - s - 1) % pa.length];
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
    const u = 3, p = new Ce(this._lodPlanes[r], c), f = c.uniforms, m = this._sizeLods[n] - 1, _ = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * xn - 1), x = s / _, d = isFinite(s) ? 1 + Math.floor(u * x) : xn;
    d > xn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${xn}`);
    const h = [];
    let A = 0;
    for (let R = 0; R < xn; ++R) {
      const k = R / x, S = Math.exp(-k * k / 2);
      h.push(S), R === 0 ? A += S : R < d && (A += 2 * S);
    }
    for (let R = 0; R < h.length; R++)
      h[R] = h[R] / A;
    f.envMap.value = t.texture, f.samples.value = d, f.weights.value = h, f.latitudinal.value = a === "latitudinal", o && (f.poleAxis.value = o);
    const { _lodMax: E } = this;
    f.dTheta.value = _, f.mipInt.value = E - n;
    const T = this._sizeLods[r], z = 3 * T * (r > E - Vn ? r - E + Vn : 0), w = 4 * (this._cubeSize - T);
    Oi(e, z, w, 3 * T, 2 * T), l.setRenderTarget(e), l.render(p, Lr);
  }
}
function ad(i) {
  const t = [], e = [], n = [];
  let r = i;
  const s = i - Vn + 1 + da.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, r);
    e.push(o);
    let l = 1 / o;
    a > i - Vn ? l = da[a - i + Vn - 1] : a === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2), u = -c, p = 1 + c, f = [u, u, p, u, p, p, u, u, p, p, u, p], m = 6, _ = 6, x = 3, d = 2, h = 1, A = new Float32Array(x * _ * m), E = new Float32Array(d * _ * m), T = new Float32Array(h * _ * m);
    for (let w = 0; w < m; w++) {
      const R = w % 3 * 2 / 3 - 1, k = w > 2 ? 0 : -1, S = [
        R,
        k,
        0,
        R + 2 / 3,
        k,
        0,
        R + 2 / 3,
        k + 1,
        0,
        R,
        k,
        0,
        R + 2 / 3,
        k + 1,
        0,
        R,
        k + 1,
        0
      ];
      A.set(S, x * _ * w), E.set(f, d * _ * w);
      const g = [w, w, w, w, w, w];
      T.set(g, h * _ * w);
    }
    const z = new Fe();
    z.setAttribute("position", new Pe(A, x)), z.setAttribute("uv", new Pe(E, d)), z.setAttribute("faceIndex", new Pe(T, h)), t.push(z), r > Vn && r--;
  }
  return { lodPlanes: t, sizeLods: e, sigmas: n };
}
function _a(i, t, e) {
  const n = new En(i, t, e);
  return n.texture.mapping = ji, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Oi(i, t, e, n, r) {
  i.viewport.set(t, e, n, r), i.scissor.set(t, e, n, r);
}
function od(i, t, e) {
  const n = new Float32Array(xn), r = new D(0, 1, 0);
  return new on({
    name: "SphericalGaussianBlur",
    defines: {
      n: xn,
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
    vertexShader: ns(),
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
    blending: nn,
    depthTest: !1,
    depthWrite: !1
  });
}
function ga() {
  return new on({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: ns(),
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
    blending: nn,
    depthTest: !1,
    depthWrite: !1
  });
}
function va() {
  return new on({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: ns(),
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
    blending: nn,
    depthTest: !1,
    depthWrite: !1
  });
}
function ns() {
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
function ld(i) {
  let t = /* @__PURE__ */ new WeakMap(), e = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping, c = l === kr || l === Wr, u = l === Xn || l === qn;
      if (c || u) {
        let p = t.get(o);
        const f = p !== void 0 ? p.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== f)
          return e === null && (e = new ma(i)), p = c ? e.fromEquirectangular(o, p) : e.fromCubemap(o, p), p.texture.pmremVersion = o.pmremVersion, t.set(o, p), p.texture;
        if (p !== void 0)
          return p.texture;
        {
          const m = o.image;
          return c && m && m.height > 0 || u && m && r(m) ? (e === null && (e = new ma(i)), p = c ? e.fromEquirectangular(o) : e.fromCubemap(o), p.texture.pmremVersion = o.pmremVersion, t.set(o, p), o.addEventListener("dispose", s), p.texture) : null;
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
function cd(i) {
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
function ud(i, t, e, n) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function a(p) {
    const f = p.target;
    f.index !== null && t.remove(f.index);
    for (const _ in f.attributes)
      t.remove(f.attributes[_]);
    for (const _ in f.morphAttributes) {
      const x = f.morphAttributes[_];
      for (let d = 0, h = x.length; d < h; d++)
        t.remove(x[d]);
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
    for (const _ in f)
      t.update(f[_], i.ARRAY_BUFFER);
    const m = p.morphAttributes;
    for (const _ in m) {
      const x = m[_];
      for (let d = 0, h = x.length; d < h; d++)
        t.update(x[d], i.ARRAY_BUFFER);
    }
  }
  function c(p) {
    const f = [], m = p.index, _ = p.attributes.position;
    let x = 0;
    if (m !== null) {
      const A = m.array;
      x = m.version;
      for (let E = 0, T = A.length; E < T; E += 3) {
        const z = A[E + 0], w = A[E + 1], R = A[E + 2];
        f.push(z, w, w, R, R, z);
      }
    } else if (_ !== void 0) {
      const A = _.array;
      x = _.version;
      for (let E = 0, T = A.length / 3 - 1; E < T; E += 3) {
        const z = E + 0, w = E + 1, R = E + 2;
        f.push(z, w, w, R, R, z);
      }
    } else
      return;
    const d = new (io(f) ? lo : oo)(f, 1);
    d.version = x;
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
function hd(i, t, e) {
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
  function c(f, m, _) {
    _ !== 0 && (i.drawElementsInstanced(n, m, s, f * a, _), e.update(m, n, _));
  }
  function u(f, m, _) {
    if (_ === 0)
      return;
    const x = t.get("WEBGL_multi_draw");
    if (x === null)
      for (let d = 0; d < _; d++)
        this.render(f[d] / a, m[d]);
    else {
      x.multiDrawElementsWEBGL(n, m, 0, s, f, 0, _);
      let d = 0;
      for (let h = 0; h < _; h++)
        d += m[h];
      e.update(d, n, 1);
    }
  }
  function p(f, m, _, x) {
    if (_ === 0)
      return;
    const d = t.get("WEBGL_multi_draw");
    if (d === null)
      for (let h = 0; h < f.length; h++)
        c(f[h] / a, m[h], x[h]);
    else {
      d.multiDrawElementsInstancedWEBGL(n, m, 0, s, f, 0, x, 0, _);
      let h = 0;
      for (let A = 0; A < _; A++)
        h += m[A];
      for (let A = 0; A < x.length; A++)
        e.update(h, n, x[A]);
    }
  }
  this.setMode = r, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = u, this.renderMultiDrawInstances = p;
}
function dd(i) {
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
function fd(i, t, e) {
  const n = /* @__PURE__ */ new WeakMap(), r = new re();
  function s(a, o, l) {
    const c = a.morphTargetInfluences, u = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, p = u !== void 0 ? u.length : 0;
    let f = n.get(o);
    if (f === void 0 || f.count !== p) {
      let S = function() {
        R.dispose(), n.delete(o), o.removeEventListener("dispose", S);
      };
      f !== void 0 && f.texture.dispose();
      const m = o.morphAttributes.position !== void 0, _ = o.morphAttributes.normal !== void 0, x = o.morphAttributes.color !== void 0, d = o.morphAttributes.position || [], h = o.morphAttributes.normal || [], A = o.morphAttributes.color || [];
      let E = 0;
      m === !0 && (E = 1), _ === !0 && (E = 2), x === !0 && (E = 3);
      let T = o.attributes.position.count * E, z = 1;
      T > t.maxTextureSize && (z = Math.ceil(T / t.maxTextureSize), T = t.maxTextureSize);
      const w = new Float32Array(T * z * 4 * p), R = new so(w, T, z, p);
      R.type = en, R.needsUpdate = !0;
      const k = E * 4;
      for (let g = 0; g < p; g++) {
        const F = d[g], O = h[g], b = A[g], H = T * z * 4 * g;
        for (let W = 0; W < F.count; W++) {
          const q = W * k;
          m === !0 && (r.fromBufferAttribute(F, W), w[H + q + 0] = r.x, w[H + q + 1] = r.y, w[H + q + 2] = r.z, w[H + q + 3] = 0), _ === !0 && (r.fromBufferAttribute(O, W), w[H + q + 4] = r.x, w[H + q + 5] = r.y, w[H + q + 6] = r.z, w[H + q + 7] = 0), x === !0 && (r.fromBufferAttribute(b, W), w[H + q + 8] = r.x, w[H + q + 9] = r.y, w[H + q + 10] = r.z, w[H + q + 11] = b.itemSize === 4 ? r.w : 1);
        }
      }
      f = {
        count: p,
        texture: R,
        size: new zt(T, z)
      }, n.set(o, f), o.addEventListener("dispose", S);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      l.getUniforms().setValue(i, "morphTexture", a.morphTexture, e);
    else {
      let m = 0;
      for (let x = 0; x < c.length; x++)
        m += c[x];
      const _ = o.morphTargetsRelative ? 1 : 1 - m;
      l.getUniforms().setValue(i, "morphTargetBaseInfluence", _), l.getUniforms().setValue(i, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(i, "morphTargetsTexture", f.texture, e), l.getUniforms().setValue(i, "morphTargetsTextureSize", f.size);
  }
  return {
    update: s
  };
}
function pd(i, t, e, n) {
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
class mo extends _e {
  constructor(t, e, n, r, s, a, o, l, c, u) {
    if (u = u !== void 0 ? u : kn, u !== kn && u !== li)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && u === kn && (n = Yn), n === void 0 && u === li && (n = ci), super(null, r, s, a, o, l, u, n, c), this.isDepthTexture = !0, this.image = { width: t, height: e }, this.magFilter = o !== void 0 ? o : Te, this.minFilter = l !== void 0 ? l : Te, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(t) {
    return super.copy(t), this.compareFunction = t.compareFunction, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.compareFunction !== null && (e.compareFunction = this.compareFunction), e;
  }
}
const _o = /* @__PURE__ */ new _e(), go = /* @__PURE__ */ new mo(1, 1);
go.compareFunction = no;
const vo = /* @__PURE__ */ new so(), xo = /* @__PURE__ */ new tc(), Mo = /* @__PURE__ */ new ho(), xa = [], Ma = [], Sa = new Float32Array(16), Ea = new Float32Array(9), ya = new Float32Array(4);
function Zn(i, t, e) {
  const n = i[0];
  if (n <= 0 || n > 0)
    return i;
  const r = t * e;
  let s = xa[r];
  if (s === void 0 && (s = new Float32Array(r), xa[r] = s), t !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== t; ++a)
      o += e, i[a].toArray(s, o);
  }
  return s;
}
function ee(i, t) {
  if (i.length !== t.length)
    return !1;
  for (let e = 0, n = i.length; e < n; e++)
    if (i[e] !== t[e])
      return !1;
  return !0;
}
function ne(i, t) {
  for (let e = 0, n = t.length; e < n; e++)
    i[e] = t[e];
}
function er(i, t) {
  let e = Ma[t];
  e === void 0 && (e = new Int32Array(t), Ma[t] = e);
  for (let n = 0; n !== t; ++n)
    e[n] = i.allocateTextureUnit();
  return e;
}
function md(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1f(this.addr, t), e[0] = t);
}
function _d(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (i.uniform2f(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (ee(e, t))
      return;
    i.uniform2fv(this.addr, t), ne(e, t);
  }
}
function gd(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3f(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else if (t.r !== void 0)
    (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (i.uniform3f(this.addr, t.r, t.g, t.b), e[0] = t.r, e[1] = t.g, e[2] = t.b);
  else {
    if (ee(e, t))
      return;
    i.uniform3fv(this.addr, t), ne(e, t);
  }
}
function vd(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4f(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (ee(e, t))
      return;
    i.uniform4fv(this.addr, t), ne(e, t);
  }
}
function xd(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (ee(e, t))
      return;
    i.uniformMatrix2fv(this.addr, !1, t), ne(e, t);
  } else {
    if (ee(e, n))
      return;
    ya.set(n), i.uniformMatrix2fv(this.addr, !1, ya), ne(e, n);
  }
}
function Md(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (ee(e, t))
      return;
    i.uniformMatrix3fv(this.addr, !1, t), ne(e, t);
  } else {
    if (ee(e, n))
      return;
    Ea.set(n), i.uniformMatrix3fv(this.addr, !1, Ea), ne(e, n);
  }
}
function Sd(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (ee(e, t))
      return;
    i.uniformMatrix4fv(this.addr, !1, t), ne(e, t);
  } else {
    if (ee(e, n))
      return;
    Sa.set(n), i.uniformMatrix4fv(this.addr, !1, Sa), ne(e, n);
  }
}
function Ed(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1i(this.addr, t), e[0] = t);
}
function yd(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (i.uniform2i(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (ee(e, t))
      return;
    i.uniform2iv(this.addr, t), ne(e, t);
  }
}
function Td(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3i(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (ee(e, t))
      return;
    i.uniform3iv(this.addr, t), ne(e, t);
  }
}
function Ad(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4i(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (ee(e, t))
      return;
    i.uniform4iv(this.addr, t), ne(e, t);
  }
}
function bd(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1ui(this.addr, t), e[0] = t);
}
function wd(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (i.uniform2ui(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (ee(e, t))
      return;
    i.uniform2uiv(this.addr, t), ne(e, t);
  }
}
function Rd(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3ui(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (ee(e, t))
      return;
    i.uniform3uiv(this.addr, t), ne(e, t);
  }
}
function Cd(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4ui(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (ee(e, t))
      return;
    i.uniform4uiv(this.addr, t), ne(e, t);
  }
}
function Pd(i, t, e) {
  const n = this.cache, r = e.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r);
  const s = this.type === i.SAMPLER_2D_SHADOW ? go : _o;
  e.setTexture2D(t || s, r);
}
function Ld(i, t, e) {
  const n = this.cache, r = e.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), e.setTexture3D(t || xo, r);
}
function Dd(i, t, e) {
  const n = this.cache, r = e.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), e.setTextureCube(t || Mo, r);
}
function Ud(i, t, e) {
  const n = this.cache, r = e.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), e.setTexture2DArray(t || vo, r);
}
function Id(i) {
  switch (i) {
    case 5126:
      return md;
    case 35664:
      return _d;
    case 35665:
      return gd;
    case 35666:
      return vd;
    case 35674:
      return xd;
    case 35675:
      return Md;
    case 35676:
      return Sd;
    case 5124:
    case 35670:
      return Ed;
    case 35667:
    case 35671:
      return yd;
    case 35668:
    case 35672:
      return Td;
    case 35669:
    case 35673:
      return Ad;
    case 5125:
      return bd;
    case 36294:
      return wd;
    case 36295:
      return Rd;
    case 36296:
      return Cd;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Pd;
    case 35679:
    case 36299:
    case 36307:
      return Ld;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Dd;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Ud;
  }
}
function Nd(i, t) {
  i.uniform1fv(this.addr, t);
}
function Fd(i, t) {
  const e = Zn(t, this.size, 2);
  i.uniform2fv(this.addr, e);
}
function Od(i, t) {
  const e = Zn(t, this.size, 3);
  i.uniform3fv(this.addr, e);
}
function Bd(i, t) {
  const e = Zn(t, this.size, 4);
  i.uniform4fv(this.addr, e);
}
function zd(i, t) {
  const e = Zn(t, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, e);
}
function Hd(i, t) {
  const e = Zn(t, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, e);
}
function Vd(i, t) {
  const e = Zn(t, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, e);
}
function Gd(i, t) {
  i.uniform1iv(this.addr, t);
}
function kd(i, t) {
  i.uniform2iv(this.addr, t);
}
function Wd(i, t) {
  i.uniform3iv(this.addr, t);
}
function Xd(i, t) {
  i.uniform4iv(this.addr, t);
}
function qd(i, t) {
  i.uniform1uiv(this.addr, t);
}
function Yd(i, t) {
  i.uniform2uiv(this.addr, t);
}
function Kd(i, t) {
  i.uniform3uiv(this.addr, t);
}
function $d(i, t) {
  i.uniform4uiv(this.addr, t);
}
function jd(i, t, e) {
  const n = this.cache, r = t.length, s = er(e, r);
  ee(n, s) || (i.uniform1iv(this.addr, s), ne(n, s));
  for (let a = 0; a !== r; ++a)
    e.setTexture2D(t[a] || _o, s[a]);
}
function Zd(i, t, e) {
  const n = this.cache, r = t.length, s = er(e, r);
  ee(n, s) || (i.uniform1iv(this.addr, s), ne(n, s));
  for (let a = 0; a !== r; ++a)
    e.setTexture3D(t[a] || xo, s[a]);
}
function Jd(i, t, e) {
  const n = this.cache, r = t.length, s = er(e, r);
  ee(n, s) || (i.uniform1iv(this.addr, s), ne(n, s));
  for (let a = 0; a !== r; ++a)
    e.setTextureCube(t[a] || Mo, s[a]);
}
function Qd(i, t, e) {
  const n = this.cache, r = t.length, s = er(e, r);
  ee(n, s) || (i.uniform1iv(this.addr, s), ne(n, s));
  for (let a = 0; a !== r; ++a)
    e.setTexture2DArray(t[a] || vo, s[a]);
}
function tf(i) {
  switch (i) {
    case 5126:
      return Nd;
    case 35664:
      return Fd;
    case 35665:
      return Od;
    case 35666:
      return Bd;
    case 35674:
      return zd;
    case 35675:
      return Hd;
    case 35676:
      return Vd;
    case 5124:
    case 35670:
      return Gd;
    case 35667:
    case 35671:
      return kd;
    case 35668:
    case 35672:
      return Wd;
    case 35669:
    case 35673:
      return Xd;
    case 5125:
      return qd;
    case 36294:
      return Yd;
    case 36295:
      return Kd;
    case 36296:
      return $d;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return jd;
    case 35679:
    case 36299:
    case 36307:
      return Zd;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Jd;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Qd;
  }
}
class ef {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.setValue = Id(e.type);
  }
}
class nf {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = tf(e.type);
  }
}
class rf {
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
const Fr = /(\w+)(\])?(\[|\.)?/g;
function Ta(i, t) {
  i.seq.push(t), i.map[t.id] = t;
}
function sf(i, t, e) {
  const n = i.name, r = n.length;
  for (Fr.lastIndex = 0; ; ) {
    const s = Fr.exec(n), a = Fr.lastIndex;
    let o = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === r) {
      Ta(e, c === void 0 ? new ef(o, i, t) : new nf(o, i, t));
      break;
    } else {
      let p = e.map[o];
      p === void 0 && (p = new rf(o), Ta(e, p)), e = p;
    }
  }
}
class Vi {
  constructor(t, e) {
    this.seq = [], this.map = {};
    const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      const s = t.getActiveUniform(e, r), a = t.getUniformLocation(e, s.name);
      sf(s, a, this);
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
function Aa(i, t, e) {
  const n = i.createShader(t);
  return i.shaderSource(n, e), i.compileShader(n), n;
}
const af = 37297;
let of = 0;
function lf(i, t) {
  const e = i.split(`
`), n = [], r = Math.max(t - 6, 0), s = Math.min(t + 6, e.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    n.push(`${o === t ? ">" : " "} ${o}: ${e[a]}`);
  }
  return n.join(`
`);
}
function cf(i) {
  const t = Wt.getPrimaries(Wt.workingColorSpace), e = Wt.getPrimaries(i);
  let n;
  switch (t === e ? n = "" : t === Xi && e === Wi ? n = "LinearDisplayP3ToLinearSRGB" : t === Wi && e === Xi && (n = "LinearSRGBToLinearDisplayP3"), i) {
    case ln:
    case Ji:
      return [n, "LinearTransferOETF"];
    case De:
    case Zr:
      return [n, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", i), [n, "LinearTransferOETF"];
  }
}
function ba(i, t, e) {
  const n = i.getShaderParameter(t, i.COMPILE_STATUS), r = i.getShaderInfoLog(t).trim();
  if (n && r === "")
    return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const a = parseInt(s[1]);
    return e.toUpperCase() + `

` + r + `

` + lf(i.getShaderSource(t), a);
  } else
    return r;
}
function uf(i, t) {
  const e = cf(t);
  return `vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`;
}
function hf(i, t) {
  let e;
  switch (t) {
    case gl:
      e = "Linear";
      break;
    case vl:
      e = "Reinhard";
      break;
    case xl:
      e = "OptimizedCineon";
      break;
    case Ml:
      e = "ACESFilmic";
      break;
    case El:
      e = "AgX";
      break;
    case yl:
      e = "Neutral";
      break;
    case Sl:
      e = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), e = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + e + "ToneMapping( color ); }";
}
function df(i) {
  return [
    i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(ai).join(`
`);
}
function ff(i) {
  const t = [];
  for (const e in i) {
    const n = i[e];
    n !== !1 && t.push("#define " + e + " " + n);
  }
  return t.join(`
`);
}
function pf(i, t) {
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
function ai(i) {
  return i !== "";
}
function wa(i, t) {
  const e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function Ra(i, t) {
  return i.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
const mf = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Kr(i) {
  return i.replace(mf, gf);
}
const _f = /* @__PURE__ */ new Map();
function gf(i, t) {
  let e = At[t];
  if (e === void 0) {
    const n = _f.get(t);
    if (n !== void 0)
      e = At[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, n);
    else
      throw new Error("Can not resolve #include <" + t + ">");
  }
  return Kr(e);
}
const vf = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Ca(i) {
  return i.replace(vf, xf);
}
function xf(i, t, e, n) {
  let r = "";
  for (let s = parseInt(t); s < parseInt(e); s++)
    r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function Pa(i) {
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
function Mf(i) {
  let t = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === qa ? t = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === ko ? t = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === ke && (t = "SHADOWMAP_TYPE_VSM"), t;
}
function Sf(i) {
  let t = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case Xn:
      case qn:
        t = "ENVMAP_TYPE_CUBE";
        break;
      case ji:
        t = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return t;
}
function Ef(i) {
  let t = "ENVMAP_MODE_REFLECTION";
  if (i.envMap)
    switch (i.envMapMode) {
      case qn:
        t = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return t;
}
function yf(i) {
  let t = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case Ya:
        t = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case ml:
        t = "ENVMAP_BLENDING_MIX";
        break;
      case _l:
        t = "ENVMAP_BLENDING_ADD";
        break;
    }
  return t;
}
function Tf(i) {
  const t = i.envMapCubeUVHeight;
  if (t === null)
    return null;
  const e = Math.log2(t) - 2, n = 1 / t;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 7 * 16)), texelHeight: n, maxMip: e };
}
function Af(i, t, e, n) {
  const r = i.getContext(), s = e.defines;
  let a = e.vertexShader, o = e.fragmentShader;
  const l = Mf(e), c = Sf(e), u = Ef(e), p = yf(e), f = Tf(e), m = df(e), _ = ff(s), x = r.createProgram();
  let d, h, A = e.glslVersion ? "#version " + e.glslVersion + `
` : "";
  e.isRawShaderMaterial ? (d = [
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    _
  ].filter(ai).join(`
`), d.length > 0 && (d += `
`), h = [
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    _
  ].filter(ai).join(`
`), h.length > 0 && (h += `
`)) : (d = [
    Pa(e),
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    _,
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
  ].filter(ai).join(`
`), h = [
    Pa(e),
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    _,
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
    e.toneMapping !== rn ? "#define TONE_MAPPING" : "",
    e.toneMapping !== rn ? At.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    e.toneMapping !== rn ? hf("toneMapping", e.toneMapping) : "",
    e.dithering ? "#define DITHERING" : "",
    e.opaque ? "#define OPAQUE" : "",
    At.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    uf("linearToOutputTexel", e.outputColorSpace),
    e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "",
    `
`
  ].filter(ai).join(`
`)), a = Kr(a), a = wa(a, e), a = Ra(a, e), o = Kr(o), o = wa(o, e), o = Ra(o, e), a = Ca(a), o = Ca(o), e.isRawShaderMaterial !== !0 && (A = `#version 300 es
`, d = [
    m,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + d, h = [
    "#define varying in",
    e.glslVersion === qs ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    e.glslVersion === qs ? "" : "#define gl_FragColor pc_fragColor",
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
  const E = A + d + a, T = A + h + o, z = Aa(r, r.VERTEX_SHADER, E), w = Aa(r, r.FRAGMENT_SHADER, T);
  r.attachShader(x, z), r.attachShader(x, w), e.index0AttributeName !== void 0 ? r.bindAttribLocation(x, 0, e.index0AttributeName) : e.morphTargets === !0 && r.bindAttribLocation(x, 0, "position"), r.linkProgram(x);
  function R(F) {
    if (i.debug.checkShaderErrors) {
      const O = r.getProgramInfoLog(x).trim(), b = r.getShaderInfoLog(z).trim(), H = r.getShaderInfoLog(w).trim();
      let W = !0, q = !0;
      if (r.getProgramParameter(x, r.LINK_STATUS) === !1)
        if (W = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(r, x, z, w);
        else {
          const tt = ba(r, z, "vertex"), N = ba(r, w, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(x, r.VALIDATE_STATUS) + `

Material Name: ` + F.name + `
Material Type: ` + F.type + `

Program Info Log: ` + O + `
` + tt + `
` + N
          );
        }
      else
        O !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", O) : (b === "" || H === "") && (q = !1);
      q && (F.diagnostics = {
        runnable: W,
        programLog: O,
        vertexShader: {
          log: b,
          prefix: d
        },
        fragmentShader: {
          log: H,
          prefix: h
        }
      });
    }
    r.deleteShader(z), r.deleteShader(w), k = new Vi(r, x), S = pf(r, x);
  }
  let k;
  this.getUniforms = function() {
    return k === void 0 && R(this), k;
  };
  let S;
  this.getAttributes = function() {
    return S === void 0 && R(this), S;
  };
  let g = e.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return g === !1 && (g = r.getProgramParameter(x, af)), g;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(x), this.program = void 0;
  }, this.type = e.shaderType, this.name = e.shaderName, this.id = of++, this.cacheKey = t, this.usedTimes = 1, this.program = x, this.vertexShader = z, this.fragmentShader = w, this;
}
let bf = 0;
class wf {
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
    return n === void 0 && (n = new Rf(t), e.set(t, n)), n;
  }
}
class Rf {
  constructor(t) {
    this.id = bf++, this.code = t, this.usedTimes = 0;
  }
}
function Cf(i, t, e, n, r, s, a) {
  const o = new Qr(), l = new wf(), c = /* @__PURE__ */ new Set(), u = [], p = r.logarithmicDepthBuffer, f = r.vertexTextures;
  let m = r.precision;
  const _ = {
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
  function x(S) {
    return c.add(S), S === 0 ? "uv" : `uv${S}`;
  }
  function d(S, g, F, O, b) {
    const H = O.fog, W = b.geometry, q = S.isMeshStandardMaterial ? O.environment : null, tt = (S.isMeshStandardMaterial ? e : t).get(S.envMap || q), N = tt && tt.mapping === ji ? tt.image.height : null, j = _[S.type];
    S.precision !== null && (m = r.getMaxPrecision(S.precision), m !== S.precision && console.warn("THREE.WebGLProgram.getParameters:", S.precision, "not supported, using", m, "instead."));
    const Q = W.morphAttributes.position || W.morphAttributes.normal || W.morphAttributes.color, dt = Q !== void 0 ? Q.length : 0;
    let Lt = 0;
    W.morphAttributes.position !== void 0 && (Lt = 1), W.morphAttributes.normal !== void 0 && (Lt = 2), W.morphAttributes.color !== void 0 && (Lt = 3);
    let Vt, G, Y, ut;
    if (j) {
      const kt = Ue[j];
      Vt = kt.vertexShader, G = kt.fragmentShader;
    } else
      Vt = S.vertexShader, G = S.fragmentShader, l.update(S), Y = l.getVertexShaderID(S), ut = l.getFragmentShaderID(S);
    const nt = i.getRenderTarget(), Et = b.isInstancedMesh === !0, It = b.isBatchedMesh === !0, L = !!S.map, yt = !!S.matcap, ht = !!tt, Xt = !!S.aoMap, xt = !!S.lightMap, Ft = !!S.bumpMap, Dt = !!S.normalMap, Ot = !!S.displacementMap, jt = !!S.emissiveMap, y = !!S.metalnessMap, v = !!S.roughnessMap, V = S.anisotropy > 0, K = S.clearcoat > 0, Z = S.dispersion > 0, J = S.iridescence > 0, _t = S.sheen > 0, ot = S.transmission > 0, at = V && !!S.anisotropyMap, wt = K && !!S.clearcoatMap, et = K && !!S.clearcoatNormalMap, mt = K && !!S.clearcoatRoughnessMap, Bt = J && !!S.iridescenceMap, gt = J && !!S.iridescenceThicknessMap, ct = _t && !!S.sheenColorMap, Rt = _t && !!S.sheenRoughnessMap, Nt = !!S.specularMap, Jt = !!S.specularColorMap, Ct = !!S.specularIntensityMap, C = ot && !!S.transmissionMap, $ = ot && !!S.thicknessMap, X = !!S.gradientMap, rt = !!S.alphaMap, lt = S.alphaTest > 0, Ht = !!S.alphaHash, qt = !!S.extensions;
    let Zt = rn;
    S.toneMapped && (nt === null || nt.isXRRenderTarget === !0) && (Zt = i.toneMapping);
    const ae = {
      shaderID: j,
      shaderType: S.type,
      shaderName: S.name,
      vertexShader: Vt,
      fragmentShader: G,
      defines: S.defines,
      customVertexShaderID: Y,
      customFragmentShaderID: ut,
      isRawShaderMaterial: S.isRawShaderMaterial === !0,
      glslVersion: S.glslVersion,
      precision: m,
      batching: It,
      instancing: Et,
      instancingColor: Et && b.instanceColor !== null,
      instancingMorph: Et && b.morphTexture !== null,
      supportsVertexTextures: f,
      outputColorSpace: nt === null ? i.outputColorSpace : nt.isXRRenderTarget === !0 ? nt.texture.colorSpace : ln,
      alphaToCoverage: !!S.alphaToCoverage,
      map: L,
      matcap: yt,
      envMap: ht,
      envMapMode: ht && tt.mapping,
      envMapCubeUVHeight: N,
      aoMap: Xt,
      lightMap: xt,
      bumpMap: Ft,
      normalMap: Dt,
      displacementMap: f && Ot,
      emissiveMap: jt,
      normalMapObjectSpace: Dt && S.normalMapType === Bl,
      normalMapTangentSpace: Dt && S.normalMapType === Ol,
      metalnessMap: y,
      roughnessMap: v,
      anisotropy: V,
      anisotropyMap: at,
      clearcoat: K,
      clearcoatMap: wt,
      clearcoatNormalMap: et,
      clearcoatRoughnessMap: mt,
      dispersion: Z,
      iridescence: J,
      iridescenceMap: Bt,
      iridescenceThicknessMap: gt,
      sheen: _t,
      sheenColorMap: ct,
      sheenRoughnessMap: Rt,
      specularMap: Nt,
      specularColorMap: Jt,
      specularIntensityMap: Ct,
      transmission: ot,
      transmissionMap: C,
      thicknessMap: $,
      gradientMap: X,
      opaque: S.transparent === !1 && S.blending === Gn && S.alphaToCoverage === !1,
      alphaMap: rt,
      alphaTest: lt,
      alphaHash: Ht,
      combine: S.combine,
      //
      mapUv: L && x(S.map.channel),
      aoMapUv: Xt && x(S.aoMap.channel),
      lightMapUv: xt && x(S.lightMap.channel),
      bumpMapUv: Ft && x(S.bumpMap.channel),
      normalMapUv: Dt && x(S.normalMap.channel),
      displacementMapUv: Ot && x(S.displacementMap.channel),
      emissiveMapUv: jt && x(S.emissiveMap.channel),
      metalnessMapUv: y && x(S.metalnessMap.channel),
      roughnessMapUv: v && x(S.roughnessMap.channel),
      anisotropyMapUv: at && x(S.anisotropyMap.channel),
      clearcoatMapUv: wt && x(S.clearcoatMap.channel),
      clearcoatNormalMapUv: et && x(S.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: mt && x(S.clearcoatRoughnessMap.channel),
      iridescenceMapUv: Bt && x(S.iridescenceMap.channel),
      iridescenceThicknessMapUv: gt && x(S.iridescenceThicknessMap.channel),
      sheenColorMapUv: ct && x(S.sheenColorMap.channel),
      sheenRoughnessMapUv: Rt && x(S.sheenRoughnessMap.channel),
      specularMapUv: Nt && x(S.specularMap.channel),
      specularColorMapUv: Jt && x(S.specularColorMap.channel),
      specularIntensityMapUv: Ct && x(S.specularIntensityMap.channel),
      transmissionMapUv: C && x(S.transmissionMap.channel),
      thicknessMapUv: $ && x(S.thicknessMap.channel),
      alphaMapUv: rt && x(S.alphaMap.channel),
      //
      vertexTangents: !!W.attributes.tangent && (Dt || V),
      vertexColors: S.vertexColors,
      vertexAlphas: S.vertexColors === !0 && !!W.attributes.color && W.attributes.color.itemSize === 4,
      pointsUvs: b.isPoints === !0 && !!W.attributes.uv && (L || rt),
      fog: !!H,
      useFog: S.fog === !0,
      fogExp2: !!H && H.isFogExp2,
      flatShading: S.flatShading === !0,
      sizeAttenuation: S.sizeAttenuation === !0,
      logarithmicDepthBuffer: p,
      skinning: b.isSkinnedMesh === !0,
      morphTargets: W.morphAttributes.position !== void 0,
      morphNormals: W.morphAttributes.normal !== void 0,
      morphColors: W.morphAttributes.color !== void 0,
      morphTargetsCount: dt,
      morphTextureStride: Lt,
      numDirLights: g.directional.length,
      numPointLights: g.point.length,
      numSpotLights: g.spot.length,
      numSpotLightMaps: g.spotLightMap.length,
      numRectAreaLights: g.rectArea.length,
      numHemiLights: g.hemi.length,
      numDirLightShadows: g.directionalShadowMap.length,
      numPointLightShadows: g.pointShadowMap.length,
      numSpotLightShadows: g.spotShadowMap.length,
      numSpotLightShadowsWithMaps: g.numSpotLightShadowsWithMaps,
      numLightProbes: g.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: S.dithering,
      shadowMapEnabled: i.shadowMap.enabled && F.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: Zt,
      useLegacyLights: i._useLegacyLights,
      decodeVideoTexture: L && S.map.isVideoTexture === !0 && Wt.getTransfer(S.map.colorSpace) === Yt,
      premultipliedAlpha: S.premultipliedAlpha,
      doubleSided: S.side === We,
      flipSided: S.side === me,
      useDepthPacking: S.depthPacking >= 0,
      depthPacking: S.depthPacking || 0,
      index0AttributeName: S.index0AttributeName,
      extensionClipCullDistance: qt && S.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: qt && S.extensions.multiDraw === !0 && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: S.customProgramCacheKey()
    };
    return ae.vertexUv1s = c.has(1), ae.vertexUv2s = c.has(2), ae.vertexUv3s = c.has(3), c.clear(), ae;
  }
  function h(S) {
    const g = [];
    if (S.shaderID ? g.push(S.shaderID) : (g.push(S.customVertexShaderID), g.push(S.customFragmentShaderID)), S.defines !== void 0)
      for (const F in S.defines)
        g.push(F), g.push(S.defines[F]);
    return S.isRawShaderMaterial === !1 && (A(g, S), E(g, S), g.push(i.outputColorSpace)), g.push(S.customProgramCacheKey), g.join();
  }
  function A(S, g) {
    S.push(g.precision), S.push(g.outputColorSpace), S.push(g.envMapMode), S.push(g.envMapCubeUVHeight), S.push(g.mapUv), S.push(g.alphaMapUv), S.push(g.lightMapUv), S.push(g.aoMapUv), S.push(g.bumpMapUv), S.push(g.normalMapUv), S.push(g.displacementMapUv), S.push(g.emissiveMapUv), S.push(g.metalnessMapUv), S.push(g.roughnessMapUv), S.push(g.anisotropyMapUv), S.push(g.clearcoatMapUv), S.push(g.clearcoatNormalMapUv), S.push(g.clearcoatRoughnessMapUv), S.push(g.iridescenceMapUv), S.push(g.iridescenceThicknessMapUv), S.push(g.sheenColorMapUv), S.push(g.sheenRoughnessMapUv), S.push(g.specularMapUv), S.push(g.specularColorMapUv), S.push(g.specularIntensityMapUv), S.push(g.transmissionMapUv), S.push(g.thicknessMapUv), S.push(g.combine), S.push(g.fogExp2), S.push(g.sizeAttenuation), S.push(g.morphTargetsCount), S.push(g.morphAttributeCount), S.push(g.numDirLights), S.push(g.numPointLights), S.push(g.numSpotLights), S.push(g.numSpotLightMaps), S.push(g.numHemiLights), S.push(g.numRectAreaLights), S.push(g.numDirLightShadows), S.push(g.numPointLightShadows), S.push(g.numSpotLightShadows), S.push(g.numSpotLightShadowsWithMaps), S.push(g.numLightProbes), S.push(g.shadowMapType), S.push(g.toneMapping), S.push(g.numClippingPlanes), S.push(g.numClipIntersection), S.push(g.depthPacking);
  }
  function E(S, g) {
    o.disableAll(), g.supportsVertexTextures && o.enable(0), g.instancing && o.enable(1), g.instancingColor && o.enable(2), g.instancingMorph && o.enable(3), g.matcap && o.enable(4), g.envMap && o.enable(5), g.normalMapObjectSpace && o.enable(6), g.normalMapTangentSpace && o.enable(7), g.clearcoat && o.enable(8), g.iridescence && o.enable(9), g.alphaTest && o.enable(10), g.vertexColors && o.enable(11), g.vertexAlphas && o.enable(12), g.vertexUv1s && o.enable(13), g.vertexUv2s && o.enable(14), g.vertexUv3s && o.enable(15), g.vertexTangents && o.enable(16), g.anisotropy && o.enable(17), g.alphaHash && o.enable(18), g.batching && o.enable(19), g.dispersion && o.enable(20), S.push(o.mask), o.disableAll(), g.fog && o.enable(0), g.useFog && o.enable(1), g.flatShading && o.enable(2), g.logarithmicDepthBuffer && o.enable(3), g.skinning && o.enable(4), g.morphTargets && o.enable(5), g.morphNormals && o.enable(6), g.morphColors && o.enable(7), g.premultipliedAlpha && o.enable(8), g.shadowMapEnabled && o.enable(9), g.useLegacyLights && o.enable(10), g.doubleSided && o.enable(11), g.flipSided && o.enable(12), g.useDepthPacking && o.enable(13), g.dithering && o.enable(14), g.transmission && o.enable(15), g.sheen && o.enable(16), g.opaque && o.enable(17), g.pointsUvs && o.enable(18), g.decodeVideoTexture && o.enable(19), g.alphaToCoverage && o.enable(20), S.push(o.mask);
  }
  function T(S) {
    const g = _[S.type];
    let F;
    if (g) {
      const O = Ue[g];
      F = dc.clone(O.uniforms);
    } else
      F = S.uniforms;
    return F;
  }
  function z(S, g) {
    let F;
    for (let O = 0, b = u.length; O < b; O++) {
      const H = u[O];
      if (H.cacheKey === g) {
        F = H, ++F.usedTimes;
        break;
      }
    }
    return F === void 0 && (F = new Af(i, g, S, s), u.push(F)), F;
  }
  function w(S) {
    if (--S.usedTimes === 0) {
      const g = u.indexOf(S);
      u[g] = u[u.length - 1], u.pop(), S.destroy();
    }
  }
  function R(S) {
    l.remove(S);
  }
  function k() {
    l.dispose();
  }
  return {
    getParameters: d,
    getProgramCacheKey: h,
    getUniforms: T,
    acquireProgram: z,
    releaseProgram: w,
    releaseShaderCache: R,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: u,
    dispose: k
  };
}
function Pf() {
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
function Lf(i, t) {
  return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.material.id !== t.material.id ? i.material.id - t.material.id : i.z !== t.z ? i.z - t.z : i.id - t.id;
}
function La(i, t) {
  return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.z !== t.z ? t.z - i.z : i.id - t.id;
}
function Da() {
  const i = [];
  let t = 0;
  const e = [], n = [], r = [];
  function s() {
    t = 0, e.length = 0, n.length = 0, r.length = 0;
  }
  function a(p, f, m, _, x, d) {
    let h = i[t];
    return h === void 0 ? (h = {
      id: p.id,
      object: p,
      geometry: f,
      material: m,
      groupOrder: _,
      renderOrder: p.renderOrder,
      z: x,
      group: d
    }, i[t] = h) : (h.id = p.id, h.object = p, h.geometry = f, h.material = m, h.groupOrder = _, h.renderOrder = p.renderOrder, h.z = x, h.group = d), t++, h;
  }
  function o(p, f, m, _, x, d) {
    const h = a(p, f, m, _, x, d);
    m.transmission > 0 ? n.push(h) : m.transparent === !0 ? r.push(h) : e.push(h);
  }
  function l(p, f, m, _, x, d) {
    const h = a(p, f, m, _, x, d);
    m.transmission > 0 ? n.unshift(h) : m.transparent === !0 ? r.unshift(h) : e.unshift(h);
  }
  function c(p, f) {
    e.length > 1 && e.sort(p || Lf), n.length > 1 && n.sort(f || La), r.length > 1 && r.sort(f || La);
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
function Df() {
  let i = /* @__PURE__ */ new WeakMap();
  function t(n, r) {
    const s = i.get(n);
    let a;
    return s === void 0 ? (a = new Da(), i.set(n, [a])) : r >= s.length ? (a = new Da(), s.push(a)) : a = s[r], a;
  }
  function e() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: e
  };
}
function Uf() {
  const i = {};
  return {
    get: function(t) {
      if (i[t.id] !== void 0)
        return i[t.id];
      let e;
      switch (t.type) {
        case "DirectionalLight":
          e = {
            direction: new D(),
            color: new Pt()
          };
          break;
        case "SpotLight":
          e = {
            position: new D(),
            direction: new D(),
            color: new Pt(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          e = {
            position: new D(),
            color: new Pt(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          e = {
            direction: new D(),
            skyColor: new Pt(),
            groundColor: new Pt()
          };
          break;
        case "RectAreaLight":
          e = {
            color: new Pt(),
            position: new D(),
            halfWidth: new D(),
            halfHeight: new D()
          };
          break;
      }
      return i[t.id] = e, e;
    }
  };
}
function If() {
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
let Nf = 0;
function Ff(i, t) {
  return (t.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (i.map ? 1 : 0);
}
function Of(i) {
  const t = new Uf(), e = If(), n = {
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
    n.probe.push(new D());
  const r = new D(), s = new $t(), a = new $t();
  function o(c, u) {
    let p = 0, f = 0, m = 0;
    for (let F = 0; F < 9; F++)
      n.probe[F].set(0, 0, 0);
    let _ = 0, x = 0, d = 0, h = 0, A = 0, E = 0, T = 0, z = 0, w = 0, R = 0, k = 0;
    c.sort(Ff);
    const S = u === !0 ? Math.PI : 1;
    for (let F = 0, O = c.length; F < O; F++) {
      const b = c[F], H = b.color, W = b.intensity, q = b.distance, tt = b.shadow && b.shadow.map ? b.shadow.map.texture : null;
      if (b.isAmbientLight)
        p += H.r * W * S, f += H.g * W * S, m += H.b * W * S;
      else if (b.isLightProbe) {
        for (let N = 0; N < 9; N++)
          n.probe[N].addScaledVector(b.sh.coefficients[N], W);
        k++;
      } else if (b.isDirectionalLight) {
        const N = t.get(b);
        if (N.color.copy(b.color).multiplyScalar(b.intensity * S), b.castShadow) {
          const j = b.shadow, Q = e.get(b);
          Q.shadowBias = j.bias, Q.shadowNormalBias = j.normalBias, Q.shadowRadius = j.radius, Q.shadowMapSize = j.mapSize, n.directionalShadow[_] = Q, n.directionalShadowMap[_] = tt, n.directionalShadowMatrix[_] = b.shadow.matrix, E++;
        }
        n.directional[_] = N, _++;
      } else if (b.isSpotLight) {
        const N = t.get(b);
        N.position.setFromMatrixPosition(b.matrixWorld), N.color.copy(H).multiplyScalar(W * S), N.distance = q, N.coneCos = Math.cos(b.angle), N.penumbraCos = Math.cos(b.angle * (1 - b.penumbra)), N.decay = b.decay, n.spot[d] = N;
        const j = b.shadow;
        if (b.map && (n.spotLightMap[w] = b.map, w++, j.updateMatrices(b), b.castShadow && R++), n.spotLightMatrix[d] = j.matrix, b.castShadow) {
          const Q = e.get(b);
          Q.shadowBias = j.bias, Q.shadowNormalBias = j.normalBias, Q.shadowRadius = j.radius, Q.shadowMapSize = j.mapSize, n.spotShadow[d] = Q, n.spotShadowMap[d] = tt, z++;
        }
        d++;
      } else if (b.isRectAreaLight) {
        const N = t.get(b);
        N.color.copy(H).multiplyScalar(W), N.halfWidth.set(b.width * 0.5, 0, 0), N.halfHeight.set(0, b.height * 0.5, 0), n.rectArea[h] = N, h++;
      } else if (b.isPointLight) {
        const N = t.get(b);
        if (N.color.copy(b.color).multiplyScalar(b.intensity * S), N.distance = b.distance, N.decay = b.decay, b.castShadow) {
          const j = b.shadow, Q = e.get(b);
          Q.shadowBias = j.bias, Q.shadowNormalBias = j.normalBias, Q.shadowRadius = j.radius, Q.shadowMapSize = j.mapSize, Q.shadowCameraNear = j.camera.near, Q.shadowCameraFar = j.camera.far, n.pointShadow[x] = Q, n.pointShadowMap[x] = tt, n.pointShadowMatrix[x] = b.shadow.matrix, T++;
        }
        n.point[x] = N, x++;
      } else if (b.isHemisphereLight) {
        const N = t.get(b);
        N.skyColor.copy(b.color).multiplyScalar(W * S), N.groundColor.copy(b.groundColor).multiplyScalar(W * S), n.hemi[A] = N, A++;
      }
    }
    h > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = it.LTC_FLOAT_1, n.rectAreaLTC2 = it.LTC_FLOAT_2) : (n.rectAreaLTC1 = it.LTC_HALF_1, n.rectAreaLTC2 = it.LTC_HALF_2)), n.ambient[0] = p, n.ambient[1] = f, n.ambient[2] = m;
    const g = n.hash;
    (g.directionalLength !== _ || g.pointLength !== x || g.spotLength !== d || g.rectAreaLength !== h || g.hemiLength !== A || g.numDirectionalShadows !== E || g.numPointShadows !== T || g.numSpotShadows !== z || g.numSpotMaps !== w || g.numLightProbes !== k) && (n.directional.length = _, n.spot.length = d, n.rectArea.length = h, n.point.length = x, n.hemi.length = A, n.directionalShadow.length = E, n.directionalShadowMap.length = E, n.pointShadow.length = T, n.pointShadowMap.length = T, n.spotShadow.length = z, n.spotShadowMap.length = z, n.directionalShadowMatrix.length = E, n.pointShadowMatrix.length = T, n.spotLightMatrix.length = z + w - R, n.spotLightMap.length = w, n.numSpotLightShadowsWithMaps = R, n.numLightProbes = k, g.directionalLength = _, g.pointLength = x, g.spotLength = d, g.rectAreaLength = h, g.hemiLength = A, g.numDirectionalShadows = E, g.numPointShadows = T, g.numSpotShadows = z, g.numSpotMaps = w, g.numLightProbes = k, n.version = Nf++);
  }
  function l(c, u) {
    let p = 0, f = 0, m = 0, _ = 0, x = 0;
    const d = u.matrixWorldInverse;
    for (let h = 0, A = c.length; h < A; h++) {
      const E = c[h];
      if (E.isDirectionalLight) {
        const T = n.directional[p];
        T.direction.setFromMatrixPosition(E.matrixWorld), r.setFromMatrixPosition(E.target.matrixWorld), T.direction.sub(r), T.direction.transformDirection(d), p++;
      } else if (E.isSpotLight) {
        const T = n.spot[m];
        T.position.setFromMatrixPosition(E.matrixWorld), T.position.applyMatrix4(d), T.direction.setFromMatrixPosition(E.matrixWorld), r.setFromMatrixPosition(E.target.matrixWorld), T.direction.sub(r), T.direction.transformDirection(d), m++;
      } else if (E.isRectAreaLight) {
        const T = n.rectArea[_];
        T.position.setFromMatrixPosition(E.matrixWorld), T.position.applyMatrix4(d), a.identity(), s.copy(E.matrixWorld), s.premultiply(d), a.extractRotation(s), T.halfWidth.set(E.width * 0.5, 0, 0), T.halfHeight.set(0, E.height * 0.5, 0), T.halfWidth.applyMatrix4(a), T.halfHeight.applyMatrix4(a), _++;
      } else if (E.isPointLight) {
        const T = n.point[f];
        T.position.setFromMatrixPosition(E.matrixWorld), T.position.applyMatrix4(d), f++;
      } else if (E.isHemisphereLight) {
        const T = n.hemi[x];
        T.direction.setFromMatrixPosition(E.matrixWorld), T.direction.transformDirection(d), x++;
      }
    }
  }
  return {
    setup: o,
    setupView: l,
    state: n
  };
}
function Ua(i) {
  const t = new Of(i), e = [], n = [];
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
function Bf(i) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(r, s = 0) {
    const a = t.get(r);
    let o;
    return a === void 0 ? (o = new Ua(i), t.set(r, [o])) : s >= a.length ? (o = new Ua(i), a.push(o)) : o = a[s], o;
  }
  function n() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: n
  };
}
class zf extends fi {
  constructor(t) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Nl, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
  }
}
class Hf extends fi {
  constructor(t) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this;
  }
}
const Vf = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Gf = `uniform sampler2D shadow_pass;
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
function kf(i, t, e) {
  let n = new es();
  const r = new zt(), s = new zt(), a = new re(), o = new zf({ depthPacking: Fl }), l = new Hf(), c = {}, u = e.maxTextureSize, p = { [sn]: me, [me]: sn, [We]: We }, f = new on({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new zt() },
      radius: { value: 4 }
    },
    vertexShader: Vf,
    fragmentShader: Gf
  }), m = f.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const _ = new Fe();
  _.setAttribute(
    "position",
    new Pe(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const x = new Ce(_, f), d = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = qa;
  let h = this.type;
  this.render = function(w, R, k) {
    if (d.enabled === !1 || d.autoUpdate === !1 && d.needsUpdate === !1 || w.length === 0)
      return;
    const S = i.getRenderTarget(), g = i.getActiveCubeFace(), F = i.getActiveMipmapLevel(), O = i.state;
    O.setBlending(nn), O.buffers.color.setClear(1, 1, 1, 1), O.buffers.depth.setTest(!0), O.setScissorTest(!1);
    const b = h !== ke && this.type === ke, H = h === ke && this.type !== ke;
    for (let W = 0, q = w.length; W < q; W++) {
      const tt = w[W], N = tt.shadow;
      if (N === void 0) {
        console.warn("THREE.WebGLShadowMap:", tt, "has no shadow.");
        continue;
      }
      if (N.autoUpdate === !1 && N.needsUpdate === !1)
        continue;
      r.copy(N.mapSize);
      const j = N.getFrameExtents();
      if (r.multiply(j), s.copy(N.mapSize), (r.x > u || r.y > u) && (r.x > u && (s.x = Math.floor(u / j.x), r.x = s.x * j.x, N.mapSize.x = s.x), r.y > u && (s.y = Math.floor(u / j.y), r.y = s.y * j.y, N.mapSize.y = s.y)), N.map === null || b === !0 || H === !0) {
        const dt = this.type !== ke ? { minFilter: Te, magFilter: Te } : {};
        N.map !== null && N.map.dispose(), N.map = new En(r.x, r.y, dt), N.map.texture.name = tt.name + ".shadowMap", N.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(N.map), i.clear();
      const Q = N.getViewportCount();
      for (let dt = 0; dt < Q; dt++) {
        const Lt = N.getViewport(dt);
        a.set(
          s.x * Lt.x,
          s.y * Lt.y,
          s.x * Lt.z,
          s.y * Lt.w
        ), O.viewport(a), N.updateMatrices(tt, dt), n = N.getFrustum(), T(R, k, N.camera, tt, this.type);
      }
      N.isPointLightShadow !== !0 && this.type === ke && A(N, k), N.needsUpdate = !1;
    }
    h = this.type, d.needsUpdate = !1, i.setRenderTarget(S, g, F);
  };
  function A(w, R) {
    const k = t.update(x);
    f.defines.VSM_SAMPLES !== w.blurSamples && (f.defines.VSM_SAMPLES = w.blurSamples, m.defines.VSM_SAMPLES = w.blurSamples, f.needsUpdate = !0, m.needsUpdate = !0), w.mapPass === null && (w.mapPass = new En(r.x, r.y)), f.uniforms.shadow_pass.value = w.map.texture, f.uniforms.resolution.value = w.mapSize, f.uniforms.radius.value = w.radius, i.setRenderTarget(w.mapPass), i.clear(), i.renderBufferDirect(R, null, k, f, x, null), m.uniforms.shadow_pass.value = w.mapPass.texture, m.uniforms.resolution.value = w.mapSize, m.uniforms.radius.value = w.radius, i.setRenderTarget(w.map), i.clear(), i.renderBufferDirect(R, null, k, m, x, null);
  }
  function E(w, R, k, S) {
    let g = null;
    const F = k.isPointLight === !0 ? w.customDistanceMaterial : w.customDepthMaterial;
    if (F !== void 0)
      g = F;
    else if (g = k.isPointLight === !0 ? l : o, i.localClippingEnabled && R.clipShadows === !0 && Array.isArray(R.clippingPlanes) && R.clippingPlanes.length !== 0 || R.displacementMap && R.displacementScale !== 0 || R.alphaMap && R.alphaTest > 0 || R.map && R.alphaTest > 0) {
      const O = g.uuid, b = R.uuid;
      let H = c[O];
      H === void 0 && (H = {}, c[O] = H);
      let W = H[b];
      W === void 0 && (W = g.clone(), H[b] = W, R.addEventListener("dispose", z)), g = W;
    }
    if (g.visible = R.visible, g.wireframe = R.wireframe, S === ke ? g.side = R.shadowSide !== null ? R.shadowSide : R.side : g.side = R.shadowSide !== null ? R.shadowSide : p[R.side], g.alphaMap = R.alphaMap, g.alphaTest = R.alphaTest, g.map = R.map, g.clipShadows = R.clipShadows, g.clippingPlanes = R.clippingPlanes, g.clipIntersection = R.clipIntersection, g.displacementMap = R.displacementMap, g.displacementScale = R.displacementScale, g.displacementBias = R.displacementBias, g.wireframeLinewidth = R.wireframeLinewidth, g.linewidth = R.linewidth, k.isPointLight === !0 && g.isMeshDistanceMaterial === !0) {
      const O = i.properties.get(g);
      O.light = k;
    }
    return g;
  }
  function T(w, R, k, S, g) {
    if (w.visible === !1)
      return;
    if (w.layers.test(R.layers) && (w.isMesh || w.isLine || w.isPoints) && (w.castShadow || w.receiveShadow && g === ke) && (!w.frustumCulled || n.intersectsObject(w))) {
      w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse, w.matrixWorld);
      const b = t.update(w), H = w.material;
      if (Array.isArray(H)) {
        const W = b.groups;
        for (let q = 0, tt = W.length; q < tt; q++) {
          const N = W[q], j = H[N.materialIndex];
          if (j && j.visible) {
            const Q = E(w, j, S, g);
            w.onBeforeShadow(i, w, R, k, b, Q, N), i.renderBufferDirect(k, null, b, Q, w, N), w.onAfterShadow(i, w, R, k, b, Q, N);
          }
        }
      } else if (H.visible) {
        const W = E(w, H, S, g);
        w.onBeforeShadow(i, w, R, k, b, W, null), i.renderBufferDirect(k, null, b, W, w, null), w.onAfterShadow(i, w, R, k, b, W, null);
      }
    }
    const O = w.children;
    for (let b = 0, H = O.length; b < H; b++)
      T(O[b], R, k, S, g);
  }
  function z(w) {
    w.target.removeEventListener("dispose", z);
    for (const k in c) {
      const S = c[k], g = w.target.uuid;
      g in S && (S[g].dispose(), delete S[g]);
    }
  }
}
function Wf(i) {
  function t() {
    let C = !1;
    const $ = new re();
    let X = null;
    const rt = new re(0, 0, 0, 0);
    return {
      setMask: function(lt) {
        X !== lt && !C && (i.colorMask(lt, lt, lt, lt), X = lt);
      },
      setLocked: function(lt) {
        C = lt;
      },
      setClear: function(lt, Ht, qt, Zt, ae) {
        ae === !0 && (lt *= Zt, Ht *= Zt, qt *= Zt), $.set(lt, Ht, qt, Zt), rt.equals($) === !1 && (i.clearColor(lt, Ht, qt, Zt), rt.copy($));
      },
      reset: function() {
        C = !1, X = null, rt.set(-1, 0, 0, 0);
      }
    };
  }
  function e() {
    let C = !1, $ = null, X = null, rt = null;
    return {
      setTest: function(lt) {
        lt ? ut(i.DEPTH_TEST) : nt(i.DEPTH_TEST);
      },
      setMask: function(lt) {
        $ !== lt && !C && (i.depthMask(lt), $ = lt);
      },
      setFunc: function(lt) {
        if (X !== lt) {
          switch (lt) {
            case ll:
              i.depthFunc(i.NEVER);
              break;
            case cl:
              i.depthFunc(i.ALWAYS);
              break;
            case ul:
              i.depthFunc(i.LESS);
              break;
            case Gi:
              i.depthFunc(i.LEQUAL);
              break;
            case hl:
              i.depthFunc(i.EQUAL);
              break;
            case dl:
              i.depthFunc(i.GEQUAL);
              break;
            case fl:
              i.depthFunc(i.GREATER);
              break;
            case pl:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          X = lt;
        }
      },
      setLocked: function(lt) {
        C = lt;
      },
      setClear: function(lt) {
        rt !== lt && (i.clearDepth(lt), rt = lt);
      },
      reset: function() {
        C = !1, $ = null, X = null, rt = null;
      }
    };
  }
  function n() {
    let C = !1, $ = null, X = null, rt = null, lt = null, Ht = null, qt = null, Zt = null, ae = null;
    return {
      setTest: function(kt) {
        C || (kt ? ut(i.STENCIL_TEST) : nt(i.STENCIL_TEST));
      },
      setMask: function(kt) {
        $ !== kt && !C && (i.stencilMask(kt), $ = kt);
      },
      setFunc: function(kt, Le, he) {
        (X !== kt || rt !== Le || lt !== he) && (i.stencilFunc(kt, Le, he), X = kt, rt = Le, lt = he);
      },
      setOp: function(kt, Le, he) {
        (Ht !== kt || qt !== Le || Zt !== he) && (i.stencilOp(kt, Le, he), Ht = kt, qt = Le, Zt = he);
      },
      setLocked: function(kt) {
        C = kt;
      },
      setClear: function(kt) {
        ae !== kt && (i.clearStencil(kt), ae = kt);
      },
      reset: function() {
        C = !1, $ = null, X = null, rt = null, lt = null, Ht = null, qt = null, Zt = null, ae = null;
      }
    };
  }
  const r = new t(), s = new e(), a = new n(), o = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let c = {}, u = {}, p = /* @__PURE__ */ new WeakMap(), f = [], m = null, _ = !1, x = null, d = null, h = null, A = null, E = null, T = null, z = null, w = new Pt(0, 0, 0), R = 0, k = !1, S = null, g = null, F = null, O = null, b = null;
  const H = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let W = !1, q = 0;
  const tt = i.getParameter(i.VERSION);
  tt.indexOf("WebGL") !== -1 ? (q = parseFloat(/^WebGL (\d)/.exec(tt)[1]), W = q >= 1) : tt.indexOf("OpenGL ES") !== -1 && (q = parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]), W = q >= 2);
  let N = null, j = {};
  const Q = i.getParameter(i.SCISSOR_BOX), dt = i.getParameter(i.VIEWPORT), Lt = new re().fromArray(Q), Vt = new re().fromArray(dt);
  function G(C, $, X, rt) {
    const lt = new Uint8Array(4), Ht = i.createTexture();
    i.bindTexture(C, Ht), i.texParameteri(C, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(C, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let qt = 0; qt < X; qt++)
      C === i.TEXTURE_3D || C === i.TEXTURE_2D_ARRAY ? i.texImage3D($, 0, i.RGBA, 1, 1, rt, 0, i.RGBA, i.UNSIGNED_BYTE, lt) : i.texImage2D($ + qt, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, lt);
    return Ht;
  }
  const Y = {};
  Y[i.TEXTURE_2D] = G(i.TEXTURE_2D, i.TEXTURE_2D, 1), Y[i.TEXTURE_CUBE_MAP] = G(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), Y[i.TEXTURE_2D_ARRAY] = G(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), Y[i.TEXTURE_3D] = G(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), r.setClear(0, 0, 0, 1), s.setClear(1), a.setClear(0), ut(i.DEPTH_TEST), s.setFunc(Gi), Ft(!1), Dt(ps), ut(i.CULL_FACE), Xt(nn);
  function ut(C) {
    c[C] !== !0 && (i.enable(C), c[C] = !0);
  }
  function nt(C) {
    c[C] !== !1 && (i.disable(C), c[C] = !1);
  }
  function Et(C, $) {
    return u[C] !== $ ? (i.bindFramebuffer(C, $), u[C] = $, C === i.DRAW_FRAMEBUFFER && (u[i.FRAMEBUFFER] = $), C === i.FRAMEBUFFER && (u[i.DRAW_FRAMEBUFFER] = $), !0) : !1;
  }
  function It(C, $) {
    let X = f, rt = !1;
    if (C) {
      X = p.get($), X === void 0 && (X = [], p.set($, X));
      const lt = C.textures;
      if (X.length !== lt.length || X[0] !== i.COLOR_ATTACHMENT0) {
        for (let Ht = 0, qt = lt.length; Ht < qt; Ht++)
          X[Ht] = i.COLOR_ATTACHMENT0 + Ht;
        X.length = lt.length, rt = !0;
      }
    } else
      X[0] !== i.BACK && (X[0] = i.BACK, rt = !0);
    rt && i.drawBuffers(X);
  }
  function L(C) {
    return m !== C ? (i.useProgram(C), m = C, !0) : !1;
  }
  const yt = {
    [vn]: i.FUNC_ADD,
    [Xo]: i.FUNC_SUBTRACT,
    [qo]: i.FUNC_REVERSE_SUBTRACT
  };
  yt[Yo] = i.MIN, yt[Ko] = i.MAX;
  const ht = {
    [$o]: i.ZERO,
    [jo]: i.ONE,
    [Zo]: i.SRC_COLOR,
    [Vr]: i.SRC_ALPHA,
    [il]: i.SRC_ALPHA_SATURATE,
    [el]: i.DST_COLOR,
    [Qo]: i.DST_ALPHA,
    [Jo]: i.ONE_MINUS_SRC_COLOR,
    [Gr]: i.ONE_MINUS_SRC_ALPHA,
    [nl]: i.ONE_MINUS_DST_COLOR,
    [tl]: i.ONE_MINUS_DST_ALPHA,
    [rl]: i.CONSTANT_COLOR,
    [sl]: i.ONE_MINUS_CONSTANT_COLOR,
    [al]: i.CONSTANT_ALPHA,
    [ol]: i.ONE_MINUS_CONSTANT_ALPHA
  };
  function Xt(C, $, X, rt, lt, Ht, qt, Zt, ae, kt) {
    if (C === nn) {
      _ === !0 && (nt(i.BLEND), _ = !1);
      return;
    }
    if (_ === !1 && (ut(i.BLEND), _ = !0), C !== Wo) {
      if (C !== x || kt !== k) {
        if ((d !== vn || E !== vn) && (i.blendEquation(i.FUNC_ADD), d = vn, E = vn), kt)
          switch (C) {
            case Gn:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case ms:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case _s:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case gs:
              i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        else
          switch (C) {
            case Gn:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case ms:
              i.blendFunc(i.SRC_ALPHA, i.ONE);
              break;
            case _s:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case gs:
              i.blendFunc(i.ZERO, i.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        h = null, A = null, T = null, z = null, w.set(0, 0, 0), R = 0, x = C, k = kt;
      }
      return;
    }
    lt = lt || $, Ht = Ht || X, qt = qt || rt, ($ !== d || lt !== E) && (i.blendEquationSeparate(yt[$], yt[lt]), d = $, E = lt), (X !== h || rt !== A || Ht !== T || qt !== z) && (i.blendFuncSeparate(ht[X], ht[rt], ht[Ht], ht[qt]), h = X, A = rt, T = Ht, z = qt), (Zt.equals(w) === !1 || ae !== R) && (i.blendColor(Zt.r, Zt.g, Zt.b, ae), w.copy(Zt), R = ae), x = C, k = !1;
  }
  function xt(C, $) {
    C.side === We ? nt(i.CULL_FACE) : ut(i.CULL_FACE);
    let X = C.side === me;
    $ && (X = !X), Ft(X), C.blending === Gn && C.transparent === !1 ? Xt(nn) : Xt(C.blending, C.blendEquation, C.blendSrc, C.blendDst, C.blendEquationAlpha, C.blendSrcAlpha, C.blendDstAlpha, C.blendColor, C.blendAlpha, C.premultipliedAlpha), s.setFunc(C.depthFunc), s.setTest(C.depthTest), s.setMask(C.depthWrite), r.setMask(C.colorWrite);
    const rt = C.stencilWrite;
    a.setTest(rt), rt && (a.setMask(C.stencilWriteMask), a.setFunc(C.stencilFunc, C.stencilRef, C.stencilFuncMask), a.setOp(C.stencilFail, C.stencilZFail, C.stencilZPass)), jt(C.polygonOffset, C.polygonOffsetFactor, C.polygonOffsetUnits), C.alphaToCoverage === !0 ? ut(i.SAMPLE_ALPHA_TO_COVERAGE) : nt(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Ft(C) {
    S !== C && (C ? i.frontFace(i.CW) : i.frontFace(i.CCW), S = C);
  }
  function Dt(C) {
    C !== Vo ? (ut(i.CULL_FACE), C !== g && (C === ps ? i.cullFace(i.BACK) : C === Go ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : nt(i.CULL_FACE), g = C;
  }
  function Ot(C) {
    C !== F && (W && i.lineWidth(C), F = C);
  }
  function jt(C, $, X) {
    C ? (ut(i.POLYGON_OFFSET_FILL), (O !== $ || b !== X) && (i.polygonOffset($, X), O = $, b = X)) : nt(i.POLYGON_OFFSET_FILL);
  }
  function y(C) {
    C ? ut(i.SCISSOR_TEST) : nt(i.SCISSOR_TEST);
  }
  function v(C) {
    C === void 0 && (C = i.TEXTURE0 + H - 1), N !== C && (i.activeTexture(C), N = C);
  }
  function V(C, $, X) {
    X === void 0 && (N === null ? X = i.TEXTURE0 + H - 1 : X = N);
    let rt = j[X];
    rt === void 0 && (rt = { type: void 0, texture: void 0 }, j[X] = rt), (rt.type !== C || rt.texture !== $) && (N !== X && (i.activeTexture(X), N = X), i.bindTexture(C, $ || Y[C]), rt.type = C, rt.texture = $);
  }
  function K() {
    const C = j[N];
    C !== void 0 && C.type !== void 0 && (i.bindTexture(C.type, null), C.type = void 0, C.texture = void 0);
  }
  function Z() {
    try {
      i.compressedTexImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function J() {
    try {
      i.compressedTexImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function _t() {
    try {
      i.texSubImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ot() {
    try {
      i.texSubImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function at() {
    try {
      i.compressedTexSubImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function wt() {
    try {
      i.compressedTexSubImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function et() {
    try {
      i.texStorage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function mt() {
    try {
      i.texStorage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Bt() {
    try {
      i.texImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function gt() {
    try {
      i.texImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ct(C) {
    Lt.equals(C) === !1 && (i.scissor(C.x, C.y, C.z, C.w), Lt.copy(C));
  }
  function Rt(C) {
    Vt.equals(C) === !1 && (i.viewport(C.x, C.y, C.z, C.w), Vt.copy(C));
  }
  function Nt(C, $) {
    let X = l.get($);
    X === void 0 && (X = /* @__PURE__ */ new WeakMap(), l.set($, X));
    let rt = X.get(C);
    rt === void 0 && (rt = i.getUniformBlockIndex($, C.name), X.set(C, rt));
  }
  function Jt(C, $) {
    const rt = l.get($).get(C);
    o.get($) !== rt && (i.uniformBlockBinding($, rt, C.__bindingPointIndex), o.set($, rt));
  }
  function Ct() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), c = {}, N = null, j = {}, u = {}, p = /* @__PURE__ */ new WeakMap(), f = [], m = null, _ = !1, x = null, d = null, h = null, A = null, E = null, T = null, z = null, w = new Pt(0, 0, 0), R = 0, k = !1, S = null, g = null, F = null, O = null, b = null, Lt.set(0, 0, i.canvas.width, i.canvas.height), Vt.set(0, 0, i.canvas.width, i.canvas.height), r.reset(), s.reset(), a.reset();
  }
  return {
    buffers: {
      color: r,
      depth: s,
      stencil: a
    },
    enable: ut,
    disable: nt,
    bindFramebuffer: Et,
    drawBuffers: It,
    useProgram: L,
    setBlending: Xt,
    setMaterial: xt,
    setFlipSided: Ft,
    setCullFace: Dt,
    setLineWidth: Ot,
    setPolygonOffset: jt,
    setScissorTest: y,
    activeTexture: v,
    bindTexture: V,
    unbindTexture: K,
    compressedTexImage2D: Z,
    compressedTexImage3D: J,
    texImage2D: Bt,
    texImage3D: gt,
    updateUBOMapping: Nt,
    uniformBlockBinding: Jt,
    texStorage2D: et,
    texStorage3D: mt,
    texSubImage2D: _t,
    texSubImage3D: ot,
    compressedTexSubImage2D: at,
    compressedTexSubImage3D: wt,
    scissor: ct,
    viewport: Rt,
    reset: Ct
  };
}
function Xf(i, t, e, n, r, s, a) {
  const o = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), c = new zt(), u = /* @__PURE__ */ new WeakMap();
  let p;
  const f = /* @__PURE__ */ new WeakMap();
  let m = !1;
  try {
    m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function _(y, v) {
    return m ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(y, v)
    ) : Yi("canvas");
  }
  function x(y, v, V) {
    let K = 1;
    const Z = jt(y);
    if ((Z.width > V || Z.height > V) && (K = V / Math.max(Z.width, Z.height)), K < 1)
      if (typeof HTMLImageElement < "u" && y instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && y instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && y instanceof ImageBitmap || typeof VideoFrame < "u" && y instanceof VideoFrame) {
        const J = Math.floor(K * Z.width), _t = Math.floor(K * Z.height);
        p === void 0 && (p = _(J, _t));
        const ot = v ? _(J, _t) : p;
        return ot.width = J, ot.height = _t, ot.getContext("2d").drawImage(y, 0, 0, J, _t), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + Z.width + "x" + Z.height + ") to (" + J + "x" + _t + ")."), ot;
      } else
        return "data" in y && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + Z.width + "x" + Z.height + ")."), y;
    return y;
  }
  function d(y) {
    return y.generateMipmaps && y.minFilter !== Te && y.minFilter !== Re;
  }
  function h(y) {
    i.generateMipmap(y);
  }
  function A(y, v, V, K, Z = !1) {
    if (y !== null) {
      if (i[y] !== void 0)
        return i[y];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + y + "'");
    }
    let J = v;
    if (v === i.RED && (V === i.FLOAT && (J = i.R32F), V === i.HALF_FLOAT && (J = i.R16F), V === i.UNSIGNED_BYTE && (J = i.R8)), v === i.RED_INTEGER && (V === i.UNSIGNED_BYTE && (J = i.R8UI), V === i.UNSIGNED_SHORT && (J = i.R16UI), V === i.UNSIGNED_INT && (J = i.R32UI), V === i.BYTE && (J = i.R8I), V === i.SHORT && (J = i.R16I), V === i.INT && (J = i.R32I)), v === i.RG && (V === i.FLOAT && (J = i.RG32F), V === i.HALF_FLOAT && (J = i.RG16F), V === i.UNSIGNED_BYTE && (J = i.RG8)), v === i.RG_INTEGER && (V === i.UNSIGNED_BYTE && (J = i.RG8UI), V === i.UNSIGNED_SHORT && (J = i.RG16UI), V === i.UNSIGNED_INT && (J = i.RG32UI), V === i.BYTE && (J = i.RG8I), V === i.SHORT && (J = i.RG16I), V === i.INT && (J = i.RG32I)), v === i.RGB && V === i.UNSIGNED_INT_5_9_9_9_REV && (J = i.RGB9_E5), v === i.RGBA) {
      const _t = Z ? ki : Wt.getTransfer(K);
      V === i.FLOAT && (J = i.RGBA32F), V === i.HALF_FLOAT && (J = i.RGBA16F), V === i.UNSIGNED_BYTE && (J = _t === Yt ? i.SRGB8_ALPHA8 : i.RGBA8), V === i.UNSIGNED_SHORT_4_4_4_4 && (J = i.RGBA4), V === i.UNSIGNED_SHORT_5_5_5_1 && (J = i.RGB5_A1);
    }
    return (J === i.R16F || J === i.R32F || J === i.RG16F || J === i.RG32F || J === i.RGBA16F || J === i.RGBA32F) && t.get("EXT_color_buffer_float"), J;
  }
  function E(y, v) {
    return d(y) === !0 || y.isFramebufferTexture && y.minFilter !== Te && y.minFilter !== Re ? Math.log2(Math.max(v.width, v.height)) + 1 : y.mipmaps !== void 0 && y.mipmaps.length > 0 ? y.mipmaps.length : y.isCompressedTexture && Array.isArray(y.image) ? v.mipmaps.length : 1;
  }
  function T(y) {
    const v = y.target;
    v.removeEventListener("dispose", T), w(v), v.isVideoTexture && u.delete(v);
  }
  function z(y) {
    const v = y.target;
    v.removeEventListener("dispose", z), k(v);
  }
  function w(y) {
    const v = n.get(y);
    if (v.__webglInit === void 0)
      return;
    const V = y.source, K = f.get(V);
    if (K) {
      const Z = K[v.__cacheKey];
      Z.usedTimes--, Z.usedTimes === 0 && R(y), Object.keys(K).length === 0 && f.delete(V);
    }
    n.remove(y);
  }
  function R(y) {
    const v = n.get(y);
    i.deleteTexture(v.__webglTexture);
    const V = y.source, K = f.get(V);
    delete K[v.__cacheKey], a.memory.textures--;
  }
  function k(y) {
    const v = n.get(y);
    if (y.depthTexture && y.depthTexture.dispose(), y.isWebGLCubeRenderTarget)
      for (let K = 0; K < 6; K++) {
        if (Array.isArray(v.__webglFramebuffer[K]))
          for (let Z = 0; Z < v.__webglFramebuffer[K].length; Z++)
            i.deleteFramebuffer(v.__webglFramebuffer[K][Z]);
        else
          i.deleteFramebuffer(v.__webglFramebuffer[K]);
        v.__webglDepthbuffer && i.deleteRenderbuffer(v.__webglDepthbuffer[K]);
      }
    else {
      if (Array.isArray(v.__webglFramebuffer))
        for (let K = 0; K < v.__webglFramebuffer.length; K++)
          i.deleteFramebuffer(v.__webglFramebuffer[K]);
      else
        i.deleteFramebuffer(v.__webglFramebuffer);
      if (v.__webglDepthbuffer && i.deleteRenderbuffer(v.__webglDepthbuffer), v.__webglMultisampledFramebuffer && i.deleteFramebuffer(v.__webglMultisampledFramebuffer), v.__webglColorRenderbuffer)
        for (let K = 0; K < v.__webglColorRenderbuffer.length; K++)
          v.__webglColorRenderbuffer[K] && i.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);
      v.__webglDepthRenderbuffer && i.deleteRenderbuffer(v.__webglDepthRenderbuffer);
    }
    const V = y.textures;
    for (let K = 0, Z = V.length; K < Z; K++) {
      const J = n.get(V[K]);
      J.__webglTexture && (i.deleteTexture(J.__webglTexture), a.memory.textures--), n.remove(V[K]);
    }
    n.remove(y);
  }
  let S = 0;
  function g() {
    S = 0;
  }
  function F() {
    const y = S;
    return y >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + y + " texture units while this GPU supports only " + r.maxTextures), S += 1, y;
  }
  function O(y) {
    const v = [];
    return v.push(y.wrapS), v.push(y.wrapT), v.push(y.wrapR || 0), v.push(y.magFilter), v.push(y.minFilter), v.push(y.anisotropy), v.push(y.internalFormat), v.push(y.format), v.push(y.type), v.push(y.generateMipmaps), v.push(y.premultiplyAlpha), v.push(y.flipY), v.push(y.unpackAlignment), v.push(y.colorSpace), v.join();
  }
  function b(y, v) {
    const V = n.get(y);
    if (y.isVideoTexture && Dt(y), y.isRenderTargetTexture === !1 && y.version > 0 && V.__version !== y.version) {
      const K = y.image;
      if (K === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (K.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Lt(V, y, v);
        return;
      }
    }
    e.bindTexture(i.TEXTURE_2D, V.__webglTexture, i.TEXTURE0 + v);
  }
  function H(y, v) {
    const V = n.get(y);
    if (y.version > 0 && V.__version !== y.version) {
      Lt(V, y, v);
      return;
    }
    e.bindTexture(i.TEXTURE_2D_ARRAY, V.__webglTexture, i.TEXTURE0 + v);
  }
  function W(y, v) {
    const V = n.get(y);
    if (y.version > 0 && V.__version !== y.version) {
      Lt(V, y, v);
      return;
    }
    e.bindTexture(i.TEXTURE_3D, V.__webglTexture, i.TEXTURE0 + v);
  }
  function q(y, v) {
    const V = n.get(y);
    if (y.version > 0 && V.__version !== y.version) {
      Vt(V, y, v);
      return;
    }
    e.bindTexture(i.TEXTURE_CUBE_MAP, V.__webglTexture, i.TEXTURE0 + v);
  }
  const tt = {
    [Xr]: i.REPEAT,
    [Mn]: i.CLAMP_TO_EDGE,
    [qr]: i.MIRRORED_REPEAT
  }, N = {
    [Te]: i.NEAREST,
    [Tl]: i.NEAREST_MIPMAP_NEAREST,
    [_i]: i.NEAREST_MIPMAP_LINEAR,
    [Re]: i.LINEAR,
    [ar]: i.LINEAR_MIPMAP_NEAREST,
    [Sn]: i.LINEAR_MIPMAP_LINEAR
  }, j = {
    [zl]: i.NEVER,
    [Xl]: i.ALWAYS,
    [Hl]: i.LESS,
    [no]: i.LEQUAL,
    [Vl]: i.EQUAL,
    [Wl]: i.GEQUAL,
    [Gl]: i.GREATER,
    [kl]: i.NOTEQUAL
  };
  function Q(y, v) {
    if (v.type === en && t.has("OES_texture_float_linear") === !1 && (v.magFilter === Re || v.magFilter === ar || v.magFilter === _i || v.magFilter === Sn || v.minFilter === Re || v.minFilter === ar || v.minFilter === _i || v.minFilter === Sn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(y, i.TEXTURE_WRAP_S, tt[v.wrapS]), i.texParameteri(y, i.TEXTURE_WRAP_T, tt[v.wrapT]), (y === i.TEXTURE_3D || y === i.TEXTURE_2D_ARRAY) && i.texParameteri(y, i.TEXTURE_WRAP_R, tt[v.wrapR]), i.texParameteri(y, i.TEXTURE_MAG_FILTER, N[v.magFilter]), i.texParameteri(y, i.TEXTURE_MIN_FILTER, N[v.minFilter]), v.compareFunction && (i.texParameteri(y, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(y, i.TEXTURE_COMPARE_FUNC, j[v.compareFunction])), t.has("EXT_texture_filter_anisotropic") === !0) {
      if (v.magFilter === Te || v.minFilter !== _i && v.minFilter !== Sn || v.type === en && t.has("OES_texture_float_linear") === !1)
        return;
      if (v.anisotropy > 1 || n.get(v).__currentAnisotropy) {
        const V = t.get("EXT_texture_filter_anisotropic");
        i.texParameterf(y, V.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(v.anisotropy, r.getMaxAnisotropy())), n.get(v).__currentAnisotropy = v.anisotropy;
      }
    }
  }
  function dt(y, v) {
    let V = !1;
    y.__webglInit === void 0 && (y.__webglInit = !0, v.addEventListener("dispose", T));
    const K = v.source;
    let Z = f.get(K);
    Z === void 0 && (Z = {}, f.set(K, Z));
    const J = O(v);
    if (J !== y.__cacheKey) {
      Z[J] === void 0 && (Z[J] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, V = !0), Z[J].usedTimes++;
      const _t = Z[y.__cacheKey];
      _t !== void 0 && (Z[y.__cacheKey].usedTimes--, _t.usedTimes === 0 && R(v)), y.__cacheKey = J, y.__webglTexture = Z[J].texture;
    }
    return V;
  }
  function Lt(y, v, V) {
    let K = i.TEXTURE_2D;
    (v.isDataArrayTexture || v.isCompressedArrayTexture) && (K = i.TEXTURE_2D_ARRAY), v.isData3DTexture && (K = i.TEXTURE_3D);
    const Z = dt(y, v), J = v.source;
    e.bindTexture(K, y.__webglTexture, i.TEXTURE0 + V);
    const _t = n.get(J);
    if (J.version !== _t.__version || Z === !0) {
      e.activeTexture(i.TEXTURE0 + V);
      const ot = Wt.getPrimaries(Wt.workingColorSpace), at = v.colorSpace === tn ? null : Wt.getPrimaries(v.colorSpace), wt = v.colorSpace === tn || ot === at ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, v.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, v.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, wt);
      let et = x(v.image, !1, r.maxTextureSize);
      et = Ot(v, et);
      const mt = s.convert(v.format, v.colorSpace), Bt = s.convert(v.type);
      let gt = A(v.internalFormat, mt, Bt, v.colorSpace, v.isVideoTexture);
      Q(K, v);
      let ct;
      const Rt = v.mipmaps, Nt = v.isVideoTexture !== !0, Jt = _t.__version === void 0 || Z === !0, Ct = J.dataReady, C = E(v, et);
      if (v.isDepthTexture)
        gt = i.DEPTH_COMPONENT16, v.type === en ? gt = i.DEPTH_COMPONENT32F : v.type === Yn ? gt = i.DEPTH_COMPONENT24 : v.type === ci && (gt = i.DEPTH24_STENCIL8), Jt && (Nt ? e.texStorage2D(i.TEXTURE_2D, 1, gt, et.width, et.height) : e.texImage2D(i.TEXTURE_2D, 0, gt, et.width, et.height, 0, mt, Bt, null));
      else if (v.isDataTexture)
        if (Rt.length > 0) {
          Nt && Jt && e.texStorage2D(i.TEXTURE_2D, C, gt, Rt[0].width, Rt[0].height);
          for (let $ = 0, X = Rt.length; $ < X; $++)
            ct = Rt[$], Nt ? Ct && e.texSubImage2D(i.TEXTURE_2D, $, 0, 0, ct.width, ct.height, mt, Bt, ct.data) : e.texImage2D(i.TEXTURE_2D, $, gt, ct.width, ct.height, 0, mt, Bt, ct.data);
          v.generateMipmaps = !1;
        } else
          Nt ? (Jt && e.texStorage2D(i.TEXTURE_2D, C, gt, et.width, et.height), Ct && e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, et.width, et.height, mt, Bt, et.data)) : e.texImage2D(i.TEXTURE_2D, 0, gt, et.width, et.height, 0, mt, Bt, et.data);
      else if (v.isCompressedTexture)
        if (v.isCompressedArrayTexture) {
          Nt && Jt && e.texStorage3D(i.TEXTURE_2D_ARRAY, C, gt, Rt[0].width, Rt[0].height, et.depth);
          for (let $ = 0, X = Rt.length; $ < X; $++)
            ct = Rt[$], v.format !== Ne ? mt !== null ? Nt ? Ct && e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, $, 0, 0, 0, ct.width, ct.height, et.depth, mt, ct.data, 0, 0) : e.compressedTexImage3D(i.TEXTURE_2D_ARRAY, $, gt, ct.width, ct.height, et.depth, 0, ct.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Nt ? Ct && e.texSubImage3D(i.TEXTURE_2D_ARRAY, $, 0, 0, 0, ct.width, ct.height, et.depth, mt, Bt, ct.data) : e.texImage3D(i.TEXTURE_2D_ARRAY, $, gt, ct.width, ct.height, et.depth, 0, mt, Bt, ct.data);
        } else {
          Nt && Jt && e.texStorage2D(i.TEXTURE_2D, C, gt, Rt[0].width, Rt[0].height);
          for (let $ = 0, X = Rt.length; $ < X; $++)
            ct = Rt[$], v.format !== Ne ? mt !== null ? Nt ? Ct && e.compressedTexSubImage2D(i.TEXTURE_2D, $, 0, 0, ct.width, ct.height, mt, ct.data) : e.compressedTexImage2D(i.TEXTURE_2D, $, gt, ct.width, ct.height, 0, ct.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Nt ? Ct && e.texSubImage2D(i.TEXTURE_2D, $, 0, 0, ct.width, ct.height, mt, Bt, ct.data) : e.texImage2D(i.TEXTURE_2D, $, gt, ct.width, ct.height, 0, mt, Bt, ct.data);
        }
      else if (v.isDataArrayTexture)
        Nt ? (Jt && e.texStorage3D(i.TEXTURE_2D_ARRAY, C, gt, et.width, et.height, et.depth), Ct && e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, et.width, et.height, et.depth, mt, Bt, et.data)) : e.texImage3D(i.TEXTURE_2D_ARRAY, 0, gt, et.width, et.height, et.depth, 0, mt, Bt, et.data);
      else if (v.isData3DTexture)
        Nt ? (Jt && e.texStorage3D(i.TEXTURE_3D, C, gt, et.width, et.height, et.depth), Ct && e.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, et.width, et.height, et.depth, mt, Bt, et.data)) : e.texImage3D(i.TEXTURE_3D, 0, gt, et.width, et.height, et.depth, 0, mt, Bt, et.data);
      else if (v.isFramebufferTexture) {
        if (Jt)
          if (Nt)
            e.texStorage2D(i.TEXTURE_2D, C, gt, et.width, et.height);
          else {
            let $ = et.width, X = et.height;
            for (let rt = 0; rt < C; rt++)
              e.texImage2D(i.TEXTURE_2D, rt, gt, $, X, 0, mt, Bt, null), $ >>= 1, X >>= 1;
          }
      } else if (Rt.length > 0) {
        if (Nt && Jt) {
          const $ = jt(Rt[0]);
          e.texStorage2D(i.TEXTURE_2D, C, gt, $.width, $.height);
        }
        for (let $ = 0, X = Rt.length; $ < X; $++)
          ct = Rt[$], Nt ? Ct && e.texSubImage2D(i.TEXTURE_2D, $, 0, 0, mt, Bt, ct) : e.texImage2D(i.TEXTURE_2D, $, gt, mt, Bt, ct);
        v.generateMipmaps = !1;
      } else if (Nt) {
        if (Jt) {
          const $ = jt(et);
          e.texStorage2D(i.TEXTURE_2D, C, gt, $.width, $.height);
        }
        Ct && e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, mt, Bt, et);
      } else
        e.texImage2D(i.TEXTURE_2D, 0, gt, mt, Bt, et);
      d(v) && h(K), _t.__version = J.version, v.onUpdate && v.onUpdate(v);
    }
    y.__version = v.version;
  }
  function Vt(y, v, V) {
    if (v.image.length !== 6)
      return;
    const K = dt(y, v), Z = v.source;
    e.bindTexture(i.TEXTURE_CUBE_MAP, y.__webglTexture, i.TEXTURE0 + V);
    const J = n.get(Z);
    if (Z.version !== J.__version || K === !0) {
      e.activeTexture(i.TEXTURE0 + V);
      const _t = Wt.getPrimaries(Wt.workingColorSpace), ot = v.colorSpace === tn ? null : Wt.getPrimaries(v.colorSpace), at = v.colorSpace === tn || _t === ot ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, v.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, v.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, at);
      const wt = v.isCompressedTexture || v.image[0].isCompressedTexture, et = v.image[0] && v.image[0].isDataTexture, mt = [];
      for (let X = 0; X < 6; X++)
        !wt && !et ? mt[X] = x(v.image[X], !0, r.maxCubemapSize) : mt[X] = et ? v.image[X].image : v.image[X], mt[X] = Ot(v, mt[X]);
      const Bt = mt[0], gt = s.convert(v.format, v.colorSpace), ct = s.convert(v.type), Rt = A(v.internalFormat, gt, ct, v.colorSpace), Nt = v.isVideoTexture !== !0, Jt = J.__version === void 0 || K === !0, Ct = Z.dataReady;
      let C = E(v, Bt);
      Q(i.TEXTURE_CUBE_MAP, v);
      let $;
      if (wt) {
        Nt && Jt && e.texStorage2D(i.TEXTURE_CUBE_MAP, C, Rt, Bt.width, Bt.height);
        for (let X = 0; X < 6; X++) {
          $ = mt[X].mipmaps;
          for (let rt = 0; rt < $.length; rt++) {
            const lt = $[rt];
            v.format !== Ne ? gt !== null ? Nt ? Ct && e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, rt, 0, 0, lt.width, lt.height, gt, lt.data) : e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, rt, Rt, lt.width, lt.height, 0, lt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Nt ? Ct && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, rt, 0, 0, lt.width, lt.height, gt, ct, lt.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, rt, Rt, lt.width, lt.height, 0, gt, ct, lt.data);
          }
        }
      } else {
        if ($ = v.mipmaps, Nt && Jt) {
          $.length > 0 && C++;
          const X = jt(mt[0]);
          e.texStorage2D(i.TEXTURE_CUBE_MAP, C, Rt, X.width, X.height);
        }
        for (let X = 0; X < 6; X++)
          if (et) {
            Nt ? Ct && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, 0, 0, mt[X].width, mt[X].height, gt, ct, mt[X].data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, Rt, mt[X].width, mt[X].height, 0, gt, ct, mt[X].data);
            for (let rt = 0; rt < $.length; rt++) {
              const Ht = $[rt].image[X].image;
              Nt ? Ct && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, rt + 1, 0, 0, Ht.width, Ht.height, gt, ct, Ht.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, rt + 1, Rt, Ht.width, Ht.height, 0, gt, ct, Ht.data);
            }
          } else {
            Nt ? Ct && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, 0, 0, gt, ct, mt[X]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, Rt, gt, ct, mt[X]);
            for (let rt = 0; rt < $.length; rt++) {
              const lt = $[rt];
              Nt ? Ct && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, rt + 1, 0, 0, gt, ct, lt.image[X]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, rt + 1, Rt, gt, ct, lt.image[X]);
            }
          }
      }
      d(v) && h(i.TEXTURE_CUBE_MAP), J.__version = Z.version, v.onUpdate && v.onUpdate(v);
    }
    y.__version = v.version;
  }
  function G(y, v, V, K, Z, J) {
    const _t = s.convert(V.format, V.colorSpace), ot = s.convert(V.type), at = A(V.internalFormat, _t, ot, V.colorSpace);
    if (!n.get(v).__hasExternalTextures) {
      const et = Math.max(1, v.width >> J), mt = Math.max(1, v.height >> J);
      Z === i.TEXTURE_3D || Z === i.TEXTURE_2D_ARRAY ? e.texImage3D(Z, J, at, et, mt, v.depth, 0, _t, ot, null) : e.texImage2D(Z, J, at, et, mt, 0, _t, ot, null);
    }
    e.bindFramebuffer(i.FRAMEBUFFER, y), Ft(v) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, K, Z, n.get(V).__webglTexture, 0, xt(v)) : (Z === i.TEXTURE_2D || Z >= i.TEXTURE_CUBE_MAP_POSITIVE_X && Z <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, K, Z, n.get(V).__webglTexture, J), e.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Y(y, v, V) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, y), v.depthBuffer && !v.stencilBuffer) {
      let K = i.DEPTH_COMPONENT24;
      if (V || Ft(v)) {
        const Z = v.depthTexture;
        Z && Z.isDepthTexture && (Z.type === en ? K = i.DEPTH_COMPONENT32F : Z.type === Yn && (K = i.DEPTH_COMPONENT24));
        const J = xt(v);
        Ft(v) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, J, K, v.width, v.height) : i.renderbufferStorageMultisample(i.RENDERBUFFER, J, K, v.width, v.height);
      } else
        i.renderbufferStorage(i.RENDERBUFFER, K, v.width, v.height);
      i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.RENDERBUFFER, y);
    } else if (v.depthBuffer && v.stencilBuffer) {
      const K = xt(v);
      V && Ft(v) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, K, i.DEPTH24_STENCIL8, v.width, v.height) : Ft(v) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, K, i.DEPTH24_STENCIL8, v.width, v.height) : i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, v.width, v.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.RENDERBUFFER, y);
    } else {
      const K = v.textures;
      for (let Z = 0; Z < K.length; Z++) {
        const J = K[Z], _t = s.convert(J.format, J.colorSpace), ot = s.convert(J.type), at = A(J.internalFormat, _t, ot, J.colorSpace), wt = xt(v);
        V && Ft(v) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, wt, at, v.width, v.height) : Ft(v) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, wt, at, v.width, v.height) : i.renderbufferStorage(i.RENDERBUFFER, at, v.width, v.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function ut(y, v) {
    if (v && v.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (e.bindFramebuffer(i.FRAMEBUFFER, y), !(v.depthTexture && v.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(v.depthTexture).__webglTexture || v.depthTexture.image.width !== v.width || v.depthTexture.image.height !== v.height) && (v.depthTexture.image.width = v.width, v.depthTexture.image.height = v.height, v.depthTexture.needsUpdate = !0), b(v.depthTexture, 0);
    const K = n.get(v.depthTexture).__webglTexture, Z = xt(v);
    if (v.depthTexture.format === kn)
      Ft(v) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, K, 0, Z) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, K, 0);
    else if (v.depthTexture.format === li)
      Ft(v) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, K, 0, Z) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, K, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function nt(y) {
    const v = n.get(y), V = y.isWebGLCubeRenderTarget === !0;
    if (y.depthTexture && !v.__autoAllocateDepthBuffer) {
      if (V)
        throw new Error("target.depthTexture not supported in Cube render targets");
      ut(v.__webglFramebuffer, y);
    } else if (V) {
      v.__webglDepthbuffer = [];
      for (let K = 0; K < 6; K++)
        e.bindFramebuffer(i.FRAMEBUFFER, v.__webglFramebuffer[K]), v.__webglDepthbuffer[K] = i.createRenderbuffer(), Y(v.__webglDepthbuffer[K], y, !1);
    } else
      e.bindFramebuffer(i.FRAMEBUFFER, v.__webglFramebuffer), v.__webglDepthbuffer = i.createRenderbuffer(), Y(v.__webglDepthbuffer, y, !1);
    e.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Et(y, v, V) {
    const K = n.get(y);
    v !== void 0 && G(K.__webglFramebuffer, y, y.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), V !== void 0 && nt(y);
  }
  function It(y) {
    const v = y.texture, V = n.get(y), K = n.get(v);
    y.addEventListener("dispose", z);
    const Z = y.textures, J = y.isWebGLCubeRenderTarget === !0, _t = Z.length > 1;
    if (_t || (K.__webglTexture === void 0 && (K.__webglTexture = i.createTexture()), K.__version = v.version, a.memory.textures++), J) {
      V.__webglFramebuffer = [];
      for (let ot = 0; ot < 6; ot++)
        if (v.mipmaps && v.mipmaps.length > 0) {
          V.__webglFramebuffer[ot] = [];
          for (let at = 0; at < v.mipmaps.length; at++)
            V.__webglFramebuffer[ot][at] = i.createFramebuffer();
        } else
          V.__webglFramebuffer[ot] = i.createFramebuffer();
    } else {
      if (v.mipmaps && v.mipmaps.length > 0) {
        V.__webglFramebuffer = [];
        for (let ot = 0; ot < v.mipmaps.length; ot++)
          V.__webglFramebuffer[ot] = i.createFramebuffer();
      } else
        V.__webglFramebuffer = i.createFramebuffer();
      if (_t)
        for (let ot = 0, at = Z.length; ot < at; ot++) {
          const wt = n.get(Z[ot]);
          wt.__webglTexture === void 0 && (wt.__webglTexture = i.createTexture(), a.memory.textures++);
        }
      if (y.samples > 0 && Ft(y) === !1) {
        V.__webglMultisampledFramebuffer = i.createFramebuffer(), V.__webglColorRenderbuffer = [], e.bindFramebuffer(i.FRAMEBUFFER, V.__webglMultisampledFramebuffer);
        for (let ot = 0; ot < Z.length; ot++) {
          const at = Z[ot];
          V.__webglColorRenderbuffer[ot] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, V.__webglColorRenderbuffer[ot]);
          const wt = s.convert(at.format, at.colorSpace), et = s.convert(at.type), mt = A(at.internalFormat, wt, et, at.colorSpace, y.isXRRenderTarget === !0), Bt = xt(y);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, Bt, mt, y.width, y.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ot, i.RENDERBUFFER, V.__webglColorRenderbuffer[ot]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), y.depthBuffer && (V.__webglDepthRenderbuffer = i.createRenderbuffer(), Y(V.__webglDepthRenderbuffer, y, !0)), e.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (J) {
      e.bindTexture(i.TEXTURE_CUBE_MAP, K.__webglTexture), Q(i.TEXTURE_CUBE_MAP, v);
      for (let ot = 0; ot < 6; ot++)
        if (v.mipmaps && v.mipmaps.length > 0)
          for (let at = 0; at < v.mipmaps.length; at++)
            G(V.__webglFramebuffer[ot][at], y, v, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ot, at);
        else
          G(V.__webglFramebuffer[ot], y, v, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ot, 0);
      d(v) && h(i.TEXTURE_CUBE_MAP), e.unbindTexture();
    } else if (_t) {
      for (let ot = 0, at = Z.length; ot < at; ot++) {
        const wt = Z[ot], et = n.get(wt);
        e.bindTexture(i.TEXTURE_2D, et.__webglTexture), Q(i.TEXTURE_2D, wt), G(V.__webglFramebuffer, y, wt, i.COLOR_ATTACHMENT0 + ot, i.TEXTURE_2D, 0), d(wt) && h(i.TEXTURE_2D);
      }
      e.unbindTexture();
    } else {
      let ot = i.TEXTURE_2D;
      if ((y.isWebGL3DRenderTarget || y.isWebGLArrayRenderTarget) && (ot = y.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), e.bindTexture(ot, K.__webglTexture), Q(ot, v), v.mipmaps && v.mipmaps.length > 0)
        for (let at = 0; at < v.mipmaps.length; at++)
          G(V.__webglFramebuffer[at], y, v, i.COLOR_ATTACHMENT0, ot, at);
      else
        G(V.__webglFramebuffer, y, v, i.COLOR_ATTACHMENT0, ot, 0);
      d(v) && h(ot), e.unbindTexture();
    }
    y.depthBuffer && nt(y);
  }
  function L(y) {
    const v = y.textures;
    for (let V = 0, K = v.length; V < K; V++) {
      const Z = v[V];
      if (d(Z)) {
        const J = y.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : i.TEXTURE_2D, _t = n.get(Z).__webglTexture;
        e.bindTexture(J, _t), h(J), e.unbindTexture();
      }
    }
  }
  const yt = [], ht = [];
  function Xt(y) {
    if (y.samples > 0) {
      if (Ft(y) === !1) {
        const v = y.textures, V = y.width, K = y.height;
        let Z = i.COLOR_BUFFER_BIT;
        const J = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, _t = n.get(y), ot = v.length > 1;
        if (ot)
          for (let at = 0; at < v.length; at++)
            e.bindFramebuffer(i.FRAMEBUFFER, _t.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + at, i.RENDERBUFFER, null), e.bindFramebuffer(i.FRAMEBUFFER, _t.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + at, i.TEXTURE_2D, null, 0);
        e.bindFramebuffer(i.READ_FRAMEBUFFER, _t.__webglMultisampledFramebuffer), e.bindFramebuffer(i.DRAW_FRAMEBUFFER, _t.__webglFramebuffer);
        for (let at = 0; at < v.length; at++) {
          if (y.resolveDepthBuffer && (y.depthBuffer && (Z |= i.DEPTH_BUFFER_BIT), y.stencilBuffer && y.resolveStencilBuffer && (Z |= i.STENCIL_BUFFER_BIT)), ot) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, _t.__webglColorRenderbuffer[at]);
            const wt = n.get(v[at]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, wt, 0);
          }
          i.blitFramebuffer(0, 0, V, K, 0, 0, V, K, Z, i.NEAREST), l === !0 && (yt.length = 0, ht.length = 0, yt.push(i.COLOR_ATTACHMENT0 + at), y.depthBuffer && y.resolveDepthBuffer === !1 && (yt.push(J), ht.push(J), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, ht)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, yt));
        }
        if (e.bindFramebuffer(i.READ_FRAMEBUFFER, null), e.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), ot)
          for (let at = 0; at < v.length; at++) {
            e.bindFramebuffer(i.FRAMEBUFFER, _t.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + at, i.RENDERBUFFER, _t.__webglColorRenderbuffer[at]);
            const wt = n.get(v[at]).__webglTexture;
            e.bindFramebuffer(i.FRAMEBUFFER, _t.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + at, i.TEXTURE_2D, wt, 0);
          }
        e.bindFramebuffer(i.DRAW_FRAMEBUFFER, _t.__webglMultisampledFramebuffer);
      } else if (y.depthBuffer && y.resolveDepthBuffer === !1 && l) {
        const v = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [v]);
      }
    }
  }
  function xt(y) {
    return Math.min(r.maxSamples, y.samples);
  }
  function Ft(y) {
    const v = n.get(y);
    return y.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && v.__useRenderToTexture !== !1;
  }
  function Dt(y) {
    const v = a.render.frame;
    u.get(y) !== v && (u.set(y, v), y.update());
  }
  function Ot(y, v) {
    const V = y.colorSpace, K = y.format, Z = y.type;
    return y.isCompressedTexture === !0 || y.isVideoTexture === !0 || V !== ln && V !== tn && (Wt.getTransfer(V) === Yt ? (K !== Ne || Z !== an) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", V)), v;
  }
  function jt(y) {
    return typeof HTMLImageElement < "u" && y instanceof HTMLImageElement ? (c.width = y.naturalWidth || y.width, c.height = y.naturalHeight || y.height) : typeof VideoFrame < "u" && y instanceof VideoFrame ? (c.width = y.displayWidth, c.height = y.displayHeight) : (c.width = y.width, c.height = y.height), c;
  }
  this.allocateTextureUnit = F, this.resetTextureUnits = g, this.setTexture2D = b, this.setTexture2DArray = H, this.setTexture3D = W, this.setTextureCube = q, this.rebindTextures = Et, this.setupRenderTarget = It, this.updateRenderTargetMipmap = L, this.updateMultisampleRenderTarget = Xt, this.setupDepthRenderbuffer = nt, this.setupFrameBufferTexture = G, this.useMultisampledRTT = Ft;
}
function qf(i, t) {
  function e(n, r = tn) {
    let s;
    const a = Wt.getTransfer(r);
    if (n === an)
      return i.UNSIGNED_BYTE;
    if (n === Za)
      return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === Ja)
      return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === wl)
      return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === Al)
      return i.BYTE;
    if (n === bl)
      return i.SHORT;
    if (n === $a)
      return i.UNSIGNED_SHORT;
    if (n === ja)
      return i.INT;
    if (n === Yn)
      return i.UNSIGNED_INT;
    if (n === en)
      return i.FLOAT;
    if (n === Zi)
      return i.HALF_FLOAT;
    if (n === Rl)
      return i.ALPHA;
    if (n === Cl)
      return i.RGB;
    if (n === Ne)
      return i.RGBA;
    if (n === Pl)
      return i.LUMINANCE;
    if (n === Ll)
      return i.LUMINANCE_ALPHA;
    if (n === kn)
      return i.DEPTH_COMPONENT;
    if (n === li)
      return i.DEPTH_STENCIL;
    if (n === Dl)
      return i.RED;
    if (n === Qa)
      return i.RED_INTEGER;
    if (n === Ul)
      return i.RG;
    if (n === to)
      return i.RG_INTEGER;
    if (n === eo)
      return i.RGBA_INTEGER;
    if (n === or || n === lr || n === cr || n === ur)
      if (a === Yt)
        if (s = t.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
          if (n === or)
            return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === lr)
            return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === cr)
            return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === ur)
            return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (s = t.get("WEBGL_compressed_texture_s3tc"), s !== null) {
        if (n === or)
          return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === lr)
          return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === cr)
          return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === ur)
          return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === vs || n === xs || n === Ms || n === Ss)
      if (s = t.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
        if (n === vs)
          return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === xs)
          return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === Ms)
          return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === Ss)
          return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === Es || n === ys || n === Ts)
      if (s = t.get("WEBGL_compressed_texture_etc"), s !== null) {
        if (n === Es || n === ys)
          return a === Yt ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n === Ts)
          return a === Yt ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (n === As || n === bs || n === ws || n === Rs || n === Cs || n === Ps || n === Ls || n === Ds || n === Us || n === Is || n === Ns || n === Fs || n === Os || n === Bs)
      if (s = t.get("WEBGL_compressed_texture_astc"), s !== null) {
        if (n === As)
          return a === Yt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === bs)
          return a === Yt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === ws)
          return a === Yt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === Rs)
          return a === Yt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === Cs)
          return a === Yt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === Ps)
          return a === Yt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === Ls)
          return a === Yt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === Ds)
          return a === Yt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === Us)
          return a === Yt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === Is)
          return a === Yt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === Ns)
          return a === Yt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === Fs)
          return a === Yt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === Os)
          return a === Yt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === Bs)
          return a === Yt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === hr || n === zs || n === Hs)
      if (s = t.get("EXT_texture_compression_bptc"), s !== null) {
        if (n === hr)
          return a === Yt ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === zs)
          return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === Hs)
          return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === Il || n === Vs || n === Gs || n === ks)
      if (s = t.get("EXT_texture_compression_rgtc"), s !== null) {
        if (n === hr)
          return s.COMPRESSED_RED_RGTC1_EXT;
        if (n === Vs)
          return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === Gs)
          return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === ks)
          return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === ci ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: e };
}
class Yf extends ye {
  constructor(t = []) {
    super(), this.isArrayCamera = !0, this.cameras = t;
  }
}
class oi extends se {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Kf = { type: "move" };
class Or {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new oi(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new oi(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new D(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new D()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new oi(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new D(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new D()), this._grip;
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
        for (const x of t.hand.values()) {
          const d = e.getJointPose(x, n), h = this._getHandJoint(c, x);
          d !== null && (h.matrix.fromArray(d.transform.matrix), h.matrix.decompose(h.position, h.rotation, h.scale), h.matrixWorldNeedsUpdate = !0, h.jointRadius = d.radius), h.visible = d !== null;
        }
        const u = c.joints["index-finger-tip"], p = c.joints["thumb-tip"], f = u.position.distanceTo(p.position), m = 0.02, _ = 5e-3;
        c.inputState.pinching && f > m + _ ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: t.handedness,
          target: this
        })) : !c.inputState.pinching && f <= m - _ && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: t.handedness,
          target: this
        }));
      } else
        l !== null && t.gripSpace && (s = e.getPose(t.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1));
      o !== null && (r = e.getPose(t.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Kf)));
    }
    return o !== null && (o.visible = r !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = a !== null), this;
  }
  // private method
  _getHandJoint(t, e) {
    if (t.joints[e.jointName] === void 0) {
      const n = new oi();
      n.matrixAutoUpdate = !1, n.visible = !1, t.joints[e.jointName] = n, t.add(n);
    }
    return t.joints[e.jointName];
  }
}
const $f = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, jf = `
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
class Zf {
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
        const n = e.cameras[0].viewport, r = new on({
          vertexShader: $f,
          fragmentShader: jf,
          uniforms: {
            depthColor: { value: this.texture },
            depthWidth: { value: n.z },
            depthHeight: { value: n.w }
          }
        });
        this.mesh = new Ce(new tr(20, 20), r);
      }
      t.render(this.mesh, e);
    }
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
}
class Jf extends $n {
  constructor(t, e) {
    super();
    const n = this;
    let r = null, s = 1, a = null, o = "local-floor", l = 1, c = null, u = null, p = null, f = null, m = null, _ = null;
    const x = new Zf(), d = e.getContextAttributes();
    let h = null, A = null;
    const E = [], T = [], z = new zt();
    let w = null;
    const R = new ye();
    R.layers.enable(1), R.viewport = new re();
    const k = new ye();
    k.layers.enable(2), k.viewport = new re();
    const S = [R, k], g = new Yf();
    g.layers.enable(1), g.layers.enable(2);
    let F = null, O = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(G) {
      let Y = E[G];
      return Y === void 0 && (Y = new Or(), E[G] = Y), Y.getTargetRaySpace();
    }, this.getControllerGrip = function(G) {
      let Y = E[G];
      return Y === void 0 && (Y = new Or(), E[G] = Y), Y.getGripSpace();
    }, this.getHand = function(G) {
      let Y = E[G];
      return Y === void 0 && (Y = new Or(), E[G] = Y), Y.getHandSpace();
    };
    function b(G) {
      const Y = T.indexOf(G.inputSource);
      if (Y === -1)
        return;
      const ut = E[Y];
      ut !== void 0 && (ut.update(G.inputSource, G.frame, c || a), ut.dispatchEvent({ type: G.type, data: G.inputSource }));
    }
    function H() {
      r.removeEventListener("select", b), r.removeEventListener("selectstart", b), r.removeEventListener("selectend", b), r.removeEventListener("squeeze", b), r.removeEventListener("squeezestart", b), r.removeEventListener("squeezeend", b), r.removeEventListener("end", H), r.removeEventListener("inputsourceschange", W);
      for (let G = 0; G < E.length; G++) {
        const Y = T[G];
        Y !== null && (T[G] = null, E[G].disconnect(Y));
      }
      F = null, O = null, x.reset(), t.setRenderTarget(h), m = null, f = null, p = null, r = null, A = null, Vt.stop(), n.isPresenting = !1, t.setPixelRatio(w), t.setSize(z.width, z.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(G) {
      s = G, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(G) {
      o = G, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || a;
    }, this.setReferenceSpace = function(G) {
      c = G;
    }, this.getBaseLayer = function() {
      return f !== null ? f : m;
    }, this.getBinding = function() {
      return p;
    }, this.getFrame = function() {
      return _;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(G) {
      if (r = G, r !== null) {
        if (h = t.getRenderTarget(), r.addEventListener("select", b), r.addEventListener("selectstart", b), r.addEventListener("selectend", b), r.addEventListener("squeeze", b), r.addEventListener("squeezestart", b), r.addEventListener("squeezeend", b), r.addEventListener("end", H), r.addEventListener("inputsourceschange", W), d.xrCompatible !== !0 && await e.makeXRCompatible(), w = t.getPixelRatio(), t.getSize(z), r.renderState.layers === void 0) {
          const Y = {
            antialias: d.antialias,
            alpha: !0,
            depth: d.depth,
            stencil: d.stencil,
            framebufferScaleFactor: s
          };
          m = new XRWebGLLayer(r, e, Y), r.updateRenderState({ baseLayer: m }), t.setPixelRatio(1), t.setSize(m.framebufferWidth, m.framebufferHeight, !1), A = new En(
            m.framebufferWidth,
            m.framebufferHeight,
            {
              format: Ne,
              type: an,
              colorSpace: t.outputColorSpace,
              stencilBuffer: d.stencil
            }
          );
        } else {
          let Y = null, ut = null, nt = null;
          d.depth && (nt = d.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, Y = d.stencil ? li : kn, ut = d.stencil ? ci : Yn);
          const Et = {
            colorFormat: e.RGBA8,
            depthFormat: nt,
            scaleFactor: s
          };
          p = new XRWebGLBinding(r, e), f = p.createProjectionLayer(Et), r.updateRenderState({ layers: [f] }), t.setPixelRatio(1), t.setSize(f.textureWidth, f.textureHeight, !1), A = new En(
            f.textureWidth,
            f.textureHeight,
            {
              format: Ne,
              type: an,
              depthTexture: new mo(f.textureWidth, f.textureHeight, ut, void 0, void 0, void 0, void 0, void 0, void 0, Y),
              stencilBuffer: d.stencil,
              colorSpace: t.outputColorSpace,
              samples: d.antialias ? 4 : 0,
              resolveDepthBuffer: f.ignoreDepthValues === !1
            }
          );
        }
        A.isXRRenderTarget = !0, this.setFoveation(l), c = null, a = await r.requestReferenceSpace(o), Vt.setContext(r), Vt.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null)
        return r.environmentBlendMode;
    };
    function W(G) {
      for (let Y = 0; Y < G.removed.length; Y++) {
        const ut = G.removed[Y], nt = T.indexOf(ut);
        nt >= 0 && (T[nt] = null, E[nt].disconnect(ut));
      }
      for (let Y = 0; Y < G.added.length; Y++) {
        const ut = G.added[Y];
        let nt = T.indexOf(ut);
        if (nt === -1) {
          for (let It = 0; It < E.length; It++)
            if (It >= T.length) {
              T.push(ut), nt = It;
              break;
            } else if (T[It] === null) {
              T[It] = ut, nt = It;
              break;
            }
          if (nt === -1)
            break;
        }
        const Et = E[nt];
        Et && Et.connect(ut);
      }
    }
    const q = new D(), tt = new D();
    function N(G, Y, ut) {
      q.setFromMatrixPosition(Y.matrixWorld), tt.setFromMatrixPosition(ut.matrixWorld);
      const nt = q.distanceTo(tt), Et = Y.projectionMatrix.elements, It = ut.projectionMatrix.elements, L = Et[14] / (Et[10] - 1), yt = Et[14] / (Et[10] + 1), ht = (Et[9] + 1) / Et[5], Xt = (Et[9] - 1) / Et[5], xt = (Et[8] - 1) / Et[0], Ft = (It[8] + 1) / It[0], Dt = L * xt, Ot = L * Ft, jt = nt / (-xt + Ft), y = jt * -xt;
      Y.matrixWorld.decompose(G.position, G.quaternion, G.scale), G.translateX(y), G.translateZ(jt), G.matrixWorld.compose(G.position, G.quaternion, G.scale), G.matrixWorldInverse.copy(G.matrixWorld).invert();
      const v = L + jt, V = yt + jt, K = Dt - y, Z = Ot + (nt - y), J = ht * yt / V * v, _t = Xt * yt / V * v;
      G.projectionMatrix.makePerspective(K, Z, J, _t, v, V), G.projectionMatrixInverse.copy(G.projectionMatrix).invert();
    }
    function j(G, Y) {
      Y === null ? G.matrixWorld.copy(G.matrix) : G.matrixWorld.multiplyMatrices(Y.matrixWorld, G.matrix), G.matrixWorldInverse.copy(G.matrixWorld).invert();
    }
    this.updateCamera = function(G) {
      if (r === null)
        return;
      x.texture !== null && (G.near = x.depthNear, G.far = x.depthFar), g.near = k.near = R.near = G.near, g.far = k.far = R.far = G.far, (F !== g.near || O !== g.far) && (r.updateRenderState({
        depthNear: g.near,
        depthFar: g.far
      }), F = g.near, O = g.far, R.near = F, R.far = O, k.near = F, k.far = O, R.updateProjectionMatrix(), k.updateProjectionMatrix(), G.updateProjectionMatrix());
      const Y = G.parent, ut = g.cameras;
      j(g, Y);
      for (let nt = 0; nt < ut.length; nt++)
        j(ut[nt], Y);
      ut.length === 2 ? N(g, R, k) : g.projectionMatrix.copy(R.projectionMatrix), Q(G, g, Y);
    };
    function Q(G, Y, ut) {
      ut === null ? G.matrix.copy(Y.matrixWorld) : (G.matrix.copy(ut.matrixWorld), G.matrix.invert(), G.matrix.multiply(Y.matrixWorld)), G.matrix.decompose(G.position, G.quaternion, G.scale), G.updateMatrixWorld(!0), G.projectionMatrix.copy(Y.projectionMatrix), G.projectionMatrixInverse.copy(Y.projectionMatrixInverse), G.isPerspectiveCamera && (G.fov = Yr * 2 * Math.atan(1 / G.projectionMatrix.elements[5]), G.zoom = 1);
    }
    this.getCamera = function() {
      return g;
    }, this.getFoveation = function() {
      if (!(f === null && m === null))
        return l;
    }, this.setFoveation = function(G) {
      l = G, f !== null && (f.fixedFoveation = G), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = G);
    }, this.hasDepthSensing = function() {
      return x.texture !== null;
    };
    let dt = null;
    function Lt(G, Y) {
      if (u = Y.getViewerPose(c || a), _ = Y, u !== null) {
        const ut = u.views;
        m !== null && (t.setRenderTargetFramebuffer(A, m.framebuffer), t.setRenderTarget(A));
        let nt = !1;
        ut.length !== g.cameras.length && (g.cameras.length = 0, nt = !0);
        for (let It = 0; It < ut.length; It++) {
          const L = ut[It];
          let yt = null;
          if (m !== null)
            yt = m.getViewport(L);
          else {
            const Xt = p.getViewSubImage(f, L);
            yt = Xt.viewport, It === 0 && (t.setRenderTargetTextures(
              A,
              Xt.colorTexture,
              f.ignoreDepthValues ? void 0 : Xt.depthStencilTexture
            ), t.setRenderTarget(A));
          }
          let ht = S[It];
          ht === void 0 && (ht = new ye(), ht.layers.enable(It), ht.viewport = new re(), S[It] = ht), ht.matrix.fromArray(L.transform.matrix), ht.matrix.decompose(ht.position, ht.quaternion, ht.scale), ht.projectionMatrix.fromArray(L.projectionMatrix), ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(), ht.viewport.set(yt.x, yt.y, yt.width, yt.height), It === 0 && (g.matrix.copy(ht.matrix), g.matrix.decompose(g.position, g.quaternion, g.scale)), nt === !0 && g.cameras.push(ht);
        }
        const Et = r.enabledFeatures;
        if (Et && Et.includes("depth-sensing")) {
          const It = p.getDepthInformation(ut[0]);
          It && It.isValid && It.texture && x.init(t, It, r.renderState);
        }
      }
      for (let ut = 0; ut < E.length; ut++) {
        const nt = T[ut], Et = E[ut];
        nt !== null && Et !== void 0 && Et.update(nt, Y, c || a);
      }
      x.render(t, g), dt && dt(G, Y), Y.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: Y }), _ = null;
    }
    const Vt = new fo();
    Vt.setAnimationLoop(Lt), this.setAnimationLoop = function(G) {
      dt = G;
    }, this.dispose = function() {
    };
  }
}
const mn = /* @__PURE__ */ new qe(), Qf = /* @__PURE__ */ new $t();
function tp(i, t) {
  function e(d, h) {
    d.matrixAutoUpdate === !0 && d.updateMatrix(), h.value.copy(d.matrix);
  }
  function n(d, h) {
    h.color.getRGB(d.fogColor.value, co(i)), h.isFog ? (d.fogNear.value = h.near, d.fogFar.value = h.far) : h.isFogExp2 && (d.fogDensity.value = h.density);
  }
  function r(d, h, A, E, T) {
    h.isMeshBasicMaterial || h.isMeshLambertMaterial ? s(d, h) : h.isMeshToonMaterial ? (s(d, h), p(d, h)) : h.isMeshPhongMaterial ? (s(d, h), u(d, h)) : h.isMeshStandardMaterial ? (s(d, h), f(d, h), h.isMeshPhysicalMaterial && m(d, h, T)) : h.isMeshMatcapMaterial ? (s(d, h), _(d, h)) : h.isMeshDepthMaterial ? s(d, h) : h.isMeshDistanceMaterial ? (s(d, h), x(d, h)) : h.isMeshNormalMaterial ? s(d, h) : h.isLineBasicMaterial ? (a(d, h), h.isLineDashedMaterial && o(d, h)) : h.isPointsMaterial ? l(d, h, A, E) : h.isSpriteMaterial ? c(d, h) : h.isShadowMaterial ? (d.color.value.copy(h.color), d.opacity.value = h.opacity) : h.isShaderMaterial && (h.uniformsNeedUpdate = !1);
  }
  function s(d, h) {
    d.opacity.value = h.opacity, h.color && d.diffuse.value.copy(h.color), h.emissive && d.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity), h.map && (d.map.value = h.map, e(h.map, d.mapTransform)), h.alphaMap && (d.alphaMap.value = h.alphaMap, e(h.alphaMap, d.alphaMapTransform)), h.bumpMap && (d.bumpMap.value = h.bumpMap, e(h.bumpMap, d.bumpMapTransform), d.bumpScale.value = h.bumpScale, h.side === me && (d.bumpScale.value *= -1)), h.normalMap && (d.normalMap.value = h.normalMap, e(h.normalMap, d.normalMapTransform), d.normalScale.value.copy(h.normalScale), h.side === me && d.normalScale.value.negate()), h.displacementMap && (d.displacementMap.value = h.displacementMap, e(h.displacementMap, d.displacementMapTransform), d.displacementScale.value = h.displacementScale, d.displacementBias.value = h.displacementBias), h.emissiveMap && (d.emissiveMap.value = h.emissiveMap, e(h.emissiveMap, d.emissiveMapTransform)), h.specularMap && (d.specularMap.value = h.specularMap, e(h.specularMap, d.specularMapTransform)), h.alphaTest > 0 && (d.alphaTest.value = h.alphaTest);
    const A = t.get(h), E = A.envMap, T = A.envMapRotation;
    if (E && (d.envMap.value = E, mn.copy(T), mn.x *= -1, mn.y *= -1, mn.z *= -1, E.isCubeTexture && E.isRenderTargetTexture === !1 && (mn.y *= -1, mn.z *= -1), d.envMapRotation.value.setFromMatrix4(Qf.makeRotationFromEuler(mn)), d.flipEnvMap.value = E.isCubeTexture && E.isRenderTargetTexture === !1 ? -1 : 1, d.reflectivity.value = h.reflectivity, d.ior.value = h.ior, d.refractionRatio.value = h.refractionRatio), h.lightMap) {
      d.lightMap.value = h.lightMap;
      const z = i._useLegacyLights === !0 ? Math.PI : 1;
      d.lightMapIntensity.value = h.lightMapIntensity * z, e(h.lightMap, d.lightMapTransform);
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
    d.ior.value = h.ior, h.sheen > 0 && (d.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen), d.sheenRoughness.value = h.sheenRoughness, h.sheenColorMap && (d.sheenColorMap.value = h.sheenColorMap, e(h.sheenColorMap, d.sheenColorMapTransform)), h.sheenRoughnessMap && (d.sheenRoughnessMap.value = h.sheenRoughnessMap, e(h.sheenRoughnessMap, d.sheenRoughnessMapTransform))), h.clearcoat > 0 && (d.clearcoat.value = h.clearcoat, d.clearcoatRoughness.value = h.clearcoatRoughness, h.clearcoatMap && (d.clearcoatMap.value = h.clearcoatMap, e(h.clearcoatMap, d.clearcoatMapTransform)), h.clearcoatRoughnessMap && (d.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap, e(h.clearcoatRoughnessMap, d.clearcoatRoughnessMapTransform)), h.clearcoatNormalMap && (d.clearcoatNormalMap.value = h.clearcoatNormalMap, e(h.clearcoatNormalMap, d.clearcoatNormalMapTransform), d.clearcoatNormalScale.value.copy(h.clearcoatNormalScale), h.side === me && d.clearcoatNormalScale.value.negate())), h.dispersion > 0 && (d.dispersion.value = h.dispersion), h.iridescence > 0 && (d.iridescence.value = h.iridescence, d.iridescenceIOR.value = h.iridescenceIOR, d.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0], d.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1], h.iridescenceMap && (d.iridescenceMap.value = h.iridescenceMap, e(h.iridescenceMap, d.iridescenceMapTransform)), h.iridescenceThicknessMap && (d.iridescenceThicknessMap.value = h.iridescenceThicknessMap, e(h.iridescenceThicknessMap, d.iridescenceThicknessMapTransform))), h.transmission > 0 && (d.transmission.value = h.transmission, d.transmissionSamplerMap.value = A.texture, d.transmissionSamplerSize.value.set(A.width, A.height), h.transmissionMap && (d.transmissionMap.value = h.transmissionMap, e(h.transmissionMap, d.transmissionMapTransform)), d.thickness.value = h.thickness, h.thicknessMap && (d.thicknessMap.value = h.thicknessMap, e(h.thicknessMap, d.thicknessMapTransform)), d.attenuationDistance.value = h.attenuationDistance, d.attenuationColor.value.copy(h.attenuationColor)), h.anisotropy > 0 && (d.anisotropyVector.value.set(h.anisotropy * Math.cos(h.anisotropyRotation), h.anisotropy * Math.sin(h.anisotropyRotation)), h.anisotropyMap && (d.anisotropyMap.value = h.anisotropyMap, e(h.anisotropyMap, d.anisotropyMapTransform))), d.specularIntensity.value = h.specularIntensity, d.specularColor.value.copy(h.specularColor), h.specularColorMap && (d.specularColorMap.value = h.specularColorMap, e(h.specularColorMap, d.specularColorMapTransform)), h.specularIntensityMap && (d.specularIntensityMap.value = h.specularIntensityMap, e(h.specularIntensityMap, d.specularIntensityMapTransform));
  }
  function _(d, h) {
    h.matcap && (d.matcap.value = h.matcap);
  }
  function x(d, h) {
    const A = t.get(h).light;
    d.referencePosition.value.setFromMatrixPosition(A.matrixWorld), d.nearDistance.value = A.shadow.camera.near, d.farDistance.value = A.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: r
  };
}
function ep(i, t, e, n) {
  let r = {}, s = {}, a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(A, E) {
    const T = E.program;
    n.uniformBlockBinding(A, T);
  }
  function c(A, E) {
    let T = r[A.id];
    T === void 0 && (_(A), T = u(A), r[A.id] = T, A.addEventListener("dispose", d));
    const z = E.program;
    n.updateUBOMapping(A, z);
    const w = t.render.frame;
    s[A.id] !== w && (f(A), s[A.id] = w);
  }
  function u(A) {
    const E = p();
    A.__bindingPointIndex = E;
    const T = i.createBuffer(), z = A.__size, w = A.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, T), i.bufferData(i.UNIFORM_BUFFER, z, w), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, E, T), T;
  }
  function p() {
    for (let A = 0; A < o; A++)
      if (a.indexOf(A) === -1)
        return a.push(A), A;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(A) {
    const E = r[A.id], T = A.uniforms, z = A.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, E);
    for (let w = 0, R = T.length; w < R; w++) {
      const k = Array.isArray(T[w]) ? T[w] : [T[w]];
      for (let S = 0, g = k.length; S < g; S++) {
        const F = k[S];
        if (m(F, w, S, z) === !0) {
          const O = F.__offset, b = Array.isArray(F.value) ? F.value : [F.value];
          let H = 0;
          for (let W = 0; W < b.length; W++) {
            const q = b[W], tt = x(q);
            typeof q == "number" || typeof q == "boolean" ? (F.__data[0] = q, i.bufferSubData(i.UNIFORM_BUFFER, O + H, F.__data)) : q.isMatrix3 ? (F.__data[0] = q.elements[0], F.__data[1] = q.elements[1], F.__data[2] = q.elements[2], F.__data[3] = 0, F.__data[4] = q.elements[3], F.__data[5] = q.elements[4], F.__data[6] = q.elements[5], F.__data[7] = 0, F.__data[8] = q.elements[6], F.__data[9] = q.elements[7], F.__data[10] = q.elements[8], F.__data[11] = 0) : (q.toArray(F.__data, H), H += tt.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, O, F.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function m(A, E, T, z) {
    const w = A.value, R = E + "_" + T;
    if (z[R] === void 0)
      return typeof w == "number" || typeof w == "boolean" ? z[R] = w : z[R] = w.clone(), !0;
    {
      const k = z[R];
      if (typeof w == "number" || typeof w == "boolean") {
        if (k !== w)
          return z[R] = w, !0;
      } else if (k.equals(w) === !1)
        return k.copy(w), !0;
    }
    return !1;
  }
  function _(A) {
    const E = A.uniforms;
    let T = 0;
    const z = 16;
    for (let R = 0, k = E.length; R < k; R++) {
      const S = Array.isArray(E[R]) ? E[R] : [E[R]];
      for (let g = 0, F = S.length; g < F; g++) {
        const O = S[g], b = Array.isArray(O.value) ? O.value : [O.value];
        for (let H = 0, W = b.length; H < W; H++) {
          const q = b[H], tt = x(q), N = T % z;
          N !== 0 && z - N < tt.boundary && (T += z - N), O.__data = new Float32Array(tt.storage / Float32Array.BYTES_PER_ELEMENT), O.__offset = T, T += tt.storage;
        }
      }
    }
    const w = T % z;
    return w > 0 && (T += z - w), A.__size = T, A.__cache = {}, this;
  }
  function x(A) {
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
    const T = a.indexOf(E.__bindingPointIndex);
    a.splice(T, 1), i.deleteBuffer(r[E.id]), delete r[E.id], delete s[E.id];
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
class np {
  constructor(t = {}) {
    const {
      canvas: e = Yl(),
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
    const m = new Uint32Array(4), _ = new Int32Array(4);
    let x = null, d = null;
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
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = De, this._useLegacyLights = !1, this.toneMapping = rn, this.toneMappingExposure = 1;
    const E = this;
    let T = !1, z = 0, w = 0, R = null, k = -1, S = null;
    const g = new re(), F = new re();
    let O = null;
    const b = new Pt(0);
    let H = 0, W = e.width, q = e.height, tt = 1, N = null, j = null;
    const Q = new re(0, 0, W, q), dt = new re(0, 0, W, q);
    let Lt = !1;
    const Vt = new es();
    let G = !1, Y = !1;
    const ut = new $t(), nt = new D(), Et = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    function It() {
      return R === null ? tt : 1;
    }
    let L = n;
    function yt(M, P) {
      return e.getContext(M, P);
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
      if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${jr}`), e.addEventListener("webglcontextlost", C, !1), e.addEventListener("webglcontextrestored", $, !1), e.addEventListener("webglcontextcreationerror", X, !1), L === null) {
        const P = "webgl2";
        if (L = yt(P, M), L === null)
          throw yt(P) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (M) {
      throw console.error("THREE.WebGLRenderer: " + M.message), M;
    }
    let ht, Xt, xt, Ft, Dt, Ot, jt, y, v, V, K, Z, J, _t, ot, at, wt, et, mt, Bt, gt, ct, Rt, Nt;
    function Jt() {
      ht = new cd(L), ht.init(), ct = new qf(L, ht), Xt = new id(L, ht, t, ct), xt = new Wf(L), Ft = new dd(L), Dt = new Pf(), Ot = new Xf(L, ht, xt, Dt, Xt, ct, Ft), jt = new sd(E), y = new ld(E), v = new xc(L), Rt = new ed(L, v), V = new ud(L, v, Ft, Rt), K = new pd(L, V, v, Ft), mt = new fd(L, Xt, Ot), at = new rd(Dt), Z = new Cf(E, jt, y, ht, Xt, Rt, at), J = new tp(E, Dt), _t = new Df(), ot = new Bf(ht), et = new td(E, jt, y, xt, K, f, l), wt = new kf(E, K, Xt), Nt = new ep(L, Ft, Xt, xt), Bt = new nd(L, ht, Ft), gt = new hd(L, ht, Ft), Ft.programs = Z.programs, E.capabilities = Xt, E.extensions = ht, E.properties = Dt, E.renderLists = _t, E.shadowMap = wt, E.state = xt, E.info = Ft;
    }
    Jt();
    const Ct = new Jf(E, L);
    this.xr = Ct, this.getContext = function() {
      return L;
    }, this.getContextAttributes = function() {
      return L.getContextAttributes();
    }, this.forceContextLoss = function() {
      const M = ht.get("WEBGL_lose_context");
      M && M.loseContext();
    }, this.forceContextRestore = function() {
      const M = ht.get("WEBGL_lose_context");
      M && M.restoreContext();
    }, this.getPixelRatio = function() {
      return tt;
    }, this.setPixelRatio = function(M) {
      M !== void 0 && (tt = M, this.setSize(W, q, !1));
    }, this.getSize = function(M) {
      return M.set(W, q);
    }, this.setSize = function(M, P, B = !0) {
      if (Ct.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      W = M, q = P, e.width = Math.floor(M * tt), e.height = Math.floor(P * tt), B === !0 && (e.style.width = M + "px", e.style.height = P + "px"), this.setViewport(0, 0, M, P);
    }, this.getDrawingBufferSize = function(M) {
      return M.set(W * tt, q * tt).floor();
    }, this.setDrawingBufferSize = function(M, P, B) {
      W = M, q = P, tt = B, e.width = Math.floor(M * B), e.height = Math.floor(P * B), this.setViewport(0, 0, M, P);
    }, this.getCurrentViewport = function(M) {
      return M.copy(g);
    }, this.getViewport = function(M) {
      return M.copy(Q);
    }, this.setViewport = function(M, P, B, U) {
      M.isVector4 ? Q.set(M.x, M.y, M.z, M.w) : Q.set(M, P, B, U), xt.viewport(g.copy(Q).multiplyScalar(tt).round());
    }, this.getScissor = function(M) {
      return M.copy(dt);
    }, this.setScissor = function(M, P, B, U) {
      M.isVector4 ? dt.set(M.x, M.y, M.z, M.w) : dt.set(M, P, B, U), xt.scissor(F.copy(dt).multiplyScalar(tt).round());
    }, this.getScissorTest = function() {
      return Lt;
    }, this.setScissorTest = function(M) {
      xt.setScissorTest(Lt = M);
    }, this.setOpaqueSort = function(M) {
      N = M;
    }, this.setTransparentSort = function(M) {
      j = M;
    }, this.getClearColor = function(M) {
      return M.copy(et.getClearColor());
    }, this.setClearColor = function() {
      et.setClearColor.apply(et, arguments);
    }, this.getClearAlpha = function() {
      return et.getClearAlpha();
    }, this.setClearAlpha = function() {
      et.setClearAlpha.apply(et, arguments);
    }, this.clear = function(M = !0, P = !0, B = !0) {
      let U = 0;
      if (M) {
        let I = !1;
        if (R !== null) {
          const st = R.texture.format;
          I = st === eo || st === to || st === Qa;
        }
        if (I) {
          const st = R.texture.type, ft = st === an || st === Yn || st === $a || st === ci || st === Za || st === Ja, pt = et.getClearColor(), vt = et.getClearAlpha(), Mt = pt.r, Tt = pt.g, Ut = pt.b;
          ft ? (m[0] = Mt, m[1] = Tt, m[2] = Ut, m[3] = vt, L.clearBufferuiv(L.COLOR, 0, m)) : (_[0] = Mt, _[1] = Tt, _[2] = Ut, _[3] = vt, L.clearBufferiv(L.COLOR, 0, _));
        } else
          U |= L.COLOR_BUFFER_BIT;
      }
      P && (U |= L.DEPTH_BUFFER_BIT), B && (U |= L.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), L.clear(U);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      e.removeEventListener("webglcontextlost", C, !1), e.removeEventListener("webglcontextrestored", $, !1), e.removeEventListener("webglcontextcreationerror", X, !1), _t.dispose(), ot.dispose(), Dt.dispose(), jt.dispose(), y.dispose(), K.dispose(), Rt.dispose(), Nt.dispose(), Z.dispose(), Ct.dispose(), Ct.removeEventListener("sessionstart", kt), Ct.removeEventListener("sessionend", Le), he.stop();
    };
    function C(M) {
      M.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), T = !0;
    }
    function $() {
      console.log("THREE.WebGLRenderer: Context Restored."), T = !1;
      const M = Ft.autoReset, P = wt.enabled, B = wt.autoUpdate, U = wt.needsUpdate, I = wt.type;
      Jt(), Ft.autoReset = M, wt.enabled = P, wt.autoUpdate = B, wt.needsUpdate = U, wt.type = I;
    }
    function X(M) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", M.statusMessage);
    }
    function rt(M) {
      const P = M.target;
      P.removeEventListener("dispose", rt), lt(P);
    }
    function lt(M) {
      Ht(M), Dt.remove(M);
    }
    function Ht(M) {
      const P = Dt.get(M).programs;
      P !== void 0 && (P.forEach(function(B) {
        Z.releaseProgram(B);
      }), M.isShaderMaterial && Z.releaseShaderCache(M));
    }
    this.renderBufferDirect = function(M, P, B, U, I, st) {
      P === null && (P = Et);
      const ft = I.isMesh && I.matrixWorld.determinant() < 0, pt = yo(M, P, B, U, I);
      xt.setMaterial(U, ft);
      let vt = B.index, Mt = 1;
      if (U.wireframe === !0) {
        if (vt = V.getWireframeAttribute(B), vt === void 0)
          return;
        Mt = 2;
      }
      const Tt = B.drawRange, Ut = B.attributes.position;
      let Qt = Tt.start * Mt, oe = (Tt.start + Tt.count) * Mt;
      st !== null && (Qt = Math.max(Qt, st.start * Mt), oe = Math.min(oe, (st.start + st.count) * Mt)), vt !== null ? (Qt = Math.max(Qt, 0), oe = Math.min(oe, vt.count)) : Ut != null && (Qt = Math.max(Qt, 0), oe = Math.min(oe, Ut.count));
      const ge = oe - Qt;
      if (ge < 0 || ge === 1 / 0)
        return;
      Rt.setup(I, U, pt, B, vt);
      let Oe, Gt = Bt;
      if (vt !== null && (Oe = v.get(vt), Gt = gt, Gt.setIndex(Oe)), I.isMesh)
        U.wireframe === !0 ? (xt.setLineWidth(U.wireframeLinewidth * It()), Gt.setMode(L.LINES)) : Gt.setMode(L.TRIANGLES);
      else if (I.isLine) {
        let St = U.linewidth;
        St === void 0 && (St = 1), xt.setLineWidth(St * It()), I.isLineSegments ? Gt.setMode(L.LINES) : I.isLineLoop ? Gt.setMode(L.LINE_LOOP) : Gt.setMode(L.LINE_STRIP);
      } else
        I.isPoints ? Gt.setMode(L.POINTS) : I.isSprite && Gt.setMode(L.TRIANGLES);
      if (I.isBatchedMesh)
        I._multiDrawInstances !== null ? Gt.renderMultiDrawInstances(I._multiDrawStarts, I._multiDrawCounts, I._multiDrawCount, I._multiDrawInstances) : Gt.renderMultiDraw(I._multiDrawStarts, I._multiDrawCounts, I._multiDrawCount);
      else if (I.isInstancedMesh)
        Gt.renderInstances(Qt, ge, I.count);
      else if (B.isInstancedBufferGeometry) {
        const St = B._maxInstanceCount !== void 0 ? B._maxInstanceCount : 1 / 0, Jn = Math.min(B.instanceCount, St);
        Gt.renderInstances(Qt, ge, Jn);
      } else
        Gt.render(Qt, ge);
    };
    function qt(M, P, B) {
      M.transparent === !0 && M.side === We && M.forceSinglePass === !1 ? (M.side = me, M.needsUpdate = !0, mi(M, P, B), M.side = sn, M.needsUpdate = !0, mi(M, P, B), M.side = We) : mi(M, P, B);
    }
    this.compile = function(M, P, B = null) {
      B === null && (B = M), d = ot.get(B), d.init(P), A.push(d), B.traverseVisible(function(I) {
        I.isLight && I.layers.test(P.layers) && (d.pushLight(I), I.castShadow && d.pushShadow(I));
      }), M !== B && M.traverseVisible(function(I) {
        I.isLight && I.layers.test(P.layers) && (d.pushLight(I), I.castShadow && d.pushShadow(I));
      }), d.setupLights(E._useLegacyLights);
      const U = /* @__PURE__ */ new Set();
      return M.traverse(function(I) {
        const st = I.material;
        if (st)
          if (Array.isArray(st))
            for (let ft = 0; ft < st.length; ft++) {
              const pt = st[ft];
              qt(pt, B, I), U.add(pt);
            }
          else
            qt(st, B, I), U.add(st);
      }), A.pop(), d = null, U;
    }, this.compileAsync = function(M, P, B = null) {
      const U = this.compile(M, P, B);
      return new Promise((I) => {
        function st() {
          if (U.forEach(function(ft) {
            Dt.get(ft).currentProgram.isReady() && U.delete(ft);
          }), U.size === 0) {
            I(M);
            return;
          }
          setTimeout(st, 10);
        }
        ht.get("KHR_parallel_shader_compile") !== null ? st() : setTimeout(st, 10);
      });
    };
    let Zt = null;
    function ae(M) {
      Zt && Zt(M);
    }
    function kt() {
      he.stop();
    }
    function Le() {
      he.start();
    }
    const he = new fo();
    he.setAnimationLoop(ae), typeof self < "u" && he.setContext(self), this.setAnimationLoop = function(M) {
      Zt = M, Ct.setAnimationLoop(M), M === null ? he.stop() : he.start();
    }, Ct.addEventListener("sessionstart", kt), Ct.addEventListener("sessionend", Le), this.render = function(M, P) {
      if (P !== void 0 && P.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (T === !0)
        return;
      M.matrixWorldAutoUpdate === !0 && M.updateMatrixWorld(), P.parent === null && P.matrixWorldAutoUpdate === !0 && P.updateMatrixWorld(), Ct.enabled === !0 && Ct.isPresenting === !0 && (Ct.cameraAutoUpdate === !0 && Ct.updateCamera(P), P = Ct.getCamera()), M.isScene === !0 && M.onBeforeRender(E, M, P, R), d = ot.get(M, A.length), d.init(P), A.push(d), ut.multiplyMatrices(P.projectionMatrix, P.matrixWorldInverse), Vt.setFromProjectionMatrix(ut), Y = this.localClippingEnabled, G = at.init(this.clippingPlanes, Y), x = _t.get(M, h.length), x.init(), h.push(x), rs(M, P, 0, E.sortObjects), x.finish(), E.sortObjects === !0 && x.sort(N, j);
      const B = Ct.enabled === !1 || Ct.isPresenting === !1 || Ct.hasDepthSensing() === !1;
      B && et.addToRenderList(x, M), this.info.render.frame++, G === !0 && at.beginShadows();
      const U = d.state.shadowsArray;
      wt.render(U, M, P), G === !0 && at.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const I = x.opaque, st = x.transmissive;
      if (d.setupLights(E._useLegacyLights), P.isArrayCamera) {
        const ft = P.cameras;
        if (st.length > 0)
          for (let pt = 0, vt = ft.length; pt < vt; pt++) {
            const Mt = ft[pt];
            as(I, st, M, Mt);
          }
        B && et.render(M);
        for (let pt = 0, vt = ft.length; pt < vt; pt++) {
          const Mt = ft[pt];
          ss(x, M, Mt, Mt.viewport);
        }
      } else
        st.length > 0 && as(I, st, M, P), B && et.render(M), ss(x, M, P);
      R !== null && (Ot.updateMultisampleRenderTarget(R), Ot.updateRenderTargetMipmap(R)), M.isScene === !0 && M.onAfterRender(E, M, P), Rt.resetDefaultState(), k = -1, S = null, A.pop(), A.length > 0 ? (d = A[A.length - 1], G === !0 && at.setGlobalState(E.clippingPlanes, d.state.camera)) : d = null, h.pop(), h.length > 0 ? x = h[h.length - 1] : x = null;
    };
    function rs(M, P, B, U) {
      if (M.visible === !1)
        return;
      if (M.layers.test(P.layers)) {
        if (M.isGroup)
          B = M.renderOrder;
        else if (M.isLOD)
          M.autoUpdate === !0 && M.update(P);
        else if (M.isLight)
          d.pushLight(M), M.castShadow && d.pushShadow(M);
        else if (M.isSprite) {
          if (!M.frustumCulled || Vt.intersectsSprite(M)) {
            U && nt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ut);
            const ft = K.update(M), pt = M.material;
            pt.visible && x.push(M, ft, pt, B, nt.z, null);
          }
        } else if ((M.isMesh || M.isLine || M.isPoints) && (!M.frustumCulled || Vt.intersectsObject(M))) {
          const ft = K.update(M), pt = M.material;
          if (U && (M.boundingSphere !== void 0 ? (M.boundingSphere === null && M.computeBoundingSphere(), nt.copy(M.boundingSphere.center)) : (ft.boundingSphere === null && ft.computeBoundingSphere(), nt.copy(ft.boundingSphere.center)), nt.applyMatrix4(M.matrixWorld).applyMatrix4(ut)), Array.isArray(pt)) {
            const vt = ft.groups;
            for (let Mt = 0, Tt = vt.length; Mt < Tt; Mt++) {
              const Ut = vt[Mt], Qt = pt[Ut.materialIndex];
              Qt && Qt.visible && x.push(M, ft, Qt, B, nt.z, Ut);
            }
          } else
            pt.visible && x.push(M, ft, pt, B, nt.z, null);
        }
      }
      const st = M.children;
      for (let ft = 0, pt = st.length; ft < pt; ft++)
        rs(st[ft], P, B, U);
    }
    function ss(M, P, B, U) {
      const I = M.opaque, st = M.transmissive, ft = M.transparent;
      d.setupLightsView(B), G === !0 && at.setGlobalState(E.clippingPlanes, B), U && xt.viewport(g.copy(U)), I.length > 0 && pi(I, P, B), st.length > 0 && pi(st, P, B), ft.length > 0 && pi(ft, P, B), xt.buffers.depth.setTest(!0), xt.buffers.depth.setMask(!0), xt.buffers.color.setMask(!0), xt.setPolygonOffset(!1);
    }
    function as(M, P, B, U) {
      if ((B.isScene === !0 ? B.overrideMaterial : null) !== null)
        return;
      d.state.transmissionRenderTarget[U.id] === void 0 && (d.state.transmissionRenderTarget[U.id] = new En(1, 1, {
        generateMipmaps: !0,
        type: ht.has("EXT_color_buffer_half_float") || ht.has("EXT_color_buffer_float") ? Zi : an,
        minFilter: Sn,
        samples: 4,
        stencilBuffer: s,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1
      }));
      const st = d.state.transmissionRenderTarget[U.id], ft = U.viewport || g;
      st.setSize(ft.z, ft.w);
      const pt = E.getRenderTarget();
      E.setRenderTarget(st), E.getClearColor(b), H = E.getClearAlpha(), H < 1 && E.setClearColor(16777215, 0.5), E.clear();
      const vt = E.toneMapping;
      E.toneMapping = rn;
      const Mt = U.viewport;
      if (U.viewport !== void 0 && (U.viewport = void 0), d.setupLightsView(U), G === !0 && at.setGlobalState(E.clippingPlanes, U), pi(M, B, U), Ot.updateMultisampleRenderTarget(st), Ot.updateRenderTargetMipmap(st), ht.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Tt = !1;
        for (let Ut = 0, Qt = P.length; Ut < Qt; Ut++) {
          const oe = P[Ut], ge = oe.object, Oe = oe.geometry, Gt = oe.material, St = oe.group;
          if (Gt.side === We && ge.layers.test(U.layers)) {
            const Jn = Gt.side;
            Gt.side = me, Gt.needsUpdate = !0, os(ge, B, U, Oe, Gt, St), Gt.side = Jn, Gt.needsUpdate = !0, Tt = !0;
          }
        }
        Tt === !0 && (Ot.updateMultisampleRenderTarget(st), Ot.updateRenderTargetMipmap(st));
      }
      E.setRenderTarget(pt), E.setClearColor(b, H), Mt !== void 0 && (U.viewport = Mt), E.toneMapping = vt;
    }
    function pi(M, P, B) {
      const U = P.isScene === !0 ? P.overrideMaterial : null;
      for (let I = 0, st = M.length; I < st; I++) {
        const ft = M[I], pt = ft.object, vt = ft.geometry, Mt = U === null ? ft.material : U, Tt = ft.group;
        pt.layers.test(B.layers) && os(pt, P, B, vt, Mt, Tt);
      }
    }
    function os(M, P, B, U, I, st) {
      M.onBeforeRender(E, P, B, U, I, st), M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, M.matrixWorld), M.normalMatrix.getNormalMatrix(M.modelViewMatrix), I.onBeforeRender(E, P, B, U, M, st), I.transparent === !0 && I.side === We && I.forceSinglePass === !1 ? (I.side = me, I.needsUpdate = !0, E.renderBufferDirect(B, P, U, I, M, st), I.side = sn, I.needsUpdate = !0, E.renderBufferDirect(B, P, U, I, M, st), I.side = We) : E.renderBufferDirect(B, P, U, I, M, st), M.onAfterRender(E, P, B, U, I, st);
    }
    function mi(M, P, B) {
      P.isScene !== !0 && (P = Et);
      const U = Dt.get(M), I = d.state.lights, st = d.state.shadowsArray, ft = I.state.version, pt = Z.getParameters(M, I.state, st, P, B), vt = Z.getProgramCacheKey(pt);
      let Mt = U.programs;
      U.environment = M.isMeshStandardMaterial ? P.environment : null, U.fog = P.fog, U.envMap = (M.isMeshStandardMaterial ? y : jt).get(M.envMap || U.environment), U.envMapRotation = U.environment !== null && M.envMap === null ? P.environmentRotation : M.envMapRotation, Mt === void 0 && (M.addEventListener("dispose", rt), Mt = /* @__PURE__ */ new Map(), U.programs = Mt);
      let Tt = Mt.get(vt);
      if (Tt !== void 0) {
        if (U.currentProgram === Tt && U.lightsStateVersion === ft)
          return cs(M, pt), Tt;
      } else
        pt.uniforms = Z.getUniforms(M), M.onBuild(B, pt, E), M.onBeforeCompile(pt, E), Tt = Z.acquireProgram(pt, vt), Mt.set(vt, Tt), U.uniforms = pt.uniforms;
      const Ut = U.uniforms;
      return (!M.isShaderMaterial && !M.isRawShaderMaterial || M.clipping === !0) && (Ut.clippingPlanes = at.uniform), cs(M, pt), U.needsLights = Ao(M), U.lightsStateVersion = ft, U.needsLights && (Ut.ambientLightColor.value = I.state.ambient, Ut.lightProbe.value = I.state.probe, Ut.directionalLights.value = I.state.directional, Ut.directionalLightShadows.value = I.state.directionalShadow, Ut.spotLights.value = I.state.spot, Ut.spotLightShadows.value = I.state.spotShadow, Ut.rectAreaLights.value = I.state.rectArea, Ut.ltc_1.value = I.state.rectAreaLTC1, Ut.ltc_2.value = I.state.rectAreaLTC2, Ut.pointLights.value = I.state.point, Ut.pointLightShadows.value = I.state.pointShadow, Ut.hemisphereLights.value = I.state.hemi, Ut.directionalShadowMap.value = I.state.directionalShadowMap, Ut.directionalShadowMatrix.value = I.state.directionalShadowMatrix, Ut.spotShadowMap.value = I.state.spotShadowMap, Ut.spotLightMatrix.value = I.state.spotLightMatrix, Ut.spotLightMap.value = I.state.spotLightMap, Ut.pointShadowMap.value = I.state.pointShadowMap, Ut.pointShadowMatrix.value = I.state.pointShadowMatrix), U.currentProgram = Tt, U.uniformsList = null, Tt;
    }
    function ls(M) {
      if (M.uniformsList === null) {
        const P = M.currentProgram.getUniforms();
        M.uniformsList = Vi.seqWithValue(P.seq, M.uniforms);
      }
      return M.uniformsList;
    }
    function cs(M, P) {
      const B = Dt.get(M);
      B.outputColorSpace = P.outputColorSpace, B.batching = P.batching, B.instancing = P.instancing, B.instancingColor = P.instancingColor, B.instancingMorph = P.instancingMorph, B.skinning = P.skinning, B.morphTargets = P.morphTargets, B.morphNormals = P.morphNormals, B.morphColors = P.morphColors, B.morphTargetsCount = P.morphTargetsCount, B.numClippingPlanes = P.numClippingPlanes, B.numIntersection = P.numClipIntersection, B.vertexAlphas = P.vertexAlphas, B.vertexTangents = P.vertexTangents, B.toneMapping = P.toneMapping;
    }
    function yo(M, P, B, U, I) {
      P.isScene !== !0 && (P = Et), Ot.resetTextureUnits();
      const st = P.fog, ft = U.isMeshStandardMaterial ? P.environment : null, pt = R === null ? E.outputColorSpace : R.isXRRenderTarget === !0 ? R.texture.colorSpace : ln, vt = (U.isMeshStandardMaterial ? y : jt).get(U.envMap || ft), Mt = U.vertexColors === !0 && !!B.attributes.color && B.attributes.color.itemSize === 4, Tt = !!B.attributes.tangent && (!!U.normalMap || U.anisotropy > 0), Ut = !!B.morphAttributes.position, Qt = !!B.morphAttributes.normal, oe = !!B.morphAttributes.color;
      let ge = rn;
      U.toneMapped && (R === null || R.isXRRenderTarget === !0) && (ge = E.toneMapping);
      const Oe = B.morphAttributes.position || B.morphAttributes.normal || B.morphAttributes.color, Gt = Oe !== void 0 ? Oe.length : 0, St = Dt.get(U), Jn = d.state.lights;
      if (G === !0 && (Y === !0 || M !== S)) {
        const Se = M === S && U.id === k;
        at.setState(U, M, Se);
      }
      let Kt = !1;
      U.version === St.__version ? (St.needsLights && St.lightsStateVersion !== Jn.state.version || St.outputColorSpace !== pt || I.isBatchedMesh && St.batching === !1 || !I.isBatchedMesh && St.batching === !0 || I.isInstancedMesh && St.instancing === !1 || !I.isInstancedMesh && St.instancing === !0 || I.isSkinnedMesh && St.skinning === !1 || !I.isSkinnedMesh && St.skinning === !0 || I.isInstancedMesh && St.instancingColor === !0 && I.instanceColor === null || I.isInstancedMesh && St.instancingColor === !1 && I.instanceColor !== null || I.isInstancedMesh && St.instancingMorph === !0 && I.morphTexture === null || I.isInstancedMesh && St.instancingMorph === !1 && I.morphTexture !== null || St.envMap !== vt || U.fog === !0 && St.fog !== st || St.numClippingPlanes !== void 0 && (St.numClippingPlanes !== at.numPlanes || St.numIntersection !== at.numIntersection) || St.vertexAlphas !== Mt || St.vertexTangents !== Tt || St.morphTargets !== Ut || St.morphNormals !== Qt || St.morphColors !== oe || St.toneMapping !== ge || St.morphTargetsCount !== Gt) && (Kt = !0) : (Kt = !0, St.__version = U.version);
      let cn = St.currentProgram;
      Kt === !0 && (cn = mi(U, P, I));
      let us = !1, Qn = !1, nr = !1;
      const le = cn.getUniforms(), Ye = St.uniforms;
      if (xt.useProgram(cn.program) && (us = !0, Qn = !0, nr = !0), U.id !== k && (k = U.id, Qn = !0), us || S !== M) {
        le.setValue(L, "projectionMatrix", M.projectionMatrix), le.setValue(L, "viewMatrix", M.matrixWorldInverse);
        const Se = le.map.cameraPosition;
        Se !== void 0 && Se.setValue(L, nt.setFromMatrixPosition(M.matrixWorld)), Xt.logarithmicDepthBuffer && le.setValue(
          L,
          "logDepthBufFC",
          2 / (Math.log(M.far + 1) / Math.LN2)
        ), (U.isMeshPhongMaterial || U.isMeshToonMaterial || U.isMeshLambertMaterial || U.isMeshBasicMaterial || U.isMeshStandardMaterial || U.isShaderMaterial) && le.setValue(L, "isOrthographic", M.isOrthographicCamera === !0), S !== M && (S = M, Qn = !0, nr = !0);
      }
      if (I.isSkinnedMesh) {
        le.setOptional(L, I, "bindMatrix"), le.setOptional(L, I, "bindMatrixInverse");
        const Se = I.skeleton;
        Se && (Se.boneTexture === null && Se.computeBoneTexture(), le.setValue(L, "boneTexture", Se.boneTexture, Ot));
      }
      I.isBatchedMesh && (le.setOptional(L, I, "batchingTexture"), le.setValue(L, "batchingTexture", I._matricesTexture, Ot));
      const ir = B.morphAttributes;
      if ((ir.position !== void 0 || ir.normal !== void 0 || ir.color !== void 0) && mt.update(I, B, cn), (Qn || St.receiveShadow !== I.receiveShadow) && (St.receiveShadow = I.receiveShadow, le.setValue(L, "receiveShadow", I.receiveShadow)), U.isMeshGouraudMaterial && U.envMap !== null && (Ye.envMap.value = vt, Ye.flipEnvMap.value = vt.isCubeTexture && vt.isRenderTargetTexture === !1 ? -1 : 1), U.isMeshStandardMaterial && U.envMap === null && P.environment !== null && (Ye.envMapIntensity.value = P.environmentIntensity), Qn && (le.setValue(L, "toneMappingExposure", E.toneMappingExposure), St.needsLights && To(Ye, nr), st && U.fog === !0 && J.refreshFogUniforms(Ye, st), J.refreshMaterialUniforms(Ye, U, tt, q, d.state.transmissionRenderTarget[M.id]), Vi.upload(L, ls(St), Ye, Ot)), U.isShaderMaterial && U.uniformsNeedUpdate === !0 && (Vi.upload(L, ls(St), Ye, Ot), U.uniformsNeedUpdate = !1), U.isSpriteMaterial && le.setValue(L, "center", I.center), le.setValue(L, "modelViewMatrix", I.modelViewMatrix), le.setValue(L, "normalMatrix", I.normalMatrix), le.setValue(L, "modelMatrix", I.matrixWorld), U.isShaderMaterial || U.isRawShaderMaterial) {
        const Se = U.uniformsGroups;
        for (let rr = 0, bo = Se.length; rr < bo; rr++) {
          const hs = Se[rr];
          Nt.update(hs, cn), Nt.bind(hs, cn);
        }
      }
      return cn;
    }
    function To(M, P) {
      M.ambientLightColor.needsUpdate = P, M.lightProbe.needsUpdate = P, M.directionalLights.needsUpdate = P, M.directionalLightShadows.needsUpdate = P, M.pointLights.needsUpdate = P, M.pointLightShadows.needsUpdate = P, M.spotLights.needsUpdate = P, M.spotLightShadows.needsUpdate = P, M.rectAreaLights.needsUpdate = P, M.hemisphereLights.needsUpdate = P;
    }
    function Ao(M) {
      return M.isMeshLambertMaterial || M.isMeshToonMaterial || M.isMeshPhongMaterial || M.isMeshStandardMaterial || M.isShadowMaterial || M.isShaderMaterial && M.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return z;
    }, this.getActiveMipmapLevel = function() {
      return w;
    }, this.getRenderTarget = function() {
      return R;
    }, this.setRenderTargetTextures = function(M, P, B) {
      Dt.get(M.texture).__webglTexture = P, Dt.get(M.depthTexture).__webglTexture = B;
      const U = Dt.get(M);
      U.__hasExternalTextures = !0, U.__autoAllocateDepthBuffer = B === void 0, U.__autoAllocateDepthBuffer || ht.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), U.__useRenderToTexture = !1);
    }, this.setRenderTargetFramebuffer = function(M, P) {
      const B = Dt.get(M);
      B.__webglFramebuffer = P, B.__useDefaultFramebuffer = P === void 0;
    }, this.setRenderTarget = function(M, P = 0, B = 0) {
      R = M, z = P, w = B;
      let U = !0, I = null, st = !1, ft = !1;
      if (M) {
        const vt = Dt.get(M);
        vt.__useDefaultFramebuffer !== void 0 ? (xt.bindFramebuffer(L.FRAMEBUFFER, null), U = !1) : vt.__webglFramebuffer === void 0 ? Ot.setupRenderTarget(M) : vt.__hasExternalTextures && Ot.rebindTextures(M, Dt.get(M.texture).__webglTexture, Dt.get(M.depthTexture).__webglTexture);
        const Mt = M.texture;
        (Mt.isData3DTexture || Mt.isDataArrayTexture || Mt.isCompressedArrayTexture) && (ft = !0);
        const Tt = Dt.get(M).__webglFramebuffer;
        M.isWebGLCubeRenderTarget ? (Array.isArray(Tt[P]) ? I = Tt[P][B] : I = Tt[P], st = !0) : M.samples > 0 && Ot.useMultisampledRTT(M) === !1 ? I = Dt.get(M).__webglMultisampledFramebuffer : Array.isArray(Tt) ? I = Tt[B] : I = Tt, g.copy(M.viewport), F.copy(M.scissor), O = M.scissorTest;
      } else
        g.copy(Q).multiplyScalar(tt).floor(), F.copy(dt).multiplyScalar(tt).floor(), O = Lt;
      if (xt.bindFramebuffer(L.FRAMEBUFFER, I) && U && xt.drawBuffers(M, I), xt.viewport(g), xt.scissor(F), xt.setScissorTest(O), st) {
        const vt = Dt.get(M.texture);
        L.framebufferTexture2D(L.FRAMEBUFFER, L.COLOR_ATTACHMENT0, L.TEXTURE_CUBE_MAP_POSITIVE_X + P, vt.__webglTexture, B);
      } else if (ft) {
        const vt = Dt.get(M.texture), Mt = P || 0;
        L.framebufferTextureLayer(L.FRAMEBUFFER, L.COLOR_ATTACHMENT0, vt.__webglTexture, B || 0, Mt);
      }
      k = -1;
    }, this.readRenderTargetPixels = function(M, P, B, U, I, st, ft) {
      if (!(M && M.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let pt = Dt.get(M).__webglFramebuffer;
      if (M.isWebGLCubeRenderTarget && ft !== void 0 && (pt = pt[ft]), pt) {
        xt.bindFramebuffer(L.FRAMEBUFFER, pt);
        try {
          const vt = M.texture, Mt = vt.format, Tt = vt.type;
          if (!Xt.textureFormatReadable(Mt)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Xt.textureTypeReadable(Tt)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          P >= 0 && P <= M.width - U && B >= 0 && B <= M.height - I && L.readPixels(P, B, U, I, ct.convert(Mt), ct.convert(Tt), st);
        } finally {
          const vt = R !== null ? Dt.get(R).__webglFramebuffer : null;
          xt.bindFramebuffer(L.FRAMEBUFFER, vt);
        }
      }
    }, this.copyFramebufferToTexture = function(M, P, B = 0) {
      const U = Math.pow(2, -B), I = Math.floor(P.image.width * U), st = Math.floor(P.image.height * U);
      Ot.setTexture2D(P, 0), L.copyTexSubImage2D(L.TEXTURE_2D, B, 0, 0, M.x, M.y, I, st), xt.unbindTexture();
    }, this.copyTextureToTexture = function(M, P, B, U = 0) {
      const I = P.image.width, st = P.image.height, ft = ct.convert(B.format), pt = ct.convert(B.type);
      Ot.setTexture2D(B, 0), L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL, B.flipY), L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL, B.premultiplyAlpha), L.pixelStorei(L.UNPACK_ALIGNMENT, B.unpackAlignment), P.isDataTexture ? L.texSubImage2D(L.TEXTURE_2D, U, M.x, M.y, I, st, ft, pt, P.image.data) : P.isCompressedTexture ? L.compressedTexSubImage2D(L.TEXTURE_2D, U, M.x, M.y, P.mipmaps[0].width, P.mipmaps[0].height, ft, P.mipmaps[0].data) : L.texSubImage2D(L.TEXTURE_2D, U, M.x, M.y, ft, pt, P.image), U === 0 && B.generateMipmaps && L.generateMipmap(L.TEXTURE_2D), xt.unbindTexture();
    }, this.copyTextureToTexture3D = function(M, P, B, U, I = 0) {
      const st = M.max.x - M.min.x, ft = M.max.y - M.min.y, pt = M.max.z - M.min.z, vt = ct.convert(U.format), Mt = ct.convert(U.type);
      let Tt;
      if (U.isData3DTexture)
        Ot.setTexture3D(U, 0), Tt = L.TEXTURE_3D;
      else if (U.isDataArrayTexture || U.isCompressedArrayTexture)
        Ot.setTexture2DArray(U, 0), Tt = L.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL, U.flipY), L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL, U.premultiplyAlpha), L.pixelStorei(L.UNPACK_ALIGNMENT, U.unpackAlignment);
      const Ut = L.getParameter(L.UNPACK_ROW_LENGTH), Qt = L.getParameter(L.UNPACK_IMAGE_HEIGHT), oe = L.getParameter(L.UNPACK_SKIP_PIXELS), ge = L.getParameter(L.UNPACK_SKIP_ROWS), Oe = L.getParameter(L.UNPACK_SKIP_IMAGES), Gt = B.isCompressedTexture ? B.mipmaps[I] : B.image;
      L.pixelStorei(L.UNPACK_ROW_LENGTH, Gt.width), L.pixelStorei(L.UNPACK_IMAGE_HEIGHT, Gt.height), L.pixelStorei(L.UNPACK_SKIP_PIXELS, M.min.x), L.pixelStorei(L.UNPACK_SKIP_ROWS, M.min.y), L.pixelStorei(L.UNPACK_SKIP_IMAGES, M.min.z), B.isDataTexture || B.isData3DTexture ? L.texSubImage3D(Tt, I, P.x, P.y, P.z, st, ft, pt, vt, Mt, Gt.data) : U.isCompressedArrayTexture ? L.compressedTexSubImage3D(Tt, I, P.x, P.y, P.z, st, ft, pt, vt, Gt.data) : L.texSubImage3D(Tt, I, P.x, P.y, P.z, st, ft, pt, vt, Mt, Gt), L.pixelStorei(L.UNPACK_ROW_LENGTH, Ut), L.pixelStorei(L.UNPACK_IMAGE_HEIGHT, Qt), L.pixelStorei(L.UNPACK_SKIP_PIXELS, oe), L.pixelStorei(L.UNPACK_SKIP_ROWS, ge), L.pixelStorei(L.UNPACK_SKIP_IMAGES, Oe), I === 0 && U.generateMipmaps && L.generateMipmap(Tt), xt.unbindTexture();
    }, this.initTexture = function(M) {
      M.isCubeTexture ? Ot.setTextureCube(M, 0) : M.isData3DTexture ? Ot.setTexture3D(M, 0) : M.isDataArrayTexture || M.isCompressedArrayTexture ? Ot.setTexture2DArray(M, 0) : Ot.setTexture2D(M, 0), xt.unbindTexture();
    }, this.resetState = function() {
      z = 0, w = 0, R = null, xt.reset(), Rt.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return Xe;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(t) {
    this._outputColorSpace = t;
    const e = this.getContext();
    e.drawingBufferColorSpace = t === Zr ? "display-p3" : "srgb", e.unpackColorSpace = Wt.workingColorSpace === Ji ? "display-p3" : "srgb";
  }
  get useLegacyLights() {
    return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights;
  }
  set useLegacyLights(t) {
    console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = t;
  }
}
class ip extends se {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new qe(), this.environmentIntensity = 1, this.environmentRotation = new qe(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(t, e) {
    return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, this.backgroundRotation.copy(t.backgroundRotation), this.environmentIntensity = t.environmentIntensity, this.environmentRotation.copy(t.environmentRotation), t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.fog !== null && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity), e.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (e.object.environmentIntensity = this.environmentIntensity), e.object.environmentRotation = this.environmentRotation.toArray(), e;
  }
}
class is extends fi {
  constructor(t) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Pt(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.fog = t.fog, this;
  }
}
const Ki = /* @__PURE__ */ new D(), $i = /* @__PURE__ */ new D(), Ia = /* @__PURE__ */ new $t(), si = /* @__PURE__ */ new Jr(), Bi = /* @__PURE__ */ new Qi(), Br = /* @__PURE__ */ new D(), Na = /* @__PURE__ */ new D();
class rp extends se {
  constructor(t = new Fe(), e = new is()) {
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
        Ki.fromBufferAttribute(e, r - 1), $i.fromBufferAttribute(e, r), n[r] = n[r - 1], n[r] += Ki.distanceTo($i);
      t.setAttribute("lineDistance", new Me(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(t, e) {
    const n = this.geometry, r = this.matrixWorld, s = t.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Bi.copy(n.boundingSphere), Bi.applyMatrix4(r), Bi.radius += s, t.ray.intersectsSphere(Bi) === !1)
      return;
    Ia.copy(r).invert(), si.copy(t.ray).applyMatrix4(Ia);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = this.isLineSegments ? 2 : 1, u = n.index, f = n.attributes.position;
    if (u !== null) {
      const m = Math.max(0, a.start), _ = Math.min(u.count, a.start + a.count);
      for (let x = m, d = _ - 1; x < d; x += c) {
        const h = u.getX(x), A = u.getX(x + 1), E = zi(this, t, si, l, h, A);
        E && e.push(E);
      }
      if (this.isLineLoop) {
        const x = u.getX(_ - 1), d = u.getX(m), h = zi(this, t, si, l, x, d);
        h && e.push(h);
      }
    } else {
      const m = Math.max(0, a.start), _ = Math.min(f.count, a.start + a.count);
      for (let x = m, d = _ - 1; x < d; x += c) {
        const h = zi(this, t, si, l, x, x + 1);
        h && e.push(h);
      }
      if (this.isLineLoop) {
        const x = zi(this, t, si, l, _ - 1, m);
        x && e.push(x);
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
function zi(i, t, e, n, r, s) {
  const a = i.geometry.attributes.position;
  if (Ki.fromBufferAttribute(a, r), $i.fromBufferAttribute(a, s), e.distanceSqToSegment(Ki, $i, Br, Na) > n)
    return;
  Br.applyMatrix4(i.matrixWorld);
  const l = t.ray.origin.distanceTo(Br);
  if (!(l < t.near || l > t.far))
    return {
      distance: l,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: Na.clone().applyMatrix4(i.matrixWorld),
      index: r,
      face: null,
      faceIndex: null,
      object: i
    };
}
const Fa = /* @__PURE__ */ new D(), Oa = /* @__PURE__ */ new D();
class So extends rp {
  constructor(t, e) {
    super(t, e), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const e = t.attributes.position, n = [];
      for (let r = 0, s = e.count; r < s; r += 2)
        Fa.fromBufferAttribute(e, r), Oa.fromBufferAttribute(e, r + 1), n[r] = r === 0 ? 0 : n[r - 1], n[r + 1] = n[r] + Fa.distanceTo(Oa);
      t.setAttribute("lineDistance", new Me(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Eo extends se {
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
const zr = /* @__PURE__ */ new $t(), Ba = /* @__PURE__ */ new D(), za = /* @__PURE__ */ new D();
class sp {
  constructor(t) {
    this.camera = t, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new zt(512, 512), this.map = null, this.mapPass = null, this.matrix = new $t(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new es(), this._frameExtents = new zt(1, 1), this._viewportCount = 1, this._viewports = [
      new re(0, 0, 1, 1)
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
    Ba.setFromMatrixPosition(t.matrixWorld), e.position.copy(Ba), za.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(za), e.updateMatrixWorld(), zr.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(zr), n.set(
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
    ), n.multiply(zr);
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
class ap extends sp {
  constructor() {
    super(new po(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class op extends Eo {
  constructor(t, e) {
    super(t, e), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(se.DEFAULT_UP), this.updateMatrix(), this.target = new se(), this.shadow = new ap();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t) {
    return super.copy(t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
  }
}
class lp extends Eo {
  constructor(t, e) {
    super(t, e), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
const Ha = /* @__PURE__ */ new $t();
class cp {
  constructor(t, e, n = 0, r = 1 / 0) {
    this.ray = new Jr(t, e), this.near = n, this.far = r, this.camera = null, this.layers = new Qr(), this.params = {
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
    return Ha.identity().extractRotation(t.matrixWorld), this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(Ha), this;
  }
  intersectObject(t, e = !0, n = []) {
    return $r(t, this, n, e), n.sort(Va), n;
  }
  intersectObjects(t, e = !0, n = []) {
    for (let r = 0, s = t.length; r < s; r++)
      $r(t[r], this, n, e);
    return n.sort(Va), n;
  }
}
function Va(i, t) {
  return i.distance - t.distance;
}
function $r(i, t, e, n) {
  if (i.layers.test(t.layers) && i.raycast(t, e), n === !0) {
    const r = i.children;
    for (let s = 0, a = r.length; s < a; s++)
      $r(r[s], t, e, !0);
  }
}
class Mp {
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
    return this.radius = Math.sqrt(t * t + e * e + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(fe(e / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class up extends So {
  constructor(t = 10, e = 10, n = 4473924, r = 8947848) {
    n = new Pt(n), r = new Pt(r);
    const s = e / 2, a = t / e, o = t / 2, l = [], c = [];
    for (let f = 0, m = 0, _ = -o; f <= e; f++, _ += a) {
      l.push(-o, 0, _, o, 0, _), l.push(_, 0, -o, _, 0, o);
      const x = f === s ? n : r;
      x.toArray(c, m), m += 3, x.toArray(c, m), m += 3, x.toArray(c, m), m += 3, x.toArray(c, m), m += 3;
    }
    const u = new Fe();
    u.setAttribute("position", new Me(l, 3)), u.setAttribute("color", new Me(c, 3));
    const p = new is({ vertexColors: !0, toneMapped: !1 });
    super(u, p), this.type = "GridHelper";
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class hp extends So {
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
    ], r = new Fe();
    r.setAttribute("position", new Me(e, 3)), r.setAttribute("color", new Me(n, 3));
    const s = new is({ vertexColors: !0, toneMapped: !1 });
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
  revision: jr
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = jr);
const dp = ["innerHTML"], fp = /* @__PURE__ */ ka({
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
    const e = i, n = sr(null), r = sr({ show: !1, x: 0, y: 0, content: "" }), s = sr(e.autoAnimate);
    let a, o, l, c = null, u, p, f, m = null, _ = [], x = 0, d = 0;
    Io(async () => {
      const { OrbitControls: O } = await import("./OrbitControls-BB9R1U0j.js");
      h(), e.enableOrbit && (c = new O(o, l.domElement), c.enableDamping = !0, c.dampingFactor = 0.05), R(), window.addEventListener("mousemove", g), window.addEventListener("resize", F), n.value && n.value.addEventListener("mouseleave", () => {
        r.value.show = !1;
      });
    }), No(() => {
      m && cancelAnimationFrame(m), window.removeEventListener("mousemove", g), window.removeEventListener("resize", F), l.dispose();
    });
    function h() {
      const { backgroundColor: O, showGridHelper: b, showAxesHelper: H, cameraPosition: W } = e;
      a = new ip(), a.background = new Pt(O), o = new ye(75, e.width / e.height, 0.1, 1e3), o.position.set(W.x, W.y, W.z), l = new np({ antialias: !0 }), l.setSize(e.width, e.height), l.shadowMap.enabled = !0, n.value && n.value.appendChild(l.domElement), e.enableOrbit && c && (c.enableDamping = !0, c.dampingFactor = 0.05), a.add(new lp(16777215, 0.6));
      const q = new op(16777215, 0.8);
      if (q.position.set(10, 20, 5), a.add(q), u = new oi(), a.add(u), b) {
        const tt = Math.max(x, d) * e.baseSize * 1.2, N = new up(tt, Math.max(x, d), 4473924, 2236962);
        a.add(N);
      }
      if (H) {
        const tt = new hp(Math.max(x, d) * e.baseSize * 0.6);
        a.add(tt);
      }
      p = new cp(), f = new zt(), w();
    }
    function A(O = 10, b = 10) {
      return Array.from({ length: O }, () => Array.from({ length: b }, () => Math.random() * 15 + 1));
    }
    function E(O, b, H, W, q, tt) {
      const N = 0.1 + (H - W) / (q - W) * e.maxHeight, j = new jn(e.baseSize, N, e.baseSize, 1, 8, 1), Q = j.attributes.position, dt = j.attributes.normal, Lt = [], Vt = (H - W) / (q - W), G = [
        new Pt(139),
        // 深蓝
        new Pt(65535),
        // 青
        new Pt(16776960),
        // 黄
        new Pt(16711680)
        // 红
      ];
      let Y = [];
      Vt >= 0.75 ? Y = [...G] : Vt >= 0.5 ? Y = G.slice(0, 3) : Vt >= 0.25 ? Y = G.slice(0, 2) : Y = G.slice(0, 1);
      for (let Et = 0; Et < Q.count; Et++) {
        const It = Q.getY(Et), L = dt.getY(Et);
        let yt = new Pt();
        const ht = (It + N / 2) / N;
        L > 0.5 ? yt.copy(Y[Y.length - 1]) : Y.length === 4 ? ht < 0.25 ? yt.lerpColors(Y[0], Y[1], ht / 0.25) : ht < 0.5 ? yt.lerpColors(Y[1], Y[2], (ht - 0.25) / 0.25) : ht < 0.75 ? yt.lerpColors(Y[2], Y[3], (ht - 0.5) / 0.25) : yt.copy(Y[3]) : Y.length === 3 ? ht < 0.33 ? yt.lerpColors(Y[0], Y[1], ht / 0.33) : ht < 0.66 ? yt.lerpColors(Y[1], Y[2], (ht - 0.33) / 0.33) : yt.copy(Y[2]) : Y.length === 2 ? ht < 0.5 ? yt.lerpColors(Y[0], Y[1], ht / 0.5) : yt.copy(Y[1]) : yt.copy(Y[0]), Lt.push(yt.r, yt.g, yt.b);
      }
      j.setAttribute("color", new Pe(new Float32Array(Lt), 3));
      const ut = new ts({ vertexColors: !0 }), nt = new Ce(j, ut);
      return nt.position.set((O - (x - 1) / 2) * e.baseSize, N / 2, (b - (d - 1) / 2) * e.baseSize), nt.userData = { value: H, x: O, z: b }, nt;
    }
    let T = null;
    new se();
    function z() {
      if (T)
        T.geometry.dispose(), T.material.dispose(), u.remove(T), T = null;
      else {
        const { children: O } = u;
        O.forEach((b) => {
          b instanceof Ce && (b.geometry.dispose(), (Array.isArray(b.material) ? b.material : [b.material]).forEach((W) => W.dispose()));
        }), u.clear();
      }
    }
    function w() {
      var W;
      if (z(), console.log("createHeatmap 调用，props.data =", e.data), Array.isArray(e.data) && e.data.length > 0 && e.data.every((q) => Array.isArray(q)) ? _ = e.data : (console.log("数据不合法，使用默认数据"), _ = A()), u.clear(), x = _.length, d = ((W = _[0]) == null ? void 0 : W.length) || 0, x === 0 || d === 0) {
        console.warn("数据为空，无法创建热力图");
        return;
      }
      let b = 1 / 0, H = -1 / 0;
      for (let q = 0; q < x; q++) {
        const tt = _[q];
        if (Array.isArray(tt))
          for (let N = 0; N < d; N++) {
            const j = tt[N];
            typeof j == "number" && (j < b && (b = j), j > H && (H = j));
          }
      }
      b === 1 / 0 && (b = 0), H === -1 / 0 && (H = 0);
      for (let q = 0; q < x; q++) {
        const tt = _[q];
        if (Array.isArray(tt))
          for (let N = 0; N < d; N++) {
            const j = tt[N], dt = E(q, N, typeof j == "number" ? j : 0, b, H);
            u.add(dt);
          }
      }
    }
    function R() {
      m = requestAnimationFrame(R), s.value && k(), c && c.update(), l.render(a, o);
    }
    function k() {
      for (let O = 0; O < x; O++)
        for (let b = 0; b < d; b++)
          _[O] && typeof _[O][b] == "number" && (_[O][b] += (Math.random() - 0.5) * 0.3, _[O][b] = Math.min(20, Math.max(1, _[O][b])));
    }
    let S = null;
    function g(O) {
      if (!n.value)
        return;
      const b = n.value.getBoundingClientRect();
      if (O.clientX < b.left || O.clientX > b.right || O.clientY < b.top || O.clientY > b.bottom) {
        r.value.show = !1;
        return;
      }
      S && cancelAnimationFrame(S), S = requestAnimationFrame(() => {
        f.x = (O.clientX - b.left) / b.width * 2 - 1, f.y = -((O.clientY - b.top) / b.height) * 2 + 1, p.setFromCamera(f, o);
        const H = p.intersectObjects(u.children);
        if (H.length) {
          const W = H[0].object, { value: q, x: tt, z: N } = W.userData;
          r.value = {
            show: !0,
            x: O.clientX - b.left + 10,
            y: O.clientY - b.top - 30,
            content: `数值: ${q.toFixed(2)}<br>位置: (${tt}, ${N})`
          };
        } else
          r.value.show = !1;
      });
    }
    function F() {
      o.aspect = e.width / e.height, o.updateProjectionMatrix(), l.setSize(e.width, e.height);
    }
    return t({
      refresh: w,
      toggleAnimation: () => s.value = !s.value
    }), (O, b) => (Hr(), ds("div", {
      class: "heatmap-wrapper",
      style: fs({ width: i.width + "px", height: i.height + "px" })
    }, [
      Hn(r).show ? (Hr(), ds("div", {
        key: 0,
        class: "tooltip",
        style: fs({ left: Hn(r).x + "px", top: Hn(r).y + "px" }),
        innerHTML: Hn(r).content
      }, null, 12, dp)) : Fo("", !0),
      Oo("div", {
        ref_key: "containerRef",
        ref: n,
        class: "three-container"
      }, null, 512)
    ], 4));
  }
}), pp = /* @__PURE__ */ Wa(fp, [["__scopeId", "data-v-624fdd06"]]), mp = Xa(pp), Ga = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WyButton: Ho,
  WyHeatMap: mp
}, Symbol.toStringTag, { value: "Module" })), Sp = (i) => {
  for (const t in Ga)
    i.use(Ga[t]);
};
export {
  $n as E,
  gp as M,
  _n as P,
  hi as Q,
  Jr as R,
  Mp as S,
  vp as T,
  D as V,
  Ho as W,
  zt as a,
  xp as b,
  mp as c,
  Sp as i
};
