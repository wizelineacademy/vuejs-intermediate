<template>
  <div class="min-h-screen">
    <CheckoutTableProvider />

    <form class="font-sans text-sm rounded w-full max-w-md mx-auto my-8 px-8 pt-6 pb-8" novalidate>
      <FormInput error="" field-id="email" placeholder="Email" label="Email" type="email" />

      <FormInput error="" field-id="phone" placeholder="Phone" label="Phone" type="tel" />

      <div class="flex items-center justify-between">
        <button class="w-full bg-black hover:bg-black text-white py-2 px-4" type="submit">
          Buy
        </button>
      </div>
    </form>
  </div>
  <!-- empty cart message -->
  <!-- <div class="min-h-screen">
    <h1 class="text-5xl">You don't have any items in your Cart :(</h1>
  </div> -->
</template>

<script>
import CheckoutTableProvider from '@/components/CheckoutTableProvider.vue';
import FormInput from '@/components/FormInput.vue';

// import emailValidator from '@/validators/emailValidator';
// import phoneValidator from '@/validators/phoneValidator';

export default {
  name: 'Checkout',
  components: {
    CheckoutTableProvider,
    FormInput,
  },
  methods: {
    submitOrder() {
      // if form is valid
      // Here you should send the order to the database
      console.log('Order:');
      // and after that go to the thank you page
    },
  },
};
</script>
