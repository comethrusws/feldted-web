<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <router-link to="/demodrop">demodrop</router-link>
  </div>
</template>

<script>
export default {
  name: "HomeView",
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
