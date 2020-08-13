import Vue from 'vue';
import VueRouter from 'vue-router';
import AboutPage from '@/pages/AboutPage.vue';
import SkillsPage from '@/pages/SkillsPage.vue';
import ContactPage from '@/pages/ContactPage.vue';
import InterestsPage from '@/pages/InterestsPage.vue';
import AwardPage from '@/pages/AwardPage.vue';
import TimelinePage from '@/pages/TimelinePage.vue';
import SuccessPage from '@/pages/SuccessPage.vue';
import SlidePage from '@/pages/SlidePage.vue';
import Error404Component from '@/pages/Error404.vue';
// import MoviesPage from '@/pages/MoviesPage.vue';

Vue.use(VueRouter);
// const locale = this.$route.params.lang || 'en';
const routes = [
  {
    path: '/:lang(en|ja|ZH-cn)',
    name: 'Lang',
    component: { render(c) { return c('router-view'); } },
    children: [
      {
        path: '',
        name: 'il8n | About',
        component: AboutPage,
      },
      {
        path: 'timeline',
        name: 'il8n | Experience',
        component: TimelinePage,
      },
      {
        path: 'skills',
        name: 'il8n | Skills',
        component: SkillsPage,
      },
      {
        path: 'interests',
        name: 'il8n | Interests',
        component: InterestsPage,
      },
      {
        path: 'awards',
        name: 'il8n | Awards',
        component: AwardPage,
      },
      {
        path: 'keynotes',
        name: 'il8n | Keynotes',
        component: SlidePage,
      },
      // {
      //   path: 'contact',
      //   name: 'il8n | Contact',
      //   component: ContactPage,
      // },
    ],
  },
  {
    path: '/',
    name: 'Home',
    redirect: '/en/',
  },
  {
    path: '/timeline',
    name: 'Timeline',
    redirect: '/en/timeline/',
    // component: TimelinePage,
  },
  {
    path: '/skills',
    name: 'Skills',
    redirect: '/en/skills',
    // component: SkillsPage,
  },
  {
    path: '/interests',
    name: 'Interests',
    redirect: '/en/interests',
    // component: InterestsPage,
  },
  {
    path: '/awards',
    name: 'awards',
    redirect: '/en/awards',
    // component: AwardPage,
  },
  {
    path: '/success',
    name: 'success',
    component: SuccessPage,
  },
  {
    path: '/contact',
    name: 'Contact',
    // redirect: '/en/contact',
    component: ContactPage,
  },
  {
    path: '/keynotes',
    name: 'Slides / Keynotes',
    redirect: '/en/keynotes',
    // component: SlidePage,
  },
  {
    path: '/404',
    name: 'Error',
    component: Error404Component,
  },
  {
    path: '*',
    redirect: '/404',
  },
  // {
  //   path: '/sc-movies',
  //   name: 'SC Movies',
  //   component: MoviesPage,
  //   meta: {
  //     title: 'Movies / SC Kim',
  //     metaTags: [
  //       {
  //         name: 'description',
  //         content: 'Tech Movies List by SC Kim with TMDB API',
  //       },
  //       {
  //         property: 'og:description',
  //         content: 'Tech Movies List by SC Kim with TMDB API',
  //       },
  //       {
  //         name: 'keywords',
  //         content: 'SC Kim, Portfolio, VueJs, TMDB, Keynotes, Slides, Mobile, Web Developer, Movies',
  //       },
  //     ],
  //   },
  // },
];
// const locale = window.location.pathname.replace(/^\/([^/]+).*/i, '$1');
const router = new VueRouter({
  mode: 'history',
  // base: (locale.trim().length && locale !== '/') ? `/${locale}` : undefined,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});

// eslint-disable-next-line consistent-return
router.beforeEach((to, from, next) => {
  const { lang } = to.params;
  document.querySelector('html').setAttribute('lang', lang);
  next();
});

export default router;
