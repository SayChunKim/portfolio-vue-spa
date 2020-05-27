/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

import { register } from 'register-service-worker';
import Vue from 'vue';

// eslint-disable-next-line no-unused-vars
let refreshing;
if (process.env.NODE_ENV === 'production') {
  register('/service-worker.js', {
    registrationOptions: { scope: './' },
    ready(registration) {
      console.log('Service worker is active.');
    },
    registered(registration) {
      console.log('Service worker has been registered.');
    },
    cached(registration) {
      console.log('Content has been cached for offline use.');
    },
    updatefound(registration) {
      console.log('New content is downloading.');
    },
    updated(registration) {
      console.log('New content is available; please refresh.');
      (document.getElementById('snackbar')).classList.add('show');
    },
    offline() {
      console.log('No internet connection found. App is running in offline mode.');
    },
    error(error) {
      console.error('Error during service worker registration:', error);
    },
  });
}
