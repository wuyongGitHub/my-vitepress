import { defineComponent as f, ref as r, useSlots as g, onMounted as m, watch as y, renderSlot as l, createBlock as k, unref as e, normalizeProps as i, mergeProps as p, openBlock as v, withCtx as S, guardReactiveProps as B } from "vue";
import { Spin as h } from "ant-design-vue";
const $ = /* @__PURE__ */ f({
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
  setup(d) {
    const s = d, n = r(!1), a = r(!1), u = r(), t = r();
    g();
    const c = async () => {
      t && (t.value = null), a.value = !0;
      try {
        let o = await s.request(s.options);
        u.value = o;
      } catch (o) {
        t.value = o;
      } finally {
        a.value = !1, console.log("end", a.value, t.value), n.value = !0;
      }
    };
    return m(c), s.options && y(
      () => s.options,
      () => {
        c();
      },
      { deep: !0 }
    ), (o, w) => e(t) && s.useError ? l(o.$slots, "error", i(p({ key: 0 }, { error: e(t) }))) : !e(n) && d.useSkeleton ? l(o.$slots, "skeleton", { key: 1 }) : s.useLoading ? (v(), k(e(h), p({ key: 2 }, s.spinProps, { spinning: e(a) }), {
      default: S(() => [
        l(o.$slots, "default", i(B(Object.assign({}, { data: e(u), loading: e(a), error: e(t), onceStatus: e(n) }))))
      ]),
      _: 3
    }, 16, ["spinning"])) : l(o.$slots, "default", i(p({ key: 3 }, Object.assign({}, { data: e(u), loading: e(a), error: e(t), onceStatus: e(n) }))));
  }
});
export {
  $ as default
};
