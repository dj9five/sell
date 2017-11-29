/* eslint-disable import/first,import/newline-after-import,key-spacing,comma-dangle,object-curly-spacing,object-curly-spacing,max-len,object-shorthand,no-new,no-unused-vars,import/extensions,import/no-extraneous-dependencies,import/no-unresolved,spaced-comment */
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
// eslint-disable-next-line import/no-extraneous-dependencies
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.config.productionTip = false;
/*设置路由路径*/
const routes = [
// eslint-disable-next-line comma-dangle
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller}
];
/*实例化路由*/
const router = new VueRouter({routes,
linkActiveClass:'active'});
const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
/*Vue2.0设置默认路由路径的方法router.push()*/
router.push('/goods');
