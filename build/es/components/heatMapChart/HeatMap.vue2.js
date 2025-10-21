import { defineComponent as ne, ref as V, onMounted as ae, onUnmounted as oe, createElementBlock as P, openBlock as T, normalizeStyle as X, createCommentVNode as re, createElementVNode as ie, unref as E } from "vue";
import { Scene as le, Color as v, PerspectiveCamera as se, WebGLRenderer as ce, AmbientLight as fe, DirectionalLight as ue, Group as de, GridHelper as me, AxesHelper as pe, Object3D as he, Raycaster as ye, Vector2 as we, BoxGeometry as ge, BufferAttribute as be, MeshBasicMaterial as xe, Mesh as $ } from "../../node_modules/three/build/three.module.js";
const Ae = ["innerHTML"], Me = /* @__PURE__ */ ne({
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
  setup(S, { expose: q }) {
    const a = S, x = V(null), h = V({ show: !1, x: 0, y: 0, content: "" }), B = V(a.autoAnimate);
    let y, A, w, g = null, b, D, M, L = null, d = [], m = 0, p = 0;
    ae(async () => {
      const { OrbitControls: t } = await import("../../node_modules/three/examples/jsm/controls/OrbitControls.js");
      J(), a.enableOrbit && (g = new t(A, w.domElement), g.enableDamping = !0, g.dampingFactor = 0.05), R(), window.addEventListener("mousemove", Y), window.addEventListener("resize", I), x.value && x.value.addEventListener("mouseleave", () => {
        h.value.show = !1;
      });
    }), oe(() => {
      L && cancelAnimationFrame(L), window.removeEventListener("mousemove", Y), window.removeEventListener("resize", I), w.dispose();
    });
    function J() {
      const { backgroundColor: t, showGridHelper: e, showAxesHelper: i, cameraPosition: l } = a;
      y = new le(), y.background = new v(t), A = new se(75, a.width / a.height, 0.1, 1e3), A.position.set(l.x, l.y, l.z), w = new ce({ antialias: !0 }), w.setSize(a.width, a.height), w.shadowMap.enabled = !0, x.value && x.value.appendChild(w.domElement), a.enableOrbit && g && (g.enableDamping = !0, g.dampingFactor = 0.05), y.add(new fe(16777215, 0.6));
      const o = new ue(16777215, 0.8);
      if (o.position.set(10, 20, 5), y.add(o), b = new de(), y.add(b), e) {
        const f = Math.max(m, p) * a.baseSize * 1.2, r = new me(f, Math.max(m, p), 4473924, 2236962);
        y.add(r);
      }
      if (i) {
        const f = new pe(Math.max(m, p) * a.baseSize * 0.6);
        y.add(f);
      }
      D = new ye(), M = new we(), N();
    }
    function U(t = 10, e = 10) {
      return Array.from({ length: t }, () => Array.from({ length: e }, () => Math.random() * 15 + 1));
    }
    function W(t, e, i, l, o, f) {
      const r = 0.1 + (i - l) / (o - l) * a.maxHeight, c = new ge(a.baseSize, r, a.baseSize, 1, 8, 1), G = c.attributes.position, j = c.attributes.normal, _ = [], k = (i - l) / (o - l), z = [
        new v(139),
        // 深蓝
        new v(65535),
        // 青
        new v(16776960),
        // 黄
        new v(16711680)
        // 红
      ];
      let n = [];
      k >= 0.75 ? n = [...z] : k >= 0.5 ? n = z.slice(0, 3) : k >= 0.25 ? n = z.slice(0, 2) : n = z.slice(0, 1);
      for (let H = 0; H < G.count; H++) {
        const ee = G.getY(H), te = j.getY(H);
        let s = new v();
        const u = (ee + r / 2) / r;
        te > 0.5 ? s.copy(n[n.length - 1]) : n.length === 4 ? u < 0.25 ? s.lerpColors(n[0], n[1], u / 0.25) : u < 0.5 ? s.lerpColors(n[1], n[2], (u - 0.25) / 0.25) : u < 0.75 ? s.lerpColors(n[2], n[3], (u - 0.5) / 0.25) : s.copy(n[3]) : n.length === 3 ? u < 0.33 ? s.lerpColors(n[0], n[1], u / 0.33) : u < 0.66 ? s.lerpColors(n[1], n[2], (u - 0.33) / 0.33) : s.copy(n[2]) : n.length === 2 ? u < 0.5 ? s.lerpColors(n[0], n[1], u / 0.5) : s.copy(n[1]) : s.copy(n[0]), _.push(s.r, s.g, s.b);
      }
      c.setAttribute("color", new be(new Float32Array(_), 3));
      const Z = new xe({ vertexColors: !0 }), O = new $(c, Z);
      return O.position.set((t - (m - 1) / 2) * a.baseSize, r / 2, (e - (p - 1) / 2) * a.baseSize), O.userData = { value: i, x: t, z: e }, O;
    }
    let C = null;
    new he();
    function K() {
      if (C)
        C.geometry.dispose(), C.material.dispose(), b.remove(C), C = null;
      else {
        const { children: t } = b;
        t.forEach((e) => {
          e instanceof $ && (e.geometry.dispose(), (Array.isArray(e.material) ? e.material : [e.material]).forEach((l) => l.dispose()));
        }), b.clear();
      }
    }
    function N() {
      var l;
      if (K(), console.log("createHeatmap 调用，props.data =", a.data), Array.isArray(a.data) && a.data.length > 0 && a.data.every((o) => Array.isArray(o)) ? d = a.data : (console.log("数据不合法，使用默认数据"), d = U()), b.clear(), m = d.length, p = ((l = d[0]) == null ? void 0 : l.length) || 0, m === 0 || p === 0) {
        console.warn("数据为空，无法创建热力图");
        return;
      }
      let e = 1 / 0, i = -1 / 0;
      for (let o = 0; o < m; o++) {
        const f = d[o];
        if (Array.isArray(f))
          for (let r = 0; r < p; r++) {
            const c = f[r];
            typeof c == "number" && (c < e && (e = c), c > i && (i = c));
          }
      }
      e === 1 / 0 && (e = 0), i === -1 / 0 && (i = 0);
      for (let o = 0; o < m; o++) {
        const f = d[o];
        if (Array.isArray(f))
          for (let r = 0; r < p; r++) {
            const c = f[r], j = W(o, r, typeof c == "number" ? c : 0, e, i);
            b.add(j);
          }
      }
    }
    function R() {
      L = requestAnimationFrame(R), B.value && Q(), g && g.update(), w.render(y, A);
    }
    function Q() {
      for (let t = 0; t < m; t++)
        for (let e = 0; e < p; e++)
          d[t] && typeof d[t][e] == "number" && (d[t][e] += (Math.random() - 0.5) * 0.3, d[t][e] = Math.min(20, Math.max(1, d[t][e])));
    }
    let F = null;
    function Y(t) {
      if (!x.value)
        return;
      const e = x.value.getBoundingClientRect();
      if (t.clientX < e.left || t.clientX > e.right || t.clientY < e.top || t.clientY > e.bottom) {
        h.value.show = !1;
        return;
      }
      F && cancelAnimationFrame(F), F = requestAnimationFrame(() => {
        M.x = (t.clientX - e.left) / e.width * 2 - 1, M.y = -((t.clientY - e.top) / e.height) * 2 + 1, D.setFromCamera(M, A);
        const i = D.intersectObjects(b.children);
        if (i.length) {
          const l = i[0].object, { value: o, x: f, z: r } = l.userData;
          h.value = {
            show: !0,
            x: t.clientX - e.left + 10,
            y: t.clientY - e.top - 30,
            content: `数值: ${o.toFixed(2)}<br>位置: (${f}, ${r})`
          };
        } else
          h.value.show = !1;
      });
    }
    function I() {
      A.aspect = a.width / a.height, A.updateProjectionMatrix(), w.setSize(a.width, a.height);
    }
    return q({
      refresh: N,
      toggleAnimation: () => B.value = !B.value
    }), (t, e) => (T(), P("div", {
      class: "heatmap-wrapper",
      style: X({ width: S.width + "px", height: S.height + "px" })
    }, [
      E(h).show ? (T(), P("div", {
        key: 0,
        class: "tooltip",
        style: X({ left: E(h).x + "px", top: E(h).y + "px" }),
        innerHTML: E(h).content
      }, null, 12, Ae)) : re("", !0),
      ie("div", {
        ref_key: "containerRef",
        ref: x,
        class: "three-container"
      }, null, 512)
    ], 4));
  }
});
export {
  Me as default
};
