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
      </span>
    </div>
      <div>
    <b-button v-b-toggle.sidebar-backdrop class="d-lg-none" id="menuBtn" aria-label="menu-button-mobile"
    v-if="$route.path !== '/404/' && $route.path !== '/404'"><i class="fa fa-bars"></i></b-button>
    <b-sidebar
      id="sidebar-backdrop"
      :title="$t('menu.menu_drawer_title')"
      backdrop
      shadow=""
      v-if="$route.path !== '/404/' && $route.path !== '/404'"
    >
      <div class="px-0 py-2">
        <ul class="list-unstyled">
        <li class="nav-item">
          <router-link :to="'/'+routeParam" class="nav-link js-scroll-trigger">{{$t('menu.menu_about_title')}}</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="'/'+routeParam+'/timeline'" class="nav-link js-scroll-trigger">{{$t('menu.menu_experience_title')}}</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="'/'+routeParam+'/skills'" class="nav-link js-scroll-trigger">{{$t('menu.menu_skills_title')}}</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="'/'+routeParam+'/interests'" class="nav-link js-scroll-trigger">{{$t('menu.menu_interests_title')}}</router-link>
          <ul class="list-unstyled pl-3" v-if="this.$route.path == '/sc-movies' || this.$route.path == '/sc-movies/' ">
            <router-link to="/sc-movies" class="nav-link js-scroll-trigger">Movies</router-link>
          </ul>
        </li>
        <li class="nav-item">
          <router-link :to="'/'+routeParam+'/awards'" class="nav-link js-scroll-trigger">{{$t('menu.menu_awards_title')}}</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="'/'+routeParam+'/keynotes'" class="nav-link js-scroll-trigger">{{$t('menu.menu_keynotes_title')}}</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link js-scroll-trigger">{{$t('menu.menu_contact_title')}}</router-link>
        </li>
        </ul>
        <b-button-group class="pl-3">
      <a v-for="(lang, i) in langs" :key="`Lang${i}`" :href="'/'+lang.code+'/'" class="btn btn-secondary mr-1">
      {{lang.name}}</a>
    </b-button-group>
        </div>
    </b-sidebar>
  </div>
    <!-- <div class=" navbar-collapse" id="navbarSupportedContent"> -->
      <b-collapse id="nav-collapse" is-nav>
      <!-- <ul id="mainMenu" class="navbar-nav" v-bind:class="{'menu-active': show,'menu': !show}"> -->
        <b-navbar-nav v-if="$route.path !== '/404/' && $route.path !== '/404'">
        <li class="nav-item">
          <router-link :to="'/'+routeParam" class="nav-link js-scroll-trigger">{{$t('menu.menu_about_title')}}</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="'/'+routeParam+'/timeline'" class="nav-link js-scroll-trigger">{{$t('menu.menu_experience_title')}}</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="'/'+routeParam+'/skills'" class="nav-link js-scroll-trigger">{{$t('menu.menu_skills_title')}}</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="'/'+routeParam+'/interests'" class="nav-link js-scroll-trigger">{{$t('menu.menu_interests_title')}}</router-link>
          <ul class="list-unstyled pl-3" v-if="this.$route.path == '/sc-movies' || this.$route.path == '/sc-movies/' ">
            <router-link to="/sc-movies" class="nav-link js-scroll-trigger">Movies</router-link>
          </ul>
        </li>
        <li class="nav-item">
          <router-link :to="'/'+routeParam+'/awards'" class="nav-link js-scroll-trigger">{{$t('menu.menu_awards_title')}}</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="'/'+routeParam+'/keynotes'" class="nav-link js-scroll-trigger">{{$t('menu.menu_keynotes_title')}}</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link js-scroll-trigger">{{$t('menu.menu_contact_title')}}</router-link>
        </li>
        <li class="nav-item">
     <b-button-group class="mt-1" vertical>
      <a v-for="(lang, i) in langs" :key="`Lang${i}`" :href="'/'+lang.code+'/'" class="btn btn-secondary mt-2">
      {{lang.name}}</a>
    </b-button-group>
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
      routeParam: this.$route.params.lang,
      scrollPosition: null,
      langs: [{ name: 'ENG', code: 'en' }, { name: '日本語', code: 'ja' }, { name: '简体中文', code: 'zh-CN' }],
    };
  },
  created() {
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
.mt-1.btn-group-vertical .btn-secondary {
    background: transparent;
    border-color: #fff;
}
.mt-1.btn-group-vertical .btn-secondary:hover {
    background:white;
    color:#0d1679;
}

.pl-3.btn-group .btn-secondary {
    background: #0d1679;
    color:white;
}
.pl-3.btn-group .btn-secondary:hover {
    background:white;
    color:#0d1679;
    border-color: #0d1679;
}
</style>
