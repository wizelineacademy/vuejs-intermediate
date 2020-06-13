<template>
  <div class="container min-h-screen">
    <router-link :to="pages.PRODUCTS">
      ← Back to Products
    </router-link>
    <ProductWidget
      :id="product.id"
      :name="product.name"
      :price="product.price"
      :picture="product.picture"
      :description="product.description"
      :showDetailsButton="false"
    />
  </div>
</template>

<script>
import { pages } from '@/router';
import products from '@/assets/data/products.json';
import ProductWidget from '@/components/ProductWidget.vue';

export default {
  name: 'SingleProduct',
  components: {
    ProductWidget,
  },
  data() {
    return {
      pages,
      product: {},
    };
  },
  beforeRouteEnter(to, from, next) {
    const productId = parseInt(to.params.id, 10);
    const foundProduct = products.find((product) => product.id === productId);
    if (foundProduct) {
      next((component) => {
        // we don't have access to the "this" here
        // so we need to modify directly the component instance

        // eslint-disable-next-line no-param-reassign
        component.product = foundProduct;
      });
    } else {
      next(pages.ERROR);
    }
  },
};
</script>
