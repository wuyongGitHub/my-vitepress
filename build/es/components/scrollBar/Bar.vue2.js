import { defineComponent as u, ref as b, toRefs as y, shallowRef as h, createElementBlock as k, openBlock as C, normalizeStyle as l, normalizeClass as z, unref as e, createElementVNode as B } from "vue";
const w = /* @__PURE__ */ u({
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
  setup(n, { expose: s }) {
    const t = n, o = b(), { className: a, thumbWrapperSize: c, showCoord: i, handleThumbClick: p, styleObj: m, direction: d } = y(t);
    return s({
      barRef: h(o)
    }), (R, r) => (C(), k("div", {
      class: z(e(a)),
      style: l({ "--size": e(c) + "px", display: e(i).y ? "block" : "none" })
    }, [
      B("div", {
        class: "scroll-bar",
        ref_key: "barRef",
        ref: o,
        onMousedown: r[0] || (r[0] = (f) => {
          e(p)(f, e(d));
        }),
        style: l(e(m))
      }, null, 36)
    ], 6));
  }
});
export {
  w as default
};
