<template>
  <section class="font-sans container m-auto text-center py-8">
    <label for="tagline" class="uppercase tracking-wide font-bold text-gray-700">
      Clients Testimonials
    </label>
    <h1 class="mt-2 mb-4 font-medium max-w-sm m-auto">
      What our happy customers say about 1D Printer
    </h1>
    <hr class="border-b w-8 m-auto my-6" />

    <LoadingAnimation />

    <div class="flex flex-wrap justify-between items-start">
      <SingleTestimonial name="Fake Person" picture="jhon.jpg" description="lorem ipsum dolor" />
    </div>
  </section>
</template>

<script>
import SingleTestimonial from '@/components/SingleTestimonial.vue';
import LoadingAnimation from '@/components/LoadingAnimation.vue';
// testimonials data is at https://api.jsonbin.io/b/5ee82fab19b60f7aa95af952

export default {
  components: {
    SingleTestimonial,
    LoadingAnimation,
  },
};
</script>
