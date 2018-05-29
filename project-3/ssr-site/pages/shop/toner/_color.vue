<template>
  <div>
    <section class="hero">
      <!-- TODO set bg color depending on the toner -->
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <!-- TODO set current color -->
            Black toner
          </h1>
          <a class="button is-warning">
            <!-- TODO add to cart -->
            Add to cart
          </a>
        </div>
      </div>
    </section>
    <div class="container">
      <!-- TODO set image -->
      <img src="~/assets/black-toner.jpg">
      <p>Lorem ipsum dolor sit amet.</p>
    </div>

  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `1D printer - Toner ${this.currentToner}`
    }
  }
}
</script>

<style scoped>
.title {
  text-transform: capitalize
}
</style>
