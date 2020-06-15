<template>
  <LoadingAnimation v-if="loading" />
  <table v-else class="bg-white mb-6 m-auto">
    <tr v-for="item in itemsWithTotals" :key="item.id">
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
import LoadingAnimation from '@/components/LoadingAnimation.vue';

export default {
  components: {
    LoadingAnimation,
  },
  data() {
    return {
      loading: true,
    };
  },
  async mounted() {
    await this.fetchProducts();
    this.loading = false;
  },
  computed: {
    ...mapGetters({
      itemsInCartById: 'itemsInCartById',
    }),
    itemsWithTotals() {
      const productIds = Object.keys(this.itemsInCartById);

      return productIds.map((productId) => {
        const item = this.itemsInCartById[productId];
        return {
          ...item,
          priceTotal: item.quantity * item.price,
        };
      });
    },
    grandTotal() {
      let result = 0;
      this.itemsWithTotals.forEach((item) => {
        result += item.priceTotal;
      });
      return result;
    },
  },
  methods: {
    ...mapActions({
      removeItemFromCart: 'removeItemFromCart',
      fetchProducts: 'fetchProducts',
    }),
  },
};
</script>
