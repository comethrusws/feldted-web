<template>
  <header class="header">
    <div class="layout">
      <div class="grid">
        <div class="grid-cell"></div>
        <div class="grid-cell align">
          <router-link to="/">
            <img src="@/images/header.png" alt="FELDTED HQ" class="logo" />
          </router-link>
        </div>
        <div class="grid-cell">
          <div class="links"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  color: #fff;
  padding: 1.75rem 0;
  z-index: 10;
}

.layout {
  max-width: 90rem;
  margin: 0 auto;
  padding: 0 4rem;
  position: relative;
}
.grid {
  display: block;
  list-style: none;
  padding: 0;
  margin: 0 0 0 -4rem;
}
.grid-cell {
  display: inline-block;
  width: 33.3333%;
  padding: 0 0 0 rem;
  margin: 0;
  vertical-align: middle;
  font-size: 1rem;
}
.align {
  text-align: center;
  padding-top: 0 !important;
}
.logo {
  width: 45%;
  height: auto;
  cursor: pointer;
  margin-top: 0.72rem;
  margin-left: 1rem;
}
.logo:hover {
  transition: ease-in-out 0.3s;
}
.links {
  font-size: 0.8rem;
  text-align: center;
  position: relative;
  text-align: right;
}
.links__label {
  color: rgba(255, 255, 255, 0.75);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  line-height: 1.5rem;
  height: 1.5rem;
  vertical-align: middle;
}

@media (max-width: 800px) {
  .logo {
    width: 100%;
    height: auto;
    cursor: pointer;
    margin-top: 0.72rem;
    margin-left: 1.5rem;
  }
  .logo:hover {
    transition: ease-in-out 0.3s;
  }
  .links__label {
    display: inline-block;
    margin-right: 0.75rem;
  }
}
</style>

<script>
export default {
  name: "HeaderBar",
};
</script>
