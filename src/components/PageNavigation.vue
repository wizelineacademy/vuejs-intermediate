<template>
  <nav
    class="font-sans bg-white text-center flex justify-between
        items-center my-4 mx-auto container overflow-hidden pl-3 pr-3"
  >
    <router-link :to="pages.HOME">
      <span class="font-black text-2xl">1D Printer</span>
    </router-link>
    <ul class="text-sm text-gray-700 list-none p-0 flex items-center">
      <li>
        <router-link :to="pages.PRODUCTS">
          <span class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">
            Products
          </span>
        </router-link>
      </li>
    </ul>
    <ul class="text-sm text-gray-700 list-none p-0 flex items-center">
      <li>
        <router-link :to="pages.BUY">
          <button class="bg-black hover:bg-text-gray-800 text-white ml-4 py-2 px-3">
            Buy
          </button>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { pages } from '@/router';

export default {
  data() {
    return {
      pages,
    };
  },
};
</script>
