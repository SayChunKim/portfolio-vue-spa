<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
    <div class="w-100">
      <h2 class="mb-5">Skills</h2>

      <div class="subheading mb-3">Front-End</div>
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
          <i class="fab fa-sass"></i>
        </li>
        <li class="list-inline-item">
          <i class="fab fa-less"></i>
        </li>
        <li class="list-inline-item">
          <i class="fab fa-grunt"></i>
        </li>
      </ul>
      <div class="subheading mb-3">Back-End</div>
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
      <div class="subheading mb-3">Frameworks</div>
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
      <div class="subheading mb-3">Workflow</div>
      <ul class="fa-ul mb-0">
        <li>
          <i class="fa-li fa fa-check"></i>
          Mobile-First, Responsive Design
        </li>
        <li>
          <i class="fa-li fa fa-check"></i>
          Cross Browser Testing &amp; Debugging
        </li>
        <li>
          <i class="fa-li fa fa-check"></i>
          Cross Functional Teams
        </li>
        <li>
          <i class="fa-li fa fa-check"></i>
          Agile Development &amp; Scrum
        </li>
      </ul>
    </div>
  </section>
</template>
<style scoped>
.icon {
  filter: grayscale(100%);
  transition: filter 200ms linear;
}
.icon:hover {
  filter: grayscale(0);
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
};
</script>

<style>
</style>
