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
    max-width: 1024px;
    position: relative;

    h1 {
      color: #fff;
      margin-bottom: 1rem;
    }

    button {
      width: 100%;
      color: #fff;
      padding: 1rem;
      background: none;
      letter-spacing: 1px;
      text-transform: uppercase;
      border: 1px solid #f0a966;
    }
  }
}
</style>
