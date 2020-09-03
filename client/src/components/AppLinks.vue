<template>
  <ul class="nav-links">
    <li v-for="(link, idx) in links" :key="idx">
      <router-link :to="{ name: link.name }" @click.native="closeSideMenu">{{
        link.label
      }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: "Home",
          label: "Home",
        },
        {
          name: "contact",
          label: "Contact",
        },
      ],
    };
  },
  methods: {
    closeSideMenu() {
      this.$store.getters.closeSideMenu;
    },
  },
};
</script>

<style lang="scss" scoped></style>
