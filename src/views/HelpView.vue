<template>
<body>
    <nav class="navbar">
        <router-link to="/demodrop">
          <img src="@/images/header.png" alt="FELDTED HQ" class="logo">
        </router-link>
      </nav>

      <div class="help">
        <div class="grid-center">
            <div class="gridcell">
                <article class="html">
                    <h1>HELP</h1>
                    <p>Should you encounter any issues with your account or the platform, kindly reach out to admin@feldtedhq.com.np</p>
                    <br>
                    <br>
                </article>
                <h4 style="text-align: left; color:black">Feedback</h4>
                <p style="text-align: left;">
                    We endeavor to carefully review each submission, though we cannot assure individualized feedback for every song. The usual response time is 1-2 weeks. If you haven't received a response from us after a month, please don't be disheartened; consider submitting a different tune.
                </p>
                <br><br>
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

  /*FOOTER*/
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

.help{
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
  

</style>

<script>
export default {
    name:'HelpView',
    data() {
    return {
      pageTitle: 'Help - FELDTED HQ'
    };
  },
  mounted() {
    document.title = this.pageTitle;
  }
}

</script>

