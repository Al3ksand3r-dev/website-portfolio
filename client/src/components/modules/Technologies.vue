<template>
  <article class="content">
    <h1>Technologies</h1>
    <div class="grid-item">
      <h2>Comfort knowledge</h2>
      <ul>
        <li v-for="(technology, index) in technologies" :key="index">
          {{ technology }}
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      technologies: [
        "HTML5",
        "CSS3/Sass/Scss",
        "Javascript",
        "ReactJS",
        "VueJS",
        "NodeJS",
        "PHP",
        "PWA",
        "Unit Testing",
        "Nedb database/MongoDB",
        "Photoshop (Basic)",
        "Version Control/Git",
        "Responsive Design",
        "Mobile First Design",
      ],
    };
  },
};
</script>

<style lang="scss"></style>
