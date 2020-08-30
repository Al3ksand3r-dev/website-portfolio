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
  padding: 5rem 1rem;
  background: #eee;

  .content {
    width: 100%;
    display: grid;
    margin: 0 auto;
    max-width: 1440px;
    grid-template-columns: 1fr;

    &:first-child {
      margin: 3rem 0 5rem 0;
    }
  }

  .content,
  section {
    h1,
    h2 {
      font-weight: lighter;
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.3rem;
      margin: 2rem 0 1rem 0;
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

  section {
    margin: 5rem 0;
  }
}

@media screen and (min-width: 1024px) {
  .main-container {
    padding: 5rem 2rem;
    .content {
      margin: 10rem auto 2rem auto;
      grid-template-columns: repeat(2, 1fr);

      h1 {
        text-align: center;
      }

      h2 {
        margin: 0 0 2rem 0;
      }

      &:first-child {
        margin: 3rem auto;
      }

      .grid-item {
        margin-top: 0.5rem;
      }
      section {
        margin: 0 0 5rem 0;
      }
    }
  }
}
</style>
