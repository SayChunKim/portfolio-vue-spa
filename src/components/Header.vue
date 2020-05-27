<template>
 <!-- eslint-disable max-len -->
 <div>
   <header></header>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" :class="{elevated: scrollPosition > 0}" id="sideNav">
    <div class="navbar-brand js-scroll-trigger">
      <span class="d-block d-lg-none">SC Kim</span>
      <span class="d-none d-lg-block">
        <!-- USE IT <img class="img-fluid img-profile rounded-circle mx-auto mb-2"
        src="https://niochi.com/img/logo_niochi_color.png" alt />-->
        <!-- <a href="/"> -->
          <img id="logo-bg" class="img-fluid mx-auto mb-2"
           src="../assets/images/sc_logov2_140x140.png" width="140" height="140" alt="Logo" />
        <!-- </a> -->
      </span>
    </div>
    <!-- <button
      class="navbar-toggler"
      type="button"
      @click="toggleNavbar()"
    >
    <span class="navbar-toggler-icon"></span>
    </button> -->
    <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->
      <div>
    <b-button v-b-toggle.sidebar-backdrop class="d-lg-none" id="menuBtn" aria-label="menu-button-mobile"><i class="fa fa-bars"></i></b-button>
    <b-sidebar
      id="sidebar-backdrop"
      title="Menu"
      backdrop
      shadow=""
    >
      <div class="px-0 py-2">
        <ul class="list-unstyled">
        <li class="nav-item">
          <router-link to="/" class="nav-link js-scroll-trigger">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/timeline" class="nav-link js-scroll-trigger">Experience</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/skills" class="nav-link js-scroll-trigger">Skills</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/interests" class="nav-link js-scroll-trigger">Interests</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/awards" class="nav-link js-scroll-trigger">Awards</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/keynotes" class="nav-link js-scroll-trigger">Keynotes</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link js-scroll-trigger">Contact</router-link>
        </li>
        </ul>
        </div>
    </b-sidebar>
  </div>
    <!-- <div class=" navbar-collapse" id="navbarSupportedContent"> -->
      <b-collapse id="nav-collapse" is-nav>
      <!-- <ul id="mainMenu" class="navbar-nav" v-bind:class="{'menu-active': show,'menu': !show}"> -->
        <b-navbar-nav>
        <li class="nav-item">
          <router-link to="/" class="nav-link js-scroll-trigger">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/timeline" class="nav-link js-scroll-trigger">Experience</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/skills" class="nav-link js-scroll-trigger">Skills</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/interests" class="nav-link js-scroll-trigger">Interests</router-link>
          <ul v-if="this.$route.path == '/sc-movies' || this.$route.path == '/sc-movies/' ">
            <router-link to="/sc-movies" class="nav-link js-scroll-trigger">Movies</router-link>
          </ul>
        </li>
        <li class="nav-item">
          <router-link to="/awards" class="nav-link js-scroll-trigger">Awards</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/keynotes" class="nav-link js-scroll-trigger">Keynotes</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link js-scroll-trigger">Contact</router-link>
        </li>
      <!-- </ul> -->
    <!-- </div> -->
        </b-navbar-nav>
      </b-collapse>
  </nav>
  </div>
</template>
<script>
export default {
  name: 'HeaderComponent',
  props: {
    msg: String,
  },
  data() {
    return {
      show: false,
      scrollPosition: null,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show;
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
};
</script>

<style scoped>
a.nav-link.js-scroll-trigger.router-link-exact-active.router-link-active{
  color:white;
}

#sideNav{
  transition:all 100ms ease;
}
.navbar-dark .navbar-toggler{
  border-color:transparent;
}
@media only screen and (max-width: 991px){
.elevated{
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
}
  #mainMenu{
 transition:all 200ms ease;
 -webkit-transition:all 200ms ease;
 max-height:360px;
}
.menu{
height: 0;
    visibility: hidden;
    opacity: 0;
}
.menu-active {
    height: 100%;
    visibility: visible;
    opacity: 1;
}
.b-sidebar-body a.nav-link.js-scroll-trigger.router-link-exact-active.router-link-active{
    color: #fff !important;
    background: #0d1679;
    margin-right: 1rem;
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
}
}
#menuBtn{
  background: #0d1679;
    border: none;
    font-size: 1.5rem;
}
</style>
