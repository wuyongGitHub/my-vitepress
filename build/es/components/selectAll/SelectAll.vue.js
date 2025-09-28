import { defineComponent as m, useAttrs as A, ref as g, computed as v, watch as O, onMounted as U, createBlock as B, openBlock as N, unref as s, mergeProps as _, withCtx as D, createVNode as h, createElementVNode as M, createTextVNode as q, isRef as F } from "vue";
import { Select as P, Divider as R, Checkbox as j } from "ant-design-vue";
const z = /* @__PURE__ */ m({
  name: "BqSelectAll",
  __name: "SelectAll",
  emits: ["change", "search", "blur"],
  setup(E, { emit: k }) {
    const u = k, e = A(), o = g([]), i = g([]);
    let c = !1;
    const C = m({
      props: {
        vnodes: {
          type: Object,
          required: !0
        }
      },
      render() {
        return this.vnodes;
      }
    }), d = (t, n) => {
      o.value.length === 0 && (o.value = e.options ?? []), i.value = t, u("change", t, n);
    }, S = (t) => {
      t.stopPropagation(), t.preventDefault();
    }, V = (t) => {
      let n = [];
      n = [...o.value];
      const a = [...i.value];
      e["onUpdate:value"] || console.warn("v-model:value 不存在");
      let r = t.target.checked ? (n ?? []).map((l) => l.value) : [];
      if (t.target.checked) {
        if (e.options && e.options.length > 0)
          for (let l = 0; l < r.length; l++)
            a.includes(r[l]) || a.push(r[l]);
      } else {
        for (let l = 0; l < a.length; l++)
          o.value.includes(a[l]) || (a.splice(l, 1), l--);
        e["onUpdate:value"] && e["onUpdate:value"]([]), d([], []);
      }
      r = a, i.value = [...a];
      let y = t.target.checked ? n : [];
      e["onUpdate:value"] && e["onUpdate:value"](r), d(r, y);
    }, b = (t) => {
      var n;
      if (e.filterOption && e.filterOption instanceof Function) {
        let a = (n = e.options) == null ? void 0 : n.filter((r) => e.filterOption instanceof Function && e.filterOption(t, r));
        o.value = a ?? [];
      } else
        console.warn("请传入filterOption方法");
      u("search", t);
    }, w = (t) => {
      o.value = e.options ?? [], u("blur", t);
    }, f = v(() => i.value.length === 0 ? !1 : (o.value ?? []).map((n) => n.value).every((n) => (i.value ?? []).includes(n))), x = v(() => Array.isArray(e.value) && (e.value ?? []).length === 0 ? !1 : !f.value), p = v(() => (o ?? []).value.length === 0 ? !1 : f.value);
    return O(
      () => e.options,
      () => {
        !c && (e.options ?? []).length > 0 && (o.value = e.options ?? [], c = !c);
      },
      { deep: !0, immediate: !0 }
    ), U(() => {
      i.value = e.value ?? [];
    }), (t, n) => (N(), B(s(P), _(t.$attrs, {
      autoClearSearchValue: !1,
      mode: "multiple",
      onBlur: w,
      onSearch: b,
      onChange: d
    }), {
      dropdownRender: D(({ menuNode: a }) => [
        h(s(C), { vnodes: a }, null, 8, ["vnodes"]),
        h(s(R), { style: { margin: "4px 0" } }),
        M("div", {
          style: { "padding-left": "11px" },
          onMousedown: S
        }, [
          h(s(j), {
            disabled: s(o).length === 0,
            indeterminate: s(x),
            checked: s(p),
            "onUpdate:checked": n[0] || (n[0] = (r) => F(p) ? p.value = r : null),
            onChange: V
          }, null, 8, ["disabled", "indeterminate", "checked"]),
          n[1] || (n[1] = q(" 全选 ", -1))
        ], 32)
      ]),
      _: 1
    }, 16));
  }
});
export {
  z as default
};
