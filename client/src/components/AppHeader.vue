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

<style lang="scss" scoped>
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
      margin-bottom: 1rem;
    }

    button {
      width: 100%;
      color: #fff;
      padding: 1rem;
      display: flex;
      cursor: pointer;
      background: none;
      align-items: center;
      letter-spacing: 1px;
      justify-content: center;
      text-transform: uppercase;
      border: 1px solid #f0a966;

      span {
        opacity: 0;
        color: #000;
        font-size: 1.3rem;
        visibility: hidden;
        transition: 0.3s ease;
      }
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

      button {
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
  }
}
</style>
