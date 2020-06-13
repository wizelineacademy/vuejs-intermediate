<template>
  <div class="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center justify-center p-4">
    <img class="w-14 h-14 rounded-full mr-4 bg-gray-300" :src="`/img/clients/${picture}`" alt="" />
    <h2 class="my-4 font-medium">{{ name }}</h2>
    <p class="leading-normal mb-4 text-gray-700">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  props: ['picture', 'name', 'description'],
};
</script>
