<template>
  <div>
    <h1 class="text-center uppercase tracking-wide font-bold text-gray-700">
      Our 1D Printer Products
    </h1>
    <LoadingAnimation />
    <ProductWidget
      :id="1"
      name="1D Printer"
      :price="500"
      picture="printer.jpg"
      :right-side-picture="false"
    />
  </div>
</template>

<script>
import ProductWidget from '@/components/ProductWidget.vue';
import LoadingAnimation from '@/components/LoadingAnimation.vue';
// products are at https://api.jsonbin.io/b/5ee6a8670e966a7aa3696b76

export default {
  components: {
    ProductWidget,
    LoadingAnimation,
  },
};
</script>
