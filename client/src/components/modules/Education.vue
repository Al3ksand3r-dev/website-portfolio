<template>
  <article class="content">
    <h1>Education</h1>
    <div class="grid-item">
      <TextContent
        title="WEB DEVELOPMENT - WEB SECURITY"
        description="JENSEN EDUCATION, Kista, Stockholm"
        text="- PRESENT"
      />
      <TextContent
        title="WEB DEVELOPMENT"
        description="NTI SKOLAN, Stockholms Stad, Stockholm"
        text="2017 - 2018"
      />
      <TextContent
        title="DATA SCIENCE"
        description="NACKA GYMNASIUM, Nacka, Stockholm"
        text="2004 - 2007"
      />
    </div>
  </article>
</template>

<script>
import TextContent from "@/components/modules/SubModules/TextContent.vue";
export default {
  components: {
    TextContent,
  },
};
</script>

<style lang="scss" scoped></style>
