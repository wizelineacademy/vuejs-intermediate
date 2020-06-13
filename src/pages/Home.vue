<template>
  <div class="home">
    <HomeHero />
    <ClientsTestimonials />
  </div>
</template>

<script>
import HomeHero from '@/components/HomeHero.vue';
import ClientsTestimonials from '@/components/ClientsTestimonials.vue';

export default {
  name: 'Home',
  components: {
    HomeHero,
    ClientsTestimonials,
  },
};
</script>
