import { defineComponent as re, ref as D, onMounted as le, onUnmounted as se, createElementBlock as J, openBlock as U, normalizeStyle as W, createCommentVNode as ce, createElementVNode as ue, unref as F } from "vue";
import { Scene as fe, Color as f, PerspectiveCamera as de, WebGLRenderer as me, AmbientLight as pe, DirectionalLight as he, Group as we, GridHelper as ye, AxesHelper as ge, Object3D as be, Raycaster as Ae, Vector2 as xe, BoxGeometry as ve, BufferAttribute as Me, MeshBasicMaterial as Ce, Mesh as K } from "../../node_modules/three/build/three.module.js";
const ze = ["innerHTML"], Be = /* @__PURE__ */ re({
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
    isStandardColor: { type: Boolean, default: !0 },
    rotateAnimation: { type: Boolean, default: !1 },
    // 是否启用旋转动画
    rotationSpeed: { type: Number, default: 0.01 },
    // 旋转速度，可由外部传入
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
  setup(G, { expose: Q }) {
    const I = D(0), t = G, v = D(null), w = D({ show: !1, x: 0, y: 0, content: "" }), R = D(t.autoAnimate);
    let y, M, g, b = null, m, j, E, k = null, z = [], A = 0, x = 0;
    le(async () => {
      const { OrbitControls: n } = await import("../../node_modules/three/examples/jsm/controls/OrbitControls.js");
      Z(), t.enableOrbit && (b = new n(M, g.domElement), b.enableDamping = !0, b.dampingFactor = 0.05), _(), window.addEventListener("mousemove", P), window.addEventListener("resize", X), v.value && v.value.addEventListener("mouseleave", () => {
        w.value.show = !1;
      });
    }), se(() => {
      k && cancelAnimationFrame(k), window.removeEventListener("mousemove", P), window.removeEventListener("resize", X), g.dispose();
    });
    function Z() {
      const { backgroundColor: n, showGridHelper: e, showAxesHelper: r, cameraPosition: l } = t;
      y = new fe(), y.background = new f(n), M = new de(75, t.width / t.height, 0.1, 1e3), M.position.set(l.x, l.y, l.z), g = new me({ antialias: !0 }), g.setSize(t.width, t.height), g.shadowMap.enabled = !0, v.value && v.value.appendChild(g.domElement), t.enableOrbit && b && (b.enableDamping = !0, b.dampingFactor = 0.05), y.add(new pe(16777215, 0.6));
      const a = new he(16777215, 0.8);
      if (a.position.set(10, 20, 5), y.add(a), m = new we(), y.add(m), e) {
        const u = Math.max(A, x) * t.baseSize * 1.2, o = new ye(u, Math.max(A, x), 4473924, 2236962);
        y.add(o);
      }
      if (r) {
        const u = new ge(Math.max(A, x) * t.baseSize * 0.6);
        y.add(u);
      }
      j = new Ae(), E = new xe(), T();
    }
    function ee(n = 10, e = 10) {
      return Array.from({ length: n }, () => Array.from({ length: e }, () => Math.random() * 15 + 1));
    }
    function Y(n, e, r, l, a, u) {
      const o = 0.1 + (r - l) / (a - l) * t.maxHeight, s = new ve(t.baseSize, o, t.baseSize, 1, 8, 1), H = s.attributes.position, B = s.attributes.normal, $ = [], p = (r - l) / (a - l), d = [
        new f(536927),
        // 深蓝色
        new f(4556987),
        // 蓝色
        new f(8765155),
        // 浅蓝色
        new f(12508404),
        // 更浅的蓝色
        new f(14997468),
        // 淡紫色
        new f(16572378),
        // 淡粉色
        new f(16365218),
        // 浅橙色
        new f(16349280),
        // 橙色
        new f(13112870),
        // 红色
        new f(11468815)
        // 深红色
      ];
      let i = [], c = 0;
      p >= 0.9 ? (c = 10, i = d.slice(0, 10)) : p >= 0.8 ? (c = 9, i = d.slice(0, 9)) : p >= 0.7 ? (c = 8, i = d.slice(0, 8)) : p >= 0.6 ? (c = 7, i = d.slice(0, 7)) : p >= 0.5 ? (c = 6, i = d.slice(0, 6)) : p >= 0.4 ? (c = 5, i = d.slice(0, 5)) : p >= 0.3 ? (c = 4, i = d.slice(0, 4)) : p >= 0.2 ? (c = 3, i = d.slice(0, 3)) : p >= 0.1 ? (c = 2, i = d.slice(0, 2)) : (c = 1, i = d.slice(0, 1));
      for (let L = 0; L < H.count; L++) {
        const ae = H.getY(L), oe = B.getY(L);
        let C = new f();
        const q = Math.max(0, Math.min(1, (ae + o / 2) / o));
        if (oe > 0.5)
          C.copy(i[i.length - 1]);
        else if (c === 1)
          C.copy(i[0]);
        else {
          const V = 1 / (c - 1);
          let h = Math.floor(q / V);
          h = Math.min(h, c - 2), h = Math.max(0, h);
          const ie = (q - h * V) / V;
          h >= 0 && h + 1 < i.length ? C.lerpColors(i[h], i[h + 1], ie) : C.copy(i[i.length - 1]);
        }
        $.push(C.r, C.g, C.b);
      }
      s.setAttribute("color", new Me(new Float32Array($), 3));
      const ne = new Ce({ vertexColors: !0 }), O = new K(s, ne);
      return O.position.set((n - (A - 1) / 2) * t.baseSize, o / 2, (e - (x - 1) / 2) * t.baseSize), O.userData = { value: r, x: n, z: e }, O;
    }
    let S = null;
    new be();
    function te() {
      if (S)
        S.geometry.dispose(), S.material.dispose(), m.remove(S), S = null;
      else {
        const { children: n } = m;
        n.forEach((e) => {
          e instanceof K && (e.geometry.dispose(), (Array.isArray(e.material) ? e.material : [e.material]).forEach((l) => l.dispose()));
        }), m.clear();
      }
    }
    function T() {
      var l;
      if (te(), Array.isArray(t.data) && t.data.length > 0 && t.data.every((a) => Array.isArray(a)) ? z = t.data.map((a) => [...a]) : (console.log("数据不合法，使用默认数据"), z = ee()), m.clear(), A = z.length, x = ((l = z[0]) == null ? void 0 : l.length) || 0, A === 0 || x === 0) {
        console.warn("数据为空，无法创建热力图");
        return;
      }
      let e = 1 / 0, r = -1 / 0;
      for (let a = 0; a < A; a++) {
        const u = z[a];
        if (Array.isArray(u))
          for (let o = 0; o < x; o++) {
            const s = u[o];
            typeof s == "number" && (s < e && (e = s), s > r && (r = s));
          }
      }
      e === 1 / 0 && (e = 0), r === -1 / 0 && (r = 0);
      for (let a = 0; a < A; a++) {
        const u = z[a];
        if (Array.isArray(u))
          for (let o = 0; o < x; o++) {
            const s = u[o], H = typeof s == "number" ? s : 0;
            let B = null;
            t.isStandardColor, B = Y(a, o, H, e, r), m.add(B);
          }
      }
    }
    function _() {
      k = requestAnimationFrame(_), t.rotateAnimation && (I.value += t.rotationSpeed, m.rotation.y = I.value), b && b.update(), g.render(y, M);
    }
    let N = null;
    function P(n) {
      if (!v.value)
        return;
      const e = v.value.getBoundingClientRect();
      if (n.clientX < e.left || n.clientX > e.right || n.clientY < e.top || n.clientY > e.bottom) {
        w.value.show = !1;
        return;
      }
      N && cancelAnimationFrame(N), N = requestAnimationFrame(() => {
        E.x = (n.clientX - e.left) / e.width * 2 - 1, E.y = -((n.clientY - e.top) / e.height) * 2 + 1, j.setFromCamera(E, M);
        const r = j.intersectObjects(m.children);
        if (r.length) {
          const l = r[0].object, { value: a, x: u, z: o } = l.userData;
          w.value = {
            show: !0,
            x: n.clientX - e.left + 10,
            y: n.clientY - e.top - 30,
            content: `数值: ${a.toFixed(2)}<br>位置: (${u}, ${o})`
          };
        } else
          w.value.show = !1;
      });
    }
    function X() {
      M.aspect = t.width / t.height, M.updateProjectionMatrix(), g.setSize(t.width, t.height);
    }
    return Q({
      refresh: T,
      toggleAnimation: () => R.value = !R.value
    }), (n, e) => (U(), J("div", {
      class: "heatmap-wrapper",
      style: W({ width: G.width + "px", height: G.height + "px" })
    }, [
      F(w).show ? (U(), J("div", {
        key: 0,
        class: "tooltip",
        style: W({ left: F(w).x + "px", top: F(w).y + "px" }),
        innerHTML: F(w).content
      }, null, 12, ze)) : ce("", !0),
      ue("div", {
        ref_key: "containerRef",
        ref: v,
        class: "three-container"
      }, null, 512)
    ], 4));
  }
});
export {
  Be as default
};
