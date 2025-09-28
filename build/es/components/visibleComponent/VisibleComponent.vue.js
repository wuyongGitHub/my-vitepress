import { defineComponent as u, toRefs as c, ref as r, onMounted as f, onUnmounted as v, createElementBlock as p, openBlock as m, renderSlot as b, unref as d } from "vue";
const k = /* @__PURE__ */ u({
  name: "BqVisibleComponent",
  __name: "VisibleComponent",
  props: {
    options: {}
  },
  setup(s) {
    const l = s, { options: i } = c(l), e = r(), t = r(!1);
    let a = null;
    return f(() => {
      let n = new IntersectionObserver((o) => {
        if (!t.value) {
          if (o[o.length - 1].intersectionRatio <= 0)
            return;
          t.value = !0;
        }
      }, i.value);
      e.value && n.observe(e.value);
    }), v(() => {
      e.value && a.observe(e.value);
    }), (n, o) => (m(), p("div", {
      ref_key: "elementRef",
      ref: e
    }, [
      b(n.$slots, "default", { visible: d(t) })
    ], 512));
  }
});
export {
  k as default
};
