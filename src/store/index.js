import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    itemsInCart: [],
  },
  actions: {
    addItemToCart(context, productId) {
      context.commit('addToItemsInCart', productId);
      context.dispatch('saveCart');
    },
    removeItemFromCart(context, productId) {
      context.commit('addToItemsInCart', productId);
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
  },
  mutations: {
    addToItemsInCart(state, productId) {
      state.itemsInCart.push(productId);
    },
    removeItemFromCart(state, productId) {
      const indexToRemove = state.itemsInCart.indexOf(productId);
      state.itemsInCart.splice(indexToRemove, 1);
    },
    replaceCartItems(state, newItems) {
      state.itemsInCart = newItems;
    },
  },
  getters: {
    numberOfItemsInCart(state) {
      return state.itemsInCart.length;
    },
    itemsInCartById(state) {
      const itemsGrouped = {};
      state.itemsInCart.forEach((itemId) => {
        if (!itemsGrouped[itemId]) {
          itemsGrouped[itemId] = 0;
        }
        itemsGrouped[itemId]++;
      });
      return itemsGrouped;
    },
  },
});
