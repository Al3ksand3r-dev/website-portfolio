<template>
  <header :style="{ backgroundImage: `url(${bgUrl})` }" class="container">
    <div class="container-content">
      <slot />
    </div>
  </header>
</template>

<script>
export default {
  props: {
    bgUrl: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss">
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  background: no-repeat center center/cover;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(#000, 0.8);
  }

  &-content {
    margin: auto;
    padding: 0 1rem;
    max-width: 1440px;
    position: relative;

    h1 {
      color: #fff;
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .btn-primary {
      color: #fff;
    }
  }
}

@media screen and (min-width: 1024px) {
  .container {
    &-content {
      margin: auto auto 15rem 5rem;

      h1 {
        width: 760px;
        font-size: 5rem;
      }
    }
  }

  .btn-primary {
    width: 320px;
    padding: 1.5rem 1rem;
    transition: 0.3s ease;

    &:hover {
      color: #000;
      background: #f0a966;

      span {
        opacity: 1;
        color: #000;
        margin-left: 2rem;
        visibility: visible;
      }
    }
  }
}
</style>
