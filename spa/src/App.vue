<template>
  <div>

    <product-hero />

    <section class="section">
      <div class="container">

        <product-form />

      </div>
    </section>
  </div>
</template>

<script>
import ProductHero from './components/ProductHero'
import ProductForm from './components/ProductForm'

export default {
  components: {
    ProductHero,
    ProductForm
  }
}
</script>
