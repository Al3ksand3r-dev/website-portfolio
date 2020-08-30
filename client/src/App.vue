<template>
  <div>
    <app-navbar />
    <app-aside />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import AppNavbar from "@/components/AppNavbar.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppAside from "@/components/AppAside.vue";
export default {
  components: {
    AppNavbar,
    AppFooter,
    AppAside,
  },
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
