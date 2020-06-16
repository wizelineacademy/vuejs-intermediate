import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';

Vue.use(VueRouter);

export const pages = {
  HOME: '/',
  CHECKOUT: '/checkout',
  PRODUCTS: '/products',
  SINGLE_PRODUCT: '/product',
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when visiting the route.
    component: () => import(/* webpackChunkName: "about" */ '../pages/Checkout.vue'),
  },
  {
    path: pages.PRODUCTS,
    name: 'Products',
    component: () => import(/* webpackChunkName: "store" */ '../pages/Products.vue'),
  },
  {
    path: `${pages.SINGLE_PRODUCT}/:id`,
    name: 'Product',
    component: () => import(/* webpackChunkName: "store" */ '../pages/SingleProduct.vue'),
  },
  {
    path: `${pages.THANKS}`,
    name: 'Thanks',
    component: () => import(/* webpackChunkName: "thanks" */ '../pages/Thanks.vue'),
  },
  {
    path: pages.ERROR,
    name: 'error',
    component: () => import(/* webpackChunkName: "error" */ '../pages/404.vue'),
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '../pages/404.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
