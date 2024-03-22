<template>
  <body class="black">
    <HeaderBar />
    <SocialBar />

    <main>
      <section class="section">
        <div class="layout">
          <div class="releases">
            <div class="grid">
              <div class="grid__cell -width">
                <figure class="relase__figure">
                  <img
                    src="../images/Past Releases/Vigilante(006).png"
                    alt="Cover SYRENS & ALLGUD - Vigilante"
                    style="width: 200px"
                  />
                </figure>
                <div class="release__info">
                  <div class="release__info__date">2021</div>
                  <h3 class="release__info__h3">
                    SYRENS & ALLGUD
                    <br />
                    Vigilante
                  </h3>
                </div>
              </div>
              <div class="grid__cell -width">
                <figure class="relase__figure">
                  <img
                    src="../images/Past Releases/AfterLife (005).jpg"
                    alt="Cover Bombega - Afterlife"
                    style="width: 200px"
                  />
                </figure>
                <div class="release__info">
                  <div class="release__info__date">2020</div>
                  <h3 class="release__info__h3">
                    Bombega
                    <br />
                    Afterlife
                  </h3>
                </div>
              </div>
              <div class="grid__cell -width">
                <figure class="relase__figure">
                  <img
                    src="../images/Past Releases/Waiting(004).jpg"
                    alt="Cover CLIDUS & Grey Arthur Waiting"
                    style="width: 200px"
                  />
                </figure>
                <div class="release__info">
                  <div class="release__info__date">2020</div>
                  <h3 class="release__info__h3">
                    CLIDUS & Grey Arthur
                    <br />
                    Waiting
                  </h3>
                </div>
              </div>
              <div class="grid__cell -width">
                <figure class="relase__figure">
                  <img
                    src="../images/Past Releases/Say My Name(003).jpg"
                    alt="Cover Hilton Reed - Say My Name"
                    style="width: 200px"
                  />
                </figure>
                <div class="release__info">
                  <div class="release__info__date">2020</div>
                  <h3 class="release__info__h3">
                    Hilton Reed
                    <br />
                    Say My Name
                  </h3>
                </div>
              </div>
              <div class="grid__cell -width">
                <figure class="relase__figure">
                  <img
                    src="../images/Past Releases/Im Going Down(002).jpg"
                    alt="Cover NIKSON - Im Going Down"
                    style="width: 200px"
                  />
                </figure>
                <div class="release__info">
                  <div class="release__info__date">2020</div>
                  <h3 class="release__info__h3">
                    NIKSON
                    <br />
                    I'm Going Down
                  </h3>
                </div>
              </div>
              <div class="grid__cell -width">
                <figure class="relase__figure">
                  <img
                    src="../images/Past Releases/Resurrection (FLTD001).jpg"
                    alt="Cover Beau Feldt - Resurrection"
                    style="width: 200px"
                  />
                </figure>
                <div class="release__info">
                  <div class="release__info__date">2020</div>
                  <h3 class="release__info__h3">
                    Beau Feldt
                    <br />
                    Resurrection
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section2">
        <section class="section2">
          <div class="layout">
            <div class="cta">
              <div class="cta__button">
                <button class="btn"><a href="/" class="bt">Back to home</a></button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>

    <FooterBar2 />
  </body>
</template>

<style scoped>
.release__info__h3 {
  font-size: 1.4rem;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
}
.release__info__date {
  display: block;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  text-align: left;
}
.release__info {
  display: block;
  padding: 1.75rem;
  width: 47%;
}
.release__figure img {
  width: 40%;
  display: block;
  cursor: pointer;
}
.-width {
  width: 50%;
}
.releases {
  display: flexbox;
  cursor: pointer;
  flex-direction: row-reverse;
  -webkit-perspective: 1000px;
  perspective: 1000px;
}
.btn {
  align-items: center;
  margin-top: 2rem;
  display: inline-block;
  padding: 10px 20px;
  background-color: #000000;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: inherit;

  border-radius: 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.btn:hover {
  background-color: #071808;
}
.bt {
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: inherit;
  text-transform: uppercase;
}

.cta {
  padding: 0 0 5em;
  text-align: center;
}
body.black {
  background-image: url("/src/images/noise-fallback.jpg");
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
  margin: 0 0 4 0rem;
  font-size: 0;
  margin-top: 2rem;
}

.layout {
  max-width: 90rem;
  margin: 0 auto;
  padding: 0 4rem;
}
.section {
  padding: 3rem 0;
  color: #fff;
  padding-top: 0 !important;
}
.section2 {
  padding: 1rem 0;
  color: #fff;
  padding-top: 0 !important;
}

.grid__cell {
  display: inline-flex;
  margin: 0;
  vertical-align: top;
  font-size: 1rem;
  width: 50%;
  margin-top: 1rem;
}

@media (min-width: 800px) {
  .section {
    padding: 3rem 0;
    padding-top: 3rem;
  }
}

@media (max-width: 500px) {
  .release__info__date {
    display: block;
    color: rgba(255, 255, 255, 0.75);
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    text-align: center;
  }

  .release__info__h3 {
    font-size: 1.1rem;
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
  }

  .release__info {
    display: block;
    padding: 1rem;
    width: 130%;
    align-items: center;
  }

  .grid__cell {
    display: block;
    margin: 0;
    font-size: 1rem;
    width: 50%;
  }

  .releases {
    display: block;
    -webkit-perspective: 1000px;
    perspective: 1000px;
    margin-left: 3rem;
  }

  .btn {
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 5rem;
    margin-right: 0rem;
    display: inline-block;
    padding: 10px 20px;
    background-color: #000000;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: inherit;

    border-radius: 20px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .btn:hover {
    background-color: #071808;
  }
  .bt {
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: inherit;
    text-transform: uppercase;
  }
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
