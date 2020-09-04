<template>
  <aside :class="{ toggle: asideOpen }">
    <div class="close-aside" @click="$store.commit('TOGGLE_ASIDE')">&times;</div>
    <app-links />
  </aside>
</template>

<script>
import AppLinks from "@/components/AppLinks.vue";
import { mapState } from "vuex";
export default {
  components: {
    AppLinks,
  },
  computed: { ...mapState(["asideOpen"]) },
};
</script>

<style lang="scss" scoped>
aside {
  top: 0;
  right: 0;
  opacity: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  visibility: hidden;
  background: rgba(#000, 0.99);

  .close-aside {
    top: 0;
    opacity: 0;
    right: 2rem;
    color: #fff;
    font-size: 4rem;
    cursor: pointer;
    position: absolute;
    visibility: hidden;
    transform: translateY(50px);
  }

  /deep/ ul.nav-links {
    margin: auto;
    text-align: center;

    li {
      opacity: 0;
      transition: all 0.5s ease;
      transform: translateX(-50px);
    }

    a {
      color: #fff;
      margin: 4rem 0;
      display: block;
      font-size: 2rem;
      font-weight: lighter;
    }
  }

  &.toggle {
    opacity: 1;
    overflow-x: hidden;
    visibility: visible;
    transition: all 0.3s ease-in-out;

    .close-aside {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
      transition: all 0.5s ease-in-out;
    }

    /deep/ ul.nav-links {
      li {
        opacity: 1;
        transform: translateX(0);
        @for $x from 1 through 3 {
          &:nth-child(#{$x}) {
            transition-delay: $x * 0.1s;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  aside {
    .close-aside {
      top: 0;
      right: 3rem;
      font-size: 5rem;
    }
    /deep/ ul.nav-links {
      a {
        font-size: 3rem;
        margin: 6rem 0;
        position: relative;

        &::before {
          left: 0;
          bottom: 0;
          content: "";
          width: 0;
          height: 2px;
          position: absolute;
          background: #fff;
          visibility: hidden;
          transition: all 0.3s ease-in-out;
        }

        &:hover::before {
          width: 100%;
          visibility: visible;
        }
      }
    }
  }
}
</style>
