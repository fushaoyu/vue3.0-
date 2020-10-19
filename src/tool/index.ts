function getViewPath(path: String) {
  return () => import(`../views${path}/index.vue`);
}
function getComponentsPath(path: String) {
  return () => import(`../components/${path}/index.vue`);
}
function view() {
  return () => import('../components/router-vw.vue');
}

//组合路由列表
function routerChildren() {
  //对象定义类型
  interface Person {
    path: string;
    name: string;
    component: Function;
    children: Array<any>;
  }
  let stor: any = sessionStorage.getItem('setRouterList');
  const list: Array<any> = JSON.parse(stor);
  let arr: Array<any> = [];

  list.forEach((item, index) => {
    let path: String = item.children[0].key;
    let n = path.lastIndexOf('/');
    let stairPath = path.slice(0, n);
    let obj: Person = {
      path: stairPath,
      name: item.navTitle,
      component: view(),
      children: [],
    };
    item.children.forEach((element: any, num: Number) => {
      let obj2: Person = {
        path: element.key,
        name: element.navTitle,
        component: getViewPath(element.key),
        children: [],
      };
      obj.children.push(obj2);
    });
    arr.push(obj);
  });
  return arr;
}

export { getViewPath, getComponentsPath, view, routerChildren };
