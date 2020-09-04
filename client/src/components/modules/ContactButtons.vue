<template>
  <div class="content">
    <button>
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
    width: 100%;
    margin: auto;
    padding: 1rem;
    display: flex;
    height: 300px;
    cursor: pointer;
    max-width: 400px;
    transition: 0.3s;
    background: none;
    flex-direction: column;
    justify-content: space-around;
    border: 1px solid #f0a966;

    h1 {
      font-size: 1.8rem;
    }

    span {
      font-size: 1rem;
      line-height: 1.5;
      text-align: left;
      font-weight: lighter;
    }

    span.text-orange {
      color: #f0a966;
    }

    &:nth-of-type(1) {
      &:hover {
        color: #fff;
        background: #222;
        border-color: #222;
      }
    }

    &:nth-of-type(2) {
      cursor: default;
      align-items: center;
      h1 {
        font-size: 1rem;
        font-size: 1.8rem;
      }
      section {
        width: 100%;
        span {
          display: block;
          font-size: 1rem;
          text-align: center;
          margin-bottom: 1rem;
        }
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .content {
    gap: 0;
  }
}
</style>
