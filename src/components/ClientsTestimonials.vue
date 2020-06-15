<template>
  <section class="font-sans container m-auto text-center py-8">
    <label for="tagline" class="uppercase tracking-wide font-bold text-gray-700">
      Clients Testimonials
    </label>
    <h1 class="mt-2 mb-4 font-medium max-w-sm m-auto">
      What our happy customers say about 1D Printer
    </h1>
    <hr class="border-b w-8 m-auto my-6" />

    <LoadingAnimation v-if="loading" />

    <div class="flex flex-wrap justify-between items-start">
      <SingleTestimonial
        v-for="client in clients"
        :key="client.id"
        :name="client.name"
        :picture="client.picture"
        :description="client.description"
      />
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import SingleTestimonial from '@/components/SingleTestimonial.vue';
import LoadingAnimation from '@/components/LoadingAnimation.vue';

export default {
  components: {
    SingleTestimonial,
    LoadingAnimation,
  },
  data() {
    return {
      clients: [],
      loading: true,
    };
  },
  async mounted() {
    const clientsApiUrl = 'https://api.jsonbin.io/b/5ee6a84319b60f7aa95a1319';
    const clientsApiResponse = await axios.get(clientsApiUrl);
    this.clients = clientsApiResponse.data;
    this.loading = false;
  },
};
</script>
