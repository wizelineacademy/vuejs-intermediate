<template>
  <table class="bg-white mb-6 m-auto">
    <tr v-for="item in itemsWithProductData" :key="item.id">
      <td class="border px-8 py-4">{{ item.name }}</td>
      <td class="border px-8 py-4">{{ item.quantity }} x {{ item.price }}</td>
      <td class="border px-8 py-4">{{ item.priceTotal }}</td>
      <td class="border px-8 py-4">
        <button
          @click="removeItemFromCart(item.id)"
          class="bg-black border border-solid border-black text-white py-2 px-4"
        >
          Remove
        </button>
      </td>
    </tr>
    <tr>
      <td class="bg-blue-100 border text-left px-8 py-4">Grand Total</td>
      <td class="bg-blue-100 border text-left px-8 py-4"></td>
      <td class="bg-blue-100 border text-left px-8 py-4">{{ grandTotal }}</td>
    </tr>
  </table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import products from '@/assets/data/products.json';

export default {
  computed: {
    ...mapGetters({
      itemsInCartById: 'itemsInCartById',
    }),
    itemsWithProductData() {
      const productIds = Object.keys(this.itemsInCartById);
      return productIds.map((productId) => {
        const quantity = this.itemsInCartById[productId];
        const productData = this.productById(productId);
        return {
          ...productData,
          quantity,
          priceTotal: quantity * productData.price,
        };
      });
    },
    grandTotal() {
      let result = 0;
      this.itemsWithProductData.forEach((product) => {
        result += product.priceTotal;
      });
      return result;
    },
  },
  methods: {
    ...mapActions({
      removeItemFromCart: 'removeItemFromCart',
    }),
    productById(productId) {
      const idAsNumber = parseInt(productId, 10);
      return products.find((product) => product.id === idAsNumber);
    },
  },
};
</script>
