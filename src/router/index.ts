import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import { getComponentsPath, view, getViewPath } from '../tool/index';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '首页',
    component: getComponentsPath('Layout'),
    children: [
      { path: '/', redirect: '/subassembly/base-subassembly' },
      {
        path: '/subassembly',
        name: '组件',
        component: view(),
        children: [
          {
            path: '/subassembly/base-subassembly',
            name: '基础组件',
            component: getViewPath('subassembly/baseSubassembly'),
          },
          {
            path: '/subassembly/complexity-subassembly',
            name: '复杂组件',
            component: getViewPath('subassembly/complexitySubassembly'),
          },
        ],
      },
      {
        path: '/form',
        name: '表单页',
        component: view(),
        children: [
          {
            path: '/form/base-form',
            name: '基础表单',
            component: getViewPath('form/base-form'),
          },
          {
            path: '/form/step-form',
            name: '分步表单',
            component: getViewPath('form/step-form'),
          },
          {
            path: '/form/advanced-form',
            name: '高级表单',
            component: getViewPath('form/advanced-form'),
          },
        ],
      },
      {
        path: '/list',
        name: '列表页',
        component: view(),
        children: [
          {
            path: '/list/table-list',
            name: '查询表格',
            component: getViewPath('List/table-list'),
          },
          {
            path: '/list/basic-list-list',
            name: '标准列表',
            component: getViewPath('List/basic-list-list'),
          },
          {
            path: '/list/card',
            name: '卡片列表',
            component: getViewPath('List/card'),
          },
        ],
      },
      {
        path: '/profile',
        name: '详情页',
        component: view(),
        children: [
          {
            path: '/profile/basic',
            name: '基础详情页',
            component: getViewPath('profile/basic'),
          },
          {
            path: '/profile/advanced',
            name: '高级详情页',
            component: getViewPath('profile/advanced'),
          },
        ],
      },
      {
        path: '/result',
        name: '结果页',
        component: view(),
        children: [
          {
            path: '/result/success',
            name: '成功',
            component: getViewPath('result/success'),
          },
          {
            path: '/result/fail',
            name: '失败',
            component: getViewPath('result/fail'),
          },
        ],
      },
      {
        path: '/exception',
        name: '异常页',
        component: view(),
        children: [
          {
            path: '/exception/403',
            name: '403',
            component: getViewPath('exception/403'),
          },
          {
            path: '/exception/404',
            name: '404',
            component: getViewPath('exception/404'),
          },
          {
            path: '/exception/500',
            name: '500',
            component: getViewPath('exception/500'),
          },
        ],
      },
      {
        path: '/account',
        name: '个人页',
        component: view(),
        children: [
          {
            path: '/account/center',
            name: '个人中心',
            component: getViewPath('account/center'),
          },
          {
            path: '/account/base',
            name: '个人设置',
            component: getViewPath('account/base'),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
