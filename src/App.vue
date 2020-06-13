<template>
  <div id="app">
    <PageNavigation />
    <router-view />
    <PageFooter />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import PageNavigation from '@/components/PageNavigation.vue';
import PageFooter from '@/components/PageFooter.vue';

export default {
  components: {
    PageNavigation,
    PageFooter,
  },
  mounted() {
    this.loadCart();
  },
  methods: {
    ...mapActions({
      loadCart: 'loadCart',
    }),
  },
};
</script>
