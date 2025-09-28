import { defineComponent as z, ref as g, computed as Z, watchEffect as Ne, nextTick as ge, onUnmounted as pe, createElementBlock as W, openBlock as F, createElementVNode as P, renderSlot as V, createCommentVNode as Ce, Fragment as ue, renderList as ce, normalizeStyle as G, unref as r, toDisplayString as de, resolveDirective as ke, withDirectives as Me, toRefs as se, useAttrs as Te, watch as ee, onMounted as te, createBlock as ye, mergeProps as J, withCtx as E, createVNode as M, createTextVNode as T, isRef as Fe, resolveComponent as fe, normalizeClass as be, shallowRef as _e, reactive as ae, useSlots as we, normalizeProps as oe, guardReactiveProps as Se } from "vue";
import * as q from "three";
import { Select as Ee, Divider as We, Checkbox as qe, Spin as De } from "ant-design-vue";
const j = (a) => (a.install = (o) => {
  const e = a.name;
  e && o.component(e, a);
}, a);
function Pe(a, o = 1, e = "normal") {
  if (!a && a !== 0)
    return a;
  o < 0 && (o = 0);
  const n = Number(a);
  let l = (n * 100).toFixed(o) + "%";
  return l !== "0.00" && e === "yoy" && n > 0 && (l = "+" + l), l;
}
const re = (a, o = []) => {
  if (a === null || typeof a != "object")
    return a;
  if (Object.prototype.toString.call(a) === "[object Date]")
    return new Date(a);
  if (Object.prototype.toString.call(a) === "[object RegExp]")
    return new RegExp(a);
  if (Object.prototype.toString.call(a) === "[object Error]")
    return new Error(a);
  const e = o.filter((l) => l.origin === a)[0];
  if (e)
    return e.newObj;
  const n = Array.isArray(a) ? [] : {};
  return o.push({
    origin: a,
    newObj: n
  }), Object.keys(a).forEach((l) => {
    typeof a[l] == "object" ? n[l] = re(a[l], o) : n[l] = a[l];
  }), n;
}, ve = typeof window < "u";
function ze(a, o) {
  let e;
  return function(...n) {
    clearTimeout(e), e = setTimeout(() => {
      a(...n);
    }, o);
  };
}
const He = { class: "three-pie-container" }, Le = { class: "three-pie-main" }, $e = { class: "pie-value" }, Ie = { class: "pie-label" }, Ve = /* @__PURE__ */ z({
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
  setup(a) {
    let o = 0;
    const e = a;
    let n = ["#93DBFF", "#4B84F0", "#FFD982", "#00D7FF", "#49C384"];
    const l = g();
    let i = null, d = null;
    const m = new q.Scene();
    let c = null;
    const N = () => {
      var h;
      if (l.value) {
        const f = ((h = l.value) == null ? void 0 : h.clientWidth) / l.value.clientHeight, A = Math.min(l.value.clientWidth, l.value.clientHeight) / 2;
        c = new q.OrthographicCamera(-A * f, A * f, A, -A, 1, 1e3), c.position.set(0, 0, 686), c.lookAt(m.position), i && m.remove(i), i = R(), U(), m.add(i), d = new q.WebGLRenderer({ canvas: l.value, antialias: !0, alpha: !0 }), d.setSize(l.value.clientWidth, l.value.clientHeight), d.setClearColor(16777215, 0), d.setPixelRatio(2), d.render(m, c);
      }
    }, R = () => {
      const h = new q.Group();
      return y.value.forEach((f, x) => {
        const A = n[x % n.length], C = e.colorList[x % e.colorList.length], X = w(f.startAngle, f.endAngle, A, "sector");
        h.add(X);
        const D = w(f.startAngle, f.endAngle, C, "bottomSector");
        D.renderOrder = 999, h.add(D);
        const L = _(f.startAngle, f.endAngle);
        h.add(L);
      }), h;
    }, s = Z(() => ({
      curveSegments: 40,
      //曲线分段数，数值越高曲线越平滑
      depth: e.depth,
      bevelEnabled: !1,
      bevelSegments: 9,
      steps: 2,
      bevelSize: 0,
      bevelThickness: 0
    })), p = (h, f, x, A) => {
      const C = new q.Shape();
      return C.moveTo(e.outRadius, 0), C.absarc(0, 0, x, h, f, !0), C.absarc(0, 0, A, f, h, !1), C;
    }, w = (h, f, x, A) => {
      const C = p(h, f, e.innerRadius, e.outRadius), X = re(s.value);
      let D = 0.9;
      A === "bottomSector" && (D = 0.6, X.depth = 1);
      const L = new q.ExtrudeGeometry(C, X), ne = new q.MeshBasicMaterial({ color: x, opacity: D, transparent: !0, depthTest: !0 }), $ = new q.Mesh(L, ne);
      return $.position.set(0, 0, 0), $.renderOrder = 2, $.rotateX(-0.3611111111111111 * Math.PI), $;
    }, _ = (h, f) => {
      const x = p(h, f, e.innerRadius + 1, e.outRadius - 1), A = re(s.value), C = new q.ExtrudeGeometry(x, A), X = new q.EdgesGeometry(C, 10), D = new q.MeshStandardMaterial({
        fog: !1,
        color: 16777215,
        emissive: 16777215,
        transparent: !0,
        opacity: 0.5,
        roughness: 0
      }), L = new q.LineSegments(X, D);
      return L.rotateX(-0.3611111111111111 * Math.PI), L.renderOrder = 4, L;
    }, b = function() {
      let h = !1;
      return e.data.length !== e.colorList.length && (console.warn("颜色和数据长度不匹配"), h = !0), h;
    }(), v = 0.3 * Math.PI * 2, u = g(0), y = g([]);
    let O = 0;
    Ne(() => {
      if (b)
        return !1;
      if (n = e.colorList || n, y.value = re(e.data) || [], y.value.length === 0)
        return;
      O = y.value.reduce((f, x) => typeof x.value == "number" ? f + x.value : f, 0);
      let h = v;
      y.value.forEach((f) => {
        f.startAngle = h, f.endAngle = f.startAngle - f.value / O * Math.PI * 2, h = f.endAngle;
      }), ge(() => {
        N(), Y();
      });
    });
    const H = g(0);
    let S = 0;
    const Y = () => {
      const h = y.value.length;
      if ((u.value % 1 > 0.99 || u.value % 1 < 0.01) && S < 1) {
        H.value = Math.round(u.value) >= h ? 0 : Math.round(u.value), S += 0.01, ve && (o = requestAnimationFrame(Y));
        return;
      }
      S = 0, u.value += 0.01, u.value > h && (u.value = 0), U(), c && (d == null || d.render(m, c)), ve && (o = requestAnimationFrame(Y));
    }, U = () => {
      const h = y.value.length, f = (u.value + 1) * 10 % (h * 10) / 10;
      i == null || i.children.forEach((x, A) => {
        if (Math.floor(u.value) === Math.ceil((A - 2) / 3)) {
          const C = 1 - u.value % 1;
          x.scale.set(1, 1, 1 + C);
        }
        if (Math.floor(f) === Math.ceil((A - 2) / 3)) {
          const C = u.value % 1;
          x.scale.set(1, 1, 1 + C);
        }
      });
    };
    return pe(() => {
      cancelAnimationFrame(o);
    }), (h, f) => (F(), W("div", He, [
      P("div", Le, [
        P("canvas", {
          ref_key: "pieRef",
          ref: l,
          class: "pie-canvas"
        }, null, 512),
        e.centerTooltip ? (F(!0), W(ue, { key: 0 }, ce(e.data, (x, A) => (F(), W("div", {
          key: x.value,
          class: "pie-info",
          style: G({ opacity: r(H) === A ? 1 : 0 })
        }, [
          P("div", $e, de(r(Pe)(x.value)), 1),
          P("div", Ie, de(x.label), 1)
        ], 4))), 128)) : Ce("", !0)
      ]),
      V(h.$slots, "footer", {}, void 0, !0)
    ]));
  }
}), ie = (a, o) => {
  const e = a.__vccOpts || a;
  for (const [n, l] of o)
    e[n] = l;
  return e;
}, je = /* @__PURE__ */ ie(Ve, [["__scopeId", "data-v-8911537c"]]), Ye = j(je), Xe = /* @__PURE__ */ z({
  name: "BqScaleBox",
  __name: "ScaleBox",
  props: {
    width: { default: 1920 },
    height: { default: 1080 }
  },
  setup(a) {
    const o = a, e = g(0), n = g(), l = () => {
      const { width: d, height: m } = se(o), { clientWidth: c, clientHeight: N } = n.value, R = N / m.value, s = c / d.value;
      return s < R ? s : R;
    }, i = () => {
      console.log("执行了"), e.value = l();
    };
    return (d, m) => {
      const c = ke("dom-resize");
      return Me((F(), W("div", {
        class: "bq-scale-box",
        ref_key: "scaleContainer",
        ref: n
      }, [
        P("div", {
          class: "scale-box",
          ref: "ScaleBox",
          style: G({
            "--scale": r(e),
            width: o.width + "px",
            height: o.height + "px"
          })
        }, [
          V(d.$slots, "default")
        ], 4)
      ])), [
        [c, i]
      ]);
    };
  }
}), Ue = j(Xe), Ge = /* @__PURE__ */ z({
  name: "BqSelectAll",
  __name: "SelectAll",
  emits: ["change", "search", "blur"],
  setup(a, { emit: o }) {
    const e = o, n = Te(), l = g([]), i = g([]);
    let d = !1;
    const m = z({
      props: {
        vnodes: {
          type: Object,
          required: !0
        }
      },
      render() {
        return this.vnodes;
      }
    }), c = (v, u) => {
      l.value.length === 0 && (l.value = n.options ?? []), i.value = v, e("change", v, u);
    }, N = (v) => {
      v.stopPropagation(), v.preventDefault();
    }, R = (v) => {
      let u = [];
      u = [...l.value];
      const y = [...i.value];
      n["onUpdate:value"] || console.warn("v-model:value 不存在");
      let O = v.target.checked ? (u ?? []).map((S) => S.value) : [];
      if (v.target.checked) {
        if (n.options && n.options.length > 0)
          for (let S = 0; S < O.length; S++)
            y.includes(O[S]) || y.push(O[S]);
      } else {
        for (let S = 0; S < y.length; S++)
          l.value.includes(y[S]) || (y.splice(S, 1), S--);
        n["onUpdate:value"] && n["onUpdate:value"]([]), c([], []);
      }
      O = y, i.value = [...y];
      let H = v.target.checked ? u : [];
      n["onUpdate:value"] && n["onUpdate:value"](O), c(O, H);
    }, s = (v) => {
      var u;
      if (n.filterOption && n.filterOption instanceof Function) {
        let y = (u = n.options) == null ? void 0 : u.filter((O) => n.filterOption instanceof Function && n.filterOption(v, O));
        l.value = y ?? [];
      } else
        console.warn("请传入filterOption方法");
      e("search", v);
    }, p = (v) => {
      l.value = n.options ?? [], e("blur", v);
    }, w = Z(() => i.value.length === 0 ? !1 : (l.value ?? []).map((u) => u.value).every((u) => (i.value ?? []).includes(u))), _ = Z(() => Array.isArray(n.value) && (n.value ?? []).length === 0 ? !1 : !w.value), b = Z(() => (l ?? []).value.length === 0 ? !1 : w.value);
    return ee(
      () => n.options,
      () => {
        !d && (n.options ?? []).length > 0 && (l.value = n.options ?? [], d = !d);
      },
      { deep: !0, immediate: !0 }
    ), te(() => {
      i.value = n.value ?? [];
    }), (v, u) => (F(), ye(r(Ee), J(v.$attrs, {
      autoClearSearchValue: !1,
      mode: "multiple",
      onBlur: p,
      onSearch: s,
      onChange: c
    }), {
      dropdownRender: E(({ menuNode: y }) => [
        M(r(m), { vnodes: y }, null, 8, ["vnodes"]),
        M(r(We), { style: { margin: "4px 0" } }),
        P("div", {
          style: { "padding-left": "11px" },
          onMousedown: N
        }, [
          M(r(qe), {
            disabled: r(l).length === 0,
            indeterminate: r(_),
            checked: r(b),
            "onUpdate:checked": u[0] || (u[0] = (O) => Fe(b) ? b.value = O : null),
            onChange: R
          }, null, 8, ["disabled", "indeterminate", "checked"]),
          u[1] || (u[1] = T(" 全选 ", -1))
        ], 32)
      ]),
      _: 1
    }, 16));
  }
}), Ze = j(Ge), Je = { class: "bq-button" }, Ke = /* @__PURE__ */ z({
  name: "BqButton",
  __name: "Button",
  setup(a) {
    return (o, e) => {
      const n = fe("el-button"), l = fe("a-button");
      return F(), W("div", Je, [
        e[12] || (e[12] = P("span", null, "-测试按钮-6", -1)),
        e[13] || (e[13] = T(" ----------------------------- ", -1)),
        M(n, null, {
          default: E(() => [...e[0] || (e[0] = [
            T("Default", -1)
          ])]),
          _: 1
        }),
        M(n, { type: "primary" }, {
          default: E(() => [...e[1] || (e[1] = [
            T("Primary", -1)
          ])]),
          _: 1
        }),
        M(n, { type: "success" }, {
          default: E(() => [...e[2] || (e[2] = [
            T("Success", -1)
          ])]),
          _: 1
        }),
        M(n, { type: "info" }, {
          default: E(() => [...e[3] || (e[3] = [
            T("Info", -1)
          ])]),
          _: 1
        }),
        M(n, { type: "warning" }, {
          default: E(() => [...e[4] || (e[4] = [
            T("Warning", -1)
          ])]),
          _: 1
        }),
        M(n, { type: "danger" }, {
          default: E(() => [...e[5] || (e[5] = [
            T("Danger", -1)
          ])]),
          _: 1
        }),
        M(n, null, {
          default: E(() => [...e[6] || (e[6] = [
            T("中文", -1)
          ])]),
          _: 1
        }),
        e[14] || (e[14] = T(" ----------------------------- ", -1)),
        M(l, { type: "primary" }, {
          default: E(() => [...e[7] || (e[7] = [
            T("Primary", -1)
          ])]),
          _: 1
        }),
        M(l, null, {
          default: E(() => [...e[8] || (e[8] = [
            T("Secondary", -1)
          ])]),
          _: 1
        }),
        M(l, { type: "dashed" }, {
          default: E(() => [...e[9] || (e[9] = [
            T("Dashed", -1)
          ])]),
          _: 1
        }),
        M(l, { type: "outline" }, {
          default: E(() => [...e[10] || (e[10] = [
            T("Outline", -1)
          ])]),
          _: 1
        }),
        M(l, { type: "text" }, {
          default: E(() => [...e[11] || (e[11] = [
            T("Text", -1)
          ])]),
          _: 1
        })
      ]);
    };
  }
}), Qe = j(Ke), et = /* @__PURE__ */ z({
  name: "BqNumberAnimate",
  __name: "NumberAnimate",
  props: {
    value: { default: 0 },
    math: { default: "ceil" },
    textMaxWidth: { default: "9.6px" },
    duration: { default: 1 },
    effect: { default: "ease-in-out" }
  },
  setup(a) {
    const o = g(["0"]), e = g(["0"]), n = g("20px"), l = a;
    ee(
      () => l.value,
      (s, p) => {
        s !== p && c(s);
      }
    );
    const i = g([]);
    let d = null;
    const m = (s) => {
      let p = s;
      switch (l.math) {
        case "ceil":
          p = Math.ceil(s);
          break;
        case "floor":
          p = Math.floor(s);
          break;
        case "abs":
          p = Math.abs(s);
          break;
        case "none":
          p = s;
          break;
      }
      return p;
    }, c = (s) => {
      const p = m(s).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      for (e.value = o.value, o.value = Array.from(p); e.value.length < o.value.length; )
        e.value.unshift("0");
      const w = o.value.length - e.value.length;
      w < 0 && e.value.splice(0, Math.abs(w)), console.log(l, "props.transition"), i.value.forEach((_) => {
        _.style.transform = "translateY(0)", _.style.transition = `transform 0s ${l.effect}`;
      }), ge(() => {
        d && clearTimeout(d), d = setTimeout(() => {
          i.value.forEach((_, b) => {
            const v = R(e.value[b], o.value[b]);
            v ? (_.style.transform = v.transform, _.style.transition = v.transition) : (_.style.transform = "none", _.style.transition = "none");
          });
        }, 50);
      });
    }, N = (s, p) => {
      if (isNaN(Number(p)))
        return [p];
      if (s === p)
        return [p];
      const w = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      let _ = [];
      return isNaN(Number(s)) ? _ = w.filter((b) => b <= Number(p)) : s > p ? (_.push(...w.filter((b) => b >= Number(s))), _.push(...w.filter((b) => b <= Number(p)))) : _.push(...w.filter((b) => b >= Number(s) && b <= Number(p))), _;
    }, R = (s, p) => {
      const w = N(s, p).length;
      return w === 1 ? null : {
        transform: `translateY(-${(w - 1) / w * 100}%)`,
        transition: `transform ${l.duration}s ${l.effect}`
      };
    };
    return te(() => {
      if (c(l.value), i.value.length > 0) {
        const s = window.getComputedStyle(i.value[0]);
        n.value = s.height;
      }
    }), (s, p) => (F(), W("div", {
      class: "bq-animate-number",
      style: G({ height: r(n) }),
      ref: ""
    }, [
      (F(!0), W(ue, null, ce(r(o), (w, _) => (F(), W("div", {
        key: "num_" + _
      }, [
        P("div", {
          ref_for: !0,
          ref_key: "numDiv",
          ref: i,
          class: be(["num-item", w === "," ? "comma" : ""])
        }, [
          (F(!0), W(ue, null, ce(N(r(e)[_], w), (b, v) => (F(), W("div", {
            style: G({ width: isNaN(b) ? "" : l.textMaxWidth }),
            key: "div_" + _ + "_" + v,
            class: "num-line"
          }, de(b), 5))), 128))
        ], 2)
      ]))), 128))
    ], 4));
  }
}), tt = /* @__PURE__ */ ie(et, [["__scopeId", "data-v-37509c28"]]), nt = j(tt), lt = /* @__PURE__ */ z({
  name: "Bar",
  __name: "Bar",
  props: {
    thumbWrapperSize: {},
    showCoord: {},
    handleThumbClick: { type: Function },
    className: {},
    styleObj: { type: [Boolean, null, String, Object, Array] },
    direction: {}
  },
  setup(a, { expose: o }) {
    const e = a, n = g(), { className: l, thumbWrapperSize: i, showCoord: d, handleThumbClick: m, styleObj: c, direction: N } = se(e);
    return o({
      barRef: _e(n)
    }), (R, s) => (F(), W("div", {
      class: be(r(l)),
      style: G({ "--size": r(i) + "px", display: r(d).y ? "block" : "none" })
    }, [
      P("div", {
        class: "scroll-bar",
        ref_key: "barRef",
        ref: n,
        onMousedown: s[0] || (s[0] = (p) => {
          r(m)(p, r(N));
        }),
        style: G(r(c))
      }, null, 36)
    ], 6));
  }
}), me = /* @__PURE__ */ ie(lt, [["__scopeId", "data-v-772212ca"]]);
var Q = /* @__PURE__ */ ((a) => (a.VERTICAL = "vertical", a.HORIZONTAL = "horizontal", a))(Q || {});
const at = /* @__PURE__ */ z({
  name: "BqScrollBar",
  __name: "ScrollBar",
  props: {
    thumbWrapperSize: { default: 6 },
    autoHide: { type: [Boolean, Object], default: !0 },
    barMinSize: { default: 16 }
  },
  emits: ["scroll"],
  setup(a, { expose: o, emit: e }) {
    const n = a, { thumbWrapperSize: l, autoHide: i, barMinSize: d } = se(n), m = e, c = g(), N = g(), R = g(), s = g(), p = g(), w = g(), _ = g(0), b = g(0), v = ae({ x: !1, y: !1 }), u = ae({ width: 0, height: 0 }), y = ae({ x: 0, y: 0 }), O = ae({ x: 0, y: 0 }), H = g(0), S = g(0);
    let Y = null, U = null;
    const h = (t) => {
      if (m("scroll", t), c.value && t.target) {
        let B = t.target, k = ((B.scrollHeight - c.value.clientHeight) / (c.value.clientHeight - u.height)).toFixed(2), I = ((B.scrollWidth - c.value.clientWidth) / (c.value.clientWidth - u.width)).toFixed(2), K = Number((B.scrollTop / Number(k)).toFixed(2)), le = Number((B.scrollLeft / Number(I)).toFixed(2));
        Object.assign(O, { x: Number(I), y: Number(k) }), Object.assign(y, { y: K <= 0 ? 0 : K, x: le <= 0 ? 0 : le });
      }
    }, f = (t, B) => {
      var k;
      if (w.value = B, B === Q.VERTICAL) {
        if (s.value && s.value.barRef) {
          let I = (k = s.value.barRef) == null ? void 0 : k.getBoundingClientRect();
          b.value = t.clientY - I.top, x(t);
        }
      } else if (p.value && p.value.barRef) {
        let I = p.value.barRef.getBoundingClientRect();
        b.value = t.clientX - I.left, x(t);
      }
    }, x = (t) => {
      t.stopPropagation(), document.addEventListener("mousemove", A), document.addEventListener("mouseup", C), document.onselectstart = () => !1;
    }, A = (t) => {
      if (w.value === Q.VERTICAL) {
        if (N.value && s.value) {
          let B = N.value.getBoundingClientRect(), k = (t.clientY - B.top - b.value) * O.y;
          c.value && (c.value.scrollTop = k <= 0 ? 0 : k);
        }
      } else if (N.value && p.value) {
        let B = N.value.getBoundingClientRect(), k = (t.clientX - B.left - b.value) * O.x;
        c.value && (c.value.scrollLeft = k <= 0 ? 0 : k);
      }
    }, C = () => {
      b.value = 0, document.removeEventListener("mousemove", A), document.removeEventListener("mouseup", C);
    }, X = () => {
      var B, k;
      let t = c.value;
      if (t && N.value) {
        let I = (t == null ? void 0 : t.clientWidth) * ((t == null ? void 0 : t.clientWidth) / (t == null ? void 0 : t.scrollWidth)), K = (t == null ? void 0 : t.clientHeight) * ((t == null ? void 0 : t.clientHeight) / (t == null ? void 0 : t.scrollHeight)), le = ((t.scrollHeight - t.clientHeight) / (t.clientHeight - u.height)).toFixed(2), Oe = ((t.scrollWidth - t.clientWidth) / (t.clientWidth - u.width)).toFixed(2);
        Object.assign(O, {
          x: Number(Oe),
          y: Number(le)
        }), Object.assign(u, {
          width: I < d.value ? d.value : I,
          height: K < d.value ? d.value : K
        }), S.value = (t == null ? void 0 : t.clientWidth) === (t == null ? void 0 : t.scrollWidth) ? 0 : $("x") ? 1 : 0, H.value = (t == null ? void 0 : t.clientHeight) === (t == null ? void 0 : t.scrollHeight) ? 0 : $("y") ? 1 : 0;
      }
      t && R.value && Object.assign(v, { x: ((B = R.value) == null ? void 0 : B.scrollWidth) > (t == null ? void 0 : t.clientWidth), y: ((k = R.value) == null ? void 0 : k.scrollHeight) > (t == null ? void 0 : t.clientHeight) });
    }, D = () => {
      var B, k;
      let t = c.value;
      t && R.value && Object.assign(v, {
        x: ((B = R.value) == null ? void 0 : B.clientWidth) > (t == null ? void 0 : t.clientWidth),
        y: ((k = R.value) == null ? void 0 : k.clientHeight) > (t == null ? void 0 : t.clientHeight)
      }), ne();
    }, L = new ResizeObserver((t) => {
      ne();
    }), ne = ze(() => {
      X();
    }, 300), $ = (t) => {
      let B = i.value;
      return B instanceof Object ? B[t] : B;
    }, xe = () => {
      Y && (clearTimeout(Y), Y = null), H.value !== 1 && (H.value = 1), Y = setTimeout(() => {
        H.value = 0;
      }, 3e3);
    }, Be = () => {
      U && (clearTimeout(U), U = null), S.value !== 1 && (S.value = 1), U = setTimeout(() => {
        S.value = 0;
      }, 3e3);
    };
    o({
      view: _e(c)
    }), te(async () => {
      {
        let t = await import("./generateBar-h5maoEMY.js");
        _.value = t.getScrollBarWidth, R.value && L.observe(R.value), window.addEventListener("resize", D), D();
      }
    }), pe(() => {
      window.removeEventListener("resize", D), R.value && L.unobserve(R.value);
    }), ee(
      () => y.x,
      () => {
        y.x !== 0 && !$("x") && Be();
      },
      { deep: !0 }
    ), ee(
      () => y.y,
      () => {
        y.y !== 0 && !$("y") && xe();
      },
      { deep: !0 }
    );
    const Re = Z(() => ({
      className: "right-scroll",
      thumbWrapperSize: l.value,
      showCoord: v,
      domRef: void 0,
      handleThumbClick: f,
      direction: Q.VERTICAL,
      styleObj: {
        "--size": l.value + "px",
        transform: `translateY(${y.y}px)`,
        height: u.height + "px",
        opacity: r(H)
      }
    })), Ae = Z(() => ({
      className: "bottom-scroll",
      thumbWrapperSize: l.value,
      showCoord: v,
      direction: Q.HORIZONTAL,
      handleThumbClick: f,
      styleObj: {
        "--size": l.value + "px",
        transform: `translateX(${y.x}px)`,
        width: u.width + "px",
        opacity: r(S)
      }
    }));
    return (t, B) => (F(), W("div", {
      class: "bq-scrollbar",
      ref_key: "wrapperRef",
      ref: N
    }, [
      P("div", {
        onScroll: h,
        className: "bq-scrollbar-view_wrap",
        ref_key: "domRef",
        ref: c,
        style: G({ "--size": r(_) + "px" })
      }, [
        P("div", {
          className: "bq-scrollbar_view",
          ref_key: "viewBarRef",
          ref: R
        }, [
          V(t.$slots, "default", {}, void 0, !0)
        ], 512)
      ], 36),
      M(me, J(r(Re), {
        ref_key: "rightBarRef",
        ref: s
      }), null, 16),
      M(me, J(r(Ae), {
        ref_key: "bottomBarRef",
        ref: p
      }), null, 16)
    ], 512));
  }
}), ot = /* @__PURE__ */ ie(at, [["__scopeId", "data-v-a1905dc4"]]), rt = j(ot), st = /* @__PURE__ */ z({
  name: "BqVisibleComponent",
  __name: "VisibleComponent",
  props: {
    options: {}
  },
  setup(a) {
    const o = a, { options: e } = se(o), n = g(), l = g(!1);
    let i = null;
    return te(() => {
      let d = new IntersectionObserver((m) => {
        if (!l.value) {
          if (m[m.length - 1].intersectionRatio <= 0)
            return;
          l.value = !0;
        }
      }, e.value);
      n.value && d.observe(n.value);
    }), pe(() => {
      n.value && i.observe(n.value);
    }), (d, m) => (F(), W("div", {
      ref_key: "elementRef",
      ref: n
    }, [
      V(d.$slots, "default", { visible: r(l) })
    ], 512));
  }
}), it = j(st), ut = /* @__PURE__ */ z({
  name: "BqAction",
  __name: "Action",
  props: {
    useAction: { type: Function },
    options: {}
  },
  setup(a) {
    const o = a;
    we();
    const e = o.useAction(o == null ? void 0 : o.options);
    return (n, l) => V(n.$slots, "default", oe(Se(Object.assign({}, r(e)))));
  }
}), ct = j(ut), dt = /* @__PURE__ */ z({
  name: "BqAwait",
  __name: "Await",
  props: {
    request: {},
    useLoading: { type: Boolean, default: !0 },
    spinProps: { default: () => ({ tip: "数据正在加载中" }) },
    options: {},
    useSkeleton: { type: Boolean, default: !0 },
    useError: { type: Boolean, default: !0 }
  },
  setup(a) {
    const o = a, e = g(!1), n = g(!1), l = g(), i = g();
    we();
    const d = async () => {
      i && (i.value = null), n.value = !0;
      try {
        let m = await o.request(o.options);
        l.value = m;
      } catch (m) {
        i.value = m;
      } finally {
        n.value = !1, console.log("end", n.value, i.value), e.value = !0;
      }
    };
    return te(d), o.options && ee(
      () => o.options,
      () => {
        d();
      },
      { deep: !0 }
    ), (m, c) => r(i) && o.useError ? V(m.$slots, "error", oe(J({ key: 0 }, { error: r(i) }))) : !r(e) && a.useSkeleton ? V(m.$slots, "skeleton", { key: 1 }) : o.useLoading ? (F(), ye(r(De), J({ key: 2 }, o.spinProps, { spinning: r(n) }), {
      default: E(() => [
        V(m.$slots, "default", oe(Se(Object.assign({}, { data: r(l), loading: r(n), error: r(i), onceStatus: r(e) }))))
      ]),
      _: 3
    }, 16, ["spinning"])) : V(m.$slots, "default", oe(J({ key: 3 }, Object.assign({}, { data: r(l), loading: r(n), error: r(i), onceStatus: r(e) }))));
  }
}), pt = j(dt), he = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BqAction: ct,
  BqAwait: pt,
  BqButton: Qe,
  BqNumberAnimate: nt,
  BqPie: Ye,
  BqScaleBox: Ue,
  BqScrollBar: rt,
  BqSelectAll: Ze,
  BqVisibleComponent: it
}, Symbol.toStringTag, { value: "Module" })), mt = (a) => {
  for (const o in he)
    a.use(he[o]);
};
export {
  ct as BqAction,
  pt as BqAwait,
  Qe as BqButton,
  nt as BqNumberAnimate,
  Ye as BqPie,
  Ue as BqScaleBox,
  rt as BqScrollBar,
  Ze as BqSelectAll,
  it as BqVisibleComponent,
  mt as default
};
