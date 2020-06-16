import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home.vue';

Vue.use(VueRouter);

export const pages = {
  HOME: '/',
  CHECKOUT: '/checkout',
  PRODUCTS: '/products',
  SINGLE_PRODUCT: '/product', // product/{id}
  ERROR: '/404',
  THANKS: '/thanks',
};

const routes = [
  {
    path: pages.HOME,
    name: 'Home',
    component: Home,
  },
  {
    path: pages.CHECKOUT,
    name: 'Checkout',
    component: () => import(/* webpackChunkName: "checkout" */ '../pages/Checkout.vue'),
  },
  {
    path: pages.PRODUCTS,
    name: 'Products',
    component: () => import(/* webpackChunkName: "products" */ '../pages/Products.vue'),
  },
  {
    path: `${pages.SINGLE_PRODUCT}/:id`,
    name: 'SingleProduct',
    component: () => import(/* webpackChunkName: "product" */ '../pages/SingleProduct.vue'),
  },
  {
    path: pages.THANKS,
    name: 'Thanks',
    component: () => import(/* webpackChunkName: "thanks" */ '../pages/Thanks.vue'),
  },
  {
    path: '*',
    name: 'Error',
    component: () => import(/* webpackChunkName: "error" */ '../pages/404.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
