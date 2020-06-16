<template>
  <div class="container min-h-screen">
    <a href="/products">
      ← Back to Products
    </a>

    <LoadingAnimation />

    <ProductWidget
      :id="1"
      name="printer"
      :price="500"
      picture="printer.jpg"
      description="lorem ipsum dolor"
      :showDetailsButton="false"
    />

    <div>
      Product not found :(
    </div>
  </div>
</template>

<script>
import ProductWidget from '@/components/ProductWidget.vue';
import LoadingAnimation from '@/components/LoadingAnimation.vue';

export default {
  name: 'SingleProduct',
  components: {
    ProductWidget,
    LoadingAnimation,
  },
};
</script>
