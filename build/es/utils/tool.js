const r = (n) => (n.install = (e) => {
  const t = n.name;
  t && e.component(t, n);
}, n);
export {
  r as withInstall
};
