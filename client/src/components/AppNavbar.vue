<template>
  <nav>
    <div
      class="icon-burger"
      @click="$store.commit('TOGGLE_ASIDE')"
      :class="{ toggle: asideOpen }"
    >
      <div />
      <div />
      <div />
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: { ...mapState(["asideOpen"]) },
};
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
  position: absolute;
  padding: 2rem 1rem;
  align-items: center;
}
.icon-burger {
  cursor: pointer;
  margin-left: auto;
  transition: all 0.3s ease-in-out;

  div {
    width: 25px;
    height: 2px;
    margin: 6px 0;
    background: #fff;
  }

  &.toggle {
    transform: translateX(500px);
  }
}

@media screen and (min-width: 1024px) {
  nav {
    height: 100px;
    padding: 2rem 3rem;
  }

  .icon-burger {
    div {
      width: 30px;
      margin: 8px 0;
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      div {
        margin: 16px 0;
      }
    }
  }
}
</style>
