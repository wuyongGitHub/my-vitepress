import { defineComponent as ne, ref as j, onMounted as ie, onUnmounted as ae, createElementBlock as Y, openBlock as q, normalizeStyle as J, createCommentVNode as le, createElementVNode as re, unref as L } from "vue";
import { Scene as se, Color as ce, PerspectiveCamera as fe, WebGLRenderer as ue, AmbientLight as de, DirectionalLight as me, Group as he, Raycaster as ve, Vector2 as ge, InstancedBufferAttribute as R, InstancedMesh as pe, GridHelper as ye, AxesHelper as we, Vector3 as B, ShaderMaterial as xe, BoxGeometry as be } from "../../node_modules/three/build/three.module.js";
const He = ["innerHTML"], Ce = /* @__PURE__ */ ne({
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
  setup(F, { expose: U }) {
    const t = F, h = j(null), v = j({ show: !1, x: 0, y: 0, content: "" }), k = j(t.autoAnimate);
    let c, g, s, b = null, z, G, C, D = null, a = null;
    const S = [];
    let u = 0, d = 0, M;
    ie(async () => {
      K();
      const { OrbitControls: e } = await import("../../node_modules/three/examples/jsm/controls/OrbitControls.js");
      t.enableOrbit && (b = new e(g, s.domElement), b.enableDamping = !0, b.dampingFactor = 0.05), O(), window.addEventListener("mousemove", T), window.addEventListener("resize", _), h.value && h.value.addEventListener("mouseleave", () => {
        v.value.show = !1;
      });
    }), ae(() => {
      D && cancelAnimationFrame(D), window.removeEventListener("mousemove", T), window.removeEventListener("resize", _), a && (a.geometry.dispose(), a.material.dispose()), M && M.dispose(), s == null || s.dispose();
    });
    function W() {
      console.log("创建分段渐变着色器材质...");
      const e = new B(0, 0, 0.545), i = new B(0, 1, 1), n = new B(1, 1, 0), o = new B(1, 0, 0), l = new xe({
        uniforms: {
          color0: { value: e },
          color1: { value: i },
          color2: { value: n },
          color3: { value: o },
          baseSize: { value: t.baseSize },
          maxHeight: { value: t.maxHeight }
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
      return console.log("分段渐变着色器材质创建完成"), l;
    }
    function K() {
      console.log("初始化 Three.js...");
      const { backgroundColor: e, showGridHelper: i, showAxesHelper: n, cameraPosition: o, enableOrbit: l } = t;
      c = new se(), c.background = new ce(e), console.log("场景创建完成，背景色:", e), g = new fe(75, t.width / t.height, 0.1, 1e3), g.position.set(o.x, o.y, o.z), console.log("相机创建完成，位置:", o), s = new ue({
        antialias: !0,
        powerPreference: "high-performance"
      }), s.setSize(t.width, t.height), s.setPixelRatio(Math.min(window.devicePixelRatio, 2)), console.log("渲染器创建完成，尺寸:", t.width, "x", t.height), h.value && (h.value.innerHTML = "", h.value.appendChild(s.domElement), console.log("渲染器DOM添加到容器"));
      const y = new de(16777215, 0.8);
      c.add(y);
      const A = new me(16777215, 0.8);
      A.position.set(5, 10, 5), c.add(A), console.log("光源设置完成"), z = new he(), c.add(z), console.log("热力图组创建完成"), G = new ve(), C = new ge(), I(), console.log("Three.js 初始化完成");
    }
    function Q() {
      return new be(1, 1, 1, 1, 8, 1);
    }
    function I() {
      var N;
      console.log("开始创建热力图..."), a && (z.remove(a), a.geometry.dispose(), a.material.dispose(), a = null, console.log("清理旧的热力图实例")), S.length = 0;
      let e = t.data;
      Array.isArray(e) && e.length > 0 && e.every((r) => Array.isArray(r) && r.length > 0) || (console.log("使用默认测试数据"), e = [
        [1, 3, 5, 7, 9],
        [2, 4, 6, 8, 10],
        [3, 5, 7, 9, 11],
        [4, 6, 8, 10, 12],
        [5, 7, 9, 11, 13]
      ]), u = e.length, d = ((N = e[0]) == null ? void 0 : N.length) || 0, console.log(`网格尺寸: ${u} x ${d}`, "数据:", e);
      let n = 1 / 0, o = -1 / 0;
      for (let r = 0; r < u; r++) {
        const x = e[r];
        if (Array.isArray(x))
          for (let f = 0; f < d; f++) {
            const p = x[f];
            typeof p == "number" && (p < n && (n = p), p > o && (o = p));
          }
      }
      n === 1 / 0 && (n = 0), o === -1 / 0 && (o = 1), n === o && (o = n + 1), console.log(`数据范围: ${n} - ${o}`), M = W();
      const l = Q(), y = u * d, A = new Float32Array(y), P = new Float32Array(y * 3), V = new Float32Array(y * 3);
      let m = 0;
      for (let r = 0; r < u; r++) {
        const x = e[r];
        if (Array.isArray(x))
          for (let f = 0; f < d; f++) {
            const p = typeof x[f] == "number" ? x[f] : 0, $ = (p - n) / (o - n), X = 0.1 + $ * t.maxHeight;
            A[m] = $;
            const ee = (r - (u - 1) / 2) * t.baseSize, te = (f - (d - 1) / 2) * t.baseSize, oe = X / 2;
            P[m * 3] = ee, P[m * 3 + 1] = oe, P[m * 3 + 2] = te, V[m * 3] = t.baseSize, V[m * 3 + 1] = X, V[m * 3 + 2] = t.baseSize, S[m] = {
              value: p,
              x: r,
              z: f,
              normalizedValue: $
            }, m++;
          }
      }
      console.log(`创建 ${y} 个实例`), l.setAttribute("instanceValue", new R(A, 1)), l.setAttribute("instancePosition", new R(P, 3)), l.setAttribute("instanceScale", new R(V, 3)), a = new pe(l, M, y), z.add(a), Z(), console.log("热力图创建完成");
    }
    let w = null, H = null;
    function Z() {
      w && (c.remove(w), w = null), H && (c.remove(H), H = null);
      const { showGridHelper: e, showAxesHelper: i } = t;
      if (e) {
        const n = Math.max(u, d) * t.baseSize * 1.5, o = Math.max(u, d);
        w = new ye(n, o, 16777215, 8947848), w.position.y = -0.01, c.add(w);
      }
      if (i) {
        const n = Math.max(u, d) * t.baseSize * 0.8;
        H = new we(n), c.add(H);
      }
    }
    function O() {
      D = requestAnimationFrame(O), b && b.update(), s.render(c, g);
    }
    let E = null;
    function T(e) {
      if (!h.value || !a)
        return;
      const i = h.value.getBoundingClientRect();
      if (e.clientX < i.left || e.clientX > i.right || e.clientY < i.top || e.clientY < i.bottom) {
        v.value.show = !1;
        return;
      }
      E && cancelAnimationFrame(E), E = requestAnimationFrame(() => {
        C.x = (e.clientX - i.left) / i.width * 2 - 1, C.y = -((e.clientY - i.top) / i.height) * 2 + 1, G.setFromCamera(C, g);
        const n = G.intersectObject(a);
        if (n.length > 0) {
          const o = n[0].instanceId;
          if (o !== void 0 && S[o]) {
            const l = S[o];
            v.value = {
              show: !0,
              x: e.clientX - i.left + 10,
              y: e.clientY - i.top - 30,
              content: `数值: ${l.value.toFixed(2)}<br>位置: (${l.x}, ${l.z})<br>高度: ${(l.normalizedValue * 100).toFixed(1)}%`
            };
          }
        } else
          v.value.show = !1;
      });
    }
    function _() {
      !g || !s || (g.aspect = t.width / t.height, g.updateProjectionMatrix(), s.setSize(t.width, t.height));
    }
    return U({
      refresh: I,
      toggleAnimation: () => k.value = !k.value,
      updateData: (e) => {
        I();
      }
    }), (e, i) => (q(), Y("div", {
      class: "heatmap-wrapper",
      style: J({ width: F.width + "px", height: F.height + "px" })
    }, [
      L(v).show ? (q(), Y("div", {
        key: 0,
        class: "tooltip",
        style: J({ left: L(v).x + "px", top: L(v).y + "px" }),
        innerHTML: L(v).content
      }, null, 12, He)) : le("", !0),
      re("div", {
        ref_key: "containerRef",
        ref: h,
        class: "three-container"
      }, null, 512)
    ], 4));
  }
});
export {
  Ce as default
};
