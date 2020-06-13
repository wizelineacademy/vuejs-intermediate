<template>
  <section class="font-sans container m-auto text-center py-8">
    <label for="tagline" class="uppercase tracking-wide font-bold text-gray-700">
      Clients Testimonials
    </label>
    <h1 class="mt-2 mb-4 font-medium max-w-sm m-auto">
      What our happy customers say about 1D Printer
    </h1>
    <hr class="border-b w-8 m-auto my-6" />
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
import SingleTestimonial from '@/components/SingleTestimonial.vue';

const clients = [
  {
    id: 1,
    name: 'Jhon Doe',
    picture: 'jhon.jpg',
    description: 'Best product ever!!!1!',
  },
  {
    id: 2,
    name: 'Peter Parker',
    picture: 'peter.jpg',
    description: 'No more curved lines, thanks 1D Printer.',
  },
  {
    id: 3,
    name: 'Bruce Wayne',
    picture: 'bruce.jpg',
    description: 'This printer has the darkest lines ever!',
  },
  {
    id: 4,
    name: 'Simple Rick',
    picture: 'rick.jpg',
    description: "I love 1D Printer, I don't want the complexity of 2D and 3D printers.",
  },
];

export default {
  components: {
    SingleTestimonial,
  },
  data() {
    return {
      clients,
    };
  },
};
</script>
