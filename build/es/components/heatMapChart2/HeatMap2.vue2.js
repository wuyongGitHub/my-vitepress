import { defineComponent as ie, ref as j, onMounted as re, onUnmounted as le, createElementBlock as Y, openBlock as q, normalizeStyle as U, createCommentVNode as ne, createElementVNode as ae, unref as L } from "vue";
import { Scene as ce, Color as se, PerspectiveCamera as he, WebGLRenderer as ue, AmbientLight as fe, DirectionalLight as ge, Group as me, Raycaster as de, Vector2 as ve, InstancedBufferAttribute as R, InstancedMesh as xe, GridHelper as pe, AxesHelper as we, Vector3 as u, ShaderMaterial as ye, BoxGeometry as be } from "../../node_modules/three/build/three.module.js";
const Ae = ["innerHTML"], Se = /* @__PURE__ */ ie({
  name: "JBHeatMap3DUV",
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
  setup(B, { expose: J }) {
    const o = B, d = j(null), v = j({ show: !1, x: 0, y: 0, content: "" }), k = j(o.autoAnimate);
    let c, x, a, A = null, S, F, M, D = null, l = null;
    const P = [];
    let f = 0, g = 0, C;
    re(async () => {
      K();
      const { OrbitControls: e } = await import("../../node_modules/three/examples/jsm/controls/OrbitControls.js");
      o.enableOrbit && (A = new e(x, a.domElement), A.enableDamping = !0, A.dampingFactor = 0.05), O(), window.addEventListener("mousemove", T), window.addEventListener("resize", _), d.value && d.value.addEventListener("mouseleave", () => {
        v.value.show = !1;
      });
    }), le(() => {
      D && cancelAnimationFrame(D), window.removeEventListener("mousemove", T), window.removeEventListener("resize", _), l && (l.geometry.dispose(), l.material.dispose()), C && C.dispose(), a == null || a.dispose();
    });
    function W() {
      console.log("创建十段渐变着色器材质...");
      const e = [
        new u(0.0314, 0.1922, 0.3725),
        // #08315f 深蓝
        new u(0.2706, 0.5333, 0.7333),
        // #4588bb 蓝色
        new u(0.5216, 0.7451, 0.8902),
        // #85bee3 浅蓝色
        new u(0.7451, 0.8627, 0.9569),
        // #bedcf4 更浅的蓝色
        new u(0.8941, 0.8431, 0.8627),
        // #e4d7dc 淡紫色
        new u(0.9882, 0.8745, 0.8549),
        // #fcdfda 淡粉色
        new u(0.9765, 0.7137, 0.6353),
        // #f9b6a2 浅橙色
        new u(0.9765, 0.4706, 0.3765),
        // #f97860 橙色
        new u(0.7843, 0.0863, 0.149),
        // #c81626 红色
        new u(0.6863, 0, 0.0588)
        // #af000f 深红色
      ], i = new ye({
        uniforms: {
          color0: { value: e[0] },
          color1: { value: e[1] },
          color2: { value: e[2] },
          color3: { value: e[3] },
          color4: { value: e[4] },
          color5: { value: e[5] },
          color6: { value: e[6] },
          color7: { value: e[7] },
          color8: { value: e[8] },
          color9: { value: e[9] },
          baseSize: { value: o.baseSize },
          maxHeight: { value: o.maxHeight }
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
            uniform vec3 color4;
            uniform vec3 color5;
            uniform vec3 color6;
            uniform vec3 color7;
            uniform vec3 color8;
            uniform vec3 color9;

            varying float vValue;
            varying float vHeight;
            varying vec3 vPosition;

            vec3 getGradientColor(float value, float height) {
                // 根据数值大小决定使用多少段渐变
                if (value < 0.1) {
                    // 第一段：纯颜色
                    return color0;
                } else if (value < 0.2) {
                    // 第二段：2色渐变
                    return mix(color0, color1, height);
                } else if (value < 0.3) {
                    // 第三段：3色渐变
                    if (height < 0.5) {
                        return mix(color0, color1, height / 0.5);
                    } else {
                        return mix(color1, color2, (height - 0.5) / 0.5);
                    }
                } else if (value < 0.4) {
                    // 第四段：4色渐变
                    if (height < 0.33) {
                        return mix(color0, color1, height / 0.33);
                    } else if (height < 0.66) {
                        return mix(color1, color2, (height - 0.33) / 0.33);
                    } else {
                        return mix(color2, color3, (height - 0.66) / 0.34);
                    }
                } else if (value < 0.5) {
                    // 第五段：5色渐变
                    if (height < 0.25) {
                        return mix(color0, color1, height / 0.25);
                    } else if (height < 0.5) {
                        return mix(color1, color2, (height - 0.25) / 0.25);
                    } else if (height < 0.75) {
                        return mix(color2, color3, (height - 0.5) / 0.25);
                    } else {
                        return mix(color3, color4, (height - 0.75) / 0.25);
                    }
                } else if (value < 0.6) {
                    // 第六段：6色渐变
                    if (height < 0.2) {
                        return mix(color0, color1, height / 0.2);
                    } else if (height < 0.4) {
                        return mix(color1, color2, (height - 0.2) / 0.2);
                    } else if (height < 0.6) {
                        return mix(color2, color3, (height - 0.4) / 0.2);
                    } else if (height < 0.8) {
                        return mix(color3, color4, (height - 0.6) / 0.2);
                    } else {
                        return mix(color4, color5, (height - 0.8) / 0.2);
                    }
                } else if (value < 0.7) {
                    // 第七段：7色渐变
                    if (height < 0.1667) {
                        return mix(color0, color1, height / 0.1667);
                    } else if (height < 0.3333) {
                        return mix(color1, color2, (height - 0.1667) / 0.1667);
                    } else if (height < 0.5) {
                        return mix(color2, color3, (height - 0.3333) / 0.1667);
                    } else if (height < 0.6667) {
                        return mix(color3, color4, (height - 0.5) / 0.1667);
                    } else if (height < 0.8333) {
                        return mix(color4, color5, (height - 0.6667) / 0.1667);
                    } else {
                        return mix(color5, color6, (height - 0.8333) / 0.1667);
                    }
                } else if (value < 0.8) {
                    // 第八段：8色渐变
                    if (height < 0.1429) {
                        return mix(color0, color1, height / 0.1429);
                    } else if (height < 0.2857) {
                        return mix(color1, color2, (height - 0.1429) / 0.1429);
                    } else if (height < 0.4286) {
                        return mix(color2, color3, (height - 0.2857) / 0.1429);
                    } else if (height < 0.5714) {
                        return mix(color3, color4, (height - 0.4286) / 0.1429);
                    } else if (height < 0.7143) {
                        return mix(color4, color5, (height - 0.5714) / 0.1429);
                    } else if (height < 0.8571) {
                        return mix(color5, color6, (height - 0.7143) / 0.1429);
                    } else {
                        return mix(color6, color7, (height - 0.8571) / 0.1429);
                    }
                } else if (value < 0.9) {
                    // 第九段：9色渐变
                    if (height < 0.125) {
                        return mix(color0, color1, height / 0.125);
                    } else if (height < 0.25) {
                        return mix(color1, color2, (height - 0.125) / 0.125);
                    } else if (height < 0.375) {
                        return mix(color2, color3, (height - 0.25) / 0.125);
                    } else if (height < 0.5) {
                        return mix(color3, color4, (height - 0.375) / 0.125);
                    } else if (height < 0.625) {
                        return mix(color4, color5, (height - 0.5) / 0.125);
                    } else if (height < 0.75) {
                        return mix(color5, color6, (height - 0.625) / 0.125);
                    } else if (height < 0.875) {
                        return mix(color6, color7, (height - 0.75) / 0.125);
                    } else {
                        return mix(color7, color8, (height - 0.875) / 0.125);
                    }
                } else {
                    // 第十段：10色渐变
                    if (height < 0.1111) {
                        return mix(color0, color1, height / 0.1111);
                    } else if (height < 0.2222) {
                        return mix(color1, color2, (height - 0.1111) / 0.1111);
                    } else if (height < 0.3333) {
                        return mix(color2, color3, (height - 0.2222) / 0.1111);
                    } else if (height < 0.4444) {
                        return mix(color3, color4, (height - 0.3333) / 0.1111);
                    } else if (height < 0.5556) {
                        return mix(color4, color5, (height - 0.4444) / 0.1111);
                    } else if (height < 0.6667) {
                        return mix(color5, color6, (height - 0.5556) / 0.1111);
                    } else if (height < 0.7778) {
                        return mix(color6, color7, (height - 0.6667) / 0.1111);
                    } else if (height < 0.8889) {
                        return mix(color7, color8, (height - 0.7778) / 0.1111);
                    } else {
                        return mix(color8, color9, (height - 0.8889) / 0.1111);
                    }
                }
            }

            void main() {
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

                // 获取渐变颜色
                vec3 gradientColor = getGradientColor(vValue, vHeight);

                gl_FragColor = vec4(gradientColor * diffuse * topBrightness, 1.0);
            }
        `,
        transparent: !1
      });
      return console.log("十段渐变着色器材质创建完成"), i;
    }
    function K() {
      console.log("初始化 Three.js...");
      const { backgroundColor: e, showGridHelper: i, showAxesHelper: r, cameraPosition: t, enableOrbit: s } = o;
      c = new ce(), c.background = new se(e), console.log("场景创建完成，背景色:", e), x = new he(75, o.width / o.height, 0.1, 1e3), x.position.set(t.x, t.y, t.z), console.log("相机创建完成，位置:", t), a = new ue({
        antialias: !0,
        powerPreference: "high-performance"
      }), a.setSize(o.width, o.height), a.setPixelRatio(Math.min(window.devicePixelRatio, 2)), console.log("渲染器创建完成，尺寸:", o.width, "x", o.height), d.value && (d.value.innerHTML = "", d.value.appendChild(a.domElement), console.log("渲染器DOM添加到容器"));
      const w = new fe(16777215, 0.8);
      c.add(w);
      const H = new ge(16777215, 0.8);
      H.position.set(5, 10, 5), c.add(H), console.log("光源设置完成"), S = new me(), c.add(S), console.log("热力图组创建完成"), F = new de(), M = new ve(), I(), console.log("Three.js 初始化完成");
    }
    function Q() {
      return new be(1, 1, 1, 1, 8, 1);
    }
    function I() {
      var N;
      console.log("开始创建热力图..."), l && (S.remove(l), l.geometry.dispose(), l.material.dispose(), l = null, console.log("清理旧的热力图实例")), P.length = 0;
      let e = o.data;
      Array.isArray(e) && e.length > 0 && e.every((n) => Array.isArray(n) && n.length > 0) || (console.log("使用默认测试数据"), e = [
        [1, 3, 5, 7, 9],
        [2, 4, 6, 8, 10],
        [3, 5, 7, 9, 11],
        [4, 6, 8, 10, 12],
        [5, 7, 9, 11, 13]
      ]), f = e.length, g = ((N = e[0]) == null ? void 0 : N.length) || 0, console.log(`网格尺寸: ${f} x ${g}`, "数据:", e);
      let r = 1 / 0, t = -1 / 0;
      for (let n = 0; n < f; n++) {
        const b = e[n];
        if (Array.isArray(b))
          for (let h = 0; h < g; h++) {
            const p = b[h];
            typeof p == "number" && (p < r && (r = p), p > t && (t = p));
          }
      }
      r === 1 / 0 && (r = 0), t === -1 / 0 && (t = 1), r === t && (t = r + 1), console.log(`数据范围: ${r} - ${t}`), C = W();
      const s = Q(), w = f * g, H = new Float32Array(w), V = new Float32Array(w * 3), G = new Float32Array(w * 3);
      let m = 0;
      for (let n = 0; n < f; n++) {
        const b = e[n];
        if (Array.isArray(b))
          for (let h = 0; h < g; h++) {
            const p = typeof b[h] == "number" ? b[h] : 0, $ = (p - r) / (t - r), X = 0.1 + $ * o.maxHeight;
            H[m] = $;
            const ee = (n - (f - 1) / 2) * o.baseSize, oe = (h - (g - 1) / 2) * o.baseSize, te = X / 2;
            V[m * 3] = ee, V[m * 3 + 1] = te, V[m * 3 + 2] = oe, G[m * 3] = o.baseSize, G[m * 3 + 1] = X, G[m * 3 + 2] = o.baseSize, P[m] = {
              value: p,
              x: n,
              z: h,
              normalizedValue: $
            }, m++;
          }
      }
      console.log(`创建 ${w} 个实例`), s.setAttribute("instanceValue", new R(H, 1)), s.setAttribute("instancePosition", new R(V, 3)), s.setAttribute("instanceScale", new R(G, 3)), l = new xe(s, C, w), S.add(l), Z(), console.log("热力图创建完成");
    }
    let y = null, z = null;
    function Z() {
      y && (c.remove(y), y = null), z && (c.remove(z), z = null);
      const { showGridHelper: e, showAxesHelper: i } = o;
      if (e) {
        const r = Math.max(f, g) * o.baseSize * 1.5, t = Math.max(f, g);
        y = new pe(r, t, 16777215, 8947848), y.position.y = -0.01, c.add(y);
      }
      if (i) {
        const r = Math.max(f, g) * o.baseSize * 0.8;
        z = new we(r), c.add(z);
      }
    }
    function O() {
      D = requestAnimationFrame(O), A && A.update(), a.render(c, x);
    }
    let E = null;
    function T(e) {
      if (!d.value || !l)
        return;
      const i = d.value.getBoundingClientRect();
      if (e.clientX < i.left || e.clientX > i.right || e.clientY < i.top || e.clientY < i.bottom) {
        v.value.show = !1;
        return;
      }
      E && cancelAnimationFrame(E), E = requestAnimationFrame(() => {
        M.x = (e.clientX - i.left) / i.width * 2 - 1, M.y = -((e.clientY - i.top) / i.height) * 2 + 1, F.setFromCamera(M, x);
        const r = F.intersectObject(l);
        if (r.length > 0) {
          const t = r[0].instanceId;
          if (t !== void 0 && P[t]) {
            const s = P[t];
            v.value = {
              show: !0,
              x: e.clientX - i.left + 10,
              y: e.clientY - i.top - 30,
              content: `数值: ${s.value.toFixed(2)}<br>位置: (${s.x}, ${s.z})<br>高度: ${(s.normalizedValue * 100).toFixed(1)}%`
            };
          }
        } else
          v.value.show = !1;
      });
    }
    function _() {
      !x || !a || (x.aspect = o.width / o.height, x.updateProjectionMatrix(), a.setSize(o.width, o.height));
    }
    return J({
      refresh: I,
      toggleAnimation: () => k.value = !k.value,
      updateData: (e) => {
        I();
      }
    }), (e, i) => (q(), Y("div", {
      class: "heatmap-wrapper",
      style: U({ width: B.width + "px", height: B.height + "px" })
    }, [
      L(v).show ? (q(), Y("div", {
        key: 0,
        class: "tooltip",
        style: U({ left: L(v).x + "px", top: L(v).y + "px" }),
        innerHTML: L(v).content
      }, null, 12, Ae)) : ne("", !0),
      ae("div", {
        ref_key: "containerRef",
        ref: d,
        class: "three-container"
      }, null, 512)
    ], 4));
  }
});
export {
  Se as default
};
