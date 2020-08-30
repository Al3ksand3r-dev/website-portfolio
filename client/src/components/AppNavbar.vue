<template>
  <nav>
    <div class="icon-burger">
      <div />
      <div />
      <div />
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  height: 50px;
  display: flex;
  background: none;
  padding: 2rem 1rem;
  position: absolute;
  align-items: center;
}
.icon-burger {
  cursor: pointer;
  margin-left: auto;

  div {
    width: 25px;
    height: 2px;
    margin: 6px 0;
    background: #fff;
  }
}
</style>
