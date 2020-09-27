function getViewPath(path: String) {
  return () =>  import(`../views/${path}/index.vue`);
}
function getComponentsPath(path: String) {
  return () => import(`../components/${path}/index.vue`);
}
function view() {
  return () =>  import('../components/router-vw.vue');
}

export { getViewPath, getComponentsPath, view };
