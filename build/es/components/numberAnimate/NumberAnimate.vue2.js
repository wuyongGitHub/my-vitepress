import { defineComponent as x, ref as m, watch as w, nextTick as T, onMounted as S, createElementBlock as f, openBlock as c, normalizeStyle as y, unref as v, Fragment as b, renderList as d, createElementVNode as B, normalizeClass as D, toDisplayString as E } from "vue";
const $ = /* @__PURE__ */ x({
  name: "BqNumberAnimate",
  __name: "NumberAnimate",
  props: {
    value: { default: 0 },
    math: { default: "ceil" },
    textMaxWidth: { default: "9.6px" },
    duration: { default: 1 },
    effect: { default: "ease-in-out" }
  },
  setup(_) {
    const o = m(["0"]), s = m(["0"]), p = m("20px"), n = _;
    w(
      () => n.value,
      (e, t) => {
        e !== t && g(e);
      }
    );
    const u = m([]);
    let h = null;
    const k = (e) => {
      let t = e;
      switch (n.math) {
        case "ceil":
          t = Math.ceil(e);
          break;
        case "floor":
          t = Math.floor(e);
          break;
        case "abs":
          t = Math.abs(e);
          break;
        case "none":
          t = e;
          break;
      }
      return t;
    }, g = (e) => {
      const t = k(e).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      for (s.value = o.value, o.value = Array.from(t); s.value.length < o.value.length; )
        s.value.unshift("0");
      const a = o.value.length - s.value.length;
      a < 0 && s.value.splice(0, Math.abs(a)), console.log(n, "props.transition"), u.value.forEach((r) => {
        r.style.transform = "translateY(0)", r.style.transition = `transform 0s ${n.effect}`;
      }), T(() => {
        h && clearTimeout(h), h = setTimeout(() => {
          u.value.forEach((r, l) => {
            const i = M(s.value[l], o.value[l]);
            i ? (r.style.transform = i.transform, r.style.transition = i.transition) : (r.style.transform = "none", r.style.transition = "none");
          });
        }, 50);
      });
    }, N = (e, t) => {
      if (isNaN(Number(t)))
        return [t];
      if (e === t)
        return [t];
      const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      let r = [];
      return isNaN(Number(e)) ? r = a.filter((l) => l <= Number(t)) : e > t ? (r.push(...a.filter((l) => l >= Number(e))), r.push(...a.filter((l) => l <= Number(t)))) : r.push(...a.filter((l) => l >= Number(e) && l <= Number(t))), r;
    }, M = (e, t) => {
      const a = N(e, t).length;
      return a === 1 ? null : {
        transform: `translateY(-${(a - 1) / a * 100}%)`,
        transition: `transform ${n.duration}s ${n.effect}`
      };
    };
    return S(() => {
      if (g(n.value), u.value.length > 0) {
        const e = window.getComputedStyle(u.value[0]);
        p.value = e.height;
      }
    }), (e, t) => (c(), f("div", {
      class: "bq-animate-number",
      style: y({ height: v(p) }),
      ref: ""
    }, [
      (c(!0), f(b, null, d(v(o), (a, r) => (c(), f("div", {
        key: "num_" + r
      }, [
        B("div", {
          ref_for: !0,
          ref_key: "numDiv",
          ref: u,
          class: D(["num-item", a === "," ? "comma" : ""])
        }, [
          (c(!0), f(b, null, d(N(v(s)[r], a), (l, i) => (c(), f("div", {
            style: y({ width: isNaN(l) ? "" : n.textMaxWidth }),
            key: "div_" + r + "_" + i,
            class: "num-line"
          }, E(l), 5))), 128))
        ], 2)
      ]))), 128))
    ], 4));
  }
});
export {
  $ as default
};
