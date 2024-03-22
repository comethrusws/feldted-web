<template>
    <body>
        <nav class="navbar">
            <router-link to="/demodrop">
              <img src="@/images/header.png" alt="FELDTED HQ" class="logo">
            </router-link>
          </nav>
      
        <div class="termsofuse">
            <div class="grid-center">
                <div class="gridcell">
                    <article class="html">
                        <h1>TERMS OF USE</h1>
                        <p>
                            Welcome to FELDTED HQ Demo Drop, where we offer a unique opportunity for aspiring artists to showcase their talent. Here's what you need to know before uploading your track(s):
                        </p>
                        <ol>
                            <li>
                                We receive a plethora of demo tracks, and while we can't guarantee a release for every submission, we assure you that our A&R team will give each track a thorough listen.
                            </li>
                            <li>
                                By submitting your demo track, you grant us a non-exclusive, royalty-free, perpetual, worldwide, and irrevocable right to store and share it during our demo drop listening sessions. Rest assured, we won't sell or transfer your track without a formal agreement.
                            </li>
                            <li>No contracts or licenses are required upon submission. If we find your track compelling, we'll reach out to discuss a potential release offer.</li>
                            <li>
                                If you've previously submitted your demo to another label, be mindful of any rights or options you may have inadvertently relinquished. We adhere strictly to industry terms and conditions and cannot release tracks that are already under contractual obligations.
                            </li>
                            <li>
                                Should you not hear from us within three months, consider your track not selected for release. Feel free to explore other avenues for showcasing your music.
                            </li>
                            <li>
                                Help keep the submission process efficient by refraining from submitting the same track multiple times. Let's clear the path for fellow aspiring producers.
                            </li>
                            <li>
                                Your personal information is treated with utmost confidentiality. We'll only use it to communicate with you and won't share or distribute it to third parties.
                            </li>
                        </ol>
                        <p>
                            To expedite the process, please ensure to complete the form when creating your account. We look forward to discovering the next wave of talent with you at FELDTED HQ Demo Drop.
                        </p>
                    </article>
                    <button class="btn"><a href="/" class="bt">To Login</a></button>
                </div>
            </div>
        </div>

        <footer class="footer">
            <div class="layout">
                <div class="grid">
                    <div class="gridcell">
                        <small class="footer-link">
                            <a class="footer-links" href="/">feldtedhq.com.np</a>
                            <a class="footer-links" href="/help">Help</a>
                            <a class="footer-links" href="/privacy-policy">Privacy & Cookie Policy</a>
    
                        </small>
                    </div>
                </div>
            </div>
        </footer>


    </body>
</template>

<style scoped>
.navbar {
    background-image: url('@/images/noise-black.jpg');
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    background-color: transparent; 
  }
  
  .logo {
    width: 40%;
    height: auto; 
    cursor: pointer;
    margin-top:0.72rem;

  }
  .logo:hover{
    transition: ease-in-out 0.3s;
  }

.termsofuse{
  max-width: 90rem;
  margin: 0 auto;
  padding: 0 2rem;
  margin-top: 2rem;
}
.grid-center{
    display: block;
  list-style: none;
  padding: 0;
  margin: 0 0 0 -2rem;
  font-size: 0;
  text-align: center;
}
.gridcell{
    width: 66.66666667%;
    display: inline-block;
  padding: 0 0 0 2rem;
  margin: 0;
  vertical-align: top;
  font-size: 0.95rem;
}
.article {
    padding: 0 0 .75rem;
    display: block;
    color: black;
  }
  .article h1{
    margin-top: 2rem;
    text-align: center;
  }
   li{
    line-height: 1.5;
    margin: 0 0 1em;
  position: relative;
  text-align: left;
  }

  .btn {
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 5rem;
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
  .bt{
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: inherit;
    text-transform: uppercase;
  }

  /*footer*/
  .footer{
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
  .gridcell{
    width: 66.66666667%;
    display: inline-block;
  padding: 0 0 0 2rem;
  margin: 0;
  vertical-align: top;
  font-size: 1rem;
  }
  .footer-link{
  color: rgb(0, 0, 0);
  display: flex;
  padding-top: 0.6rem;
  border-top: 1px solid rgba(0, 0, 0, 0.363);
  justify-content: space-between;
  font-size: 87%;
  font-weight: inherit;
  text-transform: uppercase;
  text-decoration: none
  }
 .footer-links{
    color: rgb(0, 0, 0);
    display: flex;
    justify-content: space-between;
    font-size: 87%;
    font-weight: inherit;
    text-transform: uppercase;
    text-decoration: none
  
  }
  @media (max-width: 767px){
    .gridcell {
        display: inline-block;
        width: 100%;
        padding: 0 0 0 2rem;
        margin: 0;
        vertical-align: top;
        font-size: 1rem;
        box-sizing: border-box;
      }
    .footer-link{
        color: rgb(0, 0, 0);
        display: flex;
        padding-top: 1rem;
        border-top: 1px solid rgba(0, 0, 0, 0.363);
        justify-content: space-between;
        
    }
}      

</style>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterBar from '@/components/FooterBar.vue';

export default {
    name:'TermsUse',
    component:{
        NavBar, FooterBar
    },
    data() {
    return {
      pageTitle: 'Terms of Use - FELDTED HQ'
    };
  },
  mounted() {
    document.title = this.pageTitle;
  }
}
</script>