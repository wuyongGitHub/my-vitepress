import { defineComponent as N, ref as S, computed as V, watchEffect as U, nextTick as X, onUnmounted as J, createElementBlock as y, openBlock as E, createElementVNode as F, renderSlot as Y, createCommentVNode as $, Fragment as j, renderList as K, normalizeStyle as Q, unref as T, toDisplayString as B } from "vue";
import * as r from "three";
import { deepClone as D, isWindow as L, toPercent as Z } from "../../utils/tool.js";
const ee = { class: "three-pie-container" }, te = { class: "three-pie-main" }, ne = { class: "pie-value" }, ae = { class: "pie-label" }, re = /* @__PURE__ */ N({
  name: "BqPie",
  __name: "Pie",
  props: {
    data: { default: () => [
      {
        value: 0.6637,
        label: "TM"
      },
      {
        value: 0.2171,
        label: "DOUYIN"
      },
      {
        value: 0.0764,
        label: "JD"
      },
      {
        value: 0.0237,
        label: "VIP"
      },
      {
        value: 0.0191,
        label: "Others"
      }
    ] },
    colorList: { default: () => ["#93DBFF", "#4B84F0", "#FFD982", "#00D7FF", "#49C384"] },
    innerRadius: { default: 60 },
    outRadius: { default: 84 },
    depth: { default: 15 },
    centerTooltip: { type: Boolean, default: !0 }
  },
  setup(k) {
    let M = 0;
    const o = k;
    let g = ["#93DBFF", "#4B84F0", "#FFD982", "#00D7FF", "#49C384"];
    const c = S();
    let u = null, i = null;
    const m = new r.Scene();
    let v = null;
    const G = () => {
      var t;
      if (c.value) {
        const e = ((t = c.value) == null ? void 0 : t.clientWidth) / c.value.clientHeight, a = Math.min(c.value.clientWidth, c.value.clientHeight) / 2;
        v = new r.OrthographicCamera(-a * e, a * e, a, -a, 1, 1e3), v.position.set(0, 0, 686), v.lookAt(m.position), u && m.remove(u), u = O(), I(), m.add(u), i = new r.WebGLRenderer({ canvas: c.value, antialias: !0, alpha: !0 }), i.setSize(c.value.clientWidth, c.value.clientHeight), i.setClearColor(16777215, 0), i.setPixelRatio(2), i.render(m, v);
      }
    }, O = () => {
      const t = new r.Group();
      return d.value.forEach((e, n) => {
        const a = g[n % g.length], l = o.colorList[n % o.colorList.length], f = x(e.startAngle, e.endAngle, a, "sector");
        t.add(f);
        const h = x(e.startAngle, e.endAngle, l, "bottomSector");
        h.renderOrder = 999, t.add(h);
        const p = W(e.startAngle, e.endAngle);
        t.add(p);
      }), t;
    }, P = V(() => ({
      curveSegments: 40,
      //曲线分段数，数值越高曲线越平滑
      depth: o.depth,
      bevelEnabled: !1,
      bevelSegments: 9,
      steps: 2,
      bevelSize: 0,
      bevelThickness: 0
    })), _ = (t, e, n, a) => {
      const l = new r.Shape();
      return l.moveTo(o.outRadius, 0), l.absarc(0, 0, n, t, e, !0), l.absarc(0, 0, a, e, t, !1), l;
    }, x = (t, e, n, a) => {
      const l = _(t, e, o.innerRadius, o.outRadius), f = D(P.value);
      let h = 0.9;
      a === "bottomSector" && (h = 0.6, f.depth = 1);
      const p = new r.ExtrudeGeometry(l, f), z = new r.MeshBasicMaterial({ color: n, opacity: h, transparent: !0, depthTest: !0 }), b = new r.Mesh(p, z);
      return b.position.set(0, 0, 0), b.renderOrder = 2, b.rotateX(-0.3611111111111111 * Math.PI), b;
    }, W = (t, e) => {
      const n = _(t, e, o.innerRadius + 1, o.outRadius - 1), a = D(P.value), l = new r.ExtrudeGeometry(n, a), f = new r.EdgesGeometry(l, 10), h = new r.MeshStandardMaterial({
        fog: !1,
        color: 16777215,
        emissive: 16777215,
        transparent: !0,
        opacity: 0.5,
        roughness: 0
      }), p = new r.LineSegments(f, h);
      return p.rotateX(-0.3611111111111111 * Math.PI), p.renderOrder = 4, p;
    }, H = function() {
      let t = !1;
      return o.data.length !== o.colorList.length && (console.warn("颜色和数据长度不匹配"), t = !0), t;
    }(), q = 0.3 * Math.PI * 2, s = S(0), d = S([]);
    let C = 0;
    U(() => {
      if (H)
        return !1;
      if (g = o.colorList || g, d.value = D(o.data) || [], d.value.length === 0)
        return;
      C = d.value.reduce((e, n) => typeof n.value == "number" ? e + n.value : e, 0);
      let t = q;
      d.value.forEach((e) => {
        e.startAngle = t, e.endAngle = e.startAngle - e.value / C * Math.PI * 2, t = e.endAngle;
      }), X(() => {
        G(), w();
      });
    });
    const R = S(0);
    let A = 0;
    const w = () => {
      const t = d.value.length;
      if ((s.value % 1 > 0.99 || s.value % 1 < 0.01) && A < 1) {
        R.value = Math.round(s.value) >= t ? 0 : Math.round(s.value), A += 0.01, L && (M = requestAnimationFrame(w));
        return;
      }
      A = 0, s.value += 0.01, s.value > t && (s.value = 0), I(), v && (i == null || i.render(m, v)), L && (M = requestAnimationFrame(w));
    }, I = () => {
      const t = d.value.length, e = (s.value + 1) * 10 % (t * 10) / 10;
      u == null || u.children.forEach((n, a) => {
        if (Math.floor(s.value) === Math.ceil((a - 2) / 3)) {
          const l = 1 - s.value % 1;
          n.scale.set(1, 1, 1 + l);
        }
        if (Math.floor(e) === Math.ceil((a - 2) / 3)) {
          const l = s.value % 1;
          n.scale.set(1, 1, 1 + l);
        }
      });
    };
    return J(() => {
      cancelAnimationFrame(M);
    }), (t, e) => (E(), y("div", ee, [
      F("div", te, [
        F("canvas", {
          ref_key: "pieRef",
          ref: c,
          class: "pie-canvas"
        }, null, 512),
        o.centerTooltip ? (E(!0), y(j, { key: 0 }, K(o.data, (n, a) => (E(), y("div", {
          key: n.value,
          class: "pie-info",
          style: Q({ opacity: T(R) === a ? 1 : 0 })
        }, [
          F("div", ne, B(T(Z)(n.value)), 1),
          F("div", ae, B(n.label), 1)
        ], 4))), 128)) : $("", !0)
      ]),
      Y(t.$slots, "footer", {}, void 0, !0)
    ]));
  }
});
export {
  re as default
};
