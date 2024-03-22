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
                        <h1>Privacy & Cookie Policy</h1>
                        <h1>PRIVACY POLICY OF FELDTED HQ B.V.</h1>
                        <p>FELDTED HQ ("FELDTED") utilizes your provided personal details solely for the purposes specified and for the services offered by FELDTED.</p>
                        <br>
                        <hr style="color:rgba(0, 0, 0, 0.363);">
                        <br>
                    </article>
                    <h4 style="text-align: left; color:black">How FELDTED Uses Your Personal Details:</h4>
                    <p style="text-align: left;">
                        Your privacy is paramount to us. This privacy policy elucidates how we collect, store, utilize, and disclose your details when utilizing feldtedhq.com ("Website"), our mobile and desktop apps (the “Apps”), and all associated sites, resources, apps, data, software, and other services provided by FELDTED (the "Services"). This policy outlines:
                    </p><br>
                    <ul>
                        <li>FELDTED's fundamental principles regarding data collection and privacy.</li>
                        <li>The information collected by FELDTED.</li>
                        <li>How FELDTED utilizes your details.</li>
                        <li>How FELDTED shares your details.</li>
                        <li>Visitors' choices regarding their own details.</li> 
                        <li>How to reach out to FELDTED concerning privacy concerns.</li>
                    </ul>
                    <p style="text-align: left;">This privacy policy aims to provide full transparency about our data protection measures. If you have any queries about this policy, please email us at privacy@feldtedhq.com.np</p>
                    <br>
                    <hr style="color:rgba(0, 0, 0, 0.363);">
                    <br>
                    <p style="text-align: left;">
                        By utilizing the Website, the Apps, or any of the Services, particularly by creating an account or submitting your details, you consent to the use of your details as outlined in this privacy policy. Please review this policy carefully and consider whether you agree with our usage and disclosure of your details. If you disagree with any provisions of this policy, refrain from using the Website, the Apps, or the Services. For questions or comments, contact us at privacy@feldtedhq.com.np
                        <br> <br>
                        For the rest of the text, please refer to the original document as it contains detailed information about data collection, usage, sharing, cookies, user controls, and other pertinent details regarding privacy and cookie policies.
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
        name:'PrivacyPolicy',
        data() {
    return {
      pageTitle: 'Privacy Policy - FELDTED HQ'
    };
  },
  mounted() {
    document.title = this.pageTitle;
  }
    }
    
    
    </script>
    
    