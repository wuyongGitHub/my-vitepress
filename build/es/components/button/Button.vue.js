import { defineComponent as d, resolveComponent as r, createElementBlock as p, openBlock as s, createElementVNode as f, createTextVNode as n, createVNode as e, withCtx as o } from "vue";
const i = { class: "bq-button" }, b = /* @__PURE__ */ d({
  name: "BqButton",
  __name: "Button",
  setup(m) {
    return (y, t) => {
      const l = r("el-button"), u = r("a-button");
      return s(), p("div", i, [
        t[12] || (t[12] = f("span", null, "-测试按钮-6", -1)),
        t[13] || (t[13] = n(" ----------------------------- ", -1)),
        e(l, null, {
          default: o(() => [...t[0] || (t[0] = [
            n("Default", -1)
          ])]),
          _: 1
        }),
        e(l, { type: "primary" }, {
          default: o(() => [...t[1] || (t[1] = [
            n("Primary", -1)
          ])]),
          _: 1
        }),
        e(l, { type: "success" }, {
          default: o(() => [...t[2] || (t[2] = [
            n("Success", -1)
          ])]),
          _: 1
        }),
        e(l, { type: "info" }, {
          default: o(() => [...t[3] || (t[3] = [
            n("Info", -1)
          ])]),
          _: 1
        }),
        e(l, { type: "warning" }, {
          default: o(() => [...t[4] || (t[4] = [
            n("Warning", -1)
          ])]),
          _: 1
        }),
        e(l, { type: "danger" }, {
          default: o(() => [...t[5] || (t[5] = [
            n("Danger", -1)
          ])]),
          _: 1
        }),
        e(l, null, {
          default: o(() => [...t[6] || (t[6] = [
            n("中文", -1)
          ])]),
          _: 1
        }),
        t[14] || (t[14] = n(" ----------------------------- ", -1)),
        e(u, { type: "primary" }, {
          default: o(() => [...t[7] || (t[7] = [
            n("Primary", -1)
          ])]),
          _: 1
        }),
        e(u, null, {
          default: o(() => [...t[8] || (t[8] = [
            n("Secondary", -1)
          ])]),
          _: 1
        }),
        e(u, { type: "dashed" }, {
          default: o(() => [...t[9] || (t[9] = [
            n("Dashed", -1)
          ])]),
          _: 1
        }),
        e(u, { type: "outline" }, {
          default: o(() => [...t[10] || (t[10] = [
            n("Outline", -1)
          ])]),
          _: 1
        }),
        e(u, { type: "text" }, {
          default: o(() => [...t[11] || (t[11] = [
            n("Text", -1)
          ])]),
          _: 1
        })
      ]);
    };
  }
});
export {
  b as default
};
