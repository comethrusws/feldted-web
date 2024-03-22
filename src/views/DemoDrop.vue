<template>
<div>
  <body class="black">
    <NavBar/>
    <div class="grid">
      <div class="gridcell">
        <header class="mast">
          <h1>DEMO DROP</h1>
          <p>
            Send in your original demo tracks for review. We're not accepting remixes or bootlegs.
          </p>
        </header>
        <div class="pane-container">
          <div class="pane">
            <h3>Connect</h3>
            <p>
              We review demos submitted to us via SoundCloud.
              <br>
              Don't Use SoundCloud yet?
              <a href="https://soundcloud.com" target="_blank">Create One</a>
            </p>
            <div class="panehelp">
              <label class="custom-checkbox">
                <input type="checkbox" />
                <span class="checkmark">
                  <div class="checkmark-stem"></div>
                  <div class="checkmark-kick"></div>
                </span>
                <p>
                  By connecting, you agree to our
                  <a href="/terms-of-use">Terms of Use</a> and our
                  <a href="/privacy-policy">Privacy & Cookie Policy</a>
                </p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterBar/>
    </body>
    
</div>
</template>

<style scoped>
body.black {
  background-image: url('/src/images/noise-black.jpg');
  display: block;
  width: 100vw;
  height: auto;
  top: 0;
  left: 0;
}

.grid {
  display: block;
  list-style: none;
  padding: 0;
  margin: 0 0 0 -2rem;
  font-size: 0;
  text-align: center;
}
.gridcell{
  display: inline-block;
  width: 100%;
  padding: 0 0 0 2rem;
  margin: 0;
  vertical-align: top;
  font-size: 1rem;
  width: 66.66666667%;
}
.mast {
  margin: 2rem 0 4rem;
  text-align: center;
}
.mast h1, .mast p, .pane {
  color: #fff;
}
p{
  margin-top: 1rem;
}
.pane-container {
  z-index: 10;
}
.pane {
  margin: 2rem 0;
  padding: 4rem;
  border-radius: 3px;
  background-color: rgba(255,255,255,.05);
}
.pane h3 {
  font-weight: 700;
  margin-bottom: 1em;
  padding-top: 1rem;
  border-top: 1px solid rgba(255,255,255,.15);
  text-transform: uppercase;
}
.pane p{
  font-size: 1.15rem;
}
.pane a{
  color: rgba(255,255,255,.75);
}
.panehelp {
  font-size: .8rem;
  margin-top: 4rem !important;
}

.custom-checkbox {
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 0px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.custom-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkmark {
  position: absolute;
  top: 0;
  left: 90px;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 4px;
}

.custom-checkbox:hover input ~ .checkmark {
  background-color: #ccc;
}

.custom-checkbox input:checked ~ .checkmark {
  background-color: #1c9941;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.custom-checkbox input:checked ~ .checkmark:after {
  display: block;
}

.custom-checkbox .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.panehelp p{
  font-size: .8rem;
  color: #fff;
  font-weight: 200;
  text-transform: uppercase;
}
.panehelp a{
  color: rgba(255,255,255,.75);
}


@media (max-width: 767px){
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 4px;
  }
  
}

</style>

<script>
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'

export default {
    name: 'DemoDrop',
    components:{
      NavBar, FooterBar,
    },
    data() {
    return {
      pageTitle: 'Demo FELDTED HQ'
    };
  },
  mounted() {
    document.title = this.pageTitle;
  }
}
</script>
