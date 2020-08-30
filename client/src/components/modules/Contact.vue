<template>
  <article>
    <h1>Want to contact me?</h1>
    <p>
      I hope that you as my future client or employer feel intrested in what I
      do and what I have done in the past. With me, you will see a creative and
      ever passionate developer wanting to learn more by each day. Hope to talk
      to you soon.
    </p>

    <button class="btn-primary">
      Contact Me <span class="lnr lnr-arrow-right"></span>
    </button>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
article {
  width: 100%;
  padding: 0 1rem;
  max-width: 660px;
  margin: 5rem auto;
  text-align: center;

  h1 {
    font-size: 2rem;
  }

  p {
    margin: 4rem 0;
    line-height: 2;
    font-size: 1rem;
    text-align: center;
  }

  .btn-primary {
    margin: auto;
  }
}

@media screen and (min-width: 1024px) {
  article {
    h1 {
      font-size: 5rem;
    }

    p {
      font-size: 1.3rem;
    }
  }
}
</style>
