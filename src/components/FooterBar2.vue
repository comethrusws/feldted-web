<template>
  <footer class="footer">
    <div class="layout">
      <div class="grid">
        <div class="gridcell">
          <small class="footer-link">
            <a class="footer-links" href="/demodrop"
              >submit your demos to feldtedhq.com.np</a
            >
            <a class="footer-links"
              >Follow Us On &nbsp;<svg-icon
                style="height: 16px"
                type="mdi"
                :path="path"
              ></svg-icon
              >&nbsp;
              <svg-icon style="height: 16px" type="mdi" :path="path1"></svg-icon>&nbsp;
              <svg-icon style="height: 16px" type="mdi" :path="path2"></svg-icon>&nbsp;
              <svg-icon style="height: 16px" type="mdi" :path="path3"></svg-icon>&nbsp;
            </a>
          </small>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiInstagram } from "@mdi/js";
import { mdiSpotify } from "@mdi/js";
import { mdiYoutube } from "@mdi/js";
import { mdiFacebook } from "@mdi/js";

export default {
  name: "FooterBar2",
  components: {
    SvgIcon,
  },

  data() {
    return {
      path: mdiInstagram,
      path1: mdiSpotify,
      path2: mdiYoutube,
      path3: mdiFacebook,
    };
  },
};
</script>

<style scoped>
.footer {
  z-index: inherit;
  flex-grow: 0;
  flex-shrink: 0;
  margin-top: 2rem;
  padding: 2rem 0;
}

.layout {
  max-width: 90rem;
  margin: 0 auto;
  padding: 0 2rem;
}
.grid {
  display: block;
  list-style: none;
  padding: 0;
  margin: 0 0 0 -2rem;
  font-size: 0;
  text-align: center;
}
.gridcell {
  text-align: left;
  width: 66.66666667%;
  display: inline-block;
  padding: 0 0 0 2rem;
  margin: 0;
  vertical-align: top;
  font-size: 1rem;
}
.footer-link {
  color: white;
  display: flex;
  padding-top: 0.6rem;
  border-top: 1px solid rgba(255, 255, 255, 0.363);
  justify-content: space-between;
  font-size: 87%;
  font-weight: inherit;
  text-transform: uppercase;
  text-decoration: none;
}
.footer-links {
  color: white;
  display: flex;
  justify-content: space-between;
  font-size: 87%;
  font-weight: inherit;
  text-transform: uppercase;
  text-decoration: none;
}
@media (max-width: 767px) {
  .gridcell {
    display: inline-block;
    width: 100%;
    padding: 0 0 0 2rem;
    margin: 0;
    vertical-align: top;
    font-size: 1rem;
    box-sizing: border-box;
  }
  .footer-link {
    color: white;
    display: flex;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.363);
    justify-content: space-between;
  }
}
</style>
