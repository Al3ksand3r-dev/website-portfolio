<template>
  <div>
    <app-header :bgUrl="require('@/assets/showcase-contact.jpg')">
      <h1>Let's make a connection today.</h1>
    </app-header>
    <app-main>
      <contact-buttons />
    </app-main>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppMain from "@/components/AppMain.vue";
import ContactButtons from "@/components/modules/ContactButtons.vue";
export default {
  components: {
    AppHeader,
    AppMain,
    ContactButtons,
  },
};
</script>

<style lang="scss" scoped></style>
