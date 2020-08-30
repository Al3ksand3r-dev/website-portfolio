<template>
  <div>
    <app-header :bgUrl="require('@/assets/showcase-main.jpg')">
      <h1>Let's start working together!</h1>
      <button class="btn-primary">
        Download CV <span class="lnr lnr-arrow-right"></span>
      </button>
    </app-header>
    <app-main>
      <Technologies />
      <Experiences />
      <Education />
    </app-main>
    <Contact />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppMain from "@/components/AppMain.vue";
import Technologies from "@/components/modules/Technologies.vue";
import Experiences from "@/components/modules/Experiences.vue";
import Education from "@/components/modules/Education.vue";
import Contact from "@/components/modules/Contact.vue";
export default {
  components: {
    AppHeader,
    AppMain,
    Technologies,
    Experiences,
    Education,
    Contact,
  },
};
</script>

<style lang="scss" scoped></style>
