<template>
<div class="container-fluid p-0 justify-content-center d-flex">
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center text-center" id="skills">
    <div class="w-100">
      <h2 class="mb-5">{{$t("skills.skills_title")}}</h2>
      <div class="subheading mb-3">{{$t("skills.front_end_title")}}</div>
      <ul class="list-inline dev-icons">
        <li class="list-inline-item">
          <i class="fab fa-html5"></i>
        </li>
        <li class="list-inline-item">
          <i class="fab fa-css3-alt"></i>
        </li>
        <li class="list-inline-item">
          <i class="fab fa-js-square"></i>
        </li>
        <li class="list-inline-item">
          <i class="fab fa-vuejs"></i>
        </li>
        <li class="list-inline-item">
          <i class="fab fa-angular"></i>
        </li>
        <li class="list-inline-item">
          <i class="fab fa-react"></i>
        </li>
        <li class="list-inline-item">
          <i class="fab fa-sass"></i>
        </li>
        <li class="list-inline-item">
          <i class="fab fa-less"></i>
        </li>
        <li class="list-inline-item">
          <i class="fab fa-grunt"></i>
        </li>
      </ul>
      <blockquote class="blockquote">
      <code>
        HTML5, CSS3, JS, VueJS, Angular, React, SASS, LESS, Grunt
      </code>
      </blockquote>
      <div class="subheading mb-3 mt-4">{{$t("skills.back_end_title")}}</div>
      <ul class="list-inline dev-icons">
        <li class="list-inline-item">
          <i class="fab fa-npm"></i>
        </li>
        <li class="list-inline-item">
          <i class="fab fa-node-js"></i>
        </li>
        <li class="list-inline-item">
          <i class="fab fa-laravel"></i>
        </li>
        <li class="list-inline-item">
          <i class="fab fa-php"></i>
        </li>
        <li class="list-inline-item">
          <img
            class="icon"
            src="https://img.icons8.com/color/480/firebase.png"
            width="50px"
            alt="firebase"
          />
        </li>
      </ul>
       <blockquote class="blockquote">
      <code>
        NPM/NodeJS, Laravel, PHP (LAMP), Firebase
      </code>
      </blockquote>
      <div class="subheading mb-3 mt-4">{{$t("skills.framework_title")}}</div>
      <ul class="list-inline dev-icons">
        <li class="list-inline-item">
          <i class="fab fa-wordpress"></i>
        </li>
        <li class="list-inline-item">
          <i class="fab fa-opencart"></i>
        </li>
        <li class="list-inline-item">
          <i class="fab fa-grav"></i>
        </li>
         <li class="list-inline-item">
          <i class="fab fa-android"></i>
        </li>
         <li class="list-inline-item">
          <i class="fab fa-apple"></i>
        </li>
      </ul>
      <blockquote class="blockquote">
      <code>
        Wordpress, Opencart, GravCMS, Android, iOS (Native or Cross Platforms)
      </code>
      </blockquote>
      <div class="subheading mb-3 mt-4">{{$t('skills.workflow.title')}}</div>
      <ul class="fa-ul mb-0">
        <li>
          <i class="fa-li fa fa-check"></i>
          {{$t('skills.workflow.point_1')}}
        </li>
        <li>
          <i class="fa-li fa fa-check"></i>
          {{$t('skills.workflow.point_2')}}
        </li>
        <li>
          <i class="fa-li fa fa-check"></i>
          {{$t('skills.workflow.point_3')}}
        </li>
        <li>
          <i class="fa-li fa fa-check"></i>
          {{$t('skills.workflow.point_4')}}
        </li>
        <li>
          <i class="fa-li fa fa-check"></i>
          {{$t('skills.workflow.point_5')}}
        </li>
      </ul>
    </div>
  </section>
  </div>
</template>
<style scoped>
.icon {
  filter: grayscale(100%);
  transition: filter 200ms linear;
}
.icon:hover {
  filter: grayscale(0);
}
code{
  color:#b20a57;
}
.blockquote{
  background: #eee;
    border-radius: 12px;
    padding: 1rem .5rem;
}
.dev-icons .list-inline-item i:hover {
    transition:color 200ms linear;
}
.fa-check:hover{
  color:#18d665;
  transition:200ms color linear;
}
</style>
<script>
export default {
  name: 'skills',
  metaInfo() {
    return {
      title: this.$t('skills.meta_title'),
      meta: [{
        vmid: 'description',
        name: 'description',
        content: this.$t('skills.meta_desc'),
      }],
    };
  },
};
</script>

<style>
</style>
