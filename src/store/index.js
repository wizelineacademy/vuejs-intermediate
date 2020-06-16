import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    itemsInCart: [],
  },
  actions: {
    async fetchProducts(context) {
      if (context.state.products.length) {
        return;
      }
      const productsUrl = 'https://api.jsonbin.io/b/5ee6a8670e966a7aa3696b76';
      const productResponse = await axios.get(productsUrl);
      context.commit('setProducts', productResponse.data);
    },
    addItemToCart(context, productId) {
      context.commit('addItemToCart', productId);
    },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    addItemToCart(state, productId) {
      state.itemsInCart.push(productId);
    },
  },
  getters: {
    numberOfItemsInCart(state) {
      return state.itemsInCart.length;
    },
  },
});
