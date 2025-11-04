import { ref as p, reactive as ee, watch as B, computed as N, onMounted as te, nextTick as le, createElementBlock as X, openBlock as Y, createElementVNode as u, createCommentVNode as L, normalizeStyle as V, withModifiers as ae, toDisplayString as i, normalizeClass as oe } from "vue";
/* empty css               */
import ne from "../../_virtual/_plugin-vue_export-helper.js";
const re = { class: "heatmap-container" }, se = { class: "coordinates" }, ue = {
  key: 0,
  class: "controls"
}, ce = { class: "data-info" }, ie = {
  key: 1,
  class: "legend"
}, ve = /* @__PURE__ */ Object.assign({ name: "HeatMap2D" }, {
  __name: "HeatMap2D",
  props: {
    width: { type: Number, default: 612 },
    height: { type: Number, default: 831 },
    blockWidth: { type: Number, default: 36 },
    blockHeight: { type: Number, default: 36 },
    refreshTrigger: { type: [Number, String, Boolean], default: null },
    // 触发刷新
    showControls: { type: Boolean, default: !1 },
    showLegend: { type: Boolean, default: !1 },
    heatmapData: { type: Array, default: () => [] }
  },
  setup(q) {
    const o = q, g = p(o.width ? o.width : 0), M = p(o.height), f = p(o.blockWidth), d = p(o.blockHeight), k = p(null);
    let w = null;
    const v = p(0), h = p(0), c = p([]), R = p(0), W = p(0), s = ee({
      visible: !1,
      x: 0,
      y: 0,
      col: 0,
      row: 0,
      value: 0,
      rawX: 0,
      rawY: 0
    });
    let S = !1;
    const D = [
      { threshold: 0.1, color: "#08315f" },
      { threshold: 0.2, color: "#4588bb" },
      { threshold: 0.3, color: "#85bee3" },
      { threshold: 0.4, color: "#bedcf4" },
      { threshold: 0.5, color: "#e4d7dc" },
      { threshold: 0.6, color: "#fcdfda" },
      { threshold: 0.7, color: "#f9b6a2" },
      { threshold: 0.8, color: "#f97860" },
      { threshold: 0.9, color: "#c81626" },
      { threshold: 1, color: "#af000f" }
    ];
    B(
      () => o.heatmapData,
      (e) => {
        c.value = e, b();
      },
      { deep: !0 }
    );
    function $(e, t) {
      if (t === 0)
        return "transparent";
      const l = e / t;
      for (let a of D)
        if (l <= a.threshold)
          return a.color;
      return D[D.length - 1].color;
    }
    const F = N(() => {
      var t;
      let e = 0;
      for (let l = 0; l < h.value; l++)
        for (let a = 0; a < v.value; a++)
          ((t = c.value[l]) == null ? void 0 : t[a]) > 0 && e++;
      return e;
    }), z = N(() => {
      var t;
      let e = 0;
      for (let l = 0; l < h.value; l++)
        for (let a = 0; a < v.value; a++) {
          const n = ((t = c.value[l]) == null ? void 0 : t[a]) || 0;
          n > e && (e = n);
        }
      return e;
    }), G = N(() => {
      var l;
      let e = 0, t = 0;
      for (let a = 0; a < h.value; a++)
        for (let n = 0; n < v.value; n++) {
          const r = ((l = c.value[a]) == null ? void 0 : l[n]) || 0;
          r > 0 && (e += r, t++);
        }
      return t > 0 ? e / t : 0;
    });
    function T() {
      v.value = Math.ceil(g.value / f.value), h.value = Math.ceil(M.value / d.value);
    }
    function I() {
      c.value = Array(h.value).fill().map(() => Array(v.value).fill(0));
    }
    function b() {
      var e;
      if (w) {
        w.clearRect(0, 0, g.value, M.value);
        for (let t = 0; t < h.value; t++)
          for (let l = 0; l < v.value; l++) {
            const a = ((e = c.value[t]) == null ? void 0 : e[l]) || 0;
            if (a > 0) {
              const n = l * f.value, r = t * d.value;
              w.fillStyle = $(a, z.value), w.fillRect(n, r, f.value, d.value);
            }
          }
      }
    }
    function _(e, t, l, a) {
      for (let n = 0; n < h.value; n++)
        for (let r = 0; r < v.value; r++) {
          const m = r * f.value + f.value / 2, H = n * d.value + d.value / 2, C = Math.sqrt((m - e) ** 2 + (H - t) ** 2);
          if (C < l) {
            const j = a * (1 - C / l);
            c.value[n][r] = Math.max(c.value[n][r], Math.floor(j));
          }
        }
    }
    function O(e, t, l, a) {
      const n = Math.floor(e / f.value), r = Math.floor(t / d.value), m = Math.ceil(l / Math.max(f.value, d.value)), H = Math.max(0, n - m), C = Math.min(v.value - 1, n + m), j = Math.max(0, r - m), U = Math.min(h.value - 1, r + m);
      for (let x = j; x <= U; x++)
        for (let y = H; y <= C; y++) {
          const E = Math.sqrt((y - n) ** 2 + (x - r) ** 2) * Math.max(f.value, d.value);
          if (E < l) {
            const Z = a * (1 - E / l);
            c.value[x][y] = Math.max(c.value[x][y], Math.floor(Z));
          }
        }
      b();
    }
    function J() {
      for (let e = 0; e < h.value; e++)
        for (let t = 0; t < v.value; t++)
          c.value[e][t] = Math.random() < 0.1 ? Math.floor(Math.random() * 100) : 0;
      b();
    }
    function K() {
      A(), _(0.1 * g.value, 0.1 * M.value, 50, 90), _(0.3 * g.value, 0.2 * M.value, 40, 80), _(0.2 * g.value, 0.5 * M.value, 60, 95), b();
    }
    function A() {
      c.value.forEach((e) => e.fill(0)), b();
    }
    function P(e) {
      var m;
      const t = k.value.getBoundingClientRect(), l = e.clientX - t.left, a = e.clientY - t.top;
      R.value = Math.floor(l), W.value = Math.floor(a);
      const n = Math.floor(l / f.value), r = Math.floor(a / d.value);
      n >= 0 && n < v.value && r >= 0 && r < h.value ? (s.visible = !0, s.col = n, s.row = r, s.value = ((m = c.value[r]) == null ? void 0 : m[n]) || 0, s.rawX = l, s.rawY = a, s.x = e.clientX + 15, s.y = e.clientY - 30) : s.visible = !1, S && O(l, a, 15, 60);
    }
    function Q() {
      S = !1, s.visible = !1;
    }
    return te(() => {
      const e = k.value;
      e.width = o.width, e.height = o.height, w = e.getContext("2d"), T(), o.heatmapData && o.heatmapData.length > 0 ? c.value = o.heatmapData : I(), b();
    }), B(
      () => [o.width, o.height, o.blockWidth, o.blockHeight],
      () => {
        g.value = o.width, M.value = o.height, f.value = o.blockWidth, d.value = o.blockHeight, le(() => {
          const e = k.value;
          e && (e.width = g.value, e.height = M.value, w = e.getContext("2d"), T(), b());
        });
      }
      // 删除 { immediate: true }
    ), B(
      () => o.refreshTrigger,
      () => {
        o.refreshTrigger !== null && b();
      }
    ), (e, t) => (Y(), X("div", re, [
      u("div", {
        class: "canvas-wrapper",
        style: V({ width: `${g.value}px`, height: `${M.value}px` })
      }, [
        u("canvas", {
          ref_key: "heatmapCanvas",
          ref: k,
          onMousemove: P,
          onMouseleave: Q,
          onContextmenu: t[0] || (t[0] = ae(() => {
          }, ["prevent"]))
        }, null, 544),
        u("div", se, "X: " + i(R.value) + ", Y: " + i(W.value), 1),
        u("div", {
          class: oe(["tooltip", { show: s.visible }]),
          style: V({ left: s.x + "px", top: s.y + "px" })
        }, [
          t[1] || (t[1] = u("h3", null, "热力块信息", -1)),
          u("p", null, "位置: (" + i(s.col) + ", " + i(s.row) + ")", 1),
          u("p", null, "值: " + i(s.value), 1),
          u("p", null, "坐标: (" + i(Math.floor(s.rawX)) + ", " + i(Math.floor(s.rawY)) + ")", 1)
        ], 6)
      ], 4),
      o.showControls ? (Y(), X("div", ue, [
        u("div", ce, " 尺寸: " + i(v.value) + " × " + i(h.value) + " (共 " + i(v.value * h.value) + " 块)｜ 活跃块: " + i(F.value) + "｜ 最大值: " + i(z.value) + "｜ 平均值: " + i(G.value.toFixed(2)), 1),
        u("div", { class: "btn-group" }, [
          u("button", { onClick: J }, "随机数据"),
          u("button", { onClick: K }, "重置"),
          u("button", { onClick: A }, "清除")
        ])
      ])) : L("", !0),
      o.showLegend ? (Y(), X("div", ie, [...t[2] || (t[2] = [
        u("div", { class: "color-scale" }, null, -1),
        u("div", { class: "color-labels" }, [
          u("span", null, "低"),
          u("span", null, "高")
        ], -1)
      ])])) : L("", !0)
    ]));
  }
}), me = /* @__PURE__ */ ne(ve, [["__scopeId", "data-v-fa92eb4d"]]);
export {
  me as default
};
