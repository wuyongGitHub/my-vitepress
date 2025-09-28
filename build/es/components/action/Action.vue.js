import { defineComponent as s, useSlots as c, renderSlot as i, normalizeProps as r, guardReactiveProps as a, unref as u } from "vue";
const f = /* @__PURE__ */ s({
  name: "BqAction",
  __name: "Action",
  props: {
    useAction: { type: Function },
    options: {}
  },
  setup(n) {
    const t = n;
    c();
    const o = t.useAction(t == null ? void 0 : t.options);
    return (e, p) => i(e.$slots, "default", r(a(Object.assign({}, u(o)))));
  }
});
export {
  f as default
};
