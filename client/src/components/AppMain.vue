<template>
  <main class="main-container">
    <slot />
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss">
.main-container {
  gap: 5rem 0;
  display: grid;
  padding: 0 1rem;
  margin: 5rem auto;
  max-width: 1024px;
  grid-template-columns: 1fr;

  article,
  section {
    h1,
    h2 {
      font-weight: lighter;
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      margin: 2rem 0;
      font-size: 1.3rem;

      &:nth-child(2) {
        font-size: 1rem;
      }
    }

    p {
      line-height: 2;
      font-weight: bolder;
    }

    ul {
      padding-left: 20px;
      list-style: circle;

      li {
        padding: 0.5rem 0;
        font-weight: bolder;
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .main-container {
    padding: 0;
    .content {
      display: grid;
      justify-items: center;
      grid-template-columns: repeat(2, 1fr);

      h2 {
        margin: 0 0 2rem 0;
      }
    }
  }
}
</style>
