<template>
  <section class="section">
    <div class="container">

      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <div class="tile is-child box">
            <img src="~/assets/black-toner.jpg" alt="black toner">
            <a class="button details-button is-info" href="/shop/toner/black">
              Details
            </a>
          </div>
        </div>

        <div class="tile is-parent">
          <div class="tile is-child box">
            <img src="~/assets/cyan-toner.jpg" alt="cyan toner">
            <a class="button details-button is-info" href="/shop/toner/cyan">
              Details
            </a>
          </div>
        </div>

        <div class="tile is-parent">
          <div class="tile is-child box">
            <img src="~/assets/magenta-toner.jpg" alt="magenta toner">
            <a class="button details-button is-info" href="/shop/toner/magenta">
              Details
            </a>
          </div>
        </div>

        <div class="tile is-parent">
          <div class="tile is-child box">
            <img src="~/assets/yellow-toner.jpg" alt="yellow toner">
            <a class="button details-button is-info" href="/shop/toner/yellow">
              Details
            </a>
          </div>
        </div>
      </div>

      <!-- TODO add list of items in cart -->

    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: '1D printer - shop'
    }
  }
}
</script>

<style scoped>
.tile.is-child.box {
  position: relative;
}
.details-button {
  position: absolute;
  bottom: 20px;
  right: 20px;
}
</style>
