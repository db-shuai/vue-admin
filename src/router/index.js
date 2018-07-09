import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* 
  组件的引入 方式一 require
*/
//   const login = r => require.ensure([], () => r(require('@/page/login2')), 'login');
/* 
  组件的引入 方式二 import
*/
// export const constantRouterMap = [
//   { path: '/login', component: () => import('@/views/login/index'), hidden: true },
// ]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  // routes:constantRouterMap
})
