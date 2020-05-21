<template>
  <div class="container-fluid p-0 justify-content-center d-flex">
    <section class="resume-section p-3 p-lg-5 d-flex align-items-center text-center" id="about">
      <!-- <div class="w-100"> -->
      <b-row>
        <b-col cols="12" class="mb-4">
          <img
            id="logo-xs"
            src="../assets/images/sc_logov2_colored_120x120.png"
            alt
            class="d-block d-sm-none"
          />
          <h1 class="mb-8">
            Hello from
            <span class="text-primary">SC Kim</span>
          </h1>
          <div class="subheading mb-5">
            Malaysia, Kuala Lumpur·
            <a href="mailto:saychunkim@gmail.com">saychunkim@gmail.com</a>
          </div>
          <p class="lead mb-5">
            'Bit' Sense of Design along Programming,
            Full Stack from Front End Development,
            Learning necessary ingredients.
            Love Learning New Technologies esp from Open Source Communities
          </p>
          <div class="social-icons mb-4">
            <a
              href="https://www.linkedin.com/in/say-chun-kim-99607398/"
              rel="noopener noreferrer"
              target="_blank" aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/SayChunKim" rel="noopener noreferrer" target="_blank" aria-label="github">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://twitter.com/saychun_kim" rel="noopener noreferrer" target="_blank" aria-label="twitter">
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.facebook.com/johnny.k.sc"
              rel="noopener noreferrer"
              target="_blank" aria-label="facebook"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://medium.com/@saychun_kim"
              rel="noopener noreferrer"
              target="_blank" aria-label="medium"
            >
              <i class="fab fa-medium"></i>
            </a>
          </div>
        </b-col>

        <b-col cols="12">
          <h2 class="mt-8 mb-2">My Projects</h2>
          <p class="mb-4">These're where my efforts poured into</p>
          <carousel-3d :disable3d="true" :space="370" :height="251" :controls-visible="true">
            <slide :index="0">
              <img src="/img/works/mhd_estore.jpg" alt="MyHealthDriver Estore"/>
              <p><a href="https://myhealthdriver.com/estore" target="_blank" rel="noopener noreferrer">
              MyHealthDriver EStore (Opencart)</a></p>
              </slide>
              <slide :index="1">
              <img src="/img/works/coldstorage.jpg" alt="Cold Storage"/>
              <p><a href="https://coldstorage.com.my/" target="_blank" rel="noopener noreferrer">
              Cold Storage (Laravel)</a></p>
              </slide>
            <slide :index="2">
              <img src="https://saychunkim.github.io/legacy_v1/images/pconnex.jpg" alt="PConnex"/>
              <p>PConnex (Firebase)</p>
              </slide>
            <slide :index="3">
              <img src="https://saychunkim.github.io/legacy_v1/images/partayfinder.jpg" alt="Partay Finder"/>
              <p>PartayFinder (Firebase)</p>
            </slide>
            <slide :index="4">
              <img src="https://saychunkim.github.io/legacy_v1/images/myxlab.jpg" alt="MyxLab Android AR"/>
              <p><a href="https://play.google.com/store/apps/details?id=my.myxlab.wristbandar"
              target="_blank" rel="noopener noreferrer">
              MyXLab AR (Android)</a></p>
            </slide>
            <slide :index="5">
              <img src="/img/works/ioxKL2016.jpg" alt="IOX KL 2016 Asset Designs"/>
              <p>    <a href="https://ioxkl2016.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
              Google I/O Extended KL (Asset Designs)</a></p>
            </slide>
          </carousel-3d>
        </b-col>
      </b-row>
    </section>

    <hr class="m-0" />
  </div>
</template>

<script>
export default {
  name: 'about',
};
</script>
<style scoped>
#logo-xs {
  max-width: 120px;
  width: 100%;
  margin: 16px auto;
}
.carousel-3d-slide{
  border:0;
  border-radius: 0.5rem;
}
.carousel-3d-slide img{
  display: block;
}
.carousel-3d-slide p{
    position: relative;
    top: -2.4rem;
    background: #0d1679;
    text-align: center;
    padding: 0.5rem;
    color: white;
    opacity:0.85;
    transition:box-shadow 100ms ease;
}
.carousel-3d-slide p>a{
    text-decoration: none;
    color:white;
    transition:200ms color ease;
}
.carousel-3d-slide p>a:hover{
    color:#cbb67e;
}
.carousel-3d-slide.current{
box-shadow:0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)
}

</style>
