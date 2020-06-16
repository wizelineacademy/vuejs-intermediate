<template>
  <section class="container max-w-xl m-auto my-8">
    <div
      :class="{ 'lg:flex-row-reverse': rightSidePicture }"
      class="font-sans flex flex-col
        lg:flex-row text-center lg:text-left sm:items-center"
    >
      <div class="w-full lg:w-1/2">
        <img class="m-auto" :src="`/img/products/${picture}`" />
      </div>
      <div
        class="w-full lg:w-1/2 flex flex-col justify-center items-start p-8
          items-center lg:items-start"
      >
        <label for="tagline" class="uppercase tracking-wide text-gray-700 font-bold">
          {{ name }}
        </label>
        <h1 class="my-4 font-normal">{{ price | toUSD }}</h1>
        <p v-if="description" class="leading-normal mb-4 text-gray-700">
          {{ description }}
        </p>
      </div>
    </div>

    <router-link v-if="showDetailsButton" :to="`${pages.SINGLE_PRODUCT}/${id}`">
      <button class="w-1/2 bg-white border border-solid border-black text-black py-2 px-4">
        Details
      </button>
    </router-link>
    <button
      @click="addToCart"
      class="w-1/2 bg-black border border-solid border-black text-white py-2 px-4"
    >
      Add to cart
    </button>
  </section>
</template>

<script>
import { pages } from '@/router';
import { mapActions } from 'vuex';
import toUSD from '@/filters/toUSD';

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    picture: {
      type: String,
      required: true,
    },
    rightSidePicture: {
      type: Boolean,
      default: false,
    },
    showDetailsButton: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      pages,
    };
  },
  filters: {
    toUSD,
  },
  methods: {
    ...mapActions({
      addItemToCart: 'addItemToCart',
    }),
    addToCart() {
      this.addItemToCart(this.id);
    },
  },
};
</script>
