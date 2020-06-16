<template>
  <div class="container min-h-screen">
    <router-link to="/products">
      ← Back to Products
    </router-link>

    <LoadingAnimation v-if="loading" />

    <ProductWidget
      v-if="product"
      :id="product.id"
      :name="product.name"
      :price="product.price"
      :picture="product.picture"
      :description="product.description"
      :showDetailsButton="false"
    />

    <div v-if="showNotFound">
      Product not found :(
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ProductWidget from '@/components/ProductWidget.vue';
import LoadingAnimation from '@/components/LoadingAnimation.vue';

export default {
  name: 'SingleProduct',
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
  methods: {
    ...mapActions({
      fetchProducts: 'fetchProducts',
    }),
  },
  computed: {
    ...mapState({
      products: 'products',
    }),
    productsById() {
      const productsDictionary = {};
      this.products.forEach((product) => {
        productsDictionary[product.id] = product;
      });
      return productsDictionary;
    },
    product() {
      return this.productsById[this.$route.params.id];
    },
    showNotFound() {
      return !this.loading && !this.product;
    },
  },
};
</script>
