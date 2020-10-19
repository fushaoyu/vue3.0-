import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import { getComponentsPath,routerChildren } from '../tool/index';
const Children: Array<any> = routerChildren();
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '首页',
    component: getComponentsPath('Layout'),
    children: [
      { path: '/', redirect: '/subassembly/base-subassembly' },
      ...Children
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
