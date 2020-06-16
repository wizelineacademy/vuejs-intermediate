<template>
  <table class="bg-white mb-6 m-auto">
    <tr v-for="item in itemsWithTotals" :key="item.id">
      <td class="border px-8 py-4">{{ item.name }}</td>
      <td class="border px-8 py-4">{{ item.quantity }} x {{ item.price | toUSD }}</td>
      <td class="border px-8 py-4">{{ item.priceTotal | toUSD }}</td>
      <td class="border px-8 py-4">
        <button
          data-test="deleteButton"
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
      <td data-test="grandTotal" class="bg-blue-100 border text-left px-8 py-4">
        {{ grandTotal | toUSD }}
      </td>
    </tr>
  </table>
</template>

<script>
import toUSD from '@/filters/toUSD';

export default {
  filters: {
    toUSD,
  },
  props: {
    itemsInCartById: {
      type: Object,
      required: true,
    },
  },
  computed: {
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
    removeItemFromCart(itemId) {
      this.$emit('removeItemFromCart', itemId);
    },
  },
};
</script>
