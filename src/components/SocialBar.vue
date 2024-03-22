<template>
  <div class="follow-us">
    <div class="social-icons">
      <p class="follow-us-text">Follow Us On</p>
      &nbsp;
      <a href="https://instagram.com/feldtedhq" class="social-icon"
        ><svg-icon style="height: 16px" type="mdi" :path="path"></svg-icon>
      </a>
      <a href="#" class="social-icon"
        ><svg-icon style="height: 16px" type="mdi" :path="path1"></svg-icon>
      </a>
      <a href="https://www.youtube.com/channel/UCeTpoe4H0lEIAmwgOhlAhdA"
        ><svg-icon style="height: 16px" type="mdi" :path="path2"></svg-icon>
      </a>
      <a href="#"><svg-icon style="height: 16px" type="mdi" :path="path3"></svg-icon> </a>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 800px) {
  .follow-us {
    text-align: center;
    margin-left: 3rem;
  }

  .follow-us-text {
    margin-bottom: 0px;
    font-size: 16px;
    margin-top: 0;
    color: rgba(211, 211, 211, 0.822);
    text-transform: uppercase;
  }

  .social-icons {
    display: flex;
    justify-content: center;
  }
  a {
    text-decoration: none;
    color: rgba(211, 211, 211, 0.822);
  }
}

.follow-us {
  text-align: center;
  margin-right: 3rem;
}

.follow-us-text {
  margin-bottom: 0px;
  font-size: 14px;
  margin-top: 0;
  color: rgba(211, 211, 211, 0.822);
  text-transform: uppercase;
}

.social-icons {
  display: flex;
  justify-content: center;
}
a {
  text-decoration: none;
  color: rgba(211, 211, 211, 0.822);
}
</style>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiInstagram } from "@mdi/js";
import { mdiSpotify } from "@mdi/js";
import { mdiYoutube } from "@mdi/js";
import { mdiFacebook } from "@mdi/js";

export default {
  name: "SocialBar",
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
