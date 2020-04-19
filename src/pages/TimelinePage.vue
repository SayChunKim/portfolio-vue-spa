<template>
  <div>
    <section id="timeline">
      <h1>Experience Timeline</h1>
      <p
        class="leader"
      >Going Beyond Usual Resume Style</p>
      <div class="demo-card-wrapper">
        <div class="demo-card demo-card--step1">
          <div class="head">
            <div class="number-box">
              <span>01</span>
            </div>
            <h2>
              <span class="small">Android Recognized Contributor</span> XDA-Developers
            </h2>
          </div>
          <div class="body">
            <p>Explore, help communities in Android Custom Development, such
                as ROM, frameworks and OS libraries
            </p>
            <img src="/img/timeline/xda_1.jpg" alt="XDA Recognized Contributor" />
          </div>
        </div>

        <div class="demo-card demo-card--step2">
          <div class="head">
            <div class="number-box">
              <span>02</span>
            </div>
            <h2>
              <span class="small">Intern</span> Fusionex International
            </h2>
          </div>
          <div class="body">
            <p>Mobile Development Team. Involved in SunwayPals Loyalty Programme (Android &amp; iOS)</p>
            <img src="/img/timeline/fusionex_1.jpg" alt="Fusionex Intern" />
          </div>
        </div>

        <div class="demo-card demo-card--step3">
          <div class="head">
            <div class="number-box">
              <span>03</span>
            </div>
            <h2>
              <span class="small">Google Student Ambassador (MY)</span> Google Student Ambassador
            </h2>
          </div>
          <div class="body">
            <p>An interviewed role that acts as liaison between Universities and Google.
            Learnt skills of event organizing and technical along the period.</p>
            <img src="/img/timeline/gsa_3.jpg" alt="GSA" />
          </div>
        </div>

        <div class="demo-card demo-card--step4">
          <div class="head">
            <div class="number-box">
              <span>04</span>
            </div>
            <h2>
              <span class="small">Co-Organizer</span> Google Developers Group KL
            </h2>
          </div>
          <div class="body">
            <p>Event Organizer, Asset Designer. And Technical Speakers for Firebase and PWA</p>
                        <img src="/img/timeline/gdg_4.jpg" alt="GDG Kuala Lumpur" />

          </div>
        </div>

        <div class="demo-card demo-card--step5">
          <div class="head">
            <div class="number-box">
              <span>05</span>
            </div>
            <h2>
              <span class="small">Web/Mobile Freelance Dev</span> Multiple companies
            </h2>
          </div>
          <div class="body">
            <p>Travelling around, hired for development projects, self-enhancement hacking journey.</p>
            <img src="/img/timeline/self_4.jpg" alt="Freelance Slacking" />
          </div>
        </div>
          <div class="demo-card demo-card--step6">
          <div class="head">
            <div class="number-box">
              <span>06</span>
            </div>
            <h2>
              <span class="small">Tech Lead (Current)</span> Havenice Sdn. Bhd
            </h2>
          </div>
          <div class="body">
            <p>Cofounder for Digital Solutions and provide optimal efficiency according client's needs.
                Have a Nice collaboration is our ideal concept to get things done.</p>
            <img src="/img/timeline/havenice_6.jpg" alt="Havenice" />
          </div>
        </div>
      </div>
       <h5 class="leader">And here we are !</h5>
    </section>
  </div>
</template>
<script>
export default {
  name: 'timeline',
};
</script>
<style scoped>
/* Media Queries */
/* Card sizing */
/* Colors */
/* Calculations */
/* Placeholders */
@media (min-width: 1300px) {
  #timeline .demo-card:nth-child(odd) .head::after, #timeline .demo-card:nth-child(even) .head::after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
  }

  #timeline .demo-card:nth-child(odd) .head::before, #timeline .demo-card:nth-child(even) .head::before {
    position: absolute;
    content: "";
    width: 9px;
    height: 9px;
    background-color: #bdbdbd;
    border-radius: 9px;
    box-shadow: 0px 0px 2px 8px #f7f7f7;
  }
     #timeline .demo-card:nth-child(6) .head::before{
    background-color: #e74040;
  }
}
/* Some Cool Stuff */
.demo-card:nth-child(1) {
  order: 1;
}

.demo-card:nth-child(2) {
  order: 4;
}

.demo-card:nth-child(3) {
  order: 2;
}

.demo-card:nth-child(4) {
  order: 5;
}

.demo-card:nth-child(5) {
  order: 3;
}

.demo-card:nth-child(6) {
  order: 6;
}


/* Border Box */
* {
  box-sizing: border-box;
}

/* Fonts */

#timeline {
  padding: 100px 0;
  background: #f7f7f7;
  border-top: 1px solid rgba(191, 191, 191, 0.4);
  border-bottom: 1px solid rgba(191, 191, 191, 0.4);
}
#timeline h1 {
  text-align: center;
  font-size: 3rem;
  font-weight: 200;
  margin-bottom: 20px;
}
#timeline .leader {
  text-align: center;
  max-width: 90%;
  margin: auto;
  margin-bottom: 45px;
}
#timeline h5.leader{
    background: #e4cc8e;
    padding: 15px 32px;
    border-radius: 16px;
    color: #7d7a7a;
        max-width: 320px;
}
#timeline .demo-card-wrapper {
  position: relative;
  margin: auto;
}
@media (min-width: 1300px) {
  #timeline .demo-card-wrapper {
    display: flex;
    flex-flow: column wrap;
    width: 1170px;
    height: 1650px;
    margin: 0 auto;
  }
}
#timeline .demo-card-wrapper::after {
  z-index: 1;
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  border-left: 1px solid rgba(191, 191, 191, 0.4);
}
@media (min-width: 1300px) {
  #timeline .demo-card-wrapper::after {
    border-left: 1px solid #cbb67e;
  }
}
#timeline .demo-card {
  position: relative;
  display: block;
  margin: 10px auto 80px;
  max-width: 94%;
  z-index: 2;
}
@media (min-width: 480px) {
  #timeline .demo-card {
    max-width: 60%;
    box-shadow: 0px 1px 22px 4px rgba(0, 0, 0, 0.07);
  }
}
@media (min-width: 720px) {
  #timeline .demo-card {
    max-width: 60%;
  }
}
@media (min-width: 1300px) {
  #timeline .demo-card {
    max-width: 450px;
    margin: 90px;
    margin-top: 45px;
    margin-bottom: 45px;
  }
  #timeline .demo-card:nth-child(odd) {
    margin-right: 45px;
  }
  #timeline .demo-card:nth-child(odd) .head::after {
    border-left-width: 15px;
    border-left-style: solid;
    left: 100%;
  }
  #timeline .demo-card:nth-child(odd) .head::before {
    left: 491.5px;
  }
  #timeline .demo-card:nth-child(even) {
    margin-left: 45px;
  }
  #timeline .demo-card:nth-child(even) .head::after {
    border-right-width: 15px;
    border-right-style: solid;
    right: 100%;
  }
  #timeline .demo-card:nth-child(even) .head::before {
    right: 489.5px;
  }
  #timeline .demo-card:nth-child(2) {
    margin-top: 180px;
  }
}
#timeline .demo-card .head {
  position: relative;
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: 400;
}
#timeline .demo-card .head .number-box {
  /* display: inline; */
  float: left;
  margin: 15px;
  padding: 10px;
  font-size: 35px;
  line-height: 35px;
  font-weight: 600;
  background: rgba(0, 0, 0, 0.17);
}
#timeline .demo-card .head h2 {
  text-transform: uppercase;
  font-size: 1.0rem;
  font-weight: inherit;
  letter-spacing: 2px;
  margin: 0;
  padding-bottom: 6px;
  line-height: 1rem;
  color:white;
}
@media (min-width: 480px) {
  #timeline .demo-card .head h2 {
    font-size: 130%;
    line-height: 1.2rem;
  }
}
#timeline .demo-card .head h2 span {
  display: block;
  font-size: 0.6rem;
  margin: 0;
}
@media (min-width: 480px) {
  #timeline .demo-card .head h2 span {
    font-size: 0.8rem;
  }
}
#timeline .demo-card .body {
  background: #fff;
  border: 1px solid rgba(191, 191, 191, 0.4);
  border-top: 0;
  padding: 15px;
}

#timeline .demo-card .body p {
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 15px;
}
#timeline .demo-card .body img {
  display: block;
  width: 100%;
  border-radius: 8px;
}
#timeline .demo-card--step1,  #timeline .demo-card--step3,#timeline .demo-card--step5 {
  background-color: #515796;
}
#timeline .demo-card--step1 .head::after, #timeline .demo-card--step3 .head::after,
#timeline .demo-card--step5 .head::after {
  border-color: #515796;
}
#timeline .demo-card--step2, #timeline .demo-card--step4 {
  background-color: #cbb67e;
}
#timeline .demo-card--step2 .head::after, #timeline .demo-card--step4 .head::after,
 #timeline  {
  border-color: #cbb67e;
}
/* #timeline .demo-card--step3 {
  background-color: #ce43eb;
} */
/* #timeline .demo-card--step3 .head::after {
  border-color: #ce43eb;
} */
/* #timeline .demo-card--step4 {
  background-color: #4d92eb;
}
#timeline .demo-card--step4 .head::after {
  border-color: #4d92eb;
} */
#timeline .demo-card--step6 {
  background-color:#e74040;
}
#timeline .demo-card--step6 .head::after {
  border-color: #e74040;
}

</style>
