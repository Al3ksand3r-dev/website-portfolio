<template>
  <section>
    <h2>{{ title }}</h2>
    <h2>{{ description }}</h2>
    <p>{{ text }}</p>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Experience title goes here",
    },
    description: {
      type: String,
      default: "Description of text content",
    },
    text: {
      type: String,
      default: "Text content body",
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  margin: 5rem 0;
}

@media screen and (min-width: 1024px) {
  section {
    margin: 0 0 5rem 0;
  }
}
</style>
