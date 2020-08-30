<template>
  <div>
    <app-header :bgUrl="require('@/assets/showcase-main.jpg')">
      <h1>Let's start working together!</h1>
      <button>Download CV</button>
    </app-header>
    <app-main>
      <Technologies />
      <Experiences />
      <Education />
    </app-main>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppMain from "@/components/AppMain.vue";
import Technologies from "@/components/modules/Technologies.vue";
import Experiences from "@/components/modules/Experiences.vue";
import Education from "@/components/modules/Education.vue";
export default {
  components: {
    AppHeader,
    AppMain,
    Technologies,
    Experiences,
    Education,
  },
};
</script>

<style lang="scss" scoped></style>
