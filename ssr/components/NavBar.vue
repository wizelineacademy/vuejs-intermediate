<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        1D Printer
      </nuxt-link>
    </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link class="navbar-item" to="/shop">
          Toner store
        </nuxt-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <nuxt-link to="/shop">
            <img src="~/assets/cart-icon.png">
            <span>0 items</span>
          </nuxt-link>
        </div>
      </div>
    </div>

  </nav>
</template>
