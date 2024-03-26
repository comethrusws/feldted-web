<template>
  <body class="black">
    <NavBar />
    <SocialBar2 />
    <FooterBar2 />
  </body>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import SocialBar2 from "@/components/SocialBar2.vue";
import FooterBar2 from "@/components/FooterBar2.vue";

export default {
  name: "HomeView",
  components: { NavBar, SocialBar2, FooterBar2 },

  data() {
    return {
      pageTitle: "Latest Releases - FELDTED HQ",
    };
  },
  mounted() {
    document.title = this.pageTitle;
  },
};
</script>

<style scoped>
body.black {
  background-image: url("/src/images/bg.gif");
  filter: hue-rotate(133deg);
  background-blend-mode: darken;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  width: 100vw;
  height: auto;
  top: 0;
  left: 0;
}
</style>
