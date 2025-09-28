import { defineComponent as te, toRefs as le, ref as o, reactive as H, shallowRef as ie, onMounted as ae, onUnmounted as oe, watch as k, computed as X, unref as m, createElementBlock as re, openBlock as ne, createElementVNode as Y, createVNode as F, normalizeStyle as se, renderSlot as ce, mergeProps as M } from "vue";
import { debounced as ue } from "../../utils/tool.js";
import D from "./Bar.vue.js";
import { DIRECTION_ENUM as S } from "./type.js";
const ge = /* @__PURE__ */ te({
  name: "BqScrollBar",
  __name: "ScrollBar",
  props: {
    thumbWrapperSize: { default: 6 },
    autoHide: { type: [Boolean, Object], default: !0 },
    barMinSize: { default: 16 }
  },
  emits: ["scroll"],
  setup(I, { expose: V, emit: A }) {
    const q = I, { thumbWrapperSize: h, autoHide: P, barMinSize: x } = le(q), U = A, i = o(), c = o(), a = o(), u = o(), d = o(), z = o(), O = o(0), v = o(0), y = H({ x: !1, y: !1 }), n = H({ width: 0, height: 0 }), s = H({ x: 0, y: 0 }), R = H({ x: 0, y: 0 }), f = o(0), p = o(0);
    let w = null, b = null;
    const $ = (e) => {
      if (U("scroll", e), i.value && e.target) {
        let t = e.target, l = ((t.scrollHeight - i.value.clientHeight) / (i.value.clientHeight - n.height)).toFixed(2), r = ((t.scrollWidth - i.value.clientWidth) / (i.value.clientWidth - n.width)).toFixed(2), g = Number((t.scrollTop / Number(l)).toFixed(2)), W = Number((t.scrollLeft / Number(r)).toFixed(2));
        Object.assign(R, { x: Number(r), y: Number(l) }), Object.assign(s, { y: g <= 0 ? 0 : g, x: W <= 0 ? 0 : W });
      }
    }, E = (e, t) => {
      var l;
      if (z.value = t, t === S.VERTICAL) {
        if (u.value && u.value.barRef) {
          let r = (l = u.value.barRef) == null ? void 0 : l.getBoundingClientRect();
          v.value = e.clientY - r.top, _(e);
        }
      } else if (d.value && d.value.barRef) {
        let r = d.value.barRef.getBoundingClientRect();
        v.value = e.clientX - r.left, _(e);
      }
    }, _ = (e) => {
      e.stopPropagation(), document.addEventListener("mousemove", L), document.addEventListener("mouseup", T), document.onselectstart = () => !1;
    }, L = (e) => {
      if (z.value === S.VERTICAL) {
        if (c.value && u.value) {
          let t = c.value.getBoundingClientRect(), l = (e.clientY - t.top - v.value) * R.y;
          i.value && (i.value.scrollTop = l <= 0 ? 0 : l);
        }
      } else if (c.value && d.value) {
        let t = c.value.getBoundingClientRect(), l = (e.clientX - t.left - v.value) * R.x;
        i.value && (i.value.scrollLeft = l <= 0 ? 0 : l);
      }
    }, T = () => {
      v.value = 0, document.removeEventListener("mousemove", L), document.removeEventListener("mouseup", T);
    }, Z = () => {
      var t, l;
      let e = i.value;
      if (e && c.value) {
        let r = (e == null ? void 0 : e.clientWidth) * ((e == null ? void 0 : e.clientWidth) / (e == null ? void 0 : e.scrollWidth)), g = (e == null ? void 0 : e.clientHeight) * ((e == null ? void 0 : e.clientHeight) / (e == null ? void 0 : e.scrollHeight)), W = ((e.scrollHeight - e.clientHeight) / (e.clientHeight - n.height)).toFixed(2), ee = ((e.scrollWidth - e.clientWidth) / (e.clientWidth - n.width)).toFixed(2);
        Object.assign(R, {
          x: Number(ee),
          y: Number(W)
        }), Object.assign(n, {
          width: r < x.value ? x.value : r,
          height: g < x.value ? x.value : g
        }), p.value = (e == null ? void 0 : e.clientWidth) === (e == null ? void 0 : e.scrollWidth) ? 0 : B("x") ? 1 : 0, f.value = (e == null ? void 0 : e.clientHeight) === (e == null ? void 0 : e.scrollHeight) ? 0 : B("y") ? 1 : 0;
      }
      e && a.value && Object.assign(y, { x: ((t = a.value) == null ? void 0 : t.scrollWidth) > (e == null ? void 0 : e.clientWidth), y: ((l = a.value) == null ? void 0 : l.scrollHeight) > (e == null ? void 0 : e.clientHeight) });
    }, N = () => {
      var t, l;
      let e = i.value;
      e && a.value && Object.assign(y, {
        x: ((t = a.value) == null ? void 0 : t.clientWidth) > (e == null ? void 0 : e.clientWidth),
        y: ((l = a.value) == null ? void 0 : l.clientHeight) > (e == null ? void 0 : e.clientHeight)
      }), j();
    }, C = new ResizeObserver((e) => {
      j();
    }), j = ue(() => {
      Z();
    }, 300), B = (e) => {
      let t = P.value;
      return t instanceof Object ? t[e] : t;
    }, G = () => {
      w && (clearTimeout(w), w = null), f.value !== 1 && (f.value = 1), w = setTimeout(() => {
        f.value = 0;
      }, 3e3);
    }, J = () => {
      b && (clearTimeout(b), b = null), p.value !== 1 && (p.value = 1), b = setTimeout(() => {
        p.value = 0;
      }, 3e3);
    };
    V({
      view: ie(i)
    }), ae(async () => {
      {
        let e = await import("./generateBar.js");
        O.value = e.getScrollBarWidth, a.value && C.observe(a.value), window.addEventListener("resize", N), N();
      }
    }), oe(() => {
      window.removeEventListener("resize", N), a.value && C.unobserve(a.value);
    }), k(
      () => s.x,
      () => {
        s.x !== 0 && !B("x") && J();
      },
      { deep: !0 }
    ), k(
      () => s.y,
      () => {
        s.y !== 0 && !B("y") && G();
      },
      { deep: !0 }
    );
    const K = X(() => ({
      className: "right-scroll",
      thumbWrapperSize: h.value,
      showCoord: y,
      domRef: void 0,
      handleThumbClick: E,
      direction: S.VERTICAL,
      styleObj: {
        "--size": h.value + "px",
        transform: `translateY(${s.y}px)`,
        height: n.height + "px",
        opacity: m(f)
      }
    })), Q = X(() => ({
      className: "bottom-scroll",
      thumbWrapperSize: h.value,
      showCoord: y,
      direction: S.HORIZONTAL,
      handleThumbClick: E,
      styleObj: {
        "--size": h.value + "px",
        transform: `translateX(${s.x}px)`,
        width: n.width + "px",
        opacity: m(p)
      }
    }));
    return (e, t) => (ne(), re("div", {
      class: "bq-scrollbar",
      ref_key: "wrapperRef",
      ref: c
    }, [
      Y("div", {
        onScroll: $,
        className: "bq-scrollbar-view_wrap",
        ref_key: "domRef",
        ref: i,
        style: se({ "--size": m(O) + "px" })
      }, [
        Y("div", {
          className: "bq-scrollbar_view",
          ref_key: "viewBarRef",
          ref: a
        }, [
          ce(e.$slots, "default", {}, void 0, !0)
        ], 512)
      ], 36),
      F(D, M(m(K), {
        ref_key: "rightBarRef",
        ref: u
      }), null, 16),
      F(D, M(m(Q), {
        ref_key: "bottomBarRef",
        ref: d
      }), null, 16)
    ], 512));
  }
});
export {
  ge as default
};
