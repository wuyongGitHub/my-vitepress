const d = (() => {
  const t = document.createElement("div");
  t.style.visibility = "hidden", t.style.width = "100px", t.style.position = "absolute", t.style.top = "-9999px", document.body.appendChild(t);
  const o = t.offsetWidth;
  t.style.overflow = "scroll";
  const e = document.createElement("div");
  e.style.width = "100%", t.appendChild(e);
  const l = e.offsetWidth;
  return t.parentNode.removeChild(t), o - l;
})();
export {
  d as getScrollBarWidth
};
