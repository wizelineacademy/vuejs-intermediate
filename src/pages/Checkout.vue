<template>
  <div v-if="hasProducts" class="min-h-screen">
    <CheckoutTableProvider />
    <form
      @submit.prevent="submitOrder"
      class="font-sans text-sm rounded w-full max-w-md mx-auto my-8 px-8 pt-6 pb-8"
      novalidate
    >
      <FormInput
        v-model="email"
        :error="emailError"
        field-id="email"
        placeholder="Email"
        label="Email"
        type="email"
      />

      <FormInput
        v-model="phone"
        :error="phoneError"
        field-id="phone"
        placeholder="Phone"
        label="Phone"
        type="tel"
      />

      <div class="flex items-center justify-between">
        <button class="w-full bg-black hover:bg-black text-white py-2 px-4" type="submit">
          Buy
        </button>
      </div>
    </form>
  </div>
  <div v-else class="min-h-screen">
    <h1 class="text-5xl">You don't have any items in your Cart :(</h1>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { pages } from '@/router';
import CheckoutTableProvider from '@/components/CheckoutTableProvider.vue';
import FormInput from '@/components/FormInput.vue';
import emailValidator from '@/validators/emailValidator';
import phoneValidator from '@/validators/phoneValidator';

export default {
  name: 'Checkout',
  components: {
    CheckoutTableProvider,
    FormInput,
  },
  data() {
    return {
      shouldValidateForm: false,
      email: '',
      phone: '',
    };
  },
  methods: {
    ...mapActions({
      clearCart: 'clearCart',
    }),
    submitOrder() {
      this.shouldValidateForm = true;

      if (this.formIsValid) {
        // Here you should send the order to the database
        console.log('Order:');
        console.log(this.orderData);
        // and after that
        this.clearCart();
        this.$router.push(pages.THANKS);
      }
    },
  },
  computed: {
    ...mapGetters({
      numberOfItemsInCart: 'numberOfItemsInCart',
      itemsInCartById: 'itemsInCartById',
    }),
    hasProducts() {
      return this.numberOfItemsInCart > 0;
    },
    emailError() {
      if (!this.shouldValidateForm) {
        return '';
      }
      return emailValidator(this.email);
    },
    phoneError() {
      if (!this.shouldValidateForm) {
        return '';
      }
      return phoneValidator(this.phone);
    },
    formIsValid() {
      return this.emailError === '' && this.phoneError === '';
    },
    orderData() {
      return {
        email: this.email,
        phone: this.phone,
        items: this.itemsInCartById,
      };
    },
  },
};
</script>
