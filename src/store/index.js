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
        // already fetched products
        return;
      }
      const productsResponse = await axios.get('https://api.jsonbin.io/b/5ee6a8670e966a7aa3696b76');
      context.commit('setProducts', productsResponse.data);
    },
    addItemToCart(context, productId) {
      context.commit('addToItemsInCart', productId);
      context.dispatch('saveCart');
    },
    removeItemFromCart(context, productId) {
      context.commit('removeItemFromCart', productId);
      context.dispatch('saveCart');
    },
    saveCart(context) {
      const items = context.state.itemsInCart;
      localStorage.setItem('cart', JSON.stringify(items));
    },
    loadCart: (context) => {
      const items = JSON.parse(localStorage.getItem('cart'));
      if (items) {
        context.commit('replaceCartItems', items);
      }
    },
    clearCart: (context) => {
      context.commit('replaceCartItems', []);
      context.dispatch('saveCart');
    },
  },
  mutations: {
    setProducts(state, productsData) {
      state.products = productsData;
    },
    addToItemsInCart(state, productId) {
      state.itemsInCart.push(productId);
    },
    removeItemFromCart(state, productId) {
      state.itemsInCart = state.itemsInCart.filter((item) => item !== productId);
    },
    replaceCartItems(state, newItems) {
      state.itemsInCart = newItems;
    },
  },
  getters: {
    numberOfItemsInCart(state) {
      return state.itemsInCart.length;
    },
    productsById(state) {
      const productsDictionary = {};
      state.products.forEach((product) => {
        productsDictionary[product.id] = product;
      });
      return productsDictionary;
    },
    itemsInCartById(state, getters) {
      const itemsGrouped = {};
      state.itemsInCart.forEach((itemId) => {
        if (!itemsGrouped[itemId]) {
          const product = getters.productsById[itemId];
          itemsGrouped[itemId] = {
            ...product,
            quantity: 0,
          };
        }
        itemsGrouped[itemId].quantity++;
      });
      return itemsGrouped;
    },
  },
});
