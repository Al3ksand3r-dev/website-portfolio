<template>
  <footer>
    <div class="content">
      <h1>It's time to build the website you need.</h1>
      <AppLinks />
      <span class="copyright"
        >&copy; 2019 | Created by Aleksander Dimitrijevic | All rights
        reserved.</span
      >
      <social-links />
    </div>
  </footer>
</template>

<script>
import AppLinks from "@/components/AppLinks.vue";
import SocialLinks from "@/components/SocialLinks.vue";
export default {
  components: {
    AppLinks,
    SocialLinks,
  },
};
</script>

<style lang="scss" scoped>
footer {
  color: #fff;
  text-align: center;
  padding: 8rem 1rem;
  background: #1b1a1a;

  .content {
    width: 100%;
    margin: auto;
    max-width: 1024px;

    h1 {
      font-size: 2rem;
    }

    /deep/ ul.social-links,
    /deep/ ul.nav-links {
      display: flex;
      margin: 5rem 0;
      list-style: none;
      justify-content: center;

      a {
        color: #fff;
        margin: 0 1rem;
        text-transform: uppercase;
      }
    }

    /deep/ ul.social-links {
      margin-bottom: 0;
      display: inline-flex;
    }

    .copyright {
      color: #777;
      display: block;
      font-size: 0.8rem;
    }
  }
}

@media screen and (min-width: 1024px) {
  footer {
    .content {
      h1 {
        font-size: 3rem;
      }
    }
  }
  /deep/ ul.social-links {
    display: inline-flex;
    a,
    i {
      transition: 0.3s ease;
    }
    &:hover {
      a {
        background: #555;
        i {
          color: #333;
        }

        &:hover {
          background: #fff;

          i {
            color: #000;
          }
        }
      }
    }
  }
}
</style>
