<template>
  <div>
    <h1 class="text-center uppercase tracking-wide font-bold text-gray-700">
      Our 1D Printer Products
    </h1>
    <LoadingAnimation v-if="loading" />
    <ProductWidget
      v-for="product in productsWithAlignment"
      :key="product.id"
      :id="product.id"
      :name="product.name"
      :price="product.price"
      :picture="product.picture"
      :right-side-picture="product.alignRight"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ProductWidget from '@/components/ProductWidget.vue';
import LoadingAnimation from '@/components/LoadingAnimation.vue';

export default {
  components: {
    ProductWidget,
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
    ...mapState({
      products: 'products',
    }),
    productsWithAlignment() {
      return this.products.map((product, index) => {
        const isOdd = index % 2 !== 0;
        return {
          ...product,
          alignRight: isOdd,
        };
      });
    },
  },
  methods: {
    ...mapActions({
      fetchProducts: 'fetchProducts',
    }),
  },
};
</script>
