<template>
  <div>
    <h1 class="text-center uppercase tracking-wide font-bold text-gray-700">
      Our 1D Printer Products
    </h1>
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
import ProductWidget from '@/components/ProductWidget.vue';
import products from '@/assets/data/products.json';

export default {
  components: {
    ProductWidget,
  },
  data() {
    return {
      products,
    };
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
