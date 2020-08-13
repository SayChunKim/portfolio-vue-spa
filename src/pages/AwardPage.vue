<template>
  <div class="container-fluid p-0 justify-content-center d-flex">
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center text-center" id="awards">
    <div class="w-100">
      <h2 class="mb-5">{{$t('awards.title')}}</h2>
      <ul class="fa-ul mb-0">
        <li class="mb-2">
          <i class="fa-li fa fa-certificate text-warning"></i>
          Google Certified Educator GAfE (2015)
        </li>
        <li class="mb-2">
          <i class="fa-li fa fa-certificate text-warning"></i>
           Udacity x Google : Developing Android Apps (U853)
        </li>
        <li class="mb-2">
          <i class="fa-li fa fa-trophy text-warning"></i>
          UKM Honorarium Award
        </li>
        <li class="mb-2">
          <i class="fa-li fa fa-certificate text-warning"></i>
          Google Developers Group (GDG) Android Study Jam <br>  [ Android for Beginners ]
        </li>
        <li class="mb-2">
          <i class="fa-li fa fa-certificate text-warning"></i>
          Google Developers Group (GDG) Android Study Jam <br> [ Android Fundamentals ]
        </li>
        <li class="mb-2">
          <i class="fa-li fa fa-certificate text-warning"></i>
          UKM Developing Android with Firebase
        </li>
        <li class="mb-2">
          <i class="fa-li fa fa-trophy text-warning"></i>
          Google Student Ambassadors (gHeroes) <br> [ GSite Competition + Best GSA Video ]
        </li>
        <li class="mb-2">
          <i class="fa-li fa fa-certificate text-warning"></i>
          Build web apps with ReactJS (2020) <br> [OpenClassroom]
        </li>
        <li class="mb-2">
          <i class="fa-li fa fa-certificate text-warning"></i>
       Create a Web Application With Vue.js (2020) <br> [OpenClassroom]
        </li>
      </ul>
    </div>
  </section>
  </div>
</template>

<script>
export default {
  name: 'award',
  metaInfo() {
    return {
      title: this.$t('awards.meta_title'),
      meta: [{
        vmid: 'description',
        name: 'description',
        content: this.$t('awards.meta_desc'),
      }],
    };
  },
};
</script>

<style>
</style>
