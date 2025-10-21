import K from "../button/Button.vue.js";
import { ref as p, reactive as P, computed as B, watch as Q, onMounted as Z, resolveComponent as $, createElementBlock as ee, openBlock as te, createElementVNode as u, withModifiers as le, toDisplayString as r, normalizeStyle as oe, normalizeClass as ae, createVNode as h, withCtx as C, createTextVNode as k } from "vue";
/* empty css               */
import ne from "../../_virtual/_plugin-vue_export-helper.js";
const ue = { class: "container" }, se = { class: "content" }, re = { class: "heatmap-wrapper" }, ie = { class: "canvas-container" }, ve = {
  class: "coordinates",
  id: "coordinates"
}, ce = { class: "controls" }, fe = { class: "control-group" }, de = { class: "control-row" }, pe = { class: "control-item" }, me = { class: "control-item" }, he = { class: "control-group" }, Me = {
  class: "data-info",
  id: "dataInfo"
}, we = { class: "btn-group" }, y = 612, b = 831, xe = /* @__PURE__ */ Object.assign({ name: "JBHeatMap2D" }, {
  __name: "HeatMap2D",
  setup(ye) {
    const D = p(null);
    let M = null;
    const f = p(36), d = p(36), X = p(80), i = p(Math.floor(y / f.value)), v = p(Math.floor(b / d.value)), Y = p(0), R = p(0), s = P({
      visible: !1,
      x: 0,
      y: 0,
      col: 0,
      row: 0,
      value: 0,
      rawX: 0,
      rawY: 0
    }), c = p([]), J = B(() => {
      var e;
      let t = 0;
      for (let l = 0; l < v.value; l++)
        for (let a = 0; a < i.value; a++)
          ((e = c.value[l]) == null ? void 0 : e[a]) > 0 && t++;
      return t;
    }), O = B(() => {
      var e;
      let t = 0;
      for (let l = 0; l < v.value; l++)
        for (let a = 0; a < i.value; a++)
          ((e = c.value[l]) == null ? void 0 : e[a]) > t && (t = c.value[l][a]);
      return t;
    }), q = B(() => {
      var l;
      let t = 0, e = 0;
      for (let a = 0; a < v.value; a++)
        for (let o = 0; o < i.value; o++) {
          const n = (l = c.value[a]) == null ? void 0 : l[o];
          n > 0 && (t += n, e++);
        }
      return e > 0 ? t / e : 0;
    });
    function A(t, e) {
      const l = e > 0 ? t / e : 0;
      return l < 0.25 ? "rgb(43, 88, 118)" : l < 0.5 ? "rgb(78, 67, 118)" : l < 0.75 ? "rgb(178, 69, 146)" : "rgb(241, 95, 121)";
    }
    function m() {
      if (M) {
        M.clearRect(0, 0, y, b);
        for (let t = 0; t < v.value; t++)
          for (let e = 0; e < i.value; e++) {
            const l = c.value[t][e];
            if (l > 0) {
              const a = e * f.value, o = t * d.value;
              M.fillStyle = A(l, X.value), M.fillRect(a, o, f.value, d.value);
            }
          }
      }
    }
    function S() {
      c.value = Array(v.value).fill().map(() => Array(i.value).fill(0));
    }
    function _(t, e, l, a) {
      for (let o = 0; o < v.value; o++)
        for (let n = 0; n < i.value; n++) {
          const V = n * f.value + f.value / 2, j = o * d.value + d.value / 2, g = Math.sqrt((V - t) ** 2 + (j - e) ** 2);
          if (g < l) {
            const H = a * (1 - g / l);
            c.value[o][n] = Math.max(c.value[o][n], Math.floor(H));
          }
        }
    }
    function E(t, e, l, a) {
      const o = Math.floor(t / f.value), n = Math.floor(e / d.value), V = Math.max(0, o - l), j = Math.min(i.value - 1, o + l), g = Math.max(0, n - l), H = Math.min(v.value - 1, n + l);
      for (let w = g; w <= H; w++)
        for (let x = V; x <= j; x++) {
          const W = Math.sqrt((x - o) ** 2 + (w - n) ** 2);
          if (W < l) {
            const G = a * (1 - W / l);
            c.value[w][x] = Math.min(100, Math.max(c.value[w][x], Math.floor(G)));
          }
        }
      m();
    }
    function I() {
      for (let t = 0; t < v.value; t++)
        for (let e = 0; e < i.value; e++)
          c.value[t][e] = Math.random() < 0.1 ? Math.floor(Math.random() * 100) : 0;
      console.log("数据已生成", c.value), m();
    }
    function z() {
      N(), _(50, 50, 30, 90), _(150, 100, 25, 80), _(80, 200, 35, 95), _(180, 250, 40, 85), m();
    }
    function N() {
      for (let t = 0; t < v.value; t++)
        for (let e = 0; e < i.value; e++)
          c.value[t][e] = 0;
      m();
    }
    function F() {
      var a;
      if (f.value < 1 || f.value > 100 || d.value < 1 || d.value > 100) {
        alert("请输入有效的热力块尺寸（1-100）");
        return;
      }
      const t = JSON.parse(JSON.stringify(c.value)), e = i.value, l = v.value;
      i.value = Math.floor(y / f.value), v.value = Math.floor(b / d.value), S();
      for (let o = 0; o < Math.min(v.value, l.value); o++)
        for (let n = 0; n < Math.min(i.value, e); n++)
          c.value[o][n] = ((a = t[o]) == null ? void 0 : a[n]) || 0;
      m();
    }
    let U = !1;
    function L(t) {
      const e = D.value.getBoundingClientRect(), l = t.clientX - e.left, a = t.clientY - e.top;
      Y.value = Math.floor(l), R.value = Math.floor(a);
      const o = Math.floor(l / f.value), n = Math.floor(a / d.value);
      o >= 0 && o < i.value && n >= 0 && n < v.value ? (s.visible = !0, s.col = o, s.row = n, s.value = c.value[n][o], s.rawX = l, s.rawY = a, s.x = t.clientX + 15, s.y = t.clientY - 30) : s.visible = !1, U && E(l, a, 5, 60);
    }
    function T() {
      U = !1, s.visible = !1;
    }
    return Q(X, () => m()), Z(() => {
      M = D.value.getContext("2d"), i.value = Math.floor(y / f.value), v.value = Math.floor(b / d.value), S(), z();
    }), (t, e) => {
      const l = $("el-input"), a = K;
      return te(), ee("div", ue, [
        u("div", se, [
          u("div", re, [
            u("div", ie, [
              u("canvas", {
                ref_key: "heatmapCanvas",
                ref: D,
                id: "heatmapCanvas",
                width: "612",
                height: "831",
                onMousedown: e[0] || (e[0] = (...o) => t.handleMouseDown && t.handleMouseDown(...o)),
                onMousemove: L,
                onMouseup: e[1] || (e[1] = (...o) => t.handleMouseUp && t.handleMouseUp(...o)),
                onMouseleave: T,
                onContextmenu: e[2] || (e[2] = le(() => {
                }, ["prevent"]))
              }, null, 544),
              u("div", ve, "X: " + r(Y.value) + ", Y: " + r(R.value), 1),
              u("div", {
                class: ae(["tooltip", { show: s.visible }]),
                style: oe({ left: s.x + "px", top: s.y + "px" })
              }, [
                e[5] || (e[5] = u("h3", null, "热力块信息", -1)),
                u("p", null, "位置: (" + r(s.col) + ", " + r(s.row) + ")", 1),
                u("p", null, "值: " + r(s.value), 1),
                u("p", null, "坐标: (" + r(Math.floor(s.rawX)) + ", " + r(Math.floor(s.rawY)) + ")", 1)
              ], 6)
            ])
          ])
        ]),
        u("div", ce, [
          u("div", fe, [
            u("div", de, [
              u("div", pe, [
                e[6] || (e[6] = u("label", { for: "blockWidth" }, "热力块宽度 (px)", -1)),
                h(l, {
                  type: "number",
                  id: "blockWidth",
                  min: "1",
                  max: "100",
                  modelValue: f.value,
                  "onUpdate:modelValue": e[3] || (e[3] = (o) => f.value = o),
                  modelModifiers: { number: !0 }
                }, null, 8, ["modelValue"])
              ]),
              u("div", me, [
                e[7] || (e[7] = u("label", { for: "blockHeight" }, "热力块高度 (px)", -1)),
                h(l, {
                  type: "number",
                  id: "blockHeight",
                  min: "1",
                  max: "100",
                  modelValue: d.value,
                  "onUpdate:modelValue": e[4] || (e[4] = (o) => d.value = o),
                  modelModifiers: { number: !0 }
                }, null, 8, ["modelValue"])
              ])
            ]),
            h(a, {
              type: "primary",
              onClick: F
            }, {
              default: C(() => [...e[8] || (e[8] = [
                k("应用热力块尺寸", -1)
              ])]),
              _: 1
            })
          ]),
          u("div", he, [
            u("div", Me, " 热力图尺寸: " + r(y) + "px × " + r(b) + "px、 热力块数量: " + r(i.value.value) + " × " + r(v.value.value) + " (共" + r(i.value.value * v.value.value) + "个)、 每个热力块尺寸: " + r(f.value) + "px × " + r(d.value) + "px、 活跃热力块: " + r(J.value) + "、 最大值: " + r(O.value) + "、 平均值: " + r(q.value.toFixed(2)), 1)
          ]),
          u("div", we, [
            h(a, {
              type: "primary",
              onClick: I
            }, {
              default: C(() => [...e[9] || (e[9] = [
                k("随机生成数据", -1)
              ])]),
              _: 1
            }),
            h(a, {
              type: "primary",
              onClick: z
            }, {
              default: C(() => [...e[10] || (e[10] = [
                k("重置数据", -1)
              ])]),
              _: 1
            }),
            h(a, {
              type: "primary",
              onClick: N
            }, {
              default: C(() => [...e[11] || (e[11] = [
                k("清除数据", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
}), ke = /* @__PURE__ */ ne(xe, [["__scopeId", "data-v-481b569c"]]);
export {
  ke as default
};
