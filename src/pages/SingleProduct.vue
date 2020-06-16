<template>
  <div class="container min-h-screen">
    <router-link :to="pages.PRODUCTS">
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

    <div v-if="showError">
      Product not found :(
    </div>
  </div>
</template>

<script>
import { pages } from '@/router';
import { mapGetters, mapActions } from 'vuex';
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
      pages,
      loading: true,
    };
  },
  async mounted() {
    await this.fetchProducts();
    this.loading = false;
  },
  computed: {
    ...mapGetters({
      productsById: 'productsById',
    }),
    product() {
      return this.productsById[this.$route.params.id];
    },
    showError() {
      if (this.loading || this.product) {
        return false;
      }
      return true;
    },
  },
  methods: {
    ...mapActions({
      fetchProducts: 'fetchProducts',
    }),
  },
  // beforeRouteEnter(to, from, next) {
  //   const productId = parseInt(to.params.id, 10);
  //   const foundProduct = products.find((product) => product.id === productId);
  //   if (foundProduct) {
  //     next((component) => {
  //       // we don't have access to the "this" here
  //       // so we need to modify directly the component instance

  //       // eslint-disable-next-line no-param-reassign
  //       component.product = foundProduct;
  //     });
  //   } else {
  //     next(pages.ERROR);
  //   }
  // },
};
</script>
