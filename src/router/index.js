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
import MoviesPage from '@/pages/MoviesPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'About',
    component: AboutPage,
    meta: {
      title: 'Welcome / SC Kim',
      metaTags: [
        {
          name: 'description',
          content: 'Welcome to SC Kim Portfolio',
        },
        {
          property: 'og:description',
          content: 'Welcome to SC Kim Portfolio',
        },
        {
          name: 'keywords',
          content: 'SC Kim, Portfolio, VueJS, Mobile, Web Developer,',
        },
      ],
    },
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: TimelinePage,
    meta: {
      title: 'Timeline / SC Kim',
      metaTags: [
        {
          name: 'description',
          content: 'Experience Timeline | SC Kim',
        },
        {
          property: 'og:description',
          content: 'Experience Timeline | SC Kim',
        },
        {
          name: 'keywords',
          content: 'SC Kim, Portfolio, VueJs, Timeline, Mobile, Web Developer, Timeline',
        },
      ],
    },
  },
  {
    path: '/skills',
    name: 'Skills',
    component: SkillsPage,
    meta: {
      title: 'Skills / SC Kim',
      metaTags: [
        {
          name: 'description',
          content: 'Skills | SC Kim',
        },
        {
          property: 'og:description',
          content: 'Technical Skills | SC Kim',
        },
        {
          name: 'keywords',
          content: 'SC Kim, Portfolio, VueJs, Timeline, Mobile, Web Developer, Skills, Android, iOS, Javascript, PHP',
        },
      ],
    },
  },
  {
    path: '/interests',
    name: 'Interests',
    component: InterestsPage,
    meta: {
      title: 'Interest / SC Kim',
      metaTags: [
        {
          name: 'description',
          content: 'Interest | SC Kim',
        },
        {
          property: 'og:description',
          content: 'Interest | SC Kim',
        },
        {
          name: 'keywords',
          content: 'SC Kim, Portfolio, VueJs, Interest, Mobile, Web Developer',
        },
      ],
    },
  },
  {
    path: '/awards',
    name: 'awards',
    component: AwardPage,
  },
  {
    path: '/success',
    name: 'success',
    component: SuccessPage,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
    meta: {
      title: 'Contact / SC Kim',
      metaTags: [
        {
          name: 'description',
          content: "I won't bite, give me a ping!",
        },
        {
          property: 'og:description',
          content: "I won't bite, give me a ping!",
        },
        {
          name: 'keywords',
          content: 'SC Kim, Portfolio, VueJs, Contact Me, Mobile, Web Developer',
        },
      ],
    },
  },
  {
    path: '/keynotes',
    name: 'Slides / Keynotes',
    component: SlidePage,
    meta: {
      title: 'Slides & Keynotes / SC Kim',
      metaTags: [
        {
          name: 'description',
          content: 'Previous presented keynotes by SC Kim',
        },
        {
          property: 'og:description',
          content: 'Previous presented keynotes by SC Kim',
        },
        {
          name: 'keywords',
          content: 'SC Kim, Portfolio, VueJs, Keynotes, Slides, Mobile, Web Developer, Slides',
        },
      ],
    },
  },
  {
    path: '/sc-movies',
    name: 'SC Movies',
    component: MoviesPage,
    meta: {
      title: 'Movies / SC Kim',
      metaTags: [
        {
          name: 'description',
          content: 'Tech Movies List by SC Kim with TMDB API',
        },
        {
          property: 'og:description',
          content: 'Tech Movies List by SC Kim with TMDB API',
        },
        {
          name: 'keywords',
          content: 'SC Kim, Portfolio, VueJs, TMDB, Keynotes, Slides, Mobile, Web Developer, Movies',
        },
      ],
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
});

// eslint-disable-next-line consistent-return
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find((r) => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find((r) => r.meta && r.meta.metaTags);
  // eslint-disable-next-line no-unused-vars
  const previousNearestWithMeta = from.matched.slice().reverse().find((r) => r.meta && r.meta.metaTags);


  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map((el) => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map((tagDef) => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach((key) => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
    .forEach((tag) => document.head.appendChild(tag));

  next();
});

export default router;
