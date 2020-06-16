<template>
  <LoadingAnimation v-if="loading" />
  <CheckoutTable
    v-else
    :items-in-cart-by-id="itemsInCartById"
    @removeItemFromCart="removeItemFromCart"
  />
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CheckoutTable from '@/components/CheckoutTable.vue';
import LoadingAnimation from '@/components/LoadingAnimation.vue';

export default {
  components: {
    CheckoutTable,
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
  },
  methods: {
    ...mapActions({
      fetchProducts: 'fetchProducts',
      removeItemFromCart: 'removeItemFromCart',
    }),
  },
};
</script>
