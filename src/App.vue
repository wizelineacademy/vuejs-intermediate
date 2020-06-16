<template>
  <div id="app">
    <PageNavigation />
    <HomeView />
    <PageFooter />
  </div>
</template>

<script>
import HomeView from '@/pages/Home.vue';
import PageNavigation from '@/components/PageNavigation.vue';
import PageFooter from '@/components/PageFooter.vue';

export default {
  components: {
    PageNavigation,
    PageFooter,
    HomeView,
  },
};
</script>
