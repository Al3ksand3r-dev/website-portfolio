<template>
  <div class="content">
    <button class="btn-contact">
      <h1>Any Questions?</h1>
      <span
        >If you have any questions regarding me, my services and/or like to
        hire, please contact me so I can tell you more.</span
      >
      <span class="text-orange">
        SAY HELLO
      </span>
    </button>
    <button>
      <h1>Reach out to me directly.</h1>
      <span>Phone: +46 76 582 50 56</span>
      <span>Mon-Fri: 9am - 5pm</span>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.content {
  gap: 4rem 0;
  max-width: 960px;
  button {
    margin: auto;
    width: 400px;
    height: 400px;
    padding: 2rem;
    display: flex;
    cursor: pointer;
    background: none;
    align-items: center;
    flex-direction: column;
    border: 1px solid #f0a966;
    justify-content: space-between;

    h1 {
      font-size: 1.8rem;
    }

    span {
      font-size: 1.3rem;
    }
  }
}

@media screen and (min-width: 1024px) {
  .content {
    gap: 0;
  }
}
</style>
