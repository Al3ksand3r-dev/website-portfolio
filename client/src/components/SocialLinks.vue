<template>
  <ul class="social-links">
    <li>
      <a class="icon" href="#"><i class="fab fa-github"></i></a>
    </li>
    <li>
      <a class="icon" href="#"><i class="fab fa-linkedin-in"></i></a>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.social-links {
  display: flex;
}
.icon {
  width: 50px;
  height: 50px;
  display: flex;
  font-size: 1.5rem;
  background: #fff;
  border-radius: 50%;
  align-items: center;
  justify-content: center;

  i {
    color: #000;
  }
}
</style>
