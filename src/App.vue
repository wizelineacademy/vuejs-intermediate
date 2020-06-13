<template>
  <div id="app">
    <PageNavigation />
    <router-view />
    <PageFooter />
  </div>
</template>

<script>
import PageNavigation from '@/components/PageNavigation.vue';
import PageFooter from '@/components/PageFooter.vue';

export default {
  components: {
    PageNavigation,
    PageFooter,
  },
};
</script>
