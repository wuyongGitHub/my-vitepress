import { defineComponent as a, useAttrs as i, computed as _, resolveComponent as p, createBlock as f, openBlock as m, mergeProps as d, unref as r, withCtx as C, renderSlot as y } from "vue";
const B = /* @__PURE__ */ a({
  name: "WyButton",
  __name: "Button",
  setup(o) {
    const t = i(), n = _(() => ["wy-button"]), s = (e) => {
      var c;
      typeof t.onClick == "function" && t.onClick(e), console.log("[Button Click]", {
        type: t.type,
        text: (c = e.target.textContent) == null ? void 0 : c.trim()
      });
    };
    return (e, c) => {
      const u = p("ElButton");
      return m(), f(u, d(r(t), {
        class: [r(t).class, n.value],
        onClick: s
      }), {
        default: C(() => [
          y(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 16, ["class"]);
    };
  }
}), k = (o, t) => {
  const n = o.__vccOpts || o;
  for (const [s, e] of t)
    n[s] = e;
  return n;
}, v = /* @__PURE__ */ k(B, [["__scopeId", "data-v-2202448f"]]), g = (o) => (o.install = (t) => {
  const n = o.name;
  n && t.component(n, o);
}, o), x = g(v), l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WyButton: x
}, Symbol.toStringTag, { value: "Module" })), h = (o) => {
  for (const t in l)
    o.use(l[t]);
};
export {
  x as WyButton,
  h as default
};
