<template>
  <body class="black">
    <HeaderBar />
    <SocialBar />
    <main></main>
    <FooterBar2 />
  </body>
</template>

<style scoped>
body.black {
  background-image: url("/src/images/noise-fallback.jpg");
  display: block;
  width: 100vw;
  height: auto;
  top: 0;
  left: 0;
}
</style>

<script>
import FooterBar2 from "@/components/FooterBar2.vue";
import HeaderBar from "@/components/HeaderBar.vue";
import SocialBar from "@/components/SocialBar.vue";

export default {
  name: "ArchiveView",
  components: {
    FooterBar2,
    HeaderBar,
    SocialBar,
  },
  data() {
    return {
      pageTitle: "Releases Archive - FELDTED HQ",
    };
  },
  mounted() {
    document.title = this.pageTitle;
  },
};
</script>
