import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const pages = {
  HOME: '/',
  CHECKOUT: '/checkout',
  PRODUCTS: '/products',
  SINGLE_PRODUCT: '/product', // product/{id}
  ERROR: '/404',
  THANKS: '/thanks',
};

const routes = [];

const router = new VueRouter({
  routes,
});

export default router;
