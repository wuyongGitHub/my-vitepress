import { defineComponent as r, useAttrs as u, computed as a, resolveComponent as p, createBlock as i, openBlock as m, mergeProps as f, unref as n, withCtx as C, renderSlot as _ } from "vue";
const B = /* @__PURE__ */ r({
  name: "WyButton",
  __name: "Button",
  setup(d) {
    const t = u(), s = a(() => ["wy-button"]), c = (o) => {
      var e;
      typeof t.onClick == "function" && t.onClick(o), console.log("[Button Click]", {
        type: t.type,
        text: (e = o.target.textContent) == null ? void 0 : e.trim()
      });
    };
    return (o, e) => {
      const l = p("ElButton");
      return m(), i(l, f(n(t), {
        class: [n(t).class, s.value],
        onClick: c
      }), {
        default: C(() => [
          _(o.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 16, ["class"]);
    };
  }
});
export {
  B as default
};
