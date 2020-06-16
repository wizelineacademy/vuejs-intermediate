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
import axios from 'axios';
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
      products: [],
    };
  },
  async mounted() {
    const productsUrl = 'https://api.jsonbin.io/b/5ee6a8670e966a7aa3696b76';
    const productResponse = await axios.get(productsUrl);
    this.products = productResponse.data;
    this.loading = false;
  },
  computed: {
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
};
</script>
